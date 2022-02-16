import{S as s$,i as r$,s as i$,e as o,k as d,w as m,t as r,L as d$,c as n,d as t,m as l,a,x as f,h as i,b as c,J as e,g as u,y as _,q as g,o as k,B as b}from"../../../chunks/vendor-b1433968.js";import{T as at}from"../../../chunks/Tip-c3840994.js";import{D as q}from"../../../chunks/Docstring-ff504c58.js";import{C as I}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as C}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function l$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function c$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function p$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function u$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function h$(P){let h,z,v,M,x,T,y,B,st,Pe,F,We,be,rt,ve,ye,it,Je,ee,W,Qe,ie,N,D,dt,he,me,lt,te,ct,pt,Q,Oe,Te,Ze,de,Me,we,ut,le,xe,ze,Ye;return{c(){h=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=o("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),F=o("p"),We=r("This second option is useful when using "),be=o("code"),rt=r("tf.keras.Model.fit"),ve=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ye=o("code"),it=r("model(inputs)"),Je=r("."),ee=d(),W=o("p"),Qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ie=d(),N=o("ul"),D=o("li"),dt=r("a single Tensor with "),he=o("code"),me=r("input_ids"),lt=r(" only and nothing else: "),te=o("code"),ct=r("model(input_ids)"),pt=d(),Q=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Ze=r("model([input_ids, attention_mask])"),de=r(" or "),Me=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),le=o("li"),xe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=n(w,"P",{});var $=a(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=n(w,"UL",{});var Be=a(M);x=n(Be,"LI",{});var Xe=a(x);T=i(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),y=l(Be),B=n(Be,"LI",{});var Wt=a(B);st=i(Wt,"having all inputs as a list, tuple or dict in the first positional arguments."),Wt.forEach(t),Be.forEach(t),Pe=l(w),F=n(w,"P",{});var oe=a(F);We=i(oe,"This second option is useful when using "),be=n(oe,"CODE",{});var Qt=a(be);rt=i(Qt,"tf.keras.Model.fit"),Qt.forEach(t),ve=i(oe,` method which currently requires having all
the tensors in the first argument of the model call function: `),ye=n(oe,"CODE",{});var gt=a(ye);it=i(gt,"model(inputs)"),gt.forEach(t),Je=i(oe,"."),oe.forEach(t),ee=l(w),W=n(w,"P",{});var Z=a(W);Qe=i(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z.forEach(t),ie=l(w),N=n(w,"UL",{});var ce=a(N);D=n(ce,"LI",{});var pe=a(D);dt=i(pe,"a single Tensor with "),he=n(pe,"CODE",{});var Xt=a(he);me=i(Xt,"input_ids"),Xt.forEach(t),lt=i(pe," only and nothing else: "),te=n(pe,"CODE",{});var Kt=a(te);ct=i(Kt,"model(input_ids)"),Kt.forEach(t),pe.forEach(t),pt=l(ce),Q=n(ce,"LI",{});var ue=a(Q);Oe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ue,"CODE",{});var Ht=a(Te);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),de=i(ue," or "),Me=n(ue,"CODE",{});var Vt=a(Me);we=i(Vt,"model([input_ids, attention_mask, token_type_ids])"),Vt.forEach(t),ue.forEach(t),ut=l(ce),le=n(ce,"LI",{});var Ke=a(le);xe=i(Ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=n(Ke,"CODE",{});var Jt=a(ze);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),Ke.forEach(t),ce.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,Pe,$),u(w,F,$),e(F,We),e(F,be),e(be,rt),e(F,ve),e(F,ye),e(ye,it),e(F,Je),u(w,ee,$),u(w,W,$),e(W,Qe),u(w,ie,$),u(w,N,$),e(N,D),e(D,dt),e(D,he),e(he,me),e(D,lt),e(D,te),e(te,ct),e(N,pt),e(N,Q),e(Q,Oe),e(Q,Te),e(Te,Ze),e(Q,de),e(Q,Me),e(Me,we),e(N,ut),e(N,le),e(le,xe),e(le,ze),e(ze,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(Pe),w&&t(F),w&&t(ee),w&&t(W),w&&t(ie),w&&t(N)}}}function m$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function f$(P){let h,z,v,M,x,T,y,B,st,Pe,F,We,be,rt,ve,ye,it,Je,ee,W,Qe,ie,N,D,dt,he,me,lt,te,ct,pt,Q,Oe,Te,Ze,de,Me,we,ut,le,xe,ze,Ye;return{c(){h=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=o("ul"),x=o("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=o("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),F=o("p"),We=r("This second option is useful when using "),be=o("code"),rt=r("tf.keras.Model.fit"),ve=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),ye=o("code"),it=r("model(inputs)"),Je=r("."),ee=d(),W=o("p"),Qe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ie=d(),N=o("ul"),D=o("li"),dt=r("a single Tensor with "),he=o("code"),me=r("input_ids"),lt=r(" only and nothing else: "),te=o("code"),ct=r("model(input_ids)"),pt=d(),Q=o("li"),Oe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Ze=r("model([input_ids, attention_mask])"),de=r(" or "),Me=o("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),le=o("li"),xe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=o("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=n(w,"P",{});var $=a(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=n(w,"UL",{});var Be=a(M);x=n(Be,"LI",{});var Xe=a(x);T=i(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),y=l(Be),B=n(Be,"LI",{});var Wt=a(B);st=i(Wt,"having all inputs as a list, tuple or dict in the first positional arguments."),Wt.forEach(t),Be.forEach(t),Pe=l(w),F=n(w,"P",{});var oe=a(F);We=i(oe,"This second option is useful when using "),be=n(oe,"CODE",{});var Qt=a(be);rt=i(Qt,"tf.keras.Model.fit"),Qt.forEach(t),ve=i(oe,` method which currently requires having all
the tensors in the first argument of the model call function: `),ye=n(oe,"CODE",{});var gt=a(ye);it=i(gt,"model(inputs)"),gt.forEach(t),Je=i(oe,"."),oe.forEach(t),ee=l(w),W=n(w,"P",{});var Z=a(W);Qe=i(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Z.forEach(t),ie=l(w),N=n(w,"UL",{});var ce=a(N);D=n(ce,"LI",{});var pe=a(D);dt=i(pe,"a single Tensor with "),he=n(pe,"CODE",{});var Xt=a(he);me=i(Xt,"input_ids"),Xt.forEach(t),lt=i(pe," only and nothing else: "),te=n(pe,"CODE",{});var Kt=a(te);ct=i(Kt,"model(input_ids)"),Kt.forEach(t),pe.forEach(t),pt=l(ce),Q=n(ce,"LI",{});var ue=a(Q);Oe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ue,"CODE",{});var Ht=a(Te);Ze=i(Ht,"model([input_ids, attention_mask])"),Ht.forEach(t),de=i(ue," or "),Me=n(ue,"CODE",{});var Vt=a(Me);we=i(Vt,"model([input_ids, attention_mask, token_type_ids])"),Vt.forEach(t),ue.forEach(t),ut=l(ce),le=n(ce,"LI",{});var Ke=a(le);xe=i(Ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=n(Ke,"CODE",{});var Jt=a(ze);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),Ke.forEach(t),ce.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,Pe,$),u(w,F,$),e(F,We),e(F,be),e(be,rt),e(F,ve),e(F,ye),e(ye,it),e(F,Je),u(w,ee,$),u(w,W,$),e(W,Qe),u(w,ie,$),u(w,N,$),e(N,D),e(D,dt),e(D,he),e(he,me),e(D,lt),e(D,te),e(te,ct),e(N,pt),e(N,Q),e(Q,Oe),e(Q,Te),e(Te,Ze),e(Q,de),e(Q,Me),e(Me,we),e(N,ut),e(N,le),e(le,xe),e(le,ze),e(ze,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(Pe),w&&t(F),w&&t(ee),w&&t(W),w&&t(ie),w&&t(N)}}}function _$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function g$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function k$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function b$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function v$(P){let h,z,v,M,x;return{c(){h=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=o("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=n(T,"P",{});var y=a(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n(y,"CODE",{});var B=a(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function y$(P){let h,z,v,M,x,T,y,B,st,Pe,F,We,be,rt,ve,ye,it,Je,ee,W,Qe,ie,N,D,dt,he,me,lt,te,ct,pt,Q,Oe,Te,Ze,de,Me,we,ut,le,xe,ze,Ye,w,$,Be,Xe,Wt,oe,Qt,gt,Z,ce,pe,Xt,Kt,ue,Ht,Vt,Ke,Jt,e_,$d,t_,o_,qh,kt,n_,Kn,Fd,a_,s_,r_,_i,i_,d_,$h,gi,Ed,l_,Fh,Hn,Eh,ki,Vn,jd,c_,p_,Zt,u_,Cd,h_,m_,Pd,f_,__,jh,Jn,Ch,Yt,Ao,Od,Zn,g_,Sd,k_,Ph,bt,b_,bi,v_,Yn,y_,T_,Ad,M_,w_,Oh,vi,x_,Sh,yi,Id,z_,Ah,eo,Io,Nd,ea,B_,Ld,q_,Ih,et,$_,Dd,F_,E_,Gd,j_,C_,Ud,P_,O_,Nh,No,S_,Ti,A_,I_,Lh,Mi,Rd,N_,Dh,ta,Gh,wi,oa,Wd,L_,D_,qe,G_,Qd,U_,R_,Xd,W_,Q_,Kd,X_,K_,Hd,H_,V_,Vd,J_,Z_,Uh,na,Rh,to,Lo,Jd,aa,Y_,Zd,eg,Wh,$e,sa,tg,oo,og,xi,ng,ag,ra,sg,rg,ig,no,dg,zi,lg,cg,Bi,pg,ug,hg,Yd,mg,fg,ia,Qh,ao,Do,el,da,_g,tl,gg,Xh,K,la,kg,ol,bg,vg,vt,qi,yg,Tg,$i,Mg,wg,Fi,xg,zg,Bg,ca,qg,nl,$g,Fg,Eg,al,jg,Cg,pa,Pg,Go,ua,Og,sl,Sg,Ag,tt,ha,Ig,ma,Ng,rl,Lg,Dg,Gg,fa,_a,il,Ug,Rg,dl,Wg,Qg,ga,ll,Xg,Kg,cl,Hg,Vg,pl,Jg,Kh,so,Uo,ul,ka,Zg,hl,Yg,Hh,G,ba,ek,ro,tk,ml,ok,nk,va,ak,sk,rk,yt,Ei,ik,dk,ji,lk,ck,Ci,pk,uk,hk,ya,mk,fl,fk,_k,gk,_l,kk,bk,Ta,vk,Se,Ma,yk,gl,Tk,Mk,wa,wk,kl,xk,zk,Bk,xa,za,bl,qk,$k,vl,Fk,Ek,Ba,yl,jk,Ck,Tl,Pk,Ok,Ml,Sk,Ak,Ro,qa,Ik,wl,Nk,Lk,Wo,$a,Dk,xl,Gk,Vh,io,Qo,zl,Fa,Uk,Bl,Rk,Jh,L,Ea,Wk,ja,Qk,Ca,Xk,Kk,Hk,Pa,Vk,Pi,Jk,Zk,Yk,ql,eb,tb,Oa,ob,ot,Sa,nb,Aa,ab,$l,sb,rb,ib,Ia,Na,Fl,db,lb,El,cb,pb,La,jl,ub,hb,Cl,mb,fb,Pl,_b,gb,Xo,Da,kb,Ol,bb,vb,Ko,Ga,yb,Ua,Tb,Sl,Mb,wb,xb,Ho,Ra,zb,Al,Bb,qb,Vo,Wa,$b,Il,Fb,Zh,lo,Jo,Nl,Qa,Eb,Ll,jb,Yh,H,Xa,Cb,co,Pb,Dl,Ob,Sb,Ka,Ab,Ib,Nb,Ha,Lb,Oi,Db,Gb,Ub,Gl,Rb,Wb,Va,Qb,Ae,Ja,Xb,Ul,Kb,Hb,Za,Vb,Rl,Jb,Zb,Yb,Ya,es,Wl,ev,tv,Ql,ov,nv,ts,Xl,av,sv,Kl,rv,iv,Hl,dv,lv,Zo,os,cv,Vl,pv,uv,Yo,ns,hv,Jl,mv,em,po,en,Zl,as,fv,Yl,_v,tm,He,ss,gv,rs,kv,Si,bv,vv,yv,is,Tv,ds,Mv,wv,xv,Ie,ls,zv,uo,Bv,Ai,qv,$v,ec,Fv,Ev,jv,tn,Cv,tc,Pv,Ov,cs,om,ho,on,oc,ps,Sv,nc,Av,nm,Ve,us,Iv,hs,Nv,Ii,Lv,Dv,Gv,ms,Uv,fs,Rv,Wv,Qv,E,_s,Xv,mo,Kv,Ni,Hv,Vv,ac,Jv,Zv,Yv,nn,ey,sc,ty,oy,rc,ic,dc,lc,ny,ay,cc,pc,uc,hc,sy,ry,mc,fc,_c,gc,iy,dy,kc,bc,gs,an,sn,vc,ks,ly,yc,cy,py,Tc,uy,hy,Mc,my,fy,wc,xc,fo,zc,_y,gy,rn,dn,Bc,bs,ky,qc,by,vy,$c,yy,Ty,Fc,Ec,jc,Cc,My,wy,Pc,Oc,Sc,Ac,xy,zy,Ic,Nc,Lc,Dc,By,am,_o,ln,Gc,vs,qy,Uc,$y,sm,Fe,ys,Fy,go,Ey,Rc,jy,Cy,Wc,Py,Oy,Sy,Ts,Ay,Li,Iy,Ny,Ly,Ms,Dy,ws,Gy,Uy,Ry,Ne,xs,Wy,ko,Qy,Di,Xy,Ky,Qc,Hy,Vy,Jy,cn,Zy,Xc,Yy,eT,zs,rm,bo,pn,Kc,Bs,tT,Hc,oT,im,Ee,qs,nT,Vc,aT,sT,$s,rT,Gi,iT,dT,lT,Fs,cT,Es,pT,uT,hT,ne,js,mT,vo,fT,Ui,_T,gT,Jc,kT,bT,vT,un,yT,Zc,TT,MT,Cs,wT,Yc,xT,zT,Ps,dm,yo,hn,ep,Os,BT,tp,qT,lm,Ss,Tt,As,$T,op,FT,ET,Is,cm,To,mn,np,Ns,jT,ap,CT,pm,je,Ls,PT,Ds,OT,Ri,ST,AT,IT,Gs,NT,Us,LT,DT,GT,fn,UT,Le,Rs,RT,Mo,WT,Wi,QT,XT,sp,KT,HT,VT,_n,JT,rp,ZT,YT,Ws,um,wo,gn,ip,Qs,e1,dp,t1,hm,Ce,Xs,o1,Ks,n1,Qi,a1,s1,r1,Hs,i1,Vs,d1,l1,c1,kn,p1,O,Js,u1,xo,h1,Xi,m1,f1,lp,_1,g1,k1,bn,b1,cp,v1,y1,pp,up,hp,mp,T1,M1,fp,_p,gp,kp,w1,x1,bp,vp,yp,Tp,z1,B1,Mp,wp,Zs,vn,yn,xp,Ys,q1,zp,$1,F1,Bp,E1,j1,qp,C1,P1,$p,Fp,zo,Ep,O1,S1,Tn,Mn,jp,er,A1,Cp,I1,N1,Pp,L1,D1,Op,Sp,tr,Ap,G1,U1,wn,xn,Ip,or,R1,Np,W1,mm,Bo,zn,Lp,nr,Q1,Dp,X1,fm,V,ar,K1,sr,H1,Ki,V1,J1,Z1,rr,Y1,ir,eM,tM,oM,Gp,nM,aM,ht,Up,dr,sM,rM,Rp,lr,iM,dM,Wp,cr,lM,cM,Qp,pr,pM,uM,De,ur,hM,qo,mM,Xp,fM,_M,Kp,gM,kM,bM,Bn,vM,Hp,yM,TM,hr,MM,Mt,mr,wM,Vp,xM,zM,fr,BM,wt,_r,qM,Jp,$M,FM,gr,_m,$o,qn,Zp,kr,EM,Yp,jM,gm,J,br,CM,vr,PM,Hi,OM,SM,AM,yr,IM,Tr,NM,LM,DM,eu,GM,UM,mt,tu,Mr,RM,WM,ou,wr,QM,XM,nu,xr,KM,HM,au,zr,VM,JM,j,Br,ZM,Fo,YM,su,e0,t0,ru,o0,n0,a0,$n,s0,iu,r0,i0,du,lu,cu,pu,d0,l0,uu,hu,mu,fu,c0,p0,_u,gu,ku,bu,u0,h0,vu,yu,qr,Fn,En,Tu,$r,m0,Mu,f0,_0,wu,g0,k0,xu,b0,v0,zu,Bu,Eo,qu,y0,T0,jn,Cn,$u,Fr,M0,Fu,w0,x0,Eu,z0,B0,ju,Cu,Pu,Ou,q0,$0,Su,Au,Iu,Nu,F0,E0,Lu,Du,Gu,Uu,j0,C0,xt,Er,P0,Ru,O0,S0,jr,A0,zt,Cr,I0,Wu,N0,L0,Pr,km,jo,Pn,Qu,Or,D0,Xu,G0,bm,U,Sr,U0,Ku,R0,W0,Ar,Q0,Vi,X0,K0,H0,Ir,V0,Nr,J0,Z0,Y0,Hu,ew,tw,ft,Vu,Lr,ow,nw,Ju,Dr,aw,sw,Zu,Gr,rw,iw,Yu,Ur,dw,lw,Ge,Rr,cw,Co,pw,eh,uw,hw,th,mw,fw,_w,On,gw,oh,kw,bw,Wr,vw,Bt,Qr,yw,nh,Tw,Mw,Xr,ww,qt,Kr,xw,ah,zw,Bw,Hr,vm,Po,Sn,sh,Vr,qw,rh,$w,ym,R,Jr,Fw,Oo,Ew,ih,jw,Cw,dh,Pw,Ow,Sw,Zr,Aw,Ji,Iw,Nw,Lw,Yr,Dw,ei,Gw,Uw,Rw,lh,Ww,Qw,_t,ch,ti,Xw,Kw,ph,oi,Hw,Vw,uh,ni,Jw,Zw,hh,ai,Yw,ex,Ue,si,tx,So,ox,mh,nx,ax,fh,sx,rx,ix,An,dx,_h,lx,cx,ri,px,$t,ii,ux,gh,hx,mx,di,fx,Ft,li,_x,kh,gx,kx,ci,Tm;return T=new C({}),ie=new C({}),Xe=new C({}),Hn=new I({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch['labels']),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&#x27;labels&#x27;</span>])`}}),Jn=new I({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Zn=new C({}),ea=new C({}),ta=new I({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text =  "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels) # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text =  <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels) <span class="hljs-comment"># forward pass</span>`}}),na=new I({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),aa=new C({}),sa=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),ia=new I({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),da=new C({}),la=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"*args",val:""},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart.py#L70"}}),pa=new I({props:{code:`from transformers import MBartTokenizer
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
&gt;&gt;&gt; inputs[&quot;</span>labels<span class="hljs-string">&quot;] = labels[&quot;</span>input_ids<span class="hljs-string">&quot;]</span>`}}),ua=new q({props:{name:"as\\_target\\_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart.py#L229"}}),ha=new q({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart.py#L178",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ka=new C({}),ba=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L83"}}),Ta=new I({props:{code:`from transformers import MBartTokenizerFast
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
&gt;&gt;&gt; inputs[&quot;</span>labels<span class="hljs-string">&quot;] = labels[&quot;</span>input_ids<span class="hljs-string">&quot;]</span>`}}),Ma=new q({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L160",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qa=new q({props:{name:"set\\_src\\_lang\\_special\\_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L223"}}),$a=new q({props:{name:"set\\_tgt\\_lang\\_special\\_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/tokenization_mbart_fast.py#L238"}}),Fa=new C({}),Ea=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Oa=new I({props:{code:`from transformers import MBart50Tokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Sa=new q({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L280",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Da=new q({props:{name:"convert\\_tokens\\_to\\_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L233"}}),Ga=new q({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L250",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set\\_src\\_lang\\_special\\_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L341"}}),Wa=new q({props:{name:"set\\_tgt\\_lang\\_special\\_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50.py#L347"}}),Qa=new C({}),Xa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Va=new I({props:{code:`from transformers import MBart50TokenizerFast
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ja=new q({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L168",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new q({props:{name:"set\\_src\\_lang\\_special\\_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L219"}}),ns=new q({props:{name:"set\\_tgt\\_lang\\_special\\_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L234"}}),as=new C({}),ss=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1116",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ls=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1143",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new at({props:{$$slots:{default:[l$]},$$scope:{ctx:P}}}),cs=new I({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ps=new C({}),us=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1232",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1276",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new at({props:{$$slots:{default:[c$]},$$scope:{ctx:P}}}),ks=new C({}),bs=new C({}),vs=new C({}),ys=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1526",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xs=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1538",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new at({props:{$$slots:{default:[p$]},$$scope:{ctx:P}}}),zs=new I({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Bs=new C({}),qs=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1401",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),js=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1414",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new at({props:{$$slots:{default:[u$]},$$scope:{ctx:P}}}),Cs=new I({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = MBartForSequenceClassification.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0) # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ps=new I({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Os=new C({}),As=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_mbart.py#L1688",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Is=new I({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ns=new C({}),Ls=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1195",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),fn=new at({props:{$$slots:{default:[h$]},$$scope:{ctx:P}}}),Rs=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1207",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_n=new at({props:{$$slots:{default:[m$]},$$scope:{ctx:P}}}),Ws=new I({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Qs=new C({}),Xs=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1302",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),kn=new at({props:{$$slots:{default:[f$]},$$scope:{ctx:P}}}),Js=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_tf_mbart.py#L1335",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new at({props:{$$slots:{default:[_$]},$$scope:{ctx:P}}}),Ys=new C({}),er=new C({}),or=new C({}),nr=new C({}),ar=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1266",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ur=new q({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new at({props:{$$slots:{default:[g$]},$$scope:{ctx:P}}}),hr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = FlaxMBartModel.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),fr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),_r=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),gr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),kr=new C({}),br=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1353",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Br=new q({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new at({props:{$$slots:{default:[k$]},$$scope:{ctx:P}}}),$r=new C({}),Fr=new C({}),Er=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),jr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Cr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),Pr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Or=new C({}),Sr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1661",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Rr=new q({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new at({props:{$$slots:{default:[b$]},$$scope:{ctx:P}}}),Wr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')
model = FlaxMBartForSequenceClassification.from_pretrained('facebook/mbart-large-cc25')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),Xr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Kr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),Hr=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Vr=new C({}),Jr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1749",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),si=new q({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new at({props:{$$slots:{default:[v$]},$$scope:{ctx:P}}}),ri=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ii=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),di=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained('facebook/mbart-large-cc25')
tokenizer = MBartTokenizer.from_pretrained('facebook/mbart-large-cc25')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/mbart-large-cc25&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),li=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
`}}),ci=new I({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){h=o("meta"),z=d(),v=o("h1"),M=o("a"),x=o("span"),m(T.$$.fragment),y=d(),B=o("span"),st=r("MBart and MBart-50"),Pe=d(),F=o("p"),We=o("strong"),be=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ve=o("a"),ye=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Je=d(),ee=o("h2"),W=o("a"),Qe=o("span"),m(ie.$$.fragment),N=d(),D=o("span"),dt=r("Overview of MBart"),he=d(),me=o("p"),lt=r("The MBart model was presented in "),te=o("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Q=d(),Oe=o("p"),Te=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),de=o("p"),Me=r("This model was contributed by "),we=o("a"),ut=r("valhalla"),le=r(". The Authors\u2019 code can be found "),xe=o("a"),ze=r("here"),Ye=d(),w=o("h3"),$=o("a"),Be=o("span"),m(Xe.$$.fragment),Wt=d(),oe=o("span"),Qt=r("Training of MBart"),gt=d(),Z=o("p"),ce=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),pe=o("code"),Xt=r("X [eos, src_lang_code]"),Kt=r(" where "),ue=o("code"),Ht=r("X"),Vt=r(` is the source text. The
target text format is `),Ke=o("code"),Jt=r("[tgt_lang_code] X [eos]"),e_=r(". "),$d=o("code"),t_=r("bos"),o_=r(" is never used."),qh=d(),kt=o("p"),n_=r("The regular "),Kn=o("a"),Fd=o("strong"),a_=r("call"),s_=r("()"),r_=r(` will encode source text format, and it should be wrapped
inside the context manager `),_i=o("a"),i_=r("as_target_tokenizer()"),d_=r(" to encode target text format."),$h=d(),gi=o("ul"),Ed=o("li"),l_=r("Supervised training"),Fh=d(),m(Hn.$$.fragment),Eh=d(),ki=o("ul"),Vn=o("li"),jd=o("p"),c_=r("Generation"),p_=d(),Zt=o("p"),u_=r("While generating the target text set the "),Cd=o("code"),h_=r("decoder_start_token_id"),m_=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),Pd=o("em"),f_=r("facebook/mbart-large-en-ro"),__=r(" model."),jh=d(),m(Jn.$$.fragment),Ch=d(),Yt=o("h2"),Ao=o("a"),Od=o("span"),m(Zn.$$.fragment),g_=d(),Sd=o("span"),k_=r("Overview of MBart-50"),Ph=d(),bt=o("p"),b_=r("MBart-50 was introduced in the "),bi=o("em"),v_=r(`Multilingual Translation with Extensible Multilingual Pretraining and Finetuning
<`),Yn=o("a"),y_=r("https://arxiv.org/abs/2008.00401>"),T_=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),Ad=o("em"),M_=r("mbart-large-cc25"),w_=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Oh=d(),vi=o("p"),x_=r("According to the abstract"),Sh=d(),yi=o("p"),Id=o("em"),z_=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Ah=d(),eo=o("h3"),Io=o("a"),Nd=o("span"),m(ea.$$.fragment),B_=d(),Ld=o("span"),q_=r("Training of MBart-50"),Ih=d(),et=o("p"),$_=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),Dd=o("code"),F_=r("[lang_code] X [eos]"),E_=r(", where "),Gd=o("code"),j_=r("lang_code"),C_=r(` is source
language id for source text and target language id for target text, with `),Ud=o("code"),P_=r("X"),O_=r(` being the source or target text
respectively.`),Nh=d(),No=o("p"),S_=r("MBart-50 has its own tokenizer "),Ti=o("a"),A_=r("MBart50Tokenizer"),I_=r("."),Lh=d(),Mi=o("ul"),Rd=o("li"),N_=r("Supervised training"),Dh=d(),m(ta.$$.fragment),Gh=d(),wi=o("ul"),oa=o("li"),Wd=o("p"),L_=r("Generation"),D_=d(),qe=o("p"),G_=r("To generate using the mBART-50 multilingual translation models, "),Qd=o("code"),U_=r("eos_token_id"),R_=r(` is used as the
`),Xd=o("code"),W_=r("decoder_start_token_id"),Q_=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Kd=o("em"),X_=r("forced_bos_token_id"),K_=r(" parameter to the "),Hd=o("em"),H_=r("generate"),V_=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Vd=o("em"),J_=r("facebook/mbart-50-large-many-to-many"),Z_=r(" checkpoint."),Uh=d(),m(na.$$.fragment),Rh=d(),to=o("h2"),Lo=o("a"),Jd=o("span"),m(aa.$$.fragment),Y_=d(),Zd=o("span"),eg=r("MBartConfig"),Wh=d(),$e=o("div"),m(sa.$$.fragment),tg=d(),oo=o("p"),og=r("This is the configuration class to store the configuration of a "),xi=o("a"),ng=r("MBartModel"),ag=r(`. It is used to
instantiate an MBART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MBART `),ra=o("a"),sg=r("facebook/mbart-large-cc25"),rg=r(" architecture."),ig=d(),no=o("p"),dg=r("Configuration objects inherit from "),zi=o("a"),lg=r("PretrainedConfig"),cg=r(` and can be used to control the model
outputs. Read the documentation from `),Bi=o("a"),pg=r("PretrainedConfig"),ug=r(" for more information."),hg=d(),Yd=o("p"),mg=r("Example:"),fg=d(),m(ia.$$.fragment),Qh=d(),ao=o("h2"),Do=o("a"),el=o("span"),m(da.$$.fragment),_g=d(),tl=o("span"),gg=r("MBartTokenizer"),Xh=d(),K=o("div"),m(la.$$.fragment),kg=d(),ol=o("p"),bg=r("Construct an MBART tokenizer."),vg=d(),vt=o("p"),qi=o("a"),yg=r("MBartTokenizer"),Tg=r(" is a subclass of "),$i=o("a"),Mg=r("XLMRobertaTokenizer"),wg=r(`. Refer to
superclass `),Fi=o("a"),xg=r("XLMRobertaTokenizer"),zg=r(` for usage examples and documentation concerning the
initialization parameters and other methods.`),Bg=d(),ca=o("p"),qg=r("The tokenization method is "),nl=o("code"),$g=r("<tokens> <eos> <language code>"),Fg=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Eg=d(),al=o("p"),jg=r("Examples:"),Cg=d(),m(pa.$$.fragment),Pg=d(),Go=o("div"),m(ua.$$.fragment),Og=d(),sl=o("p"),Sg=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Ag=d(),tt=o("div"),m(ha.$$.fragment),Ig=d(),ma=o("p"),Ng=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),rl=o("code"),Lg=r("X"),Dg=r(" represents the sequence:"),Gg=d(),fa=o("ul"),_a=o("li"),il=o("code"),Ug=r("input_ids"),Rg=r(" (for encoder) "),dl=o("code"),Wg=r("X [eos, src_lang_code]"),Qg=d(),ga=o("li"),ll=o("code"),Xg=r("decoder_input_ids"),Kg=r(": (for decoder) "),cl=o("code"),Hg=r("X [eos, tgt_lang_code]"),Vg=d(),pl=o("p"),Jg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Kh=d(),so=o("h2"),Uo=o("a"),ul=o("span"),m(ka.$$.fragment),Zg=d(),hl=o("span"),Yg=r("MBartTokenizerFast"),Hh=d(),G=o("div"),m(ba.$$.fragment),ek=d(),ro=o("p"),tk=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),ml=o("em"),ok=r("tokenizers"),nk=r(" library). Based on "),va=o("a"),ak=r("BPE"),sk=r("."),rk=d(),yt=o("p"),Ei=o("a"),ik=r("MBartTokenizerFast"),dk=r(" is a subclass of "),ji=o("a"),lk=r("XLMRobertaTokenizerFast"),ck=r(`. Refer to
superclass `),Ci=o("a"),pk=r("XLMRobertaTokenizerFast"),uk=r(` for usage examples and documentation concerning the
initialization parameters and other methods.`),hk=d(),ya=o("p"),mk=r("The tokenization method is "),fl=o("code"),fk=r("<tokens> <eos> <language code>"),_k=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),gk=d(),_l=o("p"),kk=r("Examples:"),bk=d(),m(Ta.$$.fragment),vk=d(),Se=o("div"),m(Ma.$$.fragment),yk=d(),gl=o("p"),Tk=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Mk=d(),wa=o("p"),wk=r("An MBART sequence has the following format, where "),kl=o("code"),xk=r("X"),zk=r(" represents the sequence:"),Bk=d(),xa=o("ul"),za=o("li"),bl=o("code"),qk=r("input_ids"),$k=r(" (for encoder) "),vl=o("code"),Fk=r("X [eos, src_lang_code]"),Ek=d(),Ba=o("li"),yl=o("code"),jk=r("decoder_input_ids"),Ck=r(": (for decoder) "),Tl=o("code"),Pk=r("X [eos, tgt_lang_code]"),Ok=d(),Ml=o("p"),Sk=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ak=d(),Ro=o("div"),m(qa.$$.fragment),Ik=d(),wl=o("p"),Nk=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Lk=d(),Wo=o("div"),m($a.$$.fragment),Dk=d(),xl=o("p"),Gk=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Vh=d(),io=o("h2"),Qo=o("a"),zl=o("span"),m(Fa.$$.fragment),Uk=d(),Bl=o("span"),Rk=r("MBart50Tokenizer"),Jh=d(),L=o("div"),m(Ea.$$.fragment),Wk=d(),ja=o("p"),Qk=r("Construct a MBart50 tokenizer. Based on "),Ca=o("a"),Xk=r("SentencePiece"),Kk=r("."),Hk=d(),Pa=o("p"),Vk=r("This tokenizer inherits from "),Pi=o("a"),Jk=r("PreTrainedTokenizer"),Zk=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Yk=d(),ql=o("p"),eb=r("Examples:"),tb=d(),m(Oa.$$.fragment),ob=d(),ot=o("div"),m(Sa.$$.fragment),nb=d(),Aa=o("p"),ab=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),$l=o("code"),sb=r("X"),rb=r(" represents the sequence:"),ib=d(),Ia=o("ul"),Na=o("li"),Fl=o("code"),db=r("input_ids"),lb=r(" (for encoder) "),El=o("code"),cb=r("[src_lang_code] X [eos]"),pb=d(),La=o("li"),jl=o("code"),ub=r("labels"),hb=r(": (for decoder) "),Cl=o("code"),mb=r("[tgt_lang_code] X [eos]"),fb=d(),Pl=o("p"),_b=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),gb=d(),Xo=o("div"),m(Da.$$.fragment),kb=d(),Ol=o("p"),bb=r("Converts a sequence of tokens (strings for sub-words) in a single string."),vb=d(),Ko=o("div"),m(Ga.$$.fragment),yb=d(),Ua=o("p"),Tb=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sl=o("code"),Mb=r("prepare_for_model"),wb=r(" method."),xb=d(),Ho=o("div"),m(Ra.$$.fragment),zb=d(),Al=o("p"),Bb=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),qb=d(),Vo=o("div"),m(Wa.$$.fragment),$b=d(),Il=o("p"),Fb=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Zh=d(),lo=o("h2"),Jo=o("a"),Nl=o("span"),m(Qa.$$.fragment),Eb=d(),Ll=o("span"),jb=r("MBart50TokenizerFast"),Yh=d(),H=o("div"),m(Xa.$$.fragment),Cb=d(),co=o("p"),Pb=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Dl=o("em"),Ob=r("tokenizers"),Sb=r(" library). Based on "),Ka=o("a"),Ab=r("BPE"),Ib=r("."),Nb=d(),Ha=o("p"),Lb=r("This tokenizer inherits from "),Oi=o("a"),Db=r("PreTrainedTokenizerFast"),Gb=r(` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),Ub=d(),Gl=o("p"),Rb=r("Examples:"),Wb=d(),m(Va.$$.fragment),Qb=d(),Ae=o("div"),m(Ja.$$.fragment),Xb=d(),Ul=o("p"),Kb=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Hb=d(),Za=o("p"),Vb=r("An MBART-50 sequence has the following format, where "),Rl=o("code"),Jb=r("X"),Zb=r(" represents the sequence:"),Yb=d(),Ya=o("ul"),es=o("li"),Wl=o("code"),ev=r("input_ids"),tv=r(" (for encoder) "),Ql=o("code"),ov=r("[src_lang_code] X [eos]"),nv=d(),ts=o("li"),Xl=o("code"),av=r("labels"),sv=r(": (for decoder) "),Kl=o("code"),rv=r("[tgt_lang_code] X [eos]"),iv=d(),Hl=o("p"),dv=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),lv=d(),Zo=o("div"),m(os.$$.fragment),cv=d(),Vl=o("p"),pv=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),uv=d(),Yo=o("div"),m(ns.$$.fragment),hv=d(),Jl=o("p"),mv=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),em=d(),po=o("h2"),en=o("a"),Zl=o("span"),m(as.$$.fragment),fv=d(),Yl=o("span"),_v=r("MBartModel"),tm=d(),He=o("div"),m(ss.$$.fragment),gv=d(),rs=o("p"),kv=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Si=o("a"),bv=r("PreTrainedModel"),vv=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),yv=d(),is=o("p"),Tv=r("This model is also a PyTorch "),ds=o("a"),Mv=r("torch.nn.Module"),wv=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),xv=d(),Ie=o("div"),m(ls.$$.fragment),zv=d(),uo=o("p"),Bv=r("The "),Ai=o("a"),qv=r("MBartModel"),$v=r(" forward method, overrides the "),ec=o("code"),Fv=r("__call__"),Ev=r(" special method."),jv=d(),m(tn.$$.fragment),Cv=d(),tc=o("p"),Pv=r("Example:"),Ov=d(),m(cs.$$.fragment),om=d(),ho=o("h2"),on=o("a"),oc=o("span"),m(ps.$$.fragment),Sv=d(),nc=o("span"),Av=r("MBartForConditionalGeneration"),nm=d(),Ve=o("div"),m(us.$$.fragment),Iv=d(),hs=o("p"),Nv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=o("a"),Lv=r("PreTrainedModel"),Dv=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Gv=d(),ms=o("p"),Uv=r("This model is also a PyTorch "),fs=o("a"),Rv=r("torch.nn.Module"),Wv=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Qv=d(),E=o("div"),m(_s.$$.fragment),Xv=d(),mo=o("p"),Kv=r("The "),Ni=o("a"),Hv=r("MBartForConditionalGeneration"),Vv=r(" forward method, overrides the "),ac=o("code"),Jv=r("__call__"),Zv=r(" special method."),Yv=d(),m(nn.$$.fragment),ey=d(),sc=o("p"),ty=r("Summarization example::"),oy=d(),rc=o("blockquote"),ic=o("blockquote"),dc=o("blockquote"),lc=o("p"),ny=r("from transformers import MBartTokenizer, MBartForConditionalGeneration, MBartConfig"),ay=d(),cc=o("blockquote"),pc=o("blockquote"),uc=o("blockquote"),hc=o("p"),sy=r(`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),ry=d(),mc=o("blockquote"),fc=o("blockquote"),_c=o("blockquote"),gc=o("p"),iy=r(`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),dy=d(),kc=o("blockquote"),bc=o("blockquote"),gs=o("blockquote"),an=o("h1"),sn=o("a"),vc=o("span"),m(ks.$$.fragment),ly=d(),yc=o("span"),cy=r("Generate Summary"),py=d(),Tc=o("p"),uy=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),hy=d(),Mc=o("p"),my=r("Mask filling example::"),fy=d(),wc=o("blockquote"),xc=o("blockquote"),fo=o("blockquote"),zc=o("p"),_y=r(`from transformers import MBartTokenizer, MBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),gy=d(),rn=o("h1"),dn=o("a"),Bc=o("span"),m(bs.$$.fragment),ky=d(),qc=o("span"),by=r("de_DE is the language symbol id <LID> for German"),vy=d(),$c=o("p"),yy=r("TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),Ty=d(),Fc=o("blockquote"),Ec=o("blockquote"),jc=o("blockquote"),Cc=o("p"),My=r(`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),wy=d(),Pc=o("blockquote"),Oc=o("blockquote"),Sc=o("blockquote"),Ac=o("p"),xy=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),zy=d(),Ic=o("blockquote"),Nc=o("blockquote"),Lc=o("blockquote"),Dc=o("p"),By=r("tokenizer.decode(predictions).split()"),am=d(),_o=o("h2"),ln=o("a"),Gc=o("span"),m(vs.$$.fragment),qy=d(),Uc=o("span"),$y=r("MBartForQuestionAnswering"),sm=d(),Fe=o("div"),m(ys.$$.fragment),Fy=d(),go=o("p"),Ey=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rc=o("code"),jy=r("span start logits"),Cy=r(" and "),Wc=o("code"),Py=r("span end logits"),Oy=r(")."),Sy=d(),Ts=o("p"),Ay=r("This model inherits from "),Li=o("a"),Iy=r("PreTrainedModel"),Ny=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ly=d(),Ms=o("p"),Dy=r("This model is also a PyTorch "),ws=o("a"),Gy=r("torch.nn.Module"),Uy=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ry=d(),Ne=o("div"),m(xs.$$.fragment),Wy=d(),ko=o("p"),Qy=r("The "),Di=o("a"),Xy=r("MBartForQuestionAnswering"),Ky=r(" forward method, overrides the "),Qc=o("code"),Hy=r("__call__"),Vy=r(" special method."),Jy=d(),m(cn.$$.fragment),Zy=d(),Xc=o("p"),Yy=r("Example:"),eT=d(),m(zs.$$.fragment),rm=d(),bo=o("h2"),pn=o("a"),Kc=o("span"),m(Bs.$$.fragment),tT=d(),Hc=o("span"),oT=r("MBartForSequenceClassification"),im=d(),Ee=o("div"),m(qs.$$.fragment),nT=d(),Vc=o("p"),aT=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),sT=d(),$s=o("p"),rT=r("This model inherits from "),Gi=o("a"),iT=r("PreTrainedModel"),dT=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),lT=d(),Fs=o("p"),cT=r("This model is also a PyTorch "),Es=o("a"),pT=r("torch.nn.Module"),uT=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),hT=d(),ne=o("div"),m(js.$$.fragment),mT=d(),vo=o("p"),fT=r("The "),Ui=o("a"),_T=r("MBartForSequenceClassification"),gT=r(" forward method, overrides the "),Jc=o("code"),kT=r("__call__"),bT=r(" special method."),vT=d(),m(un.$$.fragment),yT=d(),Zc=o("p"),TT=r("Example of single-label classification:"),MT=d(),m(Cs.$$.fragment),wT=d(),Yc=o("p"),xT=r("Example of multi-label classification:"),zT=d(),m(Ps.$$.fragment),dm=d(),yo=o("h2"),hn=o("a"),ep=o("span"),m(Os.$$.fragment),BT=d(),tp=o("span"),qT=r("MBartForCausalLM"),lm=d(),Ss=o("div"),Tt=o("div"),m(As.$$.fragment),$T=d(),op=o("p"),FT=r("Example:"),ET=d(),m(Is.$$.fragment),cm=d(),To=o("h2"),mn=o("a"),np=o("span"),m(Ns.$$.fragment),jT=d(),ap=o("span"),CT=r("TFMBartModel"),pm=d(),je=o("div"),m(Ls.$$.fragment),PT=d(),Ds=o("p"),OT=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ri=o("a"),ST=r("TFPreTrainedModel"),AT=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),IT=d(),Gs=o("p"),NT=r("This model is also a "),Us=o("a"),LT=r("tf.keras.Model"),DT=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),GT=d(),m(fn.$$.fragment),UT=d(),Le=o("div"),m(Rs.$$.fragment),RT=d(),Mo=o("p"),WT=r("The "),Wi=o("a"),QT=r("TFMBartModel"),XT=r(" forward method, overrides the "),sp=o("code"),KT=r("__call__"),HT=r(" special method."),VT=d(),m(_n.$$.fragment),JT=d(),rp=o("p"),ZT=r("Example:"),YT=d(),m(Ws.$$.fragment),um=d(),wo=o("h2"),gn=o("a"),ip=o("span"),m(Qs.$$.fragment),e1=d(),dp=o("span"),t1=r("TFMBartForConditionalGeneration"),hm=d(),Ce=o("div"),m(Xs.$$.fragment),o1=d(),Ks=o("p"),n1=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Qi=o("a"),a1=r("TFPreTrainedModel"),s1=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),r1=d(),Hs=o("p"),i1=r("This model is also a "),Vs=o("a"),d1=r("tf.keras.Model"),l1=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),c1=d(),m(kn.$$.fragment),p1=d(),O=o("div"),m(Js.$$.fragment),u1=d(),xo=o("p"),h1=r("The "),Xi=o("a"),m1=r("TFMBartForConditionalGeneration"),f1=r(" forward method, overrides the "),lp=o("code"),_1=r("__call__"),g1=r(" special method."),k1=d(),m(bn.$$.fragment),b1=d(),cp=o("p"),v1=r("Summarization example::"),y1=d(),pp=o("blockquote"),up=o("blockquote"),hp=o("blockquote"),mp=o("p"),T1=r("from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig"),M1=d(),fp=o("blockquote"),_p=o("blockquote"),gp=o("blockquote"),kp=o("p"),w1=r(`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),x1=d(),bp=o("blockquote"),vp=o("blockquote"),yp=o("blockquote"),Tp=o("p"),z1=r(`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),B1=d(),Mp=o("blockquote"),wp=o("blockquote"),Zs=o("blockquote"),vn=o("h1"),yn=o("a"),xp=o("span"),m(Ys.$$.fragment),q1=d(),zp=o("span"),$1=r("Generate Summary"),F1=d(),Bp=o("p"),E1=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),j1=d(),qp=o("p"),C1=r("Mask filling example::"),P1=d(),$p=o("blockquote"),Fp=o("blockquote"),zo=o("blockquote"),Ep=o("p"),O1=r(`from transformers import MBartTokenizer, TFMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),S1=d(),Tn=o("h1"),Mn=o("a"),jp=o("span"),m(er.$$.fragment),A1=d(),Cp=o("span"),I1=r("de_DE is the language symbol id <LID> for German"),N1=d(),Pp=o("p"),L1=r("TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),D1=d(),Op=o("blockquote"),Sp=o("blockquote"),tr=o("blockquote"),Ap=o("p"),G1=r(`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018tf\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])`),U1=d(),wn=o("h1"),xn=o("a"),Ip=o("span"),m(or.$$.fragment),R1=d(),Np=o("span"),W1=r("probs[5] is associated with the mask token"),mm=d(),Bo=o("h2"),zn=o("a"),Lp=o("span"),m(nr.$$.fragment),Q1=d(),Dp=o("span"),X1=r("FlaxMBartModel"),fm=d(),V=o("div"),m(ar.$$.fragment),K1=d(),sr=o("p"),H1=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ki=o("a"),V1=r("FlaxPreTrainedModel"),J1=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Z1=d(),rr=o("p"),Y1=r("This model is also a Flax Linen "),ir=o("a"),eM=r("flax.nn.Module"),tM=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),oM=d(),Gp=o("p"),nM=r("Finally, this model supports inherent JAX features such as:"),aM=d(),ht=o("ul"),Up=o("li"),dr=o("a"),sM=r("Just-In-Time (JIT) compilation"),rM=d(),Rp=o("li"),lr=o("a"),iM=r("Automatic Differentiation"),dM=d(),Wp=o("li"),cr=o("a"),lM=r("Vectorization"),cM=d(),Qp=o("li"),pr=o("a"),pM=r("Parallelization"),uM=d(),De=o("div"),m(ur.$$.fragment),hM=d(),qo=o("p"),mM=r("The "),Xp=o("code"),fM=r("FlaxMBartPreTrainedModel"),_M=r(" forward method, overrides the "),Kp=o("code"),gM=r("__call__"),kM=r(" special method."),bM=d(),m(Bn.$$.fragment),vM=d(),Hp=o("p"),yM=r("Example:"),TM=d(),m(hr.$$.fragment),MM=d(),Mt=o("div"),m(mr.$$.fragment),wM=d(),Vp=o("p"),xM=r("Example:"),zM=d(),m(fr.$$.fragment),BM=d(),wt=o("div"),m(_r.$$.fragment),qM=d(),Jp=o("p"),$M=r("Example:"),FM=d(),m(gr.$$.fragment),_m=d(),$o=o("h2"),qn=o("a"),Zp=o("span"),m(kr.$$.fragment),EM=d(),Yp=o("span"),jM=r("FlaxMBartForConditionalGeneration"),gm=d(),J=o("div"),m(br.$$.fragment),CM=d(),vr=o("p"),PM=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hi=o("a"),OM=r("FlaxPreTrainedModel"),SM=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),AM=d(),yr=o("p"),IM=r("This model is also a Flax Linen "),Tr=o("a"),NM=r("flax.nn.Module"),LM=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),DM=d(),eu=o("p"),GM=r("Finally, this model supports inherent JAX features such as:"),UM=d(),mt=o("ul"),tu=o("li"),Mr=o("a"),RM=r("Just-In-Time (JIT) compilation"),WM=d(),ou=o("li"),wr=o("a"),QM=r("Automatic Differentiation"),XM=d(),nu=o("li"),xr=o("a"),KM=r("Vectorization"),HM=d(),au=o("li"),zr=o("a"),VM=r("Parallelization"),JM=d(),j=o("div"),m(Br.$$.fragment),ZM=d(),Fo=o("p"),YM=r("The "),su=o("code"),e0=r("FlaxMBartPreTrainedModel"),t0=r(" forward method, overrides the "),ru=o("code"),o0=r("__call__"),n0=r(" special method."),a0=d(),m($n.$$.fragment),s0=d(),iu=o("p"),r0=r("Summarization example::"),i0=d(),du=o("blockquote"),lu=o("blockquote"),cu=o("blockquote"),pu=o("p"),d0=r("from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig"),l0=d(),uu=o("blockquote"),hu=o("blockquote"),mu=o("blockquote"),fu=o("p"),c0=r(`model = FlaxMBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),p0=d(),_u=o("blockquote"),gu=o("blockquote"),ku=o("blockquote"),bu=o("p"),u0=r(`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),h0=d(),vu=o("blockquote"),yu=o("blockquote"),qr=o("blockquote"),Fn=o("h1"),En=o("a"),Tu=o("span"),m($r.$$.fragment),m0=d(),Mu=o("span"),f0=r("Generate Summary"),_0=d(),wu=o("p"),g0=r(`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),k0=d(),xu=o("p"),b0=r("Mask filling example::"),v0=d(),zu=o("blockquote"),Bu=o("blockquote"),Eo=o("blockquote"),qu=o("p"),y0=r(`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),T0=d(),jn=o("h1"),Cn=o("a"),$u=o("span"),m(Fr.$$.fragment),M0=d(),Fu=o("span"),w0=r("de_DE is the language symbol id <LID> for German"),x0=d(),Eu=o("p"),z0=r("TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),B0=d(),ju=o("blockquote"),Cu=o("blockquote"),Pu=o("blockquote"),Ou=o("p"),q0=r(`model = FlaxMBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),$0=d(),Su=o("blockquote"),Au=o("blockquote"),Iu=o("blockquote"),Nu=o("p"),F0=r(`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),E0=d(),Lu=o("blockquote"),Du=o("blockquote"),Gu=o("blockquote"),Uu=o("p"),j0=r("tokenizer.decode(predictions).split()"),C0=d(),xt=o("div"),m(Er.$$.fragment),P0=d(),Ru=o("p"),O0=r("Example:"),S0=d(),m(jr.$$.fragment),A0=d(),zt=o("div"),m(Cr.$$.fragment),I0=d(),Wu=o("p"),N0=r("Example:"),L0=d(),m(Pr.$$.fragment),km=d(),jo=o("h2"),Pn=o("a"),Qu=o("span"),m(Or.$$.fragment),D0=d(),Xu=o("span"),G0=r("FlaxMBartForSequenceClassification"),bm=d(),U=o("div"),m(Sr.$$.fragment),U0=d(),Ku=o("p"),R0=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),W0=d(),Ar=o("p"),Q0=r("This model inherits from "),Vi=o("a"),X0=r("FlaxPreTrainedModel"),K0=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),H0=d(),Ir=o("p"),V0=r("This model is also a Flax Linen "),Nr=o("a"),J0=r("flax.nn.Module"),Z0=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Y0=d(),Hu=o("p"),ew=r("Finally, this model supports inherent JAX features such as:"),tw=d(),ft=o("ul"),Vu=o("li"),Lr=o("a"),ow=r("Just-In-Time (JIT) compilation"),nw=d(),Ju=o("li"),Dr=o("a"),aw=r("Automatic Differentiation"),sw=d(),Zu=o("li"),Gr=o("a"),rw=r("Vectorization"),iw=d(),Yu=o("li"),Ur=o("a"),dw=r("Parallelization"),lw=d(),Ge=o("div"),m(Rr.$$.fragment),cw=d(),Co=o("p"),pw=r("The "),eh=o("code"),uw=r("FlaxMBartPreTrainedModel"),hw=r(" forward method, overrides the "),th=o("code"),mw=r("__call__"),fw=r(" special method."),_w=d(),m(On.$$.fragment),gw=d(),oh=o("p"),kw=r("Example:"),bw=d(),m(Wr.$$.fragment),vw=d(),Bt=o("div"),m(Qr.$$.fragment),yw=d(),nh=o("p"),Tw=r("Example:"),Mw=d(),m(Xr.$$.fragment),ww=d(),qt=o("div"),m(Kr.$$.fragment),xw=d(),ah=o("p"),zw=r("Example:"),Bw=d(),m(Hr.$$.fragment),vm=d(),Po=o("h2"),Sn=o("a"),sh=o("span"),m(Vr.$$.fragment),qw=d(),rh=o("span"),$w=r("FlaxMBartForQuestionAnswering"),ym=d(),R=o("div"),m(Jr.$$.fragment),Fw=d(),Oo=o("p"),Ew=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ih=o("code"),jw=r("span start logits"),Cw=r(" and "),dh=o("code"),Pw=r("span end logits"),Ow=r(")."),Sw=d(),Zr=o("p"),Aw=r("This model inherits from "),Ji=o("a"),Iw=r("FlaxPreTrainedModel"),Nw=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Lw=d(),Yr=o("p"),Dw=r("This model is also a Flax Linen "),ei=o("a"),Gw=r("flax.nn.Module"),Uw=r(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rw=d(),lh=o("p"),Ww=r("Finally, this model supports inherent JAX features such as:"),Qw=d(),_t=o("ul"),ch=o("li"),ti=o("a"),Xw=r("Just-In-Time (JIT) compilation"),Kw=d(),ph=o("li"),oi=o("a"),Hw=r("Automatic Differentiation"),Vw=d(),uh=o("li"),ni=o("a"),Jw=r("Vectorization"),Zw=d(),hh=o("li"),ai=o("a"),Yw=r("Parallelization"),ex=d(),Ue=o("div"),m(si.$$.fragment),tx=d(),So=o("p"),ox=r("The "),mh=o("code"),nx=r("FlaxMBartPreTrainedModel"),ax=r(" forward method, overrides the "),fh=o("code"),sx=r("__call__"),rx=r(" special method."),ix=d(),m(An.$$.fragment),dx=d(),_h=o("p"),lx=r("Example:"),cx=d(),m(ri.$$.fragment),px=d(),$t=o("div"),m(ii.$$.fragment),ux=d(),gh=o("p"),hx=r("Example:"),mx=d(),m(di.$$.fragment),fx=d(),Ft=o("div"),m(li.$$.fragment),_x=d(),kh=o("p"),gx=r("Example:"),kx=d(),m(ci.$$.fragment),this.h()},l(s){const p=d$('[data-svelte="svelte-1phssyn"]',document.head);h=n(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(s),v=n(s,"H1",{class:!0});var pi=a(v);M=n(pi,"A",{id:!0,class:!0,href:!0});var bh=a(M);x=n(bh,"SPAN",{});var vh=a(x);f(T.$$.fragment,vh),vh.forEach(t),bh.forEach(t),y=l(pi),B=n(pi,"SPAN",{});var yh=a(B);st=i(yh,"MBart and MBart-50"),yh.forEach(t),pi.forEach(t),Pe=l(s),F=n(s,"P",{});var In=a(F);We=n(In,"STRONG",{});var Th=a(We);be=i(Th,"DISCLAIMER:"),Th.forEach(t),rt=i(In," If you see something strange, file a "),ve=n(In,"A",{href:!0,rel:!0});var Mh=a(ve);ye=i(Mh,"Github Issue"),Mh.forEach(t),it=i(In,` and assign
@patrickvonplaten`),In.forEach(t),Je=l(s),ee=n(s,"H2",{class:!0});var ui=a(ee);W=n(ui,"A",{id:!0,class:!0,href:!0});var wh=a(W);Qe=n(wh,"SPAN",{});var xh=a(Qe);f(ie.$$.fragment,xh),xh.forEach(t),wh.forEach(t),N=l(ui),D=n(ui,"SPAN",{});var zh=a(D);dt=i(zh,"Overview of MBart"),zh.forEach(t),ui.forEach(t),he=l(s),me=n(s,"P",{});var hi=a(me);lt=i(hi,"The MBart model was presented in "),te=n(hi,"A",{href:!0,rel:!0});var yx=a(te);ct=i(yx,"Multilingual Denoising Pre-training for Neural Machine Translation"),yx.forEach(t),pt=i(hi,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),hi.forEach(t),Q=l(s),Oe=n(s,"P",{});var Tx=a(Oe);Te=i(Tx,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Tx.forEach(t),Ze=l(s),de=n(s,"P",{});var Bh=a(de);Me=i(Bh,"This model was contributed by "),we=n(Bh,"A",{href:!0,rel:!0});var Mx=a(we);ut=i(Mx,"valhalla"),Mx.forEach(t),le=i(Bh,". The Authors\u2019 code can be found "),xe=n(Bh,"A",{href:!0,rel:!0});var wx=a(xe);ze=i(wx,"here"),wx.forEach(t),Bh.forEach(t),Ye=l(s),w=n(s,"H3",{class:!0});var Mm=a(w);$=n(Mm,"A",{id:!0,class:!0,href:!0});var xx=a($);Be=n(xx,"SPAN",{});var zx=a(Be);f(Xe.$$.fragment,zx),zx.forEach(t),xx.forEach(t),Wt=l(Mm),oe=n(Mm,"SPAN",{});var Bx=a(oe);Qt=i(Bx,"Training of MBart"),Bx.forEach(t),Mm.forEach(t),gt=l(s),Z=n(s,"P",{});var Et=a(Z);ce=i(Et,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),pe=n(Et,"CODE",{});var qx=a(pe);Xt=i(qx,"X [eos, src_lang_code]"),qx.forEach(t),Kt=i(Et," where "),ue=n(Et,"CODE",{});var $x=a(ue);Ht=i($x,"X"),$x.forEach(t),Vt=i(Et,` is the source text. The
target text format is `),Ke=n(Et,"CODE",{});var Fx=a(Ke);Jt=i(Fx,"[tgt_lang_code] X [eos]"),Fx.forEach(t),e_=i(Et,". "),$d=n(Et,"CODE",{});var Ex=a($d);t_=i(Ex,"bos"),Ex.forEach(t),o_=i(Et," is never used."),Et.forEach(t),qh=l(s),kt=n(s,"P",{});var Zi=a(kt);n_=i(Zi,"The regular "),Kn=n(Zi,"A",{href:!0});var bx=a(Kn);Fd=n(bx,"STRONG",{});var jx=a(Fd);a_=i(jx,"call"),jx.forEach(t),s_=i(bx,"()"),bx.forEach(t),r_=i(Zi,` will encode source text format, and it should be wrapped
inside the context manager `),_i=n(Zi,"A",{href:!0});var Cx=a(_i);i_=i(Cx,"as_target_tokenizer()"),Cx.forEach(t),d_=i(Zi," to encode target text format."),Zi.forEach(t),$h=l(s),gi=n(s,"UL",{});var Px=a(gi);Ed=n(Px,"LI",{});var Ox=a(Ed);l_=i(Ox,"Supervised training"),Ox.forEach(t),Px.forEach(t),Fh=l(s),f(Hn.$$.fragment,s),Eh=l(s),ki=n(s,"UL",{});var Sx=a(ki);Vn=n(Sx,"LI",{});var wm=a(Vn);jd=n(wm,"P",{});var Ax=a(jd);c_=i(Ax,"Generation"),Ax.forEach(t),p_=l(wm),Zt=n(wm,"P",{});var Yi=a(Zt);u_=i(Yi,"While generating the target text set the "),Cd=n(Yi,"CODE",{});var Ix=a(Cd);h_=i(Ix,"decoder_start_token_id"),Ix.forEach(t),m_=i(Yi,` to the target language id. The following
example shows how to translate English to Romanian using the `),Pd=n(Yi,"EM",{});var Nx=a(Pd);f_=i(Nx,"facebook/mbart-large-en-ro"),Nx.forEach(t),__=i(Yi," model."),Yi.forEach(t),wm.forEach(t),Sx.forEach(t),jh=l(s),f(Jn.$$.fragment,s),Ch=l(s),Yt=n(s,"H2",{class:!0});var xm=a(Yt);Ao=n(xm,"A",{id:!0,class:!0,href:!0});var Lx=a(Ao);Od=n(Lx,"SPAN",{});var Dx=a(Od);f(Zn.$$.fragment,Dx),Dx.forEach(t),Lx.forEach(t),g_=l(xm),Sd=n(xm,"SPAN",{});var Gx=a(Sd);k_=i(Gx,"Overview of MBart-50"),Gx.forEach(t),xm.forEach(t),Ph=l(s),bt=n(s,"P",{});var ed=a(bt);b_=i(ed,"MBart-50 was introduced in the "),bi=n(ed,"EM",{});var vx=a(bi);v_=i(vx,`Multilingual Translation with Extensible Multilingual Pretraining and Finetuning
<`),Yn=n(vx,"A",{href:!0,rel:!0});var Ux=a(Yn);y_=i(Ux,"https://arxiv.org/abs/2008.00401>"),Ux.forEach(t),vx.forEach(t),T_=i(ed,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),Ad=n(ed,"EM",{});var Rx=a(Ad);M_=i(Rx,"mbart-large-cc25"),Rx.forEach(t),w_=i(ed,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),ed.forEach(t),Oh=l(s),vi=n(s,"P",{});var Wx=a(vi);x_=i(Wx,"According to the abstract"),Wx.forEach(t),Sh=l(s),yi=n(s,"P",{});var Qx=a(yi);Id=n(Qx,"EM",{});var Xx=a(Id);z_=i(Xx,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Xx.forEach(t),Qx.forEach(t),Ah=l(s),eo=n(s,"H3",{class:!0});var zm=a(eo);Io=n(zm,"A",{id:!0,class:!0,href:!0});var Kx=a(Io);Nd=n(Kx,"SPAN",{});var Hx=a(Nd);f(ea.$$.fragment,Hx),Hx.forEach(t),Kx.forEach(t),B_=l(zm),Ld=n(zm,"SPAN",{});var Vx=a(Ld);q_=i(Vx,"Training of MBart-50"),Vx.forEach(t),zm.forEach(t),Ih=l(s),et=n(s,"P",{});var Nn=a(et);$_=i(Nn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),Dd=n(Nn,"CODE",{});var Jx=a(Dd);F_=i(Jx,"[lang_code] X [eos]"),Jx.forEach(t),E_=i(Nn,", where "),Gd=n(Nn,"CODE",{});var Zx=a(Gd);j_=i(Zx,"lang_code"),Zx.forEach(t),C_=i(Nn,` is source
language id for source text and target language id for target text, with `),Ud=n(Nn,"CODE",{});var Yx=a(Ud);P_=i(Yx,"X"),Yx.forEach(t),O_=i(Nn,` being the source or target text
respectively.`),Nn.forEach(t),Nh=l(s),No=n(s,"P",{});var Bm=a(No);S_=i(Bm,"MBart-50 has its own tokenizer "),Ti=n(Bm,"A",{href:!0});var e2=a(Ti);A_=i(e2,"MBart50Tokenizer"),e2.forEach(t),I_=i(Bm,"."),Bm.forEach(t),Lh=l(s),Mi=n(s,"UL",{});var t2=a(Mi);Rd=n(t2,"LI",{});var o2=a(Rd);N_=i(o2,"Supervised training"),o2.forEach(t),t2.forEach(t),Dh=l(s),f(ta.$$.fragment,s),Gh=l(s),wi=n(s,"UL",{});var n2=a(wi);oa=n(n2,"LI",{});var qm=a(oa);Wd=n(qm,"P",{});var a2=a(Wd);L_=i(a2,"Generation"),a2.forEach(t),D_=l(qm),qe=n(qm,"P",{});var nt=a(qe);G_=i(nt,"To generate using the mBART-50 multilingual translation models, "),Qd=n(nt,"CODE",{});var s2=a(Qd);U_=i(s2,"eos_token_id"),s2.forEach(t),R_=i(nt,` is used as the
`),Xd=n(nt,"CODE",{});var r2=a(Xd);W_=i(r2,"decoder_start_token_id"),r2.forEach(t),Q_=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Kd=n(nt,"EM",{});var i2=a(Kd);X_=i(i2,"forced_bos_token_id"),i2.forEach(t),K_=i(nt," parameter to the "),Hd=n(nt,"EM",{});var d2=a(Hd);H_=i(d2,"generate"),d2.forEach(t),V_=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Vd=n(nt,"EM",{});var l2=a(Vd);J_=i(l2,"facebook/mbart-50-large-many-to-many"),l2.forEach(t),Z_=i(nt," checkpoint."),nt.forEach(t),qm.forEach(t),n2.forEach(t),Uh=l(s),f(na.$$.fragment,s),Rh=l(s),to=n(s,"H2",{class:!0});var $m=a(to);Lo=n($m,"A",{id:!0,class:!0,href:!0});var c2=a(Lo);Jd=n(c2,"SPAN",{});var p2=a(Jd);f(aa.$$.fragment,p2),p2.forEach(t),c2.forEach(t),Y_=l($m),Zd=n($m,"SPAN",{});var u2=a(Zd);eg=i(u2,"MBartConfig"),u2.forEach(t),$m.forEach(t),Wh=l(s),$e=n(s,"DIV",{class:!0});var jt=a($e);f(sa.$$.fragment,jt),tg=l(jt),oo=n(jt,"P",{});var td=a(oo);og=i(td,"This is the configuration class to store the configuration of a "),xi=n(td,"A",{href:!0});var h2=a(xi);ng=i(h2,"MBartModel"),h2.forEach(t),ag=i(td,`. It is used to
instantiate an MBART model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MBART `),ra=n(td,"A",{href:!0,rel:!0});var m2=a(ra);sg=i(m2,"facebook/mbart-large-cc25"),m2.forEach(t),rg=i(td," architecture."),td.forEach(t),ig=l(jt),no=n(jt,"P",{});var od=a(no);dg=i(od,"Configuration objects inherit from "),zi=n(od,"A",{href:!0});var f2=a(zi);lg=i(f2,"PretrainedConfig"),f2.forEach(t),cg=i(od,` and can be used to control the model
outputs. Read the documentation from `),Bi=n(od,"A",{href:!0});var _2=a(Bi);pg=i(_2,"PretrainedConfig"),_2.forEach(t),ug=i(od," for more information."),od.forEach(t),hg=l(jt),Yd=n(jt,"P",{});var g2=a(Yd);mg=i(g2,"Example:"),g2.forEach(t),fg=l(jt),f(ia.$$.fragment,jt),jt.forEach(t),Qh=l(s),ao=n(s,"H2",{class:!0});var Fm=a(ao);Do=n(Fm,"A",{id:!0,class:!0,href:!0});var k2=a(Do);el=n(k2,"SPAN",{});var b2=a(el);f(da.$$.fragment,b2),b2.forEach(t),k2.forEach(t),_g=l(Fm),tl=n(Fm,"SPAN",{});var v2=a(tl);gg=i(v2,"MBartTokenizer"),v2.forEach(t),Fm.forEach(t),Xh=l(s),K=n(s,"DIV",{class:!0});var fe=a(K);f(la.$$.fragment,fe),kg=l(fe),ol=n(fe,"P",{});var y2=a(ol);bg=i(y2,"Construct an MBART tokenizer."),y2.forEach(t),vg=l(fe),vt=n(fe,"P",{});var mi=a(vt);qi=n(mi,"A",{href:!0});var T2=a(qi);yg=i(T2,"MBartTokenizer"),T2.forEach(t),Tg=i(mi," is a subclass of "),$i=n(mi,"A",{href:!0});var M2=a($i);Mg=i(M2,"XLMRobertaTokenizer"),M2.forEach(t),wg=i(mi,`. Refer to
superclass `),Fi=n(mi,"A",{href:!0});var w2=a(Fi);xg=i(w2,"XLMRobertaTokenizer"),w2.forEach(t),zg=i(mi,` for usage examples and documentation concerning the
initialization parameters and other methods.`),mi.forEach(t),Bg=l(fe),ca=n(fe,"P",{});var Em=a(ca);qg=i(Em,"The tokenization method is "),nl=n(Em,"CODE",{});var x2=a(nl);$g=i(x2,"<tokens> <eos> <language code>"),x2.forEach(t),Fg=i(Em," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Em.forEach(t),Eg=l(fe),al=n(fe,"P",{});var z2=a(al);jg=i(z2,"Examples:"),z2.forEach(t),Cg=l(fe),f(pa.$$.fragment,fe),Pg=l(fe),Go=n(fe,"DIV",{class:!0});var jm=a(Go);f(ua.$$.fragment,jm),Og=l(jm),sl=n(jm,"P",{});var B2=a(sl);Sg=i(B2,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),B2.forEach(t),jm.forEach(t),Ag=l(fe),tt=n(fe,"DIV",{class:!0});var Ln=a(tt);f(ha.$$.fragment,Ln),Ig=l(Ln),ma=n(Ln,"P",{});var Cm=a(ma);Ng=i(Cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),rl=n(Cm,"CODE",{});var q2=a(rl);Lg=i(q2,"X"),q2.forEach(t),Dg=i(Cm," represents the sequence:"),Cm.forEach(t),Gg=l(Ln),fa=n(Ln,"UL",{});var Pm=a(fa);_a=n(Pm,"LI",{});var Om=a(_a);il=n(Om,"CODE",{});var $2=a(il);Ug=i($2,"input_ids"),$2.forEach(t),Rg=i(Om," (for encoder) "),dl=n(Om,"CODE",{});var F2=a(dl);Wg=i(F2,"X [eos, src_lang_code]"),F2.forEach(t),Om.forEach(t),Qg=l(Pm),ga=n(Pm,"LI",{});var Sm=a(ga);ll=n(Sm,"CODE",{});var E2=a(ll);Xg=i(E2,"decoder_input_ids"),E2.forEach(t),Kg=i(Sm,": (for decoder) "),cl=n(Sm,"CODE",{});var j2=a(cl);Hg=i(j2,"X [eos, tgt_lang_code]"),j2.forEach(t),Sm.forEach(t),Pm.forEach(t),Vg=l(Ln),pl=n(Ln,"P",{});var C2=a(pl);Jg=i(C2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),C2.forEach(t),Ln.forEach(t),fe.forEach(t),Kh=l(s),so=n(s,"H2",{class:!0});var Am=a(so);Uo=n(Am,"A",{id:!0,class:!0,href:!0});var P2=a(Uo);ul=n(P2,"SPAN",{});var O2=a(ul);f(ka.$$.fragment,O2),O2.forEach(t),P2.forEach(t),Zg=l(Am),hl=n(Am,"SPAN",{});var S2=a(hl);Yg=i(S2,"MBartTokenizerFast"),S2.forEach(t),Am.forEach(t),Hh=l(s),G=n(s,"DIV",{class:!0});var ae=a(G);f(ba.$$.fragment,ae),ek=l(ae),ro=n(ae,"P",{});var nd=a(ro);tk=i(nd,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),ml=n(nd,"EM",{});var A2=a(ml);ok=i(A2,"tokenizers"),A2.forEach(t),nk=i(nd," library). Based on "),va=n(nd,"A",{href:!0,rel:!0});var I2=a(va);ak=i(I2,"BPE"),I2.forEach(t),sk=i(nd,"."),nd.forEach(t),rk=l(ae),yt=n(ae,"P",{});var fi=a(yt);Ei=n(fi,"A",{href:!0});var N2=a(Ei);ik=i(N2,"MBartTokenizerFast"),N2.forEach(t),dk=i(fi," is a subclass of "),ji=n(fi,"A",{href:!0});var L2=a(ji);lk=i(L2,"XLMRobertaTokenizerFast"),L2.forEach(t),ck=i(fi,`. Refer to
superclass `),Ci=n(fi,"A",{href:!0});var D2=a(Ci);pk=i(D2,"XLMRobertaTokenizerFast"),D2.forEach(t),uk=i(fi,` for usage examples and documentation concerning the
initialization parameters and other methods.`),fi.forEach(t),hk=l(ae),ya=n(ae,"P",{});var Im=a(ya);mk=i(Im,"The tokenization method is "),fl=n(Im,"CODE",{});var G2=a(fl);fk=i(G2,"<tokens> <eos> <language code>"),G2.forEach(t),_k=i(Im," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Im.forEach(t),gk=l(ae),_l=n(ae,"P",{});var U2=a(_l);kk=i(U2,"Examples:"),U2.forEach(t),bk=l(ae),f(Ta.$$.fragment,ae),vk=l(ae),Se=n(ae,"DIV",{class:!0});var Ct=a(Se);f(Ma.$$.fragment,Ct),yk=l(Ct),gl=n(Ct,"P",{});var R2=a(gl);Tk=i(R2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),R2.forEach(t),Mk=l(Ct),wa=n(Ct,"P",{});var Nm=a(wa);wk=i(Nm,"An MBART sequence has the following format, where "),kl=n(Nm,"CODE",{});var W2=a(kl);xk=i(W2,"X"),W2.forEach(t),zk=i(Nm," represents the sequence:"),Nm.forEach(t),Bk=l(Ct),xa=n(Ct,"UL",{});var Lm=a(xa);za=n(Lm,"LI",{});var Dm=a(za);bl=n(Dm,"CODE",{});var Q2=a(bl);qk=i(Q2,"input_ids"),Q2.forEach(t),$k=i(Dm," (for encoder) "),vl=n(Dm,"CODE",{});var X2=a(vl);Fk=i(X2,"X [eos, src_lang_code]"),X2.forEach(t),Dm.forEach(t),Ek=l(Lm),Ba=n(Lm,"LI",{});var Gm=a(Ba);yl=n(Gm,"CODE",{});var K2=a(yl);jk=i(K2,"decoder_input_ids"),K2.forEach(t),Ck=i(Gm,": (for decoder) "),Tl=n(Gm,"CODE",{});var H2=a(Tl);Pk=i(H2,"X [eos, tgt_lang_code]"),H2.forEach(t),Gm.forEach(t),Lm.forEach(t),Ok=l(Ct),Ml=n(Ct,"P",{});var V2=a(Ml);Sk=i(V2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),V2.forEach(t),Ct.forEach(t),Ak=l(ae),Ro=n(ae,"DIV",{class:!0});var Um=a(Ro);f(qa.$$.fragment,Um),Ik=l(Um),wl=n(Um,"P",{});var J2=a(wl);Nk=i(J2,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),J2.forEach(t),Um.forEach(t),Lk=l(ae),Wo=n(ae,"DIV",{class:!0});var Rm=a(Wo);f($a.$$.fragment,Rm),Dk=l(Rm),xl=n(Rm,"P",{});var Z2=a(xl);Gk=i(Z2,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Z2.forEach(t),Rm.forEach(t),ae.forEach(t),Vh=l(s),io=n(s,"H2",{class:!0});var Wm=a(io);Qo=n(Wm,"A",{id:!0,class:!0,href:!0});var Y2=a(Qo);zl=n(Y2,"SPAN",{});var ez=a(zl);f(Fa.$$.fragment,ez),ez.forEach(t),Y2.forEach(t),Uk=l(Wm),Bl=n(Wm,"SPAN",{});var tz=a(Bl);Rk=i(tz,"MBart50Tokenizer"),tz.forEach(t),Wm.forEach(t),Jh=l(s),L=n(s,"DIV",{class:!0});var Y=a(L);f(Ea.$$.fragment,Y),Wk=l(Y),ja=n(Y,"P",{});var Qm=a(ja);Qk=i(Qm,"Construct a MBart50 tokenizer. Based on "),Ca=n(Qm,"A",{href:!0,rel:!0});var oz=a(Ca);Xk=i(oz,"SentencePiece"),oz.forEach(t),Kk=i(Qm,"."),Qm.forEach(t),Hk=l(Y),Pa=n(Y,"P",{});var Xm=a(Pa);Vk=i(Xm,"This tokenizer inherits from "),Pi=n(Xm,"A",{href:!0});var nz=a(Pi);Jk=i(nz,"PreTrainedTokenizer"),nz.forEach(t),Zk=i(Xm,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Xm.forEach(t),Yk=l(Y),ql=n(Y,"P",{});var az=a(ql);eb=i(az,"Examples:"),az.forEach(t),tb=l(Y),f(Oa.$$.fragment,Y),ob=l(Y),ot=n(Y,"DIV",{class:!0});var Dn=a(ot);f(Sa.$$.fragment,Dn),nb=l(Dn),Aa=n(Dn,"P",{});var Km=a(Aa);ab=i(Km,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),$l=n(Km,"CODE",{});var sz=a($l);sb=i(sz,"X"),sz.forEach(t),rb=i(Km," represents the sequence:"),Km.forEach(t),ib=l(Dn),Ia=n(Dn,"UL",{});var Hm=a(Ia);Na=n(Hm,"LI",{});var Vm=a(Na);Fl=n(Vm,"CODE",{});var rz=a(Fl);db=i(rz,"input_ids"),rz.forEach(t),lb=i(Vm," (for encoder) "),El=n(Vm,"CODE",{});var iz=a(El);cb=i(iz,"[src_lang_code] X [eos]"),iz.forEach(t),Vm.forEach(t),pb=l(Hm),La=n(Hm,"LI",{});var Jm=a(La);jl=n(Jm,"CODE",{});var dz=a(jl);ub=i(dz,"labels"),dz.forEach(t),hb=i(Jm,": (for decoder) "),Cl=n(Jm,"CODE",{});var lz=a(Cl);mb=i(lz,"[tgt_lang_code] X [eos]"),lz.forEach(t),Jm.forEach(t),Hm.forEach(t),fb=l(Dn),Pl=n(Dn,"P",{});var cz=a(Pl);_b=i(cz,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cz.forEach(t),Dn.forEach(t),gb=l(Y),Xo=n(Y,"DIV",{class:!0});var Zm=a(Xo);f(Da.$$.fragment,Zm),kb=l(Zm),Ol=n(Zm,"P",{});var pz=a(Ol);bb=i(pz,"Converts a sequence of tokens (strings for sub-words) in a single string."),pz.forEach(t),Zm.forEach(t),vb=l(Y),Ko=n(Y,"DIV",{class:!0});var Ym=a(Ko);f(Ga.$$.fragment,Ym),yb=l(Ym),Ua=n(Ym,"P",{});var ef=a(Ua);Tb=i(ef,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Sl=n(ef,"CODE",{});var uz=a(Sl);Mb=i(uz,"prepare_for_model"),uz.forEach(t),wb=i(ef," method."),ef.forEach(t),Ym.forEach(t),xb=l(Y),Ho=n(Y,"DIV",{class:!0});var tf=a(Ho);f(Ra.$$.fragment,tf),zb=l(tf),Al=n(tf,"P",{});var hz=a(Al);Bb=i(hz,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),hz.forEach(t),tf.forEach(t),qb=l(Y),Vo=n(Y,"DIV",{class:!0});var of=a(Vo);f(Wa.$$.fragment,of),$b=l(of),Il=n(of,"P",{});var mz=a(Il);Fb=i(mz,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),mz.forEach(t),of.forEach(t),Y.forEach(t),Zh=l(s),lo=n(s,"H2",{class:!0});var nf=a(lo);Jo=n(nf,"A",{id:!0,class:!0,href:!0});var fz=a(Jo);Nl=n(fz,"SPAN",{});var _z=a(Nl);f(Qa.$$.fragment,_z),_z.forEach(t),fz.forEach(t),Eb=l(nf),Ll=n(nf,"SPAN",{});var gz=a(Ll);jb=i(gz,"MBart50TokenizerFast"),gz.forEach(t),nf.forEach(t),Yh=l(s),H=n(s,"DIV",{class:!0});var _e=a(H);f(Xa.$$.fragment,_e),Cb=l(_e),co=n(_e,"P",{});var ad=a(co);Pb=i(ad,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Dl=n(ad,"EM",{});var kz=a(Dl);Ob=i(kz,"tokenizers"),kz.forEach(t),Sb=i(ad," library). Based on "),Ka=n(ad,"A",{href:!0,rel:!0});var bz=a(Ka);Ab=i(bz,"BPE"),bz.forEach(t),Ib=i(ad,"."),ad.forEach(t),Nb=l(_e),Ha=n(_e,"P",{});var af=a(Ha);Lb=i(af,"This tokenizer inherits from "),Oi=n(af,"A",{href:!0});var vz=a(Oi);Db=i(vz,"PreTrainedTokenizerFast"),vz.forEach(t),Gb=i(af,` which contains most of the main
methods. Users should refer to this superclass for more information regarding those methods.`),af.forEach(t),Ub=l(_e),Gl=n(_e,"P",{});var yz=a(Gl);Rb=i(yz,"Examples:"),yz.forEach(t),Wb=l(_e),f(Va.$$.fragment,_e),Qb=l(_e),Ae=n(_e,"DIV",{class:!0});var Pt=a(Ae);f(Ja.$$.fragment,Pt),Xb=l(Pt),Ul=n(Pt,"P",{});var Tz=a(Ul);Kb=i(Tz,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Tz.forEach(t),Hb=l(Pt),Za=n(Pt,"P",{});var sf=a(Za);Vb=i(sf,"An MBART-50 sequence has the following format, where "),Rl=n(sf,"CODE",{});var Mz=a(Rl);Jb=i(Mz,"X"),Mz.forEach(t),Zb=i(sf," represents the sequence:"),sf.forEach(t),Yb=l(Pt),Ya=n(Pt,"UL",{});var rf=a(Ya);es=n(rf,"LI",{});var df=a(es);Wl=n(df,"CODE",{});var wz=a(Wl);ev=i(wz,"input_ids"),wz.forEach(t),tv=i(df," (for encoder) "),Ql=n(df,"CODE",{});var xz=a(Ql);ov=i(xz,"[src_lang_code] X [eos]"),xz.forEach(t),df.forEach(t),nv=l(rf),ts=n(rf,"LI",{});var lf=a(ts);Xl=n(lf,"CODE",{});var zz=a(Xl);av=i(zz,"labels"),zz.forEach(t),sv=i(lf,": (for decoder) "),Kl=n(lf,"CODE",{});var Bz=a(Kl);rv=i(Bz,"[tgt_lang_code] X [eos]"),Bz.forEach(t),lf.forEach(t),rf.forEach(t),iv=l(Pt),Hl=n(Pt,"P",{});var qz=a(Hl);dv=i(qz,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),qz.forEach(t),Pt.forEach(t),lv=l(_e),Zo=n(_e,"DIV",{class:!0});var cf=a(Zo);f(os.$$.fragment,cf),cv=l(cf),Vl=n(cf,"P",{});var $z=a(Vl);pv=i($z,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),$z.forEach(t),cf.forEach(t),uv=l(_e),Yo=n(_e,"DIV",{class:!0});var pf=a(Yo);f(ns.$$.fragment,pf),hv=l(pf),Jl=n(pf,"P",{});var Fz=a(Jl);mv=i(Fz,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Fz.forEach(t),pf.forEach(t),_e.forEach(t),em=l(s),po=n(s,"H2",{class:!0});var uf=a(po);en=n(uf,"A",{id:!0,class:!0,href:!0});var Ez=a(en);Zl=n(Ez,"SPAN",{});var jz=a(Zl);f(as.$$.fragment,jz),jz.forEach(t),Ez.forEach(t),fv=l(uf),Yl=n(uf,"SPAN",{});var Cz=a(Yl);_v=i(Cz,"MBartModel"),Cz.forEach(t),uf.forEach(t),tm=l(s),He=n(s,"DIV",{class:!0});var Gn=a(He);f(ss.$$.fragment,Gn),gv=l(Gn),rs=n(Gn,"P",{});var hf=a(rs);kv=i(hf,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Si=n(hf,"A",{href:!0});var Pz=a(Si);bv=i(Pz,"PreTrainedModel"),Pz.forEach(t),vv=i(hf,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),hf.forEach(t),yv=l(Gn),is=n(Gn,"P",{});var mf=a(is);Tv=i(mf,"This model is also a PyTorch "),ds=n(mf,"A",{href:!0,rel:!0});var Oz=a(ds);Mv=i(Oz,"torch.nn.Module"),Oz.forEach(t),wv=i(mf,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mf.forEach(t),xv=l(Gn),Ie=n(Gn,"DIV",{class:!0});var Ot=a(Ie);f(ls.$$.fragment,Ot),zv=l(Ot),uo=n(Ot,"P",{});var sd=a(uo);Bv=i(sd,"The "),Ai=n(sd,"A",{href:!0});var Sz=a(Ai);qv=i(Sz,"MBartModel"),Sz.forEach(t),$v=i(sd," forward method, overrides the "),ec=n(sd,"CODE",{});var Az=a(ec);Fv=i(Az,"__call__"),Az.forEach(t),Ev=i(sd," special method."),sd.forEach(t),jv=l(Ot),f(tn.$$.fragment,Ot),Cv=l(Ot),tc=n(Ot,"P",{});var Iz=a(tc);Pv=i(Iz,"Example:"),Iz.forEach(t),Ov=l(Ot),f(cs.$$.fragment,Ot),Ot.forEach(t),Gn.forEach(t),om=l(s),ho=n(s,"H2",{class:!0});var ff=a(ho);on=n(ff,"A",{id:!0,class:!0,href:!0});var Nz=a(on);oc=n(Nz,"SPAN",{});var Lz=a(oc);f(ps.$$.fragment,Lz),Lz.forEach(t),Nz.forEach(t),Sv=l(ff),nc=n(ff,"SPAN",{});var Dz=a(nc);Av=i(Dz,"MBartForConditionalGeneration"),Dz.forEach(t),ff.forEach(t),nm=l(s),Ve=n(s,"DIV",{class:!0});var Un=a(Ve);f(us.$$.fragment,Un),Iv=l(Un),hs=n(Un,"P",{});var _f=a(hs);Nv=i(_f,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=n(_f,"A",{href:!0});var Gz=a(Ii);Lv=i(Gz,"PreTrainedModel"),Gz.forEach(t),Dv=i(_f,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_f.forEach(t),Gv=l(Un),ms=n(Un,"P",{});var gf=a(ms);Uv=i(gf,"This model is also a PyTorch "),fs=n(gf,"A",{href:!0,rel:!0});var Uz=a(fs);Rv=i(Uz,"torch.nn.Module"),Uz.forEach(t),Wv=i(gf,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),gf.forEach(t),Qv=l(Un),E=n(Un,"DIV",{class:!0});var S=a(E);f(_s.$$.fragment,S),Xv=l(S),mo=n(S,"P",{});var rd=a(mo);Kv=i(rd,"The "),Ni=n(rd,"A",{href:!0});var Rz=a(Ni);Hv=i(Rz,"MBartForConditionalGeneration"),Rz.forEach(t),Vv=i(rd," forward method, overrides the "),ac=n(rd,"CODE",{});var Wz=a(ac);Jv=i(Wz,"__call__"),Wz.forEach(t),Zv=i(rd," special method."),rd.forEach(t),Yv=l(S),f(nn.$$.fragment,S),ey=l(S),sc=n(S,"P",{});var Qz=a(sc);ty=i(Qz,"Summarization example::"),Qz.forEach(t),oy=l(S),rc=n(S,"BLOCKQUOTE",{});var Xz=a(rc);ic=n(Xz,"BLOCKQUOTE",{});var Kz=a(ic);dc=n(Kz,"BLOCKQUOTE",{});var Hz=a(dc);lc=n(Hz,"P",{});var Vz=a(lc);ny=i(Vz,"from transformers import MBartTokenizer, MBartForConditionalGeneration, MBartConfig"),Vz.forEach(t),Hz.forEach(t),Kz.forEach(t),Xz.forEach(t),ay=l(S),cc=n(S,"BLOCKQUOTE",{});var Jz=a(cc);pc=n(Jz,"BLOCKQUOTE",{});var Zz=a(pc);uc=n(Zz,"BLOCKQUOTE",{});var Yz=a(uc);hc=n(Yz,"P",{});var eB=a(hc);sy=i(eB,`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),eB.forEach(t),Yz.forEach(t),Zz.forEach(t),Jz.forEach(t),ry=l(S),mc=n(S,"BLOCKQUOTE",{});var tB=a(mc);fc=n(tB,"BLOCKQUOTE",{});var oB=a(fc);_c=n(oB,"BLOCKQUOTE",{});var nB=a(_c);gc=n(nB,"P",{});var aB=a(gc);iy=i(aB,`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018pt\u2019)`),aB.forEach(t),nB.forEach(t),oB.forEach(t),tB.forEach(t),dy=l(S),kc=n(S,"BLOCKQUOTE",{});var sB=a(kc);bc=n(sB,"BLOCKQUOTE",{});var rB=a(bc);gs=n(rB,"BLOCKQUOTE",{});var kf=a(gs);an=n(kf,"H1",{class:!0});var bf=a(an);sn=n(bf,"A",{id:!0,class:!0,href:!0});var iB=a(sn);vc=n(iB,"SPAN",{});var dB=a(vc);f(ks.$$.fragment,dB),dB.forEach(t),iB.forEach(t),ly=l(bf),yc=n(bf,"SPAN",{});var lB=a(yc);cy=i(lB,"Generate Summary"),lB.forEach(t),bf.forEach(t),py=l(kf),Tc=n(kf,"P",{});var cB=a(Tc);uy=i(cB,`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),cB.forEach(t),kf.forEach(t),rB.forEach(t),sB.forEach(t),hy=l(S),Mc=n(S,"P",{});var pB=a(Mc);my=i(pB,"Mask filling example::"),pB.forEach(t),fy=l(S),wc=n(S,"BLOCKQUOTE",{});var uB=a(wc);xc=n(uB,"BLOCKQUOTE",{});var hB=a(xc);fo=n(hB,"BLOCKQUOTE",{});var id=a(fo);zc=n(id,"P",{});var mB=a(zc);_y=i(mB,`from transformers import MBartTokenizer, MBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),mB.forEach(t),gy=l(id),rn=n(id,"H1",{class:!0});var vf=a(rn);dn=n(vf,"A",{id:!0,class:!0,href:!0});var fB=a(dn);Bc=n(fB,"SPAN",{});var _B=a(Bc);f(bs.$$.fragment,_B),_B.forEach(t),fB.forEach(t),ky=l(vf),qc=n(vf,"SPAN",{});var gB=a(qc);by=i(gB,"de_DE is the language symbol id <LID> for German"),gB.forEach(t),vf.forEach(t),vy=l(id),$c=n(id,"P",{});var kB=a($c);yy=i(kB,"TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),kB.forEach(t),id.forEach(t),hB.forEach(t),uB.forEach(t),Ty=l(S),Fc=n(S,"BLOCKQUOTE",{});var bB=a(Fc);Ec=n(bB,"BLOCKQUOTE",{});var vB=a(Ec);jc=n(vB,"BLOCKQUOTE",{});var yB=a(jc);Cc=n(yB,"P",{});var TB=a(Cc);My=i(TB,`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018pt\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),TB.forEach(t),yB.forEach(t),vB.forEach(t),bB.forEach(t),wy=l(S),Pc=n(S,"BLOCKQUOTE",{});var MB=a(Pc);Oc=n(MB,"BLOCKQUOTE",{});var wB=a(Oc);Sc=n(wB,"BLOCKQUOTE",{});var xB=a(Sc);Ac=n(xB,"P",{});var zB=a(Ac);xy=i(zB,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),zB.forEach(t),xB.forEach(t),wB.forEach(t),MB.forEach(t),zy=l(S),Ic=n(S,"BLOCKQUOTE",{});var BB=a(Ic);Nc=n(BB,"BLOCKQUOTE",{});var qB=a(Nc);Lc=n(qB,"BLOCKQUOTE",{});var $B=a(Lc);Dc=n($B,"P",{});var FB=a(Dc);By=i(FB,"tokenizer.decode(predictions).split()"),FB.forEach(t),$B.forEach(t),qB.forEach(t),BB.forEach(t),S.forEach(t),Un.forEach(t),am=l(s),_o=n(s,"H2",{class:!0});var yf=a(_o);ln=n(yf,"A",{id:!0,class:!0,href:!0});var EB=a(ln);Gc=n(EB,"SPAN",{});var jB=a(Gc);f(vs.$$.fragment,jB),jB.forEach(t),EB.forEach(t),qy=l(yf),Uc=n(yf,"SPAN",{});var CB=a(Uc);$y=i(CB,"MBartForQuestionAnswering"),CB.forEach(t),yf.forEach(t),sm=l(s),Fe=n(s,"DIV",{class:!0});var St=a(Fe);f(ys.$$.fragment,St),Fy=l(St),go=n(St,"P",{});var dd=a(go);Ey=i(dd,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rc=n(dd,"CODE",{});var PB=a(Rc);jy=i(PB,"span start logits"),PB.forEach(t),Cy=i(dd," and "),Wc=n(dd,"CODE",{});var OB=a(Wc);Py=i(OB,"span end logits"),OB.forEach(t),Oy=i(dd,")."),dd.forEach(t),Sy=l(St),Ts=n(St,"P",{});var Tf=a(Ts);Ay=i(Tf,"This model inherits from "),Li=n(Tf,"A",{href:!0});var SB=a(Li);Iy=i(SB,"PreTrainedModel"),SB.forEach(t),Ny=i(Tf,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Tf.forEach(t),Ly=l(St),Ms=n(St,"P",{});var Mf=a(Ms);Dy=i(Mf,"This model is also a PyTorch "),ws=n(Mf,"A",{href:!0,rel:!0});var AB=a(ws);Gy=i(AB,"torch.nn.Module"),AB.forEach(t),Uy=i(Mf,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Mf.forEach(t),Ry=l(St),Ne=n(St,"DIV",{class:!0});var At=a(Ne);f(xs.$$.fragment,At),Wy=l(At),ko=n(At,"P",{});var ld=a(ko);Qy=i(ld,"The "),Di=n(ld,"A",{href:!0});var IB=a(Di);Xy=i(IB,"MBartForQuestionAnswering"),IB.forEach(t),Ky=i(ld," forward method, overrides the "),Qc=n(ld,"CODE",{});var NB=a(Qc);Hy=i(NB,"__call__"),NB.forEach(t),Vy=i(ld," special method."),ld.forEach(t),Jy=l(At),f(cn.$$.fragment,At),Zy=l(At),Xc=n(At,"P",{});var LB=a(Xc);Yy=i(LB,"Example:"),LB.forEach(t),eT=l(At),f(zs.$$.fragment,At),At.forEach(t),St.forEach(t),rm=l(s),bo=n(s,"H2",{class:!0});var wf=a(bo);pn=n(wf,"A",{id:!0,class:!0,href:!0});var DB=a(pn);Kc=n(DB,"SPAN",{});var GB=a(Kc);f(Bs.$$.fragment,GB),GB.forEach(t),DB.forEach(t),tT=l(wf),Hc=n(wf,"SPAN",{});var UB=a(Hc);oT=i(UB,"MBartForSequenceClassification"),UB.forEach(t),wf.forEach(t),im=l(s),Ee=n(s,"DIV",{class:!0});var It=a(Ee);f(qs.$$.fragment,It),nT=l(It),Vc=n(It,"P",{});var RB=a(Vc);aT=i(RB,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),RB.forEach(t),sT=l(It),$s=n(It,"P",{});var xf=a($s);rT=i(xf,"This model inherits from "),Gi=n(xf,"A",{href:!0});var WB=a(Gi);iT=i(WB,"PreTrainedModel"),WB.forEach(t),dT=i(xf,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),xf.forEach(t),lT=l(It),Fs=n(It,"P",{});var zf=a(Fs);cT=i(zf,"This model is also a PyTorch "),Es=n(zf,"A",{href:!0,rel:!0});var QB=a(Es);pT=i(QB,"torch.nn.Module"),QB.forEach(t),uT=i(zf,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zf.forEach(t),hT=l(It),ne=n(It,"DIV",{class:!0});var Re=a(ne);f(js.$$.fragment,Re),mT=l(Re),vo=n(Re,"P",{});var cd=a(vo);fT=i(cd,"The "),Ui=n(cd,"A",{href:!0});var XB=a(Ui);_T=i(XB,"MBartForSequenceClassification"),XB.forEach(t),gT=i(cd," forward method, overrides the "),Jc=n(cd,"CODE",{});var KB=a(Jc);kT=i(KB,"__call__"),KB.forEach(t),bT=i(cd," special method."),cd.forEach(t),vT=l(Re),f(un.$$.fragment,Re),yT=l(Re),Zc=n(Re,"P",{});var HB=a(Zc);TT=i(HB,"Example of single-label classification:"),HB.forEach(t),MT=l(Re),f(Cs.$$.fragment,Re),wT=l(Re),Yc=n(Re,"P",{});var VB=a(Yc);xT=i(VB,"Example of multi-label classification:"),VB.forEach(t),zT=l(Re),f(Ps.$$.fragment,Re),Re.forEach(t),It.forEach(t),dm=l(s),yo=n(s,"H2",{class:!0});var Bf=a(yo);hn=n(Bf,"A",{id:!0,class:!0,href:!0});var JB=a(hn);ep=n(JB,"SPAN",{});var ZB=a(ep);f(Os.$$.fragment,ZB),ZB.forEach(t),JB.forEach(t),BT=l(Bf),tp=n(Bf,"SPAN",{});var YB=a(tp);qT=i(YB,"MBartForCausalLM"),YB.forEach(t),Bf.forEach(t),lm=l(s),Ss=n(s,"DIV",{class:!0});var e4=a(Ss);Tt=n(e4,"DIV",{class:!0});var pd=a(Tt);f(As.$$.fragment,pd),$T=l(pd),op=n(pd,"P",{});var t4=a(op);FT=i(t4,"Example:"),t4.forEach(t),ET=l(pd),f(Is.$$.fragment,pd),pd.forEach(t),e4.forEach(t),cm=l(s),To=n(s,"H2",{class:!0});var qf=a(To);mn=n(qf,"A",{id:!0,class:!0,href:!0});var o4=a(mn);np=n(o4,"SPAN",{});var n4=a(np);f(Ns.$$.fragment,n4),n4.forEach(t),o4.forEach(t),jT=l(qf),ap=n(qf,"SPAN",{});var a4=a(ap);CT=i(a4,"TFMBartModel"),a4.forEach(t),qf.forEach(t),pm=l(s),je=n(s,"DIV",{class:!0});var Nt=a(je);f(Ls.$$.fragment,Nt),PT=l(Nt),Ds=n(Nt,"P",{});var $f=a(Ds);OT=i($f,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ri=n($f,"A",{href:!0});var s4=a(Ri);ST=i(s4,"TFPreTrainedModel"),s4.forEach(t),AT=i($f,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$f.forEach(t),IT=l(Nt),Gs=n(Nt,"P",{});var Ff=a(Gs);NT=i(Ff,"This model is also a "),Us=n(Ff,"A",{href:!0,rel:!0});var r4=a(Us);LT=i(r4,"tf.keras.Model"),r4.forEach(t),DT=i(Ff,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ff.forEach(t),GT=l(Nt),f(fn.$$.fragment,Nt),UT=l(Nt),Le=n(Nt,"DIV",{class:!0});var Lt=a(Le);f(Rs.$$.fragment,Lt),RT=l(Lt),Mo=n(Lt,"P",{});var ud=a(Mo);WT=i(ud,"The "),Wi=n(ud,"A",{href:!0});var i4=a(Wi);QT=i(i4,"TFMBartModel"),i4.forEach(t),XT=i(ud," forward method, overrides the "),sp=n(ud,"CODE",{});var d4=a(sp);KT=i(d4,"__call__"),d4.forEach(t),HT=i(ud," special method."),ud.forEach(t),VT=l(Lt),f(_n.$$.fragment,Lt),JT=l(Lt),rp=n(Lt,"P",{});var l4=a(rp);ZT=i(l4,"Example:"),l4.forEach(t),YT=l(Lt),f(Ws.$$.fragment,Lt),Lt.forEach(t),Nt.forEach(t),um=l(s),wo=n(s,"H2",{class:!0});var Ef=a(wo);gn=n(Ef,"A",{id:!0,class:!0,href:!0});var c4=a(gn);ip=n(c4,"SPAN",{});var p4=a(ip);f(Qs.$$.fragment,p4),p4.forEach(t),c4.forEach(t),e1=l(Ef),dp=n(Ef,"SPAN",{});var u4=a(dp);t1=i(u4,"TFMBartForConditionalGeneration"),u4.forEach(t),Ef.forEach(t),hm=l(s),Ce=n(s,"DIV",{class:!0});var Dt=a(Ce);f(Xs.$$.fragment,Dt),o1=l(Dt),Ks=n(Dt,"P",{});var jf=a(Ks);n1=i(jf,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Qi=n(jf,"A",{href:!0});var h4=a(Qi);a1=i(h4,"TFPreTrainedModel"),h4.forEach(t),s1=i(jf,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),jf.forEach(t),r1=l(Dt),Hs=n(Dt,"P",{});var Cf=a(Hs);i1=i(Cf,"This model is also a "),Vs=n(Cf,"A",{href:!0,rel:!0});var m4=a(Vs);d1=i(m4,"tf.keras.Model"),m4.forEach(t),l1=i(Cf,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Cf.forEach(t),c1=l(Dt),f(kn.$$.fragment,Dt),p1=l(Dt),O=n(Dt,"DIV",{class:!0});var X=a(O);f(Js.$$.fragment,X),u1=l(X),xo=n(X,"P",{});var hd=a(xo);h1=i(hd,"The "),Xi=n(hd,"A",{href:!0});var f4=a(Xi);m1=i(f4,"TFMBartForConditionalGeneration"),f4.forEach(t),f1=i(hd," forward method, overrides the "),lp=n(hd,"CODE",{});var _4=a(lp);_1=i(_4,"__call__"),_4.forEach(t),g1=i(hd," special method."),hd.forEach(t),k1=l(X),f(bn.$$.fragment,X),b1=l(X),cp=n(X,"P",{});var g4=a(cp);v1=i(g4,"Summarization example::"),g4.forEach(t),y1=l(X),pp=n(X,"BLOCKQUOTE",{});var k4=a(pp);up=n(k4,"BLOCKQUOTE",{});var b4=a(up);hp=n(b4,"BLOCKQUOTE",{});var v4=a(hp);mp=n(v4,"P",{});var y4=a(mp);T1=i(y4,"from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig"),y4.forEach(t),v4.forEach(t),b4.forEach(t),k4.forEach(t),M1=l(X),fp=n(X,"BLOCKQUOTE",{});var T4=a(fp);_p=n(T4,"BLOCKQUOTE",{});var M4=a(_p);gp=n(M4,"BLOCKQUOTE",{});var w4=a(gp);kp=n(w4,"P",{});var x4=a(kp);w1=i(x4,`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),x4.forEach(t),w4.forEach(t),M4.forEach(t),T4.forEach(t),x1=l(X),bp=n(X,"BLOCKQUOTE",{});var z4=a(bp);vp=n(z4,"BLOCKQUOTE",{});var B4=a(vp);yp=n(B4,"BLOCKQUOTE",{});var q4=a(yp);Tp=n(q4,"P",{});var $4=a(Tp);z1=i($4,`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018tf\u2019)`),$4.forEach(t),q4.forEach(t),B4.forEach(t),z4.forEach(t),B1=l(X),Mp=n(X,"BLOCKQUOTE",{});var F4=a(Mp);wp=n(F4,"BLOCKQUOTE",{});var E4=a(wp);Zs=n(E4,"BLOCKQUOTE",{});var Pf=a(Zs);vn=n(Pf,"H1",{class:!0});var Of=a(vn);yn=n(Of,"A",{id:!0,class:!0,href:!0});var j4=a(yn);xp=n(j4,"SPAN",{});var C4=a(xp);f(Ys.$$.fragment,C4),C4.forEach(t),j4.forEach(t),q1=l(Of),zp=n(Of,"SPAN",{});var P4=a(zp);$1=i(P4,"Generate Summary"),P4.forEach(t),Of.forEach(t),F1=l(Pf),Bp=n(Pf,"P",{});var O4=a(Bp);E1=i(O4,`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True)
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),O4.forEach(t),Pf.forEach(t),E4.forEach(t),F4.forEach(t),j1=l(X),qp=n(X,"P",{});var S4=a(qp);C1=i(S4,"Mask filling example::"),S4.forEach(t),P1=l(X),$p=n(X,"BLOCKQUOTE",{});var A4=a($p);Fp=n(A4,"BLOCKQUOTE",{});var I4=a(Fp);zo=n(I4,"BLOCKQUOTE",{});var md=a(zo);Ep=n(md,"P",{});var N4=a(Ep);O1=i(N4,`from transformers import MBartTokenizer, TFMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),N4.forEach(t),S1=l(md),Tn=n(md,"H1",{class:!0});var Sf=a(Tn);Mn=n(Sf,"A",{id:!0,class:!0,href:!0});var L4=a(Mn);jp=n(L4,"SPAN",{});var D4=a(jp);f(er.$$.fragment,D4),D4.forEach(t),L4.forEach(t),A1=l(Sf),Cp=n(Sf,"SPAN",{});var G4=a(Cp);I1=i(G4,"de_DE is the language symbol id <LID> for German"),G4.forEach(t),Sf.forEach(t),N1=l(md),Pp=n(md,"P",{});var U4=a(Pp);L1=i(U4,"TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),U4.forEach(t),md.forEach(t),I4.forEach(t),A4.forEach(t),D1=l(X),Op=n(X,"BLOCKQUOTE",{});var R4=a(Op);Sp=n(R4,"BLOCKQUOTE",{});var W4=a(Sp);tr=n(W4,"BLOCKQUOTE",{});var Af=a(tr);Ap=n(Af,"P",{});var Q4=a(Ap);G1=i(Q4,`model = MBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018tf\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])`),Q4.forEach(t),U1=l(Af),wn=n(Af,"H1",{class:!0});var If=a(wn);xn=n(If,"A",{id:!0,class:!0,href:!0});var X4=a(xn);Ip=n(X4,"SPAN",{});var K4=a(Ip);f(or.$$.fragment,K4),K4.forEach(t),X4.forEach(t),R1=l(If),Np=n(If,"SPAN",{});var H4=a(Np);W1=i(H4,"probs[5] is associated with the mask token"),H4.forEach(t),If.forEach(t),Af.forEach(t),W4.forEach(t),R4.forEach(t),X.forEach(t),Dt.forEach(t),mm=l(s),Bo=n(s,"H2",{class:!0});var Nf=a(Bo);zn=n(Nf,"A",{id:!0,class:!0,href:!0});var V4=a(zn);Lp=n(V4,"SPAN",{});var J4=a(Lp);f(nr.$$.fragment,J4),J4.forEach(t),V4.forEach(t),Q1=l(Nf),Dp=n(Nf,"SPAN",{});var Z4=a(Dp);X1=i(Z4,"FlaxMBartModel"),Z4.forEach(t),Nf.forEach(t),fm=l(s),V=n(s,"DIV",{class:!0});var ge=a(V);f(ar.$$.fragment,ge),K1=l(ge),sr=n(ge,"P",{});var Lf=a(sr);H1=i(Lf,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ki=n(Lf,"A",{href:!0});var Y4=a(Ki);V1=i(Y4,"FlaxPreTrainedModel"),Y4.forEach(t),J1=i(Lf,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Lf.forEach(t),Z1=l(ge),rr=n(ge,"P",{});var Df=a(rr);Y1=i(Df,"This model is also a Flax Linen "),ir=n(Df,"A",{href:!0,rel:!0});var eq=a(ir);eM=i(eq,"flax.nn.Module"),eq.forEach(t),tM=i(Df,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Df.forEach(t),oM=l(ge),Gp=n(ge,"P",{});var tq=a(Gp);nM=i(tq,"Finally, this model supports inherent JAX features such as:"),tq.forEach(t),aM=l(ge),ht=n(ge,"UL",{});var Rn=a(ht);Up=n(Rn,"LI",{});var oq=a(Up);dr=n(oq,"A",{href:!0,rel:!0});var nq=a(dr);sM=i(nq,"Just-In-Time (JIT) compilation"),nq.forEach(t),oq.forEach(t),rM=l(Rn),Rp=n(Rn,"LI",{});var aq=a(Rp);lr=n(aq,"A",{href:!0,rel:!0});var sq=a(lr);iM=i(sq,"Automatic Differentiation"),sq.forEach(t),aq.forEach(t),dM=l(Rn),Wp=n(Rn,"LI",{});var rq=a(Wp);cr=n(rq,"A",{href:!0,rel:!0});var iq=a(cr);lM=i(iq,"Vectorization"),iq.forEach(t),rq.forEach(t),cM=l(Rn),Qp=n(Rn,"LI",{});var dq=a(Qp);pr=n(dq,"A",{href:!0,rel:!0});var lq=a(pr);pM=i(lq,"Parallelization"),lq.forEach(t),dq.forEach(t),Rn.forEach(t),uM=l(ge),De=n(ge,"DIV",{class:!0});var Gt=a(De);f(ur.$$.fragment,Gt),hM=l(Gt),qo=n(Gt,"P",{});var fd=a(qo);mM=i(fd,"The "),Xp=n(fd,"CODE",{});var cq=a(Xp);fM=i(cq,"FlaxMBartPreTrainedModel"),cq.forEach(t),_M=i(fd," forward method, overrides the "),Kp=n(fd,"CODE",{});var pq=a(Kp);gM=i(pq,"__call__"),pq.forEach(t),kM=i(fd," special method."),fd.forEach(t),bM=l(Gt),f(Bn.$$.fragment,Gt),vM=l(Gt),Hp=n(Gt,"P",{});var uq=a(Hp);yM=i(uq,"Example:"),uq.forEach(t),TM=l(Gt),f(hr.$$.fragment,Gt),Gt.forEach(t),MM=l(ge),Mt=n(ge,"DIV",{class:!0});var _d=a(Mt);f(mr.$$.fragment,_d),wM=l(_d),Vp=n(_d,"P",{});var hq=a(Vp);xM=i(hq,"Example:"),hq.forEach(t),zM=l(_d),f(fr.$$.fragment,_d),_d.forEach(t),BM=l(ge),wt=n(ge,"DIV",{class:!0});var gd=a(wt);f(_r.$$.fragment,gd),qM=l(gd),Jp=n(gd,"P",{});var mq=a(Jp);$M=i(mq,"Example:"),mq.forEach(t),FM=l(gd),f(gr.$$.fragment,gd),gd.forEach(t),ge.forEach(t),_m=l(s),$o=n(s,"H2",{class:!0});var Gf=a($o);qn=n(Gf,"A",{id:!0,class:!0,href:!0});var fq=a(qn);Zp=n(fq,"SPAN",{});var _q=a(Zp);f(kr.$$.fragment,_q),_q.forEach(t),fq.forEach(t),EM=l(Gf),Yp=n(Gf,"SPAN",{});var gq=a(Yp);jM=i(gq,"FlaxMBartForConditionalGeneration"),gq.forEach(t),Gf.forEach(t),gm=l(s),J=n(s,"DIV",{class:!0});var ke=a(J);f(br.$$.fragment,ke),CM=l(ke),vr=n(ke,"P",{});var Uf=a(vr);PM=i(Uf,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hi=n(Uf,"A",{href:!0});var kq=a(Hi);OM=i(kq,"FlaxPreTrainedModel"),kq.forEach(t),SM=i(Uf,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Uf.forEach(t),AM=l(ke),yr=n(ke,"P",{});var Rf=a(yr);IM=i(Rf,"This model is also a Flax Linen "),Tr=n(Rf,"A",{href:!0,rel:!0});var bq=a(Tr);NM=i(bq,"flax.nn.Module"),bq.forEach(t),LM=i(Rf,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rf.forEach(t),DM=l(ke),eu=n(ke,"P",{});var vq=a(eu);GM=i(vq,"Finally, this model supports inherent JAX features such as:"),vq.forEach(t),UM=l(ke),mt=n(ke,"UL",{});var Wn=a(mt);tu=n(Wn,"LI",{});var yq=a(tu);Mr=n(yq,"A",{href:!0,rel:!0});var Tq=a(Mr);RM=i(Tq,"Just-In-Time (JIT) compilation"),Tq.forEach(t),yq.forEach(t),WM=l(Wn),ou=n(Wn,"LI",{});var Mq=a(ou);wr=n(Mq,"A",{href:!0,rel:!0});var wq=a(wr);QM=i(wq,"Automatic Differentiation"),wq.forEach(t),Mq.forEach(t),XM=l(Wn),nu=n(Wn,"LI",{});var xq=a(nu);xr=n(xq,"A",{href:!0,rel:!0});var zq=a(xr);KM=i(zq,"Vectorization"),zq.forEach(t),xq.forEach(t),HM=l(Wn),au=n(Wn,"LI",{});var Bq=a(au);zr=n(Bq,"A",{href:!0,rel:!0});var qq=a(zr);VM=i(qq,"Parallelization"),qq.forEach(t),Bq.forEach(t),Wn.forEach(t),JM=l(ke),j=n(ke,"DIV",{class:!0});var A=a(j);f(Br.$$.fragment,A),ZM=l(A),Fo=n(A,"P",{});var kd=a(Fo);YM=i(kd,"The "),su=n(kd,"CODE",{});var $q=a(su);e0=i($q,"FlaxMBartPreTrainedModel"),$q.forEach(t),t0=i(kd," forward method, overrides the "),ru=n(kd,"CODE",{});var Fq=a(ru);o0=i(Fq,"__call__"),Fq.forEach(t),n0=i(kd," special method."),kd.forEach(t),a0=l(A),f($n.$$.fragment,A),s0=l(A),iu=n(A,"P",{});var Eq=a(iu);r0=i(Eq,"Summarization example::"),Eq.forEach(t),i0=l(A),du=n(A,"BLOCKQUOTE",{});var jq=a(du);lu=n(jq,"BLOCKQUOTE",{});var Cq=a(lu);cu=n(Cq,"BLOCKQUOTE",{});var Pq=a(cu);pu=n(Pq,"P",{});var Oq=a(pu);d0=i(Oq,"from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig"),Oq.forEach(t),Pq.forEach(t),Cq.forEach(t),jq.forEach(t),l0=l(A),uu=n(A,"BLOCKQUOTE",{});var Sq=a(uu);hu=n(Sq,"BLOCKQUOTE",{});var Aq=a(hu);mu=n(Aq,"BLOCKQUOTE",{});var Iq=a(mu);fu=n(Iq,"P",{});var Nq=a(fu);c0=i(Nq,`model = FlaxMBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),Nq.forEach(t),Iq.forEach(t),Aq.forEach(t),Sq.forEach(t),p0=l(A),_u=n(A,"BLOCKQUOTE",{});var Lq=a(_u);gu=n(Lq,"BLOCKQUOTE",{});var Dq=a(gu);ku=n(Dq,"BLOCKQUOTE",{});var Gq=a(ku);bu=n(Gq,"P",{});var Uq=a(bu);u0=i(Uq,`ARTICLE_TO_SUMMARIZE = \u201CMeine Freunde sind cool, aber sie essen zu viel Kuchen.\u201D
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors=\u2018np\u2019)`),Uq.forEach(t),Gq.forEach(t),Dq.forEach(t),Lq.forEach(t),h0=l(A),vu=n(A,"BLOCKQUOTE",{});var Rq=a(vu);yu=n(Rq,"BLOCKQUOTE",{});var Wq=a(yu);qr=n(Wq,"BLOCKQUOTE",{});var Wf=a(qr);Fn=n(Wf,"H1",{class:!0});var Qf=a(Fn);En=n(Qf,"A",{id:!0,class:!0,href:!0});var Qq=a(En);Tu=n(Qq,"SPAN",{});var Xq=a(Tu);f($r.$$.fragment,Xq),Xq.forEach(t),Qq.forEach(t),m0=l(Qf),Mu=n(Qf,"SPAN",{});var Kq=a(Mu);f0=i(Kq,"Generate Summary"),Kq.forEach(t),Qf.forEach(t),_0=l(Wf),wu=n(Wf,"P",{});var Hq=a(wu);g0=i(Hq,`summary_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_ids])`),Hq.forEach(t),Wf.forEach(t),Wq.forEach(t),Rq.forEach(t),k0=l(A),xu=n(A,"P",{});var Vq=a(xu);b0=i(Vq,"Mask filling example::"),Vq.forEach(t),v0=l(A),zu=n(A,"BLOCKQUOTE",{});var Jq=a(zu);Bu=n(Jq,"BLOCKQUOTE",{});var Zq=a(Bu);Eo=n(Zq,"BLOCKQUOTE",{});var bd=a(Eo);qu=n(bd,"P",{});var Yq=a(qu);y0=i(Yq,`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration
tokenizer = MBartTokenizer.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)`),Yq.forEach(t),T0=l(bd),jn=n(bd,"H1",{class:!0});var Xf=a(jn);Cn=n(Xf,"A",{id:!0,class:!0,href:!0});var e5=a(Cn);$u=n(e5,"SPAN",{});var t5=a($u);f(Fr.$$.fragment,t5),t5.forEach(t),e5.forEach(t),M0=l(Xf),Fu=n(Xf,"SPAN",{});var o5=a(Fu);w0=i(o5,"de_DE is the language symbol id <LID> for German"),o5.forEach(t),Xf.forEach(t),x0=l(bd),Eu=n(bd,"P",{});var n5=a(Eu);z0=i(n5,"TXT = \u201D</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE\u201D"),n5.forEach(t),bd.forEach(t),Zq.forEach(t),Jq.forEach(t),B0=l(A),ju=n(A,"BLOCKQUOTE",{});var a5=a(ju);Cu=n(a5,"BLOCKQUOTE",{});var s5=a(Cu);Pu=n(s5,"BLOCKQUOTE",{});var r5=a(Pu);Ou=n(r5,"P",{});var i5=a(Ou);q0=i(i5,`model = FlaxMBartForConditionalGeneration.from_pretrained(\u2018facebook/mbart-large-cc25\u2019)
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors=\u2018np\u2019)[\u2018input_ids\u2019]
logits = model(input_ids).logits`),i5.forEach(t),r5.forEach(t),s5.forEach(t),a5.forEach(t),$0=l(A),Su=n(A,"BLOCKQUOTE",{});var d5=a(Su);Au=n(d5,"BLOCKQUOTE",{});var l5=a(Au);Iu=n(l5,"BLOCKQUOTE",{});var c5=a(Iu);Nu=n(c5,"P",{});var p5=a(Nu);F0=i(p5,`masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)`),p5.forEach(t),c5.forEach(t),l5.forEach(t),d5.forEach(t),E0=l(A),Lu=n(A,"BLOCKQUOTE",{});var u5=a(Lu);Du=n(u5,"BLOCKQUOTE",{});var h5=a(Du);Gu=n(h5,"BLOCKQUOTE",{});var m5=a(Gu);Uu=n(m5,"P",{});var f5=a(Uu);j0=i(f5,"tokenizer.decode(predictions).split()"),f5.forEach(t),m5.forEach(t),h5.forEach(t),u5.forEach(t),A.forEach(t),C0=l(ke),xt=n(ke,"DIV",{class:!0});var vd=a(xt);f(Er.$$.fragment,vd),P0=l(vd),Ru=n(vd,"P",{});var _5=a(Ru);O0=i(_5,"Example:"),_5.forEach(t),S0=l(vd),f(jr.$$.fragment,vd),vd.forEach(t),A0=l(ke),zt=n(ke,"DIV",{class:!0});var yd=a(zt);f(Cr.$$.fragment,yd),I0=l(yd),Wu=n(yd,"P",{});var g5=a(Wu);N0=i(g5,"Example:"),g5.forEach(t),L0=l(yd),f(Pr.$$.fragment,yd),yd.forEach(t),ke.forEach(t),km=l(s),jo=n(s,"H2",{class:!0});var Kf=a(jo);Pn=n(Kf,"A",{id:!0,class:!0,href:!0});var k5=a(Pn);Qu=n(k5,"SPAN",{});var b5=a(Qu);f(Or.$$.fragment,b5),b5.forEach(t),k5.forEach(t),D0=l(Kf),Xu=n(Kf,"SPAN",{});var v5=a(Xu);G0=i(v5,"FlaxMBartForSequenceClassification"),v5.forEach(t),Kf.forEach(t),bm=l(s),U=n(s,"DIV",{class:!0});var se=a(U);f(Sr.$$.fragment,se),U0=l(se),Ku=n(se,"P",{});var y5=a(Ku);R0=i(y5,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),y5.forEach(t),W0=l(se),Ar=n(se,"P",{});var Hf=a(Ar);Q0=i(Hf,"This model inherits from "),Vi=n(Hf,"A",{href:!0});var T5=a(Vi);X0=i(T5,"FlaxPreTrainedModel"),T5.forEach(t),K0=i(Hf,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Hf.forEach(t),H0=l(se),Ir=n(se,"P",{});var Vf=a(Ir);V0=i(Vf,"This model is also a Flax Linen "),Nr=n(Vf,"A",{href:!0,rel:!0});var M5=a(Nr);J0=i(M5,"flax.nn.Module"),M5.forEach(t),Z0=i(Vf,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vf.forEach(t),Y0=l(se),Hu=n(se,"P",{});var w5=a(Hu);ew=i(w5,"Finally, this model supports inherent JAX features such as:"),w5.forEach(t),tw=l(se),ft=n(se,"UL",{});var Qn=a(ft);Vu=n(Qn,"LI",{});var x5=a(Vu);Lr=n(x5,"A",{href:!0,rel:!0});var z5=a(Lr);ow=i(z5,"Just-In-Time (JIT) compilation"),z5.forEach(t),x5.forEach(t),nw=l(Qn),Ju=n(Qn,"LI",{});var B5=a(Ju);Dr=n(B5,"A",{href:!0,rel:!0});var q5=a(Dr);aw=i(q5,"Automatic Differentiation"),q5.forEach(t),B5.forEach(t),sw=l(Qn),Zu=n(Qn,"LI",{});var $5=a(Zu);Gr=n($5,"A",{href:!0,rel:!0});var F5=a(Gr);rw=i(F5,"Vectorization"),F5.forEach(t),$5.forEach(t),iw=l(Qn),Yu=n(Qn,"LI",{});var E5=a(Yu);Ur=n(E5,"A",{href:!0,rel:!0});var j5=a(Ur);dw=i(j5,"Parallelization"),j5.forEach(t),E5.forEach(t),Qn.forEach(t),lw=l(se),Ge=n(se,"DIV",{class:!0});var Ut=a(Ge);f(Rr.$$.fragment,Ut),cw=l(Ut),Co=n(Ut,"P",{});var Td=a(Co);pw=i(Td,"The "),eh=n(Td,"CODE",{});var C5=a(eh);uw=i(C5,"FlaxMBartPreTrainedModel"),C5.forEach(t),hw=i(Td," forward method, overrides the "),th=n(Td,"CODE",{});var P5=a(th);mw=i(P5,"__call__"),P5.forEach(t),fw=i(Td," special method."),Td.forEach(t),_w=l(Ut),f(On.$$.fragment,Ut),gw=l(Ut),oh=n(Ut,"P",{});var O5=a(oh);kw=i(O5,"Example:"),O5.forEach(t),bw=l(Ut),f(Wr.$$.fragment,Ut),Ut.forEach(t),vw=l(se),Bt=n(se,"DIV",{class:!0});var Md=a(Bt);f(Qr.$$.fragment,Md),yw=l(Md),nh=n(Md,"P",{});var S5=a(nh);Tw=i(S5,"Example:"),S5.forEach(t),Mw=l(Md),f(Xr.$$.fragment,Md),Md.forEach(t),ww=l(se),qt=n(se,"DIV",{class:!0});var wd=a(qt);f(Kr.$$.fragment,wd),xw=l(wd),ah=n(wd,"P",{});var A5=a(ah);zw=i(A5,"Example:"),A5.forEach(t),Bw=l(wd),f(Hr.$$.fragment,wd),wd.forEach(t),se.forEach(t),vm=l(s),Po=n(s,"H2",{class:!0});var Jf=a(Po);Sn=n(Jf,"A",{id:!0,class:!0,href:!0});var I5=a(Sn);sh=n(I5,"SPAN",{});var N5=a(sh);f(Vr.$$.fragment,N5),N5.forEach(t),I5.forEach(t),qw=l(Jf),rh=n(Jf,"SPAN",{});var L5=a(rh);$w=i(L5,"FlaxMBartForQuestionAnswering"),L5.forEach(t),Jf.forEach(t),ym=l(s),R=n(s,"DIV",{class:!0});var re=a(R);f(Jr.$$.fragment,re),Fw=l(re),Oo=n(re,"P",{});var xd=a(Oo);Ew=i(xd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ih=n(xd,"CODE",{});var D5=a(ih);jw=i(D5,"span start logits"),D5.forEach(t),Cw=i(xd," and "),dh=n(xd,"CODE",{});var G5=a(dh);Pw=i(G5,"span end logits"),G5.forEach(t),Ow=i(xd,")."),xd.forEach(t),Sw=l(re),Zr=n(re,"P",{});var Zf=a(Zr);Aw=i(Zf,"This model inherits from "),Ji=n(Zf,"A",{href:!0});var U5=a(Ji);Iw=i(U5,"FlaxPreTrainedModel"),U5.forEach(t),Nw=i(Zf,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Zf.forEach(t),Lw=l(re),Yr=n(re,"P",{});var Yf=a(Yr);Dw=i(Yf,"This model is also a Flax Linen "),ei=n(Yf,"A",{href:!0,rel:!0});var R5=a(ei);Gw=i(R5,"flax.nn.Module"),R5.forEach(t),Uw=i(Yf,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yf.forEach(t),Rw=l(re),lh=n(re,"P",{});var W5=a(lh);Ww=i(W5,"Finally, this model supports inherent JAX features such as:"),W5.forEach(t),Qw=l(re),_t=n(re,"UL",{});var Xn=a(_t);ch=n(Xn,"LI",{});var Q5=a(ch);ti=n(Q5,"A",{href:!0,rel:!0});var X5=a(ti);Xw=i(X5,"Just-In-Time (JIT) compilation"),X5.forEach(t),Q5.forEach(t),Kw=l(Xn),ph=n(Xn,"LI",{});var K5=a(ph);oi=n(K5,"A",{href:!0,rel:!0});var H5=a(oi);Hw=i(H5,"Automatic Differentiation"),H5.forEach(t),K5.forEach(t),Vw=l(Xn),uh=n(Xn,"LI",{});var V5=a(uh);ni=n(V5,"A",{href:!0,rel:!0});var J5=a(ni);Jw=i(J5,"Vectorization"),J5.forEach(t),V5.forEach(t),Zw=l(Xn),hh=n(Xn,"LI",{});var Z5=a(hh);ai=n(Z5,"A",{href:!0,rel:!0});var Y5=a(ai);Yw=i(Y5,"Parallelization"),Y5.forEach(t),Z5.forEach(t),Xn.forEach(t),ex=l(re),Ue=n(re,"DIV",{class:!0});var Rt=a(Ue);f(si.$$.fragment,Rt),tx=l(Rt),So=n(Rt,"P",{});var zd=a(So);ox=i(zd,"The "),mh=n(zd,"CODE",{});var e$=a(mh);nx=i(e$,"FlaxMBartPreTrainedModel"),e$.forEach(t),ax=i(zd," forward method, overrides the "),fh=n(zd,"CODE",{});var t$=a(fh);sx=i(t$,"__call__"),t$.forEach(t),rx=i(zd," special method."),zd.forEach(t),ix=l(Rt),f(An.$$.fragment,Rt),dx=l(Rt),_h=n(Rt,"P",{});var o$=a(_h);lx=i(o$,"Example:"),o$.forEach(t),cx=l(Rt),f(ri.$$.fragment,Rt),Rt.forEach(t),px=l(re),$t=n(re,"DIV",{class:!0});var Bd=a($t);f(ii.$$.fragment,Bd),ux=l(Bd),gh=n(Bd,"P",{});var n$=a(gh);hx=i(n$,"Example:"),n$.forEach(t),mx=l(Bd),f(di.$$.fragment,Bd),Bd.forEach(t),fx=l(re),Ft=n(re,"DIV",{class:!0});var qd=a(Ft);f(li.$$.fragment,qd),_x=l(qd),kh=n(qd,"P",{});var a$=a(kh);gx=i(a$,"Example:"),a$.forEach(t),kx=l(qd),f(ci.$$.fragment,qd),qd.forEach(t),re.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(T$)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ve,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ve,"rel","nofollow"),c(W,"id","overview-of-mbart"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#overview-of-mbart"),c(ee,"class","relative group"),c(te,"href","https://arxiv.org/abs/2001.08210"),c(te,"rel","nofollow"),c(we,"href","https://huggingface.co/valhalla"),c(we,"rel","nofollow"),c(xe,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(xe,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Kn,"href","/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(_i,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Ao,"id","overview-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Yn,"href","https://arxiv.org/abs/2008.00401%3E"),c(Yn,"rel","nofollow"),c(Io,"id","training-of-mbart50"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(Ti,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Lo,"id","transformers.MBartConfig"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(xi,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartModel"),c(ra,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(ra,"rel","nofollow"),c(zi,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bi,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c($e,"class","docstring"),c(Do,"id","transformers.MBartTokenizer"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(qi,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizer"),c($i,"href","/docs/transformers/v4.15.0/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),c(Fi,"href","/docs/transformers/v4.15.0/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),c(Go,"class","docstring"),c(tt,"class","docstring"),c(K,"class","docstring"),c(Uo,"id","transformers.MBartTokenizerFast"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(va,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(va,"rel","nofollow"),c(Ei,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(ji,"href","/docs/transformers/v4.15.0/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizerFast"),c(Ci,"href","/docs/transformers/v4.15.0/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizerFast"),c(Se,"class","docstring"),c(Ro,"class","docstring"),c(Wo,"class","docstring"),c(G,"class","docstring"),c(Qo,"id","transformers.MBart50Tokenizer"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(Ca,"href","https://github.com/google/sentencepiece"),c(Ca,"rel","nofollow"),c(Pi,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ko,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(L,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Ka,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Ka,"rel","nofollow"),c(Oi,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ae,"class","docstring"),c(Zo,"class","docstring"),c(Yo,"class","docstring"),c(H,"class","docstring"),c(en,"id","transformers.MBartModel"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(Si,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ds,"rel","nofollow"),c(Ai,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartModel"),c(Ie,"class","docstring"),c(He,"class","docstring"),c(on,"id","transformers.MBartForConditionalGeneration"),c(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(on,"href","#transformers.MBartForConditionalGeneration"),c(ho,"class","relative group"),c(Ii,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fs,"rel","nofollow"),c(Ni,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(sn,"id","generate-summary"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#generate-summary"),c(an,"class","relative group"),c(dn,"id","de_de-is-the-language-symbol-id-<lid>-for-german"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#de_de-is-the-language-symbol-id-<lid>-for-german"),c(rn,"class","relative group"),c(E,"class","docstring"),c(Ve,"class","docstring"),c(ln,"id","transformers.MBartForQuestionAnswering"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.MBartForQuestionAnswering"),c(_o,"class","relative group"),c(Li,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ws,"rel","nofollow"),c(Di,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ne,"class","docstring"),c(Fe,"class","docstring"),c(pn,"id","transformers.MBartForSequenceClassification"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.MBartForSequenceClassification"),c(bo,"class","relative group"),c(Gi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Es,"rel","nofollow"),c(Ui,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(ne,"class","docstring"),c(Ee,"class","docstring"),c(hn,"id","transformers.MBartForCausalLM"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.MBartForCausalLM"),c(yo,"class","relative group"),c(Tt,"class","docstring"),c(Ss,"class","docstring"),c(mn,"id","transformers.TFMBartModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(Ri,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Us,"rel","nofollow"),c(Wi,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.TFMBartModel"),c(Le,"class","docstring"),c(je,"class","docstring"),c(gn,"id","transformers.TFMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(Qi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vs,"rel","nofollow"),c(Xi,"href","/docs/transformers/v4.15.0/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(yn,"id","generate-summary"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#generate-summary"),c(vn,"class","relative group"),c(Mn,"id","de_de-is-the-language-symbol-id-<lid>-for-german"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#de_de-is-the-language-symbol-id-<lid>-for-german"),c(Tn,"class","relative group"),c(xn,"id","probs[5]-is-associated-with-the-mask-token"),c(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xn,"href","#probs[5]-is-associated-with-the-mask-token"),c(wn,"class","relative group"),c(O,"class","docstring"),c(Ce,"class","docstring"),c(zn,"id","transformers.FlaxMBartModel"),c(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zn,"href","#transformers.FlaxMBartModel"),c(Bo,"class","relative group"),c(Ki,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ir,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pr,"rel","nofollow"),c(De,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(V,"class","docstring"),c(qn,"id","transformers.FlaxMBartForConditionalGeneration"),c(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qn,"href","#transformers.FlaxMBartForConditionalGeneration"),c($o,"class","relative group"),c(Hi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(zr,"rel","nofollow"),c(En,"id","generate-summary"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#generate-summary"),c(Fn,"class","relative group"),c(Cn,"id","de_de-is-the-language-symbol-id-<lid>-for-german"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#de_de-is-the-language-symbol-id-<lid>-for-german"),c(jn,"class","relative group"),c(j,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(J,"class","docstring"),c(Pn,"id","transformers.FlaxMBartForSequenceClassification"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#transformers.FlaxMBartForSequenceClassification"),c(jo,"class","relative group"),c(Vi,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Nr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Nr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Dr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gr,"rel","nofollow"),c(Ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ur,"rel","nofollow"),c(Ge,"class","docstring"),c(Bt,"class","docstring"),c(qt,"class","docstring"),c(U,"class","docstring"),c(Sn,"id","transformers.FlaxMBartForQuestionAnswering"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Po,"class","relative group"),c(Ji,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ei,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ei,"rel","nofollow"),c(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ti,"rel","nofollow"),c(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(oi,"rel","nofollow"),c(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ni,"rel","nofollow"),c(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ai,"rel","nofollow"),c(Ue,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(R,"class","docstring")},m(s,p){e(document.head,h),u(s,z,p),u(s,v,p),e(v,M),e(M,x),_(T,x,null),e(v,y),e(v,B),e(B,st),u(s,Pe,p),u(s,F,p),e(F,We),e(We,be),e(F,rt),e(F,ve),e(ve,ye),e(F,it),u(s,Je,p),u(s,ee,p),e(ee,W),e(W,Qe),_(ie,Qe,null),e(ee,N),e(ee,D),e(D,dt),u(s,he,p),u(s,me,p),e(me,lt),e(me,te),e(te,ct),e(me,pt),u(s,Q,p),u(s,Oe,p),e(Oe,Te),u(s,Ze,p),u(s,de,p),e(de,Me),e(de,we),e(we,ut),e(de,le),e(de,xe),e(xe,ze),u(s,Ye,p),u(s,w,p),e(w,$),e($,Be),_(Xe,Be,null),e(w,Wt),e(w,oe),e(oe,Qt),u(s,gt,p),u(s,Z,p),e(Z,ce),e(Z,pe),e(pe,Xt),e(Z,Kt),e(Z,ue),e(ue,Ht),e(Z,Vt),e(Z,Ke),e(Ke,Jt),e(Z,e_),e(Z,$d),e($d,t_),e(Z,o_),u(s,qh,p),u(s,kt,p),e(kt,n_),e(kt,Kn),e(Kn,Fd),e(Fd,a_),e(Kn,s_),e(kt,r_),e(kt,_i),e(_i,i_),e(kt,d_),u(s,$h,p),u(s,gi,p),e(gi,Ed),e(Ed,l_),u(s,Fh,p),_(Hn,s,p),u(s,Eh,p),u(s,ki,p),e(ki,Vn),e(Vn,jd),e(jd,c_),e(Vn,p_),e(Vn,Zt),e(Zt,u_),e(Zt,Cd),e(Cd,h_),e(Zt,m_),e(Zt,Pd),e(Pd,f_),e(Zt,__),u(s,jh,p),_(Jn,s,p),u(s,Ch,p),u(s,Yt,p),e(Yt,Ao),e(Ao,Od),_(Zn,Od,null),e(Yt,g_),e(Yt,Sd),e(Sd,k_),u(s,Ph,p),u(s,bt,p),e(bt,b_),e(bt,bi),e(bi,v_),e(bi,Yn),e(Yn,y_),e(bt,T_),e(bt,Ad),e(Ad,M_),e(bt,w_),u(s,Oh,p),u(s,vi,p),e(vi,x_),u(s,Sh,p),u(s,yi,p),e(yi,Id),e(Id,z_),u(s,Ah,p),u(s,eo,p),e(eo,Io),e(Io,Nd),_(ea,Nd,null),e(eo,B_),e(eo,Ld),e(Ld,q_),u(s,Ih,p),u(s,et,p),e(et,$_),e(et,Dd),e(Dd,F_),e(et,E_),e(et,Gd),e(Gd,j_),e(et,C_),e(et,Ud),e(Ud,P_),e(et,O_),u(s,Nh,p),u(s,No,p),e(No,S_),e(No,Ti),e(Ti,A_),e(No,I_),u(s,Lh,p),u(s,Mi,p),e(Mi,Rd),e(Rd,N_),u(s,Dh,p),_(ta,s,p),u(s,Gh,p),u(s,wi,p),e(wi,oa),e(oa,Wd),e(Wd,L_),e(oa,D_),e(oa,qe),e(qe,G_),e(qe,Qd),e(Qd,U_),e(qe,R_),e(qe,Xd),e(Xd,W_),e(qe,Q_),e(qe,Kd),e(Kd,X_),e(qe,K_),e(qe,Hd),e(Hd,H_),e(qe,V_),e(qe,Vd),e(Vd,J_),e(qe,Z_),u(s,Uh,p),_(na,s,p),u(s,Rh,p),u(s,to,p),e(to,Lo),e(Lo,Jd),_(aa,Jd,null),e(to,Y_),e(to,Zd),e(Zd,eg),u(s,Wh,p),u(s,$e,p),_(sa,$e,null),e($e,tg),e($e,oo),e(oo,og),e(oo,xi),e(xi,ng),e(oo,ag),e(oo,ra),e(ra,sg),e(oo,rg),e($e,ig),e($e,no),e(no,dg),e(no,zi),e(zi,lg),e(no,cg),e(no,Bi),e(Bi,pg),e(no,ug),e($e,hg),e($e,Yd),e(Yd,mg),e($e,fg),_(ia,$e,null),u(s,Qh,p),u(s,ao,p),e(ao,Do),e(Do,el),_(da,el,null),e(ao,_g),e(ao,tl),e(tl,gg),u(s,Xh,p),u(s,K,p),_(la,K,null),e(K,kg),e(K,ol),e(ol,bg),e(K,vg),e(K,vt),e(vt,qi),e(qi,yg),e(vt,Tg),e(vt,$i),e($i,Mg),e(vt,wg),e(vt,Fi),e(Fi,xg),e(vt,zg),e(K,Bg),e(K,ca),e(ca,qg),e(ca,nl),e(nl,$g),e(ca,Fg),e(K,Eg),e(K,al),e(al,jg),e(K,Cg),_(pa,K,null),e(K,Pg),e(K,Go),_(ua,Go,null),e(Go,Og),e(Go,sl),e(sl,Sg),e(K,Ag),e(K,tt),_(ha,tt,null),e(tt,Ig),e(tt,ma),e(ma,Ng),e(ma,rl),e(rl,Lg),e(ma,Dg),e(tt,Gg),e(tt,fa),e(fa,_a),e(_a,il),e(il,Ug),e(_a,Rg),e(_a,dl),e(dl,Wg),e(fa,Qg),e(fa,ga),e(ga,ll),e(ll,Xg),e(ga,Kg),e(ga,cl),e(cl,Hg),e(tt,Vg),e(tt,pl),e(pl,Jg),u(s,Kh,p),u(s,so,p),e(so,Uo),e(Uo,ul),_(ka,ul,null),e(so,Zg),e(so,hl),e(hl,Yg),u(s,Hh,p),u(s,G,p),_(ba,G,null),e(G,ek),e(G,ro),e(ro,tk),e(ro,ml),e(ml,ok),e(ro,nk),e(ro,va),e(va,ak),e(ro,sk),e(G,rk),e(G,yt),e(yt,Ei),e(Ei,ik),e(yt,dk),e(yt,ji),e(ji,lk),e(yt,ck),e(yt,Ci),e(Ci,pk),e(yt,uk),e(G,hk),e(G,ya),e(ya,mk),e(ya,fl),e(fl,fk),e(ya,_k),e(G,gk),e(G,_l),e(_l,kk),e(G,bk),_(Ta,G,null),e(G,vk),e(G,Se),_(Ma,Se,null),e(Se,yk),e(Se,gl),e(gl,Tk),e(Se,Mk),e(Se,wa),e(wa,wk),e(wa,kl),e(kl,xk),e(wa,zk),e(Se,Bk),e(Se,xa),e(xa,za),e(za,bl),e(bl,qk),e(za,$k),e(za,vl),e(vl,Fk),e(xa,Ek),e(xa,Ba),e(Ba,yl),e(yl,jk),e(Ba,Ck),e(Ba,Tl),e(Tl,Pk),e(Se,Ok),e(Se,Ml),e(Ml,Sk),e(G,Ak),e(G,Ro),_(qa,Ro,null),e(Ro,Ik),e(Ro,wl),e(wl,Nk),e(G,Lk),e(G,Wo),_($a,Wo,null),e(Wo,Dk),e(Wo,xl),e(xl,Gk),u(s,Vh,p),u(s,io,p),e(io,Qo),e(Qo,zl),_(Fa,zl,null),e(io,Uk),e(io,Bl),e(Bl,Rk),u(s,Jh,p),u(s,L,p),_(Ea,L,null),e(L,Wk),e(L,ja),e(ja,Qk),e(ja,Ca),e(Ca,Xk),e(ja,Kk),e(L,Hk),e(L,Pa),e(Pa,Vk),e(Pa,Pi),e(Pi,Jk),e(Pa,Zk),e(L,Yk),e(L,ql),e(ql,eb),e(L,tb),_(Oa,L,null),e(L,ob),e(L,ot),_(Sa,ot,null),e(ot,nb),e(ot,Aa),e(Aa,ab),e(Aa,$l),e($l,sb),e(Aa,rb),e(ot,ib),e(ot,Ia),e(Ia,Na),e(Na,Fl),e(Fl,db),e(Na,lb),e(Na,El),e(El,cb),e(Ia,pb),e(Ia,La),e(La,jl),e(jl,ub),e(La,hb),e(La,Cl),e(Cl,mb),e(ot,fb),e(ot,Pl),e(Pl,_b),e(L,gb),e(L,Xo),_(Da,Xo,null),e(Xo,kb),e(Xo,Ol),e(Ol,bb),e(L,vb),e(L,Ko),_(Ga,Ko,null),e(Ko,yb),e(Ko,Ua),e(Ua,Tb),e(Ua,Sl),e(Sl,Mb),e(Ua,wb),e(L,xb),e(L,Ho),_(Ra,Ho,null),e(Ho,zb),e(Ho,Al),e(Al,Bb),e(L,qb),e(L,Vo),_(Wa,Vo,null),e(Vo,$b),e(Vo,Il),e(Il,Fb),u(s,Zh,p),u(s,lo,p),e(lo,Jo),e(Jo,Nl),_(Qa,Nl,null),e(lo,Eb),e(lo,Ll),e(Ll,jb),u(s,Yh,p),u(s,H,p),_(Xa,H,null),e(H,Cb),e(H,co),e(co,Pb),e(co,Dl),e(Dl,Ob),e(co,Sb),e(co,Ka),e(Ka,Ab),e(co,Ib),e(H,Nb),e(H,Ha),e(Ha,Lb),e(Ha,Oi),e(Oi,Db),e(Ha,Gb),e(H,Ub),e(H,Gl),e(Gl,Rb),e(H,Wb),_(Va,H,null),e(H,Qb),e(H,Ae),_(Ja,Ae,null),e(Ae,Xb),e(Ae,Ul),e(Ul,Kb),e(Ae,Hb),e(Ae,Za),e(Za,Vb),e(Za,Rl),e(Rl,Jb),e(Za,Zb),e(Ae,Yb),e(Ae,Ya),e(Ya,es),e(es,Wl),e(Wl,ev),e(es,tv),e(es,Ql),e(Ql,ov),e(Ya,nv),e(Ya,ts),e(ts,Xl),e(Xl,av),e(ts,sv),e(ts,Kl),e(Kl,rv),e(Ae,iv),e(Ae,Hl),e(Hl,dv),e(H,lv),e(H,Zo),_(os,Zo,null),e(Zo,cv),e(Zo,Vl),e(Vl,pv),e(H,uv),e(H,Yo),_(ns,Yo,null),e(Yo,hv),e(Yo,Jl),e(Jl,mv),u(s,em,p),u(s,po,p),e(po,en),e(en,Zl),_(as,Zl,null),e(po,fv),e(po,Yl),e(Yl,_v),u(s,tm,p),u(s,He,p),_(ss,He,null),e(He,gv),e(He,rs),e(rs,kv),e(rs,Si),e(Si,bv),e(rs,vv),e(He,yv),e(He,is),e(is,Tv),e(is,ds),e(ds,Mv),e(is,wv),e(He,xv),e(He,Ie),_(ls,Ie,null),e(Ie,zv),e(Ie,uo),e(uo,Bv),e(uo,Ai),e(Ai,qv),e(uo,$v),e(uo,ec),e(ec,Fv),e(uo,Ev),e(Ie,jv),_(tn,Ie,null),e(Ie,Cv),e(Ie,tc),e(tc,Pv),e(Ie,Ov),_(cs,Ie,null),u(s,om,p),u(s,ho,p),e(ho,on),e(on,oc),_(ps,oc,null),e(ho,Sv),e(ho,nc),e(nc,Av),u(s,nm,p),u(s,Ve,p),_(us,Ve,null),e(Ve,Iv),e(Ve,hs),e(hs,Nv),e(hs,Ii),e(Ii,Lv),e(hs,Dv),e(Ve,Gv),e(Ve,ms),e(ms,Uv),e(ms,fs),e(fs,Rv),e(ms,Wv),e(Ve,Qv),e(Ve,E),_(_s,E,null),e(E,Xv),e(E,mo),e(mo,Kv),e(mo,Ni),e(Ni,Hv),e(mo,Vv),e(mo,ac),e(ac,Jv),e(mo,Zv),e(E,Yv),_(nn,E,null),e(E,ey),e(E,sc),e(sc,ty),e(E,oy),e(E,rc),e(rc,ic),e(ic,dc),e(dc,lc),e(lc,ny),e(E,ay),e(E,cc),e(cc,pc),e(pc,uc),e(uc,hc),e(hc,sy),e(E,ry),e(E,mc),e(mc,fc),e(fc,_c),e(_c,gc),e(gc,iy),e(E,dy),e(E,kc),e(kc,bc),e(bc,gs),e(gs,an),e(an,sn),e(sn,vc),_(ks,vc,null),e(an,ly),e(an,yc),e(yc,cy),e(gs,py),e(gs,Tc),e(Tc,uy),e(E,hy),e(E,Mc),e(Mc,my),e(E,fy),e(E,wc),e(wc,xc),e(xc,fo),e(fo,zc),e(zc,_y),e(fo,gy),e(fo,rn),e(rn,dn),e(dn,Bc),_(bs,Bc,null),e(rn,ky),e(rn,qc),e(qc,by),e(fo,vy),e(fo,$c),e($c,yy),e(E,Ty),e(E,Fc),e(Fc,Ec),e(Ec,jc),e(jc,Cc),e(Cc,My),e(E,wy),e(E,Pc),e(Pc,Oc),e(Oc,Sc),e(Sc,Ac),e(Ac,xy),e(E,zy),e(E,Ic),e(Ic,Nc),e(Nc,Lc),e(Lc,Dc),e(Dc,By),u(s,am,p),u(s,_o,p),e(_o,ln),e(ln,Gc),_(vs,Gc,null),e(_o,qy),e(_o,Uc),e(Uc,$y),u(s,sm,p),u(s,Fe,p),_(ys,Fe,null),e(Fe,Fy),e(Fe,go),e(go,Ey),e(go,Rc),e(Rc,jy),e(go,Cy),e(go,Wc),e(Wc,Py),e(go,Oy),e(Fe,Sy),e(Fe,Ts),e(Ts,Ay),e(Ts,Li),e(Li,Iy),e(Ts,Ny),e(Fe,Ly),e(Fe,Ms),e(Ms,Dy),e(Ms,ws),e(ws,Gy),e(Ms,Uy),e(Fe,Ry),e(Fe,Ne),_(xs,Ne,null),e(Ne,Wy),e(Ne,ko),e(ko,Qy),e(ko,Di),e(Di,Xy),e(ko,Ky),e(ko,Qc),e(Qc,Hy),e(ko,Vy),e(Ne,Jy),_(cn,Ne,null),e(Ne,Zy),e(Ne,Xc),e(Xc,Yy),e(Ne,eT),_(zs,Ne,null),u(s,rm,p),u(s,bo,p),e(bo,pn),e(pn,Kc),_(Bs,Kc,null),e(bo,tT),e(bo,Hc),e(Hc,oT),u(s,im,p),u(s,Ee,p),_(qs,Ee,null),e(Ee,nT),e(Ee,Vc),e(Vc,aT),e(Ee,sT),e(Ee,$s),e($s,rT),e($s,Gi),e(Gi,iT),e($s,dT),e(Ee,lT),e(Ee,Fs),e(Fs,cT),e(Fs,Es),e(Es,pT),e(Fs,uT),e(Ee,hT),e(Ee,ne),_(js,ne,null),e(ne,mT),e(ne,vo),e(vo,fT),e(vo,Ui),e(Ui,_T),e(vo,gT),e(vo,Jc),e(Jc,kT),e(vo,bT),e(ne,vT),_(un,ne,null),e(ne,yT),e(ne,Zc),e(Zc,TT),e(ne,MT),_(Cs,ne,null),e(ne,wT),e(ne,Yc),e(Yc,xT),e(ne,zT),_(Ps,ne,null),u(s,dm,p),u(s,yo,p),e(yo,hn),e(hn,ep),_(Os,ep,null),e(yo,BT),e(yo,tp),e(tp,qT),u(s,lm,p),u(s,Ss,p),e(Ss,Tt),_(As,Tt,null),e(Tt,$T),e(Tt,op),e(op,FT),e(Tt,ET),_(Is,Tt,null),u(s,cm,p),u(s,To,p),e(To,mn),e(mn,np),_(Ns,np,null),e(To,jT),e(To,ap),e(ap,CT),u(s,pm,p),u(s,je,p),_(Ls,je,null),e(je,PT),e(je,Ds),e(Ds,OT),e(Ds,Ri),e(Ri,ST),e(Ds,AT),e(je,IT),e(je,Gs),e(Gs,NT),e(Gs,Us),e(Us,LT),e(Gs,DT),e(je,GT),_(fn,je,null),e(je,UT),e(je,Le),_(Rs,Le,null),e(Le,RT),e(Le,Mo),e(Mo,WT),e(Mo,Wi),e(Wi,QT),e(Mo,XT),e(Mo,sp),e(sp,KT),e(Mo,HT),e(Le,VT),_(_n,Le,null),e(Le,JT),e(Le,rp),e(rp,ZT),e(Le,YT),_(Ws,Le,null),u(s,um,p),u(s,wo,p),e(wo,gn),e(gn,ip),_(Qs,ip,null),e(wo,e1),e(wo,dp),e(dp,t1),u(s,hm,p),u(s,Ce,p),_(Xs,Ce,null),e(Ce,o1),e(Ce,Ks),e(Ks,n1),e(Ks,Qi),e(Qi,a1),e(Ks,s1),e(Ce,r1),e(Ce,Hs),e(Hs,i1),e(Hs,Vs),e(Vs,d1),e(Hs,l1),e(Ce,c1),_(kn,Ce,null),e(Ce,p1),e(Ce,O),_(Js,O,null),e(O,u1),e(O,xo),e(xo,h1),e(xo,Xi),e(Xi,m1),e(xo,f1),e(xo,lp),e(lp,_1),e(xo,g1),e(O,k1),_(bn,O,null),e(O,b1),e(O,cp),e(cp,v1),e(O,y1),e(O,pp),e(pp,up),e(up,hp),e(hp,mp),e(mp,T1),e(O,M1),e(O,fp),e(fp,_p),e(_p,gp),e(gp,kp),e(kp,w1),e(O,x1),e(O,bp),e(bp,vp),e(vp,yp),e(yp,Tp),e(Tp,z1),e(O,B1),e(O,Mp),e(Mp,wp),e(wp,Zs),e(Zs,vn),e(vn,yn),e(yn,xp),_(Ys,xp,null),e(vn,q1),e(vn,zp),e(zp,$1),e(Zs,F1),e(Zs,Bp),e(Bp,E1),e(O,j1),e(O,qp),e(qp,C1),e(O,P1),e(O,$p),e($p,Fp),e(Fp,zo),e(zo,Ep),e(Ep,O1),e(zo,S1),e(zo,Tn),e(Tn,Mn),e(Mn,jp),_(er,jp,null),e(Tn,A1),e(Tn,Cp),e(Cp,I1),e(zo,N1),e(zo,Pp),e(Pp,L1),e(O,D1),e(O,Op),e(Op,Sp),e(Sp,tr),e(tr,Ap),e(Ap,G1),e(tr,U1),e(tr,wn),e(wn,xn),e(xn,Ip),_(or,Ip,null),e(wn,R1),e(wn,Np),e(Np,W1),u(s,mm,p),u(s,Bo,p),e(Bo,zn),e(zn,Lp),_(nr,Lp,null),e(Bo,Q1),e(Bo,Dp),e(Dp,X1),u(s,fm,p),u(s,V,p),_(ar,V,null),e(V,K1),e(V,sr),e(sr,H1),e(sr,Ki),e(Ki,V1),e(sr,J1),e(V,Z1),e(V,rr),e(rr,Y1),e(rr,ir),e(ir,eM),e(rr,tM),e(V,oM),e(V,Gp),e(Gp,nM),e(V,aM),e(V,ht),e(ht,Up),e(Up,dr),e(dr,sM),e(ht,rM),e(ht,Rp),e(Rp,lr),e(lr,iM),e(ht,dM),e(ht,Wp),e(Wp,cr),e(cr,lM),e(ht,cM),e(ht,Qp),e(Qp,pr),e(pr,pM),e(V,uM),e(V,De),_(ur,De,null),e(De,hM),e(De,qo),e(qo,mM),e(qo,Xp),e(Xp,fM),e(qo,_M),e(qo,Kp),e(Kp,gM),e(qo,kM),e(De,bM),_(Bn,De,null),e(De,vM),e(De,Hp),e(Hp,yM),e(De,TM),_(hr,De,null),e(V,MM),e(V,Mt),_(mr,Mt,null),e(Mt,wM),e(Mt,Vp),e(Vp,xM),e(Mt,zM),_(fr,Mt,null),e(V,BM),e(V,wt),_(_r,wt,null),e(wt,qM),e(wt,Jp),e(Jp,$M),e(wt,FM),_(gr,wt,null),u(s,_m,p),u(s,$o,p),e($o,qn),e(qn,Zp),_(kr,Zp,null),e($o,EM),e($o,Yp),e(Yp,jM),u(s,gm,p),u(s,J,p),_(br,J,null),e(J,CM),e(J,vr),e(vr,PM),e(vr,Hi),e(Hi,OM),e(vr,SM),e(J,AM),e(J,yr),e(yr,IM),e(yr,Tr),e(Tr,NM),e(yr,LM),e(J,DM),e(J,eu),e(eu,GM),e(J,UM),e(J,mt),e(mt,tu),e(tu,Mr),e(Mr,RM),e(mt,WM),e(mt,ou),e(ou,wr),e(wr,QM),e(mt,XM),e(mt,nu),e(nu,xr),e(xr,KM),e(mt,HM),e(mt,au),e(au,zr),e(zr,VM),e(J,JM),e(J,j),_(Br,j,null),e(j,ZM),e(j,Fo),e(Fo,YM),e(Fo,su),e(su,e0),e(Fo,t0),e(Fo,ru),e(ru,o0),e(Fo,n0),e(j,a0),_($n,j,null),e(j,s0),e(j,iu),e(iu,r0),e(j,i0),e(j,du),e(du,lu),e(lu,cu),e(cu,pu),e(pu,d0),e(j,l0),e(j,uu),e(uu,hu),e(hu,mu),e(mu,fu),e(fu,c0),e(j,p0),e(j,_u),e(_u,gu),e(gu,ku),e(ku,bu),e(bu,u0),e(j,h0),e(j,vu),e(vu,yu),e(yu,qr),e(qr,Fn),e(Fn,En),e(En,Tu),_($r,Tu,null),e(Fn,m0),e(Fn,Mu),e(Mu,f0),e(qr,_0),e(qr,wu),e(wu,g0),e(j,k0),e(j,xu),e(xu,b0),e(j,v0),e(j,zu),e(zu,Bu),e(Bu,Eo),e(Eo,qu),e(qu,y0),e(Eo,T0),e(Eo,jn),e(jn,Cn),e(Cn,$u),_(Fr,$u,null),e(jn,M0),e(jn,Fu),e(Fu,w0),e(Eo,x0),e(Eo,Eu),e(Eu,z0),e(j,B0),e(j,ju),e(ju,Cu),e(Cu,Pu),e(Pu,Ou),e(Ou,q0),e(j,$0),e(j,Su),e(Su,Au),e(Au,Iu),e(Iu,Nu),e(Nu,F0),e(j,E0),e(j,Lu),e(Lu,Du),e(Du,Gu),e(Gu,Uu),e(Uu,j0),e(J,C0),e(J,xt),_(Er,xt,null),e(xt,P0),e(xt,Ru),e(Ru,O0),e(xt,S0),_(jr,xt,null),e(J,A0),e(J,zt),_(Cr,zt,null),e(zt,I0),e(zt,Wu),e(Wu,N0),e(zt,L0),_(Pr,zt,null),u(s,km,p),u(s,jo,p),e(jo,Pn),e(Pn,Qu),_(Or,Qu,null),e(jo,D0),e(jo,Xu),e(Xu,G0),u(s,bm,p),u(s,U,p),_(Sr,U,null),e(U,U0),e(U,Ku),e(Ku,R0),e(U,W0),e(U,Ar),e(Ar,Q0),e(Ar,Vi),e(Vi,X0),e(Ar,K0),e(U,H0),e(U,Ir),e(Ir,V0),e(Ir,Nr),e(Nr,J0),e(Ir,Z0),e(U,Y0),e(U,Hu),e(Hu,ew),e(U,tw),e(U,ft),e(ft,Vu),e(Vu,Lr),e(Lr,ow),e(ft,nw),e(ft,Ju),e(Ju,Dr),e(Dr,aw),e(ft,sw),e(ft,Zu),e(Zu,Gr),e(Gr,rw),e(ft,iw),e(ft,Yu),e(Yu,Ur),e(Ur,dw),e(U,lw),e(U,Ge),_(Rr,Ge,null),e(Ge,cw),e(Ge,Co),e(Co,pw),e(Co,eh),e(eh,uw),e(Co,hw),e(Co,th),e(th,mw),e(Co,fw),e(Ge,_w),_(On,Ge,null),e(Ge,gw),e(Ge,oh),e(oh,kw),e(Ge,bw),_(Wr,Ge,null),e(U,vw),e(U,Bt),_(Qr,Bt,null),e(Bt,yw),e(Bt,nh),e(nh,Tw),e(Bt,Mw),_(Xr,Bt,null),e(U,ww),e(U,qt),_(Kr,qt,null),e(qt,xw),e(qt,ah),e(ah,zw),e(qt,Bw),_(Hr,qt,null),u(s,vm,p),u(s,Po,p),e(Po,Sn),e(Sn,sh),_(Vr,sh,null),e(Po,qw),e(Po,rh),e(rh,$w),u(s,ym,p),u(s,R,p),_(Jr,R,null),e(R,Fw),e(R,Oo),e(Oo,Ew),e(Oo,ih),e(ih,jw),e(Oo,Cw),e(Oo,dh),e(dh,Pw),e(Oo,Ow),e(R,Sw),e(R,Zr),e(Zr,Aw),e(Zr,Ji),e(Ji,Iw),e(Zr,Nw),e(R,Lw),e(R,Yr),e(Yr,Dw),e(Yr,ei),e(ei,Gw),e(Yr,Uw),e(R,Rw),e(R,lh),e(lh,Ww),e(R,Qw),e(R,_t),e(_t,ch),e(ch,ti),e(ti,Xw),e(_t,Kw),e(_t,ph),e(ph,oi),e(oi,Hw),e(_t,Vw),e(_t,uh),e(uh,ni),e(ni,Jw),e(_t,Zw),e(_t,hh),e(hh,ai),e(ai,Yw),e(R,ex),e(R,Ue),_(si,Ue,null),e(Ue,tx),e(Ue,So),e(So,ox),e(So,mh),e(mh,nx),e(So,ax),e(So,fh),e(fh,sx),e(So,rx),e(Ue,ix),_(An,Ue,null),e(Ue,dx),e(Ue,_h),e(_h,lx),e(Ue,cx),_(ri,Ue,null),e(R,px),e(R,$t),_(ii,$t,null),e($t,ux),e($t,gh),e(gh,hx),e($t,mx),_(di,$t,null),e(R,fx),e(R,Ft),_(li,Ft,null),e(Ft,_x),e(Ft,kh),e(kh,gx),e(Ft,kx),_(ci,Ft,null),Tm=!0},p(s,[p]){const pi={};p&2&&(pi.$$scope={dirty:p,ctx:s}),tn.$set(pi);const bh={};p&2&&(bh.$$scope={dirty:p,ctx:s}),nn.$set(bh);const vh={};p&2&&(vh.$$scope={dirty:p,ctx:s}),cn.$set(vh);const yh={};p&2&&(yh.$$scope={dirty:p,ctx:s}),un.$set(yh);const In={};p&2&&(In.$$scope={dirty:p,ctx:s}),fn.$set(In);const Th={};p&2&&(Th.$$scope={dirty:p,ctx:s}),_n.$set(Th);const Mh={};p&2&&(Mh.$$scope={dirty:p,ctx:s}),kn.$set(Mh);const ui={};p&2&&(ui.$$scope={dirty:p,ctx:s}),bn.$set(ui);const wh={};p&2&&(wh.$$scope={dirty:p,ctx:s}),Bn.$set(wh);const xh={};p&2&&(xh.$$scope={dirty:p,ctx:s}),$n.$set(xh);const zh={};p&2&&(zh.$$scope={dirty:p,ctx:s}),On.$set(zh);const hi={};p&2&&(hi.$$scope={dirty:p,ctx:s}),An.$set(hi)},i(s){Tm||(g(T.$$.fragment,s),g(ie.$$.fragment,s),g(Xe.$$.fragment,s),g(Hn.$$.fragment,s),g(Jn.$$.fragment,s),g(Zn.$$.fragment,s),g(ea.$$.fragment,s),g(ta.$$.fragment,s),g(na.$$.fragment,s),g(aa.$$.fragment,s),g(sa.$$.fragment,s),g(ia.$$.fragment,s),g(da.$$.fragment,s),g(la.$$.fragment,s),g(pa.$$.fragment,s),g(ua.$$.fragment,s),g(ha.$$.fragment,s),g(ka.$$.fragment,s),g(ba.$$.fragment,s),g(Ta.$$.fragment,s),g(Ma.$$.fragment,s),g(qa.$$.fragment,s),g($a.$$.fragment,s),g(Fa.$$.fragment,s),g(Ea.$$.fragment,s),g(Oa.$$.fragment,s),g(Sa.$$.fragment,s),g(Da.$$.fragment,s),g(Ga.$$.fragment,s),g(Ra.$$.fragment,s),g(Wa.$$.fragment,s),g(Qa.$$.fragment,s),g(Xa.$$.fragment,s),g(Va.$$.fragment,s),g(Ja.$$.fragment,s),g(os.$$.fragment,s),g(ns.$$.fragment,s),g(as.$$.fragment,s),g(ss.$$.fragment,s),g(ls.$$.fragment,s),g(tn.$$.fragment,s),g(cs.$$.fragment,s),g(ps.$$.fragment,s),g(us.$$.fragment,s),g(_s.$$.fragment,s),g(nn.$$.fragment,s),g(ks.$$.fragment,s),g(bs.$$.fragment,s),g(vs.$$.fragment,s),g(ys.$$.fragment,s),g(xs.$$.fragment,s),g(cn.$$.fragment,s),g(zs.$$.fragment,s),g(Bs.$$.fragment,s),g(qs.$$.fragment,s),g(js.$$.fragment,s),g(un.$$.fragment,s),g(Cs.$$.fragment,s),g(Ps.$$.fragment,s),g(Os.$$.fragment,s),g(As.$$.fragment,s),g(Is.$$.fragment,s),g(Ns.$$.fragment,s),g(Ls.$$.fragment,s),g(fn.$$.fragment,s),g(Rs.$$.fragment,s),g(_n.$$.fragment,s),g(Ws.$$.fragment,s),g(Qs.$$.fragment,s),g(Xs.$$.fragment,s),g(kn.$$.fragment,s),g(Js.$$.fragment,s),g(bn.$$.fragment,s),g(Ys.$$.fragment,s),g(er.$$.fragment,s),g(or.$$.fragment,s),g(nr.$$.fragment,s),g(ar.$$.fragment,s),g(ur.$$.fragment,s),g(Bn.$$.fragment,s),g(hr.$$.fragment,s),g(mr.$$.fragment,s),g(fr.$$.fragment,s),g(_r.$$.fragment,s),g(gr.$$.fragment,s),g(kr.$$.fragment,s),g(br.$$.fragment,s),g(Br.$$.fragment,s),g($n.$$.fragment,s),g($r.$$.fragment,s),g(Fr.$$.fragment,s),g(Er.$$.fragment,s),g(jr.$$.fragment,s),g(Cr.$$.fragment,s),g(Pr.$$.fragment,s),g(Or.$$.fragment,s),g(Sr.$$.fragment,s),g(Rr.$$.fragment,s),g(On.$$.fragment,s),g(Wr.$$.fragment,s),g(Qr.$$.fragment,s),g(Xr.$$.fragment,s),g(Kr.$$.fragment,s),g(Hr.$$.fragment,s),g(Vr.$$.fragment,s),g(Jr.$$.fragment,s),g(si.$$.fragment,s),g(An.$$.fragment,s),g(ri.$$.fragment,s),g(ii.$$.fragment,s),g(di.$$.fragment,s),g(li.$$.fragment,s),g(ci.$$.fragment,s),Tm=!0)},o(s){k(T.$$.fragment,s),k(ie.$$.fragment,s),k(Xe.$$.fragment,s),k(Hn.$$.fragment,s),k(Jn.$$.fragment,s),k(Zn.$$.fragment,s),k(ea.$$.fragment,s),k(ta.$$.fragment,s),k(na.$$.fragment,s),k(aa.$$.fragment,s),k(sa.$$.fragment,s),k(ia.$$.fragment,s),k(da.$$.fragment,s),k(la.$$.fragment,s),k(pa.$$.fragment,s),k(ua.$$.fragment,s),k(ha.$$.fragment,s),k(ka.$$.fragment,s),k(ba.$$.fragment,s),k(Ta.$$.fragment,s),k(Ma.$$.fragment,s),k(qa.$$.fragment,s),k($a.$$.fragment,s),k(Fa.$$.fragment,s),k(Ea.$$.fragment,s),k(Oa.$$.fragment,s),k(Sa.$$.fragment,s),k(Da.$$.fragment,s),k(Ga.$$.fragment,s),k(Ra.$$.fragment,s),k(Wa.$$.fragment,s),k(Qa.$$.fragment,s),k(Xa.$$.fragment,s),k(Va.$$.fragment,s),k(Ja.$$.fragment,s),k(os.$$.fragment,s),k(ns.$$.fragment,s),k(as.$$.fragment,s),k(ss.$$.fragment,s),k(ls.$$.fragment,s),k(tn.$$.fragment,s),k(cs.$$.fragment,s),k(ps.$$.fragment,s),k(us.$$.fragment,s),k(_s.$$.fragment,s),k(nn.$$.fragment,s),k(ks.$$.fragment,s),k(bs.$$.fragment,s),k(vs.$$.fragment,s),k(ys.$$.fragment,s),k(xs.$$.fragment,s),k(cn.$$.fragment,s),k(zs.$$.fragment,s),k(Bs.$$.fragment,s),k(qs.$$.fragment,s),k(js.$$.fragment,s),k(un.$$.fragment,s),k(Cs.$$.fragment,s),k(Ps.$$.fragment,s),k(Os.$$.fragment,s),k(As.$$.fragment,s),k(Is.$$.fragment,s),k(Ns.$$.fragment,s),k(Ls.$$.fragment,s),k(fn.$$.fragment,s),k(Rs.$$.fragment,s),k(_n.$$.fragment,s),k(Ws.$$.fragment,s),k(Qs.$$.fragment,s),k(Xs.$$.fragment,s),k(kn.$$.fragment,s),k(Js.$$.fragment,s),k(bn.$$.fragment,s),k(Ys.$$.fragment,s),k(er.$$.fragment,s),k(or.$$.fragment,s),k(nr.$$.fragment,s),k(ar.$$.fragment,s),k(ur.$$.fragment,s),k(Bn.$$.fragment,s),k(hr.$$.fragment,s),k(mr.$$.fragment,s),k(fr.$$.fragment,s),k(_r.$$.fragment,s),k(gr.$$.fragment,s),k(kr.$$.fragment,s),k(br.$$.fragment,s),k(Br.$$.fragment,s),k($n.$$.fragment,s),k($r.$$.fragment,s),k(Fr.$$.fragment,s),k(Er.$$.fragment,s),k(jr.$$.fragment,s),k(Cr.$$.fragment,s),k(Pr.$$.fragment,s),k(Or.$$.fragment,s),k(Sr.$$.fragment,s),k(Rr.$$.fragment,s),k(On.$$.fragment,s),k(Wr.$$.fragment,s),k(Qr.$$.fragment,s),k(Xr.$$.fragment,s),k(Kr.$$.fragment,s),k(Hr.$$.fragment,s),k(Vr.$$.fragment,s),k(Jr.$$.fragment,s),k(si.$$.fragment,s),k(An.$$.fragment,s),k(ri.$$.fragment,s),k(ii.$$.fragment,s),k(di.$$.fragment,s),k(li.$$.fragment,s),k(ci.$$.fragment,s),Tm=!1},d(s){t(h),s&&t(z),s&&t(v),b(T),s&&t(Pe),s&&t(F),s&&t(Je),s&&t(ee),b(ie),s&&t(he),s&&t(me),s&&t(Q),s&&t(Oe),s&&t(Ze),s&&t(de),s&&t(Ye),s&&t(w),b(Xe),s&&t(gt),s&&t(Z),s&&t(qh),s&&t(kt),s&&t($h),s&&t(gi),s&&t(Fh),b(Hn,s),s&&t(Eh),s&&t(ki),s&&t(jh),b(Jn,s),s&&t(Ch),s&&t(Yt),b(Zn),s&&t(Ph),s&&t(bt),s&&t(Oh),s&&t(vi),s&&t(Sh),s&&t(yi),s&&t(Ah),s&&t(eo),b(ea),s&&t(Ih),s&&t(et),s&&t(Nh),s&&t(No),s&&t(Lh),s&&t(Mi),s&&t(Dh),b(ta,s),s&&t(Gh),s&&t(wi),s&&t(Uh),b(na,s),s&&t(Rh),s&&t(to),b(aa),s&&t(Wh),s&&t($e),b(sa),b(ia),s&&t(Qh),s&&t(ao),b(da),s&&t(Xh),s&&t(K),b(la),b(pa),b(ua),b(ha),s&&t(Kh),s&&t(so),b(ka),s&&t(Hh),s&&t(G),b(ba),b(Ta),b(Ma),b(qa),b($a),s&&t(Vh),s&&t(io),b(Fa),s&&t(Jh),s&&t(L),b(Ea),b(Oa),b(Sa),b(Da),b(Ga),b(Ra),b(Wa),s&&t(Zh),s&&t(lo),b(Qa),s&&t(Yh),s&&t(H),b(Xa),b(Va),b(Ja),b(os),b(ns),s&&t(em),s&&t(po),b(as),s&&t(tm),s&&t(He),b(ss),b(ls),b(tn),b(cs),s&&t(om),s&&t(ho),b(ps),s&&t(nm),s&&t(Ve),b(us),b(_s),b(nn),b(ks),b(bs),s&&t(am),s&&t(_o),b(vs),s&&t(sm),s&&t(Fe),b(ys),b(xs),b(cn),b(zs),s&&t(rm),s&&t(bo),b(Bs),s&&t(im),s&&t(Ee),b(qs),b(js),b(un),b(Cs),b(Ps),s&&t(dm),s&&t(yo),b(Os),s&&t(lm),s&&t(Ss),b(As),b(Is),s&&t(cm),s&&t(To),b(Ns),s&&t(pm),s&&t(je),b(Ls),b(fn),b(Rs),b(_n),b(Ws),s&&t(um),s&&t(wo),b(Qs),s&&t(hm),s&&t(Ce),b(Xs),b(kn),b(Js),b(bn),b(Ys),b(er),b(or),s&&t(mm),s&&t(Bo),b(nr),s&&t(fm),s&&t(V),b(ar),b(ur),b(Bn),b(hr),b(mr),b(fr),b(_r),b(gr),s&&t(_m),s&&t($o),b(kr),s&&t(gm),s&&t(J),b(br),b(Br),b($n),b($r),b(Fr),b(Er),b(jr),b(Cr),b(Pr),s&&t(km),s&&t(jo),b(Or),s&&t(bm),s&&t(U),b(Sr),b(Rr),b(On),b(Wr),b(Qr),b(Xr),b(Kr),b(Hr),s&&t(vm),s&&t(Po),b(Vr),s&&t(ym),s&&t(R),b(Jr),b(si),b(An),b(ri),b(ii),b(di),b(li),b(ci)}}}const T$={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function M$(P,h,z){let{fw:v}=h;return P.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class F$ extends s${constructor(h){super();r$(this,h,M$,y$,i$,{fw:0})}}export{F$ as default,T$ as metadata};
