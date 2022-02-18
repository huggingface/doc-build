import{S as w4,i as z4,s as B4,e as o,k as d,w as m,t as r,L as F4,c as a,d as t,m as l,a as s,x as f,h as i,b as c,J as e,g as h,y as _,q as g,o as k,B as b}from"../../chunks/vendor-b1433968.js";import{T as at}from"../../chunks/Tip-c3840994.js";import{D as F}from"../../chunks/Docstring-ff504c58.js";import{C as q}from"../../chunks/CodeBlock-a320dbd7.js";import{I as U}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function $4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function q4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function j4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function E4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function P4(E){let u,z,v,M,w,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,V,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),w=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=o("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=o("p"),Ue=r("This second option is useful when using "),_e=o("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ke=o("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=d(),P=o("ul"),S=o("li"),dt=r("a single Tensor with "),ce=o("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),V=o("code"),ct=r("model(input_ids)"),pt=d(),D=o("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=o("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=o("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=o("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){u=a(x,"P",{});var $=s(u);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(x),M=a(x,"UL",{});var xe=s(M);w=a(xe,"LI",{});var He=s(w);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(xe),B=a(xe,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),xe.forEach(t),je=l(x),j=a(x,"P",{});var J=s(j);Ue=i(J,"This second option is useful when using "),_e=a(J,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(J,` method which currently requires having all
the tensors in the first argument of the model call function: `),ke=a(J,"CODE",{});var gt=s(ke);it=i(gt,"model(inputs)"),gt.forEach(t),Ke=i(J,"."),J.forEach(t),Q=l(x),O=a(x,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),X.forEach(t),ae=l(x),P=a(x,"UL",{});var ie=s(P);S=a(ie,"LI",{});var de=s(S);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),V=a(de,"CODE",{});var Qt=s(V);ct=i(Qt,"model(input_ids)"),Qt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Vt=s(be);Ze=i(Vt,"model([input_ids, attention_mask])"),Vt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Qe=s(re);Te=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Qe,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Qe.forEach(t),ie.forEach(t)},m(x,$){h(x,u,$),e(u,z),h(x,v,$),h(x,M,$),e(M,w),e(w,T),e(M,y),e(M,B),e(B,st),h(x,je,$),h(x,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(x,Q,$),h(x,O,$),e(O,Xe),h(x,ae,$),h(x,P,$),e(P,S),e(S,dt),e(S,ce),e(ce,pe),e(S,lt),e(S,V),e(V,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(x){x&&t(u),x&&t(v),x&&t(M),x&&t(je),x&&t(j),x&&t(Q),x&&t(O),x&&t(ae),x&&t(P)}}}function C4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function S4(E){let u,z,v,M,w,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,V,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),w=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=o("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=o("p"),Ue=r("This second option is useful when using "),_e=o("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ke=o("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=o("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=d(),P=o("ul"),S=o("li"),dt=r("a single Tensor with "),ce=o("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),V=o("code"),ct=r("model(input_ids)"),pt=d(),D=o("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=o("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=o("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=o("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){u=a(x,"P",{});var $=s(u);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(x),M=a(x,"UL",{});var xe=s(M);w=a(xe,"LI",{});var He=s(w);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(xe),B=a(xe,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),xe.forEach(t),je=l(x),j=a(x,"P",{});var J=s(j);Ue=i(J,"This second option is useful when using "),_e=a(J,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(J,` method which currently requires having all
the tensors in the first argument of the model call function: `),ke=a(J,"CODE",{});var gt=s(ke);it=i(gt,"model(inputs)"),gt.forEach(t),Ke=i(J,"."),J.forEach(t),Q=l(x),O=a(x,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),X.forEach(t),ae=l(x),P=a(x,"UL",{});var ie=s(P);S=a(ie,"LI",{});var de=s(S);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),V=a(de,"CODE",{});var Qt=s(V);ct=i(Qt,"model(input_ids)"),Qt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Vt=s(be);Ze=i(Vt,"model([input_ids, attention_mask])"),Vt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Qe=s(re);Te=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Qe,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Qe.forEach(t),ie.forEach(t)},m(x,$){h(x,u,$),e(u,z),h(x,v,$),h(x,M,$),e(M,w),e(w,T),e(M,y),e(M,B),e(B,st),h(x,je,$),h(x,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(x,Q,$),h(x,O,$),e(O,Xe),h(x,ae,$),h(x,P,$),e(P,S),e(S,dt),e(S,ce),e(ce,pe),e(S,lt),e(S,V),e(V,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(x){x&&t(u),x&&t(v),x&&t(M),x&&t(je),x&&t(j),x&&t(Q),x&&t(O),x&&t(ae),x&&t(P)}}}function A4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function I4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function N4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function O4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function D4(E){let u,z,v,M,w;return{c(){u=o("p"),z=r(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=o("code"),M=r("Module"),w=r(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),w=i(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,w)},d(T){T&&t(u)}}}function L4(E){let u,z,v,M,w,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,S,dt,ce,pe,lt,V,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye,x,$,xe,He,Ut,J,Xt,gt,X,ie,de,Ht,Qt,le,Vt,Jt,Qe,Kt,Bu,ad,Fu,$u,up,kt,qu,jo,sd,ju,Eu,Pu,Qr,Cu,Su,mp,Vr,rd,Au,fp,Eo,_p,Jr,Po,id,Iu,Nu,Zt,Ou,dd,Du,Lu,ld,Gu,Ru,gp,Co,kp,Yt,Cn,cd,So,Wu,pd,Uu,bp,bt,Xu,Kr,Hu,Ao,Qu,Vu,hd,Ju,Ku,vp,Zr,Zu,yp,Yr,ud,Yu,Tp,en,Sn,md,Io,em,fd,tm,Mp,et,nm,_d,om,am,gd,sm,rm,kd,im,dm,xp,An,lm,ei,cm,pm,wp,ti,bd,hm,zp,No,Bp,ni,Oo,vd,um,mm,we,fm,yd,_m,gm,Td,km,bm,Md,vm,ym,xd,Tm,Mm,wd,xm,wm,Fp,Do,$p,tn,In,zd,Lo,zm,Bd,Bm,qp,ze,Go,Fm,nn,$m,oi,qm,jm,Ro,Em,Pm,Cm,on,Sm,ai,Am,Im,si,Nm,Om,Dm,Fd,Lm,Gm,Wo,jp,an,Nn,$d,Uo,Rm,qd,Wm,Ep,L,Xo,Um,jd,Xm,Hm,vt,ri,Qm,Vm,ii,Jm,Km,di,Zm,Ym,ef,Ho,tf,Ed,nf,of,af,Pd,sf,rf,Qo,df,On,Vo,lf,Cd,cf,pf,tt,Jo,hf,Ko,uf,Sd,mf,ff,_f,Zo,Yo,Ad,gf,kf,Id,bf,vf,ea,Nd,yf,Tf,Od,Mf,xf,Dd,wf,Pp,sn,Dn,Ld,ta,zf,Gd,Bf,Cp,A,na,Ff,rn,$f,Rd,qf,jf,oa,Ef,Pf,Cf,yt,li,Sf,Af,ci,If,Nf,pi,Of,Df,Lf,aa,Gf,Wd,Rf,Wf,Uf,Ud,Xf,Hf,sa,Qf,Pe,ra,Vf,Xd,Jf,Kf,ia,Zf,Hd,Yf,e_,t_,da,la,Qd,n_,o_,Vd,a_,s_,ca,Jd,r_,i_,Kd,d_,l_,Zd,c_,p_,Ln,pa,h_,Yd,u_,m_,Gn,ha,f_,el,__,Sp,dn,Rn,tl,ua,g_,nl,k_,Ap,C,ma,b_,fa,v_,_a,y_,T_,M_,ga,x_,hi,w_,z_,B_,ol,F_,$_,ka,q_,nt,ba,j_,va,E_,al,P_,C_,S_,ya,Ta,sl,A_,I_,rl,N_,O_,Ma,il,D_,L_,dl,G_,R_,ll,W_,U_,Wn,xa,X_,cl,H_,Q_,Un,wa,V_,za,J_,pl,K_,Z_,Y_,Xn,Ba,eg,hl,tg,ng,Hn,Fa,og,ul,ag,Ip,ln,Qn,ml,$a,sg,fl,rg,Np,G,qa,ig,cn,dg,_l,lg,cg,ja,pg,hg,ug,Ea,mg,ui,fg,_g,gg,gl,kg,bg,Pa,vg,Ce,Ca,yg,kl,Tg,Mg,Sa,xg,bl,wg,zg,Bg,Aa,Ia,vl,Fg,$g,yl,qg,jg,Na,Tl,Eg,Pg,Ml,Cg,Sg,xl,Ag,Ig,Vn,Oa,Ng,wl,Og,Dg,Jn,Da,Lg,zl,Gg,Op,pn,Kn,Bl,La,Rg,Fl,Wg,Dp,Ve,Ga,Ug,Ra,Xg,mi,Hg,Qg,Vg,Wa,Jg,Ua,Kg,Zg,Yg,Se,Xa,ek,hn,tk,fi,nk,ok,$l,ak,sk,rk,Zn,ik,ql,dk,lk,Ha,Lp,un,Yn,jl,Qa,ck,El,pk,Gp,Je,Va,hk,Ja,uk,_i,mk,fk,_k,Ka,gk,Za,kk,bk,vk,K,Ya,yk,mn,Tk,gi,Mk,xk,Pl,wk,zk,Bk,eo,Fk,Cl,$k,qk,es,jk,Sl,Ek,Pk,ts,Rp,fn,to,Al,ns,Ck,Il,Sk,Wp,Be,os,Ak,_n,Ik,Nl,Nk,Ok,Ol,Dk,Lk,Gk,as,Rk,ki,Wk,Uk,Xk,ss,Hk,rs,Qk,Vk,Jk,Ae,is,Kk,gn,Zk,bi,Yk,eb,Dl,tb,nb,ob,no,ab,Ll,sb,rb,ds,Up,kn,oo,Gl,ls,ib,Rl,db,Xp,Fe,cs,lb,Wl,cb,pb,ps,hb,vi,ub,mb,fb,hs,_b,us,gb,kb,bb,Z,ms,vb,bn,yb,yi,Tb,Mb,Ul,xb,wb,zb,ao,Bb,Xl,Fb,$b,fs,qb,Hl,jb,Eb,_s,Hp,vn,so,Ql,gs,Pb,Vl,Cb,Qp,ks,Tt,bs,Sb,Jl,Ab,Ib,vs,Vp,yn,ro,Kl,ys,Nb,Zl,Ob,Jp,$e,Ts,Db,Ms,Lb,Ti,Gb,Rb,Wb,xs,Ub,ws,Xb,Hb,Qb,io,Vb,Ie,zs,Jb,Tn,Kb,Mi,Zb,Yb,Yl,ev,tv,nv,lo,ov,ec,av,sv,Bs,Kp,Mn,co,tc,Fs,rv,nc,iv,Zp,qe,$s,dv,qs,lv,xi,cv,pv,hv,js,uv,Es,mv,fv,_v,po,gv,Y,Ps,kv,xn,bv,wi,vv,yv,oc,Tv,Mv,xv,ho,wv,ac,zv,Bv,Cs,Fv,sc,$v,qv,Ss,Yp,wn,uo,rc,As,jv,ic,Ev,eh,R,Is,Pv,Ns,Cv,zi,Sv,Av,Iv,Os,Nv,Ds,Ov,Dv,Lv,dc,Gv,Rv,ut,lc,Ls,Wv,Uv,cc,Gs,Xv,Hv,pc,Rs,Qv,Vv,hc,Ws,Jv,Kv,Ne,Us,Zv,zn,Yv,uc,ey,ty,mc,ny,oy,ay,mo,sy,fc,ry,iy,Xs,dy,Mt,Hs,ly,_c,cy,py,Qs,hy,xt,Vs,uy,gc,my,fy,Js,th,Bn,fo,kc,Ks,_y,bc,gy,nh,W,Zs,ky,Ys,by,Bi,vy,yy,Ty,er,My,tr,xy,wy,zy,vc,By,Fy,mt,yc,nr,$y,qy,Tc,or,jy,Ey,Mc,ar,Py,Cy,xc,sr,Sy,Ay,ee,rr,Iy,Fn,Ny,wc,Oy,Dy,zc,Ly,Gy,Ry,_o,Wy,Bc,Uy,Xy,ir,Hy,Fc,Qy,Vy,dr,Jy,wt,lr,Ky,$c,Zy,Yy,cr,e1,zt,pr,t1,qc,n1,o1,hr,oh,$n,go,jc,ur,a1,Ec,s1,ah,I,mr,r1,Pc,i1,d1,fr,l1,Fi,c1,p1,h1,_r,u1,gr,m1,f1,_1,Cc,g1,k1,ft,Sc,kr,b1,v1,Ac,br,y1,T1,Ic,vr,M1,x1,Nc,yr,w1,z1,Oe,Tr,B1,qn,F1,Oc,$1,q1,Dc,j1,E1,P1,ko,C1,Lc,S1,A1,Mr,I1,Bt,xr,N1,Gc,O1,D1,wr,L1,Ft,zr,G1,Rc,R1,W1,Br,sh,jn,bo,Wc,Fr,U1,Uc,X1,rh,N,$r,H1,En,Q1,Xc,V1,J1,Hc,K1,Z1,Y1,qr,eT,$i,tT,nT,oT,jr,aT,Er,sT,rT,iT,Qc,dT,lT,_t,Vc,Pr,cT,pT,Jc,Cr,hT,uT,Kc,Sr,mT,fT,Zc,Ar,_T,gT,De,Ir,kT,Pn,bT,Yc,vT,yT,ep,TT,MT,xT,vo,wT,tp,zT,BT,Nr,FT,$t,Or,$T,np,qT,jT,Dr,ET,qt,Lr,PT,op,CT,ST,Gr,ih;return T=new U({}),ae=new U({}),He=new U({}),Eo=new q({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch['labels']),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():</span>
<span class="hljs-meta">...</span> <span class="language-python">    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># forward pass</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model(**inputs, labels=batch[<span class="hljs-string">&#x27;labels&#x27;</span>])</span>`}}),Co=new q({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]</span>
&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;`}}),So=new U({}),Io=new U({}),No=new q({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text =  "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels) # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, <span class="hljs-attribute">src_lang</span>=<span class="hljs-string">&quot;en_XX&quot;</span>, <span class="hljs-attribute">tgt_lang</span>=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text =  <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&quot;pt&quot;</span>)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, <span class="hljs-attribute">labels</span>=labels) # forward pass`}}),Do=new q({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
# => "The Secretary-General of the United Nations says there is no military solution in Syria.",`,highlighted:`<span class="hljs-keyword">from</span> transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(*<span class="hljs-number">*e</span>ncoded_hi, <span class="hljs-attribute">forced_bos_token_id</span>=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, <span class="hljs-attribute">skip_special_tokens</span>=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, <span class="hljs-attribute">return_tensors</span>=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(*<span class="hljs-number">*e</span>ncoded_ar, <span class="hljs-attribute">forced_bos_token_id</span>=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, <span class="hljs-attribute">skip_special_tokens</span>=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Lo=new U({}),Go=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/configuration_mbart.py#L33",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or
<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Wo=new q({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Uo=new U({}),Xo=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"*args",val:""},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart.py#L70"}}),Qo=new q({props:{code:`from transformers import MBartTokenizer
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-en-ro', src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-en-ro&#x27;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt)
&gt;&gt;&gt; with tokenizer.as_target_tokenizer():
...     labels = tokenizer(expected_translation_romanian, return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; inputs[&quot;</span>labels<span class="hljs-string">&quot;] = labels[&quot;</span>input_ids<span class="hljs-string">&quot;]</span>`}}),Vo=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart.py#L228"}}),Jo=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart.py#L177",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ta=new U({}),na=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L83"}}),sa=new q({props:{code:`from transformers import MBartTokenizerFast
tokenizer = MBartTokenizerFast.from_pretrained('facebook/mbart-large-en-ro', src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt)
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-en-ro&#x27;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt)
&gt;&gt;&gt; with tokenizer.as_target_tokenizer():
...     labels = tokenizer(expected_translation_romanian, return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; inputs[&quot;</span>labels<span class="hljs-string">&quot;] = labels[&quot;</span>input_ids<span class="hljs-string">&quot;]</span>`}}),ra=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L160",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pa=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L223"}}),ha=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/tokenization_mbart_fast.py#L238"}}),ua=new U({}),ma=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for SentencePiece</a> can be used, among other things, to set:</p>
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
</ul>`,name:"sp_model_kwargs"}]}}),ka=new q({props:{code:`from transformers import MBart50Tokenizer
tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text =  "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
   labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text =  <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>   labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),ba=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L280",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xa=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L233"}}),wa=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L250",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ba=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L341"}}),Fa=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50.py#L347"}}),$a=new U({}),qa=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Pa=new q({props:{code:`from transformers import MBart50TokenizerFast
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text =  "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
   labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text =  <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>   labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ca=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L168",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oa=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L219"}}),Da=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L234"}}),La=new U({}),Ga=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1123",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xa=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1150",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new at({props:{$$slots:{default:[$4]},$$scope:{ctx:E}}}),Ha=new q({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = MBartModel.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Qa=new U({}),Va=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1239",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ya=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1283",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new at({props:{$$slots:{default:[q4]},$$scope:{ctx:E}}}),es=new q({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration, MBartConfig

model = MBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='pt')

# Generate Summary
summary_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>, early_stopping=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> summary_ids])`}}),ts=new q({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

model = MBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors='pt')['input_ids']
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),ns=new U({}),os=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1535",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),is=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1547",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new at({props:{$$slots:{default:[j4]},$$scope:{ctx:E}}}),ds=new q({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = MBartForQuestionAnswering.from_pretrained('facebook/mbart-large-cc25')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ls=new U({}),cs=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1409",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ms=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1422",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new at({props:{$$slots:{default:[E4]},$$scope:{ctx:E}}}),fs=new q({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = MBartForSequenceClassification.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_s=new q({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = MBartForSequenceClassification.from_pretrained('facebook/mbart-large-cc25', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gs=new U({}),bs=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_mbart.py#L1697",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2
tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two
additional tensors are only required when the model is used as a decoder in a Sequence to Sequence
model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential
decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the
cached key, value states of the self-attention and the cross-attention layers if model is used in
encoder-decoder setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vs=new q({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained('facebook/bart-large')
model = MBartForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new U({}),Ts=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1197",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),io=new at({props:{$$slots:{default:[P4]},$$scope:{ctx:E}}}),zs=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1209",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lo=new at({props:{$$slots:{default:[C4]},$$scope:{ctx:E}}}),Bs=new q({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = TFMBartModel.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Fs=new U({}),$s=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1304",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),po=new at({props:{$$slots:{default:[S4]},$$scope:{ctx:E}}}),Ps=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_tf_mbart.py#L1337",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ho=new at({props:{$$slots:{default:[A4]},$$scope:{ctx:E}}}),Cs=new q({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = MBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='tf')

# Generate Summary
summary_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>, early_stopping=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> summary_ids])`}}),Ss=new q({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

model = MBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors='tf')['input_ids']
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),As=new U({}),Is=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1270",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Us=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1207",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new at({props:{$$slots:{default:[I4]},$$scope:{ctx:E}}}),Xs=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = FlaxMBartModel.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Hs=new F({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1033",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Vs=new F({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1095",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ks=new U({}),Zs=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),rr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1207",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new at({props:{$$slots:{default:[N4]},$$scope:{ctx:E}}}),ir=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors='np')

# Generate Summary
summary_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>, early_stopping=<span class="hljs-literal">True</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>([tokenizer.decode(g, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>) <span class="hljs-keyword">for</span> g <span class="hljs-keyword">in</span> summary_ids])`}}),dr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors='np')['input_ids']
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&#x27;np&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),lr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1033",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),pr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1361",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached
key, value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ur=new U({}),mr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1664",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Tr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1207",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new at({props:{$$slots:{default:[O4]},$$scope:{ctx:E}}}),Mr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = FlaxMBartForSequenceClassification.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1033",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),zr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1095",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Br=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Fr=new U({}),$r=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1752",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ir=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1207",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new at({props:{$$slots:{default:[D4]},$$scope:{ctx:E}}}),Nr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = FlaxMBartForQuestionAnswering.from_pretrained('facebook/mbart-large-cc25')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='jax')

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Or=new F({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1033",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Lr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/mbart/modeling_flax_mbart.py#L1095",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<code>MBartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new q({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){u=o("meta"),z=d(),v=o("h1"),M=o("a"),w=o("span"),m(T.$$.fragment),y=d(),B=o("span"),st=r("MBart and MBart-50"),je=d(),j=o("p"),Ue=o("strong"),_e=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ge=o("a"),ke=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Ke=d(),Q=o("h2"),O=o("a"),Xe=o("span"),m(ae.$$.fragment),P=d(),S=o("span"),dt=r("Overview of MBart"),ce=d(),pe=o("p"),lt=r("The MBart model was presented in "),V=o("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ee=o("p"),be=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=o("p"),ve=r("This model was contributed by "),ye=o("a"),ht=r("valhalla"),re=r(". The Authors\u2019 code can be found "),Te=o("a"),Me=r("here"),Ye=d(),x=o("h3"),$=o("a"),xe=o("span"),m(He.$$.fragment),Ut=d(),J=o("span"),Xt=r("Training of MBart"),gt=d(),X=o("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=o("code"),Ht=r("X [eos, src_lang_code]"),Qt=r(" where "),le=o("code"),Vt=r("X"),Jt=r(` is the source text. The
target text format is `),Qe=o("code"),Kt=r("[tgt_lang_code] X [eos]"),Bu=r(". "),ad=o("code"),Fu=r("bos"),$u=r(" is never used."),up=d(),kt=o("p"),qu=r("The regular "),jo=o("a"),sd=o("strong"),ju=r("call"),Eu=r("()"),Pu=r(` will encode source text format, and it should be wrapped
inside the context manager `),Qr=o("a"),Cu=r("as_target_tokenizer()"),Su=r(" to encode target text format."),mp=d(),Vr=o("ul"),rd=o("li"),Au=r("Supervised training"),fp=d(),m(Eo.$$.fragment),_p=d(),Jr=o("ul"),Po=o("li"),id=o("p"),Iu=r("Generation"),Nu=d(),Zt=o("p"),Ou=r("While generating the target text set the "),dd=o("code"),Du=r("decoder_start_token_id"),Lu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=o("em"),Gu=r("facebook/mbart-large-en-ro"),Ru=r(" model."),gp=d(),m(Co.$$.fragment),kp=d(),Yt=o("h2"),Cn=o("a"),cd=o("span"),m(So.$$.fragment),Wu=d(),pd=o("span"),Uu=r("Overview of MBart-50"),bp=d(),bt=o("p"),Xu=r("MBart-50 was introduced in the "),Kr=o("em"),Hu=r(`Multilingual Translation with Extensible Multilingual Pretraining and Finetuning
<`),Ao=o("a"),Qu=r("https://arxiv.org/abs/2008.00401>"),Vu=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=o("em"),Ju=r("mbart-large-cc25"),Ku=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),vp=d(),Zr=o("p"),Zu=r("According to the abstract"),yp=d(),Yr=o("p"),ud=o("em"),Yu=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Tp=d(),en=o("h3"),Sn=o("a"),md=o("span"),m(Io.$$.fragment),em=d(),fd=o("span"),tm=r("Training of MBart-50"),Mp=d(),et=o("p"),nm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),_d=o("code"),om=r("[lang_code] X [eos]"),am=r(", where "),gd=o("code"),sm=r("lang_code"),rm=r(` is source
language id for source text and target language id for target text, with `),kd=o("code"),im=r("X"),dm=r(` being the source or target text
respectively.`),xp=d(),An=o("p"),lm=r("MBart-50 has its own tokenizer "),ei=o("a"),cm=r("MBart50Tokenizer"),pm=r("."),wp=d(),ti=o("ul"),bd=o("li"),hm=r("Supervised training"),zp=d(),m(No.$$.fragment),Bp=d(),ni=o("ul"),Oo=o("li"),vd=o("p"),um=r("Generation"),mm=d(),we=o("p"),fm=r("To generate using the mBART-50 multilingual translation models, "),yd=o("code"),_m=r("eos_token_id"),gm=r(` is used as the
`),Td=o("code"),km=r("decoder_start_token_id"),bm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Md=o("em"),vm=r("forced_bos_token_id"),ym=r(" parameter to the "),xd=o("em"),Tm=r("generate"),Mm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),wd=o("em"),xm=r("facebook/mbart-50-large-many-to-many"),wm=r(" checkpoint."),Fp=d(),m(Do.$$.fragment),$p=d(),tn=o("h2"),In=o("a"),zd=o("span"),m(Lo.$$.fragment),zm=d(),Bd=o("span"),Bm=r("MBartConfig"),qp=d(),ze=o("div"),m(Go.$$.fragment),Fm=d(),nn=o("p"),$m=r("This is the configuration class to store the configuration of a "),oi=o("a"),qm=r("MBartModel"),jm=r(`. It is used to
instantiate an MBART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MBART `),Ro=o("a"),Em=r("facebook/mbart-large-cc25"),Pm=r(" architecture."),Cm=d(),on=o("p"),Sm=r("Configuration objects inherit from "),ai=o("a"),Am=r("PretrainedConfig"),Im=r(` and can be used to control the model
outputs. Read the documentation from `),si=o("a"),Nm=r("PretrainedConfig"),Om=r(" for more information."),Dm=d(),Fd=o("p"),Lm=r("Example:"),Gm=d(),m(Wo.$$.fragment),jp=d(),an=o("h2"),Nn=o("a"),$d=o("span"),m(Uo.$$.fragment),Rm=d(),qd=o("span"),Wm=r("MBartTokenizer"),Ep=d(),L=o("div"),m(Xo.$$.fragment),Um=d(),jd=o("p"),Xm=r("Construct an MBART tokenizer."),Hm=d(),vt=o("p"),ri=o("a"),Qm=r("MBartTokenizer"),Vm=r(" is a subclass of "),ii=o("a"),Jm=r("XLMRobertaTokenizer"),Km=r(`. Refer to
superclass `),di=o("a"),Zm=r("XLMRobertaTokenizer"),Ym=r(` for usage examples and documentation concerning the
initialization parameters and other methods.`),ef=d(),Ho=o("p"),tf=r("The tokenization method is "),Ed=o("code"),nf=r("<tokens> <eos> <language code>"),of=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),af=d(),Pd=o("p"),sf=r("Examples:"),rf=d(),m(Qo.$$.fragment),df=d(),On=o("div"),m(Vo.$$.fragment),lf=d(),Cd=o("p"),cf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),pf=d(),tt=o("div"),m(Jo.$$.fragment),hf=d(),Ko=o("p"),uf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Sd=o("code"),mf=r("X"),ff=r(" represents the sequence:"),_f=d(),Zo=o("ul"),Yo=o("li"),Ad=o("code"),gf=r("input_ids"),kf=r(" (for encoder) "),Id=o("code"),bf=r("X [eos, src_lang_code]"),vf=d(),ea=o("li"),Nd=o("code"),yf=r("decoder_input_ids"),Tf=r(": (for decoder) "),Od=o("code"),Mf=r("X [eos, tgt_lang_code]"),xf=d(),Dd=o("p"),wf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Pp=d(),sn=o("h2"),Dn=o("a"),Ld=o("span"),m(ta.$$.fragment),zf=d(),Gd=o("span"),Bf=r("MBartTokenizerFast"),Cp=d(),A=o("div"),m(na.$$.fragment),Ff=d(),rn=o("p"),$f=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=o("em"),qf=r("tokenizers"),jf=r(" library). Based on "),oa=o("a"),Ef=r("BPE"),Pf=r("."),Cf=d(),yt=o("p"),li=o("a"),Sf=r("MBartTokenizerFast"),Af=r(" is a subclass of "),ci=o("a"),If=r("XLMRobertaTokenizerFast"),Nf=r(`. Refer to
superclass `),pi=o("a"),Of=r("XLMRobertaTokenizerFast"),Df=r(` for usage examples and documentation concerning the
initialization parameters and other methods.`),Lf=d(),aa=o("p"),Gf=r("The tokenization method is "),Wd=o("code"),Rf=r("<tokens> <eos> <language code>"),Wf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Uf=d(),Ud=o("p"),Xf=r("Examples:"),Hf=d(),m(sa.$$.fragment),Qf=d(),Pe=o("div"),m(ra.$$.fragment),Vf=d(),Xd=o("p"),Jf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Kf=d(),ia=o("p"),Zf=r("An MBART sequence has the following format, where "),Hd=o("code"),Yf=r("X"),e_=r(" represents the sequence:"),t_=d(),da=o("ul"),la=o("li"),Qd=o("code"),n_=r("input_ids"),o_=r(" (for encoder) "),Vd=o("code"),a_=r("X [eos, src_lang_code]"),s_=d(),ca=o("li"),Jd=o("code"),r_=r("decoder_input_ids"),i_=r(": (for decoder) "),Kd=o("code"),d_=r("X [eos, tgt_lang_code]"),l_=d(),Zd=o("p"),c_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),p_=d(),Ln=o("div"),m(pa.$$.fragment),h_=d(),Yd=o("p"),u_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),m_=d(),Gn=o("div"),m(ha.$$.fragment),f_=d(),el=o("p"),__=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Sp=d(),dn=o("h2"),Rn=o("a"),tl=o("span"),m(ua.$$.fragment),g_=d(),nl=o("span"),k_=r("MBart50Tokenizer"),Ap=d(),C=o("div"),m(ma.$$.fragment),b_=d(),fa=o("p"),v_=r("Construct a MBart50 tokenizer. Based on "),_a=o("a"),y_=r("SentencePiece"),T_=r("."),M_=d(),ga=o("p"),x_=r("This tokenizer inherits from "),hi=o("a"),w_=r("PreTrainedTokenizer"),z_=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),B_=d(),ol=o("p"),F_=r("Examples:"),$_=d(),m(ka.$$.fragment),q_=d(),nt=o("div"),m(ba.$$.fragment),j_=d(),va=o("p"),E_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=o("code"),P_=r("X"),C_=r(" represents the sequence:"),S_=d(),ya=o("ul"),Ta=o("li"),sl=o("code"),A_=r("input_ids"),I_=r(" (for encoder) "),rl=o("code"),N_=r("[src_lang_code] X [eos]"),O_=d(),Ma=o("li"),il=o("code"),D_=r("labels"),L_=r(": (for decoder) "),dl=o("code"),G_=r("[tgt_lang_code] X [eos]"),R_=d(),ll=o("p"),W_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),U_=d(),Wn=o("div"),m(xa.$$.fragment),X_=d(),cl=o("p"),H_=r("Converts a sequence of tokens (strings for sub-words) in a single string."),Q_=d(),Un=o("div"),m(wa.$$.fragment),V_=d(),za=o("p"),J_=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=o("code"),K_=r("prepare_for_model"),Z_=r(" method."),Y_=d(),Xn=o("div"),m(Ba.$$.fragment),eg=d(),hl=o("p"),tg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),ng=d(),Hn=o("div"),m(Fa.$$.fragment),og=d(),ul=o("p"),ag=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Ip=d(),ln=o("h2"),Qn=o("a"),ml=o("span"),m($a.$$.fragment),sg=d(),fl=o("span"),rg=r("MBart50TokenizerFast"),Np=d(),G=o("div"),m(qa.$$.fragment),ig=d(),cn=o("p"),dg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),_l=o("em"),lg=r("tokenizers"),cg=r(" library). Based on "),ja=o("a"),pg=r("BPE"),hg=r("."),ug=d(),Ea=o("p"),mg=r("This tokenizer inherits from "),ui=o("a"),fg=r("PreTrainedTokenizerFast"),_g=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),gg=d(),gl=o("p"),kg=r("Examples:"),bg=d(),m(Pa.$$.fragment),vg=d(),Ce=o("div"),m(Ca.$$.fragment),yg=d(),kl=o("p"),Tg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Mg=d(),Sa=o("p"),xg=r("An MBART-50 sequence has the following format, where "),bl=o("code"),wg=r("X"),zg=r(" represents the sequence:"),Bg=d(),Aa=o("ul"),Ia=o("li"),vl=o("code"),Fg=r("input_ids"),$g=r(" (for encoder) "),yl=o("code"),qg=r("[src_lang_code] X [eos]"),jg=d(),Na=o("li"),Tl=o("code"),Eg=r("labels"),Pg=r(": (for decoder) "),Ml=o("code"),Cg=r("[tgt_lang_code] X [eos]"),Sg=d(),xl=o("p"),Ag=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ig=d(),Vn=o("div"),m(Oa.$$.fragment),Ng=d(),wl=o("p"),Og=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Dg=d(),Jn=o("div"),m(Da.$$.fragment),Lg=d(),zl=o("p"),Gg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Op=d(),pn=o("h2"),Kn=o("a"),Bl=o("span"),m(La.$$.fragment),Rg=d(),Fl=o("span"),Wg=r("MBartModel"),Dp=d(),Ve=o("div"),m(Ga.$$.fragment),Ug=d(),Ra=o("p"),Xg=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=o("a"),Hg=r("PreTrainedModel"),Qg=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Vg=d(),Wa=o("p"),Jg=r("This model is also a PyTorch "),Ua=o("a"),Kg=r("torch.nn.Module"),Zg=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Yg=d(),Se=o("div"),m(Xa.$$.fragment),ek=d(),hn=o("p"),tk=r("The "),fi=o("a"),nk=r("MBartModel"),ok=r(" forward method, overrides the "),$l=o("code"),ak=r("__call__"),sk=r(" special method."),rk=d(),m(Zn.$$.fragment),ik=d(),ql=o("p"),dk=r("Example:"),lk=d(),m(Ha.$$.fragment),Lp=d(),un=o("h2"),Yn=o("a"),jl=o("span"),m(Qa.$$.fragment),ck=d(),El=o("span"),pk=r("MBartForConditionalGeneration"),Gp=d(),Je=o("div"),m(Va.$$.fragment),hk=d(),Ja=o("p"),uk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_i=o("a"),mk=r("PreTrainedModel"),fk=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_k=d(),Ka=o("p"),gk=r("This model is also a PyTorch "),Za=o("a"),kk=r("torch.nn.Module"),bk=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),vk=d(),K=o("div"),m(Ya.$$.fragment),yk=d(),mn=o("p"),Tk=r("The "),gi=o("a"),Mk=r("MBartForConditionalGeneration"),xk=r(" forward method, overrides the "),Pl=o("code"),wk=r("__call__"),zk=r(" special method."),Bk=d(),m(eo.$$.fragment),Fk=d(),Cl=o("p"),$k=r("Summarization example:"),qk=d(),m(es.$$.fragment),jk=d(),Sl=o("p"),Ek=r("Mask filling example:"),Pk=d(),m(ts.$$.fragment),Rp=d(),fn=o("h2"),to=o("a"),Al=o("span"),m(ns.$$.fragment),Ck=d(),Il=o("span"),Sk=r("MBartForQuestionAnswering"),Wp=d(),Be=o("div"),m(os.$$.fragment),Ak=d(),_n=o("p"),Ik=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Nl=o("em"),Nk=r("span start logits"),Ok=r(" and "),Ol=o("em"),Dk=r("span end logits"),Lk=r(")."),Gk=d(),as=o("p"),Rk=r("This model inherits from "),ki=o("a"),Wk=r("PreTrainedModel"),Uk=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Xk=d(),ss=o("p"),Hk=r("This model is also a PyTorch "),rs=o("a"),Qk=r("torch.nn.Module"),Vk=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Jk=d(),Ae=o("div"),m(is.$$.fragment),Kk=d(),gn=o("p"),Zk=r("The "),bi=o("a"),Yk=r("MBartForQuestionAnswering"),eb=r(" forward method, overrides the "),Dl=o("code"),tb=r("__call__"),nb=r(" special method."),ob=d(),m(no.$$.fragment),ab=d(),Ll=o("p"),sb=r("Example:"),rb=d(),m(ds.$$.fragment),Up=d(),kn=o("h2"),oo=o("a"),Gl=o("span"),m(ls.$$.fragment),ib=d(),Rl=o("span"),db=r("MBartForSequenceClassification"),Xp=d(),Fe=o("div"),m(cs.$$.fragment),lb=d(),Wl=o("p"),cb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),pb=d(),ps=o("p"),hb=r("This model inherits from "),vi=o("a"),ub=r("PreTrainedModel"),mb=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),fb=d(),hs=o("p"),_b=r("This model is also a PyTorch "),us=o("a"),gb=r("torch.nn.Module"),kb=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),bb=d(),Z=o("div"),m(ms.$$.fragment),vb=d(),bn=o("p"),yb=r("The "),yi=o("a"),Tb=r("MBartForSequenceClassification"),Mb=r(" forward method, overrides the "),Ul=o("code"),xb=r("__call__"),wb=r(" special method."),zb=d(),m(ao.$$.fragment),Bb=d(),Xl=o("p"),Fb=r("Example of single-label classification:"),$b=d(),m(fs.$$.fragment),qb=d(),Hl=o("p"),jb=r("Example of multi-label classification:"),Eb=d(),m(_s.$$.fragment),Hp=d(),vn=o("h2"),so=o("a"),Ql=o("span"),m(gs.$$.fragment),Pb=d(),Vl=o("span"),Cb=r("MBartForCausalLM"),Qp=d(),ks=o("div"),Tt=o("div"),m(bs.$$.fragment),Sb=d(),Jl=o("p"),Ab=r("Example:"),Ib=d(),m(vs.$$.fragment),Vp=d(),yn=o("h2"),ro=o("a"),Kl=o("span"),m(ys.$$.fragment),Nb=d(),Zl=o("span"),Ob=r("TFMBartModel"),Jp=d(),$e=o("div"),m(Ts.$$.fragment),Db=d(),Ms=o("p"),Lb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ti=o("a"),Gb=r("TFPreTrainedModel"),Rb=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wb=d(),xs=o("p"),Ub=r("This model is also a "),ws=o("a"),Xb=r("tf.keras.Model"),Hb=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Qb=d(),m(io.$$.fragment),Vb=d(),Ie=o("div"),m(zs.$$.fragment),Jb=d(),Tn=o("p"),Kb=r("The "),Mi=o("a"),Zb=r("TFMBartModel"),Yb=r(" forward method, overrides the "),Yl=o("code"),ev=r("__call__"),tv=r(" special method."),nv=d(),m(lo.$$.fragment),ov=d(),ec=o("p"),av=r("Example:"),sv=d(),m(Bs.$$.fragment),Kp=d(),Mn=o("h2"),co=o("a"),tc=o("span"),m(Fs.$$.fragment),rv=d(),nc=o("span"),iv=r("TFMBartForConditionalGeneration"),Zp=d(),qe=o("div"),m($s.$$.fragment),dv=d(),qs=o("p"),lv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=o("a"),cv=r("TFPreTrainedModel"),pv=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hv=d(),js=o("p"),uv=r("This model is also a "),Es=o("a"),mv=r("tf.keras.Model"),fv=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),_v=d(),m(po.$$.fragment),gv=d(),Y=o("div"),m(Ps.$$.fragment),kv=d(),xn=o("p"),bv=r("The "),wi=o("a"),vv=r("TFMBartForConditionalGeneration"),yv=r(" forward method, overrides the "),oc=o("code"),Tv=r("__call__"),Mv=r(" special method."),xv=d(),m(ho.$$.fragment),wv=d(),ac=o("p"),zv=r("Summarization example:"),Bv=d(),m(Cs.$$.fragment),Fv=d(),sc=o("p"),$v=r("Mask filling example:"),qv=d(),m(Ss.$$.fragment),Yp=d(),wn=o("h2"),uo=o("a"),rc=o("span"),m(As.$$.fragment),jv=d(),ic=o("span"),Ev=r("FlaxMBartModel"),eh=d(),R=o("div"),m(Is.$$.fragment),Pv=d(),Ns=o("p"),Cv=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zi=o("a"),Sv=r("FlaxPreTrainedModel"),Av=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Iv=d(),Os=o("p"),Nv=r("This model is also a Flax Linen "),Ds=o("a"),Ov=r("flax.nn.Module"),Dv=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lv=d(),dc=o("p"),Gv=r("Finally, this model supports inherent JAX features such as:"),Rv=d(),ut=o("ul"),lc=o("li"),Ls=o("a"),Wv=r("Just-In-Time (JIT) compilation"),Uv=d(),cc=o("li"),Gs=o("a"),Xv=r("Automatic Differentiation"),Hv=d(),pc=o("li"),Rs=o("a"),Qv=r("Vectorization"),Vv=d(),hc=o("li"),Ws=o("a"),Jv=r("Parallelization"),Kv=d(),Ne=o("div"),m(Us.$$.fragment),Zv=d(),zn=o("p"),Yv=r("The "),uc=o("code"),ey=r("FlaxMBartPreTrainedModel"),ty=r(" forward method, overrides the "),mc=o("code"),ny=r("__call__"),oy=r(" special method."),ay=d(),m(mo.$$.fragment),sy=d(),fc=o("p"),ry=r("Example:"),iy=d(),m(Xs.$$.fragment),dy=d(),Mt=o("div"),m(Hs.$$.fragment),ly=d(),_c=o("p"),cy=r("Example:"),py=d(),m(Qs.$$.fragment),hy=d(),xt=o("div"),m(Vs.$$.fragment),uy=d(),gc=o("p"),my=r("Example:"),fy=d(),m(Js.$$.fragment),th=d(),Bn=o("h2"),fo=o("a"),kc=o("span"),m(Ks.$$.fragment),_y=d(),bc=o("span"),gy=r("FlaxMBartForConditionalGeneration"),nh=d(),W=o("div"),m(Zs.$$.fragment),ky=d(),Ys=o("p"),by=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=o("a"),vy=r("FlaxPreTrainedModel"),yy=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ty=d(),er=o("p"),My=r("This model is also a Flax Linen "),tr=o("a"),xy=r("flax.nn.Module"),wy=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zy=d(),vc=o("p"),By=r("Finally, this model supports inherent JAX features such as:"),Fy=d(),mt=o("ul"),yc=o("li"),nr=o("a"),$y=r("Just-In-Time (JIT) compilation"),qy=d(),Tc=o("li"),or=o("a"),jy=r("Automatic Differentiation"),Ey=d(),Mc=o("li"),ar=o("a"),Py=r("Vectorization"),Cy=d(),xc=o("li"),sr=o("a"),Sy=r("Parallelization"),Ay=d(),ee=o("div"),m(rr.$$.fragment),Iy=d(),Fn=o("p"),Ny=r("The "),wc=o("code"),Oy=r("FlaxMBartPreTrainedModel"),Dy=r(" forward method, overrides the "),zc=o("code"),Ly=r("__call__"),Gy=r(" special method."),Ry=d(),m(_o.$$.fragment),Wy=d(),Bc=o("p"),Uy=r("Summarization example:"),Xy=d(),m(ir.$$.fragment),Hy=d(),Fc=o("p"),Qy=r("Mask filling example:"),Vy=d(),m(dr.$$.fragment),Jy=d(),wt=o("div"),m(lr.$$.fragment),Ky=d(),$c=o("p"),Zy=r("Example:"),Yy=d(),m(cr.$$.fragment),e1=d(),zt=o("div"),m(pr.$$.fragment),t1=d(),qc=o("p"),n1=r("Example:"),o1=d(),m(hr.$$.fragment),oh=d(),$n=o("h2"),go=o("a"),jc=o("span"),m(ur.$$.fragment),a1=d(),Ec=o("span"),s1=r("FlaxMBartForSequenceClassification"),ah=d(),I=o("div"),m(mr.$$.fragment),r1=d(),Pc=o("p"),i1=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),d1=d(),fr=o("p"),l1=r("This model inherits from "),Fi=o("a"),c1=r("FlaxPreTrainedModel"),p1=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),h1=d(),_r=o("p"),u1=r("This model is also a Flax Linen "),gr=o("a"),m1=r("flax.nn.Module"),f1=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_1=d(),Cc=o("p"),g1=r("Finally, this model supports inherent JAX features such as:"),k1=d(),ft=o("ul"),Sc=o("li"),kr=o("a"),b1=r("Just-In-Time (JIT) compilation"),v1=d(),Ac=o("li"),br=o("a"),y1=r("Automatic Differentiation"),T1=d(),Ic=o("li"),vr=o("a"),M1=r("Vectorization"),x1=d(),Nc=o("li"),yr=o("a"),w1=r("Parallelization"),z1=d(),Oe=o("div"),m(Tr.$$.fragment),B1=d(),qn=o("p"),F1=r("The "),Oc=o("code"),$1=r("FlaxMBartPreTrainedModel"),q1=r(" forward method, overrides the "),Dc=o("code"),j1=r("__call__"),E1=r(" special method."),P1=d(),m(ko.$$.fragment),C1=d(),Lc=o("p"),S1=r("Example:"),A1=d(),m(Mr.$$.fragment),I1=d(),Bt=o("div"),m(xr.$$.fragment),N1=d(),Gc=o("p"),O1=r("Example:"),D1=d(),m(wr.$$.fragment),L1=d(),Ft=o("div"),m(zr.$$.fragment),G1=d(),Rc=o("p"),R1=r("Example:"),W1=d(),m(Br.$$.fragment),sh=d(),jn=o("h2"),bo=o("a"),Wc=o("span"),m(Fr.$$.fragment),U1=d(),Uc=o("span"),X1=r("FlaxMBartForQuestionAnswering"),rh=d(),N=o("div"),m($r.$$.fragment),H1=d(),En=o("p"),Q1=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xc=o("em"),V1=r("span start logits"),J1=r(" and "),Hc=o("em"),K1=r("span end logits"),Z1=r(")."),Y1=d(),qr=o("p"),eT=r("This model inherits from "),$i=o("a"),tT=r("FlaxPreTrainedModel"),nT=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),oT=d(),jr=o("p"),aT=r("This model is also a Flax Linen "),Er=o("a"),sT=r("flax.nn.Module"),rT=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),iT=d(),Qc=o("p"),dT=r("Finally, this model supports inherent JAX features such as:"),lT=d(),_t=o("ul"),Vc=o("li"),Pr=o("a"),cT=r("Just-In-Time (JIT) compilation"),pT=d(),Jc=o("li"),Cr=o("a"),hT=r("Automatic Differentiation"),uT=d(),Kc=o("li"),Sr=o("a"),mT=r("Vectorization"),fT=d(),Zc=o("li"),Ar=o("a"),_T=r("Parallelization"),gT=d(),De=o("div"),m(Ir.$$.fragment),kT=d(),Pn=o("p"),bT=r("The "),Yc=o("code"),vT=r("FlaxMBartPreTrainedModel"),yT=r(" forward method, overrides the "),ep=o("code"),TT=r("__call__"),MT=r(" special method."),xT=d(),m(vo.$$.fragment),wT=d(),tp=o("p"),zT=r("Example:"),BT=d(),m(Nr.$$.fragment),FT=d(),$t=o("div"),m(Or.$$.fragment),$T=d(),np=o("p"),qT=r("Example:"),jT=d(),m(Dr.$$.fragment),ET=d(),qt=o("div"),m(Lr.$$.fragment),PT=d(),op=o("p"),CT=r("Example:"),ST=d(),m(Gr.$$.fragment),this.h()},l(n){const p=F4('[data-svelte="svelte-1phssyn"]',document.head);u=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(n),v=a(n,"H1",{class:!0});var Rr=s(v);M=a(Rr,"A",{id:!0,class:!0,href:!0});var ap=s(M);w=a(ap,"SPAN",{});var sp=s(w);f(T.$$.fragment,sp),sp.forEach(t),ap.forEach(t),y=l(Rr),B=a(Rr,"SPAN",{});var rp=s(B);st=i(rp,"MBart and MBart-50"),rp.forEach(t),Rr.forEach(t),je=l(n),j=a(n,"P",{});var yo=s(j);Ue=a(yo,"STRONG",{});var ip=s(Ue);_e=i(ip,"DISCLAIMER:"),ip.forEach(t),rt=i(yo," If you see something strange, file a "),ge=a(yo,"A",{href:!0,rel:!0});var dp=s(ge);ke=i(dp,"Github Issue"),dp.forEach(t),it=i(yo,` and assign
@patrickvonplaten`),yo.forEach(t),Ke=l(n),Q=a(n,"H2",{class:!0});var Wr=s(Q);O=a(Wr,"A",{id:!0,class:!0,href:!0});var lp=s(O);Xe=a(lp,"SPAN",{});var cp=s(Xe);f(ae.$$.fragment,cp),cp.forEach(t),lp.forEach(t),P=l(Wr),S=a(Wr,"SPAN",{});var pp=s(S);dt=i(pp,"Overview of MBart"),pp.forEach(t),Wr.forEach(t),ce=l(n),pe=a(n,"P",{});var Ur=s(pe);lt=i(Ur,"The MBart model was presented in "),V=a(Ur,"A",{href:!0,rel:!0});var NT=s(V);ct=i(NT,"Multilingual Denoising Pre-training for Neural Machine Translation"),NT.forEach(t),pt=i(Ur,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Ur.forEach(t),D=l(n),Ee=a(n,"P",{});var OT=s(Ee);be=i(OT,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),OT.forEach(t),Ze=l(n),se=a(n,"P",{});var hp=s(se);ve=i(hp,"This model was contributed by "),ye=a(hp,"A",{href:!0,rel:!0});var DT=s(ye);ht=i(DT,"valhalla"),DT.forEach(t),re=i(hp,". The Authors\u2019 code can be found "),Te=a(hp,"A",{href:!0,rel:!0});var LT=s(Te);Me=i(LT,"here"),LT.forEach(t),hp.forEach(t),Ye=l(n),x=a(n,"H3",{class:!0});var dh=s(x);$=a(dh,"A",{id:!0,class:!0,href:!0});var GT=s($);xe=a(GT,"SPAN",{});var RT=s(xe);f(He.$$.fragment,RT),RT.forEach(t),GT.forEach(t),Ut=l(dh),J=a(dh,"SPAN",{});var WT=s(J);Xt=i(WT,"Training of MBart"),WT.forEach(t),dh.forEach(t),gt=l(n),X=a(n,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var UT=s(de);Ht=i(UT,"X [eos, src_lang_code]"),UT.forEach(t),Qt=i(jt," where "),le=a(jt,"CODE",{});var XT=s(le);Vt=i(XT,"X"),XT.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Qe=a(jt,"CODE",{});var HT=s(Qe);Kt=i(HT,"[tgt_lang_code] X [eos]"),HT.forEach(t),Bu=i(jt,". "),ad=a(jt,"CODE",{});var QT=s(ad);Fu=i(QT,"bos"),QT.forEach(t),$u=i(jt," is never used."),jt.forEach(t),up=l(n),kt=a(n,"P",{});var qi=s(kt);qu=i(qi,"The regular "),jo=a(qi,"A",{href:!0});var AT=s(jo);sd=a(AT,"STRONG",{});var VT=s(sd);ju=i(VT,"call"),VT.forEach(t),Eu=i(AT,"()"),AT.forEach(t),Pu=i(qi,` will encode source text format, and it should be wrapped
inside the context manager `),Qr=a(qi,"A",{href:!0});var JT=s(Qr);Cu=i(JT,"as_target_tokenizer()"),JT.forEach(t),Su=i(qi," to encode target text format."),qi.forEach(t),mp=l(n),Vr=a(n,"UL",{});var KT=s(Vr);rd=a(KT,"LI",{});var ZT=s(rd);Au=i(ZT,"Supervised training"),ZT.forEach(t),KT.forEach(t),fp=l(n),f(Eo.$$.fragment,n),_p=l(n),Jr=a(n,"UL",{});var YT=s(Jr);Po=a(YT,"LI",{});var lh=s(Po);id=a(lh,"P",{});var eM=s(id);Iu=i(eM,"Generation"),eM.forEach(t),Nu=l(lh),Zt=a(lh,"P",{});var ji=s(Zt);Ou=i(ji,"While generating the target text set the "),dd=a(ji,"CODE",{});var tM=s(dd);Du=i(tM,"decoder_start_token_id"),tM.forEach(t),Lu=i(ji,` to the target language id. The following
example shows how to translate English to Romanian using the `),ld=a(ji,"EM",{});var nM=s(ld);Gu=i(nM,"facebook/mbart-large-en-ro"),nM.forEach(t),Ru=i(ji," model."),ji.forEach(t),lh.forEach(t),YT.forEach(t),gp=l(n),f(Co.$$.fragment,n),kp=l(n),Yt=a(n,"H2",{class:!0});var ch=s(Yt);Cn=a(ch,"A",{id:!0,class:!0,href:!0});var oM=s(Cn);cd=a(oM,"SPAN",{});var aM=s(cd);f(So.$$.fragment,aM),aM.forEach(t),oM.forEach(t),Wu=l(ch),pd=a(ch,"SPAN",{});var sM=s(pd);Uu=i(sM,"Overview of MBart-50"),sM.forEach(t),ch.forEach(t),bp=l(n),bt=a(n,"P",{});var Ei=s(bt);Xu=i(Ei,"MBart-50 was introduced in the "),Kr=a(Ei,"EM",{});var IT=s(Kr);Hu=i(IT,`Multilingual Translation with Extensible Multilingual Pretraining and Finetuning
<`),Ao=a(IT,"A",{href:!0,rel:!0});var rM=s(Ao);Qu=i(rM,"https://arxiv.org/abs/2008.00401>"),rM.forEach(t),IT.forEach(t),Vu=i(Ei,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=a(Ei,"EM",{});var iM=s(hd);Ju=i(iM,"mbart-large-cc25"),iM.forEach(t),Ku=i(Ei,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ei.forEach(t),vp=l(n),Zr=a(n,"P",{});var dM=s(Zr);Zu=i(dM,"According to the abstract"),dM.forEach(t),yp=l(n),Yr=a(n,"P",{});var lM=s(Yr);ud=a(lM,"EM",{});var cM=s(ud);Yu=i(cM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),cM.forEach(t),lM.forEach(t),Tp=l(n),en=a(n,"H3",{class:!0});var ph=s(en);Sn=a(ph,"A",{id:!0,class:!0,href:!0});var pM=s(Sn);md=a(pM,"SPAN",{});var hM=s(md);f(Io.$$.fragment,hM),hM.forEach(t),pM.forEach(t),em=l(ph),fd=a(ph,"SPAN",{});var uM=s(fd);tm=i(uM,"Training of MBart-50"),uM.forEach(t),ph.forEach(t),Mp=l(n),et=a(n,"P",{});var To=s(et);nm=i(To,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),_d=a(To,"CODE",{});var mM=s(_d);om=i(mM,"[lang_code] X [eos]"),mM.forEach(t),am=i(To,", where "),gd=a(To,"CODE",{});var fM=s(gd);sm=i(fM,"lang_code"),fM.forEach(t),rm=i(To,` is source
language id for source text and target language id for target text, with `),kd=a(To,"CODE",{});var _M=s(kd);im=i(_M,"X"),_M.forEach(t),dm=i(To,` being the source or target text
respectively.`),To.forEach(t),xp=l(n),An=a(n,"P",{});var hh=s(An);lm=i(hh,"MBart-50 has its own tokenizer "),ei=a(hh,"A",{href:!0});var gM=s(ei);cm=i(gM,"MBart50Tokenizer"),gM.forEach(t),pm=i(hh,"."),hh.forEach(t),wp=l(n),ti=a(n,"UL",{});var kM=s(ti);bd=a(kM,"LI",{});var bM=s(bd);hm=i(bM,"Supervised training"),bM.forEach(t),kM.forEach(t),zp=l(n),f(No.$$.fragment,n),Bp=l(n),ni=a(n,"UL",{});var vM=s(ni);Oo=a(vM,"LI",{});var uh=s(Oo);vd=a(uh,"P",{});var yM=s(vd);um=i(yM,"Generation"),yM.forEach(t),mm=l(uh),we=a(uh,"P",{});var ot=s(we);fm=i(ot,"To generate using the mBART-50 multilingual translation models, "),yd=a(ot,"CODE",{});var TM=s(yd);_m=i(TM,"eos_token_id"),TM.forEach(t),gm=i(ot,` is used as the
`),Td=a(ot,"CODE",{});var MM=s(Td);km=i(MM,"decoder_start_token_id"),MM.forEach(t),bm=i(ot,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Md=a(ot,"EM",{});var xM=s(Md);vm=i(xM,"forced_bos_token_id"),xM.forEach(t),ym=i(ot," parameter to the "),xd=a(ot,"EM",{});var wM=s(xd);Tm=i(wM,"generate"),wM.forEach(t),Mm=i(ot,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),wd=a(ot,"EM",{});var zM=s(wd);xm=i(zM,"facebook/mbart-50-large-many-to-many"),zM.forEach(t),wm=i(ot," checkpoint."),ot.forEach(t),uh.forEach(t),vM.forEach(t),Fp=l(n),f(Do.$$.fragment,n),$p=l(n),tn=a(n,"H2",{class:!0});var mh=s(tn);In=a(mh,"A",{id:!0,class:!0,href:!0});var BM=s(In);zd=a(BM,"SPAN",{});var FM=s(zd);f(Lo.$$.fragment,FM),FM.forEach(t),BM.forEach(t),zm=l(mh),Bd=a(mh,"SPAN",{});var $M=s(Bd);Bm=i($M,"MBartConfig"),$M.forEach(t),mh.forEach(t),qp=l(n),ze=a(n,"DIV",{class:!0});var Et=s(ze);f(Go.$$.fragment,Et),Fm=l(Et),nn=a(Et,"P",{});var Pi=s(nn);$m=i(Pi,"This is the configuration class to store the configuration of a "),oi=a(Pi,"A",{href:!0});var qM=s(oi);qm=i(qM,"MBartModel"),qM.forEach(t),jm=i(Pi,`. It is used to
instantiate an MBART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MBART `),Ro=a(Pi,"A",{href:!0,rel:!0});var jM=s(Ro);Em=i(jM,"facebook/mbart-large-cc25"),jM.forEach(t),Pm=i(Pi," architecture."),Pi.forEach(t),Cm=l(Et),on=a(Et,"P",{});var Ci=s(on);Sm=i(Ci,"Configuration objects inherit from "),ai=a(Ci,"A",{href:!0});var EM=s(ai);Am=i(EM,"PretrainedConfig"),EM.forEach(t),Im=i(Ci,` and can be used to control the model
outputs. Read the documentation from `),si=a(Ci,"A",{href:!0});var PM=s(si);Nm=i(PM,"PretrainedConfig"),PM.forEach(t),Om=i(Ci," for more information."),Ci.forEach(t),Dm=l(Et),Fd=a(Et,"P",{});var CM=s(Fd);Lm=i(CM,"Example:"),CM.forEach(t),Gm=l(Et),f(Wo.$$.fragment,Et),Et.forEach(t),jp=l(n),an=a(n,"H2",{class:!0});var fh=s(an);Nn=a(fh,"A",{id:!0,class:!0,href:!0});var SM=s(Nn);$d=a(SM,"SPAN",{});var AM=s($d);f(Uo.$$.fragment,AM),AM.forEach(t),SM.forEach(t),Rm=l(fh),qd=a(fh,"SPAN",{});var IM=s(qd);Wm=i(IM,"MBartTokenizer"),IM.forEach(t),fh.forEach(t),Ep=l(n),L=a(n,"DIV",{class:!0});var he=s(L);f(Xo.$$.fragment,he),Um=l(he),jd=a(he,"P",{});var NM=s(jd);Xm=i(NM,"Construct an MBART tokenizer."),NM.forEach(t),Hm=l(he),vt=a(he,"P",{});var Xr=s(vt);ri=a(Xr,"A",{href:!0});var OM=s(ri);Qm=i(OM,"MBartTokenizer"),OM.forEach(t),Vm=i(Xr," is a subclass of "),ii=a(Xr,"A",{href:!0});var DM=s(ii);Jm=i(DM,"XLMRobertaTokenizer"),DM.forEach(t),Km=i(Xr,`. Refer to
superclass `),di=a(Xr,"A",{href:!0});var LM=s(di);Zm=i(LM,"XLMRobertaTokenizer"),LM.forEach(t),Ym=i(Xr,` for usage examples and documentation concerning the
initialization parameters and other methods.`),Xr.forEach(t),ef=l(he),Ho=a(he,"P",{});var _h=s(Ho);tf=i(_h,"The tokenization method is "),Ed=a(_h,"CODE",{});var GM=s(Ed);nf=i(GM,"<tokens> <eos> <language code>"),GM.forEach(t),of=i(_h," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),_h.forEach(t),af=l(he),Pd=a(he,"P",{});var RM=s(Pd);sf=i(RM,"Examples:"),RM.forEach(t),rf=l(he),f(Qo.$$.fragment,he),df=l(he),On=a(he,"DIV",{class:!0});var gh=s(On);f(Vo.$$.fragment,gh),lf=l(gh),Cd=a(gh,"P",{});var WM=s(Cd);cf=i(WM,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),WM.forEach(t),gh.forEach(t),pf=l(he),tt=a(he,"DIV",{class:!0});var Mo=s(tt);f(Jo.$$.fragment,Mo),hf=l(Mo),Ko=a(Mo,"P",{});var kh=s(Ko);uf=i(kh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Sd=a(kh,"CODE",{});var UM=s(Sd);mf=i(UM,"X"),UM.forEach(t),ff=i(kh," represents the sequence:"),kh.forEach(t),_f=l(Mo),Zo=a(Mo,"UL",{});var bh=s(Zo);Yo=a(bh,"LI",{});var vh=s(Yo);Ad=a(vh,"CODE",{});var XM=s(Ad);gf=i(XM,"input_ids"),XM.forEach(t),kf=i(vh," (for encoder) "),Id=a(vh,"CODE",{});var HM=s(Id);bf=i(HM,"X [eos, src_lang_code]"),HM.forEach(t),vh.forEach(t),vf=l(bh),ea=a(bh,"LI",{});var yh=s(ea);Nd=a(yh,"CODE",{});var QM=s(Nd);yf=i(QM,"decoder_input_ids"),QM.forEach(t),Tf=i(yh,": (for decoder) "),Od=a(yh,"CODE",{});var VM=s(Od);Mf=i(VM,"X [eos, tgt_lang_code]"),VM.forEach(t),yh.forEach(t),bh.forEach(t),xf=l(Mo),Dd=a(Mo,"P",{});var JM=s(Dd);wf=i(JM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),JM.forEach(t),Mo.forEach(t),he.forEach(t),Pp=l(n),sn=a(n,"H2",{class:!0});var Th=s(sn);Dn=a(Th,"A",{id:!0,class:!0,href:!0});var KM=s(Dn);Ld=a(KM,"SPAN",{});var ZM=s(Ld);f(ta.$$.fragment,ZM),ZM.forEach(t),KM.forEach(t),zf=l(Th),Gd=a(Th,"SPAN",{});var YM=s(Gd);Bf=i(YM,"MBartTokenizerFast"),YM.forEach(t),Th.forEach(t),Cp=l(n),A=a(n,"DIV",{class:!0});var te=s(A);f(na.$$.fragment,te),Ff=l(te),rn=a(te,"P",{});var Si=s(rn);$f=i(Si,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=a(Si,"EM",{});var ex=s(Rd);qf=i(ex,"tokenizers"),ex.forEach(t),jf=i(Si," library). Based on "),oa=a(Si,"A",{href:!0,rel:!0});var tx=s(oa);Ef=i(tx,"BPE"),tx.forEach(t),Pf=i(Si,"."),Si.forEach(t),Cf=l(te),yt=a(te,"P",{});var Hr=s(yt);li=a(Hr,"A",{href:!0});var nx=s(li);Sf=i(nx,"MBartTokenizerFast"),nx.forEach(t),Af=i(Hr," is a subclass of "),ci=a(Hr,"A",{href:!0});var ox=s(ci);If=i(ox,"XLMRobertaTokenizerFast"),ox.forEach(t),Nf=i(Hr,`. Refer to
superclass `),pi=a(Hr,"A",{href:!0});var ax=s(pi);Of=i(ax,"XLMRobertaTokenizerFast"),ax.forEach(t),Df=i(Hr,` for usage examples and documentation concerning the
initialization parameters and other methods.`),Hr.forEach(t),Lf=l(te),aa=a(te,"P",{});var Mh=s(aa);Gf=i(Mh,"The tokenization method is "),Wd=a(Mh,"CODE",{});var sx=s(Wd);Rf=i(sx,"<tokens> <eos> <language code>"),sx.forEach(t),Wf=i(Mh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Mh.forEach(t),Uf=l(te),Ud=a(te,"P",{});var rx=s(Ud);Xf=i(rx,"Examples:"),rx.forEach(t),Hf=l(te),f(sa.$$.fragment,te),Qf=l(te),Pe=a(te,"DIV",{class:!0});var Pt=s(Pe);f(ra.$$.fragment,Pt),Vf=l(Pt),Xd=a(Pt,"P",{});var ix=s(Xd);Jf=i(ix,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),ix.forEach(t),Kf=l(Pt),ia=a(Pt,"P",{});var xh=s(ia);Zf=i(xh,"An MBART sequence has the following format, where "),Hd=a(xh,"CODE",{});var dx=s(Hd);Yf=i(dx,"X"),dx.forEach(t),e_=i(xh," represents the sequence:"),xh.forEach(t),t_=l(Pt),da=a(Pt,"UL",{});var wh=s(da);la=a(wh,"LI",{});var zh=s(la);Qd=a(zh,"CODE",{});var lx=s(Qd);n_=i(lx,"input_ids"),lx.forEach(t),o_=i(zh," (for encoder) "),Vd=a(zh,"CODE",{});var cx=s(Vd);a_=i(cx,"X [eos, src_lang_code]"),cx.forEach(t),zh.forEach(t),s_=l(wh),ca=a(wh,"LI",{});var Bh=s(ca);Jd=a(Bh,"CODE",{});var px=s(Jd);r_=i(px,"decoder_input_ids"),px.forEach(t),i_=i(Bh,": (for decoder) "),Kd=a(Bh,"CODE",{});var hx=s(Kd);d_=i(hx,"X [eos, tgt_lang_code]"),hx.forEach(t),Bh.forEach(t),wh.forEach(t),l_=l(Pt),Zd=a(Pt,"P",{});var ux=s(Zd);c_=i(ux,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ux.forEach(t),Pt.forEach(t),p_=l(te),Ln=a(te,"DIV",{class:!0});var Fh=s(Ln);f(pa.$$.fragment,Fh),h_=l(Fh),Yd=a(Fh,"P",{});var mx=s(Yd);u_=i(mx,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),mx.forEach(t),Fh.forEach(t),m_=l(te),Gn=a(te,"DIV",{class:!0});var $h=s(Gn);f(ha.$$.fragment,$h),f_=l($h),el=a($h,"P",{});var fx=s(el);__=i(fx,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),fx.forEach(t),$h.forEach(t),te.forEach(t),Sp=l(n),dn=a(n,"H2",{class:!0});var qh=s(dn);Rn=a(qh,"A",{id:!0,class:!0,href:!0});var _x=s(Rn);tl=a(_x,"SPAN",{});var gx=s(tl);f(ua.$$.fragment,gx),gx.forEach(t),_x.forEach(t),g_=l(qh),nl=a(qh,"SPAN",{});var kx=s(nl);k_=i(kx,"MBart50Tokenizer"),kx.forEach(t),qh.forEach(t),Ap=l(n),C=a(n,"DIV",{class:!0});var H=s(C);f(ma.$$.fragment,H),b_=l(H),fa=a(H,"P",{});var jh=s(fa);v_=i(jh,"Construct a MBart50 tokenizer. Based on "),_a=a(jh,"A",{href:!0,rel:!0});var bx=s(_a);y_=i(bx,"SentencePiece"),bx.forEach(t),T_=i(jh,"."),jh.forEach(t),M_=l(H),ga=a(H,"P",{});var Eh=s(ga);x_=i(Eh,"This tokenizer inherits from "),hi=a(Eh,"A",{href:!0});var vx=s(hi);w_=i(vx,"PreTrainedTokenizer"),vx.forEach(t),z_=i(Eh,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Eh.forEach(t),B_=l(H),ol=a(H,"P",{});var yx=s(ol);F_=i(yx,"Examples:"),yx.forEach(t),$_=l(H),f(ka.$$.fragment,H),q_=l(H),nt=a(H,"DIV",{class:!0});var xo=s(nt);f(ba.$$.fragment,xo),j_=l(xo),va=a(xo,"P",{});var Ph=s(va);E_=i(Ph,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=a(Ph,"CODE",{});var Tx=s(al);P_=i(Tx,"X"),Tx.forEach(t),C_=i(Ph," represents the sequence:"),Ph.forEach(t),S_=l(xo),ya=a(xo,"UL",{});var Ch=s(ya);Ta=a(Ch,"LI",{});var Sh=s(Ta);sl=a(Sh,"CODE",{});var Mx=s(sl);A_=i(Mx,"input_ids"),Mx.forEach(t),I_=i(Sh," (for encoder) "),rl=a(Sh,"CODE",{});var xx=s(rl);N_=i(xx,"[src_lang_code] X [eos]"),xx.forEach(t),Sh.forEach(t),O_=l(Ch),Ma=a(Ch,"LI",{});var Ah=s(Ma);il=a(Ah,"CODE",{});var wx=s(il);D_=i(wx,"labels"),wx.forEach(t),L_=i(Ah,": (for decoder) "),dl=a(Ah,"CODE",{});var zx=s(dl);G_=i(zx,"[tgt_lang_code] X [eos]"),zx.forEach(t),Ah.forEach(t),Ch.forEach(t),R_=l(xo),ll=a(xo,"P",{});var Bx=s(ll);W_=i(Bx,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Bx.forEach(t),xo.forEach(t),U_=l(H),Wn=a(H,"DIV",{class:!0});var Ih=s(Wn);f(xa.$$.fragment,Ih),X_=l(Ih),cl=a(Ih,"P",{});var Fx=s(cl);H_=i(Fx,"Converts a sequence of tokens (strings for sub-words) in a single string."),Fx.forEach(t),Ih.forEach(t),Q_=l(H),Un=a(H,"DIV",{class:!0});var Nh=s(Un);f(wa.$$.fragment,Nh),V_=l(Nh),za=a(Nh,"P",{});var Oh=s(za);J_=i(Oh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=a(Oh,"CODE",{});var $x=s(pl);K_=i($x,"prepare_for_model"),$x.forEach(t),Z_=i(Oh," method."),Oh.forEach(t),Nh.forEach(t),Y_=l(H),Xn=a(H,"DIV",{class:!0});var Dh=s(Xn);f(Ba.$$.fragment,Dh),eg=l(Dh),hl=a(Dh,"P",{});var qx=s(hl);tg=i(qx,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),qx.forEach(t),Dh.forEach(t),ng=l(H),Hn=a(H,"DIV",{class:!0});var Lh=s(Hn);f(Fa.$$.fragment,Lh),og=l(Lh),ul=a(Lh,"P",{});var jx=s(ul);ag=i(jx,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),jx.forEach(t),Lh.forEach(t),H.forEach(t),Ip=l(n),ln=a(n,"H2",{class:!0});var Gh=s(ln);Qn=a(Gh,"A",{id:!0,class:!0,href:!0});var Ex=s(Qn);ml=a(Ex,"SPAN",{});var Px=s(ml);f($a.$$.fragment,Px),Px.forEach(t),Ex.forEach(t),sg=l(Gh),fl=a(Gh,"SPAN",{});var Cx=s(fl);rg=i(Cx,"MBart50TokenizerFast"),Cx.forEach(t),Gh.forEach(t),Np=l(n),G=a(n,"DIV",{class:!0});var ue=s(G);f(qa.$$.fragment,ue),ig=l(ue),cn=a(ue,"P",{});var Ai=s(cn);dg=i(Ai,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),_l=a(Ai,"EM",{});var Sx=s(_l);lg=i(Sx,"tokenizers"),Sx.forEach(t),cg=i(Ai," library). Based on "),ja=a(Ai,"A",{href:!0,rel:!0});var Ax=s(ja);pg=i(Ax,"BPE"),Ax.forEach(t),hg=i(Ai,"."),Ai.forEach(t),ug=l(ue),Ea=a(ue,"P",{});var Rh=s(Ea);mg=i(Rh,"This tokenizer inherits from "),ui=a(Rh,"A",{href:!0});var Ix=s(ui);fg=i(Ix,"PreTrainedTokenizerFast"),Ix.forEach(t),_g=i(Rh,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Rh.forEach(t),gg=l(ue),gl=a(ue,"P",{});var Nx=s(gl);kg=i(Nx,"Examples:"),Nx.forEach(t),bg=l(ue),f(Pa.$$.fragment,ue),vg=l(ue),Ce=a(ue,"DIV",{class:!0});var Ct=s(Ce);f(Ca.$$.fragment,Ct),yg=l(Ct),kl=a(Ct,"P",{});var Ox=s(kl);Tg=i(Ox,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Ox.forEach(t),Mg=l(Ct),Sa=a(Ct,"P",{});var Wh=s(Sa);xg=i(Wh,"An MBART-50 sequence has the following format, where "),bl=a(Wh,"CODE",{});var Dx=s(bl);wg=i(Dx,"X"),Dx.forEach(t),zg=i(Wh," represents the sequence:"),Wh.forEach(t),Bg=l(Ct),Aa=a(Ct,"UL",{});var Uh=s(Aa);Ia=a(Uh,"LI",{});var Xh=s(Ia);vl=a(Xh,"CODE",{});var Lx=s(vl);Fg=i(Lx,"input_ids"),Lx.forEach(t),$g=i(Xh," (for encoder) "),yl=a(Xh,"CODE",{});var Gx=s(yl);qg=i(Gx,"[src_lang_code] X [eos]"),Gx.forEach(t),Xh.forEach(t),jg=l(Uh),Na=a(Uh,"LI",{});var Hh=s(Na);Tl=a(Hh,"CODE",{});var Rx=s(Tl);Eg=i(Rx,"labels"),Rx.forEach(t),Pg=i(Hh,": (for decoder) "),Ml=a(Hh,"CODE",{});var Wx=s(Ml);Cg=i(Wx,"[tgt_lang_code] X [eos]"),Wx.forEach(t),Hh.forEach(t),Uh.forEach(t),Sg=l(Ct),xl=a(Ct,"P",{});var Ux=s(xl);Ag=i(Ux,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ux.forEach(t),Ct.forEach(t),Ig=l(ue),Vn=a(ue,"DIV",{class:!0});var Qh=s(Vn);f(Oa.$$.fragment,Qh),Ng=l(Qh),wl=a(Qh,"P",{});var Xx=s(wl);Og=i(Xx,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Xx.forEach(t),Qh.forEach(t),Dg=l(ue),Jn=a(ue,"DIV",{class:!0});var Vh=s(Jn);f(Da.$$.fragment,Vh),Lg=l(Vh),zl=a(Vh,"P",{});var Hx=s(zl);Gg=i(Hx,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Hx.forEach(t),Vh.forEach(t),ue.forEach(t),Op=l(n),pn=a(n,"H2",{class:!0});var Jh=s(pn);Kn=a(Jh,"A",{id:!0,class:!0,href:!0});var Qx=s(Kn);Bl=a(Qx,"SPAN",{});var Vx=s(Bl);f(La.$$.fragment,Vx),Vx.forEach(t),Qx.forEach(t),Rg=l(Jh),Fl=a(Jh,"SPAN",{});var Jx=s(Fl);Wg=i(Jx,"MBartModel"),Jx.forEach(t),Jh.forEach(t),Dp=l(n),Ve=a(n,"DIV",{class:!0});var wo=s(Ve);f(Ga.$$.fragment,wo),Ug=l(wo),Ra=a(wo,"P",{});var Kh=s(Ra);Xg=i(Kh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=a(Kh,"A",{href:!0});var Kx=s(mi);Hg=i(Kx,"PreTrainedModel"),Kx.forEach(t),Qg=i(Kh,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Kh.forEach(t),Vg=l(wo),Wa=a(wo,"P",{});var Zh=s(Wa);Jg=i(Zh,"This model is also a PyTorch "),Ua=a(Zh,"A",{href:!0,rel:!0});var Zx=s(Ua);Kg=i(Zx,"torch.nn.Module"),Zx.forEach(t),Zg=i(Zh,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),Yg=l(wo),Se=a(wo,"DIV",{class:!0});var St=s(Se);f(Xa.$$.fragment,St),ek=l(St),hn=a(St,"P",{});var Ii=s(hn);tk=i(Ii,"The "),fi=a(Ii,"A",{href:!0});var Yx=s(fi);nk=i(Yx,"MBartModel"),Yx.forEach(t),ok=i(Ii," forward method, overrides the "),$l=a(Ii,"CODE",{});var ew=s($l);ak=i(ew,"__call__"),ew.forEach(t),sk=i(Ii," special method."),Ii.forEach(t),rk=l(St),f(Zn.$$.fragment,St),ik=l(St),ql=a(St,"P",{});var tw=s(ql);dk=i(tw,"Example:"),tw.forEach(t),lk=l(St),f(Ha.$$.fragment,St),St.forEach(t),wo.forEach(t),Lp=l(n),un=a(n,"H2",{class:!0});var Yh=s(un);Yn=a(Yh,"A",{id:!0,class:!0,href:!0});var nw=s(Yn);jl=a(nw,"SPAN",{});var ow=s(jl);f(Qa.$$.fragment,ow),ow.forEach(t),nw.forEach(t),ck=l(Yh),El=a(Yh,"SPAN",{});var aw=s(El);pk=i(aw,"MBartForConditionalGeneration"),aw.forEach(t),Yh.forEach(t),Gp=l(n),Je=a(n,"DIV",{class:!0});var zo=s(Je);f(Va.$$.fragment,zo),hk=l(zo),Ja=a(zo,"P",{});var eu=s(Ja);uk=i(eu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_i=a(eu,"A",{href:!0});var sw=s(_i);mk=i(sw,"PreTrainedModel"),sw.forEach(t),fk=i(eu,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),eu.forEach(t),_k=l(zo),Ka=a(zo,"P",{});var tu=s(Ka);gk=i(tu,"This model is also a PyTorch "),Za=a(tu,"A",{href:!0,rel:!0});var rw=s(Za);kk=i(rw,"torch.nn.Module"),rw.forEach(t),bk=i(tu,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),tu.forEach(t),vk=l(zo),K=a(zo,"DIV",{class:!0});var Le=s(K);f(Ya.$$.fragment,Le),yk=l(Le),mn=a(Le,"P",{});var Ni=s(mn);Tk=i(Ni,"The "),gi=a(Ni,"A",{href:!0});var iw=s(gi);Mk=i(iw,"MBartForConditionalGeneration"),iw.forEach(t),xk=i(Ni," forward method, overrides the "),Pl=a(Ni,"CODE",{});var dw=s(Pl);wk=i(dw,"__call__"),dw.forEach(t),zk=i(Ni," special method."),Ni.forEach(t),Bk=l(Le),f(eo.$$.fragment,Le),Fk=l(Le),Cl=a(Le,"P",{});var lw=s(Cl);$k=i(lw,"Summarization example:"),lw.forEach(t),qk=l(Le),f(es.$$.fragment,Le),jk=l(Le),Sl=a(Le,"P",{});var cw=s(Sl);Ek=i(cw,"Mask filling example:"),cw.forEach(t),Pk=l(Le),f(ts.$$.fragment,Le),Le.forEach(t),zo.forEach(t),Rp=l(n),fn=a(n,"H2",{class:!0});var nu=s(fn);to=a(nu,"A",{id:!0,class:!0,href:!0});var pw=s(to);Al=a(pw,"SPAN",{});var hw=s(Al);f(ns.$$.fragment,hw),hw.forEach(t),pw.forEach(t),Ck=l(nu),Il=a(nu,"SPAN",{});var uw=s(Il);Sk=i(uw,"MBartForQuestionAnswering"),uw.forEach(t),nu.forEach(t),Wp=l(n),Be=a(n,"DIV",{class:!0});var At=s(Be);f(os.$$.fragment,At),Ak=l(At),_n=a(At,"P",{});var Oi=s(_n);Ik=i(Oi,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Nl=a(Oi,"EM",{});var mw=s(Nl);Nk=i(mw,"span start logits"),mw.forEach(t),Ok=i(Oi," and "),Ol=a(Oi,"EM",{});var fw=s(Ol);Dk=i(fw,"span end logits"),fw.forEach(t),Lk=i(Oi,")."),Oi.forEach(t),Gk=l(At),as=a(At,"P",{});var ou=s(as);Rk=i(ou,"This model inherits from "),ki=a(ou,"A",{href:!0});var _w=s(ki);Wk=i(_w,"PreTrainedModel"),_w.forEach(t),Uk=i(ou,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ou.forEach(t),Xk=l(At),ss=a(At,"P",{});var au=s(ss);Hk=i(au,"This model is also a PyTorch "),rs=a(au,"A",{href:!0,rel:!0});var gw=s(rs);Qk=i(gw,"torch.nn.Module"),gw.forEach(t),Vk=i(au,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),au.forEach(t),Jk=l(At),Ae=a(At,"DIV",{class:!0});var It=s(Ae);f(is.$$.fragment,It),Kk=l(It),gn=a(It,"P",{});var Di=s(gn);Zk=i(Di,"The "),bi=a(Di,"A",{href:!0});var kw=s(bi);Yk=i(kw,"MBartForQuestionAnswering"),kw.forEach(t),eb=i(Di," forward method, overrides the "),Dl=a(Di,"CODE",{});var bw=s(Dl);tb=i(bw,"__call__"),bw.forEach(t),nb=i(Di," special method."),Di.forEach(t),ob=l(It),f(no.$$.fragment,It),ab=l(It),Ll=a(It,"P",{});var vw=s(Ll);sb=i(vw,"Example:"),vw.forEach(t),rb=l(It),f(ds.$$.fragment,It),It.forEach(t),At.forEach(t),Up=l(n),kn=a(n,"H2",{class:!0});var su=s(kn);oo=a(su,"A",{id:!0,class:!0,href:!0});var yw=s(oo);Gl=a(yw,"SPAN",{});var Tw=s(Gl);f(ls.$$.fragment,Tw),Tw.forEach(t),yw.forEach(t),ib=l(su),Rl=a(su,"SPAN",{});var Mw=s(Rl);db=i(Mw,"MBartForSequenceClassification"),Mw.forEach(t),su.forEach(t),Xp=l(n),Fe=a(n,"DIV",{class:!0});var Nt=s(Fe);f(cs.$$.fragment,Nt),lb=l(Nt),Wl=a(Nt,"P",{});var xw=s(Wl);cb=i(xw,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),xw.forEach(t),pb=l(Nt),ps=a(Nt,"P",{});var ru=s(ps);hb=i(ru,"This model inherits from "),vi=a(ru,"A",{href:!0});var ww=s(vi);ub=i(ww,"PreTrainedModel"),ww.forEach(t),mb=i(ru,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ru.forEach(t),fb=l(Nt),hs=a(Nt,"P",{});var iu=s(hs);_b=i(iu,"This model is also a PyTorch "),us=a(iu,"A",{href:!0,rel:!0});var zw=s(us);gb=i(zw,"torch.nn.Module"),zw.forEach(t),kb=i(iu,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),iu.forEach(t),bb=l(Nt),Z=a(Nt,"DIV",{class:!0});var Ge=s(Z);f(ms.$$.fragment,Ge),vb=l(Ge),bn=a(Ge,"P",{});var Li=s(bn);yb=i(Li,"The "),yi=a(Li,"A",{href:!0});var Bw=s(yi);Tb=i(Bw,"MBartForSequenceClassification"),Bw.forEach(t),Mb=i(Li," forward method, overrides the "),Ul=a(Li,"CODE",{});var Fw=s(Ul);xb=i(Fw,"__call__"),Fw.forEach(t),wb=i(Li," special method."),Li.forEach(t),zb=l(Ge),f(ao.$$.fragment,Ge),Bb=l(Ge),Xl=a(Ge,"P",{});var $w=s(Xl);Fb=i($w,"Example of single-label classification:"),$w.forEach(t),$b=l(Ge),f(fs.$$.fragment,Ge),qb=l(Ge),Hl=a(Ge,"P",{});var qw=s(Hl);jb=i(qw,"Example of multi-label classification:"),qw.forEach(t),Eb=l(Ge),f(_s.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Hp=l(n),vn=a(n,"H2",{class:!0});var du=s(vn);so=a(du,"A",{id:!0,class:!0,href:!0});var jw=s(so);Ql=a(jw,"SPAN",{});var Ew=s(Ql);f(gs.$$.fragment,Ew),Ew.forEach(t),jw.forEach(t),Pb=l(du),Vl=a(du,"SPAN",{});var Pw=s(Vl);Cb=i(Pw,"MBartForCausalLM"),Pw.forEach(t),du.forEach(t),Qp=l(n),ks=a(n,"DIV",{class:!0});var Cw=s(ks);Tt=a(Cw,"DIV",{class:!0});var Gi=s(Tt);f(bs.$$.fragment,Gi),Sb=l(Gi),Jl=a(Gi,"P",{});var Sw=s(Jl);Ab=i(Sw,"Example:"),Sw.forEach(t),Ib=l(Gi),f(vs.$$.fragment,Gi),Gi.forEach(t),Cw.forEach(t),Vp=l(n),yn=a(n,"H2",{class:!0});var lu=s(yn);ro=a(lu,"A",{id:!0,class:!0,href:!0});var Aw=s(ro);Kl=a(Aw,"SPAN",{});var Iw=s(Kl);f(ys.$$.fragment,Iw),Iw.forEach(t),Aw.forEach(t),Nb=l(lu),Zl=a(lu,"SPAN",{});var Nw=s(Zl);Ob=i(Nw,"TFMBartModel"),Nw.forEach(t),lu.forEach(t),Jp=l(n),$e=a(n,"DIV",{class:!0});var Ot=s($e);f(Ts.$$.fragment,Ot),Db=l(Ot),Ms=a(Ot,"P",{});var cu=s(Ms);Lb=i(cu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ti=a(cu,"A",{href:!0});var Ow=s(Ti);Gb=i(Ow,"TFPreTrainedModel"),Ow.forEach(t),Rb=i(cu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),cu.forEach(t),Wb=l(Ot),xs=a(Ot,"P",{});var pu=s(xs);Ub=i(pu,"This model is also a "),ws=a(pu,"A",{href:!0,rel:!0});var Dw=s(ws);Xb=i(Dw,"tf.keras.Model"),Dw.forEach(t),Hb=i(pu,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),pu.forEach(t),Qb=l(Ot),f(io.$$.fragment,Ot),Vb=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(zs.$$.fragment,Dt),Jb=l(Dt),Tn=a(Dt,"P",{});var Ri=s(Tn);Kb=i(Ri,"The "),Mi=a(Ri,"A",{href:!0});var Lw=s(Mi);Zb=i(Lw,"TFMBartModel"),Lw.forEach(t),Yb=i(Ri," forward method, overrides the "),Yl=a(Ri,"CODE",{});var Gw=s(Yl);ev=i(Gw,"__call__"),Gw.forEach(t),tv=i(Ri," special method."),Ri.forEach(t),nv=l(Dt),f(lo.$$.fragment,Dt),ov=l(Dt),ec=a(Dt,"P",{});var Rw=s(ec);av=i(Rw,"Example:"),Rw.forEach(t),sv=l(Dt),f(Bs.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),Kp=l(n),Mn=a(n,"H2",{class:!0});var hu=s(Mn);co=a(hu,"A",{id:!0,class:!0,href:!0});var Ww=s(co);tc=a(Ww,"SPAN",{});var Uw=s(tc);f(Fs.$$.fragment,Uw),Uw.forEach(t),Ww.forEach(t),rv=l(hu),nc=a(hu,"SPAN",{});var Xw=s(nc);iv=i(Xw,"TFMBartForConditionalGeneration"),Xw.forEach(t),hu.forEach(t),Zp=l(n),qe=a(n,"DIV",{class:!0});var Lt=s(qe);f($s.$$.fragment,Lt),dv=l(Lt),qs=a(Lt,"P",{});var uu=s(qs);lv=i(uu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=a(uu,"A",{href:!0});var Hw=s(xi);cv=i(Hw,"TFPreTrainedModel"),Hw.forEach(t),pv=i(uu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),uu.forEach(t),hv=l(Lt),js=a(Lt,"P",{});var mu=s(js);uv=i(mu,"This model is also a "),Es=a(mu,"A",{href:!0,rel:!0});var Qw=s(Es);mv=i(Qw,"tf.keras.Model"),Qw.forEach(t),fv=i(mu,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),mu.forEach(t),_v=l(Lt),f(po.$$.fragment,Lt),gv=l(Lt),Y=a(Lt,"DIV",{class:!0});var Re=s(Y);f(Ps.$$.fragment,Re),kv=l(Re),xn=a(Re,"P",{});var Wi=s(xn);bv=i(Wi,"The "),wi=a(Wi,"A",{href:!0});var Vw=s(wi);vv=i(Vw,"TFMBartForConditionalGeneration"),Vw.forEach(t),yv=i(Wi," forward method, overrides the "),oc=a(Wi,"CODE",{});var Jw=s(oc);Tv=i(Jw,"__call__"),Jw.forEach(t),Mv=i(Wi," special method."),Wi.forEach(t),xv=l(Re),f(ho.$$.fragment,Re),wv=l(Re),ac=a(Re,"P",{});var Kw=s(ac);zv=i(Kw,"Summarization example:"),Kw.forEach(t),Bv=l(Re),f(Cs.$$.fragment,Re),Fv=l(Re),sc=a(Re,"P",{});var Zw=s(sc);$v=i(Zw,"Mask filling example:"),Zw.forEach(t),qv=l(Re),f(Ss.$$.fragment,Re),Re.forEach(t),Lt.forEach(t),Yp=l(n),wn=a(n,"H2",{class:!0});var fu=s(wn);uo=a(fu,"A",{id:!0,class:!0,href:!0});var Yw=s(uo);rc=a(Yw,"SPAN",{});var e2=s(rc);f(As.$$.fragment,e2),e2.forEach(t),Yw.forEach(t),jv=l(fu),ic=a(fu,"SPAN",{});var t2=s(ic);Ev=i(t2,"FlaxMBartModel"),t2.forEach(t),fu.forEach(t),eh=l(n),R=a(n,"DIV",{class:!0});var me=s(R);f(Is.$$.fragment,me),Pv=l(me),Ns=a(me,"P",{});var _u=s(Ns);Cv=i(_u,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zi=a(_u,"A",{href:!0});var n2=s(zi);Sv=i(n2,"FlaxPreTrainedModel"),n2.forEach(t),Av=i(_u,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),_u.forEach(t),Iv=l(me),Os=a(me,"P",{});var gu=s(Os);Nv=i(gu,"This model is also a Flax Linen "),Ds=a(gu,"A",{href:!0,rel:!0});var o2=s(Ds);Ov=i(o2,"flax.nn.Module"),o2.forEach(t),Dv=i(gu,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gu.forEach(t),Lv=l(me),dc=a(me,"P",{});var a2=s(dc);Gv=i(a2,"Finally, this model supports inherent JAX features such as:"),a2.forEach(t),Rv=l(me),ut=a(me,"UL",{});var Bo=s(ut);lc=a(Bo,"LI",{});var s2=s(lc);Ls=a(s2,"A",{href:!0,rel:!0});var r2=s(Ls);Wv=i(r2,"Just-In-Time (JIT) compilation"),r2.forEach(t),s2.forEach(t),Uv=l(Bo),cc=a(Bo,"LI",{});var i2=s(cc);Gs=a(i2,"A",{href:!0,rel:!0});var d2=s(Gs);Xv=i(d2,"Automatic Differentiation"),d2.forEach(t),i2.forEach(t),Hv=l(Bo),pc=a(Bo,"LI",{});var l2=s(pc);Rs=a(l2,"A",{href:!0,rel:!0});var c2=s(Rs);Qv=i(c2,"Vectorization"),c2.forEach(t),l2.forEach(t),Vv=l(Bo),hc=a(Bo,"LI",{});var p2=s(hc);Ws=a(p2,"A",{href:!0,rel:!0});var h2=s(Ws);Jv=i(h2,"Parallelization"),h2.forEach(t),p2.forEach(t),Bo.forEach(t),Kv=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Us.$$.fragment,Gt),Zv=l(Gt),zn=a(Gt,"P",{});var Ui=s(zn);Yv=i(Ui,"The "),uc=a(Ui,"CODE",{});var u2=s(uc);ey=i(u2,"FlaxMBartPreTrainedModel"),u2.forEach(t),ty=i(Ui," forward method, overrides the "),mc=a(Ui,"CODE",{});var m2=s(mc);ny=i(m2,"__call__"),m2.forEach(t),oy=i(Ui," special method."),Ui.forEach(t),ay=l(Gt),f(mo.$$.fragment,Gt),sy=l(Gt),fc=a(Gt,"P",{});var f2=s(fc);ry=i(f2,"Example:"),f2.forEach(t),iy=l(Gt),f(Xs.$$.fragment,Gt),Gt.forEach(t),dy=l(me),Mt=a(me,"DIV",{class:!0});var Xi=s(Mt);f(Hs.$$.fragment,Xi),ly=l(Xi),_c=a(Xi,"P",{});var _2=s(_c);cy=i(_2,"Example:"),_2.forEach(t),py=l(Xi),f(Qs.$$.fragment,Xi),Xi.forEach(t),hy=l(me),xt=a(me,"DIV",{class:!0});var Hi=s(xt);f(Vs.$$.fragment,Hi),uy=l(Hi),gc=a(Hi,"P",{});var g2=s(gc);my=i(g2,"Example:"),g2.forEach(t),fy=l(Hi),f(Js.$$.fragment,Hi),Hi.forEach(t),me.forEach(t),th=l(n),Bn=a(n,"H2",{class:!0});var ku=s(Bn);fo=a(ku,"A",{id:!0,class:!0,href:!0});var k2=s(fo);kc=a(k2,"SPAN",{});var b2=s(kc);f(Ks.$$.fragment,b2),b2.forEach(t),k2.forEach(t),_y=l(ku),bc=a(ku,"SPAN",{});var v2=s(bc);gy=i(v2,"FlaxMBartForConditionalGeneration"),v2.forEach(t),ku.forEach(t),nh=l(n),W=a(n,"DIV",{class:!0});var fe=s(W);f(Zs.$$.fragment,fe),ky=l(fe),Ys=a(fe,"P",{});var bu=s(Ys);by=i(bu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a(bu,"A",{href:!0});var y2=s(Bi);vy=i(y2,"FlaxPreTrainedModel"),y2.forEach(t),yy=i(bu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),bu.forEach(t),Ty=l(fe),er=a(fe,"P",{});var vu=s(er);My=i(vu,"This model is also a Flax Linen "),tr=a(vu,"A",{href:!0,rel:!0});var T2=s(tr);xy=i(T2,"flax.nn.Module"),T2.forEach(t),wy=i(vu,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vu.forEach(t),zy=l(fe),vc=a(fe,"P",{});var M2=s(vc);By=i(M2,"Finally, this model supports inherent JAX features such as:"),M2.forEach(t),Fy=l(fe),mt=a(fe,"UL",{});var Fo=s(mt);yc=a(Fo,"LI",{});var x2=s(yc);nr=a(x2,"A",{href:!0,rel:!0});var w2=s(nr);$y=i(w2,"Just-In-Time (JIT) compilation"),w2.forEach(t),x2.forEach(t),qy=l(Fo),Tc=a(Fo,"LI",{});var z2=s(Tc);or=a(z2,"A",{href:!0,rel:!0});var B2=s(or);jy=i(B2,"Automatic Differentiation"),B2.forEach(t),z2.forEach(t),Ey=l(Fo),Mc=a(Fo,"LI",{});var F2=s(Mc);ar=a(F2,"A",{href:!0,rel:!0});var $2=s(ar);Py=i($2,"Vectorization"),$2.forEach(t),F2.forEach(t),Cy=l(Fo),xc=a(Fo,"LI",{});var q2=s(xc);sr=a(q2,"A",{href:!0,rel:!0});var j2=s(sr);Sy=i(j2,"Parallelization"),j2.forEach(t),q2.forEach(t),Fo.forEach(t),Ay=l(fe),ee=a(fe,"DIV",{class:!0});var We=s(ee);f(rr.$$.fragment,We),Iy=l(We),Fn=a(We,"P",{});var Qi=s(Fn);Ny=i(Qi,"The "),wc=a(Qi,"CODE",{});var E2=s(wc);Oy=i(E2,"FlaxMBartPreTrainedModel"),E2.forEach(t),Dy=i(Qi," forward method, overrides the "),zc=a(Qi,"CODE",{});var P2=s(zc);Ly=i(P2,"__call__"),P2.forEach(t),Gy=i(Qi," special method."),Qi.forEach(t),Ry=l(We),f(_o.$$.fragment,We),Wy=l(We),Bc=a(We,"P",{});var C2=s(Bc);Uy=i(C2,"Summarization example:"),C2.forEach(t),Xy=l(We),f(ir.$$.fragment,We),Hy=l(We),Fc=a(We,"P",{});var S2=s(Fc);Qy=i(S2,"Mask filling example:"),S2.forEach(t),Vy=l(We),f(dr.$$.fragment,We),We.forEach(t),Jy=l(fe),wt=a(fe,"DIV",{class:!0});var Vi=s(wt);f(lr.$$.fragment,Vi),Ky=l(Vi),$c=a(Vi,"P",{});var A2=s($c);Zy=i(A2,"Example:"),A2.forEach(t),Yy=l(Vi),f(cr.$$.fragment,Vi),Vi.forEach(t),e1=l(fe),zt=a(fe,"DIV",{class:!0});var Ji=s(zt);f(pr.$$.fragment,Ji),t1=l(Ji),qc=a(Ji,"P",{});var I2=s(qc);n1=i(I2,"Example:"),I2.forEach(t),o1=l(Ji),f(hr.$$.fragment,Ji),Ji.forEach(t),fe.forEach(t),oh=l(n),$n=a(n,"H2",{class:!0});var yu=s($n);go=a(yu,"A",{id:!0,class:!0,href:!0});var N2=s(go);jc=a(N2,"SPAN",{});var O2=s(jc);f(ur.$$.fragment,O2),O2.forEach(t),N2.forEach(t),a1=l(yu),Ec=a(yu,"SPAN",{});var D2=s(Ec);s1=i(D2,"FlaxMBartForSequenceClassification"),D2.forEach(t),yu.forEach(t),ah=l(n),I=a(n,"DIV",{class:!0});var ne=s(I);f(mr.$$.fragment,ne),r1=l(ne),Pc=a(ne,"P",{});var L2=s(Pc);i1=i(L2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),L2.forEach(t),d1=l(ne),fr=a(ne,"P",{});var Tu=s(fr);l1=i(Tu,"This model inherits from "),Fi=a(Tu,"A",{href:!0});var G2=s(Fi);c1=i(G2,"FlaxPreTrainedModel"),G2.forEach(t),p1=i(Tu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Tu.forEach(t),h1=l(ne),_r=a(ne,"P",{});var Mu=s(_r);u1=i(Mu,"This model is also a Flax Linen "),gr=a(Mu,"A",{href:!0,rel:!0});var R2=s(gr);m1=i(R2,"flax.nn.Module"),R2.forEach(t),f1=i(Mu,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mu.forEach(t),_1=l(ne),Cc=a(ne,"P",{});var W2=s(Cc);g1=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),k1=l(ne),ft=a(ne,"UL",{});var $o=s(ft);Sc=a($o,"LI",{});var U2=s(Sc);kr=a(U2,"A",{href:!0,rel:!0});var X2=s(kr);b1=i(X2,"Just-In-Time (JIT) compilation"),X2.forEach(t),U2.forEach(t),v1=l($o),Ac=a($o,"LI",{});var H2=s(Ac);br=a(H2,"A",{href:!0,rel:!0});var Q2=s(br);y1=i(Q2,"Automatic Differentiation"),Q2.forEach(t),H2.forEach(t),T1=l($o),Ic=a($o,"LI",{});var V2=s(Ic);vr=a(V2,"A",{href:!0,rel:!0});var J2=s(vr);M1=i(J2,"Vectorization"),J2.forEach(t),V2.forEach(t),x1=l($o),Nc=a($o,"LI",{});var K2=s(Nc);yr=a(K2,"A",{href:!0,rel:!0});var Z2=s(yr);w1=i(Z2,"Parallelization"),Z2.forEach(t),K2.forEach(t),$o.forEach(t),z1=l(ne),Oe=a(ne,"DIV",{class:!0});var Rt=s(Oe);f(Tr.$$.fragment,Rt),B1=l(Rt),qn=a(Rt,"P",{});var Ki=s(qn);F1=i(Ki,"The "),Oc=a(Ki,"CODE",{});var Y2=s(Oc);$1=i(Y2,"FlaxMBartPreTrainedModel"),Y2.forEach(t),q1=i(Ki," forward method, overrides the "),Dc=a(Ki,"CODE",{});var e4=s(Dc);j1=i(e4,"__call__"),e4.forEach(t),E1=i(Ki," special method."),Ki.forEach(t),P1=l(Rt),f(ko.$$.fragment,Rt),C1=l(Rt),Lc=a(Rt,"P",{});var t4=s(Lc);S1=i(t4,"Example:"),t4.forEach(t),A1=l(Rt),f(Mr.$$.fragment,Rt),Rt.forEach(t),I1=l(ne),Bt=a(ne,"DIV",{class:!0});var Zi=s(Bt);f(xr.$$.fragment,Zi),N1=l(Zi),Gc=a(Zi,"P",{});var n4=s(Gc);O1=i(n4,"Example:"),n4.forEach(t),D1=l(Zi),f(wr.$$.fragment,Zi),Zi.forEach(t),L1=l(ne),Ft=a(ne,"DIV",{class:!0});var Yi=s(Ft);f(zr.$$.fragment,Yi),G1=l(Yi),Rc=a(Yi,"P",{});var o4=s(Rc);R1=i(o4,"Example:"),o4.forEach(t),W1=l(Yi),f(Br.$$.fragment,Yi),Yi.forEach(t),ne.forEach(t),sh=l(n),jn=a(n,"H2",{class:!0});var xu=s(jn);bo=a(xu,"A",{id:!0,class:!0,href:!0});var a4=s(bo);Wc=a(a4,"SPAN",{});var s4=s(Wc);f(Fr.$$.fragment,s4),s4.forEach(t),a4.forEach(t),U1=l(xu),Uc=a(xu,"SPAN",{});var r4=s(Uc);X1=i(r4,"FlaxMBartForQuestionAnswering"),r4.forEach(t),xu.forEach(t),rh=l(n),N=a(n,"DIV",{class:!0});var oe=s(N);f($r.$$.fragment,oe),H1=l(oe),En=a(oe,"P",{});var ed=s(En);Q1=i(ed,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Xc=a(ed,"EM",{});var i4=s(Xc);V1=i(i4,"span start logits"),i4.forEach(t),J1=i(ed," and "),Hc=a(ed,"EM",{});var d4=s(Hc);K1=i(d4,"span end logits"),d4.forEach(t),Z1=i(ed,")."),ed.forEach(t),Y1=l(oe),qr=a(oe,"P",{});var wu=s(qr);eT=i(wu,"This model inherits from "),$i=a(wu,"A",{href:!0});var l4=s($i);tT=i(l4,"FlaxPreTrainedModel"),l4.forEach(t),nT=i(wu,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),wu.forEach(t),oT=l(oe),jr=a(oe,"P",{});var zu=s(jr);aT=i(zu,"This model is also a Flax Linen "),Er=a(zu,"A",{href:!0,rel:!0});var c4=s(Er);sT=i(c4,"flax.nn.Module"),c4.forEach(t),rT=i(zu,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zu.forEach(t),iT=l(oe),Qc=a(oe,"P",{});var p4=s(Qc);dT=i(p4,"Finally, this model supports inherent JAX features such as:"),p4.forEach(t),lT=l(oe),_t=a(oe,"UL",{});var qo=s(_t);Vc=a(qo,"LI",{});var h4=s(Vc);Pr=a(h4,"A",{href:!0,rel:!0});var u4=s(Pr);cT=i(u4,"Just-In-Time (JIT) compilation"),u4.forEach(t),h4.forEach(t),pT=l(qo),Jc=a(qo,"LI",{});var m4=s(Jc);Cr=a(m4,"A",{href:!0,rel:!0});var f4=s(Cr);hT=i(f4,"Automatic Differentiation"),f4.forEach(t),m4.forEach(t),uT=l(qo),Kc=a(qo,"LI",{});var _4=s(Kc);Sr=a(_4,"A",{href:!0,rel:!0});var g4=s(Sr);mT=i(g4,"Vectorization"),g4.forEach(t),_4.forEach(t),fT=l(qo),Zc=a(qo,"LI",{});var k4=s(Zc);Ar=a(k4,"A",{href:!0,rel:!0});var b4=s(Ar);_T=i(b4,"Parallelization"),b4.forEach(t),k4.forEach(t),qo.forEach(t),gT=l(oe),De=a(oe,"DIV",{class:!0});var Wt=s(De);f(Ir.$$.fragment,Wt),kT=l(Wt),Pn=a(Wt,"P",{});var td=s(Pn);bT=i(td,"The "),Yc=a(td,"CODE",{});var v4=s(Yc);vT=i(v4,"FlaxMBartPreTrainedModel"),v4.forEach(t),yT=i(td," forward method, overrides the "),ep=a(td,"CODE",{});var y4=s(ep);TT=i(y4,"__call__"),y4.forEach(t),MT=i(td," special method."),td.forEach(t),xT=l(Wt),f(vo.$$.fragment,Wt),wT=l(Wt),tp=a(Wt,"P",{});var T4=s(tp);zT=i(T4,"Example:"),T4.forEach(t),BT=l(Wt),f(Nr.$$.fragment,Wt),Wt.forEach(t),FT=l(oe),$t=a(oe,"DIV",{class:!0});var nd=s($t);f(Or.$$.fragment,nd),$T=l(nd),np=a(nd,"P",{});var M4=s(np);qT=i(M4,"Example:"),M4.forEach(t),jT=l(nd),f(Dr.$$.fragment,nd),nd.forEach(t),ET=l(oe),qt=a(oe,"DIV",{class:!0});var od=s(qt);f(Lr.$$.fragment,od),PT=l(od),op=a(od,"P",{});var x4=s(op);CT=i(x4,"Example:"),x4.forEach(t),ST=l(od),f(Gr.$$.fragment,od),od.forEach(t),oe.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(G4)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(V,"href","https://arxiv.org/abs/2001.08210"),c(V,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(x,"class","relative group"),c(jo,"href","/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Qr,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Cn,"id","overview-of-mbart50"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Ao,"href","https://arxiv.org/abs/2008.00401%3E"),c(Ao,"rel","nofollow"),c(Sn,"id","training-of-mbart50"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#training-of-mbart50"),c(en,"class","relative group"),c(ei,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(In,"id","transformers.MBartConfig"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.MBartConfig"),c(tn,"class","relative group"),c(oi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartModel"),c(Ro,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Ro,"rel","nofollow"),c(ai,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(si,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(Nn,"id","transformers.MBartTokenizer"),c(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nn,"href","#transformers.MBartTokenizer"),c(an,"class","relative group"),c(ri,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizer"),c(ii,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),c(di,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),c(On,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Dn,"id","transformers.MBartTokenizerFast"),c(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dn,"href","#transformers.MBartTokenizerFast"),c(sn,"class","relative group"),c(oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(oa,"rel","nofollow"),c(li,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(ci,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizerFast"),c(pi,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Ln,"class","docstring"),c(Gn,"class","docstring"),c(A,"class","docstring"),c(Rn,"id","transformers.MBart50Tokenizer"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#transformers.MBart50Tokenizer"),c(dn,"class","relative group"),c(_a,"href","https://github.com/google/sentencepiece"),c(_a,"rel","nofollow"),c(hi,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(nt,"class","docstring"),c(Wn,"class","docstring"),c(Un,"class","docstring"),c(Xn,"class","docstring"),c(Hn,"class","docstring"),c(C,"class","docstring"),c(Qn,"id","transformers.MBart50TokenizerFast"),c(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qn,"href","#transformers.MBart50TokenizerFast"),c(ln,"class","relative group"),c(ja,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ja,"rel","nofollow"),c(ui,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Vn,"class","docstring"),c(Jn,"class","docstring"),c(G,"class","docstring"),c(Kn,"id","transformers.MBartModel"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.MBartModel"),c(pn,"class","relative group"),c(mi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ua,"rel","nofollow"),c(fi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartModel"),c(Se,"class","docstring"),c(Ve,"class","docstring"),c(Yn,"id","transformers.MBartForConditionalGeneration"),c(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yn,"href","#transformers.MBartForConditionalGeneration"),c(un,"class","relative group"),c(_i,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Za,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Za,"rel","nofollow"),c(gi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(K,"class","docstring"),c(Je,"class","docstring"),c(to,"id","transformers.MBartForQuestionAnswering"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.MBartForQuestionAnswering"),c(fn,"class","relative group"),c(ki,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(rs,"rel","nofollow"),c(bi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ae,"class","docstring"),c(Be,"class","docstring"),c(oo,"id","transformers.MBartForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.MBartForSequenceClassification"),c(kn,"class","relative group"),c(vi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(us,"rel","nofollow"),c(yi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Z,"class","docstring"),c(Fe,"class","docstring"),c(so,"id","transformers.MBartForCausalLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.MBartForCausalLM"),c(vn,"class","relative group"),c(Tt,"class","docstring"),c(ks,"class","docstring"),c(ro,"id","transformers.TFMBartModel"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.TFMBartModel"),c(yn,"class","relative group"),c(Ti,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ws,"rel","nofollow"),c(Mi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(co,"id","transformers.TFMBartForConditionalGeneration"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.TFMBartForConditionalGeneration"),c(Mn,"class","relative group"),c(xi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Es,"rel","nofollow"),c(wi,"href","/docs/transformers/v4.14.1/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(Y,"class","docstring"),c(qe,"class","docstring"),c(uo,"id","transformers.FlaxMBartModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.FlaxMBartModel"),c(wn,"class","relative group"),c(zi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ds,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ds,"rel","nofollow"),c(Ls,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ls,"rel","nofollow"),c(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gs,"rel","nofollow"),c(Rs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Rs,"rel","nofollow"),c(Ws,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ws,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(xt,"class","docstring"),c(R,"class","docstring"),c(fo,"id","transformers.FlaxMBartForConditionalGeneration"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Bn,"class","relative group"),c(Bi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(tr,"rel","nofollow"),c(nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(nr,"rel","nofollow"),c(or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(or,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ar,"rel","nofollow"),c(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(sr,"rel","nofollow"),c(ee,"class","docstring"),c(wt,"class","docstring"),c(zt,"class","docstring"),c(W,"class","docstring"),c(go,"id","transformers.FlaxMBartForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.FlaxMBartForSequenceClassification"),c($n,"class","relative group"),c(Fi,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(gr,"rel","nofollow"),c(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(kr,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(br,"rel","nofollow"),c(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(vr,"rel","nofollow"),c(yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(yr,"rel","nofollow"),c(Oe,"class","docstring"),c(Bt,"class","docstring"),c(Ft,"class","docstring"),c(I,"class","docstring"),c(bo,"id","transformers.FlaxMBartForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxMBartForQuestionAnswering"),c(jn,"class","relative group"),c($i,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Er,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Er,"rel","nofollow"),c(Pr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Pr,"rel","nofollow"),c(Cr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Cr,"rel","nofollow"),c(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Sr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ar,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(qt,"class","docstring"),c(N,"class","docstring")},m(n,p){e(document.head,u),h(n,z,p),h(n,v,p),e(v,M),e(M,w),_(T,w,null),e(v,y),e(v,B),e(B,st),h(n,je,p),h(n,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),h(n,Ke,p),h(n,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,S),e(S,dt),h(n,ce,p),h(n,pe,p),e(pe,lt),e(pe,V),e(V,ct),e(pe,pt),h(n,D,p),h(n,Ee,p),e(Ee,be),h(n,Ze,p),h(n,se,p),e(se,ve),e(se,ye),e(ye,ht),e(se,re),e(se,Te),e(Te,Me),h(n,Ye,p),h(n,x,p),e(x,$),e($,xe),_(He,xe,null),e(x,Ut),e(x,J),e(J,Xt),h(n,gt,p),h(n,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Qt),e(X,le),e(le,Vt),e(X,Jt),e(X,Qe),e(Qe,Kt),e(X,Bu),e(X,ad),e(ad,Fu),e(X,$u),h(n,up,p),h(n,kt,p),e(kt,qu),e(kt,jo),e(jo,sd),e(sd,ju),e(jo,Eu),e(kt,Pu),e(kt,Qr),e(Qr,Cu),e(kt,Su),h(n,mp,p),h(n,Vr,p),e(Vr,rd),e(rd,Au),h(n,fp,p),_(Eo,n,p),h(n,_p,p),h(n,Jr,p),e(Jr,Po),e(Po,id),e(id,Iu),e(Po,Nu),e(Po,Zt),e(Zt,Ou),e(Zt,dd),e(dd,Du),e(Zt,Lu),e(Zt,ld),e(ld,Gu),e(Zt,Ru),h(n,gp,p),_(Co,n,p),h(n,kp,p),h(n,Yt,p),e(Yt,Cn),e(Cn,cd),_(So,cd,null),e(Yt,Wu),e(Yt,pd),e(pd,Uu),h(n,bp,p),h(n,bt,p),e(bt,Xu),e(bt,Kr),e(Kr,Hu),e(Kr,Ao),e(Ao,Qu),e(bt,Vu),e(bt,hd),e(hd,Ju),e(bt,Ku),h(n,vp,p),h(n,Zr,p),e(Zr,Zu),h(n,yp,p),h(n,Yr,p),e(Yr,ud),e(ud,Yu),h(n,Tp,p),h(n,en,p),e(en,Sn),e(Sn,md),_(Io,md,null),e(en,em),e(en,fd),e(fd,tm),h(n,Mp,p),h(n,et,p),e(et,nm),e(et,_d),e(_d,om),e(et,am),e(et,gd),e(gd,sm),e(et,rm),e(et,kd),e(kd,im),e(et,dm),h(n,xp,p),h(n,An,p),e(An,lm),e(An,ei),e(ei,cm),e(An,pm),h(n,wp,p),h(n,ti,p),e(ti,bd),e(bd,hm),h(n,zp,p),_(No,n,p),h(n,Bp,p),h(n,ni,p),e(ni,Oo),e(Oo,vd),e(vd,um),e(Oo,mm),e(Oo,we),e(we,fm),e(we,yd),e(yd,_m),e(we,gm),e(we,Td),e(Td,km),e(we,bm),e(we,Md),e(Md,vm),e(we,ym),e(we,xd),e(xd,Tm),e(we,Mm),e(we,wd),e(wd,xm),e(we,wm),h(n,Fp,p),_(Do,n,p),h(n,$p,p),h(n,tn,p),e(tn,In),e(In,zd),_(Lo,zd,null),e(tn,zm),e(tn,Bd),e(Bd,Bm),h(n,qp,p),h(n,ze,p),_(Go,ze,null),e(ze,Fm),e(ze,nn),e(nn,$m),e(nn,oi),e(oi,qm),e(nn,jm),e(nn,Ro),e(Ro,Em),e(nn,Pm),e(ze,Cm),e(ze,on),e(on,Sm),e(on,ai),e(ai,Am),e(on,Im),e(on,si),e(si,Nm),e(on,Om),e(ze,Dm),e(ze,Fd),e(Fd,Lm),e(ze,Gm),_(Wo,ze,null),h(n,jp,p),h(n,an,p),e(an,Nn),e(Nn,$d),_(Uo,$d,null),e(an,Rm),e(an,qd),e(qd,Wm),h(n,Ep,p),h(n,L,p),_(Xo,L,null),e(L,Um),e(L,jd),e(jd,Xm),e(L,Hm),e(L,vt),e(vt,ri),e(ri,Qm),e(vt,Vm),e(vt,ii),e(ii,Jm),e(vt,Km),e(vt,di),e(di,Zm),e(vt,Ym),e(L,ef),e(L,Ho),e(Ho,tf),e(Ho,Ed),e(Ed,nf),e(Ho,of),e(L,af),e(L,Pd),e(Pd,sf),e(L,rf),_(Qo,L,null),e(L,df),e(L,On),_(Vo,On,null),e(On,lf),e(On,Cd),e(Cd,cf),e(L,pf),e(L,tt),_(Jo,tt,null),e(tt,hf),e(tt,Ko),e(Ko,uf),e(Ko,Sd),e(Sd,mf),e(Ko,ff),e(tt,_f),e(tt,Zo),e(Zo,Yo),e(Yo,Ad),e(Ad,gf),e(Yo,kf),e(Yo,Id),e(Id,bf),e(Zo,vf),e(Zo,ea),e(ea,Nd),e(Nd,yf),e(ea,Tf),e(ea,Od),e(Od,Mf),e(tt,xf),e(tt,Dd),e(Dd,wf),h(n,Pp,p),h(n,sn,p),e(sn,Dn),e(Dn,Ld),_(ta,Ld,null),e(sn,zf),e(sn,Gd),e(Gd,Bf),h(n,Cp,p),h(n,A,p),_(na,A,null),e(A,Ff),e(A,rn),e(rn,$f),e(rn,Rd),e(Rd,qf),e(rn,jf),e(rn,oa),e(oa,Ef),e(rn,Pf),e(A,Cf),e(A,yt),e(yt,li),e(li,Sf),e(yt,Af),e(yt,ci),e(ci,If),e(yt,Nf),e(yt,pi),e(pi,Of),e(yt,Df),e(A,Lf),e(A,aa),e(aa,Gf),e(aa,Wd),e(Wd,Rf),e(aa,Wf),e(A,Uf),e(A,Ud),e(Ud,Xf),e(A,Hf),_(sa,A,null),e(A,Qf),e(A,Pe),_(ra,Pe,null),e(Pe,Vf),e(Pe,Xd),e(Xd,Jf),e(Pe,Kf),e(Pe,ia),e(ia,Zf),e(ia,Hd),e(Hd,Yf),e(ia,e_),e(Pe,t_),e(Pe,da),e(da,la),e(la,Qd),e(Qd,n_),e(la,o_),e(la,Vd),e(Vd,a_),e(da,s_),e(da,ca),e(ca,Jd),e(Jd,r_),e(ca,i_),e(ca,Kd),e(Kd,d_),e(Pe,l_),e(Pe,Zd),e(Zd,c_),e(A,p_),e(A,Ln),_(pa,Ln,null),e(Ln,h_),e(Ln,Yd),e(Yd,u_),e(A,m_),e(A,Gn),_(ha,Gn,null),e(Gn,f_),e(Gn,el),e(el,__),h(n,Sp,p),h(n,dn,p),e(dn,Rn),e(Rn,tl),_(ua,tl,null),e(dn,g_),e(dn,nl),e(nl,k_),h(n,Ap,p),h(n,C,p),_(ma,C,null),e(C,b_),e(C,fa),e(fa,v_),e(fa,_a),e(_a,y_),e(fa,T_),e(C,M_),e(C,ga),e(ga,x_),e(ga,hi),e(hi,w_),e(ga,z_),e(C,B_),e(C,ol),e(ol,F_),e(C,$_),_(ka,C,null),e(C,q_),e(C,nt),_(ba,nt,null),e(nt,j_),e(nt,va),e(va,E_),e(va,al),e(al,P_),e(va,C_),e(nt,S_),e(nt,ya),e(ya,Ta),e(Ta,sl),e(sl,A_),e(Ta,I_),e(Ta,rl),e(rl,N_),e(ya,O_),e(ya,Ma),e(Ma,il),e(il,D_),e(Ma,L_),e(Ma,dl),e(dl,G_),e(nt,R_),e(nt,ll),e(ll,W_),e(C,U_),e(C,Wn),_(xa,Wn,null),e(Wn,X_),e(Wn,cl),e(cl,H_),e(C,Q_),e(C,Un),_(wa,Un,null),e(Un,V_),e(Un,za),e(za,J_),e(za,pl),e(pl,K_),e(za,Z_),e(C,Y_),e(C,Xn),_(Ba,Xn,null),e(Xn,eg),e(Xn,hl),e(hl,tg),e(C,ng),e(C,Hn),_(Fa,Hn,null),e(Hn,og),e(Hn,ul),e(ul,ag),h(n,Ip,p),h(n,ln,p),e(ln,Qn),e(Qn,ml),_($a,ml,null),e(ln,sg),e(ln,fl),e(fl,rg),h(n,Np,p),h(n,G,p),_(qa,G,null),e(G,ig),e(G,cn),e(cn,dg),e(cn,_l),e(_l,lg),e(cn,cg),e(cn,ja),e(ja,pg),e(cn,hg),e(G,ug),e(G,Ea),e(Ea,mg),e(Ea,ui),e(ui,fg),e(Ea,_g),e(G,gg),e(G,gl),e(gl,kg),e(G,bg),_(Pa,G,null),e(G,vg),e(G,Ce),_(Ca,Ce,null),e(Ce,yg),e(Ce,kl),e(kl,Tg),e(Ce,Mg),e(Ce,Sa),e(Sa,xg),e(Sa,bl),e(bl,wg),e(Sa,zg),e(Ce,Bg),e(Ce,Aa),e(Aa,Ia),e(Ia,vl),e(vl,Fg),e(Ia,$g),e(Ia,yl),e(yl,qg),e(Aa,jg),e(Aa,Na),e(Na,Tl),e(Tl,Eg),e(Na,Pg),e(Na,Ml),e(Ml,Cg),e(Ce,Sg),e(Ce,xl),e(xl,Ag),e(G,Ig),e(G,Vn),_(Oa,Vn,null),e(Vn,Ng),e(Vn,wl),e(wl,Og),e(G,Dg),e(G,Jn),_(Da,Jn,null),e(Jn,Lg),e(Jn,zl),e(zl,Gg),h(n,Op,p),h(n,pn,p),e(pn,Kn),e(Kn,Bl),_(La,Bl,null),e(pn,Rg),e(pn,Fl),e(Fl,Wg),h(n,Dp,p),h(n,Ve,p),_(Ga,Ve,null),e(Ve,Ug),e(Ve,Ra),e(Ra,Xg),e(Ra,mi),e(mi,Hg),e(Ra,Qg),e(Ve,Vg),e(Ve,Wa),e(Wa,Jg),e(Wa,Ua),e(Ua,Kg),e(Wa,Zg),e(Ve,Yg),e(Ve,Se),_(Xa,Se,null),e(Se,ek),e(Se,hn),e(hn,tk),e(hn,fi),e(fi,nk),e(hn,ok),e(hn,$l),e($l,ak),e(hn,sk),e(Se,rk),_(Zn,Se,null),e(Se,ik),e(Se,ql),e(ql,dk),e(Se,lk),_(Ha,Se,null),h(n,Lp,p),h(n,un,p),e(un,Yn),e(Yn,jl),_(Qa,jl,null),e(un,ck),e(un,El),e(El,pk),h(n,Gp,p),h(n,Je,p),_(Va,Je,null),e(Je,hk),e(Je,Ja),e(Ja,uk),e(Ja,_i),e(_i,mk),e(Ja,fk),e(Je,_k),e(Je,Ka),e(Ka,gk),e(Ka,Za),e(Za,kk),e(Ka,bk),e(Je,vk),e(Je,K),_(Ya,K,null),e(K,yk),e(K,mn),e(mn,Tk),e(mn,gi),e(gi,Mk),e(mn,xk),e(mn,Pl),e(Pl,wk),e(mn,zk),e(K,Bk),_(eo,K,null),e(K,Fk),e(K,Cl),e(Cl,$k),e(K,qk),_(es,K,null),e(K,jk),e(K,Sl),e(Sl,Ek),e(K,Pk),_(ts,K,null),h(n,Rp,p),h(n,fn,p),e(fn,to),e(to,Al),_(ns,Al,null),e(fn,Ck),e(fn,Il),e(Il,Sk),h(n,Wp,p),h(n,Be,p),_(os,Be,null),e(Be,Ak),e(Be,_n),e(_n,Ik),e(_n,Nl),e(Nl,Nk),e(_n,Ok),e(_n,Ol),e(Ol,Dk),e(_n,Lk),e(Be,Gk),e(Be,as),e(as,Rk),e(as,ki),e(ki,Wk),e(as,Uk),e(Be,Xk),e(Be,ss),e(ss,Hk),e(ss,rs),e(rs,Qk),e(ss,Vk),e(Be,Jk),e(Be,Ae),_(is,Ae,null),e(Ae,Kk),e(Ae,gn),e(gn,Zk),e(gn,bi),e(bi,Yk),e(gn,eb),e(gn,Dl),e(Dl,tb),e(gn,nb),e(Ae,ob),_(no,Ae,null),e(Ae,ab),e(Ae,Ll),e(Ll,sb),e(Ae,rb),_(ds,Ae,null),h(n,Up,p),h(n,kn,p),e(kn,oo),e(oo,Gl),_(ls,Gl,null),e(kn,ib),e(kn,Rl),e(Rl,db),h(n,Xp,p),h(n,Fe,p),_(cs,Fe,null),e(Fe,lb),e(Fe,Wl),e(Wl,cb),e(Fe,pb),e(Fe,ps),e(ps,hb),e(ps,vi),e(vi,ub),e(ps,mb),e(Fe,fb),e(Fe,hs),e(hs,_b),e(hs,us),e(us,gb),e(hs,kb),e(Fe,bb),e(Fe,Z),_(ms,Z,null),e(Z,vb),e(Z,bn),e(bn,yb),e(bn,yi),e(yi,Tb),e(bn,Mb),e(bn,Ul),e(Ul,xb),e(bn,wb),e(Z,zb),_(ao,Z,null),e(Z,Bb),e(Z,Xl),e(Xl,Fb),e(Z,$b),_(fs,Z,null),e(Z,qb),e(Z,Hl),e(Hl,jb),e(Z,Eb),_(_s,Z,null),h(n,Hp,p),h(n,vn,p),e(vn,so),e(so,Ql),_(gs,Ql,null),e(vn,Pb),e(vn,Vl),e(Vl,Cb),h(n,Qp,p),h(n,ks,p),e(ks,Tt),_(bs,Tt,null),e(Tt,Sb),e(Tt,Jl),e(Jl,Ab),e(Tt,Ib),_(vs,Tt,null),h(n,Vp,p),h(n,yn,p),e(yn,ro),e(ro,Kl),_(ys,Kl,null),e(yn,Nb),e(yn,Zl),e(Zl,Ob),h(n,Jp,p),h(n,$e,p),_(Ts,$e,null),e($e,Db),e($e,Ms),e(Ms,Lb),e(Ms,Ti),e(Ti,Gb),e(Ms,Rb),e($e,Wb),e($e,xs),e(xs,Ub),e(xs,ws),e(ws,Xb),e(xs,Hb),e($e,Qb),_(io,$e,null),e($e,Vb),e($e,Ie),_(zs,Ie,null),e(Ie,Jb),e(Ie,Tn),e(Tn,Kb),e(Tn,Mi),e(Mi,Zb),e(Tn,Yb),e(Tn,Yl),e(Yl,ev),e(Tn,tv),e(Ie,nv),_(lo,Ie,null),e(Ie,ov),e(Ie,ec),e(ec,av),e(Ie,sv),_(Bs,Ie,null),h(n,Kp,p),h(n,Mn,p),e(Mn,co),e(co,tc),_(Fs,tc,null),e(Mn,rv),e(Mn,nc),e(nc,iv),h(n,Zp,p),h(n,qe,p),_($s,qe,null),e(qe,dv),e(qe,qs),e(qs,lv),e(qs,xi),e(xi,cv),e(qs,pv),e(qe,hv),e(qe,js),e(js,uv),e(js,Es),e(Es,mv),e(js,fv),e(qe,_v),_(po,qe,null),e(qe,gv),e(qe,Y),_(Ps,Y,null),e(Y,kv),e(Y,xn),e(xn,bv),e(xn,wi),e(wi,vv),e(xn,yv),e(xn,oc),e(oc,Tv),e(xn,Mv),e(Y,xv),_(ho,Y,null),e(Y,wv),e(Y,ac),e(ac,zv),e(Y,Bv),_(Cs,Y,null),e(Y,Fv),e(Y,sc),e(sc,$v),e(Y,qv),_(Ss,Y,null),h(n,Yp,p),h(n,wn,p),e(wn,uo),e(uo,rc),_(As,rc,null),e(wn,jv),e(wn,ic),e(ic,Ev),h(n,eh,p),h(n,R,p),_(Is,R,null),e(R,Pv),e(R,Ns),e(Ns,Cv),e(Ns,zi),e(zi,Sv),e(Ns,Av),e(R,Iv),e(R,Os),e(Os,Nv),e(Os,Ds),e(Ds,Ov),e(Os,Dv),e(R,Lv),e(R,dc),e(dc,Gv),e(R,Rv),e(R,ut),e(ut,lc),e(lc,Ls),e(Ls,Wv),e(ut,Uv),e(ut,cc),e(cc,Gs),e(Gs,Xv),e(ut,Hv),e(ut,pc),e(pc,Rs),e(Rs,Qv),e(ut,Vv),e(ut,hc),e(hc,Ws),e(Ws,Jv),e(R,Kv),e(R,Ne),_(Us,Ne,null),e(Ne,Zv),e(Ne,zn),e(zn,Yv),e(zn,uc),e(uc,ey),e(zn,ty),e(zn,mc),e(mc,ny),e(zn,oy),e(Ne,ay),_(mo,Ne,null),e(Ne,sy),e(Ne,fc),e(fc,ry),e(Ne,iy),_(Xs,Ne,null),e(R,dy),e(R,Mt),_(Hs,Mt,null),e(Mt,ly),e(Mt,_c),e(_c,cy),e(Mt,py),_(Qs,Mt,null),e(R,hy),e(R,xt),_(Vs,xt,null),e(xt,uy),e(xt,gc),e(gc,my),e(xt,fy),_(Js,xt,null),h(n,th,p),h(n,Bn,p),e(Bn,fo),e(fo,kc),_(Ks,kc,null),e(Bn,_y),e(Bn,bc),e(bc,gy),h(n,nh,p),h(n,W,p),_(Zs,W,null),e(W,ky),e(W,Ys),e(Ys,by),e(Ys,Bi),e(Bi,vy),e(Ys,yy),e(W,Ty),e(W,er),e(er,My),e(er,tr),e(tr,xy),e(er,wy),e(W,zy),e(W,vc),e(vc,By),e(W,Fy),e(W,mt),e(mt,yc),e(yc,nr),e(nr,$y),e(mt,qy),e(mt,Tc),e(Tc,or),e(or,jy),e(mt,Ey),e(mt,Mc),e(Mc,ar),e(ar,Py),e(mt,Cy),e(mt,xc),e(xc,sr),e(sr,Sy),e(W,Ay),e(W,ee),_(rr,ee,null),e(ee,Iy),e(ee,Fn),e(Fn,Ny),e(Fn,wc),e(wc,Oy),e(Fn,Dy),e(Fn,zc),e(zc,Ly),e(Fn,Gy),e(ee,Ry),_(_o,ee,null),e(ee,Wy),e(ee,Bc),e(Bc,Uy),e(ee,Xy),_(ir,ee,null),e(ee,Hy),e(ee,Fc),e(Fc,Qy),e(ee,Vy),_(dr,ee,null),e(W,Jy),e(W,wt),_(lr,wt,null),e(wt,Ky),e(wt,$c),e($c,Zy),e(wt,Yy),_(cr,wt,null),e(W,e1),e(W,zt),_(pr,zt,null),e(zt,t1),e(zt,qc),e(qc,n1),e(zt,o1),_(hr,zt,null),h(n,oh,p),h(n,$n,p),e($n,go),e(go,jc),_(ur,jc,null),e($n,a1),e($n,Ec),e(Ec,s1),h(n,ah,p),h(n,I,p),_(mr,I,null),e(I,r1),e(I,Pc),e(Pc,i1),e(I,d1),e(I,fr),e(fr,l1),e(fr,Fi),e(Fi,c1),e(fr,p1),e(I,h1),e(I,_r),e(_r,u1),e(_r,gr),e(gr,m1),e(_r,f1),e(I,_1),e(I,Cc),e(Cc,g1),e(I,k1),e(I,ft),e(ft,Sc),e(Sc,kr),e(kr,b1),e(ft,v1),e(ft,Ac),e(Ac,br),e(br,y1),e(ft,T1),e(ft,Ic),e(Ic,vr),e(vr,M1),e(ft,x1),e(ft,Nc),e(Nc,yr),e(yr,w1),e(I,z1),e(I,Oe),_(Tr,Oe,null),e(Oe,B1),e(Oe,qn),e(qn,F1),e(qn,Oc),e(Oc,$1),e(qn,q1),e(qn,Dc),e(Dc,j1),e(qn,E1),e(Oe,P1),_(ko,Oe,null),e(Oe,C1),e(Oe,Lc),e(Lc,S1),e(Oe,A1),_(Mr,Oe,null),e(I,I1),e(I,Bt),_(xr,Bt,null),e(Bt,N1),e(Bt,Gc),e(Gc,O1),e(Bt,D1),_(wr,Bt,null),e(I,L1),e(I,Ft),_(zr,Ft,null),e(Ft,G1),e(Ft,Rc),e(Rc,R1),e(Ft,W1),_(Br,Ft,null),h(n,sh,p),h(n,jn,p),e(jn,bo),e(bo,Wc),_(Fr,Wc,null),e(jn,U1),e(jn,Uc),e(Uc,X1),h(n,rh,p),h(n,N,p),_($r,N,null),e(N,H1),e(N,En),e(En,Q1),e(En,Xc),e(Xc,V1),e(En,J1),e(En,Hc),e(Hc,K1),e(En,Z1),e(N,Y1),e(N,qr),e(qr,eT),e(qr,$i),e($i,tT),e(qr,nT),e(N,oT),e(N,jr),e(jr,aT),e(jr,Er),e(Er,sT),e(jr,rT),e(N,iT),e(N,Qc),e(Qc,dT),e(N,lT),e(N,_t),e(_t,Vc),e(Vc,Pr),e(Pr,cT),e(_t,pT),e(_t,Jc),e(Jc,Cr),e(Cr,hT),e(_t,uT),e(_t,Kc),e(Kc,Sr),e(Sr,mT),e(_t,fT),e(_t,Zc),e(Zc,Ar),e(Ar,_T),e(N,gT),e(N,De),_(Ir,De,null),e(De,kT),e(De,Pn),e(Pn,bT),e(Pn,Yc),e(Yc,vT),e(Pn,yT),e(Pn,ep),e(ep,TT),e(Pn,MT),e(De,xT),_(vo,De,null),e(De,wT),e(De,tp),e(tp,zT),e(De,BT),_(Nr,De,null),e(N,FT),e(N,$t),_(Or,$t,null),e($t,$T),e($t,np),e(np,qT),e($t,jT),_(Dr,$t,null),e(N,ET),e(N,qt),_(Lr,qt,null),e(qt,PT),e(qt,op),e(op,CT),e(qt,ST),_(Gr,qt,null),ih=!0},p(n,[p]){const Rr={};p&2&&(Rr.$$scope={dirty:p,ctx:n}),Zn.$set(Rr);const ap={};p&2&&(ap.$$scope={dirty:p,ctx:n}),eo.$set(ap);const sp={};p&2&&(sp.$$scope={dirty:p,ctx:n}),no.$set(sp);const rp={};p&2&&(rp.$$scope={dirty:p,ctx:n}),ao.$set(rp);const yo={};p&2&&(yo.$$scope={dirty:p,ctx:n}),io.$set(yo);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:n}),lo.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:n}),po.$set(dp);const Wr={};p&2&&(Wr.$$scope={dirty:p,ctx:n}),ho.$set(Wr);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:n}),mo.$set(lp);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:n}),_o.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:n}),ko.$set(pp);const Ur={};p&2&&(Ur.$$scope={dirty:p,ctx:n}),vo.$set(Ur)},i(n){ih||(g(T.$$.fragment,n),g(ae.$$.fragment,n),g(He.$$.fragment,n),g(Eo.$$.fragment,n),g(Co.$$.fragment,n),g(So.$$.fragment,n),g(Io.$$.fragment,n),g(No.$$.fragment,n),g(Do.$$.fragment,n),g(Lo.$$.fragment,n),g(Go.$$.fragment,n),g(Wo.$$.fragment,n),g(Uo.$$.fragment,n),g(Xo.$$.fragment,n),g(Qo.$$.fragment,n),g(Vo.$$.fragment,n),g(Jo.$$.fragment,n),g(ta.$$.fragment,n),g(na.$$.fragment,n),g(sa.$$.fragment,n),g(ra.$$.fragment,n),g(pa.$$.fragment,n),g(ha.$$.fragment,n),g(ua.$$.fragment,n),g(ma.$$.fragment,n),g(ka.$$.fragment,n),g(ba.$$.fragment,n),g(xa.$$.fragment,n),g(wa.$$.fragment,n),g(Ba.$$.fragment,n),g(Fa.$$.fragment,n),g($a.$$.fragment,n),g(qa.$$.fragment,n),g(Pa.$$.fragment,n),g(Ca.$$.fragment,n),g(Oa.$$.fragment,n),g(Da.$$.fragment,n),g(La.$$.fragment,n),g(Ga.$$.fragment,n),g(Xa.$$.fragment,n),g(Zn.$$.fragment,n),g(Ha.$$.fragment,n),g(Qa.$$.fragment,n),g(Va.$$.fragment,n),g(Ya.$$.fragment,n),g(eo.$$.fragment,n),g(es.$$.fragment,n),g(ts.$$.fragment,n),g(ns.$$.fragment,n),g(os.$$.fragment,n),g(is.$$.fragment,n),g(no.$$.fragment,n),g(ds.$$.fragment,n),g(ls.$$.fragment,n),g(cs.$$.fragment,n),g(ms.$$.fragment,n),g(ao.$$.fragment,n),g(fs.$$.fragment,n),g(_s.$$.fragment,n),g(gs.$$.fragment,n),g(bs.$$.fragment,n),g(vs.$$.fragment,n),g(ys.$$.fragment,n),g(Ts.$$.fragment,n),g(io.$$.fragment,n),g(zs.$$.fragment,n),g(lo.$$.fragment,n),g(Bs.$$.fragment,n),g(Fs.$$.fragment,n),g($s.$$.fragment,n),g(po.$$.fragment,n),g(Ps.$$.fragment,n),g(ho.$$.fragment,n),g(Cs.$$.fragment,n),g(Ss.$$.fragment,n),g(As.$$.fragment,n),g(Is.$$.fragment,n),g(Us.$$.fragment,n),g(mo.$$.fragment,n),g(Xs.$$.fragment,n),g(Hs.$$.fragment,n),g(Qs.$$.fragment,n),g(Vs.$$.fragment,n),g(Js.$$.fragment,n),g(Ks.$$.fragment,n),g(Zs.$$.fragment,n),g(rr.$$.fragment,n),g(_o.$$.fragment,n),g(ir.$$.fragment,n),g(dr.$$.fragment,n),g(lr.$$.fragment,n),g(cr.$$.fragment,n),g(pr.$$.fragment,n),g(hr.$$.fragment,n),g(ur.$$.fragment,n),g(mr.$$.fragment,n),g(Tr.$$.fragment,n),g(ko.$$.fragment,n),g(Mr.$$.fragment,n),g(xr.$$.fragment,n),g(wr.$$.fragment,n),g(zr.$$.fragment,n),g(Br.$$.fragment,n),g(Fr.$$.fragment,n),g($r.$$.fragment,n),g(Ir.$$.fragment,n),g(vo.$$.fragment,n),g(Nr.$$.fragment,n),g(Or.$$.fragment,n),g(Dr.$$.fragment,n),g(Lr.$$.fragment,n),g(Gr.$$.fragment,n),ih=!0)},o(n){k(T.$$.fragment,n),k(ae.$$.fragment,n),k(He.$$.fragment,n),k(Eo.$$.fragment,n),k(Co.$$.fragment,n),k(So.$$.fragment,n),k(Io.$$.fragment,n),k(No.$$.fragment,n),k(Do.$$.fragment,n),k(Lo.$$.fragment,n),k(Go.$$.fragment,n),k(Wo.$$.fragment,n),k(Uo.$$.fragment,n),k(Xo.$$.fragment,n),k(Qo.$$.fragment,n),k(Vo.$$.fragment,n),k(Jo.$$.fragment,n),k(ta.$$.fragment,n),k(na.$$.fragment,n),k(sa.$$.fragment,n),k(ra.$$.fragment,n),k(pa.$$.fragment,n),k(ha.$$.fragment,n),k(ua.$$.fragment,n),k(ma.$$.fragment,n),k(ka.$$.fragment,n),k(ba.$$.fragment,n),k(xa.$$.fragment,n),k(wa.$$.fragment,n),k(Ba.$$.fragment,n),k(Fa.$$.fragment,n),k($a.$$.fragment,n),k(qa.$$.fragment,n),k(Pa.$$.fragment,n),k(Ca.$$.fragment,n),k(Oa.$$.fragment,n),k(Da.$$.fragment,n),k(La.$$.fragment,n),k(Ga.$$.fragment,n),k(Xa.$$.fragment,n),k(Zn.$$.fragment,n),k(Ha.$$.fragment,n),k(Qa.$$.fragment,n),k(Va.$$.fragment,n),k(Ya.$$.fragment,n),k(eo.$$.fragment,n),k(es.$$.fragment,n),k(ts.$$.fragment,n),k(ns.$$.fragment,n),k(os.$$.fragment,n),k(is.$$.fragment,n),k(no.$$.fragment,n),k(ds.$$.fragment,n),k(ls.$$.fragment,n),k(cs.$$.fragment,n),k(ms.$$.fragment,n),k(ao.$$.fragment,n),k(fs.$$.fragment,n),k(_s.$$.fragment,n),k(gs.$$.fragment,n),k(bs.$$.fragment,n),k(vs.$$.fragment,n),k(ys.$$.fragment,n),k(Ts.$$.fragment,n),k(io.$$.fragment,n),k(zs.$$.fragment,n),k(lo.$$.fragment,n),k(Bs.$$.fragment,n),k(Fs.$$.fragment,n),k($s.$$.fragment,n),k(po.$$.fragment,n),k(Ps.$$.fragment,n),k(ho.$$.fragment,n),k(Cs.$$.fragment,n),k(Ss.$$.fragment,n),k(As.$$.fragment,n),k(Is.$$.fragment,n),k(Us.$$.fragment,n),k(mo.$$.fragment,n),k(Xs.$$.fragment,n),k(Hs.$$.fragment,n),k(Qs.$$.fragment,n),k(Vs.$$.fragment,n),k(Js.$$.fragment,n),k(Ks.$$.fragment,n),k(Zs.$$.fragment,n),k(rr.$$.fragment,n),k(_o.$$.fragment,n),k(ir.$$.fragment,n),k(dr.$$.fragment,n),k(lr.$$.fragment,n),k(cr.$$.fragment,n),k(pr.$$.fragment,n),k(hr.$$.fragment,n),k(ur.$$.fragment,n),k(mr.$$.fragment,n),k(Tr.$$.fragment,n),k(ko.$$.fragment,n),k(Mr.$$.fragment,n),k(xr.$$.fragment,n),k(wr.$$.fragment,n),k(zr.$$.fragment,n),k(Br.$$.fragment,n),k(Fr.$$.fragment,n),k($r.$$.fragment,n),k(Ir.$$.fragment,n),k(vo.$$.fragment,n),k(Nr.$$.fragment,n),k(Or.$$.fragment,n),k(Dr.$$.fragment,n),k(Lr.$$.fragment,n),k(Gr.$$.fragment,n),ih=!1},d(n){t(u),n&&t(z),n&&t(v),b(T),n&&t(je),n&&t(j),n&&t(Ke),n&&t(Q),b(ae),n&&t(ce),n&&t(pe),n&&t(D),n&&t(Ee),n&&t(Ze),n&&t(se),n&&t(Ye),n&&t(x),b(He),n&&t(gt),n&&t(X),n&&t(up),n&&t(kt),n&&t(mp),n&&t(Vr),n&&t(fp),b(Eo,n),n&&t(_p),n&&t(Jr),n&&t(gp),b(Co,n),n&&t(kp),n&&t(Yt),b(So),n&&t(bp),n&&t(bt),n&&t(vp),n&&t(Zr),n&&t(yp),n&&t(Yr),n&&t(Tp),n&&t(en),b(Io),n&&t(Mp),n&&t(et),n&&t(xp),n&&t(An),n&&t(wp),n&&t(ti),n&&t(zp),b(No,n),n&&t(Bp),n&&t(ni),n&&t(Fp),b(Do,n),n&&t($p),n&&t(tn),b(Lo),n&&t(qp),n&&t(ze),b(Go),b(Wo),n&&t(jp),n&&t(an),b(Uo),n&&t(Ep),n&&t(L),b(Xo),b(Qo),b(Vo),b(Jo),n&&t(Pp),n&&t(sn),b(ta),n&&t(Cp),n&&t(A),b(na),b(sa),b(ra),b(pa),b(ha),n&&t(Sp),n&&t(dn),b(ua),n&&t(Ap),n&&t(C),b(ma),b(ka),b(ba),b(xa),b(wa),b(Ba),b(Fa),n&&t(Ip),n&&t(ln),b($a),n&&t(Np),n&&t(G),b(qa),b(Pa),b(Ca),b(Oa),b(Da),n&&t(Op),n&&t(pn),b(La),n&&t(Dp),n&&t(Ve),b(Ga),b(Xa),b(Zn),b(Ha),n&&t(Lp),n&&t(un),b(Qa),n&&t(Gp),n&&t(Je),b(Va),b(Ya),b(eo),b(es),b(ts),n&&t(Rp),n&&t(fn),b(ns),n&&t(Wp),n&&t(Be),b(os),b(is),b(no),b(ds),n&&t(Up),n&&t(kn),b(ls),n&&t(Xp),n&&t(Fe),b(cs),b(ms),b(ao),b(fs),b(_s),n&&t(Hp),n&&t(vn),b(gs),n&&t(Qp),n&&t(ks),b(bs),b(vs),n&&t(Vp),n&&t(yn),b(ys),n&&t(Jp),n&&t($e),b(Ts),b(io),b(zs),b(lo),b(Bs),n&&t(Kp),n&&t(Mn),b(Fs),n&&t(Zp),n&&t(qe),b($s),b(po),b(Ps),b(ho),b(Cs),b(Ss),n&&t(Yp),n&&t(wn),b(As),n&&t(eh),n&&t(R),b(Is),b(Us),b(mo),b(Xs),b(Hs),b(Qs),b(Vs),b(Js),n&&t(th),n&&t(Bn),b(Ks),n&&t(nh),n&&t(W),b(Zs),b(rr),b(_o),b(ir),b(dr),b(lr),b(cr),b(pr),b(hr),n&&t(oh),n&&t($n),b(ur),n&&t(ah),n&&t(I),b(mr),b(Tr),b(ko),b(Mr),b(xr),b(wr),b(zr),b(Br),n&&t(sh),n&&t(jn),b(Fr),n&&t(rh),n&&t(N),b($r),b(Ir),b(vo),b(Nr),b(Or),b(Dr),b(Lr),b(Gr)}}}const G4={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function R4(E,u,z){let{fw:v}=u;return E.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class J4 extends w4{constructor(u){super();z4(this,u,R4,L4,B4,{fw:0})}}export{J4 as default,G4 as metadata};
