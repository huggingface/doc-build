import{S as UK,i as GK,s as LK,e as o,k as u,w as f,t as a,M as MK,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-6b77c823.js";import{T as qG}from"../../chunks/Tip-39098574.js";import{D as Hj}from"../../chunks/Docstring-abef54e3.js";import{C as g}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as w}from"../../chunks/IconCopyLink-7a11ce68.js";function ZK(Es){let y,z;return{c(){y=o("p"),z=a("This section is a must-read")},l(b){y=l(b,"P",{});var q=r(y);z=n(q,"This section is a must-read"),q.forEach(t)},m(b,q){i(b,y,q),s(y,z)},d(b){b&&t(y)}}}function NK(Es){let y,z,b,q,ee,O,x,se,R,ae,C;return{c(){y=o("p"),z=a("As of "),b=o("code"),q=a("deepspeed==0.6.0"),ee=a(" the bf16 support is new and experimental."),O=u(),x=o("p"),se=a("If you use "),R=o("a"),ae=a("gradient accumulation"),C=a(" with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),this.h()},l(E){y=l(E,"P",{});var $=r(y);z=n($,"As of "),b=l($,"CODE",{});var qs=r(b);q=n(qs,"deepspeed==0.6.0"),qs.forEach(t),ee=n($," the bf16 support is new and experimental."),$.forEach(t),O=c(E),x=l(E,"P",{});var V=r(x);se=n(V,"If you use "),R=l(V,"A",{href:!0});var $s=r(R);ae=n($s,"gradient accumulation"),$s.forEach(t),C=n(V," with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),V.forEach(t),this.h()},h(){h(R,"href","#gradient-accumulation")},m(E,$){i(E,y,$),s(y,z),s(y,b),s(b,q),s(y,ee),i(E,O,$),i(E,x,$),s(x,se),s(x,R),s(R,ae),s(x,C)},d(E){E&&t(y),E&&t(O),E&&t(x)}}}function HK(Es){let y,z,b,q,ee,O,x,se,R,ae,C;return{c(){y=o("p"),z=a("Note, that once "),b=o("code"),q=a("load_state_dict_from_zero_checkpoint"),ee=a(" was run, the "),O=o("code"),x=a("model"),se=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=o("code"),ae=a("model.load_state_dict(state_dict)"),C=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(E){y=l(E,"P",{});var $=r(y);z=n($,"Note, that once "),b=l($,"CODE",{});var qs=r(b);q=n(qs,"load_state_dict_from_zero_checkpoint"),qs.forEach(t),ee=n($," was run, the "),O=l($,"CODE",{});var V=r(O);x=n(V,"model"),V.forEach(t),se=n($,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=l($,"CODE",{});var $s=r(R);ae=n($s,"model.load_state_dict(state_dict)"),$s.forEach(t),C=n($,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),$.forEach(t)},m(E,$){i(E,y,$),s(y,z),s(y,b),s(b,q),s(y,ee),s(y,O),s(O,x),s(y,se),s(y,R),s(R,ae),s(y,C)},d(E){E&&t(y)}}}function BK(Es){let y,z,b,q,ee,O,x,se,R,ae,C,E,$,qs,V,$s,L$,Bj,I,sf,M$,Z$,tf,N$,H$,af,B$,W$,nf,F$,V$,of,Y$,K$,lf,J$,Wj,Se,X$,ao,Q$,e4,no,s4,t4,Fj,Up,a4,Vj,Gp,n4,Yj,Et,o4,oo,l4,r4,Kj,qt,lo,p4,Lp,i4,u4,c4,Y,h4,Mp,f4,d4,rf,m4,_4,pf,v4,j4,uf,g4,w4,Zp,y4,b4,Jj,Np,E4,Xj,Hp,q4,Qj,Bp,cf,$4,eg,Wp,k4,sg,Fp,ro,P4,Vp,D4,z4,tg,Yp,O4,ag,Kp,ng,ks,$t,hf,po,T4,ff,A4,og,Jp,lg,Ps,kt,df,io,S4,mf,C4,rg,Xp,x4,pg,uo,ig,Ce,R4,_f,I4,U4,vf,G4,L4,ug,co,cg,xe,M4,ho,Z4,N4,fo,H4,B4,hg,Pt,W4,Qp,F4,V4,fg,ei,Y4,dg,si,K4,mg,mo,_g,Re,J4,jf,X4,Q4,gf,e6,s6,vg,Dt,t6,wf,a6,n6,jg,_o,gg,Pe,o6,yf,l6,r6,bf,p6,i6,Ef,u6,wg,ti,c6,yg,vo,bg,Ie,h6,qf,f6,d6,$f,m6,_6,Eg,zt,v6,kf,j6,g6,qg,Ue,w6,Pf,y6,b6,jo,E6,q6,$g,ai,$6,kg,go,Pg,ni,k6,Dg,wo,zg,oi,P6,Og,yo,Tg,Ot,D6,Df,z6,O6,Ag,Tt,T6,zf,A6,S6,Sg,At,C6,bo,x6,R6,Cg,li,xg,Ds,St,Of,Eo,I6,Tf,U6,Rg,Ct,G6,ri,L6,M6,Ig,xt,zs,Z6,Af,N6,H6,Sf,B6,W6,F6,De,V6,Cf,Y6,K6,xf,J6,X6,qo,Q6,e5,Ug,pi,s5,Gg,$o,Lg,ii,t5,Mg,ko,Zg,U,a5,Rf,n5,o5,If,l5,r5,Uf,p5,i5,Gf,u5,c5,Po,h5,f5,Ng,ne,d5,Lf,m5,_5,Mf,v5,j5,Zf,g5,w5,Hg,Rt,y5,Nf,b5,E5,Bg,Do,Wg,It,q5,Hf,$5,k5,Fg,Ut,P5,zo,D5,z5,Vg,ui,Yg,Os,Gt,Bf,Oo,O5,Wf,T5,Kg,Lt,A5,ci,S5,C5,Jg,To,Xg,Ge,x5,Ff,R5,I5,Ao,U5,G5,Qg,hi,L5,ew,Mt,Vf,M5,Z5,Yf,N5,sw,fi,H5,tw,So,aw,di,B5,nw,Zt,W5,Co,F5,V5,ow,mi,Y5,lw,_i,K5,rw,vi,Ts,xo,J5,Kf,X5,Q5,e8,Ro,s8,Jf,t8,pw,ji,iw,As,Nt,Xf,Io,a8,Qf,n8,uw,Ht,o8,ed,l8,r8,cw,gi,p8,hw,Uo,fw,Bt,i8,sd,u8,c8,dw,wi,h8,mw,yi,f8,_w,Go,vw,Le,d8,td,m8,_8,ad,v8,j8,jw,Lo,gw,Wt,g8,nd,w8,y8,ww,Mo,yw,bi,b8,bw,Ft,E8,od,q8,$8,Ew,Ei,qw,Ss,Vt,ld,Zo,k8,rd,P8,$w,Yt,D8,No,z8,O8,kw,Kt,T8,Ho,A8,S8,Pw,Bo,Dw,Jt,C8,pd,x8,R8,zw,Wo,Ow,Xt,I8,Fo,U8,G8,Tw,qi,L8,Aw,oe,M8,id,Z8,N8,ud,H8,B8,cd,W8,F8,Sw,Vo,Cw,Qt,V8,$i,Y8,K8,xw,ki,Rw,Cs,ea,hd,Yo,J8,fd,X8,Iw,G,Q8,Pi,ek,sk,Di,tk,ak,dd,nk,ok,md,lk,rk,zi,pk,ik,Uw,Oi,uk,Gw,Ko,Lw,Ti,ck,Mw,Jo,Zw,Ai,Nw,xs,sa,_d,Xo,hk,vd,fk,Hw,ta,Bw,Me,dk,Si,mk,_k,Ci,vk,jk,Ww,aa,gk,xi,wk,yk,Fw,Ze,bk,jd,Ek,qk,Ri,$k,kk,Vw,Ii,Pk,Yw,na,Dk,Ui,zk,Ok,Kw,oa,gd,Tk,Ak,Qo,Sk,Gi,Ck,xk,Jw,le,Rk,wd,Ik,Uk,Li,Gk,Lk,yd,Mk,Zk,Xw,Mi,Qw,Rs,la,bd,el,Nk,Ed,Hk,ey,sl,tl,Bk,Wk,sy,Ne,Fk,qd,Vk,Yk,al,Kk,Jk,ty,ra,Xk,Zi,Qk,e7,ay,Ni,s7,ny,Hi,oy,Is,pa,$d,nl,t7,kd,a7,ly,Bi,n7,ry,ol,py,Wi,Pd,o7,iy,He,Us,l7,Dd,r7,p7,zd,i7,u7,c7,L,Od,h7,f7,Td,d7,m7,Ad,_7,v7,Sd,j7,g7,Cd,w7,y7,xd,b7,E7,q7,Rd,$7,uy,Be,k7,Id,P7,D7,Ud,z7,O7,cy,ll,hy,Fi,T7,fy,Vi,dy,Gs,ia,Gd,rl,A7,Ld,S7,my,Yi,C7,_y,pl,vy,K,x7,Md,R7,I7,Zd,U7,G7,Nd,L7,M7,Hd,Z7,N7,jy,We,H7,Bd,B7,W7,Wd,F7,V7,gy,Ki,Fd,Y7,wy,ua,il,Vd,K7,J7,Yd,X7,Q7,ul,Kd,e9,s9,Jd,t9,yy,M,a9,Xd,n9,o9,Qd,l9,r9,em,p9,i9,sm,u9,c9,tm,h9,f9,by,ze,am,d9,m9,nm,_9,v9,om,j9,g9,Ey,Ji,w9,qy,Fe,cl,lm,y9,b9,rm,E9,q9,hl,pm,$9,k9,im,P9,D9,fl,um,z9,O9,cm,T9,$y,Ve,A9,hm,S9,C9,Xi,x9,R9,ky,dl,fm,I9,U9,Py,re,G9,dm,L9,M9,mm,Z9,N9,_m,H9,B9,Dy,Qi,ml,vm,W9,F9,jm,V9,zy,Oe,gm,Y9,K9,wm,J9,X9,ym,Q9,eP,Oy,Ye,sP,bm,tP,aP,Em,nP,oP,Ty,ca,_l,lP,qm,rP,pP,iP,vl,uP,$m,cP,hP,Ay,eu,Sy,Ls,ha,km,jl,fP,Pm,dP,Cy,su,mP,xy,tu,_P,Ry,gl,Iy,fa,vP,Dm,jP,gP,Uy,Ke,wP,wl,yP,bP,yl,EP,qP,Gy,da,$P,zm,kP,PP,Ly,Je,DP,Om,zP,OP,bl,TP,AP,My,au,Zy,Ms,ma,Tm,El,SP,Am,CP,Ny,nu,xP,Hy,ou,RP,By,_a,Zs,IP,Sm,UP,GP,Cm,LP,MP,ZP,ql,NP,xm,HP,BP,Wy,Xe,WP,Rm,FP,VP,Im,YP,KP,Fy,lu,Vy,Ns,va,Um,$l,JP,Gm,XP,Yy,ja,QP,Lm,eD,sD,Ky,kl,Jy,ga,tD,Mm,aD,nD,Xy,Pl,Qy,ru,e2,Hs,wa,Zm,Dl,oD,Nm,lD,s2,ya,rD,Hm,pD,iD,t2,zl,a2,ba,uD,Bm,cD,hD,n2,Ol,o2,Bs,Ea,Wm,Tl,fD,Fm,dD,l2,qa,mD,Vm,_D,vD,r2,pu,jD,p2,$a,gD,Ym,wD,yD,i2,iu,u2,Ws,ka,Km,Al,bD,Jm,ED,c2,Qe,qD,Xm,$D,kD,Sl,PD,DD,h2,k,zD,Qm,OD,TD,uu,AD,SD,e_,CD,xD,s_,RD,ID,t_,UD,GD,a_,LD,MD,n_,ZD,ND,o_,HD,BD,f2,es,WD,l_,FD,VD,r_,YD,KD,d2,Cl,m2,cu,JD,_2,pe,xl,p_,XD,QD,i_,ez,sz,Rl,u_,tz,az,c_,nz,oz,Il,h_,lz,rz,f_,pz,iz,Ul,d_,uz,cz,m_,hz,v2,hu,fz,j2,fu,dz,g2,Gl,w2,Pa,mz,du,_z,vz,y2,mu,jz,b2,Ll,E2,ie,gz,__,wz,yz,v_,bz,Ez,j_,qz,$z,q2,_u,$2,Fs,Da,g_,Ml,kz,w_,Pz,k2,Z,Dz,y_,zz,Oz,b_,Tz,Az,E_,Sz,Cz,q_,xz,Rz,Zl,Iz,Uz,P2,vu,Gz,D2,za,Nl,$_,Lz,Mz,k_,Zz,Nz,ss,P_,Hz,Bz,D_,Wz,Fz,z_,Vz,Yz,z2,T,Kz,O_,Jz,Xz,ju,Qz,eO,T_,sO,tO,A_,aO,nO,S_,oO,lO,C_,rO,pO,O2,ts,iO,x_,uO,cO,R_,hO,fO,T2,Hl,A2,as,dO,I_,mO,_O,gu,vO,jO,S2,ue,Oa,U_,gO,wO,G_,yO,bO,EO,Ta,L_,qO,$O,M_,kO,PO,DO,ns,Z_,zO,OO,N_,TO,AO,H_,SO,CO,xO,os,B_,RO,IO,W_,UO,GO,F_,LO,MO,C2,wu,ZO,x2,Bl,R2,Aa,NO,yu,HO,BO,I2,Sa,WO,V_,FO,VO,U2,Wl,G2,J,YO,Y_,KO,JO,K_,XO,QO,J_,eT,sT,X_,tT,aT,L2,bu,M2,Vs,Ca,Q_,Fl,nT,e1,oT,Z2,Eu,lT,N2,xa,rT,s1,pT,iT,H2,Vl,B2,Ra,uT,Yl,cT,hT,W2,ce,fT,t1,dT,mT,a1,_T,vT,n1,jT,gT,F2,qu,V2,Ys,Ia,o1,Kl,wT,l1,yT,Y2,$u,bT,K2,Ks,Ua,r1,Jl,ET,p1,qT,J2,ku,$T,X2,Xl,Q2,ls,kT,Pu,PT,DT,i1,zT,OT,eb,rs,TT,u1,AT,ST,c1,CT,xT,sb,Du,RT,tb,Ql,ab,Ga,IT,zu,UT,GT,nb,La,LT,er,MT,ZT,ob,Js,Ma,h1,sr,NT,f1,HT,lb,Ou,BT,rb,tr,pb,Tu,WT,ib,ps,FT,d1,VT,YT,m1,KT,JT,ub,Au,XT,cb,ar,hb,Za,fb,Xs,Na,_1,nr,QT,v1,eA,db,Su,sA,mb,or,_b,he,tA,Cu,aA,nA,j1,oA,lA,g1,rA,pA,vb,Ha,iA,w1,uA,cA,jb,xu,hA,gb,lr,wb,Ba,fA,Ru,dA,mA,yb,Wa,_A,rr,vA,jA,bb,Iu,Eb,Qs,Fa,y1,pr,gA,b1,wA,qb,Uu,yA,$b,ir,kb,N,bA,Gu,EA,qA,E1,$A,kA,q1,PA,DA,$1,zA,OA,k1,TA,AA,Pb,Lu,SA,Db,ur,zb,Va,CA,Mu,xA,RA,Ob,Zu,Tb,et,Ya,P1,cr,IA,D1,UA,Ab,Nu,GA,Sb,hr,Cb,is,LA,Hu,MA,ZA,z1,NA,HA,xb,Bu,BA,Rb,fr,Ib,Ka,WA,Wu,FA,VA,Ub,Fu,Gb,st,Ja,O1,dr,YA,T1,KA,Lb,Vu,JA,Mb,mr,Zb,us,XA,Yu,QA,eS,A1,sS,tS,Nb,Ku,aS,Hb,_r,Bb,Xa,nS,Ju,oS,lS,Wb,Xu,Fb,tt,Qa,S1,vr,rS,C1,pS,Vb,en,iS,x1,uS,cS,Yb,Qu,R1,hS,Kb,sn,fS,I1,dS,mS,Jb,A,_S,U1,vS,jS,G1,gS,wS,L1,yS,bS,M1,ES,qS,Z1,$S,kS,N1,PS,DS,Xb,jr,Qb,ec,H1,zS,e3,tn,OS,gr,TS,AS,s3,sc,B1,SS,t3,tc,CS,a3,ac,xS,n3,wr,o3,cs,RS,W1,IS,US,F1,GS,LS,l3,yr,r3,an,p3,nn,MS,V1,ZS,NS,i3,on,HS,Y1,BS,WS,u3,br,c3,nc,K1,FS,h3,hs,VS,J1,YS,KS,X1,JS,XS,f3,oc,QS,d3,Er,m3,ln,eC,Q1,sC,tC,_3,qr,v3,rn,aC,ev,nC,oC,j3,lc,lC,g3,$r,sv,rC,pC,w3,fs,iC,tv,uC,cC,av,hC,fC,y3,rc,dC,b3,at,pn,nv,kr,mC,ov,_C,E3,pc,vC,q3,ic,jC,$3,uc,gC,k3,nt,un,lv,Pr,wC,rv,yC,P3,cn,bC,pv,EC,qC,D3,Dr,z3,cc,$C,O3,D,kC,iv,PC,DC,uv,zC,OC,cv,TC,AC,hc,SC,CC,fc,xC,RC,hv,IC,UC,fv,GC,LC,T3,zr,A3,hn,MC,dv,ZC,NC,S3,dc,HC,C3,fn,BC,Or,WC,FC,x3,fe,VC,mv,YC,KC,_v,JC,XC,mc,QC,ex,R3,ot,dn,vv,Tr,sx,jv,tx,I3,Ar,ax,Sr,nx,U3,mn,ox,gv,lx,rx,G3,_c,px,L3,Cr,M3,ds,ix,wv,ux,cx,yv,hx,fx,Z3,vc,N3,lt,_n,bv,xr,dx,Ev,mx,H3,jc,_x,B3,vn,vx,gc,jx,gx,W3,Rr,F3,wc,wx,V3,jn,yx,qv,bx,Ex,Y3,Ir,K3,yc,qx,J3,bc,$x,X3,rt,gn,$v,Ur,kx,kv,Px,Q3,Ec,Dx,e0,qc,zx,s0,Gr,t0,$c,Ox,a0,kc,Tx,n0,Pc,Ax,o0,Dc,Sx,l0,Lr,r0,zc,Cx,p0,wn,xx,Mr,Rx,Ix,i0,pt,yn,Pv,Zr,Ux,Dv,Gx,u0,Oc,Lx,c0,Tc,Mx,h0,H,zv,Ov,Zx,Nx,Tv,Te,Hx,Ac,Bx,Wx,Sc,Fx,Vx,Cc,Yx,Kx,Jx,Nr,Av,Xx,Qx,Hr,eR,Sv,Br,sR,Wr,tR,aR,nR,Cv,xv,oR,lR,Rv,Fr,rR,Vr,pR,iR,f0,xc,uR,d0,bn,it,Iv,cR,hR,Uv,fR,dR,Gv,mR,_R,Lv,Yr,vR,Kr,jR,gR,m0,ut,En,Mv,Jr,wR,Zv,yR,_0,ct,qn,Nv,Xr,bR,Qr,ER,Hv,qR,$R,v0,B,kR,Bv,PR,DR,Wv,zR,OR,Fv,TR,AR,Vv,SR,CR,ep,xR,RR,j0,ht,$n,Yv,sp,IR,Rc,UR,Kv,GR,g0,Ic,LR,w0,Uc,MR,y0,tp,b0,kn,ZR,Jv,NR,HR,E0,ap,q0,Gc,BR,$0,Lc,WR,k0,ms,FR,Xv,VR,YR,Qv,KR,JR,P0,ft,Pn,ej,np,XR,sj,QR,D0,_s,Dn,eI,Mc,sI,tI,tj,aI,nI,op,oI,lp,lI,rI,pI,dt,iI,Zc,uI,cI,rp,hI,fI,z0,Nc,O0,mt,zn,aj,pp,dI,nj,mI,T0,de,_I,Hc,vI,jI,Bc,gI,wI,oj,yI,bI,A0,On,EI,Wc,qI,$I,S0,vs,kI,Fc,PI,DI,Vc,zI,OI,C0,Tn,TI,lj,AI,SI,x0,Yc,CI,R0,ip,I0,Kc,xI,U0,up,G0,me,RI,Jc,II,UI,cp,GI,LI,rj,MI,ZI,L0,_t,An,pj,hp,NI,ij,HI,M0,P,fp,BI,uj,WI,FI,Ae,VI,cj,YI,KI,hj,JI,XI,fj,QI,eU,sU,_e,Xc,tU,aU,dj,nU,oU,Qc,lU,rU,mj,pU,iU,uU,js,dp,cU,_j,hU,fU,vt,dU,vj,mU,_U,jj,vU,jU,gU,Sn,mp,wU,_p,yU,gj,bU,EU,qU,Cn,vp,$U,jt,kU,wj,PU,DU,yj,zU,OU,TU,xn,jp,AU,gt,SU,bj,CU,xU,Ej,RU,IU,Z0,wt,Rn,qj,gp,UU,$j,GU,N0,In,LU,eh,MU,ZU,H0,sh,NU,B0,th,HU,W0,ah,BU,F0,Un,kj,WU,FU,Pj,VU,V0,wp,Y0,Gn,YU,Dj,KU,JU,K0,yp,J0,nh,XU,X0,yt,Ln,zj,bp,QU,Oj,eG,Q0,ve,Tj,Ep,sG,tG,Aj,qp,aG,nG,Sj,$p,oG,lG,Cj,kp,rG,eE,oh,pG,sE,gs,xj,Pp,iG,uG,Rj,Dp,cG,hG,Ij,zp,fG,tE,ws,dG,lh,mG,_G,Op,vG,jG,aE;return O=new w({}),po=new w({}),io=new w({}),uo=new g({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),co=new g({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),mo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),_o=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),vo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),go=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),wo=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),yo=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),Eo=new w({}),$o=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),ko=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Do=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),Oo=new w({}),To=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),So=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ro=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),Io=new w({}),Uo=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
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
trainer.train()`}}),Go=new g({props:{code:`%%bash
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
EOT`}}),Lo=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),Mo=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),Zo=new w({}),Bo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),Wo=new g({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),Vo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Yo=new w({}),Ko=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Jo=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Xo=new w({}),ta=new qG({props:{warning:"&lcub;true}",$$slots:{default:[ZK]},$$scope:{ctx:Es}}}),el=new w({}),nl=new w({}),ol=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ll=new g({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),rl=new w({}),pl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),jl=new w({}),gl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),El=new w({}),$l=new w({}),kl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Pl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Dl=new w({}),zl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ol=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Tl=new w({}),Al=new w({}),Cl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Gl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ll=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),Ml=new w({}),Hl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Bl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Wl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Fl=new w({}),Vl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Kl=new w({}),Jl=new w({}),Xl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ql=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),sr=new w({}),tr=new g({props:{code:`{
    "bf16": {
        "enabled": "auto"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ar=new g({props:{code:`{
    "bf16": {
        "enabled": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Za=new qG({props:{$$slots:{default:[NK]},$$scope:{ctx:Es}}}),nr=new w({}),or=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),lr=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),pr=new w({}),ir=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ur=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),cr=new w({}),hr=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),fr=new g({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),dr=new w({}),mr=new g({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),_r=new g({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),vr=new w({}),jr=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),wr=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),yr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),an=new qG({props:{$$slots:{default:[HK]},$$scope:{ctx:Es}}}),br=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),Er=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),qr=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),kr=new w({}),Pr=new w({}),Dr=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),zr=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Tr=new w({}),Cr=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),xr=new w({}),Rr=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),Ir=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),Ur=new w({}),Gr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),Lr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
`}}),Zr=new w({}),Hr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Jr=new w({}),Xr=new w({}),sp=new w({}),tp=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ap=new g({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
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
[...]`}}),np=new w({}),pp=new w({}),ip=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),up=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),hp=new w({}),fp=new Hj({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),dp=new Hj({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L114"}}),mp=new Hj({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L105"}}),vp=new Hj({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L146"}}),jp=new Hj({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L137"}}),gp=new w({}),wp=new g({props:{code:`#!/usr/bin/env python

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),yp=new g({props:{code:`$ deepspeed --num_gpus 2 t0.py
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
  <span class="hljs-keyword">out</span>=negative`}}),bp=new w({}),{c(){y=o("meta"),z=u(),b=o("h1"),q=o("a"),ee=o("span"),f(O.$$.fragment),x=u(),se=o("span"),R=a("DeepSpeed Integration"),ae=u(),C=o("p"),E=o("a"),$=a("DeepSpeed"),qs=a(" implements everything described in the "),V=o("a"),$s=a("ZeRO paper"),L$=a(". Currently it provides full support for:"),Bj=u(),I=o("ol"),sf=o("li"),M$=a("Optimizer state partitioning (ZeRO stage 1)"),Z$=u(),tf=o("li"),N$=a("Gradient partitioning (ZeRO stage 2)"),H$=u(),af=o("li"),B$=a("Parameter partitioning (ZeRO stage 3)"),W$=u(),nf=o("li"),F$=a("Custom mixed precision training handling"),V$=u(),of=o("li"),Y$=a("A range of fast CUDA-extension-based optimizers"),K$=u(),lf=o("li"),J$=a("ZeRO-Offload to CPU and NVMe"),Wj=u(),Se=o("p"),X$=a("ZeRO-Offload has its own dedicated paper: "),ao=o("a"),Q$=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),e4=a(". And NVMe-support is described in the paper "),no=o("a"),s4=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),t4=a("."),Fj=u(),Up=o("p"),a4=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Vj=u(),Gp=o("p"),n4=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Yj=u(),Et=o("p"),o4=a("\u{1F917} Transformers integrates "),oo=o("a"),l4=a("DeepSpeed"),r4=a(" via 2 options:"),Kj=u(),qt=o("ol"),lo=o("li"),p4=a("Integration of the core DeepSpeed features via "),Lp=o("a"),i4=a("Trainer"),u4=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),c4=u(),Y=o("li"),h4=a("If you don\u2019t use "),Mp=o("a"),f4=a("Trainer"),d4=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),rf=o("code"),m4=a("from_pretrained"),_4=a(" and "),pf=o("code"),v4=a("from_config"),j4=a(` include integration of essential
parts of DeepSpeed like `),uf=o("code"),g4=a("zero.Init"),w4=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Zp=o("a"),y4=a("deepspeed-non-trainer-integration"),b4=a("."),Jj=u(),Np=o("p"),E4=a("What is integrated:"),Xj=u(),Hp=o("p"),q4=a("Training:"),Qj=u(),Bp=o("ol"),cf=o("li"),$4=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),eg=u(),Wp=o("p"),k4=a("Inference:"),sg=u(),Fp=o("ol"),ro=o("li"),P4=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Vp=o("a"),D4=a("deepspeed-zero-inference"),z4=a("."),tg=u(),Yp=o("p"),O4=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),ag=u(),Kp=o("a"),ng=u(),ks=o("h2"),$t=o("a"),hf=o("span"),f(po.$$.fragment),T4=u(),ff=o("span"),A4=a("Trainer Deepspeed Integration"),og=u(),Jp=o("a"),lg=u(),Ps=o("h3"),kt=o("a"),df=o("span"),f(io.$$.fragment),S4=u(),mf=o("span"),C4=a("Installation"),rg=u(),Xp=o("p"),x4=a("Install the library via pypi:"),pg=u(),f(uo.$$.fragment),ig=u(),Ce=o("p"),R4=a("or via "),_f=o("code"),I4=a("transformers"),U4=a("\u2019 "),vf=o("code"),G4=a("extras"),L4=a(":"),ug=u(),f(co.$$.fragment),cg=u(),xe=o("p"),M4=a("or find more details on "),ho=o("a"),Z4=a("the DeepSpeed\u2019s GitHub page"),N4=a(` and
`),fo=o("a"),H4=a("advanced install"),B4=a("."),hg=u(),Pt=o("p"),W4=a("If you\u2019re still struggling with the build, first make sure to read "),Qp=o("a"),F4=a("zero-install-notes"),V4=a("."),fg=u(),ei=o("p"),Y4=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),dg=u(),si=o("p"),K4=a("To make a local build for DeepSpeed:"),mg=u(),f(mo.$$.fragment),_g=u(),Re=o("p"),J4=a("If you intend to use NVMe offload you will also need to include "),jf=o("code"),X4=a("DS_BUILD_AIO=1"),Q4=a(` in the instructions above (and also
install `),gf=o("em"),e6=a("libaio-dev"),s6=a(" system-wide)."),vg=u(),Dt=o("p"),t6=a("Edit "),wf=o("code"),a6=a("TORCH_CUDA_ARCH_LIST"),n6=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),jg=u(),f(_o.$$.fragment),gg=u(),Pe=o("p"),o6=a("So if you get "),yf=o("code"),l6=a("8, 6"),r6=a(", then use "),bf=o("code"),p6=a('TORCH_CUDA_ARCH_LIST="8.6"'),i6=a(`. If you have multiple different cards, you can list all
of them like so `),Ef=o("code"),u6=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),wg=u(),ti=o("p"),c6=a("If you need to use the same setup on multiple machines, make a binary wheel:"),yg=u(),f(vo.$$.fragment),bg=u(),Ie=o("p"),h6=a("it will generate something like "),qf=o("code"),f6=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),d6=a(` which now you can install
as `),$f=o("code"),m6=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_6=a(" locally or on any other machine."),Eg=u(),zt=o("p"),v6=a("Again, remember to ensure to adjust "),kf=o("code"),j6=a("TORCH_CUDA_ARCH_LIST"),g6=a(" to the target architectures."),qg=u(),Ue=o("p"),w6=a("You can find the complete list of NVIDIA GPUs and their corresponding "),Pf=o("strong"),y6=a("Compute Capabilities"),b6=a(` (same as arch in this
context) `),jo=o("a"),E6=a("here"),q6=a("."),$g=u(),ai=o("p"),$6=a("You can check the archs pytorch was built with using:"),kg=u(),f(go.$$.fragment),Pg=u(),ni=o("p"),k6=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Dg=u(),f(wo.$$.fragment),zg=u(),oi=o("p"),P6=a("If the output is:"),Og=u(),f(yo.$$.fragment),Tg=u(),Ot=o("p"),D6=a("then you know that this card\u2019s arch is "),Df=o("code"),z6=a("8.6"),O6=a("."),Ag=u(),Tt=o("p"),T6=a("You can also leave "),zf=o("code"),A6=a("TORCH_CUDA_ARCH_LIST"),S6=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Sg=u(),At=o("p"),C6=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),bo=o("a"),x6=a("Deepspeed"),R6=a(","),Cg=u(),li=o("a"),xg=u(),Ds=o("h3"),St=o("a"),Of=o("span"),f(Eo.$$.fragment),I6=u(),Tf=o("span"),U6=a("Deployment with multiple GPUs"),Rg=u(),Ct=o("p"),G6=a("To deploy this feature with multiple GPUs adjust the "),ri=o("a"),L6=a("Trainer"),M6=a(` command line arguments as
following:`),Ig=u(),xt=o("ol"),zs=o("li"),Z6=a("replace "),Af=o("code"),N6=a("python -m torch.distributed.launch"),H6=a(" with "),Sf=o("code"),B6=a("deepspeed"),W6=a("."),F6=u(),De=o("li"),V6=a("add a new argument "),Cf=o("code"),Y6=a("--deepspeed ds_config.json"),K6=a(", where "),xf=o("code"),J6=a("ds_config.json"),X6=a(` is the DeepSpeed configuration file as
documented `),qo=o("a"),Q6=a("here"),e5=a(". The file naming is up to you."),Ug=u(),pi=o("p"),s5=a("Therefore, if your original command line looked as follows:"),Gg=u(),f($o.$$.fragment),Lg=u(),ii=o("p"),t5=a("Now it should be:"),Mg=u(),f(ko.$$.fragment),Zg=u(),U=o("p"),a5=a("Unlike, "),Rf=o("code"),n5=a("torch.distributed.launch"),o5=a(" where you have to specify how many GPUs to use with "),If=o("code"),l5=a("--nproc_per_node"),r5=a(`, with the
`),Uf=o("code"),p5=a("deepspeed"),i5=a(" launcher you don\u2019t have to use the corresponding "),Gf=o("code"),u5=a("--num_gpus"),c5=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Po=o("a"),h5=a("here"),f5=a("."),Ng=u(),ne=o("p"),d5=a("In fact, you can continue using "),Lf=o("code"),m5=a("-m torch.distributed.launch"),_5=a(` with DeepSpeed as long as you don\u2019t need to use
`),Mf=o("code"),v5=a("deepspeed"),j5=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Zf=o("code"),g5=a("deepspeed"),w5=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Hg=u(),Rt=o("p"),y5=a("Here is an example of running "),Nf=o("code"),b5=a("run_translation.py"),E5=a(" under DeepSpeed deploying all available GPUs:"),Bg=u(),f(Do.$$.fragment),Wg=u(),It=o("p"),q5=a("Note that in the DeepSpeed documentation you are likely to see "),Hf=o("code"),$5=a("--deepspeed --deepspeed_config ds_config.json"),k5=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Fg=u(),Ut=o("p"),P5=a("For some practical usage examples, please, see this "),zo=o("a"),D5=a("post"),z5=a("."),Vg=u(),ui=o("a"),Yg=u(),Os=o("h3"),Gt=o("a"),Bf=o("span"),f(Oo.$$.fragment),O5=u(),Wf=o("span"),T5=a("Deployment with one GPU"),Kg=u(),Lt=o("p"),A5=a("To deploy DeepSpeed with one GPU adjust the "),ci=o("a"),S5=a("Trainer"),C5=a(" command line arguments as follows:"),Jg=u(),f(To.$$.fragment),Xg=u(),Ge=o("p"),x5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Ff=o("code"),R5=a("--num_gpus=1"),I5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),Ao=o("a"),U5=a("documentation"),G5=a(" discusses the launcher options."),Qg=u(),hi=o("p"),L5=a("Why would you want to use DeepSpeed with just one GPU?"),ew=u(),Mt=o("ol"),Vf=o("li"),M5=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),Z5=u(),Yf=o("li"),N5=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),sw=u(),fi=o("p"),H5=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),tw=u(),f(So.$$.fragment),aw=u(),di=o("p"),B5=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),nw=u(),Zt=o("p"),W5=a("For a practical usage example of this type of deployment, please, see this "),Co=o("a"),F5=a("post"),V5=a("."),ow=u(),mi=o("p"),Y5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),lw=u(),_i=o("p"),K5=a("Notes:"),rw=u(),vi=o("ul"),Ts=o("li"),xo=o("p"),J5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Kf=o("code"),X5=a("CUDA_VISIBLE_DEVICES"),Q5=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),e8=u(),f(Ro.$$.fragment),s8=u(),Jf=o("p"),t8=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),pw=u(),ji=o("a"),iw=u(),As=o("h3"),Nt=o("a"),Xf=o("span"),f(Io.$$.fragment),a8=u(),Qf=o("span"),n8=a("Deployment in Notebooks"),uw=u(),Ht=o("p"),o8=a("The problem with running notebook cells as a script is that there is no normal "),ed=o("code"),l8=a("deepspeed"),r8=a(` launcher to rely on, so
under certain setups we have to emulate it.`),cw=u(),gi=o("p"),p8=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),hw=u(),f(Uo.$$.fragment),fw=u(),Bt=o("p"),i8=a("Note: "),sd=o("code"),u8=a("..."),c8=a(" stands for the normal arguments that you\u2019d pass to the functions."),dw=u(),wi=o("p"),h8=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),mw=u(),yi=o("p"),f8=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),_w=u(),f(Go.$$.fragment),vw=u(),Le=o("p"),d8=a("If the training script is in a normal file and not in the notebook cells, you can launch "),td=o("code"),m8=a("deepspeed"),_8=a(` normally via
shell from a cell. For example, to use `),ad=o("code"),v8=a("run_translation.py"),j8=a(" you would launch it with:"),jw=u(),f(Lo.$$.fragment),gw=u(),Wt=o("p"),g8=a("or with "),nd=o("code"),w8=a("%%bash"),y8=a(" magic, where you can write a multi-line code for the shell program to run:"),ww=u(),f(Mo.$$.fragment),yw=u(),bi=o("p"),b8=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),bw=u(),Ft=o("p"),E8=a("Note: While "),od=o("code"),q8=a("%%bash"),$8=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Ew=u(),Ei=o("a"),qw=u(),Ss=o("h3"),Vt=o("a"),ld=o("span"),f(Zo.$$.fragment),k8=u(),rd=o("span"),P8=a("Configuration"),$w=u(),Yt=o("p"),D8=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),No=o("a"),z8=a("following documentation"),O8=a("."),kw=u(),Kt=o("p"),T8=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Ho=o("a"),A8=a(`the DeepSpeedExamples
repo`),S8=a(":"),Pw=u(),f(Bo.$$.fragment),Dw=u(),Jt=o("p"),C8=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),pd=o("code"),x8=a(".json"),R8=a(" files with:"),zw=u(),f(Wo.$$.fragment),Ow=u(),Xt=o("p"),I8=a("Some more examples are to be found in the "),Fo=o("a"),U8=a("main repo"),G8=a(" as well."),Tw=u(),qi=o("p"),L8=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Aw=u(),oe=o("p"),M8=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),id=o("code"),Z8=a("AdamW"),N8=a(" optimizer and "),ud=o("code"),H8=a("WarmupLR"),B8=a(` scheduler and will enable mixed
precision training if `),cd=o("code"),W8=a("--fp16"),F8=a(" is passed:"),Sw=u(),f(Vo.$$.fragment),Cw=u(),Qt=o("p"),V8=a("When you execute the program, DeepSpeed will log the configuration it received from the "),$i=o("a"),Y8=a("Trainer"),K8=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),xw=u(),ki=o("a"),Rw=u(),Cs=o("h3"),ea=o("a"),hd=o("span"),f(Yo.$$.fragment),J8=u(),fd=o("span"),X8=a("Passing Configuration"),Iw=u(),G=o("p"),Q8=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Pi=o("a"),ek=a("Trainer"),sk=a(" via "),Di=o("a"),tk=a("TrainingArguments"),ak=a(" then for the "),dd=o("code"),nk=a("deepspeed"),ok=a(` argument you can
pass a nested `),md=o("code"),lk=a("dict"),rk=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),zi=o("a"),pk=a("TrainingArguments"),ik=a("."),Uw=u(),Oi=o("p"),uk=a("To summarize you can do:"),Gw=u(),f(Ko.$$.fragment),Lw=u(),Ti=o("p"),ck=a("or:"),Mw=u(),f(Jo.$$.fragment),Zw=u(),Ai=o("a"),Nw=u(),xs=o("h3"),sa=o("a"),_d=o("span"),f(Xo.$$.fragment),hk=u(),vd=o("span"),fk=a("Shared Configuration"),Hw=u(),f(ta.$$.fragment),Bw=u(),Me=o("p"),dk=a("Some configuration values are required by both the "),Si=o("a"),mk=a("Trainer"),_k=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ci=o("a"),vk=a("Trainer"),jk=a(" command line arguments."),Ww=u(),aa=o("p"),gk=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),xi=o("a"),wk=a("Trainer"),yk=a(` do the majority
of configuration for you.`),Fw=u(),Ze=o("p"),bk=a("Therefore, in the rest of this guide you will find a special configuration value: "),jd=o("code"),Ek=a("auto"),qk=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ri=o("a"),$k=a("Trainer"),kk=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Vw=u(),Ii=o("p"),Pk=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),Yw=u(),na=o("p"),Dk=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ui=o("a"),zk=a("TrainingArguments"),Ok=a(" based on that. The steps are:"),Kw=u(),oa=o("ol"),gd=o("li"),Tk=a("Create or load the DeepSpeed configuration to be used as a master configuration"),Ak=u(),Qo=o("li"),Sk=a("Create the "),Gi=o("a"),Ck=a("TrainingArguments"),xk=a(" object based on these values"),Jw=u(),le=o("p"),Rk=a("Do note that some values, such as "),wd=o("code"),Ik=a("scheduler.params.total_num_steps"),Uk=a(` are calculated by
`),Li=o("a"),Gk=a("Trainer"),Lk=a(" during "),yd=o("code"),Mk=a("train"),Zk=a(", but you can of course do the math yourself."),Xw=u(),Mi=o("a"),Qw=u(),Rs=o("h3"),la=o("a"),bd=o("span"),f(el.$$.fragment),Nk=u(),Ed=o("span"),Hk=a("ZeRO"),ey=u(),sl=o("p"),tl=o("a"),Bk=a("Zero Redundancy Optimizer (ZeRO)"),Wk=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),sy=u(),Ne=o("p"),Fk=a("The "),qd=o("code"),Vk=a("zero_optimization"),Yk=a(" section of the configuration file is the most important part ("),al=o("a"),Kk=a("docs"),Jk=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),ty=u(),ra=o("p"),Xk=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Zi=o("a"),Qk=a("Trainer"),e7=a(` provides
no equivalent command line arguments.`),ay=u(),Ni=o("p"),s7=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),ny=u(),Hi=o("a"),oy=u(),Is=o("h4"),pa=o("a"),$d=o("span"),f(nl.$$.fragment),t7=u(),kd=o("span"),a7=a("ZeRO-2 Config"),ly=u(),Bi=o("p"),n7=a("The following is an example of configuration for ZeRO stage 2:"),ry=u(),f(ol.$$.fragment),py=u(),Wi=o("p"),Pd=o("strong"),o7=a("Performance tuning:"),iy=u(),He=o("ul"),Us=o("li"),l7=a("enabling "),Dd=o("code"),r7=a("offload_optimizer"),p7=a(" should reduce GPU RAM usage (it requires "),zd=o("code"),i7=a('"stage": 2'),u7=a(")"),c7=u(),L=o("li"),Od=o("code"),h7=a('"overlap_comm": true'),f7=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),Td=o("code"),d7=a("overlap_comm"),m7=a(` uses 4.5x
the `),Ad=o("code"),_7=a("allgather_bucket_size"),v7=a(" and "),Sd=o("code"),j7=a("reduce_bucket_size"),g7=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Cd=o("code"),w7=a("5e8 x 2Bytes x 2 x 4.5"),y7=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),xd=o("code"),b7=a("2e8"),E7=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),q7=u(),Rd=o("li"),$7=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),uy=u(),Be=o("p"),k7=a("Additionally, "),Id=o("code"),P7=a("deepspeed==0.4.4"),D7=a(" added a new option "),Ud=o("code"),z7=a("round_robin_gradients"),O7=a(" which you can enable with:"),cy=u(),f(ll.$$.fragment),hy=u(),Fi=o("p"),T7=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),fy=u(),Vi=o("a"),dy=u(),Gs=o("h4"),ia=o("a"),Gd=o("span"),f(rl.$$.fragment),A7=u(),Ld=o("span"),S7=a("ZeRO-3 Config"),my=u(),Yi=o("p"),C7=a("The following is an example of configuration for ZeRO stage 3:"),_y=u(),f(pl.$$.fragment),vy=u(),K=o("p"),x7=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Md=o("code"),R7=a('"device": "cpu"'),I7=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Zd=o("code"),U7=a("none"),G7=a(" instead of "),Nd=o("code"),L7=a("cpu"),M7=a(" for the "),Hd=o("code"),Z7=a("device"),N7=a(` entry. Offloading to
NVMe is discussed further down.`),jy=u(),We=o("p"),H7=a("Pinned memory is enabled with "),Bd=o("code"),B7=a("pin_memory"),W7=a(" set to "),Wd=o("code"),F7=a("true"),V7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),gy=u(),Ki=o("p"),Fd=o("strong"),Y7=a("Performance tuning:"),wy=u(),ua=o("ul"),il=o("li"),Vd=o("code"),K7=a("stage3_max_live_parameters"),J7=a(": "),Yd=o("code"),X7=a("1e9"),Q7=u(),ul=o("li"),Kd=o("code"),e9=a("stage3_max_reuse_distance"),s9=a(": "),Jd=o("code"),t9=a("1e9"),yy=u(),M=o("p"),a9=a("If hitting OOM reduce "),Xd=o("code"),n9=a("stage3_max_live_parameters"),o9=a(" and "),Qd=o("code"),l9=a("stage3_max_reuse_distance"),r9=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),em=o("code"),p9=a("1e9"),i9=a(` would consume ~2GB. The memory is shared by
`),sm=o("code"),u9=a("stage3_max_live_parameters"),c9=a(" and "),tm=o("code"),h9=a("stage3_max_reuse_distance"),f9=a(", so it\u2019s not additive, it\u2019s just 2GB total."),by=u(),ze=o("p"),am=o("code"),d9=a("stage3_max_live_parameters"),m9=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),nm=o("code"),_9=a("stage3_max_reuse_distance"),v9=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),om=o("code"),j9=a("stage3_max_reuse_distance"),g9=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ey=u(),Ji=o("p"),w9=a("The following configuration values depend on the model\u2019s hidden size:"),qy=u(),Fe=o("ul"),cl=o("li"),lm=o("code"),y9=a("reduce_bucket_size"),b9=a(": "),rm=o("code"),E9=a("hidden_size*hidden_size"),q9=u(),hl=o("li"),pm=o("code"),$9=a("stage3_prefetch_bucket_size"),k9=a(": "),im=o("code"),P9=a("0.9 * hidden_size * hidden_size"),D9=u(),fl=o("li"),um=o("code"),z9=a("stage3_param_persistence_threshold"),O9=a(": "),cm=o("code"),T9=a("10 * hidden_size"),$y=u(),Ve=o("p"),A9=a("therefore set these values to "),hm=o("code"),S9=a("auto"),C9=a(" and the "),Xi=o("a"),x9=a("Trainer"),R9=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),ky=u(),dl=o("p"),fm=o("code"),I9=a("stage3_gather_16bit_weights_on_model_save"),U9=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Py=u(),re=o("p"),G9=a("If you\u2019re migrating from ZeRO-2 configuration note that "),dm=o("code"),L9=a("allgather_partitions"),M9=a(", "),mm=o("code"),Z9=a("allgather_bucket_size"),N9=a(` and
`),_m=o("code"),H9=a("reduce_scatter"),B9=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Dy=u(),Qi=o("ul"),ml=o("li"),vm=o("code"),W9=a("sub_group_size"),F9=a(": "),jm=o("code"),V9=a("1e9"),zy=u(),Oe=o("p"),gm=o("code"),Y9=a("sub_group_size"),K9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),wm=o("code"),J9=a("sub_group_size"),X9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),ym=o("code"),Q9=a("sub_group_size"),eP=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Oy=u(),Ye=o("p"),sP=a("You can leave "),bm=o("code"),tP=a("sub_group_size"),aP=a(" to its default value of "),Em=o("em"),nP=a("1e9"),oP=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Ty=u(),ca=o("ol"),_l=o("li"),lP=a("Running into OOM during optimizer step: Reduce "),qm=o("code"),rP=a("sub_group_size"),pP=a(" to reduce memory utilization of temporary buffers"),iP=u(),vl=o("li"),uP=a("Optimizer Step is taking a long time: Increase "),$m=o("code"),cP=a("sub_group_size"),hP=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Ay=u(),eu=o("a"),Sy=u(),Ls=o("h3"),ha=o("a"),km=o("span"),f(jl.$$.fragment),fP=u(),Pm=o("span"),dP=a("NVMe Support"),Cy=u(),su=o("p"),mP=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),xy=u(),tu=o("p"),_P=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Ry=u(),f(gl.$$.fragment),Iy=u(),fa=o("p"),vP=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Dm=o("em"),jP=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),gP=a(")."),Uy=u(),Ke=o("p"),wP=a("Here is the full documentation for offloading "),wl=o("a"),yP=a("optimizer states"),bP=a(" and "),yl=o("a"),EP=a("parameters"),qP=a("."),Gy=u(),da=o("p"),$P=a("Make sure that your "),zm=o("code"),kP=a("nvme_path"),PP=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Ly=u(),Je=o("p"),DP=a("In order to figure out the optimal "),Om=o("code"),zP=a("aio"),OP=a(` configuration block you must run a benchmark on your target setup, as
`),bl=o("a"),TP=a("explained here"),AP=a("."),My=u(),au=o("a"),Zy=u(),Ms=o("h4"),ma=o("a"),Tm=o("span"),f(El.$$.fragment),SP=u(),Am=o("span"),CP=a("ZeRO-2 vs ZeRO-3 Performance"),Ny=u(),nu=o("p"),xP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Hy=u(),ou=o("p"),RP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),By=u(),_a=o("ul"),Zs=o("li"),IP=a("set "),Sm=o("code"),UP=a("stage3_param_persistence_threshold"),GP=a(" to a very large number - larger than the largest parameter, e.g., "),Cm=o("code"),LP=a("6 * hidden_size * hidden_size"),MP=a(". This will keep the parameters on the GPUs."),ZP=u(),ql=o("li"),NP=a("turn off "),xm=o("code"),HP=a("offload_params"),BP=a(" since ZeRO-2 doesn\u2019t have that option."),Wy=u(),Xe=o("p"),WP=a("The performance will likely improve significantly with just "),Rm=o("code"),FP=a("offload_params"),VP=a(` turned off, even if you don\u2019t change
`),Im=o("code"),YP=a("stage3_param_persistence_threshold"),KP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Fy=u(),lu=o("a"),Vy=u(),Ns=o("h4"),va=o("a"),Um=o("span"),f($l.$$.fragment),JP=u(),Gm=o("span"),XP=a("ZeRO-2 Example"),Yy=u(),ja=o("p"),QP=a("Here is a full ZeRO-2 auto-configuration file "),Lm=o("code"),eD=a("ds_config_zero2.json"),sD=a(":"),Ky=u(),f(kl.$$.fragment),Jy=u(),ga=o("p"),tD=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Mm=o("code"),aD=a("auto"),nD=a(" settings in it."),Xy=u(),f(Pl.$$.fragment),Qy=u(),ru=o("a"),e2=u(),Hs=o("h4"),wa=o("a"),Zm=o("span"),f(Dl.$$.fragment),oD=u(),Nm=o("span"),lD=a("ZeRO-3 Example"),s2=u(),ya=o("p"),rD=a("Here is a full ZeRO-3 auto-configuration file "),Hm=o("code"),pD=a("ds_config_zero3.json"),iD=a(":"),t2=u(),f(zl.$$.fragment),a2=u(),ba=o("p"),uD=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Bm=o("code"),cD=a("auto"),hD=a(" settings in it."),n2=u(),f(Ol.$$.fragment),o2=u(),Bs=o("h3"),Ea=o("a"),Wm=o("span"),f(Tl.$$.fragment),fD=u(),Fm=o("span"),dD=a("Optimizer and Scheduler"),l2=u(),qa=o("p"),mD=a("As long as you don\u2019t enable "),Vm=o("code"),_D=a("offload_optimizer"),vD=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),r2=u(),pu=o("p"),jD=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),p2=u(),$a=o("p"),gD=a("It is possible to use a non-DeepSpeed optimizer when "),Ym=o("code"),wD=a("offload_optimizer"),yD=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),i2=u(),iu=o("a"),u2=u(),Ws=o("h4"),ka=o("a"),Km=o("span"),f(Al.$$.fragment),bD=u(),Jm=o("span"),ED=a("Optimizer"),c2=u(),Qe=o("p"),qD=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Xm=o("code"),$D=a("torch"),kD=a(". The full documentation is "),Sl=o("a"),PD=a("here"),DD=a("."),h2=u(),k=o("p"),zD=a("If you don\u2019t configure the "),Qm=o("code"),OD=a("optimizer"),TD=a(" entry in the configuration file, the "),uu=o("a"),AD=a("Trainer"),SD=a(` will
automatically set it to `),e_=o("code"),CD=a("AdamW"),xD=a(` and will use the supplied values or the defaults for the following command line
arguments: `),s_=o("code"),RD=a("--learning_rate"),ID=a(", "),t_=o("code"),UD=a("--adam_beta1"),GD=a(", "),a_=o("code"),LD=a("--adam_beta2"),MD=a(", "),n_=o("code"),ZD=a("--adam_epsilon"),ND=a(" and "),o_=o("code"),HD=a("--weight_decay"),BD=a("."),f2=u(),es=o("p"),WD=a("Here is an example of the auto-configured "),l_=o("code"),FD=a("optimizer"),VD=a(" entry for "),r_=o("code"),YD=a("AdamW"),KD=a(":"),d2=u(),f(Cl.$$.fragment),m2=u(),cu=o("p"),JD=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),_2=u(),pe=o("ul"),xl=o("li"),p_=o("code"),XD=a("lr"),QD=a(" with the value of "),i_=o("code"),ez=a("--learning_rate"),sz=u(),Rl=o("li"),u_=o("code"),tz=a("betas"),az=a(" with the value of "),c_=o("code"),nz=a("--adam_beta1 --adam_beta2"),oz=u(),Il=o("li"),h_=o("code"),lz=a("eps"),rz=a(" with the value of "),f_=o("code"),pz=a("--adam_epsilon"),iz=u(),Ul=o("li"),d_=o("code"),uz=a("weight_decay"),cz=a(" with the value of "),m_=o("code"),hz=a("--weight_decay"),v2=u(),hu=o("p"),fz=a("Therefore please remember to tune the shared hyperparameters on the command line."),j2=u(),fu=o("p"),dz=a("You can also set the values explicitly:"),g2=u(),f(Gl.$$.fragment),w2=u(),Pa=o("p"),mz=a("But then you\u2019re on your own synchronizing the "),du=o("a"),_z=a("Trainer"),vz=a(` command line arguments and the DeepSpeed
configuration.`),y2=u(),mu=o("p"),jz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),b2=u(),f(Ll.$$.fragment),E2=u(),ie=o("p"),gz=a("Similarly to "),__=o("code"),wz=a("AdamW"),yz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),v_=o("code"),bz=a("weight_decay"),Ez=a(" around "),j_=o("code"),qz=a("0.01"),$z=a("."),q2=u(),_u=o("a"),$2=u(),Fs=o("h4"),Da=o("a"),g_=o("span"),f(Ml.$$.fragment),kz=u(),w_=o("span"),Pz=a("Scheduler"),k2=u(),Z=o("p"),Dz=a("DeepSpeed supports "),y_=o("code"),zz=a("LRRangeTest"),Oz=a(", "),b_=o("code"),Tz=a("OneCycle"),Az=a(", "),E_=o("code"),Sz=a("WarmupLR"),Cz=a(" and "),q_=o("code"),xz=a("WarmupDecayLR"),Rz=a(` learning rate schedulers. The full
documentation is `),Zl=o("a"),Iz=a("here"),Uz=a("."),P2=u(),vu=o("p"),Gz=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),D2=u(),za=o("ul"),Nl=o("li"),$_=o("code"),Lz=a("WarmupLR"),Mz=a(" via "),k_=o("code"),Zz=a("--lr_scheduler_type constant_with_warmup"),Nz=u(),ss=o("li"),P_=o("code"),Hz=a("WarmupDecayLR"),Bz=a(" via "),D_=o("code"),Wz=a("--lr_scheduler_type linear"),Fz=a(". This is also the default value for "),z_=o("code"),Vz=a("--lr_scheduler_type"),Yz=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),z2=u(),T=o("p"),Kz=a("If you don\u2019t configure the "),O_=o("code"),Jz=a("scheduler"),Xz=a(" entry in the configuration file, the "),ju=o("a"),Qz=a("Trainer"),eO=a(` will use
the values of `),T_=o("code"),sO=a("--lr_scheduler_type"),tO=a(", "),A_=o("code"),aO=a("--learning_rate"),nO=a(" and "),S_=o("code"),oO=a("--warmup_steps"),lO=a(" or "),C_=o("code"),rO=a("--warmup_ratio"),pO=a(` to configure a
\u{1F917} Transformers version of it.`),O2=u(),ts=o("p"),iO=a("Here is an example of the auto-configured "),x_=o("code"),uO=a("scheduler"),cO=a(" entry for "),R_=o("code"),hO=a("WarmupLR"),fO=a(":"),T2=u(),f(Hl.$$.fragment),A2=u(),as=o("p"),dO=a("Since "),I_=o("em"),mO=a("\u201Cauto\u201D"),_O=a(" is used the "),gu=o("a"),vO=a("Trainer"),jO=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),S2=u(),ue=o("ul"),Oa=o("li"),U_=o("code"),gO=a("warmup_min_lr"),wO=a(" with the value of "),G_=o("code"),yO=a("0"),bO=a("."),EO=u(),Ta=o("li"),L_=o("code"),qO=a("warmup_max_lr"),$O=a(" with the value of "),M_=o("code"),kO=a("--learning_rate"),PO=a("."),DO=u(),ns=o("li"),Z_=o("code"),zO=a("warmup_num_steps"),OO=a(" with the value of "),N_=o("code"),TO=a("--warmup_steps"),AO=a(" if provided. Otherwise will use "),H_=o("code"),SO=a("--warmup_ratio"),CO=a(`
multiplied by the number of training steps and rounded up.`),xO=u(),os=o("li"),B_=o("code"),RO=a("total_num_steps"),IO=a(" with either the value of "),W_=o("code"),UO=a("--max_steps"),GO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),F_=o("code"),LO=a("WarmupDecayLR"),MO=a(")."),C2=u(),wu=o("p"),ZO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),x2=u(),f(Bl.$$.fragment),R2=u(),Aa=o("p"),NO=a("But then you\u2019re on your own synchronizing the "),yu=o("a"),HO=a("Trainer"),BO=a(` command line arguments and the DeepSpeed
configuration.`),I2=u(),Sa=o("p"),WO=a("For example, for "),V_=o("code"),FO=a("WarmupDecayLR"),VO=a(", you can use the following entry:"),U2=u(),f(Wl.$$.fragment),G2=u(),J=o("p"),YO=a("and "),Y_=o("code"),KO=a("total_num_steps"),JO=a(", "),K_=o("code"),XO=a("warmup_max_lr"),QO=a(", "),J_=o("code"),eT=a("warmup_num_steps"),sT=a(" and "),X_=o("code"),tT=a("total_num_steps"),aT=a(" will be set at loading time."),L2=u(),bu=o("a"),M2=u(),Vs=o("h3"),Ca=o("a"),Q_=o("span"),f(Fl.$$.fragment),nT=u(),e1=o("span"),oT=a("fp32 Precision"),Z2=u(),Eu=o("p"),lT=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),N2=u(),xa=o("p"),rT=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),s1=o("code"),pT=a("NaN"),iT=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),H2=u(),f(Vl.$$.fragment),B2=u(),Ra=o("p"),uT=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Yl=o("a"),cT=a("TensorFloat-32(TF32) on Ampere devices"),hT=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),W2=u(),ce=o("p"),fT=a("With the \u{1F917} Trainer you can use "),t1=o("code"),dT=a("--tf32"),mT=a(" to enable it, or disable it with "),a1=o("code"),_T=a("--tf32 0"),vT=a(" or "),n1=o("code"),jT=a("--no_tf32"),gT=a(". By default the PyTorch default is used."),F2=u(),qu=o("a"),V2=u(),Ys=o("h3"),Ia=o("a"),o1=o("span"),f(Kl.$$.fragment),wT=u(),l1=o("span"),yT=a("Automatic Mixed Precision"),Y2=u(),$u=o("p"),bT=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),K2=u(),Ks=o("h3"),Ua=o("a"),r1=o("span"),f(Jl.$$.fragment),ET=u(),p1=o("span"),qT=a("fp16"),J2=u(),ku=o("p"),$T=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),X2=u(),f(Xl.$$.fragment),Q2=u(),ls=o("p"),kT=a("and the "),Pu=o("a"),PT=a("Trainer"),DT=a(` will automatically enable or disable it based on the value of
`),i1=o("code"),zT=a("args.fp16_backend"),OT=a(". The rest of config values are up to you."),eb=u(),rs=o("p"),TT=a("This mode gets enabled when "),u1=o("code"),AT=a("--fp16 --fp16_backend amp"),ST=a(" or "),c1=o("code"),CT=a("--fp16_full_eval"),xT=a(" command line args are passed."),sb=u(),Du=o("p"),RT=a("You can also enable/disable this mode explicitly:"),tb=u(),f(Ql.$$.fragment),ab=u(),Ga=o("p"),IT=a("But then you\u2019re on your own synchronizing the "),zu=o("a"),UT=a("Trainer"),GT=a(` command line arguments and the DeepSpeed
configuration.`),nb=u(),La=o("p"),LT=a("Here is the "),er=o("a"),MT=a("documentation"),ZT=a("."),ob=u(),Js=o("h3"),Ma=o("a"),h1=o("span"),f(sr.$$.fragment),NT=u(),f1=o("span"),HT=a("bf16"),lb=u(),Ou=o("p"),BT=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),rb=u(),f(tr.$$.fragment),pb=u(),Tu=o("p"),WT=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),ib=u(),ps=o("p"),FT=a("This mode gets enabled when "),d1=o("code"),VT=a("--bf16"),YT=a(" or "),m1=o("code"),KT=a("--bf16_full_eval"),JT=a(" command line args are passed."),ub=u(),Au=o("p"),XT=a("You can also enable/disable this mode explicitly:"),cb=u(),f(ar.$$.fragment),hb=u(),f(Za.$$.fragment),fb=u(),Xs=o("h3"),Na=o("a"),_1=o("span"),f(nr.$$.fragment),QT=u(),v1=o("span"),eA=a("apex"),db=u(),Su=o("p"),sA=a("To configure apex AMP-like mode set:"),mb=u(),f(or.$$.fragment),_b=u(),he=o("p"),tA=a("and the "),Cu=o("a"),aA=a("Trainer"),nA=a(" will automatically configure it based on the values of "),j1=o("code"),oA=a("args.fp16_backend"),lA=a(` and
`),g1=o("code"),rA=a("args.fp16_opt_level"),pA=a("."),vb=u(),Ha=o("p"),iA=a("This mode gets enabled when "),w1=o("code"),uA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),cA=a(" command line args are passed."),jb=u(),xu=o("p"),hA=a("You can also configure this mode explicitly:"),gb=u(),f(lr.$$.fragment),wb=u(),Ba=o("p"),fA=a("But then you\u2019re on your own synchronizing the "),Ru=o("a"),dA=a("Trainer"),mA=a(` command line arguments and the DeepSpeed
configuration.`),yb=u(),Wa=o("p"),_A=a("Here is the "),rr=o("a"),vA=a("documentation"),jA=a("."),bb=u(),Iu=o("a"),Eb=u(),Qs=o("h3"),Fa=o("a"),y1=o("span"),f(pr.$$.fragment),gA=u(),b1=o("span"),wA=a("Batch Size"),qb=u(),Uu=o("p"),yA=a("To configure batch size, use:"),$b=u(),f(ir.$$.fragment),kb=u(),N=o("p"),bA=a("and the "),Gu=o("a"),EA=a("Trainer"),qA=a(" will automatically set "),E1=o("code"),$A=a("train_micro_batch_size_per_gpu"),kA=a(` to the value of
`),q1=o("code"),PA=a("args.per_device_train_batch_size"),DA=a(" and "),$1=o("code"),zA=a("train_batch_size"),OA=a(" to "),k1=o("code"),TA=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),AA=a("."),Pb=u(),Lu=o("p"),SA=a("You can also set the values explicitly:"),Db=u(),f(ur.$$.fragment),zb=u(),Va=o("p"),CA=a("But then you\u2019re on your own synchronizing the "),Mu=o("a"),xA=a("Trainer"),RA=a(` command line arguments and the DeepSpeed
configuration.`),Ob=u(),Zu=o("a"),Tb=u(),et=o("h3"),Ya=o("a"),P1=o("span"),f(cr.$$.fragment),IA=u(),D1=o("span"),UA=a("Gradient Accumulation"),Ab=u(),Nu=o("p"),GA=a("To configure gradient accumulation set:"),Sb=u(),f(hr.$$.fragment),Cb=u(),is=o("p"),LA=a("and the "),Hu=o("a"),MA=a("Trainer"),ZA=a(" will automatically set it to the value of "),z1=o("code"),NA=a("args.gradient_accumulation_steps"),HA=a("."),xb=u(),Bu=o("p"),BA=a("You can also set the value explicitly:"),Rb=u(),f(fr.$$.fragment),Ib=u(),Ka=o("p"),WA=a("But then you\u2019re on your own synchronizing the "),Wu=o("a"),FA=a("Trainer"),VA=a(` command line arguments and the DeepSpeed
configuration.`),Ub=u(),Fu=o("a"),Gb=u(),st=o("h3"),Ja=o("a"),O1=o("span"),f(dr.$$.fragment),YA=u(),T1=o("span"),KA=a("Gradient Clipping"),Lb=u(),Vu=o("p"),JA=a("To configure gradient gradient clipping set:"),Mb=u(),f(mr.$$.fragment),Zb=u(),us=o("p"),XA=a("and the "),Yu=o("a"),QA=a("Trainer"),eS=a(" will automatically set it to the value of "),A1=o("code"),sS=a("args.max_grad_norm"),tS=a("."),Nb=u(),Ku=o("p"),aS=a("You can also set the value explicitly:"),Hb=u(),f(_r.$$.fragment),Bb=u(),Xa=o("p"),nS=a("But then you\u2019re on your own synchronizing the "),Ju=o("a"),oS=a("Trainer"),lS=a(` command line arguments and the DeepSpeed
configuration.`),Wb=u(),Xu=o("a"),Fb=u(),tt=o("h3"),Qa=o("a"),S1=o("span"),f(vr.$$.fragment),rS=u(),C1=o("span"),pS=a("Getting The Model Weights Out"),Vb=u(),en=o("p"),iS=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),x1=o("code"),uS=a("global_step*/*optim_states.pt"),cS=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Yb=u(),Qu=o("p"),R1=o("strong"),hS=a("FP16 Weights:"),Kb=u(),sn=o("p"),fS=a("When a model is saved under ZeRO-2, you end up having the normal "),I1=o("code"),dS=a("pytorch_model.bin"),mS=a(` file with the model weights, but
they are only the fp16 version of the weights.`),Jb=u(),A=o("p"),_S=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),U1=o("code"),vS=a('"stage3_gather_16bit_weights_on_model_save": true'),jS=a(" is required to get the "),G1=o("code"),gS=a("Trainer"),wS=a(` to save the fp16
version of the weights. If this setting is `),L1=o("code"),yS=a("False"),bS=u(),M1=o("code"),ES=a("pytorch_model.bin"),qS=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),Z1=o("code"),$S=a("state_dict"),kS=a(" contains a placeholder and not the real weights. If we were to save this "),N1=o("code"),PS=a("state_dict"),DS=a(" it won\u2019t be possible to load it back."),Xb=u(),f(jr.$$.fragment),Qb=u(),ec=o("p"),H1=o("strong"),zS=a("FP32 Weights:"),e3=u(),tn=o("p"),OS=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),gr=o("a"),TS=a("models hub"),AS=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),s3=u(),sc=o("p"),B1=o("strong"),SS=a("Live FP32 Weights Recovery:"),t3=u(),tc=o("p"),CS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),a3=u(),ac=o("p"),xS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),n3=u(),f(wr.$$.fragment),o3=u(),cs=o("p"),RS=a("If you\u2019re using the "),W1=o("code"),IS=a("--load_best_model_at_end"),US=a(" class:"),F1=o("em"),GS=a("~transformers.TrainingArguments"),LS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),l3=u(),f(yr.$$.fragment),r3=u(),f(an.$$.fragment),p3=u(),nn=o("p"),MS=a("Of course, you don\u2019t have to use class:"),V1=o("em"),ZS=a("~transformers.Trainer"),NS=a(` and you can adjust the examples above to your own
trainer.`),i3=u(),on=o("p"),HS=a("If for some reason you want more refinement, you can also extract the fp32 "),Y1=o("code"),BS=a("state_dict"),WS=a(` of the weights and apply
these yourself as is shown in the following example:`),u3=u(),f(br.$$.fragment),c3=u(),nc=o("p"),K1=o("strong"),FS=a("Offline FP32 Weights Recovery:"),h3=u(),hs=o("p"),VS=a("DeepSpeed creates a special conversion script "),J1=o("code"),YS=a("zero_to_fp32.py"),KS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),X1=o("code"),JS=a("Trainer"),XS=a(" to do the extraction."),f3=u(),oc=o("p"),QS=a("Let\u2019s say your checkpoint folder looks like this:"),d3=u(),f(Er.$$.fragment),m3=u(),ln=o("p"),eC=a("In this example there is just one DeepSpeed checkpoint sub-folder "),Q1=o("em"),sC=a("global_step1"),tC=a(`. Therefore to reconstruct the fp32
weights just run:`),_3=u(),f(qr.$$.fragment),v3=u(),rn=o("p"),aC=a("This is it. "),ev=o("code"),nC=a("pytorch_model.bin"),oC=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),j3=u(),lc=o("p"),lC=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),g3=u(),$r=o("p"),sv=o("code"),rC=a("python zero_to_fp32.py -h"),pC=a(" will give you usage details."),w3=u(),fs=o("p"),iC=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),tv=o("code"),uC=a("latest"),cC=a(`, which in the current
example will contain `),av=o("code"),hC=a("global_step1"),fC=a("."),y3=u(),rc=o("p"),dC=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),b3=u(),at=o("h3"),pn=o("a"),nv=o("span"),f(kr.$$.fragment),mC=u(),ov=o("span"),_C=a("ZeRO-3 and Infinity Nuances"),E3=u(),pc=o("p"),vC=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),q3=u(),ic=o("p"),jC=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),$3=u(),uc=o("p"),gC=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),k3=u(),nt=o("h4"),un=o("a"),lv=o("span"),f(Pr.$$.fragment),wC=u(),rv=o("span"),yC=a("Constructing Massive Models"),P3=u(),cn=o("p"),bC=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),pv=o("em"),EC=a("deepspeed.zero.Init()"),qC=a(`
context manager (which is also a function decorator), like so:`),D3=u(),f(Dr.$$.fragment),z3=u(),cc=o("p"),$C=a("As you can see this gives you a randomly initialized model."),O3=u(),D=o("p"),kC=a("If you want to use a pretrained model, "),iv=o("code"),PC=a("model_class.from_pretrained"),DC=a(` will activate this feature as long as
`),uv=o("code"),zC=a("is_deepspeed_zero3_enabled()"),OC=a(" returns "),cv=o("code"),TC=a("True"),AC=a(`, which currently is setup by the
`),hc=o("a"),SC=a("TrainingArguments"),CC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),fc=o("a"),xC=a("TrainingArguments"),RC=a(" object "),hv=o("strong"),IC=a("before"),UC=a(` calling
`),fv=o("code"),GC=a("from_pretrained"),LC=a(". Here is an example of a possible sequence:"),T3=u(),f(zr.$$.fragment),A3=u(),hn=o("p"),MC=a("If you\u2019re using the official example scripts and your command line arguments include "),dv=o("code"),ZC=a("--deepspeed ds_config.json"),NC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),S3=u(),dc=o("p"),HC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),C3=u(),fn=o("p"),BC=a("For full details on this method and other related features please refer to "),Or=o("a"),WC=a("Constructing Massive Models"),FC=a("."),x3=u(),fe=o("p"),VC=a("Also when loading fp16-pretrained models, you will want to tell "),mv=o("code"),YC=a("from_pretrained"),KC=a(` to use
`),_v=o("code"),JC=a("torch_dtype=torch.float16"),XC=a(". For details, please, see "),mc=o("a"),QC=a("from_pretrained-torch-dtype"),ex=a("."),R3=u(),ot=o("h4"),dn=o("a"),vv=o("span"),f(Tr.$$.fragment),sx=u(),jv=o("span"),tx=a("Gathering Parameters"),I3=u(),Ar=o("p"),ax=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Sr=o("a"),nx=a("Gathering Parameters"),U3=u(),mn=o("p"),ox=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),gv=o("code"),lx=a("from_pretrained"),rx=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),G3=u(),_c=o("p"),px=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),L3=u(),f(Cr.$$.fragment),M3=u(),ds=o("p"),ix=a("stress on "),wv=o("code"),ux=a("tensor([1.])"),cx=a(", or if you get an error where it says the parameter is of size "),yv=o("code"),hx=a("1"),fx=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Z3=u(),vc=o("a"),N3=u(),lt=o("h3"),_n=o("a"),bv=o("span"),f(xr.$$.fragment),dx=u(),Ev=o("span"),mx=a("ZeRO Inference"),H3=u(),jc=o("p"),_x=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),B3=u(),vn=o("p"),vx=a("Otherwise you just need to pass the usual "),gc=o("a"),jx=a("TrainingArguments"),gx=a(" arguments. For example:"),W3=u(),f(Rr.$$.fragment),F3=u(),wc=o("p"),wx=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),V3=u(),jn=o("p"),yx=a("Here is an example of running "),qv=o("code"),bx=a("run_translation.py"),Ex=a(" under DeepSpeed deploying all available GPUs:"),Y3=u(),f(Ir.$$.fragment),K3=u(),yc=o("p"),qx=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),J3=u(),bc=o("p"),$x=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),X3=u(),rt=o("h3"),gn=o("a"),$v=o("span"),f(Ur.$$.fragment),kx=u(),kv=o("span"),Px=a("Memory Requirements"),Q3=u(),Ec=o("p"),Dx=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),e0=u(),qc=o("p"),zx=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),s0=u(),f(Gr.$$.fragment),t0=u(),$c=o("p"),Ox=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),a0=u(),kc=o("p"),Tx=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),n0=u(),Pc=o("p"),Ax=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),o0=u(),Dc=o("p"),Sx=a("For example, let\u2019s repeat the same for 2 GPUs:"),l0=u(),f(Lr.$$.fragment),r0=u(),zc=o("p"),Cx=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),p0=u(),wn=o("p"),xx=a("For full information please see "),Mr=o("a"),Rx=a("memory estimators"),Ix=a("."),i0=u(),pt=o("h3"),yn=o("a"),Pv=o("span"),f(Zr.$$.fragment),Ux=u(),Dv=o("span"),Gx=a("Filing Issues"),u0=u(),Oc=o("p"),Lx=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),c0=u(),Tc=o("p"),Mx=a("In your report please always include:"),h0=u(),H=o("ol"),zv=o("li"),Ov=o("p"),Zx=a("the full Deepspeed config file in the report"),Nx=u(),Tv=o("li"),Te=o("p"),Hx=a("either the command line arguments if you were using the "),Ac=o("a"),Bx=a("Trainer"),Wx=a(` or
`),Sc=o("a"),Fx=a("TrainingArguments"),Vx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Cc=o("a"),Yx=a("TrainingArguments"),Kx=a(" as it has dozens of entries that are irrelevant."),Jx=u(),Nr=o("li"),Av=o("p"),Xx=a("Output of:"),Qx=u(),f(Hr.$$.fragment),eR=u(),Sv=o("li"),Br=o("p"),sR=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Wr=o("a"),tR=a("notebook"),aR=a(` as
a starting point.`),nR=u(),Cv=o("li"),xv=o("p"),oR=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),lR=u(),Rv=o("li"),Fr=o("p"),rR=a("If possible try to use one of the existing "),Vr=o("a"),pR=a("examples"),iR=a(" to reproduce the problem with."),f0=u(),xc=o("p"),uR=a("Things to consider:"),d0=u(),bn=o("ul"),it=o("li"),Iv=o("p"),cR=a("Deepspeed is often not the cause of the problem."),hR=u(),Uv=o("p"),fR=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),dR=u(),Gv=o("p"),mR=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),_R=u(),Lv=o("li"),Yr=o("p"),vR=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Kr=o("a"),jR=a("Deepspeed"),gR=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),m0=u(),ut=o("h3"),En=o("a"),Mv=o("span"),f(Jr.$$.fragment),wR=u(),Zv=o("span"),yR=a("Troubleshooting"),_0=u(),ct=o("h4"),qn=o("a"),Nv=o("span"),f(Xr.$$.fragment),bR=u(),Qr=o("span"),ER=a("the "),Hv=o("code"),qR=a("deepspeed"),$R=a(" process gets killed at startup without a traceback"),v0=u(),B=o("p"),kR=a("If the "),Bv=o("code"),PR=a("deepspeed"),DR=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Wv=o("code"),zR=a("offload_optimizer"),OR=a(" or "),Fv=o("code"),TR=a("offload_param"),AR=a(` or
both configured to offload to `),Vv=o("code"),SR=a("cpu"),CR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),ep=o("a"),xR=a("estimate how much memory is needed for a specific model"),RR=a("."),j0=u(),ht=o("h4"),$n=o("a"),Yv=o("span"),f(sp.$$.fragment),IR=u(),Rc=o("span"),UR=a("training and/or eval/predict loss is "),Kv=o("code"),GR=a("NaN"),g0=u(),Ic=o("p"),LR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),w0=u(),Uc=o("p"),MR=a("The other problem may have to do with using fp16. When you configure this section:"),y0=u(),f(tp.$$.fragment),b0=u(),kn=o("p"),ZR=a("and you see in your log that Deepspeed reports "),Jv=o("code"),NR=a("OVERFLOW!"),HR=a(" as follows:"),E0=u(),f(ap.$$.fragment),q0=u(),Gc=o("p"),BR=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),$0=u(),Lc=o("p"),WR=a("(the log was massaged to be more readable here.)"),k0=u(),ms=o("p"),FR=a("In this case you usually need to raise the value of "),Xv=o("code"),VR=a("initial_scale_power"),YR=a(". Setting it to "),Qv=o("code"),KR=a('"initial_scale_power": 32'),JR=a(" will typically resolve the problem."),P0=u(),ft=o("h3"),Pn=o("a"),ej=o("span"),f(np.$$.fragment),XR=u(),sj=o("span"),QR=a("Notes"),D0=u(),_s=o("ul"),Dn=o("li"),eI=a("DeepSpeed works with the PyTorch "),Mc=o("a"),sI=a("Trainer"),tI=a(" but not TF "),tj=o("code"),aI=a("TFTrainer"),nI=u(),op=o("li"),oI=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),lp=o("a"),lI=a("source"),rI=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),pI=u(),dt=o("li"),iI=a("You don\u2019t have to use the "),Zc=o("a"),uI=a("Trainer"),cI=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),rp=o("a"),hI=a("the DeepSpeed integration instructions"),fI=a("."),z0=u(),Nc=o("a"),O0=u(),mt=o("h2"),zn=o("a"),aj=o("span"),f(pp.$$.fragment),dI=u(),nj=o("span"),mI=a("Non-Trainer Deepspeed Integration"),T0=u(),de=o("p"),_I=a("The "),Hc=o("a"),vI=a("HfDeepSpeedConfig"),jI=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Bc=o("a"),gI=a("Trainer"),wI=a(" is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),oj=o("code"),yI=a("from_pretrained"),bI=a(" call. Everything else you have to do by yourself."),A0=u(),On=o("p"),EI=a("When using "),Wc=o("a"),qI=a("Trainer"),$I=a(" everything is automatically taken care of."),S0=u(),vs=o("p"),kI=a("When not using "),Fc=o("a"),PI=a("Trainer"),DI=a(`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Vc=o("a"),zI=a("HfDeepSpeedConfig"),OI=a(" object before instantiating the model and keep that object alive."),C0=u(),Tn=o("p"),TI=a("If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),lj=o("code"),AI=a("HfDeepSpeedConfig"),SI=a(" at all."),x0=u(),Yc=o("p"),CI=a("For example for a pretrained model:"),R0=u(),f(ip.$$.fragment),I0=u(),Kc=o("p"),xI=a("or for non-pretrained model:"),U0=u(),f(up.$$.fragment),G0=u(),me=o("p"),RI=a("Please note that if you\u2019re not using the "),Jc=o("a"),II=a("Trainer"),UI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),cp=o("a"),GI=a("Deepspeed"),LI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),rj=o("code"),MI=a('"auto"'),ZI=a(" values and you will have to put real values instead."),L0=u(),_t=o("h2"),An=o("a"),pj=o("span"),f(hp.$$.fragment),NI=u(),ij=o("span"),HI=a("HfDeepSpeedConfig"),M0=u(),P=o("div"),f(fp.$$.fragment),BI=u(),uj=o("p"),WI=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),FI=u(),Ae=o("p"),VI=a("A "),cj=o("code"),YI=a("weakref"),KI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),hj=o("code"),JI=a("from_pretrained"),XI=a(" and "),fj=o("code"),QI=a("_get_resized_embeddings"),eU=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),sU=u(),_e=o("p"),Xc=o("a"),tU=a("Trainer"),aU=a(" uses the "),dj=o("code"),nU=a("HfTrainerDeepSpeedConfig"),oU=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Qc=o("a"),lU=a("TrainingArguments"),rU=a(" by replacing special placeholder values: "),mj=o("code"),pU=a('"auto"'),iU=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),uU=u(),js=o("div"),f(dp.$$.fragment),cU=u(),_j=o("p"),hU=a("Deletes a sub-section of the config file if it\u2019s found."),fU=u(),vt=o("p"),dU=a("Unless "),vj=o("code"),mU=a("must_exist"),_U=a(" is "),jj=o("code"),vU=a("True"),jU=a(" the section doesn\u2019t have to exist."),gU=u(),Sn=o("div"),f(mp.$$.fragment),wU=u(),_p=o("p"),yU=a("Returns the set value or "),gj=o("code"),bU=a("default"),EU=a(" if no value is set"),qU=u(),Cn=o("div"),f(vp.$$.fragment),$U=u(),jt=o("p"),kU=a("Returns "),wj=o("code"),PU=a("True"),DU=a("/"),yj=o("code"),zU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),OU=a(" or isn\u2019t set)."),TU=u(),xn=o("div"),f(jp.$$.fragment),AU=u(),gt=o("p"),SU=a("Returns "),bj=o("code"),CU=a("True"),xU=a("/"),Ej=o("code"),RU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),IU=a(" or isn\u2019t set)."),Z0=u(),wt=o("h3"),Rn=o("a"),qj=o("span"),f(gp.$$.fragment),UU=u(),$j=o("span"),GU=a("Custom DeepSpeed ZeRO Inference"),N0=u(),In=o("p"),LU=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),eh=o("a"),MU=a("Trainer"),ZU=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),H0=u(),sh=o("p"),NU=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),B0=u(),th=o("p"),HU=a("The example has copious notes and is self-documenting."),W0=u(),ah=o("p"),BU=a("Make sure to:"),F0=u(),Un=o("ol"),kj=o("li"),WU=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),FU=u(),Pj=o("li"),VU=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),V0=u(),f(wp.$$.fragment),Y0=u(),Gn=o("p"),YU=a("Let\u2019s save it as "),Dj=o("code"),KU=a("t0.py"),JU=a(" and run it:"),K0=u(),f(yp.$$.fragment),J0=u(),nh=o("p"),XU=a("This was a very basic example and you will want to adapt it to your needs."),X0=u(),yt=o("h2"),Ln=o("a"),zj=o("span"),f(bp.$$.fragment),QU=u(),Oj=o("span"),eG=a("Main DeepSpeed Resources"),Q0=u(),ve=o("ul"),Tj=o("li"),Ep=o("a"),sG=a("Project\u2019s github"),tG=u(),Aj=o("li"),qp=o("a"),aG=a("Usage docs"),nG=u(),Sj=o("li"),$p=o("a"),oG=a("API docs"),lG=u(),Cj=o("li"),kp=o("a"),rG=a("Blog posts"),eE=u(),oh=o("p"),pG=a("Papers:"),sE=u(),gs=o("ul"),xj=o("li"),Pp=o("a"),iG=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),uG=u(),Rj=o("li"),Dp=o("a"),cG=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),hG=u(),Ij=o("li"),zp=o("a"),fG=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),tE=u(),ws=o("p"),dG=a("Finally, please, remember that, HuggingFace "),lh=o("a"),mG=a("Trainer"),_G=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Op=o("a"),vG=a("DeepSpeed GitHub"),jG=a("."),this.h()},l(e){const p=MK('[data-svelte="svelte-1phssyn"]',document.head);y=l(p,"META",{name:!0,content:!0}),p.forEach(t),z=c(e),b=l(e,"H1",{class:!0});var Tp=r(b);q=l(Tp,"A",{id:!0,class:!0,href:!0});var Uj=r(q);ee=l(Uj,"SPAN",{});var Gj=r(ee);d(O.$$.fragment,Gj),Gj.forEach(t),Uj.forEach(t),x=c(Tp),se=l(Tp,"SPAN",{});var $G=r(se);R=n($G,"DeepSpeed Integration"),$G.forEach(t),Tp.forEach(t),ae=c(e),C=l(e,"P",{});var Lj=r(C);E=l(Lj,"A",{href:!0,rel:!0});var kG=r(E);$=n(kG,"DeepSpeed"),kG.forEach(t),qs=n(Lj," implements everything described in the "),V=l(Lj,"A",{href:!0,rel:!0});var PG=r(V);$s=n(PG,"ZeRO paper"),PG.forEach(t),L$=n(Lj,". Currently it provides full support for:"),Lj.forEach(t),Bj=c(e),I=l(e,"OL",{});var je=r(I);sf=l(je,"LI",{});var DG=r(sf);M$=n(DG,"Optimizer state partitioning (ZeRO stage 1)"),DG.forEach(t),Z$=c(je),tf=l(je,"LI",{});var zG=r(tf);N$=n(zG,"Gradient partitioning (ZeRO stage 2)"),zG.forEach(t),H$=c(je),af=l(je,"LI",{});var OG=r(af);B$=n(OG,"Parameter partitioning (ZeRO stage 3)"),OG.forEach(t),W$=c(je),nf=l(je,"LI",{});var TG=r(nf);F$=n(TG,"Custom mixed precision training handling"),TG.forEach(t),V$=c(je),of=l(je,"LI",{});var AG=r(of);Y$=n(AG,"A range of fast CUDA-extension-based optimizers"),AG.forEach(t),K$=c(je),lf=l(je,"LI",{});var SG=r(lf);J$=n(SG,"ZeRO-Offload to CPU and NVMe"),SG.forEach(t),je.forEach(t),Wj=c(e),Se=l(e,"P",{});var rh=r(Se);X$=n(rh,"ZeRO-Offload has its own dedicated paper: "),ao=l(rh,"A",{href:!0,rel:!0});var CG=r(ao);Q$=n(CG,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),CG.forEach(t),e4=n(rh,". And NVMe-support is described in the paper "),no=l(rh,"A",{href:!0,rel:!0});var xG=r(no);s4=n(xG,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),xG.forEach(t),t4=n(rh,"."),rh.forEach(t),Fj=c(e),Up=l(e,"P",{});var RG=r(Up);a4=n(RG,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),RG.forEach(t),Vj=c(e),Gp=l(e,"P",{});var IG=r(Gp);n4=n(IG,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),IG.forEach(t),Yj=c(e),Et=l(e,"P",{});var nE=r(Et);o4=n(nE,"\u{1F917} Transformers integrates "),oo=l(nE,"A",{href:!0,rel:!0});var UG=r(oo);l4=n(UG,"DeepSpeed"),UG.forEach(t),r4=n(nE," via 2 options:"),nE.forEach(t),Kj=c(e),qt=l(e,"OL",{});var oE=r(qt);lo=l(oE,"LI",{});var lE=r(lo);p4=n(lE,"Integration of the core DeepSpeed features via "),Lp=l(lE,"A",{href:!0});var GG=r(Lp);i4=n(GG,"Trainer"),GG.forEach(t),u4=n(lE,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),lE.forEach(t),c4=c(oE),Y=l(oE,"LI",{});var ge=r(Y);h4=n(ge,"If you don\u2019t use "),Mp=l(ge,"A",{href:!0});var LG=r(Mp);f4=n(LG,"Trainer"),LG.forEach(t),d4=n(ge,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),rf=l(ge,"CODE",{});var MG=r(rf);m4=n(MG,"from_pretrained"),MG.forEach(t),_4=n(ge," and "),pf=l(ge,"CODE",{});var ZG=r(pf);v4=n(ZG,"from_config"),ZG.forEach(t),j4=n(ge,` include integration of essential
parts of DeepSpeed like `),uf=l(ge,"CODE",{});var NG=r(uf);g4=n(NG,"zero.Init"),NG.forEach(t),w4=n(ge,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Zp=l(ge,"A",{href:!0});var HG=r(Zp);y4=n(HG,"deepspeed-non-trainer-integration"),HG.forEach(t),b4=n(ge,"."),ge.forEach(t),oE.forEach(t),Jj=c(e),Np=l(e,"P",{});var BG=r(Np);E4=n(BG,"What is integrated:"),BG.forEach(t),Xj=c(e),Hp=l(e,"P",{});var WG=r(Hp);q4=n(WG,"Training:"),WG.forEach(t),Qj=c(e),Bp=l(e,"OL",{});var FG=r(Bp);cf=l(FG,"LI",{});var VG=r(cf);$4=n(VG,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),VG.forEach(t),FG.forEach(t),eg=c(e),Wp=l(e,"P",{});var YG=r(Wp);k4=n(YG,"Inference:"),YG.forEach(t),sg=c(e),Fp=l(e,"OL",{});var KG=r(Fp);ro=l(KG,"LI",{});var rE=r(ro);P4=n(rE,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Vp=l(rE,"A",{href:!0});var JG=r(Vp);D4=n(JG,"deepspeed-zero-inference"),JG.forEach(t),z4=n(rE,"."),rE.forEach(t),KG.forEach(t),tg=c(e),Yp=l(e,"P",{});var XG=r(Yp);O4=n(XG,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),XG.forEach(t),ag=c(e),Kp=l(e,"A",{id:!0}),r(Kp).forEach(t),ng=c(e),ks=l(e,"H2",{class:!0});var pE=r(ks);$t=l(pE,"A",{id:!0,class:!0,href:!0});var QG=r($t);hf=l(QG,"SPAN",{});var eL=r(hf);d(po.$$.fragment,eL),eL.forEach(t),QG.forEach(t),T4=c(pE),ff=l(pE,"SPAN",{});var sL=r(ff);A4=n(sL,"Trainer Deepspeed Integration"),sL.forEach(t),pE.forEach(t),og=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),lg=c(e),Ps=l(e,"H3",{class:!0});var iE=r(Ps);kt=l(iE,"A",{id:!0,class:!0,href:!0});var tL=r(kt);df=l(tL,"SPAN",{});var aL=r(df);d(io.$$.fragment,aL),aL.forEach(t),tL.forEach(t),S4=c(iE),mf=l(iE,"SPAN",{});var nL=r(mf);C4=n(nL,"Installation"),nL.forEach(t),iE.forEach(t),rg=c(e),Xp=l(e,"P",{});var oL=r(Xp);x4=n(oL,"Install the library via pypi:"),oL.forEach(t),pg=c(e),d(uo.$$.fragment,e),ig=c(e),Ce=l(e,"P",{});var ph=r(Ce);R4=n(ph,"or via "),_f=l(ph,"CODE",{});var lL=r(_f);I4=n(lL,"transformers"),lL.forEach(t),U4=n(ph,"\u2019 "),vf=l(ph,"CODE",{});var rL=r(vf);G4=n(rL,"extras"),rL.forEach(t),L4=n(ph,":"),ph.forEach(t),ug=c(e),d(co.$$.fragment,e),cg=c(e),xe=l(e,"P",{});var ih=r(xe);M4=n(ih,"or find more details on "),ho=l(ih,"A",{href:!0,rel:!0});var pL=r(ho);Z4=n(pL,"the DeepSpeed\u2019s GitHub page"),pL.forEach(t),N4=n(ih,` and
`),fo=l(ih,"A",{href:!0,rel:!0});var iL=r(fo);H4=n(iL,"advanced install"),iL.forEach(t),B4=n(ih,"."),ih.forEach(t),hg=c(e),Pt=l(e,"P",{});var uE=r(Pt);W4=n(uE,"If you\u2019re still struggling with the build, first make sure to read "),Qp=l(uE,"A",{href:!0});var uL=r(Qp);F4=n(uL,"zero-install-notes"),uL.forEach(t),V4=n(uE,"."),uE.forEach(t),fg=c(e),ei=l(e,"P",{});var cL=r(ei);Y4=n(cL,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),cL.forEach(t),dg=c(e),si=l(e,"P",{});var hL=r(si);K4=n(hL,"To make a local build for DeepSpeed:"),hL.forEach(t),mg=c(e),d(mo.$$.fragment,e),_g=c(e),Re=l(e,"P",{});var uh=r(Re);J4=n(uh,"If you intend to use NVMe offload you will also need to include "),jf=l(uh,"CODE",{});var fL=r(jf);X4=n(fL,"DS_BUILD_AIO=1"),fL.forEach(t),Q4=n(uh,` in the instructions above (and also
install `),gf=l(uh,"EM",{});var dL=r(gf);e6=n(dL,"libaio-dev"),dL.forEach(t),s6=n(uh," system-wide)."),uh.forEach(t),vg=c(e),Dt=l(e,"P",{});var cE=r(Dt);t6=n(cE,"Edit "),wf=l(cE,"CODE",{});var mL=r(wf);a6=n(mL,"TORCH_CUDA_ARCH_LIST"),mL.forEach(t),n6=n(cE,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),cE.forEach(t),jg=c(e),d(_o.$$.fragment,e),gg=c(e),Pe=l(e,"P",{});var Ap=r(Pe);o6=n(Ap,"So if you get "),yf=l(Ap,"CODE",{});var _L=r(yf);l6=n(_L,"8, 6"),_L.forEach(t),r6=n(Ap,", then use "),bf=l(Ap,"CODE",{});var vL=r(bf);p6=n(vL,'TORCH_CUDA_ARCH_LIST="8.6"'),vL.forEach(t),i6=n(Ap,`. If you have multiple different cards, you can list all
of them like so `),Ef=l(Ap,"CODE",{});var jL=r(Ef);u6=n(jL,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),jL.forEach(t),Ap.forEach(t),wg=c(e),ti=l(e,"P",{});var gL=r(ti);c6=n(gL,"If you need to use the same setup on multiple machines, make a binary wheel:"),gL.forEach(t),yg=c(e),d(vo.$$.fragment,e),bg=c(e),Ie=l(e,"P",{});var ch=r(Ie);h6=n(ch,"it will generate something like "),qf=l(ch,"CODE",{});var wL=r(qf);f6=n(wL,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),wL.forEach(t),d6=n(ch,` which now you can install
as `),$f=l(ch,"CODE",{});var yL=r($f);m6=n(yL,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),yL.forEach(t),_6=n(ch," locally or on any other machine."),ch.forEach(t),Eg=c(e),zt=l(e,"P",{});var hE=r(zt);v6=n(hE,"Again, remember to ensure to adjust "),kf=l(hE,"CODE",{});var bL=r(kf);j6=n(bL,"TORCH_CUDA_ARCH_LIST"),bL.forEach(t),g6=n(hE," to the target architectures."),hE.forEach(t),qg=c(e),Ue=l(e,"P",{});var hh=r(Ue);w6=n(hh,"You can find the complete list of NVIDIA GPUs and their corresponding "),Pf=l(hh,"STRONG",{});var EL=r(Pf);y6=n(EL,"Compute Capabilities"),EL.forEach(t),b6=n(hh,` (same as arch in this
context) `),jo=l(hh,"A",{href:!0,rel:!0});var qL=r(jo);E6=n(qL,"here"),qL.forEach(t),q6=n(hh,"."),hh.forEach(t),$g=c(e),ai=l(e,"P",{});var $L=r(ai);$6=n($L,"You can check the archs pytorch was built with using:"),$L.forEach(t),kg=c(e),d(go.$$.fragment,e),Pg=c(e),ni=l(e,"P",{});var kL=r(ni);k6=n(kL,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),kL.forEach(t),Dg=c(e),d(wo.$$.fragment,e),zg=c(e),oi=l(e,"P",{});var PL=r(oi);P6=n(PL,"If the output is:"),PL.forEach(t),Og=c(e),d(yo.$$.fragment,e),Tg=c(e),Ot=l(e,"P",{});var fE=r(Ot);D6=n(fE,"then you know that this card\u2019s arch is "),Df=l(fE,"CODE",{});var DL=r(Df);z6=n(DL,"8.6"),DL.forEach(t),O6=n(fE,"."),fE.forEach(t),Ag=c(e),Tt=l(e,"P",{});var dE=r(Tt);T6=n(dE,"You can also leave "),zf=l(dE,"CODE",{});var zL=r(zf);A6=n(zL,"TORCH_CUDA_ARCH_LIST"),zL.forEach(t),S6=n(dE,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),dE.forEach(t),Sg=c(e),At=l(e,"P",{});var mE=r(At);C6=n(mE,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),bo=l(mE,"A",{href:!0,rel:!0});var OL=r(bo);x6=n(OL,"Deepspeed"),OL.forEach(t),R6=n(mE,","),mE.forEach(t),Cg=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),xg=c(e),Ds=l(e,"H3",{class:!0});var _E=r(Ds);St=l(_E,"A",{id:!0,class:!0,href:!0});var TL=r(St);Of=l(TL,"SPAN",{});var AL=r(Of);d(Eo.$$.fragment,AL),AL.forEach(t),TL.forEach(t),I6=c(_E),Tf=l(_E,"SPAN",{});var SL=r(Tf);U6=n(SL,"Deployment with multiple GPUs"),SL.forEach(t),_E.forEach(t),Rg=c(e),Ct=l(e,"P",{});var vE=r(Ct);G6=n(vE,"To deploy this feature with multiple GPUs adjust the "),ri=l(vE,"A",{href:!0});var CL=r(ri);L6=n(CL,"Trainer"),CL.forEach(t),M6=n(vE,` command line arguments as
following:`),vE.forEach(t),Ig=c(e),xt=l(e,"OL",{});var jE=r(xt);zs=l(jE,"LI",{});var fh=r(zs);Z6=n(fh,"replace "),Af=l(fh,"CODE",{});var xL=r(Af);N6=n(xL,"python -m torch.distributed.launch"),xL.forEach(t),H6=n(fh," with "),Sf=l(fh,"CODE",{});var RL=r(Sf);B6=n(RL,"deepspeed"),RL.forEach(t),W6=n(fh,"."),fh.forEach(t),F6=c(jE),De=l(jE,"LI",{});var Mn=r(De);V6=n(Mn,"add a new argument "),Cf=l(Mn,"CODE",{});var IL=r(Cf);Y6=n(IL,"--deepspeed ds_config.json"),IL.forEach(t),K6=n(Mn,", where "),xf=l(Mn,"CODE",{});var UL=r(xf);J6=n(UL,"ds_config.json"),UL.forEach(t),X6=n(Mn,` is the DeepSpeed configuration file as
documented `),qo=l(Mn,"A",{href:!0,rel:!0});var GL=r(qo);Q6=n(GL,"here"),GL.forEach(t),e5=n(Mn,". The file naming is up to you."),Mn.forEach(t),jE.forEach(t),Ug=c(e),pi=l(e,"P",{});var LL=r(pi);s5=n(LL,"Therefore, if your original command line looked as follows:"),LL.forEach(t),Gg=c(e),d($o.$$.fragment,e),Lg=c(e),ii=l(e,"P",{});var ML=r(ii);t5=n(ML,"Now it should be:"),ML.forEach(t),Mg=c(e),d(ko.$$.fragment,e),Zg=c(e),U=l(e,"P",{});var we=r(U);a5=n(we,"Unlike, "),Rf=l(we,"CODE",{});var ZL=r(Rf);n5=n(ZL,"torch.distributed.launch"),ZL.forEach(t),o5=n(we," where you have to specify how many GPUs to use with "),If=l(we,"CODE",{});var NL=r(If);l5=n(NL,"--nproc_per_node"),NL.forEach(t),r5=n(we,`, with the
`),Uf=l(we,"CODE",{});var HL=r(Uf);p5=n(HL,"deepspeed"),HL.forEach(t),i5=n(we," launcher you don\u2019t have to use the corresponding "),Gf=l(we,"CODE",{});var BL=r(Gf);u5=n(BL,"--num_gpus"),BL.forEach(t),c5=n(we,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Po=l(we,"A",{href:!0,rel:!0});var WL=r(Po);h5=n(WL,"here"),WL.forEach(t),f5=n(we,"."),we.forEach(t),Ng=c(e),ne=l(e,"P",{});var Zn=r(ne);d5=n(Zn,"In fact, you can continue using "),Lf=l(Zn,"CODE",{});var FL=r(Lf);m5=n(FL,"-m torch.distributed.launch"),FL.forEach(t),_5=n(Zn,` with DeepSpeed as long as you don\u2019t need to use
`),Mf=l(Zn,"CODE",{});var VL=r(Mf);v5=n(VL,"deepspeed"),VL.forEach(t),j5=n(Zn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Zf=l(Zn,"CODE",{});var YL=r(Zf);g5=n(YL,"deepspeed"),YL.forEach(t),w5=n(Zn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Zn.forEach(t),Hg=c(e),Rt=l(e,"P",{});var gE=r(Rt);y5=n(gE,"Here is an example of running "),Nf=l(gE,"CODE",{});var KL=r(Nf);b5=n(KL,"run_translation.py"),KL.forEach(t),E5=n(gE," under DeepSpeed deploying all available GPUs:"),gE.forEach(t),Bg=c(e),d(Do.$$.fragment,e),Wg=c(e),It=l(e,"P",{});var wE=r(It);q5=n(wE,"Note that in the DeepSpeed documentation you are likely to see "),Hf=l(wE,"CODE",{});var JL=r(Hf);$5=n(JL,"--deepspeed --deepspeed_config ds_config.json"),JL.forEach(t),k5=n(wE,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),wE.forEach(t),Fg=c(e),Ut=l(e,"P",{});var yE=r(Ut);P5=n(yE,"For some practical usage examples, please, see this "),zo=l(yE,"A",{href:!0,rel:!0});var XL=r(zo);D5=n(XL,"post"),XL.forEach(t),z5=n(yE,"."),yE.forEach(t),Vg=c(e),ui=l(e,"A",{id:!0}),r(ui).forEach(t),Yg=c(e),Os=l(e,"H3",{class:!0});var bE=r(Os);Gt=l(bE,"A",{id:!0,class:!0,href:!0});var QL=r(Gt);Bf=l(QL,"SPAN",{});var eM=r(Bf);d(Oo.$$.fragment,eM),eM.forEach(t),QL.forEach(t),O5=c(bE),Wf=l(bE,"SPAN",{});var sM=r(Wf);T5=n(sM,"Deployment with one GPU"),sM.forEach(t),bE.forEach(t),Kg=c(e),Lt=l(e,"P",{});var EE=r(Lt);A5=n(EE,"To deploy DeepSpeed with one GPU adjust the "),ci=l(EE,"A",{href:!0});var tM=r(ci);S5=n(tM,"Trainer"),tM.forEach(t),C5=n(EE," command line arguments as follows:"),EE.forEach(t),Jg=c(e),d(To.$$.fragment,e),Xg=c(e),Ge=l(e,"P",{});var dh=r(Ge);x5=n(dh,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Ff=l(dh,"CODE",{});var aM=r(Ff);R5=n(aM,"--num_gpus=1"),aM.forEach(t),I5=n(dh,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),Ao=l(dh,"A",{href:!0,rel:!0});var nM=r(Ao);U5=n(nM,"documentation"),nM.forEach(t),G5=n(dh," discusses the launcher options."),dh.forEach(t),Qg=c(e),hi=l(e,"P",{});var oM=r(hi);L5=n(oM,"Why would you want to use DeepSpeed with just one GPU?"),oM.forEach(t),ew=c(e),Mt=l(e,"OL",{});var qE=r(Mt);Vf=l(qE,"LI",{});var lM=r(Vf);M5=n(lM,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),lM.forEach(t),Z5=c(qE),Yf=l(qE,"LI",{});var rM=r(Yf);N5=n(rM,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),rM.forEach(t),qE.forEach(t),sw=c(e),fi=l(e,"P",{});var pM=r(fi);H5=n(pM,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),pM.forEach(t),tw=c(e),d(So.$$.fragment,e),aw=c(e),di=l(e,"P",{});var iM=r(di);B5=n(iM,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),iM.forEach(t),nw=c(e),Zt=l(e,"P",{});var $E=r(Zt);W5=n($E,"For a practical usage example of this type of deployment, please, see this "),Co=l($E,"A",{href:!0,rel:!0});var uM=r(Co);F5=n(uM,"post"),uM.forEach(t),V5=n($E,"."),$E.forEach(t),ow=c(e),mi=l(e,"P",{});var cM=r(mi);Y5=n(cM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),cM.forEach(t),lw=c(e),_i=l(e,"P",{});var hM=r(_i);K5=n(hM,"Notes:"),hM.forEach(t),rw=c(e),vi=l(e,"UL",{});var fM=r(vi);Ts=l(fM,"LI",{});var mh=r(Ts);xo=l(mh,"P",{});var kE=r(xo);J5=n(kE,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Kf=l(kE,"CODE",{});var dM=r(Kf);X5=n(dM,"CUDA_VISIBLE_DEVICES"),dM.forEach(t),Q5=n(kE,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),kE.forEach(t),e8=c(mh),d(Ro.$$.fragment,mh),s8=c(mh),Jf=l(mh,"P",{});var mM=r(Jf);t8=n(mM,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),mM.forEach(t),mh.forEach(t),fM.forEach(t),pw=c(e),ji=l(e,"A",{id:!0}),r(ji).forEach(t),iw=c(e),As=l(e,"H3",{class:!0});var PE=r(As);Nt=l(PE,"A",{id:!0,class:!0,href:!0});var _M=r(Nt);Xf=l(_M,"SPAN",{});var vM=r(Xf);d(Io.$$.fragment,vM),vM.forEach(t),_M.forEach(t),a8=c(PE),Qf=l(PE,"SPAN",{});var jM=r(Qf);n8=n(jM,"Deployment in Notebooks"),jM.forEach(t),PE.forEach(t),uw=c(e),Ht=l(e,"P",{});var DE=r(Ht);o8=n(DE,"The problem with running notebook cells as a script is that there is no normal "),ed=l(DE,"CODE",{});var gM=r(ed);l8=n(gM,"deepspeed"),gM.forEach(t),r8=n(DE,` launcher to rely on, so
under certain setups we have to emulate it.`),DE.forEach(t),cw=c(e),gi=l(e,"P",{});var wM=r(gi);p8=n(wM,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),wM.forEach(t),hw=c(e),d(Uo.$$.fragment,e),fw=c(e),Bt=l(e,"P",{});var zE=r(Bt);i8=n(zE,"Note: "),sd=l(zE,"CODE",{});var yM=r(sd);u8=n(yM,"..."),yM.forEach(t),c8=n(zE," stands for the normal arguments that you\u2019d pass to the functions."),zE.forEach(t),dw=c(e),wi=l(e,"P",{});var bM=r(wi);h8=n(bM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),bM.forEach(t),mw=c(e),yi=l(e,"P",{});var EM=r(yi);f8=n(EM,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),EM.forEach(t),_w=c(e),d(Go.$$.fragment,e),vw=c(e),Le=l(e,"P",{});var _h=r(Le);d8=n(_h,"If the training script is in a normal file and not in the notebook cells, you can launch "),td=l(_h,"CODE",{});var qM=r(td);m8=n(qM,"deepspeed"),qM.forEach(t),_8=n(_h,` normally via
shell from a cell. For example, to use `),ad=l(_h,"CODE",{});var $M=r(ad);v8=n($M,"run_translation.py"),$M.forEach(t),j8=n(_h," you would launch it with:"),_h.forEach(t),jw=c(e),d(Lo.$$.fragment,e),gw=c(e),Wt=l(e,"P",{});var OE=r(Wt);g8=n(OE,"or with "),nd=l(OE,"CODE",{});var kM=r(nd);w8=n(kM,"%%bash"),kM.forEach(t),y8=n(OE," magic, where you can write a multi-line code for the shell program to run:"),OE.forEach(t),ww=c(e),d(Mo.$$.fragment,e),yw=c(e),bi=l(e,"P",{});var PM=r(bi);b8=n(PM,"In such case you don\u2019t need any of the code presented at the beginning of this section."),PM.forEach(t),bw=c(e),Ft=l(e,"P",{});var TE=r(Ft);E8=n(TE,"Note: While "),od=l(TE,"CODE",{});var DM=r(od);q8=n(DM,"%%bash"),DM.forEach(t),$8=n(TE,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),TE.forEach(t),Ew=c(e),Ei=l(e,"A",{id:!0}),r(Ei).forEach(t),qw=c(e),Ss=l(e,"H3",{class:!0});var AE=r(Ss);Vt=l(AE,"A",{id:!0,class:!0,href:!0});var zM=r(Vt);ld=l(zM,"SPAN",{});var OM=r(ld);d(Zo.$$.fragment,OM),OM.forEach(t),zM.forEach(t),k8=c(AE),rd=l(AE,"SPAN",{});var TM=r(rd);P8=n(TM,"Configuration"),TM.forEach(t),AE.forEach(t),$w=c(e),Yt=l(e,"P",{});var SE=r(Yt);D8=n(SE,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),No=l(SE,"A",{href:!0,rel:!0});var AM=r(No);z8=n(AM,"following documentation"),AM.forEach(t),O8=n(SE,"."),SE.forEach(t),kw=c(e),Kt=l(e,"P",{});var CE=r(Kt);T8=n(CE,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Ho=l(CE,"A",{href:!0,rel:!0});var SM=r(Ho);A8=n(SM,`the DeepSpeedExamples
repo`),SM.forEach(t),S8=n(CE,":"),CE.forEach(t),Pw=c(e),d(Bo.$$.fragment,e),Dw=c(e),Jt=l(e,"P",{});var xE=r(Jt);C8=n(xE,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),pd=l(xE,"CODE",{});var CM=r(pd);x8=n(CM,".json"),CM.forEach(t),R8=n(xE," files with:"),xE.forEach(t),zw=c(e),d(Wo.$$.fragment,e),Ow=c(e),Xt=l(e,"P",{});var RE=r(Xt);I8=n(RE,"Some more examples are to be found in the "),Fo=l(RE,"A",{href:!0,rel:!0});var xM=r(Fo);U8=n(xM,"main repo"),xM.forEach(t),G8=n(RE," as well."),RE.forEach(t),Tw=c(e),qi=l(e,"P",{});var RM=r(qi);L8=n(RM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),RM.forEach(t),Aw=c(e),oe=l(e,"P",{});var Nn=r(oe);M8=n(Nn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),id=l(Nn,"CODE",{});var IM=r(id);Z8=n(IM,"AdamW"),IM.forEach(t),N8=n(Nn," optimizer and "),ud=l(Nn,"CODE",{});var UM=r(ud);H8=n(UM,"WarmupLR"),UM.forEach(t),B8=n(Nn,` scheduler and will enable mixed
precision training if `),cd=l(Nn,"CODE",{});var GM=r(cd);W8=n(GM,"--fp16"),GM.forEach(t),F8=n(Nn," is passed:"),Nn.forEach(t),Sw=c(e),d(Vo.$$.fragment,e),Cw=c(e),Qt=l(e,"P",{});var IE=r(Qt);V8=n(IE,"When you execute the program, DeepSpeed will log the configuration it received from the "),$i=l(IE,"A",{href:!0});var LM=r($i);Y8=n(LM,"Trainer"),LM.forEach(t),K8=n(IE,`
to the console, so you can see exactly what was the final configuration passed to it.`),IE.forEach(t),xw=c(e),ki=l(e,"A",{id:!0}),r(ki).forEach(t),Rw=c(e),Cs=l(e,"H3",{class:!0});var UE=r(Cs);ea=l(UE,"A",{id:!0,class:!0,href:!0});var MM=r(ea);hd=l(MM,"SPAN",{});var ZM=r(hd);d(Yo.$$.fragment,ZM),ZM.forEach(t),MM.forEach(t),J8=c(UE),fd=l(UE,"SPAN",{});var NM=r(fd);X8=n(NM,"Passing Configuration"),NM.forEach(t),UE.forEach(t),Iw=c(e),G=l(e,"P",{});var ye=r(G);Q8=n(ye,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Pi=l(ye,"A",{href:!0});var HM=r(Pi);ek=n(HM,"Trainer"),HM.forEach(t),sk=n(ye," via "),Di=l(ye,"A",{href:!0});var BM=r(Di);tk=n(BM,"TrainingArguments"),BM.forEach(t),ak=n(ye," then for the "),dd=l(ye,"CODE",{});var WM=r(dd);nk=n(WM,"deepspeed"),WM.forEach(t),ok=n(ye,` argument you can
pass a nested `),md=l(ye,"CODE",{});var FM=r(md);lk=n(FM,"dict"),FM.forEach(t),rk=n(ye,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),zi=l(ye,"A",{href:!0});var VM=r(zi);pk=n(VM,"TrainingArguments"),VM.forEach(t),ik=n(ye,"."),ye.forEach(t),Uw=c(e),Oi=l(e,"P",{});var YM=r(Oi);uk=n(YM,"To summarize you can do:"),YM.forEach(t),Gw=c(e),d(Ko.$$.fragment,e),Lw=c(e),Ti=l(e,"P",{});var KM=r(Ti);ck=n(KM,"or:"),KM.forEach(t),Mw=c(e),d(Jo.$$.fragment,e),Zw=c(e),Ai=l(e,"A",{id:!0}),r(Ai).forEach(t),Nw=c(e),xs=l(e,"H3",{class:!0});var GE=r(xs);sa=l(GE,"A",{id:!0,class:!0,href:!0});var JM=r(sa);_d=l(JM,"SPAN",{});var XM=r(_d);d(Xo.$$.fragment,XM),XM.forEach(t),JM.forEach(t),hk=c(GE),vd=l(GE,"SPAN",{});var QM=r(vd);fk=n(QM,"Shared Configuration"),QM.forEach(t),GE.forEach(t),Hw=c(e),d(ta.$$.fragment,e),Bw=c(e),Me=l(e,"P",{});var vh=r(Me);dk=n(vh,"Some configuration values are required by both the "),Si=l(vh,"A",{href:!0});var eZ=r(Si);mk=n(eZ,"Trainer"),eZ.forEach(t),_k=n(vh,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ci=l(vh,"A",{href:!0});var sZ=r(Ci);vk=n(sZ,"Trainer"),sZ.forEach(t),jk=n(vh," command line arguments."),vh.forEach(t),Ww=c(e),aa=l(e,"P",{});var LE=r(aa);gk=n(LE,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),xi=l(LE,"A",{href:!0});var tZ=r(xi);wk=n(tZ,"Trainer"),tZ.forEach(t),yk=n(LE,` do the majority
of configuration for you.`),LE.forEach(t),Fw=c(e),Ze=l(e,"P",{});var jh=r(Ze);bk=n(jh,"Therefore, in the rest of this guide you will find a special configuration value: "),jd=l(jh,"CODE",{});var aZ=r(jd);Ek=n(aZ,"auto"),aZ.forEach(t),qk=n(jh,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ri=l(jh,"A",{href:!0});var nZ=r(Ri);$k=n(nZ,"Trainer"),nZ.forEach(t),kk=n(jh,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),jh.forEach(t),Vw=c(e),Ii=l(e,"P",{});var oZ=r(Ii);Pk=n(oZ,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),oZ.forEach(t),Yw=c(e),na=l(e,"P",{});var ME=r(na);Dk=n(ME,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ui=l(ME,"A",{href:!0});var lZ=r(Ui);zk=n(lZ,"TrainingArguments"),lZ.forEach(t),Ok=n(ME," based on that. The steps are:"),ME.forEach(t),Kw=c(e),oa=l(e,"OL",{});var ZE=r(oa);gd=l(ZE,"LI",{});var rZ=r(gd);Tk=n(rZ,"Create or load the DeepSpeed configuration to be used as a master configuration"),rZ.forEach(t),Ak=c(ZE),Qo=l(ZE,"LI",{});var NE=r(Qo);Sk=n(NE,"Create the "),Gi=l(NE,"A",{href:!0});var pZ=r(Gi);Ck=n(pZ,"TrainingArguments"),pZ.forEach(t),xk=n(NE," object based on these values"),NE.forEach(t),ZE.forEach(t),Jw=c(e),le=l(e,"P",{});var Hn=r(le);Rk=n(Hn,"Do note that some values, such as "),wd=l(Hn,"CODE",{});var iZ=r(wd);Ik=n(iZ,"scheduler.params.total_num_steps"),iZ.forEach(t),Uk=n(Hn,` are calculated by
`),Li=l(Hn,"A",{href:!0});var uZ=r(Li);Gk=n(uZ,"Trainer"),uZ.forEach(t),Lk=n(Hn," during "),yd=l(Hn,"CODE",{});var cZ=r(yd);Mk=n(cZ,"train"),cZ.forEach(t),Zk=n(Hn,", but you can of course do the math yourself."),Hn.forEach(t),Xw=c(e),Mi=l(e,"A",{id:!0}),r(Mi).forEach(t),Qw=c(e),Rs=l(e,"H3",{class:!0});var HE=r(Rs);la=l(HE,"A",{id:!0,class:!0,href:!0});var hZ=r(la);bd=l(hZ,"SPAN",{});var fZ=r(bd);d(el.$$.fragment,fZ),fZ.forEach(t),hZ.forEach(t),Nk=c(HE),Ed=l(HE,"SPAN",{});var dZ=r(Ed);Hk=n(dZ,"ZeRO"),dZ.forEach(t),HE.forEach(t),ey=c(e),sl=l(e,"P",{});var gG=r(sl);tl=l(gG,"A",{href:!0,rel:!0});var mZ=r(tl);Bk=n(mZ,"Zero Redundancy Optimizer (ZeRO)"),mZ.forEach(t),Wk=n(gG,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),gG.forEach(t),sy=c(e),Ne=l(e,"P",{});var gh=r(Ne);Fk=n(gh,"The "),qd=l(gh,"CODE",{});var _Z=r(qd);Vk=n(_Z,"zero_optimization"),_Z.forEach(t),Yk=n(gh," section of the configuration file is the most important part ("),al=l(gh,"A",{href:!0,rel:!0});var vZ=r(al);Kk=n(vZ,"docs"),vZ.forEach(t),Jk=n(gh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),gh.forEach(t),ty=c(e),ra=l(e,"P",{});var BE=r(ra);Xk=n(BE,"This section has to be configured exclusively via DeepSpeed configuration - the "),Zi=l(BE,"A",{href:!0});var jZ=r(Zi);Qk=n(jZ,"Trainer"),jZ.forEach(t),e7=n(BE,` provides
no equivalent command line arguments.`),BE.forEach(t),ay=c(e),Ni=l(e,"P",{});var gZ=r(Ni);s7=n(gZ,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),gZ.forEach(t),ny=c(e),Hi=l(e,"A",{id:!0}),r(Hi).forEach(t),oy=c(e),Is=l(e,"H4",{class:!0});var WE=r(Is);pa=l(WE,"A",{id:!0,class:!0,href:!0});var wZ=r(pa);$d=l(wZ,"SPAN",{});var yZ=r($d);d(nl.$$.fragment,yZ),yZ.forEach(t),wZ.forEach(t),t7=c(WE),kd=l(WE,"SPAN",{});var bZ=r(kd);a7=n(bZ,"ZeRO-2 Config"),bZ.forEach(t),WE.forEach(t),ly=c(e),Bi=l(e,"P",{});var EZ=r(Bi);n7=n(EZ,"The following is an example of configuration for ZeRO stage 2:"),EZ.forEach(t),ry=c(e),d(ol.$$.fragment,e),py=c(e),Wi=l(e,"P",{});var qZ=r(Wi);Pd=l(qZ,"STRONG",{});var $Z=r(Pd);o7=n($Z,"Performance tuning:"),$Z.forEach(t),qZ.forEach(t),iy=c(e),He=l(e,"UL",{});var wh=r(He);Us=l(wh,"LI",{});var yh=r(Us);l7=n(yh,"enabling "),Dd=l(yh,"CODE",{});var kZ=r(Dd);r7=n(kZ,"offload_optimizer"),kZ.forEach(t),p7=n(yh," should reduce GPU RAM usage (it requires "),zd=l(yh,"CODE",{});var PZ=r(zd);i7=n(PZ,'"stage": 2'),PZ.forEach(t),u7=n(yh,")"),yh.forEach(t),c7=c(wh),L=l(wh,"LI",{});var te=r(L);Od=l(te,"CODE",{});var DZ=r(Od);h7=n(DZ,'"overlap_comm": true'),DZ.forEach(t),f7=n(te," trades off increased GPU RAM usage to lower all-reduce latency. "),Td=l(te,"CODE",{});var zZ=r(Td);d7=n(zZ,"overlap_comm"),zZ.forEach(t),m7=n(te,` uses 4.5x
the `),Ad=l(te,"CODE",{});var OZ=r(Ad);_7=n(OZ,"allgather_bucket_size"),OZ.forEach(t),v7=n(te," and "),Sd=l(te,"CODE",{});var TZ=r(Sd);j7=n(TZ,"reduce_bucket_size"),TZ.forEach(t),g7=n(te,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Cd=l(te,"CODE",{});var AZ=r(Cd);w7=n(AZ,"5e8 x 2Bytes x 2 x 4.5"),AZ.forEach(t),y7=n(te,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),xd=l(te,"CODE",{});var SZ=r(xd);b7=n(SZ,"2e8"),SZ.forEach(t),E7=n(te,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),te.forEach(t),q7=c(wh),Rd=l(wh,"LI",{});var CZ=r(Rd);$7=n(CZ,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),CZ.forEach(t),wh.forEach(t),uy=c(e),Be=l(e,"P",{});var bh=r(Be);k7=n(bh,"Additionally, "),Id=l(bh,"CODE",{});var xZ=r(Id);P7=n(xZ,"deepspeed==0.4.4"),xZ.forEach(t),D7=n(bh," added a new option "),Ud=l(bh,"CODE",{});var RZ=r(Ud);z7=n(RZ,"round_robin_gradients"),RZ.forEach(t),O7=n(bh," which you can enable with:"),bh.forEach(t),cy=c(e),d(ll.$$.fragment,e),hy=c(e),Fi=l(e,"P",{});var IZ=r(Fi);T7=n(IZ,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),IZ.forEach(t),fy=c(e),Vi=l(e,"A",{id:!0}),r(Vi).forEach(t),dy=c(e),Gs=l(e,"H4",{class:!0});var FE=r(Gs);ia=l(FE,"A",{id:!0,class:!0,href:!0});var UZ=r(ia);Gd=l(UZ,"SPAN",{});var GZ=r(Gd);d(rl.$$.fragment,GZ),GZ.forEach(t),UZ.forEach(t),A7=c(FE),Ld=l(FE,"SPAN",{});var LZ=r(Ld);S7=n(LZ,"ZeRO-3 Config"),LZ.forEach(t),FE.forEach(t),my=c(e),Yi=l(e,"P",{});var MZ=r(Yi);C7=n(MZ,"The following is an example of configuration for ZeRO stage 3:"),MZ.forEach(t),_y=c(e),d(pl.$$.fragment,e),vy=c(e),K=l(e,"P",{});var ys=r(K);x7=n(ys,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Md=l(ys,"CODE",{});var ZZ=r(Md);R7=n(ZZ,'"device": "cpu"'),ZZ.forEach(t),I7=n(ys,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Zd=l(ys,"CODE",{});var NZ=r(Zd);U7=n(NZ,"none"),NZ.forEach(t),G7=n(ys," instead of "),Nd=l(ys,"CODE",{});var HZ=r(Nd);L7=n(HZ,"cpu"),HZ.forEach(t),M7=n(ys," for the "),Hd=l(ys,"CODE",{});var BZ=r(Hd);Z7=n(BZ,"device"),BZ.forEach(t),N7=n(ys,` entry. Offloading to
NVMe is discussed further down.`),ys.forEach(t),jy=c(e),We=l(e,"P",{});var Eh=r(We);H7=n(Eh,"Pinned memory is enabled with "),Bd=l(Eh,"CODE",{});var WZ=r(Bd);B7=n(WZ,"pin_memory"),WZ.forEach(t),W7=n(Eh," set to "),Wd=l(Eh,"CODE",{});var FZ=r(Wd);F7=n(FZ,"true"),FZ.forEach(t),V7=n(Eh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Eh.forEach(t),gy=c(e),Ki=l(e,"P",{});var VZ=r(Ki);Fd=l(VZ,"STRONG",{});var YZ=r(Fd);Y7=n(YZ,"Performance tuning:"),YZ.forEach(t),VZ.forEach(t),wy=c(e),ua=l(e,"UL",{});var VE=r(ua);il=l(VE,"LI",{});var YE=r(il);Vd=l(YE,"CODE",{});var KZ=r(Vd);K7=n(KZ,"stage3_max_live_parameters"),KZ.forEach(t),J7=n(YE,": "),Yd=l(YE,"CODE",{});var JZ=r(Yd);X7=n(JZ,"1e9"),JZ.forEach(t),YE.forEach(t),Q7=c(VE),ul=l(VE,"LI",{});var KE=r(ul);Kd=l(KE,"CODE",{});var XZ=r(Kd);e9=n(XZ,"stage3_max_reuse_distance"),XZ.forEach(t),s9=n(KE,": "),Jd=l(KE,"CODE",{});var QZ=r(Jd);t9=n(QZ,"1e9"),QZ.forEach(t),KE.forEach(t),VE.forEach(t),yy=c(e),M=l(e,"P",{});var be=r(M);a9=n(be,"If hitting OOM reduce "),Xd=l(be,"CODE",{});var eN=r(Xd);n9=n(eN,"stage3_max_live_parameters"),eN.forEach(t),o9=n(be," and "),Qd=l(be,"CODE",{});var sN=r(Qd);l9=n(sN,"stage3_max_reuse_distance"),sN.forEach(t),r9=n(be,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),em=l(be,"CODE",{});var tN=r(em);p9=n(tN,"1e9"),tN.forEach(t),i9=n(be,` would consume ~2GB. The memory is shared by
`),sm=l(be,"CODE",{});var aN=r(sm);u9=n(aN,"stage3_max_live_parameters"),aN.forEach(t),c9=n(be," and "),tm=l(be,"CODE",{});var nN=r(tm);h9=n(nN,"stage3_max_reuse_distance"),nN.forEach(t),f9=n(be,", so it\u2019s not additive, it\u2019s just 2GB total."),be.forEach(t),by=c(e),ze=l(e,"P",{});var Sp=r(ze);am=l(Sp,"CODE",{});var oN=r(am);d9=n(oN,"stage3_max_live_parameters"),oN.forEach(t),m9=n(Sp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),nm=l(Sp,"CODE",{});var lN=r(nm);_9=n(lN,"stage3_max_reuse_distance"),lN.forEach(t),v9=n(Sp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),om=l(Sp,"CODE",{});var rN=r(om);j9=n(rN,"stage3_max_reuse_distance"),rN.forEach(t),g9=n(Sp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Sp.forEach(t),Ey=c(e),Ji=l(e,"P",{});var pN=r(Ji);w9=n(pN,"The following configuration values depend on the model\u2019s hidden size:"),pN.forEach(t),qy=c(e),Fe=l(e,"UL",{});var qh=r(Fe);cl=l(qh,"LI",{});var JE=r(cl);lm=l(JE,"CODE",{});var iN=r(lm);y9=n(iN,"reduce_bucket_size"),iN.forEach(t),b9=n(JE,": "),rm=l(JE,"CODE",{});var uN=r(rm);E9=n(uN,"hidden_size*hidden_size"),uN.forEach(t),JE.forEach(t),q9=c(qh),hl=l(qh,"LI",{});var XE=r(hl);pm=l(XE,"CODE",{});var cN=r(pm);$9=n(cN,"stage3_prefetch_bucket_size"),cN.forEach(t),k9=n(XE,": "),im=l(XE,"CODE",{});var hN=r(im);P9=n(hN,"0.9 * hidden_size * hidden_size"),hN.forEach(t),XE.forEach(t),D9=c(qh),fl=l(qh,"LI",{});var QE=r(fl);um=l(QE,"CODE",{});var fN=r(um);z9=n(fN,"stage3_param_persistence_threshold"),fN.forEach(t),O9=n(QE,": "),cm=l(QE,"CODE",{});var dN=r(cm);T9=n(dN,"10 * hidden_size"),dN.forEach(t),QE.forEach(t),qh.forEach(t),$y=c(e),Ve=l(e,"P",{});var $h=r(Ve);A9=n($h,"therefore set these values to "),hm=l($h,"CODE",{});var mN=r(hm);S9=n(mN,"auto"),mN.forEach(t),C9=n($h," and the "),Xi=l($h,"A",{href:!0});var _N=r(Xi);x9=n(_N,"Trainer"),_N.forEach(t),R9=n($h,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),$h.forEach(t),ky=c(e),dl=l(e,"P",{});var wG=r(dl);fm=l(wG,"CODE",{});var vN=r(fm);I9=n(vN,"stage3_gather_16bit_weights_on_model_save"),vN.forEach(t),U9=n(wG,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),wG.forEach(t),Py=c(e),re=l(e,"P",{});var Bn=r(re);G9=n(Bn,"If you\u2019re migrating from ZeRO-2 configuration note that "),dm=l(Bn,"CODE",{});var jN=r(dm);L9=n(jN,"allgather_partitions"),jN.forEach(t),M9=n(Bn,", "),mm=l(Bn,"CODE",{});var gN=r(mm);Z9=n(gN,"allgather_bucket_size"),gN.forEach(t),N9=n(Bn,` and
`),_m=l(Bn,"CODE",{});var wN=r(_m);H9=n(wN,"reduce_scatter"),wN.forEach(t),B9=n(Bn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Bn.forEach(t),Dy=c(e),Qi=l(e,"UL",{});var yN=r(Qi);ml=l(yN,"LI",{});var eq=r(ml);vm=l(eq,"CODE",{});var bN=r(vm);W9=n(bN,"sub_group_size"),bN.forEach(t),F9=n(eq,": "),jm=l(eq,"CODE",{});var EN=r(jm);V9=n(EN,"1e9"),EN.forEach(t),eq.forEach(t),yN.forEach(t),zy=c(e),Oe=l(e,"P",{});var Cp=r(Oe);gm=l(Cp,"CODE",{});var qN=r(gm);Y9=n(qN,"sub_group_size"),qN.forEach(t),K9=n(Cp,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),wm=l(Cp,"CODE",{});var $N=r(wm);J9=n($N,"sub_group_size"),$N.forEach(t),X9=n(Cp,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),ym=l(Cp,"CODE",{});var kN=r(ym);Q9=n(kN,"sub_group_size"),kN.forEach(t),eP=n(Cp,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Cp.forEach(t),Oy=c(e),Ye=l(e,"P",{});var kh=r(Ye);sP=n(kh,"You can leave "),bm=l(kh,"CODE",{});var PN=r(bm);tP=n(PN,"sub_group_size"),PN.forEach(t),aP=n(kh," to its default value of "),Em=l(kh,"EM",{});var DN=r(Em);nP=n(DN,"1e9"),DN.forEach(t),oP=n(kh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),kh.forEach(t),Ty=c(e),ca=l(e,"OL",{});var sq=r(ca);_l=l(sq,"LI",{});var tq=r(_l);lP=n(tq,"Running into OOM during optimizer step: Reduce "),qm=l(tq,"CODE",{});var zN=r(qm);rP=n(zN,"sub_group_size"),zN.forEach(t),pP=n(tq," to reduce memory utilization of temporary buffers"),tq.forEach(t),iP=c(sq),vl=l(sq,"LI",{});var aq=r(vl);uP=n(aq,"Optimizer Step is taking a long time: Increase "),$m=l(aq,"CODE",{});var ON=r($m);cP=n(ON,"sub_group_size"),ON.forEach(t),hP=n(aq,` to improve bandwidth utilization as a result of
the increased data buffers.`),aq.forEach(t),sq.forEach(t),Ay=c(e),eu=l(e,"A",{id:!0}),r(eu).forEach(t),Sy=c(e),Ls=l(e,"H3",{class:!0});var nq=r(Ls);ha=l(nq,"A",{id:!0,class:!0,href:!0});var TN=r(ha);km=l(TN,"SPAN",{});var AN=r(km);d(jl.$$.fragment,AN),AN.forEach(t),TN.forEach(t),fP=c(nq),Pm=l(nq,"SPAN",{});var SN=r(Pm);dP=n(SN,"NVMe Support"),SN.forEach(t),nq.forEach(t),Cy=c(e),su=l(e,"P",{});var CN=r(su);mP=n(CN,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),CN.forEach(t),xy=c(e),tu=l(e,"P",{});var xN=r(tu);_P=n(xN,"The following configuration example enables NVMe to offload both optimizer states and the params:"),xN.forEach(t),Ry=c(e),d(gl.$$.fragment,e),Iy=c(e),fa=l(e,"P",{});var oq=r(fa);vP=n(oq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Dm=l(oq,"EM",{});var RN=r(Dm);jP=n(RN,"\u201Cdevice\u201D: \u201Ccpu\u201D"),RN.forEach(t),gP=n(oq,")."),oq.forEach(t),Uy=c(e),Ke=l(e,"P",{});var Ph=r(Ke);wP=n(Ph,"Here is the full documentation for offloading "),wl=l(Ph,"A",{href:!0,rel:!0});var IN=r(wl);yP=n(IN,"optimizer states"),IN.forEach(t),bP=n(Ph," and "),yl=l(Ph,"A",{href:!0,rel:!0});var UN=r(yl);EP=n(UN,"parameters"),UN.forEach(t),qP=n(Ph,"."),Ph.forEach(t),Gy=c(e),da=l(e,"P",{});var lq=r(da);$P=n(lq,"Make sure that your "),zm=l(lq,"CODE",{});var GN=r(zm);kP=n(GN,"nvme_path"),GN.forEach(t),PP=n(lq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),lq.forEach(t),Ly=c(e),Je=l(e,"P",{});var Dh=r(Je);DP=n(Dh,"In order to figure out the optimal "),Om=l(Dh,"CODE",{});var LN=r(Om);zP=n(LN,"aio"),LN.forEach(t),OP=n(Dh,` configuration block you must run a benchmark on your target setup, as
`),bl=l(Dh,"A",{href:!0,rel:!0});var MN=r(bl);TP=n(MN,"explained here"),MN.forEach(t),AP=n(Dh,"."),Dh.forEach(t),My=c(e),au=l(e,"A",{id:!0}),r(au).forEach(t),Zy=c(e),Ms=l(e,"H4",{class:!0});var rq=r(Ms);ma=l(rq,"A",{id:!0,class:!0,href:!0});var ZN=r(ma);Tm=l(ZN,"SPAN",{});var NN=r(Tm);d(El.$$.fragment,NN),NN.forEach(t),ZN.forEach(t),SP=c(rq),Am=l(rq,"SPAN",{});var HN=r(Am);CP=n(HN,"ZeRO-2 vs ZeRO-3 Performance"),HN.forEach(t),rq.forEach(t),Ny=c(e),nu=l(e,"P",{});var BN=r(nu);xP=n(BN,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),BN.forEach(t),Hy=c(e),ou=l(e,"P",{});var WN=r(ou);RP=n(WN,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),WN.forEach(t),By=c(e),_a=l(e,"UL",{});var pq=r(_a);Zs=l(pq,"LI",{});var zh=r(Zs);IP=n(zh,"set "),Sm=l(zh,"CODE",{});var FN=r(Sm);UP=n(FN,"stage3_param_persistence_threshold"),FN.forEach(t),GP=n(zh," to a very large number - larger than the largest parameter, e.g., "),Cm=l(zh,"CODE",{});var VN=r(Cm);LP=n(VN,"6 * hidden_size * hidden_size"),VN.forEach(t),MP=n(zh,". This will keep the parameters on the GPUs."),zh.forEach(t),ZP=c(pq),ql=l(pq,"LI",{});var iq=r(ql);NP=n(iq,"turn off "),xm=l(iq,"CODE",{});var YN=r(xm);HP=n(YN,"offload_params"),YN.forEach(t),BP=n(iq," since ZeRO-2 doesn\u2019t have that option."),iq.forEach(t),pq.forEach(t),Wy=c(e),Xe=l(e,"P",{});var Oh=r(Xe);WP=n(Oh,"The performance will likely improve significantly with just "),Rm=l(Oh,"CODE",{});var KN=r(Rm);FP=n(KN,"offload_params"),KN.forEach(t),VP=n(Oh,` turned off, even if you don\u2019t change
`),Im=l(Oh,"CODE",{});var JN=r(Im);YP=n(JN,"stage3_param_persistence_threshold"),JN.forEach(t),KP=n(Oh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Oh.forEach(t),Fy=c(e),lu=l(e,"A",{id:!0}),r(lu).forEach(t),Vy=c(e),Ns=l(e,"H4",{class:!0});var uq=r(Ns);va=l(uq,"A",{id:!0,class:!0,href:!0});var XN=r(va);Um=l(XN,"SPAN",{});var QN=r(Um);d($l.$$.fragment,QN),QN.forEach(t),XN.forEach(t),JP=c(uq),Gm=l(uq,"SPAN",{});var eH=r(Gm);XP=n(eH,"ZeRO-2 Example"),eH.forEach(t),uq.forEach(t),Yy=c(e),ja=l(e,"P",{});var cq=r(ja);QP=n(cq,"Here is a full ZeRO-2 auto-configuration file "),Lm=l(cq,"CODE",{});var sH=r(Lm);eD=n(sH,"ds_config_zero2.json"),sH.forEach(t),sD=n(cq,":"),cq.forEach(t),Ky=c(e),d(kl.$$.fragment,e),Jy=c(e),ga=l(e,"P",{});var hq=r(ga);tD=n(hq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Mm=l(hq,"CODE",{});var tH=r(Mm);aD=n(tH,"auto"),tH.forEach(t),nD=n(hq," settings in it."),hq.forEach(t),Xy=c(e),d(Pl.$$.fragment,e),Qy=c(e),ru=l(e,"A",{id:!0}),r(ru).forEach(t),e2=c(e),Hs=l(e,"H4",{class:!0});var fq=r(Hs);wa=l(fq,"A",{id:!0,class:!0,href:!0});var aH=r(wa);Zm=l(aH,"SPAN",{});var nH=r(Zm);d(Dl.$$.fragment,nH),nH.forEach(t),aH.forEach(t),oD=c(fq),Nm=l(fq,"SPAN",{});var oH=r(Nm);lD=n(oH,"ZeRO-3 Example"),oH.forEach(t),fq.forEach(t),s2=c(e),ya=l(e,"P",{});var dq=r(ya);rD=n(dq,"Here is a full ZeRO-3 auto-configuration file "),Hm=l(dq,"CODE",{});var lH=r(Hm);pD=n(lH,"ds_config_zero3.json"),lH.forEach(t),iD=n(dq,":"),dq.forEach(t),t2=c(e),d(zl.$$.fragment,e),a2=c(e),ba=l(e,"P",{});var mq=r(ba);uD=n(mq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Bm=l(mq,"CODE",{});var rH=r(Bm);cD=n(rH,"auto"),rH.forEach(t),hD=n(mq," settings in it."),mq.forEach(t),n2=c(e),d(Ol.$$.fragment,e),o2=c(e),Bs=l(e,"H3",{class:!0});var _q=r(Bs);Ea=l(_q,"A",{id:!0,class:!0,href:!0});var pH=r(Ea);Wm=l(pH,"SPAN",{});var iH=r(Wm);d(Tl.$$.fragment,iH),iH.forEach(t),pH.forEach(t),fD=c(_q),Fm=l(_q,"SPAN",{});var uH=r(Fm);dD=n(uH,"Optimizer and Scheduler"),uH.forEach(t),_q.forEach(t),l2=c(e),qa=l(e,"P",{});var vq=r(qa);mD=n(vq,"As long as you don\u2019t enable "),Vm=l(vq,"CODE",{});var cH=r(Vm);_D=n(cH,"offload_optimizer"),cH.forEach(t),vD=n(vq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),vq.forEach(t),r2=c(e),pu=l(e,"P",{});var hH=r(pu);jD=n(hH,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),hH.forEach(t),p2=c(e),$a=l(e,"P",{});var jq=r($a);gD=n(jq,"It is possible to use a non-DeepSpeed optimizer when "),Ym=l(jq,"CODE",{});var fH=r(Ym);wD=n(fH,"offload_optimizer"),fH.forEach(t),yD=n(jq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),jq.forEach(t),i2=c(e),iu=l(e,"A",{id:!0}),r(iu).forEach(t),u2=c(e),Ws=l(e,"H4",{class:!0});var gq=r(Ws);ka=l(gq,"A",{id:!0,class:!0,href:!0});var dH=r(ka);Km=l(dH,"SPAN",{});var mH=r(Km);d(Al.$$.fragment,mH),mH.forEach(t),dH.forEach(t),bD=c(gq),Jm=l(gq,"SPAN",{});var _H=r(Jm);ED=n(_H,"Optimizer"),_H.forEach(t),gq.forEach(t),c2=c(e),Qe=l(e,"P",{});var Th=r(Qe);qD=n(Th,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Xm=l(Th,"CODE",{});var vH=r(Xm);$D=n(vH,"torch"),vH.forEach(t),kD=n(Th,". The full documentation is "),Sl=l(Th,"A",{href:!0,rel:!0});var jH=r(Sl);PD=n(jH,"here"),jH.forEach(t),DD=n(Th,"."),Th.forEach(t),h2=c(e),k=l(e,"P",{});var S=r(k);zD=n(S,"If you don\u2019t configure the "),Qm=l(S,"CODE",{});var gH=r(Qm);OD=n(gH,"optimizer"),gH.forEach(t),TD=n(S," entry in the configuration file, the "),uu=l(S,"A",{href:!0});var wH=r(uu);AD=n(wH,"Trainer"),wH.forEach(t),SD=n(S,` will
automatically set it to `),e_=l(S,"CODE",{});var yH=r(e_);CD=n(yH,"AdamW"),yH.forEach(t),xD=n(S,` and will use the supplied values or the defaults for the following command line
arguments: `),s_=l(S,"CODE",{});var bH=r(s_);RD=n(bH,"--learning_rate"),bH.forEach(t),ID=n(S,", "),t_=l(S,"CODE",{});var EH=r(t_);UD=n(EH,"--adam_beta1"),EH.forEach(t),GD=n(S,", "),a_=l(S,"CODE",{});var qH=r(a_);LD=n(qH,"--adam_beta2"),qH.forEach(t),MD=n(S,", "),n_=l(S,"CODE",{});var $H=r(n_);ZD=n($H,"--adam_epsilon"),$H.forEach(t),ND=n(S," and "),o_=l(S,"CODE",{});var kH=r(o_);HD=n(kH,"--weight_decay"),kH.forEach(t),BD=n(S,"."),S.forEach(t),f2=c(e),es=l(e,"P",{});var Ah=r(es);WD=n(Ah,"Here is an example of the auto-configured "),l_=l(Ah,"CODE",{});var PH=r(l_);FD=n(PH,"optimizer"),PH.forEach(t),VD=n(Ah," entry for "),r_=l(Ah,"CODE",{});var DH=r(r_);YD=n(DH,"AdamW"),DH.forEach(t),KD=n(Ah,":"),Ah.forEach(t),d2=c(e),d(Cl.$$.fragment,e),m2=c(e),cu=l(e,"P",{});var zH=r(cu);JD=n(zH,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),zH.forEach(t),_2=c(e),pe=l(e,"UL",{});var Wn=r(pe);xl=l(Wn,"LI",{});var wq=r(xl);p_=l(wq,"CODE",{});var OH=r(p_);XD=n(OH,"lr"),OH.forEach(t),QD=n(wq," with the value of "),i_=l(wq,"CODE",{});var TH=r(i_);ez=n(TH,"--learning_rate"),TH.forEach(t),wq.forEach(t),sz=c(Wn),Rl=l(Wn,"LI",{});var yq=r(Rl);u_=l(yq,"CODE",{});var AH=r(u_);tz=n(AH,"betas"),AH.forEach(t),az=n(yq," with the value of "),c_=l(yq,"CODE",{});var SH=r(c_);nz=n(SH,"--adam_beta1 --adam_beta2"),SH.forEach(t),yq.forEach(t),oz=c(Wn),Il=l(Wn,"LI",{});var bq=r(Il);h_=l(bq,"CODE",{});var CH=r(h_);lz=n(CH,"eps"),CH.forEach(t),rz=n(bq," with the value of "),f_=l(bq,"CODE",{});var xH=r(f_);pz=n(xH,"--adam_epsilon"),xH.forEach(t),bq.forEach(t),iz=c(Wn),Ul=l(Wn,"LI",{});var Eq=r(Ul);d_=l(Eq,"CODE",{});var RH=r(d_);uz=n(RH,"weight_decay"),RH.forEach(t),cz=n(Eq," with the value of "),m_=l(Eq,"CODE",{});var IH=r(m_);hz=n(IH,"--weight_decay"),IH.forEach(t),Eq.forEach(t),Wn.forEach(t),v2=c(e),hu=l(e,"P",{});var UH=r(hu);fz=n(UH,"Therefore please remember to tune the shared hyperparameters on the command line."),UH.forEach(t),j2=c(e),fu=l(e,"P",{});var GH=r(fu);dz=n(GH,"You can also set the values explicitly:"),GH.forEach(t),g2=c(e),d(Gl.$$.fragment,e),w2=c(e),Pa=l(e,"P",{});var qq=r(Pa);mz=n(qq,"But then you\u2019re on your own synchronizing the "),du=l(qq,"A",{href:!0});var LH=r(du);_z=n(LH,"Trainer"),LH.forEach(t),vz=n(qq,` command line arguments and the DeepSpeed
configuration.`),qq.forEach(t),y2=c(e),mu=l(e,"P",{});var MH=r(mu);jz=n(MH,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),MH.forEach(t),b2=c(e),d(Ll.$$.fragment,e),E2=c(e),ie=l(e,"P",{});var Fn=r(ie);gz=n(Fn,"Similarly to "),__=l(Fn,"CODE",{});var ZH=r(__);wz=n(ZH,"AdamW"),ZH.forEach(t),yz=n(Fn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),v_=l(Fn,"CODE",{});var NH=r(v_);bz=n(NH,"weight_decay"),NH.forEach(t),Ez=n(Fn," around "),j_=l(Fn,"CODE",{});var HH=r(j_);qz=n(HH,"0.01"),HH.forEach(t),$z=n(Fn,"."),Fn.forEach(t),q2=c(e),_u=l(e,"A",{id:!0}),r(_u).forEach(t),$2=c(e),Fs=l(e,"H4",{class:!0});var $q=r(Fs);Da=l($q,"A",{id:!0,class:!0,href:!0});var BH=r(Da);g_=l(BH,"SPAN",{});var WH=r(g_);d(Ml.$$.fragment,WH),WH.forEach(t),BH.forEach(t),kz=c($q),w_=l($q,"SPAN",{});var FH=r(w_);Pz=n(FH,"Scheduler"),FH.forEach(t),$q.forEach(t),k2=c(e),Z=l(e,"P",{});var Ee=r(Z);Dz=n(Ee,"DeepSpeed supports "),y_=l(Ee,"CODE",{});var VH=r(y_);zz=n(VH,"LRRangeTest"),VH.forEach(t),Oz=n(Ee,", "),b_=l(Ee,"CODE",{});var YH=r(b_);Tz=n(YH,"OneCycle"),YH.forEach(t),Az=n(Ee,", "),E_=l(Ee,"CODE",{});var KH=r(E_);Sz=n(KH,"WarmupLR"),KH.forEach(t),Cz=n(Ee," and "),q_=l(Ee,"CODE",{});var JH=r(q_);xz=n(JH,"WarmupDecayLR"),JH.forEach(t),Rz=n(Ee,` learning rate schedulers. The full
documentation is `),Zl=l(Ee,"A",{href:!0,rel:!0});var XH=r(Zl);Iz=n(XH,"here"),XH.forEach(t),Uz=n(Ee,"."),Ee.forEach(t),P2=c(e),vu=l(e,"P",{});var QH=r(vu);Gz=n(QH,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),QH.forEach(t),D2=c(e),za=l(e,"UL",{});var kq=r(za);Nl=l(kq,"LI",{});var Pq=r(Nl);$_=l(Pq,"CODE",{});var eB=r($_);Lz=n(eB,"WarmupLR"),eB.forEach(t),Mz=n(Pq," via "),k_=l(Pq,"CODE",{});var sB=r(k_);Zz=n(sB,"--lr_scheduler_type constant_with_warmup"),sB.forEach(t),Pq.forEach(t),Nz=c(kq),ss=l(kq,"LI",{});var xp=r(ss);P_=l(xp,"CODE",{});var tB=r(P_);Hz=n(tB,"WarmupDecayLR"),tB.forEach(t),Bz=n(xp," via "),D_=l(xp,"CODE",{});var aB=r(D_);Wz=n(aB,"--lr_scheduler_type linear"),aB.forEach(t),Fz=n(xp,". This is also the default value for "),z_=l(xp,"CODE",{});var nB=r(z_);Vz=n(nB,"--lr_scheduler_type"),nB.forEach(t),Yz=n(xp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),xp.forEach(t),kq.forEach(t),z2=c(e),T=l(e,"P",{});var X=r(T);Kz=n(X,"If you don\u2019t configure the "),O_=l(X,"CODE",{});var oB=r(O_);Jz=n(oB,"scheduler"),oB.forEach(t),Xz=n(X," entry in the configuration file, the "),ju=l(X,"A",{href:!0});var lB=r(ju);Qz=n(lB,"Trainer"),lB.forEach(t),eO=n(X,` will use
the values of `),T_=l(X,"CODE",{});var rB=r(T_);sO=n(rB,"--lr_scheduler_type"),rB.forEach(t),tO=n(X,", "),A_=l(X,"CODE",{});var pB=r(A_);aO=n(pB,"--learning_rate"),pB.forEach(t),nO=n(X," and "),S_=l(X,"CODE",{});var iB=r(S_);oO=n(iB,"--warmup_steps"),iB.forEach(t),lO=n(X," or "),C_=l(X,"CODE",{});var uB=r(C_);rO=n(uB,"--warmup_ratio"),uB.forEach(t),pO=n(X,` to configure a
\u{1F917} Transformers version of it.`),X.forEach(t),O2=c(e),ts=l(e,"P",{});var Sh=r(ts);iO=n(Sh,"Here is an example of the auto-configured "),x_=l(Sh,"CODE",{});var cB=r(x_);uO=n(cB,"scheduler"),cB.forEach(t),cO=n(Sh," entry for "),R_=l(Sh,"CODE",{});var hB=r(R_);hO=n(hB,"WarmupLR"),hB.forEach(t),fO=n(Sh,":"),Sh.forEach(t),T2=c(e),d(Hl.$$.fragment,e),A2=c(e),as=l(e,"P",{});var Ch=r(as);dO=n(Ch,"Since "),I_=l(Ch,"EM",{});var fB=r(I_);mO=n(fB,"\u201Cauto\u201D"),fB.forEach(t),_O=n(Ch," is used the "),gu=l(Ch,"A",{href:!0});var dB=r(gu);vO=n(dB,"Trainer"),dB.forEach(t),jO=n(Ch,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Ch.forEach(t),S2=c(e),ue=l(e,"UL",{});var Vn=r(ue);Oa=l(Vn,"LI",{});var Mj=r(Oa);U_=l(Mj,"CODE",{});var mB=r(U_);gO=n(mB,"warmup_min_lr"),mB.forEach(t),wO=n(Mj," with the value of "),G_=l(Mj,"CODE",{});var _B=r(G_);yO=n(_B,"0"),_B.forEach(t),bO=n(Mj,"."),Mj.forEach(t),EO=c(Vn),Ta=l(Vn,"LI",{});var Zj=r(Ta);L_=l(Zj,"CODE",{});var vB=r(L_);qO=n(vB,"warmup_max_lr"),vB.forEach(t),$O=n(Zj," with the value of "),M_=l(Zj,"CODE",{});var jB=r(M_);kO=n(jB,"--learning_rate"),jB.forEach(t),PO=n(Zj,"."),Zj.forEach(t),DO=c(Vn),ns=l(Vn,"LI",{});var Rp=r(ns);Z_=l(Rp,"CODE",{});var gB=r(Z_);zO=n(gB,"warmup_num_steps"),gB.forEach(t),OO=n(Rp," with the value of "),N_=l(Rp,"CODE",{});var wB=r(N_);TO=n(wB,"--warmup_steps"),wB.forEach(t),AO=n(Rp," if provided. Otherwise will use "),H_=l(Rp,"CODE",{});var yB=r(H_);SO=n(yB,"--warmup_ratio"),yB.forEach(t),CO=n(Rp,`
multiplied by the number of training steps and rounded up.`),Rp.forEach(t),xO=c(Vn),os=l(Vn,"LI",{});var Ip=r(os);B_=l(Ip,"CODE",{});var bB=r(B_);RO=n(bB,"total_num_steps"),bB.forEach(t),IO=n(Ip," with either the value of "),W_=l(Ip,"CODE",{});var EB=r(W_);UO=n(EB,"--max_steps"),EB.forEach(t),GO=n(Ip,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),F_=l(Ip,"CODE",{});var qB=r(F_);LO=n(qB,"WarmupDecayLR"),qB.forEach(t),MO=n(Ip,")."),Ip.forEach(t),Vn.forEach(t),C2=c(e),wu=l(e,"P",{});var $B=r(wu);ZO=n($B,"You can, of course, take over any or all of the configuration values and set those yourself:"),$B.forEach(t),x2=c(e),d(Bl.$$.fragment,e),R2=c(e),Aa=l(e,"P",{});var Dq=r(Aa);NO=n(Dq,"But then you\u2019re on your own synchronizing the "),yu=l(Dq,"A",{href:!0});var kB=r(yu);HO=n(kB,"Trainer"),kB.forEach(t),BO=n(Dq,` command line arguments and the DeepSpeed
configuration.`),Dq.forEach(t),I2=c(e),Sa=l(e,"P",{});var zq=r(Sa);WO=n(zq,"For example, for "),V_=l(zq,"CODE",{});var PB=r(V_);FO=n(PB,"WarmupDecayLR"),PB.forEach(t),VO=n(zq,", you can use the following entry:"),zq.forEach(t),U2=c(e),d(Wl.$$.fragment,e),G2=c(e),J=l(e,"P",{});var bs=r(J);YO=n(bs,"and "),Y_=l(bs,"CODE",{});var DB=r(Y_);KO=n(DB,"total_num_steps"),DB.forEach(t),JO=n(bs,", "),K_=l(bs,"CODE",{});var zB=r(K_);XO=n(zB,"warmup_max_lr"),zB.forEach(t),QO=n(bs,", "),J_=l(bs,"CODE",{});var OB=r(J_);eT=n(OB,"warmup_num_steps"),OB.forEach(t),sT=n(bs," and "),X_=l(bs,"CODE",{});var TB=r(X_);tT=n(TB,"total_num_steps"),TB.forEach(t),aT=n(bs," will be set at loading time."),bs.forEach(t),L2=c(e),bu=l(e,"A",{id:!0}),r(bu).forEach(t),M2=c(e),Vs=l(e,"H3",{class:!0});var Oq=r(Vs);Ca=l(Oq,"A",{id:!0,class:!0,href:!0});var AB=r(Ca);Q_=l(AB,"SPAN",{});var SB=r(Q_);d(Fl.$$.fragment,SB),SB.forEach(t),AB.forEach(t),nT=c(Oq),e1=l(Oq,"SPAN",{});var CB=r(e1);oT=n(CB,"fp32 Precision"),CB.forEach(t),Oq.forEach(t),Z2=c(e),Eu=l(e,"P",{});var xB=r(Eu);lT=n(xB,"Deepspeed supports the full fp32 and the fp16 mixed precision."),xB.forEach(t),N2=c(e),xa=l(e,"P",{});var Tq=r(xa);rT=n(Tq,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),s1=l(Tq,"CODE",{});var RB=r(s1);pT=n(RB,"NaN"),RB.forEach(t),iT=n(Tq,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Tq.forEach(t),H2=c(e),d(Vl.$$.fragment,e),B2=c(e),Ra=l(e,"P",{});var Aq=r(Ra);uT=n(Aq,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Yl=l(Aq,"A",{href:!0,rel:!0});var IB=r(Yl);cT=n(IB,"TensorFloat-32(TF32) on Ampere devices"),IB.forEach(t),hT=n(Aq,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Aq.forEach(t),W2=c(e),ce=l(e,"P",{});var Yn=r(ce);fT=n(Yn,"With the \u{1F917} Trainer you can use "),t1=l(Yn,"CODE",{});var UB=r(t1);dT=n(UB,"--tf32"),UB.forEach(t),mT=n(Yn," to enable it, or disable it with "),a1=l(Yn,"CODE",{});var GB=r(a1);_T=n(GB,"--tf32 0"),GB.forEach(t),vT=n(Yn," or "),n1=l(Yn,"CODE",{});var LB=r(n1);jT=n(LB,"--no_tf32"),LB.forEach(t),gT=n(Yn,". By default the PyTorch default is used."),Yn.forEach(t),F2=c(e),qu=l(e,"A",{id:!0}),r(qu).forEach(t),V2=c(e),Ys=l(e,"H3",{class:!0});var Sq=r(Ys);Ia=l(Sq,"A",{id:!0,class:!0,href:!0});var MB=r(Ia);o1=l(MB,"SPAN",{});var ZB=r(o1);d(Kl.$$.fragment,ZB),ZB.forEach(t),MB.forEach(t),wT=c(Sq),l1=l(Sq,"SPAN",{});var NB=r(l1);yT=n(NB,"Automatic Mixed Precision"),NB.forEach(t),Sq.forEach(t),Y2=c(e),$u=l(e,"P",{});var HB=r($u);bT=n(HB,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),HB.forEach(t),K2=c(e),Ks=l(e,"H3",{class:!0});var Cq=r(Ks);Ua=l(Cq,"A",{id:!0,class:!0,href:!0});var BB=r(Ua);r1=l(BB,"SPAN",{});var WB=r(r1);d(Jl.$$.fragment,WB),WB.forEach(t),BB.forEach(t),ET=c(Cq),p1=l(Cq,"SPAN",{});var FB=r(p1);qT=n(FB,"fp16"),FB.forEach(t),Cq.forEach(t),J2=c(e),ku=l(e,"P",{});var VB=r(ku);$T=n(VB,"To configure pytorch AMP-like mode with fp16 (float16) set:"),VB.forEach(t),X2=c(e),d(Xl.$$.fragment,e),Q2=c(e),ls=l(e,"P",{});var xh=r(ls);kT=n(xh,"and the "),Pu=l(xh,"A",{href:!0});var YB=r(Pu);PT=n(YB,"Trainer"),YB.forEach(t),DT=n(xh,` will automatically enable or disable it based on the value of
`),i1=l(xh,"CODE",{});var KB=r(i1);zT=n(KB,"args.fp16_backend"),KB.forEach(t),OT=n(xh,". The rest of config values are up to you."),xh.forEach(t),eb=c(e),rs=l(e,"P",{});var Rh=r(rs);TT=n(Rh,"This mode gets enabled when "),u1=l(Rh,"CODE",{});var JB=r(u1);AT=n(JB,"--fp16 --fp16_backend amp"),JB.forEach(t),ST=n(Rh," or "),c1=l(Rh,"CODE",{});var XB=r(c1);CT=n(XB,"--fp16_full_eval"),XB.forEach(t),xT=n(Rh," command line args are passed."),Rh.forEach(t),sb=c(e),Du=l(e,"P",{});var QB=r(Du);RT=n(QB,"You can also enable/disable this mode explicitly:"),QB.forEach(t),tb=c(e),d(Ql.$$.fragment,e),ab=c(e),Ga=l(e,"P",{});var xq=r(Ga);IT=n(xq,"But then you\u2019re on your own synchronizing the "),zu=l(xq,"A",{href:!0});var eW=r(zu);UT=n(eW,"Trainer"),eW.forEach(t),GT=n(xq,` command line arguments and the DeepSpeed
configuration.`),xq.forEach(t),nb=c(e),La=l(e,"P",{});var Rq=r(La);LT=n(Rq,"Here is the "),er=l(Rq,"A",{href:!0,rel:!0});var sW=r(er);MT=n(sW,"documentation"),sW.forEach(t),ZT=n(Rq,"."),Rq.forEach(t),ob=c(e),Js=l(e,"H3",{class:!0});var Iq=r(Js);Ma=l(Iq,"A",{id:!0,class:!0,href:!0});var tW=r(Ma);h1=l(tW,"SPAN",{});var aW=r(h1);d(sr.$$.fragment,aW),aW.forEach(t),tW.forEach(t),NT=c(Iq),f1=l(Iq,"SPAN",{});var nW=r(f1);HT=n(nW,"bf16"),nW.forEach(t),Iq.forEach(t),lb=c(e),Ou=l(e,"P",{});var oW=r(Ou);BT=n(oW,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),oW.forEach(t),rb=c(e),d(tr.$$.fragment,e),pb=c(e),Tu=l(e,"P",{});var lW=r(Tu);WT=n(lW,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),lW.forEach(t),ib=c(e),ps=l(e,"P",{});var Ih=r(ps);FT=n(Ih,"This mode gets enabled when "),d1=l(Ih,"CODE",{});var rW=r(d1);VT=n(rW,"--bf16"),rW.forEach(t),YT=n(Ih," or "),m1=l(Ih,"CODE",{});var pW=r(m1);KT=n(pW,"--bf16_full_eval"),pW.forEach(t),JT=n(Ih," command line args are passed."),Ih.forEach(t),ub=c(e),Au=l(e,"P",{});var iW=r(Au);XT=n(iW,"You can also enable/disable this mode explicitly:"),iW.forEach(t),cb=c(e),d(ar.$$.fragment,e),hb=c(e),d(Za.$$.fragment,e),fb=c(e),Xs=l(e,"H3",{class:!0});var Uq=r(Xs);Na=l(Uq,"A",{id:!0,class:!0,href:!0});var uW=r(Na);_1=l(uW,"SPAN",{});var cW=r(_1);d(nr.$$.fragment,cW),cW.forEach(t),uW.forEach(t),QT=c(Uq),v1=l(Uq,"SPAN",{});var hW=r(v1);eA=n(hW,"apex"),hW.forEach(t),Uq.forEach(t),db=c(e),Su=l(e,"P",{});var fW=r(Su);sA=n(fW,"To configure apex AMP-like mode set:"),fW.forEach(t),mb=c(e),d(or.$$.fragment,e),_b=c(e),he=l(e,"P",{});var Kn=r(he);tA=n(Kn,"and the "),Cu=l(Kn,"A",{href:!0});var dW=r(Cu);aA=n(dW,"Trainer"),dW.forEach(t),nA=n(Kn," will automatically configure it based on the values of "),j1=l(Kn,"CODE",{});var mW=r(j1);oA=n(mW,"args.fp16_backend"),mW.forEach(t),lA=n(Kn,` and
`),g1=l(Kn,"CODE",{});var _W=r(g1);rA=n(_W,"args.fp16_opt_level"),_W.forEach(t),pA=n(Kn,"."),Kn.forEach(t),vb=c(e),Ha=l(e,"P",{});var Gq=r(Ha);iA=n(Gq,"This mode gets enabled when "),w1=l(Gq,"CODE",{});var vW=r(w1);uA=n(vW,"--fp16 --fp16_backend apex --fp16_opt_level 01"),vW.forEach(t),cA=n(Gq," command line args are passed."),Gq.forEach(t),jb=c(e),xu=l(e,"P",{});var jW=r(xu);hA=n(jW,"You can also configure this mode explicitly:"),jW.forEach(t),gb=c(e),d(lr.$$.fragment,e),wb=c(e),Ba=l(e,"P",{});var Lq=r(Ba);fA=n(Lq,"But then you\u2019re on your own synchronizing the "),Ru=l(Lq,"A",{href:!0});var gW=r(Ru);dA=n(gW,"Trainer"),gW.forEach(t),mA=n(Lq,` command line arguments and the DeepSpeed
configuration.`),Lq.forEach(t),yb=c(e),Wa=l(e,"P",{});var Mq=r(Wa);_A=n(Mq,"Here is the "),rr=l(Mq,"A",{href:!0,rel:!0});var wW=r(rr);vA=n(wW,"documentation"),wW.forEach(t),jA=n(Mq,"."),Mq.forEach(t),bb=c(e),Iu=l(e,"A",{id:!0}),r(Iu).forEach(t),Eb=c(e),Qs=l(e,"H3",{class:!0});var Zq=r(Qs);Fa=l(Zq,"A",{id:!0,class:!0,href:!0});var yW=r(Fa);y1=l(yW,"SPAN",{});var bW=r(y1);d(pr.$$.fragment,bW),bW.forEach(t),yW.forEach(t),gA=c(Zq),b1=l(Zq,"SPAN",{});var EW=r(b1);wA=n(EW,"Batch Size"),EW.forEach(t),Zq.forEach(t),qb=c(e),Uu=l(e,"P",{});var qW=r(Uu);yA=n(qW,"To configure batch size, use:"),qW.forEach(t),$b=c(e),d(ir.$$.fragment,e),kb=c(e),N=l(e,"P",{});var qe=r(N);bA=n(qe,"and the "),Gu=l(qe,"A",{href:!0});var $W=r(Gu);EA=n($W,"Trainer"),$W.forEach(t),qA=n(qe," will automatically set "),E1=l(qe,"CODE",{});var kW=r(E1);$A=n(kW,"train_micro_batch_size_per_gpu"),kW.forEach(t),kA=n(qe,` to the value of
`),q1=l(qe,"CODE",{});var PW=r(q1);PA=n(PW,"args.per_device_train_batch_size"),PW.forEach(t),DA=n(qe," and "),$1=l(qe,"CODE",{});var DW=r($1);zA=n(DW,"train_batch_size"),DW.forEach(t),OA=n(qe," to "),k1=l(qe,"CODE",{});var zW=r(k1);TA=n(zW,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),zW.forEach(t),AA=n(qe,"."),qe.forEach(t),Pb=c(e),Lu=l(e,"P",{});var OW=r(Lu);SA=n(OW,"You can also set the values explicitly:"),OW.forEach(t),Db=c(e),d(ur.$$.fragment,e),zb=c(e),Va=l(e,"P",{});var Nq=r(Va);CA=n(Nq,"But then you\u2019re on your own synchronizing the "),Mu=l(Nq,"A",{href:!0});var TW=r(Mu);xA=n(TW,"Trainer"),TW.forEach(t),RA=n(Nq,` command line arguments and the DeepSpeed
configuration.`),Nq.forEach(t),Ob=c(e),Zu=l(e,"A",{id:!0}),r(Zu).forEach(t),Tb=c(e),et=l(e,"H3",{class:!0});var Hq=r(et);Ya=l(Hq,"A",{id:!0,class:!0,href:!0});var AW=r(Ya);P1=l(AW,"SPAN",{});var SW=r(P1);d(cr.$$.fragment,SW),SW.forEach(t),AW.forEach(t),IA=c(Hq),D1=l(Hq,"SPAN",{});var CW=r(D1);UA=n(CW,"Gradient Accumulation"),CW.forEach(t),Hq.forEach(t),Ab=c(e),Nu=l(e,"P",{});var xW=r(Nu);GA=n(xW,"To configure gradient accumulation set:"),xW.forEach(t),Sb=c(e),d(hr.$$.fragment,e),Cb=c(e),is=l(e,"P",{});var Uh=r(is);LA=n(Uh,"and the "),Hu=l(Uh,"A",{href:!0});var RW=r(Hu);MA=n(RW,"Trainer"),RW.forEach(t),ZA=n(Uh," will automatically set it to the value of "),z1=l(Uh,"CODE",{});var IW=r(z1);NA=n(IW,"args.gradient_accumulation_steps"),IW.forEach(t),HA=n(Uh,"."),Uh.forEach(t),xb=c(e),Bu=l(e,"P",{});var UW=r(Bu);BA=n(UW,"You can also set the value explicitly:"),UW.forEach(t),Rb=c(e),d(fr.$$.fragment,e),Ib=c(e),Ka=l(e,"P",{});var Bq=r(Ka);WA=n(Bq,"But then you\u2019re on your own synchronizing the "),Wu=l(Bq,"A",{href:!0});var GW=r(Wu);FA=n(GW,"Trainer"),GW.forEach(t),VA=n(Bq,` command line arguments and the DeepSpeed
configuration.`),Bq.forEach(t),Ub=c(e),Fu=l(e,"A",{id:!0}),r(Fu).forEach(t),Gb=c(e),st=l(e,"H3",{class:!0});var Wq=r(st);Ja=l(Wq,"A",{id:!0,class:!0,href:!0});var LW=r(Ja);O1=l(LW,"SPAN",{});var MW=r(O1);d(dr.$$.fragment,MW),MW.forEach(t),LW.forEach(t),YA=c(Wq),T1=l(Wq,"SPAN",{});var ZW=r(T1);KA=n(ZW,"Gradient Clipping"),ZW.forEach(t),Wq.forEach(t),Lb=c(e),Vu=l(e,"P",{});var NW=r(Vu);JA=n(NW,"To configure gradient gradient clipping set:"),NW.forEach(t),Mb=c(e),d(mr.$$.fragment,e),Zb=c(e),us=l(e,"P",{});var Gh=r(us);XA=n(Gh,"and the "),Yu=l(Gh,"A",{href:!0});var HW=r(Yu);QA=n(HW,"Trainer"),HW.forEach(t),eS=n(Gh," will automatically set it to the value of "),A1=l(Gh,"CODE",{});var BW=r(A1);sS=n(BW,"args.max_grad_norm"),BW.forEach(t),tS=n(Gh,"."),Gh.forEach(t),Nb=c(e),Ku=l(e,"P",{});var WW=r(Ku);aS=n(WW,"You can also set the value explicitly:"),WW.forEach(t),Hb=c(e),d(_r.$$.fragment,e),Bb=c(e),Xa=l(e,"P",{});var Fq=r(Xa);nS=n(Fq,"But then you\u2019re on your own synchronizing the "),Ju=l(Fq,"A",{href:!0});var FW=r(Ju);oS=n(FW,"Trainer"),FW.forEach(t),lS=n(Fq,` command line arguments and the DeepSpeed
configuration.`),Fq.forEach(t),Wb=c(e),Xu=l(e,"A",{id:!0}),r(Xu).forEach(t),Fb=c(e),tt=l(e,"H3",{class:!0});var Vq=r(tt);Qa=l(Vq,"A",{id:!0,class:!0,href:!0});var VW=r(Qa);S1=l(VW,"SPAN",{});var YW=r(S1);d(vr.$$.fragment,YW),YW.forEach(t),VW.forEach(t),rS=c(Vq),C1=l(Vq,"SPAN",{});var KW=r(C1);pS=n(KW,"Getting The Model Weights Out"),KW.forEach(t),Vq.forEach(t),Vb=c(e),en=l(e,"P",{});var Yq=r(en);iS=n(Yq,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),x1=l(Yq,"CODE",{});var JW=r(x1);uS=n(JW,"global_step*/*optim_states.pt"),JW.forEach(t),cS=n(Yq,` (this is glob
pattern), and are saved under the normal checkpoint.`),Yq.forEach(t),Yb=c(e),Qu=l(e,"P",{});var XW=r(Qu);R1=l(XW,"STRONG",{});var QW=r(R1);hS=n(QW,"FP16 Weights:"),QW.forEach(t),XW.forEach(t),Kb=c(e),sn=l(e,"P",{});var Kq=r(sn);fS=n(Kq,"When a model is saved under ZeRO-2, you end up having the normal "),I1=l(Kq,"CODE",{});var eF=r(I1);dS=n(eF,"pytorch_model.bin"),eF.forEach(t),mS=n(Kq,` file with the model weights, but
they are only the fp16 version of the weights.`),Kq.forEach(t),Jb=c(e),A=l(e,"P",{});var Q=r(A);_S=n(Q,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),U1=l(Q,"CODE",{});var sF=r(U1);vS=n(sF,'"stage3_gather_16bit_weights_on_model_save": true'),sF.forEach(t),jS=n(Q," is required to get the "),G1=l(Q,"CODE",{});var tF=r(G1);gS=n(tF,"Trainer"),tF.forEach(t),wS=n(Q,` to save the fp16
version of the weights. If this setting is `),L1=l(Q,"CODE",{});var aF=r(L1);yS=n(aF,"False"),aF.forEach(t),bS=c(Q),M1=l(Q,"CODE",{});var nF=r(M1);ES=n(nF,"pytorch_model.bin"),nF.forEach(t),qS=n(Q," won\u2019t be created. This is because by default DeepSpeed\u2019s "),Z1=l(Q,"CODE",{});var oF=r(Z1);$S=n(oF,"state_dict"),oF.forEach(t),kS=n(Q," contains a placeholder and not the real weights. If we were to save this "),N1=l(Q,"CODE",{});var lF=r(N1);PS=n(lF,"state_dict"),lF.forEach(t),DS=n(Q," it won\u2019t be possible to load it back."),Q.forEach(t),Xb=c(e),d(jr.$$.fragment,e),Qb=c(e),ec=l(e,"P",{});var rF=r(ec);H1=l(rF,"STRONG",{});var pF=r(H1);zS=n(pF,"FP32 Weights:"),pF.forEach(t),rF.forEach(t),e3=c(e),tn=l(e,"P",{});var Jq=r(tn);OS=n(Jq,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),gr=l(Jq,"A",{href:!0,rel:!0});var iF=r(gr);TS=n(iF,"models hub"),iF.forEach(t),AS=n(Jq,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Jq.forEach(t),s3=c(e),sc=l(e,"P",{});var uF=r(sc);B1=l(uF,"STRONG",{});var cF=r(B1);SS=n(cF,"Live FP32 Weights Recovery:"),cF.forEach(t),uF.forEach(t),t3=c(e),tc=l(e,"P",{});var hF=r(tc);CS=n(hF,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),hF.forEach(t),a3=c(e),ac=l(e,"P",{});var fF=r(ac);xS=n(fF,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),fF.forEach(t),n3=c(e),d(wr.$$.fragment,e),o3=c(e),cs=l(e,"P",{});var Lh=r(cs);RS=n(Lh,"If you\u2019re using the "),W1=l(Lh,"CODE",{});var dF=r(W1);IS=n(dF,"--load_best_model_at_end"),dF.forEach(t),US=n(Lh," class:"),F1=l(Lh,"EM",{});var mF=r(F1);GS=n(mF,"~transformers.TrainingArguments"),mF.forEach(t),LS=n(Lh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Lh.forEach(t),l3=c(e),d(yr.$$.fragment,e),r3=c(e),d(an.$$.fragment,e),p3=c(e),nn=l(e,"P",{});var Xq=r(nn);MS=n(Xq,"Of course, you don\u2019t have to use class:"),V1=l(Xq,"EM",{});var _F=r(V1);ZS=n(_F,"~transformers.Trainer"),_F.forEach(t),NS=n(Xq,` and you can adjust the examples above to your own
trainer.`),Xq.forEach(t),i3=c(e),on=l(e,"P",{});var Qq=r(on);HS=n(Qq,"If for some reason you want more refinement, you can also extract the fp32 "),Y1=l(Qq,"CODE",{});var vF=r(Y1);BS=n(vF,"state_dict"),vF.forEach(t),WS=n(Qq,` of the weights and apply
these yourself as is shown in the following example:`),Qq.forEach(t),u3=c(e),d(br.$$.fragment,e),c3=c(e),nc=l(e,"P",{});var jF=r(nc);K1=l(jF,"STRONG",{});var gF=r(K1);FS=n(gF,"Offline FP32 Weights Recovery:"),gF.forEach(t),jF.forEach(t),h3=c(e),hs=l(e,"P",{});var Mh=r(hs);VS=n(Mh,"DeepSpeed creates a special conversion script "),J1=l(Mh,"CODE",{});var wF=r(J1);YS=n(wF,"zero_to_fp32.py"),wF.forEach(t),KS=n(Mh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),X1=l(Mh,"CODE",{});var yF=r(X1);JS=n(yF,"Trainer"),yF.forEach(t),XS=n(Mh," to do the extraction."),Mh.forEach(t),f3=c(e),oc=l(e,"P",{});var bF=r(oc);QS=n(bF,"Let\u2019s say your checkpoint folder looks like this:"),bF.forEach(t),d3=c(e),d(Er.$$.fragment,e),m3=c(e),ln=l(e,"P",{});var e$=r(ln);eC=n(e$,"In this example there is just one DeepSpeed checkpoint sub-folder "),Q1=l(e$,"EM",{});var EF=r(Q1);sC=n(EF,"global_step1"),EF.forEach(t),tC=n(e$,`. Therefore to reconstruct the fp32
weights just run:`),e$.forEach(t),_3=c(e),d(qr.$$.fragment,e),v3=c(e),rn=l(e,"P",{});var s$=r(rn);aC=n(s$,"This is it. "),ev=l(s$,"CODE",{});var qF=r(ev);nC=n(qF,"pytorch_model.bin"),qF.forEach(t),oC=n(s$," will now contain the full fp32 model weights consolidated from multiple GPUs."),s$.forEach(t),j3=c(e),lc=l(e,"P",{});var $F=r(lc);lC=n($F,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),$F.forEach(t),g3=c(e),$r=l(e,"P",{});var yG=r($r);sv=l(yG,"CODE",{});var kF=r(sv);rC=n(kF,"python zero_to_fp32.py -h"),kF.forEach(t),pC=n(yG," will give you usage details."),yG.forEach(t),w3=c(e),fs=l(e,"P",{});var Zh=r(fs);iC=n(Zh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),tv=l(Zh,"CODE",{});var PF=r(tv);uC=n(PF,"latest"),PF.forEach(t),cC=n(Zh,`, which in the current
example will contain `),av=l(Zh,"CODE",{});var DF=r(av);hC=n(DF,"global_step1"),DF.forEach(t),fC=n(Zh,"."),Zh.forEach(t),y3=c(e),rc=l(e,"P",{});var zF=r(rc);dC=n(zF,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),zF.forEach(t),b3=c(e),at=l(e,"H3",{class:!0});var t$=r(at);pn=l(t$,"A",{id:!0,class:!0,href:!0});var OF=r(pn);nv=l(OF,"SPAN",{});var TF=r(nv);d(kr.$$.fragment,TF),TF.forEach(t),OF.forEach(t),mC=c(t$),ov=l(t$,"SPAN",{});var AF=r(ov);_C=n(AF,"ZeRO-3 and Infinity Nuances"),AF.forEach(t),t$.forEach(t),E3=c(e),pc=l(e,"P",{});var SF=r(pc);vC=n(SF,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),SF.forEach(t),q3=c(e),ic=l(e,"P",{});var CF=r(ic);jC=n(CF,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),CF.forEach(t),$3=c(e),uc=l(e,"P",{});var xF=r(uc);gC=n(xF,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),xF.forEach(t),k3=c(e),nt=l(e,"H4",{class:!0});var a$=r(nt);un=l(a$,"A",{id:!0,class:!0,href:!0});var RF=r(un);lv=l(RF,"SPAN",{});var IF=r(lv);d(Pr.$$.fragment,IF),IF.forEach(t),RF.forEach(t),wC=c(a$),rv=l(a$,"SPAN",{});var UF=r(rv);yC=n(UF,"Constructing Massive Models"),UF.forEach(t),a$.forEach(t),P3=c(e),cn=l(e,"P",{});var n$=r(cn);bC=n(n$,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),pv=l(n$,"EM",{});var GF=r(pv);EC=n(GF,"deepspeed.zero.Init()"),GF.forEach(t),qC=n(n$,`
context manager (which is also a function decorator), like so:`),n$.forEach(t),D3=c(e),d(Dr.$$.fragment,e),z3=c(e),cc=l(e,"P",{});var LF=r(cc);$C=n(LF,"As you can see this gives you a randomly initialized model."),LF.forEach(t),O3=c(e),D=l(e,"P",{});var W=r(D);kC=n(W,"If you want to use a pretrained model, "),iv=l(W,"CODE",{});var MF=r(iv);PC=n(MF,"model_class.from_pretrained"),MF.forEach(t),DC=n(W,` will activate this feature as long as
`),uv=l(W,"CODE",{});var ZF=r(uv);zC=n(ZF,"is_deepspeed_zero3_enabled()"),ZF.forEach(t),OC=n(W," returns "),cv=l(W,"CODE",{});var NF=r(cv);TC=n(NF,"True"),NF.forEach(t),AC=n(W,`, which currently is setup by the
`),hc=l(W,"A",{href:!0});var HF=r(hc);SC=n(HF,"TrainingArguments"),HF.forEach(t),CC=n(W,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),fc=l(W,"A",{href:!0});var BF=r(fc);xC=n(BF,"TrainingArguments"),BF.forEach(t),RC=n(W," object "),hv=l(W,"STRONG",{});var WF=r(hv);IC=n(WF,"before"),WF.forEach(t),UC=n(W,` calling
`),fv=l(W,"CODE",{});var FF=r(fv);GC=n(FF,"from_pretrained"),FF.forEach(t),LC=n(W,". Here is an example of a possible sequence:"),W.forEach(t),T3=c(e),d(zr.$$.fragment,e),A3=c(e),hn=l(e,"P",{});var o$=r(hn);MC=n(o$,"If you\u2019re using the official example scripts and your command line arguments include "),dv=l(o$,"CODE",{});var VF=r(dv);ZC=n(VF,"--deepspeed ds_config.json"),VF.forEach(t),NC=n(o$,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),o$.forEach(t),S3=c(e),dc=l(e,"P",{});var YF=r(dc);HC=n(YF,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),YF.forEach(t),C3=c(e),fn=l(e,"P",{});var l$=r(fn);BC=n(l$,"For full details on this method and other related features please refer to "),Or=l(l$,"A",{href:!0,rel:!0});var KF=r(Or);WC=n(KF,"Constructing Massive Models"),KF.forEach(t),FC=n(l$,"."),l$.forEach(t),x3=c(e),fe=l(e,"P",{});var Jn=r(fe);VC=n(Jn,"Also when loading fp16-pretrained models, you will want to tell "),mv=l(Jn,"CODE",{});var JF=r(mv);YC=n(JF,"from_pretrained"),JF.forEach(t),KC=n(Jn,` to use
`),_v=l(Jn,"CODE",{});var XF=r(_v);JC=n(XF,"torch_dtype=torch.float16"),XF.forEach(t),XC=n(Jn,". For details, please, see "),mc=l(Jn,"A",{href:!0});var QF=r(mc);QC=n(QF,"from_pretrained-torch-dtype"),QF.forEach(t),ex=n(Jn,"."),Jn.forEach(t),R3=c(e),ot=l(e,"H4",{class:!0});var r$=r(ot);dn=l(r$,"A",{id:!0,class:!0,href:!0});var eV=r(dn);vv=l(eV,"SPAN",{});var sV=r(vv);d(Tr.$$.fragment,sV),sV.forEach(t),eV.forEach(t),sx=c(r$),jv=l(r$,"SPAN",{});var tV=r(jv);tx=n(tV,"Gathering Parameters"),tV.forEach(t),r$.forEach(t),I3=c(e),Ar=l(e,"P",{});var bG=r(Ar);ax=n(bG,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Sr=l(bG,"A",{href:!0,rel:!0});var aV=r(Sr);nx=n(aV,"Gathering Parameters"),aV.forEach(t),bG.forEach(t),U3=c(e),mn=l(e,"P",{});var p$=r(mn);ox=n(p$,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),gv=l(p$,"CODE",{});var nV=r(gv);lx=n(nV,"from_pretrained"),nV.forEach(t),rx=n(p$,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),p$.forEach(t),G3=c(e),_c=l(e,"P",{});var oV=r(_c);px=n(oV,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),oV.forEach(t),L3=c(e),d(Cr.$$.fragment,e),M3=c(e),ds=l(e,"P",{});var Nh=r(ds);ix=n(Nh,"stress on "),wv=l(Nh,"CODE",{});var lV=r(wv);ux=n(lV,"tensor([1.])"),lV.forEach(t),cx=n(Nh,", or if you get an error where it says the parameter is of size "),yv=l(Nh,"CODE",{});var rV=r(yv);hx=n(rV,"1"),rV.forEach(t),fx=n(Nh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Nh.forEach(t),Z3=c(e),vc=l(e,"A",{id:!0}),r(vc).forEach(t),N3=c(e),lt=l(e,"H3",{class:!0});var i$=r(lt);_n=l(i$,"A",{id:!0,class:!0,href:!0});var pV=r(_n);bv=l(pV,"SPAN",{});var iV=r(bv);d(xr.$$.fragment,iV),iV.forEach(t),pV.forEach(t),dx=c(i$),Ev=l(i$,"SPAN",{});var uV=r(Ev);mx=n(uV,"ZeRO Inference"),uV.forEach(t),i$.forEach(t),H3=c(e),jc=l(e,"P",{});var cV=r(jc);_x=n(cV,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),cV.forEach(t),B3=c(e),vn=l(e,"P",{});var u$=r(vn);vx=n(u$,"Otherwise you just need to pass the usual "),gc=l(u$,"A",{href:!0});var hV=r(gc);jx=n(hV,"TrainingArguments"),hV.forEach(t),gx=n(u$," arguments. For example:"),u$.forEach(t),W3=c(e),d(Rr.$$.fragment,e),F3=c(e),wc=l(e,"P",{});var fV=r(wc);wx=n(fV,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),fV.forEach(t),V3=c(e),jn=l(e,"P",{});var c$=r(jn);yx=n(c$,"Here is an example of running "),qv=l(c$,"CODE",{});var dV=r(qv);bx=n(dV,"run_translation.py"),dV.forEach(t),Ex=n(c$," under DeepSpeed deploying all available GPUs:"),c$.forEach(t),Y3=c(e),d(Ir.$$.fragment,e),K3=c(e),yc=l(e,"P",{});var mV=r(yc);qx=n(mV,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),mV.forEach(t),J3=c(e),bc=l(e,"P",{});var _V=r(bc);$x=n(_V,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),_V.forEach(t),X3=c(e),rt=l(e,"H3",{class:!0});var h$=r(rt);gn=l(h$,"A",{id:!0,class:!0,href:!0});var vV=r(gn);$v=l(vV,"SPAN",{});var jV=r($v);d(Ur.$$.fragment,jV),jV.forEach(t),vV.forEach(t),kx=c(h$),kv=l(h$,"SPAN",{});var gV=r(kv);Px=n(gV,"Memory Requirements"),gV.forEach(t),h$.forEach(t),Q3=c(e),Ec=l(e,"P",{});var wV=r(Ec);Dx=n(wV,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),wV.forEach(t),e0=c(e),qc=l(e,"P",{});var yV=r(qc);zx=n(yV,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),yV.forEach(t),s0=c(e),d(Gr.$$.fragment,e),t0=c(e),$c=l(e,"P",{});var bV=r($c);Ox=n(bV,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),bV.forEach(t),a0=c(e),kc=l(e,"P",{});var EV=r(kc);Tx=n(EV,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),EV.forEach(t),n0=c(e),Pc=l(e,"P",{});var qV=r(Pc);Ax=n(qV,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),qV.forEach(t),o0=c(e),Dc=l(e,"P",{});var $V=r(Dc);Sx=n($V,"For example, let\u2019s repeat the same for 2 GPUs:"),$V.forEach(t),l0=c(e),d(Lr.$$.fragment,e),r0=c(e),zc=l(e,"P",{});var kV=r(zc);Cx=n(kV,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),kV.forEach(t),p0=c(e),wn=l(e,"P",{});var f$=r(wn);xx=n(f$,"For full information please see "),Mr=l(f$,"A",{href:!0,rel:!0});var PV=r(Mr);Rx=n(PV,"memory estimators"),PV.forEach(t),Ix=n(f$,"."),f$.forEach(t),i0=c(e),pt=l(e,"H3",{class:!0});var d$=r(pt);yn=l(d$,"A",{id:!0,class:!0,href:!0});var DV=r(yn);Pv=l(DV,"SPAN",{});var zV=r(Pv);d(Zr.$$.fragment,zV),zV.forEach(t),DV.forEach(t),Ux=c(d$),Dv=l(d$,"SPAN",{});var OV=r(Dv);Gx=n(OV,"Filing Issues"),OV.forEach(t),d$.forEach(t),u0=c(e),Oc=l(e,"P",{});var TV=r(Oc);Lx=n(TV,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),TV.forEach(t),c0=c(e),Tc=l(e,"P",{});var AV=r(Tc);Mx=n(AV,"In your report please always include:"),AV.forEach(t),h0=c(e),H=l(e,"OL",{});var $e=r(H);zv=l($e,"LI",{});var SV=r(zv);Ov=l(SV,"P",{});var CV=r(Ov);Zx=n(CV,"the full Deepspeed config file in the report"),CV.forEach(t),SV.forEach(t),Nx=c($e),Tv=l($e,"LI",{});var xV=r(Tv);Te=l(xV,"P",{});var Xn=r(Te);Hx=n(Xn,"either the command line arguments if you were using the "),Ac=l(Xn,"A",{href:!0});var RV=r(Ac);Bx=n(RV,"Trainer"),RV.forEach(t),Wx=n(Xn,` or
`),Sc=l(Xn,"A",{href:!0});var IV=r(Sc);Fx=n(IV,"TrainingArguments"),IV.forEach(t),Vx=n(Xn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Cc=l(Xn,"A",{href:!0});var UV=r(Cc);Yx=n(UV,"TrainingArguments"),UV.forEach(t),Kx=n(Xn," as it has dozens of entries that are irrelevant."),Xn.forEach(t),xV.forEach(t),Jx=c($e),Nr=l($e,"LI",{});var m$=r(Nr);Av=l(m$,"P",{});var GV=r(Av);Xx=n(GV,"Output of:"),GV.forEach(t),Qx=c(m$),d(Hr.$$.fragment,m$),m$.forEach(t),eR=c($e),Sv=l($e,"LI",{});var LV=r(Sv);Br=l(LV,"P",{});var _$=r(Br);sR=n(_$,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Wr=l(_$,"A",{href:!0,rel:!0});var MV=r(Wr);tR=n(MV,"notebook"),MV.forEach(t),aR=n(_$,` as
a starting point.`),_$.forEach(t),LV.forEach(t),nR=c($e),Cv=l($e,"LI",{});var ZV=r(Cv);xv=l(ZV,"P",{});var NV=r(xv);oR=n(NV,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),NV.forEach(t),ZV.forEach(t),lR=c($e),Rv=l($e,"LI",{});var HV=r(Rv);Fr=l(HV,"P",{});var v$=r(Fr);rR=n(v$,"If possible try to use one of the existing "),Vr=l(v$,"A",{href:!0,rel:!0});var BV=r(Vr);pR=n(BV,"examples"),BV.forEach(t),iR=n(v$," to reproduce the problem with."),v$.forEach(t),HV.forEach(t),$e.forEach(t),f0=c(e),xc=l(e,"P",{});var WV=r(xc);uR=n(WV,"Things to consider:"),WV.forEach(t),d0=c(e),bn=l(e,"UL",{});var j$=r(bn);it=l(j$,"LI",{});var Hh=r(it);Iv=l(Hh,"P",{});var FV=r(Iv);cR=n(FV,"Deepspeed is often not the cause of the problem."),FV.forEach(t),hR=c(Hh),Uv=l(Hh,"P",{});var VV=r(Uv);fR=n(VV,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),VV.forEach(t),dR=c(Hh),Gv=l(Hh,"P",{});var YV=r(Gv);mR=n(YV,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),YV.forEach(t),Hh.forEach(t),_R=c(j$),Lv=l(j$,"LI",{});var KV=r(Lv);Yr=l(KV,"P",{});var g$=r(Yr);vR=n(g$,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Kr=l(g$,"A",{href:!0,rel:!0});var JV=r(Kr);jR=n(JV,"Deepspeed"),JV.forEach(t),gR=n(g$,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),g$.forEach(t),KV.forEach(t),j$.forEach(t),m0=c(e),ut=l(e,"H3",{class:!0});var w$=r(ut);En=l(w$,"A",{id:!0,class:!0,href:!0});var XV=r(En);Mv=l(XV,"SPAN",{});var QV=r(Mv);d(Jr.$$.fragment,QV),QV.forEach(t),XV.forEach(t),wR=c(w$),Zv=l(w$,"SPAN",{});var eY=r(Zv);yR=n(eY,"Troubleshooting"),eY.forEach(t),w$.forEach(t),_0=c(e),ct=l(e,"H4",{class:!0});var y$=r(ct);qn=l(y$,"A",{id:!0,class:!0,href:!0});var sY=r(qn);Nv=l(sY,"SPAN",{});var tY=r(Nv);d(Xr.$$.fragment,tY),tY.forEach(t),sY.forEach(t),bR=c(y$),Qr=l(y$,"SPAN",{});var b$=r(Qr);ER=n(b$,"the "),Hv=l(b$,"CODE",{});var aY=r(Hv);qR=n(aY,"deepspeed"),aY.forEach(t),$R=n(b$," process gets killed at startup without a traceback"),b$.forEach(t),y$.forEach(t),v0=c(e),B=l(e,"P",{});var ke=r(B);kR=n(ke,"If the "),Bv=l(ke,"CODE",{});var nY=r(Bv);PR=n(nY,"deepspeed"),nY.forEach(t),DR=n(ke,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Wv=l(ke,"CODE",{});var oY=r(Wv);zR=n(oY,"offload_optimizer"),oY.forEach(t),OR=n(ke," or "),Fv=l(ke,"CODE",{});var lY=r(Fv);TR=n(lY,"offload_param"),lY.forEach(t),AR=n(ke,` or
both configured to offload to `),Vv=l(ke,"CODE",{});var rY=r(Vv);SR=n(rY,"cpu"),rY.forEach(t),CR=n(ke,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),ep=l(ke,"A",{href:!0,rel:!0});var pY=r(ep);xR=n(pY,"estimate how much memory is needed for a specific model"),pY.forEach(t),RR=n(ke,"."),ke.forEach(t),j0=c(e),ht=l(e,"H4",{class:!0});var E$=r(ht);$n=l(E$,"A",{id:!0,class:!0,href:!0});var iY=r($n);Yv=l(iY,"SPAN",{});var uY=r(Yv);d(sp.$$.fragment,uY),uY.forEach(t),iY.forEach(t),IR=c(E$),Rc=l(E$,"SPAN",{});var EG=r(Rc);UR=n(EG,"training and/or eval/predict loss is "),Kv=l(EG,"CODE",{});var cY=r(Kv);GR=n(cY,"NaN"),cY.forEach(t),EG.forEach(t),E$.forEach(t),g0=c(e),Ic=l(e,"P",{});var hY=r(Ic);LR=n(hY,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),hY.forEach(t),w0=c(e),Uc=l(e,"P",{});var fY=r(Uc);MR=n(fY,"The other problem may have to do with using fp16. When you configure this section:"),fY.forEach(t),y0=c(e),d(tp.$$.fragment,e),b0=c(e),kn=l(e,"P",{});var q$=r(kn);ZR=n(q$,"and you see in your log that Deepspeed reports "),Jv=l(q$,"CODE",{});var dY=r(Jv);NR=n(dY,"OVERFLOW!"),dY.forEach(t),HR=n(q$," as follows:"),q$.forEach(t),E0=c(e),d(ap.$$.fragment,e),q0=c(e),Gc=l(e,"P",{});var mY=r(Gc);BR=n(mY,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),mY.forEach(t),$0=c(e),Lc=l(e,"P",{});var _Y=r(Lc);WR=n(_Y,"(the log was massaged to be more readable here.)"),_Y.forEach(t),k0=c(e),ms=l(e,"P",{});var Bh=r(ms);FR=n(Bh,"In this case you usually need to raise the value of "),Xv=l(Bh,"CODE",{});var vY=r(Xv);VR=n(vY,"initial_scale_power"),vY.forEach(t),YR=n(Bh,". Setting it to "),Qv=l(Bh,"CODE",{});var jY=r(Qv);KR=n(jY,'"initial_scale_power": 32'),jY.forEach(t),JR=n(Bh," will typically resolve the problem."),Bh.forEach(t),P0=c(e),ft=l(e,"H3",{class:!0});var $$=r(ft);Pn=l($$,"A",{id:!0,class:!0,href:!0});var gY=r(Pn);ej=l(gY,"SPAN",{});var wY=r(ej);d(np.$$.fragment,wY),wY.forEach(t),gY.forEach(t),XR=c($$),sj=l($$,"SPAN",{});var yY=r(sj);QR=n(yY,"Notes"),yY.forEach(t),$$.forEach(t),D0=c(e),_s=l(e,"UL",{});var Wh=r(_s);Dn=l(Wh,"LI",{});var Nj=r(Dn);eI=n(Nj,"DeepSpeed works with the PyTorch "),Mc=l(Nj,"A",{href:!0});var bY=r(Mc);sI=n(bY,"Trainer"),bY.forEach(t),tI=n(Nj," but not TF "),tj=l(Nj,"CODE",{});var EY=r(tj);aI=n(EY,"TFTrainer"),EY.forEach(t),Nj.forEach(t),nI=c(Wh),op=l(Wh,"LI",{});var k$=r(op);oI=n(k$,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),lp=l(k$,"A",{href:!0,rel:!0});var qY=r(lp);lI=n(qY,"source"),qY.forEach(t),rI=n(k$,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),k$.forEach(t),pI=c(Wh),dt=l(Wh,"LI",{});var Fh=r(dt);iI=n(Fh,"You don\u2019t have to use the "),Zc=l(Fh,"A",{href:!0});var $Y=r(Zc);uI=n($Y,"Trainer"),$Y.forEach(t),cI=n(Fh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),rp=l(Fh,"A",{href:!0,rel:!0});var kY=r(rp);hI=n(kY,"the DeepSpeed integration instructions"),kY.forEach(t),fI=n(Fh,"."),Fh.forEach(t),Wh.forEach(t),z0=c(e),Nc=l(e,"A",{id:!0}),r(Nc).forEach(t),O0=c(e),mt=l(e,"H2",{class:!0});var P$=r(mt);zn=l(P$,"A",{id:!0,class:!0,href:!0});var PY=r(zn);aj=l(PY,"SPAN",{});var DY=r(aj);d(pp.$$.fragment,DY),DY.forEach(t),PY.forEach(t),dI=c(P$),nj=l(P$,"SPAN",{});var zY=r(nj);mI=n(zY,"Non-Trainer Deepspeed Integration"),zY.forEach(t),P$.forEach(t),T0=c(e),de=l(e,"P",{});var Qn=r(de);_I=n(Qn,"The "),Hc=l(Qn,"A",{href:!0});var OY=r(Hc);vI=n(OY,"HfDeepSpeedConfig"),OY.forEach(t),jI=n(Qn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Bc=l(Qn,"A",{href:!0});var TY=r(Bc);gI=n(TY,"Trainer"),TY.forEach(t),wI=n(Qn," is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),oj=l(Qn,"CODE",{});var AY=r(oj);yI=n(AY,"from_pretrained"),AY.forEach(t),bI=n(Qn," call. Everything else you have to do by yourself."),Qn.forEach(t),A0=c(e),On=l(e,"P",{});var D$=r(On);EI=n(D$,"When using "),Wc=l(D$,"A",{href:!0});var SY=r(Wc);qI=n(SY,"Trainer"),SY.forEach(t),$I=n(D$," everything is automatically taken care of."),D$.forEach(t),S0=c(e),vs=l(e,"P",{});var Vh=r(vs);kI=n(Vh,"When not using "),Fc=l(Vh,"A",{href:!0});var CY=r(Fc);PI=n(CY,"Trainer"),CY.forEach(t),DI=n(Vh,`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Vc=l(Vh,"A",{href:!0});var xY=r(Vc);zI=n(xY,"HfDeepSpeedConfig"),xY.forEach(t),OI=n(Vh," object before instantiating the model and keep that object alive."),Vh.forEach(t),C0=c(e),Tn=l(e,"P",{});var z$=r(Tn);TI=n(z$,"If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),lj=l(z$,"CODE",{});var RY=r(lj);AI=n(RY,"HfDeepSpeedConfig"),RY.forEach(t),SI=n(z$," at all."),z$.forEach(t),x0=c(e),Yc=l(e,"P",{});var IY=r(Yc);CI=n(IY,"For example for a pretrained model:"),IY.forEach(t),R0=c(e),d(ip.$$.fragment,e),I0=c(e),Kc=l(e,"P",{});var UY=r(Kc);xI=n(UY,"or for non-pretrained model:"),UY.forEach(t),U0=c(e),d(up.$$.fragment,e),G0=c(e),me=l(e,"P",{});var eo=r(me);RI=n(eo,"Please note that if you\u2019re not using the "),Jc=l(eo,"A",{href:!0});var GY=r(Jc);II=n(GY,"Trainer"),GY.forEach(t),UI=n(eo," integration, you\u2019re completely on your own. Basically follow the documentation on the "),cp=l(eo,"A",{href:!0,rel:!0});var LY=r(cp);GI=n(LY,"Deepspeed"),LY.forEach(t),LI=n(eo," website. Also you have to configure explicitly the config file - you can\u2019t use "),rj=l(eo,"CODE",{});var MY=r(rj);MI=n(MY,'"auto"'),MY.forEach(t),ZI=n(eo," values and you will have to put real values instead."),eo.forEach(t),L0=c(e),_t=l(e,"H2",{class:!0});var O$=r(_t);An=l(O$,"A",{id:!0,class:!0,href:!0});var ZY=r(An);pj=l(ZY,"SPAN",{});var NY=r(pj);d(hp.$$.fragment,NY),NY.forEach(t),ZY.forEach(t),NI=c(O$),ij=l(O$,"SPAN",{});var HY=r(ij);HI=n(HY,"HfDeepSpeedConfig"),HY.forEach(t),O$.forEach(t),M0=c(e),P=l(e,"DIV",{class:!0});var F=r(P);d(fp.$$.fragment,F),BI=c(F),uj=l(F,"P",{});var BY=r(uj);WI=n(BY,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),BY.forEach(t),FI=c(F),Ae=l(F,"P",{});var so=r(Ae);VI=n(so,"A "),cj=l(so,"CODE",{});var WY=r(cj);YI=n(WY,"weakref"),WY.forEach(t),KI=n(so,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),hj=l(so,"CODE",{});var FY=r(hj);JI=n(FY,"from_pretrained"),FY.forEach(t),XI=n(so," and "),fj=l(so,"CODE",{});var VY=r(fj);QI=n(VY,"_get_resized_embeddings"),VY.forEach(t),eU=n(so,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),so.forEach(t),sU=c(F),_e=l(F,"P",{});var bt=r(_e);Xc=l(bt,"A",{href:!0});var YY=r(Xc);tU=n(YY,"Trainer"),YY.forEach(t),aU=n(bt," uses the "),dj=l(bt,"CODE",{});var KY=r(dj);nU=n(KY,"HfTrainerDeepSpeedConfig"),KY.forEach(t),oU=n(bt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Qc=l(bt,"A",{href:!0});var JY=r(Qc);lU=n(JY,"TrainingArguments"),JY.forEach(t),rU=n(bt," by replacing special placeholder values: "),mj=l(bt,"CODE",{});var XY=r(mj);pU=n(XY,'"auto"'),XY.forEach(t),iU=n(bt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),bt.forEach(t),uU=c(F),js=l(F,"DIV",{class:!0});var Yh=r(js);d(dp.$$.fragment,Yh),cU=c(Yh),_j=l(Yh,"P",{});var QY=r(_j);hU=n(QY,"Deletes a sub-section of the config file if it\u2019s found."),QY.forEach(t),fU=c(Yh),vt=l(Yh,"P",{});var Kh=r(vt);dU=n(Kh,"Unless "),vj=l(Kh,"CODE",{});var eK=r(vj);mU=n(eK,"must_exist"),eK.forEach(t),_U=n(Kh," is "),jj=l(Kh,"CODE",{});var sK=r(jj);vU=n(sK,"True"),sK.forEach(t),jU=n(Kh," the section doesn\u2019t have to exist."),Kh.forEach(t),Yh.forEach(t),gU=c(F),Sn=l(F,"DIV",{class:!0});var T$=r(Sn);d(mp.$$.fragment,T$),wU=c(T$),_p=l(T$,"P",{});var A$=r(_p);yU=n(A$,"Returns the set value or "),gj=l(A$,"CODE",{});var tK=r(gj);bU=n(tK,"default"),tK.forEach(t),EU=n(A$," if no value is set"),A$.forEach(t),T$.forEach(t),qU=c(F),Cn=l(F,"DIV",{class:!0});var S$=r(Cn);d(vp.$$.fragment,S$),$U=c(S$),jt=l(S$,"P",{});var Jh=r(jt);kU=n(Jh,"Returns "),wj=l(Jh,"CODE",{});var aK=r(wj);PU=n(aK,"True"),aK.forEach(t),DU=n(Jh,"/"),yj=l(Jh,"CODE",{});var nK=r(yj);zU=n(nK,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),nK.forEach(t),OU=n(Jh," or isn\u2019t set)."),Jh.forEach(t),S$.forEach(t),TU=c(F),xn=l(F,"DIV",{class:!0});var C$=r(xn);d(jp.$$.fragment,C$),AU=c(C$),gt=l(C$,"P",{});var Xh=r(gt);SU=n(Xh,"Returns "),bj=l(Xh,"CODE",{});var oK=r(bj);CU=n(oK,"True"),oK.forEach(t),xU=n(Xh,"/"),Ej=l(Xh,"CODE",{});var lK=r(Ej);RU=n(lK,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),lK.forEach(t),IU=n(Xh," or isn\u2019t set)."),Xh.forEach(t),C$.forEach(t),F.forEach(t),Z0=c(e),wt=l(e,"H3",{class:!0});var x$=r(wt);Rn=l(x$,"A",{id:!0,class:!0,href:!0});var rK=r(Rn);qj=l(rK,"SPAN",{});var pK=r(qj);d(gp.$$.fragment,pK),pK.forEach(t),rK.forEach(t),UU=c(x$),$j=l(x$,"SPAN",{});var iK=r($j);GU=n(iK,"Custom DeepSpeed ZeRO Inference"),iK.forEach(t),x$.forEach(t),N0=c(e),In=l(e,"P",{});var R$=r(In);LU=n(R$,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),eh=l(R$,"A",{href:!0});var uK=r(eh);MU=n(uK,"Trainer"),uK.forEach(t),ZU=n(R$," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),R$.forEach(t),H0=c(e),sh=l(e,"P",{});var cK=r(sh);NU=n(cK,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),cK.forEach(t),B0=c(e),th=l(e,"P",{});var hK=r(th);HU=n(hK,"The example has copious notes and is self-documenting."),hK.forEach(t),W0=c(e),ah=l(e,"P",{});var fK=r(ah);BU=n(fK,"Make sure to:"),fK.forEach(t),F0=c(e),Un=l(e,"OL",{});var I$=r(Un);kj=l(I$,"LI",{});var dK=r(kj);WU=n(dK,"disable CPU offload if you have enough GPU memory (since it slows things down)"),dK.forEach(t),FU=c(I$),Pj=l(I$,"LI",{});var mK=r(Pj);VU=n(mK,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),mK.forEach(t),I$.forEach(t),V0=c(e),d(wp.$$.fragment,e),Y0=c(e),Gn=l(e,"P",{});var U$=r(Gn);YU=n(U$,"Let\u2019s save it as "),Dj=l(U$,"CODE",{});var _K=r(Dj);KU=n(_K,"t0.py"),_K.forEach(t),JU=n(U$," and run it:"),U$.forEach(t),K0=c(e),d(yp.$$.fragment,e),J0=c(e),nh=l(e,"P",{});var vK=r(nh);XU=n(vK,"This was a very basic example and you will want to adapt it to your needs."),vK.forEach(t),X0=c(e),yt=l(e,"H2",{class:!0});var G$=r(yt);Ln=l(G$,"A",{id:!0,class:!0,href:!0});var jK=r(Ln);zj=l(jK,"SPAN",{});var gK=r(zj);d(bp.$$.fragment,gK),gK.forEach(t),jK.forEach(t),QU=c(G$),Oj=l(G$,"SPAN",{});var wK=r(Oj);eG=n(wK,"Main DeepSpeed Resources"),wK.forEach(t),G$.forEach(t),Q0=c(e),ve=l(e,"UL",{});var to=r(ve);Tj=l(to,"LI",{});var yK=r(Tj);Ep=l(yK,"A",{href:!0,rel:!0});var bK=r(Ep);sG=n(bK,"Project\u2019s github"),bK.forEach(t),yK.forEach(t),tG=c(to),Aj=l(to,"LI",{});var EK=r(Aj);qp=l(EK,"A",{href:!0,rel:!0});var qK=r(qp);aG=n(qK,"Usage docs"),qK.forEach(t),EK.forEach(t),nG=c(to),Sj=l(to,"LI",{});var $K=r(Sj);$p=l($K,"A",{href:!0,rel:!0});var kK=r($p);oG=n(kK,"API docs"),kK.forEach(t),$K.forEach(t),lG=c(to),Cj=l(to,"LI",{});var PK=r(Cj);kp=l(PK,"A",{href:!0,rel:!0});var DK=r(kp);rG=n(DK,"Blog posts"),DK.forEach(t),PK.forEach(t),to.forEach(t),eE=c(e),oh=l(e,"P",{});var zK=r(oh);pG=n(zK,"Papers:"),zK.forEach(t),sE=c(e),gs=l(e,"UL",{});var Qh=r(gs);xj=l(Qh,"LI",{});var OK=r(xj);Pp=l(OK,"A",{href:!0,rel:!0});var TK=r(Pp);iG=n(TK,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),TK.forEach(t),OK.forEach(t),uG=c(Qh),Rj=l(Qh,"LI",{});var AK=r(Rj);Dp=l(AK,"A",{href:!0,rel:!0});var SK=r(Dp);cG=n(SK,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),SK.forEach(t),AK.forEach(t),hG=c(Qh),Ij=l(Qh,"LI",{});var CK=r(Ij);zp=l(CK,"A",{href:!0,rel:!0});var xK=r(zp);fG=n(xK,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),xK.forEach(t),CK.forEach(t),Qh.forEach(t),tE=c(e),ws=l(e,"P",{});var ef=r(ws);dG=n(ef,"Finally, please, remember that, HuggingFace "),lh=l(ef,"A",{href:!0});var RK=r(lh);mG=n(RK,"Trainer"),RK.forEach(t),_G=n(ef,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Op=l(ef,"A",{href:!0,rel:!0});var IK=r(Op);vG=n(IK,"DeepSpeed GitHub"),IK.forEach(t),jG=n(ef,"."),ef.forEach(t),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(WK)),h(q,"id","deepspeed-integration"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#deepspeed-integration"),h(b,"class","relative group"),h(E,"href","https://github.com/microsoft/DeepSpeed"),h(E,"rel","nofollow"),h(V,"href","https://arxiv.org/abs/1910.02054"),h(V,"rel","nofollow"),h(ao,"href","https://arxiv.org/abs/2101.06840"),h(ao,"rel","nofollow"),h(no,"href","https://arxiv.org/abs/2104.07857"),h(no,"rel","nofollow"),h(oo,"href","https://github.com/microsoft/DeepSpeed"),h(oo,"rel","nofollow"),h(Lp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Zp,"href","#deepspeed-non-trainer-integration"),h(Vp,"href","#deepspeed-zero-inference"),h(Kp,"id","deepspeed-trainer-integration"),h($t,"id","trainer-deepspeed-integration"),h($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($t,"href","#trainer-deepspeed-integration"),h(ks,"class","relative group"),h(Jp,"id","deepspeed-installation"),h(kt,"id","installation"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#installation"),h(Ps,"class","relative group"),h(ho,"href","https://github.com/microsoft/deepspeed#installation"),h(ho,"rel","nofollow"),h(fo,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(fo,"rel","nofollow"),h(Qp,"href","#zero-install-notes"),h(jo,"href","https://developer.nvidia.com/cuda-gpus"),h(jo,"rel","nofollow"),h(bo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(bo,"rel","nofollow"),h(li,"id","deepspeed-multi-gpu"),h(St,"id","deployment-with-multiple-gpus"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#deployment-with-multiple-gpus"),h(Ds,"class","relative group"),h(ri,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(qo,"href","https://www.deepspeed.ai/docs/config-json/"),h(qo,"rel","nofollow"),h(Po,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Po,"rel","nofollow"),h(zo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(zo,"rel","nofollow"),h(ui,"id","deepspeed-one-gpu"),h(Gt,"id","deployment-with-one-gpu"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#deployment-with-one-gpu"),h(Os,"class","relative group"),h(ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ao,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Ao,"rel","nofollow"),h(Co,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(Co,"rel","nofollow"),h(ji,"id","deepspeed-notebook"),h(Nt,"id","deployment-in-notebooks"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#deployment-in-notebooks"),h(As,"class","relative group"),h(Ei,"id","deepspeed-config"),h(Vt,"id","configuration"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#configuration"),h(Ss,"class","relative group"),h(No,"href","https://www.deepspeed.ai/docs/config-json/"),h(No,"rel","nofollow"),h(Ho,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Ho,"rel","nofollow"),h(Fo,"href","https://github.com/microsoft/DeepSpeed"),h(Fo,"rel","nofollow"),h($i,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ki,"id","deepspeed-config-passing"),h(ea,"id","passing-configuration"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#passing-configuration"),h(Cs,"class","relative group"),h(Pi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Di,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(zi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ai,"id","deepspeed-config-shared"),h(sa,"id","shared-configuration"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#shared-configuration"),h(xs,"class","relative group"),h(Si,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(xi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ri,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ui,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Gi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Li,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mi,"id","deepspeed-zero"),h(la,"id","zero"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#zero"),h(Rs,"class","relative group"),h(tl,"href","https://www.deepspeed.ai/tutorials/zero/"),h(tl,"rel","nofollow"),h(al,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(al,"rel","nofollow"),h(Zi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Hi,"id","deepspeed-zero2-config"),h(pa,"id","zero2-config"),h(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pa,"href","#zero2-config"),h(Is,"class","relative group"),h(Vi,"id","deepspeed-zero3-config"),h(ia,"id","zero3-config"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#zero3-config"),h(Gs,"class","relative group"),h(Xi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(eu,"id","deepspeed-nvme"),h(ha,"id","nvme-support"),h(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ha,"href","#nvme-support"),h(Ls,"class","relative group"),h(wl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(wl,"rel","nofollow"),h(yl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(yl,"rel","nofollow"),h(bl,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(bl,"rel","nofollow"),h(au,"id","deepspeed-zero2-zero3-performance"),h(ma,"id","zero2-vs-zero3-performance"),h(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ma,"href","#zero2-vs-zero3-performance"),h(Ms,"class","relative group"),h(lu,"id","deepspeed-zero2-example"),h(va,"id","zero2-example"),h(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(va,"href","#zero2-example"),h(Ns,"class","relative group"),h(ru,"id","deepspeed-zero3-example"),h(wa,"id","zero3-example"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#zero3-example"),h(Hs,"class","relative group"),h(Ea,"id","optimizer-and-scheduler"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#optimizer-and-scheduler"),h(Bs,"class","relative group"),h(iu,"id","deepspeed-optimizer"),h(ka,"id","optimizer"),h(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ka,"href","#optimizer"),h(Ws,"class","relative group"),h(Sl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(Sl,"rel","nofollow"),h(uu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(du,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(_u,"id","deepspeed-scheduler"),h(Da,"id","scheduler"),h(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Da,"href","#scheduler"),h(Fs,"class","relative group"),h(Zl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(Zl,"rel","nofollow"),h(ju,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(gu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(yu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(bu,"id","deepspeed-fp32"),h(Ca,"id","fp32-precision"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#fp32-precision"),h(Vs,"class","relative group"),h(Yl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Yl,"rel","nofollow"),h(qu,"id","deepspeed-amp"),h(Ia,"id","automatic-mixed-precision"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#automatic-mixed-precision"),h(Ys,"class","relative group"),h(Ua,"id","fp16"),h(Ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ua,"href","#fp16"),h(Ks,"class","relative group"),h(Pu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(zu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(er,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(er,"rel","nofollow"),h(Ma,"id","bf16"),h(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ma,"href","#bf16"),h(Js,"class","relative group"),h(Na,"id","apex"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#apex"),h(Xs,"class","relative group"),h(Cu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ru,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(rr,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(rr,"rel","nofollow"),h(Iu,"id","deepspeed-bs"),h(Fa,"id","batch-size"),h(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fa,"href","#batch-size"),h(Qs,"class","relative group"),h(Gu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Zu,"id","deepspeed-grad-acc"),h(Ya,"id","gradient-accumulation"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#gradient-accumulation"),h(et,"class","relative group"),h(Hu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fu,"id","deepspeed-grad-clip"),h(Ja,"id","gradient-clipping"),h(Ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ja,"href","#gradient-clipping"),h(st,"class","relative group"),h(Yu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ju,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Xu,"id","deepspeed-weight-extraction"),h(Qa,"id","getting-the-model-weights-out"),h(Qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qa,"href","#getting-the-model-weights-out"),h(tt,"class","relative group"),h(gr,"href","https://huggingface.co/models"),h(gr,"rel","nofollow"),h(pn,"id","zero3-and-infinity-nuances"),h(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pn,"href","#zero3-and-infinity-nuances"),h(at,"class","relative group"),h(un,"id","constructing-massive-models"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#constructing-massive-models"),h(nt,"class","relative group"),h(hc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(fc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Or,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(Or,"rel","nofollow"),h(mc,"href","#from_pretrained-torch-dtype"),h(dn,"id","gathering-parameters"),h(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(dn,"href","#gathering-parameters"),h(ot,"class","relative group"),h(Sr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Sr,"rel","nofollow"),h(vc,"id","deepspeed-zero-inference"),h(_n,"id","zero-inference"),h(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_n,"href","#zero-inference"),h(lt,"class","relative group"),h(gc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(gn,"id","memory-requirements"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#memory-requirements"),h(rt,"class","relative group"),h(Mr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Mr,"rel","nofollow"),h(yn,"id","filing-issues"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#filing-issues"),h(pt,"class","relative group"),h(Ac,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Sc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Cc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Wr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Wr,"rel","nofollow"),h(Vr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(Vr,"rel","nofollow"),h(Kr,"href","https://github.com/microsoft/DeepSpeed/"),h(Kr,"rel","nofollow"),h(En,"id","troubleshooting"),h(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(En,"href","#troubleshooting"),h(ut,"class","relative group"),h(qn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(ct,"class","relative group"),h(ep,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(ep,"rel","nofollow"),h($n,"id","training-andor-evalpredict-loss-is-nan"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#training-andor-evalpredict-loss-is-nan"),h(ht,"class","relative group"),h(Pn,"id","notes"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#notes"),h(ft,"class","relative group"),h(Mc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(lp,"href","https://github.com/microsoft/deepspeed#installation"),h(lp,"rel","nofollow"),h(Zc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(rp,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(rp,"rel","nofollow"),h(Nc,"id","deepspeed-non-trainer-integration"),h(zn,"id","nontrainer-deepspeed-integration"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#nontrainer-deepspeed-integration"),h(mt,"class","relative group"),h(Hc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Bc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Vc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Jc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(cp,"href","https://www.deepspeed.ai/"),h(cp,"rel","nofollow"),h(An,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(An,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(_t,"class","relative group"),h(Xc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Qc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(js,"class","docstring"),h(Sn,"class","docstring"),h(Cn,"class","docstring"),h(xn,"class","docstring"),h(P,"class","docstring"),h(Rn,"id","custom-deepspeed-zero-inference"),h(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rn,"href","#custom-deepspeed-zero-inference"),h(wt,"class","relative group"),h(eh,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ln,"id","main-deepspeed-resources"),h(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ln,"href","#main-deepspeed-resources"),h(yt,"class","relative group"),h(Ep,"href","https://github.com/microsoft/deepspeed"),h(Ep,"rel","nofollow"),h(qp,"href","https://www.deepspeed.ai/getting-started/"),h(qp,"rel","nofollow"),h($p,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h($p,"rel","nofollow"),h(kp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(kp,"rel","nofollow"),h(Pp,"href","https://arxiv.org/abs/1910.02054"),h(Pp,"rel","nofollow"),h(Dp,"href","https://arxiv.org/abs/2101.06840"),h(Dp,"rel","nofollow"),h(zp,"href","https://arxiv.org/abs/2104.07857"),h(zp,"rel","nofollow"),h(lh,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Op,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Op,"rel","nofollow")},m(e,p){s(document.head,y),i(e,z,p),i(e,b,p),s(b,q),s(q,ee),m(O,ee,null),s(b,x),s(b,se),s(se,R),i(e,ae,p),i(e,C,p),s(C,E),s(E,$),s(C,qs),s(C,V),s(V,$s),s(C,L$),i(e,Bj,p),i(e,I,p),s(I,sf),s(sf,M$),s(I,Z$),s(I,tf),s(tf,N$),s(I,H$),s(I,af),s(af,B$),s(I,W$),s(I,nf),s(nf,F$),s(I,V$),s(I,of),s(of,Y$),s(I,K$),s(I,lf),s(lf,J$),i(e,Wj,p),i(e,Se,p),s(Se,X$),s(Se,ao),s(ao,Q$),s(Se,e4),s(Se,no),s(no,s4),s(Se,t4),i(e,Fj,p),i(e,Up,p),s(Up,a4),i(e,Vj,p),i(e,Gp,p),s(Gp,n4),i(e,Yj,p),i(e,Et,p),s(Et,o4),s(Et,oo),s(oo,l4),s(Et,r4),i(e,Kj,p),i(e,qt,p),s(qt,lo),s(lo,p4),s(lo,Lp),s(Lp,i4),s(lo,u4),s(qt,c4),s(qt,Y),s(Y,h4),s(Y,Mp),s(Mp,f4),s(Y,d4),s(Y,rf),s(rf,m4),s(Y,_4),s(Y,pf),s(pf,v4),s(Y,j4),s(Y,uf),s(uf,g4),s(Y,w4),s(Y,Zp),s(Zp,y4),s(Y,b4),i(e,Jj,p),i(e,Np,p),s(Np,E4),i(e,Xj,p),i(e,Hp,p),s(Hp,q4),i(e,Qj,p),i(e,Bp,p),s(Bp,cf),s(cf,$4),i(e,eg,p),i(e,Wp,p),s(Wp,k4),i(e,sg,p),i(e,Fp,p),s(Fp,ro),s(ro,P4),s(ro,Vp),s(Vp,D4),s(ro,z4),i(e,tg,p),i(e,Yp,p),s(Yp,O4),i(e,ag,p),i(e,Kp,p),i(e,ng,p),i(e,ks,p),s(ks,$t),s($t,hf),m(po,hf,null),s(ks,T4),s(ks,ff),s(ff,A4),i(e,og,p),i(e,Jp,p),i(e,lg,p),i(e,Ps,p),s(Ps,kt),s(kt,df),m(io,df,null),s(Ps,S4),s(Ps,mf),s(mf,C4),i(e,rg,p),i(e,Xp,p),s(Xp,x4),i(e,pg,p),m(uo,e,p),i(e,ig,p),i(e,Ce,p),s(Ce,R4),s(Ce,_f),s(_f,I4),s(Ce,U4),s(Ce,vf),s(vf,G4),s(Ce,L4),i(e,ug,p),m(co,e,p),i(e,cg,p),i(e,xe,p),s(xe,M4),s(xe,ho),s(ho,Z4),s(xe,N4),s(xe,fo),s(fo,H4),s(xe,B4),i(e,hg,p),i(e,Pt,p),s(Pt,W4),s(Pt,Qp),s(Qp,F4),s(Pt,V4),i(e,fg,p),i(e,ei,p),s(ei,Y4),i(e,dg,p),i(e,si,p),s(si,K4),i(e,mg,p),m(mo,e,p),i(e,_g,p),i(e,Re,p),s(Re,J4),s(Re,jf),s(jf,X4),s(Re,Q4),s(Re,gf),s(gf,e6),s(Re,s6),i(e,vg,p),i(e,Dt,p),s(Dt,t6),s(Dt,wf),s(wf,a6),s(Dt,n6),i(e,jg,p),m(_o,e,p),i(e,gg,p),i(e,Pe,p),s(Pe,o6),s(Pe,yf),s(yf,l6),s(Pe,r6),s(Pe,bf),s(bf,p6),s(Pe,i6),s(Pe,Ef),s(Ef,u6),i(e,wg,p),i(e,ti,p),s(ti,c6),i(e,yg,p),m(vo,e,p),i(e,bg,p),i(e,Ie,p),s(Ie,h6),s(Ie,qf),s(qf,f6),s(Ie,d6),s(Ie,$f),s($f,m6),s(Ie,_6),i(e,Eg,p),i(e,zt,p),s(zt,v6),s(zt,kf),s(kf,j6),s(zt,g6),i(e,qg,p),i(e,Ue,p),s(Ue,w6),s(Ue,Pf),s(Pf,y6),s(Ue,b6),s(Ue,jo),s(jo,E6),s(Ue,q6),i(e,$g,p),i(e,ai,p),s(ai,$6),i(e,kg,p),m(go,e,p),i(e,Pg,p),i(e,ni,p),s(ni,k6),i(e,Dg,p),m(wo,e,p),i(e,zg,p),i(e,oi,p),s(oi,P6),i(e,Og,p),m(yo,e,p),i(e,Tg,p),i(e,Ot,p),s(Ot,D6),s(Ot,Df),s(Df,z6),s(Ot,O6),i(e,Ag,p),i(e,Tt,p),s(Tt,T6),s(Tt,zf),s(zf,A6),s(Tt,S6),i(e,Sg,p),i(e,At,p),s(At,C6),s(At,bo),s(bo,x6),s(At,R6),i(e,Cg,p),i(e,li,p),i(e,xg,p),i(e,Ds,p),s(Ds,St),s(St,Of),m(Eo,Of,null),s(Ds,I6),s(Ds,Tf),s(Tf,U6),i(e,Rg,p),i(e,Ct,p),s(Ct,G6),s(Ct,ri),s(ri,L6),s(Ct,M6),i(e,Ig,p),i(e,xt,p),s(xt,zs),s(zs,Z6),s(zs,Af),s(Af,N6),s(zs,H6),s(zs,Sf),s(Sf,B6),s(zs,W6),s(xt,F6),s(xt,De),s(De,V6),s(De,Cf),s(Cf,Y6),s(De,K6),s(De,xf),s(xf,J6),s(De,X6),s(De,qo),s(qo,Q6),s(De,e5),i(e,Ug,p),i(e,pi,p),s(pi,s5),i(e,Gg,p),m($o,e,p),i(e,Lg,p),i(e,ii,p),s(ii,t5),i(e,Mg,p),m(ko,e,p),i(e,Zg,p),i(e,U,p),s(U,a5),s(U,Rf),s(Rf,n5),s(U,o5),s(U,If),s(If,l5),s(U,r5),s(U,Uf),s(Uf,p5),s(U,i5),s(U,Gf),s(Gf,u5),s(U,c5),s(U,Po),s(Po,h5),s(U,f5),i(e,Ng,p),i(e,ne,p),s(ne,d5),s(ne,Lf),s(Lf,m5),s(ne,_5),s(ne,Mf),s(Mf,v5),s(ne,j5),s(ne,Zf),s(Zf,g5),s(ne,w5),i(e,Hg,p),i(e,Rt,p),s(Rt,y5),s(Rt,Nf),s(Nf,b5),s(Rt,E5),i(e,Bg,p),m(Do,e,p),i(e,Wg,p),i(e,It,p),s(It,q5),s(It,Hf),s(Hf,$5),s(It,k5),i(e,Fg,p),i(e,Ut,p),s(Ut,P5),s(Ut,zo),s(zo,D5),s(Ut,z5),i(e,Vg,p),i(e,ui,p),i(e,Yg,p),i(e,Os,p),s(Os,Gt),s(Gt,Bf),m(Oo,Bf,null),s(Os,O5),s(Os,Wf),s(Wf,T5),i(e,Kg,p),i(e,Lt,p),s(Lt,A5),s(Lt,ci),s(ci,S5),s(Lt,C5),i(e,Jg,p),m(To,e,p),i(e,Xg,p),i(e,Ge,p),s(Ge,x5),s(Ge,Ff),s(Ff,R5),s(Ge,I5),s(Ge,Ao),s(Ao,U5),s(Ge,G5),i(e,Qg,p),i(e,hi,p),s(hi,L5),i(e,ew,p),i(e,Mt,p),s(Mt,Vf),s(Vf,M5),s(Mt,Z5),s(Mt,Yf),s(Yf,N5),i(e,sw,p),i(e,fi,p),s(fi,H5),i(e,tw,p),m(So,e,p),i(e,aw,p),i(e,di,p),s(di,B5),i(e,nw,p),i(e,Zt,p),s(Zt,W5),s(Zt,Co),s(Co,F5),s(Zt,V5),i(e,ow,p),i(e,mi,p),s(mi,Y5),i(e,lw,p),i(e,_i,p),s(_i,K5),i(e,rw,p),i(e,vi,p),s(vi,Ts),s(Ts,xo),s(xo,J5),s(xo,Kf),s(Kf,X5),s(xo,Q5),s(Ts,e8),m(Ro,Ts,null),s(Ts,s8),s(Ts,Jf),s(Jf,t8),i(e,pw,p),i(e,ji,p),i(e,iw,p),i(e,As,p),s(As,Nt),s(Nt,Xf),m(Io,Xf,null),s(As,a8),s(As,Qf),s(Qf,n8),i(e,uw,p),i(e,Ht,p),s(Ht,o8),s(Ht,ed),s(ed,l8),s(Ht,r8),i(e,cw,p),i(e,gi,p),s(gi,p8),i(e,hw,p),m(Uo,e,p),i(e,fw,p),i(e,Bt,p),s(Bt,i8),s(Bt,sd),s(sd,u8),s(Bt,c8),i(e,dw,p),i(e,wi,p),s(wi,h8),i(e,mw,p),i(e,yi,p),s(yi,f8),i(e,_w,p),m(Go,e,p),i(e,vw,p),i(e,Le,p),s(Le,d8),s(Le,td),s(td,m8),s(Le,_8),s(Le,ad),s(ad,v8),s(Le,j8),i(e,jw,p),m(Lo,e,p),i(e,gw,p),i(e,Wt,p),s(Wt,g8),s(Wt,nd),s(nd,w8),s(Wt,y8),i(e,ww,p),m(Mo,e,p),i(e,yw,p),i(e,bi,p),s(bi,b8),i(e,bw,p),i(e,Ft,p),s(Ft,E8),s(Ft,od),s(od,q8),s(Ft,$8),i(e,Ew,p),i(e,Ei,p),i(e,qw,p),i(e,Ss,p),s(Ss,Vt),s(Vt,ld),m(Zo,ld,null),s(Ss,k8),s(Ss,rd),s(rd,P8),i(e,$w,p),i(e,Yt,p),s(Yt,D8),s(Yt,No),s(No,z8),s(Yt,O8),i(e,kw,p),i(e,Kt,p),s(Kt,T8),s(Kt,Ho),s(Ho,A8),s(Kt,S8),i(e,Pw,p),m(Bo,e,p),i(e,Dw,p),i(e,Jt,p),s(Jt,C8),s(Jt,pd),s(pd,x8),s(Jt,R8),i(e,zw,p),m(Wo,e,p),i(e,Ow,p),i(e,Xt,p),s(Xt,I8),s(Xt,Fo),s(Fo,U8),s(Xt,G8),i(e,Tw,p),i(e,qi,p),s(qi,L8),i(e,Aw,p),i(e,oe,p),s(oe,M8),s(oe,id),s(id,Z8),s(oe,N8),s(oe,ud),s(ud,H8),s(oe,B8),s(oe,cd),s(cd,W8),s(oe,F8),i(e,Sw,p),m(Vo,e,p),i(e,Cw,p),i(e,Qt,p),s(Qt,V8),s(Qt,$i),s($i,Y8),s(Qt,K8),i(e,xw,p),i(e,ki,p),i(e,Rw,p),i(e,Cs,p),s(Cs,ea),s(ea,hd),m(Yo,hd,null),s(Cs,J8),s(Cs,fd),s(fd,X8),i(e,Iw,p),i(e,G,p),s(G,Q8),s(G,Pi),s(Pi,ek),s(G,sk),s(G,Di),s(Di,tk),s(G,ak),s(G,dd),s(dd,nk),s(G,ok),s(G,md),s(md,lk),s(G,rk),s(G,zi),s(zi,pk),s(G,ik),i(e,Uw,p),i(e,Oi,p),s(Oi,uk),i(e,Gw,p),m(Ko,e,p),i(e,Lw,p),i(e,Ti,p),s(Ti,ck),i(e,Mw,p),m(Jo,e,p),i(e,Zw,p),i(e,Ai,p),i(e,Nw,p),i(e,xs,p),s(xs,sa),s(sa,_d),m(Xo,_d,null),s(xs,hk),s(xs,vd),s(vd,fk),i(e,Hw,p),m(ta,e,p),i(e,Bw,p),i(e,Me,p),s(Me,dk),s(Me,Si),s(Si,mk),s(Me,_k),s(Me,Ci),s(Ci,vk),s(Me,jk),i(e,Ww,p),i(e,aa,p),s(aa,gk),s(aa,xi),s(xi,wk),s(aa,yk),i(e,Fw,p),i(e,Ze,p),s(Ze,bk),s(Ze,jd),s(jd,Ek),s(Ze,qk),s(Ze,Ri),s(Ri,$k),s(Ze,kk),i(e,Vw,p),i(e,Ii,p),s(Ii,Pk),i(e,Yw,p),i(e,na,p),s(na,Dk),s(na,Ui),s(Ui,zk),s(na,Ok),i(e,Kw,p),i(e,oa,p),s(oa,gd),s(gd,Tk),s(oa,Ak),s(oa,Qo),s(Qo,Sk),s(Qo,Gi),s(Gi,Ck),s(Qo,xk),i(e,Jw,p),i(e,le,p),s(le,Rk),s(le,wd),s(wd,Ik),s(le,Uk),s(le,Li),s(Li,Gk),s(le,Lk),s(le,yd),s(yd,Mk),s(le,Zk),i(e,Xw,p),i(e,Mi,p),i(e,Qw,p),i(e,Rs,p),s(Rs,la),s(la,bd),m(el,bd,null),s(Rs,Nk),s(Rs,Ed),s(Ed,Hk),i(e,ey,p),i(e,sl,p),s(sl,tl),s(tl,Bk),s(sl,Wk),i(e,sy,p),i(e,Ne,p),s(Ne,Fk),s(Ne,qd),s(qd,Vk),s(Ne,Yk),s(Ne,al),s(al,Kk),s(Ne,Jk),i(e,ty,p),i(e,ra,p),s(ra,Xk),s(ra,Zi),s(Zi,Qk),s(ra,e7),i(e,ay,p),i(e,Ni,p),s(Ni,s7),i(e,ny,p),i(e,Hi,p),i(e,oy,p),i(e,Is,p),s(Is,pa),s(pa,$d),m(nl,$d,null),s(Is,t7),s(Is,kd),s(kd,a7),i(e,ly,p),i(e,Bi,p),s(Bi,n7),i(e,ry,p),m(ol,e,p),i(e,py,p),i(e,Wi,p),s(Wi,Pd),s(Pd,o7),i(e,iy,p),i(e,He,p),s(He,Us),s(Us,l7),s(Us,Dd),s(Dd,r7),s(Us,p7),s(Us,zd),s(zd,i7),s(Us,u7),s(He,c7),s(He,L),s(L,Od),s(Od,h7),s(L,f7),s(L,Td),s(Td,d7),s(L,m7),s(L,Ad),s(Ad,_7),s(L,v7),s(L,Sd),s(Sd,j7),s(L,g7),s(L,Cd),s(Cd,w7),s(L,y7),s(L,xd),s(xd,b7),s(L,E7),s(He,q7),s(He,Rd),s(Rd,$7),i(e,uy,p),i(e,Be,p),s(Be,k7),s(Be,Id),s(Id,P7),s(Be,D7),s(Be,Ud),s(Ud,z7),s(Be,O7),i(e,cy,p),m(ll,e,p),i(e,hy,p),i(e,Fi,p),s(Fi,T7),i(e,fy,p),i(e,Vi,p),i(e,dy,p),i(e,Gs,p),s(Gs,ia),s(ia,Gd),m(rl,Gd,null),s(Gs,A7),s(Gs,Ld),s(Ld,S7),i(e,my,p),i(e,Yi,p),s(Yi,C7),i(e,_y,p),m(pl,e,p),i(e,vy,p),i(e,K,p),s(K,x7),s(K,Md),s(Md,R7),s(K,I7),s(K,Zd),s(Zd,U7),s(K,G7),s(K,Nd),s(Nd,L7),s(K,M7),s(K,Hd),s(Hd,Z7),s(K,N7),i(e,jy,p),i(e,We,p),s(We,H7),s(We,Bd),s(Bd,B7),s(We,W7),s(We,Wd),s(Wd,F7),s(We,V7),i(e,gy,p),i(e,Ki,p),s(Ki,Fd),s(Fd,Y7),i(e,wy,p),i(e,ua,p),s(ua,il),s(il,Vd),s(Vd,K7),s(il,J7),s(il,Yd),s(Yd,X7),s(ua,Q7),s(ua,ul),s(ul,Kd),s(Kd,e9),s(ul,s9),s(ul,Jd),s(Jd,t9),i(e,yy,p),i(e,M,p),s(M,a9),s(M,Xd),s(Xd,n9),s(M,o9),s(M,Qd),s(Qd,l9),s(M,r9),s(M,em),s(em,p9),s(M,i9),s(M,sm),s(sm,u9),s(M,c9),s(M,tm),s(tm,h9),s(M,f9),i(e,by,p),i(e,ze,p),s(ze,am),s(am,d9),s(ze,m9),s(ze,nm),s(nm,_9),s(ze,v9),s(ze,om),s(om,j9),s(ze,g9),i(e,Ey,p),i(e,Ji,p),s(Ji,w9),i(e,qy,p),i(e,Fe,p),s(Fe,cl),s(cl,lm),s(lm,y9),s(cl,b9),s(cl,rm),s(rm,E9),s(Fe,q9),s(Fe,hl),s(hl,pm),s(pm,$9),s(hl,k9),s(hl,im),s(im,P9),s(Fe,D9),s(Fe,fl),s(fl,um),s(um,z9),s(fl,O9),s(fl,cm),s(cm,T9),i(e,$y,p),i(e,Ve,p),s(Ve,A9),s(Ve,hm),s(hm,S9),s(Ve,C9),s(Ve,Xi),s(Xi,x9),s(Ve,R9),i(e,ky,p),i(e,dl,p),s(dl,fm),s(fm,I9),s(dl,U9),i(e,Py,p),i(e,re,p),s(re,G9),s(re,dm),s(dm,L9),s(re,M9),s(re,mm),s(mm,Z9),s(re,N9),s(re,_m),s(_m,H9),s(re,B9),i(e,Dy,p),i(e,Qi,p),s(Qi,ml),s(ml,vm),s(vm,W9),s(ml,F9),s(ml,jm),s(jm,V9),i(e,zy,p),i(e,Oe,p),s(Oe,gm),s(gm,Y9),s(Oe,K9),s(Oe,wm),s(wm,J9),s(Oe,X9),s(Oe,ym),s(ym,Q9),s(Oe,eP),i(e,Oy,p),i(e,Ye,p),s(Ye,sP),s(Ye,bm),s(bm,tP),s(Ye,aP),s(Ye,Em),s(Em,nP),s(Ye,oP),i(e,Ty,p),i(e,ca,p),s(ca,_l),s(_l,lP),s(_l,qm),s(qm,rP),s(_l,pP),s(ca,iP),s(ca,vl),s(vl,uP),s(vl,$m),s($m,cP),s(vl,hP),i(e,Ay,p),i(e,eu,p),i(e,Sy,p),i(e,Ls,p),s(Ls,ha),s(ha,km),m(jl,km,null),s(Ls,fP),s(Ls,Pm),s(Pm,dP),i(e,Cy,p),i(e,su,p),s(su,mP),i(e,xy,p),i(e,tu,p),s(tu,_P),i(e,Ry,p),m(gl,e,p),i(e,Iy,p),i(e,fa,p),s(fa,vP),s(fa,Dm),s(Dm,jP),s(fa,gP),i(e,Uy,p),i(e,Ke,p),s(Ke,wP),s(Ke,wl),s(wl,yP),s(Ke,bP),s(Ke,yl),s(yl,EP),s(Ke,qP),i(e,Gy,p),i(e,da,p),s(da,$P),s(da,zm),s(zm,kP),s(da,PP),i(e,Ly,p),i(e,Je,p),s(Je,DP),s(Je,Om),s(Om,zP),s(Je,OP),s(Je,bl),s(bl,TP),s(Je,AP),i(e,My,p),i(e,au,p),i(e,Zy,p),i(e,Ms,p),s(Ms,ma),s(ma,Tm),m(El,Tm,null),s(Ms,SP),s(Ms,Am),s(Am,CP),i(e,Ny,p),i(e,nu,p),s(nu,xP),i(e,Hy,p),i(e,ou,p),s(ou,RP),i(e,By,p),i(e,_a,p),s(_a,Zs),s(Zs,IP),s(Zs,Sm),s(Sm,UP),s(Zs,GP),s(Zs,Cm),s(Cm,LP),s(Zs,MP),s(_a,ZP),s(_a,ql),s(ql,NP),s(ql,xm),s(xm,HP),s(ql,BP),i(e,Wy,p),i(e,Xe,p),s(Xe,WP),s(Xe,Rm),s(Rm,FP),s(Xe,VP),s(Xe,Im),s(Im,YP),s(Xe,KP),i(e,Fy,p),i(e,lu,p),i(e,Vy,p),i(e,Ns,p),s(Ns,va),s(va,Um),m($l,Um,null),s(Ns,JP),s(Ns,Gm),s(Gm,XP),i(e,Yy,p),i(e,ja,p),s(ja,QP),s(ja,Lm),s(Lm,eD),s(ja,sD),i(e,Ky,p),m(kl,e,p),i(e,Jy,p),i(e,ga,p),s(ga,tD),s(ga,Mm),s(Mm,aD),s(ga,nD),i(e,Xy,p),m(Pl,e,p),i(e,Qy,p),i(e,ru,p),i(e,e2,p),i(e,Hs,p),s(Hs,wa),s(wa,Zm),m(Dl,Zm,null),s(Hs,oD),s(Hs,Nm),s(Nm,lD),i(e,s2,p),i(e,ya,p),s(ya,rD),s(ya,Hm),s(Hm,pD),s(ya,iD),i(e,t2,p),m(zl,e,p),i(e,a2,p),i(e,ba,p),s(ba,uD),s(ba,Bm),s(Bm,cD),s(ba,hD),i(e,n2,p),m(Ol,e,p),i(e,o2,p),i(e,Bs,p),s(Bs,Ea),s(Ea,Wm),m(Tl,Wm,null),s(Bs,fD),s(Bs,Fm),s(Fm,dD),i(e,l2,p),i(e,qa,p),s(qa,mD),s(qa,Vm),s(Vm,_D),s(qa,vD),i(e,r2,p),i(e,pu,p),s(pu,jD),i(e,p2,p),i(e,$a,p),s($a,gD),s($a,Ym),s(Ym,wD),s($a,yD),i(e,i2,p),i(e,iu,p),i(e,u2,p),i(e,Ws,p),s(Ws,ka),s(ka,Km),m(Al,Km,null),s(Ws,bD),s(Ws,Jm),s(Jm,ED),i(e,c2,p),i(e,Qe,p),s(Qe,qD),s(Qe,Xm),s(Xm,$D),s(Qe,kD),s(Qe,Sl),s(Sl,PD),s(Qe,DD),i(e,h2,p),i(e,k,p),s(k,zD),s(k,Qm),s(Qm,OD),s(k,TD),s(k,uu),s(uu,AD),s(k,SD),s(k,e_),s(e_,CD),s(k,xD),s(k,s_),s(s_,RD),s(k,ID),s(k,t_),s(t_,UD),s(k,GD),s(k,a_),s(a_,LD),s(k,MD),s(k,n_),s(n_,ZD),s(k,ND),s(k,o_),s(o_,HD),s(k,BD),i(e,f2,p),i(e,es,p),s(es,WD),s(es,l_),s(l_,FD),s(es,VD),s(es,r_),s(r_,YD),s(es,KD),i(e,d2,p),m(Cl,e,p),i(e,m2,p),i(e,cu,p),s(cu,JD),i(e,_2,p),i(e,pe,p),s(pe,xl),s(xl,p_),s(p_,XD),s(xl,QD),s(xl,i_),s(i_,ez),s(pe,sz),s(pe,Rl),s(Rl,u_),s(u_,tz),s(Rl,az),s(Rl,c_),s(c_,nz),s(pe,oz),s(pe,Il),s(Il,h_),s(h_,lz),s(Il,rz),s(Il,f_),s(f_,pz),s(pe,iz),s(pe,Ul),s(Ul,d_),s(d_,uz),s(Ul,cz),s(Ul,m_),s(m_,hz),i(e,v2,p),i(e,hu,p),s(hu,fz),i(e,j2,p),i(e,fu,p),s(fu,dz),i(e,g2,p),m(Gl,e,p),i(e,w2,p),i(e,Pa,p),s(Pa,mz),s(Pa,du),s(du,_z),s(Pa,vz),i(e,y2,p),i(e,mu,p),s(mu,jz),i(e,b2,p),m(Ll,e,p),i(e,E2,p),i(e,ie,p),s(ie,gz),s(ie,__),s(__,wz),s(ie,yz),s(ie,v_),s(v_,bz),s(ie,Ez),s(ie,j_),s(j_,qz),s(ie,$z),i(e,q2,p),i(e,_u,p),i(e,$2,p),i(e,Fs,p),s(Fs,Da),s(Da,g_),m(Ml,g_,null),s(Fs,kz),s(Fs,w_),s(w_,Pz),i(e,k2,p),i(e,Z,p),s(Z,Dz),s(Z,y_),s(y_,zz),s(Z,Oz),s(Z,b_),s(b_,Tz),s(Z,Az),s(Z,E_),s(E_,Sz),s(Z,Cz),s(Z,q_),s(q_,xz),s(Z,Rz),s(Z,Zl),s(Zl,Iz),s(Z,Uz),i(e,P2,p),i(e,vu,p),s(vu,Gz),i(e,D2,p),i(e,za,p),s(za,Nl),s(Nl,$_),s($_,Lz),s(Nl,Mz),s(Nl,k_),s(k_,Zz),s(za,Nz),s(za,ss),s(ss,P_),s(P_,Hz),s(ss,Bz),s(ss,D_),s(D_,Wz),s(ss,Fz),s(ss,z_),s(z_,Vz),s(ss,Yz),i(e,z2,p),i(e,T,p),s(T,Kz),s(T,O_),s(O_,Jz),s(T,Xz),s(T,ju),s(ju,Qz),s(T,eO),s(T,T_),s(T_,sO),s(T,tO),s(T,A_),s(A_,aO),s(T,nO),s(T,S_),s(S_,oO),s(T,lO),s(T,C_),s(C_,rO),s(T,pO),i(e,O2,p),i(e,ts,p),s(ts,iO),s(ts,x_),s(x_,uO),s(ts,cO),s(ts,R_),s(R_,hO),s(ts,fO),i(e,T2,p),m(Hl,e,p),i(e,A2,p),i(e,as,p),s(as,dO),s(as,I_),s(I_,mO),s(as,_O),s(as,gu),s(gu,vO),s(as,jO),i(e,S2,p),i(e,ue,p),s(ue,Oa),s(Oa,U_),s(U_,gO),s(Oa,wO),s(Oa,G_),s(G_,yO),s(Oa,bO),s(ue,EO),s(ue,Ta),s(Ta,L_),s(L_,qO),s(Ta,$O),s(Ta,M_),s(M_,kO),s(Ta,PO),s(ue,DO),s(ue,ns),s(ns,Z_),s(Z_,zO),s(ns,OO),s(ns,N_),s(N_,TO),s(ns,AO),s(ns,H_),s(H_,SO),s(ns,CO),s(ue,xO),s(ue,os),s(os,B_),s(B_,RO),s(os,IO),s(os,W_),s(W_,UO),s(os,GO),s(os,F_),s(F_,LO),s(os,MO),i(e,C2,p),i(e,wu,p),s(wu,ZO),i(e,x2,p),m(Bl,e,p),i(e,R2,p),i(e,Aa,p),s(Aa,NO),s(Aa,yu),s(yu,HO),s(Aa,BO),i(e,I2,p),i(e,Sa,p),s(Sa,WO),s(Sa,V_),s(V_,FO),s(Sa,VO),i(e,U2,p),m(Wl,e,p),i(e,G2,p),i(e,J,p),s(J,YO),s(J,Y_),s(Y_,KO),s(J,JO),s(J,K_),s(K_,XO),s(J,QO),s(J,J_),s(J_,eT),s(J,sT),s(J,X_),s(X_,tT),s(J,aT),i(e,L2,p),i(e,bu,p),i(e,M2,p),i(e,Vs,p),s(Vs,Ca),s(Ca,Q_),m(Fl,Q_,null),s(Vs,nT),s(Vs,e1),s(e1,oT),i(e,Z2,p),i(e,Eu,p),s(Eu,lT),i(e,N2,p),i(e,xa,p),s(xa,rT),s(xa,s1),s(s1,pT),s(xa,iT),i(e,H2,p),m(Vl,e,p),i(e,B2,p),i(e,Ra,p),s(Ra,uT),s(Ra,Yl),s(Yl,cT),s(Ra,hT),i(e,W2,p),i(e,ce,p),s(ce,fT),s(ce,t1),s(t1,dT),s(ce,mT),s(ce,a1),s(a1,_T),s(ce,vT),s(ce,n1),s(n1,jT),s(ce,gT),i(e,F2,p),i(e,qu,p),i(e,V2,p),i(e,Ys,p),s(Ys,Ia),s(Ia,o1),m(Kl,o1,null),s(Ys,wT),s(Ys,l1),s(l1,yT),i(e,Y2,p),i(e,$u,p),s($u,bT),i(e,K2,p),i(e,Ks,p),s(Ks,Ua),s(Ua,r1),m(Jl,r1,null),s(Ks,ET),s(Ks,p1),s(p1,qT),i(e,J2,p),i(e,ku,p),s(ku,$T),i(e,X2,p),m(Xl,e,p),i(e,Q2,p),i(e,ls,p),s(ls,kT),s(ls,Pu),s(Pu,PT),s(ls,DT),s(ls,i1),s(i1,zT),s(ls,OT),i(e,eb,p),i(e,rs,p),s(rs,TT),s(rs,u1),s(u1,AT),s(rs,ST),s(rs,c1),s(c1,CT),s(rs,xT),i(e,sb,p),i(e,Du,p),s(Du,RT),i(e,tb,p),m(Ql,e,p),i(e,ab,p),i(e,Ga,p),s(Ga,IT),s(Ga,zu),s(zu,UT),s(Ga,GT),i(e,nb,p),i(e,La,p),s(La,LT),s(La,er),s(er,MT),s(La,ZT),i(e,ob,p),i(e,Js,p),s(Js,Ma),s(Ma,h1),m(sr,h1,null),s(Js,NT),s(Js,f1),s(f1,HT),i(e,lb,p),i(e,Ou,p),s(Ou,BT),i(e,rb,p),m(tr,e,p),i(e,pb,p),i(e,Tu,p),s(Tu,WT),i(e,ib,p),i(e,ps,p),s(ps,FT),s(ps,d1),s(d1,VT),s(ps,YT),s(ps,m1),s(m1,KT),s(ps,JT),i(e,ub,p),i(e,Au,p),s(Au,XT),i(e,cb,p),m(ar,e,p),i(e,hb,p),m(Za,e,p),i(e,fb,p),i(e,Xs,p),s(Xs,Na),s(Na,_1),m(nr,_1,null),s(Xs,QT),s(Xs,v1),s(v1,eA),i(e,db,p),i(e,Su,p),s(Su,sA),i(e,mb,p),m(or,e,p),i(e,_b,p),i(e,he,p),s(he,tA),s(he,Cu),s(Cu,aA),s(he,nA),s(he,j1),s(j1,oA),s(he,lA),s(he,g1),s(g1,rA),s(he,pA),i(e,vb,p),i(e,Ha,p),s(Ha,iA),s(Ha,w1),s(w1,uA),s(Ha,cA),i(e,jb,p),i(e,xu,p),s(xu,hA),i(e,gb,p),m(lr,e,p),i(e,wb,p),i(e,Ba,p),s(Ba,fA),s(Ba,Ru),s(Ru,dA),s(Ba,mA),i(e,yb,p),i(e,Wa,p),s(Wa,_A),s(Wa,rr),s(rr,vA),s(Wa,jA),i(e,bb,p),i(e,Iu,p),i(e,Eb,p),i(e,Qs,p),s(Qs,Fa),s(Fa,y1),m(pr,y1,null),s(Qs,gA),s(Qs,b1),s(b1,wA),i(e,qb,p),i(e,Uu,p),s(Uu,yA),i(e,$b,p),m(ir,e,p),i(e,kb,p),i(e,N,p),s(N,bA),s(N,Gu),s(Gu,EA),s(N,qA),s(N,E1),s(E1,$A),s(N,kA),s(N,q1),s(q1,PA),s(N,DA),s(N,$1),s($1,zA),s(N,OA),s(N,k1),s(k1,TA),s(N,AA),i(e,Pb,p),i(e,Lu,p),s(Lu,SA),i(e,Db,p),m(ur,e,p),i(e,zb,p),i(e,Va,p),s(Va,CA),s(Va,Mu),s(Mu,xA),s(Va,RA),i(e,Ob,p),i(e,Zu,p),i(e,Tb,p),i(e,et,p),s(et,Ya),s(Ya,P1),m(cr,P1,null),s(et,IA),s(et,D1),s(D1,UA),i(e,Ab,p),i(e,Nu,p),s(Nu,GA),i(e,Sb,p),m(hr,e,p),i(e,Cb,p),i(e,is,p),s(is,LA),s(is,Hu),s(Hu,MA),s(is,ZA),s(is,z1),s(z1,NA),s(is,HA),i(e,xb,p),i(e,Bu,p),s(Bu,BA),i(e,Rb,p),m(fr,e,p),i(e,Ib,p),i(e,Ka,p),s(Ka,WA),s(Ka,Wu),s(Wu,FA),s(Ka,VA),i(e,Ub,p),i(e,Fu,p),i(e,Gb,p),i(e,st,p),s(st,Ja),s(Ja,O1),m(dr,O1,null),s(st,YA),s(st,T1),s(T1,KA),i(e,Lb,p),i(e,Vu,p),s(Vu,JA),i(e,Mb,p),m(mr,e,p),i(e,Zb,p),i(e,us,p),s(us,XA),s(us,Yu),s(Yu,QA),s(us,eS),s(us,A1),s(A1,sS),s(us,tS),i(e,Nb,p),i(e,Ku,p),s(Ku,aS),i(e,Hb,p),m(_r,e,p),i(e,Bb,p),i(e,Xa,p),s(Xa,nS),s(Xa,Ju),s(Ju,oS),s(Xa,lS),i(e,Wb,p),i(e,Xu,p),i(e,Fb,p),i(e,tt,p),s(tt,Qa),s(Qa,S1),m(vr,S1,null),s(tt,rS),s(tt,C1),s(C1,pS),i(e,Vb,p),i(e,en,p),s(en,iS),s(en,x1),s(x1,uS),s(en,cS),i(e,Yb,p),i(e,Qu,p),s(Qu,R1),s(R1,hS),i(e,Kb,p),i(e,sn,p),s(sn,fS),s(sn,I1),s(I1,dS),s(sn,mS),i(e,Jb,p),i(e,A,p),s(A,_S),s(A,U1),s(U1,vS),s(A,jS),s(A,G1),s(G1,gS),s(A,wS),s(A,L1),s(L1,yS),s(A,bS),s(A,M1),s(M1,ES),s(A,qS),s(A,Z1),s(Z1,$S),s(A,kS),s(A,N1),s(N1,PS),s(A,DS),i(e,Xb,p),m(jr,e,p),i(e,Qb,p),i(e,ec,p),s(ec,H1),s(H1,zS),i(e,e3,p),i(e,tn,p),s(tn,OS),s(tn,gr),s(gr,TS),s(tn,AS),i(e,s3,p),i(e,sc,p),s(sc,B1),s(B1,SS),i(e,t3,p),i(e,tc,p),s(tc,CS),i(e,a3,p),i(e,ac,p),s(ac,xS),i(e,n3,p),m(wr,e,p),i(e,o3,p),i(e,cs,p),s(cs,RS),s(cs,W1),s(W1,IS),s(cs,US),s(cs,F1),s(F1,GS),s(cs,LS),i(e,l3,p),m(yr,e,p),i(e,r3,p),m(an,e,p),i(e,p3,p),i(e,nn,p),s(nn,MS),s(nn,V1),s(V1,ZS),s(nn,NS),i(e,i3,p),i(e,on,p),s(on,HS),s(on,Y1),s(Y1,BS),s(on,WS),i(e,u3,p),m(br,e,p),i(e,c3,p),i(e,nc,p),s(nc,K1),s(K1,FS),i(e,h3,p),i(e,hs,p),s(hs,VS),s(hs,J1),s(J1,YS),s(hs,KS),s(hs,X1),s(X1,JS),s(hs,XS),i(e,f3,p),i(e,oc,p),s(oc,QS),i(e,d3,p),m(Er,e,p),i(e,m3,p),i(e,ln,p),s(ln,eC),s(ln,Q1),s(Q1,sC),s(ln,tC),i(e,_3,p),m(qr,e,p),i(e,v3,p),i(e,rn,p),s(rn,aC),s(rn,ev),s(ev,nC),s(rn,oC),i(e,j3,p),i(e,lc,p),s(lc,lC),i(e,g3,p),i(e,$r,p),s($r,sv),s(sv,rC),s($r,pC),i(e,w3,p),i(e,fs,p),s(fs,iC),s(fs,tv),s(tv,uC),s(fs,cC),s(fs,av),s(av,hC),s(fs,fC),i(e,y3,p),i(e,rc,p),s(rc,dC),i(e,b3,p),i(e,at,p),s(at,pn),s(pn,nv),m(kr,nv,null),s(at,mC),s(at,ov),s(ov,_C),i(e,E3,p),i(e,pc,p),s(pc,vC),i(e,q3,p),i(e,ic,p),s(ic,jC),i(e,$3,p),i(e,uc,p),s(uc,gC),i(e,k3,p),i(e,nt,p),s(nt,un),s(un,lv),m(Pr,lv,null),s(nt,wC),s(nt,rv),s(rv,yC),i(e,P3,p),i(e,cn,p),s(cn,bC),s(cn,pv),s(pv,EC),s(cn,qC),i(e,D3,p),m(Dr,e,p),i(e,z3,p),i(e,cc,p),s(cc,$C),i(e,O3,p),i(e,D,p),s(D,kC),s(D,iv),s(iv,PC),s(D,DC),s(D,uv),s(uv,zC),s(D,OC),s(D,cv),s(cv,TC),s(D,AC),s(D,hc),s(hc,SC),s(D,CC),s(D,fc),s(fc,xC),s(D,RC),s(D,hv),s(hv,IC),s(D,UC),s(D,fv),s(fv,GC),s(D,LC),i(e,T3,p),m(zr,e,p),i(e,A3,p),i(e,hn,p),s(hn,MC),s(hn,dv),s(dv,ZC),s(hn,NC),i(e,S3,p),i(e,dc,p),s(dc,HC),i(e,C3,p),i(e,fn,p),s(fn,BC),s(fn,Or),s(Or,WC),s(fn,FC),i(e,x3,p),i(e,fe,p),s(fe,VC),s(fe,mv),s(mv,YC),s(fe,KC),s(fe,_v),s(_v,JC),s(fe,XC),s(fe,mc),s(mc,QC),s(fe,ex),i(e,R3,p),i(e,ot,p),s(ot,dn),s(dn,vv),m(Tr,vv,null),s(ot,sx),s(ot,jv),s(jv,tx),i(e,I3,p),i(e,Ar,p),s(Ar,ax),s(Ar,Sr),s(Sr,nx),i(e,U3,p),i(e,mn,p),s(mn,ox),s(mn,gv),s(gv,lx),s(mn,rx),i(e,G3,p),i(e,_c,p),s(_c,px),i(e,L3,p),m(Cr,e,p),i(e,M3,p),i(e,ds,p),s(ds,ix),s(ds,wv),s(wv,ux),s(ds,cx),s(ds,yv),s(yv,hx),s(ds,fx),i(e,Z3,p),i(e,vc,p),i(e,N3,p),i(e,lt,p),s(lt,_n),s(_n,bv),m(xr,bv,null),s(lt,dx),s(lt,Ev),s(Ev,mx),i(e,H3,p),i(e,jc,p),s(jc,_x),i(e,B3,p),i(e,vn,p),s(vn,vx),s(vn,gc),s(gc,jx),s(vn,gx),i(e,W3,p),m(Rr,e,p),i(e,F3,p),i(e,wc,p),s(wc,wx),i(e,V3,p),i(e,jn,p),s(jn,yx),s(jn,qv),s(qv,bx),s(jn,Ex),i(e,Y3,p),m(Ir,e,p),i(e,K3,p),i(e,yc,p),s(yc,qx),i(e,J3,p),i(e,bc,p),s(bc,$x),i(e,X3,p),i(e,rt,p),s(rt,gn),s(gn,$v),m(Ur,$v,null),s(rt,kx),s(rt,kv),s(kv,Px),i(e,Q3,p),i(e,Ec,p),s(Ec,Dx),i(e,e0,p),i(e,qc,p),s(qc,zx),i(e,s0,p),m(Gr,e,p),i(e,t0,p),i(e,$c,p),s($c,Ox),i(e,a0,p),i(e,kc,p),s(kc,Tx),i(e,n0,p),i(e,Pc,p),s(Pc,Ax),i(e,o0,p),i(e,Dc,p),s(Dc,Sx),i(e,l0,p),m(Lr,e,p),i(e,r0,p),i(e,zc,p),s(zc,Cx),i(e,p0,p),i(e,wn,p),s(wn,xx),s(wn,Mr),s(Mr,Rx),s(wn,Ix),i(e,i0,p),i(e,pt,p),s(pt,yn),s(yn,Pv),m(Zr,Pv,null),s(pt,Ux),s(pt,Dv),s(Dv,Gx),i(e,u0,p),i(e,Oc,p),s(Oc,Lx),i(e,c0,p),i(e,Tc,p),s(Tc,Mx),i(e,h0,p),i(e,H,p),s(H,zv),s(zv,Ov),s(Ov,Zx),s(H,Nx),s(H,Tv),s(Tv,Te),s(Te,Hx),s(Te,Ac),s(Ac,Bx),s(Te,Wx),s(Te,Sc),s(Sc,Fx),s(Te,Vx),s(Te,Cc),s(Cc,Yx),s(Te,Kx),s(H,Jx),s(H,Nr),s(Nr,Av),s(Av,Xx),s(Nr,Qx),m(Hr,Nr,null),s(H,eR),s(H,Sv),s(Sv,Br),s(Br,sR),s(Br,Wr),s(Wr,tR),s(Br,aR),s(H,nR),s(H,Cv),s(Cv,xv),s(xv,oR),s(H,lR),s(H,Rv),s(Rv,Fr),s(Fr,rR),s(Fr,Vr),s(Vr,pR),s(Fr,iR),i(e,f0,p),i(e,xc,p),s(xc,uR),i(e,d0,p),i(e,bn,p),s(bn,it),s(it,Iv),s(Iv,cR),s(it,hR),s(it,Uv),s(Uv,fR),s(it,dR),s(it,Gv),s(Gv,mR),s(bn,_R),s(bn,Lv),s(Lv,Yr),s(Yr,vR),s(Yr,Kr),s(Kr,jR),s(Yr,gR),i(e,m0,p),i(e,ut,p),s(ut,En),s(En,Mv),m(Jr,Mv,null),s(ut,wR),s(ut,Zv),s(Zv,yR),i(e,_0,p),i(e,ct,p),s(ct,qn),s(qn,Nv),m(Xr,Nv,null),s(ct,bR),s(ct,Qr),s(Qr,ER),s(Qr,Hv),s(Hv,qR),s(Qr,$R),i(e,v0,p),i(e,B,p),s(B,kR),s(B,Bv),s(Bv,PR),s(B,DR),s(B,Wv),s(Wv,zR),s(B,OR),s(B,Fv),s(Fv,TR),s(B,AR),s(B,Vv),s(Vv,SR),s(B,CR),s(B,ep),s(ep,xR),s(B,RR),i(e,j0,p),i(e,ht,p),s(ht,$n),s($n,Yv),m(sp,Yv,null),s(ht,IR),s(ht,Rc),s(Rc,UR),s(Rc,Kv),s(Kv,GR),i(e,g0,p),i(e,Ic,p),s(Ic,LR),i(e,w0,p),i(e,Uc,p),s(Uc,MR),i(e,y0,p),m(tp,e,p),i(e,b0,p),i(e,kn,p),s(kn,ZR),s(kn,Jv),s(Jv,NR),s(kn,HR),i(e,E0,p),m(ap,e,p),i(e,q0,p),i(e,Gc,p),s(Gc,BR),i(e,$0,p),i(e,Lc,p),s(Lc,WR),i(e,k0,p),i(e,ms,p),s(ms,FR),s(ms,Xv),s(Xv,VR),s(ms,YR),s(ms,Qv),s(Qv,KR),s(ms,JR),i(e,P0,p),i(e,ft,p),s(ft,Pn),s(Pn,ej),m(np,ej,null),s(ft,XR),s(ft,sj),s(sj,QR),i(e,D0,p),i(e,_s,p),s(_s,Dn),s(Dn,eI),s(Dn,Mc),s(Mc,sI),s(Dn,tI),s(Dn,tj),s(tj,aI),s(_s,nI),s(_s,op),s(op,oI),s(op,lp),s(lp,lI),s(op,rI),s(_s,pI),s(_s,dt),s(dt,iI),s(dt,Zc),s(Zc,uI),s(dt,cI),s(dt,rp),s(rp,hI),s(dt,fI),i(e,z0,p),i(e,Nc,p),i(e,O0,p),i(e,mt,p),s(mt,zn),s(zn,aj),m(pp,aj,null),s(mt,dI),s(mt,nj),s(nj,mI),i(e,T0,p),i(e,de,p),s(de,_I),s(de,Hc),s(Hc,vI),s(de,jI),s(de,Bc),s(Bc,gI),s(de,wI),s(de,oj),s(oj,yI),s(de,bI),i(e,A0,p),i(e,On,p),s(On,EI),s(On,Wc),s(Wc,qI),s(On,$I),i(e,S0,p),i(e,vs,p),s(vs,kI),s(vs,Fc),s(Fc,PI),s(vs,DI),s(vs,Vc),s(Vc,zI),s(vs,OI),i(e,C0,p),i(e,Tn,p),s(Tn,TI),s(Tn,lj),s(lj,AI),s(Tn,SI),i(e,x0,p),i(e,Yc,p),s(Yc,CI),i(e,R0,p),m(ip,e,p),i(e,I0,p),i(e,Kc,p),s(Kc,xI),i(e,U0,p),m(up,e,p),i(e,G0,p),i(e,me,p),s(me,RI),s(me,Jc),s(Jc,II),s(me,UI),s(me,cp),s(cp,GI),s(me,LI),s(me,rj),s(rj,MI),s(me,ZI),i(e,L0,p),i(e,_t,p),s(_t,An),s(An,pj),m(hp,pj,null),s(_t,NI),s(_t,ij),s(ij,HI),i(e,M0,p),i(e,P,p),m(fp,P,null),s(P,BI),s(P,uj),s(uj,WI),s(P,FI),s(P,Ae),s(Ae,VI),s(Ae,cj),s(cj,YI),s(Ae,KI),s(Ae,hj),s(hj,JI),s(Ae,XI),s(Ae,fj),s(fj,QI),s(Ae,eU),s(P,sU),s(P,_e),s(_e,Xc),s(Xc,tU),s(_e,aU),s(_e,dj),s(dj,nU),s(_e,oU),s(_e,Qc),s(Qc,lU),s(_e,rU),s(_e,mj),s(mj,pU),s(_e,iU),s(P,uU),s(P,js),m(dp,js,null),s(js,cU),s(js,_j),s(_j,hU),s(js,fU),s(js,vt),s(vt,dU),s(vt,vj),s(vj,mU),s(vt,_U),s(vt,jj),s(jj,vU),s(vt,jU),s(P,gU),s(P,Sn),m(mp,Sn,null),s(Sn,wU),s(Sn,_p),s(_p,yU),s(_p,gj),s(gj,bU),s(_p,EU),s(P,qU),s(P,Cn),m(vp,Cn,null),s(Cn,$U),s(Cn,jt),s(jt,kU),s(jt,wj),s(wj,PU),s(jt,DU),s(jt,yj),s(yj,zU),s(jt,OU),s(P,TU),s(P,xn),m(jp,xn,null),s(xn,AU),s(xn,gt),s(gt,SU),s(gt,bj),s(bj,CU),s(gt,xU),s(gt,Ej),s(Ej,RU),s(gt,IU),i(e,Z0,p),i(e,wt,p),s(wt,Rn),s(Rn,qj),m(gp,qj,null),s(wt,UU),s(wt,$j),s($j,GU),i(e,N0,p),i(e,In,p),s(In,LU),s(In,eh),s(eh,MU),s(In,ZU),i(e,H0,p),i(e,sh,p),s(sh,NU),i(e,B0,p),i(e,th,p),s(th,HU),i(e,W0,p),i(e,ah,p),s(ah,BU),i(e,F0,p),i(e,Un,p),s(Un,kj),s(kj,WU),s(Un,FU),s(Un,Pj),s(Pj,VU),i(e,V0,p),m(wp,e,p),i(e,Y0,p),i(e,Gn,p),s(Gn,YU),s(Gn,Dj),s(Dj,KU),s(Gn,JU),i(e,K0,p),m(yp,e,p),i(e,J0,p),i(e,nh,p),s(nh,XU),i(e,X0,p),i(e,yt,p),s(yt,Ln),s(Ln,zj),m(bp,zj,null),s(yt,QU),s(yt,Oj),s(Oj,eG),i(e,Q0,p),i(e,ve,p),s(ve,Tj),s(Tj,Ep),s(Ep,sG),s(ve,tG),s(ve,Aj),s(Aj,qp),s(qp,aG),s(ve,nG),s(ve,Sj),s(Sj,$p),s($p,oG),s(ve,lG),s(ve,Cj),s(Cj,kp),s(kp,rG),i(e,eE,p),i(e,oh,p),s(oh,pG),i(e,sE,p),i(e,gs,p),s(gs,xj),s(xj,Pp),s(Pp,iG),s(gs,uG),s(gs,Rj),s(Rj,Dp),s(Dp,cG),s(gs,hG),s(gs,Ij),s(Ij,zp),s(zp,fG),i(e,tE,p),i(e,ws,p),s(ws,dG),s(ws,lh),s(lh,mG),s(ws,_G),s(ws,Op),s(Op,vG),s(ws,jG),aE=!0},p(e,[p]){const Tp={};p&2&&(Tp.$$scope={dirty:p,ctx:e}),ta.$set(Tp);const Uj={};p&2&&(Uj.$$scope={dirty:p,ctx:e}),Za.$set(Uj);const Gj={};p&2&&(Gj.$$scope={dirty:p,ctx:e}),an.$set(Gj)},i(e){aE||(_(O.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(co.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(vo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(yo.$$.fragment,e),_(Eo.$$.fragment,e),_($o.$$.fragment,e),_(ko.$$.fragment,e),_(Do.$$.fragment,e),_(Oo.$$.fragment,e),_(To.$$.fragment,e),_(So.$$.fragment,e),_(Ro.$$.fragment,e),_(Io.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Lo.$$.fragment,e),_(Mo.$$.fragment,e),_(Zo.$$.fragment,e),_(Bo.$$.fragment,e),_(Wo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(ta.$$.fragment,e),_(el.$$.fragment,e),_(nl.$$.fragment,e),_(ol.$$.fragment,e),_(ll.$$.fragment,e),_(rl.$$.fragment,e),_(pl.$$.fragment,e),_(jl.$$.fragment,e),_(gl.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(Dl.$$.fragment,e),_(zl.$$.fragment,e),_(Ol.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Cl.$$.fragment,e),_(Gl.$$.fragment,e),_(Ll.$$.fragment,e),_(Ml.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Vl.$$.fragment,e),_(Kl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(Za.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(hr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(an.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_(qr.$$.fragment,e),_(kr.$$.fragment,e),_(Pr.$$.fragment,e),_(Dr.$$.fragment,e),_(zr.$$.fragment,e),_(Tr.$$.fragment,e),_(Cr.$$.fragment,e),_(xr.$$.fragment,e),_(Rr.$$.fragment,e),_(Ir.$$.fragment,e),_(Ur.$$.fragment,e),_(Gr.$$.fragment,e),_(Lr.$$.fragment,e),_(Zr.$$.fragment,e),_(Hr.$$.fragment,e),_(Jr.$$.fragment,e),_(Xr.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(np.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(up.$$.fragment,e),_(hp.$$.fragment,e),_(fp.$$.fragment,e),_(dp.$$.fragment,e),_(mp.$$.fragment,e),_(vp.$$.fragment,e),_(jp.$$.fragment,e),_(gp.$$.fragment,e),_(wp.$$.fragment,e),_(yp.$$.fragment,e),_(bp.$$.fragment,e),aE=!0)},o(e){v(O.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(co.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(vo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(yo.$$.fragment,e),v(Eo.$$.fragment,e),v($o.$$.fragment,e),v(ko.$$.fragment,e),v(Do.$$.fragment,e),v(Oo.$$.fragment,e),v(To.$$.fragment,e),v(So.$$.fragment,e),v(Ro.$$.fragment,e),v(Io.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Lo.$$.fragment,e),v(Mo.$$.fragment,e),v(Zo.$$.fragment,e),v(Bo.$$.fragment,e),v(Wo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(ta.$$.fragment,e),v(el.$$.fragment,e),v(nl.$$.fragment,e),v(ol.$$.fragment,e),v(ll.$$.fragment,e),v(rl.$$.fragment,e),v(pl.$$.fragment,e),v(jl.$$.fragment,e),v(gl.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(Dl.$$.fragment,e),v(zl.$$.fragment,e),v(Ol.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Cl.$$.fragment,e),v(Gl.$$.fragment,e),v(Ll.$$.fragment,e),v(Ml.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Vl.$$.fragment,e),v(Kl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(Za.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(hr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(an.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v(qr.$$.fragment,e),v(kr.$$.fragment,e),v(Pr.$$.fragment,e),v(Dr.$$.fragment,e),v(zr.$$.fragment,e),v(Tr.$$.fragment,e),v(Cr.$$.fragment,e),v(xr.$$.fragment,e),v(Rr.$$.fragment,e),v(Ir.$$.fragment,e),v(Ur.$$.fragment,e),v(Gr.$$.fragment,e),v(Lr.$$.fragment,e),v(Zr.$$.fragment,e),v(Hr.$$.fragment,e),v(Jr.$$.fragment,e),v(Xr.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(np.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(up.$$.fragment,e),v(hp.$$.fragment,e),v(fp.$$.fragment,e),v(dp.$$.fragment,e),v(mp.$$.fragment,e),v(vp.$$.fragment,e),v(jp.$$.fragment,e),v(gp.$$.fragment,e),v(wp.$$.fragment,e),v(yp.$$.fragment,e),v(bp.$$.fragment,e),aE=!1},d(e){t(y),e&&t(z),e&&t(b),j(O),e&&t(ae),e&&t(C),e&&t(Bj),e&&t(I),e&&t(Wj),e&&t(Se),e&&t(Fj),e&&t(Up),e&&t(Vj),e&&t(Gp),e&&t(Yj),e&&t(Et),e&&t(Kj),e&&t(qt),e&&t(Jj),e&&t(Np),e&&t(Xj),e&&t(Hp),e&&t(Qj),e&&t(Bp),e&&t(eg),e&&t(Wp),e&&t(sg),e&&t(Fp),e&&t(tg),e&&t(Yp),e&&t(ag),e&&t(Kp),e&&t(ng),e&&t(ks),j(po),e&&t(og),e&&t(Jp),e&&t(lg),e&&t(Ps),j(io),e&&t(rg),e&&t(Xp),e&&t(pg),j(uo,e),e&&t(ig),e&&t(Ce),e&&t(ug),j(co,e),e&&t(cg),e&&t(xe),e&&t(hg),e&&t(Pt),e&&t(fg),e&&t(ei),e&&t(dg),e&&t(si),e&&t(mg),j(mo,e),e&&t(_g),e&&t(Re),e&&t(vg),e&&t(Dt),e&&t(jg),j(_o,e),e&&t(gg),e&&t(Pe),e&&t(wg),e&&t(ti),e&&t(yg),j(vo,e),e&&t(bg),e&&t(Ie),e&&t(Eg),e&&t(zt),e&&t(qg),e&&t(Ue),e&&t($g),e&&t(ai),e&&t(kg),j(go,e),e&&t(Pg),e&&t(ni),e&&t(Dg),j(wo,e),e&&t(zg),e&&t(oi),e&&t(Og),j(yo,e),e&&t(Tg),e&&t(Ot),e&&t(Ag),e&&t(Tt),e&&t(Sg),e&&t(At),e&&t(Cg),e&&t(li),e&&t(xg),e&&t(Ds),j(Eo),e&&t(Rg),e&&t(Ct),e&&t(Ig),e&&t(xt),e&&t(Ug),e&&t(pi),e&&t(Gg),j($o,e),e&&t(Lg),e&&t(ii),e&&t(Mg),j(ko,e),e&&t(Zg),e&&t(U),e&&t(Ng),e&&t(ne),e&&t(Hg),e&&t(Rt),e&&t(Bg),j(Do,e),e&&t(Wg),e&&t(It),e&&t(Fg),e&&t(Ut),e&&t(Vg),e&&t(ui),e&&t(Yg),e&&t(Os),j(Oo),e&&t(Kg),e&&t(Lt),e&&t(Jg),j(To,e),e&&t(Xg),e&&t(Ge),e&&t(Qg),e&&t(hi),e&&t(ew),e&&t(Mt),e&&t(sw),e&&t(fi),e&&t(tw),j(So,e),e&&t(aw),e&&t(di),e&&t(nw),e&&t(Zt),e&&t(ow),e&&t(mi),e&&t(lw),e&&t(_i),e&&t(rw),e&&t(vi),j(Ro),e&&t(pw),e&&t(ji),e&&t(iw),e&&t(As),j(Io),e&&t(uw),e&&t(Ht),e&&t(cw),e&&t(gi),e&&t(hw),j(Uo,e),e&&t(fw),e&&t(Bt),e&&t(dw),e&&t(wi),e&&t(mw),e&&t(yi),e&&t(_w),j(Go,e),e&&t(vw),e&&t(Le),e&&t(jw),j(Lo,e),e&&t(gw),e&&t(Wt),e&&t(ww),j(Mo,e),e&&t(yw),e&&t(bi),e&&t(bw),e&&t(Ft),e&&t(Ew),e&&t(Ei),e&&t(qw),e&&t(Ss),j(Zo),e&&t($w),e&&t(Yt),e&&t(kw),e&&t(Kt),e&&t(Pw),j(Bo,e),e&&t(Dw),e&&t(Jt),e&&t(zw),j(Wo,e),e&&t(Ow),e&&t(Xt),e&&t(Tw),e&&t(qi),e&&t(Aw),e&&t(oe),e&&t(Sw),j(Vo,e),e&&t(Cw),e&&t(Qt),e&&t(xw),e&&t(ki),e&&t(Rw),e&&t(Cs),j(Yo),e&&t(Iw),e&&t(G),e&&t(Uw),e&&t(Oi),e&&t(Gw),j(Ko,e),e&&t(Lw),e&&t(Ti),e&&t(Mw),j(Jo,e),e&&t(Zw),e&&t(Ai),e&&t(Nw),e&&t(xs),j(Xo),e&&t(Hw),j(ta,e),e&&t(Bw),e&&t(Me),e&&t(Ww),e&&t(aa),e&&t(Fw),e&&t(Ze),e&&t(Vw),e&&t(Ii),e&&t(Yw),e&&t(na),e&&t(Kw),e&&t(oa),e&&t(Jw),e&&t(le),e&&t(Xw),e&&t(Mi),e&&t(Qw),e&&t(Rs),j(el),e&&t(ey),e&&t(sl),e&&t(sy),e&&t(Ne),e&&t(ty),e&&t(ra),e&&t(ay),e&&t(Ni),e&&t(ny),e&&t(Hi),e&&t(oy),e&&t(Is),j(nl),e&&t(ly),e&&t(Bi),e&&t(ry),j(ol,e),e&&t(py),e&&t(Wi),e&&t(iy),e&&t(He),e&&t(uy),e&&t(Be),e&&t(cy),j(ll,e),e&&t(hy),e&&t(Fi),e&&t(fy),e&&t(Vi),e&&t(dy),e&&t(Gs),j(rl),e&&t(my),e&&t(Yi),e&&t(_y),j(pl,e),e&&t(vy),e&&t(K),e&&t(jy),e&&t(We),e&&t(gy),e&&t(Ki),e&&t(wy),e&&t(ua),e&&t(yy),e&&t(M),e&&t(by),e&&t(ze),e&&t(Ey),e&&t(Ji),e&&t(qy),e&&t(Fe),e&&t($y),e&&t(Ve),e&&t(ky),e&&t(dl),e&&t(Py),e&&t(re),e&&t(Dy),e&&t(Qi),e&&t(zy),e&&t(Oe),e&&t(Oy),e&&t(Ye),e&&t(Ty),e&&t(ca),e&&t(Ay),e&&t(eu),e&&t(Sy),e&&t(Ls),j(jl),e&&t(Cy),e&&t(su),e&&t(xy),e&&t(tu),e&&t(Ry),j(gl,e),e&&t(Iy),e&&t(fa),e&&t(Uy),e&&t(Ke),e&&t(Gy),e&&t(da),e&&t(Ly),e&&t(Je),e&&t(My),e&&t(au),e&&t(Zy),e&&t(Ms),j(El),e&&t(Ny),e&&t(nu),e&&t(Hy),e&&t(ou),e&&t(By),e&&t(_a),e&&t(Wy),e&&t(Xe),e&&t(Fy),e&&t(lu),e&&t(Vy),e&&t(Ns),j($l),e&&t(Yy),e&&t(ja),e&&t(Ky),j(kl,e),e&&t(Jy),e&&t(ga),e&&t(Xy),j(Pl,e),e&&t(Qy),e&&t(ru),e&&t(e2),e&&t(Hs),j(Dl),e&&t(s2),e&&t(ya),e&&t(t2),j(zl,e),e&&t(a2),e&&t(ba),e&&t(n2),j(Ol,e),e&&t(o2),e&&t(Bs),j(Tl),e&&t(l2),e&&t(qa),e&&t(r2),e&&t(pu),e&&t(p2),e&&t($a),e&&t(i2),e&&t(iu),e&&t(u2),e&&t(Ws),j(Al),e&&t(c2),e&&t(Qe),e&&t(h2),e&&t(k),e&&t(f2),e&&t(es),e&&t(d2),j(Cl,e),e&&t(m2),e&&t(cu),e&&t(_2),e&&t(pe),e&&t(v2),e&&t(hu),e&&t(j2),e&&t(fu),e&&t(g2),j(Gl,e),e&&t(w2),e&&t(Pa),e&&t(y2),e&&t(mu),e&&t(b2),j(Ll,e),e&&t(E2),e&&t(ie),e&&t(q2),e&&t(_u),e&&t($2),e&&t(Fs),j(Ml),e&&t(k2),e&&t(Z),e&&t(P2),e&&t(vu),e&&t(D2),e&&t(za),e&&t(z2),e&&t(T),e&&t(O2),e&&t(ts),e&&t(T2),j(Hl,e),e&&t(A2),e&&t(as),e&&t(S2),e&&t(ue),e&&t(C2),e&&t(wu),e&&t(x2),j(Bl,e),e&&t(R2),e&&t(Aa),e&&t(I2),e&&t(Sa),e&&t(U2),j(Wl,e),e&&t(G2),e&&t(J),e&&t(L2),e&&t(bu),e&&t(M2),e&&t(Vs),j(Fl),e&&t(Z2),e&&t(Eu),e&&t(N2),e&&t(xa),e&&t(H2),j(Vl,e),e&&t(B2),e&&t(Ra),e&&t(W2),e&&t(ce),e&&t(F2),e&&t(qu),e&&t(V2),e&&t(Ys),j(Kl),e&&t(Y2),e&&t($u),e&&t(K2),e&&t(Ks),j(Jl),e&&t(J2),e&&t(ku),e&&t(X2),j(Xl,e),e&&t(Q2),e&&t(ls),e&&t(eb),e&&t(rs),e&&t(sb),e&&t(Du),e&&t(tb),j(Ql,e),e&&t(ab),e&&t(Ga),e&&t(nb),e&&t(La),e&&t(ob),e&&t(Js),j(sr),e&&t(lb),e&&t(Ou),e&&t(rb),j(tr,e),e&&t(pb),e&&t(Tu),e&&t(ib),e&&t(ps),e&&t(ub),e&&t(Au),e&&t(cb),j(ar,e),e&&t(hb),j(Za,e),e&&t(fb),e&&t(Xs),j(nr),e&&t(db),e&&t(Su),e&&t(mb),j(or,e),e&&t(_b),e&&t(he),e&&t(vb),e&&t(Ha),e&&t(jb),e&&t(xu),e&&t(gb),j(lr,e),e&&t(wb),e&&t(Ba),e&&t(yb),e&&t(Wa),e&&t(bb),e&&t(Iu),e&&t(Eb),e&&t(Qs),j(pr),e&&t(qb),e&&t(Uu),e&&t($b),j(ir,e),e&&t(kb),e&&t(N),e&&t(Pb),e&&t(Lu),e&&t(Db),j(ur,e),e&&t(zb),e&&t(Va),e&&t(Ob),e&&t(Zu),e&&t(Tb),e&&t(et),j(cr),e&&t(Ab),e&&t(Nu),e&&t(Sb),j(hr,e),e&&t(Cb),e&&t(is),e&&t(xb),e&&t(Bu),e&&t(Rb),j(fr,e),e&&t(Ib),e&&t(Ka),e&&t(Ub),e&&t(Fu),e&&t(Gb),e&&t(st),j(dr),e&&t(Lb),e&&t(Vu),e&&t(Mb),j(mr,e),e&&t(Zb),e&&t(us),e&&t(Nb),e&&t(Ku),e&&t(Hb),j(_r,e),e&&t(Bb),e&&t(Xa),e&&t(Wb),e&&t(Xu),e&&t(Fb),e&&t(tt),j(vr),e&&t(Vb),e&&t(en),e&&t(Yb),e&&t(Qu),e&&t(Kb),e&&t(sn),e&&t(Jb),e&&t(A),e&&t(Xb),j(jr,e),e&&t(Qb),e&&t(ec),e&&t(e3),e&&t(tn),e&&t(s3),e&&t(sc),e&&t(t3),e&&t(tc),e&&t(a3),e&&t(ac),e&&t(n3),j(wr,e),e&&t(o3),e&&t(cs),e&&t(l3),j(yr,e),e&&t(r3),j(an,e),e&&t(p3),e&&t(nn),e&&t(i3),e&&t(on),e&&t(u3),j(br,e),e&&t(c3),e&&t(nc),e&&t(h3),e&&t(hs),e&&t(f3),e&&t(oc),e&&t(d3),j(Er,e),e&&t(m3),e&&t(ln),e&&t(_3),j(qr,e),e&&t(v3),e&&t(rn),e&&t(j3),e&&t(lc),e&&t(g3),e&&t($r),e&&t(w3),e&&t(fs),e&&t(y3),e&&t(rc),e&&t(b3),e&&t(at),j(kr),e&&t(E3),e&&t(pc),e&&t(q3),e&&t(ic),e&&t($3),e&&t(uc),e&&t(k3),e&&t(nt),j(Pr),e&&t(P3),e&&t(cn),e&&t(D3),j(Dr,e),e&&t(z3),e&&t(cc),e&&t(O3),e&&t(D),e&&t(T3),j(zr,e),e&&t(A3),e&&t(hn),e&&t(S3),e&&t(dc),e&&t(C3),e&&t(fn),e&&t(x3),e&&t(fe),e&&t(R3),e&&t(ot),j(Tr),e&&t(I3),e&&t(Ar),e&&t(U3),e&&t(mn),e&&t(G3),e&&t(_c),e&&t(L3),j(Cr,e),e&&t(M3),e&&t(ds),e&&t(Z3),e&&t(vc),e&&t(N3),e&&t(lt),j(xr),e&&t(H3),e&&t(jc),e&&t(B3),e&&t(vn),e&&t(W3),j(Rr,e),e&&t(F3),e&&t(wc),e&&t(V3),e&&t(jn),e&&t(Y3),j(Ir,e),e&&t(K3),e&&t(yc),e&&t(J3),e&&t(bc),e&&t(X3),e&&t(rt),j(Ur),e&&t(Q3),e&&t(Ec),e&&t(e0),e&&t(qc),e&&t(s0),j(Gr,e),e&&t(t0),e&&t($c),e&&t(a0),e&&t(kc),e&&t(n0),e&&t(Pc),e&&t(o0),e&&t(Dc),e&&t(l0),j(Lr,e),e&&t(r0),e&&t(zc),e&&t(p0),e&&t(wn),e&&t(i0),e&&t(pt),j(Zr),e&&t(u0),e&&t(Oc),e&&t(c0),e&&t(Tc),e&&t(h0),e&&t(H),j(Hr),e&&t(f0),e&&t(xc),e&&t(d0),e&&t(bn),e&&t(m0),e&&t(ut),j(Jr),e&&t(_0),e&&t(ct),j(Xr),e&&t(v0),e&&t(B),e&&t(j0),e&&t(ht),j(sp),e&&t(g0),e&&t(Ic),e&&t(w0),e&&t(Uc),e&&t(y0),j(tp,e),e&&t(b0),e&&t(kn),e&&t(E0),j(ap,e),e&&t(q0),e&&t(Gc),e&&t($0),e&&t(Lc),e&&t(k0),e&&t(ms),e&&t(P0),e&&t(ft),j(np),e&&t(D0),e&&t(_s),e&&t(z0),e&&t(Nc),e&&t(O0),e&&t(mt),j(pp),e&&t(T0),e&&t(de),e&&t(A0),e&&t(On),e&&t(S0),e&&t(vs),e&&t(C0),e&&t(Tn),e&&t(x0),e&&t(Yc),e&&t(R0),j(ip,e),e&&t(I0),e&&t(Kc),e&&t(U0),j(up,e),e&&t(G0),e&&t(me),e&&t(L0),e&&t(_t),j(hp),e&&t(M0),e&&t(P),j(fp),j(dp),j(mp),j(vp),j(jp),e&&t(Z0),e&&t(wt),j(gp),e&&t(N0),e&&t(In),e&&t(H0),e&&t(sh),e&&t(B0),e&&t(th),e&&t(W0),e&&t(ah),e&&t(F0),e&&t(Un),e&&t(V0),j(wp,e),e&&t(Y0),e&&t(Gn),e&&t(K0),j(yp,e),e&&t(J0),e&&t(nh),e&&t(X0),e&&t(yt),j(bp),e&&t(Q0),e&&t(ve),e&&t(eE),e&&t(oh),e&&t(sE),e&&t(gs),e&&t(tE),e&&t(ws)}}}const WK={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function FK(Es,y,z){let{fw:b}=y;return Es.$$set=q=>{"fw"in q&&z(0,b=q.fw)},[b]}class QK extends UK{constructor(y){super();GK(this,y,FK,BK,LK,{fw:0})}}export{QK as default,WK as metadata};
