import{S as OK,i as TK,s as AK,e as o,k as u,w as f,t as a,M as SK,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-4833417e.js";import{T as vG}from"../../chunks/Tip-fffd6df1.js";import{D as Zj}from"../../chunks/Docstring-4f315ed9.js";import{C as g}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as w}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function CK(Es){let y,z;return{c(){y=o("p"),z=a("This section is a must-read")},l(b){y=l(b,"P",{});var q=r(y);z=n(q,"This section is a must-read"),q.forEach(t)},m(b,q){i(b,y,q),s(y,z)},d(b){b&&t(y)}}}function xK(Es){let y,z,b,q,ee,O,x,se,R,ae,C;return{c(){y=o("p"),z=a("As of "),b=o("code"),q=a("deepspeed==0.6.0"),ee=a(" the bf16 support is new and experimental."),O=u(),x=o("p"),se=a("If you use "),R=o("a"),ae=a("gradient accumulation"),C=a(" with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),this.h()},l(E){y=l(E,"P",{});var $=r(y);z=n($,"As of "),b=l($,"CODE",{});var qs=r(b);q=n(qs,"deepspeed==0.6.0"),qs.forEach(t),ee=n($," the bf16 support is new and experimental."),$.forEach(t),O=c(E),x=l(E,"P",{});var V=r(x);se=n(V,"If you use "),R=l(V,"A",{href:!0});var $s=r(R);ae=n($s,"gradient accumulation"),$s.forEach(t),C=n(V," with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),V.forEach(t),this.h()},h(){h(R,"href","#gradient-accumulation")},m(E,$){i(E,y,$),s(y,z),s(y,b),s(b,q),s(y,ee),i(E,O,$),i(E,x,$),s(x,se),s(x,R),s(R,ae),s(x,C)},d(E){E&&t(y),E&&t(O),E&&t(x)}}}function RK(Es){let y,z,b,q,ee,O,x,se,R,ae,C;return{c(){y=o("p"),z=a("Note, that once "),b=o("code"),q=a("load_state_dict_from_zero_checkpoint"),ee=a(" was run, the "),O=o("code"),x=a("model"),se=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=o("code"),ae=a("model.load_state_dict(state_dict)"),C=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(E){y=l(E,"P",{});var $=r(y);z=n($,"Note, that once "),b=l($,"CODE",{});var qs=r(b);q=n(qs,"load_state_dict_from_zero_checkpoint"),qs.forEach(t),ee=n($," was run, the "),O=l($,"CODE",{});var V=r(O);x=n(V,"model"),V.forEach(t),se=n($,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=l($,"CODE",{});var $s=r(R);ae=n($s,"model.load_state_dict(state_dict)"),$s.forEach(t),C=n($,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),$.forEach(t)},m(E,$){i(E,y,$),s(y,z),s(y,b),s(b,q),s(y,ee),s(y,O),s(O,x),s(y,se),s(y,R),s(R,ae),s(y,C)},d(E){E&&t(y)}}}function IK(Es){let y,z,b,q,ee,O,x,se,R,ae,C,E,$,qs,V,$s,R$,Nj,I,ef,I$,U$,sf,G$,L$,tf,M$,Z$,af,N$,H$,nf,B$,W$,of,F$,Hj,Se,V$,to,Y$,K$,ao,J$,X$,Bj,Ip,Q$,Wj,Up,e6,Fj,Et,s6,no,t6,a6,Vj,qt,oo,n6,Gp,o6,l6,r6,Y,p6,Lp,i6,u6,lf,c6,h6,rf,f6,d6,pf,m6,_6,Mp,v6,j6,Yj,Zp,g6,Kj,Np,w6,Jj,Hp,uf,y6,Xj,Bp,b6,Qj,Wp,lo,E6,Fp,q6,$6,eg,Vp,k6,sg,Yp,tg,ks,$t,cf,ro,P6,hf,D6,ag,Kp,ng,Ps,kt,ff,po,z6,df,O6,og,Jp,T6,lg,io,rg,Ce,A6,mf,S6,C6,_f,x6,R6,pg,uo,ig,xe,I6,co,U6,G6,ho,L6,M6,ug,Pt,Z6,Xp,N6,H6,cg,Qp,B6,hg,ei,W6,fg,fo,dg,Re,F6,vf,V6,Y6,jf,K6,J6,mg,Dt,X6,gf,Q6,e4,_g,mo,vg,Pe,s4,wf,t4,a4,yf,n4,o4,bf,l4,jg,si,r4,gg,_o,wg,Ie,p4,Ef,i4,u4,qf,c4,h4,yg,zt,f4,$f,d4,m4,bg,Ue,_4,kf,v4,j4,vo,g4,w4,Eg,ti,y4,qg,jo,$g,ai,b4,kg,go,Pg,ni,E4,Dg,wo,zg,Ot,q4,Pf,$4,k4,Og,Tt,P4,Df,D4,z4,Tg,At,O4,yo,T4,A4,Ag,oi,Sg,Ds,St,zf,bo,S4,Of,C4,Cg,Ct,x4,li,R4,I4,xg,xt,zs,U4,Tf,G4,L4,Af,M4,Z4,N4,De,H4,Sf,B4,W4,Cf,F4,V4,Eo,Y4,K4,Rg,ri,J4,Ig,qo,Ug,pi,X4,Gg,$o,Lg,U,Q4,xf,e5,s5,Rf,t5,a5,If,n5,o5,Uf,l5,r5,ko,p5,i5,Mg,ne,u5,Gf,c5,h5,Lf,f5,d5,Mf,m5,_5,Zg,Rt,v5,Zf,j5,g5,Ng,Po,Hg,It,w5,Nf,y5,b5,Bg,Ut,E5,Do,q5,$5,Wg,ii,Fg,Os,Gt,Hf,zo,k5,Bf,P5,Vg,Lt,D5,ui,z5,O5,Yg,Oo,Kg,Ge,T5,Wf,A5,S5,To,C5,x5,Jg,ci,R5,Xg,Mt,Ff,I5,U5,Vf,G5,Qg,hi,L5,ew,Ao,sw,fi,M5,tw,Zt,Z5,So,N5,H5,aw,di,B5,nw,mi,W5,ow,_i,Ts,Co,F5,Yf,V5,Y5,K5,xo,J5,Kf,X5,lw,vi,rw,As,Nt,Jf,Ro,Q5,Xf,e8,pw,Ht,s8,Qf,t8,a8,iw,ji,n8,uw,Io,cw,Bt,o8,ed,l8,r8,hw,gi,p8,fw,wi,i8,dw,Uo,mw,Le,u8,sd,c8,h8,td,f8,d8,_w,Go,vw,Wt,m8,ad,_8,v8,jw,Lo,gw,yi,j8,ww,Ft,g8,nd,w8,y8,yw,bi,bw,Ss,Vt,od,Mo,b8,ld,E8,Ew,Yt,q8,Zo,$8,k8,qw,Kt,P8,No,D8,z8,$w,Ho,kw,Jt,O8,rd,T8,A8,Pw,Bo,Dw,Xt,S8,Wo,C8,x8,zw,Ei,R8,Ow,oe,I8,pd,U8,G8,id,L8,M8,ud,Z8,N8,Tw,Fo,Aw,Qt,H8,qi,B8,W8,Sw,$i,Cw,Cs,ea,cd,Vo,F8,hd,V8,xw,G,Y8,ki,K8,J8,Pi,X8,Q8,fd,ek,sk,dd,tk,ak,Di,nk,ok,Rw,zi,lk,Iw,Yo,Uw,Oi,rk,Gw,Ko,Lw,Ti,Mw,xs,sa,md,Jo,pk,_d,ik,Zw,ta,Nw,Me,uk,Ai,ck,hk,Si,fk,dk,Hw,aa,mk,Ci,_k,vk,Bw,Ze,jk,vd,gk,wk,xi,yk,bk,Ww,Ri,Ek,Fw,na,qk,Ii,$k,kk,Vw,oa,jd,Pk,Dk,Xo,zk,Ui,Ok,Tk,Yw,le,Ak,gd,Sk,Ck,Gi,xk,Rk,wd,Ik,Uk,Kw,Li,Jw,Rs,la,yd,Qo,Gk,bd,Lk,Xw,el,sl,Mk,Zk,Qw,Ne,Nk,Ed,Hk,Bk,tl,Wk,Fk,ey,ra,Vk,Mi,Yk,Kk,sy,Zi,Jk,ty,Ni,ay,Is,pa,qd,al,Xk,$d,Qk,ny,Hi,e7,oy,nl,ly,Bi,kd,s7,ry,He,Us,t7,Pd,a7,n7,Dd,o7,l7,r7,L,zd,p7,i7,Od,u7,c7,Td,h7,f7,Ad,d7,m7,Sd,_7,v7,Cd,j7,g7,w7,xd,y7,py,Be,b7,Rd,E7,q7,Id,$7,k7,iy,ol,uy,Wi,P7,cy,Fi,hy,Gs,ia,Ud,ll,D7,Gd,z7,fy,Vi,O7,dy,rl,my,K,T7,Ld,A7,S7,Md,C7,x7,Zd,R7,I7,Nd,U7,G7,_y,We,L7,Hd,M7,Z7,Bd,N7,H7,vy,Yi,Wd,B7,jy,ua,pl,Fd,W7,F7,Vd,V7,Y7,il,Yd,K7,J7,Kd,X7,gy,M,Q7,Jd,e9,s9,Xd,t9,a9,Qd,n9,o9,em,l9,r9,sm,p9,i9,wy,ze,tm,u9,c9,am,h9,f9,nm,d9,m9,yy,Ki,_9,by,Fe,ul,om,v9,j9,lm,g9,w9,cl,rm,y9,b9,pm,E9,q9,hl,im,$9,k9,um,P9,Ey,Ve,D9,cm,z9,O9,Ji,T9,A9,qy,fl,hm,S9,C9,$y,re,x9,fm,R9,I9,dm,U9,G9,mm,L9,M9,ky,Xi,dl,_m,Z9,N9,vm,H9,Py,Oe,jm,B9,W9,gm,F9,V9,wm,Y9,K9,Dy,Ye,J9,ym,X9,Q9,bm,eP,sP,zy,ca,ml,tP,Em,aP,nP,oP,_l,lP,qm,rP,pP,Oy,Qi,Ty,Ls,ha,$m,vl,iP,km,uP,Ay,eu,cP,Sy,su,hP,Cy,jl,xy,fa,fP,Pm,dP,mP,Ry,Ke,_P,gl,vP,jP,wl,gP,wP,Iy,da,yP,Dm,bP,EP,Uy,Je,qP,zm,$P,kP,yl,PP,DP,Gy,tu,Ly,Ms,ma,Om,bl,zP,Tm,OP,My,au,TP,Zy,nu,AP,Ny,_a,Zs,SP,Am,CP,xP,Sm,RP,IP,UP,El,GP,Cm,LP,MP,Hy,Xe,ZP,xm,NP,HP,Rm,BP,WP,By,ou,Wy,Ns,va,Im,ql,FP,Um,VP,Fy,ja,YP,Gm,KP,JP,Vy,$l,Yy,ga,XP,Lm,QP,eD,Ky,kl,Jy,lu,Xy,Hs,wa,Mm,Pl,sD,Zm,tD,Qy,ya,aD,Nm,nD,oD,e2,Dl,s2,ba,lD,Hm,rD,pD,t2,zl,a2,Bs,Ea,Bm,Ol,iD,Wm,uD,n2,qa,cD,Fm,hD,fD,o2,ru,dD,l2,$a,mD,Vm,_D,vD,r2,pu,p2,Ws,ka,Ym,Tl,jD,Km,gD,i2,Qe,wD,Jm,yD,bD,Al,ED,qD,u2,k,$D,Xm,kD,PD,iu,DD,zD,Qm,OD,TD,e_,AD,SD,s_,CD,xD,t_,RD,ID,a_,UD,GD,n_,LD,MD,c2,es,ZD,o_,ND,HD,l_,BD,WD,h2,Sl,f2,uu,FD,d2,pe,Cl,r_,VD,YD,p_,KD,JD,xl,i_,XD,QD,u_,ez,sz,Rl,c_,tz,az,h_,nz,oz,Il,f_,lz,rz,d_,pz,m2,cu,iz,_2,hu,uz,v2,Ul,j2,Pa,cz,fu,hz,fz,g2,du,dz,w2,Gl,y2,ie,mz,m_,_z,vz,__,jz,gz,v_,wz,yz,b2,mu,E2,Fs,Da,j_,Ll,bz,g_,Ez,q2,Z,qz,w_,$z,kz,y_,Pz,Dz,b_,zz,Oz,E_,Tz,Az,Ml,Sz,Cz,$2,_u,xz,k2,za,Zl,q_,Rz,Iz,$_,Uz,Gz,ss,k_,Lz,Mz,P_,Zz,Nz,D_,Hz,Bz,P2,T,Wz,z_,Fz,Vz,vu,Yz,Kz,O_,Jz,Xz,T_,Qz,eO,A_,sO,tO,S_,aO,nO,D2,ts,oO,C_,lO,rO,x_,pO,iO,z2,Nl,O2,as,uO,R_,cO,hO,ju,fO,dO,T2,ue,Oa,I_,mO,_O,U_,vO,jO,gO,Ta,G_,wO,yO,L_,bO,EO,qO,ns,M_,$O,kO,Z_,PO,DO,N_,zO,OO,TO,os,H_,AO,SO,B_,CO,xO,W_,RO,IO,A2,gu,UO,S2,Hl,C2,Aa,GO,wu,LO,MO,x2,Sa,ZO,F_,NO,HO,R2,Bl,I2,J,BO,V_,WO,FO,Y_,VO,YO,K_,KO,JO,J_,XO,QO,U2,yu,G2,Vs,Ca,X_,Wl,eT,Q_,sT,L2,bu,tT,M2,xa,aT,e1,nT,oT,Z2,Fl,N2,Ra,lT,Vl,rT,pT,H2,ce,iT,s1,uT,cT,t1,hT,fT,a1,dT,mT,B2,Eu,W2,Ys,Ia,n1,Yl,_T,o1,vT,F2,qu,jT,V2,Ks,Ua,l1,Kl,gT,r1,wT,Y2,$u,yT,K2,Jl,J2,ls,bT,ku,ET,qT,p1,$T,kT,X2,rs,PT,i1,DT,zT,u1,OT,TT,Q2,Pu,AT,eb,Xl,sb,Ga,ST,Du,CT,xT,tb,La,RT,Ql,IT,UT,ab,Js,Ma,c1,er,GT,h1,LT,nb,zu,MT,ob,sr,lb,Ou,ZT,rb,ps,NT,f1,HT,BT,d1,WT,FT,pb,Tu,VT,ib,tr,ub,Za,cb,Xs,Na,m1,ar,YT,_1,KT,hb,Au,JT,fb,nr,db,he,XT,Su,QT,eA,v1,sA,tA,j1,aA,nA,mb,Ha,oA,g1,lA,rA,_b,Cu,pA,vb,or,jb,Ba,iA,xu,uA,cA,gb,Wa,hA,lr,fA,dA,wb,Ru,yb,Qs,Fa,w1,rr,mA,y1,_A,bb,Iu,vA,Eb,pr,qb,N,jA,Uu,gA,wA,b1,yA,bA,E1,EA,qA,q1,$A,kA,$1,PA,DA,$b,Gu,zA,kb,ir,Pb,Va,OA,Lu,TA,AA,Db,Mu,zb,et,Ya,k1,ur,SA,P1,CA,Ob,Zu,xA,Tb,cr,Ab,is,RA,Nu,IA,UA,D1,GA,LA,Sb,Hu,MA,Cb,hr,xb,Ka,ZA,Bu,NA,HA,Rb,Wu,Ib,st,Ja,z1,fr,BA,O1,WA,Ub,Fu,FA,Gb,dr,Lb,us,VA,Vu,YA,KA,T1,JA,XA,Mb,Yu,QA,Zb,mr,Nb,Xa,eS,Ku,sS,tS,Hb,Ju,Bb,tt,Qa,A1,_r,aS,S1,nS,Wb,en,oS,C1,lS,rS,Fb,Xu,x1,pS,Vb,sn,iS,R1,uS,cS,Yb,A,hS,I1,fS,dS,U1,mS,_S,G1,vS,jS,L1,gS,wS,M1,yS,bS,Z1,ES,qS,Kb,vr,Jb,Qu,N1,$S,Xb,tn,kS,jr,PS,DS,Qb,ec,H1,zS,e3,sc,OS,s3,tc,TS,t3,gr,a3,cs,AS,B1,SS,CS,W1,xS,RS,n3,wr,o3,an,l3,nn,IS,F1,US,GS,r3,on,LS,V1,MS,ZS,p3,yr,i3,ac,Y1,NS,u3,hs,HS,K1,BS,WS,J1,FS,VS,c3,nc,YS,h3,br,f3,ln,KS,X1,JS,XS,d3,Er,m3,rn,QS,Q1,eC,sC,_3,oc,tC,v3,qr,ev,aC,nC,j3,fs,oC,sv,lC,rC,tv,pC,iC,g3,lc,uC,w3,at,pn,av,$r,cC,nv,hC,y3,rc,fC,b3,pc,dC,E3,ic,mC,q3,nt,un,ov,kr,_C,lv,vC,$3,cn,jC,rv,gC,wC,k3,Pr,P3,uc,yC,D3,D,bC,pv,EC,qC,iv,$C,kC,uv,PC,DC,cc,zC,OC,hc,TC,AC,cv,SC,CC,hv,xC,RC,z3,Dr,O3,hn,IC,fv,UC,GC,T3,fc,LC,A3,fn,MC,zr,ZC,NC,S3,fe,HC,dv,BC,WC,mv,FC,VC,dc,YC,KC,C3,ot,dn,_v,Or,JC,vv,XC,x3,Tr,QC,Ar,ex,R3,mn,sx,jv,tx,ax,I3,mc,nx,U3,Sr,G3,ds,ox,gv,lx,rx,wv,px,ix,L3,_c,M3,lt,_n,yv,Cr,ux,bv,cx,Z3,vc,hx,N3,vn,fx,jc,dx,mx,H3,xr,B3,gc,_x,W3,jn,vx,Ev,jx,gx,F3,Rr,V3,wc,wx,Y3,yc,yx,K3,rt,gn,qv,Ir,bx,$v,Ex,J3,bc,qx,X3,Ec,$x,Q3,Ur,e0,qc,kx,s0,$c,Px,t0,kc,Dx,a0,Pc,zx,n0,Gr,o0,Dc,Ox,l0,wn,Tx,Lr,Ax,Sx,r0,pt,yn,kv,Mr,Cx,Pv,xx,p0,zc,Rx,i0,Oc,Ix,u0,H,Dv,zv,Ux,Gx,Ov,Te,Lx,Tc,Mx,Zx,Ac,Nx,Hx,Sc,Bx,Wx,Fx,Zr,Tv,Vx,Yx,Nr,Kx,Av,Hr,Jx,Br,Xx,Qx,eR,Sv,Cv,sR,tR,xv,Wr,aR,Fr,nR,oR,c0,Cc,lR,h0,bn,it,Rv,rR,pR,Iv,iR,uR,Uv,cR,hR,Gv,Vr,fR,Yr,dR,mR,f0,ut,En,Lv,Kr,_R,Mv,vR,d0,ct,qn,Zv,Jr,jR,Xr,gR,Nv,wR,yR,m0,B,bR,Hv,ER,qR,Bv,$R,kR,Wv,PR,DR,Fv,zR,OR,Qr,TR,AR,_0,ht,$n,Vv,ep,SR,xc,CR,Yv,xR,v0,Rc,RR,j0,Ic,IR,g0,sp,w0,kn,UR,Kv,GR,LR,y0,tp,b0,Uc,MR,E0,Gc,ZR,q0,ms,NR,Jv,HR,BR,Xv,WR,FR,$0,ft,Pn,Qv,ap,VR,ej,YR,k0,_s,Dn,KR,Lc,JR,XR,sj,QR,eI,np,sI,op,tI,aI,nI,dt,oI,Mc,lI,rI,lp,pI,iI,P0,Zc,D0,mt,zn,tj,rp,uI,aj,cI,z0,de,hI,Nc,fI,dI,Hc,mI,_I,nj,vI,jI,O0,On,gI,Bc,wI,yI,T0,vs,bI,Wc,EI,qI,Fc,$I,kI,A0,Vc,PI,S0,pp,C0,Yc,DI,x0,ip,R0,me,zI,Kc,OI,TI,up,AI,SI,oj,CI,xI,I0,_t,Tn,lj,cp,RI,rj,II,U0,P,hp,UI,pj,GI,LI,Ae,MI,ij,ZI,NI,uj,HI,BI,cj,WI,FI,VI,_e,Jc,YI,KI,hj,JI,XI,Xc,QI,eU,fj,sU,tU,aU,js,fp,nU,dj,oU,lU,vt,rU,mj,pU,iU,_j,uU,cU,hU,An,dp,fU,mp,dU,vj,mU,_U,vU,Sn,_p,jU,jt,gU,jj,wU,yU,gj,bU,EU,qU,Cn,vp,$U,gt,kU,wj,PU,DU,yj,zU,OU,G0,wt,xn,bj,jp,TU,Ej,AU,L0,Rn,SU,Qc,CU,xU,M0,eh,RU,Z0,sh,IU,N0,th,UU,H0,In,qj,GU,LU,$j,MU,B0,gp,W0,Un,ZU,kj,NU,HU,F0,wp,V0,ah,BU,Y0,yt,Gn,Pj,yp,WU,Dj,FU,K0,ve,zj,bp,VU,YU,Oj,Ep,KU,JU,Tj,qp,XU,QU,Aj,$p,eG,J0,nh,sG,X0,gs,Sj,kp,tG,aG,Cj,Pp,nG,oG,xj,Dp,lG,Q0,ws,rG,oh,pG,iG,zp,uG,cG,eE;return O=new w({}),ro=new w({}),po=new w({}),io=new g({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),uo=new g({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),fo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),mo=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),_o=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),jo=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),go=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),wo=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),bo=new w({}),qo=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),$o=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Po=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),zo=new w({}),Oo=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),Ao=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),xo=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),Ro=new w({}),Io=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
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
trainer.train()`}}),Uo=new g({props:{code:`%%bash
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
EOT`}}),Go=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),Lo=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),Mo=new w({}),Ho=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),Bo=new g({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),Fo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Vo=new w({}),Yo=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Ko=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Jo=new w({}),ta=new vG({props:{warning:"&lcub;true}",$$slots:{default:[CK]},$$scope:{ctx:Es}}}),Qo=new w({}),al=new w({}),nl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ol=new g({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ll=new w({}),rl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),vl=new w({}),jl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),bl=new w({}),ql=new w({}),$l=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),kl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Pl=new w({}),Dl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),zl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ol=new w({}),Tl=new w({}),Sl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ul=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Gl=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),Ll=new w({}),Nl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Hl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Bl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Wl=new w({}),Fl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Yl=new w({}),Kl=new w({}),Jl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Xl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),er=new w({}),sr=new g({props:{code:`{
    "bf16": {
        "enabled": "auto"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),tr=new g({props:{code:`{
    "bf16": {
        "enabled": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Za=new vG({props:{$$slots:{default:[xK]},$$scope:{ctx:Es}}}),ar=new w({}),nr=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),or=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),rr=new w({}),pr=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ir=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),ur=new w({}),cr=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),hr=new g({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),fr=new w({}),dr=new g({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),mr=new g({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),_r=new w({}),vr=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),gr=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),wr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),an=new vG({props:{$$slots:{default:[RK]},$$scope:{ctx:Es}}}),yr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),br=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),Er=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),$r=new w({}),kr=new w({}),Pr=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),Dr=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Or=new w({}),Sr=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),Cr=new w({}),xr=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),Rr=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),Ir=new w({}),Ur=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),Gr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
`}}),Mr=new w({}),Nr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Kr=new w({}),Jr=new w({}),ep=new w({}),sp=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),tp=new g({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
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
[...]`}}),ap=new w({}),rp=new w({}),pp=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),ip=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),cp=new w({}),hp=new Zj({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),fp=new Zj({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L114"}}),dp=new Zj({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L105"}}),_p=new Zj({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L146"}}),vp=new Zj({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L137"}}),jp=new w({}),gp=new g({props:{code:`#!/usr/bin/env python

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
# https://huggingface.co/docs/transformers/master/main_classes/deepspeed

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
<span class="hljs-comment"># https://huggingface.co/docs/transformers/master/main_classes/deepspeed</span>

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),wp=new g({props:{code:`$ deepspeed --num_gpus 2 t0.py
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
  <span class="hljs-keyword">out</span>=negative`}}),yp=new w({}),{c(){y=o("meta"),z=u(),b=o("h1"),q=o("a"),ee=o("span"),f(O.$$.fragment),x=u(),se=o("span"),R=a("DeepSpeed Integration"),ae=u(),C=o("p"),E=o("a"),$=a("DeepSpeed"),qs=a(" implements everything described in the "),V=o("a"),$s=a("ZeRO paper"),R$=a(". Currently it provides full support for:"),Nj=u(),I=o("ol"),ef=o("li"),I$=a("Optimizer state partitioning (ZeRO stage 1)"),U$=u(),sf=o("li"),G$=a("Gradient partitioning (ZeRO stage 2)"),L$=u(),tf=o("li"),M$=a("Parameter partitioning (ZeRO stage 3)"),Z$=u(),af=o("li"),N$=a("Custom mixed precision training handling"),H$=u(),nf=o("li"),B$=a("A range of fast CUDA-extension-based optimizers"),W$=u(),of=o("li"),F$=a("ZeRO-Offload to CPU and NVMe"),Hj=u(),Se=o("p"),V$=a("ZeRO-Offload has its own dedicated paper: "),to=o("a"),Y$=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),K$=a(". And NVMe-support is described in the paper "),ao=o("a"),J$=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),X$=a("."),Bj=u(),Ip=o("p"),Q$=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Wj=u(),Up=o("p"),e6=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Fj=u(),Et=o("p"),s6=a("\u{1F917} Transformers integrates "),no=o("a"),t6=a("DeepSpeed"),a6=a(" via 2 options:"),Vj=u(),qt=o("ol"),oo=o("li"),n6=a("Integration of the core DeepSpeed features via "),Gp=o("a"),o6=a("Trainer"),l6=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),r6=u(),Y=o("li"),p6=a("If you don\u2019t use "),Lp=o("a"),i6=a("Trainer"),u6=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),lf=o("code"),c6=a("from_pretrained"),h6=a(" and "),rf=o("code"),f6=a("from_config"),d6=a(` include integration of essential
parts of DeepSpeed like `),pf=o("code"),m6=a("zero.Init"),_6=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Mp=o("a"),v6=a("deepspeed-non-trainer-integration"),j6=a("."),Yj=u(),Zp=o("p"),g6=a("What is integrated:"),Kj=u(),Np=o("p"),w6=a("Training:"),Jj=u(),Hp=o("ol"),uf=o("li"),y6=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Xj=u(),Bp=o("p"),b6=a("Inference:"),Qj=u(),Wp=o("ol"),lo=o("li"),E6=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Fp=o("a"),q6=a("deepspeed-zero-inference"),$6=a("."),eg=u(),Vp=o("p"),k6=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),sg=u(),Yp=o("a"),tg=u(),ks=o("h2"),$t=o("a"),cf=o("span"),f(ro.$$.fragment),P6=u(),hf=o("span"),D6=a("Trainer Deepspeed Integration"),ag=u(),Kp=o("a"),ng=u(),Ps=o("h3"),kt=o("a"),ff=o("span"),f(po.$$.fragment),z6=u(),df=o("span"),O6=a("Installation"),og=u(),Jp=o("p"),T6=a("Install the library via pypi:"),lg=u(),f(io.$$.fragment),rg=u(),Ce=o("p"),A6=a("or via "),mf=o("code"),S6=a("transformers"),C6=a("\u2019 "),_f=o("code"),x6=a("extras"),R6=a(":"),pg=u(),f(uo.$$.fragment),ig=u(),xe=o("p"),I6=a("or find more details on "),co=o("a"),U6=a("the DeepSpeed\u2019s GitHub page"),G6=a(` and
`),ho=o("a"),L6=a("advanced install"),M6=a("."),ug=u(),Pt=o("p"),Z6=a("If you\u2019re still struggling with the build, first make sure to read "),Xp=o("a"),N6=a("zero-install-notes"),H6=a("."),cg=u(),Qp=o("p"),B6=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),hg=u(),ei=o("p"),W6=a("To make a local build for DeepSpeed:"),fg=u(),f(fo.$$.fragment),dg=u(),Re=o("p"),F6=a("If you intend to use NVMe offload you will also need to include "),vf=o("code"),V6=a("DS_BUILD_AIO=1"),Y6=a(` in the instructions above (and also
install `),jf=o("em"),K6=a("libaio-dev"),J6=a(" system-wide)."),mg=u(),Dt=o("p"),X6=a("Edit "),gf=o("code"),Q6=a("TORCH_CUDA_ARCH_LIST"),e4=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),_g=u(),f(mo.$$.fragment),vg=u(),Pe=o("p"),s4=a("So if you get "),wf=o("code"),t4=a("8, 6"),a4=a(", then use "),yf=o("code"),n4=a('TORCH_CUDA_ARCH_LIST="8.6"'),o4=a(`. If you have multiple different cards, you can list all
of them like so `),bf=o("code"),l4=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),jg=u(),si=o("p"),r4=a("If you need to use the same setup on multiple machines, make a binary wheel:"),gg=u(),f(_o.$$.fragment),wg=u(),Ie=o("p"),p4=a("it will generate something like "),Ef=o("code"),i4=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),u4=a(` which now you can install
as `),qf=o("code"),c4=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),h4=a(" locally or on any other machine."),yg=u(),zt=o("p"),f4=a("Again, remember to ensure to adjust "),$f=o("code"),d4=a("TORCH_CUDA_ARCH_LIST"),m4=a(" to the target architectures."),bg=u(),Ue=o("p"),_4=a("You can find the complete list of NVIDIA GPUs and their corresponding "),kf=o("strong"),v4=a("Compute Capabilities"),j4=a(` (same as arch in this
context) `),vo=o("a"),g4=a("here"),w4=a("."),Eg=u(),ti=o("p"),y4=a("You can check the archs pytorch was built with using:"),qg=u(),f(jo.$$.fragment),$g=u(),ai=o("p"),b4=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),kg=u(),f(go.$$.fragment),Pg=u(),ni=o("p"),E4=a("If the output is:"),Dg=u(),f(wo.$$.fragment),zg=u(),Ot=o("p"),q4=a("then you know that this card\u2019s arch is "),Pf=o("code"),$4=a("8.6"),k4=a("."),Og=u(),Tt=o("p"),P4=a("You can also leave "),Df=o("code"),D4=a("TORCH_CUDA_ARCH_LIST"),z4=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Tg=u(),At=o("p"),O4=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),yo=o("a"),T4=a("Deepspeed"),A4=a(","),Ag=u(),oi=o("a"),Sg=u(),Ds=o("h3"),St=o("a"),zf=o("span"),f(bo.$$.fragment),S4=u(),Of=o("span"),C4=a("Deployment with multiple GPUs"),Cg=u(),Ct=o("p"),x4=a("To deploy this feature with multiple GPUs adjust the "),li=o("a"),R4=a("Trainer"),I4=a(` command line arguments as
following:`),xg=u(),xt=o("ol"),zs=o("li"),U4=a("replace "),Tf=o("code"),G4=a("python -m torch.distributed.launch"),L4=a(" with "),Af=o("code"),M4=a("deepspeed"),Z4=a("."),N4=u(),De=o("li"),H4=a("add a new argument "),Sf=o("code"),B4=a("--deepspeed ds_config.json"),W4=a(", where "),Cf=o("code"),F4=a("ds_config.json"),V4=a(` is the DeepSpeed configuration file as
documented `),Eo=o("a"),Y4=a("here"),K4=a(". The file naming is up to you."),Rg=u(),ri=o("p"),J4=a("Therefore, if your original command line looked as follows:"),Ig=u(),f(qo.$$.fragment),Ug=u(),pi=o("p"),X4=a("Now it should be:"),Gg=u(),f($o.$$.fragment),Lg=u(),U=o("p"),Q4=a("Unlike, "),xf=o("code"),e5=a("torch.distributed.launch"),s5=a(" where you have to specify how many GPUs to use with "),Rf=o("code"),t5=a("--nproc_per_node"),a5=a(`, with the
`),If=o("code"),n5=a("deepspeed"),o5=a(" launcher you don\u2019t have to use the corresponding "),Uf=o("code"),l5=a("--num_gpus"),r5=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),ko=o("a"),p5=a("here"),i5=a("."),Mg=u(),ne=o("p"),u5=a("In fact, you can continue using "),Gf=o("code"),c5=a("-m torch.distributed.launch"),h5=a(` with DeepSpeed as long as you don\u2019t need to use
`),Lf=o("code"),f5=a("deepspeed"),d5=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Mf=o("code"),m5=a("deepspeed"),_5=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Zg=u(),Rt=o("p"),v5=a("Here is an example of running "),Zf=o("code"),j5=a("run_translation.py"),g5=a(" under DeepSpeed deploying all available GPUs:"),Ng=u(),f(Po.$$.fragment),Hg=u(),It=o("p"),w5=a("Note that in the DeepSpeed documentation you are likely to see "),Nf=o("code"),y5=a("--deepspeed --deepspeed_config ds_config.json"),b5=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Bg=u(),Ut=o("p"),E5=a("For some practical usage examples, please, see this "),Do=o("a"),q5=a("post"),$5=a("."),Wg=u(),ii=o("a"),Fg=u(),Os=o("h3"),Gt=o("a"),Hf=o("span"),f(zo.$$.fragment),k5=u(),Bf=o("span"),P5=a("Deployment with one GPU"),Vg=u(),Lt=o("p"),D5=a("To deploy DeepSpeed with one GPU adjust the "),ui=o("a"),z5=a("Trainer"),O5=a(" command line arguments as follows:"),Yg=u(),f(Oo.$$.fragment),Kg=u(),Ge=o("p"),T5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Wf=o("code"),A5=a("--num_gpus=1"),S5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),To=o("a"),C5=a("documentation"),x5=a(" discusses the launcher options."),Jg=u(),ci=o("p"),R5=a("Why would you want to use DeepSpeed with just one GPU?"),Xg=u(),Mt=o("ol"),Ff=o("li"),I5=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),U5=u(),Vf=o("li"),G5=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),Qg=u(),hi=o("p"),L5=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),ew=u(),f(Ao.$$.fragment),sw=u(),fi=o("p"),M5=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),tw=u(),Zt=o("p"),Z5=a("For a practical usage example of this type of deployment, please, see this "),So=o("a"),N5=a("post"),H5=a("."),aw=u(),di=o("p"),B5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),nw=u(),mi=o("p"),W5=a("Notes:"),ow=u(),_i=o("ul"),Ts=o("li"),Co=o("p"),F5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Yf=o("code"),V5=a("CUDA_VISIBLE_DEVICES"),Y5=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),K5=u(),f(xo.$$.fragment),J5=u(),Kf=o("p"),X5=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),lw=u(),vi=o("a"),rw=u(),As=o("h3"),Nt=o("a"),Jf=o("span"),f(Ro.$$.fragment),Q5=u(),Xf=o("span"),e8=a("Deployment in Notebooks"),pw=u(),Ht=o("p"),s8=a("The problem with running notebook cells as a script is that there is no normal "),Qf=o("code"),t8=a("deepspeed"),a8=a(` launcher to rely on, so
under certain setups we have to emulate it.`),iw=u(),ji=o("p"),n8=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),uw=u(),f(Io.$$.fragment),cw=u(),Bt=o("p"),o8=a("Note: "),ed=o("code"),l8=a("..."),r8=a(" stands for the normal arguments that you\u2019d pass to the functions."),hw=u(),gi=o("p"),p8=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),fw=u(),wi=o("p"),i8=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),dw=u(),f(Uo.$$.fragment),mw=u(),Le=o("p"),u8=a("If the training script is in a normal file and not in the notebook cells, you can launch "),sd=o("code"),c8=a("deepspeed"),h8=a(` normally via
shell from a cell. For example, to use `),td=o("code"),f8=a("run_translation.py"),d8=a(" you would launch it with:"),_w=u(),f(Go.$$.fragment),vw=u(),Wt=o("p"),m8=a("or with "),ad=o("code"),_8=a("%%bash"),v8=a(" magic, where you can write a multi-line code for the shell program to run:"),jw=u(),f(Lo.$$.fragment),gw=u(),yi=o("p"),j8=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),ww=u(),Ft=o("p"),g8=a("Note: While "),nd=o("code"),w8=a("%%bash"),y8=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),yw=u(),bi=o("a"),bw=u(),Ss=o("h3"),Vt=o("a"),od=o("span"),f(Mo.$$.fragment),b8=u(),ld=o("span"),E8=a("Configuration"),Ew=u(),Yt=o("p"),q8=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Zo=o("a"),$8=a("following documentation"),k8=a("."),qw=u(),Kt=o("p"),P8=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),No=o("a"),D8=a(`the DeepSpeedExamples
repo`),z8=a(":"),$w=u(),f(Ho.$$.fragment),kw=u(),Jt=o("p"),O8=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),rd=o("code"),T8=a(".json"),A8=a(" files with:"),Pw=u(),f(Bo.$$.fragment),Dw=u(),Xt=o("p"),S8=a("Some more examples are to be found in the "),Wo=o("a"),C8=a("main repo"),x8=a(" as well."),zw=u(),Ei=o("p"),R8=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Ow=u(),oe=o("p"),I8=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),pd=o("code"),U8=a("AdamW"),G8=a(" optimizer and "),id=o("code"),L8=a("WarmupLR"),M8=a(` scheduler and will enable mixed
precision training if `),ud=o("code"),Z8=a("--fp16"),N8=a(" is passed:"),Tw=u(),f(Fo.$$.fragment),Aw=u(),Qt=o("p"),H8=a("When you execute the program, DeepSpeed will log the configuration it received from the "),qi=o("a"),B8=a("Trainer"),W8=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Sw=u(),$i=o("a"),Cw=u(),Cs=o("h3"),ea=o("a"),cd=o("span"),f(Vo.$$.fragment),F8=u(),hd=o("span"),V8=a("Passing Configuration"),xw=u(),G=o("p"),Y8=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),ki=o("a"),K8=a("Trainer"),J8=a(" via "),Pi=o("a"),X8=a("TrainingArguments"),Q8=a(" then for the "),fd=o("code"),ek=a("deepspeed"),sk=a(` argument you can
pass a nested `),dd=o("code"),tk=a("dict"),ak=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Di=o("a"),nk=a("TrainingArguments"),ok=a("."),Rw=u(),zi=o("p"),lk=a("To summarize you can do:"),Iw=u(),f(Yo.$$.fragment),Uw=u(),Oi=o("p"),rk=a("or:"),Gw=u(),f(Ko.$$.fragment),Lw=u(),Ti=o("a"),Mw=u(),xs=o("h3"),sa=o("a"),md=o("span"),f(Jo.$$.fragment),pk=u(),_d=o("span"),ik=a("Shared Configuration"),Zw=u(),f(ta.$$.fragment),Nw=u(),Me=o("p"),uk=a("Some configuration values are required by both the "),Ai=o("a"),ck=a("Trainer"),hk=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Si=o("a"),fk=a("Trainer"),dk=a(" command line arguments."),Hw=u(),aa=o("p"),mk=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Ci=o("a"),_k=a("Trainer"),vk=a(` do the majority
of configuration for you.`),Bw=u(),Ze=o("p"),jk=a("Therefore, in the rest of this guide you will find a special configuration value: "),vd=o("code"),gk=a("auto"),wk=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),xi=o("a"),yk=a("Trainer"),bk=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Ww=u(),Ri=o("p"),Ek=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),Fw=u(),na=o("p"),qk=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ii=o("a"),$k=a("TrainingArguments"),kk=a(" based on that. The steps are:"),Vw=u(),oa=o("ol"),jd=o("li"),Pk=a("Create or load the DeepSpeed configuration to be used as a master configuration"),Dk=u(),Xo=o("li"),zk=a("Create the "),Ui=o("a"),Ok=a("TrainingArguments"),Tk=a(" object based on these values"),Yw=u(),le=o("p"),Ak=a("Do note that some values, such as "),gd=o("code"),Sk=a("scheduler.params.total_num_steps"),Ck=a(` are calculated by
`),Gi=o("a"),xk=a("Trainer"),Rk=a(" during "),wd=o("code"),Ik=a("train"),Uk=a(", but you can of course do the math yourself."),Kw=u(),Li=o("a"),Jw=u(),Rs=o("h3"),la=o("a"),yd=o("span"),f(Qo.$$.fragment),Gk=u(),bd=o("span"),Lk=a("ZeRO"),Xw=u(),el=o("p"),sl=o("a"),Mk=a("Zero Redundancy Optimizer (ZeRO)"),Zk=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Qw=u(),Ne=o("p"),Nk=a("The "),Ed=o("code"),Hk=a("zero_optimization"),Bk=a(" section of the configuration file is the most important part ("),tl=o("a"),Wk=a("docs"),Fk=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),ey=u(),ra=o("p"),Vk=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Mi=o("a"),Yk=a("Trainer"),Kk=a(` provides
no equivalent command line arguments.`),sy=u(),Zi=o("p"),Jk=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),ty=u(),Ni=o("a"),ay=u(),Is=o("h4"),pa=o("a"),qd=o("span"),f(al.$$.fragment),Xk=u(),$d=o("span"),Qk=a("ZeRO-2 Config"),ny=u(),Hi=o("p"),e7=a("The following is an example of configuration for ZeRO stage 2:"),oy=u(),f(nl.$$.fragment),ly=u(),Bi=o("p"),kd=o("strong"),s7=a("Performance tuning:"),ry=u(),He=o("ul"),Us=o("li"),t7=a("enabling "),Pd=o("code"),a7=a("offload_optimizer"),n7=a(" should reduce GPU RAM usage (it requires "),Dd=o("code"),o7=a('"stage": 2'),l7=a(")"),r7=u(),L=o("li"),zd=o("code"),p7=a('"overlap_comm": true'),i7=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),Od=o("code"),u7=a("overlap_comm"),c7=a(` uses 4.5x
the `),Td=o("code"),h7=a("allgather_bucket_size"),f7=a(" and "),Ad=o("code"),d7=a("reduce_bucket_size"),m7=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Sd=o("code"),_7=a("5e8 x 2Bytes x 2 x 4.5"),v7=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Cd=o("code"),j7=a("2e8"),g7=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),w7=u(),xd=o("li"),y7=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),py=u(),Be=o("p"),b7=a("Additionally, "),Rd=o("code"),E7=a("deepspeed==0.4.4"),q7=a(" added a new option "),Id=o("code"),$7=a("round_robin_gradients"),k7=a(" which you can enable with:"),iy=u(),f(ol.$$.fragment),uy=u(),Wi=o("p"),P7=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),cy=u(),Fi=o("a"),hy=u(),Gs=o("h4"),ia=o("a"),Ud=o("span"),f(ll.$$.fragment),D7=u(),Gd=o("span"),z7=a("ZeRO-3 Config"),fy=u(),Vi=o("p"),O7=a("The following is an example of configuration for ZeRO stage 3:"),dy=u(),f(rl.$$.fragment),my=u(),K=o("p"),T7=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Ld=o("code"),A7=a('"device": "cpu"'),S7=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Md=o("code"),C7=a("none"),x7=a(" instead of "),Zd=o("code"),R7=a("cpu"),I7=a(" for the "),Nd=o("code"),U7=a("device"),G7=a(` entry. Offloading to
NVMe is discussed further down.`),_y=u(),We=o("p"),L7=a("Pinned memory is enabled with "),Hd=o("code"),M7=a("pin_memory"),Z7=a(" set to "),Bd=o("code"),N7=a("true"),H7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),vy=u(),Yi=o("p"),Wd=o("strong"),B7=a("Performance tuning:"),jy=u(),ua=o("ul"),pl=o("li"),Fd=o("code"),W7=a("stage3_max_live_parameters"),F7=a(": "),Vd=o("code"),V7=a("1e9"),Y7=u(),il=o("li"),Yd=o("code"),K7=a("stage3_max_reuse_distance"),J7=a(": "),Kd=o("code"),X7=a("1e9"),gy=u(),M=o("p"),Q7=a("If hitting OOM reduce "),Jd=o("code"),e9=a("stage3_max_live_parameters"),s9=a(" and "),Xd=o("code"),t9=a("stage3_max_reuse_distance"),a9=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Qd=o("code"),n9=a("1e9"),o9=a(` would consume ~2GB. The memory is shared by
`),em=o("code"),l9=a("stage3_max_live_parameters"),r9=a(" and "),sm=o("code"),p9=a("stage3_max_reuse_distance"),i9=a(", so it\u2019s not additive, it\u2019s just 2GB total."),wy=u(),ze=o("p"),tm=o("code"),u9=a("stage3_max_live_parameters"),c9=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),am=o("code"),h9=a("stage3_max_reuse_distance"),f9=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),nm=o("code"),d9=a("stage3_max_reuse_distance"),m9=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),yy=u(),Ki=o("p"),_9=a("The following configuration values depend on the model\u2019s hidden size:"),by=u(),Fe=o("ul"),ul=o("li"),om=o("code"),v9=a("reduce_bucket_size"),j9=a(": "),lm=o("code"),g9=a("hidden_size*hidden_size"),w9=u(),cl=o("li"),rm=o("code"),y9=a("stage3_prefetch_bucket_size"),b9=a(": "),pm=o("code"),E9=a("0.9 * hidden_size * hidden_size"),q9=u(),hl=o("li"),im=o("code"),$9=a("stage3_param_persistence_threshold"),k9=a(": "),um=o("code"),P9=a("10 * hidden_size"),Ey=u(),Ve=o("p"),D9=a("therefore set these values to "),cm=o("code"),z9=a("auto"),O9=a(" and the "),Ji=o("a"),T9=a("Trainer"),A9=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),qy=u(),fl=o("p"),hm=o("code"),S9=a("stage3_gather_16bit_weights_on_model_save"),C9=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),$y=u(),re=o("p"),x9=a("If you\u2019re migrating from ZeRO-2 configuration note that "),fm=o("code"),R9=a("allgather_partitions"),I9=a(", "),dm=o("code"),U9=a("allgather_bucket_size"),G9=a(` and
`),mm=o("code"),L9=a("reduce_scatter"),M9=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),ky=u(),Xi=o("ul"),dl=o("li"),_m=o("code"),Z9=a("sub_group_size"),N9=a(": "),vm=o("code"),H9=a("1e9"),Py=u(),Oe=o("p"),jm=o("code"),B9=a("sub_group_size"),W9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),gm=o("code"),F9=a("sub_group_size"),V9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),wm=o("code"),Y9=a("sub_group_size"),K9=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Dy=u(),Ye=o("p"),J9=a("You can leave "),ym=o("code"),X9=a("sub_group_size"),Q9=a(" to its default value of "),bm=o("em"),eP=a("1e9"),sP=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),zy=u(),ca=o("ol"),ml=o("li"),tP=a("Running into OOM during optimizer step: Reduce "),Em=o("code"),aP=a("sub_group_size"),nP=a(" to reduce memory utilization of temporary buffers"),oP=u(),_l=o("li"),lP=a("Optimizer Step is taking a long time: Increase "),qm=o("code"),rP=a("sub_group_size"),pP=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Oy=u(),Qi=o("a"),Ty=u(),Ls=o("h3"),ha=o("a"),$m=o("span"),f(vl.$$.fragment),iP=u(),km=o("span"),uP=a("NVMe Support"),Ay=u(),eu=o("p"),cP=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Sy=u(),su=o("p"),hP=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Cy=u(),f(jl.$$.fragment),xy=u(),fa=o("p"),fP=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Pm=o("em"),dP=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),mP=a(")."),Ry=u(),Ke=o("p"),_P=a("Here is the full documentation for offloading "),gl=o("a"),vP=a("optimizer states"),jP=a(" and "),wl=o("a"),gP=a("parameters"),wP=a("."),Iy=u(),da=o("p"),yP=a("Make sure that your "),Dm=o("code"),bP=a("nvme_path"),EP=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Uy=u(),Je=o("p"),qP=a("In order to figure out the optimal "),zm=o("code"),$P=a("aio"),kP=a(` configuration block you must run a benchmark on your target setup, as
`),yl=o("a"),PP=a("explained here"),DP=a("."),Gy=u(),tu=o("a"),Ly=u(),Ms=o("h4"),ma=o("a"),Om=o("span"),f(bl.$$.fragment),zP=u(),Tm=o("span"),OP=a("ZeRO-2 vs ZeRO-3 Performance"),My=u(),au=o("p"),TP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Zy=u(),nu=o("p"),AP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Ny=u(),_a=o("ul"),Zs=o("li"),SP=a("set "),Am=o("code"),CP=a("stage3_param_persistence_threshold"),xP=a(" to a very large number - larger than the largest parameter, e.g., "),Sm=o("code"),RP=a("6 * hidden_size * hidden_size"),IP=a(". This will keep the parameters on the GPUs."),UP=u(),El=o("li"),GP=a("turn off "),Cm=o("code"),LP=a("offload_params"),MP=a(" since ZeRO-2 doesn\u2019t have that option."),Hy=u(),Xe=o("p"),ZP=a("The performance will likely improve significantly with just "),xm=o("code"),NP=a("offload_params"),HP=a(` turned off, even if you don\u2019t change
`),Rm=o("code"),BP=a("stage3_param_persistence_threshold"),WP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),By=u(),ou=o("a"),Wy=u(),Ns=o("h4"),va=o("a"),Im=o("span"),f(ql.$$.fragment),FP=u(),Um=o("span"),VP=a("ZeRO-2 Example"),Fy=u(),ja=o("p"),YP=a("Here is a full ZeRO-2 auto-configuration file "),Gm=o("code"),KP=a("ds_config_zero2.json"),JP=a(":"),Vy=u(),f($l.$$.fragment),Yy=u(),ga=o("p"),XP=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Lm=o("code"),QP=a("auto"),eD=a(" settings in it."),Ky=u(),f(kl.$$.fragment),Jy=u(),lu=o("a"),Xy=u(),Hs=o("h4"),wa=o("a"),Mm=o("span"),f(Pl.$$.fragment),sD=u(),Zm=o("span"),tD=a("ZeRO-3 Example"),Qy=u(),ya=o("p"),aD=a("Here is a full ZeRO-3 auto-configuration file "),Nm=o("code"),nD=a("ds_config_zero3.json"),oD=a(":"),e2=u(),f(Dl.$$.fragment),s2=u(),ba=o("p"),lD=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Hm=o("code"),rD=a("auto"),pD=a(" settings in it."),t2=u(),f(zl.$$.fragment),a2=u(),Bs=o("h3"),Ea=o("a"),Bm=o("span"),f(Ol.$$.fragment),iD=u(),Wm=o("span"),uD=a("Optimizer and Scheduler"),n2=u(),qa=o("p"),cD=a("As long as you don\u2019t enable "),Fm=o("code"),hD=a("offload_optimizer"),fD=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),o2=u(),ru=o("p"),dD=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),l2=u(),$a=o("p"),mD=a("It is possible to use a non-DeepSpeed optimizer when "),Vm=o("code"),_D=a("offload_optimizer"),vD=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),r2=u(),pu=o("a"),p2=u(),Ws=o("h4"),ka=o("a"),Ym=o("span"),f(Tl.$$.fragment),jD=u(),Km=o("span"),gD=a("Optimizer"),i2=u(),Qe=o("p"),wD=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Jm=o("code"),yD=a("torch"),bD=a(". The full documentation is "),Al=o("a"),ED=a("here"),qD=a("."),u2=u(),k=o("p"),$D=a("If you don\u2019t configure the "),Xm=o("code"),kD=a("optimizer"),PD=a(" entry in the configuration file, the "),iu=o("a"),DD=a("Trainer"),zD=a(` will
automatically set it to `),Qm=o("code"),OD=a("AdamW"),TD=a(` and will use the supplied values or the defaults for the following command line
arguments: `),e_=o("code"),AD=a("--learning_rate"),SD=a(", "),s_=o("code"),CD=a("--adam_beta1"),xD=a(", "),t_=o("code"),RD=a("--adam_beta2"),ID=a(", "),a_=o("code"),UD=a("--adam_epsilon"),GD=a(" and "),n_=o("code"),LD=a("--weight_decay"),MD=a("."),c2=u(),es=o("p"),ZD=a("Here is an example of the auto-configured "),o_=o("code"),ND=a("optimizer"),HD=a(" entry for "),l_=o("code"),BD=a("AdamW"),WD=a(":"),h2=u(),f(Sl.$$.fragment),f2=u(),uu=o("p"),FD=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),d2=u(),pe=o("ul"),Cl=o("li"),r_=o("code"),VD=a("lr"),YD=a(" with the value of "),p_=o("code"),KD=a("--learning_rate"),JD=u(),xl=o("li"),i_=o("code"),XD=a("betas"),QD=a(" with the value of "),u_=o("code"),ez=a("--adam_beta1 --adam_beta2"),sz=u(),Rl=o("li"),c_=o("code"),tz=a("eps"),az=a(" with the value of "),h_=o("code"),nz=a("--adam_epsilon"),oz=u(),Il=o("li"),f_=o("code"),lz=a("weight_decay"),rz=a(" with the value of "),d_=o("code"),pz=a("--weight_decay"),m2=u(),cu=o("p"),iz=a("Therefore please remember to tune the shared hyperparameters on the command line."),_2=u(),hu=o("p"),uz=a("You can also set the values explicitly:"),v2=u(),f(Ul.$$.fragment),j2=u(),Pa=o("p"),cz=a("But then you\u2019re on your own synchronizing the "),fu=o("a"),hz=a("Trainer"),fz=a(` command line arguments and the DeepSpeed
configuration.`),g2=u(),du=o("p"),dz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),w2=u(),f(Gl.$$.fragment),y2=u(),ie=o("p"),mz=a("Similarly to "),m_=o("code"),_z=a("AdamW"),vz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),__=o("code"),jz=a("weight_decay"),gz=a(" around "),v_=o("code"),wz=a("0.01"),yz=a("."),b2=u(),mu=o("a"),E2=u(),Fs=o("h4"),Da=o("a"),j_=o("span"),f(Ll.$$.fragment),bz=u(),g_=o("span"),Ez=a("Scheduler"),q2=u(),Z=o("p"),qz=a("DeepSpeed supports "),w_=o("code"),$z=a("LRRangeTest"),kz=a(", "),y_=o("code"),Pz=a("OneCycle"),Dz=a(", "),b_=o("code"),zz=a("WarmupLR"),Oz=a(" and "),E_=o("code"),Tz=a("WarmupDecayLR"),Az=a(` learning rate schedulers. The full
documentation is `),Ml=o("a"),Sz=a("here"),Cz=a("."),$2=u(),_u=o("p"),xz=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),k2=u(),za=o("ul"),Zl=o("li"),q_=o("code"),Rz=a("WarmupLR"),Iz=a(" via "),$_=o("code"),Uz=a("--lr_scheduler_type constant_with_warmup"),Gz=u(),ss=o("li"),k_=o("code"),Lz=a("WarmupDecayLR"),Mz=a(" via "),P_=o("code"),Zz=a("--lr_scheduler_type linear"),Nz=a(". This is also the default value for "),D_=o("code"),Hz=a("--lr_scheduler_type"),Bz=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),P2=u(),T=o("p"),Wz=a("If you don\u2019t configure the "),z_=o("code"),Fz=a("scheduler"),Vz=a(" entry in the configuration file, the "),vu=o("a"),Yz=a("Trainer"),Kz=a(` will use
the values of `),O_=o("code"),Jz=a("--lr_scheduler_type"),Xz=a(", "),T_=o("code"),Qz=a("--learning_rate"),eO=a(" and "),A_=o("code"),sO=a("--warmup_steps"),tO=a(" or "),S_=o("code"),aO=a("--warmup_ratio"),nO=a(` to configure a
\u{1F917} Transformers version of it.`),D2=u(),ts=o("p"),oO=a("Here is an example of the auto-configured "),C_=o("code"),lO=a("scheduler"),rO=a(" entry for "),x_=o("code"),pO=a("WarmupLR"),iO=a(":"),z2=u(),f(Nl.$$.fragment),O2=u(),as=o("p"),uO=a("Since "),R_=o("em"),cO=a("\u201Cauto\u201D"),hO=a(" is used the "),ju=o("a"),fO=a("Trainer"),dO=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),T2=u(),ue=o("ul"),Oa=o("li"),I_=o("code"),mO=a("warmup_min_lr"),_O=a(" with the value of "),U_=o("code"),vO=a("0"),jO=a("."),gO=u(),Ta=o("li"),G_=o("code"),wO=a("warmup_max_lr"),yO=a(" with the value of "),L_=o("code"),bO=a("--learning_rate"),EO=a("."),qO=u(),ns=o("li"),M_=o("code"),$O=a("warmup_num_steps"),kO=a(" with the value of "),Z_=o("code"),PO=a("--warmup_steps"),DO=a(" if provided. Otherwise will use "),N_=o("code"),zO=a("--warmup_ratio"),OO=a(`
multiplied by the number of training steps and rounded up.`),TO=u(),os=o("li"),H_=o("code"),AO=a("total_num_steps"),SO=a(" with either the value of "),B_=o("code"),CO=a("--max_steps"),xO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),W_=o("code"),RO=a("WarmupDecayLR"),IO=a(")."),A2=u(),gu=o("p"),UO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),S2=u(),f(Hl.$$.fragment),C2=u(),Aa=o("p"),GO=a("But then you\u2019re on your own synchronizing the "),wu=o("a"),LO=a("Trainer"),MO=a(` command line arguments and the DeepSpeed
configuration.`),x2=u(),Sa=o("p"),ZO=a("For example, for "),F_=o("code"),NO=a("WarmupDecayLR"),HO=a(", you can use the following entry:"),R2=u(),f(Bl.$$.fragment),I2=u(),J=o("p"),BO=a("and "),V_=o("code"),WO=a("total_num_steps"),FO=a(", "),Y_=o("code"),VO=a("warmup_max_lr"),YO=a(", "),K_=o("code"),KO=a("warmup_num_steps"),JO=a(" and "),J_=o("code"),XO=a("total_num_steps"),QO=a(" will be set at loading time."),U2=u(),yu=o("a"),G2=u(),Vs=o("h3"),Ca=o("a"),X_=o("span"),f(Wl.$$.fragment),eT=u(),Q_=o("span"),sT=a("fp32 Precision"),L2=u(),bu=o("p"),tT=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),M2=u(),xa=o("p"),aT=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),e1=o("code"),nT=a("NaN"),oT=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Z2=u(),f(Fl.$$.fragment),N2=u(),Ra=o("p"),lT=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Vl=o("a"),rT=a("TensorFloat-32(TF32) on Ampere devices"),pT=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),H2=u(),ce=o("p"),iT=a("With the \u{1F917} Trainer you can use "),s1=o("code"),uT=a("--tf32"),cT=a(" to enable it, or disable it with "),t1=o("code"),hT=a("--tf32 0"),fT=a(" or "),a1=o("code"),dT=a("--no_tf32"),mT=a(". By default the PyTorch default is used."),B2=u(),Eu=o("a"),W2=u(),Ys=o("h3"),Ia=o("a"),n1=o("span"),f(Yl.$$.fragment),_T=u(),o1=o("span"),vT=a("Automatic Mixed Precision"),F2=u(),qu=o("p"),jT=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),V2=u(),Ks=o("h3"),Ua=o("a"),l1=o("span"),f(Kl.$$.fragment),gT=u(),r1=o("span"),wT=a("fp16"),Y2=u(),$u=o("p"),yT=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),K2=u(),f(Jl.$$.fragment),J2=u(),ls=o("p"),bT=a("and the "),ku=o("a"),ET=a("Trainer"),qT=a(` will automatically enable or disable it based on the value of
`),p1=o("code"),$T=a("args.fp16_backend"),kT=a(". The rest of config values are up to you."),X2=u(),rs=o("p"),PT=a("This mode gets enabled when "),i1=o("code"),DT=a("--fp16 --fp16_backend amp"),zT=a(" or "),u1=o("code"),OT=a("--fp16_full_eval"),TT=a(" command line args are passed."),Q2=u(),Pu=o("p"),AT=a("You can also enable/disable this mode explicitly:"),eb=u(),f(Xl.$$.fragment),sb=u(),Ga=o("p"),ST=a("But then you\u2019re on your own synchronizing the "),Du=o("a"),CT=a("Trainer"),xT=a(` command line arguments and the DeepSpeed
configuration.`),tb=u(),La=o("p"),RT=a("Here is the "),Ql=o("a"),IT=a("documentation"),UT=a("."),ab=u(),Js=o("h3"),Ma=o("a"),c1=o("span"),f(er.$$.fragment),GT=u(),h1=o("span"),LT=a("bf16"),nb=u(),zu=o("p"),MT=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),ob=u(),f(sr.$$.fragment),lb=u(),Ou=o("p"),ZT=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),rb=u(),ps=o("p"),NT=a("This mode gets enabled when "),f1=o("code"),HT=a("--bf16"),BT=a(" or "),d1=o("code"),WT=a("--bf16_full_eval"),FT=a(" command line args are passed."),pb=u(),Tu=o("p"),VT=a("You can also enable/disable this mode explicitly:"),ib=u(),f(tr.$$.fragment),ub=u(),f(Za.$$.fragment),cb=u(),Xs=o("h3"),Na=o("a"),m1=o("span"),f(ar.$$.fragment),YT=u(),_1=o("span"),KT=a("apex"),hb=u(),Au=o("p"),JT=a("To configure apex AMP-like mode set:"),fb=u(),f(nr.$$.fragment),db=u(),he=o("p"),XT=a("and the "),Su=o("a"),QT=a("Trainer"),eA=a(" will automatically configure it based on the values of "),v1=o("code"),sA=a("args.fp16_backend"),tA=a(` and
`),j1=o("code"),aA=a("args.fp16_opt_level"),nA=a("."),mb=u(),Ha=o("p"),oA=a("This mode gets enabled when "),g1=o("code"),lA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),rA=a(" command line args are passed."),_b=u(),Cu=o("p"),pA=a("You can also configure this mode explicitly:"),vb=u(),f(or.$$.fragment),jb=u(),Ba=o("p"),iA=a("But then you\u2019re on your own synchronizing the "),xu=o("a"),uA=a("Trainer"),cA=a(` command line arguments and the DeepSpeed
configuration.`),gb=u(),Wa=o("p"),hA=a("Here is the "),lr=o("a"),fA=a("documentation"),dA=a("."),wb=u(),Ru=o("a"),yb=u(),Qs=o("h3"),Fa=o("a"),w1=o("span"),f(rr.$$.fragment),mA=u(),y1=o("span"),_A=a("Batch Size"),bb=u(),Iu=o("p"),vA=a("To configure batch size, use:"),Eb=u(),f(pr.$$.fragment),qb=u(),N=o("p"),jA=a("and the "),Uu=o("a"),gA=a("Trainer"),wA=a(" will automatically set "),b1=o("code"),yA=a("train_micro_batch_size_per_gpu"),bA=a(` to the value of
`),E1=o("code"),EA=a("args.per_device_train_batch_size"),qA=a(" and "),q1=o("code"),$A=a("train_batch_size"),kA=a(" to "),$1=o("code"),PA=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),DA=a("."),$b=u(),Gu=o("p"),zA=a("You can also set the values explicitly:"),kb=u(),f(ir.$$.fragment),Pb=u(),Va=o("p"),OA=a("But then you\u2019re on your own synchronizing the "),Lu=o("a"),TA=a("Trainer"),AA=a(` command line arguments and the DeepSpeed
configuration.`),Db=u(),Mu=o("a"),zb=u(),et=o("h3"),Ya=o("a"),k1=o("span"),f(ur.$$.fragment),SA=u(),P1=o("span"),CA=a("Gradient Accumulation"),Ob=u(),Zu=o("p"),xA=a("To configure gradient accumulation set:"),Tb=u(),f(cr.$$.fragment),Ab=u(),is=o("p"),RA=a("and the "),Nu=o("a"),IA=a("Trainer"),UA=a(" will automatically set it to the value of "),D1=o("code"),GA=a("args.gradient_accumulation_steps"),LA=a("."),Sb=u(),Hu=o("p"),MA=a("You can also set the value explicitly:"),Cb=u(),f(hr.$$.fragment),xb=u(),Ka=o("p"),ZA=a("But then you\u2019re on your own synchronizing the "),Bu=o("a"),NA=a("Trainer"),HA=a(` command line arguments and the DeepSpeed
configuration.`),Rb=u(),Wu=o("a"),Ib=u(),st=o("h3"),Ja=o("a"),z1=o("span"),f(fr.$$.fragment),BA=u(),O1=o("span"),WA=a("Gradient Clipping"),Ub=u(),Fu=o("p"),FA=a("To configure gradient gradient clipping set:"),Gb=u(),f(dr.$$.fragment),Lb=u(),us=o("p"),VA=a("and the "),Vu=o("a"),YA=a("Trainer"),KA=a(" will automatically set it to the value of "),T1=o("code"),JA=a("args.max_grad_norm"),XA=a("."),Mb=u(),Yu=o("p"),QA=a("You can also set the value explicitly:"),Zb=u(),f(mr.$$.fragment),Nb=u(),Xa=o("p"),eS=a("But then you\u2019re on your own synchronizing the "),Ku=o("a"),sS=a("Trainer"),tS=a(` command line arguments and the DeepSpeed
configuration.`),Hb=u(),Ju=o("a"),Bb=u(),tt=o("h3"),Qa=o("a"),A1=o("span"),f(_r.$$.fragment),aS=u(),S1=o("span"),nS=a("Getting The Model Weights Out"),Wb=u(),en=o("p"),oS=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),C1=o("code"),lS=a("global_step*/*optim_states.pt"),rS=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Fb=u(),Xu=o("p"),x1=o("strong"),pS=a("FP16 Weights:"),Vb=u(),sn=o("p"),iS=a("When a model is saved under ZeRO-2, you end up having the normal "),R1=o("code"),uS=a("pytorch_model.bin"),cS=a(` file with the model weights, but
they are only the fp16 version of the weights.`),Yb=u(),A=o("p"),hS=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),I1=o("code"),fS=a('"stage3_gather_16bit_weights_on_model_save": true'),dS=a(" is required to get the "),U1=o("code"),mS=a("Trainer"),_S=a(` to save the fp16
version of the weights. If this setting is `),G1=o("code"),vS=a("False"),jS=u(),L1=o("code"),gS=a("pytorch_model.bin"),wS=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),M1=o("code"),yS=a("state_dict"),bS=a(" contains a placeholder and not the real weights. If we were to save this "),Z1=o("code"),ES=a("state_dict"),qS=a(" it won\u2019t be possible to load it back."),Kb=u(),f(vr.$$.fragment),Jb=u(),Qu=o("p"),N1=o("strong"),$S=a("FP32 Weights:"),Xb=u(),tn=o("p"),kS=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),jr=o("a"),PS=a("models hub"),DS=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Qb=u(),ec=o("p"),H1=o("strong"),zS=a("Live FP32 Weights Recovery:"),e3=u(),sc=o("p"),OS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),s3=u(),tc=o("p"),TS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),t3=u(),f(gr.$$.fragment),a3=u(),cs=o("p"),AS=a("If you\u2019re using the "),B1=o("code"),SS=a("--load_best_model_at_end"),CS=a(" class:"),W1=o("em"),xS=a("~transformers.TrainingArguments"),RS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),n3=u(),f(wr.$$.fragment),o3=u(),f(an.$$.fragment),l3=u(),nn=o("p"),IS=a("Of course, you don\u2019t have to use class:"),F1=o("em"),US=a("~transformers.Trainer"),GS=a(` and you can adjust the examples above to your own
trainer.`),r3=u(),on=o("p"),LS=a("If for some reason you want more refinement, you can also extract the fp32 "),V1=o("code"),MS=a("state_dict"),ZS=a(` of the weights and apply
these yourself as is shown in the following example:`),p3=u(),f(yr.$$.fragment),i3=u(),ac=o("p"),Y1=o("strong"),NS=a("Offline FP32 Weights Recovery:"),u3=u(),hs=o("p"),HS=a("DeepSpeed creates a special conversion script "),K1=o("code"),BS=a("zero_to_fp32.py"),WS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),J1=o("code"),FS=a("Trainer"),VS=a(" to do the extraction."),c3=u(),nc=o("p"),YS=a("Let\u2019s say your checkpoint folder looks like this:"),h3=u(),f(br.$$.fragment),f3=u(),ln=o("p"),KS=a("In this example there is just one DeepSpeed checkpoint sub-folder "),X1=o("em"),JS=a("global_step1"),XS=a(`. Therefore to reconstruct the fp32
weights just run:`),d3=u(),f(Er.$$.fragment),m3=u(),rn=o("p"),QS=a("This is it. "),Q1=o("code"),eC=a("pytorch_model.bin"),sC=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),_3=u(),oc=o("p"),tC=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),v3=u(),qr=o("p"),ev=o("code"),aC=a("python zero_to_fp32.py -h"),nC=a(" will give you usage details."),j3=u(),fs=o("p"),oC=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),sv=o("code"),lC=a("latest"),rC=a(`, which in the current
example will contain `),tv=o("code"),pC=a("global_step1"),iC=a("."),g3=u(),lc=o("p"),uC=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),w3=u(),at=o("h3"),pn=o("a"),av=o("span"),f($r.$$.fragment),cC=u(),nv=o("span"),hC=a("ZeRO-3 and Infinity Nuances"),y3=u(),rc=o("p"),fC=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),b3=u(),pc=o("p"),dC=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),E3=u(),ic=o("p"),mC=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),q3=u(),nt=o("h4"),un=o("a"),ov=o("span"),f(kr.$$.fragment),_C=u(),lv=o("span"),vC=a("Constructing Massive Models"),$3=u(),cn=o("p"),jC=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),rv=o("em"),gC=a("deepspeed.zero.Init()"),wC=a(`
context manager (which is also a function decorator), like so:`),k3=u(),f(Pr.$$.fragment),P3=u(),uc=o("p"),yC=a("As you can see this gives you a randomly initialized model."),D3=u(),D=o("p"),bC=a("If you want to use a pretrained model, "),pv=o("code"),EC=a("model_class.from_pretrained"),qC=a(` will activate this feature as long as
`),iv=o("code"),$C=a("is_deepspeed_zero3_enabled()"),kC=a(" returns "),uv=o("code"),PC=a("True"),DC=a(`, which currently is setup by the
`),cc=o("a"),zC=a("TrainingArguments"),OC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),hc=o("a"),TC=a("TrainingArguments"),AC=a(" object "),cv=o("strong"),SC=a("before"),CC=a(` calling
`),hv=o("code"),xC=a("from_pretrained"),RC=a(". Here is an example of a possible sequence:"),z3=u(),f(Dr.$$.fragment),O3=u(),hn=o("p"),IC=a("If you\u2019re using the official example scripts and your command line arguments include "),fv=o("code"),UC=a("--deepspeed ds_config.json"),GC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),T3=u(),fc=o("p"),LC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),A3=u(),fn=o("p"),MC=a("For full details on this method and other related features please refer to "),zr=o("a"),ZC=a("Constructing Massive Models"),NC=a("."),S3=u(),fe=o("p"),HC=a("Also when loading fp16-pretrained models, you will want to tell "),dv=o("code"),BC=a("from_pretrained"),WC=a(` to use
`),mv=o("code"),FC=a("torch_dtype=torch.float16"),VC=a(". For details, please, see "),dc=o("a"),YC=a("from_pretrained-torch-dtype"),KC=a("."),C3=u(),ot=o("h4"),dn=o("a"),_v=o("span"),f(Or.$$.fragment),JC=u(),vv=o("span"),XC=a("Gathering Parameters"),x3=u(),Tr=o("p"),QC=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Ar=o("a"),ex=a("Gathering Parameters"),R3=u(),mn=o("p"),sx=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),jv=o("code"),tx=a("from_pretrained"),ax=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),I3=u(),mc=o("p"),nx=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),U3=u(),f(Sr.$$.fragment),G3=u(),ds=o("p"),ox=a("stress on "),gv=o("code"),lx=a("tensor([1.])"),rx=a(", or if you get an error where it says the parameter is of size "),wv=o("code"),px=a("1"),ix=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),L3=u(),_c=o("a"),M3=u(),lt=o("h3"),_n=o("a"),yv=o("span"),f(Cr.$$.fragment),ux=u(),bv=o("span"),cx=a("ZeRO Inference"),Z3=u(),vc=o("p"),hx=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),N3=u(),vn=o("p"),fx=a("Otherwise you just need to pass the usual "),jc=o("a"),dx=a("TrainingArguments"),mx=a(" arguments. For example:"),H3=u(),f(xr.$$.fragment),B3=u(),gc=o("p"),_x=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),W3=u(),jn=o("p"),vx=a("Here is an example of running "),Ev=o("code"),jx=a("run_translation.py"),gx=a(" under DeepSpeed deploying all available GPUs:"),F3=u(),f(Rr.$$.fragment),V3=u(),wc=o("p"),wx=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),Y3=u(),yc=o("p"),yx=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),K3=u(),rt=o("h3"),gn=o("a"),qv=o("span"),f(Ir.$$.fragment),bx=u(),$v=o("span"),Ex=a("Memory Requirements"),J3=u(),bc=o("p"),qx=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),X3=u(),Ec=o("p"),$x=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),Q3=u(),f(Ur.$$.fragment),e0=u(),qc=o("p"),kx=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),s0=u(),$c=o("p"),Px=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),t0=u(),kc=o("p"),Dx=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),a0=u(),Pc=o("p"),zx=a("For example, let\u2019s repeat the same for 2 GPUs:"),n0=u(),f(Gr.$$.fragment),o0=u(),Dc=o("p"),Ox=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),l0=u(),wn=o("p"),Tx=a("For full information please see "),Lr=o("a"),Ax=a("memory estimators"),Sx=a("."),r0=u(),pt=o("h3"),yn=o("a"),kv=o("span"),f(Mr.$$.fragment),Cx=u(),Pv=o("span"),xx=a("Filing Issues"),p0=u(),zc=o("p"),Rx=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),i0=u(),Oc=o("p"),Ix=a("In your report please always include:"),u0=u(),H=o("ol"),Dv=o("li"),zv=o("p"),Ux=a("the full Deepspeed config file in the report"),Gx=u(),Ov=o("li"),Te=o("p"),Lx=a("either the command line arguments if you were using the "),Tc=o("a"),Mx=a("Trainer"),Zx=a(` or
`),Ac=o("a"),Nx=a("TrainingArguments"),Hx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Sc=o("a"),Bx=a("TrainingArguments"),Wx=a(" as it has dozens of entries that are irrelevant."),Fx=u(),Zr=o("li"),Tv=o("p"),Vx=a("Output of:"),Yx=u(),f(Nr.$$.fragment),Kx=u(),Av=o("li"),Hr=o("p"),Jx=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Br=o("a"),Xx=a("notebook"),Qx=a(` as
a starting point.`),eR=u(),Sv=o("li"),Cv=o("p"),sR=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),tR=u(),xv=o("li"),Wr=o("p"),aR=a("If possible try to use one of the existing "),Fr=o("a"),nR=a("examples"),oR=a(" to reproduce the problem with."),c0=u(),Cc=o("p"),lR=a("Things to consider:"),h0=u(),bn=o("ul"),it=o("li"),Rv=o("p"),rR=a("Deepspeed is often not the cause of the problem."),pR=u(),Iv=o("p"),iR=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),uR=u(),Uv=o("p"),cR=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),hR=u(),Gv=o("li"),Vr=o("p"),fR=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Yr=o("a"),dR=a("Deepspeed"),mR=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),f0=u(),ut=o("h3"),En=o("a"),Lv=o("span"),f(Kr.$$.fragment),_R=u(),Mv=o("span"),vR=a("Troubleshooting"),d0=u(),ct=o("h4"),qn=o("a"),Zv=o("span"),f(Jr.$$.fragment),jR=u(),Xr=o("span"),gR=a("the "),Nv=o("code"),wR=a("deepspeed"),yR=a(" process gets killed at startup without a traceback"),m0=u(),B=o("p"),bR=a("If the "),Hv=o("code"),ER=a("deepspeed"),qR=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Bv=o("code"),$R=a("offload_optimizer"),kR=a(" or "),Wv=o("code"),PR=a("offload_param"),DR=a(` or
both configured to offload to `),Fv=o("code"),zR=a("cpu"),OR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Qr=o("a"),TR=a("estimate how much memory is needed for a specific model"),AR=a("."),_0=u(),ht=o("h4"),$n=o("a"),Vv=o("span"),f(ep.$$.fragment),SR=u(),xc=o("span"),CR=a("training and/or eval/predict loss is "),Yv=o("code"),xR=a("NaN"),v0=u(),Rc=o("p"),RR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),j0=u(),Ic=o("p"),IR=a("The other problem may have to do with using fp16. When you configure this section:"),g0=u(),f(sp.$$.fragment),w0=u(),kn=o("p"),UR=a("and you see in your log that Deepspeed reports "),Kv=o("code"),GR=a("OVERFLOW!"),LR=a(" as follows:"),y0=u(),f(tp.$$.fragment),b0=u(),Uc=o("p"),MR=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),E0=u(),Gc=o("p"),ZR=a("(the log was massaged to be more readable here.)"),q0=u(),ms=o("p"),NR=a("In this case you usually need to raise the value of "),Jv=o("code"),HR=a("initial_scale_power"),BR=a(". Setting it to "),Xv=o("code"),WR=a('"initial_scale_power": 32'),FR=a(" will typically resolve the problem."),$0=u(),ft=o("h3"),Pn=o("a"),Qv=o("span"),f(ap.$$.fragment),VR=u(),ej=o("span"),YR=a("Notes"),k0=u(),_s=o("ul"),Dn=o("li"),KR=a("DeepSpeed works with the PyTorch "),Lc=o("a"),JR=a("Trainer"),XR=a(" but not TF "),sj=o("code"),QR=a("TFTrainer"),eI=u(),np=o("li"),sI=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),op=o("a"),tI=a("source"),aI=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),nI=u(),dt=o("li"),oI=a("You don\u2019t have to use the "),Mc=o("a"),lI=a("Trainer"),rI=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),lp=o("a"),pI=a("the DeepSpeed integration instructions"),iI=a("."),P0=u(),Zc=o("a"),D0=u(),mt=o("h2"),zn=o("a"),tj=o("span"),f(rp.$$.fragment),uI=u(),aj=o("span"),cI=a("Non-Trainer Deepspeed Integration"),z0=u(),de=o("p"),hI=a("The "),Nc=o("a"),fI=a("HfDeepSpeedConfig"),dI=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Hc=o("a"),mI=a("Trainer"),_I=a(" is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),nj=o("code"),vI=a("from_pretrained"),jI=a(" call. Everything else you have to do by yourself."),O0=u(),On=o("p"),gI=a("When using "),Bc=o("a"),wI=a("Trainer"),yI=a(" everything is automatically taken care of."),T0=u(),vs=o("p"),bI=a("When not using "),Wc=o("a"),EI=a("Trainer"),qI=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Fc=o("a"),$I=a("HfDeepSpeedConfig"),kI=a(" object before instantiating the model."),A0=u(),Vc=o("p"),PI=a("For example for a pretrained model:"),S0=u(),f(pp.$$.fragment),C0=u(),Yc=o("p"),DI=a("or for non-pretrained model:"),x0=u(),f(ip.$$.fragment),R0=u(),me=o("p"),zI=a("Please note that if you\u2019re not using the "),Kc=o("a"),OI=a("Trainer"),TI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),up=o("a"),AI=a("Deepspeed"),SI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),oj=o("code"),CI=a('"auto"'),xI=a(" values and you will have to put real values instead."),I0=u(),_t=o("h2"),Tn=o("a"),lj=o("span"),f(cp.$$.fragment),RI=u(),rj=o("span"),II=a("HfDeepSpeedConfig"),U0=u(),P=o("div"),f(hp.$$.fragment),UI=u(),pj=o("p"),GI=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),LI=u(),Ae=o("p"),MI=a("A "),ij=o("code"),ZI=a("weakref"),NI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),uj=o("code"),HI=a("from_pretrained"),BI=a(" and "),cj=o("code"),WI=a("_get_resized_embeddings"),FI=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),VI=u(),_e=o("p"),Jc=o("a"),YI=a("Trainer"),KI=a(" uses the "),hj=o("code"),JI=a("HfTrainerDeepSpeedConfig"),XI=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Xc=o("a"),QI=a("TrainingArguments"),eU=a(" by replacing special placeholder values: "),fj=o("code"),sU=a('"auto"'),tU=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),aU=u(),js=o("div"),f(fp.$$.fragment),nU=u(),dj=o("p"),oU=a("Deletes a sub-section of the config file if it\u2019s found."),lU=u(),vt=o("p"),rU=a("Unless "),mj=o("code"),pU=a("must_exist"),iU=a(" is "),_j=o("code"),uU=a("True"),cU=a(" the section doesn\u2019t have to exist."),hU=u(),An=o("div"),f(dp.$$.fragment),fU=u(),mp=o("p"),dU=a("Returns the set value or "),vj=o("code"),mU=a("default"),_U=a(" if no value is set"),vU=u(),Sn=o("div"),f(_p.$$.fragment),jU=u(),jt=o("p"),gU=a("Returns "),jj=o("code"),wU=a("True"),yU=a("/"),gj=o("code"),bU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),EU=a(" or isn\u2019t set)."),qU=u(),Cn=o("div"),f(vp.$$.fragment),$U=u(),gt=o("p"),kU=a("Returns "),wj=o("code"),PU=a("True"),DU=a("/"),yj=o("code"),zU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),OU=a(" or isn\u2019t set)."),G0=u(),wt=o("h3"),xn=o("a"),bj=o("span"),f(jp.$$.fragment),TU=u(),Ej=o("span"),AU=a("Custom DeepSpeed ZeRO Inference"),L0=u(),Rn=o("p"),SU=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Qc=o("a"),CU=a("Trainer"),xU=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),M0=u(),eh=o("p"),RU=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),Z0=u(),sh=o("p"),IU=a("The example has copious notes and is self-documenting."),N0=u(),th=o("p"),UU=a("Make sure to:"),H0=u(),In=o("ol"),qj=o("li"),GU=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),LU=u(),$j=o("li"),MU=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),B0=u(),f(gp.$$.fragment),W0=u(),Un=o("p"),ZU=a("Let\u2019s save it as "),kj=o("code"),NU=a("t0.py"),HU=a(" and run it:"),F0=u(),f(wp.$$.fragment),V0=u(),ah=o("p"),BU=a("This was a very basic example and you will want to adapt it to your needs."),Y0=u(),yt=o("h2"),Gn=o("a"),Pj=o("span"),f(yp.$$.fragment),WU=u(),Dj=o("span"),FU=a("Main DeepSpeed Resources"),K0=u(),ve=o("ul"),zj=o("li"),bp=o("a"),VU=a("Project\u2019s github"),YU=u(),Oj=o("li"),Ep=o("a"),KU=a("Usage docs"),JU=u(),Tj=o("li"),qp=o("a"),XU=a("API docs"),QU=u(),Aj=o("li"),$p=o("a"),eG=a("Blog posts"),J0=u(),nh=o("p"),sG=a("Papers:"),X0=u(),gs=o("ul"),Sj=o("li"),kp=o("a"),tG=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),aG=u(),Cj=o("li"),Pp=o("a"),nG=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),oG=u(),xj=o("li"),Dp=o("a"),lG=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Q0=u(),ws=o("p"),rG=a("Finally, please, remember that, HuggingFace "),oh=o("a"),pG=a("Trainer"),iG=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),zp=o("a"),uG=a("DeepSpeed GitHub"),cG=a("."),this.h()},l(e){const p=SK('[data-svelte="svelte-1phssyn"]',document.head);y=l(p,"META",{name:!0,content:!0}),p.forEach(t),z=c(e),b=l(e,"H1",{class:!0});var Op=r(b);q=l(Op,"A",{id:!0,class:!0,href:!0});var Rj=r(q);ee=l(Rj,"SPAN",{});var Ij=r(ee);d(O.$$.fragment,Ij),Ij.forEach(t),Rj.forEach(t),x=c(Op),se=l(Op,"SPAN",{});var jG=r(se);R=n(jG,"DeepSpeed Integration"),jG.forEach(t),Op.forEach(t),ae=c(e),C=l(e,"P",{});var Uj=r(C);E=l(Uj,"A",{href:!0,rel:!0});var gG=r(E);$=n(gG,"DeepSpeed"),gG.forEach(t),qs=n(Uj," implements everything described in the "),V=l(Uj,"A",{href:!0,rel:!0});var wG=r(V);$s=n(wG,"ZeRO paper"),wG.forEach(t),R$=n(Uj,". Currently it provides full support for:"),Uj.forEach(t),Nj=c(e),I=l(e,"OL",{});var je=r(I);ef=l(je,"LI",{});var yG=r(ef);I$=n(yG,"Optimizer state partitioning (ZeRO stage 1)"),yG.forEach(t),U$=c(je),sf=l(je,"LI",{});var bG=r(sf);G$=n(bG,"Gradient partitioning (ZeRO stage 2)"),bG.forEach(t),L$=c(je),tf=l(je,"LI",{});var EG=r(tf);M$=n(EG,"Parameter partitioning (ZeRO stage 3)"),EG.forEach(t),Z$=c(je),af=l(je,"LI",{});var qG=r(af);N$=n(qG,"Custom mixed precision training handling"),qG.forEach(t),H$=c(je),nf=l(je,"LI",{});var $G=r(nf);B$=n($G,"A range of fast CUDA-extension-based optimizers"),$G.forEach(t),W$=c(je),of=l(je,"LI",{});var kG=r(of);F$=n(kG,"ZeRO-Offload to CPU and NVMe"),kG.forEach(t),je.forEach(t),Hj=c(e),Se=l(e,"P",{});var lh=r(Se);V$=n(lh,"ZeRO-Offload has its own dedicated paper: "),to=l(lh,"A",{href:!0,rel:!0});var PG=r(to);Y$=n(PG,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),PG.forEach(t),K$=n(lh,". And NVMe-support is described in the paper "),ao=l(lh,"A",{href:!0,rel:!0});var DG=r(ao);J$=n(DG,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),DG.forEach(t),X$=n(lh,"."),lh.forEach(t),Bj=c(e),Ip=l(e,"P",{});var zG=r(Ip);Q$=n(zG,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),zG.forEach(t),Wj=c(e),Up=l(e,"P",{});var OG=r(Up);e6=n(OG,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),OG.forEach(t),Fj=c(e),Et=l(e,"P",{});var sE=r(Et);s6=n(sE,"\u{1F917} Transformers integrates "),no=l(sE,"A",{href:!0,rel:!0});var TG=r(no);t6=n(TG,"DeepSpeed"),TG.forEach(t),a6=n(sE," via 2 options:"),sE.forEach(t),Vj=c(e),qt=l(e,"OL",{});var tE=r(qt);oo=l(tE,"LI",{});var aE=r(oo);n6=n(aE,"Integration of the core DeepSpeed features via "),Gp=l(aE,"A",{href:!0});var AG=r(Gp);o6=n(AG,"Trainer"),AG.forEach(t),l6=n(aE,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),aE.forEach(t),r6=c(tE),Y=l(tE,"LI",{});var ge=r(Y);p6=n(ge,"If you don\u2019t use "),Lp=l(ge,"A",{href:!0});var SG=r(Lp);i6=n(SG,"Trainer"),SG.forEach(t),u6=n(ge,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),lf=l(ge,"CODE",{});var CG=r(lf);c6=n(CG,"from_pretrained"),CG.forEach(t),h6=n(ge," and "),rf=l(ge,"CODE",{});var xG=r(rf);f6=n(xG,"from_config"),xG.forEach(t),d6=n(ge,` include integration of essential
parts of DeepSpeed like `),pf=l(ge,"CODE",{});var RG=r(pf);m6=n(RG,"zero.Init"),RG.forEach(t),_6=n(ge,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Mp=l(ge,"A",{href:!0});var IG=r(Mp);v6=n(IG,"deepspeed-non-trainer-integration"),IG.forEach(t),j6=n(ge,"."),ge.forEach(t),tE.forEach(t),Yj=c(e),Zp=l(e,"P",{});var UG=r(Zp);g6=n(UG,"What is integrated:"),UG.forEach(t),Kj=c(e),Np=l(e,"P",{});var GG=r(Np);w6=n(GG,"Training:"),GG.forEach(t),Jj=c(e),Hp=l(e,"OL",{});var LG=r(Hp);uf=l(LG,"LI",{});var MG=r(uf);y6=n(MG,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),MG.forEach(t),LG.forEach(t),Xj=c(e),Bp=l(e,"P",{});var ZG=r(Bp);b6=n(ZG,"Inference:"),ZG.forEach(t),Qj=c(e),Wp=l(e,"OL",{});var NG=r(Wp);lo=l(NG,"LI",{});var nE=r(lo);E6=n(nE,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Fp=l(nE,"A",{href:!0});var HG=r(Fp);q6=n(HG,"deepspeed-zero-inference"),HG.forEach(t),$6=n(nE,"."),nE.forEach(t),NG.forEach(t),eg=c(e),Vp=l(e,"P",{});var BG=r(Vp);k6=n(BG,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),BG.forEach(t),sg=c(e),Yp=l(e,"A",{id:!0}),r(Yp).forEach(t),tg=c(e),ks=l(e,"H2",{class:!0});var oE=r(ks);$t=l(oE,"A",{id:!0,class:!0,href:!0});var WG=r($t);cf=l(WG,"SPAN",{});var FG=r(cf);d(ro.$$.fragment,FG),FG.forEach(t),WG.forEach(t),P6=c(oE),hf=l(oE,"SPAN",{});var VG=r(hf);D6=n(VG,"Trainer Deepspeed Integration"),VG.forEach(t),oE.forEach(t),ag=c(e),Kp=l(e,"A",{id:!0}),r(Kp).forEach(t),ng=c(e),Ps=l(e,"H3",{class:!0});var lE=r(Ps);kt=l(lE,"A",{id:!0,class:!0,href:!0});var YG=r(kt);ff=l(YG,"SPAN",{});var KG=r(ff);d(po.$$.fragment,KG),KG.forEach(t),YG.forEach(t),z6=c(lE),df=l(lE,"SPAN",{});var JG=r(df);O6=n(JG,"Installation"),JG.forEach(t),lE.forEach(t),og=c(e),Jp=l(e,"P",{});var XG=r(Jp);T6=n(XG,"Install the library via pypi:"),XG.forEach(t),lg=c(e),d(io.$$.fragment,e),rg=c(e),Ce=l(e,"P",{});var rh=r(Ce);A6=n(rh,"or via "),mf=l(rh,"CODE",{});var QG=r(mf);S6=n(QG,"transformers"),QG.forEach(t),C6=n(rh,"\u2019 "),_f=l(rh,"CODE",{});var eL=r(_f);x6=n(eL,"extras"),eL.forEach(t),R6=n(rh,":"),rh.forEach(t),pg=c(e),d(uo.$$.fragment,e),ig=c(e),xe=l(e,"P",{});var ph=r(xe);I6=n(ph,"or find more details on "),co=l(ph,"A",{href:!0,rel:!0});var sL=r(co);U6=n(sL,"the DeepSpeed\u2019s GitHub page"),sL.forEach(t),G6=n(ph,` and
`),ho=l(ph,"A",{href:!0,rel:!0});var tL=r(ho);L6=n(tL,"advanced install"),tL.forEach(t),M6=n(ph,"."),ph.forEach(t),ug=c(e),Pt=l(e,"P",{});var rE=r(Pt);Z6=n(rE,"If you\u2019re still struggling with the build, first make sure to read "),Xp=l(rE,"A",{href:!0});var aL=r(Xp);N6=n(aL,"zero-install-notes"),aL.forEach(t),H6=n(rE,"."),rE.forEach(t),cg=c(e),Qp=l(e,"P",{});var nL=r(Qp);B6=n(nL,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),nL.forEach(t),hg=c(e),ei=l(e,"P",{});var oL=r(ei);W6=n(oL,"To make a local build for DeepSpeed:"),oL.forEach(t),fg=c(e),d(fo.$$.fragment,e),dg=c(e),Re=l(e,"P",{});var ih=r(Re);F6=n(ih,"If you intend to use NVMe offload you will also need to include "),vf=l(ih,"CODE",{});var lL=r(vf);V6=n(lL,"DS_BUILD_AIO=1"),lL.forEach(t),Y6=n(ih,` in the instructions above (and also
install `),jf=l(ih,"EM",{});var rL=r(jf);K6=n(rL,"libaio-dev"),rL.forEach(t),J6=n(ih," system-wide)."),ih.forEach(t),mg=c(e),Dt=l(e,"P",{});var pE=r(Dt);X6=n(pE,"Edit "),gf=l(pE,"CODE",{});var pL=r(gf);Q6=n(pL,"TORCH_CUDA_ARCH_LIST"),pL.forEach(t),e4=n(pE,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),pE.forEach(t),_g=c(e),d(mo.$$.fragment,e),vg=c(e),Pe=l(e,"P",{});var Tp=r(Pe);s4=n(Tp,"So if you get "),wf=l(Tp,"CODE",{});var iL=r(wf);t4=n(iL,"8, 6"),iL.forEach(t),a4=n(Tp,", then use "),yf=l(Tp,"CODE",{});var uL=r(yf);n4=n(uL,'TORCH_CUDA_ARCH_LIST="8.6"'),uL.forEach(t),o4=n(Tp,`. If you have multiple different cards, you can list all
of them like so `),bf=l(Tp,"CODE",{});var cL=r(bf);l4=n(cL,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),cL.forEach(t),Tp.forEach(t),jg=c(e),si=l(e,"P",{});var hL=r(si);r4=n(hL,"If you need to use the same setup on multiple machines, make a binary wheel:"),hL.forEach(t),gg=c(e),d(_o.$$.fragment,e),wg=c(e),Ie=l(e,"P",{});var uh=r(Ie);p4=n(uh,"it will generate something like "),Ef=l(uh,"CODE",{});var fL=r(Ef);i4=n(fL,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),fL.forEach(t),u4=n(uh,` which now you can install
as `),qf=l(uh,"CODE",{});var dL=r(qf);c4=n(dL,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),dL.forEach(t),h4=n(uh," locally or on any other machine."),uh.forEach(t),yg=c(e),zt=l(e,"P",{});var iE=r(zt);f4=n(iE,"Again, remember to ensure to adjust "),$f=l(iE,"CODE",{});var mL=r($f);d4=n(mL,"TORCH_CUDA_ARCH_LIST"),mL.forEach(t),m4=n(iE," to the target architectures."),iE.forEach(t),bg=c(e),Ue=l(e,"P",{});var ch=r(Ue);_4=n(ch,"You can find the complete list of NVIDIA GPUs and their corresponding "),kf=l(ch,"STRONG",{});var _L=r(kf);v4=n(_L,"Compute Capabilities"),_L.forEach(t),j4=n(ch,` (same as arch in this
context) `),vo=l(ch,"A",{href:!0,rel:!0});var vL=r(vo);g4=n(vL,"here"),vL.forEach(t),w4=n(ch,"."),ch.forEach(t),Eg=c(e),ti=l(e,"P",{});var jL=r(ti);y4=n(jL,"You can check the archs pytorch was built with using:"),jL.forEach(t),qg=c(e),d(jo.$$.fragment,e),$g=c(e),ai=l(e,"P",{});var gL=r(ai);b4=n(gL,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),gL.forEach(t),kg=c(e),d(go.$$.fragment,e),Pg=c(e),ni=l(e,"P",{});var wL=r(ni);E4=n(wL,"If the output is:"),wL.forEach(t),Dg=c(e),d(wo.$$.fragment,e),zg=c(e),Ot=l(e,"P",{});var uE=r(Ot);q4=n(uE,"then you know that this card\u2019s arch is "),Pf=l(uE,"CODE",{});var yL=r(Pf);$4=n(yL,"8.6"),yL.forEach(t),k4=n(uE,"."),uE.forEach(t),Og=c(e),Tt=l(e,"P",{});var cE=r(Tt);P4=n(cE,"You can also leave "),Df=l(cE,"CODE",{});var bL=r(Df);D4=n(bL,"TORCH_CUDA_ARCH_LIST"),bL.forEach(t),z4=n(cE,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),cE.forEach(t),Tg=c(e),At=l(e,"P",{});var hE=r(At);O4=n(hE,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),yo=l(hE,"A",{href:!0,rel:!0});var EL=r(yo);T4=n(EL,"Deepspeed"),EL.forEach(t),A4=n(hE,","),hE.forEach(t),Ag=c(e),oi=l(e,"A",{id:!0}),r(oi).forEach(t),Sg=c(e),Ds=l(e,"H3",{class:!0});var fE=r(Ds);St=l(fE,"A",{id:!0,class:!0,href:!0});var qL=r(St);zf=l(qL,"SPAN",{});var $L=r(zf);d(bo.$$.fragment,$L),$L.forEach(t),qL.forEach(t),S4=c(fE),Of=l(fE,"SPAN",{});var kL=r(Of);C4=n(kL,"Deployment with multiple GPUs"),kL.forEach(t),fE.forEach(t),Cg=c(e),Ct=l(e,"P",{});var dE=r(Ct);x4=n(dE,"To deploy this feature with multiple GPUs adjust the "),li=l(dE,"A",{href:!0});var PL=r(li);R4=n(PL,"Trainer"),PL.forEach(t),I4=n(dE,` command line arguments as
following:`),dE.forEach(t),xg=c(e),xt=l(e,"OL",{});var mE=r(xt);zs=l(mE,"LI",{});var hh=r(zs);U4=n(hh,"replace "),Tf=l(hh,"CODE",{});var DL=r(Tf);G4=n(DL,"python -m torch.distributed.launch"),DL.forEach(t),L4=n(hh," with "),Af=l(hh,"CODE",{});var zL=r(Af);M4=n(zL,"deepspeed"),zL.forEach(t),Z4=n(hh,"."),hh.forEach(t),N4=c(mE),De=l(mE,"LI",{});var Ln=r(De);H4=n(Ln,"add a new argument "),Sf=l(Ln,"CODE",{});var OL=r(Sf);B4=n(OL,"--deepspeed ds_config.json"),OL.forEach(t),W4=n(Ln,", where "),Cf=l(Ln,"CODE",{});var TL=r(Cf);F4=n(TL,"ds_config.json"),TL.forEach(t),V4=n(Ln,` is the DeepSpeed configuration file as
documented `),Eo=l(Ln,"A",{href:!0,rel:!0});var AL=r(Eo);Y4=n(AL,"here"),AL.forEach(t),K4=n(Ln,". The file naming is up to you."),Ln.forEach(t),mE.forEach(t),Rg=c(e),ri=l(e,"P",{});var SL=r(ri);J4=n(SL,"Therefore, if your original command line looked as follows:"),SL.forEach(t),Ig=c(e),d(qo.$$.fragment,e),Ug=c(e),pi=l(e,"P",{});var CL=r(pi);X4=n(CL,"Now it should be:"),CL.forEach(t),Gg=c(e),d($o.$$.fragment,e),Lg=c(e),U=l(e,"P",{});var we=r(U);Q4=n(we,"Unlike, "),xf=l(we,"CODE",{});var xL=r(xf);e5=n(xL,"torch.distributed.launch"),xL.forEach(t),s5=n(we," where you have to specify how many GPUs to use with "),Rf=l(we,"CODE",{});var RL=r(Rf);t5=n(RL,"--nproc_per_node"),RL.forEach(t),a5=n(we,`, with the
`),If=l(we,"CODE",{});var IL=r(If);n5=n(IL,"deepspeed"),IL.forEach(t),o5=n(we," launcher you don\u2019t have to use the corresponding "),Uf=l(we,"CODE",{});var UL=r(Uf);l5=n(UL,"--num_gpus"),UL.forEach(t),r5=n(we,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),ko=l(we,"A",{href:!0,rel:!0});var GL=r(ko);p5=n(GL,"here"),GL.forEach(t),i5=n(we,"."),we.forEach(t),Mg=c(e),ne=l(e,"P",{});var Mn=r(ne);u5=n(Mn,"In fact, you can continue using "),Gf=l(Mn,"CODE",{});var LL=r(Gf);c5=n(LL,"-m torch.distributed.launch"),LL.forEach(t),h5=n(Mn,` with DeepSpeed as long as you don\u2019t need to use
`),Lf=l(Mn,"CODE",{});var ML=r(Lf);f5=n(ML,"deepspeed"),ML.forEach(t),d5=n(Mn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Mf=l(Mn,"CODE",{});var ZL=r(Mf);m5=n(ZL,"deepspeed"),ZL.forEach(t),_5=n(Mn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Mn.forEach(t),Zg=c(e),Rt=l(e,"P",{});var _E=r(Rt);v5=n(_E,"Here is an example of running "),Zf=l(_E,"CODE",{});var NL=r(Zf);j5=n(NL,"run_translation.py"),NL.forEach(t),g5=n(_E," under DeepSpeed deploying all available GPUs:"),_E.forEach(t),Ng=c(e),d(Po.$$.fragment,e),Hg=c(e),It=l(e,"P",{});var vE=r(It);w5=n(vE,"Note that in the DeepSpeed documentation you are likely to see "),Nf=l(vE,"CODE",{});var HL=r(Nf);y5=n(HL,"--deepspeed --deepspeed_config ds_config.json"),HL.forEach(t),b5=n(vE,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),vE.forEach(t),Bg=c(e),Ut=l(e,"P",{});var jE=r(Ut);E5=n(jE,"For some practical usage examples, please, see this "),Do=l(jE,"A",{href:!0,rel:!0});var BL=r(Do);q5=n(BL,"post"),BL.forEach(t),$5=n(jE,"."),jE.forEach(t),Wg=c(e),ii=l(e,"A",{id:!0}),r(ii).forEach(t),Fg=c(e),Os=l(e,"H3",{class:!0});var gE=r(Os);Gt=l(gE,"A",{id:!0,class:!0,href:!0});var WL=r(Gt);Hf=l(WL,"SPAN",{});var FL=r(Hf);d(zo.$$.fragment,FL),FL.forEach(t),WL.forEach(t),k5=c(gE),Bf=l(gE,"SPAN",{});var VL=r(Bf);P5=n(VL,"Deployment with one GPU"),VL.forEach(t),gE.forEach(t),Vg=c(e),Lt=l(e,"P",{});var wE=r(Lt);D5=n(wE,"To deploy DeepSpeed with one GPU adjust the "),ui=l(wE,"A",{href:!0});var YL=r(ui);z5=n(YL,"Trainer"),YL.forEach(t),O5=n(wE," command line arguments as follows:"),wE.forEach(t),Yg=c(e),d(Oo.$$.fragment,e),Kg=c(e),Ge=l(e,"P",{});var fh=r(Ge);T5=n(fh,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Wf=l(fh,"CODE",{});var KL=r(Wf);A5=n(KL,"--num_gpus=1"),KL.forEach(t),S5=n(fh,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),To=l(fh,"A",{href:!0,rel:!0});var JL=r(To);C5=n(JL,"documentation"),JL.forEach(t),x5=n(fh," discusses the launcher options."),fh.forEach(t),Jg=c(e),ci=l(e,"P",{});var XL=r(ci);R5=n(XL,"Why would you want to use DeepSpeed with just one GPU?"),XL.forEach(t),Xg=c(e),Mt=l(e,"OL",{});var yE=r(Mt);Ff=l(yE,"LI",{});var QL=r(Ff);I5=n(QL,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),QL.forEach(t),U5=c(yE),Vf=l(yE,"LI",{});var eM=r(Vf);G5=n(eM,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),eM.forEach(t),yE.forEach(t),Qg=c(e),hi=l(e,"P",{});var sM=r(hi);L5=n(sM,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),sM.forEach(t),ew=c(e),d(Ao.$$.fragment,e),sw=c(e),fi=l(e,"P",{});var tM=r(fi);M5=n(tM,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),tM.forEach(t),tw=c(e),Zt=l(e,"P",{});var bE=r(Zt);Z5=n(bE,"For a practical usage example of this type of deployment, please, see this "),So=l(bE,"A",{href:!0,rel:!0});var aM=r(So);N5=n(aM,"post"),aM.forEach(t),H5=n(bE,"."),bE.forEach(t),aw=c(e),di=l(e,"P",{});var nM=r(di);B5=n(nM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),nM.forEach(t),nw=c(e),mi=l(e,"P",{});var oM=r(mi);W5=n(oM,"Notes:"),oM.forEach(t),ow=c(e),_i=l(e,"UL",{});var lM=r(_i);Ts=l(lM,"LI",{});var dh=r(Ts);Co=l(dh,"P",{});var EE=r(Co);F5=n(EE,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Yf=l(EE,"CODE",{});var rM=r(Yf);V5=n(rM,"CUDA_VISIBLE_DEVICES"),rM.forEach(t),Y5=n(EE,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),EE.forEach(t),K5=c(dh),d(xo.$$.fragment,dh),J5=c(dh),Kf=l(dh,"P",{});var pM=r(Kf);X5=n(pM,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),pM.forEach(t),dh.forEach(t),lM.forEach(t),lw=c(e),vi=l(e,"A",{id:!0}),r(vi).forEach(t),rw=c(e),As=l(e,"H3",{class:!0});var qE=r(As);Nt=l(qE,"A",{id:!0,class:!0,href:!0});var iM=r(Nt);Jf=l(iM,"SPAN",{});var uM=r(Jf);d(Ro.$$.fragment,uM),uM.forEach(t),iM.forEach(t),Q5=c(qE),Xf=l(qE,"SPAN",{});var cM=r(Xf);e8=n(cM,"Deployment in Notebooks"),cM.forEach(t),qE.forEach(t),pw=c(e),Ht=l(e,"P",{});var $E=r(Ht);s8=n($E,"The problem with running notebook cells as a script is that there is no normal "),Qf=l($E,"CODE",{});var hM=r(Qf);t8=n(hM,"deepspeed"),hM.forEach(t),a8=n($E,` launcher to rely on, so
under certain setups we have to emulate it.`),$E.forEach(t),iw=c(e),ji=l(e,"P",{});var fM=r(ji);n8=n(fM,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),fM.forEach(t),uw=c(e),d(Io.$$.fragment,e),cw=c(e),Bt=l(e,"P",{});var kE=r(Bt);o8=n(kE,"Note: "),ed=l(kE,"CODE",{});var dM=r(ed);l8=n(dM,"..."),dM.forEach(t),r8=n(kE," stands for the normal arguments that you\u2019d pass to the functions."),kE.forEach(t),hw=c(e),gi=l(e,"P",{});var mM=r(gi);p8=n(mM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),mM.forEach(t),fw=c(e),wi=l(e,"P",{});var _M=r(wi);i8=n(_M,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),_M.forEach(t),dw=c(e),d(Uo.$$.fragment,e),mw=c(e),Le=l(e,"P",{});var mh=r(Le);u8=n(mh,"If the training script is in a normal file and not in the notebook cells, you can launch "),sd=l(mh,"CODE",{});var vM=r(sd);c8=n(vM,"deepspeed"),vM.forEach(t),h8=n(mh,` normally via
shell from a cell. For example, to use `),td=l(mh,"CODE",{});var jM=r(td);f8=n(jM,"run_translation.py"),jM.forEach(t),d8=n(mh," you would launch it with:"),mh.forEach(t),_w=c(e),d(Go.$$.fragment,e),vw=c(e),Wt=l(e,"P",{});var PE=r(Wt);m8=n(PE,"or with "),ad=l(PE,"CODE",{});var gM=r(ad);_8=n(gM,"%%bash"),gM.forEach(t),v8=n(PE," magic, where you can write a multi-line code for the shell program to run:"),PE.forEach(t),jw=c(e),d(Lo.$$.fragment,e),gw=c(e),yi=l(e,"P",{});var wM=r(yi);j8=n(wM,"In such case you don\u2019t need any of the code presented at the beginning of this section."),wM.forEach(t),ww=c(e),Ft=l(e,"P",{});var DE=r(Ft);g8=n(DE,"Note: While "),nd=l(DE,"CODE",{});var yM=r(nd);w8=n(yM,"%%bash"),yM.forEach(t),y8=n(DE,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),DE.forEach(t),yw=c(e),bi=l(e,"A",{id:!0}),r(bi).forEach(t),bw=c(e),Ss=l(e,"H3",{class:!0});var zE=r(Ss);Vt=l(zE,"A",{id:!0,class:!0,href:!0});var bM=r(Vt);od=l(bM,"SPAN",{});var EM=r(od);d(Mo.$$.fragment,EM),EM.forEach(t),bM.forEach(t),b8=c(zE),ld=l(zE,"SPAN",{});var qM=r(ld);E8=n(qM,"Configuration"),qM.forEach(t),zE.forEach(t),Ew=c(e),Yt=l(e,"P",{});var OE=r(Yt);q8=n(OE,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Zo=l(OE,"A",{href:!0,rel:!0});var $M=r(Zo);$8=n($M,"following documentation"),$M.forEach(t),k8=n(OE,"."),OE.forEach(t),qw=c(e),Kt=l(e,"P",{});var TE=r(Kt);P8=n(TE,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),No=l(TE,"A",{href:!0,rel:!0});var kM=r(No);D8=n(kM,`the DeepSpeedExamples
repo`),kM.forEach(t),z8=n(TE,":"),TE.forEach(t),$w=c(e),d(Ho.$$.fragment,e),kw=c(e),Jt=l(e,"P",{});var AE=r(Jt);O8=n(AE,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),rd=l(AE,"CODE",{});var PM=r(rd);T8=n(PM,".json"),PM.forEach(t),A8=n(AE," files with:"),AE.forEach(t),Pw=c(e),d(Bo.$$.fragment,e),Dw=c(e),Xt=l(e,"P",{});var SE=r(Xt);S8=n(SE,"Some more examples are to be found in the "),Wo=l(SE,"A",{href:!0,rel:!0});var DM=r(Wo);C8=n(DM,"main repo"),DM.forEach(t),x8=n(SE," as well."),SE.forEach(t),zw=c(e),Ei=l(e,"P",{});var zM=r(Ei);R8=n(zM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),zM.forEach(t),Ow=c(e),oe=l(e,"P",{});var Zn=r(oe);I8=n(Zn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),pd=l(Zn,"CODE",{});var OM=r(pd);U8=n(OM,"AdamW"),OM.forEach(t),G8=n(Zn," optimizer and "),id=l(Zn,"CODE",{});var TM=r(id);L8=n(TM,"WarmupLR"),TM.forEach(t),M8=n(Zn,` scheduler and will enable mixed
precision training if `),ud=l(Zn,"CODE",{});var AM=r(ud);Z8=n(AM,"--fp16"),AM.forEach(t),N8=n(Zn," is passed:"),Zn.forEach(t),Tw=c(e),d(Fo.$$.fragment,e),Aw=c(e),Qt=l(e,"P",{});var CE=r(Qt);H8=n(CE,"When you execute the program, DeepSpeed will log the configuration it received from the "),qi=l(CE,"A",{href:!0});var SM=r(qi);B8=n(SM,"Trainer"),SM.forEach(t),W8=n(CE,`
to the console, so you can see exactly what was the final configuration passed to it.`),CE.forEach(t),Sw=c(e),$i=l(e,"A",{id:!0}),r($i).forEach(t),Cw=c(e),Cs=l(e,"H3",{class:!0});var xE=r(Cs);ea=l(xE,"A",{id:!0,class:!0,href:!0});var CM=r(ea);cd=l(CM,"SPAN",{});var xM=r(cd);d(Vo.$$.fragment,xM),xM.forEach(t),CM.forEach(t),F8=c(xE),hd=l(xE,"SPAN",{});var RM=r(hd);V8=n(RM,"Passing Configuration"),RM.forEach(t),xE.forEach(t),xw=c(e),G=l(e,"P",{});var ye=r(G);Y8=n(ye,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),ki=l(ye,"A",{href:!0});var IM=r(ki);K8=n(IM,"Trainer"),IM.forEach(t),J8=n(ye," via "),Pi=l(ye,"A",{href:!0});var UM=r(Pi);X8=n(UM,"TrainingArguments"),UM.forEach(t),Q8=n(ye," then for the "),fd=l(ye,"CODE",{});var GM=r(fd);ek=n(GM,"deepspeed"),GM.forEach(t),sk=n(ye,` argument you can
pass a nested `),dd=l(ye,"CODE",{});var LM=r(dd);tk=n(LM,"dict"),LM.forEach(t),ak=n(ye,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Di=l(ye,"A",{href:!0});var MM=r(Di);nk=n(MM,"TrainingArguments"),MM.forEach(t),ok=n(ye,"."),ye.forEach(t),Rw=c(e),zi=l(e,"P",{});var ZM=r(zi);lk=n(ZM,"To summarize you can do:"),ZM.forEach(t),Iw=c(e),d(Yo.$$.fragment,e),Uw=c(e),Oi=l(e,"P",{});var NM=r(Oi);rk=n(NM,"or:"),NM.forEach(t),Gw=c(e),d(Ko.$$.fragment,e),Lw=c(e),Ti=l(e,"A",{id:!0}),r(Ti).forEach(t),Mw=c(e),xs=l(e,"H3",{class:!0});var RE=r(xs);sa=l(RE,"A",{id:!0,class:!0,href:!0});var HM=r(sa);md=l(HM,"SPAN",{});var BM=r(md);d(Jo.$$.fragment,BM),BM.forEach(t),HM.forEach(t),pk=c(RE),_d=l(RE,"SPAN",{});var WM=r(_d);ik=n(WM,"Shared Configuration"),WM.forEach(t),RE.forEach(t),Zw=c(e),d(ta.$$.fragment,e),Nw=c(e),Me=l(e,"P",{});var _h=r(Me);uk=n(_h,"Some configuration values are required by both the "),Ai=l(_h,"A",{href:!0});var FM=r(Ai);ck=n(FM,"Trainer"),FM.forEach(t),hk=n(_h,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Si=l(_h,"A",{href:!0});var VM=r(Si);fk=n(VM,"Trainer"),VM.forEach(t),dk=n(_h," command line arguments."),_h.forEach(t),Hw=c(e),aa=l(e,"P",{});var IE=r(aa);mk=n(IE,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Ci=l(IE,"A",{href:!0});var YM=r(Ci);_k=n(YM,"Trainer"),YM.forEach(t),vk=n(IE,` do the majority
of configuration for you.`),IE.forEach(t),Bw=c(e),Ze=l(e,"P",{});var vh=r(Ze);jk=n(vh,"Therefore, in the rest of this guide you will find a special configuration value: "),vd=l(vh,"CODE",{});var KM=r(vd);gk=n(KM,"auto"),KM.forEach(t),wk=n(vh,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),xi=l(vh,"A",{href:!0});var JM=r(xi);yk=n(JM,"Trainer"),JM.forEach(t),bk=n(vh,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),vh.forEach(t),Ww=c(e),Ri=l(e,"P",{});var XM=r(Ri);Ek=n(XM,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),XM.forEach(t),Fw=c(e),na=l(e,"P",{});var UE=r(na);qk=n(UE,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ii=l(UE,"A",{href:!0});var QM=r(Ii);$k=n(QM,"TrainingArguments"),QM.forEach(t),kk=n(UE," based on that. The steps are:"),UE.forEach(t),Vw=c(e),oa=l(e,"OL",{});var GE=r(oa);jd=l(GE,"LI",{});var eZ=r(jd);Pk=n(eZ,"Create or load the DeepSpeed configuration to be used as a master configuration"),eZ.forEach(t),Dk=c(GE),Xo=l(GE,"LI",{});var LE=r(Xo);zk=n(LE,"Create the "),Ui=l(LE,"A",{href:!0});var sZ=r(Ui);Ok=n(sZ,"TrainingArguments"),sZ.forEach(t),Tk=n(LE," object based on these values"),LE.forEach(t),GE.forEach(t),Yw=c(e),le=l(e,"P",{});var Nn=r(le);Ak=n(Nn,"Do note that some values, such as "),gd=l(Nn,"CODE",{});var tZ=r(gd);Sk=n(tZ,"scheduler.params.total_num_steps"),tZ.forEach(t),Ck=n(Nn,` are calculated by
`),Gi=l(Nn,"A",{href:!0});var aZ=r(Gi);xk=n(aZ,"Trainer"),aZ.forEach(t),Rk=n(Nn," during "),wd=l(Nn,"CODE",{});var nZ=r(wd);Ik=n(nZ,"train"),nZ.forEach(t),Uk=n(Nn,", but you can of course do the math yourself."),Nn.forEach(t),Kw=c(e),Li=l(e,"A",{id:!0}),r(Li).forEach(t),Jw=c(e),Rs=l(e,"H3",{class:!0});var ME=r(Rs);la=l(ME,"A",{id:!0,class:!0,href:!0});var oZ=r(la);yd=l(oZ,"SPAN",{});var lZ=r(yd);d(Qo.$$.fragment,lZ),lZ.forEach(t),oZ.forEach(t),Gk=c(ME),bd=l(ME,"SPAN",{});var rZ=r(bd);Lk=n(rZ,"ZeRO"),rZ.forEach(t),ME.forEach(t),Xw=c(e),el=l(e,"P",{});var hG=r(el);sl=l(hG,"A",{href:!0,rel:!0});var pZ=r(sl);Mk=n(pZ,"Zero Redundancy Optimizer (ZeRO)"),pZ.forEach(t),Zk=n(hG,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),hG.forEach(t),Qw=c(e),Ne=l(e,"P",{});var jh=r(Ne);Nk=n(jh,"The "),Ed=l(jh,"CODE",{});var iZ=r(Ed);Hk=n(iZ,"zero_optimization"),iZ.forEach(t),Bk=n(jh," section of the configuration file is the most important part ("),tl=l(jh,"A",{href:!0,rel:!0});var uZ=r(tl);Wk=n(uZ,"docs"),uZ.forEach(t),Fk=n(jh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),jh.forEach(t),ey=c(e),ra=l(e,"P",{});var ZE=r(ra);Vk=n(ZE,"This section has to be configured exclusively via DeepSpeed configuration - the "),Mi=l(ZE,"A",{href:!0});var cZ=r(Mi);Yk=n(cZ,"Trainer"),cZ.forEach(t),Kk=n(ZE,` provides
no equivalent command line arguments.`),ZE.forEach(t),sy=c(e),Zi=l(e,"P",{});var hZ=r(Zi);Jk=n(hZ,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),hZ.forEach(t),ty=c(e),Ni=l(e,"A",{id:!0}),r(Ni).forEach(t),ay=c(e),Is=l(e,"H4",{class:!0});var NE=r(Is);pa=l(NE,"A",{id:!0,class:!0,href:!0});var fZ=r(pa);qd=l(fZ,"SPAN",{});var dZ=r(qd);d(al.$$.fragment,dZ),dZ.forEach(t),fZ.forEach(t),Xk=c(NE),$d=l(NE,"SPAN",{});var mZ=r($d);Qk=n(mZ,"ZeRO-2 Config"),mZ.forEach(t),NE.forEach(t),ny=c(e),Hi=l(e,"P",{});var _Z=r(Hi);e7=n(_Z,"The following is an example of configuration for ZeRO stage 2:"),_Z.forEach(t),oy=c(e),d(nl.$$.fragment,e),ly=c(e),Bi=l(e,"P",{});var vZ=r(Bi);kd=l(vZ,"STRONG",{});var jZ=r(kd);s7=n(jZ,"Performance tuning:"),jZ.forEach(t),vZ.forEach(t),ry=c(e),He=l(e,"UL",{});var gh=r(He);Us=l(gh,"LI",{});var wh=r(Us);t7=n(wh,"enabling "),Pd=l(wh,"CODE",{});var gZ=r(Pd);a7=n(gZ,"offload_optimizer"),gZ.forEach(t),n7=n(wh," should reduce GPU RAM usage (it requires "),Dd=l(wh,"CODE",{});var wZ=r(Dd);o7=n(wZ,'"stage": 2'),wZ.forEach(t),l7=n(wh,")"),wh.forEach(t),r7=c(gh),L=l(gh,"LI",{});var te=r(L);zd=l(te,"CODE",{});var yZ=r(zd);p7=n(yZ,'"overlap_comm": true'),yZ.forEach(t),i7=n(te," trades off increased GPU RAM usage to lower all-reduce latency. "),Od=l(te,"CODE",{});var bZ=r(Od);u7=n(bZ,"overlap_comm"),bZ.forEach(t),c7=n(te,` uses 4.5x
the `),Td=l(te,"CODE",{});var EZ=r(Td);h7=n(EZ,"allgather_bucket_size"),EZ.forEach(t),f7=n(te," and "),Ad=l(te,"CODE",{});var qZ=r(Ad);d7=n(qZ,"reduce_bucket_size"),qZ.forEach(t),m7=n(te,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Sd=l(te,"CODE",{});var $Z=r(Sd);_7=n($Z,"5e8 x 2Bytes x 2 x 4.5"),$Z.forEach(t),v7=n(te,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Cd=l(te,"CODE",{});var kZ=r(Cd);j7=n(kZ,"2e8"),kZ.forEach(t),g7=n(te,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),te.forEach(t),w7=c(gh),xd=l(gh,"LI",{});var PZ=r(xd);y7=n(PZ,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),PZ.forEach(t),gh.forEach(t),py=c(e),Be=l(e,"P",{});var yh=r(Be);b7=n(yh,"Additionally, "),Rd=l(yh,"CODE",{});var DZ=r(Rd);E7=n(DZ,"deepspeed==0.4.4"),DZ.forEach(t),q7=n(yh," added a new option "),Id=l(yh,"CODE",{});var zZ=r(Id);$7=n(zZ,"round_robin_gradients"),zZ.forEach(t),k7=n(yh," which you can enable with:"),yh.forEach(t),iy=c(e),d(ol.$$.fragment,e),uy=c(e),Wi=l(e,"P",{});var OZ=r(Wi);P7=n(OZ,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),OZ.forEach(t),cy=c(e),Fi=l(e,"A",{id:!0}),r(Fi).forEach(t),hy=c(e),Gs=l(e,"H4",{class:!0});var HE=r(Gs);ia=l(HE,"A",{id:!0,class:!0,href:!0});var TZ=r(ia);Ud=l(TZ,"SPAN",{});var AZ=r(Ud);d(ll.$$.fragment,AZ),AZ.forEach(t),TZ.forEach(t),D7=c(HE),Gd=l(HE,"SPAN",{});var SZ=r(Gd);z7=n(SZ,"ZeRO-3 Config"),SZ.forEach(t),HE.forEach(t),fy=c(e),Vi=l(e,"P",{});var CZ=r(Vi);O7=n(CZ,"The following is an example of configuration for ZeRO stage 3:"),CZ.forEach(t),dy=c(e),d(rl.$$.fragment,e),my=c(e),K=l(e,"P",{});var ys=r(K);T7=n(ys,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Ld=l(ys,"CODE",{});var xZ=r(Ld);A7=n(xZ,'"device": "cpu"'),xZ.forEach(t),S7=n(ys,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Md=l(ys,"CODE",{});var RZ=r(Md);C7=n(RZ,"none"),RZ.forEach(t),x7=n(ys," instead of "),Zd=l(ys,"CODE",{});var IZ=r(Zd);R7=n(IZ,"cpu"),IZ.forEach(t),I7=n(ys," for the "),Nd=l(ys,"CODE",{});var UZ=r(Nd);U7=n(UZ,"device"),UZ.forEach(t),G7=n(ys,` entry. Offloading to
NVMe is discussed further down.`),ys.forEach(t),_y=c(e),We=l(e,"P",{});var bh=r(We);L7=n(bh,"Pinned memory is enabled with "),Hd=l(bh,"CODE",{});var GZ=r(Hd);M7=n(GZ,"pin_memory"),GZ.forEach(t),Z7=n(bh," set to "),Bd=l(bh,"CODE",{});var LZ=r(Bd);N7=n(LZ,"true"),LZ.forEach(t),H7=n(bh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),bh.forEach(t),vy=c(e),Yi=l(e,"P",{});var MZ=r(Yi);Wd=l(MZ,"STRONG",{});var ZZ=r(Wd);B7=n(ZZ,"Performance tuning:"),ZZ.forEach(t),MZ.forEach(t),jy=c(e),ua=l(e,"UL",{});var BE=r(ua);pl=l(BE,"LI",{});var WE=r(pl);Fd=l(WE,"CODE",{});var NZ=r(Fd);W7=n(NZ,"stage3_max_live_parameters"),NZ.forEach(t),F7=n(WE,": "),Vd=l(WE,"CODE",{});var HZ=r(Vd);V7=n(HZ,"1e9"),HZ.forEach(t),WE.forEach(t),Y7=c(BE),il=l(BE,"LI",{});var FE=r(il);Yd=l(FE,"CODE",{});var BZ=r(Yd);K7=n(BZ,"stage3_max_reuse_distance"),BZ.forEach(t),J7=n(FE,": "),Kd=l(FE,"CODE",{});var WZ=r(Kd);X7=n(WZ,"1e9"),WZ.forEach(t),FE.forEach(t),BE.forEach(t),gy=c(e),M=l(e,"P",{});var be=r(M);Q7=n(be,"If hitting OOM reduce "),Jd=l(be,"CODE",{});var FZ=r(Jd);e9=n(FZ,"stage3_max_live_parameters"),FZ.forEach(t),s9=n(be," and "),Xd=l(be,"CODE",{});var VZ=r(Xd);t9=n(VZ,"stage3_max_reuse_distance"),VZ.forEach(t),a9=n(be,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Qd=l(be,"CODE",{});var YZ=r(Qd);n9=n(YZ,"1e9"),YZ.forEach(t),o9=n(be,` would consume ~2GB. The memory is shared by
`),em=l(be,"CODE",{});var KZ=r(em);l9=n(KZ,"stage3_max_live_parameters"),KZ.forEach(t),r9=n(be," and "),sm=l(be,"CODE",{});var JZ=r(sm);p9=n(JZ,"stage3_max_reuse_distance"),JZ.forEach(t),i9=n(be,", so it\u2019s not additive, it\u2019s just 2GB total."),be.forEach(t),wy=c(e),ze=l(e,"P",{});var Ap=r(ze);tm=l(Ap,"CODE",{});var XZ=r(tm);u9=n(XZ,"stage3_max_live_parameters"),XZ.forEach(t),c9=n(Ap,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),am=l(Ap,"CODE",{});var QZ=r(am);h9=n(QZ,"stage3_max_reuse_distance"),QZ.forEach(t),f9=n(Ap,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),nm=l(Ap,"CODE",{});var eN=r(nm);d9=n(eN,"stage3_max_reuse_distance"),eN.forEach(t),m9=n(Ap,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ap.forEach(t),yy=c(e),Ki=l(e,"P",{});var sN=r(Ki);_9=n(sN,"The following configuration values depend on the model\u2019s hidden size:"),sN.forEach(t),by=c(e),Fe=l(e,"UL",{});var Eh=r(Fe);ul=l(Eh,"LI",{});var VE=r(ul);om=l(VE,"CODE",{});var tN=r(om);v9=n(tN,"reduce_bucket_size"),tN.forEach(t),j9=n(VE,": "),lm=l(VE,"CODE",{});var aN=r(lm);g9=n(aN,"hidden_size*hidden_size"),aN.forEach(t),VE.forEach(t),w9=c(Eh),cl=l(Eh,"LI",{});var YE=r(cl);rm=l(YE,"CODE",{});var nN=r(rm);y9=n(nN,"stage3_prefetch_bucket_size"),nN.forEach(t),b9=n(YE,": "),pm=l(YE,"CODE",{});var oN=r(pm);E9=n(oN,"0.9 * hidden_size * hidden_size"),oN.forEach(t),YE.forEach(t),q9=c(Eh),hl=l(Eh,"LI",{});var KE=r(hl);im=l(KE,"CODE",{});var lN=r(im);$9=n(lN,"stage3_param_persistence_threshold"),lN.forEach(t),k9=n(KE,": "),um=l(KE,"CODE",{});var rN=r(um);P9=n(rN,"10 * hidden_size"),rN.forEach(t),KE.forEach(t),Eh.forEach(t),Ey=c(e),Ve=l(e,"P",{});var qh=r(Ve);D9=n(qh,"therefore set these values to "),cm=l(qh,"CODE",{});var pN=r(cm);z9=n(pN,"auto"),pN.forEach(t),O9=n(qh," and the "),Ji=l(qh,"A",{href:!0});var iN=r(Ji);T9=n(iN,"Trainer"),iN.forEach(t),A9=n(qh,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),qh.forEach(t),qy=c(e),fl=l(e,"P",{});var fG=r(fl);hm=l(fG,"CODE",{});var uN=r(hm);S9=n(uN,"stage3_gather_16bit_weights_on_model_save"),uN.forEach(t),C9=n(fG,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),fG.forEach(t),$y=c(e),re=l(e,"P",{});var Hn=r(re);x9=n(Hn,"If you\u2019re migrating from ZeRO-2 configuration note that "),fm=l(Hn,"CODE",{});var cN=r(fm);R9=n(cN,"allgather_partitions"),cN.forEach(t),I9=n(Hn,", "),dm=l(Hn,"CODE",{});var hN=r(dm);U9=n(hN,"allgather_bucket_size"),hN.forEach(t),G9=n(Hn,` and
`),mm=l(Hn,"CODE",{});var fN=r(mm);L9=n(fN,"reduce_scatter"),fN.forEach(t),M9=n(Hn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Hn.forEach(t),ky=c(e),Xi=l(e,"UL",{});var dN=r(Xi);dl=l(dN,"LI",{});var JE=r(dl);_m=l(JE,"CODE",{});var mN=r(_m);Z9=n(mN,"sub_group_size"),mN.forEach(t),N9=n(JE,": "),vm=l(JE,"CODE",{});var _N=r(vm);H9=n(_N,"1e9"),_N.forEach(t),JE.forEach(t),dN.forEach(t),Py=c(e),Oe=l(e,"P",{});var Sp=r(Oe);jm=l(Sp,"CODE",{});var vN=r(jm);B9=n(vN,"sub_group_size"),vN.forEach(t),W9=n(Sp,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),gm=l(Sp,"CODE",{});var jN=r(gm);F9=n(jN,"sub_group_size"),jN.forEach(t),V9=n(Sp,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),wm=l(Sp,"CODE",{});var gN=r(wm);Y9=n(gN,"sub_group_size"),gN.forEach(t),K9=n(Sp,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Sp.forEach(t),Dy=c(e),Ye=l(e,"P",{});var $h=r(Ye);J9=n($h,"You can leave "),ym=l($h,"CODE",{});var wN=r(ym);X9=n(wN,"sub_group_size"),wN.forEach(t),Q9=n($h," to its default value of "),bm=l($h,"EM",{});var yN=r(bm);eP=n(yN,"1e9"),yN.forEach(t),sP=n($h,` when not using NVMe offload. You may want to change its
default value in the following cases:`),$h.forEach(t),zy=c(e),ca=l(e,"OL",{});var XE=r(ca);ml=l(XE,"LI",{});var QE=r(ml);tP=n(QE,"Running into OOM during optimizer step: Reduce "),Em=l(QE,"CODE",{});var bN=r(Em);aP=n(bN,"sub_group_size"),bN.forEach(t),nP=n(QE," to reduce memory utilization of temporary buffers"),QE.forEach(t),oP=c(XE),_l=l(XE,"LI",{});var eq=r(_l);lP=n(eq,"Optimizer Step is taking a long time: Increase "),qm=l(eq,"CODE",{});var EN=r(qm);rP=n(EN,"sub_group_size"),EN.forEach(t),pP=n(eq,` to improve bandwidth utilization as a result of
the increased data buffers.`),eq.forEach(t),XE.forEach(t),Oy=c(e),Qi=l(e,"A",{id:!0}),r(Qi).forEach(t),Ty=c(e),Ls=l(e,"H3",{class:!0});var sq=r(Ls);ha=l(sq,"A",{id:!0,class:!0,href:!0});var qN=r(ha);$m=l(qN,"SPAN",{});var $N=r($m);d(vl.$$.fragment,$N),$N.forEach(t),qN.forEach(t),iP=c(sq),km=l(sq,"SPAN",{});var kN=r(km);uP=n(kN,"NVMe Support"),kN.forEach(t),sq.forEach(t),Ay=c(e),eu=l(e,"P",{});var PN=r(eu);cP=n(PN,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),PN.forEach(t),Sy=c(e),su=l(e,"P",{});var DN=r(su);hP=n(DN,"The following configuration example enables NVMe to offload both optimizer states and the params:"),DN.forEach(t),Cy=c(e),d(jl.$$.fragment,e),xy=c(e),fa=l(e,"P",{});var tq=r(fa);fP=n(tq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Pm=l(tq,"EM",{});var zN=r(Pm);dP=n(zN,"\u201Cdevice\u201D: \u201Ccpu\u201D"),zN.forEach(t),mP=n(tq,")."),tq.forEach(t),Ry=c(e),Ke=l(e,"P",{});var kh=r(Ke);_P=n(kh,"Here is the full documentation for offloading "),gl=l(kh,"A",{href:!0,rel:!0});var ON=r(gl);vP=n(ON,"optimizer states"),ON.forEach(t),jP=n(kh," and "),wl=l(kh,"A",{href:!0,rel:!0});var TN=r(wl);gP=n(TN,"parameters"),TN.forEach(t),wP=n(kh,"."),kh.forEach(t),Iy=c(e),da=l(e,"P",{});var aq=r(da);yP=n(aq,"Make sure that your "),Dm=l(aq,"CODE",{});var AN=r(Dm);bP=n(AN,"nvme_path"),AN.forEach(t),EP=n(aq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),aq.forEach(t),Uy=c(e),Je=l(e,"P",{});var Ph=r(Je);qP=n(Ph,"In order to figure out the optimal "),zm=l(Ph,"CODE",{});var SN=r(zm);$P=n(SN,"aio"),SN.forEach(t),kP=n(Ph,` configuration block you must run a benchmark on your target setup, as
`),yl=l(Ph,"A",{href:!0,rel:!0});var CN=r(yl);PP=n(CN,"explained here"),CN.forEach(t),DP=n(Ph,"."),Ph.forEach(t),Gy=c(e),tu=l(e,"A",{id:!0}),r(tu).forEach(t),Ly=c(e),Ms=l(e,"H4",{class:!0});var nq=r(Ms);ma=l(nq,"A",{id:!0,class:!0,href:!0});var xN=r(ma);Om=l(xN,"SPAN",{});var RN=r(Om);d(bl.$$.fragment,RN),RN.forEach(t),xN.forEach(t),zP=c(nq),Tm=l(nq,"SPAN",{});var IN=r(Tm);OP=n(IN,"ZeRO-2 vs ZeRO-3 Performance"),IN.forEach(t),nq.forEach(t),My=c(e),au=l(e,"P",{});var UN=r(au);TP=n(UN,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),UN.forEach(t),Zy=c(e),nu=l(e,"P",{});var GN=r(nu);AP=n(GN,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),GN.forEach(t),Ny=c(e),_a=l(e,"UL",{});var oq=r(_a);Zs=l(oq,"LI",{});var Dh=r(Zs);SP=n(Dh,"set "),Am=l(Dh,"CODE",{});var LN=r(Am);CP=n(LN,"stage3_param_persistence_threshold"),LN.forEach(t),xP=n(Dh," to a very large number - larger than the largest parameter, e.g., "),Sm=l(Dh,"CODE",{});var MN=r(Sm);RP=n(MN,"6 * hidden_size * hidden_size"),MN.forEach(t),IP=n(Dh,". This will keep the parameters on the GPUs."),Dh.forEach(t),UP=c(oq),El=l(oq,"LI",{});var lq=r(El);GP=n(lq,"turn off "),Cm=l(lq,"CODE",{});var ZN=r(Cm);LP=n(ZN,"offload_params"),ZN.forEach(t),MP=n(lq," since ZeRO-2 doesn\u2019t have that option."),lq.forEach(t),oq.forEach(t),Hy=c(e),Xe=l(e,"P",{});var zh=r(Xe);ZP=n(zh,"The performance will likely improve significantly with just "),xm=l(zh,"CODE",{});var NN=r(xm);NP=n(NN,"offload_params"),NN.forEach(t),HP=n(zh,` turned off, even if you don\u2019t change
`),Rm=l(zh,"CODE",{});var HN=r(Rm);BP=n(HN,"stage3_param_persistence_threshold"),HN.forEach(t),WP=n(zh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),zh.forEach(t),By=c(e),ou=l(e,"A",{id:!0}),r(ou).forEach(t),Wy=c(e),Ns=l(e,"H4",{class:!0});var rq=r(Ns);va=l(rq,"A",{id:!0,class:!0,href:!0});var BN=r(va);Im=l(BN,"SPAN",{});var WN=r(Im);d(ql.$$.fragment,WN),WN.forEach(t),BN.forEach(t),FP=c(rq),Um=l(rq,"SPAN",{});var FN=r(Um);VP=n(FN,"ZeRO-2 Example"),FN.forEach(t),rq.forEach(t),Fy=c(e),ja=l(e,"P",{});var pq=r(ja);YP=n(pq,"Here is a full ZeRO-2 auto-configuration file "),Gm=l(pq,"CODE",{});var VN=r(Gm);KP=n(VN,"ds_config_zero2.json"),VN.forEach(t),JP=n(pq,":"),pq.forEach(t),Vy=c(e),d($l.$$.fragment,e),Yy=c(e),ga=l(e,"P",{});var iq=r(ga);XP=n(iq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Lm=l(iq,"CODE",{});var YN=r(Lm);QP=n(YN,"auto"),YN.forEach(t),eD=n(iq," settings in it."),iq.forEach(t),Ky=c(e),d(kl.$$.fragment,e),Jy=c(e),lu=l(e,"A",{id:!0}),r(lu).forEach(t),Xy=c(e),Hs=l(e,"H4",{class:!0});var uq=r(Hs);wa=l(uq,"A",{id:!0,class:!0,href:!0});var KN=r(wa);Mm=l(KN,"SPAN",{});var JN=r(Mm);d(Pl.$$.fragment,JN),JN.forEach(t),KN.forEach(t),sD=c(uq),Zm=l(uq,"SPAN",{});var XN=r(Zm);tD=n(XN,"ZeRO-3 Example"),XN.forEach(t),uq.forEach(t),Qy=c(e),ya=l(e,"P",{});var cq=r(ya);aD=n(cq,"Here is a full ZeRO-3 auto-configuration file "),Nm=l(cq,"CODE",{});var QN=r(Nm);nD=n(QN,"ds_config_zero3.json"),QN.forEach(t),oD=n(cq,":"),cq.forEach(t),e2=c(e),d(Dl.$$.fragment,e),s2=c(e),ba=l(e,"P",{});var hq=r(ba);lD=n(hq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Hm=l(hq,"CODE",{});var eH=r(Hm);rD=n(eH,"auto"),eH.forEach(t),pD=n(hq," settings in it."),hq.forEach(t),t2=c(e),d(zl.$$.fragment,e),a2=c(e),Bs=l(e,"H3",{class:!0});var fq=r(Bs);Ea=l(fq,"A",{id:!0,class:!0,href:!0});var sH=r(Ea);Bm=l(sH,"SPAN",{});var tH=r(Bm);d(Ol.$$.fragment,tH),tH.forEach(t),sH.forEach(t),iD=c(fq),Wm=l(fq,"SPAN",{});var aH=r(Wm);uD=n(aH,"Optimizer and Scheduler"),aH.forEach(t),fq.forEach(t),n2=c(e),qa=l(e,"P",{});var dq=r(qa);cD=n(dq,"As long as you don\u2019t enable "),Fm=l(dq,"CODE",{});var nH=r(Fm);hD=n(nH,"offload_optimizer"),nH.forEach(t),fD=n(dq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),dq.forEach(t),o2=c(e),ru=l(e,"P",{});var oH=r(ru);dD=n(oH,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),oH.forEach(t),l2=c(e),$a=l(e,"P",{});var mq=r($a);mD=n(mq,"It is possible to use a non-DeepSpeed optimizer when "),Vm=l(mq,"CODE",{});var lH=r(Vm);_D=n(lH,"offload_optimizer"),lH.forEach(t),vD=n(mq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),mq.forEach(t),r2=c(e),pu=l(e,"A",{id:!0}),r(pu).forEach(t),p2=c(e),Ws=l(e,"H4",{class:!0});var _q=r(Ws);ka=l(_q,"A",{id:!0,class:!0,href:!0});var rH=r(ka);Ym=l(rH,"SPAN",{});var pH=r(Ym);d(Tl.$$.fragment,pH),pH.forEach(t),rH.forEach(t),jD=c(_q),Km=l(_q,"SPAN",{});var iH=r(Km);gD=n(iH,"Optimizer"),iH.forEach(t),_q.forEach(t),i2=c(e),Qe=l(e,"P",{});var Oh=r(Qe);wD=n(Oh,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Jm=l(Oh,"CODE",{});var uH=r(Jm);yD=n(uH,"torch"),uH.forEach(t),bD=n(Oh,". The full documentation is "),Al=l(Oh,"A",{href:!0,rel:!0});var cH=r(Al);ED=n(cH,"here"),cH.forEach(t),qD=n(Oh,"."),Oh.forEach(t),u2=c(e),k=l(e,"P",{});var S=r(k);$D=n(S,"If you don\u2019t configure the "),Xm=l(S,"CODE",{});var hH=r(Xm);kD=n(hH,"optimizer"),hH.forEach(t),PD=n(S," entry in the configuration file, the "),iu=l(S,"A",{href:!0});var fH=r(iu);DD=n(fH,"Trainer"),fH.forEach(t),zD=n(S,` will
automatically set it to `),Qm=l(S,"CODE",{});var dH=r(Qm);OD=n(dH,"AdamW"),dH.forEach(t),TD=n(S,` and will use the supplied values or the defaults for the following command line
arguments: `),e_=l(S,"CODE",{});var mH=r(e_);AD=n(mH,"--learning_rate"),mH.forEach(t),SD=n(S,", "),s_=l(S,"CODE",{});var _H=r(s_);CD=n(_H,"--adam_beta1"),_H.forEach(t),xD=n(S,", "),t_=l(S,"CODE",{});var vH=r(t_);RD=n(vH,"--adam_beta2"),vH.forEach(t),ID=n(S,", "),a_=l(S,"CODE",{});var jH=r(a_);UD=n(jH,"--adam_epsilon"),jH.forEach(t),GD=n(S," and "),n_=l(S,"CODE",{});var gH=r(n_);LD=n(gH,"--weight_decay"),gH.forEach(t),MD=n(S,"."),S.forEach(t),c2=c(e),es=l(e,"P",{});var Th=r(es);ZD=n(Th,"Here is an example of the auto-configured "),o_=l(Th,"CODE",{});var wH=r(o_);ND=n(wH,"optimizer"),wH.forEach(t),HD=n(Th," entry for "),l_=l(Th,"CODE",{});var yH=r(l_);BD=n(yH,"AdamW"),yH.forEach(t),WD=n(Th,":"),Th.forEach(t),h2=c(e),d(Sl.$$.fragment,e),f2=c(e),uu=l(e,"P",{});var bH=r(uu);FD=n(bH,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),bH.forEach(t),d2=c(e),pe=l(e,"UL",{});var Bn=r(pe);Cl=l(Bn,"LI",{});var vq=r(Cl);r_=l(vq,"CODE",{});var EH=r(r_);VD=n(EH,"lr"),EH.forEach(t),YD=n(vq," with the value of "),p_=l(vq,"CODE",{});var qH=r(p_);KD=n(qH,"--learning_rate"),qH.forEach(t),vq.forEach(t),JD=c(Bn),xl=l(Bn,"LI",{});var jq=r(xl);i_=l(jq,"CODE",{});var $H=r(i_);XD=n($H,"betas"),$H.forEach(t),QD=n(jq," with the value of "),u_=l(jq,"CODE",{});var kH=r(u_);ez=n(kH,"--adam_beta1 --adam_beta2"),kH.forEach(t),jq.forEach(t),sz=c(Bn),Rl=l(Bn,"LI",{});var gq=r(Rl);c_=l(gq,"CODE",{});var PH=r(c_);tz=n(PH,"eps"),PH.forEach(t),az=n(gq," with the value of "),h_=l(gq,"CODE",{});var DH=r(h_);nz=n(DH,"--adam_epsilon"),DH.forEach(t),gq.forEach(t),oz=c(Bn),Il=l(Bn,"LI",{});var wq=r(Il);f_=l(wq,"CODE",{});var zH=r(f_);lz=n(zH,"weight_decay"),zH.forEach(t),rz=n(wq," with the value of "),d_=l(wq,"CODE",{});var OH=r(d_);pz=n(OH,"--weight_decay"),OH.forEach(t),wq.forEach(t),Bn.forEach(t),m2=c(e),cu=l(e,"P",{});var TH=r(cu);iz=n(TH,"Therefore please remember to tune the shared hyperparameters on the command line."),TH.forEach(t),_2=c(e),hu=l(e,"P",{});var AH=r(hu);uz=n(AH,"You can also set the values explicitly:"),AH.forEach(t),v2=c(e),d(Ul.$$.fragment,e),j2=c(e),Pa=l(e,"P",{});var yq=r(Pa);cz=n(yq,"But then you\u2019re on your own synchronizing the "),fu=l(yq,"A",{href:!0});var SH=r(fu);hz=n(SH,"Trainer"),SH.forEach(t),fz=n(yq,` command line arguments and the DeepSpeed
configuration.`),yq.forEach(t),g2=c(e),du=l(e,"P",{});var CH=r(du);dz=n(CH,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),CH.forEach(t),w2=c(e),d(Gl.$$.fragment,e),y2=c(e),ie=l(e,"P",{});var Wn=r(ie);mz=n(Wn,"Similarly to "),m_=l(Wn,"CODE",{});var xH=r(m_);_z=n(xH,"AdamW"),xH.forEach(t),vz=n(Wn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),__=l(Wn,"CODE",{});var RH=r(__);jz=n(RH,"weight_decay"),RH.forEach(t),gz=n(Wn," around "),v_=l(Wn,"CODE",{});var IH=r(v_);wz=n(IH,"0.01"),IH.forEach(t),yz=n(Wn,"."),Wn.forEach(t),b2=c(e),mu=l(e,"A",{id:!0}),r(mu).forEach(t),E2=c(e),Fs=l(e,"H4",{class:!0});var bq=r(Fs);Da=l(bq,"A",{id:!0,class:!0,href:!0});var UH=r(Da);j_=l(UH,"SPAN",{});var GH=r(j_);d(Ll.$$.fragment,GH),GH.forEach(t),UH.forEach(t),bz=c(bq),g_=l(bq,"SPAN",{});var LH=r(g_);Ez=n(LH,"Scheduler"),LH.forEach(t),bq.forEach(t),q2=c(e),Z=l(e,"P",{});var Ee=r(Z);qz=n(Ee,"DeepSpeed supports "),w_=l(Ee,"CODE",{});var MH=r(w_);$z=n(MH,"LRRangeTest"),MH.forEach(t),kz=n(Ee,", "),y_=l(Ee,"CODE",{});var ZH=r(y_);Pz=n(ZH,"OneCycle"),ZH.forEach(t),Dz=n(Ee,", "),b_=l(Ee,"CODE",{});var NH=r(b_);zz=n(NH,"WarmupLR"),NH.forEach(t),Oz=n(Ee," and "),E_=l(Ee,"CODE",{});var HH=r(E_);Tz=n(HH,"WarmupDecayLR"),HH.forEach(t),Az=n(Ee,` learning rate schedulers. The full
documentation is `),Ml=l(Ee,"A",{href:!0,rel:!0});var BH=r(Ml);Sz=n(BH,"here"),BH.forEach(t),Cz=n(Ee,"."),Ee.forEach(t),$2=c(e),_u=l(e,"P",{});var WH=r(_u);xz=n(WH,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),WH.forEach(t),k2=c(e),za=l(e,"UL",{});var Eq=r(za);Zl=l(Eq,"LI",{});var qq=r(Zl);q_=l(qq,"CODE",{});var FH=r(q_);Rz=n(FH,"WarmupLR"),FH.forEach(t),Iz=n(qq," via "),$_=l(qq,"CODE",{});var VH=r($_);Uz=n(VH,"--lr_scheduler_type constant_with_warmup"),VH.forEach(t),qq.forEach(t),Gz=c(Eq),ss=l(Eq,"LI",{});var Cp=r(ss);k_=l(Cp,"CODE",{});var YH=r(k_);Lz=n(YH,"WarmupDecayLR"),YH.forEach(t),Mz=n(Cp," via "),P_=l(Cp,"CODE",{});var KH=r(P_);Zz=n(KH,"--lr_scheduler_type linear"),KH.forEach(t),Nz=n(Cp,". This is also the default value for "),D_=l(Cp,"CODE",{});var JH=r(D_);Hz=n(JH,"--lr_scheduler_type"),JH.forEach(t),Bz=n(Cp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Cp.forEach(t),Eq.forEach(t),P2=c(e),T=l(e,"P",{});var X=r(T);Wz=n(X,"If you don\u2019t configure the "),z_=l(X,"CODE",{});var XH=r(z_);Fz=n(XH,"scheduler"),XH.forEach(t),Vz=n(X," entry in the configuration file, the "),vu=l(X,"A",{href:!0});var QH=r(vu);Yz=n(QH,"Trainer"),QH.forEach(t),Kz=n(X,` will use
the values of `),O_=l(X,"CODE",{});var eB=r(O_);Jz=n(eB,"--lr_scheduler_type"),eB.forEach(t),Xz=n(X,", "),T_=l(X,"CODE",{});var sB=r(T_);Qz=n(sB,"--learning_rate"),sB.forEach(t),eO=n(X," and "),A_=l(X,"CODE",{});var tB=r(A_);sO=n(tB,"--warmup_steps"),tB.forEach(t),tO=n(X," or "),S_=l(X,"CODE",{});var aB=r(S_);aO=n(aB,"--warmup_ratio"),aB.forEach(t),nO=n(X,` to configure a
\u{1F917} Transformers version of it.`),X.forEach(t),D2=c(e),ts=l(e,"P",{});var Ah=r(ts);oO=n(Ah,"Here is an example of the auto-configured "),C_=l(Ah,"CODE",{});var nB=r(C_);lO=n(nB,"scheduler"),nB.forEach(t),rO=n(Ah," entry for "),x_=l(Ah,"CODE",{});var oB=r(x_);pO=n(oB,"WarmupLR"),oB.forEach(t),iO=n(Ah,":"),Ah.forEach(t),z2=c(e),d(Nl.$$.fragment,e),O2=c(e),as=l(e,"P",{});var Sh=r(as);uO=n(Sh,"Since "),R_=l(Sh,"EM",{});var lB=r(R_);cO=n(lB,"\u201Cauto\u201D"),lB.forEach(t),hO=n(Sh," is used the "),ju=l(Sh,"A",{href:!0});var rB=r(ju);fO=n(rB,"Trainer"),rB.forEach(t),dO=n(Sh,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Sh.forEach(t),T2=c(e),ue=l(e,"UL",{});var Fn=r(ue);Oa=l(Fn,"LI",{});var Gj=r(Oa);I_=l(Gj,"CODE",{});var pB=r(I_);mO=n(pB,"warmup_min_lr"),pB.forEach(t),_O=n(Gj," with the value of "),U_=l(Gj,"CODE",{});var iB=r(U_);vO=n(iB,"0"),iB.forEach(t),jO=n(Gj,"."),Gj.forEach(t),gO=c(Fn),Ta=l(Fn,"LI",{});var Lj=r(Ta);G_=l(Lj,"CODE",{});var uB=r(G_);wO=n(uB,"warmup_max_lr"),uB.forEach(t),yO=n(Lj," with the value of "),L_=l(Lj,"CODE",{});var cB=r(L_);bO=n(cB,"--learning_rate"),cB.forEach(t),EO=n(Lj,"."),Lj.forEach(t),qO=c(Fn),ns=l(Fn,"LI",{});var xp=r(ns);M_=l(xp,"CODE",{});var hB=r(M_);$O=n(hB,"warmup_num_steps"),hB.forEach(t),kO=n(xp," with the value of "),Z_=l(xp,"CODE",{});var fB=r(Z_);PO=n(fB,"--warmup_steps"),fB.forEach(t),DO=n(xp," if provided. Otherwise will use "),N_=l(xp,"CODE",{});var dB=r(N_);zO=n(dB,"--warmup_ratio"),dB.forEach(t),OO=n(xp,`
multiplied by the number of training steps and rounded up.`),xp.forEach(t),TO=c(Fn),os=l(Fn,"LI",{});var Rp=r(os);H_=l(Rp,"CODE",{});var mB=r(H_);AO=n(mB,"total_num_steps"),mB.forEach(t),SO=n(Rp," with either the value of "),B_=l(Rp,"CODE",{});var _B=r(B_);CO=n(_B,"--max_steps"),_B.forEach(t),xO=n(Rp,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),W_=l(Rp,"CODE",{});var vB=r(W_);RO=n(vB,"WarmupDecayLR"),vB.forEach(t),IO=n(Rp,")."),Rp.forEach(t),Fn.forEach(t),A2=c(e),gu=l(e,"P",{});var jB=r(gu);UO=n(jB,"You can, of course, take over any or all of the configuration values and set those yourself:"),jB.forEach(t),S2=c(e),d(Hl.$$.fragment,e),C2=c(e),Aa=l(e,"P",{});var $q=r(Aa);GO=n($q,"But then you\u2019re on your own synchronizing the "),wu=l($q,"A",{href:!0});var gB=r(wu);LO=n(gB,"Trainer"),gB.forEach(t),MO=n($q,` command line arguments and the DeepSpeed
configuration.`),$q.forEach(t),x2=c(e),Sa=l(e,"P",{});var kq=r(Sa);ZO=n(kq,"For example, for "),F_=l(kq,"CODE",{});var wB=r(F_);NO=n(wB,"WarmupDecayLR"),wB.forEach(t),HO=n(kq,", you can use the following entry:"),kq.forEach(t),R2=c(e),d(Bl.$$.fragment,e),I2=c(e),J=l(e,"P",{});var bs=r(J);BO=n(bs,"and "),V_=l(bs,"CODE",{});var yB=r(V_);WO=n(yB,"total_num_steps"),yB.forEach(t),FO=n(bs,", "),Y_=l(bs,"CODE",{});var bB=r(Y_);VO=n(bB,"warmup_max_lr"),bB.forEach(t),YO=n(bs,", "),K_=l(bs,"CODE",{});var EB=r(K_);KO=n(EB,"warmup_num_steps"),EB.forEach(t),JO=n(bs," and "),J_=l(bs,"CODE",{});var qB=r(J_);XO=n(qB,"total_num_steps"),qB.forEach(t),QO=n(bs," will be set at loading time."),bs.forEach(t),U2=c(e),yu=l(e,"A",{id:!0}),r(yu).forEach(t),G2=c(e),Vs=l(e,"H3",{class:!0});var Pq=r(Vs);Ca=l(Pq,"A",{id:!0,class:!0,href:!0});var $B=r(Ca);X_=l($B,"SPAN",{});var kB=r(X_);d(Wl.$$.fragment,kB),kB.forEach(t),$B.forEach(t),eT=c(Pq),Q_=l(Pq,"SPAN",{});var PB=r(Q_);sT=n(PB,"fp32 Precision"),PB.forEach(t),Pq.forEach(t),L2=c(e),bu=l(e,"P",{});var DB=r(bu);tT=n(DB,"Deepspeed supports the full fp32 and the fp16 mixed precision."),DB.forEach(t),M2=c(e),xa=l(e,"P",{});var Dq=r(xa);aT=n(Dq,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),e1=l(Dq,"CODE",{});var zB=r(e1);nT=n(zB,"NaN"),zB.forEach(t),oT=n(Dq,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Dq.forEach(t),Z2=c(e),d(Fl.$$.fragment,e),N2=c(e),Ra=l(e,"P",{});var zq=r(Ra);lT=n(zq,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Vl=l(zq,"A",{href:!0,rel:!0});var OB=r(Vl);rT=n(OB,"TensorFloat-32(TF32) on Ampere devices"),OB.forEach(t),pT=n(zq,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),zq.forEach(t),H2=c(e),ce=l(e,"P",{});var Vn=r(ce);iT=n(Vn,"With the \u{1F917} Trainer you can use "),s1=l(Vn,"CODE",{});var TB=r(s1);uT=n(TB,"--tf32"),TB.forEach(t),cT=n(Vn," to enable it, or disable it with "),t1=l(Vn,"CODE",{});var AB=r(t1);hT=n(AB,"--tf32 0"),AB.forEach(t),fT=n(Vn," or "),a1=l(Vn,"CODE",{});var SB=r(a1);dT=n(SB,"--no_tf32"),SB.forEach(t),mT=n(Vn,". By default the PyTorch default is used."),Vn.forEach(t),B2=c(e),Eu=l(e,"A",{id:!0}),r(Eu).forEach(t),W2=c(e),Ys=l(e,"H3",{class:!0});var Oq=r(Ys);Ia=l(Oq,"A",{id:!0,class:!0,href:!0});var CB=r(Ia);n1=l(CB,"SPAN",{});var xB=r(n1);d(Yl.$$.fragment,xB),xB.forEach(t),CB.forEach(t),_T=c(Oq),o1=l(Oq,"SPAN",{});var RB=r(o1);vT=n(RB,"Automatic Mixed Precision"),RB.forEach(t),Oq.forEach(t),F2=c(e),qu=l(e,"P",{});var IB=r(qu);jT=n(IB,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),IB.forEach(t),V2=c(e),Ks=l(e,"H3",{class:!0});var Tq=r(Ks);Ua=l(Tq,"A",{id:!0,class:!0,href:!0});var UB=r(Ua);l1=l(UB,"SPAN",{});var GB=r(l1);d(Kl.$$.fragment,GB),GB.forEach(t),UB.forEach(t),gT=c(Tq),r1=l(Tq,"SPAN",{});var LB=r(r1);wT=n(LB,"fp16"),LB.forEach(t),Tq.forEach(t),Y2=c(e),$u=l(e,"P",{});var MB=r($u);yT=n(MB,"To configure pytorch AMP-like mode with fp16 (float16) set:"),MB.forEach(t),K2=c(e),d(Jl.$$.fragment,e),J2=c(e),ls=l(e,"P",{});var Ch=r(ls);bT=n(Ch,"and the "),ku=l(Ch,"A",{href:!0});var ZB=r(ku);ET=n(ZB,"Trainer"),ZB.forEach(t),qT=n(Ch,` will automatically enable or disable it based on the value of
`),p1=l(Ch,"CODE",{});var NB=r(p1);$T=n(NB,"args.fp16_backend"),NB.forEach(t),kT=n(Ch,". The rest of config values are up to you."),Ch.forEach(t),X2=c(e),rs=l(e,"P",{});var xh=r(rs);PT=n(xh,"This mode gets enabled when "),i1=l(xh,"CODE",{});var HB=r(i1);DT=n(HB,"--fp16 --fp16_backend amp"),HB.forEach(t),zT=n(xh," or "),u1=l(xh,"CODE",{});var BB=r(u1);OT=n(BB,"--fp16_full_eval"),BB.forEach(t),TT=n(xh," command line args are passed."),xh.forEach(t),Q2=c(e),Pu=l(e,"P",{});var WB=r(Pu);AT=n(WB,"You can also enable/disable this mode explicitly:"),WB.forEach(t),eb=c(e),d(Xl.$$.fragment,e),sb=c(e),Ga=l(e,"P",{});var Aq=r(Ga);ST=n(Aq,"But then you\u2019re on your own synchronizing the "),Du=l(Aq,"A",{href:!0});var FB=r(Du);CT=n(FB,"Trainer"),FB.forEach(t),xT=n(Aq,` command line arguments and the DeepSpeed
configuration.`),Aq.forEach(t),tb=c(e),La=l(e,"P",{});var Sq=r(La);RT=n(Sq,"Here is the "),Ql=l(Sq,"A",{href:!0,rel:!0});var VB=r(Ql);IT=n(VB,"documentation"),VB.forEach(t),UT=n(Sq,"."),Sq.forEach(t),ab=c(e),Js=l(e,"H3",{class:!0});var Cq=r(Js);Ma=l(Cq,"A",{id:!0,class:!0,href:!0});var YB=r(Ma);c1=l(YB,"SPAN",{});var KB=r(c1);d(er.$$.fragment,KB),KB.forEach(t),YB.forEach(t),GT=c(Cq),h1=l(Cq,"SPAN",{});var JB=r(h1);LT=n(JB,"bf16"),JB.forEach(t),Cq.forEach(t),nb=c(e),zu=l(e,"P",{});var XB=r(zu);MT=n(XB,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),XB.forEach(t),ob=c(e),d(sr.$$.fragment,e),lb=c(e),Ou=l(e,"P",{});var QB=r(Ou);ZT=n(QB,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),QB.forEach(t),rb=c(e),ps=l(e,"P",{});var Rh=r(ps);NT=n(Rh,"This mode gets enabled when "),f1=l(Rh,"CODE",{});var eW=r(f1);HT=n(eW,"--bf16"),eW.forEach(t),BT=n(Rh," or "),d1=l(Rh,"CODE",{});var sW=r(d1);WT=n(sW,"--bf16_full_eval"),sW.forEach(t),FT=n(Rh," command line args are passed."),Rh.forEach(t),pb=c(e),Tu=l(e,"P",{});var tW=r(Tu);VT=n(tW,"You can also enable/disable this mode explicitly:"),tW.forEach(t),ib=c(e),d(tr.$$.fragment,e),ub=c(e),d(Za.$$.fragment,e),cb=c(e),Xs=l(e,"H3",{class:!0});var xq=r(Xs);Na=l(xq,"A",{id:!0,class:!0,href:!0});var aW=r(Na);m1=l(aW,"SPAN",{});var nW=r(m1);d(ar.$$.fragment,nW),nW.forEach(t),aW.forEach(t),YT=c(xq),_1=l(xq,"SPAN",{});var oW=r(_1);KT=n(oW,"apex"),oW.forEach(t),xq.forEach(t),hb=c(e),Au=l(e,"P",{});var lW=r(Au);JT=n(lW,"To configure apex AMP-like mode set:"),lW.forEach(t),fb=c(e),d(nr.$$.fragment,e),db=c(e),he=l(e,"P",{});var Yn=r(he);XT=n(Yn,"and the "),Su=l(Yn,"A",{href:!0});var rW=r(Su);QT=n(rW,"Trainer"),rW.forEach(t),eA=n(Yn," will automatically configure it based on the values of "),v1=l(Yn,"CODE",{});var pW=r(v1);sA=n(pW,"args.fp16_backend"),pW.forEach(t),tA=n(Yn,` and
`),j1=l(Yn,"CODE",{});var iW=r(j1);aA=n(iW,"args.fp16_opt_level"),iW.forEach(t),nA=n(Yn,"."),Yn.forEach(t),mb=c(e),Ha=l(e,"P",{});var Rq=r(Ha);oA=n(Rq,"This mode gets enabled when "),g1=l(Rq,"CODE",{});var uW=r(g1);lA=n(uW,"--fp16 --fp16_backend apex --fp16_opt_level 01"),uW.forEach(t),rA=n(Rq," command line args are passed."),Rq.forEach(t),_b=c(e),Cu=l(e,"P",{});var cW=r(Cu);pA=n(cW,"You can also configure this mode explicitly:"),cW.forEach(t),vb=c(e),d(or.$$.fragment,e),jb=c(e),Ba=l(e,"P",{});var Iq=r(Ba);iA=n(Iq,"But then you\u2019re on your own synchronizing the "),xu=l(Iq,"A",{href:!0});var hW=r(xu);uA=n(hW,"Trainer"),hW.forEach(t),cA=n(Iq,` command line arguments and the DeepSpeed
configuration.`),Iq.forEach(t),gb=c(e),Wa=l(e,"P",{});var Uq=r(Wa);hA=n(Uq,"Here is the "),lr=l(Uq,"A",{href:!0,rel:!0});var fW=r(lr);fA=n(fW,"documentation"),fW.forEach(t),dA=n(Uq,"."),Uq.forEach(t),wb=c(e),Ru=l(e,"A",{id:!0}),r(Ru).forEach(t),yb=c(e),Qs=l(e,"H3",{class:!0});var Gq=r(Qs);Fa=l(Gq,"A",{id:!0,class:!0,href:!0});var dW=r(Fa);w1=l(dW,"SPAN",{});var mW=r(w1);d(rr.$$.fragment,mW),mW.forEach(t),dW.forEach(t),mA=c(Gq),y1=l(Gq,"SPAN",{});var _W=r(y1);_A=n(_W,"Batch Size"),_W.forEach(t),Gq.forEach(t),bb=c(e),Iu=l(e,"P",{});var vW=r(Iu);vA=n(vW,"To configure batch size, use:"),vW.forEach(t),Eb=c(e),d(pr.$$.fragment,e),qb=c(e),N=l(e,"P",{});var qe=r(N);jA=n(qe,"and the "),Uu=l(qe,"A",{href:!0});var jW=r(Uu);gA=n(jW,"Trainer"),jW.forEach(t),wA=n(qe," will automatically set "),b1=l(qe,"CODE",{});var gW=r(b1);yA=n(gW,"train_micro_batch_size_per_gpu"),gW.forEach(t),bA=n(qe,` to the value of
`),E1=l(qe,"CODE",{});var wW=r(E1);EA=n(wW,"args.per_device_train_batch_size"),wW.forEach(t),qA=n(qe," and "),q1=l(qe,"CODE",{});var yW=r(q1);$A=n(yW,"train_batch_size"),yW.forEach(t),kA=n(qe," to "),$1=l(qe,"CODE",{});var bW=r($1);PA=n(bW,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),bW.forEach(t),DA=n(qe,"."),qe.forEach(t),$b=c(e),Gu=l(e,"P",{});var EW=r(Gu);zA=n(EW,"You can also set the values explicitly:"),EW.forEach(t),kb=c(e),d(ir.$$.fragment,e),Pb=c(e),Va=l(e,"P",{});var Lq=r(Va);OA=n(Lq,"But then you\u2019re on your own synchronizing the "),Lu=l(Lq,"A",{href:!0});var qW=r(Lu);TA=n(qW,"Trainer"),qW.forEach(t),AA=n(Lq,` command line arguments and the DeepSpeed
configuration.`),Lq.forEach(t),Db=c(e),Mu=l(e,"A",{id:!0}),r(Mu).forEach(t),zb=c(e),et=l(e,"H3",{class:!0});var Mq=r(et);Ya=l(Mq,"A",{id:!0,class:!0,href:!0});var $W=r(Ya);k1=l($W,"SPAN",{});var kW=r(k1);d(ur.$$.fragment,kW),kW.forEach(t),$W.forEach(t),SA=c(Mq),P1=l(Mq,"SPAN",{});var PW=r(P1);CA=n(PW,"Gradient Accumulation"),PW.forEach(t),Mq.forEach(t),Ob=c(e),Zu=l(e,"P",{});var DW=r(Zu);xA=n(DW,"To configure gradient accumulation set:"),DW.forEach(t),Tb=c(e),d(cr.$$.fragment,e),Ab=c(e),is=l(e,"P",{});var Ih=r(is);RA=n(Ih,"and the "),Nu=l(Ih,"A",{href:!0});var zW=r(Nu);IA=n(zW,"Trainer"),zW.forEach(t),UA=n(Ih," will automatically set it to the value of "),D1=l(Ih,"CODE",{});var OW=r(D1);GA=n(OW,"args.gradient_accumulation_steps"),OW.forEach(t),LA=n(Ih,"."),Ih.forEach(t),Sb=c(e),Hu=l(e,"P",{});var TW=r(Hu);MA=n(TW,"You can also set the value explicitly:"),TW.forEach(t),Cb=c(e),d(hr.$$.fragment,e),xb=c(e),Ka=l(e,"P",{});var Zq=r(Ka);ZA=n(Zq,"But then you\u2019re on your own synchronizing the "),Bu=l(Zq,"A",{href:!0});var AW=r(Bu);NA=n(AW,"Trainer"),AW.forEach(t),HA=n(Zq,` command line arguments and the DeepSpeed
configuration.`),Zq.forEach(t),Rb=c(e),Wu=l(e,"A",{id:!0}),r(Wu).forEach(t),Ib=c(e),st=l(e,"H3",{class:!0});var Nq=r(st);Ja=l(Nq,"A",{id:!0,class:!0,href:!0});var SW=r(Ja);z1=l(SW,"SPAN",{});var CW=r(z1);d(fr.$$.fragment,CW),CW.forEach(t),SW.forEach(t),BA=c(Nq),O1=l(Nq,"SPAN",{});var xW=r(O1);WA=n(xW,"Gradient Clipping"),xW.forEach(t),Nq.forEach(t),Ub=c(e),Fu=l(e,"P",{});var RW=r(Fu);FA=n(RW,"To configure gradient gradient clipping set:"),RW.forEach(t),Gb=c(e),d(dr.$$.fragment,e),Lb=c(e),us=l(e,"P",{});var Uh=r(us);VA=n(Uh,"and the "),Vu=l(Uh,"A",{href:!0});var IW=r(Vu);YA=n(IW,"Trainer"),IW.forEach(t),KA=n(Uh," will automatically set it to the value of "),T1=l(Uh,"CODE",{});var UW=r(T1);JA=n(UW,"args.max_grad_norm"),UW.forEach(t),XA=n(Uh,"."),Uh.forEach(t),Mb=c(e),Yu=l(e,"P",{});var GW=r(Yu);QA=n(GW,"You can also set the value explicitly:"),GW.forEach(t),Zb=c(e),d(mr.$$.fragment,e),Nb=c(e),Xa=l(e,"P",{});var Hq=r(Xa);eS=n(Hq,"But then you\u2019re on your own synchronizing the "),Ku=l(Hq,"A",{href:!0});var LW=r(Ku);sS=n(LW,"Trainer"),LW.forEach(t),tS=n(Hq,` command line arguments and the DeepSpeed
configuration.`),Hq.forEach(t),Hb=c(e),Ju=l(e,"A",{id:!0}),r(Ju).forEach(t),Bb=c(e),tt=l(e,"H3",{class:!0});var Bq=r(tt);Qa=l(Bq,"A",{id:!0,class:!0,href:!0});var MW=r(Qa);A1=l(MW,"SPAN",{});var ZW=r(A1);d(_r.$$.fragment,ZW),ZW.forEach(t),MW.forEach(t),aS=c(Bq),S1=l(Bq,"SPAN",{});var NW=r(S1);nS=n(NW,"Getting The Model Weights Out"),NW.forEach(t),Bq.forEach(t),Wb=c(e),en=l(e,"P",{});var Wq=r(en);oS=n(Wq,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),C1=l(Wq,"CODE",{});var HW=r(C1);lS=n(HW,"global_step*/*optim_states.pt"),HW.forEach(t),rS=n(Wq,` (this is glob
pattern), and are saved under the normal checkpoint.`),Wq.forEach(t),Fb=c(e),Xu=l(e,"P",{});var BW=r(Xu);x1=l(BW,"STRONG",{});var WW=r(x1);pS=n(WW,"FP16 Weights:"),WW.forEach(t),BW.forEach(t),Vb=c(e),sn=l(e,"P",{});var Fq=r(sn);iS=n(Fq,"When a model is saved under ZeRO-2, you end up having the normal "),R1=l(Fq,"CODE",{});var FW=r(R1);uS=n(FW,"pytorch_model.bin"),FW.forEach(t),cS=n(Fq,` file with the model weights, but
they are only the fp16 version of the weights.`),Fq.forEach(t),Yb=c(e),A=l(e,"P",{});var Q=r(A);hS=n(Q,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),I1=l(Q,"CODE",{});var VW=r(I1);fS=n(VW,'"stage3_gather_16bit_weights_on_model_save": true'),VW.forEach(t),dS=n(Q," is required to get the "),U1=l(Q,"CODE",{});var YW=r(U1);mS=n(YW,"Trainer"),YW.forEach(t),_S=n(Q,` to save the fp16
version of the weights. If this setting is `),G1=l(Q,"CODE",{});var KW=r(G1);vS=n(KW,"False"),KW.forEach(t),jS=c(Q),L1=l(Q,"CODE",{});var JW=r(L1);gS=n(JW,"pytorch_model.bin"),JW.forEach(t),wS=n(Q," won\u2019t be created. This is because by default DeepSpeed\u2019s "),M1=l(Q,"CODE",{});var XW=r(M1);yS=n(XW,"state_dict"),XW.forEach(t),bS=n(Q," contains a placeholder and not the real weights. If we were to save this "),Z1=l(Q,"CODE",{});var QW=r(Z1);ES=n(QW,"state_dict"),QW.forEach(t),qS=n(Q," it won\u2019t be possible to load it back."),Q.forEach(t),Kb=c(e),d(vr.$$.fragment,e),Jb=c(e),Qu=l(e,"P",{});var eF=r(Qu);N1=l(eF,"STRONG",{});var sF=r(N1);$S=n(sF,"FP32 Weights:"),sF.forEach(t),eF.forEach(t),Xb=c(e),tn=l(e,"P",{});var Vq=r(tn);kS=n(Vq,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),jr=l(Vq,"A",{href:!0,rel:!0});var tF=r(jr);PS=n(tF,"models hub"),tF.forEach(t),DS=n(Vq,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Vq.forEach(t),Qb=c(e),ec=l(e,"P",{});var aF=r(ec);H1=l(aF,"STRONG",{});var nF=r(H1);zS=n(nF,"Live FP32 Weights Recovery:"),nF.forEach(t),aF.forEach(t),e3=c(e),sc=l(e,"P",{});var oF=r(sc);OS=n(oF,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),oF.forEach(t),s3=c(e),tc=l(e,"P",{});var lF=r(tc);TS=n(lF,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),lF.forEach(t),t3=c(e),d(gr.$$.fragment,e),a3=c(e),cs=l(e,"P",{});var Gh=r(cs);AS=n(Gh,"If you\u2019re using the "),B1=l(Gh,"CODE",{});var rF=r(B1);SS=n(rF,"--load_best_model_at_end"),rF.forEach(t),CS=n(Gh," class:"),W1=l(Gh,"EM",{});var pF=r(W1);xS=n(pF,"~transformers.TrainingArguments"),pF.forEach(t),RS=n(Gh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Gh.forEach(t),n3=c(e),d(wr.$$.fragment,e),o3=c(e),d(an.$$.fragment,e),l3=c(e),nn=l(e,"P",{});var Yq=r(nn);IS=n(Yq,"Of course, you don\u2019t have to use class:"),F1=l(Yq,"EM",{});var iF=r(F1);US=n(iF,"~transformers.Trainer"),iF.forEach(t),GS=n(Yq,` and you can adjust the examples above to your own
trainer.`),Yq.forEach(t),r3=c(e),on=l(e,"P",{});var Kq=r(on);LS=n(Kq,"If for some reason you want more refinement, you can also extract the fp32 "),V1=l(Kq,"CODE",{});var uF=r(V1);MS=n(uF,"state_dict"),uF.forEach(t),ZS=n(Kq,` of the weights and apply
these yourself as is shown in the following example:`),Kq.forEach(t),p3=c(e),d(yr.$$.fragment,e),i3=c(e),ac=l(e,"P",{});var cF=r(ac);Y1=l(cF,"STRONG",{});var hF=r(Y1);NS=n(hF,"Offline FP32 Weights Recovery:"),hF.forEach(t),cF.forEach(t),u3=c(e),hs=l(e,"P",{});var Lh=r(hs);HS=n(Lh,"DeepSpeed creates a special conversion script "),K1=l(Lh,"CODE",{});var fF=r(K1);BS=n(fF,"zero_to_fp32.py"),fF.forEach(t),WS=n(Lh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),J1=l(Lh,"CODE",{});var dF=r(J1);FS=n(dF,"Trainer"),dF.forEach(t),VS=n(Lh," to do the extraction."),Lh.forEach(t),c3=c(e),nc=l(e,"P",{});var mF=r(nc);YS=n(mF,"Let\u2019s say your checkpoint folder looks like this:"),mF.forEach(t),h3=c(e),d(br.$$.fragment,e),f3=c(e),ln=l(e,"P",{});var Jq=r(ln);KS=n(Jq,"In this example there is just one DeepSpeed checkpoint sub-folder "),X1=l(Jq,"EM",{});var _F=r(X1);JS=n(_F,"global_step1"),_F.forEach(t),XS=n(Jq,`. Therefore to reconstruct the fp32
weights just run:`),Jq.forEach(t),d3=c(e),d(Er.$$.fragment,e),m3=c(e),rn=l(e,"P",{});var Xq=r(rn);QS=n(Xq,"This is it. "),Q1=l(Xq,"CODE",{});var vF=r(Q1);eC=n(vF,"pytorch_model.bin"),vF.forEach(t),sC=n(Xq," will now contain the full fp32 model weights consolidated from multiple GPUs."),Xq.forEach(t),_3=c(e),oc=l(e,"P",{});var jF=r(oc);tC=n(jF,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),jF.forEach(t),v3=c(e),qr=l(e,"P",{});var dG=r(qr);ev=l(dG,"CODE",{});var gF=r(ev);aC=n(gF,"python zero_to_fp32.py -h"),gF.forEach(t),nC=n(dG," will give you usage details."),dG.forEach(t),j3=c(e),fs=l(e,"P",{});var Mh=r(fs);oC=n(Mh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),sv=l(Mh,"CODE",{});var wF=r(sv);lC=n(wF,"latest"),wF.forEach(t),rC=n(Mh,`, which in the current
example will contain `),tv=l(Mh,"CODE",{});var yF=r(tv);pC=n(yF,"global_step1"),yF.forEach(t),iC=n(Mh,"."),Mh.forEach(t),g3=c(e),lc=l(e,"P",{});var bF=r(lc);uC=n(bF,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),bF.forEach(t),w3=c(e),at=l(e,"H3",{class:!0});var Qq=r(at);pn=l(Qq,"A",{id:!0,class:!0,href:!0});var EF=r(pn);av=l(EF,"SPAN",{});var qF=r(av);d($r.$$.fragment,qF),qF.forEach(t),EF.forEach(t),cC=c(Qq),nv=l(Qq,"SPAN",{});var $F=r(nv);hC=n($F,"ZeRO-3 and Infinity Nuances"),$F.forEach(t),Qq.forEach(t),y3=c(e),rc=l(e,"P",{});var kF=r(rc);fC=n(kF,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),kF.forEach(t),b3=c(e),pc=l(e,"P",{});var PF=r(pc);dC=n(PF,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),PF.forEach(t),E3=c(e),ic=l(e,"P",{});var DF=r(ic);mC=n(DF,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),DF.forEach(t),q3=c(e),nt=l(e,"H4",{class:!0});var e$=r(nt);un=l(e$,"A",{id:!0,class:!0,href:!0});var zF=r(un);ov=l(zF,"SPAN",{});var OF=r(ov);d(kr.$$.fragment,OF),OF.forEach(t),zF.forEach(t),_C=c(e$),lv=l(e$,"SPAN",{});var TF=r(lv);vC=n(TF,"Constructing Massive Models"),TF.forEach(t),e$.forEach(t),$3=c(e),cn=l(e,"P",{});var s$=r(cn);jC=n(s$,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),rv=l(s$,"EM",{});var AF=r(rv);gC=n(AF,"deepspeed.zero.Init()"),AF.forEach(t),wC=n(s$,`
context manager (which is also a function decorator), like so:`),s$.forEach(t),k3=c(e),d(Pr.$$.fragment,e),P3=c(e),uc=l(e,"P",{});var SF=r(uc);yC=n(SF,"As you can see this gives you a randomly initialized model."),SF.forEach(t),D3=c(e),D=l(e,"P",{});var W=r(D);bC=n(W,"If you want to use a pretrained model, "),pv=l(W,"CODE",{});var CF=r(pv);EC=n(CF,"model_class.from_pretrained"),CF.forEach(t),qC=n(W,` will activate this feature as long as
`),iv=l(W,"CODE",{});var xF=r(iv);$C=n(xF,"is_deepspeed_zero3_enabled()"),xF.forEach(t),kC=n(W," returns "),uv=l(W,"CODE",{});var RF=r(uv);PC=n(RF,"True"),RF.forEach(t),DC=n(W,`, which currently is setup by the
`),cc=l(W,"A",{href:!0});var IF=r(cc);zC=n(IF,"TrainingArguments"),IF.forEach(t),OC=n(W,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),hc=l(W,"A",{href:!0});var UF=r(hc);TC=n(UF,"TrainingArguments"),UF.forEach(t),AC=n(W," object "),cv=l(W,"STRONG",{});var GF=r(cv);SC=n(GF,"before"),GF.forEach(t),CC=n(W,` calling
`),hv=l(W,"CODE",{});var LF=r(hv);xC=n(LF,"from_pretrained"),LF.forEach(t),RC=n(W,". Here is an example of a possible sequence:"),W.forEach(t),z3=c(e),d(Dr.$$.fragment,e),O3=c(e),hn=l(e,"P",{});var t$=r(hn);IC=n(t$,"If you\u2019re using the official example scripts and your command line arguments include "),fv=l(t$,"CODE",{});var MF=r(fv);UC=n(MF,"--deepspeed ds_config.json"),MF.forEach(t),GC=n(t$,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),t$.forEach(t),T3=c(e),fc=l(e,"P",{});var ZF=r(fc);LC=n(ZF,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),ZF.forEach(t),A3=c(e),fn=l(e,"P",{});var a$=r(fn);MC=n(a$,"For full details on this method and other related features please refer to "),zr=l(a$,"A",{href:!0,rel:!0});var NF=r(zr);ZC=n(NF,"Constructing Massive Models"),NF.forEach(t),NC=n(a$,"."),a$.forEach(t),S3=c(e),fe=l(e,"P",{});var Kn=r(fe);HC=n(Kn,"Also when loading fp16-pretrained models, you will want to tell "),dv=l(Kn,"CODE",{});var HF=r(dv);BC=n(HF,"from_pretrained"),HF.forEach(t),WC=n(Kn,` to use
`),mv=l(Kn,"CODE",{});var BF=r(mv);FC=n(BF,"torch_dtype=torch.float16"),BF.forEach(t),VC=n(Kn,". For details, please, see "),dc=l(Kn,"A",{href:!0});var WF=r(dc);YC=n(WF,"from_pretrained-torch-dtype"),WF.forEach(t),KC=n(Kn,"."),Kn.forEach(t),C3=c(e),ot=l(e,"H4",{class:!0});var n$=r(ot);dn=l(n$,"A",{id:!0,class:!0,href:!0});var FF=r(dn);_v=l(FF,"SPAN",{});var VF=r(_v);d(Or.$$.fragment,VF),VF.forEach(t),FF.forEach(t),JC=c(n$),vv=l(n$,"SPAN",{});var YF=r(vv);XC=n(YF,"Gathering Parameters"),YF.forEach(t),n$.forEach(t),x3=c(e),Tr=l(e,"P",{});var mG=r(Tr);QC=n(mG,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Ar=l(mG,"A",{href:!0,rel:!0});var KF=r(Ar);ex=n(KF,"Gathering Parameters"),KF.forEach(t),mG.forEach(t),R3=c(e),mn=l(e,"P",{});var o$=r(mn);sx=n(o$,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),jv=l(o$,"CODE",{});var JF=r(jv);tx=n(JF,"from_pretrained"),JF.forEach(t),ax=n(o$,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),o$.forEach(t),I3=c(e),mc=l(e,"P",{});var XF=r(mc);nx=n(XF,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),XF.forEach(t),U3=c(e),d(Sr.$$.fragment,e),G3=c(e),ds=l(e,"P",{});var Zh=r(ds);ox=n(Zh,"stress on "),gv=l(Zh,"CODE",{});var QF=r(gv);lx=n(QF,"tensor([1.])"),QF.forEach(t),rx=n(Zh,", or if you get an error where it says the parameter is of size "),wv=l(Zh,"CODE",{});var eV=r(wv);px=n(eV,"1"),eV.forEach(t),ix=n(Zh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Zh.forEach(t),L3=c(e),_c=l(e,"A",{id:!0}),r(_c).forEach(t),M3=c(e),lt=l(e,"H3",{class:!0});var l$=r(lt);_n=l(l$,"A",{id:!0,class:!0,href:!0});var sV=r(_n);yv=l(sV,"SPAN",{});var tV=r(yv);d(Cr.$$.fragment,tV),tV.forEach(t),sV.forEach(t),ux=c(l$),bv=l(l$,"SPAN",{});var aV=r(bv);cx=n(aV,"ZeRO Inference"),aV.forEach(t),l$.forEach(t),Z3=c(e),vc=l(e,"P",{});var nV=r(vc);hx=n(nV,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),nV.forEach(t),N3=c(e),vn=l(e,"P",{});var r$=r(vn);fx=n(r$,"Otherwise you just need to pass the usual "),jc=l(r$,"A",{href:!0});var oV=r(jc);dx=n(oV,"TrainingArguments"),oV.forEach(t),mx=n(r$," arguments. For example:"),r$.forEach(t),H3=c(e),d(xr.$$.fragment,e),B3=c(e),gc=l(e,"P",{});var lV=r(gc);_x=n(lV,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),lV.forEach(t),W3=c(e),jn=l(e,"P",{});var p$=r(jn);vx=n(p$,"Here is an example of running "),Ev=l(p$,"CODE",{});var rV=r(Ev);jx=n(rV,"run_translation.py"),rV.forEach(t),gx=n(p$," under DeepSpeed deploying all available GPUs:"),p$.forEach(t),F3=c(e),d(Rr.$$.fragment,e),V3=c(e),wc=l(e,"P",{});var pV=r(wc);wx=n(pV,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),pV.forEach(t),Y3=c(e),yc=l(e,"P",{});var iV=r(yc);yx=n(iV,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),iV.forEach(t),K3=c(e),rt=l(e,"H3",{class:!0});var i$=r(rt);gn=l(i$,"A",{id:!0,class:!0,href:!0});var uV=r(gn);qv=l(uV,"SPAN",{});var cV=r(qv);d(Ir.$$.fragment,cV),cV.forEach(t),uV.forEach(t),bx=c(i$),$v=l(i$,"SPAN",{});var hV=r($v);Ex=n(hV,"Memory Requirements"),hV.forEach(t),i$.forEach(t),J3=c(e),bc=l(e,"P",{});var fV=r(bc);qx=n(fV,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),fV.forEach(t),X3=c(e),Ec=l(e,"P",{});var dV=r(Ec);$x=n(dV,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),dV.forEach(t),Q3=c(e),d(Ur.$$.fragment,e),e0=c(e),qc=l(e,"P",{});var mV=r(qc);kx=n(mV,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),mV.forEach(t),s0=c(e),$c=l(e,"P",{});var _V=r($c);Px=n(_V,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),_V.forEach(t),t0=c(e),kc=l(e,"P",{});var vV=r(kc);Dx=n(vV,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),vV.forEach(t),a0=c(e),Pc=l(e,"P",{});var jV=r(Pc);zx=n(jV,"For example, let\u2019s repeat the same for 2 GPUs:"),jV.forEach(t),n0=c(e),d(Gr.$$.fragment,e),o0=c(e),Dc=l(e,"P",{});var gV=r(Dc);Ox=n(gV,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),gV.forEach(t),l0=c(e),wn=l(e,"P",{});var u$=r(wn);Tx=n(u$,"For full information please see "),Lr=l(u$,"A",{href:!0,rel:!0});var wV=r(Lr);Ax=n(wV,"memory estimators"),wV.forEach(t),Sx=n(u$,"."),u$.forEach(t),r0=c(e),pt=l(e,"H3",{class:!0});var c$=r(pt);yn=l(c$,"A",{id:!0,class:!0,href:!0});var yV=r(yn);kv=l(yV,"SPAN",{});var bV=r(kv);d(Mr.$$.fragment,bV),bV.forEach(t),yV.forEach(t),Cx=c(c$),Pv=l(c$,"SPAN",{});var EV=r(Pv);xx=n(EV,"Filing Issues"),EV.forEach(t),c$.forEach(t),p0=c(e),zc=l(e,"P",{});var qV=r(zc);Rx=n(qV,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),qV.forEach(t),i0=c(e),Oc=l(e,"P",{});var $V=r(Oc);Ix=n($V,"In your report please always include:"),$V.forEach(t),u0=c(e),H=l(e,"OL",{});var $e=r(H);Dv=l($e,"LI",{});var kV=r(Dv);zv=l(kV,"P",{});var PV=r(zv);Ux=n(PV,"the full Deepspeed config file in the report"),PV.forEach(t),kV.forEach(t),Gx=c($e),Ov=l($e,"LI",{});var DV=r(Ov);Te=l(DV,"P",{});var Jn=r(Te);Lx=n(Jn,"either the command line arguments if you were using the "),Tc=l(Jn,"A",{href:!0});var zV=r(Tc);Mx=n(zV,"Trainer"),zV.forEach(t),Zx=n(Jn,` or
`),Ac=l(Jn,"A",{href:!0});var OV=r(Ac);Nx=n(OV,"TrainingArguments"),OV.forEach(t),Hx=n(Jn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Sc=l(Jn,"A",{href:!0});var TV=r(Sc);Bx=n(TV,"TrainingArguments"),TV.forEach(t),Wx=n(Jn," as it has dozens of entries that are irrelevant."),Jn.forEach(t),DV.forEach(t),Fx=c($e),Zr=l($e,"LI",{});var h$=r(Zr);Tv=l(h$,"P",{});var AV=r(Tv);Vx=n(AV,"Output of:"),AV.forEach(t),Yx=c(h$),d(Nr.$$.fragment,h$),h$.forEach(t),Kx=c($e),Av=l($e,"LI",{});var SV=r(Av);Hr=l(SV,"P",{});var f$=r(Hr);Jx=n(f$,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Br=l(f$,"A",{href:!0,rel:!0});var CV=r(Br);Xx=n(CV,"notebook"),CV.forEach(t),Qx=n(f$,` as
a starting point.`),f$.forEach(t),SV.forEach(t),eR=c($e),Sv=l($e,"LI",{});var xV=r(Sv);Cv=l(xV,"P",{});var RV=r(Cv);sR=n(RV,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),RV.forEach(t),xV.forEach(t),tR=c($e),xv=l($e,"LI",{});var IV=r(xv);Wr=l(IV,"P",{});var d$=r(Wr);aR=n(d$,"If possible try to use one of the existing "),Fr=l(d$,"A",{href:!0,rel:!0});var UV=r(Fr);nR=n(UV,"examples"),UV.forEach(t),oR=n(d$," to reproduce the problem with."),d$.forEach(t),IV.forEach(t),$e.forEach(t),c0=c(e),Cc=l(e,"P",{});var GV=r(Cc);lR=n(GV,"Things to consider:"),GV.forEach(t),h0=c(e),bn=l(e,"UL",{});var m$=r(bn);it=l(m$,"LI",{});var Nh=r(it);Rv=l(Nh,"P",{});var LV=r(Rv);rR=n(LV,"Deepspeed is often not the cause of the problem."),LV.forEach(t),pR=c(Nh),Iv=l(Nh,"P",{});var MV=r(Iv);iR=n(MV,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),MV.forEach(t),uR=c(Nh),Uv=l(Nh,"P",{});var ZV=r(Uv);cR=n(ZV,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),ZV.forEach(t),Nh.forEach(t),hR=c(m$),Gv=l(m$,"LI",{});var NV=r(Gv);Vr=l(NV,"P",{});var _$=r(Vr);fR=n(_$,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Yr=l(_$,"A",{href:!0,rel:!0});var HV=r(Yr);dR=n(HV,"Deepspeed"),HV.forEach(t),mR=n(_$,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),_$.forEach(t),NV.forEach(t),m$.forEach(t),f0=c(e),ut=l(e,"H3",{class:!0});var v$=r(ut);En=l(v$,"A",{id:!0,class:!0,href:!0});var BV=r(En);Lv=l(BV,"SPAN",{});var WV=r(Lv);d(Kr.$$.fragment,WV),WV.forEach(t),BV.forEach(t),_R=c(v$),Mv=l(v$,"SPAN",{});var FV=r(Mv);vR=n(FV,"Troubleshooting"),FV.forEach(t),v$.forEach(t),d0=c(e),ct=l(e,"H4",{class:!0});var j$=r(ct);qn=l(j$,"A",{id:!0,class:!0,href:!0});var VV=r(qn);Zv=l(VV,"SPAN",{});var YV=r(Zv);d(Jr.$$.fragment,YV),YV.forEach(t),VV.forEach(t),jR=c(j$),Xr=l(j$,"SPAN",{});var g$=r(Xr);gR=n(g$,"the "),Nv=l(g$,"CODE",{});var KV=r(Nv);wR=n(KV,"deepspeed"),KV.forEach(t),yR=n(g$," process gets killed at startup without a traceback"),g$.forEach(t),j$.forEach(t),m0=c(e),B=l(e,"P",{});var ke=r(B);bR=n(ke,"If the "),Hv=l(ke,"CODE",{});var JV=r(Hv);ER=n(JV,"deepspeed"),JV.forEach(t),qR=n(ke,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Bv=l(ke,"CODE",{});var XV=r(Bv);$R=n(XV,"offload_optimizer"),XV.forEach(t),kR=n(ke," or "),Wv=l(ke,"CODE",{});var QV=r(Wv);PR=n(QV,"offload_param"),QV.forEach(t),DR=n(ke,` or
both configured to offload to `),Fv=l(ke,"CODE",{});var eY=r(Fv);zR=n(eY,"cpu"),eY.forEach(t),OR=n(ke,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Qr=l(ke,"A",{href:!0,rel:!0});var sY=r(Qr);TR=n(sY,"estimate how much memory is needed for a specific model"),sY.forEach(t),AR=n(ke,"."),ke.forEach(t),_0=c(e),ht=l(e,"H4",{class:!0});var w$=r(ht);$n=l(w$,"A",{id:!0,class:!0,href:!0});var tY=r($n);Vv=l(tY,"SPAN",{});var aY=r(Vv);d(ep.$$.fragment,aY),aY.forEach(t),tY.forEach(t),SR=c(w$),xc=l(w$,"SPAN",{});var _G=r(xc);CR=n(_G,"training and/or eval/predict loss is "),Yv=l(_G,"CODE",{});var nY=r(Yv);xR=n(nY,"NaN"),nY.forEach(t),_G.forEach(t),w$.forEach(t),v0=c(e),Rc=l(e,"P",{});var oY=r(Rc);RR=n(oY,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),oY.forEach(t),j0=c(e),Ic=l(e,"P",{});var lY=r(Ic);IR=n(lY,"The other problem may have to do with using fp16. When you configure this section:"),lY.forEach(t),g0=c(e),d(sp.$$.fragment,e),w0=c(e),kn=l(e,"P",{});var y$=r(kn);UR=n(y$,"and you see in your log that Deepspeed reports "),Kv=l(y$,"CODE",{});var rY=r(Kv);GR=n(rY,"OVERFLOW!"),rY.forEach(t),LR=n(y$," as follows:"),y$.forEach(t),y0=c(e),d(tp.$$.fragment,e),b0=c(e),Uc=l(e,"P",{});var pY=r(Uc);MR=n(pY,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),pY.forEach(t),E0=c(e),Gc=l(e,"P",{});var iY=r(Gc);ZR=n(iY,"(the log was massaged to be more readable here.)"),iY.forEach(t),q0=c(e),ms=l(e,"P",{});var Hh=r(ms);NR=n(Hh,"In this case you usually need to raise the value of "),Jv=l(Hh,"CODE",{});var uY=r(Jv);HR=n(uY,"initial_scale_power"),uY.forEach(t),BR=n(Hh,". Setting it to "),Xv=l(Hh,"CODE",{});var cY=r(Xv);WR=n(cY,'"initial_scale_power": 32'),cY.forEach(t),FR=n(Hh," will typically resolve the problem."),Hh.forEach(t),$0=c(e),ft=l(e,"H3",{class:!0});var b$=r(ft);Pn=l(b$,"A",{id:!0,class:!0,href:!0});var hY=r(Pn);Qv=l(hY,"SPAN",{});var fY=r(Qv);d(ap.$$.fragment,fY),fY.forEach(t),hY.forEach(t),VR=c(b$),ej=l(b$,"SPAN",{});var dY=r(ej);YR=n(dY,"Notes"),dY.forEach(t),b$.forEach(t),k0=c(e),_s=l(e,"UL",{});var Bh=r(_s);Dn=l(Bh,"LI",{});var Mj=r(Dn);KR=n(Mj,"DeepSpeed works with the PyTorch "),Lc=l(Mj,"A",{href:!0});var mY=r(Lc);JR=n(mY,"Trainer"),mY.forEach(t),XR=n(Mj," but not TF "),sj=l(Mj,"CODE",{});var _Y=r(sj);QR=n(_Y,"TFTrainer"),_Y.forEach(t),Mj.forEach(t),eI=c(Bh),np=l(Bh,"LI",{});var E$=r(np);sI=n(E$,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),op=l(E$,"A",{href:!0,rel:!0});var vY=r(op);tI=n(vY,"source"),vY.forEach(t),aI=n(E$,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),E$.forEach(t),nI=c(Bh),dt=l(Bh,"LI",{});var Wh=r(dt);oI=n(Wh,"You don\u2019t have to use the "),Mc=l(Wh,"A",{href:!0});var jY=r(Mc);lI=n(jY,"Trainer"),jY.forEach(t),rI=n(Wh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),lp=l(Wh,"A",{href:!0,rel:!0});var gY=r(lp);pI=n(gY,"the DeepSpeed integration instructions"),gY.forEach(t),iI=n(Wh,"."),Wh.forEach(t),Bh.forEach(t),P0=c(e),Zc=l(e,"A",{id:!0}),r(Zc).forEach(t),D0=c(e),mt=l(e,"H2",{class:!0});var q$=r(mt);zn=l(q$,"A",{id:!0,class:!0,href:!0});var wY=r(zn);tj=l(wY,"SPAN",{});var yY=r(tj);d(rp.$$.fragment,yY),yY.forEach(t),wY.forEach(t),uI=c(q$),aj=l(q$,"SPAN",{});var bY=r(aj);cI=n(bY,"Non-Trainer Deepspeed Integration"),bY.forEach(t),q$.forEach(t),z0=c(e),de=l(e,"P",{});var Xn=r(de);hI=n(Xn,"The "),Nc=l(Xn,"A",{href:!0});var EY=r(Nc);fI=n(EY,"HfDeepSpeedConfig"),EY.forEach(t),dI=n(Xn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Hc=l(Xn,"A",{href:!0});var qY=r(Hc);mI=n(qY,"Trainer"),qY.forEach(t),_I=n(Xn," is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),nj=l(Xn,"CODE",{});var $Y=r(nj);vI=n($Y,"from_pretrained"),$Y.forEach(t),jI=n(Xn," call. Everything else you have to do by yourself."),Xn.forEach(t),O0=c(e),On=l(e,"P",{});var $$=r(On);gI=n($$,"When using "),Bc=l($$,"A",{href:!0});var kY=r(Bc);wI=n(kY,"Trainer"),kY.forEach(t),yI=n($$," everything is automatically taken care of."),$$.forEach(t),T0=c(e),vs=l(e,"P",{});var Fh=r(vs);bI=n(Fh,"When not using "),Wc=l(Fh,"A",{href:!0});var PY=r(Wc);EI=n(PY,"Trainer"),PY.forEach(t),qI=n(Fh,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Fc=l(Fh,"A",{href:!0});var DY=r(Fc);$I=n(DY,"HfDeepSpeedConfig"),DY.forEach(t),kI=n(Fh," object before instantiating the model."),Fh.forEach(t),A0=c(e),Vc=l(e,"P",{});var zY=r(Vc);PI=n(zY,"For example for a pretrained model:"),zY.forEach(t),S0=c(e),d(pp.$$.fragment,e),C0=c(e),Yc=l(e,"P",{});var OY=r(Yc);DI=n(OY,"or for non-pretrained model:"),OY.forEach(t),x0=c(e),d(ip.$$.fragment,e),R0=c(e),me=l(e,"P",{});var Qn=r(me);zI=n(Qn,"Please note that if you\u2019re not using the "),Kc=l(Qn,"A",{href:!0});var TY=r(Kc);OI=n(TY,"Trainer"),TY.forEach(t),TI=n(Qn," integration, you\u2019re completely on your own. Basically follow the documentation on the "),up=l(Qn,"A",{href:!0,rel:!0});var AY=r(up);AI=n(AY,"Deepspeed"),AY.forEach(t),SI=n(Qn," website. Also you have to configure explicitly the config file - you can\u2019t use "),oj=l(Qn,"CODE",{});var SY=r(oj);CI=n(SY,'"auto"'),SY.forEach(t),xI=n(Qn," values and you will have to put real values instead."),Qn.forEach(t),I0=c(e),_t=l(e,"H2",{class:!0});var k$=r(_t);Tn=l(k$,"A",{id:!0,class:!0,href:!0});var CY=r(Tn);lj=l(CY,"SPAN",{});var xY=r(lj);d(cp.$$.fragment,xY),xY.forEach(t),CY.forEach(t),RI=c(k$),rj=l(k$,"SPAN",{});var RY=r(rj);II=n(RY,"HfDeepSpeedConfig"),RY.forEach(t),k$.forEach(t),U0=c(e),P=l(e,"DIV",{class:!0});var F=r(P);d(hp.$$.fragment,F),UI=c(F),pj=l(F,"P",{});var IY=r(pj);GI=n(IY,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),IY.forEach(t),LI=c(F),Ae=l(F,"P",{});var eo=r(Ae);MI=n(eo,"A "),ij=l(eo,"CODE",{});var UY=r(ij);ZI=n(UY,"weakref"),UY.forEach(t),NI=n(eo,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),uj=l(eo,"CODE",{});var GY=r(uj);HI=n(GY,"from_pretrained"),GY.forEach(t),BI=n(eo," and "),cj=l(eo,"CODE",{});var LY=r(cj);WI=n(LY,"_get_resized_embeddings"),LY.forEach(t),FI=n(eo,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),eo.forEach(t),VI=c(F),_e=l(F,"P",{});var bt=r(_e);Jc=l(bt,"A",{href:!0});var MY=r(Jc);YI=n(MY,"Trainer"),MY.forEach(t),KI=n(bt," uses the "),hj=l(bt,"CODE",{});var ZY=r(hj);JI=n(ZY,"HfTrainerDeepSpeedConfig"),ZY.forEach(t),XI=n(bt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Xc=l(bt,"A",{href:!0});var NY=r(Xc);QI=n(NY,"TrainingArguments"),NY.forEach(t),eU=n(bt," by replacing special placeholder values: "),fj=l(bt,"CODE",{});var HY=r(fj);sU=n(HY,'"auto"'),HY.forEach(t),tU=n(bt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),bt.forEach(t),aU=c(F),js=l(F,"DIV",{class:!0});var Vh=r(js);d(fp.$$.fragment,Vh),nU=c(Vh),dj=l(Vh,"P",{});var BY=r(dj);oU=n(BY,"Deletes a sub-section of the config file if it\u2019s found."),BY.forEach(t),lU=c(Vh),vt=l(Vh,"P",{});var Yh=r(vt);rU=n(Yh,"Unless "),mj=l(Yh,"CODE",{});var WY=r(mj);pU=n(WY,"must_exist"),WY.forEach(t),iU=n(Yh," is "),_j=l(Yh,"CODE",{});var FY=r(_j);uU=n(FY,"True"),FY.forEach(t),cU=n(Yh," the section doesn\u2019t have to exist."),Yh.forEach(t),Vh.forEach(t),hU=c(F),An=l(F,"DIV",{class:!0});var P$=r(An);d(dp.$$.fragment,P$),fU=c(P$),mp=l(P$,"P",{});var D$=r(mp);dU=n(D$,"Returns the set value or "),vj=l(D$,"CODE",{});var VY=r(vj);mU=n(VY,"default"),VY.forEach(t),_U=n(D$," if no value is set"),D$.forEach(t),P$.forEach(t),vU=c(F),Sn=l(F,"DIV",{class:!0});var z$=r(Sn);d(_p.$$.fragment,z$),jU=c(z$),jt=l(z$,"P",{});var Kh=r(jt);gU=n(Kh,"Returns "),jj=l(Kh,"CODE",{});var YY=r(jj);wU=n(YY,"True"),YY.forEach(t),yU=n(Kh,"/"),gj=l(Kh,"CODE",{});var KY=r(gj);bU=n(KY,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),KY.forEach(t),EU=n(Kh," or isn\u2019t set)."),Kh.forEach(t),z$.forEach(t),qU=c(F),Cn=l(F,"DIV",{class:!0});var O$=r(Cn);d(vp.$$.fragment,O$),$U=c(O$),gt=l(O$,"P",{});var Jh=r(gt);kU=n(Jh,"Returns "),wj=l(Jh,"CODE",{});var JY=r(wj);PU=n(JY,"True"),JY.forEach(t),DU=n(Jh,"/"),yj=l(Jh,"CODE",{});var XY=r(yj);zU=n(XY,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),XY.forEach(t),OU=n(Jh," or isn\u2019t set)."),Jh.forEach(t),O$.forEach(t),F.forEach(t),G0=c(e),wt=l(e,"H3",{class:!0});var T$=r(wt);xn=l(T$,"A",{id:!0,class:!0,href:!0});var QY=r(xn);bj=l(QY,"SPAN",{});var eK=r(bj);d(jp.$$.fragment,eK),eK.forEach(t),QY.forEach(t),TU=c(T$),Ej=l(T$,"SPAN",{});var sK=r(Ej);AU=n(sK,"Custom DeepSpeed ZeRO Inference"),sK.forEach(t),T$.forEach(t),L0=c(e),Rn=l(e,"P",{});var A$=r(Rn);SU=n(A$,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Qc=l(A$,"A",{href:!0});var tK=r(Qc);CU=n(tK,"Trainer"),tK.forEach(t),xU=n(A$," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),A$.forEach(t),M0=c(e),eh=l(e,"P",{});var aK=r(eh);RU=n(aK,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),aK.forEach(t),Z0=c(e),sh=l(e,"P",{});var nK=r(sh);IU=n(nK,"The example has copious notes and is self-documenting."),nK.forEach(t),N0=c(e),th=l(e,"P",{});var oK=r(th);UU=n(oK,"Make sure to:"),oK.forEach(t),H0=c(e),In=l(e,"OL",{});var S$=r(In);qj=l(S$,"LI",{});var lK=r(qj);GU=n(lK,"disable CPU offload if you have enough GPU memory (since it slows things down)"),lK.forEach(t),LU=c(S$),$j=l(S$,"LI",{});var rK=r($j);MU=n(rK,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),rK.forEach(t),S$.forEach(t),B0=c(e),d(gp.$$.fragment,e),W0=c(e),Un=l(e,"P",{});var C$=r(Un);ZU=n(C$,"Let\u2019s save it as "),kj=l(C$,"CODE",{});var pK=r(kj);NU=n(pK,"t0.py"),pK.forEach(t),HU=n(C$," and run it:"),C$.forEach(t),F0=c(e),d(wp.$$.fragment,e),V0=c(e),ah=l(e,"P",{});var iK=r(ah);BU=n(iK,"This was a very basic example and you will want to adapt it to your needs."),iK.forEach(t),Y0=c(e),yt=l(e,"H2",{class:!0});var x$=r(yt);Gn=l(x$,"A",{id:!0,class:!0,href:!0});var uK=r(Gn);Pj=l(uK,"SPAN",{});var cK=r(Pj);d(yp.$$.fragment,cK),cK.forEach(t),uK.forEach(t),WU=c(x$),Dj=l(x$,"SPAN",{});var hK=r(Dj);FU=n(hK,"Main DeepSpeed Resources"),hK.forEach(t),x$.forEach(t),K0=c(e),ve=l(e,"UL",{});var so=r(ve);zj=l(so,"LI",{});var fK=r(zj);bp=l(fK,"A",{href:!0,rel:!0});var dK=r(bp);VU=n(dK,"Project\u2019s github"),dK.forEach(t),fK.forEach(t),YU=c(so),Oj=l(so,"LI",{});var mK=r(Oj);Ep=l(mK,"A",{href:!0,rel:!0});var _K=r(Ep);KU=n(_K,"Usage docs"),_K.forEach(t),mK.forEach(t),JU=c(so),Tj=l(so,"LI",{});var vK=r(Tj);qp=l(vK,"A",{href:!0,rel:!0});var jK=r(qp);XU=n(jK,"API docs"),jK.forEach(t),vK.forEach(t),QU=c(so),Aj=l(so,"LI",{});var gK=r(Aj);$p=l(gK,"A",{href:!0,rel:!0});var wK=r($p);eG=n(wK,"Blog posts"),wK.forEach(t),gK.forEach(t),so.forEach(t),J0=c(e),nh=l(e,"P",{});var yK=r(nh);sG=n(yK,"Papers:"),yK.forEach(t),X0=c(e),gs=l(e,"UL",{});var Xh=r(gs);Sj=l(Xh,"LI",{});var bK=r(Sj);kp=l(bK,"A",{href:!0,rel:!0});var EK=r(kp);tG=n(EK,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),EK.forEach(t),bK.forEach(t),aG=c(Xh),Cj=l(Xh,"LI",{});var qK=r(Cj);Pp=l(qK,"A",{href:!0,rel:!0});var $K=r(Pp);nG=n($K,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),$K.forEach(t),qK.forEach(t),oG=c(Xh),xj=l(Xh,"LI",{});var kK=r(xj);Dp=l(kK,"A",{href:!0,rel:!0});var PK=r(Dp);lG=n(PK,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),PK.forEach(t),kK.forEach(t),Xh.forEach(t),Q0=c(e),ws=l(e,"P",{});var Qh=r(ws);rG=n(Qh,"Finally, please, remember that, HuggingFace "),oh=l(Qh,"A",{href:!0});var DK=r(oh);pG=n(DK,"Trainer"),DK.forEach(t),iG=n(Qh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),zp=l(Qh,"A",{href:!0,rel:!0});var zK=r(zp);uG=n(zK,"DeepSpeed GitHub"),zK.forEach(t),cG=n(Qh,"."),Qh.forEach(t),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(UK)),h(q,"id","deepspeed-integration"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#deepspeed-integration"),h(b,"class","relative group"),h(E,"href","https://github.com/microsoft/DeepSpeed"),h(E,"rel","nofollow"),h(V,"href","https://arxiv.org/abs/1910.02054"),h(V,"rel","nofollow"),h(to,"href","https://arxiv.org/abs/2101.06840"),h(to,"rel","nofollow"),h(ao,"href","https://arxiv.org/abs/2104.07857"),h(ao,"rel","nofollow"),h(no,"href","https://github.com/microsoft/DeepSpeed"),h(no,"rel","nofollow"),h(Gp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Lp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","#deepspeed-non-trainer-integration"),h(Fp,"href","#deepspeed-zero-inference"),h(Yp,"id","deepspeed-trainer-integration"),h($t,"id","trainer-deepspeed-integration"),h($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($t,"href","#trainer-deepspeed-integration"),h(ks,"class","relative group"),h(Kp,"id","deepspeed-installation"),h(kt,"id","installation"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#installation"),h(Ps,"class","relative group"),h(co,"href","https://github.com/microsoft/deepspeed#installation"),h(co,"rel","nofollow"),h(ho,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(ho,"rel","nofollow"),h(Xp,"href","#zero-install-notes"),h(vo,"href","https://developer.nvidia.com/cuda-gpus"),h(vo,"rel","nofollow"),h(yo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(yo,"rel","nofollow"),h(oi,"id","deepspeed-multi-gpu"),h(St,"id","deployment-with-multiple-gpus"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#deployment-with-multiple-gpus"),h(Ds,"class","relative group"),h(li,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Eo,"href","https://www.deepspeed.ai/docs/config-json/"),h(Eo,"rel","nofollow"),h(ko,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(ko,"rel","nofollow"),h(Do,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(Do,"rel","nofollow"),h(ii,"id","deepspeed-one-gpu"),h(Gt,"id","deployment-with-one-gpu"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#deployment-with-one-gpu"),h(Os,"class","relative group"),h(ui,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(To,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(To,"rel","nofollow"),h(So,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(So,"rel","nofollow"),h(vi,"id","deepspeed-notebook"),h(Nt,"id","deployment-in-notebooks"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#deployment-in-notebooks"),h(As,"class","relative group"),h(bi,"id","deepspeed-config"),h(Vt,"id","configuration"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#configuration"),h(Ss,"class","relative group"),h(Zo,"href","https://www.deepspeed.ai/docs/config-json/"),h(Zo,"rel","nofollow"),h(No,"href","https://github.com/microsoft/DeepSpeedExamples"),h(No,"rel","nofollow"),h(Wo,"href","https://github.com/microsoft/DeepSpeed"),h(Wo,"rel","nofollow"),h(qi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h($i,"id","deepspeed-config-passing"),h(ea,"id","passing-configuration"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#passing-configuration"),h(Cs,"class","relative group"),h(ki,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Pi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Di,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ti,"id","deepspeed-config-shared"),h(sa,"id","shared-configuration"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#shared-configuration"),h(xs,"class","relative group"),h(Ai,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Si,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(xi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ii,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ui,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Gi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Li,"id","deepspeed-zero"),h(la,"id","zero"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#zero"),h(Rs,"class","relative group"),h(sl,"href","https://www.deepspeed.ai/tutorials/zero/"),h(sl,"rel","nofollow"),h(tl,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(tl,"rel","nofollow"),h(Mi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ni,"id","deepspeed-zero2-config"),h(pa,"id","zero2-config"),h(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pa,"href","#zero2-config"),h(Is,"class","relative group"),h(Fi,"id","deepspeed-zero3-config"),h(ia,"id","zero3-config"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#zero3-config"),h(Gs,"class","relative group"),h(Ji,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Qi,"id","deepspeed-nvme"),h(ha,"id","nvme-support"),h(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ha,"href","#nvme-support"),h(Ls,"class","relative group"),h(gl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(gl,"rel","nofollow"),h(wl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(wl,"rel","nofollow"),h(yl,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(yl,"rel","nofollow"),h(tu,"id","deepspeed-zero2-zero3-performance"),h(ma,"id","zero2-vs-zero3-performance"),h(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ma,"href","#zero2-vs-zero3-performance"),h(Ms,"class","relative group"),h(ou,"id","deepspeed-zero2-example"),h(va,"id","zero2-example"),h(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(va,"href","#zero2-example"),h(Ns,"class","relative group"),h(lu,"id","deepspeed-zero3-example"),h(wa,"id","zero3-example"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#zero3-example"),h(Hs,"class","relative group"),h(Ea,"id","optimizer-and-scheduler"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#optimizer-and-scheduler"),h(Bs,"class","relative group"),h(pu,"id","deepspeed-optimizer"),h(ka,"id","optimizer"),h(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ka,"href","#optimizer"),h(Ws,"class","relative group"),h(Al,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(Al,"rel","nofollow"),h(iu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(fu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(mu,"id","deepspeed-scheduler"),h(Da,"id","scheduler"),h(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Da,"href","#scheduler"),h(Fs,"class","relative group"),h(Ml,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(Ml,"rel","nofollow"),h(vu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ju,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(wu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(yu,"id","deepspeed-fp32"),h(Ca,"id","fp32-precision"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#fp32-precision"),h(Vs,"class","relative group"),h(Vl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Vl,"rel","nofollow"),h(Eu,"id","deepspeed-amp"),h(Ia,"id","automatic-mixed-precision"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#automatic-mixed-precision"),h(Ys,"class","relative group"),h(Ua,"id","fp16"),h(Ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ua,"href","#fp16"),h(Ks,"class","relative group"),h(ku,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Du,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ql,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Ql,"rel","nofollow"),h(Ma,"id","bf16"),h(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ma,"href","#bf16"),h(Js,"class","relative group"),h(Na,"id","apex"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#apex"),h(Xs,"class","relative group"),h(Su,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(xu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(lr,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(lr,"rel","nofollow"),h(Ru,"id","deepspeed-bs"),h(Fa,"id","batch-size"),h(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fa,"href","#batch-size"),h(Qs,"class","relative group"),h(Uu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Lu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mu,"id","deepspeed-grad-acc"),h(Ya,"id","gradient-accumulation"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#gradient-accumulation"),h(et,"class","relative group"),h(Nu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Bu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wu,"id","deepspeed-grad-clip"),h(Ja,"id","gradient-clipping"),h(Ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ja,"href","#gradient-clipping"),h(st,"class","relative group"),h(Vu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ku,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ju,"id","deepspeed-weight-extraction"),h(Qa,"id","getting-the-model-weights-out"),h(Qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qa,"href","#getting-the-model-weights-out"),h(tt,"class","relative group"),h(jr,"href","https://huggingface.co/models"),h(jr,"rel","nofollow"),h(pn,"id","zero3-and-infinity-nuances"),h(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pn,"href","#zero3-and-infinity-nuances"),h(at,"class","relative group"),h(un,"id","constructing-massive-models"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#constructing-massive-models"),h(nt,"class","relative group"),h(cc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(hc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(zr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(zr,"rel","nofollow"),h(dc,"href","#from_pretrained-torch-dtype"),h(dn,"id","gathering-parameters"),h(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(dn,"href","#gathering-parameters"),h(ot,"class","relative group"),h(Ar,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Ar,"rel","nofollow"),h(_c,"id","deepspeed-zero-inference"),h(_n,"id","zero-inference"),h(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_n,"href","#zero-inference"),h(lt,"class","relative group"),h(jc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(gn,"id","memory-requirements"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#memory-requirements"),h(rt,"class","relative group"),h(Lr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Lr,"rel","nofollow"),h(yn,"id","filing-issues"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#filing-issues"),h(pt,"class","relative group"),h(Tc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ac,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Sc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Br,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Br,"rel","nofollow"),h(Fr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(Fr,"rel","nofollow"),h(Yr,"href","https://github.com/microsoft/DeepSpeed/"),h(Yr,"rel","nofollow"),h(En,"id","troubleshooting"),h(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(En,"href","#troubleshooting"),h(ut,"class","relative group"),h(qn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(ct,"class","relative group"),h(Qr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Qr,"rel","nofollow"),h($n,"id","training-andor-evalpredict-loss-is-nan"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#training-andor-evalpredict-loss-is-nan"),h(ht,"class","relative group"),h(Pn,"id","notes"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#notes"),h(ft,"class","relative group"),h(Lc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(op,"href","https://github.com/microsoft/deepspeed#installation"),h(op,"rel","nofollow"),h(Mc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(lp,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(lp,"rel","nofollow"),h(Zc,"id","deepspeed-non-trainer-integration"),h(zn,"id","nontrainer-deepspeed-integration"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#nontrainer-deepspeed-integration"),h(mt,"class","relative group"),h(Nc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Hc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Bc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Kc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(up,"href","https://www.deepspeed.ai/"),h(up,"rel","nofollow"),h(Tn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(_t,"class","relative group"),h(Jc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Xc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(js,"class","docstring"),h(An,"class","docstring"),h(Sn,"class","docstring"),h(Cn,"class","docstring"),h(P,"class","docstring"),h(xn,"id","custom-deepspeed-zero-inference"),h(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xn,"href","#custom-deepspeed-zero-inference"),h(wt,"class","relative group"),h(Qc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Gn,"id","main-deepspeed-resources"),h(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gn,"href","#main-deepspeed-resources"),h(yt,"class","relative group"),h(bp,"href","https://github.com/microsoft/deepspeed"),h(bp,"rel","nofollow"),h(Ep,"href","https://www.deepspeed.ai/getting-started/"),h(Ep,"rel","nofollow"),h(qp,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(qp,"rel","nofollow"),h($p,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h($p,"rel","nofollow"),h(kp,"href","https://arxiv.org/abs/1910.02054"),h(kp,"rel","nofollow"),h(Pp,"href","https://arxiv.org/abs/2101.06840"),h(Pp,"rel","nofollow"),h(Dp,"href","https://arxiv.org/abs/2104.07857"),h(Dp,"rel","nofollow"),h(oh,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(zp,"href","https://github.com/microsoft/DeepSpeed/issues"),h(zp,"rel","nofollow")},m(e,p){s(document.head,y),i(e,z,p),i(e,b,p),s(b,q),s(q,ee),m(O,ee,null),s(b,x),s(b,se),s(se,R),i(e,ae,p),i(e,C,p),s(C,E),s(E,$),s(C,qs),s(C,V),s(V,$s),s(C,R$),i(e,Nj,p),i(e,I,p),s(I,ef),s(ef,I$),s(I,U$),s(I,sf),s(sf,G$),s(I,L$),s(I,tf),s(tf,M$),s(I,Z$),s(I,af),s(af,N$),s(I,H$),s(I,nf),s(nf,B$),s(I,W$),s(I,of),s(of,F$),i(e,Hj,p),i(e,Se,p),s(Se,V$),s(Se,to),s(to,Y$),s(Se,K$),s(Se,ao),s(ao,J$),s(Se,X$),i(e,Bj,p),i(e,Ip,p),s(Ip,Q$),i(e,Wj,p),i(e,Up,p),s(Up,e6),i(e,Fj,p),i(e,Et,p),s(Et,s6),s(Et,no),s(no,t6),s(Et,a6),i(e,Vj,p),i(e,qt,p),s(qt,oo),s(oo,n6),s(oo,Gp),s(Gp,o6),s(oo,l6),s(qt,r6),s(qt,Y),s(Y,p6),s(Y,Lp),s(Lp,i6),s(Y,u6),s(Y,lf),s(lf,c6),s(Y,h6),s(Y,rf),s(rf,f6),s(Y,d6),s(Y,pf),s(pf,m6),s(Y,_6),s(Y,Mp),s(Mp,v6),s(Y,j6),i(e,Yj,p),i(e,Zp,p),s(Zp,g6),i(e,Kj,p),i(e,Np,p),s(Np,w6),i(e,Jj,p),i(e,Hp,p),s(Hp,uf),s(uf,y6),i(e,Xj,p),i(e,Bp,p),s(Bp,b6),i(e,Qj,p),i(e,Wp,p),s(Wp,lo),s(lo,E6),s(lo,Fp),s(Fp,q6),s(lo,$6),i(e,eg,p),i(e,Vp,p),s(Vp,k6),i(e,sg,p),i(e,Yp,p),i(e,tg,p),i(e,ks,p),s(ks,$t),s($t,cf),m(ro,cf,null),s(ks,P6),s(ks,hf),s(hf,D6),i(e,ag,p),i(e,Kp,p),i(e,ng,p),i(e,Ps,p),s(Ps,kt),s(kt,ff),m(po,ff,null),s(Ps,z6),s(Ps,df),s(df,O6),i(e,og,p),i(e,Jp,p),s(Jp,T6),i(e,lg,p),m(io,e,p),i(e,rg,p),i(e,Ce,p),s(Ce,A6),s(Ce,mf),s(mf,S6),s(Ce,C6),s(Ce,_f),s(_f,x6),s(Ce,R6),i(e,pg,p),m(uo,e,p),i(e,ig,p),i(e,xe,p),s(xe,I6),s(xe,co),s(co,U6),s(xe,G6),s(xe,ho),s(ho,L6),s(xe,M6),i(e,ug,p),i(e,Pt,p),s(Pt,Z6),s(Pt,Xp),s(Xp,N6),s(Pt,H6),i(e,cg,p),i(e,Qp,p),s(Qp,B6),i(e,hg,p),i(e,ei,p),s(ei,W6),i(e,fg,p),m(fo,e,p),i(e,dg,p),i(e,Re,p),s(Re,F6),s(Re,vf),s(vf,V6),s(Re,Y6),s(Re,jf),s(jf,K6),s(Re,J6),i(e,mg,p),i(e,Dt,p),s(Dt,X6),s(Dt,gf),s(gf,Q6),s(Dt,e4),i(e,_g,p),m(mo,e,p),i(e,vg,p),i(e,Pe,p),s(Pe,s4),s(Pe,wf),s(wf,t4),s(Pe,a4),s(Pe,yf),s(yf,n4),s(Pe,o4),s(Pe,bf),s(bf,l4),i(e,jg,p),i(e,si,p),s(si,r4),i(e,gg,p),m(_o,e,p),i(e,wg,p),i(e,Ie,p),s(Ie,p4),s(Ie,Ef),s(Ef,i4),s(Ie,u4),s(Ie,qf),s(qf,c4),s(Ie,h4),i(e,yg,p),i(e,zt,p),s(zt,f4),s(zt,$f),s($f,d4),s(zt,m4),i(e,bg,p),i(e,Ue,p),s(Ue,_4),s(Ue,kf),s(kf,v4),s(Ue,j4),s(Ue,vo),s(vo,g4),s(Ue,w4),i(e,Eg,p),i(e,ti,p),s(ti,y4),i(e,qg,p),m(jo,e,p),i(e,$g,p),i(e,ai,p),s(ai,b4),i(e,kg,p),m(go,e,p),i(e,Pg,p),i(e,ni,p),s(ni,E4),i(e,Dg,p),m(wo,e,p),i(e,zg,p),i(e,Ot,p),s(Ot,q4),s(Ot,Pf),s(Pf,$4),s(Ot,k4),i(e,Og,p),i(e,Tt,p),s(Tt,P4),s(Tt,Df),s(Df,D4),s(Tt,z4),i(e,Tg,p),i(e,At,p),s(At,O4),s(At,yo),s(yo,T4),s(At,A4),i(e,Ag,p),i(e,oi,p),i(e,Sg,p),i(e,Ds,p),s(Ds,St),s(St,zf),m(bo,zf,null),s(Ds,S4),s(Ds,Of),s(Of,C4),i(e,Cg,p),i(e,Ct,p),s(Ct,x4),s(Ct,li),s(li,R4),s(Ct,I4),i(e,xg,p),i(e,xt,p),s(xt,zs),s(zs,U4),s(zs,Tf),s(Tf,G4),s(zs,L4),s(zs,Af),s(Af,M4),s(zs,Z4),s(xt,N4),s(xt,De),s(De,H4),s(De,Sf),s(Sf,B4),s(De,W4),s(De,Cf),s(Cf,F4),s(De,V4),s(De,Eo),s(Eo,Y4),s(De,K4),i(e,Rg,p),i(e,ri,p),s(ri,J4),i(e,Ig,p),m(qo,e,p),i(e,Ug,p),i(e,pi,p),s(pi,X4),i(e,Gg,p),m($o,e,p),i(e,Lg,p),i(e,U,p),s(U,Q4),s(U,xf),s(xf,e5),s(U,s5),s(U,Rf),s(Rf,t5),s(U,a5),s(U,If),s(If,n5),s(U,o5),s(U,Uf),s(Uf,l5),s(U,r5),s(U,ko),s(ko,p5),s(U,i5),i(e,Mg,p),i(e,ne,p),s(ne,u5),s(ne,Gf),s(Gf,c5),s(ne,h5),s(ne,Lf),s(Lf,f5),s(ne,d5),s(ne,Mf),s(Mf,m5),s(ne,_5),i(e,Zg,p),i(e,Rt,p),s(Rt,v5),s(Rt,Zf),s(Zf,j5),s(Rt,g5),i(e,Ng,p),m(Po,e,p),i(e,Hg,p),i(e,It,p),s(It,w5),s(It,Nf),s(Nf,y5),s(It,b5),i(e,Bg,p),i(e,Ut,p),s(Ut,E5),s(Ut,Do),s(Do,q5),s(Ut,$5),i(e,Wg,p),i(e,ii,p),i(e,Fg,p),i(e,Os,p),s(Os,Gt),s(Gt,Hf),m(zo,Hf,null),s(Os,k5),s(Os,Bf),s(Bf,P5),i(e,Vg,p),i(e,Lt,p),s(Lt,D5),s(Lt,ui),s(ui,z5),s(Lt,O5),i(e,Yg,p),m(Oo,e,p),i(e,Kg,p),i(e,Ge,p),s(Ge,T5),s(Ge,Wf),s(Wf,A5),s(Ge,S5),s(Ge,To),s(To,C5),s(Ge,x5),i(e,Jg,p),i(e,ci,p),s(ci,R5),i(e,Xg,p),i(e,Mt,p),s(Mt,Ff),s(Ff,I5),s(Mt,U5),s(Mt,Vf),s(Vf,G5),i(e,Qg,p),i(e,hi,p),s(hi,L5),i(e,ew,p),m(Ao,e,p),i(e,sw,p),i(e,fi,p),s(fi,M5),i(e,tw,p),i(e,Zt,p),s(Zt,Z5),s(Zt,So),s(So,N5),s(Zt,H5),i(e,aw,p),i(e,di,p),s(di,B5),i(e,nw,p),i(e,mi,p),s(mi,W5),i(e,ow,p),i(e,_i,p),s(_i,Ts),s(Ts,Co),s(Co,F5),s(Co,Yf),s(Yf,V5),s(Co,Y5),s(Ts,K5),m(xo,Ts,null),s(Ts,J5),s(Ts,Kf),s(Kf,X5),i(e,lw,p),i(e,vi,p),i(e,rw,p),i(e,As,p),s(As,Nt),s(Nt,Jf),m(Ro,Jf,null),s(As,Q5),s(As,Xf),s(Xf,e8),i(e,pw,p),i(e,Ht,p),s(Ht,s8),s(Ht,Qf),s(Qf,t8),s(Ht,a8),i(e,iw,p),i(e,ji,p),s(ji,n8),i(e,uw,p),m(Io,e,p),i(e,cw,p),i(e,Bt,p),s(Bt,o8),s(Bt,ed),s(ed,l8),s(Bt,r8),i(e,hw,p),i(e,gi,p),s(gi,p8),i(e,fw,p),i(e,wi,p),s(wi,i8),i(e,dw,p),m(Uo,e,p),i(e,mw,p),i(e,Le,p),s(Le,u8),s(Le,sd),s(sd,c8),s(Le,h8),s(Le,td),s(td,f8),s(Le,d8),i(e,_w,p),m(Go,e,p),i(e,vw,p),i(e,Wt,p),s(Wt,m8),s(Wt,ad),s(ad,_8),s(Wt,v8),i(e,jw,p),m(Lo,e,p),i(e,gw,p),i(e,yi,p),s(yi,j8),i(e,ww,p),i(e,Ft,p),s(Ft,g8),s(Ft,nd),s(nd,w8),s(Ft,y8),i(e,yw,p),i(e,bi,p),i(e,bw,p),i(e,Ss,p),s(Ss,Vt),s(Vt,od),m(Mo,od,null),s(Ss,b8),s(Ss,ld),s(ld,E8),i(e,Ew,p),i(e,Yt,p),s(Yt,q8),s(Yt,Zo),s(Zo,$8),s(Yt,k8),i(e,qw,p),i(e,Kt,p),s(Kt,P8),s(Kt,No),s(No,D8),s(Kt,z8),i(e,$w,p),m(Ho,e,p),i(e,kw,p),i(e,Jt,p),s(Jt,O8),s(Jt,rd),s(rd,T8),s(Jt,A8),i(e,Pw,p),m(Bo,e,p),i(e,Dw,p),i(e,Xt,p),s(Xt,S8),s(Xt,Wo),s(Wo,C8),s(Xt,x8),i(e,zw,p),i(e,Ei,p),s(Ei,R8),i(e,Ow,p),i(e,oe,p),s(oe,I8),s(oe,pd),s(pd,U8),s(oe,G8),s(oe,id),s(id,L8),s(oe,M8),s(oe,ud),s(ud,Z8),s(oe,N8),i(e,Tw,p),m(Fo,e,p),i(e,Aw,p),i(e,Qt,p),s(Qt,H8),s(Qt,qi),s(qi,B8),s(Qt,W8),i(e,Sw,p),i(e,$i,p),i(e,Cw,p),i(e,Cs,p),s(Cs,ea),s(ea,cd),m(Vo,cd,null),s(Cs,F8),s(Cs,hd),s(hd,V8),i(e,xw,p),i(e,G,p),s(G,Y8),s(G,ki),s(ki,K8),s(G,J8),s(G,Pi),s(Pi,X8),s(G,Q8),s(G,fd),s(fd,ek),s(G,sk),s(G,dd),s(dd,tk),s(G,ak),s(G,Di),s(Di,nk),s(G,ok),i(e,Rw,p),i(e,zi,p),s(zi,lk),i(e,Iw,p),m(Yo,e,p),i(e,Uw,p),i(e,Oi,p),s(Oi,rk),i(e,Gw,p),m(Ko,e,p),i(e,Lw,p),i(e,Ti,p),i(e,Mw,p),i(e,xs,p),s(xs,sa),s(sa,md),m(Jo,md,null),s(xs,pk),s(xs,_d),s(_d,ik),i(e,Zw,p),m(ta,e,p),i(e,Nw,p),i(e,Me,p),s(Me,uk),s(Me,Ai),s(Ai,ck),s(Me,hk),s(Me,Si),s(Si,fk),s(Me,dk),i(e,Hw,p),i(e,aa,p),s(aa,mk),s(aa,Ci),s(Ci,_k),s(aa,vk),i(e,Bw,p),i(e,Ze,p),s(Ze,jk),s(Ze,vd),s(vd,gk),s(Ze,wk),s(Ze,xi),s(xi,yk),s(Ze,bk),i(e,Ww,p),i(e,Ri,p),s(Ri,Ek),i(e,Fw,p),i(e,na,p),s(na,qk),s(na,Ii),s(Ii,$k),s(na,kk),i(e,Vw,p),i(e,oa,p),s(oa,jd),s(jd,Pk),s(oa,Dk),s(oa,Xo),s(Xo,zk),s(Xo,Ui),s(Ui,Ok),s(Xo,Tk),i(e,Yw,p),i(e,le,p),s(le,Ak),s(le,gd),s(gd,Sk),s(le,Ck),s(le,Gi),s(Gi,xk),s(le,Rk),s(le,wd),s(wd,Ik),s(le,Uk),i(e,Kw,p),i(e,Li,p),i(e,Jw,p),i(e,Rs,p),s(Rs,la),s(la,yd),m(Qo,yd,null),s(Rs,Gk),s(Rs,bd),s(bd,Lk),i(e,Xw,p),i(e,el,p),s(el,sl),s(sl,Mk),s(el,Zk),i(e,Qw,p),i(e,Ne,p),s(Ne,Nk),s(Ne,Ed),s(Ed,Hk),s(Ne,Bk),s(Ne,tl),s(tl,Wk),s(Ne,Fk),i(e,ey,p),i(e,ra,p),s(ra,Vk),s(ra,Mi),s(Mi,Yk),s(ra,Kk),i(e,sy,p),i(e,Zi,p),s(Zi,Jk),i(e,ty,p),i(e,Ni,p),i(e,ay,p),i(e,Is,p),s(Is,pa),s(pa,qd),m(al,qd,null),s(Is,Xk),s(Is,$d),s($d,Qk),i(e,ny,p),i(e,Hi,p),s(Hi,e7),i(e,oy,p),m(nl,e,p),i(e,ly,p),i(e,Bi,p),s(Bi,kd),s(kd,s7),i(e,ry,p),i(e,He,p),s(He,Us),s(Us,t7),s(Us,Pd),s(Pd,a7),s(Us,n7),s(Us,Dd),s(Dd,o7),s(Us,l7),s(He,r7),s(He,L),s(L,zd),s(zd,p7),s(L,i7),s(L,Od),s(Od,u7),s(L,c7),s(L,Td),s(Td,h7),s(L,f7),s(L,Ad),s(Ad,d7),s(L,m7),s(L,Sd),s(Sd,_7),s(L,v7),s(L,Cd),s(Cd,j7),s(L,g7),s(He,w7),s(He,xd),s(xd,y7),i(e,py,p),i(e,Be,p),s(Be,b7),s(Be,Rd),s(Rd,E7),s(Be,q7),s(Be,Id),s(Id,$7),s(Be,k7),i(e,iy,p),m(ol,e,p),i(e,uy,p),i(e,Wi,p),s(Wi,P7),i(e,cy,p),i(e,Fi,p),i(e,hy,p),i(e,Gs,p),s(Gs,ia),s(ia,Ud),m(ll,Ud,null),s(Gs,D7),s(Gs,Gd),s(Gd,z7),i(e,fy,p),i(e,Vi,p),s(Vi,O7),i(e,dy,p),m(rl,e,p),i(e,my,p),i(e,K,p),s(K,T7),s(K,Ld),s(Ld,A7),s(K,S7),s(K,Md),s(Md,C7),s(K,x7),s(K,Zd),s(Zd,R7),s(K,I7),s(K,Nd),s(Nd,U7),s(K,G7),i(e,_y,p),i(e,We,p),s(We,L7),s(We,Hd),s(Hd,M7),s(We,Z7),s(We,Bd),s(Bd,N7),s(We,H7),i(e,vy,p),i(e,Yi,p),s(Yi,Wd),s(Wd,B7),i(e,jy,p),i(e,ua,p),s(ua,pl),s(pl,Fd),s(Fd,W7),s(pl,F7),s(pl,Vd),s(Vd,V7),s(ua,Y7),s(ua,il),s(il,Yd),s(Yd,K7),s(il,J7),s(il,Kd),s(Kd,X7),i(e,gy,p),i(e,M,p),s(M,Q7),s(M,Jd),s(Jd,e9),s(M,s9),s(M,Xd),s(Xd,t9),s(M,a9),s(M,Qd),s(Qd,n9),s(M,o9),s(M,em),s(em,l9),s(M,r9),s(M,sm),s(sm,p9),s(M,i9),i(e,wy,p),i(e,ze,p),s(ze,tm),s(tm,u9),s(ze,c9),s(ze,am),s(am,h9),s(ze,f9),s(ze,nm),s(nm,d9),s(ze,m9),i(e,yy,p),i(e,Ki,p),s(Ki,_9),i(e,by,p),i(e,Fe,p),s(Fe,ul),s(ul,om),s(om,v9),s(ul,j9),s(ul,lm),s(lm,g9),s(Fe,w9),s(Fe,cl),s(cl,rm),s(rm,y9),s(cl,b9),s(cl,pm),s(pm,E9),s(Fe,q9),s(Fe,hl),s(hl,im),s(im,$9),s(hl,k9),s(hl,um),s(um,P9),i(e,Ey,p),i(e,Ve,p),s(Ve,D9),s(Ve,cm),s(cm,z9),s(Ve,O9),s(Ve,Ji),s(Ji,T9),s(Ve,A9),i(e,qy,p),i(e,fl,p),s(fl,hm),s(hm,S9),s(fl,C9),i(e,$y,p),i(e,re,p),s(re,x9),s(re,fm),s(fm,R9),s(re,I9),s(re,dm),s(dm,U9),s(re,G9),s(re,mm),s(mm,L9),s(re,M9),i(e,ky,p),i(e,Xi,p),s(Xi,dl),s(dl,_m),s(_m,Z9),s(dl,N9),s(dl,vm),s(vm,H9),i(e,Py,p),i(e,Oe,p),s(Oe,jm),s(jm,B9),s(Oe,W9),s(Oe,gm),s(gm,F9),s(Oe,V9),s(Oe,wm),s(wm,Y9),s(Oe,K9),i(e,Dy,p),i(e,Ye,p),s(Ye,J9),s(Ye,ym),s(ym,X9),s(Ye,Q9),s(Ye,bm),s(bm,eP),s(Ye,sP),i(e,zy,p),i(e,ca,p),s(ca,ml),s(ml,tP),s(ml,Em),s(Em,aP),s(ml,nP),s(ca,oP),s(ca,_l),s(_l,lP),s(_l,qm),s(qm,rP),s(_l,pP),i(e,Oy,p),i(e,Qi,p),i(e,Ty,p),i(e,Ls,p),s(Ls,ha),s(ha,$m),m(vl,$m,null),s(Ls,iP),s(Ls,km),s(km,uP),i(e,Ay,p),i(e,eu,p),s(eu,cP),i(e,Sy,p),i(e,su,p),s(su,hP),i(e,Cy,p),m(jl,e,p),i(e,xy,p),i(e,fa,p),s(fa,fP),s(fa,Pm),s(Pm,dP),s(fa,mP),i(e,Ry,p),i(e,Ke,p),s(Ke,_P),s(Ke,gl),s(gl,vP),s(Ke,jP),s(Ke,wl),s(wl,gP),s(Ke,wP),i(e,Iy,p),i(e,da,p),s(da,yP),s(da,Dm),s(Dm,bP),s(da,EP),i(e,Uy,p),i(e,Je,p),s(Je,qP),s(Je,zm),s(zm,$P),s(Je,kP),s(Je,yl),s(yl,PP),s(Je,DP),i(e,Gy,p),i(e,tu,p),i(e,Ly,p),i(e,Ms,p),s(Ms,ma),s(ma,Om),m(bl,Om,null),s(Ms,zP),s(Ms,Tm),s(Tm,OP),i(e,My,p),i(e,au,p),s(au,TP),i(e,Zy,p),i(e,nu,p),s(nu,AP),i(e,Ny,p),i(e,_a,p),s(_a,Zs),s(Zs,SP),s(Zs,Am),s(Am,CP),s(Zs,xP),s(Zs,Sm),s(Sm,RP),s(Zs,IP),s(_a,UP),s(_a,El),s(El,GP),s(El,Cm),s(Cm,LP),s(El,MP),i(e,Hy,p),i(e,Xe,p),s(Xe,ZP),s(Xe,xm),s(xm,NP),s(Xe,HP),s(Xe,Rm),s(Rm,BP),s(Xe,WP),i(e,By,p),i(e,ou,p),i(e,Wy,p),i(e,Ns,p),s(Ns,va),s(va,Im),m(ql,Im,null),s(Ns,FP),s(Ns,Um),s(Um,VP),i(e,Fy,p),i(e,ja,p),s(ja,YP),s(ja,Gm),s(Gm,KP),s(ja,JP),i(e,Vy,p),m($l,e,p),i(e,Yy,p),i(e,ga,p),s(ga,XP),s(ga,Lm),s(Lm,QP),s(ga,eD),i(e,Ky,p),m(kl,e,p),i(e,Jy,p),i(e,lu,p),i(e,Xy,p),i(e,Hs,p),s(Hs,wa),s(wa,Mm),m(Pl,Mm,null),s(Hs,sD),s(Hs,Zm),s(Zm,tD),i(e,Qy,p),i(e,ya,p),s(ya,aD),s(ya,Nm),s(Nm,nD),s(ya,oD),i(e,e2,p),m(Dl,e,p),i(e,s2,p),i(e,ba,p),s(ba,lD),s(ba,Hm),s(Hm,rD),s(ba,pD),i(e,t2,p),m(zl,e,p),i(e,a2,p),i(e,Bs,p),s(Bs,Ea),s(Ea,Bm),m(Ol,Bm,null),s(Bs,iD),s(Bs,Wm),s(Wm,uD),i(e,n2,p),i(e,qa,p),s(qa,cD),s(qa,Fm),s(Fm,hD),s(qa,fD),i(e,o2,p),i(e,ru,p),s(ru,dD),i(e,l2,p),i(e,$a,p),s($a,mD),s($a,Vm),s(Vm,_D),s($a,vD),i(e,r2,p),i(e,pu,p),i(e,p2,p),i(e,Ws,p),s(Ws,ka),s(ka,Ym),m(Tl,Ym,null),s(Ws,jD),s(Ws,Km),s(Km,gD),i(e,i2,p),i(e,Qe,p),s(Qe,wD),s(Qe,Jm),s(Jm,yD),s(Qe,bD),s(Qe,Al),s(Al,ED),s(Qe,qD),i(e,u2,p),i(e,k,p),s(k,$D),s(k,Xm),s(Xm,kD),s(k,PD),s(k,iu),s(iu,DD),s(k,zD),s(k,Qm),s(Qm,OD),s(k,TD),s(k,e_),s(e_,AD),s(k,SD),s(k,s_),s(s_,CD),s(k,xD),s(k,t_),s(t_,RD),s(k,ID),s(k,a_),s(a_,UD),s(k,GD),s(k,n_),s(n_,LD),s(k,MD),i(e,c2,p),i(e,es,p),s(es,ZD),s(es,o_),s(o_,ND),s(es,HD),s(es,l_),s(l_,BD),s(es,WD),i(e,h2,p),m(Sl,e,p),i(e,f2,p),i(e,uu,p),s(uu,FD),i(e,d2,p),i(e,pe,p),s(pe,Cl),s(Cl,r_),s(r_,VD),s(Cl,YD),s(Cl,p_),s(p_,KD),s(pe,JD),s(pe,xl),s(xl,i_),s(i_,XD),s(xl,QD),s(xl,u_),s(u_,ez),s(pe,sz),s(pe,Rl),s(Rl,c_),s(c_,tz),s(Rl,az),s(Rl,h_),s(h_,nz),s(pe,oz),s(pe,Il),s(Il,f_),s(f_,lz),s(Il,rz),s(Il,d_),s(d_,pz),i(e,m2,p),i(e,cu,p),s(cu,iz),i(e,_2,p),i(e,hu,p),s(hu,uz),i(e,v2,p),m(Ul,e,p),i(e,j2,p),i(e,Pa,p),s(Pa,cz),s(Pa,fu),s(fu,hz),s(Pa,fz),i(e,g2,p),i(e,du,p),s(du,dz),i(e,w2,p),m(Gl,e,p),i(e,y2,p),i(e,ie,p),s(ie,mz),s(ie,m_),s(m_,_z),s(ie,vz),s(ie,__),s(__,jz),s(ie,gz),s(ie,v_),s(v_,wz),s(ie,yz),i(e,b2,p),i(e,mu,p),i(e,E2,p),i(e,Fs,p),s(Fs,Da),s(Da,j_),m(Ll,j_,null),s(Fs,bz),s(Fs,g_),s(g_,Ez),i(e,q2,p),i(e,Z,p),s(Z,qz),s(Z,w_),s(w_,$z),s(Z,kz),s(Z,y_),s(y_,Pz),s(Z,Dz),s(Z,b_),s(b_,zz),s(Z,Oz),s(Z,E_),s(E_,Tz),s(Z,Az),s(Z,Ml),s(Ml,Sz),s(Z,Cz),i(e,$2,p),i(e,_u,p),s(_u,xz),i(e,k2,p),i(e,za,p),s(za,Zl),s(Zl,q_),s(q_,Rz),s(Zl,Iz),s(Zl,$_),s($_,Uz),s(za,Gz),s(za,ss),s(ss,k_),s(k_,Lz),s(ss,Mz),s(ss,P_),s(P_,Zz),s(ss,Nz),s(ss,D_),s(D_,Hz),s(ss,Bz),i(e,P2,p),i(e,T,p),s(T,Wz),s(T,z_),s(z_,Fz),s(T,Vz),s(T,vu),s(vu,Yz),s(T,Kz),s(T,O_),s(O_,Jz),s(T,Xz),s(T,T_),s(T_,Qz),s(T,eO),s(T,A_),s(A_,sO),s(T,tO),s(T,S_),s(S_,aO),s(T,nO),i(e,D2,p),i(e,ts,p),s(ts,oO),s(ts,C_),s(C_,lO),s(ts,rO),s(ts,x_),s(x_,pO),s(ts,iO),i(e,z2,p),m(Nl,e,p),i(e,O2,p),i(e,as,p),s(as,uO),s(as,R_),s(R_,cO),s(as,hO),s(as,ju),s(ju,fO),s(as,dO),i(e,T2,p),i(e,ue,p),s(ue,Oa),s(Oa,I_),s(I_,mO),s(Oa,_O),s(Oa,U_),s(U_,vO),s(Oa,jO),s(ue,gO),s(ue,Ta),s(Ta,G_),s(G_,wO),s(Ta,yO),s(Ta,L_),s(L_,bO),s(Ta,EO),s(ue,qO),s(ue,ns),s(ns,M_),s(M_,$O),s(ns,kO),s(ns,Z_),s(Z_,PO),s(ns,DO),s(ns,N_),s(N_,zO),s(ns,OO),s(ue,TO),s(ue,os),s(os,H_),s(H_,AO),s(os,SO),s(os,B_),s(B_,CO),s(os,xO),s(os,W_),s(W_,RO),s(os,IO),i(e,A2,p),i(e,gu,p),s(gu,UO),i(e,S2,p),m(Hl,e,p),i(e,C2,p),i(e,Aa,p),s(Aa,GO),s(Aa,wu),s(wu,LO),s(Aa,MO),i(e,x2,p),i(e,Sa,p),s(Sa,ZO),s(Sa,F_),s(F_,NO),s(Sa,HO),i(e,R2,p),m(Bl,e,p),i(e,I2,p),i(e,J,p),s(J,BO),s(J,V_),s(V_,WO),s(J,FO),s(J,Y_),s(Y_,VO),s(J,YO),s(J,K_),s(K_,KO),s(J,JO),s(J,J_),s(J_,XO),s(J,QO),i(e,U2,p),i(e,yu,p),i(e,G2,p),i(e,Vs,p),s(Vs,Ca),s(Ca,X_),m(Wl,X_,null),s(Vs,eT),s(Vs,Q_),s(Q_,sT),i(e,L2,p),i(e,bu,p),s(bu,tT),i(e,M2,p),i(e,xa,p),s(xa,aT),s(xa,e1),s(e1,nT),s(xa,oT),i(e,Z2,p),m(Fl,e,p),i(e,N2,p),i(e,Ra,p),s(Ra,lT),s(Ra,Vl),s(Vl,rT),s(Ra,pT),i(e,H2,p),i(e,ce,p),s(ce,iT),s(ce,s1),s(s1,uT),s(ce,cT),s(ce,t1),s(t1,hT),s(ce,fT),s(ce,a1),s(a1,dT),s(ce,mT),i(e,B2,p),i(e,Eu,p),i(e,W2,p),i(e,Ys,p),s(Ys,Ia),s(Ia,n1),m(Yl,n1,null),s(Ys,_T),s(Ys,o1),s(o1,vT),i(e,F2,p),i(e,qu,p),s(qu,jT),i(e,V2,p),i(e,Ks,p),s(Ks,Ua),s(Ua,l1),m(Kl,l1,null),s(Ks,gT),s(Ks,r1),s(r1,wT),i(e,Y2,p),i(e,$u,p),s($u,yT),i(e,K2,p),m(Jl,e,p),i(e,J2,p),i(e,ls,p),s(ls,bT),s(ls,ku),s(ku,ET),s(ls,qT),s(ls,p1),s(p1,$T),s(ls,kT),i(e,X2,p),i(e,rs,p),s(rs,PT),s(rs,i1),s(i1,DT),s(rs,zT),s(rs,u1),s(u1,OT),s(rs,TT),i(e,Q2,p),i(e,Pu,p),s(Pu,AT),i(e,eb,p),m(Xl,e,p),i(e,sb,p),i(e,Ga,p),s(Ga,ST),s(Ga,Du),s(Du,CT),s(Ga,xT),i(e,tb,p),i(e,La,p),s(La,RT),s(La,Ql),s(Ql,IT),s(La,UT),i(e,ab,p),i(e,Js,p),s(Js,Ma),s(Ma,c1),m(er,c1,null),s(Js,GT),s(Js,h1),s(h1,LT),i(e,nb,p),i(e,zu,p),s(zu,MT),i(e,ob,p),m(sr,e,p),i(e,lb,p),i(e,Ou,p),s(Ou,ZT),i(e,rb,p),i(e,ps,p),s(ps,NT),s(ps,f1),s(f1,HT),s(ps,BT),s(ps,d1),s(d1,WT),s(ps,FT),i(e,pb,p),i(e,Tu,p),s(Tu,VT),i(e,ib,p),m(tr,e,p),i(e,ub,p),m(Za,e,p),i(e,cb,p),i(e,Xs,p),s(Xs,Na),s(Na,m1),m(ar,m1,null),s(Xs,YT),s(Xs,_1),s(_1,KT),i(e,hb,p),i(e,Au,p),s(Au,JT),i(e,fb,p),m(nr,e,p),i(e,db,p),i(e,he,p),s(he,XT),s(he,Su),s(Su,QT),s(he,eA),s(he,v1),s(v1,sA),s(he,tA),s(he,j1),s(j1,aA),s(he,nA),i(e,mb,p),i(e,Ha,p),s(Ha,oA),s(Ha,g1),s(g1,lA),s(Ha,rA),i(e,_b,p),i(e,Cu,p),s(Cu,pA),i(e,vb,p),m(or,e,p),i(e,jb,p),i(e,Ba,p),s(Ba,iA),s(Ba,xu),s(xu,uA),s(Ba,cA),i(e,gb,p),i(e,Wa,p),s(Wa,hA),s(Wa,lr),s(lr,fA),s(Wa,dA),i(e,wb,p),i(e,Ru,p),i(e,yb,p),i(e,Qs,p),s(Qs,Fa),s(Fa,w1),m(rr,w1,null),s(Qs,mA),s(Qs,y1),s(y1,_A),i(e,bb,p),i(e,Iu,p),s(Iu,vA),i(e,Eb,p),m(pr,e,p),i(e,qb,p),i(e,N,p),s(N,jA),s(N,Uu),s(Uu,gA),s(N,wA),s(N,b1),s(b1,yA),s(N,bA),s(N,E1),s(E1,EA),s(N,qA),s(N,q1),s(q1,$A),s(N,kA),s(N,$1),s($1,PA),s(N,DA),i(e,$b,p),i(e,Gu,p),s(Gu,zA),i(e,kb,p),m(ir,e,p),i(e,Pb,p),i(e,Va,p),s(Va,OA),s(Va,Lu),s(Lu,TA),s(Va,AA),i(e,Db,p),i(e,Mu,p),i(e,zb,p),i(e,et,p),s(et,Ya),s(Ya,k1),m(ur,k1,null),s(et,SA),s(et,P1),s(P1,CA),i(e,Ob,p),i(e,Zu,p),s(Zu,xA),i(e,Tb,p),m(cr,e,p),i(e,Ab,p),i(e,is,p),s(is,RA),s(is,Nu),s(Nu,IA),s(is,UA),s(is,D1),s(D1,GA),s(is,LA),i(e,Sb,p),i(e,Hu,p),s(Hu,MA),i(e,Cb,p),m(hr,e,p),i(e,xb,p),i(e,Ka,p),s(Ka,ZA),s(Ka,Bu),s(Bu,NA),s(Ka,HA),i(e,Rb,p),i(e,Wu,p),i(e,Ib,p),i(e,st,p),s(st,Ja),s(Ja,z1),m(fr,z1,null),s(st,BA),s(st,O1),s(O1,WA),i(e,Ub,p),i(e,Fu,p),s(Fu,FA),i(e,Gb,p),m(dr,e,p),i(e,Lb,p),i(e,us,p),s(us,VA),s(us,Vu),s(Vu,YA),s(us,KA),s(us,T1),s(T1,JA),s(us,XA),i(e,Mb,p),i(e,Yu,p),s(Yu,QA),i(e,Zb,p),m(mr,e,p),i(e,Nb,p),i(e,Xa,p),s(Xa,eS),s(Xa,Ku),s(Ku,sS),s(Xa,tS),i(e,Hb,p),i(e,Ju,p),i(e,Bb,p),i(e,tt,p),s(tt,Qa),s(Qa,A1),m(_r,A1,null),s(tt,aS),s(tt,S1),s(S1,nS),i(e,Wb,p),i(e,en,p),s(en,oS),s(en,C1),s(C1,lS),s(en,rS),i(e,Fb,p),i(e,Xu,p),s(Xu,x1),s(x1,pS),i(e,Vb,p),i(e,sn,p),s(sn,iS),s(sn,R1),s(R1,uS),s(sn,cS),i(e,Yb,p),i(e,A,p),s(A,hS),s(A,I1),s(I1,fS),s(A,dS),s(A,U1),s(U1,mS),s(A,_S),s(A,G1),s(G1,vS),s(A,jS),s(A,L1),s(L1,gS),s(A,wS),s(A,M1),s(M1,yS),s(A,bS),s(A,Z1),s(Z1,ES),s(A,qS),i(e,Kb,p),m(vr,e,p),i(e,Jb,p),i(e,Qu,p),s(Qu,N1),s(N1,$S),i(e,Xb,p),i(e,tn,p),s(tn,kS),s(tn,jr),s(jr,PS),s(tn,DS),i(e,Qb,p),i(e,ec,p),s(ec,H1),s(H1,zS),i(e,e3,p),i(e,sc,p),s(sc,OS),i(e,s3,p),i(e,tc,p),s(tc,TS),i(e,t3,p),m(gr,e,p),i(e,a3,p),i(e,cs,p),s(cs,AS),s(cs,B1),s(B1,SS),s(cs,CS),s(cs,W1),s(W1,xS),s(cs,RS),i(e,n3,p),m(wr,e,p),i(e,o3,p),m(an,e,p),i(e,l3,p),i(e,nn,p),s(nn,IS),s(nn,F1),s(F1,US),s(nn,GS),i(e,r3,p),i(e,on,p),s(on,LS),s(on,V1),s(V1,MS),s(on,ZS),i(e,p3,p),m(yr,e,p),i(e,i3,p),i(e,ac,p),s(ac,Y1),s(Y1,NS),i(e,u3,p),i(e,hs,p),s(hs,HS),s(hs,K1),s(K1,BS),s(hs,WS),s(hs,J1),s(J1,FS),s(hs,VS),i(e,c3,p),i(e,nc,p),s(nc,YS),i(e,h3,p),m(br,e,p),i(e,f3,p),i(e,ln,p),s(ln,KS),s(ln,X1),s(X1,JS),s(ln,XS),i(e,d3,p),m(Er,e,p),i(e,m3,p),i(e,rn,p),s(rn,QS),s(rn,Q1),s(Q1,eC),s(rn,sC),i(e,_3,p),i(e,oc,p),s(oc,tC),i(e,v3,p),i(e,qr,p),s(qr,ev),s(ev,aC),s(qr,nC),i(e,j3,p),i(e,fs,p),s(fs,oC),s(fs,sv),s(sv,lC),s(fs,rC),s(fs,tv),s(tv,pC),s(fs,iC),i(e,g3,p),i(e,lc,p),s(lc,uC),i(e,w3,p),i(e,at,p),s(at,pn),s(pn,av),m($r,av,null),s(at,cC),s(at,nv),s(nv,hC),i(e,y3,p),i(e,rc,p),s(rc,fC),i(e,b3,p),i(e,pc,p),s(pc,dC),i(e,E3,p),i(e,ic,p),s(ic,mC),i(e,q3,p),i(e,nt,p),s(nt,un),s(un,ov),m(kr,ov,null),s(nt,_C),s(nt,lv),s(lv,vC),i(e,$3,p),i(e,cn,p),s(cn,jC),s(cn,rv),s(rv,gC),s(cn,wC),i(e,k3,p),m(Pr,e,p),i(e,P3,p),i(e,uc,p),s(uc,yC),i(e,D3,p),i(e,D,p),s(D,bC),s(D,pv),s(pv,EC),s(D,qC),s(D,iv),s(iv,$C),s(D,kC),s(D,uv),s(uv,PC),s(D,DC),s(D,cc),s(cc,zC),s(D,OC),s(D,hc),s(hc,TC),s(D,AC),s(D,cv),s(cv,SC),s(D,CC),s(D,hv),s(hv,xC),s(D,RC),i(e,z3,p),m(Dr,e,p),i(e,O3,p),i(e,hn,p),s(hn,IC),s(hn,fv),s(fv,UC),s(hn,GC),i(e,T3,p),i(e,fc,p),s(fc,LC),i(e,A3,p),i(e,fn,p),s(fn,MC),s(fn,zr),s(zr,ZC),s(fn,NC),i(e,S3,p),i(e,fe,p),s(fe,HC),s(fe,dv),s(dv,BC),s(fe,WC),s(fe,mv),s(mv,FC),s(fe,VC),s(fe,dc),s(dc,YC),s(fe,KC),i(e,C3,p),i(e,ot,p),s(ot,dn),s(dn,_v),m(Or,_v,null),s(ot,JC),s(ot,vv),s(vv,XC),i(e,x3,p),i(e,Tr,p),s(Tr,QC),s(Tr,Ar),s(Ar,ex),i(e,R3,p),i(e,mn,p),s(mn,sx),s(mn,jv),s(jv,tx),s(mn,ax),i(e,I3,p),i(e,mc,p),s(mc,nx),i(e,U3,p),m(Sr,e,p),i(e,G3,p),i(e,ds,p),s(ds,ox),s(ds,gv),s(gv,lx),s(ds,rx),s(ds,wv),s(wv,px),s(ds,ix),i(e,L3,p),i(e,_c,p),i(e,M3,p),i(e,lt,p),s(lt,_n),s(_n,yv),m(Cr,yv,null),s(lt,ux),s(lt,bv),s(bv,cx),i(e,Z3,p),i(e,vc,p),s(vc,hx),i(e,N3,p),i(e,vn,p),s(vn,fx),s(vn,jc),s(jc,dx),s(vn,mx),i(e,H3,p),m(xr,e,p),i(e,B3,p),i(e,gc,p),s(gc,_x),i(e,W3,p),i(e,jn,p),s(jn,vx),s(jn,Ev),s(Ev,jx),s(jn,gx),i(e,F3,p),m(Rr,e,p),i(e,V3,p),i(e,wc,p),s(wc,wx),i(e,Y3,p),i(e,yc,p),s(yc,yx),i(e,K3,p),i(e,rt,p),s(rt,gn),s(gn,qv),m(Ir,qv,null),s(rt,bx),s(rt,$v),s($v,Ex),i(e,J3,p),i(e,bc,p),s(bc,qx),i(e,X3,p),i(e,Ec,p),s(Ec,$x),i(e,Q3,p),m(Ur,e,p),i(e,e0,p),i(e,qc,p),s(qc,kx),i(e,s0,p),i(e,$c,p),s($c,Px),i(e,t0,p),i(e,kc,p),s(kc,Dx),i(e,a0,p),i(e,Pc,p),s(Pc,zx),i(e,n0,p),m(Gr,e,p),i(e,o0,p),i(e,Dc,p),s(Dc,Ox),i(e,l0,p),i(e,wn,p),s(wn,Tx),s(wn,Lr),s(Lr,Ax),s(wn,Sx),i(e,r0,p),i(e,pt,p),s(pt,yn),s(yn,kv),m(Mr,kv,null),s(pt,Cx),s(pt,Pv),s(Pv,xx),i(e,p0,p),i(e,zc,p),s(zc,Rx),i(e,i0,p),i(e,Oc,p),s(Oc,Ix),i(e,u0,p),i(e,H,p),s(H,Dv),s(Dv,zv),s(zv,Ux),s(H,Gx),s(H,Ov),s(Ov,Te),s(Te,Lx),s(Te,Tc),s(Tc,Mx),s(Te,Zx),s(Te,Ac),s(Ac,Nx),s(Te,Hx),s(Te,Sc),s(Sc,Bx),s(Te,Wx),s(H,Fx),s(H,Zr),s(Zr,Tv),s(Tv,Vx),s(Zr,Yx),m(Nr,Zr,null),s(H,Kx),s(H,Av),s(Av,Hr),s(Hr,Jx),s(Hr,Br),s(Br,Xx),s(Hr,Qx),s(H,eR),s(H,Sv),s(Sv,Cv),s(Cv,sR),s(H,tR),s(H,xv),s(xv,Wr),s(Wr,aR),s(Wr,Fr),s(Fr,nR),s(Wr,oR),i(e,c0,p),i(e,Cc,p),s(Cc,lR),i(e,h0,p),i(e,bn,p),s(bn,it),s(it,Rv),s(Rv,rR),s(it,pR),s(it,Iv),s(Iv,iR),s(it,uR),s(it,Uv),s(Uv,cR),s(bn,hR),s(bn,Gv),s(Gv,Vr),s(Vr,fR),s(Vr,Yr),s(Yr,dR),s(Vr,mR),i(e,f0,p),i(e,ut,p),s(ut,En),s(En,Lv),m(Kr,Lv,null),s(ut,_R),s(ut,Mv),s(Mv,vR),i(e,d0,p),i(e,ct,p),s(ct,qn),s(qn,Zv),m(Jr,Zv,null),s(ct,jR),s(ct,Xr),s(Xr,gR),s(Xr,Nv),s(Nv,wR),s(Xr,yR),i(e,m0,p),i(e,B,p),s(B,bR),s(B,Hv),s(Hv,ER),s(B,qR),s(B,Bv),s(Bv,$R),s(B,kR),s(B,Wv),s(Wv,PR),s(B,DR),s(B,Fv),s(Fv,zR),s(B,OR),s(B,Qr),s(Qr,TR),s(B,AR),i(e,_0,p),i(e,ht,p),s(ht,$n),s($n,Vv),m(ep,Vv,null),s(ht,SR),s(ht,xc),s(xc,CR),s(xc,Yv),s(Yv,xR),i(e,v0,p),i(e,Rc,p),s(Rc,RR),i(e,j0,p),i(e,Ic,p),s(Ic,IR),i(e,g0,p),m(sp,e,p),i(e,w0,p),i(e,kn,p),s(kn,UR),s(kn,Kv),s(Kv,GR),s(kn,LR),i(e,y0,p),m(tp,e,p),i(e,b0,p),i(e,Uc,p),s(Uc,MR),i(e,E0,p),i(e,Gc,p),s(Gc,ZR),i(e,q0,p),i(e,ms,p),s(ms,NR),s(ms,Jv),s(Jv,HR),s(ms,BR),s(ms,Xv),s(Xv,WR),s(ms,FR),i(e,$0,p),i(e,ft,p),s(ft,Pn),s(Pn,Qv),m(ap,Qv,null),s(ft,VR),s(ft,ej),s(ej,YR),i(e,k0,p),i(e,_s,p),s(_s,Dn),s(Dn,KR),s(Dn,Lc),s(Lc,JR),s(Dn,XR),s(Dn,sj),s(sj,QR),s(_s,eI),s(_s,np),s(np,sI),s(np,op),s(op,tI),s(np,aI),s(_s,nI),s(_s,dt),s(dt,oI),s(dt,Mc),s(Mc,lI),s(dt,rI),s(dt,lp),s(lp,pI),s(dt,iI),i(e,P0,p),i(e,Zc,p),i(e,D0,p),i(e,mt,p),s(mt,zn),s(zn,tj),m(rp,tj,null),s(mt,uI),s(mt,aj),s(aj,cI),i(e,z0,p),i(e,de,p),s(de,hI),s(de,Nc),s(Nc,fI),s(de,dI),s(de,Hc),s(Hc,mI),s(de,_I),s(de,nj),s(nj,vI),s(de,jI),i(e,O0,p),i(e,On,p),s(On,gI),s(On,Bc),s(Bc,wI),s(On,yI),i(e,T0,p),i(e,vs,p),s(vs,bI),s(vs,Wc),s(Wc,EI),s(vs,qI),s(vs,Fc),s(Fc,$I),s(vs,kI),i(e,A0,p),i(e,Vc,p),s(Vc,PI),i(e,S0,p),m(pp,e,p),i(e,C0,p),i(e,Yc,p),s(Yc,DI),i(e,x0,p),m(ip,e,p),i(e,R0,p),i(e,me,p),s(me,zI),s(me,Kc),s(Kc,OI),s(me,TI),s(me,up),s(up,AI),s(me,SI),s(me,oj),s(oj,CI),s(me,xI),i(e,I0,p),i(e,_t,p),s(_t,Tn),s(Tn,lj),m(cp,lj,null),s(_t,RI),s(_t,rj),s(rj,II),i(e,U0,p),i(e,P,p),m(hp,P,null),s(P,UI),s(P,pj),s(pj,GI),s(P,LI),s(P,Ae),s(Ae,MI),s(Ae,ij),s(ij,ZI),s(Ae,NI),s(Ae,uj),s(uj,HI),s(Ae,BI),s(Ae,cj),s(cj,WI),s(Ae,FI),s(P,VI),s(P,_e),s(_e,Jc),s(Jc,YI),s(_e,KI),s(_e,hj),s(hj,JI),s(_e,XI),s(_e,Xc),s(Xc,QI),s(_e,eU),s(_e,fj),s(fj,sU),s(_e,tU),s(P,aU),s(P,js),m(fp,js,null),s(js,nU),s(js,dj),s(dj,oU),s(js,lU),s(js,vt),s(vt,rU),s(vt,mj),s(mj,pU),s(vt,iU),s(vt,_j),s(_j,uU),s(vt,cU),s(P,hU),s(P,An),m(dp,An,null),s(An,fU),s(An,mp),s(mp,dU),s(mp,vj),s(vj,mU),s(mp,_U),s(P,vU),s(P,Sn),m(_p,Sn,null),s(Sn,jU),s(Sn,jt),s(jt,gU),s(jt,jj),s(jj,wU),s(jt,yU),s(jt,gj),s(gj,bU),s(jt,EU),s(P,qU),s(P,Cn),m(vp,Cn,null),s(Cn,$U),s(Cn,gt),s(gt,kU),s(gt,wj),s(wj,PU),s(gt,DU),s(gt,yj),s(yj,zU),s(gt,OU),i(e,G0,p),i(e,wt,p),s(wt,xn),s(xn,bj),m(jp,bj,null),s(wt,TU),s(wt,Ej),s(Ej,AU),i(e,L0,p),i(e,Rn,p),s(Rn,SU),s(Rn,Qc),s(Qc,CU),s(Rn,xU),i(e,M0,p),i(e,eh,p),s(eh,RU),i(e,Z0,p),i(e,sh,p),s(sh,IU),i(e,N0,p),i(e,th,p),s(th,UU),i(e,H0,p),i(e,In,p),s(In,qj),s(qj,GU),s(In,LU),s(In,$j),s($j,MU),i(e,B0,p),m(gp,e,p),i(e,W0,p),i(e,Un,p),s(Un,ZU),s(Un,kj),s(kj,NU),s(Un,HU),i(e,F0,p),m(wp,e,p),i(e,V0,p),i(e,ah,p),s(ah,BU),i(e,Y0,p),i(e,yt,p),s(yt,Gn),s(Gn,Pj),m(yp,Pj,null),s(yt,WU),s(yt,Dj),s(Dj,FU),i(e,K0,p),i(e,ve,p),s(ve,zj),s(zj,bp),s(bp,VU),s(ve,YU),s(ve,Oj),s(Oj,Ep),s(Ep,KU),s(ve,JU),s(ve,Tj),s(Tj,qp),s(qp,XU),s(ve,QU),s(ve,Aj),s(Aj,$p),s($p,eG),i(e,J0,p),i(e,nh,p),s(nh,sG),i(e,X0,p),i(e,gs,p),s(gs,Sj),s(Sj,kp),s(kp,tG),s(gs,aG),s(gs,Cj),s(Cj,Pp),s(Pp,nG),s(gs,oG),s(gs,xj),s(xj,Dp),s(Dp,lG),i(e,Q0,p),i(e,ws,p),s(ws,rG),s(ws,oh),s(oh,pG),s(ws,iG),s(ws,zp),s(zp,uG),s(ws,cG),eE=!0},p(e,[p]){const Op={};p&2&&(Op.$$scope={dirty:p,ctx:e}),ta.$set(Op);const Rj={};p&2&&(Rj.$$scope={dirty:p,ctx:e}),Za.$set(Rj);const Ij={};p&2&&(Ij.$$scope={dirty:p,ctx:e}),an.$set(Ij)},i(e){eE||(_(O.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(fo.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(jo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(bo.$$.fragment,e),_(qo.$$.fragment,e),_($o.$$.fragment,e),_(Po.$$.fragment,e),_(zo.$$.fragment,e),_(Oo.$$.fragment,e),_(Ao.$$.fragment,e),_(xo.$$.fragment,e),_(Ro.$$.fragment,e),_(Io.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Lo.$$.fragment,e),_(Mo.$$.fragment,e),_(Ho.$$.fragment,e),_(Bo.$$.fragment,e),_(Fo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(ta.$$.fragment,e),_(Qo.$$.fragment,e),_(al.$$.fragment,e),_(nl.$$.fragment,e),_(ol.$$.fragment,e),_(ll.$$.fragment,e),_(rl.$$.fragment,e),_(vl.$$.fragment,e),_(jl.$$.fragment,e),_(bl.$$.fragment,e),_(ql.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(Dl.$$.fragment,e),_(zl.$$.fragment,e),_(Ol.$$.fragment,e),_(Tl.$$.fragment,e),_(Sl.$$.fragment,e),_(Ul.$$.fragment,e),_(Gl.$$.fragment,e),_(Ll.$$.fragment,e),_(Nl.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Yl.$$.fragment,e),_(Kl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(Za.$$.fragment,e),_(ar.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(rr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(hr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(gr.$$.fragment,e),_(wr.$$.fragment,e),_(an.$$.fragment,e),_(yr.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_($r.$$.fragment,e),_(kr.$$.fragment,e),_(Pr.$$.fragment,e),_(Dr.$$.fragment,e),_(Or.$$.fragment,e),_(Sr.$$.fragment,e),_(Cr.$$.fragment,e),_(xr.$$.fragment,e),_(Rr.$$.fragment,e),_(Ir.$$.fragment,e),_(Ur.$$.fragment,e),_(Gr.$$.fragment,e),_(Mr.$$.fragment,e),_(Nr.$$.fragment,e),_(Kr.$$.fragment,e),_(Jr.$$.fragment,e),_(ep.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(rp.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(cp.$$.fragment,e),_(hp.$$.fragment,e),_(fp.$$.fragment,e),_(dp.$$.fragment,e),_(_p.$$.fragment,e),_(vp.$$.fragment,e),_(jp.$$.fragment,e),_(gp.$$.fragment,e),_(wp.$$.fragment,e),_(yp.$$.fragment,e),eE=!0)},o(e){v(O.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(fo.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(jo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(bo.$$.fragment,e),v(qo.$$.fragment,e),v($o.$$.fragment,e),v(Po.$$.fragment,e),v(zo.$$.fragment,e),v(Oo.$$.fragment,e),v(Ao.$$.fragment,e),v(xo.$$.fragment,e),v(Ro.$$.fragment,e),v(Io.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Lo.$$.fragment,e),v(Mo.$$.fragment,e),v(Ho.$$.fragment,e),v(Bo.$$.fragment,e),v(Fo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(ta.$$.fragment,e),v(Qo.$$.fragment,e),v(al.$$.fragment,e),v(nl.$$.fragment,e),v(ol.$$.fragment,e),v(ll.$$.fragment,e),v(rl.$$.fragment,e),v(vl.$$.fragment,e),v(jl.$$.fragment,e),v(bl.$$.fragment,e),v(ql.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(Dl.$$.fragment,e),v(zl.$$.fragment,e),v(Ol.$$.fragment,e),v(Tl.$$.fragment,e),v(Sl.$$.fragment,e),v(Ul.$$.fragment,e),v(Gl.$$.fragment,e),v(Ll.$$.fragment,e),v(Nl.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Yl.$$.fragment,e),v(Kl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(Za.$$.fragment,e),v(ar.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(rr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(hr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(gr.$$.fragment,e),v(wr.$$.fragment,e),v(an.$$.fragment,e),v(yr.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v($r.$$.fragment,e),v(kr.$$.fragment,e),v(Pr.$$.fragment,e),v(Dr.$$.fragment,e),v(Or.$$.fragment,e),v(Sr.$$.fragment,e),v(Cr.$$.fragment,e),v(xr.$$.fragment,e),v(Rr.$$.fragment,e),v(Ir.$$.fragment,e),v(Ur.$$.fragment,e),v(Gr.$$.fragment,e),v(Mr.$$.fragment,e),v(Nr.$$.fragment,e),v(Kr.$$.fragment,e),v(Jr.$$.fragment,e),v(ep.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(rp.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(cp.$$.fragment,e),v(hp.$$.fragment,e),v(fp.$$.fragment,e),v(dp.$$.fragment,e),v(_p.$$.fragment,e),v(vp.$$.fragment,e),v(jp.$$.fragment,e),v(gp.$$.fragment,e),v(wp.$$.fragment,e),v(yp.$$.fragment,e),eE=!1},d(e){t(y),e&&t(z),e&&t(b),j(O),e&&t(ae),e&&t(C),e&&t(Nj),e&&t(I),e&&t(Hj),e&&t(Se),e&&t(Bj),e&&t(Ip),e&&t(Wj),e&&t(Up),e&&t(Fj),e&&t(Et),e&&t(Vj),e&&t(qt),e&&t(Yj),e&&t(Zp),e&&t(Kj),e&&t(Np),e&&t(Jj),e&&t(Hp),e&&t(Xj),e&&t(Bp),e&&t(Qj),e&&t(Wp),e&&t(eg),e&&t(Vp),e&&t(sg),e&&t(Yp),e&&t(tg),e&&t(ks),j(ro),e&&t(ag),e&&t(Kp),e&&t(ng),e&&t(Ps),j(po),e&&t(og),e&&t(Jp),e&&t(lg),j(io,e),e&&t(rg),e&&t(Ce),e&&t(pg),j(uo,e),e&&t(ig),e&&t(xe),e&&t(ug),e&&t(Pt),e&&t(cg),e&&t(Qp),e&&t(hg),e&&t(ei),e&&t(fg),j(fo,e),e&&t(dg),e&&t(Re),e&&t(mg),e&&t(Dt),e&&t(_g),j(mo,e),e&&t(vg),e&&t(Pe),e&&t(jg),e&&t(si),e&&t(gg),j(_o,e),e&&t(wg),e&&t(Ie),e&&t(yg),e&&t(zt),e&&t(bg),e&&t(Ue),e&&t(Eg),e&&t(ti),e&&t(qg),j(jo,e),e&&t($g),e&&t(ai),e&&t(kg),j(go,e),e&&t(Pg),e&&t(ni),e&&t(Dg),j(wo,e),e&&t(zg),e&&t(Ot),e&&t(Og),e&&t(Tt),e&&t(Tg),e&&t(At),e&&t(Ag),e&&t(oi),e&&t(Sg),e&&t(Ds),j(bo),e&&t(Cg),e&&t(Ct),e&&t(xg),e&&t(xt),e&&t(Rg),e&&t(ri),e&&t(Ig),j(qo,e),e&&t(Ug),e&&t(pi),e&&t(Gg),j($o,e),e&&t(Lg),e&&t(U),e&&t(Mg),e&&t(ne),e&&t(Zg),e&&t(Rt),e&&t(Ng),j(Po,e),e&&t(Hg),e&&t(It),e&&t(Bg),e&&t(Ut),e&&t(Wg),e&&t(ii),e&&t(Fg),e&&t(Os),j(zo),e&&t(Vg),e&&t(Lt),e&&t(Yg),j(Oo,e),e&&t(Kg),e&&t(Ge),e&&t(Jg),e&&t(ci),e&&t(Xg),e&&t(Mt),e&&t(Qg),e&&t(hi),e&&t(ew),j(Ao,e),e&&t(sw),e&&t(fi),e&&t(tw),e&&t(Zt),e&&t(aw),e&&t(di),e&&t(nw),e&&t(mi),e&&t(ow),e&&t(_i),j(xo),e&&t(lw),e&&t(vi),e&&t(rw),e&&t(As),j(Ro),e&&t(pw),e&&t(Ht),e&&t(iw),e&&t(ji),e&&t(uw),j(Io,e),e&&t(cw),e&&t(Bt),e&&t(hw),e&&t(gi),e&&t(fw),e&&t(wi),e&&t(dw),j(Uo,e),e&&t(mw),e&&t(Le),e&&t(_w),j(Go,e),e&&t(vw),e&&t(Wt),e&&t(jw),j(Lo,e),e&&t(gw),e&&t(yi),e&&t(ww),e&&t(Ft),e&&t(yw),e&&t(bi),e&&t(bw),e&&t(Ss),j(Mo),e&&t(Ew),e&&t(Yt),e&&t(qw),e&&t(Kt),e&&t($w),j(Ho,e),e&&t(kw),e&&t(Jt),e&&t(Pw),j(Bo,e),e&&t(Dw),e&&t(Xt),e&&t(zw),e&&t(Ei),e&&t(Ow),e&&t(oe),e&&t(Tw),j(Fo,e),e&&t(Aw),e&&t(Qt),e&&t(Sw),e&&t($i),e&&t(Cw),e&&t(Cs),j(Vo),e&&t(xw),e&&t(G),e&&t(Rw),e&&t(zi),e&&t(Iw),j(Yo,e),e&&t(Uw),e&&t(Oi),e&&t(Gw),j(Ko,e),e&&t(Lw),e&&t(Ti),e&&t(Mw),e&&t(xs),j(Jo),e&&t(Zw),j(ta,e),e&&t(Nw),e&&t(Me),e&&t(Hw),e&&t(aa),e&&t(Bw),e&&t(Ze),e&&t(Ww),e&&t(Ri),e&&t(Fw),e&&t(na),e&&t(Vw),e&&t(oa),e&&t(Yw),e&&t(le),e&&t(Kw),e&&t(Li),e&&t(Jw),e&&t(Rs),j(Qo),e&&t(Xw),e&&t(el),e&&t(Qw),e&&t(Ne),e&&t(ey),e&&t(ra),e&&t(sy),e&&t(Zi),e&&t(ty),e&&t(Ni),e&&t(ay),e&&t(Is),j(al),e&&t(ny),e&&t(Hi),e&&t(oy),j(nl,e),e&&t(ly),e&&t(Bi),e&&t(ry),e&&t(He),e&&t(py),e&&t(Be),e&&t(iy),j(ol,e),e&&t(uy),e&&t(Wi),e&&t(cy),e&&t(Fi),e&&t(hy),e&&t(Gs),j(ll),e&&t(fy),e&&t(Vi),e&&t(dy),j(rl,e),e&&t(my),e&&t(K),e&&t(_y),e&&t(We),e&&t(vy),e&&t(Yi),e&&t(jy),e&&t(ua),e&&t(gy),e&&t(M),e&&t(wy),e&&t(ze),e&&t(yy),e&&t(Ki),e&&t(by),e&&t(Fe),e&&t(Ey),e&&t(Ve),e&&t(qy),e&&t(fl),e&&t($y),e&&t(re),e&&t(ky),e&&t(Xi),e&&t(Py),e&&t(Oe),e&&t(Dy),e&&t(Ye),e&&t(zy),e&&t(ca),e&&t(Oy),e&&t(Qi),e&&t(Ty),e&&t(Ls),j(vl),e&&t(Ay),e&&t(eu),e&&t(Sy),e&&t(su),e&&t(Cy),j(jl,e),e&&t(xy),e&&t(fa),e&&t(Ry),e&&t(Ke),e&&t(Iy),e&&t(da),e&&t(Uy),e&&t(Je),e&&t(Gy),e&&t(tu),e&&t(Ly),e&&t(Ms),j(bl),e&&t(My),e&&t(au),e&&t(Zy),e&&t(nu),e&&t(Ny),e&&t(_a),e&&t(Hy),e&&t(Xe),e&&t(By),e&&t(ou),e&&t(Wy),e&&t(Ns),j(ql),e&&t(Fy),e&&t(ja),e&&t(Vy),j($l,e),e&&t(Yy),e&&t(ga),e&&t(Ky),j(kl,e),e&&t(Jy),e&&t(lu),e&&t(Xy),e&&t(Hs),j(Pl),e&&t(Qy),e&&t(ya),e&&t(e2),j(Dl,e),e&&t(s2),e&&t(ba),e&&t(t2),j(zl,e),e&&t(a2),e&&t(Bs),j(Ol),e&&t(n2),e&&t(qa),e&&t(o2),e&&t(ru),e&&t(l2),e&&t($a),e&&t(r2),e&&t(pu),e&&t(p2),e&&t(Ws),j(Tl),e&&t(i2),e&&t(Qe),e&&t(u2),e&&t(k),e&&t(c2),e&&t(es),e&&t(h2),j(Sl,e),e&&t(f2),e&&t(uu),e&&t(d2),e&&t(pe),e&&t(m2),e&&t(cu),e&&t(_2),e&&t(hu),e&&t(v2),j(Ul,e),e&&t(j2),e&&t(Pa),e&&t(g2),e&&t(du),e&&t(w2),j(Gl,e),e&&t(y2),e&&t(ie),e&&t(b2),e&&t(mu),e&&t(E2),e&&t(Fs),j(Ll),e&&t(q2),e&&t(Z),e&&t($2),e&&t(_u),e&&t(k2),e&&t(za),e&&t(P2),e&&t(T),e&&t(D2),e&&t(ts),e&&t(z2),j(Nl,e),e&&t(O2),e&&t(as),e&&t(T2),e&&t(ue),e&&t(A2),e&&t(gu),e&&t(S2),j(Hl,e),e&&t(C2),e&&t(Aa),e&&t(x2),e&&t(Sa),e&&t(R2),j(Bl,e),e&&t(I2),e&&t(J),e&&t(U2),e&&t(yu),e&&t(G2),e&&t(Vs),j(Wl),e&&t(L2),e&&t(bu),e&&t(M2),e&&t(xa),e&&t(Z2),j(Fl,e),e&&t(N2),e&&t(Ra),e&&t(H2),e&&t(ce),e&&t(B2),e&&t(Eu),e&&t(W2),e&&t(Ys),j(Yl),e&&t(F2),e&&t(qu),e&&t(V2),e&&t(Ks),j(Kl),e&&t(Y2),e&&t($u),e&&t(K2),j(Jl,e),e&&t(J2),e&&t(ls),e&&t(X2),e&&t(rs),e&&t(Q2),e&&t(Pu),e&&t(eb),j(Xl,e),e&&t(sb),e&&t(Ga),e&&t(tb),e&&t(La),e&&t(ab),e&&t(Js),j(er),e&&t(nb),e&&t(zu),e&&t(ob),j(sr,e),e&&t(lb),e&&t(Ou),e&&t(rb),e&&t(ps),e&&t(pb),e&&t(Tu),e&&t(ib),j(tr,e),e&&t(ub),j(Za,e),e&&t(cb),e&&t(Xs),j(ar),e&&t(hb),e&&t(Au),e&&t(fb),j(nr,e),e&&t(db),e&&t(he),e&&t(mb),e&&t(Ha),e&&t(_b),e&&t(Cu),e&&t(vb),j(or,e),e&&t(jb),e&&t(Ba),e&&t(gb),e&&t(Wa),e&&t(wb),e&&t(Ru),e&&t(yb),e&&t(Qs),j(rr),e&&t(bb),e&&t(Iu),e&&t(Eb),j(pr,e),e&&t(qb),e&&t(N),e&&t($b),e&&t(Gu),e&&t(kb),j(ir,e),e&&t(Pb),e&&t(Va),e&&t(Db),e&&t(Mu),e&&t(zb),e&&t(et),j(ur),e&&t(Ob),e&&t(Zu),e&&t(Tb),j(cr,e),e&&t(Ab),e&&t(is),e&&t(Sb),e&&t(Hu),e&&t(Cb),j(hr,e),e&&t(xb),e&&t(Ka),e&&t(Rb),e&&t(Wu),e&&t(Ib),e&&t(st),j(fr),e&&t(Ub),e&&t(Fu),e&&t(Gb),j(dr,e),e&&t(Lb),e&&t(us),e&&t(Mb),e&&t(Yu),e&&t(Zb),j(mr,e),e&&t(Nb),e&&t(Xa),e&&t(Hb),e&&t(Ju),e&&t(Bb),e&&t(tt),j(_r),e&&t(Wb),e&&t(en),e&&t(Fb),e&&t(Xu),e&&t(Vb),e&&t(sn),e&&t(Yb),e&&t(A),e&&t(Kb),j(vr,e),e&&t(Jb),e&&t(Qu),e&&t(Xb),e&&t(tn),e&&t(Qb),e&&t(ec),e&&t(e3),e&&t(sc),e&&t(s3),e&&t(tc),e&&t(t3),j(gr,e),e&&t(a3),e&&t(cs),e&&t(n3),j(wr,e),e&&t(o3),j(an,e),e&&t(l3),e&&t(nn),e&&t(r3),e&&t(on),e&&t(p3),j(yr,e),e&&t(i3),e&&t(ac),e&&t(u3),e&&t(hs),e&&t(c3),e&&t(nc),e&&t(h3),j(br,e),e&&t(f3),e&&t(ln),e&&t(d3),j(Er,e),e&&t(m3),e&&t(rn),e&&t(_3),e&&t(oc),e&&t(v3),e&&t(qr),e&&t(j3),e&&t(fs),e&&t(g3),e&&t(lc),e&&t(w3),e&&t(at),j($r),e&&t(y3),e&&t(rc),e&&t(b3),e&&t(pc),e&&t(E3),e&&t(ic),e&&t(q3),e&&t(nt),j(kr),e&&t($3),e&&t(cn),e&&t(k3),j(Pr,e),e&&t(P3),e&&t(uc),e&&t(D3),e&&t(D),e&&t(z3),j(Dr,e),e&&t(O3),e&&t(hn),e&&t(T3),e&&t(fc),e&&t(A3),e&&t(fn),e&&t(S3),e&&t(fe),e&&t(C3),e&&t(ot),j(Or),e&&t(x3),e&&t(Tr),e&&t(R3),e&&t(mn),e&&t(I3),e&&t(mc),e&&t(U3),j(Sr,e),e&&t(G3),e&&t(ds),e&&t(L3),e&&t(_c),e&&t(M3),e&&t(lt),j(Cr),e&&t(Z3),e&&t(vc),e&&t(N3),e&&t(vn),e&&t(H3),j(xr,e),e&&t(B3),e&&t(gc),e&&t(W3),e&&t(jn),e&&t(F3),j(Rr,e),e&&t(V3),e&&t(wc),e&&t(Y3),e&&t(yc),e&&t(K3),e&&t(rt),j(Ir),e&&t(J3),e&&t(bc),e&&t(X3),e&&t(Ec),e&&t(Q3),j(Ur,e),e&&t(e0),e&&t(qc),e&&t(s0),e&&t($c),e&&t(t0),e&&t(kc),e&&t(a0),e&&t(Pc),e&&t(n0),j(Gr,e),e&&t(o0),e&&t(Dc),e&&t(l0),e&&t(wn),e&&t(r0),e&&t(pt),j(Mr),e&&t(p0),e&&t(zc),e&&t(i0),e&&t(Oc),e&&t(u0),e&&t(H),j(Nr),e&&t(c0),e&&t(Cc),e&&t(h0),e&&t(bn),e&&t(f0),e&&t(ut),j(Kr),e&&t(d0),e&&t(ct),j(Jr),e&&t(m0),e&&t(B),e&&t(_0),e&&t(ht),j(ep),e&&t(v0),e&&t(Rc),e&&t(j0),e&&t(Ic),e&&t(g0),j(sp,e),e&&t(w0),e&&t(kn),e&&t(y0),j(tp,e),e&&t(b0),e&&t(Uc),e&&t(E0),e&&t(Gc),e&&t(q0),e&&t(ms),e&&t($0),e&&t(ft),j(ap),e&&t(k0),e&&t(_s),e&&t(P0),e&&t(Zc),e&&t(D0),e&&t(mt),j(rp),e&&t(z0),e&&t(de),e&&t(O0),e&&t(On),e&&t(T0),e&&t(vs),e&&t(A0),e&&t(Vc),e&&t(S0),j(pp,e),e&&t(C0),e&&t(Yc),e&&t(x0),j(ip,e),e&&t(R0),e&&t(me),e&&t(I0),e&&t(_t),j(cp),e&&t(U0),e&&t(P),j(hp),j(fp),j(dp),j(_p),j(vp),e&&t(G0),e&&t(wt),j(jp),e&&t(L0),e&&t(Rn),e&&t(M0),e&&t(eh),e&&t(Z0),e&&t(sh),e&&t(N0),e&&t(th),e&&t(H0),e&&t(In),e&&t(B0),j(gp,e),e&&t(W0),e&&t(Un),e&&t(F0),j(wp,e),e&&t(V0),e&&t(ah),e&&t(Y0),e&&t(yt),j(yp),e&&t(K0),e&&t(ve),e&&t(J0),e&&t(nh),e&&t(X0),e&&t(gs),e&&t(Q0),e&&t(ws)}}}const UK={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function GK(Es,y,z){let{fw:b}=y;return Es.$$set=q=>{"fw"in q&&z(0,b=q.fw)},[b]}class WK extends OK{constructor(y){super();TK(this,y,GK,IK,AK,{fw:0})}}export{WK as default,UK as metadata};
