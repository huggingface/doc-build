import{S as kY,i as PY,s as zY,e as o,k as u,w as f,t as a,M as DY,c as l,d as t,m as c,a as r,x as d,h as n,b as h,G as s,g as i,y as m,q as _,o as v,B as j,v as OY}from"../../chunks/vendor-hf-doc-builder.js";import{T as yU}from"../../chunks/Tip-hf-doc-builder.js";import{D as AY}from"../../chunks/Docstring-hf-doc-builder.js";import{C as w}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as y}from"../../chunks/IconCopyLink-hf-doc-builder.js";function TY(jt){let g,S;return{c(){g=o("p"),S=a("This section is a must-read")},l(b){g=l(b,"P",{});var k=r(g);S=n(k,"This section is a must-read"),k.forEach(t)},m(b,k){i(b,g,k),s(g,S)},d(b){b&&t(g)}}}function SY(jt){let g,S,b,k,X,z,C,Q,x,te,T;return{c(){g=o("p"),S=a("As of "),b=o("code"),k=a("deepspeed==0.6.0"),X=a(" the bf16 support is new and experimental."),z=u(),C=o("p"),Q=a("If you use "),x=o("a"),te=a("gradient accumulation"),T=a(" with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),this.h()},l(q){g=l(q,"P",{});var E=r(g);S=n(E,"As of "),b=l(E,"CODE",{});var gs=r(b);k=n(gs,"deepspeed==0.6.0"),gs.forEach(t),X=n(E," the bf16 support is new and experimental."),E.forEach(t),z=c(q),C=l(q,"P",{});var W=r(C);Q=n(W,"If you use "),x=l(W,"A",{href:!0});var bs=r(x);te=n(bs,"gradient accumulation"),bs.forEach(t),T=n(W," with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),W.forEach(t),this.h()},h(){h(x,"href","#gradient-accumulation")},m(q,E){i(q,g,E),s(g,S),s(g,b),s(b,k),s(g,X),i(q,z,E),i(q,C,E),s(C,Q),s(C,x),s(x,te),s(C,T)},d(q){q&&t(g),q&&t(z),q&&t(C)}}}function CY(jt){let g,S,b,k,X,z,C,Q,x,te,T;return{c(){g=o("p"),S=a("Note, that once "),b=o("code"),k=a("load_state_dict_from_zero_checkpoint"),X=a(" was run, the "),z=o("code"),C=a("model"),Q=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),x=o("code"),te=a("model.load_state_dict(state_dict)"),T=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(q){g=l(q,"P",{});var E=r(g);S=n(E,"Note, that once "),b=l(E,"CODE",{});var gs=r(b);k=n(gs,"load_state_dict_from_zero_checkpoint"),gs.forEach(t),X=n(E," was run, the "),z=l(E,"CODE",{});var W=r(z);C=n(W,"model"),W.forEach(t),Q=n(E,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),x=l(E,"CODE",{});var bs=r(x);te=n(bs,"model.load_state_dict(state_dict)"),bs.forEach(t),T=n(E,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),E.forEach(t)},m(q,E){i(q,g,E),s(g,S),s(g,b),s(b,k),s(g,X),s(g,z),s(z,C),s(g,Q),s(g,x),s(x,te),s(g,T)},d(q){q&&t(g)}}}function xY(jt){let g,S,b,k,X,z,C,Q,x,te,T,q,E,gs,W,bs,i4,wj,R,Gh,u4,c4,Mh,h4,f4,Lh,d4,m4,Zh,_4,v4,Nh,j4,w4,Hh,y4,yj,Te,g4,Kn,b4,q4,Jn,E4,$4,gj,kp,k4,bj,Pp,P4,qj,wt,z4,Xn,D4,O4,Ej,yt,Qn,A4,zp,T4,S4,C4,F,x4,Dp,R4,I4,Bh,U4,G4,Wh,M4,L4,Fh,Z4,N4,Op,H4,B4,$j,Ap,W4,kj,Tp,F4,Pj,Sp,Vh,V4,zj,Cp,Y4,Dj,xp,eo,K4,Rp,J4,X4,Oj,Ip,Q4,Aj,Up,Tj,qs,gt,Yh,so,e6,Kh,s6,Sj,Gp,Cj,Es,bt,Jh,to,t6,Xh,a6,xj,Mp,n6,Rj,ao,Ij,Se,o6,Qh,l6,r6,ef,p6,i6,Uj,no,Gj,Ce,u6,oo,c6,h6,lo,f6,d6,Mj,qt,m6,Lp,_6,v6,Lj,Zp,j6,Zj,Np,w6,Nj,ro,Hj,xe,y6,sf,g6,b6,tf,q6,E6,Bj,Et,$6,af,k6,P6,Wj,po,Fj,ke,z6,nf,D6,O6,of,A6,T6,lf,S6,Vj,Hp,C6,Yj,io,Kj,Re,x6,rf,R6,I6,pf,U6,G6,Jj,$t,M6,uf,L6,Z6,Xj,Ie,N6,cf,H6,B6,uo,W6,F6,Qj,Bp,V6,ew,co,sw,Wp,Y6,tw,ho,aw,Fp,K6,nw,fo,ow,kt,J6,hf,X6,Q6,lw,Pt,e$,ff,s$,t$,rw,zt,a$,mo,n$,o$,pw,Vp,iw,$s,Dt,df,_o,l$,mf,r$,uw,Ot,p$,Yp,i$,u$,cw,At,ks,c$,_f,h$,f$,vf,d$,m$,_$,Pe,v$,jf,j$,w$,wf,y$,g$,vo,b$,q$,hw,Kp,E$,fw,jo,dw,Jp,$$,mw,wo,_w,I,k$,yf,P$,z$,gf,D$,O$,bf,A$,T$,qf,S$,C$,yo,x$,R$,vw,ae,I$,Ef,U$,G$,$f,M$,L$,kf,Z$,N$,jw,Tt,H$,Pf,B$,W$,ww,go,yw,St,F$,zf,V$,Y$,gw,Ct,K$,bo,J$,X$,bw,Xp,qw,Ps,xt,Df,qo,Q$,Of,e5,Ew,Rt,s5,Qp,t5,a5,$w,Eo,kw,Ue,n5,Af,o5,l5,$o,r5,p5,Pw,ei,i5,zw,It,Tf,u5,c5,Sf,h5,Dw,si,f5,Ow,ko,Aw,ti,d5,Tw,Ut,m5,Po,_5,v5,Sw,ai,j5,Cw,ni,w5,xw,oi,zs,zo,y5,Cf,g5,b5,q5,Do,E5,xf,$5,Rw,li,Iw,Ds,Gt,Rf,Oo,k5,If,P5,Uw,Mt,z5,Uf,D5,O5,Gw,ri,A5,Mw,Ao,Lw,Lt,T5,Gf,S5,C5,Zw,pi,x5,Nw,ii,R5,Hw,To,Bw,Ge,I5,Mf,U5,G5,Lf,M5,L5,Ww,So,Fw,Zt,Z5,Zf,N5,H5,Vw,Co,Yw,ui,B5,Kw,Nt,W5,Nf,F5,V5,Jw,ci,Xw,Os,Ht,Hf,xo,Y5,Bf,K5,Qw,Bt,J5,Ro,X5,Q5,ey,Wt,e8,Io,s8,t8,sy,Uo,ty,Ft,a8,Wf,n8,o8,ay,Go,ny,Vt,l8,Mo,r8,p8,oy,hi,i8,ly,ne,u8,Ff,c8,h8,Vf,f8,d8,Yf,m8,_8,ry,Lo,py,Yt,v8,fi,j8,w8,iy,di,uy,As,Kt,Kf,Zo,y8,Jf,g8,cy,U,b8,mi,q8,E8,_i,$8,k8,Xf,P8,z8,Qf,D8,O8,vi,A8,T8,hy,ji,S8,fy,No,dy,wi,C8,my,Ho,_y,yi,vy,Ts,Jt,ed,Bo,x8,sd,R8,jy,Xt,wy,Me,I8,gi,U8,G8,bi,M8,L8,yy,Qt,Z8,qi,N8,H8,gy,Le,B8,td,W8,F8,Ei,V8,Y8,by,$i,K8,qy,ea,J8,ki,X8,Q8,Ey,sa,ad,ek,sk,Wo,tk,Pi,ak,nk,$y,oe,ok,nd,lk,rk,zi,pk,ik,od,uk,ck,ky,Di,Py,Ss,ta,ld,Fo,hk,rd,fk,zy,Vo,Yo,dk,mk,Dy,Ze,_k,pd,vk,jk,Ko,wk,yk,Oy,aa,gk,Oi,bk,qk,Ay,Ai,Ek,Ty,Ti,Sy,Cs,na,id,Jo,$k,ud,kk,Cy,Si,Pk,xy,Xo,Ry,Ci,cd,zk,Iy,Ne,xs,Dk,hd,Ok,Ak,fd,Tk,Sk,Ck,G,dd,xk,Rk,md,Ik,Uk,_d,Gk,Mk,vd,Lk,Zk,jd,Nk,Hk,wd,Bk,Wk,Fk,yd,Vk,Uy,He,Yk,gd,Kk,Jk,bd,Xk,Qk,Gy,Qo,My,xi,e7,Ly,Ri,Zy,Rs,oa,qd,el,s7,Ed,t7,Ny,Ii,a7,Hy,sl,By,V,n7,$d,o7,l7,kd,r7,p7,Pd,i7,u7,zd,c7,h7,Wy,Be,f7,Dd,d7,m7,Od,_7,v7,Fy,Ui,Ad,j7,Vy,la,tl,Td,w7,y7,Sd,g7,b7,al,Cd,q7,E7,xd,$7,Yy,M,k7,Rd,P7,z7,Id,D7,O7,Ud,A7,T7,Gd,S7,C7,Md,x7,R7,Ky,ze,Ld,I7,U7,Zd,G7,M7,Nd,L7,Z7,Jy,Gi,N7,Xy,We,nl,Hd,H7,B7,Bd,W7,F7,ol,Wd,V7,Y7,Fd,K7,J7,ll,Vd,X7,Q7,Yd,e9,Qy,Fe,s9,Kd,t9,a9,Mi,n9,o9,eg,rl,Jd,l9,r9,sg,le,p9,Xd,i9,u9,Qd,c9,h9,em,f9,d9,tg,Li,pl,sm,m9,_9,tm,v9,ag,De,am,j9,w9,nm,y9,g9,om,b9,q9,ng,Ve,E9,lm,$9,k9,rm,P9,z9,og,ra,il,D9,pm,O9,A9,T9,ul,S9,im,C9,x9,lg,Zi,rg,Is,pa,um,cl,R9,cm,I9,pg,Ni,U9,ig,Hi,G9,ug,hl,cg,ia,M9,hm,L9,Z9,hg,Ye,N9,fl,H9,B9,dl,W9,F9,fg,ua,V9,fm,Y9,K9,dg,Ke,J9,dm,X9,Q9,ml,eP,sP,mg,Bi,_g,Us,ca,mm,_l,tP,_m,aP,vg,Wi,nP,jg,Fi,oP,wg,ha,Gs,lP,vm,rP,pP,jm,iP,uP,cP,vl,hP,wm,fP,dP,yg,Je,mP,ym,_P,vP,gm,jP,wP,gg,Vi,bg,Ms,fa,bm,jl,yP,qm,gP,qg,da,bP,Em,qP,EP,Eg,wl,$g,ma,$P,$m,kP,PP,kg,yl,Pg,Yi,zg,Ls,_a,km,gl,zP,Pm,DP,Dg,va,OP,zm,AP,TP,Og,bl,Ag,ja,SP,Dm,CP,xP,Tg,ql,Sg,Zs,wa,Om,El,RP,Am,IP,Cg,ya,UP,Tm,GP,MP,xg,Ki,LP,Rg,ga,ZP,Sm,NP,HP,Ig,Ji,Ug,Ns,ba,Cm,$l,BP,xm,WP,Gg,Xe,FP,Rm,VP,YP,kl,KP,JP,Mg,$,XP,Im,QP,ez,Xi,sz,tz,Um,az,nz,Gm,oz,lz,Mm,rz,pz,Lm,iz,uz,Zm,cz,hz,Nm,fz,dz,Lg,Qe,mz,Hm,_z,vz,Bm,jz,wz,Zg,Pl,Ng,Qi,yz,Hg,re,zl,Wm,gz,bz,Fm,qz,Ez,Dl,Vm,$z,kz,Ym,Pz,zz,Ol,Km,Dz,Oz,Jm,Az,Tz,Al,Xm,Sz,Cz,Qm,xz,Bg,eu,Rz,Wg,su,Iz,Fg,Tl,Vg,qa,Uz,tu,Gz,Mz,Yg,au,Lz,Kg,Sl,Jg,pe,Zz,e_,Nz,Hz,s_,Bz,Wz,t_,Fz,Vz,Xg,nu,Qg,Hs,Ea,a_,Cl,Yz,n_,Kz,e2,L,Jz,o_,Xz,Qz,l_,eD,sD,r_,tD,aD,p_,nD,oD,xl,lD,rD,s2,ou,pD,t2,$a,Rl,i_,iD,uD,u_,cD,hD,es,c_,fD,dD,h_,mD,_D,f_,vD,jD,a2,D,wD,d_,yD,gD,lu,bD,qD,m_,ED,$D,__,kD,PD,v_,zD,DD,j_,OD,AD,n2,ss,TD,w_,SD,CD,y_,xD,RD,o2,Il,l2,ts,ID,g_,UD,GD,ru,MD,LD,r2,ie,ka,b_,ZD,ND,q_,HD,BD,WD,Pa,E_,FD,VD,$_,YD,KD,JD,as,k_,XD,QD,P_,eO,sO,z_,tO,aO,nO,ns,D_,oO,lO,O_,rO,pO,A_,iO,uO,p2,pu,cO,i2,Ul,u2,za,hO,iu,fO,dO,c2,Da,mO,T_,_O,vO,h2,Gl,f2,Y,jO,S_,wO,yO,C_,gO,bO,x_,qO,EO,R_,$O,kO,d2,uu,m2,Bs,Oa,I_,Ml,PO,U_,zO,_2,cu,DO,v2,Aa,OO,G_,AO,TO,j2,Ll,w2,Ta,SO,Zl,CO,xO,y2,ue,RO,M_,IO,UO,L_,GO,MO,Z_,LO,ZO,g2,hu,b2,Ws,Sa,N_,Nl,NO,H_,HO,q2,fu,BO,E2,Fs,Ca,B_,Hl,WO,W_,FO,$2,du,VO,k2,Bl,P2,os,YO,mu,KO,JO,F_,XO,QO,z2,ls,eA,V_,sA,tA,Y_,aA,nA,D2,_u,oA,O2,Wl,A2,xa,lA,vu,rA,pA,T2,Ra,iA,Fl,uA,cA,S2,Vs,Ia,K_,Vl,hA,J_,fA,C2,ju,dA,x2,Yl,R2,wu,mA,I2,rs,_A,X_,vA,jA,Q_,wA,yA,U2,yu,gA,G2,Kl,M2,Ua,L2,Ys,Ga,e1,Jl,bA,s1,qA,Z2,gu,EA,N2,Xl,H2,ce,$A,bu,kA,PA,t1,zA,DA,a1,OA,AA,B2,Ma,TA,n1,SA,CA,W2,qu,xA,F2,Ql,V2,La,RA,Eu,IA,UA,Y2,Za,GA,er,MA,LA,K2,$u,J2,Ks,Na,o1,sr,ZA,l1,NA,X2,ku,HA,Q2,tr,eb,Z,BA,Pu,WA,FA,r1,VA,YA,p1,KA,JA,i1,XA,QA,u1,eT,sT,sb,zu,tT,tb,ar,ab,Ha,aT,Du,nT,oT,nb,Ou,ob,Js,Ba,c1,nr,lT,h1,rT,lb,Au,pT,rb,or,pb,ps,iT,Tu,uT,cT,f1,hT,fT,ib,Su,dT,ub,lr,cb,Wa,mT,Cu,_T,vT,hb,xu,fb,Xs,Fa,d1,rr,jT,m1,wT,db,Ru,yT,mb,pr,_b,is,gT,Iu,bT,qT,_1,ET,$T,vb,Uu,kT,jb,ir,wb,Va,PT,Gu,zT,DT,yb,Mu,gb,Qs,Ya,v1,ur,OT,j1,AT,bb,Ka,TT,w1,ST,CT,qb,Lu,y1,xT,Eb,Ja,RT,g1,IT,UT,$b,O,GT,b1,MT,LT,q1,ZT,NT,E1,HT,BT,$1,WT,FT,k1,VT,YT,P1,KT,JT,kb,cr,Pb,Zu,z1,XT,zb,Xa,QT,hr,eS,sS,Db,Nu,D1,tS,Ob,Hu,aS,Ab,Bu,nS,Tb,fr,Sb,us,oS,O1,lS,rS,A1,pS,iS,Cb,dr,xb,Qa,Rb,en,uS,T1,cS,hS,Ib,sn,fS,S1,dS,mS,Ub,mr,Gb,Wu,C1,_S,Mb,cs,vS,x1,jS,wS,R1,yS,gS,Lb,Fu,bS,Zb,_r,Nb,tn,qS,I1,ES,$S,Hb,vr,Bb,an,kS,U1,PS,zS,Wb,Vu,DS,Fb,jr,G1,OS,AS,Vb,hs,TS,M1,SS,CS,L1,xS,RS,Yb,Yu,IS,Kb,et,nn,Z1,wr,US,N1,GS,Jb,Ku,MS,Xb,Ju,LS,Qb,Xu,ZS,e3,st,on,H1,yr,NS,B1,HS,s3,ln,BS,W1,WS,FS,t3,gr,a3,Qu,VS,n3,P,YS,F1,KS,JS,V1,XS,QS,Y1,eC,sC,ec,tC,aC,sc,nC,oC,K1,lC,rC,J1,pC,iC,o3,br,l3,rn,uC,X1,cC,hC,r3,tc,fC,p3,pn,dC,qr,mC,_C,i3,he,vC,Q1,jC,wC,ev,yC,gC,ac,bC,qC,u3,tt,un,sv,Er,EC,tv,$C,c3,$r,kC,kr,PC,h3,cn,zC,av,DC,OC,f3,nc,AC,d3,Pr,m3,fs,TC,nv,SC,CC,ov,xC,RC,_3,oc,v3,at,hn,lv,zr,IC,rv,UC,j3,lc,GC,w3,fn,MC,rc,LC,ZC,y3,Dr,g3,pc,NC,b3,dn,HC,pv,BC,WC,q3,Or,E3,ic,FC,$3,uc,VC,k3,nt,mn,iv,Ar,YC,uv,KC,P3,cc,JC,z3,hc,XC,D3,Tr,O3,fc,QC,A3,dc,ex,T3,mc,sx,S3,_c,tx,C3,Sr,x3,vc,ax,R3,_n,nx,Cr,ox,lx,I3,ot,vn,cv,xr,rx,hv,px,U3,jc,ix,G3,wc,ux,M3,N,fv,dv,cx,hx,mv,Oe,fx,yc,dx,mx,gc,_x,vx,bc,jx,wx,yx,Rr,_v,gx,bx,Ir,qx,vv,Ur,Ex,Gr,$x,kx,Px,jv,wv,zx,Dx,yv,Mr,Ox,Lr,Ax,Tx,L3,qc,Sx,Z3,jn,lt,gv,Cx,xx,bv,Rx,Ix,qv,Ux,Gx,Ev,Zr,Mx,Nr,Lx,Zx,N3,rt,wn,$v,Hr,Nx,kv,Hx,H3,pt,yn,Pv,Br,Bx,Wr,Wx,zv,Fx,Vx,B3,H,Yx,Dv,Kx,Jx,Ov,Xx,Qx,Av,eR,sR,Tv,tR,aR,Fr,nR,oR,W3,it,gn,Sv,Vr,lR,Ec,rR,Cv,pR,F3,$c,iR,V3,kc,uR,Y3,Yr,K3,bn,cR,xv,hR,fR,J3,Kr,X3,Pc,dR,Q3,zc,mR,e0,ds,_R,Rv,vR,jR,Iv,wR,yR,s0,ut,qn,Uv,Jr,gR,Gv,bR,t0,ms,ct,qR,Dc,ER,$R,Mv,kR,PR,zR,Xr,DR,Qr,OR,AR,TR,ht,SR,Oc,CR,xR,ep,RR,IR,a0,ft,En,Lv,sp,UR,Zv,GR,n0,fe,MR,Ac,LR,ZR,Tc,NR,HR,Nv,BR,WR,o0,$n,FR,Sc,VR,YR,l0,_s,KR,Cc,JR,XR,xc,QR,eI,r0,kn,sI,Hv,tI,aI,p0,Rc,nI,i0,tp,u0,Ic,oI,c0,ap,h0,de,lI,Uc,rI,pI,np,iI,uI,Bv,cI,hI,f0,dt,Pn,Wv,op,fI,Fv,dI,d0,ee,lp,mI,Vv,_I,vI,Ae,jI,Yv,wI,yI,Kv,gI,bI,Jv,qI,EI,$I,me,Gc,kI,PI,Xv,zI,DI,Mc,OI,AI,Qv,TI,SI,m0,mt,zn,ej,rp,CI,sj,xI,_0,Dn,RI,Lc,II,UI,v0,Zc,GI,j0,Nc,MI,w0,Hc,LI,y0,On,tj,ZI,NI,aj,HI,g0,pp,b0,An,BI,nj,WI,FI,q0,ip,E0,Bc,VI,$0,_t,Tn,oj,up,YI,lj,KI,k0,_e,rj,cp,JI,XI,pj,hp,QI,eU,ij,fp,sU,tU,uj,dp,aU,P0,Wc,nU,z0,vs,cj,mp,oU,lU,hj,_p,rU,pU,fj,vp,iU,D0,js,uU,Fc,cU,hU,jp,fU,dU,O0;return z=new y({}),so=new y({}),to=new y({}),ao=new w({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),no=new w({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),ro=new w({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),po=new w({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),io=new w({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),co=new w({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),ho=new w({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),fo=new w({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),_o=new y({}),jo=new w({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),wo=new w({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),go=new w({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),qo=new y({}),Eo=new w({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro`,highlighted:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),ko=new w({props:{code:`{
  "zero_optimization": {
     "stage": 2,
     "offload_optimizer": {
         "device": "cpu",
         "pin_memory": true
     },
     "allgather_partitions": true,
     "allgather_bucket_size": 2e8,
     "reduce_scatter": true,
     "reduce_bucket_size": 2e8,
     "overlap_comm": true,
     "contiguous_gradients": true
  }
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
     <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
     <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Do=new w({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),Oo=new y({}),Ao=new w({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
# This emulates a launcher in the notebook
import os

os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "9994"  # modify if RuntimeError: Address already in use
os.environ["RANK"] = "0"
os.environ["LOCAL_RANK"] = "0"
os.environ["WORLD_SIZE"] = "1"

# Now proceed as normal, plus pass the deepspeed config file
training_args = TrainingArguments(..., deepspeed="ds_config_zero3.json")
trainer = Trainer(...)
trainer.train()`,highlighted:`<span class="hljs-comment"># DeepSpeed requires a distributed environment even when only one process is used.</span>
<span class="hljs-comment"># This emulates a launcher in the notebook</span>
<span class="hljs-keyword">import</span> os

os.environ[<span class="hljs-string">&quot;MASTER_ADDR&quot;</span>] = <span class="hljs-string">&quot;localhost&quot;</span>
os.environ[<span class="hljs-string">&quot;MASTER_PORT&quot;</span>] = <span class="hljs-string">&quot;9994&quot;</span>  <span class="hljs-comment"># modify if RuntimeError: Address already in use</span>
os.environ[<span class="hljs-string">&quot;RANK&quot;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&quot;LOCAL_RANK&quot;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&quot;WORLD_SIZE&quot;</span>] = <span class="hljs-string">&quot;1&quot;</span>

<span class="hljs-comment"># Now proceed as normal, plus pass the deepspeed config file</span>
training_args = TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;ds_config_zero3.json&quot;</span>)
trainer = Trainer(...)
trainer.train()`}}),To=new w({props:{code:`%%bash
cat <<'EOT' > ds_config_zero3.json
{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}
EOT`,highlighted:`%%bash
cat &lt;&lt;<span class="hljs-string">&#x27;EOT&#x27;</span> &gt; ds_config_zero3.json
{
    <span class="hljs-string">&quot;fp16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;loss_scale&quot;</span>: <span class="hljs-number">0</span>,
        <span class="hljs-string">&quot;loss_scale_window&quot;</span>: <span class="hljs-number">1000</span>,
        <span class="hljs-string">&quot;initial_scale_power&quot;</span>: <span class="hljs-number">16</span>,
        <span class="hljs-string">&quot;hysteresis&quot;</span>: <span class="hljs-number">2</span>,
        <span class="hljs-string">&quot;min_loss_scale&quot;</span>: <span class="hljs-number">1</span>
    },

    <span class="hljs-string">&quot;optimizer&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;AdamW&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;betas&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;eps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;weight_decay&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;scheduler&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;WarmupLR&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;warmup_min_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_max_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_num_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;zero_optimization&quot;</span>: {
        <span class="hljs-string">&quot;stage&quot;</span>: <span class="hljs-number">3</span>,
        <span class="hljs-string">&quot;offload_optimizer&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;offload_param&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;overlap_comm&quot;</span>: true,
        <span class="hljs-string">&quot;contiguous_gradients&quot;</span>: true,
        <span class="hljs-string">&quot;sub_group_size&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;reduce_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_prefetch_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_param_persistence_threshold&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_max_live_parameters&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_max_reuse_distance&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span>: true
    },

    <span class="hljs-string">&quot;gradient_accumulation_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;gradient_clipping&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: false
}
EOT`}}),So=new w({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),Co=new w({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),xo=new y({}),Uo=new w({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),Go=new w({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),Lo=new w({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),Zo=new y({}),No=new w({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Ho=new w({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Bo=new y({}),Xt=new yU({props:{warning:!0,$$slots:{default:[TY]},$$scope:{ctx:jt}}}),Fo=new y({}),Jo=new y({}),Xo=new w({props:{code:`{
    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 5e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 5e8,
        "contiguous_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Qo=new w({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),el=new y({}),sl=new w({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),cl=new y({}),hl=new w({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 4,
            "fast_init": false
        },
        "offload_param": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 5,
            "buffer_size": 1e8,
            "max_in_cpu": 1e9
        },
        "aio": {
            "block_size": 262144,
            "queue_depth": 32,
            "thread_count": 1,
            "single_submit": false,
            "overlap_events": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;fast_init&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;max_in_cpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;aio&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;block_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">262144</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;queue_depth&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">32</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;thread_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;single_submit&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;overlap_events&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),_l=new y({}),jl=new y({}),wl=new w({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),yl=new w({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),gl=new y({}),bl=new w({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),ql=new w({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": 1e6,
        "stage3_prefetch_bucket_size": 0.94e6,
        "stage3_param_persistence_threshold": 1e4,
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.94e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e4</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),El=new y({}),$l=new y({}),Pl=new w({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": "auto",
         "betas": "auto",
         "eps": "auto",
         "weight_decay": "auto"
       }
   }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Tl=new w({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": 0.001,
         "betas": [0.8, 0.999],
         "eps": 1e-8,
         "weight_decay": 3e-7
       }
   }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Sl=new w({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),Cl=new y({}),Il=new w({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ul=new w({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": 0,
             "warmup_max_lr": 0.001,
             "warmup_num_steps": 1000
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Gl=new w({props:{code:`{
   "scheduler": {
         "type": "WarmupDecayLR",
         "params": {
             "last_batch_iteration": -1,
             "total_num_steps": "auto",
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;last_batch_iteration&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">-1</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ml=new y({}),Ll=new w({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Nl=new y({}),Hl=new y({}),Bl=new w({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Wl=new w({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Vl=new y({}),Yl=new w({props:{code:`{
    "bf16": {
        "enabled": "auto"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Kl=new w({props:{code:`{
    "bf16": {
        "enabled": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ua=new yU({props:{$$slots:{default:[SY]},$$scope:{ctx:jt}}}),Jl=new y({}),Xl=new w({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Ql=new w({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),sr=new y({}),tr=new w({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ar=new w({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),nr=new y({}),or=new w({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),lr=new w({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),rr=new y({}),pr=new w({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ir=new w({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),ur=new y({}),cr=new w({props:{code:`{
    "zero_optimization": {
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),fr=new w({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),dr=new w({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Qa=new yU({props:{$$slots:{default:[CY]},$$scope:{ctx:jt}}}),mr=new w({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),_r=new w({props:{code:`$ ls -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`,highlighted:`$ <span class="hljs-built_in">ls</span> -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),vr=new w({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),wr=new y({}),yr=new y({}),gr=new w({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),br=new w({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Er=new y({}),Pr=new w({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),zr=new y({}),Dr=new w({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),Or=new w({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config "ro-en" --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix "translate English to Romanian: "`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),Ar=new y({}),Tr=new w({props:{code:`$ python -c 'from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained("bigscience/T0_3B"); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=1, num_nodes=1)'
[...]
Estimated memory needed for params, optim states and gradients for a:
HW: Setup with 1 node, 1 GPU per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.37GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=1
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`,highlighted:`$ python -c <span class="hljs-string">&#x27;from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained(&quot;bigscience/T0_3B&quot;); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=1, num_nodes=1)&#x27;</span>
[...]
Estimated memory needed <span class="hljs-keyword">for</span> params, optim states and gradients <span class="hljs-keyword">for</span> a:
HW: Setup with 1 node, 1 GPU per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.37GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=1
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),Sr=new w({props:{code:`$ python -c 'from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained("bigscience/T0_3B"); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=2, num_nodes=1)'
[...]
Estimated memory needed for params, optim states and gradients for a:
HW: Setup with 1 node, 2 GPUs per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.74GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=1
   31.11GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=0
`,highlighted:`$ python -c <span class="hljs-string">&#x27;from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained(&quot;bigscience/T0_3B&quot;); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=2, num_nodes=1)&#x27;</span>
[...]
Estimated memory needed <span class="hljs-keyword">for</span> params, optim states and gradients <span class="hljs-keyword">for</span> a:
HW: Setup with 1 node, 2 GPUs per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.74GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=1
   31.11GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=0
`}}),xr=new y({}),Ir=new w({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Hr=new y({}),Br=new y({}),Vr=new y({}),Yr=new w({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Kr=new w({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 262144, reducing to 262144
  1%|\u258C                                                                                                                    | 1/189 [00:00<01:26,  2.17it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 262144, reducing to 131072.0
  1%|\u2588\u258F
 [...]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 14%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C                                                                                                   | 27/189 [00:14<01:13,  2.21it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 15%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258F                                                                                                  | 28/189 [00:14<01:13,  2.18it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 15%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A                                                                                                  | 29/189 [00:15<01:13,  2.18it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
[...]`,highlighted:`<span class="hljs-number">0</span>%|                                                                                                                             | <span class="hljs-number">0</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">00</span>&lt;?, ?it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">262144</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">262144</span>
  <span class="hljs-number">1</span>%|\u258C                                                                                                                    | <span class="hljs-number">1</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">00</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">26</span>,  <span class="hljs-number">2.17</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">262144</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">131072.0</span>
  <span class="hljs-number">1</span>%|\u2588\u258F
 [...]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">14</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C                                                                                                   | <span class="hljs-number">27</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">14</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.21</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">15</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258F                                                                                                  | <span class="hljs-number">28</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">14</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.18</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">15</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A                                                                                                  | <span class="hljs-number">29</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">15</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.18</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
[...]`}}),Jr=new y({}),sp=new y({}),tp=new w({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel
import deepspeed

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model to detect zero 3
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
model = AutoModel.from_pretrained("gpt2")
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel
<span class="hljs-keyword">import</span> deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model to detect zero 3</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),ap=new w({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, AutoConfig
import deepspeed

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model to detect zero 3
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
config = AutoConfig.from_pretrained("gpt2")
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoConfig
<span class="hljs-keyword">import</span> deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model to detect zero 3</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),op=new y({}),lp=new AY({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/deepspeed.py#L45"}}),rp=new y({}),pp=new w({props:{code:`#!/usr/bin/env python

# This script demonstrates how to use Deepspeed ZeRO in an inference mode when one can't fit a model
# into a single GPU
#
# 1. Use 1 GPU with CPU offload
# 2. Or use multiple GPUs instead
#
# First you need to install deepspeed: pip install deepspeed
#
# Here we use a 3B "bigscience/T0_3B" model which needs about 15GB GPU RAM - so 1 largish or 2
# small GPUs can handle it. or 1 small GPU and a lot of CPU memory.
#
# To use a larger model like "bigscience/T0" which needs about 50GB, unless you have an 80GB GPU -
# you will need 2-4 gpus. And then you can adapt the script to handle more gpus if you want to
# process multiple inputs at once.
#
# The provided deepspeed config also activates CPU memory offloading, so chances are that if you
# have a lot of available CPU memory and you don't mind a slowdown you should be able to load a
# model that doesn't normally fit into a single GPU. If you have enough GPU memory the program will
# run faster if you don't want offload to CPU - so disable that section then.
#
# To deploy on 1 gpu:
#
# deepspeed --num_gpus 1 t0.py
# or:
# python -m torch.distributed.run --nproc_per_node=1 t0.py
#
# To deploy on 2 gpus:
#
# deepspeed --num_gpus 2 t0.py
# or:
# python -m torch.distributed.run --nproc_per_node=2 t0.py


from transformers import AutoTokenizer, AutoConfig, AutoModelForSeq2SeqLM
from transformers.deepspeed import HfDeepSpeedConfig
import deepspeed
import os
import torch

os.environ["TOKENIZERS_PARALLELISM"] = "false"  # To avoid warnings about parallelism in tokenizers

# distributed setup
local_rank = int(os.getenv("LOCAL_RANK", "0"))
world_size = int(os.getenv("WORLD_SIZE", "1"))
torch.cuda.set_device(local_rank)
deepspeed.init_distributed()

model_name = "bigscience/T0_3B"

config = AutoConfig.from_pretrained(model_name)
model_hidden_size = config.d_model

# batch size has to be divisible by world_size, but can be bigger than world_size
train_batch_size = 1 * world_size

# ds_config notes
#
# - enable bf16 if you use Ampere or higher GPU - this will run in mixed precision and will be
# faster.
#
# - for older GPUs you can enable fp16, but it'll only work for non-bf16 pretrained models - e.g.
# all official t5 models are bf16-pretrained
#
# - set offload_param.device to "none" or completely remove the \`offload_param\` section if you don't
# - want CPU offload
#
# - if using \`offload_param\` you can manually finetune stage3_param_persistence_threshold to control
# - which params should remain on gpus - the larger the value the smaller the offload size
#
# For indepth info on Deepspeed config see
# https://huggingface.co/docs/transformers/main/main_classes/deepspeed

# keeping the same format as json for consistency, except it uses lower case for true/false
# fmt: off
ds_config = {
    "fp16": {
        "enabled": False
    },
    "bf16": {
        "enabled": False
    },
    "zero_optimization": {
        "stage": 3,
        "offload_param": {
            "device": "cpu",
            "pin_memory": True
        },
        "overlap_comm": True,
        "contiguous_gradients": True,
        "reduce_bucket_size": model_hidden_size * model_hidden_size,
        "stage3_prefetch_bucket_size": 0.9 * model_hidden_size * model_hidden_size,
        "stage3_param_persistence_threshold": 10 * model_hidden_size
    },
    "steps_per_print": 2000,
    "train_batch_size": train_batch_size,
    "train_micro_batch_size_per_gpu": 1,
    "wall_clock_breakdown": False
}
# fmt: on

# next line instructs transformers to partition the model directly over multiple gpus using
# deepspeed.zero.Init when model's \`from_pretrained\` method is called.
#
# **it has to be run before loading the model AutoModelForSeq2SeqLM.from_pretrained(model_name)**
#
# otherwise the model will first be loaded normally and only partitioned at forward time which is
# less efficient and when there is little CPU RAM may fail
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive

# now a model can be loaded.
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# initialise Deepspeed ZeRO and store only the engine object
ds_engine = deepspeed.initialize(model=model, config_params=ds_config)[0]
ds_engine.module.eval()  # inference

# Deepspeed ZeRO can process unrelated inputs on each GPU. So for 2 gpus you process 2 inputs at once.
# If you use more GPUs adjust for more.
# And of course if you have just one input to process you then need to pass the same string to both gpus
# If you use only one GPU, then you will have only rank 0.
rank = torch.distributed.get_rank()
if rank == 0:
    text_in = "Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy"
elif rank == 1:
    text_in = "Is this review positive or negative? Review: this is the worst restaurant ever"

tokenizer = AutoTokenizer.from_pretrained(model_name)
inputs = tokenizer.encode(text_in, return_tensors="pt").to(device=local_rank)
with torch.no_grad():
    outputs = ds_engine.module.generate(inputs, synced_gpus=True)
text_out = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(f"rank{rank}:\\n   in={text_in}\\n  out={text_out}")`,highlighted:`<span class="hljs-comment">#!/usr/bin/env python</span>

<span class="hljs-comment"># This script demonstrates how to use Deepspeed ZeRO in an inference mode when one can&#x27;t fit a model</span>
<span class="hljs-comment"># into a single GPU</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># 1. Use 1 GPU with CPU offload</span>
<span class="hljs-comment"># 2. Or use multiple GPUs instead</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># First you need to install deepspeed: pip install deepspeed</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># Here we use a 3B &quot;bigscience/T0_3B&quot; model which needs about 15GB GPU RAM - so 1 largish or 2</span>
<span class="hljs-comment"># small GPUs can handle it. or 1 small GPU and a lot of CPU memory.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To use a larger model like &quot;bigscience/T0&quot; which needs about 50GB, unless you have an 80GB GPU -</span>
<span class="hljs-comment"># you will need 2-4 gpus. And then you can adapt the script to handle more gpus if you want to</span>
<span class="hljs-comment"># process multiple inputs at once.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># The provided deepspeed config also activates CPU memory offloading, so chances are that if you</span>
<span class="hljs-comment"># have a lot of available CPU memory and you don&#x27;t mind a slowdown you should be able to load a</span>
<span class="hljs-comment"># model that doesn&#x27;t normally fit into a single GPU. If you have enough GPU memory the program will</span>
<span class="hljs-comment"># run faster if you don&#x27;t want offload to CPU - so disable that section then.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To deploy on 1 gpu:</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># deepspeed --num_gpus 1 t0.py</span>
<span class="hljs-comment"># or:</span>
<span class="hljs-comment"># python -m torch.distributed.run --nproc_per_node=1 t0.py</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To deploy on 2 gpus:</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># deepspeed --num_gpus 2 t0.py</span>
<span class="hljs-comment"># or:</span>
<span class="hljs-comment"># python -m torch.distributed.run --nproc_per_node=2 t0.py</span>


<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoConfig, AutoModelForSeq2SeqLM
<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">import</span> deepspeed
<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">import</span> torch

os.environ[<span class="hljs-string">&quot;TOKENIZERS_PARALLELISM&quot;</span>] = <span class="hljs-string">&quot;false&quot;</span>  <span class="hljs-comment"># To avoid warnings about parallelism in tokenizers</span>

<span class="hljs-comment"># distributed setup</span>
local_rank = <span class="hljs-built_in">int</span>(os.getenv(<span class="hljs-string">&quot;LOCAL_RANK&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>))
world_size = <span class="hljs-built_in">int</span>(os.getenv(<span class="hljs-string">&quot;WORLD_SIZE&quot;</span>, <span class="hljs-string">&quot;1&quot;</span>))
torch.cuda.set_device(local_rank)
deepspeed.init_distributed()

model_name = <span class="hljs-string">&quot;bigscience/T0_3B&quot;</span>

config = AutoConfig.from_pretrained(model_name)
model_hidden_size = config.d_model

<span class="hljs-comment"># batch size has to be divisible by world_size, but can be bigger than world_size</span>
train_batch_size = <span class="hljs-number">1</span> * world_size

<span class="hljs-comment"># ds_config notes</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - enable bf16 if you use Ampere or higher GPU - this will run in mixed precision and will be</span>
<span class="hljs-comment"># faster.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - for older GPUs you can enable fp16, but it&#x27;ll only work for non-bf16 pretrained models - e.g.</span>
<span class="hljs-comment"># all official t5 models are bf16-pretrained</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - set offload_param.device to &quot;none&quot; or completely remove the \`offload_param\` section if you don&#x27;t</span>
<span class="hljs-comment"># - want CPU offload</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - if using \`offload_param\` you can manually finetune stage3_param_persistence_threshold to control</span>
<span class="hljs-comment"># - which params should remain on gpus - the larger the value the smaller the offload size</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># For indepth info on Deepspeed config see</span>
<span class="hljs-comment"># https://huggingface.co/docs/transformers/main/main_classes/deepspeed</span>

<span class="hljs-comment"># keeping the same format as json for consistency, except it uses lower case for true/false</span>
<span class="hljs-comment"># fmt: off</span>
ds_config = {
    <span class="hljs-string">&quot;fp16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-literal">False</span>
    },
    <span class="hljs-string">&quot;bf16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-literal">False</span>
    },
    <span class="hljs-string">&quot;zero_optimization&quot;</span>: {
        <span class="hljs-string">&quot;stage&quot;</span>: <span class="hljs-number">3</span>,
        <span class="hljs-string">&quot;offload_param&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: <span class="hljs-literal">True</span>
        },
        <span class="hljs-string">&quot;overlap_comm&quot;</span>: <span class="hljs-literal">True</span>,
        <span class="hljs-string">&quot;contiguous_gradients&quot;</span>: <span class="hljs-literal">True</span>,
        <span class="hljs-string">&quot;reduce_bucket_size&quot;</span>: model_hidden_size * model_hidden_size,
        <span class="hljs-string">&quot;stage3_prefetch_bucket_size&quot;</span>: <span class="hljs-number">0.9</span> * model_hidden_size * model_hidden_size,
        <span class="hljs-string">&quot;stage3_param_persistence_threshold&quot;</span>: <span class="hljs-number">10</span> * model_hidden_size
    },
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: train_batch_size,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-number">1</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: <span class="hljs-literal">False</span>
}
<span class="hljs-comment"># fmt: on</span>

<span class="hljs-comment"># next line instructs transformers to partition the model directly over multiple gpus using</span>
<span class="hljs-comment"># deepspeed.zero.Init when model&#x27;s \`from_pretrained\` method is called.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># **it has to be run before loading the model AutoModelForSeq2SeqLM.from_pretrained(model_name)**</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># otherwise the model will first be loaded normally and only partitioned at forward time which is</span>
<span class="hljs-comment"># less efficient and when there is little CPU RAM may fail</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>

<span class="hljs-comment"># now a model can be loaded.</span>
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

<span class="hljs-comment"># initialise Deepspeed ZeRO and store only the engine object</span>
ds_engine = deepspeed.initialize(model=model, config_params=ds_config)[<span class="hljs-number">0</span>]
ds_engine.module.<span class="hljs-built_in">eval</span>()  <span class="hljs-comment"># inference</span>

<span class="hljs-comment"># Deepspeed ZeRO can process unrelated inputs on each GPU. So for 2 gpus you process 2 inputs at once.</span>
<span class="hljs-comment"># If you use more GPUs adjust for more.</span>
<span class="hljs-comment"># And of course if you have just one input to process you then need to pass the same string to both gpus</span>
<span class="hljs-comment"># If you use only one GPU, then you will have only rank 0.</span>
rank = torch.distributed.get_rank()
<span class="hljs-keyword">if</span> rank == <span class="hljs-number">0</span>:
    text_in = <span class="hljs-string">&quot;Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy&quot;</span>
<span class="hljs-keyword">elif</span> rank == <span class="hljs-number">1</span>:
    text_in = <span class="hljs-string">&quot;Is this review positive or negative? Review: this is the worst restaurant ever&quot;</span>

tokenizer = AutoTokenizer.from_pretrained(model_name)
inputs = tokenizer.encode(text_in, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device=local_rank)
<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = ds_engine.module.generate(inputs, synced_gpus=<span class="hljs-literal">True</span>)
text_out = tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),ip=new w({props:{code:`$ deepspeed --num_gpus 2 t0.py
rank0:
   in=Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy
  out=Positive
rank1:
   in=Is this review positive or negative? Review: this is the worst restaurant ever
  out=negative`,highlighted:`$ deepspeed --num_gpus <span class="hljs-number">2</span> t0.py
rank0:
   <span class="hljs-keyword">in</span>=Is <span class="hljs-keyword">this</span> review positive or negative? Review: <span class="hljs-keyword">this</span> <span class="hljs-keyword">is</span> the best cast iron skillet you will ever buy
  <span class="hljs-keyword">out</span>=Positive
rank1:
   <span class="hljs-keyword">in</span>=Is <span class="hljs-keyword">this</span> review positive or negative? Review: <span class="hljs-keyword">this</span> <span class="hljs-keyword">is</span> the worst restaurant ever
  <span class="hljs-keyword">out</span>=negative`}}),up=new y({}),{c(){g=o("meta"),S=u(),b=o("h1"),k=o("a"),X=o("span"),f(z.$$.fragment),C=u(),Q=o("span"),x=a("DeepSpeed Integration"),te=u(),T=o("p"),q=o("a"),E=a("DeepSpeed"),gs=a(" implements everything described in the "),W=o("a"),bs=a("ZeRO paper"),i4=a(". Currently it provides full support for:"),wj=u(),R=o("ol"),Gh=o("li"),u4=a("Optimizer state partitioning (ZeRO stage 1)"),c4=u(),Mh=o("li"),h4=a("Gradient partitioning (ZeRO stage 2)"),f4=u(),Lh=o("li"),d4=a("Parameter partitioning (ZeRO stage 3)"),m4=u(),Zh=o("li"),_4=a("Custom mixed precision training handling"),v4=u(),Nh=o("li"),j4=a("A range of fast CUDA-extension-based optimizers"),w4=u(),Hh=o("li"),y4=a("ZeRO-Offload to CPU and NVMe"),yj=u(),Te=o("p"),g4=a("ZeRO-Offload has its own dedicated paper: "),Kn=o("a"),b4=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),q4=a(". And NVMe-support is described in the paper "),Jn=o("a"),E4=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),$4=a("."),gj=u(),kp=o("p"),k4=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),bj=u(),Pp=o("p"),P4=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),qj=u(),wt=o("p"),z4=a("\u{1F917} Transformers integrates "),Xn=o("a"),D4=a("DeepSpeed"),O4=a(" via 2 options:"),Ej=u(),yt=o("ol"),Qn=o("li"),A4=a("Integration of the core DeepSpeed features via "),zp=o("a"),T4=a("Trainer"),S4=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),C4=u(),F=o("li"),x4=a("If you don\u2019t use "),Dp=o("a"),R4=a("Trainer"),I4=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Bh=o("code"),U4=a("from_pretrained"),G4=a(" and "),Wh=o("code"),M4=a("from_config"),L4=a(` include integration of essential
parts of DeepSpeed like `),Fh=o("code"),Z4=a("zero.Init"),N4=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Op=o("a"),H4=a("non-Trainer DeepSpeed Integration"),B4=a("."),$j=u(),Ap=o("p"),W4=a("What is integrated:"),kj=u(),Tp=o("p"),F4=a("Training:"),Pj=u(),Sp=o("ol"),Vh=o("li"),V4=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),zj=u(),Cp=o("p"),Y4=a("Inference:"),Dj=u(),xp=o("ol"),eo=o("li"),K4=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Rp=o("a"),J4=a("deepspeed-zero-inference"),X4=a("."),Oj=u(),Ip=o("p"),Q4=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),Aj=u(),Up=o("a"),Tj=u(),qs=o("h2"),gt=o("a"),Yh=o("span"),f(so.$$.fragment),e6=u(),Kh=o("span"),s6=a("Trainer Deepspeed Integration"),Sj=u(),Gp=o("a"),Cj=u(),Es=o("h3"),bt=o("a"),Jh=o("span"),f(to.$$.fragment),t6=u(),Xh=o("span"),a6=a("Installation"),xj=u(),Mp=o("p"),n6=a("Install the library via pypi:"),Rj=u(),f(ao.$$.fragment),Ij=u(),Se=o("p"),o6=a("or via "),Qh=o("code"),l6=a("transformers"),r6=a("\u2019 "),ef=o("code"),p6=a("extras"),i6=a(":"),Uj=u(),f(no.$$.fragment),Gj=u(),Ce=o("p"),u6=a("or find more details on "),oo=o("a"),c6=a("the DeepSpeed\u2019s GitHub page"),h6=a(` and
`),lo=o("a"),f6=a("advanced install"),d6=a("."),Mj=u(),qt=o("p"),m6=a("If you\u2019re still struggling with the build, first make sure to read "),Lp=o("a"),_6=a("zero-install-notes"),v6=a("."),Lj=u(),Zp=o("p"),j6=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),Zj=u(),Np=o("p"),w6=a("To make a local build for DeepSpeed:"),Nj=u(),f(ro.$$.fragment),Hj=u(),xe=o("p"),y6=a("If you intend to use NVMe offload you will also need to include "),sf=o("code"),g6=a("DS_BUILD_AIO=1"),b6=a(` in the instructions above (and also
install `),tf=o("em"),q6=a("libaio-dev"),E6=a(" system-wide)."),Bj=u(),Et=o("p"),$6=a("Edit "),af=o("code"),k6=a("TORCH_CUDA_ARCH_LIST"),P6=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),Wj=u(),f(po.$$.fragment),Fj=u(),ke=o("p"),z6=a("So if you get "),nf=o("code"),D6=a("8, 6"),O6=a(", then use "),of=o("code"),A6=a('TORCH_CUDA_ARCH_LIST="8.6"'),T6=a(`. If you have multiple different cards, you can list all
of them like so `),lf=o("code"),S6=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),Vj=u(),Hp=o("p"),C6=a("If you need to use the same setup on multiple machines, make a binary wheel:"),Yj=u(),f(io.$$.fragment),Kj=u(),Re=o("p"),x6=a("it will generate something like "),rf=o("code"),R6=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),I6=a(` which now you can install
as `),pf=o("code"),U6=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),G6=a(" locally or on any other machine."),Jj=u(),$t=o("p"),M6=a("Again, remember to ensure to adjust "),uf=o("code"),L6=a("TORCH_CUDA_ARCH_LIST"),Z6=a(" to the target architectures."),Xj=u(),Ie=o("p"),N6=a("You can find the complete list of NVIDIA GPUs and their corresponding "),cf=o("strong"),H6=a("Compute Capabilities"),B6=a(` (same as arch in this
context) `),uo=o("a"),W6=a("here"),F6=a("."),Qj=u(),Bp=o("p"),V6=a("You can check the archs pytorch was built with using:"),ew=u(),f(co.$$.fragment),sw=u(),Wp=o("p"),Y6=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),tw=u(),f(ho.$$.fragment),aw=u(),Fp=o("p"),K6=a("If the output is:"),nw=u(),f(fo.$$.fragment),ow=u(),kt=o("p"),J6=a("then you know that this card\u2019s arch is "),hf=o("code"),X6=a("8.6"),Q6=a("."),lw=u(),Pt=o("p"),e$=a("You can also leave "),ff=o("code"),s$=a("TORCH_CUDA_ARCH_LIST"),t$=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),rw=u(),zt=o("p"),a$=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),mo=o("a"),n$=a("Deepspeed"),o$=a(","),pw=u(),Vp=o("a"),iw=u(),$s=o("h3"),Dt=o("a"),df=o("span"),f(_o.$$.fragment),l$=u(),mf=o("span"),r$=a("Deployment with multiple GPUs"),uw=u(),Ot=o("p"),p$=a("To deploy this feature with multiple GPUs adjust the "),Yp=o("a"),i$=a("Trainer"),u$=a(` command line arguments as
following:`),cw=u(),At=o("ol"),ks=o("li"),c$=a("replace "),_f=o("code"),h$=a("python -m torch.distributed.launch"),f$=a(" with "),vf=o("code"),d$=a("deepspeed"),m$=a("."),_$=u(),Pe=o("li"),v$=a("add a new argument "),jf=o("code"),j$=a("--deepspeed ds_config.json"),w$=a(", where "),wf=o("code"),y$=a("ds_config.json"),g$=a(` is the DeepSpeed configuration file as
documented `),vo=o("a"),b$=a("here"),q$=a(". The file naming is up to you."),hw=u(),Kp=o("p"),E$=a("Therefore, if your original command line looked as follows:"),fw=u(),f(jo.$$.fragment),dw=u(),Jp=o("p"),$$=a("Now it should be:"),mw=u(),f(wo.$$.fragment),_w=u(),I=o("p"),k$=a("Unlike, "),yf=o("code"),P$=a("torch.distributed.launch"),z$=a(" where you have to specify how many GPUs to use with "),gf=o("code"),D$=a("--nproc_per_node"),O$=a(`, with the
`),bf=o("code"),A$=a("deepspeed"),T$=a(" launcher you don\u2019t have to use the corresponding "),qf=o("code"),S$=a("--num_gpus"),C$=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),yo=o("a"),x$=a("here"),R$=a("."),vw=u(),ae=o("p"),I$=a("In fact, you can continue using "),Ef=o("code"),U$=a("-m torch.distributed.launch"),G$=a(` with DeepSpeed as long as you don\u2019t need to use
`),$f=o("code"),M$=a("deepspeed"),L$=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),kf=o("code"),Z$=a("deepspeed"),N$=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),jw=u(),Tt=o("p"),H$=a("Here is an example of running "),Pf=o("code"),B$=a("run_translation.py"),W$=a(" under DeepSpeed deploying all available GPUs:"),ww=u(),f(go.$$.fragment),yw=u(),St=o("p"),F$=a("Note that in the DeepSpeed documentation you are likely to see "),zf=o("code"),V$=a("--deepspeed --deepspeed_config ds_config.json"),Y$=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),gw=u(),Ct=o("p"),K$=a("For some practical usage examples, please, see this "),bo=o("a"),J$=a("post"),X$=a("."),bw=u(),Xp=o("a"),qw=u(),Ps=o("h3"),xt=o("a"),Df=o("span"),f(qo.$$.fragment),Q$=u(),Of=o("span"),e5=a("Deployment with one GPU"),Ew=u(),Rt=o("p"),s5=a("To deploy DeepSpeed with one GPU adjust the "),Qp=o("a"),t5=a("Trainer"),a5=a(" command line arguments as follows:"),$w=u(),f(Eo.$$.fragment),kw=u(),Ue=o("p"),n5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Af=o("code"),o5=a("--num_gpus=1"),l5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),$o=o("a"),r5=a("documentation"),p5=a(" discusses the launcher options."),Pw=u(),ei=o("p"),i5=a("Why would you want to use DeepSpeed with just one GPU?"),zw=u(),It=o("ol"),Tf=o("li"),u5=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),c5=u(),Sf=o("li"),h5=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),Dw=u(),si=o("p"),f5=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),Ow=u(),f(ko.$$.fragment),Aw=u(),ti=o("p"),d5=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),Tw=u(),Ut=o("p"),m5=a("For a practical usage example of this type of deployment, please, see this "),Po=o("a"),_5=a("post"),v5=a("."),Sw=u(),ai=o("p"),j5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),Cw=u(),ni=o("p"),w5=a("Notes:"),xw=u(),oi=o("ul"),zs=o("li"),zo=o("p"),y5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Cf=o("code"),g5=a("CUDA_VISIBLE_DEVICES"),b5=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),q5=u(),f(Do.$$.fragment),E5=u(),xf=o("p"),$5=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),Rw=u(),li=o("a"),Iw=u(),Ds=o("h3"),Gt=o("a"),Rf=o("span"),f(Oo.$$.fragment),k5=u(),If=o("span"),P5=a("Deployment in Notebooks"),Uw=u(),Mt=o("p"),z5=a("The problem with running notebook cells as a script is that there is no normal "),Uf=o("code"),D5=a("deepspeed"),O5=a(` launcher to rely on, so
under certain setups we have to emulate it.`),Gw=u(),ri=o("p"),A5=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),Mw=u(),f(Ao.$$.fragment),Lw=u(),Lt=o("p"),T5=a("Note: "),Gf=o("code"),S5=a("..."),C5=a(" stands for the normal arguments that you\u2019d pass to the functions."),Zw=u(),pi=o("p"),x5=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),Nw=u(),ii=o("p"),R5=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),Hw=u(),f(To.$$.fragment),Bw=u(),Ge=o("p"),I5=a("If the training script is in a normal file and not in the notebook cells, you can launch "),Mf=o("code"),U5=a("deepspeed"),G5=a(` normally via
shell from a cell. For example, to use `),Lf=o("code"),M5=a("run_translation.py"),L5=a(" you would launch it with:"),Ww=u(),f(So.$$.fragment),Fw=u(),Zt=o("p"),Z5=a("or with "),Zf=o("code"),N5=a("%%bash"),H5=a(" magic, where you can write a multi-line code for the shell program to run:"),Vw=u(),f(Co.$$.fragment),Yw=u(),ui=o("p"),B5=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Kw=u(),Nt=o("p"),W5=a("Note: While "),Nf=o("code"),F5=a("%%bash"),V5=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Jw=u(),ci=o("a"),Xw=u(),Os=o("h3"),Ht=o("a"),Hf=o("span"),f(xo.$$.fragment),Y5=u(),Bf=o("span"),K5=a("Configuration"),Qw=u(),Bt=o("p"),J5=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Ro=o("a"),X5=a("following documentation"),Q5=a("."),ey=u(),Wt=o("p"),e8=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Io=o("a"),s8=a(`the DeepSpeedExamples
repo`),t8=a(":"),sy=u(),f(Uo.$$.fragment),ty=u(),Ft=o("p"),a8=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Wf=o("code"),n8=a(".json"),o8=a(" files with:"),ay=u(),f(Go.$$.fragment),ny=u(),Vt=o("p"),l8=a("Some more examples are to be found in the "),Mo=o("a"),r8=a("main repo"),p8=a(" as well."),oy=u(),hi=o("p"),i8=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),ly=u(),ne=o("p"),u8=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Ff=o("code"),c8=a("AdamW"),h8=a(" optimizer and "),Vf=o("code"),f8=a("WarmupLR"),d8=a(` scheduler and will enable mixed
precision training if `),Yf=o("code"),m8=a("--fp16"),_8=a(" is passed:"),ry=u(),f(Lo.$$.fragment),py=u(),Yt=o("p"),v8=a("When you execute the program, DeepSpeed will log the configuration it received from the "),fi=o("a"),j8=a("Trainer"),w8=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),iy=u(),di=o("a"),uy=u(),As=o("h3"),Kt=o("a"),Kf=o("span"),f(Zo.$$.fragment),y8=u(),Jf=o("span"),g8=a("Passing Configuration"),cy=u(),U=o("p"),b8=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),mi=o("a"),q8=a("Trainer"),E8=a(" via "),_i=o("a"),$8=a("TrainingArguments"),k8=a(" then for the "),Xf=o("code"),P8=a("deepspeed"),z8=a(` argument you can
pass a nested `),Qf=o("code"),D8=a("dict"),O8=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),vi=o("a"),A8=a("TrainingArguments"),T8=a("."),hy=u(),ji=o("p"),S8=a("To summarize you can do:"),fy=u(),f(No.$$.fragment),dy=u(),wi=o("p"),C8=a("or:"),my=u(),f(Ho.$$.fragment),_y=u(),yi=o("a"),vy=u(),Ts=o("h3"),Jt=o("a"),ed=o("span"),f(Bo.$$.fragment),x8=u(),sd=o("span"),R8=a("Shared Configuration"),jy=u(),f(Xt.$$.fragment),wy=u(),Me=o("p"),I8=a("Some configuration values are required by both the "),gi=o("a"),U8=a("Trainer"),G8=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),bi=o("a"),M8=a("Trainer"),L8=a(" command line arguments."),yy=u(),Qt=o("p"),Z8=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),qi=o("a"),N8=a("Trainer"),H8=a(` do the majority
of configuration for you.`),gy=u(),Le=o("p"),B8=a("Therefore, in the rest of this guide you will find a special configuration value: "),td=o("code"),W8=a("auto"),F8=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ei=o("a"),V8=a("Trainer"),Y8=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),by=u(),$i=o("p"),K8=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),qy=u(),ea=o("p"),J8=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ki=o("a"),X8=a("TrainingArguments"),Q8=a(" based on that. The steps are:"),Ey=u(),sa=o("ol"),ad=o("li"),ek=a("Create or load the DeepSpeed configuration to be used as a master configuration"),sk=u(),Wo=o("li"),tk=a("Create the "),Pi=o("a"),ak=a("TrainingArguments"),nk=a(" object based on these values"),$y=u(),oe=o("p"),ok=a("Do note that some values, such as "),nd=o("code"),lk=a("scheduler.params.total_num_steps"),rk=a(` are calculated by
`),zi=o("a"),pk=a("Trainer"),ik=a(" during "),od=o("code"),uk=a("train"),ck=a(", but you can of course do the math yourself."),ky=u(),Di=o("a"),Py=u(),Ss=o("h3"),ta=o("a"),ld=o("span"),f(Fo.$$.fragment),hk=u(),rd=o("span"),fk=a("ZeRO"),zy=u(),Vo=o("p"),Yo=o("a"),dk=a("Zero Redundancy Optimizer (ZeRO)"),mk=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Dy=u(),Ze=o("p"),_k=a("The "),pd=o("code"),vk=a("zero_optimization"),jk=a(" section of the configuration file is the most important part ("),Ko=o("a"),wk=a("docs"),yk=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),Oy=u(),aa=o("p"),gk=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Oi=o("a"),bk=a("Trainer"),qk=a(` provides
no equivalent command line arguments.`),Ay=u(),Ai=o("p"),Ek=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),Ty=u(),Ti=o("a"),Sy=u(),Cs=o("h4"),na=o("a"),id=o("span"),f(Jo.$$.fragment),$k=u(),ud=o("span"),kk=a("ZeRO-2 Config"),Cy=u(),Si=o("p"),Pk=a("The following is an example of configuration for ZeRO stage 2:"),xy=u(),f(Xo.$$.fragment),Ry=u(),Ci=o("p"),cd=o("strong"),zk=a("Performance tuning:"),Iy=u(),Ne=o("ul"),xs=o("li"),Dk=a("enabling "),hd=o("code"),Ok=a("offload_optimizer"),Ak=a(" should reduce GPU RAM usage (it requires "),fd=o("code"),Tk=a('"stage": 2'),Sk=a(")"),Ck=u(),G=o("li"),dd=o("code"),xk=a('"overlap_comm": true'),Rk=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),md=o("code"),Ik=a("overlap_comm"),Uk=a(` uses 4.5x
the `),_d=o("code"),Gk=a("allgather_bucket_size"),Mk=a(" and "),vd=o("code"),Lk=a("reduce_bucket_size"),Zk=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),jd=o("code"),Nk=a("5e8 x 2Bytes x 2 x 4.5"),Hk=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),wd=o("code"),Bk=a("2e8"),Wk=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),Fk=u(),yd=o("li"),Vk=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),Uy=u(),He=o("p"),Yk=a("Additionally, "),gd=o("code"),Kk=a("deepspeed==0.4.4"),Jk=a(" added a new option "),bd=o("code"),Xk=a("round_robin_gradients"),Qk=a(" which you can enable with:"),Gy=u(),f(Qo.$$.fragment),My=u(),xi=o("p"),e7=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),Ly=u(),Ri=o("a"),Zy=u(),Rs=o("h4"),oa=o("a"),qd=o("span"),f(el.$$.fragment),s7=u(),Ed=o("span"),t7=a("ZeRO-3 Config"),Ny=u(),Ii=o("p"),a7=a("The following is an example of configuration for ZeRO stage 3:"),Hy=u(),f(sl.$$.fragment),By=u(),V=o("p"),n7=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),$d=o("code"),o7=a('"device": "cpu"'),l7=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),kd=o("code"),r7=a("none"),p7=a(" instead of "),Pd=o("code"),i7=a("cpu"),u7=a(" for the "),zd=o("code"),c7=a("device"),h7=a(` entry. Offloading to
NVMe is discussed further down.`),Wy=u(),Be=o("p"),f7=a("Pinned memory is enabled with "),Dd=o("code"),d7=a("pin_memory"),m7=a(" set to "),Od=o("code"),_7=a("true"),v7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Fy=u(),Ui=o("p"),Ad=o("strong"),j7=a("Performance tuning:"),Vy=u(),la=o("ul"),tl=o("li"),Td=o("code"),w7=a("stage3_max_live_parameters"),y7=a(": "),Sd=o("code"),g7=a("1e9"),b7=u(),al=o("li"),Cd=o("code"),q7=a("stage3_max_reuse_distance"),E7=a(": "),xd=o("code"),$7=a("1e9"),Yy=u(),M=o("p"),k7=a("If hitting OOM reduce "),Rd=o("code"),P7=a("stage3_max_live_parameters"),z7=a(" and "),Id=o("code"),D7=a("stage3_max_reuse_distance"),O7=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Ud=o("code"),A7=a("1e9"),T7=a(` would consume ~2GB. The memory is shared by
`),Gd=o("code"),S7=a("stage3_max_live_parameters"),C7=a(" and "),Md=o("code"),x7=a("stage3_max_reuse_distance"),R7=a(", so it\u2019s not additive, it\u2019s just 2GB total."),Ky=u(),ze=o("p"),Ld=o("code"),I7=a("stage3_max_live_parameters"),U7=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Zd=o("code"),G7=a("stage3_max_reuse_distance"),M7=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Nd=o("code"),L7=a("stage3_max_reuse_distance"),Z7=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Jy=u(),Gi=o("p"),N7=a("The following configuration values depend on the model\u2019s hidden size:"),Xy=u(),We=o("ul"),nl=o("li"),Hd=o("code"),H7=a("reduce_bucket_size"),B7=a(": "),Bd=o("code"),W7=a("hidden_size*hidden_size"),F7=u(),ol=o("li"),Wd=o("code"),V7=a("stage3_prefetch_bucket_size"),Y7=a(": "),Fd=o("code"),K7=a("0.9 * hidden_size * hidden_size"),J7=u(),ll=o("li"),Vd=o("code"),X7=a("stage3_param_persistence_threshold"),Q7=a(": "),Yd=o("code"),e9=a("10 * hidden_size"),Qy=u(),Fe=o("p"),s9=a("therefore set these values to "),Kd=o("code"),t9=a("auto"),a9=a(" and the "),Mi=o("a"),n9=a("Trainer"),o9=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),eg=u(),rl=o("p"),Jd=o("code"),l9=a("stage3_gather_16bit_weights_on_model_save"),r9=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),sg=u(),le=o("p"),p9=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Xd=o("code"),i9=a("allgather_partitions"),u9=a(", "),Qd=o("code"),c9=a("allgather_bucket_size"),h9=a(` and
`),em=o("code"),f9=a("reduce_scatter"),d9=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),tg=u(),Li=o("ul"),pl=o("li"),sm=o("code"),m9=a("sub_group_size"),_9=a(": "),tm=o("code"),v9=a("1e9"),ag=u(),De=o("p"),am=o("code"),j9=a("sub_group_size"),w9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),nm=o("code"),y9=a("sub_group_size"),g9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),om=o("code"),b9=a("sub_group_size"),q9=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),ng=u(),Ve=o("p"),E9=a("You can leave "),lm=o("code"),$9=a("sub_group_size"),k9=a(" to its default value of "),rm=o("em"),P9=a("1e9"),z9=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),og=u(),ra=o("ol"),il=o("li"),D9=a("Running into OOM during optimizer step: Reduce "),pm=o("code"),O9=a("sub_group_size"),A9=a(" to reduce memory utilization of temporary buffers"),T9=u(),ul=o("li"),S9=a("Optimizer Step is taking a long time: Increase "),im=o("code"),C9=a("sub_group_size"),x9=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),lg=u(),Zi=o("a"),rg=u(),Is=o("h3"),pa=o("a"),um=o("span"),f(cl.$$.fragment),R9=u(),cm=o("span"),I9=a("NVMe Support"),pg=u(),Ni=o("p"),U9=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),ig=u(),Hi=o("p"),G9=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),ug=u(),f(hl.$$.fragment),cg=u(),ia=o("p"),M9=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),hm=o("em"),L9=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),Z9=a(")."),hg=u(),Ye=o("p"),N9=a("Here is the full documentation for offloading "),fl=o("a"),H9=a("optimizer states"),B9=a(" and "),dl=o("a"),W9=a("parameters"),F9=a("."),fg=u(),ua=o("p"),V9=a("Make sure that your "),fm=o("code"),Y9=a("nvme_path"),K9=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),dg=u(),Ke=o("p"),J9=a("In order to figure out the optimal "),dm=o("code"),X9=a("aio"),Q9=a(` configuration block you must run a benchmark on your target setup, as
`),ml=o("a"),eP=a("explained here"),sP=a("."),mg=u(),Bi=o("a"),_g=u(),Us=o("h4"),ca=o("a"),mm=o("span"),f(_l.$$.fragment),tP=u(),_m=o("span"),aP=a("ZeRO-2 vs ZeRO-3 Performance"),vg=u(),Wi=o("p"),nP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),jg=u(),Fi=o("p"),oP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),wg=u(),ha=o("ul"),Gs=o("li"),lP=a("set "),vm=o("code"),rP=a("stage3_param_persistence_threshold"),pP=a(" to a very large number - larger than the largest parameter, e.g., "),jm=o("code"),iP=a("6 * hidden_size * hidden_size"),uP=a(". This will keep the parameters on the GPUs."),cP=u(),vl=o("li"),hP=a("turn off "),wm=o("code"),fP=a("offload_params"),dP=a(" since ZeRO-2 doesn\u2019t have that option."),yg=u(),Je=o("p"),mP=a("The performance will likely improve significantly with just "),ym=o("code"),_P=a("offload_params"),vP=a(` turned off, even if you don\u2019t change
`),gm=o("code"),jP=a("stage3_param_persistence_threshold"),wP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),gg=u(),Vi=o("a"),bg=u(),Ms=o("h4"),fa=o("a"),bm=o("span"),f(jl.$$.fragment),yP=u(),qm=o("span"),gP=a("ZeRO-2 Example"),qg=u(),da=o("p"),bP=a("Here is a full ZeRO-2 auto-configuration file "),Em=o("code"),qP=a("ds_config_zero2.json"),EP=a(":"),Eg=u(),f(wl.$$.fragment),$g=u(),ma=o("p"),$P=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),$m=o("code"),kP=a("auto"),PP=a(" settings in it."),kg=u(),f(yl.$$.fragment),Pg=u(),Yi=o("a"),zg=u(),Ls=o("h4"),_a=o("a"),km=o("span"),f(gl.$$.fragment),zP=u(),Pm=o("span"),DP=a("ZeRO-3 Example"),Dg=u(),va=o("p"),OP=a("Here is a full ZeRO-3 auto-configuration file "),zm=o("code"),AP=a("ds_config_zero3.json"),TP=a(":"),Og=u(),f(bl.$$.fragment),Ag=u(),ja=o("p"),SP=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Dm=o("code"),CP=a("auto"),xP=a(" settings in it."),Tg=u(),f(ql.$$.fragment),Sg=u(),Zs=o("h3"),wa=o("a"),Om=o("span"),f(El.$$.fragment),RP=u(),Am=o("span"),IP=a("Optimizer and Scheduler"),Cg=u(),ya=o("p"),UP=a("As long as you don\u2019t enable "),Tm=o("code"),GP=a("offload_optimizer"),MP=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),xg=u(),Ki=o("p"),LP=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),Rg=u(),ga=o("p"),ZP=a("It is possible to use a non-DeepSpeed optimizer when "),Sm=o("code"),NP=a("offload_optimizer"),HP=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Ig=u(),Ji=o("a"),Ug=u(),Ns=o("h4"),ba=o("a"),Cm=o("span"),f($l.$$.fragment),BP=u(),xm=o("span"),WP=a("Optimizer"),Gg=u(),Xe=o("p"),FP=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Rm=o("code"),VP=a("torch"),YP=a(". The full documentation is "),kl=o("a"),KP=a("here"),JP=a("."),Mg=u(),$=o("p"),XP=a("If you don\u2019t configure the "),Im=o("code"),QP=a("optimizer"),ez=a(" entry in the configuration file, the "),Xi=o("a"),sz=a("Trainer"),tz=a(` will
automatically set it to `),Um=o("code"),az=a("AdamW"),nz=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Gm=o("code"),oz=a("--learning_rate"),lz=a(", "),Mm=o("code"),rz=a("--adam_beta1"),pz=a(", "),Lm=o("code"),iz=a("--adam_beta2"),uz=a(", "),Zm=o("code"),cz=a("--adam_epsilon"),hz=a(" and "),Nm=o("code"),fz=a("--weight_decay"),dz=a("."),Lg=u(),Qe=o("p"),mz=a("Here is an example of the auto-configured "),Hm=o("code"),_z=a("optimizer"),vz=a(" entry for "),Bm=o("code"),jz=a("AdamW"),wz=a(":"),Zg=u(),f(Pl.$$.fragment),Ng=u(),Qi=o("p"),yz=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),Hg=u(),re=o("ul"),zl=o("li"),Wm=o("code"),gz=a("lr"),bz=a(" with the value of "),Fm=o("code"),qz=a("--learning_rate"),Ez=u(),Dl=o("li"),Vm=o("code"),$z=a("betas"),kz=a(" with the value of "),Ym=o("code"),Pz=a("--adam_beta1 --adam_beta2"),zz=u(),Ol=o("li"),Km=o("code"),Dz=a("eps"),Oz=a(" with the value of "),Jm=o("code"),Az=a("--adam_epsilon"),Tz=u(),Al=o("li"),Xm=o("code"),Sz=a("weight_decay"),Cz=a(" with the value of "),Qm=o("code"),xz=a("--weight_decay"),Bg=u(),eu=o("p"),Rz=a("Therefore please remember to tune the shared hyperparameters on the command line."),Wg=u(),su=o("p"),Iz=a("You can also set the values explicitly:"),Fg=u(),f(Tl.$$.fragment),Vg=u(),qa=o("p"),Uz=a("But then you\u2019re on your own synchronizing the "),tu=o("a"),Gz=a("Trainer"),Mz=a(` command line arguments and the DeepSpeed
configuration.`),Yg=u(),au=o("p"),Lz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),Kg=u(),f(Sl.$$.fragment),Jg=u(),pe=o("p"),Zz=a("Similarly to "),e_=o("code"),Nz=a("AdamW"),Hz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),s_=o("code"),Bz=a("weight_decay"),Wz=a(" around "),t_=o("code"),Fz=a("0.01"),Vz=a("."),Xg=u(),nu=o("a"),Qg=u(),Hs=o("h4"),Ea=o("a"),a_=o("span"),f(Cl.$$.fragment),Yz=u(),n_=o("span"),Kz=a("Scheduler"),e2=u(),L=o("p"),Jz=a("DeepSpeed supports "),o_=o("code"),Xz=a("LRRangeTest"),Qz=a(", "),l_=o("code"),eD=a("OneCycle"),sD=a(", "),r_=o("code"),tD=a("WarmupLR"),aD=a(" and "),p_=o("code"),nD=a("WarmupDecayLR"),oD=a(` learning rate schedulers. The full
documentation is `),xl=o("a"),lD=a("here"),rD=a("."),s2=u(),ou=o("p"),pD=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),t2=u(),$a=o("ul"),Rl=o("li"),i_=o("code"),iD=a("WarmupLR"),uD=a(" via "),u_=o("code"),cD=a("--lr_scheduler_type constant_with_warmup"),hD=u(),es=o("li"),c_=o("code"),fD=a("WarmupDecayLR"),dD=a(" via "),h_=o("code"),mD=a("--lr_scheduler_type linear"),_D=a(". This is also the default value for "),f_=o("code"),vD=a("--lr_scheduler_type"),jD=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),a2=u(),D=o("p"),wD=a("If you don\u2019t configure the "),d_=o("code"),yD=a("scheduler"),gD=a(" entry in the configuration file, the "),lu=o("a"),bD=a("Trainer"),qD=a(` will use
the values of `),m_=o("code"),ED=a("--lr_scheduler_type"),$D=a(", "),__=o("code"),kD=a("--learning_rate"),PD=a(" and "),v_=o("code"),zD=a("--warmup_steps"),DD=a(" or "),j_=o("code"),OD=a("--warmup_ratio"),AD=a(` to configure a
\u{1F917} Transformers version of it.`),n2=u(),ss=o("p"),TD=a("Here is an example of the auto-configured "),w_=o("code"),SD=a("scheduler"),CD=a(" entry for "),y_=o("code"),xD=a("WarmupLR"),RD=a(":"),o2=u(),f(Il.$$.fragment),l2=u(),ts=o("p"),ID=a("Since "),g_=o("em"),UD=a("\u201Cauto\u201D"),GD=a(" is used the "),ru=o("a"),MD=a("Trainer"),LD=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),r2=u(),ie=o("ul"),ka=o("li"),b_=o("code"),ZD=a("warmup_min_lr"),ND=a(" with the value of "),q_=o("code"),HD=a("0"),BD=a("."),WD=u(),Pa=o("li"),E_=o("code"),FD=a("warmup_max_lr"),VD=a(" with the value of "),$_=o("code"),YD=a("--learning_rate"),KD=a("."),JD=u(),as=o("li"),k_=o("code"),XD=a("warmup_num_steps"),QD=a(" with the value of "),P_=o("code"),eO=a("--warmup_steps"),sO=a(" if provided. Otherwise will use "),z_=o("code"),tO=a("--warmup_ratio"),aO=a(`
multiplied by the number of training steps and rounded up.`),nO=u(),ns=o("li"),D_=o("code"),oO=a("total_num_steps"),lO=a(" with either the value of "),O_=o("code"),rO=a("--max_steps"),pO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),A_=o("code"),iO=a("WarmupDecayLR"),uO=a(")."),p2=u(),pu=o("p"),cO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),i2=u(),f(Ul.$$.fragment),u2=u(),za=o("p"),hO=a("But then you\u2019re on your own synchronizing the "),iu=o("a"),fO=a("Trainer"),dO=a(` command line arguments and the DeepSpeed
configuration.`),c2=u(),Da=o("p"),mO=a("For example, for "),T_=o("code"),_O=a("WarmupDecayLR"),vO=a(", you can use the following entry:"),h2=u(),f(Gl.$$.fragment),f2=u(),Y=o("p"),jO=a("and "),S_=o("code"),wO=a("total_num_steps"),yO=a(", "),C_=o("code"),gO=a("warmup_max_lr"),bO=a(", "),x_=o("code"),qO=a("warmup_num_steps"),EO=a(" and "),R_=o("code"),$O=a("total_num_steps"),kO=a(" will be set at loading time."),d2=u(),uu=o("a"),m2=u(),Bs=o("h3"),Oa=o("a"),I_=o("span"),f(Ml.$$.fragment),PO=u(),U_=o("span"),zO=a("fp32 Precision"),_2=u(),cu=o("p"),DO=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),v2=u(),Aa=o("p"),OO=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),G_=o("code"),AO=a("NaN"),TO=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),j2=u(),f(Ll.$$.fragment),w2=u(),Ta=o("p"),SO=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Zl=o("a"),CO=a("TensorFloat-32(TF32) on Ampere devices"),xO=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),y2=u(),ue=o("p"),RO=a("With the \u{1F917} Trainer you can use "),M_=o("code"),IO=a("--tf32"),UO=a(" to enable it, or disable it with "),L_=o("code"),GO=a("--tf32 0"),MO=a(" or "),Z_=o("code"),LO=a("--no_tf32"),ZO=a(". By default the PyTorch default is used."),g2=u(),hu=o("a"),b2=u(),Ws=o("h3"),Sa=o("a"),N_=o("span"),f(Nl.$$.fragment),NO=u(),H_=o("span"),HO=a("Automatic Mixed Precision"),q2=u(),fu=o("p"),BO=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),E2=u(),Fs=o("h3"),Ca=o("a"),B_=o("span"),f(Hl.$$.fragment),WO=u(),W_=o("span"),FO=a("fp16"),$2=u(),du=o("p"),VO=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),k2=u(),f(Bl.$$.fragment),P2=u(),os=o("p"),YO=a("and the "),mu=o("a"),KO=a("Trainer"),JO=a(` will automatically enable or disable it based on the value of
`),F_=o("code"),XO=a("args.fp16_backend"),QO=a(". The rest of config values are up to you."),z2=u(),ls=o("p"),eA=a("This mode gets enabled when "),V_=o("code"),sA=a("--fp16 --fp16_backend amp"),tA=a(" or "),Y_=o("code"),aA=a("--fp16_full_eval"),nA=a(" command line args are passed."),D2=u(),_u=o("p"),oA=a("You can also enable/disable this mode explicitly:"),O2=u(),f(Wl.$$.fragment),A2=u(),xa=o("p"),lA=a("But then you\u2019re on your own synchronizing the "),vu=o("a"),rA=a("Trainer"),pA=a(` command line arguments and the DeepSpeed
configuration.`),T2=u(),Ra=o("p"),iA=a("Here is the "),Fl=o("a"),uA=a("documentation"),cA=a("."),S2=u(),Vs=o("h3"),Ia=o("a"),K_=o("span"),f(Vl.$$.fragment),hA=u(),J_=o("span"),fA=a("bf16"),C2=u(),ju=o("p"),dA=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),x2=u(),f(Yl.$$.fragment),R2=u(),wu=o("p"),mA=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),I2=u(),rs=o("p"),_A=a("This mode gets enabled when "),X_=o("code"),vA=a("--bf16"),jA=a(" or "),Q_=o("code"),wA=a("--bf16_full_eval"),yA=a(" command line args are passed."),U2=u(),yu=o("p"),gA=a("You can also enable/disable this mode explicitly:"),G2=u(),f(Kl.$$.fragment),M2=u(),f(Ua.$$.fragment),L2=u(),Ys=o("h3"),Ga=o("a"),e1=o("span"),f(Jl.$$.fragment),bA=u(),s1=o("span"),qA=a("apex"),Z2=u(),gu=o("p"),EA=a("To configure apex AMP-like mode set:"),N2=u(),f(Xl.$$.fragment),H2=u(),ce=o("p"),$A=a("and the "),bu=o("a"),kA=a("Trainer"),PA=a(" will automatically configure it based on the values of "),t1=o("code"),zA=a("args.fp16_backend"),DA=a(` and
`),a1=o("code"),OA=a("args.fp16_opt_level"),AA=a("."),B2=u(),Ma=o("p"),TA=a("This mode gets enabled when "),n1=o("code"),SA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),CA=a(" command line args are passed."),W2=u(),qu=o("p"),xA=a("You can also configure this mode explicitly:"),F2=u(),f(Ql.$$.fragment),V2=u(),La=o("p"),RA=a("But then you\u2019re on your own synchronizing the "),Eu=o("a"),IA=a("Trainer"),UA=a(` command line arguments and the DeepSpeed
configuration.`),Y2=u(),Za=o("p"),GA=a("Here is the "),er=o("a"),MA=a("documentation"),LA=a("."),K2=u(),$u=o("a"),J2=u(),Ks=o("h3"),Na=o("a"),o1=o("span"),f(sr.$$.fragment),ZA=u(),l1=o("span"),NA=a("Batch Size"),X2=u(),ku=o("p"),HA=a("To configure batch size, use:"),Q2=u(),f(tr.$$.fragment),eb=u(),Z=o("p"),BA=a("and the "),Pu=o("a"),WA=a("Trainer"),FA=a(" will automatically set "),r1=o("code"),VA=a("train_micro_batch_size_per_gpu"),YA=a(` to the value of
`),p1=o("code"),KA=a("args.per_device_train_batch_size"),JA=a(" and "),i1=o("code"),XA=a("train_batch_size"),QA=a(" to "),u1=o("code"),eT=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),sT=a("."),sb=u(),zu=o("p"),tT=a("You can also set the values explicitly:"),tb=u(),f(ar.$$.fragment),ab=u(),Ha=o("p"),aT=a("But then you\u2019re on your own synchronizing the "),Du=o("a"),nT=a("Trainer"),oT=a(` command line arguments and the DeepSpeed
configuration.`),nb=u(),Ou=o("a"),ob=u(),Js=o("h3"),Ba=o("a"),c1=o("span"),f(nr.$$.fragment),lT=u(),h1=o("span"),rT=a("Gradient Accumulation"),lb=u(),Au=o("p"),pT=a("To configure gradient accumulation set:"),rb=u(),f(or.$$.fragment),pb=u(),ps=o("p"),iT=a("and the "),Tu=o("a"),uT=a("Trainer"),cT=a(" will automatically set it to the value of "),f1=o("code"),hT=a("args.gradient_accumulation_steps"),fT=a("."),ib=u(),Su=o("p"),dT=a("You can also set the value explicitly:"),ub=u(),f(lr.$$.fragment),cb=u(),Wa=o("p"),mT=a("But then you\u2019re on your own synchronizing the "),Cu=o("a"),_T=a("Trainer"),vT=a(` command line arguments and the DeepSpeed
configuration.`),hb=u(),xu=o("a"),fb=u(),Xs=o("h3"),Fa=o("a"),d1=o("span"),f(rr.$$.fragment),jT=u(),m1=o("span"),wT=a("Gradient Clipping"),db=u(),Ru=o("p"),yT=a("To configure gradient gradient clipping set:"),mb=u(),f(pr.$$.fragment),_b=u(),is=o("p"),gT=a("and the "),Iu=o("a"),bT=a("Trainer"),qT=a(" will automatically set it to the value of "),_1=o("code"),ET=a("args.max_grad_norm"),$T=a("."),vb=u(),Uu=o("p"),kT=a("You can also set the value explicitly:"),jb=u(),f(ir.$$.fragment),wb=u(),Va=o("p"),PT=a("But then you\u2019re on your own synchronizing the "),Gu=o("a"),zT=a("Trainer"),DT=a(` command line arguments and the DeepSpeed
configuration.`),yb=u(),Mu=o("a"),gb=u(),Qs=o("h3"),Ya=o("a"),v1=o("span"),f(ur.$$.fragment),OT=u(),j1=o("span"),AT=a("Getting The Model Weights Out"),bb=u(),Ka=o("p"),TT=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),w1=o("code"),ST=a("global_step*/*optim_states.pt"),CT=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),qb=u(),Lu=o("p"),y1=o("strong"),xT=a("FP16 Weights:"),Eb=u(),Ja=o("p"),RT=a("When a model is saved under ZeRO-2, you end up having the normal "),g1=o("code"),IT=a("pytorch_model.bin"),UT=a(` file with the model weights, but
they are only the fp16 version of the weights.`),$b=u(),O=o("p"),GT=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),b1=o("code"),MT=a('"stage3_gather_16bit_weights_on_model_save": true'),LT=a(" is required to get the "),q1=o("code"),ZT=a("Trainer"),NT=a(` to save the fp16
version of the weights. If this setting is `),E1=o("code"),HT=a("False"),BT=u(),$1=o("code"),WT=a("pytorch_model.bin"),FT=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),k1=o("code"),VT=a("state_dict"),YT=a(" contains a placeholder and not the real weights. If we were to save this "),P1=o("code"),KT=a("state_dict"),JT=a(" it won\u2019t be possible to load it back."),kb=u(),f(cr.$$.fragment),Pb=u(),Zu=o("p"),z1=o("strong"),XT=a("FP32 Weights:"),zb=u(),Xa=o("p"),QT=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),hr=o("a"),eS=a("models hub"),sS=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Db=u(),Nu=o("p"),D1=o("strong"),tS=a("Live FP32 Weights Recovery:"),Ob=u(),Hu=o("p"),aS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Ab=u(),Bu=o("p"),nS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Tb=u(),f(fr.$$.fragment),Sb=u(),us=o("p"),oS=a("If you\u2019re using the "),O1=o("code"),lS=a("--load_best_model_at_end"),rS=a(" class:"),A1=o("em"),pS=a("~transformers.TrainingArguments"),iS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Cb=u(),f(dr.$$.fragment),xb=u(),f(Qa.$$.fragment),Rb=u(),en=o("p"),uS=a("Of course, you don\u2019t have to use class:"),T1=o("em"),cS=a("~transformers.Trainer"),hS=a(` and you can adjust the examples above to your own
trainer.`),Ib=u(),sn=o("p"),fS=a("If for some reason you want more refinement, you can also extract the fp32 "),S1=o("code"),dS=a("state_dict"),mS=a(` of the weights and apply
these yourself as is shown in the following example:`),Ub=u(),f(mr.$$.fragment),Gb=u(),Wu=o("p"),C1=o("strong"),_S=a("Offline FP32 Weights Recovery:"),Mb=u(),cs=o("p"),vS=a("DeepSpeed creates a special conversion script "),x1=o("code"),jS=a("zero_to_fp32.py"),wS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),R1=o("code"),yS=a("Trainer"),gS=a(" to do the extraction."),Lb=u(),Fu=o("p"),bS=a("Let\u2019s say your checkpoint folder looks like this:"),Zb=u(),f(_r.$$.fragment),Nb=u(),tn=o("p"),qS=a("In this example there is just one DeepSpeed checkpoint sub-folder "),I1=o("em"),ES=a("global_step1"),$S=a(`. Therefore to reconstruct the fp32
weights just run:`),Hb=u(),f(vr.$$.fragment),Bb=u(),an=o("p"),kS=a("This is it. "),U1=o("code"),PS=a("pytorch_model.bin"),zS=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),Wb=u(),Vu=o("p"),DS=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),Fb=u(),jr=o("p"),G1=o("code"),OS=a("python zero_to_fp32.py -h"),AS=a(" will give you usage details."),Vb=u(),hs=o("p"),TS=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),M1=o("code"),SS=a("latest"),CS=a(`, which in the current
example will contain `),L1=o("code"),xS=a("global_step1"),RS=a("."),Yb=u(),Yu=o("p"),IS=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),Kb=u(),et=o("h3"),nn=o("a"),Z1=o("span"),f(wr.$$.fragment),US=u(),N1=o("span"),GS=a("ZeRO-3 and Infinity Nuances"),Jb=u(),Ku=o("p"),MS=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),Xb=u(),Ju=o("p"),LS=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),Qb=u(),Xu=o("p"),ZS=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),e3=u(),st=o("h4"),on=o("a"),H1=o("span"),f(yr.$$.fragment),NS=u(),B1=o("span"),HS=a("Constructing Massive Models"),s3=u(),ln=o("p"),BS=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),W1=o("em"),WS=a("deepspeed.zero.Init()"),FS=a(`
context manager (which is also a function decorator), like so:`),t3=u(),f(gr.$$.fragment),a3=u(),Qu=o("p"),VS=a("As you can see this gives you a randomly initialized model."),n3=u(),P=o("p"),YS=a("If you want to use a pretrained model, "),F1=o("code"),KS=a("model_class.from_pretrained"),JS=a(` will activate this feature as long as
`),V1=o("code"),XS=a("is_deepspeed_zero3_enabled()"),QS=a(" returns "),Y1=o("code"),eC=a("True"),sC=a(`, which currently is setup by the
`),ec=o("a"),tC=a("TrainingArguments"),aC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),sc=o("a"),nC=a("TrainingArguments"),oC=a(" object "),K1=o("strong"),lC=a("before"),rC=a(` calling
`),J1=o("code"),pC=a("from_pretrained"),iC=a(". Here is an example of a possible sequence:"),o3=u(),f(br.$$.fragment),l3=u(),rn=o("p"),uC=a("If you\u2019re using the official example scripts and your command line arguments include "),X1=o("code"),cC=a("--deepspeed ds_config.json"),hC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),r3=u(),tc=o("p"),fC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),p3=u(),pn=o("p"),dC=a("For full details on this method and other related features please refer to "),qr=o("a"),mC=a("Constructing Massive Models"),_C=a("."),i3=u(),he=o("p"),vC=a("Also when loading fp16-pretrained models, you will want to tell "),Q1=o("code"),jC=a("from_pretrained"),wC=a(` to use
`),ev=o("code"),yC=a("torch_dtype=torch.float16"),gC=a(". For details, please, see "),ac=o("a"),bC=a("from_pretrained-torch-dtype"),qC=a("."),u3=u(),tt=o("h4"),un=o("a"),sv=o("span"),f(Er.$$.fragment),EC=u(),tv=o("span"),$C=a("Gathering Parameters"),c3=u(),$r=o("p"),kC=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),kr=o("a"),PC=a("Gathering Parameters"),h3=u(),cn=o("p"),zC=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),av=o("code"),DC=a("from_pretrained"),OC=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),f3=u(),nc=o("p"),AC=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),d3=u(),f(Pr.$$.fragment),m3=u(),fs=o("p"),TC=a("stress on "),nv=o("code"),SC=a("tensor([1.])"),CC=a(", or if you get an error where it says the parameter is of size "),ov=o("code"),xC=a("1"),RC=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),_3=u(),oc=o("a"),v3=u(),at=o("h3"),hn=o("a"),lv=o("span"),f(zr.$$.fragment),IC=u(),rv=o("span"),UC=a("ZeRO Inference"),j3=u(),lc=o("p"),GC=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),w3=u(),fn=o("p"),MC=a("Otherwise you just need to pass the usual "),rc=o("a"),LC=a("TrainingArguments"),ZC=a(" arguments. For example:"),y3=u(),f(Dr.$$.fragment),g3=u(),pc=o("p"),NC=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),b3=u(),dn=o("p"),HC=a("Here is an example of running "),pv=o("code"),BC=a("run_translation.py"),WC=a(" under DeepSpeed deploying all available GPUs:"),q3=u(),f(Or.$$.fragment),E3=u(),ic=o("p"),FC=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),$3=u(),uc=o("p"),VC=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),k3=u(),nt=o("h3"),mn=o("a"),iv=o("span"),f(Ar.$$.fragment),YC=u(),uv=o("span"),KC=a("Memory Requirements"),P3=u(),cc=o("p"),JC=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),z3=u(),hc=o("p"),XC=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),D3=u(),f(Tr.$$.fragment),O3=u(),fc=o("p"),QC=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),A3=u(),dc=o("p"),ex=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),T3=u(),mc=o("p"),sx=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),S3=u(),_c=o("p"),tx=a("For example, let\u2019s repeat the same for 2 GPUs:"),C3=u(),f(Sr.$$.fragment),x3=u(),vc=o("p"),ax=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),R3=u(),_n=o("p"),nx=a("For full information please see "),Cr=o("a"),ox=a("memory estimators"),lx=a("."),I3=u(),ot=o("h3"),vn=o("a"),cv=o("span"),f(xr.$$.fragment),rx=u(),hv=o("span"),px=a("Filing Issues"),U3=u(),jc=o("p"),ix=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),G3=u(),wc=o("p"),ux=a("In your report please always include:"),M3=u(),N=o("ol"),fv=o("li"),dv=o("p"),cx=a("the full Deepspeed config file in the report"),hx=u(),mv=o("li"),Oe=o("p"),fx=a("either the command line arguments if you were using the "),yc=o("a"),dx=a("Trainer"),mx=a(` or
`),gc=o("a"),_x=a("TrainingArguments"),vx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),bc=o("a"),jx=a("TrainingArguments"),wx=a(" as it has dozens of entries that are irrelevant."),yx=u(),Rr=o("li"),_v=o("p"),gx=a("Output of:"),bx=u(),f(Ir.$$.fragment),qx=u(),vv=o("li"),Ur=o("p"),Ex=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Gr=o("a"),$x=a("notebook"),kx=a(` as
a starting point.`),Px=u(),jv=o("li"),wv=o("p"),zx=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),Dx=u(),yv=o("li"),Mr=o("p"),Ox=a("If possible try to use one of the existing "),Lr=o("a"),Ax=a("examples"),Tx=a(" to reproduce the problem with."),L3=u(),qc=o("p"),Sx=a("Things to consider:"),Z3=u(),jn=o("ul"),lt=o("li"),gv=o("p"),Cx=a("Deepspeed is often not the cause of the problem."),xx=u(),bv=o("p"),Rx=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),Ix=u(),qv=o("p"),Ux=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),Gx=u(),Ev=o("li"),Zr=o("p"),Mx=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Nr=o("a"),Lx=a("Deepspeed"),Zx=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),N3=u(),rt=o("h3"),wn=o("a"),$v=o("span"),f(Hr.$$.fragment),Nx=u(),kv=o("span"),Hx=a("Troubleshooting"),H3=u(),pt=o("h4"),yn=o("a"),Pv=o("span"),f(Br.$$.fragment),Bx=u(),Wr=o("span"),Wx=a("the "),zv=o("code"),Fx=a("deepspeed"),Vx=a(" process gets killed at startup without a traceback"),B3=u(),H=o("p"),Yx=a("If the "),Dv=o("code"),Kx=a("deepspeed"),Jx=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Ov=o("code"),Xx=a("offload_optimizer"),Qx=a(" or "),Av=o("code"),eR=a("offload_param"),sR=a(` or
both configured to offload to `),Tv=o("code"),tR=a("cpu"),aR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Fr=o("a"),nR=a("estimate how much memory is needed for a specific model"),oR=a("."),W3=u(),it=o("h4"),gn=o("a"),Sv=o("span"),f(Vr.$$.fragment),lR=u(),Ec=o("span"),rR=a("training and/or eval/predict loss is "),Cv=o("code"),pR=a("NaN"),F3=u(),$c=o("p"),iR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),V3=u(),kc=o("p"),uR=a("The other problem may have to do with using fp16. When you configure this section:"),Y3=u(),f(Yr.$$.fragment),K3=u(),bn=o("p"),cR=a("and you see in your log that Deepspeed reports "),xv=o("code"),hR=a("OVERFLOW!"),fR=a(" as follows:"),J3=u(),f(Kr.$$.fragment),X3=u(),Pc=o("p"),dR=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),Q3=u(),zc=o("p"),mR=a("(the log was massaged to be more readable here.)"),e0=u(),ds=o("p"),_R=a("In this case you usually need to raise the value of "),Rv=o("code"),vR=a("initial_scale_power"),jR=a(". Setting it to "),Iv=o("code"),wR=a('"initial_scale_power": 32'),yR=a(" will typically resolve the problem."),s0=u(),ut=o("h3"),qn=o("a"),Uv=o("span"),f(Jr.$$.fragment),gR=u(),Gv=o("span"),bR=a("Notes"),t0=u(),ms=o("ul"),ct=o("li"),qR=a("DeepSpeed works with the PyTorch "),Dc=o("a"),ER=a("Trainer"),$R=a(" but not TF "),Mv=o("code"),kR=a("TFTrainer"),PR=a("."),zR=u(),Xr=o("li"),DR=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Qr=o("a"),OR=a("source"),AR=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),TR=u(),ht=o("li"),SR=a("You don\u2019t have to use the "),Oc=o("a"),CR=a("Trainer"),xR=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ep=o("a"),RR=a("the DeepSpeed integration instructions"),IR=a("."),a0=u(),ft=o("h2"),En=o("a"),Lv=o("span"),f(sp.$$.fragment),UR=u(),Zv=o("span"),GR=a("Non-Trainer Deepspeed Integration"),n0=u(),fe=o("p"),MR=a("The "),Ac=o("a"),LR=a("HfDeepSpeedConfig"),ZR=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Tc=o("a"),NR=a("Trainer"),HR=a(" is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),Nv=o("code"),BR=a("from_pretrained"),WR=a(" call. Everything else you have to do by yourself."),o0=u(),$n=o("p"),FR=a("When using "),Sc=o("a"),VR=a("Trainer"),YR=a(" everything is automatically taken care of."),l0=u(),_s=o("p"),KR=a("When not using "),Cc=o("a"),JR=a("Trainer"),XR=a(`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),xc=o("a"),QR=a("HfDeepSpeedConfig"),eI=a(" object before instantiating the model and keep that object alive."),r0=u(),kn=o("p"),sI=a("If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),Hv=o("code"),tI=a("HfDeepSpeedConfig"),aI=a(" at all."),p0=u(),Rc=o("p"),nI=a("For example for a pretrained model:"),i0=u(),f(tp.$$.fragment),u0=u(),Ic=o("p"),oI=a("or for non-pretrained model:"),c0=u(),f(ap.$$.fragment),h0=u(),de=o("p"),lI=a("Please note that if you\u2019re not using the "),Uc=o("a"),rI=a("Trainer"),pI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),np=o("a"),iI=a("Deepspeed"),uI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),Bv=o("code"),cI=a('"auto"'),hI=a(" values and you will have to put real values instead."),f0=u(),dt=o("h2"),Pn=o("a"),Wv=o("span"),f(op.$$.fragment),fI=u(),Fv=o("span"),dI=a("HfDeepSpeedConfig"),d0=u(),ee=o("div"),f(lp.$$.fragment),mI=u(),Vv=o("p"),_I=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),vI=u(),Ae=o("p"),jI=a("A "),Yv=o("code"),wI=a("weakref"),yI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Kv=o("code"),gI=a("from_pretrained"),bI=a(" and "),Jv=o("code"),qI=a("_get_resized_embeddings"),EI=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),$I=u(),me=o("p"),Gc=o("a"),kI=a("Trainer"),PI=a(" uses the "),Xv=o("code"),zI=a("HfTrainerDeepSpeedConfig"),DI=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Mc=o("a"),OI=a("TrainingArguments"),AI=a(" by replacing special placeholder values: "),Qv=o("code"),TI=a('"auto"'),SI=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),m0=u(),mt=o("h3"),zn=o("a"),ej=o("span"),f(rp.$$.fragment),CI=u(),sj=o("span"),xI=a("Custom DeepSpeed ZeRO Inference"),_0=u(),Dn=o("p"),RI=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Lc=o("a"),II=a("Trainer"),UI=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),v0=u(),Zc=o("p"),GI=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),j0=u(),Nc=o("p"),MI=a("The example has copious notes and is self-documenting."),w0=u(),Hc=o("p"),LI=a("Make sure to:"),y0=u(),On=o("ol"),tj=o("li"),ZI=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),NI=u(),aj=o("li"),HI=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),g0=u(),f(pp.$$.fragment),b0=u(),An=o("p"),BI=a("Let\u2019s save it as "),nj=o("code"),WI=a("t0.py"),FI=a(" and run it:"),q0=u(),f(ip.$$.fragment),E0=u(),Bc=o("p"),VI=a("This was a very basic example and you will want to adapt it to your needs."),$0=u(),_t=o("h2"),Tn=o("a"),oj=o("span"),f(up.$$.fragment),YI=u(),lj=o("span"),KI=a("Main DeepSpeed Resources"),k0=u(),_e=o("ul"),rj=o("li"),cp=o("a"),JI=a("Project\u2019s github"),XI=u(),pj=o("li"),hp=o("a"),QI=a("Usage docs"),eU=u(),ij=o("li"),fp=o("a"),sU=a("API docs"),tU=u(),uj=o("li"),dp=o("a"),aU=a("Blog posts"),P0=u(),Wc=o("p"),nU=a("Papers:"),z0=u(),vs=o("ul"),cj=o("li"),mp=o("a"),oU=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),lU=u(),hj=o("li"),_p=o("a"),rU=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),pU=u(),fj=o("li"),vp=o("a"),iU=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),D0=u(),js=o("p"),uU=a("Finally, please, remember that, HuggingFace "),Fc=o("a"),cU=a("Trainer"),hU=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),jp=o("a"),fU=a("DeepSpeed GitHub"),dU=a("."),this.h()},l(e){const p=DY('[data-svelte="svelte-1phssyn"]',document.head);g=l(p,"META",{name:!0,content:!0}),p.forEach(t),S=c(e),b=l(e,"H1",{class:!0});var wp=r(b);k=l(wp,"A",{id:!0,class:!0,href:!0});var dj=r(k);X=l(dj,"SPAN",{});var mj=r(X);d(z.$$.fragment,mj),mj.forEach(t),dj.forEach(t),C=c(wp),Q=l(wp,"SPAN",{});var gU=r(Q);x=n(gU,"DeepSpeed Integration"),gU.forEach(t),wp.forEach(t),te=c(e),T=l(e,"P",{});var _j=r(T);q=l(_j,"A",{href:!0,rel:!0});var bU=r(q);E=n(bU,"DeepSpeed"),bU.forEach(t),gs=n(_j," implements everything described in the "),W=l(_j,"A",{href:!0,rel:!0});var qU=r(W);bs=n(qU,"ZeRO paper"),qU.forEach(t),i4=n(_j,". Currently it provides full support for:"),_j.forEach(t),wj=c(e),R=l(e,"OL",{});var ve=r(R);Gh=l(ve,"LI",{});var EU=r(Gh);u4=n(EU,"Optimizer state partitioning (ZeRO stage 1)"),EU.forEach(t),c4=c(ve),Mh=l(ve,"LI",{});var $U=r(Mh);h4=n($U,"Gradient partitioning (ZeRO stage 2)"),$U.forEach(t),f4=c(ve),Lh=l(ve,"LI",{});var kU=r(Lh);d4=n(kU,"Parameter partitioning (ZeRO stage 3)"),kU.forEach(t),m4=c(ve),Zh=l(ve,"LI",{});var PU=r(Zh);_4=n(PU,"Custom mixed precision training handling"),PU.forEach(t),v4=c(ve),Nh=l(ve,"LI",{});var zU=r(Nh);j4=n(zU,"A range of fast CUDA-extension-based optimizers"),zU.forEach(t),w4=c(ve),Hh=l(ve,"LI",{});var DU=r(Hh);y4=n(DU,"ZeRO-Offload to CPU and NVMe"),DU.forEach(t),ve.forEach(t),yj=c(e),Te=l(e,"P",{});var Vc=r(Te);g4=n(Vc,"ZeRO-Offload has its own dedicated paper: "),Kn=l(Vc,"A",{href:!0,rel:!0});var OU=r(Kn);b4=n(OU,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),OU.forEach(t),q4=n(Vc,". And NVMe-support is described in the paper "),Jn=l(Vc,"A",{href:!0,rel:!0});var AU=r(Jn);E4=n(AU,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),AU.forEach(t),$4=n(Vc,"."),Vc.forEach(t),gj=c(e),kp=l(e,"P",{});var TU=r(kp);k4=n(TU,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),TU.forEach(t),bj=c(e),Pp=l(e,"P",{});var SU=r(Pp);P4=n(SU,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),SU.forEach(t),qj=c(e),wt=l(e,"P",{});var A0=r(wt);z4=n(A0,"\u{1F917} Transformers integrates "),Xn=l(A0,"A",{href:!0,rel:!0});var CU=r(Xn);D4=n(CU,"DeepSpeed"),CU.forEach(t),O4=n(A0," via 2 options:"),A0.forEach(t),Ej=c(e),yt=l(e,"OL",{});var T0=r(yt);Qn=l(T0,"LI",{});var S0=r(Qn);A4=n(S0,"Integration of the core DeepSpeed features via "),zp=l(S0,"A",{href:!0});var xU=r(zp);T4=n(xU,"Trainer"),xU.forEach(t),S4=n(S0,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),S0.forEach(t),C4=c(T0),F=l(T0,"LI",{});var je=r(F);x4=n(je,"If you don\u2019t use "),Dp=l(je,"A",{href:!0});var RU=r(Dp);R4=n(RU,"Trainer"),RU.forEach(t),I4=n(je,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Bh=l(je,"CODE",{});var IU=r(Bh);U4=n(IU,"from_pretrained"),IU.forEach(t),G4=n(je," and "),Wh=l(je,"CODE",{});var UU=r(Wh);M4=n(UU,"from_config"),UU.forEach(t),L4=n(je,` include integration of essential
parts of DeepSpeed like `),Fh=l(je,"CODE",{});var GU=r(Fh);Z4=n(GU,"zero.Init"),GU.forEach(t),N4=n(je,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Op=l(je,"A",{href:!0});var MU=r(Op);H4=n(MU,"non-Trainer DeepSpeed Integration"),MU.forEach(t),B4=n(je,"."),je.forEach(t),T0.forEach(t),$j=c(e),Ap=l(e,"P",{});var LU=r(Ap);W4=n(LU,"What is integrated:"),LU.forEach(t),kj=c(e),Tp=l(e,"P",{});var ZU=r(Tp);F4=n(ZU,"Training:"),ZU.forEach(t),Pj=c(e),Sp=l(e,"OL",{});var NU=r(Sp);Vh=l(NU,"LI",{});var HU=r(Vh);V4=n(HU,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),HU.forEach(t),NU.forEach(t),zj=c(e),Cp=l(e,"P",{});var BU=r(Cp);Y4=n(BU,"Inference:"),BU.forEach(t),Dj=c(e),xp=l(e,"OL",{});var WU=r(xp);eo=l(WU,"LI",{});var C0=r(eo);K4=n(C0,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Rp=l(C0,"A",{href:!0});var FU=r(Rp);J4=n(FU,"deepspeed-zero-inference"),FU.forEach(t),X4=n(C0,"."),C0.forEach(t),WU.forEach(t),Oj=c(e),Ip=l(e,"P",{});var VU=r(Ip);Q4=n(VU,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),VU.forEach(t),Aj=c(e),Up=l(e,"A",{id:!0}),r(Up).forEach(t),Tj=c(e),qs=l(e,"H2",{class:!0});var x0=r(qs);gt=l(x0,"A",{id:!0,class:!0,href:!0});var YU=r(gt);Yh=l(YU,"SPAN",{});var KU=r(Yh);d(so.$$.fragment,KU),KU.forEach(t),YU.forEach(t),e6=c(x0),Kh=l(x0,"SPAN",{});var JU=r(Kh);s6=n(JU,"Trainer Deepspeed Integration"),JU.forEach(t),x0.forEach(t),Sj=c(e),Gp=l(e,"A",{id:!0}),r(Gp).forEach(t),Cj=c(e),Es=l(e,"H3",{class:!0});var R0=r(Es);bt=l(R0,"A",{id:!0,class:!0,href:!0});var XU=r(bt);Jh=l(XU,"SPAN",{});var QU=r(Jh);d(to.$$.fragment,QU),QU.forEach(t),XU.forEach(t),t6=c(R0),Xh=l(R0,"SPAN",{});var eG=r(Xh);a6=n(eG,"Installation"),eG.forEach(t),R0.forEach(t),xj=c(e),Mp=l(e,"P",{});var sG=r(Mp);n6=n(sG,"Install the library via pypi:"),sG.forEach(t),Rj=c(e),d(ao.$$.fragment,e),Ij=c(e),Se=l(e,"P",{});var Yc=r(Se);o6=n(Yc,"or via "),Qh=l(Yc,"CODE",{});var tG=r(Qh);l6=n(tG,"transformers"),tG.forEach(t),r6=n(Yc,"\u2019 "),ef=l(Yc,"CODE",{});var aG=r(ef);p6=n(aG,"extras"),aG.forEach(t),i6=n(Yc,":"),Yc.forEach(t),Uj=c(e),d(no.$$.fragment,e),Gj=c(e),Ce=l(e,"P",{});var Kc=r(Ce);u6=n(Kc,"or find more details on "),oo=l(Kc,"A",{href:!0,rel:!0});var nG=r(oo);c6=n(nG,"the DeepSpeed\u2019s GitHub page"),nG.forEach(t),h6=n(Kc,` and
`),lo=l(Kc,"A",{href:!0,rel:!0});var oG=r(lo);f6=n(oG,"advanced install"),oG.forEach(t),d6=n(Kc,"."),Kc.forEach(t),Mj=c(e),qt=l(e,"P",{});var I0=r(qt);m6=n(I0,"If you\u2019re still struggling with the build, first make sure to read "),Lp=l(I0,"A",{href:!0});var lG=r(Lp);_6=n(lG,"zero-install-notes"),lG.forEach(t),v6=n(I0,"."),I0.forEach(t),Lj=c(e),Zp=l(e,"P",{});var rG=r(Zp);j6=n(rG,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),rG.forEach(t),Zj=c(e),Np=l(e,"P",{});var pG=r(Np);w6=n(pG,"To make a local build for DeepSpeed:"),pG.forEach(t),Nj=c(e),d(ro.$$.fragment,e),Hj=c(e),xe=l(e,"P",{});var Jc=r(xe);y6=n(Jc,"If you intend to use NVMe offload you will also need to include "),sf=l(Jc,"CODE",{});var iG=r(sf);g6=n(iG,"DS_BUILD_AIO=1"),iG.forEach(t),b6=n(Jc,` in the instructions above (and also
install `),tf=l(Jc,"EM",{});var uG=r(tf);q6=n(uG,"libaio-dev"),uG.forEach(t),E6=n(Jc," system-wide)."),Jc.forEach(t),Bj=c(e),Et=l(e,"P",{});var U0=r(Et);$6=n(U0,"Edit "),af=l(U0,"CODE",{});var cG=r(af);k6=n(cG,"TORCH_CUDA_ARCH_LIST"),cG.forEach(t),P6=n(U0,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),U0.forEach(t),Wj=c(e),d(po.$$.fragment,e),Fj=c(e),ke=l(e,"P",{});var yp=r(ke);z6=n(yp,"So if you get "),nf=l(yp,"CODE",{});var hG=r(nf);D6=n(hG,"8, 6"),hG.forEach(t),O6=n(yp,", then use "),of=l(yp,"CODE",{});var fG=r(of);A6=n(fG,'TORCH_CUDA_ARCH_LIST="8.6"'),fG.forEach(t),T6=n(yp,`. If you have multiple different cards, you can list all
of them like so `),lf=l(yp,"CODE",{});var dG=r(lf);S6=n(dG,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),dG.forEach(t),yp.forEach(t),Vj=c(e),Hp=l(e,"P",{});var mG=r(Hp);C6=n(mG,"If you need to use the same setup on multiple machines, make a binary wheel:"),mG.forEach(t),Yj=c(e),d(io.$$.fragment,e),Kj=c(e),Re=l(e,"P",{});var Xc=r(Re);x6=n(Xc,"it will generate something like "),rf=l(Xc,"CODE",{});var _G=r(rf);R6=n(_G,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_G.forEach(t),I6=n(Xc,` which now you can install
as `),pf=l(Xc,"CODE",{});var vG=r(pf);U6=n(vG,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),vG.forEach(t),G6=n(Xc," locally or on any other machine."),Xc.forEach(t),Jj=c(e),$t=l(e,"P",{});var G0=r($t);M6=n(G0,"Again, remember to ensure to adjust "),uf=l(G0,"CODE",{});var jG=r(uf);L6=n(jG,"TORCH_CUDA_ARCH_LIST"),jG.forEach(t),Z6=n(G0," to the target architectures."),G0.forEach(t),Xj=c(e),Ie=l(e,"P",{});var Qc=r(Ie);N6=n(Qc,"You can find the complete list of NVIDIA GPUs and their corresponding "),cf=l(Qc,"STRONG",{});var wG=r(cf);H6=n(wG,"Compute Capabilities"),wG.forEach(t),B6=n(Qc,` (same as arch in this
context) `),uo=l(Qc,"A",{href:!0,rel:!0});var yG=r(uo);W6=n(yG,"here"),yG.forEach(t),F6=n(Qc,"."),Qc.forEach(t),Qj=c(e),Bp=l(e,"P",{});var gG=r(Bp);V6=n(gG,"You can check the archs pytorch was built with using:"),gG.forEach(t),ew=c(e),d(co.$$.fragment,e),sw=c(e),Wp=l(e,"P",{});var bG=r(Wp);Y6=n(bG,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),bG.forEach(t),tw=c(e),d(ho.$$.fragment,e),aw=c(e),Fp=l(e,"P",{});var qG=r(Fp);K6=n(qG,"If the output is:"),qG.forEach(t),nw=c(e),d(fo.$$.fragment,e),ow=c(e),kt=l(e,"P",{});var M0=r(kt);J6=n(M0,"then you know that this card\u2019s arch is "),hf=l(M0,"CODE",{});var EG=r(hf);X6=n(EG,"8.6"),EG.forEach(t),Q6=n(M0,"."),M0.forEach(t),lw=c(e),Pt=l(e,"P",{});var L0=r(Pt);e$=n(L0,"You can also leave "),ff=l(L0,"CODE",{});var $G=r(ff);s$=n($G,"TORCH_CUDA_ARCH_LIST"),$G.forEach(t),t$=n(L0,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),L0.forEach(t),rw=c(e),zt=l(e,"P",{});var Z0=r(zt);a$=n(Z0,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),mo=l(Z0,"A",{href:!0,rel:!0});var kG=r(mo);n$=n(kG,"Deepspeed"),kG.forEach(t),o$=n(Z0,","),Z0.forEach(t),pw=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),iw=c(e),$s=l(e,"H3",{class:!0});var N0=r($s);Dt=l(N0,"A",{id:!0,class:!0,href:!0});var PG=r(Dt);df=l(PG,"SPAN",{});var zG=r(df);d(_o.$$.fragment,zG),zG.forEach(t),PG.forEach(t),l$=c(N0),mf=l(N0,"SPAN",{});var DG=r(mf);r$=n(DG,"Deployment with multiple GPUs"),DG.forEach(t),N0.forEach(t),uw=c(e),Ot=l(e,"P",{});var H0=r(Ot);p$=n(H0,"To deploy this feature with multiple GPUs adjust the "),Yp=l(H0,"A",{href:!0});var OG=r(Yp);i$=n(OG,"Trainer"),OG.forEach(t),u$=n(H0,` command line arguments as
following:`),H0.forEach(t),cw=c(e),At=l(e,"OL",{});var B0=r(At);ks=l(B0,"LI",{});var eh=r(ks);c$=n(eh,"replace "),_f=l(eh,"CODE",{});var AG=r(_f);h$=n(AG,"python -m torch.distributed.launch"),AG.forEach(t),f$=n(eh," with "),vf=l(eh,"CODE",{});var TG=r(vf);d$=n(TG,"deepspeed"),TG.forEach(t),m$=n(eh,"."),eh.forEach(t),_$=c(B0),Pe=l(B0,"LI",{});var Sn=r(Pe);v$=n(Sn,"add a new argument "),jf=l(Sn,"CODE",{});var SG=r(jf);j$=n(SG,"--deepspeed ds_config.json"),SG.forEach(t),w$=n(Sn,", where "),wf=l(Sn,"CODE",{});var CG=r(wf);y$=n(CG,"ds_config.json"),CG.forEach(t),g$=n(Sn,` is the DeepSpeed configuration file as
documented `),vo=l(Sn,"A",{href:!0,rel:!0});var xG=r(vo);b$=n(xG,"here"),xG.forEach(t),q$=n(Sn,". The file naming is up to you."),Sn.forEach(t),B0.forEach(t),hw=c(e),Kp=l(e,"P",{});var RG=r(Kp);E$=n(RG,"Therefore, if your original command line looked as follows:"),RG.forEach(t),fw=c(e),d(jo.$$.fragment,e),dw=c(e),Jp=l(e,"P",{});var IG=r(Jp);$$=n(IG,"Now it should be:"),IG.forEach(t),mw=c(e),d(wo.$$.fragment,e),_w=c(e),I=l(e,"P",{});var we=r(I);k$=n(we,"Unlike, "),yf=l(we,"CODE",{});var UG=r(yf);P$=n(UG,"torch.distributed.launch"),UG.forEach(t),z$=n(we," where you have to specify how many GPUs to use with "),gf=l(we,"CODE",{});var GG=r(gf);D$=n(GG,"--nproc_per_node"),GG.forEach(t),O$=n(we,`, with the
`),bf=l(we,"CODE",{});var MG=r(bf);A$=n(MG,"deepspeed"),MG.forEach(t),T$=n(we," launcher you don\u2019t have to use the corresponding "),qf=l(we,"CODE",{});var LG=r(qf);S$=n(LG,"--num_gpus"),LG.forEach(t),C$=n(we,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),yo=l(we,"A",{href:!0,rel:!0});var ZG=r(yo);x$=n(ZG,"here"),ZG.forEach(t),R$=n(we,"."),we.forEach(t),vw=c(e),ae=l(e,"P",{});var Cn=r(ae);I$=n(Cn,"In fact, you can continue using "),Ef=l(Cn,"CODE",{});var NG=r(Ef);U$=n(NG,"-m torch.distributed.launch"),NG.forEach(t),G$=n(Cn,` with DeepSpeed as long as you don\u2019t need to use
`),$f=l(Cn,"CODE",{});var HG=r($f);M$=n(HG,"deepspeed"),HG.forEach(t),L$=n(Cn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),kf=l(Cn,"CODE",{});var BG=r(kf);Z$=n(BG,"deepspeed"),BG.forEach(t),N$=n(Cn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Cn.forEach(t),jw=c(e),Tt=l(e,"P",{});var W0=r(Tt);H$=n(W0,"Here is an example of running "),Pf=l(W0,"CODE",{});var WG=r(Pf);B$=n(WG,"run_translation.py"),WG.forEach(t),W$=n(W0," under DeepSpeed deploying all available GPUs:"),W0.forEach(t),ww=c(e),d(go.$$.fragment,e),yw=c(e),St=l(e,"P",{});var F0=r(St);F$=n(F0,"Note that in the DeepSpeed documentation you are likely to see "),zf=l(F0,"CODE",{});var FG=r(zf);V$=n(FG,"--deepspeed --deepspeed_config ds_config.json"),FG.forEach(t),Y$=n(F0,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),F0.forEach(t),gw=c(e),Ct=l(e,"P",{});var V0=r(Ct);K$=n(V0,"For some practical usage examples, please, see this "),bo=l(V0,"A",{href:!0,rel:!0});var VG=r(bo);J$=n(VG,"post"),VG.forEach(t),X$=n(V0,"."),V0.forEach(t),bw=c(e),Xp=l(e,"A",{id:!0}),r(Xp).forEach(t),qw=c(e),Ps=l(e,"H3",{class:!0});var Y0=r(Ps);xt=l(Y0,"A",{id:!0,class:!0,href:!0});var YG=r(xt);Df=l(YG,"SPAN",{});var KG=r(Df);d(qo.$$.fragment,KG),KG.forEach(t),YG.forEach(t),Q$=c(Y0),Of=l(Y0,"SPAN",{});var JG=r(Of);e5=n(JG,"Deployment with one GPU"),JG.forEach(t),Y0.forEach(t),Ew=c(e),Rt=l(e,"P",{});var K0=r(Rt);s5=n(K0,"To deploy DeepSpeed with one GPU adjust the "),Qp=l(K0,"A",{href:!0});var XG=r(Qp);t5=n(XG,"Trainer"),XG.forEach(t),a5=n(K0," command line arguments as follows:"),K0.forEach(t),$w=c(e),d(Eo.$$.fragment,e),kw=c(e),Ue=l(e,"P",{});var sh=r(Ue);n5=n(sh,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Af=l(sh,"CODE",{});var QG=r(Af);o5=n(QG,"--num_gpus=1"),QG.forEach(t),l5=n(sh,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),$o=l(sh,"A",{href:!0,rel:!0});var eM=r($o);r5=n(eM,"documentation"),eM.forEach(t),p5=n(sh," discusses the launcher options."),sh.forEach(t),Pw=c(e),ei=l(e,"P",{});var sM=r(ei);i5=n(sM,"Why would you want to use DeepSpeed with just one GPU?"),sM.forEach(t),zw=c(e),It=l(e,"OL",{});var J0=r(It);Tf=l(J0,"LI",{});var tM=r(Tf);u5=n(tM,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),tM.forEach(t),c5=c(J0),Sf=l(J0,"LI",{});var aM=r(Sf);h5=n(aM,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),aM.forEach(t),J0.forEach(t),Dw=c(e),si=l(e,"P",{});var nM=r(si);f5=n(nM,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),nM.forEach(t),Ow=c(e),d(ko.$$.fragment,e),Aw=c(e),ti=l(e,"P",{});var oM=r(ti);d5=n(oM,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),oM.forEach(t),Tw=c(e),Ut=l(e,"P",{});var X0=r(Ut);m5=n(X0,"For a practical usage example of this type of deployment, please, see this "),Po=l(X0,"A",{href:!0,rel:!0});var lM=r(Po);_5=n(lM,"post"),lM.forEach(t),v5=n(X0,"."),X0.forEach(t),Sw=c(e),ai=l(e,"P",{});var rM=r(ai);j5=n(rM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),rM.forEach(t),Cw=c(e),ni=l(e,"P",{});var pM=r(ni);w5=n(pM,"Notes:"),pM.forEach(t),xw=c(e),oi=l(e,"UL",{});var iM=r(oi);zs=l(iM,"LI",{});var th=r(zs);zo=l(th,"P",{});var Q0=r(zo);y5=n(Q0,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Cf=l(Q0,"CODE",{});var uM=r(Cf);g5=n(uM,"CUDA_VISIBLE_DEVICES"),uM.forEach(t),b5=n(Q0,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),Q0.forEach(t),q5=c(th),d(Do.$$.fragment,th),E5=c(th),xf=l(th,"P",{});var cM=r(xf);$5=n(cM,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),cM.forEach(t),th.forEach(t),iM.forEach(t),Rw=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),Iw=c(e),Ds=l(e,"H3",{class:!0});var eq=r(Ds);Gt=l(eq,"A",{id:!0,class:!0,href:!0});var hM=r(Gt);Rf=l(hM,"SPAN",{});var fM=r(Rf);d(Oo.$$.fragment,fM),fM.forEach(t),hM.forEach(t),k5=c(eq),If=l(eq,"SPAN",{});var dM=r(If);P5=n(dM,"Deployment in Notebooks"),dM.forEach(t),eq.forEach(t),Uw=c(e),Mt=l(e,"P",{});var sq=r(Mt);z5=n(sq,"The problem with running notebook cells as a script is that there is no normal "),Uf=l(sq,"CODE",{});var mM=r(Uf);D5=n(mM,"deepspeed"),mM.forEach(t),O5=n(sq,` launcher to rely on, so
under certain setups we have to emulate it.`),sq.forEach(t),Gw=c(e),ri=l(e,"P",{});var _M=r(ri);A5=n(_M,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),_M.forEach(t),Mw=c(e),d(Ao.$$.fragment,e),Lw=c(e),Lt=l(e,"P",{});var tq=r(Lt);T5=n(tq,"Note: "),Gf=l(tq,"CODE",{});var vM=r(Gf);S5=n(vM,"..."),vM.forEach(t),C5=n(tq," stands for the normal arguments that you\u2019d pass to the functions."),tq.forEach(t),Zw=c(e),pi=l(e,"P",{});var jM=r(pi);x5=n(jM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),jM.forEach(t),Nw=c(e),ii=l(e,"P",{});var wM=r(ii);R5=n(wM,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),wM.forEach(t),Hw=c(e),d(To.$$.fragment,e),Bw=c(e),Ge=l(e,"P",{});var ah=r(Ge);I5=n(ah,"If the training script is in a normal file and not in the notebook cells, you can launch "),Mf=l(ah,"CODE",{});var yM=r(Mf);U5=n(yM,"deepspeed"),yM.forEach(t),G5=n(ah,` normally via
shell from a cell. For example, to use `),Lf=l(ah,"CODE",{});var gM=r(Lf);M5=n(gM,"run_translation.py"),gM.forEach(t),L5=n(ah," you would launch it with:"),ah.forEach(t),Ww=c(e),d(So.$$.fragment,e),Fw=c(e),Zt=l(e,"P",{});var aq=r(Zt);Z5=n(aq,"or with "),Zf=l(aq,"CODE",{});var bM=r(Zf);N5=n(bM,"%%bash"),bM.forEach(t),H5=n(aq," magic, where you can write a multi-line code for the shell program to run:"),aq.forEach(t),Vw=c(e),d(Co.$$.fragment,e),Yw=c(e),ui=l(e,"P",{});var qM=r(ui);B5=n(qM,"In such case you don\u2019t need any of the code presented at the beginning of this section."),qM.forEach(t),Kw=c(e),Nt=l(e,"P",{});var nq=r(Nt);W5=n(nq,"Note: While "),Nf=l(nq,"CODE",{});var EM=r(Nf);F5=n(EM,"%%bash"),EM.forEach(t),V5=n(nq,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),nq.forEach(t),Jw=c(e),ci=l(e,"A",{id:!0}),r(ci).forEach(t),Xw=c(e),Os=l(e,"H3",{class:!0});var oq=r(Os);Ht=l(oq,"A",{id:!0,class:!0,href:!0});var $M=r(Ht);Hf=l($M,"SPAN",{});var kM=r(Hf);d(xo.$$.fragment,kM),kM.forEach(t),$M.forEach(t),Y5=c(oq),Bf=l(oq,"SPAN",{});var PM=r(Bf);K5=n(PM,"Configuration"),PM.forEach(t),oq.forEach(t),Qw=c(e),Bt=l(e,"P",{});var lq=r(Bt);J5=n(lq,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Ro=l(lq,"A",{href:!0,rel:!0});var zM=r(Ro);X5=n(zM,"following documentation"),zM.forEach(t),Q5=n(lq,"."),lq.forEach(t),ey=c(e),Wt=l(e,"P",{});var rq=r(Wt);e8=n(rq,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Io=l(rq,"A",{href:!0,rel:!0});var DM=r(Io);s8=n(DM,`the DeepSpeedExamples
repo`),DM.forEach(t),t8=n(rq,":"),rq.forEach(t),sy=c(e),d(Uo.$$.fragment,e),ty=c(e),Ft=l(e,"P",{});var pq=r(Ft);a8=n(pq,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Wf=l(pq,"CODE",{});var OM=r(Wf);n8=n(OM,".json"),OM.forEach(t),o8=n(pq," files with:"),pq.forEach(t),ay=c(e),d(Go.$$.fragment,e),ny=c(e),Vt=l(e,"P",{});var iq=r(Vt);l8=n(iq,"Some more examples are to be found in the "),Mo=l(iq,"A",{href:!0,rel:!0});var AM=r(Mo);r8=n(AM,"main repo"),AM.forEach(t),p8=n(iq," as well."),iq.forEach(t),oy=c(e),hi=l(e,"P",{});var TM=r(hi);i8=n(TM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),TM.forEach(t),ly=c(e),ne=l(e,"P",{});var xn=r(ne);u8=n(xn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Ff=l(xn,"CODE",{});var SM=r(Ff);c8=n(SM,"AdamW"),SM.forEach(t),h8=n(xn," optimizer and "),Vf=l(xn,"CODE",{});var CM=r(Vf);f8=n(CM,"WarmupLR"),CM.forEach(t),d8=n(xn,` scheduler and will enable mixed
precision training if `),Yf=l(xn,"CODE",{});var xM=r(Yf);m8=n(xM,"--fp16"),xM.forEach(t),_8=n(xn," is passed:"),xn.forEach(t),ry=c(e),d(Lo.$$.fragment,e),py=c(e),Yt=l(e,"P",{});var uq=r(Yt);v8=n(uq,"When you execute the program, DeepSpeed will log the configuration it received from the "),fi=l(uq,"A",{href:!0});var RM=r(fi);j8=n(RM,"Trainer"),RM.forEach(t),w8=n(uq,`
to the console, so you can see exactly what was the final configuration passed to it.`),uq.forEach(t),iy=c(e),di=l(e,"A",{id:!0}),r(di).forEach(t),uy=c(e),As=l(e,"H3",{class:!0});var cq=r(As);Kt=l(cq,"A",{id:!0,class:!0,href:!0});var IM=r(Kt);Kf=l(IM,"SPAN",{});var UM=r(Kf);d(Zo.$$.fragment,UM),UM.forEach(t),IM.forEach(t),y8=c(cq),Jf=l(cq,"SPAN",{});var GM=r(Jf);g8=n(GM,"Passing Configuration"),GM.forEach(t),cq.forEach(t),cy=c(e),U=l(e,"P",{});var ye=r(U);b8=n(ye,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),mi=l(ye,"A",{href:!0});var MM=r(mi);q8=n(MM,"Trainer"),MM.forEach(t),E8=n(ye," via "),_i=l(ye,"A",{href:!0});var LM=r(_i);$8=n(LM,"TrainingArguments"),LM.forEach(t),k8=n(ye," then for the "),Xf=l(ye,"CODE",{});var ZM=r(Xf);P8=n(ZM,"deepspeed"),ZM.forEach(t),z8=n(ye,` argument you can
pass a nested `),Qf=l(ye,"CODE",{});var NM=r(Qf);D8=n(NM,"dict"),NM.forEach(t),O8=n(ye,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),vi=l(ye,"A",{href:!0});var HM=r(vi);A8=n(HM,"TrainingArguments"),HM.forEach(t),T8=n(ye,"."),ye.forEach(t),hy=c(e),ji=l(e,"P",{});var BM=r(ji);S8=n(BM,"To summarize you can do:"),BM.forEach(t),fy=c(e),d(No.$$.fragment,e),dy=c(e),wi=l(e,"P",{});var WM=r(wi);C8=n(WM,"or:"),WM.forEach(t),my=c(e),d(Ho.$$.fragment,e),_y=c(e),yi=l(e,"A",{id:!0}),r(yi).forEach(t),vy=c(e),Ts=l(e,"H3",{class:!0});var hq=r(Ts);Jt=l(hq,"A",{id:!0,class:!0,href:!0});var FM=r(Jt);ed=l(FM,"SPAN",{});var VM=r(ed);d(Bo.$$.fragment,VM),VM.forEach(t),FM.forEach(t),x8=c(hq),sd=l(hq,"SPAN",{});var YM=r(sd);R8=n(YM,"Shared Configuration"),YM.forEach(t),hq.forEach(t),jy=c(e),d(Xt.$$.fragment,e),wy=c(e),Me=l(e,"P",{});var nh=r(Me);I8=n(nh,"Some configuration values are required by both the "),gi=l(nh,"A",{href:!0});var KM=r(gi);U8=n(KM,"Trainer"),KM.forEach(t),G8=n(nh,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),bi=l(nh,"A",{href:!0});var JM=r(bi);M8=n(JM,"Trainer"),JM.forEach(t),L8=n(nh," command line arguments."),nh.forEach(t),yy=c(e),Qt=l(e,"P",{});var fq=r(Qt);Z8=n(fq,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),qi=l(fq,"A",{href:!0});var XM=r(qi);N8=n(XM,"Trainer"),XM.forEach(t),H8=n(fq,` do the majority
of configuration for you.`),fq.forEach(t),gy=c(e),Le=l(e,"P",{});var oh=r(Le);B8=n(oh,"Therefore, in the rest of this guide you will find a special configuration value: "),td=l(oh,"CODE",{});var QM=r(td);W8=n(QM,"auto"),QM.forEach(t),F8=n(oh,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ei=l(oh,"A",{href:!0});var eL=r(Ei);V8=n(eL,"Trainer"),eL.forEach(t),Y8=n(oh,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),oh.forEach(t),by=c(e),$i=l(e,"P",{});var sL=r($i);K8=n(sL,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),sL.forEach(t),qy=c(e),ea=l(e,"P",{});var dq=r(ea);J8=n(dq,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ki=l(dq,"A",{href:!0});var tL=r(ki);X8=n(tL,"TrainingArguments"),tL.forEach(t),Q8=n(dq," based on that. The steps are:"),dq.forEach(t),Ey=c(e),sa=l(e,"OL",{});var mq=r(sa);ad=l(mq,"LI",{});var aL=r(ad);ek=n(aL,"Create or load the DeepSpeed configuration to be used as a master configuration"),aL.forEach(t),sk=c(mq),Wo=l(mq,"LI",{});var _q=r(Wo);tk=n(_q,"Create the "),Pi=l(_q,"A",{href:!0});var nL=r(Pi);ak=n(nL,"TrainingArguments"),nL.forEach(t),nk=n(_q," object based on these values"),_q.forEach(t),mq.forEach(t),$y=c(e),oe=l(e,"P",{});var Rn=r(oe);ok=n(Rn,"Do note that some values, such as "),nd=l(Rn,"CODE",{});var oL=r(nd);lk=n(oL,"scheduler.params.total_num_steps"),oL.forEach(t),rk=n(Rn,` are calculated by
`),zi=l(Rn,"A",{href:!0});var lL=r(zi);pk=n(lL,"Trainer"),lL.forEach(t),ik=n(Rn," during "),od=l(Rn,"CODE",{});var rL=r(od);uk=n(rL,"train"),rL.forEach(t),ck=n(Rn,", but you can of course do the math yourself."),Rn.forEach(t),ky=c(e),Di=l(e,"A",{id:!0}),r(Di).forEach(t),Py=c(e),Ss=l(e,"H3",{class:!0});var vq=r(Ss);ta=l(vq,"A",{id:!0,class:!0,href:!0});var pL=r(ta);ld=l(pL,"SPAN",{});var iL=r(ld);d(Fo.$$.fragment,iL),iL.forEach(t),pL.forEach(t),hk=c(vq),rd=l(vq,"SPAN",{});var uL=r(rd);fk=n(uL,"ZeRO"),uL.forEach(t),vq.forEach(t),zy=c(e),Vo=l(e,"P",{});var mU=r(Vo);Yo=l(mU,"A",{href:!0,rel:!0});var cL=r(Yo);dk=n(cL,"Zero Redundancy Optimizer (ZeRO)"),cL.forEach(t),mk=n(mU,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),mU.forEach(t),Dy=c(e),Ze=l(e,"P",{});var lh=r(Ze);_k=n(lh,"The "),pd=l(lh,"CODE",{});var hL=r(pd);vk=n(hL,"zero_optimization"),hL.forEach(t),jk=n(lh," section of the configuration file is the most important part ("),Ko=l(lh,"A",{href:!0,rel:!0});var fL=r(Ko);wk=n(fL,"docs"),fL.forEach(t),yk=n(lh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),lh.forEach(t),Oy=c(e),aa=l(e,"P",{});var jq=r(aa);gk=n(jq,"This section has to be configured exclusively via DeepSpeed configuration - the "),Oi=l(jq,"A",{href:!0});var dL=r(Oi);bk=n(dL,"Trainer"),dL.forEach(t),qk=n(jq,` provides
no equivalent command line arguments.`),jq.forEach(t),Ay=c(e),Ai=l(e,"P",{});var mL=r(Ai);Ek=n(mL,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),mL.forEach(t),Ty=c(e),Ti=l(e,"A",{id:!0}),r(Ti).forEach(t),Sy=c(e),Cs=l(e,"H4",{class:!0});var wq=r(Cs);na=l(wq,"A",{id:!0,class:!0,href:!0});var _L=r(na);id=l(_L,"SPAN",{});var vL=r(id);d(Jo.$$.fragment,vL),vL.forEach(t),_L.forEach(t),$k=c(wq),ud=l(wq,"SPAN",{});var jL=r(ud);kk=n(jL,"ZeRO-2 Config"),jL.forEach(t),wq.forEach(t),Cy=c(e),Si=l(e,"P",{});var wL=r(Si);Pk=n(wL,"The following is an example of configuration for ZeRO stage 2:"),wL.forEach(t),xy=c(e),d(Xo.$$.fragment,e),Ry=c(e),Ci=l(e,"P",{});var yL=r(Ci);cd=l(yL,"STRONG",{});var gL=r(cd);zk=n(gL,"Performance tuning:"),gL.forEach(t),yL.forEach(t),Iy=c(e),Ne=l(e,"UL",{});var rh=r(Ne);xs=l(rh,"LI",{});var ph=r(xs);Dk=n(ph,"enabling "),hd=l(ph,"CODE",{});var bL=r(hd);Ok=n(bL,"offload_optimizer"),bL.forEach(t),Ak=n(ph," should reduce GPU RAM usage (it requires "),fd=l(ph,"CODE",{});var qL=r(fd);Tk=n(qL,'"stage": 2'),qL.forEach(t),Sk=n(ph,")"),ph.forEach(t),Ck=c(rh),G=l(rh,"LI",{});var se=r(G);dd=l(se,"CODE",{});var EL=r(dd);xk=n(EL,'"overlap_comm": true'),EL.forEach(t),Rk=n(se," trades off increased GPU RAM usage to lower all-reduce latency. "),md=l(se,"CODE",{});var $L=r(md);Ik=n($L,"overlap_comm"),$L.forEach(t),Uk=n(se,` uses 4.5x
the `),_d=l(se,"CODE",{});var kL=r(_d);Gk=n(kL,"allgather_bucket_size"),kL.forEach(t),Mk=n(se," and "),vd=l(se,"CODE",{});var PL=r(vd);Lk=n(PL,"reduce_bucket_size"),PL.forEach(t),Zk=n(se,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),jd=l(se,"CODE",{});var zL=r(jd);Nk=n(zL,"5e8 x 2Bytes x 2 x 4.5"),zL.forEach(t),Hk=n(se,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),wd=l(se,"CODE",{});var DL=r(wd);Bk=n(DL,"2e8"),DL.forEach(t),Wk=n(se,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),se.forEach(t),Fk=c(rh),yd=l(rh,"LI",{});var OL=r(yd);Vk=n(OL,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),OL.forEach(t),rh.forEach(t),Uy=c(e),He=l(e,"P",{});var ih=r(He);Yk=n(ih,"Additionally, "),gd=l(ih,"CODE",{});var AL=r(gd);Kk=n(AL,"deepspeed==0.4.4"),AL.forEach(t),Jk=n(ih," added a new option "),bd=l(ih,"CODE",{});var TL=r(bd);Xk=n(TL,"round_robin_gradients"),TL.forEach(t),Qk=n(ih," which you can enable with:"),ih.forEach(t),Gy=c(e),d(Qo.$$.fragment,e),My=c(e),xi=l(e,"P",{});var SL=r(xi);e7=n(SL,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),SL.forEach(t),Ly=c(e),Ri=l(e,"A",{id:!0}),r(Ri).forEach(t),Zy=c(e),Rs=l(e,"H4",{class:!0});var yq=r(Rs);oa=l(yq,"A",{id:!0,class:!0,href:!0});var CL=r(oa);qd=l(CL,"SPAN",{});var xL=r(qd);d(el.$$.fragment,xL),xL.forEach(t),CL.forEach(t),s7=c(yq),Ed=l(yq,"SPAN",{});var RL=r(Ed);t7=n(RL,"ZeRO-3 Config"),RL.forEach(t),yq.forEach(t),Ny=c(e),Ii=l(e,"P",{});var IL=r(Ii);a7=n(IL,"The following is an example of configuration for ZeRO stage 3:"),IL.forEach(t),Hy=c(e),d(sl.$$.fragment,e),By=c(e),V=l(e,"P",{});var ws=r(V);n7=n(ws,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),$d=l(ws,"CODE",{});var UL=r($d);o7=n(UL,'"device": "cpu"'),UL.forEach(t),l7=n(ws,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),kd=l(ws,"CODE",{});var GL=r(kd);r7=n(GL,"none"),GL.forEach(t),p7=n(ws," instead of "),Pd=l(ws,"CODE",{});var ML=r(Pd);i7=n(ML,"cpu"),ML.forEach(t),u7=n(ws," for the "),zd=l(ws,"CODE",{});var LL=r(zd);c7=n(LL,"device"),LL.forEach(t),h7=n(ws,` entry. Offloading to
NVMe is discussed further down.`),ws.forEach(t),Wy=c(e),Be=l(e,"P",{});var uh=r(Be);f7=n(uh,"Pinned memory is enabled with "),Dd=l(uh,"CODE",{});var ZL=r(Dd);d7=n(ZL,"pin_memory"),ZL.forEach(t),m7=n(uh," set to "),Od=l(uh,"CODE",{});var NL=r(Od);_7=n(NL,"true"),NL.forEach(t),v7=n(uh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),uh.forEach(t),Fy=c(e),Ui=l(e,"P",{});var HL=r(Ui);Ad=l(HL,"STRONG",{});var BL=r(Ad);j7=n(BL,"Performance tuning:"),BL.forEach(t),HL.forEach(t),Vy=c(e),la=l(e,"UL",{});var gq=r(la);tl=l(gq,"LI",{});var bq=r(tl);Td=l(bq,"CODE",{});var WL=r(Td);w7=n(WL,"stage3_max_live_parameters"),WL.forEach(t),y7=n(bq,": "),Sd=l(bq,"CODE",{});var FL=r(Sd);g7=n(FL,"1e9"),FL.forEach(t),bq.forEach(t),b7=c(gq),al=l(gq,"LI",{});var qq=r(al);Cd=l(qq,"CODE",{});var VL=r(Cd);q7=n(VL,"stage3_max_reuse_distance"),VL.forEach(t),E7=n(qq,": "),xd=l(qq,"CODE",{});var YL=r(xd);$7=n(YL,"1e9"),YL.forEach(t),qq.forEach(t),gq.forEach(t),Yy=c(e),M=l(e,"P",{});var ge=r(M);k7=n(ge,"If hitting OOM reduce "),Rd=l(ge,"CODE",{});var KL=r(Rd);P7=n(KL,"stage3_max_live_parameters"),KL.forEach(t),z7=n(ge," and "),Id=l(ge,"CODE",{});var JL=r(Id);D7=n(JL,"stage3_max_reuse_distance"),JL.forEach(t),O7=n(ge,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Ud=l(ge,"CODE",{});var XL=r(Ud);A7=n(XL,"1e9"),XL.forEach(t),T7=n(ge,` would consume ~2GB. The memory is shared by
`),Gd=l(ge,"CODE",{});var QL=r(Gd);S7=n(QL,"stage3_max_live_parameters"),QL.forEach(t),C7=n(ge," and "),Md=l(ge,"CODE",{});var eZ=r(Md);x7=n(eZ,"stage3_max_reuse_distance"),eZ.forEach(t),R7=n(ge,", so it\u2019s not additive, it\u2019s just 2GB total."),ge.forEach(t),Ky=c(e),ze=l(e,"P",{});var gp=r(ze);Ld=l(gp,"CODE",{});var sZ=r(Ld);I7=n(sZ,"stage3_max_live_parameters"),sZ.forEach(t),U7=n(gp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Zd=l(gp,"CODE",{});var tZ=r(Zd);G7=n(tZ,"stage3_max_reuse_distance"),tZ.forEach(t),M7=n(gp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Nd=l(gp,"CODE",{});var aZ=r(Nd);L7=n(aZ,"stage3_max_reuse_distance"),aZ.forEach(t),Z7=n(gp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),gp.forEach(t),Jy=c(e),Gi=l(e,"P",{});var nZ=r(Gi);N7=n(nZ,"The following configuration values depend on the model\u2019s hidden size:"),nZ.forEach(t),Xy=c(e),We=l(e,"UL",{});var ch=r(We);nl=l(ch,"LI",{});var Eq=r(nl);Hd=l(Eq,"CODE",{});var oZ=r(Hd);H7=n(oZ,"reduce_bucket_size"),oZ.forEach(t),B7=n(Eq,": "),Bd=l(Eq,"CODE",{});var lZ=r(Bd);W7=n(lZ,"hidden_size*hidden_size"),lZ.forEach(t),Eq.forEach(t),F7=c(ch),ol=l(ch,"LI",{});var $q=r(ol);Wd=l($q,"CODE",{});var rZ=r(Wd);V7=n(rZ,"stage3_prefetch_bucket_size"),rZ.forEach(t),Y7=n($q,": "),Fd=l($q,"CODE",{});var pZ=r(Fd);K7=n(pZ,"0.9 * hidden_size * hidden_size"),pZ.forEach(t),$q.forEach(t),J7=c(ch),ll=l(ch,"LI",{});var kq=r(ll);Vd=l(kq,"CODE",{});var iZ=r(Vd);X7=n(iZ,"stage3_param_persistence_threshold"),iZ.forEach(t),Q7=n(kq,": "),Yd=l(kq,"CODE",{});var uZ=r(Yd);e9=n(uZ,"10 * hidden_size"),uZ.forEach(t),kq.forEach(t),ch.forEach(t),Qy=c(e),Fe=l(e,"P",{});var hh=r(Fe);s9=n(hh,"therefore set these values to "),Kd=l(hh,"CODE",{});var cZ=r(Kd);t9=n(cZ,"auto"),cZ.forEach(t),a9=n(hh," and the "),Mi=l(hh,"A",{href:!0});var hZ=r(Mi);n9=n(hZ,"Trainer"),hZ.forEach(t),o9=n(hh,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),hh.forEach(t),eg=c(e),rl=l(e,"P",{});var _U=r(rl);Jd=l(_U,"CODE",{});var fZ=r(Jd);l9=n(fZ,"stage3_gather_16bit_weights_on_model_save"),fZ.forEach(t),r9=n(_U,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),_U.forEach(t),sg=c(e),le=l(e,"P",{});var In=r(le);p9=n(In,"If you\u2019re migrating from ZeRO-2 configuration note that "),Xd=l(In,"CODE",{});var dZ=r(Xd);i9=n(dZ,"allgather_partitions"),dZ.forEach(t),u9=n(In,", "),Qd=l(In,"CODE",{});var mZ=r(Qd);c9=n(mZ,"allgather_bucket_size"),mZ.forEach(t),h9=n(In,` and
`),em=l(In,"CODE",{});var _Z=r(em);f9=n(_Z,"reduce_scatter"),_Z.forEach(t),d9=n(In,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),In.forEach(t),tg=c(e),Li=l(e,"UL",{});var vZ=r(Li);pl=l(vZ,"LI",{});var Pq=r(pl);sm=l(Pq,"CODE",{});var jZ=r(sm);m9=n(jZ,"sub_group_size"),jZ.forEach(t),_9=n(Pq,": "),tm=l(Pq,"CODE",{});var wZ=r(tm);v9=n(wZ,"1e9"),wZ.forEach(t),Pq.forEach(t),vZ.forEach(t),ag=c(e),De=l(e,"P",{});var bp=r(De);am=l(bp,"CODE",{});var yZ=r(am);j9=n(yZ,"sub_group_size"),yZ.forEach(t),w9=n(bp,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),nm=l(bp,"CODE",{});var gZ=r(nm);y9=n(gZ,"sub_group_size"),gZ.forEach(t),g9=n(bp,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),om=l(bp,"CODE",{});var bZ=r(om);b9=n(bZ,"sub_group_size"),bZ.forEach(t),q9=n(bp,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),bp.forEach(t),ng=c(e),Ve=l(e,"P",{});var fh=r(Ve);E9=n(fh,"You can leave "),lm=l(fh,"CODE",{});var qZ=r(lm);$9=n(qZ,"sub_group_size"),qZ.forEach(t),k9=n(fh," to its default value of "),rm=l(fh,"EM",{});var EZ=r(rm);P9=n(EZ,"1e9"),EZ.forEach(t),z9=n(fh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),fh.forEach(t),og=c(e),ra=l(e,"OL",{});var zq=r(ra);il=l(zq,"LI",{});var Dq=r(il);D9=n(Dq,"Running into OOM during optimizer step: Reduce "),pm=l(Dq,"CODE",{});var $Z=r(pm);O9=n($Z,"sub_group_size"),$Z.forEach(t),A9=n(Dq," to reduce memory utilization of temporary buffers"),Dq.forEach(t),T9=c(zq),ul=l(zq,"LI",{});var Oq=r(ul);S9=n(Oq,"Optimizer Step is taking a long time: Increase "),im=l(Oq,"CODE",{});var kZ=r(im);C9=n(kZ,"sub_group_size"),kZ.forEach(t),x9=n(Oq,` to improve bandwidth utilization as a result of
the increased data buffers.`),Oq.forEach(t),zq.forEach(t),lg=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),rg=c(e),Is=l(e,"H3",{class:!0});var Aq=r(Is);pa=l(Aq,"A",{id:!0,class:!0,href:!0});var PZ=r(pa);um=l(PZ,"SPAN",{});var zZ=r(um);d(cl.$$.fragment,zZ),zZ.forEach(t),PZ.forEach(t),R9=c(Aq),cm=l(Aq,"SPAN",{});var DZ=r(cm);I9=n(DZ,"NVMe Support"),DZ.forEach(t),Aq.forEach(t),pg=c(e),Ni=l(e,"P",{});var OZ=r(Ni);U9=n(OZ,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),OZ.forEach(t),ig=c(e),Hi=l(e,"P",{});var AZ=r(Hi);G9=n(AZ,"The following configuration example enables NVMe to offload both optimizer states and the params:"),AZ.forEach(t),ug=c(e),d(hl.$$.fragment,e),cg=c(e),ia=l(e,"P",{});var Tq=r(ia);M9=n(Tq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),hm=l(Tq,"EM",{});var TZ=r(hm);L9=n(TZ,"\u201Cdevice\u201D: \u201Ccpu\u201D"),TZ.forEach(t),Z9=n(Tq,")."),Tq.forEach(t),hg=c(e),Ye=l(e,"P",{});var dh=r(Ye);N9=n(dh,"Here is the full documentation for offloading "),fl=l(dh,"A",{href:!0,rel:!0});var SZ=r(fl);H9=n(SZ,"optimizer states"),SZ.forEach(t),B9=n(dh," and "),dl=l(dh,"A",{href:!0,rel:!0});var CZ=r(dl);W9=n(CZ,"parameters"),CZ.forEach(t),F9=n(dh,"."),dh.forEach(t),fg=c(e),ua=l(e,"P",{});var Sq=r(ua);V9=n(Sq,"Make sure that your "),fm=l(Sq,"CODE",{});var xZ=r(fm);Y9=n(xZ,"nvme_path"),xZ.forEach(t),K9=n(Sq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Sq.forEach(t),dg=c(e),Ke=l(e,"P",{});var mh=r(Ke);J9=n(mh,"In order to figure out the optimal "),dm=l(mh,"CODE",{});var RZ=r(dm);X9=n(RZ,"aio"),RZ.forEach(t),Q9=n(mh,` configuration block you must run a benchmark on your target setup, as
`),ml=l(mh,"A",{href:!0,rel:!0});var IZ=r(ml);eP=n(IZ,"explained here"),IZ.forEach(t),sP=n(mh,"."),mh.forEach(t),mg=c(e),Bi=l(e,"A",{id:!0}),r(Bi).forEach(t),_g=c(e),Us=l(e,"H4",{class:!0});var Cq=r(Us);ca=l(Cq,"A",{id:!0,class:!0,href:!0});var UZ=r(ca);mm=l(UZ,"SPAN",{});var GZ=r(mm);d(_l.$$.fragment,GZ),GZ.forEach(t),UZ.forEach(t),tP=c(Cq),_m=l(Cq,"SPAN",{});var MZ=r(_m);aP=n(MZ,"ZeRO-2 vs ZeRO-3 Performance"),MZ.forEach(t),Cq.forEach(t),vg=c(e),Wi=l(e,"P",{});var LZ=r(Wi);nP=n(LZ,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),LZ.forEach(t),jg=c(e),Fi=l(e,"P",{});var ZZ=r(Fi);oP=n(ZZ,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),ZZ.forEach(t),wg=c(e),ha=l(e,"UL",{});var xq=r(ha);Gs=l(xq,"LI",{});var _h=r(Gs);lP=n(_h,"set "),vm=l(_h,"CODE",{});var NZ=r(vm);rP=n(NZ,"stage3_param_persistence_threshold"),NZ.forEach(t),pP=n(_h," to a very large number - larger than the largest parameter, e.g., "),jm=l(_h,"CODE",{});var HZ=r(jm);iP=n(HZ,"6 * hidden_size * hidden_size"),HZ.forEach(t),uP=n(_h,". This will keep the parameters on the GPUs."),_h.forEach(t),cP=c(xq),vl=l(xq,"LI",{});var Rq=r(vl);hP=n(Rq,"turn off "),wm=l(Rq,"CODE",{});var BZ=r(wm);fP=n(BZ,"offload_params"),BZ.forEach(t),dP=n(Rq," since ZeRO-2 doesn\u2019t have that option."),Rq.forEach(t),xq.forEach(t),yg=c(e),Je=l(e,"P",{});var vh=r(Je);mP=n(vh,"The performance will likely improve significantly with just "),ym=l(vh,"CODE",{});var WZ=r(ym);_P=n(WZ,"offload_params"),WZ.forEach(t),vP=n(vh,` turned off, even if you don\u2019t change
`),gm=l(vh,"CODE",{});var FZ=r(gm);jP=n(FZ,"stage3_param_persistence_threshold"),FZ.forEach(t),wP=n(vh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),vh.forEach(t),gg=c(e),Vi=l(e,"A",{id:!0}),r(Vi).forEach(t),bg=c(e),Ms=l(e,"H4",{class:!0});var Iq=r(Ms);fa=l(Iq,"A",{id:!0,class:!0,href:!0});var VZ=r(fa);bm=l(VZ,"SPAN",{});var YZ=r(bm);d(jl.$$.fragment,YZ),YZ.forEach(t),VZ.forEach(t),yP=c(Iq),qm=l(Iq,"SPAN",{});var KZ=r(qm);gP=n(KZ,"ZeRO-2 Example"),KZ.forEach(t),Iq.forEach(t),qg=c(e),da=l(e,"P",{});var Uq=r(da);bP=n(Uq,"Here is a full ZeRO-2 auto-configuration file "),Em=l(Uq,"CODE",{});var JZ=r(Em);qP=n(JZ,"ds_config_zero2.json"),JZ.forEach(t),EP=n(Uq,":"),Uq.forEach(t),Eg=c(e),d(wl.$$.fragment,e),$g=c(e),ma=l(e,"P",{});var Gq=r(ma);$P=n(Gq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),$m=l(Gq,"CODE",{});var XZ=r($m);kP=n(XZ,"auto"),XZ.forEach(t),PP=n(Gq," settings in it."),Gq.forEach(t),kg=c(e),d(yl.$$.fragment,e),Pg=c(e),Yi=l(e,"A",{id:!0}),r(Yi).forEach(t),zg=c(e),Ls=l(e,"H4",{class:!0});var Mq=r(Ls);_a=l(Mq,"A",{id:!0,class:!0,href:!0});var QZ=r(_a);km=l(QZ,"SPAN",{});var eN=r(km);d(gl.$$.fragment,eN),eN.forEach(t),QZ.forEach(t),zP=c(Mq),Pm=l(Mq,"SPAN",{});var sN=r(Pm);DP=n(sN,"ZeRO-3 Example"),sN.forEach(t),Mq.forEach(t),Dg=c(e),va=l(e,"P",{});var Lq=r(va);OP=n(Lq,"Here is a full ZeRO-3 auto-configuration file "),zm=l(Lq,"CODE",{});var tN=r(zm);AP=n(tN,"ds_config_zero3.json"),tN.forEach(t),TP=n(Lq,":"),Lq.forEach(t),Og=c(e),d(bl.$$.fragment,e),Ag=c(e),ja=l(e,"P",{});var Zq=r(ja);SP=n(Zq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Dm=l(Zq,"CODE",{});var aN=r(Dm);CP=n(aN,"auto"),aN.forEach(t),xP=n(Zq," settings in it."),Zq.forEach(t),Tg=c(e),d(ql.$$.fragment,e),Sg=c(e),Zs=l(e,"H3",{class:!0});var Nq=r(Zs);wa=l(Nq,"A",{id:!0,class:!0,href:!0});var nN=r(wa);Om=l(nN,"SPAN",{});var oN=r(Om);d(El.$$.fragment,oN),oN.forEach(t),nN.forEach(t),RP=c(Nq),Am=l(Nq,"SPAN",{});var lN=r(Am);IP=n(lN,"Optimizer and Scheduler"),lN.forEach(t),Nq.forEach(t),Cg=c(e),ya=l(e,"P",{});var Hq=r(ya);UP=n(Hq,"As long as you don\u2019t enable "),Tm=l(Hq,"CODE",{});var rN=r(Tm);GP=n(rN,"offload_optimizer"),rN.forEach(t),MP=n(Hq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Hq.forEach(t),xg=c(e),Ki=l(e,"P",{});var pN=r(Ki);LP=n(pN,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),pN.forEach(t),Rg=c(e),ga=l(e,"P",{});var Bq=r(ga);ZP=n(Bq,"It is possible to use a non-DeepSpeed optimizer when "),Sm=l(Bq,"CODE",{});var iN=r(Sm);NP=n(iN,"offload_optimizer"),iN.forEach(t),HP=n(Bq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Bq.forEach(t),Ig=c(e),Ji=l(e,"A",{id:!0}),r(Ji).forEach(t),Ug=c(e),Ns=l(e,"H4",{class:!0});var Wq=r(Ns);ba=l(Wq,"A",{id:!0,class:!0,href:!0});var uN=r(ba);Cm=l(uN,"SPAN",{});var cN=r(Cm);d($l.$$.fragment,cN),cN.forEach(t),uN.forEach(t),BP=c(Wq),xm=l(Wq,"SPAN",{});var hN=r(xm);WP=n(hN,"Optimizer"),hN.forEach(t),Wq.forEach(t),Gg=c(e),Xe=l(e,"P",{});var jh=r(Xe);FP=n(jh,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Rm=l(jh,"CODE",{});var fN=r(Rm);VP=n(fN,"torch"),fN.forEach(t),YP=n(jh,". The full documentation is "),kl=l(jh,"A",{href:!0,rel:!0});var dN=r(kl);KP=n(dN,"here"),dN.forEach(t),JP=n(jh,"."),jh.forEach(t),Mg=c(e),$=l(e,"P",{});var A=r($);XP=n(A,"If you don\u2019t configure the "),Im=l(A,"CODE",{});var mN=r(Im);QP=n(mN,"optimizer"),mN.forEach(t),ez=n(A," entry in the configuration file, the "),Xi=l(A,"A",{href:!0});var _N=r(Xi);sz=n(_N,"Trainer"),_N.forEach(t),tz=n(A,` will
automatically set it to `),Um=l(A,"CODE",{});var vN=r(Um);az=n(vN,"AdamW"),vN.forEach(t),nz=n(A,` and will use the supplied values or the defaults for the following command line
arguments: `),Gm=l(A,"CODE",{});var jN=r(Gm);oz=n(jN,"--learning_rate"),jN.forEach(t),lz=n(A,", "),Mm=l(A,"CODE",{});var wN=r(Mm);rz=n(wN,"--adam_beta1"),wN.forEach(t),pz=n(A,", "),Lm=l(A,"CODE",{});var yN=r(Lm);iz=n(yN,"--adam_beta2"),yN.forEach(t),uz=n(A,", "),Zm=l(A,"CODE",{});var gN=r(Zm);cz=n(gN,"--adam_epsilon"),gN.forEach(t),hz=n(A," and "),Nm=l(A,"CODE",{});var bN=r(Nm);fz=n(bN,"--weight_decay"),bN.forEach(t),dz=n(A,"."),A.forEach(t),Lg=c(e),Qe=l(e,"P",{});var wh=r(Qe);mz=n(wh,"Here is an example of the auto-configured "),Hm=l(wh,"CODE",{});var qN=r(Hm);_z=n(qN,"optimizer"),qN.forEach(t),vz=n(wh," entry for "),Bm=l(wh,"CODE",{});var EN=r(Bm);jz=n(EN,"AdamW"),EN.forEach(t),wz=n(wh,":"),wh.forEach(t),Zg=c(e),d(Pl.$$.fragment,e),Ng=c(e),Qi=l(e,"P",{});var $N=r(Qi);yz=n($N,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),$N.forEach(t),Hg=c(e),re=l(e,"UL",{});var Un=r(re);zl=l(Un,"LI",{});var Fq=r(zl);Wm=l(Fq,"CODE",{});var kN=r(Wm);gz=n(kN,"lr"),kN.forEach(t),bz=n(Fq," with the value of "),Fm=l(Fq,"CODE",{});var PN=r(Fm);qz=n(PN,"--learning_rate"),PN.forEach(t),Fq.forEach(t),Ez=c(Un),Dl=l(Un,"LI",{});var Vq=r(Dl);Vm=l(Vq,"CODE",{});var zN=r(Vm);$z=n(zN,"betas"),zN.forEach(t),kz=n(Vq," with the value of "),Ym=l(Vq,"CODE",{});var DN=r(Ym);Pz=n(DN,"--adam_beta1 --adam_beta2"),DN.forEach(t),Vq.forEach(t),zz=c(Un),Ol=l(Un,"LI",{});var Yq=r(Ol);Km=l(Yq,"CODE",{});var ON=r(Km);Dz=n(ON,"eps"),ON.forEach(t),Oz=n(Yq," with the value of "),Jm=l(Yq,"CODE",{});var AN=r(Jm);Az=n(AN,"--adam_epsilon"),AN.forEach(t),Yq.forEach(t),Tz=c(Un),Al=l(Un,"LI",{});var Kq=r(Al);Xm=l(Kq,"CODE",{});var TN=r(Xm);Sz=n(TN,"weight_decay"),TN.forEach(t),Cz=n(Kq," with the value of "),Qm=l(Kq,"CODE",{});var SN=r(Qm);xz=n(SN,"--weight_decay"),SN.forEach(t),Kq.forEach(t),Un.forEach(t),Bg=c(e),eu=l(e,"P",{});var CN=r(eu);Rz=n(CN,"Therefore please remember to tune the shared hyperparameters on the command line."),CN.forEach(t),Wg=c(e),su=l(e,"P",{});var xN=r(su);Iz=n(xN,"You can also set the values explicitly:"),xN.forEach(t),Fg=c(e),d(Tl.$$.fragment,e),Vg=c(e),qa=l(e,"P",{});var Jq=r(qa);Uz=n(Jq,"But then you\u2019re on your own synchronizing the "),tu=l(Jq,"A",{href:!0});var RN=r(tu);Gz=n(RN,"Trainer"),RN.forEach(t),Mz=n(Jq,` command line arguments and the DeepSpeed
configuration.`),Jq.forEach(t),Yg=c(e),au=l(e,"P",{});var IN=r(au);Lz=n(IN,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),IN.forEach(t),Kg=c(e),d(Sl.$$.fragment,e),Jg=c(e),pe=l(e,"P",{});var Gn=r(pe);Zz=n(Gn,"Similarly to "),e_=l(Gn,"CODE",{});var UN=r(e_);Nz=n(UN,"AdamW"),UN.forEach(t),Hz=n(Gn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),s_=l(Gn,"CODE",{});var GN=r(s_);Bz=n(GN,"weight_decay"),GN.forEach(t),Wz=n(Gn," around "),t_=l(Gn,"CODE",{});var MN=r(t_);Fz=n(MN,"0.01"),MN.forEach(t),Vz=n(Gn,"."),Gn.forEach(t),Xg=c(e),nu=l(e,"A",{id:!0}),r(nu).forEach(t),Qg=c(e),Hs=l(e,"H4",{class:!0});var Xq=r(Hs);Ea=l(Xq,"A",{id:!0,class:!0,href:!0});var LN=r(Ea);a_=l(LN,"SPAN",{});var ZN=r(a_);d(Cl.$$.fragment,ZN),ZN.forEach(t),LN.forEach(t),Yz=c(Xq),n_=l(Xq,"SPAN",{});var NN=r(n_);Kz=n(NN,"Scheduler"),NN.forEach(t),Xq.forEach(t),e2=c(e),L=l(e,"P",{});var be=r(L);Jz=n(be,"DeepSpeed supports "),o_=l(be,"CODE",{});var HN=r(o_);Xz=n(HN,"LRRangeTest"),HN.forEach(t),Qz=n(be,", "),l_=l(be,"CODE",{});var BN=r(l_);eD=n(BN,"OneCycle"),BN.forEach(t),sD=n(be,", "),r_=l(be,"CODE",{});var WN=r(r_);tD=n(WN,"WarmupLR"),WN.forEach(t),aD=n(be," and "),p_=l(be,"CODE",{});var FN=r(p_);nD=n(FN,"WarmupDecayLR"),FN.forEach(t),oD=n(be,` learning rate schedulers. The full
documentation is `),xl=l(be,"A",{href:!0,rel:!0});var VN=r(xl);lD=n(VN,"here"),VN.forEach(t),rD=n(be,"."),be.forEach(t),s2=c(e),ou=l(e,"P",{});var YN=r(ou);pD=n(YN,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),YN.forEach(t),t2=c(e),$a=l(e,"UL",{});var Qq=r($a);Rl=l(Qq,"LI",{});var eE=r(Rl);i_=l(eE,"CODE",{});var KN=r(i_);iD=n(KN,"WarmupLR"),KN.forEach(t),uD=n(eE," via "),u_=l(eE,"CODE",{});var JN=r(u_);cD=n(JN,"--lr_scheduler_type constant_with_warmup"),JN.forEach(t),eE.forEach(t),hD=c(Qq),es=l(Qq,"LI",{});var qp=r(es);c_=l(qp,"CODE",{});var XN=r(c_);fD=n(XN,"WarmupDecayLR"),XN.forEach(t),dD=n(qp," via "),h_=l(qp,"CODE",{});var QN=r(h_);mD=n(QN,"--lr_scheduler_type linear"),QN.forEach(t),_D=n(qp,". This is also the default value for "),f_=l(qp,"CODE",{});var eH=r(f_);vD=n(eH,"--lr_scheduler_type"),eH.forEach(t),jD=n(qp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),qp.forEach(t),Qq.forEach(t),a2=c(e),D=l(e,"P",{});var K=r(D);wD=n(K,"If you don\u2019t configure the "),d_=l(K,"CODE",{});var sH=r(d_);yD=n(sH,"scheduler"),sH.forEach(t),gD=n(K," entry in the configuration file, the "),lu=l(K,"A",{href:!0});var tH=r(lu);bD=n(tH,"Trainer"),tH.forEach(t),qD=n(K,` will use
the values of `),m_=l(K,"CODE",{});var aH=r(m_);ED=n(aH,"--lr_scheduler_type"),aH.forEach(t),$D=n(K,", "),__=l(K,"CODE",{});var nH=r(__);kD=n(nH,"--learning_rate"),nH.forEach(t),PD=n(K," and "),v_=l(K,"CODE",{});var oH=r(v_);zD=n(oH,"--warmup_steps"),oH.forEach(t),DD=n(K," or "),j_=l(K,"CODE",{});var lH=r(j_);OD=n(lH,"--warmup_ratio"),lH.forEach(t),AD=n(K,` to configure a
\u{1F917} Transformers version of it.`),K.forEach(t),n2=c(e),ss=l(e,"P",{});var yh=r(ss);TD=n(yh,"Here is an example of the auto-configured "),w_=l(yh,"CODE",{});var rH=r(w_);SD=n(rH,"scheduler"),rH.forEach(t),CD=n(yh," entry for "),y_=l(yh,"CODE",{});var pH=r(y_);xD=n(pH,"WarmupLR"),pH.forEach(t),RD=n(yh,":"),yh.forEach(t),o2=c(e),d(Il.$$.fragment,e),l2=c(e),ts=l(e,"P",{});var gh=r(ts);ID=n(gh,"Since "),g_=l(gh,"EM",{});var iH=r(g_);UD=n(iH,"\u201Cauto\u201D"),iH.forEach(t),GD=n(gh," is used the "),ru=l(gh,"A",{href:!0});var uH=r(ru);MD=n(uH,"Trainer"),uH.forEach(t),LD=n(gh,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),gh.forEach(t),r2=c(e),ie=l(e,"UL",{});var Mn=r(ie);ka=l(Mn,"LI",{});var vj=r(ka);b_=l(vj,"CODE",{});var cH=r(b_);ZD=n(cH,"warmup_min_lr"),cH.forEach(t),ND=n(vj," with the value of "),q_=l(vj,"CODE",{});var hH=r(q_);HD=n(hH,"0"),hH.forEach(t),BD=n(vj,"."),vj.forEach(t),WD=c(Mn),Pa=l(Mn,"LI",{});var jj=r(Pa);E_=l(jj,"CODE",{});var fH=r(E_);FD=n(fH,"warmup_max_lr"),fH.forEach(t),VD=n(jj," with the value of "),$_=l(jj,"CODE",{});var dH=r($_);YD=n(dH,"--learning_rate"),dH.forEach(t),KD=n(jj,"."),jj.forEach(t),JD=c(Mn),as=l(Mn,"LI",{});var Ep=r(as);k_=l(Ep,"CODE",{});var mH=r(k_);XD=n(mH,"warmup_num_steps"),mH.forEach(t),QD=n(Ep," with the value of "),P_=l(Ep,"CODE",{});var _H=r(P_);eO=n(_H,"--warmup_steps"),_H.forEach(t),sO=n(Ep," if provided. Otherwise will use "),z_=l(Ep,"CODE",{});var vH=r(z_);tO=n(vH,"--warmup_ratio"),vH.forEach(t),aO=n(Ep,`
multiplied by the number of training steps and rounded up.`),Ep.forEach(t),nO=c(Mn),ns=l(Mn,"LI",{});var $p=r(ns);D_=l($p,"CODE",{});var jH=r(D_);oO=n(jH,"total_num_steps"),jH.forEach(t),lO=n($p," with either the value of "),O_=l($p,"CODE",{});var wH=r(O_);rO=n(wH,"--max_steps"),wH.forEach(t),pO=n($p,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),A_=l($p,"CODE",{});var yH=r(A_);iO=n(yH,"WarmupDecayLR"),yH.forEach(t),uO=n($p,")."),$p.forEach(t),Mn.forEach(t),p2=c(e),pu=l(e,"P",{});var gH=r(pu);cO=n(gH,"You can, of course, take over any or all of the configuration values and set those yourself:"),gH.forEach(t),i2=c(e),d(Ul.$$.fragment,e),u2=c(e),za=l(e,"P",{});var sE=r(za);hO=n(sE,"But then you\u2019re on your own synchronizing the "),iu=l(sE,"A",{href:!0});var bH=r(iu);fO=n(bH,"Trainer"),bH.forEach(t),dO=n(sE,` command line arguments and the DeepSpeed
configuration.`),sE.forEach(t),c2=c(e),Da=l(e,"P",{});var tE=r(Da);mO=n(tE,"For example, for "),T_=l(tE,"CODE",{});var qH=r(T_);_O=n(qH,"WarmupDecayLR"),qH.forEach(t),vO=n(tE,", you can use the following entry:"),tE.forEach(t),h2=c(e),d(Gl.$$.fragment,e),f2=c(e),Y=l(e,"P",{});var ys=r(Y);jO=n(ys,"and "),S_=l(ys,"CODE",{});var EH=r(S_);wO=n(EH,"total_num_steps"),EH.forEach(t),yO=n(ys,", "),C_=l(ys,"CODE",{});var $H=r(C_);gO=n($H,"warmup_max_lr"),$H.forEach(t),bO=n(ys,", "),x_=l(ys,"CODE",{});var kH=r(x_);qO=n(kH,"warmup_num_steps"),kH.forEach(t),EO=n(ys," and "),R_=l(ys,"CODE",{});var PH=r(R_);$O=n(PH,"total_num_steps"),PH.forEach(t),kO=n(ys," will be set at loading time."),ys.forEach(t),d2=c(e),uu=l(e,"A",{id:!0}),r(uu).forEach(t),m2=c(e),Bs=l(e,"H3",{class:!0});var aE=r(Bs);Oa=l(aE,"A",{id:!0,class:!0,href:!0});var zH=r(Oa);I_=l(zH,"SPAN",{});var DH=r(I_);d(Ml.$$.fragment,DH),DH.forEach(t),zH.forEach(t),PO=c(aE),U_=l(aE,"SPAN",{});var OH=r(U_);zO=n(OH,"fp32 Precision"),OH.forEach(t),aE.forEach(t),_2=c(e),cu=l(e,"P",{});var AH=r(cu);DO=n(AH,"Deepspeed supports the full fp32 and the fp16 mixed precision."),AH.forEach(t),v2=c(e),Aa=l(e,"P",{});var nE=r(Aa);OO=n(nE,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),G_=l(nE,"CODE",{});var TH=r(G_);AO=n(TH,"NaN"),TH.forEach(t),TO=n(nE,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),nE.forEach(t),j2=c(e),d(Ll.$$.fragment,e),w2=c(e),Ta=l(e,"P",{});var oE=r(Ta);SO=n(oE,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Zl=l(oE,"A",{href:!0,rel:!0});var SH=r(Zl);CO=n(SH,"TensorFloat-32(TF32) on Ampere devices"),SH.forEach(t),xO=n(oE,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),oE.forEach(t),y2=c(e),ue=l(e,"P",{});var Ln=r(ue);RO=n(Ln,"With the \u{1F917} Trainer you can use "),M_=l(Ln,"CODE",{});var CH=r(M_);IO=n(CH,"--tf32"),CH.forEach(t),UO=n(Ln," to enable it, or disable it with "),L_=l(Ln,"CODE",{});var xH=r(L_);GO=n(xH,"--tf32 0"),xH.forEach(t),MO=n(Ln," or "),Z_=l(Ln,"CODE",{});var RH=r(Z_);LO=n(RH,"--no_tf32"),RH.forEach(t),ZO=n(Ln,". By default the PyTorch default is used."),Ln.forEach(t),g2=c(e),hu=l(e,"A",{id:!0}),r(hu).forEach(t),b2=c(e),Ws=l(e,"H3",{class:!0});var lE=r(Ws);Sa=l(lE,"A",{id:!0,class:!0,href:!0});var IH=r(Sa);N_=l(IH,"SPAN",{});var UH=r(N_);d(Nl.$$.fragment,UH),UH.forEach(t),IH.forEach(t),NO=c(lE),H_=l(lE,"SPAN",{});var GH=r(H_);HO=n(GH,"Automatic Mixed Precision"),GH.forEach(t),lE.forEach(t),q2=c(e),fu=l(e,"P",{});var MH=r(fu);BO=n(MH,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),MH.forEach(t),E2=c(e),Fs=l(e,"H3",{class:!0});var rE=r(Fs);Ca=l(rE,"A",{id:!0,class:!0,href:!0});var LH=r(Ca);B_=l(LH,"SPAN",{});var ZH=r(B_);d(Hl.$$.fragment,ZH),ZH.forEach(t),LH.forEach(t),WO=c(rE),W_=l(rE,"SPAN",{});var NH=r(W_);FO=n(NH,"fp16"),NH.forEach(t),rE.forEach(t),$2=c(e),du=l(e,"P",{});var HH=r(du);VO=n(HH,"To configure pytorch AMP-like mode with fp16 (float16) set:"),HH.forEach(t),k2=c(e),d(Bl.$$.fragment,e),P2=c(e),os=l(e,"P",{});var bh=r(os);YO=n(bh,"and the "),mu=l(bh,"A",{href:!0});var BH=r(mu);KO=n(BH,"Trainer"),BH.forEach(t),JO=n(bh,` will automatically enable or disable it based on the value of
`),F_=l(bh,"CODE",{});var WH=r(F_);XO=n(WH,"args.fp16_backend"),WH.forEach(t),QO=n(bh,". The rest of config values are up to you."),bh.forEach(t),z2=c(e),ls=l(e,"P",{});var qh=r(ls);eA=n(qh,"This mode gets enabled when "),V_=l(qh,"CODE",{});var FH=r(V_);sA=n(FH,"--fp16 --fp16_backend amp"),FH.forEach(t),tA=n(qh," or "),Y_=l(qh,"CODE",{});var VH=r(Y_);aA=n(VH,"--fp16_full_eval"),VH.forEach(t),nA=n(qh," command line args are passed."),qh.forEach(t),D2=c(e),_u=l(e,"P",{});var YH=r(_u);oA=n(YH,"You can also enable/disable this mode explicitly:"),YH.forEach(t),O2=c(e),d(Wl.$$.fragment,e),A2=c(e),xa=l(e,"P",{});var pE=r(xa);lA=n(pE,"But then you\u2019re on your own synchronizing the "),vu=l(pE,"A",{href:!0});var KH=r(vu);rA=n(KH,"Trainer"),KH.forEach(t),pA=n(pE,` command line arguments and the DeepSpeed
configuration.`),pE.forEach(t),T2=c(e),Ra=l(e,"P",{});var iE=r(Ra);iA=n(iE,"Here is the "),Fl=l(iE,"A",{href:!0,rel:!0});var JH=r(Fl);uA=n(JH,"documentation"),JH.forEach(t),cA=n(iE,"."),iE.forEach(t),S2=c(e),Vs=l(e,"H3",{class:!0});var uE=r(Vs);Ia=l(uE,"A",{id:!0,class:!0,href:!0});var XH=r(Ia);K_=l(XH,"SPAN",{});var QH=r(K_);d(Vl.$$.fragment,QH),QH.forEach(t),XH.forEach(t),hA=c(uE),J_=l(uE,"SPAN",{});var eB=r(J_);fA=n(eB,"bf16"),eB.forEach(t),uE.forEach(t),C2=c(e),ju=l(e,"P",{});var sB=r(ju);dA=n(sB,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),sB.forEach(t),x2=c(e),d(Yl.$$.fragment,e),R2=c(e),wu=l(e,"P",{});var tB=r(wu);mA=n(tB,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),tB.forEach(t),I2=c(e),rs=l(e,"P",{});var Eh=r(rs);_A=n(Eh,"This mode gets enabled when "),X_=l(Eh,"CODE",{});var aB=r(X_);vA=n(aB,"--bf16"),aB.forEach(t),jA=n(Eh," or "),Q_=l(Eh,"CODE",{});var nB=r(Q_);wA=n(nB,"--bf16_full_eval"),nB.forEach(t),yA=n(Eh," command line args are passed."),Eh.forEach(t),U2=c(e),yu=l(e,"P",{});var oB=r(yu);gA=n(oB,"You can also enable/disable this mode explicitly:"),oB.forEach(t),G2=c(e),d(Kl.$$.fragment,e),M2=c(e),d(Ua.$$.fragment,e),L2=c(e),Ys=l(e,"H3",{class:!0});var cE=r(Ys);Ga=l(cE,"A",{id:!0,class:!0,href:!0});var lB=r(Ga);e1=l(lB,"SPAN",{});var rB=r(e1);d(Jl.$$.fragment,rB),rB.forEach(t),lB.forEach(t),bA=c(cE),s1=l(cE,"SPAN",{});var pB=r(s1);qA=n(pB,"apex"),pB.forEach(t),cE.forEach(t),Z2=c(e),gu=l(e,"P",{});var iB=r(gu);EA=n(iB,"To configure apex AMP-like mode set:"),iB.forEach(t),N2=c(e),d(Xl.$$.fragment,e),H2=c(e),ce=l(e,"P",{});var Zn=r(ce);$A=n(Zn,"and the "),bu=l(Zn,"A",{href:!0});var uB=r(bu);kA=n(uB,"Trainer"),uB.forEach(t),PA=n(Zn," will automatically configure it based on the values of "),t1=l(Zn,"CODE",{});var cB=r(t1);zA=n(cB,"args.fp16_backend"),cB.forEach(t),DA=n(Zn,` and
`),a1=l(Zn,"CODE",{});var hB=r(a1);OA=n(hB,"args.fp16_opt_level"),hB.forEach(t),AA=n(Zn,"."),Zn.forEach(t),B2=c(e),Ma=l(e,"P",{});var hE=r(Ma);TA=n(hE,"This mode gets enabled when "),n1=l(hE,"CODE",{});var fB=r(n1);SA=n(fB,"--fp16 --fp16_backend apex --fp16_opt_level 01"),fB.forEach(t),CA=n(hE," command line args are passed."),hE.forEach(t),W2=c(e),qu=l(e,"P",{});var dB=r(qu);xA=n(dB,"You can also configure this mode explicitly:"),dB.forEach(t),F2=c(e),d(Ql.$$.fragment,e),V2=c(e),La=l(e,"P",{});var fE=r(La);RA=n(fE,"But then you\u2019re on your own synchronizing the "),Eu=l(fE,"A",{href:!0});var mB=r(Eu);IA=n(mB,"Trainer"),mB.forEach(t),UA=n(fE,` command line arguments and the DeepSpeed
configuration.`),fE.forEach(t),Y2=c(e),Za=l(e,"P",{});var dE=r(Za);GA=n(dE,"Here is the "),er=l(dE,"A",{href:!0,rel:!0});var _B=r(er);MA=n(_B,"documentation"),_B.forEach(t),LA=n(dE,"."),dE.forEach(t),K2=c(e),$u=l(e,"A",{id:!0}),r($u).forEach(t),J2=c(e),Ks=l(e,"H3",{class:!0});var mE=r(Ks);Na=l(mE,"A",{id:!0,class:!0,href:!0});var vB=r(Na);o1=l(vB,"SPAN",{});var jB=r(o1);d(sr.$$.fragment,jB),jB.forEach(t),vB.forEach(t),ZA=c(mE),l1=l(mE,"SPAN",{});var wB=r(l1);NA=n(wB,"Batch Size"),wB.forEach(t),mE.forEach(t),X2=c(e),ku=l(e,"P",{});var yB=r(ku);HA=n(yB,"To configure batch size, use:"),yB.forEach(t),Q2=c(e),d(tr.$$.fragment,e),eb=c(e),Z=l(e,"P",{});var qe=r(Z);BA=n(qe,"and the "),Pu=l(qe,"A",{href:!0});var gB=r(Pu);WA=n(gB,"Trainer"),gB.forEach(t),FA=n(qe," will automatically set "),r1=l(qe,"CODE",{});var bB=r(r1);VA=n(bB,"train_micro_batch_size_per_gpu"),bB.forEach(t),YA=n(qe,` to the value of
`),p1=l(qe,"CODE",{});var qB=r(p1);KA=n(qB,"args.per_device_train_batch_size"),qB.forEach(t),JA=n(qe," and "),i1=l(qe,"CODE",{});var EB=r(i1);XA=n(EB,"train_batch_size"),EB.forEach(t),QA=n(qe," to "),u1=l(qe,"CODE",{});var $B=r(u1);eT=n($B,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),$B.forEach(t),sT=n(qe,"."),qe.forEach(t),sb=c(e),zu=l(e,"P",{});var kB=r(zu);tT=n(kB,"You can also set the values explicitly:"),kB.forEach(t),tb=c(e),d(ar.$$.fragment,e),ab=c(e),Ha=l(e,"P",{});var _E=r(Ha);aT=n(_E,"But then you\u2019re on your own synchronizing the "),Du=l(_E,"A",{href:!0});var PB=r(Du);nT=n(PB,"Trainer"),PB.forEach(t),oT=n(_E,` command line arguments and the DeepSpeed
configuration.`),_E.forEach(t),nb=c(e),Ou=l(e,"A",{id:!0}),r(Ou).forEach(t),ob=c(e),Js=l(e,"H3",{class:!0});var vE=r(Js);Ba=l(vE,"A",{id:!0,class:!0,href:!0});var zB=r(Ba);c1=l(zB,"SPAN",{});var DB=r(c1);d(nr.$$.fragment,DB),DB.forEach(t),zB.forEach(t),lT=c(vE),h1=l(vE,"SPAN",{});var OB=r(h1);rT=n(OB,"Gradient Accumulation"),OB.forEach(t),vE.forEach(t),lb=c(e),Au=l(e,"P",{});var AB=r(Au);pT=n(AB,"To configure gradient accumulation set:"),AB.forEach(t),rb=c(e),d(or.$$.fragment,e),pb=c(e),ps=l(e,"P",{});var $h=r(ps);iT=n($h,"and the "),Tu=l($h,"A",{href:!0});var TB=r(Tu);uT=n(TB,"Trainer"),TB.forEach(t),cT=n($h," will automatically set it to the value of "),f1=l($h,"CODE",{});var SB=r(f1);hT=n(SB,"args.gradient_accumulation_steps"),SB.forEach(t),fT=n($h,"."),$h.forEach(t),ib=c(e),Su=l(e,"P",{});var CB=r(Su);dT=n(CB,"You can also set the value explicitly:"),CB.forEach(t),ub=c(e),d(lr.$$.fragment,e),cb=c(e),Wa=l(e,"P",{});var jE=r(Wa);mT=n(jE,"But then you\u2019re on your own synchronizing the "),Cu=l(jE,"A",{href:!0});var xB=r(Cu);_T=n(xB,"Trainer"),xB.forEach(t),vT=n(jE,` command line arguments and the DeepSpeed
configuration.`),jE.forEach(t),hb=c(e),xu=l(e,"A",{id:!0}),r(xu).forEach(t),fb=c(e),Xs=l(e,"H3",{class:!0});var wE=r(Xs);Fa=l(wE,"A",{id:!0,class:!0,href:!0});var RB=r(Fa);d1=l(RB,"SPAN",{});var IB=r(d1);d(rr.$$.fragment,IB),IB.forEach(t),RB.forEach(t),jT=c(wE),m1=l(wE,"SPAN",{});var UB=r(m1);wT=n(UB,"Gradient Clipping"),UB.forEach(t),wE.forEach(t),db=c(e),Ru=l(e,"P",{});var GB=r(Ru);yT=n(GB,"To configure gradient gradient clipping set:"),GB.forEach(t),mb=c(e),d(pr.$$.fragment,e),_b=c(e),is=l(e,"P",{});var kh=r(is);gT=n(kh,"and the "),Iu=l(kh,"A",{href:!0});var MB=r(Iu);bT=n(MB,"Trainer"),MB.forEach(t),qT=n(kh," will automatically set it to the value of "),_1=l(kh,"CODE",{});var LB=r(_1);ET=n(LB,"args.max_grad_norm"),LB.forEach(t),$T=n(kh,"."),kh.forEach(t),vb=c(e),Uu=l(e,"P",{});var ZB=r(Uu);kT=n(ZB,"You can also set the value explicitly:"),ZB.forEach(t),jb=c(e),d(ir.$$.fragment,e),wb=c(e),Va=l(e,"P",{});var yE=r(Va);PT=n(yE,"But then you\u2019re on your own synchronizing the "),Gu=l(yE,"A",{href:!0});var NB=r(Gu);zT=n(NB,"Trainer"),NB.forEach(t),DT=n(yE,` command line arguments and the DeepSpeed
configuration.`),yE.forEach(t),yb=c(e),Mu=l(e,"A",{id:!0}),r(Mu).forEach(t),gb=c(e),Qs=l(e,"H3",{class:!0});var gE=r(Qs);Ya=l(gE,"A",{id:!0,class:!0,href:!0});var HB=r(Ya);v1=l(HB,"SPAN",{});var BB=r(v1);d(ur.$$.fragment,BB),BB.forEach(t),HB.forEach(t),OT=c(gE),j1=l(gE,"SPAN",{});var WB=r(j1);AT=n(WB,"Getting The Model Weights Out"),WB.forEach(t),gE.forEach(t),bb=c(e),Ka=l(e,"P",{});var bE=r(Ka);TT=n(bE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),w1=l(bE,"CODE",{});var FB=r(w1);ST=n(FB,"global_step*/*optim_states.pt"),FB.forEach(t),CT=n(bE,` (this is glob
pattern), and are saved under the normal checkpoint.`),bE.forEach(t),qb=c(e),Lu=l(e,"P",{});var VB=r(Lu);y1=l(VB,"STRONG",{});var YB=r(y1);xT=n(YB,"FP16 Weights:"),YB.forEach(t),VB.forEach(t),Eb=c(e),Ja=l(e,"P",{});var qE=r(Ja);RT=n(qE,"When a model is saved under ZeRO-2, you end up having the normal "),g1=l(qE,"CODE",{});var KB=r(g1);IT=n(KB,"pytorch_model.bin"),KB.forEach(t),UT=n(qE,` file with the model weights, but
they are only the fp16 version of the weights.`),qE.forEach(t),$b=c(e),O=l(e,"P",{});var J=r(O);GT=n(J,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),b1=l(J,"CODE",{});var JB=r(b1);MT=n(JB,'"stage3_gather_16bit_weights_on_model_save": true'),JB.forEach(t),LT=n(J," is required to get the "),q1=l(J,"CODE",{});var XB=r(q1);ZT=n(XB,"Trainer"),XB.forEach(t),NT=n(J,` to save the fp16
version of the weights. If this setting is `),E1=l(J,"CODE",{});var QB=r(E1);HT=n(QB,"False"),QB.forEach(t),BT=c(J),$1=l(J,"CODE",{});var eW=r($1);WT=n(eW,"pytorch_model.bin"),eW.forEach(t),FT=n(J," won\u2019t be created. This is because by default DeepSpeed\u2019s "),k1=l(J,"CODE",{});var sW=r(k1);VT=n(sW,"state_dict"),sW.forEach(t),YT=n(J," contains a placeholder and not the real weights. If we were to save this "),P1=l(J,"CODE",{});var tW=r(P1);KT=n(tW,"state_dict"),tW.forEach(t),JT=n(J," it won\u2019t be possible to load it back."),J.forEach(t),kb=c(e),d(cr.$$.fragment,e),Pb=c(e),Zu=l(e,"P",{});var aW=r(Zu);z1=l(aW,"STRONG",{});var nW=r(z1);XT=n(nW,"FP32 Weights:"),nW.forEach(t),aW.forEach(t),zb=c(e),Xa=l(e,"P",{});var EE=r(Xa);QT=n(EE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),hr=l(EE,"A",{href:!0,rel:!0});var oW=r(hr);eS=n(oW,"models hub"),oW.forEach(t),sS=n(EE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),EE.forEach(t),Db=c(e),Nu=l(e,"P",{});var lW=r(Nu);D1=l(lW,"STRONG",{});var rW=r(D1);tS=n(rW,"Live FP32 Weights Recovery:"),rW.forEach(t),lW.forEach(t),Ob=c(e),Hu=l(e,"P",{});var pW=r(Hu);aS=n(pW,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),pW.forEach(t),Ab=c(e),Bu=l(e,"P",{});var iW=r(Bu);nS=n(iW,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),iW.forEach(t),Tb=c(e),d(fr.$$.fragment,e),Sb=c(e),us=l(e,"P",{});var Ph=r(us);oS=n(Ph,"If you\u2019re using the "),O1=l(Ph,"CODE",{});var uW=r(O1);lS=n(uW,"--load_best_model_at_end"),uW.forEach(t),rS=n(Ph," class:"),A1=l(Ph,"EM",{});var cW=r(A1);pS=n(cW,"~transformers.TrainingArguments"),cW.forEach(t),iS=n(Ph,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Ph.forEach(t),Cb=c(e),d(dr.$$.fragment,e),xb=c(e),d(Qa.$$.fragment,e),Rb=c(e),en=l(e,"P",{});var $E=r(en);uS=n($E,"Of course, you don\u2019t have to use class:"),T1=l($E,"EM",{});var hW=r(T1);cS=n(hW,"~transformers.Trainer"),hW.forEach(t),hS=n($E,` and you can adjust the examples above to your own
trainer.`),$E.forEach(t),Ib=c(e),sn=l(e,"P",{});var kE=r(sn);fS=n(kE,"If for some reason you want more refinement, you can also extract the fp32 "),S1=l(kE,"CODE",{});var fW=r(S1);dS=n(fW,"state_dict"),fW.forEach(t),mS=n(kE,` of the weights and apply
these yourself as is shown in the following example:`),kE.forEach(t),Ub=c(e),d(mr.$$.fragment,e),Gb=c(e),Wu=l(e,"P",{});var dW=r(Wu);C1=l(dW,"STRONG",{});var mW=r(C1);_S=n(mW,"Offline FP32 Weights Recovery:"),mW.forEach(t),dW.forEach(t),Mb=c(e),cs=l(e,"P",{});var zh=r(cs);vS=n(zh,"DeepSpeed creates a special conversion script "),x1=l(zh,"CODE",{});var _W=r(x1);jS=n(_W,"zero_to_fp32.py"),_W.forEach(t),wS=n(zh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),R1=l(zh,"CODE",{});var vW=r(R1);yS=n(vW,"Trainer"),vW.forEach(t),gS=n(zh," to do the extraction."),zh.forEach(t),Lb=c(e),Fu=l(e,"P",{});var jW=r(Fu);bS=n(jW,"Let\u2019s say your checkpoint folder looks like this:"),jW.forEach(t),Zb=c(e),d(_r.$$.fragment,e),Nb=c(e),tn=l(e,"P",{});var PE=r(tn);qS=n(PE,"In this example there is just one DeepSpeed checkpoint sub-folder "),I1=l(PE,"EM",{});var wW=r(I1);ES=n(wW,"global_step1"),wW.forEach(t),$S=n(PE,`. Therefore to reconstruct the fp32
weights just run:`),PE.forEach(t),Hb=c(e),d(vr.$$.fragment,e),Bb=c(e),an=l(e,"P",{});var zE=r(an);kS=n(zE,"This is it. "),U1=l(zE,"CODE",{});var yW=r(U1);PS=n(yW,"pytorch_model.bin"),yW.forEach(t),zS=n(zE," will now contain the full fp32 model weights consolidated from multiple GPUs."),zE.forEach(t),Wb=c(e),Vu=l(e,"P",{});var gW=r(Vu);DS=n(gW,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),gW.forEach(t),Fb=c(e),jr=l(e,"P",{});var vU=r(jr);G1=l(vU,"CODE",{});var bW=r(G1);OS=n(bW,"python zero_to_fp32.py -h"),bW.forEach(t),AS=n(vU," will give you usage details."),vU.forEach(t),Vb=c(e),hs=l(e,"P",{});var Dh=r(hs);TS=n(Dh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),M1=l(Dh,"CODE",{});var qW=r(M1);SS=n(qW,"latest"),qW.forEach(t),CS=n(Dh,`, which in the current
example will contain `),L1=l(Dh,"CODE",{});var EW=r(L1);xS=n(EW,"global_step1"),EW.forEach(t),RS=n(Dh,"."),Dh.forEach(t),Yb=c(e),Yu=l(e,"P",{});var $W=r(Yu);IS=n($W,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),$W.forEach(t),Kb=c(e),et=l(e,"H3",{class:!0});var DE=r(et);nn=l(DE,"A",{id:!0,class:!0,href:!0});var kW=r(nn);Z1=l(kW,"SPAN",{});var PW=r(Z1);d(wr.$$.fragment,PW),PW.forEach(t),kW.forEach(t),US=c(DE),N1=l(DE,"SPAN",{});var zW=r(N1);GS=n(zW,"ZeRO-3 and Infinity Nuances"),zW.forEach(t),DE.forEach(t),Jb=c(e),Ku=l(e,"P",{});var DW=r(Ku);MS=n(DW,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),DW.forEach(t),Xb=c(e),Ju=l(e,"P",{});var OW=r(Ju);LS=n(OW,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),OW.forEach(t),Qb=c(e),Xu=l(e,"P",{});var AW=r(Xu);ZS=n(AW,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),AW.forEach(t),e3=c(e),st=l(e,"H4",{class:!0});var OE=r(st);on=l(OE,"A",{id:!0,class:!0,href:!0});var TW=r(on);H1=l(TW,"SPAN",{});var SW=r(H1);d(yr.$$.fragment,SW),SW.forEach(t),TW.forEach(t),NS=c(OE),B1=l(OE,"SPAN",{});var CW=r(B1);HS=n(CW,"Constructing Massive Models"),CW.forEach(t),OE.forEach(t),s3=c(e),ln=l(e,"P",{});var AE=r(ln);BS=n(AE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),W1=l(AE,"EM",{});var xW=r(W1);WS=n(xW,"deepspeed.zero.Init()"),xW.forEach(t),FS=n(AE,`
context manager (which is also a function decorator), like so:`),AE.forEach(t),t3=c(e),d(gr.$$.fragment,e),a3=c(e),Qu=l(e,"P",{});var RW=r(Qu);VS=n(RW,"As you can see this gives you a randomly initialized model."),RW.forEach(t),n3=c(e),P=l(e,"P",{});var B=r(P);YS=n(B,"If you want to use a pretrained model, "),F1=l(B,"CODE",{});var IW=r(F1);KS=n(IW,"model_class.from_pretrained"),IW.forEach(t),JS=n(B,` will activate this feature as long as
`),V1=l(B,"CODE",{});var UW=r(V1);XS=n(UW,"is_deepspeed_zero3_enabled()"),UW.forEach(t),QS=n(B," returns "),Y1=l(B,"CODE",{});var GW=r(Y1);eC=n(GW,"True"),GW.forEach(t),sC=n(B,`, which currently is setup by the
`),ec=l(B,"A",{href:!0});var MW=r(ec);tC=n(MW,"TrainingArguments"),MW.forEach(t),aC=n(B,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),sc=l(B,"A",{href:!0});var LW=r(sc);nC=n(LW,"TrainingArguments"),LW.forEach(t),oC=n(B," object "),K1=l(B,"STRONG",{});var ZW=r(K1);lC=n(ZW,"before"),ZW.forEach(t),rC=n(B,` calling
`),J1=l(B,"CODE",{});var NW=r(J1);pC=n(NW,"from_pretrained"),NW.forEach(t),iC=n(B,". Here is an example of a possible sequence:"),B.forEach(t),o3=c(e),d(br.$$.fragment,e),l3=c(e),rn=l(e,"P",{});var TE=r(rn);uC=n(TE,"If you\u2019re using the official example scripts and your command line arguments include "),X1=l(TE,"CODE",{});var HW=r(X1);cC=n(HW,"--deepspeed ds_config.json"),HW.forEach(t),hC=n(TE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),TE.forEach(t),r3=c(e),tc=l(e,"P",{});var BW=r(tc);fC=n(BW,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),BW.forEach(t),p3=c(e),pn=l(e,"P",{});var SE=r(pn);dC=n(SE,"For full details on this method and other related features please refer to "),qr=l(SE,"A",{href:!0,rel:!0});var WW=r(qr);mC=n(WW,"Constructing Massive Models"),WW.forEach(t),_C=n(SE,"."),SE.forEach(t),i3=c(e),he=l(e,"P",{});var Nn=r(he);vC=n(Nn,"Also when loading fp16-pretrained models, you will want to tell "),Q1=l(Nn,"CODE",{});var FW=r(Q1);jC=n(FW,"from_pretrained"),FW.forEach(t),wC=n(Nn,` to use
`),ev=l(Nn,"CODE",{});var VW=r(ev);yC=n(VW,"torch_dtype=torch.float16"),VW.forEach(t),gC=n(Nn,". For details, please, see "),ac=l(Nn,"A",{href:!0});var YW=r(ac);bC=n(YW,"from_pretrained-torch-dtype"),YW.forEach(t),qC=n(Nn,"."),Nn.forEach(t),u3=c(e),tt=l(e,"H4",{class:!0});var CE=r(tt);un=l(CE,"A",{id:!0,class:!0,href:!0});var KW=r(un);sv=l(KW,"SPAN",{});var JW=r(sv);d(Er.$$.fragment,JW),JW.forEach(t),KW.forEach(t),EC=c(CE),tv=l(CE,"SPAN",{});var XW=r(tv);$C=n(XW,"Gathering Parameters"),XW.forEach(t),CE.forEach(t),c3=c(e),$r=l(e,"P",{});var jU=r($r);kC=n(jU,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),kr=l(jU,"A",{href:!0,rel:!0});var QW=r(kr);PC=n(QW,"Gathering Parameters"),QW.forEach(t),jU.forEach(t),h3=c(e),cn=l(e,"P",{});var xE=r(cn);zC=n(xE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),av=l(xE,"CODE",{});var eF=r(av);DC=n(eF,"from_pretrained"),eF.forEach(t),OC=n(xE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),xE.forEach(t),f3=c(e),nc=l(e,"P",{});var sF=r(nc);AC=n(sF,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),sF.forEach(t),d3=c(e),d(Pr.$$.fragment,e),m3=c(e),fs=l(e,"P",{});var Oh=r(fs);TC=n(Oh,"stress on "),nv=l(Oh,"CODE",{});var tF=r(nv);SC=n(tF,"tensor([1.])"),tF.forEach(t),CC=n(Oh,", or if you get an error where it says the parameter is of size "),ov=l(Oh,"CODE",{});var aF=r(ov);xC=n(aF,"1"),aF.forEach(t),RC=n(Oh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Oh.forEach(t),_3=c(e),oc=l(e,"A",{id:!0}),r(oc).forEach(t),v3=c(e),at=l(e,"H3",{class:!0});var RE=r(at);hn=l(RE,"A",{id:!0,class:!0,href:!0});var nF=r(hn);lv=l(nF,"SPAN",{});var oF=r(lv);d(zr.$$.fragment,oF),oF.forEach(t),nF.forEach(t),IC=c(RE),rv=l(RE,"SPAN",{});var lF=r(rv);UC=n(lF,"ZeRO Inference"),lF.forEach(t),RE.forEach(t),j3=c(e),lc=l(e,"P",{});var rF=r(lc);GC=n(rF,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),rF.forEach(t),w3=c(e),fn=l(e,"P",{});var IE=r(fn);MC=n(IE,"Otherwise you just need to pass the usual "),rc=l(IE,"A",{href:!0});var pF=r(rc);LC=n(pF,"TrainingArguments"),pF.forEach(t),ZC=n(IE," arguments. For example:"),IE.forEach(t),y3=c(e),d(Dr.$$.fragment,e),g3=c(e),pc=l(e,"P",{});var iF=r(pc);NC=n(iF,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),iF.forEach(t),b3=c(e),dn=l(e,"P",{});var UE=r(dn);HC=n(UE,"Here is an example of running "),pv=l(UE,"CODE",{});var uF=r(pv);BC=n(uF,"run_translation.py"),uF.forEach(t),WC=n(UE," under DeepSpeed deploying all available GPUs:"),UE.forEach(t),q3=c(e),d(Or.$$.fragment,e),E3=c(e),ic=l(e,"P",{});var cF=r(ic);FC=n(cF,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),cF.forEach(t),$3=c(e),uc=l(e,"P",{});var hF=r(uc);VC=n(hF,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),hF.forEach(t),k3=c(e),nt=l(e,"H3",{class:!0});var GE=r(nt);mn=l(GE,"A",{id:!0,class:!0,href:!0});var fF=r(mn);iv=l(fF,"SPAN",{});var dF=r(iv);d(Ar.$$.fragment,dF),dF.forEach(t),fF.forEach(t),YC=c(GE),uv=l(GE,"SPAN",{});var mF=r(uv);KC=n(mF,"Memory Requirements"),mF.forEach(t),GE.forEach(t),P3=c(e),cc=l(e,"P",{});var _F=r(cc);JC=n(_F,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),_F.forEach(t),z3=c(e),hc=l(e,"P",{});var vF=r(hc);XC=n(vF,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),vF.forEach(t),D3=c(e),d(Tr.$$.fragment,e),O3=c(e),fc=l(e,"P",{});var jF=r(fc);QC=n(jF,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),jF.forEach(t),A3=c(e),dc=l(e,"P",{});var wF=r(dc);ex=n(wF,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),wF.forEach(t),T3=c(e),mc=l(e,"P",{});var yF=r(mc);sx=n(yF,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),yF.forEach(t),S3=c(e),_c=l(e,"P",{});var gF=r(_c);tx=n(gF,"For example, let\u2019s repeat the same for 2 GPUs:"),gF.forEach(t),C3=c(e),d(Sr.$$.fragment,e),x3=c(e),vc=l(e,"P",{});var bF=r(vc);ax=n(bF,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),bF.forEach(t),R3=c(e),_n=l(e,"P",{});var ME=r(_n);nx=n(ME,"For full information please see "),Cr=l(ME,"A",{href:!0,rel:!0});var qF=r(Cr);ox=n(qF,"memory estimators"),qF.forEach(t),lx=n(ME,"."),ME.forEach(t),I3=c(e),ot=l(e,"H3",{class:!0});var LE=r(ot);vn=l(LE,"A",{id:!0,class:!0,href:!0});var EF=r(vn);cv=l(EF,"SPAN",{});var $F=r(cv);d(xr.$$.fragment,$F),$F.forEach(t),EF.forEach(t),rx=c(LE),hv=l(LE,"SPAN",{});var kF=r(hv);px=n(kF,"Filing Issues"),kF.forEach(t),LE.forEach(t),U3=c(e),jc=l(e,"P",{});var PF=r(jc);ix=n(PF,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),PF.forEach(t),G3=c(e),wc=l(e,"P",{});var zF=r(wc);ux=n(zF,"In your report please always include:"),zF.forEach(t),M3=c(e),N=l(e,"OL",{});var Ee=r(N);fv=l(Ee,"LI",{});var DF=r(fv);dv=l(DF,"P",{});var OF=r(dv);cx=n(OF,"the full Deepspeed config file in the report"),OF.forEach(t),DF.forEach(t),hx=c(Ee),mv=l(Ee,"LI",{});var AF=r(mv);Oe=l(AF,"P",{});var Hn=r(Oe);fx=n(Hn,"either the command line arguments if you were using the "),yc=l(Hn,"A",{href:!0});var TF=r(yc);dx=n(TF,"Trainer"),TF.forEach(t),mx=n(Hn,` or
`),gc=l(Hn,"A",{href:!0});var SF=r(gc);_x=n(SF,"TrainingArguments"),SF.forEach(t),vx=n(Hn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),bc=l(Hn,"A",{href:!0});var CF=r(bc);jx=n(CF,"TrainingArguments"),CF.forEach(t),wx=n(Hn," as it has dozens of entries that are irrelevant."),Hn.forEach(t),AF.forEach(t),yx=c(Ee),Rr=l(Ee,"LI",{});var ZE=r(Rr);_v=l(ZE,"P",{});var xF=r(_v);gx=n(xF,"Output of:"),xF.forEach(t),bx=c(ZE),d(Ir.$$.fragment,ZE),ZE.forEach(t),qx=c(Ee),vv=l(Ee,"LI",{});var RF=r(vv);Ur=l(RF,"P",{});var NE=r(Ur);Ex=n(NE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Gr=l(NE,"A",{href:!0,rel:!0});var IF=r(Gr);$x=n(IF,"notebook"),IF.forEach(t),kx=n(NE,` as
a starting point.`),NE.forEach(t),RF.forEach(t),Px=c(Ee),jv=l(Ee,"LI",{});var UF=r(jv);wv=l(UF,"P",{});var GF=r(wv);zx=n(GF,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),GF.forEach(t),UF.forEach(t),Dx=c(Ee),yv=l(Ee,"LI",{});var MF=r(yv);Mr=l(MF,"P",{});var HE=r(Mr);Ox=n(HE,"If possible try to use one of the existing "),Lr=l(HE,"A",{href:!0,rel:!0});var LF=r(Lr);Ax=n(LF,"examples"),LF.forEach(t),Tx=n(HE," to reproduce the problem with."),HE.forEach(t),MF.forEach(t),Ee.forEach(t),L3=c(e),qc=l(e,"P",{});var ZF=r(qc);Sx=n(ZF,"Things to consider:"),ZF.forEach(t),Z3=c(e),jn=l(e,"UL",{});var BE=r(jn);lt=l(BE,"LI",{});var Ah=r(lt);gv=l(Ah,"P",{});var NF=r(gv);Cx=n(NF,"Deepspeed is often not the cause of the problem."),NF.forEach(t),xx=c(Ah),bv=l(Ah,"P",{});var HF=r(bv);Rx=n(HF,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),HF.forEach(t),Ix=c(Ah),qv=l(Ah,"P",{});var BF=r(qv);Ux=n(BF,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),BF.forEach(t),Ah.forEach(t),Gx=c(BE),Ev=l(BE,"LI",{});var WF=r(Ev);Zr=l(WF,"P",{});var WE=r(Zr);Mx=n(WE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Nr=l(WE,"A",{href:!0,rel:!0});var FF=r(Nr);Lx=n(FF,"Deepspeed"),FF.forEach(t),Zx=n(WE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),WE.forEach(t),WF.forEach(t),BE.forEach(t),N3=c(e),rt=l(e,"H3",{class:!0});var FE=r(rt);wn=l(FE,"A",{id:!0,class:!0,href:!0});var VF=r(wn);$v=l(VF,"SPAN",{});var YF=r($v);d(Hr.$$.fragment,YF),YF.forEach(t),VF.forEach(t),Nx=c(FE),kv=l(FE,"SPAN",{});var KF=r(kv);Hx=n(KF,"Troubleshooting"),KF.forEach(t),FE.forEach(t),H3=c(e),pt=l(e,"H4",{class:!0});var VE=r(pt);yn=l(VE,"A",{id:!0,class:!0,href:!0});var JF=r(yn);Pv=l(JF,"SPAN",{});var XF=r(Pv);d(Br.$$.fragment,XF),XF.forEach(t),JF.forEach(t),Bx=c(VE),Wr=l(VE,"SPAN",{});var YE=r(Wr);Wx=n(YE,"the "),zv=l(YE,"CODE",{});var QF=r(zv);Fx=n(QF,"deepspeed"),QF.forEach(t),Vx=n(YE," process gets killed at startup without a traceback"),YE.forEach(t),VE.forEach(t),B3=c(e),H=l(e,"P",{});var $e=r(H);Yx=n($e,"If the "),Dv=l($e,"CODE",{});var eV=r(Dv);Kx=n(eV,"deepspeed"),eV.forEach(t),Jx=n($e,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Ov=l($e,"CODE",{});var sV=r(Ov);Xx=n(sV,"offload_optimizer"),sV.forEach(t),Qx=n($e," or "),Av=l($e,"CODE",{});var tV=r(Av);eR=n(tV,"offload_param"),tV.forEach(t),sR=n($e,` or
both configured to offload to `),Tv=l($e,"CODE",{});var aV=r(Tv);tR=n(aV,"cpu"),aV.forEach(t),aR=n($e,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Fr=l($e,"A",{href:!0,rel:!0});var nV=r(Fr);nR=n(nV,"estimate how much memory is needed for a specific model"),nV.forEach(t),oR=n($e,"."),$e.forEach(t),W3=c(e),it=l(e,"H4",{class:!0});var KE=r(it);gn=l(KE,"A",{id:!0,class:!0,href:!0});var oV=r(gn);Sv=l(oV,"SPAN",{});var lV=r(Sv);d(Vr.$$.fragment,lV),lV.forEach(t),oV.forEach(t),lR=c(KE),Ec=l(KE,"SPAN",{});var wU=r(Ec);rR=n(wU,"training and/or eval/predict loss is "),Cv=l(wU,"CODE",{});var rV=r(Cv);pR=n(rV,"NaN"),rV.forEach(t),wU.forEach(t),KE.forEach(t),F3=c(e),$c=l(e,"P",{});var pV=r($c);iR=n(pV,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),pV.forEach(t),V3=c(e),kc=l(e,"P",{});var iV=r(kc);uR=n(iV,"The other problem may have to do with using fp16. When you configure this section:"),iV.forEach(t),Y3=c(e),d(Yr.$$.fragment,e),K3=c(e),bn=l(e,"P",{});var JE=r(bn);cR=n(JE,"and you see in your log that Deepspeed reports "),xv=l(JE,"CODE",{});var uV=r(xv);hR=n(uV,"OVERFLOW!"),uV.forEach(t),fR=n(JE," as follows:"),JE.forEach(t),J3=c(e),d(Kr.$$.fragment,e),X3=c(e),Pc=l(e,"P",{});var cV=r(Pc);dR=n(cV,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),cV.forEach(t),Q3=c(e),zc=l(e,"P",{});var hV=r(zc);mR=n(hV,"(the log was massaged to be more readable here.)"),hV.forEach(t),e0=c(e),ds=l(e,"P",{});var Th=r(ds);_R=n(Th,"In this case you usually need to raise the value of "),Rv=l(Th,"CODE",{});var fV=r(Rv);vR=n(fV,"initial_scale_power"),fV.forEach(t),jR=n(Th,". Setting it to "),Iv=l(Th,"CODE",{});var dV=r(Iv);wR=n(dV,'"initial_scale_power": 32'),dV.forEach(t),yR=n(Th," will typically resolve the problem."),Th.forEach(t),s0=c(e),ut=l(e,"H3",{class:!0});var XE=r(ut);qn=l(XE,"A",{id:!0,class:!0,href:!0});var mV=r(qn);Uv=l(mV,"SPAN",{});var _V=r(Uv);d(Jr.$$.fragment,_V),_V.forEach(t),mV.forEach(t),gR=c(XE),Gv=l(XE,"SPAN",{});var vV=r(Gv);bR=n(vV,"Notes"),vV.forEach(t),XE.forEach(t),t0=c(e),ms=l(e,"UL",{});var Sh=r(ms);ct=l(Sh,"LI",{});var Ch=r(ct);qR=n(Ch,"DeepSpeed works with the PyTorch "),Dc=l(Ch,"A",{href:!0});var jV=r(Dc);ER=n(jV,"Trainer"),jV.forEach(t),$R=n(Ch," but not TF "),Mv=l(Ch,"CODE",{});var wV=r(Mv);kR=n(wV,"TFTrainer"),wV.forEach(t),PR=n(Ch,"."),Ch.forEach(t),zR=c(Sh),Xr=l(Sh,"LI",{});var QE=r(Xr);DR=n(QE,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Qr=l(QE,"A",{href:!0,rel:!0});var yV=r(Qr);OR=n(yV,"source"),yV.forEach(t),AR=n(QE,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),QE.forEach(t),TR=c(Sh),ht=l(Sh,"LI",{});var xh=r(ht);SR=n(xh,"You don\u2019t have to use the "),Oc=l(xh,"A",{href:!0});var gV=r(Oc);CR=n(gV,"Trainer"),gV.forEach(t),xR=n(xh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ep=l(xh,"A",{href:!0,rel:!0});var bV=r(ep);RR=n(bV,"the DeepSpeed integration instructions"),bV.forEach(t),IR=n(xh,"."),xh.forEach(t),Sh.forEach(t),a0=c(e),ft=l(e,"H2",{class:!0});var e4=r(ft);En=l(e4,"A",{id:!0,class:!0,href:!0});var qV=r(En);Lv=l(qV,"SPAN",{});var EV=r(Lv);d(sp.$$.fragment,EV),EV.forEach(t),qV.forEach(t),UR=c(e4),Zv=l(e4,"SPAN",{});var $V=r(Zv);GR=n($V,"Non-Trainer Deepspeed Integration"),$V.forEach(t),e4.forEach(t),n0=c(e),fe=l(e,"P",{});var Bn=r(fe);MR=n(Bn,"The "),Ac=l(Bn,"A",{href:!0});var kV=r(Ac);LR=n(kV,"HfDeepSpeedConfig"),kV.forEach(t),ZR=n(Bn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Tc=l(Bn,"A",{href:!0});var PV=r(Tc);NR=n(PV,"Trainer"),PV.forEach(t),HR=n(Bn," is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),Nv=l(Bn,"CODE",{});var zV=r(Nv);BR=n(zV,"from_pretrained"),zV.forEach(t),WR=n(Bn," call. Everything else you have to do by yourself."),Bn.forEach(t),o0=c(e),$n=l(e,"P",{});var s4=r($n);FR=n(s4,"When using "),Sc=l(s4,"A",{href:!0});var DV=r(Sc);VR=n(DV,"Trainer"),DV.forEach(t),YR=n(s4," everything is automatically taken care of."),s4.forEach(t),l0=c(e),_s=l(e,"P",{});var Rh=r(_s);KR=n(Rh,"When not using "),Cc=l(Rh,"A",{href:!0});var OV=r(Cc);JR=n(OV,"Trainer"),OV.forEach(t),XR=n(Rh,`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),xc=l(Rh,"A",{href:!0});var AV=r(xc);QR=n(AV,"HfDeepSpeedConfig"),AV.forEach(t),eI=n(Rh," object before instantiating the model and keep that object alive."),Rh.forEach(t),r0=c(e),kn=l(e,"P",{});var t4=r(kn);sI=n(t4,"If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),Hv=l(t4,"CODE",{});var TV=r(Hv);tI=n(TV,"HfDeepSpeedConfig"),TV.forEach(t),aI=n(t4," at all."),t4.forEach(t),p0=c(e),Rc=l(e,"P",{});var SV=r(Rc);nI=n(SV,"For example for a pretrained model:"),SV.forEach(t),i0=c(e),d(tp.$$.fragment,e),u0=c(e),Ic=l(e,"P",{});var CV=r(Ic);oI=n(CV,"or for non-pretrained model:"),CV.forEach(t),c0=c(e),d(ap.$$.fragment,e),h0=c(e),de=l(e,"P",{});var Wn=r(de);lI=n(Wn,"Please note that if you\u2019re not using the "),Uc=l(Wn,"A",{href:!0});var xV=r(Uc);rI=n(xV,"Trainer"),xV.forEach(t),pI=n(Wn," integration, you\u2019re completely on your own. Basically follow the documentation on the "),np=l(Wn,"A",{href:!0,rel:!0});var RV=r(np);iI=n(RV,"Deepspeed"),RV.forEach(t),uI=n(Wn," website. Also you have to configure explicitly the config file - you can\u2019t use "),Bv=l(Wn,"CODE",{});var IV=r(Bv);cI=n(IV,'"auto"'),IV.forEach(t),hI=n(Wn," values and you will have to put real values instead."),Wn.forEach(t),f0=c(e),dt=l(e,"H2",{class:!0});var a4=r(dt);Pn=l(a4,"A",{id:!0,class:!0,href:!0});var UV=r(Pn);Wv=l(UV,"SPAN",{});var GV=r(Wv);d(op.$$.fragment,GV),GV.forEach(t),UV.forEach(t),fI=c(a4),Fv=l(a4,"SPAN",{});var MV=r(Fv);dI=n(MV,"HfDeepSpeedConfig"),MV.forEach(t),a4.forEach(t),d0=c(e),ee=l(e,"DIV",{class:!0});var Fn=r(ee);d(lp.$$.fragment,Fn),mI=c(Fn),Vv=l(Fn,"P",{});var LV=r(Vv);_I=n(LV,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),LV.forEach(t),vI=c(Fn),Ae=l(Fn,"P",{});var Vn=r(Ae);jI=n(Vn,"A "),Yv=l(Vn,"CODE",{});var ZV=r(Yv);wI=n(ZV,"weakref"),ZV.forEach(t),yI=n(Vn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Kv=l(Vn,"CODE",{});var NV=r(Kv);gI=n(NV,"from_pretrained"),NV.forEach(t),bI=n(Vn," and "),Jv=l(Vn,"CODE",{});var HV=r(Jv);qI=n(HV,"_get_resized_embeddings"),HV.forEach(t),EI=n(Vn,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),Vn.forEach(t),$I=c(Fn),me=l(Fn,"P",{});var vt=r(me);Gc=l(vt,"A",{href:!0});var BV=r(Gc);kI=n(BV,"Trainer"),BV.forEach(t),PI=n(vt," uses the "),Xv=l(vt,"CODE",{});var WV=r(Xv);zI=n(WV,"HfTrainerDeepSpeedConfig"),WV.forEach(t),DI=n(vt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Mc=l(vt,"A",{href:!0});var FV=r(Mc);OI=n(FV,"TrainingArguments"),FV.forEach(t),AI=n(vt," by replacing special placeholder values: "),Qv=l(vt,"CODE",{});var VV=r(Qv);TI=n(VV,'"auto"'),VV.forEach(t),SI=n(vt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),vt.forEach(t),Fn.forEach(t),m0=c(e),mt=l(e,"H3",{class:!0});var n4=r(mt);zn=l(n4,"A",{id:!0,class:!0,href:!0});var YV=r(zn);ej=l(YV,"SPAN",{});var KV=r(ej);d(rp.$$.fragment,KV),KV.forEach(t),YV.forEach(t),CI=c(n4),sj=l(n4,"SPAN",{});var JV=r(sj);xI=n(JV,"Custom DeepSpeed ZeRO Inference"),JV.forEach(t),n4.forEach(t),_0=c(e),Dn=l(e,"P",{});var o4=r(Dn);RI=n(o4,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Lc=l(o4,"A",{href:!0});var XV=r(Lc);II=n(XV,"Trainer"),XV.forEach(t),UI=n(o4," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),o4.forEach(t),v0=c(e),Zc=l(e,"P",{});var QV=r(Zc);GI=n(QV,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),QV.forEach(t),j0=c(e),Nc=l(e,"P",{});var eY=r(Nc);MI=n(eY,"The example has copious notes and is self-documenting."),eY.forEach(t),w0=c(e),Hc=l(e,"P",{});var sY=r(Hc);LI=n(sY,"Make sure to:"),sY.forEach(t),y0=c(e),On=l(e,"OL",{});var l4=r(On);tj=l(l4,"LI",{});var tY=r(tj);ZI=n(tY,"disable CPU offload if you have enough GPU memory (since it slows things down)"),tY.forEach(t),NI=c(l4),aj=l(l4,"LI",{});var aY=r(aj);HI=n(aY,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),aY.forEach(t),l4.forEach(t),g0=c(e),d(pp.$$.fragment,e),b0=c(e),An=l(e,"P",{});var r4=r(An);BI=n(r4,"Let\u2019s save it as "),nj=l(r4,"CODE",{});var nY=r(nj);WI=n(nY,"t0.py"),nY.forEach(t),FI=n(r4," and run it:"),r4.forEach(t),q0=c(e),d(ip.$$.fragment,e),E0=c(e),Bc=l(e,"P",{});var oY=r(Bc);VI=n(oY,"This was a very basic example and you will want to adapt it to your needs."),oY.forEach(t),$0=c(e),_t=l(e,"H2",{class:!0});var p4=r(_t);Tn=l(p4,"A",{id:!0,class:!0,href:!0});var lY=r(Tn);oj=l(lY,"SPAN",{});var rY=r(oj);d(up.$$.fragment,rY),rY.forEach(t),lY.forEach(t),YI=c(p4),lj=l(p4,"SPAN",{});var pY=r(lj);KI=n(pY,"Main DeepSpeed Resources"),pY.forEach(t),p4.forEach(t),k0=c(e),_e=l(e,"UL",{});var Yn=r(_e);rj=l(Yn,"LI",{});var iY=r(rj);cp=l(iY,"A",{href:!0,rel:!0});var uY=r(cp);JI=n(uY,"Project\u2019s github"),uY.forEach(t),iY.forEach(t),XI=c(Yn),pj=l(Yn,"LI",{});var cY=r(pj);hp=l(cY,"A",{href:!0,rel:!0});var hY=r(hp);QI=n(hY,"Usage docs"),hY.forEach(t),cY.forEach(t),eU=c(Yn),ij=l(Yn,"LI",{});var fY=r(ij);fp=l(fY,"A",{href:!0,rel:!0});var dY=r(fp);sU=n(dY,"API docs"),dY.forEach(t),fY.forEach(t),tU=c(Yn),uj=l(Yn,"LI",{});var mY=r(uj);dp=l(mY,"A",{href:!0,rel:!0});var _Y=r(dp);aU=n(_Y,"Blog posts"),_Y.forEach(t),mY.forEach(t),Yn.forEach(t),P0=c(e),Wc=l(e,"P",{});var vY=r(Wc);nU=n(vY,"Papers:"),vY.forEach(t),z0=c(e),vs=l(e,"UL",{});var Ih=r(vs);cj=l(Ih,"LI",{});var jY=r(cj);mp=l(jY,"A",{href:!0,rel:!0});var wY=r(mp);oU=n(wY,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),wY.forEach(t),jY.forEach(t),lU=c(Ih),hj=l(Ih,"LI",{});var yY=r(hj);_p=l(yY,"A",{href:!0,rel:!0});var gY=r(_p);rU=n(gY,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),gY.forEach(t),yY.forEach(t),pU=c(Ih),fj=l(Ih,"LI",{});var bY=r(fj);vp=l(bY,"A",{href:!0,rel:!0});var qY=r(vp);iU=n(qY,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),qY.forEach(t),bY.forEach(t),Ih.forEach(t),D0=c(e),js=l(e,"P",{});var Uh=r(js);uU=n(Uh,"Finally, please, remember that, HuggingFace "),Fc=l(Uh,"A",{href:!0});var EY=r(Fc);cU=n(EY,"Trainer"),EY.forEach(t),hU=n(Uh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),jp=l(Uh,"A",{href:!0,rel:!0});var $Y=r(jp);fU=n($Y,"DeepSpeed GitHub"),$Y.forEach(t),dU=n(Uh,"."),Uh.forEach(t),this.h()},h(){h(g,"name","hf:doc:metadata"),h(g,"content",JSON.stringify(RY)),h(k,"id","deepspeed-integration"),h(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(k,"href","#deepspeed-integration"),h(b,"class","relative group"),h(q,"href","https://github.com/microsoft/DeepSpeed"),h(q,"rel","nofollow"),h(W,"href","https://arxiv.org/abs/1910.02054"),h(W,"rel","nofollow"),h(Kn,"href","https://arxiv.org/abs/2101.06840"),h(Kn,"rel","nofollow"),h(Jn,"href","https://arxiv.org/abs/2104.07857"),h(Jn,"rel","nofollow"),h(Xn,"href","https://github.com/microsoft/DeepSpeed"),h(Xn,"rel","nofollow"),h(zp,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Dp,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Op,"href","#nontrainer-deepspeed-integration"),h(Rp,"href","#deepspeed-zero-inference"),h(Up,"id","deepspeed-trainer-integration"),h(gt,"id","trainer-deepspeed-integration"),h(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gt,"href","#trainer-deepspeed-integration"),h(qs,"class","relative group"),h(Gp,"id","deepspeed-installation"),h(bt,"id","installation"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#installation"),h(Es,"class","relative group"),h(oo,"href","https://github.com/microsoft/deepspeed#installation"),h(oo,"rel","nofollow"),h(lo,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(lo,"rel","nofollow"),h(Lp,"href","#zero-install-notes"),h(uo,"href","https://developer.nvidia.com/cuda-gpus"),h(uo,"rel","nofollow"),h(mo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(mo,"rel","nofollow"),h(Vp,"id","deepspeed-multi-gpu"),h(Dt,"id","deployment-with-multiple-gpus"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-with-multiple-gpus"),h($s,"class","relative group"),h(Yp,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(vo,"href","https://www.deepspeed.ai/docs/config-json/"),h(vo,"rel","nofollow"),h(yo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(yo,"rel","nofollow"),h(bo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(bo,"rel","nofollow"),h(Xp,"id","deepspeed-one-gpu"),h(xt,"id","deployment-with-one-gpu"),h(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xt,"href","#deployment-with-one-gpu"),h(Ps,"class","relative group"),h(Qp,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h($o,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h($o,"rel","nofollow"),h(Po,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(Po,"rel","nofollow"),h(li,"id","deepspeed-notebook"),h(Gt,"id","deployment-in-notebooks"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#deployment-in-notebooks"),h(Ds,"class","relative group"),h(ci,"id","deepspeed-config"),h(Ht,"id","configuration"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#configuration"),h(Os,"class","relative group"),h(Ro,"href","https://www.deepspeed.ai/docs/config-json/"),h(Ro,"rel","nofollow"),h(Io,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Io,"rel","nofollow"),h(Mo,"href","https://github.com/microsoft/DeepSpeed"),h(Mo,"rel","nofollow"),h(fi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(di,"id","deepspeed-config-passing"),h(Kt,"id","passing-configuration"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#passing-configuration"),h(As,"class","relative group"),h(mi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(_i,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(vi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(yi,"id","deepspeed-config-shared"),h(Jt,"id","shared-configuration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#shared-configuration"),h(Ts,"class","relative group"),h(gi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(bi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(qi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Ei,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(ki,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Pi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(zi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Di,"id","deepspeed-zero"),h(ta,"id","zero"),h(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ta,"href","#zero"),h(Ss,"class","relative group"),h(Yo,"href","https://www.deepspeed.ai/tutorials/zero/"),h(Yo,"rel","nofollow"),h(Ko,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Ko,"rel","nofollow"),h(Oi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Ti,"id","deepspeed-zero2-config"),h(na,"id","zero2-config"),h(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(na,"href","#zero2-config"),h(Cs,"class","relative group"),h(Ri,"id","deepspeed-zero3-config"),h(oa,"id","zero3-config"),h(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oa,"href","#zero3-config"),h(Rs,"class","relative group"),h(Mi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Zi,"id","deepspeed-nvme"),h(pa,"id","nvme-support"),h(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pa,"href","#nvme-support"),h(Is,"class","relative group"),h(fl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(fl,"rel","nofollow"),h(dl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(dl,"rel","nofollow"),h(ml,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(ml,"rel","nofollow"),h(Bi,"id","deepspeed-zero2-zero3-performance"),h(ca,"id","zero2-vs-zero3-performance"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#zero2-vs-zero3-performance"),h(Us,"class","relative group"),h(Vi,"id","deepspeed-zero2-example"),h(fa,"id","zero2-example"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#zero2-example"),h(Ms,"class","relative group"),h(Yi,"id","deepspeed-zero3-example"),h(_a,"id","zero3-example"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#zero3-example"),h(Ls,"class","relative group"),h(wa,"id","optimizer-and-scheduler"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#optimizer-and-scheduler"),h(Zs,"class","relative group"),h(Ji,"id","deepspeed-optimizer"),h(ba,"id","optimizer"),h(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ba,"href","#optimizer"),h(Ns,"class","relative group"),h(kl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(kl,"rel","nofollow"),h(Xi,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(tu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(nu,"id","deepspeed-scheduler"),h(Ea,"id","scheduler"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#scheduler"),h(Hs,"class","relative group"),h(xl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(xl,"rel","nofollow"),h(lu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(ru,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(iu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(uu,"id","deepspeed-fp32"),h(Oa,"id","fp32-precision"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#fp32-precision"),h(Bs,"class","relative group"),h(Zl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Zl,"rel","nofollow"),h(hu,"id","deepspeed-amp"),h(Sa,"id","automatic-mixed-precision"),h(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sa,"href","#automatic-mixed-precision"),h(Ws,"class","relative group"),h(Ca,"id","fp16"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#fp16"),h(Fs,"class","relative group"),h(mu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(vu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Fl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Fl,"rel","nofollow"),h(Ia,"id","bf16"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#bf16"),h(Vs,"class","relative group"),h(Ga,"id","apex"),h(Ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ga,"href","#apex"),h(Ys,"class","relative group"),h(bu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Eu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(er,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(er,"rel","nofollow"),h($u,"id","deepspeed-bs"),h(Na,"id","batch-size"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#batch-size"),h(Ks,"class","relative group"),h(Pu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Du,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Ou,"id","deepspeed-grad-acc"),h(Ba,"id","gradient-accumulation"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#gradient-accumulation"),h(Js,"class","relative group"),h(Tu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Cu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(xu,"id","deepspeed-grad-clip"),h(Fa,"id","gradient-clipping"),h(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fa,"href","#gradient-clipping"),h(Xs,"class","relative group"),h(Iu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Gu,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Mu,"id","deepspeed-weight-extraction"),h(Ya,"id","getting-the-model-weights-out"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#getting-the-model-weights-out"),h(Qs,"class","relative group"),h(hr,"href","https://huggingface.co/models"),h(hr,"rel","nofollow"),h(nn,"id","zero3-and-infinity-nuances"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#zero3-and-infinity-nuances"),h(et,"class","relative group"),h(on,"id","constructing-massive-models"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#constructing-massive-models"),h(st,"class","relative group"),h(ec,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(sc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(qr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(qr,"rel","nofollow"),h(ac,"href","#from_pretrained-torch-dtype"),h(un,"id","gathering-parameters"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#gathering-parameters"),h(tt,"class","relative group"),h(kr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(kr,"rel","nofollow"),h(oc,"id","deepspeed-zero-inference"),h(hn,"id","zero-inference"),h(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(hn,"href","#zero-inference"),h(at,"class","relative group"),h(rc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(mn,"id","memory-requirements"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#memory-requirements"),h(nt,"class","relative group"),h(Cr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Cr,"rel","nofollow"),h(vn,"id","filing-issues"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#filing-issues"),h(ot,"class","relative group"),h(yc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(gc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(bc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Gr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Gr,"rel","nofollow"),h(Lr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch"),h(Lr,"rel","nofollow"),h(Nr,"href","https://github.com/microsoft/DeepSpeed/"),h(Nr,"rel","nofollow"),h(wn,"id","troubleshooting"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#troubleshooting"),h(rt,"class","relative group"),h(yn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(pt,"class","relative group"),h(Fr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Fr,"rel","nofollow"),h(gn,"id","training-andor-evalpredict-loss-is-nan"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#training-andor-evalpredict-loss-is-nan"),h(it,"class","relative group"),h(qn,"id","notes"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#notes"),h(ut,"class","relative group"),h(Dc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Qr,"href","https://github.com/microsoft/deepspeed#installation"),h(Qr,"rel","nofollow"),h(Oc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(ep,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(ep,"rel","nofollow"),h(En,"id","nontrainer-deepspeed-integration"),h(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(En,"href","#nontrainer-deepspeed-integration"),h(ft,"class","relative group"),h(Ac,"href","/docs/transformers/v4.22.0/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Tc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Sc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Cc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(xc,"href","/docs/transformers/v4.22.0/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Uc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(np,"href","https://www.deepspeed.ai/"),h(np,"rel","nofollow"),h(Pn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(dt,"class","relative group"),h(Gc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Mc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.TrainingArguments"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"id","custom-deepspeed-zero-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#custom-deepspeed-zero-inference"),h(mt,"class","relative group"),h(Lc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(Tn,"id","main-deepspeed-resources"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#main-deepspeed-resources"),h(_t,"class","relative group"),h(cp,"href","https://github.com/microsoft/deepspeed"),h(cp,"rel","nofollow"),h(hp,"href","https://www.deepspeed.ai/getting-started/"),h(hp,"rel","nofollow"),h(fp,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(fp,"rel","nofollow"),h(dp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(dp,"rel","nofollow"),h(mp,"href","https://arxiv.org/abs/1910.02054"),h(mp,"rel","nofollow"),h(_p,"href","https://arxiv.org/abs/2101.06840"),h(_p,"rel","nofollow"),h(vp,"href","https://arxiv.org/abs/2104.07857"),h(vp,"rel","nofollow"),h(Fc,"href","/docs/transformers/v4.22.0/en/main_classes/trainer#transformers.Trainer"),h(jp,"href","https://github.com/microsoft/DeepSpeed/issues"),h(jp,"rel","nofollow")},m(e,p){s(document.head,g),i(e,S,p),i(e,b,p),s(b,k),s(k,X),m(z,X,null),s(b,C),s(b,Q),s(Q,x),i(e,te,p),i(e,T,p),s(T,q),s(q,E),s(T,gs),s(T,W),s(W,bs),s(T,i4),i(e,wj,p),i(e,R,p),s(R,Gh),s(Gh,u4),s(R,c4),s(R,Mh),s(Mh,h4),s(R,f4),s(R,Lh),s(Lh,d4),s(R,m4),s(R,Zh),s(Zh,_4),s(R,v4),s(R,Nh),s(Nh,j4),s(R,w4),s(R,Hh),s(Hh,y4),i(e,yj,p),i(e,Te,p),s(Te,g4),s(Te,Kn),s(Kn,b4),s(Te,q4),s(Te,Jn),s(Jn,E4),s(Te,$4),i(e,gj,p),i(e,kp,p),s(kp,k4),i(e,bj,p),i(e,Pp,p),s(Pp,P4),i(e,qj,p),i(e,wt,p),s(wt,z4),s(wt,Xn),s(Xn,D4),s(wt,O4),i(e,Ej,p),i(e,yt,p),s(yt,Qn),s(Qn,A4),s(Qn,zp),s(zp,T4),s(Qn,S4),s(yt,C4),s(yt,F),s(F,x4),s(F,Dp),s(Dp,R4),s(F,I4),s(F,Bh),s(Bh,U4),s(F,G4),s(F,Wh),s(Wh,M4),s(F,L4),s(F,Fh),s(Fh,Z4),s(F,N4),s(F,Op),s(Op,H4),s(F,B4),i(e,$j,p),i(e,Ap,p),s(Ap,W4),i(e,kj,p),i(e,Tp,p),s(Tp,F4),i(e,Pj,p),i(e,Sp,p),s(Sp,Vh),s(Vh,V4),i(e,zj,p),i(e,Cp,p),s(Cp,Y4),i(e,Dj,p),i(e,xp,p),s(xp,eo),s(eo,K4),s(eo,Rp),s(Rp,J4),s(eo,X4),i(e,Oj,p),i(e,Ip,p),s(Ip,Q4),i(e,Aj,p),i(e,Up,p),i(e,Tj,p),i(e,qs,p),s(qs,gt),s(gt,Yh),m(so,Yh,null),s(qs,e6),s(qs,Kh),s(Kh,s6),i(e,Sj,p),i(e,Gp,p),i(e,Cj,p),i(e,Es,p),s(Es,bt),s(bt,Jh),m(to,Jh,null),s(Es,t6),s(Es,Xh),s(Xh,a6),i(e,xj,p),i(e,Mp,p),s(Mp,n6),i(e,Rj,p),m(ao,e,p),i(e,Ij,p),i(e,Se,p),s(Se,o6),s(Se,Qh),s(Qh,l6),s(Se,r6),s(Se,ef),s(ef,p6),s(Se,i6),i(e,Uj,p),m(no,e,p),i(e,Gj,p),i(e,Ce,p),s(Ce,u6),s(Ce,oo),s(oo,c6),s(Ce,h6),s(Ce,lo),s(lo,f6),s(Ce,d6),i(e,Mj,p),i(e,qt,p),s(qt,m6),s(qt,Lp),s(Lp,_6),s(qt,v6),i(e,Lj,p),i(e,Zp,p),s(Zp,j6),i(e,Zj,p),i(e,Np,p),s(Np,w6),i(e,Nj,p),m(ro,e,p),i(e,Hj,p),i(e,xe,p),s(xe,y6),s(xe,sf),s(sf,g6),s(xe,b6),s(xe,tf),s(tf,q6),s(xe,E6),i(e,Bj,p),i(e,Et,p),s(Et,$6),s(Et,af),s(af,k6),s(Et,P6),i(e,Wj,p),m(po,e,p),i(e,Fj,p),i(e,ke,p),s(ke,z6),s(ke,nf),s(nf,D6),s(ke,O6),s(ke,of),s(of,A6),s(ke,T6),s(ke,lf),s(lf,S6),i(e,Vj,p),i(e,Hp,p),s(Hp,C6),i(e,Yj,p),m(io,e,p),i(e,Kj,p),i(e,Re,p),s(Re,x6),s(Re,rf),s(rf,R6),s(Re,I6),s(Re,pf),s(pf,U6),s(Re,G6),i(e,Jj,p),i(e,$t,p),s($t,M6),s($t,uf),s(uf,L6),s($t,Z6),i(e,Xj,p),i(e,Ie,p),s(Ie,N6),s(Ie,cf),s(cf,H6),s(Ie,B6),s(Ie,uo),s(uo,W6),s(Ie,F6),i(e,Qj,p),i(e,Bp,p),s(Bp,V6),i(e,ew,p),m(co,e,p),i(e,sw,p),i(e,Wp,p),s(Wp,Y6),i(e,tw,p),m(ho,e,p),i(e,aw,p),i(e,Fp,p),s(Fp,K6),i(e,nw,p),m(fo,e,p),i(e,ow,p),i(e,kt,p),s(kt,J6),s(kt,hf),s(hf,X6),s(kt,Q6),i(e,lw,p),i(e,Pt,p),s(Pt,e$),s(Pt,ff),s(ff,s$),s(Pt,t$),i(e,rw,p),i(e,zt,p),s(zt,a$),s(zt,mo),s(mo,n$),s(zt,o$),i(e,pw,p),i(e,Vp,p),i(e,iw,p),i(e,$s,p),s($s,Dt),s(Dt,df),m(_o,df,null),s($s,l$),s($s,mf),s(mf,r$),i(e,uw,p),i(e,Ot,p),s(Ot,p$),s(Ot,Yp),s(Yp,i$),s(Ot,u$),i(e,cw,p),i(e,At,p),s(At,ks),s(ks,c$),s(ks,_f),s(_f,h$),s(ks,f$),s(ks,vf),s(vf,d$),s(ks,m$),s(At,_$),s(At,Pe),s(Pe,v$),s(Pe,jf),s(jf,j$),s(Pe,w$),s(Pe,wf),s(wf,y$),s(Pe,g$),s(Pe,vo),s(vo,b$),s(Pe,q$),i(e,hw,p),i(e,Kp,p),s(Kp,E$),i(e,fw,p),m(jo,e,p),i(e,dw,p),i(e,Jp,p),s(Jp,$$),i(e,mw,p),m(wo,e,p),i(e,_w,p),i(e,I,p),s(I,k$),s(I,yf),s(yf,P$),s(I,z$),s(I,gf),s(gf,D$),s(I,O$),s(I,bf),s(bf,A$),s(I,T$),s(I,qf),s(qf,S$),s(I,C$),s(I,yo),s(yo,x$),s(I,R$),i(e,vw,p),i(e,ae,p),s(ae,I$),s(ae,Ef),s(Ef,U$),s(ae,G$),s(ae,$f),s($f,M$),s(ae,L$),s(ae,kf),s(kf,Z$),s(ae,N$),i(e,jw,p),i(e,Tt,p),s(Tt,H$),s(Tt,Pf),s(Pf,B$),s(Tt,W$),i(e,ww,p),m(go,e,p),i(e,yw,p),i(e,St,p),s(St,F$),s(St,zf),s(zf,V$),s(St,Y$),i(e,gw,p),i(e,Ct,p),s(Ct,K$),s(Ct,bo),s(bo,J$),s(Ct,X$),i(e,bw,p),i(e,Xp,p),i(e,qw,p),i(e,Ps,p),s(Ps,xt),s(xt,Df),m(qo,Df,null),s(Ps,Q$),s(Ps,Of),s(Of,e5),i(e,Ew,p),i(e,Rt,p),s(Rt,s5),s(Rt,Qp),s(Qp,t5),s(Rt,a5),i(e,$w,p),m(Eo,e,p),i(e,kw,p),i(e,Ue,p),s(Ue,n5),s(Ue,Af),s(Af,o5),s(Ue,l5),s(Ue,$o),s($o,r5),s(Ue,p5),i(e,Pw,p),i(e,ei,p),s(ei,i5),i(e,zw,p),i(e,It,p),s(It,Tf),s(Tf,u5),s(It,c5),s(It,Sf),s(Sf,h5),i(e,Dw,p),i(e,si,p),s(si,f5),i(e,Ow,p),m(ko,e,p),i(e,Aw,p),i(e,ti,p),s(ti,d5),i(e,Tw,p),i(e,Ut,p),s(Ut,m5),s(Ut,Po),s(Po,_5),s(Ut,v5),i(e,Sw,p),i(e,ai,p),s(ai,j5),i(e,Cw,p),i(e,ni,p),s(ni,w5),i(e,xw,p),i(e,oi,p),s(oi,zs),s(zs,zo),s(zo,y5),s(zo,Cf),s(Cf,g5),s(zo,b5),s(zs,q5),m(Do,zs,null),s(zs,E5),s(zs,xf),s(xf,$5),i(e,Rw,p),i(e,li,p),i(e,Iw,p),i(e,Ds,p),s(Ds,Gt),s(Gt,Rf),m(Oo,Rf,null),s(Ds,k5),s(Ds,If),s(If,P5),i(e,Uw,p),i(e,Mt,p),s(Mt,z5),s(Mt,Uf),s(Uf,D5),s(Mt,O5),i(e,Gw,p),i(e,ri,p),s(ri,A5),i(e,Mw,p),m(Ao,e,p),i(e,Lw,p),i(e,Lt,p),s(Lt,T5),s(Lt,Gf),s(Gf,S5),s(Lt,C5),i(e,Zw,p),i(e,pi,p),s(pi,x5),i(e,Nw,p),i(e,ii,p),s(ii,R5),i(e,Hw,p),m(To,e,p),i(e,Bw,p),i(e,Ge,p),s(Ge,I5),s(Ge,Mf),s(Mf,U5),s(Ge,G5),s(Ge,Lf),s(Lf,M5),s(Ge,L5),i(e,Ww,p),m(So,e,p),i(e,Fw,p),i(e,Zt,p),s(Zt,Z5),s(Zt,Zf),s(Zf,N5),s(Zt,H5),i(e,Vw,p),m(Co,e,p),i(e,Yw,p),i(e,ui,p),s(ui,B5),i(e,Kw,p),i(e,Nt,p),s(Nt,W5),s(Nt,Nf),s(Nf,F5),s(Nt,V5),i(e,Jw,p),i(e,ci,p),i(e,Xw,p),i(e,Os,p),s(Os,Ht),s(Ht,Hf),m(xo,Hf,null),s(Os,Y5),s(Os,Bf),s(Bf,K5),i(e,Qw,p),i(e,Bt,p),s(Bt,J5),s(Bt,Ro),s(Ro,X5),s(Bt,Q5),i(e,ey,p),i(e,Wt,p),s(Wt,e8),s(Wt,Io),s(Io,s8),s(Wt,t8),i(e,sy,p),m(Uo,e,p),i(e,ty,p),i(e,Ft,p),s(Ft,a8),s(Ft,Wf),s(Wf,n8),s(Ft,o8),i(e,ay,p),m(Go,e,p),i(e,ny,p),i(e,Vt,p),s(Vt,l8),s(Vt,Mo),s(Mo,r8),s(Vt,p8),i(e,oy,p),i(e,hi,p),s(hi,i8),i(e,ly,p),i(e,ne,p),s(ne,u8),s(ne,Ff),s(Ff,c8),s(ne,h8),s(ne,Vf),s(Vf,f8),s(ne,d8),s(ne,Yf),s(Yf,m8),s(ne,_8),i(e,ry,p),m(Lo,e,p),i(e,py,p),i(e,Yt,p),s(Yt,v8),s(Yt,fi),s(fi,j8),s(Yt,w8),i(e,iy,p),i(e,di,p),i(e,uy,p),i(e,As,p),s(As,Kt),s(Kt,Kf),m(Zo,Kf,null),s(As,y8),s(As,Jf),s(Jf,g8),i(e,cy,p),i(e,U,p),s(U,b8),s(U,mi),s(mi,q8),s(U,E8),s(U,_i),s(_i,$8),s(U,k8),s(U,Xf),s(Xf,P8),s(U,z8),s(U,Qf),s(Qf,D8),s(U,O8),s(U,vi),s(vi,A8),s(U,T8),i(e,hy,p),i(e,ji,p),s(ji,S8),i(e,fy,p),m(No,e,p),i(e,dy,p),i(e,wi,p),s(wi,C8),i(e,my,p),m(Ho,e,p),i(e,_y,p),i(e,yi,p),i(e,vy,p),i(e,Ts,p),s(Ts,Jt),s(Jt,ed),m(Bo,ed,null),s(Ts,x8),s(Ts,sd),s(sd,R8),i(e,jy,p),m(Xt,e,p),i(e,wy,p),i(e,Me,p),s(Me,I8),s(Me,gi),s(gi,U8),s(Me,G8),s(Me,bi),s(bi,M8),s(Me,L8),i(e,yy,p),i(e,Qt,p),s(Qt,Z8),s(Qt,qi),s(qi,N8),s(Qt,H8),i(e,gy,p),i(e,Le,p),s(Le,B8),s(Le,td),s(td,W8),s(Le,F8),s(Le,Ei),s(Ei,V8),s(Le,Y8),i(e,by,p),i(e,$i,p),s($i,K8),i(e,qy,p),i(e,ea,p),s(ea,J8),s(ea,ki),s(ki,X8),s(ea,Q8),i(e,Ey,p),i(e,sa,p),s(sa,ad),s(ad,ek),s(sa,sk),s(sa,Wo),s(Wo,tk),s(Wo,Pi),s(Pi,ak),s(Wo,nk),i(e,$y,p),i(e,oe,p),s(oe,ok),s(oe,nd),s(nd,lk),s(oe,rk),s(oe,zi),s(zi,pk),s(oe,ik),s(oe,od),s(od,uk),s(oe,ck),i(e,ky,p),i(e,Di,p),i(e,Py,p),i(e,Ss,p),s(Ss,ta),s(ta,ld),m(Fo,ld,null),s(Ss,hk),s(Ss,rd),s(rd,fk),i(e,zy,p),i(e,Vo,p),s(Vo,Yo),s(Yo,dk),s(Vo,mk),i(e,Dy,p),i(e,Ze,p),s(Ze,_k),s(Ze,pd),s(pd,vk),s(Ze,jk),s(Ze,Ko),s(Ko,wk),s(Ze,yk),i(e,Oy,p),i(e,aa,p),s(aa,gk),s(aa,Oi),s(Oi,bk),s(aa,qk),i(e,Ay,p),i(e,Ai,p),s(Ai,Ek),i(e,Ty,p),i(e,Ti,p),i(e,Sy,p),i(e,Cs,p),s(Cs,na),s(na,id),m(Jo,id,null),s(Cs,$k),s(Cs,ud),s(ud,kk),i(e,Cy,p),i(e,Si,p),s(Si,Pk),i(e,xy,p),m(Xo,e,p),i(e,Ry,p),i(e,Ci,p),s(Ci,cd),s(cd,zk),i(e,Iy,p),i(e,Ne,p),s(Ne,xs),s(xs,Dk),s(xs,hd),s(hd,Ok),s(xs,Ak),s(xs,fd),s(fd,Tk),s(xs,Sk),s(Ne,Ck),s(Ne,G),s(G,dd),s(dd,xk),s(G,Rk),s(G,md),s(md,Ik),s(G,Uk),s(G,_d),s(_d,Gk),s(G,Mk),s(G,vd),s(vd,Lk),s(G,Zk),s(G,jd),s(jd,Nk),s(G,Hk),s(G,wd),s(wd,Bk),s(G,Wk),s(Ne,Fk),s(Ne,yd),s(yd,Vk),i(e,Uy,p),i(e,He,p),s(He,Yk),s(He,gd),s(gd,Kk),s(He,Jk),s(He,bd),s(bd,Xk),s(He,Qk),i(e,Gy,p),m(Qo,e,p),i(e,My,p),i(e,xi,p),s(xi,e7),i(e,Ly,p),i(e,Ri,p),i(e,Zy,p),i(e,Rs,p),s(Rs,oa),s(oa,qd),m(el,qd,null),s(Rs,s7),s(Rs,Ed),s(Ed,t7),i(e,Ny,p),i(e,Ii,p),s(Ii,a7),i(e,Hy,p),m(sl,e,p),i(e,By,p),i(e,V,p),s(V,n7),s(V,$d),s($d,o7),s(V,l7),s(V,kd),s(kd,r7),s(V,p7),s(V,Pd),s(Pd,i7),s(V,u7),s(V,zd),s(zd,c7),s(V,h7),i(e,Wy,p),i(e,Be,p),s(Be,f7),s(Be,Dd),s(Dd,d7),s(Be,m7),s(Be,Od),s(Od,_7),s(Be,v7),i(e,Fy,p),i(e,Ui,p),s(Ui,Ad),s(Ad,j7),i(e,Vy,p),i(e,la,p),s(la,tl),s(tl,Td),s(Td,w7),s(tl,y7),s(tl,Sd),s(Sd,g7),s(la,b7),s(la,al),s(al,Cd),s(Cd,q7),s(al,E7),s(al,xd),s(xd,$7),i(e,Yy,p),i(e,M,p),s(M,k7),s(M,Rd),s(Rd,P7),s(M,z7),s(M,Id),s(Id,D7),s(M,O7),s(M,Ud),s(Ud,A7),s(M,T7),s(M,Gd),s(Gd,S7),s(M,C7),s(M,Md),s(Md,x7),s(M,R7),i(e,Ky,p),i(e,ze,p),s(ze,Ld),s(Ld,I7),s(ze,U7),s(ze,Zd),s(Zd,G7),s(ze,M7),s(ze,Nd),s(Nd,L7),s(ze,Z7),i(e,Jy,p),i(e,Gi,p),s(Gi,N7),i(e,Xy,p),i(e,We,p),s(We,nl),s(nl,Hd),s(Hd,H7),s(nl,B7),s(nl,Bd),s(Bd,W7),s(We,F7),s(We,ol),s(ol,Wd),s(Wd,V7),s(ol,Y7),s(ol,Fd),s(Fd,K7),s(We,J7),s(We,ll),s(ll,Vd),s(Vd,X7),s(ll,Q7),s(ll,Yd),s(Yd,e9),i(e,Qy,p),i(e,Fe,p),s(Fe,s9),s(Fe,Kd),s(Kd,t9),s(Fe,a9),s(Fe,Mi),s(Mi,n9),s(Fe,o9),i(e,eg,p),i(e,rl,p),s(rl,Jd),s(Jd,l9),s(rl,r9),i(e,sg,p),i(e,le,p),s(le,p9),s(le,Xd),s(Xd,i9),s(le,u9),s(le,Qd),s(Qd,c9),s(le,h9),s(le,em),s(em,f9),s(le,d9),i(e,tg,p),i(e,Li,p),s(Li,pl),s(pl,sm),s(sm,m9),s(pl,_9),s(pl,tm),s(tm,v9),i(e,ag,p),i(e,De,p),s(De,am),s(am,j9),s(De,w9),s(De,nm),s(nm,y9),s(De,g9),s(De,om),s(om,b9),s(De,q9),i(e,ng,p),i(e,Ve,p),s(Ve,E9),s(Ve,lm),s(lm,$9),s(Ve,k9),s(Ve,rm),s(rm,P9),s(Ve,z9),i(e,og,p),i(e,ra,p),s(ra,il),s(il,D9),s(il,pm),s(pm,O9),s(il,A9),s(ra,T9),s(ra,ul),s(ul,S9),s(ul,im),s(im,C9),s(ul,x9),i(e,lg,p),i(e,Zi,p),i(e,rg,p),i(e,Is,p),s(Is,pa),s(pa,um),m(cl,um,null),s(Is,R9),s(Is,cm),s(cm,I9),i(e,pg,p),i(e,Ni,p),s(Ni,U9),i(e,ig,p),i(e,Hi,p),s(Hi,G9),i(e,ug,p),m(hl,e,p),i(e,cg,p),i(e,ia,p),s(ia,M9),s(ia,hm),s(hm,L9),s(ia,Z9),i(e,hg,p),i(e,Ye,p),s(Ye,N9),s(Ye,fl),s(fl,H9),s(Ye,B9),s(Ye,dl),s(dl,W9),s(Ye,F9),i(e,fg,p),i(e,ua,p),s(ua,V9),s(ua,fm),s(fm,Y9),s(ua,K9),i(e,dg,p),i(e,Ke,p),s(Ke,J9),s(Ke,dm),s(dm,X9),s(Ke,Q9),s(Ke,ml),s(ml,eP),s(Ke,sP),i(e,mg,p),i(e,Bi,p),i(e,_g,p),i(e,Us,p),s(Us,ca),s(ca,mm),m(_l,mm,null),s(Us,tP),s(Us,_m),s(_m,aP),i(e,vg,p),i(e,Wi,p),s(Wi,nP),i(e,jg,p),i(e,Fi,p),s(Fi,oP),i(e,wg,p),i(e,ha,p),s(ha,Gs),s(Gs,lP),s(Gs,vm),s(vm,rP),s(Gs,pP),s(Gs,jm),s(jm,iP),s(Gs,uP),s(ha,cP),s(ha,vl),s(vl,hP),s(vl,wm),s(wm,fP),s(vl,dP),i(e,yg,p),i(e,Je,p),s(Je,mP),s(Je,ym),s(ym,_P),s(Je,vP),s(Je,gm),s(gm,jP),s(Je,wP),i(e,gg,p),i(e,Vi,p),i(e,bg,p),i(e,Ms,p),s(Ms,fa),s(fa,bm),m(jl,bm,null),s(Ms,yP),s(Ms,qm),s(qm,gP),i(e,qg,p),i(e,da,p),s(da,bP),s(da,Em),s(Em,qP),s(da,EP),i(e,Eg,p),m(wl,e,p),i(e,$g,p),i(e,ma,p),s(ma,$P),s(ma,$m),s($m,kP),s(ma,PP),i(e,kg,p),m(yl,e,p),i(e,Pg,p),i(e,Yi,p),i(e,zg,p),i(e,Ls,p),s(Ls,_a),s(_a,km),m(gl,km,null),s(Ls,zP),s(Ls,Pm),s(Pm,DP),i(e,Dg,p),i(e,va,p),s(va,OP),s(va,zm),s(zm,AP),s(va,TP),i(e,Og,p),m(bl,e,p),i(e,Ag,p),i(e,ja,p),s(ja,SP),s(ja,Dm),s(Dm,CP),s(ja,xP),i(e,Tg,p),m(ql,e,p),i(e,Sg,p),i(e,Zs,p),s(Zs,wa),s(wa,Om),m(El,Om,null),s(Zs,RP),s(Zs,Am),s(Am,IP),i(e,Cg,p),i(e,ya,p),s(ya,UP),s(ya,Tm),s(Tm,GP),s(ya,MP),i(e,xg,p),i(e,Ki,p),s(Ki,LP),i(e,Rg,p),i(e,ga,p),s(ga,ZP),s(ga,Sm),s(Sm,NP),s(ga,HP),i(e,Ig,p),i(e,Ji,p),i(e,Ug,p),i(e,Ns,p),s(Ns,ba),s(ba,Cm),m($l,Cm,null),s(Ns,BP),s(Ns,xm),s(xm,WP),i(e,Gg,p),i(e,Xe,p),s(Xe,FP),s(Xe,Rm),s(Rm,VP),s(Xe,YP),s(Xe,kl),s(kl,KP),s(Xe,JP),i(e,Mg,p),i(e,$,p),s($,XP),s($,Im),s(Im,QP),s($,ez),s($,Xi),s(Xi,sz),s($,tz),s($,Um),s(Um,az),s($,nz),s($,Gm),s(Gm,oz),s($,lz),s($,Mm),s(Mm,rz),s($,pz),s($,Lm),s(Lm,iz),s($,uz),s($,Zm),s(Zm,cz),s($,hz),s($,Nm),s(Nm,fz),s($,dz),i(e,Lg,p),i(e,Qe,p),s(Qe,mz),s(Qe,Hm),s(Hm,_z),s(Qe,vz),s(Qe,Bm),s(Bm,jz),s(Qe,wz),i(e,Zg,p),m(Pl,e,p),i(e,Ng,p),i(e,Qi,p),s(Qi,yz),i(e,Hg,p),i(e,re,p),s(re,zl),s(zl,Wm),s(Wm,gz),s(zl,bz),s(zl,Fm),s(Fm,qz),s(re,Ez),s(re,Dl),s(Dl,Vm),s(Vm,$z),s(Dl,kz),s(Dl,Ym),s(Ym,Pz),s(re,zz),s(re,Ol),s(Ol,Km),s(Km,Dz),s(Ol,Oz),s(Ol,Jm),s(Jm,Az),s(re,Tz),s(re,Al),s(Al,Xm),s(Xm,Sz),s(Al,Cz),s(Al,Qm),s(Qm,xz),i(e,Bg,p),i(e,eu,p),s(eu,Rz),i(e,Wg,p),i(e,su,p),s(su,Iz),i(e,Fg,p),m(Tl,e,p),i(e,Vg,p),i(e,qa,p),s(qa,Uz),s(qa,tu),s(tu,Gz),s(qa,Mz),i(e,Yg,p),i(e,au,p),s(au,Lz),i(e,Kg,p),m(Sl,e,p),i(e,Jg,p),i(e,pe,p),s(pe,Zz),s(pe,e_),s(e_,Nz),s(pe,Hz),s(pe,s_),s(s_,Bz),s(pe,Wz),s(pe,t_),s(t_,Fz),s(pe,Vz),i(e,Xg,p),i(e,nu,p),i(e,Qg,p),i(e,Hs,p),s(Hs,Ea),s(Ea,a_),m(Cl,a_,null),s(Hs,Yz),s(Hs,n_),s(n_,Kz),i(e,e2,p),i(e,L,p),s(L,Jz),s(L,o_),s(o_,Xz),s(L,Qz),s(L,l_),s(l_,eD),s(L,sD),s(L,r_),s(r_,tD),s(L,aD),s(L,p_),s(p_,nD),s(L,oD),s(L,xl),s(xl,lD),s(L,rD),i(e,s2,p),i(e,ou,p),s(ou,pD),i(e,t2,p),i(e,$a,p),s($a,Rl),s(Rl,i_),s(i_,iD),s(Rl,uD),s(Rl,u_),s(u_,cD),s($a,hD),s($a,es),s(es,c_),s(c_,fD),s(es,dD),s(es,h_),s(h_,mD),s(es,_D),s(es,f_),s(f_,vD),s(es,jD),i(e,a2,p),i(e,D,p),s(D,wD),s(D,d_),s(d_,yD),s(D,gD),s(D,lu),s(lu,bD),s(D,qD),s(D,m_),s(m_,ED),s(D,$D),s(D,__),s(__,kD),s(D,PD),s(D,v_),s(v_,zD),s(D,DD),s(D,j_),s(j_,OD),s(D,AD),i(e,n2,p),i(e,ss,p),s(ss,TD),s(ss,w_),s(w_,SD),s(ss,CD),s(ss,y_),s(y_,xD),s(ss,RD),i(e,o2,p),m(Il,e,p),i(e,l2,p),i(e,ts,p),s(ts,ID),s(ts,g_),s(g_,UD),s(ts,GD),s(ts,ru),s(ru,MD),s(ts,LD),i(e,r2,p),i(e,ie,p),s(ie,ka),s(ka,b_),s(b_,ZD),s(ka,ND),s(ka,q_),s(q_,HD),s(ka,BD),s(ie,WD),s(ie,Pa),s(Pa,E_),s(E_,FD),s(Pa,VD),s(Pa,$_),s($_,YD),s(Pa,KD),s(ie,JD),s(ie,as),s(as,k_),s(k_,XD),s(as,QD),s(as,P_),s(P_,eO),s(as,sO),s(as,z_),s(z_,tO),s(as,aO),s(ie,nO),s(ie,ns),s(ns,D_),s(D_,oO),s(ns,lO),s(ns,O_),s(O_,rO),s(ns,pO),s(ns,A_),s(A_,iO),s(ns,uO),i(e,p2,p),i(e,pu,p),s(pu,cO),i(e,i2,p),m(Ul,e,p),i(e,u2,p),i(e,za,p),s(za,hO),s(za,iu),s(iu,fO),s(za,dO),i(e,c2,p),i(e,Da,p),s(Da,mO),s(Da,T_),s(T_,_O),s(Da,vO),i(e,h2,p),m(Gl,e,p),i(e,f2,p),i(e,Y,p),s(Y,jO),s(Y,S_),s(S_,wO),s(Y,yO),s(Y,C_),s(C_,gO),s(Y,bO),s(Y,x_),s(x_,qO),s(Y,EO),s(Y,R_),s(R_,$O),s(Y,kO),i(e,d2,p),i(e,uu,p),i(e,m2,p),i(e,Bs,p),s(Bs,Oa),s(Oa,I_),m(Ml,I_,null),s(Bs,PO),s(Bs,U_),s(U_,zO),i(e,_2,p),i(e,cu,p),s(cu,DO),i(e,v2,p),i(e,Aa,p),s(Aa,OO),s(Aa,G_),s(G_,AO),s(Aa,TO),i(e,j2,p),m(Ll,e,p),i(e,w2,p),i(e,Ta,p),s(Ta,SO),s(Ta,Zl),s(Zl,CO),s(Ta,xO),i(e,y2,p),i(e,ue,p),s(ue,RO),s(ue,M_),s(M_,IO),s(ue,UO),s(ue,L_),s(L_,GO),s(ue,MO),s(ue,Z_),s(Z_,LO),s(ue,ZO),i(e,g2,p),i(e,hu,p),i(e,b2,p),i(e,Ws,p),s(Ws,Sa),s(Sa,N_),m(Nl,N_,null),s(Ws,NO),s(Ws,H_),s(H_,HO),i(e,q2,p),i(e,fu,p),s(fu,BO),i(e,E2,p),i(e,Fs,p),s(Fs,Ca),s(Ca,B_),m(Hl,B_,null),s(Fs,WO),s(Fs,W_),s(W_,FO),i(e,$2,p),i(e,du,p),s(du,VO),i(e,k2,p),m(Bl,e,p),i(e,P2,p),i(e,os,p),s(os,YO),s(os,mu),s(mu,KO),s(os,JO),s(os,F_),s(F_,XO),s(os,QO),i(e,z2,p),i(e,ls,p),s(ls,eA),s(ls,V_),s(V_,sA),s(ls,tA),s(ls,Y_),s(Y_,aA),s(ls,nA),i(e,D2,p),i(e,_u,p),s(_u,oA),i(e,O2,p),m(Wl,e,p),i(e,A2,p),i(e,xa,p),s(xa,lA),s(xa,vu),s(vu,rA),s(xa,pA),i(e,T2,p),i(e,Ra,p),s(Ra,iA),s(Ra,Fl),s(Fl,uA),s(Ra,cA),i(e,S2,p),i(e,Vs,p),s(Vs,Ia),s(Ia,K_),m(Vl,K_,null),s(Vs,hA),s(Vs,J_),s(J_,fA),i(e,C2,p),i(e,ju,p),s(ju,dA),i(e,x2,p),m(Yl,e,p),i(e,R2,p),i(e,wu,p),s(wu,mA),i(e,I2,p),i(e,rs,p),s(rs,_A),s(rs,X_),s(X_,vA),s(rs,jA),s(rs,Q_),s(Q_,wA),s(rs,yA),i(e,U2,p),i(e,yu,p),s(yu,gA),i(e,G2,p),m(Kl,e,p),i(e,M2,p),m(Ua,e,p),i(e,L2,p),i(e,Ys,p),s(Ys,Ga),s(Ga,e1),m(Jl,e1,null),s(Ys,bA),s(Ys,s1),s(s1,qA),i(e,Z2,p),i(e,gu,p),s(gu,EA),i(e,N2,p),m(Xl,e,p),i(e,H2,p),i(e,ce,p),s(ce,$A),s(ce,bu),s(bu,kA),s(ce,PA),s(ce,t1),s(t1,zA),s(ce,DA),s(ce,a1),s(a1,OA),s(ce,AA),i(e,B2,p),i(e,Ma,p),s(Ma,TA),s(Ma,n1),s(n1,SA),s(Ma,CA),i(e,W2,p),i(e,qu,p),s(qu,xA),i(e,F2,p),m(Ql,e,p),i(e,V2,p),i(e,La,p),s(La,RA),s(La,Eu),s(Eu,IA),s(La,UA),i(e,Y2,p),i(e,Za,p),s(Za,GA),s(Za,er),s(er,MA),s(Za,LA),i(e,K2,p),i(e,$u,p),i(e,J2,p),i(e,Ks,p),s(Ks,Na),s(Na,o1),m(sr,o1,null),s(Ks,ZA),s(Ks,l1),s(l1,NA),i(e,X2,p),i(e,ku,p),s(ku,HA),i(e,Q2,p),m(tr,e,p),i(e,eb,p),i(e,Z,p),s(Z,BA),s(Z,Pu),s(Pu,WA),s(Z,FA),s(Z,r1),s(r1,VA),s(Z,YA),s(Z,p1),s(p1,KA),s(Z,JA),s(Z,i1),s(i1,XA),s(Z,QA),s(Z,u1),s(u1,eT),s(Z,sT),i(e,sb,p),i(e,zu,p),s(zu,tT),i(e,tb,p),m(ar,e,p),i(e,ab,p),i(e,Ha,p),s(Ha,aT),s(Ha,Du),s(Du,nT),s(Ha,oT),i(e,nb,p),i(e,Ou,p),i(e,ob,p),i(e,Js,p),s(Js,Ba),s(Ba,c1),m(nr,c1,null),s(Js,lT),s(Js,h1),s(h1,rT),i(e,lb,p),i(e,Au,p),s(Au,pT),i(e,rb,p),m(or,e,p),i(e,pb,p),i(e,ps,p),s(ps,iT),s(ps,Tu),s(Tu,uT),s(ps,cT),s(ps,f1),s(f1,hT),s(ps,fT),i(e,ib,p),i(e,Su,p),s(Su,dT),i(e,ub,p),m(lr,e,p),i(e,cb,p),i(e,Wa,p),s(Wa,mT),s(Wa,Cu),s(Cu,_T),s(Wa,vT),i(e,hb,p),i(e,xu,p),i(e,fb,p),i(e,Xs,p),s(Xs,Fa),s(Fa,d1),m(rr,d1,null),s(Xs,jT),s(Xs,m1),s(m1,wT),i(e,db,p),i(e,Ru,p),s(Ru,yT),i(e,mb,p),m(pr,e,p),i(e,_b,p),i(e,is,p),s(is,gT),s(is,Iu),s(Iu,bT),s(is,qT),s(is,_1),s(_1,ET),s(is,$T),i(e,vb,p),i(e,Uu,p),s(Uu,kT),i(e,jb,p),m(ir,e,p),i(e,wb,p),i(e,Va,p),s(Va,PT),s(Va,Gu),s(Gu,zT),s(Va,DT),i(e,yb,p),i(e,Mu,p),i(e,gb,p),i(e,Qs,p),s(Qs,Ya),s(Ya,v1),m(ur,v1,null),s(Qs,OT),s(Qs,j1),s(j1,AT),i(e,bb,p),i(e,Ka,p),s(Ka,TT),s(Ka,w1),s(w1,ST),s(Ka,CT),i(e,qb,p),i(e,Lu,p),s(Lu,y1),s(y1,xT),i(e,Eb,p),i(e,Ja,p),s(Ja,RT),s(Ja,g1),s(g1,IT),s(Ja,UT),i(e,$b,p),i(e,O,p),s(O,GT),s(O,b1),s(b1,MT),s(O,LT),s(O,q1),s(q1,ZT),s(O,NT),s(O,E1),s(E1,HT),s(O,BT),s(O,$1),s($1,WT),s(O,FT),s(O,k1),s(k1,VT),s(O,YT),s(O,P1),s(P1,KT),s(O,JT),i(e,kb,p),m(cr,e,p),i(e,Pb,p),i(e,Zu,p),s(Zu,z1),s(z1,XT),i(e,zb,p),i(e,Xa,p),s(Xa,QT),s(Xa,hr),s(hr,eS),s(Xa,sS),i(e,Db,p),i(e,Nu,p),s(Nu,D1),s(D1,tS),i(e,Ob,p),i(e,Hu,p),s(Hu,aS),i(e,Ab,p),i(e,Bu,p),s(Bu,nS),i(e,Tb,p),m(fr,e,p),i(e,Sb,p),i(e,us,p),s(us,oS),s(us,O1),s(O1,lS),s(us,rS),s(us,A1),s(A1,pS),s(us,iS),i(e,Cb,p),m(dr,e,p),i(e,xb,p),m(Qa,e,p),i(e,Rb,p),i(e,en,p),s(en,uS),s(en,T1),s(T1,cS),s(en,hS),i(e,Ib,p),i(e,sn,p),s(sn,fS),s(sn,S1),s(S1,dS),s(sn,mS),i(e,Ub,p),m(mr,e,p),i(e,Gb,p),i(e,Wu,p),s(Wu,C1),s(C1,_S),i(e,Mb,p),i(e,cs,p),s(cs,vS),s(cs,x1),s(x1,jS),s(cs,wS),s(cs,R1),s(R1,yS),s(cs,gS),i(e,Lb,p),i(e,Fu,p),s(Fu,bS),i(e,Zb,p),m(_r,e,p),i(e,Nb,p),i(e,tn,p),s(tn,qS),s(tn,I1),s(I1,ES),s(tn,$S),i(e,Hb,p),m(vr,e,p),i(e,Bb,p),i(e,an,p),s(an,kS),s(an,U1),s(U1,PS),s(an,zS),i(e,Wb,p),i(e,Vu,p),s(Vu,DS),i(e,Fb,p),i(e,jr,p),s(jr,G1),s(G1,OS),s(jr,AS),i(e,Vb,p),i(e,hs,p),s(hs,TS),s(hs,M1),s(M1,SS),s(hs,CS),s(hs,L1),s(L1,xS),s(hs,RS),i(e,Yb,p),i(e,Yu,p),s(Yu,IS),i(e,Kb,p),i(e,et,p),s(et,nn),s(nn,Z1),m(wr,Z1,null),s(et,US),s(et,N1),s(N1,GS),i(e,Jb,p),i(e,Ku,p),s(Ku,MS),i(e,Xb,p),i(e,Ju,p),s(Ju,LS),i(e,Qb,p),i(e,Xu,p),s(Xu,ZS),i(e,e3,p),i(e,st,p),s(st,on),s(on,H1),m(yr,H1,null),s(st,NS),s(st,B1),s(B1,HS),i(e,s3,p),i(e,ln,p),s(ln,BS),s(ln,W1),s(W1,WS),s(ln,FS),i(e,t3,p),m(gr,e,p),i(e,a3,p),i(e,Qu,p),s(Qu,VS),i(e,n3,p),i(e,P,p),s(P,YS),s(P,F1),s(F1,KS),s(P,JS),s(P,V1),s(V1,XS),s(P,QS),s(P,Y1),s(Y1,eC),s(P,sC),s(P,ec),s(ec,tC),s(P,aC),s(P,sc),s(sc,nC),s(P,oC),s(P,K1),s(K1,lC),s(P,rC),s(P,J1),s(J1,pC),s(P,iC),i(e,o3,p),m(br,e,p),i(e,l3,p),i(e,rn,p),s(rn,uC),s(rn,X1),s(X1,cC),s(rn,hC),i(e,r3,p),i(e,tc,p),s(tc,fC),i(e,p3,p),i(e,pn,p),s(pn,dC),s(pn,qr),s(qr,mC),s(pn,_C),i(e,i3,p),i(e,he,p),s(he,vC),s(he,Q1),s(Q1,jC),s(he,wC),s(he,ev),s(ev,yC),s(he,gC),s(he,ac),s(ac,bC),s(he,qC),i(e,u3,p),i(e,tt,p),s(tt,un),s(un,sv),m(Er,sv,null),s(tt,EC),s(tt,tv),s(tv,$C),i(e,c3,p),i(e,$r,p),s($r,kC),s($r,kr),s(kr,PC),i(e,h3,p),i(e,cn,p),s(cn,zC),s(cn,av),s(av,DC),s(cn,OC),i(e,f3,p),i(e,nc,p),s(nc,AC),i(e,d3,p),m(Pr,e,p),i(e,m3,p),i(e,fs,p),s(fs,TC),s(fs,nv),s(nv,SC),s(fs,CC),s(fs,ov),s(ov,xC),s(fs,RC),i(e,_3,p),i(e,oc,p),i(e,v3,p),i(e,at,p),s(at,hn),s(hn,lv),m(zr,lv,null),s(at,IC),s(at,rv),s(rv,UC),i(e,j3,p),i(e,lc,p),s(lc,GC),i(e,w3,p),i(e,fn,p),s(fn,MC),s(fn,rc),s(rc,LC),s(fn,ZC),i(e,y3,p),m(Dr,e,p),i(e,g3,p),i(e,pc,p),s(pc,NC),i(e,b3,p),i(e,dn,p),s(dn,HC),s(dn,pv),s(pv,BC),s(dn,WC),i(e,q3,p),m(Or,e,p),i(e,E3,p),i(e,ic,p),s(ic,FC),i(e,$3,p),i(e,uc,p),s(uc,VC),i(e,k3,p),i(e,nt,p),s(nt,mn),s(mn,iv),m(Ar,iv,null),s(nt,YC),s(nt,uv),s(uv,KC),i(e,P3,p),i(e,cc,p),s(cc,JC),i(e,z3,p),i(e,hc,p),s(hc,XC),i(e,D3,p),m(Tr,e,p),i(e,O3,p),i(e,fc,p),s(fc,QC),i(e,A3,p),i(e,dc,p),s(dc,ex),i(e,T3,p),i(e,mc,p),s(mc,sx),i(e,S3,p),i(e,_c,p),s(_c,tx),i(e,C3,p),m(Sr,e,p),i(e,x3,p),i(e,vc,p),s(vc,ax),i(e,R3,p),i(e,_n,p),s(_n,nx),s(_n,Cr),s(Cr,ox),s(_n,lx),i(e,I3,p),i(e,ot,p),s(ot,vn),s(vn,cv),m(xr,cv,null),s(ot,rx),s(ot,hv),s(hv,px),i(e,U3,p),i(e,jc,p),s(jc,ix),i(e,G3,p),i(e,wc,p),s(wc,ux),i(e,M3,p),i(e,N,p),s(N,fv),s(fv,dv),s(dv,cx),s(N,hx),s(N,mv),s(mv,Oe),s(Oe,fx),s(Oe,yc),s(yc,dx),s(Oe,mx),s(Oe,gc),s(gc,_x),s(Oe,vx),s(Oe,bc),s(bc,jx),s(Oe,wx),s(N,yx),s(N,Rr),s(Rr,_v),s(_v,gx),s(Rr,bx),m(Ir,Rr,null),s(N,qx),s(N,vv),s(vv,Ur),s(Ur,Ex),s(Ur,Gr),s(Gr,$x),s(Ur,kx),s(N,Px),s(N,jv),s(jv,wv),s(wv,zx),s(N,Dx),s(N,yv),s(yv,Mr),s(Mr,Ox),s(Mr,Lr),s(Lr,Ax),s(Mr,Tx),i(e,L3,p),i(e,qc,p),s(qc,Sx),i(e,Z3,p),i(e,jn,p),s(jn,lt),s(lt,gv),s(gv,Cx),s(lt,xx),s(lt,bv),s(bv,Rx),s(lt,Ix),s(lt,qv),s(qv,Ux),s(jn,Gx),s(jn,Ev),s(Ev,Zr),s(Zr,Mx),s(Zr,Nr),s(Nr,Lx),s(Zr,Zx),i(e,N3,p),i(e,rt,p),s(rt,wn),s(wn,$v),m(Hr,$v,null),s(rt,Nx),s(rt,kv),s(kv,Hx),i(e,H3,p),i(e,pt,p),s(pt,yn),s(yn,Pv),m(Br,Pv,null),s(pt,Bx),s(pt,Wr),s(Wr,Wx),s(Wr,zv),s(zv,Fx),s(Wr,Vx),i(e,B3,p),i(e,H,p),s(H,Yx),s(H,Dv),s(Dv,Kx),s(H,Jx),s(H,Ov),s(Ov,Xx),s(H,Qx),s(H,Av),s(Av,eR),s(H,sR),s(H,Tv),s(Tv,tR),s(H,aR),s(H,Fr),s(Fr,nR),s(H,oR),i(e,W3,p),i(e,it,p),s(it,gn),s(gn,Sv),m(Vr,Sv,null),s(it,lR),s(it,Ec),s(Ec,rR),s(Ec,Cv),s(Cv,pR),i(e,F3,p),i(e,$c,p),s($c,iR),i(e,V3,p),i(e,kc,p),s(kc,uR),i(e,Y3,p),m(Yr,e,p),i(e,K3,p),i(e,bn,p),s(bn,cR),s(bn,xv),s(xv,hR),s(bn,fR),i(e,J3,p),m(Kr,e,p),i(e,X3,p),i(e,Pc,p),s(Pc,dR),i(e,Q3,p),i(e,zc,p),s(zc,mR),i(e,e0,p),i(e,ds,p),s(ds,_R),s(ds,Rv),s(Rv,vR),s(ds,jR),s(ds,Iv),s(Iv,wR),s(ds,yR),i(e,s0,p),i(e,ut,p),s(ut,qn),s(qn,Uv),m(Jr,Uv,null),s(ut,gR),s(ut,Gv),s(Gv,bR),i(e,t0,p),i(e,ms,p),s(ms,ct),s(ct,qR),s(ct,Dc),s(Dc,ER),s(ct,$R),s(ct,Mv),s(Mv,kR),s(ct,PR),s(ms,zR),s(ms,Xr),s(Xr,DR),s(Xr,Qr),s(Qr,OR),s(Xr,AR),s(ms,TR),s(ms,ht),s(ht,SR),s(ht,Oc),s(Oc,CR),s(ht,xR),s(ht,ep),s(ep,RR),s(ht,IR),i(e,a0,p),i(e,ft,p),s(ft,En),s(En,Lv),m(sp,Lv,null),s(ft,UR),s(ft,Zv),s(Zv,GR),i(e,n0,p),i(e,fe,p),s(fe,MR),s(fe,Ac),s(Ac,LR),s(fe,ZR),s(fe,Tc),s(Tc,NR),s(fe,HR),s(fe,Nv),s(Nv,BR),s(fe,WR),i(e,o0,p),i(e,$n,p),s($n,FR),s($n,Sc),s(Sc,VR),s($n,YR),i(e,l0,p),i(e,_s,p),s(_s,KR),s(_s,Cc),s(Cc,JR),s(_s,XR),s(_s,xc),s(xc,QR),s(_s,eI),i(e,r0,p),i(e,kn,p),s(kn,sI),s(kn,Hv),s(Hv,tI),s(kn,aI),i(e,p0,p),i(e,Rc,p),s(Rc,nI),i(e,i0,p),m(tp,e,p),i(e,u0,p),i(e,Ic,p),s(Ic,oI),i(e,c0,p),m(ap,e,p),i(e,h0,p),i(e,de,p),s(de,lI),s(de,Uc),s(Uc,rI),s(de,pI),s(de,np),s(np,iI),s(de,uI),s(de,Bv),s(Bv,cI),s(de,hI),i(e,f0,p),i(e,dt,p),s(dt,Pn),s(Pn,Wv),m(op,Wv,null),s(dt,fI),s(dt,Fv),s(Fv,dI),i(e,d0,p),i(e,ee,p),m(lp,ee,null),s(ee,mI),s(ee,Vv),s(Vv,_I),s(ee,vI),s(ee,Ae),s(Ae,jI),s(Ae,Yv),s(Yv,wI),s(Ae,yI),s(Ae,Kv),s(Kv,gI),s(Ae,bI),s(Ae,Jv),s(Jv,qI),s(Ae,EI),s(ee,$I),s(ee,me),s(me,Gc),s(Gc,kI),s(me,PI),s(me,Xv),s(Xv,zI),s(me,DI),s(me,Mc),s(Mc,OI),s(me,AI),s(me,Qv),s(Qv,TI),s(me,SI),i(e,m0,p),i(e,mt,p),s(mt,zn),s(zn,ej),m(rp,ej,null),s(mt,CI),s(mt,sj),s(sj,xI),i(e,_0,p),i(e,Dn,p),s(Dn,RI),s(Dn,Lc),s(Lc,II),s(Dn,UI),i(e,v0,p),i(e,Zc,p),s(Zc,GI),i(e,j0,p),i(e,Nc,p),s(Nc,MI),i(e,w0,p),i(e,Hc,p),s(Hc,LI),i(e,y0,p),i(e,On,p),s(On,tj),s(tj,ZI),s(On,NI),s(On,aj),s(aj,HI),i(e,g0,p),m(pp,e,p),i(e,b0,p),i(e,An,p),s(An,BI),s(An,nj),s(nj,WI),s(An,FI),i(e,q0,p),m(ip,e,p),i(e,E0,p),i(e,Bc,p),s(Bc,VI),i(e,$0,p),i(e,_t,p),s(_t,Tn),s(Tn,oj),m(up,oj,null),s(_t,YI),s(_t,lj),s(lj,KI),i(e,k0,p),i(e,_e,p),s(_e,rj),s(rj,cp),s(cp,JI),s(_e,XI),s(_e,pj),s(pj,hp),s(hp,QI),s(_e,eU),s(_e,ij),s(ij,fp),s(fp,sU),s(_e,tU),s(_e,uj),s(uj,dp),s(dp,aU),i(e,P0,p),i(e,Wc,p),s(Wc,nU),i(e,z0,p),i(e,vs,p),s(vs,cj),s(cj,mp),s(mp,oU),s(vs,lU),s(vs,hj),s(hj,_p),s(_p,rU),s(vs,pU),s(vs,fj),s(fj,vp),s(vp,iU),i(e,D0,p),i(e,js,p),s(js,uU),s(js,Fc),s(Fc,cU),s(js,hU),s(js,jp),s(jp,fU),s(js,dU),O0=!0},p(e,[p]){const wp={};p&2&&(wp.$$scope={dirty:p,ctx:e}),Xt.$set(wp);const dj={};p&2&&(dj.$$scope={dirty:p,ctx:e}),Ua.$set(dj);const mj={};p&2&&(mj.$$scope={dirty:p,ctx:e}),Qa.$set(mj)},i(e){O0||(_(z.$$.fragment,e),_(so.$$.fragment,e),_(to.$$.fragment,e),_(ao.$$.fragment,e),_(no.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(co.$$.fragment,e),_(ho.$$.fragment,e),_(fo.$$.fragment,e),_(_o.$$.fragment,e),_(jo.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(qo.$$.fragment,e),_(Eo.$$.fragment,e),_(ko.$$.fragment,e),_(Do.$$.fragment,e),_(Oo.$$.fragment,e),_(Ao.$$.fragment,e),_(To.$$.fragment,e),_(So.$$.fragment,e),_(Co.$$.fragment,e),_(xo.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Lo.$$.fragment,e),_(Zo.$$.fragment,e),_(No.$$.fragment,e),_(Ho.$$.fragment,e),_(Bo.$$.fragment,e),_(Xt.$$.fragment,e),_(Fo.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(Qo.$$.fragment,e),_(el.$$.fragment,e),_(sl.$$.fragment,e),_(cl.$$.fragment,e),_(hl.$$.fragment,e),_(_l.$$.fragment,e),_(jl.$$.fragment,e),_(wl.$$.fragment,e),_(yl.$$.fragment,e),_(gl.$$.fragment,e),_(bl.$$.fragment,e),_(ql.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(Pl.$$.fragment,e),_(Tl.$$.fragment,e),_(Sl.$$.fragment,e),_(Cl.$$.fragment,e),_(Il.$$.fragment,e),_(Ul.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Ll.$$.fragment,e),_(Nl.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Vl.$$.fragment,e),_(Yl.$$.fragment,e),_(Kl.$$.fragment,e),_(Ua.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(rr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(Qa.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(gr.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_(Pr.$$.fragment,e),_(zr.$$.fragment,e),_(Dr.$$.fragment,e),_(Or.$$.fragment,e),_(Ar.$$.fragment,e),_(Tr.$$.fragment,e),_(Sr.$$.fragment,e),_(xr.$$.fragment,e),_(Ir.$$.fragment,e),_(Hr.$$.fragment,e),_(Br.$$.fragment,e),_(Vr.$$.fragment,e),_(Yr.$$.fragment,e),_(Kr.$$.fragment,e),_(Jr.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(op.$$.fragment,e),_(lp.$$.fragment,e),_(rp.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(up.$$.fragment,e),O0=!0)},o(e){v(z.$$.fragment,e),v(so.$$.fragment,e),v(to.$$.fragment,e),v(ao.$$.fragment,e),v(no.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(co.$$.fragment,e),v(ho.$$.fragment,e),v(fo.$$.fragment,e),v(_o.$$.fragment,e),v(jo.$$.fragment,e),v(wo.$$.fragment,e),v(go.$$.fragment,e),v(qo.$$.fragment,e),v(Eo.$$.fragment,e),v(ko.$$.fragment,e),v(Do.$$.fragment,e),v(Oo.$$.fragment,e),v(Ao.$$.fragment,e),v(To.$$.fragment,e),v(So.$$.fragment,e),v(Co.$$.fragment,e),v(xo.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Lo.$$.fragment,e),v(Zo.$$.fragment,e),v(No.$$.fragment,e),v(Ho.$$.fragment,e),v(Bo.$$.fragment,e),v(Xt.$$.fragment,e),v(Fo.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(Qo.$$.fragment,e),v(el.$$.fragment,e),v(sl.$$.fragment,e),v(cl.$$.fragment,e),v(hl.$$.fragment,e),v(_l.$$.fragment,e),v(jl.$$.fragment,e),v(wl.$$.fragment,e),v(yl.$$.fragment,e),v(gl.$$.fragment,e),v(bl.$$.fragment,e),v(ql.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(Pl.$$.fragment,e),v(Tl.$$.fragment,e),v(Sl.$$.fragment,e),v(Cl.$$.fragment,e),v(Il.$$.fragment,e),v(Ul.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Ll.$$.fragment,e),v(Nl.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Vl.$$.fragment,e),v(Yl.$$.fragment,e),v(Kl.$$.fragment,e),v(Ua.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(rr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(Qa.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(gr.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v(Pr.$$.fragment,e),v(zr.$$.fragment,e),v(Dr.$$.fragment,e),v(Or.$$.fragment,e),v(Ar.$$.fragment,e),v(Tr.$$.fragment,e),v(Sr.$$.fragment,e),v(xr.$$.fragment,e),v(Ir.$$.fragment,e),v(Hr.$$.fragment,e),v(Br.$$.fragment,e),v(Vr.$$.fragment,e),v(Yr.$$.fragment,e),v(Kr.$$.fragment,e),v(Jr.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(op.$$.fragment,e),v(lp.$$.fragment,e),v(rp.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(up.$$.fragment,e),O0=!1},d(e){t(g),e&&t(S),e&&t(b),j(z),e&&t(te),e&&t(T),e&&t(wj),e&&t(R),e&&t(yj),e&&t(Te),e&&t(gj),e&&t(kp),e&&t(bj),e&&t(Pp),e&&t(qj),e&&t(wt),e&&t(Ej),e&&t(yt),e&&t($j),e&&t(Ap),e&&t(kj),e&&t(Tp),e&&t(Pj),e&&t(Sp),e&&t(zj),e&&t(Cp),e&&t(Dj),e&&t(xp),e&&t(Oj),e&&t(Ip),e&&t(Aj),e&&t(Up),e&&t(Tj),e&&t(qs),j(so),e&&t(Sj),e&&t(Gp),e&&t(Cj),e&&t(Es),j(to),e&&t(xj),e&&t(Mp),e&&t(Rj),j(ao,e),e&&t(Ij),e&&t(Se),e&&t(Uj),j(no,e),e&&t(Gj),e&&t(Ce),e&&t(Mj),e&&t(qt),e&&t(Lj),e&&t(Zp),e&&t(Zj),e&&t(Np),e&&t(Nj),j(ro,e),e&&t(Hj),e&&t(xe),e&&t(Bj),e&&t(Et),e&&t(Wj),j(po,e),e&&t(Fj),e&&t(ke),e&&t(Vj),e&&t(Hp),e&&t(Yj),j(io,e),e&&t(Kj),e&&t(Re),e&&t(Jj),e&&t($t),e&&t(Xj),e&&t(Ie),e&&t(Qj),e&&t(Bp),e&&t(ew),j(co,e),e&&t(sw),e&&t(Wp),e&&t(tw),j(ho,e),e&&t(aw),e&&t(Fp),e&&t(nw),j(fo,e),e&&t(ow),e&&t(kt),e&&t(lw),e&&t(Pt),e&&t(rw),e&&t(zt),e&&t(pw),e&&t(Vp),e&&t(iw),e&&t($s),j(_o),e&&t(uw),e&&t(Ot),e&&t(cw),e&&t(At),e&&t(hw),e&&t(Kp),e&&t(fw),j(jo,e),e&&t(dw),e&&t(Jp),e&&t(mw),j(wo,e),e&&t(_w),e&&t(I),e&&t(vw),e&&t(ae),e&&t(jw),e&&t(Tt),e&&t(ww),j(go,e),e&&t(yw),e&&t(St),e&&t(gw),e&&t(Ct),e&&t(bw),e&&t(Xp),e&&t(qw),e&&t(Ps),j(qo),e&&t(Ew),e&&t(Rt),e&&t($w),j(Eo,e),e&&t(kw),e&&t(Ue),e&&t(Pw),e&&t(ei),e&&t(zw),e&&t(It),e&&t(Dw),e&&t(si),e&&t(Ow),j(ko,e),e&&t(Aw),e&&t(ti),e&&t(Tw),e&&t(Ut),e&&t(Sw),e&&t(ai),e&&t(Cw),e&&t(ni),e&&t(xw),e&&t(oi),j(Do),e&&t(Rw),e&&t(li),e&&t(Iw),e&&t(Ds),j(Oo),e&&t(Uw),e&&t(Mt),e&&t(Gw),e&&t(ri),e&&t(Mw),j(Ao,e),e&&t(Lw),e&&t(Lt),e&&t(Zw),e&&t(pi),e&&t(Nw),e&&t(ii),e&&t(Hw),j(To,e),e&&t(Bw),e&&t(Ge),e&&t(Ww),j(So,e),e&&t(Fw),e&&t(Zt),e&&t(Vw),j(Co,e),e&&t(Yw),e&&t(ui),e&&t(Kw),e&&t(Nt),e&&t(Jw),e&&t(ci),e&&t(Xw),e&&t(Os),j(xo),e&&t(Qw),e&&t(Bt),e&&t(ey),e&&t(Wt),e&&t(sy),j(Uo,e),e&&t(ty),e&&t(Ft),e&&t(ay),j(Go,e),e&&t(ny),e&&t(Vt),e&&t(oy),e&&t(hi),e&&t(ly),e&&t(ne),e&&t(ry),j(Lo,e),e&&t(py),e&&t(Yt),e&&t(iy),e&&t(di),e&&t(uy),e&&t(As),j(Zo),e&&t(cy),e&&t(U),e&&t(hy),e&&t(ji),e&&t(fy),j(No,e),e&&t(dy),e&&t(wi),e&&t(my),j(Ho,e),e&&t(_y),e&&t(yi),e&&t(vy),e&&t(Ts),j(Bo),e&&t(jy),j(Xt,e),e&&t(wy),e&&t(Me),e&&t(yy),e&&t(Qt),e&&t(gy),e&&t(Le),e&&t(by),e&&t($i),e&&t(qy),e&&t(ea),e&&t(Ey),e&&t(sa),e&&t($y),e&&t(oe),e&&t(ky),e&&t(Di),e&&t(Py),e&&t(Ss),j(Fo),e&&t(zy),e&&t(Vo),e&&t(Dy),e&&t(Ze),e&&t(Oy),e&&t(aa),e&&t(Ay),e&&t(Ai),e&&t(Ty),e&&t(Ti),e&&t(Sy),e&&t(Cs),j(Jo),e&&t(Cy),e&&t(Si),e&&t(xy),j(Xo,e),e&&t(Ry),e&&t(Ci),e&&t(Iy),e&&t(Ne),e&&t(Uy),e&&t(He),e&&t(Gy),j(Qo,e),e&&t(My),e&&t(xi),e&&t(Ly),e&&t(Ri),e&&t(Zy),e&&t(Rs),j(el),e&&t(Ny),e&&t(Ii),e&&t(Hy),j(sl,e),e&&t(By),e&&t(V),e&&t(Wy),e&&t(Be),e&&t(Fy),e&&t(Ui),e&&t(Vy),e&&t(la),e&&t(Yy),e&&t(M),e&&t(Ky),e&&t(ze),e&&t(Jy),e&&t(Gi),e&&t(Xy),e&&t(We),e&&t(Qy),e&&t(Fe),e&&t(eg),e&&t(rl),e&&t(sg),e&&t(le),e&&t(tg),e&&t(Li),e&&t(ag),e&&t(De),e&&t(ng),e&&t(Ve),e&&t(og),e&&t(ra),e&&t(lg),e&&t(Zi),e&&t(rg),e&&t(Is),j(cl),e&&t(pg),e&&t(Ni),e&&t(ig),e&&t(Hi),e&&t(ug),j(hl,e),e&&t(cg),e&&t(ia),e&&t(hg),e&&t(Ye),e&&t(fg),e&&t(ua),e&&t(dg),e&&t(Ke),e&&t(mg),e&&t(Bi),e&&t(_g),e&&t(Us),j(_l),e&&t(vg),e&&t(Wi),e&&t(jg),e&&t(Fi),e&&t(wg),e&&t(ha),e&&t(yg),e&&t(Je),e&&t(gg),e&&t(Vi),e&&t(bg),e&&t(Ms),j(jl),e&&t(qg),e&&t(da),e&&t(Eg),j(wl,e),e&&t($g),e&&t(ma),e&&t(kg),j(yl,e),e&&t(Pg),e&&t(Yi),e&&t(zg),e&&t(Ls),j(gl),e&&t(Dg),e&&t(va),e&&t(Og),j(bl,e),e&&t(Ag),e&&t(ja),e&&t(Tg),j(ql,e),e&&t(Sg),e&&t(Zs),j(El),e&&t(Cg),e&&t(ya),e&&t(xg),e&&t(Ki),e&&t(Rg),e&&t(ga),e&&t(Ig),e&&t(Ji),e&&t(Ug),e&&t(Ns),j($l),e&&t(Gg),e&&t(Xe),e&&t(Mg),e&&t($),e&&t(Lg),e&&t(Qe),e&&t(Zg),j(Pl,e),e&&t(Ng),e&&t(Qi),e&&t(Hg),e&&t(re),e&&t(Bg),e&&t(eu),e&&t(Wg),e&&t(su),e&&t(Fg),j(Tl,e),e&&t(Vg),e&&t(qa),e&&t(Yg),e&&t(au),e&&t(Kg),j(Sl,e),e&&t(Jg),e&&t(pe),e&&t(Xg),e&&t(nu),e&&t(Qg),e&&t(Hs),j(Cl),e&&t(e2),e&&t(L),e&&t(s2),e&&t(ou),e&&t(t2),e&&t($a),e&&t(a2),e&&t(D),e&&t(n2),e&&t(ss),e&&t(o2),j(Il,e),e&&t(l2),e&&t(ts),e&&t(r2),e&&t(ie),e&&t(p2),e&&t(pu),e&&t(i2),j(Ul,e),e&&t(u2),e&&t(za),e&&t(c2),e&&t(Da),e&&t(h2),j(Gl,e),e&&t(f2),e&&t(Y),e&&t(d2),e&&t(uu),e&&t(m2),e&&t(Bs),j(Ml),e&&t(_2),e&&t(cu),e&&t(v2),e&&t(Aa),e&&t(j2),j(Ll,e),e&&t(w2),e&&t(Ta),e&&t(y2),e&&t(ue),e&&t(g2),e&&t(hu),e&&t(b2),e&&t(Ws),j(Nl),e&&t(q2),e&&t(fu),e&&t(E2),e&&t(Fs),j(Hl),e&&t($2),e&&t(du),e&&t(k2),j(Bl,e),e&&t(P2),e&&t(os),e&&t(z2),e&&t(ls),e&&t(D2),e&&t(_u),e&&t(O2),j(Wl,e),e&&t(A2),e&&t(xa),e&&t(T2),e&&t(Ra),e&&t(S2),e&&t(Vs),j(Vl),e&&t(C2),e&&t(ju),e&&t(x2),j(Yl,e),e&&t(R2),e&&t(wu),e&&t(I2),e&&t(rs),e&&t(U2),e&&t(yu),e&&t(G2),j(Kl,e),e&&t(M2),j(Ua,e),e&&t(L2),e&&t(Ys),j(Jl),e&&t(Z2),e&&t(gu),e&&t(N2),j(Xl,e),e&&t(H2),e&&t(ce),e&&t(B2),e&&t(Ma),e&&t(W2),e&&t(qu),e&&t(F2),j(Ql,e),e&&t(V2),e&&t(La),e&&t(Y2),e&&t(Za),e&&t(K2),e&&t($u),e&&t(J2),e&&t(Ks),j(sr),e&&t(X2),e&&t(ku),e&&t(Q2),j(tr,e),e&&t(eb),e&&t(Z),e&&t(sb),e&&t(zu),e&&t(tb),j(ar,e),e&&t(ab),e&&t(Ha),e&&t(nb),e&&t(Ou),e&&t(ob),e&&t(Js),j(nr),e&&t(lb),e&&t(Au),e&&t(rb),j(or,e),e&&t(pb),e&&t(ps),e&&t(ib),e&&t(Su),e&&t(ub),j(lr,e),e&&t(cb),e&&t(Wa),e&&t(hb),e&&t(xu),e&&t(fb),e&&t(Xs),j(rr),e&&t(db),e&&t(Ru),e&&t(mb),j(pr,e),e&&t(_b),e&&t(is),e&&t(vb),e&&t(Uu),e&&t(jb),j(ir,e),e&&t(wb),e&&t(Va),e&&t(yb),e&&t(Mu),e&&t(gb),e&&t(Qs),j(ur),e&&t(bb),e&&t(Ka),e&&t(qb),e&&t(Lu),e&&t(Eb),e&&t(Ja),e&&t($b),e&&t(O),e&&t(kb),j(cr,e),e&&t(Pb),e&&t(Zu),e&&t(zb),e&&t(Xa),e&&t(Db),e&&t(Nu),e&&t(Ob),e&&t(Hu),e&&t(Ab),e&&t(Bu),e&&t(Tb),j(fr,e),e&&t(Sb),e&&t(us),e&&t(Cb),j(dr,e),e&&t(xb),j(Qa,e),e&&t(Rb),e&&t(en),e&&t(Ib),e&&t(sn),e&&t(Ub),j(mr,e),e&&t(Gb),e&&t(Wu),e&&t(Mb),e&&t(cs),e&&t(Lb),e&&t(Fu),e&&t(Zb),j(_r,e),e&&t(Nb),e&&t(tn),e&&t(Hb),j(vr,e),e&&t(Bb),e&&t(an),e&&t(Wb),e&&t(Vu),e&&t(Fb),e&&t(jr),e&&t(Vb),e&&t(hs),e&&t(Yb),e&&t(Yu),e&&t(Kb),e&&t(et),j(wr),e&&t(Jb),e&&t(Ku),e&&t(Xb),e&&t(Ju),e&&t(Qb),e&&t(Xu),e&&t(e3),e&&t(st),j(yr),e&&t(s3),e&&t(ln),e&&t(t3),j(gr,e),e&&t(a3),e&&t(Qu),e&&t(n3),e&&t(P),e&&t(o3),j(br,e),e&&t(l3),e&&t(rn),e&&t(r3),e&&t(tc),e&&t(p3),e&&t(pn),e&&t(i3),e&&t(he),e&&t(u3),e&&t(tt),j(Er),e&&t(c3),e&&t($r),e&&t(h3),e&&t(cn),e&&t(f3),e&&t(nc),e&&t(d3),j(Pr,e),e&&t(m3),e&&t(fs),e&&t(_3),e&&t(oc),e&&t(v3),e&&t(at),j(zr),e&&t(j3),e&&t(lc),e&&t(w3),e&&t(fn),e&&t(y3),j(Dr,e),e&&t(g3),e&&t(pc),e&&t(b3),e&&t(dn),e&&t(q3),j(Or,e),e&&t(E3),e&&t(ic),e&&t($3),e&&t(uc),e&&t(k3),e&&t(nt),j(Ar),e&&t(P3),e&&t(cc),e&&t(z3),e&&t(hc),e&&t(D3),j(Tr,e),e&&t(O3),e&&t(fc),e&&t(A3),e&&t(dc),e&&t(T3),e&&t(mc),e&&t(S3),e&&t(_c),e&&t(C3),j(Sr,e),e&&t(x3),e&&t(vc),e&&t(R3),e&&t(_n),e&&t(I3),e&&t(ot),j(xr),e&&t(U3),e&&t(jc),e&&t(G3),e&&t(wc),e&&t(M3),e&&t(N),j(Ir),e&&t(L3),e&&t(qc),e&&t(Z3),e&&t(jn),e&&t(N3),e&&t(rt),j(Hr),e&&t(H3),e&&t(pt),j(Br),e&&t(B3),e&&t(H),e&&t(W3),e&&t(it),j(Vr),e&&t(F3),e&&t($c),e&&t(V3),e&&t(kc),e&&t(Y3),j(Yr,e),e&&t(K3),e&&t(bn),e&&t(J3),j(Kr,e),e&&t(X3),e&&t(Pc),e&&t(Q3),e&&t(zc),e&&t(e0),e&&t(ds),e&&t(s0),e&&t(ut),j(Jr),e&&t(t0),e&&t(ms),e&&t(a0),e&&t(ft),j(sp),e&&t(n0),e&&t(fe),e&&t(o0),e&&t($n),e&&t(l0),e&&t(_s),e&&t(r0),e&&t(kn),e&&t(p0),e&&t(Rc),e&&t(i0),j(tp,e),e&&t(u0),e&&t(Ic),e&&t(c0),j(ap,e),e&&t(h0),e&&t(de),e&&t(f0),e&&t(dt),j(op),e&&t(d0),e&&t(ee),j(lp),e&&t(m0),e&&t(mt),j(rp),e&&t(_0),e&&t(Dn),e&&t(v0),e&&t(Zc),e&&t(j0),e&&t(Nc),e&&t(w0),e&&t(Hc),e&&t(y0),e&&t(On),e&&t(g0),j(pp,e),e&&t(b0),e&&t(An),e&&t(q0),j(ip,e),e&&t(E0),e&&t(Bc),e&&t($0),e&&t(_t),j(up),e&&t(k0),e&&t(_e),e&&t(P0),e&&t(Wc),e&&t(z0),e&&t(vs),e&&t(D0),e&&t(js)}}}const RY={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function IY(jt){return OY(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class NY extends kY{constructor(g){super();PY(this,g,IY,xY,zY,{})}}export{NY as default,RY as metadata};
