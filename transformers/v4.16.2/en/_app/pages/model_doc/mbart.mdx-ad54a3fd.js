import{S as jz,i as Ez,s as Pz,e as n,k as d,w as m,t as r,L as Cz,c as a,d as t,m as l,a as s,x as f,h as i,b as c,J as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-b1433968.js";import{T as at}from"../../chunks/Tip-c3840994.js";import{D as q}from"../../chunks/Docstring-ff504c58.js";import{C as F}from"../../chunks/CodeBlock-a320dbd7.js";import{I as U}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Sz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Az(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Iz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Nz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Oz(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=a(w,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,je,$),u(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),u(w,Q,$),u(w,O,$),e(O,Xe),u(w,ae,$),u(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ut),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function Dz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
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
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Rz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Wz(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
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
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function Hz(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye,w,$,we,He,Ut,K,Xt,kt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Fh,sd,jh,Eh,fp,bt,Ph,Pn,rd,Ch,Sh,Ah,Kr,Ih,Nh,_p,Zr,id,Oh,gp,Cn,kp,Yr,Sn,dd,Dh,Lh,Zt,Gh,ld,Rh,Wh,cd,Uh,Xh,bp,An,vp,Yt,Co,pd,In,Hh,ud,Vh,yp,vt,Qh,Nn,Jh,Kh,hd,Zh,Yh,Tp,ei,em,Mp,ti,md,tm,wp,eo,So,fd,On,om,_d,nm,xp,et,am,gd,sm,rm,kd,im,dm,bd,lm,cm,zp,Ao,pm,oi,um,hm,qp,ni,vd,mm,Bp,Dn,$p,ai,Ln,yd,fm,_m,xe,gm,Td,km,bm,Md,vm,ym,wd,Tm,Mm,xd,wm,xm,zd,zm,qm,Fp,Gn,jp,to,Io,qd,Rn,Bm,Bd,$m,Ep,ze,Wn,Fm,oo,jm,si,Em,Pm,Un,Cm,Sm,Am,no,Im,ri,Nm,Om,ii,Dm,Lm,Gm,$d,Rm,Wm,Xn,Pp,ao,No,Fd,Hn,Um,jd,Xm,Cp,L,Vn,Hm,Ed,Vm,Qm,ht,Jm,di,Km,Zm,li,Ym,ef,Qn,tf,of,nf,Jn,af,Pd,sf,rf,df,Cd,lf,cf,Kn,pf,Oo,Zn,uf,Sd,hf,mf,tt,Yn,ff,ea,_f,Ad,gf,kf,bf,ta,oa,Id,vf,yf,Nd,Tf,Mf,na,Od,wf,xf,Dd,zf,qf,Ld,Bf,Sp,so,Do,Gd,aa,$f,Rd,Ff,Ap,C,sa,jf,ro,Ef,Wd,Pf,Cf,ra,Sf,Af,If,yt,ci,Nf,Of,pi,Df,Lf,ui,Gf,Rf,Wf,ia,Uf,Ud,Xf,Hf,Vf,Xd,Qf,Jf,da,Kf,Pe,la,Zf,Hd,Yf,e_,ca,t_,Vd,o_,n_,a_,pa,ua,Qd,s_,r_,Jd,i_,d_,ha,Kd,l_,c_,Zd,p_,u_,Yd,h_,m_,Lo,ma,f_,el,__,g_,Go,fa,k_,tl,b_,v_,Ro,_a,y_,ol,T_,Ip,io,Wo,nl,ga,M_,al,w_,Np,S,ka,x_,ba,z_,va,q_,B_,$_,ya,F_,hi,j_,E_,P_,sl,C_,S_,Ta,A_,ot,Ma,I_,wa,N_,rl,O_,D_,L_,xa,za,il,G_,R_,dl,W_,U_,qa,ll,X_,H_,cl,V_,Q_,pl,J_,K_,Uo,Ba,Z_,ul,Y_,eg,Xo,$a,tg,Fa,og,hl,ng,ag,sg,Ho,ja,rg,ml,ig,dg,Vo,Ea,lg,fl,cg,Op,lo,Qo,_l,Pa,pg,gl,ug,Dp,G,Ca,hg,co,mg,kl,fg,_g,Sa,gg,kg,bg,Aa,vg,mi,yg,Tg,Mg,bl,wg,xg,Ia,zg,Ce,Na,qg,vl,Bg,$g,Oa,Fg,yl,jg,Eg,Pg,Da,La,Tl,Cg,Sg,Ml,Ag,Ig,Ga,wl,Ng,Og,xl,Dg,Lg,zl,Gg,Rg,Jo,Ra,Wg,ql,Ug,Xg,Ko,Wa,Hg,Bl,Vg,Lp,po,Zo,$l,Ua,Qg,Fl,Jg,Gp,Qe,Xa,Kg,Ha,Zg,fi,Yg,ek,tk,Va,ok,Qa,nk,ak,sk,Se,Ja,rk,uo,ik,_i,dk,lk,jl,ck,pk,uk,Yo,hk,El,mk,fk,Ka,Rp,ho,en,Pl,Za,_k,Cl,gk,Wp,Je,Ya,kk,es,bk,gi,vk,yk,Tk,ts,Mk,os,wk,xk,zk,Z,ns,qk,mo,Bk,ki,$k,Fk,Sl,jk,Ek,Pk,tn,Ck,Al,Sk,Ak,as,Ik,Il,Nk,Ok,ss,Up,fo,on,Nl,rs,Dk,Ol,Lk,Xp,qe,is,Gk,_o,Rk,Dl,Wk,Uk,Ll,Xk,Hk,Vk,ds,Qk,bi,Jk,Kk,Zk,ls,Yk,cs,eb,tb,ob,Ae,ps,nb,go,ab,vi,sb,rb,Gl,ib,db,lb,nn,cb,Rl,pb,ub,us,Hp,ko,an,Wl,hs,hb,Ul,mb,Vp,Be,ms,fb,Xl,_b,gb,fs,kb,yi,bb,vb,yb,_s,Tb,gs,Mb,wb,xb,Y,ks,zb,bo,qb,Ti,Bb,$b,Hl,Fb,jb,Eb,sn,Pb,Vl,Cb,Sb,bs,Ab,Ql,Ib,Nb,vs,Qp,vo,rn,Jl,ys,Ob,Kl,Db,Jp,Ts,Tt,Ms,Lb,Zl,Gb,Rb,ws,Kp,yo,dn,Yl,xs,Wb,ec,Ub,Zp,$e,zs,Xb,qs,Hb,Mi,Vb,Qb,Jb,Bs,Kb,$s,Zb,Yb,ev,ln,tv,Ie,Fs,ov,To,nv,wi,av,sv,tc,rv,iv,dv,cn,lv,oc,cv,pv,js,Yp,Mo,pn,nc,Es,uv,ac,hv,eu,Fe,Ps,mv,Cs,fv,xi,_v,gv,kv,Ss,bv,As,vv,yv,Tv,un,Mv,ee,Is,wv,wo,xv,zi,zv,qv,sc,Bv,$v,Fv,hn,jv,rc,Ev,Pv,Ns,Cv,ic,Sv,Av,Os,tu,xo,mn,dc,Ds,Iv,lc,Nv,ou,R,Ls,Ov,Gs,Dv,qi,Lv,Gv,Rv,Rs,Wv,Ws,Uv,Xv,Hv,cc,Vv,Qv,mt,pc,Us,Jv,Kv,uc,Xs,Zv,Yv,hc,Hs,ey,ty,mc,Vs,oy,ny,Ne,Qs,ay,zo,sy,fc,ry,iy,_c,dy,ly,cy,fn,py,gc,uy,hy,Js,my,Mt,Ks,fy,kc,_y,gy,Zs,ky,wt,Ys,by,bc,vy,yy,er,nu,qo,_n,vc,tr,Ty,yc,My,au,W,or,wy,nr,xy,Bi,zy,qy,By,ar,$y,sr,Fy,jy,Ey,Tc,Py,Cy,ft,Mc,rr,Sy,Ay,wc,ir,Iy,Ny,xc,dr,Oy,Dy,zc,lr,Ly,Gy,te,cr,Ry,Bo,Wy,qc,Uy,Xy,Bc,Hy,Vy,Qy,gn,Jy,$c,Ky,Zy,pr,Yy,Fc,eT,tT,ur,oT,xt,hr,nT,jc,aT,sT,mr,rT,zt,fr,iT,Ec,dT,lT,_r,su,$o,kn,Pc,gr,cT,Cc,pT,ru,I,kr,uT,Sc,hT,mT,br,fT,$i,_T,gT,kT,vr,bT,yr,vT,yT,TT,Ac,MT,wT,_t,Ic,Tr,xT,zT,Nc,Mr,qT,BT,Oc,wr,$T,FT,Dc,xr,jT,ET,Oe,zr,PT,Fo,CT,Lc,ST,AT,Gc,IT,NT,OT,bn,DT,Rc,LT,GT,qr,RT,qt,Br,WT,Wc,UT,XT,$r,HT,Bt,Fr,VT,Uc,QT,JT,jr,iu,jo,vn,Xc,Er,KT,Hc,ZT,du,N,Pr,YT,Eo,eM,Vc,tM,oM,Qc,nM,aM,sM,Cr,rM,Fi,iM,dM,lM,Sr,cM,Ar,pM,uM,hM,Jc,mM,fM,gt,Kc,Ir,_M,gM,Zc,Nr,kM,bM,Yc,Or,vM,yM,ep,Dr,TM,MM,De,Lr,wM,Po,xM,tp,zM,qM,op,BM,$M,FM,yn,jM,np,EM,PM,Gr,CM,$t,Rr,SM,ap,AM,IM,Wr,NM,Ft,Ur,OM,sp,DM,LM,Xr,lu;return T=new U({}),ae=new U({}),He=new U({}),Cn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),An=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),In=new U({}),On=new U({}),Dn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Gn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
# => "The Secretary-General of the United Nations says there is no military solution in Syria.",`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Rn=new U({}),Wn=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Xn=new F({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Hn=new U({}),Vn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Kn=new F({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Zn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Yn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),aa=new U({}),sa=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart_fast.py#L61"}}),da=new F({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),la=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart_fast.py#L163",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ma=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart_fast.py#L192",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart_fast.py#L251"}}),_a=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/tokenization_mbart_fast.py#L266"}}),ga=new U({}),ka=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ta=new F({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ma=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ba=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),$a=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Ea=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Pa=new U({}),Ca=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Ia=new F({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L221"}}),Wa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L236"}}),Ua=new U({}),Xa=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1123",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ja=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1150",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new at({props:{$$slots:{default:[Sz]},$$scope:{ctx:E}}}),Ka=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Za=new U({}),Ya=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1239",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ns=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1283",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new at({props:{$$slots:{default:[Az]},$$scope:{ctx:E}}}),as=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),rs=new U({}),is=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1535",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ps=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1547",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new at({props:{$$slots:{default:[Iz]},$$scope:{ctx:E}}}),us=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),hs=new U({}),ms=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1409",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ks=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1422",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new at({props:{$$slots:{default:[Nz]},$$scope:{ctx:E}}}),bs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new U({}),Ms=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_mbart.py#L1697",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xs=new U({}),zs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_tf_mbart.py#L1200",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new at({props:{$$slots:{default:[Oz]},$$scope:{ctx:E}}}),Fs=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_tf_mbart.py#L1212",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new at({props:{$$slots:{default:[Dz]},$$scope:{ctx:E}}}),js=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Es=new U({}),Ps=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_tf_mbart.py#L1307",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new at({props:{$$slots:{default:[Lz]},$$scope:{ctx:E}}}),Is=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_tf_mbart.py#L1340",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new at({props:{$$slots:{default:[Gz]},$$scope:{ctx:E}}}),Ns=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Os=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ds=new U({}),Ls=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1266",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Qs=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new at({props:{$$slots:{default:[Rz]},$$scope:{ctx:E}}}),Js=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ks=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zs=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ys=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),tr=new U({}),or=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1353",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),cr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new at({props:{$$slots:{default:[Wz]},$$scope:{ctx:E}}}),pr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),hr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),fr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gr=new U({}),kr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1666",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),zr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new at({props:{$$slots:{default:[Uz]},$$scope:{ctx:E}}}),qr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Br=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$r=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Fr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Er=new U({}),Pr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1754",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Lr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new at({props:{$$slots:{default:[Xz]},$$scope:{ctx:E}}}),Gr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Rr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ur=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

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
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Fh=r(". "),sd=n("code"),jh=r("bos"),Eh=r(" is never used."),fp=d(),bt=n("p"),Ph=r("The regular "),Pn=n("a"),rd=n("strong"),Ch=r("call"),Sh=r("()"),Ah=r(` will encode source text format, and it should be wrapped
inside the context manager `),Kr=n("a"),Ih=r("as_target_tokenizer()"),Nh=r(" to encode target text format."),_p=d(),Zr=n("ul"),id=n("li"),Oh=r("Supervised training"),gp=d(),m(Cn.$$.fragment),kp=d(),Yr=n("ul"),Sn=n("li"),dd=n("p"),Dh=r("Generation"),Lh=d(),Zt=n("p"),Gh=r("While generating the target text set the "),ld=n("code"),Rh=r("decoder_start_token_id"),Wh=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=n("em"),Uh=r("facebook/mbart-large-en-ro"),Xh=r(" model."),bp=d(),m(An.$$.fragment),vp=d(),Yt=n("h2"),Co=n("a"),pd=n("span"),m(In.$$.fragment),Hh=d(),ud=n("span"),Vh=r("Overview of MBart-50"),yp=d(),vt=n("p"),Qh=r("MBart-50 was introduced in the "),Nn=n("a"),Jh=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Kh=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=n("em"),Zh=r("mbart-large-cc25"),Yh=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Tp=d(),ei=n("p"),em=r("According to the abstract"),Mp=d(),ti=n("p"),md=n("em"),tm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),wp=d(),eo=n("h3"),So=n("a"),fd=n("span"),m(On.$$.fragment),om=d(),_d=n("span"),nm=r("Training of MBart-50"),xp=d(),et=n("p"),am=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=n("code"),sm=r("[lang_code] X [eos]"),rm=r(", where "),kd=n("code"),im=r("lang_code"),dm=r(` is source
language id for source text and target language id for target text, with `),bd=n("code"),lm=r("X"),cm=r(` being the source or target text
respectively.`),zp=d(),Ao=n("p"),pm=r("MBart-50 has its own tokenizer "),oi=n("a"),um=r("MBart50Tokenizer"),hm=r("."),qp=d(),ni=n("ul"),vd=n("li"),mm=r("Supervised training"),Bp=d(),m(Dn.$$.fragment),$p=d(),ai=n("ul"),Ln=n("li"),yd=n("p"),fm=r("Generation"),_m=d(),xe=n("p"),gm=r("To generate using the mBART-50 multilingual translation models, "),Td=n("code"),km=r("eos_token_id"),bm=r(` is used as the
`),Md=n("code"),vm=r("decoder_start_token_id"),ym=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=n("em"),Tm=r("forced_bos_token_id"),Mm=r(" parameter to the "),xd=n("em"),wm=r("generate"),xm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),zd=n("em"),zm=r("facebook/mbart-50-large-many-to-many"),qm=r(" checkpoint."),Fp=d(),m(Gn.$$.fragment),jp=d(),to=n("h2"),Io=n("a"),qd=n("span"),m(Rn.$$.fragment),Bm=d(),Bd=n("span"),$m=r("MBartConfig"),Ep=d(),ze=n("div"),m(Wn.$$.fragment),Fm=d(),oo=n("p"),jm=r("This is the configuration class to store the configuration of a "),si=n("a"),Em=r("MBartModel"),Pm=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Un=n("a"),Cm=r("facebook/mbart-large-cc25"),Sm=r(" architecture."),Am=d(),no=n("p"),Im=r("Configuration objects inherit from "),ri=n("a"),Nm=r("PretrainedConfig"),Om=r(` and can be used to control the model outputs. Read the
documentation from `),ii=n("a"),Dm=r("PretrainedConfig"),Lm=r(" for more information."),Gm=d(),$d=n("p"),Rm=r("Example:"),Wm=d(),m(Xn.$$.fragment),Pp=d(),ao=n("h2"),No=n("a"),Fd=n("span"),m(Hn.$$.fragment),Um=d(),jd=n("span"),Xm=r("MBartTokenizer"),Cp=d(),L=n("div"),m(Vn.$$.fragment),Hm=d(),Ed=n("p"),Vm=r("Construct an MBART tokenizer."),Qm=d(),ht=n("p"),Jm=r("Adapted from "),di=n("a"),Km=r("RobertaTokenizer"),Zm=r(" and "),li=n("a"),Ym=r("XLNetTokenizer"),ef=r(`. Based on
`),Qn=n("a"),tf=r("SentencePiece"),of=r("."),nf=d(),Jn=n("p"),af=r("The tokenization method is "),Pd=n("code"),sf=r("<tokens> <eos> <language code>"),rf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),df=d(),Cd=n("p"),lf=r("Examples:"),cf=d(),m(Kn.$$.fragment),pf=d(),Oo=n("div"),m(Zn.$$.fragment),uf=d(),Sd=n("p"),hf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),mf=d(),tt=n("div"),m(Yn.$$.fragment),ff=d(),ea=n("p"),_f=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=n("code"),gf=r("X"),kf=r(" represents the sequence:"),bf=d(),ta=n("ul"),oa=n("li"),Id=n("code"),vf=r("input_ids"),yf=r(" (for encoder) "),Nd=n("code"),Tf=r("X [eos, src_lang_code]"),Mf=d(),na=n("li"),Od=n("code"),wf=r("decoder_input_ids"),xf=r(": (for decoder) "),Dd=n("code"),zf=r("X [eos, tgt_lang_code]"),qf=d(),Ld=n("p"),Bf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Sp=d(),so=n("h2"),Do=n("a"),Gd=n("span"),m(aa.$$.fragment),$f=d(),Rd=n("span"),Ff=r("MBartTokenizerFast"),Ap=d(),C=n("div"),m(sa.$$.fragment),jf=d(),ro=n("p"),Ef=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Wd=n("em"),Pf=r("tokenizers"),Cf=r(` library). Based on
`),ra=n("a"),Sf=r("BPE"),Af=r("."),If=d(),yt=n("p"),ci=n("a"),Nf=r("MBartTokenizerFast"),Of=r(" is a subclass of "),pi=n("a"),Df=r("XLMRobertaTokenizerFast"),Lf=r(`. Refer to superclass
`),ui=n("a"),Gf=r("XLMRobertaTokenizerFast"),Rf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Wf=d(),ia=n("p"),Uf=r("The tokenization method is "),Ud=n("code"),Xf=r("<tokens> <eos> <language code>"),Hf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Vf=d(),Xd=n("p"),Qf=r("Examples:"),Jf=d(),m(da.$$.fragment),Kf=d(),Pe=n("div"),m(la.$$.fragment),Zf=d(),Hd=n("p"),Yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),e_=d(),ca=n("p"),t_=r("An MBART sequence has the following format, where "),Vd=n("code"),o_=r("X"),n_=r(" represents the sequence:"),a_=d(),pa=n("ul"),ua=n("li"),Qd=n("code"),s_=r("input_ids"),r_=r(" (for encoder) "),Jd=n("code"),i_=r("X [eos, src_lang_code]"),d_=d(),ha=n("li"),Kd=n("code"),l_=r("decoder_input_ids"),c_=r(": (for decoder) "),Zd=n("code"),p_=r("X [eos, tgt_lang_code]"),u_=d(),Yd=n("p"),h_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),m_=d(),Lo=n("div"),m(ma.$$.fragment),f_=d(),el=n("p"),__=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),g_=d(),Go=n("div"),m(fa.$$.fragment),k_=d(),tl=n("p"),b_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),v_=d(),Ro=n("div"),m(_a.$$.fragment),y_=d(),ol=n("p"),T_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ip=d(),io=n("h2"),Wo=n("a"),nl=n("span"),m(ga.$$.fragment),M_=d(),al=n("span"),w_=r("MBart50Tokenizer"),Np=d(),S=n("div"),m(ka.$$.fragment),x_=d(),ba=n("p"),z_=r("Construct a MBart50 tokenizer. Based on "),va=n("a"),q_=r("SentencePiece"),B_=r("."),$_=d(),ya=n("p"),F_=r("This tokenizer inherits from "),hi=n("a"),j_=r("PreTrainedTokenizer"),E_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),P_=d(),sl=n("p"),C_=r("Examples:"),S_=d(),m(Ta.$$.fragment),A_=d(),ot=n("div"),m(Ma.$$.fragment),I_=d(),wa=n("p"),N_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),rl=n("code"),O_=r("X"),D_=r(" represents the sequence:"),L_=d(),xa=n("ul"),za=n("li"),il=n("code"),G_=r("input_ids"),R_=r(" (for encoder) "),dl=n("code"),W_=r("[src_lang_code] X [eos]"),U_=d(),qa=n("li"),ll=n("code"),X_=r("labels"),H_=r(": (for decoder) "),cl=n("code"),V_=r("[tgt_lang_code] X [eos]"),Q_=d(),pl=n("p"),J_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),K_=d(),Uo=n("div"),m(Ba.$$.fragment),Z_=d(),ul=n("p"),Y_=r("Converts a sequence of tokens (strings for sub-words) in a single string."),eg=d(),Xo=n("div"),m($a.$$.fragment),tg=d(),Fa=n("p"),og=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=n("code"),ng=r("prepare_for_model"),ag=r(" method."),sg=d(),Ho=n("div"),m(ja.$$.fragment),rg=d(),ml=n("p"),ig=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),dg=d(),Vo=n("div"),m(Ea.$$.fragment),lg=d(),fl=n("p"),cg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Op=d(),lo=n("h2"),Qo=n("a"),_l=n("span"),m(Pa.$$.fragment),pg=d(),gl=n("span"),ug=r("MBart50TokenizerFast"),Dp=d(),G=n("div"),m(Ca.$$.fragment),hg=d(),co=n("p"),mg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=n("em"),fg=r("tokenizers"),_g=r(` library). Based on
`),Sa=n("a"),gg=r("BPE"),kg=r("."),bg=d(),Aa=n("p"),vg=r("This tokenizer inherits from "),mi=n("a"),yg=r("PreTrainedTokenizerFast"),Tg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Mg=d(),bl=n("p"),wg=r("Examples:"),xg=d(),m(Ia.$$.fragment),zg=d(),Ce=n("div"),m(Na.$$.fragment),qg=d(),vl=n("p"),Bg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),$g=d(),Oa=n("p"),Fg=r("An MBART-50 sequence has the following format, where "),yl=n("code"),jg=r("X"),Eg=r(" represents the sequence:"),Pg=d(),Da=n("ul"),La=n("li"),Tl=n("code"),Cg=r("input_ids"),Sg=r(" (for encoder) "),Ml=n("code"),Ag=r("[src_lang_code] X [eos]"),Ig=d(),Ga=n("li"),wl=n("code"),Ng=r("labels"),Og=r(": (for decoder) "),xl=n("code"),Dg=r("[tgt_lang_code] X [eos]"),Lg=d(),zl=n("p"),Gg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Rg=d(),Jo=n("div"),m(Ra.$$.fragment),Wg=d(),ql=n("p"),Ug=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Xg=d(),Ko=n("div"),m(Wa.$$.fragment),Hg=d(),Bl=n("p"),Vg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Lp=d(),po=n("h2"),Zo=n("a"),$l=n("span"),m(Ua.$$.fragment),Qg=d(),Fl=n("span"),Jg=r("MBartModel"),Gp=d(),Qe=n("div"),m(Xa.$$.fragment),Kg=d(),Ha=n("p"),Zg=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fi=n("a"),Yg=r("PreTrainedModel"),ek=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=d(),Va=n("p"),ok=r("This model is also a PyTorch "),Qa=n("a"),nk=r("torch.nn.Module"),ak=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sk=d(),Se=n("div"),m(Ja.$$.fragment),rk=d(),uo=n("p"),ik=r("The "),_i=n("a"),dk=r("MBartModel"),lk=r(" forward method, overrides the "),jl=n("code"),ck=r("__call__"),pk=r(" special method."),uk=d(),m(Yo.$$.fragment),hk=d(),El=n("p"),mk=r("Example:"),fk=d(),m(Ka.$$.fragment),Rp=d(),ho=n("h2"),en=n("a"),Pl=n("span"),m(Za.$$.fragment),_k=d(),Cl=n("span"),gk=r("MBartForConditionalGeneration"),Wp=d(),Je=n("div"),m(Ya.$$.fragment),kk=d(),es=n("p"),bk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gi=n("a"),vk=r("PreTrainedModel"),yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=d(),ts=n("p"),Mk=r("This model is also a PyTorch "),os=n("a"),wk=r("torch.nn.Module"),xk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk=d(),Z=n("div"),m(ns.$$.fragment),qk=d(),mo=n("p"),Bk=r("The "),ki=n("a"),$k=r("MBartForConditionalGeneration"),Fk=r(" forward method, overrides the "),Sl=n("code"),jk=r("__call__"),Ek=r(" special method."),Pk=d(),m(tn.$$.fragment),Ck=d(),Al=n("p"),Sk=r("Summarization example:"),Ak=d(),m(as.$$.fragment),Ik=d(),Il=n("p"),Nk=r("Mask filling example:"),Ok=d(),m(ss.$$.fragment),Up=d(),fo=n("h2"),on=n("a"),Nl=n("span"),m(rs.$$.fragment),Dk=d(),Ol=n("span"),Lk=r("MBartForQuestionAnswering"),Xp=d(),qe=n("div"),m(is.$$.fragment),Gk=d(),_o=n("p"),Rk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Dl=n("code"),Wk=r("span start logits"),Uk=r(" and "),Ll=n("code"),Xk=r("span end logits"),Hk=r(")."),Vk=d(),ds=n("p"),Qk=r("This model inherits from "),bi=n("a"),Jk=r("PreTrainedModel"),Kk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk=d(),ls=n("p"),Yk=r("This model is also a PyTorch "),cs=n("a"),eb=r("torch.nn.Module"),tb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ob=d(),Ae=n("div"),m(ps.$$.fragment),nb=d(),go=n("p"),ab=r("The "),vi=n("a"),sb=r("MBartForQuestionAnswering"),rb=r(" forward method, overrides the "),Gl=n("code"),ib=r("__call__"),db=r(" special method."),lb=d(),m(nn.$$.fragment),cb=d(),Rl=n("p"),pb=r("Example:"),ub=d(),m(us.$$.fragment),Hp=d(),ko=n("h2"),an=n("a"),Wl=n("span"),m(hs.$$.fragment),hb=d(),Ul=n("span"),mb=r("MBartForSequenceClassification"),Vp=d(),Be=n("div"),m(ms.$$.fragment),fb=d(),Xl=n("p"),_b=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),gb=d(),fs=n("p"),kb=r("This model inherits from "),yi=n("a"),bb=r("PreTrainedModel"),vb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=d(),_s=n("p"),Tb=r("This model is also a PyTorch "),gs=n("a"),Mb=r("torch.nn.Module"),wb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xb=d(),Y=n("div"),m(ks.$$.fragment),zb=d(),bo=n("p"),qb=r("The "),Ti=n("a"),Bb=r("MBartForSequenceClassification"),$b=r(" forward method, overrides the "),Hl=n("code"),Fb=r("__call__"),jb=r(" special method."),Eb=d(),m(sn.$$.fragment),Pb=d(),Vl=n("p"),Cb=r("Example of single-label classification:"),Sb=d(),m(bs.$$.fragment),Ab=d(),Ql=n("p"),Ib=r("Example of multi-label classification:"),Nb=d(),m(vs.$$.fragment),Qp=d(),vo=n("h2"),rn=n("a"),Jl=n("span"),m(ys.$$.fragment),Ob=d(),Kl=n("span"),Db=r("MBartForCausalLM"),Jp=d(),Ts=n("div"),Tt=n("div"),m(Ms.$$.fragment),Lb=d(),Zl=n("p"),Gb=r("Example:"),Rb=d(),m(ws.$$.fragment),Kp=d(),yo=n("h2"),dn=n("a"),Yl=n("span"),m(xs.$$.fragment),Wb=d(),ec=n("span"),Ub=r("TFMBartModel"),Zp=d(),$e=n("div"),m(zs.$$.fragment),Xb=d(),qs=n("p"),Hb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=n("a"),Vb=r("TFPreTrainedModel"),Qb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jb=d(),Bs=n("p"),Kb=r("This model is also a "),$s=n("a"),Zb=r("tf.keras.Model"),Yb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ev=d(),m(ln.$$.fragment),tv=d(),Ie=n("div"),m(Fs.$$.fragment),ov=d(),To=n("p"),nv=r("The "),wi=n("a"),av=r("TFMBartModel"),sv=r(" forward method, overrides the "),tc=n("code"),rv=r("__call__"),iv=r(" special method."),dv=d(),m(cn.$$.fragment),lv=d(),oc=n("p"),cv=r("Example:"),pv=d(),m(js.$$.fragment),Yp=d(),Mo=n("h2"),pn=n("a"),nc=n("span"),m(Es.$$.fragment),uv=d(),ac=n("span"),hv=r("TFMBartForConditionalGeneration"),eu=d(),Fe=n("div"),m(Ps.$$.fragment),mv=d(),Cs=n("p"),fv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=n("a"),_v=r("TFPreTrainedModel"),gv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=d(),Ss=n("p"),bv=r("This model is also a "),As=n("a"),vv=r("tf.keras.Model"),yv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tv=d(),m(un.$$.fragment),Mv=d(),ee=n("div"),m(Is.$$.fragment),wv=d(),wo=n("p"),xv=r("The "),zi=n("a"),zv=r("TFMBartForConditionalGeneration"),qv=r(" forward method, overrides the "),sc=n("code"),Bv=r("__call__"),$v=r(" special method."),Fv=d(),m(hn.$$.fragment),jv=d(),rc=n("p"),Ev=r("Summarization example:"),Pv=d(),m(Ns.$$.fragment),Cv=d(),ic=n("p"),Sv=r("Mask filling example:"),Av=d(),m(Os.$$.fragment),tu=d(),xo=n("h2"),mn=n("a"),dc=n("span"),m(Ds.$$.fragment),Iv=d(),lc=n("span"),Nv=r("FlaxMBartModel"),ou=d(),R=n("div"),m(Ls.$$.fragment),Ov=d(),Gs=n("p"),Dv=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=n("a"),Lv=r("FlaxPreTrainedModel"),Gv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rv=d(),Rs=n("p"),Wv=r(`This model is also a Flax Linen
`),Ws=n("a"),Uv=r("flax.nn.Module"),Xv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Hv=d(),cc=n("p"),Vv=r("Finally, this model supports inherent JAX features such as:"),Qv=d(),mt=n("ul"),pc=n("li"),Us=n("a"),Jv=r("Just-In-Time (JIT) compilation"),Kv=d(),uc=n("li"),Xs=n("a"),Zv=r("Automatic Differentiation"),Yv=d(),hc=n("li"),Hs=n("a"),ey=r("Vectorization"),ty=d(),mc=n("li"),Vs=n("a"),oy=r("Parallelization"),ny=d(),Ne=n("div"),m(Qs.$$.fragment),ay=d(),zo=n("p"),sy=r("The "),fc=n("code"),ry=r("FlaxMBartPreTrainedModel"),iy=r("forward method, overrides the "),_c=n("code"),dy=r("__call__"),ly=r(" special method."),cy=d(),m(fn.$$.fragment),py=d(),gc=n("p"),uy=r("Example:"),hy=d(),m(Js.$$.fragment),my=d(),Mt=n("div"),m(Ks.$$.fragment),fy=d(),kc=n("p"),_y=r("Example:"),gy=d(),m(Zs.$$.fragment),ky=d(),wt=n("div"),m(Ys.$$.fragment),by=d(),bc=n("p"),vy=r("Example:"),yy=d(),m(er.$$.fragment),nu=d(),qo=n("h2"),_n=n("a"),vc=n("span"),m(tr.$$.fragment),Ty=d(),yc=n("span"),My=r("FlaxMBartForConditionalGeneration"),au=d(),W=n("div"),m(or.$$.fragment),wy=d(),nr=n("p"),xy=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=n("a"),zy=r("FlaxPreTrainedModel"),qy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),By=d(),ar=n("p"),$y=r(`This model is also a Flax Linen
`),sr=n("a"),Fy=r("flax.nn.Module"),jy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ey=d(),Tc=n("p"),Py=r("Finally, this model supports inherent JAX features such as:"),Cy=d(),ft=n("ul"),Mc=n("li"),rr=n("a"),Sy=r("Just-In-Time (JIT) compilation"),Ay=d(),wc=n("li"),ir=n("a"),Iy=r("Automatic Differentiation"),Ny=d(),xc=n("li"),dr=n("a"),Oy=r("Vectorization"),Dy=d(),zc=n("li"),lr=n("a"),Ly=r("Parallelization"),Gy=d(),te=n("div"),m(cr.$$.fragment),Ry=d(),Bo=n("p"),Wy=r("The "),qc=n("code"),Uy=r("FlaxMBartPreTrainedModel"),Xy=r("forward method, overrides the "),Bc=n("code"),Hy=r("__call__"),Vy=r(" special method."),Qy=d(),m(gn.$$.fragment),Jy=d(),$c=n("p"),Ky=r("Summarization example:"),Zy=d(),m(pr.$$.fragment),Yy=d(),Fc=n("p"),eT=r("Mask filling example:"),tT=d(),m(ur.$$.fragment),oT=d(),xt=n("div"),m(hr.$$.fragment),nT=d(),jc=n("p"),aT=r("Example:"),sT=d(),m(mr.$$.fragment),rT=d(),zt=n("div"),m(fr.$$.fragment),iT=d(),Ec=n("p"),dT=r("Example:"),lT=d(),m(_r.$$.fragment),su=d(),$o=n("h2"),kn=n("a"),Pc=n("span"),m(gr.$$.fragment),cT=d(),Cc=n("span"),pT=r("FlaxMBartForSequenceClassification"),ru=d(),I=n("div"),m(kr.$$.fragment),uT=d(),Sc=n("p"),hT=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),mT=d(),br=n("p"),fT=r("This model inherits from "),$i=n("a"),_T=r("FlaxPreTrainedModel"),gT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT=d(),vr=n("p"),bT=r(`This model is also a Flax Linen
`),yr=n("a"),vT=r("flax.nn.Module"),yT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),TT=d(),Ac=n("p"),MT=r("Finally, this model supports inherent JAX features such as:"),wT=d(),_t=n("ul"),Ic=n("li"),Tr=n("a"),xT=r("Just-In-Time (JIT) compilation"),zT=d(),Nc=n("li"),Mr=n("a"),qT=r("Automatic Differentiation"),BT=d(),Oc=n("li"),wr=n("a"),$T=r("Vectorization"),FT=d(),Dc=n("li"),xr=n("a"),jT=r("Parallelization"),ET=d(),Oe=n("div"),m(zr.$$.fragment),PT=d(),Fo=n("p"),CT=r("The "),Lc=n("code"),ST=r("FlaxMBartPreTrainedModel"),AT=r("forward method, overrides the "),Gc=n("code"),IT=r("__call__"),NT=r(" special method."),OT=d(),m(bn.$$.fragment),DT=d(),Rc=n("p"),LT=r("Example:"),GT=d(),m(qr.$$.fragment),RT=d(),qt=n("div"),m(Br.$$.fragment),WT=d(),Wc=n("p"),UT=r("Example:"),XT=d(),m($r.$$.fragment),HT=d(),Bt=n("div"),m(Fr.$$.fragment),VT=d(),Uc=n("p"),QT=r("Example:"),JT=d(),m(jr.$$.fragment),iu=d(),jo=n("h2"),vn=n("a"),Xc=n("span"),m(Er.$$.fragment),KT=d(),Hc=n("span"),ZT=r("FlaxMBartForQuestionAnswering"),du=d(),N=n("div"),m(Pr.$$.fragment),YT=d(),Eo=n("p"),eM=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=n("code"),tM=r("span start logits"),oM=r(" and "),Qc=n("code"),nM=r("span end logits"),aM=r(")."),sM=d(),Cr=n("p"),rM=r("This model inherits from "),Fi=n("a"),iM=r("FlaxPreTrainedModel"),dM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lM=d(),Sr=n("p"),cM=r(`This model is also a Flax Linen
`),Ar=n("a"),pM=r("flax.nn.Module"),uM=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hM=d(),Jc=n("p"),mM=r("Finally, this model supports inherent JAX features such as:"),fM=d(),gt=n("ul"),Kc=n("li"),Ir=n("a"),_M=r("Just-In-Time (JIT) compilation"),gM=d(),Zc=n("li"),Nr=n("a"),kM=r("Automatic Differentiation"),bM=d(),Yc=n("li"),Or=n("a"),vM=r("Vectorization"),yM=d(),ep=n("li"),Dr=n("a"),TM=r("Parallelization"),MM=d(),De=n("div"),m(Lr.$$.fragment),wM=d(),Po=n("p"),xM=r("The "),tp=n("code"),zM=r("FlaxMBartPreTrainedModel"),qM=r("forward method, overrides the "),op=n("code"),BM=r("__call__"),$M=r(" special method."),FM=d(),m(yn.$$.fragment),jM=d(),np=n("p"),EM=r("Example:"),PM=d(),m(Gr.$$.fragment),CM=d(),$t=n("div"),m(Rr.$$.fragment),SM=d(),ap=n("p"),AM=r("Example:"),IM=d(),m(Wr.$$.fragment),NM=d(),Ft=n("div"),m(Ur.$$.fragment),OM=d(),sp=n("p"),DM=r("Example:"),LM=d(),m(Xr.$$.fragment),this.h()},l(o){const p=Cz('[data-svelte="svelte-1phssyn"]',document.head);h=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Hr=s(v);M=a(Hr,"A",{id:!0,class:!0,href:!0});var rp=s(M);x=a(rp,"SPAN",{});var ip=s(x);f(T.$$.fragment,ip),ip.forEach(t),rp.forEach(t),y=l(Hr),B=a(Hr,"SPAN",{});var dp=s(B);st=i(dp,"MBart and MBart-50"),dp.forEach(t),Hr.forEach(t),je=l(o),j=a(o,"P",{});var Tn=s(j);Ue=a(Tn,"STRONG",{});var lp=s(Ue);_e=i(lp,"DISCLAIMER:"),lp.forEach(t),rt=i(Tn," If you see something strange, file a "),ge=a(Tn,"A",{href:!0,rel:!0});var cp=s(ge);ke=i(cp,"Github Issue"),cp.forEach(t),it=i(Tn,` and assign
@patrickvonplaten`),Tn.forEach(t),Ke=l(o),Q=a(o,"H2",{class:!0});var Vr=s(Q);O=a(Vr,"A",{id:!0,class:!0,href:!0});var pp=s(O);Xe=a(pp,"SPAN",{});var up=s(Xe);f(ae.$$.fragment,up),up.forEach(t),pp.forEach(t),P=l(Vr),A=a(Vr,"SPAN",{});var hp=s(A);dt=i(hp,"Overview of MBart"),hp.forEach(t),Vr.forEach(t),ce=l(o),pe=a(o,"P",{});var Qr=s(pe);lt=i(Qr,"The MBart model was presented in "),J=a(Qr,"A",{href:!0,rel:!0});var RM=s(J);ct=i(RM,"Multilingual Denoising Pre-training for Neural Machine Translation"),RM.forEach(t),pt=i(Qr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Qr.forEach(t),D=l(o),Ee=a(o,"P",{});var WM=s(Ee);be=i(WM,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),WM.forEach(t),Ze=l(o),se=a(o,"P",{});var mp=s(se);ve=i(mp,"This model was contributed by "),ye=a(mp,"A",{href:!0,rel:!0});var UM=s(ye);ut=i(UM,"valhalla"),UM.forEach(t),re=i(mp,". The Authors\u2019 code can be found "),Te=a(mp,"A",{href:!0,rel:!0});var XM=s(Te);Me=i(XM,"here"),XM.forEach(t),mp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var cu=s(w);$=a(cu,"A",{id:!0,class:!0,href:!0});var HM=s($);we=a(HM,"SPAN",{});var VM=s(we);f(He.$$.fragment,VM),VM.forEach(t),HM.forEach(t),Ut=l(cu),K=a(cu,"SPAN",{});var QM=s(K);Xt=i(QM,"Training of MBart"),QM.forEach(t),cu.forEach(t),kt=l(o),X=a(o,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var JM=s(de);Ht=i(JM,"X [eos, src_lang_code]"),JM.forEach(t),Vt=i(jt," where "),le=a(jt,"CODE",{});var KM=s(le);Qt=i(KM,"X"),KM.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Ve=a(jt,"CODE",{});var ZM=s(Ve);Kt=i(ZM,"[tgt_lang_code] X [eos]"),ZM.forEach(t),Fh=i(jt,". "),sd=a(jt,"CODE",{});var YM=s(sd);jh=i(YM,"bos"),YM.forEach(t),Eh=i(jt," is never used."),jt.forEach(t),fp=l(o),bt=a(o,"P",{});var ji=s(bt);Ph=i(ji,"The regular "),Pn=a(ji,"A",{href:!0});var GM=s(Pn);rd=a(GM,"STRONG",{});var e1=s(rd);Ch=i(e1,"call"),e1.forEach(t),Sh=i(GM,"()"),GM.forEach(t),Ah=i(ji,` will encode source text format, and it should be wrapped
inside the context manager `),Kr=a(ji,"A",{href:!0});var t1=s(Kr);Ih=i(t1,"as_target_tokenizer()"),t1.forEach(t),Nh=i(ji," to encode target text format."),ji.forEach(t),_p=l(o),Zr=a(o,"UL",{});var o1=s(Zr);id=a(o1,"LI",{});var n1=s(id);Oh=i(n1,"Supervised training"),n1.forEach(t),o1.forEach(t),gp=l(o),f(Cn.$$.fragment,o),kp=l(o),Yr=a(o,"UL",{});var a1=s(Yr);Sn=a(a1,"LI",{});var pu=s(Sn);dd=a(pu,"P",{});var s1=s(dd);Dh=i(s1,"Generation"),s1.forEach(t),Lh=l(pu),Zt=a(pu,"P",{});var Ei=s(Zt);Gh=i(Ei,"While generating the target text set the "),ld=a(Ei,"CODE",{});var r1=s(ld);Rh=i(r1,"decoder_start_token_id"),r1.forEach(t),Wh=i(Ei,` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=a(Ei,"EM",{});var i1=s(cd);Uh=i(i1,"facebook/mbart-large-en-ro"),i1.forEach(t),Xh=i(Ei," model."),Ei.forEach(t),pu.forEach(t),a1.forEach(t),bp=l(o),f(An.$$.fragment,o),vp=l(o),Yt=a(o,"H2",{class:!0});var uu=s(Yt);Co=a(uu,"A",{id:!0,class:!0,href:!0});var d1=s(Co);pd=a(d1,"SPAN",{});var l1=s(pd);f(In.$$.fragment,l1),l1.forEach(t),d1.forEach(t),Hh=l(uu),ud=a(uu,"SPAN",{});var c1=s(ud);Vh=i(c1,"Overview of MBart-50"),c1.forEach(t),uu.forEach(t),yp=l(o),vt=a(o,"P",{});var Pi=s(vt);Qh=i(Pi,"MBart-50 was introduced in the "),Nn=a(Pi,"A",{href:!0,rel:!0});var p1=s(Nn);Jh=i(p1,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),p1.forEach(t),Kh=i(Pi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=a(Pi,"EM",{});var u1=s(hd);Zh=i(u1,"mbart-large-cc25"),u1.forEach(t),Yh=i(Pi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Pi.forEach(t),Tp=l(o),ei=a(o,"P",{});var h1=s(ei);em=i(h1,"According to the abstract"),h1.forEach(t),Mp=l(o),ti=a(o,"P",{});var m1=s(ti);md=a(m1,"EM",{});var f1=s(md);tm=i(f1,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),f1.forEach(t),m1.forEach(t),wp=l(o),eo=a(o,"H3",{class:!0});var hu=s(eo);So=a(hu,"A",{id:!0,class:!0,href:!0});var _1=s(So);fd=a(_1,"SPAN",{});var g1=s(fd);f(On.$$.fragment,g1),g1.forEach(t),_1.forEach(t),om=l(hu),_d=a(hu,"SPAN",{});var k1=s(_d);nm=i(k1,"Training of MBart-50"),k1.forEach(t),hu.forEach(t),xp=l(o),et=a(o,"P",{});var Mn=s(et);am=i(Mn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=a(Mn,"CODE",{});var b1=s(gd);sm=i(b1,"[lang_code] X [eos]"),b1.forEach(t),rm=i(Mn,", where "),kd=a(Mn,"CODE",{});var v1=s(kd);im=i(v1,"lang_code"),v1.forEach(t),dm=i(Mn,` is source
language id for source text and target language id for target text, with `),bd=a(Mn,"CODE",{});var y1=s(bd);lm=i(y1,"X"),y1.forEach(t),cm=i(Mn,` being the source or target text
respectively.`),Mn.forEach(t),zp=l(o),Ao=a(o,"P",{});var mu=s(Ao);pm=i(mu,"MBart-50 has its own tokenizer "),oi=a(mu,"A",{href:!0});var T1=s(oi);um=i(T1,"MBart50Tokenizer"),T1.forEach(t),hm=i(mu,"."),mu.forEach(t),qp=l(o),ni=a(o,"UL",{});var M1=s(ni);vd=a(M1,"LI",{});var w1=s(vd);mm=i(w1,"Supervised training"),w1.forEach(t),M1.forEach(t),Bp=l(o),f(Dn.$$.fragment,o),$p=l(o),ai=a(o,"UL",{});var x1=s(ai);Ln=a(x1,"LI",{});var fu=s(Ln);yd=a(fu,"P",{});var z1=s(yd);fm=i(z1,"Generation"),z1.forEach(t),_m=l(fu),xe=a(fu,"P",{});var nt=s(xe);gm=i(nt,"To generate using the mBART-50 multilingual translation models, "),Td=a(nt,"CODE",{});var q1=s(Td);km=i(q1,"eos_token_id"),q1.forEach(t),bm=i(nt,` is used as the
`),Md=a(nt,"CODE",{});var B1=s(Md);vm=i(B1,"decoder_start_token_id"),B1.forEach(t),ym=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=a(nt,"EM",{});var $1=s(wd);Tm=i($1,"forced_bos_token_id"),$1.forEach(t),Mm=i(nt," parameter to the "),xd=a(nt,"EM",{});var F1=s(xd);wm=i(F1,"generate"),F1.forEach(t),xm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),zd=a(nt,"EM",{});var j1=s(zd);zm=i(j1,"facebook/mbart-50-large-many-to-many"),j1.forEach(t),qm=i(nt," checkpoint."),nt.forEach(t),fu.forEach(t),x1.forEach(t),Fp=l(o),f(Gn.$$.fragment,o),jp=l(o),to=a(o,"H2",{class:!0});var _u=s(to);Io=a(_u,"A",{id:!0,class:!0,href:!0});var E1=s(Io);qd=a(E1,"SPAN",{});var P1=s(qd);f(Rn.$$.fragment,P1),P1.forEach(t),E1.forEach(t),Bm=l(_u),Bd=a(_u,"SPAN",{});var C1=s(Bd);$m=i(C1,"MBartConfig"),C1.forEach(t),_u.forEach(t),Ep=l(o),ze=a(o,"DIV",{class:!0});var Et=s(ze);f(Wn.$$.fragment,Et),Fm=l(Et),oo=a(Et,"P",{});var Ci=s(oo);jm=i(Ci,"This is the configuration class to store the configuration of a "),si=a(Ci,"A",{href:!0});var S1=s(si);Em=i(S1,"MBartModel"),S1.forEach(t),Pm=i(Ci,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Un=a(Ci,"A",{href:!0,rel:!0});var A1=s(Un);Cm=i(A1,"facebook/mbart-large-cc25"),A1.forEach(t),Sm=i(Ci," architecture."),Ci.forEach(t),Am=l(Et),no=a(Et,"P",{});var Si=s(no);Im=i(Si,"Configuration objects inherit from "),ri=a(Si,"A",{href:!0});var I1=s(ri);Nm=i(I1,"PretrainedConfig"),I1.forEach(t),Om=i(Si,` and can be used to control the model outputs. Read the
documentation from `),ii=a(Si,"A",{href:!0});var N1=s(ii);Dm=i(N1,"PretrainedConfig"),N1.forEach(t),Lm=i(Si," for more information."),Si.forEach(t),Gm=l(Et),$d=a(Et,"P",{});var O1=s($d);Rm=i(O1,"Example:"),O1.forEach(t),Wm=l(Et),f(Xn.$$.fragment,Et),Et.forEach(t),Pp=l(o),ao=a(o,"H2",{class:!0});var gu=s(ao);No=a(gu,"A",{id:!0,class:!0,href:!0});var D1=s(No);Fd=a(D1,"SPAN",{});var L1=s(Fd);f(Hn.$$.fragment,L1),L1.forEach(t),D1.forEach(t),Um=l(gu),jd=a(gu,"SPAN",{});var G1=s(jd);Xm=i(G1,"MBartTokenizer"),G1.forEach(t),gu.forEach(t),Cp=l(o),L=a(o,"DIV",{class:!0});var ue=s(L);f(Vn.$$.fragment,ue),Hm=l(ue),Ed=a(ue,"P",{});var R1=s(Ed);Vm=i(R1,"Construct an MBART tokenizer."),R1.forEach(t),Qm=l(ue),ht=a(ue,"P",{});var wn=s(ht);Jm=i(wn,"Adapted from "),di=a(wn,"A",{href:!0});var W1=s(di);Km=i(W1,"RobertaTokenizer"),W1.forEach(t),Zm=i(wn," and "),li=a(wn,"A",{href:!0});var U1=s(li);Ym=i(U1,"XLNetTokenizer"),U1.forEach(t),ef=i(wn,`. Based on
`),Qn=a(wn,"A",{href:!0,rel:!0});var X1=s(Qn);tf=i(X1,"SentencePiece"),X1.forEach(t),of=i(wn,"."),wn.forEach(t),nf=l(ue),Jn=a(ue,"P",{});var ku=s(Jn);af=i(ku,"The tokenization method is "),Pd=a(ku,"CODE",{});var H1=s(Pd);sf=i(H1,"<tokens> <eos> <language code>"),H1.forEach(t),rf=i(ku," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),ku.forEach(t),df=l(ue),Cd=a(ue,"P",{});var V1=s(Cd);lf=i(V1,"Examples:"),V1.forEach(t),cf=l(ue),f(Kn.$$.fragment,ue),pf=l(ue),Oo=a(ue,"DIV",{class:!0});var bu=s(Oo);f(Zn.$$.fragment,bu),uf=l(bu),Sd=a(bu,"P",{});var Q1=s(Sd);hf=i(Q1,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Q1.forEach(t),bu.forEach(t),mf=l(ue),tt=a(ue,"DIV",{class:!0});var xn=s(tt);f(Yn.$$.fragment,xn),ff=l(xn),ea=a(xn,"P",{});var vu=s(ea);_f=i(vu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=a(vu,"CODE",{});var J1=s(Ad);gf=i(J1,"X"),J1.forEach(t),kf=i(vu," represents the sequence:"),vu.forEach(t),bf=l(xn),ta=a(xn,"UL",{});var yu=s(ta);oa=a(yu,"LI",{});var Tu=s(oa);Id=a(Tu,"CODE",{});var K1=s(Id);vf=i(K1,"input_ids"),K1.forEach(t),yf=i(Tu," (for encoder) "),Nd=a(Tu,"CODE",{});var Z1=s(Nd);Tf=i(Z1,"X [eos, src_lang_code]"),Z1.forEach(t),Tu.forEach(t),Mf=l(yu),na=a(yu,"LI",{});var Mu=s(na);Od=a(Mu,"CODE",{});var Y1=s(Od);wf=i(Y1,"decoder_input_ids"),Y1.forEach(t),xf=i(Mu,": (for decoder) "),Dd=a(Mu,"CODE",{});var e2=s(Dd);zf=i(e2,"X [eos, tgt_lang_code]"),e2.forEach(t),Mu.forEach(t),yu.forEach(t),qf=l(xn),Ld=a(xn,"P",{});var t2=s(Ld);Bf=i(t2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),t2.forEach(t),xn.forEach(t),ue.forEach(t),Sp=l(o),so=a(o,"H2",{class:!0});var wu=s(so);Do=a(wu,"A",{id:!0,class:!0,href:!0});var o2=s(Do);Gd=a(o2,"SPAN",{});var n2=s(Gd);f(aa.$$.fragment,n2),n2.forEach(t),o2.forEach(t),$f=l(wu),Rd=a(wu,"SPAN",{});var a2=s(Rd);Ff=i(a2,"MBartTokenizerFast"),a2.forEach(t),wu.forEach(t),Ap=l(o),C=a(o,"DIV",{class:!0});var H=s(C);f(sa.$$.fragment,H),jf=l(H),ro=a(H,"P",{});var Ai=s(ro);Ef=i(Ai,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Wd=a(Ai,"EM",{});var s2=s(Wd);Pf=i(s2,"tokenizers"),s2.forEach(t),Cf=i(Ai,` library). Based on
`),ra=a(Ai,"A",{href:!0,rel:!0});var r2=s(ra);Sf=i(r2,"BPE"),r2.forEach(t),Af=i(Ai,"."),Ai.forEach(t),If=l(H),yt=a(H,"P",{});var Jr=s(yt);ci=a(Jr,"A",{href:!0});var i2=s(ci);Nf=i(i2,"MBartTokenizerFast"),i2.forEach(t),Of=i(Jr," is a subclass of "),pi=a(Jr,"A",{href:!0});var d2=s(pi);Df=i(d2,"XLMRobertaTokenizerFast"),d2.forEach(t),Lf=i(Jr,`. Refer to superclass
`),ui=a(Jr,"A",{href:!0});var l2=s(ui);Gf=i(l2,"XLMRobertaTokenizerFast"),l2.forEach(t),Rf=i(Jr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Jr.forEach(t),Wf=l(H),ia=a(H,"P",{});var xu=s(ia);Uf=i(xu,"The tokenization method is "),Ud=a(xu,"CODE",{});var c2=s(Ud);Xf=i(c2,"<tokens> <eos> <language code>"),c2.forEach(t),Hf=i(xu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),xu.forEach(t),Vf=l(H),Xd=a(H,"P",{});var p2=s(Xd);Qf=i(p2,"Examples:"),p2.forEach(t),Jf=l(H),f(da.$$.fragment,H),Kf=l(H),Pe=a(H,"DIV",{class:!0});var Pt=s(Pe);f(la.$$.fragment,Pt),Zf=l(Pt),Hd=a(Pt,"P",{});var u2=s(Hd);Yf=i(u2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),u2.forEach(t),e_=l(Pt),ca=a(Pt,"P",{});var zu=s(ca);t_=i(zu,"An MBART sequence has the following format, where "),Vd=a(zu,"CODE",{});var h2=s(Vd);o_=i(h2,"X"),h2.forEach(t),n_=i(zu," represents the sequence:"),zu.forEach(t),a_=l(Pt),pa=a(Pt,"UL",{});var qu=s(pa);ua=a(qu,"LI",{});var Bu=s(ua);Qd=a(Bu,"CODE",{});var m2=s(Qd);s_=i(m2,"input_ids"),m2.forEach(t),r_=i(Bu," (for encoder) "),Jd=a(Bu,"CODE",{});var f2=s(Jd);i_=i(f2,"X [eos, src_lang_code]"),f2.forEach(t),Bu.forEach(t),d_=l(qu),ha=a(qu,"LI",{});var $u=s(ha);Kd=a($u,"CODE",{});var _2=s(Kd);l_=i(_2,"decoder_input_ids"),_2.forEach(t),c_=i($u,": (for decoder) "),Zd=a($u,"CODE",{});var g2=s(Zd);p_=i(g2,"X [eos, tgt_lang_code]"),g2.forEach(t),$u.forEach(t),qu.forEach(t),u_=l(Pt),Yd=a(Pt,"P",{});var k2=s(Yd);h_=i(k2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),k2.forEach(t),Pt.forEach(t),m_=l(H),Lo=a(H,"DIV",{class:!0});var Fu=s(Lo);f(ma.$$.fragment,Fu),f_=l(Fu),el=a(Fu,"P",{});var b2=s(el);__=i(b2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),b2.forEach(t),Fu.forEach(t),g_=l(H),Go=a(H,"DIV",{class:!0});var ju=s(Go);f(fa.$$.fragment,ju),k_=l(ju),tl=a(ju,"P",{});var v2=s(tl);b_=i(v2,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),v2.forEach(t),ju.forEach(t),v_=l(H),Ro=a(H,"DIV",{class:!0});var Eu=s(Ro);f(_a.$$.fragment,Eu),y_=l(Eu),ol=a(Eu,"P",{});var y2=s(ol);T_=i(y2,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),y2.forEach(t),Eu.forEach(t),H.forEach(t),Ip=l(o),io=a(o,"H2",{class:!0});var Pu=s(io);Wo=a(Pu,"A",{id:!0,class:!0,href:!0});var T2=s(Wo);nl=a(T2,"SPAN",{});var M2=s(nl);f(ga.$$.fragment,M2),M2.forEach(t),T2.forEach(t),M_=l(Pu),al=a(Pu,"SPAN",{});var w2=s(al);w_=i(w2,"MBart50Tokenizer"),w2.forEach(t),Pu.forEach(t),Np=l(o),S=a(o,"DIV",{class:!0});var V=s(S);f(ka.$$.fragment,V),x_=l(V),ba=a(V,"P",{});var Cu=s(ba);z_=i(Cu,"Construct a MBart50 tokenizer. Based on "),va=a(Cu,"A",{href:!0,rel:!0});var x2=s(va);q_=i(x2,"SentencePiece"),x2.forEach(t),B_=i(Cu,"."),Cu.forEach(t),$_=l(V),ya=a(V,"P",{});var Su=s(ya);F_=i(Su,"This tokenizer inherits from "),hi=a(Su,"A",{href:!0});var z2=s(hi);j_=i(z2,"PreTrainedTokenizer"),z2.forEach(t),E_=i(Su,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Su.forEach(t),P_=l(V),sl=a(V,"P",{});var q2=s(sl);C_=i(q2,"Examples:"),q2.forEach(t),S_=l(V),f(Ta.$$.fragment,V),A_=l(V),ot=a(V,"DIV",{class:!0});var zn=s(ot);f(Ma.$$.fragment,zn),I_=l(zn),wa=a(zn,"P",{});var Au=s(wa);N_=i(Au,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),rl=a(Au,"CODE",{});var B2=s(rl);O_=i(B2,"X"),B2.forEach(t),D_=i(Au," represents the sequence:"),Au.forEach(t),L_=l(zn),xa=a(zn,"UL",{});var Iu=s(xa);za=a(Iu,"LI",{});var Nu=s(za);il=a(Nu,"CODE",{});var $2=s(il);G_=i($2,"input_ids"),$2.forEach(t),R_=i(Nu," (for encoder) "),dl=a(Nu,"CODE",{});var F2=s(dl);W_=i(F2,"[src_lang_code] X [eos]"),F2.forEach(t),Nu.forEach(t),U_=l(Iu),qa=a(Iu,"LI",{});var Ou=s(qa);ll=a(Ou,"CODE",{});var j2=s(ll);X_=i(j2,"labels"),j2.forEach(t),H_=i(Ou,": (for decoder) "),cl=a(Ou,"CODE",{});var E2=s(cl);V_=i(E2,"[tgt_lang_code] X [eos]"),E2.forEach(t),Ou.forEach(t),Iu.forEach(t),Q_=l(zn),pl=a(zn,"P",{});var P2=s(pl);J_=i(P2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),P2.forEach(t),zn.forEach(t),K_=l(V),Uo=a(V,"DIV",{class:!0});var Du=s(Uo);f(Ba.$$.fragment,Du),Z_=l(Du),ul=a(Du,"P",{});var C2=s(ul);Y_=i(C2,"Converts a sequence of tokens (strings for sub-words) in a single string."),C2.forEach(t),Du.forEach(t),eg=l(V),Xo=a(V,"DIV",{class:!0});var Lu=s(Xo);f($a.$$.fragment,Lu),tg=l(Lu),Fa=a(Lu,"P",{});var Gu=s(Fa);og=i(Gu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=a(Gu,"CODE",{});var S2=s(hl);ng=i(S2,"prepare_for_model"),S2.forEach(t),ag=i(Gu," method."),Gu.forEach(t),Lu.forEach(t),sg=l(V),Ho=a(V,"DIV",{class:!0});var Ru=s(Ho);f(ja.$$.fragment,Ru),rg=l(Ru),ml=a(Ru,"P",{});var A2=s(ml);ig=i(A2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),A2.forEach(t),Ru.forEach(t),dg=l(V),Vo=a(V,"DIV",{class:!0});var Wu=s(Vo);f(Ea.$$.fragment,Wu),lg=l(Wu),fl=a(Wu,"P",{});var I2=s(fl);cg=i(I2,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),I2.forEach(t),Wu.forEach(t),V.forEach(t),Op=l(o),lo=a(o,"H2",{class:!0});var Uu=s(lo);Qo=a(Uu,"A",{id:!0,class:!0,href:!0});var N2=s(Qo);_l=a(N2,"SPAN",{});var O2=s(_l);f(Pa.$$.fragment,O2),O2.forEach(t),N2.forEach(t),pg=l(Uu),gl=a(Uu,"SPAN",{});var D2=s(gl);ug=i(D2,"MBart50TokenizerFast"),D2.forEach(t),Uu.forEach(t),Dp=l(o),G=a(o,"DIV",{class:!0});var he=s(G);f(Ca.$$.fragment,he),hg=l(he),co=a(he,"P",{});var Ii=s(co);mg=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=a(Ii,"EM",{});var L2=s(kl);fg=i(L2,"tokenizers"),L2.forEach(t),_g=i(Ii,` library). Based on
`),Sa=a(Ii,"A",{href:!0,rel:!0});var G2=s(Sa);gg=i(G2,"BPE"),G2.forEach(t),kg=i(Ii,"."),Ii.forEach(t),bg=l(he),Aa=a(he,"P",{});var Xu=s(Aa);vg=i(Xu,"This tokenizer inherits from "),mi=a(Xu,"A",{href:!0});var R2=s(mi);yg=i(R2,"PreTrainedTokenizerFast"),R2.forEach(t),Tg=i(Xu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xu.forEach(t),Mg=l(he),bl=a(he,"P",{});var W2=s(bl);wg=i(W2,"Examples:"),W2.forEach(t),xg=l(he),f(Ia.$$.fragment,he),zg=l(he),Ce=a(he,"DIV",{class:!0});var Ct=s(Ce);f(Na.$$.fragment,Ct),qg=l(Ct),vl=a(Ct,"P",{});var U2=s(vl);Bg=i(U2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),U2.forEach(t),$g=l(Ct),Oa=a(Ct,"P",{});var Hu=s(Oa);Fg=i(Hu,"An MBART-50 sequence has the following format, where "),yl=a(Hu,"CODE",{});var X2=s(yl);jg=i(X2,"X"),X2.forEach(t),Eg=i(Hu," represents the sequence:"),Hu.forEach(t),Pg=l(Ct),Da=a(Ct,"UL",{});var Vu=s(Da);La=a(Vu,"LI",{});var Qu=s(La);Tl=a(Qu,"CODE",{});var H2=s(Tl);Cg=i(H2,"input_ids"),H2.forEach(t),Sg=i(Qu," (for encoder) "),Ml=a(Qu,"CODE",{});var V2=s(Ml);Ag=i(V2,"[src_lang_code] X [eos]"),V2.forEach(t),Qu.forEach(t),Ig=l(Vu),Ga=a(Vu,"LI",{});var Ju=s(Ga);wl=a(Ju,"CODE",{});var Q2=s(wl);Ng=i(Q2,"labels"),Q2.forEach(t),Og=i(Ju,": (for decoder) "),xl=a(Ju,"CODE",{});var J2=s(xl);Dg=i(J2,"[tgt_lang_code] X [eos]"),J2.forEach(t),Ju.forEach(t),Vu.forEach(t),Lg=l(Ct),zl=a(Ct,"P",{});var K2=s(zl);Gg=i(K2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),K2.forEach(t),Ct.forEach(t),Rg=l(he),Jo=a(he,"DIV",{class:!0});var Ku=s(Jo);f(Ra.$$.fragment,Ku),Wg=l(Ku),ql=a(Ku,"P",{});var Z2=s(ql);Ug=i(Z2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Z2.forEach(t),Ku.forEach(t),Xg=l(he),Ko=a(he,"DIV",{class:!0});var Zu=s(Ko);f(Wa.$$.fragment,Zu),Hg=l(Zu),Bl=a(Zu,"P",{});var Y2=s(Bl);Vg=i(Y2,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Y2.forEach(t),Zu.forEach(t),he.forEach(t),Lp=l(o),po=a(o,"H2",{class:!0});var Yu=s(po);Zo=a(Yu,"A",{id:!0,class:!0,href:!0});var ew=s(Zo);$l=a(ew,"SPAN",{});var tw=s($l);f(Ua.$$.fragment,tw),tw.forEach(t),ew.forEach(t),Qg=l(Yu),Fl=a(Yu,"SPAN",{});var ow=s(Fl);Jg=i(ow,"MBartModel"),ow.forEach(t),Yu.forEach(t),Gp=l(o),Qe=a(o,"DIV",{class:!0});var qn=s(Qe);f(Xa.$$.fragment,qn),Kg=l(qn),Ha=a(qn,"P",{});var eh=s(Ha);Zg=i(eh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fi=a(eh,"A",{href:!0});var nw=s(fi);Yg=i(nw,"PreTrainedModel"),nw.forEach(t),ek=i(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),tk=l(qn),Va=a(qn,"P",{});var th=s(Va);ok=i(th,"This model is also a PyTorch "),Qa=a(th,"A",{href:!0,rel:!0});var aw=s(Qa);nk=i(aw,"torch.nn.Module"),aw.forEach(t),ak=i(th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th.forEach(t),sk=l(qn),Se=a(qn,"DIV",{class:!0});var St=s(Se);f(Ja.$$.fragment,St),rk=l(St),uo=a(St,"P",{});var Ni=s(uo);ik=i(Ni,"The "),_i=a(Ni,"A",{href:!0});var sw=s(_i);dk=i(sw,"MBartModel"),sw.forEach(t),lk=i(Ni," forward method, overrides the "),jl=a(Ni,"CODE",{});var rw=s(jl);ck=i(rw,"__call__"),rw.forEach(t),pk=i(Ni," special method."),Ni.forEach(t),uk=l(St),f(Yo.$$.fragment,St),hk=l(St),El=a(St,"P",{});var iw=s(El);mk=i(iw,"Example:"),iw.forEach(t),fk=l(St),f(Ka.$$.fragment,St),St.forEach(t),qn.forEach(t),Rp=l(o),ho=a(o,"H2",{class:!0});var oh=s(ho);en=a(oh,"A",{id:!0,class:!0,href:!0});var dw=s(en);Pl=a(dw,"SPAN",{});var lw=s(Pl);f(Za.$$.fragment,lw),lw.forEach(t),dw.forEach(t),_k=l(oh),Cl=a(oh,"SPAN",{});var cw=s(Cl);gk=i(cw,"MBartForConditionalGeneration"),cw.forEach(t),oh.forEach(t),Wp=l(o),Je=a(o,"DIV",{class:!0});var Bn=s(Je);f(Ya.$$.fragment,Bn),kk=l(Bn),es=a(Bn,"P",{});var nh=s(es);bk=i(nh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gi=a(nh,"A",{href:!0});var pw=s(gi);vk=i(pw,"PreTrainedModel"),pw.forEach(t),yk=i(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(t),Tk=l(Bn),ts=a(Bn,"P",{});var ah=s(ts);Mk=i(ah,"This model is also a PyTorch "),os=a(ah,"A",{href:!0,rel:!0});var uw=s(os);wk=i(uw,"torch.nn.Module"),uw.forEach(t),xk=i(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),zk=l(Bn),Z=a(Bn,"DIV",{class:!0});var Le=s(Z);f(ns.$$.fragment,Le),qk=l(Le),mo=a(Le,"P",{});var Oi=s(mo);Bk=i(Oi,"The "),ki=a(Oi,"A",{href:!0});var hw=s(ki);$k=i(hw,"MBartForConditionalGeneration"),hw.forEach(t),Fk=i(Oi," forward method, overrides the "),Sl=a(Oi,"CODE",{});var mw=s(Sl);jk=i(mw,"__call__"),mw.forEach(t),Ek=i(Oi," special method."),Oi.forEach(t),Pk=l(Le),f(tn.$$.fragment,Le),Ck=l(Le),Al=a(Le,"P",{});var fw=s(Al);Sk=i(fw,"Summarization example:"),fw.forEach(t),Ak=l(Le),f(as.$$.fragment,Le),Ik=l(Le),Il=a(Le,"P",{});var _w=s(Il);Nk=i(_w,"Mask filling example:"),_w.forEach(t),Ok=l(Le),f(ss.$$.fragment,Le),Le.forEach(t),Bn.forEach(t),Up=l(o),fo=a(o,"H2",{class:!0});var sh=s(fo);on=a(sh,"A",{id:!0,class:!0,href:!0});var gw=s(on);Nl=a(gw,"SPAN",{});var kw=s(Nl);f(rs.$$.fragment,kw),kw.forEach(t),gw.forEach(t),Dk=l(sh),Ol=a(sh,"SPAN",{});var bw=s(Ol);Lk=i(bw,"MBartForQuestionAnswering"),bw.forEach(t),sh.forEach(t),Xp=l(o),qe=a(o,"DIV",{class:!0});var At=s(qe);f(is.$$.fragment,At),Gk=l(At),_o=a(At,"P",{});var Di=s(_o);Rk=i(Di,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Dl=a(Di,"CODE",{});var vw=s(Dl);Wk=i(vw,"span start logits"),vw.forEach(t),Uk=i(Di," and "),Ll=a(Di,"CODE",{});var yw=s(Ll);Xk=i(yw,"span end logits"),yw.forEach(t),Hk=i(Di,")."),Di.forEach(t),Vk=l(At),ds=a(At,"P",{});var rh=s(ds);Qk=i(rh,"This model inherits from "),bi=a(rh,"A",{href:!0});var Tw=s(bi);Jk=i(Tw,"PreTrainedModel"),Tw.forEach(t),Kk=i(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),Zk=l(At),ls=a(At,"P",{});var ih=s(ls);Yk=i(ih,"This model is also a PyTorch "),cs=a(ih,"A",{href:!0,rel:!0});var Mw=s(cs);eb=i(Mw,"torch.nn.Module"),Mw.forEach(t),tb=i(ih,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ih.forEach(t),ob=l(At),Ae=a(At,"DIV",{class:!0});var It=s(Ae);f(ps.$$.fragment,It),nb=l(It),go=a(It,"P",{});var Li=s(go);ab=i(Li,"The "),vi=a(Li,"A",{href:!0});var ww=s(vi);sb=i(ww,"MBartForQuestionAnswering"),ww.forEach(t),rb=i(Li," forward method, overrides the "),Gl=a(Li,"CODE",{});var xw=s(Gl);ib=i(xw,"__call__"),xw.forEach(t),db=i(Li," special method."),Li.forEach(t),lb=l(It),f(nn.$$.fragment,It),cb=l(It),Rl=a(It,"P",{});var zw=s(Rl);pb=i(zw,"Example:"),zw.forEach(t),ub=l(It),f(us.$$.fragment,It),It.forEach(t),At.forEach(t),Hp=l(o),ko=a(o,"H2",{class:!0});var dh=s(ko);an=a(dh,"A",{id:!0,class:!0,href:!0});var qw=s(an);Wl=a(qw,"SPAN",{});var Bw=s(Wl);f(hs.$$.fragment,Bw),Bw.forEach(t),qw.forEach(t),hb=l(dh),Ul=a(dh,"SPAN",{});var $w=s(Ul);mb=i($w,"MBartForSequenceClassification"),$w.forEach(t),dh.forEach(t),Vp=l(o),Be=a(o,"DIV",{class:!0});var Nt=s(Be);f(ms.$$.fragment,Nt),fb=l(Nt),Xl=a(Nt,"P",{});var Fw=s(Xl);_b=i(Fw,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Fw.forEach(t),gb=l(Nt),fs=a(Nt,"P",{});var lh=s(fs);kb=i(lh,"This model inherits from "),yi=a(lh,"A",{href:!0});var jw=s(yi);bb=i(jw,"PreTrainedModel"),jw.forEach(t),vb=i(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),yb=l(Nt),_s=a(Nt,"P",{});var ch=s(_s);Tb=i(ch,"This model is also a PyTorch "),gs=a(ch,"A",{href:!0,rel:!0});var Ew=s(gs);Mb=i(Ew,"torch.nn.Module"),Ew.forEach(t),wb=i(ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ch.forEach(t),xb=l(Nt),Y=a(Nt,"DIV",{class:!0});var Ge=s(Y);f(ks.$$.fragment,Ge),zb=l(Ge),bo=a(Ge,"P",{});var Gi=s(bo);qb=i(Gi,"The "),Ti=a(Gi,"A",{href:!0});var Pw=s(Ti);Bb=i(Pw,"MBartForSequenceClassification"),Pw.forEach(t),$b=i(Gi," forward method, overrides the "),Hl=a(Gi,"CODE",{});var Cw=s(Hl);Fb=i(Cw,"__call__"),Cw.forEach(t),jb=i(Gi," special method."),Gi.forEach(t),Eb=l(Ge),f(sn.$$.fragment,Ge),Pb=l(Ge),Vl=a(Ge,"P",{});var Sw=s(Vl);Cb=i(Sw,"Example of single-label classification:"),Sw.forEach(t),Sb=l(Ge),f(bs.$$.fragment,Ge),Ab=l(Ge),Ql=a(Ge,"P",{});var Aw=s(Ql);Ib=i(Aw,"Example of multi-label classification:"),Aw.forEach(t),Nb=l(Ge),f(vs.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Qp=l(o),vo=a(o,"H2",{class:!0});var ph=s(vo);rn=a(ph,"A",{id:!0,class:!0,href:!0});var Iw=s(rn);Jl=a(Iw,"SPAN",{});var Nw=s(Jl);f(ys.$$.fragment,Nw),Nw.forEach(t),Iw.forEach(t),Ob=l(ph),Kl=a(ph,"SPAN",{});var Ow=s(Kl);Db=i(Ow,"MBartForCausalLM"),Ow.forEach(t),ph.forEach(t),Jp=l(o),Ts=a(o,"DIV",{class:!0});var Dw=s(Ts);Tt=a(Dw,"DIV",{class:!0});var Ri=s(Tt);f(Ms.$$.fragment,Ri),Lb=l(Ri),Zl=a(Ri,"P",{});var Lw=s(Zl);Gb=i(Lw,"Example:"),Lw.forEach(t),Rb=l(Ri),f(ws.$$.fragment,Ri),Ri.forEach(t),Dw.forEach(t),Kp=l(o),yo=a(o,"H2",{class:!0});var uh=s(yo);dn=a(uh,"A",{id:!0,class:!0,href:!0});var Gw=s(dn);Yl=a(Gw,"SPAN",{});var Rw=s(Yl);f(xs.$$.fragment,Rw),Rw.forEach(t),Gw.forEach(t),Wb=l(uh),ec=a(uh,"SPAN",{});var Ww=s(ec);Ub=i(Ww,"TFMBartModel"),Ww.forEach(t),uh.forEach(t),Zp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(zs.$$.fragment,Ot),Xb=l(Ot),qs=a(Ot,"P",{});var hh=s(qs);Hb=i(hh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=a(hh,"A",{href:!0});var Uw=s(Mi);Vb=i(Uw,"TFPreTrainedModel"),Uw.forEach(t),Qb=i(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh.forEach(t),Jb=l(Ot),Bs=a(Ot,"P",{});var mh=s(Bs);Kb=i(mh,"This model is also a "),$s=a(mh,"A",{href:!0,rel:!0});var Xw=s($s);Zb=i(Xw,"tf.keras.Model"),Xw.forEach(t),Yb=i(mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mh.forEach(t),ev=l(Ot),f(ln.$$.fragment,Ot),tv=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(Fs.$$.fragment,Dt),ov=l(Dt),To=a(Dt,"P",{});var Wi=s(To);nv=i(Wi,"The "),wi=a(Wi,"A",{href:!0});var Hw=s(wi);av=i(Hw,"TFMBartModel"),Hw.forEach(t),sv=i(Wi," forward method, overrides the "),tc=a(Wi,"CODE",{});var Vw=s(tc);rv=i(Vw,"__call__"),Vw.forEach(t),iv=i(Wi," special method."),Wi.forEach(t),dv=l(Dt),f(cn.$$.fragment,Dt),lv=l(Dt),oc=a(Dt,"P",{});var Qw=s(oc);cv=i(Qw,"Example:"),Qw.forEach(t),pv=l(Dt),f(js.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),Yp=l(o),Mo=a(o,"H2",{class:!0});var fh=s(Mo);pn=a(fh,"A",{id:!0,class:!0,href:!0});var Jw=s(pn);nc=a(Jw,"SPAN",{});var Kw=s(nc);f(Es.$$.fragment,Kw),Kw.forEach(t),Jw.forEach(t),uv=l(fh),ac=a(fh,"SPAN",{});var Zw=s(ac);hv=i(Zw,"TFMBartForConditionalGeneration"),Zw.forEach(t),fh.forEach(t),eu=l(o),Fe=a(o,"DIV",{class:!0});var Lt=s(Fe);f(Ps.$$.fragment,Lt),mv=l(Lt),Cs=a(Lt,"P",{});var _h=s(Cs);fv=i(_h,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=a(_h,"A",{href:!0});var Yw=s(xi);_v=i(Yw,"TFPreTrainedModel"),Yw.forEach(t),gv=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),kv=l(Lt),Ss=a(Lt,"P",{});var gh=s(Ss);bv=i(gh,"This model is also a "),As=a(gh,"A",{href:!0,rel:!0});var ex=s(As);vv=i(ex,"tf.keras.Model"),ex.forEach(t),yv=i(gh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh.forEach(t),Tv=l(Lt),f(un.$$.fragment,Lt),Mv=l(Lt),ee=a(Lt,"DIV",{class:!0});var Re=s(ee);f(Is.$$.fragment,Re),wv=l(Re),wo=a(Re,"P",{});var Ui=s(wo);xv=i(Ui,"The "),zi=a(Ui,"A",{href:!0});var tx=s(zi);zv=i(tx,"TFMBartForConditionalGeneration"),tx.forEach(t),qv=i(Ui," forward method, overrides the "),sc=a(Ui,"CODE",{});var ox=s(sc);Bv=i(ox,"__call__"),ox.forEach(t),$v=i(Ui," special method."),Ui.forEach(t),Fv=l(Re),f(hn.$$.fragment,Re),jv=l(Re),rc=a(Re,"P",{});var nx=s(rc);Ev=i(nx,"Summarization example:"),nx.forEach(t),Pv=l(Re),f(Ns.$$.fragment,Re),Cv=l(Re),ic=a(Re,"P",{});var ax=s(ic);Sv=i(ax,"Mask filling example:"),ax.forEach(t),Av=l(Re),f(Os.$$.fragment,Re),Re.forEach(t),Lt.forEach(t),tu=l(o),xo=a(o,"H2",{class:!0});var kh=s(xo);mn=a(kh,"A",{id:!0,class:!0,href:!0});var sx=s(mn);dc=a(sx,"SPAN",{});var rx=s(dc);f(Ds.$$.fragment,rx),rx.forEach(t),sx.forEach(t),Iv=l(kh),lc=a(kh,"SPAN",{});var ix=s(lc);Nv=i(ix,"FlaxMBartModel"),ix.forEach(t),kh.forEach(t),ou=l(o),R=a(o,"DIV",{class:!0});var me=s(R);f(Ls.$$.fragment,me),Ov=l(me),Gs=a(me,"P",{});var bh=s(Gs);Dv=i(bh,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(bh,"A",{href:!0});var dx=s(qi);Lv=i(dx,"FlaxPreTrainedModel"),dx.forEach(t),Gv=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Rv=l(me),Rs=a(me,"P",{});var vh=s(Rs);Wv=i(vh,`This model is also a Flax Linen
`),Ws=a(vh,"A",{href:!0,rel:!0});var lx=s(Ws);Uv=i(lx,"flax.nn.Module"),lx.forEach(t),Xv=i(vh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vh.forEach(t),Hv=l(me),cc=a(me,"P",{});var cx=s(cc);Vv=i(cx,"Finally, this model supports inherent JAX features such as:"),cx.forEach(t),Qv=l(me),mt=a(me,"UL",{});var $n=s(mt);pc=a($n,"LI",{});var px=s(pc);Us=a(px,"A",{href:!0,rel:!0});var ux=s(Us);Jv=i(ux,"Just-In-Time (JIT) compilation"),ux.forEach(t),px.forEach(t),Kv=l($n),uc=a($n,"LI",{});var hx=s(uc);Xs=a(hx,"A",{href:!0,rel:!0});var mx=s(Xs);Zv=i(mx,"Automatic Differentiation"),mx.forEach(t),hx.forEach(t),Yv=l($n),hc=a($n,"LI",{});var fx=s(hc);Hs=a(fx,"A",{href:!0,rel:!0});var _x=s(Hs);ey=i(_x,"Vectorization"),_x.forEach(t),fx.forEach(t),ty=l($n),mc=a($n,"LI",{});var gx=s(mc);Vs=a(gx,"A",{href:!0,rel:!0});var kx=s(Vs);oy=i(kx,"Parallelization"),kx.forEach(t),gx.forEach(t),$n.forEach(t),ny=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Qs.$$.fragment,Gt),ay=l(Gt),zo=a(Gt,"P",{});var Xi=s(zo);sy=i(Xi,"The "),fc=a(Xi,"CODE",{});var bx=s(fc);ry=i(bx,"FlaxMBartPreTrainedModel"),bx.forEach(t),iy=i(Xi,"forward method, overrides the "),_c=a(Xi,"CODE",{});var vx=s(_c);dy=i(vx,"__call__"),vx.forEach(t),ly=i(Xi," special method."),Xi.forEach(t),cy=l(Gt),f(fn.$$.fragment,Gt),py=l(Gt),gc=a(Gt,"P",{});var yx=s(gc);uy=i(yx,"Example:"),yx.forEach(t),hy=l(Gt),f(Js.$$.fragment,Gt),Gt.forEach(t),my=l(me),Mt=a(me,"DIV",{class:!0});var Hi=s(Mt);f(Ks.$$.fragment,Hi),fy=l(Hi),kc=a(Hi,"P",{});var Tx=s(kc);_y=i(Tx,"Example:"),Tx.forEach(t),gy=l(Hi),f(Zs.$$.fragment,Hi),Hi.forEach(t),ky=l(me),wt=a(me,"DIV",{class:!0});var Vi=s(wt);f(Ys.$$.fragment,Vi),by=l(Vi),bc=a(Vi,"P",{});var Mx=s(bc);vy=i(Mx,"Example:"),Mx.forEach(t),yy=l(Vi),f(er.$$.fragment,Vi),Vi.forEach(t),me.forEach(t),nu=l(o),qo=a(o,"H2",{class:!0});var yh=s(qo);_n=a(yh,"A",{id:!0,class:!0,href:!0});var wx=s(_n);vc=a(wx,"SPAN",{});var xx=s(vc);f(tr.$$.fragment,xx),xx.forEach(t),wx.forEach(t),Ty=l(yh),yc=a(yh,"SPAN",{});var zx=s(yc);My=i(zx,"FlaxMBartForConditionalGeneration"),zx.forEach(t),yh.forEach(t),au=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);f(or.$$.fragment,fe),wy=l(fe),nr=a(fe,"P",{});var Th=s(nr);xy=i(Th,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a(Th,"A",{href:!0});var qx=s(Bi);zy=i(qx,"FlaxPreTrainedModel"),qx.forEach(t),qy=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),By=l(fe),ar=a(fe,"P",{});var Mh=s(ar);$y=i(Mh,`This model is also a Flax Linen
`),sr=a(Mh,"A",{href:!0,rel:!0});var Bx=s(sr);Fy=i(Bx,"flax.nn.Module"),Bx.forEach(t),jy=i(Mh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mh.forEach(t),Ey=l(fe),Tc=a(fe,"P",{});var $x=s(Tc);Py=i($x,"Finally, this model supports inherent JAX features such as:"),$x.forEach(t),Cy=l(fe),ft=a(fe,"UL",{});var Fn=s(ft);Mc=a(Fn,"LI",{});var Fx=s(Mc);rr=a(Fx,"A",{href:!0,rel:!0});var jx=s(rr);Sy=i(jx,"Just-In-Time (JIT) compilation"),jx.forEach(t),Fx.forEach(t),Ay=l(Fn),wc=a(Fn,"LI",{});var Ex=s(wc);ir=a(Ex,"A",{href:!0,rel:!0});var Px=s(ir);Iy=i(Px,"Automatic Differentiation"),Px.forEach(t),Ex.forEach(t),Ny=l(Fn),xc=a(Fn,"LI",{});var Cx=s(xc);dr=a(Cx,"A",{href:!0,rel:!0});var Sx=s(dr);Oy=i(Sx,"Vectorization"),Sx.forEach(t),Cx.forEach(t),Dy=l(Fn),zc=a(Fn,"LI",{});var Ax=s(zc);lr=a(Ax,"A",{href:!0,rel:!0});var Ix=s(lr);Ly=i(Ix,"Parallelization"),Ix.forEach(t),Ax.forEach(t),Fn.forEach(t),Gy=l(fe),te=a(fe,"DIV",{class:!0});var We=s(te);f(cr.$$.fragment,We),Ry=l(We),Bo=a(We,"P",{});var Qi=s(Bo);Wy=i(Qi,"The "),qc=a(Qi,"CODE",{});var Nx=s(qc);Uy=i(Nx,"FlaxMBartPreTrainedModel"),Nx.forEach(t),Xy=i(Qi,"forward method, overrides the "),Bc=a(Qi,"CODE",{});var Ox=s(Bc);Hy=i(Ox,"__call__"),Ox.forEach(t),Vy=i(Qi," special method."),Qi.forEach(t),Qy=l(We),f(gn.$$.fragment,We),Jy=l(We),$c=a(We,"P",{});var Dx=s($c);Ky=i(Dx,"Summarization example:"),Dx.forEach(t),Zy=l(We),f(pr.$$.fragment,We),Yy=l(We),Fc=a(We,"P",{});var Lx=s(Fc);eT=i(Lx,"Mask filling example:"),Lx.forEach(t),tT=l(We),f(ur.$$.fragment,We),We.forEach(t),oT=l(fe),xt=a(fe,"DIV",{class:!0});var Ji=s(xt);f(hr.$$.fragment,Ji),nT=l(Ji),jc=a(Ji,"P",{});var Gx=s(jc);aT=i(Gx,"Example:"),Gx.forEach(t),sT=l(Ji),f(mr.$$.fragment,Ji),Ji.forEach(t),rT=l(fe),zt=a(fe,"DIV",{class:!0});var Ki=s(zt);f(fr.$$.fragment,Ki),iT=l(Ki),Ec=a(Ki,"P",{});var Rx=s(Ec);dT=i(Rx,"Example:"),Rx.forEach(t),lT=l(Ki),f(_r.$$.fragment,Ki),Ki.forEach(t),fe.forEach(t),su=l(o),$o=a(o,"H2",{class:!0});var wh=s($o);kn=a(wh,"A",{id:!0,class:!0,href:!0});var Wx=s(kn);Pc=a(Wx,"SPAN",{});var Ux=s(Pc);f(gr.$$.fragment,Ux),Ux.forEach(t),Wx.forEach(t),cT=l(wh),Cc=a(wh,"SPAN",{});var Xx=s(Cc);pT=i(Xx,"FlaxMBartForSequenceClassification"),Xx.forEach(t),wh.forEach(t),ru=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(kr.$$.fragment,oe),uT=l(oe),Sc=a(oe,"P",{});var Hx=s(Sc);hT=i(Hx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Hx.forEach(t),mT=l(oe),br=a(oe,"P",{});var xh=s(br);fT=i(xh,"This model inherits from "),$i=a(xh,"A",{href:!0});var Vx=s($i);_T=i(Vx,"FlaxPreTrainedModel"),Vx.forEach(t),gT=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),kT=l(oe),vr=a(oe,"P",{});var zh=s(vr);bT=i(zh,`This model is also a Flax Linen
`),yr=a(zh,"A",{href:!0,rel:!0});var Qx=s(yr);vT=i(Qx,"flax.nn.Module"),Qx.forEach(t),yT=i(zh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zh.forEach(t),TT=l(oe),Ac=a(oe,"P",{});var Jx=s(Ac);MT=i(Jx,"Finally, this model supports inherent JAX features such as:"),Jx.forEach(t),wT=l(oe),_t=a(oe,"UL",{});var jn=s(_t);Ic=a(jn,"LI",{});var Kx=s(Ic);Tr=a(Kx,"A",{href:!0,rel:!0});var Zx=s(Tr);xT=i(Zx,"Just-In-Time (JIT) compilation"),Zx.forEach(t),Kx.forEach(t),zT=l(jn),Nc=a(jn,"LI",{});var Yx=s(Nc);Mr=a(Yx,"A",{href:!0,rel:!0});var ez=s(Mr);qT=i(ez,"Automatic Differentiation"),ez.forEach(t),Yx.forEach(t),BT=l(jn),Oc=a(jn,"LI",{});var tz=s(Oc);wr=a(tz,"A",{href:!0,rel:!0});var oz=s(wr);$T=i(oz,"Vectorization"),oz.forEach(t),tz.forEach(t),FT=l(jn),Dc=a(jn,"LI",{});var nz=s(Dc);xr=a(nz,"A",{href:!0,rel:!0});var az=s(xr);jT=i(az,"Parallelization"),az.forEach(t),nz.forEach(t),jn.forEach(t),ET=l(oe),Oe=a(oe,"DIV",{class:!0});var Rt=s(Oe);f(zr.$$.fragment,Rt),PT=l(Rt),Fo=a(Rt,"P",{});var Zi=s(Fo);CT=i(Zi,"The "),Lc=a(Zi,"CODE",{});var sz=s(Lc);ST=i(sz,"FlaxMBartPreTrainedModel"),sz.forEach(t),AT=i(Zi,"forward method, overrides the "),Gc=a(Zi,"CODE",{});var rz=s(Gc);IT=i(rz,"__call__"),rz.forEach(t),NT=i(Zi," special method."),Zi.forEach(t),OT=l(Rt),f(bn.$$.fragment,Rt),DT=l(Rt),Rc=a(Rt,"P",{});var iz=s(Rc);LT=i(iz,"Example:"),iz.forEach(t),GT=l(Rt),f(qr.$$.fragment,Rt),Rt.forEach(t),RT=l(oe),qt=a(oe,"DIV",{class:!0});var Yi=s(qt);f(Br.$$.fragment,Yi),WT=l(Yi),Wc=a(Yi,"P",{});var dz=s(Wc);UT=i(dz,"Example:"),dz.forEach(t),XT=l(Yi),f($r.$$.fragment,Yi),Yi.forEach(t),HT=l(oe),Bt=a(oe,"DIV",{class:!0});var ed=s(Bt);f(Fr.$$.fragment,ed),VT=l(ed),Uc=a(ed,"P",{});var lz=s(Uc);QT=i(lz,"Example:"),lz.forEach(t),JT=l(ed),f(jr.$$.fragment,ed),ed.forEach(t),oe.forEach(t),iu=l(o),jo=a(o,"H2",{class:!0});var qh=s(jo);vn=a(qh,"A",{id:!0,class:!0,href:!0});var cz=s(vn);Xc=a(cz,"SPAN",{});var pz=s(Xc);f(Er.$$.fragment,pz),pz.forEach(t),cz.forEach(t),KT=l(qh),Hc=a(qh,"SPAN",{});var uz=s(Hc);ZT=i(uz,"FlaxMBartForQuestionAnswering"),uz.forEach(t),qh.forEach(t),du=l(o),N=a(o,"DIV",{class:!0});var ne=s(N);f(Pr.$$.fragment,ne),YT=l(ne),Eo=a(ne,"P",{});var td=s(Eo);eM=i(td,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=a(td,"CODE",{});var hz=s(Vc);tM=i(hz,"span start logits"),hz.forEach(t),oM=i(td," and "),Qc=a(td,"CODE",{});var mz=s(Qc);nM=i(mz,"span end logits"),mz.forEach(t),aM=i(td,")."),td.forEach(t),sM=l(ne),Cr=a(ne,"P",{});var Bh=s(Cr);rM=i(Bh,"This model inherits from "),Fi=a(Bh,"A",{href:!0});var fz=s(Fi);iM=i(fz,"FlaxPreTrainedModel"),fz.forEach(t),dM=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),lM=l(ne),Sr=a(ne,"P",{});var $h=s(Sr);cM=i($h,`This model is also a Flax Linen
`),Ar=a($h,"A",{href:!0,rel:!0});var _z=s(Ar);pM=i(_z,"flax.nn.Module"),_z.forEach(t),uM=i($h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$h.forEach(t),hM=l(ne),Jc=a(ne,"P",{});var gz=s(Jc);mM=i(gz,"Finally, this model supports inherent JAX features such as:"),gz.forEach(t),fM=l(ne),gt=a(ne,"UL",{});var En=s(gt);Kc=a(En,"LI",{});var kz=s(Kc);Ir=a(kz,"A",{href:!0,rel:!0});var bz=s(Ir);_M=i(bz,"Just-In-Time (JIT) compilation"),bz.forEach(t),kz.forEach(t),gM=l(En),Zc=a(En,"LI",{});var vz=s(Zc);Nr=a(vz,"A",{href:!0,rel:!0});var yz=s(Nr);kM=i(yz,"Automatic Differentiation"),yz.forEach(t),vz.forEach(t),bM=l(En),Yc=a(En,"LI",{});var Tz=s(Yc);Or=a(Tz,"A",{href:!0,rel:!0});var Mz=s(Or);vM=i(Mz,"Vectorization"),Mz.forEach(t),Tz.forEach(t),yM=l(En),ep=a(En,"LI",{});var wz=s(ep);Dr=a(wz,"A",{href:!0,rel:!0});var xz=s(Dr);TM=i(xz,"Parallelization"),xz.forEach(t),wz.forEach(t),En.forEach(t),MM=l(ne),De=a(ne,"DIV",{class:!0});var Wt=s(De);f(Lr.$$.fragment,Wt),wM=l(Wt),Po=a(Wt,"P",{});var od=s(Po);xM=i(od,"The "),tp=a(od,"CODE",{});var zz=s(tp);zM=i(zz,"FlaxMBartPreTrainedModel"),zz.forEach(t),qM=i(od,"forward method, overrides the "),op=a(od,"CODE",{});var qz=s(op);BM=i(qz,"__call__"),qz.forEach(t),$M=i(od," special method."),od.forEach(t),FM=l(Wt),f(yn.$$.fragment,Wt),jM=l(Wt),np=a(Wt,"P",{});var Bz=s(np);EM=i(Bz,"Example:"),Bz.forEach(t),PM=l(Wt),f(Gr.$$.fragment,Wt),Wt.forEach(t),CM=l(ne),$t=a(ne,"DIV",{class:!0});var nd=s($t);f(Rr.$$.fragment,nd),SM=l(nd),ap=a(nd,"P",{});var $z=s(ap);AM=i($z,"Example:"),$z.forEach(t),IM=l(nd),f(Wr.$$.fragment,nd),nd.forEach(t),NM=l(ne),Ft=a(ne,"DIV",{class:!0});var ad=s(Ft);f(Ur.$$.fragment,ad),OM=l(ad),sp=a(ad,"P",{});var Fz=s(sp);DM=i(Fz,"Example:"),Fz.forEach(t),LM=l(ad),f(Xr.$$.fragment,ad),ad.forEach(t),ne.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Vz)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(J,"href","https://arxiv.org/abs/2001.08210"),c(J,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Pn,"href","/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Kr,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Co,"id","overview-of-mbart50"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Nn,"href","https://arxiv.org/abs/2008.00401"),c(Nn,"rel","nofollow"),c(So,"id","training-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(oi,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Io,"id","transformers.MBartConfig"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(si,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartModel"),c(Un,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Un,"rel","nofollow"),c(ri,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ii,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(No,"id","transformers.MBartTokenizer"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(di,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),c(li,"href","/docs/transformers/v4.16.2/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Qn,"href","https://github.com/google/sentencepiece"),c(Qn,"rel","nofollow"),c(Oo,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Do,"id","transformers.MBartTokenizerFast"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ra,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ra,"rel","nofollow"),c(ci,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(pi,"href","/docs/transformers/v4.16.2/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(ui,"href","/docs/transformers/v4.16.2/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Lo,"class","docstring"),c(Go,"class","docstring"),c(Ro,"class","docstring"),c(C,"class","docstring"),c(Wo,"id","transformers.MBart50Tokenizer"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(hi,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Uo,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(S,"class","docstring"),c(Qo,"id","transformers.MBart50TokenizerFast"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Sa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Sa,"rel","nofollow"),c(mi,"href","/docs/transformers/v4.16.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Jo,"class","docstring"),c(Ko,"class","docstring"),c(G,"class","docstring"),c(Zo,"id","transformers.MBartModel"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(fi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qa,"rel","nofollow"),c(_i,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartModel"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(en,"id","transformers.MBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.MBartForConditionalGeneration"),c(ho,"class","relative group"),c(gi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(os,"rel","nofollow"),c(ki,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Z,"class","docstring"),c(Je,"class","docstring"),c(on,"id","transformers.MBartForQuestionAnswering"),c(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(on,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(bi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(vi,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ae,"class","docstring"),c(qe,"class","docstring"),c(an,"id","transformers.MBartForSequenceClassification"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(yi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(gs,"rel","nofollow"),c(Ti,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Y,"class","docstring"),c(Be,"class","docstring"),c(rn,"id","transformers.MBartForCausalLM"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.MBartForCausalLM"),c(vo,"class","relative group"),c(Tt,"class","docstring"),c(Ts,"class","docstring"),c(dn,"id","transformers.TFMBartModel"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.TFMBartModel"),c(yo,"class","relative group"),c(Mi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(wi,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(pn,"id","transformers.TFMBartForConditionalGeneration"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.TFMBartForConditionalGeneration"),c(Mo,"class","relative group"),c(xi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(As,"rel","nofollow"),c(zi,"href","/docs/transformers/v4.16.2/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Fe,"class","docstring"),c(mn,"id","transformers.FlaxMBartModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.FlaxMBartModel"),c(xo,"class","relative group"),c(qi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ws,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ws,"rel","nofollow"),c(Us,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Us,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Vs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(R,"class","docstring"),c(_n,"id","transformers.FlaxMBartForConditionalGeneration"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.FlaxMBartForConditionalGeneration"),c(qo,"class","relative group"),c(Bi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(lr,"rel","nofollow"),c(te,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(W,"class","docstring"),c(kn,"id","transformers.FlaxMBartForSequenceClassification"),c(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kn,"href","#transformers.FlaxMBartForSequenceClassification"),c($o,"class","relative group"),c($i,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(yr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(yr,"rel","nofollow"),c(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(xr,"rel","nofollow"),c(Oe,"class","docstring"),c(qt,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring"),c(vn,"id","transformers.FlaxMBartForQuestionAnswering"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(jo,"class","relative group"),c(Fi,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ar,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ar,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Or,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Dr,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,v,p),e(v,M),e(M,x),_(T,x,null),e(v,y),e(v,B),e(B,st),u(o,je,p),u(o,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),u(o,Ke,p),u(o,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,A),e(A,dt),u(o,ce,p),u(o,pe,p),e(pe,lt),e(pe,J),e(J,ct),e(pe,pt),u(o,D,p),u(o,Ee,p),e(Ee,be),u(o,Ze,p),u(o,se,p),e(se,ve),e(se,ye),e(ye,ut),e(se,re),e(se,Te),e(Te,Me),u(o,Ye,p),u(o,w,p),e(w,$),e($,we),_(He,we,null),e(w,Ut),e(w,K),e(K,Xt),u(o,kt,p),u(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Fh),e(X,sd),e(sd,jh),e(X,Eh),u(o,fp,p),u(o,bt,p),e(bt,Ph),e(bt,Pn),e(Pn,rd),e(rd,Ch),e(Pn,Sh),e(bt,Ah),e(bt,Kr),e(Kr,Ih),e(bt,Nh),u(o,_p,p),u(o,Zr,p),e(Zr,id),e(id,Oh),u(o,gp,p),_(Cn,o,p),u(o,kp,p),u(o,Yr,p),e(Yr,Sn),e(Sn,dd),e(dd,Dh),e(Sn,Lh),e(Sn,Zt),e(Zt,Gh),e(Zt,ld),e(ld,Rh),e(Zt,Wh),e(Zt,cd),e(cd,Uh),e(Zt,Xh),u(o,bp,p),_(An,o,p),u(o,vp,p),u(o,Yt,p),e(Yt,Co),e(Co,pd),_(In,pd,null),e(Yt,Hh),e(Yt,ud),e(ud,Vh),u(o,yp,p),u(o,vt,p),e(vt,Qh),e(vt,Nn),e(Nn,Jh),e(vt,Kh),e(vt,hd),e(hd,Zh),e(vt,Yh),u(o,Tp,p),u(o,ei,p),e(ei,em),u(o,Mp,p),u(o,ti,p),e(ti,md),e(md,tm),u(o,wp,p),u(o,eo,p),e(eo,So),e(So,fd),_(On,fd,null),e(eo,om),e(eo,_d),e(_d,nm),u(o,xp,p),u(o,et,p),e(et,am),e(et,gd),e(gd,sm),e(et,rm),e(et,kd),e(kd,im),e(et,dm),e(et,bd),e(bd,lm),e(et,cm),u(o,zp,p),u(o,Ao,p),e(Ao,pm),e(Ao,oi),e(oi,um),e(Ao,hm),u(o,qp,p),u(o,ni,p),e(ni,vd),e(vd,mm),u(o,Bp,p),_(Dn,o,p),u(o,$p,p),u(o,ai,p),e(ai,Ln),e(Ln,yd),e(yd,fm),e(Ln,_m),e(Ln,xe),e(xe,gm),e(xe,Td),e(Td,km),e(xe,bm),e(xe,Md),e(Md,vm),e(xe,ym),e(xe,wd),e(wd,Tm),e(xe,Mm),e(xe,xd),e(xd,wm),e(xe,xm),e(xe,zd),e(zd,zm),e(xe,qm),u(o,Fp,p),_(Gn,o,p),u(o,jp,p),u(o,to,p),e(to,Io),e(Io,qd),_(Rn,qd,null),e(to,Bm),e(to,Bd),e(Bd,$m),u(o,Ep,p),u(o,ze,p),_(Wn,ze,null),e(ze,Fm),e(ze,oo),e(oo,jm),e(oo,si),e(si,Em),e(oo,Pm),e(oo,Un),e(Un,Cm),e(oo,Sm),e(ze,Am),e(ze,no),e(no,Im),e(no,ri),e(ri,Nm),e(no,Om),e(no,ii),e(ii,Dm),e(no,Lm),e(ze,Gm),e(ze,$d),e($d,Rm),e(ze,Wm),_(Xn,ze,null),u(o,Pp,p),u(o,ao,p),e(ao,No),e(No,Fd),_(Hn,Fd,null),e(ao,Um),e(ao,jd),e(jd,Xm),u(o,Cp,p),u(o,L,p),_(Vn,L,null),e(L,Hm),e(L,Ed),e(Ed,Vm),e(L,Qm),e(L,ht),e(ht,Jm),e(ht,di),e(di,Km),e(ht,Zm),e(ht,li),e(li,Ym),e(ht,ef),e(ht,Qn),e(Qn,tf),e(ht,of),e(L,nf),e(L,Jn),e(Jn,af),e(Jn,Pd),e(Pd,sf),e(Jn,rf),e(L,df),e(L,Cd),e(Cd,lf),e(L,cf),_(Kn,L,null),e(L,pf),e(L,Oo),_(Zn,Oo,null),e(Oo,uf),e(Oo,Sd),e(Sd,hf),e(L,mf),e(L,tt),_(Yn,tt,null),e(tt,ff),e(tt,ea),e(ea,_f),e(ea,Ad),e(Ad,gf),e(ea,kf),e(tt,bf),e(tt,ta),e(ta,oa),e(oa,Id),e(Id,vf),e(oa,yf),e(oa,Nd),e(Nd,Tf),e(ta,Mf),e(ta,na),e(na,Od),e(Od,wf),e(na,xf),e(na,Dd),e(Dd,zf),e(tt,qf),e(tt,Ld),e(Ld,Bf),u(o,Sp,p),u(o,so,p),e(so,Do),e(Do,Gd),_(aa,Gd,null),e(so,$f),e(so,Rd),e(Rd,Ff),u(o,Ap,p),u(o,C,p),_(sa,C,null),e(C,jf),e(C,ro),e(ro,Ef),e(ro,Wd),e(Wd,Pf),e(ro,Cf),e(ro,ra),e(ra,Sf),e(ro,Af),e(C,If),e(C,yt),e(yt,ci),e(ci,Nf),e(yt,Of),e(yt,pi),e(pi,Df),e(yt,Lf),e(yt,ui),e(ui,Gf),e(yt,Rf),e(C,Wf),e(C,ia),e(ia,Uf),e(ia,Ud),e(Ud,Xf),e(ia,Hf),e(C,Vf),e(C,Xd),e(Xd,Qf),e(C,Jf),_(da,C,null),e(C,Kf),e(C,Pe),_(la,Pe,null),e(Pe,Zf),e(Pe,Hd),e(Hd,Yf),e(Pe,e_),e(Pe,ca),e(ca,t_),e(ca,Vd),e(Vd,o_),e(ca,n_),e(Pe,a_),e(Pe,pa),e(pa,ua),e(ua,Qd),e(Qd,s_),e(ua,r_),e(ua,Jd),e(Jd,i_),e(pa,d_),e(pa,ha),e(ha,Kd),e(Kd,l_),e(ha,c_),e(ha,Zd),e(Zd,p_),e(Pe,u_),e(Pe,Yd),e(Yd,h_),e(C,m_),e(C,Lo),_(ma,Lo,null),e(Lo,f_),e(Lo,el),e(el,__),e(C,g_),e(C,Go),_(fa,Go,null),e(Go,k_),e(Go,tl),e(tl,b_),e(C,v_),e(C,Ro),_(_a,Ro,null),e(Ro,y_),e(Ro,ol),e(ol,T_),u(o,Ip,p),u(o,io,p),e(io,Wo),e(Wo,nl),_(ga,nl,null),e(io,M_),e(io,al),e(al,w_),u(o,Np,p),u(o,S,p),_(ka,S,null),e(S,x_),e(S,ba),e(ba,z_),e(ba,va),e(va,q_),e(ba,B_),e(S,$_),e(S,ya),e(ya,F_),e(ya,hi),e(hi,j_),e(ya,E_),e(S,P_),e(S,sl),e(sl,C_),e(S,S_),_(Ta,S,null),e(S,A_),e(S,ot),_(Ma,ot,null),e(ot,I_),e(ot,wa),e(wa,N_),e(wa,rl),e(rl,O_),e(wa,D_),e(ot,L_),e(ot,xa),e(xa,za),e(za,il),e(il,G_),e(za,R_),e(za,dl),e(dl,W_),e(xa,U_),e(xa,qa),e(qa,ll),e(ll,X_),e(qa,H_),e(qa,cl),e(cl,V_),e(ot,Q_),e(ot,pl),e(pl,J_),e(S,K_),e(S,Uo),_(Ba,Uo,null),e(Uo,Z_),e(Uo,ul),e(ul,Y_),e(S,eg),e(S,Xo),_($a,Xo,null),e(Xo,tg),e(Xo,Fa),e(Fa,og),e(Fa,hl),e(hl,ng),e(Fa,ag),e(S,sg),e(S,Ho),_(ja,Ho,null),e(Ho,rg),e(Ho,ml),e(ml,ig),e(S,dg),e(S,Vo),_(Ea,Vo,null),e(Vo,lg),e(Vo,fl),e(fl,cg),u(o,Op,p),u(o,lo,p),e(lo,Qo),e(Qo,_l),_(Pa,_l,null),e(lo,pg),e(lo,gl),e(gl,ug),u(o,Dp,p),u(o,G,p),_(Ca,G,null),e(G,hg),e(G,co),e(co,mg),e(co,kl),e(kl,fg),e(co,_g),e(co,Sa),e(Sa,gg),e(co,kg),e(G,bg),e(G,Aa),e(Aa,vg),e(Aa,mi),e(mi,yg),e(Aa,Tg),e(G,Mg),e(G,bl),e(bl,wg),e(G,xg),_(Ia,G,null),e(G,zg),e(G,Ce),_(Na,Ce,null),e(Ce,qg),e(Ce,vl),e(vl,Bg),e(Ce,$g),e(Ce,Oa),e(Oa,Fg),e(Oa,yl),e(yl,jg),e(Oa,Eg),e(Ce,Pg),e(Ce,Da),e(Da,La),e(La,Tl),e(Tl,Cg),e(La,Sg),e(La,Ml),e(Ml,Ag),e(Da,Ig),e(Da,Ga),e(Ga,wl),e(wl,Ng),e(Ga,Og),e(Ga,xl),e(xl,Dg),e(Ce,Lg),e(Ce,zl),e(zl,Gg),e(G,Rg),e(G,Jo),_(Ra,Jo,null),e(Jo,Wg),e(Jo,ql),e(ql,Ug),e(G,Xg),e(G,Ko),_(Wa,Ko,null),e(Ko,Hg),e(Ko,Bl),e(Bl,Vg),u(o,Lp,p),u(o,po,p),e(po,Zo),e(Zo,$l),_(Ua,$l,null),e(po,Qg),e(po,Fl),e(Fl,Jg),u(o,Gp,p),u(o,Qe,p),_(Xa,Qe,null),e(Qe,Kg),e(Qe,Ha),e(Ha,Zg),e(Ha,fi),e(fi,Yg),e(Ha,ek),e(Qe,tk),e(Qe,Va),e(Va,ok),e(Va,Qa),e(Qa,nk),e(Va,ak),e(Qe,sk),e(Qe,Se),_(Ja,Se,null),e(Se,rk),e(Se,uo),e(uo,ik),e(uo,_i),e(_i,dk),e(uo,lk),e(uo,jl),e(jl,ck),e(uo,pk),e(Se,uk),_(Yo,Se,null),e(Se,hk),e(Se,El),e(El,mk),e(Se,fk),_(Ka,Se,null),u(o,Rp,p),u(o,ho,p),e(ho,en),e(en,Pl),_(Za,Pl,null),e(ho,_k),e(ho,Cl),e(Cl,gk),u(o,Wp,p),u(o,Je,p),_(Ya,Je,null),e(Je,kk),e(Je,es),e(es,bk),e(es,gi),e(gi,vk),e(es,yk),e(Je,Tk),e(Je,ts),e(ts,Mk),e(ts,os),e(os,wk),e(ts,xk),e(Je,zk),e(Je,Z),_(ns,Z,null),e(Z,qk),e(Z,mo),e(mo,Bk),e(mo,ki),e(ki,$k),e(mo,Fk),e(mo,Sl),e(Sl,jk),e(mo,Ek),e(Z,Pk),_(tn,Z,null),e(Z,Ck),e(Z,Al),e(Al,Sk),e(Z,Ak),_(as,Z,null),e(Z,Ik),e(Z,Il),e(Il,Nk),e(Z,Ok),_(ss,Z,null),u(o,Up,p),u(o,fo,p),e(fo,on),e(on,Nl),_(rs,Nl,null),e(fo,Dk),e(fo,Ol),e(Ol,Lk),u(o,Xp,p),u(o,qe,p),_(is,qe,null),e(qe,Gk),e(qe,_o),e(_o,Rk),e(_o,Dl),e(Dl,Wk),e(_o,Uk),e(_o,Ll),e(Ll,Xk),e(_o,Hk),e(qe,Vk),e(qe,ds),e(ds,Qk),e(ds,bi),e(bi,Jk),e(ds,Kk),e(qe,Zk),e(qe,ls),e(ls,Yk),e(ls,cs),e(cs,eb),e(ls,tb),e(qe,ob),e(qe,Ae),_(ps,Ae,null),e(Ae,nb),e(Ae,go),e(go,ab),e(go,vi),e(vi,sb),e(go,rb),e(go,Gl),e(Gl,ib),e(go,db),e(Ae,lb),_(nn,Ae,null),e(Ae,cb),e(Ae,Rl),e(Rl,pb),e(Ae,ub),_(us,Ae,null),u(o,Hp,p),u(o,ko,p),e(ko,an),e(an,Wl),_(hs,Wl,null),e(ko,hb),e(ko,Ul),e(Ul,mb),u(o,Vp,p),u(o,Be,p),_(ms,Be,null),e(Be,fb),e(Be,Xl),e(Xl,_b),e(Be,gb),e(Be,fs),e(fs,kb),e(fs,yi),e(yi,bb),e(fs,vb),e(Be,yb),e(Be,_s),e(_s,Tb),e(_s,gs),e(gs,Mb),e(_s,wb),e(Be,xb),e(Be,Y),_(ks,Y,null),e(Y,zb),e(Y,bo),e(bo,qb),e(bo,Ti),e(Ti,Bb),e(bo,$b),e(bo,Hl),e(Hl,Fb),e(bo,jb),e(Y,Eb),_(sn,Y,null),e(Y,Pb),e(Y,Vl),e(Vl,Cb),e(Y,Sb),_(bs,Y,null),e(Y,Ab),e(Y,Ql),e(Ql,Ib),e(Y,Nb),_(vs,Y,null),u(o,Qp,p),u(o,vo,p),e(vo,rn),e(rn,Jl),_(ys,Jl,null),e(vo,Ob),e(vo,Kl),e(Kl,Db),u(o,Jp,p),u(o,Ts,p),e(Ts,Tt),_(Ms,Tt,null),e(Tt,Lb),e(Tt,Zl),e(Zl,Gb),e(Tt,Rb),_(ws,Tt,null),u(o,Kp,p),u(o,yo,p),e(yo,dn),e(dn,Yl),_(xs,Yl,null),e(yo,Wb),e(yo,ec),e(ec,Ub),u(o,Zp,p),u(o,$e,p),_(zs,$e,null),e($e,Xb),e($e,qs),e(qs,Hb),e(qs,Mi),e(Mi,Vb),e(qs,Qb),e($e,Jb),e($e,Bs),e(Bs,Kb),e(Bs,$s),e($s,Zb),e(Bs,Yb),e($e,ev),_(ln,$e,null),e($e,tv),e($e,Ie),_(Fs,Ie,null),e(Ie,ov),e(Ie,To),e(To,nv),e(To,wi),e(wi,av),e(To,sv),e(To,tc),e(tc,rv),e(To,iv),e(Ie,dv),_(cn,Ie,null),e(Ie,lv),e(Ie,oc),e(oc,cv),e(Ie,pv),_(js,Ie,null),u(o,Yp,p),u(o,Mo,p),e(Mo,pn),e(pn,nc),_(Es,nc,null),e(Mo,uv),e(Mo,ac),e(ac,hv),u(o,eu,p),u(o,Fe,p),_(Ps,Fe,null),e(Fe,mv),e(Fe,Cs),e(Cs,fv),e(Cs,xi),e(xi,_v),e(Cs,gv),e(Fe,kv),e(Fe,Ss),e(Ss,bv),e(Ss,As),e(As,vv),e(Ss,yv),e(Fe,Tv),_(un,Fe,null),e(Fe,Mv),e(Fe,ee),_(Is,ee,null),e(ee,wv),e(ee,wo),e(wo,xv),e(wo,zi),e(zi,zv),e(wo,qv),e(wo,sc),e(sc,Bv),e(wo,$v),e(ee,Fv),_(hn,ee,null),e(ee,jv),e(ee,rc),e(rc,Ev),e(ee,Pv),_(Ns,ee,null),e(ee,Cv),e(ee,ic),e(ic,Sv),e(ee,Av),_(Os,ee,null),u(o,tu,p),u(o,xo,p),e(xo,mn),e(mn,dc),_(Ds,dc,null),e(xo,Iv),e(xo,lc),e(lc,Nv),u(o,ou,p),u(o,R,p),_(Ls,R,null),e(R,Ov),e(R,Gs),e(Gs,Dv),e(Gs,qi),e(qi,Lv),e(Gs,Gv),e(R,Rv),e(R,Rs),e(Rs,Wv),e(Rs,Ws),e(Ws,Uv),e(Rs,Xv),e(R,Hv),e(R,cc),e(cc,Vv),e(R,Qv),e(R,mt),e(mt,pc),e(pc,Us),e(Us,Jv),e(mt,Kv),e(mt,uc),e(uc,Xs),e(Xs,Zv),e(mt,Yv),e(mt,hc),e(hc,Hs),e(Hs,ey),e(mt,ty),e(mt,mc),e(mc,Vs),e(Vs,oy),e(R,ny),e(R,Ne),_(Qs,Ne,null),e(Ne,ay),e(Ne,zo),e(zo,sy),e(zo,fc),e(fc,ry),e(zo,iy),e(zo,_c),e(_c,dy),e(zo,ly),e(Ne,cy),_(fn,Ne,null),e(Ne,py),e(Ne,gc),e(gc,uy),e(Ne,hy),_(Js,Ne,null),e(R,my),e(R,Mt),_(Ks,Mt,null),e(Mt,fy),e(Mt,kc),e(kc,_y),e(Mt,gy),_(Zs,Mt,null),e(R,ky),e(R,wt),_(Ys,wt,null),e(wt,by),e(wt,bc),e(bc,vy),e(wt,yy),_(er,wt,null),u(o,nu,p),u(o,qo,p),e(qo,_n),e(_n,vc),_(tr,vc,null),e(qo,Ty),e(qo,yc),e(yc,My),u(o,au,p),u(o,W,p),_(or,W,null),e(W,wy),e(W,nr),e(nr,xy),e(nr,Bi),e(Bi,zy),e(nr,qy),e(W,By),e(W,ar),e(ar,$y),e(ar,sr),e(sr,Fy),e(ar,jy),e(W,Ey),e(W,Tc),e(Tc,Py),e(W,Cy),e(W,ft),e(ft,Mc),e(Mc,rr),e(rr,Sy),e(ft,Ay),e(ft,wc),e(wc,ir),e(ir,Iy),e(ft,Ny),e(ft,xc),e(xc,dr),e(dr,Oy),e(ft,Dy),e(ft,zc),e(zc,lr),e(lr,Ly),e(W,Gy),e(W,te),_(cr,te,null),e(te,Ry),e(te,Bo),e(Bo,Wy),e(Bo,qc),e(qc,Uy),e(Bo,Xy),e(Bo,Bc),e(Bc,Hy),e(Bo,Vy),e(te,Qy),_(gn,te,null),e(te,Jy),e(te,$c),e($c,Ky),e(te,Zy),_(pr,te,null),e(te,Yy),e(te,Fc),e(Fc,eT),e(te,tT),_(ur,te,null),e(W,oT),e(W,xt),_(hr,xt,null),e(xt,nT),e(xt,jc),e(jc,aT),e(xt,sT),_(mr,xt,null),e(W,rT),e(W,zt),_(fr,zt,null),e(zt,iT),e(zt,Ec),e(Ec,dT),e(zt,lT),_(_r,zt,null),u(o,su,p),u(o,$o,p),e($o,kn),e(kn,Pc),_(gr,Pc,null),e($o,cT),e($o,Cc),e(Cc,pT),u(o,ru,p),u(o,I,p),_(kr,I,null),e(I,uT),e(I,Sc),e(Sc,hT),e(I,mT),e(I,br),e(br,fT),e(br,$i),e($i,_T),e(br,gT),e(I,kT),e(I,vr),e(vr,bT),e(vr,yr),e(yr,vT),e(vr,yT),e(I,TT),e(I,Ac),e(Ac,MT),e(I,wT),e(I,_t),e(_t,Ic),e(Ic,Tr),e(Tr,xT),e(_t,zT),e(_t,Nc),e(Nc,Mr),e(Mr,qT),e(_t,BT),e(_t,Oc),e(Oc,wr),e(wr,$T),e(_t,FT),e(_t,Dc),e(Dc,xr),e(xr,jT),e(I,ET),e(I,Oe),_(zr,Oe,null),e(Oe,PT),e(Oe,Fo),e(Fo,CT),e(Fo,Lc),e(Lc,ST),e(Fo,AT),e(Fo,Gc),e(Gc,IT),e(Fo,NT),e(Oe,OT),_(bn,Oe,null),e(Oe,DT),e(Oe,Rc),e(Rc,LT),e(Oe,GT),_(qr,Oe,null),e(I,RT),e(I,qt),_(Br,qt,null),e(qt,WT),e(qt,Wc),e(Wc,UT),e(qt,XT),_($r,qt,null),e(I,HT),e(I,Bt),_(Fr,Bt,null),e(Bt,VT),e(Bt,Uc),e(Uc,QT),e(Bt,JT),_(jr,Bt,null),u(o,iu,p),u(o,jo,p),e(jo,vn),e(vn,Xc),_(Er,Xc,null),e(jo,KT),e(jo,Hc),e(Hc,ZT),u(o,du,p),u(o,N,p),_(Pr,N,null),e(N,YT),e(N,Eo),e(Eo,eM),e(Eo,Vc),e(Vc,tM),e(Eo,oM),e(Eo,Qc),e(Qc,nM),e(Eo,aM),e(N,sM),e(N,Cr),e(Cr,rM),e(Cr,Fi),e(Fi,iM),e(Cr,dM),e(N,lM),e(N,Sr),e(Sr,cM),e(Sr,Ar),e(Ar,pM),e(Sr,uM),e(N,hM),e(N,Jc),e(Jc,mM),e(N,fM),e(N,gt),e(gt,Kc),e(Kc,Ir),e(Ir,_M),e(gt,gM),e(gt,Zc),e(Zc,Nr),e(Nr,kM),e(gt,bM),e(gt,Yc),e(Yc,Or),e(Or,vM),e(gt,yM),e(gt,ep),e(ep,Dr),e(Dr,TM),e(N,MM),e(N,De),_(Lr,De,null),e(De,wM),e(De,Po),e(Po,xM),e(Po,tp),e(tp,zM),e(Po,qM),e(Po,op),e(op,BM),e(Po,$M),e(De,FM),_(yn,De,null),e(De,jM),e(De,np),e(np,EM),e(De,PM),_(Gr,De,null),e(N,CM),e(N,$t),_(Rr,$t,null),e($t,SM),e($t,ap),e(ap,AM),e($t,IM),_(Wr,$t,null),e(N,NM),e(N,Ft),_(Ur,Ft,null),e(Ft,OM),e(Ft,sp),e(sp,DM),e(Ft,LM),_(Xr,Ft,null),lu=!0},p(o,[p]){const Hr={};p&2&&(Hr.$$scope={dirty:p,ctx:o}),Yo.$set(Hr);const rp={};p&2&&(rp.$$scope={dirty:p,ctx:o}),tn.$set(rp);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),nn.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),sn.$set(dp);const Tn={};p&2&&(Tn.$$scope={dirty:p,ctx:o}),ln.$set(Tn);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),cn.$set(lp);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),un.$set(cp);const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:o}),hn.$set(Vr);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),fn.$set(pp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),gn.$set(up);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),bn.$set(hp);const Qr={};p&2&&(Qr.$$scope={dirty:p,ctx:o}),yn.$set(Qr)},i(o){lu||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(Cn.$$.fragment,o),g(An.$$.fragment,o),g(In.$$.fragment,o),g(On.$$.fragment,o),g(Dn.$$.fragment,o),g(Gn.$$.fragment,o),g(Rn.$$.fragment,o),g(Wn.$$.fragment,o),g(Xn.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Kn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(aa.$$.fragment,o),g(sa.$$.fragment,o),g(da.$$.fragment,o),g(la.$$.fragment,o),g(ma.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(Ta.$$.fragment,o),g(Ma.$$.fragment,o),g(Ba.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Ia.$$.fragment,o),g(Na.$$.fragment,o),g(Ra.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ja.$$.fragment,o),g(Yo.$$.fragment,o),g(Ka.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(ns.$$.fragment,o),g(tn.$$.fragment,o),g(as.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ps.$$.fragment,o),g(nn.$$.fragment,o),g(us.$$.fragment,o),g(hs.$$.fragment,o),g(ms.$$.fragment,o),g(ks.$$.fragment,o),g(sn.$$.fragment,o),g(bs.$$.fragment,o),g(vs.$$.fragment,o),g(ys.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(ln.$$.fragment,o),g(Fs.$$.fragment,o),g(cn.$$.fragment,o),g(js.$$.fragment,o),g(Es.$$.fragment,o),g(Ps.$$.fragment,o),g(un.$$.fragment,o),g(Is.$$.fragment,o),g(hn.$$.fragment,o),g(Ns.$$.fragment,o),g(Os.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Qs.$$.fragment,o),g(fn.$$.fragment,o),g(Js.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(cr.$$.fragment,o),g(gn.$$.fragment,o),g(pr.$$.fragment,o),g(ur.$$.fragment,o),g(hr.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(zr.$$.fragment,o),g(bn.$$.fragment,o),g(qr.$$.fragment,o),g(Br.$$.fragment,o),g($r.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Lr.$$.fragment,o),g(yn.$$.fragment,o),g(Gr.$$.fragment,o),g(Rr.$$.fragment,o),g(Wr.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),lu=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(He.$$.fragment,o),k(Cn.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(On.$$.fragment,o),k(Dn.$$.fragment,o),k(Gn.$$.fragment,o),k(Rn.$$.fragment,o),k(Wn.$$.fragment,o),k(Xn.$$.fragment,o),k(Hn.$$.fragment,o),k(Vn.$$.fragment,o),k(Kn.$$.fragment,o),k(Zn.$$.fragment,o),k(Yn.$$.fragment,o),k(aa.$$.fragment,o),k(sa.$$.fragment,o),k(da.$$.fragment,o),k(la.$$.fragment,o),k(ma.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(Ta.$$.fragment,o),k(Ma.$$.fragment,o),k(Ba.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(Ea.$$.fragment,o),k(Pa.$$.fragment,o),k(Ca.$$.fragment,o),k(Ia.$$.fragment,o),k(Na.$$.fragment,o),k(Ra.$$.fragment,o),k(Wa.$$.fragment,o),k(Ua.$$.fragment,o),k(Xa.$$.fragment,o),k(Ja.$$.fragment,o),k(Yo.$$.fragment,o),k(Ka.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(ns.$$.fragment,o),k(tn.$$.fragment,o),k(as.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ps.$$.fragment,o),k(nn.$$.fragment,o),k(us.$$.fragment,o),k(hs.$$.fragment,o),k(ms.$$.fragment,o),k(ks.$$.fragment,o),k(sn.$$.fragment,o),k(bs.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(Ms.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(ln.$$.fragment,o),k(Fs.$$.fragment,o),k(cn.$$.fragment,o),k(js.$$.fragment,o),k(Es.$$.fragment,o),k(Ps.$$.fragment,o),k(un.$$.fragment,o),k(Is.$$.fragment,o),k(hn.$$.fragment,o),k(Ns.$$.fragment,o),k(Os.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Qs.$$.fragment,o),k(fn.$$.fragment,o),k(Js.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(cr.$$.fragment,o),k(gn.$$.fragment,o),k(pr.$$.fragment,o),k(ur.$$.fragment,o),k(hr.$$.fragment,o),k(mr.$$.fragment,o),k(fr.$$.fragment,o),k(_r.$$.fragment,o),k(gr.$$.fragment,o),k(kr.$$.fragment,o),k(zr.$$.fragment,o),k(bn.$$.fragment,o),k(qr.$$.fragment,o),k(Br.$$.fragment,o),k($r.$$.fragment,o),k(Fr.$$.fragment,o),k(jr.$$.fragment,o),k(Er.$$.fragment,o),k(Pr.$$.fragment,o),k(Lr.$$.fragment,o),k(yn.$$.fragment,o),k(Gr.$$.fragment,o),k(Rr.$$.fragment,o),k(Wr.$$.fragment,o),k(Ur.$$.fragment,o),k(Xr.$$.fragment,o),lu=!1},d(o){t(h),o&&t(z),o&&t(v),b(T),o&&t(je),o&&t(j),o&&t(Ke),o&&t(Q),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ee),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(w),b(He),o&&t(kt),o&&t(X),o&&t(fp),o&&t(bt),o&&t(_p),o&&t(Zr),o&&t(gp),b(Cn,o),o&&t(kp),o&&t(Yr),o&&t(bp),b(An,o),o&&t(vp),o&&t(Yt),b(In),o&&t(yp),o&&t(vt),o&&t(Tp),o&&t(ei),o&&t(Mp),o&&t(ti),o&&t(wp),o&&t(eo),b(On),o&&t(xp),o&&t(et),o&&t(zp),o&&t(Ao),o&&t(qp),o&&t(ni),o&&t(Bp),b(Dn,o),o&&t($p),o&&t(ai),o&&t(Fp),b(Gn,o),o&&t(jp),o&&t(to),b(Rn),o&&t(Ep),o&&t(ze),b(Wn),b(Xn),o&&t(Pp),o&&t(ao),b(Hn),o&&t(Cp),o&&t(L),b(Vn),b(Kn),b(Zn),b(Yn),o&&t(Sp),o&&t(so),b(aa),o&&t(Ap),o&&t(C),b(sa),b(da),b(la),b(ma),b(fa),b(_a),o&&t(Ip),o&&t(io),b(ga),o&&t(Np),o&&t(S),b(ka),b(Ta),b(Ma),b(Ba),b($a),b(ja),b(Ea),o&&t(Op),o&&t(lo),b(Pa),o&&t(Dp),o&&t(G),b(Ca),b(Ia),b(Na),b(Ra),b(Wa),o&&t(Lp),o&&t(po),b(Ua),o&&t(Gp),o&&t(Qe),b(Xa),b(Ja),b(Yo),b(Ka),o&&t(Rp),o&&t(ho),b(Za),o&&t(Wp),o&&t(Je),b(Ya),b(ns),b(tn),b(as),b(ss),o&&t(Up),o&&t(fo),b(rs),o&&t(Xp),o&&t(qe),b(is),b(ps),b(nn),b(us),o&&t(Hp),o&&t(ko),b(hs),o&&t(Vp),o&&t(Be),b(ms),b(ks),b(sn),b(bs),b(vs),o&&t(Qp),o&&t(vo),b(ys),o&&t(Jp),o&&t(Ts),b(Ms),b(ws),o&&t(Kp),o&&t(yo),b(xs),o&&t(Zp),o&&t($e),b(zs),b(ln),b(Fs),b(cn),b(js),o&&t(Yp),o&&t(Mo),b(Es),o&&t(eu),o&&t(Fe),b(Ps),b(un),b(Is),b(hn),b(Ns),b(Os),o&&t(tu),o&&t(xo),b(Ds),o&&t(ou),o&&t(R),b(Ls),b(Qs),b(fn),b(Js),b(Ks),b(Zs),b(Ys),b(er),o&&t(nu),o&&t(qo),b(tr),o&&t(au),o&&t(W),b(or),b(cr),b(gn),b(pr),b(ur),b(hr),b(mr),b(fr),b(_r),o&&t(su),o&&t($o),b(gr),o&&t(ru),o&&t(I),b(kr),b(zr),b(bn),b(qr),b(Br),b($r),b(Fr),b(jr),o&&t(iu),o&&t(jo),b(Er),o&&t(du),o&&t(N),b(Pr),b(Lr),b(yn),b(Gr),b(Rr),b(Wr),b(Ur),b(Xr)}}}const Vz={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Qz(E,h,z){let{fw:v}=h;return E.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class o0 extends jz{constructor(h){super();Ez(this,h,Qz,Hz,Pz,{fw:0})}}export{o0 as default,Vz as metadata};
