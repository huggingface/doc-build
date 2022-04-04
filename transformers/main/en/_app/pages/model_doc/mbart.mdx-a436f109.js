import{S as E2,i as C2,s as P2,e as o,k as d,w as u,t as r,M as S2,c as a,d as t,m as l,a as s,x as m,h as i,b as c,F as e,g as h,y as f,q as g,o as _,B as k,v as O2}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-abef54e3.js";import{C as $}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as X}from"../../chunks/IconCopyLink-7a11ce68.js";function A2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function I2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function N2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function D2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function L2(E){let b,z,v,M,x,T,y,q,rt,Ce,j,Re,ke,it,be,ye,dt,Ke,J,N,Xe,se,C,O,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){b=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ce=d(),j=o("p"),Re=r("This second option is useful when using "),ke=o("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=o("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),C=o("ul"),O=o("li"),lt=r("a single Tensor with "),pe=o("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=o("code"),pt=r("model(input_ids)"),ht=d(),D=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=o("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){b=a(w,"P",{});var B=s(b);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Qe=s(x);T=i(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),y=l(ze),q=a(ze,"LI",{});var Ut=s(q);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ce=l(w),j=a(w,"P",{});var Z=s(j);Re=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Rt=s(ke);it=i(Rt,"tf.keras.Model.fit"),Rt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var Q=s(N);Xe=i(Q,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q.forEach(t),se=l(w),C=a(w,"UL",{});var de=s(C);O=a(de,"LI",{});var le=s(O);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Xt=s(pe);he=i(Xt,"input_ids"),Xt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Qt=s(K);pt=i(Qt,"model(input_ids)"),Qt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ht=s(ve);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Vt=s(Te);we=i(Vt,"model([input_ids, attention_mask, token_type_ids])"),Vt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var He=s(ie);Me=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(He,"CODE",{});var Jt=s(xe);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),He.forEach(t),de.forEach(t)},m(w,B){h(w,b,B),e(b,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,q),e(q,rt),h(w,Ce,B),h(w,j,B),e(j,Re),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,C,B),e(C,O),e(O,lt),e(O,pe),e(pe,he),e(O,ct),e(O,K),e(K,pt),e(C,ht),e(C,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(C,ut),e(C,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(b),w&&t(v),w&&t(M),w&&t(Ce),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(C)}}}function G2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function W2(E){let b,z,v,M,x,T,y,q,rt,Ce,j,Re,ke,it,be,ye,dt,Ke,J,N,Xe,se,C,O,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){b=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ce=d(),j=o("p"),Re=r("This second option is useful when using "),ke=o("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=o("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),C=o("ul"),O=o("li"),lt=r("a single Tensor with "),pe=o("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=o("code"),pt=r("model(input_ids)"),ht=d(),D=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=o("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){b=a(w,"P",{});var B=s(b);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Qe=s(x);T=i(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),y=l(ze),q=a(ze,"LI",{});var Ut=s(q);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ce=l(w),j=a(w,"P",{});var Z=s(j);Re=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Rt=s(ke);it=i(Rt,"tf.keras.Model.fit"),Rt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var Q=s(N);Xe=i(Q,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q.forEach(t),se=l(w),C=a(w,"UL",{});var de=s(C);O=a(de,"LI",{});var le=s(O);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Xt=s(pe);he=i(Xt,"input_ids"),Xt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Qt=s(K);pt=i(Qt,"model(input_ids)"),Qt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ht=s(ve);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Vt=s(Te);we=i(Vt,"model([input_ids, attention_mask, token_type_ids])"),Vt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var He=s(ie);Me=i(He,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(He,"CODE",{});var Jt=s(xe);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),He.forEach(t),de.forEach(t)},m(w,B){h(w,b,B),e(b,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,q),e(q,rt),h(w,Ce,B),h(w,j,B),e(j,Re),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,C,B),e(C,O),e(O,lt),e(O,pe),e(pe,he),e(O,ct),e(O,K),e(K,pt),e(C,ht),e(C,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(C,ut),e(C,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(b),w&&t(v),w&&t(M),w&&t(Ce),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(C)}}}function U2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function R2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function X2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Q2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function H2(E){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function V2(E){let b,z,v,M,x,T,y,q,rt,Ce,j,Re,ke,it,be,ye,dt,Ke,J,N,Xe,se,C,O,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye,w,B,ze,Qe,Ut,Z,Rt,bt,Q,de,le,Xt,Qt,ce,Ht,Vt,He,Jt,Cu,rd,Pu,Su,gp,yt,Ou,Co,id,Au,Iu,Nu,ei,Du,Lu,_p,ti,dd,Gu,kp,Po,bp,ni,So,ld,Wu,Uu,Kt,Ru,cd,Xu,Qu,pd,Hu,Vu,yp,Oo,vp,Zt,Pn,hd,Ao,Ju,ud,Ku,Tp,vt,Zu,Io,Yu,em,md,tm,nm,wp,oi,om,Mp,ai,fd,am,xp,Yt,Sn,gd,No,sm,_d,rm,zp,et,im,kd,dm,lm,bd,cm,pm,yd,hm,um,Fp,On,mm,si,fm,gm,qp,ri,vd,_m,$p,Do,Bp,ii,Lo,Td,km,bm,Fe,ym,wd,vm,Tm,Md,wm,Mm,xd,xm,zm,zd,Fm,qm,Fd,$m,Bm,jp,Go,Ep,en,An,qd,Wo,jm,$d,Em,Cp,qe,Uo,Cm,tn,Pm,di,Sm,Om,Ro,Am,Im,Nm,nn,Dm,li,Lm,Gm,ci,Wm,Um,Rm,Bd,Xm,Qm,Xo,Pp,on,In,jd,Qo,Hm,Ed,Vm,Sp,G,Ho,Jm,Cd,Km,Zm,mt,Ym,pi,ef,tf,hi,nf,of,Vo,af,sf,rf,Jo,df,Pd,lf,cf,pf,Sd,hf,uf,Ko,mf,Nn,Zo,ff,Od,gf,_f,tt,Yo,kf,ea,bf,Ad,yf,vf,Tf,ta,na,Id,wf,Mf,Nd,xf,zf,oa,Dd,Ff,qf,Ld,$f,Bf,Gd,jf,Op,an,Dn,Wd,aa,Ef,Ud,Cf,Ap,P,sa,Pf,sn,Sf,Rd,Of,Af,ra,If,Nf,Df,ia,Lf,ui,Gf,Wf,Uf,da,Rf,Xd,Xf,Qf,Hf,Qd,Vf,Jf,la,Kf,Se,ca,Zf,Hd,Yf,eg,pa,tg,Vd,ng,og,ag,ha,ua,Jd,sg,rg,Kd,ig,dg,ma,Zd,lg,cg,Yd,pg,hg,el,ug,mg,Ln,fa,fg,tl,gg,_g,Gn,ga,kg,nl,bg,yg,Wn,_a,vg,ol,Tg,Ip,rn,Un,al,ka,wg,sl,Mg,Np,S,ba,xg,ya,zg,va,Fg,qg,$g,Ta,Bg,mi,jg,Eg,Cg,rl,Pg,Sg,wa,Og,nt,Ma,Ag,xa,Ig,il,Ng,Dg,Lg,za,Fa,dl,Gg,Wg,ll,Ug,Rg,qa,cl,Xg,Qg,pl,Hg,Vg,hl,Jg,Kg,Rn,$a,Zg,ul,Yg,e_,Xn,Ba,t_,ja,n_,ml,o_,a_,s_,Qn,Ea,r_,fl,i_,d_,Hn,Ca,l_,gl,c_,Dp,dn,Vn,_l,Pa,p_,kl,h_,Lp,W,Sa,u_,ln,m_,bl,f_,g_,Oa,__,k_,b_,Aa,y_,fi,v_,T_,w_,yl,M_,x_,Ia,z_,Oe,Na,F_,vl,q_,$_,Da,B_,Tl,j_,E_,C_,La,Ga,wl,P_,S_,Ml,O_,A_,Wa,xl,I_,N_,zl,D_,L_,Fl,G_,W_,Jn,Ua,U_,ql,R_,X_,Kn,Ra,Q_,$l,H_,Gp,cn,Zn,Bl,Xa,V_,jl,J_,Wp,Ve,Qa,K_,Ha,Z_,gi,Y_,ek,tk,Va,nk,Ja,ok,ak,sk,Ae,Ka,rk,pn,ik,_i,dk,lk,El,ck,pk,hk,Yn,uk,Cl,mk,fk,Za,Up,hn,eo,Pl,Ya,gk,Sl,_k,Rp,Je,es,kk,ts,bk,ki,yk,vk,Tk,ns,wk,os,Mk,xk,zk,Y,as,Fk,un,qk,bi,$k,Bk,Ol,jk,Ek,Ck,to,Pk,Al,Sk,Ok,ss,Ak,Il,Ik,Nk,rs,Xp,mn,no,Nl,is,Dk,Dl,Lk,Qp,$e,ds,Gk,fn,Wk,Ll,Uk,Rk,Gl,Xk,Qk,Hk,ls,Vk,yi,Jk,Kk,Zk,cs,Yk,ps,eb,tb,nb,ue,hs,ob,gn,ab,vi,sb,rb,Wl,ib,db,lb,oo,cb,Ul,pb,hb,us,ub,ms,Hp,_n,ao,Rl,fs,mb,Xl,fb,Vp,Be,gs,gb,Ql,_b,kb,_s,bb,Ti,yb,vb,Tb,ks,wb,bs,Mb,xb,zb,L,ys,Fb,kn,qb,wi,$b,Bb,Hl,jb,Eb,Cb,so,Pb,Vl,Sb,Ob,vs,Ab,Ts,Ib,Jl,Nb,Db,ws,Lb,Ms,Jp,bn,ro,Kl,xs,Gb,Zl,Wb,Kp,yn,zs,Ub,Tt,Fs,Rb,Yl,Xb,Qb,qs,Zp,vn,io,ec,$s,Hb,tc,Vb,Yp,je,Bs,Jb,js,Kb,Mi,Zb,Yb,ey,Es,ty,Cs,ny,oy,ay,lo,sy,Ie,Ps,ry,Tn,iy,xi,dy,ly,nc,cy,py,hy,co,uy,oc,my,fy,Ss,eh,wn,po,ac,Os,gy,sc,_y,th,Ee,As,ky,Is,by,zi,yy,vy,Ty,Ns,wy,Ds,My,xy,zy,ho,Fy,ee,Ls,qy,Mn,$y,Fi,By,jy,rc,Ey,Cy,Py,uo,Sy,ic,Oy,Ay,Gs,Iy,dc,Ny,Dy,Ws,nh,xn,mo,lc,Us,Ly,cc,Gy,oh,U,Rs,Wy,Xs,Uy,qi,Ry,Xy,Qy,Qs,Hy,Hs,Vy,Jy,Ky,pc,Zy,Yy,ft,hc,Vs,ev,tv,uc,Js,nv,ov,mc,Ks,av,sv,fc,Zs,rv,iv,Ne,Ys,dv,zn,lv,gc,cv,pv,_c,hv,uv,mv,fo,fv,kc,gv,_v,er,kv,wt,tr,bv,bc,yv,vv,nr,Tv,Mt,or,wv,yc,Mv,xv,ar,ah,Fn,go,vc,sr,zv,Tc,Fv,sh,R,rr,qv,ir,$v,$i,Bv,jv,Ev,dr,Cv,lr,Pv,Sv,Ov,wc,Av,Iv,gt,Mc,cr,Nv,Dv,xc,pr,Lv,Gv,zc,hr,Wv,Uv,Fc,ur,Rv,Xv,te,mr,Qv,qn,Hv,qc,Vv,Jv,$c,Kv,Zv,Yv,_o,eT,Bc,tT,nT,fr,oT,jc,aT,sT,gr,rT,xt,_r,iT,Ec,dT,lT,kr,cT,zt,br,pT,Cc,hT,uT,yr,rh,$n,ko,Pc,vr,mT,Sc,fT,ih,A,Tr,gT,Oc,_T,kT,wr,bT,Bi,yT,vT,TT,Mr,wT,xr,MT,xT,zT,Ac,FT,qT,_t,Ic,zr,$T,BT,Nc,Fr,jT,ET,Dc,qr,CT,PT,Lc,$r,ST,OT,De,Br,AT,Bn,IT,Gc,NT,DT,Wc,LT,GT,WT,bo,UT,Uc,RT,XT,jr,QT,Ft,Er,HT,Rc,VT,JT,Cr,KT,qt,Pr,ZT,Xc,YT,ew,Sr,dh,jn,yo,Qc,Or,tw,Hc,nw,lh,I,Ar,ow,En,aw,Vc,sw,rw,Jc,iw,dw,lw,Ir,cw,ji,pw,hw,uw,Nr,mw,Dr,fw,gw,_w,Kc,kw,bw,kt,Zc,Lr,yw,vw,Yc,Gr,Tw,ww,ep,Wr,Mw,xw,tp,Ur,zw,Fw,Le,Rr,qw,Cn,$w,np,Bw,jw,op,Ew,Cw,Pw,vo,Sw,ap,Ow,Aw,Xr,Iw,$t,Qr,Nw,sp,Dw,Lw,Hr,Gw,Bt,Vr,Ww,rp,Uw,Rw,Jr,ch;return T=new X({}),se=new X({}),Qe=new X({}),Po=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),Oo=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Ao=new X({}),No=new X({}),Do=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Go=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948"
article_ar = "\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627."

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")

# translate Hindi to French
tokenizer.src_lang = "hi_IN"
encoded_hi = tokenizer(article_hi, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id["fr_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "Le chef de l 'ONU affirme qu 'il n 'y a pas de solution militaire en Syria."

# translate Arabic to English
tokenizer.src_lang = "ar_AR"
encoded_ar = tokenizer(article_ar, return_tensors="pt")
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "The Secretary-General of the United Nations says there is no military solution in Syria."`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Wo=new X({}),Uo=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Xo=new $({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Qo=new X({}),Ho=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Ko=new $({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Zo=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Yo=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),aa=new X({}),sa=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),la=new $({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L161",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L190",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ga=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L249"}}),_a=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L264"}}),ka=new X({}),ba=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),wa=new $({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ma=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Ba=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Ca=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Pa=new X({}),Sa=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Ia=new $({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),Ra=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Xa=new X({}),Qa=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1134",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1161",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yn=new st({props:{$$slots:{default:[A2]},$$scope:{ctx:E}}}),Za=new $({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new X({}),es=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1251",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1295",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new st({props:{$$slots:{default:[I2]},$$scope:{ctx:E}}}),ss=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),rs=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new X({}),ds=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1551",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1563",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new st({props:{$$slots:{default:[N2]},$$scope:{ctx:E}}}),us=new $({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),ms=new $({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>`}}),fs=new X({}),gs=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1424",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1437",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new st({props:{$$slots:{default:[D2]},$$scope:{ctx:E}}}),vs=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ts=new $({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),ws=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ms=new $({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),xs=new X({}),zs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),Fs=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1715",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new $({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),$s=new X({}),Bs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1147",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[L2]},$$scope:{ctx:E}}}),Ps=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new st({props:{$$slots:{default:[G2]},$$scope:{ctx:E}}}),Ss=new $({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Os=new X({}),As=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1234",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[W2]},$$scope:{ctx:E}}}),Ls=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new st({props:{$$slots:{default:[U2]},$$scope:{ctx:E}}}),Gs=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ws=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Us=new X({}),Rs=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1265",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ys=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new st({props:{$$slots:{default:[R2]},$$scope:{ctx:E}}}),er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),or=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new X({}),rr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1352",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),mr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new st({props:{$$slots:{default:[X2]},$$scope:{ctx:E}}}),fr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),gr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),_r=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),br=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new X({}),Tr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1665",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new st({props:{$$slots:{default:[Q2]},$$scope:{ctx:E}}}),jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Er=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Pr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Or=new X({}),Ar=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1753",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Rr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new st({props:{$$slots:{default:[H2]},$$scope:{ctx:E}}}),Xr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Qr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Vr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){b=o("meta"),z=d(),v=o("h1"),M=o("a"),x=o("span"),u(T.$$.fragment),y=d(),q=o("span"),rt=r("MBart and MBart-50"),Ce=d(),j=o("p"),Re=o("strong"),ke=r("DISCLAIMER:"),it=r(" If you see something strange, file a "),be=o("a"),ye=r("Github Issue"),dt=r(` and assign
@patrickvonplaten`),Ke=d(),J=o("h2"),N=o("a"),Xe=o("span"),u(se.$$.fragment),C=d(),O=o("span"),lt=r("Overview of MBart"),pe=d(),he=o("p"),ct=r("The MBart model was presented in "),K=o("a"),pt=r("Multilingual Denoising Pre-training for Neural Machine Translation"),ht=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Pe=o("p"),ve=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),re=o("p"),Te=r("This model was contributed by "),we=o("a"),ut=r("valhalla"),ie=r(". The Authors\u2019 code can be found "),Me=o("a"),xe=r("here"),Ye=d(),w=o("h3"),B=o("a"),ze=o("span"),u(Qe.$$.fragment),Ut=d(),Z=o("span"),Rt=r("Training of MBart"),bt=d(),Q=o("p"),de=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=o("code"),Xt=r("X [eos, src_lang_code]"),Qt=r(" where "),ce=o("code"),Ht=r("X"),Vt=r(` is the source text. The
target text format is `),He=o("code"),Jt=r("[tgt_lang_code] X [eos]"),Cu=r(". "),rd=o("code"),Pu=r("bos"),Su=r(" is never used."),gp=d(),yt=o("p"),Ou=r("The regular "),Co=o("a"),id=o("strong"),Au=r("call"),Iu=r("()"),Nu=r(` will encode source text format, and it should be wrapped
inside the context manager `),ei=o("a"),Du=r("as_target_tokenizer()"),Lu=r(" to encode target text format."),_p=d(),ti=o("ul"),dd=o("li"),Gu=r("Supervised training"),kp=d(),u(Po.$$.fragment),bp=d(),ni=o("ul"),So=o("li"),ld=o("p"),Wu=r("Generation"),Uu=d(),Kt=o("p"),Ru=r("While generating the target text set the "),cd=o("code"),Xu=r("decoder_start_token_id"),Qu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=o("em"),Hu=r("facebook/mbart-large-en-ro"),Vu=r(" model."),yp=d(),u(Oo.$$.fragment),vp=d(),Zt=o("h2"),Pn=o("a"),hd=o("span"),u(Ao.$$.fragment),Ju=d(),ud=o("span"),Ku=r("Overview of MBart-50"),Tp=d(),vt=o("p"),Zu=r("MBart-50 was introduced in the "),Io=o("a"),Yu=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),em=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=o("em"),tm=r("mbart-large-cc25"),nm=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),wp=d(),oi=o("p"),om=r("According to the abstract"),Mp=d(),ai=o("p"),fd=o("em"),am=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),xp=d(),Yt=o("h3"),Sn=o("a"),gd=o("span"),u(No.$$.fragment),sm=d(),_d=o("span"),rm=r("Training of MBart-50"),zp=d(),et=o("p"),im=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=o("code"),dm=r("[lang_code] X [eos]"),lm=r(", where "),bd=o("code"),cm=r("lang_code"),pm=r(` is source
language id for source text and target language id for target text, with `),yd=o("code"),hm=r("X"),um=r(` being the source or target text
respectively.`),Fp=d(),On=o("p"),mm=r("MBart-50 has its own tokenizer "),si=o("a"),fm=r("MBart50Tokenizer"),gm=r("."),qp=d(),ri=o("ul"),vd=o("li"),_m=r("Supervised training"),$p=d(),u(Do.$$.fragment),Bp=d(),ii=o("ul"),Lo=o("li"),Td=o("p"),km=r("Generation"),bm=d(),Fe=o("p"),ym=r("To generate using the mBART-50 multilingual translation models, "),wd=o("code"),vm=r("eos_token_id"),Tm=r(` is used as the
`),Md=o("code"),wm=r("decoder_start_token_id"),Mm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=o("em"),xm=r("forced_bos_token_id"),zm=r(" parameter to the "),zd=o("em"),Fm=r("generate"),qm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=o("em"),$m=r("facebook/mbart-50-large-many-to-many"),Bm=r(" checkpoint."),jp=d(),u(Go.$$.fragment),Ep=d(),en=o("h2"),An=o("a"),qd=o("span"),u(Wo.$$.fragment),jm=d(),$d=o("span"),Em=r("MBartConfig"),Cp=d(),qe=o("div"),u(Uo.$$.fragment),Cm=d(),tn=o("p"),Pm=r("This is the configuration class to store the configuration of a "),di=o("a"),Sm=r("MBartModel"),Om=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Ro=o("a"),Am=r("facebook/mbart-large-cc25"),Im=r(" architecture."),Nm=d(),nn=o("p"),Dm=r("Configuration objects inherit from "),li=o("a"),Lm=r("PretrainedConfig"),Gm=r(` and can be used to control the model outputs. Read the
documentation from `),ci=o("a"),Wm=r("PretrainedConfig"),Um=r(" for more information."),Rm=d(),Bd=o("p"),Xm=r("Example:"),Qm=d(),u(Xo.$$.fragment),Pp=d(),on=o("h2"),In=o("a"),jd=o("span"),u(Qo.$$.fragment),Hm=d(),Ed=o("span"),Vm=r("MBartTokenizer"),Sp=d(),G=o("div"),u(Ho.$$.fragment),Jm=d(),Cd=o("p"),Km=r("Construct an MBART tokenizer."),Zm=d(),mt=o("p"),Ym=r("Adapted from "),pi=o("a"),ef=r("RobertaTokenizer"),tf=r(" and "),hi=o("a"),nf=r("XLNetTokenizer"),of=r(`. Based on
`),Vo=o("a"),af=r("SentencePiece"),sf=r("."),rf=d(),Jo=o("p"),df=r("The tokenization method is "),Pd=o("code"),lf=r("<tokens> <eos> <language code>"),cf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),pf=d(),Sd=o("p"),hf=r("Examples:"),uf=d(),u(Ko.$$.fragment),mf=d(),Nn=o("div"),u(Zo.$$.fragment),ff=d(),Od=o("p"),gf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),_f=d(),tt=o("div"),u(Yo.$$.fragment),kf=d(),ea=o("p"),bf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=o("code"),yf=r("X"),vf=r(" represents the sequence:"),Tf=d(),ta=o("ul"),na=o("li"),Id=o("code"),wf=r("input_ids"),Mf=r(" (for encoder) "),Nd=o("code"),xf=r("X [eos, src_lang_code]"),zf=d(),oa=o("li"),Dd=o("code"),Ff=r("decoder_input_ids"),qf=r(": (for decoder) "),Ld=o("code"),$f=r("X [eos, tgt_lang_code]"),Bf=d(),Gd=o("p"),jf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Op=d(),an=o("h2"),Dn=o("a"),Wd=o("span"),u(aa.$$.fragment),Ef=d(),Ud=o("span"),Cf=r("MBartTokenizerFast"),Ap=d(),P=o("div"),u(sa.$$.fragment),Pf=d(),sn=o("p"),Sf=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=o("em"),Of=r("tokenizers"),Af=r(` library). Based on
`),ra=o("a"),If=r("BPE"),Nf=r("."),Df=d(),ia=o("p"),Lf=r("This tokenizer inherits from "),ui=o("a"),Gf=r("PreTrainedTokenizerFast"),Wf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Uf=d(),da=o("p"),Rf=r("The tokenization method is "),Xd=o("code"),Xf=r("<tokens> <eos> <language code>"),Qf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Hf=d(),Qd=o("p"),Vf=r("Examples:"),Jf=d(),u(la.$$.fragment),Kf=d(),Se=o("div"),u(ca.$$.fragment),Zf=d(),Hd=o("p"),Yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),eg=d(),pa=o("p"),tg=r("An MBART sequence has the following format, where "),Vd=o("code"),ng=r("X"),og=r(" represents the sequence:"),ag=d(),ha=o("ul"),ua=o("li"),Jd=o("code"),sg=r("input_ids"),rg=r(" (for encoder) "),Kd=o("code"),ig=r("X [eos, src_lang_code]"),dg=d(),ma=o("li"),Zd=o("code"),lg=r("decoder_input_ids"),cg=r(": (for decoder) "),Yd=o("code"),pg=r("X [eos, tgt_lang_code]"),hg=d(),el=o("p"),ug=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),mg=d(),Ln=o("div"),u(fa.$$.fragment),fg=d(),tl=o("p"),gg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),_g=d(),Gn=o("div"),u(ga.$$.fragment),kg=d(),nl=o("p"),bg=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),yg=d(),Wn=o("div"),u(_a.$$.fragment),vg=d(),ol=o("p"),Tg=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ip=d(),rn=o("h2"),Un=o("a"),al=o("span"),u(ka.$$.fragment),wg=d(),sl=o("span"),Mg=r("MBart50Tokenizer"),Np=d(),S=o("div"),u(ba.$$.fragment),xg=d(),ya=o("p"),zg=r("Construct a MBart50 tokenizer. Based on "),va=o("a"),Fg=r("SentencePiece"),qg=r("."),$g=d(),Ta=o("p"),Bg=r("This tokenizer inherits from "),mi=o("a"),jg=r("PreTrainedTokenizer"),Eg=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Cg=d(),rl=o("p"),Pg=r("Examples:"),Sg=d(),u(wa.$$.fragment),Og=d(),nt=o("div"),u(Ma.$$.fragment),Ag=d(),xa=o("p"),Ig=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=o("code"),Ng=r("X"),Dg=r(" represents the sequence:"),Lg=d(),za=o("ul"),Fa=o("li"),dl=o("code"),Gg=r("input_ids"),Wg=r(" (for encoder) "),ll=o("code"),Ug=r("[src_lang_code] X [eos]"),Rg=d(),qa=o("li"),cl=o("code"),Xg=r("labels"),Qg=r(": (for decoder) "),pl=o("code"),Hg=r("[tgt_lang_code] X [eos]"),Vg=d(),hl=o("p"),Jg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Kg=d(),Rn=o("div"),u($a.$$.fragment),Zg=d(),ul=o("p"),Yg=r("Converts a sequence of tokens (strings for sub-words) in a single string."),e_=d(),Xn=o("div"),u(Ba.$$.fragment),t_=d(),ja=o("p"),n_=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=o("code"),o_=r("prepare_for_model"),a_=r(" method."),s_=d(),Qn=o("div"),u(Ea.$$.fragment),r_=d(),fl=o("p"),i_=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),d_=d(),Hn=o("div"),u(Ca.$$.fragment),l_=d(),gl=o("p"),c_=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dp=d(),dn=o("h2"),Vn=o("a"),_l=o("span"),u(Pa.$$.fragment),p_=d(),kl=o("span"),h_=r("MBart50TokenizerFast"),Lp=d(),W=o("div"),u(Sa.$$.fragment),u_=d(),ln=o("p"),m_=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=o("em"),f_=r("tokenizers"),g_=r(` library). Based on
`),Oa=o("a"),__=r("BPE"),k_=r("."),b_=d(),Aa=o("p"),y_=r("This tokenizer inherits from "),fi=o("a"),v_=r("PreTrainedTokenizerFast"),T_=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),w_=d(),yl=o("p"),M_=r("Examples:"),x_=d(),u(Ia.$$.fragment),z_=d(),Oe=o("div"),u(Na.$$.fragment),F_=d(),vl=o("p"),q_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),$_=d(),Da=o("p"),B_=r("An MBART-50 sequence has the following format, where "),Tl=o("code"),j_=r("X"),E_=r(" represents the sequence:"),C_=d(),La=o("ul"),Ga=o("li"),wl=o("code"),P_=r("input_ids"),S_=r(" (for encoder) "),Ml=o("code"),O_=r("[src_lang_code] X [eos]"),A_=d(),Wa=o("li"),xl=o("code"),I_=r("labels"),N_=r(": (for decoder) "),zl=o("code"),D_=r("[tgt_lang_code] X [eos]"),L_=d(),Fl=o("p"),G_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),W_=d(),Jn=o("div"),u(Ua.$$.fragment),U_=d(),ql=o("p"),R_=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),X_=d(),Kn=o("div"),u(Ra.$$.fragment),Q_=d(),$l=o("p"),H_=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Gp=d(),cn=o("h2"),Zn=o("a"),Bl=o("span"),u(Xa.$$.fragment),V_=d(),jl=o("span"),J_=r("MBartModel"),Wp=d(),Ve=o("div"),u(Qa.$$.fragment),K_=d(),Ha=o("p"),Z_=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gi=o("a"),Y_=r("PreTrainedModel"),ek=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=d(),Va=o("p"),nk=r("This model is also a PyTorch "),Ja=o("a"),ok=r("torch.nn.Module"),ak=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sk=d(),Ae=o("div"),u(Ka.$$.fragment),rk=d(),pn=o("p"),ik=r("The "),_i=o("a"),dk=r("MBartModel"),lk=r(" forward method, overrides the "),El=o("code"),ck=r("__call__"),pk=r(" special method."),hk=d(),u(Yn.$$.fragment),uk=d(),Cl=o("p"),mk=r("Example:"),fk=d(),u(Za.$$.fragment),Up=d(),hn=o("h2"),eo=o("a"),Pl=o("span"),u(Ya.$$.fragment),gk=d(),Sl=o("span"),_k=r("MBartForConditionalGeneration"),Rp=d(),Je=o("div"),u(es.$$.fragment),kk=d(),ts=o("p"),bk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=o("a"),yk=r("PreTrainedModel"),vk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=d(),ns=o("p"),wk=r("This model is also a PyTorch "),os=o("a"),Mk=r("torch.nn.Module"),xk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk=d(),Y=o("div"),u(as.$$.fragment),Fk=d(),un=o("p"),qk=r("The "),bi=o("a"),$k=r("MBartForConditionalGeneration"),Bk=r(" forward method, overrides the "),Ol=o("code"),jk=r("__call__"),Ek=r(" special method."),Ck=d(),u(to.$$.fragment),Pk=d(),Al=o("p"),Sk=r("Translation example:"),Ok=d(),u(ss.$$.fragment),Ak=d(),Il=o("p"),Ik=r("Mask filling example:"),Nk=d(),u(rs.$$.fragment),Xp=d(),mn=o("h2"),no=o("a"),Nl=o("span"),u(is.$$.fragment),Dk=d(),Dl=o("span"),Lk=r("MBartForQuestionAnswering"),Qp=d(),$e=o("div"),u(ds.$$.fragment),Gk=d(),fn=o("p"),Wk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=o("code"),Uk=r("span start logits"),Rk=r(" and "),Gl=o("code"),Xk=r("span end logits"),Qk=r(")."),Hk=d(),ls=o("p"),Vk=r("This model inherits from "),yi=o("a"),Jk=r("PreTrainedModel"),Kk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk=d(),cs=o("p"),Yk=r("This model is also a PyTorch "),ps=o("a"),eb=r("torch.nn.Module"),tb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nb=d(),ue=o("div"),u(hs.$$.fragment),ob=d(),gn=o("p"),ab=r("The "),vi=o("a"),sb=r("MBartForQuestionAnswering"),rb=r(" forward method, overrides the "),Wl=o("code"),ib=r("__call__"),db=r(" special method."),lb=d(),u(oo.$$.fragment),cb=d(),Ul=o("p"),pb=r("Example:"),hb=d(),u(us.$$.fragment),ub=d(),u(ms.$$.fragment),Hp=d(),_n=o("h2"),ao=o("a"),Rl=o("span"),u(fs.$$.fragment),mb=d(),Xl=o("span"),fb=r("MBartForSequenceClassification"),Vp=d(),Be=o("div"),u(gs.$$.fragment),gb=d(),Ql=o("p"),_b=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),kb=d(),_s=o("p"),bb=r("This model inherits from "),Ti=o("a"),yb=r("PreTrainedModel"),vb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=d(),ks=o("p"),wb=r("This model is also a PyTorch "),bs=o("a"),Mb=r("torch.nn.Module"),xb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zb=d(),L=o("div"),u(ys.$$.fragment),Fb=d(),kn=o("p"),qb=r("The "),wi=o("a"),$b=r("MBartForSequenceClassification"),Bb=r(" forward method, overrides the "),Hl=o("code"),jb=r("__call__"),Eb=r(" special method."),Cb=d(),u(so.$$.fragment),Pb=d(),Vl=o("p"),Sb=r("Example of single-label classification:"),Ob=d(),u(vs.$$.fragment),Ab=d(),u(Ts.$$.fragment),Ib=d(),Jl=o("p"),Nb=r("Example of multi-label classification:"),Db=d(),u(ws.$$.fragment),Lb=d(),u(Ms.$$.fragment),Jp=d(),bn=o("h2"),ro=o("a"),Kl=o("span"),u(xs.$$.fragment),Gb=d(),Zl=o("span"),Wb=r("MBartForCausalLM"),Kp=d(),yn=o("div"),u(zs.$$.fragment),Ub=d(),Tt=o("div"),u(Fs.$$.fragment),Rb=d(),Yl=o("p"),Xb=r("Example:"),Qb=d(),u(qs.$$.fragment),Zp=d(),vn=o("h2"),io=o("a"),ec=o("span"),u($s.$$.fragment),Hb=d(),tc=o("span"),Vb=r("TFMBartModel"),Yp=d(),je=o("div"),u(Bs.$$.fragment),Jb=d(),js=o("p"),Kb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=o("a"),Zb=r("TFPreTrainedModel"),Yb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ey=d(),Es=o("p"),ty=r("This model is also a "),Cs=o("a"),ny=r("tf.keras.Model"),oy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ay=d(),u(lo.$$.fragment),sy=d(),Ie=o("div"),u(Ps.$$.fragment),ry=d(),Tn=o("p"),iy=r("The "),xi=o("a"),dy=r("TFMBartModel"),ly=r(" forward method, overrides the "),nc=o("code"),cy=r("__call__"),py=r(" special method."),hy=d(),u(co.$$.fragment),uy=d(),oc=o("p"),my=r("Example:"),fy=d(),u(Ss.$$.fragment),eh=d(),wn=o("h2"),po=o("a"),ac=o("span"),u(Os.$$.fragment),gy=d(),sc=o("span"),_y=r("TFMBartForConditionalGeneration"),th=d(),Ee=o("div"),u(As.$$.fragment),ky=d(),Is=o("p"),by=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=o("a"),yy=r("TFPreTrainedModel"),vy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ty=d(),Ns=o("p"),wy=r("This model is also a "),Ds=o("a"),My=r("tf.keras.Model"),xy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zy=d(),u(ho.$$.fragment),Fy=d(),ee=o("div"),u(Ls.$$.fragment),qy=d(),Mn=o("p"),$y=r("The "),Fi=o("a"),By=r("TFMBartForConditionalGeneration"),jy=r(" forward method, overrides the "),rc=o("code"),Ey=r("__call__"),Cy=r(" special method."),Py=d(),u(uo.$$.fragment),Sy=d(),ic=o("p"),Oy=r("Summarization example:"),Ay=d(),u(Gs.$$.fragment),Iy=d(),dc=o("p"),Ny=r("Mask filling example:"),Dy=d(),u(Ws.$$.fragment),nh=d(),xn=o("h2"),mo=o("a"),lc=o("span"),u(Us.$$.fragment),Ly=d(),cc=o("span"),Gy=r("FlaxMBartModel"),oh=d(),U=o("div"),u(Rs.$$.fragment),Wy=d(),Xs=o("p"),Uy=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=o("a"),Ry=r("FlaxPreTrainedModel"),Xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qy=d(),Qs=o("p"),Hy=r(`This model is also a Flax Linen
`),Hs=o("a"),Vy=r("flax.nn.Module"),Jy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ky=d(),pc=o("p"),Zy=r("Finally, this model supports inherent JAX features such as:"),Yy=d(),ft=o("ul"),hc=o("li"),Vs=o("a"),ev=r("Just-In-Time (JIT) compilation"),tv=d(),uc=o("li"),Js=o("a"),nv=r("Automatic Differentiation"),ov=d(),mc=o("li"),Ks=o("a"),av=r("Vectorization"),sv=d(),fc=o("li"),Zs=o("a"),rv=r("Parallelization"),iv=d(),Ne=o("div"),u(Ys.$$.fragment),dv=d(),zn=o("p"),lv=r("The "),gc=o("code"),cv=r("FlaxMBartPreTrainedModel"),pv=r("forward method, overrides the "),_c=o("code"),hv=r("__call__"),uv=r(" special method."),mv=d(),u(fo.$$.fragment),fv=d(),kc=o("p"),gv=r("Example:"),_v=d(),u(er.$$.fragment),kv=d(),wt=o("div"),u(tr.$$.fragment),bv=d(),bc=o("p"),yv=r("Example:"),vv=d(),u(nr.$$.fragment),Tv=d(),Mt=o("div"),u(or.$$.fragment),wv=d(),yc=o("p"),Mv=r("Example:"),xv=d(),u(ar.$$.fragment),ah=d(),Fn=o("h2"),go=o("a"),vc=o("span"),u(sr.$$.fragment),zv=d(),Tc=o("span"),Fv=r("FlaxMBartForConditionalGeneration"),sh=d(),R=o("div"),u(rr.$$.fragment),qv=d(),ir=o("p"),$v=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=o("a"),Bv=r("FlaxPreTrainedModel"),jv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ev=d(),dr=o("p"),Cv=r(`This model is also a Flax Linen
`),lr=o("a"),Pv=r("flax.nn.Module"),Sv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ov=d(),wc=o("p"),Av=r("Finally, this model supports inherent JAX features such as:"),Iv=d(),gt=o("ul"),Mc=o("li"),cr=o("a"),Nv=r("Just-In-Time (JIT) compilation"),Dv=d(),xc=o("li"),pr=o("a"),Lv=r("Automatic Differentiation"),Gv=d(),zc=o("li"),hr=o("a"),Wv=r("Vectorization"),Uv=d(),Fc=o("li"),ur=o("a"),Rv=r("Parallelization"),Xv=d(),te=o("div"),u(mr.$$.fragment),Qv=d(),qn=o("p"),Hv=r("The "),qc=o("code"),Vv=r("FlaxMBartPreTrainedModel"),Jv=r("forward method, overrides the "),$c=o("code"),Kv=r("__call__"),Zv=r(" special method."),Yv=d(),u(_o.$$.fragment),eT=d(),Bc=o("p"),tT=r("Summarization example:"),nT=d(),u(fr.$$.fragment),oT=d(),jc=o("p"),aT=r("Mask filling example:"),sT=d(),u(gr.$$.fragment),rT=d(),xt=o("div"),u(_r.$$.fragment),iT=d(),Ec=o("p"),dT=r("Example:"),lT=d(),u(kr.$$.fragment),cT=d(),zt=o("div"),u(br.$$.fragment),pT=d(),Cc=o("p"),hT=r("Example:"),uT=d(),u(yr.$$.fragment),rh=d(),$n=o("h2"),ko=o("a"),Pc=o("span"),u(vr.$$.fragment),mT=d(),Sc=o("span"),fT=r("FlaxMBartForSequenceClassification"),ih=d(),A=o("div"),u(Tr.$$.fragment),gT=d(),Oc=o("p"),_T=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),kT=d(),wr=o("p"),bT=r("This model inherits from "),Bi=o("a"),yT=r("FlaxPreTrainedModel"),vT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TT=d(),Mr=o("p"),wT=r(`This model is also a Flax Linen
`),xr=o("a"),MT=r("flax.nn.Module"),xT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zT=d(),Ac=o("p"),FT=r("Finally, this model supports inherent JAX features such as:"),qT=d(),_t=o("ul"),Ic=o("li"),zr=o("a"),$T=r("Just-In-Time (JIT) compilation"),BT=d(),Nc=o("li"),Fr=o("a"),jT=r("Automatic Differentiation"),ET=d(),Dc=o("li"),qr=o("a"),CT=r("Vectorization"),PT=d(),Lc=o("li"),$r=o("a"),ST=r("Parallelization"),OT=d(),De=o("div"),u(Br.$$.fragment),AT=d(),Bn=o("p"),IT=r("The "),Gc=o("code"),NT=r("FlaxMBartPreTrainedModel"),DT=r("forward method, overrides the "),Wc=o("code"),LT=r("__call__"),GT=r(" special method."),WT=d(),u(bo.$$.fragment),UT=d(),Uc=o("p"),RT=r("Example:"),XT=d(),u(jr.$$.fragment),QT=d(),Ft=o("div"),u(Er.$$.fragment),HT=d(),Rc=o("p"),VT=r("Example:"),JT=d(),u(Cr.$$.fragment),KT=d(),qt=o("div"),u(Pr.$$.fragment),ZT=d(),Xc=o("p"),YT=r("Example:"),ew=d(),u(Sr.$$.fragment),dh=d(),jn=o("h2"),yo=o("a"),Qc=o("span"),u(Or.$$.fragment),tw=d(),Hc=o("span"),nw=r("FlaxMBartForQuestionAnswering"),lh=d(),I=o("div"),u(Ar.$$.fragment),ow=d(),En=o("p"),aw=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=o("code"),sw=r("span start logits"),rw=r(" and "),Jc=o("code"),iw=r("span end logits"),dw=r(")."),lw=d(),Ir=o("p"),cw=r("This model inherits from "),ji=o("a"),pw=r("FlaxPreTrainedModel"),hw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uw=d(),Nr=o("p"),mw=r(`This model is also a Flax Linen
`),Dr=o("a"),fw=r("flax.nn.Module"),gw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_w=d(),Kc=o("p"),kw=r("Finally, this model supports inherent JAX features such as:"),bw=d(),kt=o("ul"),Zc=o("li"),Lr=o("a"),yw=r("Just-In-Time (JIT) compilation"),vw=d(),Yc=o("li"),Gr=o("a"),Tw=r("Automatic Differentiation"),ww=d(),ep=o("li"),Wr=o("a"),Mw=r("Vectorization"),xw=d(),tp=o("li"),Ur=o("a"),zw=r("Parallelization"),Fw=d(),Le=o("div"),u(Rr.$$.fragment),qw=d(),Cn=o("p"),$w=r("The "),np=o("code"),Bw=r("FlaxMBartPreTrainedModel"),jw=r("forward method, overrides the "),op=o("code"),Ew=r("__call__"),Cw=r(" special method."),Pw=d(),u(vo.$$.fragment),Sw=d(),ap=o("p"),Ow=r("Example:"),Aw=d(),u(Xr.$$.fragment),Iw=d(),$t=o("div"),u(Qr.$$.fragment),Nw=d(),sp=o("p"),Dw=r("Example:"),Lw=d(),u(Hr.$$.fragment),Gw=d(),Bt=o("div"),u(Vr.$$.fragment),Ww=d(),rp=o("p"),Uw=r("Example:"),Rw=d(),u(Jr.$$.fragment),this.h()},l(n){const p=S2('[data-svelte="svelte-1phssyn"]',document.head);b=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),v=a(n,"H1",{class:!0});var Kr=s(v);M=a(Kr,"A",{id:!0,class:!0,href:!0});var ip=s(M);x=a(ip,"SPAN",{});var dp=s(x);m(T.$$.fragment,dp),dp.forEach(t),ip.forEach(t),y=l(Kr),q=a(Kr,"SPAN",{});var lp=s(q);rt=i(lp,"MBart and MBart-50"),lp.forEach(t),Kr.forEach(t),Ce=l(n),j=a(n,"P",{});var To=s(j);Re=a(To,"STRONG",{});var cp=s(Re);ke=i(cp,"DISCLAIMER:"),cp.forEach(t),it=i(To," If you see something strange, file a "),be=a(To,"A",{href:!0,rel:!0});var pp=s(be);ye=i(pp,"Github Issue"),pp.forEach(t),dt=i(To,` and assign
@patrickvonplaten`),To.forEach(t),Ke=l(n),J=a(n,"H2",{class:!0});var Zr=s(J);N=a(Zr,"A",{id:!0,class:!0,href:!0});var hp=s(N);Xe=a(hp,"SPAN",{});var up=s(Xe);m(se.$$.fragment,up),up.forEach(t),hp.forEach(t),C=l(Zr),O=a(Zr,"SPAN",{});var mp=s(O);lt=i(mp,"Overview of MBart"),mp.forEach(t),Zr.forEach(t),pe=l(n),he=a(n,"P",{});var Yr=s(he);ct=i(Yr,"The MBart model was presented in "),K=a(Yr,"A",{href:!0,rel:!0});var Qw=s(K);pt=i(Qw,"Multilingual Denoising Pre-training for Neural Machine Translation"),Qw.forEach(t),ht=i(Yr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Yr.forEach(t),D=l(n),Pe=a(n,"P",{});var Hw=s(Pe);ve=i(Hw,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Hw.forEach(t),Ze=l(n),re=a(n,"P",{});var fp=s(re);Te=i(fp,"This model was contributed by "),we=a(fp,"A",{href:!0,rel:!0});var Vw=s(we);ut=i(Vw,"valhalla"),Vw.forEach(t),ie=i(fp,". The Authors\u2019 code can be found "),Me=a(fp,"A",{href:!0,rel:!0});var Jw=s(Me);xe=i(Jw,"here"),Jw.forEach(t),fp.forEach(t),Ye=l(n),w=a(n,"H3",{class:!0});var ph=s(w);B=a(ph,"A",{id:!0,class:!0,href:!0});var Kw=s(B);ze=a(Kw,"SPAN",{});var Zw=s(ze);m(Qe.$$.fragment,Zw),Zw.forEach(t),Kw.forEach(t),Ut=l(ph),Z=a(ph,"SPAN",{});var Yw=s(Z);Rt=i(Yw,"Training of MBart"),Yw.forEach(t),ph.forEach(t),bt=l(n),Q=a(n,"P",{});var jt=s(Q);de=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=a(jt,"CODE",{});var eM=s(le);Xt=i(eM,"X [eos, src_lang_code]"),eM.forEach(t),Qt=i(jt," where "),ce=a(jt,"CODE",{});var tM=s(ce);Ht=i(tM,"X"),tM.forEach(t),Vt=i(jt,` is the source text. The
target text format is `),He=a(jt,"CODE",{});var nM=s(He);Jt=i(nM,"[tgt_lang_code] X [eos]"),nM.forEach(t),Cu=i(jt,". "),rd=a(jt,"CODE",{});var oM=s(rd);Pu=i(oM,"bos"),oM.forEach(t),Su=i(jt," is never used."),jt.forEach(t),gp=l(n),yt=a(n,"P",{});var Ei=s(yt);Ou=i(Ei,"The regular "),Co=a(Ei,"A",{href:!0});var Xw=s(Co);id=a(Xw,"STRONG",{});var aM=s(id);Au=i(aM,"call"),aM.forEach(t),Iu=i(Xw,"()"),Xw.forEach(t),Nu=i(Ei,` will encode source text format, and it should be wrapped
inside the context manager `),ei=a(Ei,"A",{href:!0});var sM=s(ei);Du=i(sM,"as_target_tokenizer()"),sM.forEach(t),Lu=i(Ei," to encode target text format."),Ei.forEach(t),_p=l(n),ti=a(n,"UL",{});var rM=s(ti);dd=a(rM,"LI",{});var iM=s(dd);Gu=i(iM,"Supervised training"),iM.forEach(t),rM.forEach(t),kp=l(n),m(Po.$$.fragment,n),bp=l(n),ni=a(n,"UL",{});var dM=s(ni);So=a(dM,"LI",{});var hh=s(So);ld=a(hh,"P",{});var lM=s(ld);Wu=i(lM,"Generation"),lM.forEach(t),Uu=l(hh),Kt=a(hh,"P",{});var Ci=s(Kt);Ru=i(Ci,"While generating the target text set the "),cd=a(Ci,"CODE",{});var cM=s(cd);Xu=i(cM,"decoder_start_token_id"),cM.forEach(t),Qu=i(Ci,` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=a(Ci,"EM",{});var pM=s(pd);Hu=i(pM,"facebook/mbart-large-en-ro"),pM.forEach(t),Vu=i(Ci," model."),Ci.forEach(t),hh.forEach(t),dM.forEach(t),yp=l(n),m(Oo.$$.fragment,n),vp=l(n),Zt=a(n,"H2",{class:!0});var uh=s(Zt);Pn=a(uh,"A",{id:!0,class:!0,href:!0});var hM=s(Pn);hd=a(hM,"SPAN",{});var uM=s(hd);m(Ao.$$.fragment,uM),uM.forEach(t),hM.forEach(t),Ju=l(uh),ud=a(uh,"SPAN",{});var mM=s(ud);Ku=i(mM,"Overview of MBart-50"),mM.forEach(t),uh.forEach(t),Tp=l(n),vt=a(n,"P",{});var Pi=s(vt);Zu=i(Pi,"MBart-50 was introduced in the "),Io=a(Pi,"A",{href:!0,rel:!0});var fM=s(Io);Yu=i(fM,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),fM.forEach(t),em=i(Pi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=a(Pi,"EM",{});var gM=s(md);tm=i(gM,"mbart-large-cc25"),gM.forEach(t),nm=i(Pi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Pi.forEach(t),wp=l(n),oi=a(n,"P",{});var _M=s(oi);om=i(_M,"According to the abstract"),_M.forEach(t),Mp=l(n),ai=a(n,"P",{});var kM=s(ai);fd=a(kM,"EM",{});var bM=s(fd);am=i(bM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),bM.forEach(t),kM.forEach(t),xp=l(n),Yt=a(n,"H3",{class:!0});var mh=s(Yt);Sn=a(mh,"A",{id:!0,class:!0,href:!0});var yM=s(Sn);gd=a(yM,"SPAN",{});var vM=s(gd);m(No.$$.fragment,vM),vM.forEach(t),yM.forEach(t),sm=l(mh),_d=a(mh,"SPAN",{});var TM=s(_d);rm=i(TM,"Training of MBart-50"),TM.forEach(t),mh.forEach(t),zp=l(n),et=a(n,"P",{});var wo=s(et);im=i(wo,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a(wo,"CODE",{});var wM=s(kd);dm=i(wM,"[lang_code] X [eos]"),wM.forEach(t),lm=i(wo,", where "),bd=a(wo,"CODE",{});var MM=s(bd);cm=i(MM,"lang_code"),MM.forEach(t),pm=i(wo,` is source
language id for source text and target language id for target text, with `),yd=a(wo,"CODE",{});var xM=s(yd);hm=i(xM,"X"),xM.forEach(t),um=i(wo,` being the source or target text
respectively.`),wo.forEach(t),Fp=l(n),On=a(n,"P",{});var fh=s(On);mm=i(fh,"MBart-50 has its own tokenizer "),si=a(fh,"A",{href:!0});var zM=s(si);fm=i(zM,"MBart50Tokenizer"),zM.forEach(t),gm=i(fh,"."),fh.forEach(t),qp=l(n),ri=a(n,"UL",{});var FM=s(ri);vd=a(FM,"LI",{});var qM=s(vd);_m=i(qM,"Supervised training"),qM.forEach(t),FM.forEach(t),$p=l(n),m(Do.$$.fragment,n),Bp=l(n),ii=a(n,"UL",{});var $M=s(ii);Lo=a($M,"LI",{});var gh=s(Lo);Td=a(gh,"P",{});var BM=s(Td);km=i(BM,"Generation"),BM.forEach(t),bm=l(gh),Fe=a(gh,"P",{});var ot=s(Fe);ym=i(ot,"To generate using the mBART-50 multilingual translation models, "),wd=a(ot,"CODE",{});var jM=s(wd);vm=i(jM,"eos_token_id"),jM.forEach(t),Tm=i(ot,` is used as the
`),Md=a(ot,"CODE",{});var EM=s(Md);wm=i(EM,"decoder_start_token_id"),EM.forEach(t),Mm=i(ot,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a(ot,"EM",{});var CM=s(xd);xm=i(CM,"forced_bos_token_id"),CM.forEach(t),zm=i(ot," parameter to the "),zd=a(ot,"EM",{});var PM=s(zd);Fm=i(PM,"generate"),PM.forEach(t),qm=i(ot,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=a(ot,"EM",{});var SM=s(Fd);$m=i(SM,"facebook/mbart-50-large-many-to-many"),SM.forEach(t),Bm=i(ot," checkpoint."),ot.forEach(t),gh.forEach(t),$M.forEach(t),jp=l(n),m(Go.$$.fragment,n),Ep=l(n),en=a(n,"H2",{class:!0});var _h=s(en);An=a(_h,"A",{id:!0,class:!0,href:!0});var OM=s(An);qd=a(OM,"SPAN",{});var AM=s(qd);m(Wo.$$.fragment,AM),AM.forEach(t),OM.forEach(t),jm=l(_h),$d=a(_h,"SPAN",{});var IM=s($d);Em=i(IM,"MBartConfig"),IM.forEach(t),_h.forEach(t),Cp=l(n),qe=a(n,"DIV",{class:!0});var Et=s(qe);m(Uo.$$.fragment,Et),Cm=l(Et),tn=a(Et,"P",{});var Si=s(tn);Pm=i(Si,"This is the configuration class to store the configuration of a "),di=a(Si,"A",{href:!0});var NM=s(di);Sm=i(NM,"MBartModel"),NM.forEach(t),Om=i(Si,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Ro=a(Si,"A",{href:!0,rel:!0});var DM=s(Ro);Am=i(DM,"facebook/mbart-large-cc25"),DM.forEach(t),Im=i(Si," architecture."),Si.forEach(t),Nm=l(Et),nn=a(Et,"P",{});var Oi=s(nn);Dm=i(Oi,"Configuration objects inherit from "),li=a(Oi,"A",{href:!0});var LM=s(li);Lm=i(LM,"PretrainedConfig"),LM.forEach(t),Gm=i(Oi,` and can be used to control the model outputs. Read the
documentation from `),ci=a(Oi,"A",{href:!0});var GM=s(ci);Wm=i(GM,"PretrainedConfig"),GM.forEach(t),Um=i(Oi," for more information."),Oi.forEach(t),Rm=l(Et),Bd=a(Et,"P",{});var WM=s(Bd);Xm=i(WM,"Example:"),WM.forEach(t),Qm=l(Et),m(Xo.$$.fragment,Et),Et.forEach(t),Pp=l(n),on=a(n,"H2",{class:!0});var kh=s(on);In=a(kh,"A",{id:!0,class:!0,href:!0});var UM=s(In);jd=a(UM,"SPAN",{});var RM=s(jd);m(Qo.$$.fragment,RM),RM.forEach(t),UM.forEach(t),Hm=l(kh),Ed=a(kh,"SPAN",{});var XM=s(Ed);Vm=i(XM,"MBartTokenizer"),XM.forEach(t),kh.forEach(t),Sp=l(n),G=a(n,"DIV",{class:!0});var me=s(G);m(Ho.$$.fragment,me),Jm=l(me),Cd=a(me,"P",{});var QM=s(Cd);Km=i(QM,"Construct an MBART tokenizer."),QM.forEach(t),Zm=l(me),mt=a(me,"P",{});var Mo=s(mt);Ym=i(Mo,"Adapted from "),pi=a(Mo,"A",{href:!0});var HM=s(pi);ef=i(HM,"RobertaTokenizer"),HM.forEach(t),tf=i(Mo," and "),hi=a(Mo,"A",{href:!0});var VM=s(hi);nf=i(VM,"XLNetTokenizer"),VM.forEach(t),of=i(Mo,`. Based on
`),Vo=a(Mo,"A",{href:!0,rel:!0});var JM=s(Vo);af=i(JM,"SentencePiece"),JM.forEach(t),sf=i(Mo,"."),Mo.forEach(t),rf=l(me),Jo=a(me,"P",{});var bh=s(Jo);df=i(bh,"The tokenization method is "),Pd=a(bh,"CODE",{});var KM=s(Pd);lf=i(KM,"<tokens> <eos> <language code>"),KM.forEach(t),cf=i(bh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),bh.forEach(t),pf=l(me),Sd=a(me,"P",{});var ZM=s(Sd);hf=i(ZM,"Examples:"),ZM.forEach(t),uf=l(me),m(Ko.$$.fragment,me),mf=l(me),Nn=a(me,"DIV",{class:!0});var yh=s(Nn);m(Zo.$$.fragment,yh),ff=l(yh),Od=a(yh,"P",{});var YM=s(Od);gf=i(YM,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),YM.forEach(t),yh.forEach(t),_f=l(me),tt=a(me,"DIV",{class:!0});var xo=s(tt);m(Yo.$$.fragment,xo),kf=l(xo),ea=a(xo,"P",{});var vh=s(ea);bf=i(vh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=a(vh,"CODE",{});var e1=s(Ad);yf=i(e1,"X"),e1.forEach(t),vf=i(vh," represents the sequence:"),vh.forEach(t),Tf=l(xo),ta=a(xo,"UL",{});var Th=s(ta);na=a(Th,"LI",{});var wh=s(na);Id=a(wh,"CODE",{});var t1=s(Id);wf=i(t1,"input_ids"),t1.forEach(t),Mf=i(wh," (for encoder) "),Nd=a(wh,"CODE",{});var n1=s(Nd);xf=i(n1,"X [eos, src_lang_code]"),n1.forEach(t),wh.forEach(t),zf=l(Th),oa=a(Th,"LI",{});var Mh=s(oa);Dd=a(Mh,"CODE",{});var o1=s(Dd);Ff=i(o1,"decoder_input_ids"),o1.forEach(t),qf=i(Mh,": (for decoder) "),Ld=a(Mh,"CODE",{});var a1=s(Ld);$f=i(a1,"X [eos, tgt_lang_code]"),a1.forEach(t),Mh.forEach(t),Th.forEach(t),Bf=l(xo),Gd=a(xo,"P",{});var s1=s(Gd);jf=i(s1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),s1.forEach(t),xo.forEach(t),me.forEach(t),Op=l(n),an=a(n,"H2",{class:!0});var xh=s(an);Dn=a(xh,"A",{id:!0,class:!0,href:!0});var r1=s(Dn);Wd=a(r1,"SPAN",{});var i1=s(Wd);m(aa.$$.fragment,i1),i1.forEach(t),r1.forEach(t),Ef=l(xh),Ud=a(xh,"SPAN",{});var d1=s(Ud);Cf=i(d1,"MBartTokenizerFast"),d1.forEach(t),xh.forEach(t),Ap=l(n),P=a(n,"DIV",{class:!0});var H=s(P);m(sa.$$.fragment,H),Pf=l(H),sn=a(H,"P",{});var Ai=s(sn);Sf=i(Ai,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=a(Ai,"EM",{});var l1=s(Rd);Of=i(l1,"tokenizers"),l1.forEach(t),Af=i(Ai,` library). Based on
`),ra=a(Ai,"A",{href:!0,rel:!0});var c1=s(ra);If=i(c1,"BPE"),c1.forEach(t),Nf=i(Ai,"."),Ai.forEach(t),Df=l(H),ia=a(H,"P",{});var zh=s(ia);Lf=i(zh,"This tokenizer inherits from "),ui=a(zh,"A",{href:!0});var p1=s(ui);Gf=i(p1,"PreTrainedTokenizerFast"),p1.forEach(t),Wf=i(zh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zh.forEach(t),Uf=l(H),da=a(H,"P",{});var Fh=s(da);Rf=i(Fh,"The tokenization method is "),Xd=a(Fh,"CODE",{});var h1=s(Xd);Xf=i(h1,"<tokens> <eos> <language code>"),h1.forEach(t),Qf=i(Fh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Fh.forEach(t),Hf=l(H),Qd=a(H,"P",{});var u1=s(Qd);Vf=i(u1,"Examples:"),u1.forEach(t),Jf=l(H),m(la.$$.fragment,H),Kf=l(H),Se=a(H,"DIV",{class:!0});var Ct=s(Se);m(ca.$$.fragment,Ct),Zf=l(Ct),Hd=a(Ct,"P",{});var m1=s(Hd);Yf=i(m1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),m1.forEach(t),eg=l(Ct),pa=a(Ct,"P",{});var qh=s(pa);tg=i(qh,"An MBART sequence has the following format, where "),Vd=a(qh,"CODE",{});var f1=s(Vd);ng=i(f1,"X"),f1.forEach(t),og=i(qh," represents the sequence:"),qh.forEach(t),ag=l(Ct),ha=a(Ct,"UL",{});var $h=s(ha);ua=a($h,"LI",{});var Bh=s(ua);Jd=a(Bh,"CODE",{});var g1=s(Jd);sg=i(g1,"input_ids"),g1.forEach(t),rg=i(Bh," (for encoder) "),Kd=a(Bh,"CODE",{});var _1=s(Kd);ig=i(_1,"X [eos, src_lang_code]"),_1.forEach(t),Bh.forEach(t),dg=l($h),ma=a($h,"LI",{});var jh=s(ma);Zd=a(jh,"CODE",{});var k1=s(Zd);lg=i(k1,"decoder_input_ids"),k1.forEach(t),cg=i(jh,": (for decoder) "),Yd=a(jh,"CODE",{});var b1=s(Yd);pg=i(b1,"X [eos, tgt_lang_code]"),b1.forEach(t),jh.forEach(t),$h.forEach(t),hg=l(Ct),el=a(Ct,"P",{});var y1=s(el);ug=i(y1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),y1.forEach(t),Ct.forEach(t),mg=l(H),Ln=a(H,"DIV",{class:!0});var Eh=s(Ln);m(fa.$$.fragment,Eh),fg=l(Eh),tl=a(Eh,"P",{});var v1=s(tl);gg=i(v1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),v1.forEach(t),Eh.forEach(t),_g=l(H),Gn=a(H,"DIV",{class:!0});var Ch=s(Gn);m(ga.$$.fragment,Ch),kg=l(Ch),nl=a(Ch,"P",{});var T1=s(nl);bg=i(T1,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),T1.forEach(t),Ch.forEach(t),yg=l(H),Wn=a(H,"DIV",{class:!0});var Ph=s(Wn);m(_a.$$.fragment,Ph),vg=l(Ph),ol=a(Ph,"P",{});var w1=s(ol);Tg=i(w1,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),w1.forEach(t),Ph.forEach(t),H.forEach(t),Ip=l(n),rn=a(n,"H2",{class:!0});var Sh=s(rn);Un=a(Sh,"A",{id:!0,class:!0,href:!0});var M1=s(Un);al=a(M1,"SPAN",{});var x1=s(al);m(ka.$$.fragment,x1),x1.forEach(t),M1.forEach(t),wg=l(Sh),sl=a(Sh,"SPAN",{});var z1=s(sl);Mg=i(z1,"MBart50Tokenizer"),z1.forEach(t),Sh.forEach(t),Np=l(n),S=a(n,"DIV",{class:!0});var V=s(S);m(ba.$$.fragment,V),xg=l(V),ya=a(V,"P",{});var Oh=s(ya);zg=i(Oh,"Construct a MBart50 tokenizer. Based on "),va=a(Oh,"A",{href:!0,rel:!0});var F1=s(va);Fg=i(F1,"SentencePiece"),F1.forEach(t),qg=i(Oh,"."),Oh.forEach(t),$g=l(V),Ta=a(V,"P",{});var Ah=s(Ta);Bg=i(Ah,"This tokenizer inherits from "),mi=a(Ah,"A",{href:!0});var q1=s(mi);jg=i(q1,"PreTrainedTokenizer"),q1.forEach(t),Eg=i(Ah,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ah.forEach(t),Cg=l(V),rl=a(V,"P",{});var $1=s(rl);Pg=i($1,"Examples:"),$1.forEach(t),Sg=l(V),m(wa.$$.fragment,V),Og=l(V),nt=a(V,"DIV",{class:!0});var zo=s(nt);m(Ma.$$.fragment,zo),Ag=l(zo),xa=a(zo,"P",{});var Ih=s(xa);Ig=i(Ih,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=a(Ih,"CODE",{});var B1=s(il);Ng=i(B1,"X"),B1.forEach(t),Dg=i(Ih," represents the sequence:"),Ih.forEach(t),Lg=l(zo),za=a(zo,"UL",{});var Nh=s(za);Fa=a(Nh,"LI",{});var Dh=s(Fa);dl=a(Dh,"CODE",{});var j1=s(dl);Gg=i(j1,"input_ids"),j1.forEach(t),Wg=i(Dh," (for encoder) "),ll=a(Dh,"CODE",{});var E1=s(ll);Ug=i(E1,"[src_lang_code] X [eos]"),E1.forEach(t),Dh.forEach(t),Rg=l(Nh),qa=a(Nh,"LI",{});var Lh=s(qa);cl=a(Lh,"CODE",{});var C1=s(cl);Xg=i(C1,"labels"),C1.forEach(t),Qg=i(Lh,": (for decoder) "),pl=a(Lh,"CODE",{});var P1=s(pl);Hg=i(P1,"[tgt_lang_code] X [eos]"),P1.forEach(t),Lh.forEach(t),Nh.forEach(t),Vg=l(zo),hl=a(zo,"P",{});var S1=s(hl);Jg=i(S1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),S1.forEach(t),zo.forEach(t),Kg=l(V),Rn=a(V,"DIV",{class:!0});var Gh=s(Rn);m($a.$$.fragment,Gh),Zg=l(Gh),ul=a(Gh,"P",{});var O1=s(ul);Yg=i(O1,"Converts a sequence of tokens (strings for sub-words) in a single string."),O1.forEach(t),Gh.forEach(t),e_=l(V),Xn=a(V,"DIV",{class:!0});var Wh=s(Xn);m(Ba.$$.fragment,Wh),t_=l(Wh),ja=a(Wh,"P",{});var Uh=s(ja);n_=i(Uh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=a(Uh,"CODE",{});var A1=s(ml);o_=i(A1,"prepare_for_model"),A1.forEach(t),a_=i(Uh," method."),Uh.forEach(t),Wh.forEach(t),s_=l(V),Qn=a(V,"DIV",{class:!0});var Rh=s(Qn);m(Ea.$$.fragment,Rh),r_=l(Rh),fl=a(Rh,"P",{});var I1=s(fl);i_=i(I1,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),I1.forEach(t),Rh.forEach(t),d_=l(V),Hn=a(V,"DIV",{class:!0});var Xh=s(Hn);m(Ca.$$.fragment,Xh),l_=l(Xh),gl=a(Xh,"P",{});var N1=s(gl);c_=i(N1,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),N1.forEach(t),Xh.forEach(t),V.forEach(t),Dp=l(n),dn=a(n,"H2",{class:!0});var Qh=s(dn);Vn=a(Qh,"A",{id:!0,class:!0,href:!0});var D1=s(Vn);_l=a(D1,"SPAN",{});var L1=s(_l);m(Pa.$$.fragment,L1),L1.forEach(t),D1.forEach(t),p_=l(Qh),kl=a(Qh,"SPAN",{});var G1=s(kl);h_=i(G1,"MBart50TokenizerFast"),G1.forEach(t),Qh.forEach(t),Lp=l(n),W=a(n,"DIV",{class:!0});var fe=s(W);m(Sa.$$.fragment,fe),u_=l(fe),ln=a(fe,"P",{});var Ii=s(ln);m_=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=a(Ii,"EM",{});var W1=s(bl);f_=i(W1,"tokenizers"),W1.forEach(t),g_=i(Ii,` library). Based on
`),Oa=a(Ii,"A",{href:!0,rel:!0});var U1=s(Oa);__=i(U1,"BPE"),U1.forEach(t),k_=i(Ii,"."),Ii.forEach(t),b_=l(fe),Aa=a(fe,"P",{});var Hh=s(Aa);y_=i(Hh,"This tokenizer inherits from "),fi=a(Hh,"A",{href:!0});var R1=s(fi);v_=i(R1,"PreTrainedTokenizerFast"),R1.forEach(t),T_=i(Hh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hh.forEach(t),w_=l(fe),yl=a(fe,"P",{});var X1=s(yl);M_=i(X1,"Examples:"),X1.forEach(t),x_=l(fe),m(Ia.$$.fragment,fe),z_=l(fe),Oe=a(fe,"DIV",{class:!0});var Pt=s(Oe);m(Na.$$.fragment,Pt),F_=l(Pt),vl=a(Pt,"P",{});var Q1=s(vl);q_=i(Q1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Q1.forEach(t),$_=l(Pt),Da=a(Pt,"P",{});var Vh=s(Da);B_=i(Vh,"An MBART-50 sequence has the following format, where "),Tl=a(Vh,"CODE",{});var H1=s(Tl);j_=i(H1,"X"),H1.forEach(t),E_=i(Vh," represents the sequence:"),Vh.forEach(t),C_=l(Pt),La=a(Pt,"UL",{});var Jh=s(La);Ga=a(Jh,"LI",{});var Kh=s(Ga);wl=a(Kh,"CODE",{});var V1=s(wl);P_=i(V1,"input_ids"),V1.forEach(t),S_=i(Kh," (for encoder) "),Ml=a(Kh,"CODE",{});var J1=s(Ml);O_=i(J1,"[src_lang_code] X [eos]"),J1.forEach(t),Kh.forEach(t),A_=l(Jh),Wa=a(Jh,"LI",{});var Zh=s(Wa);xl=a(Zh,"CODE",{});var K1=s(xl);I_=i(K1,"labels"),K1.forEach(t),N_=i(Zh,": (for decoder) "),zl=a(Zh,"CODE",{});var Z1=s(zl);D_=i(Z1,"[tgt_lang_code] X [eos]"),Z1.forEach(t),Zh.forEach(t),Jh.forEach(t),L_=l(Pt),Fl=a(Pt,"P",{});var Y1=s(Fl);G_=i(Y1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Y1.forEach(t),Pt.forEach(t),W_=l(fe),Jn=a(fe,"DIV",{class:!0});var Yh=s(Jn);m(Ua.$$.fragment,Yh),U_=l(Yh),ql=a(Yh,"P",{});var ex=s(ql);R_=i(ex,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),ex.forEach(t),Yh.forEach(t),X_=l(fe),Kn=a(fe,"DIV",{class:!0});var eu=s(Kn);m(Ra.$$.fragment,eu),Q_=l(eu),$l=a(eu,"P",{});var tx=s($l);H_=i(tx,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),tx.forEach(t),eu.forEach(t),fe.forEach(t),Gp=l(n),cn=a(n,"H2",{class:!0});var tu=s(cn);Zn=a(tu,"A",{id:!0,class:!0,href:!0});var nx=s(Zn);Bl=a(nx,"SPAN",{});var ox=s(Bl);m(Xa.$$.fragment,ox),ox.forEach(t),nx.forEach(t),V_=l(tu),jl=a(tu,"SPAN",{});var ax=s(jl);J_=i(ax,"MBartModel"),ax.forEach(t),tu.forEach(t),Wp=l(n),Ve=a(n,"DIV",{class:!0});var Fo=s(Ve);m(Qa.$$.fragment,Fo),K_=l(Fo),Ha=a(Fo,"P",{});var nu=s(Ha);Z_=i(nu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gi=a(nu,"A",{href:!0});var sx=s(gi);Y_=i(sx,"PreTrainedModel"),sx.forEach(t),ek=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu.forEach(t),tk=l(Fo),Va=a(Fo,"P",{});var ou=s(Va);nk=i(ou,"This model is also a PyTorch "),Ja=a(ou,"A",{href:!0,rel:!0});var rx=s(Ja);ok=i(rx,"torch.nn.Module"),rx.forEach(t),ak=i(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(t),sk=l(Fo),Ae=a(Fo,"DIV",{class:!0});var St=s(Ae);m(Ka.$$.fragment,St),rk=l(St),pn=a(St,"P",{});var Ni=s(pn);ik=i(Ni,"The "),_i=a(Ni,"A",{href:!0});var ix=s(_i);dk=i(ix,"MBartModel"),ix.forEach(t),lk=i(Ni," forward method, overrides the "),El=a(Ni,"CODE",{});var dx=s(El);ck=i(dx,"__call__"),dx.forEach(t),pk=i(Ni," special method."),Ni.forEach(t),hk=l(St),m(Yn.$$.fragment,St),uk=l(St),Cl=a(St,"P",{});var lx=s(Cl);mk=i(lx,"Example:"),lx.forEach(t),fk=l(St),m(Za.$$.fragment,St),St.forEach(t),Fo.forEach(t),Up=l(n),hn=a(n,"H2",{class:!0});var au=s(hn);eo=a(au,"A",{id:!0,class:!0,href:!0});var cx=s(eo);Pl=a(cx,"SPAN",{});var px=s(Pl);m(Ya.$$.fragment,px),px.forEach(t),cx.forEach(t),gk=l(au),Sl=a(au,"SPAN",{});var hx=s(Sl);_k=i(hx,"MBartForConditionalGeneration"),hx.forEach(t),au.forEach(t),Rp=l(n),Je=a(n,"DIV",{class:!0});var qo=s(Je);m(es.$$.fragment,qo),kk=l(qo),ts=a(qo,"P",{});var su=s(ts);bk=i(su,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=a(su,"A",{href:!0});var ux=s(ki);yk=i(ux,"PreTrainedModel"),ux.forEach(t),vk=i(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(t),Tk=l(qo),ns=a(qo,"P",{});var ru=s(ns);wk=i(ru,"This model is also a PyTorch "),os=a(ru,"A",{href:!0,rel:!0});var mx=s(os);Mk=i(mx,"torch.nn.Module"),mx.forEach(t),xk=i(ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru.forEach(t),zk=l(qo),Y=a(qo,"DIV",{class:!0});var Ge=s(Y);m(as.$$.fragment,Ge),Fk=l(Ge),un=a(Ge,"P",{});var Di=s(un);qk=i(Di,"The "),bi=a(Di,"A",{href:!0});var fx=s(bi);$k=i(fx,"MBartForConditionalGeneration"),fx.forEach(t),Bk=i(Di," forward method, overrides the "),Ol=a(Di,"CODE",{});var gx=s(Ol);jk=i(gx,"__call__"),gx.forEach(t),Ek=i(Di," special method."),Di.forEach(t),Ck=l(Ge),m(to.$$.fragment,Ge),Pk=l(Ge),Al=a(Ge,"P",{});var _x=s(Al);Sk=i(_x,"Translation example:"),_x.forEach(t),Ok=l(Ge),m(ss.$$.fragment,Ge),Ak=l(Ge),Il=a(Ge,"P",{});var kx=s(Il);Ik=i(kx,"Mask filling example:"),kx.forEach(t),Nk=l(Ge),m(rs.$$.fragment,Ge),Ge.forEach(t),qo.forEach(t),Xp=l(n),mn=a(n,"H2",{class:!0});var iu=s(mn);no=a(iu,"A",{id:!0,class:!0,href:!0});var bx=s(no);Nl=a(bx,"SPAN",{});var yx=s(Nl);m(is.$$.fragment,yx),yx.forEach(t),bx.forEach(t),Dk=l(iu),Dl=a(iu,"SPAN",{});var vx=s(Dl);Lk=i(vx,"MBartForQuestionAnswering"),vx.forEach(t),iu.forEach(t),Qp=l(n),$e=a(n,"DIV",{class:!0});var Ot=s($e);m(ds.$$.fragment,Ot),Gk=l(Ot),fn=a(Ot,"P",{});var Li=s(fn);Wk=i(Li,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=a(Li,"CODE",{});var Tx=s(Ll);Uk=i(Tx,"span start logits"),Tx.forEach(t),Rk=i(Li," and "),Gl=a(Li,"CODE",{});var wx=s(Gl);Xk=i(wx,"span end logits"),wx.forEach(t),Qk=i(Li,")."),Li.forEach(t),Hk=l(Ot),ls=a(Ot,"P",{});var du=s(ls);Vk=i(du,"This model inherits from "),yi=a(du,"A",{href:!0});var Mx=s(yi);Jk=i(Mx,"PreTrainedModel"),Mx.forEach(t),Kk=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),Zk=l(Ot),cs=a(Ot,"P",{});var lu=s(cs);Yk=i(lu,"This model is also a PyTorch "),ps=a(lu,"A",{href:!0,rel:!0});var xx=s(ps);eb=i(xx,"torch.nn.Module"),xx.forEach(t),tb=i(lu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lu.forEach(t),nb=l(Ot),ue=a(Ot,"DIV",{class:!0});var at=s(ue);m(hs.$$.fragment,at),ob=l(at),gn=a(at,"P",{});var Gi=s(gn);ab=i(Gi,"The "),vi=a(Gi,"A",{href:!0});var zx=s(vi);sb=i(zx,"MBartForQuestionAnswering"),zx.forEach(t),rb=i(Gi," forward method, overrides the "),Wl=a(Gi,"CODE",{});var Fx=s(Wl);ib=i(Fx,"__call__"),Fx.forEach(t),db=i(Gi," special method."),Gi.forEach(t),lb=l(at),m(oo.$$.fragment,at),cb=l(at),Ul=a(at,"P",{});var qx=s(Ul);pb=i(qx,"Example:"),qx.forEach(t),hb=l(at),m(us.$$.fragment,at),ub=l(at),m(ms.$$.fragment,at),at.forEach(t),Ot.forEach(t),Hp=l(n),_n=a(n,"H2",{class:!0});var cu=s(_n);ao=a(cu,"A",{id:!0,class:!0,href:!0});var $x=s(ao);Rl=a($x,"SPAN",{});var Bx=s(Rl);m(fs.$$.fragment,Bx),Bx.forEach(t),$x.forEach(t),mb=l(cu),Xl=a(cu,"SPAN",{});var jx=s(Xl);fb=i(jx,"MBartForSequenceClassification"),jx.forEach(t),cu.forEach(t),Vp=l(n),Be=a(n,"DIV",{class:!0});var At=s(Be);m(gs.$$.fragment,At),gb=l(At),Ql=a(At,"P",{});var Ex=s(Ql);_b=i(Ex,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ex.forEach(t),kb=l(At),_s=a(At,"P",{});var pu=s(_s);bb=i(pu,"This model inherits from "),Ti=a(pu,"A",{href:!0});var Cx=s(Ti);yb=i(Cx,"PreTrainedModel"),Cx.forEach(t),vb=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pu.forEach(t),Tb=l(At),ks=a(At,"P",{});var hu=s(ks);wb=i(hu,"This model is also a PyTorch "),bs=a(hu,"A",{href:!0,rel:!0});var Px=s(bs);Mb=i(Px,"torch.nn.Module"),Px.forEach(t),xb=i(hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu.forEach(t),zb=l(At),L=a(At,"DIV",{class:!0});var ne=s(L);m(ys.$$.fragment,ne),Fb=l(ne),kn=a(ne,"P",{});var Wi=s(kn);qb=i(Wi,"The "),wi=a(Wi,"A",{href:!0});var Sx=s(wi);$b=i(Sx,"MBartForSequenceClassification"),Sx.forEach(t),Bb=i(Wi," forward method, overrides the "),Hl=a(Wi,"CODE",{});var Ox=s(Hl);jb=i(Ox,"__call__"),Ox.forEach(t),Eb=i(Wi," special method."),Wi.forEach(t),Cb=l(ne),m(so.$$.fragment,ne),Pb=l(ne),Vl=a(ne,"P",{});var Ax=s(Vl);Sb=i(Ax,"Example of single-label classification:"),Ax.forEach(t),Ob=l(ne),m(vs.$$.fragment,ne),Ab=l(ne),m(Ts.$$.fragment,ne),Ib=l(ne),Jl=a(ne,"P",{});var Ix=s(Jl);Nb=i(Ix,"Example of multi-label classification:"),Ix.forEach(t),Db=l(ne),m(ws.$$.fragment,ne),Lb=l(ne),m(Ms.$$.fragment,ne),ne.forEach(t),At.forEach(t),Jp=l(n),bn=a(n,"H2",{class:!0});var uu=s(bn);ro=a(uu,"A",{id:!0,class:!0,href:!0});var Nx=s(ro);Kl=a(Nx,"SPAN",{});var Dx=s(Kl);m(xs.$$.fragment,Dx),Dx.forEach(t),Nx.forEach(t),Gb=l(uu),Zl=a(uu,"SPAN",{});var Lx=s(Zl);Wb=i(Lx,"MBartForCausalLM"),Lx.forEach(t),uu.forEach(t),Kp=l(n),yn=a(n,"DIV",{class:!0});var mu=s(yn);m(zs.$$.fragment,mu),Ub=l(mu),Tt=a(mu,"DIV",{class:!0});var Ui=s(Tt);m(Fs.$$.fragment,Ui),Rb=l(Ui),Yl=a(Ui,"P",{});var Gx=s(Yl);Xb=i(Gx,"Example:"),Gx.forEach(t),Qb=l(Ui),m(qs.$$.fragment,Ui),Ui.forEach(t),mu.forEach(t),Zp=l(n),vn=a(n,"H2",{class:!0});var fu=s(vn);io=a(fu,"A",{id:!0,class:!0,href:!0});var Wx=s(io);ec=a(Wx,"SPAN",{});var Ux=s(ec);m($s.$$.fragment,Ux),Ux.forEach(t),Wx.forEach(t),Hb=l(fu),tc=a(fu,"SPAN",{});var Rx=s(tc);Vb=i(Rx,"TFMBartModel"),Rx.forEach(t),fu.forEach(t),Yp=l(n),je=a(n,"DIV",{class:!0});var It=s(je);m(Bs.$$.fragment,It),Jb=l(It),js=a(It,"P",{});var gu=s(js);Kb=i(gu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=a(gu,"A",{href:!0});var Xx=s(Mi);Zb=i(Xx,"TFPreTrainedModel"),Xx.forEach(t),Yb=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(t),ey=l(It),Es=a(It,"P",{});var _u=s(Es);ty=i(_u,"This model is also a "),Cs=a(_u,"A",{href:!0,rel:!0});var Qx=s(Cs);ny=i(Qx,"tf.keras.Model"),Qx.forEach(t),oy=i(_u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_u.forEach(t),ay=l(It),m(lo.$$.fragment,It),sy=l(It),Ie=a(It,"DIV",{class:!0});var Nt=s(Ie);m(Ps.$$.fragment,Nt),ry=l(Nt),Tn=a(Nt,"P",{});var Ri=s(Tn);iy=i(Ri,"The "),xi=a(Ri,"A",{href:!0});var Hx=s(xi);dy=i(Hx,"TFMBartModel"),Hx.forEach(t),ly=i(Ri," forward method, overrides the "),nc=a(Ri,"CODE",{});var Vx=s(nc);cy=i(Vx,"__call__"),Vx.forEach(t),py=i(Ri," special method."),Ri.forEach(t),hy=l(Nt),m(co.$$.fragment,Nt),uy=l(Nt),oc=a(Nt,"P",{});var Jx=s(oc);my=i(Jx,"Example:"),Jx.forEach(t),fy=l(Nt),m(Ss.$$.fragment,Nt),Nt.forEach(t),It.forEach(t),eh=l(n),wn=a(n,"H2",{class:!0});var ku=s(wn);po=a(ku,"A",{id:!0,class:!0,href:!0});var Kx=s(po);ac=a(Kx,"SPAN",{});var Zx=s(ac);m(Os.$$.fragment,Zx),Zx.forEach(t),Kx.forEach(t),gy=l(ku),sc=a(ku,"SPAN",{});var Yx=s(sc);_y=i(Yx,"TFMBartForConditionalGeneration"),Yx.forEach(t),ku.forEach(t),th=l(n),Ee=a(n,"DIV",{class:!0});var Dt=s(Ee);m(As.$$.fragment,Dt),ky=l(Dt),Is=a(Dt,"P",{});var bu=s(Is);by=i(bu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a(bu,"A",{href:!0});var ez=s(zi);yy=i(ez,"TFPreTrainedModel"),ez.forEach(t),vy=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu.forEach(t),Ty=l(Dt),Ns=a(Dt,"P",{});var yu=s(Ns);wy=i(yu,"This model is also a "),Ds=a(yu,"A",{href:!0,rel:!0});var tz=s(Ds);My=i(tz,"tf.keras.Model"),tz.forEach(t),xy=i(yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yu.forEach(t),zy=l(Dt),m(ho.$$.fragment,Dt),Fy=l(Dt),ee=a(Dt,"DIV",{class:!0});var We=s(ee);m(Ls.$$.fragment,We),qy=l(We),Mn=a(We,"P",{});var Xi=s(Mn);$y=i(Xi,"The "),Fi=a(Xi,"A",{href:!0});var nz=s(Fi);By=i(nz,"TFMBartForConditionalGeneration"),nz.forEach(t),jy=i(Xi," forward method, overrides the "),rc=a(Xi,"CODE",{});var oz=s(rc);Ey=i(oz,"__call__"),oz.forEach(t),Cy=i(Xi," special method."),Xi.forEach(t),Py=l(We),m(uo.$$.fragment,We),Sy=l(We),ic=a(We,"P",{});var az=s(ic);Oy=i(az,"Summarization example:"),az.forEach(t),Ay=l(We),m(Gs.$$.fragment,We),Iy=l(We),dc=a(We,"P",{});var sz=s(dc);Ny=i(sz,"Mask filling example:"),sz.forEach(t),Dy=l(We),m(Ws.$$.fragment,We),We.forEach(t),Dt.forEach(t),nh=l(n),xn=a(n,"H2",{class:!0});var vu=s(xn);mo=a(vu,"A",{id:!0,class:!0,href:!0});var rz=s(mo);lc=a(rz,"SPAN",{});var iz=s(lc);m(Us.$$.fragment,iz),iz.forEach(t),rz.forEach(t),Ly=l(vu),cc=a(vu,"SPAN",{});var dz=s(cc);Gy=i(dz,"FlaxMBartModel"),dz.forEach(t),vu.forEach(t),oh=l(n),U=a(n,"DIV",{class:!0});var ge=s(U);m(Rs.$$.fragment,ge),Wy=l(ge),Xs=a(ge,"P",{});var Tu=s(Xs);Uy=i(Tu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(Tu,"A",{href:!0});var lz=s(qi);Ry=i(lz,"FlaxPreTrainedModel"),lz.forEach(t),Xy=i(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Qy=l(ge),Qs=a(ge,"P",{});var wu=s(Qs);Hy=i(wu,`This model is also a Flax Linen
`),Hs=a(wu,"A",{href:!0,rel:!0});var cz=s(Hs);Vy=i(cz,"flax.nn.Module"),cz.forEach(t),Jy=i(wu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wu.forEach(t),Ky=l(ge),pc=a(ge,"P",{});var pz=s(pc);Zy=i(pz,"Finally, this model supports inherent JAX features such as:"),pz.forEach(t),Yy=l(ge),ft=a(ge,"UL",{});var $o=s(ft);hc=a($o,"LI",{});var hz=s(hc);Vs=a(hz,"A",{href:!0,rel:!0});var uz=s(Vs);ev=i(uz,"Just-In-Time (JIT) compilation"),uz.forEach(t),hz.forEach(t),tv=l($o),uc=a($o,"LI",{});var mz=s(uc);Js=a(mz,"A",{href:!0,rel:!0});var fz=s(Js);nv=i(fz,"Automatic Differentiation"),fz.forEach(t),mz.forEach(t),ov=l($o),mc=a($o,"LI",{});var gz=s(mc);Ks=a(gz,"A",{href:!0,rel:!0});var _z=s(Ks);av=i(_z,"Vectorization"),_z.forEach(t),gz.forEach(t),sv=l($o),fc=a($o,"LI",{});var kz=s(fc);Zs=a(kz,"A",{href:!0,rel:!0});var bz=s(Zs);rv=i(bz,"Parallelization"),bz.forEach(t),kz.forEach(t),$o.forEach(t),iv=l(ge),Ne=a(ge,"DIV",{class:!0});var Lt=s(Ne);m(Ys.$$.fragment,Lt),dv=l(Lt),zn=a(Lt,"P",{});var Qi=s(zn);lv=i(Qi,"The "),gc=a(Qi,"CODE",{});var yz=s(gc);cv=i(yz,"FlaxMBartPreTrainedModel"),yz.forEach(t),pv=i(Qi,"forward method, overrides the "),_c=a(Qi,"CODE",{});var vz=s(_c);hv=i(vz,"__call__"),vz.forEach(t),uv=i(Qi," special method."),Qi.forEach(t),mv=l(Lt),m(fo.$$.fragment,Lt),fv=l(Lt),kc=a(Lt,"P",{});var Tz=s(kc);gv=i(Tz,"Example:"),Tz.forEach(t),_v=l(Lt),m(er.$$.fragment,Lt),Lt.forEach(t),kv=l(ge),wt=a(ge,"DIV",{class:!0});var Hi=s(wt);m(tr.$$.fragment,Hi),bv=l(Hi),bc=a(Hi,"P",{});var wz=s(bc);yv=i(wz,"Example:"),wz.forEach(t),vv=l(Hi),m(nr.$$.fragment,Hi),Hi.forEach(t),Tv=l(ge),Mt=a(ge,"DIV",{class:!0});var Vi=s(Mt);m(or.$$.fragment,Vi),wv=l(Vi),yc=a(Vi,"P",{});var Mz=s(yc);Mv=i(Mz,"Example:"),Mz.forEach(t),xv=l(Vi),m(ar.$$.fragment,Vi),Vi.forEach(t),ge.forEach(t),ah=l(n),Fn=a(n,"H2",{class:!0});var Mu=s(Fn);go=a(Mu,"A",{id:!0,class:!0,href:!0});var xz=s(go);vc=a(xz,"SPAN",{});var zz=s(vc);m(sr.$$.fragment,zz),zz.forEach(t),xz.forEach(t),zv=l(Mu),Tc=a(Mu,"SPAN",{});var Fz=s(Tc);Fv=i(Fz,"FlaxMBartForConditionalGeneration"),Fz.forEach(t),Mu.forEach(t),sh=l(n),R=a(n,"DIV",{class:!0});var _e=s(R);m(rr.$$.fragment,_e),qv=l(_e),ir=a(_e,"P",{});var xu=s(ir);$v=i(xu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(xu,"A",{href:!0});var qz=s($i);Bv=i(qz,"FlaxPreTrainedModel"),qz.forEach(t),jv=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Ev=l(_e),dr=a(_e,"P",{});var zu=s(dr);Cv=i(zu,`This model is also a Flax Linen
`),lr=a(zu,"A",{href:!0,rel:!0});var $z=s(lr);Pv=i($z,"flax.nn.Module"),$z.forEach(t),Sv=i(zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zu.forEach(t),Ov=l(_e),wc=a(_e,"P",{});var Bz=s(wc);Av=i(Bz,"Finally, this model supports inherent JAX features such as:"),Bz.forEach(t),Iv=l(_e),gt=a(_e,"UL",{});var Bo=s(gt);Mc=a(Bo,"LI",{});var jz=s(Mc);cr=a(jz,"A",{href:!0,rel:!0});var Ez=s(cr);Nv=i(Ez,"Just-In-Time (JIT) compilation"),Ez.forEach(t),jz.forEach(t),Dv=l(Bo),xc=a(Bo,"LI",{});var Cz=s(xc);pr=a(Cz,"A",{href:!0,rel:!0});var Pz=s(pr);Lv=i(Pz,"Automatic Differentiation"),Pz.forEach(t),Cz.forEach(t),Gv=l(Bo),zc=a(Bo,"LI",{});var Sz=s(zc);hr=a(Sz,"A",{href:!0,rel:!0});var Oz=s(hr);Wv=i(Oz,"Vectorization"),Oz.forEach(t),Sz.forEach(t),Uv=l(Bo),Fc=a(Bo,"LI",{});var Az=s(Fc);ur=a(Az,"A",{href:!0,rel:!0});var Iz=s(ur);Rv=i(Iz,"Parallelization"),Iz.forEach(t),Az.forEach(t),Bo.forEach(t),Xv=l(_e),te=a(_e,"DIV",{class:!0});var Ue=s(te);m(mr.$$.fragment,Ue),Qv=l(Ue),qn=a(Ue,"P",{});var Ji=s(qn);Hv=i(Ji,"The "),qc=a(Ji,"CODE",{});var Nz=s(qc);Vv=i(Nz,"FlaxMBartPreTrainedModel"),Nz.forEach(t),Jv=i(Ji,"forward method, overrides the "),$c=a(Ji,"CODE",{});var Dz=s($c);Kv=i(Dz,"__call__"),Dz.forEach(t),Zv=i(Ji," special method."),Ji.forEach(t),Yv=l(Ue),m(_o.$$.fragment,Ue),eT=l(Ue),Bc=a(Ue,"P",{});var Lz=s(Bc);tT=i(Lz,"Summarization example:"),Lz.forEach(t),nT=l(Ue),m(fr.$$.fragment,Ue),oT=l(Ue),jc=a(Ue,"P",{});var Gz=s(jc);aT=i(Gz,"Mask filling example:"),Gz.forEach(t),sT=l(Ue),m(gr.$$.fragment,Ue),Ue.forEach(t),rT=l(_e),xt=a(_e,"DIV",{class:!0});var Ki=s(xt);m(_r.$$.fragment,Ki),iT=l(Ki),Ec=a(Ki,"P",{});var Wz=s(Ec);dT=i(Wz,"Example:"),Wz.forEach(t),lT=l(Ki),m(kr.$$.fragment,Ki),Ki.forEach(t),cT=l(_e),zt=a(_e,"DIV",{class:!0});var Zi=s(zt);m(br.$$.fragment,Zi),pT=l(Zi),Cc=a(Zi,"P",{});var Uz=s(Cc);hT=i(Uz,"Example:"),Uz.forEach(t),uT=l(Zi),m(yr.$$.fragment,Zi),Zi.forEach(t),_e.forEach(t),rh=l(n),$n=a(n,"H2",{class:!0});var Fu=s($n);ko=a(Fu,"A",{id:!0,class:!0,href:!0});var Rz=s(ko);Pc=a(Rz,"SPAN",{});var Xz=s(Pc);m(vr.$$.fragment,Xz),Xz.forEach(t),Rz.forEach(t),mT=l(Fu),Sc=a(Fu,"SPAN",{});var Qz=s(Sc);fT=i(Qz,"FlaxMBartForSequenceClassification"),Qz.forEach(t),Fu.forEach(t),ih=l(n),A=a(n,"DIV",{class:!0});var oe=s(A);m(Tr.$$.fragment,oe),gT=l(oe),Oc=a(oe,"P",{});var Hz=s(Oc);_T=i(Hz,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Hz.forEach(t),kT=l(oe),wr=a(oe,"P",{});var qu=s(wr);bT=i(qu,"This model inherits from "),Bi=a(qu,"A",{href:!0});var Vz=s(Bi);yT=i(Vz,"FlaxPreTrainedModel"),Vz.forEach(t),vT=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),TT=l(oe),Mr=a(oe,"P",{});var $u=s(Mr);wT=i($u,`This model is also a Flax Linen
`),xr=a($u,"A",{href:!0,rel:!0});var Jz=s(xr);MT=i(Jz,"flax.nn.Module"),Jz.forEach(t),xT=i($u,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$u.forEach(t),zT=l(oe),Ac=a(oe,"P",{});var Kz=s(Ac);FT=i(Kz,"Finally, this model supports inherent JAX features such as:"),Kz.forEach(t),qT=l(oe),_t=a(oe,"UL",{});var jo=s(_t);Ic=a(jo,"LI",{});var Zz=s(Ic);zr=a(Zz,"A",{href:!0,rel:!0});var Yz=s(zr);$T=i(Yz,"Just-In-Time (JIT) compilation"),Yz.forEach(t),Zz.forEach(t),BT=l(jo),Nc=a(jo,"LI",{});var e2=s(Nc);Fr=a(e2,"A",{href:!0,rel:!0});var t2=s(Fr);jT=i(t2,"Automatic Differentiation"),t2.forEach(t),e2.forEach(t),ET=l(jo),Dc=a(jo,"LI",{});var n2=s(Dc);qr=a(n2,"A",{href:!0,rel:!0});var o2=s(qr);CT=i(o2,"Vectorization"),o2.forEach(t),n2.forEach(t),PT=l(jo),Lc=a(jo,"LI",{});var a2=s(Lc);$r=a(a2,"A",{href:!0,rel:!0});var s2=s($r);ST=i(s2,"Parallelization"),s2.forEach(t),a2.forEach(t),jo.forEach(t),OT=l(oe),De=a(oe,"DIV",{class:!0});var Gt=s(De);m(Br.$$.fragment,Gt),AT=l(Gt),Bn=a(Gt,"P",{});var Yi=s(Bn);IT=i(Yi,"The "),Gc=a(Yi,"CODE",{});var r2=s(Gc);NT=i(r2,"FlaxMBartPreTrainedModel"),r2.forEach(t),DT=i(Yi,"forward method, overrides the "),Wc=a(Yi,"CODE",{});var i2=s(Wc);LT=i(i2,"__call__"),i2.forEach(t),GT=i(Yi," special method."),Yi.forEach(t),WT=l(Gt),m(bo.$$.fragment,Gt),UT=l(Gt),Uc=a(Gt,"P",{});var d2=s(Uc);RT=i(d2,"Example:"),d2.forEach(t),XT=l(Gt),m(jr.$$.fragment,Gt),Gt.forEach(t),QT=l(oe),Ft=a(oe,"DIV",{class:!0});var ed=s(Ft);m(Er.$$.fragment,ed),HT=l(ed),Rc=a(ed,"P",{});var l2=s(Rc);VT=i(l2,"Example:"),l2.forEach(t),JT=l(ed),m(Cr.$$.fragment,ed),ed.forEach(t),KT=l(oe),qt=a(oe,"DIV",{class:!0});var td=s(qt);m(Pr.$$.fragment,td),ZT=l(td),Xc=a(td,"P",{});var c2=s(Xc);YT=i(c2,"Example:"),c2.forEach(t),ew=l(td),m(Sr.$$.fragment,td),td.forEach(t),oe.forEach(t),dh=l(n),jn=a(n,"H2",{class:!0});var Bu=s(jn);yo=a(Bu,"A",{id:!0,class:!0,href:!0});var p2=s(yo);Qc=a(p2,"SPAN",{});var h2=s(Qc);m(Or.$$.fragment,h2),h2.forEach(t),p2.forEach(t),tw=l(Bu),Hc=a(Bu,"SPAN",{});var u2=s(Hc);nw=i(u2,"FlaxMBartForQuestionAnswering"),u2.forEach(t),Bu.forEach(t),lh=l(n),I=a(n,"DIV",{class:!0});var ae=s(I);m(Ar.$$.fragment,ae),ow=l(ae),En=a(ae,"P",{});var nd=s(En);aw=i(nd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=a(nd,"CODE",{});var m2=s(Vc);sw=i(m2,"span start logits"),m2.forEach(t),rw=i(nd," and "),Jc=a(nd,"CODE",{});var f2=s(Jc);iw=i(f2,"span end logits"),f2.forEach(t),dw=i(nd,")."),nd.forEach(t),lw=l(ae),Ir=a(ae,"P",{});var ju=s(Ir);cw=i(ju,"This model inherits from "),ji=a(ju,"A",{href:!0});var g2=s(ji);pw=i(g2,"FlaxPreTrainedModel"),g2.forEach(t),hw=i(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),uw=l(ae),Nr=a(ae,"P",{});var Eu=s(Nr);mw=i(Eu,`This model is also a Flax Linen
`),Dr=a(Eu,"A",{href:!0,rel:!0});var _2=s(Dr);fw=i(_2,"flax.nn.Module"),_2.forEach(t),gw=i(Eu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Eu.forEach(t),_w=l(ae),Kc=a(ae,"P",{});var k2=s(Kc);kw=i(k2,"Finally, this model supports inherent JAX features such as:"),k2.forEach(t),bw=l(ae),kt=a(ae,"UL",{});var Eo=s(kt);Zc=a(Eo,"LI",{});var b2=s(Zc);Lr=a(b2,"A",{href:!0,rel:!0});var y2=s(Lr);yw=i(y2,"Just-In-Time (JIT) compilation"),y2.forEach(t),b2.forEach(t),vw=l(Eo),Yc=a(Eo,"LI",{});var v2=s(Yc);Gr=a(v2,"A",{href:!0,rel:!0});var T2=s(Gr);Tw=i(T2,"Automatic Differentiation"),T2.forEach(t),v2.forEach(t),ww=l(Eo),ep=a(Eo,"LI",{});var w2=s(ep);Wr=a(w2,"A",{href:!0,rel:!0});var M2=s(Wr);Mw=i(M2,"Vectorization"),M2.forEach(t),w2.forEach(t),xw=l(Eo),tp=a(Eo,"LI",{});var x2=s(tp);Ur=a(x2,"A",{href:!0,rel:!0});var z2=s(Ur);zw=i(z2,"Parallelization"),z2.forEach(t),x2.forEach(t),Eo.forEach(t),Fw=l(ae),Le=a(ae,"DIV",{class:!0});var Wt=s(Le);m(Rr.$$.fragment,Wt),qw=l(Wt),Cn=a(Wt,"P",{});var od=s(Cn);$w=i(od,"The "),np=a(od,"CODE",{});var F2=s(np);Bw=i(F2,"FlaxMBartPreTrainedModel"),F2.forEach(t),jw=i(od,"forward method, overrides the "),op=a(od,"CODE",{});var q2=s(op);Ew=i(q2,"__call__"),q2.forEach(t),Cw=i(od," special method."),od.forEach(t),Pw=l(Wt),m(vo.$$.fragment,Wt),Sw=l(Wt),ap=a(Wt,"P",{});var $2=s(ap);Ow=i($2,"Example:"),$2.forEach(t),Aw=l(Wt),m(Xr.$$.fragment,Wt),Wt.forEach(t),Iw=l(ae),$t=a(ae,"DIV",{class:!0});var ad=s($t);m(Qr.$$.fragment,ad),Nw=l(ad),sp=a(ad,"P",{});var B2=s(sp);Dw=i(B2,"Example:"),B2.forEach(t),Lw=l(ad),m(Hr.$$.fragment,ad),ad.forEach(t),Gw=l(ae),Bt=a(ae,"DIV",{class:!0});var sd=s(Bt);m(Vr.$$.fragment,sd),Ww=l(sd),rp=a(sd,"P",{});var j2=s(rp);Uw=i(j2,"Example:"),j2.forEach(t),Rw=l(sd),m(Jr.$$.fragment,sd),sd.forEach(t),ae.forEach(t),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(J2)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(be,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(be,"rel","nofollow"),c(N,"id","overview-of-mbart"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview-of-mbart"),c(J,"class","relative group"),c(K,"href","https://arxiv.org/abs/2001.08210"),c(K,"rel","nofollow"),c(we,"href","https://huggingface.co/valhalla"),c(we,"rel","nofollow"),c(Me,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Me,"rel","nofollow"),c(B,"id","training-of-mbart"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#training-of-mbart"),c(w,"class","relative group"),c(Co,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(ei,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Pn,"id","overview-of-mbart50"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#overview-of-mbart50"),c(Zt,"class","relative group"),c(Io,"href","https://arxiv.org/abs/2008.00401"),c(Io,"rel","nofollow"),c(Sn,"id","training-of-mbart50"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#training-of-mbart50"),c(Yt,"class","relative group"),c(si,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(An,"id","transformers.MBartConfig"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.MBartConfig"),c(en,"class","relative group"),c(di,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),c(Ro,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Ro,"rel","nofollow"),c(li,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ci,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"class","docstring"),c(In,"id","transformers.MBartTokenizer"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.MBartTokenizer"),c(on,"class","relative group"),c(pi,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(hi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Vo,"href","https://github.com/google/sentencepiece"),c(Vo,"rel","nofollow"),c(Nn,"class","docstring"),c(tt,"class","docstring"),c(G,"class","docstring"),c(Dn,"id","transformers.MBartTokenizerFast"),c(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dn,"href","#transformers.MBartTokenizerFast"),c(an,"class","relative group"),c(ra,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ra,"rel","nofollow"),c(ui,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Se,"class","docstring"),c(Ln,"class","docstring"),c(Gn,"class","docstring"),c(Wn,"class","docstring"),c(P,"class","docstring"),c(Un,"id","transformers.MBart50Tokenizer"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.MBart50Tokenizer"),c(rn,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(mi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(nt,"class","docstring"),c(Rn,"class","docstring"),c(Xn,"class","docstring"),c(Qn,"class","docstring"),c(Hn,"class","docstring"),c(S,"class","docstring"),c(Vn,"id","transformers.MBart50TokenizerFast"),c(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vn,"href","#transformers.MBart50TokenizerFast"),c(dn,"class","relative group"),c(Oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Oa,"rel","nofollow"),c(fi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Oe,"class","docstring"),c(Jn,"class","docstring"),c(Kn,"class","docstring"),c(W,"class","docstring"),c(Zn,"id","transformers.MBartModel"),c(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zn,"href","#transformers.MBartModel"),c(cn,"class","relative group"),c(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(_i,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),c(Ae,"class","docstring"),c(Ve,"class","docstring"),c(eo,"id","transformers.MBartForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.MBartForConditionalGeneration"),c(hn,"class","relative group"),c(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(os,"rel","nofollow"),c(bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Y,"class","docstring"),c(Je,"class","docstring"),c(no,"id","transformers.MBartForQuestionAnswering"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.MBartForQuestionAnswering"),c(mn,"class","relative group"),c(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(vi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(ue,"class","docstring"),c($e,"class","docstring"),c(ao,"id","transformers.MBartForSequenceClassification"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.MBartForSequenceClassification"),c(_n,"class","relative group"),c(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bs,"rel","nofollow"),c(wi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(L,"class","docstring"),c(Be,"class","docstring"),c(ro,"id","transformers.MBartForCausalLM"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.MBartForCausalLM"),c(bn,"class","relative group"),c(Tt,"class","docstring"),c(yn,"class","docstring"),c(io,"id","transformers.TFMBartModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFMBartModel"),c(vn,"class","relative group"),c(Mi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(xi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(po,"id","transformers.TFMBartForConditionalGeneration"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFMBartForConditionalGeneration"),c(wn,"class","relative group"),c(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ds,"rel","nofollow"),c(Fi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Ee,"class","docstring"),c(mo,"id","transformers.FlaxMBartModel"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.FlaxMBartModel"),c(xn,"class","relative group"),c(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ne,"class","docstring"),c(wt,"class","docstring"),c(Mt,"class","docstring"),c(U,"class","docstring"),c(go,"id","transformers.FlaxMBartForConditionalGeneration"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Fn,"class","relative group"),c($i,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(te,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(R,"class","docstring"),c(ko,"id","transformers.FlaxMBartForSequenceClassification"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.FlaxMBartForSequenceClassification"),c($n,"class","relative group"),c(Bi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(zr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qr,"rel","nofollow"),c($r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($r,"rel","nofollow"),c(De,"class","docstring"),c(Ft,"class","docstring"),c(qt,"class","docstring"),c(A,"class","docstring"),c(yo,"id","transformers.FlaxMBartForQuestionAnswering"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.FlaxMBartForQuestionAnswering"),c(jn,"class","relative group"),c(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gr,"rel","nofollow"),c(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wr,"rel","nofollow"),c(Ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ur,"rel","nofollow"),c(Le,"class","docstring"),c($t,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring")},m(n,p){e(document.head,b),h(n,z,p),h(n,v,p),e(v,M),e(M,x),f(T,x,null),e(v,y),e(v,q),e(q,rt),h(n,Ce,p),h(n,j,p),e(j,Re),e(Re,ke),e(j,it),e(j,be),e(be,ye),e(j,dt),h(n,Ke,p),h(n,J,p),e(J,N),e(N,Xe),f(se,Xe,null),e(J,C),e(J,O),e(O,lt),h(n,pe,p),h(n,he,p),e(he,ct),e(he,K),e(K,pt),e(he,ht),h(n,D,p),h(n,Pe,p),e(Pe,ve),h(n,Ze,p),h(n,re,p),e(re,Te),e(re,we),e(we,ut),e(re,ie),e(re,Me),e(Me,xe),h(n,Ye,p),h(n,w,p),e(w,B),e(B,ze),f(Qe,ze,null),e(w,Ut),e(w,Z),e(Z,Rt),h(n,bt,p),h(n,Q,p),e(Q,de),e(Q,le),e(le,Xt),e(Q,Qt),e(Q,ce),e(ce,Ht),e(Q,Vt),e(Q,He),e(He,Jt),e(Q,Cu),e(Q,rd),e(rd,Pu),e(Q,Su),h(n,gp,p),h(n,yt,p),e(yt,Ou),e(yt,Co),e(Co,id),e(id,Au),e(Co,Iu),e(yt,Nu),e(yt,ei),e(ei,Du),e(yt,Lu),h(n,_p,p),h(n,ti,p),e(ti,dd),e(dd,Gu),h(n,kp,p),f(Po,n,p),h(n,bp,p),h(n,ni,p),e(ni,So),e(So,ld),e(ld,Wu),e(So,Uu),e(So,Kt),e(Kt,Ru),e(Kt,cd),e(cd,Xu),e(Kt,Qu),e(Kt,pd),e(pd,Hu),e(Kt,Vu),h(n,yp,p),f(Oo,n,p),h(n,vp,p),h(n,Zt,p),e(Zt,Pn),e(Pn,hd),f(Ao,hd,null),e(Zt,Ju),e(Zt,ud),e(ud,Ku),h(n,Tp,p),h(n,vt,p),e(vt,Zu),e(vt,Io),e(Io,Yu),e(vt,em),e(vt,md),e(md,tm),e(vt,nm),h(n,wp,p),h(n,oi,p),e(oi,om),h(n,Mp,p),h(n,ai,p),e(ai,fd),e(fd,am),h(n,xp,p),h(n,Yt,p),e(Yt,Sn),e(Sn,gd),f(No,gd,null),e(Yt,sm),e(Yt,_d),e(_d,rm),h(n,zp,p),h(n,et,p),e(et,im),e(et,kd),e(kd,dm),e(et,lm),e(et,bd),e(bd,cm),e(et,pm),e(et,yd),e(yd,hm),e(et,um),h(n,Fp,p),h(n,On,p),e(On,mm),e(On,si),e(si,fm),e(On,gm),h(n,qp,p),h(n,ri,p),e(ri,vd),e(vd,_m),h(n,$p,p),f(Do,n,p),h(n,Bp,p),h(n,ii,p),e(ii,Lo),e(Lo,Td),e(Td,km),e(Lo,bm),e(Lo,Fe),e(Fe,ym),e(Fe,wd),e(wd,vm),e(Fe,Tm),e(Fe,Md),e(Md,wm),e(Fe,Mm),e(Fe,xd),e(xd,xm),e(Fe,zm),e(Fe,zd),e(zd,Fm),e(Fe,qm),e(Fe,Fd),e(Fd,$m),e(Fe,Bm),h(n,jp,p),f(Go,n,p),h(n,Ep,p),h(n,en,p),e(en,An),e(An,qd),f(Wo,qd,null),e(en,jm),e(en,$d),e($d,Em),h(n,Cp,p),h(n,qe,p),f(Uo,qe,null),e(qe,Cm),e(qe,tn),e(tn,Pm),e(tn,di),e(di,Sm),e(tn,Om),e(tn,Ro),e(Ro,Am),e(tn,Im),e(qe,Nm),e(qe,nn),e(nn,Dm),e(nn,li),e(li,Lm),e(nn,Gm),e(nn,ci),e(ci,Wm),e(nn,Um),e(qe,Rm),e(qe,Bd),e(Bd,Xm),e(qe,Qm),f(Xo,qe,null),h(n,Pp,p),h(n,on,p),e(on,In),e(In,jd),f(Qo,jd,null),e(on,Hm),e(on,Ed),e(Ed,Vm),h(n,Sp,p),h(n,G,p),f(Ho,G,null),e(G,Jm),e(G,Cd),e(Cd,Km),e(G,Zm),e(G,mt),e(mt,Ym),e(mt,pi),e(pi,ef),e(mt,tf),e(mt,hi),e(hi,nf),e(mt,of),e(mt,Vo),e(Vo,af),e(mt,sf),e(G,rf),e(G,Jo),e(Jo,df),e(Jo,Pd),e(Pd,lf),e(Jo,cf),e(G,pf),e(G,Sd),e(Sd,hf),e(G,uf),f(Ko,G,null),e(G,mf),e(G,Nn),f(Zo,Nn,null),e(Nn,ff),e(Nn,Od),e(Od,gf),e(G,_f),e(G,tt),f(Yo,tt,null),e(tt,kf),e(tt,ea),e(ea,bf),e(ea,Ad),e(Ad,yf),e(ea,vf),e(tt,Tf),e(tt,ta),e(ta,na),e(na,Id),e(Id,wf),e(na,Mf),e(na,Nd),e(Nd,xf),e(ta,zf),e(ta,oa),e(oa,Dd),e(Dd,Ff),e(oa,qf),e(oa,Ld),e(Ld,$f),e(tt,Bf),e(tt,Gd),e(Gd,jf),h(n,Op,p),h(n,an,p),e(an,Dn),e(Dn,Wd),f(aa,Wd,null),e(an,Ef),e(an,Ud),e(Ud,Cf),h(n,Ap,p),h(n,P,p),f(sa,P,null),e(P,Pf),e(P,sn),e(sn,Sf),e(sn,Rd),e(Rd,Of),e(sn,Af),e(sn,ra),e(ra,If),e(sn,Nf),e(P,Df),e(P,ia),e(ia,Lf),e(ia,ui),e(ui,Gf),e(ia,Wf),e(P,Uf),e(P,da),e(da,Rf),e(da,Xd),e(Xd,Xf),e(da,Qf),e(P,Hf),e(P,Qd),e(Qd,Vf),e(P,Jf),f(la,P,null),e(P,Kf),e(P,Se),f(ca,Se,null),e(Se,Zf),e(Se,Hd),e(Hd,Yf),e(Se,eg),e(Se,pa),e(pa,tg),e(pa,Vd),e(Vd,ng),e(pa,og),e(Se,ag),e(Se,ha),e(ha,ua),e(ua,Jd),e(Jd,sg),e(ua,rg),e(ua,Kd),e(Kd,ig),e(ha,dg),e(ha,ma),e(ma,Zd),e(Zd,lg),e(ma,cg),e(ma,Yd),e(Yd,pg),e(Se,hg),e(Se,el),e(el,ug),e(P,mg),e(P,Ln),f(fa,Ln,null),e(Ln,fg),e(Ln,tl),e(tl,gg),e(P,_g),e(P,Gn),f(ga,Gn,null),e(Gn,kg),e(Gn,nl),e(nl,bg),e(P,yg),e(P,Wn),f(_a,Wn,null),e(Wn,vg),e(Wn,ol),e(ol,Tg),h(n,Ip,p),h(n,rn,p),e(rn,Un),e(Un,al),f(ka,al,null),e(rn,wg),e(rn,sl),e(sl,Mg),h(n,Np,p),h(n,S,p),f(ba,S,null),e(S,xg),e(S,ya),e(ya,zg),e(ya,va),e(va,Fg),e(ya,qg),e(S,$g),e(S,Ta),e(Ta,Bg),e(Ta,mi),e(mi,jg),e(Ta,Eg),e(S,Cg),e(S,rl),e(rl,Pg),e(S,Sg),f(wa,S,null),e(S,Og),e(S,nt),f(Ma,nt,null),e(nt,Ag),e(nt,xa),e(xa,Ig),e(xa,il),e(il,Ng),e(xa,Dg),e(nt,Lg),e(nt,za),e(za,Fa),e(Fa,dl),e(dl,Gg),e(Fa,Wg),e(Fa,ll),e(ll,Ug),e(za,Rg),e(za,qa),e(qa,cl),e(cl,Xg),e(qa,Qg),e(qa,pl),e(pl,Hg),e(nt,Vg),e(nt,hl),e(hl,Jg),e(S,Kg),e(S,Rn),f($a,Rn,null),e(Rn,Zg),e(Rn,ul),e(ul,Yg),e(S,e_),e(S,Xn),f(Ba,Xn,null),e(Xn,t_),e(Xn,ja),e(ja,n_),e(ja,ml),e(ml,o_),e(ja,a_),e(S,s_),e(S,Qn),f(Ea,Qn,null),e(Qn,r_),e(Qn,fl),e(fl,i_),e(S,d_),e(S,Hn),f(Ca,Hn,null),e(Hn,l_),e(Hn,gl),e(gl,c_),h(n,Dp,p),h(n,dn,p),e(dn,Vn),e(Vn,_l),f(Pa,_l,null),e(dn,p_),e(dn,kl),e(kl,h_),h(n,Lp,p),h(n,W,p),f(Sa,W,null),e(W,u_),e(W,ln),e(ln,m_),e(ln,bl),e(bl,f_),e(ln,g_),e(ln,Oa),e(Oa,__),e(ln,k_),e(W,b_),e(W,Aa),e(Aa,y_),e(Aa,fi),e(fi,v_),e(Aa,T_),e(W,w_),e(W,yl),e(yl,M_),e(W,x_),f(Ia,W,null),e(W,z_),e(W,Oe),f(Na,Oe,null),e(Oe,F_),e(Oe,vl),e(vl,q_),e(Oe,$_),e(Oe,Da),e(Da,B_),e(Da,Tl),e(Tl,j_),e(Da,E_),e(Oe,C_),e(Oe,La),e(La,Ga),e(Ga,wl),e(wl,P_),e(Ga,S_),e(Ga,Ml),e(Ml,O_),e(La,A_),e(La,Wa),e(Wa,xl),e(xl,I_),e(Wa,N_),e(Wa,zl),e(zl,D_),e(Oe,L_),e(Oe,Fl),e(Fl,G_),e(W,W_),e(W,Jn),f(Ua,Jn,null),e(Jn,U_),e(Jn,ql),e(ql,R_),e(W,X_),e(W,Kn),f(Ra,Kn,null),e(Kn,Q_),e(Kn,$l),e($l,H_),h(n,Gp,p),h(n,cn,p),e(cn,Zn),e(Zn,Bl),f(Xa,Bl,null),e(cn,V_),e(cn,jl),e(jl,J_),h(n,Wp,p),h(n,Ve,p),f(Qa,Ve,null),e(Ve,K_),e(Ve,Ha),e(Ha,Z_),e(Ha,gi),e(gi,Y_),e(Ha,ek),e(Ve,tk),e(Ve,Va),e(Va,nk),e(Va,Ja),e(Ja,ok),e(Va,ak),e(Ve,sk),e(Ve,Ae),f(Ka,Ae,null),e(Ae,rk),e(Ae,pn),e(pn,ik),e(pn,_i),e(_i,dk),e(pn,lk),e(pn,El),e(El,ck),e(pn,pk),e(Ae,hk),f(Yn,Ae,null),e(Ae,uk),e(Ae,Cl),e(Cl,mk),e(Ae,fk),f(Za,Ae,null),h(n,Up,p),h(n,hn,p),e(hn,eo),e(eo,Pl),f(Ya,Pl,null),e(hn,gk),e(hn,Sl),e(Sl,_k),h(n,Rp,p),h(n,Je,p),f(es,Je,null),e(Je,kk),e(Je,ts),e(ts,bk),e(ts,ki),e(ki,yk),e(ts,vk),e(Je,Tk),e(Je,ns),e(ns,wk),e(ns,os),e(os,Mk),e(ns,xk),e(Je,zk),e(Je,Y),f(as,Y,null),e(Y,Fk),e(Y,un),e(un,qk),e(un,bi),e(bi,$k),e(un,Bk),e(un,Ol),e(Ol,jk),e(un,Ek),e(Y,Ck),f(to,Y,null),e(Y,Pk),e(Y,Al),e(Al,Sk),e(Y,Ok),f(ss,Y,null),e(Y,Ak),e(Y,Il),e(Il,Ik),e(Y,Nk),f(rs,Y,null),h(n,Xp,p),h(n,mn,p),e(mn,no),e(no,Nl),f(is,Nl,null),e(mn,Dk),e(mn,Dl),e(Dl,Lk),h(n,Qp,p),h(n,$e,p),f(ds,$e,null),e($e,Gk),e($e,fn),e(fn,Wk),e(fn,Ll),e(Ll,Uk),e(fn,Rk),e(fn,Gl),e(Gl,Xk),e(fn,Qk),e($e,Hk),e($e,ls),e(ls,Vk),e(ls,yi),e(yi,Jk),e(ls,Kk),e($e,Zk),e($e,cs),e(cs,Yk),e(cs,ps),e(ps,eb),e(cs,tb),e($e,nb),e($e,ue),f(hs,ue,null),e(ue,ob),e(ue,gn),e(gn,ab),e(gn,vi),e(vi,sb),e(gn,rb),e(gn,Wl),e(Wl,ib),e(gn,db),e(ue,lb),f(oo,ue,null),e(ue,cb),e(ue,Ul),e(Ul,pb),e(ue,hb),f(us,ue,null),e(ue,ub),f(ms,ue,null),h(n,Hp,p),h(n,_n,p),e(_n,ao),e(ao,Rl),f(fs,Rl,null),e(_n,mb),e(_n,Xl),e(Xl,fb),h(n,Vp,p),h(n,Be,p),f(gs,Be,null),e(Be,gb),e(Be,Ql),e(Ql,_b),e(Be,kb),e(Be,_s),e(_s,bb),e(_s,Ti),e(Ti,yb),e(_s,vb),e(Be,Tb),e(Be,ks),e(ks,wb),e(ks,bs),e(bs,Mb),e(ks,xb),e(Be,zb),e(Be,L),f(ys,L,null),e(L,Fb),e(L,kn),e(kn,qb),e(kn,wi),e(wi,$b),e(kn,Bb),e(kn,Hl),e(Hl,jb),e(kn,Eb),e(L,Cb),f(so,L,null),e(L,Pb),e(L,Vl),e(Vl,Sb),e(L,Ob),f(vs,L,null),e(L,Ab),f(Ts,L,null),e(L,Ib),e(L,Jl),e(Jl,Nb),e(L,Db),f(ws,L,null),e(L,Lb),f(Ms,L,null),h(n,Jp,p),h(n,bn,p),e(bn,ro),e(ro,Kl),f(xs,Kl,null),e(bn,Gb),e(bn,Zl),e(Zl,Wb),h(n,Kp,p),h(n,yn,p),f(zs,yn,null),e(yn,Ub),e(yn,Tt),f(Fs,Tt,null),e(Tt,Rb),e(Tt,Yl),e(Yl,Xb),e(Tt,Qb),f(qs,Tt,null),h(n,Zp,p),h(n,vn,p),e(vn,io),e(io,ec),f($s,ec,null),e(vn,Hb),e(vn,tc),e(tc,Vb),h(n,Yp,p),h(n,je,p),f(Bs,je,null),e(je,Jb),e(je,js),e(js,Kb),e(js,Mi),e(Mi,Zb),e(js,Yb),e(je,ey),e(je,Es),e(Es,ty),e(Es,Cs),e(Cs,ny),e(Es,oy),e(je,ay),f(lo,je,null),e(je,sy),e(je,Ie),f(Ps,Ie,null),e(Ie,ry),e(Ie,Tn),e(Tn,iy),e(Tn,xi),e(xi,dy),e(Tn,ly),e(Tn,nc),e(nc,cy),e(Tn,py),e(Ie,hy),f(co,Ie,null),e(Ie,uy),e(Ie,oc),e(oc,my),e(Ie,fy),f(Ss,Ie,null),h(n,eh,p),h(n,wn,p),e(wn,po),e(po,ac),f(Os,ac,null),e(wn,gy),e(wn,sc),e(sc,_y),h(n,th,p),h(n,Ee,p),f(As,Ee,null),e(Ee,ky),e(Ee,Is),e(Is,by),e(Is,zi),e(zi,yy),e(Is,vy),e(Ee,Ty),e(Ee,Ns),e(Ns,wy),e(Ns,Ds),e(Ds,My),e(Ns,xy),e(Ee,zy),f(ho,Ee,null),e(Ee,Fy),e(Ee,ee),f(Ls,ee,null),e(ee,qy),e(ee,Mn),e(Mn,$y),e(Mn,Fi),e(Fi,By),e(Mn,jy),e(Mn,rc),e(rc,Ey),e(Mn,Cy),e(ee,Py),f(uo,ee,null),e(ee,Sy),e(ee,ic),e(ic,Oy),e(ee,Ay),f(Gs,ee,null),e(ee,Iy),e(ee,dc),e(dc,Ny),e(ee,Dy),f(Ws,ee,null),h(n,nh,p),h(n,xn,p),e(xn,mo),e(mo,lc),f(Us,lc,null),e(xn,Ly),e(xn,cc),e(cc,Gy),h(n,oh,p),h(n,U,p),f(Rs,U,null),e(U,Wy),e(U,Xs),e(Xs,Uy),e(Xs,qi),e(qi,Ry),e(Xs,Xy),e(U,Qy),e(U,Qs),e(Qs,Hy),e(Qs,Hs),e(Hs,Vy),e(Qs,Jy),e(U,Ky),e(U,pc),e(pc,Zy),e(U,Yy),e(U,ft),e(ft,hc),e(hc,Vs),e(Vs,ev),e(ft,tv),e(ft,uc),e(uc,Js),e(Js,nv),e(ft,ov),e(ft,mc),e(mc,Ks),e(Ks,av),e(ft,sv),e(ft,fc),e(fc,Zs),e(Zs,rv),e(U,iv),e(U,Ne),f(Ys,Ne,null),e(Ne,dv),e(Ne,zn),e(zn,lv),e(zn,gc),e(gc,cv),e(zn,pv),e(zn,_c),e(_c,hv),e(zn,uv),e(Ne,mv),f(fo,Ne,null),e(Ne,fv),e(Ne,kc),e(kc,gv),e(Ne,_v),f(er,Ne,null),e(U,kv),e(U,wt),f(tr,wt,null),e(wt,bv),e(wt,bc),e(bc,yv),e(wt,vv),f(nr,wt,null),e(U,Tv),e(U,Mt),f(or,Mt,null),e(Mt,wv),e(Mt,yc),e(yc,Mv),e(Mt,xv),f(ar,Mt,null),h(n,ah,p),h(n,Fn,p),e(Fn,go),e(go,vc),f(sr,vc,null),e(Fn,zv),e(Fn,Tc),e(Tc,Fv),h(n,sh,p),h(n,R,p),f(rr,R,null),e(R,qv),e(R,ir),e(ir,$v),e(ir,$i),e($i,Bv),e(ir,jv),e(R,Ev),e(R,dr),e(dr,Cv),e(dr,lr),e(lr,Pv),e(dr,Sv),e(R,Ov),e(R,wc),e(wc,Av),e(R,Iv),e(R,gt),e(gt,Mc),e(Mc,cr),e(cr,Nv),e(gt,Dv),e(gt,xc),e(xc,pr),e(pr,Lv),e(gt,Gv),e(gt,zc),e(zc,hr),e(hr,Wv),e(gt,Uv),e(gt,Fc),e(Fc,ur),e(ur,Rv),e(R,Xv),e(R,te),f(mr,te,null),e(te,Qv),e(te,qn),e(qn,Hv),e(qn,qc),e(qc,Vv),e(qn,Jv),e(qn,$c),e($c,Kv),e(qn,Zv),e(te,Yv),f(_o,te,null),e(te,eT),e(te,Bc),e(Bc,tT),e(te,nT),f(fr,te,null),e(te,oT),e(te,jc),e(jc,aT),e(te,sT),f(gr,te,null),e(R,rT),e(R,xt),f(_r,xt,null),e(xt,iT),e(xt,Ec),e(Ec,dT),e(xt,lT),f(kr,xt,null),e(R,cT),e(R,zt),f(br,zt,null),e(zt,pT),e(zt,Cc),e(Cc,hT),e(zt,uT),f(yr,zt,null),h(n,rh,p),h(n,$n,p),e($n,ko),e(ko,Pc),f(vr,Pc,null),e($n,mT),e($n,Sc),e(Sc,fT),h(n,ih,p),h(n,A,p),f(Tr,A,null),e(A,gT),e(A,Oc),e(Oc,_T),e(A,kT),e(A,wr),e(wr,bT),e(wr,Bi),e(Bi,yT),e(wr,vT),e(A,TT),e(A,Mr),e(Mr,wT),e(Mr,xr),e(xr,MT),e(Mr,xT),e(A,zT),e(A,Ac),e(Ac,FT),e(A,qT),e(A,_t),e(_t,Ic),e(Ic,zr),e(zr,$T),e(_t,BT),e(_t,Nc),e(Nc,Fr),e(Fr,jT),e(_t,ET),e(_t,Dc),e(Dc,qr),e(qr,CT),e(_t,PT),e(_t,Lc),e(Lc,$r),e($r,ST),e(A,OT),e(A,De),f(Br,De,null),e(De,AT),e(De,Bn),e(Bn,IT),e(Bn,Gc),e(Gc,NT),e(Bn,DT),e(Bn,Wc),e(Wc,LT),e(Bn,GT),e(De,WT),f(bo,De,null),e(De,UT),e(De,Uc),e(Uc,RT),e(De,XT),f(jr,De,null),e(A,QT),e(A,Ft),f(Er,Ft,null),e(Ft,HT),e(Ft,Rc),e(Rc,VT),e(Ft,JT),f(Cr,Ft,null),e(A,KT),e(A,qt),f(Pr,qt,null),e(qt,ZT),e(qt,Xc),e(Xc,YT),e(qt,ew),f(Sr,qt,null),h(n,dh,p),h(n,jn,p),e(jn,yo),e(yo,Qc),f(Or,Qc,null),e(jn,tw),e(jn,Hc),e(Hc,nw),h(n,lh,p),h(n,I,p),f(Ar,I,null),e(I,ow),e(I,En),e(En,aw),e(En,Vc),e(Vc,sw),e(En,rw),e(En,Jc),e(Jc,iw),e(En,dw),e(I,lw),e(I,Ir),e(Ir,cw),e(Ir,ji),e(ji,pw),e(Ir,hw),e(I,uw),e(I,Nr),e(Nr,mw),e(Nr,Dr),e(Dr,fw),e(Nr,gw),e(I,_w),e(I,Kc),e(Kc,kw),e(I,bw),e(I,kt),e(kt,Zc),e(Zc,Lr),e(Lr,yw),e(kt,vw),e(kt,Yc),e(Yc,Gr),e(Gr,Tw),e(kt,ww),e(kt,ep),e(ep,Wr),e(Wr,Mw),e(kt,xw),e(kt,tp),e(tp,Ur),e(Ur,zw),e(I,Fw),e(I,Le),f(Rr,Le,null),e(Le,qw),e(Le,Cn),e(Cn,$w),e(Cn,np),e(np,Bw),e(Cn,jw),e(Cn,op),e(op,Ew),e(Cn,Cw),e(Le,Pw),f(vo,Le,null),e(Le,Sw),e(Le,ap),e(ap,Ow),e(Le,Aw),f(Xr,Le,null),e(I,Iw),e(I,$t),f(Qr,$t,null),e($t,Nw),e($t,sp),e(sp,Dw),e($t,Lw),f(Hr,$t,null),e(I,Gw),e(I,Bt),f(Vr,Bt,null),e(Bt,Ww),e(Bt,rp),e(rp,Uw),e(Bt,Rw),f(Jr,Bt,null),ch=!0},p(n,[p]){const Kr={};p&2&&(Kr.$$scope={dirty:p,ctx:n}),Yn.$set(Kr);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:n}),to.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:n}),oo.$set(dp);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:n}),so.$set(lp);const To={};p&2&&(To.$$scope={dirty:p,ctx:n}),lo.$set(To);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:n}),co.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:n}),ho.$set(pp);const Zr={};p&2&&(Zr.$$scope={dirty:p,ctx:n}),uo.$set(Zr);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:n}),fo.$set(hp);const up={};p&2&&(up.$$scope={dirty:p,ctx:n}),_o.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:n}),bo.$set(mp);const Yr={};p&2&&(Yr.$$scope={dirty:p,ctx:n}),vo.$set(Yr)},i(n){ch||(g(T.$$.fragment,n),g(se.$$.fragment,n),g(Qe.$$.fragment,n),g(Po.$$.fragment,n),g(Oo.$$.fragment,n),g(Ao.$$.fragment,n),g(No.$$.fragment,n),g(Do.$$.fragment,n),g(Go.$$.fragment,n),g(Wo.$$.fragment,n),g(Uo.$$.fragment,n),g(Xo.$$.fragment,n),g(Qo.$$.fragment,n),g(Ho.$$.fragment,n),g(Ko.$$.fragment,n),g(Zo.$$.fragment,n),g(Yo.$$.fragment,n),g(aa.$$.fragment,n),g(sa.$$.fragment,n),g(la.$$.fragment,n),g(ca.$$.fragment,n),g(fa.$$.fragment,n),g(ga.$$.fragment,n),g(_a.$$.fragment,n),g(ka.$$.fragment,n),g(ba.$$.fragment,n),g(wa.$$.fragment,n),g(Ma.$$.fragment,n),g($a.$$.fragment,n),g(Ba.$$.fragment,n),g(Ea.$$.fragment,n),g(Ca.$$.fragment,n),g(Pa.$$.fragment,n),g(Sa.$$.fragment,n),g(Ia.$$.fragment,n),g(Na.$$.fragment,n),g(Ua.$$.fragment,n),g(Ra.$$.fragment,n),g(Xa.$$.fragment,n),g(Qa.$$.fragment,n),g(Ka.$$.fragment,n),g(Yn.$$.fragment,n),g(Za.$$.fragment,n),g(Ya.$$.fragment,n),g(es.$$.fragment,n),g(as.$$.fragment,n),g(to.$$.fragment,n),g(ss.$$.fragment,n),g(rs.$$.fragment,n),g(is.$$.fragment,n),g(ds.$$.fragment,n),g(hs.$$.fragment,n),g(oo.$$.fragment,n),g(us.$$.fragment,n),g(ms.$$.fragment,n),g(fs.$$.fragment,n),g(gs.$$.fragment,n),g(ys.$$.fragment,n),g(so.$$.fragment,n),g(vs.$$.fragment,n),g(Ts.$$.fragment,n),g(ws.$$.fragment,n),g(Ms.$$.fragment,n),g(xs.$$.fragment,n),g(zs.$$.fragment,n),g(Fs.$$.fragment,n),g(qs.$$.fragment,n),g($s.$$.fragment,n),g(Bs.$$.fragment,n),g(lo.$$.fragment,n),g(Ps.$$.fragment,n),g(co.$$.fragment,n),g(Ss.$$.fragment,n),g(Os.$$.fragment,n),g(As.$$.fragment,n),g(ho.$$.fragment,n),g(Ls.$$.fragment,n),g(uo.$$.fragment,n),g(Gs.$$.fragment,n),g(Ws.$$.fragment,n),g(Us.$$.fragment,n),g(Rs.$$.fragment,n),g(Ys.$$.fragment,n),g(fo.$$.fragment,n),g(er.$$.fragment,n),g(tr.$$.fragment,n),g(nr.$$.fragment,n),g(or.$$.fragment,n),g(ar.$$.fragment,n),g(sr.$$.fragment,n),g(rr.$$.fragment,n),g(mr.$$.fragment,n),g(_o.$$.fragment,n),g(fr.$$.fragment,n),g(gr.$$.fragment,n),g(_r.$$.fragment,n),g(kr.$$.fragment,n),g(br.$$.fragment,n),g(yr.$$.fragment,n),g(vr.$$.fragment,n),g(Tr.$$.fragment,n),g(Br.$$.fragment,n),g(bo.$$.fragment,n),g(jr.$$.fragment,n),g(Er.$$.fragment,n),g(Cr.$$.fragment,n),g(Pr.$$.fragment,n),g(Sr.$$.fragment,n),g(Or.$$.fragment,n),g(Ar.$$.fragment,n),g(Rr.$$.fragment,n),g(vo.$$.fragment,n),g(Xr.$$.fragment,n),g(Qr.$$.fragment,n),g(Hr.$$.fragment,n),g(Vr.$$.fragment,n),g(Jr.$$.fragment,n),ch=!0)},o(n){_(T.$$.fragment,n),_(se.$$.fragment,n),_(Qe.$$.fragment,n),_(Po.$$.fragment,n),_(Oo.$$.fragment,n),_(Ao.$$.fragment,n),_(No.$$.fragment,n),_(Do.$$.fragment,n),_(Go.$$.fragment,n),_(Wo.$$.fragment,n),_(Uo.$$.fragment,n),_(Xo.$$.fragment,n),_(Qo.$$.fragment,n),_(Ho.$$.fragment,n),_(Ko.$$.fragment,n),_(Zo.$$.fragment,n),_(Yo.$$.fragment,n),_(aa.$$.fragment,n),_(sa.$$.fragment,n),_(la.$$.fragment,n),_(ca.$$.fragment,n),_(fa.$$.fragment,n),_(ga.$$.fragment,n),_(_a.$$.fragment,n),_(ka.$$.fragment,n),_(ba.$$.fragment,n),_(wa.$$.fragment,n),_(Ma.$$.fragment,n),_($a.$$.fragment,n),_(Ba.$$.fragment,n),_(Ea.$$.fragment,n),_(Ca.$$.fragment,n),_(Pa.$$.fragment,n),_(Sa.$$.fragment,n),_(Ia.$$.fragment,n),_(Na.$$.fragment,n),_(Ua.$$.fragment,n),_(Ra.$$.fragment,n),_(Xa.$$.fragment,n),_(Qa.$$.fragment,n),_(Ka.$$.fragment,n),_(Yn.$$.fragment,n),_(Za.$$.fragment,n),_(Ya.$$.fragment,n),_(es.$$.fragment,n),_(as.$$.fragment,n),_(to.$$.fragment,n),_(ss.$$.fragment,n),_(rs.$$.fragment,n),_(is.$$.fragment,n),_(ds.$$.fragment,n),_(hs.$$.fragment,n),_(oo.$$.fragment,n),_(us.$$.fragment,n),_(ms.$$.fragment,n),_(fs.$$.fragment,n),_(gs.$$.fragment,n),_(ys.$$.fragment,n),_(so.$$.fragment,n),_(vs.$$.fragment,n),_(Ts.$$.fragment,n),_(ws.$$.fragment,n),_(Ms.$$.fragment,n),_(xs.$$.fragment,n),_(zs.$$.fragment,n),_(Fs.$$.fragment,n),_(qs.$$.fragment,n),_($s.$$.fragment,n),_(Bs.$$.fragment,n),_(lo.$$.fragment,n),_(Ps.$$.fragment,n),_(co.$$.fragment,n),_(Ss.$$.fragment,n),_(Os.$$.fragment,n),_(As.$$.fragment,n),_(ho.$$.fragment,n),_(Ls.$$.fragment,n),_(uo.$$.fragment,n),_(Gs.$$.fragment,n),_(Ws.$$.fragment,n),_(Us.$$.fragment,n),_(Rs.$$.fragment,n),_(Ys.$$.fragment,n),_(fo.$$.fragment,n),_(er.$$.fragment,n),_(tr.$$.fragment,n),_(nr.$$.fragment,n),_(or.$$.fragment,n),_(ar.$$.fragment,n),_(sr.$$.fragment,n),_(rr.$$.fragment,n),_(mr.$$.fragment,n),_(_o.$$.fragment,n),_(fr.$$.fragment,n),_(gr.$$.fragment,n),_(_r.$$.fragment,n),_(kr.$$.fragment,n),_(br.$$.fragment,n),_(yr.$$.fragment,n),_(vr.$$.fragment,n),_(Tr.$$.fragment,n),_(Br.$$.fragment,n),_(bo.$$.fragment,n),_(jr.$$.fragment,n),_(Er.$$.fragment,n),_(Cr.$$.fragment,n),_(Pr.$$.fragment,n),_(Sr.$$.fragment,n),_(Or.$$.fragment,n),_(Ar.$$.fragment,n),_(Rr.$$.fragment,n),_(vo.$$.fragment,n),_(Xr.$$.fragment,n),_(Qr.$$.fragment,n),_(Hr.$$.fragment,n),_(Vr.$$.fragment,n),_(Jr.$$.fragment,n),ch=!1},d(n){t(b),n&&t(z),n&&t(v),k(T),n&&t(Ce),n&&t(j),n&&t(Ke),n&&t(J),k(se),n&&t(pe),n&&t(he),n&&t(D),n&&t(Pe),n&&t(Ze),n&&t(re),n&&t(Ye),n&&t(w),k(Qe),n&&t(bt),n&&t(Q),n&&t(gp),n&&t(yt),n&&t(_p),n&&t(ti),n&&t(kp),k(Po,n),n&&t(bp),n&&t(ni),n&&t(yp),k(Oo,n),n&&t(vp),n&&t(Zt),k(Ao),n&&t(Tp),n&&t(vt),n&&t(wp),n&&t(oi),n&&t(Mp),n&&t(ai),n&&t(xp),n&&t(Yt),k(No),n&&t(zp),n&&t(et),n&&t(Fp),n&&t(On),n&&t(qp),n&&t(ri),n&&t($p),k(Do,n),n&&t(Bp),n&&t(ii),n&&t(jp),k(Go,n),n&&t(Ep),n&&t(en),k(Wo),n&&t(Cp),n&&t(qe),k(Uo),k(Xo),n&&t(Pp),n&&t(on),k(Qo),n&&t(Sp),n&&t(G),k(Ho),k(Ko),k(Zo),k(Yo),n&&t(Op),n&&t(an),k(aa),n&&t(Ap),n&&t(P),k(sa),k(la),k(ca),k(fa),k(ga),k(_a),n&&t(Ip),n&&t(rn),k(ka),n&&t(Np),n&&t(S),k(ba),k(wa),k(Ma),k($a),k(Ba),k(Ea),k(Ca),n&&t(Dp),n&&t(dn),k(Pa),n&&t(Lp),n&&t(W),k(Sa),k(Ia),k(Na),k(Ua),k(Ra),n&&t(Gp),n&&t(cn),k(Xa),n&&t(Wp),n&&t(Ve),k(Qa),k(Ka),k(Yn),k(Za),n&&t(Up),n&&t(hn),k(Ya),n&&t(Rp),n&&t(Je),k(es),k(as),k(to),k(ss),k(rs),n&&t(Xp),n&&t(mn),k(is),n&&t(Qp),n&&t($e),k(ds),k(hs),k(oo),k(us),k(ms),n&&t(Hp),n&&t(_n),k(fs),n&&t(Vp),n&&t(Be),k(gs),k(ys),k(so),k(vs),k(Ts),k(ws),k(Ms),n&&t(Jp),n&&t(bn),k(xs),n&&t(Kp),n&&t(yn),k(zs),k(Fs),k(qs),n&&t(Zp),n&&t(vn),k($s),n&&t(Yp),n&&t(je),k(Bs),k(lo),k(Ps),k(co),k(Ss),n&&t(eh),n&&t(wn),k(Os),n&&t(th),n&&t(Ee),k(As),k(ho),k(Ls),k(uo),k(Gs),k(Ws),n&&t(nh),n&&t(xn),k(Us),n&&t(oh),n&&t(U),k(Rs),k(Ys),k(fo),k(er),k(tr),k(nr),k(or),k(ar),n&&t(ah),n&&t(Fn),k(sr),n&&t(sh),n&&t(R),k(rr),k(mr),k(_o),k(fr),k(gr),k(_r),k(kr),k(br),k(yr),n&&t(rh),n&&t($n),k(vr),n&&t(ih),n&&t(A),k(Tr),k(Br),k(bo),k(jr),k(Er),k(Cr),k(Pr),k(Sr),n&&t(dh),n&&t(jn),k(Or),n&&t(lh),n&&t(I),k(Ar),k(Rr),k(vo),k(Xr),k(Qr),k(Hr),k(Vr),k(Jr)}}}const J2={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function K2(E){return O2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oF extends E2{constructor(b){super();C2(this,b,K2,V2,P2,{})}}export{oF as default,J2 as metadata};
