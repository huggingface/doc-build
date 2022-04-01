import{S as Nz,i as Dz,s as Lz,e as o,k as d,w as u,t as r,M as Gz,c as a,d as t,m as l,a as s,x as m,h as i,b as c,F as e,g as h,y as f,q as g,o as _,B as k,v as Wz}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as $}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as X}from"../../chunks/IconCopyLink-7a11ce68.js";function Rz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Uz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Xz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Vz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Qz(C){let b,z,v,M,x,T,y,F,rt,Ee,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){b=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),F=o("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ee=d(),j=o("p"),Ue=r("This second option is useful when using "),ke=o("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=o("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),E=o("ul"),A=o("li"),lt=r("a single Tensor with "),pe=o("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=o("code"),pt=r("model(input_ids)"),ht=d(),D=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=o("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){b=a(w,"P",{});var B=s(b);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Ve=s(x);T=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),y=l(ze),F=a(ze,"LI",{});var Ut=s(F);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ee=l(w),j=a(w,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var V=s(N);Xe=i(V,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V.forEach(t),se=l(w),E=a(w,"UL",{});var de=s(E);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Vt=s(pe);he=i(Vt,"input_ids"),Vt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Qt=s(K);pt=i(Qt,"model(input_ids)"),Qt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ht=s(ve);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Jt=s(Te);we=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Qe=s(ie);Me=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Qe,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Qe.forEach(t),de.forEach(t)},m(w,B){h(w,b,B),e(b,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,F),e(F,rt),h(w,Ee,B),h(w,j,B),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,E,B),e(E,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(E,ht),e(E,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(E,ut),e(E,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(b),w&&t(v),w&&t(M),w&&t(Ee),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(E)}}}function Hz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Jz(C){let b,z,v,M,x,T,y,F,rt,Ee,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){b=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),F=o("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ee=d(),j=o("p"),Ue=r("This second option is useful when using "),ke=o("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=o("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),E=o("ul"),A=o("li"),lt=r("a single Tensor with "),pe=o("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=o("code"),pt=r("model(input_ids)"),ht=d(),D=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=o("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=o("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){b=a(w,"P",{});var B=s(b);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Ve=s(x);T=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),y=l(ze),F=a(ze,"LI",{});var Ut=s(F);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ee=l(w),j=a(w,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var V=s(N);Xe=i(V,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V.forEach(t),se=l(w),E=a(w,"UL",{});var de=s(E);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Vt=s(pe);he=i(Vt,"input_ids"),Vt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Qt=s(K);pt=i(Qt,"model(input_ids)"),Qt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ht=s(ve);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Jt=s(Te);we=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Qe=s(ie);Me=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Qe,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Qe.forEach(t),de.forEach(t)},m(w,B){h(w,b,B),e(b,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,F),e(F,rt),h(w,Ee,B),h(w,j,B),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,E,B),e(E,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(E,ht),e(E,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(E,ut),e(E,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(b),w&&t(v),w&&t(M),w&&t(Ee),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(E)}}}function Kz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Zz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function Yz(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function eq(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function tq(C){let b,z,v,M,x;return{c(){b=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var F=s(v);M=i(F,"Module"),F.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,M),e(b,x)},d(T){T&&t(b)}}}function nq(C){let b,z,v,M,x,T,y,F,rt,Ee,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye,w,B,ze,Ve,Ut,Z,Xt,bt,V,de,le,Vt,Qt,ce,Ht,Jt,Qe,Kt,Su,ld,Au,Ou,bp,yt,Iu,Po,cd,Nu,Du,Lu,ti,Gu,Wu,yp,ni,pd,Ru,vp,So,Tp,oi,Ao,hd,Uu,Xu,Zt,Vu,ud,Qu,Hu,md,Ju,Ku,wp,Oo,Mp,Yt,Sn,fd,Io,Zu,gd,Yu,xp,vt,em,No,tm,nm,_d,om,am,zp,ai,sm,qp,si,kd,rm,Fp,en,An,bd,Do,im,yd,dm,$p,et,lm,vd,cm,pm,Td,hm,um,wd,mm,fm,Bp,On,gm,ri,_m,km,jp,ii,Md,bm,Cp,Lo,Ep,di,Go,xd,ym,vm,qe,Tm,zd,wm,Mm,qd,xm,zm,Fd,qm,Fm,$d,$m,Bm,Bd,jm,Cm,Pp,Wo,Sp,tn,In,jd,Ro,Em,Cd,Pm,Ap,Fe,Uo,Sm,nn,Am,li,Om,Im,Xo,Nm,Dm,Lm,on,Gm,ci,Wm,Rm,pi,Um,Xm,Vm,Ed,Qm,Hm,Vo,Op,an,Nn,Pd,Qo,Jm,Sd,Km,Ip,G,Ho,Zm,Ad,Ym,ef,mt,tf,hi,nf,of,ui,af,sf,Jo,rf,df,lf,Ko,cf,Od,pf,hf,uf,Id,mf,ff,Zo,gf,Dn,Yo,_f,Nd,kf,bf,tt,ea,yf,ta,vf,Dd,Tf,wf,Mf,na,oa,Ld,xf,zf,Gd,qf,Ff,aa,Wd,$f,Bf,Rd,jf,Cf,Ud,Ef,Np,sn,Ln,Xd,sa,Pf,Vd,Sf,Dp,P,ra,Af,rn,Of,Qd,If,Nf,ia,Df,Lf,Gf,Tt,mi,Wf,Rf,fi,Uf,Xf,gi,Vf,Qf,Hf,da,Jf,Hd,Kf,Zf,Yf,Jd,eg,tg,la,ng,Se,ca,og,Kd,ag,sg,pa,rg,Zd,ig,dg,lg,ha,ua,Yd,cg,pg,el,hg,ug,ma,tl,mg,fg,nl,gg,_g,ol,kg,bg,Gn,fa,yg,al,vg,Tg,Wn,ga,wg,sl,Mg,xg,Rn,_a,zg,rl,qg,Lp,dn,Un,il,ka,Fg,dl,$g,Gp,S,ba,Bg,ya,jg,va,Cg,Eg,Pg,Ta,Sg,_i,Ag,Og,Ig,ll,Ng,Dg,wa,Lg,nt,Ma,Gg,xa,Wg,cl,Rg,Ug,Xg,za,qa,pl,Vg,Qg,hl,Hg,Jg,Fa,ul,Kg,Zg,ml,Yg,e_,fl,t_,n_,Xn,$a,o_,gl,a_,s_,Vn,Ba,r_,ja,i_,_l,d_,l_,c_,Qn,Ca,p_,kl,h_,u_,Hn,Ea,m_,bl,f_,Wp,ln,Jn,yl,Pa,g_,vl,__,Rp,W,Sa,k_,cn,b_,Tl,y_,v_,Aa,T_,w_,M_,Oa,x_,ki,z_,q_,F_,wl,$_,B_,Ia,j_,Ae,Na,C_,Ml,E_,P_,Da,S_,xl,A_,O_,I_,La,Ga,zl,N_,D_,ql,L_,G_,Wa,Fl,W_,R_,$l,U_,X_,Bl,V_,Q_,Kn,Ra,H_,jl,J_,K_,Zn,Ua,Z_,Cl,Y_,Up,pn,Yn,El,Xa,ek,Pl,tk,Xp,He,Va,nk,Qa,ok,bi,ak,sk,rk,Ha,ik,Ja,dk,lk,ck,Oe,Ka,pk,hn,hk,yi,uk,mk,Sl,fk,gk,_k,eo,kk,Al,bk,yk,Za,Vp,un,to,Ol,Ya,vk,Il,Tk,Qp,Je,es,wk,ts,Mk,vi,xk,zk,qk,ns,Fk,os,$k,Bk,jk,Y,as,Ck,mn,Ek,Ti,Pk,Sk,Nl,Ak,Ok,Ik,no,Nk,Dl,Dk,Lk,ss,Gk,Ll,Wk,Rk,rs,Hp,fn,oo,Gl,is,Uk,Wl,Xk,Jp,$e,ds,Vk,gn,Qk,Rl,Hk,Jk,Ul,Kk,Zk,Yk,ls,eb,wi,tb,nb,ob,cs,ab,ps,sb,rb,ib,ue,hs,db,_n,lb,Mi,cb,pb,Xl,hb,ub,mb,ao,fb,Vl,gb,_b,us,kb,ms,Kp,kn,so,Ql,fs,bb,Hl,yb,Zp,Be,gs,vb,Jl,Tb,wb,_s,Mb,xi,xb,zb,qb,ks,Fb,bs,$b,Bb,jb,L,ys,Cb,bn,Eb,zi,Pb,Sb,Kl,Ab,Ob,Ib,ro,Nb,Zl,Db,Lb,vs,Gb,Ts,Wb,Yl,Rb,Ub,ws,Xb,Ms,Yp,yn,io,ec,xs,Vb,tc,Qb,eh,vn,zs,Hb,wt,qs,Jb,nc,Kb,Zb,Fs,th,Tn,lo,oc,$s,Yb,ac,ey,nh,je,Bs,ty,js,ny,qi,oy,ay,sy,Cs,ry,Es,iy,dy,ly,co,cy,Ie,Ps,py,wn,hy,Fi,uy,my,sc,fy,gy,_y,po,ky,rc,by,yy,Ss,oh,Mn,ho,ic,As,vy,dc,Ty,ah,Ce,Os,wy,Is,My,$i,xy,zy,qy,Ns,Fy,Ds,$y,By,jy,uo,Cy,ee,Ls,Ey,xn,Py,Bi,Sy,Ay,lc,Oy,Iy,Ny,mo,Dy,cc,Ly,Gy,Gs,Wy,pc,Ry,Uy,Ws,sh,zn,fo,hc,Rs,Xy,uc,Vy,rh,R,Us,Qy,Xs,Hy,ji,Jy,Ky,Zy,Vs,Yy,Qs,ev,tv,nv,mc,ov,av,ft,fc,Hs,sv,rv,gc,Js,iv,dv,_c,Ks,lv,cv,kc,Zs,pv,hv,Ne,Ys,uv,qn,mv,bc,fv,gv,yc,_v,kv,bv,go,yv,vc,vv,Tv,er,wv,Mt,tr,Mv,Tc,xv,zv,nr,qv,xt,or,Fv,wc,$v,Bv,ar,ih,Fn,_o,Mc,sr,jv,xc,Cv,dh,U,rr,Ev,ir,Pv,Ci,Sv,Av,Ov,dr,Iv,lr,Nv,Dv,Lv,zc,Gv,Wv,gt,qc,cr,Rv,Uv,Fc,pr,Xv,Vv,$c,hr,Qv,Hv,Bc,ur,Jv,Kv,te,mr,Zv,$n,Yv,jc,eT,tT,Cc,nT,oT,aT,ko,sT,Ec,rT,iT,fr,dT,Pc,lT,cT,gr,pT,zt,_r,hT,Sc,uT,mT,kr,fT,qt,br,gT,Ac,_T,kT,yr,lh,Bn,bo,Oc,vr,bT,Ic,yT,ch,O,Tr,vT,Nc,TT,wT,wr,MT,Ei,xT,zT,qT,Mr,FT,xr,$T,BT,jT,Dc,CT,ET,_t,Lc,zr,PT,ST,Gc,qr,AT,OT,Wc,Fr,IT,NT,Rc,$r,DT,LT,De,Br,GT,jn,WT,Uc,RT,UT,Xc,XT,VT,QT,yo,HT,Vc,JT,KT,jr,ZT,Ft,Cr,YT,Qc,ew,tw,Er,nw,$t,Pr,ow,Hc,aw,sw,Sr,ph,Cn,vo,Jc,Ar,rw,Kc,iw,hh,I,Or,dw,En,lw,Zc,cw,pw,Yc,hw,uw,mw,Ir,fw,Pi,gw,_w,kw,Nr,bw,Dr,yw,vw,Tw,ep,ww,Mw,kt,tp,Lr,xw,zw,np,Gr,qw,Fw,op,Wr,$w,Bw,ap,Rr,jw,Cw,Le,Ur,Ew,Pn,Pw,sp,Sw,Aw,rp,Ow,Iw,Nw,To,Dw,ip,Lw,Gw,Xr,Ww,Bt,Vr,Rw,dp,Uw,Xw,Qr,Vw,jt,Hr,Qw,lp,Hw,Jw,Jr,uh;return T=new X({}),se=new X({}),Ve=new X({}),So=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Io=new X({}),Do=new X({}),Lo=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Wo=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Ro=new X({}),Uo=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/configuration_mbart.py#L34",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Vo=new $({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Qo=new X({}),Ho=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zo=new $({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yo=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new X({}),ra=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),la=new $({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L162",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L191",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ga=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L250"}}),_a=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/tokenization_mbart_fast.py#L265"}}),ka=new X({}),ba=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ma=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Ba=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ca=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Ea=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Pa=new X({}),Sa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),Ua=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Xa=new X({}),Va=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1134",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1161",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),eo=new st({props:{$$slots:{default:[Rz]},$$scope:{ctx:C}}}),Za=new $({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new X({}),es=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1251",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1295",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),no=new st({props:{$$slots:{default:[Uz]},$$scope:{ctx:C}}}),ss=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new X({}),ds=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1551",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1563",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ao=new st({props:{$$slots:{default:[Xz]},$$scope:{ctx:C}}}),us=new $({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-number">3.04</span>`}}),fs=new X({}),gs=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1424",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1437",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ro=new st({props:{$$slots:{default:[Vz]},$$scope:{ctx:C}}}),vs=new $({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),xs=new X({}),zs=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),qs=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_mbart.py#L1715",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Fs=new $({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),$s=new X({}),Bs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1147",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),co=new st({props:{$$slots:{default:[Qz]},$$scope:{ctx:C}}}),Ps=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),po=new st({props:{$$slots:{default:[Hz]},$$scope:{ctx:C}}}),Ss=new $({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),As=new X({}),Os=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1234",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),uo=new st({props:{$$slots:{default:[Jz]},$$scope:{ctx:C}}}),Ls=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),mo=new st({props:{$$slots:{default:[Kz]},$$scope:{ctx:C}}}),Gs=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Rs=new X({}),Us=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1265",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ys=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),go=new st({props:{$$slots:{default:[Zz]},$$scope:{ctx:C}}}),er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),or=new q({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new X({}),rr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1352",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),mr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ko=new st({props:{$$slots:{default:[Yz]},$$scope:{ctx:C}}}),fr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),_r=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),br=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new X({}),Tr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1665",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Br=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),yo=new st({props:{$$slots:{default:[eq]},$$scope:{ctx:C}}}),jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Pr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ar=new X({}),Or=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1753",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ur=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),To=new st({props:{$$slots:{default:[tq]},$$scope:{ctx:C}}}),Xr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Vr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Hr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){b=o("meta"),z=d(),v=o("h1"),M=o("a"),x=o("span"),u(T.$$.fragment),y=d(),F=o("span"),rt=r("MBart and MBart-50"),Ee=d(),j=o("p"),Ue=o("strong"),ke=r("DISCLAIMER:"),it=r(" If you see something strange, file a "),be=o("a"),ye=r("Github Issue"),dt=r(` and assign
@patrickvonplaten`),Ke=d(),J=o("h2"),N=o("a"),Xe=o("span"),u(se.$$.fragment),E=d(),A=o("span"),lt=r("Overview of MBart"),pe=d(),he=o("p"),ct=r("The MBart model was presented in "),K=o("a"),pt=r("Multilingual Denoising Pre-training for Neural Machine Translation"),ht=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Pe=o("p"),ve=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),re=o("p"),Te=r("This model was contributed by "),we=o("a"),ut=r("valhalla"),ie=r(". The Authors\u2019 code can be found "),Me=o("a"),xe=r("here"),Ye=d(),w=o("h3"),B=o("a"),ze=o("span"),u(Ve.$$.fragment),Ut=d(),Z=o("span"),Xt=r("Training of MBart"),bt=d(),V=o("p"),de=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=o("code"),Vt=r("X [eos, src_lang_code]"),Qt=r(" where "),ce=o("code"),Ht=r("X"),Jt=r(` is the source text. The
target text format is `),Qe=o("code"),Kt=r("[tgt_lang_code] X [eos]"),Su=r(". "),ld=o("code"),Au=r("bos"),Ou=r(" is never used."),bp=d(),yt=o("p"),Iu=r("The regular "),Po=o("a"),cd=o("strong"),Nu=r("call"),Du=r("()"),Lu=r(` will encode source text format, and it should be wrapped
inside the context manager `),ti=o("a"),Gu=r("as_target_tokenizer()"),Wu=r(" to encode target text format."),yp=d(),ni=o("ul"),pd=o("li"),Ru=r("Supervised training"),vp=d(),u(So.$$.fragment),Tp=d(),oi=o("ul"),Ao=o("li"),hd=o("p"),Uu=r("Generation"),Xu=d(),Zt=o("p"),Vu=r("While generating the target text set the "),ud=o("code"),Qu=r("decoder_start_token_id"),Hu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),md=o("em"),Ju=r("facebook/mbart-large-en-ro"),Ku=r(" model."),wp=d(),u(Oo.$$.fragment),Mp=d(),Yt=o("h2"),Sn=o("a"),fd=o("span"),u(Io.$$.fragment),Zu=d(),gd=o("span"),Yu=r("Overview of MBart-50"),xp=d(),vt=o("p"),em=r("MBart-50 was introduced in the "),No=o("a"),tm=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),nm=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),_d=o("em"),om=r("mbart-large-cc25"),am=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),zp=d(),ai=o("p"),sm=r("According to the abstract"),qp=d(),si=o("p"),kd=o("em"),rm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Fp=d(),en=o("h3"),An=o("a"),bd=o("span"),u(Do.$$.fragment),im=d(),yd=o("span"),dm=r("Training of MBart-50"),$p=d(),et=o("p"),lm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),vd=o("code"),cm=r("[lang_code] X [eos]"),pm=r(", where "),Td=o("code"),hm=r("lang_code"),um=r(` is source
language id for source text and target language id for target text, with `),wd=o("code"),mm=r("X"),fm=r(` being the source or target text
respectively.`),Bp=d(),On=o("p"),gm=r("MBart-50 has its own tokenizer "),ri=o("a"),_m=r("MBart50Tokenizer"),km=r("."),jp=d(),ii=o("ul"),Md=o("li"),bm=r("Supervised training"),Cp=d(),u(Lo.$$.fragment),Ep=d(),di=o("ul"),Go=o("li"),xd=o("p"),ym=r("Generation"),vm=d(),qe=o("p"),Tm=r("To generate using the mBART-50 multilingual translation models, "),zd=o("code"),wm=r("eos_token_id"),Mm=r(` is used as the
`),qd=o("code"),xm=r("decoder_start_token_id"),zm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Fd=o("em"),qm=r("forced_bos_token_id"),Fm=r(" parameter to the "),$d=o("em"),$m=r("generate"),Bm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Bd=o("em"),jm=r("facebook/mbart-50-large-many-to-many"),Cm=r(" checkpoint."),Pp=d(),u(Wo.$$.fragment),Sp=d(),tn=o("h2"),In=o("a"),jd=o("span"),u(Ro.$$.fragment),Em=d(),Cd=o("span"),Pm=r("MBartConfig"),Ap=d(),Fe=o("div"),u(Uo.$$.fragment),Sm=d(),nn=o("p"),Am=r("This is the configuration class to store the configuration of a "),li=o("a"),Om=r("MBartModel"),Im=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xo=o("a"),Nm=r("facebook/mbart-large-cc25"),Dm=r(" architecture."),Lm=d(),on=o("p"),Gm=r("Configuration objects inherit from "),ci=o("a"),Wm=r("PretrainedConfig"),Rm=r(` and can be used to control the model outputs. Read the
documentation from `),pi=o("a"),Um=r("PretrainedConfig"),Xm=r(" for more information."),Vm=d(),Ed=o("p"),Qm=r("Example:"),Hm=d(),u(Vo.$$.fragment),Op=d(),an=o("h2"),Nn=o("a"),Pd=o("span"),u(Qo.$$.fragment),Jm=d(),Sd=o("span"),Km=r("MBartTokenizer"),Ip=d(),G=o("div"),u(Ho.$$.fragment),Zm=d(),Ad=o("p"),Ym=r("Construct an MBART tokenizer."),ef=d(),mt=o("p"),tf=r("Adapted from "),hi=o("a"),nf=r("RobertaTokenizer"),of=r(" and "),ui=o("a"),af=r("XLNetTokenizer"),sf=r(`. Based on
`),Jo=o("a"),rf=r("SentencePiece"),df=r("."),lf=d(),Ko=o("p"),cf=r("The tokenization method is "),Od=o("code"),pf=r("<tokens> <eos> <language code>"),hf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),uf=d(),Id=o("p"),mf=r("Examples:"),ff=d(),u(Zo.$$.fragment),gf=d(),Dn=o("div"),u(Yo.$$.fragment),_f=d(),Nd=o("p"),kf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),bf=d(),tt=o("div"),u(ea.$$.fragment),yf=d(),ta=o("p"),vf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Dd=o("code"),Tf=r("X"),wf=r(" represents the sequence:"),Mf=d(),na=o("ul"),oa=o("li"),Ld=o("code"),xf=r("input_ids"),zf=r(" (for encoder) "),Gd=o("code"),qf=r("X [eos, src_lang_code]"),Ff=d(),aa=o("li"),Wd=o("code"),$f=r("decoder_input_ids"),Bf=r(": (for decoder) "),Rd=o("code"),jf=r("X [eos, tgt_lang_code]"),Cf=d(),Ud=o("p"),Ef=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Np=d(),sn=o("h2"),Ln=o("a"),Xd=o("span"),u(sa.$$.fragment),Pf=d(),Vd=o("span"),Sf=r("MBartTokenizerFast"),Dp=d(),P=o("div"),u(ra.$$.fragment),Af=d(),rn=o("p"),Of=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Qd=o("em"),If=r("tokenizers"),Nf=r(` library). Based on
`),ia=o("a"),Df=r("BPE"),Lf=r("."),Gf=d(),Tt=o("p"),mi=o("a"),Wf=r("MBartTokenizerFast"),Rf=r(" is a subclass of "),fi=o("a"),Uf=r("XLMRobertaTokenizerFast"),Xf=r(`. Refer to superclass
`),gi=o("a"),Vf=r("XLMRobertaTokenizerFast"),Qf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Hf=d(),da=o("p"),Jf=r("The tokenization method is "),Hd=o("code"),Kf=r("<tokens> <eos> <language code>"),Zf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Yf=d(),Jd=o("p"),eg=r("Examples:"),tg=d(),u(la.$$.fragment),ng=d(),Se=o("div"),u(ca.$$.fragment),og=d(),Kd=o("p"),ag=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),sg=d(),pa=o("p"),rg=r("An MBART sequence has the following format, where "),Zd=o("code"),ig=r("X"),dg=r(" represents the sequence:"),lg=d(),ha=o("ul"),ua=o("li"),Yd=o("code"),cg=r("input_ids"),pg=r(" (for encoder) "),el=o("code"),hg=r("X [eos, src_lang_code]"),ug=d(),ma=o("li"),tl=o("code"),mg=r("decoder_input_ids"),fg=r(": (for decoder) "),nl=o("code"),gg=r("X [eos, tgt_lang_code]"),_g=d(),ol=o("p"),kg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),bg=d(),Gn=o("div"),u(fa.$$.fragment),yg=d(),al=o("p"),vg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Tg=d(),Wn=o("div"),u(ga.$$.fragment),wg=d(),sl=o("p"),Mg=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),xg=d(),Rn=o("div"),u(_a.$$.fragment),zg=d(),rl=o("p"),qg=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Lp=d(),dn=o("h2"),Un=o("a"),il=o("span"),u(ka.$$.fragment),Fg=d(),dl=o("span"),$g=r("MBart50Tokenizer"),Gp=d(),S=o("div"),u(ba.$$.fragment),Bg=d(),ya=o("p"),jg=r("Construct a MBart50 tokenizer. Based on "),va=o("a"),Cg=r("SentencePiece"),Eg=r("."),Pg=d(),Ta=o("p"),Sg=r("This tokenizer inherits from "),_i=o("a"),Ag=r("PreTrainedTokenizer"),Og=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ig=d(),ll=o("p"),Ng=r("Examples:"),Dg=d(),u(wa.$$.fragment),Lg=d(),nt=o("div"),u(Ma.$$.fragment),Gg=d(),xa=o("p"),Wg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),cl=o("code"),Rg=r("X"),Ug=r(" represents the sequence:"),Xg=d(),za=o("ul"),qa=o("li"),pl=o("code"),Vg=r("input_ids"),Qg=r(" (for encoder) "),hl=o("code"),Hg=r("[src_lang_code] X [eos]"),Jg=d(),Fa=o("li"),ul=o("code"),Kg=r("labels"),Zg=r(": (for decoder) "),ml=o("code"),Yg=r("[tgt_lang_code] X [eos]"),e_=d(),fl=o("p"),t_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),n_=d(),Xn=o("div"),u($a.$$.fragment),o_=d(),gl=o("p"),a_=r("Converts a sequence of tokens (strings for sub-words) in a single string."),s_=d(),Vn=o("div"),u(Ba.$$.fragment),r_=d(),ja=o("p"),i_=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_l=o("code"),d_=r("prepare_for_model"),l_=r(" method."),c_=d(),Qn=o("div"),u(Ca.$$.fragment),p_=d(),kl=o("p"),h_=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),u_=d(),Hn=o("div"),u(Ea.$$.fragment),m_=d(),bl=o("p"),f_=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Wp=d(),ln=o("h2"),Jn=o("a"),yl=o("span"),u(Pa.$$.fragment),g_=d(),vl=o("span"),__=r("MBart50TokenizerFast"),Rp=d(),W=o("div"),u(Sa.$$.fragment),k_=d(),cn=o("p"),b_=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Tl=o("em"),y_=r("tokenizers"),v_=r(` library). Based on
`),Aa=o("a"),T_=r("BPE"),w_=r("."),M_=d(),Oa=o("p"),x_=r("This tokenizer inherits from "),ki=o("a"),z_=r("PreTrainedTokenizerFast"),q_=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),F_=d(),wl=o("p"),$_=r("Examples:"),B_=d(),u(Ia.$$.fragment),j_=d(),Ae=o("div"),u(Na.$$.fragment),C_=d(),Ml=o("p"),E_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),P_=d(),Da=o("p"),S_=r("An MBART-50 sequence has the following format, where "),xl=o("code"),A_=r("X"),O_=r(" represents the sequence:"),I_=d(),La=o("ul"),Ga=o("li"),zl=o("code"),N_=r("input_ids"),D_=r(" (for encoder) "),ql=o("code"),L_=r("[src_lang_code] X [eos]"),G_=d(),Wa=o("li"),Fl=o("code"),W_=r("labels"),R_=r(": (for decoder) "),$l=o("code"),U_=r("[tgt_lang_code] X [eos]"),X_=d(),Bl=o("p"),V_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Q_=d(),Kn=o("div"),u(Ra.$$.fragment),H_=d(),jl=o("p"),J_=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),K_=d(),Zn=o("div"),u(Ua.$$.fragment),Z_=d(),Cl=o("p"),Y_=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Up=d(),pn=o("h2"),Yn=o("a"),El=o("span"),u(Xa.$$.fragment),ek=d(),Pl=o("span"),tk=r("MBartModel"),Xp=d(),He=o("div"),u(Va.$$.fragment),nk=d(),Qa=o("p"),ok=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=o("a"),ak=r("PreTrainedModel"),sk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk=d(),Ha=o("p"),ik=r("This model is also a PyTorch "),Ja=o("a"),dk=r("torch.nn.Module"),lk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ck=d(),Oe=o("div"),u(Ka.$$.fragment),pk=d(),hn=o("p"),hk=r("The "),yi=o("a"),uk=r("MBartModel"),mk=r(" forward method, overrides the "),Sl=o("code"),fk=r("__call__"),gk=r(" special method."),_k=d(),u(eo.$$.fragment),kk=d(),Al=o("p"),bk=r("Example:"),yk=d(),u(Za.$$.fragment),Vp=d(),un=o("h2"),to=o("a"),Ol=o("span"),u(Ya.$$.fragment),vk=d(),Il=o("span"),Tk=r("MBartForConditionalGeneration"),Qp=d(),Je=o("div"),u(es.$$.fragment),wk=d(),ts=o("p"),Mk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vi=o("a"),xk=r("PreTrainedModel"),zk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qk=d(),ns=o("p"),Fk=r("This model is also a PyTorch "),os=o("a"),$k=r("torch.nn.Module"),Bk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jk=d(),Y=o("div"),u(as.$$.fragment),Ck=d(),mn=o("p"),Ek=r("The "),Ti=o("a"),Pk=r("MBartForConditionalGeneration"),Sk=r(" forward method, overrides the "),Nl=o("code"),Ak=r("__call__"),Ok=r(" special method."),Ik=d(),u(no.$$.fragment),Nk=d(),Dl=o("p"),Dk=r("Translation example:"),Lk=d(),u(ss.$$.fragment),Gk=d(),Ll=o("p"),Wk=r("Mask filling example:"),Rk=d(),u(rs.$$.fragment),Hp=d(),fn=o("h2"),oo=o("a"),Gl=o("span"),u(is.$$.fragment),Uk=d(),Wl=o("span"),Xk=r("MBartForQuestionAnswering"),Jp=d(),$e=o("div"),u(ds.$$.fragment),Vk=d(),gn=o("p"),Qk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rl=o("code"),Hk=r("span start logits"),Jk=r(" and "),Ul=o("code"),Kk=r("span end logits"),Zk=r(")."),Yk=d(),ls=o("p"),eb=r("This model inherits from "),wi=o("a"),tb=r("PreTrainedModel"),nb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ob=d(),cs=o("p"),ab=r("This model is also a PyTorch "),ps=o("a"),sb=r("torch.nn.Module"),rb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ib=d(),ue=o("div"),u(hs.$$.fragment),db=d(),_n=o("p"),lb=r("The "),Mi=o("a"),cb=r("MBartForQuestionAnswering"),pb=r(" forward method, overrides the "),Xl=o("code"),hb=r("__call__"),ub=r(" special method."),mb=d(),u(ao.$$.fragment),fb=d(),Vl=o("p"),gb=r("Example:"),_b=d(),u(us.$$.fragment),kb=d(),u(ms.$$.fragment),Kp=d(),kn=o("h2"),so=o("a"),Ql=o("span"),u(fs.$$.fragment),bb=d(),Hl=o("span"),yb=r("MBartForSequenceClassification"),Zp=d(),Be=o("div"),u(gs.$$.fragment),vb=d(),Jl=o("p"),Tb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),wb=d(),_s=o("p"),Mb=r("This model inherits from "),xi=o("a"),xb=r("PreTrainedModel"),zb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qb=d(),ks=o("p"),Fb=r("This model is also a PyTorch "),bs=o("a"),$b=r("torch.nn.Module"),Bb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jb=d(),L=o("div"),u(ys.$$.fragment),Cb=d(),bn=o("p"),Eb=r("The "),zi=o("a"),Pb=r("MBartForSequenceClassification"),Sb=r(" forward method, overrides the "),Kl=o("code"),Ab=r("__call__"),Ob=r(" special method."),Ib=d(),u(ro.$$.fragment),Nb=d(),Zl=o("p"),Db=r("Example of single-label classification:"),Lb=d(),u(vs.$$.fragment),Gb=d(),u(Ts.$$.fragment),Wb=d(),Yl=o("p"),Rb=r("Example of multi-label classification:"),Ub=d(),u(ws.$$.fragment),Xb=d(),u(Ms.$$.fragment),Yp=d(),yn=o("h2"),io=o("a"),ec=o("span"),u(xs.$$.fragment),Vb=d(),tc=o("span"),Qb=r("MBartForCausalLM"),eh=d(),vn=o("div"),u(zs.$$.fragment),Hb=d(),wt=o("div"),u(qs.$$.fragment),Jb=d(),nc=o("p"),Kb=r("Example:"),Zb=d(),u(Fs.$$.fragment),th=d(),Tn=o("h2"),lo=o("a"),oc=o("span"),u($s.$$.fragment),Yb=d(),ac=o("span"),ey=r("TFMBartModel"),nh=d(),je=o("div"),u(Bs.$$.fragment),ty=d(),js=o("p"),ny=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=o("a"),oy=r("TFPreTrainedModel"),ay=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy=d(),Cs=o("p"),ry=r("This model is also a "),Es=o("a"),iy=r("tf.keras.Model"),dy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ly=d(),u(co.$$.fragment),cy=d(),Ie=o("div"),u(Ps.$$.fragment),py=d(),wn=o("p"),hy=r("The "),Fi=o("a"),uy=r("TFMBartModel"),my=r(" forward method, overrides the "),sc=o("code"),fy=r("__call__"),gy=r(" special method."),_y=d(),u(po.$$.fragment),ky=d(),rc=o("p"),by=r("Example:"),yy=d(),u(Ss.$$.fragment),oh=d(),Mn=o("h2"),ho=o("a"),ic=o("span"),u(As.$$.fragment),vy=d(),dc=o("span"),Ty=r("TFMBartForConditionalGeneration"),ah=d(),Ce=o("div"),u(Os.$$.fragment),wy=d(),Is=o("p"),My=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=o("a"),xy=r("TFPreTrainedModel"),zy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qy=d(),Ns=o("p"),Fy=r("This model is also a "),Ds=o("a"),$y=r("tf.keras.Model"),By=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=d(),u(uo.$$.fragment),Cy=d(),ee=o("div"),u(Ls.$$.fragment),Ey=d(),xn=o("p"),Py=r("The "),Bi=o("a"),Sy=r("TFMBartForConditionalGeneration"),Ay=r(" forward method, overrides the "),lc=o("code"),Oy=r("__call__"),Iy=r(" special method."),Ny=d(),u(mo.$$.fragment),Dy=d(),cc=o("p"),Ly=r("Summarization example:"),Gy=d(),u(Gs.$$.fragment),Wy=d(),pc=o("p"),Ry=r("Mask filling example:"),Uy=d(),u(Ws.$$.fragment),sh=d(),zn=o("h2"),fo=o("a"),hc=o("span"),u(Rs.$$.fragment),Xy=d(),uc=o("span"),Vy=r("FlaxMBartModel"),rh=d(),R=o("div"),u(Us.$$.fragment),Qy=d(),Xs=o("p"),Hy=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ji=o("a"),Jy=r("FlaxPreTrainedModel"),Ky=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zy=d(),Vs=o("p"),Yy=r(`This model is also a Flax Linen
`),Qs=o("a"),ev=r("flax.nn.Module"),tv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),nv=d(),mc=o("p"),ov=r("Finally, this model supports inherent JAX features such as:"),av=d(),ft=o("ul"),fc=o("li"),Hs=o("a"),sv=r("Just-In-Time (JIT) compilation"),rv=d(),gc=o("li"),Js=o("a"),iv=r("Automatic Differentiation"),dv=d(),_c=o("li"),Ks=o("a"),lv=r("Vectorization"),cv=d(),kc=o("li"),Zs=o("a"),pv=r("Parallelization"),hv=d(),Ne=o("div"),u(Ys.$$.fragment),uv=d(),qn=o("p"),mv=r("The "),bc=o("code"),fv=r("FlaxMBartPreTrainedModel"),gv=r("forward method, overrides the "),yc=o("code"),_v=r("__call__"),kv=r(" special method."),bv=d(),u(go.$$.fragment),yv=d(),vc=o("p"),vv=r("Example:"),Tv=d(),u(er.$$.fragment),wv=d(),Mt=o("div"),u(tr.$$.fragment),Mv=d(),Tc=o("p"),xv=r("Example:"),zv=d(),u(nr.$$.fragment),qv=d(),xt=o("div"),u(or.$$.fragment),Fv=d(),wc=o("p"),$v=r("Example:"),Bv=d(),u(ar.$$.fragment),ih=d(),Fn=o("h2"),_o=o("a"),Mc=o("span"),u(sr.$$.fragment),jv=d(),xc=o("span"),Cv=r("FlaxMBartForConditionalGeneration"),dh=d(),U=o("div"),u(rr.$$.fragment),Ev=d(),ir=o("p"),Pv=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ci=o("a"),Sv=r("FlaxPreTrainedModel"),Av=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=d(),dr=o("p"),Iv=r(`This model is also a Flax Linen
`),lr=o("a"),Nv=r("flax.nn.Module"),Dv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lv=d(),zc=o("p"),Gv=r("Finally, this model supports inherent JAX features such as:"),Wv=d(),gt=o("ul"),qc=o("li"),cr=o("a"),Rv=r("Just-In-Time (JIT) compilation"),Uv=d(),Fc=o("li"),pr=o("a"),Xv=r("Automatic Differentiation"),Vv=d(),$c=o("li"),hr=o("a"),Qv=r("Vectorization"),Hv=d(),Bc=o("li"),ur=o("a"),Jv=r("Parallelization"),Kv=d(),te=o("div"),u(mr.$$.fragment),Zv=d(),$n=o("p"),Yv=r("The "),jc=o("code"),eT=r("FlaxMBartPreTrainedModel"),tT=r("forward method, overrides the "),Cc=o("code"),nT=r("__call__"),oT=r(" special method."),aT=d(),u(ko.$$.fragment),sT=d(),Ec=o("p"),rT=r("Summarization example:"),iT=d(),u(fr.$$.fragment),dT=d(),Pc=o("p"),lT=r("Mask filling example:"),cT=d(),u(gr.$$.fragment),pT=d(),zt=o("div"),u(_r.$$.fragment),hT=d(),Sc=o("p"),uT=r("Example:"),mT=d(),u(kr.$$.fragment),fT=d(),qt=o("div"),u(br.$$.fragment),gT=d(),Ac=o("p"),_T=r("Example:"),kT=d(),u(yr.$$.fragment),lh=d(),Bn=o("h2"),bo=o("a"),Oc=o("span"),u(vr.$$.fragment),bT=d(),Ic=o("span"),yT=r("FlaxMBartForSequenceClassification"),ch=d(),O=o("div"),u(Tr.$$.fragment),vT=d(),Nc=o("p"),TT=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),wT=d(),wr=o("p"),MT=r("This model inherits from "),Ei=o("a"),xT=r("FlaxPreTrainedModel"),zT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qT=d(),Mr=o("p"),FT=r(`This model is also a Flax Linen
`),xr=o("a"),$T=r("flax.nn.Module"),BT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jT=d(),Dc=o("p"),CT=r("Finally, this model supports inherent JAX features such as:"),ET=d(),_t=o("ul"),Lc=o("li"),zr=o("a"),PT=r("Just-In-Time (JIT) compilation"),ST=d(),Gc=o("li"),qr=o("a"),AT=r("Automatic Differentiation"),OT=d(),Wc=o("li"),Fr=o("a"),IT=r("Vectorization"),NT=d(),Rc=o("li"),$r=o("a"),DT=r("Parallelization"),LT=d(),De=o("div"),u(Br.$$.fragment),GT=d(),jn=o("p"),WT=r("The "),Uc=o("code"),RT=r("FlaxMBartPreTrainedModel"),UT=r("forward method, overrides the "),Xc=o("code"),XT=r("__call__"),VT=r(" special method."),QT=d(),u(yo.$$.fragment),HT=d(),Vc=o("p"),JT=r("Example:"),KT=d(),u(jr.$$.fragment),ZT=d(),Ft=o("div"),u(Cr.$$.fragment),YT=d(),Qc=o("p"),ew=r("Example:"),tw=d(),u(Er.$$.fragment),nw=d(),$t=o("div"),u(Pr.$$.fragment),ow=d(),Hc=o("p"),aw=r("Example:"),sw=d(),u(Sr.$$.fragment),ph=d(),Cn=o("h2"),vo=o("a"),Jc=o("span"),u(Ar.$$.fragment),rw=d(),Kc=o("span"),iw=r("FlaxMBartForQuestionAnswering"),hh=d(),I=o("div"),u(Or.$$.fragment),dw=d(),En=o("p"),lw=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zc=o("code"),cw=r("span start logits"),pw=r(" and "),Yc=o("code"),hw=r("span end logits"),uw=r(")."),mw=d(),Ir=o("p"),fw=r("This model inherits from "),Pi=o("a"),gw=r("FlaxPreTrainedModel"),_w=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kw=d(),Nr=o("p"),bw=r(`This model is also a Flax Linen
`),Dr=o("a"),yw=r("flax.nn.Module"),vw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tw=d(),ep=o("p"),ww=r("Finally, this model supports inherent JAX features such as:"),Mw=d(),kt=o("ul"),tp=o("li"),Lr=o("a"),xw=r("Just-In-Time (JIT) compilation"),zw=d(),np=o("li"),Gr=o("a"),qw=r("Automatic Differentiation"),Fw=d(),op=o("li"),Wr=o("a"),$w=r("Vectorization"),Bw=d(),ap=o("li"),Rr=o("a"),jw=r("Parallelization"),Cw=d(),Le=o("div"),u(Ur.$$.fragment),Ew=d(),Pn=o("p"),Pw=r("The "),sp=o("code"),Sw=r("FlaxMBartPreTrainedModel"),Aw=r("forward method, overrides the "),rp=o("code"),Ow=r("__call__"),Iw=r(" special method."),Nw=d(),u(To.$$.fragment),Dw=d(),ip=o("p"),Lw=r("Example:"),Gw=d(),u(Xr.$$.fragment),Ww=d(),Bt=o("div"),u(Vr.$$.fragment),Rw=d(),dp=o("p"),Uw=r("Example:"),Xw=d(),u(Qr.$$.fragment),Vw=d(),jt=o("div"),u(Hr.$$.fragment),Qw=d(),lp=o("p"),Hw=r("Example:"),Jw=d(),u(Jr.$$.fragment),this.h()},l(n){const p=Gz('[data-svelte="svelte-1phssyn"]',document.head);b=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),v=a(n,"H1",{class:!0});var Kr=s(v);M=a(Kr,"A",{id:!0,class:!0,href:!0});var cp=s(M);x=a(cp,"SPAN",{});var pp=s(x);m(T.$$.fragment,pp),pp.forEach(t),cp.forEach(t),y=l(Kr),F=a(Kr,"SPAN",{});var hp=s(F);rt=i(hp,"MBart and MBart-50"),hp.forEach(t),Kr.forEach(t),Ee=l(n),j=a(n,"P",{});var wo=s(j);Ue=a(wo,"STRONG",{});var up=s(Ue);ke=i(up,"DISCLAIMER:"),up.forEach(t),it=i(wo," If you see something strange, file a "),be=a(wo,"A",{href:!0,rel:!0});var mp=s(be);ye=i(mp,"Github Issue"),mp.forEach(t),dt=i(wo,` and assign
@patrickvonplaten`),wo.forEach(t),Ke=l(n),J=a(n,"H2",{class:!0});var Zr=s(J);N=a(Zr,"A",{id:!0,class:!0,href:!0});var fp=s(N);Xe=a(fp,"SPAN",{});var gp=s(Xe);m(se.$$.fragment,gp),gp.forEach(t),fp.forEach(t),E=l(Zr),A=a(Zr,"SPAN",{});var _p=s(A);lt=i(_p,"Overview of MBart"),_p.forEach(t),Zr.forEach(t),pe=l(n),he=a(n,"P",{});var Yr=s(he);ct=i(Yr,"The MBart model was presented in "),K=a(Yr,"A",{href:!0,rel:!0});var Zw=s(K);pt=i(Zw,"Multilingual Denoising Pre-training for Neural Machine Translation"),Zw.forEach(t),ht=i(Yr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Yr.forEach(t),D=l(n),Pe=a(n,"P",{});var Yw=s(Pe);ve=i(Yw,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Yw.forEach(t),Ze=l(n),re=a(n,"P",{});var kp=s(re);Te=i(kp,"This model was contributed by "),we=a(kp,"A",{href:!0,rel:!0});var eM=s(we);ut=i(eM,"valhalla"),eM.forEach(t),ie=i(kp,". The Authors\u2019 code can be found "),Me=a(kp,"A",{href:!0,rel:!0});var tM=s(Me);xe=i(tM,"here"),tM.forEach(t),kp.forEach(t),Ye=l(n),w=a(n,"H3",{class:!0});var mh=s(w);B=a(mh,"A",{id:!0,class:!0,href:!0});var nM=s(B);ze=a(nM,"SPAN",{});var oM=s(ze);m(Ve.$$.fragment,oM),oM.forEach(t),nM.forEach(t),Ut=l(mh),Z=a(mh,"SPAN",{});var aM=s(Z);Xt=i(aM,"Training of MBart"),aM.forEach(t),mh.forEach(t),bt=l(n),V=a(n,"P",{});var Ct=s(V);de=i(Ct,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=a(Ct,"CODE",{});var sM=s(le);Vt=i(sM,"X [eos, src_lang_code]"),sM.forEach(t),Qt=i(Ct," where "),ce=a(Ct,"CODE",{});var rM=s(ce);Ht=i(rM,"X"),rM.forEach(t),Jt=i(Ct,` is the source text. The
target text format is `),Qe=a(Ct,"CODE",{});var iM=s(Qe);Kt=i(iM,"[tgt_lang_code] X [eos]"),iM.forEach(t),Su=i(Ct,". "),ld=a(Ct,"CODE",{});var dM=s(ld);Au=i(dM,"bos"),dM.forEach(t),Ou=i(Ct," is never used."),Ct.forEach(t),bp=l(n),yt=a(n,"P",{});var Si=s(yt);Iu=i(Si,"The regular "),Po=a(Si,"A",{href:!0});var Kw=s(Po);cd=a(Kw,"STRONG",{});var lM=s(cd);Nu=i(lM,"call"),lM.forEach(t),Du=i(Kw,"()"),Kw.forEach(t),Lu=i(Si,` will encode source text format, and it should be wrapped
inside the context manager `),ti=a(Si,"A",{href:!0});var cM=s(ti);Gu=i(cM,"as_target_tokenizer()"),cM.forEach(t),Wu=i(Si," to encode target text format."),Si.forEach(t),yp=l(n),ni=a(n,"UL",{});var pM=s(ni);pd=a(pM,"LI",{});var hM=s(pd);Ru=i(hM,"Supervised training"),hM.forEach(t),pM.forEach(t),vp=l(n),m(So.$$.fragment,n),Tp=l(n),oi=a(n,"UL",{});var uM=s(oi);Ao=a(uM,"LI",{});var fh=s(Ao);hd=a(fh,"P",{});var mM=s(hd);Uu=i(mM,"Generation"),mM.forEach(t),Xu=l(fh),Zt=a(fh,"P",{});var Ai=s(Zt);Vu=i(Ai,"While generating the target text set the "),ud=a(Ai,"CODE",{});var fM=s(ud);Qu=i(fM,"decoder_start_token_id"),fM.forEach(t),Hu=i(Ai,` to the target language id. The following
example shows how to translate English to Romanian using the `),md=a(Ai,"EM",{});var gM=s(md);Ju=i(gM,"facebook/mbart-large-en-ro"),gM.forEach(t),Ku=i(Ai," model."),Ai.forEach(t),fh.forEach(t),uM.forEach(t),wp=l(n),m(Oo.$$.fragment,n),Mp=l(n),Yt=a(n,"H2",{class:!0});var gh=s(Yt);Sn=a(gh,"A",{id:!0,class:!0,href:!0});var _M=s(Sn);fd=a(_M,"SPAN",{});var kM=s(fd);m(Io.$$.fragment,kM),kM.forEach(t),_M.forEach(t),Zu=l(gh),gd=a(gh,"SPAN",{});var bM=s(gd);Yu=i(bM,"Overview of MBart-50"),bM.forEach(t),gh.forEach(t),xp=l(n),vt=a(n,"P",{});var Oi=s(vt);em=i(Oi,"MBart-50 was introduced in the "),No=a(Oi,"A",{href:!0,rel:!0});var yM=s(No);tm=i(yM,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),yM.forEach(t),nm=i(Oi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),_d=a(Oi,"EM",{});var vM=s(_d);om=i(vM,"mbart-large-cc25"),vM.forEach(t),am=i(Oi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Oi.forEach(t),zp=l(n),ai=a(n,"P",{});var TM=s(ai);sm=i(TM,"According to the abstract"),TM.forEach(t),qp=l(n),si=a(n,"P",{});var wM=s(si);kd=a(wM,"EM",{});var MM=s(kd);rm=i(MM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),MM.forEach(t),wM.forEach(t),Fp=l(n),en=a(n,"H3",{class:!0});var _h=s(en);An=a(_h,"A",{id:!0,class:!0,href:!0});var xM=s(An);bd=a(xM,"SPAN",{});var zM=s(bd);m(Do.$$.fragment,zM),zM.forEach(t),xM.forEach(t),im=l(_h),yd=a(_h,"SPAN",{});var qM=s(yd);dm=i(qM,"Training of MBart-50"),qM.forEach(t),_h.forEach(t),$p=l(n),et=a(n,"P",{});var Mo=s(et);lm=i(Mo,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),vd=a(Mo,"CODE",{});var FM=s(vd);cm=i(FM,"[lang_code] X [eos]"),FM.forEach(t),pm=i(Mo,", where "),Td=a(Mo,"CODE",{});var $M=s(Td);hm=i($M,"lang_code"),$M.forEach(t),um=i(Mo,` is source
language id for source text and target language id for target text, with `),wd=a(Mo,"CODE",{});var BM=s(wd);mm=i(BM,"X"),BM.forEach(t),fm=i(Mo,` being the source or target text
respectively.`),Mo.forEach(t),Bp=l(n),On=a(n,"P",{});var kh=s(On);gm=i(kh,"MBart-50 has its own tokenizer "),ri=a(kh,"A",{href:!0});var jM=s(ri);_m=i(jM,"MBart50Tokenizer"),jM.forEach(t),km=i(kh,"."),kh.forEach(t),jp=l(n),ii=a(n,"UL",{});var CM=s(ii);Md=a(CM,"LI",{});var EM=s(Md);bm=i(EM,"Supervised training"),EM.forEach(t),CM.forEach(t),Cp=l(n),m(Lo.$$.fragment,n),Ep=l(n),di=a(n,"UL",{});var PM=s(di);Go=a(PM,"LI",{});var bh=s(Go);xd=a(bh,"P",{});var SM=s(xd);ym=i(SM,"Generation"),SM.forEach(t),vm=l(bh),qe=a(bh,"P",{});var ot=s(qe);Tm=i(ot,"To generate using the mBART-50 multilingual translation models, "),zd=a(ot,"CODE",{});var AM=s(zd);wm=i(AM,"eos_token_id"),AM.forEach(t),Mm=i(ot,` is used as the
`),qd=a(ot,"CODE",{});var OM=s(qd);xm=i(OM,"decoder_start_token_id"),OM.forEach(t),zm=i(ot,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Fd=a(ot,"EM",{});var IM=s(Fd);qm=i(IM,"forced_bos_token_id"),IM.forEach(t),Fm=i(ot," parameter to the "),$d=a(ot,"EM",{});var NM=s($d);$m=i(NM,"generate"),NM.forEach(t),Bm=i(ot,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Bd=a(ot,"EM",{});var DM=s(Bd);jm=i(DM,"facebook/mbart-50-large-many-to-many"),DM.forEach(t),Cm=i(ot," checkpoint."),ot.forEach(t),bh.forEach(t),PM.forEach(t),Pp=l(n),m(Wo.$$.fragment,n),Sp=l(n),tn=a(n,"H2",{class:!0});var yh=s(tn);In=a(yh,"A",{id:!0,class:!0,href:!0});var LM=s(In);jd=a(LM,"SPAN",{});var GM=s(jd);m(Ro.$$.fragment,GM),GM.forEach(t),LM.forEach(t),Em=l(yh),Cd=a(yh,"SPAN",{});var WM=s(Cd);Pm=i(WM,"MBartConfig"),WM.forEach(t),yh.forEach(t),Ap=l(n),Fe=a(n,"DIV",{class:!0});var Et=s(Fe);m(Uo.$$.fragment,Et),Sm=l(Et),nn=a(Et,"P",{});var Ii=s(nn);Am=i(Ii,"This is the configuration class to store the configuration of a "),li=a(Ii,"A",{href:!0});var RM=s(li);Om=i(RM,"MBartModel"),RM.forEach(t),Im=i(Ii,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xo=a(Ii,"A",{href:!0,rel:!0});var UM=s(Xo);Nm=i(UM,"facebook/mbart-large-cc25"),UM.forEach(t),Dm=i(Ii," architecture."),Ii.forEach(t),Lm=l(Et),on=a(Et,"P",{});var Ni=s(on);Gm=i(Ni,"Configuration objects inherit from "),ci=a(Ni,"A",{href:!0});var XM=s(ci);Wm=i(XM,"PretrainedConfig"),XM.forEach(t),Rm=i(Ni,` and can be used to control the model outputs. Read the
documentation from `),pi=a(Ni,"A",{href:!0});var VM=s(pi);Um=i(VM,"PretrainedConfig"),VM.forEach(t),Xm=i(Ni," for more information."),Ni.forEach(t),Vm=l(Et),Ed=a(Et,"P",{});var QM=s(Ed);Qm=i(QM,"Example:"),QM.forEach(t),Hm=l(Et),m(Vo.$$.fragment,Et),Et.forEach(t),Op=l(n),an=a(n,"H2",{class:!0});var vh=s(an);Nn=a(vh,"A",{id:!0,class:!0,href:!0});var HM=s(Nn);Pd=a(HM,"SPAN",{});var JM=s(Pd);m(Qo.$$.fragment,JM),JM.forEach(t),HM.forEach(t),Jm=l(vh),Sd=a(vh,"SPAN",{});var KM=s(Sd);Km=i(KM,"MBartTokenizer"),KM.forEach(t),vh.forEach(t),Ip=l(n),G=a(n,"DIV",{class:!0});var me=s(G);m(Ho.$$.fragment,me),Zm=l(me),Ad=a(me,"P",{});var ZM=s(Ad);Ym=i(ZM,"Construct an MBART tokenizer."),ZM.forEach(t),ef=l(me),mt=a(me,"P",{});var xo=s(mt);tf=i(xo,"Adapted from "),hi=a(xo,"A",{href:!0});var YM=s(hi);nf=i(YM,"RobertaTokenizer"),YM.forEach(t),of=i(xo," and "),ui=a(xo,"A",{href:!0});var e2=s(ui);af=i(e2,"XLNetTokenizer"),e2.forEach(t),sf=i(xo,`. Based on
`),Jo=a(xo,"A",{href:!0,rel:!0});var t2=s(Jo);rf=i(t2,"SentencePiece"),t2.forEach(t),df=i(xo,"."),xo.forEach(t),lf=l(me),Ko=a(me,"P",{});var Th=s(Ko);cf=i(Th,"The tokenization method is "),Od=a(Th,"CODE",{});var n2=s(Od);pf=i(n2,"<tokens> <eos> <language code>"),n2.forEach(t),hf=i(Th," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Th.forEach(t),uf=l(me),Id=a(me,"P",{});var o2=s(Id);mf=i(o2,"Examples:"),o2.forEach(t),ff=l(me),m(Zo.$$.fragment,me),gf=l(me),Dn=a(me,"DIV",{class:!0});var wh=s(Dn);m(Yo.$$.fragment,wh),_f=l(wh),Nd=a(wh,"P",{});var a2=s(Nd);kf=i(a2,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),a2.forEach(t),wh.forEach(t),bf=l(me),tt=a(me,"DIV",{class:!0});var zo=s(tt);m(ea.$$.fragment,zo),yf=l(zo),ta=a(zo,"P",{});var Mh=s(ta);vf=i(Mh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Dd=a(Mh,"CODE",{});var s2=s(Dd);Tf=i(s2,"X"),s2.forEach(t),wf=i(Mh," represents the sequence:"),Mh.forEach(t),Mf=l(zo),na=a(zo,"UL",{});var xh=s(na);oa=a(xh,"LI",{});var zh=s(oa);Ld=a(zh,"CODE",{});var r2=s(Ld);xf=i(r2,"input_ids"),r2.forEach(t),zf=i(zh," (for encoder) "),Gd=a(zh,"CODE",{});var i2=s(Gd);qf=i(i2,"X [eos, src_lang_code]"),i2.forEach(t),zh.forEach(t),Ff=l(xh),aa=a(xh,"LI",{});var qh=s(aa);Wd=a(qh,"CODE",{});var d2=s(Wd);$f=i(d2,"decoder_input_ids"),d2.forEach(t),Bf=i(qh,": (for decoder) "),Rd=a(qh,"CODE",{});var l2=s(Rd);jf=i(l2,"X [eos, tgt_lang_code]"),l2.forEach(t),qh.forEach(t),xh.forEach(t),Cf=l(zo),Ud=a(zo,"P",{});var c2=s(Ud);Ef=i(c2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),c2.forEach(t),zo.forEach(t),me.forEach(t),Np=l(n),sn=a(n,"H2",{class:!0});var Fh=s(sn);Ln=a(Fh,"A",{id:!0,class:!0,href:!0});var p2=s(Ln);Xd=a(p2,"SPAN",{});var h2=s(Xd);m(sa.$$.fragment,h2),h2.forEach(t),p2.forEach(t),Pf=l(Fh),Vd=a(Fh,"SPAN",{});var u2=s(Vd);Sf=i(u2,"MBartTokenizerFast"),u2.forEach(t),Fh.forEach(t),Dp=l(n),P=a(n,"DIV",{class:!0});var Q=s(P);m(ra.$$.fragment,Q),Af=l(Q),rn=a(Q,"P",{});var Di=s(rn);Of=i(Di,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Qd=a(Di,"EM",{});var m2=s(Qd);If=i(m2,"tokenizers"),m2.forEach(t),Nf=i(Di,` library). Based on
`),ia=a(Di,"A",{href:!0,rel:!0});var f2=s(ia);Df=i(f2,"BPE"),f2.forEach(t),Lf=i(Di,"."),Di.forEach(t),Gf=l(Q),Tt=a(Q,"P",{});var ei=s(Tt);mi=a(ei,"A",{href:!0});var g2=s(mi);Wf=i(g2,"MBartTokenizerFast"),g2.forEach(t),Rf=i(ei," is a subclass of "),fi=a(ei,"A",{href:!0});var _2=s(fi);Uf=i(_2,"XLMRobertaTokenizerFast"),_2.forEach(t),Xf=i(ei,`. Refer to superclass
`),gi=a(ei,"A",{href:!0});var k2=s(gi);Vf=i(k2,"XLMRobertaTokenizerFast"),k2.forEach(t),Qf=i(ei,` for usage examples and documentation concerning the initialization parameters and other
methods.`),ei.forEach(t),Hf=l(Q),da=a(Q,"P",{});var $h=s(da);Jf=i($h,"The tokenization method is "),Hd=a($h,"CODE",{});var b2=s(Hd);Kf=i(b2,"<tokens> <eos> <language code>"),b2.forEach(t),Zf=i($h," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),$h.forEach(t),Yf=l(Q),Jd=a(Q,"P",{});var y2=s(Jd);eg=i(y2,"Examples:"),y2.forEach(t),tg=l(Q),m(la.$$.fragment,Q),ng=l(Q),Se=a(Q,"DIV",{class:!0});var Pt=s(Se);m(ca.$$.fragment,Pt),og=l(Pt),Kd=a(Pt,"P",{});var v2=s(Kd);ag=i(v2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),v2.forEach(t),sg=l(Pt),pa=a(Pt,"P",{});var Bh=s(pa);rg=i(Bh,"An MBART sequence has the following format, where "),Zd=a(Bh,"CODE",{});var T2=s(Zd);ig=i(T2,"X"),T2.forEach(t),dg=i(Bh," represents the sequence:"),Bh.forEach(t),lg=l(Pt),ha=a(Pt,"UL",{});var jh=s(ha);ua=a(jh,"LI",{});var Ch=s(ua);Yd=a(Ch,"CODE",{});var w2=s(Yd);cg=i(w2,"input_ids"),w2.forEach(t),pg=i(Ch," (for encoder) "),el=a(Ch,"CODE",{});var M2=s(el);hg=i(M2,"X [eos, src_lang_code]"),M2.forEach(t),Ch.forEach(t),ug=l(jh),ma=a(jh,"LI",{});var Eh=s(ma);tl=a(Eh,"CODE",{});var x2=s(tl);mg=i(x2,"decoder_input_ids"),x2.forEach(t),fg=i(Eh,": (for decoder) "),nl=a(Eh,"CODE",{});var z2=s(nl);gg=i(z2,"X [eos, tgt_lang_code]"),z2.forEach(t),Eh.forEach(t),jh.forEach(t),_g=l(Pt),ol=a(Pt,"P",{});var q2=s(ol);kg=i(q2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),q2.forEach(t),Pt.forEach(t),bg=l(Q),Gn=a(Q,"DIV",{class:!0});var Ph=s(Gn);m(fa.$$.fragment,Ph),yg=l(Ph),al=a(Ph,"P",{});var F2=s(al);vg=i(F2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),F2.forEach(t),Ph.forEach(t),Tg=l(Q),Wn=a(Q,"DIV",{class:!0});var Sh=s(Wn);m(ga.$$.fragment,Sh),wg=l(Sh),sl=a(Sh,"P",{});var $2=s(sl);Mg=i($2,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),$2.forEach(t),Sh.forEach(t),xg=l(Q),Rn=a(Q,"DIV",{class:!0});var Ah=s(Rn);m(_a.$$.fragment,Ah),zg=l(Ah),rl=a(Ah,"P",{});var B2=s(rl);qg=i(B2,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),B2.forEach(t),Ah.forEach(t),Q.forEach(t),Lp=l(n),dn=a(n,"H2",{class:!0});var Oh=s(dn);Un=a(Oh,"A",{id:!0,class:!0,href:!0});var j2=s(Un);il=a(j2,"SPAN",{});var C2=s(il);m(ka.$$.fragment,C2),C2.forEach(t),j2.forEach(t),Fg=l(Oh),dl=a(Oh,"SPAN",{});var E2=s(dl);$g=i(E2,"MBart50Tokenizer"),E2.forEach(t),Oh.forEach(t),Gp=l(n),S=a(n,"DIV",{class:!0});var H=s(S);m(ba.$$.fragment,H),Bg=l(H),ya=a(H,"P",{});var Ih=s(ya);jg=i(Ih,"Construct a MBart50 tokenizer. Based on "),va=a(Ih,"A",{href:!0,rel:!0});var P2=s(va);Cg=i(P2,"SentencePiece"),P2.forEach(t),Eg=i(Ih,"."),Ih.forEach(t),Pg=l(H),Ta=a(H,"P",{});var Nh=s(Ta);Sg=i(Nh,"This tokenizer inherits from "),_i=a(Nh,"A",{href:!0});var S2=s(_i);Ag=i(S2,"PreTrainedTokenizer"),S2.forEach(t),Og=i(Nh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Nh.forEach(t),Ig=l(H),ll=a(H,"P",{});var A2=s(ll);Ng=i(A2,"Examples:"),A2.forEach(t),Dg=l(H),m(wa.$$.fragment,H),Lg=l(H),nt=a(H,"DIV",{class:!0});var qo=s(nt);m(Ma.$$.fragment,qo),Gg=l(qo),xa=a(qo,"P",{});var Dh=s(xa);Wg=i(Dh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),cl=a(Dh,"CODE",{});var O2=s(cl);Rg=i(O2,"X"),O2.forEach(t),Ug=i(Dh," represents the sequence:"),Dh.forEach(t),Xg=l(qo),za=a(qo,"UL",{});var Lh=s(za);qa=a(Lh,"LI",{});var Gh=s(qa);pl=a(Gh,"CODE",{});var I2=s(pl);Vg=i(I2,"input_ids"),I2.forEach(t),Qg=i(Gh," (for encoder) "),hl=a(Gh,"CODE",{});var N2=s(hl);Hg=i(N2,"[src_lang_code] X [eos]"),N2.forEach(t),Gh.forEach(t),Jg=l(Lh),Fa=a(Lh,"LI",{});var Wh=s(Fa);ul=a(Wh,"CODE",{});var D2=s(ul);Kg=i(D2,"labels"),D2.forEach(t),Zg=i(Wh,": (for decoder) "),ml=a(Wh,"CODE",{});var L2=s(ml);Yg=i(L2,"[tgt_lang_code] X [eos]"),L2.forEach(t),Wh.forEach(t),Lh.forEach(t),e_=l(qo),fl=a(qo,"P",{});var G2=s(fl);t_=i(G2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),G2.forEach(t),qo.forEach(t),n_=l(H),Xn=a(H,"DIV",{class:!0});var Rh=s(Xn);m($a.$$.fragment,Rh),o_=l(Rh),gl=a(Rh,"P",{});var W2=s(gl);a_=i(W2,"Converts a sequence of tokens (strings for sub-words) in a single string."),W2.forEach(t),Rh.forEach(t),s_=l(H),Vn=a(H,"DIV",{class:!0});var Uh=s(Vn);m(Ba.$$.fragment,Uh),r_=l(Uh),ja=a(Uh,"P",{});var Xh=s(ja);i_=i(Xh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_l=a(Xh,"CODE",{});var R2=s(_l);d_=i(R2,"prepare_for_model"),R2.forEach(t),l_=i(Xh," method."),Xh.forEach(t),Uh.forEach(t),c_=l(H),Qn=a(H,"DIV",{class:!0});var Vh=s(Qn);m(Ca.$$.fragment,Vh),p_=l(Vh),kl=a(Vh,"P",{});var U2=s(kl);h_=i(U2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),U2.forEach(t),Vh.forEach(t),u_=l(H),Hn=a(H,"DIV",{class:!0});var Qh=s(Hn);m(Ea.$$.fragment,Qh),m_=l(Qh),bl=a(Qh,"P",{});var X2=s(bl);f_=i(X2,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),X2.forEach(t),Qh.forEach(t),H.forEach(t),Wp=l(n),ln=a(n,"H2",{class:!0});var Hh=s(ln);Jn=a(Hh,"A",{id:!0,class:!0,href:!0});var V2=s(Jn);yl=a(V2,"SPAN",{});var Q2=s(yl);m(Pa.$$.fragment,Q2),Q2.forEach(t),V2.forEach(t),g_=l(Hh),vl=a(Hh,"SPAN",{});var H2=s(vl);__=i(H2,"MBart50TokenizerFast"),H2.forEach(t),Hh.forEach(t),Rp=l(n),W=a(n,"DIV",{class:!0});var fe=s(W);m(Sa.$$.fragment,fe),k_=l(fe),cn=a(fe,"P",{});var Li=s(cn);b_=i(Li,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Tl=a(Li,"EM",{});var J2=s(Tl);y_=i(J2,"tokenizers"),J2.forEach(t),v_=i(Li,` library). Based on
`),Aa=a(Li,"A",{href:!0,rel:!0});var K2=s(Aa);T_=i(K2,"BPE"),K2.forEach(t),w_=i(Li,"."),Li.forEach(t),M_=l(fe),Oa=a(fe,"P",{});var Jh=s(Oa);x_=i(Jh,"This tokenizer inherits from "),ki=a(Jh,"A",{href:!0});var Z2=s(ki);z_=i(Z2,"PreTrainedTokenizerFast"),Z2.forEach(t),q_=i(Jh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Jh.forEach(t),F_=l(fe),wl=a(fe,"P",{});var Y2=s(wl);$_=i(Y2,"Examples:"),Y2.forEach(t),B_=l(fe),m(Ia.$$.fragment,fe),j_=l(fe),Ae=a(fe,"DIV",{class:!0});var St=s(Ae);m(Na.$$.fragment,St),C_=l(St),Ml=a(St,"P",{});var e1=s(Ml);E_=i(e1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),e1.forEach(t),P_=l(St),Da=a(St,"P",{});var Kh=s(Da);S_=i(Kh,"An MBART-50 sequence has the following format, where "),xl=a(Kh,"CODE",{});var t1=s(xl);A_=i(t1,"X"),t1.forEach(t),O_=i(Kh," represents the sequence:"),Kh.forEach(t),I_=l(St),La=a(St,"UL",{});var Zh=s(La);Ga=a(Zh,"LI",{});var Yh=s(Ga);zl=a(Yh,"CODE",{});var n1=s(zl);N_=i(n1,"input_ids"),n1.forEach(t),D_=i(Yh," (for encoder) "),ql=a(Yh,"CODE",{});var o1=s(ql);L_=i(o1,"[src_lang_code] X [eos]"),o1.forEach(t),Yh.forEach(t),G_=l(Zh),Wa=a(Zh,"LI",{});var eu=s(Wa);Fl=a(eu,"CODE",{});var a1=s(Fl);W_=i(a1,"labels"),a1.forEach(t),R_=i(eu,": (for decoder) "),$l=a(eu,"CODE",{});var s1=s($l);U_=i(s1,"[tgt_lang_code] X [eos]"),s1.forEach(t),eu.forEach(t),Zh.forEach(t),X_=l(St),Bl=a(St,"P",{});var r1=s(Bl);V_=i(r1,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),r1.forEach(t),St.forEach(t),Q_=l(fe),Kn=a(fe,"DIV",{class:!0});var tu=s(Kn);m(Ra.$$.fragment,tu),H_=l(tu),jl=a(tu,"P",{});var i1=s(jl);J_=i(i1,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),i1.forEach(t),tu.forEach(t),K_=l(fe),Zn=a(fe,"DIV",{class:!0});var nu=s(Zn);m(Ua.$$.fragment,nu),Z_=l(nu),Cl=a(nu,"P",{});var d1=s(Cl);Y_=i(d1,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),d1.forEach(t),nu.forEach(t),fe.forEach(t),Up=l(n),pn=a(n,"H2",{class:!0});var ou=s(pn);Yn=a(ou,"A",{id:!0,class:!0,href:!0});var l1=s(Yn);El=a(l1,"SPAN",{});var c1=s(El);m(Xa.$$.fragment,c1),c1.forEach(t),l1.forEach(t),ek=l(ou),Pl=a(ou,"SPAN",{});var p1=s(Pl);tk=i(p1,"MBartModel"),p1.forEach(t),ou.forEach(t),Xp=l(n),He=a(n,"DIV",{class:!0});var Fo=s(He);m(Va.$$.fragment,Fo),nk=l(Fo),Qa=a(Fo,"P",{});var au=s(Qa);ok=i(au,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=a(au,"A",{href:!0});var h1=s(bi);ak=i(h1,"PreTrainedModel"),h1.forEach(t),sk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),rk=l(Fo),Ha=a(Fo,"P",{});var su=s(Ha);ik=i(su,"This model is also a PyTorch "),Ja=a(su,"A",{href:!0,rel:!0});var u1=s(Ja);dk=i(u1,"torch.nn.Module"),u1.forEach(t),lk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),ck=l(Fo),Oe=a(Fo,"DIV",{class:!0});var At=s(Oe);m(Ka.$$.fragment,At),pk=l(At),hn=a(At,"P",{});var Gi=s(hn);hk=i(Gi,"The "),yi=a(Gi,"A",{href:!0});var m1=s(yi);uk=i(m1,"MBartModel"),m1.forEach(t),mk=i(Gi," forward method, overrides the "),Sl=a(Gi,"CODE",{});var f1=s(Sl);fk=i(f1,"__call__"),f1.forEach(t),gk=i(Gi," special method."),Gi.forEach(t),_k=l(At),m(eo.$$.fragment,At),kk=l(At),Al=a(At,"P",{});var g1=s(Al);bk=i(g1,"Example:"),g1.forEach(t),yk=l(At),m(Za.$$.fragment,At),At.forEach(t),Fo.forEach(t),Vp=l(n),un=a(n,"H2",{class:!0});var ru=s(un);to=a(ru,"A",{id:!0,class:!0,href:!0});var _1=s(to);Ol=a(_1,"SPAN",{});var k1=s(Ol);m(Ya.$$.fragment,k1),k1.forEach(t),_1.forEach(t),vk=l(ru),Il=a(ru,"SPAN",{});var b1=s(Il);Tk=i(b1,"MBartForConditionalGeneration"),b1.forEach(t),ru.forEach(t),Qp=l(n),Je=a(n,"DIV",{class:!0});var $o=s(Je);m(es.$$.fragment,$o),wk=l($o),ts=a($o,"P",{});var iu=s(ts);Mk=i(iu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vi=a(iu,"A",{href:!0});var y1=s(vi);xk=i(y1,"PreTrainedModel"),y1.forEach(t),zk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu.forEach(t),qk=l($o),ns=a($o,"P",{});var du=s(ns);Fk=i(du,"This model is also a PyTorch "),os=a(du,"A",{href:!0,rel:!0});var v1=s(os);$k=i(v1,"torch.nn.Module"),v1.forEach(t),Bk=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),jk=l($o),Y=a($o,"DIV",{class:!0});var Ge=s(Y);m(as.$$.fragment,Ge),Ck=l(Ge),mn=a(Ge,"P",{});var Wi=s(mn);Ek=i(Wi,"The "),Ti=a(Wi,"A",{href:!0});var T1=s(Ti);Pk=i(T1,"MBartForConditionalGeneration"),T1.forEach(t),Sk=i(Wi," forward method, overrides the "),Nl=a(Wi,"CODE",{});var w1=s(Nl);Ak=i(w1,"__call__"),w1.forEach(t),Ok=i(Wi," special method."),Wi.forEach(t),Ik=l(Ge),m(no.$$.fragment,Ge),Nk=l(Ge),Dl=a(Ge,"P",{});var M1=s(Dl);Dk=i(M1,"Translation example:"),M1.forEach(t),Lk=l(Ge),m(ss.$$.fragment,Ge),Gk=l(Ge),Ll=a(Ge,"P",{});var x1=s(Ll);Wk=i(x1,"Mask filling example:"),x1.forEach(t),Rk=l(Ge),m(rs.$$.fragment,Ge),Ge.forEach(t),$o.forEach(t),Hp=l(n),fn=a(n,"H2",{class:!0});var lu=s(fn);oo=a(lu,"A",{id:!0,class:!0,href:!0});var z1=s(oo);Gl=a(z1,"SPAN",{});var q1=s(Gl);m(is.$$.fragment,q1),q1.forEach(t),z1.forEach(t),Uk=l(lu),Wl=a(lu,"SPAN",{});var F1=s(Wl);Xk=i(F1,"MBartForQuestionAnswering"),F1.forEach(t),lu.forEach(t),Jp=l(n),$e=a(n,"DIV",{class:!0});var Ot=s($e);m(ds.$$.fragment,Ot),Vk=l(Ot),gn=a(Ot,"P",{});var Ri=s(gn);Qk=i(Ri,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rl=a(Ri,"CODE",{});var $1=s(Rl);Hk=i($1,"span start logits"),$1.forEach(t),Jk=i(Ri," and "),Ul=a(Ri,"CODE",{});var B1=s(Ul);Kk=i(B1,"span end logits"),B1.forEach(t),Zk=i(Ri,")."),Ri.forEach(t),Yk=l(Ot),ls=a(Ot,"P",{});var cu=s(ls);eb=i(cu,"This model inherits from "),wi=a(cu,"A",{href:!0});var j1=s(wi);tb=i(j1,"PreTrainedModel"),j1.forEach(t),nb=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),ob=l(Ot),cs=a(Ot,"P",{});var pu=s(cs);ab=i(pu,"This model is also a PyTorch "),ps=a(pu,"A",{href:!0,rel:!0});var C1=s(ps);sb=i(C1,"torch.nn.Module"),C1.forEach(t),rb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),ib=l(Ot),ue=a(Ot,"DIV",{class:!0});var at=s(ue);m(hs.$$.fragment,at),db=l(at),_n=a(at,"P",{});var Ui=s(_n);lb=i(Ui,"The "),Mi=a(Ui,"A",{href:!0});var E1=s(Mi);cb=i(E1,"MBartForQuestionAnswering"),E1.forEach(t),pb=i(Ui," forward method, overrides the "),Xl=a(Ui,"CODE",{});var P1=s(Xl);hb=i(P1,"__call__"),P1.forEach(t),ub=i(Ui," special method."),Ui.forEach(t),mb=l(at),m(ao.$$.fragment,at),fb=l(at),Vl=a(at,"P",{});var S1=s(Vl);gb=i(S1,"Example:"),S1.forEach(t),_b=l(at),m(us.$$.fragment,at),kb=l(at),m(ms.$$.fragment,at),at.forEach(t),Ot.forEach(t),Kp=l(n),kn=a(n,"H2",{class:!0});var hu=s(kn);so=a(hu,"A",{id:!0,class:!0,href:!0});var A1=s(so);Ql=a(A1,"SPAN",{});var O1=s(Ql);m(fs.$$.fragment,O1),O1.forEach(t),A1.forEach(t),bb=l(hu),Hl=a(hu,"SPAN",{});var I1=s(Hl);yb=i(I1,"MBartForSequenceClassification"),I1.forEach(t),hu.forEach(t),Zp=l(n),Be=a(n,"DIV",{class:!0});var It=s(Be);m(gs.$$.fragment,It),vb=l(It),Jl=a(It,"P",{});var N1=s(Jl);Tb=i(N1,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),N1.forEach(t),wb=l(It),_s=a(It,"P",{});var uu=s(_s);Mb=i(uu,"This model inherits from "),xi=a(uu,"A",{href:!0});var D1=s(xi);xb=i(D1,"PreTrainedModel"),D1.forEach(t),zb=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),qb=l(It),ks=a(It,"P",{});var mu=s(ks);Fb=i(mu,"This model is also a PyTorch "),bs=a(mu,"A",{href:!0,rel:!0});var L1=s(bs);$b=i(L1,"torch.nn.Module"),L1.forEach(t),Bb=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),jb=l(It),L=a(It,"DIV",{class:!0});var ne=s(L);m(ys.$$.fragment,ne),Cb=l(ne),bn=a(ne,"P",{});var Xi=s(bn);Eb=i(Xi,"The "),zi=a(Xi,"A",{href:!0});var G1=s(zi);Pb=i(G1,"MBartForSequenceClassification"),G1.forEach(t),Sb=i(Xi," forward method, overrides the "),Kl=a(Xi,"CODE",{});var W1=s(Kl);Ab=i(W1,"__call__"),W1.forEach(t),Ob=i(Xi," special method."),Xi.forEach(t),Ib=l(ne),m(ro.$$.fragment,ne),Nb=l(ne),Zl=a(ne,"P",{});var R1=s(Zl);Db=i(R1,"Example of single-label classification:"),R1.forEach(t),Lb=l(ne),m(vs.$$.fragment,ne),Gb=l(ne),m(Ts.$$.fragment,ne),Wb=l(ne),Yl=a(ne,"P",{});var U1=s(Yl);Rb=i(U1,"Example of multi-label classification:"),U1.forEach(t),Ub=l(ne),m(ws.$$.fragment,ne),Xb=l(ne),m(Ms.$$.fragment,ne),ne.forEach(t),It.forEach(t),Yp=l(n),yn=a(n,"H2",{class:!0});var fu=s(yn);io=a(fu,"A",{id:!0,class:!0,href:!0});var X1=s(io);ec=a(X1,"SPAN",{});var V1=s(ec);m(xs.$$.fragment,V1),V1.forEach(t),X1.forEach(t),Vb=l(fu),tc=a(fu,"SPAN",{});var Q1=s(tc);Qb=i(Q1,"MBartForCausalLM"),Q1.forEach(t),fu.forEach(t),eh=l(n),vn=a(n,"DIV",{class:!0});var gu=s(vn);m(zs.$$.fragment,gu),Hb=l(gu),wt=a(gu,"DIV",{class:!0});var Vi=s(wt);m(qs.$$.fragment,Vi),Jb=l(Vi),nc=a(Vi,"P",{});var H1=s(nc);Kb=i(H1,"Example:"),H1.forEach(t),Zb=l(Vi),m(Fs.$$.fragment,Vi),Vi.forEach(t),gu.forEach(t),th=l(n),Tn=a(n,"H2",{class:!0});var _u=s(Tn);lo=a(_u,"A",{id:!0,class:!0,href:!0});var J1=s(lo);oc=a(J1,"SPAN",{});var K1=s(oc);m($s.$$.fragment,K1),K1.forEach(t),J1.forEach(t),Yb=l(_u),ac=a(_u,"SPAN",{});var Z1=s(ac);ey=i(Z1,"TFMBartModel"),Z1.forEach(t),_u.forEach(t),nh=l(n),je=a(n,"DIV",{class:!0});var Nt=s(je);m(Bs.$$.fragment,Nt),ty=l(Nt),js=a(Nt,"P",{});var ku=s(js);ny=i(ku,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(ku,"A",{href:!0});var Y1=s(qi);oy=i(Y1,"TFPreTrainedModel"),Y1.forEach(t),ay=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),sy=l(Nt),Cs=a(Nt,"P",{});var bu=s(Cs);ry=i(bu,"This model is also a "),Es=a(bu,"A",{href:!0,rel:!0});var ex=s(Es);iy=i(ex,"tf.keras.Model"),ex.forEach(t),dy=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),ly=l(Nt),m(co.$$.fragment,Nt),cy=l(Nt),Ie=a(Nt,"DIV",{class:!0});var Dt=s(Ie);m(Ps.$$.fragment,Dt),py=l(Dt),wn=a(Dt,"P",{});var Qi=s(wn);hy=i(Qi,"The "),Fi=a(Qi,"A",{href:!0});var tx=s(Fi);uy=i(tx,"TFMBartModel"),tx.forEach(t),my=i(Qi," forward method, overrides the "),sc=a(Qi,"CODE",{});var nx=s(sc);fy=i(nx,"__call__"),nx.forEach(t),gy=i(Qi," special method."),Qi.forEach(t),_y=l(Dt),m(po.$$.fragment,Dt),ky=l(Dt),rc=a(Dt,"P",{});var ox=s(rc);by=i(ox,"Example:"),ox.forEach(t),yy=l(Dt),m(Ss.$$.fragment,Dt),Dt.forEach(t),Nt.forEach(t),oh=l(n),Mn=a(n,"H2",{class:!0});var yu=s(Mn);ho=a(yu,"A",{id:!0,class:!0,href:!0});var ax=s(ho);ic=a(ax,"SPAN",{});var sx=s(ic);m(As.$$.fragment,sx),sx.forEach(t),ax.forEach(t),vy=l(yu),dc=a(yu,"SPAN",{});var rx=s(dc);Ty=i(rx,"TFMBartForConditionalGeneration"),rx.forEach(t),yu.forEach(t),ah=l(n),Ce=a(n,"DIV",{class:!0});var Lt=s(Ce);m(Os.$$.fragment,Lt),wy=l(Lt),Is=a(Lt,"P",{});var vu=s(Is);My=i(vu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(vu,"A",{href:!0});var ix=s($i);xy=i(ix,"TFPreTrainedModel"),ix.forEach(t),zy=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),qy=l(Lt),Ns=a(Lt,"P",{});var Tu=s(Ns);Fy=i(Tu,"This model is also a "),Ds=a(Tu,"A",{href:!0,rel:!0});var dx=s(Ds);$y=i(dx,"tf.keras.Model"),dx.forEach(t),By=i(Tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tu.forEach(t),jy=l(Lt),m(uo.$$.fragment,Lt),Cy=l(Lt),ee=a(Lt,"DIV",{class:!0});var We=s(ee);m(Ls.$$.fragment,We),Ey=l(We),xn=a(We,"P",{});var Hi=s(xn);Py=i(Hi,"The "),Bi=a(Hi,"A",{href:!0});var lx=s(Bi);Sy=i(lx,"TFMBartForConditionalGeneration"),lx.forEach(t),Ay=i(Hi," forward method, overrides the "),lc=a(Hi,"CODE",{});var cx=s(lc);Oy=i(cx,"__call__"),cx.forEach(t),Iy=i(Hi," special method."),Hi.forEach(t),Ny=l(We),m(mo.$$.fragment,We),Dy=l(We),cc=a(We,"P",{});var px=s(cc);Ly=i(px,"Summarization example:"),px.forEach(t),Gy=l(We),m(Gs.$$.fragment,We),Wy=l(We),pc=a(We,"P",{});var hx=s(pc);Ry=i(hx,"Mask filling example:"),hx.forEach(t),Uy=l(We),m(Ws.$$.fragment,We),We.forEach(t),Lt.forEach(t),sh=l(n),zn=a(n,"H2",{class:!0});var wu=s(zn);fo=a(wu,"A",{id:!0,class:!0,href:!0});var ux=s(fo);hc=a(ux,"SPAN",{});var mx=s(hc);m(Rs.$$.fragment,mx),mx.forEach(t),ux.forEach(t),Xy=l(wu),uc=a(wu,"SPAN",{});var fx=s(uc);Vy=i(fx,"FlaxMBartModel"),fx.forEach(t),wu.forEach(t),rh=l(n),R=a(n,"DIV",{class:!0});var ge=s(R);m(Us.$$.fragment,ge),Qy=l(ge),Xs=a(ge,"P",{});var Mu=s(Xs);Hy=i(Mu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ji=a(Mu,"A",{href:!0});var gx=s(ji);Jy=i(gx,"FlaxPreTrainedModel"),gx.forEach(t),Ky=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),Zy=l(ge),Vs=a(ge,"P",{});var xu=s(Vs);Yy=i(xu,`This model is also a Flax Linen
`),Qs=a(xu,"A",{href:!0,rel:!0});var _x=s(Qs);ev=i(_x,"flax.nn.Module"),_x.forEach(t),tv=i(xu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xu.forEach(t),nv=l(ge),mc=a(ge,"P",{});var kx=s(mc);ov=i(kx,"Finally, this model supports inherent JAX features such as:"),kx.forEach(t),av=l(ge),ft=a(ge,"UL",{});var Bo=s(ft);fc=a(Bo,"LI",{});var bx=s(fc);Hs=a(bx,"A",{href:!0,rel:!0});var yx=s(Hs);sv=i(yx,"Just-In-Time (JIT) compilation"),yx.forEach(t),bx.forEach(t),rv=l(Bo),gc=a(Bo,"LI",{});var vx=s(gc);Js=a(vx,"A",{href:!0,rel:!0});var Tx=s(Js);iv=i(Tx,"Automatic Differentiation"),Tx.forEach(t),vx.forEach(t),dv=l(Bo),_c=a(Bo,"LI",{});var wx=s(_c);Ks=a(wx,"A",{href:!0,rel:!0});var Mx=s(Ks);lv=i(Mx,"Vectorization"),Mx.forEach(t),wx.forEach(t),cv=l(Bo),kc=a(Bo,"LI",{});var xx=s(kc);Zs=a(xx,"A",{href:!0,rel:!0});var zx=s(Zs);pv=i(zx,"Parallelization"),zx.forEach(t),xx.forEach(t),Bo.forEach(t),hv=l(ge),Ne=a(ge,"DIV",{class:!0});var Gt=s(Ne);m(Ys.$$.fragment,Gt),uv=l(Gt),qn=a(Gt,"P",{});var Ji=s(qn);mv=i(Ji,"The "),bc=a(Ji,"CODE",{});var qx=s(bc);fv=i(qx,"FlaxMBartPreTrainedModel"),qx.forEach(t),gv=i(Ji,"forward method, overrides the "),yc=a(Ji,"CODE",{});var Fx=s(yc);_v=i(Fx,"__call__"),Fx.forEach(t),kv=i(Ji," special method."),Ji.forEach(t),bv=l(Gt),m(go.$$.fragment,Gt),yv=l(Gt),vc=a(Gt,"P",{});var $x=s(vc);vv=i($x,"Example:"),$x.forEach(t),Tv=l(Gt),m(er.$$.fragment,Gt),Gt.forEach(t),wv=l(ge),Mt=a(ge,"DIV",{class:!0});var Ki=s(Mt);m(tr.$$.fragment,Ki),Mv=l(Ki),Tc=a(Ki,"P",{});var Bx=s(Tc);xv=i(Bx,"Example:"),Bx.forEach(t),zv=l(Ki),m(nr.$$.fragment,Ki),Ki.forEach(t),qv=l(ge),xt=a(ge,"DIV",{class:!0});var Zi=s(xt);m(or.$$.fragment,Zi),Fv=l(Zi),wc=a(Zi,"P",{});var jx=s(wc);$v=i(jx,"Example:"),jx.forEach(t),Bv=l(Zi),m(ar.$$.fragment,Zi),Zi.forEach(t),ge.forEach(t),ih=l(n),Fn=a(n,"H2",{class:!0});var zu=s(Fn);_o=a(zu,"A",{id:!0,class:!0,href:!0});var Cx=s(_o);Mc=a(Cx,"SPAN",{});var Ex=s(Mc);m(sr.$$.fragment,Ex),Ex.forEach(t),Cx.forEach(t),jv=l(zu),xc=a(zu,"SPAN",{});var Px=s(xc);Cv=i(Px,"FlaxMBartForConditionalGeneration"),Px.forEach(t),zu.forEach(t),dh=l(n),U=a(n,"DIV",{class:!0});var _e=s(U);m(rr.$$.fragment,_e),Ev=l(_e),ir=a(_e,"P",{});var qu=s(ir);Pv=i(qu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ci=a(qu,"A",{href:!0});var Sx=s(Ci);Sv=i(Sx,"FlaxPreTrainedModel"),Sx.forEach(t),Av=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),Ov=l(_e),dr=a(_e,"P",{});var Fu=s(dr);Iv=i(Fu,`This model is also a Flax Linen
`),lr=a(Fu,"A",{href:!0,rel:!0});var Ax=s(lr);Nv=i(Ax,"flax.nn.Module"),Ax.forEach(t),Dv=i(Fu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fu.forEach(t),Lv=l(_e),zc=a(_e,"P",{});var Ox=s(zc);Gv=i(Ox,"Finally, this model supports inherent JAX features such as:"),Ox.forEach(t),Wv=l(_e),gt=a(_e,"UL",{});var jo=s(gt);qc=a(jo,"LI",{});var Ix=s(qc);cr=a(Ix,"A",{href:!0,rel:!0});var Nx=s(cr);Rv=i(Nx,"Just-In-Time (JIT) compilation"),Nx.forEach(t),Ix.forEach(t),Uv=l(jo),Fc=a(jo,"LI",{});var Dx=s(Fc);pr=a(Dx,"A",{href:!0,rel:!0});var Lx=s(pr);Xv=i(Lx,"Automatic Differentiation"),Lx.forEach(t),Dx.forEach(t),Vv=l(jo),$c=a(jo,"LI",{});var Gx=s($c);hr=a(Gx,"A",{href:!0,rel:!0});var Wx=s(hr);Qv=i(Wx,"Vectorization"),Wx.forEach(t),Gx.forEach(t),Hv=l(jo),Bc=a(jo,"LI",{});var Rx=s(Bc);ur=a(Rx,"A",{href:!0,rel:!0});var Ux=s(ur);Jv=i(Ux,"Parallelization"),Ux.forEach(t),Rx.forEach(t),jo.forEach(t),Kv=l(_e),te=a(_e,"DIV",{class:!0});var Re=s(te);m(mr.$$.fragment,Re),Zv=l(Re),$n=a(Re,"P",{});var Yi=s($n);Yv=i(Yi,"The "),jc=a(Yi,"CODE",{});var Xx=s(jc);eT=i(Xx,"FlaxMBartPreTrainedModel"),Xx.forEach(t),tT=i(Yi,"forward method, overrides the "),Cc=a(Yi,"CODE",{});var Vx=s(Cc);nT=i(Vx,"__call__"),Vx.forEach(t),oT=i(Yi," special method."),Yi.forEach(t),aT=l(Re),m(ko.$$.fragment,Re),sT=l(Re),Ec=a(Re,"P",{});var Qx=s(Ec);rT=i(Qx,"Summarization example:"),Qx.forEach(t),iT=l(Re),m(fr.$$.fragment,Re),dT=l(Re),Pc=a(Re,"P",{});var Hx=s(Pc);lT=i(Hx,"Mask filling example:"),Hx.forEach(t),cT=l(Re),m(gr.$$.fragment,Re),Re.forEach(t),pT=l(_e),zt=a(_e,"DIV",{class:!0});var ed=s(zt);m(_r.$$.fragment,ed),hT=l(ed),Sc=a(ed,"P",{});var Jx=s(Sc);uT=i(Jx,"Example:"),Jx.forEach(t),mT=l(ed),m(kr.$$.fragment,ed),ed.forEach(t),fT=l(_e),qt=a(_e,"DIV",{class:!0});var td=s(qt);m(br.$$.fragment,td),gT=l(td),Ac=a(td,"P",{});var Kx=s(Ac);_T=i(Kx,"Example:"),Kx.forEach(t),kT=l(td),m(yr.$$.fragment,td),td.forEach(t),_e.forEach(t),lh=l(n),Bn=a(n,"H2",{class:!0});var $u=s(Bn);bo=a($u,"A",{id:!0,class:!0,href:!0});var Zx=s(bo);Oc=a(Zx,"SPAN",{});var Yx=s(Oc);m(vr.$$.fragment,Yx),Yx.forEach(t),Zx.forEach(t),bT=l($u),Ic=a($u,"SPAN",{});var ez=s(Ic);yT=i(ez,"FlaxMBartForSequenceClassification"),ez.forEach(t),$u.forEach(t),ch=l(n),O=a(n,"DIV",{class:!0});var oe=s(O);m(Tr.$$.fragment,oe),vT=l(oe),Nc=a(oe,"P",{});var tz=s(Nc);TT=i(tz,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),tz.forEach(t),wT=l(oe),wr=a(oe,"P",{});var Bu=s(wr);MT=i(Bu,"This model inherits from "),Ei=a(Bu,"A",{href:!0});var nz=s(Ei);xT=i(nz,"FlaxPreTrainedModel"),nz.forEach(t),zT=i(Bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu.forEach(t),qT=l(oe),Mr=a(oe,"P",{});var ju=s(Mr);FT=i(ju,`This model is also a Flax Linen
`),xr=a(ju,"A",{href:!0,rel:!0});var oz=s(xr);$T=i(oz,"flax.nn.Module"),oz.forEach(t),BT=i(ju,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ju.forEach(t),jT=l(oe),Dc=a(oe,"P",{});var az=s(Dc);CT=i(az,"Finally, this model supports inherent JAX features such as:"),az.forEach(t),ET=l(oe),_t=a(oe,"UL",{});var Co=s(_t);Lc=a(Co,"LI",{});var sz=s(Lc);zr=a(sz,"A",{href:!0,rel:!0});var rz=s(zr);PT=i(rz,"Just-In-Time (JIT) compilation"),rz.forEach(t),sz.forEach(t),ST=l(Co),Gc=a(Co,"LI",{});var iz=s(Gc);qr=a(iz,"A",{href:!0,rel:!0});var dz=s(qr);AT=i(dz,"Automatic Differentiation"),dz.forEach(t),iz.forEach(t),OT=l(Co),Wc=a(Co,"LI",{});var lz=s(Wc);Fr=a(lz,"A",{href:!0,rel:!0});var cz=s(Fr);IT=i(cz,"Vectorization"),cz.forEach(t),lz.forEach(t),NT=l(Co),Rc=a(Co,"LI",{});var pz=s(Rc);$r=a(pz,"A",{href:!0,rel:!0});var hz=s($r);DT=i(hz,"Parallelization"),hz.forEach(t),pz.forEach(t),Co.forEach(t),LT=l(oe),De=a(oe,"DIV",{class:!0});var Wt=s(De);m(Br.$$.fragment,Wt),GT=l(Wt),jn=a(Wt,"P",{});var nd=s(jn);WT=i(nd,"The "),Uc=a(nd,"CODE",{});var uz=s(Uc);RT=i(uz,"FlaxMBartPreTrainedModel"),uz.forEach(t),UT=i(nd,"forward method, overrides the "),Xc=a(nd,"CODE",{});var mz=s(Xc);XT=i(mz,"__call__"),mz.forEach(t),VT=i(nd," special method."),nd.forEach(t),QT=l(Wt),m(yo.$$.fragment,Wt),HT=l(Wt),Vc=a(Wt,"P",{});var fz=s(Vc);JT=i(fz,"Example:"),fz.forEach(t),KT=l(Wt),m(jr.$$.fragment,Wt),Wt.forEach(t),ZT=l(oe),Ft=a(oe,"DIV",{class:!0});var od=s(Ft);m(Cr.$$.fragment,od),YT=l(od),Qc=a(od,"P",{});var gz=s(Qc);ew=i(gz,"Example:"),gz.forEach(t),tw=l(od),m(Er.$$.fragment,od),od.forEach(t),nw=l(oe),$t=a(oe,"DIV",{class:!0});var ad=s($t);m(Pr.$$.fragment,ad),ow=l(ad),Hc=a(ad,"P",{});var _z=s(Hc);aw=i(_z,"Example:"),_z.forEach(t),sw=l(ad),m(Sr.$$.fragment,ad),ad.forEach(t),oe.forEach(t),ph=l(n),Cn=a(n,"H2",{class:!0});var Cu=s(Cn);vo=a(Cu,"A",{id:!0,class:!0,href:!0});var kz=s(vo);Jc=a(kz,"SPAN",{});var bz=s(Jc);m(Ar.$$.fragment,bz),bz.forEach(t),kz.forEach(t),rw=l(Cu),Kc=a(Cu,"SPAN",{});var yz=s(Kc);iw=i(yz,"FlaxMBartForQuestionAnswering"),yz.forEach(t),Cu.forEach(t),hh=l(n),I=a(n,"DIV",{class:!0});var ae=s(I);m(Or.$$.fragment,ae),dw=l(ae),En=a(ae,"P",{});var sd=s(En);lw=i(sd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zc=a(sd,"CODE",{});var vz=s(Zc);cw=i(vz,"span start logits"),vz.forEach(t),pw=i(sd," and "),Yc=a(sd,"CODE",{});var Tz=s(Yc);hw=i(Tz,"span end logits"),Tz.forEach(t),uw=i(sd,")."),sd.forEach(t),mw=l(ae),Ir=a(ae,"P",{});var Eu=s(Ir);fw=i(Eu,"This model inherits from "),Pi=a(Eu,"A",{href:!0});var wz=s(Pi);gw=i(wz,"FlaxPreTrainedModel"),wz.forEach(t),_w=i(Eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu.forEach(t),kw=l(ae),Nr=a(ae,"P",{});var Pu=s(Nr);bw=i(Pu,`This model is also a Flax Linen
`),Dr=a(Pu,"A",{href:!0,rel:!0});var Mz=s(Dr);yw=i(Mz,"flax.nn.Module"),Mz.forEach(t),vw=i(Pu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pu.forEach(t),Tw=l(ae),ep=a(ae,"P",{});var xz=s(ep);ww=i(xz,"Finally, this model supports inherent JAX features such as:"),xz.forEach(t),Mw=l(ae),kt=a(ae,"UL",{});var Eo=s(kt);tp=a(Eo,"LI",{});var zz=s(tp);Lr=a(zz,"A",{href:!0,rel:!0});var qz=s(Lr);xw=i(qz,"Just-In-Time (JIT) compilation"),qz.forEach(t),zz.forEach(t),zw=l(Eo),np=a(Eo,"LI",{});var Fz=s(np);Gr=a(Fz,"A",{href:!0,rel:!0});var $z=s(Gr);qw=i($z,"Automatic Differentiation"),$z.forEach(t),Fz.forEach(t),Fw=l(Eo),op=a(Eo,"LI",{});var Bz=s(op);Wr=a(Bz,"A",{href:!0,rel:!0});var jz=s(Wr);$w=i(jz,"Vectorization"),jz.forEach(t),Bz.forEach(t),Bw=l(Eo),ap=a(Eo,"LI",{});var Cz=s(ap);Rr=a(Cz,"A",{href:!0,rel:!0});var Ez=s(Rr);jw=i(Ez,"Parallelization"),Ez.forEach(t),Cz.forEach(t),Eo.forEach(t),Cw=l(ae),Le=a(ae,"DIV",{class:!0});var Rt=s(Le);m(Ur.$$.fragment,Rt),Ew=l(Rt),Pn=a(Rt,"P",{});var rd=s(Pn);Pw=i(rd,"The "),sp=a(rd,"CODE",{});var Pz=s(sp);Sw=i(Pz,"FlaxMBartPreTrainedModel"),Pz.forEach(t),Aw=i(rd,"forward method, overrides the "),rp=a(rd,"CODE",{});var Sz=s(rp);Ow=i(Sz,"__call__"),Sz.forEach(t),Iw=i(rd," special method."),rd.forEach(t),Nw=l(Rt),m(To.$$.fragment,Rt),Dw=l(Rt),ip=a(Rt,"P",{});var Az=s(ip);Lw=i(Az,"Example:"),Az.forEach(t),Gw=l(Rt),m(Xr.$$.fragment,Rt),Rt.forEach(t),Ww=l(ae),Bt=a(ae,"DIV",{class:!0});var id=s(Bt);m(Vr.$$.fragment,id),Rw=l(id),dp=a(id,"P",{});var Oz=s(dp);Uw=i(Oz,"Example:"),Oz.forEach(t),Xw=l(id),m(Qr.$$.fragment,id),id.forEach(t),Vw=l(ae),jt=a(ae,"DIV",{class:!0});var dd=s(jt);m(Hr.$$.fragment,dd),Qw=l(dd),lp=a(dd,"P",{});var Iz=s(lp);Hw=i(Iz,"Example:"),Iz.forEach(t),Jw=l(dd),m(Jr.$$.fragment,dd),dd.forEach(t),ae.forEach(t),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(oq)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(be,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(be,"rel","nofollow"),c(N,"id","overview-of-mbart"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview-of-mbart"),c(J,"class","relative group"),c(K,"href","https://arxiv.org/abs/2001.08210"),c(K,"rel","nofollow"),c(we,"href","https://huggingface.co/valhalla"),c(we,"rel","nofollow"),c(Me,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Me,"rel","nofollow"),c(B,"id","training-of-mbart"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#training-of-mbart"),c(w,"class","relative group"),c(Po,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"),c(ti,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Sn,"id","overview-of-mbart50"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(No,"href","https://arxiv.org/abs/2008.00401"),c(No,"rel","nofollow"),c(An,"id","training-of-mbart50"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#training-of-mbart50"),c(en,"class","relative group"),c(ri,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(In,"id","transformers.MBartConfig"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.MBartConfig"),c(tn,"class","relative group"),c(li,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),c(Xo,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xo,"rel","nofollow"),c(ci,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(pi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fe,"class","docstring"),c(Nn,"id","transformers.MBartTokenizer"),c(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nn,"href","#transformers.MBartTokenizer"),c(an,"class","relative group"),c(hi,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ui,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jo,"href","https://github.com/google/sentencepiece"),c(Jo,"rel","nofollow"),c(Dn,"class","docstring"),c(tt,"class","docstring"),c(G,"class","docstring"),c(Ln,"id","transformers.MBartTokenizerFast"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.MBartTokenizerFast"),c(sn,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(mi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(fi,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(gi,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Se,"class","docstring"),c(Gn,"class","docstring"),c(Wn,"class","docstring"),c(Rn,"class","docstring"),c(P,"class","docstring"),c(Un,"id","transformers.MBart50Tokenizer"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.MBart50Tokenizer"),c(dn,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(_i,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(nt,"class","docstring"),c(Xn,"class","docstring"),c(Vn,"class","docstring"),c(Qn,"class","docstring"),c(Hn,"class","docstring"),c(S,"class","docstring"),c(Jn,"id","transformers.MBart50TokenizerFast"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.MBart50TokenizerFast"),c(ln,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(ki,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ae,"class","docstring"),c(Kn,"class","docstring"),c(Zn,"class","docstring"),c(W,"class","docstring"),c(Yn,"id","transformers.MBartModel"),c(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yn,"href","#transformers.MBartModel"),c(pn,"class","relative group"),c(bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(yi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartModel"),c(Oe,"class","docstring"),c(He,"class","docstring"),c(to,"id","transformers.MBartForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.MBartForConditionalGeneration"),c(un,"class","relative group"),c(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(os,"rel","nofollow"),c(Ti,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Y,"class","docstring"),c(Je,"class","docstring"),c(oo,"id","transformers.MBartForQuestionAnswering"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.MBartForQuestionAnswering"),c(fn,"class","relative group"),c(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(Mi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(ue,"class","docstring"),c($e,"class","docstring"),c(so,"id","transformers.MBartForSequenceClassification"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.MBartForSequenceClassification"),c(kn,"class","relative group"),c(xi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bs,"rel","nofollow"),c(zi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(L,"class","docstring"),c(Be,"class","docstring"),c(io,"id","transformers.MBartForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.MBartForCausalLM"),c(yn,"class","relative group"),c(wt,"class","docstring"),c(vn,"class","docstring"),c(lo,"id","transformers.TFMBartModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.TFMBartModel"),c(Tn,"class","relative group"),c(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Es,"rel","nofollow"),c(Fi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(ho,"id","transformers.TFMBartForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFMBartForConditionalGeneration"),c(Mn,"class","relative group"),c($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ds,"rel","nofollow"),c(Bi,"href","/docs/transformers/main/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Ce,"class","docstring"),c(fo,"id","transformers.FlaxMBartModel"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.FlaxMBartModel"),c(zn,"class","relative group"),c(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Qs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Hs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(xt,"class","docstring"),c(R,"class","docstring"),c(_o,"id","transformers.FlaxMBartForConditionalGeneration"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Fn,"class","relative group"),c(Ci,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(te,"class","docstring"),c(zt,"class","docstring"),c(qt,"class","docstring"),c(U,"class","docstring"),c(bo,"id","transformers.FlaxMBartForSequenceClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxMBartForSequenceClassification"),c(Bn,"class","relative group"),c(Ei,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(zr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c($r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($r,"rel","nofollow"),c(De,"class","docstring"),c(Ft,"class","docstring"),c($t,"class","docstring"),c(O,"class","docstring"),c(vo,"id","transformers.FlaxMBartForQuestionAnswering"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Cn,"class","relative group"),c(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gr,"rel","nofollow"),c(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Rr,"rel","nofollow"),c(Le,"class","docstring"),c(Bt,"class","docstring"),c(jt,"class","docstring"),c(I,"class","docstring")},m(n,p){e(document.head,b),h(n,z,p),h(n,v,p),e(v,M),e(M,x),f(T,x,null),e(v,y),e(v,F),e(F,rt),h(n,Ee,p),h(n,j,p),e(j,Ue),e(Ue,ke),e(j,it),e(j,be),e(be,ye),e(j,dt),h(n,Ke,p),h(n,J,p),e(J,N),e(N,Xe),f(se,Xe,null),e(J,E),e(J,A),e(A,lt),h(n,pe,p),h(n,he,p),e(he,ct),e(he,K),e(K,pt),e(he,ht),h(n,D,p),h(n,Pe,p),e(Pe,ve),h(n,Ze,p),h(n,re,p),e(re,Te),e(re,we),e(we,ut),e(re,ie),e(re,Me),e(Me,xe),h(n,Ye,p),h(n,w,p),e(w,B),e(B,ze),f(Ve,ze,null),e(w,Ut),e(w,Z),e(Z,Xt),h(n,bt,p),h(n,V,p),e(V,de),e(V,le),e(le,Vt),e(V,Qt),e(V,ce),e(ce,Ht),e(V,Jt),e(V,Qe),e(Qe,Kt),e(V,Su),e(V,ld),e(ld,Au),e(V,Ou),h(n,bp,p),h(n,yt,p),e(yt,Iu),e(yt,Po),e(Po,cd),e(cd,Nu),e(Po,Du),e(yt,Lu),e(yt,ti),e(ti,Gu),e(yt,Wu),h(n,yp,p),h(n,ni,p),e(ni,pd),e(pd,Ru),h(n,vp,p),f(So,n,p),h(n,Tp,p),h(n,oi,p),e(oi,Ao),e(Ao,hd),e(hd,Uu),e(Ao,Xu),e(Ao,Zt),e(Zt,Vu),e(Zt,ud),e(ud,Qu),e(Zt,Hu),e(Zt,md),e(md,Ju),e(Zt,Ku),h(n,wp,p),f(Oo,n,p),h(n,Mp,p),h(n,Yt,p),e(Yt,Sn),e(Sn,fd),f(Io,fd,null),e(Yt,Zu),e(Yt,gd),e(gd,Yu),h(n,xp,p),h(n,vt,p),e(vt,em),e(vt,No),e(No,tm),e(vt,nm),e(vt,_d),e(_d,om),e(vt,am),h(n,zp,p),h(n,ai,p),e(ai,sm),h(n,qp,p),h(n,si,p),e(si,kd),e(kd,rm),h(n,Fp,p),h(n,en,p),e(en,An),e(An,bd),f(Do,bd,null),e(en,im),e(en,yd),e(yd,dm),h(n,$p,p),h(n,et,p),e(et,lm),e(et,vd),e(vd,cm),e(et,pm),e(et,Td),e(Td,hm),e(et,um),e(et,wd),e(wd,mm),e(et,fm),h(n,Bp,p),h(n,On,p),e(On,gm),e(On,ri),e(ri,_m),e(On,km),h(n,jp,p),h(n,ii,p),e(ii,Md),e(Md,bm),h(n,Cp,p),f(Lo,n,p),h(n,Ep,p),h(n,di,p),e(di,Go),e(Go,xd),e(xd,ym),e(Go,vm),e(Go,qe),e(qe,Tm),e(qe,zd),e(zd,wm),e(qe,Mm),e(qe,qd),e(qd,xm),e(qe,zm),e(qe,Fd),e(Fd,qm),e(qe,Fm),e(qe,$d),e($d,$m),e(qe,Bm),e(qe,Bd),e(Bd,jm),e(qe,Cm),h(n,Pp,p),f(Wo,n,p),h(n,Sp,p),h(n,tn,p),e(tn,In),e(In,jd),f(Ro,jd,null),e(tn,Em),e(tn,Cd),e(Cd,Pm),h(n,Ap,p),h(n,Fe,p),f(Uo,Fe,null),e(Fe,Sm),e(Fe,nn),e(nn,Am),e(nn,li),e(li,Om),e(nn,Im),e(nn,Xo),e(Xo,Nm),e(nn,Dm),e(Fe,Lm),e(Fe,on),e(on,Gm),e(on,ci),e(ci,Wm),e(on,Rm),e(on,pi),e(pi,Um),e(on,Xm),e(Fe,Vm),e(Fe,Ed),e(Ed,Qm),e(Fe,Hm),f(Vo,Fe,null),h(n,Op,p),h(n,an,p),e(an,Nn),e(Nn,Pd),f(Qo,Pd,null),e(an,Jm),e(an,Sd),e(Sd,Km),h(n,Ip,p),h(n,G,p),f(Ho,G,null),e(G,Zm),e(G,Ad),e(Ad,Ym),e(G,ef),e(G,mt),e(mt,tf),e(mt,hi),e(hi,nf),e(mt,of),e(mt,ui),e(ui,af),e(mt,sf),e(mt,Jo),e(Jo,rf),e(mt,df),e(G,lf),e(G,Ko),e(Ko,cf),e(Ko,Od),e(Od,pf),e(Ko,hf),e(G,uf),e(G,Id),e(Id,mf),e(G,ff),f(Zo,G,null),e(G,gf),e(G,Dn),f(Yo,Dn,null),e(Dn,_f),e(Dn,Nd),e(Nd,kf),e(G,bf),e(G,tt),f(ea,tt,null),e(tt,yf),e(tt,ta),e(ta,vf),e(ta,Dd),e(Dd,Tf),e(ta,wf),e(tt,Mf),e(tt,na),e(na,oa),e(oa,Ld),e(Ld,xf),e(oa,zf),e(oa,Gd),e(Gd,qf),e(na,Ff),e(na,aa),e(aa,Wd),e(Wd,$f),e(aa,Bf),e(aa,Rd),e(Rd,jf),e(tt,Cf),e(tt,Ud),e(Ud,Ef),h(n,Np,p),h(n,sn,p),e(sn,Ln),e(Ln,Xd),f(sa,Xd,null),e(sn,Pf),e(sn,Vd),e(Vd,Sf),h(n,Dp,p),h(n,P,p),f(ra,P,null),e(P,Af),e(P,rn),e(rn,Of),e(rn,Qd),e(Qd,If),e(rn,Nf),e(rn,ia),e(ia,Df),e(rn,Lf),e(P,Gf),e(P,Tt),e(Tt,mi),e(mi,Wf),e(Tt,Rf),e(Tt,fi),e(fi,Uf),e(Tt,Xf),e(Tt,gi),e(gi,Vf),e(Tt,Qf),e(P,Hf),e(P,da),e(da,Jf),e(da,Hd),e(Hd,Kf),e(da,Zf),e(P,Yf),e(P,Jd),e(Jd,eg),e(P,tg),f(la,P,null),e(P,ng),e(P,Se),f(ca,Se,null),e(Se,og),e(Se,Kd),e(Kd,ag),e(Se,sg),e(Se,pa),e(pa,rg),e(pa,Zd),e(Zd,ig),e(pa,dg),e(Se,lg),e(Se,ha),e(ha,ua),e(ua,Yd),e(Yd,cg),e(ua,pg),e(ua,el),e(el,hg),e(ha,ug),e(ha,ma),e(ma,tl),e(tl,mg),e(ma,fg),e(ma,nl),e(nl,gg),e(Se,_g),e(Se,ol),e(ol,kg),e(P,bg),e(P,Gn),f(fa,Gn,null),e(Gn,yg),e(Gn,al),e(al,vg),e(P,Tg),e(P,Wn),f(ga,Wn,null),e(Wn,wg),e(Wn,sl),e(sl,Mg),e(P,xg),e(P,Rn),f(_a,Rn,null),e(Rn,zg),e(Rn,rl),e(rl,qg),h(n,Lp,p),h(n,dn,p),e(dn,Un),e(Un,il),f(ka,il,null),e(dn,Fg),e(dn,dl),e(dl,$g),h(n,Gp,p),h(n,S,p),f(ba,S,null),e(S,Bg),e(S,ya),e(ya,jg),e(ya,va),e(va,Cg),e(ya,Eg),e(S,Pg),e(S,Ta),e(Ta,Sg),e(Ta,_i),e(_i,Ag),e(Ta,Og),e(S,Ig),e(S,ll),e(ll,Ng),e(S,Dg),f(wa,S,null),e(S,Lg),e(S,nt),f(Ma,nt,null),e(nt,Gg),e(nt,xa),e(xa,Wg),e(xa,cl),e(cl,Rg),e(xa,Ug),e(nt,Xg),e(nt,za),e(za,qa),e(qa,pl),e(pl,Vg),e(qa,Qg),e(qa,hl),e(hl,Hg),e(za,Jg),e(za,Fa),e(Fa,ul),e(ul,Kg),e(Fa,Zg),e(Fa,ml),e(ml,Yg),e(nt,e_),e(nt,fl),e(fl,t_),e(S,n_),e(S,Xn),f($a,Xn,null),e(Xn,o_),e(Xn,gl),e(gl,a_),e(S,s_),e(S,Vn),f(Ba,Vn,null),e(Vn,r_),e(Vn,ja),e(ja,i_),e(ja,_l),e(_l,d_),e(ja,l_),e(S,c_),e(S,Qn),f(Ca,Qn,null),e(Qn,p_),e(Qn,kl),e(kl,h_),e(S,u_),e(S,Hn),f(Ea,Hn,null),e(Hn,m_),e(Hn,bl),e(bl,f_),h(n,Wp,p),h(n,ln,p),e(ln,Jn),e(Jn,yl),f(Pa,yl,null),e(ln,g_),e(ln,vl),e(vl,__),h(n,Rp,p),h(n,W,p),f(Sa,W,null),e(W,k_),e(W,cn),e(cn,b_),e(cn,Tl),e(Tl,y_),e(cn,v_),e(cn,Aa),e(Aa,T_),e(cn,w_),e(W,M_),e(W,Oa),e(Oa,x_),e(Oa,ki),e(ki,z_),e(Oa,q_),e(W,F_),e(W,wl),e(wl,$_),e(W,B_),f(Ia,W,null),e(W,j_),e(W,Ae),f(Na,Ae,null),e(Ae,C_),e(Ae,Ml),e(Ml,E_),e(Ae,P_),e(Ae,Da),e(Da,S_),e(Da,xl),e(xl,A_),e(Da,O_),e(Ae,I_),e(Ae,La),e(La,Ga),e(Ga,zl),e(zl,N_),e(Ga,D_),e(Ga,ql),e(ql,L_),e(La,G_),e(La,Wa),e(Wa,Fl),e(Fl,W_),e(Wa,R_),e(Wa,$l),e($l,U_),e(Ae,X_),e(Ae,Bl),e(Bl,V_),e(W,Q_),e(W,Kn),f(Ra,Kn,null),e(Kn,H_),e(Kn,jl),e(jl,J_),e(W,K_),e(W,Zn),f(Ua,Zn,null),e(Zn,Z_),e(Zn,Cl),e(Cl,Y_),h(n,Up,p),h(n,pn,p),e(pn,Yn),e(Yn,El),f(Xa,El,null),e(pn,ek),e(pn,Pl),e(Pl,tk),h(n,Xp,p),h(n,He,p),f(Va,He,null),e(He,nk),e(He,Qa),e(Qa,ok),e(Qa,bi),e(bi,ak),e(Qa,sk),e(He,rk),e(He,Ha),e(Ha,ik),e(Ha,Ja),e(Ja,dk),e(Ha,lk),e(He,ck),e(He,Oe),f(Ka,Oe,null),e(Oe,pk),e(Oe,hn),e(hn,hk),e(hn,yi),e(yi,uk),e(hn,mk),e(hn,Sl),e(Sl,fk),e(hn,gk),e(Oe,_k),f(eo,Oe,null),e(Oe,kk),e(Oe,Al),e(Al,bk),e(Oe,yk),f(Za,Oe,null),h(n,Vp,p),h(n,un,p),e(un,to),e(to,Ol),f(Ya,Ol,null),e(un,vk),e(un,Il),e(Il,Tk),h(n,Qp,p),h(n,Je,p),f(es,Je,null),e(Je,wk),e(Je,ts),e(ts,Mk),e(ts,vi),e(vi,xk),e(ts,zk),e(Je,qk),e(Je,ns),e(ns,Fk),e(ns,os),e(os,$k),e(ns,Bk),e(Je,jk),e(Je,Y),f(as,Y,null),e(Y,Ck),e(Y,mn),e(mn,Ek),e(mn,Ti),e(Ti,Pk),e(mn,Sk),e(mn,Nl),e(Nl,Ak),e(mn,Ok),e(Y,Ik),f(no,Y,null),e(Y,Nk),e(Y,Dl),e(Dl,Dk),e(Y,Lk),f(ss,Y,null),e(Y,Gk),e(Y,Ll),e(Ll,Wk),e(Y,Rk),f(rs,Y,null),h(n,Hp,p),h(n,fn,p),e(fn,oo),e(oo,Gl),f(is,Gl,null),e(fn,Uk),e(fn,Wl),e(Wl,Xk),h(n,Jp,p),h(n,$e,p),f(ds,$e,null),e($e,Vk),e($e,gn),e(gn,Qk),e(gn,Rl),e(Rl,Hk),e(gn,Jk),e(gn,Ul),e(Ul,Kk),e(gn,Zk),e($e,Yk),e($e,ls),e(ls,eb),e(ls,wi),e(wi,tb),e(ls,nb),e($e,ob),e($e,cs),e(cs,ab),e(cs,ps),e(ps,sb),e(cs,rb),e($e,ib),e($e,ue),f(hs,ue,null),e(ue,db),e(ue,_n),e(_n,lb),e(_n,Mi),e(Mi,cb),e(_n,pb),e(_n,Xl),e(Xl,hb),e(_n,ub),e(ue,mb),f(ao,ue,null),e(ue,fb),e(ue,Vl),e(Vl,gb),e(ue,_b),f(us,ue,null),e(ue,kb),f(ms,ue,null),h(n,Kp,p),h(n,kn,p),e(kn,so),e(so,Ql),f(fs,Ql,null),e(kn,bb),e(kn,Hl),e(Hl,yb),h(n,Zp,p),h(n,Be,p),f(gs,Be,null),e(Be,vb),e(Be,Jl),e(Jl,Tb),e(Be,wb),e(Be,_s),e(_s,Mb),e(_s,xi),e(xi,xb),e(_s,zb),e(Be,qb),e(Be,ks),e(ks,Fb),e(ks,bs),e(bs,$b),e(ks,Bb),e(Be,jb),e(Be,L),f(ys,L,null),e(L,Cb),e(L,bn),e(bn,Eb),e(bn,zi),e(zi,Pb),e(bn,Sb),e(bn,Kl),e(Kl,Ab),e(bn,Ob),e(L,Ib),f(ro,L,null),e(L,Nb),e(L,Zl),e(Zl,Db),e(L,Lb),f(vs,L,null),e(L,Gb),f(Ts,L,null),e(L,Wb),e(L,Yl),e(Yl,Rb),e(L,Ub),f(ws,L,null),e(L,Xb),f(Ms,L,null),h(n,Yp,p),h(n,yn,p),e(yn,io),e(io,ec),f(xs,ec,null),e(yn,Vb),e(yn,tc),e(tc,Qb),h(n,eh,p),h(n,vn,p),f(zs,vn,null),e(vn,Hb),e(vn,wt),f(qs,wt,null),e(wt,Jb),e(wt,nc),e(nc,Kb),e(wt,Zb),f(Fs,wt,null),h(n,th,p),h(n,Tn,p),e(Tn,lo),e(lo,oc),f($s,oc,null),e(Tn,Yb),e(Tn,ac),e(ac,ey),h(n,nh,p),h(n,je,p),f(Bs,je,null),e(je,ty),e(je,js),e(js,ny),e(js,qi),e(qi,oy),e(js,ay),e(je,sy),e(je,Cs),e(Cs,ry),e(Cs,Es),e(Es,iy),e(Cs,dy),e(je,ly),f(co,je,null),e(je,cy),e(je,Ie),f(Ps,Ie,null),e(Ie,py),e(Ie,wn),e(wn,hy),e(wn,Fi),e(Fi,uy),e(wn,my),e(wn,sc),e(sc,fy),e(wn,gy),e(Ie,_y),f(po,Ie,null),e(Ie,ky),e(Ie,rc),e(rc,by),e(Ie,yy),f(Ss,Ie,null),h(n,oh,p),h(n,Mn,p),e(Mn,ho),e(ho,ic),f(As,ic,null),e(Mn,vy),e(Mn,dc),e(dc,Ty),h(n,ah,p),h(n,Ce,p),f(Os,Ce,null),e(Ce,wy),e(Ce,Is),e(Is,My),e(Is,$i),e($i,xy),e(Is,zy),e(Ce,qy),e(Ce,Ns),e(Ns,Fy),e(Ns,Ds),e(Ds,$y),e(Ns,By),e(Ce,jy),f(uo,Ce,null),e(Ce,Cy),e(Ce,ee),f(Ls,ee,null),e(ee,Ey),e(ee,xn),e(xn,Py),e(xn,Bi),e(Bi,Sy),e(xn,Ay),e(xn,lc),e(lc,Oy),e(xn,Iy),e(ee,Ny),f(mo,ee,null),e(ee,Dy),e(ee,cc),e(cc,Ly),e(ee,Gy),f(Gs,ee,null),e(ee,Wy),e(ee,pc),e(pc,Ry),e(ee,Uy),f(Ws,ee,null),h(n,sh,p),h(n,zn,p),e(zn,fo),e(fo,hc),f(Rs,hc,null),e(zn,Xy),e(zn,uc),e(uc,Vy),h(n,rh,p),h(n,R,p),f(Us,R,null),e(R,Qy),e(R,Xs),e(Xs,Hy),e(Xs,ji),e(ji,Jy),e(Xs,Ky),e(R,Zy),e(R,Vs),e(Vs,Yy),e(Vs,Qs),e(Qs,ev),e(Vs,tv),e(R,nv),e(R,mc),e(mc,ov),e(R,av),e(R,ft),e(ft,fc),e(fc,Hs),e(Hs,sv),e(ft,rv),e(ft,gc),e(gc,Js),e(Js,iv),e(ft,dv),e(ft,_c),e(_c,Ks),e(Ks,lv),e(ft,cv),e(ft,kc),e(kc,Zs),e(Zs,pv),e(R,hv),e(R,Ne),f(Ys,Ne,null),e(Ne,uv),e(Ne,qn),e(qn,mv),e(qn,bc),e(bc,fv),e(qn,gv),e(qn,yc),e(yc,_v),e(qn,kv),e(Ne,bv),f(go,Ne,null),e(Ne,yv),e(Ne,vc),e(vc,vv),e(Ne,Tv),f(er,Ne,null),e(R,wv),e(R,Mt),f(tr,Mt,null),e(Mt,Mv),e(Mt,Tc),e(Tc,xv),e(Mt,zv),f(nr,Mt,null),e(R,qv),e(R,xt),f(or,xt,null),e(xt,Fv),e(xt,wc),e(wc,$v),e(xt,Bv),f(ar,xt,null),h(n,ih,p),h(n,Fn,p),e(Fn,_o),e(_o,Mc),f(sr,Mc,null),e(Fn,jv),e(Fn,xc),e(xc,Cv),h(n,dh,p),h(n,U,p),f(rr,U,null),e(U,Ev),e(U,ir),e(ir,Pv),e(ir,Ci),e(Ci,Sv),e(ir,Av),e(U,Ov),e(U,dr),e(dr,Iv),e(dr,lr),e(lr,Nv),e(dr,Dv),e(U,Lv),e(U,zc),e(zc,Gv),e(U,Wv),e(U,gt),e(gt,qc),e(qc,cr),e(cr,Rv),e(gt,Uv),e(gt,Fc),e(Fc,pr),e(pr,Xv),e(gt,Vv),e(gt,$c),e($c,hr),e(hr,Qv),e(gt,Hv),e(gt,Bc),e(Bc,ur),e(ur,Jv),e(U,Kv),e(U,te),f(mr,te,null),e(te,Zv),e(te,$n),e($n,Yv),e($n,jc),e(jc,eT),e($n,tT),e($n,Cc),e(Cc,nT),e($n,oT),e(te,aT),f(ko,te,null),e(te,sT),e(te,Ec),e(Ec,rT),e(te,iT),f(fr,te,null),e(te,dT),e(te,Pc),e(Pc,lT),e(te,cT),f(gr,te,null),e(U,pT),e(U,zt),f(_r,zt,null),e(zt,hT),e(zt,Sc),e(Sc,uT),e(zt,mT),f(kr,zt,null),e(U,fT),e(U,qt),f(br,qt,null),e(qt,gT),e(qt,Ac),e(Ac,_T),e(qt,kT),f(yr,qt,null),h(n,lh,p),h(n,Bn,p),e(Bn,bo),e(bo,Oc),f(vr,Oc,null),e(Bn,bT),e(Bn,Ic),e(Ic,yT),h(n,ch,p),h(n,O,p),f(Tr,O,null),e(O,vT),e(O,Nc),e(Nc,TT),e(O,wT),e(O,wr),e(wr,MT),e(wr,Ei),e(Ei,xT),e(wr,zT),e(O,qT),e(O,Mr),e(Mr,FT),e(Mr,xr),e(xr,$T),e(Mr,BT),e(O,jT),e(O,Dc),e(Dc,CT),e(O,ET),e(O,_t),e(_t,Lc),e(Lc,zr),e(zr,PT),e(_t,ST),e(_t,Gc),e(Gc,qr),e(qr,AT),e(_t,OT),e(_t,Wc),e(Wc,Fr),e(Fr,IT),e(_t,NT),e(_t,Rc),e(Rc,$r),e($r,DT),e(O,LT),e(O,De),f(Br,De,null),e(De,GT),e(De,jn),e(jn,WT),e(jn,Uc),e(Uc,RT),e(jn,UT),e(jn,Xc),e(Xc,XT),e(jn,VT),e(De,QT),f(yo,De,null),e(De,HT),e(De,Vc),e(Vc,JT),e(De,KT),f(jr,De,null),e(O,ZT),e(O,Ft),f(Cr,Ft,null),e(Ft,YT),e(Ft,Qc),e(Qc,ew),e(Ft,tw),f(Er,Ft,null),e(O,nw),e(O,$t),f(Pr,$t,null),e($t,ow),e($t,Hc),e(Hc,aw),e($t,sw),f(Sr,$t,null),h(n,ph,p),h(n,Cn,p),e(Cn,vo),e(vo,Jc),f(Ar,Jc,null),e(Cn,rw),e(Cn,Kc),e(Kc,iw),h(n,hh,p),h(n,I,p),f(Or,I,null),e(I,dw),e(I,En),e(En,lw),e(En,Zc),e(Zc,cw),e(En,pw),e(En,Yc),e(Yc,hw),e(En,uw),e(I,mw),e(I,Ir),e(Ir,fw),e(Ir,Pi),e(Pi,gw),e(Ir,_w),e(I,kw),e(I,Nr),e(Nr,bw),e(Nr,Dr),e(Dr,yw),e(Nr,vw),e(I,Tw),e(I,ep),e(ep,ww),e(I,Mw),e(I,kt),e(kt,tp),e(tp,Lr),e(Lr,xw),e(kt,zw),e(kt,np),e(np,Gr),e(Gr,qw),e(kt,Fw),e(kt,op),e(op,Wr),e(Wr,$w),e(kt,Bw),e(kt,ap),e(ap,Rr),e(Rr,jw),e(I,Cw),e(I,Le),f(Ur,Le,null),e(Le,Ew),e(Le,Pn),e(Pn,Pw),e(Pn,sp),e(sp,Sw),e(Pn,Aw),e(Pn,rp),e(rp,Ow),e(Pn,Iw),e(Le,Nw),f(To,Le,null),e(Le,Dw),e(Le,ip),e(ip,Lw),e(Le,Gw),f(Xr,Le,null),e(I,Ww),e(I,Bt),f(Vr,Bt,null),e(Bt,Rw),e(Bt,dp),e(dp,Uw),e(Bt,Xw),f(Qr,Bt,null),e(I,Vw),e(I,jt),f(Hr,jt,null),e(jt,Qw),e(jt,lp),e(lp,Hw),e(jt,Jw),f(Jr,jt,null),uh=!0},p(n,[p]){const Kr={};p&2&&(Kr.$$scope={dirty:p,ctx:n}),eo.$set(Kr);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:n}),no.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:n}),ao.$set(pp);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:n}),ro.$set(hp);const wo={};p&2&&(wo.$$scope={dirty:p,ctx:n}),co.$set(wo);const up={};p&2&&(up.$$scope={dirty:p,ctx:n}),po.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:n}),uo.$set(mp);const Zr={};p&2&&(Zr.$$scope={dirty:p,ctx:n}),mo.$set(Zr);const fp={};p&2&&(fp.$$scope={dirty:p,ctx:n}),go.$set(fp);const gp={};p&2&&(gp.$$scope={dirty:p,ctx:n}),ko.$set(gp);const _p={};p&2&&(_p.$$scope={dirty:p,ctx:n}),yo.$set(_p);const Yr={};p&2&&(Yr.$$scope={dirty:p,ctx:n}),To.$set(Yr)},i(n){uh||(g(T.$$.fragment,n),g(se.$$.fragment,n),g(Ve.$$.fragment,n),g(So.$$.fragment,n),g(Oo.$$.fragment,n),g(Io.$$.fragment,n),g(Do.$$.fragment,n),g(Lo.$$.fragment,n),g(Wo.$$.fragment,n),g(Ro.$$.fragment,n),g(Uo.$$.fragment,n),g(Vo.$$.fragment,n),g(Qo.$$.fragment,n),g(Ho.$$.fragment,n),g(Zo.$$.fragment,n),g(Yo.$$.fragment,n),g(ea.$$.fragment,n),g(sa.$$.fragment,n),g(ra.$$.fragment,n),g(la.$$.fragment,n),g(ca.$$.fragment,n),g(fa.$$.fragment,n),g(ga.$$.fragment,n),g(_a.$$.fragment,n),g(ka.$$.fragment,n),g(ba.$$.fragment,n),g(wa.$$.fragment,n),g(Ma.$$.fragment,n),g($a.$$.fragment,n),g(Ba.$$.fragment,n),g(Ca.$$.fragment,n),g(Ea.$$.fragment,n),g(Pa.$$.fragment,n),g(Sa.$$.fragment,n),g(Ia.$$.fragment,n),g(Na.$$.fragment,n),g(Ra.$$.fragment,n),g(Ua.$$.fragment,n),g(Xa.$$.fragment,n),g(Va.$$.fragment,n),g(Ka.$$.fragment,n),g(eo.$$.fragment,n),g(Za.$$.fragment,n),g(Ya.$$.fragment,n),g(es.$$.fragment,n),g(as.$$.fragment,n),g(no.$$.fragment,n),g(ss.$$.fragment,n),g(rs.$$.fragment,n),g(is.$$.fragment,n),g(ds.$$.fragment,n),g(hs.$$.fragment,n),g(ao.$$.fragment,n),g(us.$$.fragment,n),g(ms.$$.fragment,n),g(fs.$$.fragment,n),g(gs.$$.fragment,n),g(ys.$$.fragment,n),g(ro.$$.fragment,n),g(vs.$$.fragment,n),g(Ts.$$.fragment,n),g(ws.$$.fragment,n),g(Ms.$$.fragment,n),g(xs.$$.fragment,n),g(zs.$$.fragment,n),g(qs.$$.fragment,n),g(Fs.$$.fragment,n),g($s.$$.fragment,n),g(Bs.$$.fragment,n),g(co.$$.fragment,n),g(Ps.$$.fragment,n),g(po.$$.fragment,n),g(Ss.$$.fragment,n),g(As.$$.fragment,n),g(Os.$$.fragment,n),g(uo.$$.fragment,n),g(Ls.$$.fragment,n),g(mo.$$.fragment,n),g(Gs.$$.fragment,n),g(Ws.$$.fragment,n),g(Rs.$$.fragment,n),g(Us.$$.fragment,n),g(Ys.$$.fragment,n),g(go.$$.fragment,n),g(er.$$.fragment,n),g(tr.$$.fragment,n),g(nr.$$.fragment,n),g(or.$$.fragment,n),g(ar.$$.fragment,n),g(sr.$$.fragment,n),g(rr.$$.fragment,n),g(mr.$$.fragment,n),g(ko.$$.fragment,n),g(fr.$$.fragment,n),g(gr.$$.fragment,n),g(_r.$$.fragment,n),g(kr.$$.fragment,n),g(br.$$.fragment,n),g(yr.$$.fragment,n),g(vr.$$.fragment,n),g(Tr.$$.fragment,n),g(Br.$$.fragment,n),g(yo.$$.fragment,n),g(jr.$$.fragment,n),g(Cr.$$.fragment,n),g(Er.$$.fragment,n),g(Pr.$$.fragment,n),g(Sr.$$.fragment,n),g(Ar.$$.fragment,n),g(Or.$$.fragment,n),g(Ur.$$.fragment,n),g(To.$$.fragment,n),g(Xr.$$.fragment,n),g(Vr.$$.fragment,n),g(Qr.$$.fragment,n),g(Hr.$$.fragment,n),g(Jr.$$.fragment,n),uh=!0)},o(n){_(T.$$.fragment,n),_(se.$$.fragment,n),_(Ve.$$.fragment,n),_(So.$$.fragment,n),_(Oo.$$.fragment,n),_(Io.$$.fragment,n),_(Do.$$.fragment,n),_(Lo.$$.fragment,n),_(Wo.$$.fragment,n),_(Ro.$$.fragment,n),_(Uo.$$.fragment,n),_(Vo.$$.fragment,n),_(Qo.$$.fragment,n),_(Ho.$$.fragment,n),_(Zo.$$.fragment,n),_(Yo.$$.fragment,n),_(ea.$$.fragment,n),_(sa.$$.fragment,n),_(ra.$$.fragment,n),_(la.$$.fragment,n),_(ca.$$.fragment,n),_(fa.$$.fragment,n),_(ga.$$.fragment,n),_(_a.$$.fragment,n),_(ka.$$.fragment,n),_(ba.$$.fragment,n),_(wa.$$.fragment,n),_(Ma.$$.fragment,n),_($a.$$.fragment,n),_(Ba.$$.fragment,n),_(Ca.$$.fragment,n),_(Ea.$$.fragment,n),_(Pa.$$.fragment,n),_(Sa.$$.fragment,n),_(Ia.$$.fragment,n),_(Na.$$.fragment,n),_(Ra.$$.fragment,n),_(Ua.$$.fragment,n),_(Xa.$$.fragment,n),_(Va.$$.fragment,n),_(Ka.$$.fragment,n),_(eo.$$.fragment,n),_(Za.$$.fragment,n),_(Ya.$$.fragment,n),_(es.$$.fragment,n),_(as.$$.fragment,n),_(no.$$.fragment,n),_(ss.$$.fragment,n),_(rs.$$.fragment,n),_(is.$$.fragment,n),_(ds.$$.fragment,n),_(hs.$$.fragment,n),_(ao.$$.fragment,n),_(us.$$.fragment,n),_(ms.$$.fragment,n),_(fs.$$.fragment,n),_(gs.$$.fragment,n),_(ys.$$.fragment,n),_(ro.$$.fragment,n),_(vs.$$.fragment,n),_(Ts.$$.fragment,n),_(ws.$$.fragment,n),_(Ms.$$.fragment,n),_(xs.$$.fragment,n),_(zs.$$.fragment,n),_(qs.$$.fragment,n),_(Fs.$$.fragment,n),_($s.$$.fragment,n),_(Bs.$$.fragment,n),_(co.$$.fragment,n),_(Ps.$$.fragment,n),_(po.$$.fragment,n),_(Ss.$$.fragment,n),_(As.$$.fragment,n),_(Os.$$.fragment,n),_(uo.$$.fragment,n),_(Ls.$$.fragment,n),_(mo.$$.fragment,n),_(Gs.$$.fragment,n),_(Ws.$$.fragment,n),_(Rs.$$.fragment,n),_(Us.$$.fragment,n),_(Ys.$$.fragment,n),_(go.$$.fragment,n),_(er.$$.fragment,n),_(tr.$$.fragment,n),_(nr.$$.fragment,n),_(or.$$.fragment,n),_(ar.$$.fragment,n),_(sr.$$.fragment,n),_(rr.$$.fragment,n),_(mr.$$.fragment,n),_(ko.$$.fragment,n),_(fr.$$.fragment,n),_(gr.$$.fragment,n),_(_r.$$.fragment,n),_(kr.$$.fragment,n),_(br.$$.fragment,n),_(yr.$$.fragment,n),_(vr.$$.fragment,n),_(Tr.$$.fragment,n),_(Br.$$.fragment,n),_(yo.$$.fragment,n),_(jr.$$.fragment,n),_(Cr.$$.fragment,n),_(Er.$$.fragment,n),_(Pr.$$.fragment,n),_(Sr.$$.fragment,n),_(Ar.$$.fragment,n),_(Or.$$.fragment,n),_(Ur.$$.fragment,n),_(To.$$.fragment,n),_(Xr.$$.fragment,n),_(Vr.$$.fragment,n),_(Qr.$$.fragment,n),_(Hr.$$.fragment,n),_(Jr.$$.fragment,n),uh=!1},d(n){t(b),n&&t(z),n&&t(v),k(T),n&&t(Ee),n&&t(j),n&&t(Ke),n&&t(J),k(se),n&&t(pe),n&&t(he),n&&t(D),n&&t(Pe),n&&t(Ze),n&&t(re),n&&t(Ye),n&&t(w),k(Ve),n&&t(bt),n&&t(V),n&&t(bp),n&&t(yt),n&&t(yp),n&&t(ni),n&&t(vp),k(So,n),n&&t(Tp),n&&t(oi),n&&t(wp),k(Oo,n),n&&t(Mp),n&&t(Yt),k(Io),n&&t(xp),n&&t(vt),n&&t(zp),n&&t(ai),n&&t(qp),n&&t(si),n&&t(Fp),n&&t(en),k(Do),n&&t($p),n&&t(et),n&&t(Bp),n&&t(On),n&&t(jp),n&&t(ii),n&&t(Cp),k(Lo,n),n&&t(Ep),n&&t(di),n&&t(Pp),k(Wo,n),n&&t(Sp),n&&t(tn),k(Ro),n&&t(Ap),n&&t(Fe),k(Uo),k(Vo),n&&t(Op),n&&t(an),k(Qo),n&&t(Ip),n&&t(G),k(Ho),k(Zo),k(Yo),k(ea),n&&t(Np),n&&t(sn),k(sa),n&&t(Dp),n&&t(P),k(ra),k(la),k(ca),k(fa),k(ga),k(_a),n&&t(Lp),n&&t(dn),k(ka),n&&t(Gp),n&&t(S),k(ba),k(wa),k(Ma),k($a),k(Ba),k(Ca),k(Ea),n&&t(Wp),n&&t(ln),k(Pa),n&&t(Rp),n&&t(W),k(Sa),k(Ia),k(Na),k(Ra),k(Ua),n&&t(Up),n&&t(pn),k(Xa),n&&t(Xp),n&&t(He),k(Va),k(Ka),k(eo),k(Za),n&&t(Vp),n&&t(un),k(Ya),n&&t(Qp),n&&t(Je),k(es),k(as),k(no),k(ss),k(rs),n&&t(Hp),n&&t(fn),k(is),n&&t(Jp),n&&t($e),k(ds),k(hs),k(ao),k(us),k(ms),n&&t(Kp),n&&t(kn),k(fs),n&&t(Zp),n&&t(Be),k(gs),k(ys),k(ro),k(vs),k(Ts),k(ws),k(Ms),n&&t(Yp),n&&t(yn),k(xs),n&&t(eh),n&&t(vn),k(zs),k(qs),k(Fs),n&&t(th),n&&t(Tn),k($s),n&&t(nh),n&&t(je),k(Bs),k(co),k(Ps),k(po),k(Ss),n&&t(oh),n&&t(Mn),k(As),n&&t(ah),n&&t(Ce),k(Os),k(uo),k(Ls),k(mo),k(Gs),k(Ws),n&&t(sh),n&&t(zn),k(Rs),n&&t(rh),n&&t(R),k(Us),k(Ys),k(go),k(er),k(tr),k(nr),k(or),k(ar),n&&t(ih),n&&t(Fn),k(sr),n&&t(dh),n&&t(U),k(rr),k(mr),k(ko),k(fr),k(gr),k(_r),k(kr),k(br),k(yr),n&&t(lh),n&&t(Bn),k(vr),n&&t(ch),n&&t(O),k(Tr),k(Br),k(yo),k(jr),k(Cr),k(Er),k(Pr),k(Sr),n&&t(ph),n&&t(Cn),k(Ar),n&&t(hh),n&&t(I),k(Or),k(Ur),k(To),k(Xr),k(Vr),k(Qr),k(Hr),k(Jr)}}}const oq={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function aq(C){return Wz(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cq extends Nz{constructor(b){super();Dz(this,b,aq,nq,Lz,{})}}export{cq as default,oq as metadata};
