import{S as h2,i as u2,s as f2,e as o,k as d,w as f,t as s,M as m2,c as n,d as t,m as l,a,x as m,h as i,b as c,F as e,g as u,y as _,q as g,o as b,B as k}from"../../chunks/vendor-ab4e3193.js";import{T as Qe}from"../../chunks/Tip-b5c6375a.js";import{D as q}from"../../chunks/Docstring-b69c0bd4.js";import{C as X}from"../../chunks/CodeBlock-516df0c5.js";import{I as D}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function _2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function g2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function b2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function k2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function v2(C){let p,B,v,x,z,T,y,F,Re,xe,$,Pe,he,He,ue,fe,Ke,Ue,K,G,Oe,oe,S,I,Ve,ie,de,Je,V,Xe,Ze,U,we,me,We,Z,ne,Ye,et,J,tt,_e,Ae;return{c(){p=o("p"),B=s("TF 2.0 models accepts two formats as inputs:"),v=d(),x=o("ul"),z=o("li"),T=s("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),F=o("li"),Re=s("having all inputs as a list, tuple or dict in the first positional arguments."),xe=d(),$=o("p"),Pe=s("This second option is useful when using "),he=o("code"),He=s("tf.keras.Model.fit"),ue=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),fe=o("code"),Ke=s("model(inputs)"),Ue=s("."),K=d(),G=o("p"),Oe=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),oe=d(),S=o("ul"),I=o("li"),Ve=s("a single Tensor with "),ie=o("code"),de=s("input_ids"),Je=s(" only and nothing else: "),V=o("code"),Xe=s("model(input_ids)"),Ze=d(),U=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),me=o("code"),We=s("model([input_ids, attention_mask])"),Z=s(" or "),ne=o("code"),Ye=s("model([input_ids, attention_mask, token_type_ids])"),et=d(),J=o("li"),tt=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=o("code"),Ae=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){p=n(w,"P",{});var E=a(p);B=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),v=l(w),x=n(w,"UL",{});var H=a(x);z=n(H,"LI",{});var Ot=a(z);T=i(Ot,"having all inputs as keyword arguments (like PyTorch models), or"),Ot.forEach(t),y=l(H),F=n(H,"LI",{});var Se=a(F);Re=i(Se,"having all inputs as a list, tuple or dict in the first positional arguments."),Se.forEach(t),H.forEach(t),xe=l(w),$=n(w,"P",{});var ae=a($);Pe=i(ae,"This second option is useful when using "),he=n(ae,"CODE",{});var At=a(he);He=i(At,"tf.keras.Model.fit"),At.forEach(t),ue=i(ae,` method which currently requires having all
the tensors in the first argument of the model call function: `),fe=n(ae,"CODE",{});var Ie=a(fe);Ke=i(Ie,"model(inputs)"),Ie.forEach(t),Ue=i(ae,"."),ae.forEach(t),K=l(w),G=n(w,"P",{});var St=a(G);Oe=i(St,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),St.forEach(t),oe=l(w),S=n(w,"UL",{});var re=a(S);I=n(re,"LI",{});var le=a(I);Ve=i(le,"a single Tensor with "),ie=n(le,"CODE",{});var ge=a(ie);de=i(ge,"input_ids"),ge.forEach(t),Je=i(le," only and nothing else: "),V=n(le,"CODE",{});var ze=a(V);Xe=i(ze,"model(input_ids)"),ze.forEach(t),le.forEach(t),Ze=l(re),U=n(re,"LI",{});var se=a(U);we=i(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),me=n(se,"CODE",{});var Ne=a(me);We=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Z=i(se," or "),ne=n(se,"CODE",{});var It=a(ne);Ye=i(It,"model([input_ids, attention_mask, token_type_ids])"),It.forEach(t),se.forEach(t),et=l(re),J=n(re,"LI",{});var Le=a(J);tt=i(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=n(Le,"CODE",{});var Nt=a(_e);Ae=i(Nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Nt.forEach(t),Le.forEach(t),re.forEach(t)},m(w,E){u(w,p,E),e(p,B),u(w,v,E),u(w,x,E),e(x,z),e(z,T),e(x,y),e(x,F),e(F,Re),u(w,xe,E),u(w,$,E),e($,Pe),e($,he),e(he,He),e($,ue),e($,fe),e(fe,Ke),e($,Ue),u(w,K,E),u(w,G,E),e(G,Oe),u(w,oe,E),u(w,S,E),e(S,I),e(I,Ve),e(I,ie),e(ie,de),e(I,Je),e(I,V),e(V,Xe),e(S,Ze),e(S,U),e(U,we),e(U,me),e(me,We),e(U,Z),e(U,ne),e(ne,Ye),e(S,et),e(S,J),e(J,tt),e(J,_e),e(_e,Ae)},d(w){w&&t(p),w&&t(v),w&&t(x),w&&t(xe),w&&t($),w&&t(K),w&&t(G),w&&t(oe),w&&t(S)}}}function y2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function T2(C){let p,B,v,x,z,T,y,F,Re,xe,$,Pe,he,He,ue,fe,Ke,Ue,K,G,Oe,oe,S,I,Ve,ie,de,Je,V,Xe,Ze,U,we,me,We,Z,ne,Ye,et,J,tt,_e,Ae;return{c(){p=o("p"),B=s("TF 2.0 models accepts two formats as inputs:"),v=d(),x=o("ul"),z=o("li"),T=s("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),F=o("li"),Re=s("having all inputs as a list, tuple or dict in the first positional arguments."),xe=d(),$=o("p"),Pe=s("This second option is useful when using "),he=o("code"),He=s("tf.keras.Model.fit"),ue=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),fe=o("code"),Ke=s("model(inputs)"),Ue=s("."),K=d(),G=o("p"),Oe=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),oe=d(),S=o("ul"),I=o("li"),Ve=s("a single Tensor with "),ie=o("code"),de=s("input_ids"),Je=s(" only and nothing else: "),V=o("code"),Xe=s("model(input_ids)"),Ze=d(),U=o("li"),we=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),me=o("code"),We=s("model([input_ids, attention_mask])"),Z=s(" or "),ne=o("code"),Ye=s("model([input_ids, attention_mask, token_type_ids])"),et=d(),J=o("li"),tt=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=o("code"),Ae=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){p=n(w,"P",{});var E=a(p);B=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),v=l(w),x=n(w,"UL",{});var H=a(x);z=n(H,"LI",{});var Ot=a(z);T=i(Ot,"having all inputs as keyword arguments (like PyTorch models), or"),Ot.forEach(t),y=l(H),F=n(H,"LI",{});var Se=a(F);Re=i(Se,"having all inputs as a list, tuple or dict in the first positional arguments."),Se.forEach(t),H.forEach(t),xe=l(w),$=n(w,"P",{});var ae=a($);Pe=i(ae,"This second option is useful when using "),he=n(ae,"CODE",{});var At=a(he);He=i(At,"tf.keras.Model.fit"),At.forEach(t),ue=i(ae,` method which currently requires having all
the tensors in the first argument of the model call function: `),fe=n(ae,"CODE",{});var Ie=a(fe);Ke=i(Ie,"model(inputs)"),Ie.forEach(t),Ue=i(ae,"."),ae.forEach(t),K=l(w),G=n(w,"P",{});var St=a(G);Oe=i(St,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),St.forEach(t),oe=l(w),S=n(w,"UL",{});var re=a(S);I=n(re,"LI",{});var le=a(I);Ve=i(le,"a single Tensor with "),ie=n(le,"CODE",{});var ge=a(ie);de=i(ge,"input_ids"),ge.forEach(t),Je=i(le," only and nothing else: "),V=n(le,"CODE",{});var ze=a(V);Xe=i(ze,"model(input_ids)"),ze.forEach(t),le.forEach(t),Ze=l(re),U=n(re,"LI",{});var se=a(U);we=i(se,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),me=n(se,"CODE",{});var Ne=a(me);We=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Z=i(se," or "),ne=n(se,"CODE",{});var It=a(ne);Ye=i(It,"model([input_ids, attention_mask, token_type_ids])"),It.forEach(t),se.forEach(t),et=l(re),J=n(re,"LI",{});var Le=a(J);tt=i(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=n(Le,"CODE",{});var Nt=a(_e);Ae=i(Nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Nt.forEach(t),Le.forEach(t),re.forEach(t)},m(w,E){u(w,p,E),e(p,B),u(w,v,E),u(w,x,E),e(x,z),e(z,T),e(x,y),e(x,F),e(F,Re),u(w,xe,E),u(w,$,E),e($,Pe),e($,he),e(he,He),e($,ue),e($,fe),e(fe,Ke),e($,Ue),u(w,K,E),u(w,G,E),e(G,Oe),u(w,oe,E),u(w,S,E),e(S,I),e(I,Ve),e(I,ie),e(ie,de),e(I,Je),e(I,V),e(V,Xe),e(S,Ze),e(S,U),e(U,we),e(U,me),e(me,We),e(U,Z),e(U,ne),e(ne,Ye),e(S,et),e(S,J),e(J,tt),e(J,_e),e(_e,Ae)},d(w){w&&t(p),w&&t(v),w&&t(x),w&&t(xe),w&&t($),w&&t(K),w&&t(G),w&&t(oe),w&&t(S)}}}function x2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function w2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function z2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function B2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function F2(C){let p,B,v,x,z;return{c(){p=o("p"),B=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),x=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=n(T,"P",{});var y=a(p);B=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var F=a(v);x=i(F,"Module"),F.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,B),e(p,v),e(v,x),e(p,z)},d(T){T&&t(p)}}}function q2(C){let p,B,v,x,z,T,y,F,Re,xe,$,Pe,he,He,ue,fe,Ke,Ue,K,G,Oe,oe,S,I,Ve,ie,de,Je,V,Xe,Ze,U,we,me,We,Z,ne,Ye,et,J,tt,_e,Ae,w,E,H,Ot,Se,ae,At,Ie,St,re,le,ge,ze,se,Ne,It,Le,Nt,Lc,ct,un,fh,fn,mh,_h,gh,ot,bh,Nr,kh,vh,Ks,yh,Th,mn,xh,wh,zh,vo,_n,Bh,Fh,gn,qh,$h,Dc,Lt,yo,Vs,bn,Eh,Js,Mh,Gc,Be,nt,jh,Xs,Ch,Ph,Lr,Oh,Ah,Dr,Sh,Ih,Nh,Dt,Lh,Gr,Dh,Gh,Zs,Uh,Wh,Qh,Gt,Rh,Ys,Hh,Kh,ei,Vh,Jh,Xh,Ur,Wr,Zh,Yh,eu,Ut,tu,ti,ou,nu,oi,au,ru,Uc,Wt,To,ni,kn,su,ai,iu,Wc,pt,du,ri,lu,cu,si,pu,hu,Qc,vn,Rc,Qt,xo,ii,yn,uu,di,fu,Hc,be,Tn,mu,Rt,_u,Qr,gu,bu,xn,ku,vu,yu,Ht,Tu,Rr,xu,wu,Hr,zu,Bu,Fu,li,qu,$u,wn,Kc,Kt,wo,ci,zn,Eu,pi,Mu,Vc,at,Bn,ju,hi,Cu,Pu,ht,Kr,Ou,Au,Vr,Su,Iu,Jr,Nu,Lu,Jc,Vt,zo,ui,Fn,Du,fi,Gu,Xc,rt,qn,Uu,$n,Wu,mi,Qu,Ru,Hu,ut,Xr,Ku,Vu,Zr,Ju,Xu,Yr,Zu,Yu,Zc,Jt,Bo,_i,En,ef,gi,tf,Yc,De,Mn,of,jn,nf,es,af,rf,sf,Cn,df,Pn,lf,cf,pf,Fe,On,hf,Xt,uf,ts,ff,mf,bi,_f,gf,bf,Fo,kf,ki,vf,yf,An,ep,Zt,qo,vi,Sn,Tf,yi,xf,tp,Ge,In,wf,Nn,zf,os,Bf,Ff,qf,Ln,$f,Dn,Ef,Mf,jf,M,Gn,Cf,Yt,Pf,ns,Of,Af,Ti,Sf,If,Nf,$o,Lf,xi,Df,Gf,wi,zi,Bi,Fi,Uf,Wf,qi,$i,Ei,Mi,Qf,Rf,ji,Ci,Pi,Oi,Hf,Kf,Ai,Si,Un,Eo,Mo,Ii,Wn,Vf,Ni,Jf,Xf,Li,Zf,Yf,Di,em,tm,Gi,Ui,Wi,Qi,om,nm,Ri,Hi,Ki,Vi,am,rm,Ji,Xi,Zi,Yi,sm,im,ed,td,od,nd,dm,op,eo,jo,ad,Qn,lm,rd,cm,np,ke,Rn,pm,sd,hm,um,Hn,fm,as,mm,_m,gm,Kn,bm,Vn,km,vm,ym,Y,Jn,Tm,to,xm,rs,wm,zm,id,Bm,Fm,qm,Co,$m,dd,Em,Mm,Xn,jm,ld,Cm,Pm,Zn,ap,oo,Po,cd,Yn,Om,pd,Am,rp,ve,ea,Sm,no,Im,hd,Nm,Lm,ud,Dm,Gm,Um,ta,Wm,ss,Qm,Rm,Hm,oa,Km,na,Vm,Jm,Xm,qe,aa,Zm,ao,Ym,is,e_,t_,fd,o_,n_,a_,Oo,r_,md,s_,i_,ra,sp,ro,Ao,_d,sa,d_,gd,l_,ip,ia,ft,da,c_,bd,p_,h_,la,dp,so,So,kd,ca,u_,vd,f_,lp,ye,pa,m_,ha,__,ds,g_,b_,k_,ua,v_,fa,y_,T_,x_,Io,w_,$e,ma,z_,io,B_,ls,F_,q_,yd,$_,E_,M_,No,j_,Td,C_,P_,_a,cp,lo,Lo,xd,ga,O_,wd,A_,pp,Te,ba,S_,ka,I_,cs,N_,L_,D_,va,G_,ya,U_,W_,Q_,Do,R_,P,Ta,H_,co,K_,ps,V_,J_,zd,X_,Z_,Y_,Go,eg,Bd,tg,og,Fd,qd,$d,Ed,ng,ag,Md,jd,Cd,Pd,rg,sg,Od,Ad,Sd,Id,ig,dg,Nd,Ld,xa,Uo,Wo,Dd,wa,lg,Gd,cg,pg,Ud,hg,ug,Wd,fg,mg,Qd,Rd,Hd,Kd,_g,gg,Vd,Jd,za,Xd,bg,kg,Qo,Ro,Zd,Ba,vg,Yd,yg,hp,po,Ho,el,Fa,Tg,tl,xg,up,Q,qa,wg,$a,zg,hs,Bg,Fg,qg,Ea,$g,Ma,Eg,Mg,jg,ol,Cg,Pg,st,nl,ja,Og,Ag,al,Ca,Sg,Ig,rl,Pa,Ng,Lg,sl,Oa,Dg,Gg,Ee,Aa,Ug,ho,Wg,il,Qg,Rg,dl,Hg,Kg,Vg,Ko,Jg,ll,Xg,Zg,Sa,Yg,mt,Ia,eb,cl,tb,ob,Na,nb,_t,La,ab,pl,rb,sb,Da,fp,uo,Vo,hl,Ga,ib,ul,db,mp,R,Ua,lb,Wa,cb,us,pb,hb,ub,Qa,fb,Ra,mb,_b,gb,fl,bb,kb,it,ml,Ha,vb,yb,_l,Ka,Tb,xb,gl,Va,wb,zb,bl,Ja,Bb,Fb,j,Xa,qb,fo,$b,kl,Eb,Mb,vl,jb,Cb,Pb,Jo,Ob,yl,Ab,Sb,Tl,xl,wl,zl,Ib,Nb,Bl,Fl,ql,$l,Lb,Db,El,Ml,jl,Cl,Gb,Ub,Pl,Ol,Za,Xo,Zo,Al,Ya,Wb,Sl,Qb,Rb,Il,Hb,Kb,Nl,Vb,Jb,Ll,Dl,Gl,Ul,Xb,Zb,Wl,Ql,Rl,Hl,Yb,ek,Kl,Vl,Jl,Xl,tk,ok,Zl,Yl,ec,tc,nk,ak,gt,er,rk,oc,sk,ik,tr,dk,bt,or,lk,nc,ck,pk,nr,_p,mo,Yo,ac,ar,hk,rc,uk,gp,N,rr,fk,sc,mk,_k,sr,gk,fs,bk,kk,vk,ir,yk,dr,Tk,xk,wk,ic,zk,Bk,dt,dc,lr,Fk,qk,lc,cr,$k,Ek,cc,pr,Mk,jk,pc,hr,Ck,Pk,Me,ur,Ok,_o,Ak,hc,Sk,Ik,uc,Nk,Lk,Dk,en,Gk,fc,Uk,Wk,fr,Qk,kt,mr,Rk,mc,Hk,Kk,_r,Vk,vt,gr,Jk,_c,Xk,Zk,br,bp,go,tn,gc,kr,Yk,bc,ev,kp,L,vr,tv,bo,ov,kc,nv,av,vc,rv,sv,iv,yr,dv,ms,lv,cv,pv,Tr,hv,xr,uv,fv,mv,yc,_v,gv,lt,Tc,wr,bv,kv,xc,zr,vv,yv,wc,Br,Tv,xv,zc,Fr,wv,zv,je,qr,Bv,ko,Fv,Bc,qv,$v,Fc,Ev,Mv,jv,on,Cv,qc,Pv,Ov,$r,Av,yt,Er,Sv,$c,Iv,Nv,Mr,Lv,Tt,jr,Dv,Ec,Gv,Uv,Cr,vp;return T=new D({}),oe=new D({}),Ne=new D({}),bn=new D({}),kn=new D({}),vn=new X({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer
model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors='pt')
generated_ids = model.generate(batch['input_ids'])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == ['UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria'],`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer
model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&#x27;input_ids&#x27;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [<span class="hljs-string">&#x27;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&#x27;</span>]`}}),yn=new D({}),Tn=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/configuration_bart.py#L36",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartModel">BartModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),wn=new X({props:{code:`from transformers import BartModel, BartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),zn=new D({}),Bn=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/tokenization_bart.py#L55"}}),Fn=new D({}),qn=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/tokenization_bart_fast.py#L64"}}),En=new D({}),Mn=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1118",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),On=new q({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1145",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new Qe({props:{$$slots:{default:[_2]},$$scope:{ctx:C}}}),An=new X({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = BartModel.from_pretrained('facebook/bart-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Sn=new D({}),In=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1244",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1283",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new Qe({props:{$$slots:{default:[g2]},$$scope:{ctx:C}}}),Wn=new D({}),Qn=new D({}),Rn=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1409",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1422",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Qe({props:{$$slots:{default:[b2]},$$scope:{ctx:C}}}),Xn=new X({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = BartForSequenceClassification.from_pretrained('facebook/bart-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0) # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zn=new X({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
import torch

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = BartForSequenceClassification.from_pretrained('facebook/bart-large', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Yn=new D({}),ea=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1533",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),aa=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1545",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Qe({props:{$$slots:{default:[k2]},$$scope:{ctx:C}}}),ra=new X({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = BartForQuestionAnswering.from_pretrained('facebook/bart-large')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),sa=new D({}),da=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_bart.py#L1692",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),la=new X({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = BartForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ca=new D({}),pa=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_tf_bart.py#L1180",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Io=new Qe({props:{$$slots:{default:[v2]},$$scope:{ctx:C}}}),ma=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_tf_bart.py#L1195",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),No=new Qe({props:{$$slots:{default:[y2]},$$scope:{ctx:C}}}),_a=new X({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained('facebook/bart-large')
model = TFBartModel.from_pretrained('facebook/bart-large')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ga=new D({}),ba=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_tf_bart.py#L1289",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Do=new Qe({props:{$$slots:{default:[T2]},$$scope:{ctx:C}}}),Ta=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_tf_bart.py#L1324",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Qe({props:{$$slots:{default:[x2]},$$scope:{ctx:C}}}),wa=new D({}),Ba=new D({}),Fa=new D({}),qa=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1243",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Aa=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1178",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new Qe({props:{$$slots:{default:[w2]},$$scope:{ctx:C}}}),Sa=new X({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')
model = FlaxBartModel.from_pretrained('facebook/bart-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ia=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Na=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),La=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Da=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ga=new D({}),Ua=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1329",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Xa=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1178",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Qe({props:{$$slots:{default:[z2]},$$scope:{ctx:C}}}),Ya=new D({}),er=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),or=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1333",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nr=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ar=new D({}),rr=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1635",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ur=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1178",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new Qe({props:{$$slots:{default:[B2]},$$scope:{ctx:C}}}),fr=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')
model = FlaxBartForSequenceClassification.from_pretrained('facebook/bart-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),mr=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),gr=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),br=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),kr=new D({}),vr=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1722",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),qr=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1178",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new Qe({props:{$$slots:{default:[F2]},$$scope:{ctx:C}}}),$r=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')
model = FlaxBartForQuestionAnswering.from_pretrained('facebook/bart-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='jax')

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Er=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mr=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),jr=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new X({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large-cnn&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("meta"),B=d(),v=o("h1"),x=o("a"),z=o("span"),f(T.$$.fragment),y=d(),F=o("span"),Re=s("BART"),xe=d(),$=o("p"),Pe=o("strong"),he=s("DISCLAIMER:"),He=s(" If you see something strange, file a "),ue=o("a"),fe=s("Github Issue"),Ke=s(` and assign
@patrickvonplaten`),Ue=d(),K=o("h2"),G=o("a"),Oe=o("span"),f(oe.$$.fragment),S=d(),I=o("span"),Ve=s("Overview"),ie=d(),de=o("p"),Je=s("The Bart model was proposed in "),V=o("a"),Xe=s(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ze=s(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),U=d(),we=o("p"),me=s("According to the abstract,"),We=d(),Z=o("ul"),ne=o("li"),Ye=s(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),et=d(),J=o("li"),tt=s(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),_e=d(),Ae=o("li"),w=s(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),E=d(),H=o("p"),Ot=s("This model was contributed by "),Se=o("a"),ae=s("sshleifer"),At=s(". The Authors\u2019 code can be found "),Ie=o("a"),St=s("here"),re=s("."),le=d(),ge=o("h3"),ze=o("a"),se=o("span"),f(Ne.$$.fragment),It=d(),Le=o("span"),Nt=s("Examples"),Lc=d(),ct=o("ul"),un=o("li"),fh=s(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),fn=o("a"),mh=s("examples/pytorch/summarization/"),_h=s("."),gh=d(),ot=o("li"),bh=s("An example of how to train "),Nr=o("a"),kh=s("BartForConditionalGeneration"),vh=s(" with a Hugging Face "),Ks=o("code"),yh=s("datasets"),Th=s(`
object can be found in this `),mn=o("a"),xh=s("forum discussion"),wh=s("."),zh=d(),vo=o("li"),_n=o("a"),Bh=s("Distilled checkpoints"),Fh=s(" are described in this "),gn=o("a"),qh=s("paper"),$h=s("."),Dc=d(),Lt=o("h2"),yo=o("a"),Vs=o("span"),f(bn.$$.fragment),Eh=d(),Js=o("span"),Mh=s("Implementation Notes"),Gc=d(),Be=o("ul"),nt=o("li"),jh=s("Bart doesn\u2019t use "),Xs=o("code"),Ch=s("token_type_ids"),Ph=s(" for sequence classification. Use "),Lr=o("a"),Oh=s("BartTokenizer"),Ah=s(` or
`),Dr=o("a"),Sh=s("encode()"),Ih=s(" to get the proper splitting."),Nh=d(),Dt=o("li"),Lh=s("The forward pass of "),Gr=o("a"),Dh=s("BartModel"),Gh=s(" will create the "),Zs=o("code"),Uh=s("decoder_input_ids"),Wh=s(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Qh=d(),Gt=o("li"),Rh=s(`Model predictions are intended to be identical to the original implementation when
`),Ys=o("code"),Hh=s("force_bos_token_to_be_generated=True"),Kh=s(`. This only works, however, if the string you pass to
`),ei=o("code"),Vh=s("fairseq.encode"),Jh=s(" starts with a space."),Xh=d(),Ur=o("li"),Wr=o("a"),Zh=s("generate()"),Yh=s(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),eu=d(),Ut=o("li"),tu=s("Models that load the "),ti=o("em"),ou=s("facebook/bart-large-cnn"),nu=s(" weights will not have a "),oi=o("code"),au=s("mask_token_id"),ru=s(`, or be able to perform
mask-filling tasks.`),Uc=d(),Wt=o("h2"),To=o("a"),ni=o("span"),f(kn.$$.fragment),su=d(),ai=o("span"),iu=s("Mask Filling"),Wc=d(),pt=o("p"),du=s("The "),ri=o("code"),lu=s("facebook/bart-base"),cu=s(" and "),si=o("code"),pu=s("facebook/bart-large"),hu=s(" checkpoints can be used to fill multi-token masks."),Qc=d(),f(vn.$$.fragment),Rc=d(),Qt=o("h2"),xo=o("a"),ii=o("span"),f(yn.$$.fragment),uu=d(),di=o("span"),fu=s("BartConfig"),Hc=d(),be=o("div"),f(Tn.$$.fragment),mu=d(),Rt=o("p"),_u=s("This is the configuration class to store the configuration of a "),Qr=o("a"),gu=s("BartModel"),bu=s(`. It is used to
instantiate a BART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BART `),xn=o("a"),ku=s("facebook/bart-large"),vu=s(" architecture."),yu=d(),Ht=o("p"),Tu=s("Configuration objects inherit from "),Rr=o("a"),xu=s("PretrainedConfig"),wu=s(` and can be used to control the model
outputs. Read the documentation from `),Hr=o("a"),zu=s("PretrainedConfig"),Bu=s(" for more information."),Fu=d(),li=o("p"),qu=s("Example:"),$u=d(),f(wn.$$.fragment),Kc=d(),Kt=o("h2"),wo=o("a"),ci=o("span"),f(zn.$$.fragment),Eu=d(),pi=o("span"),Mu=s("BartTokenizer"),Vc=d(),at=o("div"),f(Bn.$$.fragment),ju=d(),hi=o("p"),Cu=s("Construct a BART tokenizer."),Pu=d(),ht=o("p"),Kr=o("a"),Ou=s("BartTokenizer"),Au=s(" is identical to "),Vr=o("a"),Su=s("RobertaTokenizer"),Iu=s(`. Refer to superclass
`),Jr=o("a"),Nu=s("RobertaTokenizer"),Lu=s(` for usage examples and documentation concerning the initialization
parameters and other methods.`),Jc=d(),Vt=o("h2"),zo=o("a"),ui=o("span"),f(Fn.$$.fragment),Du=d(),fi=o("span"),Gu=s("BartTokenizerFast"),Xc=d(),rt=o("div"),f(qn.$$.fragment),Uu=d(),$n=o("p"),Wu=s("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),mi=o("em"),Qu=s("tokenizers"),Ru=s(" library)."),Hu=d(),ut=o("p"),Xr=o("a"),Ku=s("BartTokenizerFast"),Vu=s(" is identical to "),Zr=o("a"),Ju=s("RobertaTokenizerFast"),Xu=s(`. Refer to
superclass `),Yr=o("a"),Zu=s("RobertaTokenizerFast"),Yu=s(` for usage examples and documentation concerning the
initialization parameters and other methods.`),Zc=d(),Jt=o("h2"),Bo=o("a"),_i=o("span"),f(En.$$.fragment),ef=d(),gi=o("span"),tf=s("BartModel"),Yc=d(),De=o("div"),f(Mn.$$.fragment),of=d(),jn=o("p"),nf=s(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=o("a"),af=s("PreTrainedModel"),rf=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),sf=d(),Cn=o("p"),df=s("This model is also a PyTorch "),Pn=o("a"),lf=s("torch.nn.Module"),cf=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),pf=d(),Fe=o("div"),f(On.$$.fragment),hf=d(),Xt=o("p"),uf=s("The "),ts=o("a"),ff=s("BartModel"),mf=s(" forward method, overrides the "),bi=o("code"),_f=s("__call__"),gf=s(" special method."),bf=d(),f(Fo.$$.fragment),kf=d(),ki=o("p"),vf=s("Example:"),yf=d(),f(An.$$.fragment),ep=d(),Zt=o("h2"),qo=o("a"),vi=o("span"),f(Sn.$$.fragment),Tf=d(),yi=o("span"),xf=s("BartForConditionalGeneration"),tp=d(),Ge=o("div"),f(In.$$.fragment),wf=d(),Nn=o("p"),zf=s(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),os=o("a"),Bf=s("PreTrainedModel"),Ff=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),qf=d(),Ln=o("p"),$f=s("This model is also a PyTorch "),Dn=o("a"),Ef=s("torch.nn.Module"),Mf=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),jf=d(),M=o("div"),f(Gn.$$.fragment),Cf=d(),Yt=o("p"),Pf=s("The "),ns=o("a"),Of=s("BartForConditionalGeneration"),Af=s(" forward method, overrides the "),Ti=o("code"),Sf=s("__call__"),If=s(" special method."),Nf=d(),f($o.$$.fragment),Lf=d(),xi=o("p"),Df=s("Summarization example::"),Gf=d(),wi=o("blockquote"),zi=o("blockquote"),Bi=o("blockquote"),Fi=o("p"),Uf=s("from transformers import BartTokenizer, BartForConditionalGeneration, BartConfig"),Wf=d(),qi=o("blockquote"),$i=o("blockquote"),Ei=o("blockquote"),Mi=o("p"),Qf=s(`model = BartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large-cnn\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large-cnn\u2019)`),Rf=d(),ji=o("blockquote"),Ci=o("blockquote"),Pi=o("blockquote"),Oi=o("p"),Hf=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),Kf=d(),Ai=o("blockquote"),Si=o("blockquote"),Un=o("blockquote"),Eo=o("h1"),Mo=o("a"),Ii=o("span"),f(Wn.$$.fragment),Vf=d(),Ni=o("span"),Jf=s("Generate Summary"),Xf=d(),Li=o("p"),Zf=s(`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),Yf=d(),Di=o("p"),em=s("Mask filling example::"),tm=d(),Gi=o("blockquote"),Ui=o("blockquote"),Wi=o("blockquote"),Qi=o("p"),om=s(`from transformers import BartTokenizer, BartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),nm=d(),Ri=o("blockquote"),Hi=o("blockquote"),Ki=o("blockquote"),Vi=o("p"),am=s(`model = BartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),rm=d(),Ji=o("blockquote"),Xi=o("blockquote"),Zi=o("blockquote"),Yi=o("p"),sm=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),im=d(),ed=o("blockquote"),td=o("blockquote"),od=o("blockquote"),nd=o("p"),dm=s("tokenizer.decode(predictions).split()"),op=d(),eo=o("h2"),jo=o("a"),ad=o("span"),f(Qn.$$.fragment),lm=d(),rd=o("span"),cm=s("BartForSequenceClassification"),np=d(),ke=o("div"),f(Rn.$$.fragment),pm=d(),sd=o("p"),hm=s(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),um=d(),Hn=o("p"),fm=s("This model inherits from "),as=o("a"),mm=s("PreTrainedModel"),_m=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),gm=d(),Kn=o("p"),bm=s("This model is also a PyTorch "),Vn=o("a"),km=s("torch.nn.Module"),vm=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ym=d(),Y=o("div"),f(Jn.$$.fragment),Tm=d(),to=o("p"),xm=s("The "),rs=o("a"),wm=s("BartForSequenceClassification"),zm=s(" forward method, overrides the "),id=o("code"),Bm=s("__call__"),Fm=s(" special method."),qm=d(),f(Co.$$.fragment),$m=d(),dd=o("p"),Em=s("Example of single-label classification:"),Mm=d(),f(Xn.$$.fragment),jm=d(),ld=o("p"),Cm=s("Example of multi-label classification:"),Pm=d(),f(Zn.$$.fragment),ap=d(),oo=o("h2"),Po=o("a"),cd=o("span"),f(Yn.$$.fragment),Om=d(),pd=o("span"),Am=s("BartForQuestionAnswering"),rp=d(),ve=o("div"),f(ea.$$.fragment),Sm=d(),no=o("p"),Im=s(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),hd=o("code"),Nm=s("span start logits"),Lm=s(" and "),ud=o("code"),Dm=s("span end logits"),Gm=s(")."),Um=d(),ta=o("p"),Wm=s("This model inherits from "),ss=o("a"),Qm=s("PreTrainedModel"),Rm=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Hm=d(),oa=o("p"),Km=s("This model is also a PyTorch "),na=o("a"),Vm=s("torch.nn.Module"),Jm=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Xm=d(),qe=o("div"),f(aa.$$.fragment),Zm=d(),ao=o("p"),Ym=s("The "),is=o("a"),e_=s("BartForQuestionAnswering"),t_=s(" forward method, overrides the "),fd=o("code"),o_=s("__call__"),n_=s(" special method."),a_=d(),f(Oo.$$.fragment),r_=d(),md=o("p"),s_=s("Example:"),i_=d(),f(ra.$$.fragment),sp=d(),ro=o("h2"),Ao=o("a"),_d=o("span"),f(sa.$$.fragment),d_=d(),gd=o("span"),l_=s("BartForCausalLM"),ip=d(),ia=o("div"),ft=o("div"),f(da.$$.fragment),c_=d(),bd=o("p"),p_=s("Example:"),h_=d(),f(la.$$.fragment),dp=d(),so=o("h2"),So=o("a"),kd=o("span"),f(ca.$$.fragment),u_=d(),vd=o("span"),f_=s("TFBartModel"),lp=d(),ye=o("div"),f(pa.$$.fragment),m_=d(),ha=o("p"),__=s(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=o("a"),g_=s("TFPreTrainedModel"),b_=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),k_=d(),ua=o("p"),v_=s("This model is also a "),fa=o("a"),y_=s("tf.keras.Model"),T_=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),x_=d(),f(Io.$$.fragment),w_=d(),$e=o("div"),f(ma.$$.fragment),z_=d(),io=o("p"),B_=s("The "),ls=o("a"),F_=s("TFBartModel"),q_=s(" forward method, overrides the "),yd=o("code"),$_=s("__call__"),E_=s(" special method."),M_=d(),f(No.$$.fragment),j_=d(),Td=o("p"),C_=s("Example:"),P_=d(),f(_a.$$.fragment),cp=d(),lo=o("h2"),Lo=o("a"),xd=o("span"),f(ga.$$.fragment),O_=d(),wd=o("span"),A_=s("TFBartForConditionalGeneration"),pp=d(),Te=o("div"),f(ba.$$.fragment),S_=d(),ka=o("p"),I_=s(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=o("a"),N_=s("TFPreTrainedModel"),L_=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),D_=d(),va=o("p"),G_=s("This model is also a "),ya=o("a"),U_=s("tf.keras.Model"),W_=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Q_=d(),f(Do.$$.fragment),R_=d(),P=o("div"),f(Ta.$$.fragment),H_=d(),co=o("p"),K_=s("The "),ps=o("a"),V_=s("TFBartForConditionalGeneration"),J_=s(" forward method, overrides the "),zd=o("code"),X_=s("__call__"),Z_=s(" special method."),Y_=d(),f(Go.$$.fragment),eg=d(),Bd=o("p"),tg=s("Summarization example::"),og=d(),Fd=o("blockquote"),qd=o("blockquote"),$d=o("blockquote"),Ed=o("p"),ng=s("from transformers import BartTokenizer, TFBartForConditionalGeneration, BartConfig"),ag=d(),Md=o("blockquote"),jd=o("blockquote"),Cd=o("blockquote"),Pd=o("p"),rg=s(`model = TFBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)`),sg=d(),Od=o("blockquote"),Ad=o("blockquote"),Sd=o("blockquote"),Id=o("p"),ig=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),dg=d(),Nd=o("blockquote"),Ld=o("blockquote"),xa=o("blockquote"),Uo=o("h1"),Wo=o("a"),Dd=o("span"),f(wa.$$.fragment),lg=d(),Gd=o("span"),cg=s("Generate Summary"),pg=d(),Ud=o("p"),hg=s(`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),ug=d(),Wd=o("p"),fg=s("Mask filling example::"),mg=d(),Qd=o("blockquote"),Rd=o("blockquote"),Hd=o("blockquote"),Kd=o("p"),_g=s(`from transformers import BartTokenizer, TFBartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),gg=d(),Vd=o("blockquote"),Jd=o("blockquote"),za=o("blockquote"),Xd=o("p"),bg=s(`model = TFBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018tf\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])`),kg=d(),Qo=o("h1"),Ro=o("a"),Zd=o("span"),f(Ba.$$.fragment),vg=d(),Yd=o("span"),yg=s("probs[5] is associated with the mask token"),hp=d(),po=o("h2"),Ho=o("a"),el=o("span"),f(Fa.$$.fragment),Tg=d(),tl=o("span"),xg=s("FlaxBartModel"),up=d(),Q=o("div"),f(qa.$$.fragment),wg=d(),$a=o("p"),zg=s(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=o("a"),Bg=s("FlaxPreTrainedModel"),Fg=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),qg=d(),Ea=o("p"),$g=s("This model is also a Flax Linen "),Ma=o("a"),Eg=s("flax.nn.Module"),Mg=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jg=d(),ol=o("p"),Cg=s("Finally, this model supports inherent JAX features such as:"),Pg=d(),st=o("ul"),nl=o("li"),ja=o("a"),Og=s("Just-In-Time (JIT) compilation"),Ag=d(),al=o("li"),Ca=o("a"),Sg=s("Automatic Differentiation"),Ig=d(),rl=o("li"),Pa=o("a"),Ng=s("Vectorization"),Lg=d(),sl=o("li"),Oa=o("a"),Dg=s("Parallelization"),Gg=d(),Ee=o("div"),f(Aa.$$.fragment),Ug=d(),ho=o("p"),Wg=s("The "),il=o("code"),Qg=s("FlaxBartPreTrainedModel"),Rg=s(" forward method, overrides the "),dl=o("code"),Hg=s("__call__"),Kg=s(" special method."),Vg=d(),f(Ko.$$.fragment),Jg=d(),ll=o("p"),Xg=s("Example:"),Zg=d(),f(Sa.$$.fragment),Yg=d(),mt=o("div"),f(Ia.$$.fragment),eb=d(),cl=o("p"),tb=s("Example:"),ob=d(),f(Na.$$.fragment),nb=d(),_t=o("div"),f(La.$$.fragment),ab=d(),pl=o("p"),rb=s("Example:"),sb=d(),f(Da.$$.fragment),fp=d(),uo=o("h2"),Vo=o("a"),hl=o("span"),f(Ga.$$.fragment),ib=d(),ul=o("span"),db=s("FlaxBartForConditionalGeneration"),mp=d(),R=o("div"),f(Ua.$$.fragment),lb=d(),Wa=o("p"),cb=s(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=o("a"),pb=s("FlaxPreTrainedModel"),hb=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ub=d(),Qa=o("p"),fb=s("This model is also a Flax Linen "),Ra=o("a"),mb=s("flax.nn.Module"),_b=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gb=d(),fl=o("p"),bb=s("Finally, this model supports inherent JAX features such as:"),kb=d(),it=o("ul"),ml=o("li"),Ha=o("a"),vb=s("Just-In-Time (JIT) compilation"),yb=d(),_l=o("li"),Ka=o("a"),Tb=s("Automatic Differentiation"),xb=d(),gl=o("li"),Va=o("a"),wb=s("Vectorization"),zb=d(),bl=o("li"),Ja=o("a"),Bb=s("Parallelization"),Fb=d(),j=o("div"),f(Xa.$$.fragment),qb=d(),fo=o("p"),$b=s("The "),kl=o("code"),Eb=s("FlaxBartPreTrainedModel"),Mb=s(" forward method, overrides the "),vl=o("code"),jb=s("__call__"),Cb=s(" special method."),Pb=d(),f(Jo.$$.fragment),Ob=d(),yl=o("p"),Ab=s("Summarization example::"),Sb=d(),Tl=o("blockquote"),xl=o("blockquote"),wl=o("blockquote"),zl=o("p"),Ib=s("from transformers import BartTokenizer, FlaxBartForConditionalGeneration"),Nb=d(),Bl=o("blockquote"),Fl=o("blockquote"),ql=o("blockquote"),$l=o("p"),Lb=s(`model = FlaxBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large-cnn\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large-cnn\u2019)`),Db=d(),El=o("blockquote"),Ml=o("blockquote"),jl=o("blockquote"),Cl=o("p"),Gb=s(`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018jax\u2019)`),Ub=d(),Pl=o("blockquote"),Ol=o("blockquote"),Za=o("blockquote"),Xo=o("h1"),Zo=o("a"),Al=o("span"),f(Ya.$$.fragment),Wb=d(),Sl=o("span"),Qb=s("Generate Summary"),Rb=d(),Il=o("p"),Hb=s(`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),Kb=d(),Nl=o("p"),Vb=s("Mask filling example::"),Jb=d(),Ll=o("blockquote"),Dl=o("blockquote"),Gl=o("blockquote"),Ul=o("p"),Xb=s(`from transformers import BartTokenizer, FlaxBartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),Zb=d(),Wl=o("blockquote"),Ql=o("blockquote"),Rl=o("blockquote"),Hl=o("p"),Yb=s(`model = FlaxBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018jax\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),ek=d(),Kl=o("blockquote"),Vl=o("blockquote"),Jl=o("blockquote"),Xl=o("p"),tk=s(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),ok=d(),Zl=o("blockquote"),Yl=o("blockquote"),ec=o("blockquote"),tc=o("p"),nk=s("tokenizer.decode(predictions).split()"),ak=d(),gt=o("div"),f(er.$$.fragment),rk=d(),oc=o("p"),sk=s("Example:"),ik=d(),f(tr.$$.fragment),dk=d(),bt=o("div"),f(or.$$.fragment),lk=d(),nc=o("p"),ck=s("Example:"),pk=d(),f(nr.$$.fragment),_p=d(),mo=o("h2"),Yo=o("a"),ac=o("span"),f(ar.$$.fragment),hk=d(),rc=o("span"),uk=s("FlaxBartForSequenceClassification"),gp=d(),N=o("div"),f(rr.$$.fragment),fk=d(),sc=o("p"),mk=s(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),_k=d(),sr=o("p"),gk=s("This model inherits from "),fs=o("a"),bk=s("FlaxPreTrainedModel"),kk=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),vk=d(),ir=o("p"),yk=s("This model is also a Flax Linen "),dr=o("a"),Tk=s("flax.nn.Module"),xk=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wk=d(),ic=o("p"),zk=s("Finally, this model supports inherent JAX features such as:"),Bk=d(),dt=o("ul"),dc=o("li"),lr=o("a"),Fk=s("Just-In-Time (JIT) compilation"),qk=d(),lc=o("li"),cr=o("a"),$k=s("Automatic Differentiation"),Ek=d(),cc=o("li"),pr=o("a"),Mk=s("Vectorization"),jk=d(),pc=o("li"),hr=o("a"),Ck=s("Parallelization"),Pk=d(),Me=o("div"),f(ur.$$.fragment),Ok=d(),_o=o("p"),Ak=s("The "),hc=o("code"),Sk=s("FlaxBartPreTrainedModel"),Ik=s(" forward method, overrides the "),uc=o("code"),Nk=s("__call__"),Lk=s(" special method."),Dk=d(),f(en.$$.fragment),Gk=d(),fc=o("p"),Uk=s("Example:"),Wk=d(),f(fr.$$.fragment),Qk=d(),kt=o("div"),f(mr.$$.fragment),Rk=d(),mc=o("p"),Hk=s("Example:"),Kk=d(),f(_r.$$.fragment),Vk=d(),vt=o("div"),f(gr.$$.fragment),Jk=d(),_c=o("p"),Xk=s("Example:"),Zk=d(),f(br.$$.fragment),bp=d(),go=o("h2"),tn=o("a"),gc=o("span"),f(kr.$$.fragment),Yk=d(),bc=o("span"),ev=s("FlaxBartForQuestionAnswering"),kp=d(),L=o("div"),f(vr.$$.fragment),tv=d(),bo=o("p"),ov=s(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),kc=o("code"),nv=s("span start logits"),av=s(" and "),vc=o("code"),rv=s("span end logits"),sv=s(")."),iv=d(),yr=o("p"),dv=s("This model inherits from "),ms=o("a"),lv=s("FlaxPreTrainedModel"),cv=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pv=d(),Tr=o("p"),hv=s("This model is also a Flax Linen "),xr=o("a"),uv=s("flax.nn.Module"),fv=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mv=d(),yc=o("p"),_v=s("Finally, this model supports inherent JAX features such as:"),gv=d(),lt=o("ul"),Tc=o("li"),wr=o("a"),bv=s("Just-In-Time (JIT) compilation"),kv=d(),xc=o("li"),zr=o("a"),vv=s("Automatic Differentiation"),yv=d(),wc=o("li"),Br=o("a"),Tv=s("Vectorization"),xv=d(),zc=o("li"),Fr=o("a"),wv=s("Parallelization"),zv=d(),je=o("div"),f(qr.$$.fragment),Bv=d(),ko=o("p"),Fv=s("The "),Bc=o("code"),qv=s("FlaxBartPreTrainedModel"),$v=s(" forward method, overrides the "),Fc=o("code"),Ev=s("__call__"),Mv=s(" special method."),jv=d(),f(on.$$.fragment),Cv=d(),qc=o("p"),Pv=s("Example:"),Ov=d(),f($r.$$.fragment),Av=d(),yt=o("div"),f(Er.$$.fragment),Sv=d(),$c=o("p"),Iv=s("Example:"),Nv=d(),f(Mr.$$.fragment),Lv=d(),Tt=o("div"),f(jr.$$.fragment),Dv=d(),Ec=o("p"),Gv=s("Example:"),Uv=d(),f(Cr.$$.fragment),this.h()},l(r){const h=m2('[data-svelte="svelte-1phssyn"]',document.head);p=n(h,"META",{name:!0,content:!0}),h.forEach(t),B=l(r),v=n(r,"H1",{class:!0});var Pr=a(v);x=n(Pr,"A",{id:!0,class:!0,href:!0});var Mc=a(x);z=n(Mc,"SPAN",{});var jc=a(z);m(T.$$.fragment,jc),jc.forEach(t),Mc.forEach(t),y=l(Pr),F=n(Pr,"SPAN",{});var Cc=a(F);Re=i(Cc,"BART"),Cc.forEach(t),Pr.forEach(t),xe=l(r),$=n(r,"P",{});var nn=a($);Pe=n(nn,"STRONG",{});var Pc=a(Pe);he=i(Pc,"DISCLAIMER:"),Pc.forEach(t),He=i(nn," If you see something strange, file a "),ue=n(nn,"A",{href:!0,rel:!0});var Oc=a(ue);fe=i(Oc,"Github Issue"),Oc.forEach(t),Ke=i(nn,` and assign
@patrickvonplaten`),nn.forEach(t),Ue=l(r),K=n(r,"H2",{class:!0});var Or=a(K);G=n(Or,"A",{id:!0,class:!0,href:!0});var Ac=a(G);Oe=n(Ac,"SPAN",{});var Sc=a(Oe);m(oe.$$.fragment,Sc),Sc.forEach(t),Ac.forEach(t),S=l(Or),I=n(Or,"SPAN",{});var Ic=a(I);Ve=i(Ic,"Overview"),Ic.forEach(t),Or.forEach(t),ie=l(r),de=n(r,"P",{});var Ar=a(de);Je=i(Ar,"The Bart model was proposed in "),V=n(Ar,"A",{href:!0,rel:!0});var Qv=a(V);Xe=i(Qv,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Qv.forEach(t),Ze=i(Ar,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Ar.forEach(t),U=l(r),we=n(r,"P",{});var Rv=a(we);me=i(Rv,"According to the abstract,"),Rv.forEach(t),We=l(r),Z=n(r,"UL",{});var _s=a(Z);ne=n(_s,"LI",{});var Hv=a(ne);Ye=i(Hv,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Hv.forEach(t),et=l(_s),J=n(_s,"LI",{});var Kv=a(J);tt=i(Kv,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Kv.forEach(t),_e=l(_s),Ae=n(_s,"LI",{});var Vv=a(Ae);w=i(Vv,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Vv.forEach(t),_s.forEach(t),E=l(r),H=n(r,"P",{});var gs=a(H);Ot=i(gs,"This model was contributed by "),Se=n(gs,"A",{href:!0,rel:!0});var Jv=a(Se);ae=i(Jv,"sshleifer"),Jv.forEach(t),At=i(gs,". The Authors\u2019 code can be found "),Ie=n(gs,"A",{href:!0,rel:!0});var Xv=a(Ie);St=i(Xv,"here"),Xv.forEach(t),re=i(gs,"."),gs.forEach(t),le=l(r),ge=n(r,"H3",{class:!0});var yp=a(ge);ze=n(yp,"A",{id:!0,class:!0,href:!0});var Zv=a(ze);se=n(Zv,"SPAN",{});var Yv=a(se);m(Ne.$$.fragment,Yv),Yv.forEach(t),Zv.forEach(t),It=l(yp),Le=n(yp,"SPAN",{});var ey=a(Le);Nt=i(ey,"Examples"),ey.forEach(t),yp.forEach(t),Lc=l(r),ct=n(r,"UL",{});var bs=a(ct);un=n(bs,"LI",{});var Tp=a(un);fh=i(Tp,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),fn=n(Tp,"A",{href:!0,rel:!0});var ty=a(fn);mh=i(ty,"examples/pytorch/summarization/"),ty.forEach(t),_h=i(Tp,"."),Tp.forEach(t),gh=l(bs),ot=n(bs,"LI",{});var an=a(ot);bh=i(an,"An example of how to train "),Nr=n(an,"A",{href:!0});var oy=a(Nr);kh=i(oy,"BartForConditionalGeneration"),oy.forEach(t),vh=i(an," with a Hugging Face "),Ks=n(an,"CODE",{});var ny=a(Ks);yh=i(ny,"datasets"),ny.forEach(t),Th=i(an,`
object can be found in this `),mn=n(an,"A",{href:!0,rel:!0});var ay=a(mn);xh=i(ay,"forum discussion"),ay.forEach(t),wh=i(an,"."),an.forEach(t),zh=l(bs),vo=n(bs,"LI",{});var Nc=a(vo);_n=n(Nc,"A",{href:!0,rel:!0});var ry=a(_n);Bh=i(ry,"Distilled checkpoints"),ry.forEach(t),Fh=i(Nc," are described in this "),gn=n(Nc,"A",{href:!0,rel:!0});var sy=a(gn);qh=i(sy,"paper"),sy.forEach(t),$h=i(Nc,"."),Nc.forEach(t),bs.forEach(t),Dc=l(r),Lt=n(r,"H2",{class:!0});var xp=a(Lt);yo=n(xp,"A",{id:!0,class:!0,href:!0});var iy=a(yo);Vs=n(iy,"SPAN",{});var dy=a(Vs);m(bn.$$.fragment,dy),dy.forEach(t),iy.forEach(t),Eh=l(xp),Js=n(xp,"SPAN",{});var ly=a(Js);Mh=i(ly,"Implementation Notes"),ly.forEach(t),xp.forEach(t),Gc=l(r),Be=n(r,"UL",{});var xt=a(Be);nt=n(xt,"LI",{});var rn=a(nt);jh=i(rn,"Bart doesn\u2019t use "),Xs=n(rn,"CODE",{});var cy=a(Xs);Ch=i(cy,"token_type_ids"),cy.forEach(t),Ph=i(rn," for sequence classification. Use "),Lr=n(rn,"A",{href:!0});var py=a(Lr);Oh=i(py,"BartTokenizer"),py.forEach(t),Ah=i(rn,` or
`),Dr=n(rn,"A",{href:!0});var hy=a(Dr);Sh=i(hy,"encode()"),hy.forEach(t),Ih=i(rn," to get the proper splitting."),rn.forEach(t),Nh=l(xt),Dt=n(xt,"LI",{});var ks=a(Dt);Lh=i(ks,"The forward pass of "),Gr=n(ks,"A",{href:!0});var uy=a(Gr);Dh=i(uy,"BartModel"),uy.forEach(t),Gh=i(ks," will create the "),Zs=n(ks,"CODE",{});var fy=a(Zs);Uh=i(fy,"decoder_input_ids"),fy.forEach(t),Wh=i(ks,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),ks.forEach(t),Qh=l(xt),Gt=n(xt,"LI",{});var vs=a(Gt);Rh=i(vs,`Model predictions are intended to be identical to the original implementation when
`),Ys=n(vs,"CODE",{});var my=a(Ys);Hh=i(my,"force_bos_token_to_be_generated=True"),my.forEach(t),Kh=i(vs,`. This only works, however, if the string you pass to
`),ei=n(vs,"CODE",{});var _y=a(ei);Vh=i(_y,"fairseq.encode"),_y.forEach(t),Jh=i(vs," starts with a space."),vs.forEach(t),Xh=l(xt),Ur=n(xt,"LI",{});var Wv=a(Ur);Wr=n(Wv,"A",{href:!0});var gy=a(Wr);Zh=i(gy,"generate()"),gy.forEach(t),Yh=i(Wv,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Wv.forEach(t),eu=l(xt),Ut=n(xt,"LI",{});var ys=a(Ut);tu=i(ys,"Models that load the "),ti=n(ys,"EM",{});var by=a(ti);ou=i(by,"facebook/bart-large-cnn"),by.forEach(t),nu=i(ys," weights will not have a "),oi=n(ys,"CODE",{});var ky=a(oi);au=i(ky,"mask_token_id"),ky.forEach(t),ru=i(ys,`, or be able to perform
mask-filling tasks.`),ys.forEach(t),xt.forEach(t),Uc=l(r),Wt=n(r,"H2",{class:!0});var wp=a(Wt);To=n(wp,"A",{id:!0,class:!0,href:!0});var vy=a(To);ni=n(vy,"SPAN",{});var yy=a(ni);m(kn.$$.fragment,yy),yy.forEach(t),vy.forEach(t),su=l(wp),ai=n(wp,"SPAN",{});var Ty=a(ai);iu=i(Ty,"Mask Filling"),Ty.forEach(t),wp.forEach(t),Wc=l(r),pt=n(r,"P",{});var Ts=a(pt);du=i(Ts,"The "),ri=n(Ts,"CODE",{});var xy=a(ri);lu=i(xy,"facebook/bart-base"),xy.forEach(t),cu=i(Ts," and "),si=n(Ts,"CODE",{});var wy=a(si);pu=i(wy,"facebook/bart-large"),wy.forEach(t),hu=i(Ts," checkpoints can be used to fill multi-token masks."),Ts.forEach(t),Qc=l(r),m(vn.$$.fragment,r),Rc=l(r),Qt=n(r,"H2",{class:!0});var zp=a(Qt);xo=n(zp,"A",{id:!0,class:!0,href:!0});var zy=a(xo);ii=n(zy,"SPAN",{});var By=a(ii);m(yn.$$.fragment,By),By.forEach(t),zy.forEach(t),uu=l(zp),di=n(zp,"SPAN",{});var Fy=a(di);fu=i(Fy,"BartConfig"),Fy.forEach(t),zp.forEach(t),Hc=l(r),be=n(r,"DIV",{class:!0});var wt=a(be);m(Tn.$$.fragment,wt),mu=l(wt),Rt=n(wt,"P",{});var xs=a(Rt);_u=i(xs,"This is the configuration class to store the configuration of a "),Qr=n(xs,"A",{href:!0});var qy=a(Qr);gu=i(qy,"BartModel"),qy.forEach(t),bu=i(xs,`. It is used to
instantiate a BART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BART `),xn=n(xs,"A",{href:!0,rel:!0});var $y=a(xn);ku=i($y,"facebook/bart-large"),$y.forEach(t),vu=i(xs," architecture."),xs.forEach(t),yu=l(wt),Ht=n(wt,"P",{});var ws=a(Ht);Tu=i(ws,"Configuration objects inherit from "),Rr=n(ws,"A",{href:!0});var Ey=a(Rr);xu=i(Ey,"PretrainedConfig"),Ey.forEach(t),wu=i(ws,` and can be used to control the model
outputs. Read the documentation from `),Hr=n(ws,"A",{href:!0});var My=a(Hr);zu=i(My,"PretrainedConfig"),My.forEach(t),Bu=i(ws," for more information."),ws.forEach(t),Fu=l(wt),li=n(wt,"P",{});var jy=a(li);qu=i(jy,"Example:"),jy.forEach(t),$u=l(wt),m(wn.$$.fragment,wt),wt.forEach(t),Kc=l(r),Kt=n(r,"H2",{class:!0});var Bp=a(Kt);wo=n(Bp,"A",{id:!0,class:!0,href:!0});var Cy=a(wo);ci=n(Cy,"SPAN",{});var Py=a(ci);m(zn.$$.fragment,Py),Py.forEach(t),Cy.forEach(t),Eu=l(Bp),pi=n(Bp,"SPAN",{});var Oy=a(pi);Mu=i(Oy,"BartTokenizer"),Oy.forEach(t),Bp.forEach(t),Vc=l(r),at=n(r,"DIV",{class:!0});var zs=a(at);m(Bn.$$.fragment,zs),ju=l(zs),hi=n(zs,"P",{});var Ay=a(hi);Cu=i(Ay,"Construct a BART tokenizer."),Ay.forEach(t),Pu=l(zs),ht=n(zs,"P",{});var Sr=a(ht);Kr=n(Sr,"A",{href:!0});var Sy=a(Kr);Ou=i(Sy,"BartTokenizer"),Sy.forEach(t),Au=i(Sr," is identical to "),Vr=n(Sr,"A",{href:!0});var Iy=a(Vr);Su=i(Iy,"RobertaTokenizer"),Iy.forEach(t),Iu=i(Sr,`. Refer to superclass
`),Jr=n(Sr,"A",{href:!0});var Ny=a(Jr);Nu=i(Ny,"RobertaTokenizer"),Ny.forEach(t),Lu=i(Sr,` for usage examples and documentation concerning the initialization
parameters and other methods.`),Sr.forEach(t),zs.forEach(t),Jc=l(r),Vt=n(r,"H2",{class:!0});var Fp=a(Vt);zo=n(Fp,"A",{id:!0,class:!0,href:!0});var Ly=a(zo);ui=n(Ly,"SPAN",{});var Dy=a(ui);m(Fn.$$.fragment,Dy),Dy.forEach(t),Ly.forEach(t),Du=l(Fp),fi=n(Fp,"SPAN",{});var Gy=a(fi);Gu=i(Gy,"BartTokenizerFast"),Gy.forEach(t),Fp.forEach(t),Xc=l(r),rt=n(r,"DIV",{class:!0});var Bs=a(rt);m(qn.$$.fragment,Bs),Uu=l(Bs),$n=n(Bs,"P",{});var qp=a($n);Wu=i(qp,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),mi=n(qp,"EM",{});var Uy=a(mi);Qu=i(Uy,"tokenizers"),Uy.forEach(t),Ru=i(qp," library)."),qp.forEach(t),Hu=l(Bs),ut=n(Bs,"P",{});var Ir=a(ut);Xr=n(Ir,"A",{href:!0});var Wy=a(Xr);Ku=i(Wy,"BartTokenizerFast"),Wy.forEach(t),Vu=i(Ir," is identical to "),Zr=n(Ir,"A",{href:!0});var Qy=a(Zr);Ju=i(Qy,"RobertaTokenizerFast"),Qy.forEach(t),Xu=i(Ir,`. Refer to
superclass `),Yr=n(Ir,"A",{href:!0});var Ry=a(Yr);Zu=i(Ry,"RobertaTokenizerFast"),Ry.forEach(t),Yu=i(Ir,` for usage examples and documentation concerning the
initialization parameters and other methods.`),Ir.forEach(t),Bs.forEach(t),Zc=l(r),Jt=n(r,"H2",{class:!0});var $p=a(Jt);Bo=n($p,"A",{id:!0,class:!0,href:!0});var Hy=a(Bo);_i=n(Hy,"SPAN",{});var Ky=a(_i);m(En.$$.fragment,Ky),Ky.forEach(t),Hy.forEach(t),ef=l($p),gi=n($p,"SPAN",{});var Vy=a(gi);tf=i(Vy,"BartModel"),Vy.forEach(t),$p.forEach(t),Yc=l(r),De=n(r,"DIV",{class:!0});var sn=a(De);m(Mn.$$.fragment,sn),of=l(sn),jn=n(sn,"P",{});var Ep=a(jn);nf=i(Ep,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=n(Ep,"A",{href:!0});var Jy=a(es);af=i(Jy,"PreTrainedModel"),Jy.forEach(t),rf=i(Ep,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ep.forEach(t),sf=l(sn),Cn=n(sn,"P",{});var Mp=a(Cn);df=i(Mp,"This model is also a PyTorch "),Pn=n(Mp,"A",{href:!0,rel:!0});var Xy=a(Pn);lf=i(Xy,"torch.nn.Module"),Xy.forEach(t),cf=i(Mp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Mp.forEach(t),pf=l(sn),Fe=n(sn,"DIV",{class:!0});var zt=a(Fe);m(On.$$.fragment,zt),hf=l(zt),Xt=n(zt,"P",{});var Fs=a(Xt);uf=i(Fs,"The "),ts=n(Fs,"A",{href:!0});var Zy=a(ts);ff=i(Zy,"BartModel"),Zy.forEach(t),mf=i(Fs," forward method, overrides the "),bi=n(Fs,"CODE",{});var Yy=a(bi);_f=i(Yy,"__call__"),Yy.forEach(t),gf=i(Fs," special method."),Fs.forEach(t),bf=l(zt),m(Fo.$$.fragment,zt),kf=l(zt),ki=n(zt,"P",{});var eT=a(ki);vf=i(eT,"Example:"),eT.forEach(t),yf=l(zt),m(An.$$.fragment,zt),zt.forEach(t),sn.forEach(t),ep=l(r),Zt=n(r,"H2",{class:!0});var jp=a(Zt);qo=n(jp,"A",{id:!0,class:!0,href:!0});var tT=a(qo);vi=n(tT,"SPAN",{});var oT=a(vi);m(Sn.$$.fragment,oT),oT.forEach(t),tT.forEach(t),Tf=l(jp),yi=n(jp,"SPAN",{});var nT=a(yi);xf=i(nT,"BartForConditionalGeneration"),nT.forEach(t),jp.forEach(t),tp=l(r),Ge=n(r,"DIV",{class:!0});var dn=a(Ge);m(In.$$.fragment,dn),wf=l(dn),Nn=n(dn,"P",{});var Cp=a(Nn);zf=i(Cp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),os=n(Cp,"A",{href:!0});var aT=a(os);Bf=i(aT,"PreTrainedModel"),aT.forEach(t),Ff=i(Cp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Cp.forEach(t),qf=l(dn),Ln=n(dn,"P",{});var Pp=a(Ln);$f=i(Pp,"This model is also a PyTorch "),Dn=n(Pp,"A",{href:!0,rel:!0});var rT=a(Dn);Ef=i(rT,"torch.nn.Module"),rT.forEach(t),Mf=i(Pp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Pp.forEach(t),jf=l(dn),M=n(dn,"DIV",{class:!0});var O=a(M);m(Gn.$$.fragment,O),Cf=l(O),Yt=n(O,"P",{});var qs=a(Yt);Pf=i(qs,"The "),ns=n(qs,"A",{href:!0});var sT=a(ns);Of=i(sT,"BartForConditionalGeneration"),sT.forEach(t),Af=i(qs," forward method, overrides the "),Ti=n(qs,"CODE",{});var iT=a(Ti);Sf=i(iT,"__call__"),iT.forEach(t),If=i(qs," special method."),qs.forEach(t),Nf=l(O),m($o.$$.fragment,O),Lf=l(O),xi=n(O,"P",{});var dT=a(xi);Df=i(dT,"Summarization example::"),dT.forEach(t),Gf=l(O),wi=n(O,"BLOCKQUOTE",{});var lT=a(wi);zi=n(lT,"BLOCKQUOTE",{});var cT=a(zi);Bi=n(cT,"BLOCKQUOTE",{});var pT=a(Bi);Fi=n(pT,"P",{});var hT=a(Fi);Uf=i(hT,"from transformers import BartTokenizer, BartForConditionalGeneration, BartConfig"),hT.forEach(t),pT.forEach(t),cT.forEach(t),lT.forEach(t),Wf=l(O),qi=n(O,"BLOCKQUOTE",{});var uT=a(qi);$i=n(uT,"BLOCKQUOTE",{});var fT=a($i);Ei=n(fT,"BLOCKQUOTE",{});var mT=a(Ei);Mi=n(mT,"P",{});var _T=a(Mi);Qf=i(_T,`model = BartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large-cnn\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large-cnn\u2019)`),_T.forEach(t),mT.forEach(t),fT.forEach(t),uT.forEach(t),Rf=l(O),ji=n(O,"BLOCKQUOTE",{});var gT=a(ji);Ci=n(gT,"BLOCKQUOTE",{});var bT=a(Ci);Pi=n(bT,"BLOCKQUOTE",{});var kT=a(Pi);Oi=n(kT,"P",{});var vT=a(Oi);Hf=i(vT,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),vT.forEach(t),kT.forEach(t),bT.forEach(t),gT.forEach(t),Kf=l(O),Ai=n(O,"BLOCKQUOTE",{});var yT=a(Ai);Si=n(yT,"BLOCKQUOTE",{});var TT=a(Si);Un=n(TT,"BLOCKQUOTE",{});var Op=a(Un);Eo=n(Op,"H1",{class:!0});var Ap=a(Eo);Mo=n(Ap,"A",{id:!0,class:!0,href:!0});var xT=a(Mo);Ii=n(xT,"SPAN",{});var wT=a(Ii);m(Wn.$$.fragment,wT),wT.forEach(t),xT.forEach(t),Vf=l(Ap),Ni=n(Ap,"SPAN",{});var zT=a(Ni);Jf=i(zT,"Generate Summary"),zT.forEach(t),Ap.forEach(t),Xf=l(Op),Li=n(Op,"P",{});var BT=a(Li);Zf=i(BT,`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),BT.forEach(t),Op.forEach(t),TT.forEach(t),yT.forEach(t),Yf=l(O),Di=n(O,"P",{});var FT=a(Di);em=i(FT,"Mask filling example::"),FT.forEach(t),tm=l(O),Gi=n(O,"BLOCKQUOTE",{});var qT=a(Gi);Ui=n(qT,"BLOCKQUOTE",{});var $T=a(Ui);Wi=n($T,"BLOCKQUOTE",{});var ET=a(Wi);Qi=n(ET,"P",{});var MT=a(Qi);om=i(MT,`from transformers import BartTokenizer, BartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),MT.forEach(t),ET.forEach(t),$T.forEach(t),qT.forEach(t),nm=l(O),Ri=n(O,"BLOCKQUOTE",{});var jT=a(Ri);Hi=n(jT,"BLOCKQUOTE",{});var CT=a(Hi);Ki=n(CT,"BLOCKQUOTE",{});var PT=a(Ki);Vi=n(PT,"P",{});var OT=a(Vi);am=i(OT,`model = BartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),OT.forEach(t),PT.forEach(t),CT.forEach(t),jT.forEach(t),rm=l(O),Ji=n(O,"BLOCKQUOTE",{});var AT=a(Ji);Xi=n(AT,"BLOCKQUOTE",{});var ST=a(Xi);Zi=n(ST,"BLOCKQUOTE",{});var IT=a(Zi);Yi=n(IT,"P",{});var NT=a(Yi);sm=i(NT,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),NT.forEach(t),IT.forEach(t),ST.forEach(t),AT.forEach(t),im=l(O),ed=n(O,"BLOCKQUOTE",{});var LT=a(ed);td=n(LT,"BLOCKQUOTE",{});var DT=a(td);od=n(DT,"BLOCKQUOTE",{});var GT=a(od);nd=n(GT,"P",{});var UT=a(nd);dm=i(UT,"tokenizer.decode(predictions).split()"),UT.forEach(t),GT.forEach(t),DT.forEach(t),LT.forEach(t),O.forEach(t),dn.forEach(t),op=l(r),eo=n(r,"H2",{class:!0});var Sp=a(eo);jo=n(Sp,"A",{id:!0,class:!0,href:!0});var WT=a(jo);ad=n(WT,"SPAN",{});var QT=a(ad);m(Qn.$$.fragment,QT),QT.forEach(t),WT.forEach(t),lm=l(Sp),rd=n(Sp,"SPAN",{});var RT=a(rd);cm=i(RT,"BartForSequenceClassification"),RT.forEach(t),Sp.forEach(t),np=l(r),ke=n(r,"DIV",{class:!0});var Bt=a(ke);m(Rn.$$.fragment,Bt),pm=l(Bt),sd=n(Bt,"P",{});var HT=a(sd);hm=i(HT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),HT.forEach(t),um=l(Bt),Hn=n(Bt,"P",{});var Ip=a(Hn);fm=i(Ip,"This model inherits from "),as=n(Ip,"A",{href:!0});var KT=a(as);mm=i(KT,"PreTrainedModel"),KT.forEach(t),_m=i(Ip,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ip.forEach(t),gm=l(Bt),Kn=n(Bt,"P",{});var Np=a(Kn);bm=i(Np,"This model is also a PyTorch "),Vn=n(Np,"A",{href:!0,rel:!0});var VT=a(Vn);km=i(VT,"torch.nn.Module"),VT.forEach(t),vm=i(Np,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Np.forEach(t),ym=l(Bt),Y=n(Bt,"DIV",{class:!0});var Ce=a(Y);m(Jn.$$.fragment,Ce),Tm=l(Ce),to=n(Ce,"P",{});var $s=a(to);xm=i($s,"The "),rs=n($s,"A",{href:!0});var JT=a(rs);wm=i(JT,"BartForSequenceClassification"),JT.forEach(t),zm=i($s," forward method, overrides the "),id=n($s,"CODE",{});var XT=a(id);Bm=i(XT,"__call__"),XT.forEach(t),Fm=i($s," special method."),$s.forEach(t),qm=l(Ce),m(Co.$$.fragment,Ce),$m=l(Ce),dd=n(Ce,"P",{});var ZT=a(dd);Em=i(ZT,"Example of single-label classification:"),ZT.forEach(t),Mm=l(Ce),m(Xn.$$.fragment,Ce),jm=l(Ce),ld=n(Ce,"P",{});var YT=a(ld);Cm=i(YT,"Example of multi-label classification:"),YT.forEach(t),Pm=l(Ce),m(Zn.$$.fragment,Ce),Ce.forEach(t),Bt.forEach(t),ap=l(r),oo=n(r,"H2",{class:!0});var Lp=a(oo);Po=n(Lp,"A",{id:!0,class:!0,href:!0});var e1=a(Po);cd=n(e1,"SPAN",{});var t1=a(cd);m(Yn.$$.fragment,t1),t1.forEach(t),e1.forEach(t),Om=l(Lp),pd=n(Lp,"SPAN",{});var o1=a(pd);Am=i(o1,"BartForQuestionAnswering"),o1.forEach(t),Lp.forEach(t),rp=l(r),ve=n(r,"DIV",{class:!0});var Ft=a(ve);m(ea.$$.fragment,Ft),Sm=l(Ft),no=n(Ft,"P",{});var Es=a(no);Im=i(Es,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),hd=n(Es,"CODE",{});var n1=a(hd);Nm=i(n1,"span start logits"),n1.forEach(t),Lm=i(Es," and "),ud=n(Es,"CODE",{});var a1=a(ud);Dm=i(a1,"span end logits"),a1.forEach(t),Gm=i(Es,")."),Es.forEach(t),Um=l(Ft),ta=n(Ft,"P",{});var Dp=a(ta);Wm=i(Dp,"This model inherits from "),ss=n(Dp,"A",{href:!0});var r1=a(ss);Qm=i(r1,"PreTrainedModel"),r1.forEach(t),Rm=i(Dp,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Dp.forEach(t),Hm=l(Ft),oa=n(Ft,"P",{});var Gp=a(oa);Km=i(Gp,"This model is also a PyTorch "),na=n(Gp,"A",{href:!0,rel:!0});var s1=a(na);Vm=i(s1,"torch.nn.Module"),s1.forEach(t),Jm=i(Gp,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Gp.forEach(t),Xm=l(Ft),qe=n(Ft,"DIV",{class:!0});var qt=a(qe);m(aa.$$.fragment,qt),Zm=l(qt),ao=n(qt,"P",{});var Ms=a(ao);Ym=i(Ms,"The "),is=n(Ms,"A",{href:!0});var i1=a(is);e_=i(i1,"BartForQuestionAnswering"),i1.forEach(t),t_=i(Ms," forward method, overrides the "),fd=n(Ms,"CODE",{});var d1=a(fd);o_=i(d1,"__call__"),d1.forEach(t),n_=i(Ms," special method."),Ms.forEach(t),a_=l(qt),m(Oo.$$.fragment,qt),r_=l(qt),md=n(qt,"P",{});var l1=a(md);s_=i(l1,"Example:"),l1.forEach(t),i_=l(qt),m(ra.$$.fragment,qt),qt.forEach(t),Ft.forEach(t),sp=l(r),ro=n(r,"H2",{class:!0});var Up=a(ro);Ao=n(Up,"A",{id:!0,class:!0,href:!0});var c1=a(Ao);_d=n(c1,"SPAN",{});var p1=a(_d);m(sa.$$.fragment,p1),p1.forEach(t),c1.forEach(t),d_=l(Up),gd=n(Up,"SPAN",{});var h1=a(gd);l_=i(h1,"BartForCausalLM"),h1.forEach(t),Up.forEach(t),ip=l(r),ia=n(r,"DIV",{class:!0});var u1=a(ia);ft=n(u1,"DIV",{class:!0});var js=a(ft);m(da.$$.fragment,js),c_=l(js),bd=n(js,"P",{});var f1=a(bd);p_=i(f1,"Example:"),f1.forEach(t),h_=l(js),m(la.$$.fragment,js),js.forEach(t),u1.forEach(t),dp=l(r),so=n(r,"H2",{class:!0});var Wp=a(so);So=n(Wp,"A",{id:!0,class:!0,href:!0});var m1=a(So);kd=n(m1,"SPAN",{});var _1=a(kd);m(ca.$$.fragment,_1),_1.forEach(t),m1.forEach(t),u_=l(Wp),vd=n(Wp,"SPAN",{});var g1=a(vd);f_=i(g1,"TFBartModel"),g1.forEach(t),Wp.forEach(t),lp=l(r),ye=n(r,"DIV",{class:!0});var $t=a(ye);m(pa.$$.fragment,$t),m_=l($t),ha=n($t,"P",{});var Qp=a(ha);__=i(Qp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ds=n(Qp,"A",{href:!0});var b1=a(ds);g_=i(b1,"TFPreTrainedModel"),b1.forEach(t),b_=i(Qp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Qp.forEach(t),k_=l($t),ua=n($t,"P",{});var Rp=a(ua);v_=i(Rp,"This model is also a "),fa=n(Rp,"A",{href:!0,rel:!0});var k1=a(fa);y_=i(k1,"tf.keras.Model"),k1.forEach(t),T_=i(Rp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Rp.forEach(t),x_=l($t),m(Io.$$.fragment,$t),w_=l($t),$e=n($t,"DIV",{class:!0});var Et=a($e);m(ma.$$.fragment,Et),z_=l(Et),io=n(Et,"P",{});var Cs=a(io);B_=i(Cs,"The "),ls=n(Cs,"A",{href:!0});var v1=a(ls);F_=i(v1,"TFBartModel"),v1.forEach(t),q_=i(Cs," forward method, overrides the "),yd=n(Cs,"CODE",{});var y1=a(yd);$_=i(y1,"__call__"),y1.forEach(t),E_=i(Cs," special method."),Cs.forEach(t),M_=l(Et),m(No.$$.fragment,Et),j_=l(Et),Td=n(Et,"P",{});var T1=a(Td);C_=i(T1,"Example:"),T1.forEach(t),P_=l(Et),m(_a.$$.fragment,Et),Et.forEach(t),$t.forEach(t),cp=l(r),lo=n(r,"H2",{class:!0});var Hp=a(lo);Lo=n(Hp,"A",{id:!0,class:!0,href:!0});var x1=a(Lo);xd=n(x1,"SPAN",{});var w1=a(xd);m(ga.$$.fragment,w1),w1.forEach(t),x1.forEach(t),O_=l(Hp),wd=n(Hp,"SPAN",{});var z1=a(wd);A_=i(z1,"TFBartForConditionalGeneration"),z1.forEach(t),Hp.forEach(t),pp=l(r),Te=n(r,"DIV",{class:!0});var Mt=a(Te);m(ba.$$.fragment,Mt),S_=l(Mt),ka=n(Mt,"P",{});var Kp=a(ka);I_=i(Kp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),cs=n(Kp,"A",{href:!0});var B1=a(cs);N_=i(B1,"TFPreTrainedModel"),B1.forEach(t),L_=i(Kp,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Kp.forEach(t),D_=l(Mt),va=n(Mt,"P",{});var Vp=a(va);G_=i(Vp,"This model is also a "),ya=n(Vp,"A",{href:!0,rel:!0});var F1=a(ya);U_=i(F1,"tf.keras.Model"),F1.forEach(t),W_=i(Vp,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Vp.forEach(t),Q_=l(Mt),m(Do.$$.fragment,Mt),R_=l(Mt),P=n(Mt,"DIV",{class:!0});var W=a(P);m(Ta.$$.fragment,W),H_=l(W),co=n(W,"P",{});var Ps=a(co);K_=i(Ps,"The "),ps=n(Ps,"A",{href:!0});var q1=a(ps);V_=i(q1,"TFBartForConditionalGeneration"),q1.forEach(t),J_=i(Ps," forward method, overrides the "),zd=n(Ps,"CODE",{});var $1=a(zd);X_=i($1,"__call__"),$1.forEach(t),Z_=i(Ps," special method."),Ps.forEach(t),Y_=l(W),m(Go.$$.fragment,W),eg=l(W),Bd=n(W,"P",{});var E1=a(Bd);tg=i(E1,"Summarization example::"),E1.forEach(t),og=l(W),Fd=n(W,"BLOCKQUOTE",{});var M1=a(Fd);qd=n(M1,"BLOCKQUOTE",{});var j1=a(qd);$d=n(j1,"BLOCKQUOTE",{});var C1=a($d);Ed=n(C1,"P",{});var P1=a(Ed);ng=i(P1,"from transformers import BartTokenizer, TFBartForConditionalGeneration, BartConfig"),P1.forEach(t),C1.forEach(t),j1.forEach(t),M1.forEach(t),ag=l(W),Md=n(W,"BLOCKQUOTE",{});var O1=a(Md);jd=n(O1,"BLOCKQUOTE",{});var A1=a(jd);Cd=n(A1,"BLOCKQUOTE",{});var S1=a(Cd);Pd=n(S1,"P",{});var I1=a(Pd);rg=i(I1,`model = TFBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)`),I1.forEach(t),S1.forEach(t),A1.forEach(t),O1.forEach(t),sg=l(W),Od=n(W,"BLOCKQUOTE",{});var N1=a(Od);Ad=n(N1,"BLOCKQUOTE",{});var L1=a(Ad);Sd=n(L1,"BLOCKQUOTE",{});var D1=a(Sd);Id=n(D1,"P",{});var G1=a(Id);ig=i(G1,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),G1.forEach(t),D1.forEach(t),L1.forEach(t),N1.forEach(t),dg=l(W),Nd=n(W,"BLOCKQUOTE",{});var U1=a(Nd);Ld=n(U1,"BLOCKQUOTE",{});var W1=a(Ld);xa=n(W1,"BLOCKQUOTE",{});var Jp=a(xa);Uo=n(Jp,"H1",{class:!0});var Xp=a(Uo);Wo=n(Xp,"A",{id:!0,class:!0,href:!0});var Q1=a(Wo);Dd=n(Q1,"SPAN",{});var R1=a(Dd);m(wa.$$.fragment,R1),R1.forEach(t),Q1.forEach(t),lg=l(Xp),Gd=n(Xp,"SPAN",{});var H1=a(Gd);cg=i(H1,"Generate Summary"),H1.forEach(t),Xp.forEach(t),pg=l(Jp),Ud=n(Jp,"P",{});var K1=a(Ud);hg=i(K1,`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),K1.forEach(t),Jp.forEach(t),W1.forEach(t),U1.forEach(t),ug=l(W),Wd=n(W,"P",{});var V1=a(Wd);fg=i(V1,"Mask filling example::"),V1.forEach(t),mg=l(W),Qd=n(W,"BLOCKQUOTE",{});var J1=a(Qd);Rd=n(J1,"BLOCKQUOTE",{});var X1=a(Rd);Hd=n(X1,"BLOCKQUOTE",{});var Z1=a(Hd);Kd=n(Z1,"P",{});var Y1=a(Kd);_g=i(Y1,`from transformers import BartTokenizer, TFBartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),Y1.forEach(t),Z1.forEach(t),X1.forEach(t),J1.forEach(t),gg=l(W),Vd=n(W,"BLOCKQUOTE",{});var ex=a(Vd);Jd=n(ex,"BLOCKQUOTE",{});var tx=a(Jd);za=n(tx,"BLOCKQUOTE",{});var Zp=a(za);Xd=n(Zp,"P",{});var ox=a(Xd);bg=i(ox,`model = TFBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018tf\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])`),ox.forEach(t),kg=l(Zp),Qo=n(Zp,"H1",{class:!0});var Yp=a(Qo);Ro=n(Yp,"A",{id:!0,class:!0,href:!0});var nx=a(Ro);Zd=n(nx,"SPAN",{});var ax=a(Zd);m(Ba.$$.fragment,ax),ax.forEach(t),nx.forEach(t),vg=l(Yp),Yd=n(Yp,"SPAN",{});var rx=a(Yd);yg=i(rx,"probs[5] is associated with the mask token"),rx.forEach(t),Yp.forEach(t),Zp.forEach(t),tx.forEach(t),ex.forEach(t),W.forEach(t),Mt.forEach(t),hp=l(r),po=n(r,"H2",{class:!0});var eh=a(po);Ho=n(eh,"A",{id:!0,class:!0,href:!0});var sx=a(Ho);el=n(sx,"SPAN",{});var ix=a(el);m(Fa.$$.fragment,ix),ix.forEach(t),sx.forEach(t),Tg=l(eh),tl=n(eh,"SPAN",{});var dx=a(tl);xg=i(dx,"FlaxBartModel"),dx.forEach(t),eh.forEach(t),up=l(r),Q=n(r,"DIV",{class:!0});var ce=a(Q);m(qa.$$.fragment,ce),wg=l(ce),$a=n(ce,"P",{});var th=a($a);zg=i(th,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hs=n(th,"A",{href:!0});var lx=a(hs);Bg=i(lx,"FlaxPreTrainedModel"),lx.forEach(t),Fg=i(th,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),th.forEach(t),qg=l(ce),Ea=n(ce,"P",{});var oh=a(Ea);$g=i(oh,"This model is also a Flax Linen "),Ma=n(oh,"A",{href:!0,rel:!0});var cx=a(Ma);Eg=i(cx,"flax.nn.Module"),cx.forEach(t),Mg=i(oh,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),oh.forEach(t),jg=l(ce),ol=n(ce,"P",{});var px=a(ol);Cg=i(px,"Finally, this model supports inherent JAX features such as:"),px.forEach(t),Pg=l(ce),st=n(ce,"UL",{});var ln=a(st);nl=n(ln,"LI",{});var hx=a(nl);ja=n(hx,"A",{href:!0,rel:!0});var ux=a(ja);Og=i(ux,"Just-In-Time (JIT) compilation"),ux.forEach(t),hx.forEach(t),Ag=l(ln),al=n(ln,"LI",{});var fx=a(al);Ca=n(fx,"A",{href:!0,rel:!0});var mx=a(Ca);Sg=i(mx,"Automatic Differentiation"),mx.forEach(t),fx.forEach(t),Ig=l(ln),rl=n(ln,"LI",{});var _x=a(rl);Pa=n(_x,"A",{href:!0,rel:!0});var gx=a(Pa);Ng=i(gx,"Vectorization"),gx.forEach(t),_x.forEach(t),Lg=l(ln),sl=n(ln,"LI",{});var bx=a(sl);Oa=n(bx,"A",{href:!0,rel:!0});var kx=a(Oa);Dg=i(kx,"Parallelization"),kx.forEach(t),bx.forEach(t),ln.forEach(t),Gg=l(ce),Ee=n(ce,"DIV",{class:!0});var jt=a(Ee);m(Aa.$$.fragment,jt),Ug=l(jt),ho=n(jt,"P",{});var Os=a(ho);Wg=i(Os,"The "),il=n(Os,"CODE",{});var vx=a(il);Qg=i(vx,"FlaxBartPreTrainedModel"),vx.forEach(t),Rg=i(Os," forward method, overrides the "),dl=n(Os,"CODE",{});var yx=a(dl);Hg=i(yx,"__call__"),yx.forEach(t),Kg=i(Os," special method."),Os.forEach(t),Vg=l(jt),m(Ko.$$.fragment,jt),Jg=l(jt),ll=n(jt,"P",{});var Tx=a(ll);Xg=i(Tx,"Example:"),Tx.forEach(t),Zg=l(jt),m(Sa.$$.fragment,jt),jt.forEach(t),Yg=l(ce),mt=n(ce,"DIV",{class:!0});var As=a(mt);m(Ia.$$.fragment,As),eb=l(As),cl=n(As,"P",{});var xx=a(cl);tb=i(xx,"Example:"),xx.forEach(t),ob=l(As),m(Na.$$.fragment,As),As.forEach(t),nb=l(ce),_t=n(ce,"DIV",{class:!0});var Ss=a(_t);m(La.$$.fragment,Ss),ab=l(Ss),pl=n(Ss,"P",{});var wx=a(pl);rb=i(wx,"Example:"),wx.forEach(t),sb=l(Ss),m(Da.$$.fragment,Ss),Ss.forEach(t),ce.forEach(t),fp=l(r),uo=n(r,"H2",{class:!0});var nh=a(uo);Vo=n(nh,"A",{id:!0,class:!0,href:!0});var zx=a(Vo);hl=n(zx,"SPAN",{});var Bx=a(hl);m(Ga.$$.fragment,Bx),Bx.forEach(t),zx.forEach(t),ib=l(nh),ul=n(nh,"SPAN",{});var Fx=a(ul);db=i(Fx,"FlaxBartForConditionalGeneration"),Fx.forEach(t),nh.forEach(t),mp=l(r),R=n(r,"DIV",{class:!0});var pe=a(R);m(Ua.$$.fragment,pe),lb=l(pe),Wa=n(pe,"P",{});var ah=a(Wa);cb=i(ah,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),us=n(ah,"A",{href:!0});var qx=a(us);pb=i(qx,"FlaxPreTrainedModel"),qx.forEach(t),hb=i(ah,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ah.forEach(t),ub=l(pe),Qa=n(pe,"P",{});var rh=a(Qa);fb=i(rh,"This model is also a Flax Linen "),Ra=n(rh,"A",{href:!0,rel:!0});var $x=a(Ra);mb=i($x,"flax.nn.Module"),$x.forEach(t),_b=i(rh,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rh.forEach(t),gb=l(pe),fl=n(pe,"P",{});var Ex=a(fl);bb=i(Ex,"Finally, this model supports inherent JAX features such as:"),Ex.forEach(t),kb=l(pe),it=n(pe,"UL",{});var cn=a(it);ml=n(cn,"LI",{});var Mx=a(ml);Ha=n(Mx,"A",{href:!0,rel:!0});var jx=a(Ha);vb=i(jx,"Just-In-Time (JIT) compilation"),jx.forEach(t),Mx.forEach(t),yb=l(cn),_l=n(cn,"LI",{});var Cx=a(_l);Ka=n(Cx,"A",{href:!0,rel:!0});var Px=a(Ka);Tb=i(Px,"Automatic Differentiation"),Px.forEach(t),Cx.forEach(t),xb=l(cn),gl=n(cn,"LI",{});var Ox=a(gl);Va=n(Ox,"A",{href:!0,rel:!0});var Ax=a(Va);wb=i(Ax,"Vectorization"),Ax.forEach(t),Ox.forEach(t),zb=l(cn),bl=n(cn,"LI",{});var Sx=a(bl);Ja=n(Sx,"A",{href:!0,rel:!0});var Ix=a(Ja);Bb=i(Ix,"Parallelization"),Ix.forEach(t),Sx.forEach(t),cn.forEach(t),Fb=l(pe),j=n(pe,"DIV",{class:!0});var A=a(j);m(Xa.$$.fragment,A),qb=l(A),fo=n(A,"P",{});var Is=a(fo);$b=i(Is,"The "),kl=n(Is,"CODE",{});var Nx=a(kl);Eb=i(Nx,"FlaxBartPreTrainedModel"),Nx.forEach(t),Mb=i(Is," forward method, overrides the "),vl=n(Is,"CODE",{});var Lx=a(vl);jb=i(Lx,"__call__"),Lx.forEach(t),Cb=i(Is," special method."),Is.forEach(t),Pb=l(A),m(Jo.$$.fragment,A),Ob=l(A),yl=n(A,"P",{});var Dx=a(yl);Ab=i(Dx,"Summarization example::"),Dx.forEach(t),Sb=l(A),Tl=n(A,"BLOCKQUOTE",{});var Gx=a(Tl);xl=n(Gx,"BLOCKQUOTE",{});var Ux=a(xl);wl=n(Ux,"BLOCKQUOTE",{});var Wx=a(wl);zl=n(Wx,"P",{});var Qx=a(zl);Ib=i(Qx,"from transformers import BartTokenizer, FlaxBartForConditionalGeneration"),Qx.forEach(t),Wx.forEach(t),Ux.forEach(t),Gx.forEach(t),Nb=l(A),Bl=n(A,"BLOCKQUOTE",{});var Rx=a(Bl);Fl=n(Rx,"BLOCKQUOTE",{});var Hx=a(Fl);ql=n(Hx,"BLOCKQUOTE",{});var Kx=a(ql);$l=n(Kx,"P",{});var Vx=a($l);Lb=i(Vx,`model = FlaxBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large-cnn\u2019)
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large-cnn\u2019)`),Vx.forEach(t),Kx.forEach(t),Hx.forEach(t),Rx.forEach(t),Db=l(A),El=n(A,"BLOCKQUOTE",{});var Jx=a(El);Ml=n(Jx,"BLOCKQUOTE",{});var Xx=a(Ml);jl=n(Xx,"BLOCKQUOTE",{});var Zx=a(jl);Cl=n(Zx,"P",{});var Yx=a(Cl);Gb=i(Yx,`ARTICLE_TO_SUMMARIZE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018jax\u2019)`),Yx.forEach(t),Zx.forEach(t),Xx.forEach(t),Jx.forEach(t),Ub=l(A),Pl=n(A,"BLOCKQUOTE",{});var ew=a(Pl);Ol=n(ew,"BLOCKQUOTE",{});var tw=a(Ol);Za=n(tw,"BLOCKQUOTE",{});var sh=a(Za);Xo=n(sh,"H1",{class:!0});var ih=a(Xo);Zo=n(ih,"A",{id:!0,class:!0,href:!0});var ow=a(Zo);Al=n(ow,"SPAN",{});var nw=a(Al);m(Ya.$$.fragment,nw),nw.forEach(t),ow.forEach(t),Wb=l(ih),Sl=n(ih,"SPAN",{});var aw=a(Sl);Qb=i(aw,"Generate Summary"),aw.forEach(t),ih.forEach(t),Rb=l(sh),Il=n(sh,"P",{});var rw=a(Il);Hb=i(rw,`summary_ids = model.generate(inputs[\u2018input_ids\u2019]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`),rw.forEach(t),sh.forEach(t),tw.forEach(t),ew.forEach(t),Kb=l(A),Nl=n(A,"P",{});var sw=a(Nl);Vb=i(sw,"Mask filling example::"),sw.forEach(t),Jb=l(A),Ll=n(A,"BLOCKQUOTE",{});var iw=a(Ll);Dl=n(iw,"BLOCKQUOTE",{});var dw=a(Dl);Gl=n(dw,"BLOCKQUOTE",{});var lw=a(Gl);Ul=n(lw,"P",{});var cw=a(Ul);Xb=i(cw,`from transformers import BartTokenizer, FlaxBartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained(\u2018facebook/bart-large\u2019)
TXT = \u201CMy friends are <mask> but they eat too many carbs.\u201D`),cw.forEach(t),lw.forEach(t),dw.forEach(t),iw.forEach(t),Zb=l(A),Wl=n(A,"BLOCKQUOTE",{});var pw=a(Wl);Ql=n(pw,"BLOCKQUOTE",{});var hw=a(Ql);Rl=n(hw,"BLOCKQUOTE",{});var uw=a(Rl);Hl=n(uw,"P",{});var fw=a(Hl);Yb=i(fw,`model = FlaxBartForConditionalGeneration.from_pretrained(\u2018facebook/bart-large\u2019)
input_ids = tokenizer([TXT], return_tensors=\u2018jax\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),fw.forEach(t),uw.forEach(t),hw.forEach(t),pw.forEach(t),ek=l(A),Kl=n(A,"BLOCKQUOTE",{});var mw=a(Kl);Vl=n(mw,"BLOCKQUOTE",{});var _w=a(Vl);Jl=n(_w,"BLOCKQUOTE",{});var gw=a(Jl);Xl=n(gw,"P",{});var bw=a(Xl);tk=i(bw,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs)`),bw.forEach(t),gw.forEach(t),_w.forEach(t),mw.forEach(t),ok=l(A),Zl=n(A,"BLOCKQUOTE",{});var kw=a(Zl);Yl=n(kw,"BLOCKQUOTE",{});var vw=a(Yl);ec=n(vw,"BLOCKQUOTE",{});var yw=a(ec);tc=n(yw,"P",{});var Tw=a(tc);nk=i(Tw,"tokenizer.decode(predictions).split()"),Tw.forEach(t),yw.forEach(t),vw.forEach(t),kw.forEach(t),A.forEach(t),ak=l(pe),gt=n(pe,"DIV",{class:!0});var Ns=a(gt);m(er.$$.fragment,Ns),rk=l(Ns),oc=n(Ns,"P",{});var xw=a(oc);sk=i(xw,"Example:"),xw.forEach(t),ik=l(Ns),m(tr.$$.fragment,Ns),Ns.forEach(t),dk=l(pe),bt=n(pe,"DIV",{class:!0});var Ls=a(bt);m(or.$$.fragment,Ls),lk=l(Ls),nc=n(Ls,"P",{});var ww=a(nc);ck=i(ww,"Example:"),ww.forEach(t),pk=l(Ls),m(nr.$$.fragment,Ls),Ls.forEach(t),pe.forEach(t),_p=l(r),mo=n(r,"H2",{class:!0});var dh=a(mo);Yo=n(dh,"A",{id:!0,class:!0,href:!0});var zw=a(Yo);ac=n(zw,"SPAN",{});var Bw=a(ac);m(ar.$$.fragment,Bw),Bw.forEach(t),zw.forEach(t),hk=l(dh),rc=n(dh,"SPAN",{});var Fw=a(rc);uk=i(Fw,"FlaxBartForSequenceClassification"),Fw.forEach(t),dh.forEach(t),gp=l(r),N=n(r,"DIV",{class:!0});var ee=a(N);m(rr.$$.fragment,ee),fk=l(ee),sc=n(ee,"P",{});var qw=a(sc);mk=i(qw,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),qw.forEach(t),_k=l(ee),sr=n(ee,"P",{});var lh=a(sr);gk=i(lh,"This model inherits from "),fs=n(lh,"A",{href:!0});var $w=a(fs);bk=i($w,"FlaxPreTrainedModel"),$w.forEach(t),kk=i(lh,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),lh.forEach(t),vk=l(ee),ir=n(ee,"P",{});var ch=a(ir);yk=i(ch,"This model is also a Flax Linen "),dr=n(ch,"A",{href:!0,rel:!0});var Ew=a(dr);Tk=i(Ew,"flax.nn.Module"),Ew.forEach(t),xk=i(ch,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ch.forEach(t),wk=l(ee),ic=n(ee,"P",{});var Mw=a(ic);zk=i(Mw,"Finally, this model supports inherent JAX features such as:"),Mw.forEach(t),Bk=l(ee),dt=n(ee,"UL",{});var pn=a(dt);dc=n(pn,"LI",{});var jw=a(dc);lr=n(jw,"A",{href:!0,rel:!0});var Cw=a(lr);Fk=i(Cw,"Just-In-Time (JIT) compilation"),Cw.forEach(t),jw.forEach(t),qk=l(pn),lc=n(pn,"LI",{});var Pw=a(lc);cr=n(Pw,"A",{href:!0,rel:!0});var Ow=a(cr);$k=i(Ow,"Automatic Differentiation"),Ow.forEach(t),Pw.forEach(t),Ek=l(pn),cc=n(pn,"LI",{});var Aw=a(cc);pr=n(Aw,"A",{href:!0,rel:!0});var Sw=a(pr);Mk=i(Sw,"Vectorization"),Sw.forEach(t),Aw.forEach(t),jk=l(pn),pc=n(pn,"LI",{});var Iw=a(pc);hr=n(Iw,"A",{href:!0,rel:!0});var Nw=a(hr);Ck=i(Nw,"Parallelization"),Nw.forEach(t),Iw.forEach(t),pn.forEach(t),Pk=l(ee),Me=n(ee,"DIV",{class:!0});var Ct=a(Me);m(ur.$$.fragment,Ct),Ok=l(Ct),_o=n(Ct,"P",{});var Ds=a(_o);Ak=i(Ds,"The "),hc=n(Ds,"CODE",{});var Lw=a(hc);Sk=i(Lw,"FlaxBartPreTrainedModel"),Lw.forEach(t),Ik=i(Ds," forward method, overrides the "),uc=n(Ds,"CODE",{});var Dw=a(uc);Nk=i(Dw,"__call__"),Dw.forEach(t),Lk=i(Ds," special method."),Ds.forEach(t),Dk=l(Ct),m(en.$$.fragment,Ct),Gk=l(Ct),fc=n(Ct,"P",{});var Gw=a(fc);Uk=i(Gw,"Example:"),Gw.forEach(t),Wk=l(Ct),m(fr.$$.fragment,Ct),Ct.forEach(t),Qk=l(ee),kt=n(ee,"DIV",{class:!0});var Gs=a(kt);m(mr.$$.fragment,Gs),Rk=l(Gs),mc=n(Gs,"P",{});var Uw=a(mc);Hk=i(Uw,"Example:"),Uw.forEach(t),Kk=l(Gs),m(_r.$$.fragment,Gs),Gs.forEach(t),Vk=l(ee),vt=n(ee,"DIV",{class:!0});var Us=a(vt);m(gr.$$.fragment,Us),Jk=l(Us),_c=n(Us,"P",{});var Ww=a(_c);Xk=i(Ww,"Example:"),Ww.forEach(t),Zk=l(Us),m(br.$$.fragment,Us),Us.forEach(t),ee.forEach(t),bp=l(r),go=n(r,"H2",{class:!0});var ph=a(go);tn=n(ph,"A",{id:!0,class:!0,href:!0});var Qw=a(tn);gc=n(Qw,"SPAN",{});var Rw=a(gc);m(kr.$$.fragment,Rw),Rw.forEach(t),Qw.forEach(t),Yk=l(ph),bc=n(ph,"SPAN",{});var Hw=a(bc);ev=i(Hw,"FlaxBartForQuestionAnswering"),Hw.forEach(t),ph.forEach(t),kp=l(r),L=n(r,"DIV",{class:!0});var te=a(L);m(vr.$$.fragment,te),tv=l(te),bo=n(te,"P",{});var Ws=a(bo);ov=i(Ws,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),kc=n(Ws,"CODE",{});var Kw=a(kc);nv=i(Kw,"span start logits"),Kw.forEach(t),av=i(Ws," and "),vc=n(Ws,"CODE",{});var Vw=a(vc);rv=i(Vw,"span end logits"),Vw.forEach(t),sv=i(Ws,")."),Ws.forEach(t),iv=l(te),yr=n(te,"P",{});var hh=a(yr);dv=i(hh,"This model inherits from "),ms=n(hh,"A",{href:!0});var Jw=a(ms);lv=i(Jw,"FlaxPreTrainedModel"),Jw.forEach(t),cv=i(hh,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hh.forEach(t),pv=l(te),Tr=n(te,"P",{});var uh=a(Tr);hv=i(uh,"This model is also a Flax Linen "),xr=n(uh,"A",{href:!0,rel:!0});var Xw=a(xr);uv=i(Xw,"flax.nn.Module"),Xw.forEach(t),fv=i(uh,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),uh.forEach(t),mv=l(te),yc=n(te,"P",{});var Zw=a(yc);_v=i(Zw,"Finally, this model supports inherent JAX features such as:"),Zw.forEach(t),gv=l(te),lt=n(te,"UL",{});var hn=a(lt);Tc=n(hn,"LI",{});var Yw=a(Tc);wr=n(Yw,"A",{href:!0,rel:!0});var e2=a(wr);bv=i(e2,"Just-In-Time (JIT) compilation"),e2.forEach(t),Yw.forEach(t),kv=l(hn),xc=n(hn,"LI",{});var t2=a(xc);zr=n(t2,"A",{href:!0,rel:!0});var o2=a(zr);vv=i(o2,"Automatic Differentiation"),o2.forEach(t),t2.forEach(t),yv=l(hn),wc=n(hn,"LI",{});var n2=a(wc);Br=n(n2,"A",{href:!0,rel:!0});var a2=a(Br);Tv=i(a2,"Vectorization"),a2.forEach(t),n2.forEach(t),xv=l(hn),zc=n(hn,"LI",{});var r2=a(zc);Fr=n(r2,"A",{href:!0,rel:!0});var s2=a(Fr);wv=i(s2,"Parallelization"),s2.forEach(t),r2.forEach(t),hn.forEach(t),zv=l(te),je=n(te,"DIV",{class:!0});var Pt=a(je);m(qr.$$.fragment,Pt),Bv=l(Pt),ko=n(Pt,"P",{});var Qs=a(ko);Fv=i(Qs,"The "),Bc=n(Qs,"CODE",{});var i2=a(Bc);qv=i(i2,"FlaxBartPreTrainedModel"),i2.forEach(t),$v=i(Qs," forward method, overrides the "),Fc=n(Qs,"CODE",{});var d2=a(Fc);Ev=i(d2,"__call__"),d2.forEach(t),Mv=i(Qs," special method."),Qs.forEach(t),jv=l(Pt),m(on.$$.fragment,Pt),Cv=l(Pt),qc=n(Pt,"P",{});var l2=a(qc);Pv=i(l2,"Example:"),l2.forEach(t),Ov=l(Pt),m($r.$$.fragment,Pt),Pt.forEach(t),Av=l(te),yt=n(te,"DIV",{class:!0});var Rs=a(yt);m(Er.$$.fragment,Rs),Sv=l(Rs),$c=n(Rs,"P",{});var c2=a($c);Iv=i(c2,"Example:"),c2.forEach(t),Nv=l(Rs),m(Mr.$$.fragment,Rs),Rs.forEach(t),Lv=l(te),Tt=n(te,"DIV",{class:!0});var Hs=a(Tt);m(jr.$$.fragment,Hs),Dv=l(Hs),Ec=n(Hs,"P",{});var p2=a(Ec);Gv=i(p2,"Example:"),p2.forEach(t),Uv=l(Hs),m(Cr.$$.fragment,Hs),Hs.forEach(t),te.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify($2)),c(x,"id","bart"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#bart"),c(v,"class","relative group"),c(ue,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ue,"rel","nofollow"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(K,"class","relative group"),c(V,"href","https://arxiv.org/abs/1910.13461"),c(V,"rel","nofollow"),c(Se,"href","https://huggingface.co/sshleifer"),c(Se,"rel","nofollow"),c(Ie,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Ie,"rel","nofollow"),c(ze,"id","examples"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#examples"),c(ge,"class","relative group"),c(fn,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(fn,"rel","nofollow"),c(Nr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(mn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(mn,"rel","nofollow"),c(_n,"href","https://huggingface.co/models?search=distilbart"),c(_n,"rel","nofollow"),c(gn,"href","https://arxiv.org/abs/2010.13002"),c(gn,"rel","nofollow"),c(yo,"id","implementation-notes"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#implementation-notes"),c(Lt,"class","relative group"),c(Lr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer"),c(Dr,"href","/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(Gr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartModel"),c(Wr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(To,"id","mask-filling"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#mask-filling"),c(Wt,"class","relative group"),c(xo,"id","transformers.BartConfig"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.BartConfig"),c(Qt,"class","relative group"),c(Qr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartModel"),c(xn,"href","https://huggingface.co/facebook/bart-large"),c(xn,"rel","nofollow"),c(Rr,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Hr,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(be,"class","docstring"),c(wo,"id","transformers.BartTokenizer"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.BartTokenizer"),c(Kt,"class","relative group"),c(Kr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer"),c(Vr,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Jr,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(at,"class","docstring"),c(zo,"id","transformers.BartTokenizerFast"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.BartTokenizerFast"),c(Vt,"class","relative group"),c(Xr,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizerFast"),c(Zr,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Yr,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(rt,"class","docstring"),c(Bo,"id","transformers.BartModel"),c(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bo,"href","#transformers.BartModel"),c(Jt,"class","relative group"),c(es,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pn,"rel","nofollow"),c(ts,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartModel"),c(Fe,"class","docstring"),c(De,"class","docstring"),c(qo,"id","transformers.BartForConditionalGeneration"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BartForConditionalGeneration"),c(Zt,"class","relative group"),c(os,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Mo,"id","generate-summary"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#generate-summary"),c(Eo,"class","relative group"),c(M,"class","docstring"),c(Ge,"class","docstring"),c(jo,"id","transformers.BartForSequenceClassification"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BartForSequenceClassification"),c(eo,"class","relative group"),c(as,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vn,"rel","nofollow"),c(rs,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForSequenceClassification"),c(Y,"class","docstring"),c(ke,"class","docstring"),c(Po,"id","transformers.BartForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.BartForQuestionAnswering"),c(oo,"class","relative group"),c(ss,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(na,"rel","nofollow"),c(is,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(qe,"class","docstring"),c(ve,"class","docstring"),c(Ao,"id","transformers.BartForCausalLM"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.BartForCausalLM"),c(ro,"class","relative group"),c(ft,"class","docstring"),c(ia,"class","docstring"),c(So,"id","transformers.TFBartModel"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.TFBartModel"),c(so,"class","relative group"),c(ds,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fa,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.TFBartModel"),c($e,"class","docstring"),c(ye,"class","docstring"),c(Lo,"id","transformers.TFBartForConditionalGeneration"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.TFBartForConditionalGeneration"),c(lo,"class","relative group"),c(cs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ya,"rel","nofollow"),c(ps,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(Wo,"id","generate-summary"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#generate-summary"),c(Uo,"class","relative group"),c(Ro,"id","probs[5]-is-associated-with-the-mask-token"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#probs[5]-is-associated-with-the-mask-token"),c(Qo,"class","relative group"),c(P,"class","docstring"),c(Te,"class","docstring"),c(Ho,"id","transformers.FlaxBartModel"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.FlaxBartModel"),c(po,"class","relative group"),c(hs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ma,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ja,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Pa,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Oa,"rel","nofollow"),c(Ee,"class","docstring"),c(mt,"class","docstring"),c(_t,"class","docstring"),c(Q,"class","docstring"),c(Vo,"id","transformers.FlaxBartForConditionalGeneration"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBartForConditionalGeneration"),c(uo,"class","relative group"),c(us,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ra,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ra,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ha,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ka,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Va,"rel","nofollow"),c(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ja,"rel","nofollow"),c(Zo,"id","generate-summary"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#generate-summary"),c(Xo,"class","relative group"),c(j,"class","docstring"),c(gt,"class","docstring"),c(bt,"class","docstring"),c(R,"class","docstring"),c(Yo,"id","transformers.FlaxBartForSequenceClassification"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.FlaxBartForSequenceClassification"),c(mo,"class","relative group"),c(fs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(hr,"rel","nofollow"),c(Me,"class","docstring"),c(kt,"class","docstring"),c(vt,"class","docstring"),c(N,"class","docstring"),c(tn,"id","transformers.FlaxBartForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.FlaxBartForQuestionAnswering"),c(go,"class","relative group"),c(ms,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(xr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(wr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zr,"rel","nofollow"),c(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Br,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Fr,"rel","nofollow"),c(je,"class","docstring"),c(yt,"class","docstring"),c(Tt,"class","docstring"),c(L,"class","docstring")},m(r,h){e(document.head,p),u(r,B,h),u(r,v,h),e(v,x),e(x,z),_(T,z,null),e(v,y),e(v,F),e(F,Re),u(r,xe,h),u(r,$,h),e($,Pe),e(Pe,he),e($,He),e($,ue),e(ue,fe),e($,Ke),u(r,Ue,h),u(r,K,h),e(K,G),e(G,Oe),_(oe,Oe,null),e(K,S),e(K,I),e(I,Ve),u(r,ie,h),u(r,de,h),e(de,Je),e(de,V),e(V,Xe),e(de,Ze),u(r,U,h),u(r,we,h),e(we,me),u(r,We,h),u(r,Z,h),e(Z,ne),e(ne,Ye),e(Z,et),e(Z,J),e(J,tt),e(Z,_e),e(Z,Ae),e(Ae,w),u(r,E,h),u(r,H,h),e(H,Ot),e(H,Se),e(Se,ae),e(H,At),e(H,Ie),e(Ie,St),e(H,re),u(r,le,h),u(r,ge,h),e(ge,ze),e(ze,se),_(Ne,se,null),e(ge,It),e(ge,Le),e(Le,Nt),u(r,Lc,h),u(r,ct,h),e(ct,un),e(un,fh),e(un,fn),e(fn,mh),e(un,_h),e(ct,gh),e(ct,ot),e(ot,bh),e(ot,Nr),e(Nr,kh),e(ot,vh),e(ot,Ks),e(Ks,yh),e(ot,Th),e(ot,mn),e(mn,xh),e(ot,wh),e(ct,zh),e(ct,vo),e(vo,_n),e(_n,Bh),e(vo,Fh),e(vo,gn),e(gn,qh),e(vo,$h),u(r,Dc,h),u(r,Lt,h),e(Lt,yo),e(yo,Vs),_(bn,Vs,null),e(Lt,Eh),e(Lt,Js),e(Js,Mh),u(r,Gc,h),u(r,Be,h),e(Be,nt),e(nt,jh),e(nt,Xs),e(Xs,Ch),e(nt,Ph),e(nt,Lr),e(Lr,Oh),e(nt,Ah),e(nt,Dr),e(Dr,Sh),e(nt,Ih),e(Be,Nh),e(Be,Dt),e(Dt,Lh),e(Dt,Gr),e(Gr,Dh),e(Dt,Gh),e(Dt,Zs),e(Zs,Uh),e(Dt,Wh),e(Be,Qh),e(Be,Gt),e(Gt,Rh),e(Gt,Ys),e(Ys,Hh),e(Gt,Kh),e(Gt,ei),e(ei,Vh),e(Gt,Jh),e(Be,Xh),e(Be,Ur),e(Ur,Wr),e(Wr,Zh),e(Ur,Yh),e(Be,eu),e(Be,Ut),e(Ut,tu),e(Ut,ti),e(ti,ou),e(Ut,nu),e(Ut,oi),e(oi,au),e(Ut,ru),u(r,Uc,h),u(r,Wt,h),e(Wt,To),e(To,ni),_(kn,ni,null),e(Wt,su),e(Wt,ai),e(ai,iu),u(r,Wc,h),u(r,pt,h),e(pt,du),e(pt,ri),e(ri,lu),e(pt,cu),e(pt,si),e(si,pu),e(pt,hu),u(r,Qc,h),_(vn,r,h),u(r,Rc,h),u(r,Qt,h),e(Qt,xo),e(xo,ii),_(yn,ii,null),e(Qt,uu),e(Qt,di),e(di,fu),u(r,Hc,h),u(r,be,h),_(Tn,be,null),e(be,mu),e(be,Rt),e(Rt,_u),e(Rt,Qr),e(Qr,gu),e(Rt,bu),e(Rt,xn),e(xn,ku),e(Rt,vu),e(be,yu),e(be,Ht),e(Ht,Tu),e(Ht,Rr),e(Rr,xu),e(Ht,wu),e(Ht,Hr),e(Hr,zu),e(Ht,Bu),e(be,Fu),e(be,li),e(li,qu),e(be,$u),_(wn,be,null),u(r,Kc,h),u(r,Kt,h),e(Kt,wo),e(wo,ci),_(zn,ci,null),e(Kt,Eu),e(Kt,pi),e(pi,Mu),u(r,Vc,h),u(r,at,h),_(Bn,at,null),e(at,ju),e(at,hi),e(hi,Cu),e(at,Pu),e(at,ht),e(ht,Kr),e(Kr,Ou),e(ht,Au),e(ht,Vr),e(Vr,Su),e(ht,Iu),e(ht,Jr),e(Jr,Nu),e(ht,Lu),u(r,Jc,h),u(r,Vt,h),e(Vt,zo),e(zo,ui),_(Fn,ui,null),e(Vt,Du),e(Vt,fi),e(fi,Gu),u(r,Xc,h),u(r,rt,h),_(qn,rt,null),e(rt,Uu),e(rt,$n),e($n,Wu),e($n,mi),e(mi,Qu),e($n,Ru),e(rt,Hu),e(rt,ut),e(ut,Xr),e(Xr,Ku),e(ut,Vu),e(ut,Zr),e(Zr,Ju),e(ut,Xu),e(ut,Yr),e(Yr,Zu),e(ut,Yu),u(r,Zc,h),u(r,Jt,h),e(Jt,Bo),e(Bo,_i),_(En,_i,null),e(Jt,ef),e(Jt,gi),e(gi,tf),u(r,Yc,h),u(r,De,h),_(Mn,De,null),e(De,of),e(De,jn),e(jn,nf),e(jn,es),e(es,af),e(jn,rf),e(De,sf),e(De,Cn),e(Cn,df),e(Cn,Pn),e(Pn,lf),e(Cn,cf),e(De,pf),e(De,Fe),_(On,Fe,null),e(Fe,hf),e(Fe,Xt),e(Xt,uf),e(Xt,ts),e(ts,ff),e(Xt,mf),e(Xt,bi),e(bi,_f),e(Xt,gf),e(Fe,bf),_(Fo,Fe,null),e(Fe,kf),e(Fe,ki),e(ki,vf),e(Fe,yf),_(An,Fe,null),u(r,ep,h),u(r,Zt,h),e(Zt,qo),e(qo,vi),_(Sn,vi,null),e(Zt,Tf),e(Zt,yi),e(yi,xf),u(r,tp,h),u(r,Ge,h),_(In,Ge,null),e(Ge,wf),e(Ge,Nn),e(Nn,zf),e(Nn,os),e(os,Bf),e(Nn,Ff),e(Ge,qf),e(Ge,Ln),e(Ln,$f),e(Ln,Dn),e(Dn,Ef),e(Ln,Mf),e(Ge,jf),e(Ge,M),_(Gn,M,null),e(M,Cf),e(M,Yt),e(Yt,Pf),e(Yt,ns),e(ns,Of),e(Yt,Af),e(Yt,Ti),e(Ti,Sf),e(Yt,If),e(M,Nf),_($o,M,null),e(M,Lf),e(M,xi),e(xi,Df),e(M,Gf),e(M,wi),e(wi,zi),e(zi,Bi),e(Bi,Fi),e(Fi,Uf),e(M,Wf),e(M,qi),e(qi,$i),e($i,Ei),e(Ei,Mi),e(Mi,Qf),e(M,Rf),e(M,ji),e(ji,Ci),e(Ci,Pi),e(Pi,Oi),e(Oi,Hf),e(M,Kf),e(M,Ai),e(Ai,Si),e(Si,Un),e(Un,Eo),e(Eo,Mo),e(Mo,Ii),_(Wn,Ii,null),e(Eo,Vf),e(Eo,Ni),e(Ni,Jf),e(Un,Xf),e(Un,Li),e(Li,Zf),e(M,Yf),e(M,Di),e(Di,em),e(M,tm),e(M,Gi),e(Gi,Ui),e(Ui,Wi),e(Wi,Qi),e(Qi,om),e(M,nm),e(M,Ri),e(Ri,Hi),e(Hi,Ki),e(Ki,Vi),e(Vi,am),e(M,rm),e(M,Ji),e(Ji,Xi),e(Xi,Zi),e(Zi,Yi),e(Yi,sm),e(M,im),e(M,ed),e(ed,td),e(td,od),e(od,nd),e(nd,dm),u(r,op,h),u(r,eo,h),e(eo,jo),e(jo,ad),_(Qn,ad,null),e(eo,lm),e(eo,rd),e(rd,cm),u(r,np,h),u(r,ke,h),_(Rn,ke,null),e(ke,pm),e(ke,sd),e(sd,hm),e(ke,um),e(ke,Hn),e(Hn,fm),e(Hn,as),e(as,mm),e(Hn,_m),e(ke,gm),e(ke,Kn),e(Kn,bm),e(Kn,Vn),e(Vn,km),e(Kn,vm),e(ke,ym),e(ke,Y),_(Jn,Y,null),e(Y,Tm),e(Y,to),e(to,xm),e(to,rs),e(rs,wm),e(to,zm),e(to,id),e(id,Bm),e(to,Fm),e(Y,qm),_(Co,Y,null),e(Y,$m),e(Y,dd),e(dd,Em),e(Y,Mm),_(Xn,Y,null),e(Y,jm),e(Y,ld),e(ld,Cm),e(Y,Pm),_(Zn,Y,null),u(r,ap,h),u(r,oo,h),e(oo,Po),e(Po,cd),_(Yn,cd,null),e(oo,Om),e(oo,pd),e(pd,Am),u(r,rp,h),u(r,ve,h),_(ea,ve,null),e(ve,Sm),e(ve,no),e(no,Im),e(no,hd),e(hd,Nm),e(no,Lm),e(no,ud),e(ud,Dm),e(no,Gm),e(ve,Um),e(ve,ta),e(ta,Wm),e(ta,ss),e(ss,Qm),e(ta,Rm),e(ve,Hm),e(ve,oa),e(oa,Km),e(oa,na),e(na,Vm),e(oa,Jm),e(ve,Xm),e(ve,qe),_(aa,qe,null),e(qe,Zm),e(qe,ao),e(ao,Ym),e(ao,is),e(is,e_),e(ao,t_),e(ao,fd),e(fd,o_),e(ao,n_),e(qe,a_),_(Oo,qe,null),e(qe,r_),e(qe,md),e(md,s_),e(qe,i_),_(ra,qe,null),u(r,sp,h),u(r,ro,h),e(ro,Ao),e(Ao,_d),_(sa,_d,null),e(ro,d_),e(ro,gd),e(gd,l_),u(r,ip,h),u(r,ia,h),e(ia,ft),_(da,ft,null),e(ft,c_),e(ft,bd),e(bd,p_),e(ft,h_),_(la,ft,null),u(r,dp,h),u(r,so,h),e(so,So),e(So,kd),_(ca,kd,null),e(so,u_),e(so,vd),e(vd,f_),u(r,lp,h),u(r,ye,h),_(pa,ye,null),e(ye,m_),e(ye,ha),e(ha,__),e(ha,ds),e(ds,g_),e(ha,b_),e(ye,k_),e(ye,ua),e(ua,v_),e(ua,fa),e(fa,y_),e(ua,T_),e(ye,x_),_(Io,ye,null),e(ye,w_),e(ye,$e),_(ma,$e,null),e($e,z_),e($e,io),e(io,B_),e(io,ls),e(ls,F_),e(io,q_),e(io,yd),e(yd,$_),e(io,E_),e($e,M_),_(No,$e,null),e($e,j_),e($e,Td),e(Td,C_),e($e,P_),_(_a,$e,null),u(r,cp,h),u(r,lo,h),e(lo,Lo),e(Lo,xd),_(ga,xd,null),e(lo,O_),e(lo,wd),e(wd,A_),u(r,pp,h),u(r,Te,h),_(ba,Te,null),e(Te,S_),e(Te,ka),e(ka,I_),e(ka,cs),e(cs,N_),e(ka,L_),e(Te,D_),e(Te,va),e(va,G_),e(va,ya),e(ya,U_),e(va,W_),e(Te,Q_),_(Do,Te,null),e(Te,R_),e(Te,P),_(Ta,P,null),e(P,H_),e(P,co),e(co,K_),e(co,ps),e(ps,V_),e(co,J_),e(co,zd),e(zd,X_),e(co,Z_),e(P,Y_),_(Go,P,null),e(P,eg),e(P,Bd),e(Bd,tg),e(P,og),e(P,Fd),e(Fd,qd),e(qd,$d),e($d,Ed),e(Ed,ng),e(P,ag),e(P,Md),e(Md,jd),e(jd,Cd),e(Cd,Pd),e(Pd,rg),e(P,sg),e(P,Od),e(Od,Ad),e(Ad,Sd),e(Sd,Id),e(Id,ig),e(P,dg),e(P,Nd),e(Nd,Ld),e(Ld,xa),e(xa,Uo),e(Uo,Wo),e(Wo,Dd),_(wa,Dd,null),e(Uo,lg),e(Uo,Gd),e(Gd,cg),e(xa,pg),e(xa,Ud),e(Ud,hg),e(P,ug),e(P,Wd),e(Wd,fg),e(P,mg),e(P,Qd),e(Qd,Rd),e(Rd,Hd),e(Hd,Kd),e(Kd,_g),e(P,gg),e(P,Vd),e(Vd,Jd),e(Jd,za),e(za,Xd),e(Xd,bg),e(za,kg),e(za,Qo),e(Qo,Ro),e(Ro,Zd),_(Ba,Zd,null),e(Qo,vg),e(Qo,Yd),e(Yd,yg),u(r,hp,h),u(r,po,h),e(po,Ho),e(Ho,el),_(Fa,el,null),e(po,Tg),e(po,tl),e(tl,xg),u(r,up,h),u(r,Q,h),_(qa,Q,null),e(Q,wg),e(Q,$a),e($a,zg),e($a,hs),e(hs,Bg),e($a,Fg),e(Q,qg),e(Q,Ea),e(Ea,$g),e(Ea,Ma),e(Ma,Eg),e(Ea,Mg),e(Q,jg),e(Q,ol),e(ol,Cg),e(Q,Pg),e(Q,st),e(st,nl),e(nl,ja),e(ja,Og),e(st,Ag),e(st,al),e(al,Ca),e(Ca,Sg),e(st,Ig),e(st,rl),e(rl,Pa),e(Pa,Ng),e(st,Lg),e(st,sl),e(sl,Oa),e(Oa,Dg),e(Q,Gg),e(Q,Ee),_(Aa,Ee,null),e(Ee,Ug),e(Ee,ho),e(ho,Wg),e(ho,il),e(il,Qg),e(ho,Rg),e(ho,dl),e(dl,Hg),e(ho,Kg),e(Ee,Vg),_(Ko,Ee,null),e(Ee,Jg),e(Ee,ll),e(ll,Xg),e(Ee,Zg),_(Sa,Ee,null),e(Q,Yg),e(Q,mt),_(Ia,mt,null),e(mt,eb),e(mt,cl),e(cl,tb),e(mt,ob),_(Na,mt,null),e(Q,nb),e(Q,_t),_(La,_t,null),e(_t,ab),e(_t,pl),e(pl,rb),e(_t,sb),_(Da,_t,null),u(r,fp,h),u(r,uo,h),e(uo,Vo),e(Vo,hl),_(Ga,hl,null),e(uo,ib),e(uo,ul),e(ul,db),u(r,mp,h),u(r,R,h),_(Ua,R,null),e(R,lb),e(R,Wa),e(Wa,cb),e(Wa,us),e(us,pb),e(Wa,hb),e(R,ub),e(R,Qa),e(Qa,fb),e(Qa,Ra),e(Ra,mb),e(Qa,_b),e(R,gb),e(R,fl),e(fl,bb),e(R,kb),e(R,it),e(it,ml),e(ml,Ha),e(Ha,vb),e(it,yb),e(it,_l),e(_l,Ka),e(Ka,Tb),e(it,xb),e(it,gl),e(gl,Va),e(Va,wb),e(it,zb),e(it,bl),e(bl,Ja),e(Ja,Bb),e(R,Fb),e(R,j),_(Xa,j,null),e(j,qb),e(j,fo),e(fo,$b),e(fo,kl),e(kl,Eb),e(fo,Mb),e(fo,vl),e(vl,jb),e(fo,Cb),e(j,Pb),_(Jo,j,null),e(j,Ob),e(j,yl),e(yl,Ab),e(j,Sb),e(j,Tl),e(Tl,xl),e(xl,wl),e(wl,zl),e(zl,Ib),e(j,Nb),e(j,Bl),e(Bl,Fl),e(Fl,ql),e(ql,$l),e($l,Lb),e(j,Db),e(j,El),e(El,Ml),e(Ml,jl),e(jl,Cl),e(Cl,Gb),e(j,Ub),e(j,Pl),e(Pl,Ol),e(Ol,Za),e(Za,Xo),e(Xo,Zo),e(Zo,Al),_(Ya,Al,null),e(Xo,Wb),e(Xo,Sl),e(Sl,Qb),e(Za,Rb),e(Za,Il),e(Il,Hb),e(j,Kb),e(j,Nl),e(Nl,Vb),e(j,Jb),e(j,Ll),e(Ll,Dl),e(Dl,Gl),e(Gl,Ul),e(Ul,Xb),e(j,Zb),e(j,Wl),e(Wl,Ql),e(Ql,Rl),e(Rl,Hl),e(Hl,Yb),e(j,ek),e(j,Kl),e(Kl,Vl),e(Vl,Jl),e(Jl,Xl),e(Xl,tk),e(j,ok),e(j,Zl),e(Zl,Yl),e(Yl,ec),e(ec,tc),e(tc,nk),e(R,ak),e(R,gt),_(er,gt,null),e(gt,rk),e(gt,oc),e(oc,sk),e(gt,ik),_(tr,gt,null),e(R,dk),e(R,bt),_(or,bt,null),e(bt,lk),e(bt,nc),e(nc,ck),e(bt,pk),_(nr,bt,null),u(r,_p,h),u(r,mo,h),e(mo,Yo),e(Yo,ac),_(ar,ac,null),e(mo,hk),e(mo,rc),e(rc,uk),u(r,gp,h),u(r,N,h),_(rr,N,null),e(N,fk),e(N,sc),e(sc,mk),e(N,_k),e(N,sr),e(sr,gk),e(sr,fs),e(fs,bk),e(sr,kk),e(N,vk),e(N,ir),e(ir,yk),e(ir,dr),e(dr,Tk),e(ir,xk),e(N,wk),e(N,ic),e(ic,zk),e(N,Bk),e(N,dt),e(dt,dc),e(dc,lr),e(lr,Fk),e(dt,qk),e(dt,lc),e(lc,cr),e(cr,$k),e(dt,Ek),e(dt,cc),e(cc,pr),e(pr,Mk),e(dt,jk),e(dt,pc),e(pc,hr),e(hr,Ck),e(N,Pk),e(N,Me),_(ur,Me,null),e(Me,Ok),e(Me,_o),e(_o,Ak),e(_o,hc),e(hc,Sk),e(_o,Ik),e(_o,uc),e(uc,Nk),e(_o,Lk),e(Me,Dk),_(en,Me,null),e(Me,Gk),e(Me,fc),e(fc,Uk),e(Me,Wk),_(fr,Me,null),e(N,Qk),e(N,kt),_(mr,kt,null),e(kt,Rk),e(kt,mc),e(mc,Hk),e(kt,Kk),_(_r,kt,null),e(N,Vk),e(N,vt),_(gr,vt,null),e(vt,Jk),e(vt,_c),e(_c,Xk),e(vt,Zk),_(br,vt,null),u(r,bp,h),u(r,go,h),e(go,tn),e(tn,gc),_(kr,gc,null),e(go,Yk),e(go,bc),e(bc,ev),u(r,kp,h),u(r,L,h),_(vr,L,null),e(L,tv),e(L,bo),e(bo,ov),e(bo,kc),e(kc,nv),e(bo,av),e(bo,vc),e(vc,rv),e(bo,sv),e(L,iv),e(L,yr),e(yr,dv),e(yr,ms),e(ms,lv),e(yr,cv),e(L,pv),e(L,Tr),e(Tr,hv),e(Tr,xr),e(xr,uv),e(Tr,fv),e(L,mv),e(L,yc),e(yc,_v),e(L,gv),e(L,lt),e(lt,Tc),e(Tc,wr),e(wr,bv),e(lt,kv),e(lt,xc),e(xc,zr),e(zr,vv),e(lt,yv),e(lt,wc),e(wc,Br),e(Br,Tv),e(lt,xv),e(lt,zc),e(zc,Fr),e(Fr,wv),e(L,zv),e(L,je),_(qr,je,null),e(je,Bv),e(je,ko),e(ko,Fv),e(ko,Bc),e(Bc,qv),e(ko,$v),e(ko,Fc),e(Fc,Ev),e(ko,Mv),e(je,jv),_(on,je,null),e(je,Cv),e(je,qc),e(qc,Pv),e(je,Ov),_($r,je,null),e(L,Av),e(L,yt),_(Er,yt,null),e(yt,Sv),e(yt,$c),e($c,Iv),e(yt,Nv),_(Mr,yt,null),e(L,Lv),e(L,Tt),_(jr,Tt,null),e(Tt,Dv),e(Tt,Ec),e(Ec,Gv),e(Tt,Uv),_(Cr,Tt,null),vp=!0},p(r,[h]){const Pr={};h&2&&(Pr.$$scope={dirty:h,ctx:r}),Fo.$set(Pr);const Mc={};h&2&&(Mc.$$scope={dirty:h,ctx:r}),$o.$set(Mc);const jc={};h&2&&(jc.$$scope={dirty:h,ctx:r}),Co.$set(jc);const Cc={};h&2&&(Cc.$$scope={dirty:h,ctx:r}),Oo.$set(Cc);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:r}),Io.$set(nn);const Pc={};h&2&&(Pc.$$scope={dirty:h,ctx:r}),No.$set(Pc);const Oc={};h&2&&(Oc.$$scope={dirty:h,ctx:r}),Do.$set(Oc);const Or={};h&2&&(Or.$$scope={dirty:h,ctx:r}),Go.$set(Or);const Ac={};h&2&&(Ac.$$scope={dirty:h,ctx:r}),Ko.$set(Ac);const Sc={};h&2&&(Sc.$$scope={dirty:h,ctx:r}),Jo.$set(Sc);const Ic={};h&2&&(Ic.$$scope={dirty:h,ctx:r}),en.$set(Ic);const Ar={};h&2&&(Ar.$$scope={dirty:h,ctx:r}),on.$set(Ar)},i(r){vp||(g(T.$$.fragment,r),g(oe.$$.fragment,r),g(Ne.$$.fragment,r),g(bn.$$.fragment,r),g(kn.$$.fragment,r),g(vn.$$.fragment,r),g(yn.$$.fragment,r),g(Tn.$$.fragment,r),g(wn.$$.fragment,r),g(zn.$$.fragment,r),g(Bn.$$.fragment,r),g(Fn.$$.fragment,r),g(qn.$$.fragment,r),g(En.$$.fragment,r),g(Mn.$$.fragment,r),g(On.$$.fragment,r),g(Fo.$$.fragment,r),g(An.$$.fragment,r),g(Sn.$$.fragment,r),g(In.$$.fragment,r),g(Gn.$$.fragment,r),g($o.$$.fragment,r),g(Wn.$$.fragment,r),g(Qn.$$.fragment,r),g(Rn.$$.fragment,r),g(Jn.$$.fragment,r),g(Co.$$.fragment,r),g(Xn.$$.fragment,r),g(Zn.$$.fragment,r),g(Yn.$$.fragment,r),g(ea.$$.fragment,r),g(aa.$$.fragment,r),g(Oo.$$.fragment,r),g(ra.$$.fragment,r),g(sa.$$.fragment,r),g(da.$$.fragment,r),g(la.$$.fragment,r),g(ca.$$.fragment,r),g(pa.$$.fragment,r),g(Io.$$.fragment,r),g(ma.$$.fragment,r),g(No.$$.fragment,r),g(_a.$$.fragment,r),g(ga.$$.fragment,r),g(ba.$$.fragment,r),g(Do.$$.fragment,r),g(Ta.$$.fragment,r),g(Go.$$.fragment,r),g(wa.$$.fragment,r),g(Ba.$$.fragment,r),g(Fa.$$.fragment,r),g(qa.$$.fragment,r),g(Aa.$$.fragment,r),g(Ko.$$.fragment,r),g(Sa.$$.fragment,r),g(Ia.$$.fragment,r),g(Na.$$.fragment,r),g(La.$$.fragment,r),g(Da.$$.fragment,r),g(Ga.$$.fragment,r),g(Ua.$$.fragment,r),g(Xa.$$.fragment,r),g(Jo.$$.fragment,r),g(Ya.$$.fragment,r),g(er.$$.fragment,r),g(tr.$$.fragment,r),g(or.$$.fragment,r),g(nr.$$.fragment,r),g(ar.$$.fragment,r),g(rr.$$.fragment,r),g(ur.$$.fragment,r),g(en.$$.fragment,r),g(fr.$$.fragment,r),g(mr.$$.fragment,r),g(_r.$$.fragment,r),g(gr.$$.fragment,r),g(br.$$.fragment,r),g(kr.$$.fragment,r),g(vr.$$.fragment,r),g(qr.$$.fragment,r),g(on.$$.fragment,r),g($r.$$.fragment,r),g(Er.$$.fragment,r),g(Mr.$$.fragment,r),g(jr.$$.fragment,r),g(Cr.$$.fragment,r),vp=!0)},o(r){b(T.$$.fragment,r),b(oe.$$.fragment,r),b(Ne.$$.fragment,r),b(bn.$$.fragment,r),b(kn.$$.fragment,r),b(vn.$$.fragment,r),b(yn.$$.fragment,r),b(Tn.$$.fragment,r),b(wn.$$.fragment,r),b(zn.$$.fragment,r),b(Bn.$$.fragment,r),b(Fn.$$.fragment,r),b(qn.$$.fragment,r),b(En.$$.fragment,r),b(Mn.$$.fragment,r),b(On.$$.fragment,r),b(Fo.$$.fragment,r),b(An.$$.fragment,r),b(Sn.$$.fragment,r),b(In.$$.fragment,r),b(Gn.$$.fragment,r),b($o.$$.fragment,r),b(Wn.$$.fragment,r),b(Qn.$$.fragment,r),b(Rn.$$.fragment,r),b(Jn.$$.fragment,r),b(Co.$$.fragment,r),b(Xn.$$.fragment,r),b(Zn.$$.fragment,r),b(Yn.$$.fragment,r),b(ea.$$.fragment,r),b(aa.$$.fragment,r),b(Oo.$$.fragment,r),b(ra.$$.fragment,r),b(sa.$$.fragment,r),b(da.$$.fragment,r),b(la.$$.fragment,r),b(ca.$$.fragment,r),b(pa.$$.fragment,r),b(Io.$$.fragment,r),b(ma.$$.fragment,r),b(No.$$.fragment,r),b(_a.$$.fragment,r),b(ga.$$.fragment,r),b(ba.$$.fragment,r),b(Do.$$.fragment,r),b(Ta.$$.fragment,r),b(Go.$$.fragment,r),b(wa.$$.fragment,r),b(Ba.$$.fragment,r),b(Fa.$$.fragment,r),b(qa.$$.fragment,r),b(Aa.$$.fragment,r),b(Ko.$$.fragment,r),b(Sa.$$.fragment,r),b(Ia.$$.fragment,r),b(Na.$$.fragment,r),b(La.$$.fragment,r),b(Da.$$.fragment,r),b(Ga.$$.fragment,r),b(Ua.$$.fragment,r),b(Xa.$$.fragment,r),b(Jo.$$.fragment,r),b(Ya.$$.fragment,r),b(er.$$.fragment,r),b(tr.$$.fragment,r),b(or.$$.fragment,r),b(nr.$$.fragment,r),b(ar.$$.fragment,r),b(rr.$$.fragment,r),b(ur.$$.fragment,r),b(en.$$.fragment,r),b(fr.$$.fragment,r),b(mr.$$.fragment,r),b(_r.$$.fragment,r),b(gr.$$.fragment,r),b(br.$$.fragment,r),b(kr.$$.fragment,r),b(vr.$$.fragment,r),b(qr.$$.fragment,r),b(on.$$.fragment,r),b($r.$$.fragment,r),b(Er.$$.fragment,r),b(Mr.$$.fragment,r),b(jr.$$.fragment,r),b(Cr.$$.fragment,r),vp=!1},d(r){t(p),r&&t(B),r&&t(v),k(T),r&&t(xe),r&&t($),r&&t(Ue),r&&t(K),k(oe),r&&t(ie),r&&t(de),r&&t(U),r&&t(we),r&&t(We),r&&t(Z),r&&t(E),r&&t(H),r&&t(le),r&&t(ge),k(Ne),r&&t(Lc),r&&t(ct),r&&t(Dc),r&&t(Lt),k(bn),r&&t(Gc),r&&t(Be),r&&t(Uc),r&&t(Wt),k(kn),r&&t(Wc),r&&t(pt),r&&t(Qc),k(vn,r),r&&t(Rc),r&&t(Qt),k(yn),r&&t(Hc),r&&t(be),k(Tn),k(wn),r&&t(Kc),r&&t(Kt),k(zn),r&&t(Vc),r&&t(at),k(Bn),r&&t(Jc),r&&t(Vt),k(Fn),r&&t(Xc),r&&t(rt),k(qn),r&&t(Zc),r&&t(Jt),k(En),r&&t(Yc),r&&t(De),k(Mn),k(On),k(Fo),k(An),r&&t(ep),r&&t(Zt),k(Sn),r&&t(tp),r&&t(Ge),k(In),k(Gn),k($o),k(Wn),r&&t(op),r&&t(eo),k(Qn),r&&t(np),r&&t(ke),k(Rn),k(Jn),k(Co),k(Xn),k(Zn),r&&t(ap),r&&t(oo),k(Yn),r&&t(rp),r&&t(ve),k(ea),k(aa),k(Oo),k(ra),r&&t(sp),r&&t(ro),k(sa),r&&t(ip),r&&t(ia),k(da),k(la),r&&t(dp),r&&t(so),k(ca),r&&t(lp),r&&t(ye),k(pa),k(Io),k(ma),k(No),k(_a),r&&t(cp),r&&t(lo),k(ga),r&&t(pp),r&&t(Te),k(ba),k(Do),k(Ta),k(Go),k(wa),k(Ba),r&&t(hp),r&&t(po),k(Fa),r&&t(up),r&&t(Q),k(qa),k(Aa),k(Ko),k(Sa),k(Ia),k(Na),k(La),k(Da),r&&t(fp),r&&t(uo),k(Ga),r&&t(mp),r&&t(R),k(Ua),k(Xa),k(Jo),k(Ya),k(er),k(tr),k(or),k(nr),r&&t(_p),r&&t(mo),k(ar),r&&t(gp),r&&t(N),k(rr),k(ur),k(en),k(fr),k(mr),k(_r),k(gr),k(br),r&&t(bp),r&&t(go),k(kr),r&&t(kp),r&&t(L),k(vr),k(qr),k(on),k($r),k(Er),k(Mr),k(jr),k(Cr)}}}const $2={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"}],title:"BART"};function E2(C,p,B){let{fw:v}=p;return C.$$set=x=>{"fw"in x&&B(0,v=x.fw)},[v]}class S2 extends h2{constructor(p){super();u2(this,p,E2,q2,f2,{fw:0})}}export{S2 as default,$2 as metadata};
