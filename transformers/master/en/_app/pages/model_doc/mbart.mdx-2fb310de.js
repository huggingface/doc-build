import{S as P2,i as C2,s as A2,e as n,k as d,w as m,t as r,M as S2,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as h,y as _,q as g,o as k,B as b}from"../../chunks/vendor-4833417e.js";import{T as at}from"../../chunks/Tip-fffd6df1.js";import{D as B}from"../../chunks/Docstring-4f315ed9.js";import{C as F}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as U}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function I2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function N2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function O2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function D2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function L2(E){let u,x,v,M,z,T,y,q,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),z=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),S=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){u=a(w,"P",{});var $=s(u);x=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);z=a(we,"LI",{});var He=s(z);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),q=a(we,"LI",{});var Ut=s(q);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);S=a(ie,"LI",{});var de=s(S);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){h(w,u,$),e(u,x),h(w,v,$),h(w,M,$),e(M,z),e(z,T),e(M,y),e(M,q),e(q,st),h(w,je,$),h(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(w,Q,$),h(w,O,$),e(O,Xe),h(w,ae,$),h(w,P,$),e(P,S),e(S,dt),e(S,ce),e(ce,pe),e(S,lt),e(S,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(u),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function G2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function R2(E){let u,x,v,M,z,T,y,q,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=n("p"),x=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),z=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),S=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){u=a(w,"P",{});var $=s(u);x=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);z=a(we,"LI",{});var He=s(z);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),q=a(we,"LI",{});var Ut=s(q);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);S=a(ie,"LI",{});var de=s(S);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){h(w,u,$),e(u,x),h(w,v,$),h(w,M,$),e(M,z),e(z,T),e(M,y),e(M,q),e(q,st),h(w,je,$),h(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(w,Q,$),h(w,O,$),e(O,Xe),h(w,ae,$),h(w,P,$),e(P,S),e(S,dt),e(S,ce),e(ce,pe),e(S,lt),e(S,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(u),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function W2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function U2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function X2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function H2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function V2(E){let u,x,v,M,z;return{c(){u=n("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,x),e(u,v),e(v,M),e(u,z)},d(T){T&&t(u)}}}function Q2(E){let u,x,v,M,z,T,y,q,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye,w,$,we,He,Ut,K,Xt,kt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Eu,rd,Pu,Cu,_p,bt,Au,Cn,id,Su,Iu,Nu,Zr,Ou,Du,gp,Yr,dd,Lu,kp,An,bp,ei,Sn,ld,Gu,Ru,Zt,Wu,cd,Uu,Xu,pd,Hu,Vu,vp,In,yp,Yt,Ao,hd,Nn,Qu,ud,Ju,Tp,vt,Ku,On,Zu,Yu,md,em,tm,Mp,ti,om,wp,oi,fd,nm,zp,eo,So,_d,Dn,am,gd,sm,xp,et,rm,kd,im,dm,bd,lm,cm,vd,pm,hm,Bp,Io,um,ni,mm,fm,qp,ai,yd,_m,$p,Ln,Fp,si,Gn,Td,gm,km,ze,bm,Md,vm,ym,wd,Tm,Mm,zd,wm,zm,xd,xm,Bm,Bd,qm,$m,jp,Rn,Ep,to,No,qd,Wn,Fm,$d,jm,Pp,xe,Un,Em,oo,Pm,ri,Cm,Am,Xn,Sm,Im,Nm,no,Om,ii,Dm,Lm,di,Gm,Rm,Wm,Fd,Um,Xm,Hn,Cp,ao,Oo,jd,Vn,Hm,Ed,Vm,Ap,L,Qn,Qm,Pd,Jm,Km,ut,Zm,li,Ym,ef,ci,tf,of,Jn,nf,af,sf,Kn,rf,Cd,df,lf,cf,Ad,pf,hf,Zn,uf,Do,Yn,mf,Sd,ff,_f,tt,ea,gf,ta,kf,Id,bf,vf,yf,oa,na,Nd,Tf,Mf,Od,wf,zf,aa,Dd,xf,Bf,Ld,qf,$f,Gd,Ff,Sp,so,Lo,Rd,sa,jf,Wd,Ef,Ip,C,ra,Pf,ro,Cf,Ud,Af,Sf,ia,If,Nf,Of,yt,pi,Df,Lf,hi,Gf,Rf,ui,Wf,Uf,Xf,da,Hf,Xd,Vf,Qf,Jf,Hd,Kf,Zf,la,Yf,Pe,ca,e_,Vd,t_,o_,pa,n_,Qd,a_,s_,r_,ha,ua,Jd,i_,d_,Kd,l_,c_,ma,Zd,p_,h_,Yd,u_,m_,el,f_,__,Go,fa,g_,tl,k_,b_,Ro,_a,v_,ol,y_,T_,Wo,ga,M_,nl,w_,Np,io,Uo,al,ka,z_,sl,x_,Op,A,ba,B_,va,q_,ya,$_,F_,j_,Ta,E_,mi,P_,C_,A_,rl,S_,I_,Ma,N_,ot,wa,O_,za,D_,il,L_,G_,R_,xa,Ba,dl,W_,U_,ll,X_,H_,qa,cl,V_,Q_,pl,J_,K_,hl,Z_,Y_,Xo,$a,eg,ul,tg,og,Ho,Fa,ng,ja,ag,ml,sg,rg,ig,Vo,Ea,dg,fl,lg,cg,Qo,Pa,pg,_l,hg,Dp,lo,Jo,gl,Ca,ug,kl,mg,Lp,G,Aa,fg,co,_g,bl,gg,kg,Sa,bg,vg,yg,Ia,Tg,fi,Mg,wg,zg,vl,xg,Bg,Na,qg,Ce,Oa,$g,yl,Fg,jg,Da,Eg,Tl,Pg,Cg,Ag,La,Ga,Ml,Sg,Ig,wl,Ng,Og,Ra,zl,Dg,Lg,xl,Gg,Rg,Bl,Wg,Ug,Ko,Wa,Xg,ql,Hg,Vg,Zo,Ua,Qg,$l,Jg,Gp,po,Yo,Fl,Xa,Kg,jl,Zg,Rp,Qe,Ha,Yg,Va,ek,_i,tk,ok,nk,Qa,ak,Ja,sk,rk,ik,Ae,Ka,dk,ho,lk,gi,ck,pk,El,hk,uk,mk,en,fk,Pl,_k,gk,Za,Wp,uo,tn,Cl,Ya,kk,Al,bk,Up,Je,es,vk,ts,yk,ki,Tk,Mk,wk,os,zk,ns,xk,Bk,qk,Z,as,$k,mo,Fk,bi,jk,Ek,Sl,Pk,Ck,Ak,on,Sk,Il,Ik,Nk,ss,Ok,Nl,Dk,Lk,rs,Xp,fo,nn,Ol,is,Gk,Dl,Rk,Hp,Be,ds,Wk,_o,Uk,Ll,Xk,Hk,Gl,Vk,Qk,Jk,ls,Kk,vi,Zk,Yk,eb,cs,tb,ps,ob,nb,ab,Se,hs,sb,go,rb,yi,ib,db,Rl,lb,cb,pb,an,hb,Wl,ub,mb,us,Vp,ko,sn,Ul,ms,fb,Xl,_b,Qp,qe,fs,gb,Hl,kb,bb,_s,vb,Ti,yb,Tb,Mb,gs,wb,ks,zb,xb,Bb,Y,bs,qb,bo,$b,Mi,Fb,jb,Vl,Eb,Pb,Cb,rn,Ab,Ql,Sb,Ib,vs,Nb,Jl,Ob,Db,ys,Jp,vo,dn,Kl,Ts,Lb,Zl,Gb,Kp,yo,Ms,Rb,Tt,ws,Wb,Yl,Ub,Xb,zs,Zp,To,ln,ec,xs,Hb,tc,Vb,Yp,$e,Bs,Qb,qs,Jb,wi,Kb,Zb,Yb,$s,ev,Fs,tv,ov,nv,cn,av,Ie,js,sv,Mo,rv,zi,iv,dv,oc,lv,cv,pv,pn,hv,nc,uv,mv,Es,eh,wo,hn,ac,Ps,fv,sc,_v,th,Fe,Cs,gv,As,kv,xi,bv,vv,yv,Ss,Tv,Is,Mv,wv,zv,un,xv,ee,Ns,Bv,zo,qv,Bi,$v,Fv,rc,jv,Ev,Pv,mn,Cv,ic,Av,Sv,Os,Iv,dc,Nv,Ov,Ds,oh,xo,fn,lc,Ls,Dv,cc,Lv,nh,R,Gs,Gv,Rs,Rv,qi,Wv,Uv,Xv,Ws,Hv,Us,Vv,Qv,Jv,pc,Kv,Zv,mt,hc,Xs,Yv,ey,uc,Hs,ty,oy,mc,Vs,ny,ay,fc,Qs,sy,ry,Ne,Js,iy,Bo,dy,_c,ly,cy,gc,py,hy,uy,_n,my,kc,fy,_y,Ks,gy,Mt,Zs,ky,bc,by,vy,Ys,yy,wt,er,Ty,vc,My,wy,tr,ah,qo,gn,yc,or,zy,Tc,xy,sh,W,nr,By,ar,qy,$i,$y,Fy,jy,sr,Ey,rr,Py,Cy,Ay,Mc,Sy,Iy,ft,wc,ir,Ny,Oy,zc,dr,Dy,Ly,xc,lr,Gy,Ry,Bc,cr,Wy,Uy,te,pr,Xy,$o,Hy,qc,Vy,Qy,$c,Jy,Ky,Zy,kn,Yy,Fc,eT,tT,hr,oT,jc,nT,aT,ur,sT,zt,mr,rT,Ec,iT,dT,fr,lT,xt,_r,cT,Pc,pT,hT,gr,rh,Fo,bn,Cc,kr,uT,Ac,mT,ih,I,br,fT,Sc,_T,gT,vr,kT,Fi,bT,vT,yT,yr,TT,Tr,MT,wT,zT,Ic,xT,BT,_t,Nc,Mr,qT,$T,Oc,wr,FT,jT,Dc,zr,ET,PT,Lc,xr,CT,AT,Oe,Br,ST,jo,IT,Gc,NT,OT,Rc,DT,LT,GT,vn,RT,Wc,WT,UT,qr,XT,Bt,$r,HT,Uc,VT,QT,Fr,JT,qt,jr,KT,Xc,ZT,YT,Er,dh,Eo,yn,Hc,Pr,eM,Vc,tM,lh,N,Cr,oM,Po,nM,Qc,aM,sM,Jc,rM,iM,dM,Ar,lM,ji,cM,pM,hM,Sr,uM,Ir,mM,fM,_M,Kc,gM,kM,gt,Zc,Nr,bM,vM,Yc,Or,yM,TM,ep,Dr,MM,wM,tp,Lr,zM,xM,De,Gr,BM,Co,qM,op,$M,FM,np,jM,EM,PM,Tn,CM,ap,AM,SM,Rr,IM,$t,Wr,NM,sp,OM,DM,Ur,LM,Ft,Xr,GM,rp,RM,WM,Hr,ch;return T=new U({}),ae=new U({}),He=new U({}),An=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),In=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Nn=new U({}),Dn=new U({}),Ln=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Rn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Wn=new U({}),Un=new B({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/master/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Hn=new F({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new U({}),Qn=new B({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zn=new F({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yn=new B({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new U({}),ra=new B({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart_fast.py#L61"}}),la=new F({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart_fast.py#L163",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart_fast.py#L192",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new B({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart_fast.py#L251"}}),ga=new B({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/tokenization_mbart_fast.py#L266"}}),ka=new U({}),ba=new B({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ma=new F({props:{code:`from transformers import MBart50Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),wa=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new B({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Fa=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new B({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Pa=new B({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Ca=new U({}),Aa=new B({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Na=new F({props:{code:`from transformers import MBart50TokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Oa=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wa=new B({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L221"}}),Ua=new B({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L236"}}),Xa=new U({}),Ha=new B({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1123",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new B({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1150",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),en=new at({props:{$$slots:{default:[I2]},$$scope:{ctx:E}}}),Za=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new U({}),es=new B({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1239",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new B({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1283",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),on=new at({props:{$$slots:{default:[N2]},$$scope:{ctx:E}}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),rs=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),is=new U({}),ds=new B({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1538",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new B({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1550",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),an=new at({props:{$$slots:{default:[O2]},$$scope:{ctx:E}}}),us=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ms=new U({}),fs=new B({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1412",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new B({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1425",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),rn=new at({props:{$$slots:{default:[D2]},$$scope:{ctx:E}}}),vs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ts=new U({}),Ms=new B({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1669"}}),ws=new B({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_mbart.py#L1700",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),zs=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xs=new U({}),Bs=new B({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_tf_mbart.py#L1195",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new at({props:{$$slots:{default:[L2]},$$scope:{ctx:E}}}),js=new B({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_tf_mbart.py#L1207",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),pn=new at({props:{$$slots:{default:[G2]},$$scope:{ctx:E}}}),Es=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ps=new U({}),Cs=new B({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_tf_mbart.py#L1302",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new at({props:{$$slots:{default:[R2]},$$scope:{ctx:E}}}),Ns=new B({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_tf_mbart.py#L1335",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),mn=new at({props:{$$slots:{default:[W2]},$$scope:{ctx:E}}}),Os=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ds=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ls=new U({}),Gs=new B({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1252",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Js=new B({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1189",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),_n=new at({props:{$$slots:{default:[U2]},$$scope:{ctx:E}}}),Ks=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zs=new B({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1013",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),Ys=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),er=new B({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1076",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),tr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),or=new U({}),nr=new B({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1339",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),pr=new B({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1189",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),kn=new at({props:{$$slots:{default:[X2]},$$scope:{ctx:E}}}),hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),mr=new B({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1013",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),_r=new B({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1343",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
`}}),gr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),kr=new U({}),br=new B({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1652",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Br=new B({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1189",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),vn=new at({props:{$$slots:{default:[H2]},$$scope:{ctx:E}}}),qr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new B({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1013",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),Fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),jr=new B({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1076",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),Er=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Pr=new U({}),Cr=new B({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1740",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Gr=new B({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1189",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartConfig"
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
`}}),Tn=new at({props:{$$slots:{default:[V2]},$$scope:{ctx:E}}}),Rr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Wr=new B({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1013",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`}}),Ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Xr=new B({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mbart/modeling_flax_mbart.py#L1076",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`}}),Hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("meta"),x=d(),v=n("h1"),M=n("a"),z=n("span"),m(T.$$.fragment),y=d(),q=n("span"),st=r("MBart and MBart-50"),je=d(),j=n("p"),Ue=n("strong"),_e=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Ke=d(),Q=n("h2"),O=n("a"),Xe=n("span"),m(ae.$$.fragment),P=d(),S=n("span"),dt=r("Overview of MBart"),ce=d(),pe=n("p"),lt=r("The MBart model was presented in "),J=n("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ee=n("p"),be=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=n("p"),ve=r("This model was contributed by "),ye=n("a"),ht=r("valhalla"),re=r(". The Authors\u2019 code can be found "),Te=n("a"),Me=r("here"),Ye=d(),w=n("h3"),$=n("a"),we=n("span"),m(He.$$.fragment),Ut=d(),K=n("span"),Xt=r("Training of MBart"),kt=d(),X=n("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),le=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Eu=r(". "),rd=n("code"),Pu=r("bos"),Cu=r(" is never used."),_p=d(),bt=n("p"),Au=r("The regular "),Cn=n("a"),id=n("strong"),Su=r("call"),Iu=r("()"),Nu=r(` will encode source text format, and it should be wrapped
inside the context manager `),Zr=n("a"),Ou=r("as_target_tokenizer()"),Du=r(" to encode target text format."),gp=d(),Yr=n("ul"),dd=n("li"),Lu=r("Supervised training"),kp=d(),m(An.$$.fragment),bp=d(),ei=n("ul"),Sn=n("li"),ld=n("p"),Gu=r("Generation"),Ru=d(),Zt=n("p"),Wu=r("While generating the target text set the "),cd=n("code"),Uu=r("decoder_start_token_id"),Xu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=n("em"),Hu=r("facebook/mbart-large-en-ro"),Vu=r(" model."),vp=d(),m(In.$$.fragment),yp=d(),Yt=n("h2"),Ao=n("a"),hd=n("span"),m(Nn.$$.fragment),Qu=d(),ud=n("span"),Ju=r("Overview of MBart-50"),Tp=d(),vt=n("p"),Ku=r("MBart-50 was introduced in the "),On=n("a"),Zu=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yu=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=n("em"),em=r("mbart-large-cc25"),tm=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Mp=d(),ti=n("p"),om=r("According to the abstract"),wp=d(),oi=n("p"),fd=n("em"),nm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),zp=d(),eo=n("h3"),So=n("a"),_d=n("span"),m(Dn.$$.fragment),am=d(),gd=n("span"),sm=r("Training of MBart-50"),xp=d(),et=n("p"),rm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=n("code"),im=r("[lang_code] X [eos]"),dm=r(", where "),bd=n("code"),lm=r("lang_code"),cm=r(` is source
language id for source text and target language id for target text, with `),vd=n("code"),pm=r("X"),hm=r(` being the source or target text
respectively.`),Bp=d(),Io=n("p"),um=r("MBart-50 has its own tokenizer "),ni=n("a"),mm=r("MBart50Tokenizer"),fm=r("."),qp=d(),ai=n("ul"),yd=n("li"),_m=r("Supervised training"),$p=d(),m(Ln.$$.fragment),Fp=d(),si=n("ul"),Gn=n("li"),Td=n("p"),gm=r("Generation"),km=d(),ze=n("p"),bm=r("To generate using the mBART-50 multilingual translation models, "),Md=n("code"),vm=r("eos_token_id"),ym=r(` is used as the
`),wd=n("code"),Tm=r("decoder_start_token_id"),Mm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),zd=n("em"),wm=r("forced_bos_token_id"),zm=r(" parameter to the "),xd=n("em"),xm=r("generate"),Bm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Bd=n("em"),qm=r("facebook/mbart-50-large-many-to-many"),$m=r(" checkpoint."),jp=d(),m(Rn.$$.fragment),Ep=d(),to=n("h2"),No=n("a"),qd=n("span"),m(Wn.$$.fragment),Fm=d(),$d=n("span"),jm=r("MBartConfig"),Pp=d(),xe=n("div"),m(Un.$$.fragment),Em=d(),oo=n("p"),Pm=r("This is the configuration class to store the configuration of a "),ri=n("a"),Cm=r("MBartModel"),Am=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=n("a"),Sm=r("facebook/mbart-large-cc25"),Im=r(" architecture."),Nm=d(),no=n("p"),Om=r("Configuration objects inherit from "),ii=n("a"),Dm=r("PretrainedConfig"),Lm=r(` and can be used to control the model outputs. Read the
documentation from `),di=n("a"),Gm=r("PretrainedConfig"),Rm=r(" for more information."),Wm=d(),Fd=n("p"),Um=r("Example:"),Xm=d(),m(Hn.$$.fragment),Cp=d(),ao=n("h2"),Oo=n("a"),jd=n("span"),m(Vn.$$.fragment),Hm=d(),Ed=n("span"),Vm=r("MBartTokenizer"),Ap=d(),L=n("div"),m(Qn.$$.fragment),Qm=d(),Pd=n("p"),Jm=r("Construct an MBART tokenizer."),Km=d(),ut=n("p"),Zm=r("Adapted from "),li=n("a"),Ym=r("RobertaTokenizer"),ef=r(" and "),ci=n("a"),tf=r("XLNetTokenizer"),of=r(`. Based on
`),Jn=n("a"),nf=r("SentencePiece"),af=r("."),sf=d(),Kn=n("p"),rf=r("The tokenization method is "),Cd=n("code"),df=r("<tokens> <eos> <language code>"),lf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),cf=d(),Ad=n("p"),pf=r("Examples:"),hf=d(),m(Zn.$$.fragment),uf=d(),Do=n("div"),m(Yn.$$.fragment),mf=d(),Sd=n("p"),ff=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),_f=d(),tt=n("div"),m(ea.$$.fragment),gf=d(),ta=n("p"),kf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=n("code"),bf=r("X"),vf=r(" represents the sequence:"),yf=d(),oa=n("ul"),na=n("li"),Nd=n("code"),Tf=r("input_ids"),Mf=r(" (for encoder) "),Od=n("code"),wf=r("X [eos, src_lang_code]"),zf=d(),aa=n("li"),Dd=n("code"),xf=r("decoder_input_ids"),Bf=r(": (for decoder) "),Ld=n("code"),qf=r("X [eos, tgt_lang_code]"),$f=d(),Gd=n("p"),Ff=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Sp=d(),so=n("h2"),Lo=n("a"),Rd=n("span"),m(sa.$$.fragment),jf=d(),Wd=n("span"),Ef=r("MBartTokenizerFast"),Ip=d(),C=n("div"),m(ra.$$.fragment),Pf=d(),ro=n("p"),Cf=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=n("em"),Af=r("tokenizers"),Sf=r(` library). Based on
`),ia=n("a"),If=r("BPE"),Nf=r("."),Of=d(),yt=n("p"),pi=n("a"),Df=r("MBartTokenizerFast"),Lf=r(" is a subclass of "),hi=n("a"),Gf=r("XLMRobertaTokenizerFast"),Rf=r(`. Refer to superclass
`),ui=n("a"),Wf=r("XLMRobertaTokenizerFast"),Uf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Xf=d(),da=n("p"),Hf=r("The tokenization method is "),Xd=n("code"),Vf=r("<tokens> <eos> <language code>"),Qf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Jf=d(),Hd=n("p"),Kf=r("Examples:"),Zf=d(),m(la.$$.fragment),Yf=d(),Pe=n("div"),m(ca.$$.fragment),e_=d(),Vd=n("p"),t_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),o_=d(),pa=n("p"),n_=r("An MBART sequence has the following format, where "),Qd=n("code"),a_=r("X"),s_=r(" represents the sequence:"),r_=d(),ha=n("ul"),ua=n("li"),Jd=n("code"),i_=r("input_ids"),d_=r(" (for encoder) "),Kd=n("code"),l_=r("X [eos, src_lang_code]"),c_=d(),ma=n("li"),Zd=n("code"),p_=r("decoder_input_ids"),h_=r(": (for decoder) "),Yd=n("code"),u_=r("X [eos, tgt_lang_code]"),m_=d(),el=n("p"),f_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),__=d(),Go=n("div"),m(fa.$$.fragment),g_=d(),tl=n("p"),k_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),b_=d(),Ro=n("div"),m(_a.$$.fragment),v_=d(),ol=n("p"),y_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),T_=d(),Wo=n("div"),m(ga.$$.fragment),M_=d(),nl=n("p"),w_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Np=d(),io=n("h2"),Uo=n("a"),al=n("span"),m(ka.$$.fragment),z_=d(),sl=n("span"),x_=r("MBart50Tokenizer"),Op=d(),A=n("div"),m(ba.$$.fragment),B_=d(),va=n("p"),q_=r("Construct a MBart50 tokenizer. Based on "),ya=n("a"),$_=r("SentencePiece"),F_=r("."),j_=d(),Ta=n("p"),E_=r("This tokenizer inherits from "),mi=n("a"),P_=r("PreTrainedTokenizer"),C_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),A_=d(),rl=n("p"),S_=r("Examples:"),I_=d(),m(Ma.$$.fragment),N_=d(),ot=n("div"),m(wa.$$.fragment),O_=d(),za=n("p"),D_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=n("code"),L_=r("X"),G_=r(" represents the sequence:"),R_=d(),xa=n("ul"),Ba=n("li"),dl=n("code"),W_=r("input_ids"),U_=r(" (for encoder) "),ll=n("code"),X_=r("[src_lang_code] X [eos]"),H_=d(),qa=n("li"),cl=n("code"),V_=r("labels"),Q_=r(": (for decoder) "),pl=n("code"),J_=r("[tgt_lang_code] X [eos]"),K_=d(),hl=n("p"),Z_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Y_=d(),Xo=n("div"),m($a.$$.fragment),eg=d(),ul=n("p"),tg=r("Converts a sequence of tokens (strings for sub-words) in a single string."),og=d(),Ho=n("div"),m(Fa.$$.fragment),ng=d(),ja=n("p"),ag=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=n("code"),sg=r("prepare_for_model"),rg=r(" method."),ig=d(),Vo=n("div"),m(Ea.$$.fragment),dg=d(),fl=n("p"),lg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),cg=d(),Qo=n("div"),m(Pa.$$.fragment),pg=d(),_l=n("p"),hg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dp=d(),lo=n("h2"),Jo=n("a"),gl=n("span"),m(Ca.$$.fragment),ug=d(),kl=n("span"),mg=r("MBart50TokenizerFast"),Lp=d(),G=n("div"),m(Aa.$$.fragment),fg=d(),co=n("p"),_g=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=n("em"),gg=r("tokenizers"),kg=r(` library). Based on
`),Sa=n("a"),bg=r("BPE"),vg=r("."),yg=d(),Ia=n("p"),Tg=r("This tokenizer inherits from "),fi=n("a"),Mg=r("PreTrainedTokenizerFast"),wg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zg=d(),vl=n("p"),xg=r("Examples:"),Bg=d(),m(Na.$$.fragment),qg=d(),Ce=n("div"),m(Oa.$$.fragment),$g=d(),yl=n("p"),Fg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),jg=d(),Da=n("p"),Eg=r("An MBART-50 sequence has the following format, where "),Tl=n("code"),Pg=r("X"),Cg=r(" represents the sequence:"),Ag=d(),La=n("ul"),Ga=n("li"),Ml=n("code"),Sg=r("input_ids"),Ig=r(" (for encoder) "),wl=n("code"),Ng=r("[src_lang_code] X [eos]"),Og=d(),Ra=n("li"),zl=n("code"),Dg=r("labels"),Lg=r(": (for decoder) "),xl=n("code"),Gg=r("[tgt_lang_code] X [eos]"),Rg=d(),Bl=n("p"),Wg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ug=d(),Ko=n("div"),m(Wa.$$.fragment),Xg=d(),ql=n("p"),Hg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Vg=d(),Zo=n("div"),m(Ua.$$.fragment),Qg=d(),$l=n("p"),Jg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Gp=d(),po=n("h2"),Yo=n("a"),Fl=n("span"),m(Xa.$$.fragment),Kg=d(),jl=n("span"),Zg=r("MBartModel"),Rp=d(),Qe=n("div"),m(Ha.$$.fragment),Yg=d(),Va=n("p"),ek=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=n("a"),tk=r("PreTrainedModel"),ok=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=d(),Qa=n("p"),ak=r("This model is also a PyTorch "),Ja=n("a"),sk=r("torch.nn.Module"),rk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=d(),Ae=n("div"),m(Ka.$$.fragment),dk=d(),ho=n("p"),lk=r("The "),gi=n("a"),ck=r("MBartModel"),pk=r(" forward method, overrides the "),El=n("code"),hk=r("__call__"),uk=r(" special method."),mk=d(),m(en.$$.fragment),fk=d(),Pl=n("p"),_k=r("Example:"),gk=d(),m(Za.$$.fragment),Wp=d(),uo=n("h2"),tn=n("a"),Cl=n("span"),m(Ya.$$.fragment),kk=d(),Al=n("span"),bk=r("MBartForConditionalGeneration"),Up=d(),Je=n("div"),m(es.$$.fragment),vk=d(),ts=n("p"),yk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=n("a"),Tk=r("PreTrainedModel"),Mk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk=d(),os=n("p"),zk=r("This model is also a PyTorch "),ns=n("a"),xk=r("torch.nn.Module"),Bk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qk=d(),Z=n("div"),m(as.$$.fragment),$k=d(),mo=n("p"),Fk=r("The "),bi=n("a"),jk=r("MBartForConditionalGeneration"),Ek=r(" forward method, overrides the "),Sl=n("code"),Pk=r("__call__"),Ck=r(" special method."),Ak=d(),m(on.$$.fragment),Sk=d(),Il=n("p"),Ik=r("Summarization example:"),Nk=d(),m(ss.$$.fragment),Ok=d(),Nl=n("p"),Dk=r("Mask filling example:"),Lk=d(),m(rs.$$.fragment),Xp=d(),fo=n("h2"),nn=n("a"),Ol=n("span"),m(is.$$.fragment),Gk=d(),Dl=n("span"),Rk=r("MBartForQuestionAnswering"),Hp=d(),Be=n("div"),m(ds.$$.fragment),Wk=d(),_o=n("p"),Uk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=n("code"),Xk=r("span start logits"),Hk=r(" and "),Gl=n("code"),Vk=r("span end logits"),Qk=r(")."),Jk=d(),ls=n("p"),Kk=r("This model inherits from "),vi=n("a"),Zk=r("PreTrainedModel"),Yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=d(),cs=n("p"),tb=r("This model is also a PyTorch "),ps=n("a"),ob=r("torch.nn.Module"),nb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ab=d(),Se=n("div"),m(hs.$$.fragment),sb=d(),go=n("p"),rb=r("The "),yi=n("a"),ib=r("MBartForQuestionAnswering"),db=r(" forward method, overrides the "),Rl=n("code"),lb=r("__call__"),cb=r(" special method."),pb=d(),m(an.$$.fragment),hb=d(),Wl=n("p"),ub=r("Example:"),mb=d(),m(us.$$.fragment),Vp=d(),ko=n("h2"),sn=n("a"),Ul=n("span"),m(ms.$$.fragment),fb=d(),Xl=n("span"),_b=r("MBartForSequenceClassification"),Qp=d(),qe=n("div"),m(fs.$$.fragment),gb=d(),Hl=n("p"),kb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),bb=d(),_s=n("p"),vb=r("This model inherits from "),Ti=n("a"),yb=r("PreTrainedModel"),Tb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mb=d(),gs=n("p"),wb=r("This model is also a PyTorch "),ks=n("a"),zb=r("torch.nn.Module"),xb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bb=d(),Y=n("div"),m(bs.$$.fragment),qb=d(),bo=n("p"),$b=r("The "),Mi=n("a"),Fb=r("MBartForSequenceClassification"),jb=r(" forward method, overrides the "),Vl=n("code"),Eb=r("__call__"),Pb=r(" special method."),Cb=d(),m(rn.$$.fragment),Ab=d(),Ql=n("p"),Sb=r("Example of single-label classification:"),Ib=d(),m(vs.$$.fragment),Nb=d(),Jl=n("p"),Ob=r("Example of multi-label classification:"),Db=d(),m(ys.$$.fragment),Jp=d(),vo=n("h2"),dn=n("a"),Kl=n("span"),m(Ts.$$.fragment),Lb=d(),Zl=n("span"),Gb=r("MBartForCausalLM"),Kp=d(),yo=n("div"),m(Ms.$$.fragment),Rb=d(),Tt=n("div"),m(ws.$$.fragment),Wb=d(),Yl=n("p"),Ub=r("Example:"),Xb=d(),m(zs.$$.fragment),Zp=d(),To=n("h2"),ln=n("a"),ec=n("span"),m(xs.$$.fragment),Hb=d(),tc=n("span"),Vb=r("TFMBartModel"),Yp=d(),$e=n("div"),m(Bs.$$.fragment),Qb=d(),qs=n("p"),Jb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=n("a"),Kb=r("TFPreTrainedModel"),Zb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yb=d(),$s=n("p"),ev=r("This model is also a "),Fs=n("a"),tv=r("tf.keras.Model"),ov=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=d(),m(cn.$$.fragment),av=d(),Ie=n("div"),m(js.$$.fragment),sv=d(),Mo=n("p"),rv=r("The "),zi=n("a"),iv=r("TFMBartModel"),dv=r(" forward method, overrides the "),oc=n("code"),lv=r("__call__"),cv=r(" special method."),pv=d(),m(pn.$$.fragment),hv=d(),nc=n("p"),uv=r("Example:"),mv=d(),m(Es.$$.fragment),eh=d(),wo=n("h2"),hn=n("a"),ac=n("span"),m(Ps.$$.fragment),fv=d(),sc=n("span"),_v=r("TFMBartForConditionalGeneration"),th=d(),Fe=n("div"),m(Cs.$$.fragment),gv=d(),As=n("p"),kv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=n("a"),bv=r("TFPreTrainedModel"),vv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv=d(),Ss=n("p"),Tv=r("This model is also a "),Is=n("a"),Mv=r("tf.keras.Model"),wv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zv=d(),m(un.$$.fragment),xv=d(),ee=n("div"),m(Ns.$$.fragment),Bv=d(),zo=n("p"),qv=r("The "),Bi=n("a"),$v=r("TFMBartForConditionalGeneration"),Fv=r(" forward method, overrides the "),rc=n("code"),jv=r("__call__"),Ev=r(" special method."),Pv=d(),m(mn.$$.fragment),Cv=d(),ic=n("p"),Av=r("Summarization example:"),Sv=d(),m(Os.$$.fragment),Iv=d(),dc=n("p"),Nv=r("Mask filling example:"),Ov=d(),m(Ds.$$.fragment),oh=d(),xo=n("h2"),fn=n("a"),lc=n("span"),m(Ls.$$.fragment),Dv=d(),cc=n("span"),Lv=r("FlaxMBartModel"),nh=d(),R=n("div"),m(Gs.$$.fragment),Gv=d(),Rs=n("p"),Rv=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=n("a"),Wv=r("FlaxPreTrainedModel"),Uv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv=d(),Ws=n("p"),Hv=r(`This model is also a Flax Linen
`),Us=n("a"),Vv=r("flax.nn.Module"),Qv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jv=d(),pc=n("p"),Kv=r("Finally, this model supports inherent JAX features such as:"),Zv=d(),mt=n("ul"),hc=n("li"),Xs=n("a"),Yv=r("Just-In-Time (JIT) compilation"),ey=d(),uc=n("li"),Hs=n("a"),ty=r("Automatic Differentiation"),oy=d(),mc=n("li"),Vs=n("a"),ny=r("Vectorization"),ay=d(),fc=n("li"),Qs=n("a"),sy=r("Parallelization"),ry=d(),Ne=n("div"),m(Js.$$.fragment),iy=d(),Bo=n("p"),dy=r("The "),_c=n("code"),ly=r("FlaxMBartPreTrainedModel"),cy=r("forward method, overrides the "),gc=n("code"),py=r("__call__"),hy=r(" special method."),uy=d(),m(_n.$$.fragment),my=d(),kc=n("p"),fy=r("Example:"),_y=d(),m(Ks.$$.fragment),gy=d(),Mt=n("div"),m(Zs.$$.fragment),ky=d(),bc=n("p"),by=r("Example:"),vy=d(),m(Ys.$$.fragment),yy=d(),wt=n("div"),m(er.$$.fragment),Ty=d(),vc=n("p"),My=r("Example:"),wy=d(),m(tr.$$.fragment),ah=d(),qo=n("h2"),gn=n("a"),yc=n("span"),m(or.$$.fragment),zy=d(),Tc=n("span"),xy=r("FlaxMBartForConditionalGeneration"),sh=d(),W=n("div"),m(nr.$$.fragment),By=d(),ar=n("p"),qy=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=n("a"),$y=r("FlaxPreTrainedModel"),Fy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=d(),sr=n("p"),Ey=r(`This model is also a Flax Linen
`),rr=n("a"),Py=r("flax.nn.Module"),Cy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ay=d(),Mc=n("p"),Sy=r("Finally, this model supports inherent JAX features such as:"),Iy=d(),ft=n("ul"),wc=n("li"),ir=n("a"),Ny=r("Just-In-Time (JIT) compilation"),Oy=d(),zc=n("li"),dr=n("a"),Dy=r("Automatic Differentiation"),Ly=d(),xc=n("li"),lr=n("a"),Gy=r("Vectorization"),Ry=d(),Bc=n("li"),cr=n("a"),Wy=r("Parallelization"),Uy=d(),te=n("div"),m(pr.$$.fragment),Xy=d(),$o=n("p"),Hy=r("The "),qc=n("code"),Vy=r("FlaxMBartPreTrainedModel"),Qy=r("forward method, overrides the "),$c=n("code"),Jy=r("__call__"),Ky=r(" special method."),Zy=d(),m(kn.$$.fragment),Yy=d(),Fc=n("p"),eT=r("Summarization example:"),tT=d(),m(hr.$$.fragment),oT=d(),jc=n("p"),nT=r("Mask filling example:"),aT=d(),m(ur.$$.fragment),sT=d(),zt=n("div"),m(mr.$$.fragment),rT=d(),Ec=n("p"),iT=r("Example:"),dT=d(),m(fr.$$.fragment),lT=d(),xt=n("div"),m(_r.$$.fragment),cT=d(),Pc=n("p"),pT=r("Example:"),hT=d(),m(gr.$$.fragment),rh=d(),Fo=n("h2"),bn=n("a"),Cc=n("span"),m(kr.$$.fragment),uT=d(),Ac=n("span"),mT=r("FlaxMBartForSequenceClassification"),ih=d(),I=n("div"),m(br.$$.fragment),fT=d(),Sc=n("p"),_T=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),gT=d(),vr=n("p"),kT=r("This model inherits from "),Fi=n("a"),bT=r("FlaxPreTrainedModel"),vT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yT=d(),yr=n("p"),TT=r(`This model is also a Flax Linen
`),Tr=n("a"),MT=r("flax.nn.Module"),wT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zT=d(),Ic=n("p"),xT=r("Finally, this model supports inherent JAX features such as:"),BT=d(),_t=n("ul"),Nc=n("li"),Mr=n("a"),qT=r("Just-In-Time (JIT) compilation"),$T=d(),Oc=n("li"),wr=n("a"),FT=r("Automatic Differentiation"),jT=d(),Dc=n("li"),zr=n("a"),ET=r("Vectorization"),PT=d(),Lc=n("li"),xr=n("a"),CT=r("Parallelization"),AT=d(),Oe=n("div"),m(Br.$$.fragment),ST=d(),jo=n("p"),IT=r("The "),Gc=n("code"),NT=r("FlaxMBartPreTrainedModel"),OT=r("forward method, overrides the "),Rc=n("code"),DT=r("__call__"),LT=r(" special method."),GT=d(),m(vn.$$.fragment),RT=d(),Wc=n("p"),WT=r("Example:"),UT=d(),m(qr.$$.fragment),XT=d(),Bt=n("div"),m($r.$$.fragment),HT=d(),Uc=n("p"),VT=r("Example:"),QT=d(),m(Fr.$$.fragment),JT=d(),qt=n("div"),m(jr.$$.fragment),KT=d(),Xc=n("p"),ZT=r("Example:"),YT=d(),m(Er.$$.fragment),dh=d(),Eo=n("h2"),yn=n("a"),Hc=n("span"),m(Pr.$$.fragment),eM=d(),Vc=n("span"),tM=r("FlaxMBartForQuestionAnswering"),lh=d(),N=n("div"),m(Cr.$$.fragment),oM=d(),Po=n("p"),nM=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=n("code"),aM=r("span start logits"),sM=r(" and "),Jc=n("code"),rM=r("span end logits"),iM=r(")."),dM=d(),Ar=n("p"),lM=r("This model inherits from "),ji=n("a"),cM=r("FlaxPreTrainedModel"),pM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hM=d(),Sr=n("p"),uM=r(`This model is also a Flax Linen
`),Ir=n("a"),mM=r("flax.nn.Module"),fM=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_M=d(),Kc=n("p"),gM=r("Finally, this model supports inherent JAX features such as:"),kM=d(),gt=n("ul"),Zc=n("li"),Nr=n("a"),bM=r("Just-In-Time (JIT) compilation"),vM=d(),Yc=n("li"),Or=n("a"),yM=r("Automatic Differentiation"),TM=d(),ep=n("li"),Dr=n("a"),MM=r("Vectorization"),wM=d(),tp=n("li"),Lr=n("a"),zM=r("Parallelization"),xM=d(),De=n("div"),m(Gr.$$.fragment),BM=d(),Co=n("p"),qM=r("The "),op=n("code"),$M=r("FlaxMBartPreTrainedModel"),FM=r("forward method, overrides the "),np=n("code"),jM=r("__call__"),EM=r(" special method."),PM=d(),m(Tn.$$.fragment),CM=d(),ap=n("p"),AM=r("Example:"),SM=d(),m(Rr.$$.fragment),IM=d(),$t=n("div"),m(Wr.$$.fragment),NM=d(),sp=n("p"),OM=r("Example:"),DM=d(),m(Ur.$$.fragment),LM=d(),Ft=n("div"),m(Xr.$$.fragment),GM=d(),rp=n("p"),RM=r("Example:"),WM=d(),m(Hr.$$.fragment),this.h()},l(o){const p=S2('[data-svelte="svelte-1phssyn"]',document.head);u=a(p,"META",{name:!0,content:!0}),p.forEach(t),x=l(o),v=a(o,"H1",{class:!0});var Vr=s(v);M=a(Vr,"A",{id:!0,class:!0,href:!0});var ip=s(M);z=a(ip,"SPAN",{});var dp=s(z);f(T.$$.fragment,dp),dp.forEach(t),ip.forEach(t),y=l(Vr),q=a(Vr,"SPAN",{});var lp=s(q);st=i(lp,"MBart and MBart-50"),lp.forEach(t),Vr.forEach(t),je=l(o),j=a(o,"P",{});var Mn=s(j);Ue=a(Mn,"STRONG",{});var cp=s(Ue);_e=i(cp,"DISCLAIMER:"),cp.forEach(t),rt=i(Mn," If you see something strange, file a "),ge=a(Mn,"A",{href:!0,rel:!0});var pp=s(ge);ke=i(pp,"Github Issue"),pp.forEach(t),it=i(Mn,` and assign
@patrickvonplaten`),Mn.forEach(t),Ke=l(o),Q=a(o,"H2",{class:!0});var Qr=s(Q);O=a(Qr,"A",{id:!0,class:!0,href:!0});var hp=s(O);Xe=a(hp,"SPAN",{});var up=s(Xe);f(ae.$$.fragment,up),up.forEach(t),hp.forEach(t),P=l(Qr),S=a(Qr,"SPAN",{});var mp=s(S);dt=i(mp,"Overview of MBart"),mp.forEach(t),Qr.forEach(t),ce=l(o),pe=a(o,"P",{});var Jr=s(pe);lt=i(Jr,"The MBart model was presented in "),J=a(Jr,"A",{href:!0,rel:!0});var XM=s(J);ct=i(XM,"Multilingual Denoising Pre-training for Neural Machine Translation"),XM.forEach(t),pt=i(Jr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Jr.forEach(t),D=l(o),Ee=a(o,"P",{});var HM=s(Ee);be=i(HM,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),HM.forEach(t),Ze=l(o),se=a(o,"P",{});var fp=s(se);ve=i(fp,"This model was contributed by "),ye=a(fp,"A",{href:!0,rel:!0});var VM=s(ye);ht=i(VM,"valhalla"),VM.forEach(t),re=i(fp,". The Authors\u2019 code can be found "),Te=a(fp,"A",{href:!0,rel:!0});var QM=s(Te);Me=i(QM,"here"),QM.forEach(t),fp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var ph=s(w);$=a(ph,"A",{id:!0,class:!0,href:!0});var JM=s($);we=a(JM,"SPAN",{});var KM=s(we);f(He.$$.fragment,KM),KM.forEach(t),JM.forEach(t),Ut=l(ph),K=a(ph,"SPAN",{});var ZM=s(K);Xt=i(ZM,"Training of MBart"),ZM.forEach(t),ph.forEach(t),kt=l(o),X=a(o,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var YM=s(de);Ht=i(YM,"X [eos, src_lang_code]"),YM.forEach(t),Vt=i(jt," where "),le=a(jt,"CODE",{});var ew=s(le);Qt=i(ew,"X"),ew.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Ve=a(jt,"CODE",{});var tw=s(Ve);Kt=i(tw,"[tgt_lang_code] X [eos]"),tw.forEach(t),Eu=i(jt,". "),rd=a(jt,"CODE",{});var ow=s(rd);Pu=i(ow,"bos"),ow.forEach(t),Cu=i(jt," is never used."),jt.forEach(t),_p=l(o),bt=a(o,"P",{});var Ei=s(bt);Au=i(Ei,"The regular "),Cn=a(Ei,"A",{href:!0});var UM=s(Cn);id=a(UM,"STRONG",{});var nw=s(id);Su=i(nw,"call"),nw.forEach(t),Iu=i(UM,"()"),UM.forEach(t),Nu=i(Ei,` will encode source text format, and it should be wrapped
inside the context manager `),Zr=a(Ei,"A",{href:!0});var aw=s(Zr);Ou=i(aw,"as_target_tokenizer()"),aw.forEach(t),Du=i(Ei," to encode target text format."),Ei.forEach(t),gp=l(o),Yr=a(o,"UL",{});var sw=s(Yr);dd=a(sw,"LI",{});var rw=s(dd);Lu=i(rw,"Supervised training"),rw.forEach(t),sw.forEach(t),kp=l(o),f(An.$$.fragment,o),bp=l(o),ei=a(o,"UL",{});var iw=s(ei);Sn=a(iw,"LI",{});var hh=s(Sn);ld=a(hh,"P",{});var dw=s(ld);Gu=i(dw,"Generation"),dw.forEach(t),Ru=l(hh),Zt=a(hh,"P",{});var Pi=s(Zt);Wu=i(Pi,"While generating the target text set the "),cd=a(Pi,"CODE",{});var lw=s(cd);Uu=i(lw,"decoder_start_token_id"),lw.forEach(t),Xu=i(Pi,` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=a(Pi,"EM",{});var cw=s(pd);Hu=i(cw,"facebook/mbart-large-en-ro"),cw.forEach(t),Vu=i(Pi," model."),Pi.forEach(t),hh.forEach(t),iw.forEach(t),vp=l(o),f(In.$$.fragment,o),yp=l(o),Yt=a(o,"H2",{class:!0});var uh=s(Yt);Ao=a(uh,"A",{id:!0,class:!0,href:!0});var pw=s(Ao);hd=a(pw,"SPAN",{});var hw=s(hd);f(Nn.$$.fragment,hw),hw.forEach(t),pw.forEach(t),Qu=l(uh),ud=a(uh,"SPAN",{});var uw=s(ud);Ju=i(uw,"Overview of MBart-50"),uw.forEach(t),uh.forEach(t),Tp=l(o),vt=a(o,"P",{});var Ci=s(vt);Ku=i(Ci,"MBart-50 was introduced in the "),On=a(Ci,"A",{href:!0,rel:!0});var mw=s(On);Zu=i(mw,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),mw.forEach(t),Yu=i(Ci,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=a(Ci,"EM",{});var fw=s(md);em=i(fw,"mbart-large-cc25"),fw.forEach(t),tm=i(Ci,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ci.forEach(t),Mp=l(o),ti=a(o,"P",{});var _w=s(ti);om=i(_w,"According to the abstract"),_w.forEach(t),wp=l(o),oi=a(o,"P",{});var gw=s(oi);fd=a(gw,"EM",{});var kw=s(fd);nm=i(kw,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kw.forEach(t),gw.forEach(t),zp=l(o),eo=a(o,"H3",{class:!0});var mh=s(eo);So=a(mh,"A",{id:!0,class:!0,href:!0});var bw=s(So);_d=a(bw,"SPAN",{});var vw=s(_d);f(Dn.$$.fragment,vw),vw.forEach(t),bw.forEach(t),am=l(mh),gd=a(mh,"SPAN",{});var yw=s(gd);sm=i(yw,"Training of MBart-50"),yw.forEach(t),mh.forEach(t),xp=l(o),et=a(o,"P",{});var wn=s(et);rm=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a(wn,"CODE",{});var Tw=s(kd);im=i(Tw,"[lang_code] X [eos]"),Tw.forEach(t),dm=i(wn,", where "),bd=a(wn,"CODE",{});var Mw=s(bd);lm=i(Mw,"lang_code"),Mw.forEach(t),cm=i(wn,` is source
language id for source text and target language id for target text, with `),vd=a(wn,"CODE",{});var ww=s(vd);pm=i(ww,"X"),ww.forEach(t),hm=i(wn,` being the source or target text
respectively.`),wn.forEach(t),Bp=l(o),Io=a(o,"P",{});var fh=s(Io);um=i(fh,"MBart-50 has its own tokenizer "),ni=a(fh,"A",{href:!0});var zw=s(ni);mm=i(zw,"MBart50Tokenizer"),zw.forEach(t),fm=i(fh,"."),fh.forEach(t),qp=l(o),ai=a(o,"UL",{});var xw=s(ai);yd=a(xw,"LI",{});var Bw=s(yd);_m=i(Bw,"Supervised training"),Bw.forEach(t),xw.forEach(t),$p=l(o),f(Ln.$$.fragment,o),Fp=l(o),si=a(o,"UL",{});var qw=s(si);Gn=a(qw,"LI",{});var _h=s(Gn);Td=a(_h,"P",{});var $w=s(Td);gm=i($w,"Generation"),$w.forEach(t),km=l(_h),ze=a(_h,"P",{});var nt=s(ze);bm=i(nt,"To generate using the mBART-50 multilingual translation models, "),Md=a(nt,"CODE",{});var Fw=s(Md);vm=i(Fw,"eos_token_id"),Fw.forEach(t),ym=i(nt,` is used as the
`),wd=a(nt,"CODE",{});var jw=s(wd);Tm=i(jw,"decoder_start_token_id"),jw.forEach(t),Mm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),zd=a(nt,"EM",{});var Ew=s(zd);wm=i(Ew,"forced_bos_token_id"),Ew.forEach(t),zm=i(nt," parameter to the "),xd=a(nt,"EM",{});var Pw=s(xd);xm=i(Pw,"generate"),Pw.forEach(t),Bm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Bd=a(nt,"EM",{});var Cw=s(Bd);qm=i(Cw,"facebook/mbart-50-large-many-to-many"),Cw.forEach(t),$m=i(nt," checkpoint."),nt.forEach(t),_h.forEach(t),qw.forEach(t),jp=l(o),f(Rn.$$.fragment,o),Ep=l(o),to=a(o,"H2",{class:!0});var gh=s(to);No=a(gh,"A",{id:!0,class:!0,href:!0});var Aw=s(No);qd=a(Aw,"SPAN",{});var Sw=s(qd);f(Wn.$$.fragment,Sw),Sw.forEach(t),Aw.forEach(t),Fm=l(gh),$d=a(gh,"SPAN",{});var Iw=s($d);jm=i(Iw,"MBartConfig"),Iw.forEach(t),gh.forEach(t),Pp=l(o),xe=a(o,"DIV",{class:!0});var Et=s(xe);f(Un.$$.fragment,Et),Em=l(Et),oo=a(Et,"P",{});var Ai=s(oo);Pm=i(Ai,"This is the configuration class to store the configuration of a "),ri=a(Ai,"A",{href:!0});var Nw=s(ri);Cm=i(Nw,"MBartModel"),Nw.forEach(t),Am=i(Ai,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=a(Ai,"A",{href:!0,rel:!0});var Ow=s(Xn);Sm=i(Ow,"facebook/mbart-large-cc25"),Ow.forEach(t),Im=i(Ai," architecture."),Ai.forEach(t),Nm=l(Et),no=a(Et,"P",{});var Si=s(no);Om=i(Si,"Configuration objects inherit from "),ii=a(Si,"A",{href:!0});var Dw=s(ii);Dm=i(Dw,"PretrainedConfig"),Dw.forEach(t),Lm=i(Si,` and can be used to control the model outputs. Read the
documentation from `),di=a(Si,"A",{href:!0});var Lw=s(di);Gm=i(Lw,"PretrainedConfig"),Lw.forEach(t),Rm=i(Si," for more information."),Si.forEach(t),Wm=l(Et),Fd=a(Et,"P",{});var Gw=s(Fd);Um=i(Gw,"Example:"),Gw.forEach(t),Xm=l(Et),f(Hn.$$.fragment,Et),Et.forEach(t),Cp=l(o),ao=a(o,"H2",{class:!0});var kh=s(ao);Oo=a(kh,"A",{id:!0,class:!0,href:!0});var Rw=s(Oo);jd=a(Rw,"SPAN",{});var Ww=s(jd);f(Vn.$$.fragment,Ww),Ww.forEach(t),Rw.forEach(t),Hm=l(kh),Ed=a(kh,"SPAN",{});var Uw=s(Ed);Vm=i(Uw,"MBartTokenizer"),Uw.forEach(t),kh.forEach(t),Ap=l(o),L=a(o,"DIV",{class:!0});var he=s(L);f(Qn.$$.fragment,he),Qm=l(he),Pd=a(he,"P",{});var Xw=s(Pd);Jm=i(Xw,"Construct an MBART tokenizer."),Xw.forEach(t),Km=l(he),ut=a(he,"P",{});var zn=s(ut);Zm=i(zn,"Adapted from "),li=a(zn,"A",{href:!0});var Hw=s(li);Ym=i(Hw,"RobertaTokenizer"),Hw.forEach(t),ef=i(zn," and "),ci=a(zn,"A",{href:!0});var Vw=s(ci);tf=i(Vw,"XLNetTokenizer"),Vw.forEach(t),of=i(zn,`. Based on
`),Jn=a(zn,"A",{href:!0,rel:!0});var Qw=s(Jn);nf=i(Qw,"SentencePiece"),Qw.forEach(t),af=i(zn,"."),zn.forEach(t),sf=l(he),Kn=a(he,"P",{});var bh=s(Kn);rf=i(bh,"The tokenization method is "),Cd=a(bh,"CODE",{});var Jw=s(Cd);df=i(Jw,"<tokens> <eos> <language code>"),Jw.forEach(t),lf=i(bh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),bh.forEach(t),cf=l(he),Ad=a(he,"P",{});var Kw=s(Ad);pf=i(Kw,"Examples:"),Kw.forEach(t),hf=l(he),f(Zn.$$.fragment,he),uf=l(he),Do=a(he,"DIV",{class:!0});var vh=s(Do);f(Yn.$$.fragment,vh),mf=l(vh),Sd=a(vh,"P",{});var Zw=s(Sd);ff=i(Zw,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Zw.forEach(t),vh.forEach(t),_f=l(he),tt=a(he,"DIV",{class:!0});var xn=s(tt);f(ea.$$.fragment,xn),gf=l(xn),ta=a(xn,"P",{});var yh=s(ta);kf=i(yh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=a(yh,"CODE",{});var Yw=s(Id);bf=i(Yw,"X"),Yw.forEach(t),vf=i(yh," represents the sequence:"),yh.forEach(t),yf=l(xn),oa=a(xn,"UL",{});var Th=s(oa);na=a(Th,"LI",{});var Mh=s(na);Nd=a(Mh,"CODE",{});var e1=s(Nd);Tf=i(e1,"input_ids"),e1.forEach(t),Mf=i(Mh," (for encoder) "),Od=a(Mh,"CODE",{});var t1=s(Od);wf=i(t1,"X [eos, src_lang_code]"),t1.forEach(t),Mh.forEach(t),zf=l(Th),aa=a(Th,"LI",{});var wh=s(aa);Dd=a(wh,"CODE",{});var o1=s(Dd);xf=i(o1,"decoder_input_ids"),o1.forEach(t),Bf=i(wh,": (for decoder) "),Ld=a(wh,"CODE",{});var n1=s(Ld);qf=i(n1,"X [eos, tgt_lang_code]"),n1.forEach(t),wh.forEach(t),Th.forEach(t),$f=l(xn),Gd=a(xn,"P",{});var a1=s(Gd);Ff=i(a1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),a1.forEach(t),xn.forEach(t),he.forEach(t),Sp=l(o),so=a(o,"H2",{class:!0});var zh=s(so);Lo=a(zh,"A",{id:!0,class:!0,href:!0});var s1=s(Lo);Rd=a(s1,"SPAN",{});var r1=s(Rd);f(sa.$$.fragment,r1),r1.forEach(t),s1.forEach(t),jf=l(zh),Wd=a(zh,"SPAN",{});var i1=s(Wd);Ef=i(i1,"MBartTokenizerFast"),i1.forEach(t),zh.forEach(t),Ip=l(o),C=a(o,"DIV",{class:!0});var H=s(C);f(ra.$$.fragment,H),Pf=l(H),ro=a(H,"P",{});var Ii=s(ro);Cf=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=a(Ii,"EM",{});var d1=s(Ud);Af=i(d1,"tokenizers"),d1.forEach(t),Sf=i(Ii,` library). Based on
`),ia=a(Ii,"A",{href:!0,rel:!0});var l1=s(ia);If=i(l1,"BPE"),l1.forEach(t),Nf=i(Ii,"."),Ii.forEach(t),Of=l(H),yt=a(H,"P",{});var Kr=s(yt);pi=a(Kr,"A",{href:!0});var c1=s(pi);Df=i(c1,"MBartTokenizerFast"),c1.forEach(t),Lf=i(Kr," is a subclass of "),hi=a(Kr,"A",{href:!0});var p1=s(hi);Gf=i(p1,"XLMRobertaTokenizerFast"),p1.forEach(t),Rf=i(Kr,`. Refer to superclass
`),ui=a(Kr,"A",{href:!0});var h1=s(ui);Wf=i(h1,"XLMRobertaTokenizerFast"),h1.forEach(t),Uf=i(Kr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Kr.forEach(t),Xf=l(H),da=a(H,"P",{});var xh=s(da);Hf=i(xh,"The tokenization method is "),Xd=a(xh,"CODE",{});var u1=s(Xd);Vf=i(u1,"<tokens> <eos> <language code>"),u1.forEach(t),Qf=i(xh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),xh.forEach(t),Jf=l(H),Hd=a(H,"P",{});var m1=s(Hd);Kf=i(m1,"Examples:"),m1.forEach(t),Zf=l(H),f(la.$$.fragment,H),Yf=l(H),Pe=a(H,"DIV",{class:!0});var Pt=s(Pe);f(ca.$$.fragment,Pt),e_=l(Pt),Vd=a(Pt,"P",{});var f1=s(Vd);t_=i(f1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),f1.forEach(t),o_=l(Pt),pa=a(Pt,"P",{});var Bh=s(pa);n_=i(Bh,"An MBART sequence has the following format, where "),Qd=a(Bh,"CODE",{});var _1=s(Qd);a_=i(_1,"X"),_1.forEach(t),s_=i(Bh," represents the sequence:"),Bh.forEach(t),r_=l(Pt),ha=a(Pt,"UL",{});var qh=s(ha);ua=a(qh,"LI",{});var $h=s(ua);Jd=a($h,"CODE",{});var g1=s(Jd);i_=i(g1,"input_ids"),g1.forEach(t),d_=i($h," (for encoder) "),Kd=a($h,"CODE",{});var k1=s(Kd);l_=i(k1,"X [eos, src_lang_code]"),k1.forEach(t),$h.forEach(t),c_=l(qh),ma=a(qh,"LI",{});var Fh=s(ma);Zd=a(Fh,"CODE",{});var b1=s(Zd);p_=i(b1,"decoder_input_ids"),b1.forEach(t),h_=i(Fh,": (for decoder) "),Yd=a(Fh,"CODE",{});var v1=s(Yd);u_=i(v1,"X [eos, tgt_lang_code]"),v1.forEach(t),Fh.forEach(t),qh.forEach(t),m_=l(Pt),el=a(Pt,"P",{});var y1=s(el);f_=i(y1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),y1.forEach(t),Pt.forEach(t),__=l(H),Go=a(H,"DIV",{class:!0});var jh=s(Go);f(fa.$$.fragment,jh),g_=l(jh),tl=a(jh,"P",{});var T1=s(tl);k_=i(T1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),T1.forEach(t),jh.forEach(t),b_=l(H),Ro=a(H,"DIV",{class:!0});var Eh=s(Ro);f(_a.$$.fragment,Eh),v_=l(Eh),ol=a(Eh,"P",{});var M1=s(ol);y_=i(M1,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),M1.forEach(t),Eh.forEach(t),T_=l(H),Wo=a(H,"DIV",{class:!0});var Ph=s(Wo);f(ga.$$.fragment,Ph),M_=l(Ph),nl=a(Ph,"P",{});var w1=s(nl);w_=i(w1,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),w1.forEach(t),Ph.forEach(t),H.forEach(t),Np=l(o),io=a(o,"H2",{class:!0});var Ch=s(io);Uo=a(Ch,"A",{id:!0,class:!0,href:!0});var z1=s(Uo);al=a(z1,"SPAN",{});var x1=s(al);f(ka.$$.fragment,x1),x1.forEach(t),z1.forEach(t),z_=l(Ch),sl=a(Ch,"SPAN",{});var B1=s(sl);x_=i(B1,"MBart50Tokenizer"),B1.forEach(t),Ch.forEach(t),Op=l(o),A=a(o,"DIV",{class:!0});var V=s(A);f(ba.$$.fragment,V),B_=l(V),va=a(V,"P",{});var Ah=s(va);q_=i(Ah,"Construct a MBart50 tokenizer. Based on "),ya=a(Ah,"A",{href:!0,rel:!0});var q1=s(ya);$_=i(q1,"SentencePiece"),q1.forEach(t),F_=i(Ah,"."),Ah.forEach(t),j_=l(V),Ta=a(V,"P",{});var Sh=s(Ta);E_=i(Sh,"This tokenizer inherits from "),mi=a(Sh,"A",{href:!0});var $1=s(mi);P_=i($1,"PreTrainedTokenizer"),$1.forEach(t),C_=i(Sh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sh.forEach(t),A_=l(V),rl=a(V,"P",{});var F1=s(rl);S_=i(F1,"Examples:"),F1.forEach(t),I_=l(V),f(Ma.$$.fragment,V),N_=l(V),ot=a(V,"DIV",{class:!0});var Bn=s(ot);f(wa.$$.fragment,Bn),O_=l(Bn),za=a(Bn,"P",{});var Ih=s(za);D_=i(Ih,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=a(Ih,"CODE",{});var j1=s(il);L_=i(j1,"X"),j1.forEach(t),G_=i(Ih," represents the sequence:"),Ih.forEach(t),R_=l(Bn),xa=a(Bn,"UL",{});var Nh=s(xa);Ba=a(Nh,"LI",{});var Oh=s(Ba);dl=a(Oh,"CODE",{});var E1=s(dl);W_=i(E1,"input_ids"),E1.forEach(t),U_=i(Oh," (for encoder) "),ll=a(Oh,"CODE",{});var P1=s(ll);X_=i(P1,"[src_lang_code] X [eos]"),P1.forEach(t),Oh.forEach(t),H_=l(Nh),qa=a(Nh,"LI",{});var Dh=s(qa);cl=a(Dh,"CODE",{});var C1=s(cl);V_=i(C1,"labels"),C1.forEach(t),Q_=i(Dh,": (for decoder) "),pl=a(Dh,"CODE",{});var A1=s(pl);J_=i(A1,"[tgt_lang_code] X [eos]"),A1.forEach(t),Dh.forEach(t),Nh.forEach(t),K_=l(Bn),hl=a(Bn,"P",{});var S1=s(hl);Z_=i(S1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),S1.forEach(t),Bn.forEach(t),Y_=l(V),Xo=a(V,"DIV",{class:!0});var Lh=s(Xo);f($a.$$.fragment,Lh),eg=l(Lh),ul=a(Lh,"P",{});var I1=s(ul);tg=i(I1,"Converts a sequence of tokens (strings for sub-words) in a single string."),I1.forEach(t),Lh.forEach(t),og=l(V),Ho=a(V,"DIV",{class:!0});var Gh=s(Ho);f(Fa.$$.fragment,Gh),ng=l(Gh),ja=a(Gh,"P",{});var Rh=s(ja);ag=i(Rh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=a(Rh,"CODE",{});var N1=s(ml);sg=i(N1,"prepare_for_model"),N1.forEach(t),rg=i(Rh," method."),Rh.forEach(t),Gh.forEach(t),ig=l(V),Vo=a(V,"DIV",{class:!0});var Wh=s(Vo);f(Ea.$$.fragment,Wh),dg=l(Wh),fl=a(Wh,"P",{});var O1=s(fl);lg=i(O1,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),O1.forEach(t),Wh.forEach(t),cg=l(V),Qo=a(V,"DIV",{class:!0});var Uh=s(Qo);f(Pa.$$.fragment,Uh),pg=l(Uh),_l=a(Uh,"P",{});var D1=s(_l);hg=i(D1,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),D1.forEach(t),Uh.forEach(t),V.forEach(t),Dp=l(o),lo=a(o,"H2",{class:!0});var Xh=s(lo);Jo=a(Xh,"A",{id:!0,class:!0,href:!0});var L1=s(Jo);gl=a(L1,"SPAN",{});var G1=s(gl);f(Ca.$$.fragment,G1),G1.forEach(t),L1.forEach(t),ug=l(Xh),kl=a(Xh,"SPAN",{});var R1=s(kl);mg=i(R1,"MBart50TokenizerFast"),R1.forEach(t),Xh.forEach(t),Lp=l(o),G=a(o,"DIV",{class:!0});var ue=s(G);f(Aa.$$.fragment,ue),fg=l(ue),co=a(ue,"P",{});var Ni=s(co);_g=i(Ni,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=a(Ni,"EM",{});var W1=s(bl);gg=i(W1,"tokenizers"),W1.forEach(t),kg=i(Ni,` library). Based on
`),Sa=a(Ni,"A",{href:!0,rel:!0});var U1=s(Sa);bg=i(U1,"BPE"),U1.forEach(t),vg=i(Ni,"."),Ni.forEach(t),yg=l(ue),Ia=a(ue,"P",{});var Hh=s(Ia);Tg=i(Hh,"This tokenizer inherits from "),fi=a(Hh,"A",{href:!0});var X1=s(fi);Mg=i(X1,"PreTrainedTokenizerFast"),X1.forEach(t),wg=i(Hh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hh.forEach(t),zg=l(ue),vl=a(ue,"P",{});var H1=s(vl);xg=i(H1,"Examples:"),H1.forEach(t),Bg=l(ue),f(Na.$$.fragment,ue),qg=l(ue),Ce=a(ue,"DIV",{class:!0});var Ct=s(Ce);f(Oa.$$.fragment,Ct),$g=l(Ct),yl=a(Ct,"P",{});var V1=s(yl);Fg=i(V1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),V1.forEach(t),jg=l(Ct),Da=a(Ct,"P",{});var Vh=s(Da);Eg=i(Vh,"An MBART-50 sequence has the following format, where "),Tl=a(Vh,"CODE",{});var Q1=s(Tl);Pg=i(Q1,"X"),Q1.forEach(t),Cg=i(Vh," represents the sequence:"),Vh.forEach(t),Ag=l(Ct),La=a(Ct,"UL",{});var Qh=s(La);Ga=a(Qh,"LI",{});var Jh=s(Ga);Ml=a(Jh,"CODE",{});var J1=s(Ml);Sg=i(J1,"input_ids"),J1.forEach(t),Ig=i(Jh," (for encoder) "),wl=a(Jh,"CODE",{});var K1=s(wl);Ng=i(K1,"[src_lang_code] X [eos]"),K1.forEach(t),Jh.forEach(t),Og=l(Qh),Ra=a(Qh,"LI",{});var Kh=s(Ra);zl=a(Kh,"CODE",{});var Z1=s(zl);Dg=i(Z1,"labels"),Z1.forEach(t),Lg=i(Kh,": (for decoder) "),xl=a(Kh,"CODE",{});var Y1=s(xl);Gg=i(Y1,"[tgt_lang_code] X [eos]"),Y1.forEach(t),Kh.forEach(t),Qh.forEach(t),Rg=l(Ct),Bl=a(Ct,"P",{});var ez=s(Bl);Wg=i(ez,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ez.forEach(t),Ct.forEach(t),Ug=l(ue),Ko=a(ue,"DIV",{class:!0});var Zh=s(Ko);f(Wa.$$.fragment,Zh),Xg=l(Zh),ql=a(Zh,"P",{});var tz=s(ql);Hg=i(tz,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),tz.forEach(t),Zh.forEach(t),Vg=l(ue),Zo=a(ue,"DIV",{class:!0});var Yh=s(Zo);f(Ua.$$.fragment,Yh),Qg=l(Yh),$l=a(Yh,"P",{});var oz=s($l);Jg=i(oz,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),oz.forEach(t),Yh.forEach(t),ue.forEach(t),Gp=l(o),po=a(o,"H2",{class:!0});var eu=s(po);Yo=a(eu,"A",{id:!0,class:!0,href:!0});var nz=s(Yo);Fl=a(nz,"SPAN",{});var az=s(Fl);f(Xa.$$.fragment,az),az.forEach(t),nz.forEach(t),Kg=l(eu),jl=a(eu,"SPAN",{});var sz=s(jl);Zg=i(sz,"MBartModel"),sz.forEach(t),eu.forEach(t),Rp=l(o),Qe=a(o,"DIV",{class:!0});var qn=s(Qe);f(Ha.$$.fragment,qn),Yg=l(qn),Va=a(qn,"P",{});var tu=s(Va);ek=i(tu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=a(tu,"A",{href:!0});var rz=s(_i);tk=i(rz,"PreTrainedModel"),rz.forEach(t),ok=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(t),nk=l(qn),Qa=a(qn,"P",{});var ou=s(Qa);ak=i(ou,"This model is also a PyTorch "),Ja=a(ou,"A",{href:!0,rel:!0});var iz=s(Ja);sk=i(iz,"torch.nn.Module"),iz.forEach(t),rk=i(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(t),ik=l(qn),Ae=a(qn,"DIV",{class:!0});var At=s(Ae);f(Ka.$$.fragment,At),dk=l(At),ho=a(At,"P",{});var Oi=s(ho);lk=i(Oi,"The "),gi=a(Oi,"A",{href:!0});var dz=s(gi);ck=i(dz,"MBartModel"),dz.forEach(t),pk=i(Oi," forward method, overrides the "),El=a(Oi,"CODE",{});var lz=s(El);hk=i(lz,"__call__"),lz.forEach(t),uk=i(Oi," special method."),Oi.forEach(t),mk=l(At),f(en.$$.fragment,At),fk=l(At),Pl=a(At,"P",{});var cz=s(Pl);_k=i(cz,"Example:"),cz.forEach(t),gk=l(At),f(Za.$$.fragment,At),At.forEach(t),qn.forEach(t),Wp=l(o),uo=a(o,"H2",{class:!0});var nu=s(uo);tn=a(nu,"A",{id:!0,class:!0,href:!0});var pz=s(tn);Cl=a(pz,"SPAN",{});var hz=s(Cl);f(Ya.$$.fragment,hz),hz.forEach(t),pz.forEach(t),kk=l(nu),Al=a(nu,"SPAN",{});var uz=s(Al);bk=i(uz,"MBartForConditionalGeneration"),uz.forEach(t),nu.forEach(t),Up=l(o),Je=a(o,"DIV",{class:!0});var $n=s(Je);f(es.$$.fragment,$n),vk=l($n),ts=a($n,"P",{});var au=s(ts);yk=i(au,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=a(au,"A",{href:!0});var mz=s(ki);Tk=i(mz,"PreTrainedModel"),mz.forEach(t),Mk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),wk=l($n),os=a($n,"P",{});var su=s(os);zk=i(su,"This model is also a PyTorch "),ns=a(su,"A",{href:!0,rel:!0});var fz=s(ns);xk=i(fz,"torch.nn.Module"),fz.forEach(t),Bk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),qk=l($n),Z=a($n,"DIV",{class:!0});var Le=s(Z);f(as.$$.fragment,Le),$k=l(Le),mo=a(Le,"P",{});var Di=s(mo);Fk=i(Di,"The "),bi=a(Di,"A",{href:!0});var _z=s(bi);jk=i(_z,"MBartForConditionalGeneration"),_z.forEach(t),Ek=i(Di," forward method, overrides the "),Sl=a(Di,"CODE",{});var gz=s(Sl);Pk=i(gz,"__call__"),gz.forEach(t),Ck=i(Di," special method."),Di.forEach(t),Ak=l(Le),f(on.$$.fragment,Le),Sk=l(Le),Il=a(Le,"P",{});var kz=s(Il);Ik=i(kz,"Summarization example:"),kz.forEach(t),Nk=l(Le),f(ss.$$.fragment,Le),Ok=l(Le),Nl=a(Le,"P",{});var bz=s(Nl);Dk=i(bz,"Mask filling example:"),bz.forEach(t),Lk=l(Le),f(rs.$$.fragment,Le),Le.forEach(t),$n.forEach(t),Xp=l(o),fo=a(o,"H2",{class:!0});var ru=s(fo);nn=a(ru,"A",{id:!0,class:!0,href:!0});var vz=s(nn);Ol=a(vz,"SPAN",{});var yz=s(Ol);f(is.$$.fragment,yz),yz.forEach(t),vz.forEach(t),Gk=l(ru),Dl=a(ru,"SPAN",{});var Tz=s(Dl);Rk=i(Tz,"MBartForQuestionAnswering"),Tz.forEach(t),ru.forEach(t),Hp=l(o),Be=a(o,"DIV",{class:!0});var St=s(Be);f(ds.$$.fragment,St),Wk=l(St),_o=a(St,"P",{});var Li=s(_o);Uk=i(Li,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=a(Li,"CODE",{});var Mz=s(Ll);Xk=i(Mz,"span start logits"),Mz.forEach(t),Hk=i(Li," and "),Gl=a(Li,"CODE",{});var wz=s(Gl);Vk=i(wz,"span end logits"),wz.forEach(t),Qk=i(Li,")."),Li.forEach(t),Jk=l(St),ls=a(St,"P",{});var iu=s(ls);Kk=i(iu,"This model inherits from "),vi=a(iu,"A",{href:!0});var zz=s(vi);Zk=i(zz,"PreTrainedModel"),zz.forEach(t),Yk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu.forEach(t),eb=l(St),cs=a(St,"P",{});var du=s(cs);tb=i(du,"This model is also a PyTorch "),ps=a(du,"A",{href:!0,rel:!0});var xz=s(ps);ob=i(xz,"torch.nn.Module"),xz.forEach(t),nb=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),ab=l(St),Se=a(St,"DIV",{class:!0});var It=s(Se);f(hs.$$.fragment,It),sb=l(It),go=a(It,"P",{});var Gi=s(go);rb=i(Gi,"The "),yi=a(Gi,"A",{href:!0});var Bz=s(yi);ib=i(Bz,"MBartForQuestionAnswering"),Bz.forEach(t),db=i(Gi," forward method, overrides the "),Rl=a(Gi,"CODE",{});var qz=s(Rl);lb=i(qz,"__call__"),qz.forEach(t),cb=i(Gi," special method."),Gi.forEach(t),pb=l(It),f(an.$$.fragment,It),hb=l(It),Wl=a(It,"P",{});var $z=s(Wl);ub=i($z,"Example:"),$z.forEach(t),mb=l(It),f(us.$$.fragment,It),It.forEach(t),St.forEach(t),Vp=l(o),ko=a(o,"H2",{class:!0});var lu=s(ko);sn=a(lu,"A",{id:!0,class:!0,href:!0});var Fz=s(sn);Ul=a(Fz,"SPAN",{});var jz=s(Ul);f(ms.$$.fragment,jz),jz.forEach(t),Fz.forEach(t),fb=l(lu),Xl=a(lu,"SPAN",{});var Ez=s(Xl);_b=i(Ez,"MBartForSequenceClassification"),Ez.forEach(t),lu.forEach(t),Qp=l(o),qe=a(o,"DIV",{class:!0});var Nt=s(qe);f(fs.$$.fragment,Nt),gb=l(Nt),Hl=a(Nt,"P",{});var Pz=s(Hl);kb=i(Pz,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Pz.forEach(t),bb=l(Nt),_s=a(Nt,"P",{});var cu=s(_s);vb=i(cu,"This model inherits from "),Ti=a(cu,"A",{href:!0});var Cz=s(Ti);yb=i(Cz,"PreTrainedModel"),Cz.forEach(t),Tb=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),Mb=l(Nt),gs=a(Nt,"P",{});var pu=s(gs);wb=i(pu,"This model is also a PyTorch "),ks=a(pu,"A",{href:!0,rel:!0});var Az=s(ks);zb=i(Az,"torch.nn.Module"),Az.forEach(t),xb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),Bb=l(Nt),Y=a(Nt,"DIV",{class:!0});var Ge=s(Y);f(bs.$$.fragment,Ge),qb=l(Ge),bo=a(Ge,"P",{});var Ri=s(bo);$b=i(Ri,"The "),Mi=a(Ri,"A",{href:!0});var Sz=s(Mi);Fb=i(Sz,"MBartForSequenceClassification"),Sz.forEach(t),jb=i(Ri," forward method, overrides the "),Vl=a(Ri,"CODE",{});var Iz=s(Vl);Eb=i(Iz,"__call__"),Iz.forEach(t),Pb=i(Ri," special method."),Ri.forEach(t),Cb=l(Ge),f(rn.$$.fragment,Ge),Ab=l(Ge),Ql=a(Ge,"P",{});var Nz=s(Ql);Sb=i(Nz,"Example of single-label classification:"),Nz.forEach(t),Ib=l(Ge),f(vs.$$.fragment,Ge),Nb=l(Ge),Jl=a(Ge,"P",{});var Oz=s(Jl);Ob=i(Oz,"Example of multi-label classification:"),Oz.forEach(t),Db=l(Ge),f(ys.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Jp=l(o),vo=a(o,"H2",{class:!0});var hu=s(vo);dn=a(hu,"A",{id:!0,class:!0,href:!0});var Dz=s(dn);Kl=a(Dz,"SPAN",{});var Lz=s(Kl);f(Ts.$$.fragment,Lz),Lz.forEach(t),Dz.forEach(t),Lb=l(hu),Zl=a(hu,"SPAN",{});var Gz=s(Zl);Gb=i(Gz,"MBartForCausalLM"),Gz.forEach(t),hu.forEach(t),Kp=l(o),yo=a(o,"DIV",{class:!0});var uu=s(yo);f(Ms.$$.fragment,uu),Rb=l(uu),Tt=a(uu,"DIV",{class:!0});var Wi=s(Tt);f(ws.$$.fragment,Wi),Wb=l(Wi),Yl=a(Wi,"P",{});var Rz=s(Yl);Ub=i(Rz,"Example:"),Rz.forEach(t),Xb=l(Wi),f(zs.$$.fragment,Wi),Wi.forEach(t),uu.forEach(t),Zp=l(o),To=a(o,"H2",{class:!0});var mu=s(To);ln=a(mu,"A",{id:!0,class:!0,href:!0});var Wz=s(ln);ec=a(Wz,"SPAN",{});var Uz=s(ec);f(xs.$$.fragment,Uz),Uz.forEach(t),Wz.forEach(t),Hb=l(mu),tc=a(mu,"SPAN",{});var Xz=s(tc);Vb=i(Xz,"TFMBartModel"),Xz.forEach(t),mu.forEach(t),Yp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(Bs.$$.fragment,Ot),Qb=l(Ot),qs=a(Ot,"P",{});var fu=s(qs);Jb=i(fu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=a(fu,"A",{href:!0});var Hz=s(wi);Kb=i(Hz,"TFPreTrainedModel"),Hz.forEach(t),Zb=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu.forEach(t),Yb=l(Ot),$s=a(Ot,"P",{});var _u=s($s);ev=i(_u,"This model is also a "),Fs=a(_u,"A",{href:!0,rel:!0});var Vz=s(Fs);tv=i(Vz,"tf.keras.Model"),Vz.forEach(t),ov=i(_u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_u.forEach(t),nv=l(Ot),f(cn.$$.fragment,Ot),av=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(js.$$.fragment,Dt),sv=l(Dt),Mo=a(Dt,"P",{});var Ui=s(Mo);rv=i(Ui,"The "),zi=a(Ui,"A",{href:!0});var Qz=s(zi);iv=i(Qz,"TFMBartModel"),Qz.forEach(t),dv=i(Ui," forward method, overrides the "),oc=a(Ui,"CODE",{});var Jz=s(oc);lv=i(Jz,"__call__"),Jz.forEach(t),cv=i(Ui," special method."),Ui.forEach(t),pv=l(Dt),f(pn.$$.fragment,Dt),hv=l(Dt),nc=a(Dt,"P",{});var Kz=s(nc);uv=i(Kz,"Example:"),Kz.forEach(t),mv=l(Dt),f(Es.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),eh=l(o),wo=a(o,"H2",{class:!0});var gu=s(wo);hn=a(gu,"A",{id:!0,class:!0,href:!0});var Zz=s(hn);ac=a(Zz,"SPAN",{});var Yz=s(ac);f(Ps.$$.fragment,Yz),Yz.forEach(t),Zz.forEach(t),fv=l(gu),sc=a(gu,"SPAN",{});var ex=s(sc);_v=i(ex,"TFMBartForConditionalGeneration"),ex.forEach(t),gu.forEach(t),th=l(o),Fe=a(o,"DIV",{class:!0});var Lt=s(Fe);f(Cs.$$.fragment,Lt),gv=l(Lt),As=a(Lt,"P",{});var ku=s(As);kv=i(ku,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=a(ku,"A",{href:!0});var tx=s(xi);bv=i(tx,"TFPreTrainedModel"),tx.forEach(t),vv=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),yv=l(Lt),Ss=a(Lt,"P",{});var bu=s(Ss);Tv=i(bu,"This model is also a "),Is=a(bu,"A",{href:!0,rel:!0});var ox=s(Is);Mv=i(ox,"tf.keras.Model"),ox.forEach(t),wv=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),zv=l(Lt),f(un.$$.fragment,Lt),xv=l(Lt),ee=a(Lt,"DIV",{class:!0});var Re=s(ee);f(Ns.$$.fragment,Re),Bv=l(Re),zo=a(Re,"P",{});var Xi=s(zo);qv=i(Xi,"The "),Bi=a(Xi,"A",{href:!0});var nx=s(Bi);$v=i(nx,"TFMBartForConditionalGeneration"),nx.forEach(t),Fv=i(Xi," forward method, overrides the "),rc=a(Xi,"CODE",{});var ax=s(rc);jv=i(ax,"__call__"),ax.forEach(t),Ev=i(Xi," special method."),Xi.forEach(t),Pv=l(Re),f(mn.$$.fragment,Re),Cv=l(Re),ic=a(Re,"P",{});var sx=s(ic);Av=i(sx,"Summarization example:"),sx.forEach(t),Sv=l(Re),f(Os.$$.fragment,Re),Iv=l(Re),dc=a(Re,"P",{});var rx=s(dc);Nv=i(rx,"Mask filling example:"),rx.forEach(t),Ov=l(Re),f(Ds.$$.fragment,Re),Re.forEach(t),Lt.forEach(t),oh=l(o),xo=a(o,"H2",{class:!0});var vu=s(xo);fn=a(vu,"A",{id:!0,class:!0,href:!0});var ix=s(fn);lc=a(ix,"SPAN",{});var dx=s(lc);f(Ls.$$.fragment,dx),dx.forEach(t),ix.forEach(t),Dv=l(vu),cc=a(vu,"SPAN",{});var lx=s(cc);Lv=i(lx,"FlaxMBartModel"),lx.forEach(t),vu.forEach(t),nh=l(o),R=a(o,"DIV",{class:!0});var me=s(R);f(Gs.$$.fragment,me),Gv=l(me),Rs=a(me,"P",{});var yu=s(Rs);Rv=i(yu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(yu,"A",{href:!0});var cx=s(qi);Wv=i(cx,"FlaxPreTrainedModel"),cx.forEach(t),Uv=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),Xv=l(me),Ws=a(me,"P",{});var Tu=s(Ws);Hv=i(Tu,`This model is also a Flax Linen
`),Us=a(Tu,"A",{href:!0,rel:!0});var px=s(Us);Vv=i(px,"flax.nn.Module"),px.forEach(t),Qv=i(Tu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tu.forEach(t),Jv=l(me),pc=a(me,"P",{});var hx=s(pc);Kv=i(hx,"Finally, this model supports inherent JAX features such as:"),hx.forEach(t),Zv=l(me),mt=a(me,"UL",{});var Fn=s(mt);hc=a(Fn,"LI",{});var ux=s(hc);Xs=a(ux,"A",{href:!0,rel:!0});var mx=s(Xs);Yv=i(mx,"Just-In-Time (JIT) compilation"),mx.forEach(t),ux.forEach(t),ey=l(Fn),uc=a(Fn,"LI",{});var fx=s(uc);Hs=a(fx,"A",{href:!0,rel:!0});var _x=s(Hs);ty=i(_x,"Automatic Differentiation"),_x.forEach(t),fx.forEach(t),oy=l(Fn),mc=a(Fn,"LI",{});var gx=s(mc);Vs=a(gx,"A",{href:!0,rel:!0});var kx=s(Vs);ny=i(kx,"Vectorization"),kx.forEach(t),gx.forEach(t),ay=l(Fn),fc=a(Fn,"LI",{});var bx=s(fc);Qs=a(bx,"A",{href:!0,rel:!0});var vx=s(Qs);sy=i(vx,"Parallelization"),vx.forEach(t),bx.forEach(t),Fn.forEach(t),ry=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Js.$$.fragment,Gt),iy=l(Gt),Bo=a(Gt,"P",{});var Hi=s(Bo);dy=i(Hi,"The "),_c=a(Hi,"CODE",{});var yx=s(_c);ly=i(yx,"FlaxMBartPreTrainedModel"),yx.forEach(t),cy=i(Hi,"forward method, overrides the "),gc=a(Hi,"CODE",{});var Tx=s(gc);py=i(Tx,"__call__"),Tx.forEach(t),hy=i(Hi," special method."),Hi.forEach(t),uy=l(Gt),f(_n.$$.fragment,Gt),my=l(Gt),kc=a(Gt,"P",{});var Mx=s(kc);fy=i(Mx,"Example:"),Mx.forEach(t),_y=l(Gt),f(Ks.$$.fragment,Gt),Gt.forEach(t),gy=l(me),Mt=a(me,"DIV",{class:!0});var Vi=s(Mt);f(Zs.$$.fragment,Vi),ky=l(Vi),bc=a(Vi,"P",{});var wx=s(bc);by=i(wx,"Example:"),wx.forEach(t),vy=l(Vi),f(Ys.$$.fragment,Vi),Vi.forEach(t),yy=l(me),wt=a(me,"DIV",{class:!0});var Qi=s(wt);f(er.$$.fragment,Qi),Ty=l(Qi),vc=a(Qi,"P",{});var zx=s(vc);My=i(zx,"Example:"),zx.forEach(t),wy=l(Qi),f(tr.$$.fragment,Qi),Qi.forEach(t),me.forEach(t),ah=l(o),qo=a(o,"H2",{class:!0});var Mu=s(qo);gn=a(Mu,"A",{id:!0,class:!0,href:!0});var xx=s(gn);yc=a(xx,"SPAN",{});var Bx=s(yc);f(or.$$.fragment,Bx),Bx.forEach(t),xx.forEach(t),zy=l(Mu),Tc=a(Mu,"SPAN",{});var qx=s(Tc);xy=i(qx,"FlaxMBartForConditionalGeneration"),qx.forEach(t),Mu.forEach(t),sh=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);f(nr.$$.fragment,fe),By=l(fe),ar=a(fe,"P",{});var wu=s(ar);qy=i(wu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(wu,"A",{href:!0});var $x=s($i);$y=i($x,"FlaxPreTrainedModel"),$x.forEach(t),Fy=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),jy=l(fe),sr=a(fe,"P",{});var zu=s(sr);Ey=i(zu,`This model is also a Flax Linen
`),rr=a(zu,"A",{href:!0,rel:!0});var Fx=s(rr);Py=i(Fx,"flax.nn.Module"),Fx.forEach(t),Cy=i(zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zu.forEach(t),Ay=l(fe),Mc=a(fe,"P",{});var jx=s(Mc);Sy=i(jx,"Finally, this model supports inherent JAX features such as:"),jx.forEach(t),Iy=l(fe),ft=a(fe,"UL",{});var jn=s(ft);wc=a(jn,"LI",{});var Ex=s(wc);ir=a(Ex,"A",{href:!0,rel:!0});var Px=s(ir);Ny=i(Px,"Just-In-Time (JIT) compilation"),Px.forEach(t),Ex.forEach(t),Oy=l(jn),zc=a(jn,"LI",{});var Cx=s(zc);dr=a(Cx,"A",{href:!0,rel:!0});var Ax=s(dr);Dy=i(Ax,"Automatic Differentiation"),Ax.forEach(t),Cx.forEach(t),Ly=l(jn),xc=a(jn,"LI",{});var Sx=s(xc);lr=a(Sx,"A",{href:!0,rel:!0});var Ix=s(lr);Gy=i(Ix,"Vectorization"),Ix.forEach(t),Sx.forEach(t),Ry=l(jn),Bc=a(jn,"LI",{});var Nx=s(Bc);cr=a(Nx,"A",{href:!0,rel:!0});var Ox=s(cr);Wy=i(Ox,"Parallelization"),Ox.forEach(t),Nx.forEach(t),jn.forEach(t),Uy=l(fe),te=a(fe,"DIV",{class:!0});var We=s(te);f(pr.$$.fragment,We),Xy=l(We),$o=a(We,"P",{});var Ji=s($o);Hy=i(Ji,"The "),qc=a(Ji,"CODE",{});var Dx=s(qc);Vy=i(Dx,"FlaxMBartPreTrainedModel"),Dx.forEach(t),Qy=i(Ji,"forward method, overrides the "),$c=a(Ji,"CODE",{});var Lx=s($c);Jy=i(Lx,"__call__"),Lx.forEach(t),Ky=i(Ji," special method."),Ji.forEach(t),Zy=l(We),f(kn.$$.fragment,We),Yy=l(We),Fc=a(We,"P",{});var Gx=s(Fc);eT=i(Gx,"Summarization example:"),Gx.forEach(t),tT=l(We),f(hr.$$.fragment,We),oT=l(We),jc=a(We,"P",{});var Rx=s(jc);nT=i(Rx,"Mask filling example:"),Rx.forEach(t),aT=l(We),f(ur.$$.fragment,We),We.forEach(t),sT=l(fe),zt=a(fe,"DIV",{class:!0});var Ki=s(zt);f(mr.$$.fragment,Ki),rT=l(Ki),Ec=a(Ki,"P",{});var Wx=s(Ec);iT=i(Wx,"Example:"),Wx.forEach(t),dT=l(Ki),f(fr.$$.fragment,Ki),Ki.forEach(t),lT=l(fe),xt=a(fe,"DIV",{class:!0});var Zi=s(xt);f(_r.$$.fragment,Zi),cT=l(Zi),Pc=a(Zi,"P",{});var Ux=s(Pc);pT=i(Ux,"Example:"),Ux.forEach(t),hT=l(Zi),f(gr.$$.fragment,Zi),Zi.forEach(t),fe.forEach(t),rh=l(o),Fo=a(o,"H2",{class:!0});var xu=s(Fo);bn=a(xu,"A",{id:!0,class:!0,href:!0});var Xx=s(bn);Cc=a(Xx,"SPAN",{});var Hx=s(Cc);f(kr.$$.fragment,Hx),Hx.forEach(t),Xx.forEach(t),uT=l(xu),Ac=a(xu,"SPAN",{});var Vx=s(Ac);mT=i(Vx,"FlaxMBartForSequenceClassification"),Vx.forEach(t),xu.forEach(t),ih=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(br.$$.fragment,oe),fT=l(oe),Sc=a(oe,"P",{});var Qx=s(Sc);_T=i(Qx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Qx.forEach(t),gT=l(oe),vr=a(oe,"P",{});var Bu=s(vr);kT=i(Bu,"This model inherits from "),Fi=a(Bu,"A",{href:!0});var Jx=s(Fi);bT=i(Jx,"FlaxPreTrainedModel"),Jx.forEach(t),vT=i(Bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu.forEach(t),yT=l(oe),yr=a(oe,"P",{});var qu=s(yr);TT=i(qu,`This model is also a Flax Linen
`),Tr=a(qu,"A",{href:!0,rel:!0});var Kx=s(Tr);MT=i(Kx,"flax.nn.Module"),Kx.forEach(t),wT=i(qu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qu.forEach(t),zT=l(oe),Ic=a(oe,"P",{});var Zx=s(Ic);xT=i(Zx,"Finally, this model supports inherent JAX features such as:"),Zx.forEach(t),BT=l(oe),_t=a(oe,"UL",{});var En=s(_t);Nc=a(En,"LI",{});var Yx=s(Nc);Mr=a(Yx,"A",{href:!0,rel:!0});var e2=s(Mr);qT=i(e2,"Just-In-Time (JIT) compilation"),e2.forEach(t),Yx.forEach(t),$T=l(En),Oc=a(En,"LI",{});var t2=s(Oc);wr=a(t2,"A",{href:!0,rel:!0});var o2=s(wr);FT=i(o2,"Automatic Differentiation"),o2.forEach(t),t2.forEach(t),jT=l(En),Dc=a(En,"LI",{});var n2=s(Dc);zr=a(n2,"A",{href:!0,rel:!0});var a2=s(zr);ET=i(a2,"Vectorization"),a2.forEach(t),n2.forEach(t),PT=l(En),Lc=a(En,"LI",{});var s2=s(Lc);xr=a(s2,"A",{href:!0,rel:!0});var r2=s(xr);CT=i(r2,"Parallelization"),r2.forEach(t),s2.forEach(t),En.forEach(t),AT=l(oe),Oe=a(oe,"DIV",{class:!0});var Rt=s(Oe);f(Br.$$.fragment,Rt),ST=l(Rt),jo=a(Rt,"P",{});var Yi=s(jo);IT=i(Yi,"The "),Gc=a(Yi,"CODE",{});var i2=s(Gc);NT=i(i2,"FlaxMBartPreTrainedModel"),i2.forEach(t),OT=i(Yi,"forward method, overrides the "),Rc=a(Yi,"CODE",{});var d2=s(Rc);DT=i(d2,"__call__"),d2.forEach(t),LT=i(Yi," special method."),Yi.forEach(t),GT=l(Rt),f(vn.$$.fragment,Rt),RT=l(Rt),Wc=a(Rt,"P",{});var l2=s(Wc);WT=i(l2,"Example:"),l2.forEach(t),UT=l(Rt),f(qr.$$.fragment,Rt),Rt.forEach(t),XT=l(oe),Bt=a(oe,"DIV",{class:!0});var ed=s(Bt);f($r.$$.fragment,ed),HT=l(ed),Uc=a(ed,"P",{});var c2=s(Uc);VT=i(c2,"Example:"),c2.forEach(t),QT=l(ed),f(Fr.$$.fragment,ed),ed.forEach(t),JT=l(oe),qt=a(oe,"DIV",{class:!0});var td=s(qt);f(jr.$$.fragment,td),KT=l(td),Xc=a(td,"P",{});var p2=s(Xc);ZT=i(p2,"Example:"),p2.forEach(t),YT=l(td),f(Er.$$.fragment,td),td.forEach(t),oe.forEach(t),dh=l(o),Eo=a(o,"H2",{class:!0});var $u=s(Eo);yn=a($u,"A",{id:!0,class:!0,href:!0});var h2=s(yn);Hc=a(h2,"SPAN",{});var u2=s(Hc);f(Pr.$$.fragment,u2),u2.forEach(t),h2.forEach(t),eM=l($u),Vc=a($u,"SPAN",{});var m2=s(Vc);tM=i(m2,"FlaxMBartForQuestionAnswering"),m2.forEach(t),$u.forEach(t),lh=l(o),N=a(o,"DIV",{class:!0});var ne=s(N);f(Cr.$$.fragment,ne),oM=l(ne),Po=a(ne,"P",{});var od=s(Po);nM=i(od,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=a(od,"CODE",{});var f2=s(Qc);aM=i(f2,"span start logits"),f2.forEach(t),sM=i(od," and "),Jc=a(od,"CODE",{});var _2=s(Jc);rM=i(_2,"span end logits"),_2.forEach(t),iM=i(od,")."),od.forEach(t),dM=l(ne),Ar=a(ne,"P",{});var Fu=s(Ar);lM=i(Fu,"This model inherits from "),ji=a(Fu,"A",{href:!0});var g2=s(ji);cM=i(g2,"FlaxPreTrainedModel"),g2.forEach(t),pM=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),hM=l(ne),Sr=a(ne,"P",{});var ju=s(Sr);uM=i(ju,`This model is also a Flax Linen
`),Ir=a(ju,"A",{href:!0,rel:!0});var k2=s(Ir);mM=i(k2,"flax.nn.Module"),k2.forEach(t),fM=i(ju,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ju.forEach(t),_M=l(ne),Kc=a(ne,"P",{});var b2=s(Kc);gM=i(b2,"Finally, this model supports inherent JAX features such as:"),b2.forEach(t),kM=l(ne),gt=a(ne,"UL",{});var Pn=s(gt);Zc=a(Pn,"LI",{});var v2=s(Zc);Nr=a(v2,"A",{href:!0,rel:!0});var y2=s(Nr);bM=i(y2,"Just-In-Time (JIT) compilation"),y2.forEach(t),v2.forEach(t),vM=l(Pn),Yc=a(Pn,"LI",{});var T2=s(Yc);Or=a(T2,"A",{href:!0,rel:!0});var M2=s(Or);yM=i(M2,"Automatic Differentiation"),M2.forEach(t),T2.forEach(t),TM=l(Pn),ep=a(Pn,"LI",{});var w2=s(ep);Dr=a(w2,"A",{href:!0,rel:!0});var z2=s(Dr);MM=i(z2,"Vectorization"),z2.forEach(t),w2.forEach(t),wM=l(Pn),tp=a(Pn,"LI",{});var x2=s(tp);Lr=a(x2,"A",{href:!0,rel:!0});var B2=s(Lr);zM=i(B2,"Parallelization"),B2.forEach(t),x2.forEach(t),Pn.forEach(t),xM=l(ne),De=a(ne,"DIV",{class:!0});var Wt=s(De);f(Gr.$$.fragment,Wt),BM=l(Wt),Co=a(Wt,"P",{});var nd=s(Co);qM=i(nd,"The "),op=a(nd,"CODE",{});var q2=s(op);$M=i(q2,"FlaxMBartPreTrainedModel"),q2.forEach(t),FM=i(nd,"forward method, overrides the "),np=a(nd,"CODE",{});var $2=s(np);jM=i($2,"__call__"),$2.forEach(t),EM=i(nd," special method."),nd.forEach(t),PM=l(Wt),f(Tn.$$.fragment,Wt),CM=l(Wt),ap=a(Wt,"P",{});var F2=s(ap);AM=i(F2,"Example:"),F2.forEach(t),SM=l(Wt),f(Rr.$$.fragment,Wt),Wt.forEach(t),IM=l(ne),$t=a(ne,"DIV",{class:!0});var ad=s($t);f(Wr.$$.fragment,ad),NM=l(ad),sp=a(ad,"P",{});var j2=s(sp);OM=i(j2,"Example:"),j2.forEach(t),DM=l(ad),f(Ur.$$.fragment,ad),ad.forEach(t),LM=l(ne),Ft=a(ne,"DIV",{class:!0});var sd=s(Ft);f(Xr.$$.fragment,sd),GM=l(sd),rp=a(sd,"P",{});var E2=s(rp);RM=i(E2,"Example:"),E2.forEach(t),WM=l(sd),f(Hr.$$.fragment,sd),sd.forEach(t),ne.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(J2)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(J,"href","https://arxiv.org/abs/2001.08210"),c(J,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Cn,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Zr,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Ao,"id","overview-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(On,"href","https://arxiv.org/abs/2008.00401"),c(On,"rel","nofollow"),c(So,"id","training-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(ni,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(No,"id","transformers.MBartConfig"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(ri,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartModel"),c(Xn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xn,"rel","nofollow"),c(ii,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(di,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(xe,"class","docstring"),c(Oo,"id","transformers.MBartTokenizer"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(li,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ci,"href","/docs/transformers/master/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jn,"href","https://github.com/google/sentencepiece"),c(Jn,"rel","nofollow"),c(Do,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Lo,"id","transformers.MBartTokenizerFast"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(pi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(hi,"href","/docs/transformers/master/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(ui,"href","/docs/transformers/master/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Go,"class","docstring"),c(Ro,"class","docstring"),c(Wo,"class","docstring"),c(C,"class","docstring"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(ya,"href","https://github.com/google/sentencepiece"),c(ya,"rel","nofollow"),c(mi,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(Qo,"class","docstring"),c(A,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Sa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Sa,"rel","nofollow"),c(fi,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Ko,"class","docstring"),c(Zo,"class","docstring"),c(G,"class","docstring"),c(Yo,"id","transformers.MBartModel"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(_i,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(gi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartModel"),c(Ae,"class","docstring"),c(Qe,"class","docstring"),c(tn,"id","transformers.MBartForConditionalGeneration"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.MBartForConditionalGeneration"),c(uo,"class","relative group"),c(ki,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(bi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Z,"class","docstring"),c(Je,"class","docstring"),c(nn,"id","transformers.MBartForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(vi,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(yi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Se,"class","docstring"),c(Be,"class","docstring"),c(sn,"id","transformers.MBartForSequenceClassification"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(Ti,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Mi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Y,"class","docstring"),c(qe,"class","docstring"),c(dn,"id","transformers.MBartForCausalLM"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.MBartForCausalLM"),c(vo,"class","relative group"),c(Tt,"class","docstring"),c(yo,"class","docstring"),c(ln,"id","transformers.TFMBartModel"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(wi,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(zi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(hn,"id","transformers.TFMBartForConditionalGeneration"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(xi,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Is,"rel","nofollow"),c(Bi,"href","/docs/transformers/master/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Fe,"class","docstring"),c(fn,"id","transformers.FlaxMBartModel"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.FlaxMBartModel"),c(xo,"class","relative group"),c(qi,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Us,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(R,"class","docstring"),c(gn,"id","transformers.FlaxMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.FlaxMBartForConditionalGeneration"),c(qo,"class","relative group"),c($i,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(cr,"rel","nofollow"),c(te,"class","docstring"),c(zt,"class","docstring"),c(xt,"class","docstring"),c(W,"class","docstring"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c(Fo,"class","relative group"),c(Fi,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(xr,"rel","nofollow"),c(Oe,"class","docstring"),c(Bt,"class","docstring"),c(qt,"class","docstring"),c(I,"class","docstring"),c(yn,"id","transformers.FlaxMBartForQuestionAnswering"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Eo,"class","relative group"),c(ji,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ir,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Lr,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,u),h(o,x,p),h(o,v,p),e(v,M),e(M,z),_(T,z,null),e(v,y),e(v,q),e(q,st),h(o,je,p),h(o,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),h(o,Ke,p),h(o,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,S),e(S,dt),h(o,ce,p),h(o,pe,p),e(pe,lt),e(pe,J),e(J,ct),e(pe,pt),h(o,D,p),h(o,Ee,p),e(Ee,be),h(o,Ze,p),h(o,se,p),e(se,ve),e(se,ye),e(ye,ht),e(se,re),e(se,Te),e(Te,Me),h(o,Ye,p),h(o,w,p),e(w,$),e($,we),_(He,we,null),e(w,Ut),e(w,K),e(K,Xt),h(o,kt,p),h(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Eu),e(X,rd),e(rd,Pu),e(X,Cu),h(o,_p,p),h(o,bt,p),e(bt,Au),e(bt,Cn),e(Cn,id),e(id,Su),e(Cn,Iu),e(bt,Nu),e(bt,Zr),e(Zr,Ou),e(bt,Du),h(o,gp,p),h(o,Yr,p),e(Yr,dd),e(dd,Lu),h(o,kp,p),_(An,o,p),h(o,bp,p),h(o,ei,p),e(ei,Sn),e(Sn,ld),e(ld,Gu),e(Sn,Ru),e(Sn,Zt),e(Zt,Wu),e(Zt,cd),e(cd,Uu),e(Zt,Xu),e(Zt,pd),e(pd,Hu),e(Zt,Vu),h(o,vp,p),_(In,o,p),h(o,yp,p),h(o,Yt,p),e(Yt,Ao),e(Ao,hd),_(Nn,hd,null),e(Yt,Qu),e(Yt,ud),e(ud,Ju),h(o,Tp,p),h(o,vt,p),e(vt,Ku),e(vt,On),e(On,Zu),e(vt,Yu),e(vt,md),e(md,em),e(vt,tm),h(o,Mp,p),h(o,ti,p),e(ti,om),h(o,wp,p),h(o,oi,p),e(oi,fd),e(fd,nm),h(o,zp,p),h(o,eo,p),e(eo,So),e(So,_d),_(Dn,_d,null),e(eo,am),e(eo,gd),e(gd,sm),h(o,xp,p),h(o,et,p),e(et,rm),e(et,kd),e(kd,im),e(et,dm),e(et,bd),e(bd,lm),e(et,cm),e(et,vd),e(vd,pm),e(et,hm),h(o,Bp,p),h(o,Io,p),e(Io,um),e(Io,ni),e(ni,mm),e(Io,fm),h(o,qp,p),h(o,ai,p),e(ai,yd),e(yd,_m),h(o,$p,p),_(Ln,o,p),h(o,Fp,p),h(o,si,p),e(si,Gn),e(Gn,Td),e(Td,gm),e(Gn,km),e(Gn,ze),e(ze,bm),e(ze,Md),e(Md,vm),e(ze,ym),e(ze,wd),e(wd,Tm),e(ze,Mm),e(ze,zd),e(zd,wm),e(ze,zm),e(ze,xd),e(xd,xm),e(ze,Bm),e(ze,Bd),e(Bd,qm),e(ze,$m),h(o,jp,p),_(Rn,o,p),h(o,Ep,p),h(o,to,p),e(to,No),e(No,qd),_(Wn,qd,null),e(to,Fm),e(to,$d),e($d,jm),h(o,Pp,p),h(o,xe,p),_(Un,xe,null),e(xe,Em),e(xe,oo),e(oo,Pm),e(oo,ri),e(ri,Cm),e(oo,Am),e(oo,Xn),e(Xn,Sm),e(oo,Im),e(xe,Nm),e(xe,no),e(no,Om),e(no,ii),e(ii,Dm),e(no,Lm),e(no,di),e(di,Gm),e(no,Rm),e(xe,Wm),e(xe,Fd),e(Fd,Um),e(xe,Xm),_(Hn,xe,null),h(o,Cp,p),h(o,ao,p),e(ao,Oo),e(Oo,jd),_(Vn,jd,null),e(ao,Hm),e(ao,Ed),e(Ed,Vm),h(o,Ap,p),h(o,L,p),_(Qn,L,null),e(L,Qm),e(L,Pd),e(Pd,Jm),e(L,Km),e(L,ut),e(ut,Zm),e(ut,li),e(li,Ym),e(ut,ef),e(ut,ci),e(ci,tf),e(ut,of),e(ut,Jn),e(Jn,nf),e(ut,af),e(L,sf),e(L,Kn),e(Kn,rf),e(Kn,Cd),e(Cd,df),e(Kn,lf),e(L,cf),e(L,Ad),e(Ad,pf),e(L,hf),_(Zn,L,null),e(L,uf),e(L,Do),_(Yn,Do,null),e(Do,mf),e(Do,Sd),e(Sd,ff),e(L,_f),e(L,tt),_(ea,tt,null),e(tt,gf),e(tt,ta),e(ta,kf),e(ta,Id),e(Id,bf),e(ta,vf),e(tt,yf),e(tt,oa),e(oa,na),e(na,Nd),e(Nd,Tf),e(na,Mf),e(na,Od),e(Od,wf),e(oa,zf),e(oa,aa),e(aa,Dd),e(Dd,xf),e(aa,Bf),e(aa,Ld),e(Ld,qf),e(tt,$f),e(tt,Gd),e(Gd,Ff),h(o,Sp,p),h(o,so,p),e(so,Lo),e(Lo,Rd),_(sa,Rd,null),e(so,jf),e(so,Wd),e(Wd,Ef),h(o,Ip,p),h(o,C,p),_(ra,C,null),e(C,Pf),e(C,ro),e(ro,Cf),e(ro,Ud),e(Ud,Af),e(ro,Sf),e(ro,ia),e(ia,If),e(ro,Nf),e(C,Of),e(C,yt),e(yt,pi),e(pi,Df),e(yt,Lf),e(yt,hi),e(hi,Gf),e(yt,Rf),e(yt,ui),e(ui,Wf),e(yt,Uf),e(C,Xf),e(C,da),e(da,Hf),e(da,Xd),e(Xd,Vf),e(da,Qf),e(C,Jf),e(C,Hd),e(Hd,Kf),e(C,Zf),_(la,C,null),e(C,Yf),e(C,Pe),_(ca,Pe,null),e(Pe,e_),e(Pe,Vd),e(Vd,t_),e(Pe,o_),e(Pe,pa),e(pa,n_),e(pa,Qd),e(Qd,a_),e(pa,s_),e(Pe,r_),e(Pe,ha),e(ha,ua),e(ua,Jd),e(Jd,i_),e(ua,d_),e(ua,Kd),e(Kd,l_),e(ha,c_),e(ha,ma),e(ma,Zd),e(Zd,p_),e(ma,h_),e(ma,Yd),e(Yd,u_),e(Pe,m_),e(Pe,el),e(el,f_),e(C,__),e(C,Go),_(fa,Go,null),e(Go,g_),e(Go,tl),e(tl,k_),e(C,b_),e(C,Ro),_(_a,Ro,null),e(Ro,v_),e(Ro,ol),e(ol,y_),e(C,T_),e(C,Wo),_(ga,Wo,null),e(Wo,M_),e(Wo,nl),e(nl,w_),h(o,Np,p),h(o,io,p),e(io,Uo),e(Uo,al),_(ka,al,null),e(io,z_),e(io,sl),e(sl,x_),h(o,Op,p),h(o,A,p),_(ba,A,null),e(A,B_),e(A,va),e(va,q_),e(va,ya),e(ya,$_),e(va,F_),e(A,j_),e(A,Ta),e(Ta,E_),e(Ta,mi),e(mi,P_),e(Ta,C_),e(A,A_),e(A,rl),e(rl,S_),e(A,I_),_(Ma,A,null),e(A,N_),e(A,ot),_(wa,ot,null),e(ot,O_),e(ot,za),e(za,D_),e(za,il),e(il,L_),e(za,G_),e(ot,R_),e(ot,xa),e(xa,Ba),e(Ba,dl),e(dl,W_),e(Ba,U_),e(Ba,ll),e(ll,X_),e(xa,H_),e(xa,qa),e(qa,cl),e(cl,V_),e(qa,Q_),e(qa,pl),e(pl,J_),e(ot,K_),e(ot,hl),e(hl,Z_),e(A,Y_),e(A,Xo),_($a,Xo,null),e(Xo,eg),e(Xo,ul),e(ul,tg),e(A,og),e(A,Ho),_(Fa,Ho,null),e(Ho,ng),e(Ho,ja),e(ja,ag),e(ja,ml),e(ml,sg),e(ja,rg),e(A,ig),e(A,Vo),_(Ea,Vo,null),e(Vo,dg),e(Vo,fl),e(fl,lg),e(A,cg),e(A,Qo),_(Pa,Qo,null),e(Qo,pg),e(Qo,_l),e(_l,hg),h(o,Dp,p),h(o,lo,p),e(lo,Jo),e(Jo,gl),_(Ca,gl,null),e(lo,ug),e(lo,kl),e(kl,mg),h(o,Lp,p),h(o,G,p),_(Aa,G,null),e(G,fg),e(G,co),e(co,_g),e(co,bl),e(bl,gg),e(co,kg),e(co,Sa),e(Sa,bg),e(co,vg),e(G,yg),e(G,Ia),e(Ia,Tg),e(Ia,fi),e(fi,Mg),e(Ia,wg),e(G,zg),e(G,vl),e(vl,xg),e(G,Bg),_(Na,G,null),e(G,qg),e(G,Ce),_(Oa,Ce,null),e(Ce,$g),e(Ce,yl),e(yl,Fg),e(Ce,jg),e(Ce,Da),e(Da,Eg),e(Da,Tl),e(Tl,Pg),e(Da,Cg),e(Ce,Ag),e(Ce,La),e(La,Ga),e(Ga,Ml),e(Ml,Sg),e(Ga,Ig),e(Ga,wl),e(wl,Ng),e(La,Og),e(La,Ra),e(Ra,zl),e(zl,Dg),e(Ra,Lg),e(Ra,xl),e(xl,Gg),e(Ce,Rg),e(Ce,Bl),e(Bl,Wg),e(G,Ug),e(G,Ko),_(Wa,Ko,null),e(Ko,Xg),e(Ko,ql),e(ql,Hg),e(G,Vg),e(G,Zo),_(Ua,Zo,null),e(Zo,Qg),e(Zo,$l),e($l,Jg),h(o,Gp,p),h(o,po,p),e(po,Yo),e(Yo,Fl),_(Xa,Fl,null),e(po,Kg),e(po,jl),e(jl,Zg),h(o,Rp,p),h(o,Qe,p),_(Ha,Qe,null),e(Qe,Yg),e(Qe,Va),e(Va,ek),e(Va,_i),e(_i,tk),e(Va,ok),e(Qe,nk),e(Qe,Qa),e(Qa,ak),e(Qa,Ja),e(Ja,sk),e(Qa,rk),e(Qe,ik),e(Qe,Ae),_(Ka,Ae,null),e(Ae,dk),e(Ae,ho),e(ho,lk),e(ho,gi),e(gi,ck),e(ho,pk),e(ho,El),e(El,hk),e(ho,uk),e(Ae,mk),_(en,Ae,null),e(Ae,fk),e(Ae,Pl),e(Pl,_k),e(Ae,gk),_(Za,Ae,null),h(o,Wp,p),h(o,uo,p),e(uo,tn),e(tn,Cl),_(Ya,Cl,null),e(uo,kk),e(uo,Al),e(Al,bk),h(o,Up,p),h(o,Je,p),_(es,Je,null),e(Je,vk),e(Je,ts),e(ts,yk),e(ts,ki),e(ki,Tk),e(ts,Mk),e(Je,wk),e(Je,os),e(os,zk),e(os,ns),e(ns,xk),e(os,Bk),e(Je,qk),e(Je,Z),_(as,Z,null),e(Z,$k),e(Z,mo),e(mo,Fk),e(mo,bi),e(bi,jk),e(mo,Ek),e(mo,Sl),e(Sl,Pk),e(mo,Ck),e(Z,Ak),_(on,Z,null),e(Z,Sk),e(Z,Il),e(Il,Ik),e(Z,Nk),_(ss,Z,null),e(Z,Ok),e(Z,Nl),e(Nl,Dk),e(Z,Lk),_(rs,Z,null),h(o,Xp,p),h(o,fo,p),e(fo,nn),e(nn,Ol),_(is,Ol,null),e(fo,Gk),e(fo,Dl),e(Dl,Rk),h(o,Hp,p),h(o,Be,p),_(ds,Be,null),e(Be,Wk),e(Be,_o),e(_o,Uk),e(_o,Ll),e(Ll,Xk),e(_o,Hk),e(_o,Gl),e(Gl,Vk),e(_o,Qk),e(Be,Jk),e(Be,ls),e(ls,Kk),e(ls,vi),e(vi,Zk),e(ls,Yk),e(Be,eb),e(Be,cs),e(cs,tb),e(cs,ps),e(ps,ob),e(cs,nb),e(Be,ab),e(Be,Se),_(hs,Se,null),e(Se,sb),e(Se,go),e(go,rb),e(go,yi),e(yi,ib),e(go,db),e(go,Rl),e(Rl,lb),e(go,cb),e(Se,pb),_(an,Se,null),e(Se,hb),e(Se,Wl),e(Wl,ub),e(Se,mb),_(us,Se,null),h(o,Vp,p),h(o,ko,p),e(ko,sn),e(sn,Ul),_(ms,Ul,null),e(ko,fb),e(ko,Xl),e(Xl,_b),h(o,Qp,p),h(o,qe,p),_(fs,qe,null),e(qe,gb),e(qe,Hl),e(Hl,kb),e(qe,bb),e(qe,_s),e(_s,vb),e(_s,Ti),e(Ti,yb),e(_s,Tb),e(qe,Mb),e(qe,gs),e(gs,wb),e(gs,ks),e(ks,zb),e(gs,xb),e(qe,Bb),e(qe,Y),_(bs,Y,null),e(Y,qb),e(Y,bo),e(bo,$b),e(bo,Mi),e(Mi,Fb),e(bo,jb),e(bo,Vl),e(Vl,Eb),e(bo,Pb),e(Y,Cb),_(rn,Y,null),e(Y,Ab),e(Y,Ql),e(Ql,Sb),e(Y,Ib),_(vs,Y,null),e(Y,Nb),e(Y,Jl),e(Jl,Ob),e(Y,Db),_(ys,Y,null),h(o,Jp,p),h(o,vo,p),e(vo,dn),e(dn,Kl),_(Ts,Kl,null),e(vo,Lb),e(vo,Zl),e(Zl,Gb),h(o,Kp,p),h(o,yo,p),_(Ms,yo,null),e(yo,Rb),e(yo,Tt),_(ws,Tt,null),e(Tt,Wb),e(Tt,Yl),e(Yl,Ub),e(Tt,Xb),_(zs,Tt,null),h(o,Zp,p),h(o,To,p),e(To,ln),e(ln,ec),_(xs,ec,null),e(To,Hb),e(To,tc),e(tc,Vb),h(o,Yp,p),h(o,$e,p),_(Bs,$e,null),e($e,Qb),e($e,qs),e(qs,Jb),e(qs,wi),e(wi,Kb),e(qs,Zb),e($e,Yb),e($e,$s),e($s,ev),e($s,Fs),e(Fs,tv),e($s,ov),e($e,nv),_(cn,$e,null),e($e,av),e($e,Ie),_(js,Ie,null),e(Ie,sv),e(Ie,Mo),e(Mo,rv),e(Mo,zi),e(zi,iv),e(Mo,dv),e(Mo,oc),e(oc,lv),e(Mo,cv),e(Ie,pv),_(pn,Ie,null),e(Ie,hv),e(Ie,nc),e(nc,uv),e(Ie,mv),_(Es,Ie,null),h(o,eh,p),h(o,wo,p),e(wo,hn),e(hn,ac),_(Ps,ac,null),e(wo,fv),e(wo,sc),e(sc,_v),h(o,th,p),h(o,Fe,p),_(Cs,Fe,null),e(Fe,gv),e(Fe,As),e(As,kv),e(As,xi),e(xi,bv),e(As,vv),e(Fe,yv),e(Fe,Ss),e(Ss,Tv),e(Ss,Is),e(Is,Mv),e(Ss,wv),e(Fe,zv),_(un,Fe,null),e(Fe,xv),e(Fe,ee),_(Ns,ee,null),e(ee,Bv),e(ee,zo),e(zo,qv),e(zo,Bi),e(Bi,$v),e(zo,Fv),e(zo,rc),e(rc,jv),e(zo,Ev),e(ee,Pv),_(mn,ee,null),e(ee,Cv),e(ee,ic),e(ic,Av),e(ee,Sv),_(Os,ee,null),e(ee,Iv),e(ee,dc),e(dc,Nv),e(ee,Ov),_(Ds,ee,null),h(o,oh,p),h(o,xo,p),e(xo,fn),e(fn,lc),_(Ls,lc,null),e(xo,Dv),e(xo,cc),e(cc,Lv),h(o,nh,p),h(o,R,p),_(Gs,R,null),e(R,Gv),e(R,Rs),e(Rs,Rv),e(Rs,qi),e(qi,Wv),e(Rs,Uv),e(R,Xv),e(R,Ws),e(Ws,Hv),e(Ws,Us),e(Us,Vv),e(Ws,Qv),e(R,Jv),e(R,pc),e(pc,Kv),e(R,Zv),e(R,mt),e(mt,hc),e(hc,Xs),e(Xs,Yv),e(mt,ey),e(mt,uc),e(uc,Hs),e(Hs,ty),e(mt,oy),e(mt,mc),e(mc,Vs),e(Vs,ny),e(mt,ay),e(mt,fc),e(fc,Qs),e(Qs,sy),e(R,ry),e(R,Ne),_(Js,Ne,null),e(Ne,iy),e(Ne,Bo),e(Bo,dy),e(Bo,_c),e(_c,ly),e(Bo,cy),e(Bo,gc),e(gc,py),e(Bo,hy),e(Ne,uy),_(_n,Ne,null),e(Ne,my),e(Ne,kc),e(kc,fy),e(Ne,_y),_(Ks,Ne,null),e(R,gy),e(R,Mt),_(Zs,Mt,null),e(Mt,ky),e(Mt,bc),e(bc,by),e(Mt,vy),_(Ys,Mt,null),e(R,yy),e(R,wt),_(er,wt,null),e(wt,Ty),e(wt,vc),e(vc,My),e(wt,wy),_(tr,wt,null),h(o,ah,p),h(o,qo,p),e(qo,gn),e(gn,yc),_(or,yc,null),e(qo,zy),e(qo,Tc),e(Tc,xy),h(o,sh,p),h(o,W,p),_(nr,W,null),e(W,By),e(W,ar),e(ar,qy),e(ar,$i),e($i,$y),e(ar,Fy),e(W,jy),e(W,sr),e(sr,Ey),e(sr,rr),e(rr,Py),e(sr,Cy),e(W,Ay),e(W,Mc),e(Mc,Sy),e(W,Iy),e(W,ft),e(ft,wc),e(wc,ir),e(ir,Ny),e(ft,Oy),e(ft,zc),e(zc,dr),e(dr,Dy),e(ft,Ly),e(ft,xc),e(xc,lr),e(lr,Gy),e(ft,Ry),e(ft,Bc),e(Bc,cr),e(cr,Wy),e(W,Uy),e(W,te),_(pr,te,null),e(te,Xy),e(te,$o),e($o,Hy),e($o,qc),e(qc,Vy),e($o,Qy),e($o,$c),e($c,Jy),e($o,Ky),e(te,Zy),_(kn,te,null),e(te,Yy),e(te,Fc),e(Fc,eT),e(te,tT),_(hr,te,null),e(te,oT),e(te,jc),e(jc,nT),e(te,aT),_(ur,te,null),e(W,sT),e(W,zt),_(mr,zt,null),e(zt,rT),e(zt,Ec),e(Ec,iT),e(zt,dT),_(fr,zt,null),e(W,lT),e(W,xt),_(_r,xt,null),e(xt,cT),e(xt,Pc),e(Pc,pT),e(xt,hT),_(gr,xt,null),h(o,rh,p),h(o,Fo,p),e(Fo,bn),e(bn,Cc),_(kr,Cc,null),e(Fo,uT),e(Fo,Ac),e(Ac,mT),h(o,ih,p),h(o,I,p),_(br,I,null),e(I,fT),e(I,Sc),e(Sc,_T),e(I,gT),e(I,vr),e(vr,kT),e(vr,Fi),e(Fi,bT),e(vr,vT),e(I,yT),e(I,yr),e(yr,TT),e(yr,Tr),e(Tr,MT),e(yr,wT),e(I,zT),e(I,Ic),e(Ic,xT),e(I,BT),e(I,_t),e(_t,Nc),e(Nc,Mr),e(Mr,qT),e(_t,$T),e(_t,Oc),e(Oc,wr),e(wr,FT),e(_t,jT),e(_t,Dc),e(Dc,zr),e(zr,ET),e(_t,PT),e(_t,Lc),e(Lc,xr),e(xr,CT),e(I,AT),e(I,Oe),_(Br,Oe,null),e(Oe,ST),e(Oe,jo),e(jo,IT),e(jo,Gc),e(Gc,NT),e(jo,OT),e(jo,Rc),e(Rc,DT),e(jo,LT),e(Oe,GT),_(vn,Oe,null),e(Oe,RT),e(Oe,Wc),e(Wc,WT),e(Oe,UT),_(qr,Oe,null),e(I,XT),e(I,Bt),_($r,Bt,null),e(Bt,HT),e(Bt,Uc),e(Uc,VT),e(Bt,QT),_(Fr,Bt,null),e(I,JT),e(I,qt),_(jr,qt,null),e(qt,KT),e(qt,Xc),e(Xc,ZT),e(qt,YT),_(Er,qt,null),h(o,dh,p),h(o,Eo,p),e(Eo,yn),e(yn,Hc),_(Pr,Hc,null),e(Eo,eM),e(Eo,Vc),e(Vc,tM),h(o,lh,p),h(o,N,p),_(Cr,N,null),e(N,oM),e(N,Po),e(Po,nM),e(Po,Qc),e(Qc,aM),e(Po,sM),e(Po,Jc),e(Jc,rM),e(Po,iM),e(N,dM),e(N,Ar),e(Ar,lM),e(Ar,ji),e(ji,cM),e(Ar,pM),e(N,hM),e(N,Sr),e(Sr,uM),e(Sr,Ir),e(Ir,mM),e(Sr,fM),e(N,_M),e(N,Kc),e(Kc,gM),e(N,kM),e(N,gt),e(gt,Zc),e(Zc,Nr),e(Nr,bM),e(gt,vM),e(gt,Yc),e(Yc,Or),e(Or,yM),e(gt,TM),e(gt,ep),e(ep,Dr),e(Dr,MM),e(gt,wM),e(gt,tp),e(tp,Lr),e(Lr,zM),e(N,xM),e(N,De),_(Gr,De,null),e(De,BM),e(De,Co),e(Co,qM),e(Co,op),e(op,$M),e(Co,FM),e(Co,np),e(np,jM),e(Co,EM),e(De,PM),_(Tn,De,null),e(De,CM),e(De,ap),e(ap,AM),e(De,SM),_(Rr,De,null),e(N,IM),e(N,$t),_(Wr,$t,null),e($t,NM),e($t,sp),e(sp,OM),e($t,DM),_(Ur,$t,null),e(N,LM),e(N,Ft),_(Xr,Ft,null),e(Ft,GM),e(Ft,rp),e(rp,RM),e(Ft,WM),_(Hr,Ft,null),ch=!0},p(o,[p]){const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:o}),en.$set(Vr);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),on.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),an.$set(dp);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),rn.$set(lp);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),cn.$set(Mn);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),pn.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),un.$set(pp);const Qr={};p&2&&(Qr.$$scope={dirty:p,ctx:o}),mn.$set(Qr);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),_n.$set(hp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),kn.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),vn.$set(mp);const Jr={};p&2&&(Jr.$$scope={dirty:p,ctx:o}),Tn.$set(Jr)},i(o){ch||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(An.$$.fragment,o),g(In.$$.fragment,o),g(Nn.$$.fragment,o),g(Dn.$$.fragment,o),g(Ln.$$.fragment,o),g(Rn.$$.fragment,o),g(Wn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(sa.$$.fragment,o),g(ra.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(Ma.$$.fragment,o),g(wa.$$.fragment,o),g($a.$$.fragment,o),g(Fa.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Aa.$$.fragment,o),g(Na.$$.fragment,o),g(Oa.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ha.$$.fragment,o),g(Ka.$$.fragment,o),g(en.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(on.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(hs.$$.fragment,o),g(an.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(bs.$$.fragment,o),g(rn.$$.fragment,o),g(vs.$$.fragment,o),g(ys.$$.fragment,o),g(Ts.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(zs.$$.fragment,o),g(xs.$$.fragment,o),g(Bs.$$.fragment,o),g(cn.$$.fragment,o),g(js.$$.fragment,o),g(pn.$$.fragment,o),g(Es.$$.fragment,o),g(Ps.$$.fragment,o),g(Cs.$$.fragment,o),g(un.$$.fragment,o),g(Ns.$$.fragment,o),g(mn.$$.fragment,o),g(Os.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Js.$$.fragment,o),g(_n.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(pr.$$.fragment,o),g(kn.$$.fragment,o),g(hr.$$.fragment,o),g(ur.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(br.$$.fragment,o),g(Br.$$.fragment,o),g(vn.$$.fragment,o),g(qr.$$.fragment,o),g($r.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Cr.$$.fragment,o),g(Gr.$$.fragment,o),g(Tn.$$.fragment,o),g(Rr.$$.fragment,o),g(Wr.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),g(Hr.$$.fragment,o),ch=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(He.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(Nn.$$.fragment,o),k(Dn.$$.fragment,o),k(Ln.$$.fragment,o),k(Rn.$$.fragment,o),k(Wn.$$.fragment,o),k(Un.$$.fragment,o),k(Hn.$$.fragment,o),k(Vn.$$.fragment,o),k(Qn.$$.fragment,o),k(Zn.$$.fragment,o),k(Yn.$$.fragment,o),k(ea.$$.fragment,o),k(sa.$$.fragment,o),k(ra.$$.fragment,o),k(la.$$.fragment,o),k(ca.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(ba.$$.fragment,o),k(Ma.$$.fragment,o),k(wa.$$.fragment,o),k($a.$$.fragment,o),k(Fa.$$.fragment,o),k(Ea.$$.fragment,o),k(Pa.$$.fragment,o),k(Ca.$$.fragment,o),k(Aa.$$.fragment,o),k(Na.$$.fragment,o),k(Oa.$$.fragment,o),k(Wa.$$.fragment,o),k(Ua.$$.fragment,o),k(Xa.$$.fragment,o),k(Ha.$$.fragment,o),k(Ka.$$.fragment,o),k(en.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(es.$$.fragment,o),k(as.$$.fragment,o),k(on.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(hs.$$.fragment,o),k(an.$$.fragment,o),k(us.$$.fragment,o),k(ms.$$.fragment,o),k(fs.$$.fragment,o),k(bs.$$.fragment,o),k(rn.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(Ts.$$.fragment,o),k(Ms.$$.fragment,o),k(ws.$$.fragment,o),k(zs.$$.fragment,o),k(xs.$$.fragment,o),k(Bs.$$.fragment,o),k(cn.$$.fragment,o),k(js.$$.fragment,o),k(pn.$$.fragment,o),k(Es.$$.fragment,o),k(Ps.$$.fragment,o),k(Cs.$$.fragment,o),k(un.$$.fragment,o),k(Ns.$$.fragment,o),k(mn.$$.fragment,o),k(Os.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Js.$$.fragment,o),k(_n.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(nr.$$.fragment,o),k(pr.$$.fragment,o),k(kn.$$.fragment,o),k(hr.$$.fragment,o),k(ur.$$.fragment,o),k(mr.$$.fragment,o),k(fr.$$.fragment,o),k(_r.$$.fragment,o),k(gr.$$.fragment,o),k(kr.$$.fragment,o),k(br.$$.fragment,o),k(Br.$$.fragment,o),k(vn.$$.fragment,o),k(qr.$$.fragment,o),k($r.$$.fragment,o),k(Fr.$$.fragment,o),k(jr.$$.fragment,o),k(Er.$$.fragment,o),k(Pr.$$.fragment,o),k(Cr.$$.fragment,o),k(Gr.$$.fragment,o),k(Tn.$$.fragment,o),k(Rr.$$.fragment,o),k(Wr.$$.fragment,o),k(Ur.$$.fragment,o),k(Xr.$$.fragment,o),k(Hr.$$.fragment,o),ch=!1},d(o){t(u),o&&t(x),o&&t(v),b(T),o&&t(je),o&&t(j),o&&t(Ke),o&&t(Q),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ee),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(w),b(He),o&&t(kt),o&&t(X),o&&t(_p),o&&t(bt),o&&t(gp),o&&t(Yr),o&&t(kp),b(An,o),o&&t(bp),o&&t(ei),o&&t(vp),b(In,o),o&&t(yp),o&&t(Yt),b(Nn),o&&t(Tp),o&&t(vt),o&&t(Mp),o&&t(ti),o&&t(wp),o&&t(oi),o&&t(zp),o&&t(eo),b(Dn),o&&t(xp),o&&t(et),o&&t(Bp),o&&t(Io),o&&t(qp),o&&t(ai),o&&t($p),b(Ln,o),o&&t(Fp),o&&t(si),o&&t(jp),b(Rn,o),o&&t(Ep),o&&t(to),b(Wn),o&&t(Pp),o&&t(xe),b(Un),b(Hn),o&&t(Cp),o&&t(ao),b(Vn),o&&t(Ap),o&&t(L),b(Qn),b(Zn),b(Yn),b(ea),o&&t(Sp),o&&t(so),b(sa),o&&t(Ip),o&&t(C),b(ra),b(la),b(ca),b(fa),b(_a),b(ga),o&&t(Np),o&&t(io),b(ka),o&&t(Op),o&&t(A),b(ba),b(Ma),b(wa),b($a),b(Fa),b(Ea),b(Pa),o&&t(Dp),o&&t(lo),b(Ca),o&&t(Lp),o&&t(G),b(Aa),b(Na),b(Oa),b(Wa),b(Ua),o&&t(Gp),o&&t(po),b(Xa),o&&t(Rp),o&&t(Qe),b(Ha),b(Ka),b(en),b(Za),o&&t(Wp),o&&t(uo),b(Ya),o&&t(Up),o&&t(Je),b(es),b(as),b(on),b(ss),b(rs),o&&t(Xp),o&&t(fo),b(is),o&&t(Hp),o&&t(Be),b(ds),b(hs),b(an),b(us),o&&t(Vp),o&&t(ko),b(ms),o&&t(Qp),o&&t(qe),b(fs),b(bs),b(rn),b(vs),b(ys),o&&t(Jp),o&&t(vo),b(Ts),o&&t(Kp),o&&t(yo),b(Ms),b(ws),b(zs),o&&t(Zp),o&&t(To),b(xs),o&&t(Yp),o&&t($e),b(Bs),b(cn),b(js),b(pn),b(Es),o&&t(eh),o&&t(wo),b(Ps),o&&t(th),o&&t(Fe),b(Cs),b(un),b(Ns),b(mn),b(Os),b(Ds),o&&t(oh),o&&t(xo),b(Ls),o&&t(nh),o&&t(R),b(Gs),b(Js),b(_n),b(Ks),b(Zs),b(Ys),b(er),b(tr),o&&t(ah),o&&t(qo),b(or),o&&t(sh),o&&t(W),b(nr),b(pr),b(kn),b(hr),b(ur),b(mr),b(fr),b(_r),b(gr),o&&t(rh),o&&t(Fo),b(kr),o&&t(ih),o&&t(I),b(br),b(Br),b(vn),b(qr),b($r),b(Fr),b(jr),b(Er),o&&t(dh),o&&t(Eo),b(Pr),o&&t(lh),o&&t(N),b(Cr),b(Gr),b(Tn),b(Rr),b(Wr),b(Ur),b(Xr),b(Hr)}}}const J2={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function K2(E,u,x){let{fw:v}=u;return E.$$set=M=>{"fw"in M&&x(0,v=M.fw)},[v]}class a0 extends P2{constructor(u){super();C2(this,u,K2,Q2,A2,{fw:0})}}export{a0 as default,J2 as metadata};
