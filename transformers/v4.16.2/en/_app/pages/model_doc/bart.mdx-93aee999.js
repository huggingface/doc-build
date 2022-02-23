import{S as Fy,i as By,s as qy,e as n,k as d,w as m,t as r,M as $y,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as b,B as v}from"../../chunks/vendor-ab4e3193.js";import{T as Ue}from"../../chunks/Tip-b5c6375a.js";import{D as q}from"../../chunks/Docstring-91f1beab.js";import{C as E}from"../../chunks/CodeBlock-516df0c5.js";import{I as U}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function jy(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function My(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Py(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Ey(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Cy(M){let p,F,k,w,z,T,y,B,He,ke,$,Ce,le,Qe,ce,pe,Ve,We,G,I,Ae,Y,P,C,Je,ae,se,Xe,W,Ke,Ze,N,ye,he,Re,H,ee,Ye,et,R,tt,ue,Se;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),k=d(),w=n("ul"),z=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),He=r("having all inputs as a list, tuple or dict in the first positional arguments."),ke=d(),$=n("p"),Ce=r("This second option is useful when using "),le=n("code"),Qe=r("tf.keras.Model.fit"),ce=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=n("code"),Ve=r("model(inputs)"),We=r("."),G=d(),I=n("p"),Ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=d(),P=n("ul"),C=n("li"),Je=r("a single Tensor with "),ae=n("code"),se=r("input_ids"),Xe=r(" only and nothing else: "),W=n("code"),Ke=r("model(input_ids)"),Ze=d(),N=n("li"),ye=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=n("code"),Re=r("model([input_ids, attention_mask])"),H=r(" or "),ee=n("code"),Ye=r("model([input_ids, attention_mask, token_type_ids])"),et=d(),R=n("li"),tt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ue=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var j=s(p);F=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),k=l(x),w=a(x,"UL",{});var L=s(w);z=a(L,"LI",{});var At=s(z);T=i(At,"having all inputs as keyword arguments (like PyTorch models), or"),At.forEach(t),y=l(L),B=a(L,"LI",{});var Ie=s(B);He=i(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),L.forEach(t),ke=l(x),$=a(x,"P",{});var te=s($);Ce=i(te,"This second option is useful when using "),le=a(te,"CODE",{});var St=s(le);Qe=i(St,"tf.keras.Model.fit"),St.forEach(t),ce=i(te,` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=a(te,"CODE",{});var Ne=s(pe);Ve=i(Ne,"model(inputs)"),Ne.forEach(t),We=i(te,"."),te.forEach(t),G=l(x),I=a(x,"P",{});var It=s(I);Ae=i(It,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),It.forEach(t),Y=l(x),P=a(x,"UL",{});var oe=s(P);C=a(oe,"LI",{});var re=s(C);Je=i(re,"a single Tensor with "),ae=a(re,"CODE",{});var me=s(ae);se=i(me,"input_ids"),me.forEach(t),Xe=i(re," only and nothing else: "),W=a(re,"CODE",{});var Te=s(W);Ke=i(Te,"model(input_ids)"),Te.forEach(t),re.forEach(t),Ze=l(oe),N=a(oe,"LI",{});var ne=s(N);ye=i(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=a(ne,"CODE",{});var Oe=s(he);Re=i(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),H=i(ne," or "),ee=a(ne,"CODE",{});var Nt=s(ee);Ye=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),ne.forEach(t),et=l(oe),R=a(oe,"LI",{});var De=s(R);tt=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ue=a(De,"CODE",{});var Ot=s(ue);Se=i(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),De.forEach(t),oe.forEach(t)},m(x,j){u(x,p,j),e(p,F),u(x,k,j),u(x,w,j),e(w,z),e(z,T),e(w,y),e(w,B),e(B,He),u(x,ke,j),u(x,$,j),e($,Ce),e($,le),e(le,Qe),e($,ce),e($,pe),e(pe,Ve),e($,We),u(x,G,j),u(x,I,j),e(I,Ae),u(x,Y,j),u(x,P,j),e(P,C),e(C,Je),e(C,ae),e(ae,se),e(C,Xe),e(C,W),e(W,Ke),e(P,Ze),e(P,N),e(N,ye),e(N,he),e(he,Re),e(N,H),e(N,ee),e(ee,Ye),e(P,et),e(P,R),e(R,tt),e(R,ue),e(ue,Se)},d(x){x&&t(p),x&&t(k),x&&t(w),x&&t(ke),x&&t($),x&&t(G),x&&t(I),x&&t(Y),x&&t(P)}}}function Ay(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Sy(M){let p,F,k,w,z,T,y,B,He,ke,$,Ce,le,Qe,ce,pe,Ve,We,G,I,Ae,Y,P,C,Je,ae,se,Xe,W,Ke,Ze,N,ye,he,Re,H,ee,Ye,et,R,tt,ue,Se;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),k=d(),w=n("ul"),z=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),He=r("having all inputs as a list, tuple or dict in the first positional arguments."),ke=d(),$=n("p"),Ce=r("This second option is useful when using "),le=n("code"),Qe=r("tf.keras.Model.fit"),ce=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=n("code"),Ve=r("model(inputs)"),We=r("."),G=d(),I=n("p"),Ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=d(),P=n("ul"),C=n("li"),Je=r("a single Tensor with "),ae=n("code"),se=r("input_ids"),Xe=r(" only and nothing else: "),W=n("code"),Ke=r("model(input_ids)"),Ze=d(),N=n("li"),ye=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=n("code"),Re=r("model([input_ids, attention_mask])"),H=r(" or "),ee=n("code"),Ye=r("model([input_ids, attention_mask, token_type_ids])"),et=d(),R=n("li"),tt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ue=n("code"),Se=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(x){p=a(x,"P",{});var j=s(p);F=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),k=l(x),w=a(x,"UL",{});var L=s(w);z=a(L,"LI",{});var At=s(z);T=i(At,"having all inputs as keyword arguments (like PyTorch models), or"),At.forEach(t),y=l(L),B=a(L,"LI",{});var Ie=s(B);He=i(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),L.forEach(t),ke=l(x),$=a(x,"P",{});var te=s($);Ce=i(te,"This second option is useful when using "),le=a(te,"CODE",{});var St=s(le);Qe=i(St,"tf.keras.Model.fit"),St.forEach(t),ce=i(te,` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=a(te,"CODE",{});var Ne=s(pe);Ve=i(Ne,"model(inputs)"),Ne.forEach(t),We=i(te,"."),te.forEach(t),G=l(x),I=a(x,"P",{});var It=s(I);Ae=i(It,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),It.forEach(t),Y=l(x),P=a(x,"UL",{});var oe=s(P);C=a(oe,"LI",{});var re=s(C);Je=i(re,"a single Tensor with "),ae=a(re,"CODE",{});var me=s(ae);se=i(me,"input_ids"),me.forEach(t),Xe=i(re," only and nothing else: "),W=a(re,"CODE",{});var Te=s(W);Ke=i(Te,"model(input_ids)"),Te.forEach(t),re.forEach(t),Ze=l(oe),N=a(oe,"LI",{});var ne=s(N);ye=i(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),he=a(ne,"CODE",{});var Oe=s(he);Re=i(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),H=i(ne," or "),ee=a(ne,"CODE",{});var Nt=s(ee);Ye=i(Nt,"model([input_ids, attention_mask, token_type_ids])"),Nt.forEach(t),ne.forEach(t),et=l(oe),R=a(oe,"LI",{});var De=s(R);tt=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ue=a(De,"CODE",{});var Ot=s(ue);Se=i(Ot,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ot.forEach(t),De.forEach(t),oe.forEach(t)},m(x,j){u(x,p,j),e(p,F),u(x,k,j),u(x,w,j),e(w,z),e(z,T),e(w,y),e(w,B),e(B,He),u(x,ke,j),u(x,$,j),e($,Ce),e($,le),e(le,Qe),e($,ce),e($,pe),e(pe,Ve),e($,We),u(x,G,j),u(x,I,j),e(I,Ae),u(x,Y,j),u(x,P,j),e(P,C),e(C,Je),e(C,ae),e(ae,se),e(C,Xe),e(C,W),e(W,Ke),e(P,Ze),e(P,N),e(N,ye),e(N,he),e(he,Re),e(N,H),e(N,ee),e(ee,Ye),e(P,et),e(P,R),e(R,tt),e(R,ue),e(ue,Se)},d(x){x&&t(p),x&&t(k),x&&t(w),x&&t(ke),x&&t($),x&&t(G),x&&t(I),x&&t(Y),x&&t(P)}}}function Iy(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Ny(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Oy(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Dy(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Ly(M){let p,F,k,w,z;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=a(y,"CODE",{});var B=s(k);w=i(B,"Module"),B.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,k),e(k,w),e(p,z)},d(T){T&&t(p)}}}function Gy(M){let p,F,k,w,z,T,y,B,He,ke,$,Ce,le,Qe,ce,pe,Ve,We,G,I,Ae,Y,P,C,Je,ae,se,Xe,W,Ke,Ze,N,ye,he,Re,H,ee,Ye,et,R,tt,ue,Se,x,j,L,At,Ie,te,St,Ne,It,oe,re,me,Te,ne,Oe,Nt,De,Ot,Hd,ct,an,hc,sn,uc,mc,fc,ot,_c,$s,gc,bc,Nr,vc,kc,rn,yc,Tc,wc,ko,dn,xc,zc,ln,Fc,Bc,Qd,Dt,yo,Or,cn,qc,Dr,$c,Vd,we,nt,jc,Lr,Mc,Pc,js,Ec,Cc,Ms,Ac,Sc,Ic,Lt,Nc,Ps,Oc,Dc,Gr,Lc,Gc,Wc,Gt,Rc,Wr,Uc,Hc,Rr,Qc,Vc,Jc,Es,Cs,Xc,Kc,Zc,Wt,Yc,Ur,ep,tp,Hr,op,np,Jd,Rt,To,Qr,pn,ap,Vr,sp,Xd,pt,rp,Jr,ip,dp,Xr,lp,cp,Kd,hn,Zd,Ut,wo,Kr,un,pp,Zr,hp,Yd,fe,mn,up,Ht,mp,As,fp,_p,fn,gp,bp,vp,Qt,kp,Ss,yp,Tp,Is,wp,xp,zp,Yr,Fp,Bp,_n,el,Vt,xo,ei,gn,qp,ti,$p,tl,at,bn,jp,oi,Mp,Pp,ht,Ns,Ep,Cp,Os,Ap,Sp,Ds,Ip,Np,ol,Jt,zo,ni,vn,Op,ai,Dp,nl,st,kn,Lp,yn,Gp,si,Wp,Rp,Up,ut,Ls,Hp,Qp,Gs,Vp,Jp,Ws,Xp,Kp,al,Xt,Fo,ri,Tn,Zp,ii,Yp,sl,Le,wn,eh,xn,th,Rs,oh,nh,ah,zn,sh,Fn,rh,ih,dh,xe,Bn,lh,Kt,ch,Us,ph,hh,di,uh,mh,fh,Bo,_h,li,gh,bh,qn,rl,Zt,qo,ci,$n,vh,pi,kh,il,Ge,jn,yh,Mn,Th,Hs,wh,xh,zh,Pn,Fh,En,Bh,qh,$h,Q,Cn,jh,Yt,Mh,Qs,Ph,Eh,hi,Ch,Ah,Sh,$o,Ih,ui,Nh,Oh,An,Dh,mi,Lh,Gh,Sn,dl,eo,jo,fi,In,Wh,_i,Rh,ll,_e,Nn,Uh,gi,Hh,Qh,On,Vh,Vs,Jh,Xh,Kh,Dn,Zh,Ln,Yh,eu,tu,V,Gn,ou,to,nu,Js,au,su,bi,ru,iu,du,Mo,lu,vi,cu,pu,Wn,hu,ki,uu,mu,Rn,cl,oo,Po,yi,Un,fu,Ti,_u,pl,ge,Hn,gu,no,bu,wi,vu,ku,xi,yu,Tu,wu,Qn,xu,Xs,zu,Fu,Bu,Vn,qu,Jn,$u,ju,Mu,ze,Xn,Pu,ao,Eu,Ks,Cu,Au,zi,Su,Iu,Nu,Eo,Ou,Fi,Du,Lu,Kn,hl,so,Co,Bi,Zn,Gu,qi,Wu,ul,Yn,mt,ea,Ru,$i,Uu,Hu,ta,ml,ro,Ao,ji,oa,Qu,Mi,Vu,fl,be,na,Ju,aa,Xu,Zs,Ku,Zu,Yu,sa,em,ra,tm,om,nm,So,am,Fe,ia,sm,io,rm,Ys,im,dm,Pi,lm,cm,pm,Io,hm,Ei,um,mm,da,_l,lo,No,Ci,la,fm,Ai,_m,gl,ve,ca,gm,pa,bm,er,vm,km,ym,ha,Tm,ua,wm,xm,zm,Oo,Fm,J,ma,Bm,co,qm,tr,$m,jm,Si,Mm,Pm,Em,Do,Cm,Ii,Am,Sm,fa,Im,Ni,Nm,Om,_a,bl,po,Lo,Oi,ga,Dm,Di,Lm,vl,O,ba,Gm,va,Wm,or,Rm,Um,Hm,ka,Qm,ya,Vm,Jm,Xm,Li,Km,Zm,rt,Gi,Ta,Ym,ef,Wi,wa,tf,of,Ri,xa,nf,af,Ui,za,sf,rf,Be,Fa,df,ho,lf,Hi,cf,pf,Qi,hf,uf,mf,Go,ff,Vi,_f,gf,Ba,bf,ft,qa,vf,Ji,kf,yf,$a,Tf,_t,ja,wf,Xi,xf,zf,Ma,kl,uo,Wo,Ki,Pa,Ff,Zi,Bf,yl,D,Ea,qf,Ca,$f,nr,jf,Mf,Pf,Aa,Ef,Sa,Cf,Af,Sf,Yi,If,Nf,it,ed,Ia,Of,Df,td,Na,Lf,Gf,od,Oa,Wf,Rf,nd,Da,Uf,Hf,X,La,Qf,mo,Vf,ad,Jf,Xf,sd,Kf,Zf,Yf,Ro,e_,rd,t_,o_,Ga,n_,id,a_,s_,Wa,r_,gt,Ra,i_,dd,d_,l_,Ua,c_,bt,Ha,p_,ld,h_,u_,Qa,Tl,fo,Uo,cd,Va,m_,pd,f_,wl,A,Ja,__,hd,g_,b_,Xa,v_,ar,k_,y_,T_,Ka,w_,Za,x_,z_,F_,ud,B_,q_,dt,md,Ya,$_,j_,fd,es,M_,P_,_d,ts,E_,C_,gd,os,A_,S_,qe,ns,I_,_o,N_,bd,O_,D_,vd,L_,G_,W_,Ho,R_,kd,U_,H_,as,Q_,vt,ss,V_,yd,J_,X_,rs,K_,kt,is,Z_,Td,Y_,eg,ds,xl,go,Qo,wd,ls,tg,xd,og,zl,S,cs,ng,bo,ag,zd,sg,rg,Fd,ig,dg,lg,ps,cg,sr,pg,hg,ug,hs,mg,us,fg,_g,gg,Bd,bg,vg,lt,qd,ms,kg,yg,$d,fs,Tg,wg,jd,_s,xg,zg,Md,gs,Fg,Bg,$e,bs,qg,vo,$g,Pd,jg,Mg,Ed,Pg,Eg,Cg,Vo,Ag,Cd,Sg,Ig,vs,Ng,yt,ks,Og,Ad,Dg,Lg,ys,Gg,Tt,Ts,Wg,Sd,Rg,Ug,ws,Fl;return T=new U({}),Y=new U({}),Oe=new U({}),cn=new U({}),pn=new U({}),hn=new E({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),un=new U({}),mn=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/configuration_bart.py#L36",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The number of labels to use in <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),_n=new E({props:{code:`from transformers import BartModel, BartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),gn=new U({}),bn=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/tokenization_bart.py#L55"}}),vn=new U({}),kn=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/tokenization_bart_fast.py#L64"}}),Tn=new U({}),wn=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1123",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new q({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1150",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new Ue({props:{$$slots:{default:[jy]},$$scope:{ctx:M}}}),qn=new E({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),$n=new U({}),jn=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1249",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1288",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new Ue({props:{$$slots:{default:[My]},$$scope:{ctx:M}}}),An=new E({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Sn=new E({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),In=new U({}),Nn=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1415",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1428",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Ue({props:{$$slots:{default:[Py]},$$scope:{ctx:M}}}),Wn=new E({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new E({props:{code:`from transformers import BartTokenizer, BartForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Un=new U({}),Hn=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1540",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1552",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new Ue({props:{$$slots:{default:[Ey]},$$scope:{ctx:M}}}),Kn=new E({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Zn=new U({}),ea=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_bart.py#L1699",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new E({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),oa=new U({}),na=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_tf_bart.py#L1183",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),So=new Ue({props:{$$slots:{default:[Cy]},$$scope:{ctx:M}}}),ia=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_tf_bart.py#L1198",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Io=new Ue({props:{$$slots:{default:[Ay]},$$scope:{ctx:M}}}),da=new E({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),la=new U({}),ca=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_tf_bart.py#L1292",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new Ue({props:{$$slots:{default:[Sy]},$$scope:{ctx:M}}}),ma=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_tf_bart.py#L1327",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Ue({props:{$$slots:{default:[Iy]},$$scope:{ctx:M}}}),fa=new E({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),_a=new E({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),ga=new U({}),ba=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1244",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fa=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Ue({props:{$$slots:{default:[Ny]},$$scope:{ctx:M}}}),Ba=new E({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),qa=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$a=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ja=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ma=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Pa=new U({}),Ea=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1330",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),La=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Ue({props:{$$slots:{default:[Oy]},$$scope:{ctx:M}}}),Ga=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Wa=new E({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),Ra=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ua=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ha=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1334",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qa=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Va=new U({}),Ja=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1643",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ns=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Ue({props:{$$slots:{default:[Dy]},$$scope:{ctx:M}}}),as=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ss=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rs=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),is=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ds=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ls=new U({}),cs=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1730",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bs=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1179",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ue({props:{$$slots:{default:[Ly]},$$scope:{ctx:M}}}),vs=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),ks=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1002",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ts=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/bart/modeling_flax_bart.py#L1065",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){p=n("meta"),F=d(),k=n("h1"),w=n("a"),z=n("span"),m(T.$$.fragment),y=d(),B=n("span"),He=r("BART"),ke=d(),$=n("p"),Ce=n("strong"),le=r("DISCLAIMER:"),Qe=r(" If you see something strange, file a "),ce=n("a"),pe=r("Github Issue"),Ve=r(` and assign
@patrickvonplaten`),We=d(),G=n("h2"),I=n("a"),Ae=n("span"),m(Y.$$.fragment),P=d(),C=n("span"),Je=r("Overview"),ae=d(),se=n("p"),Xe=r("The Bart model was proposed in "),W=n("a"),Ke=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ze=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),N=d(),ye=n("p"),he=r("According to the abstract,"),Re=d(),H=n("ul"),ee=n("li"),Ye=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),et=d(),R=n("li"),tt=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ue=d(),Se=n("li"),x=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),j=d(),L=n("p"),At=r("This model was contributed by "),Ie=n("a"),te=r("sshleifer"),St=r(". The Authors\u2019 code can be found "),Ne=n("a"),It=r("here"),oe=r("."),re=d(),me=n("h3"),Te=n("a"),ne=n("span"),m(Oe.$$.fragment),Nt=d(),De=n("span"),Ot=r("Examples"),Hd=d(),ct=n("ul"),an=n("li"),hc=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),sn=n("a"),uc=r("examples/pytorch/summarization/"),mc=r("."),fc=d(),ot=n("li"),_c=r("An example of how to train "),$s=n("a"),gc=r("BartForConditionalGeneration"),bc=r(" with a Hugging Face "),Nr=n("code"),vc=r("datasets"),kc=r(`
object can be found in this `),rn=n("a"),yc=r("forum discussion"),Tc=r("."),wc=d(),ko=n("li"),dn=n("a"),xc=r("Distilled checkpoints"),zc=r(" are described in this "),ln=n("a"),Fc=r("paper"),Bc=r("."),Qd=d(),Dt=n("h2"),yo=n("a"),Or=n("span"),m(cn.$$.fragment),qc=d(),Dr=n("span"),$c=r("Implementation Notes"),Vd=d(),we=n("ul"),nt=n("li"),jc=r("Bart doesn\u2019t use "),Lr=n("code"),Mc=r("token_type_ids"),Pc=r(" for sequence classification. Use "),js=n("a"),Ec=r("BartTokenizer"),Cc=r(` or
`),Ms=n("a"),Ac=r("encode()"),Sc=r(" to get the proper splitting."),Ic=d(),Lt=n("li"),Nc=r("The forward pass of "),Ps=n("a"),Oc=r("BartModel"),Dc=r(" will create the "),Gr=n("code"),Lc=r("decoder_input_ids"),Gc=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Wc=d(),Gt=n("li"),Rc=r(`Model predictions are intended to be identical to the original implementation when
`),Wr=n("code"),Uc=r("force_bos_token_to_be_generated=True"),Hc=r(`. This only works, however, if the string you pass to
`),Rr=n("code"),Qc=r("fairseq.encode"),Vc=r(" starts with a space."),Jc=d(),Es=n("li"),Cs=n("a"),Xc=r("generate()"),Kc=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Zc=d(),Wt=n("li"),Yc=r("Models that load the "),Ur=n("em"),ep=r("facebook/bart-large-cnn"),tp=r(" weights will not have a "),Hr=n("code"),op=r("mask_token_id"),np=r(`, or be able to perform
mask-filling tasks.`),Jd=d(),Rt=n("h2"),To=n("a"),Qr=n("span"),m(pn.$$.fragment),ap=d(),Vr=n("span"),sp=r("Mask Filling"),Xd=d(),pt=n("p"),rp=r("The "),Jr=n("code"),ip=r("facebook/bart-base"),dp=r(" and "),Xr=n("code"),lp=r("facebook/bart-large"),cp=r(" checkpoints can be used to fill multi-token masks."),Kd=d(),m(hn.$$.fragment),Zd=d(),Ut=n("h2"),wo=n("a"),Kr=n("span"),m(un.$$.fragment),pp=d(),Zr=n("span"),hp=r("BartConfig"),Yd=d(),fe=n("div"),m(mn.$$.fragment),up=d(),Ht=n("p"),mp=r("This is the configuration class to store the configuration of a "),As=n("a"),fp=r("BartModel"),_p=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),fn=n("a"),gp=r("facebook/bart-large"),bp=r(" architecture."),vp=d(),Qt=n("p"),kp=r("Configuration objects inherit from "),Ss=n("a"),yp=r("PretrainedConfig"),Tp=r(` and can be used to control the model outputs. Read the
documentation from `),Is=n("a"),wp=r("PretrainedConfig"),xp=r(" for more information."),zp=d(),Yr=n("p"),Fp=r("Example:"),Bp=d(),m(_n.$$.fragment),el=d(),Vt=n("h2"),xo=n("a"),ei=n("span"),m(gn.$$.fragment),qp=d(),ti=n("span"),$p=r("BartTokenizer"),tl=d(),at=n("div"),m(bn.$$.fragment),jp=d(),oi=n("p"),Mp=r("Construct a BART tokenizer."),Pp=d(),ht=n("p"),Ns=n("a"),Ep=r("BartTokenizer"),Cp=r(" is identical to "),Os=n("a"),Ap=r("RobertaTokenizer"),Sp=r(". Refer to superclass "),Ds=n("a"),Ip=r("RobertaTokenizer"),Np=r(` for usage examples
and documentation concerning the initialization parameters and other methods.`),ol=d(),Jt=n("h2"),zo=n("a"),ni=n("span"),m(vn.$$.fragment),Op=d(),ai=n("span"),Dp=r("BartTokenizerFast"),nl=d(),st=n("div"),m(kn.$$.fragment),Lp=d(),yn=n("p"),Gp=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),si=n("em"),Wp=r("tokenizers"),Rp=r(" library)."),Up=d(),ut=n("p"),Ls=n("a"),Hp=r("BartTokenizerFast"),Qp=r(" is identical to "),Gs=n("a"),Vp=r("RobertaTokenizerFast"),Jp=r(". Refer to superclass "),Ws=n("a"),Xp=r("RobertaTokenizerFast"),Kp=r(` for
usage examples and documentation concerning the initialization parameters and other methods.`),al=d(),Xt=n("h2"),Fo=n("a"),ri=n("span"),m(Tn.$$.fragment),Zp=d(),ii=n("span"),Yp=r("BartModel"),sl=d(),Le=n("div"),m(wn.$$.fragment),eh=d(),xn=n("p"),th=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rs=n("a"),oh=r("PreTrainedModel"),nh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah=d(),zn=n("p"),sh=r("This model is also a PyTorch "),Fn=n("a"),rh=r("torch.nn.Module"),ih=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dh=d(),xe=n("div"),m(Bn.$$.fragment),lh=d(),Kt=n("p"),ch=r("The "),Us=n("a"),ph=r("BartModel"),hh=r(" forward method, overrides the "),di=n("code"),uh=r("__call__"),mh=r(" special method."),fh=d(),m(Bo.$$.fragment),_h=d(),li=n("p"),gh=r("Example:"),bh=d(),m(qn.$$.fragment),rl=d(),Zt=n("h2"),qo=n("a"),ci=n("span"),m($n.$$.fragment),vh=d(),pi=n("span"),kh=r("BartForConditionalGeneration"),il=d(),Ge=n("div"),m(jn.$$.fragment),yh=d(),Mn=n("p"),Th=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hs=n("a"),wh=r("PreTrainedModel"),xh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh=d(),Pn=n("p"),Fh=r("This model is also a PyTorch "),En=n("a"),Bh=r("torch.nn.Module"),qh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h=d(),Q=n("div"),m(Cn.$$.fragment),jh=d(),Yt=n("p"),Mh=r("The "),Qs=n("a"),Ph=r("BartForConditionalGeneration"),Eh=r(" forward method, overrides the "),hi=n("code"),Ch=r("__call__"),Ah=r(" special method."),Sh=d(),m($o.$$.fragment),Ih=d(),ui=n("p"),Nh=r("Summarization example:"),Oh=d(),m(An.$$.fragment),Dh=d(),mi=n("p"),Lh=r("Mask filling example:"),Gh=d(),m(Sn.$$.fragment),dl=d(),eo=n("h2"),jo=n("a"),fi=n("span"),m(In.$$.fragment),Wh=d(),_i=n("span"),Rh=r("BartForSequenceClassification"),ll=d(),_e=n("div"),m(Nn.$$.fragment),Uh=d(),gi=n("p"),Hh=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Qh=d(),On=n("p"),Vh=r("This model inherits from "),Vs=n("a"),Jh=r("PreTrainedModel"),Xh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh=d(),Dn=n("p"),Zh=r("This model is also a PyTorch "),Ln=n("a"),Yh=r("torch.nn.Module"),eu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tu=d(),V=n("div"),m(Gn.$$.fragment),ou=d(),to=n("p"),nu=r("The "),Js=n("a"),au=r("BartForSequenceClassification"),su=r(" forward method, overrides the "),bi=n("code"),ru=r("__call__"),iu=r(" special method."),du=d(),m(Mo.$$.fragment),lu=d(),vi=n("p"),cu=r("Example of single-label classification:"),pu=d(),m(Wn.$$.fragment),hu=d(),ki=n("p"),uu=r("Example of multi-label classification:"),mu=d(),m(Rn.$$.fragment),cl=d(),oo=n("h2"),Po=n("a"),yi=n("span"),m(Un.$$.fragment),fu=d(),Ti=n("span"),_u=r("BartForQuestionAnswering"),pl=d(),ge=n("div"),m(Hn.$$.fragment),gu=d(),no=n("p"),bu=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=n("code"),vu=r("span start logits"),ku=r(" and "),xi=n("code"),yu=r("span end logits"),Tu=r(")."),wu=d(),Qn=n("p"),xu=r("This model inherits from "),Xs=n("a"),zu=r("PreTrainedModel"),Fu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu=d(),Vn=n("p"),qu=r("This model is also a PyTorch "),Jn=n("a"),$u=r("torch.nn.Module"),ju=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mu=d(),ze=n("div"),m(Xn.$$.fragment),Pu=d(),ao=n("p"),Eu=r("The "),Ks=n("a"),Cu=r("BartForQuestionAnswering"),Au=r(" forward method, overrides the "),zi=n("code"),Su=r("__call__"),Iu=r(" special method."),Nu=d(),m(Eo.$$.fragment),Ou=d(),Fi=n("p"),Du=r("Example:"),Lu=d(),m(Kn.$$.fragment),hl=d(),so=n("h2"),Co=n("a"),Bi=n("span"),m(Zn.$$.fragment),Gu=d(),qi=n("span"),Wu=r("BartForCausalLM"),ul=d(),Yn=n("div"),mt=n("div"),m(ea.$$.fragment),Ru=d(),$i=n("p"),Uu=r("Example:"),Hu=d(),m(ta.$$.fragment),ml=d(),ro=n("h2"),Ao=n("a"),ji=n("span"),m(oa.$$.fragment),Qu=d(),Mi=n("span"),Vu=r("TFBartModel"),fl=d(),be=n("div"),m(na.$$.fragment),Ju=d(),aa=n("p"),Xu=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Zs=n("a"),Ku=r("TFPreTrainedModel"),Zu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu=d(),sa=n("p"),em=r("This model is also a "),ra=n("a"),tm=r("tf.keras.Model"),om=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nm=d(),m(So.$$.fragment),am=d(),Fe=n("div"),m(ia.$$.fragment),sm=d(),io=n("p"),rm=r("The "),Ys=n("a"),im=r("TFBartModel"),dm=r(" forward method, overrides the "),Pi=n("code"),lm=r("__call__"),cm=r(" special method."),pm=d(),m(Io.$$.fragment),hm=d(),Ei=n("p"),um=r("Example:"),mm=d(),m(da.$$.fragment),_l=d(),lo=n("h2"),No=n("a"),Ci=n("span"),m(la.$$.fragment),fm=d(),Ai=n("span"),_m=r("TFBartForConditionalGeneration"),gl=d(),ve=n("div"),m(ca.$$.fragment),gm=d(),pa=n("p"),bm=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),er=n("a"),vm=r("TFPreTrainedModel"),km=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym=d(),ha=n("p"),Tm=r("This model is also a "),ua=n("a"),wm=r("tf.keras.Model"),xm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=d(),m(Oo.$$.fragment),Fm=d(),J=n("div"),m(ma.$$.fragment),Bm=d(),co=n("p"),qm=r("The "),tr=n("a"),$m=r("TFBartForConditionalGeneration"),jm=r(" forward method, overrides the "),Si=n("code"),Mm=r("__call__"),Pm=r(" special method."),Em=d(),m(Do.$$.fragment),Cm=d(),Ii=n("p"),Am=r("Summarization example:"),Sm=d(),m(fa.$$.fragment),Im=d(),Ni=n("p"),Nm=r("Mask filling example:"),Om=d(),m(_a.$$.fragment),bl=d(),po=n("h2"),Lo=n("a"),Oi=n("span"),m(ga.$$.fragment),Dm=d(),Di=n("span"),Lm=r("FlaxBartModel"),vl=d(),O=n("div"),m(ba.$$.fragment),Gm=d(),va=n("p"),Wm=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),or=n("a"),Rm=r("FlaxPreTrainedModel"),Um=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=d(),ka=n("p"),Qm=r(`This model is also a Flax Linen
`),ya=n("a"),Vm=r("flax.nn.Module"),Jm=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xm=d(),Li=n("p"),Km=r("Finally, this model supports inherent JAX features such as:"),Zm=d(),rt=n("ul"),Gi=n("li"),Ta=n("a"),Ym=r("Just-In-Time (JIT) compilation"),ef=d(),Wi=n("li"),wa=n("a"),tf=r("Automatic Differentiation"),of=d(),Ri=n("li"),xa=n("a"),nf=r("Vectorization"),af=d(),Ui=n("li"),za=n("a"),sf=r("Parallelization"),rf=d(),Be=n("div"),m(Fa.$$.fragment),df=d(),ho=n("p"),lf=r("The "),Hi=n("code"),cf=r("FlaxBartPreTrainedModel"),pf=r("forward method, overrides the "),Qi=n("code"),hf=r("__call__"),uf=r(" special method."),mf=d(),m(Go.$$.fragment),ff=d(),Vi=n("p"),_f=r("Example:"),gf=d(),m(Ba.$$.fragment),bf=d(),ft=n("div"),m(qa.$$.fragment),vf=d(),Ji=n("p"),kf=r("Example:"),yf=d(),m($a.$$.fragment),Tf=d(),_t=n("div"),m(ja.$$.fragment),wf=d(),Xi=n("p"),xf=r("Example:"),zf=d(),m(Ma.$$.fragment),kl=d(),uo=n("h2"),Wo=n("a"),Ki=n("span"),m(Pa.$$.fragment),Ff=d(),Zi=n("span"),Bf=r("FlaxBartForConditionalGeneration"),yl=d(),D=n("div"),m(Ea.$$.fragment),qf=d(),Ca=n("p"),$f=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=n("a"),jf=r("FlaxPreTrainedModel"),Mf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf=d(),Aa=n("p"),Ef=r(`This model is also a Flax Linen
`),Sa=n("a"),Cf=r("flax.nn.Module"),Af=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sf=d(),Yi=n("p"),If=r("Finally, this model supports inherent JAX features such as:"),Nf=d(),it=n("ul"),ed=n("li"),Ia=n("a"),Of=r("Just-In-Time (JIT) compilation"),Df=d(),td=n("li"),Na=n("a"),Lf=r("Automatic Differentiation"),Gf=d(),od=n("li"),Oa=n("a"),Wf=r("Vectorization"),Rf=d(),nd=n("li"),Da=n("a"),Uf=r("Parallelization"),Hf=d(),X=n("div"),m(La.$$.fragment),Qf=d(),mo=n("p"),Vf=r("The "),ad=n("code"),Jf=r("FlaxBartPreTrainedModel"),Xf=r("forward method, overrides the "),sd=n("code"),Kf=r("__call__"),Zf=r(" special method."),Yf=d(),m(Ro.$$.fragment),e_=d(),rd=n("p"),t_=r("Summarization example:"),o_=d(),m(Ga.$$.fragment),n_=d(),id=n("p"),a_=r("Mask filling example:"),s_=d(),m(Wa.$$.fragment),r_=d(),gt=n("div"),m(Ra.$$.fragment),i_=d(),dd=n("p"),d_=r("Example:"),l_=d(),m(Ua.$$.fragment),c_=d(),bt=n("div"),m(Ha.$$.fragment),p_=d(),ld=n("p"),h_=r("Example:"),u_=d(),m(Qa.$$.fragment),Tl=d(),fo=n("h2"),Uo=n("a"),cd=n("span"),m(Va.$$.fragment),m_=d(),pd=n("span"),f_=r("FlaxBartForSequenceClassification"),wl=d(),A=n("div"),m(Ja.$$.fragment),__=d(),hd=n("p"),g_=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),b_=d(),Xa=n("p"),v_=r("This model inherits from "),ar=n("a"),k_=r("FlaxPreTrainedModel"),y_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T_=d(),Ka=n("p"),w_=r(`This model is also a Flax Linen
`),Za=n("a"),x_=r("flax.nn.Module"),z_=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),F_=d(),ud=n("p"),B_=r("Finally, this model supports inherent JAX features such as:"),q_=d(),dt=n("ul"),md=n("li"),Ya=n("a"),$_=r("Just-In-Time (JIT) compilation"),j_=d(),fd=n("li"),es=n("a"),M_=r("Automatic Differentiation"),P_=d(),_d=n("li"),ts=n("a"),E_=r("Vectorization"),C_=d(),gd=n("li"),os=n("a"),A_=r("Parallelization"),S_=d(),qe=n("div"),m(ns.$$.fragment),I_=d(),_o=n("p"),N_=r("The "),bd=n("code"),O_=r("FlaxBartPreTrainedModel"),D_=r("forward method, overrides the "),vd=n("code"),L_=r("__call__"),G_=r(" special method."),W_=d(),m(Ho.$$.fragment),R_=d(),kd=n("p"),U_=r("Example:"),H_=d(),m(as.$$.fragment),Q_=d(),vt=n("div"),m(ss.$$.fragment),V_=d(),yd=n("p"),J_=r("Example:"),X_=d(),m(rs.$$.fragment),K_=d(),kt=n("div"),m(is.$$.fragment),Z_=d(),Td=n("p"),Y_=r("Example:"),eg=d(),m(ds.$$.fragment),xl=d(),go=n("h2"),Qo=n("a"),wd=n("span"),m(ls.$$.fragment),tg=d(),xd=n("span"),og=r("FlaxBartForQuestionAnswering"),zl=d(),S=n("div"),m(cs.$$.fragment),ng=d(),bo=n("p"),ag=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),zd=n("code"),sg=r("span start logits"),rg=r(" and "),Fd=n("code"),ig=r("span end logits"),dg=r(")."),lg=d(),ps=n("p"),cg=r("This model inherits from "),sr=n("a"),pg=r("FlaxPreTrainedModel"),hg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug=d(),hs=n("p"),mg=r(`This model is also a Flax Linen
`),us=n("a"),fg=r("flax.nn.Module"),_g=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gg=d(),Bd=n("p"),bg=r("Finally, this model supports inherent JAX features such as:"),vg=d(),lt=n("ul"),qd=n("li"),ms=n("a"),kg=r("Just-In-Time (JIT) compilation"),yg=d(),$d=n("li"),fs=n("a"),Tg=r("Automatic Differentiation"),wg=d(),jd=n("li"),_s=n("a"),xg=r("Vectorization"),zg=d(),Md=n("li"),gs=n("a"),Fg=r("Parallelization"),Bg=d(),$e=n("div"),m(bs.$$.fragment),qg=d(),vo=n("p"),$g=r("The "),Pd=n("code"),jg=r("FlaxBartPreTrainedModel"),Mg=r("forward method, overrides the "),Ed=n("code"),Pg=r("__call__"),Eg=r(" special method."),Cg=d(),m(Vo.$$.fragment),Ag=d(),Cd=n("p"),Sg=r("Example:"),Ig=d(),m(vs.$$.fragment),Ng=d(),yt=n("div"),m(ks.$$.fragment),Og=d(),Ad=n("p"),Dg=r("Example:"),Lg=d(),m(ys.$$.fragment),Gg=d(),Tt=n("div"),m(Ts.$$.fragment),Wg=d(),Sd=n("p"),Rg=r("Example:"),Ug=d(),m(ws.$$.fragment),this.h()},l(o){const h=$y('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),F=l(o),k=a(o,"H1",{class:!0});var xs=s(k);w=a(xs,"A",{id:!0,class:!0,href:!0});var Id=s(w);z=a(Id,"SPAN",{});var Nd=s(z);f(T.$$.fragment,Nd),Nd.forEach(t),Id.forEach(t),y=l(xs),B=a(xs,"SPAN",{});var Od=s(B);He=i(Od,"BART"),Od.forEach(t),xs.forEach(t),ke=l(o),$=a(o,"P",{});var Jo=s($);Ce=a(Jo,"STRONG",{});var Dd=s(Ce);le=i(Dd,"DISCLAIMER:"),Dd.forEach(t),Qe=i(Jo," If you see something strange, file a "),ce=a(Jo,"A",{href:!0,rel:!0});var Ld=s(ce);pe=i(Ld,"Github Issue"),Ld.forEach(t),Ve=i(Jo,` and assign
@patrickvonplaten`),Jo.forEach(t),We=l(o),G=a(o,"H2",{class:!0});var zs=s(G);I=a(zs,"A",{id:!0,class:!0,href:!0});var Gd=s(I);Ae=a(Gd,"SPAN",{});var Wd=s(Ae);f(Y.$$.fragment,Wd),Wd.forEach(t),Gd.forEach(t),P=l(zs),C=a(zs,"SPAN",{});var Rd=s(C);Je=i(Rd,"Overview"),Rd.forEach(t),zs.forEach(t),ae=l(o),se=a(o,"P",{});var Fs=s(se);Xe=i(Fs,"The Bart model was proposed in "),W=a(Fs,"A",{href:!0,rel:!0});var Qg=s(W);Ke=i(Qg,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Qg.forEach(t),Ze=i(Fs,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Fs.forEach(t),N=l(o),ye=a(o,"P",{});var Vg=s(ye);he=i(Vg,"According to the abstract,"),Vg.forEach(t),Re=l(o),H=a(o,"UL",{});var rr=s(H);ee=a(rr,"LI",{});var Jg=s(ee);Ye=i(Jg,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Jg.forEach(t),et=l(rr),R=a(rr,"LI",{});var Xg=s(R);tt=i(Xg,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Xg.forEach(t),ue=l(rr),Se=a(rr,"LI",{});var Kg=s(Se);x=i(Kg,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Kg.forEach(t),rr.forEach(t),j=l(o),L=a(o,"P",{});var ir=s(L);At=i(ir,"This model was contributed by "),Ie=a(ir,"A",{href:!0,rel:!0});var Zg=s(Ie);te=i(Zg,"sshleifer"),Zg.forEach(t),St=i(ir,". The Authors\u2019 code can be found "),Ne=a(ir,"A",{href:!0,rel:!0});var Yg=s(Ne);It=i(Yg,"here"),Yg.forEach(t),oe=i(ir,"."),ir.forEach(t),re=l(o),me=a(o,"H3",{class:!0});var Bl=s(me);Te=a(Bl,"A",{id:!0,class:!0,href:!0});var eb=s(Te);ne=a(eb,"SPAN",{});var tb=s(ne);f(Oe.$$.fragment,tb),tb.forEach(t),eb.forEach(t),Nt=l(Bl),De=a(Bl,"SPAN",{});var ob=s(De);Ot=i(ob,"Examples"),ob.forEach(t),Bl.forEach(t),Hd=l(o),ct=a(o,"UL",{});var dr=s(ct);an=a(dr,"LI",{});var ql=s(an);hc=i(ql,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),sn=a(ql,"A",{href:!0,rel:!0});var nb=s(sn);uc=i(nb,"examples/pytorch/summarization/"),nb.forEach(t),mc=i(ql,"."),ql.forEach(t),fc=l(dr),ot=a(dr,"LI",{});var Xo=s(ot);_c=i(Xo,"An example of how to train "),$s=a(Xo,"A",{href:!0});var ab=s($s);gc=i(ab,"BartForConditionalGeneration"),ab.forEach(t),bc=i(Xo," with a Hugging Face "),Nr=a(Xo,"CODE",{});var sb=s(Nr);vc=i(sb,"datasets"),sb.forEach(t),kc=i(Xo,`
object can be found in this `),rn=a(Xo,"A",{href:!0,rel:!0});var rb=s(rn);yc=i(rb,"forum discussion"),rb.forEach(t),Tc=i(Xo,"."),Xo.forEach(t),wc=l(dr),ko=a(dr,"LI",{});var Ud=s(ko);dn=a(Ud,"A",{href:!0,rel:!0});var ib=s(dn);xc=i(ib,"Distilled checkpoints"),ib.forEach(t),zc=i(Ud," are described in this "),ln=a(Ud,"A",{href:!0,rel:!0});var db=s(ln);Fc=i(db,"paper"),db.forEach(t),Bc=i(Ud,"."),Ud.forEach(t),dr.forEach(t),Qd=l(o),Dt=a(o,"H2",{class:!0});var $l=s(Dt);yo=a($l,"A",{id:!0,class:!0,href:!0});var lb=s(yo);Or=a(lb,"SPAN",{});var cb=s(Or);f(cn.$$.fragment,cb),cb.forEach(t),lb.forEach(t),qc=l($l),Dr=a($l,"SPAN",{});var pb=s(Dr);$c=i(pb,"Implementation Notes"),pb.forEach(t),$l.forEach(t),Vd=l(o),we=a(o,"UL",{});var wt=s(we);nt=a(wt,"LI",{});var Ko=s(nt);jc=i(Ko,"Bart doesn\u2019t use "),Lr=a(Ko,"CODE",{});var hb=s(Lr);Mc=i(hb,"token_type_ids"),hb.forEach(t),Pc=i(Ko," for sequence classification. Use "),js=a(Ko,"A",{href:!0});var ub=s(js);Ec=i(ub,"BartTokenizer"),ub.forEach(t),Cc=i(Ko,` or
`),Ms=a(Ko,"A",{href:!0});var mb=s(Ms);Ac=i(mb,"encode()"),mb.forEach(t),Sc=i(Ko," to get the proper splitting."),Ko.forEach(t),Ic=l(wt),Lt=a(wt,"LI",{});var lr=s(Lt);Nc=i(lr,"The forward pass of "),Ps=a(lr,"A",{href:!0});var fb=s(Ps);Oc=i(fb,"BartModel"),fb.forEach(t),Dc=i(lr," will create the "),Gr=a(lr,"CODE",{});var _b=s(Gr);Lc=i(_b,"decoder_input_ids"),_b.forEach(t),Gc=i(lr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),lr.forEach(t),Wc=l(wt),Gt=a(wt,"LI",{});var cr=s(Gt);Rc=i(cr,`Model predictions are intended to be identical to the original implementation when
`),Wr=a(cr,"CODE",{});var gb=s(Wr);Uc=i(gb,"force_bos_token_to_be_generated=True"),gb.forEach(t),Hc=i(cr,`. This only works, however, if the string you pass to
`),Rr=a(cr,"CODE",{});var bb=s(Rr);Qc=i(bb,"fairseq.encode"),bb.forEach(t),Vc=i(cr," starts with a space."),cr.forEach(t),Jc=l(wt),Es=a(wt,"LI",{});var Hg=s(Es);Cs=a(Hg,"A",{href:!0});var vb=s(Cs);Xc=i(vb,"generate()"),vb.forEach(t),Kc=i(Hg,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Hg.forEach(t),Zc=l(wt),Wt=a(wt,"LI",{});var pr=s(Wt);Yc=i(pr,"Models that load the "),Ur=a(pr,"EM",{});var kb=s(Ur);ep=i(kb,"facebook/bart-large-cnn"),kb.forEach(t),tp=i(pr," weights will not have a "),Hr=a(pr,"CODE",{});var yb=s(Hr);op=i(yb,"mask_token_id"),yb.forEach(t),np=i(pr,`, or be able to perform
mask-filling tasks.`),pr.forEach(t),wt.forEach(t),Jd=l(o),Rt=a(o,"H2",{class:!0});var jl=s(Rt);To=a(jl,"A",{id:!0,class:!0,href:!0});var Tb=s(To);Qr=a(Tb,"SPAN",{});var wb=s(Qr);f(pn.$$.fragment,wb),wb.forEach(t),Tb.forEach(t),ap=l(jl),Vr=a(jl,"SPAN",{});var xb=s(Vr);sp=i(xb,"Mask Filling"),xb.forEach(t),jl.forEach(t),Xd=l(o),pt=a(o,"P",{});var hr=s(pt);rp=i(hr,"The "),Jr=a(hr,"CODE",{});var zb=s(Jr);ip=i(zb,"facebook/bart-base"),zb.forEach(t),dp=i(hr," and "),Xr=a(hr,"CODE",{});var Fb=s(Xr);lp=i(Fb,"facebook/bart-large"),Fb.forEach(t),cp=i(hr," checkpoints can be used to fill multi-token masks."),hr.forEach(t),Kd=l(o),f(hn.$$.fragment,o),Zd=l(o),Ut=a(o,"H2",{class:!0});var Ml=s(Ut);wo=a(Ml,"A",{id:!0,class:!0,href:!0});var Bb=s(wo);Kr=a(Bb,"SPAN",{});var qb=s(Kr);f(un.$$.fragment,qb),qb.forEach(t),Bb.forEach(t),pp=l(Ml),Zr=a(Ml,"SPAN",{});var $b=s(Zr);hp=i($b,"BartConfig"),$b.forEach(t),Ml.forEach(t),Yd=l(o),fe=a(o,"DIV",{class:!0});var xt=s(fe);f(mn.$$.fragment,xt),up=l(xt),Ht=a(xt,"P",{});var ur=s(Ht);mp=i(ur,"This is the configuration class to store the configuration of a "),As=a(ur,"A",{href:!0});var jb=s(As);fp=i(jb,"BartModel"),jb.forEach(t),_p=i(ur,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),fn=a(ur,"A",{href:!0,rel:!0});var Mb=s(fn);gp=i(Mb,"facebook/bart-large"),Mb.forEach(t),bp=i(ur," architecture."),ur.forEach(t),vp=l(xt),Qt=a(xt,"P",{});var mr=s(Qt);kp=i(mr,"Configuration objects inherit from "),Ss=a(mr,"A",{href:!0});var Pb=s(Ss);yp=i(Pb,"PretrainedConfig"),Pb.forEach(t),Tp=i(mr,` and can be used to control the model outputs. Read the
documentation from `),Is=a(mr,"A",{href:!0});var Eb=s(Is);wp=i(Eb,"PretrainedConfig"),Eb.forEach(t),xp=i(mr," for more information."),mr.forEach(t),zp=l(xt),Yr=a(xt,"P",{});var Cb=s(Yr);Fp=i(Cb,"Example:"),Cb.forEach(t),Bp=l(xt),f(_n.$$.fragment,xt),xt.forEach(t),el=l(o),Vt=a(o,"H2",{class:!0});var Pl=s(Vt);xo=a(Pl,"A",{id:!0,class:!0,href:!0});var Ab=s(xo);ei=a(Ab,"SPAN",{});var Sb=s(ei);f(gn.$$.fragment,Sb),Sb.forEach(t),Ab.forEach(t),qp=l(Pl),ti=a(Pl,"SPAN",{});var Ib=s(ti);$p=i(Ib,"BartTokenizer"),Ib.forEach(t),Pl.forEach(t),tl=l(o),at=a(o,"DIV",{class:!0});var fr=s(at);f(bn.$$.fragment,fr),jp=l(fr),oi=a(fr,"P",{});var Nb=s(oi);Mp=i(Nb,"Construct a BART tokenizer."),Nb.forEach(t),Pp=l(fr),ht=a(fr,"P",{});var Bs=s(ht);Ns=a(Bs,"A",{href:!0});var Ob=s(Ns);Ep=i(Ob,"BartTokenizer"),Ob.forEach(t),Cp=i(Bs," is identical to "),Os=a(Bs,"A",{href:!0});var Db=s(Os);Ap=i(Db,"RobertaTokenizer"),Db.forEach(t),Sp=i(Bs,". Refer to superclass "),Ds=a(Bs,"A",{href:!0});var Lb=s(Ds);Ip=i(Lb,"RobertaTokenizer"),Lb.forEach(t),Np=i(Bs,` for usage examples
and documentation concerning the initialization parameters and other methods.`),Bs.forEach(t),fr.forEach(t),ol=l(o),Jt=a(o,"H2",{class:!0});var El=s(Jt);zo=a(El,"A",{id:!0,class:!0,href:!0});var Gb=s(zo);ni=a(Gb,"SPAN",{});var Wb=s(ni);f(vn.$$.fragment,Wb),Wb.forEach(t),Gb.forEach(t),Op=l(El),ai=a(El,"SPAN",{});var Rb=s(ai);Dp=i(Rb,"BartTokenizerFast"),Rb.forEach(t),El.forEach(t),nl=l(o),st=a(o,"DIV",{class:!0});var _r=s(st);f(kn.$$.fragment,_r),Lp=l(_r),yn=a(_r,"P",{});var Cl=s(yn);Gp=i(Cl,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),si=a(Cl,"EM",{});var Ub=s(si);Wp=i(Ub,"tokenizers"),Ub.forEach(t),Rp=i(Cl," library)."),Cl.forEach(t),Up=l(_r),ut=a(_r,"P",{});var qs=s(ut);Ls=a(qs,"A",{href:!0});var Hb=s(Ls);Hp=i(Hb,"BartTokenizerFast"),Hb.forEach(t),Qp=i(qs," is identical to "),Gs=a(qs,"A",{href:!0});var Qb=s(Gs);Vp=i(Qb,"RobertaTokenizerFast"),Qb.forEach(t),Jp=i(qs,". Refer to superclass "),Ws=a(qs,"A",{href:!0});var Vb=s(Ws);Xp=i(Vb,"RobertaTokenizerFast"),Vb.forEach(t),Kp=i(qs,` for
usage examples and documentation concerning the initialization parameters and other methods.`),qs.forEach(t),_r.forEach(t),al=l(o),Xt=a(o,"H2",{class:!0});var Al=s(Xt);Fo=a(Al,"A",{id:!0,class:!0,href:!0});var Jb=s(Fo);ri=a(Jb,"SPAN",{});var Xb=s(ri);f(Tn.$$.fragment,Xb),Xb.forEach(t),Jb.forEach(t),Zp=l(Al),ii=a(Al,"SPAN",{});var Kb=s(ii);Yp=i(Kb,"BartModel"),Kb.forEach(t),Al.forEach(t),sl=l(o),Le=a(o,"DIV",{class:!0});var Zo=s(Le);f(wn.$$.fragment,Zo),eh=l(Zo),xn=a(Zo,"P",{});var Sl=s(xn);th=i(Sl,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rs=a(Sl,"A",{href:!0});var Zb=s(Rs);oh=i(Zb,"PreTrainedModel"),Zb.forEach(t),nh=i(Sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sl.forEach(t),ah=l(Zo),zn=a(Zo,"P",{});var Il=s(zn);sh=i(Il,"This model is also a PyTorch "),Fn=a(Il,"A",{href:!0,rel:!0});var Yb=s(Fn);rh=i(Yb,"torch.nn.Module"),Yb.forEach(t),ih=i(Il,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il.forEach(t),dh=l(Zo),xe=a(Zo,"DIV",{class:!0});var zt=s(xe);f(Bn.$$.fragment,zt),lh=l(zt),Kt=a(zt,"P",{});var gr=s(Kt);ch=i(gr,"The "),Us=a(gr,"A",{href:!0});var ev=s(Us);ph=i(ev,"BartModel"),ev.forEach(t),hh=i(gr," forward method, overrides the "),di=a(gr,"CODE",{});var tv=s(di);uh=i(tv,"__call__"),tv.forEach(t),mh=i(gr," special method."),gr.forEach(t),fh=l(zt),f(Bo.$$.fragment,zt),_h=l(zt),li=a(zt,"P",{});var ov=s(li);gh=i(ov,"Example:"),ov.forEach(t),bh=l(zt),f(qn.$$.fragment,zt),zt.forEach(t),Zo.forEach(t),rl=l(o),Zt=a(o,"H2",{class:!0});var Nl=s(Zt);qo=a(Nl,"A",{id:!0,class:!0,href:!0});var nv=s(qo);ci=a(nv,"SPAN",{});var av=s(ci);f($n.$$.fragment,av),av.forEach(t),nv.forEach(t),vh=l(Nl),pi=a(Nl,"SPAN",{});var sv=s(pi);kh=i(sv,"BartForConditionalGeneration"),sv.forEach(t),Nl.forEach(t),il=l(o),Ge=a(o,"DIV",{class:!0});var Yo=s(Ge);f(jn.$$.fragment,Yo),yh=l(Yo),Mn=a(Yo,"P",{});var Ol=s(Mn);Th=i(Ol,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hs=a(Ol,"A",{href:!0});var rv=s(Hs);wh=i(rv,"PreTrainedModel"),rv.forEach(t),xh=i(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),zh=l(Yo),Pn=a(Yo,"P",{});var Dl=s(Pn);Fh=i(Dl,"This model is also a PyTorch "),En=a(Dl,"A",{href:!0,rel:!0});var iv=s(En);Bh=i(iv,"torch.nn.Module"),iv.forEach(t),qh=i(Dl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dl.forEach(t),$h=l(Yo),Q=a(Yo,"DIV",{class:!0});var je=s(Q);f(Cn.$$.fragment,je),jh=l(je),Yt=a(je,"P",{});var br=s(Yt);Mh=i(br,"The "),Qs=a(br,"A",{href:!0});var dv=s(Qs);Ph=i(dv,"BartForConditionalGeneration"),dv.forEach(t),Eh=i(br," forward method, overrides the "),hi=a(br,"CODE",{});var lv=s(hi);Ch=i(lv,"__call__"),lv.forEach(t),Ah=i(br," special method."),br.forEach(t),Sh=l(je),f($o.$$.fragment,je),Ih=l(je),ui=a(je,"P",{});var cv=s(ui);Nh=i(cv,"Summarization example:"),cv.forEach(t),Oh=l(je),f(An.$$.fragment,je),Dh=l(je),mi=a(je,"P",{});var pv=s(mi);Lh=i(pv,"Mask filling example:"),pv.forEach(t),Gh=l(je),f(Sn.$$.fragment,je),je.forEach(t),Yo.forEach(t),dl=l(o),eo=a(o,"H2",{class:!0});var Ll=s(eo);jo=a(Ll,"A",{id:!0,class:!0,href:!0});var hv=s(jo);fi=a(hv,"SPAN",{});var uv=s(fi);f(In.$$.fragment,uv),uv.forEach(t),hv.forEach(t),Wh=l(Ll),_i=a(Ll,"SPAN",{});var mv=s(_i);Rh=i(mv,"BartForSequenceClassification"),mv.forEach(t),Ll.forEach(t),ll=l(o),_e=a(o,"DIV",{class:!0});var Ft=s(_e);f(Nn.$$.fragment,Ft),Uh=l(Ft),gi=a(Ft,"P",{});var fv=s(gi);Hh=i(fv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),fv.forEach(t),Qh=l(Ft),On=a(Ft,"P",{});var Gl=s(On);Vh=i(Gl,"This model inherits from "),Vs=a(Gl,"A",{href:!0});var _v=s(Vs);Jh=i(_v,"PreTrainedModel"),_v.forEach(t),Xh=i(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),Kh=l(Ft),Dn=a(Ft,"P",{});var Wl=s(Dn);Zh=i(Wl,"This model is also a PyTorch "),Ln=a(Wl,"A",{href:!0,rel:!0});var gv=s(Ln);Yh=i(gv,"torch.nn.Module"),gv.forEach(t),eu=i(Wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl.forEach(t),tu=l(Ft),V=a(Ft,"DIV",{class:!0});var Me=s(V);f(Gn.$$.fragment,Me),ou=l(Me),to=a(Me,"P",{});var vr=s(to);nu=i(vr,"The "),Js=a(vr,"A",{href:!0});var bv=s(Js);au=i(bv,"BartForSequenceClassification"),bv.forEach(t),su=i(vr," forward method, overrides the "),bi=a(vr,"CODE",{});var vv=s(bi);ru=i(vv,"__call__"),vv.forEach(t),iu=i(vr," special method."),vr.forEach(t),du=l(Me),f(Mo.$$.fragment,Me),lu=l(Me),vi=a(Me,"P",{});var kv=s(vi);cu=i(kv,"Example of single-label classification:"),kv.forEach(t),pu=l(Me),f(Wn.$$.fragment,Me),hu=l(Me),ki=a(Me,"P",{});var yv=s(ki);uu=i(yv,"Example of multi-label classification:"),yv.forEach(t),mu=l(Me),f(Rn.$$.fragment,Me),Me.forEach(t),Ft.forEach(t),cl=l(o),oo=a(o,"H2",{class:!0});var Rl=s(oo);Po=a(Rl,"A",{id:!0,class:!0,href:!0});var Tv=s(Po);yi=a(Tv,"SPAN",{});var wv=s(yi);f(Un.$$.fragment,wv),wv.forEach(t),Tv.forEach(t),fu=l(Rl),Ti=a(Rl,"SPAN",{});var xv=s(Ti);_u=i(xv,"BartForQuestionAnswering"),xv.forEach(t),Rl.forEach(t),pl=l(o),ge=a(o,"DIV",{class:!0});var Bt=s(ge);f(Hn.$$.fragment,Bt),gu=l(Bt),no=a(Bt,"P",{});var kr=s(no);bu=i(kr,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=a(kr,"CODE",{});var zv=s(wi);vu=i(zv,"span start logits"),zv.forEach(t),ku=i(kr," and "),xi=a(kr,"CODE",{});var Fv=s(xi);yu=i(Fv,"span end logits"),Fv.forEach(t),Tu=i(kr,")."),kr.forEach(t),wu=l(Bt),Qn=a(Bt,"P",{});var Ul=s(Qn);xu=i(Ul,"This model inherits from "),Xs=a(Ul,"A",{href:!0});var Bv=s(Xs);zu=i(Bv,"PreTrainedModel"),Bv.forEach(t),Fu=i(Ul,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul.forEach(t),Bu=l(Bt),Vn=a(Bt,"P",{});var Hl=s(Vn);qu=i(Hl,"This model is also a PyTorch "),Jn=a(Hl,"A",{href:!0,rel:!0});var qv=s(Jn);$u=i(qv,"torch.nn.Module"),qv.forEach(t),ju=i(Hl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl.forEach(t),Mu=l(Bt),ze=a(Bt,"DIV",{class:!0});var qt=s(ze);f(Xn.$$.fragment,qt),Pu=l(qt),ao=a(qt,"P",{});var yr=s(ao);Eu=i(yr,"The "),Ks=a(yr,"A",{href:!0});var $v=s(Ks);Cu=i($v,"BartForQuestionAnswering"),$v.forEach(t),Au=i(yr," forward method, overrides the "),zi=a(yr,"CODE",{});var jv=s(zi);Su=i(jv,"__call__"),jv.forEach(t),Iu=i(yr," special method."),yr.forEach(t),Nu=l(qt),f(Eo.$$.fragment,qt),Ou=l(qt),Fi=a(qt,"P",{});var Mv=s(Fi);Du=i(Mv,"Example:"),Mv.forEach(t),Lu=l(qt),f(Kn.$$.fragment,qt),qt.forEach(t),Bt.forEach(t),hl=l(o),so=a(o,"H2",{class:!0});var Ql=s(so);Co=a(Ql,"A",{id:!0,class:!0,href:!0});var Pv=s(Co);Bi=a(Pv,"SPAN",{});var Ev=s(Bi);f(Zn.$$.fragment,Ev),Ev.forEach(t),Pv.forEach(t),Gu=l(Ql),qi=a(Ql,"SPAN",{});var Cv=s(qi);Wu=i(Cv,"BartForCausalLM"),Cv.forEach(t),Ql.forEach(t),ul=l(o),Yn=a(o,"DIV",{class:!0});var Av=s(Yn);mt=a(Av,"DIV",{class:!0});var Tr=s(mt);f(ea.$$.fragment,Tr),Ru=l(Tr),$i=a(Tr,"P",{});var Sv=s($i);Uu=i(Sv,"Example:"),Sv.forEach(t),Hu=l(Tr),f(ta.$$.fragment,Tr),Tr.forEach(t),Av.forEach(t),ml=l(o),ro=a(o,"H2",{class:!0});var Vl=s(ro);Ao=a(Vl,"A",{id:!0,class:!0,href:!0});var Iv=s(Ao);ji=a(Iv,"SPAN",{});var Nv=s(ji);f(oa.$$.fragment,Nv),Nv.forEach(t),Iv.forEach(t),Qu=l(Vl),Mi=a(Vl,"SPAN",{});var Ov=s(Mi);Vu=i(Ov,"TFBartModel"),Ov.forEach(t),Vl.forEach(t),fl=l(o),be=a(o,"DIV",{class:!0});var $t=s(be);f(na.$$.fragment,$t),Ju=l($t),aa=a($t,"P",{});var Jl=s(aa);Xu=i(Jl,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Zs=a(Jl,"A",{href:!0});var Dv=s(Zs);Ku=i(Dv,"TFPreTrainedModel"),Dv.forEach(t),Zu=i(Jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl.forEach(t),Yu=l($t),sa=a($t,"P",{});var Xl=s(sa);em=i(Xl,"This model is also a "),ra=a(Xl,"A",{href:!0,rel:!0});var Lv=s(ra);tm=i(Lv,"tf.keras.Model"),Lv.forEach(t),om=i(Xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xl.forEach(t),nm=l($t),f(So.$$.fragment,$t),am=l($t),Fe=a($t,"DIV",{class:!0});var jt=s(Fe);f(ia.$$.fragment,jt),sm=l(jt),io=a(jt,"P",{});var wr=s(io);rm=i(wr,"The "),Ys=a(wr,"A",{href:!0});var Gv=s(Ys);im=i(Gv,"TFBartModel"),Gv.forEach(t),dm=i(wr," forward method, overrides the "),Pi=a(wr,"CODE",{});var Wv=s(Pi);lm=i(Wv,"__call__"),Wv.forEach(t),cm=i(wr," special method."),wr.forEach(t),pm=l(jt),f(Io.$$.fragment,jt),hm=l(jt),Ei=a(jt,"P",{});var Rv=s(Ei);um=i(Rv,"Example:"),Rv.forEach(t),mm=l(jt),f(da.$$.fragment,jt),jt.forEach(t),$t.forEach(t),_l=l(o),lo=a(o,"H2",{class:!0});var Kl=s(lo);No=a(Kl,"A",{id:!0,class:!0,href:!0});var Uv=s(No);Ci=a(Uv,"SPAN",{});var Hv=s(Ci);f(la.$$.fragment,Hv),Hv.forEach(t),Uv.forEach(t),fm=l(Kl),Ai=a(Kl,"SPAN",{});var Qv=s(Ai);_m=i(Qv,"TFBartForConditionalGeneration"),Qv.forEach(t),Kl.forEach(t),gl=l(o),ve=a(o,"DIV",{class:!0});var Mt=s(ve);f(ca.$$.fragment,Mt),gm=l(Mt),pa=a(Mt,"P",{});var Zl=s(pa);bm=i(Zl,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),er=a(Zl,"A",{href:!0});var Vv=s(er);vm=i(Vv,"TFPreTrainedModel"),Vv.forEach(t),km=i(Zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zl.forEach(t),ym=l(Mt),ha=a(Mt,"P",{});var Yl=s(ha);Tm=i(Yl,"This model is also a "),ua=a(Yl,"A",{href:!0,rel:!0});var Jv=s(ua);wm=i(Jv,"tf.keras.Model"),Jv.forEach(t),xm=i(Yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl.forEach(t),zm=l(Mt),f(Oo.$$.fragment,Mt),Fm=l(Mt),J=a(Mt,"DIV",{class:!0});var Pe=s(J);f(ma.$$.fragment,Pe),Bm=l(Pe),co=a(Pe,"P",{});var xr=s(co);qm=i(xr,"The "),tr=a(xr,"A",{href:!0});var Xv=s(tr);$m=i(Xv,"TFBartForConditionalGeneration"),Xv.forEach(t),jm=i(xr," forward method, overrides the "),Si=a(xr,"CODE",{});var Kv=s(Si);Mm=i(Kv,"__call__"),Kv.forEach(t),Pm=i(xr," special method."),xr.forEach(t),Em=l(Pe),f(Do.$$.fragment,Pe),Cm=l(Pe),Ii=a(Pe,"P",{});var Zv=s(Ii);Am=i(Zv,"Summarization example:"),Zv.forEach(t),Sm=l(Pe),f(fa.$$.fragment,Pe),Im=l(Pe),Ni=a(Pe,"P",{});var Yv=s(Ni);Nm=i(Yv,"Mask filling example:"),Yv.forEach(t),Om=l(Pe),f(_a.$$.fragment,Pe),Pe.forEach(t),Mt.forEach(t),bl=l(o),po=a(o,"H2",{class:!0});var ec=s(po);Lo=a(ec,"A",{id:!0,class:!0,href:!0});var ek=s(Lo);Oi=a(ek,"SPAN",{});var tk=s(Oi);f(ga.$$.fragment,tk),tk.forEach(t),ek.forEach(t),Dm=l(ec),Di=a(ec,"SPAN",{});var ok=s(Di);Lm=i(ok,"FlaxBartModel"),ok.forEach(t),ec.forEach(t),vl=l(o),O=a(o,"DIV",{class:!0});var ie=s(O);f(ba.$$.fragment,ie),Gm=l(ie),va=a(ie,"P",{});var tc=s(va);Wm=i(tc,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),or=a(tc,"A",{href:!0});var nk=s(or);Rm=i(nk,"FlaxPreTrainedModel"),nk.forEach(t),Um=i(tc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc.forEach(t),Hm=l(ie),ka=a(ie,"P",{});var oc=s(ka);Qm=i(oc,`This model is also a Flax Linen
`),ya=a(oc,"A",{href:!0,rel:!0});var ak=s(ya);Vm=i(ak,"flax.nn.Module"),ak.forEach(t),Jm=i(oc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),oc.forEach(t),Xm=l(ie),Li=a(ie,"P",{});var sk=s(Li);Km=i(sk,"Finally, this model supports inherent JAX features such as:"),sk.forEach(t),Zm=l(ie),rt=a(ie,"UL",{});var en=s(rt);Gi=a(en,"LI",{});var rk=s(Gi);Ta=a(rk,"A",{href:!0,rel:!0});var ik=s(Ta);Ym=i(ik,"Just-In-Time (JIT) compilation"),ik.forEach(t),rk.forEach(t),ef=l(en),Wi=a(en,"LI",{});var dk=s(Wi);wa=a(dk,"A",{href:!0,rel:!0});var lk=s(wa);tf=i(lk,"Automatic Differentiation"),lk.forEach(t),dk.forEach(t),of=l(en),Ri=a(en,"LI",{});var ck=s(Ri);xa=a(ck,"A",{href:!0,rel:!0});var pk=s(xa);nf=i(pk,"Vectorization"),pk.forEach(t),ck.forEach(t),af=l(en),Ui=a(en,"LI",{});var hk=s(Ui);za=a(hk,"A",{href:!0,rel:!0});var uk=s(za);sf=i(uk,"Parallelization"),uk.forEach(t),hk.forEach(t),en.forEach(t),rf=l(ie),Be=a(ie,"DIV",{class:!0});var Pt=s(Be);f(Fa.$$.fragment,Pt),df=l(Pt),ho=a(Pt,"P",{});var zr=s(ho);lf=i(zr,"The "),Hi=a(zr,"CODE",{});var mk=s(Hi);cf=i(mk,"FlaxBartPreTrainedModel"),mk.forEach(t),pf=i(zr,"forward method, overrides the "),Qi=a(zr,"CODE",{});var fk=s(Qi);hf=i(fk,"__call__"),fk.forEach(t),uf=i(zr," special method."),zr.forEach(t),mf=l(Pt),f(Go.$$.fragment,Pt),ff=l(Pt),Vi=a(Pt,"P",{});var _k=s(Vi);_f=i(_k,"Example:"),_k.forEach(t),gf=l(Pt),f(Ba.$$.fragment,Pt),Pt.forEach(t),bf=l(ie),ft=a(ie,"DIV",{class:!0});var Fr=s(ft);f(qa.$$.fragment,Fr),vf=l(Fr),Ji=a(Fr,"P",{});var gk=s(Ji);kf=i(gk,"Example:"),gk.forEach(t),yf=l(Fr),f($a.$$.fragment,Fr),Fr.forEach(t),Tf=l(ie),_t=a(ie,"DIV",{class:!0});var Br=s(_t);f(ja.$$.fragment,Br),wf=l(Br),Xi=a(Br,"P",{});var bk=s(Xi);xf=i(bk,"Example:"),bk.forEach(t),zf=l(Br),f(Ma.$$.fragment,Br),Br.forEach(t),ie.forEach(t),kl=l(o),uo=a(o,"H2",{class:!0});var nc=s(uo);Wo=a(nc,"A",{id:!0,class:!0,href:!0});var vk=s(Wo);Ki=a(vk,"SPAN",{});var kk=s(Ki);f(Pa.$$.fragment,kk),kk.forEach(t),vk.forEach(t),Ff=l(nc),Zi=a(nc,"SPAN",{});var yk=s(Zi);Bf=i(yk,"FlaxBartForConditionalGeneration"),yk.forEach(t),nc.forEach(t),yl=l(o),D=a(o,"DIV",{class:!0});var de=s(D);f(Ea.$$.fragment,de),qf=l(de),Ca=a(de,"P",{});var ac=s(Ca);$f=i(ac,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=a(ac,"A",{href:!0});var Tk=s(nr);jf=i(Tk,"FlaxPreTrainedModel"),Tk.forEach(t),Mf=i(ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac.forEach(t),Pf=l(de),Aa=a(de,"P",{});var sc=s(Aa);Ef=i(sc,`This model is also a Flax Linen
`),Sa=a(sc,"A",{href:!0,rel:!0});var wk=s(Sa);Cf=i(wk,"flax.nn.Module"),wk.forEach(t),Af=i(sc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),sc.forEach(t),Sf=l(de),Yi=a(de,"P",{});var xk=s(Yi);If=i(xk,"Finally, this model supports inherent JAX features such as:"),xk.forEach(t),Nf=l(de),it=a(de,"UL",{});var tn=s(it);ed=a(tn,"LI",{});var zk=s(ed);Ia=a(zk,"A",{href:!0,rel:!0});var Fk=s(Ia);Of=i(Fk,"Just-In-Time (JIT) compilation"),Fk.forEach(t),zk.forEach(t),Df=l(tn),td=a(tn,"LI",{});var Bk=s(td);Na=a(Bk,"A",{href:!0,rel:!0});var qk=s(Na);Lf=i(qk,"Automatic Differentiation"),qk.forEach(t),Bk.forEach(t),Gf=l(tn),od=a(tn,"LI",{});var $k=s(od);Oa=a($k,"A",{href:!0,rel:!0});var jk=s(Oa);Wf=i(jk,"Vectorization"),jk.forEach(t),$k.forEach(t),Rf=l(tn),nd=a(tn,"LI",{});var Mk=s(nd);Da=a(Mk,"A",{href:!0,rel:!0});var Pk=s(Da);Uf=i(Pk,"Parallelization"),Pk.forEach(t),Mk.forEach(t),tn.forEach(t),Hf=l(de),X=a(de,"DIV",{class:!0});var Ee=s(X);f(La.$$.fragment,Ee),Qf=l(Ee),mo=a(Ee,"P",{});var qr=s(mo);Vf=i(qr,"The "),ad=a(qr,"CODE",{});var Ek=s(ad);Jf=i(Ek,"FlaxBartPreTrainedModel"),Ek.forEach(t),Xf=i(qr,"forward method, overrides the "),sd=a(qr,"CODE",{});var Ck=s(sd);Kf=i(Ck,"__call__"),Ck.forEach(t),Zf=i(qr," special method."),qr.forEach(t),Yf=l(Ee),f(Ro.$$.fragment,Ee),e_=l(Ee),rd=a(Ee,"P",{});var Ak=s(rd);t_=i(Ak,"Summarization example:"),Ak.forEach(t),o_=l(Ee),f(Ga.$$.fragment,Ee),n_=l(Ee),id=a(Ee,"P",{});var Sk=s(id);a_=i(Sk,"Mask filling example:"),Sk.forEach(t),s_=l(Ee),f(Wa.$$.fragment,Ee),Ee.forEach(t),r_=l(de),gt=a(de,"DIV",{class:!0});var $r=s(gt);f(Ra.$$.fragment,$r),i_=l($r),dd=a($r,"P",{});var Ik=s(dd);d_=i(Ik,"Example:"),Ik.forEach(t),l_=l($r),f(Ua.$$.fragment,$r),$r.forEach(t),c_=l(de),bt=a(de,"DIV",{class:!0});var jr=s(bt);f(Ha.$$.fragment,jr),p_=l(jr),ld=a(jr,"P",{});var Nk=s(ld);h_=i(Nk,"Example:"),Nk.forEach(t),u_=l(jr),f(Qa.$$.fragment,jr),jr.forEach(t),de.forEach(t),Tl=l(o),fo=a(o,"H2",{class:!0});var rc=s(fo);Uo=a(rc,"A",{id:!0,class:!0,href:!0});var Ok=s(Uo);cd=a(Ok,"SPAN",{});var Dk=s(cd);f(Va.$$.fragment,Dk),Dk.forEach(t),Ok.forEach(t),m_=l(rc),pd=a(rc,"SPAN",{});var Lk=s(pd);f_=i(Lk,"FlaxBartForSequenceClassification"),Lk.forEach(t),rc.forEach(t),wl=l(o),A=a(o,"DIV",{class:!0});var K=s(A);f(Ja.$$.fragment,K),__=l(K),hd=a(K,"P",{});var Gk=s(hd);g_=i(Gk,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Gk.forEach(t),b_=l(K),Xa=a(K,"P",{});var ic=s(Xa);v_=i(ic,"This model inherits from "),ar=a(ic,"A",{href:!0});var Wk=s(ar);k_=i(Wk,"FlaxPreTrainedModel"),Wk.forEach(t),y_=i(ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),T_=l(K),Ka=a(K,"P",{});var dc=s(Ka);w_=i(dc,`This model is also a Flax Linen
`),Za=a(dc,"A",{href:!0,rel:!0});var Rk=s(Za);x_=i(Rk,"flax.nn.Module"),Rk.forEach(t),z_=i(dc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dc.forEach(t),F_=l(K),ud=a(K,"P",{});var Uk=s(ud);B_=i(Uk,"Finally, this model supports inherent JAX features such as:"),Uk.forEach(t),q_=l(K),dt=a(K,"UL",{});var on=s(dt);md=a(on,"LI",{});var Hk=s(md);Ya=a(Hk,"A",{href:!0,rel:!0});var Qk=s(Ya);$_=i(Qk,"Just-In-Time (JIT) compilation"),Qk.forEach(t),Hk.forEach(t),j_=l(on),fd=a(on,"LI",{});var Vk=s(fd);es=a(Vk,"A",{href:!0,rel:!0});var Jk=s(es);M_=i(Jk,"Automatic Differentiation"),Jk.forEach(t),Vk.forEach(t),P_=l(on),_d=a(on,"LI",{});var Xk=s(_d);ts=a(Xk,"A",{href:!0,rel:!0});var Kk=s(ts);E_=i(Kk,"Vectorization"),Kk.forEach(t),Xk.forEach(t),C_=l(on),gd=a(on,"LI",{});var Zk=s(gd);os=a(Zk,"A",{href:!0,rel:!0});var Yk=s(os);A_=i(Yk,"Parallelization"),Yk.forEach(t),Zk.forEach(t),on.forEach(t),S_=l(K),qe=a(K,"DIV",{class:!0});var Et=s(qe);f(ns.$$.fragment,Et),I_=l(Et),_o=a(Et,"P",{});var Mr=s(_o);N_=i(Mr,"The "),bd=a(Mr,"CODE",{});var ey=s(bd);O_=i(ey,"FlaxBartPreTrainedModel"),ey.forEach(t),D_=i(Mr,"forward method, overrides the "),vd=a(Mr,"CODE",{});var ty=s(vd);L_=i(ty,"__call__"),ty.forEach(t),G_=i(Mr," special method."),Mr.forEach(t),W_=l(Et),f(Ho.$$.fragment,Et),R_=l(Et),kd=a(Et,"P",{});var oy=s(kd);U_=i(oy,"Example:"),oy.forEach(t),H_=l(Et),f(as.$$.fragment,Et),Et.forEach(t),Q_=l(K),vt=a(K,"DIV",{class:!0});var Pr=s(vt);f(ss.$$.fragment,Pr),V_=l(Pr),yd=a(Pr,"P",{});var ny=s(yd);J_=i(ny,"Example:"),ny.forEach(t),X_=l(Pr),f(rs.$$.fragment,Pr),Pr.forEach(t),K_=l(K),kt=a(K,"DIV",{class:!0});var Er=s(kt);f(is.$$.fragment,Er),Z_=l(Er),Td=a(Er,"P",{});var ay=s(Td);Y_=i(ay,"Example:"),ay.forEach(t),eg=l(Er),f(ds.$$.fragment,Er),Er.forEach(t),K.forEach(t),xl=l(o),go=a(o,"H2",{class:!0});var lc=s(go);Qo=a(lc,"A",{id:!0,class:!0,href:!0});var sy=s(Qo);wd=a(sy,"SPAN",{});var ry=s(wd);f(ls.$$.fragment,ry),ry.forEach(t),sy.forEach(t),tg=l(lc),xd=a(lc,"SPAN",{});var iy=s(xd);og=i(iy,"FlaxBartForQuestionAnswering"),iy.forEach(t),lc.forEach(t),zl=l(o),S=a(o,"DIV",{class:!0});var Z=s(S);f(cs.$$.fragment,Z),ng=l(Z),bo=a(Z,"P",{});var Cr=s(bo);ag=i(Cr,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),zd=a(Cr,"CODE",{});var dy=s(zd);sg=i(dy,"span start logits"),dy.forEach(t),rg=i(Cr," and "),Fd=a(Cr,"CODE",{});var ly=s(Fd);ig=i(ly,"span end logits"),ly.forEach(t),dg=i(Cr,")."),Cr.forEach(t),lg=l(Z),ps=a(Z,"P",{});var cc=s(ps);cg=i(cc,"This model inherits from "),sr=a(cc,"A",{href:!0});var cy=s(sr);pg=i(cy,"FlaxPreTrainedModel"),cy.forEach(t),hg=i(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),ug=l(Z),hs=a(Z,"P",{});var pc=s(hs);mg=i(pc,`This model is also a Flax Linen
`),us=a(pc,"A",{href:!0,rel:!0});var py=s(us);fg=i(py,"flax.nn.Module"),py.forEach(t),_g=i(pc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pc.forEach(t),gg=l(Z),Bd=a(Z,"P",{});var hy=s(Bd);bg=i(hy,"Finally, this model supports inherent JAX features such as:"),hy.forEach(t),vg=l(Z),lt=a(Z,"UL",{});var nn=s(lt);qd=a(nn,"LI",{});var uy=s(qd);ms=a(uy,"A",{href:!0,rel:!0});var my=s(ms);kg=i(my,"Just-In-Time (JIT) compilation"),my.forEach(t),uy.forEach(t),yg=l(nn),$d=a(nn,"LI",{});var fy=s($d);fs=a(fy,"A",{href:!0,rel:!0});var _y=s(fs);Tg=i(_y,"Automatic Differentiation"),_y.forEach(t),fy.forEach(t),wg=l(nn),jd=a(nn,"LI",{});var gy=s(jd);_s=a(gy,"A",{href:!0,rel:!0});var by=s(_s);xg=i(by,"Vectorization"),by.forEach(t),gy.forEach(t),zg=l(nn),Md=a(nn,"LI",{});var vy=s(Md);gs=a(vy,"A",{href:!0,rel:!0});var ky=s(gs);Fg=i(ky,"Parallelization"),ky.forEach(t),vy.forEach(t),nn.forEach(t),Bg=l(Z),$e=a(Z,"DIV",{class:!0});var Ct=s($e);f(bs.$$.fragment,Ct),qg=l(Ct),vo=a(Ct,"P",{});var Ar=s(vo);$g=i(Ar,"The "),Pd=a(Ar,"CODE",{});var yy=s(Pd);jg=i(yy,"FlaxBartPreTrainedModel"),yy.forEach(t),Mg=i(Ar,"forward method, overrides the "),Ed=a(Ar,"CODE",{});var Ty=s(Ed);Pg=i(Ty,"__call__"),Ty.forEach(t),Eg=i(Ar," special method."),Ar.forEach(t),Cg=l(Ct),f(Vo.$$.fragment,Ct),Ag=l(Ct),Cd=a(Ct,"P",{});var wy=s(Cd);Sg=i(wy,"Example:"),wy.forEach(t),Ig=l(Ct),f(vs.$$.fragment,Ct),Ct.forEach(t),Ng=l(Z),yt=a(Z,"DIV",{class:!0});var Sr=s(yt);f(ks.$$.fragment,Sr),Og=l(Sr),Ad=a(Sr,"P",{});var xy=s(Ad);Dg=i(xy,"Example:"),xy.forEach(t),Lg=l(Sr),f(ys.$$.fragment,Sr),Sr.forEach(t),Gg=l(Z),Tt=a(Z,"DIV",{class:!0});var Ir=s(Tt);f(Ts.$$.fragment,Ir),Wg=l(Ir),Sd=a(Ir,"P",{});var zy=s(Sd);Rg=i(zy,"Example:"),zy.forEach(t),Ug=l(Ir),f(ws.$$.fragment,Ir),Ir.forEach(t),Z.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Wy)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(k,"class","relative group"),c(ce,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ce,"rel","nofollow"),c(I,"id","overview"),c(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(I,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/abs/1910.13461"),c(W,"rel","nofollow"),c(Ie,"href","https://huggingface.co/sshleifer"),c(Ie,"rel","nofollow"),c(Ne,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Ne,"rel","nofollow"),c(Te,"id","examples"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#examples"),c(me,"class","relative group"),c(sn,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(sn,"rel","nofollow"),c($s,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(rn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(rn,"rel","nofollow"),c(dn,"href","https://huggingface.co/models?search=distilbart"),c(dn,"rel","nofollow"),c(ln,"href","https://arxiv.org/abs/2010.13002"),c(ln,"rel","nofollow"),c(yo,"id","implementation-notes"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#implementation-notes"),c(Dt,"class","relative group"),c(js,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),c(Ms,"href","/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(Ps,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartModel"),c(Cs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(To,"id","mask-filling"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#mask-filling"),c(Rt,"class","relative group"),c(wo,"id","transformers.BartConfig"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.BartConfig"),c(Ut,"class","relative group"),c(As,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartModel"),c(fn,"href","https://huggingface.co/facebook/bart-large"),c(fn,"rel","nofollow"),c(Ss,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Is,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(fe,"class","docstring"),c(xo,"id","transformers.BartTokenizer"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.BartTokenizer"),c(Vt,"class","relative group"),c(Ns,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),c(Os,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Ds,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),c(at,"class","docstring"),c(zo,"id","transformers.BartTokenizerFast"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.BartTokenizerFast"),c(Jt,"class","relative group"),c(Ls,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizerFast"),c(Gs,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Ws,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(st,"class","docstring"),c(Fo,"id","transformers.BartModel"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.BartModel"),c(Xt,"class","relative group"),c(Rs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fn,"rel","nofollow"),c(Us,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartModel"),c(xe,"class","docstring"),c(Le,"class","docstring"),c(qo,"id","transformers.BartForConditionalGeneration"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BartForConditionalGeneration"),c(Zt,"class","relative group"),c(Hs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(En,"rel","nofollow"),c(Qs,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Q,"class","docstring"),c(Ge,"class","docstring"),c(jo,"id","transformers.BartForSequenceClassification"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BartForSequenceClassification"),c(eo,"class","relative group"),c(Vs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(Js,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForSequenceClassification"),c(V,"class","docstring"),c(_e,"class","docstring"),c(Po,"id","transformers.BartForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.BartForQuestionAnswering"),c(oo,"class","relative group"),c(Xs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(Ks,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(ze,"class","docstring"),c(ge,"class","docstring"),c(Co,"id","transformers.BartForCausalLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BartForCausalLM"),c(so,"class","relative group"),c(mt,"class","docstring"),c(Yn,"class","docstring"),c(Ao,"id","transformers.TFBartModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFBartModel"),c(ro,"class","relative group"),c(Zs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ra,"rel","nofollow"),c(Ys,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.TFBartModel"),c(Fe,"class","docstring"),c(be,"class","docstring"),c(No,"id","transformers.TFBartForConditionalGeneration"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.TFBartForConditionalGeneration"),c(lo,"class","relative group"),c(er,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ua,"rel","nofollow"),c(tr,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(J,"class","docstring"),c(ve,"class","docstring"),c(Lo,"id","transformers.FlaxBartModel"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.FlaxBartModel"),c(po,"class","relative group"),c(or,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ya,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ya,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ta,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wa,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(za,"rel","nofollow"),c(Be,"class","docstring"),c(ft,"class","docstring"),c(_t,"class","docstring"),c(O,"class","docstring"),c(Wo,"id","transformers.FlaxBartForConditionalGeneration"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBartForConditionalGeneration"),c(uo,"class","relative group"),c(nr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Sa,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Sa,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ia,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Na,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Oa,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Da,"rel","nofollow"),c(X,"class","docstring"),c(gt,"class","docstring"),c(bt,"class","docstring"),c(D,"class","docstring"),c(Uo,"id","transformers.FlaxBartForSequenceClassification"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.FlaxBartForSequenceClassification"),c(fo,"class","relative group"),c(ar,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Za,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Za,"rel","nofollow"),c(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ya,"rel","nofollow"),c(es,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(es,"rel","nofollow"),c(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ts,"rel","nofollow"),c(os,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(os,"rel","nofollow"),c(qe,"class","docstring"),c(vt,"class","docstring"),c(kt,"class","docstring"),c(A,"class","docstring"),c(Qo,"id","transformers.FlaxBartForQuestionAnswering"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.FlaxBartForQuestionAnswering"),c(go,"class","relative group"),c(sr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(us,"rel","nofollow"),c(ms,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ms,"rel","nofollow"),c(fs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fs,"rel","nofollow"),c(_s,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_s,"rel","nofollow"),c(gs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gs,"rel","nofollow"),c($e,"class","docstring"),c(yt,"class","docstring"),c(Tt,"class","docstring"),c(S,"class","docstring")},m(o,h){e(document.head,p),u(o,F,h),u(o,k,h),e(k,w),e(w,z),_(T,z,null),e(k,y),e(k,B),e(B,He),u(o,ke,h),u(o,$,h),e($,Ce),e(Ce,le),e($,Qe),e($,ce),e(ce,pe),e($,Ve),u(o,We,h),u(o,G,h),e(G,I),e(I,Ae),_(Y,Ae,null),e(G,P),e(G,C),e(C,Je),u(o,ae,h),u(o,se,h),e(se,Xe),e(se,W),e(W,Ke),e(se,Ze),u(o,N,h),u(o,ye,h),e(ye,he),u(o,Re,h),u(o,H,h),e(H,ee),e(ee,Ye),e(H,et),e(H,R),e(R,tt),e(H,ue),e(H,Se),e(Se,x),u(o,j,h),u(o,L,h),e(L,At),e(L,Ie),e(Ie,te),e(L,St),e(L,Ne),e(Ne,It),e(L,oe),u(o,re,h),u(o,me,h),e(me,Te),e(Te,ne),_(Oe,ne,null),e(me,Nt),e(me,De),e(De,Ot),u(o,Hd,h),u(o,ct,h),e(ct,an),e(an,hc),e(an,sn),e(sn,uc),e(an,mc),e(ct,fc),e(ct,ot),e(ot,_c),e(ot,$s),e($s,gc),e(ot,bc),e(ot,Nr),e(Nr,vc),e(ot,kc),e(ot,rn),e(rn,yc),e(ot,Tc),e(ct,wc),e(ct,ko),e(ko,dn),e(dn,xc),e(ko,zc),e(ko,ln),e(ln,Fc),e(ko,Bc),u(o,Qd,h),u(o,Dt,h),e(Dt,yo),e(yo,Or),_(cn,Or,null),e(Dt,qc),e(Dt,Dr),e(Dr,$c),u(o,Vd,h),u(o,we,h),e(we,nt),e(nt,jc),e(nt,Lr),e(Lr,Mc),e(nt,Pc),e(nt,js),e(js,Ec),e(nt,Cc),e(nt,Ms),e(Ms,Ac),e(nt,Sc),e(we,Ic),e(we,Lt),e(Lt,Nc),e(Lt,Ps),e(Ps,Oc),e(Lt,Dc),e(Lt,Gr),e(Gr,Lc),e(Lt,Gc),e(we,Wc),e(we,Gt),e(Gt,Rc),e(Gt,Wr),e(Wr,Uc),e(Gt,Hc),e(Gt,Rr),e(Rr,Qc),e(Gt,Vc),e(we,Jc),e(we,Es),e(Es,Cs),e(Cs,Xc),e(Es,Kc),e(we,Zc),e(we,Wt),e(Wt,Yc),e(Wt,Ur),e(Ur,ep),e(Wt,tp),e(Wt,Hr),e(Hr,op),e(Wt,np),u(o,Jd,h),u(o,Rt,h),e(Rt,To),e(To,Qr),_(pn,Qr,null),e(Rt,ap),e(Rt,Vr),e(Vr,sp),u(o,Xd,h),u(o,pt,h),e(pt,rp),e(pt,Jr),e(Jr,ip),e(pt,dp),e(pt,Xr),e(Xr,lp),e(pt,cp),u(o,Kd,h),_(hn,o,h),u(o,Zd,h),u(o,Ut,h),e(Ut,wo),e(wo,Kr),_(un,Kr,null),e(Ut,pp),e(Ut,Zr),e(Zr,hp),u(o,Yd,h),u(o,fe,h),_(mn,fe,null),e(fe,up),e(fe,Ht),e(Ht,mp),e(Ht,As),e(As,fp),e(Ht,_p),e(Ht,fn),e(fn,gp),e(Ht,bp),e(fe,vp),e(fe,Qt),e(Qt,kp),e(Qt,Ss),e(Ss,yp),e(Qt,Tp),e(Qt,Is),e(Is,wp),e(Qt,xp),e(fe,zp),e(fe,Yr),e(Yr,Fp),e(fe,Bp),_(_n,fe,null),u(o,el,h),u(o,Vt,h),e(Vt,xo),e(xo,ei),_(gn,ei,null),e(Vt,qp),e(Vt,ti),e(ti,$p),u(o,tl,h),u(o,at,h),_(bn,at,null),e(at,jp),e(at,oi),e(oi,Mp),e(at,Pp),e(at,ht),e(ht,Ns),e(Ns,Ep),e(ht,Cp),e(ht,Os),e(Os,Ap),e(ht,Sp),e(ht,Ds),e(Ds,Ip),e(ht,Np),u(o,ol,h),u(o,Jt,h),e(Jt,zo),e(zo,ni),_(vn,ni,null),e(Jt,Op),e(Jt,ai),e(ai,Dp),u(o,nl,h),u(o,st,h),_(kn,st,null),e(st,Lp),e(st,yn),e(yn,Gp),e(yn,si),e(si,Wp),e(yn,Rp),e(st,Up),e(st,ut),e(ut,Ls),e(Ls,Hp),e(ut,Qp),e(ut,Gs),e(Gs,Vp),e(ut,Jp),e(ut,Ws),e(Ws,Xp),e(ut,Kp),u(o,al,h),u(o,Xt,h),e(Xt,Fo),e(Fo,ri),_(Tn,ri,null),e(Xt,Zp),e(Xt,ii),e(ii,Yp),u(o,sl,h),u(o,Le,h),_(wn,Le,null),e(Le,eh),e(Le,xn),e(xn,th),e(xn,Rs),e(Rs,oh),e(xn,nh),e(Le,ah),e(Le,zn),e(zn,sh),e(zn,Fn),e(Fn,rh),e(zn,ih),e(Le,dh),e(Le,xe),_(Bn,xe,null),e(xe,lh),e(xe,Kt),e(Kt,ch),e(Kt,Us),e(Us,ph),e(Kt,hh),e(Kt,di),e(di,uh),e(Kt,mh),e(xe,fh),_(Bo,xe,null),e(xe,_h),e(xe,li),e(li,gh),e(xe,bh),_(qn,xe,null),u(o,rl,h),u(o,Zt,h),e(Zt,qo),e(qo,ci),_($n,ci,null),e(Zt,vh),e(Zt,pi),e(pi,kh),u(o,il,h),u(o,Ge,h),_(jn,Ge,null),e(Ge,yh),e(Ge,Mn),e(Mn,Th),e(Mn,Hs),e(Hs,wh),e(Mn,xh),e(Ge,zh),e(Ge,Pn),e(Pn,Fh),e(Pn,En),e(En,Bh),e(Pn,qh),e(Ge,$h),e(Ge,Q),_(Cn,Q,null),e(Q,jh),e(Q,Yt),e(Yt,Mh),e(Yt,Qs),e(Qs,Ph),e(Yt,Eh),e(Yt,hi),e(hi,Ch),e(Yt,Ah),e(Q,Sh),_($o,Q,null),e(Q,Ih),e(Q,ui),e(ui,Nh),e(Q,Oh),_(An,Q,null),e(Q,Dh),e(Q,mi),e(mi,Lh),e(Q,Gh),_(Sn,Q,null),u(o,dl,h),u(o,eo,h),e(eo,jo),e(jo,fi),_(In,fi,null),e(eo,Wh),e(eo,_i),e(_i,Rh),u(o,ll,h),u(o,_e,h),_(Nn,_e,null),e(_e,Uh),e(_e,gi),e(gi,Hh),e(_e,Qh),e(_e,On),e(On,Vh),e(On,Vs),e(Vs,Jh),e(On,Xh),e(_e,Kh),e(_e,Dn),e(Dn,Zh),e(Dn,Ln),e(Ln,Yh),e(Dn,eu),e(_e,tu),e(_e,V),_(Gn,V,null),e(V,ou),e(V,to),e(to,nu),e(to,Js),e(Js,au),e(to,su),e(to,bi),e(bi,ru),e(to,iu),e(V,du),_(Mo,V,null),e(V,lu),e(V,vi),e(vi,cu),e(V,pu),_(Wn,V,null),e(V,hu),e(V,ki),e(ki,uu),e(V,mu),_(Rn,V,null),u(o,cl,h),u(o,oo,h),e(oo,Po),e(Po,yi),_(Un,yi,null),e(oo,fu),e(oo,Ti),e(Ti,_u),u(o,pl,h),u(o,ge,h),_(Hn,ge,null),e(ge,gu),e(ge,no),e(no,bu),e(no,wi),e(wi,vu),e(no,ku),e(no,xi),e(xi,yu),e(no,Tu),e(ge,wu),e(ge,Qn),e(Qn,xu),e(Qn,Xs),e(Xs,zu),e(Qn,Fu),e(ge,Bu),e(ge,Vn),e(Vn,qu),e(Vn,Jn),e(Jn,$u),e(Vn,ju),e(ge,Mu),e(ge,ze),_(Xn,ze,null),e(ze,Pu),e(ze,ao),e(ao,Eu),e(ao,Ks),e(Ks,Cu),e(ao,Au),e(ao,zi),e(zi,Su),e(ao,Iu),e(ze,Nu),_(Eo,ze,null),e(ze,Ou),e(ze,Fi),e(Fi,Du),e(ze,Lu),_(Kn,ze,null),u(o,hl,h),u(o,so,h),e(so,Co),e(Co,Bi),_(Zn,Bi,null),e(so,Gu),e(so,qi),e(qi,Wu),u(o,ul,h),u(o,Yn,h),e(Yn,mt),_(ea,mt,null),e(mt,Ru),e(mt,$i),e($i,Uu),e(mt,Hu),_(ta,mt,null),u(o,ml,h),u(o,ro,h),e(ro,Ao),e(Ao,ji),_(oa,ji,null),e(ro,Qu),e(ro,Mi),e(Mi,Vu),u(o,fl,h),u(o,be,h),_(na,be,null),e(be,Ju),e(be,aa),e(aa,Xu),e(aa,Zs),e(Zs,Ku),e(aa,Zu),e(be,Yu),e(be,sa),e(sa,em),e(sa,ra),e(ra,tm),e(sa,om),e(be,nm),_(So,be,null),e(be,am),e(be,Fe),_(ia,Fe,null),e(Fe,sm),e(Fe,io),e(io,rm),e(io,Ys),e(Ys,im),e(io,dm),e(io,Pi),e(Pi,lm),e(io,cm),e(Fe,pm),_(Io,Fe,null),e(Fe,hm),e(Fe,Ei),e(Ei,um),e(Fe,mm),_(da,Fe,null),u(o,_l,h),u(o,lo,h),e(lo,No),e(No,Ci),_(la,Ci,null),e(lo,fm),e(lo,Ai),e(Ai,_m),u(o,gl,h),u(o,ve,h),_(ca,ve,null),e(ve,gm),e(ve,pa),e(pa,bm),e(pa,er),e(er,vm),e(pa,km),e(ve,ym),e(ve,ha),e(ha,Tm),e(ha,ua),e(ua,wm),e(ha,xm),e(ve,zm),_(Oo,ve,null),e(ve,Fm),e(ve,J),_(ma,J,null),e(J,Bm),e(J,co),e(co,qm),e(co,tr),e(tr,$m),e(co,jm),e(co,Si),e(Si,Mm),e(co,Pm),e(J,Em),_(Do,J,null),e(J,Cm),e(J,Ii),e(Ii,Am),e(J,Sm),_(fa,J,null),e(J,Im),e(J,Ni),e(Ni,Nm),e(J,Om),_(_a,J,null),u(o,bl,h),u(o,po,h),e(po,Lo),e(Lo,Oi),_(ga,Oi,null),e(po,Dm),e(po,Di),e(Di,Lm),u(o,vl,h),u(o,O,h),_(ba,O,null),e(O,Gm),e(O,va),e(va,Wm),e(va,or),e(or,Rm),e(va,Um),e(O,Hm),e(O,ka),e(ka,Qm),e(ka,ya),e(ya,Vm),e(ka,Jm),e(O,Xm),e(O,Li),e(Li,Km),e(O,Zm),e(O,rt),e(rt,Gi),e(Gi,Ta),e(Ta,Ym),e(rt,ef),e(rt,Wi),e(Wi,wa),e(wa,tf),e(rt,of),e(rt,Ri),e(Ri,xa),e(xa,nf),e(rt,af),e(rt,Ui),e(Ui,za),e(za,sf),e(O,rf),e(O,Be),_(Fa,Be,null),e(Be,df),e(Be,ho),e(ho,lf),e(ho,Hi),e(Hi,cf),e(ho,pf),e(ho,Qi),e(Qi,hf),e(ho,uf),e(Be,mf),_(Go,Be,null),e(Be,ff),e(Be,Vi),e(Vi,_f),e(Be,gf),_(Ba,Be,null),e(O,bf),e(O,ft),_(qa,ft,null),e(ft,vf),e(ft,Ji),e(Ji,kf),e(ft,yf),_($a,ft,null),e(O,Tf),e(O,_t),_(ja,_t,null),e(_t,wf),e(_t,Xi),e(Xi,xf),e(_t,zf),_(Ma,_t,null),u(o,kl,h),u(o,uo,h),e(uo,Wo),e(Wo,Ki),_(Pa,Ki,null),e(uo,Ff),e(uo,Zi),e(Zi,Bf),u(o,yl,h),u(o,D,h),_(Ea,D,null),e(D,qf),e(D,Ca),e(Ca,$f),e(Ca,nr),e(nr,jf),e(Ca,Mf),e(D,Pf),e(D,Aa),e(Aa,Ef),e(Aa,Sa),e(Sa,Cf),e(Aa,Af),e(D,Sf),e(D,Yi),e(Yi,If),e(D,Nf),e(D,it),e(it,ed),e(ed,Ia),e(Ia,Of),e(it,Df),e(it,td),e(td,Na),e(Na,Lf),e(it,Gf),e(it,od),e(od,Oa),e(Oa,Wf),e(it,Rf),e(it,nd),e(nd,Da),e(Da,Uf),e(D,Hf),e(D,X),_(La,X,null),e(X,Qf),e(X,mo),e(mo,Vf),e(mo,ad),e(ad,Jf),e(mo,Xf),e(mo,sd),e(sd,Kf),e(mo,Zf),e(X,Yf),_(Ro,X,null),e(X,e_),e(X,rd),e(rd,t_),e(X,o_),_(Ga,X,null),e(X,n_),e(X,id),e(id,a_),e(X,s_),_(Wa,X,null),e(D,r_),e(D,gt),_(Ra,gt,null),e(gt,i_),e(gt,dd),e(dd,d_),e(gt,l_),_(Ua,gt,null),e(D,c_),e(D,bt),_(Ha,bt,null),e(bt,p_),e(bt,ld),e(ld,h_),e(bt,u_),_(Qa,bt,null),u(o,Tl,h),u(o,fo,h),e(fo,Uo),e(Uo,cd),_(Va,cd,null),e(fo,m_),e(fo,pd),e(pd,f_),u(o,wl,h),u(o,A,h),_(Ja,A,null),e(A,__),e(A,hd),e(hd,g_),e(A,b_),e(A,Xa),e(Xa,v_),e(Xa,ar),e(ar,k_),e(Xa,y_),e(A,T_),e(A,Ka),e(Ka,w_),e(Ka,Za),e(Za,x_),e(Ka,z_),e(A,F_),e(A,ud),e(ud,B_),e(A,q_),e(A,dt),e(dt,md),e(md,Ya),e(Ya,$_),e(dt,j_),e(dt,fd),e(fd,es),e(es,M_),e(dt,P_),e(dt,_d),e(_d,ts),e(ts,E_),e(dt,C_),e(dt,gd),e(gd,os),e(os,A_),e(A,S_),e(A,qe),_(ns,qe,null),e(qe,I_),e(qe,_o),e(_o,N_),e(_o,bd),e(bd,O_),e(_o,D_),e(_o,vd),e(vd,L_),e(_o,G_),e(qe,W_),_(Ho,qe,null),e(qe,R_),e(qe,kd),e(kd,U_),e(qe,H_),_(as,qe,null),e(A,Q_),e(A,vt),_(ss,vt,null),e(vt,V_),e(vt,yd),e(yd,J_),e(vt,X_),_(rs,vt,null),e(A,K_),e(A,kt),_(is,kt,null),e(kt,Z_),e(kt,Td),e(Td,Y_),e(kt,eg),_(ds,kt,null),u(o,xl,h),u(o,go,h),e(go,Qo),e(Qo,wd),_(ls,wd,null),e(go,tg),e(go,xd),e(xd,og),u(o,zl,h),u(o,S,h),_(cs,S,null),e(S,ng),e(S,bo),e(bo,ag),e(bo,zd),e(zd,sg),e(bo,rg),e(bo,Fd),e(Fd,ig),e(bo,dg),e(S,lg),e(S,ps),e(ps,cg),e(ps,sr),e(sr,pg),e(ps,hg),e(S,ug),e(S,hs),e(hs,mg),e(hs,us),e(us,fg),e(hs,_g),e(S,gg),e(S,Bd),e(Bd,bg),e(S,vg),e(S,lt),e(lt,qd),e(qd,ms),e(ms,kg),e(lt,yg),e(lt,$d),e($d,fs),e(fs,Tg),e(lt,wg),e(lt,jd),e(jd,_s),e(_s,xg),e(lt,zg),e(lt,Md),e(Md,gs),e(gs,Fg),e(S,Bg),e(S,$e),_(bs,$e,null),e($e,qg),e($e,vo),e(vo,$g),e(vo,Pd),e(Pd,jg),e(vo,Mg),e(vo,Ed),e(Ed,Pg),e(vo,Eg),e($e,Cg),_(Vo,$e,null),e($e,Ag),e($e,Cd),e(Cd,Sg),e($e,Ig),_(vs,$e,null),e(S,Ng),e(S,yt),_(ks,yt,null),e(yt,Og),e(yt,Ad),e(Ad,Dg),e(yt,Lg),_(ys,yt,null),e(S,Gg),e(S,Tt),_(Ts,Tt,null),e(Tt,Wg),e(Tt,Sd),e(Sd,Rg),e(Tt,Ug),_(ws,Tt,null),Fl=!0},p(o,[h]){const xs={};h&2&&(xs.$$scope={dirty:h,ctx:o}),Bo.$set(xs);const Id={};h&2&&(Id.$$scope={dirty:h,ctx:o}),$o.$set(Id);const Nd={};h&2&&(Nd.$$scope={dirty:h,ctx:o}),Mo.$set(Nd);const Od={};h&2&&(Od.$$scope={dirty:h,ctx:o}),Eo.$set(Od);const Jo={};h&2&&(Jo.$$scope={dirty:h,ctx:o}),So.$set(Jo);const Dd={};h&2&&(Dd.$$scope={dirty:h,ctx:o}),Io.$set(Dd);const Ld={};h&2&&(Ld.$$scope={dirty:h,ctx:o}),Oo.$set(Ld);const zs={};h&2&&(zs.$$scope={dirty:h,ctx:o}),Do.$set(zs);const Gd={};h&2&&(Gd.$$scope={dirty:h,ctx:o}),Go.$set(Gd);const Wd={};h&2&&(Wd.$$scope={dirty:h,ctx:o}),Ro.$set(Wd);const Rd={};h&2&&(Rd.$$scope={dirty:h,ctx:o}),Ho.$set(Rd);const Fs={};h&2&&(Fs.$$scope={dirty:h,ctx:o}),Vo.$set(Fs)},i(o){Fl||(g(T.$$.fragment,o),g(Y.$$.fragment,o),g(Oe.$$.fragment,o),g(cn.$$.fragment,o),g(pn.$$.fragment,o),g(hn.$$.fragment,o),g(un.$$.fragment,o),g(mn.$$.fragment,o),g(_n.$$.fragment,o),g(gn.$$.fragment,o),g(bn.$$.fragment,o),g(vn.$$.fragment,o),g(kn.$$.fragment,o),g(Tn.$$.fragment,o),g(wn.$$.fragment,o),g(Bn.$$.fragment,o),g(Bo.$$.fragment,o),g(qn.$$.fragment,o),g($n.$$.fragment,o),g(jn.$$.fragment,o),g(Cn.$$.fragment,o),g($o.$$.fragment,o),g(An.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(Nn.$$.fragment,o),g(Gn.$$.fragment,o),g(Mo.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Xn.$$.fragment,o),g(Eo.$$.fragment,o),g(Kn.$$.fragment,o),g(Zn.$$.fragment,o),g(ea.$$.fragment,o),g(ta.$$.fragment,o),g(oa.$$.fragment,o),g(na.$$.fragment,o),g(So.$$.fragment,o),g(ia.$$.fragment,o),g(Io.$$.fragment,o),g(da.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(Oo.$$.fragment,o),g(ma.$$.fragment,o),g(Do.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ba.$$.fragment,o),g(Fa.$$.fragment,o),g(Go.$$.fragment,o),g(Ba.$$.fragment,o),g(qa.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ma.$$.fragment,o),g(Pa.$$.fragment,o),g(Ea.$$.fragment,o),g(La.$$.fragment,o),g(Ro.$$.fragment,o),g(Ga.$$.fragment,o),g(Wa.$$.fragment,o),g(Ra.$$.fragment,o),g(Ua.$$.fragment,o),g(Ha.$$.fragment,o),g(Qa.$$.fragment,o),g(Va.$$.fragment,o),g(Ja.$$.fragment,o),g(ns.$$.fragment,o),g(Ho.$$.fragment,o),g(as.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(bs.$$.fragment,o),g(Vo.$$.fragment,o),g(vs.$$.fragment,o),g(ks.$$.fragment,o),g(ys.$$.fragment,o),g(Ts.$$.fragment,o),g(ws.$$.fragment,o),Fl=!0)},o(o){b(T.$$.fragment,o),b(Y.$$.fragment,o),b(Oe.$$.fragment,o),b(cn.$$.fragment,o),b(pn.$$.fragment,o),b(hn.$$.fragment,o),b(un.$$.fragment,o),b(mn.$$.fragment,o),b(_n.$$.fragment,o),b(gn.$$.fragment,o),b(bn.$$.fragment,o),b(vn.$$.fragment,o),b(kn.$$.fragment,o),b(Tn.$$.fragment,o),b(wn.$$.fragment,o),b(Bn.$$.fragment,o),b(Bo.$$.fragment,o),b(qn.$$.fragment,o),b($n.$$.fragment,o),b(jn.$$.fragment,o),b(Cn.$$.fragment,o),b($o.$$.fragment,o),b(An.$$.fragment,o),b(Sn.$$.fragment,o),b(In.$$.fragment,o),b(Nn.$$.fragment,o),b(Gn.$$.fragment,o),b(Mo.$$.fragment,o),b(Wn.$$.fragment,o),b(Rn.$$.fragment,o),b(Un.$$.fragment,o),b(Hn.$$.fragment,o),b(Xn.$$.fragment,o),b(Eo.$$.fragment,o),b(Kn.$$.fragment,o),b(Zn.$$.fragment,o),b(ea.$$.fragment,o),b(ta.$$.fragment,o),b(oa.$$.fragment,o),b(na.$$.fragment,o),b(So.$$.fragment,o),b(ia.$$.fragment,o),b(Io.$$.fragment,o),b(da.$$.fragment,o),b(la.$$.fragment,o),b(ca.$$.fragment,o),b(Oo.$$.fragment,o),b(ma.$$.fragment,o),b(Do.$$.fragment,o),b(fa.$$.fragment,o),b(_a.$$.fragment,o),b(ga.$$.fragment,o),b(ba.$$.fragment,o),b(Fa.$$.fragment,o),b(Go.$$.fragment,o),b(Ba.$$.fragment,o),b(qa.$$.fragment,o),b($a.$$.fragment,o),b(ja.$$.fragment,o),b(Ma.$$.fragment,o),b(Pa.$$.fragment,o),b(Ea.$$.fragment,o),b(La.$$.fragment,o),b(Ro.$$.fragment,o),b(Ga.$$.fragment,o),b(Wa.$$.fragment,o),b(Ra.$$.fragment,o),b(Ua.$$.fragment,o),b(Ha.$$.fragment,o),b(Qa.$$.fragment,o),b(Va.$$.fragment,o),b(Ja.$$.fragment,o),b(ns.$$.fragment,o),b(Ho.$$.fragment,o),b(as.$$.fragment,o),b(ss.$$.fragment,o),b(rs.$$.fragment,o),b(is.$$.fragment,o),b(ds.$$.fragment,o),b(ls.$$.fragment,o),b(cs.$$.fragment,o),b(bs.$$.fragment,o),b(Vo.$$.fragment,o),b(vs.$$.fragment,o),b(ks.$$.fragment,o),b(ys.$$.fragment,o),b(Ts.$$.fragment,o),b(ws.$$.fragment,o),Fl=!1},d(o){t(p),o&&t(F),o&&t(k),v(T),o&&t(ke),o&&t($),o&&t(We),o&&t(G),v(Y),o&&t(ae),o&&t(se),o&&t(N),o&&t(ye),o&&t(Re),o&&t(H),o&&t(j),o&&t(L),o&&t(re),o&&t(me),v(Oe),o&&t(Hd),o&&t(ct),o&&t(Qd),o&&t(Dt),v(cn),o&&t(Vd),o&&t(we),o&&t(Jd),o&&t(Rt),v(pn),o&&t(Xd),o&&t(pt),o&&t(Kd),v(hn,o),o&&t(Zd),o&&t(Ut),v(un),o&&t(Yd),o&&t(fe),v(mn),v(_n),o&&t(el),o&&t(Vt),v(gn),o&&t(tl),o&&t(at),v(bn),o&&t(ol),o&&t(Jt),v(vn),o&&t(nl),o&&t(st),v(kn),o&&t(al),o&&t(Xt),v(Tn),o&&t(sl),o&&t(Le),v(wn),v(Bn),v(Bo),v(qn),o&&t(rl),o&&t(Zt),v($n),o&&t(il),o&&t(Ge),v(jn),v(Cn),v($o),v(An),v(Sn),o&&t(dl),o&&t(eo),v(In),o&&t(ll),o&&t(_e),v(Nn),v(Gn),v(Mo),v(Wn),v(Rn),o&&t(cl),o&&t(oo),v(Un),o&&t(pl),o&&t(ge),v(Hn),v(Xn),v(Eo),v(Kn),o&&t(hl),o&&t(so),v(Zn),o&&t(ul),o&&t(Yn),v(ea),v(ta),o&&t(ml),o&&t(ro),v(oa),o&&t(fl),o&&t(be),v(na),v(So),v(ia),v(Io),v(da),o&&t(_l),o&&t(lo),v(la),o&&t(gl),o&&t(ve),v(ca),v(Oo),v(ma),v(Do),v(fa),v(_a),o&&t(bl),o&&t(po),v(ga),o&&t(vl),o&&t(O),v(ba),v(Fa),v(Go),v(Ba),v(qa),v($a),v(ja),v(Ma),o&&t(kl),o&&t(uo),v(Pa),o&&t(yl),o&&t(D),v(Ea),v(La),v(Ro),v(Ga),v(Wa),v(Ra),v(Ua),v(Ha),v(Qa),o&&t(Tl),o&&t(fo),v(Va),o&&t(wl),o&&t(A),v(Ja),v(ns),v(Ho),v(as),v(ss),v(rs),v(is),v(ds),o&&t(xl),o&&t(go),v(ls),o&&t(zl),o&&t(S),v(cs),v(bs),v(Vo),v(vs),v(ks),v(ys),v(Ts),v(ws)}}}const Wy={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"}],title:"BART"};function Ry(M,p,F){let{fw:k}=p;return M.$$set=w=>{"fw"in w&&F(0,k=w.fw)},[k]}class Ky extends Fy{constructor(p){super();By(this,p,Ry,Gy,qy,{fw:0})}}export{Ky as default,Wy as metadata};
