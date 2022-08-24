import{S as zY,i as DY,s as OY,e as o,k as u,w as f,t as a,M as AY,c as l,d as t,m as c,a as r,x as d,h as n,b as h,G as s,g as i,y as m,q as _,o as v,B as j,v as TY}from"../../chunks/vendor-hf-doc-builder.js";import{T as bU}from"../../chunks/Tip-hf-doc-builder.js";import{D as SY}from"../../chunks/Docstring-hf-doc-builder.js";import{C as w}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as y}from"../../chunks/IconCopyLink-hf-doc-builder.js";function CY(jt){let g,S;return{c(){g=o("p"),S=a("This section is a must-read")},l(b){g=l(b,"P",{});var k=r(g);S=n(k,"This section is a must-read"),k.forEach(t)},m(b,k){i(b,g,k),s(g,S)},d(b){b&&t(g)}}}function xY(jt){let g,S,b,k,X,z,C,Q,x,te,T;return{c(){g=o("p"),S=a("As of "),b=o("code"),k=a("deepspeed==0.6.0"),X=a(" the bf16 support is new and experimental."),z=u(),C=o("p"),Q=a("If you use "),x=o("a"),te=a("gradient accumulation"),T=a(" with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),this.h()},l(q){g=l(q,"P",{});var E=r(g);S=n(E,"As of "),b=l(E,"CODE",{});var gs=r(b);k=n(gs,"deepspeed==0.6.0"),gs.forEach(t),X=n(E," the bf16 support is new and experimental."),E.forEach(t),z=c(q),C=l(q,"P",{});var W=r(C);Q=n(W,"If you use "),x=l(W,"A",{href:!0});var bs=r(x);te=n(bs,"gradient accumulation"),bs.forEach(t),T=n(W," with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),W.forEach(t),this.h()},h(){h(x,"href","#gradient-accumulation")},m(q,E){i(q,g,E),s(g,S),s(g,b),s(b,k),s(g,X),i(q,z,E),i(q,C,E),s(C,Q),s(C,x),s(x,te),s(C,T)},d(q){q&&t(g),q&&t(z),q&&t(C)}}}function RY(jt){let g,S,b,k,X,z,C,Q,x,te,T;return{c(){g=o("p"),S=a("Note, that once "),b=o("code"),k=a("load_state_dict_from_zero_checkpoint"),X=a(" was run, the "),z=o("code"),C=a("model"),Q=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),x=o("code"),te=a("model.load_state_dict(state_dict)"),T=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(q){g=l(q,"P",{});var E=r(g);S=n(E,"Note, that once "),b=l(E,"CODE",{});var gs=r(b);k=n(gs,"load_state_dict_from_zero_checkpoint"),gs.forEach(t),X=n(E," was run, the "),z=l(E,"CODE",{});var W=r(z);C=n(W,"model"),W.forEach(t),Q=n(E,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),x=l(E,"CODE",{});var bs=r(x);te=n(bs,"model.load_state_dict(state_dict)"),bs.forEach(t),T=n(E,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),E.forEach(t)},m(q,E){i(q,g,E),s(g,S),s(g,b),s(b,k),s(g,X),s(g,z),s(z,C),s(g,Q),s(g,x),s(x,te),s(g,T)},d(q){q&&t(g)}}}function IY(jt){let g,S,b,k,X,z,C,Q,x,te,T,q,E,gs,W,bs,c4,yj,R,Mh,h4,f4,Lh,d4,m4,Zh,_4,v4,Nh,j4,w4,Hh,y4,g4,Bh,b4,gj,Te,q4,Kn,E4,$4,Jn,k4,P4,bj,kp,z4,qj,Pp,D4,Ej,wt,O4,Xn,A4,T4,$j,yt,Qn,S4,zp,C4,x4,R4,F,I4,Dp,U4,G4,Wh,M4,L4,Fh,Z4,N4,Vh,H4,B4,Op,W4,F4,kj,Ap,V4,Pj,Tp,Y4,zj,Sp,Yh,K4,Dj,Cp,J4,Oj,xp,eo,X4,Rp,Q4,e6,Aj,Ip,s6,Tj,Up,Sj,qs,gt,Kh,so,t6,Jh,a6,Cj,Gp,xj,Es,bt,Xh,to,n6,Qh,o6,Rj,Mp,l6,Ij,ao,Uj,Se,r6,ef,p6,i6,sf,u6,c6,Gj,no,Mj,Ce,h6,oo,f6,d6,lo,m6,_6,Lj,qt,v6,Lp,j6,w6,Zj,Zp,y6,Nj,Np,g6,Hj,ro,Bj,xe,b6,tf,q6,E6,af,$6,k6,Wj,Et,P6,nf,z6,D6,Fj,po,Vj,ke,O6,of,A6,T6,lf,S6,C6,rf,x6,Yj,Hp,R6,Kj,io,Jj,Re,I6,pf,U6,G6,uf,M6,L6,Xj,$t,Z6,cf,N6,H6,Qj,Ie,B6,hf,W6,F6,uo,V6,Y6,ew,Bp,K6,sw,co,tw,Wp,J6,aw,ho,nw,Fp,X6,ow,fo,lw,kt,Q6,ff,e$,s$,rw,Pt,t$,df,a$,n$,pw,zt,o$,mo,l$,r$,iw,Vp,uw,$s,Dt,mf,_o,p$,_f,i$,cw,Ot,u$,Yp,c$,h$,hw,At,ks,f$,vf,d$,m$,jf,_$,v$,j$,Pe,w$,wf,y$,g$,yf,b$,q$,vo,E$,$$,fw,Kp,k$,dw,jo,mw,Jp,P$,_w,wo,vw,I,z$,gf,D$,O$,bf,A$,T$,qf,S$,C$,Ef,x$,R$,yo,I$,U$,jw,ae,G$,$f,M$,L$,kf,Z$,N$,Pf,H$,B$,ww,Tt,W$,zf,F$,V$,yw,go,gw,St,Y$,Df,K$,J$,bw,Ct,X$,bo,Q$,e5,qw,Xp,Ew,Ps,xt,Of,qo,s5,Af,t5,$w,Rt,a5,Qp,n5,o5,kw,Eo,Pw,Ue,l5,Tf,r5,p5,$o,i5,u5,zw,ei,c5,Dw,It,Sf,h5,f5,Cf,d5,Ow,si,m5,Aw,ko,Tw,ti,_5,Sw,Ut,v5,Po,j5,w5,Cw,ai,y5,xw,ni,g5,Rw,oi,zs,zo,b5,xf,q5,E5,$5,Do,k5,Rf,P5,Iw,li,Uw,Ds,Gt,If,Oo,z5,Uf,D5,Gw,Mt,O5,Gf,A5,T5,Mw,ri,S5,Lw,Ao,Zw,Lt,C5,Mf,x5,R5,Nw,pi,I5,Hw,ii,U5,Bw,To,Ww,Ge,G5,Lf,M5,L5,Zf,Z5,N5,Fw,So,Vw,Zt,H5,Nf,B5,W5,Yw,Co,Kw,ui,F5,Jw,Nt,V5,Hf,Y5,K5,Xw,ci,Qw,Os,Ht,Bf,xo,J5,Wf,X5,ey,Bt,Q5,Ro,e8,s8,sy,Wt,t8,Io,a8,n8,ty,Uo,ay,Ft,o8,Ff,l8,r8,ny,Go,oy,Vt,p8,Mo,i8,u8,ly,hi,c8,ry,ne,h8,Vf,f8,d8,Yf,m8,_8,Kf,v8,j8,py,Lo,iy,Yt,w8,fi,y8,g8,uy,di,cy,As,Kt,Jf,Zo,b8,Xf,q8,hy,U,E8,mi,$8,k8,_i,P8,z8,Qf,D8,O8,ed,A8,T8,vi,S8,C8,fy,ji,x8,dy,No,my,wi,R8,_y,Ho,vy,yi,jy,Ts,Jt,sd,Bo,I8,td,U8,wy,Xt,yy,Me,G8,gi,M8,L8,bi,Z8,N8,gy,Qt,H8,qi,B8,W8,by,Le,F8,ad,V8,Y8,Ei,K8,J8,qy,$i,X8,Ey,ea,Q8,ki,ek,sk,$y,sa,nd,tk,ak,Wo,nk,Pi,ok,lk,ky,oe,rk,od,pk,ik,zi,uk,ck,ld,hk,fk,Py,Di,zy,Ss,ta,rd,Fo,dk,pd,mk,Dy,Vo,Yo,_k,vk,Oy,Ze,jk,id,wk,yk,Ko,gk,bk,Ay,aa,qk,Oi,Ek,$k,Ty,Ai,kk,Sy,Ti,Cy,Cs,na,ud,Jo,Pk,cd,zk,xy,Si,Dk,Ry,Xo,Iy,Ci,hd,Ok,Uy,Ne,xs,Ak,fd,Tk,Sk,dd,Ck,xk,Rk,G,md,Ik,Uk,_d,Gk,Mk,vd,Lk,Zk,jd,Nk,Hk,wd,Bk,Wk,yd,Fk,Vk,Yk,gd,Kk,Gy,He,Jk,bd,Xk,Qk,qd,e7,s7,My,Qo,Ly,xi,t7,Zy,Ri,Ny,Rs,oa,Ed,el,a7,$d,n7,Hy,Ii,o7,By,sl,Wy,V,l7,kd,r7,p7,Pd,i7,u7,zd,c7,h7,Dd,f7,d7,Fy,Be,m7,Od,_7,v7,Ad,j7,w7,Vy,Ui,Td,y7,Yy,la,tl,Sd,g7,b7,Cd,q7,E7,al,xd,$7,k7,Rd,P7,Ky,M,z7,Id,D7,O7,Ud,A7,T7,Gd,S7,C7,Md,x7,R7,Ld,I7,U7,Jy,ze,Zd,G7,M7,Nd,L7,Z7,Hd,N7,H7,Xy,Gi,B7,Qy,We,nl,Bd,W7,F7,Wd,V7,Y7,ol,Fd,K7,J7,Vd,X7,Q7,ll,Yd,e9,s9,Kd,t9,eg,Fe,a9,Jd,n9,o9,Mi,l9,r9,sg,rl,Xd,p9,i9,tg,le,u9,Qd,c9,h9,em,f9,d9,sm,m9,_9,ag,Li,pl,tm,v9,j9,am,w9,ng,De,nm,y9,g9,om,b9,q9,lm,E9,$9,og,Ve,k9,rm,P9,z9,pm,D9,O9,lg,ra,il,A9,im,T9,S9,C9,ul,x9,um,R9,I9,rg,Zi,pg,Is,pa,cm,cl,U9,hm,G9,ig,Ni,M9,ug,Hi,L9,cg,hl,hg,ia,Z9,fm,N9,H9,fg,Ye,B9,fl,W9,F9,dl,V9,Y9,dg,ua,K9,dm,J9,X9,mg,Ke,Q9,mm,eP,sP,ml,tP,aP,_g,Bi,vg,Us,ca,_m,_l,nP,vm,oP,jg,Wi,lP,wg,Fi,rP,yg,ha,Gs,pP,jm,iP,uP,wm,cP,hP,fP,vl,dP,ym,mP,_P,gg,Je,vP,gm,jP,wP,bm,yP,gP,bg,Vi,qg,Ms,fa,qm,jl,bP,Em,qP,Eg,da,EP,$m,$P,kP,$g,wl,kg,ma,PP,km,zP,DP,Pg,yl,zg,Yi,Dg,Ls,_a,Pm,gl,OP,zm,AP,Og,va,TP,Dm,SP,CP,Ag,bl,Tg,ja,xP,Om,RP,IP,Sg,ql,Cg,Zs,wa,Am,El,UP,Tm,GP,xg,ya,MP,Sm,LP,ZP,Rg,Ki,NP,Ig,ga,HP,Cm,BP,WP,Ug,Ji,Gg,Ns,ba,xm,$l,FP,Rm,VP,Mg,Xe,YP,Im,KP,JP,kl,XP,QP,Lg,$,ez,Um,sz,tz,Xi,az,nz,Gm,oz,lz,Mm,rz,pz,Lm,iz,uz,Zm,cz,hz,Nm,fz,dz,Hm,mz,_z,Zg,Qe,vz,Bm,jz,wz,Wm,yz,gz,Ng,Pl,Hg,Qi,bz,Bg,re,zl,Fm,qz,Ez,Vm,$z,kz,Dl,Ym,Pz,zz,Km,Dz,Oz,Ol,Jm,Az,Tz,Xm,Sz,Cz,Al,Qm,xz,Rz,e_,Iz,Wg,eu,Uz,Fg,su,Gz,Vg,Tl,Yg,qa,Mz,tu,Lz,Zz,Kg,au,Nz,Jg,Sl,Xg,pe,Hz,s_,Bz,Wz,t_,Fz,Vz,a_,Yz,Kz,Qg,nu,e2,Hs,Ea,n_,Cl,Jz,o_,Xz,s2,L,Qz,l_,eD,sD,r_,tD,aD,p_,nD,oD,i_,lD,rD,xl,pD,iD,t2,ou,uD,a2,$a,Rl,u_,cD,hD,c_,fD,dD,es,h_,mD,_D,f_,vD,jD,d_,wD,yD,n2,D,gD,m_,bD,qD,lu,ED,$D,__,kD,PD,v_,zD,DD,j_,OD,AD,w_,TD,SD,o2,ss,CD,y_,xD,RD,g_,ID,UD,l2,Il,r2,ts,GD,b_,MD,LD,ru,ZD,ND,p2,ie,ka,q_,HD,BD,E_,WD,FD,VD,Pa,$_,YD,KD,k_,JD,XD,QD,as,P_,eO,sO,z_,tO,aO,D_,nO,oO,lO,ns,O_,rO,pO,A_,iO,uO,T_,cO,hO,i2,pu,fO,u2,Ul,c2,za,dO,iu,mO,_O,h2,Da,vO,S_,jO,wO,f2,Gl,d2,Y,yO,C_,gO,bO,x_,qO,EO,R_,$O,kO,I_,PO,zO,m2,uu,_2,Bs,Oa,U_,Ml,DO,G_,OO,v2,cu,AO,j2,Aa,TO,M_,SO,CO,w2,Ll,y2,Ta,xO,Zl,RO,IO,g2,ue,UO,L_,GO,MO,Z_,LO,ZO,N_,NO,HO,b2,hu,q2,Ws,Sa,H_,Nl,BO,B_,WO,E2,fu,FO,$2,Fs,Ca,W_,Hl,VO,F_,YO,k2,du,KO,P2,Bl,z2,os,JO,mu,XO,QO,V_,eA,sA,D2,ls,tA,Y_,aA,nA,K_,oA,lA,O2,_u,rA,A2,Wl,T2,xa,pA,vu,iA,uA,S2,Ra,cA,Fl,hA,fA,C2,Vs,Ia,J_,Vl,dA,X_,mA,x2,ju,_A,R2,Yl,I2,wu,vA,U2,rs,jA,Q_,wA,yA,e1,gA,bA,G2,yu,qA,M2,Kl,L2,Ua,Z2,Ys,Ga,s1,Jl,EA,t1,$A,N2,gu,kA,H2,Xl,B2,ce,PA,bu,zA,DA,a1,OA,AA,n1,TA,SA,W2,Ma,CA,o1,xA,RA,F2,qu,IA,V2,Ql,Y2,La,UA,Eu,GA,MA,K2,Za,LA,er,ZA,NA,J2,$u,X2,Ks,Na,l1,sr,HA,r1,BA,Q2,ku,WA,eb,tr,sb,Z,FA,Pu,VA,YA,p1,KA,JA,i1,XA,QA,u1,eT,sT,c1,tT,aT,tb,zu,nT,ab,ar,nb,Ha,oT,Du,lT,rT,ob,Ou,lb,Js,Ba,h1,nr,pT,f1,iT,rb,Au,uT,pb,or,ib,ps,cT,Tu,hT,fT,d1,dT,mT,ub,Su,_T,cb,lr,hb,Wa,vT,Cu,jT,wT,fb,xu,db,Xs,Fa,m1,rr,yT,_1,gT,mb,Ru,bT,_b,pr,vb,is,qT,Iu,ET,$T,v1,kT,PT,jb,Uu,zT,wb,ir,yb,Va,DT,Gu,OT,AT,gb,Mu,bb,Qs,Ya,j1,ur,TT,w1,ST,qb,Ka,CT,y1,xT,RT,Eb,Lu,g1,IT,$b,Ja,UT,b1,GT,MT,kb,O,LT,q1,ZT,NT,E1,HT,BT,$1,WT,FT,k1,VT,YT,P1,KT,JT,z1,XT,QT,Pb,cr,zb,Zu,D1,eS,Db,Xa,sS,hr,tS,aS,Ob,Nu,O1,nS,Ab,Hu,oS,Tb,Bu,lS,Sb,fr,Cb,us,rS,A1,pS,iS,T1,uS,cS,xb,dr,Rb,Qa,Ib,en,hS,S1,fS,dS,Ub,sn,mS,C1,_S,vS,Gb,mr,Mb,Wu,x1,jS,Lb,cs,wS,R1,yS,gS,I1,bS,qS,Zb,Fu,ES,Nb,_r,Hb,tn,$S,U1,kS,PS,Bb,vr,Wb,an,zS,G1,DS,OS,Fb,Vu,AS,Vb,jr,M1,TS,SS,Yb,hs,CS,L1,xS,RS,Z1,IS,US,Kb,Yu,GS,Jb,et,nn,N1,wr,MS,H1,LS,Xb,Ku,ZS,Qb,Ju,NS,e3,Xu,HS,s3,st,on,B1,yr,BS,W1,WS,t3,ln,FS,F1,VS,YS,a3,gr,n3,Qu,KS,o3,P,JS,V1,XS,QS,Y1,eC,sC,K1,tC,aC,ec,nC,oC,sc,lC,rC,J1,pC,iC,X1,uC,cC,l3,br,r3,rn,hC,Q1,fC,dC,p3,tc,mC,i3,pn,_C,qr,vC,jC,u3,he,wC,ev,yC,gC,sv,bC,qC,ac,EC,$C,c3,tt,un,tv,Er,kC,av,PC,h3,$r,zC,kr,DC,f3,cn,OC,nv,AC,TC,d3,nc,SC,m3,Pr,_3,fs,CC,ov,xC,RC,lv,IC,UC,v3,oc,j3,at,hn,rv,zr,GC,pv,MC,w3,lc,LC,y3,fn,ZC,rc,NC,HC,g3,Dr,b3,pc,BC,q3,dn,WC,iv,FC,VC,E3,Or,$3,ic,YC,k3,uc,KC,P3,nt,mn,uv,Ar,JC,cv,XC,z3,cc,QC,D3,hc,ex,O3,Tr,A3,fc,sx,T3,dc,tx,S3,mc,ax,C3,_c,nx,x3,Sr,R3,vc,ox,I3,_n,lx,Cr,rx,px,U3,ot,vn,hv,xr,ix,fv,ux,G3,jc,cx,M3,wc,hx,L3,N,dv,mv,fx,dx,_v,Oe,mx,yc,_x,vx,gc,jx,wx,bc,yx,gx,bx,Rr,vv,qx,Ex,Ir,$x,jv,Ur,kx,Gr,Px,zx,Dx,wv,yv,Ox,Ax,gv,Mr,Tx,Lr,Sx,Cx,Z3,qc,xx,N3,jn,lt,bv,Rx,Ix,qv,Ux,Gx,Ev,Mx,Lx,$v,Zr,Zx,Nr,Nx,Hx,H3,rt,wn,kv,Hr,Bx,Pv,Wx,B3,pt,yn,zv,Br,Fx,Wr,Vx,Dv,Yx,Kx,W3,H,Jx,Ov,Xx,Qx,Av,eR,sR,Tv,tR,aR,Sv,nR,oR,Fr,lR,rR,F3,it,gn,Cv,Vr,pR,Ec,iR,xv,uR,V3,$c,cR,Y3,kc,hR,K3,Yr,J3,bn,fR,Rv,dR,mR,X3,Kr,Q3,Pc,_R,e0,zc,vR,s0,ds,jR,Iv,wR,yR,Uv,gR,bR,t0,ut,qn,Gv,Jr,qR,Mv,ER,a0,ms,ct,$R,Dc,kR,PR,Lv,zR,DR,OR,Xr,AR,Qr,TR,SR,CR,ht,xR,Oc,RR,IR,ep,UR,GR,n0,Ac,o0,ft,En,Zv,sp,MR,Nv,LR,l0,fe,ZR,Tc,NR,HR,Sc,BR,WR,Hv,FR,VR,r0,$n,YR,Cc,KR,JR,p0,_s,XR,xc,QR,eI,Rc,sI,tI,i0,kn,aI,Bv,nI,oI,u0,Ic,lI,c0,tp,h0,Uc,rI,f0,ap,d0,de,pI,Gc,iI,uI,np,cI,hI,Wv,fI,dI,m0,dt,Pn,Fv,op,mI,Vv,_I,_0,ee,lp,vI,Yv,jI,wI,Ae,yI,Kv,gI,bI,Jv,qI,EI,Xv,$I,kI,PI,me,Mc,zI,DI,Qv,OI,AI,Lc,TI,SI,ej,CI,xI,v0,mt,zn,sj,rp,RI,tj,II,j0,Dn,UI,Zc,GI,MI,w0,Nc,LI,y0,Hc,ZI,g0,Bc,NI,b0,On,aj,HI,BI,nj,WI,q0,pp,E0,An,FI,oj,VI,YI,$0,ip,k0,Wc,KI,P0,_t,Tn,lj,up,JI,rj,XI,z0,_e,pj,cp,QI,eU,ij,hp,sU,tU,uj,fp,aU,nU,cj,dp,oU,D0,Fc,lU,O0,vs,hj,mp,rU,pU,fj,_p,iU,uU,dj,vp,cU,A0,js,hU,Vc,fU,dU,jp,mU,_U,T0;return z=new y({}),so=new y({}),to=new y({}),ao=new w({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),no=new w({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),ro=new w({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
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
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Bo=new y({}),Xt=new bU({props:{warning:!0,$$slots:{default:[CY]},$$scope:{ctx:jt}}}),Fo=new y({}),Jo=new y({}),Xo=new w({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ua=new bU({props:{$$slots:{default:[xY]},$$scope:{ctx:jt}}}),Jl=new y({}),Xl=new w({props:{code:`"amp": {
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
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Qa=new bU({props:{$$slots:{default:[RY]},$$scope:{ctx:jt}}}),mr=new w({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),op=new y({}),lp=new SY({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/deepspeed.py#L45"}}),rp=new y({}),pp=new w({props:{code:`#!/usr/bin/env python

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
  <span class="hljs-keyword">out</span>=negative`}}),up=new y({}),{c(){g=o("meta"),S=u(),b=o("h1"),k=o("a"),X=o("span"),f(z.$$.fragment),C=u(),Q=o("span"),x=a("DeepSpeed Integration"),te=u(),T=o("p"),q=o("a"),E=a("DeepSpeed"),gs=a(" implements everything described in the "),W=o("a"),bs=a("ZeRO paper"),c4=a(". Currently it provides full support for:"),yj=u(),R=o("ol"),Mh=o("li"),h4=a("Optimizer state partitioning (ZeRO stage 1)"),f4=u(),Lh=o("li"),d4=a("Gradient partitioning (ZeRO stage 2)"),m4=u(),Zh=o("li"),_4=a("Parameter partitioning (ZeRO stage 3)"),v4=u(),Nh=o("li"),j4=a("Custom mixed precision training handling"),w4=u(),Hh=o("li"),y4=a("A range of fast CUDA-extension-based optimizers"),g4=u(),Bh=o("li"),b4=a("ZeRO-Offload to CPU and NVMe"),gj=u(),Te=o("p"),q4=a("ZeRO-Offload has its own dedicated paper: "),Kn=o("a"),E4=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),$4=a(". And NVMe-support is described in the paper "),Jn=o("a"),k4=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),P4=a("."),bj=u(),kp=o("p"),z4=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),qj=u(),Pp=o("p"),D4=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Ej=u(),wt=o("p"),O4=a("\u{1F917} Transformers integrates "),Xn=o("a"),A4=a("DeepSpeed"),T4=a(" via 2 options:"),$j=u(),yt=o("ol"),Qn=o("li"),S4=a("Integration of the core DeepSpeed features via "),zp=o("a"),C4=a("Trainer"),x4=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),R4=u(),F=o("li"),I4=a("If you don\u2019t use "),Dp=o("a"),U4=a("Trainer"),G4=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wh=o("code"),M4=a("from_pretrained"),L4=a(" and "),Fh=o("code"),Z4=a("from_config"),N4=a(` include integration of essential
parts of DeepSpeed like `),Vh=o("code"),H4=a("zero.Init"),B4=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Op=o("a"),W4=a("deepspeed-non-trainer-integration"),F4=a("."),kj=u(),Ap=o("p"),V4=a("What is integrated:"),Pj=u(),Tp=o("p"),Y4=a("Training:"),zj=u(),Sp=o("ol"),Yh=o("li"),K4=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Dj=u(),Cp=o("p"),J4=a("Inference:"),Oj=u(),xp=o("ol"),eo=o("li"),X4=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Rp=o("a"),Q4=a("deepspeed-zero-inference"),e6=a("."),Aj=u(),Ip=o("p"),s6=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),Tj=u(),Up=o("a"),Sj=u(),qs=o("h2"),gt=o("a"),Kh=o("span"),f(so.$$.fragment),t6=u(),Jh=o("span"),a6=a("Trainer Deepspeed Integration"),Cj=u(),Gp=o("a"),xj=u(),Es=o("h3"),bt=o("a"),Xh=o("span"),f(to.$$.fragment),n6=u(),Qh=o("span"),o6=a("Installation"),Rj=u(),Mp=o("p"),l6=a("Install the library via pypi:"),Ij=u(),f(ao.$$.fragment),Uj=u(),Se=o("p"),r6=a("or via "),ef=o("code"),p6=a("transformers"),i6=a("\u2019 "),sf=o("code"),u6=a("extras"),c6=a(":"),Gj=u(),f(no.$$.fragment),Mj=u(),Ce=o("p"),h6=a("or find more details on "),oo=o("a"),f6=a("the DeepSpeed\u2019s GitHub page"),d6=a(` and
`),lo=o("a"),m6=a("advanced install"),_6=a("."),Lj=u(),qt=o("p"),v6=a("If you\u2019re still struggling with the build, first make sure to read "),Lp=o("a"),j6=a("zero-install-notes"),w6=a("."),Zj=u(),Zp=o("p"),y6=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),Nj=u(),Np=o("p"),g6=a("To make a local build for DeepSpeed:"),Hj=u(),f(ro.$$.fragment),Bj=u(),xe=o("p"),b6=a("If you intend to use NVMe offload you will also need to include "),tf=o("code"),q6=a("DS_BUILD_AIO=1"),E6=a(` in the instructions above (and also
install `),af=o("em"),$6=a("libaio-dev"),k6=a(" system-wide)."),Wj=u(),Et=o("p"),P6=a("Edit "),nf=o("code"),z6=a("TORCH_CUDA_ARCH_LIST"),D6=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),Fj=u(),f(po.$$.fragment),Vj=u(),ke=o("p"),O6=a("So if you get "),of=o("code"),A6=a("8, 6"),T6=a(", then use "),lf=o("code"),S6=a('TORCH_CUDA_ARCH_LIST="8.6"'),C6=a(`. If you have multiple different cards, you can list all
of them like so `),rf=o("code"),x6=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),Yj=u(),Hp=o("p"),R6=a("If you need to use the same setup on multiple machines, make a binary wheel:"),Kj=u(),f(io.$$.fragment),Jj=u(),Re=o("p"),I6=a("it will generate something like "),pf=o("code"),U6=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),G6=a(` which now you can install
as `),uf=o("code"),M6=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),L6=a(" locally or on any other machine."),Xj=u(),$t=o("p"),Z6=a("Again, remember to ensure to adjust "),cf=o("code"),N6=a("TORCH_CUDA_ARCH_LIST"),H6=a(" to the target architectures."),Qj=u(),Ie=o("p"),B6=a("You can find the complete list of NVIDIA GPUs and their corresponding "),hf=o("strong"),W6=a("Compute Capabilities"),F6=a(` (same as arch in this
context) `),uo=o("a"),V6=a("here"),Y6=a("."),ew=u(),Bp=o("p"),K6=a("You can check the archs pytorch was built with using:"),sw=u(),f(co.$$.fragment),tw=u(),Wp=o("p"),J6=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),aw=u(),f(ho.$$.fragment),nw=u(),Fp=o("p"),X6=a("If the output is:"),ow=u(),f(fo.$$.fragment),lw=u(),kt=o("p"),Q6=a("then you know that this card\u2019s arch is "),ff=o("code"),e$=a("8.6"),s$=a("."),rw=u(),Pt=o("p"),t$=a("You can also leave "),df=o("code"),a$=a("TORCH_CUDA_ARCH_LIST"),n$=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),pw=u(),zt=o("p"),o$=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),mo=o("a"),l$=a("Deepspeed"),r$=a(","),iw=u(),Vp=o("a"),uw=u(),$s=o("h3"),Dt=o("a"),mf=o("span"),f(_o.$$.fragment),p$=u(),_f=o("span"),i$=a("Deployment with multiple GPUs"),cw=u(),Ot=o("p"),u$=a("To deploy this feature with multiple GPUs adjust the "),Yp=o("a"),c$=a("Trainer"),h$=a(` command line arguments as
following:`),hw=u(),At=o("ol"),ks=o("li"),f$=a("replace "),vf=o("code"),d$=a("python -m torch.distributed.launch"),m$=a(" with "),jf=o("code"),_$=a("deepspeed"),v$=a("."),j$=u(),Pe=o("li"),w$=a("add a new argument "),wf=o("code"),y$=a("--deepspeed ds_config.json"),g$=a(", where "),yf=o("code"),b$=a("ds_config.json"),q$=a(` is the DeepSpeed configuration file as
documented `),vo=o("a"),E$=a("here"),$$=a(". The file naming is up to you."),fw=u(),Kp=o("p"),k$=a("Therefore, if your original command line looked as follows:"),dw=u(),f(jo.$$.fragment),mw=u(),Jp=o("p"),P$=a("Now it should be:"),_w=u(),f(wo.$$.fragment),vw=u(),I=o("p"),z$=a("Unlike, "),gf=o("code"),D$=a("torch.distributed.launch"),O$=a(" where you have to specify how many GPUs to use with "),bf=o("code"),A$=a("--nproc_per_node"),T$=a(`, with the
`),qf=o("code"),S$=a("deepspeed"),C$=a(" launcher you don\u2019t have to use the corresponding "),Ef=o("code"),x$=a("--num_gpus"),R$=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),yo=o("a"),I$=a("here"),U$=a("."),jw=u(),ae=o("p"),G$=a("In fact, you can continue using "),$f=o("code"),M$=a("-m torch.distributed.launch"),L$=a(` with DeepSpeed as long as you don\u2019t need to use
`),kf=o("code"),Z$=a("deepspeed"),N$=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Pf=o("code"),H$=a("deepspeed"),B$=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),ww=u(),Tt=o("p"),W$=a("Here is an example of running "),zf=o("code"),F$=a("run_translation.py"),V$=a(" under DeepSpeed deploying all available GPUs:"),yw=u(),f(go.$$.fragment),gw=u(),St=o("p"),Y$=a("Note that in the DeepSpeed documentation you are likely to see "),Df=o("code"),K$=a("--deepspeed --deepspeed_config ds_config.json"),J$=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),bw=u(),Ct=o("p"),X$=a("For some practical usage examples, please, see this "),bo=o("a"),Q$=a("post"),e5=a("."),qw=u(),Xp=o("a"),Ew=u(),Ps=o("h3"),xt=o("a"),Of=o("span"),f(qo.$$.fragment),s5=u(),Af=o("span"),t5=a("Deployment with one GPU"),$w=u(),Rt=o("p"),a5=a("To deploy DeepSpeed with one GPU adjust the "),Qp=o("a"),n5=a("Trainer"),o5=a(" command line arguments as follows:"),kw=u(),f(Eo.$$.fragment),Pw=u(),Ue=o("p"),l5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Tf=o("code"),r5=a("--num_gpus=1"),p5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),$o=o("a"),i5=a("documentation"),u5=a(" discusses the launcher options."),zw=u(),ei=o("p"),c5=a("Why would you want to use DeepSpeed with just one GPU?"),Dw=u(),It=o("ol"),Sf=o("li"),h5=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),f5=u(),Cf=o("li"),d5=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),Ow=u(),si=o("p"),m5=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),Aw=u(),f(ko.$$.fragment),Tw=u(),ti=o("p"),_5=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),Sw=u(),Ut=o("p"),v5=a("For a practical usage example of this type of deployment, please, see this "),Po=o("a"),j5=a("post"),w5=a("."),Cw=u(),ai=o("p"),y5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),xw=u(),ni=o("p"),g5=a("Notes:"),Rw=u(),oi=o("ul"),zs=o("li"),zo=o("p"),b5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),xf=o("code"),q5=a("CUDA_VISIBLE_DEVICES"),E5=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),$5=u(),f(Do.$$.fragment),k5=u(),Rf=o("p"),P5=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),Iw=u(),li=o("a"),Uw=u(),Ds=o("h3"),Gt=o("a"),If=o("span"),f(Oo.$$.fragment),z5=u(),Uf=o("span"),D5=a("Deployment in Notebooks"),Gw=u(),Mt=o("p"),O5=a("The problem with running notebook cells as a script is that there is no normal "),Gf=o("code"),A5=a("deepspeed"),T5=a(` launcher to rely on, so
under certain setups we have to emulate it.`),Mw=u(),ri=o("p"),S5=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),Lw=u(),f(Ao.$$.fragment),Zw=u(),Lt=o("p"),C5=a("Note: "),Mf=o("code"),x5=a("..."),R5=a(" stands for the normal arguments that you\u2019d pass to the functions."),Nw=u(),pi=o("p"),I5=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),Hw=u(),ii=o("p"),U5=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),Bw=u(),f(To.$$.fragment),Ww=u(),Ge=o("p"),G5=a("If the training script is in a normal file and not in the notebook cells, you can launch "),Lf=o("code"),M5=a("deepspeed"),L5=a(` normally via
shell from a cell. For example, to use `),Zf=o("code"),Z5=a("run_translation.py"),N5=a(" you would launch it with:"),Fw=u(),f(So.$$.fragment),Vw=u(),Zt=o("p"),H5=a("or with "),Nf=o("code"),B5=a("%%bash"),W5=a(" magic, where you can write a multi-line code for the shell program to run:"),Yw=u(),f(Co.$$.fragment),Kw=u(),ui=o("p"),F5=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Jw=u(),Nt=o("p"),V5=a("Note: While "),Hf=o("code"),Y5=a("%%bash"),K5=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Xw=u(),ci=o("a"),Qw=u(),Os=o("h3"),Ht=o("a"),Bf=o("span"),f(xo.$$.fragment),J5=u(),Wf=o("span"),X5=a("Configuration"),ey=u(),Bt=o("p"),Q5=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Ro=o("a"),e8=a("following documentation"),s8=a("."),sy=u(),Wt=o("p"),t8=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Io=o("a"),a8=a(`the DeepSpeedExamples
repo`),n8=a(":"),ty=u(),f(Uo.$$.fragment),ay=u(),Ft=o("p"),o8=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Ff=o("code"),l8=a(".json"),r8=a(" files with:"),ny=u(),f(Go.$$.fragment),oy=u(),Vt=o("p"),p8=a("Some more examples are to be found in the "),Mo=o("a"),i8=a("main repo"),u8=a(" as well."),ly=u(),hi=o("p"),c8=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),ry=u(),ne=o("p"),h8=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Vf=o("code"),f8=a("AdamW"),d8=a(" optimizer and "),Yf=o("code"),m8=a("WarmupLR"),_8=a(` scheduler and will enable mixed
precision training if `),Kf=o("code"),v8=a("--fp16"),j8=a(" is passed:"),py=u(),f(Lo.$$.fragment),iy=u(),Yt=o("p"),w8=a("When you execute the program, DeepSpeed will log the configuration it received from the "),fi=o("a"),y8=a("Trainer"),g8=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),uy=u(),di=o("a"),cy=u(),As=o("h3"),Kt=o("a"),Jf=o("span"),f(Zo.$$.fragment),b8=u(),Xf=o("span"),q8=a("Passing Configuration"),hy=u(),U=o("p"),E8=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),mi=o("a"),$8=a("Trainer"),k8=a(" via "),_i=o("a"),P8=a("TrainingArguments"),z8=a(" then for the "),Qf=o("code"),D8=a("deepspeed"),O8=a(` argument you can
pass a nested `),ed=o("code"),A8=a("dict"),T8=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),vi=o("a"),S8=a("TrainingArguments"),C8=a("."),fy=u(),ji=o("p"),x8=a("To summarize you can do:"),dy=u(),f(No.$$.fragment),my=u(),wi=o("p"),R8=a("or:"),_y=u(),f(Ho.$$.fragment),vy=u(),yi=o("a"),jy=u(),Ts=o("h3"),Jt=o("a"),sd=o("span"),f(Bo.$$.fragment),I8=u(),td=o("span"),U8=a("Shared Configuration"),wy=u(),f(Xt.$$.fragment),yy=u(),Me=o("p"),G8=a("Some configuration values are required by both the "),gi=o("a"),M8=a("Trainer"),L8=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),bi=o("a"),Z8=a("Trainer"),N8=a(" command line arguments."),gy=u(),Qt=o("p"),H8=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),qi=o("a"),B8=a("Trainer"),W8=a(` do the majority
of configuration for you.`),by=u(),Le=o("p"),F8=a("Therefore, in the rest of this guide you will find a special configuration value: "),ad=o("code"),V8=a("auto"),Y8=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ei=o("a"),K8=a("Trainer"),J8=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),qy=u(),$i=o("p"),X8=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),Ey=u(),ea=o("p"),Q8=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ki=o("a"),ek=a("TrainingArguments"),sk=a(" based on that. The steps are:"),$y=u(),sa=o("ol"),nd=o("li"),tk=a("Create or load the DeepSpeed configuration to be used as a master configuration"),ak=u(),Wo=o("li"),nk=a("Create the "),Pi=o("a"),ok=a("TrainingArguments"),lk=a(" object based on these values"),ky=u(),oe=o("p"),rk=a("Do note that some values, such as "),od=o("code"),pk=a("scheduler.params.total_num_steps"),ik=a(` are calculated by
`),zi=o("a"),uk=a("Trainer"),ck=a(" during "),ld=o("code"),hk=a("train"),fk=a(", but you can of course do the math yourself."),Py=u(),Di=o("a"),zy=u(),Ss=o("h3"),ta=o("a"),rd=o("span"),f(Fo.$$.fragment),dk=u(),pd=o("span"),mk=a("ZeRO"),Dy=u(),Vo=o("p"),Yo=o("a"),_k=a("Zero Redundancy Optimizer (ZeRO)"),vk=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Oy=u(),Ze=o("p"),jk=a("The "),id=o("code"),wk=a("zero_optimization"),yk=a(" section of the configuration file is the most important part ("),Ko=o("a"),gk=a("docs"),bk=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),Ay=u(),aa=o("p"),qk=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Oi=o("a"),Ek=a("Trainer"),$k=a(` provides
no equivalent command line arguments.`),Ty=u(),Ai=o("p"),kk=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),Sy=u(),Ti=o("a"),Cy=u(),Cs=o("h4"),na=o("a"),ud=o("span"),f(Jo.$$.fragment),Pk=u(),cd=o("span"),zk=a("ZeRO-2 Config"),xy=u(),Si=o("p"),Dk=a("The following is an example of configuration for ZeRO stage 2:"),Ry=u(),f(Xo.$$.fragment),Iy=u(),Ci=o("p"),hd=o("strong"),Ok=a("Performance tuning:"),Uy=u(),Ne=o("ul"),xs=o("li"),Ak=a("enabling "),fd=o("code"),Tk=a("offload_optimizer"),Sk=a(" should reduce GPU RAM usage (it requires "),dd=o("code"),Ck=a('"stage": 2'),xk=a(")"),Rk=u(),G=o("li"),md=o("code"),Ik=a('"overlap_comm": true'),Uk=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),_d=o("code"),Gk=a("overlap_comm"),Mk=a(` uses 4.5x
the `),vd=o("code"),Lk=a("allgather_bucket_size"),Zk=a(" and "),jd=o("code"),Nk=a("reduce_bucket_size"),Hk=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),wd=o("code"),Bk=a("5e8 x 2Bytes x 2 x 4.5"),Wk=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),yd=o("code"),Fk=a("2e8"),Vk=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),Yk=u(),gd=o("li"),Kk=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),Gy=u(),He=o("p"),Jk=a("Additionally, "),bd=o("code"),Xk=a("deepspeed==0.4.4"),Qk=a(" added a new option "),qd=o("code"),e7=a("round_robin_gradients"),s7=a(" which you can enable with:"),My=u(),f(Qo.$$.fragment),Ly=u(),xi=o("p"),t7=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),Zy=u(),Ri=o("a"),Ny=u(),Rs=o("h4"),oa=o("a"),Ed=o("span"),f(el.$$.fragment),a7=u(),$d=o("span"),n7=a("ZeRO-3 Config"),Hy=u(),Ii=o("p"),o7=a("The following is an example of configuration for ZeRO stage 3:"),By=u(),f(sl.$$.fragment),Wy=u(),V=o("p"),l7=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),kd=o("code"),r7=a('"device": "cpu"'),p7=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Pd=o("code"),i7=a("none"),u7=a(" instead of "),zd=o("code"),c7=a("cpu"),h7=a(" for the "),Dd=o("code"),f7=a("device"),d7=a(` entry. Offloading to
NVMe is discussed further down.`),Fy=u(),Be=o("p"),m7=a("Pinned memory is enabled with "),Od=o("code"),_7=a("pin_memory"),v7=a(" set to "),Ad=o("code"),j7=a("true"),w7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Vy=u(),Ui=o("p"),Td=o("strong"),y7=a("Performance tuning:"),Yy=u(),la=o("ul"),tl=o("li"),Sd=o("code"),g7=a("stage3_max_live_parameters"),b7=a(": "),Cd=o("code"),q7=a("1e9"),E7=u(),al=o("li"),xd=o("code"),$7=a("stage3_max_reuse_distance"),k7=a(": "),Rd=o("code"),P7=a("1e9"),Ky=u(),M=o("p"),z7=a("If hitting OOM reduce "),Id=o("code"),D7=a("stage3_max_live_parameters"),O7=a(" and "),Ud=o("code"),A7=a("stage3_max_reuse_distance"),T7=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Gd=o("code"),S7=a("1e9"),C7=a(` would consume ~2GB. The memory is shared by
`),Md=o("code"),x7=a("stage3_max_live_parameters"),R7=a(" and "),Ld=o("code"),I7=a("stage3_max_reuse_distance"),U7=a(", so it\u2019s not additive, it\u2019s just 2GB total."),Jy=u(),ze=o("p"),Zd=o("code"),G7=a("stage3_max_live_parameters"),M7=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Nd=o("code"),L7=a("stage3_max_reuse_distance"),Z7=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Hd=o("code"),N7=a("stage3_max_reuse_distance"),H7=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Xy=u(),Gi=o("p"),B7=a("The following configuration values depend on the model\u2019s hidden size:"),Qy=u(),We=o("ul"),nl=o("li"),Bd=o("code"),W7=a("reduce_bucket_size"),F7=a(": "),Wd=o("code"),V7=a("hidden_size*hidden_size"),Y7=u(),ol=o("li"),Fd=o("code"),K7=a("stage3_prefetch_bucket_size"),J7=a(": "),Vd=o("code"),X7=a("0.9 * hidden_size * hidden_size"),Q7=u(),ll=o("li"),Yd=o("code"),e9=a("stage3_param_persistence_threshold"),s9=a(": "),Kd=o("code"),t9=a("10 * hidden_size"),eg=u(),Fe=o("p"),a9=a("therefore set these values to "),Jd=o("code"),n9=a("auto"),o9=a(" and the "),Mi=o("a"),l9=a("Trainer"),r9=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),sg=u(),rl=o("p"),Xd=o("code"),p9=a("stage3_gather_16bit_weights_on_model_save"),i9=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),tg=u(),le=o("p"),u9=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Qd=o("code"),c9=a("allgather_partitions"),h9=a(", "),em=o("code"),f9=a("allgather_bucket_size"),d9=a(` and
`),sm=o("code"),m9=a("reduce_scatter"),_9=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),ag=u(),Li=o("ul"),pl=o("li"),tm=o("code"),v9=a("sub_group_size"),j9=a(": "),am=o("code"),w9=a("1e9"),ng=u(),De=o("p"),nm=o("code"),y9=a("sub_group_size"),g9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),om=o("code"),b9=a("sub_group_size"),q9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),lm=o("code"),E9=a("sub_group_size"),$9=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),og=u(),Ve=o("p"),k9=a("You can leave "),rm=o("code"),P9=a("sub_group_size"),z9=a(" to its default value of "),pm=o("em"),D9=a("1e9"),O9=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),lg=u(),ra=o("ol"),il=o("li"),A9=a("Running into OOM during optimizer step: Reduce "),im=o("code"),T9=a("sub_group_size"),S9=a(" to reduce memory utilization of temporary buffers"),C9=u(),ul=o("li"),x9=a("Optimizer Step is taking a long time: Increase "),um=o("code"),R9=a("sub_group_size"),I9=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),rg=u(),Zi=o("a"),pg=u(),Is=o("h3"),pa=o("a"),cm=o("span"),f(cl.$$.fragment),U9=u(),hm=o("span"),G9=a("NVMe Support"),ig=u(),Ni=o("p"),M9=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),ug=u(),Hi=o("p"),L9=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),cg=u(),f(hl.$$.fragment),hg=u(),ia=o("p"),Z9=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),fm=o("em"),N9=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),H9=a(")."),fg=u(),Ye=o("p"),B9=a("Here is the full documentation for offloading "),fl=o("a"),W9=a("optimizer states"),F9=a(" and "),dl=o("a"),V9=a("parameters"),Y9=a("."),dg=u(),ua=o("p"),K9=a("Make sure that your "),dm=o("code"),J9=a("nvme_path"),X9=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),mg=u(),Ke=o("p"),Q9=a("In order to figure out the optimal "),mm=o("code"),eP=a("aio"),sP=a(` configuration block you must run a benchmark on your target setup, as
`),ml=o("a"),tP=a("explained here"),aP=a("."),_g=u(),Bi=o("a"),vg=u(),Us=o("h4"),ca=o("a"),_m=o("span"),f(_l.$$.fragment),nP=u(),vm=o("span"),oP=a("ZeRO-2 vs ZeRO-3 Performance"),jg=u(),Wi=o("p"),lP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),wg=u(),Fi=o("p"),rP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),yg=u(),ha=o("ul"),Gs=o("li"),pP=a("set "),jm=o("code"),iP=a("stage3_param_persistence_threshold"),uP=a(" to a very large number - larger than the largest parameter, e.g., "),wm=o("code"),cP=a("6 * hidden_size * hidden_size"),hP=a(". This will keep the parameters on the GPUs."),fP=u(),vl=o("li"),dP=a("turn off "),ym=o("code"),mP=a("offload_params"),_P=a(" since ZeRO-2 doesn\u2019t have that option."),gg=u(),Je=o("p"),vP=a("The performance will likely improve significantly with just "),gm=o("code"),jP=a("offload_params"),wP=a(` turned off, even if you don\u2019t change
`),bm=o("code"),yP=a("stage3_param_persistence_threshold"),gP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),bg=u(),Vi=o("a"),qg=u(),Ms=o("h4"),fa=o("a"),qm=o("span"),f(jl.$$.fragment),bP=u(),Em=o("span"),qP=a("ZeRO-2 Example"),Eg=u(),da=o("p"),EP=a("Here is a full ZeRO-2 auto-configuration file "),$m=o("code"),$P=a("ds_config_zero2.json"),kP=a(":"),$g=u(),f(wl.$$.fragment),kg=u(),ma=o("p"),PP=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),km=o("code"),zP=a("auto"),DP=a(" settings in it."),Pg=u(),f(yl.$$.fragment),zg=u(),Yi=o("a"),Dg=u(),Ls=o("h4"),_a=o("a"),Pm=o("span"),f(gl.$$.fragment),OP=u(),zm=o("span"),AP=a("ZeRO-3 Example"),Og=u(),va=o("p"),TP=a("Here is a full ZeRO-3 auto-configuration file "),Dm=o("code"),SP=a("ds_config_zero3.json"),CP=a(":"),Ag=u(),f(bl.$$.fragment),Tg=u(),ja=o("p"),xP=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Om=o("code"),RP=a("auto"),IP=a(" settings in it."),Sg=u(),f(ql.$$.fragment),Cg=u(),Zs=o("h3"),wa=o("a"),Am=o("span"),f(El.$$.fragment),UP=u(),Tm=o("span"),GP=a("Optimizer and Scheduler"),xg=u(),ya=o("p"),MP=a("As long as you don\u2019t enable "),Sm=o("code"),LP=a("offload_optimizer"),ZP=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Rg=u(),Ki=o("p"),NP=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),Ig=u(),ga=o("p"),HP=a("It is possible to use a non-DeepSpeed optimizer when "),Cm=o("code"),BP=a("offload_optimizer"),WP=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Ug=u(),Ji=o("a"),Gg=u(),Ns=o("h4"),ba=o("a"),xm=o("span"),f($l.$$.fragment),FP=u(),Rm=o("span"),VP=a("Optimizer"),Mg=u(),Xe=o("p"),YP=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Im=o("code"),KP=a("torch"),JP=a(". The full documentation is "),kl=o("a"),XP=a("here"),QP=a("."),Lg=u(),$=o("p"),ez=a("If you don\u2019t configure the "),Um=o("code"),sz=a("optimizer"),tz=a(" entry in the configuration file, the "),Xi=o("a"),az=a("Trainer"),nz=a(` will
automatically set it to `),Gm=o("code"),oz=a("AdamW"),lz=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Mm=o("code"),rz=a("--learning_rate"),pz=a(", "),Lm=o("code"),iz=a("--adam_beta1"),uz=a(", "),Zm=o("code"),cz=a("--adam_beta2"),hz=a(", "),Nm=o("code"),fz=a("--adam_epsilon"),dz=a(" and "),Hm=o("code"),mz=a("--weight_decay"),_z=a("."),Zg=u(),Qe=o("p"),vz=a("Here is an example of the auto-configured "),Bm=o("code"),jz=a("optimizer"),wz=a(" entry for "),Wm=o("code"),yz=a("AdamW"),gz=a(":"),Ng=u(),f(Pl.$$.fragment),Hg=u(),Qi=o("p"),bz=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),Bg=u(),re=o("ul"),zl=o("li"),Fm=o("code"),qz=a("lr"),Ez=a(" with the value of "),Vm=o("code"),$z=a("--learning_rate"),kz=u(),Dl=o("li"),Ym=o("code"),Pz=a("betas"),zz=a(" with the value of "),Km=o("code"),Dz=a("--adam_beta1 --adam_beta2"),Oz=u(),Ol=o("li"),Jm=o("code"),Az=a("eps"),Tz=a(" with the value of "),Xm=o("code"),Sz=a("--adam_epsilon"),Cz=u(),Al=o("li"),Qm=o("code"),xz=a("weight_decay"),Rz=a(" with the value of "),e_=o("code"),Iz=a("--weight_decay"),Wg=u(),eu=o("p"),Uz=a("Therefore please remember to tune the shared hyperparameters on the command line."),Fg=u(),su=o("p"),Gz=a("You can also set the values explicitly:"),Vg=u(),f(Tl.$$.fragment),Yg=u(),qa=o("p"),Mz=a("But then you\u2019re on your own synchronizing the "),tu=o("a"),Lz=a("Trainer"),Zz=a(` command line arguments and the DeepSpeed
configuration.`),Kg=u(),au=o("p"),Nz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),Jg=u(),f(Sl.$$.fragment),Xg=u(),pe=o("p"),Hz=a("Similarly to "),s_=o("code"),Bz=a("AdamW"),Wz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),t_=o("code"),Fz=a("weight_decay"),Vz=a(" around "),a_=o("code"),Yz=a("0.01"),Kz=a("."),Qg=u(),nu=o("a"),e2=u(),Hs=o("h4"),Ea=o("a"),n_=o("span"),f(Cl.$$.fragment),Jz=u(),o_=o("span"),Xz=a("Scheduler"),s2=u(),L=o("p"),Qz=a("DeepSpeed supports "),l_=o("code"),eD=a("LRRangeTest"),sD=a(", "),r_=o("code"),tD=a("OneCycle"),aD=a(", "),p_=o("code"),nD=a("WarmupLR"),oD=a(" and "),i_=o("code"),lD=a("WarmupDecayLR"),rD=a(` learning rate schedulers. The full
documentation is `),xl=o("a"),pD=a("here"),iD=a("."),t2=u(),ou=o("p"),uD=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),a2=u(),$a=o("ul"),Rl=o("li"),u_=o("code"),cD=a("WarmupLR"),hD=a(" via "),c_=o("code"),fD=a("--lr_scheduler_type constant_with_warmup"),dD=u(),es=o("li"),h_=o("code"),mD=a("WarmupDecayLR"),_D=a(" via "),f_=o("code"),vD=a("--lr_scheduler_type linear"),jD=a(". This is also the default value for "),d_=o("code"),wD=a("--lr_scheduler_type"),yD=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),n2=u(),D=o("p"),gD=a("If you don\u2019t configure the "),m_=o("code"),bD=a("scheduler"),qD=a(" entry in the configuration file, the "),lu=o("a"),ED=a("Trainer"),$D=a(` will use
the values of `),__=o("code"),kD=a("--lr_scheduler_type"),PD=a(", "),v_=o("code"),zD=a("--learning_rate"),DD=a(" and "),j_=o("code"),OD=a("--warmup_steps"),AD=a(" or "),w_=o("code"),TD=a("--warmup_ratio"),SD=a(` to configure a
\u{1F917} Transformers version of it.`),o2=u(),ss=o("p"),CD=a("Here is an example of the auto-configured "),y_=o("code"),xD=a("scheduler"),RD=a(" entry for "),g_=o("code"),ID=a("WarmupLR"),UD=a(":"),l2=u(),f(Il.$$.fragment),r2=u(),ts=o("p"),GD=a("Since "),b_=o("em"),MD=a("\u201Cauto\u201D"),LD=a(" is used the "),ru=o("a"),ZD=a("Trainer"),ND=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),p2=u(),ie=o("ul"),ka=o("li"),q_=o("code"),HD=a("warmup_min_lr"),BD=a(" with the value of "),E_=o("code"),WD=a("0"),FD=a("."),VD=u(),Pa=o("li"),$_=o("code"),YD=a("warmup_max_lr"),KD=a(" with the value of "),k_=o("code"),JD=a("--learning_rate"),XD=a("."),QD=u(),as=o("li"),P_=o("code"),eO=a("warmup_num_steps"),sO=a(" with the value of "),z_=o("code"),tO=a("--warmup_steps"),aO=a(" if provided. Otherwise will use "),D_=o("code"),nO=a("--warmup_ratio"),oO=a(`
multiplied by the number of training steps and rounded up.`),lO=u(),ns=o("li"),O_=o("code"),rO=a("total_num_steps"),pO=a(" with either the value of "),A_=o("code"),iO=a("--max_steps"),uO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),T_=o("code"),cO=a("WarmupDecayLR"),hO=a(")."),i2=u(),pu=o("p"),fO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),u2=u(),f(Ul.$$.fragment),c2=u(),za=o("p"),dO=a("But then you\u2019re on your own synchronizing the "),iu=o("a"),mO=a("Trainer"),_O=a(` command line arguments and the DeepSpeed
configuration.`),h2=u(),Da=o("p"),vO=a("For example, for "),S_=o("code"),jO=a("WarmupDecayLR"),wO=a(", you can use the following entry:"),f2=u(),f(Gl.$$.fragment),d2=u(),Y=o("p"),yO=a("and "),C_=o("code"),gO=a("total_num_steps"),bO=a(", "),x_=o("code"),qO=a("warmup_max_lr"),EO=a(", "),R_=o("code"),$O=a("warmup_num_steps"),kO=a(" and "),I_=o("code"),PO=a("total_num_steps"),zO=a(" will be set at loading time."),m2=u(),uu=o("a"),_2=u(),Bs=o("h3"),Oa=o("a"),U_=o("span"),f(Ml.$$.fragment),DO=u(),G_=o("span"),OO=a("fp32 Precision"),v2=u(),cu=o("p"),AO=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),j2=u(),Aa=o("p"),TO=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),M_=o("code"),SO=a("NaN"),CO=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),w2=u(),f(Ll.$$.fragment),y2=u(),Ta=o("p"),xO=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Zl=o("a"),RO=a("TensorFloat-32(TF32) on Ampere devices"),IO=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),g2=u(),ue=o("p"),UO=a("With the \u{1F917} Trainer you can use "),L_=o("code"),GO=a("--tf32"),MO=a(" to enable it, or disable it with "),Z_=o("code"),LO=a("--tf32 0"),ZO=a(" or "),N_=o("code"),NO=a("--no_tf32"),HO=a(". By default the PyTorch default is used."),b2=u(),hu=o("a"),q2=u(),Ws=o("h3"),Sa=o("a"),H_=o("span"),f(Nl.$$.fragment),BO=u(),B_=o("span"),WO=a("Automatic Mixed Precision"),E2=u(),fu=o("p"),FO=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),$2=u(),Fs=o("h3"),Ca=o("a"),W_=o("span"),f(Hl.$$.fragment),VO=u(),F_=o("span"),YO=a("fp16"),k2=u(),du=o("p"),KO=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),P2=u(),f(Bl.$$.fragment),z2=u(),os=o("p"),JO=a("and the "),mu=o("a"),XO=a("Trainer"),QO=a(` will automatically enable or disable it based on the value of
`),V_=o("code"),eA=a("args.fp16_backend"),sA=a(". The rest of config values are up to you."),D2=u(),ls=o("p"),tA=a("This mode gets enabled when "),Y_=o("code"),aA=a("--fp16 --fp16_backend amp"),nA=a(" or "),K_=o("code"),oA=a("--fp16_full_eval"),lA=a(" command line args are passed."),O2=u(),_u=o("p"),rA=a("You can also enable/disable this mode explicitly:"),A2=u(),f(Wl.$$.fragment),T2=u(),xa=o("p"),pA=a("But then you\u2019re on your own synchronizing the "),vu=o("a"),iA=a("Trainer"),uA=a(` command line arguments and the DeepSpeed
configuration.`),S2=u(),Ra=o("p"),cA=a("Here is the "),Fl=o("a"),hA=a("documentation"),fA=a("."),C2=u(),Vs=o("h3"),Ia=o("a"),J_=o("span"),f(Vl.$$.fragment),dA=u(),X_=o("span"),mA=a("bf16"),x2=u(),ju=o("p"),_A=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),R2=u(),f(Yl.$$.fragment),I2=u(),wu=o("p"),vA=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),U2=u(),rs=o("p"),jA=a("This mode gets enabled when "),Q_=o("code"),wA=a("--bf16"),yA=a(" or "),e1=o("code"),gA=a("--bf16_full_eval"),bA=a(" command line args are passed."),G2=u(),yu=o("p"),qA=a("You can also enable/disable this mode explicitly:"),M2=u(),f(Kl.$$.fragment),L2=u(),f(Ua.$$.fragment),Z2=u(),Ys=o("h3"),Ga=o("a"),s1=o("span"),f(Jl.$$.fragment),EA=u(),t1=o("span"),$A=a("apex"),N2=u(),gu=o("p"),kA=a("To configure apex AMP-like mode set:"),H2=u(),f(Xl.$$.fragment),B2=u(),ce=o("p"),PA=a("and the "),bu=o("a"),zA=a("Trainer"),DA=a(" will automatically configure it based on the values of "),a1=o("code"),OA=a("args.fp16_backend"),AA=a(` and
`),n1=o("code"),TA=a("args.fp16_opt_level"),SA=a("."),W2=u(),Ma=o("p"),CA=a("This mode gets enabled when "),o1=o("code"),xA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),RA=a(" command line args are passed."),F2=u(),qu=o("p"),IA=a("You can also configure this mode explicitly:"),V2=u(),f(Ql.$$.fragment),Y2=u(),La=o("p"),UA=a("But then you\u2019re on your own synchronizing the "),Eu=o("a"),GA=a("Trainer"),MA=a(` command line arguments and the DeepSpeed
configuration.`),K2=u(),Za=o("p"),LA=a("Here is the "),er=o("a"),ZA=a("documentation"),NA=a("."),J2=u(),$u=o("a"),X2=u(),Ks=o("h3"),Na=o("a"),l1=o("span"),f(sr.$$.fragment),HA=u(),r1=o("span"),BA=a("Batch Size"),Q2=u(),ku=o("p"),WA=a("To configure batch size, use:"),eb=u(),f(tr.$$.fragment),sb=u(),Z=o("p"),FA=a("and the "),Pu=o("a"),VA=a("Trainer"),YA=a(" will automatically set "),p1=o("code"),KA=a("train_micro_batch_size_per_gpu"),JA=a(` to the value of
`),i1=o("code"),XA=a("args.per_device_train_batch_size"),QA=a(" and "),u1=o("code"),eT=a("train_batch_size"),sT=a(" to "),c1=o("code"),tT=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),aT=a("."),tb=u(),zu=o("p"),nT=a("You can also set the values explicitly:"),ab=u(),f(ar.$$.fragment),nb=u(),Ha=o("p"),oT=a("But then you\u2019re on your own synchronizing the "),Du=o("a"),lT=a("Trainer"),rT=a(` command line arguments and the DeepSpeed
configuration.`),ob=u(),Ou=o("a"),lb=u(),Js=o("h3"),Ba=o("a"),h1=o("span"),f(nr.$$.fragment),pT=u(),f1=o("span"),iT=a("Gradient Accumulation"),rb=u(),Au=o("p"),uT=a("To configure gradient accumulation set:"),pb=u(),f(or.$$.fragment),ib=u(),ps=o("p"),cT=a("and the "),Tu=o("a"),hT=a("Trainer"),fT=a(" will automatically set it to the value of "),d1=o("code"),dT=a("args.gradient_accumulation_steps"),mT=a("."),ub=u(),Su=o("p"),_T=a("You can also set the value explicitly:"),cb=u(),f(lr.$$.fragment),hb=u(),Wa=o("p"),vT=a("But then you\u2019re on your own synchronizing the "),Cu=o("a"),jT=a("Trainer"),wT=a(` command line arguments and the DeepSpeed
configuration.`),fb=u(),xu=o("a"),db=u(),Xs=o("h3"),Fa=o("a"),m1=o("span"),f(rr.$$.fragment),yT=u(),_1=o("span"),gT=a("Gradient Clipping"),mb=u(),Ru=o("p"),bT=a("To configure gradient gradient clipping set:"),_b=u(),f(pr.$$.fragment),vb=u(),is=o("p"),qT=a("and the "),Iu=o("a"),ET=a("Trainer"),$T=a(" will automatically set it to the value of "),v1=o("code"),kT=a("args.max_grad_norm"),PT=a("."),jb=u(),Uu=o("p"),zT=a("You can also set the value explicitly:"),wb=u(),f(ir.$$.fragment),yb=u(),Va=o("p"),DT=a("But then you\u2019re on your own synchronizing the "),Gu=o("a"),OT=a("Trainer"),AT=a(` command line arguments and the DeepSpeed
configuration.`),gb=u(),Mu=o("a"),bb=u(),Qs=o("h3"),Ya=o("a"),j1=o("span"),f(ur.$$.fragment),TT=u(),w1=o("span"),ST=a("Getting The Model Weights Out"),qb=u(),Ka=o("p"),CT=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),y1=o("code"),xT=a("global_step*/*optim_states.pt"),RT=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Eb=u(),Lu=o("p"),g1=o("strong"),IT=a("FP16 Weights:"),$b=u(),Ja=o("p"),UT=a("When a model is saved under ZeRO-2, you end up having the normal "),b1=o("code"),GT=a("pytorch_model.bin"),MT=a(` file with the model weights, but
they are only the fp16 version of the weights.`),kb=u(),O=o("p"),LT=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),q1=o("code"),ZT=a('"stage3_gather_16bit_weights_on_model_save": true'),NT=a(" is required to get the "),E1=o("code"),HT=a("Trainer"),BT=a(` to save the fp16
version of the weights. If this setting is `),$1=o("code"),WT=a("False"),FT=u(),k1=o("code"),VT=a("pytorch_model.bin"),YT=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),P1=o("code"),KT=a("state_dict"),JT=a(" contains a placeholder and not the real weights. If we were to save this "),z1=o("code"),XT=a("state_dict"),QT=a(" it won\u2019t be possible to load it back."),Pb=u(),f(cr.$$.fragment),zb=u(),Zu=o("p"),D1=o("strong"),eS=a("FP32 Weights:"),Db=u(),Xa=o("p"),sS=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),hr=o("a"),tS=a("models hub"),aS=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Ob=u(),Nu=o("p"),O1=o("strong"),nS=a("Live FP32 Weights Recovery:"),Ab=u(),Hu=o("p"),oS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Tb=u(),Bu=o("p"),lS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Sb=u(),f(fr.$$.fragment),Cb=u(),us=o("p"),rS=a("If you\u2019re using the "),A1=o("code"),pS=a("--load_best_model_at_end"),iS=a(" class:"),T1=o("em"),uS=a("~transformers.TrainingArguments"),cS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),xb=u(),f(dr.$$.fragment),Rb=u(),f(Qa.$$.fragment),Ib=u(),en=o("p"),hS=a("Of course, you don\u2019t have to use class:"),S1=o("em"),fS=a("~transformers.Trainer"),dS=a(` and you can adjust the examples above to your own
trainer.`),Ub=u(),sn=o("p"),mS=a("If for some reason you want more refinement, you can also extract the fp32 "),C1=o("code"),_S=a("state_dict"),vS=a(` of the weights and apply
these yourself as is shown in the following example:`),Gb=u(),f(mr.$$.fragment),Mb=u(),Wu=o("p"),x1=o("strong"),jS=a("Offline FP32 Weights Recovery:"),Lb=u(),cs=o("p"),wS=a("DeepSpeed creates a special conversion script "),R1=o("code"),yS=a("zero_to_fp32.py"),gS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),I1=o("code"),bS=a("Trainer"),qS=a(" to do the extraction."),Zb=u(),Fu=o("p"),ES=a("Let\u2019s say your checkpoint folder looks like this:"),Nb=u(),f(_r.$$.fragment),Hb=u(),tn=o("p"),$S=a("In this example there is just one DeepSpeed checkpoint sub-folder "),U1=o("em"),kS=a("global_step1"),PS=a(`. Therefore to reconstruct the fp32
weights just run:`),Bb=u(),f(vr.$$.fragment),Wb=u(),an=o("p"),zS=a("This is it. "),G1=o("code"),DS=a("pytorch_model.bin"),OS=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),Fb=u(),Vu=o("p"),AS=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),Vb=u(),jr=o("p"),M1=o("code"),TS=a("python zero_to_fp32.py -h"),SS=a(" will give you usage details."),Yb=u(),hs=o("p"),CS=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),L1=o("code"),xS=a("latest"),RS=a(`, which in the current
example will contain `),Z1=o("code"),IS=a("global_step1"),US=a("."),Kb=u(),Yu=o("p"),GS=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),Jb=u(),et=o("h3"),nn=o("a"),N1=o("span"),f(wr.$$.fragment),MS=u(),H1=o("span"),LS=a("ZeRO-3 and Infinity Nuances"),Xb=u(),Ku=o("p"),ZS=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),Qb=u(),Ju=o("p"),NS=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),e3=u(),Xu=o("p"),HS=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),s3=u(),st=o("h4"),on=o("a"),B1=o("span"),f(yr.$$.fragment),BS=u(),W1=o("span"),WS=a("Constructing Massive Models"),t3=u(),ln=o("p"),FS=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),F1=o("em"),VS=a("deepspeed.zero.Init()"),YS=a(`
context manager (which is also a function decorator), like so:`),a3=u(),f(gr.$$.fragment),n3=u(),Qu=o("p"),KS=a("As you can see this gives you a randomly initialized model."),o3=u(),P=o("p"),JS=a("If you want to use a pretrained model, "),V1=o("code"),XS=a("model_class.from_pretrained"),QS=a(` will activate this feature as long as
`),Y1=o("code"),eC=a("is_deepspeed_zero3_enabled()"),sC=a(" returns "),K1=o("code"),tC=a("True"),aC=a(`, which currently is setup by the
`),ec=o("a"),nC=a("TrainingArguments"),oC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),sc=o("a"),lC=a("TrainingArguments"),rC=a(" object "),J1=o("strong"),pC=a("before"),iC=a(` calling
`),X1=o("code"),uC=a("from_pretrained"),cC=a(". Here is an example of a possible sequence:"),l3=u(),f(br.$$.fragment),r3=u(),rn=o("p"),hC=a("If you\u2019re using the official example scripts and your command line arguments include "),Q1=o("code"),fC=a("--deepspeed ds_config.json"),dC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),p3=u(),tc=o("p"),mC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),i3=u(),pn=o("p"),_C=a("For full details on this method and other related features please refer to "),qr=o("a"),vC=a("Constructing Massive Models"),jC=a("."),u3=u(),he=o("p"),wC=a("Also when loading fp16-pretrained models, you will want to tell "),ev=o("code"),yC=a("from_pretrained"),gC=a(` to use
`),sv=o("code"),bC=a("torch_dtype=torch.float16"),qC=a(". For details, please, see "),ac=o("a"),EC=a("from_pretrained-torch-dtype"),$C=a("."),c3=u(),tt=o("h4"),un=o("a"),tv=o("span"),f(Er.$$.fragment),kC=u(),av=o("span"),PC=a("Gathering Parameters"),h3=u(),$r=o("p"),zC=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),kr=o("a"),DC=a("Gathering Parameters"),f3=u(),cn=o("p"),OC=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),nv=o("code"),AC=a("from_pretrained"),TC=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),d3=u(),nc=o("p"),SC=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),m3=u(),f(Pr.$$.fragment),_3=u(),fs=o("p"),CC=a("stress on "),ov=o("code"),xC=a("tensor([1.])"),RC=a(", or if you get an error where it says the parameter is of size "),lv=o("code"),IC=a("1"),UC=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),v3=u(),oc=o("a"),j3=u(),at=o("h3"),hn=o("a"),rv=o("span"),f(zr.$$.fragment),GC=u(),pv=o("span"),MC=a("ZeRO Inference"),w3=u(),lc=o("p"),LC=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),y3=u(),fn=o("p"),ZC=a("Otherwise you just need to pass the usual "),rc=o("a"),NC=a("TrainingArguments"),HC=a(" arguments. For example:"),g3=u(),f(Dr.$$.fragment),b3=u(),pc=o("p"),BC=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),q3=u(),dn=o("p"),WC=a("Here is an example of running "),iv=o("code"),FC=a("run_translation.py"),VC=a(" under DeepSpeed deploying all available GPUs:"),E3=u(),f(Or.$$.fragment),$3=u(),ic=o("p"),YC=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),k3=u(),uc=o("p"),KC=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),P3=u(),nt=o("h3"),mn=o("a"),uv=o("span"),f(Ar.$$.fragment),JC=u(),cv=o("span"),XC=a("Memory Requirements"),z3=u(),cc=o("p"),QC=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),D3=u(),hc=o("p"),ex=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),O3=u(),f(Tr.$$.fragment),A3=u(),fc=o("p"),sx=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),T3=u(),dc=o("p"),tx=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),S3=u(),mc=o("p"),ax=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),C3=u(),_c=o("p"),nx=a("For example, let\u2019s repeat the same for 2 GPUs:"),x3=u(),f(Sr.$$.fragment),R3=u(),vc=o("p"),ox=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),I3=u(),_n=o("p"),lx=a("For full information please see "),Cr=o("a"),rx=a("memory estimators"),px=a("."),U3=u(),ot=o("h3"),vn=o("a"),hv=o("span"),f(xr.$$.fragment),ix=u(),fv=o("span"),ux=a("Filing Issues"),G3=u(),jc=o("p"),cx=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),M3=u(),wc=o("p"),hx=a("In your report please always include:"),L3=u(),N=o("ol"),dv=o("li"),mv=o("p"),fx=a("the full Deepspeed config file in the report"),dx=u(),_v=o("li"),Oe=o("p"),mx=a("either the command line arguments if you were using the "),yc=o("a"),_x=a("Trainer"),vx=a(` or
`),gc=o("a"),jx=a("TrainingArguments"),wx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),bc=o("a"),yx=a("TrainingArguments"),gx=a(" as it has dozens of entries that are irrelevant."),bx=u(),Rr=o("li"),vv=o("p"),qx=a("Output of:"),Ex=u(),f(Ir.$$.fragment),$x=u(),jv=o("li"),Ur=o("p"),kx=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Gr=o("a"),Px=a("notebook"),zx=a(` as
a starting point.`),Dx=u(),wv=o("li"),yv=o("p"),Ox=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),Ax=u(),gv=o("li"),Mr=o("p"),Tx=a("If possible try to use one of the existing "),Lr=o("a"),Sx=a("examples"),Cx=a(" to reproduce the problem with."),Z3=u(),qc=o("p"),xx=a("Things to consider:"),N3=u(),jn=o("ul"),lt=o("li"),bv=o("p"),Rx=a("Deepspeed is often not the cause of the problem."),Ix=u(),qv=o("p"),Ux=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),Gx=u(),Ev=o("p"),Mx=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),Lx=u(),$v=o("li"),Zr=o("p"),Zx=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Nr=o("a"),Nx=a("Deepspeed"),Hx=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),H3=u(),rt=o("h3"),wn=o("a"),kv=o("span"),f(Hr.$$.fragment),Bx=u(),Pv=o("span"),Wx=a("Troubleshooting"),B3=u(),pt=o("h4"),yn=o("a"),zv=o("span"),f(Br.$$.fragment),Fx=u(),Wr=o("span"),Vx=a("the "),Dv=o("code"),Yx=a("deepspeed"),Kx=a(" process gets killed at startup without a traceback"),W3=u(),H=o("p"),Jx=a("If the "),Ov=o("code"),Xx=a("deepspeed"),Qx=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Av=o("code"),eR=a("offload_optimizer"),sR=a(" or "),Tv=o("code"),tR=a("offload_param"),aR=a(` or
both configured to offload to `),Sv=o("code"),nR=a("cpu"),oR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Fr=o("a"),lR=a("estimate how much memory is needed for a specific model"),rR=a("."),F3=u(),it=o("h4"),gn=o("a"),Cv=o("span"),f(Vr.$$.fragment),pR=u(),Ec=o("span"),iR=a("training and/or eval/predict loss is "),xv=o("code"),uR=a("NaN"),V3=u(),$c=o("p"),cR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),Y3=u(),kc=o("p"),hR=a("The other problem may have to do with using fp16. When you configure this section:"),K3=u(),f(Yr.$$.fragment),J3=u(),bn=o("p"),fR=a("and you see in your log that Deepspeed reports "),Rv=o("code"),dR=a("OVERFLOW!"),mR=a(" as follows:"),X3=u(),f(Kr.$$.fragment),Q3=u(),Pc=o("p"),_R=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),e0=u(),zc=o("p"),vR=a("(the log was massaged to be more readable here.)"),s0=u(),ds=o("p"),jR=a("In this case you usually need to raise the value of "),Iv=o("code"),wR=a("initial_scale_power"),yR=a(". Setting it to "),Uv=o("code"),gR=a('"initial_scale_power": 32'),bR=a(" will typically resolve the problem."),t0=u(),ut=o("h3"),qn=o("a"),Gv=o("span"),f(Jr.$$.fragment),qR=u(),Mv=o("span"),ER=a("Notes"),a0=u(),ms=o("ul"),ct=o("li"),$R=a("DeepSpeed works with the PyTorch "),Dc=o("a"),kR=a("Trainer"),PR=a(" but not TF "),Lv=o("code"),zR=a("TFTrainer"),DR=a("."),OR=u(),Xr=o("li"),AR=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Qr=o("a"),TR=a("source"),SR=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),CR=u(),ht=o("li"),xR=a("You don\u2019t have to use the "),Oc=o("a"),RR=a("Trainer"),IR=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ep=o("a"),UR=a("the DeepSpeed integration instructions"),GR=a("."),n0=u(),Ac=o("a"),o0=u(),ft=o("h2"),En=o("a"),Zv=o("span"),f(sp.$$.fragment),MR=u(),Nv=o("span"),LR=a("Non-Trainer Deepspeed Integration"),l0=u(),fe=o("p"),ZR=a("The "),Tc=o("a"),NR=a("HfDeepSpeedConfig"),HR=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Sc=o("a"),BR=a("Trainer"),WR=a(" is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),Hv=o("code"),FR=a("from_pretrained"),VR=a(" call. Everything else you have to do by yourself."),r0=u(),$n=o("p"),YR=a("When using "),Cc=o("a"),KR=a("Trainer"),JR=a(" everything is automatically taken care of."),p0=u(),_s=o("p"),XR=a("When not using "),xc=o("a"),QR=a("Trainer"),eI=a(`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Rc=o("a"),sI=a("HfDeepSpeedConfig"),tI=a(" object before instantiating the model and keep that object alive."),i0=u(),kn=o("p"),aI=a("If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),Bv=o("code"),nI=a("HfDeepSpeedConfig"),oI=a(" at all."),u0=u(),Ic=o("p"),lI=a("For example for a pretrained model:"),c0=u(),f(tp.$$.fragment),h0=u(),Uc=o("p"),rI=a("or for non-pretrained model:"),f0=u(),f(ap.$$.fragment),d0=u(),de=o("p"),pI=a("Please note that if you\u2019re not using the "),Gc=o("a"),iI=a("Trainer"),uI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),np=o("a"),cI=a("Deepspeed"),hI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),Wv=o("code"),fI=a('"auto"'),dI=a(" values and you will have to put real values instead."),m0=u(),dt=o("h2"),Pn=o("a"),Fv=o("span"),f(op.$$.fragment),mI=u(),Vv=o("span"),_I=a("HfDeepSpeedConfig"),_0=u(),ee=o("div"),f(lp.$$.fragment),vI=u(),Yv=o("p"),jI=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),wI=u(),Ae=o("p"),yI=a("A "),Kv=o("code"),gI=a("weakref"),bI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Jv=o("code"),qI=a("from_pretrained"),EI=a(" and "),Xv=o("code"),$I=a("_get_resized_embeddings"),kI=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),PI=u(),me=o("p"),Mc=o("a"),zI=a("Trainer"),DI=a(" uses the "),Qv=o("code"),OI=a("HfTrainerDeepSpeedConfig"),AI=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Lc=o("a"),TI=a("TrainingArguments"),SI=a(" by replacing special placeholder values: "),ej=o("code"),CI=a('"auto"'),xI=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),v0=u(),mt=o("h3"),zn=o("a"),sj=o("span"),f(rp.$$.fragment),RI=u(),tj=o("span"),II=a("Custom DeepSpeed ZeRO Inference"),j0=u(),Dn=o("p"),UI=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Zc=o("a"),GI=a("Trainer"),MI=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),w0=u(),Nc=o("p"),LI=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),y0=u(),Hc=o("p"),ZI=a("The example has copious notes and is self-documenting."),g0=u(),Bc=o("p"),NI=a("Make sure to:"),b0=u(),On=o("ol"),aj=o("li"),HI=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),BI=u(),nj=o("li"),WI=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),q0=u(),f(pp.$$.fragment),E0=u(),An=o("p"),FI=a("Let\u2019s save it as "),oj=o("code"),VI=a("t0.py"),YI=a(" and run it:"),$0=u(),f(ip.$$.fragment),k0=u(),Wc=o("p"),KI=a("This was a very basic example and you will want to adapt it to your needs."),P0=u(),_t=o("h2"),Tn=o("a"),lj=o("span"),f(up.$$.fragment),JI=u(),rj=o("span"),XI=a("Main DeepSpeed Resources"),z0=u(),_e=o("ul"),pj=o("li"),cp=o("a"),QI=a("Project\u2019s github"),eU=u(),ij=o("li"),hp=o("a"),sU=a("Usage docs"),tU=u(),uj=o("li"),fp=o("a"),aU=a("API docs"),nU=u(),cj=o("li"),dp=o("a"),oU=a("Blog posts"),D0=u(),Fc=o("p"),lU=a("Papers:"),O0=u(),vs=o("ul"),hj=o("li"),mp=o("a"),rU=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),pU=u(),fj=o("li"),_p=o("a"),iU=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),uU=u(),dj=o("li"),vp=o("a"),cU=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),A0=u(),js=o("p"),hU=a("Finally, please, remember that, HuggingFace "),Vc=o("a"),fU=a("Trainer"),dU=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),jp=o("a"),mU=a("DeepSpeed GitHub"),_U=a("."),this.h()},l(e){const p=AY('[data-svelte="svelte-1phssyn"]',document.head);g=l(p,"META",{name:!0,content:!0}),p.forEach(t),S=c(e),b=l(e,"H1",{class:!0});var wp=r(b);k=l(wp,"A",{id:!0,class:!0,href:!0});var mj=r(k);X=l(mj,"SPAN",{});var _j=r(X);d(z.$$.fragment,_j),_j.forEach(t),mj.forEach(t),C=c(wp),Q=l(wp,"SPAN",{});var qU=r(Q);x=n(qU,"DeepSpeed Integration"),qU.forEach(t),wp.forEach(t),te=c(e),T=l(e,"P",{});var vj=r(T);q=l(vj,"A",{href:!0,rel:!0});var EU=r(q);E=n(EU,"DeepSpeed"),EU.forEach(t),gs=n(vj," implements everything described in the "),W=l(vj,"A",{href:!0,rel:!0});var $U=r(W);bs=n($U,"ZeRO paper"),$U.forEach(t),c4=n(vj,". Currently it provides full support for:"),vj.forEach(t),yj=c(e),R=l(e,"OL",{});var ve=r(R);Mh=l(ve,"LI",{});var kU=r(Mh);h4=n(kU,"Optimizer state partitioning (ZeRO stage 1)"),kU.forEach(t),f4=c(ve),Lh=l(ve,"LI",{});var PU=r(Lh);d4=n(PU,"Gradient partitioning (ZeRO stage 2)"),PU.forEach(t),m4=c(ve),Zh=l(ve,"LI",{});var zU=r(Zh);_4=n(zU,"Parameter partitioning (ZeRO stage 3)"),zU.forEach(t),v4=c(ve),Nh=l(ve,"LI",{});var DU=r(Nh);j4=n(DU,"Custom mixed precision training handling"),DU.forEach(t),w4=c(ve),Hh=l(ve,"LI",{});var OU=r(Hh);y4=n(OU,"A range of fast CUDA-extension-based optimizers"),OU.forEach(t),g4=c(ve),Bh=l(ve,"LI",{});var AU=r(Bh);b4=n(AU,"ZeRO-Offload to CPU and NVMe"),AU.forEach(t),ve.forEach(t),gj=c(e),Te=l(e,"P",{});var Yc=r(Te);q4=n(Yc,"ZeRO-Offload has its own dedicated paper: "),Kn=l(Yc,"A",{href:!0,rel:!0});var TU=r(Kn);E4=n(TU,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),TU.forEach(t),$4=n(Yc,". And NVMe-support is described in the paper "),Jn=l(Yc,"A",{href:!0,rel:!0});var SU=r(Jn);k4=n(SU,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),SU.forEach(t),P4=n(Yc,"."),Yc.forEach(t),bj=c(e),kp=l(e,"P",{});var CU=r(kp);z4=n(CU,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),CU.forEach(t),qj=c(e),Pp=l(e,"P",{});var xU=r(Pp);D4=n(xU,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),xU.forEach(t),Ej=c(e),wt=l(e,"P",{});var S0=r(wt);O4=n(S0,"\u{1F917} Transformers integrates "),Xn=l(S0,"A",{href:!0,rel:!0});var RU=r(Xn);A4=n(RU,"DeepSpeed"),RU.forEach(t),T4=n(S0," via 2 options:"),S0.forEach(t),$j=c(e),yt=l(e,"OL",{});var C0=r(yt);Qn=l(C0,"LI",{});var x0=r(Qn);S4=n(x0,"Integration of the core DeepSpeed features via "),zp=l(x0,"A",{href:!0});var IU=r(zp);C4=n(IU,"Trainer"),IU.forEach(t),x4=n(x0,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),x0.forEach(t),R4=c(C0),F=l(C0,"LI",{});var je=r(F);I4=n(je,"If you don\u2019t use "),Dp=l(je,"A",{href:!0});var UU=r(Dp);U4=n(UU,"Trainer"),UU.forEach(t),G4=n(je,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wh=l(je,"CODE",{});var GU=r(Wh);M4=n(GU,"from_pretrained"),GU.forEach(t),L4=n(je," and "),Fh=l(je,"CODE",{});var MU=r(Fh);Z4=n(MU,"from_config"),MU.forEach(t),N4=n(je,` include integration of essential
parts of DeepSpeed like `),Vh=l(je,"CODE",{});var LU=r(Vh);H4=n(LU,"zero.Init"),LU.forEach(t),B4=n(je,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Op=l(je,"A",{href:!0});var ZU=r(Op);W4=n(ZU,"deepspeed-non-trainer-integration"),ZU.forEach(t),F4=n(je,"."),je.forEach(t),C0.forEach(t),kj=c(e),Ap=l(e,"P",{});var NU=r(Ap);V4=n(NU,"What is integrated:"),NU.forEach(t),Pj=c(e),Tp=l(e,"P",{});var HU=r(Tp);Y4=n(HU,"Training:"),HU.forEach(t),zj=c(e),Sp=l(e,"OL",{});var BU=r(Sp);Yh=l(BU,"LI",{});var WU=r(Yh);K4=n(WU,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),WU.forEach(t),BU.forEach(t),Dj=c(e),Cp=l(e,"P",{});var FU=r(Cp);J4=n(FU,"Inference:"),FU.forEach(t),Oj=c(e),xp=l(e,"OL",{});var VU=r(xp);eo=l(VU,"LI",{});var R0=r(eo);X4=n(R0,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Rp=l(R0,"A",{href:!0});var YU=r(Rp);Q4=n(YU,"deepspeed-zero-inference"),YU.forEach(t),e6=n(R0,"."),R0.forEach(t),VU.forEach(t),Aj=c(e),Ip=l(e,"P",{});var KU=r(Ip);s6=n(KU,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),KU.forEach(t),Tj=c(e),Up=l(e,"A",{id:!0}),r(Up).forEach(t),Sj=c(e),qs=l(e,"H2",{class:!0});var I0=r(qs);gt=l(I0,"A",{id:!0,class:!0,href:!0});var JU=r(gt);Kh=l(JU,"SPAN",{});var XU=r(Kh);d(so.$$.fragment,XU),XU.forEach(t),JU.forEach(t),t6=c(I0),Jh=l(I0,"SPAN",{});var QU=r(Jh);a6=n(QU,"Trainer Deepspeed Integration"),QU.forEach(t),I0.forEach(t),Cj=c(e),Gp=l(e,"A",{id:!0}),r(Gp).forEach(t),xj=c(e),Es=l(e,"H3",{class:!0});var U0=r(Es);bt=l(U0,"A",{id:!0,class:!0,href:!0});var eG=r(bt);Xh=l(eG,"SPAN",{});var sG=r(Xh);d(to.$$.fragment,sG),sG.forEach(t),eG.forEach(t),n6=c(U0),Qh=l(U0,"SPAN",{});var tG=r(Qh);o6=n(tG,"Installation"),tG.forEach(t),U0.forEach(t),Rj=c(e),Mp=l(e,"P",{});var aG=r(Mp);l6=n(aG,"Install the library via pypi:"),aG.forEach(t),Ij=c(e),d(ao.$$.fragment,e),Uj=c(e),Se=l(e,"P",{});var Kc=r(Se);r6=n(Kc,"or via "),ef=l(Kc,"CODE",{});var nG=r(ef);p6=n(nG,"transformers"),nG.forEach(t),i6=n(Kc,"\u2019 "),sf=l(Kc,"CODE",{});var oG=r(sf);u6=n(oG,"extras"),oG.forEach(t),c6=n(Kc,":"),Kc.forEach(t),Gj=c(e),d(no.$$.fragment,e),Mj=c(e),Ce=l(e,"P",{});var Jc=r(Ce);h6=n(Jc,"or find more details on "),oo=l(Jc,"A",{href:!0,rel:!0});var lG=r(oo);f6=n(lG,"the DeepSpeed\u2019s GitHub page"),lG.forEach(t),d6=n(Jc,` and
`),lo=l(Jc,"A",{href:!0,rel:!0});var rG=r(lo);m6=n(rG,"advanced install"),rG.forEach(t),_6=n(Jc,"."),Jc.forEach(t),Lj=c(e),qt=l(e,"P",{});var G0=r(qt);v6=n(G0,"If you\u2019re still struggling with the build, first make sure to read "),Lp=l(G0,"A",{href:!0});var pG=r(Lp);j6=n(pG,"zero-install-notes"),pG.forEach(t),w6=n(G0,"."),G0.forEach(t),Zj=c(e),Zp=l(e,"P",{});var iG=r(Zp);y6=n(iG,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),iG.forEach(t),Nj=c(e),Np=l(e,"P",{});var uG=r(Np);g6=n(uG,"To make a local build for DeepSpeed:"),uG.forEach(t),Hj=c(e),d(ro.$$.fragment,e),Bj=c(e),xe=l(e,"P",{});var Xc=r(xe);b6=n(Xc,"If you intend to use NVMe offload you will also need to include "),tf=l(Xc,"CODE",{});var cG=r(tf);q6=n(cG,"DS_BUILD_AIO=1"),cG.forEach(t),E6=n(Xc,` in the instructions above (and also
install `),af=l(Xc,"EM",{});var hG=r(af);$6=n(hG,"libaio-dev"),hG.forEach(t),k6=n(Xc," system-wide)."),Xc.forEach(t),Wj=c(e),Et=l(e,"P",{});var M0=r(Et);P6=n(M0,"Edit "),nf=l(M0,"CODE",{});var fG=r(nf);z6=n(fG,"TORCH_CUDA_ARCH_LIST"),fG.forEach(t),D6=n(M0,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),M0.forEach(t),Fj=c(e),d(po.$$.fragment,e),Vj=c(e),ke=l(e,"P",{});var yp=r(ke);O6=n(yp,"So if you get "),of=l(yp,"CODE",{});var dG=r(of);A6=n(dG,"8, 6"),dG.forEach(t),T6=n(yp,", then use "),lf=l(yp,"CODE",{});var mG=r(lf);S6=n(mG,'TORCH_CUDA_ARCH_LIST="8.6"'),mG.forEach(t),C6=n(yp,`. If you have multiple different cards, you can list all
of them like so `),rf=l(yp,"CODE",{});var _G=r(rf);x6=n(_G,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),_G.forEach(t),yp.forEach(t),Yj=c(e),Hp=l(e,"P",{});var vG=r(Hp);R6=n(vG,"If you need to use the same setup on multiple machines, make a binary wheel:"),vG.forEach(t),Kj=c(e),d(io.$$.fragment,e),Jj=c(e),Re=l(e,"P",{});var Qc=r(Re);I6=n(Qc,"it will generate something like "),pf=l(Qc,"CODE",{});var jG=r(pf);U6=n(jG,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),jG.forEach(t),G6=n(Qc,` which now you can install
as `),uf=l(Qc,"CODE",{});var wG=r(uf);M6=n(wG,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),wG.forEach(t),L6=n(Qc," locally or on any other machine."),Qc.forEach(t),Xj=c(e),$t=l(e,"P",{});var L0=r($t);Z6=n(L0,"Again, remember to ensure to adjust "),cf=l(L0,"CODE",{});var yG=r(cf);N6=n(yG,"TORCH_CUDA_ARCH_LIST"),yG.forEach(t),H6=n(L0," to the target architectures."),L0.forEach(t),Qj=c(e),Ie=l(e,"P",{});var eh=r(Ie);B6=n(eh,"You can find the complete list of NVIDIA GPUs and their corresponding "),hf=l(eh,"STRONG",{});var gG=r(hf);W6=n(gG,"Compute Capabilities"),gG.forEach(t),F6=n(eh,` (same as arch in this
context) `),uo=l(eh,"A",{href:!0,rel:!0});var bG=r(uo);V6=n(bG,"here"),bG.forEach(t),Y6=n(eh,"."),eh.forEach(t),ew=c(e),Bp=l(e,"P",{});var qG=r(Bp);K6=n(qG,"You can check the archs pytorch was built with using:"),qG.forEach(t),sw=c(e),d(co.$$.fragment,e),tw=c(e),Wp=l(e,"P",{});var EG=r(Wp);J6=n(EG,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),EG.forEach(t),aw=c(e),d(ho.$$.fragment,e),nw=c(e),Fp=l(e,"P",{});var $G=r(Fp);X6=n($G,"If the output is:"),$G.forEach(t),ow=c(e),d(fo.$$.fragment,e),lw=c(e),kt=l(e,"P",{});var Z0=r(kt);Q6=n(Z0,"then you know that this card\u2019s arch is "),ff=l(Z0,"CODE",{});var kG=r(ff);e$=n(kG,"8.6"),kG.forEach(t),s$=n(Z0,"."),Z0.forEach(t),rw=c(e),Pt=l(e,"P",{});var N0=r(Pt);t$=n(N0,"You can also leave "),df=l(N0,"CODE",{});var PG=r(df);a$=n(PG,"TORCH_CUDA_ARCH_LIST"),PG.forEach(t),n$=n(N0,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),N0.forEach(t),pw=c(e),zt=l(e,"P",{});var H0=r(zt);o$=n(H0,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),mo=l(H0,"A",{href:!0,rel:!0});var zG=r(mo);l$=n(zG,"Deepspeed"),zG.forEach(t),r$=n(H0,","),H0.forEach(t),iw=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),uw=c(e),$s=l(e,"H3",{class:!0});var B0=r($s);Dt=l(B0,"A",{id:!0,class:!0,href:!0});var DG=r(Dt);mf=l(DG,"SPAN",{});var OG=r(mf);d(_o.$$.fragment,OG),OG.forEach(t),DG.forEach(t),p$=c(B0),_f=l(B0,"SPAN",{});var AG=r(_f);i$=n(AG,"Deployment with multiple GPUs"),AG.forEach(t),B0.forEach(t),cw=c(e),Ot=l(e,"P",{});var W0=r(Ot);u$=n(W0,"To deploy this feature with multiple GPUs adjust the "),Yp=l(W0,"A",{href:!0});var TG=r(Yp);c$=n(TG,"Trainer"),TG.forEach(t),h$=n(W0,` command line arguments as
following:`),W0.forEach(t),hw=c(e),At=l(e,"OL",{});var F0=r(At);ks=l(F0,"LI",{});var sh=r(ks);f$=n(sh,"replace "),vf=l(sh,"CODE",{});var SG=r(vf);d$=n(SG,"python -m torch.distributed.launch"),SG.forEach(t),m$=n(sh," with "),jf=l(sh,"CODE",{});var CG=r(jf);_$=n(CG,"deepspeed"),CG.forEach(t),v$=n(sh,"."),sh.forEach(t),j$=c(F0),Pe=l(F0,"LI",{});var Sn=r(Pe);w$=n(Sn,"add a new argument "),wf=l(Sn,"CODE",{});var xG=r(wf);y$=n(xG,"--deepspeed ds_config.json"),xG.forEach(t),g$=n(Sn,", where "),yf=l(Sn,"CODE",{});var RG=r(yf);b$=n(RG,"ds_config.json"),RG.forEach(t),q$=n(Sn,` is the DeepSpeed configuration file as
documented `),vo=l(Sn,"A",{href:!0,rel:!0});var IG=r(vo);E$=n(IG,"here"),IG.forEach(t),$$=n(Sn,". The file naming is up to you."),Sn.forEach(t),F0.forEach(t),fw=c(e),Kp=l(e,"P",{});var UG=r(Kp);k$=n(UG,"Therefore, if your original command line looked as follows:"),UG.forEach(t),dw=c(e),d(jo.$$.fragment,e),mw=c(e),Jp=l(e,"P",{});var GG=r(Jp);P$=n(GG,"Now it should be:"),GG.forEach(t),_w=c(e),d(wo.$$.fragment,e),vw=c(e),I=l(e,"P",{});var we=r(I);z$=n(we,"Unlike, "),gf=l(we,"CODE",{});var MG=r(gf);D$=n(MG,"torch.distributed.launch"),MG.forEach(t),O$=n(we," where you have to specify how many GPUs to use with "),bf=l(we,"CODE",{});var LG=r(bf);A$=n(LG,"--nproc_per_node"),LG.forEach(t),T$=n(we,`, with the
`),qf=l(we,"CODE",{});var ZG=r(qf);S$=n(ZG,"deepspeed"),ZG.forEach(t),C$=n(we," launcher you don\u2019t have to use the corresponding "),Ef=l(we,"CODE",{});var NG=r(Ef);x$=n(NG,"--num_gpus"),NG.forEach(t),R$=n(we,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),yo=l(we,"A",{href:!0,rel:!0});var HG=r(yo);I$=n(HG,"here"),HG.forEach(t),U$=n(we,"."),we.forEach(t),jw=c(e),ae=l(e,"P",{});var Cn=r(ae);G$=n(Cn,"In fact, you can continue using "),$f=l(Cn,"CODE",{});var BG=r($f);M$=n(BG,"-m torch.distributed.launch"),BG.forEach(t),L$=n(Cn,` with DeepSpeed as long as you don\u2019t need to use
`),kf=l(Cn,"CODE",{});var WG=r(kf);Z$=n(WG,"deepspeed"),WG.forEach(t),N$=n(Cn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Pf=l(Cn,"CODE",{});var FG=r(Pf);H$=n(FG,"deepspeed"),FG.forEach(t),B$=n(Cn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Cn.forEach(t),ww=c(e),Tt=l(e,"P",{});var V0=r(Tt);W$=n(V0,"Here is an example of running "),zf=l(V0,"CODE",{});var VG=r(zf);F$=n(VG,"run_translation.py"),VG.forEach(t),V$=n(V0," under DeepSpeed deploying all available GPUs:"),V0.forEach(t),yw=c(e),d(go.$$.fragment,e),gw=c(e),St=l(e,"P",{});var Y0=r(St);Y$=n(Y0,"Note that in the DeepSpeed documentation you are likely to see "),Df=l(Y0,"CODE",{});var YG=r(Df);K$=n(YG,"--deepspeed --deepspeed_config ds_config.json"),YG.forEach(t),J$=n(Y0,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Y0.forEach(t),bw=c(e),Ct=l(e,"P",{});var K0=r(Ct);X$=n(K0,"For some practical usage examples, please, see this "),bo=l(K0,"A",{href:!0,rel:!0});var KG=r(bo);Q$=n(KG,"post"),KG.forEach(t),e5=n(K0,"."),K0.forEach(t),qw=c(e),Xp=l(e,"A",{id:!0}),r(Xp).forEach(t),Ew=c(e),Ps=l(e,"H3",{class:!0});var J0=r(Ps);xt=l(J0,"A",{id:!0,class:!0,href:!0});var JG=r(xt);Of=l(JG,"SPAN",{});var XG=r(Of);d(qo.$$.fragment,XG),XG.forEach(t),JG.forEach(t),s5=c(J0),Af=l(J0,"SPAN",{});var QG=r(Af);t5=n(QG,"Deployment with one GPU"),QG.forEach(t),J0.forEach(t),$w=c(e),Rt=l(e,"P",{});var X0=r(Rt);a5=n(X0,"To deploy DeepSpeed with one GPU adjust the "),Qp=l(X0,"A",{href:!0});var eM=r(Qp);n5=n(eM,"Trainer"),eM.forEach(t),o5=n(X0," command line arguments as follows:"),X0.forEach(t),kw=c(e),d(Eo.$$.fragment,e),Pw=c(e),Ue=l(e,"P",{});var th=r(Ue);l5=n(th,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Tf=l(th,"CODE",{});var sM=r(Tf);r5=n(sM,"--num_gpus=1"),sM.forEach(t),p5=n(th,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),$o=l(th,"A",{href:!0,rel:!0});var tM=r($o);i5=n(tM,"documentation"),tM.forEach(t),u5=n(th," discusses the launcher options."),th.forEach(t),zw=c(e),ei=l(e,"P",{});var aM=r(ei);c5=n(aM,"Why would you want to use DeepSpeed with just one GPU?"),aM.forEach(t),Dw=c(e),It=l(e,"OL",{});var Q0=r(It);Sf=l(Q0,"LI",{});var nM=r(Sf);h5=n(nM,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),nM.forEach(t),f5=c(Q0),Cf=l(Q0,"LI",{});var oM=r(Cf);d5=n(oM,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),oM.forEach(t),Q0.forEach(t),Ow=c(e),si=l(e,"P",{});var lM=r(si);m5=n(lM,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),lM.forEach(t),Aw=c(e),d(ko.$$.fragment,e),Tw=c(e),ti=l(e,"P",{});var rM=r(ti);_5=n(rM,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),rM.forEach(t),Sw=c(e),Ut=l(e,"P",{});var eq=r(Ut);v5=n(eq,"For a practical usage example of this type of deployment, please, see this "),Po=l(eq,"A",{href:!0,rel:!0});var pM=r(Po);j5=n(pM,"post"),pM.forEach(t),w5=n(eq,"."),eq.forEach(t),Cw=c(e),ai=l(e,"P",{});var iM=r(ai);y5=n(iM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),iM.forEach(t),xw=c(e),ni=l(e,"P",{});var uM=r(ni);g5=n(uM,"Notes:"),uM.forEach(t),Rw=c(e),oi=l(e,"UL",{});var cM=r(oi);zs=l(cM,"LI",{});var ah=r(zs);zo=l(ah,"P",{});var sq=r(zo);b5=n(sq,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),xf=l(sq,"CODE",{});var hM=r(xf);q5=n(hM,"CUDA_VISIBLE_DEVICES"),hM.forEach(t),E5=n(sq,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),sq.forEach(t),$5=c(ah),d(Do.$$.fragment,ah),k5=c(ah),Rf=l(ah,"P",{});var fM=r(Rf);P5=n(fM,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),fM.forEach(t),ah.forEach(t),cM.forEach(t),Iw=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),Uw=c(e),Ds=l(e,"H3",{class:!0});var tq=r(Ds);Gt=l(tq,"A",{id:!0,class:!0,href:!0});var dM=r(Gt);If=l(dM,"SPAN",{});var mM=r(If);d(Oo.$$.fragment,mM),mM.forEach(t),dM.forEach(t),z5=c(tq),Uf=l(tq,"SPAN",{});var _M=r(Uf);D5=n(_M,"Deployment in Notebooks"),_M.forEach(t),tq.forEach(t),Gw=c(e),Mt=l(e,"P",{});var aq=r(Mt);O5=n(aq,"The problem with running notebook cells as a script is that there is no normal "),Gf=l(aq,"CODE",{});var vM=r(Gf);A5=n(vM,"deepspeed"),vM.forEach(t),T5=n(aq,` launcher to rely on, so
under certain setups we have to emulate it.`),aq.forEach(t),Mw=c(e),ri=l(e,"P",{});var jM=r(ri);S5=n(jM,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),jM.forEach(t),Lw=c(e),d(Ao.$$.fragment,e),Zw=c(e),Lt=l(e,"P",{});var nq=r(Lt);C5=n(nq,"Note: "),Mf=l(nq,"CODE",{});var wM=r(Mf);x5=n(wM,"..."),wM.forEach(t),R5=n(nq," stands for the normal arguments that you\u2019d pass to the functions."),nq.forEach(t),Nw=c(e),pi=l(e,"P",{});var yM=r(pi);I5=n(yM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),yM.forEach(t),Hw=c(e),ii=l(e,"P",{});var gM=r(ii);U5=n(gM,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),gM.forEach(t),Bw=c(e),d(To.$$.fragment,e),Ww=c(e),Ge=l(e,"P",{});var nh=r(Ge);G5=n(nh,"If the training script is in a normal file and not in the notebook cells, you can launch "),Lf=l(nh,"CODE",{});var bM=r(Lf);M5=n(bM,"deepspeed"),bM.forEach(t),L5=n(nh,` normally via
shell from a cell. For example, to use `),Zf=l(nh,"CODE",{});var qM=r(Zf);Z5=n(qM,"run_translation.py"),qM.forEach(t),N5=n(nh," you would launch it with:"),nh.forEach(t),Fw=c(e),d(So.$$.fragment,e),Vw=c(e),Zt=l(e,"P",{});var oq=r(Zt);H5=n(oq,"or with "),Nf=l(oq,"CODE",{});var EM=r(Nf);B5=n(EM,"%%bash"),EM.forEach(t),W5=n(oq," magic, where you can write a multi-line code for the shell program to run:"),oq.forEach(t),Yw=c(e),d(Co.$$.fragment,e),Kw=c(e),ui=l(e,"P",{});var $M=r(ui);F5=n($M,"In such case you don\u2019t need any of the code presented at the beginning of this section."),$M.forEach(t),Jw=c(e),Nt=l(e,"P",{});var lq=r(Nt);V5=n(lq,"Note: While "),Hf=l(lq,"CODE",{});var kM=r(Hf);Y5=n(kM,"%%bash"),kM.forEach(t),K5=n(lq,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),lq.forEach(t),Xw=c(e),ci=l(e,"A",{id:!0}),r(ci).forEach(t),Qw=c(e),Os=l(e,"H3",{class:!0});var rq=r(Os);Ht=l(rq,"A",{id:!0,class:!0,href:!0});var PM=r(Ht);Bf=l(PM,"SPAN",{});var zM=r(Bf);d(xo.$$.fragment,zM),zM.forEach(t),PM.forEach(t),J5=c(rq),Wf=l(rq,"SPAN",{});var DM=r(Wf);X5=n(DM,"Configuration"),DM.forEach(t),rq.forEach(t),ey=c(e),Bt=l(e,"P",{});var pq=r(Bt);Q5=n(pq,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Ro=l(pq,"A",{href:!0,rel:!0});var OM=r(Ro);e8=n(OM,"following documentation"),OM.forEach(t),s8=n(pq,"."),pq.forEach(t),sy=c(e),Wt=l(e,"P",{});var iq=r(Wt);t8=n(iq,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Io=l(iq,"A",{href:!0,rel:!0});var AM=r(Io);a8=n(AM,`the DeepSpeedExamples
repo`),AM.forEach(t),n8=n(iq,":"),iq.forEach(t),ty=c(e),d(Uo.$$.fragment,e),ay=c(e),Ft=l(e,"P",{});var uq=r(Ft);o8=n(uq,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Ff=l(uq,"CODE",{});var TM=r(Ff);l8=n(TM,".json"),TM.forEach(t),r8=n(uq," files with:"),uq.forEach(t),ny=c(e),d(Go.$$.fragment,e),oy=c(e),Vt=l(e,"P",{});var cq=r(Vt);p8=n(cq,"Some more examples are to be found in the "),Mo=l(cq,"A",{href:!0,rel:!0});var SM=r(Mo);i8=n(SM,"main repo"),SM.forEach(t),u8=n(cq," as well."),cq.forEach(t),ly=c(e),hi=l(e,"P",{});var CM=r(hi);c8=n(CM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),CM.forEach(t),ry=c(e),ne=l(e,"P",{});var xn=r(ne);h8=n(xn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Vf=l(xn,"CODE",{});var xM=r(Vf);f8=n(xM,"AdamW"),xM.forEach(t),d8=n(xn," optimizer and "),Yf=l(xn,"CODE",{});var RM=r(Yf);m8=n(RM,"WarmupLR"),RM.forEach(t),_8=n(xn,` scheduler and will enable mixed
precision training if `),Kf=l(xn,"CODE",{});var IM=r(Kf);v8=n(IM,"--fp16"),IM.forEach(t),j8=n(xn," is passed:"),xn.forEach(t),py=c(e),d(Lo.$$.fragment,e),iy=c(e),Yt=l(e,"P",{});var hq=r(Yt);w8=n(hq,"When you execute the program, DeepSpeed will log the configuration it received from the "),fi=l(hq,"A",{href:!0});var UM=r(fi);y8=n(UM,"Trainer"),UM.forEach(t),g8=n(hq,`
to the console, so you can see exactly what was the final configuration passed to it.`),hq.forEach(t),uy=c(e),di=l(e,"A",{id:!0}),r(di).forEach(t),cy=c(e),As=l(e,"H3",{class:!0});var fq=r(As);Kt=l(fq,"A",{id:!0,class:!0,href:!0});var GM=r(Kt);Jf=l(GM,"SPAN",{});var MM=r(Jf);d(Zo.$$.fragment,MM),MM.forEach(t),GM.forEach(t),b8=c(fq),Xf=l(fq,"SPAN",{});var LM=r(Xf);q8=n(LM,"Passing Configuration"),LM.forEach(t),fq.forEach(t),hy=c(e),U=l(e,"P",{});var ye=r(U);E8=n(ye,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),mi=l(ye,"A",{href:!0});var ZM=r(mi);$8=n(ZM,"Trainer"),ZM.forEach(t),k8=n(ye," via "),_i=l(ye,"A",{href:!0});var NM=r(_i);P8=n(NM,"TrainingArguments"),NM.forEach(t),z8=n(ye," then for the "),Qf=l(ye,"CODE",{});var HM=r(Qf);D8=n(HM,"deepspeed"),HM.forEach(t),O8=n(ye,` argument you can
pass a nested `),ed=l(ye,"CODE",{});var BM=r(ed);A8=n(BM,"dict"),BM.forEach(t),T8=n(ye,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),vi=l(ye,"A",{href:!0});var WM=r(vi);S8=n(WM,"TrainingArguments"),WM.forEach(t),C8=n(ye,"."),ye.forEach(t),fy=c(e),ji=l(e,"P",{});var FM=r(ji);x8=n(FM,"To summarize you can do:"),FM.forEach(t),dy=c(e),d(No.$$.fragment,e),my=c(e),wi=l(e,"P",{});var VM=r(wi);R8=n(VM,"or:"),VM.forEach(t),_y=c(e),d(Ho.$$.fragment,e),vy=c(e),yi=l(e,"A",{id:!0}),r(yi).forEach(t),jy=c(e),Ts=l(e,"H3",{class:!0});var dq=r(Ts);Jt=l(dq,"A",{id:!0,class:!0,href:!0});var YM=r(Jt);sd=l(YM,"SPAN",{});var KM=r(sd);d(Bo.$$.fragment,KM),KM.forEach(t),YM.forEach(t),I8=c(dq),td=l(dq,"SPAN",{});var JM=r(td);U8=n(JM,"Shared Configuration"),JM.forEach(t),dq.forEach(t),wy=c(e),d(Xt.$$.fragment,e),yy=c(e),Me=l(e,"P",{});var oh=r(Me);G8=n(oh,"Some configuration values are required by both the "),gi=l(oh,"A",{href:!0});var XM=r(gi);M8=n(XM,"Trainer"),XM.forEach(t),L8=n(oh,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),bi=l(oh,"A",{href:!0});var QM=r(bi);Z8=n(QM,"Trainer"),QM.forEach(t),N8=n(oh," command line arguments."),oh.forEach(t),gy=c(e),Qt=l(e,"P",{});var mq=r(Qt);H8=n(mq,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),qi=l(mq,"A",{href:!0});var eL=r(qi);B8=n(eL,"Trainer"),eL.forEach(t),W8=n(mq,` do the majority
of configuration for you.`),mq.forEach(t),by=c(e),Le=l(e,"P",{});var lh=r(Le);F8=n(lh,"Therefore, in the rest of this guide you will find a special configuration value: "),ad=l(lh,"CODE",{});var sL=r(ad);V8=n(sL,"auto"),sL.forEach(t),Y8=n(lh,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ei=l(lh,"A",{href:!0});var tL=r(Ei);K8=n(tL,"Trainer"),tL.forEach(t),J8=n(lh,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),lh.forEach(t),qy=c(e),$i=l(e,"P",{});var aL=r($i);X8=n(aL,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),aL.forEach(t),Ey=c(e),ea=l(e,"P",{});var _q=r(ea);Q8=n(_q,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ki=l(_q,"A",{href:!0});var nL=r(ki);ek=n(nL,"TrainingArguments"),nL.forEach(t),sk=n(_q," based on that. The steps are:"),_q.forEach(t),$y=c(e),sa=l(e,"OL",{});var vq=r(sa);nd=l(vq,"LI",{});var oL=r(nd);tk=n(oL,"Create or load the DeepSpeed configuration to be used as a master configuration"),oL.forEach(t),ak=c(vq),Wo=l(vq,"LI",{});var jq=r(Wo);nk=n(jq,"Create the "),Pi=l(jq,"A",{href:!0});var lL=r(Pi);ok=n(lL,"TrainingArguments"),lL.forEach(t),lk=n(jq," object based on these values"),jq.forEach(t),vq.forEach(t),ky=c(e),oe=l(e,"P",{});var Rn=r(oe);rk=n(Rn,"Do note that some values, such as "),od=l(Rn,"CODE",{});var rL=r(od);pk=n(rL,"scheduler.params.total_num_steps"),rL.forEach(t),ik=n(Rn,` are calculated by
`),zi=l(Rn,"A",{href:!0});var pL=r(zi);uk=n(pL,"Trainer"),pL.forEach(t),ck=n(Rn," during "),ld=l(Rn,"CODE",{});var iL=r(ld);hk=n(iL,"train"),iL.forEach(t),fk=n(Rn,", but you can of course do the math yourself."),Rn.forEach(t),Py=c(e),Di=l(e,"A",{id:!0}),r(Di).forEach(t),zy=c(e),Ss=l(e,"H3",{class:!0});var wq=r(Ss);ta=l(wq,"A",{id:!0,class:!0,href:!0});var uL=r(ta);rd=l(uL,"SPAN",{});var cL=r(rd);d(Fo.$$.fragment,cL),cL.forEach(t),uL.forEach(t),dk=c(wq),pd=l(wq,"SPAN",{});var hL=r(pd);mk=n(hL,"ZeRO"),hL.forEach(t),wq.forEach(t),Dy=c(e),Vo=l(e,"P",{});var vU=r(Vo);Yo=l(vU,"A",{href:!0,rel:!0});var fL=r(Yo);_k=n(fL,"Zero Redundancy Optimizer (ZeRO)"),fL.forEach(t),vk=n(vU,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),vU.forEach(t),Oy=c(e),Ze=l(e,"P",{});var rh=r(Ze);jk=n(rh,"The "),id=l(rh,"CODE",{});var dL=r(id);wk=n(dL,"zero_optimization"),dL.forEach(t),yk=n(rh," section of the configuration file is the most important part ("),Ko=l(rh,"A",{href:!0,rel:!0});var mL=r(Ko);gk=n(mL,"docs"),mL.forEach(t),bk=n(rh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),rh.forEach(t),Ay=c(e),aa=l(e,"P",{});var yq=r(aa);qk=n(yq,"This section has to be configured exclusively via DeepSpeed configuration - the "),Oi=l(yq,"A",{href:!0});var _L=r(Oi);Ek=n(_L,"Trainer"),_L.forEach(t),$k=n(yq,` provides
no equivalent command line arguments.`),yq.forEach(t),Ty=c(e),Ai=l(e,"P",{});var vL=r(Ai);kk=n(vL,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),vL.forEach(t),Sy=c(e),Ti=l(e,"A",{id:!0}),r(Ti).forEach(t),Cy=c(e),Cs=l(e,"H4",{class:!0});var gq=r(Cs);na=l(gq,"A",{id:!0,class:!0,href:!0});var jL=r(na);ud=l(jL,"SPAN",{});var wL=r(ud);d(Jo.$$.fragment,wL),wL.forEach(t),jL.forEach(t),Pk=c(gq),cd=l(gq,"SPAN",{});var yL=r(cd);zk=n(yL,"ZeRO-2 Config"),yL.forEach(t),gq.forEach(t),xy=c(e),Si=l(e,"P",{});var gL=r(Si);Dk=n(gL,"The following is an example of configuration for ZeRO stage 2:"),gL.forEach(t),Ry=c(e),d(Xo.$$.fragment,e),Iy=c(e),Ci=l(e,"P",{});var bL=r(Ci);hd=l(bL,"STRONG",{});var qL=r(hd);Ok=n(qL,"Performance tuning:"),qL.forEach(t),bL.forEach(t),Uy=c(e),Ne=l(e,"UL",{});var ph=r(Ne);xs=l(ph,"LI",{});var ih=r(xs);Ak=n(ih,"enabling "),fd=l(ih,"CODE",{});var EL=r(fd);Tk=n(EL,"offload_optimizer"),EL.forEach(t),Sk=n(ih," should reduce GPU RAM usage (it requires "),dd=l(ih,"CODE",{});var $L=r(dd);Ck=n($L,'"stage": 2'),$L.forEach(t),xk=n(ih,")"),ih.forEach(t),Rk=c(ph),G=l(ph,"LI",{});var se=r(G);md=l(se,"CODE",{});var kL=r(md);Ik=n(kL,'"overlap_comm": true'),kL.forEach(t),Uk=n(se," trades off increased GPU RAM usage to lower all-reduce latency. "),_d=l(se,"CODE",{});var PL=r(_d);Gk=n(PL,"overlap_comm"),PL.forEach(t),Mk=n(se,` uses 4.5x
the `),vd=l(se,"CODE",{});var zL=r(vd);Lk=n(zL,"allgather_bucket_size"),zL.forEach(t),Zk=n(se," and "),jd=l(se,"CODE",{});var DL=r(jd);Nk=n(DL,"reduce_bucket_size"),DL.forEach(t),Hk=n(se,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),wd=l(se,"CODE",{});var OL=r(wd);Bk=n(OL,"5e8 x 2Bytes x 2 x 4.5"),OL.forEach(t),Wk=n(se,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),yd=l(se,"CODE",{});var AL=r(yd);Fk=n(AL,"2e8"),AL.forEach(t),Vk=n(se,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),se.forEach(t),Yk=c(ph),gd=l(ph,"LI",{});var TL=r(gd);Kk=n(TL,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),TL.forEach(t),ph.forEach(t),Gy=c(e),He=l(e,"P",{});var uh=r(He);Jk=n(uh,"Additionally, "),bd=l(uh,"CODE",{});var SL=r(bd);Xk=n(SL,"deepspeed==0.4.4"),SL.forEach(t),Qk=n(uh," added a new option "),qd=l(uh,"CODE",{});var CL=r(qd);e7=n(CL,"round_robin_gradients"),CL.forEach(t),s7=n(uh," which you can enable with:"),uh.forEach(t),My=c(e),d(Qo.$$.fragment,e),Ly=c(e),xi=l(e,"P",{});var xL=r(xi);t7=n(xL,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),xL.forEach(t),Zy=c(e),Ri=l(e,"A",{id:!0}),r(Ri).forEach(t),Ny=c(e),Rs=l(e,"H4",{class:!0});var bq=r(Rs);oa=l(bq,"A",{id:!0,class:!0,href:!0});var RL=r(oa);Ed=l(RL,"SPAN",{});var IL=r(Ed);d(el.$$.fragment,IL),IL.forEach(t),RL.forEach(t),a7=c(bq),$d=l(bq,"SPAN",{});var UL=r($d);n7=n(UL,"ZeRO-3 Config"),UL.forEach(t),bq.forEach(t),Hy=c(e),Ii=l(e,"P",{});var GL=r(Ii);o7=n(GL,"The following is an example of configuration for ZeRO stage 3:"),GL.forEach(t),By=c(e),d(sl.$$.fragment,e),Wy=c(e),V=l(e,"P",{});var ws=r(V);l7=n(ws,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),kd=l(ws,"CODE",{});var ML=r(kd);r7=n(ML,'"device": "cpu"'),ML.forEach(t),p7=n(ws,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Pd=l(ws,"CODE",{});var LL=r(Pd);i7=n(LL,"none"),LL.forEach(t),u7=n(ws," instead of "),zd=l(ws,"CODE",{});var ZL=r(zd);c7=n(ZL,"cpu"),ZL.forEach(t),h7=n(ws," for the "),Dd=l(ws,"CODE",{});var NL=r(Dd);f7=n(NL,"device"),NL.forEach(t),d7=n(ws,` entry. Offloading to
NVMe is discussed further down.`),ws.forEach(t),Fy=c(e),Be=l(e,"P",{});var ch=r(Be);m7=n(ch,"Pinned memory is enabled with "),Od=l(ch,"CODE",{});var HL=r(Od);_7=n(HL,"pin_memory"),HL.forEach(t),v7=n(ch," set to "),Ad=l(ch,"CODE",{});var BL=r(Ad);j7=n(BL,"true"),BL.forEach(t),w7=n(ch,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),ch.forEach(t),Vy=c(e),Ui=l(e,"P",{});var WL=r(Ui);Td=l(WL,"STRONG",{});var FL=r(Td);y7=n(FL,"Performance tuning:"),FL.forEach(t),WL.forEach(t),Yy=c(e),la=l(e,"UL",{});var qq=r(la);tl=l(qq,"LI",{});var Eq=r(tl);Sd=l(Eq,"CODE",{});var VL=r(Sd);g7=n(VL,"stage3_max_live_parameters"),VL.forEach(t),b7=n(Eq,": "),Cd=l(Eq,"CODE",{});var YL=r(Cd);q7=n(YL,"1e9"),YL.forEach(t),Eq.forEach(t),E7=c(qq),al=l(qq,"LI",{});var $q=r(al);xd=l($q,"CODE",{});var KL=r(xd);$7=n(KL,"stage3_max_reuse_distance"),KL.forEach(t),k7=n($q,": "),Rd=l($q,"CODE",{});var JL=r(Rd);P7=n(JL,"1e9"),JL.forEach(t),$q.forEach(t),qq.forEach(t),Ky=c(e),M=l(e,"P",{});var ge=r(M);z7=n(ge,"If hitting OOM reduce "),Id=l(ge,"CODE",{});var XL=r(Id);D7=n(XL,"stage3_max_live_parameters"),XL.forEach(t),O7=n(ge," and "),Ud=l(ge,"CODE",{});var QL=r(Ud);A7=n(QL,"stage3_max_reuse_distance"),QL.forEach(t),T7=n(ge,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Gd=l(ge,"CODE",{});var eZ=r(Gd);S7=n(eZ,"1e9"),eZ.forEach(t),C7=n(ge,` would consume ~2GB. The memory is shared by
`),Md=l(ge,"CODE",{});var sZ=r(Md);x7=n(sZ,"stage3_max_live_parameters"),sZ.forEach(t),R7=n(ge," and "),Ld=l(ge,"CODE",{});var tZ=r(Ld);I7=n(tZ,"stage3_max_reuse_distance"),tZ.forEach(t),U7=n(ge,", so it\u2019s not additive, it\u2019s just 2GB total."),ge.forEach(t),Jy=c(e),ze=l(e,"P",{});var gp=r(ze);Zd=l(gp,"CODE",{});var aZ=r(Zd);G7=n(aZ,"stage3_max_live_parameters"),aZ.forEach(t),M7=n(gp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Nd=l(gp,"CODE",{});var nZ=r(Nd);L7=n(nZ,"stage3_max_reuse_distance"),nZ.forEach(t),Z7=n(gp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Hd=l(gp,"CODE",{});var oZ=r(Hd);N7=n(oZ,"stage3_max_reuse_distance"),oZ.forEach(t),H7=n(gp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),gp.forEach(t),Xy=c(e),Gi=l(e,"P",{});var lZ=r(Gi);B7=n(lZ,"The following configuration values depend on the model\u2019s hidden size:"),lZ.forEach(t),Qy=c(e),We=l(e,"UL",{});var hh=r(We);nl=l(hh,"LI",{});var kq=r(nl);Bd=l(kq,"CODE",{});var rZ=r(Bd);W7=n(rZ,"reduce_bucket_size"),rZ.forEach(t),F7=n(kq,": "),Wd=l(kq,"CODE",{});var pZ=r(Wd);V7=n(pZ,"hidden_size*hidden_size"),pZ.forEach(t),kq.forEach(t),Y7=c(hh),ol=l(hh,"LI",{});var Pq=r(ol);Fd=l(Pq,"CODE",{});var iZ=r(Fd);K7=n(iZ,"stage3_prefetch_bucket_size"),iZ.forEach(t),J7=n(Pq,": "),Vd=l(Pq,"CODE",{});var uZ=r(Vd);X7=n(uZ,"0.9 * hidden_size * hidden_size"),uZ.forEach(t),Pq.forEach(t),Q7=c(hh),ll=l(hh,"LI",{});var zq=r(ll);Yd=l(zq,"CODE",{});var cZ=r(Yd);e9=n(cZ,"stage3_param_persistence_threshold"),cZ.forEach(t),s9=n(zq,": "),Kd=l(zq,"CODE",{});var hZ=r(Kd);t9=n(hZ,"10 * hidden_size"),hZ.forEach(t),zq.forEach(t),hh.forEach(t),eg=c(e),Fe=l(e,"P",{});var fh=r(Fe);a9=n(fh,"therefore set these values to "),Jd=l(fh,"CODE",{});var fZ=r(Jd);n9=n(fZ,"auto"),fZ.forEach(t),o9=n(fh," and the "),Mi=l(fh,"A",{href:!0});var dZ=r(Mi);l9=n(dZ,"Trainer"),dZ.forEach(t),r9=n(fh,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),fh.forEach(t),sg=c(e),rl=l(e,"P",{});var jU=r(rl);Xd=l(jU,"CODE",{});var mZ=r(Xd);p9=n(mZ,"stage3_gather_16bit_weights_on_model_save"),mZ.forEach(t),i9=n(jU,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),jU.forEach(t),tg=c(e),le=l(e,"P",{});var In=r(le);u9=n(In,"If you\u2019re migrating from ZeRO-2 configuration note that "),Qd=l(In,"CODE",{});var _Z=r(Qd);c9=n(_Z,"allgather_partitions"),_Z.forEach(t),h9=n(In,", "),em=l(In,"CODE",{});var vZ=r(em);f9=n(vZ,"allgather_bucket_size"),vZ.forEach(t),d9=n(In,` and
`),sm=l(In,"CODE",{});var jZ=r(sm);m9=n(jZ,"reduce_scatter"),jZ.forEach(t),_9=n(In,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),In.forEach(t),ag=c(e),Li=l(e,"UL",{});var wZ=r(Li);pl=l(wZ,"LI",{});var Dq=r(pl);tm=l(Dq,"CODE",{});var yZ=r(tm);v9=n(yZ,"sub_group_size"),yZ.forEach(t),j9=n(Dq,": "),am=l(Dq,"CODE",{});var gZ=r(am);w9=n(gZ,"1e9"),gZ.forEach(t),Dq.forEach(t),wZ.forEach(t),ng=c(e),De=l(e,"P",{});var bp=r(De);nm=l(bp,"CODE",{});var bZ=r(nm);y9=n(bZ,"sub_group_size"),bZ.forEach(t),g9=n(bp,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),om=l(bp,"CODE",{});var qZ=r(om);b9=n(qZ,"sub_group_size"),qZ.forEach(t),q9=n(bp,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),lm=l(bp,"CODE",{});var EZ=r(lm);E9=n(EZ,"sub_group_size"),EZ.forEach(t),$9=n(bp,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),bp.forEach(t),og=c(e),Ve=l(e,"P",{});var dh=r(Ve);k9=n(dh,"You can leave "),rm=l(dh,"CODE",{});var $Z=r(rm);P9=n($Z,"sub_group_size"),$Z.forEach(t),z9=n(dh," to its default value of "),pm=l(dh,"EM",{});var kZ=r(pm);D9=n(kZ,"1e9"),kZ.forEach(t),O9=n(dh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),dh.forEach(t),lg=c(e),ra=l(e,"OL",{});var Oq=r(ra);il=l(Oq,"LI",{});var Aq=r(il);A9=n(Aq,"Running into OOM during optimizer step: Reduce "),im=l(Aq,"CODE",{});var PZ=r(im);T9=n(PZ,"sub_group_size"),PZ.forEach(t),S9=n(Aq," to reduce memory utilization of temporary buffers"),Aq.forEach(t),C9=c(Oq),ul=l(Oq,"LI",{});var Tq=r(ul);x9=n(Tq,"Optimizer Step is taking a long time: Increase "),um=l(Tq,"CODE",{});var zZ=r(um);R9=n(zZ,"sub_group_size"),zZ.forEach(t),I9=n(Tq,` to improve bandwidth utilization as a result of
the increased data buffers.`),Tq.forEach(t),Oq.forEach(t),rg=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),pg=c(e),Is=l(e,"H3",{class:!0});var Sq=r(Is);pa=l(Sq,"A",{id:!0,class:!0,href:!0});var DZ=r(pa);cm=l(DZ,"SPAN",{});var OZ=r(cm);d(cl.$$.fragment,OZ),OZ.forEach(t),DZ.forEach(t),U9=c(Sq),hm=l(Sq,"SPAN",{});var AZ=r(hm);G9=n(AZ,"NVMe Support"),AZ.forEach(t),Sq.forEach(t),ig=c(e),Ni=l(e,"P",{});var TZ=r(Ni);M9=n(TZ,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),TZ.forEach(t),ug=c(e),Hi=l(e,"P",{});var SZ=r(Hi);L9=n(SZ,"The following configuration example enables NVMe to offload both optimizer states and the params:"),SZ.forEach(t),cg=c(e),d(hl.$$.fragment,e),hg=c(e),ia=l(e,"P",{});var Cq=r(ia);Z9=n(Cq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),fm=l(Cq,"EM",{});var CZ=r(fm);N9=n(CZ,"\u201Cdevice\u201D: \u201Ccpu\u201D"),CZ.forEach(t),H9=n(Cq,")."),Cq.forEach(t),fg=c(e),Ye=l(e,"P",{});var mh=r(Ye);B9=n(mh,"Here is the full documentation for offloading "),fl=l(mh,"A",{href:!0,rel:!0});var xZ=r(fl);W9=n(xZ,"optimizer states"),xZ.forEach(t),F9=n(mh," and "),dl=l(mh,"A",{href:!0,rel:!0});var RZ=r(dl);V9=n(RZ,"parameters"),RZ.forEach(t),Y9=n(mh,"."),mh.forEach(t),dg=c(e),ua=l(e,"P",{});var xq=r(ua);K9=n(xq,"Make sure that your "),dm=l(xq,"CODE",{});var IZ=r(dm);J9=n(IZ,"nvme_path"),IZ.forEach(t),X9=n(xq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),xq.forEach(t),mg=c(e),Ke=l(e,"P",{});var _h=r(Ke);Q9=n(_h,"In order to figure out the optimal "),mm=l(_h,"CODE",{});var UZ=r(mm);eP=n(UZ,"aio"),UZ.forEach(t),sP=n(_h,` configuration block you must run a benchmark on your target setup, as
`),ml=l(_h,"A",{href:!0,rel:!0});var GZ=r(ml);tP=n(GZ,"explained here"),GZ.forEach(t),aP=n(_h,"."),_h.forEach(t),_g=c(e),Bi=l(e,"A",{id:!0}),r(Bi).forEach(t),vg=c(e),Us=l(e,"H4",{class:!0});var Rq=r(Us);ca=l(Rq,"A",{id:!0,class:!0,href:!0});var MZ=r(ca);_m=l(MZ,"SPAN",{});var LZ=r(_m);d(_l.$$.fragment,LZ),LZ.forEach(t),MZ.forEach(t),nP=c(Rq),vm=l(Rq,"SPAN",{});var ZZ=r(vm);oP=n(ZZ,"ZeRO-2 vs ZeRO-3 Performance"),ZZ.forEach(t),Rq.forEach(t),jg=c(e),Wi=l(e,"P",{});var NZ=r(Wi);lP=n(NZ,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),NZ.forEach(t),wg=c(e),Fi=l(e,"P",{});var HZ=r(Fi);rP=n(HZ,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),HZ.forEach(t),yg=c(e),ha=l(e,"UL",{});var Iq=r(ha);Gs=l(Iq,"LI",{});var vh=r(Gs);pP=n(vh,"set "),jm=l(vh,"CODE",{});var BZ=r(jm);iP=n(BZ,"stage3_param_persistence_threshold"),BZ.forEach(t),uP=n(vh," to a very large number - larger than the largest parameter, e.g., "),wm=l(vh,"CODE",{});var WZ=r(wm);cP=n(WZ,"6 * hidden_size * hidden_size"),WZ.forEach(t),hP=n(vh,". This will keep the parameters on the GPUs."),vh.forEach(t),fP=c(Iq),vl=l(Iq,"LI",{});var Uq=r(vl);dP=n(Uq,"turn off "),ym=l(Uq,"CODE",{});var FZ=r(ym);mP=n(FZ,"offload_params"),FZ.forEach(t),_P=n(Uq," since ZeRO-2 doesn\u2019t have that option."),Uq.forEach(t),Iq.forEach(t),gg=c(e),Je=l(e,"P",{});var jh=r(Je);vP=n(jh,"The performance will likely improve significantly with just "),gm=l(jh,"CODE",{});var VZ=r(gm);jP=n(VZ,"offload_params"),VZ.forEach(t),wP=n(jh,` turned off, even if you don\u2019t change
`),bm=l(jh,"CODE",{});var YZ=r(bm);yP=n(YZ,"stage3_param_persistence_threshold"),YZ.forEach(t),gP=n(jh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),jh.forEach(t),bg=c(e),Vi=l(e,"A",{id:!0}),r(Vi).forEach(t),qg=c(e),Ms=l(e,"H4",{class:!0});var Gq=r(Ms);fa=l(Gq,"A",{id:!0,class:!0,href:!0});var KZ=r(fa);qm=l(KZ,"SPAN",{});var JZ=r(qm);d(jl.$$.fragment,JZ),JZ.forEach(t),KZ.forEach(t),bP=c(Gq),Em=l(Gq,"SPAN",{});var XZ=r(Em);qP=n(XZ,"ZeRO-2 Example"),XZ.forEach(t),Gq.forEach(t),Eg=c(e),da=l(e,"P",{});var Mq=r(da);EP=n(Mq,"Here is a full ZeRO-2 auto-configuration file "),$m=l(Mq,"CODE",{});var QZ=r($m);$P=n(QZ,"ds_config_zero2.json"),QZ.forEach(t),kP=n(Mq,":"),Mq.forEach(t),$g=c(e),d(wl.$$.fragment,e),kg=c(e),ma=l(e,"P",{});var Lq=r(ma);PP=n(Lq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),km=l(Lq,"CODE",{});var eN=r(km);zP=n(eN,"auto"),eN.forEach(t),DP=n(Lq," settings in it."),Lq.forEach(t),Pg=c(e),d(yl.$$.fragment,e),zg=c(e),Yi=l(e,"A",{id:!0}),r(Yi).forEach(t),Dg=c(e),Ls=l(e,"H4",{class:!0});var Zq=r(Ls);_a=l(Zq,"A",{id:!0,class:!0,href:!0});var sN=r(_a);Pm=l(sN,"SPAN",{});var tN=r(Pm);d(gl.$$.fragment,tN),tN.forEach(t),sN.forEach(t),OP=c(Zq),zm=l(Zq,"SPAN",{});var aN=r(zm);AP=n(aN,"ZeRO-3 Example"),aN.forEach(t),Zq.forEach(t),Og=c(e),va=l(e,"P",{});var Nq=r(va);TP=n(Nq,"Here is a full ZeRO-3 auto-configuration file "),Dm=l(Nq,"CODE",{});var nN=r(Dm);SP=n(nN,"ds_config_zero3.json"),nN.forEach(t),CP=n(Nq,":"),Nq.forEach(t),Ag=c(e),d(bl.$$.fragment,e),Tg=c(e),ja=l(e,"P",{});var Hq=r(ja);xP=n(Hq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Om=l(Hq,"CODE",{});var oN=r(Om);RP=n(oN,"auto"),oN.forEach(t),IP=n(Hq," settings in it."),Hq.forEach(t),Sg=c(e),d(ql.$$.fragment,e),Cg=c(e),Zs=l(e,"H3",{class:!0});var Bq=r(Zs);wa=l(Bq,"A",{id:!0,class:!0,href:!0});var lN=r(wa);Am=l(lN,"SPAN",{});var rN=r(Am);d(El.$$.fragment,rN),rN.forEach(t),lN.forEach(t),UP=c(Bq),Tm=l(Bq,"SPAN",{});var pN=r(Tm);GP=n(pN,"Optimizer and Scheduler"),pN.forEach(t),Bq.forEach(t),xg=c(e),ya=l(e,"P",{});var Wq=r(ya);MP=n(Wq,"As long as you don\u2019t enable "),Sm=l(Wq,"CODE",{});var iN=r(Sm);LP=n(iN,"offload_optimizer"),iN.forEach(t),ZP=n(Wq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Wq.forEach(t),Rg=c(e),Ki=l(e,"P",{});var uN=r(Ki);NP=n(uN,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),uN.forEach(t),Ig=c(e),ga=l(e,"P",{});var Fq=r(ga);HP=n(Fq,"It is possible to use a non-DeepSpeed optimizer when "),Cm=l(Fq,"CODE",{});var cN=r(Cm);BP=n(cN,"offload_optimizer"),cN.forEach(t),WP=n(Fq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Fq.forEach(t),Ug=c(e),Ji=l(e,"A",{id:!0}),r(Ji).forEach(t),Gg=c(e),Ns=l(e,"H4",{class:!0});var Vq=r(Ns);ba=l(Vq,"A",{id:!0,class:!0,href:!0});var hN=r(ba);xm=l(hN,"SPAN",{});var fN=r(xm);d($l.$$.fragment,fN),fN.forEach(t),hN.forEach(t),FP=c(Vq),Rm=l(Vq,"SPAN",{});var dN=r(Rm);VP=n(dN,"Optimizer"),dN.forEach(t),Vq.forEach(t),Mg=c(e),Xe=l(e,"P",{});var wh=r(Xe);YP=n(wh,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Im=l(wh,"CODE",{});var mN=r(Im);KP=n(mN,"torch"),mN.forEach(t),JP=n(wh,". The full documentation is "),kl=l(wh,"A",{href:!0,rel:!0});var _N=r(kl);XP=n(_N,"here"),_N.forEach(t),QP=n(wh,"."),wh.forEach(t),Lg=c(e),$=l(e,"P",{});var A=r($);ez=n(A,"If you don\u2019t configure the "),Um=l(A,"CODE",{});var vN=r(Um);sz=n(vN,"optimizer"),vN.forEach(t),tz=n(A," entry in the configuration file, the "),Xi=l(A,"A",{href:!0});var jN=r(Xi);az=n(jN,"Trainer"),jN.forEach(t),nz=n(A,` will
automatically set it to `),Gm=l(A,"CODE",{});var wN=r(Gm);oz=n(wN,"AdamW"),wN.forEach(t),lz=n(A,` and will use the supplied values or the defaults for the following command line
arguments: `),Mm=l(A,"CODE",{});var yN=r(Mm);rz=n(yN,"--learning_rate"),yN.forEach(t),pz=n(A,", "),Lm=l(A,"CODE",{});var gN=r(Lm);iz=n(gN,"--adam_beta1"),gN.forEach(t),uz=n(A,", "),Zm=l(A,"CODE",{});var bN=r(Zm);cz=n(bN,"--adam_beta2"),bN.forEach(t),hz=n(A,", "),Nm=l(A,"CODE",{});var qN=r(Nm);fz=n(qN,"--adam_epsilon"),qN.forEach(t),dz=n(A," and "),Hm=l(A,"CODE",{});var EN=r(Hm);mz=n(EN,"--weight_decay"),EN.forEach(t),_z=n(A,"."),A.forEach(t),Zg=c(e),Qe=l(e,"P",{});var yh=r(Qe);vz=n(yh,"Here is an example of the auto-configured "),Bm=l(yh,"CODE",{});var $N=r(Bm);jz=n($N,"optimizer"),$N.forEach(t),wz=n(yh," entry for "),Wm=l(yh,"CODE",{});var kN=r(Wm);yz=n(kN,"AdamW"),kN.forEach(t),gz=n(yh,":"),yh.forEach(t),Ng=c(e),d(Pl.$$.fragment,e),Hg=c(e),Qi=l(e,"P",{});var PN=r(Qi);bz=n(PN,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),PN.forEach(t),Bg=c(e),re=l(e,"UL",{});var Un=r(re);zl=l(Un,"LI",{});var Yq=r(zl);Fm=l(Yq,"CODE",{});var zN=r(Fm);qz=n(zN,"lr"),zN.forEach(t),Ez=n(Yq," with the value of "),Vm=l(Yq,"CODE",{});var DN=r(Vm);$z=n(DN,"--learning_rate"),DN.forEach(t),Yq.forEach(t),kz=c(Un),Dl=l(Un,"LI",{});var Kq=r(Dl);Ym=l(Kq,"CODE",{});var ON=r(Ym);Pz=n(ON,"betas"),ON.forEach(t),zz=n(Kq," with the value of "),Km=l(Kq,"CODE",{});var AN=r(Km);Dz=n(AN,"--adam_beta1 --adam_beta2"),AN.forEach(t),Kq.forEach(t),Oz=c(Un),Ol=l(Un,"LI",{});var Jq=r(Ol);Jm=l(Jq,"CODE",{});var TN=r(Jm);Az=n(TN,"eps"),TN.forEach(t),Tz=n(Jq," with the value of "),Xm=l(Jq,"CODE",{});var SN=r(Xm);Sz=n(SN,"--adam_epsilon"),SN.forEach(t),Jq.forEach(t),Cz=c(Un),Al=l(Un,"LI",{});var Xq=r(Al);Qm=l(Xq,"CODE",{});var CN=r(Qm);xz=n(CN,"weight_decay"),CN.forEach(t),Rz=n(Xq," with the value of "),e_=l(Xq,"CODE",{});var xN=r(e_);Iz=n(xN,"--weight_decay"),xN.forEach(t),Xq.forEach(t),Un.forEach(t),Wg=c(e),eu=l(e,"P",{});var RN=r(eu);Uz=n(RN,"Therefore please remember to tune the shared hyperparameters on the command line."),RN.forEach(t),Fg=c(e),su=l(e,"P",{});var IN=r(su);Gz=n(IN,"You can also set the values explicitly:"),IN.forEach(t),Vg=c(e),d(Tl.$$.fragment,e),Yg=c(e),qa=l(e,"P",{});var Qq=r(qa);Mz=n(Qq,"But then you\u2019re on your own synchronizing the "),tu=l(Qq,"A",{href:!0});var UN=r(tu);Lz=n(UN,"Trainer"),UN.forEach(t),Zz=n(Qq,` command line arguments and the DeepSpeed
configuration.`),Qq.forEach(t),Kg=c(e),au=l(e,"P",{});var GN=r(au);Nz=n(GN,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),GN.forEach(t),Jg=c(e),d(Sl.$$.fragment,e),Xg=c(e),pe=l(e,"P",{});var Gn=r(pe);Hz=n(Gn,"Similarly to "),s_=l(Gn,"CODE",{});var MN=r(s_);Bz=n(MN,"AdamW"),MN.forEach(t),Wz=n(Gn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),t_=l(Gn,"CODE",{});var LN=r(t_);Fz=n(LN,"weight_decay"),LN.forEach(t),Vz=n(Gn," around "),a_=l(Gn,"CODE",{});var ZN=r(a_);Yz=n(ZN,"0.01"),ZN.forEach(t),Kz=n(Gn,"."),Gn.forEach(t),Qg=c(e),nu=l(e,"A",{id:!0}),r(nu).forEach(t),e2=c(e),Hs=l(e,"H4",{class:!0});var eE=r(Hs);Ea=l(eE,"A",{id:!0,class:!0,href:!0});var NN=r(Ea);n_=l(NN,"SPAN",{});var HN=r(n_);d(Cl.$$.fragment,HN),HN.forEach(t),NN.forEach(t),Jz=c(eE),o_=l(eE,"SPAN",{});var BN=r(o_);Xz=n(BN,"Scheduler"),BN.forEach(t),eE.forEach(t),s2=c(e),L=l(e,"P",{});var be=r(L);Qz=n(be,"DeepSpeed supports "),l_=l(be,"CODE",{});var WN=r(l_);eD=n(WN,"LRRangeTest"),WN.forEach(t),sD=n(be,", "),r_=l(be,"CODE",{});var FN=r(r_);tD=n(FN,"OneCycle"),FN.forEach(t),aD=n(be,", "),p_=l(be,"CODE",{});var VN=r(p_);nD=n(VN,"WarmupLR"),VN.forEach(t),oD=n(be," and "),i_=l(be,"CODE",{});var YN=r(i_);lD=n(YN,"WarmupDecayLR"),YN.forEach(t),rD=n(be,` learning rate schedulers. The full
documentation is `),xl=l(be,"A",{href:!0,rel:!0});var KN=r(xl);pD=n(KN,"here"),KN.forEach(t),iD=n(be,"."),be.forEach(t),t2=c(e),ou=l(e,"P",{});var JN=r(ou);uD=n(JN,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),JN.forEach(t),a2=c(e),$a=l(e,"UL",{});var sE=r($a);Rl=l(sE,"LI",{});var tE=r(Rl);u_=l(tE,"CODE",{});var XN=r(u_);cD=n(XN,"WarmupLR"),XN.forEach(t),hD=n(tE," via "),c_=l(tE,"CODE",{});var QN=r(c_);fD=n(QN,"--lr_scheduler_type constant_with_warmup"),QN.forEach(t),tE.forEach(t),dD=c(sE),es=l(sE,"LI",{});var qp=r(es);h_=l(qp,"CODE",{});var eH=r(h_);mD=n(eH,"WarmupDecayLR"),eH.forEach(t),_D=n(qp," via "),f_=l(qp,"CODE",{});var sH=r(f_);vD=n(sH,"--lr_scheduler_type linear"),sH.forEach(t),jD=n(qp,". This is also the default value for "),d_=l(qp,"CODE",{});var tH=r(d_);wD=n(tH,"--lr_scheduler_type"),tH.forEach(t),yD=n(qp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),qp.forEach(t),sE.forEach(t),n2=c(e),D=l(e,"P",{});var K=r(D);gD=n(K,"If you don\u2019t configure the "),m_=l(K,"CODE",{});var aH=r(m_);bD=n(aH,"scheduler"),aH.forEach(t),qD=n(K," entry in the configuration file, the "),lu=l(K,"A",{href:!0});var nH=r(lu);ED=n(nH,"Trainer"),nH.forEach(t),$D=n(K,` will use
the values of `),__=l(K,"CODE",{});var oH=r(__);kD=n(oH,"--lr_scheduler_type"),oH.forEach(t),PD=n(K,", "),v_=l(K,"CODE",{});var lH=r(v_);zD=n(lH,"--learning_rate"),lH.forEach(t),DD=n(K," and "),j_=l(K,"CODE",{});var rH=r(j_);OD=n(rH,"--warmup_steps"),rH.forEach(t),AD=n(K," or "),w_=l(K,"CODE",{});var pH=r(w_);TD=n(pH,"--warmup_ratio"),pH.forEach(t),SD=n(K,` to configure a
\u{1F917} Transformers version of it.`),K.forEach(t),o2=c(e),ss=l(e,"P",{});var gh=r(ss);CD=n(gh,"Here is an example of the auto-configured "),y_=l(gh,"CODE",{});var iH=r(y_);xD=n(iH,"scheduler"),iH.forEach(t),RD=n(gh," entry for "),g_=l(gh,"CODE",{});var uH=r(g_);ID=n(uH,"WarmupLR"),uH.forEach(t),UD=n(gh,":"),gh.forEach(t),l2=c(e),d(Il.$$.fragment,e),r2=c(e),ts=l(e,"P",{});var bh=r(ts);GD=n(bh,"Since "),b_=l(bh,"EM",{});var cH=r(b_);MD=n(cH,"\u201Cauto\u201D"),cH.forEach(t),LD=n(bh," is used the "),ru=l(bh,"A",{href:!0});var hH=r(ru);ZD=n(hH,"Trainer"),hH.forEach(t),ND=n(bh,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),bh.forEach(t),p2=c(e),ie=l(e,"UL",{});var Mn=r(ie);ka=l(Mn,"LI",{});var jj=r(ka);q_=l(jj,"CODE",{});var fH=r(q_);HD=n(fH,"warmup_min_lr"),fH.forEach(t),BD=n(jj," with the value of "),E_=l(jj,"CODE",{});var dH=r(E_);WD=n(dH,"0"),dH.forEach(t),FD=n(jj,"."),jj.forEach(t),VD=c(Mn),Pa=l(Mn,"LI",{});var wj=r(Pa);$_=l(wj,"CODE",{});var mH=r($_);YD=n(mH,"warmup_max_lr"),mH.forEach(t),KD=n(wj," with the value of "),k_=l(wj,"CODE",{});var _H=r(k_);JD=n(_H,"--learning_rate"),_H.forEach(t),XD=n(wj,"."),wj.forEach(t),QD=c(Mn),as=l(Mn,"LI",{});var Ep=r(as);P_=l(Ep,"CODE",{});var vH=r(P_);eO=n(vH,"warmup_num_steps"),vH.forEach(t),sO=n(Ep," with the value of "),z_=l(Ep,"CODE",{});var jH=r(z_);tO=n(jH,"--warmup_steps"),jH.forEach(t),aO=n(Ep," if provided. Otherwise will use "),D_=l(Ep,"CODE",{});var wH=r(D_);nO=n(wH,"--warmup_ratio"),wH.forEach(t),oO=n(Ep,`
multiplied by the number of training steps and rounded up.`),Ep.forEach(t),lO=c(Mn),ns=l(Mn,"LI",{});var $p=r(ns);O_=l($p,"CODE",{});var yH=r(O_);rO=n(yH,"total_num_steps"),yH.forEach(t),pO=n($p," with either the value of "),A_=l($p,"CODE",{});var gH=r(A_);iO=n(gH,"--max_steps"),gH.forEach(t),uO=n($p,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),T_=l($p,"CODE",{});var bH=r(T_);cO=n(bH,"WarmupDecayLR"),bH.forEach(t),hO=n($p,")."),$p.forEach(t),Mn.forEach(t),i2=c(e),pu=l(e,"P",{});var qH=r(pu);fO=n(qH,"You can, of course, take over any or all of the configuration values and set those yourself:"),qH.forEach(t),u2=c(e),d(Ul.$$.fragment,e),c2=c(e),za=l(e,"P",{});var aE=r(za);dO=n(aE,"But then you\u2019re on your own synchronizing the "),iu=l(aE,"A",{href:!0});var EH=r(iu);mO=n(EH,"Trainer"),EH.forEach(t),_O=n(aE,` command line arguments and the DeepSpeed
configuration.`),aE.forEach(t),h2=c(e),Da=l(e,"P",{});var nE=r(Da);vO=n(nE,"For example, for "),S_=l(nE,"CODE",{});var $H=r(S_);jO=n($H,"WarmupDecayLR"),$H.forEach(t),wO=n(nE,", you can use the following entry:"),nE.forEach(t),f2=c(e),d(Gl.$$.fragment,e),d2=c(e),Y=l(e,"P",{});var ys=r(Y);yO=n(ys,"and "),C_=l(ys,"CODE",{});var kH=r(C_);gO=n(kH,"total_num_steps"),kH.forEach(t),bO=n(ys,", "),x_=l(ys,"CODE",{});var PH=r(x_);qO=n(PH,"warmup_max_lr"),PH.forEach(t),EO=n(ys,", "),R_=l(ys,"CODE",{});var zH=r(R_);$O=n(zH,"warmup_num_steps"),zH.forEach(t),kO=n(ys," and "),I_=l(ys,"CODE",{});var DH=r(I_);PO=n(DH,"total_num_steps"),DH.forEach(t),zO=n(ys," will be set at loading time."),ys.forEach(t),m2=c(e),uu=l(e,"A",{id:!0}),r(uu).forEach(t),_2=c(e),Bs=l(e,"H3",{class:!0});var oE=r(Bs);Oa=l(oE,"A",{id:!0,class:!0,href:!0});var OH=r(Oa);U_=l(OH,"SPAN",{});var AH=r(U_);d(Ml.$$.fragment,AH),AH.forEach(t),OH.forEach(t),DO=c(oE),G_=l(oE,"SPAN",{});var TH=r(G_);OO=n(TH,"fp32 Precision"),TH.forEach(t),oE.forEach(t),v2=c(e),cu=l(e,"P",{});var SH=r(cu);AO=n(SH,"Deepspeed supports the full fp32 and the fp16 mixed precision."),SH.forEach(t),j2=c(e),Aa=l(e,"P",{});var lE=r(Aa);TO=n(lE,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),M_=l(lE,"CODE",{});var CH=r(M_);SO=n(CH,"NaN"),CH.forEach(t),CO=n(lE,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),lE.forEach(t),w2=c(e),d(Ll.$$.fragment,e),y2=c(e),Ta=l(e,"P",{});var rE=r(Ta);xO=n(rE,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Zl=l(rE,"A",{href:!0,rel:!0});var xH=r(Zl);RO=n(xH,"TensorFloat-32(TF32) on Ampere devices"),xH.forEach(t),IO=n(rE,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),rE.forEach(t),g2=c(e),ue=l(e,"P",{});var Ln=r(ue);UO=n(Ln,"With the \u{1F917} Trainer you can use "),L_=l(Ln,"CODE",{});var RH=r(L_);GO=n(RH,"--tf32"),RH.forEach(t),MO=n(Ln," to enable it, or disable it with "),Z_=l(Ln,"CODE",{});var IH=r(Z_);LO=n(IH,"--tf32 0"),IH.forEach(t),ZO=n(Ln," or "),N_=l(Ln,"CODE",{});var UH=r(N_);NO=n(UH,"--no_tf32"),UH.forEach(t),HO=n(Ln,". By default the PyTorch default is used."),Ln.forEach(t),b2=c(e),hu=l(e,"A",{id:!0}),r(hu).forEach(t),q2=c(e),Ws=l(e,"H3",{class:!0});var pE=r(Ws);Sa=l(pE,"A",{id:!0,class:!0,href:!0});var GH=r(Sa);H_=l(GH,"SPAN",{});var MH=r(H_);d(Nl.$$.fragment,MH),MH.forEach(t),GH.forEach(t),BO=c(pE),B_=l(pE,"SPAN",{});var LH=r(B_);WO=n(LH,"Automatic Mixed Precision"),LH.forEach(t),pE.forEach(t),E2=c(e),fu=l(e,"P",{});var ZH=r(fu);FO=n(ZH,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),ZH.forEach(t),$2=c(e),Fs=l(e,"H3",{class:!0});var iE=r(Fs);Ca=l(iE,"A",{id:!0,class:!0,href:!0});var NH=r(Ca);W_=l(NH,"SPAN",{});var HH=r(W_);d(Hl.$$.fragment,HH),HH.forEach(t),NH.forEach(t),VO=c(iE),F_=l(iE,"SPAN",{});var BH=r(F_);YO=n(BH,"fp16"),BH.forEach(t),iE.forEach(t),k2=c(e),du=l(e,"P",{});var WH=r(du);KO=n(WH,"To configure pytorch AMP-like mode with fp16 (float16) set:"),WH.forEach(t),P2=c(e),d(Bl.$$.fragment,e),z2=c(e),os=l(e,"P",{});var qh=r(os);JO=n(qh,"and the "),mu=l(qh,"A",{href:!0});var FH=r(mu);XO=n(FH,"Trainer"),FH.forEach(t),QO=n(qh,` will automatically enable or disable it based on the value of
`),V_=l(qh,"CODE",{});var VH=r(V_);eA=n(VH,"args.fp16_backend"),VH.forEach(t),sA=n(qh,". The rest of config values are up to you."),qh.forEach(t),D2=c(e),ls=l(e,"P",{});var Eh=r(ls);tA=n(Eh,"This mode gets enabled when "),Y_=l(Eh,"CODE",{});var YH=r(Y_);aA=n(YH,"--fp16 --fp16_backend amp"),YH.forEach(t),nA=n(Eh," or "),K_=l(Eh,"CODE",{});var KH=r(K_);oA=n(KH,"--fp16_full_eval"),KH.forEach(t),lA=n(Eh," command line args are passed."),Eh.forEach(t),O2=c(e),_u=l(e,"P",{});var JH=r(_u);rA=n(JH,"You can also enable/disable this mode explicitly:"),JH.forEach(t),A2=c(e),d(Wl.$$.fragment,e),T2=c(e),xa=l(e,"P",{});var uE=r(xa);pA=n(uE,"But then you\u2019re on your own synchronizing the "),vu=l(uE,"A",{href:!0});var XH=r(vu);iA=n(XH,"Trainer"),XH.forEach(t),uA=n(uE,` command line arguments and the DeepSpeed
configuration.`),uE.forEach(t),S2=c(e),Ra=l(e,"P",{});var cE=r(Ra);cA=n(cE,"Here is the "),Fl=l(cE,"A",{href:!0,rel:!0});var QH=r(Fl);hA=n(QH,"documentation"),QH.forEach(t),fA=n(cE,"."),cE.forEach(t),C2=c(e),Vs=l(e,"H3",{class:!0});var hE=r(Vs);Ia=l(hE,"A",{id:!0,class:!0,href:!0});var eB=r(Ia);J_=l(eB,"SPAN",{});var sB=r(J_);d(Vl.$$.fragment,sB),sB.forEach(t),eB.forEach(t),dA=c(hE),X_=l(hE,"SPAN",{});var tB=r(X_);mA=n(tB,"bf16"),tB.forEach(t),hE.forEach(t),x2=c(e),ju=l(e,"P",{});var aB=r(ju);_A=n(aB,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),aB.forEach(t),R2=c(e),d(Yl.$$.fragment,e),I2=c(e),wu=l(e,"P",{});var nB=r(wu);vA=n(nB,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),nB.forEach(t),U2=c(e),rs=l(e,"P",{});var $h=r(rs);jA=n($h,"This mode gets enabled when "),Q_=l($h,"CODE",{});var oB=r(Q_);wA=n(oB,"--bf16"),oB.forEach(t),yA=n($h," or "),e1=l($h,"CODE",{});var lB=r(e1);gA=n(lB,"--bf16_full_eval"),lB.forEach(t),bA=n($h," command line args are passed."),$h.forEach(t),G2=c(e),yu=l(e,"P",{});var rB=r(yu);qA=n(rB,"You can also enable/disable this mode explicitly:"),rB.forEach(t),M2=c(e),d(Kl.$$.fragment,e),L2=c(e),d(Ua.$$.fragment,e),Z2=c(e),Ys=l(e,"H3",{class:!0});var fE=r(Ys);Ga=l(fE,"A",{id:!0,class:!0,href:!0});var pB=r(Ga);s1=l(pB,"SPAN",{});var iB=r(s1);d(Jl.$$.fragment,iB),iB.forEach(t),pB.forEach(t),EA=c(fE),t1=l(fE,"SPAN",{});var uB=r(t1);$A=n(uB,"apex"),uB.forEach(t),fE.forEach(t),N2=c(e),gu=l(e,"P",{});var cB=r(gu);kA=n(cB,"To configure apex AMP-like mode set:"),cB.forEach(t),H2=c(e),d(Xl.$$.fragment,e),B2=c(e),ce=l(e,"P",{});var Zn=r(ce);PA=n(Zn,"and the "),bu=l(Zn,"A",{href:!0});var hB=r(bu);zA=n(hB,"Trainer"),hB.forEach(t),DA=n(Zn," will automatically configure it based on the values of "),a1=l(Zn,"CODE",{});var fB=r(a1);OA=n(fB,"args.fp16_backend"),fB.forEach(t),AA=n(Zn,` and
`),n1=l(Zn,"CODE",{});var dB=r(n1);TA=n(dB,"args.fp16_opt_level"),dB.forEach(t),SA=n(Zn,"."),Zn.forEach(t),W2=c(e),Ma=l(e,"P",{});var dE=r(Ma);CA=n(dE,"This mode gets enabled when "),o1=l(dE,"CODE",{});var mB=r(o1);xA=n(mB,"--fp16 --fp16_backend apex --fp16_opt_level 01"),mB.forEach(t),RA=n(dE," command line args are passed."),dE.forEach(t),F2=c(e),qu=l(e,"P",{});var _B=r(qu);IA=n(_B,"You can also configure this mode explicitly:"),_B.forEach(t),V2=c(e),d(Ql.$$.fragment,e),Y2=c(e),La=l(e,"P",{});var mE=r(La);UA=n(mE,"But then you\u2019re on your own synchronizing the "),Eu=l(mE,"A",{href:!0});var vB=r(Eu);GA=n(vB,"Trainer"),vB.forEach(t),MA=n(mE,` command line arguments and the DeepSpeed
configuration.`),mE.forEach(t),K2=c(e),Za=l(e,"P",{});var _E=r(Za);LA=n(_E,"Here is the "),er=l(_E,"A",{href:!0,rel:!0});var jB=r(er);ZA=n(jB,"documentation"),jB.forEach(t),NA=n(_E,"."),_E.forEach(t),J2=c(e),$u=l(e,"A",{id:!0}),r($u).forEach(t),X2=c(e),Ks=l(e,"H3",{class:!0});var vE=r(Ks);Na=l(vE,"A",{id:!0,class:!0,href:!0});var wB=r(Na);l1=l(wB,"SPAN",{});var yB=r(l1);d(sr.$$.fragment,yB),yB.forEach(t),wB.forEach(t),HA=c(vE),r1=l(vE,"SPAN",{});var gB=r(r1);BA=n(gB,"Batch Size"),gB.forEach(t),vE.forEach(t),Q2=c(e),ku=l(e,"P",{});var bB=r(ku);WA=n(bB,"To configure batch size, use:"),bB.forEach(t),eb=c(e),d(tr.$$.fragment,e),sb=c(e),Z=l(e,"P",{});var qe=r(Z);FA=n(qe,"and the "),Pu=l(qe,"A",{href:!0});var qB=r(Pu);VA=n(qB,"Trainer"),qB.forEach(t),YA=n(qe," will automatically set "),p1=l(qe,"CODE",{});var EB=r(p1);KA=n(EB,"train_micro_batch_size_per_gpu"),EB.forEach(t),JA=n(qe,` to the value of
`),i1=l(qe,"CODE",{});var $B=r(i1);XA=n($B,"args.per_device_train_batch_size"),$B.forEach(t),QA=n(qe," and "),u1=l(qe,"CODE",{});var kB=r(u1);eT=n(kB,"train_batch_size"),kB.forEach(t),sT=n(qe," to "),c1=l(qe,"CODE",{});var PB=r(c1);tT=n(PB,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),PB.forEach(t),aT=n(qe,"."),qe.forEach(t),tb=c(e),zu=l(e,"P",{});var zB=r(zu);nT=n(zB,"You can also set the values explicitly:"),zB.forEach(t),ab=c(e),d(ar.$$.fragment,e),nb=c(e),Ha=l(e,"P",{});var jE=r(Ha);oT=n(jE,"But then you\u2019re on your own synchronizing the "),Du=l(jE,"A",{href:!0});var DB=r(Du);lT=n(DB,"Trainer"),DB.forEach(t),rT=n(jE,` command line arguments and the DeepSpeed
configuration.`),jE.forEach(t),ob=c(e),Ou=l(e,"A",{id:!0}),r(Ou).forEach(t),lb=c(e),Js=l(e,"H3",{class:!0});var wE=r(Js);Ba=l(wE,"A",{id:!0,class:!0,href:!0});var OB=r(Ba);h1=l(OB,"SPAN",{});var AB=r(h1);d(nr.$$.fragment,AB),AB.forEach(t),OB.forEach(t),pT=c(wE),f1=l(wE,"SPAN",{});var TB=r(f1);iT=n(TB,"Gradient Accumulation"),TB.forEach(t),wE.forEach(t),rb=c(e),Au=l(e,"P",{});var SB=r(Au);uT=n(SB,"To configure gradient accumulation set:"),SB.forEach(t),pb=c(e),d(or.$$.fragment,e),ib=c(e),ps=l(e,"P",{});var kh=r(ps);cT=n(kh,"and the "),Tu=l(kh,"A",{href:!0});var CB=r(Tu);hT=n(CB,"Trainer"),CB.forEach(t),fT=n(kh," will automatically set it to the value of "),d1=l(kh,"CODE",{});var xB=r(d1);dT=n(xB,"args.gradient_accumulation_steps"),xB.forEach(t),mT=n(kh,"."),kh.forEach(t),ub=c(e),Su=l(e,"P",{});var RB=r(Su);_T=n(RB,"You can also set the value explicitly:"),RB.forEach(t),cb=c(e),d(lr.$$.fragment,e),hb=c(e),Wa=l(e,"P",{});var yE=r(Wa);vT=n(yE,"But then you\u2019re on your own synchronizing the "),Cu=l(yE,"A",{href:!0});var IB=r(Cu);jT=n(IB,"Trainer"),IB.forEach(t),wT=n(yE,` command line arguments and the DeepSpeed
configuration.`),yE.forEach(t),fb=c(e),xu=l(e,"A",{id:!0}),r(xu).forEach(t),db=c(e),Xs=l(e,"H3",{class:!0});var gE=r(Xs);Fa=l(gE,"A",{id:!0,class:!0,href:!0});var UB=r(Fa);m1=l(UB,"SPAN",{});var GB=r(m1);d(rr.$$.fragment,GB),GB.forEach(t),UB.forEach(t),yT=c(gE),_1=l(gE,"SPAN",{});var MB=r(_1);gT=n(MB,"Gradient Clipping"),MB.forEach(t),gE.forEach(t),mb=c(e),Ru=l(e,"P",{});var LB=r(Ru);bT=n(LB,"To configure gradient gradient clipping set:"),LB.forEach(t),_b=c(e),d(pr.$$.fragment,e),vb=c(e),is=l(e,"P",{});var Ph=r(is);qT=n(Ph,"and the "),Iu=l(Ph,"A",{href:!0});var ZB=r(Iu);ET=n(ZB,"Trainer"),ZB.forEach(t),$T=n(Ph," will automatically set it to the value of "),v1=l(Ph,"CODE",{});var NB=r(v1);kT=n(NB,"args.max_grad_norm"),NB.forEach(t),PT=n(Ph,"."),Ph.forEach(t),jb=c(e),Uu=l(e,"P",{});var HB=r(Uu);zT=n(HB,"You can also set the value explicitly:"),HB.forEach(t),wb=c(e),d(ir.$$.fragment,e),yb=c(e),Va=l(e,"P",{});var bE=r(Va);DT=n(bE,"But then you\u2019re on your own synchronizing the "),Gu=l(bE,"A",{href:!0});var BB=r(Gu);OT=n(BB,"Trainer"),BB.forEach(t),AT=n(bE,` command line arguments and the DeepSpeed
configuration.`),bE.forEach(t),gb=c(e),Mu=l(e,"A",{id:!0}),r(Mu).forEach(t),bb=c(e),Qs=l(e,"H3",{class:!0});var qE=r(Qs);Ya=l(qE,"A",{id:!0,class:!0,href:!0});var WB=r(Ya);j1=l(WB,"SPAN",{});var FB=r(j1);d(ur.$$.fragment,FB),FB.forEach(t),WB.forEach(t),TT=c(qE),w1=l(qE,"SPAN",{});var VB=r(w1);ST=n(VB,"Getting The Model Weights Out"),VB.forEach(t),qE.forEach(t),qb=c(e),Ka=l(e,"P",{});var EE=r(Ka);CT=n(EE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),y1=l(EE,"CODE",{});var YB=r(y1);xT=n(YB,"global_step*/*optim_states.pt"),YB.forEach(t),RT=n(EE,` (this is glob
pattern), and are saved under the normal checkpoint.`),EE.forEach(t),Eb=c(e),Lu=l(e,"P",{});var KB=r(Lu);g1=l(KB,"STRONG",{});var JB=r(g1);IT=n(JB,"FP16 Weights:"),JB.forEach(t),KB.forEach(t),$b=c(e),Ja=l(e,"P",{});var $E=r(Ja);UT=n($E,"When a model is saved under ZeRO-2, you end up having the normal "),b1=l($E,"CODE",{});var XB=r(b1);GT=n(XB,"pytorch_model.bin"),XB.forEach(t),MT=n($E,` file with the model weights, but
they are only the fp16 version of the weights.`),$E.forEach(t),kb=c(e),O=l(e,"P",{});var J=r(O);LT=n(J,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),q1=l(J,"CODE",{});var QB=r(q1);ZT=n(QB,'"stage3_gather_16bit_weights_on_model_save": true'),QB.forEach(t),NT=n(J," is required to get the "),E1=l(J,"CODE",{});var eW=r(E1);HT=n(eW,"Trainer"),eW.forEach(t),BT=n(J,` to save the fp16
version of the weights. If this setting is `),$1=l(J,"CODE",{});var sW=r($1);WT=n(sW,"False"),sW.forEach(t),FT=c(J),k1=l(J,"CODE",{});var tW=r(k1);VT=n(tW,"pytorch_model.bin"),tW.forEach(t),YT=n(J," won\u2019t be created. This is because by default DeepSpeed\u2019s "),P1=l(J,"CODE",{});var aW=r(P1);KT=n(aW,"state_dict"),aW.forEach(t),JT=n(J," contains a placeholder and not the real weights. If we were to save this "),z1=l(J,"CODE",{});var nW=r(z1);XT=n(nW,"state_dict"),nW.forEach(t),QT=n(J," it won\u2019t be possible to load it back."),J.forEach(t),Pb=c(e),d(cr.$$.fragment,e),zb=c(e),Zu=l(e,"P",{});var oW=r(Zu);D1=l(oW,"STRONG",{});var lW=r(D1);eS=n(lW,"FP32 Weights:"),lW.forEach(t),oW.forEach(t),Db=c(e),Xa=l(e,"P",{});var kE=r(Xa);sS=n(kE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),hr=l(kE,"A",{href:!0,rel:!0});var rW=r(hr);tS=n(rW,"models hub"),rW.forEach(t),aS=n(kE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),kE.forEach(t),Ob=c(e),Nu=l(e,"P",{});var pW=r(Nu);O1=l(pW,"STRONG",{});var iW=r(O1);nS=n(iW,"Live FP32 Weights Recovery:"),iW.forEach(t),pW.forEach(t),Ab=c(e),Hu=l(e,"P",{});var uW=r(Hu);oS=n(uW,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),uW.forEach(t),Tb=c(e),Bu=l(e,"P",{});var cW=r(Bu);lS=n(cW,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),cW.forEach(t),Sb=c(e),d(fr.$$.fragment,e),Cb=c(e),us=l(e,"P",{});var zh=r(us);rS=n(zh,"If you\u2019re using the "),A1=l(zh,"CODE",{});var hW=r(A1);pS=n(hW,"--load_best_model_at_end"),hW.forEach(t),iS=n(zh," class:"),T1=l(zh,"EM",{});var fW=r(T1);uS=n(fW,"~transformers.TrainingArguments"),fW.forEach(t),cS=n(zh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),zh.forEach(t),xb=c(e),d(dr.$$.fragment,e),Rb=c(e),d(Qa.$$.fragment,e),Ib=c(e),en=l(e,"P",{});var PE=r(en);hS=n(PE,"Of course, you don\u2019t have to use class:"),S1=l(PE,"EM",{});var dW=r(S1);fS=n(dW,"~transformers.Trainer"),dW.forEach(t),dS=n(PE,` and you can adjust the examples above to your own
trainer.`),PE.forEach(t),Ub=c(e),sn=l(e,"P",{});var zE=r(sn);mS=n(zE,"If for some reason you want more refinement, you can also extract the fp32 "),C1=l(zE,"CODE",{});var mW=r(C1);_S=n(mW,"state_dict"),mW.forEach(t),vS=n(zE,` of the weights and apply
these yourself as is shown in the following example:`),zE.forEach(t),Gb=c(e),d(mr.$$.fragment,e),Mb=c(e),Wu=l(e,"P",{});var _W=r(Wu);x1=l(_W,"STRONG",{});var vW=r(x1);jS=n(vW,"Offline FP32 Weights Recovery:"),vW.forEach(t),_W.forEach(t),Lb=c(e),cs=l(e,"P",{});var Dh=r(cs);wS=n(Dh,"DeepSpeed creates a special conversion script "),R1=l(Dh,"CODE",{});var jW=r(R1);yS=n(jW,"zero_to_fp32.py"),jW.forEach(t),gS=n(Dh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),I1=l(Dh,"CODE",{});var wW=r(I1);bS=n(wW,"Trainer"),wW.forEach(t),qS=n(Dh," to do the extraction."),Dh.forEach(t),Zb=c(e),Fu=l(e,"P",{});var yW=r(Fu);ES=n(yW,"Let\u2019s say your checkpoint folder looks like this:"),yW.forEach(t),Nb=c(e),d(_r.$$.fragment,e),Hb=c(e),tn=l(e,"P",{});var DE=r(tn);$S=n(DE,"In this example there is just one DeepSpeed checkpoint sub-folder "),U1=l(DE,"EM",{});var gW=r(U1);kS=n(gW,"global_step1"),gW.forEach(t),PS=n(DE,`. Therefore to reconstruct the fp32
weights just run:`),DE.forEach(t),Bb=c(e),d(vr.$$.fragment,e),Wb=c(e),an=l(e,"P",{});var OE=r(an);zS=n(OE,"This is it. "),G1=l(OE,"CODE",{});var bW=r(G1);DS=n(bW,"pytorch_model.bin"),bW.forEach(t),OS=n(OE," will now contain the full fp32 model weights consolidated from multiple GPUs."),OE.forEach(t),Fb=c(e),Vu=l(e,"P",{});var qW=r(Vu);AS=n(qW,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),qW.forEach(t),Vb=c(e),jr=l(e,"P",{});var wU=r(jr);M1=l(wU,"CODE",{});var EW=r(M1);TS=n(EW,"python zero_to_fp32.py -h"),EW.forEach(t),SS=n(wU," will give you usage details."),wU.forEach(t),Yb=c(e),hs=l(e,"P",{});var Oh=r(hs);CS=n(Oh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),L1=l(Oh,"CODE",{});var $W=r(L1);xS=n($W,"latest"),$W.forEach(t),RS=n(Oh,`, which in the current
example will contain `),Z1=l(Oh,"CODE",{});var kW=r(Z1);IS=n(kW,"global_step1"),kW.forEach(t),US=n(Oh,"."),Oh.forEach(t),Kb=c(e),Yu=l(e,"P",{});var PW=r(Yu);GS=n(PW,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),PW.forEach(t),Jb=c(e),et=l(e,"H3",{class:!0});var AE=r(et);nn=l(AE,"A",{id:!0,class:!0,href:!0});var zW=r(nn);N1=l(zW,"SPAN",{});var DW=r(N1);d(wr.$$.fragment,DW),DW.forEach(t),zW.forEach(t),MS=c(AE),H1=l(AE,"SPAN",{});var OW=r(H1);LS=n(OW,"ZeRO-3 and Infinity Nuances"),OW.forEach(t),AE.forEach(t),Xb=c(e),Ku=l(e,"P",{});var AW=r(Ku);ZS=n(AW,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),AW.forEach(t),Qb=c(e),Ju=l(e,"P",{});var TW=r(Ju);NS=n(TW,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),TW.forEach(t),e3=c(e),Xu=l(e,"P",{});var SW=r(Xu);HS=n(SW,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),SW.forEach(t),s3=c(e),st=l(e,"H4",{class:!0});var TE=r(st);on=l(TE,"A",{id:!0,class:!0,href:!0});var CW=r(on);B1=l(CW,"SPAN",{});var xW=r(B1);d(yr.$$.fragment,xW),xW.forEach(t),CW.forEach(t),BS=c(TE),W1=l(TE,"SPAN",{});var RW=r(W1);WS=n(RW,"Constructing Massive Models"),RW.forEach(t),TE.forEach(t),t3=c(e),ln=l(e,"P",{});var SE=r(ln);FS=n(SE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),F1=l(SE,"EM",{});var IW=r(F1);VS=n(IW,"deepspeed.zero.Init()"),IW.forEach(t),YS=n(SE,`
context manager (which is also a function decorator), like so:`),SE.forEach(t),a3=c(e),d(gr.$$.fragment,e),n3=c(e),Qu=l(e,"P",{});var UW=r(Qu);KS=n(UW,"As you can see this gives you a randomly initialized model."),UW.forEach(t),o3=c(e),P=l(e,"P",{});var B=r(P);JS=n(B,"If you want to use a pretrained model, "),V1=l(B,"CODE",{});var GW=r(V1);XS=n(GW,"model_class.from_pretrained"),GW.forEach(t),QS=n(B,` will activate this feature as long as
`),Y1=l(B,"CODE",{});var MW=r(Y1);eC=n(MW,"is_deepspeed_zero3_enabled()"),MW.forEach(t),sC=n(B," returns "),K1=l(B,"CODE",{});var LW=r(K1);tC=n(LW,"True"),LW.forEach(t),aC=n(B,`, which currently is setup by the
`),ec=l(B,"A",{href:!0});var ZW=r(ec);nC=n(ZW,"TrainingArguments"),ZW.forEach(t),oC=n(B,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),sc=l(B,"A",{href:!0});var NW=r(sc);lC=n(NW,"TrainingArguments"),NW.forEach(t),rC=n(B," object "),J1=l(B,"STRONG",{});var HW=r(J1);pC=n(HW,"before"),HW.forEach(t),iC=n(B,` calling
`),X1=l(B,"CODE",{});var BW=r(X1);uC=n(BW,"from_pretrained"),BW.forEach(t),cC=n(B,". Here is an example of a possible sequence:"),B.forEach(t),l3=c(e),d(br.$$.fragment,e),r3=c(e),rn=l(e,"P",{});var CE=r(rn);hC=n(CE,"If you\u2019re using the official example scripts and your command line arguments include "),Q1=l(CE,"CODE",{});var WW=r(Q1);fC=n(WW,"--deepspeed ds_config.json"),WW.forEach(t),dC=n(CE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),CE.forEach(t),p3=c(e),tc=l(e,"P",{});var FW=r(tc);mC=n(FW,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),FW.forEach(t),i3=c(e),pn=l(e,"P",{});var xE=r(pn);_C=n(xE,"For full details on this method and other related features please refer to "),qr=l(xE,"A",{href:!0,rel:!0});var VW=r(qr);vC=n(VW,"Constructing Massive Models"),VW.forEach(t),jC=n(xE,"."),xE.forEach(t),u3=c(e),he=l(e,"P",{});var Nn=r(he);wC=n(Nn,"Also when loading fp16-pretrained models, you will want to tell "),ev=l(Nn,"CODE",{});var YW=r(ev);yC=n(YW,"from_pretrained"),YW.forEach(t),gC=n(Nn,` to use
`),sv=l(Nn,"CODE",{});var KW=r(sv);bC=n(KW,"torch_dtype=torch.float16"),KW.forEach(t),qC=n(Nn,". For details, please, see "),ac=l(Nn,"A",{href:!0});var JW=r(ac);EC=n(JW,"from_pretrained-torch-dtype"),JW.forEach(t),$C=n(Nn,"."),Nn.forEach(t),c3=c(e),tt=l(e,"H4",{class:!0});var RE=r(tt);un=l(RE,"A",{id:!0,class:!0,href:!0});var XW=r(un);tv=l(XW,"SPAN",{});var QW=r(tv);d(Er.$$.fragment,QW),QW.forEach(t),XW.forEach(t),kC=c(RE),av=l(RE,"SPAN",{});var eF=r(av);PC=n(eF,"Gathering Parameters"),eF.forEach(t),RE.forEach(t),h3=c(e),$r=l(e,"P",{});var yU=r($r);zC=n(yU,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),kr=l(yU,"A",{href:!0,rel:!0});var sF=r(kr);DC=n(sF,"Gathering Parameters"),sF.forEach(t),yU.forEach(t),f3=c(e),cn=l(e,"P",{});var IE=r(cn);OC=n(IE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),nv=l(IE,"CODE",{});var tF=r(nv);AC=n(tF,"from_pretrained"),tF.forEach(t),TC=n(IE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),IE.forEach(t),d3=c(e),nc=l(e,"P",{});var aF=r(nc);SC=n(aF,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),aF.forEach(t),m3=c(e),d(Pr.$$.fragment,e),_3=c(e),fs=l(e,"P",{});var Ah=r(fs);CC=n(Ah,"stress on "),ov=l(Ah,"CODE",{});var nF=r(ov);xC=n(nF,"tensor([1.])"),nF.forEach(t),RC=n(Ah,", or if you get an error where it says the parameter is of size "),lv=l(Ah,"CODE",{});var oF=r(lv);IC=n(oF,"1"),oF.forEach(t),UC=n(Ah,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Ah.forEach(t),v3=c(e),oc=l(e,"A",{id:!0}),r(oc).forEach(t),j3=c(e),at=l(e,"H3",{class:!0});var UE=r(at);hn=l(UE,"A",{id:!0,class:!0,href:!0});var lF=r(hn);rv=l(lF,"SPAN",{});var rF=r(rv);d(zr.$$.fragment,rF),rF.forEach(t),lF.forEach(t),GC=c(UE),pv=l(UE,"SPAN",{});var pF=r(pv);MC=n(pF,"ZeRO Inference"),pF.forEach(t),UE.forEach(t),w3=c(e),lc=l(e,"P",{});var iF=r(lc);LC=n(iF,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),iF.forEach(t),y3=c(e),fn=l(e,"P",{});var GE=r(fn);ZC=n(GE,"Otherwise you just need to pass the usual "),rc=l(GE,"A",{href:!0});var uF=r(rc);NC=n(uF,"TrainingArguments"),uF.forEach(t),HC=n(GE," arguments. For example:"),GE.forEach(t),g3=c(e),d(Dr.$$.fragment,e),b3=c(e),pc=l(e,"P",{});var cF=r(pc);BC=n(cF,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),cF.forEach(t),q3=c(e),dn=l(e,"P",{});var ME=r(dn);WC=n(ME,"Here is an example of running "),iv=l(ME,"CODE",{});var hF=r(iv);FC=n(hF,"run_translation.py"),hF.forEach(t),VC=n(ME," under DeepSpeed deploying all available GPUs:"),ME.forEach(t),E3=c(e),d(Or.$$.fragment,e),$3=c(e),ic=l(e,"P",{});var fF=r(ic);YC=n(fF,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),fF.forEach(t),k3=c(e),uc=l(e,"P",{});var dF=r(uc);KC=n(dF,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),dF.forEach(t),P3=c(e),nt=l(e,"H3",{class:!0});var LE=r(nt);mn=l(LE,"A",{id:!0,class:!0,href:!0});var mF=r(mn);uv=l(mF,"SPAN",{});var _F=r(uv);d(Ar.$$.fragment,_F),_F.forEach(t),mF.forEach(t),JC=c(LE),cv=l(LE,"SPAN",{});var vF=r(cv);XC=n(vF,"Memory Requirements"),vF.forEach(t),LE.forEach(t),z3=c(e),cc=l(e,"P",{});var jF=r(cc);QC=n(jF,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),jF.forEach(t),D3=c(e),hc=l(e,"P",{});var wF=r(hc);ex=n(wF,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),wF.forEach(t),O3=c(e),d(Tr.$$.fragment,e),A3=c(e),fc=l(e,"P",{});var yF=r(fc);sx=n(yF,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),yF.forEach(t),T3=c(e),dc=l(e,"P",{});var gF=r(dc);tx=n(gF,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),gF.forEach(t),S3=c(e),mc=l(e,"P",{});var bF=r(mc);ax=n(bF,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),bF.forEach(t),C3=c(e),_c=l(e,"P",{});var qF=r(_c);nx=n(qF,"For example, let\u2019s repeat the same for 2 GPUs:"),qF.forEach(t),x3=c(e),d(Sr.$$.fragment,e),R3=c(e),vc=l(e,"P",{});var EF=r(vc);ox=n(EF,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),EF.forEach(t),I3=c(e),_n=l(e,"P",{});var ZE=r(_n);lx=n(ZE,"For full information please see "),Cr=l(ZE,"A",{href:!0,rel:!0});var $F=r(Cr);rx=n($F,"memory estimators"),$F.forEach(t),px=n(ZE,"."),ZE.forEach(t),U3=c(e),ot=l(e,"H3",{class:!0});var NE=r(ot);vn=l(NE,"A",{id:!0,class:!0,href:!0});var kF=r(vn);hv=l(kF,"SPAN",{});var PF=r(hv);d(xr.$$.fragment,PF),PF.forEach(t),kF.forEach(t),ix=c(NE),fv=l(NE,"SPAN",{});var zF=r(fv);ux=n(zF,"Filing Issues"),zF.forEach(t),NE.forEach(t),G3=c(e),jc=l(e,"P",{});var DF=r(jc);cx=n(DF,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),DF.forEach(t),M3=c(e),wc=l(e,"P",{});var OF=r(wc);hx=n(OF,"In your report please always include:"),OF.forEach(t),L3=c(e),N=l(e,"OL",{});var Ee=r(N);dv=l(Ee,"LI",{});var AF=r(dv);mv=l(AF,"P",{});var TF=r(mv);fx=n(TF,"the full Deepspeed config file in the report"),TF.forEach(t),AF.forEach(t),dx=c(Ee),_v=l(Ee,"LI",{});var SF=r(_v);Oe=l(SF,"P",{});var Hn=r(Oe);mx=n(Hn,"either the command line arguments if you were using the "),yc=l(Hn,"A",{href:!0});var CF=r(yc);_x=n(CF,"Trainer"),CF.forEach(t),vx=n(Hn,` or
`),gc=l(Hn,"A",{href:!0});var xF=r(gc);jx=n(xF,"TrainingArguments"),xF.forEach(t),wx=n(Hn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),bc=l(Hn,"A",{href:!0});var RF=r(bc);yx=n(RF,"TrainingArguments"),RF.forEach(t),gx=n(Hn," as it has dozens of entries that are irrelevant."),Hn.forEach(t),SF.forEach(t),bx=c(Ee),Rr=l(Ee,"LI",{});var HE=r(Rr);vv=l(HE,"P",{});var IF=r(vv);qx=n(IF,"Output of:"),IF.forEach(t),Ex=c(HE),d(Ir.$$.fragment,HE),HE.forEach(t),$x=c(Ee),jv=l(Ee,"LI",{});var UF=r(jv);Ur=l(UF,"P",{});var BE=r(Ur);kx=n(BE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Gr=l(BE,"A",{href:!0,rel:!0});var GF=r(Gr);Px=n(GF,"notebook"),GF.forEach(t),zx=n(BE,` as
a starting point.`),BE.forEach(t),UF.forEach(t),Dx=c(Ee),wv=l(Ee,"LI",{});var MF=r(wv);yv=l(MF,"P",{});var LF=r(yv);Ox=n(LF,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),LF.forEach(t),MF.forEach(t),Ax=c(Ee),gv=l(Ee,"LI",{});var ZF=r(gv);Mr=l(ZF,"P",{});var WE=r(Mr);Tx=n(WE,"If possible try to use one of the existing "),Lr=l(WE,"A",{href:!0,rel:!0});var NF=r(Lr);Sx=n(NF,"examples"),NF.forEach(t),Cx=n(WE," to reproduce the problem with."),WE.forEach(t),ZF.forEach(t),Ee.forEach(t),Z3=c(e),qc=l(e,"P",{});var HF=r(qc);xx=n(HF,"Things to consider:"),HF.forEach(t),N3=c(e),jn=l(e,"UL",{});var FE=r(jn);lt=l(FE,"LI",{});var Th=r(lt);bv=l(Th,"P",{});var BF=r(bv);Rx=n(BF,"Deepspeed is often not the cause of the problem."),BF.forEach(t),Ix=c(Th),qv=l(Th,"P",{});var WF=r(qv);Ux=n(WF,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),WF.forEach(t),Gx=c(Th),Ev=l(Th,"P",{});var FF=r(Ev);Mx=n(FF,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),FF.forEach(t),Th.forEach(t),Lx=c(FE),$v=l(FE,"LI",{});var VF=r($v);Zr=l(VF,"P",{});var VE=r(Zr);Zx=n(VE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Nr=l(VE,"A",{href:!0,rel:!0});var YF=r(Nr);Nx=n(YF,"Deepspeed"),YF.forEach(t),Hx=n(VE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),VE.forEach(t),VF.forEach(t),FE.forEach(t),H3=c(e),rt=l(e,"H3",{class:!0});var YE=r(rt);wn=l(YE,"A",{id:!0,class:!0,href:!0});var KF=r(wn);kv=l(KF,"SPAN",{});var JF=r(kv);d(Hr.$$.fragment,JF),JF.forEach(t),KF.forEach(t),Bx=c(YE),Pv=l(YE,"SPAN",{});var XF=r(Pv);Wx=n(XF,"Troubleshooting"),XF.forEach(t),YE.forEach(t),B3=c(e),pt=l(e,"H4",{class:!0});var KE=r(pt);yn=l(KE,"A",{id:!0,class:!0,href:!0});var QF=r(yn);zv=l(QF,"SPAN",{});var eV=r(zv);d(Br.$$.fragment,eV),eV.forEach(t),QF.forEach(t),Fx=c(KE),Wr=l(KE,"SPAN",{});var JE=r(Wr);Vx=n(JE,"the "),Dv=l(JE,"CODE",{});var sV=r(Dv);Yx=n(sV,"deepspeed"),sV.forEach(t),Kx=n(JE," process gets killed at startup without a traceback"),JE.forEach(t),KE.forEach(t),W3=c(e),H=l(e,"P",{});var $e=r(H);Jx=n($e,"If the "),Ov=l($e,"CODE",{});var tV=r(Ov);Xx=n(tV,"deepspeed"),tV.forEach(t),Qx=n($e,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Av=l($e,"CODE",{});var aV=r(Av);eR=n(aV,"offload_optimizer"),aV.forEach(t),sR=n($e," or "),Tv=l($e,"CODE",{});var nV=r(Tv);tR=n(nV,"offload_param"),nV.forEach(t),aR=n($e,` or
both configured to offload to `),Sv=l($e,"CODE",{});var oV=r(Sv);nR=n(oV,"cpu"),oV.forEach(t),oR=n($e,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Fr=l($e,"A",{href:!0,rel:!0});var lV=r(Fr);lR=n(lV,"estimate how much memory is needed for a specific model"),lV.forEach(t),rR=n($e,"."),$e.forEach(t),F3=c(e),it=l(e,"H4",{class:!0});var XE=r(it);gn=l(XE,"A",{id:!0,class:!0,href:!0});var rV=r(gn);Cv=l(rV,"SPAN",{});var pV=r(Cv);d(Vr.$$.fragment,pV),pV.forEach(t),rV.forEach(t),pR=c(XE),Ec=l(XE,"SPAN",{});var gU=r(Ec);iR=n(gU,"training and/or eval/predict loss is "),xv=l(gU,"CODE",{});var iV=r(xv);uR=n(iV,"NaN"),iV.forEach(t),gU.forEach(t),XE.forEach(t),V3=c(e),$c=l(e,"P",{});var uV=r($c);cR=n(uV,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),uV.forEach(t),Y3=c(e),kc=l(e,"P",{});var cV=r(kc);hR=n(cV,"The other problem may have to do with using fp16. When you configure this section:"),cV.forEach(t),K3=c(e),d(Yr.$$.fragment,e),J3=c(e),bn=l(e,"P",{});var QE=r(bn);fR=n(QE,"and you see in your log that Deepspeed reports "),Rv=l(QE,"CODE",{});var hV=r(Rv);dR=n(hV,"OVERFLOW!"),hV.forEach(t),mR=n(QE," as follows:"),QE.forEach(t),X3=c(e),d(Kr.$$.fragment,e),Q3=c(e),Pc=l(e,"P",{});var fV=r(Pc);_R=n(fV,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),fV.forEach(t),e0=c(e),zc=l(e,"P",{});var dV=r(zc);vR=n(dV,"(the log was massaged to be more readable here.)"),dV.forEach(t),s0=c(e),ds=l(e,"P",{});var Sh=r(ds);jR=n(Sh,"In this case you usually need to raise the value of "),Iv=l(Sh,"CODE",{});var mV=r(Iv);wR=n(mV,"initial_scale_power"),mV.forEach(t),yR=n(Sh,". Setting it to "),Uv=l(Sh,"CODE",{});var _V=r(Uv);gR=n(_V,'"initial_scale_power": 32'),_V.forEach(t),bR=n(Sh," will typically resolve the problem."),Sh.forEach(t),t0=c(e),ut=l(e,"H3",{class:!0});var e4=r(ut);qn=l(e4,"A",{id:!0,class:!0,href:!0});var vV=r(qn);Gv=l(vV,"SPAN",{});var jV=r(Gv);d(Jr.$$.fragment,jV),jV.forEach(t),vV.forEach(t),qR=c(e4),Mv=l(e4,"SPAN",{});var wV=r(Mv);ER=n(wV,"Notes"),wV.forEach(t),e4.forEach(t),a0=c(e),ms=l(e,"UL",{});var Ch=r(ms);ct=l(Ch,"LI",{});var xh=r(ct);$R=n(xh,"DeepSpeed works with the PyTorch "),Dc=l(xh,"A",{href:!0});var yV=r(Dc);kR=n(yV,"Trainer"),yV.forEach(t),PR=n(xh," but not TF "),Lv=l(xh,"CODE",{});var gV=r(Lv);zR=n(gV,"TFTrainer"),gV.forEach(t),DR=n(xh,"."),xh.forEach(t),OR=c(Ch),Xr=l(Ch,"LI",{});var s4=r(Xr);AR=n(s4,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Qr=l(s4,"A",{href:!0,rel:!0});var bV=r(Qr);TR=n(bV,"source"),bV.forEach(t),SR=n(s4,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),s4.forEach(t),CR=c(Ch),ht=l(Ch,"LI",{});var Rh=r(ht);xR=n(Rh,"You don\u2019t have to use the "),Oc=l(Rh,"A",{href:!0});var qV=r(Oc);RR=n(qV,"Trainer"),qV.forEach(t),IR=n(Rh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ep=l(Rh,"A",{href:!0,rel:!0});var EV=r(ep);UR=n(EV,"the DeepSpeed integration instructions"),EV.forEach(t),GR=n(Rh,"."),Rh.forEach(t),Ch.forEach(t),n0=c(e),Ac=l(e,"A",{id:!0}),r(Ac).forEach(t),o0=c(e),ft=l(e,"H2",{class:!0});var t4=r(ft);En=l(t4,"A",{id:!0,class:!0,href:!0});var $V=r(En);Zv=l($V,"SPAN",{});var kV=r(Zv);d(sp.$$.fragment,kV),kV.forEach(t),$V.forEach(t),MR=c(t4),Nv=l(t4,"SPAN",{});var PV=r(Nv);LR=n(PV,"Non-Trainer Deepspeed Integration"),PV.forEach(t),t4.forEach(t),l0=c(e),fe=l(e,"P",{});var Bn=r(fe);ZR=n(Bn,"The "),Tc=l(Bn,"A",{href:!0});var zV=r(Tc);NR=n(zV,"HfDeepSpeedConfig"),zV.forEach(t),HR=n(Bn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Sc=l(Bn,"A",{href:!0});var DV=r(Sc);BR=n(DV,"Trainer"),DV.forEach(t),WR=n(Bn," is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),Hv=l(Bn,"CODE",{});var OV=r(Hv);FR=n(OV,"from_pretrained"),OV.forEach(t),VR=n(Bn," call. Everything else you have to do by yourself."),Bn.forEach(t),r0=c(e),$n=l(e,"P",{});var a4=r($n);YR=n(a4,"When using "),Cc=l(a4,"A",{href:!0});var AV=r(Cc);KR=n(AV,"Trainer"),AV.forEach(t),JR=n(a4," everything is automatically taken care of."),a4.forEach(t),p0=c(e),_s=l(e,"P",{});var Ih=r(_s);XR=n(Ih,"When not using "),xc=l(Ih,"A",{href:!0});var TV=r(xc);QR=n(TV,"Trainer"),TV.forEach(t),eI=n(Ih,`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Rc=l(Ih,"A",{href:!0});var SV=r(Rc);sI=n(SV,"HfDeepSpeedConfig"),SV.forEach(t),tI=n(Ih," object before instantiating the model and keep that object alive."),Ih.forEach(t),i0=c(e),kn=l(e,"P",{});var n4=r(kn);aI=n(n4,"If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),Bv=l(n4,"CODE",{});var CV=r(Bv);nI=n(CV,"HfDeepSpeedConfig"),CV.forEach(t),oI=n(n4," at all."),n4.forEach(t),u0=c(e),Ic=l(e,"P",{});var xV=r(Ic);lI=n(xV,"For example for a pretrained model:"),xV.forEach(t),c0=c(e),d(tp.$$.fragment,e),h0=c(e),Uc=l(e,"P",{});var RV=r(Uc);rI=n(RV,"or for non-pretrained model:"),RV.forEach(t),f0=c(e),d(ap.$$.fragment,e),d0=c(e),de=l(e,"P",{});var Wn=r(de);pI=n(Wn,"Please note that if you\u2019re not using the "),Gc=l(Wn,"A",{href:!0});var IV=r(Gc);iI=n(IV,"Trainer"),IV.forEach(t),uI=n(Wn," integration, you\u2019re completely on your own. Basically follow the documentation on the "),np=l(Wn,"A",{href:!0,rel:!0});var UV=r(np);cI=n(UV,"Deepspeed"),UV.forEach(t),hI=n(Wn," website. Also you have to configure explicitly the config file - you can\u2019t use "),Wv=l(Wn,"CODE",{});var GV=r(Wv);fI=n(GV,'"auto"'),GV.forEach(t),dI=n(Wn," values and you will have to put real values instead."),Wn.forEach(t),m0=c(e),dt=l(e,"H2",{class:!0});var o4=r(dt);Pn=l(o4,"A",{id:!0,class:!0,href:!0});var MV=r(Pn);Fv=l(MV,"SPAN",{});var LV=r(Fv);d(op.$$.fragment,LV),LV.forEach(t),MV.forEach(t),mI=c(o4),Vv=l(o4,"SPAN",{});var ZV=r(Vv);_I=n(ZV,"HfDeepSpeedConfig"),ZV.forEach(t),o4.forEach(t),_0=c(e),ee=l(e,"DIV",{class:!0});var Fn=r(ee);d(lp.$$.fragment,Fn),vI=c(Fn),Yv=l(Fn,"P",{});var NV=r(Yv);jI=n(NV,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),NV.forEach(t),wI=c(Fn),Ae=l(Fn,"P",{});var Vn=r(Ae);yI=n(Vn,"A "),Kv=l(Vn,"CODE",{});var HV=r(Kv);gI=n(HV,"weakref"),HV.forEach(t),bI=n(Vn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Jv=l(Vn,"CODE",{});var BV=r(Jv);qI=n(BV,"from_pretrained"),BV.forEach(t),EI=n(Vn," and "),Xv=l(Vn,"CODE",{});var WV=r(Xv);$I=n(WV,"_get_resized_embeddings"),WV.forEach(t),kI=n(Vn,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),Vn.forEach(t),PI=c(Fn),me=l(Fn,"P",{});var vt=r(me);Mc=l(vt,"A",{href:!0});var FV=r(Mc);zI=n(FV,"Trainer"),FV.forEach(t),DI=n(vt," uses the "),Qv=l(vt,"CODE",{});var VV=r(Qv);OI=n(VV,"HfTrainerDeepSpeedConfig"),VV.forEach(t),AI=n(vt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Lc=l(vt,"A",{href:!0});var YV=r(Lc);TI=n(YV,"TrainingArguments"),YV.forEach(t),SI=n(vt," by replacing special placeholder values: "),ej=l(vt,"CODE",{});var KV=r(ej);CI=n(KV,'"auto"'),KV.forEach(t),xI=n(vt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),vt.forEach(t),Fn.forEach(t),v0=c(e),mt=l(e,"H3",{class:!0});var l4=r(mt);zn=l(l4,"A",{id:!0,class:!0,href:!0});var JV=r(zn);sj=l(JV,"SPAN",{});var XV=r(sj);d(rp.$$.fragment,XV),XV.forEach(t),JV.forEach(t),RI=c(l4),tj=l(l4,"SPAN",{});var QV=r(tj);II=n(QV,"Custom DeepSpeed ZeRO Inference"),QV.forEach(t),l4.forEach(t),j0=c(e),Dn=l(e,"P",{});var r4=r(Dn);UI=n(r4,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Zc=l(r4,"A",{href:!0});var eY=r(Zc);GI=n(eY,"Trainer"),eY.forEach(t),MI=n(r4," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),r4.forEach(t),w0=c(e),Nc=l(e,"P",{});var sY=r(Nc);LI=n(sY,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),sY.forEach(t),y0=c(e),Hc=l(e,"P",{});var tY=r(Hc);ZI=n(tY,"The example has copious notes and is self-documenting."),tY.forEach(t),g0=c(e),Bc=l(e,"P",{});var aY=r(Bc);NI=n(aY,"Make sure to:"),aY.forEach(t),b0=c(e),On=l(e,"OL",{});var p4=r(On);aj=l(p4,"LI",{});var nY=r(aj);HI=n(nY,"disable CPU offload if you have enough GPU memory (since it slows things down)"),nY.forEach(t),BI=c(p4),nj=l(p4,"LI",{});var oY=r(nj);WI=n(oY,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),oY.forEach(t),p4.forEach(t),q0=c(e),d(pp.$$.fragment,e),E0=c(e),An=l(e,"P",{});var i4=r(An);FI=n(i4,"Let\u2019s save it as "),oj=l(i4,"CODE",{});var lY=r(oj);VI=n(lY,"t0.py"),lY.forEach(t),YI=n(i4," and run it:"),i4.forEach(t),$0=c(e),d(ip.$$.fragment,e),k0=c(e),Wc=l(e,"P",{});var rY=r(Wc);KI=n(rY,"This was a very basic example and you will want to adapt it to your needs."),rY.forEach(t),P0=c(e),_t=l(e,"H2",{class:!0});var u4=r(_t);Tn=l(u4,"A",{id:!0,class:!0,href:!0});var pY=r(Tn);lj=l(pY,"SPAN",{});var iY=r(lj);d(up.$$.fragment,iY),iY.forEach(t),pY.forEach(t),JI=c(u4),rj=l(u4,"SPAN",{});var uY=r(rj);XI=n(uY,"Main DeepSpeed Resources"),uY.forEach(t),u4.forEach(t),z0=c(e),_e=l(e,"UL",{});var Yn=r(_e);pj=l(Yn,"LI",{});var cY=r(pj);cp=l(cY,"A",{href:!0,rel:!0});var hY=r(cp);QI=n(hY,"Project\u2019s github"),hY.forEach(t),cY.forEach(t),eU=c(Yn),ij=l(Yn,"LI",{});var fY=r(ij);hp=l(fY,"A",{href:!0,rel:!0});var dY=r(hp);sU=n(dY,"Usage docs"),dY.forEach(t),fY.forEach(t),tU=c(Yn),uj=l(Yn,"LI",{});var mY=r(uj);fp=l(mY,"A",{href:!0,rel:!0});var _Y=r(fp);aU=n(_Y,"API docs"),_Y.forEach(t),mY.forEach(t),nU=c(Yn),cj=l(Yn,"LI",{});var vY=r(cj);dp=l(vY,"A",{href:!0,rel:!0});var jY=r(dp);oU=n(jY,"Blog posts"),jY.forEach(t),vY.forEach(t),Yn.forEach(t),D0=c(e),Fc=l(e,"P",{});var wY=r(Fc);lU=n(wY,"Papers:"),wY.forEach(t),O0=c(e),vs=l(e,"UL",{});var Uh=r(vs);hj=l(Uh,"LI",{});var yY=r(hj);mp=l(yY,"A",{href:!0,rel:!0});var gY=r(mp);rU=n(gY,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),gY.forEach(t),yY.forEach(t),pU=c(Uh),fj=l(Uh,"LI",{});var bY=r(fj);_p=l(bY,"A",{href:!0,rel:!0});var qY=r(_p);iU=n(qY,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),qY.forEach(t),bY.forEach(t),uU=c(Uh),dj=l(Uh,"LI",{});var EY=r(dj);vp=l(EY,"A",{href:!0,rel:!0});var $Y=r(vp);cU=n($Y,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),$Y.forEach(t),EY.forEach(t),Uh.forEach(t),A0=c(e),js=l(e,"P",{});var Gh=r(js);hU=n(Gh,"Finally, please, remember that, HuggingFace "),Vc=l(Gh,"A",{href:!0});var kY=r(Vc);fU=n(kY,"Trainer"),kY.forEach(t),dU=n(Gh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),jp=l(Gh,"A",{href:!0,rel:!0});var PY=r(jp);mU=n(PY,"DeepSpeed GitHub"),PY.forEach(t),_U=n(Gh,"."),Gh.forEach(t),this.h()},h(){h(g,"name","hf:doc:metadata"),h(g,"content",JSON.stringify(UY)),h(k,"id","deepspeed-integration"),h(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(k,"href","#deepspeed-integration"),h(b,"class","relative group"),h(q,"href","https://github.com/microsoft/DeepSpeed"),h(q,"rel","nofollow"),h(W,"href","https://arxiv.org/abs/1910.02054"),h(W,"rel","nofollow"),h(Kn,"href","https://arxiv.org/abs/2101.06840"),h(Kn,"rel","nofollow"),h(Jn,"href","https://arxiv.org/abs/2104.07857"),h(Jn,"rel","nofollow"),h(Xn,"href","https://github.com/microsoft/DeepSpeed"),h(Xn,"rel","nofollow"),h(zp,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Dp,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Op,"href","#deepspeed-non-trainer-integration"),h(Rp,"href","#deepspeed-zero-inference"),h(Up,"id","deepspeed-trainer-integration"),h(gt,"id","trainer-deepspeed-integration"),h(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gt,"href","#trainer-deepspeed-integration"),h(qs,"class","relative group"),h(Gp,"id","deepspeed-installation"),h(bt,"id","installation"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#installation"),h(Es,"class","relative group"),h(oo,"href","https://github.com/microsoft/deepspeed#installation"),h(oo,"rel","nofollow"),h(lo,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(lo,"rel","nofollow"),h(Lp,"href","#zero-install-notes"),h(uo,"href","https://developer.nvidia.com/cuda-gpus"),h(uo,"rel","nofollow"),h(mo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(mo,"rel","nofollow"),h(Vp,"id","deepspeed-multi-gpu"),h(Dt,"id","deployment-with-multiple-gpus"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-with-multiple-gpus"),h($s,"class","relative group"),h(Yp,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(vo,"href","https://www.deepspeed.ai/docs/config-json/"),h(vo,"rel","nofollow"),h(yo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(yo,"rel","nofollow"),h(bo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(bo,"rel","nofollow"),h(Xp,"id","deepspeed-one-gpu"),h(xt,"id","deployment-with-one-gpu"),h(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xt,"href","#deployment-with-one-gpu"),h(Ps,"class","relative group"),h(Qp,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h($o,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h($o,"rel","nofollow"),h(Po,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(Po,"rel","nofollow"),h(li,"id","deepspeed-notebook"),h(Gt,"id","deployment-in-notebooks"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#deployment-in-notebooks"),h(Ds,"class","relative group"),h(ci,"id","deepspeed-config"),h(Ht,"id","configuration"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#configuration"),h(Os,"class","relative group"),h(Ro,"href","https://www.deepspeed.ai/docs/config-json/"),h(Ro,"rel","nofollow"),h(Io,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Io,"rel","nofollow"),h(Mo,"href","https://github.com/microsoft/DeepSpeed"),h(Mo,"rel","nofollow"),h(fi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(di,"id","deepspeed-config-passing"),h(Kt,"id","passing-configuration"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#passing-configuration"),h(As,"class","relative group"),h(mi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(_i,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(vi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(yi,"id","deepspeed-config-shared"),h(Jt,"id","shared-configuration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#shared-configuration"),h(Ts,"class","relative group"),h(gi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(bi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(qi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Ei,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(ki,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Pi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(zi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Di,"id","deepspeed-zero"),h(ta,"id","zero"),h(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ta,"href","#zero"),h(Ss,"class","relative group"),h(Yo,"href","https://www.deepspeed.ai/tutorials/zero/"),h(Yo,"rel","nofollow"),h(Ko,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Ko,"rel","nofollow"),h(Oi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Ti,"id","deepspeed-zero2-config"),h(na,"id","zero2-config"),h(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(na,"href","#zero2-config"),h(Cs,"class","relative group"),h(Ri,"id","deepspeed-zero3-config"),h(oa,"id","zero3-config"),h(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oa,"href","#zero3-config"),h(Rs,"class","relative group"),h(Mi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Zi,"id","deepspeed-nvme"),h(pa,"id","nvme-support"),h(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pa,"href","#nvme-support"),h(Is,"class","relative group"),h(fl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(fl,"rel","nofollow"),h(dl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(dl,"rel","nofollow"),h(ml,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(ml,"rel","nofollow"),h(Bi,"id","deepspeed-zero2-zero3-performance"),h(ca,"id","zero2-vs-zero3-performance"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#zero2-vs-zero3-performance"),h(Us,"class","relative group"),h(Vi,"id","deepspeed-zero2-example"),h(fa,"id","zero2-example"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#zero2-example"),h(Ms,"class","relative group"),h(Yi,"id","deepspeed-zero3-example"),h(_a,"id","zero3-example"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#zero3-example"),h(Ls,"class","relative group"),h(wa,"id","optimizer-and-scheduler"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#optimizer-and-scheduler"),h(Zs,"class","relative group"),h(Ji,"id","deepspeed-optimizer"),h(ba,"id","optimizer"),h(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ba,"href","#optimizer"),h(Ns,"class","relative group"),h(kl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(kl,"rel","nofollow"),h(Xi,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(tu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(nu,"id","deepspeed-scheduler"),h(Ea,"id","scheduler"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#scheduler"),h(Hs,"class","relative group"),h(xl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(xl,"rel","nofollow"),h(lu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(ru,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(iu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(uu,"id","deepspeed-fp32"),h(Oa,"id","fp32-precision"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#fp32-precision"),h(Bs,"class","relative group"),h(Zl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Zl,"rel","nofollow"),h(hu,"id","deepspeed-amp"),h(Sa,"id","automatic-mixed-precision"),h(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sa,"href","#automatic-mixed-precision"),h(Ws,"class","relative group"),h(Ca,"id","fp16"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#fp16"),h(Fs,"class","relative group"),h(mu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(vu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Fl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Fl,"rel","nofollow"),h(Ia,"id","bf16"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#bf16"),h(Vs,"class","relative group"),h(Ga,"id","apex"),h(Ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ga,"href","#apex"),h(Ys,"class","relative group"),h(bu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Eu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(er,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(er,"rel","nofollow"),h($u,"id","deepspeed-bs"),h(Na,"id","batch-size"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#batch-size"),h(Ks,"class","relative group"),h(Pu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Du,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Ou,"id","deepspeed-grad-acc"),h(Ba,"id","gradient-accumulation"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#gradient-accumulation"),h(Js,"class","relative group"),h(Tu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Cu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(xu,"id","deepspeed-grad-clip"),h(Fa,"id","gradient-clipping"),h(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fa,"href","#gradient-clipping"),h(Xs,"class","relative group"),h(Iu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Gu,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Mu,"id","deepspeed-weight-extraction"),h(Ya,"id","getting-the-model-weights-out"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#getting-the-model-weights-out"),h(Qs,"class","relative group"),h(hr,"href","https://huggingface.co/models"),h(hr,"rel","nofollow"),h(nn,"id","zero3-and-infinity-nuances"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#zero3-and-infinity-nuances"),h(et,"class","relative group"),h(on,"id","constructing-massive-models"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#constructing-massive-models"),h(st,"class","relative group"),h(ec,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(sc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(qr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(qr,"rel","nofollow"),h(ac,"href","#from_pretrained-torch-dtype"),h(un,"id","gathering-parameters"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#gathering-parameters"),h(tt,"class","relative group"),h(kr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(kr,"rel","nofollow"),h(oc,"id","deepspeed-zero-inference"),h(hn,"id","zero-inference"),h(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(hn,"href","#zero-inference"),h(at,"class","relative group"),h(rc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(mn,"id","memory-requirements"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#memory-requirements"),h(nt,"class","relative group"),h(Cr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Cr,"rel","nofollow"),h(vn,"id","filing-issues"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#filing-issues"),h(ot,"class","relative group"),h(yc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(gc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(bc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Gr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Gr,"rel","nofollow"),h(Lr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch"),h(Lr,"rel","nofollow"),h(Nr,"href","https://github.com/microsoft/DeepSpeed/"),h(Nr,"rel","nofollow"),h(wn,"id","troubleshooting"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#troubleshooting"),h(rt,"class","relative group"),h(yn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(pt,"class","relative group"),h(Fr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Fr,"rel","nofollow"),h(gn,"id","training-andor-evalpredict-loss-is-nan"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#training-andor-evalpredict-loss-is-nan"),h(it,"class","relative group"),h(qn,"id","notes"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#notes"),h(ut,"class","relative group"),h(Dc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Qr,"href","https://github.com/microsoft/deepspeed#installation"),h(Qr,"rel","nofollow"),h(Oc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(ep,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(ep,"rel","nofollow"),h(Ac,"id","deepspeed-non-trainer-integration"),h(En,"id","nontrainer-deepspeed-integration"),h(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(En,"href","#nontrainer-deepspeed-integration"),h(ft,"class","relative group"),h(Tc,"href","/docs/transformers/v4.21.2/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Sc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Cc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(xc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Rc,"href","/docs/transformers/v4.21.2/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Gc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(np,"href","https://www.deepspeed.ai/"),h(np,"rel","nofollow"),h(Pn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(dt,"class","relative group"),h(Mc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Lc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"id","custom-deepspeed-zero-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#custom-deepspeed-zero-inference"),h(mt,"class","relative group"),h(Zc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(Tn,"id","main-deepspeed-resources"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#main-deepspeed-resources"),h(_t,"class","relative group"),h(cp,"href","https://github.com/microsoft/deepspeed"),h(cp,"rel","nofollow"),h(hp,"href","https://www.deepspeed.ai/getting-started/"),h(hp,"rel","nofollow"),h(fp,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(fp,"rel","nofollow"),h(dp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(dp,"rel","nofollow"),h(mp,"href","https://arxiv.org/abs/1910.02054"),h(mp,"rel","nofollow"),h(_p,"href","https://arxiv.org/abs/2101.06840"),h(_p,"rel","nofollow"),h(vp,"href","https://arxiv.org/abs/2104.07857"),h(vp,"rel","nofollow"),h(Vc,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),h(jp,"href","https://github.com/microsoft/DeepSpeed/issues"),h(jp,"rel","nofollow")},m(e,p){s(document.head,g),i(e,S,p),i(e,b,p),s(b,k),s(k,X),m(z,X,null),s(b,C),s(b,Q),s(Q,x),i(e,te,p),i(e,T,p),s(T,q),s(q,E),s(T,gs),s(T,W),s(W,bs),s(T,c4),i(e,yj,p),i(e,R,p),s(R,Mh),s(Mh,h4),s(R,f4),s(R,Lh),s(Lh,d4),s(R,m4),s(R,Zh),s(Zh,_4),s(R,v4),s(R,Nh),s(Nh,j4),s(R,w4),s(R,Hh),s(Hh,y4),s(R,g4),s(R,Bh),s(Bh,b4),i(e,gj,p),i(e,Te,p),s(Te,q4),s(Te,Kn),s(Kn,E4),s(Te,$4),s(Te,Jn),s(Jn,k4),s(Te,P4),i(e,bj,p),i(e,kp,p),s(kp,z4),i(e,qj,p),i(e,Pp,p),s(Pp,D4),i(e,Ej,p),i(e,wt,p),s(wt,O4),s(wt,Xn),s(Xn,A4),s(wt,T4),i(e,$j,p),i(e,yt,p),s(yt,Qn),s(Qn,S4),s(Qn,zp),s(zp,C4),s(Qn,x4),s(yt,R4),s(yt,F),s(F,I4),s(F,Dp),s(Dp,U4),s(F,G4),s(F,Wh),s(Wh,M4),s(F,L4),s(F,Fh),s(Fh,Z4),s(F,N4),s(F,Vh),s(Vh,H4),s(F,B4),s(F,Op),s(Op,W4),s(F,F4),i(e,kj,p),i(e,Ap,p),s(Ap,V4),i(e,Pj,p),i(e,Tp,p),s(Tp,Y4),i(e,zj,p),i(e,Sp,p),s(Sp,Yh),s(Yh,K4),i(e,Dj,p),i(e,Cp,p),s(Cp,J4),i(e,Oj,p),i(e,xp,p),s(xp,eo),s(eo,X4),s(eo,Rp),s(Rp,Q4),s(eo,e6),i(e,Aj,p),i(e,Ip,p),s(Ip,s6),i(e,Tj,p),i(e,Up,p),i(e,Sj,p),i(e,qs,p),s(qs,gt),s(gt,Kh),m(so,Kh,null),s(qs,t6),s(qs,Jh),s(Jh,a6),i(e,Cj,p),i(e,Gp,p),i(e,xj,p),i(e,Es,p),s(Es,bt),s(bt,Xh),m(to,Xh,null),s(Es,n6),s(Es,Qh),s(Qh,o6),i(e,Rj,p),i(e,Mp,p),s(Mp,l6),i(e,Ij,p),m(ao,e,p),i(e,Uj,p),i(e,Se,p),s(Se,r6),s(Se,ef),s(ef,p6),s(Se,i6),s(Se,sf),s(sf,u6),s(Se,c6),i(e,Gj,p),m(no,e,p),i(e,Mj,p),i(e,Ce,p),s(Ce,h6),s(Ce,oo),s(oo,f6),s(Ce,d6),s(Ce,lo),s(lo,m6),s(Ce,_6),i(e,Lj,p),i(e,qt,p),s(qt,v6),s(qt,Lp),s(Lp,j6),s(qt,w6),i(e,Zj,p),i(e,Zp,p),s(Zp,y6),i(e,Nj,p),i(e,Np,p),s(Np,g6),i(e,Hj,p),m(ro,e,p),i(e,Bj,p),i(e,xe,p),s(xe,b6),s(xe,tf),s(tf,q6),s(xe,E6),s(xe,af),s(af,$6),s(xe,k6),i(e,Wj,p),i(e,Et,p),s(Et,P6),s(Et,nf),s(nf,z6),s(Et,D6),i(e,Fj,p),m(po,e,p),i(e,Vj,p),i(e,ke,p),s(ke,O6),s(ke,of),s(of,A6),s(ke,T6),s(ke,lf),s(lf,S6),s(ke,C6),s(ke,rf),s(rf,x6),i(e,Yj,p),i(e,Hp,p),s(Hp,R6),i(e,Kj,p),m(io,e,p),i(e,Jj,p),i(e,Re,p),s(Re,I6),s(Re,pf),s(pf,U6),s(Re,G6),s(Re,uf),s(uf,M6),s(Re,L6),i(e,Xj,p),i(e,$t,p),s($t,Z6),s($t,cf),s(cf,N6),s($t,H6),i(e,Qj,p),i(e,Ie,p),s(Ie,B6),s(Ie,hf),s(hf,W6),s(Ie,F6),s(Ie,uo),s(uo,V6),s(Ie,Y6),i(e,ew,p),i(e,Bp,p),s(Bp,K6),i(e,sw,p),m(co,e,p),i(e,tw,p),i(e,Wp,p),s(Wp,J6),i(e,aw,p),m(ho,e,p),i(e,nw,p),i(e,Fp,p),s(Fp,X6),i(e,ow,p),m(fo,e,p),i(e,lw,p),i(e,kt,p),s(kt,Q6),s(kt,ff),s(ff,e$),s(kt,s$),i(e,rw,p),i(e,Pt,p),s(Pt,t$),s(Pt,df),s(df,a$),s(Pt,n$),i(e,pw,p),i(e,zt,p),s(zt,o$),s(zt,mo),s(mo,l$),s(zt,r$),i(e,iw,p),i(e,Vp,p),i(e,uw,p),i(e,$s,p),s($s,Dt),s(Dt,mf),m(_o,mf,null),s($s,p$),s($s,_f),s(_f,i$),i(e,cw,p),i(e,Ot,p),s(Ot,u$),s(Ot,Yp),s(Yp,c$),s(Ot,h$),i(e,hw,p),i(e,At,p),s(At,ks),s(ks,f$),s(ks,vf),s(vf,d$),s(ks,m$),s(ks,jf),s(jf,_$),s(ks,v$),s(At,j$),s(At,Pe),s(Pe,w$),s(Pe,wf),s(wf,y$),s(Pe,g$),s(Pe,yf),s(yf,b$),s(Pe,q$),s(Pe,vo),s(vo,E$),s(Pe,$$),i(e,fw,p),i(e,Kp,p),s(Kp,k$),i(e,dw,p),m(jo,e,p),i(e,mw,p),i(e,Jp,p),s(Jp,P$),i(e,_w,p),m(wo,e,p),i(e,vw,p),i(e,I,p),s(I,z$),s(I,gf),s(gf,D$),s(I,O$),s(I,bf),s(bf,A$),s(I,T$),s(I,qf),s(qf,S$),s(I,C$),s(I,Ef),s(Ef,x$),s(I,R$),s(I,yo),s(yo,I$),s(I,U$),i(e,jw,p),i(e,ae,p),s(ae,G$),s(ae,$f),s($f,M$),s(ae,L$),s(ae,kf),s(kf,Z$),s(ae,N$),s(ae,Pf),s(Pf,H$),s(ae,B$),i(e,ww,p),i(e,Tt,p),s(Tt,W$),s(Tt,zf),s(zf,F$),s(Tt,V$),i(e,yw,p),m(go,e,p),i(e,gw,p),i(e,St,p),s(St,Y$),s(St,Df),s(Df,K$),s(St,J$),i(e,bw,p),i(e,Ct,p),s(Ct,X$),s(Ct,bo),s(bo,Q$),s(Ct,e5),i(e,qw,p),i(e,Xp,p),i(e,Ew,p),i(e,Ps,p),s(Ps,xt),s(xt,Of),m(qo,Of,null),s(Ps,s5),s(Ps,Af),s(Af,t5),i(e,$w,p),i(e,Rt,p),s(Rt,a5),s(Rt,Qp),s(Qp,n5),s(Rt,o5),i(e,kw,p),m(Eo,e,p),i(e,Pw,p),i(e,Ue,p),s(Ue,l5),s(Ue,Tf),s(Tf,r5),s(Ue,p5),s(Ue,$o),s($o,i5),s(Ue,u5),i(e,zw,p),i(e,ei,p),s(ei,c5),i(e,Dw,p),i(e,It,p),s(It,Sf),s(Sf,h5),s(It,f5),s(It,Cf),s(Cf,d5),i(e,Ow,p),i(e,si,p),s(si,m5),i(e,Aw,p),m(ko,e,p),i(e,Tw,p),i(e,ti,p),s(ti,_5),i(e,Sw,p),i(e,Ut,p),s(Ut,v5),s(Ut,Po),s(Po,j5),s(Ut,w5),i(e,Cw,p),i(e,ai,p),s(ai,y5),i(e,xw,p),i(e,ni,p),s(ni,g5),i(e,Rw,p),i(e,oi,p),s(oi,zs),s(zs,zo),s(zo,b5),s(zo,xf),s(xf,q5),s(zo,E5),s(zs,$5),m(Do,zs,null),s(zs,k5),s(zs,Rf),s(Rf,P5),i(e,Iw,p),i(e,li,p),i(e,Uw,p),i(e,Ds,p),s(Ds,Gt),s(Gt,If),m(Oo,If,null),s(Ds,z5),s(Ds,Uf),s(Uf,D5),i(e,Gw,p),i(e,Mt,p),s(Mt,O5),s(Mt,Gf),s(Gf,A5),s(Mt,T5),i(e,Mw,p),i(e,ri,p),s(ri,S5),i(e,Lw,p),m(Ao,e,p),i(e,Zw,p),i(e,Lt,p),s(Lt,C5),s(Lt,Mf),s(Mf,x5),s(Lt,R5),i(e,Nw,p),i(e,pi,p),s(pi,I5),i(e,Hw,p),i(e,ii,p),s(ii,U5),i(e,Bw,p),m(To,e,p),i(e,Ww,p),i(e,Ge,p),s(Ge,G5),s(Ge,Lf),s(Lf,M5),s(Ge,L5),s(Ge,Zf),s(Zf,Z5),s(Ge,N5),i(e,Fw,p),m(So,e,p),i(e,Vw,p),i(e,Zt,p),s(Zt,H5),s(Zt,Nf),s(Nf,B5),s(Zt,W5),i(e,Yw,p),m(Co,e,p),i(e,Kw,p),i(e,ui,p),s(ui,F5),i(e,Jw,p),i(e,Nt,p),s(Nt,V5),s(Nt,Hf),s(Hf,Y5),s(Nt,K5),i(e,Xw,p),i(e,ci,p),i(e,Qw,p),i(e,Os,p),s(Os,Ht),s(Ht,Bf),m(xo,Bf,null),s(Os,J5),s(Os,Wf),s(Wf,X5),i(e,ey,p),i(e,Bt,p),s(Bt,Q5),s(Bt,Ro),s(Ro,e8),s(Bt,s8),i(e,sy,p),i(e,Wt,p),s(Wt,t8),s(Wt,Io),s(Io,a8),s(Wt,n8),i(e,ty,p),m(Uo,e,p),i(e,ay,p),i(e,Ft,p),s(Ft,o8),s(Ft,Ff),s(Ff,l8),s(Ft,r8),i(e,ny,p),m(Go,e,p),i(e,oy,p),i(e,Vt,p),s(Vt,p8),s(Vt,Mo),s(Mo,i8),s(Vt,u8),i(e,ly,p),i(e,hi,p),s(hi,c8),i(e,ry,p),i(e,ne,p),s(ne,h8),s(ne,Vf),s(Vf,f8),s(ne,d8),s(ne,Yf),s(Yf,m8),s(ne,_8),s(ne,Kf),s(Kf,v8),s(ne,j8),i(e,py,p),m(Lo,e,p),i(e,iy,p),i(e,Yt,p),s(Yt,w8),s(Yt,fi),s(fi,y8),s(Yt,g8),i(e,uy,p),i(e,di,p),i(e,cy,p),i(e,As,p),s(As,Kt),s(Kt,Jf),m(Zo,Jf,null),s(As,b8),s(As,Xf),s(Xf,q8),i(e,hy,p),i(e,U,p),s(U,E8),s(U,mi),s(mi,$8),s(U,k8),s(U,_i),s(_i,P8),s(U,z8),s(U,Qf),s(Qf,D8),s(U,O8),s(U,ed),s(ed,A8),s(U,T8),s(U,vi),s(vi,S8),s(U,C8),i(e,fy,p),i(e,ji,p),s(ji,x8),i(e,dy,p),m(No,e,p),i(e,my,p),i(e,wi,p),s(wi,R8),i(e,_y,p),m(Ho,e,p),i(e,vy,p),i(e,yi,p),i(e,jy,p),i(e,Ts,p),s(Ts,Jt),s(Jt,sd),m(Bo,sd,null),s(Ts,I8),s(Ts,td),s(td,U8),i(e,wy,p),m(Xt,e,p),i(e,yy,p),i(e,Me,p),s(Me,G8),s(Me,gi),s(gi,M8),s(Me,L8),s(Me,bi),s(bi,Z8),s(Me,N8),i(e,gy,p),i(e,Qt,p),s(Qt,H8),s(Qt,qi),s(qi,B8),s(Qt,W8),i(e,by,p),i(e,Le,p),s(Le,F8),s(Le,ad),s(ad,V8),s(Le,Y8),s(Le,Ei),s(Ei,K8),s(Le,J8),i(e,qy,p),i(e,$i,p),s($i,X8),i(e,Ey,p),i(e,ea,p),s(ea,Q8),s(ea,ki),s(ki,ek),s(ea,sk),i(e,$y,p),i(e,sa,p),s(sa,nd),s(nd,tk),s(sa,ak),s(sa,Wo),s(Wo,nk),s(Wo,Pi),s(Pi,ok),s(Wo,lk),i(e,ky,p),i(e,oe,p),s(oe,rk),s(oe,od),s(od,pk),s(oe,ik),s(oe,zi),s(zi,uk),s(oe,ck),s(oe,ld),s(ld,hk),s(oe,fk),i(e,Py,p),i(e,Di,p),i(e,zy,p),i(e,Ss,p),s(Ss,ta),s(ta,rd),m(Fo,rd,null),s(Ss,dk),s(Ss,pd),s(pd,mk),i(e,Dy,p),i(e,Vo,p),s(Vo,Yo),s(Yo,_k),s(Vo,vk),i(e,Oy,p),i(e,Ze,p),s(Ze,jk),s(Ze,id),s(id,wk),s(Ze,yk),s(Ze,Ko),s(Ko,gk),s(Ze,bk),i(e,Ay,p),i(e,aa,p),s(aa,qk),s(aa,Oi),s(Oi,Ek),s(aa,$k),i(e,Ty,p),i(e,Ai,p),s(Ai,kk),i(e,Sy,p),i(e,Ti,p),i(e,Cy,p),i(e,Cs,p),s(Cs,na),s(na,ud),m(Jo,ud,null),s(Cs,Pk),s(Cs,cd),s(cd,zk),i(e,xy,p),i(e,Si,p),s(Si,Dk),i(e,Ry,p),m(Xo,e,p),i(e,Iy,p),i(e,Ci,p),s(Ci,hd),s(hd,Ok),i(e,Uy,p),i(e,Ne,p),s(Ne,xs),s(xs,Ak),s(xs,fd),s(fd,Tk),s(xs,Sk),s(xs,dd),s(dd,Ck),s(xs,xk),s(Ne,Rk),s(Ne,G),s(G,md),s(md,Ik),s(G,Uk),s(G,_d),s(_d,Gk),s(G,Mk),s(G,vd),s(vd,Lk),s(G,Zk),s(G,jd),s(jd,Nk),s(G,Hk),s(G,wd),s(wd,Bk),s(G,Wk),s(G,yd),s(yd,Fk),s(G,Vk),s(Ne,Yk),s(Ne,gd),s(gd,Kk),i(e,Gy,p),i(e,He,p),s(He,Jk),s(He,bd),s(bd,Xk),s(He,Qk),s(He,qd),s(qd,e7),s(He,s7),i(e,My,p),m(Qo,e,p),i(e,Ly,p),i(e,xi,p),s(xi,t7),i(e,Zy,p),i(e,Ri,p),i(e,Ny,p),i(e,Rs,p),s(Rs,oa),s(oa,Ed),m(el,Ed,null),s(Rs,a7),s(Rs,$d),s($d,n7),i(e,Hy,p),i(e,Ii,p),s(Ii,o7),i(e,By,p),m(sl,e,p),i(e,Wy,p),i(e,V,p),s(V,l7),s(V,kd),s(kd,r7),s(V,p7),s(V,Pd),s(Pd,i7),s(V,u7),s(V,zd),s(zd,c7),s(V,h7),s(V,Dd),s(Dd,f7),s(V,d7),i(e,Fy,p),i(e,Be,p),s(Be,m7),s(Be,Od),s(Od,_7),s(Be,v7),s(Be,Ad),s(Ad,j7),s(Be,w7),i(e,Vy,p),i(e,Ui,p),s(Ui,Td),s(Td,y7),i(e,Yy,p),i(e,la,p),s(la,tl),s(tl,Sd),s(Sd,g7),s(tl,b7),s(tl,Cd),s(Cd,q7),s(la,E7),s(la,al),s(al,xd),s(xd,$7),s(al,k7),s(al,Rd),s(Rd,P7),i(e,Ky,p),i(e,M,p),s(M,z7),s(M,Id),s(Id,D7),s(M,O7),s(M,Ud),s(Ud,A7),s(M,T7),s(M,Gd),s(Gd,S7),s(M,C7),s(M,Md),s(Md,x7),s(M,R7),s(M,Ld),s(Ld,I7),s(M,U7),i(e,Jy,p),i(e,ze,p),s(ze,Zd),s(Zd,G7),s(ze,M7),s(ze,Nd),s(Nd,L7),s(ze,Z7),s(ze,Hd),s(Hd,N7),s(ze,H7),i(e,Xy,p),i(e,Gi,p),s(Gi,B7),i(e,Qy,p),i(e,We,p),s(We,nl),s(nl,Bd),s(Bd,W7),s(nl,F7),s(nl,Wd),s(Wd,V7),s(We,Y7),s(We,ol),s(ol,Fd),s(Fd,K7),s(ol,J7),s(ol,Vd),s(Vd,X7),s(We,Q7),s(We,ll),s(ll,Yd),s(Yd,e9),s(ll,s9),s(ll,Kd),s(Kd,t9),i(e,eg,p),i(e,Fe,p),s(Fe,a9),s(Fe,Jd),s(Jd,n9),s(Fe,o9),s(Fe,Mi),s(Mi,l9),s(Fe,r9),i(e,sg,p),i(e,rl,p),s(rl,Xd),s(Xd,p9),s(rl,i9),i(e,tg,p),i(e,le,p),s(le,u9),s(le,Qd),s(Qd,c9),s(le,h9),s(le,em),s(em,f9),s(le,d9),s(le,sm),s(sm,m9),s(le,_9),i(e,ag,p),i(e,Li,p),s(Li,pl),s(pl,tm),s(tm,v9),s(pl,j9),s(pl,am),s(am,w9),i(e,ng,p),i(e,De,p),s(De,nm),s(nm,y9),s(De,g9),s(De,om),s(om,b9),s(De,q9),s(De,lm),s(lm,E9),s(De,$9),i(e,og,p),i(e,Ve,p),s(Ve,k9),s(Ve,rm),s(rm,P9),s(Ve,z9),s(Ve,pm),s(pm,D9),s(Ve,O9),i(e,lg,p),i(e,ra,p),s(ra,il),s(il,A9),s(il,im),s(im,T9),s(il,S9),s(ra,C9),s(ra,ul),s(ul,x9),s(ul,um),s(um,R9),s(ul,I9),i(e,rg,p),i(e,Zi,p),i(e,pg,p),i(e,Is,p),s(Is,pa),s(pa,cm),m(cl,cm,null),s(Is,U9),s(Is,hm),s(hm,G9),i(e,ig,p),i(e,Ni,p),s(Ni,M9),i(e,ug,p),i(e,Hi,p),s(Hi,L9),i(e,cg,p),m(hl,e,p),i(e,hg,p),i(e,ia,p),s(ia,Z9),s(ia,fm),s(fm,N9),s(ia,H9),i(e,fg,p),i(e,Ye,p),s(Ye,B9),s(Ye,fl),s(fl,W9),s(Ye,F9),s(Ye,dl),s(dl,V9),s(Ye,Y9),i(e,dg,p),i(e,ua,p),s(ua,K9),s(ua,dm),s(dm,J9),s(ua,X9),i(e,mg,p),i(e,Ke,p),s(Ke,Q9),s(Ke,mm),s(mm,eP),s(Ke,sP),s(Ke,ml),s(ml,tP),s(Ke,aP),i(e,_g,p),i(e,Bi,p),i(e,vg,p),i(e,Us,p),s(Us,ca),s(ca,_m),m(_l,_m,null),s(Us,nP),s(Us,vm),s(vm,oP),i(e,jg,p),i(e,Wi,p),s(Wi,lP),i(e,wg,p),i(e,Fi,p),s(Fi,rP),i(e,yg,p),i(e,ha,p),s(ha,Gs),s(Gs,pP),s(Gs,jm),s(jm,iP),s(Gs,uP),s(Gs,wm),s(wm,cP),s(Gs,hP),s(ha,fP),s(ha,vl),s(vl,dP),s(vl,ym),s(ym,mP),s(vl,_P),i(e,gg,p),i(e,Je,p),s(Je,vP),s(Je,gm),s(gm,jP),s(Je,wP),s(Je,bm),s(bm,yP),s(Je,gP),i(e,bg,p),i(e,Vi,p),i(e,qg,p),i(e,Ms,p),s(Ms,fa),s(fa,qm),m(jl,qm,null),s(Ms,bP),s(Ms,Em),s(Em,qP),i(e,Eg,p),i(e,da,p),s(da,EP),s(da,$m),s($m,$P),s(da,kP),i(e,$g,p),m(wl,e,p),i(e,kg,p),i(e,ma,p),s(ma,PP),s(ma,km),s(km,zP),s(ma,DP),i(e,Pg,p),m(yl,e,p),i(e,zg,p),i(e,Yi,p),i(e,Dg,p),i(e,Ls,p),s(Ls,_a),s(_a,Pm),m(gl,Pm,null),s(Ls,OP),s(Ls,zm),s(zm,AP),i(e,Og,p),i(e,va,p),s(va,TP),s(va,Dm),s(Dm,SP),s(va,CP),i(e,Ag,p),m(bl,e,p),i(e,Tg,p),i(e,ja,p),s(ja,xP),s(ja,Om),s(Om,RP),s(ja,IP),i(e,Sg,p),m(ql,e,p),i(e,Cg,p),i(e,Zs,p),s(Zs,wa),s(wa,Am),m(El,Am,null),s(Zs,UP),s(Zs,Tm),s(Tm,GP),i(e,xg,p),i(e,ya,p),s(ya,MP),s(ya,Sm),s(Sm,LP),s(ya,ZP),i(e,Rg,p),i(e,Ki,p),s(Ki,NP),i(e,Ig,p),i(e,ga,p),s(ga,HP),s(ga,Cm),s(Cm,BP),s(ga,WP),i(e,Ug,p),i(e,Ji,p),i(e,Gg,p),i(e,Ns,p),s(Ns,ba),s(ba,xm),m($l,xm,null),s(Ns,FP),s(Ns,Rm),s(Rm,VP),i(e,Mg,p),i(e,Xe,p),s(Xe,YP),s(Xe,Im),s(Im,KP),s(Xe,JP),s(Xe,kl),s(kl,XP),s(Xe,QP),i(e,Lg,p),i(e,$,p),s($,ez),s($,Um),s(Um,sz),s($,tz),s($,Xi),s(Xi,az),s($,nz),s($,Gm),s(Gm,oz),s($,lz),s($,Mm),s(Mm,rz),s($,pz),s($,Lm),s(Lm,iz),s($,uz),s($,Zm),s(Zm,cz),s($,hz),s($,Nm),s(Nm,fz),s($,dz),s($,Hm),s(Hm,mz),s($,_z),i(e,Zg,p),i(e,Qe,p),s(Qe,vz),s(Qe,Bm),s(Bm,jz),s(Qe,wz),s(Qe,Wm),s(Wm,yz),s(Qe,gz),i(e,Ng,p),m(Pl,e,p),i(e,Hg,p),i(e,Qi,p),s(Qi,bz),i(e,Bg,p),i(e,re,p),s(re,zl),s(zl,Fm),s(Fm,qz),s(zl,Ez),s(zl,Vm),s(Vm,$z),s(re,kz),s(re,Dl),s(Dl,Ym),s(Ym,Pz),s(Dl,zz),s(Dl,Km),s(Km,Dz),s(re,Oz),s(re,Ol),s(Ol,Jm),s(Jm,Az),s(Ol,Tz),s(Ol,Xm),s(Xm,Sz),s(re,Cz),s(re,Al),s(Al,Qm),s(Qm,xz),s(Al,Rz),s(Al,e_),s(e_,Iz),i(e,Wg,p),i(e,eu,p),s(eu,Uz),i(e,Fg,p),i(e,su,p),s(su,Gz),i(e,Vg,p),m(Tl,e,p),i(e,Yg,p),i(e,qa,p),s(qa,Mz),s(qa,tu),s(tu,Lz),s(qa,Zz),i(e,Kg,p),i(e,au,p),s(au,Nz),i(e,Jg,p),m(Sl,e,p),i(e,Xg,p),i(e,pe,p),s(pe,Hz),s(pe,s_),s(s_,Bz),s(pe,Wz),s(pe,t_),s(t_,Fz),s(pe,Vz),s(pe,a_),s(a_,Yz),s(pe,Kz),i(e,Qg,p),i(e,nu,p),i(e,e2,p),i(e,Hs,p),s(Hs,Ea),s(Ea,n_),m(Cl,n_,null),s(Hs,Jz),s(Hs,o_),s(o_,Xz),i(e,s2,p),i(e,L,p),s(L,Qz),s(L,l_),s(l_,eD),s(L,sD),s(L,r_),s(r_,tD),s(L,aD),s(L,p_),s(p_,nD),s(L,oD),s(L,i_),s(i_,lD),s(L,rD),s(L,xl),s(xl,pD),s(L,iD),i(e,t2,p),i(e,ou,p),s(ou,uD),i(e,a2,p),i(e,$a,p),s($a,Rl),s(Rl,u_),s(u_,cD),s(Rl,hD),s(Rl,c_),s(c_,fD),s($a,dD),s($a,es),s(es,h_),s(h_,mD),s(es,_D),s(es,f_),s(f_,vD),s(es,jD),s(es,d_),s(d_,wD),s(es,yD),i(e,n2,p),i(e,D,p),s(D,gD),s(D,m_),s(m_,bD),s(D,qD),s(D,lu),s(lu,ED),s(D,$D),s(D,__),s(__,kD),s(D,PD),s(D,v_),s(v_,zD),s(D,DD),s(D,j_),s(j_,OD),s(D,AD),s(D,w_),s(w_,TD),s(D,SD),i(e,o2,p),i(e,ss,p),s(ss,CD),s(ss,y_),s(y_,xD),s(ss,RD),s(ss,g_),s(g_,ID),s(ss,UD),i(e,l2,p),m(Il,e,p),i(e,r2,p),i(e,ts,p),s(ts,GD),s(ts,b_),s(b_,MD),s(ts,LD),s(ts,ru),s(ru,ZD),s(ts,ND),i(e,p2,p),i(e,ie,p),s(ie,ka),s(ka,q_),s(q_,HD),s(ka,BD),s(ka,E_),s(E_,WD),s(ka,FD),s(ie,VD),s(ie,Pa),s(Pa,$_),s($_,YD),s(Pa,KD),s(Pa,k_),s(k_,JD),s(Pa,XD),s(ie,QD),s(ie,as),s(as,P_),s(P_,eO),s(as,sO),s(as,z_),s(z_,tO),s(as,aO),s(as,D_),s(D_,nO),s(as,oO),s(ie,lO),s(ie,ns),s(ns,O_),s(O_,rO),s(ns,pO),s(ns,A_),s(A_,iO),s(ns,uO),s(ns,T_),s(T_,cO),s(ns,hO),i(e,i2,p),i(e,pu,p),s(pu,fO),i(e,u2,p),m(Ul,e,p),i(e,c2,p),i(e,za,p),s(za,dO),s(za,iu),s(iu,mO),s(za,_O),i(e,h2,p),i(e,Da,p),s(Da,vO),s(Da,S_),s(S_,jO),s(Da,wO),i(e,f2,p),m(Gl,e,p),i(e,d2,p),i(e,Y,p),s(Y,yO),s(Y,C_),s(C_,gO),s(Y,bO),s(Y,x_),s(x_,qO),s(Y,EO),s(Y,R_),s(R_,$O),s(Y,kO),s(Y,I_),s(I_,PO),s(Y,zO),i(e,m2,p),i(e,uu,p),i(e,_2,p),i(e,Bs,p),s(Bs,Oa),s(Oa,U_),m(Ml,U_,null),s(Bs,DO),s(Bs,G_),s(G_,OO),i(e,v2,p),i(e,cu,p),s(cu,AO),i(e,j2,p),i(e,Aa,p),s(Aa,TO),s(Aa,M_),s(M_,SO),s(Aa,CO),i(e,w2,p),m(Ll,e,p),i(e,y2,p),i(e,Ta,p),s(Ta,xO),s(Ta,Zl),s(Zl,RO),s(Ta,IO),i(e,g2,p),i(e,ue,p),s(ue,UO),s(ue,L_),s(L_,GO),s(ue,MO),s(ue,Z_),s(Z_,LO),s(ue,ZO),s(ue,N_),s(N_,NO),s(ue,HO),i(e,b2,p),i(e,hu,p),i(e,q2,p),i(e,Ws,p),s(Ws,Sa),s(Sa,H_),m(Nl,H_,null),s(Ws,BO),s(Ws,B_),s(B_,WO),i(e,E2,p),i(e,fu,p),s(fu,FO),i(e,$2,p),i(e,Fs,p),s(Fs,Ca),s(Ca,W_),m(Hl,W_,null),s(Fs,VO),s(Fs,F_),s(F_,YO),i(e,k2,p),i(e,du,p),s(du,KO),i(e,P2,p),m(Bl,e,p),i(e,z2,p),i(e,os,p),s(os,JO),s(os,mu),s(mu,XO),s(os,QO),s(os,V_),s(V_,eA),s(os,sA),i(e,D2,p),i(e,ls,p),s(ls,tA),s(ls,Y_),s(Y_,aA),s(ls,nA),s(ls,K_),s(K_,oA),s(ls,lA),i(e,O2,p),i(e,_u,p),s(_u,rA),i(e,A2,p),m(Wl,e,p),i(e,T2,p),i(e,xa,p),s(xa,pA),s(xa,vu),s(vu,iA),s(xa,uA),i(e,S2,p),i(e,Ra,p),s(Ra,cA),s(Ra,Fl),s(Fl,hA),s(Ra,fA),i(e,C2,p),i(e,Vs,p),s(Vs,Ia),s(Ia,J_),m(Vl,J_,null),s(Vs,dA),s(Vs,X_),s(X_,mA),i(e,x2,p),i(e,ju,p),s(ju,_A),i(e,R2,p),m(Yl,e,p),i(e,I2,p),i(e,wu,p),s(wu,vA),i(e,U2,p),i(e,rs,p),s(rs,jA),s(rs,Q_),s(Q_,wA),s(rs,yA),s(rs,e1),s(e1,gA),s(rs,bA),i(e,G2,p),i(e,yu,p),s(yu,qA),i(e,M2,p),m(Kl,e,p),i(e,L2,p),m(Ua,e,p),i(e,Z2,p),i(e,Ys,p),s(Ys,Ga),s(Ga,s1),m(Jl,s1,null),s(Ys,EA),s(Ys,t1),s(t1,$A),i(e,N2,p),i(e,gu,p),s(gu,kA),i(e,H2,p),m(Xl,e,p),i(e,B2,p),i(e,ce,p),s(ce,PA),s(ce,bu),s(bu,zA),s(ce,DA),s(ce,a1),s(a1,OA),s(ce,AA),s(ce,n1),s(n1,TA),s(ce,SA),i(e,W2,p),i(e,Ma,p),s(Ma,CA),s(Ma,o1),s(o1,xA),s(Ma,RA),i(e,F2,p),i(e,qu,p),s(qu,IA),i(e,V2,p),m(Ql,e,p),i(e,Y2,p),i(e,La,p),s(La,UA),s(La,Eu),s(Eu,GA),s(La,MA),i(e,K2,p),i(e,Za,p),s(Za,LA),s(Za,er),s(er,ZA),s(Za,NA),i(e,J2,p),i(e,$u,p),i(e,X2,p),i(e,Ks,p),s(Ks,Na),s(Na,l1),m(sr,l1,null),s(Ks,HA),s(Ks,r1),s(r1,BA),i(e,Q2,p),i(e,ku,p),s(ku,WA),i(e,eb,p),m(tr,e,p),i(e,sb,p),i(e,Z,p),s(Z,FA),s(Z,Pu),s(Pu,VA),s(Z,YA),s(Z,p1),s(p1,KA),s(Z,JA),s(Z,i1),s(i1,XA),s(Z,QA),s(Z,u1),s(u1,eT),s(Z,sT),s(Z,c1),s(c1,tT),s(Z,aT),i(e,tb,p),i(e,zu,p),s(zu,nT),i(e,ab,p),m(ar,e,p),i(e,nb,p),i(e,Ha,p),s(Ha,oT),s(Ha,Du),s(Du,lT),s(Ha,rT),i(e,ob,p),i(e,Ou,p),i(e,lb,p),i(e,Js,p),s(Js,Ba),s(Ba,h1),m(nr,h1,null),s(Js,pT),s(Js,f1),s(f1,iT),i(e,rb,p),i(e,Au,p),s(Au,uT),i(e,pb,p),m(or,e,p),i(e,ib,p),i(e,ps,p),s(ps,cT),s(ps,Tu),s(Tu,hT),s(ps,fT),s(ps,d1),s(d1,dT),s(ps,mT),i(e,ub,p),i(e,Su,p),s(Su,_T),i(e,cb,p),m(lr,e,p),i(e,hb,p),i(e,Wa,p),s(Wa,vT),s(Wa,Cu),s(Cu,jT),s(Wa,wT),i(e,fb,p),i(e,xu,p),i(e,db,p),i(e,Xs,p),s(Xs,Fa),s(Fa,m1),m(rr,m1,null),s(Xs,yT),s(Xs,_1),s(_1,gT),i(e,mb,p),i(e,Ru,p),s(Ru,bT),i(e,_b,p),m(pr,e,p),i(e,vb,p),i(e,is,p),s(is,qT),s(is,Iu),s(Iu,ET),s(is,$T),s(is,v1),s(v1,kT),s(is,PT),i(e,jb,p),i(e,Uu,p),s(Uu,zT),i(e,wb,p),m(ir,e,p),i(e,yb,p),i(e,Va,p),s(Va,DT),s(Va,Gu),s(Gu,OT),s(Va,AT),i(e,gb,p),i(e,Mu,p),i(e,bb,p),i(e,Qs,p),s(Qs,Ya),s(Ya,j1),m(ur,j1,null),s(Qs,TT),s(Qs,w1),s(w1,ST),i(e,qb,p),i(e,Ka,p),s(Ka,CT),s(Ka,y1),s(y1,xT),s(Ka,RT),i(e,Eb,p),i(e,Lu,p),s(Lu,g1),s(g1,IT),i(e,$b,p),i(e,Ja,p),s(Ja,UT),s(Ja,b1),s(b1,GT),s(Ja,MT),i(e,kb,p),i(e,O,p),s(O,LT),s(O,q1),s(q1,ZT),s(O,NT),s(O,E1),s(E1,HT),s(O,BT),s(O,$1),s($1,WT),s(O,FT),s(O,k1),s(k1,VT),s(O,YT),s(O,P1),s(P1,KT),s(O,JT),s(O,z1),s(z1,XT),s(O,QT),i(e,Pb,p),m(cr,e,p),i(e,zb,p),i(e,Zu,p),s(Zu,D1),s(D1,eS),i(e,Db,p),i(e,Xa,p),s(Xa,sS),s(Xa,hr),s(hr,tS),s(Xa,aS),i(e,Ob,p),i(e,Nu,p),s(Nu,O1),s(O1,nS),i(e,Ab,p),i(e,Hu,p),s(Hu,oS),i(e,Tb,p),i(e,Bu,p),s(Bu,lS),i(e,Sb,p),m(fr,e,p),i(e,Cb,p),i(e,us,p),s(us,rS),s(us,A1),s(A1,pS),s(us,iS),s(us,T1),s(T1,uS),s(us,cS),i(e,xb,p),m(dr,e,p),i(e,Rb,p),m(Qa,e,p),i(e,Ib,p),i(e,en,p),s(en,hS),s(en,S1),s(S1,fS),s(en,dS),i(e,Ub,p),i(e,sn,p),s(sn,mS),s(sn,C1),s(C1,_S),s(sn,vS),i(e,Gb,p),m(mr,e,p),i(e,Mb,p),i(e,Wu,p),s(Wu,x1),s(x1,jS),i(e,Lb,p),i(e,cs,p),s(cs,wS),s(cs,R1),s(R1,yS),s(cs,gS),s(cs,I1),s(I1,bS),s(cs,qS),i(e,Zb,p),i(e,Fu,p),s(Fu,ES),i(e,Nb,p),m(_r,e,p),i(e,Hb,p),i(e,tn,p),s(tn,$S),s(tn,U1),s(U1,kS),s(tn,PS),i(e,Bb,p),m(vr,e,p),i(e,Wb,p),i(e,an,p),s(an,zS),s(an,G1),s(G1,DS),s(an,OS),i(e,Fb,p),i(e,Vu,p),s(Vu,AS),i(e,Vb,p),i(e,jr,p),s(jr,M1),s(M1,TS),s(jr,SS),i(e,Yb,p),i(e,hs,p),s(hs,CS),s(hs,L1),s(L1,xS),s(hs,RS),s(hs,Z1),s(Z1,IS),s(hs,US),i(e,Kb,p),i(e,Yu,p),s(Yu,GS),i(e,Jb,p),i(e,et,p),s(et,nn),s(nn,N1),m(wr,N1,null),s(et,MS),s(et,H1),s(H1,LS),i(e,Xb,p),i(e,Ku,p),s(Ku,ZS),i(e,Qb,p),i(e,Ju,p),s(Ju,NS),i(e,e3,p),i(e,Xu,p),s(Xu,HS),i(e,s3,p),i(e,st,p),s(st,on),s(on,B1),m(yr,B1,null),s(st,BS),s(st,W1),s(W1,WS),i(e,t3,p),i(e,ln,p),s(ln,FS),s(ln,F1),s(F1,VS),s(ln,YS),i(e,a3,p),m(gr,e,p),i(e,n3,p),i(e,Qu,p),s(Qu,KS),i(e,o3,p),i(e,P,p),s(P,JS),s(P,V1),s(V1,XS),s(P,QS),s(P,Y1),s(Y1,eC),s(P,sC),s(P,K1),s(K1,tC),s(P,aC),s(P,ec),s(ec,nC),s(P,oC),s(P,sc),s(sc,lC),s(P,rC),s(P,J1),s(J1,pC),s(P,iC),s(P,X1),s(X1,uC),s(P,cC),i(e,l3,p),m(br,e,p),i(e,r3,p),i(e,rn,p),s(rn,hC),s(rn,Q1),s(Q1,fC),s(rn,dC),i(e,p3,p),i(e,tc,p),s(tc,mC),i(e,i3,p),i(e,pn,p),s(pn,_C),s(pn,qr),s(qr,vC),s(pn,jC),i(e,u3,p),i(e,he,p),s(he,wC),s(he,ev),s(ev,yC),s(he,gC),s(he,sv),s(sv,bC),s(he,qC),s(he,ac),s(ac,EC),s(he,$C),i(e,c3,p),i(e,tt,p),s(tt,un),s(un,tv),m(Er,tv,null),s(tt,kC),s(tt,av),s(av,PC),i(e,h3,p),i(e,$r,p),s($r,zC),s($r,kr),s(kr,DC),i(e,f3,p),i(e,cn,p),s(cn,OC),s(cn,nv),s(nv,AC),s(cn,TC),i(e,d3,p),i(e,nc,p),s(nc,SC),i(e,m3,p),m(Pr,e,p),i(e,_3,p),i(e,fs,p),s(fs,CC),s(fs,ov),s(ov,xC),s(fs,RC),s(fs,lv),s(lv,IC),s(fs,UC),i(e,v3,p),i(e,oc,p),i(e,j3,p),i(e,at,p),s(at,hn),s(hn,rv),m(zr,rv,null),s(at,GC),s(at,pv),s(pv,MC),i(e,w3,p),i(e,lc,p),s(lc,LC),i(e,y3,p),i(e,fn,p),s(fn,ZC),s(fn,rc),s(rc,NC),s(fn,HC),i(e,g3,p),m(Dr,e,p),i(e,b3,p),i(e,pc,p),s(pc,BC),i(e,q3,p),i(e,dn,p),s(dn,WC),s(dn,iv),s(iv,FC),s(dn,VC),i(e,E3,p),m(Or,e,p),i(e,$3,p),i(e,ic,p),s(ic,YC),i(e,k3,p),i(e,uc,p),s(uc,KC),i(e,P3,p),i(e,nt,p),s(nt,mn),s(mn,uv),m(Ar,uv,null),s(nt,JC),s(nt,cv),s(cv,XC),i(e,z3,p),i(e,cc,p),s(cc,QC),i(e,D3,p),i(e,hc,p),s(hc,ex),i(e,O3,p),m(Tr,e,p),i(e,A3,p),i(e,fc,p),s(fc,sx),i(e,T3,p),i(e,dc,p),s(dc,tx),i(e,S3,p),i(e,mc,p),s(mc,ax),i(e,C3,p),i(e,_c,p),s(_c,nx),i(e,x3,p),m(Sr,e,p),i(e,R3,p),i(e,vc,p),s(vc,ox),i(e,I3,p),i(e,_n,p),s(_n,lx),s(_n,Cr),s(Cr,rx),s(_n,px),i(e,U3,p),i(e,ot,p),s(ot,vn),s(vn,hv),m(xr,hv,null),s(ot,ix),s(ot,fv),s(fv,ux),i(e,G3,p),i(e,jc,p),s(jc,cx),i(e,M3,p),i(e,wc,p),s(wc,hx),i(e,L3,p),i(e,N,p),s(N,dv),s(dv,mv),s(mv,fx),s(N,dx),s(N,_v),s(_v,Oe),s(Oe,mx),s(Oe,yc),s(yc,_x),s(Oe,vx),s(Oe,gc),s(gc,jx),s(Oe,wx),s(Oe,bc),s(bc,yx),s(Oe,gx),s(N,bx),s(N,Rr),s(Rr,vv),s(vv,qx),s(Rr,Ex),m(Ir,Rr,null),s(N,$x),s(N,jv),s(jv,Ur),s(Ur,kx),s(Ur,Gr),s(Gr,Px),s(Ur,zx),s(N,Dx),s(N,wv),s(wv,yv),s(yv,Ox),s(N,Ax),s(N,gv),s(gv,Mr),s(Mr,Tx),s(Mr,Lr),s(Lr,Sx),s(Mr,Cx),i(e,Z3,p),i(e,qc,p),s(qc,xx),i(e,N3,p),i(e,jn,p),s(jn,lt),s(lt,bv),s(bv,Rx),s(lt,Ix),s(lt,qv),s(qv,Ux),s(lt,Gx),s(lt,Ev),s(Ev,Mx),s(jn,Lx),s(jn,$v),s($v,Zr),s(Zr,Zx),s(Zr,Nr),s(Nr,Nx),s(Zr,Hx),i(e,H3,p),i(e,rt,p),s(rt,wn),s(wn,kv),m(Hr,kv,null),s(rt,Bx),s(rt,Pv),s(Pv,Wx),i(e,B3,p),i(e,pt,p),s(pt,yn),s(yn,zv),m(Br,zv,null),s(pt,Fx),s(pt,Wr),s(Wr,Vx),s(Wr,Dv),s(Dv,Yx),s(Wr,Kx),i(e,W3,p),i(e,H,p),s(H,Jx),s(H,Ov),s(Ov,Xx),s(H,Qx),s(H,Av),s(Av,eR),s(H,sR),s(H,Tv),s(Tv,tR),s(H,aR),s(H,Sv),s(Sv,nR),s(H,oR),s(H,Fr),s(Fr,lR),s(H,rR),i(e,F3,p),i(e,it,p),s(it,gn),s(gn,Cv),m(Vr,Cv,null),s(it,pR),s(it,Ec),s(Ec,iR),s(Ec,xv),s(xv,uR),i(e,V3,p),i(e,$c,p),s($c,cR),i(e,Y3,p),i(e,kc,p),s(kc,hR),i(e,K3,p),m(Yr,e,p),i(e,J3,p),i(e,bn,p),s(bn,fR),s(bn,Rv),s(Rv,dR),s(bn,mR),i(e,X3,p),m(Kr,e,p),i(e,Q3,p),i(e,Pc,p),s(Pc,_R),i(e,e0,p),i(e,zc,p),s(zc,vR),i(e,s0,p),i(e,ds,p),s(ds,jR),s(ds,Iv),s(Iv,wR),s(ds,yR),s(ds,Uv),s(Uv,gR),s(ds,bR),i(e,t0,p),i(e,ut,p),s(ut,qn),s(qn,Gv),m(Jr,Gv,null),s(ut,qR),s(ut,Mv),s(Mv,ER),i(e,a0,p),i(e,ms,p),s(ms,ct),s(ct,$R),s(ct,Dc),s(Dc,kR),s(ct,PR),s(ct,Lv),s(Lv,zR),s(ct,DR),s(ms,OR),s(ms,Xr),s(Xr,AR),s(Xr,Qr),s(Qr,TR),s(Xr,SR),s(ms,CR),s(ms,ht),s(ht,xR),s(ht,Oc),s(Oc,RR),s(ht,IR),s(ht,ep),s(ep,UR),s(ht,GR),i(e,n0,p),i(e,Ac,p),i(e,o0,p),i(e,ft,p),s(ft,En),s(En,Zv),m(sp,Zv,null),s(ft,MR),s(ft,Nv),s(Nv,LR),i(e,l0,p),i(e,fe,p),s(fe,ZR),s(fe,Tc),s(Tc,NR),s(fe,HR),s(fe,Sc),s(Sc,BR),s(fe,WR),s(fe,Hv),s(Hv,FR),s(fe,VR),i(e,r0,p),i(e,$n,p),s($n,YR),s($n,Cc),s(Cc,KR),s($n,JR),i(e,p0,p),i(e,_s,p),s(_s,XR),s(_s,xc),s(xc,QR),s(_s,eI),s(_s,Rc),s(Rc,sI),s(_s,tI),i(e,i0,p),i(e,kn,p),s(kn,aI),s(kn,Bv),s(Bv,nI),s(kn,oI),i(e,u0,p),i(e,Ic,p),s(Ic,lI),i(e,c0,p),m(tp,e,p),i(e,h0,p),i(e,Uc,p),s(Uc,rI),i(e,f0,p),m(ap,e,p),i(e,d0,p),i(e,de,p),s(de,pI),s(de,Gc),s(Gc,iI),s(de,uI),s(de,np),s(np,cI),s(de,hI),s(de,Wv),s(Wv,fI),s(de,dI),i(e,m0,p),i(e,dt,p),s(dt,Pn),s(Pn,Fv),m(op,Fv,null),s(dt,mI),s(dt,Vv),s(Vv,_I),i(e,_0,p),i(e,ee,p),m(lp,ee,null),s(ee,vI),s(ee,Yv),s(Yv,jI),s(ee,wI),s(ee,Ae),s(Ae,yI),s(Ae,Kv),s(Kv,gI),s(Ae,bI),s(Ae,Jv),s(Jv,qI),s(Ae,EI),s(Ae,Xv),s(Xv,$I),s(Ae,kI),s(ee,PI),s(ee,me),s(me,Mc),s(Mc,zI),s(me,DI),s(me,Qv),s(Qv,OI),s(me,AI),s(me,Lc),s(Lc,TI),s(me,SI),s(me,ej),s(ej,CI),s(me,xI),i(e,v0,p),i(e,mt,p),s(mt,zn),s(zn,sj),m(rp,sj,null),s(mt,RI),s(mt,tj),s(tj,II),i(e,j0,p),i(e,Dn,p),s(Dn,UI),s(Dn,Zc),s(Zc,GI),s(Dn,MI),i(e,w0,p),i(e,Nc,p),s(Nc,LI),i(e,y0,p),i(e,Hc,p),s(Hc,ZI),i(e,g0,p),i(e,Bc,p),s(Bc,NI),i(e,b0,p),i(e,On,p),s(On,aj),s(aj,HI),s(On,BI),s(On,nj),s(nj,WI),i(e,q0,p),m(pp,e,p),i(e,E0,p),i(e,An,p),s(An,FI),s(An,oj),s(oj,VI),s(An,YI),i(e,$0,p),m(ip,e,p),i(e,k0,p),i(e,Wc,p),s(Wc,KI),i(e,P0,p),i(e,_t,p),s(_t,Tn),s(Tn,lj),m(up,lj,null),s(_t,JI),s(_t,rj),s(rj,XI),i(e,z0,p),i(e,_e,p),s(_e,pj),s(pj,cp),s(cp,QI),s(_e,eU),s(_e,ij),s(ij,hp),s(hp,sU),s(_e,tU),s(_e,uj),s(uj,fp),s(fp,aU),s(_e,nU),s(_e,cj),s(cj,dp),s(dp,oU),i(e,D0,p),i(e,Fc,p),s(Fc,lU),i(e,O0,p),i(e,vs,p),s(vs,hj),s(hj,mp),s(mp,rU),s(vs,pU),s(vs,fj),s(fj,_p),s(_p,iU),s(vs,uU),s(vs,dj),s(dj,vp),s(vp,cU),i(e,A0,p),i(e,js,p),s(js,hU),s(js,Vc),s(Vc,fU),s(js,dU),s(js,jp),s(jp,mU),s(js,_U),T0=!0},p(e,[p]){const wp={};p&2&&(wp.$$scope={dirty:p,ctx:e}),Xt.$set(wp);const mj={};p&2&&(mj.$$scope={dirty:p,ctx:e}),Ua.$set(mj);const _j={};p&2&&(_j.$$scope={dirty:p,ctx:e}),Qa.$set(_j)},i(e){T0||(_(z.$$.fragment,e),_(so.$$.fragment,e),_(to.$$.fragment,e),_(ao.$$.fragment,e),_(no.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(co.$$.fragment,e),_(ho.$$.fragment,e),_(fo.$$.fragment,e),_(_o.$$.fragment,e),_(jo.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(qo.$$.fragment,e),_(Eo.$$.fragment,e),_(ko.$$.fragment,e),_(Do.$$.fragment,e),_(Oo.$$.fragment,e),_(Ao.$$.fragment,e),_(To.$$.fragment,e),_(So.$$.fragment,e),_(Co.$$.fragment,e),_(xo.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Lo.$$.fragment,e),_(Zo.$$.fragment,e),_(No.$$.fragment,e),_(Ho.$$.fragment,e),_(Bo.$$.fragment,e),_(Xt.$$.fragment,e),_(Fo.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(Qo.$$.fragment,e),_(el.$$.fragment,e),_(sl.$$.fragment,e),_(cl.$$.fragment,e),_(hl.$$.fragment,e),_(_l.$$.fragment,e),_(jl.$$.fragment,e),_(wl.$$.fragment,e),_(yl.$$.fragment,e),_(gl.$$.fragment,e),_(bl.$$.fragment,e),_(ql.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(Pl.$$.fragment,e),_(Tl.$$.fragment,e),_(Sl.$$.fragment,e),_(Cl.$$.fragment,e),_(Il.$$.fragment,e),_(Ul.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Ll.$$.fragment,e),_(Nl.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Vl.$$.fragment,e),_(Yl.$$.fragment,e),_(Kl.$$.fragment,e),_(Ua.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(rr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(Qa.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(gr.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_(Pr.$$.fragment,e),_(zr.$$.fragment,e),_(Dr.$$.fragment,e),_(Or.$$.fragment,e),_(Ar.$$.fragment,e),_(Tr.$$.fragment,e),_(Sr.$$.fragment,e),_(xr.$$.fragment,e),_(Ir.$$.fragment,e),_(Hr.$$.fragment,e),_(Br.$$.fragment,e),_(Vr.$$.fragment,e),_(Yr.$$.fragment,e),_(Kr.$$.fragment,e),_(Jr.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(op.$$.fragment,e),_(lp.$$.fragment,e),_(rp.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(up.$$.fragment,e),T0=!0)},o(e){v(z.$$.fragment,e),v(so.$$.fragment,e),v(to.$$.fragment,e),v(ao.$$.fragment,e),v(no.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(co.$$.fragment,e),v(ho.$$.fragment,e),v(fo.$$.fragment,e),v(_o.$$.fragment,e),v(jo.$$.fragment,e),v(wo.$$.fragment,e),v(go.$$.fragment,e),v(qo.$$.fragment,e),v(Eo.$$.fragment,e),v(ko.$$.fragment,e),v(Do.$$.fragment,e),v(Oo.$$.fragment,e),v(Ao.$$.fragment,e),v(To.$$.fragment,e),v(So.$$.fragment,e),v(Co.$$.fragment,e),v(xo.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Lo.$$.fragment,e),v(Zo.$$.fragment,e),v(No.$$.fragment,e),v(Ho.$$.fragment,e),v(Bo.$$.fragment,e),v(Xt.$$.fragment,e),v(Fo.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(Qo.$$.fragment,e),v(el.$$.fragment,e),v(sl.$$.fragment,e),v(cl.$$.fragment,e),v(hl.$$.fragment,e),v(_l.$$.fragment,e),v(jl.$$.fragment,e),v(wl.$$.fragment,e),v(yl.$$.fragment,e),v(gl.$$.fragment,e),v(bl.$$.fragment,e),v(ql.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(Pl.$$.fragment,e),v(Tl.$$.fragment,e),v(Sl.$$.fragment,e),v(Cl.$$.fragment,e),v(Il.$$.fragment,e),v(Ul.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Ll.$$.fragment,e),v(Nl.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Vl.$$.fragment,e),v(Yl.$$.fragment,e),v(Kl.$$.fragment,e),v(Ua.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(rr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(Qa.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(gr.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v(Pr.$$.fragment,e),v(zr.$$.fragment,e),v(Dr.$$.fragment,e),v(Or.$$.fragment,e),v(Ar.$$.fragment,e),v(Tr.$$.fragment,e),v(Sr.$$.fragment,e),v(xr.$$.fragment,e),v(Ir.$$.fragment,e),v(Hr.$$.fragment,e),v(Br.$$.fragment,e),v(Vr.$$.fragment,e),v(Yr.$$.fragment,e),v(Kr.$$.fragment,e),v(Jr.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(op.$$.fragment,e),v(lp.$$.fragment,e),v(rp.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(up.$$.fragment,e),T0=!1},d(e){t(g),e&&t(S),e&&t(b),j(z),e&&t(te),e&&t(T),e&&t(yj),e&&t(R),e&&t(gj),e&&t(Te),e&&t(bj),e&&t(kp),e&&t(qj),e&&t(Pp),e&&t(Ej),e&&t(wt),e&&t($j),e&&t(yt),e&&t(kj),e&&t(Ap),e&&t(Pj),e&&t(Tp),e&&t(zj),e&&t(Sp),e&&t(Dj),e&&t(Cp),e&&t(Oj),e&&t(xp),e&&t(Aj),e&&t(Ip),e&&t(Tj),e&&t(Up),e&&t(Sj),e&&t(qs),j(so),e&&t(Cj),e&&t(Gp),e&&t(xj),e&&t(Es),j(to),e&&t(Rj),e&&t(Mp),e&&t(Ij),j(ao,e),e&&t(Uj),e&&t(Se),e&&t(Gj),j(no,e),e&&t(Mj),e&&t(Ce),e&&t(Lj),e&&t(qt),e&&t(Zj),e&&t(Zp),e&&t(Nj),e&&t(Np),e&&t(Hj),j(ro,e),e&&t(Bj),e&&t(xe),e&&t(Wj),e&&t(Et),e&&t(Fj),j(po,e),e&&t(Vj),e&&t(ke),e&&t(Yj),e&&t(Hp),e&&t(Kj),j(io,e),e&&t(Jj),e&&t(Re),e&&t(Xj),e&&t($t),e&&t(Qj),e&&t(Ie),e&&t(ew),e&&t(Bp),e&&t(sw),j(co,e),e&&t(tw),e&&t(Wp),e&&t(aw),j(ho,e),e&&t(nw),e&&t(Fp),e&&t(ow),j(fo,e),e&&t(lw),e&&t(kt),e&&t(rw),e&&t(Pt),e&&t(pw),e&&t(zt),e&&t(iw),e&&t(Vp),e&&t(uw),e&&t($s),j(_o),e&&t(cw),e&&t(Ot),e&&t(hw),e&&t(At),e&&t(fw),e&&t(Kp),e&&t(dw),j(jo,e),e&&t(mw),e&&t(Jp),e&&t(_w),j(wo,e),e&&t(vw),e&&t(I),e&&t(jw),e&&t(ae),e&&t(ww),e&&t(Tt),e&&t(yw),j(go,e),e&&t(gw),e&&t(St),e&&t(bw),e&&t(Ct),e&&t(qw),e&&t(Xp),e&&t(Ew),e&&t(Ps),j(qo),e&&t($w),e&&t(Rt),e&&t(kw),j(Eo,e),e&&t(Pw),e&&t(Ue),e&&t(zw),e&&t(ei),e&&t(Dw),e&&t(It),e&&t(Ow),e&&t(si),e&&t(Aw),j(ko,e),e&&t(Tw),e&&t(ti),e&&t(Sw),e&&t(Ut),e&&t(Cw),e&&t(ai),e&&t(xw),e&&t(ni),e&&t(Rw),e&&t(oi),j(Do),e&&t(Iw),e&&t(li),e&&t(Uw),e&&t(Ds),j(Oo),e&&t(Gw),e&&t(Mt),e&&t(Mw),e&&t(ri),e&&t(Lw),j(Ao,e),e&&t(Zw),e&&t(Lt),e&&t(Nw),e&&t(pi),e&&t(Hw),e&&t(ii),e&&t(Bw),j(To,e),e&&t(Ww),e&&t(Ge),e&&t(Fw),j(So,e),e&&t(Vw),e&&t(Zt),e&&t(Yw),j(Co,e),e&&t(Kw),e&&t(ui),e&&t(Jw),e&&t(Nt),e&&t(Xw),e&&t(ci),e&&t(Qw),e&&t(Os),j(xo),e&&t(ey),e&&t(Bt),e&&t(sy),e&&t(Wt),e&&t(ty),j(Uo,e),e&&t(ay),e&&t(Ft),e&&t(ny),j(Go,e),e&&t(oy),e&&t(Vt),e&&t(ly),e&&t(hi),e&&t(ry),e&&t(ne),e&&t(py),j(Lo,e),e&&t(iy),e&&t(Yt),e&&t(uy),e&&t(di),e&&t(cy),e&&t(As),j(Zo),e&&t(hy),e&&t(U),e&&t(fy),e&&t(ji),e&&t(dy),j(No,e),e&&t(my),e&&t(wi),e&&t(_y),j(Ho,e),e&&t(vy),e&&t(yi),e&&t(jy),e&&t(Ts),j(Bo),e&&t(wy),j(Xt,e),e&&t(yy),e&&t(Me),e&&t(gy),e&&t(Qt),e&&t(by),e&&t(Le),e&&t(qy),e&&t($i),e&&t(Ey),e&&t(ea),e&&t($y),e&&t(sa),e&&t(ky),e&&t(oe),e&&t(Py),e&&t(Di),e&&t(zy),e&&t(Ss),j(Fo),e&&t(Dy),e&&t(Vo),e&&t(Oy),e&&t(Ze),e&&t(Ay),e&&t(aa),e&&t(Ty),e&&t(Ai),e&&t(Sy),e&&t(Ti),e&&t(Cy),e&&t(Cs),j(Jo),e&&t(xy),e&&t(Si),e&&t(Ry),j(Xo,e),e&&t(Iy),e&&t(Ci),e&&t(Uy),e&&t(Ne),e&&t(Gy),e&&t(He),e&&t(My),j(Qo,e),e&&t(Ly),e&&t(xi),e&&t(Zy),e&&t(Ri),e&&t(Ny),e&&t(Rs),j(el),e&&t(Hy),e&&t(Ii),e&&t(By),j(sl,e),e&&t(Wy),e&&t(V),e&&t(Fy),e&&t(Be),e&&t(Vy),e&&t(Ui),e&&t(Yy),e&&t(la),e&&t(Ky),e&&t(M),e&&t(Jy),e&&t(ze),e&&t(Xy),e&&t(Gi),e&&t(Qy),e&&t(We),e&&t(eg),e&&t(Fe),e&&t(sg),e&&t(rl),e&&t(tg),e&&t(le),e&&t(ag),e&&t(Li),e&&t(ng),e&&t(De),e&&t(og),e&&t(Ve),e&&t(lg),e&&t(ra),e&&t(rg),e&&t(Zi),e&&t(pg),e&&t(Is),j(cl),e&&t(ig),e&&t(Ni),e&&t(ug),e&&t(Hi),e&&t(cg),j(hl,e),e&&t(hg),e&&t(ia),e&&t(fg),e&&t(Ye),e&&t(dg),e&&t(ua),e&&t(mg),e&&t(Ke),e&&t(_g),e&&t(Bi),e&&t(vg),e&&t(Us),j(_l),e&&t(jg),e&&t(Wi),e&&t(wg),e&&t(Fi),e&&t(yg),e&&t(ha),e&&t(gg),e&&t(Je),e&&t(bg),e&&t(Vi),e&&t(qg),e&&t(Ms),j(jl),e&&t(Eg),e&&t(da),e&&t($g),j(wl,e),e&&t(kg),e&&t(ma),e&&t(Pg),j(yl,e),e&&t(zg),e&&t(Yi),e&&t(Dg),e&&t(Ls),j(gl),e&&t(Og),e&&t(va),e&&t(Ag),j(bl,e),e&&t(Tg),e&&t(ja),e&&t(Sg),j(ql,e),e&&t(Cg),e&&t(Zs),j(El),e&&t(xg),e&&t(ya),e&&t(Rg),e&&t(Ki),e&&t(Ig),e&&t(ga),e&&t(Ug),e&&t(Ji),e&&t(Gg),e&&t(Ns),j($l),e&&t(Mg),e&&t(Xe),e&&t(Lg),e&&t($),e&&t(Zg),e&&t(Qe),e&&t(Ng),j(Pl,e),e&&t(Hg),e&&t(Qi),e&&t(Bg),e&&t(re),e&&t(Wg),e&&t(eu),e&&t(Fg),e&&t(su),e&&t(Vg),j(Tl,e),e&&t(Yg),e&&t(qa),e&&t(Kg),e&&t(au),e&&t(Jg),j(Sl,e),e&&t(Xg),e&&t(pe),e&&t(Qg),e&&t(nu),e&&t(e2),e&&t(Hs),j(Cl),e&&t(s2),e&&t(L),e&&t(t2),e&&t(ou),e&&t(a2),e&&t($a),e&&t(n2),e&&t(D),e&&t(o2),e&&t(ss),e&&t(l2),j(Il,e),e&&t(r2),e&&t(ts),e&&t(p2),e&&t(ie),e&&t(i2),e&&t(pu),e&&t(u2),j(Ul,e),e&&t(c2),e&&t(za),e&&t(h2),e&&t(Da),e&&t(f2),j(Gl,e),e&&t(d2),e&&t(Y),e&&t(m2),e&&t(uu),e&&t(_2),e&&t(Bs),j(Ml),e&&t(v2),e&&t(cu),e&&t(j2),e&&t(Aa),e&&t(w2),j(Ll,e),e&&t(y2),e&&t(Ta),e&&t(g2),e&&t(ue),e&&t(b2),e&&t(hu),e&&t(q2),e&&t(Ws),j(Nl),e&&t(E2),e&&t(fu),e&&t($2),e&&t(Fs),j(Hl),e&&t(k2),e&&t(du),e&&t(P2),j(Bl,e),e&&t(z2),e&&t(os),e&&t(D2),e&&t(ls),e&&t(O2),e&&t(_u),e&&t(A2),j(Wl,e),e&&t(T2),e&&t(xa),e&&t(S2),e&&t(Ra),e&&t(C2),e&&t(Vs),j(Vl),e&&t(x2),e&&t(ju),e&&t(R2),j(Yl,e),e&&t(I2),e&&t(wu),e&&t(U2),e&&t(rs),e&&t(G2),e&&t(yu),e&&t(M2),j(Kl,e),e&&t(L2),j(Ua,e),e&&t(Z2),e&&t(Ys),j(Jl),e&&t(N2),e&&t(gu),e&&t(H2),j(Xl,e),e&&t(B2),e&&t(ce),e&&t(W2),e&&t(Ma),e&&t(F2),e&&t(qu),e&&t(V2),j(Ql,e),e&&t(Y2),e&&t(La),e&&t(K2),e&&t(Za),e&&t(J2),e&&t($u),e&&t(X2),e&&t(Ks),j(sr),e&&t(Q2),e&&t(ku),e&&t(eb),j(tr,e),e&&t(sb),e&&t(Z),e&&t(tb),e&&t(zu),e&&t(ab),j(ar,e),e&&t(nb),e&&t(Ha),e&&t(ob),e&&t(Ou),e&&t(lb),e&&t(Js),j(nr),e&&t(rb),e&&t(Au),e&&t(pb),j(or,e),e&&t(ib),e&&t(ps),e&&t(ub),e&&t(Su),e&&t(cb),j(lr,e),e&&t(hb),e&&t(Wa),e&&t(fb),e&&t(xu),e&&t(db),e&&t(Xs),j(rr),e&&t(mb),e&&t(Ru),e&&t(_b),j(pr,e),e&&t(vb),e&&t(is),e&&t(jb),e&&t(Uu),e&&t(wb),j(ir,e),e&&t(yb),e&&t(Va),e&&t(gb),e&&t(Mu),e&&t(bb),e&&t(Qs),j(ur),e&&t(qb),e&&t(Ka),e&&t(Eb),e&&t(Lu),e&&t($b),e&&t(Ja),e&&t(kb),e&&t(O),e&&t(Pb),j(cr,e),e&&t(zb),e&&t(Zu),e&&t(Db),e&&t(Xa),e&&t(Ob),e&&t(Nu),e&&t(Ab),e&&t(Hu),e&&t(Tb),e&&t(Bu),e&&t(Sb),j(fr,e),e&&t(Cb),e&&t(us),e&&t(xb),j(dr,e),e&&t(Rb),j(Qa,e),e&&t(Ib),e&&t(en),e&&t(Ub),e&&t(sn),e&&t(Gb),j(mr,e),e&&t(Mb),e&&t(Wu),e&&t(Lb),e&&t(cs),e&&t(Zb),e&&t(Fu),e&&t(Nb),j(_r,e),e&&t(Hb),e&&t(tn),e&&t(Bb),j(vr,e),e&&t(Wb),e&&t(an),e&&t(Fb),e&&t(Vu),e&&t(Vb),e&&t(jr),e&&t(Yb),e&&t(hs),e&&t(Kb),e&&t(Yu),e&&t(Jb),e&&t(et),j(wr),e&&t(Xb),e&&t(Ku),e&&t(Qb),e&&t(Ju),e&&t(e3),e&&t(Xu),e&&t(s3),e&&t(st),j(yr),e&&t(t3),e&&t(ln),e&&t(a3),j(gr,e),e&&t(n3),e&&t(Qu),e&&t(o3),e&&t(P),e&&t(l3),j(br,e),e&&t(r3),e&&t(rn),e&&t(p3),e&&t(tc),e&&t(i3),e&&t(pn),e&&t(u3),e&&t(he),e&&t(c3),e&&t(tt),j(Er),e&&t(h3),e&&t($r),e&&t(f3),e&&t(cn),e&&t(d3),e&&t(nc),e&&t(m3),j(Pr,e),e&&t(_3),e&&t(fs),e&&t(v3),e&&t(oc),e&&t(j3),e&&t(at),j(zr),e&&t(w3),e&&t(lc),e&&t(y3),e&&t(fn),e&&t(g3),j(Dr,e),e&&t(b3),e&&t(pc),e&&t(q3),e&&t(dn),e&&t(E3),j(Or,e),e&&t($3),e&&t(ic),e&&t(k3),e&&t(uc),e&&t(P3),e&&t(nt),j(Ar),e&&t(z3),e&&t(cc),e&&t(D3),e&&t(hc),e&&t(O3),j(Tr,e),e&&t(A3),e&&t(fc),e&&t(T3),e&&t(dc),e&&t(S3),e&&t(mc),e&&t(C3),e&&t(_c),e&&t(x3),j(Sr,e),e&&t(R3),e&&t(vc),e&&t(I3),e&&t(_n),e&&t(U3),e&&t(ot),j(xr),e&&t(G3),e&&t(jc),e&&t(M3),e&&t(wc),e&&t(L3),e&&t(N),j(Ir),e&&t(Z3),e&&t(qc),e&&t(N3),e&&t(jn),e&&t(H3),e&&t(rt),j(Hr),e&&t(B3),e&&t(pt),j(Br),e&&t(W3),e&&t(H),e&&t(F3),e&&t(it),j(Vr),e&&t(V3),e&&t($c),e&&t(Y3),e&&t(kc),e&&t(K3),j(Yr,e),e&&t(J3),e&&t(bn),e&&t(X3),j(Kr,e),e&&t(Q3),e&&t(Pc),e&&t(e0),e&&t(zc),e&&t(s0),e&&t(ds),e&&t(t0),e&&t(ut),j(Jr),e&&t(a0),e&&t(ms),e&&t(n0),e&&t(Ac),e&&t(o0),e&&t(ft),j(sp),e&&t(l0),e&&t(fe),e&&t(r0),e&&t($n),e&&t(p0),e&&t(_s),e&&t(i0),e&&t(kn),e&&t(u0),e&&t(Ic),e&&t(c0),j(tp,e),e&&t(h0),e&&t(Uc),e&&t(f0),j(ap,e),e&&t(d0),e&&t(de),e&&t(m0),e&&t(dt),j(op),e&&t(_0),e&&t(ee),j(lp),e&&t(v0),e&&t(mt),j(rp),e&&t(j0),e&&t(Dn),e&&t(w0),e&&t(Nc),e&&t(y0),e&&t(Hc),e&&t(g0),e&&t(Bc),e&&t(b0),e&&t(On),e&&t(q0),j(pp,e),e&&t(E0),e&&t(An),e&&t($0),j(ip,e),e&&t(k0),e&&t(Wc),e&&t(P0),e&&t(_t),j(up),e&&t(z0),e&&t(_e),e&&t(D0),e&&t(Fc),e&&t(O0),e&&t(vs),e&&t(A0),e&&t(js)}}}const UY={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function GY(jt){return TY(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class BY extends zY{constructor(g){super();DY(this,g,GY,IY,OY,{})}}export{BY as default,UY as metadata};
