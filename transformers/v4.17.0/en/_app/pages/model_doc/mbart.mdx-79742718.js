import{S as Pz,i as Cz,s as Sz,e as n,k as d,w as m,t as r,M as Az,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-4833417e.js";import{T as at}from"../../chunks/Tip-fffd6df1.js";import{D as q}from"../../chunks/Docstring-4f315ed9.js";import{C as F}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as U}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Iz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Nz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Oz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Dz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Lz(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=a(w,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,je,$),u(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),u(w,Q,$),u(w,O,$),e(O,Xe),u(w,ae,$),u(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ut),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function Gz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Rz(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=a(w,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,je,$),u(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),u(w,Q,$),u(w,O,$),e(O,Xe),u(w,ae,$),u(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ut),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function Wz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Uz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Xz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Hz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Vz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Qz(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye,w,$,we,He,Ut,K,Xt,kt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Eh,rd,Ph,Ch,_p,bt,Sh,Cn,id,Ah,Ih,Nh,Zr,Oh,Dh,gp,Yr,dd,Lh,kp,Sn,bp,ei,An,ld,Gh,Rh,Zt,Wh,cd,Uh,Xh,pd,Hh,Vh,vp,In,yp,Yt,So,ud,Nn,Qh,hd,Jh,Tp,vt,Kh,On,Zh,Yh,md,em,tm,Mp,ti,om,wp,oi,fd,nm,xp,eo,Ao,_d,Dn,am,gd,sm,zp,et,rm,kd,im,dm,bd,lm,cm,vd,pm,um,qp,Io,hm,ni,mm,fm,Bp,ai,yd,_m,$p,Ln,Fp,si,Gn,Td,gm,km,xe,bm,Md,vm,ym,wd,Tm,Mm,xd,wm,xm,zd,zm,qm,qd,Bm,$m,jp,Rn,Ep,to,No,Bd,Wn,Fm,$d,jm,Pp,ze,Un,Em,oo,Pm,ri,Cm,Sm,Xn,Am,Im,Nm,no,Om,ii,Dm,Lm,di,Gm,Rm,Wm,Fd,Um,Xm,Hn,Cp,ao,Oo,jd,Vn,Hm,Ed,Vm,Sp,L,Qn,Qm,Pd,Jm,Km,ht,Zm,li,Ym,ef,ci,tf,of,Jn,nf,af,sf,Kn,rf,Cd,df,lf,cf,Sd,pf,uf,Zn,hf,Do,Yn,mf,Ad,ff,_f,tt,ea,gf,ta,kf,Id,bf,vf,yf,oa,na,Nd,Tf,Mf,Od,wf,xf,aa,Dd,zf,qf,Ld,Bf,$f,Gd,Ff,Ap,so,Lo,Rd,sa,jf,Wd,Ef,Ip,C,ra,Pf,ro,Cf,Ud,Sf,Af,ia,If,Nf,Of,yt,pi,Df,Lf,ui,Gf,Rf,hi,Wf,Uf,Xf,da,Hf,Xd,Vf,Qf,Jf,Hd,Kf,Zf,la,Yf,Pe,ca,e_,Vd,t_,o_,pa,n_,Qd,a_,s_,r_,ua,ha,Jd,i_,d_,Kd,l_,c_,ma,Zd,p_,u_,Yd,h_,m_,el,f_,__,Go,fa,g_,tl,k_,b_,Ro,_a,v_,ol,y_,T_,Wo,ga,M_,nl,w_,Np,io,Uo,al,ka,x_,sl,z_,Op,S,ba,q_,va,B_,ya,$_,F_,j_,Ta,E_,mi,P_,C_,S_,rl,A_,I_,Ma,N_,ot,wa,O_,xa,D_,il,L_,G_,R_,za,qa,dl,W_,U_,ll,X_,H_,Ba,cl,V_,Q_,pl,J_,K_,ul,Z_,Y_,Xo,$a,eg,hl,tg,og,Ho,Fa,ng,ja,ag,ml,sg,rg,ig,Vo,Ea,dg,fl,lg,cg,Qo,Pa,pg,_l,ug,Dp,lo,Jo,gl,Ca,hg,kl,mg,Lp,G,Sa,fg,co,_g,bl,gg,kg,Aa,bg,vg,yg,Ia,Tg,fi,Mg,wg,xg,vl,zg,qg,Na,Bg,Ce,Oa,$g,yl,Fg,jg,Da,Eg,Tl,Pg,Cg,Sg,La,Ga,Ml,Ag,Ig,wl,Ng,Og,Ra,xl,Dg,Lg,zl,Gg,Rg,ql,Wg,Ug,Ko,Wa,Xg,Bl,Hg,Vg,Zo,Ua,Qg,$l,Jg,Gp,po,Yo,Fl,Xa,Kg,jl,Zg,Rp,Qe,Ha,Yg,Va,ek,_i,tk,ok,nk,Qa,ak,Ja,sk,rk,ik,Se,Ka,dk,uo,lk,gi,ck,pk,El,uk,hk,mk,en,fk,Pl,_k,gk,Za,Wp,ho,tn,Cl,Ya,kk,Sl,bk,Up,Je,es,vk,ts,yk,ki,Tk,Mk,wk,os,xk,ns,zk,qk,Bk,Z,as,$k,mo,Fk,bi,jk,Ek,Al,Pk,Ck,Sk,on,Ak,Il,Ik,Nk,ss,Ok,Nl,Dk,Lk,rs,Xp,fo,nn,Ol,is,Gk,Dl,Rk,Hp,qe,ds,Wk,_o,Uk,Ll,Xk,Hk,Gl,Vk,Qk,Jk,ls,Kk,vi,Zk,Yk,eb,cs,tb,ps,ob,nb,ab,Ae,us,sb,go,rb,yi,ib,db,Rl,lb,cb,pb,an,ub,Wl,hb,mb,hs,Vp,ko,sn,Ul,ms,fb,Xl,_b,Qp,Be,fs,gb,Hl,kb,bb,_s,vb,Ti,yb,Tb,Mb,gs,wb,ks,xb,zb,qb,Y,bs,Bb,bo,$b,Mi,Fb,jb,Vl,Eb,Pb,Cb,rn,Sb,Ql,Ab,Ib,vs,Nb,Jl,Ob,Db,ys,Jp,vo,dn,Kl,Ts,Lb,Zl,Gb,Kp,yo,Ms,Rb,Tt,ws,Wb,Yl,Ub,Xb,xs,Zp,To,ln,ec,zs,Hb,tc,Vb,Yp,$e,qs,Qb,Bs,Jb,wi,Kb,Zb,Yb,$s,ev,Fs,tv,ov,nv,cn,av,Ie,js,sv,Mo,rv,xi,iv,dv,oc,lv,cv,pv,pn,uv,nc,hv,mv,Es,eu,wo,un,ac,Ps,fv,sc,_v,tu,Fe,Cs,gv,Ss,kv,zi,bv,vv,yv,As,Tv,Is,Mv,wv,xv,hn,zv,ee,Ns,qv,xo,Bv,qi,$v,Fv,rc,jv,Ev,Pv,mn,Cv,ic,Sv,Av,Os,Iv,dc,Nv,Ov,Ds,ou,zo,fn,lc,Ls,Dv,cc,Lv,nu,R,Gs,Gv,Rs,Rv,Bi,Wv,Uv,Xv,Ws,Hv,Us,Vv,Qv,Jv,pc,Kv,Zv,mt,uc,Xs,Yv,ey,hc,Hs,ty,oy,mc,Vs,ny,ay,fc,Qs,sy,ry,Ne,Js,iy,qo,dy,_c,ly,cy,gc,py,uy,hy,_n,my,kc,fy,_y,Ks,gy,Mt,Zs,ky,bc,by,vy,Ys,yy,wt,er,Ty,vc,My,wy,tr,au,Bo,gn,yc,or,xy,Tc,zy,su,W,nr,qy,ar,By,$i,$y,Fy,jy,sr,Ey,rr,Py,Cy,Sy,Mc,Ay,Iy,ft,wc,ir,Ny,Oy,xc,dr,Dy,Ly,zc,lr,Gy,Ry,qc,cr,Wy,Uy,te,pr,Xy,$o,Hy,Bc,Vy,Qy,$c,Jy,Ky,Zy,kn,Yy,Fc,eT,tT,ur,oT,jc,nT,aT,hr,sT,xt,mr,rT,Ec,iT,dT,fr,lT,zt,_r,cT,Pc,pT,uT,gr,ru,Fo,bn,Cc,kr,hT,Sc,mT,iu,I,br,fT,Ac,_T,gT,vr,kT,Fi,bT,vT,yT,yr,TT,Tr,MT,wT,xT,Ic,zT,qT,_t,Nc,Mr,BT,$T,Oc,wr,FT,jT,Dc,xr,ET,PT,Lc,zr,CT,ST,Oe,qr,AT,jo,IT,Gc,NT,OT,Rc,DT,LT,GT,vn,RT,Wc,WT,UT,Br,XT,qt,$r,HT,Uc,VT,QT,Fr,JT,Bt,jr,KT,Xc,ZT,YT,Er,du,Eo,yn,Hc,Pr,eM,Vc,tM,lu,N,Cr,oM,Po,nM,Qc,aM,sM,Jc,rM,iM,dM,Sr,lM,ji,cM,pM,uM,Ar,hM,Ir,mM,fM,_M,Kc,gM,kM,gt,Zc,Nr,bM,vM,Yc,Or,yM,TM,ep,Dr,MM,wM,tp,Lr,xM,zM,De,Gr,qM,Co,BM,op,$M,FM,np,jM,EM,PM,Tn,CM,ap,SM,AM,Rr,IM,$t,Wr,NM,sp,OM,DM,Ur,LM,Ft,Xr,GM,rp,RM,WM,Hr,cu;return T=new U({}),ae=new U({}),He=new U({}),Sn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Wn=new U({}),Un=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new U({}),Qn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zn=new F({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new U({}),ra=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L61"}}),la=new F({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L163",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L192",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L251"}}),ga=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L266"}}),ka=new U({}),ba=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),wa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Fa=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Pa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Ca=new U({}),Sa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Oa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wa=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L221"}}),Ua=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L236"}}),Xa=new U({}),Ha=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1123",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1150",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new at({props:{$$slots:{default:[Iz]},$$scope:{ctx:E}}}),Za=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new U({}),es=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1239",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1283",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new at({props:{$$slots:{default:[Nz]},$$scope:{ctx:E}}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),is=new U({}),ds=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1538",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),us=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1550",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new at({props:{$$slots:{default:[Oz]},$$scope:{ctx:E}}}),hs=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ms=new U({}),fs=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1412",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1425",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new at({props:{$$slots:{default:[Dz]},$$scope:{ctx:E}}}),vs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ts=new U({}),Ms=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1669"}}),ws=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_mbart.py#L1700",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xs=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new U({}),qs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1204",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new at({props:{$$slots:{default:[Lz]},$$scope:{ctx:E}}}),js=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1216",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new at({props:{$$slots:{default:[Gz]},$$scope:{ctx:E}}}),Es=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ps=new U({}),Cs=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1311",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new at({props:{$$slots:{default:[Rz]},$$scope:{ctx:E}}}),Ns=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1344",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new at({props:{$$slots:{default:[Wz]},$$scope:{ctx:E}}}),Os=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ls=new U({}),Gs=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1266",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Js=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new at({props:{$$slots:{default:[Uz]},$$scope:{ctx:E}}}),Ks=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zs=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),er=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),or=new U({}),nr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1353",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),pr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new at({props:{$$slots:{default:[Xz]},$$scope:{ctx:E}}}),ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),mr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),_r=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),kr=new U({}),br=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1666",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),qr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new at({props:{$$slots:{default:[Hz]},$$scope:{ctx:E}}}),Br=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),jr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Pr=new U({}),Cr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1754",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Gr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new at({props:{$$slots:{default:[Vz]},$$scope:{ctx:E}}}),Rr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Wr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Xr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("meta"),z=d(),v=n("h1"),M=n("a"),x=n("span"),m(T.$$.fragment),y=d(),B=n("span"),st=r("MBart and MBart-50"),je=d(),j=n("p"),Ue=n("strong"),_e=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Ke=d(),Q=n("h2"),O=n("a"),Xe=n("span"),m(ae.$$.fragment),P=d(),A=n("span"),dt=r("Overview of MBart"),ce=d(),pe=n("p"),lt=r("The MBart model was presented in "),J=n("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ee=n("p"),be=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=n("p"),ve=r("This model was contributed by "),ye=n("a"),ut=r("valhalla"),re=r(". The Authors\u2019 code can be found "),Te=n("a"),Me=r("here"),Ye=d(),w=n("h3"),$=n("a"),we=n("span"),m(He.$$.fragment),Ut=d(),K=n("span"),Xt=r("Training of MBart"),kt=d(),X=n("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),le=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Eh=r(". "),rd=n("code"),Ph=r("bos"),Ch=r(" is never used."),_p=d(),bt=n("p"),Sh=r("The regular "),Cn=n("a"),id=n("strong"),Ah=r("call"),Ih=r("()"),Nh=r(` will encode source text format, and it should be wrapped
inside the context manager `),Zr=n("a"),Oh=r("as_target_tokenizer()"),Dh=r(" to encode target text format."),gp=d(),Yr=n("ul"),dd=n("li"),Lh=r("Supervised training"),kp=d(),m(Sn.$$.fragment),bp=d(),ei=n("ul"),An=n("li"),ld=n("p"),Gh=r("Generation"),Rh=d(),Zt=n("p"),Wh=r("While generating the target text set the "),cd=n("code"),Uh=r("decoder_start_token_id"),Xh=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=n("em"),Hh=r("facebook/mbart-large-en-ro"),Vh=r(" model."),vp=d(),m(In.$$.fragment),yp=d(),Yt=n("h2"),So=n("a"),ud=n("span"),m(Nn.$$.fragment),Qh=d(),hd=n("span"),Jh=r("Overview of MBart-50"),Tp=d(),vt=n("p"),Kh=r("MBart-50 was introduced in the "),On=n("a"),Zh=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yh=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=n("em"),em=r("mbart-large-cc25"),tm=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Mp=d(),ti=n("p"),om=r("According to the abstract"),wp=d(),oi=n("p"),fd=n("em"),nm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),xp=d(),eo=n("h3"),Ao=n("a"),_d=n("span"),m(Dn.$$.fragment),am=d(),gd=n("span"),sm=r("Training of MBart-50"),zp=d(),et=n("p"),rm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=n("code"),im=r("[lang_code] X [eos]"),dm=r(", where "),bd=n("code"),lm=r("lang_code"),cm=r(` is source
language id for source text and target language id for target text, with `),vd=n("code"),pm=r("X"),um=r(` being the source or target text
respectively.`),qp=d(),Io=n("p"),hm=r("MBart-50 has its own tokenizer "),ni=n("a"),mm=r("MBart50Tokenizer"),fm=r("."),Bp=d(),ai=n("ul"),yd=n("li"),_m=r("Supervised training"),$p=d(),m(Ln.$$.fragment),Fp=d(),si=n("ul"),Gn=n("li"),Td=n("p"),gm=r("Generation"),km=d(),xe=n("p"),bm=r("To generate using the mBART-50 multilingual translation models, "),Md=n("code"),vm=r("eos_token_id"),ym=r(` is used as the
`),wd=n("code"),Tm=r("decoder_start_token_id"),Mm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=n("em"),wm=r("forced_bos_token_id"),xm=r(" parameter to the "),zd=n("em"),zm=r("generate"),qm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),qd=n("em"),Bm=r("facebook/mbart-50-large-many-to-many"),$m=r(" checkpoint."),jp=d(),m(Rn.$$.fragment),Ep=d(),to=n("h2"),No=n("a"),Bd=n("span"),m(Wn.$$.fragment),Fm=d(),$d=n("span"),jm=r("MBartConfig"),Pp=d(),ze=n("div"),m(Un.$$.fragment),Em=d(),oo=n("p"),Pm=r("This is the configuration class to store the configuration of a "),ri=n("a"),Cm=r("MBartModel"),Sm=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=n("a"),Am=r("facebook/mbart-large-cc25"),Im=r(" architecture."),Nm=d(),no=n("p"),Om=r("Configuration objects inherit from "),ii=n("a"),Dm=r("PretrainedConfig"),Lm=r(` and can be used to control the model outputs. Read the
documentation from `),di=n("a"),Gm=r("PretrainedConfig"),Rm=r(" for more information."),Wm=d(),Fd=n("p"),Um=r("Example:"),Xm=d(),m(Hn.$$.fragment),Cp=d(),ao=n("h2"),Oo=n("a"),jd=n("span"),m(Vn.$$.fragment),Hm=d(),Ed=n("span"),Vm=r("MBartTokenizer"),Sp=d(),L=n("div"),m(Qn.$$.fragment),Qm=d(),Pd=n("p"),Jm=r("Construct an MBART tokenizer."),Km=d(),ht=n("p"),Zm=r("Adapted from "),li=n("a"),Ym=r("RobertaTokenizer"),ef=r(" and "),ci=n("a"),tf=r("XLNetTokenizer"),of=r(`. Based on
`),Jn=n("a"),nf=r("SentencePiece"),af=r("."),sf=d(),Kn=n("p"),rf=r("The tokenization method is "),Cd=n("code"),df=r("<tokens> <eos> <language code>"),lf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),cf=d(),Sd=n("p"),pf=r("Examples:"),uf=d(),m(Zn.$$.fragment),hf=d(),Do=n("div"),m(Yn.$$.fragment),mf=d(),Ad=n("p"),ff=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),_f=d(),tt=n("div"),m(ea.$$.fragment),gf=d(),ta=n("p"),kf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=n("code"),bf=r("X"),vf=r(" represents the sequence:"),yf=d(),oa=n("ul"),na=n("li"),Nd=n("code"),Tf=r("input_ids"),Mf=r(" (for encoder) "),Od=n("code"),wf=r("X [eos, src_lang_code]"),xf=d(),aa=n("li"),Dd=n("code"),zf=r("decoder_input_ids"),qf=r(": (for decoder) "),Ld=n("code"),Bf=r("X [eos, tgt_lang_code]"),$f=d(),Gd=n("p"),Ff=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ap=d(),so=n("h2"),Lo=n("a"),Rd=n("span"),m(sa.$$.fragment),jf=d(),Wd=n("span"),Ef=r("MBartTokenizerFast"),Ip=d(),C=n("div"),m(ra.$$.fragment),Pf=d(),ro=n("p"),Cf=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=n("em"),Sf=r("tokenizers"),Af=r(` library). Based on
`),ia=n("a"),If=r("BPE"),Nf=r("."),Of=d(),yt=n("p"),pi=n("a"),Df=r("MBartTokenizerFast"),Lf=r(" is a subclass of "),ui=n("a"),Gf=r("XLMRobertaTokenizerFast"),Rf=r(`. Refer to superclass
`),hi=n("a"),Wf=r("XLMRobertaTokenizerFast"),Uf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Xf=d(),da=n("p"),Hf=r("The tokenization method is "),Xd=n("code"),Vf=r("<tokens> <eos> <language code>"),Qf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Jf=d(),Hd=n("p"),Kf=r("Examples:"),Zf=d(),m(la.$$.fragment),Yf=d(),Pe=n("div"),m(ca.$$.fragment),e_=d(),Vd=n("p"),t_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),o_=d(),pa=n("p"),n_=r("An MBART sequence has the following format, where "),Qd=n("code"),a_=r("X"),s_=r(" represents the sequence:"),r_=d(),ua=n("ul"),ha=n("li"),Jd=n("code"),i_=r("input_ids"),d_=r(" (for encoder) "),Kd=n("code"),l_=r("X [eos, src_lang_code]"),c_=d(),ma=n("li"),Zd=n("code"),p_=r("decoder_input_ids"),u_=r(": (for decoder) "),Yd=n("code"),h_=r("X [eos, tgt_lang_code]"),m_=d(),el=n("p"),f_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),__=d(),Go=n("div"),m(fa.$$.fragment),g_=d(),tl=n("p"),k_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),b_=d(),Ro=n("div"),m(_a.$$.fragment),v_=d(),ol=n("p"),y_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),T_=d(),Wo=n("div"),m(ga.$$.fragment),M_=d(),nl=n("p"),w_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Np=d(),io=n("h2"),Uo=n("a"),al=n("span"),m(ka.$$.fragment),x_=d(),sl=n("span"),z_=r("MBart50Tokenizer"),Op=d(),S=n("div"),m(ba.$$.fragment),q_=d(),va=n("p"),B_=r("Construct a MBart50 tokenizer. Based on "),ya=n("a"),$_=r("SentencePiece"),F_=r("."),j_=d(),Ta=n("p"),E_=r("This tokenizer inherits from "),mi=n("a"),P_=r("PreTrainedTokenizer"),C_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),S_=d(),rl=n("p"),A_=r("Examples:"),I_=d(),m(Ma.$$.fragment),N_=d(),ot=n("div"),m(wa.$$.fragment),O_=d(),xa=n("p"),D_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=n("code"),L_=r("X"),G_=r(" represents the sequence:"),R_=d(),za=n("ul"),qa=n("li"),dl=n("code"),W_=r("input_ids"),U_=r(" (for encoder) "),ll=n("code"),X_=r("[src_lang_code] X [eos]"),H_=d(),Ba=n("li"),cl=n("code"),V_=r("labels"),Q_=r(": (for decoder) "),pl=n("code"),J_=r("[tgt_lang_code] X [eos]"),K_=d(),ul=n("p"),Z_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Y_=d(),Xo=n("div"),m($a.$$.fragment),eg=d(),hl=n("p"),tg=r("Converts a sequence of tokens (strings for sub-words) in a single string."),og=d(),Ho=n("div"),m(Fa.$$.fragment),ng=d(),ja=n("p"),ag=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=n("code"),sg=r("prepare_for_model"),rg=r(" method."),ig=d(),Vo=n("div"),m(Ea.$$.fragment),dg=d(),fl=n("p"),lg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),cg=d(),Qo=n("div"),m(Pa.$$.fragment),pg=d(),_l=n("p"),ug=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dp=d(),lo=n("h2"),Jo=n("a"),gl=n("span"),m(Ca.$$.fragment),hg=d(),kl=n("span"),mg=r("MBart50TokenizerFast"),Lp=d(),G=n("div"),m(Sa.$$.fragment),fg=d(),co=n("p"),_g=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=n("em"),gg=r("tokenizers"),kg=r(` library). Based on
`),Aa=n("a"),bg=r("BPE"),vg=r("."),yg=d(),Ia=n("p"),Tg=r("This tokenizer inherits from "),fi=n("a"),Mg=r("PreTrainedTokenizerFast"),wg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xg=d(),vl=n("p"),zg=r("Examples:"),qg=d(),m(Na.$$.fragment),Bg=d(),Ce=n("div"),m(Oa.$$.fragment),$g=d(),yl=n("p"),Fg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),jg=d(),Da=n("p"),Eg=r("An MBART-50 sequence has the following format, where "),Tl=n("code"),Pg=r("X"),Cg=r(" represents the sequence:"),Sg=d(),La=n("ul"),Ga=n("li"),Ml=n("code"),Ag=r("input_ids"),Ig=r(" (for encoder) "),wl=n("code"),Ng=r("[src_lang_code] X [eos]"),Og=d(),Ra=n("li"),xl=n("code"),Dg=r("labels"),Lg=r(": (for decoder) "),zl=n("code"),Gg=r("[tgt_lang_code] X [eos]"),Rg=d(),ql=n("p"),Wg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ug=d(),Ko=n("div"),m(Wa.$$.fragment),Xg=d(),Bl=n("p"),Hg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Vg=d(),Zo=n("div"),m(Ua.$$.fragment),Qg=d(),$l=n("p"),Jg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Gp=d(),po=n("h2"),Yo=n("a"),Fl=n("span"),m(Xa.$$.fragment),Kg=d(),jl=n("span"),Zg=r("MBartModel"),Rp=d(),Qe=n("div"),m(Ha.$$.fragment),Yg=d(),Va=n("p"),ek=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=n("a"),tk=r("PreTrainedModel"),ok=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=d(),Qa=n("p"),ak=r("This model is also a PyTorch "),Ja=n("a"),sk=r("torch.nn.Module"),rk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=d(),Se=n("div"),m(Ka.$$.fragment),dk=d(),uo=n("p"),lk=r("The "),gi=n("a"),ck=r("MBartModel"),pk=r(" forward method, overrides the "),El=n("code"),uk=r("__call__"),hk=r(" special method."),mk=d(),m(en.$$.fragment),fk=d(),Pl=n("p"),_k=r("Example:"),gk=d(),m(Za.$$.fragment),Wp=d(),ho=n("h2"),tn=n("a"),Cl=n("span"),m(Ya.$$.fragment),kk=d(),Sl=n("span"),bk=r("MBartForConditionalGeneration"),Up=d(),Je=n("div"),m(es.$$.fragment),vk=d(),ts=n("p"),yk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=n("a"),Tk=r("PreTrainedModel"),Mk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk=d(),os=n("p"),xk=r("This model is also a PyTorch "),ns=n("a"),zk=r("torch.nn.Module"),qk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bk=d(),Z=n("div"),m(as.$$.fragment),$k=d(),mo=n("p"),Fk=r("The "),bi=n("a"),jk=r("MBartForConditionalGeneration"),Ek=r(" forward method, overrides the "),Al=n("code"),Pk=r("__call__"),Ck=r(" special method."),Sk=d(),m(on.$$.fragment),Ak=d(),Il=n("p"),Ik=r("Summarization example:"),Nk=d(),m(ss.$$.fragment),Ok=d(),Nl=n("p"),Dk=r("Mask filling example:"),Lk=d(),m(rs.$$.fragment),Xp=d(),fo=n("h2"),nn=n("a"),Ol=n("span"),m(is.$$.fragment),Gk=d(),Dl=n("span"),Rk=r("MBartForQuestionAnswering"),Hp=d(),qe=n("div"),m(ds.$$.fragment),Wk=d(),_o=n("p"),Uk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=n("code"),Xk=r("span start logits"),Hk=r(" and "),Gl=n("code"),Vk=r("span end logits"),Qk=r(")."),Jk=d(),ls=n("p"),Kk=r("This model inherits from "),vi=n("a"),Zk=r("PreTrainedModel"),Yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=d(),cs=n("p"),tb=r("This model is also a PyTorch "),ps=n("a"),ob=r("torch.nn.Module"),nb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ab=d(),Ae=n("div"),m(us.$$.fragment),sb=d(),go=n("p"),rb=r("The "),yi=n("a"),ib=r("MBartForQuestionAnswering"),db=r(" forward method, overrides the "),Rl=n("code"),lb=r("__call__"),cb=r(" special method."),pb=d(),m(an.$$.fragment),ub=d(),Wl=n("p"),hb=r("Example:"),mb=d(),m(hs.$$.fragment),Vp=d(),ko=n("h2"),sn=n("a"),Ul=n("span"),m(ms.$$.fragment),fb=d(),Xl=n("span"),_b=r("MBartForSequenceClassification"),Qp=d(),Be=n("div"),m(fs.$$.fragment),gb=d(),Hl=n("p"),kb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),bb=d(),_s=n("p"),vb=r("This model inherits from "),Ti=n("a"),yb=r("PreTrainedModel"),Tb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mb=d(),gs=n("p"),wb=r("This model is also a PyTorch "),ks=n("a"),xb=r("torch.nn.Module"),zb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qb=d(),Y=n("div"),m(bs.$$.fragment),Bb=d(),bo=n("p"),$b=r("The "),Mi=n("a"),Fb=r("MBartForSequenceClassification"),jb=r(" forward method, overrides the "),Vl=n("code"),Eb=r("__call__"),Pb=r(" special method."),Cb=d(),m(rn.$$.fragment),Sb=d(),Ql=n("p"),Ab=r("Example of single-label classification:"),Ib=d(),m(vs.$$.fragment),Nb=d(),Jl=n("p"),Ob=r("Example of multi-label classification:"),Db=d(),m(ys.$$.fragment),Jp=d(),vo=n("h2"),dn=n("a"),Kl=n("span"),m(Ts.$$.fragment),Lb=d(),Zl=n("span"),Gb=r("MBartForCausalLM"),Kp=d(),yo=n("div"),m(Ms.$$.fragment),Rb=d(),Tt=n("div"),m(ws.$$.fragment),Wb=d(),Yl=n("p"),Ub=r("Example:"),Xb=d(),m(xs.$$.fragment),Zp=d(),To=n("h2"),ln=n("a"),ec=n("span"),m(zs.$$.fragment),Hb=d(),tc=n("span"),Vb=r("TFMBartModel"),Yp=d(),$e=n("div"),m(qs.$$.fragment),Qb=d(),Bs=n("p"),Jb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=n("a"),Kb=r("TFPreTrainedModel"),Zb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yb=d(),$s=n("p"),ev=r("This model is also a "),Fs=n("a"),tv=r("tf.keras.Model"),ov=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=d(),m(cn.$$.fragment),av=d(),Ie=n("div"),m(js.$$.fragment),sv=d(),Mo=n("p"),rv=r("The "),xi=n("a"),iv=r("TFMBartModel"),dv=r(" forward method, overrides the "),oc=n("code"),lv=r("__call__"),cv=r(" special method."),pv=d(),m(pn.$$.fragment),uv=d(),nc=n("p"),hv=r("Example:"),mv=d(),m(Es.$$.fragment),eu=d(),wo=n("h2"),un=n("a"),ac=n("span"),m(Ps.$$.fragment),fv=d(),sc=n("span"),_v=r("TFMBartForConditionalGeneration"),tu=d(),Fe=n("div"),m(Cs.$$.fragment),gv=d(),Ss=n("p"),kv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=n("a"),bv=r("TFPreTrainedModel"),vv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv=d(),As=n("p"),Tv=r("This model is also a "),Is=n("a"),Mv=r("tf.keras.Model"),wv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xv=d(),m(hn.$$.fragment),zv=d(),ee=n("div"),m(Ns.$$.fragment),qv=d(),xo=n("p"),Bv=r("The "),qi=n("a"),$v=r("TFMBartForConditionalGeneration"),Fv=r(" forward method, overrides the "),rc=n("code"),jv=r("__call__"),Ev=r(" special method."),Pv=d(),m(mn.$$.fragment),Cv=d(),ic=n("p"),Sv=r("Summarization example:"),Av=d(),m(Os.$$.fragment),Iv=d(),dc=n("p"),Nv=r("Mask filling example:"),Ov=d(),m(Ds.$$.fragment),ou=d(),zo=n("h2"),fn=n("a"),lc=n("span"),m(Ls.$$.fragment),Dv=d(),cc=n("span"),Lv=r("FlaxMBartModel"),nu=d(),R=n("div"),m(Gs.$$.fragment),Gv=d(),Rs=n("p"),Rv=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Bi=n("a"),Wv=r("FlaxPreTrainedModel"),Uv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv=d(),Ws=n("p"),Hv=r(`This model is also a Flax Linen
`),Us=n("a"),Vv=r("flax.nn.Module"),Qv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jv=d(),pc=n("p"),Kv=r("Finally, this model supports inherent JAX features such as:"),Zv=d(),mt=n("ul"),uc=n("li"),Xs=n("a"),Yv=r("Just-In-Time (JIT) compilation"),ey=d(),hc=n("li"),Hs=n("a"),ty=r("Automatic Differentiation"),oy=d(),mc=n("li"),Vs=n("a"),ny=r("Vectorization"),ay=d(),fc=n("li"),Qs=n("a"),sy=r("Parallelization"),ry=d(),Ne=n("div"),m(Js.$$.fragment),iy=d(),qo=n("p"),dy=r("The "),_c=n("code"),ly=r("FlaxMBartPreTrainedModel"),cy=r("forward method, overrides the "),gc=n("code"),py=r("__call__"),uy=r(" special method."),hy=d(),m(_n.$$.fragment),my=d(),kc=n("p"),fy=r("Example:"),_y=d(),m(Ks.$$.fragment),gy=d(),Mt=n("div"),m(Zs.$$.fragment),ky=d(),bc=n("p"),by=r("Example:"),vy=d(),m(Ys.$$.fragment),yy=d(),wt=n("div"),m(er.$$.fragment),Ty=d(),vc=n("p"),My=r("Example:"),wy=d(),m(tr.$$.fragment),au=d(),Bo=n("h2"),gn=n("a"),yc=n("span"),m(or.$$.fragment),xy=d(),Tc=n("span"),zy=r("FlaxMBartForConditionalGeneration"),su=d(),W=n("div"),m(nr.$$.fragment),qy=d(),ar=n("p"),By=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=n("a"),$y=r("FlaxPreTrainedModel"),Fy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=d(),sr=n("p"),Ey=r(`This model is also a Flax Linen
`),rr=n("a"),Py=r("flax.nn.Module"),Cy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sy=d(),Mc=n("p"),Ay=r("Finally, this model supports inherent JAX features such as:"),Iy=d(),ft=n("ul"),wc=n("li"),ir=n("a"),Ny=r("Just-In-Time (JIT) compilation"),Oy=d(),xc=n("li"),dr=n("a"),Dy=r("Automatic Differentiation"),Ly=d(),zc=n("li"),lr=n("a"),Gy=r("Vectorization"),Ry=d(),qc=n("li"),cr=n("a"),Wy=r("Parallelization"),Uy=d(),te=n("div"),m(pr.$$.fragment),Xy=d(),$o=n("p"),Hy=r("The "),Bc=n("code"),Vy=r("FlaxMBartPreTrainedModel"),Qy=r("forward method, overrides the "),$c=n("code"),Jy=r("__call__"),Ky=r(" special method."),Zy=d(),m(kn.$$.fragment),Yy=d(),Fc=n("p"),eT=r("Summarization example:"),tT=d(),m(ur.$$.fragment),oT=d(),jc=n("p"),nT=r("Mask filling example:"),aT=d(),m(hr.$$.fragment),sT=d(),xt=n("div"),m(mr.$$.fragment),rT=d(),Ec=n("p"),iT=r("Example:"),dT=d(),m(fr.$$.fragment),lT=d(),zt=n("div"),m(_r.$$.fragment),cT=d(),Pc=n("p"),pT=r("Example:"),uT=d(),m(gr.$$.fragment),ru=d(),Fo=n("h2"),bn=n("a"),Cc=n("span"),m(kr.$$.fragment),hT=d(),Sc=n("span"),mT=r("FlaxMBartForSequenceClassification"),iu=d(),I=n("div"),m(br.$$.fragment),fT=d(),Ac=n("p"),_T=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),gT=d(),vr=n("p"),kT=r("This model inherits from "),Fi=n("a"),bT=r("FlaxPreTrainedModel"),vT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yT=d(),yr=n("p"),TT=r(`This model is also a Flax Linen
`),Tr=n("a"),MT=r("flax.nn.Module"),wT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xT=d(),Ic=n("p"),zT=r("Finally, this model supports inherent JAX features such as:"),qT=d(),_t=n("ul"),Nc=n("li"),Mr=n("a"),BT=r("Just-In-Time (JIT) compilation"),$T=d(),Oc=n("li"),wr=n("a"),FT=r("Automatic Differentiation"),jT=d(),Dc=n("li"),xr=n("a"),ET=r("Vectorization"),PT=d(),Lc=n("li"),zr=n("a"),CT=r("Parallelization"),ST=d(),Oe=n("div"),m(qr.$$.fragment),AT=d(),jo=n("p"),IT=r("The "),Gc=n("code"),NT=r("FlaxMBartPreTrainedModel"),OT=r("forward method, overrides the "),Rc=n("code"),DT=r("__call__"),LT=r(" special method."),GT=d(),m(vn.$$.fragment),RT=d(),Wc=n("p"),WT=r("Example:"),UT=d(),m(Br.$$.fragment),XT=d(),qt=n("div"),m($r.$$.fragment),HT=d(),Uc=n("p"),VT=r("Example:"),QT=d(),m(Fr.$$.fragment),JT=d(),Bt=n("div"),m(jr.$$.fragment),KT=d(),Xc=n("p"),ZT=r("Example:"),YT=d(),m(Er.$$.fragment),du=d(),Eo=n("h2"),yn=n("a"),Hc=n("span"),m(Pr.$$.fragment),eM=d(),Vc=n("span"),tM=r("FlaxMBartForQuestionAnswering"),lu=d(),N=n("div"),m(Cr.$$.fragment),oM=d(),Po=n("p"),nM=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=n("code"),aM=r("span start logits"),sM=r(" and "),Jc=n("code"),rM=r("span end logits"),iM=r(")."),dM=d(),Sr=n("p"),lM=r("This model inherits from "),ji=n("a"),cM=r("FlaxPreTrainedModel"),pM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uM=d(),Ar=n("p"),hM=r(`This model is also a Flax Linen
`),Ir=n("a"),mM=r("flax.nn.Module"),fM=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_M=d(),Kc=n("p"),gM=r("Finally, this model supports inherent JAX features such as:"),kM=d(),gt=n("ul"),Zc=n("li"),Nr=n("a"),bM=r("Just-In-Time (JIT) compilation"),vM=d(),Yc=n("li"),Or=n("a"),yM=r("Automatic Differentiation"),TM=d(),ep=n("li"),Dr=n("a"),MM=r("Vectorization"),wM=d(),tp=n("li"),Lr=n("a"),xM=r("Parallelization"),zM=d(),De=n("div"),m(Gr.$$.fragment),qM=d(),Co=n("p"),BM=r("The "),op=n("code"),$M=r("FlaxMBartPreTrainedModel"),FM=r("forward method, overrides the "),np=n("code"),jM=r("__call__"),EM=r(" special method."),PM=d(),m(Tn.$$.fragment),CM=d(),ap=n("p"),SM=r("Example:"),AM=d(),m(Rr.$$.fragment),IM=d(),$t=n("div"),m(Wr.$$.fragment),NM=d(),sp=n("p"),OM=r("Example:"),DM=d(),m(Ur.$$.fragment),LM=d(),Ft=n("div"),m(Xr.$$.fragment),GM=d(),rp=n("p"),RM=r("Example:"),WM=d(),m(Hr.$$.fragment),this.h()},l(o){const p=Az('[data-svelte="svelte-1phssyn"]',document.head);h=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Vr=s(v);M=a(Vr,"A",{id:!0,class:!0,href:!0});var ip=s(M);x=a(ip,"SPAN",{});var dp=s(x);f(T.$$.fragment,dp),dp.forEach(t),ip.forEach(t),y=l(Vr),B=a(Vr,"SPAN",{});var lp=s(B);st=i(lp,"MBart and MBart-50"),lp.forEach(t),Vr.forEach(t),je=l(o),j=a(o,"P",{});var Mn=s(j);Ue=a(Mn,"STRONG",{});var cp=s(Ue);_e=i(cp,"DISCLAIMER:"),cp.forEach(t),rt=i(Mn," If you see something strange, file a "),ge=a(Mn,"A",{href:!0,rel:!0});var pp=s(ge);ke=i(pp,"Github Issue"),pp.forEach(t),it=i(Mn,` and assign
@patrickvonplaten`),Mn.forEach(t),Ke=l(o),Q=a(o,"H2",{class:!0});var Qr=s(Q);O=a(Qr,"A",{id:!0,class:!0,href:!0});var up=s(O);Xe=a(up,"SPAN",{});var hp=s(Xe);f(ae.$$.fragment,hp),hp.forEach(t),up.forEach(t),P=l(Qr),A=a(Qr,"SPAN",{});var mp=s(A);dt=i(mp,"Overview of MBart"),mp.forEach(t),Qr.forEach(t),ce=l(o),pe=a(o,"P",{});var Jr=s(pe);lt=i(Jr,"The MBart model was presented in "),J=a(Jr,"A",{href:!0,rel:!0});var XM=s(J);ct=i(XM,"Multilingual Denoising Pre-training for Neural Machine Translation"),XM.forEach(t),pt=i(Jr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Jr.forEach(t),D=l(o),Ee=a(o,"P",{});var HM=s(Ee);be=i(HM,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),HM.forEach(t),Ze=l(o),se=a(o,"P",{});var fp=s(se);ve=i(fp,"This model was contributed by "),ye=a(fp,"A",{href:!0,rel:!0});var VM=s(ye);ut=i(VM,"valhalla"),VM.forEach(t),re=i(fp,". The Authors\u2019 code can be found "),Te=a(fp,"A",{href:!0,rel:!0});var QM=s(Te);Me=i(QM,"here"),QM.forEach(t),fp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var pu=s(w);$=a(pu,"A",{id:!0,class:!0,href:!0});var JM=s($);we=a(JM,"SPAN",{});var KM=s(we);f(He.$$.fragment,KM),KM.forEach(t),JM.forEach(t),Ut=l(pu),K=a(pu,"SPAN",{});var ZM=s(K);Xt=i(ZM,"Training of MBart"),ZM.forEach(t),pu.forEach(t),kt=l(o),X=a(o,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var YM=s(de);Ht=i(YM,"X [eos, src_lang_code]"),YM.forEach(t),Vt=i(jt," where "),le=a(jt,"CODE",{});var e1=s(le);Qt=i(e1,"X"),e1.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Ve=a(jt,"CODE",{});var t1=s(Ve);Kt=i(t1,"[tgt_lang_code] X [eos]"),t1.forEach(t),Eh=i(jt,". "),rd=a(jt,"CODE",{});var o1=s(rd);Ph=i(o1,"bos"),o1.forEach(t),Ch=i(jt," is never used."),jt.forEach(t),_p=l(o),bt=a(o,"P",{});var Ei=s(bt);Sh=i(Ei,"The regular "),Cn=a(Ei,"A",{href:!0});var UM=s(Cn);id=a(UM,"STRONG",{});var n1=s(id);Ah=i(n1,"call"),n1.forEach(t),Ih=i(UM,"()"),UM.forEach(t),Nh=i(Ei,` will encode source text format, and it should be wrapped
inside the context manager `),Zr=a(Ei,"A",{href:!0});var a1=s(Zr);Oh=i(a1,"as_target_tokenizer()"),a1.forEach(t),Dh=i(Ei," to encode target text format."),Ei.forEach(t),gp=l(o),Yr=a(o,"UL",{});var s1=s(Yr);dd=a(s1,"LI",{});var r1=s(dd);Lh=i(r1,"Supervised training"),r1.forEach(t),s1.forEach(t),kp=l(o),f(Sn.$$.fragment,o),bp=l(o),ei=a(o,"UL",{});var i1=s(ei);An=a(i1,"LI",{});var uu=s(An);ld=a(uu,"P",{});var d1=s(ld);Gh=i(d1,"Generation"),d1.forEach(t),Rh=l(uu),Zt=a(uu,"P",{});var Pi=s(Zt);Wh=i(Pi,"While generating the target text set the "),cd=a(Pi,"CODE",{});var l1=s(cd);Uh=i(l1,"decoder_start_token_id"),l1.forEach(t),Xh=i(Pi,` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=a(Pi,"EM",{});var c1=s(pd);Hh=i(c1,"facebook/mbart-large-en-ro"),c1.forEach(t),Vh=i(Pi," model."),Pi.forEach(t),uu.forEach(t),i1.forEach(t),vp=l(o),f(In.$$.fragment,o),yp=l(o),Yt=a(o,"H2",{class:!0});var hu=s(Yt);So=a(hu,"A",{id:!0,class:!0,href:!0});var p1=s(So);ud=a(p1,"SPAN",{});var u1=s(ud);f(Nn.$$.fragment,u1),u1.forEach(t),p1.forEach(t),Qh=l(hu),hd=a(hu,"SPAN",{});var h1=s(hd);Jh=i(h1,"Overview of MBart-50"),h1.forEach(t),hu.forEach(t),Tp=l(o),vt=a(o,"P",{});var Ci=s(vt);Kh=i(Ci,"MBart-50 was introduced in the "),On=a(Ci,"A",{href:!0,rel:!0});var m1=s(On);Zh=i(m1,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),m1.forEach(t),Yh=i(Ci,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=a(Ci,"EM",{});var f1=s(md);em=i(f1,"mbart-large-cc25"),f1.forEach(t),tm=i(Ci,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ci.forEach(t),Mp=l(o),ti=a(o,"P",{});var _1=s(ti);om=i(_1,"According to the abstract"),_1.forEach(t),wp=l(o),oi=a(o,"P",{});var g1=s(oi);fd=a(g1,"EM",{});var k1=s(fd);nm=i(k1,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),k1.forEach(t),g1.forEach(t),xp=l(o),eo=a(o,"H3",{class:!0});var mu=s(eo);Ao=a(mu,"A",{id:!0,class:!0,href:!0});var b1=s(Ao);_d=a(b1,"SPAN",{});var v1=s(_d);f(Dn.$$.fragment,v1),v1.forEach(t),b1.forEach(t),am=l(mu),gd=a(mu,"SPAN",{});var y1=s(gd);sm=i(y1,"Training of MBart-50"),y1.forEach(t),mu.forEach(t),zp=l(o),et=a(o,"P",{});var wn=s(et);rm=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a(wn,"CODE",{});var T1=s(kd);im=i(T1,"[lang_code] X [eos]"),T1.forEach(t),dm=i(wn,", where "),bd=a(wn,"CODE",{});var M1=s(bd);lm=i(M1,"lang_code"),M1.forEach(t),cm=i(wn,` is source
language id for source text and target language id for target text, with `),vd=a(wn,"CODE",{});var w1=s(vd);pm=i(w1,"X"),w1.forEach(t),um=i(wn,` being the source or target text
respectively.`),wn.forEach(t),qp=l(o),Io=a(o,"P",{});var fu=s(Io);hm=i(fu,"MBart-50 has its own tokenizer "),ni=a(fu,"A",{href:!0});var x1=s(ni);mm=i(x1,"MBart50Tokenizer"),x1.forEach(t),fm=i(fu,"."),fu.forEach(t),Bp=l(o),ai=a(o,"UL",{});var z1=s(ai);yd=a(z1,"LI",{});var q1=s(yd);_m=i(q1,"Supervised training"),q1.forEach(t),z1.forEach(t),$p=l(o),f(Ln.$$.fragment,o),Fp=l(o),si=a(o,"UL",{});var B1=s(si);Gn=a(B1,"LI",{});var _u=s(Gn);Td=a(_u,"P",{});var $1=s(Td);gm=i($1,"Generation"),$1.forEach(t),km=l(_u),xe=a(_u,"P",{});var nt=s(xe);bm=i(nt,"To generate using the mBART-50 multilingual translation models, "),Md=a(nt,"CODE",{});var F1=s(Md);vm=i(F1,"eos_token_id"),F1.forEach(t),ym=i(nt,` is used as the
`),wd=a(nt,"CODE",{});var j1=s(wd);Tm=i(j1,"decoder_start_token_id"),j1.forEach(t),Mm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a(nt,"EM",{});var E1=s(xd);wm=i(E1,"forced_bos_token_id"),E1.forEach(t),xm=i(nt," parameter to the "),zd=a(nt,"EM",{});var P1=s(zd);zm=i(P1,"generate"),P1.forEach(t),qm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),qd=a(nt,"EM",{});var C1=s(qd);Bm=i(C1,"facebook/mbart-50-large-many-to-many"),C1.forEach(t),$m=i(nt," checkpoint."),nt.forEach(t),_u.forEach(t),B1.forEach(t),jp=l(o),f(Rn.$$.fragment,o),Ep=l(o),to=a(o,"H2",{class:!0});var gu=s(to);No=a(gu,"A",{id:!0,class:!0,href:!0});var S1=s(No);Bd=a(S1,"SPAN",{});var A1=s(Bd);f(Wn.$$.fragment,A1),A1.forEach(t),S1.forEach(t),Fm=l(gu),$d=a(gu,"SPAN",{});var I1=s($d);jm=i(I1,"MBartConfig"),I1.forEach(t),gu.forEach(t),Pp=l(o),ze=a(o,"DIV",{class:!0});var Et=s(ze);f(Un.$$.fragment,Et),Em=l(Et),oo=a(Et,"P",{});var Si=s(oo);Pm=i(Si,"This is the configuration class to store the configuration of a "),ri=a(Si,"A",{href:!0});var N1=s(ri);Cm=i(N1,"MBartModel"),N1.forEach(t),Sm=i(Si,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=a(Si,"A",{href:!0,rel:!0});var O1=s(Xn);Am=i(O1,"facebook/mbart-large-cc25"),O1.forEach(t),Im=i(Si," architecture."),Si.forEach(t),Nm=l(Et),no=a(Et,"P",{});var Ai=s(no);Om=i(Ai,"Configuration objects inherit from "),ii=a(Ai,"A",{href:!0});var D1=s(ii);Dm=i(D1,"PretrainedConfig"),D1.forEach(t),Lm=i(Ai,` and can be used to control the model outputs. Read the
documentation from `),di=a(Ai,"A",{href:!0});var L1=s(di);Gm=i(L1,"PretrainedConfig"),L1.forEach(t),Rm=i(Ai," for more information."),Ai.forEach(t),Wm=l(Et),Fd=a(Et,"P",{});var G1=s(Fd);Um=i(G1,"Example:"),G1.forEach(t),Xm=l(Et),f(Hn.$$.fragment,Et),Et.forEach(t),Cp=l(o),ao=a(o,"H2",{class:!0});var ku=s(ao);Oo=a(ku,"A",{id:!0,class:!0,href:!0});var R1=s(Oo);jd=a(R1,"SPAN",{});var W1=s(jd);f(Vn.$$.fragment,W1),W1.forEach(t),R1.forEach(t),Hm=l(ku),Ed=a(ku,"SPAN",{});var U1=s(Ed);Vm=i(U1,"MBartTokenizer"),U1.forEach(t),ku.forEach(t),Sp=l(o),L=a(o,"DIV",{class:!0});var ue=s(L);f(Qn.$$.fragment,ue),Qm=l(ue),Pd=a(ue,"P",{});var X1=s(Pd);Jm=i(X1,"Construct an MBART tokenizer."),X1.forEach(t),Km=l(ue),ht=a(ue,"P",{});var xn=s(ht);Zm=i(xn,"Adapted from "),li=a(xn,"A",{href:!0});var H1=s(li);Ym=i(H1,"RobertaTokenizer"),H1.forEach(t),ef=i(xn," and "),ci=a(xn,"A",{href:!0});var V1=s(ci);tf=i(V1,"XLNetTokenizer"),V1.forEach(t),of=i(xn,`. Based on
`),Jn=a(xn,"A",{href:!0,rel:!0});var Q1=s(Jn);nf=i(Q1,"SentencePiece"),Q1.forEach(t),af=i(xn,"."),xn.forEach(t),sf=l(ue),Kn=a(ue,"P",{});var bu=s(Kn);rf=i(bu,"The tokenization method is "),Cd=a(bu,"CODE",{});var J1=s(Cd);df=i(J1,"<tokens> <eos> <language code>"),J1.forEach(t),lf=i(bu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),bu.forEach(t),cf=l(ue),Sd=a(ue,"P",{});var K1=s(Sd);pf=i(K1,"Examples:"),K1.forEach(t),uf=l(ue),f(Zn.$$.fragment,ue),hf=l(ue),Do=a(ue,"DIV",{class:!0});var vu=s(Do);f(Yn.$$.fragment,vu),mf=l(vu),Ad=a(vu,"P",{});var Z1=s(Ad);ff=i(Z1,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Z1.forEach(t),vu.forEach(t),_f=l(ue),tt=a(ue,"DIV",{class:!0});var zn=s(tt);f(ea.$$.fragment,zn),gf=l(zn),ta=a(zn,"P",{});var yu=s(ta);kf=i(yu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=a(yu,"CODE",{});var Y1=s(Id);bf=i(Y1,"X"),Y1.forEach(t),vf=i(yu," represents the sequence:"),yu.forEach(t),yf=l(zn),oa=a(zn,"UL",{});var Tu=s(oa);na=a(Tu,"LI",{});var Mu=s(na);Nd=a(Mu,"CODE",{});var ew=s(Nd);Tf=i(ew,"input_ids"),ew.forEach(t),Mf=i(Mu," (for encoder) "),Od=a(Mu,"CODE",{});var tw=s(Od);wf=i(tw,"X [eos, src_lang_code]"),tw.forEach(t),Mu.forEach(t),xf=l(Tu),aa=a(Tu,"LI",{});var wu=s(aa);Dd=a(wu,"CODE",{});var ow=s(Dd);zf=i(ow,"decoder_input_ids"),ow.forEach(t),qf=i(wu,": (for decoder) "),Ld=a(wu,"CODE",{});var nw=s(Ld);Bf=i(nw,"X [eos, tgt_lang_code]"),nw.forEach(t),wu.forEach(t),Tu.forEach(t),$f=l(zn),Gd=a(zn,"P",{});var aw=s(Gd);Ff=i(aw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),aw.forEach(t),zn.forEach(t),ue.forEach(t),Ap=l(o),so=a(o,"H2",{class:!0});var xu=s(so);Lo=a(xu,"A",{id:!0,class:!0,href:!0});var sw=s(Lo);Rd=a(sw,"SPAN",{});var rw=s(Rd);f(sa.$$.fragment,rw),rw.forEach(t),sw.forEach(t),jf=l(xu),Wd=a(xu,"SPAN",{});var iw=s(Wd);Ef=i(iw,"MBartTokenizerFast"),iw.forEach(t),xu.forEach(t),Ip=l(o),C=a(o,"DIV",{class:!0});var H=s(C);f(ra.$$.fragment,H),Pf=l(H),ro=a(H,"P",{});var Ii=s(ro);Cf=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=a(Ii,"EM",{});var dw=s(Ud);Sf=i(dw,"tokenizers"),dw.forEach(t),Af=i(Ii,` library). Based on
`),ia=a(Ii,"A",{href:!0,rel:!0});var lw=s(ia);If=i(lw,"BPE"),lw.forEach(t),Nf=i(Ii,"."),Ii.forEach(t),Of=l(H),yt=a(H,"P",{});var Kr=s(yt);pi=a(Kr,"A",{href:!0});var cw=s(pi);Df=i(cw,"MBartTokenizerFast"),cw.forEach(t),Lf=i(Kr," is a subclass of "),ui=a(Kr,"A",{href:!0});var pw=s(ui);Gf=i(pw,"XLMRobertaTokenizerFast"),pw.forEach(t),Rf=i(Kr,`. Refer to superclass
`),hi=a(Kr,"A",{href:!0});var uw=s(hi);Wf=i(uw,"XLMRobertaTokenizerFast"),uw.forEach(t),Uf=i(Kr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Kr.forEach(t),Xf=l(H),da=a(H,"P",{});var zu=s(da);Hf=i(zu,"The tokenization method is "),Xd=a(zu,"CODE",{});var hw=s(Xd);Vf=i(hw,"<tokens> <eos> <language code>"),hw.forEach(t),Qf=i(zu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),zu.forEach(t),Jf=l(H),Hd=a(H,"P",{});var mw=s(Hd);Kf=i(mw,"Examples:"),mw.forEach(t),Zf=l(H),f(la.$$.fragment,H),Yf=l(H),Pe=a(H,"DIV",{class:!0});var Pt=s(Pe);f(ca.$$.fragment,Pt),e_=l(Pt),Vd=a(Pt,"P",{});var fw=s(Vd);t_=i(fw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),fw.forEach(t),o_=l(Pt),pa=a(Pt,"P",{});var qu=s(pa);n_=i(qu,"An MBART sequence has the following format, where "),Qd=a(qu,"CODE",{});var _w=s(Qd);a_=i(_w,"X"),_w.forEach(t),s_=i(qu," represents the sequence:"),qu.forEach(t),r_=l(Pt),ua=a(Pt,"UL",{});var Bu=s(ua);ha=a(Bu,"LI",{});var $u=s(ha);Jd=a($u,"CODE",{});var gw=s(Jd);i_=i(gw,"input_ids"),gw.forEach(t),d_=i($u," (for encoder) "),Kd=a($u,"CODE",{});var kw=s(Kd);l_=i(kw,"X [eos, src_lang_code]"),kw.forEach(t),$u.forEach(t),c_=l(Bu),ma=a(Bu,"LI",{});var Fu=s(ma);Zd=a(Fu,"CODE",{});var bw=s(Zd);p_=i(bw,"decoder_input_ids"),bw.forEach(t),u_=i(Fu,": (for decoder) "),Yd=a(Fu,"CODE",{});var vw=s(Yd);h_=i(vw,"X [eos, tgt_lang_code]"),vw.forEach(t),Fu.forEach(t),Bu.forEach(t),m_=l(Pt),el=a(Pt,"P",{});var yw=s(el);f_=i(yw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),yw.forEach(t),Pt.forEach(t),__=l(H),Go=a(H,"DIV",{class:!0});var ju=s(Go);f(fa.$$.fragment,ju),g_=l(ju),tl=a(ju,"P",{});var Tw=s(tl);k_=i(Tw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Tw.forEach(t),ju.forEach(t),b_=l(H),Ro=a(H,"DIV",{class:!0});var Eu=s(Ro);f(_a.$$.fragment,Eu),v_=l(Eu),ol=a(Eu,"P",{});var Mw=s(ol);y_=i(Mw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Mw.forEach(t),Eu.forEach(t),T_=l(H),Wo=a(H,"DIV",{class:!0});var Pu=s(Wo);f(ga.$$.fragment,Pu),M_=l(Pu),nl=a(Pu,"P",{});var ww=s(nl);w_=i(ww,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),ww.forEach(t),Pu.forEach(t),H.forEach(t),Np=l(o),io=a(o,"H2",{class:!0});var Cu=s(io);Uo=a(Cu,"A",{id:!0,class:!0,href:!0});var xw=s(Uo);al=a(xw,"SPAN",{});var zw=s(al);f(ka.$$.fragment,zw),zw.forEach(t),xw.forEach(t),x_=l(Cu),sl=a(Cu,"SPAN",{});var qw=s(sl);z_=i(qw,"MBart50Tokenizer"),qw.forEach(t),Cu.forEach(t),Op=l(o),S=a(o,"DIV",{class:!0});var V=s(S);f(ba.$$.fragment,V),q_=l(V),va=a(V,"P",{});var Su=s(va);B_=i(Su,"Construct a MBart50 tokenizer. Based on "),ya=a(Su,"A",{href:!0,rel:!0});var Bw=s(ya);$_=i(Bw,"SentencePiece"),Bw.forEach(t),F_=i(Su,"."),Su.forEach(t),j_=l(V),Ta=a(V,"P",{});var Au=s(Ta);E_=i(Au,"This tokenizer inherits from "),mi=a(Au,"A",{href:!0});var $w=s(mi);P_=i($w,"PreTrainedTokenizer"),$w.forEach(t),C_=i(Au,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Au.forEach(t),S_=l(V),rl=a(V,"P",{});var Fw=s(rl);A_=i(Fw,"Examples:"),Fw.forEach(t),I_=l(V),f(Ma.$$.fragment,V),N_=l(V),ot=a(V,"DIV",{class:!0});var qn=s(ot);f(wa.$$.fragment,qn),O_=l(qn),xa=a(qn,"P",{});var Iu=s(xa);D_=i(Iu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=a(Iu,"CODE",{});var jw=s(il);L_=i(jw,"X"),jw.forEach(t),G_=i(Iu," represents the sequence:"),Iu.forEach(t),R_=l(qn),za=a(qn,"UL",{});var Nu=s(za);qa=a(Nu,"LI",{});var Ou=s(qa);dl=a(Ou,"CODE",{});var Ew=s(dl);W_=i(Ew,"input_ids"),Ew.forEach(t),U_=i(Ou," (for encoder) "),ll=a(Ou,"CODE",{});var Pw=s(ll);X_=i(Pw,"[src_lang_code] X [eos]"),Pw.forEach(t),Ou.forEach(t),H_=l(Nu),Ba=a(Nu,"LI",{});var Du=s(Ba);cl=a(Du,"CODE",{});var Cw=s(cl);V_=i(Cw,"labels"),Cw.forEach(t),Q_=i(Du,": (for decoder) "),pl=a(Du,"CODE",{});var Sw=s(pl);J_=i(Sw,"[tgt_lang_code] X [eos]"),Sw.forEach(t),Du.forEach(t),Nu.forEach(t),K_=l(qn),ul=a(qn,"P",{});var Aw=s(ul);Z_=i(Aw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Aw.forEach(t),qn.forEach(t),Y_=l(V),Xo=a(V,"DIV",{class:!0});var Lu=s(Xo);f($a.$$.fragment,Lu),eg=l(Lu),hl=a(Lu,"P",{});var Iw=s(hl);tg=i(Iw,"Converts a sequence of tokens (strings for sub-words) in a single string."),Iw.forEach(t),Lu.forEach(t),og=l(V),Ho=a(V,"DIV",{class:!0});var Gu=s(Ho);f(Fa.$$.fragment,Gu),ng=l(Gu),ja=a(Gu,"P",{});var Ru=s(ja);ag=i(Ru,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=a(Ru,"CODE",{});var Nw=s(ml);sg=i(Nw,"prepare_for_model"),Nw.forEach(t),rg=i(Ru," method."),Ru.forEach(t),Gu.forEach(t),ig=l(V),Vo=a(V,"DIV",{class:!0});var Wu=s(Vo);f(Ea.$$.fragment,Wu),dg=l(Wu),fl=a(Wu,"P",{});var Ow=s(fl);lg=i(Ow,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Ow.forEach(t),Wu.forEach(t),cg=l(V),Qo=a(V,"DIV",{class:!0});var Uu=s(Qo);f(Pa.$$.fragment,Uu),pg=l(Uu),_l=a(Uu,"P",{});var Dw=s(_l);ug=i(Dw,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dw.forEach(t),Uu.forEach(t),V.forEach(t),Dp=l(o),lo=a(o,"H2",{class:!0});var Xu=s(lo);Jo=a(Xu,"A",{id:!0,class:!0,href:!0});var Lw=s(Jo);gl=a(Lw,"SPAN",{});var Gw=s(gl);f(Ca.$$.fragment,Gw),Gw.forEach(t),Lw.forEach(t),hg=l(Xu),kl=a(Xu,"SPAN",{});var Rw=s(kl);mg=i(Rw,"MBart50TokenizerFast"),Rw.forEach(t),Xu.forEach(t),Lp=l(o),G=a(o,"DIV",{class:!0});var he=s(G);f(Sa.$$.fragment,he),fg=l(he),co=a(he,"P",{});var Ni=s(co);_g=i(Ni,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=a(Ni,"EM",{});var Ww=s(bl);gg=i(Ww,"tokenizers"),Ww.forEach(t),kg=i(Ni,` library). Based on
`),Aa=a(Ni,"A",{href:!0,rel:!0});var Uw=s(Aa);bg=i(Uw,"BPE"),Uw.forEach(t),vg=i(Ni,"."),Ni.forEach(t),yg=l(he),Ia=a(he,"P",{});var Hu=s(Ia);Tg=i(Hu,"This tokenizer inherits from "),fi=a(Hu,"A",{href:!0});var Xw=s(fi);Mg=i(Xw,"PreTrainedTokenizerFast"),Xw.forEach(t),wg=i(Hu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hu.forEach(t),xg=l(he),vl=a(he,"P",{});var Hw=s(vl);zg=i(Hw,"Examples:"),Hw.forEach(t),qg=l(he),f(Na.$$.fragment,he),Bg=l(he),Ce=a(he,"DIV",{class:!0});var Ct=s(Ce);f(Oa.$$.fragment,Ct),$g=l(Ct),yl=a(Ct,"P",{});var Vw=s(yl);Fg=i(Vw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Vw.forEach(t),jg=l(Ct),Da=a(Ct,"P",{});var Vu=s(Da);Eg=i(Vu,"An MBART-50 sequence has the following format, where "),Tl=a(Vu,"CODE",{});var Qw=s(Tl);Pg=i(Qw,"X"),Qw.forEach(t),Cg=i(Vu," represents the sequence:"),Vu.forEach(t),Sg=l(Ct),La=a(Ct,"UL",{});var Qu=s(La);Ga=a(Qu,"LI",{});var Ju=s(Ga);Ml=a(Ju,"CODE",{});var Jw=s(Ml);Ag=i(Jw,"input_ids"),Jw.forEach(t),Ig=i(Ju," (for encoder) "),wl=a(Ju,"CODE",{});var Kw=s(wl);Ng=i(Kw,"[src_lang_code] X [eos]"),Kw.forEach(t),Ju.forEach(t),Og=l(Qu),Ra=a(Qu,"LI",{});var Ku=s(Ra);xl=a(Ku,"CODE",{});var Zw=s(xl);Dg=i(Zw,"labels"),Zw.forEach(t),Lg=i(Ku,": (for decoder) "),zl=a(Ku,"CODE",{});var Yw=s(zl);Gg=i(Yw,"[tgt_lang_code] X [eos]"),Yw.forEach(t),Ku.forEach(t),Qu.forEach(t),Rg=l(Ct),ql=a(Ct,"P",{});var e0=s(ql);Wg=i(e0,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),e0.forEach(t),Ct.forEach(t),Ug=l(he),Ko=a(he,"DIV",{class:!0});var Zu=s(Ko);f(Wa.$$.fragment,Zu),Xg=l(Zu),Bl=a(Zu,"P",{});var t0=s(Bl);Hg=i(t0,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),t0.forEach(t),Zu.forEach(t),Vg=l(he),Zo=a(he,"DIV",{class:!0});var Yu=s(Zo);f(Ua.$$.fragment,Yu),Qg=l(Yu),$l=a(Yu,"P",{});var o0=s($l);Jg=i(o0,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),o0.forEach(t),Yu.forEach(t),he.forEach(t),Gp=l(o),po=a(o,"H2",{class:!0});var eh=s(po);Yo=a(eh,"A",{id:!0,class:!0,href:!0});var n0=s(Yo);Fl=a(n0,"SPAN",{});var a0=s(Fl);f(Xa.$$.fragment,a0),a0.forEach(t),n0.forEach(t),Kg=l(eh),jl=a(eh,"SPAN",{});var s0=s(jl);Zg=i(s0,"MBartModel"),s0.forEach(t),eh.forEach(t),Rp=l(o),Qe=a(o,"DIV",{class:!0});var Bn=s(Qe);f(Ha.$$.fragment,Bn),Yg=l(Bn),Va=a(Bn,"P",{});var th=s(Va);ek=i(th,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=a(th,"A",{href:!0});var r0=s(_i);tk=i(r0,"PreTrainedModel"),r0.forEach(t),ok=i(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),nk=l(Bn),Qa=a(Bn,"P",{});var oh=s(Qa);ak=i(oh,"This model is also a PyTorch "),Ja=a(oh,"A",{href:!0,rel:!0});var i0=s(Ja);sk=i(i0,"torch.nn.Module"),i0.forEach(t),rk=i(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),ik=l(Bn),Se=a(Bn,"DIV",{class:!0});var St=s(Se);f(Ka.$$.fragment,St),dk=l(St),uo=a(St,"P",{});var Oi=s(uo);lk=i(Oi,"The "),gi=a(Oi,"A",{href:!0});var d0=s(gi);ck=i(d0,"MBartModel"),d0.forEach(t),pk=i(Oi," forward method, overrides the "),El=a(Oi,"CODE",{});var l0=s(El);uk=i(l0,"__call__"),l0.forEach(t),hk=i(Oi," special method."),Oi.forEach(t),mk=l(St),f(en.$$.fragment,St),fk=l(St),Pl=a(St,"P",{});var c0=s(Pl);_k=i(c0,"Example:"),c0.forEach(t),gk=l(St),f(Za.$$.fragment,St),St.forEach(t),Bn.forEach(t),Wp=l(o),ho=a(o,"H2",{class:!0});var nh=s(ho);tn=a(nh,"A",{id:!0,class:!0,href:!0});var p0=s(tn);Cl=a(p0,"SPAN",{});var u0=s(Cl);f(Ya.$$.fragment,u0),u0.forEach(t),p0.forEach(t),kk=l(nh),Sl=a(nh,"SPAN",{});var h0=s(Sl);bk=i(h0,"MBartForConditionalGeneration"),h0.forEach(t),nh.forEach(t),Up=l(o),Je=a(o,"DIV",{class:!0});var $n=s(Je);f(es.$$.fragment,$n),vk=l($n),ts=a($n,"P",{});var ah=s(ts);yk=i(ah,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=a(ah,"A",{href:!0});var m0=s(ki);Tk=i(m0,"PreTrainedModel"),m0.forEach(t),Mk=i(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),wk=l($n),os=a($n,"P",{});var sh=s(os);xk=i(sh,"This model is also a PyTorch "),ns=a(sh,"A",{href:!0,rel:!0});var f0=s(ns);zk=i(f0,"torch.nn.Module"),f0.forEach(t),qk=i(sh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sh.forEach(t),Bk=l($n),Z=a($n,"DIV",{class:!0});var Le=s(Z);f(as.$$.fragment,Le),$k=l(Le),mo=a(Le,"P",{});var Di=s(mo);Fk=i(Di,"The "),bi=a(Di,"A",{href:!0});var _0=s(bi);jk=i(_0,"MBartForConditionalGeneration"),_0.forEach(t),Ek=i(Di," forward method, overrides the "),Al=a(Di,"CODE",{});var g0=s(Al);Pk=i(g0,"__call__"),g0.forEach(t),Ck=i(Di," special method."),Di.forEach(t),Sk=l(Le),f(on.$$.fragment,Le),Ak=l(Le),Il=a(Le,"P",{});var k0=s(Il);Ik=i(k0,"Summarization example:"),k0.forEach(t),Nk=l(Le),f(ss.$$.fragment,Le),Ok=l(Le),Nl=a(Le,"P",{});var b0=s(Nl);Dk=i(b0,"Mask filling example:"),b0.forEach(t),Lk=l(Le),f(rs.$$.fragment,Le),Le.forEach(t),$n.forEach(t),Xp=l(o),fo=a(o,"H2",{class:!0});var rh=s(fo);nn=a(rh,"A",{id:!0,class:!0,href:!0});var v0=s(nn);Ol=a(v0,"SPAN",{});var y0=s(Ol);f(is.$$.fragment,y0),y0.forEach(t),v0.forEach(t),Gk=l(rh),Dl=a(rh,"SPAN",{});var T0=s(Dl);Rk=i(T0,"MBartForQuestionAnswering"),T0.forEach(t),rh.forEach(t),Hp=l(o),qe=a(o,"DIV",{class:!0});var At=s(qe);f(ds.$$.fragment,At),Wk=l(At),_o=a(At,"P",{});var Li=s(_o);Uk=i(Li,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=a(Li,"CODE",{});var M0=s(Ll);Xk=i(M0,"span start logits"),M0.forEach(t),Hk=i(Li," and "),Gl=a(Li,"CODE",{});var w0=s(Gl);Vk=i(w0,"span end logits"),w0.forEach(t),Qk=i(Li,")."),Li.forEach(t),Jk=l(At),ls=a(At,"P",{});var ih=s(ls);Kk=i(ih,"This model inherits from "),vi=a(ih,"A",{href:!0});var x0=s(vi);Zk=i(x0,"PreTrainedModel"),x0.forEach(t),Yk=i(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),eb=l(At),cs=a(At,"P",{});var dh=s(cs);tb=i(dh,"This model is also a PyTorch "),ps=a(dh,"A",{href:!0,rel:!0});var z0=s(ps);ob=i(z0,"torch.nn.Module"),z0.forEach(t),nb=i(dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dh.forEach(t),ab=l(At),Ae=a(At,"DIV",{class:!0});var It=s(Ae);f(us.$$.fragment,It),sb=l(It),go=a(It,"P",{});var Gi=s(go);rb=i(Gi,"The "),yi=a(Gi,"A",{href:!0});var q0=s(yi);ib=i(q0,"MBartForQuestionAnswering"),q0.forEach(t),db=i(Gi," forward method, overrides the "),Rl=a(Gi,"CODE",{});var B0=s(Rl);lb=i(B0,"__call__"),B0.forEach(t),cb=i(Gi," special method."),Gi.forEach(t),pb=l(It),f(an.$$.fragment,It),ub=l(It),Wl=a(It,"P",{});var $0=s(Wl);hb=i($0,"Example:"),$0.forEach(t),mb=l(It),f(hs.$$.fragment,It),It.forEach(t),At.forEach(t),Vp=l(o),ko=a(o,"H2",{class:!0});var lh=s(ko);sn=a(lh,"A",{id:!0,class:!0,href:!0});var F0=s(sn);Ul=a(F0,"SPAN",{});var j0=s(Ul);f(ms.$$.fragment,j0),j0.forEach(t),F0.forEach(t),fb=l(lh),Xl=a(lh,"SPAN",{});var E0=s(Xl);_b=i(E0,"MBartForSequenceClassification"),E0.forEach(t),lh.forEach(t),Qp=l(o),Be=a(o,"DIV",{class:!0});var Nt=s(Be);f(fs.$$.fragment,Nt),gb=l(Nt),Hl=a(Nt,"P",{});var P0=s(Hl);kb=i(P0,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),P0.forEach(t),bb=l(Nt),_s=a(Nt,"P",{});var ch=s(_s);vb=i(ch,"This model inherits from "),Ti=a(ch,"A",{href:!0});var C0=s(Ti);yb=i(C0,"PreTrainedModel"),C0.forEach(t),Tb=i(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Mb=l(Nt),gs=a(Nt,"P",{});var ph=s(gs);wb=i(ph,"This model is also a PyTorch "),ks=a(ph,"A",{href:!0,rel:!0});var S0=s(ks);xb=i(S0,"torch.nn.Module"),S0.forEach(t),zb=i(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),qb=l(Nt),Y=a(Nt,"DIV",{class:!0});var Ge=s(Y);f(bs.$$.fragment,Ge),Bb=l(Ge),bo=a(Ge,"P",{});var Ri=s(bo);$b=i(Ri,"The "),Mi=a(Ri,"A",{href:!0});var A0=s(Mi);Fb=i(A0,"MBartForSequenceClassification"),A0.forEach(t),jb=i(Ri," forward method, overrides the "),Vl=a(Ri,"CODE",{});var I0=s(Vl);Eb=i(I0,"__call__"),I0.forEach(t),Pb=i(Ri," special method."),Ri.forEach(t),Cb=l(Ge),f(rn.$$.fragment,Ge),Sb=l(Ge),Ql=a(Ge,"P",{});var N0=s(Ql);Ab=i(N0,"Example of single-label classification:"),N0.forEach(t),Ib=l(Ge),f(vs.$$.fragment,Ge),Nb=l(Ge),Jl=a(Ge,"P",{});var O0=s(Jl);Ob=i(O0,"Example of multi-label classification:"),O0.forEach(t),Db=l(Ge),f(ys.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Jp=l(o),vo=a(o,"H2",{class:!0});var uh=s(vo);dn=a(uh,"A",{id:!0,class:!0,href:!0});var D0=s(dn);Kl=a(D0,"SPAN",{});var L0=s(Kl);f(Ts.$$.fragment,L0),L0.forEach(t),D0.forEach(t),Lb=l(uh),Zl=a(uh,"SPAN",{});var G0=s(Zl);Gb=i(G0,"MBartForCausalLM"),G0.forEach(t),uh.forEach(t),Kp=l(o),yo=a(o,"DIV",{class:!0});var hh=s(yo);f(Ms.$$.fragment,hh),Rb=l(hh),Tt=a(hh,"DIV",{class:!0});var Wi=s(Tt);f(ws.$$.fragment,Wi),Wb=l(Wi),Yl=a(Wi,"P",{});var R0=s(Yl);Ub=i(R0,"Example:"),R0.forEach(t),Xb=l(Wi),f(xs.$$.fragment,Wi),Wi.forEach(t),hh.forEach(t),Zp=l(o),To=a(o,"H2",{class:!0});var mh=s(To);ln=a(mh,"A",{id:!0,class:!0,href:!0});var W0=s(ln);ec=a(W0,"SPAN",{});var U0=s(ec);f(zs.$$.fragment,U0),U0.forEach(t),W0.forEach(t),Hb=l(mh),tc=a(mh,"SPAN",{});var X0=s(tc);Vb=i(X0,"TFMBartModel"),X0.forEach(t),mh.forEach(t),Yp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(qs.$$.fragment,Ot),Qb=l(Ot),Bs=a(Ot,"P",{});var fh=s(Bs);Jb=i(fh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=a(fh,"A",{href:!0});var H0=s(wi);Kb=i(H0,"TFPreTrainedModel"),H0.forEach(t),Zb=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Yb=l(Ot),$s=a(Ot,"P",{});var _h=s($s);ev=i(_h,"This model is also a "),Fs=a(_h,"A",{href:!0,rel:!0});var V0=s(Fs);tv=i(V0,"tf.keras.Model"),V0.forEach(t),ov=i(_h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h.forEach(t),nv=l(Ot),f(cn.$$.fragment,Ot),av=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(js.$$.fragment,Dt),sv=l(Dt),Mo=a(Dt,"P",{});var Ui=s(Mo);rv=i(Ui,"The "),xi=a(Ui,"A",{href:!0});var Q0=s(xi);iv=i(Q0,"TFMBartModel"),Q0.forEach(t),dv=i(Ui," forward method, overrides the "),oc=a(Ui,"CODE",{});var J0=s(oc);lv=i(J0,"__call__"),J0.forEach(t),cv=i(Ui," special method."),Ui.forEach(t),pv=l(Dt),f(pn.$$.fragment,Dt),uv=l(Dt),nc=a(Dt,"P",{});var K0=s(nc);hv=i(K0,"Example:"),K0.forEach(t),mv=l(Dt),f(Es.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),eu=l(o),wo=a(o,"H2",{class:!0});var gh=s(wo);un=a(gh,"A",{id:!0,class:!0,href:!0});var Z0=s(un);ac=a(Z0,"SPAN",{});var Y0=s(ac);f(Ps.$$.fragment,Y0),Y0.forEach(t),Z0.forEach(t),fv=l(gh),sc=a(gh,"SPAN",{});var ex=s(sc);_v=i(ex,"TFMBartForConditionalGeneration"),ex.forEach(t),gh.forEach(t),tu=l(o),Fe=a(o,"DIV",{class:!0});var Lt=s(Fe);f(Cs.$$.fragment,Lt),gv=l(Lt),Ss=a(Lt,"P",{});var kh=s(Ss);kv=i(kh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a(kh,"A",{href:!0});var tx=s(zi);bv=i(tx,"TFPreTrainedModel"),tx.forEach(t),vv=i(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(t),yv=l(Lt),As=a(Lt,"P",{});var bh=s(As);Tv=i(bh,"This model is also a "),Is=a(bh,"A",{href:!0,rel:!0});var ox=s(Is);Mv=i(ox,"tf.keras.Model"),ox.forEach(t),wv=i(bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh.forEach(t),xv=l(Lt),f(hn.$$.fragment,Lt),zv=l(Lt),ee=a(Lt,"DIV",{class:!0});var Re=s(ee);f(Ns.$$.fragment,Re),qv=l(Re),xo=a(Re,"P",{});var Xi=s(xo);Bv=i(Xi,"The "),qi=a(Xi,"A",{href:!0});var nx=s(qi);$v=i(nx,"TFMBartForConditionalGeneration"),nx.forEach(t),Fv=i(Xi," forward method, overrides the "),rc=a(Xi,"CODE",{});var ax=s(rc);jv=i(ax,"__call__"),ax.forEach(t),Ev=i(Xi," special method."),Xi.forEach(t),Pv=l(Re),f(mn.$$.fragment,Re),Cv=l(Re),ic=a(Re,"P",{});var sx=s(ic);Sv=i(sx,"Summarization example:"),sx.forEach(t),Av=l(Re),f(Os.$$.fragment,Re),Iv=l(Re),dc=a(Re,"P",{});var rx=s(dc);Nv=i(rx,"Mask filling example:"),rx.forEach(t),Ov=l(Re),f(Ds.$$.fragment,Re),Re.forEach(t),Lt.forEach(t),ou=l(o),zo=a(o,"H2",{class:!0});var vh=s(zo);fn=a(vh,"A",{id:!0,class:!0,href:!0});var ix=s(fn);lc=a(ix,"SPAN",{});var dx=s(lc);f(Ls.$$.fragment,dx),dx.forEach(t),ix.forEach(t),Dv=l(vh),cc=a(vh,"SPAN",{});var lx=s(cc);Lv=i(lx,"FlaxMBartModel"),lx.forEach(t),vh.forEach(t),nu=l(o),R=a(o,"DIV",{class:!0});var me=s(R);f(Gs.$$.fragment,me),Gv=l(me),Rs=a(me,"P",{});var yh=s(Rs);Rv=i(yh,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Bi=a(yh,"A",{href:!0});var cx=s(Bi);Wv=i(cx,"FlaxPreTrainedModel"),cx.forEach(t),Uv=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Xv=l(me),Ws=a(me,"P",{});var Th=s(Ws);Hv=i(Th,`This model is also a Flax Linen
`),Us=a(Th,"A",{href:!0,rel:!0});var px=s(Us);Vv=i(px,"flax.nn.Module"),px.forEach(t),Qv=i(Th,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th.forEach(t),Jv=l(me),pc=a(me,"P",{});var ux=s(pc);Kv=i(ux,"Finally, this model supports inherent JAX features such as:"),ux.forEach(t),Zv=l(me),mt=a(me,"UL",{});var Fn=s(mt);uc=a(Fn,"LI",{});var hx=s(uc);Xs=a(hx,"A",{href:!0,rel:!0});var mx=s(Xs);Yv=i(mx,"Just-In-Time (JIT) compilation"),mx.forEach(t),hx.forEach(t),ey=l(Fn),hc=a(Fn,"LI",{});var fx=s(hc);Hs=a(fx,"A",{href:!0,rel:!0});var _x=s(Hs);ty=i(_x,"Automatic Differentiation"),_x.forEach(t),fx.forEach(t),oy=l(Fn),mc=a(Fn,"LI",{});var gx=s(mc);Vs=a(gx,"A",{href:!0,rel:!0});var kx=s(Vs);ny=i(kx,"Vectorization"),kx.forEach(t),gx.forEach(t),ay=l(Fn),fc=a(Fn,"LI",{});var bx=s(fc);Qs=a(bx,"A",{href:!0,rel:!0});var vx=s(Qs);sy=i(vx,"Parallelization"),vx.forEach(t),bx.forEach(t),Fn.forEach(t),ry=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Js.$$.fragment,Gt),iy=l(Gt),qo=a(Gt,"P",{});var Hi=s(qo);dy=i(Hi,"The "),_c=a(Hi,"CODE",{});var yx=s(_c);ly=i(yx,"FlaxMBartPreTrainedModel"),yx.forEach(t),cy=i(Hi,"forward method, overrides the "),gc=a(Hi,"CODE",{});var Tx=s(gc);py=i(Tx,"__call__"),Tx.forEach(t),uy=i(Hi," special method."),Hi.forEach(t),hy=l(Gt),f(_n.$$.fragment,Gt),my=l(Gt),kc=a(Gt,"P",{});var Mx=s(kc);fy=i(Mx,"Example:"),Mx.forEach(t),_y=l(Gt),f(Ks.$$.fragment,Gt),Gt.forEach(t),gy=l(me),Mt=a(me,"DIV",{class:!0});var Vi=s(Mt);f(Zs.$$.fragment,Vi),ky=l(Vi),bc=a(Vi,"P",{});var wx=s(bc);by=i(wx,"Example:"),wx.forEach(t),vy=l(Vi),f(Ys.$$.fragment,Vi),Vi.forEach(t),yy=l(me),wt=a(me,"DIV",{class:!0});var Qi=s(wt);f(er.$$.fragment,Qi),Ty=l(Qi),vc=a(Qi,"P",{});var xx=s(vc);My=i(xx,"Example:"),xx.forEach(t),wy=l(Qi),f(tr.$$.fragment,Qi),Qi.forEach(t),me.forEach(t),au=l(o),Bo=a(o,"H2",{class:!0});var Mh=s(Bo);gn=a(Mh,"A",{id:!0,class:!0,href:!0});var zx=s(gn);yc=a(zx,"SPAN",{});var qx=s(yc);f(or.$$.fragment,qx),qx.forEach(t),zx.forEach(t),xy=l(Mh),Tc=a(Mh,"SPAN",{});var Bx=s(Tc);zy=i(Bx,"FlaxMBartForConditionalGeneration"),Bx.forEach(t),Mh.forEach(t),su=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);f(nr.$$.fragment,fe),qy=l(fe),ar=a(fe,"P",{});var wh=s(ar);By=i(wh,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(wh,"A",{href:!0});var $x=s($i);$y=i($x,"FlaxPreTrainedModel"),$x.forEach(t),Fy=i(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),jy=l(fe),sr=a(fe,"P",{});var xh=s(sr);Ey=i(xh,`This model is also a Flax Linen
`),rr=a(xh,"A",{href:!0,rel:!0});var Fx=s(rr);Py=i(Fx,"flax.nn.Module"),Fx.forEach(t),Cy=i(xh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xh.forEach(t),Sy=l(fe),Mc=a(fe,"P",{});var jx=s(Mc);Ay=i(jx,"Finally, this model supports inherent JAX features such as:"),jx.forEach(t),Iy=l(fe),ft=a(fe,"UL",{});var jn=s(ft);wc=a(jn,"LI",{});var Ex=s(wc);ir=a(Ex,"A",{href:!0,rel:!0});var Px=s(ir);Ny=i(Px,"Just-In-Time (JIT) compilation"),Px.forEach(t),Ex.forEach(t),Oy=l(jn),xc=a(jn,"LI",{});var Cx=s(xc);dr=a(Cx,"A",{href:!0,rel:!0});var Sx=s(dr);Dy=i(Sx,"Automatic Differentiation"),Sx.forEach(t),Cx.forEach(t),Ly=l(jn),zc=a(jn,"LI",{});var Ax=s(zc);lr=a(Ax,"A",{href:!0,rel:!0});var Ix=s(lr);Gy=i(Ix,"Vectorization"),Ix.forEach(t),Ax.forEach(t),Ry=l(jn),qc=a(jn,"LI",{});var Nx=s(qc);cr=a(Nx,"A",{href:!0,rel:!0});var Ox=s(cr);Wy=i(Ox,"Parallelization"),Ox.forEach(t),Nx.forEach(t),jn.forEach(t),Uy=l(fe),te=a(fe,"DIV",{class:!0});var We=s(te);f(pr.$$.fragment,We),Xy=l(We),$o=a(We,"P",{});var Ji=s($o);Hy=i(Ji,"The "),Bc=a(Ji,"CODE",{});var Dx=s(Bc);Vy=i(Dx,"FlaxMBartPreTrainedModel"),Dx.forEach(t),Qy=i(Ji,"forward method, overrides the "),$c=a(Ji,"CODE",{});var Lx=s($c);Jy=i(Lx,"__call__"),Lx.forEach(t),Ky=i(Ji," special method."),Ji.forEach(t),Zy=l(We),f(kn.$$.fragment,We),Yy=l(We),Fc=a(We,"P",{});var Gx=s(Fc);eT=i(Gx,"Summarization example:"),Gx.forEach(t),tT=l(We),f(ur.$$.fragment,We),oT=l(We),jc=a(We,"P",{});var Rx=s(jc);nT=i(Rx,"Mask filling example:"),Rx.forEach(t),aT=l(We),f(hr.$$.fragment,We),We.forEach(t),sT=l(fe),xt=a(fe,"DIV",{class:!0});var Ki=s(xt);f(mr.$$.fragment,Ki),rT=l(Ki),Ec=a(Ki,"P",{});var Wx=s(Ec);iT=i(Wx,"Example:"),Wx.forEach(t),dT=l(Ki),f(fr.$$.fragment,Ki),Ki.forEach(t),lT=l(fe),zt=a(fe,"DIV",{class:!0});var Zi=s(zt);f(_r.$$.fragment,Zi),cT=l(Zi),Pc=a(Zi,"P",{});var Ux=s(Pc);pT=i(Ux,"Example:"),Ux.forEach(t),uT=l(Zi),f(gr.$$.fragment,Zi),Zi.forEach(t),fe.forEach(t),ru=l(o),Fo=a(o,"H2",{class:!0});var zh=s(Fo);bn=a(zh,"A",{id:!0,class:!0,href:!0});var Xx=s(bn);Cc=a(Xx,"SPAN",{});var Hx=s(Cc);f(kr.$$.fragment,Hx),Hx.forEach(t),Xx.forEach(t),hT=l(zh),Sc=a(zh,"SPAN",{});var Vx=s(Sc);mT=i(Vx,"FlaxMBartForSequenceClassification"),Vx.forEach(t),zh.forEach(t),iu=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(br.$$.fragment,oe),fT=l(oe),Ac=a(oe,"P",{});var Qx=s(Ac);_T=i(Qx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Qx.forEach(t),gT=l(oe),vr=a(oe,"P",{});var qh=s(vr);kT=i(qh,"This model inherits from "),Fi=a(qh,"A",{href:!0});var Jx=s(Fi);bT=i(Jx,"FlaxPreTrainedModel"),Jx.forEach(t),vT=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),yT=l(oe),yr=a(oe,"P",{});var Bh=s(yr);TT=i(Bh,`This model is also a Flax Linen
`),Tr=a(Bh,"A",{href:!0,rel:!0});var Kx=s(Tr);MT=i(Kx,"flax.nn.Module"),Kx.forEach(t),wT=i(Bh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bh.forEach(t),xT=l(oe),Ic=a(oe,"P",{});var Zx=s(Ic);zT=i(Zx,"Finally, this model supports inherent JAX features such as:"),Zx.forEach(t),qT=l(oe),_t=a(oe,"UL",{});var En=s(_t);Nc=a(En,"LI",{});var Yx=s(Nc);Mr=a(Yx,"A",{href:!0,rel:!0});var ez=s(Mr);BT=i(ez,"Just-In-Time (JIT) compilation"),ez.forEach(t),Yx.forEach(t),$T=l(En),Oc=a(En,"LI",{});var tz=s(Oc);wr=a(tz,"A",{href:!0,rel:!0});var oz=s(wr);FT=i(oz,"Automatic Differentiation"),oz.forEach(t),tz.forEach(t),jT=l(En),Dc=a(En,"LI",{});var nz=s(Dc);xr=a(nz,"A",{href:!0,rel:!0});var az=s(xr);ET=i(az,"Vectorization"),az.forEach(t),nz.forEach(t),PT=l(En),Lc=a(En,"LI",{});var sz=s(Lc);zr=a(sz,"A",{href:!0,rel:!0});var rz=s(zr);CT=i(rz,"Parallelization"),rz.forEach(t),sz.forEach(t),En.forEach(t),ST=l(oe),Oe=a(oe,"DIV",{class:!0});var Rt=s(Oe);f(qr.$$.fragment,Rt),AT=l(Rt),jo=a(Rt,"P",{});var Yi=s(jo);IT=i(Yi,"The "),Gc=a(Yi,"CODE",{});var iz=s(Gc);NT=i(iz,"FlaxMBartPreTrainedModel"),iz.forEach(t),OT=i(Yi,"forward method, overrides the "),Rc=a(Yi,"CODE",{});var dz=s(Rc);DT=i(dz,"__call__"),dz.forEach(t),LT=i(Yi," special method."),Yi.forEach(t),GT=l(Rt),f(vn.$$.fragment,Rt),RT=l(Rt),Wc=a(Rt,"P",{});var lz=s(Wc);WT=i(lz,"Example:"),lz.forEach(t),UT=l(Rt),f(Br.$$.fragment,Rt),Rt.forEach(t),XT=l(oe),qt=a(oe,"DIV",{class:!0});var ed=s(qt);f($r.$$.fragment,ed),HT=l(ed),Uc=a(ed,"P",{});var cz=s(Uc);VT=i(cz,"Example:"),cz.forEach(t),QT=l(ed),f(Fr.$$.fragment,ed),ed.forEach(t),JT=l(oe),Bt=a(oe,"DIV",{class:!0});var td=s(Bt);f(jr.$$.fragment,td),KT=l(td),Xc=a(td,"P",{});var pz=s(Xc);ZT=i(pz,"Example:"),pz.forEach(t),YT=l(td),f(Er.$$.fragment,td),td.forEach(t),oe.forEach(t),du=l(o),Eo=a(o,"H2",{class:!0});var $h=s(Eo);yn=a($h,"A",{id:!0,class:!0,href:!0});var uz=s(yn);Hc=a(uz,"SPAN",{});var hz=s(Hc);f(Pr.$$.fragment,hz),hz.forEach(t),uz.forEach(t),eM=l($h),Vc=a($h,"SPAN",{});var mz=s(Vc);tM=i(mz,"FlaxMBartForQuestionAnswering"),mz.forEach(t),$h.forEach(t),lu=l(o),N=a(o,"DIV",{class:!0});var ne=s(N);f(Cr.$$.fragment,ne),oM=l(ne),Po=a(ne,"P",{});var od=s(Po);nM=i(od,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=a(od,"CODE",{});var fz=s(Qc);aM=i(fz,"span start logits"),fz.forEach(t),sM=i(od," and "),Jc=a(od,"CODE",{});var _z=s(Jc);rM=i(_z,"span end logits"),_z.forEach(t),iM=i(od,")."),od.forEach(t),dM=l(ne),Sr=a(ne,"P",{});var Fh=s(Sr);lM=i(Fh,"This model inherits from "),ji=a(Fh,"A",{href:!0});var gz=s(ji);cM=i(gz,"FlaxPreTrainedModel"),gz.forEach(t),pM=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),uM=l(ne),Ar=a(ne,"P",{});var jh=s(Ar);hM=i(jh,`This model is also a Flax Linen
`),Ir=a(jh,"A",{href:!0,rel:!0});var kz=s(Ir);mM=i(kz,"flax.nn.Module"),kz.forEach(t),fM=i(jh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jh.forEach(t),_M=l(ne),Kc=a(ne,"P",{});var bz=s(Kc);gM=i(bz,"Finally, this model supports inherent JAX features such as:"),bz.forEach(t),kM=l(ne),gt=a(ne,"UL",{});var Pn=s(gt);Zc=a(Pn,"LI",{});var vz=s(Zc);Nr=a(vz,"A",{href:!0,rel:!0});var yz=s(Nr);bM=i(yz,"Just-In-Time (JIT) compilation"),yz.forEach(t),vz.forEach(t),vM=l(Pn),Yc=a(Pn,"LI",{});var Tz=s(Yc);Or=a(Tz,"A",{href:!0,rel:!0});var Mz=s(Or);yM=i(Mz,"Automatic Differentiation"),Mz.forEach(t),Tz.forEach(t),TM=l(Pn),ep=a(Pn,"LI",{});var wz=s(ep);Dr=a(wz,"A",{href:!0,rel:!0});var xz=s(Dr);MM=i(xz,"Vectorization"),xz.forEach(t),wz.forEach(t),wM=l(Pn),tp=a(Pn,"LI",{});var zz=s(tp);Lr=a(zz,"A",{href:!0,rel:!0});var qz=s(Lr);xM=i(qz,"Parallelization"),qz.forEach(t),zz.forEach(t),Pn.forEach(t),zM=l(ne),De=a(ne,"DIV",{class:!0});var Wt=s(De);f(Gr.$$.fragment,Wt),qM=l(Wt),Co=a(Wt,"P",{});var nd=s(Co);BM=i(nd,"The "),op=a(nd,"CODE",{});var Bz=s(op);$M=i(Bz,"FlaxMBartPreTrainedModel"),Bz.forEach(t),FM=i(nd,"forward method, overrides the "),np=a(nd,"CODE",{});var $z=s(np);jM=i($z,"__call__"),$z.forEach(t),EM=i(nd," special method."),nd.forEach(t),PM=l(Wt),f(Tn.$$.fragment,Wt),CM=l(Wt),ap=a(Wt,"P",{});var Fz=s(ap);SM=i(Fz,"Example:"),Fz.forEach(t),AM=l(Wt),f(Rr.$$.fragment,Wt),Wt.forEach(t),IM=l(ne),$t=a(ne,"DIV",{class:!0});var ad=s($t);f(Wr.$$.fragment,ad),NM=l(ad),sp=a(ad,"P",{});var jz=s(sp);OM=i(jz,"Example:"),jz.forEach(t),DM=l(ad),f(Ur.$$.fragment,ad),ad.forEach(t),LM=l(ne),Ft=a(ne,"DIV",{class:!0});var sd=s(Ft);f(Xr.$$.fragment,sd),GM=l(sd),rp=a(sd,"P",{});var Ez=s(rp);RM=i(Ez,"Example:"),Ez.forEach(t),WM=l(sd),f(Hr.$$.fragment,sd),sd.forEach(t),ne.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Jz)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(J,"href","https://arxiv.org/abs/2001.08210"),c(J,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Cn,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Zr,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(So,"id","overview-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(On,"href","https://arxiv.org/abs/2008.00401"),c(On,"rel","nofollow"),c(Ao,"id","training-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(ni,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(No,"id","transformers.MBartConfig"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(ri,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartModel"),c(Xn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xn,"rel","nofollow"),c(ii,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(di,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(Oo,"id","transformers.MBartTokenizer"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(li,"href","/docs/transformers/v4.17.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ci,"href","/docs/transformers/v4.17.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jn,"href","https://github.com/google/sentencepiece"),c(Jn,"rel","nofollow"),c(Do,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Lo,"id","transformers.MBartTokenizerFast"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(pi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(ui,"href","/docs/transformers/v4.17.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(hi,"href","/docs/transformers/v4.17.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Go,"class","docstring"),c(Ro,"class","docstring"),c(Wo,"class","docstring"),c(C,"class","docstring"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(ya,"href","https://github.com/google/sentencepiece"),c(ya,"rel","nofollow"),c(mi,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(Qo,"class","docstring"),c(S,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(fi,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Ko,"class","docstring"),c(Zo,"class","docstring"),c(G,"class","docstring"),c(Yo,"id","transformers.MBartModel"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(_i,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(gi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartModel"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(tn,"id","transformers.MBartForConditionalGeneration"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.MBartForConditionalGeneration"),c(ho,"class","relative group"),c(ki,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(bi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Z,"class","docstring"),c(Je,"class","docstring"),c(nn,"id","transformers.MBartForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(vi,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(yi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ae,"class","docstring"),c(qe,"class","docstring"),c(sn,"id","transformers.MBartForSequenceClassification"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(Ti,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Mi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Y,"class","docstring"),c(Be,"class","docstring"),c(dn,"id","transformers.MBartForCausalLM"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.MBartForCausalLM"),c(vo,"class","relative group"),c(Tt,"class","docstring"),c(yo,"class","docstring"),c(ln,"id","transformers.TFMBartModel"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(wi,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(xi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(un,"id","transformers.TFMBartForConditionalGeneration"),c(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(un,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(zi,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Is,"rel","nofollow"),c(qi,"href","/docs/transformers/v4.17.0/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Fe,"class","docstring"),c(fn,"id","transformers.FlaxMBartModel"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.FlaxMBartModel"),c(zo,"class","relative group"),c(Bi,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Us,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(R,"class","docstring"),c(gn,"id","transformers.FlaxMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Bo,"class","relative group"),c($i,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(cr,"rel","nofollow"),c(te,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(W,"class","docstring"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c(Fo,"class","relative group"),c(Fi,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(zr,"rel","nofollow"),c(Oe,"class","docstring"),c(qt,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring"),c(yn,"id","transformers.FlaxMBartForQuestionAnswering"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Eo,"class","relative group"),c(ji,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ir,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Lr,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,v,p),e(v,M),e(M,x),_(T,x,null),e(v,y),e(v,B),e(B,st),u(o,je,p),u(o,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),u(o,Ke,p),u(o,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,A),e(A,dt),u(o,ce,p),u(o,pe,p),e(pe,lt),e(pe,J),e(J,ct),e(pe,pt),u(o,D,p),u(o,Ee,p),e(Ee,be),u(o,Ze,p),u(o,se,p),e(se,ve),e(se,ye),e(ye,ut),e(se,re),e(se,Te),e(Te,Me),u(o,Ye,p),u(o,w,p),e(w,$),e($,we),_(He,we,null),e(w,Ut),e(w,K),e(K,Xt),u(o,kt,p),u(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Eh),e(X,rd),e(rd,Ph),e(X,Ch),u(o,_p,p),u(o,bt,p),e(bt,Sh),e(bt,Cn),e(Cn,id),e(id,Ah),e(Cn,Ih),e(bt,Nh),e(bt,Zr),e(Zr,Oh),e(bt,Dh),u(o,gp,p),u(o,Yr,p),e(Yr,dd),e(dd,Lh),u(o,kp,p),_(Sn,o,p),u(o,bp,p),u(o,ei,p),e(ei,An),e(An,ld),e(ld,Gh),e(An,Rh),e(An,Zt),e(Zt,Wh),e(Zt,cd),e(cd,Uh),e(Zt,Xh),e(Zt,pd),e(pd,Hh),e(Zt,Vh),u(o,vp,p),_(In,o,p),u(o,yp,p),u(o,Yt,p),e(Yt,So),e(So,ud),_(Nn,ud,null),e(Yt,Qh),e(Yt,hd),e(hd,Jh),u(o,Tp,p),u(o,vt,p),e(vt,Kh),e(vt,On),e(On,Zh),e(vt,Yh),e(vt,md),e(md,em),e(vt,tm),u(o,Mp,p),u(o,ti,p),e(ti,om),u(o,wp,p),u(o,oi,p),e(oi,fd),e(fd,nm),u(o,xp,p),u(o,eo,p),e(eo,Ao),e(Ao,_d),_(Dn,_d,null),e(eo,am),e(eo,gd),e(gd,sm),u(o,zp,p),u(o,et,p),e(et,rm),e(et,kd),e(kd,im),e(et,dm),e(et,bd),e(bd,lm),e(et,cm),e(et,vd),e(vd,pm),e(et,um),u(o,qp,p),u(o,Io,p),e(Io,hm),e(Io,ni),e(ni,mm),e(Io,fm),u(o,Bp,p),u(o,ai,p),e(ai,yd),e(yd,_m),u(o,$p,p),_(Ln,o,p),u(o,Fp,p),u(o,si,p),e(si,Gn),e(Gn,Td),e(Td,gm),e(Gn,km),e(Gn,xe),e(xe,bm),e(xe,Md),e(Md,vm),e(xe,ym),e(xe,wd),e(wd,Tm),e(xe,Mm),e(xe,xd),e(xd,wm),e(xe,xm),e(xe,zd),e(zd,zm),e(xe,qm),e(xe,qd),e(qd,Bm),e(xe,$m),u(o,jp,p),_(Rn,o,p),u(o,Ep,p),u(o,to,p),e(to,No),e(No,Bd),_(Wn,Bd,null),e(to,Fm),e(to,$d),e($d,jm),u(o,Pp,p),u(o,ze,p),_(Un,ze,null),e(ze,Em),e(ze,oo),e(oo,Pm),e(oo,ri),e(ri,Cm),e(oo,Sm),e(oo,Xn),e(Xn,Am),e(oo,Im),e(ze,Nm),e(ze,no),e(no,Om),e(no,ii),e(ii,Dm),e(no,Lm),e(no,di),e(di,Gm),e(no,Rm),e(ze,Wm),e(ze,Fd),e(Fd,Um),e(ze,Xm),_(Hn,ze,null),u(o,Cp,p),u(o,ao,p),e(ao,Oo),e(Oo,jd),_(Vn,jd,null),e(ao,Hm),e(ao,Ed),e(Ed,Vm),u(o,Sp,p),u(o,L,p),_(Qn,L,null),e(L,Qm),e(L,Pd),e(Pd,Jm),e(L,Km),e(L,ht),e(ht,Zm),e(ht,li),e(li,Ym),e(ht,ef),e(ht,ci),e(ci,tf),e(ht,of),e(ht,Jn),e(Jn,nf),e(ht,af),e(L,sf),e(L,Kn),e(Kn,rf),e(Kn,Cd),e(Cd,df),e(Kn,lf),e(L,cf),e(L,Sd),e(Sd,pf),e(L,uf),_(Zn,L,null),e(L,hf),e(L,Do),_(Yn,Do,null),e(Do,mf),e(Do,Ad),e(Ad,ff),e(L,_f),e(L,tt),_(ea,tt,null),e(tt,gf),e(tt,ta),e(ta,kf),e(ta,Id),e(Id,bf),e(ta,vf),e(tt,yf),e(tt,oa),e(oa,na),e(na,Nd),e(Nd,Tf),e(na,Mf),e(na,Od),e(Od,wf),e(oa,xf),e(oa,aa),e(aa,Dd),e(Dd,zf),e(aa,qf),e(aa,Ld),e(Ld,Bf),e(tt,$f),e(tt,Gd),e(Gd,Ff),u(o,Ap,p),u(o,so,p),e(so,Lo),e(Lo,Rd),_(sa,Rd,null),e(so,jf),e(so,Wd),e(Wd,Ef),u(o,Ip,p),u(o,C,p),_(ra,C,null),e(C,Pf),e(C,ro),e(ro,Cf),e(ro,Ud),e(Ud,Sf),e(ro,Af),e(ro,ia),e(ia,If),e(ro,Nf),e(C,Of),e(C,yt),e(yt,pi),e(pi,Df),e(yt,Lf),e(yt,ui),e(ui,Gf),e(yt,Rf),e(yt,hi),e(hi,Wf),e(yt,Uf),e(C,Xf),e(C,da),e(da,Hf),e(da,Xd),e(Xd,Vf),e(da,Qf),e(C,Jf),e(C,Hd),e(Hd,Kf),e(C,Zf),_(la,C,null),e(C,Yf),e(C,Pe),_(ca,Pe,null),e(Pe,e_),e(Pe,Vd),e(Vd,t_),e(Pe,o_),e(Pe,pa),e(pa,n_),e(pa,Qd),e(Qd,a_),e(pa,s_),e(Pe,r_),e(Pe,ua),e(ua,ha),e(ha,Jd),e(Jd,i_),e(ha,d_),e(ha,Kd),e(Kd,l_),e(ua,c_),e(ua,ma),e(ma,Zd),e(Zd,p_),e(ma,u_),e(ma,Yd),e(Yd,h_),e(Pe,m_),e(Pe,el),e(el,f_),e(C,__),e(C,Go),_(fa,Go,null),e(Go,g_),e(Go,tl),e(tl,k_),e(C,b_),e(C,Ro),_(_a,Ro,null),e(Ro,v_),e(Ro,ol),e(ol,y_),e(C,T_),e(C,Wo),_(ga,Wo,null),e(Wo,M_),e(Wo,nl),e(nl,w_),u(o,Np,p),u(o,io,p),e(io,Uo),e(Uo,al),_(ka,al,null),e(io,x_),e(io,sl),e(sl,z_),u(o,Op,p),u(o,S,p),_(ba,S,null),e(S,q_),e(S,va),e(va,B_),e(va,ya),e(ya,$_),e(va,F_),e(S,j_),e(S,Ta),e(Ta,E_),e(Ta,mi),e(mi,P_),e(Ta,C_),e(S,S_),e(S,rl),e(rl,A_),e(S,I_),_(Ma,S,null),e(S,N_),e(S,ot),_(wa,ot,null),e(ot,O_),e(ot,xa),e(xa,D_),e(xa,il),e(il,L_),e(xa,G_),e(ot,R_),e(ot,za),e(za,qa),e(qa,dl),e(dl,W_),e(qa,U_),e(qa,ll),e(ll,X_),e(za,H_),e(za,Ba),e(Ba,cl),e(cl,V_),e(Ba,Q_),e(Ba,pl),e(pl,J_),e(ot,K_),e(ot,ul),e(ul,Z_),e(S,Y_),e(S,Xo),_($a,Xo,null),e(Xo,eg),e(Xo,hl),e(hl,tg),e(S,og),e(S,Ho),_(Fa,Ho,null),e(Ho,ng),e(Ho,ja),e(ja,ag),e(ja,ml),e(ml,sg),e(ja,rg),e(S,ig),e(S,Vo),_(Ea,Vo,null),e(Vo,dg),e(Vo,fl),e(fl,lg),e(S,cg),e(S,Qo),_(Pa,Qo,null),e(Qo,pg),e(Qo,_l),e(_l,ug),u(o,Dp,p),u(o,lo,p),e(lo,Jo),e(Jo,gl),_(Ca,gl,null),e(lo,hg),e(lo,kl),e(kl,mg),u(o,Lp,p),u(o,G,p),_(Sa,G,null),e(G,fg),e(G,co),e(co,_g),e(co,bl),e(bl,gg),e(co,kg),e(co,Aa),e(Aa,bg),e(co,vg),e(G,yg),e(G,Ia),e(Ia,Tg),e(Ia,fi),e(fi,Mg),e(Ia,wg),e(G,xg),e(G,vl),e(vl,zg),e(G,qg),_(Na,G,null),e(G,Bg),e(G,Ce),_(Oa,Ce,null),e(Ce,$g),e(Ce,yl),e(yl,Fg),e(Ce,jg),e(Ce,Da),e(Da,Eg),e(Da,Tl),e(Tl,Pg),e(Da,Cg),e(Ce,Sg),e(Ce,La),e(La,Ga),e(Ga,Ml),e(Ml,Ag),e(Ga,Ig),e(Ga,wl),e(wl,Ng),e(La,Og),e(La,Ra),e(Ra,xl),e(xl,Dg),e(Ra,Lg),e(Ra,zl),e(zl,Gg),e(Ce,Rg),e(Ce,ql),e(ql,Wg),e(G,Ug),e(G,Ko),_(Wa,Ko,null),e(Ko,Xg),e(Ko,Bl),e(Bl,Hg),e(G,Vg),e(G,Zo),_(Ua,Zo,null),e(Zo,Qg),e(Zo,$l),e($l,Jg),u(o,Gp,p),u(o,po,p),e(po,Yo),e(Yo,Fl),_(Xa,Fl,null),e(po,Kg),e(po,jl),e(jl,Zg),u(o,Rp,p),u(o,Qe,p),_(Ha,Qe,null),e(Qe,Yg),e(Qe,Va),e(Va,ek),e(Va,_i),e(_i,tk),e(Va,ok),e(Qe,nk),e(Qe,Qa),e(Qa,ak),e(Qa,Ja),e(Ja,sk),e(Qa,rk),e(Qe,ik),e(Qe,Se),_(Ka,Se,null),e(Se,dk),e(Se,uo),e(uo,lk),e(uo,gi),e(gi,ck),e(uo,pk),e(uo,El),e(El,uk),e(uo,hk),e(Se,mk),_(en,Se,null),e(Se,fk),e(Se,Pl),e(Pl,_k),e(Se,gk),_(Za,Se,null),u(o,Wp,p),u(o,ho,p),e(ho,tn),e(tn,Cl),_(Ya,Cl,null),e(ho,kk),e(ho,Sl),e(Sl,bk),u(o,Up,p),u(o,Je,p),_(es,Je,null),e(Je,vk),e(Je,ts),e(ts,yk),e(ts,ki),e(ki,Tk),e(ts,Mk),e(Je,wk),e(Je,os),e(os,xk),e(os,ns),e(ns,zk),e(os,qk),e(Je,Bk),e(Je,Z),_(as,Z,null),e(Z,$k),e(Z,mo),e(mo,Fk),e(mo,bi),e(bi,jk),e(mo,Ek),e(mo,Al),e(Al,Pk),e(mo,Ck),e(Z,Sk),_(on,Z,null),e(Z,Ak),e(Z,Il),e(Il,Ik),e(Z,Nk),_(ss,Z,null),e(Z,Ok),e(Z,Nl),e(Nl,Dk),e(Z,Lk),_(rs,Z,null),u(o,Xp,p),u(o,fo,p),e(fo,nn),e(nn,Ol),_(is,Ol,null),e(fo,Gk),e(fo,Dl),e(Dl,Rk),u(o,Hp,p),u(o,qe,p),_(ds,qe,null),e(qe,Wk),e(qe,_o),e(_o,Uk),e(_o,Ll),e(Ll,Xk),e(_o,Hk),e(_o,Gl),e(Gl,Vk),e(_o,Qk),e(qe,Jk),e(qe,ls),e(ls,Kk),e(ls,vi),e(vi,Zk),e(ls,Yk),e(qe,eb),e(qe,cs),e(cs,tb),e(cs,ps),e(ps,ob),e(cs,nb),e(qe,ab),e(qe,Ae),_(us,Ae,null),e(Ae,sb),e(Ae,go),e(go,rb),e(go,yi),e(yi,ib),e(go,db),e(go,Rl),e(Rl,lb),e(go,cb),e(Ae,pb),_(an,Ae,null),e(Ae,ub),e(Ae,Wl),e(Wl,hb),e(Ae,mb),_(hs,Ae,null),u(o,Vp,p),u(o,ko,p),e(ko,sn),e(sn,Ul),_(ms,Ul,null),e(ko,fb),e(ko,Xl),e(Xl,_b),u(o,Qp,p),u(o,Be,p),_(fs,Be,null),e(Be,gb),e(Be,Hl),e(Hl,kb),e(Be,bb),e(Be,_s),e(_s,vb),e(_s,Ti),e(Ti,yb),e(_s,Tb),e(Be,Mb),e(Be,gs),e(gs,wb),e(gs,ks),e(ks,xb),e(gs,zb),e(Be,qb),e(Be,Y),_(bs,Y,null),e(Y,Bb),e(Y,bo),e(bo,$b),e(bo,Mi),e(Mi,Fb),e(bo,jb),e(bo,Vl),e(Vl,Eb),e(bo,Pb),e(Y,Cb),_(rn,Y,null),e(Y,Sb),e(Y,Ql),e(Ql,Ab),e(Y,Ib),_(vs,Y,null),e(Y,Nb),e(Y,Jl),e(Jl,Ob),e(Y,Db),_(ys,Y,null),u(o,Jp,p),u(o,vo,p),e(vo,dn),e(dn,Kl),_(Ts,Kl,null),e(vo,Lb),e(vo,Zl),e(Zl,Gb),u(o,Kp,p),u(o,yo,p),_(Ms,yo,null),e(yo,Rb),e(yo,Tt),_(ws,Tt,null),e(Tt,Wb),e(Tt,Yl),e(Yl,Ub),e(Tt,Xb),_(xs,Tt,null),u(o,Zp,p),u(o,To,p),e(To,ln),e(ln,ec),_(zs,ec,null),e(To,Hb),e(To,tc),e(tc,Vb),u(o,Yp,p),u(o,$e,p),_(qs,$e,null),e($e,Qb),e($e,Bs),e(Bs,Jb),e(Bs,wi),e(wi,Kb),e(Bs,Zb),e($e,Yb),e($e,$s),e($s,ev),e($s,Fs),e(Fs,tv),e($s,ov),e($e,nv),_(cn,$e,null),e($e,av),e($e,Ie),_(js,Ie,null),e(Ie,sv),e(Ie,Mo),e(Mo,rv),e(Mo,xi),e(xi,iv),e(Mo,dv),e(Mo,oc),e(oc,lv),e(Mo,cv),e(Ie,pv),_(pn,Ie,null),e(Ie,uv),e(Ie,nc),e(nc,hv),e(Ie,mv),_(Es,Ie,null),u(o,eu,p),u(o,wo,p),e(wo,un),e(un,ac),_(Ps,ac,null),e(wo,fv),e(wo,sc),e(sc,_v),u(o,tu,p),u(o,Fe,p),_(Cs,Fe,null),e(Fe,gv),e(Fe,Ss),e(Ss,kv),e(Ss,zi),e(zi,bv),e(Ss,vv),e(Fe,yv),e(Fe,As),e(As,Tv),e(As,Is),e(Is,Mv),e(As,wv),e(Fe,xv),_(hn,Fe,null),e(Fe,zv),e(Fe,ee),_(Ns,ee,null),e(ee,qv),e(ee,xo),e(xo,Bv),e(xo,qi),e(qi,$v),e(xo,Fv),e(xo,rc),e(rc,jv),e(xo,Ev),e(ee,Pv),_(mn,ee,null),e(ee,Cv),e(ee,ic),e(ic,Sv),e(ee,Av),_(Os,ee,null),e(ee,Iv),e(ee,dc),e(dc,Nv),e(ee,Ov),_(Ds,ee,null),u(o,ou,p),u(o,zo,p),e(zo,fn),e(fn,lc),_(Ls,lc,null),e(zo,Dv),e(zo,cc),e(cc,Lv),u(o,nu,p),u(o,R,p),_(Gs,R,null),e(R,Gv),e(R,Rs),e(Rs,Rv),e(Rs,Bi),e(Bi,Wv),e(Rs,Uv),e(R,Xv),e(R,Ws),e(Ws,Hv),e(Ws,Us),e(Us,Vv),e(Ws,Qv),e(R,Jv),e(R,pc),e(pc,Kv),e(R,Zv),e(R,mt),e(mt,uc),e(uc,Xs),e(Xs,Yv),e(mt,ey),e(mt,hc),e(hc,Hs),e(Hs,ty),e(mt,oy),e(mt,mc),e(mc,Vs),e(Vs,ny),e(mt,ay),e(mt,fc),e(fc,Qs),e(Qs,sy),e(R,ry),e(R,Ne),_(Js,Ne,null),e(Ne,iy),e(Ne,qo),e(qo,dy),e(qo,_c),e(_c,ly),e(qo,cy),e(qo,gc),e(gc,py),e(qo,uy),e(Ne,hy),_(_n,Ne,null),e(Ne,my),e(Ne,kc),e(kc,fy),e(Ne,_y),_(Ks,Ne,null),e(R,gy),e(R,Mt),_(Zs,Mt,null),e(Mt,ky),e(Mt,bc),e(bc,by),e(Mt,vy),_(Ys,Mt,null),e(R,yy),e(R,wt),_(er,wt,null),e(wt,Ty),e(wt,vc),e(vc,My),e(wt,wy),_(tr,wt,null),u(o,au,p),u(o,Bo,p),e(Bo,gn),e(gn,yc),_(or,yc,null),e(Bo,xy),e(Bo,Tc),e(Tc,zy),u(o,su,p),u(o,W,p),_(nr,W,null),e(W,qy),e(W,ar),e(ar,By),e(ar,$i),e($i,$y),e(ar,Fy),e(W,jy),e(W,sr),e(sr,Ey),e(sr,rr),e(rr,Py),e(sr,Cy),e(W,Sy),e(W,Mc),e(Mc,Ay),e(W,Iy),e(W,ft),e(ft,wc),e(wc,ir),e(ir,Ny),e(ft,Oy),e(ft,xc),e(xc,dr),e(dr,Dy),e(ft,Ly),e(ft,zc),e(zc,lr),e(lr,Gy),e(ft,Ry),e(ft,qc),e(qc,cr),e(cr,Wy),e(W,Uy),e(W,te),_(pr,te,null),e(te,Xy),e(te,$o),e($o,Hy),e($o,Bc),e(Bc,Vy),e($o,Qy),e($o,$c),e($c,Jy),e($o,Ky),e(te,Zy),_(kn,te,null),e(te,Yy),e(te,Fc),e(Fc,eT),e(te,tT),_(ur,te,null),e(te,oT),e(te,jc),e(jc,nT),e(te,aT),_(hr,te,null),e(W,sT),e(W,xt),_(mr,xt,null),e(xt,rT),e(xt,Ec),e(Ec,iT),e(xt,dT),_(fr,xt,null),e(W,lT),e(W,zt),_(_r,zt,null),e(zt,cT),e(zt,Pc),e(Pc,pT),e(zt,uT),_(gr,zt,null),u(o,ru,p),u(o,Fo,p),e(Fo,bn),e(bn,Cc),_(kr,Cc,null),e(Fo,hT),e(Fo,Sc),e(Sc,mT),u(o,iu,p),u(o,I,p),_(br,I,null),e(I,fT),e(I,Ac),e(Ac,_T),e(I,gT),e(I,vr),e(vr,kT),e(vr,Fi),e(Fi,bT),e(vr,vT),e(I,yT),e(I,yr),e(yr,TT),e(yr,Tr),e(Tr,MT),e(yr,wT),e(I,xT),e(I,Ic),e(Ic,zT),e(I,qT),e(I,_t),e(_t,Nc),e(Nc,Mr),e(Mr,BT),e(_t,$T),e(_t,Oc),e(Oc,wr),e(wr,FT),e(_t,jT),e(_t,Dc),e(Dc,xr),e(xr,ET),e(_t,PT),e(_t,Lc),e(Lc,zr),e(zr,CT),e(I,ST),e(I,Oe),_(qr,Oe,null),e(Oe,AT),e(Oe,jo),e(jo,IT),e(jo,Gc),e(Gc,NT),e(jo,OT),e(jo,Rc),e(Rc,DT),e(jo,LT),e(Oe,GT),_(vn,Oe,null),e(Oe,RT),e(Oe,Wc),e(Wc,WT),e(Oe,UT),_(Br,Oe,null),e(I,XT),e(I,qt),_($r,qt,null),e(qt,HT),e(qt,Uc),e(Uc,VT),e(qt,QT),_(Fr,qt,null),e(I,JT),e(I,Bt),_(jr,Bt,null),e(Bt,KT),e(Bt,Xc),e(Xc,ZT),e(Bt,YT),_(Er,Bt,null),u(o,du,p),u(o,Eo,p),e(Eo,yn),e(yn,Hc),_(Pr,Hc,null),e(Eo,eM),e(Eo,Vc),e(Vc,tM),u(o,lu,p),u(o,N,p),_(Cr,N,null),e(N,oM),e(N,Po),e(Po,nM),e(Po,Qc),e(Qc,aM),e(Po,sM),e(Po,Jc),e(Jc,rM),e(Po,iM),e(N,dM),e(N,Sr),e(Sr,lM),e(Sr,ji),e(ji,cM),e(Sr,pM),e(N,uM),e(N,Ar),e(Ar,hM),e(Ar,Ir),e(Ir,mM),e(Ar,fM),e(N,_M),e(N,Kc),e(Kc,gM),e(N,kM),e(N,gt),e(gt,Zc),e(Zc,Nr),e(Nr,bM),e(gt,vM),e(gt,Yc),e(Yc,Or),e(Or,yM),e(gt,TM),e(gt,ep),e(ep,Dr),e(Dr,MM),e(gt,wM),e(gt,tp),e(tp,Lr),e(Lr,xM),e(N,zM),e(N,De),_(Gr,De,null),e(De,qM),e(De,Co),e(Co,BM),e(Co,op),e(op,$M),e(Co,FM),e(Co,np),e(np,jM),e(Co,EM),e(De,PM),_(Tn,De,null),e(De,CM),e(De,ap),e(ap,SM),e(De,AM),_(Rr,De,null),e(N,IM),e(N,$t),_(Wr,$t,null),e($t,NM),e($t,sp),e(sp,OM),e($t,DM),_(Ur,$t,null),e(N,LM),e(N,Ft),_(Xr,Ft,null),e(Ft,GM),e(Ft,rp),e(rp,RM),e(Ft,WM),_(Hr,Ft,null),cu=!0},p(o,[p]){const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:o}),en.$set(Vr);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),on.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),an.$set(dp);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),rn.$set(lp);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),cn.$set(Mn);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),pn.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),hn.$set(pp);const Qr={};p&2&&(Qr.$$scope={dirty:p,ctx:o}),mn.$set(Qr);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),_n.$set(up);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),kn.$set(hp);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),vn.$set(mp);const Jr={};p&2&&(Jr.$$scope={dirty:p,ctx:o}),Tn.$set(Jr)},i(o){cu||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(Nn.$$.fragment,o),g(Dn.$$.fragment,o),g(Ln.$$.fragment,o),g(Rn.$$.fragment,o),g(Wn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(sa.$$.fragment,o),g(ra.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(Ma.$$.fragment,o),g(wa.$$.fragment,o),g($a.$$.fragment,o),g(Fa.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Sa.$$.fragment,o),g(Na.$$.fragment,o),g(Oa.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ha.$$.fragment,o),g(Ka.$$.fragment,o),g(en.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(on.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(us.$$.fragment,o),g(an.$$.fragment,o),g(hs.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(bs.$$.fragment,o),g(rn.$$.fragment,o),g(vs.$$.fragment,o),g(ys.$$.fragment,o),g(Ts.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(cn.$$.fragment,o),g(js.$$.fragment,o),g(pn.$$.fragment,o),g(Es.$$.fragment,o),g(Ps.$$.fragment,o),g(Cs.$$.fragment,o),g(hn.$$.fragment,o),g(Ns.$$.fragment,o),g(mn.$$.fragment,o),g(Os.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Js.$$.fragment,o),g(_n.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(pr.$$.fragment,o),g(kn.$$.fragment,o),g(ur.$$.fragment,o),g(hr.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(br.$$.fragment,o),g(qr.$$.fragment,o),g(vn.$$.fragment,o),g(Br.$$.fragment,o),g($r.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Cr.$$.fragment,o),g(Gr.$$.fragment,o),g(Tn.$$.fragment,o),g(Rr.$$.fragment,o),g(Wr.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),g(Hr.$$.fragment,o),cu=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(He.$$.fragment,o),k(Sn.$$.fragment,o),k(In.$$.fragment,o),k(Nn.$$.fragment,o),k(Dn.$$.fragment,o),k(Ln.$$.fragment,o),k(Rn.$$.fragment,o),k(Wn.$$.fragment,o),k(Un.$$.fragment,o),k(Hn.$$.fragment,o),k(Vn.$$.fragment,o),k(Qn.$$.fragment,o),k(Zn.$$.fragment,o),k(Yn.$$.fragment,o),k(ea.$$.fragment,o),k(sa.$$.fragment,o),k(ra.$$.fragment,o),k(la.$$.fragment,o),k(ca.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(ba.$$.fragment,o),k(Ma.$$.fragment,o),k(wa.$$.fragment,o),k($a.$$.fragment,o),k(Fa.$$.fragment,o),k(Ea.$$.fragment,o),k(Pa.$$.fragment,o),k(Ca.$$.fragment,o),k(Sa.$$.fragment,o),k(Na.$$.fragment,o),k(Oa.$$.fragment,o),k(Wa.$$.fragment,o),k(Ua.$$.fragment,o),k(Xa.$$.fragment,o),k(Ha.$$.fragment,o),k(Ka.$$.fragment,o),k(en.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(es.$$.fragment,o),k(as.$$.fragment,o),k(on.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(us.$$.fragment,o),k(an.$$.fragment,o),k(hs.$$.fragment,o),k(ms.$$.fragment,o),k(fs.$$.fragment,o),k(bs.$$.fragment,o),k(rn.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(Ts.$$.fragment,o),k(Ms.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(qs.$$.fragment,o),k(cn.$$.fragment,o),k(js.$$.fragment,o),k(pn.$$.fragment,o),k(Es.$$.fragment,o),k(Ps.$$.fragment,o),k(Cs.$$.fragment,o),k(hn.$$.fragment,o),k(Ns.$$.fragment,o),k(mn.$$.fragment,o),k(Os.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Js.$$.fragment,o),k(_n.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(nr.$$.fragment,o),k(pr.$$.fragment,o),k(kn.$$.fragment,o),k(ur.$$.fragment,o),k(hr.$$.fragment,o),k(mr.$$.fragment,o),k(fr.$$.fragment,o),k(_r.$$.fragment,o),k(gr.$$.fragment,o),k(kr.$$.fragment,o),k(br.$$.fragment,o),k(qr.$$.fragment,o),k(vn.$$.fragment,o),k(Br.$$.fragment,o),k($r.$$.fragment,o),k(Fr.$$.fragment,o),k(jr.$$.fragment,o),k(Er.$$.fragment,o),k(Pr.$$.fragment,o),k(Cr.$$.fragment,o),k(Gr.$$.fragment,o),k(Tn.$$.fragment,o),k(Rr.$$.fragment,o),k(Wr.$$.fragment,o),k(Ur.$$.fragment,o),k(Xr.$$.fragment,o),k(Hr.$$.fragment,o),cu=!1},d(o){t(h),o&&t(z),o&&t(v),b(T),o&&t(je),o&&t(j),o&&t(Ke),o&&t(Q),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ee),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(w),b(He),o&&t(kt),o&&t(X),o&&t(_p),o&&t(bt),o&&t(gp),o&&t(Yr),o&&t(kp),b(Sn,o),o&&t(bp),o&&t(ei),o&&t(vp),b(In,o),o&&t(yp),o&&t(Yt),b(Nn),o&&t(Tp),o&&t(vt),o&&t(Mp),o&&t(ti),o&&t(wp),o&&t(oi),o&&t(xp),o&&t(eo),b(Dn),o&&t(zp),o&&t(et),o&&t(qp),o&&t(Io),o&&t(Bp),o&&t(ai),o&&t($p),b(Ln,o),o&&t(Fp),o&&t(si),o&&t(jp),b(Rn,o),o&&t(Ep),o&&t(to),b(Wn),o&&t(Pp),o&&t(ze),b(Un),b(Hn),o&&t(Cp),o&&t(ao),b(Vn),o&&t(Sp),o&&t(L),b(Qn),b(Zn),b(Yn),b(ea),o&&t(Ap),o&&t(so),b(sa),o&&t(Ip),o&&t(C),b(ra),b(la),b(ca),b(fa),b(_a),b(ga),o&&t(Np),o&&t(io),b(ka),o&&t(Op),o&&t(S),b(ba),b(Ma),b(wa),b($a),b(Fa),b(Ea),b(Pa),o&&t(Dp),o&&t(lo),b(Ca),o&&t(Lp),o&&t(G),b(Sa),b(Na),b(Oa),b(Wa),b(Ua),o&&t(Gp),o&&t(po),b(Xa),o&&t(Rp),o&&t(Qe),b(Ha),b(Ka),b(en),b(Za),o&&t(Wp),o&&t(ho),b(Ya),o&&t(Up),o&&t(Je),b(es),b(as),b(on),b(ss),b(rs),o&&t(Xp),o&&t(fo),b(is),o&&t(Hp),o&&t(qe),b(ds),b(us),b(an),b(hs),o&&t(Vp),o&&t(ko),b(ms),o&&t(Qp),o&&t(Be),b(fs),b(bs),b(rn),b(vs),b(ys),o&&t(Jp),o&&t(vo),b(Ts),o&&t(Kp),o&&t(yo),b(Ms),b(ws),b(xs),o&&t(Zp),o&&t(To),b(zs),o&&t(Yp),o&&t($e),b(qs),b(cn),b(js),b(pn),b(Es),o&&t(eu),o&&t(wo),b(Ps),o&&t(tu),o&&t(Fe),b(Cs),b(hn),b(Ns),b(mn),b(Os),b(Ds),o&&t(ou),o&&t(zo),b(Ls),o&&t(nu),o&&t(R),b(Gs),b(Js),b(_n),b(Ks),b(Zs),b(Ys),b(er),b(tr),o&&t(au),o&&t(Bo),b(or),o&&t(su),o&&t(W),b(nr),b(pr),b(kn),b(ur),b(hr),b(mr),b(fr),b(_r),b(gr),o&&t(ru),o&&t(Fo),b(kr),o&&t(iu),o&&t(I),b(br),b(qr),b(vn),b(Br),b($r),b(Fr),b(jr),b(Er),o&&t(du),o&&t(Eo),b(Pr),o&&t(lu),o&&t(N),b(Cr),b(Gr),b(Tn),b(Rr),b(Wr),b(Ur),b(Xr),b(Hr)}}}const Jz={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Kz(E,h,z){let{fw:v}=h;return E.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class a2 extends Pz{constructor(h){super();Cz(this,h,Kz,Qz,Sz,{fw:0})}}export{a2 as default,Jz as metadata};
