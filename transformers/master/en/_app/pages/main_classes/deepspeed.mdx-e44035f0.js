import{S as HV,i as BV,s as WV,e as o,k as u,w as f,t as a,M as FV,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-4833417e.js";import{T as NV}from"../../chunks/Tip-fffd6df1.js";import{D as rj}from"../../chunks/Docstring-4f315ed9.js";import{C as g}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as y}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function VV(Zn){let w,M;return{c(){w=o("p"),M=a("This section is a must-read")},l(b){w=l(b,"P",{});var $=r(w);M=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,w,$),s(w,M)},d(b){b&&t(w)}}}function YV(Zn){let w,M,b,$,ms,F,Nn,_s,vs,ht,V;return{c(){w=o("p"),M=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),ms=a(" was run, the "),F=o("code"),Nn=a("model"),_s=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),vs=o("code"),ht=a("model.load_state_dict(state_dict)"),V=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(Y){w=l(Y,"P",{});var Z=r(w);M=n(Z,"Note, that once "),b=l(Z,"CODE",{});var yp=r(b);$=n(yp,"load_state_dict_from_zero_checkpoint"),yp.forEach(t),ms=n(Z," was run, the "),F=l(Z,"CODE",{});var $e=r(F);Nn=n($e,"model"),$e.forEach(t),_s=n(Z,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),vs=l(Z,"CODE",{});var wp=r(vs);ht=n(wp,"model.load_state_dict(state_dict)"),wp.forEach(t),V=n(Z,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),Z.forEach(t)},m(Y,Z){i(Y,w,Z),s(w,M),s(w,b),s(b,$),s(w,ms),s(w,F),s(F,Nn),s(w,_s),s(w,vs),s(vs,ht),s(w,V)},d(Y){Y&&t(w)}}}function KV(Zn){let w,M,b,$,ms,F,Nn,_s,vs,ht,V,Y,Z,yp,$e,wp,ZE,pj,D,Ch,NE,HE,xh,BE,WE,Rh,FE,VE,Ih,YE,KE,Uh,JE,XE,Gh,QE,ij,ke,e$,Hn,s$,t$,Bn,a$,n$,uj,bp,o$,cj,qp,l$,hj,ft,r$,Wn,p$,i$,fj,dt,Fn,u$,Ep,c$,h$,f$,L,d$,$p,m$,_$,Lh,v$,j$,Mh,g$,y$,Zh,w$,b$,kp,q$,E$,dj,Pp,$$,mj,zp,k$,_j,Dp,Nh,P$,vj,Op,z$,jj,Tp,Vn,D$,Ap,O$,T$,gj,Sp,A$,yj,Cp,wj,js,mt,Hh,Yn,S$,Bh,C$,bj,xp,qj,gs,_t,Wh,Kn,x$,Fh,R$,Ej,Rp,I$,$j,Jn,kj,Pe,U$,Vh,G$,L$,Yh,M$,Z$,Pj,Xn,zj,ze,N$,Qn,H$,B$,eo,W$,F$,Dj,vt,V$,Ip,Y$,K$,Oj,Up,J$,Tj,Gp,X$,Aj,so,Sj,De,Q$,Kh,e5,s5,Jh,t5,a5,Cj,jt,n5,Xh,o5,l5,xj,to,Rj,ge,r5,Qh,p5,i5,ef,u5,c5,sf,h5,Ij,Lp,f5,Uj,ao,Gj,Oe,d5,tf,m5,_5,af,v5,j5,Lj,gt,g5,nf,y5,w5,Mj,Te,b5,of,q5,E5,no,$5,k5,Zj,Mp,P5,Nj,oo,Hj,Zp,z5,Bj,lo,Wj,Np,D5,Fj,ro,Vj,yt,O5,lf,T5,A5,Yj,wt,S5,rf,C5,x5,Kj,bt,R5,po,I5,U5,Jj,Hp,Xj,ys,qt,pf,io,G5,uf,L5,Qj,Et,M5,Bp,Z5,N5,eg,$t,ws,H5,cf,B5,W5,hf,F5,V5,Y5,ye,K5,ff,J5,X5,df,Q5,e6,uo,s6,t6,sg,Wp,a6,tg,co,ag,Fp,n6,ng,ho,og,O,o6,mf,l6,r6,_f,p6,i6,vf,u6,c6,jf,h6,f6,fo,d6,m6,lg,J,_6,gf,v6,j6,yf,g6,y6,wf,w6,b6,rg,kt,q6,bf,E6,$6,pg,mo,ig,Pt,k6,qf,P6,z6,ug,zt,D6,_o,O6,T6,cg,Vp,hg,bs,Dt,Ef,vo,A6,$f,S6,fg,Ot,C6,Yp,x6,R6,dg,jo,mg,Ae,I6,kf,U6,G6,go,L6,M6,_g,Kp,Z6,vg,Tt,Pf,N6,H6,zf,B6,jg,Jp,W6,gg,yo,yg,Xp,F6,wg,At,V6,wo,Y6,K6,bg,Qp,J6,qg,ei,X6,Eg,si,qs,bo,Q6,Df,e4,s4,t4,qo,a4,Of,n4,$g,ti,kg,Es,St,Tf,Eo,o4,Af,l4,Pg,Ct,r4,Sf,p4,i4,zg,ai,u4,Dg,$o,Og,xt,c4,Cf,h4,f4,Tg,ni,d4,Ag,oi,m4,Sg,ko,Cg,Se,_4,xf,v4,j4,Rf,g4,y4,xg,Po,Rg,Rt,w4,If,b4,q4,Ig,zo,Ug,li,E4,Gg,It,$4,Uf,k4,P4,Lg,ri,Mg,$s,Ut,Gf,Do,z4,Lf,D4,Zg,Gt,O4,Oo,T4,A4,Ng,Lt,S4,To,C4,x4,Hg,Ao,Bg,Mt,R4,Mf,I4,U4,Wg,So,Fg,Zt,G4,Co,L4,M4,Vg,pi,Z4,Yg,X,N4,Zf,H4,B4,Nf,W4,F4,Hf,V4,Y4,Kg,xo,Jg,Nt,K4,ii,J4,X4,Xg,ui,Qg,ks,Ht,Bf,Ro,Q4,Wf,e8,ey,T,s8,ci,t8,a8,hi,n8,o8,Ff,l8,r8,Vf,p8,i8,fi,u8,c8,sy,di,h8,ty,Io,ay,mi,f8,ny,Uo,oy,_i,ly,Ps,Bt,Yf,Go,d8,Kf,m8,ry,Wt,py,Ce,_8,vi,v8,j8,ji,g8,y8,iy,Ft,w8,gi,b8,q8,uy,xe,E8,Jf,$8,k8,yi,P8,z8,cy,wi,D8,hy,Vt,O8,bi,T8,A8,fy,Yt,Xf,S8,C8,Lo,x8,qi,R8,I8,dy,Q,U8,Qf,G8,L8,Ei,M8,Z8,ed,N8,H8,my,$i,_y,zs,Kt,sd,Mo,B8,td,W8,vy,Zo,No,F8,V8,jy,Re,Y8,ad,K8,J8,Ho,X8,Q8,gy,Jt,e7,ki,s7,t7,yy,Pi,a7,wy,zi,by,Ds,Xt,nd,Bo,n7,od,o7,qy,Di,l7,Ey,Wo,$y,Oi,ld,r7,ky,Ie,Os,p7,rd,i7,u7,pd,c7,h7,f7,A,id,d7,m7,ud,_7,v7,cd,j7,g7,hd,y7,w7,fd,b7,q7,dd,E7,$7,k7,md,P7,Py,Ue,z7,_d,D7,O7,vd,T7,A7,zy,Fo,Dy,Ti,S7,Oy,Ai,Ty,Ts,Qt,jd,Vo,C7,gd,x7,Ay,Si,R7,Sy,Yo,Cy,N,I7,yd,U7,G7,wd,L7,M7,bd,Z7,N7,qd,H7,B7,xy,Ge,W7,Ed,F7,V7,$d,Y7,K7,Ry,Ci,kd,J7,Iy,ea,Ko,Pd,X7,Q7,zd,ek,sk,Jo,Dd,tk,ak,Od,nk,Uy,S,ok,Td,lk,rk,Ad,pk,ik,Sd,uk,ck,Cd,hk,fk,xd,dk,mk,Gy,we,Rd,_k,vk,Id,jk,gk,Ud,yk,wk,Ly,xi,bk,My,Le,Xo,Gd,qk,Ek,Ld,$k,kk,Qo,Md,Pk,zk,Zd,Dk,Ok,el,Nd,Tk,Ak,Hd,Sk,Zy,Me,Ck,Bd,xk,Rk,Ri,Ik,Uk,Ny,sl,Wd,Gk,Lk,Hy,ee,Mk,Fd,Zk,Nk,Vd,Hk,Bk,Yd,Wk,Fk,By,Ii,tl,Kd,Vk,Yk,Jd,Kk,Wy,be,Xd,Jk,Xk,Qd,Qk,e9,em,s9,t9,Fy,Ze,a9,sm,n9,o9,tm,l9,r9,Vy,sa,al,p9,am,i9,u9,c9,nl,h9,nm,f9,d9,Yy,Ui,Ky,As,ta,om,ol,m9,lm,_9,Jy,Gi,v9,Xy,Li,j9,Qy,ll,ew,aa,g9,rm,y9,w9,sw,Ne,b9,rl,q9,E9,pl,$9,k9,tw,na,P9,pm,z9,D9,aw,He,O9,im,T9,A9,il,S9,C9,nw,Mi,ow,Ss,oa,um,ul,x9,cm,R9,lw,Zi,I9,rw,Ni,U9,pw,la,Cs,G9,hm,L9,M9,fm,Z9,N9,H9,cl,B9,dm,W9,F9,iw,Be,V9,mm,Y9,K9,_m,J9,X9,uw,Hi,cw,xs,ra,vm,hl,Q9,jm,eP,hw,pa,sP,gm,tP,aP,fw,fl,dw,ia,nP,ym,oP,lP,mw,dl,_w,Bi,vw,Rs,ua,wm,ml,rP,bm,pP,jw,ca,iP,qm,uP,cP,gw,_l,yw,ha,hP,Em,fP,dP,ww,vl,bw,Is,fa,$m,jl,mP,km,_P,qw,da,vP,Pm,jP,gP,Ew,Wi,yP,$w,ma,wP,zm,bP,qP,kw,Fi,Pw,Us,_a,Dm,gl,EP,Om,$P,zw,We,kP,Tm,PP,zP,yl,DP,OP,Dw,q,TP,Am,AP,SP,Vi,CP,xP,Sm,RP,IP,Cm,UP,GP,xm,LP,MP,Rm,ZP,NP,Im,HP,BP,Um,WP,FP,Ow,Fe,VP,Gm,YP,KP,Lm,JP,XP,Tw,wl,Aw,Yi,QP,Sw,se,bl,Mm,ez,sz,Zm,tz,az,ql,Nm,nz,oz,Hm,lz,rz,El,Bm,pz,iz,Wm,uz,cz,$l,Fm,hz,fz,Vm,dz,Cw,Ki,mz,xw,Ji,_z,Rw,kl,Iw,va,vz,Xi,jz,gz,Uw,Qi,yz,Gw,Pl,Lw,te,wz,Ym,bz,qz,Km,Ez,$z,Jm,kz,Pz,Mw,eu,Zw,Gs,ja,Xm,zl,zz,Qm,Dz,Nw,C,Oz,e_,Tz,Az,s_,Sz,Cz,t_,xz,Rz,a_,Iz,Uz,Dl,Gz,Lz,Hw,su,Mz,Bw,ga,Ol,n_,Zz,Nz,o_,Hz,Bz,Ve,l_,Wz,Fz,r_,Vz,Yz,p_,Kz,Jz,Ww,P,Xz,i_,Qz,eD,tu,sD,tD,u_,aD,nD,c_,oD,lD,h_,rD,pD,f_,iD,uD,Fw,Ye,cD,d_,hD,fD,m_,dD,mD,Vw,Tl,Yw,Ke,_D,__,vD,jD,au,gD,yD,Kw,ae,ya,v_,wD,bD,j_,qD,ED,$D,wa,g_,kD,PD,y_,zD,DD,OD,Je,w_,TD,AD,b_,SD,CD,q_,xD,RD,ID,Xe,E_,UD,GD,$_,LD,MD,k_,ZD,ND,Jw,nu,HD,Xw,Al,Qw,ba,BD,ou,WD,FD,e2,qa,VD,P_,YD,KD,s2,Sl,t2,H,JD,z_,XD,QD,D_,eO,sO,O_,tO,aO,T_,nO,oO,a2,lu,n2,Ls,Ea,A_,Cl,lO,S_,rO,o2,ru,pO,l2,$a,iO,C_,uO,cO,r2,xl,p2,ka,hO,Rl,fO,dO,i2,pu,u2,Ms,Pa,x_,Il,mO,R_,_O,c2,iu,vO,h2,uu,jO,f2,Ul,d2,Qe,gO,cu,yO,wO,I_,bO,qO,m2,za,EO,U_,$O,kO,_2,hu,PO,v2,Gl,j2,Da,zO,fu,DO,OO,g2,Oa,TO,Ll,AO,SO,y2,du,CO,w2,Ml,b2,ne,xO,mu,RO,IO,G_,UO,GO,L_,LO,MO,q2,Ta,ZO,M_,NO,HO,E2,_u,BO,$2,Zl,k2,Aa,WO,vu,FO,VO,P2,Sa,YO,Nl,KO,JO,z2,ju,D2,Zs,Ca,Z_,Hl,XO,N_,QO,O2,gu,eT,T2,Bl,A2,x,sT,yu,tT,aT,H_,nT,oT,B_,lT,rT,W_,pT,iT,F_,uT,cT,S2,wu,hT,C2,Wl,x2,xa,fT,bu,dT,mT,R2,qu,I2,Ns,Ra,V_,Fl,_T,Y_,vT,U2,Eu,jT,G2,Vl,L2,es,gT,$u,yT,wT,K_,bT,qT,M2,ku,ET,Z2,Yl,N2,Ia,$T,Pu,kT,PT,H2,zu,B2,Hs,Ua,J_,Kl,zT,X_,DT,W2,Du,OT,F2,Jl,V2,ss,TT,Ou,AT,ST,Q_,CT,xT,Y2,Tu,RT,K2,Xl,J2,Ga,IT,Au,UT,GT,X2,Su,Q2,Bs,La,e1,Ql,LT,s1,MT,eb,Ma,ZT,t1,NT,HT,sb,Cu,a1,BT,tb,Za,WT,n1,FT,VT,ab,B,YT,o1,KT,JT,l1,XT,QT,r1,eA,sA,p1,tA,aA,nb,er,ob,xu,i1,nA,lb,Na,oA,sr,lA,rA,rb,Ru,u1,pA,pb,Iu,iA,ib,Uu,uA,ub,tr,cb,ts,cA,c1,hA,fA,h1,dA,mA,hb,ar,fb,Ha,db,Ba,_A,f1,vA,jA,mb,Wa,gA,d1,yA,wA,_b,nr,vb,Gu,m1,bA,jb,as,qA,_1,EA,$A,v1,kA,PA,gb,Lu,zA,yb,or,wb,Fa,DA,j1,OA,TA,bb,lr,qb,Va,AA,g1,SA,CA,Eb,Mu,xA,$b,rr,y1,RA,IA,kb,ns,UA,w1,GA,LA,b1,MA,ZA,Pb,Zu,NA,zb,Ws,Ya,q1,pr,HA,E1,BA,Db,Nu,WA,Ob,Hu,FA,Tb,Bu,VA,Ab,Fs,Ka,$1,ir,YA,k1,KA,Sb,Ja,JA,P1,XA,QA,Cb,ur,xb,Wu,eS,Rb,k,sS,z1,tS,aS,D1,nS,oS,O1,lS,rS,Fu,pS,iS,Vu,uS,cS,T1,hS,fS,A1,dS,mS,Ib,cr,Ub,Xa,_S,S1,vS,jS,Gb,Yu,gS,Lb,Qa,yS,hr,wS,bS,Mb,oe,qS,C1,ES,$S,x1,kS,PS,Ku,zS,DS,Zb,Vs,en,R1,fr,OS,I1,TS,Nb,dr,AS,mr,SS,Hb,sn,CS,U1,xS,RS,Bb,Ju,IS,Wb,_r,Fb,os,US,G1,GS,LS,L1,MS,ZS,Vb,Xu,Yb,Ys,tn,M1,vr,NS,Z1,HS,Kb,Qu,BS,Jb,an,WS,ec,FS,VS,Xb,jr,Qb,sc,YS,e3,nn,KS,N1,JS,XS,s3,gr,t3,tc,QS,a3,ac,eC,n3,Ks,on,H1,yr,sC,B1,tC,o3,nc,aC,l3,oc,nC,r3,wr,p3,lc,oC,i3,rc,lC,u3,pc,rC,c3,ic,pC,h3,br,f3,uc,iC,d3,ln,uC,qr,cC,hC,m3,Js,rn,W1,Er,fC,F1,dC,_3,cc,mC,v3,hc,_C,j3,R,V1,Y1,vC,jC,K1,qe,gC,fc,yC,wC,dc,bC,qC,mc,EC,$C,kC,$r,J1,PC,zC,kr,DC,X1,Pr,OC,zr,TC,AC,SC,Q1,ev,CC,xC,sv,Dr,RC,Or,IC,UC,g3,_c,GC,y3,pn,Xs,tv,LC,MC,av,ZC,NC,nv,HC,BC,ov,Tr,WC,Ar,FC,VC,w3,Qs,un,lv,Sr,YC,rv,KC,b3,et,cn,pv,Cr,JC,xr,XC,iv,QC,ex,q3,I,sx,uv,tx,ax,cv,nx,ox,hv,lx,rx,fv,px,ix,Rr,ux,cx,E3,st,hn,dv,Ir,hx,vc,fx,mv,dx,$3,jc,mx,k3,gc,_x,P3,Ur,z3,fn,vx,_v,jx,gx,D3,Gr,O3,yc,yx,T3,wc,wx,A3,ls,bx,vv,qx,Ex,jv,$x,kx,S3,tt,dn,gv,Lr,Px,yv,zx,C3,rs,mn,Dx,bc,Ox,Tx,wv,Ax,Sx,Mr,Cx,Zr,xx,Rx,Ix,at,Ux,qc,Gx,Lx,Nr,Mx,Zx,x3,Ec,R3,nt,_n,bv,Hr,Nx,qv,Hx,I3,le,Bx,$c,Wx,Fx,kc,Vx,Yx,Ev,Kx,Jx,U3,vn,Xx,Pc,Qx,eR,G3,ps,sR,zc,tR,aR,Dc,nR,oR,L3,Oc,lR,M3,Br,Z3,Tc,rR,N3,Wr,H3,re,pR,Ac,iR,uR,Fr,cR,hR,$v,fR,dR,B3,ot,jn,kv,Vr,mR,Pv,_R,W3,E,Yr,vR,zv,jR,gR,Ee,yR,Dv,wR,bR,Ov,qR,ER,Tv,$R,kR,PR,pe,Sc,zR,DR,Av,OR,TR,Cc,AR,SR,Sv,CR,xR,RR,is,Kr,IR,Cv,UR,GR,lt,LR,xv,MR,ZR,Rv,NR,HR,BR,gn,Jr,WR,Xr,FR,Iv,VR,YR,KR,yn,Qr,JR,rt,XR,Uv,QR,eI,Gv,sI,tI,aI,wn,ep,nI,pt,oI,Lv,lI,rI,Mv,pI,iI,F3,it,bn,Zv,sp,uI,Nv,cI,V3,qn,hI,xc,fI,dI,Y3,Rc,mI,K3,Ic,_I,J3,Uc,vI,X3,En,Hv,jI,gI,Bv,yI,Q3,tp,e0,$n,wI,Wv,bI,qI,s0,ap,t0,Gc,EI,a0,ut,kn,Fv,np,$I,Vv,kI,n0,ie,Yv,op,PI,zI,Kv,lp,DI,OI,Jv,rp,TI,AI,Xv,pp,SI,o0,Lc,CI,l0,us,Qv,ip,xI,RI,ej,up,II,UI,sj,cp,GI,r0,cs,LI,Mc,MI,ZI,hp,NI,HI,p0;return F=new y({}),Yn=new y({}),Kn=new y({}),Jn=new g({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),Xn=new g({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),so=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),to=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),ao=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),oo=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),lo=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),ro=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),io=new y({}),co=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),ho=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),mo=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),vo=new y({}),jo=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),yo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),qo=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),Eo=new y({}),$o=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
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
trainer.train()`}}),ko=new g({props:{code:`%%bash
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
        "stage3_gather_fp16_weights_on_model_save": true
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
        <span class="hljs-string">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span>: true
    },

    <span class="hljs-string">&quot;gradient_accumulation_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;gradient_clipping&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: false
}
EOT`}}),Po=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),zo=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),Do=new y({}),Ao=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),So=new g({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),xo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ro=new y({}),Io=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Uo=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Go=new y({}),Wt=new NV({props:{warning:"&lcub;true}",$$slots:{default:[VV]},$$scope:{ctx:Zn}}}),Mo=new y({}),Bo=new y({}),Wo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Fo=new g({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Vo=new y({}),Yo=new g({props:{code:`{
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
        "stage3_gather_fp16_weights_on_model_save": true
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
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ol=new y({}),ll=new g({props:{code:`{
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
        "stage3_gather_fp16_weights_on_model_save": true
    }
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
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ul=new y({}),hl=new y({}),fl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),dl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ml=new y({}),_l=new g({props:{code:`{
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
        "stage3_gather_fp16_weights_on_model_save": true
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
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),vl=new g({props:{code:`{
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
        "stage3_gather_fp16_weights_on_model_save": true
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
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),jl=new y({}),gl=new y({}),wl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),kl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Pl=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),zl=new y({}),Tl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Al=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Sl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Cl=new y({}),xl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Il=new y({}),Ul=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Gl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ml=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Zl=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Hl=new y({}),Bl=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Wl=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),Fl=new y({}),Vl=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Yl=new g({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),Kl=new y({}),Jl=new g({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Xl=new g({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),Ql=new y({}),er=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_fp16_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),tr=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),ar=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ha=new NV({props:{$$slots:{default:[YV]},$$scope:{ctx:Zn}}}),nr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),or=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),lr=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),pr=new y({}),ir=new y({}),ur=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),cr=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),fr=new y({}),_r=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),vr=new y({}),jr=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),gr=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),yr=new y({}),wr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),br=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
`}}),Er=new y({}),kr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Sr=new y({}),Cr=new y({}),Ir=new y({}),Ur=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Gr=new g({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
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
[...]`}}),Lr=new y({}),Hr=new y({}),Br=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),Wr=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),Vr=new y({}),Yr=new rj({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),Kr=new rj({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L114"}}),Jr=new rj({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L105"}}),Qr=new rj({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L146"}}),ep=new rj({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L137"}}),sp=new y({}),tp=new g({props:{code:`#!/usr/bin/env python

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),ap=new g({props:{code:`$ deepspeed --num_gpus 2 t0.py
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
  <span class="hljs-keyword">out</span>=negative`}}),np=new y({}),{c(){w=o("meta"),M=u(),b=o("h1"),$=o("a"),ms=o("span"),f(F.$$.fragment),Nn=u(),_s=o("span"),vs=a("DeepSpeed Integration"),ht=u(),V=o("p"),Y=o("a"),Z=a("DeepSpeed"),yp=a(" implements everything described in the "),$e=o("a"),wp=a("ZeRO paper"),ZE=a(". Currently it provides full support for:"),pj=u(),D=o("ol"),Ch=o("li"),NE=a("Optimizer state partitioning (ZeRO stage 1)"),HE=u(),xh=o("li"),BE=a("Gradient partitioning (ZeRO stage 2)"),WE=u(),Rh=o("li"),FE=a("Parameter partitioning (ZeRO stage 3)"),VE=u(),Ih=o("li"),YE=a("Custom mixed precision training handling"),KE=u(),Uh=o("li"),JE=a("A range of fast CUDA-extension-based optimizers"),XE=u(),Gh=o("li"),QE=a("ZeRO-Offload to CPU and NVMe"),ij=u(),ke=o("p"),e$=a("ZeRO-Offload has its own dedicated paper: "),Hn=o("a"),s$=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),t$=a(". And NVMe-support is described in the paper "),Bn=o("a"),a$=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),n$=a("."),uj=u(),bp=o("p"),o$=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),cj=u(),qp=o("p"),l$=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),hj=u(),ft=o("p"),r$=a("\u{1F917} Transformers integrates "),Wn=o("a"),p$=a("DeepSpeed"),i$=a(" via 2 options:"),fj=u(),dt=o("ol"),Fn=o("li"),u$=a("Integration of the core DeepSpeed features via "),Ep=o("a"),c$=a("Trainer"),h$=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),f$=u(),L=o("li"),d$=a("If you don\u2019t use "),$p=o("a"),m$=a("Trainer"),_$=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Lh=o("code"),v$=a("from_pretrained"),j$=a(" and "),Mh=o("code"),g$=a("from_config"),y$=a(` include integration of essential
parts of DeepSpeed like `),Zh=o("code"),w$=a("zero.Init"),b$=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),kp=o("a"),q$=a("deepspeed-non-trainer-integration"),E$=a("."),dj=u(),Pp=o("p"),$$=a("What is integrated:"),mj=u(),zp=o("p"),k$=a("Training:"),_j=u(),Dp=o("ol"),Nh=o("li"),P$=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),vj=u(),Op=o("p"),z$=a("Inference:"),jj=u(),Tp=o("ol"),Vn=o("li"),D$=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ap=o("a"),O$=a("deepspeed-zero-inference"),T$=a("."),gj=u(),Sp=o("p"),A$=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),yj=u(),Cp=o("a"),wj=u(),js=o("h2"),mt=o("a"),Hh=o("span"),f(Yn.$$.fragment),S$=u(),Bh=o("span"),C$=a("Trainer Deepspeed Integration"),bj=u(),xp=o("a"),qj=u(),gs=o("h3"),_t=o("a"),Wh=o("span"),f(Kn.$$.fragment),x$=u(),Fh=o("span"),R$=a("Installation"),Ej=u(),Rp=o("p"),I$=a("Install the library via pypi:"),$j=u(),f(Jn.$$.fragment),kj=u(),Pe=o("p"),U$=a("or via "),Vh=o("code"),G$=a("transformers"),L$=a("\u2019 "),Yh=o("code"),M$=a("extras"),Z$=a(":"),Pj=u(),f(Xn.$$.fragment),zj=u(),ze=o("p"),N$=a("or find more details on "),Qn=o("a"),H$=a("the DeepSpeed\u2019s GitHub page"),B$=a(` and
`),eo=o("a"),W$=a("advanced install"),F$=a("."),Dj=u(),vt=o("p"),V$=a("If you\u2019re still struggling with the build, first make sure to read "),Ip=o("a"),Y$=a("zero-install-notes"),K$=a("."),Oj=u(),Up=o("p"),J$=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),Tj=u(),Gp=o("p"),X$=a("To make a local build for DeepSpeed:"),Aj=u(),f(so.$$.fragment),Sj=u(),De=o("p"),Q$=a("If you intend to use NVMe offload you will also need to include "),Kh=o("code"),e5=a("DS_BUILD_AIO=1"),s5=a(` in the instructions above (and also
install `),Jh=o("em"),t5=a("libaio-dev"),a5=a(" system-wide)."),Cj=u(),jt=o("p"),n5=a("Edit "),Xh=o("code"),o5=a("TORCH_CUDA_ARCH_LIST"),l5=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),xj=u(),f(to.$$.fragment),Rj=u(),ge=o("p"),r5=a("So if you get "),Qh=o("code"),p5=a("8, 6"),i5=a(", then use "),ef=o("code"),u5=a('TORCH_CUDA_ARCH_LIST="8.6"'),c5=a(`. If you have multiple different cards, you can list all
of them like so `),sf=o("code"),h5=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),Ij=u(),Lp=o("p"),f5=a("If you need to use the same setup on multiple machines, make a binary wheel:"),Uj=u(),f(ao.$$.fragment),Gj=u(),Oe=o("p"),d5=a("it will generate something like "),tf=o("code"),m5=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_5=a(` which now you can install
as `),af=o("code"),v5=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),j5=a(" locally or on any other machine."),Lj=u(),gt=o("p"),g5=a("Again, remember to ensure to adjust "),nf=o("code"),y5=a("TORCH_CUDA_ARCH_LIST"),w5=a(" to the target architectures."),Mj=u(),Te=o("p"),b5=a("You can find the complete list of NVIDIA GPUs and their corresponding "),of=o("strong"),q5=a("Compute Capabilities"),E5=a(` (same as arch in this
context) `),no=o("a"),$5=a("here"),k5=a("."),Zj=u(),Mp=o("p"),P5=a("You can check the archs pytorch was built with using:"),Nj=u(),f(oo.$$.fragment),Hj=u(),Zp=o("p"),z5=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Bj=u(),f(lo.$$.fragment),Wj=u(),Np=o("p"),D5=a("If the output is:"),Fj=u(),f(ro.$$.fragment),Vj=u(),yt=o("p"),O5=a("then you know that this card\u2019s arch is "),lf=o("code"),T5=a("8.6"),A5=a("."),Yj=u(),wt=o("p"),S5=a("You can also leave "),rf=o("code"),C5=a("TORCH_CUDA_ARCH_LIST"),x5=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Kj=u(),bt=o("p"),R5=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),po=o("a"),I5=a("Deepspeed"),U5=a(","),Jj=u(),Hp=o("a"),Xj=u(),ys=o("h3"),qt=o("a"),pf=o("span"),f(io.$$.fragment),G5=u(),uf=o("span"),L5=a("Deployment with multiple GPUs"),Qj=u(),Et=o("p"),M5=a("To deploy this feature with multiple GPUs adjust the "),Bp=o("a"),Z5=a("Trainer"),N5=a(` command line arguments as
following:`),eg=u(),$t=o("ol"),ws=o("li"),H5=a("replace "),cf=o("code"),B5=a("python -m torch.distributed.launch"),W5=a(" with "),hf=o("code"),F5=a("deepspeed"),V5=a("."),Y5=u(),ye=o("li"),K5=a("add a new argument "),ff=o("code"),J5=a("--deepspeed ds_config.json"),X5=a(", where "),df=o("code"),Q5=a("ds_config.json"),e6=a(` is the DeepSpeed configuration file as
documented `),uo=o("a"),s6=a("here"),t6=a(". The file naming is up to you."),sg=u(),Wp=o("p"),a6=a("Therefore, if your original command line looked as follows:"),tg=u(),f(co.$$.fragment),ag=u(),Fp=o("p"),n6=a("Now it should be:"),ng=u(),f(ho.$$.fragment),og=u(),O=o("p"),o6=a("Unlike, "),mf=o("code"),l6=a("torch.distributed.launch"),r6=a(" where you have to specify how many GPUs to use with "),_f=o("code"),p6=a("--nproc_per_node"),i6=a(`, with the
`),vf=o("code"),u6=a("deepspeed"),c6=a(" launcher you don\u2019t have to use the corresponding "),jf=o("code"),h6=a("--num_gpus"),f6=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),fo=o("a"),d6=a("here"),m6=a("."),lg=u(),J=o("p"),_6=a("In fact, you can continue using "),gf=o("code"),v6=a("-m torch.distributed.launch"),j6=a(` with DeepSpeed as long as you don\u2019t need to use
`),yf=o("code"),g6=a("deepspeed"),y6=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),wf=o("code"),w6=a("deepspeed"),b6=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),rg=u(),kt=o("p"),q6=a("Here is an example of running "),bf=o("code"),E6=a("run_translation.py"),$6=a(" under DeepSpeed deploying all available GPUs:"),pg=u(),f(mo.$$.fragment),ig=u(),Pt=o("p"),k6=a("Note that in the DeepSpeed documentation you are likely to see "),qf=o("code"),P6=a("--deepspeed --deepspeed_config ds_config.json"),z6=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),ug=u(),zt=o("p"),D6=a("For some practical usage examples, please, see this "),_o=o("a"),O6=a("post"),T6=a("."),cg=u(),Vp=o("a"),hg=u(),bs=o("h3"),Dt=o("a"),Ef=o("span"),f(vo.$$.fragment),A6=u(),$f=o("span"),S6=a("Deployment with one GPU"),fg=u(),Ot=o("p"),C6=a("To deploy DeepSpeed with one GPU adjust the "),Yp=o("a"),x6=a("Trainer"),R6=a(" command line arguments as follows:"),dg=u(),f(jo.$$.fragment),mg=u(),Ae=o("p"),I6=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),kf=o("code"),U6=a("--num_gpus=1"),G6=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),go=o("a"),L6=a("documentation"),M6=a(" discusses the launcher options."),_g=u(),Kp=o("p"),Z6=a("Why would you want to use DeepSpeed with just one GPU?"),vg=u(),Tt=o("ol"),Pf=o("li"),N6=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),H6=u(),zf=o("li"),B6=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),jg=u(),Jp=o("p"),W6=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),gg=u(),f(yo.$$.fragment),yg=u(),Xp=o("p"),F6=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),wg=u(),At=o("p"),V6=a("For a practical usage example of this type of deployment, please, see this "),wo=o("a"),Y6=a("post"),K6=a("."),bg=u(),Qp=o("p"),J6=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),qg=u(),ei=o("p"),X6=a("Notes:"),Eg=u(),si=o("ul"),qs=o("li"),bo=o("p"),Q6=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Df=o("code"),e4=a("CUDA_VISIBLE_DEVICES"),s4=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),t4=u(),f(qo.$$.fragment),a4=u(),Of=o("p"),n4=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),$g=u(),ti=o("a"),kg=u(),Es=o("h3"),St=o("a"),Tf=o("span"),f(Eo.$$.fragment),o4=u(),Af=o("span"),l4=a("Deployment in Notebooks"),Pg=u(),Ct=o("p"),r4=a("The problem with running notebook cells as a script is that there is no normal "),Sf=o("code"),p4=a("deepspeed"),i4=a(` launcher to rely on, so
under certain setups we have to emulate it.`),zg=u(),ai=o("p"),u4=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),Dg=u(),f($o.$$.fragment),Og=u(),xt=o("p"),c4=a("Note: "),Cf=o("code"),h4=a("..."),f4=a(" stands for the normal arguments that you\u2019d pass to the functions."),Tg=u(),ni=o("p"),d4=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),Ag=u(),oi=o("p"),m4=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),Sg=u(),f(ko.$$.fragment),Cg=u(),Se=o("p"),_4=a("If the training script is in a normal file and not in the notebook cells, you can launch "),xf=o("code"),v4=a("deepspeed"),j4=a(` normally via
shell from a cell. For example, to use `),Rf=o("code"),g4=a("run_translation.py"),y4=a(" you would launch it with:"),xg=u(),f(Po.$$.fragment),Rg=u(),Rt=o("p"),w4=a("or with "),If=o("code"),b4=a("%%bash"),q4=a(" magic, where you can write a multi-line code for the shell program to run:"),Ig=u(),f(zo.$$.fragment),Ug=u(),li=o("p"),E4=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Gg=u(),It=o("p"),$4=a("Note: While "),Uf=o("code"),k4=a("%%bash"),P4=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Lg=u(),ri=o("a"),Mg=u(),$s=o("h3"),Ut=o("a"),Gf=o("span"),f(Do.$$.fragment),z4=u(),Lf=o("span"),D4=a("Configuration"),Zg=u(),Gt=o("p"),O4=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Oo=o("a"),T4=a("following documentation"),A4=a("."),Ng=u(),Lt=o("p"),S4=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),To=o("a"),C4=a(`the DeepSpeedExamples
repo`),x4=a(":"),Hg=u(),f(Ao.$$.fragment),Bg=u(),Mt=o("p"),R4=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Mf=o("code"),I4=a(".json"),U4=a(" files with:"),Wg=u(),f(So.$$.fragment),Fg=u(),Zt=o("p"),G4=a("Some more examples are to be found in the "),Co=o("a"),L4=a("main repo"),M4=a(" as well."),Vg=u(),pi=o("p"),Z4=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Yg=u(),X=o("p"),N4=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Zf=o("code"),H4=a("AdamW"),B4=a(" optimizer and "),Nf=o("code"),W4=a("WarmupLR"),F4=a(` scheduler and will enable mixed
precision training if `),Hf=o("code"),V4=a("--fp16"),Y4=a(" is passed:"),Kg=u(),f(xo.$$.fragment),Jg=u(),Nt=o("p"),K4=a("When you execute the program, DeepSpeed will log the configuration it received from the "),ii=o("a"),J4=a("Trainer"),X4=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Xg=u(),ui=o("a"),Qg=u(),ks=o("h3"),Ht=o("a"),Bf=o("span"),f(Ro.$$.fragment),Q4=u(),Wf=o("span"),e8=a("Passing Configuration"),ey=u(),T=o("p"),s8=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),ci=o("a"),t8=a("Trainer"),a8=a(" via "),hi=o("a"),n8=a("TrainingArguments"),o8=a(" then for the "),Ff=o("code"),l8=a("deepspeed"),r8=a(` argument you can
pass a nested `),Vf=o("code"),p8=a("dict"),i8=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),fi=o("a"),u8=a("TrainingArguments"),c8=a("."),sy=u(),di=o("p"),h8=a("To summarize you can do:"),ty=u(),f(Io.$$.fragment),ay=u(),mi=o("p"),f8=a("or:"),ny=u(),f(Uo.$$.fragment),oy=u(),_i=o("a"),ly=u(),Ps=o("h3"),Bt=o("a"),Yf=o("span"),f(Go.$$.fragment),d8=u(),Kf=o("span"),m8=a("Shared Configuration"),ry=u(),f(Wt.$$.fragment),py=u(),Ce=o("p"),_8=a("Some configuration values are required by both the "),vi=o("a"),v8=a("Trainer"),j8=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),ji=o("a"),g8=a("Trainer"),y8=a(" command line arguments."),iy=u(),Ft=o("p"),w8=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),gi=o("a"),b8=a("Trainer"),q8=a(` do the majority
of configuration for you.`),uy=u(),xe=o("p"),E8=a("Therefore, in the rest of this guide you will find a special configuration value: "),Jf=o("code"),$8=a("auto"),k8=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),yi=o("a"),P8=a("Trainer"),z8=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),cy=u(),wi=o("p"),D8=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),hy=u(),Vt=o("p"),O8=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),bi=o("a"),T8=a("TrainingArguments"),A8=a(" based on that. The steps are:"),fy=u(),Yt=o("ol"),Xf=o("li"),S8=a("Create or load the DeepSpeed configuration to be used as a master configuration"),C8=u(),Lo=o("li"),x8=a("Create the "),qi=o("a"),R8=a("TrainingArguments"),I8=a(" object based on these values"),dy=u(),Q=o("p"),U8=a("Do note that some values, such as "),Qf=o("code"),G8=a("scheduler.params.total_num_steps"),L8=a(` are calculated by
`),Ei=o("a"),M8=a("Trainer"),Z8=a(" during "),ed=o("code"),N8=a("train"),H8=a(", but you can of course do the math yourself."),my=u(),$i=o("a"),_y=u(),zs=o("h3"),Kt=o("a"),sd=o("span"),f(Mo.$$.fragment),B8=u(),td=o("span"),W8=a("ZeRO"),vy=u(),Zo=o("p"),No=o("a"),F8=a("Zero Redundancy Optimizer (ZeRO)"),V8=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),jy=u(),Re=o("p"),Y8=a("The "),ad=o("code"),K8=a("zero_optimization"),J8=a(" section of the configuration file is the most important part ("),Ho=o("a"),X8=a("docs"),Q8=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),gy=u(),Jt=o("p"),e7=a("This section has to be configured exclusively via DeepSpeed configuration - the "),ki=o("a"),s7=a("Trainer"),t7=a(` provides
no equivalent command line arguments.`),yy=u(),Pi=o("p"),a7=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),wy=u(),zi=o("a"),by=u(),Ds=o("h4"),Xt=o("a"),nd=o("span"),f(Bo.$$.fragment),n7=u(),od=o("span"),o7=a("ZeRO-2 Config"),qy=u(),Di=o("p"),l7=a("The following is an example of configuration for ZeRO stage 2:"),Ey=u(),f(Wo.$$.fragment),$y=u(),Oi=o("p"),ld=o("strong"),r7=a("Performance tuning:"),ky=u(),Ie=o("ul"),Os=o("li"),p7=a("enabling "),rd=o("code"),i7=a("offload_optimizer"),u7=a(" should reduce GPU RAM usage (it requires "),pd=o("code"),c7=a('"stage": 2'),h7=a(")"),f7=u(),A=o("li"),id=o("code"),d7=a('"overlap_comm": true'),m7=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),ud=o("code"),_7=a("overlap_comm"),v7=a(` uses 4.5x
the `),cd=o("code"),j7=a("allgather_bucket_size"),g7=a(" and "),hd=o("code"),y7=a("reduce_bucket_size"),w7=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),fd=o("code"),b7=a("5e8 x 2Bytes x 2 x 4.5"),q7=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),dd=o("code"),E7=a("2e8"),$7=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),k7=u(),md=o("li"),P7=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),Py=u(),Ue=o("p"),z7=a("Additionally, "),_d=o("code"),D7=a("deepspeed==0.4.4"),O7=a(" added a new option "),vd=o("code"),T7=a("round_robin_gradients"),A7=a(" which you can enable with:"),zy=u(),f(Fo.$$.fragment),Dy=u(),Ti=o("p"),S7=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),Oy=u(),Ai=o("a"),Ty=u(),Ts=o("h4"),Qt=o("a"),jd=o("span"),f(Vo.$$.fragment),C7=u(),gd=o("span"),x7=a("ZeRO-3 Config"),Ay=u(),Si=o("p"),R7=a("The following is an example of configuration for ZeRO stage 3:"),Sy=u(),f(Yo.$$.fragment),Cy=u(),N=o("p"),I7=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),yd=o("code"),U7=a('"device": "cpu"'),G7=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),wd=o("code"),L7=a("none"),M7=a(" instead of "),bd=o("code"),Z7=a("cpu"),N7=a(" for the "),qd=o("code"),H7=a("device"),B7=a(` entry. Offloading to
NVMe is discussed further down.`),xy=u(),Ge=o("p"),W7=a("Pinned memory is enabled with "),Ed=o("code"),F7=a("pin_memory"),V7=a(" set to "),$d=o("code"),Y7=a("true"),K7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Ry=u(),Ci=o("p"),kd=o("strong"),J7=a("Performance tuning:"),Iy=u(),ea=o("ul"),Ko=o("li"),Pd=o("code"),X7=a("stage3_max_live_parameters"),Q7=a(": "),zd=o("code"),ek=a("1e9"),sk=u(),Jo=o("li"),Dd=o("code"),tk=a("stage3_max_reuse_distance"),ak=a(": "),Od=o("code"),nk=a("1e9"),Uy=u(),S=o("p"),ok=a("If hitting OOM reduce "),Td=o("code"),lk=a("stage3_max_live_parameters"),rk=a(" and "),Ad=o("code"),pk=a("stage3_max_reuse_distance"),ik=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Sd=o("code"),uk=a("1e9"),ck=a(` would consume ~2GB. The memory is shared by
`),Cd=o("code"),hk=a("stage3_max_live_parameters"),fk=a(" and "),xd=o("code"),dk=a("stage3_max_reuse_distance"),mk=a(", so it\u2019s not additive, it\u2019s just 2GB total."),Gy=u(),we=o("p"),Rd=o("code"),_k=a("stage3_max_live_parameters"),vk=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Id=o("code"),jk=a("stage3_max_reuse_distance"),gk=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Ud=o("code"),yk=a("stage3_max_reuse_distance"),wk=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ly=u(),xi=o("p"),bk=a("The following configuration values depend on the model\u2019s hidden size:"),My=u(),Le=o("ul"),Xo=o("li"),Gd=o("code"),qk=a("reduce_bucket_size"),Ek=a(": "),Ld=o("code"),$k=a("hidden_size*hidden_size"),kk=u(),Qo=o("li"),Md=o("code"),Pk=a("stage3_prefetch_bucket_size"),zk=a(": "),Zd=o("code"),Dk=a("0.9 * hidden_size * hidden_size"),Ok=u(),el=o("li"),Nd=o("code"),Tk=a("stage3_param_persistence_threshold"),Ak=a(": "),Hd=o("code"),Sk=a("10 * hidden_size"),Zy=u(),Me=o("p"),Ck=a("therefore set these values to "),Bd=o("code"),xk=a("auto"),Rk=a(" and the "),Ri=o("a"),Ik=a("Trainer"),Uk=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),Ny=u(),sl=o("p"),Wd=o("code"),Gk=a("stage3_gather_fp16_weights_on_model_save"),Lk=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Hy=u(),ee=o("p"),Mk=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Fd=o("code"),Zk=a("allgather_partitions"),Nk=a(", "),Vd=o("code"),Hk=a("allgather_bucket_size"),Bk=a(` and
`),Yd=o("code"),Wk=a("reduce_scatter"),Fk=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),By=u(),Ii=o("ul"),tl=o("li"),Kd=o("code"),Vk=a("sub_group_size"),Yk=a(": "),Jd=o("code"),Kk=a("1e9"),Wy=u(),be=o("p"),Xd=o("code"),Jk=a("sub_group_size"),Xk=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),Qd=o("code"),Qk=a("sub_group_size"),e9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),em=o("code"),s9=a("sub_group_size"),t9=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Fy=u(),Ze=o("p"),a9=a("You can leave "),sm=o("code"),n9=a("sub_group_size"),o9=a(" to its default value of "),tm=o("em"),l9=a("1e9"),r9=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Vy=u(),sa=o("ol"),al=o("li"),p9=a("Running into OOM during optimizer step: Reduce "),am=o("code"),i9=a("sub_group_size"),u9=a(" to reduce memory utilization of temporary buffers"),c9=u(),nl=o("li"),h9=a("Optimizer Step is taking a long time: Increase "),nm=o("code"),f9=a("sub_group_size"),d9=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Yy=u(),Ui=o("a"),Ky=u(),As=o("h3"),ta=o("a"),om=o("span"),f(ol.$$.fragment),m9=u(),lm=o("span"),_9=a("NVMe Support"),Jy=u(),Gi=o("p"),v9=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Xy=u(),Li=o("p"),j9=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Qy=u(),f(ll.$$.fragment),ew=u(),aa=o("p"),g9=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),rm=o("em"),y9=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),w9=a(")."),sw=u(),Ne=o("p"),b9=a("Here is the full documentation for offloading "),rl=o("a"),q9=a("optimizer states"),E9=a(" and "),pl=o("a"),$9=a("parameters"),k9=a("."),tw=u(),na=o("p"),P9=a("Make sure that your "),pm=o("code"),z9=a("nvme_path"),D9=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),aw=u(),He=o("p"),O9=a("In order to figure out the optimal "),im=o("code"),T9=a("aio"),A9=a(` configuration block you must run a benchmark on your target setup, as
`),il=o("a"),S9=a("explained here"),C9=a("."),nw=u(),Mi=o("a"),ow=u(),Ss=o("h4"),oa=o("a"),um=o("span"),f(ul.$$.fragment),x9=u(),cm=o("span"),R9=a("ZeRO-2 vs ZeRO-3 Performance"),lw=u(),Zi=o("p"),I9=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),rw=u(),Ni=o("p"),U9=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),pw=u(),la=o("ul"),Cs=o("li"),G9=a("set "),hm=o("code"),L9=a("stage3_param_persistence_threshold"),M9=a(" to a very large number - larger than the largest parameter, e.g., "),fm=o("code"),Z9=a("6 * hidden_size * hidden_size"),N9=a(". This will keep the parameters on the GPUs."),H9=u(),cl=o("li"),B9=a("turn off "),dm=o("code"),W9=a("offload_params"),F9=a(" since ZeRO-2 doesn\u2019t have that option."),iw=u(),Be=o("p"),V9=a("The performance will likely improve significantly with just "),mm=o("code"),Y9=a("offload_params"),K9=a(` turned off, even if you don\u2019t change
`),_m=o("code"),J9=a("stage3_param_persistence_threshold"),X9=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),uw=u(),Hi=o("a"),cw=u(),xs=o("h4"),ra=o("a"),vm=o("span"),f(hl.$$.fragment),Q9=u(),jm=o("span"),eP=a("ZeRO-2 Example"),hw=u(),pa=o("p"),sP=a("Here is a full ZeRO-2 auto-configuration file "),gm=o("code"),tP=a("ds_config_zero2.json"),aP=a(":"),fw=u(),f(fl.$$.fragment),dw=u(),ia=o("p"),nP=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),ym=o("code"),oP=a("auto"),lP=a(" settings in it."),mw=u(),f(dl.$$.fragment),_w=u(),Bi=o("a"),vw=u(),Rs=o("h4"),ua=o("a"),wm=o("span"),f(ml.$$.fragment),rP=u(),bm=o("span"),pP=a("ZeRO-3 Example"),jw=u(),ca=o("p"),iP=a("Here is a full ZeRO-3 auto-configuration file "),qm=o("code"),uP=a("ds_config_zero3.json"),cP=a(":"),gw=u(),f(_l.$$.fragment),yw=u(),ha=o("p"),hP=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Em=o("code"),fP=a("auto"),dP=a(" settings in it."),ww=u(),f(vl.$$.fragment),bw=u(),Is=o("h3"),fa=o("a"),$m=o("span"),f(jl.$$.fragment),mP=u(),km=o("span"),_P=a("Optimizer and Scheduler"),qw=u(),da=o("p"),vP=a("As long as you don\u2019t enable "),Pm=o("code"),jP=a("offload_optimizer"),gP=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Ew=u(),Wi=o("p"),yP=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),$w=u(),ma=o("p"),wP=a("It is possible to use a non-DeepSpeed optimizer when "),zm=o("code"),bP=a("offload_optimizer"),qP=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),kw=u(),Fi=o("a"),Pw=u(),Us=o("h4"),_a=o("a"),Dm=o("span"),f(gl.$$.fragment),EP=u(),Om=o("span"),$P=a("Optimizer"),zw=u(),We=o("p"),kP=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Tm=o("code"),PP=a("torch"),zP=a(". The full documentation is "),yl=o("a"),DP=a("here"),OP=a("."),Dw=u(),q=o("p"),TP=a("If you don\u2019t configure the "),Am=o("code"),AP=a("optimizer"),SP=a(" entry in the configuration file, the "),Vi=o("a"),CP=a("Trainer"),xP=a(` will
automatically set it to `),Sm=o("code"),RP=a("AdamW"),IP=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Cm=o("code"),UP=a("--learning_rate"),GP=a(", "),xm=o("code"),LP=a("--adam_beta1"),MP=a(", "),Rm=o("code"),ZP=a("--adam_beta2"),NP=a(", "),Im=o("code"),HP=a("--adam_epsilon"),BP=a(" and "),Um=o("code"),WP=a("--weight_decay"),FP=a("."),Ow=u(),Fe=o("p"),VP=a("Here is an example of the auto-configured "),Gm=o("code"),YP=a("optimizer"),KP=a(" entry for "),Lm=o("code"),JP=a("AdamW"),XP=a(":"),Tw=u(),f(wl.$$.fragment),Aw=u(),Yi=o("p"),QP=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),Sw=u(),se=o("ul"),bl=o("li"),Mm=o("code"),ez=a("lr"),sz=a(" with the value of "),Zm=o("code"),tz=a("--learning_rate"),az=u(),ql=o("li"),Nm=o("code"),nz=a("betas"),oz=a(" with the value of "),Hm=o("code"),lz=a("--adam_beta1 --adam_beta2"),rz=u(),El=o("li"),Bm=o("code"),pz=a("eps"),iz=a(" with the value of "),Wm=o("code"),uz=a("--adam_epsilon"),cz=u(),$l=o("li"),Fm=o("code"),hz=a("weight_decay"),fz=a(" with the value of "),Vm=o("code"),dz=a("--weight_decay"),Cw=u(),Ki=o("p"),mz=a("Therefore please remember to tune the shared hyperparameters on the command line."),xw=u(),Ji=o("p"),_z=a("You can also set the values explicitly:"),Rw=u(),f(kl.$$.fragment),Iw=u(),va=o("p"),vz=a("But then you\u2019re on your own synchronizing the "),Xi=o("a"),jz=a("Trainer"),gz=a(` command line arguments and the DeepSpeed
configuration.`),Uw=u(),Qi=o("p"),yz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),Gw=u(),f(Pl.$$.fragment),Lw=u(),te=o("p"),wz=a("Similarly to "),Ym=o("code"),bz=a("AdamW"),qz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Km=o("code"),Ez=a("weight_decay"),$z=a(" around "),Jm=o("code"),kz=a("0.01"),Pz=a("."),Mw=u(),eu=o("a"),Zw=u(),Gs=o("h4"),ja=o("a"),Xm=o("span"),f(zl.$$.fragment),zz=u(),Qm=o("span"),Dz=a("Scheduler"),Nw=u(),C=o("p"),Oz=a("DeepSpeed supports "),e_=o("code"),Tz=a("LRRangeTest"),Az=a(", "),s_=o("code"),Sz=a("OneCycle"),Cz=a(", "),t_=o("code"),xz=a("WarmupLR"),Rz=a(" and "),a_=o("code"),Iz=a("WarmupDecayLR"),Uz=a(` learning rate schedulers. The full
documentation is `),Dl=o("a"),Gz=a("here"),Lz=a("."),Hw=u(),su=o("p"),Mz=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),Bw=u(),ga=o("ul"),Ol=o("li"),n_=o("code"),Zz=a("WarmupLR"),Nz=a(" via "),o_=o("code"),Hz=a("--lr_scheduler_type constant_with_warmup"),Bz=u(),Ve=o("li"),l_=o("code"),Wz=a("WarmupDecayLR"),Fz=a(" via "),r_=o("code"),Vz=a("--lr_scheduler_type linear"),Yz=a(". This is also the default value for "),p_=o("code"),Kz=a("--lr_scheduler_type"),Jz=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Ww=u(),P=o("p"),Xz=a("If you don\u2019t configure the "),i_=o("code"),Qz=a("scheduler"),eD=a(" entry in the configuration file, the "),tu=o("a"),sD=a("Trainer"),tD=a(` will use
the values of `),u_=o("code"),aD=a("--lr_scheduler_type"),nD=a(", "),c_=o("code"),oD=a("--learning_rate"),lD=a(" and "),h_=o("code"),rD=a("--warmup_steps"),pD=a(" or "),f_=o("code"),iD=a("--warmup_ratio"),uD=a(` to configure a
\u{1F917} Transformers version of it.`),Fw=u(),Ye=o("p"),cD=a("Here is an example of the auto-configured "),d_=o("code"),hD=a("scheduler"),fD=a(" entry for "),m_=o("code"),dD=a("WarmupLR"),mD=a(":"),Vw=u(),f(Tl.$$.fragment),Yw=u(),Ke=o("p"),_D=a("Since "),__=o("em"),vD=a("\u201Cauto\u201D"),jD=a(" is used the "),au=o("a"),gD=a("Trainer"),yD=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Kw=u(),ae=o("ul"),ya=o("li"),v_=o("code"),wD=a("warmup_min_lr"),bD=a(" with the value of "),j_=o("code"),qD=a("0"),ED=a("."),$D=u(),wa=o("li"),g_=o("code"),kD=a("warmup_max_lr"),PD=a(" with the value of "),y_=o("code"),zD=a("--learning_rate"),DD=a("."),OD=u(),Je=o("li"),w_=o("code"),TD=a("warmup_num_steps"),AD=a(" with the value of "),b_=o("code"),SD=a("--warmup_steps"),CD=a(" if provided. Otherwise will use "),q_=o("code"),xD=a("--warmup_ratio"),RD=a(`
multiplied by the number of training steps and rounded up.`),ID=u(),Xe=o("li"),E_=o("code"),UD=a("total_num_steps"),GD=a(" with either the value of "),$_=o("code"),LD=a("--max_steps"),MD=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),k_=o("code"),ZD=a("WarmupDecayLR"),ND=a(")."),Jw=u(),nu=o("p"),HD=a("You can, of course, take over any or all of the configuration values and set those yourself:"),Xw=u(),f(Al.$$.fragment),Qw=u(),ba=o("p"),BD=a("But then you\u2019re on your own synchronizing the "),ou=o("a"),WD=a("Trainer"),FD=a(` command line arguments and the DeepSpeed
configuration.`),e2=u(),qa=o("p"),VD=a("For example, for "),P_=o("code"),YD=a("WarmupDecayLR"),KD=a(", you can use the following entry:"),s2=u(),f(Sl.$$.fragment),t2=u(),H=o("p"),JD=a("and "),z_=o("code"),XD=a("total_num_steps"),QD=a(", "),D_=o("code"),eO=a("warmup_max_lr"),sO=a(", "),O_=o("code"),tO=a("warmup_num_steps"),aO=a(" and "),T_=o("code"),nO=a("total_num_steps"),oO=a(" will be set at loading time."),a2=u(),lu=o("a"),n2=u(),Ls=o("h3"),Ea=o("a"),A_=o("span"),f(Cl.$$.fragment),lO=u(),S_=o("span"),rO=a("fp32 Precision"),o2=u(),ru=o("p"),pO=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),l2=u(),$a=o("p"),iO=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),C_=o("code"),uO=a("NaN"),cO=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),r2=u(),f(xl.$$.fragment),p2=u(),ka=o("p"),hO=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Rl=o("a"),fO=a("TensorFloat-32(TF32) on Ampere devices"),dO=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),i2=u(),pu=o("a"),u2=u(),Ms=o("h3"),Pa=o("a"),x_=o("span"),f(Il.$$.fragment),mO=u(),R_=o("span"),_O=a("Automatic Mixed Precision"),c2=u(),iu=o("p"),vO=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),h2=u(),uu=o("p"),jO=a("To configure pytorch AMP-like mode set:"),f2=u(),f(Ul.$$.fragment),d2=u(),Qe=o("p"),gO=a("and the "),cu=o("a"),yO=a("Trainer"),wO=a(` will automatically enable or disable it based on the value of
`),I_=o("code"),bO=a("args.fp16_backend"),qO=a(". The rest of config values are up to you."),m2=u(),za=o("p"),EO=a("This mode gets enabled when "),U_=o("code"),$O=a("--fp16 --fp16_backend amp"),kO=a(" command line args are passed."),_2=u(),hu=o("p"),PO=a("You can also enable/disable this mode explicitly:"),v2=u(),f(Gl.$$.fragment),j2=u(),Da=o("p"),zO=a("But then you\u2019re on your own synchronizing the "),fu=o("a"),DO=a("Trainer"),OO=a(` command line arguments and the DeepSpeed
configuration.`),g2=u(),Oa=o("p"),TO=a("Here is the "),Ll=o("a"),AO=a("documentation"),SO=a("."),y2=u(),du=o("p"),CO=a("To configure apex AMP-like mode set:"),w2=u(),f(Ml.$$.fragment),b2=u(),ne=o("p"),xO=a("and the "),mu=o("a"),RO=a("Trainer"),IO=a(" will automatically configure it based on the values of "),G_=o("code"),UO=a("args.fp16_backend"),GO=a(` and
`),L_=o("code"),LO=a("args.fp16_opt_level"),MO=a("."),q2=u(),Ta=o("p"),ZO=a("This mode gets enabled when "),M_=o("code"),NO=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),HO=a(" command line args are passed."),E2=u(),_u=o("p"),BO=a("You can also configure this mode explicitly:"),$2=u(),f(Zl.$$.fragment),k2=u(),Aa=o("p"),WO=a("But then you\u2019re on your own synchronizing the "),vu=o("a"),FO=a("Trainer"),VO=a(` command line arguments and the DeepSpeed
configuration.`),P2=u(),Sa=o("p"),YO=a("Here is the "),Nl=o("a"),KO=a("documentation"),JO=a("."),z2=u(),ju=o("a"),D2=u(),Zs=o("h3"),Ca=o("a"),Z_=o("span"),f(Hl.$$.fragment),XO=u(),N_=o("span"),QO=a("Batch Size"),O2=u(),gu=o("p"),eT=a("To configure batch size, use:"),T2=u(),f(Bl.$$.fragment),A2=u(),x=o("p"),sT=a("and the "),yu=o("a"),tT=a("Trainer"),aT=a(" will automatically set "),H_=o("code"),nT=a("train_micro_batch_size_per_gpu"),oT=a(` to the value of
`),B_=o("code"),lT=a("args.per_device_train_batch_size"),rT=a(" and "),W_=o("code"),pT=a("train_batch_size"),iT=a(" to "),F_=o("code"),uT=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),cT=a("."),S2=u(),wu=o("p"),hT=a("You can also set the values explicitly:"),C2=u(),f(Wl.$$.fragment),x2=u(),xa=o("p"),fT=a("But then you\u2019re on your own synchronizing the "),bu=o("a"),dT=a("Trainer"),mT=a(` command line arguments and the DeepSpeed
configuration.`),R2=u(),qu=o("a"),I2=u(),Ns=o("h3"),Ra=o("a"),V_=o("span"),f(Fl.$$.fragment),_T=u(),Y_=o("span"),vT=a("Gradient Accumulation"),U2=u(),Eu=o("p"),jT=a("To configure gradient accumulation set:"),G2=u(),f(Vl.$$.fragment),L2=u(),es=o("p"),gT=a("and the "),$u=o("a"),yT=a("Trainer"),wT=a(" will automatically set it to the value of "),K_=o("code"),bT=a("args.gradient_accumulation_steps"),qT=a("."),M2=u(),ku=o("p"),ET=a("You can also set the value explicitly:"),Z2=u(),f(Yl.$$.fragment),N2=u(),Ia=o("p"),$T=a("But then you\u2019re on your own synchronizing the "),Pu=o("a"),kT=a("Trainer"),PT=a(` command line arguments and the DeepSpeed
configuration.`),H2=u(),zu=o("a"),B2=u(),Hs=o("h3"),Ua=o("a"),J_=o("span"),f(Kl.$$.fragment),zT=u(),X_=o("span"),DT=a("Gradient Clipping"),W2=u(),Du=o("p"),OT=a("To configure gradient gradient clipping set:"),F2=u(),f(Jl.$$.fragment),V2=u(),ss=o("p"),TT=a("and the "),Ou=o("a"),AT=a("Trainer"),ST=a(" will automatically set it to the value of "),Q_=o("code"),CT=a("args.max_grad_norm"),xT=a("."),Y2=u(),Tu=o("p"),RT=a("You can also set the value explicitly:"),K2=u(),f(Xl.$$.fragment),J2=u(),Ga=o("p"),IT=a("But then you\u2019re on your own synchronizing the "),Au=o("a"),UT=a("Trainer"),GT=a(` command line arguments and the DeepSpeed
configuration.`),X2=u(),Su=o("a"),Q2=u(),Bs=o("h3"),La=o("a"),e1=o("span"),f(Ql.$$.fragment),LT=u(),s1=o("span"),MT=a("Getting The Model Weights Out"),eb=u(),Ma=o("p"),ZT=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),t1=o("code"),NT=a("global_step*/*optim_states.pt"),HT=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),sb=u(),Cu=o("p"),a1=o("strong"),BT=a("FP16 Weights:"),tb=u(),Za=o("p"),WT=a("When a model is saved under ZeRO-2, you end up having the normal "),n1=o("code"),FT=a("pytorch_model.bin"),VT=a(` file with the model weights, but
they are only the fp16 version of the weights.`),ab=u(),B=o("p"),YT=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),o1=o("code"),KT=a('"stage3_gather_fp16_weights_on_model_save": true'),JT=a(" is required to get the "),l1=o("code"),XT=a("Trainer"),QT=a(` to save the fp16
version of the weights. If this setting is `),r1=o("code"),eA=a("False"),sA=u(),p1=o("code"),tA=a("pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),aA=a(` it
won\u2019t be possible to load it back.`),nb=u(),f(er.$$.fragment),ob=u(),xu=o("p"),i1=o("strong"),nA=a("FP32 Weights:"),lb=u(),Na=o("p"),oA=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),sr=o("a"),lA=a("models hub"),rA=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),rb=u(),Ru=o("p"),u1=o("strong"),pA=a("Live FP32 Weights Recovery:"),pb=u(),Iu=o("p"),iA=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),ib=u(),Uu=o("p"),uA=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),ub=u(),f(tr.$$.fragment),cb=u(),ts=o("p"),cA=a("If you\u2019re using the "),c1=o("code"),hA=a("--load_best_model_at_end"),fA=a(" class:"),h1=o("em"),dA=a("~transformers.TrainingArguments"),mA=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),hb=u(),f(ar.$$.fragment),fb=u(),f(Ha.$$.fragment),db=u(),Ba=o("p"),_A=a("Of course, you don\u2019t have to use class:"),f1=o("em"),vA=a("~transformers.Trainer"),jA=a(` and you can adjust the examples above to your own
trainer.`),mb=u(),Wa=o("p"),gA=a("If for some reason you want more refinement, you can also extract the fp32 "),d1=o("code"),yA=a("state_dict"),wA=a(` of the weights and apply
these yourself as is shown in the following example:`),_b=u(),f(nr.$$.fragment),vb=u(),Gu=o("p"),m1=o("strong"),bA=a("Offline FP32 Weights Recovery:"),jb=u(),as=o("p"),qA=a("DeepSpeed creates a special conversion script "),_1=o("code"),EA=a("zero_to_fp32.py"),$A=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),v1=o("code"),kA=a("Trainer"),PA=a(" to do the extraction."),gb=u(),Lu=o("p"),zA=a("Let\u2019s say your checkpoint folder looks like this:"),yb=u(),f(or.$$.fragment),wb=u(),Fa=o("p"),DA=a("In this example there is just one DeepSpeed checkpoint sub-folder "),j1=o("em"),OA=a("global_step1"),TA=a(`. Therefore to reconstruct the fp32
weights just run:`),bb=u(),f(lr.$$.fragment),qb=u(),Va=o("p"),AA=a("This is it. "),g1=o("code"),SA=a("pytorch_model.bin"),CA=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),Eb=u(),Mu=o("p"),xA=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),$b=u(),rr=o("p"),y1=o("code"),RA=a("python zero_to_fp32.py -h"),IA=a(" will give you usage details."),kb=u(),ns=o("p"),UA=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),w1=o("code"),GA=a("latest"),LA=a(`, which in the current
example will contain `),b1=o("code"),MA=a("global_step1"),ZA=a("."),Pb=u(),Zu=o("p"),NA=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),zb=u(),Ws=o("h3"),Ya=o("a"),q1=o("span"),f(pr.$$.fragment),HA=u(),E1=o("span"),BA=a("ZeRO-3 and Infinity Nuances"),Db=u(),Nu=o("p"),WA=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),Ob=u(),Hu=o("p"),FA=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),Tb=u(),Bu=o("p"),VA=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),Ab=u(),Fs=o("h4"),Ka=o("a"),$1=o("span"),f(ir.$$.fragment),YA=u(),k1=o("span"),KA=a("Constructing Massive Models"),Sb=u(),Ja=o("p"),JA=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),P1=o("em"),XA=a("deepspeed.zero.Init()"),QA=a(`
context manager (which is also a function decorator), like so:`),Cb=u(),f(ur.$$.fragment),xb=u(),Wu=o("p"),eS=a("As you can see this gives you a randomly initialized model."),Rb=u(),k=o("p"),sS=a("If you want to use a pretrained model, "),z1=o("code"),tS=a("model_class.from_pretrained"),aS=a(` will activate this feature as long as
`),D1=o("code"),nS=a("is_deepspeed_zero3_enabled()"),oS=a(" returns "),O1=o("code"),lS=a("True"),rS=a(`, which currently is setup by the
`),Fu=o("a"),pS=a("TrainingArguments"),iS=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),Vu=o("a"),uS=a("TrainingArguments"),cS=a(" object "),T1=o("strong"),hS=a("before"),fS=a(` calling
`),A1=o("code"),dS=a("from_pretrained"),mS=a(". Here is an example of a possible sequence:"),Ib=u(),f(cr.$$.fragment),Ub=u(),Xa=o("p"),_S=a("If you\u2019re using the official example scripts and your command line arguments include "),S1=o("code"),vS=a("--deepspeed ds_config.json"),jS=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),Gb=u(),Yu=o("p"),gS=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),Lb=u(),Qa=o("p"),yS=a("For full details on this method and other related features please refer to "),hr=o("a"),wS=a("Constructing Massive Models"),bS=a("."),Mb=u(),oe=o("p"),qS=a("Also when loading fp16-pretrained models, you will want to tell "),C1=o("code"),ES=a("from_pretrained"),$S=a(` to use
`),x1=o("code"),kS=a("torch_dtype=torch.float16"),PS=a(". For details, please, see "),Ku=o("a"),zS=a("from_pretrained-torch-dtype"),DS=a("."),Zb=u(),Vs=o("h4"),en=o("a"),R1=o("span"),f(fr.$$.fragment),OS=u(),I1=o("span"),TS=a("Gathering Parameters"),Nb=u(),dr=o("p"),AS=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),mr=o("a"),SS=a("Gathering Parameters"),Hb=u(),sn=o("p"),CS=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),U1=o("code"),xS=a("from_pretrained"),RS=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),Bb=u(),Ju=o("p"),IS=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),Wb=u(),f(_r.$$.fragment),Fb=u(),os=o("p"),US=a("stress on "),G1=o("code"),GS=a("tensor([1.])"),LS=a(", or if you get an error where it says the parameter is of size "),L1=o("code"),MS=a("1"),ZS=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Vb=u(),Xu=o("a"),Yb=u(),Ys=o("h3"),tn=o("a"),M1=o("span"),f(vr.$$.fragment),NS=u(),Z1=o("span"),HS=a("ZeRO Inference"),Kb=u(),Qu=o("p"),BS=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),Jb=u(),an=o("p"),WS=a("Otherwise you just need to pass the usual "),ec=o("a"),FS=a("TrainingArguments"),VS=a(" arguments. For example:"),Xb=u(),f(jr.$$.fragment),Qb=u(),sc=o("p"),YS=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),e3=u(),nn=o("p"),KS=a("Here is an example of running "),N1=o("code"),JS=a("run_translation.py"),XS=a(" under DeepSpeed deploying all available GPUs:"),s3=u(),f(gr.$$.fragment),t3=u(),tc=o("p"),QS=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),a3=u(),ac=o("p"),eC=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),n3=u(),Ks=o("h3"),on=o("a"),H1=o("span"),f(yr.$$.fragment),sC=u(),B1=o("span"),tC=a("Memory Requirements"),o3=u(),nc=o("p"),aC=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),l3=u(),oc=o("p"),nC=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),r3=u(),f(wr.$$.fragment),p3=u(),lc=o("p"),oC=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),i3=u(),rc=o("p"),lC=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),u3=u(),pc=o("p"),rC=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),c3=u(),ic=o("p"),pC=a("For example, let\u2019s repeat the same for 2 GPUs:"),h3=u(),f(br.$$.fragment),f3=u(),uc=o("p"),iC=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),d3=u(),ln=o("p"),uC=a("For full information please see "),qr=o("a"),cC=a("memory estimators"),hC=a("."),m3=u(),Js=o("h3"),rn=o("a"),W1=o("span"),f(Er.$$.fragment),fC=u(),F1=o("span"),dC=a("Filing Issues"),_3=u(),cc=o("p"),mC=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),v3=u(),hc=o("p"),_C=a("In your report please always include:"),j3=u(),R=o("ol"),V1=o("li"),Y1=o("p"),vC=a("the full Deepspeed config file in the report"),jC=u(),K1=o("li"),qe=o("p"),gC=a("either the command line arguments if you were using the "),fc=o("a"),yC=a("Trainer"),wC=a(` or
`),dc=o("a"),bC=a("TrainingArguments"),qC=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),mc=o("a"),EC=a("TrainingArguments"),$C=a(" as it has dozens of entries that are irrelevant."),kC=u(),$r=o("li"),J1=o("p"),PC=a("Output of:"),zC=u(),f(kr.$$.fragment),DC=u(),X1=o("li"),Pr=o("p"),OC=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),zr=o("a"),TC=a("notebook"),AC=a(` as
a starting point.`),SC=u(),Q1=o("li"),ev=o("p"),CC=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),xC=u(),sv=o("li"),Dr=o("p"),RC=a("If possible try to use one of the existing "),Or=o("a"),IC=a("examples"),UC=a(" to reproduce the problem with."),g3=u(),_c=o("p"),GC=a("Things to consider:"),y3=u(),pn=o("ul"),Xs=o("li"),tv=o("p"),LC=a("Deepspeed is often not the cause of the problem."),MC=u(),av=o("p"),ZC=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),NC=u(),nv=o("p"),HC=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),BC=u(),ov=o("li"),Tr=o("p"),WC=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Ar=o("a"),FC=a("Deepspeed"),VC=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),w3=u(),Qs=o("h3"),un=o("a"),lv=o("span"),f(Sr.$$.fragment),YC=u(),rv=o("span"),KC=a("Troubleshooting"),b3=u(),et=o("h4"),cn=o("a"),pv=o("span"),f(Cr.$$.fragment),JC=u(),xr=o("span"),XC=a("the "),iv=o("code"),QC=a("deepspeed"),ex=a(" process gets killed at startup without a traceback"),q3=u(),I=o("p"),sx=a("If the "),uv=o("code"),tx=a("deepspeed"),ax=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),cv=o("code"),nx=a("offload_optimizer"),ox=a(" or "),hv=o("code"),lx=a("offload_param"),rx=a(` or
both configured to offload to `),fv=o("code"),px=a("cpu"),ix=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Rr=o("a"),ux=a("estimate how much memory is needed for a specific model"),cx=a("."),E3=u(),st=o("h4"),hn=o("a"),dv=o("span"),f(Ir.$$.fragment),hx=u(),vc=o("span"),fx=a("training and/or eval/predict loss is "),mv=o("code"),dx=a("NaN"),$3=u(),jc=o("p"),mx=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),k3=u(),gc=o("p"),_x=a("The other problem may have to do with using fp16. When you configure this section:"),P3=u(),f(Ur.$$.fragment),z3=u(),fn=o("p"),vx=a("and you see in your log that Deepspeed reports "),_v=o("code"),jx=a("OVERFLOW!"),gx=a(" as follows:"),D3=u(),f(Gr.$$.fragment),O3=u(),yc=o("p"),yx=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),T3=u(),wc=o("p"),wx=a("(the log was massaged to be more readable here.)"),A3=u(),ls=o("p"),bx=a("In this case you usually need to raise the value of "),vv=o("code"),qx=a("initial_scale_power"),Ex=a(". Setting it to "),jv=o("code"),$x=a('"initial_scale_power": 32'),kx=a(" will typically resolve the problem."),S3=u(),tt=o("h3"),dn=o("a"),gv=o("span"),f(Lr.$$.fragment),Px=u(),yv=o("span"),zx=a("Notes"),C3=u(),rs=o("ul"),mn=o("li"),Dx=a("DeepSpeed works with the PyTorch "),bc=o("a"),Ox=a("Trainer"),Tx=a(" but not TF "),wv=o("code"),Ax=a("TFTrainer"),Sx=u(),Mr=o("li"),Cx=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Zr=o("a"),xx=a("source"),Rx=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),Ix=u(),at=o("li"),Ux=a("You don\u2019t have to use the "),qc=o("a"),Gx=a("Trainer"),Lx=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),Nr=o("a"),Mx=a("the DeepSpeed integration instructions"),Zx=a("."),x3=u(),Ec=o("a"),R3=u(),nt=o("h2"),_n=o("a"),bv=o("span"),f(Hr.$$.fragment),Nx=u(),qv=o("span"),Hx=a("Non-Trainer Deepspeed Integration"),I3=u(),le=o("p"),Bx=a("The "),$c=o("a"),Wx=a("HfDeepSpeedConfig"),Fx=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),kc=o("a"),Vx=a("Trainer"),Yx=a(" is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),Ev=o("code"),Kx=a("from_pretrained"),Jx=a(" call. Everything else you have to do by yourself."),U3=u(),vn=o("p"),Xx=a("When using "),Pc=o("a"),Qx=a("Trainer"),eR=a(" everything is automatically taken care of."),G3=u(),ps=o("p"),sR=a("When not using "),zc=o("a"),tR=a("Trainer"),aR=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Dc=o("a"),nR=a("HfDeepSpeedConfig"),oR=a(" object before instantiating the model."),L3=u(),Oc=o("p"),lR=a("For example for a pretrained model:"),M3=u(),f(Br.$$.fragment),Z3=u(),Tc=o("p"),rR=a("or for non-pretrained model:"),N3=u(),f(Wr.$$.fragment),H3=u(),re=o("p"),pR=a("Please note that if you\u2019re not using the "),Ac=o("a"),iR=a("Trainer"),uR=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),Fr=o("a"),cR=a("Deepspeed"),hR=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),$v=o("code"),fR=a('"auto"'),dR=a(" values and you will have to put real values instead."),B3=u(),ot=o("h2"),jn=o("a"),kv=o("span"),f(Vr.$$.fragment),mR=u(),Pv=o("span"),_R=a("HfDeepSpeedConfig"),W3=u(),E=o("div"),f(Yr.$$.fragment),vR=u(),zv=o("p"),jR=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),gR=u(),Ee=o("p"),yR=a("A "),Dv=o("code"),wR=a("weakref"),bR=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Ov=o("code"),qR=a("from_pretrained"),ER=a(" and "),Tv=o("code"),$R=a("_get_resized_embeddings"),kR=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),PR=u(),pe=o("p"),Sc=o("a"),zR=a("Trainer"),DR=a(" uses the "),Av=o("code"),OR=a("HfTrainerDeepSpeedConfig"),TR=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Cc=o("a"),AR=a("TrainingArguments"),SR=a(" by replacing special placeholder values: "),Sv=o("code"),CR=a('"auto"'),xR=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),RR=u(),is=o("div"),f(Kr.$$.fragment),IR=u(),Cv=o("p"),UR=a("Deletes a sub-section of the config file if it\u2019s found."),GR=u(),lt=o("p"),LR=a("Unless "),xv=o("code"),MR=a("must_exist"),ZR=a(" is "),Rv=o("code"),NR=a("True"),HR=a(" the section doesn\u2019t have to exist."),BR=u(),gn=o("div"),f(Jr.$$.fragment),WR=u(),Xr=o("p"),FR=a("Returns the set value or "),Iv=o("code"),VR=a("default"),YR=a(" if no value is set"),KR=u(),yn=o("div"),f(Qr.$$.fragment),JR=u(),rt=o("p"),XR=a("Returns "),Uv=o("code"),QR=a("True"),eI=a("/"),Gv=o("code"),sI=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),tI=a(" or isn\u2019t set)."),aI=u(),wn=o("div"),f(ep.$$.fragment),nI=u(),pt=o("p"),oI=a("Returns "),Lv=o("code"),lI=a("True"),rI=a("/"),Mv=o("code"),pI=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),iI=a(" or isn\u2019t set)."),F3=u(),it=o("h3"),bn=o("a"),Zv=o("span"),f(sp.$$.fragment),uI=u(),Nv=o("span"),cI=a("Custom DeepSpeed ZeRO Inference"),V3=u(),qn=o("p"),hI=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),xc=o("a"),fI=a("Trainer"),dI=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),Y3=u(),Rc=o("p"),mI=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),K3=u(),Ic=o("p"),_I=a("The example has copious notes and is self-documenting."),J3=u(),Uc=o("p"),vI=a("Make sure to:"),X3=u(),En=o("ol"),Hv=o("li"),jI=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),gI=u(),Bv=o("li"),yI=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),Q3=u(),f(tp.$$.fragment),e0=u(),$n=o("p"),wI=a("Let\u2019s save it as "),Wv=o("code"),bI=a("t0.py"),qI=a(" and run it:"),s0=u(),f(ap.$$.fragment),t0=u(),Gc=o("p"),EI=a("This was a very basic example and you will want to adapt it to your needs."),a0=u(),ut=o("h2"),kn=o("a"),Fv=o("span"),f(np.$$.fragment),$I=u(),Vv=o("span"),kI=a("Main DeepSpeed Resources"),n0=u(),ie=o("ul"),Yv=o("li"),op=o("a"),PI=a("Project\u2019s github"),zI=u(),Kv=o("li"),lp=o("a"),DI=a("Usage docs"),OI=u(),Jv=o("li"),rp=o("a"),TI=a("API docs"),AI=u(),Xv=o("li"),pp=o("a"),SI=a("Blog posts"),o0=u(),Lc=o("p"),CI=a("Papers:"),l0=u(),us=o("ul"),Qv=o("li"),ip=o("a"),xI=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),RI=u(),ej=o("li"),up=o("a"),II=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),UI=u(),sj=o("li"),cp=o("a"),GI=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),r0=u(),cs=o("p"),LI=a("Finally, please, remember that, HuggingFace "),Mc=o("a"),MI=a("Trainer"),ZI=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),hp=o("a"),NI=a("DeepSpeed GitHub"),HI=a("."),this.h()},l(e){const p=FV('[data-svelte="svelte-1phssyn"]',document.head);w=l(p,"META",{name:!0,content:!0}),p.forEach(t),M=c(e),b=l(e,"H1",{class:!0});var fp=r(b);$=l(fp,"A",{id:!0,class:!0,href:!0});var tj=r($);ms=l(tj,"SPAN",{});var KI=r(ms);d(F.$$.fragment,KI),KI.forEach(t),tj.forEach(t),Nn=c(fp),_s=l(fp,"SPAN",{});var JI=r(_s);vs=n(JI,"DeepSpeed Integration"),JI.forEach(t),fp.forEach(t),ht=c(e),V=l(e,"P",{});var aj=r(V);Y=l(aj,"A",{href:!0,rel:!0});var XI=r(Y);Z=n(XI,"DeepSpeed"),XI.forEach(t),yp=n(aj," implements everything described in the "),$e=l(aj,"A",{href:!0,rel:!0});var QI=r($e);wp=n(QI,"ZeRO paper"),QI.forEach(t),ZE=n(aj,". Currently it provides full support for:"),aj.forEach(t),pj=c(e),D=l(e,"OL",{});var ue=r(D);Ch=l(ue,"LI",{});var eU=r(Ch);NE=n(eU,"Optimizer state partitioning (ZeRO stage 1)"),eU.forEach(t),HE=c(ue),xh=l(ue,"LI",{});var sU=r(xh);BE=n(sU,"Gradient partitioning (ZeRO stage 2)"),sU.forEach(t),WE=c(ue),Rh=l(ue,"LI",{});var tU=r(Rh);FE=n(tU,"Parameter partitioning (ZeRO stage 3)"),tU.forEach(t),VE=c(ue),Ih=l(ue,"LI",{});var aU=r(Ih);YE=n(aU,"Custom mixed precision training handling"),aU.forEach(t),KE=c(ue),Uh=l(ue,"LI",{});var nU=r(Uh);JE=n(nU,"A range of fast CUDA-extension-based optimizers"),nU.forEach(t),XE=c(ue),Gh=l(ue,"LI",{});var oU=r(Gh);QE=n(oU,"ZeRO-Offload to CPU and NVMe"),oU.forEach(t),ue.forEach(t),ij=c(e),ke=l(e,"P",{});var Zc=r(ke);e$=n(Zc,"ZeRO-Offload has its own dedicated paper: "),Hn=l(Zc,"A",{href:!0,rel:!0});var lU=r(Hn);s$=n(lU,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),lU.forEach(t),t$=n(Zc,". And NVMe-support is described in the paper "),Bn=l(Zc,"A",{href:!0,rel:!0});var rU=r(Bn);a$=n(rU,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),rU.forEach(t),n$=n(Zc,"."),Zc.forEach(t),uj=c(e),bp=l(e,"P",{});var pU=r(bp);o$=n(pU,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),pU.forEach(t),cj=c(e),qp=l(e,"P",{});var iU=r(qp);l$=n(iU,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),iU.forEach(t),hj=c(e),ft=l(e,"P",{});var i0=r(ft);r$=n(i0,"\u{1F917} Transformers integrates "),Wn=l(i0,"A",{href:!0,rel:!0});var uU=r(Wn);p$=n(uU,"DeepSpeed"),uU.forEach(t),i$=n(i0," via 2 options:"),i0.forEach(t),fj=c(e),dt=l(e,"OL",{});var u0=r(dt);Fn=l(u0,"LI",{});var c0=r(Fn);u$=n(c0,"Integration of the core DeepSpeed features via "),Ep=l(c0,"A",{href:!0});var cU=r(Ep);c$=n(cU,"Trainer"),cU.forEach(t),h$=n(c0,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),c0.forEach(t),f$=c(u0),L=l(u0,"LI",{});var ce=r(L);d$=n(ce,"If you don\u2019t use "),$p=l(ce,"A",{href:!0});var hU=r($p);m$=n(hU,"Trainer"),hU.forEach(t),_$=n(ce,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Lh=l(ce,"CODE",{});var fU=r(Lh);v$=n(fU,"from_pretrained"),fU.forEach(t),j$=n(ce," and "),Mh=l(ce,"CODE",{});var dU=r(Mh);g$=n(dU,"from_config"),dU.forEach(t),y$=n(ce,` include integration of essential
parts of DeepSpeed like `),Zh=l(ce,"CODE",{});var mU=r(Zh);w$=n(mU,"zero.Init"),mU.forEach(t),b$=n(ce,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),kp=l(ce,"A",{href:!0});var _U=r(kp);q$=n(_U,"deepspeed-non-trainer-integration"),_U.forEach(t),E$=n(ce,"."),ce.forEach(t),u0.forEach(t),dj=c(e),Pp=l(e,"P",{});var vU=r(Pp);$$=n(vU,"What is integrated:"),vU.forEach(t),mj=c(e),zp=l(e,"P",{});var jU=r(zp);k$=n(jU,"Training:"),jU.forEach(t),_j=c(e),Dp=l(e,"OL",{});var gU=r(Dp);Nh=l(gU,"LI",{});var yU=r(Nh);P$=n(yU,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),yU.forEach(t),gU.forEach(t),vj=c(e),Op=l(e,"P",{});var wU=r(Op);z$=n(wU,"Inference:"),wU.forEach(t),jj=c(e),Tp=l(e,"OL",{});var bU=r(Tp);Vn=l(bU,"LI",{});var h0=r(Vn);D$=n(h0,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ap=l(h0,"A",{href:!0});var qU=r(Ap);O$=n(qU,"deepspeed-zero-inference"),qU.forEach(t),T$=n(h0,"."),h0.forEach(t),bU.forEach(t),gj=c(e),Sp=l(e,"P",{});var EU=r(Sp);A$=n(EU,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),EU.forEach(t),yj=c(e),Cp=l(e,"A",{id:!0}),r(Cp).forEach(t),wj=c(e),js=l(e,"H2",{class:!0});var f0=r(js);mt=l(f0,"A",{id:!0,class:!0,href:!0});var $U=r(mt);Hh=l($U,"SPAN",{});var kU=r(Hh);d(Yn.$$.fragment,kU),kU.forEach(t),$U.forEach(t),S$=c(f0),Bh=l(f0,"SPAN",{});var PU=r(Bh);C$=n(PU,"Trainer Deepspeed Integration"),PU.forEach(t),f0.forEach(t),bj=c(e),xp=l(e,"A",{id:!0}),r(xp).forEach(t),qj=c(e),gs=l(e,"H3",{class:!0});var d0=r(gs);_t=l(d0,"A",{id:!0,class:!0,href:!0});var zU=r(_t);Wh=l(zU,"SPAN",{});var DU=r(Wh);d(Kn.$$.fragment,DU),DU.forEach(t),zU.forEach(t),x$=c(d0),Fh=l(d0,"SPAN",{});var OU=r(Fh);R$=n(OU,"Installation"),OU.forEach(t),d0.forEach(t),Ej=c(e),Rp=l(e,"P",{});var TU=r(Rp);I$=n(TU,"Install the library via pypi:"),TU.forEach(t),$j=c(e),d(Jn.$$.fragment,e),kj=c(e),Pe=l(e,"P",{});var Nc=r(Pe);U$=n(Nc,"or via "),Vh=l(Nc,"CODE",{});var AU=r(Vh);G$=n(AU,"transformers"),AU.forEach(t),L$=n(Nc,"\u2019 "),Yh=l(Nc,"CODE",{});var SU=r(Yh);M$=n(SU,"extras"),SU.forEach(t),Z$=n(Nc,":"),Nc.forEach(t),Pj=c(e),d(Xn.$$.fragment,e),zj=c(e),ze=l(e,"P",{});var Hc=r(ze);N$=n(Hc,"or find more details on "),Qn=l(Hc,"A",{href:!0,rel:!0});var CU=r(Qn);H$=n(CU,"the DeepSpeed\u2019s GitHub page"),CU.forEach(t),B$=n(Hc,` and
`),eo=l(Hc,"A",{href:!0,rel:!0});var xU=r(eo);W$=n(xU,"advanced install"),xU.forEach(t),F$=n(Hc,"."),Hc.forEach(t),Dj=c(e),vt=l(e,"P",{});var m0=r(vt);V$=n(m0,"If you\u2019re still struggling with the build, first make sure to read "),Ip=l(m0,"A",{href:!0});var RU=r(Ip);Y$=n(RU,"zero-install-notes"),RU.forEach(t),K$=n(m0,"."),m0.forEach(t),Oj=c(e),Up=l(e,"P",{});var IU=r(Up);J$=n(IU,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),IU.forEach(t),Tj=c(e),Gp=l(e,"P",{});var UU=r(Gp);X$=n(UU,"To make a local build for DeepSpeed:"),UU.forEach(t),Aj=c(e),d(so.$$.fragment,e),Sj=c(e),De=l(e,"P",{});var Bc=r(De);Q$=n(Bc,"If you intend to use NVMe offload you will also need to include "),Kh=l(Bc,"CODE",{});var GU=r(Kh);e5=n(GU,"DS_BUILD_AIO=1"),GU.forEach(t),s5=n(Bc,` in the instructions above (and also
install `),Jh=l(Bc,"EM",{});var LU=r(Jh);t5=n(LU,"libaio-dev"),LU.forEach(t),a5=n(Bc," system-wide)."),Bc.forEach(t),Cj=c(e),jt=l(e,"P",{});var _0=r(jt);n5=n(_0,"Edit "),Xh=l(_0,"CODE",{});var MU=r(Xh);o5=n(MU,"TORCH_CUDA_ARCH_LIST"),MU.forEach(t),l5=n(_0,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),_0.forEach(t),xj=c(e),d(to.$$.fragment,e),Rj=c(e),ge=l(e,"P",{});var dp=r(ge);r5=n(dp,"So if you get "),Qh=l(dp,"CODE",{});var ZU=r(Qh);p5=n(ZU,"8, 6"),ZU.forEach(t),i5=n(dp,", then use "),ef=l(dp,"CODE",{});var NU=r(ef);u5=n(NU,'TORCH_CUDA_ARCH_LIST="8.6"'),NU.forEach(t),c5=n(dp,`. If you have multiple different cards, you can list all
of them like so `),sf=l(dp,"CODE",{});var HU=r(sf);h5=n(HU,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),HU.forEach(t),dp.forEach(t),Ij=c(e),Lp=l(e,"P",{});var BU=r(Lp);f5=n(BU,"If you need to use the same setup on multiple machines, make a binary wheel:"),BU.forEach(t),Uj=c(e),d(ao.$$.fragment,e),Gj=c(e),Oe=l(e,"P",{});var Wc=r(Oe);d5=n(Wc,"it will generate something like "),tf=l(Wc,"CODE",{});var WU=r(tf);m5=n(WU,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),WU.forEach(t),_5=n(Wc,` which now you can install
as `),af=l(Wc,"CODE",{});var FU=r(af);v5=n(FU,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),FU.forEach(t),j5=n(Wc," locally or on any other machine."),Wc.forEach(t),Lj=c(e),gt=l(e,"P",{});var v0=r(gt);g5=n(v0,"Again, remember to ensure to adjust "),nf=l(v0,"CODE",{});var VU=r(nf);y5=n(VU,"TORCH_CUDA_ARCH_LIST"),VU.forEach(t),w5=n(v0," to the target architectures."),v0.forEach(t),Mj=c(e),Te=l(e,"P",{});var Fc=r(Te);b5=n(Fc,"You can find the complete list of NVIDIA GPUs and their corresponding "),of=l(Fc,"STRONG",{});var YU=r(of);q5=n(YU,"Compute Capabilities"),YU.forEach(t),E5=n(Fc,` (same as arch in this
context) `),no=l(Fc,"A",{href:!0,rel:!0});var KU=r(no);$5=n(KU,"here"),KU.forEach(t),k5=n(Fc,"."),Fc.forEach(t),Zj=c(e),Mp=l(e,"P",{});var JU=r(Mp);P5=n(JU,"You can check the archs pytorch was built with using:"),JU.forEach(t),Nj=c(e),d(oo.$$.fragment,e),Hj=c(e),Zp=l(e,"P",{});var XU=r(Zp);z5=n(XU,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),XU.forEach(t),Bj=c(e),d(lo.$$.fragment,e),Wj=c(e),Np=l(e,"P",{});var QU=r(Np);D5=n(QU,"If the output is:"),QU.forEach(t),Fj=c(e),d(ro.$$.fragment,e),Vj=c(e),yt=l(e,"P",{});var j0=r(yt);O5=n(j0,"then you know that this card\u2019s arch is "),lf=l(j0,"CODE",{});var eG=r(lf);T5=n(eG,"8.6"),eG.forEach(t),A5=n(j0,"."),j0.forEach(t),Yj=c(e),wt=l(e,"P",{});var g0=r(wt);S5=n(g0,"You can also leave "),rf=l(g0,"CODE",{});var sG=r(rf);C5=n(sG,"TORCH_CUDA_ARCH_LIST"),sG.forEach(t),x5=n(g0,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),g0.forEach(t),Kj=c(e),bt=l(e,"P",{});var y0=r(bt);R5=n(y0,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),po=l(y0,"A",{href:!0,rel:!0});var tG=r(po);I5=n(tG,"Deepspeed"),tG.forEach(t),U5=n(y0,","),y0.forEach(t),Jj=c(e),Hp=l(e,"A",{id:!0}),r(Hp).forEach(t),Xj=c(e),ys=l(e,"H3",{class:!0});var w0=r(ys);qt=l(w0,"A",{id:!0,class:!0,href:!0});var aG=r(qt);pf=l(aG,"SPAN",{});var nG=r(pf);d(io.$$.fragment,nG),nG.forEach(t),aG.forEach(t),G5=c(w0),uf=l(w0,"SPAN",{});var oG=r(uf);L5=n(oG,"Deployment with multiple GPUs"),oG.forEach(t),w0.forEach(t),Qj=c(e),Et=l(e,"P",{});var b0=r(Et);M5=n(b0,"To deploy this feature with multiple GPUs adjust the "),Bp=l(b0,"A",{href:!0});var lG=r(Bp);Z5=n(lG,"Trainer"),lG.forEach(t),N5=n(b0,` command line arguments as
following:`),b0.forEach(t),eg=c(e),$t=l(e,"OL",{});var q0=r($t);ws=l(q0,"LI",{});var Vc=r(ws);H5=n(Vc,"replace "),cf=l(Vc,"CODE",{});var rG=r(cf);B5=n(rG,"python -m torch.distributed.launch"),rG.forEach(t),W5=n(Vc," with "),hf=l(Vc,"CODE",{});var pG=r(hf);F5=n(pG,"deepspeed"),pG.forEach(t),V5=n(Vc,"."),Vc.forEach(t),Y5=c(q0),ye=l(q0,"LI",{});var Pn=r(ye);K5=n(Pn,"add a new argument "),ff=l(Pn,"CODE",{});var iG=r(ff);J5=n(iG,"--deepspeed ds_config.json"),iG.forEach(t),X5=n(Pn,", where "),df=l(Pn,"CODE",{});var uG=r(df);Q5=n(uG,"ds_config.json"),uG.forEach(t),e6=n(Pn,` is the DeepSpeed configuration file as
documented `),uo=l(Pn,"A",{href:!0,rel:!0});var cG=r(uo);s6=n(cG,"here"),cG.forEach(t),t6=n(Pn,". The file naming is up to you."),Pn.forEach(t),q0.forEach(t),sg=c(e),Wp=l(e,"P",{});var hG=r(Wp);a6=n(hG,"Therefore, if your original command line looked as follows:"),hG.forEach(t),tg=c(e),d(co.$$.fragment,e),ag=c(e),Fp=l(e,"P",{});var fG=r(Fp);n6=n(fG,"Now it should be:"),fG.forEach(t),ng=c(e),d(ho.$$.fragment,e),og=c(e),O=l(e,"P",{});var he=r(O);o6=n(he,"Unlike, "),mf=l(he,"CODE",{});var dG=r(mf);l6=n(dG,"torch.distributed.launch"),dG.forEach(t),r6=n(he," where you have to specify how many GPUs to use with "),_f=l(he,"CODE",{});var mG=r(_f);p6=n(mG,"--nproc_per_node"),mG.forEach(t),i6=n(he,`, with the
`),vf=l(he,"CODE",{});var _G=r(vf);u6=n(_G,"deepspeed"),_G.forEach(t),c6=n(he," launcher you don\u2019t have to use the corresponding "),jf=l(he,"CODE",{});var vG=r(jf);h6=n(vG,"--num_gpus"),vG.forEach(t),f6=n(he,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),fo=l(he,"A",{href:!0,rel:!0});var jG=r(fo);d6=n(jG,"here"),jG.forEach(t),m6=n(he,"."),he.forEach(t),lg=c(e),J=l(e,"P",{});var zn=r(J);_6=n(zn,"In fact, you can continue using "),gf=l(zn,"CODE",{});var gG=r(gf);v6=n(gG,"-m torch.distributed.launch"),gG.forEach(t),j6=n(zn,` with DeepSpeed as long as you don\u2019t need to use
`),yf=l(zn,"CODE",{});var yG=r(yf);g6=n(yG,"deepspeed"),yG.forEach(t),y6=n(zn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),wf=l(zn,"CODE",{});var wG=r(wf);w6=n(wG,"deepspeed"),wG.forEach(t),b6=n(zn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),zn.forEach(t),rg=c(e),kt=l(e,"P",{});var E0=r(kt);q6=n(E0,"Here is an example of running "),bf=l(E0,"CODE",{});var bG=r(bf);E6=n(bG,"run_translation.py"),bG.forEach(t),$6=n(E0," under DeepSpeed deploying all available GPUs:"),E0.forEach(t),pg=c(e),d(mo.$$.fragment,e),ig=c(e),Pt=l(e,"P",{});var $0=r(Pt);k6=n($0,"Note that in the DeepSpeed documentation you are likely to see "),qf=l($0,"CODE",{});var qG=r(qf);P6=n(qG,"--deepspeed --deepspeed_config ds_config.json"),qG.forEach(t),z6=n($0,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),$0.forEach(t),ug=c(e),zt=l(e,"P",{});var k0=r(zt);D6=n(k0,"For some practical usage examples, please, see this "),_o=l(k0,"A",{href:!0,rel:!0});var EG=r(_o);O6=n(EG,"post"),EG.forEach(t),T6=n(k0,"."),k0.forEach(t),cg=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),hg=c(e),bs=l(e,"H3",{class:!0});var P0=r(bs);Dt=l(P0,"A",{id:!0,class:!0,href:!0});var $G=r(Dt);Ef=l($G,"SPAN",{});var kG=r(Ef);d(vo.$$.fragment,kG),kG.forEach(t),$G.forEach(t),A6=c(P0),$f=l(P0,"SPAN",{});var PG=r($f);S6=n(PG,"Deployment with one GPU"),PG.forEach(t),P0.forEach(t),fg=c(e),Ot=l(e,"P",{});var z0=r(Ot);C6=n(z0,"To deploy DeepSpeed with one GPU adjust the "),Yp=l(z0,"A",{href:!0});var zG=r(Yp);x6=n(zG,"Trainer"),zG.forEach(t),R6=n(z0," command line arguments as follows:"),z0.forEach(t),dg=c(e),d(jo.$$.fragment,e),mg=c(e),Ae=l(e,"P",{});var Yc=r(Ae);I6=n(Yc,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),kf=l(Yc,"CODE",{});var DG=r(kf);U6=n(DG,"--num_gpus=1"),DG.forEach(t),G6=n(Yc,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),go=l(Yc,"A",{href:!0,rel:!0});var OG=r(go);L6=n(OG,"documentation"),OG.forEach(t),M6=n(Yc," discusses the launcher options."),Yc.forEach(t),_g=c(e),Kp=l(e,"P",{});var TG=r(Kp);Z6=n(TG,"Why would you want to use DeepSpeed with just one GPU?"),TG.forEach(t),vg=c(e),Tt=l(e,"OL",{});var D0=r(Tt);Pf=l(D0,"LI",{});var AG=r(Pf);N6=n(AG,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),AG.forEach(t),H6=c(D0),zf=l(D0,"LI",{});var SG=r(zf);B6=n(SG,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),SG.forEach(t),D0.forEach(t),jg=c(e),Jp=l(e,"P",{});var CG=r(Jp);W6=n(CG,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),CG.forEach(t),gg=c(e),d(yo.$$.fragment,e),yg=c(e),Xp=l(e,"P",{});var xG=r(Xp);F6=n(xG,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),xG.forEach(t),wg=c(e),At=l(e,"P",{});var O0=r(At);V6=n(O0,"For a practical usage example of this type of deployment, please, see this "),wo=l(O0,"A",{href:!0,rel:!0});var RG=r(wo);Y6=n(RG,"post"),RG.forEach(t),K6=n(O0,"."),O0.forEach(t),bg=c(e),Qp=l(e,"P",{});var IG=r(Qp);J6=n(IG,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),IG.forEach(t),qg=c(e),ei=l(e,"P",{});var UG=r(ei);X6=n(UG,"Notes:"),UG.forEach(t),Eg=c(e),si=l(e,"UL",{});var GG=r(si);qs=l(GG,"LI",{});var Kc=r(qs);bo=l(Kc,"P",{});var T0=r(bo);Q6=n(T0,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Df=l(T0,"CODE",{});var LG=r(Df);e4=n(LG,"CUDA_VISIBLE_DEVICES"),LG.forEach(t),s4=n(T0,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),T0.forEach(t),t4=c(Kc),d(qo.$$.fragment,Kc),a4=c(Kc),Of=l(Kc,"P",{});var MG=r(Of);n4=n(MG,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),MG.forEach(t),Kc.forEach(t),GG.forEach(t),$g=c(e),ti=l(e,"A",{id:!0}),r(ti).forEach(t),kg=c(e),Es=l(e,"H3",{class:!0});var A0=r(Es);St=l(A0,"A",{id:!0,class:!0,href:!0});var ZG=r(St);Tf=l(ZG,"SPAN",{});var NG=r(Tf);d(Eo.$$.fragment,NG),NG.forEach(t),ZG.forEach(t),o4=c(A0),Af=l(A0,"SPAN",{});var HG=r(Af);l4=n(HG,"Deployment in Notebooks"),HG.forEach(t),A0.forEach(t),Pg=c(e),Ct=l(e,"P",{});var S0=r(Ct);r4=n(S0,"The problem with running notebook cells as a script is that there is no normal "),Sf=l(S0,"CODE",{});var BG=r(Sf);p4=n(BG,"deepspeed"),BG.forEach(t),i4=n(S0,` launcher to rely on, so
under certain setups we have to emulate it.`),S0.forEach(t),zg=c(e),ai=l(e,"P",{});var WG=r(ai);u4=n(WG,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),WG.forEach(t),Dg=c(e),d($o.$$.fragment,e),Og=c(e),xt=l(e,"P",{});var C0=r(xt);c4=n(C0,"Note: "),Cf=l(C0,"CODE",{});var FG=r(Cf);h4=n(FG,"..."),FG.forEach(t),f4=n(C0," stands for the normal arguments that you\u2019d pass to the functions."),C0.forEach(t),Tg=c(e),ni=l(e,"P",{});var VG=r(ni);d4=n(VG,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),VG.forEach(t),Ag=c(e),oi=l(e,"P",{});var YG=r(oi);m4=n(YG,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),YG.forEach(t),Sg=c(e),d(ko.$$.fragment,e),Cg=c(e),Se=l(e,"P",{});var Jc=r(Se);_4=n(Jc,"If the training script is in a normal file and not in the notebook cells, you can launch "),xf=l(Jc,"CODE",{});var KG=r(xf);v4=n(KG,"deepspeed"),KG.forEach(t),j4=n(Jc,` normally via
shell from a cell. For example, to use `),Rf=l(Jc,"CODE",{});var JG=r(Rf);g4=n(JG,"run_translation.py"),JG.forEach(t),y4=n(Jc," you would launch it with:"),Jc.forEach(t),xg=c(e),d(Po.$$.fragment,e),Rg=c(e),Rt=l(e,"P",{});var x0=r(Rt);w4=n(x0,"or with "),If=l(x0,"CODE",{});var XG=r(If);b4=n(XG,"%%bash"),XG.forEach(t),q4=n(x0," magic, where you can write a multi-line code for the shell program to run:"),x0.forEach(t),Ig=c(e),d(zo.$$.fragment,e),Ug=c(e),li=l(e,"P",{});var QG=r(li);E4=n(QG,"In such case you don\u2019t need any of the code presented at the beginning of this section."),QG.forEach(t),Gg=c(e),It=l(e,"P",{});var R0=r(It);$4=n(R0,"Note: While "),Uf=l(R0,"CODE",{});var eL=r(Uf);k4=n(eL,"%%bash"),eL.forEach(t),P4=n(R0,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),R0.forEach(t),Lg=c(e),ri=l(e,"A",{id:!0}),r(ri).forEach(t),Mg=c(e),$s=l(e,"H3",{class:!0});var I0=r($s);Ut=l(I0,"A",{id:!0,class:!0,href:!0});var sL=r(Ut);Gf=l(sL,"SPAN",{});var tL=r(Gf);d(Do.$$.fragment,tL),tL.forEach(t),sL.forEach(t),z4=c(I0),Lf=l(I0,"SPAN",{});var aL=r(Lf);D4=n(aL,"Configuration"),aL.forEach(t),I0.forEach(t),Zg=c(e),Gt=l(e,"P",{});var U0=r(Gt);O4=n(U0,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Oo=l(U0,"A",{href:!0,rel:!0});var nL=r(Oo);T4=n(nL,"following documentation"),nL.forEach(t),A4=n(U0,"."),U0.forEach(t),Ng=c(e),Lt=l(e,"P",{});var G0=r(Lt);S4=n(G0,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),To=l(G0,"A",{href:!0,rel:!0});var oL=r(To);C4=n(oL,`the DeepSpeedExamples
repo`),oL.forEach(t),x4=n(G0,":"),G0.forEach(t),Hg=c(e),d(Ao.$$.fragment,e),Bg=c(e),Mt=l(e,"P",{});var L0=r(Mt);R4=n(L0,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Mf=l(L0,"CODE",{});var lL=r(Mf);I4=n(lL,".json"),lL.forEach(t),U4=n(L0," files with:"),L0.forEach(t),Wg=c(e),d(So.$$.fragment,e),Fg=c(e),Zt=l(e,"P",{});var M0=r(Zt);G4=n(M0,"Some more examples are to be found in the "),Co=l(M0,"A",{href:!0,rel:!0});var rL=r(Co);L4=n(rL,"main repo"),rL.forEach(t),M4=n(M0," as well."),M0.forEach(t),Vg=c(e),pi=l(e,"P",{});var pL=r(pi);Z4=n(pL,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),pL.forEach(t),Yg=c(e),X=l(e,"P",{});var Dn=r(X);N4=n(Dn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Zf=l(Dn,"CODE",{});var iL=r(Zf);H4=n(iL,"AdamW"),iL.forEach(t),B4=n(Dn," optimizer and "),Nf=l(Dn,"CODE",{});var uL=r(Nf);W4=n(uL,"WarmupLR"),uL.forEach(t),F4=n(Dn,` scheduler and will enable mixed
precision training if `),Hf=l(Dn,"CODE",{});var cL=r(Hf);V4=n(cL,"--fp16"),cL.forEach(t),Y4=n(Dn," is passed:"),Dn.forEach(t),Kg=c(e),d(xo.$$.fragment,e),Jg=c(e),Nt=l(e,"P",{});var Z0=r(Nt);K4=n(Z0,"When you execute the program, DeepSpeed will log the configuration it received from the "),ii=l(Z0,"A",{href:!0});var hL=r(ii);J4=n(hL,"Trainer"),hL.forEach(t),X4=n(Z0,`
to the console, so you can see exactly what was the final configuration passed to it.`),Z0.forEach(t),Xg=c(e),ui=l(e,"A",{id:!0}),r(ui).forEach(t),Qg=c(e),ks=l(e,"H3",{class:!0});var N0=r(ks);Ht=l(N0,"A",{id:!0,class:!0,href:!0});var fL=r(Ht);Bf=l(fL,"SPAN",{});var dL=r(Bf);d(Ro.$$.fragment,dL),dL.forEach(t),fL.forEach(t),Q4=c(N0),Wf=l(N0,"SPAN",{});var mL=r(Wf);e8=n(mL,"Passing Configuration"),mL.forEach(t),N0.forEach(t),ey=c(e),T=l(e,"P",{});var fe=r(T);s8=n(fe,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),ci=l(fe,"A",{href:!0});var _L=r(ci);t8=n(_L,"Trainer"),_L.forEach(t),a8=n(fe," via "),hi=l(fe,"A",{href:!0});var vL=r(hi);n8=n(vL,"TrainingArguments"),vL.forEach(t),o8=n(fe," then for the "),Ff=l(fe,"CODE",{});var jL=r(Ff);l8=n(jL,"deepspeed"),jL.forEach(t),r8=n(fe,` argument you can
pass a nested `),Vf=l(fe,"CODE",{});var gL=r(Vf);p8=n(gL,"dict"),gL.forEach(t),i8=n(fe,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),fi=l(fe,"A",{href:!0});var yL=r(fi);u8=n(yL,"TrainingArguments"),yL.forEach(t),c8=n(fe,"."),fe.forEach(t),sy=c(e),di=l(e,"P",{});var wL=r(di);h8=n(wL,"To summarize you can do:"),wL.forEach(t),ty=c(e),d(Io.$$.fragment,e),ay=c(e),mi=l(e,"P",{});var bL=r(mi);f8=n(bL,"or:"),bL.forEach(t),ny=c(e),d(Uo.$$.fragment,e),oy=c(e),_i=l(e,"A",{id:!0}),r(_i).forEach(t),ly=c(e),Ps=l(e,"H3",{class:!0});var H0=r(Ps);Bt=l(H0,"A",{id:!0,class:!0,href:!0});var qL=r(Bt);Yf=l(qL,"SPAN",{});var EL=r(Yf);d(Go.$$.fragment,EL),EL.forEach(t),qL.forEach(t),d8=c(H0),Kf=l(H0,"SPAN",{});var $L=r(Kf);m8=n($L,"Shared Configuration"),$L.forEach(t),H0.forEach(t),ry=c(e),d(Wt.$$.fragment,e),py=c(e),Ce=l(e,"P",{});var Xc=r(Ce);_8=n(Xc,"Some configuration values are required by both the "),vi=l(Xc,"A",{href:!0});var kL=r(vi);v8=n(kL,"Trainer"),kL.forEach(t),j8=n(Xc,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),ji=l(Xc,"A",{href:!0});var PL=r(ji);g8=n(PL,"Trainer"),PL.forEach(t),y8=n(Xc," command line arguments."),Xc.forEach(t),iy=c(e),Ft=l(e,"P",{});var B0=r(Ft);w8=n(B0,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),gi=l(B0,"A",{href:!0});var zL=r(gi);b8=n(zL,"Trainer"),zL.forEach(t),q8=n(B0,` do the majority
of configuration for you.`),B0.forEach(t),uy=c(e),xe=l(e,"P",{});var Qc=r(xe);E8=n(Qc,"Therefore, in the rest of this guide you will find a special configuration value: "),Jf=l(Qc,"CODE",{});var DL=r(Jf);$8=n(DL,"auto"),DL.forEach(t),k8=n(Qc,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),yi=l(Qc,"A",{href:!0});var OL=r(yi);P8=n(OL,"Trainer"),OL.forEach(t),z8=n(Qc,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Qc.forEach(t),cy=c(e),wi=l(e,"P",{});var TL=r(wi);D8=n(TL,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),TL.forEach(t),hy=c(e),Vt=l(e,"P",{});var W0=r(Vt);O8=n(W0,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),bi=l(W0,"A",{href:!0});var AL=r(bi);T8=n(AL,"TrainingArguments"),AL.forEach(t),A8=n(W0," based on that. The steps are:"),W0.forEach(t),fy=c(e),Yt=l(e,"OL",{});var F0=r(Yt);Xf=l(F0,"LI",{});var SL=r(Xf);S8=n(SL,"Create or load the DeepSpeed configuration to be used as a master configuration"),SL.forEach(t),C8=c(F0),Lo=l(F0,"LI",{});var V0=r(Lo);x8=n(V0,"Create the "),qi=l(V0,"A",{href:!0});var CL=r(qi);R8=n(CL,"TrainingArguments"),CL.forEach(t),I8=n(V0," object based on these values"),V0.forEach(t),F0.forEach(t),dy=c(e),Q=l(e,"P",{});var On=r(Q);U8=n(On,"Do note that some values, such as "),Qf=l(On,"CODE",{});var xL=r(Qf);G8=n(xL,"scheduler.params.total_num_steps"),xL.forEach(t),L8=n(On,` are calculated by
`),Ei=l(On,"A",{href:!0});var RL=r(Ei);M8=n(RL,"Trainer"),RL.forEach(t),Z8=n(On," during "),ed=l(On,"CODE",{});var IL=r(ed);N8=n(IL,"train"),IL.forEach(t),H8=n(On,", but you can of course do the math yourself."),On.forEach(t),my=c(e),$i=l(e,"A",{id:!0}),r($i).forEach(t),_y=c(e),zs=l(e,"H3",{class:!0});var Y0=r(zs);Kt=l(Y0,"A",{id:!0,class:!0,href:!0});var UL=r(Kt);sd=l(UL,"SPAN",{});var GL=r(sd);d(Mo.$$.fragment,GL),GL.forEach(t),UL.forEach(t),B8=c(Y0),td=l(Y0,"SPAN",{});var LL=r(td);W8=n(LL,"ZeRO"),LL.forEach(t),Y0.forEach(t),vy=c(e),Zo=l(e,"P",{});var BI=r(Zo);No=l(BI,"A",{href:!0,rel:!0});var ML=r(No);F8=n(ML,"Zero Redundancy Optimizer (ZeRO)"),ML.forEach(t),V8=n(BI,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),BI.forEach(t),jy=c(e),Re=l(e,"P",{});var eh=r(Re);Y8=n(eh,"The "),ad=l(eh,"CODE",{});var ZL=r(ad);K8=n(ZL,"zero_optimization"),ZL.forEach(t),J8=n(eh," section of the configuration file is the most important part ("),Ho=l(eh,"A",{href:!0,rel:!0});var NL=r(Ho);X8=n(NL,"docs"),NL.forEach(t),Q8=n(eh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),eh.forEach(t),gy=c(e),Jt=l(e,"P",{});var K0=r(Jt);e7=n(K0,"This section has to be configured exclusively via DeepSpeed configuration - the "),ki=l(K0,"A",{href:!0});var HL=r(ki);s7=n(HL,"Trainer"),HL.forEach(t),t7=n(K0,` provides
no equivalent command line arguments.`),K0.forEach(t),yy=c(e),Pi=l(e,"P",{});var BL=r(Pi);a7=n(BL,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),BL.forEach(t),wy=c(e),zi=l(e,"A",{id:!0}),r(zi).forEach(t),by=c(e),Ds=l(e,"H4",{class:!0});var J0=r(Ds);Xt=l(J0,"A",{id:!0,class:!0,href:!0});var WL=r(Xt);nd=l(WL,"SPAN",{});var FL=r(nd);d(Bo.$$.fragment,FL),FL.forEach(t),WL.forEach(t),n7=c(J0),od=l(J0,"SPAN",{});var VL=r(od);o7=n(VL,"ZeRO-2 Config"),VL.forEach(t),J0.forEach(t),qy=c(e),Di=l(e,"P",{});var YL=r(Di);l7=n(YL,"The following is an example of configuration for ZeRO stage 2:"),YL.forEach(t),Ey=c(e),d(Wo.$$.fragment,e),$y=c(e),Oi=l(e,"P",{});var KL=r(Oi);ld=l(KL,"STRONG",{});var JL=r(ld);r7=n(JL,"Performance tuning:"),JL.forEach(t),KL.forEach(t),ky=c(e),Ie=l(e,"UL",{});var sh=r(Ie);Os=l(sh,"LI",{});var th=r(Os);p7=n(th,"enabling "),rd=l(th,"CODE",{});var XL=r(rd);i7=n(XL,"offload_optimizer"),XL.forEach(t),u7=n(th," should reduce GPU RAM usage (it requires "),pd=l(th,"CODE",{});var QL=r(pd);c7=n(QL,'"stage": 2'),QL.forEach(t),h7=n(th,")"),th.forEach(t),f7=c(sh),A=l(sh,"LI",{});var K=r(A);id=l(K,"CODE",{});var eM=r(id);d7=n(eM,'"overlap_comm": true'),eM.forEach(t),m7=n(K," trades off increased GPU RAM usage to lower all-reduce latency. "),ud=l(K,"CODE",{});var sM=r(ud);_7=n(sM,"overlap_comm"),sM.forEach(t),v7=n(K,` uses 4.5x
the `),cd=l(K,"CODE",{});var tM=r(cd);j7=n(tM,"allgather_bucket_size"),tM.forEach(t),g7=n(K," and "),hd=l(K,"CODE",{});var aM=r(hd);y7=n(aM,"reduce_bucket_size"),aM.forEach(t),w7=n(K,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),fd=l(K,"CODE",{});var nM=r(fd);b7=n(nM,"5e8 x 2Bytes x 2 x 4.5"),nM.forEach(t),q7=n(K,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),dd=l(K,"CODE",{});var oM=r(dd);E7=n(oM,"2e8"),oM.forEach(t),$7=n(K,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),K.forEach(t),k7=c(sh),md=l(sh,"LI",{});var lM=r(md);P7=n(lM,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),lM.forEach(t),sh.forEach(t),Py=c(e),Ue=l(e,"P",{});var ah=r(Ue);z7=n(ah,"Additionally, "),_d=l(ah,"CODE",{});var rM=r(_d);D7=n(rM,"deepspeed==0.4.4"),rM.forEach(t),O7=n(ah," added a new option "),vd=l(ah,"CODE",{});var pM=r(vd);T7=n(pM,"round_robin_gradients"),pM.forEach(t),A7=n(ah," which you can enable with:"),ah.forEach(t),zy=c(e),d(Fo.$$.fragment,e),Dy=c(e),Ti=l(e,"P",{});var iM=r(Ti);S7=n(iM,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),iM.forEach(t),Oy=c(e),Ai=l(e,"A",{id:!0}),r(Ai).forEach(t),Ty=c(e),Ts=l(e,"H4",{class:!0});var X0=r(Ts);Qt=l(X0,"A",{id:!0,class:!0,href:!0});var uM=r(Qt);jd=l(uM,"SPAN",{});var cM=r(jd);d(Vo.$$.fragment,cM),cM.forEach(t),uM.forEach(t),C7=c(X0),gd=l(X0,"SPAN",{});var hM=r(gd);x7=n(hM,"ZeRO-3 Config"),hM.forEach(t),X0.forEach(t),Ay=c(e),Si=l(e,"P",{});var fM=r(Si);R7=n(fM,"The following is an example of configuration for ZeRO stage 3:"),fM.forEach(t),Sy=c(e),d(Yo.$$.fragment,e),Cy=c(e),N=l(e,"P",{});var hs=r(N);I7=n(hs,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),yd=l(hs,"CODE",{});var dM=r(yd);U7=n(dM,'"device": "cpu"'),dM.forEach(t),G7=n(hs,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),wd=l(hs,"CODE",{});var mM=r(wd);L7=n(mM,"none"),mM.forEach(t),M7=n(hs," instead of "),bd=l(hs,"CODE",{});var _M=r(bd);Z7=n(_M,"cpu"),_M.forEach(t),N7=n(hs," for the "),qd=l(hs,"CODE",{});var vM=r(qd);H7=n(vM,"device"),vM.forEach(t),B7=n(hs,` entry. Offloading to
NVMe is discussed further down.`),hs.forEach(t),xy=c(e),Ge=l(e,"P",{});var nh=r(Ge);W7=n(nh,"Pinned memory is enabled with "),Ed=l(nh,"CODE",{});var jM=r(Ed);F7=n(jM,"pin_memory"),jM.forEach(t),V7=n(nh," set to "),$d=l(nh,"CODE",{});var gM=r($d);Y7=n(gM,"true"),gM.forEach(t),K7=n(nh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),nh.forEach(t),Ry=c(e),Ci=l(e,"P",{});var yM=r(Ci);kd=l(yM,"STRONG",{});var wM=r(kd);J7=n(wM,"Performance tuning:"),wM.forEach(t),yM.forEach(t),Iy=c(e),ea=l(e,"UL",{});var Q0=r(ea);Ko=l(Q0,"LI",{});var eq=r(Ko);Pd=l(eq,"CODE",{});var bM=r(Pd);X7=n(bM,"stage3_max_live_parameters"),bM.forEach(t),Q7=n(eq,": "),zd=l(eq,"CODE",{});var qM=r(zd);ek=n(qM,"1e9"),qM.forEach(t),eq.forEach(t),sk=c(Q0),Jo=l(Q0,"LI",{});var sq=r(Jo);Dd=l(sq,"CODE",{});var EM=r(Dd);tk=n(EM,"stage3_max_reuse_distance"),EM.forEach(t),ak=n(sq,": "),Od=l(sq,"CODE",{});var $M=r(Od);nk=n($M,"1e9"),$M.forEach(t),sq.forEach(t),Q0.forEach(t),Uy=c(e),S=l(e,"P",{});var de=r(S);ok=n(de,"If hitting OOM reduce "),Td=l(de,"CODE",{});var kM=r(Td);lk=n(kM,"stage3_max_live_parameters"),kM.forEach(t),rk=n(de," and "),Ad=l(de,"CODE",{});var PM=r(Ad);pk=n(PM,"stage3_max_reuse_distance"),PM.forEach(t),ik=n(de,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Sd=l(de,"CODE",{});var zM=r(Sd);uk=n(zM,"1e9"),zM.forEach(t),ck=n(de,` would consume ~2GB. The memory is shared by
`),Cd=l(de,"CODE",{});var DM=r(Cd);hk=n(DM,"stage3_max_live_parameters"),DM.forEach(t),fk=n(de," and "),xd=l(de,"CODE",{});var OM=r(xd);dk=n(OM,"stage3_max_reuse_distance"),OM.forEach(t),mk=n(de,", so it\u2019s not additive, it\u2019s just 2GB total."),de.forEach(t),Gy=c(e),we=l(e,"P",{});var mp=r(we);Rd=l(mp,"CODE",{});var TM=r(Rd);_k=n(TM,"stage3_max_live_parameters"),TM.forEach(t),vk=n(mp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Id=l(mp,"CODE",{});var AM=r(Id);jk=n(AM,"stage3_max_reuse_distance"),AM.forEach(t),gk=n(mp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Ud=l(mp,"CODE",{});var SM=r(Ud);yk=n(SM,"stage3_max_reuse_distance"),SM.forEach(t),wk=n(mp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),mp.forEach(t),Ly=c(e),xi=l(e,"P",{});var CM=r(xi);bk=n(CM,"The following configuration values depend on the model\u2019s hidden size:"),CM.forEach(t),My=c(e),Le=l(e,"UL",{});var oh=r(Le);Xo=l(oh,"LI",{});var tq=r(Xo);Gd=l(tq,"CODE",{});var xM=r(Gd);qk=n(xM,"reduce_bucket_size"),xM.forEach(t),Ek=n(tq,": "),Ld=l(tq,"CODE",{});var RM=r(Ld);$k=n(RM,"hidden_size*hidden_size"),RM.forEach(t),tq.forEach(t),kk=c(oh),Qo=l(oh,"LI",{});var aq=r(Qo);Md=l(aq,"CODE",{});var IM=r(Md);Pk=n(IM,"stage3_prefetch_bucket_size"),IM.forEach(t),zk=n(aq,": "),Zd=l(aq,"CODE",{});var UM=r(Zd);Dk=n(UM,"0.9 * hidden_size * hidden_size"),UM.forEach(t),aq.forEach(t),Ok=c(oh),el=l(oh,"LI",{});var nq=r(el);Nd=l(nq,"CODE",{});var GM=r(Nd);Tk=n(GM,"stage3_param_persistence_threshold"),GM.forEach(t),Ak=n(nq,": "),Hd=l(nq,"CODE",{});var LM=r(Hd);Sk=n(LM,"10 * hidden_size"),LM.forEach(t),nq.forEach(t),oh.forEach(t),Zy=c(e),Me=l(e,"P",{});var lh=r(Me);Ck=n(lh,"therefore set these values to "),Bd=l(lh,"CODE",{});var MM=r(Bd);xk=n(MM,"auto"),MM.forEach(t),Rk=n(lh," and the "),Ri=l(lh,"A",{href:!0});var ZM=r(Ri);Ik=n(ZM,"Trainer"),ZM.forEach(t),Uk=n(lh,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),lh.forEach(t),Ny=c(e),sl=l(e,"P",{});var WI=r(sl);Wd=l(WI,"CODE",{});var NM=r(Wd);Gk=n(NM,"stage3_gather_fp16_weights_on_model_save"),NM.forEach(t),Lk=n(WI,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),WI.forEach(t),Hy=c(e),ee=l(e,"P",{});var Tn=r(ee);Mk=n(Tn,"If you\u2019re migrating from ZeRO-2 configuration note that "),Fd=l(Tn,"CODE",{});var HM=r(Fd);Zk=n(HM,"allgather_partitions"),HM.forEach(t),Nk=n(Tn,", "),Vd=l(Tn,"CODE",{});var BM=r(Vd);Hk=n(BM,"allgather_bucket_size"),BM.forEach(t),Bk=n(Tn,` and
`),Yd=l(Tn,"CODE",{});var WM=r(Yd);Wk=n(WM,"reduce_scatter"),WM.forEach(t),Fk=n(Tn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Tn.forEach(t),By=c(e),Ii=l(e,"UL",{});var FM=r(Ii);tl=l(FM,"LI",{});var oq=r(tl);Kd=l(oq,"CODE",{});var VM=r(Kd);Vk=n(VM,"sub_group_size"),VM.forEach(t),Yk=n(oq,": "),Jd=l(oq,"CODE",{});var YM=r(Jd);Kk=n(YM,"1e9"),YM.forEach(t),oq.forEach(t),FM.forEach(t),Wy=c(e),be=l(e,"P",{});var _p=r(be);Xd=l(_p,"CODE",{});var KM=r(Xd);Jk=n(KM,"sub_group_size"),KM.forEach(t),Xk=n(_p,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),Qd=l(_p,"CODE",{});var JM=r(Qd);Qk=n(JM,"sub_group_size"),JM.forEach(t),e9=n(_p,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),em=l(_p,"CODE",{});var XM=r(em);s9=n(XM,"sub_group_size"),XM.forEach(t),t9=n(_p,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),_p.forEach(t),Fy=c(e),Ze=l(e,"P",{});var rh=r(Ze);a9=n(rh,"You can leave "),sm=l(rh,"CODE",{});var QM=r(sm);n9=n(QM,"sub_group_size"),QM.forEach(t),o9=n(rh," to its default value of "),tm=l(rh,"EM",{});var eZ=r(tm);l9=n(eZ,"1e9"),eZ.forEach(t),r9=n(rh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),rh.forEach(t),Vy=c(e),sa=l(e,"OL",{});var lq=r(sa);al=l(lq,"LI",{});var rq=r(al);p9=n(rq,"Running into OOM during optimizer step: Reduce "),am=l(rq,"CODE",{});var sZ=r(am);i9=n(sZ,"sub_group_size"),sZ.forEach(t),u9=n(rq," to reduce memory utilization of temporary buffers"),rq.forEach(t),c9=c(lq),nl=l(lq,"LI",{});var pq=r(nl);h9=n(pq,"Optimizer Step is taking a long time: Increase "),nm=l(pq,"CODE",{});var tZ=r(nm);f9=n(tZ,"sub_group_size"),tZ.forEach(t),d9=n(pq,` to improve bandwidth utilization as a result of
the increased data buffers.`),pq.forEach(t),lq.forEach(t),Yy=c(e),Ui=l(e,"A",{id:!0}),r(Ui).forEach(t),Ky=c(e),As=l(e,"H3",{class:!0});var iq=r(As);ta=l(iq,"A",{id:!0,class:!0,href:!0});var aZ=r(ta);om=l(aZ,"SPAN",{});var nZ=r(om);d(ol.$$.fragment,nZ),nZ.forEach(t),aZ.forEach(t),m9=c(iq),lm=l(iq,"SPAN",{});var oZ=r(lm);_9=n(oZ,"NVMe Support"),oZ.forEach(t),iq.forEach(t),Jy=c(e),Gi=l(e,"P",{});var lZ=r(Gi);v9=n(lZ,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),lZ.forEach(t),Xy=c(e),Li=l(e,"P",{});var rZ=r(Li);j9=n(rZ,"The following configuration example enables NVMe to offload both optimizer states and the params:"),rZ.forEach(t),Qy=c(e),d(ll.$$.fragment,e),ew=c(e),aa=l(e,"P",{});var uq=r(aa);g9=n(uq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),rm=l(uq,"EM",{});var pZ=r(rm);y9=n(pZ,"\u201Cdevice\u201D: \u201Ccpu\u201D"),pZ.forEach(t),w9=n(uq,")."),uq.forEach(t),sw=c(e),Ne=l(e,"P",{});var ph=r(Ne);b9=n(ph,"Here is the full documentation for offloading "),rl=l(ph,"A",{href:!0,rel:!0});var iZ=r(rl);q9=n(iZ,"optimizer states"),iZ.forEach(t),E9=n(ph," and "),pl=l(ph,"A",{href:!0,rel:!0});var uZ=r(pl);$9=n(uZ,"parameters"),uZ.forEach(t),k9=n(ph,"."),ph.forEach(t),tw=c(e),na=l(e,"P",{});var cq=r(na);P9=n(cq,"Make sure that your "),pm=l(cq,"CODE",{});var cZ=r(pm);z9=n(cZ,"nvme_path"),cZ.forEach(t),D9=n(cq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),cq.forEach(t),aw=c(e),He=l(e,"P",{});var ih=r(He);O9=n(ih,"In order to figure out the optimal "),im=l(ih,"CODE",{});var hZ=r(im);T9=n(hZ,"aio"),hZ.forEach(t),A9=n(ih,` configuration block you must run a benchmark on your target setup, as
`),il=l(ih,"A",{href:!0,rel:!0});var fZ=r(il);S9=n(fZ,"explained here"),fZ.forEach(t),C9=n(ih,"."),ih.forEach(t),nw=c(e),Mi=l(e,"A",{id:!0}),r(Mi).forEach(t),ow=c(e),Ss=l(e,"H4",{class:!0});var hq=r(Ss);oa=l(hq,"A",{id:!0,class:!0,href:!0});var dZ=r(oa);um=l(dZ,"SPAN",{});var mZ=r(um);d(ul.$$.fragment,mZ),mZ.forEach(t),dZ.forEach(t),x9=c(hq),cm=l(hq,"SPAN",{});var _Z=r(cm);R9=n(_Z,"ZeRO-2 vs ZeRO-3 Performance"),_Z.forEach(t),hq.forEach(t),lw=c(e),Zi=l(e,"P",{});var vZ=r(Zi);I9=n(vZ,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),vZ.forEach(t),rw=c(e),Ni=l(e,"P",{});var jZ=r(Ni);U9=n(jZ,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),jZ.forEach(t),pw=c(e),la=l(e,"UL",{});var fq=r(la);Cs=l(fq,"LI",{});var uh=r(Cs);G9=n(uh,"set "),hm=l(uh,"CODE",{});var gZ=r(hm);L9=n(gZ,"stage3_param_persistence_threshold"),gZ.forEach(t),M9=n(uh," to a very large number - larger than the largest parameter, e.g., "),fm=l(uh,"CODE",{});var yZ=r(fm);Z9=n(yZ,"6 * hidden_size * hidden_size"),yZ.forEach(t),N9=n(uh,". This will keep the parameters on the GPUs."),uh.forEach(t),H9=c(fq),cl=l(fq,"LI",{});var dq=r(cl);B9=n(dq,"turn off "),dm=l(dq,"CODE",{});var wZ=r(dm);W9=n(wZ,"offload_params"),wZ.forEach(t),F9=n(dq," since ZeRO-2 doesn\u2019t have that option."),dq.forEach(t),fq.forEach(t),iw=c(e),Be=l(e,"P",{});var ch=r(Be);V9=n(ch,"The performance will likely improve significantly with just "),mm=l(ch,"CODE",{});var bZ=r(mm);Y9=n(bZ,"offload_params"),bZ.forEach(t),K9=n(ch,` turned off, even if you don\u2019t change
`),_m=l(ch,"CODE",{});var qZ=r(_m);J9=n(qZ,"stage3_param_persistence_threshold"),qZ.forEach(t),X9=n(ch,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),ch.forEach(t),uw=c(e),Hi=l(e,"A",{id:!0}),r(Hi).forEach(t),cw=c(e),xs=l(e,"H4",{class:!0});var mq=r(xs);ra=l(mq,"A",{id:!0,class:!0,href:!0});var EZ=r(ra);vm=l(EZ,"SPAN",{});var $Z=r(vm);d(hl.$$.fragment,$Z),$Z.forEach(t),EZ.forEach(t),Q9=c(mq),jm=l(mq,"SPAN",{});var kZ=r(jm);eP=n(kZ,"ZeRO-2 Example"),kZ.forEach(t),mq.forEach(t),hw=c(e),pa=l(e,"P",{});var _q=r(pa);sP=n(_q,"Here is a full ZeRO-2 auto-configuration file "),gm=l(_q,"CODE",{});var PZ=r(gm);tP=n(PZ,"ds_config_zero2.json"),PZ.forEach(t),aP=n(_q,":"),_q.forEach(t),fw=c(e),d(fl.$$.fragment,e),dw=c(e),ia=l(e,"P",{});var vq=r(ia);nP=n(vq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),ym=l(vq,"CODE",{});var zZ=r(ym);oP=n(zZ,"auto"),zZ.forEach(t),lP=n(vq," settings in it."),vq.forEach(t),mw=c(e),d(dl.$$.fragment,e),_w=c(e),Bi=l(e,"A",{id:!0}),r(Bi).forEach(t),vw=c(e),Rs=l(e,"H4",{class:!0});var jq=r(Rs);ua=l(jq,"A",{id:!0,class:!0,href:!0});var DZ=r(ua);wm=l(DZ,"SPAN",{});var OZ=r(wm);d(ml.$$.fragment,OZ),OZ.forEach(t),DZ.forEach(t),rP=c(jq),bm=l(jq,"SPAN",{});var TZ=r(bm);pP=n(TZ,"ZeRO-3 Example"),TZ.forEach(t),jq.forEach(t),jw=c(e),ca=l(e,"P",{});var gq=r(ca);iP=n(gq,"Here is a full ZeRO-3 auto-configuration file "),qm=l(gq,"CODE",{});var AZ=r(qm);uP=n(AZ,"ds_config_zero3.json"),AZ.forEach(t),cP=n(gq,":"),gq.forEach(t),gw=c(e),d(_l.$$.fragment,e),yw=c(e),ha=l(e,"P",{});var yq=r(ha);hP=n(yq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Em=l(yq,"CODE",{});var SZ=r(Em);fP=n(SZ,"auto"),SZ.forEach(t),dP=n(yq," settings in it."),yq.forEach(t),ww=c(e),d(vl.$$.fragment,e),bw=c(e),Is=l(e,"H3",{class:!0});var wq=r(Is);fa=l(wq,"A",{id:!0,class:!0,href:!0});var CZ=r(fa);$m=l(CZ,"SPAN",{});var xZ=r($m);d(jl.$$.fragment,xZ),xZ.forEach(t),CZ.forEach(t),mP=c(wq),km=l(wq,"SPAN",{});var RZ=r(km);_P=n(RZ,"Optimizer and Scheduler"),RZ.forEach(t),wq.forEach(t),qw=c(e),da=l(e,"P",{});var bq=r(da);vP=n(bq,"As long as you don\u2019t enable "),Pm=l(bq,"CODE",{});var IZ=r(Pm);jP=n(IZ,"offload_optimizer"),IZ.forEach(t),gP=n(bq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),bq.forEach(t),Ew=c(e),Wi=l(e,"P",{});var UZ=r(Wi);yP=n(UZ,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),UZ.forEach(t),$w=c(e),ma=l(e,"P",{});var qq=r(ma);wP=n(qq,"It is possible to use a non-DeepSpeed optimizer when "),zm=l(qq,"CODE",{});var GZ=r(zm);bP=n(GZ,"offload_optimizer"),GZ.forEach(t),qP=n(qq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),qq.forEach(t),kw=c(e),Fi=l(e,"A",{id:!0}),r(Fi).forEach(t),Pw=c(e),Us=l(e,"H4",{class:!0});var Eq=r(Us);_a=l(Eq,"A",{id:!0,class:!0,href:!0});var LZ=r(_a);Dm=l(LZ,"SPAN",{});var MZ=r(Dm);d(gl.$$.fragment,MZ),MZ.forEach(t),LZ.forEach(t),EP=c(Eq),Om=l(Eq,"SPAN",{});var ZZ=r(Om);$P=n(ZZ,"Optimizer"),ZZ.forEach(t),Eq.forEach(t),zw=c(e),We=l(e,"P",{});var hh=r(We);kP=n(hh,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Tm=l(hh,"CODE",{});var NZ=r(Tm);PP=n(NZ,"torch"),NZ.forEach(t),zP=n(hh,". The full documentation is "),yl=l(hh,"A",{href:!0,rel:!0});var HZ=r(yl);DP=n(HZ,"here"),HZ.forEach(t),OP=n(hh,"."),hh.forEach(t),Dw=c(e),q=l(e,"P",{});var z=r(q);TP=n(z,"If you don\u2019t configure the "),Am=l(z,"CODE",{});var BZ=r(Am);AP=n(BZ,"optimizer"),BZ.forEach(t),SP=n(z," entry in the configuration file, the "),Vi=l(z,"A",{href:!0});var WZ=r(Vi);CP=n(WZ,"Trainer"),WZ.forEach(t),xP=n(z,` will
automatically set it to `),Sm=l(z,"CODE",{});var FZ=r(Sm);RP=n(FZ,"AdamW"),FZ.forEach(t),IP=n(z,` and will use the supplied values or the defaults for the following command line
arguments: `),Cm=l(z,"CODE",{});var VZ=r(Cm);UP=n(VZ,"--learning_rate"),VZ.forEach(t),GP=n(z,", "),xm=l(z,"CODE",{});var YZ=r(xm);LP=n(YZ,"--adam_beta1"),YZ.forEach(t),MP=n(z,", "),Rm=l(z,"CODE",{});var KZ=r(Rm);ZP=n(KZ,"--adam_beta2"),KZ.forEach(t),NP=n(z,", "),Im=l(z,"CODE",{});var JZ=r(Im);HP=n(JZ,"--adam_epsilon"),JZ.forEach(t),BP=n(z," and "),Um=l(z,"CODE",{});var XZ=r(Um);WP=n(XZ,"--weight_decay"),XZ.forEach(t),FP=n(z,"."),z.forEach(t),Ow=c(e),Fe=l(e,"P",{});var fh=r(Fe);VP=n(fh,"Here is an example of the auto-configured "),Gm=l(fh,"CODE",{});var QZ=r(Gm);YP=n(QZ,"optimizer"),QZ.forEach(t),KP=n(fh," entry for "),Lm=l(fh,"CODE",{});var eN=r(Lm);JP=n(eN,"AdamW"),eN.forEach(t),XP=n(fh,":"),fh.forEach(t),Tw=c(e),d(wl.$$.fragment,e),Aw=c(e),Yi=l(e,"P",{});var sN=r(Yi);QP=n(sN,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),sN.forEach(t),Sw=c(e),se=l(e,"UL",{});var An=r(se);bl=l(An,"LI",{});var $q=r(bl);Mm=l($q,"CODE",{});var tN=r(Mm);ez=n(tN,"lr"),tN.forEach(t),sz=n($q," with the value of "),Zm=l($q,"CODE",{});var aN=r(Zm);tz=n(aN,"--learning_rate"),aN.forEach(t),$q.forEach(t),az=c(An),ql=l(An,"LI",{});var kq=r(ql);Nm=l(kq,"CODE",{});var nN=r(Nm);nz=n(nN,"betas"),nN.forEach(t),oz=n(kq," with the value of "),Hm=l(kq,"CODE",{});var oN=r(Hm);lz=n(oN,"--adam_beta1 --adam_beta2"),oN.forEach(t),kq.forEach(t),rz=c(An),El=l(An,"LI",{});var Pq=r(El);Bm=l(Pq,"CODE",{});var lN=r(Bm);pz=n(lN,"eps"),lN.forEach(t),iz=n(Pq," with the value of "),Wm=l(Pq,"CODE",{});var rN=r(Wm);uz=n(rN,"--adam_epsilon"),rN.forEach(t),Pq.forEach(t),cz=c(An),$l=l(An,"LI",{});var zq=r($l);Fm=l(zq,"CODE",{});var pN=r(Fm);hz=n(pN,"weight_decay"),pN.forEach(t),fz=n(zq," with the value of "),Vm=l(zq,"CODE",{});var iN=r(Vm);dz=n(iN,"--weight_decay"),iN.forEach(t),zq.forEach(t),An.forEach(t),Cw=c(e),Ki=l(e,"P",{});var uN=r(Ki);mz=n(uN,"Therefore please remember to tune the shared hyperparameters on the command line."),uN.forEach(t),xw=c(e),Ji=l(e,"P",{});var cN=r(Ji);_z=n(cN,"You can also set the values explicitly:"),cN.forEach(t),Rw=c(e),d(kl.$$.fragment,e),Iw=c(e),va=l(e,"P",{});var Dq=r(va);vz=n(Dq,"But then you\u2019re on your own synchronizing the "),Xi=l(Dq,"A",{href:!0});var hN=r(Xi);jz=n(hN,"Trainer"),hN.forEach(t),gz=n(Dq,` command line arguments and the DeepSpeed
configuration.`),Dq.forEach(t),Uw=c(e),Qi=l(e,"P",{});var fN=r(Qi);yz=n(fN,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),fN.forEach(t),Gw=c(e),d(Pl.$$.fragment,e),Lw=c(e),te=l(e,"P",{});var Sn=r(te);wz=n(Sn,"Similarly to "),Ym=l(Sn,"CODE",{});var dN=r(Ym);bz=n(dN,"AdamW"),dN.forEach(t),qz=n(Sn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Km=l(Sn,"CODE",{});var mN=r(Km);Ez=n(mN,"weight_decay"),mN.forEach(t),$z=n(Sn," around "),Jm=l(Sn,"CODE",{});var _N=r(Jm);kz=n(_N,"0.01"),_N.forEach(t),Pz=n(Sn,"."),Sn.forEach(t),Mw=c(e),eu=l(e,"A",{id:!0}),r(eu).forEach(t),Zw=c(e),Gs=l(e,"H4",{class:!0});var Oq=r(Gs);ja=l(Oq,"A",{id:!0,class:!0,href:!0});var vN=r(ja);Xm=l(vN,"SPAN",{});var jN=r(Xm);d(zl.$$.fragment,jN),jN.forEach(t),vN.forEach(t),zz=c(Oq),Qm=l(Oq,"SPAN",{});var gN=r(Qm);Dz=n(gN,"Scheduler"),gN.forEach(t),Oq.forEach(t),Nw=c(e),C=l(e,"P",{});var me=r(C);Oz=n(me,"DeepSpeed supports "),e_=l(me,"CODE",{});var yN=r(e_);Tz=n(yN,"LRRangeTest"),yN.forEach(t),Az=n(me,", "),s_=l(me,"CODE",{});var wN=r(s_);Sz=n(wN,"OneCycle"),wN.forEach(t),Cz=n(me,", "),t_=l(me,"CODE",{});var bN=r(t_);xz=n(bN,"WarmupLR"),bN.forEach(t),Rz=n(me," and "),a_=l(me,"CODE",{});var qN=r(a_);Iz=n(qN,"WarmupDecayLR"),qN.forEach(t),Uz=n(me,` learning rate schedulers. The full
documentation is `),Dl=l(me,"A",{href:!0,rel:!0});var EN=r(Dl);Gz=n(EN,"here"),EN.forEach(t),Lz=n(me,"."),me.forEach(t),Hw=c(e),su=l(e,"P",{});var $N=r(su);Mz=n($N,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),$N.forEach(t),Bw=c(e),ga=l(e,"UL",{});var Tq=r(ga);Ol=l(Tq,"LI",{});var Aq=r(Ol);n_=l(Aq,"CODE",{});var kN=r(n_);Zz=n(kN,"WarmupLR"),kN.forEach(t),Nz=n(Aq," via "),o_=l(Aq,"CODE",{});var PN=r(o_);Hz=n(PN,"--lr_scheduler_type constant_with_warmup"),PN.forEach(t),Aq.forEach(t),Bz=c(Tq),Ve=l(Tq,"LI",{});var vp=r(Ve);l_=l(vp,"CODE",{});var zN=r(l_);Wz=n(zN,"WarmupDecayLR"),zN.forEach(t),Fz=n(vp," via "),r_=l(vp,"CODE",{});var DN=r(r_);Vz=n(DN,"--lr_scheduler_type linear"),DN.forEach(t),Yz=n(vp,". This is also the default value for "),p_=l(vp,"CODE",{});var ON=r(p_);Kz=n(ON,"--lr_scheduler_type"),ON.forEach(t),Jz=n(vp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),vp.forEach(t),Tq.forEach(t),Ww=c(e),P=l(e,"P",{});var W=r(P);Xz=n(W,"If you don\u2019t configure the "),i_=l(W,"CODE",{});var TN=r(i_);Qz=n(TN,"scheduler"),TN.forEach(t),eD=n(W," entry in the configuration file, the "),tu=l(W,"A",{href:!0});var AN=r(tu);sD=n(AN,"Trainer"),AN.forEach(t),tD=n(W,` will use
the values of `),u_=l(W,"CODE",{});var SN=r(u_);aD=n(SN,"--lr_scheduler_type"),SN.forEach(t),nD=n(W,", "),c_=l(W,"CODE",{});var CN=r(c_);oD=n(CN,"--learning_rate"),CN.forEach(t),lD=n(W," and "),h_=l(W,"CODE",{});var xN=r(h_);rD=n(xN,"--warmup_steps"),xN.forEach(t),pD=n(W," or "),f_=l(W,"CODE",{});var RN=r(f_);iD=n(RN,"--warmup_ratio"),RN.forEach(t),uD=n(W,` to configure a
\u{1F917} Transformers version of it.`),W.forEach(t),Fw=c(e),Ye=l(e,"P",{});var dh=r(Ye);cD=n(dh,"Here is an example of the auto-configured "),d_=l(dh,"CODE",{});var IN=r(d_);hD=n(IN,"scheduler"),IN.forEach(t),fD=n(dh," entry for "),m_=l(dh,"CODE",{});var UN=r(m_);dD=n(UN,"WarmupLR"),UN.forEach(t),mD=n(dh,":"),dh.forEach(t),Vw=c(e),d(Tl.$$.fragment,e),Yw=c(e),Ke=l(e,"P",{});var mh=r(Ke);_D=n(mh,"Since "),__=l(mh,"EM",{});var GN=r(__);vD=n(GN,"\u201Cauto\u201D"),GN.forEach(t),jD=n(mh," is used the "),au=l(mh,"A",{href:!0});var LN=r(au);gD=n(LN,"Trainer"),LN.forEach(t),yD=n(mh,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),mh.forEach(t),Kw=c(e),ae=l(e,"UL",{});var Cn=r(ae);ya=l(Cn,"LI",{});var nj=r(ya);v_=l(nj,"CODE",{});var MN=r(v_);wD=n(MN,"warmup_min_lr"),MN.forEach(t),bD=n(nj," with the value of "),j_=l(nj,"CODE",{});var ZN=r(j_);qD=n(ZN,"0"),ZN.forEach(t),ED=n(nj,"."),nj.forEach(t),$D=c(Cn),wa=l(Cn,"LI",{});var oj=r(wa);g_=l(oj,"CODE",{});var NN=r(g_);kD=n(NN,"warmup_max_lr"),NN.forEach(t),PD=n(oj," with the value of "),y_=l(oj,"CODE",{});var HN=r(y_);zD=n(HN,"--learning_rate"),HN.forEach(t),DD=n(oj,"."),oj.forEach(t),OD=c(Cn),Je=l(Cn,"LI",{});var jp=r(Je);w_=l(jp,"CODE",{});var BN=r(w_);TD=n(BN,"warmup_num_steps"),BN.forEach(t),AD=n(jp," with the value of "),b_=l(jp,"CODE",{});var WN=r(b_);SD=n(WN,"--warmup_steps"),WN.forEach(t),CD=n(jp," if provided. Otherwise will use "),q_=l(jp,"CODE",{});var FN=r(q_);xD=n(FN,"--warmup_ratio"),FN.forEach(t),RD=n(jp,`
multiplied by the number of training steps and rounded up.`),jp.forEach(t),ID=c(Cn),Xe=l(Cn,"LI",{});var gp=r(Xe);E_=l(gp,"CODE",{});var VN=r(E_);UD=n(VN,"total_num_steps"),VN.forEach(t),GD=n(gp," with either the value of "),$_=l(gp,"CODE",{});var YN=r($_);LD=n(YN,"--max_steps"),YN.forEach(t),MD=n(gp,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),k_=l(gp,"CODE",{});var KN=r(k_);ZD=n(KN,"WarmupDecayLR"),KN.forEach(t),ND=n(gp,")."),gp.forEach(t),Cn.forEach(t),Jw=c(e),nu=l(e,"P",{});var JN=r(nu);HD=n(JN,"You can, of course, take over any or all of the configuration values and set those yourself:"),JN.forEach(t),Xw=c(e),d(Al.$$.fragment,e),Qw=c(e),ba=l(e,"P",{});var Sq=r(ba);BD=n(Sq,"But then you\u2019re on your own synchronizing the "),ou=l(Sq,"A",{href:!0});var XN=r(ou);WD=n(XN,"Trainer"),XN.forEach(t),FD=n(Sq,` command line arguments and the DeepSpeed
configuration.`),Sq.forEach(t),e2=c(e),qa=l(e,"P",{});var Cq=r(qa);VD=n(Cq,"For example, for "),P_=l(Cq,"CODE",{});var QN=r(P_);YD=n(QN,"WarmupDecayLR"),QN.forEach(t),KD=n(Cq,", you can use the following entry:"),Cq.forEach(t),s2=c(e),d(Sl.$$.fragment,e),t2=c(e),H=l(e,"P",{});var fs=r(H);JD=n(fs,"and "),z_=l(fs,"CODE",{});var eH=r(z_);XD=n(eH,"total_num_steps"),eH.forEach(t),QD=n(fs,", "),D_=l(fs,"CODE",{});var sH=r(D_);eO=n(sH,"warmup_max_lr"),sH.forEach(t),sO=n(fs,", "),O_=l(fs,"CODE",{});var tH=r(O_);tO=n(tH,"warmup_num_steps"),tH.forEach(t),aO=n(fs," and "),T_=l(fs,"CODE",{});var aH=r(T_);nO=n(aH,"total_num_steps"),aH.forEach(t),oO=n(fs," will be set at loading time."),fs.forEach(t),a2=c(e),lu=l(e,"A",{id:!0}),r(lu).forEach(t),n2=c(e),Ls=l(e,"H3",{class:!0});var xq=r(Ls);Ea=l(xq,"A",{id:!0,class:!0,href:!0});var nH=r(Ea);A_=l(nH,"SPAN",{});var oH=r(A_);d(Cl.$$.fragment,oH),oH.forEach(t),nH.forEach(t),lO=c(xq),S_=l(xq,"SPAN",{});var lH=r(S_);rO=n(lH,"fp32 Precision"),lH.forEach(t),xq.forEach(t),o2=c(e),ru=l(e,"P",{});var rH=r(ru);pO=n(rH,"Deepspeed supports the full fp32 and the fp16 mixed precision."),rH.forEach(t),l2=c(e),$a=l(e,"P",{});var Rq=r($a);iO=n(Rq,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),C_=l(Rq,"CODE",{});var pH=r(C_);uO=n(pH,"NaN"),pH.forEach(t),cO=n(Rq,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Rq.forEach(t),r2=c(e),d(xl.$$.fragment,e),p2=c(e),ka=l(e,"P",{});var Iq=r(ka);hO=n(Iq,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Rl=l(Iq,"A",{href:!0,rel:!0});var iH=r(Rl);fO=n(iH,"TensorFloat-32(TF32) on Ampere devices"),iH.forEach(t),dO=n(Iq,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Iq.forEach(t),i2=c(e),pu=l(e,"A",{id:!0}),r(pu).forEach(t),u2=c(e),Ms=l(e,"H3",{class:!0});var Uq=r(Ms);Pa=l(Uq,"A",{id:!0,class:!0,href:!0});var uH=r(Pa);x_=l(uH,"SPAN",{});var cH=r(x_);d(Il.$$.fragment,cH),cH.forEach(t),uH.forEach(t),mO=c(Uq),R_=l(Uq,"SPAN",{});var hH=r(R_);_O=n(hH,"Automatic Mixed Precision"),hH.forEach(t),Uq.forEach(t),c2=c(e),iu=l(e,"P",{});var fH=r(iu);vO=n(fH,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),fH.forEach(t),h2=c(e),uu=l(e,"P",{});var dH=r(uu);jO=n(dH,"To configure pytorch AMP-like mode set:"),dH.forEach(t),f2=c(e),d(Ul.$$.fragment,e),d2=c(e),Qe=l(e,"P",{});var _h=r(Qe);gO=n(_h,"and the "),cu=l(_h,"A",{href:!0});var mH=r(cu);yO=n(mH,"Trainer"),mH.forEach(t),wO=n(_h,` will automatically enable or disable it based on the value of
`),I_=l(_h,"CODE",{});var _H=r(I_);bO=n(_H,"args.fp16_backend"),_H.forEach(t),qO=n(_h,". The rest of config values are up to you."),_h.forEach(t),m2=c(e),za=l(e,"P",{});var Gq=r(za);EO=n(Gq,"This mode gets enabled when "),U_=l(Gq,"CODE",{});var vH=r(U_);$O=n(vH,"--fp16 --fp16_backend amp"),vH.forEach(t),kO=n(Gq," command line args are passed."),Gq.forEach(t),_2=c(e),hu=l(e,"P",{});var jH=r(hu);PO=n(jH,"You can also enable/disable this mode explicitly:"),jH.forEach(t),v2=c(e),d(Gl.$$.fragment,e),j2=c(e),Da=l(e,"P",{});var Lq=r(Da);zO=n(Lq,"But then you\u2019re on your own synchronizing the "),fu=l(Lq,"A",{href:!0});var gH=r(fu);DO=n(gH,"Trainer"),gH.forEach(t),OO=n(Lq,` command line arguments and the DeepSpeed
configuration.`),Lq.forEach(t),g2=c(e),Oa=l(e,"P",{});var Mq=r(Oa);TO=n(Mq,"Here is the "),Ll=l(Mq,"A",{href:!0,rel:!0});var yH=r(Ll);AO=n(yH,"documentation"),yH.forEach(t),SO=n(Mq,"."),Mq.forEach(t),y2=c(e),du=l(e,"P",{});var wH=r(du);CO=n(wH,"To configure apex AMP-like mode set:"),wH.forEach(t),w2=c(e),d(Ml.$$.fragment,e),b2=c(e),ne=l(e,"P",{});var xn=r(ne);xO=n(xn,"and the "),mu=l(xn,"A",{href:!0});var bH=r(mu);RO=n(bH,"Trainer"),bH.forEach(t),IO=n(xn," will automatically configure it based on the values of "),G_=l(xn,"CODE",{});var qH=r(G_);UO=n(qH,"args.fp16_backend"),qH.forEach(t),GO=n(xn,` and
`),L_=l(xn,"CODE",{});var EH=r(L_);LO=n(EH,"args.fp16_opt_level"),EH.forEach(t),MO=n(xn,"."),xn.forEach(t),q2=c(e),Ta=l(e,"P",{});var Zq=r(Ta);ZO=n(Zq,"This mode gets enabled when "),M_=l(Zq,"CODE",{});var $H=r(M_);NO=n($H,"--fp16 --fp16_backend apex --fp16_opt_level 01"),$H.forEach(t),HO=n(Zq," command line args are passed."),Zq.forEach(t),E2=c(e),_u=l(e,"P",{});var kH=r(_u);BO=n(kH,"You can also configure this mode explicitly:"),kH.forEach(t),$2=c(e),d(Zl.$$.fragment,e),k2=c(e),Aa=l(e,"P",{});var Nq=r(Aa);WO=n(Nq,"But then you\u2019re on your own synchronizing the "),vu=l(Nq,"A",{href:!0});var PH=r(vu);FO=n(PH,"Trainer"),PH.forEach(t),VO=n(Nq,` command line arguments and the DeepSpeed
configuration.`),Nq.forEach(t),P2=c(e),Sa=l(e,"P",{});var Hq=r(Sa);YO=n(Hq,"Here is the "),Nl=l(Hq,"A",{href:!0,rel:!0});var zH=r(Nl);KO=n(zH,"documentation"),zH.forEach(t),JO=n(Hq,"."),Hq.forEach(t),z2=c(e),ju=l(e,"A",{id:!0}),r(ju).forEach(t),D2=c(e),Zs=l(e,"H3",{class:!0});var Bq=r(Zs);Ca=l(Bq,"A",{id:!0,class:!0,href:!0});var DH=r(Ca);Z_=l(DH,"SPAN",{});var OH=r(Z_);d(Hl.$$.fragment,OH),OH.forEach(t),DH.forEach(t),XO=c(Bq),N_=l(Bq,"SPAN",{});var TH=r(N_);QO=n(TH,"Batch Size"),TH.forEach(t),Bq.forEach(t),O2=c(e),gu=l(e,"P",{});var AH=r(gu);eT=n(AH,"To configure batch size, use:"),AH.forEach(t),T2=c(e),d(Bl.$$.fragment,e),A2=c(e),x=l(e,"P",{});var _e=r(x);sT=n(_e,"and the "),yu=l(_e,"A",{href:!0});var SH=r(yu);tT=n(SH,"Trainer"),SH.forEach(t),aT=n(_e," will automatically set "),H_=l(_e,"CODE",{});var CH=r(H_);nT=n(CH,"train_micro_batch_size_per_gpu"),CH.forEach(t),oT=n(_e,` to the value of
`),B_=l(_e,"CODE",{});var xH=r(B_);lT=n(xH,"args.per_device_train_batch_size"),xH.forEach(t),rT=n(_e," and "),W_=l(_e,"CODE",{});var RH=r(W_);pT=n(RH,"train_batch_size"),RH.forEach(t),iT=n(_e," to "),F_=l(_e,"CODE",{});var IH=r(F_);uT=n(IH,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),IH.forEach(t),cT=n(_e,"."),_e.forEach(t),S2=c(e),wu=l(e,"P",{});var UH=r(wu);hT=n(UH,"You can also set the values explicitly:"),UH.forEach(t),C2=c(e),d(Wl.$$.fragment,e),x2=c(e),xa=l(e,"P",{});var Wq=r(xa);fT=n(Wq,"But then you\u2019re on your own synchronizing the "),bu=l(Wq,"A",{href:!0});var GH=r(bu);dT=n(GH,"Trainer"),GH.forEach(t),mT=n(Wq,` command line arguments and the DeepSpeed
configuration.`),Wq.forEach(t),R2=c(e),qu=l(e,"A",{id:!0}),r(qu).forEach(t),I2=c(e),Ns=l(e,"H3",{class:!0});var Fq=r(Ns);Ra=l(Fq,"A",{id:!0,class:!0,href:!0});var LH=r(Ra);V_=l(LH,"SPAN",{});var MH=r(V_);d(Fl.$$.fragment,MH),MH.forEach(t),LH.forEach(t),_T=c(Fq),Y_=l(Fq,"SPAN",{});var ZH=r(Y_);vT=n(ZH,"Gradient Accumulation"),ZH.forEach(t),Fq.forEach(t),U2=c(e),Eu=l(e,"P",{});var NH=r(Eu);jT=n(NH,"To configure gradient accumulation set:"),NH.forEach(t),G2=c(e),d(Vl.$$.fragment,e),L2=c(e),es=l(e,"P",{});var vh=r(es);gT=n(vh,"and the "),$u=l(vh,"A",{href:!0});var HH=r($u);yT=n(HH,"Trainer"),HH.forEach(t),wT=n(vh," will automatically set it to the value of "),K_=l(vh,"CODE",{});var BH=r(K_);bT=n(BH,"args.gradient_accumulation_steps"),BH.forEach(t),qT=n(vh,"."),vh.forEach(t),M2=c(e),ku=l(e,"P",{});var WH=r(ku);ET=n(WH,"You can also set the value explicitly:"),WH.forEach(t),Z2=c(e),d(Yl.$$.fragment,e),N2=c(e),Ia=l(e,"P",{});var Vq=r(Ia);$T=n(Vq,"But then you\u2019re on your own synchronizing the "),Pu=l(Vq,"A",{href:!0});var FH=r(Pu);kT=n(FH,"Trainer"),FH.forEach(t),PT=n(Vq,` command line arguments and the DeepSpeed
configuration.`),Vq.forEach(t),H2=c(e),zu=l(e,"A",{id:!0}),r(zu).forEach(t),B2=c(e),Hs=l(e,"H3",{class:!0});var Yq=r(Hs);Ua=l(Yq,"A",{id:!0,class:!0,href:!0});var VH=r(Ua);J_=l(VH,"SPAN",{});var YH=r(J_);d(Kl.$$.fragment,YH),YH.forEach(t),VH.forEach(t),zT=c(Yq),X_=l(Yq,"SPAN",{});var KH=r(X_);DT=n(KH,"Gradient Clipping"),KH.forEach(t),Yq.forEach(t),W2=c(e),Du=l(e,"P",{});var JH=r(Du);OT=n(JH,"To configure gradient gradient clipping set:"),JH.forEach(t),F2=c(e),d(Jl.$$.fragment,e),V2=c(e),ss=l(e,"P",{});var jh=r(ss);TT=n(jh,"and the "),Ou=l(jh,"A",{href:!0});var XH=r(Ou);AT=n(XH,"Trainer"),XH.forEach(t),ST=n(jh," will automatically set it to the value of "),Q_=l(jh,"CODE",{});var QH=r(Q_);CT=n(QH,"args.max_grad_norm"),QH.forEach(t),xT=n(jh,"."),jh.forEach(t),Y2=c(e),Tu=l(e,"P",{});var eB=r(Tu);RT=n(eB,"You can also set the value explicitly:"),eB.forEach(t),K2=c(e),d(Xl.$$.fragment,e),J2=c(e),Ga=l(e,"P",{});var Kq=r(Ga);IT=n(Kq,"But then you\u2019re on your own synchronizing the "),Au=l(Kq,"A",{href:!0});var sB=r(Au);UT=n(sB,"Trainer"),sB.forEach(t),GT=n(Kq,` command line arguments and the DeepSpeed
configuration.`),Kq.forEach(t),X2=c(e),Su=l(e,"A",{id:!0}),r(Su).forEach(t),Q2=c(e),Bs=l(e,"H3",{class:!0});var Jq=r(Bs);La=l(Jq,"A",{id:!0,class:!0,href:!0});var tB=r(La);e1=l(tB,"SPAN",{});var aB=r(e1);d(Ql.$$.fragment,aB),aB.forEach(t),tB.forEach(t),LT=c(Jq),s1=l(Jq,"SPAN",{});var nB=r(s1);MT=n(nB,"Getting The Model Weights Out"),nB.forEach(t),Jq.forEach(t),eb=c(e),Ma=l(e,"P",{});var Xq=r(Ma);ZT=n(Xq,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),t1=l(Xq,"CODE",{});var oB=r(t1);NT=n(oB,"global_step*/*optim_states.pt"),oB.forEach(t),HT=n(Xq,` (this is glob
pattern), and are saved under the normal checkpoint.`),Xq.forEach(t),sb=c(e),Cu=l(e,"P",{});var lB=r(Cu);a1=l(lB,"STRONG",{});var rB=r(a1);BT=n(rB,"FP16 Weights:"),rB.forEach(t),lB.forEach(t),tb=c(e),Za=l(e,"P",{});var Qq=r(Za);WT=n(Qq,"When a model is saved under ZeRO-2, you end up having the normal "),n1=l(Qq,"CODE",{});var pB=r(n1);FT=n(pB,"pytorch_model.bin"),pB.forEach(t),VT=n(Qq,` file with the model weights, but
they are only the fp16 version of the weights.`),Qq.forEach(t),ab=c(e),B=l(e,"P",{});var ds=r(B);YT=n(ds,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),o1=l(ds,"CODE",{});var iB=r(o1);KT=n(iB,'"stage3_gather_fp16_weights_on_model_save": true'),iB.forEach(t),JT=n(ds," is required to get the "),l1=l(ds,"CODE",{});var uB=r(l1);XT=n(uB,"Trainer"),uB.forEach(t),QT=n(ds,` to save the fp16
version of the weights. If this setting is `),r1=l(ds,"CODE",{});var cB=r(r1);eA=n(cB,"False"),cB.forEach(t),sA=c(ds),p1=l(ds,"CODE",{});var hB=r(p1);tA=n(hB,"pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),hB.forEach(t),aA=n(ds,` it
won\u2019t be possible to load it back.`),ds.forEach(t),nb=c(e),d(er.$$.fragment,e),ob=c(e),xu=l(e,"P",{});var fB=r(xu);i1=l(fB,"STRONG",{});var dB=r(i1);nA=n(dB,"FP32 Weights:"),dB.forEach(t),fB.forEach(t),lb=c(e),Na=l(e,"P",{});var eE=r(Na);oA=n(eE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),sr=l(eE,"A",{href:!0,rel:!0});var mB=r(sr);lA=n(mB,"models hub"),mB.forEach(t),rA=n(eE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),eE.forEach(t),rb=c(e),Ru=l(e,"P",{});var _B=r(Ru);u1=l(_B,"STRONG",{});var vB=r(u1);pA=n(vB,"Live FP32 Weights Recovery:"),vB.forEach(t),_B.forEach(t),pb=c(e),Iu=l(e,"P",{});var jB=r(Iu);iA=n(jB,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),jB.forEach(t),ib=c(e),Uu=l(e,"P",{});var gB=r(Uu);uA=n(gB,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),gB.forEach(t),ub=c(e),d(tr.$$.fragment,e),cb=c(e),ts=l(e,"P",{});var gh=r(ts);cA=n(gh,"If you\u2019re using the "),c1=l(gh,"CODE",{});var yB=r(c1);hA=n(yB,"--load_best_model_at_end"),yB.forEach(t),fA=n(gh," class:"),h1=l(gh,"EM",{});var wB=r(h1);dA=n(wB,"~transformers.TrainingArguments"),wB.forEach(t),mA=n(gh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),gh.forEach(t),hb=c(e),d(ar.$$.fragment,e),fb=c(e),d(Ha.$$.fragment,e),db=c(e),Ba=l(e,"P",{});var sE=r(Ba);_A=n(sE,"Of course, you don\u2019t have to use class:"),f1=l(sE,"EM",{});var bB=r(f1);vA=n(bB,"~transformers.Trainer"),bB.forEach(t),jA=n(sE,` and you can adjust the examples above to your own
trainer.`),sE.forEach(t),mb=c(e),Wa=l(e,"P",{});var tE=r(Wa);gA=n(tE,"If for some reason you want more refinement, you can also extract the fp32 "),d1=l(tE,"CODE",{});var qB=r(d1);yA=n(qB,"state_dict"),qB.forEach(t),wA=n(tE,` of the weights and apply
these yourself as is shown in the following example:`),tE.forEach(t),_b=c(e),d(nr.$$.fragment,e),vb=c(e),Gu=l(e,"P",{});var EB=r(Gu);m1=l(EB,"STRONG",{});var $B=r(m1);bA=n($B,"Offline FP32 Weights Recovery:"),$B.forEach(t),EB.forEach(t),jb=c(e),as=l(e,"P",{});var yh=r(as);qA=n(yh,"DeepSpeed creates a special conversion script "),_1=l(yh,"CODE",{});var kB=r(_1);EA=n(kB,"zero_to_fp32.py"),kB.forEach(t),$A=n(yh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),v1=l(yh,"CODE",{});var PB=r(v1);kA=n(PB,"Trainer"),PB.forEach(t),PA=n(yh," to do the extraction."),yh.forEach(t),gb=c(e),Lu=l(e,"P",{});var zB=r(Lu);zA=n(zB,"Let\u2019s say your checkpoint folder looks like this:"),zB.forEach(t),yb=c(e),d(or.$$.fragment,e),wb=c(e),Fa=l(e,"P",{});var aE=r(Fa);DA=n(aE,"In this example there is just one DeepSpeed checkpoint sub-folder "),j1=l(aE,"EM",{});var DB=r(j1);OA=n(DB,"global_step1"),DB.forEach(t),TA=n(aE,`. Therefore to reconstruct the fp32
weights just run:`),aE.forEach(t),bb=c(e),d(lr.$$.fragment,e),qb=c(e),Va=l(e,"P",{});var nE=r(Va);AA=n(nE,"This is it. "),g1=l(nE,"CODE",{});var OB=r(g1);SA=n(OB,"pytorch_model.bin"),OB.forEach(t),CA=n(nE," will now contain the full fp32 model weights consolidated from multiple GPUs."),nE.forEach(t),Eb=c(e),Mu=l(e,"P",{});var TB=r(Mu);xA=n(TB,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),TB.forEach(t),$b=c(e),rr=l(e,"P",{});var FI=r(rr);y1=l(FI,"CODE",{});var AB=r(y1);RA=n(AB,"python zero_to_fp32.py -h"),AB.forEach(t),IA=n(FI," will give you usage details."),FI.forEach(t),kb=c(e),ns=l(e,"P",{});var wh=r(ns);UA=n(wh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),w1=l(wh,"CODE",{});var SB=r(w1);GA=n(SB,"latest"),SB.forEach(t),LA=n(wh,`, which in the current
example will contain `),b1=l(wh,"CODE",{});var CB=r(b1);MA=n(CB,"global_step1"),CB.forEach(t),ZA=n(wh,"."),wh.forEach(t),Pb=c(e),Zu=l(e,"P",{});var xB=r(Zu);NA=n(xB,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),xB.forEach(t),zb=c(e),Ws=l(e,"H3",{class:!0});var oE=r(Ws);Ya=l(oE,"A",{id:!0,class:!0,href:!0});var RB=r(Ya);q1=l(RB,"SPAN",{});var IB=r(q1);d(pr.$$.fragment,IB),IB.forEach(t),RB.forEach(t),HA=c(oE),E1=l(oE,"SPAN",{});var UB=r(E1);BA=n(UB,"ZeRO-3 and Infinity Nuances"),UB.forEach(t),oE.forEach(t),Db=c(e),Nu=l(e,"P",{});var GB=r(Nu);WA=n(GB,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),GB.forEach(t),Ob=c(e),Hu=l(e,"P",{});var LB=r(Hu);FA=n(LB,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),LB.forEach(t),Tb=c(e),Bu=l(e,"P",{});var MB=r(Bu);VA=n(MB,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),MB.forEach(t),Ab=c(e),Fs=l(e,"H4",{class:!0});var lE=r(Fs);Ka=l(lE,"A",{id:!0,class:!0,href:!0});var ZB=r(Ka);$1=l(ZB,"SPAN",{});var NB=r($1);d(ir.$$.fragment,NB),NB.forEach(t),ZB.forEach(t),YA=c(lE),k1=l(lE,"SPAN",{});var HB=r(k1);KA=n(HB,"Constructing Massive Models"),HB.forEach(t),lE.forEach(t),Sb=c(e),Ja=l(e,"P",{});var rE=r(Ja);JA=n(rE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),P1=l(rE,"EM",{});var BB=r(P1);XA=n(BB,"deepspeed.zero.Init()"),BB.forEach(t),QA=n(rE,`
context manager (which is also a function decorator), like so:`),rE.forEach(t),Cb=c(e),d(ur.$$.fragment,e),xb=c(e),Wu=l(e,"P",{});var WB=r(Wu);eS=n(WB,"As you can see this gives you a randomly initialized model."),WB.forEach(t),Rb=c(e),k=l(e,"P",{});var U=r(k);sS=n(U,"If you want to use a pretrained model, "),z1=l(U,"CODE",{});var FB=r(z1);tS=n(FB,"model_class.from_pretrained"),FB.forEach(t),aS=n(U,` will activate this feature as long as
`),D1=l(U,"CODE",{});var VB=r(D1);nS=n(VB,"is_deepspeed_zero3_enabled()"),VB.forEach(t),oS=n(U," returns "),O1=l(U,"CODE",{});var YB=r(O1);lS=n(YB,"True"),YB.forEach(t),rS=n(U,`, which currently is setup by the
`),Fu=l(U,"A",{href:!0});var KB=r(Fu);pS=n(KB,"TrainingArguments"),KB.forEach(t),iS=n(U,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),Vu=l(U,"A",{href:!0});var JB=r(Vu);uS=n(JB,"TrainingArguments"),JB.forEach(t),cS=n(U," object "),T1=l(U,"STRONG",{});var XB=r(T1);hS=n(XB,"before"),XB.forEach(t),fS=n(U,` calling
`),A1=l(U,"CODE",{});var QB=r(A1);dS=n(QB,"from_pretrained"),QB.forEach(t),mS=n(U,". Here is an example of a possible sequence:"),U.forEach(t),Ib=c(e),d(cr.$$.fragment,e),Ub=c(e),Xa=l(e,"P",{});var pE=r(Xa);_S=n(pE,"If you\u2019re using the official example scripts and your command line arguments include "),S1=l(pE,"CODE",{});var eW=r(S1);vS=n(eW,"--deepspeed ds_config.json"),eW.forEach(t),jS=n(pE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),pE.forEach(t),Gb=c(e),Yu=l(e,"P",{});var sW=r(Yu);gS=n(sW,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),sW.forEach(t),Lb=c(e),Qa=l(e,"P",{});var iE=r(Qa);yS=n(iE,"For full details on this method and other related features please refer to "),hr=l(iE,"A",{href:!0,rel:!0});var tW=r(hr);wS=n(tW,"Constructing Massive Models"),tW.forEach(t),bS=n(iE,"."),iE.forEach(t),Mb=c(e),oe=l(e,"P",{});var Rn=r(oe);qS=n(Rn,"Also when loading fp16-pretrained models, you will want to tell "),C1=l(Rn,"CODE",{});var aW=r(C1);ES=n(aW,"from_pretrained"),aW.forEach(t),$S=n(Rn,` to use
`),x1=l(Rn,"CODE",{});var nW=r(x1);kS=n(nW,"torch_dtype=torch.float16"),nW.forEach(t),PS=n(Rn,". For details, please, see "),Ku=l(Rn,"A",{href:!0});var oW=r(Ku);zS=n(oW,"from_pretrained-torch-dtype"),oW.forEach(t),DS=n(Rn,"."),Rn.forEach(t),Zb=c(e),Vs=l(e,"H4",{class:!0});var uE=r(Vs);en=l(uE,"A",{id:!0,class:!0,href:!0});var lW=r(en);R1=l(lW,"SPAN",{});var rW=r(R1);d(fr.$$.fragment,rW),rW.forEach(t),lW.forEach(t),OS=c(uE),I1=l(uE,"SPAN",{});var pW=r(I1);TS=n(pW,"Gathering Parameters"),pW.forEach(t),uE.forEach(t),Nb=c(e),dr=l(e,"P",{});var VI=r(dr);AS=n(VI,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),mr=l(VI,"A",{href:!0,rel:!0});var iW=r(mr);SS=n(iW,"Gathering Parameters"),iW.forEach(t),VI.forEach(t),Hb=c(e),sn=l(e,"P",{});var cE=r(sn);CS=n(cE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),U1=l(cE,"CODE",{});var uW=r(U1);xS=n(uW,"from_pretrained"),uW.forEach(t),RS=n(cE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),cE.forEach(t),Bb=c(e),Ju=l(e,"P",{});var cW=r(Ju);IS=n(cW,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),cW.forEach(t),Wb=c(e),d(_r.$$.fragment,e),Fb=c(e),os=l(e,"P",{});var bh=r(os);US=n(bh,"stress on "),G1=l(bh,"CODE",{});var hW=r(G1);GS=n(hW,"tensor([1.])"),hW.forEach(t),LS=n(bh,", or if you get an error where it says the parameter is of size "),L1=l(bh,"CODE",{});var fW=r(L1);MS=n(fW,"1"),fW.forEach(t),ZS=n(bh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),bh.forEach(t),Vb=c(e),Xu=l(e,"A",{id:!0}),r(Xu).forEach(t),Yb=c(e),Ys=l(e,"H3",{class:!0});var hE=r(Ys);tn=l(hE,"A",{id:!0,class:!0,href:!0});var dW=r(tn);M1=l(dW,"SPAN",{});var mW=r(M1);d(vr.$$.fragment,mW),mW.forEach(t),dW.forEach(t),NS=c(hE),Z1=l(hE,"SPAN",{});var _W=r(Z1);HS=n(_W,"ZeRO Inference"),_W.forEach(t),hE.forEach(t),Kb=c(e),Qu=l(e,"P",{});var vW=r(Qu);BS=n(vW,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),vW.forEach(t),Jb=c(e),an=l(e,"P",{});var fE=r(an);WS=n(fE,"Otherwise you just need to pass the usual "),ec=l(fE,"A",{href:!0});var jW=r(ec);FS=n(jW,"TrainingArguments"),jW.forEach(t),VS=n(fE," arguments. For example:"),fE.forEach(t),Xb=c(e),d(jr.$$.fragment,e),Qb=c(e),sc=l(e,"P",{});var gW=r(sc);YS=n(gW,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),gW.forEach(t),e3=c(e),nn=l(e,"P",{});var dE=r(nn);KS=n(dE,"Here is an example of running "),N1=l(dE,"CODE",{});var yW=r(N1);JS=n(yW,"run_translation.py"),yW.forEach(t),XS=n(dE," under DeepSpeed deploying all available GPUs:"),dE.forEach(t),s3=c(e),d(gr.$$.fragment,e),t3=c(e),tc=l(e,"P",{});var wW=r(tc);QS=n(wW,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),wW.forEach(t),a3=c(e),ac=l(e,"P",{});var bW=r(ac);eC=n(bW,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),bW.forEach(t),n3=c(e),Ks=l(e,"H3",{class:!0});var mE=r(Ks);on=l(mE,"A",{id:!0,class:!0,href:!0});var qW=r(on);H1=l(qW,"SPAN",{});var EW=r(H1);d(yr.$$.fragment,EW),EW.forEach(t),qW.forEach(t),sC=c(mE),B1=l(mE,"SPAN",{});var $W=r(B1);tC=n($W,"Memory Requirements"),$W.forEach(t),mE.forEach(t),o3=c(e),nc=l(e,"P",{});var kW=r(nc);aC=n(kW,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),kW.forEach(t),l3=c(e),oc=l(e,"P",{});var PW=r(oc);nC=n(PW,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),PW.forEach(t),r3=c(e),d(wr.$$.fragment,e),p3=c(e),lc=l(e,"P",{});var zW=r(lc);oC=n(zW,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),zW.forEach(t),i3=c(e),rc=l(e,"P",{});var DW=r(rc);lC=n(DW,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),DW.forEach(t),u3=c(e),pc=l(e,"P",{});var OW=r(pc);rC=n(OW,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),OW.forEach(t),c3=c(e),ic=l(e,"P",{});var TW=r(ic);pC=n(TW,"For example, let\u2019s repeat the same for 2 GPUs:"),TW.forEach(t),h3=c(e),d(br.$$.fragment,e),f3=c(e),uc=l(e,"P",{});var AW=r(uc);iC=n(AW,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),AW.forEach(t),d3=c(e),ln=l(e,"P",{});var _E=r(ln);uC=n(_E,"For full information please see "),qr=l(_E,"A",{href:!0,rel:!0});var SW=r(qr);cC=n(SW,"memory estimators"),SW.forEach(t),hC=n(_E,"."),_E.forEach(t),m3=c(e),Js=l(e,"H3",{class:!0});var vE=r(Js);rn=l(vE,"A",{id:!0,class:!0,href:!0});var CW=r(rn);W1=l(CW,"SPAN",{});var xW=r(W1);d(Er.$$.fragment,xW),xW.forEach(t),CW.forEach(t),fC=c(vE),F1=l(vE,"SPAN",{});var RW=r(F1);dC=n(RW,"Filing Issues"),RW.forEach(t),vE.forEach(t),_3=c(e),cc=l(e,"P",{});var IW=r(cc);mC=n(IW,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),IW.forEach(t),v3=c(e),hc=l(e,"P",{});var UW=r(hc);_C=n(UW,"In your report please always include:"),UW.forEach(t),j3=c(e),R=l(e,"OL",{});var ve=r(R);V1=l(ve,"LI",{});var GW=r(V1);Y1=l(GW,"P",{});var LW=r(Y1);vC=n(LW,"the full Deepspeed config file in the report"),LW.forEach(t),GW.forEach(t),jC=c(ve),K1=l(ve,"LI",{});var MW=r(K1);qe=l(MW,"P",{});var In=r(qe);gC=n(In,"either the command line arguments if you were using the "),fc=l(In,"A",{href:!0});var ZW=r(fc);yC=n(ZW,"Trainer"),ZW.forEach(t),wC=n(In,` or
`),dc=l(In,"A",{href:!0});var NW=r(dc);bC=n(NW,"TrainingArguments"),NW.forEach(t),qC=n(In,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),mc=l(In,"A",{href:!0});var HW=r(mc);EC=n(HW,"TrainingArguments"),HW.forEach(t),$C=n(In," as it has dozens of entries that are irrelevant."),In.forEach(t),MW.forEach(t),kC=c(ve),$r=l(ve,"LI",{});var jE=r($r);J1=l(jE,"P",{});var BW=r(J1);PC=n(BW,"Output of:"),BW.forEach(t),zC=c(jE),d(kr.$$.fragment,jE),jE.forEach(t),DC=c(ve),X1=l(ve,"LI",{});var WW=r(X1);Pr=l(WW,"P",{});var gE=r(Pr);OC=n(gE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),zr=l(gE,"A",{href:!0,rel:!0});var FW=r(zr);TC=n(FW,"notebook"),FW.forEach(t),AC=n(gE,` as
a starting point.`),gE.forEach(t),WW.forEach(t),SC=c(ve),Q1=l(ve,"LI",{});var VW=r(Q1);ev=l(VW,"P",{});var YW=r(ev);CC=n(YW,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),YW.forEach(t),VW.forEach(t),xC=c(ve),sv=l(ve,"LI",{});var KW=r(sv);Dr=l(KW,"P",{});var yE=r(Dr);RC=n(yE,"If possible try to use one of the existing "),Or=l(yE,"A",{href:!0,rel:!0});var JW=r(Or);IC=n(JW,"examples"),JW.forEach(t),UC=n(yE," to reproduce the problem with."),yE.forEach(t),KW.forEach(t),ve.forEach(t),g3=c(e),_c=l(e,"P",{});var XW=r(_c);GC=n(XW,"Things to consider:"),XW.forEach(t),y3=c(e),pn=l(e,"UL",{});var wE=r(pn);Xs=l(wE,"LI",{});var qh=r(Xs);tv=l(qh,"P",{});var QW=r(tv);LC=n(QW,"Deepspeed is often not the cause of the problem."),QW.forEach(t),MC=c(qh),av=l(qh,"P",{});var eF=r(av);ZC=n(eF,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),eF.forEach(t),NC=c(qh),nv=l(qh,"P",{});var sF=r(nv);HC=n(sF,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),sF.forEach(t),qh.forEach(t),BC=c(wE),ov=l(wE,"LI",{});var tF=r(ov);Tr=l(tF,"P",{});var bE=r(Tr);WC=n(bE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Ar=l(bE,"A",{href:!0,rel:!0});var aF=r(Ar);FC=n(aF,"Deepspeed"),aF.forEach(t),VC=n(bE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),bE.forEach(t),tF.forEach(t),wE.forEach(t),w3=c(e),Qs=l(e,"H3",{class:!0});var qE=r(Qs);un=l(qE,"A",{id:!0,class:!0,href:!0});var nF=r(un);lv=l(nF,"SPAN",{});var oF=r(lv);d(Sr.$$.fragment,oF),oF.forEach(t),nF.forEach(t),YC=c(qE),rv=l(qE,"SPAN",{});var lF=r(rv);KC=n(lF,"Troubleshooting"),lF.forEach(t),qE.forEach(t),b3=c(e),et=l(e,"H4",{class:!0});var EE=r(et);cn=l(EE,"A",{id:!0,class:!0,href:!0});var rF=r(cn);pv=l(rF,"SPAN",{});var pF=r(pv);d(Cr.$$.fragment,pF),pF.forEach(t),rF.forEach(t),JC=c(EE),xr=l(EE,"SPAN",{});var $E=r(xr);XC=n($E,"the "),iv=l($E,"CODE",{});var iF=r(iv);QC=n(iF,"deepspeed"),iF.forEach(t),ex=n($E," process gets killed at startup without a traceback"),$E.forEach(t),EE.forEach(t),q3=c(e),I=l(e,"P",{});var je=r(I);sx=n(je,"If the "),uv=l(je,"CODE",{});var uF=r(uv);tx=n(uF,"deepspeed"),uF.forEach(t),ax=n(je,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),cv=l(je,"CODE",{});var cF=r(cv);nx=n(cF,"offload_optimizer"),cF.forEach(t),ox=n(je," or "),hv=l(je,"CODE",{});var hF=r(hv);lx=n(hF,"offload_param"),hF.forEach(t),rx=n(je,` or
both configured to offload to `),fv=l(je,"CODE",{});var fF=r(fv);px=n(fF,"cpu"),fF.forEach(t),ix=n(je,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Rr=l(je,"A",{href:!0,rel:!0});var dF=r(Rr);ux=n(dF,"estimate how much memory is needed for a specific model"),dF.forEach(t),cx=n(je,"."),je.forEach(t),E3=c(e),st=l(e,"H4",{class:!0});var kE=r(st);hn=l(kE,"A",{id:!0,class:!0,href:!0});var mF=r(hn);dv=l(mF,"SPAN",{});var _F=r(dv);d(Ir.$$.fragment,_F),_F.forEach(t),mF.forEach(t),hx=c(kE),vc=l(kE,"SPAN",{});var YI=r(vc);fx=n(YI,"training and/or eval/predict loss is "),mv=l(YI,"CODE",{});var vF=r(mv);dx=n(vF,"NaN"),vF.forEach(t),YI.forEach(t),kE.forEach(t),$3=c(e),jc=l(e,"P",{});var jF=r(jc);mx=n(jF,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),jF.forEach(t),k3=c(e),gc=l(e,"P",{});var gF=r(gc);_x=n(gF,"The other problem may have to do with using fp16. When you configure this section:"),gF.forEach(t),P3=c(e),d(Ur.$$.fragment,e),z3=c(e),fn=l(e,"P",{});var PE=r(fn);vx=n(PE,"and you see in your log that Deepspeed reports "),_v=l(PE,"CODE",{});var yF=r(_v);jx=n(yF,"OVERFLOW!"),yF.forEach(t),gx=n(PE," as follows:"),PE.forEach(t),D3=c(e),d(Gr.$$.fragment,e),O3=c(e),yc=l(e,"P",{});var wF=r(yc);yx=n(wF,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),wF.forEach(t),T3=c(e),wc=l(e,"P",{});var bF=r(wc);wx=n(bF,"(the log was massaged to be more readable here.)"),bF.forEach(t),A3=c(e),ls=l(e,"P",{});var Eh=r(ls);bx=n(Eh,"In this case you usually need to raise the value of "),vv=l(Eh,"CODE",{});var qF=r(vv);qx=n(qF,"initial_scale_power"),qF.forEach(t),Ex=n(Eh,". Setting it to "),jv=l(Eh,"CODE",{});var EF=r(jv);$x=n(EF,'"initial_scale_power": 32'),EF.forEach(t),kx=n(Eh," will typically resolve the problem."),Eh.forEach(t),S3=c(e),tt=l(e,"H3",{class:!0});var zE=r(tt);dn=l(zE,"A",{id:!0,class:!0,href:!0});var $F=r(dn);gv=l($F,"SPAN",{});var kF=r(gv);d(Lr.$$.fragment,kF),kF.forEach(t),$F.forEach(t),Px=c(zE),yv=l(zE,"SPAN",{});var PF=r(yv);zx=n(PF,"Notes"),PF.forEach(t),zE.forEach(t),C3=c(e),rs=l(e,"UL",{});var $h=r(rs);mn=l($h,"LI",{});var lj=r(mn);Dx=n(lj,"DeepSpeed works with the PyTorch "),bc=l(lj,"A",{href:!0});var zF=r(bc);Ox=n(zF,"Trainer"),zF.forEach(t),Tx=n(lj," but not TF "),wv=l(lj,"CODE",{});var DF=r(wv);Ax=n(DF,"TFTrainer"),DF.forEach(t),lj.forEach(t),Sx=c($h),Mr=l($h,"LI",{});var DE=r(Mr);Cx=n(DE,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Zr=l(DE,"A",{href:!0,rel:!0});var OF=r(Zr);xx=n(OF,"source"),OF.forEach(t),Rx=n(DE,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),DE.forEach(t),Ix=c($h),at=l($h,"LI",{});var kh=r(at);Ux=n(kh,"You don\u2019t have to use the "),qc=l(kh,"A",{href:!0});var TF=r(qc);Gx=n(TF,"Trainer"),TF.forEach(t),Lx=n(kh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),Nr=l(kh,"A",{href:!0,rel:!0});var AF=r(Nr);Mx=n(AF,"the DeepSpeed integration instructions"),AF.forEach(t),Zx=n(kh,"."),kh.forEach(t),$h.forEach(t),x3=c(e),Ec=l(e,"A",{id:!0}),r(Ec).forEach(t),R3=c(e),nt=l(e,"H2",{class:!0});var OE=r(nt);_n=l(OE,"A",{id:!0,class:!0,href:!0});var SF=r(_n);bv=l(SF,"SPAN",{});var CF=r(bv);d(Hr.$$.fragment,CF),CF.forEach(t),SF.forEach(t),Nx=c(OE),qv=l(OE,"SPAN",{});var xF=r(qv);Hx=n(xF,"Non-Trainer Deepspeed Integration"),xF.forEach(t),OE.forEach(t),I3=c(e),le=l(e,"P",{});var Un=r(le);Bx=n(Un,"The "),$c=l(Un,"A",{href:!0});var RF=r($c);Wx=n(RF,"HfDeepSpeedConfig"),RF.forEach(t),Fx=n(Un,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),kc=l(Un,"A",{href:!0});var IF=r(kc);Vx=n(IF,"Trainer"),IF.forEach(t),Yx=n(Un," is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),Ev=l(Un,"CODE",{});var UF=r(Ev);Kx=n(UF,"from_pretrained"),UF.forEach(t),Jx=n(Un," call. Everything else you have to do by yourself."),Un.forEach(t),U3=c(e),vn=l(e,"P",{});var TE=r(vn);Xx=n(TE,"When using "),Pc=l(TE,"A",{href:!0});var GF=r(Pc);Qx=n(GF,"Trainer"),GF.forEach(t),eR=n(TE," everything is automatically taken care of."),TE.forEach(t),G3=c(e),ps=l(e,"P",{});var Ph=r(ps);sR=n(Ph,"When not using "),zc=l(Ph,"A",{href:!0});var LF=r(zc);tR=n(LF,"Trainer"),LF.forEach(t),aR=n(Ph,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Dc=l(Ph,"A",{href:!0});var MF=r(Dc);nR=n(MF,"HfDeepSpeedConfig"),MF.forEach(t),oR=n(Ph," object before instantiating the model."),Ph.forEach(t),L3=c(e),Oc=l(e,"P",{});var ZF=r(Oc);lR=n(ZF,"For example for a pretrained model:"),ZF.forEach(t),M3=c(e),d(Br.$$.fragment,e),Z3=c(e),Tc=l(e,"P",{});var NF=r(Tc);rR=n(NF,"or for non-pretrained model:"),NF.forEach(t),N3=c(e),d(Wr.$$.fragment,e),H3=c(e),re=l(e,"P",{});var Gn=r(re);pR=n(Gn,"Please note that if you\u2019re not using the "),Ac=l(Gn,"A",{href:!0});var HF=r(Ac);iR=n(HF,"Trainer"),HF.forEach(t),uR=n(Gn," integration, you\u2019re completely on your own. Basically follow the documentation on the "),Fr=l(Gn,"A",{href:!0,rel:!0});var BF=r(Fr);cR=n(BF,"Deepspeed"),BF.forEach(t),hR=n(Gn," website. Also you have to configure explicitly the config file - you can\u2019t use "),$v=l(Gn,"CODE",{});var WF=r($v);fR=n(WF,'"auto"'),WF.forEach(t),dR=n(Gn," values and you will have to put real values instead."),Gn.forEach(t),B3=c(e),ot=l(e,"H2",{class:!0});var AE=r(ot);jn=l(AE,"A",{id:!0,class:!0,href:!0});var FF=r(jn);kv=l(FF,"SPAN",{});var VF=r(kv);d(Vr.$$.fragment,VF),VF.forEach(t),FF.forEach(t),mR=c(AE),Pv=l(AE,"SPAN",{});var YF=r(Pv);_R=n(YF,"HfDeepSpeedConfig"),YF.forEach(t),AE.forEach(t),W3=c(e),E=l(e,"DIV",{class:!0});var G=r(E);d(Yr.$$.fragment,G),vR=c(G),zv=l(G,"P",{});var KF=r(zv);jR=n(KF,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),KF.forEach(t),gR=c(G),Ee=l(G,"P",{});var Ln=r(Ee);yR=n(Ln,"A "),Dv=l(Ln,"CODE",{});var JF=r(Dv);wR=n(JF,"weakref"),JF.forEach(t),bR=n(Ln,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),Ov=l(Ln,"CODE",{});var XF=r(Ov);qR=n(XF,"from_pretrained"),XF.forEach(t),ER=n(Ln," and "),Tv=l(Ln,"CODE",{});var QF=r(Tv);$R=n(QF,"_get_resized_embeddings"),QF.forEach(t),kR=n(Ln,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),Ln.forEach(t),PR=c(G),pe=l(G,"P",{});var ct=r(pe);Sc=l(ct,"A",{href:!0});var eV=r(Sc);zR=n(eV,"Trainer"),eV.forEach(t),DR=n(ct," uses the "),Av=l(ct,"CODE",{});var sV=r(Av);OR=n(sV,"HfTrainerDeepSpeedConfig"),sV.forEach(t),TR=n(ct,` subclass instead. That subclass has logic to sync the configuration
with values of `),Cc=l(ct,"A",{href:!0});var tV=r(Cc);AR=n(tV,"TrainingArguments"),tV.forEach(t),SR=n(ct," by replacing special placeholder values: "),Sv=l(ct,"CODE",{});var aV=r(Sv);CR=n(aV,'"auto"'),aV.forEach(t),xR=n(ct,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),ct.forEach(t),RR=c(G),is=l(G,"DIV",{class:!0});var zh=r(is);d(Kr.$$.fragment,zh),IR=c(zh),Cv=l(zh,"P",{});var nV=r(Cv);UR=n(nV,"Deletes a sub-section of the config file if it\u2019s found."),nV.forEach(t),GR=c(zh),lt=l(zh,"P",{});var Dh=r(lt);LR=n(Dh,"Unless "),xv=l(Dh,"CODE",{});var oV=r(xv);MR=n(oV,"must_exist"),oV.forEach(t),ZR=n(Dh," is "),Rv=l(Dh,"CODE",{});var lV=r(Rv);NR=n(lV,"True"),lV.forEach(t),HR=n(Dh," the section doesn\u2019t have to exist."),Dh.forEach(t),zh.forEach(t),BR=c(G),gn=l(G,"DIV",{class:!0});var SE=r(gn);d(Jr.$$.fragment,SE),WR=c(SE),Xr=l(SE,"P",{});var CE=r(Xr);FR=n(CE,"Returns the set value or "),Iv=l(CE,"CODE",{});var rV=r(Iv);VR=n(rV,"default"),rV.forEach(t),YR=n(CE," if no value is set"),CE.forEach(t),SE.forEach(t),KR=c(G),yn=l(G,"DIV",{class:!0});var xE=r(yn);d(Qr.$$.fragment,xE),JR=c(xE),rt=l(xE,"P",{});var Oh=r(rt);XR=n(Oh,"Returns "),Uv=l(Oh,"CODE",{});var pV=r(Uv);QR=n(pV,"True"),pV.forEach(t),eI=n(Oh,"/"),Gv=l(Oh,"CODE",{});var iV=r(Gv);sI=n(iV,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),iV.forEach(t),tI=n(Oh," or isn\u2019t set)."),Oh.forEach(t),xE.forEach(t),aI=c(G),wn=l(G,"DIV",{class:!0});var RE=r(wn);d(ep.$$.fragment,RE),nI=c(RE),pt=l(RE,"P",{});var Th=r(pt);oI=n(Th,"Returns "),Lv=l(Th,"CODE",{});var uV=r(Lv);lI=n(uV,"True"),uV.forEach(t),rI=n(Th,"/"),Mv=l(Th,"CODE",{});var cV=r(Mv);pI=n(cV,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),cV.forEach(t),iI=n(Th," or isn\u2019t set)."),Th.forEach(t),RE.forEach(t),G.forEach(t),F3=c(e),it=l(e,"H3",{class:!0});var IE=r(it);bn=l(IE,"A",{id:!0,class:!0,href:!0});var hV=r(bn);Zv=l(hV,"SPAN",{});var fV=r(Zv);d(sp.$$.fragment,fV),fV.forEach(t),hV.forEach(t),uI=c(IE),Nv=l(IE,"SPAN",{});var dV=r(Nv);cI=n(dV,"Custom DeepSpeed ZeRO Inference"),dV.forEach(t),IE.forEach(t),V3=c(e),qn=l(e,"P",{});var UE=r(qn);hI=n(UE,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),xc=l(UE,"A",{href:!0});var mV=r(xc);fI=n(mV,"Trainer"),mV.forEach(t),dI=n(UE," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),UE.forEach(t),Y3=c(e),Rc=l(e,"P",{});var _V=r(Rc);mI=n(_V,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),_V.forEach(t),K3=c(e),Ic=l(e,"P",{});var vV=r(Ic);_I=n(vV,"The example has copious notes and is self-documenting."),vV.forEach(t),J3=c(e),Uc=l(e,"P",{});var jV=r(Uc);vI=n(jV,"Make sure to:"),jV.forEach(t),X3=c(e),En=l(e,"OL",{});var GE=r(En);Hv=l(GE,"LI",{});var gV=r(Hv);jI=n(gV,"disable CPU offload if you have enough GPU memory (since it slows things down)"),gV.forEach(t),gI=c(GE),Bv=l(GE,"LI",{});var yV=r(Bv);yI=n(yV,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),yV.forEach(t),GE.forEach(t),Q3=c(e),d(tp.$$.fragment,e),e0=c(e),$n=l(e,"P",{});var LE=r($n);wI=n(LE,"Let\u2019s save it as "),Wv=l(LE,"CODE",{});var wV=r(Wv);bI=n(wV,"t0.py"),wV.forEach(t),qI=n(LE," and run it:"),LE.forEach(t),s0=c(e),d(ap.$$.fragment,e),t0=c(e),Gc=l(e,"P",{});var bV=r(Gc);EI=n(bV,"This was a very basic example and you will want to adapt it to your needs."),bV.forEach(t),a0=c(e),ut=l(e,"H2",{class:!0});var ME=r(ut);kn=l(ME,"A",{id:!0,class:!0,href:!0});var qV=r(kn);Fv=l(qV,"SPAN",{});var EV=r(Fv);d(np.$$.fragment,EV),EV.forEach(t),qV.forEach(t),$I=c(ME),Vv=l(ME,"SPAN",{});var $V=r(Vv);kI=n($V,"Main DeepSpeed Resources"),$V.forEach(t),ME.forEach(t),n0=c(e),ie=l(e,"UL",{});var Mn=r(ie);Yv=l(Mn,"LI",{});var kV=r(Yv);op=l(kV,"A",{href:!0,rel:!0});var PV=r(op);PI=n(PV,"Project\u2019s github"),PV.forEach(t),kV.forEach(t),zI=c(Mn),Kv=l(Mn,"LI",{});var zV=r(Kv);lp=l(zV,"A",{href:!0,rel:!0});var DV=r(lp);DI=n(DV,"Usage docs"),DV.forEach(t),zV.forEach(t),OI=c(Mn),Jv=l(Mn,"LI",{});var OV=r(Jv);rp=l(OV,"A",{href:!0,rel:!0});var TV=r(rp);TI=n(TV,"API docs"),TV.forEach(t),OV.forEach(t),AI=c(Mn),Xv=l(Mn,"LI",{});var AV=r(Xv);pp=l(AV,"A",{href:!0,rel:!0});var SV=r(pp);SI=n(SV,"Blog posts"),SV.forEach(t),AV.forEach(t),Mn.forEach(t),o0=c(e),Lc=l(e,"P",{});var CV=r(Lc);CI=n(CV,"Papers:"),CV.forEach(t),l0=c(e),us=l(e,"UL",{});var Ah=r(us);Qv=l(Ah,"LI",{});var xV=r(Qv);ip=l(xV,"A",{href:!0,rel:!0});var RV=r(ip);xI=n(RV,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),RV.forEach(t),xV.forEach(t),RI=c(Ah),ej=l(Ah,"LI",{});var IV=r(ej);up=l(IV,"A",{href:!0,rel:!0});var UV=r(up);II=n(UV,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),UV.forEach(t),IV.forEach(t),UI=c(Ah),sj=l(Ah,"LI",{});var GV=r(sj);cp=l(GV,"A",{href:!0,rel:!0});var LV=r(cp);GI=n(LV,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),LV.forEach(t),GV.forEach(t),Ah.forEach(t),r0=c(e),cs=l(e,"P",{});var Sh=r(cs);LI=n(Sh,"Finally, please, remember that, HuggingFace "),Mc=l(Sh,"A",{href:!0});var MV=r(Mc);MI=n(MV,"Trainer"),MV.forEach(t),ZI=n(Sh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),hp=l(Sh,"A",{href:!0,rel:!0});var ZV=r(hp);NI=n(ZV,"DeepSpeed GitHub"),ZV.forEach(t),HI=n(Sh,"."),Sh.forEach(t),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(JV)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(Y,"href","https://github.com/microsoft/DeepSpeed"),h(Y,"rel","nofollow"),h($e,"href","https://arxiv.org/abs/1910.02054"),h($e,"rel","nofollow"),h(Hn,"href","https://arxiv.org/abs/2101.06840"),h(Hn,"rel","nofollow"),h(Bn,"href","https://arxiv.org/abs/2104.07857"),h(Bn,"rel","nofollow"),h(Wn,"href","https://github.com/microsoft/DeepSpeed"),h(Wn,"rel","nofollow"),h(Ep,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h($p,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(kp,"href","#deepspeed-non-trainer-integration"),h(Ap,"href","#deepspeed-zero-inference"),h(Cp,"id","deepspeed-trainer-integration"),h(mt,"id","trainer-deepspeed-integration"),h(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mt,"href","#trainer-deepspeed-integration"),h(js,"class","relative group"),h(xp,"id","deepspeed-installation"),h(_t,"id","installation"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#installation"),h(gs,"class","relative group"),h(Qn,"href","https://github.com/microsoft/deepspeed#installation"),h(Qn,"rel","nofollow"),h(eo,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(eo,"rel","nofollow"),h(Ip,"href","#zero-install-notes"),h(no,"href","https://developer.nvidia.com/cuda-gpus"),h(no,"rel","nofollow"),h(po,"href","https://github.com/microsoft/DeepSpeed/issues"),h(po,"rel","nofollow"),h(Hp,"id","deepspeed-multi-gpu"),h(qt,"id","deployment-with-multiple-gpus"),h(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qt,"href","#deployment-with-multiple-gpus"),h(ys,"class","relative group"),h(Bp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(uo,"href","https://www.deepspeed.ai/docs/config-json/"),h(uo,"rel","nofollow"),h(fo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(fo,"rel","nofollow"),h(_o,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(_o,"rel","nofollow"),h(Vp,"id","deepspeed-one-gpu"),h(Dt,"id","deployment-with-one-gpu"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-with-one-gpu"),h(bs,"class","relative group"),h(Yp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(go,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(go,"rel","nofollow"),h(wo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(wo,"rel","nofollow"),h(ti,"id","deepspeed-notebook"),h(St,"id","deployment-in-notebooks"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#deployment-in-notebooks"),h(Es,"class","relative group"),h(ri,"id","deepspeed-config"),h(Ut,"id","configuration"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#configuration"),h($s,"class","relative group"),h(Oo,"href","https://www.deepspeed.ai/docs/config-json/"),h(Oo,"rel","nofollow"),h(To,"href","https://github.com/microsoft/DeepSpeedExamples"),h(To,"rel","nofollow"),h(Co,"href","https://github.com/microsoft/DeepSpeed"),h(Co,"rel","nofollow"),h(ii,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ui,"id","deepspeed-config-passing"),h(Ht,"id","passing-configuration"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#passing-configuration"),h(ks,"class","relative group"),h(ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(hi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(fi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(_i,"id","deepspeed-config-shared"),h(Bt,"id","shared-configuration"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#shared-configuration"),h(Ps,"class","relative group"),h(vi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ji,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(gi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(yi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(bi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(qi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Ei,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h($i,"id","deepspeed-zero"),h(Kt,"id","zero"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#zero"),h(zs,"class","relative group"),h(No,"href","https://www.deepspeed.ai/tutorials/zero/"),h(No,"rel","nofollow"),h(Ho,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Ho,"rel","nofollow"),h(ki,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(zi,"id","deepspeed-zero2-config"),h(Xt,"id","zero2-config"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#zero2-config"),h(Ds,"class","relative group"),h(Ai,"id","deepspeed-zero3-config"),h(Qt,"id","zero3-config"),h(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qt,"href","#zero3-config"),h(Ts,"class","relative group"),h(Ri,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ui,"id","deepspeed-nvme"),h(ta,"id","nvme-support"),h(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ta,"href","#nvme-support"),h(As,"class","relative group"),h(rl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(rl,"rel","nofollow"),h(pl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(pl,"rel","nofollow"),h(il,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(il,"rel","nofollow"),h(Mi,"id","deepspeed-zero2-zero3-performance"),h(oa,"id","zero2-vs-zero3-performance"),h(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oa,"href","#zero2-vs-zero3-performance"),h(Ss,"class","relative group"),h(Hi,"id","deepspeed-zero2-example"),h(ra,"id","zero2-example"),h(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ra,"href","#zero2-example"),h(xs,"class","relative group"),h(Bi,"id","deepspeed-zero3-example"),h(ua,"id","zero3-example"),h(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ua,"href","#zero3-example"),h(Rs,"class","relative group"),h(fa,"id","optimizer-and-scheduler"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#optimizer-and-scheduler"),h(Is,"class","relative group"),h(Fi,"id","deepspeed-optimizer"),h(_a,"id","optimizer"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#optimizer"),h(Us,"class","relative group"),h(yl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(yl,"rel","nofollow"),h(Vi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Xi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(eu,"id","deepspeed-scheduler"),h(ja,"id","scheduler"),h(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ja,"href","#scheduler"),h(Gs,"class","relative group"),h(Dl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(Dl,"rel","nofollow"),h(tu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(au,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ou,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(lu,"id","deepspeed-fp32"),h(Ea,"id","fp32-precision"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#fp32-precision"),h(Ls,"class","relative group"),h(Rl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Rl,"rel","nofollow"),h(pu,"id","deepspeed-amp"),h(Pa,"id","automatic-mixed-precision"),h(Pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pa,"href","#automatic-mixed-precision"),h(Ms,"class","relative group"),h(cu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(fu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ll,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Ll,"rel","nofollow"),h(mu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(vu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Nl,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(Nl,"rel","nofollow"),h(ju,"id","deepspeed-bs"),h(Ca,"id","batch-size"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#batch-size"),h(Zs,"class","relative group"),h(yu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(bu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(qu,"id","deepspeed-grad-acc"),h(Ra,"id","gradient-accumulation"),h(Ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ra,"href","#gradient-accumulation"),h(Ns,"class","relative group"),h($u,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Pu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(zu,"id","deepspeed-grad-clip"),h(Ua,"id","gradient-clipping"),h(Ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ua,"href","#gradient-clipping"),h(Hs,"class","relative group"),h(Ou,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Au,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Su,"id","deepspeed-weight-extraction"),h(La,"id","getting-the-model-weights-out"),h(La,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(La,"href","#getting-the-model-weights-out"),h(Bs,"class","relative group"),h(sr,"href","https://huggingface.co/models"),h(sr,"rel","nofollow"),h(Ya,"id","zero3-and-infinity-nuances"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#zero3-and-infinity-nuances"),h(Ws,"class","relative group"),h(Ka,"id","constructing-massive-models"),h(Ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ka,"href","#constructing-massive-models"),h(Fs,"class","relative group"),h(Fu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Vu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(hr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(hr,"rel","nofollow"),h(Ku,"href","#from_pretrained-torch-dtype"),h(en,"id","gathering-parameters"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#gathering-parameters"),h(Vs,"class","relative group"),h(mr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(mr,"rel","nofollow"),h(Xu,"id","deepspeed-zero-inference"),h(tn,"id","zero-inference"),h(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(tn,"href","#zero-inference"),h(Ys,"class","relative group"),h(ec,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(on,"id","memory-requirements"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#memory-requirements"),h(Ks,"class","relative group"),h(qr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(qr,"rel","nofollow"),h(rn,"id","filing-issues"),h(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(rn,"href","#filing-issues"),h(Js,"class","relative group"),h(fc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(dc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(mc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(zr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(zr,"rel","nofollow"),h(Or,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(Or,"rel","nofollow"),h(Ar,"href","https://github.com/microsoft/DeepSpeed/"),h(Ar,"rel","nofollow"),h(un,"id","troubleshooting"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#troubleshooting"),h(Qs,"class","relative group"),h(cn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(et,"class","relative group"),h(Rr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Rr,"rel","nofollow"),h(hn,"id","training-andor-evalpredict-loss-is-nan"),h(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(hn,"href","#training-andor-evalpredict-loss-is-nan"),h(st,"class","relative group"),h(dn,"id","notes"),h(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(dn,"href","#notes"),h(tt,"class","relative group"),h(bc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Zr,"href","https://github.com/microsoft/deepspeed#installation"),h(Zr,"rel","nofollow"),h(qc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Nr,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(Nr,"rel","nofollow"),h(Ec,"id","deepspeed-non-trainer-integration"),h(_n,"id","nontrainer-deepspeed-integration"),h(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_n,"href","#nontrainer-deepspeed-integration"),h(nt,"class","relative group"),h($c,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(kc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Pc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(zc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Dc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Ac,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Fr,"href","https://www.deepspeed.ai/"),h(Fr,"rel","nofollow"),h(jn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(ot,"class","relative group"),h(Sc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Cc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(is,"class","docstring"),h(gn,"class","docstring"),h(yn,"class","docstring"),h(wn,"class","docstring"),h(E,"class","docstring"),h(bn,"id","custom-deepspeed-zero-inference"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#custom-deepspeed-zero-inference"),h(it,"class","relative group"),h(xc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(kn,"id","main-deepspeed-resources"),h(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kn,"href","#main-deepspeed-resources"),h(ut,"class","relative group"),h(op,"href","https://github.com/microsoft/deepspeed"),h(op,"rel","nofollow"),h(lp,"href","https://www.deepspeed.ai/getting-started/"),h(lp,"rel","nofollow"),h(rp,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(rp,"rel","nofollow"),h(pp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(pp,"rel","nofollow"),h(ip,"href","https://arxiv.org/abs/1910.02054"),h(ip,"rel","nofollow"),h(up,"href","https://arxiv.org/abs/2101.06840"),h(up,"rel","nofollow"),h(cp,"href","https://arxiv.org/abs/2104.07857"),h(cp,"rel","nofollow"),h(Mc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(hp,"href","https://github.com/microsoft/DeepSpeed/issues"),h(hp,"rel","nofollow")},m(e,p){s(document.head,w),i(e,M,p),i(e,b,p),s(b,$),s($,ms),m(F,ms,null),s(b,Nn),s(b,_s),s(_s,vs),i(e,ht,p),i(e,V,p),s(V,Y),s(Y,Z),s(V,yp),s(V,$e),s($e,wp),s(V,ZE),i(e,pj,p),i(e,D,p),s(D,Ch),s(Ch,NE),s(D,HE),s(D,xh),s(xh,BE),s(D,WE),s(D,Rh),s(Rh,FE),s(D,VE),s(D,Ih),s(Ih,YE),s(D,KE),s(D,Uh),s(Uh,JE),s(D,XE),s(D,Gh),s(Gh,QE),i(e,ij,p),i(e,ke,p),s(ke,e$),s(ke,Hn),s(Hn,s$),s(ke,t$),s(ke,Bn),s(Bn,a$),s(ke,n$),i(e,uj,p),i(e,bp,p),s(bp,o$),i(e,cj,p),i(e,qp,p),s(qp,l$),i(e,hj,p),i(e,ft,p),s(ft,r$),s(ft,Wn),s(Wn,p$),s(ft,i$),i(e,fj,p),i(e,dt,p),s(dt,Fn),s(Fn,u$),s(Fn,Ep),s(Ep,c$),s(Fn,h$),s(dt,f$),s(dt,L),s(L,d$),s(L,$p),s($p,m$),s(L,_$),s(L,Lh),s(Lh,v$),s(L,j$),s(L,Mh),s(Mh,g$),s(L,y$),s(L,Zh),s(Zh,w$),s(L,b$),s(L,kp),s(kp,q$),s(L,E$),i(e,dj,p),i(e,Pp,p),s(Pp,$$),i(e,mj,p),i(e,zp,p),s(zp,k$),i(e,_j,p),i(e,Dp,p),s(Dp,Nh),s(Nh,P$),i(e,vj,p),i(e,Op,p),s(Op,z$),i(e,jj,p),i(e,Tp,p),s(Tp,Vn),s(Vn,D$),s(Vn,Ap),s(Ap,O$),s(Vn,T$),i(e,gj,p),i(e,Sp,p),s(Sp,A$),i(e,yj,p),i(e,Cp,p),i(e,wj,p),i(e,js,p),s(js,mt),s(mt,Hh),m(Yn,Hh,null),s(js,S$),s(js,Bh),s(Bh,C$),i(e,bj,p),i(e,xp,p),i(e,qj,p),i(e,gs,p),s(gs,_t),s(_t,Wh),m(Kn,Wh,null),s(gs,x$),s(gs,Fh),s(Fh,R$),i(e,Ej,p),i(e,Rp,p),s(Rp,I$),i(e,$j,p),m(Jn,e,p),i(e,kj,p),i(e,Pe,p),s(Pe,U$),s(Pe,Vh),s(Vh,G$),s(Pe,L$),s(Pe,Yh),s(Yh,M$),s(Pe,Z$),i(e,Pj,p),m(Xn,e,p),i(e,zj,p),i(e,ze,p),s(ze,N$),s(ze,Qn),s(Qn,H$),s(ze,B$),s(ze,eo),s(eo,W$),s(ze,F$),i(e,Dj,p),i(e,vt,p),s(vt,V$),s(vt,Ip),s(Ip,Y$),s(vt,K$),i(e,Oj,p),i(e,Up,p),s(Up,J$),i(e,Tj,p),i(e,Gp,p),s(Gp,X$),i(e,Aj,p),m(so,e,p),i(e,Sj,p),i(e,De,p),s(De,Q$),s(De,Kh),s(Kh,e5),s(De,s5),s(De,Jh),s(Jh,t5),s(De,a5),i(e,Cj,p),i(e,jt,p),s(jt,n5),s(jt,Xh),s(Xh,o5),s(jt,l5),i(e,xj,p),m(to,e,p),i(e,Rj,p),i(e,ge,p),s(ge,r5),s(ge,Qh),s(Qh,p5),s(ge,i5),s(ge,ef),s(ef,u5),s(ge,c5),s(ge,sf),s(sf,h5),i(e,Ij,p),i(e,Lp,p),s(Lp,f5),i(e,Uj,p),m(ao,e,p),i(e,Gj,p),i(e,Oe,p),s(Oe,d5),s(Oe,tf),s(tf,m5),s(Oe,_5),s(Oe,af),s(af,v5),s(Oe,j5),i(e,Lj,p),i(e,gt,p),s(gt,g5),s(gt,nf),s(nf,y5),s(gt,w5),i(e,Mj,p),i(e,Te,p),s(Te,b5),s(Te,of),s(of,q5),s(Te,E5),s(Te,no),s(no,$5),s(Te,k5),i(e,Zj,p),i(e,Mp,p),s(Mp,P5),i(e,Nj,p),m(oo,e,p),i(e,Hj,p),i(e,Zp,p),s(Zp,z5),i(e,Bj,p),m(lo,e,p),i(e,Wj,p),i(e,Np,p),s(Np,D5),i(e,Fj,p),m(ro,e,p),i(e,Vj,p),i(e,yt,p),s(yt,O5),s(yt,lf),s(lf,T5),s(yt,A5),i(e,Yj,p),i(e,wt,p),s(wt,S5),s(wt,rf),s(rf,C5),s(wt,x5),i(e,Kj,p),i(e,bt,p),s(bt,R5),s(bt,po),s(po,I5),s(bt,U5),i(e,Jj,p),i(e,Hp,p),i(e,Xj,p),i(e,ys,p),s(ys,qt),s(qt,pf),m(io,pf,null),s(ys,G5),s(ys,uf),s(uf,L5),i(e,Qj,p),i(e,Et,p),s(Et,M5),s(Et,Bp),s(Bp,Z5),s(Et,N5),i(e,eg,p),i(e,$t,p),s($t,ws),s(ws,H5),s(ws,cf),s(cf,B5),s(ws,W5),s(ws,hf),s(hf,F5),s(ws,V5),s($t,Y5),s($t,ye),s(ye,K5),s(ye,ff),s(ff,J5),s(ye,X5),s(ye,df),s(df,Q5),s(ye,e6),s(ye,uo),s(uo,s6),s(ye,t6),i(e,sg,p),i(e,Wp,p),s(Wp,a6),i(e,tg,p),m(co,e,p),i(e,ag,p),i(e,Fp,p),s(Fp,n6),i(e,ng,p),m(ho,e,p),i(e,og,p),i(e,O,p),s(O,o6),s(O,mf),s(mf,l6),s(O,r6),s(O,_f),s(_f,p6),s(O,i6),s(O,vf),s(vf,u6),s(O,c6),s(O,jf),s(jf,h6),s(O,f6),s(O,fo),s(fo,d6),s(O,m6),i(e,lg,p),i(e,J,p),s(J,_6),s(J,gf),s(gf,v6),s(J,j6),s(J,yf),s(yf,g6),s(J,y6),s(J,wf),s(wf,w6),s(J,b6),i(e,rg,p),i(e,kt,p),s(kt,q6),s(kt,bf),s(bf,E6),s(kt,$6),i(e,pg,p),m(mo,e,p),i(e,ig,p),i(e,Pt,p),s(Pt,k6),s(Pt,qf),s(qf,P6),s(Pt,z6),i(e,ug,p),i(e,zt,p),s(zt,D6),s(zt,_o),s(_o,O6),s(zt,T6),i(e,cg,p),i(e,Vp,p),i(e,hg,p),i(e,bs,p),s(bs,Dt),s(Dt,Ef),m(vo,Ef,null),s(bs,A6),s(bs,$f),s($f,S6),i(e,fg,p),i(e,Ot,p),s(Ot,C6),s(Ot,Yp),s(Yp,x6),s(Ot,R6),i(e,dg,p),m(jo,e,p),i(e,mg,p),i(e,Ae,p),s(Ae,I6),s(Ae,kf),s(kf,U6),s(Ae,G6),s(Ae,go),s(go,L6),s(Ae,M6),i(e,_g,p),i(e,Kp,p),s(Kp,Z6),i(e,vg,p),i(e,Tt,p),s(Tt,Pf),s(Pf,N6),s(Tt,H6),s(Tt,zf),s(zf,B6),i(e,jg,p),i(e,Jp,p),s(Jp,W6),i(e,gg,p),m(yo,e,p),i(e,yg,p),i(e,Xp,p),s(Xp,F6),i(e,wg,p),i(e,At,p),s(At,V6),s(At,wo),s(wo,Y6),s(At,K6),i(e,bg,p),i(e,Qp,p),s(Qp,J6),i(e,qg,p),i(e,ei,p),s(ei,X6),i(e,Eg,p),i(e,si,p),s(si,qs),s(qs,bo),s(bo,Q6),s(bo,Df),s(Df,e4),s(bo,s4),s(qs,t4),m(qo,qs,null),s(qs,a4),s(qs,Of),s(Of,n4),i(e,$g,p),i(e,ti,p),i(e,kg,p),i(e,Es,p),s(Es,St),s(St,Tf),m(Eo,Tf,null),s(Es,o4),s(Es,Af),s(Af,l4),i(e,Pg,p),i(e,Ct,p),s(Ct,r4),s(Ct,Sf),s(Sf,p4),s(Ct,i4),i(e,zg,p),i(e,ai,p),s(ai,u4),i(e,Dg,p),m($o,e,p),i(e,Og,p),i(e,xt,p),s(xt,c4),s(xt,Cf),s(Cf,h4),s(xt,f4),i(e,Tg,p),i(e,ni,p),s(ni,d4),i(e,Ag,p),i(e,oi,p),s(oi,m4),i(e,Sg,p),m(ko,e,p),i(e,Cg,p),i(e,Se,p),s(Se,_4),s(Se,xf),s(xf,v4),s(Se,j4),s(Se,Rf),s(Rf,g4),s(Se,y4),i(e,xg,p),m(Po,e,p),i(e,Rg,p),i(e,Rt,p),s(Rt,w4),s(Rt,If),s(If,b4),s(Rt,q4),i(e,Ig,p),m(zo,e,p),i(e,Ug,p),i(e,li,p),s(li,E4),i(e,Gg,p),i(e,It,p),s(It,$4),s(It,Uf),s(Uf,k4),s(It,P4),i(e,Lg,p),i(e,ri,p),i(e,Mg,p),i(e,$s,p),s($s,Ut),s(Ut,Gf),m(Do,Gf,null),s($s,z4),s($s,Lf),s(Lf,D4),i(e,Zg,p),i(e,Gt,p),s(Gt,O4),s(Gt,Oo),s(Oo,T4),s(Gt,A4),i(e,Ng,p),i(e,Lt,p),s(Lt,S4),s(Lt,To),s(To,C4),s(Lt,x4),i(e,Hg,p),m(Ao,e,p),i(e,Bg,p),i(e,Mt,p),s(Mt,R4),s(Mt,Mf),s(Mf,I4),s(Mt,U4),i(e,Wg,p),m(So,e,p),i(e,Fg,p),i(e,Zt,p),s(Zt,G4),s(Zt,Co),s(Co,L4),s(Zt,M4),i(e,Vg,p),i(e,pi,p),s(pi,Z4),i(e,Yg,p),i(e,X,p),s(X,N4),s(X,Zf),s(Zf,H4),s(X,B4),s(X,Nf),s(Nf,W4),s(X,F4),s(X,Hf),s(Hf,V4),s(X,Y4),i(e,Kg,p),m(xo,e,p),i(e,Jg,p),i(e,Nt,p),s(Nt,K4),s(Nt,ii),s(ii,J4),s(Nt,X4),i(e,Xg,p),i(e,ui,p),i(e,Qg,p),i(e,ks,p),s(ks,Ht),s(Ht,Bf),m(Ro,Bf,null),s(ks,Q4),s(ks,Wf),s(Wf,e8),i(e,ey,p),i(e,T,p),s(T,s8),s(T,ci),s(ci,t8),s(T,a8),s(T,hi),s(hi,n8),s(T,o8),s(T,Ff),s(Ff,l8),s(T,r8),s(T,Vf),s(Vf,p8),s(T,i8),s(T,fi),s(fi,u8),s(T,c8),i(e,sy,p),i(e,di,p),s(di,h8),i(e,ty,p),m(Io,e,p),i(e,ay,p),i(e,mi,p),s(mi,f8),i(e,ny,p),m(Uo,e,p),i(e,oy,p),i(e,_i,p),i(e,ly,p),i(e,Ps,p),s(Ps,Bt),s(Bt,Yf),m(Go,Yf,null),s(Ps,d8),s(Ps,Kf),s(Kf,m8),i(e,ry,p),m(Wt,e,p),i(e,py,p),i(e,Ce,p),s(Ce,_8),s(Ce,vi),s(vi,v8),s(Ce,j8),s(Ce,ji),s(ji,g8),s(Ce,y8),i(e,iy,p),i(e,Ft,p),s(Ft,w8),s(Ft,gi),s(gi,b8),s(Ft,q8),i(e,uy,p),i(e,xe,p),s(xe,E8),s(xe,Jf),s(Jf,$8),s(xe,k8),s(xe,yi),s(yi,P8),s(xe,z8),i(e,cy,p),i(e,wi,p),s(wi,D8),i(e,hy,p),i(e,Vt,p),s(Vt,O8),s(Vt,bi),s(bi,T8),s(Vt,A8),i(e,fy,p),i(e,Yt,p),s(Yt,Xf),s(Xf,S8),s(Yt,C8),s(Yt,Lo),s(Lo,x8),s(Lo,qi),s(qi,R8),s(Lo,I8),i(e,dy,p),i(e,Q,p),s(Q,U8),s(Q,Qf),s(Qf,G8),s(Q,L8),s(Q,Ei),s(Ei,M8),s(Q,Z8),s(Q,ed),s(ed,N8),s(Q,H8),i(e,my,p),i(e,$i,p),i(e,_y,p),i(e,zs,p),s(zs,Kt),s(Kt,sd),m(Mo,sd,null),s(zs,B8),s(zs,td),s(td,W8),i(e,vy,p),i(e,Zo,p),s(Zo,No),s(No,F8),s(Zo,V8),i(e,jy,p),i(e,Re,p),s(Re,Y8),s(Re,ad),s(ad,K8),s(Re,J8),s(Re,Ho),s(Ho,X8),s(Re,Q8),i(e,gy,p),i(e,Jt,p),s(Jt,e7),s(Jt,ki),s(ki,s7),s(Jt,t7),i(e,yy,p),i(e,Pi,p),s(Pi,a7),i(e,wy,p),i(e,zi,p),i(e,by,p),i(e,Ds,p),s(Ds,Xt),s(Xt,nd),m(Bo,nd,null),s(Ds,n7),s(Ds,od),s(od,o7),i(e,qy,p),i(e,Di,p),s(Di,l7),i(e,Ey,p),m(Wo,e,p),i(e,$y,p),i(e,Oi,p),s(Oi,ld),s(ld,r7),i(e,ky,p),i(e,Ie,p),s(Ie,Os),s(Os,p7),s(Os,rd),s(rd,i7),s(Os,u7),s(Os,pd),s(pd,c7),s(Os,h7),s(Ie,f7),s(Ie,A),s(A,id),s(id,d7),s(A,m7),s(A,ud),s(ud,_7),s(A,v7),s(A,cd),s(cd,j7),s(A,g7),s(A,hd),s(hd,y7),s(A,w7),s(A,fd),s(fd,b7),s(A,q7),s(A,dd),s(dd,E7),s(A,$7),s(Ie,k7),s(Ie,md),s(md,P7),i(e,Py,p),i(e,Ue,p),s(Ue,z7),s(Ue,_d),s(_d,D7),s(Ue,O7),s(Ue,vd),s(vd,T7),s(Ue,A7),i(e,zy,p),m(Fo,e,p),i(e,Dy,p),i(e,Ti,p),s(Ti,S7),i(e,Oy,p),i(e,Ai,p),i(e,Ty,p),i(e,Ts,p),s(Ts,Qt),s(Qt,jd),m(Vo,jd,null),s(Ts,C7),s(Ts,gd),s(gd,x7),i(e,Ay,p),i(e,Si,p),s(Si,R7),i(e,Sy,p),m(Yo,e,p),i(e,Cy,p),i(e,N,p),s(N,I7),s(N,yd),s(yd,U7),s(N,G7),s(N,wd),s(wd,L7),s(N,M7),s(N,bd),s(bd,Z7),s(N,N7),s(N,qd),s(qd,H7),s(N,B7),i(e,xy,p),i(e,Ge,p),s(Ge,W7),s(Ge,Ed),s(Ed,F7),s(Ge,V7),s(Ge,$d),s($d,Y7),s(Ge,K7),i(e,Ry,p),i(e,Ci,p),s(Ci,kd),s(kd,J7),i(e,Iy,p),i(e,ea,p),s(ea,Ko),s(Ko,Pd),s(Pd,X7),s(Ko,Q7),s(Ko,zd),s(zd,ek),s(ea,sk),s(ea,Jo),s(Jo,Dd),s(Dd,tk),s(Jo,ak),s(Jo,Od),s(Od,nk),i(e,Uy,p),i(e,S,p),s(S,ok),s(S,Td),s(Td,lk),s(S,rk),s(S,Ad),s(Ad,pk),s(S,ik),s(S,Sd),s(Sd,uk),s(S,ck),s(S,Cd),s(Cd,hk),s(S,fk),s(S,xd),s(xd,dk),s(S,mk),i(e,Gy,p),i(e,we,p),s(we,Rd),s(Rd,_k),s(we,vk),s(we,Id),s(Id,jk),s(we,gk),s(we,Ud),s(Ud,yk),s(we,wk),i(e,Ly,p),i(e,xi,p),s(xi,bk),i(e,My,p),i(e,Le,p),s(Le,Xo),s(Xo,Gd),s(Gd,qk),s(Xo,Ek),s(Xo,Ld),s(Ld,$k),s(Le,kk),s(Le,Qo),s(Qo,Md),s(Md,Pk),s(Qo,zk),s(Qo,Zd),s(Zd,Dk),s(Le,Ok),s(Le,el),s(el,Nd),s(Nd,Tk),s(el,Ak),s(el,Hd),s(Hd,Sk),i(e,Zy,p),i(e,Me,p),s(Me,Ck),s(Me,Bd),s(Bd,xk),s(Me,Rk),s(Me,Ri),s(Ri,Ik),s(Me,Uk),i(e,Ny,p),i(e,sl,p),s(sl,Wd),s(Wd,Gk),s(sl,Lk),i(e,Hy,p),i(e,ee,p),s(ee,Mk),s(ee,Fd),s(Fd,Zk),s(ee,Nk),s(ee,Vd),s(Vd,Hk),s(ee,Bk),s(ee,Yd),s(Yd,Wk),s(ee,Fk),i(e,By,p),i(e,Ii,p),s(Ii,tl),s(tl,Kd),s(Kd,Vk),s(tl,Yk),s(tl,Jd),s(Jd,Kk),i(e,Wy,p),i(e,be,p),s(be,Xd),s(Xd,Jk),s(be,Xk),s(be,Qd),s(Qd,Qk),s(be,e9),s(be,em),s(em,s9),s(be,t9),i(e,Fy,p),i(e,Ze,p),s(Ze,a9),s(Ze,sm),s(sm,n9),s(Ze,o9),s(Ze,tm),s(tm,l9),s(Ze,r9),i(e,Vy,p),i(e,sa,p),s(sa,al),s(al,p9),s(al,am),s(am,i9),s(al,u9),s(sa,c9),s(sa,nl),s(nl,h9),s(nl,nm),s(nm,f9),s(nl,d9),i(e,Yy,p),i(e,Ui,p),i(e,Ky,p),i(e,As,p),s(As,ta),s(ta,om),m(ol,om,null),s(As,m9),s(As,lm),s(lm,_9),i(e,Jy,p),i(e,Gi,p),s(Gi,v9),i(e,Xy,p),i(e,Li,p),s(Li,j9),i(e,Qy,p),m(ll,e,p),i(e,ew,p),i(e,aa,p),s(aa,g9),s(aa,rm),s(rm,y9),s(aa,w9),i(e,sw,p),i(e,Ne,p),s(Ne,b9),s(Ne,rl),s(rl,q9),s(Ne,E9),s(Ne,pl),s(pl,$9),s(Ne,k9),i(e,tw,p),i(e,na,p),s(na,P9),s(na,pm),s(pm,z9),s(na,D9),i(e,aw,p),i(e,He,p),s(He,O9),s(He,im),s(im,T9),s(He,A9),s(He,il),s(il,S9),s(He,C9),i(e,nw,p),i(e,Mi,p),i(e,ow,p),i(e,Ss,p),s(Ss,oa),s(oa,um),m(ul,um,null),s(Ss,x9),s(Ss,cm),s(cm,R9),i(e,lw,p),i(e,Zi,p),s(Zi,I9),i(e,rw,p),i(e,Ni,p),s(Ni,U9),i(e,pw,p),i(e,la,p),s(la,Cs),s(Cs,G9),s(Cs,hm),s(hm,L9),s(Cs,M9),s(Cs,fm),s(fm,Z9),s(Cs,N9),s(la,H9),s(la,cl),s(cl,B9),s(cl,dm),s(dm,W9),s(cl,F9),i(e,iw,p),i(e,Be,p),s(Be,V9),s(Be,mm),s(mm,Y9),s(Be,K9),s(Be,_m),s(_m,J9),s(Be,X9),i(e,uw,p),i(e,Hi,p),i(e,cw,p),i(e,xs,p),s(xs,ra),s(ra,vm),m(hl,vm,null),s(xs,Q9),s(xs,jm),s(jm,eP),i(e,hw,p),i(e,pa,p),s(pa,sP),s(pa,gm),s(gm,tP),s(pa,aP),i(e,fw,p),m(fl,e,p),i(e,dw,p),i(e,ia,p),s(ia,nP),s(ia,ym),s(ym,oP),s(ia,lP),i(e,mw,p),m(dl,e,p),i(e,_w,p),i(e,Bi,p),i(e,vw,p),i(e,Rs,p),s(Rs,ua),s(ua,wm),m(ml,wm,null),s(Rs,rP),s(Rs,bm),s(bm,pP),i(e,jw,p),i(e,ca,p),s(ca,iP),s(ca,qm),s(qm,uP),s(ca,cP),i(e,gw,p),m(_l,e,p),i(e,yw,p),i(e,ha,p),s(ha,hP),s(ha,Em),s(Em,fP),s(ha,dP),i(e,ww,p),m(vl,e,p),i(e,bw,p),i(e,Is,p),s(Is,fa),s(fa,$m),m(jl,$m,null),s(Is,mP),s(Is,km),s(km,_P),i(e,qw,p),i(e,da,p),s(da,vP),s(da,Pm),s(Pm,jP),s(da,gP),i(e,Ew,p),i(e,Wi,p),s(Wi,yP),i(e,$w,p),i(e,ma,p),s(ma,wP),s(ma,zm),s(zm,bP),s(ma,qP),i(e,kw,p),i(e,Fi,p),i(e,Pw,p),i(e,Us,p),s(Us,_a),s(_a,Dm),m(gl,Dm,null),s(Us,EP),s(Us,Om),s(Om,$P),i(e,zw,p),i(e,We,p),s(We,kP),s(We,Tm),s(Tm,PP),s(We,zP),s(We,yl),s(yl,DP),s(We,OP),i(e,Dw,p),i(e,q,p),s(q,TP),s(q,Am),s(Am,AP),s(q,SP),s(q,Vi),s(Vi,CP),s(q,xP),s(q,Sm),s(Sm,RP),s(q,IP),s(q,Cm),s(Cm,UP),s(q,GP),s(q,xm),s(xm,LP),s(q,MP),s(q,Rm),s(Rm,ZP),s(q,NP),s(q,Im),s(Im,HP),s(q,BP),s(q,Um),s(Um,WP),s(q,FP),i(e,Ow,p),i(e,Fe,p),s(Fe,VP),s(Fe,Gm),s(Gm,YP),s(Fe,KP),s(Fe,Lm),s(Lm,JP),s(Fe,XP),i(e,Tw,p),m(wl,e,p),i(e,Aw,p),i(e,Yi,p),s(Yi,QP),i(e,Sw,p),i(e,se,p),s(se,bl),s(bl,Mm),s(Mm,ez),s(bl,sz),s(bl,Zm),s(Zm,tz),s(se,az),s(se,ql),s(ql,Nm),s(Nm,nz),s(ql,oz),s(ql,Hm),s(Hm,lz),s(se,rz),s(se,El),s(El,Bm),s(Bm,pz),s(El,iz),s(El,Wm),s(Wm,uz),s(se,cz),s(se,$l),s($l,Fm),s(Fm,hz),s($l,fz),s($l,Vm),s(Vm,dz),i(e,Cw,p),i(e,Ki,p),s(Ki,mz),i(e,xw,p),i(e,Ji,p),s(Ji,_z),i(e,Rw,p),m(kl,e,p),i(e,Iw,p),i(e,va,p),s(va,vz),s(va,Xi),s(Xi,jz),s(va,gz),i(e,Uw,p),i(e,Qi,p),s(Qi,yz),i(e,Gw,p),m(Pl,e,p),i(e,Lw,p),i(e,te,p),s(te,wz),s(te,Ym),s(Ym,bz),s(te,qz),s(te,Km),s(Km,Ez),s(te,$z),s(te,Jm),s(Jm,kz),s(te,Pz),i(e,Mw,p),i(e,eu,p),i(e,Zw,p),i(e,Gs,p),s(Gs,ja),s(ja,Xm),m(zl,Xm,null),s(Gs,zz),s(Gs,Qm),s(Qm,Dz),i(e,Nw,p),i(e,C,p),s(C,Oz),s(C,e_),s(e_,Tz),s(C,Az),s(C,s_),s(s_,Sz),s(C,Cz),s(C,t_),s(t_,xz),s(C,Rz),s(C,a_),s(a_,Iz),s(C,Uz),s(C,Dl),s(Dl,Gz),s(C,Lz),i(e,Hw,p),i(e,su,p),s(su,Mz),i(e,Bw,p),i(e,ga,p),s(ga,Ol),s(Ol,n_),s(n_,Zz),s(Ol,Nz),s(Ol,o_),s(o_,Hz),s(ga,Bz),s(ga,Ve),s(Ve,l_),s(l_,Wz),s(Ve,Fz),s(Ve,r_),s(r_,Vz),s(Ve,Yz),s(Ve,p_),s(p_,Kz),s(Ve,Jz),i(e,Ww,p),i(e,P,p),s(P,Xz),s(P,i_),s(i_,Qz),s(P,eD),s(P,tu),s(tu,sD),s(P,tD),s(P,u_),s(u_,aD),s(P,nD),s(P,c_),s(c_,oD),s(P,lD),s(P,h_),s(h_,rD),s(P,pD),s(P,f_),s(f_,iD),s(P,uD),i(e,Fw,p),i(e,Ye,p),s(Ye,cD),s(Ye,d_),s(d_,hD),s(Ye,fD),s(Ye,m_),s(m_,dD),s(Ye,mD),i(e,Vw,p),m(Tl,e,p),i(e,Yw,p),i(e,Ke,p),s(Ke,_D),s(Ke,__),s(__,vD),s(Ke,jD),s(Ke,au),s(au,gD),s(Ke,yD),i(e,Kw,p),i(e,ae,p),s(ae,ya),s(ya,v_),s(v_,wD),s(ya,bD),s(ya,j_),s(j_,qD),s(ya,ED),s(ae,$D),s(ae,wa),s(wa,g_),s(g_,kD),s(wa,PD),s(wa,y_),s(y_,zD),s(wa,DD),s(ae,OD),s(ae,Je),s(Je,w_),s(w_,TD),s(Je,AD),s(Je,b_),s(b_,SD),s(Je,CD),s(Je,q_),s(q_,xD),s(Je,RD),s(ae,ID),s(ae,Xe),s(Xe,E_),s(E_,UD),s(Xe,GD),s(Xe,$_),s($_,LD),s(Xe,MD),s(Xe,k_),s(k_,ZD),s(Xe,ND),i(e,Jw,p),i(e,nu,p),s(nu,HD),i(e,Xw,p),m(Al,e,p),i(e,Qw,p),i(e,ba,p),s(ba,BD),s(ba,ou),s(ou,WD),s(ba,FD),i(e,e2,p),i(e,qa,p),s(qa,VD),s(qa,P_),s(P_,YD),s(qa,KD),i(e,s2,p),m(Sl,e,p),i(e,t2,p),i(e,H,p),s(H,JD),s(H,z_),s(z_,XD),s(H,QD),s(H,D_),s(D_,eO),s(H,sO),s(H,O_),s(O_,tO),s(H,aO),s(H,T_),s(T_,nO),s(H,oO),i(e,a2,p),i(e,lu,p),i(e,n2,p),i(e,Ls,p),s(Ls,Ea),s(Ea,A_),m(Cl,A_,null),s(Ls,lO),s(Ls,S_),s(S_,rO),i(e,o2,p),i(e,ru,p),s(ru,pO),i(e,l2,p),i(e,$a,p),s($a,iO),s($a,C_),s(C_,uO),s($a,cO),i(e,r2,p),m(xl,e,p),i(e,p2,p),i(e,ka,p),s(ka,hO),s(ka,Rl),s(Rl,fO),s(ka,dO),i(e,i2,p),i(e,pu,p),i(e,u2,p),i(e,Ms,p),s(Ms,Pa),s(Pa,x_),m(Il,x_,null),s(Ms,mO),s(Ms,R_),s(R_,_O),i(e,c2,p),i(e,iu,p),s(iu,vO),i(e,h2,p),i(e,uu,p),s(uu,jO),i(e,f2,p),m(Ul,e,p),i(e,d2,p),i(e,Qe,p),s(Qe,gO),s(Qe,cu),s(cu,yO),s(Qe,wO),s(Qe,I_),s(I_,bO),s(Qe,qO),i(e,m2,p),i(e,za,p),s(za,EO),s(za,U_),s(U_,$O),s(za,kO),i(e,_2,p),i(e,hu,p),s(hu,PO),i(e,v2,p),m(Gl,e,p),i(e,j2,p),i(e,Da,p),s(Da,zO),s(Da,fu),s(fu,DO),s(Da,OO),i(e,g2,p),i(e,Oa,p),s(Oa,TO),s(Oa,Ll),s(Ll,AO),s(Oa,SO),i(e,y2,p),i(e,du,p),s(du,CO),i(e,w2,p),m(Ml,e,p),i(e,b2,p),i(e,ne,p),s(ne,xO),s(ne,mu),s(mu,RO),s(ne,IO),s(ne,G_),s(G_,UO),s(ne,GO),s(ne,L_),s(L_,LO),s(ne,MO),i(e,q2,p),i(e,Ta,p),s(Ta,ZO),s(Ta,M_),s(M_,NO),s(Ta,HO),i(e,E2,p),i(e,_u,p),s(_u,BO),i(e,$2,p),m(Zl,e,p),i(e,k2,p),i(e,Aa,p),s(Aa,WO),s(Aa,vu),s(vu,FO),s(Aa,VO),i(e,P2,p),i(e,Sa,p),s(Sa,YO),s(Sa,Nl),s(Nl,KO),s(Sa,JO),i(e,z2,p),i(e,ju,p),i(e,D2,p),i(e,Zs,p),s(Zs,Ca),s(Ca,Z_),m(Hl,Z_,null),s(Zs,XO),s(Zs,N_),s(N_,QO),i(e,O2,p),i(e,gu,p),s(gu,eT),i(e,T2,p),m(Bl,e,p),i(e,A2,p),i(e,x,p),s(x,sT),s(x,yu),s(yu,tT),s(x,aT),s(x,H_),s(H_,nT),s(x,oT),s(x,B_),s(B_,lT),s(x,rT),s(x,W_),s(W_,pT),s(x,iT),s(x,F_),s(F_,uT),s(x,cT),i(e,S2,p),i(e,wu,p),s(wu,hT),i(e,C2,p),m(Wl,e,p),i(e,x2,p),i(e,xa,p),s(xa,fT),s(xa,bu),s(bu,dT),s(xa,mT),i(e,R2,p),i(e,qu,p),i(e,I2,p),i(e,Ns,p),s(Ns,Ra),s(Ra,V_),m(Fl,V_,null),s(Ns,_T),s(Ns,Y_),s(Y_,vT),i(e,U2,p),i(e,Eu,p),s(Eu,jT),i(e,G2,p),m(Vl,e,p),i(e,L2,p),i(e,es,p),s(es,gT),s(es,$u),s($u,yT),s(es,wT),s(es,K_),s(K_,bT),s(es,qT),i(e,M2,p),i(e,ku,p),s(ku,ET),i(e,Z2,p),m(Yl,e,p),i(e,N2,p),i(e,Ia,p),s(Ia,$T),s(Ia,Pu),s(Pu,kT),s(Ia,PT),i(e,H2,p),i(e,zu,p),i(e,B2,p),i(e,Hs,p),s(Hs,Ua),s(Ua,J_),m(Kl,J_,null),s(Hs,zT),s(Hs,X_),s(X_,DT),i(e,W2,p),i(e,Du,p),s(Du,OT),i(e,F2,p),m(Jl,e,p),i(e,V2,p),i(e,ss,p),s(ss,TT),s(ss,Ou),s(Ou,AT),s(ss,ST),s(ss,Q_),s(Q_,CT),s(ss,xT),i(e,Y2,p),i(e,Tu,p),s(Tu,RT),i(e,K2,p),m(Xl,e,p),i(e,J2,p),i(e,Ga,p),s(Ga,IT),s(Ga,Au),s(Au,UT),s(Ga,GT),i(e,X2,p),i(e,Su,p),i(e,Q2,p),i(e,Bs,p),s(Bs,La),s(La,e1),m(Ql,e1,null),s(Bs,LT),s(Bs,s1),s(s1,MT),i(e,eb,p),i(e,Ma,p),s(Ma,ZT),s(Ma,t1),s(t1,NT),s(Ma,HT),i(e,sb,p),i(e,Cu,p),s(Cu,a1),s(a1,BT),i(e,tb,p),i(e,Za,p),s(Za,WT),s(Za,n1),s(n1,FT),s(Za,VT),i(e,ab,p),i(e,B,p),s(B,YT),s(B,o1),s(o1,KT),s(B,JT),s(B,l1),s(l1,XT),s(B,QT),s(B,r1),s(r1,eA),s(B,sA),s(B,p1),s(p1,tA),s(B,aA),i(e,nb,p),m(er,e,p),i(e,ob,p),i(e,xu,p),s(xu,i1),s(i1,nA),i(e,lb,p),i(e,Na,p),s(Na,oA),s(Na,sr),s(sr,lA),s(Na,rA),i(e,rb,p),i(e,Ru,p),s(Ru,u1),s(u1,pA),i(e,pb,p),i(e,Iu,p),s(Iu,iA),i(e,ib,p),i(e,Uu,p),s(Uu,uA),i(e,ub,p),m(tr,e,p),i(e,cb,p),i(e,ts,p),s(ts,cA),s(ts,c1),s(c1,hA),s(ts,fA),s(ts,h1),s(h1,dA),s(ts,mA),i(e,hb,p),m(ar,e,p),i(e,fb,p),m(Ha,e,p),i(e,db,p),i(e,Ba,p),s(Ba,_A),s(Ba,f1),s(f1,vA),s(Ba,jA),i(e,mb,p),i(e,Wa,p),s(Wa,gA),s(Wa,d1),s(d1,yA),s(Wa,wA),i(e,_b,p),m(nr,e,p),i(e,vb,p),i(e,Gu,p),s(Gu,m1),s(m1,bA),i(e,jb,p),i(e,as,p),s(as,qA),s(as,_1),s(_1,EA),s(as,$A),s(as,v1),s(v1,kA),s(as,PA),i(e,gb,p),i(e,Lu,p),s(Lu,zA),i(e,yb,p),m(or,e,p),i(e,wb,p),i(e,Fa,p),s(Fa,DA),s(Fa,j1),s(j1,OA),s(Fa,TA),i(e,bb,p),m(lr,e,p),i(e,qb,p),i(e,Va,p),s(Va,AA),s(Va,g1),s(g1,SA),s(Va,CA),i(e,Eb,p),i(e,Mu,p),s(Mu,xA),i(e,$b,p),i(e,rr,p),s(rr,y1),s(y1,RA),s(rr,IA),i(e,kb,p),i(e,ns,p),s(ns,UA),s(ns,w1),s(w1,GA),s(ns,LA),s(ns,b1),s(b1,MA),s(ns,ZA),i(e,Pb,p),i(e,Zu,p),s(Zu,NA),i(e,zb,p),i(e,Ws,p),s(Ws,Ya),s(Ya,q1),m(pr,q1,null),s(Ws,HA),s(Ws,E1),s(E1,BA),i(e,Db,p),i(e,Nu,p),s(Nu,WA),i(e,Ob,p),i(e,Hu,p),s(Hu,FA),i(e,Tb,p),i(e,Bu,p),s(Bu,VA),i(e,Ab,p),i(e,Fs,p),s(Fs,Ka),s(Ka,$1),m(ir,$1,null),s(Fs,YA),s(Fs,k1),s(k1,KA),i(e,Sb,p),i(e,Ja,p),s(Ja,JA),s(Ja,P1),s(P1,XA),s(Ja,QA),i(e,Cb,p),m(ur,e,p),i(e,xb,p),i(e,Wu,p),s(Wu,eS),i(e,Rb,p),i(e,k,p),s(k,sS),s(k,z1),s(z1,tS),s(k,aS),s(k,D1),s(D1,nS),s(k,oS),s(k,O1),s(O1,lS),s(k,rS),s(k,Fu),s(Fu,pS),s(k,iS),s(k,Vu),s(Vu,uS),s(k,cS),s(k,T1),s(T1,hS),s(k,fS),s(k,A1),s(A1,dS),s(k,mS),i(e,Ib,p),m(cr,e,p),i(e,Ub,p),i(e,Xa,p),s(Xa,_S),s(Xa,S1),s(S1,vS),s(Xa,jS),i(e,Gb,p),i(e,Yu,p),s(Yu,gS),i(e,Lb,p),i(e,Qa,p),s(Qa,yS),s(Qa,hr),s(hr,wS),s(Qa,bS),i(e,Mb,p),i(e,oe,p),s(oe,qS),s(oe,C1),s(C1,ES),s(oe,$S),s(oe,x1),s(x1,kS),s(oe,PS),s(oe,Ku),s(Ku,zS),s(oe,DS),i(e,Zb,p),i(e,Vs,p),s(Vs,en),s(en,R1),m(fr,R1,null),s(Vs,OS),s(Vs,I1),s(I1,TS),i(e,Nb,p),i(e,dr,p),s(dr,AS),s(dr,mr),s(mr,SS),i(e,Hb,p),i(e,sn,p),s(sn,CS),s(sn,U1),s(U1,xS),s(sn,RS),i(e,Bb,p),i(e,Ju,p),s(Ju,IS),i(e,Wb,p),m(_r,e,p),i(e,Fb,p),i(e,os,p),s(os,US),s(os,G1),s(G1,GS),s(os,LS),s(os,L1),s(L1,MS),s(os,ZS),i(e,Vb,p),i(e,Xu,p),i(e,Yb,p),i(e,Ys,p),s(Ys,tn),s(tn,M1),m(vr,M1,null),s(Ys,NS),s(Ys,Z1),s(Z1,HS),i(e,Kb,p),i(e,Qu,p),s(Qu,BS),i(e,Jb,p),i(e,an,p),s(an,WS),s(an,ec),s(ec,FS),s(an,VS),i(e,Xb,p),m(jr,e,p),i(e,Qb,p),i(e,sc,p),s(sc,YS),i(e,e3,p),i(e,nn,p),s(nn,KS),s(nn,N1),s(N1,JS),s(nn,XS),i(e,s3,p),m(gr,e,p),i(e,t3,p),i(e,tc,p),s(tc,QS),i(e,a3,p),i(e,ac,p),s(ac,eC),i(e,n3,p),i(e,Ks,p),s(Ks,on),s(on,H1),m(yr,H1,null),s(Ks,sC),s(Ks,B1),s(B1,tC),i(e,o3,p),i(e,nc,p),s(nc,aC),i(e,l3,p),i(e,oc,p),s(oc,nC),i(e,r3,p),m(wr,e,p),i(e,p3,p),i(e,lc,p),s(lc,oC),i(e,i3,p),i(e,rc,p),s(rc,lC),i(e,u3,p),i(e,pc,p),s(pc,rC),i(e,c3,p),i(e,ic,p),s(ic,pC),i(e,h3,p),m(br,e,p),i(e,f3,p),i(e,uc,p),s(uc,iC),i(e,d3,p),i(e,ln,p),s(ln,uC),s(ln,qr),s(qr,cC),s(ln,hC),i(e,m3,p),i(e,Js,p),s(Js,rn),s(rn,W1),m(Er,W1,null),s(Js,fC),s(Js,F1),s(F1,dC),i(e,_3,p),i(e,cc,p),s(cc,mC),i(e,v3,p),i(e,hc,p),s(hc,_C),i(e,j3,p),i(e,R,p),s(R,V1),s(V1,Y1),s(Y1,vC),s(R,jC),s(R,K1),s(K1,qe),s(qe,gC),s(qe,fc),s(fc,yC),s(qe,wC),s(qe,dc),s(dc,bC),s(qe,qC),s(qe,mc),s(mc,EC),s(qe,$C),s(R,kC),s(R,$r),s($r,J1),s(J1,PC),s($r,zC),m(kr,$r,null),s(R,DC),s(R,X1),s(X1,Pr),s(Pr,OC),s(Pr,zr),s(zr,TC),s(Pr,AC),s(R,SC),s(R,Q1),s(Q1,ev),s(ev,CC),s(R,xC),s(R,sv),s(sv,Dr),s(Dr,RC),s(Dr,Or),s(Or,IC),s(Dr,UC),i(e,g3,p),i(e,_c,p),s(_c,GC),i(e,y3,p),i(e,pn,p),s(pn,Xs),s(Xs,tv),s(tv,LC),s(Xs,MC),s(Xs,av),s(av,ZC),s(Xs,NC),s(Xs,nv),s(nv,HC),s(pn,BC),s(pn,ov),s(ov,Tr),s(Tr,WC),s(Tr,Ar),s(Ar,FC),s(Tr,VC),i(e,w3,p),i(e,Qs,p),s(Qs,un),s(un,lv),m(Sr,lv,null),s(Qs,YC),s(Qs,rv),s(rv,KC),i(e,b3,p),i(e,et,p),s(et,cn),s(cn,pv),m(Cr,pv,null),s(et,JC),s(et,xr),s(xr,XC),s(xr,iv),s(iv,QC),s(xr,ex),i(e,q3,p),i(e,I,p),s(I,sx),s(I,uv),s(uv,tx),s(I,ax),s(I,cv),s(cv,nx),s(I,ox),s(I,hv),s(hv,lx),s(I,rx),s(I,fv),s(fv,px),s(I,ix),s(I,Rr),s(Rr,ux),s(I,cx),i(e,E3,p),i(e,st,p),s(st,hn),s(hn,dv),m(Ir,dv,null),s(st,hx),s(st,vc),s(vc,fx),s(vc,mv),s(mv,dx),i(e,$3,p),i(e,jc,p),s(jc,mx),i(e,k3,p),i(e,gc,p),s(gc,_x),i(e,P3,p),m(Ur,e,p),i(e,z3,p),i(e,fn,p),s(fn,vx),s(fn,_v),s(_v,jx),s(fn,gx),i(e,D3,p),m(Gr,e,p),i(e,O3,p),i(e,yc,p),s(yc,yx),i(e,T3,p),i(e,wc,p),s(wc,wx),i(e,A3,p),i(e,ls,p),s(ls,bx),s(ls,vv),s(vv,qx),s(ls,Ex),s(ls,jv),s(jv,$x),s(ls,kx),i(e,S3,p),i(e,tt,p),s(tt,dn),s(dn,gv),m(Lr,gv,null),s(tt,Px),s(tt,yv),s(yv,zx),i(e,C3,p),i(e,rs,p),s(rs,mn),s(mn,Dx),s(mn,bc),s(bc,Ox),s(mn,Tx),s(mn,wv),s(wv,Ax),s(rs,Sx),s(rs,Mr),s(Mr,Cx),s(Mr,Zr),s(Zr,xx),s(Mr,Rx),s(rs,Ix),s(rs,at),s(at,Ux),s(at,qc),s(qc,Gx),s(at,Lx),s(at,Nr),s(Nr,Mx),s(at,Zx),i(e,x3,p),i(e,Ec,p),i(e,R3,p),i(e,nt,p),s(nt,_n),s(_n,bv),m(Hr,bv,null),s(nt,Nx),s(nt,qv),s(qv,Hx),i(e,I3,p),i(e,le,p),s(le,Bx),s(le,$c),s($c,Wx),s(le,Fx),s(le,kc),s(kc,Vx),s(le,Yx),s(le,Ev),s(Ev,Kx),s(le,Jx),i(e,U3,p),i(e,vn,p),s(vn,Xx),s(vn,Pc),s(Pc,Qx),s(vn,eR),i(e,G3,p),i(e,ps,p),s(ps,sR),s(ps,zc),s(zc,tR),s(ps,aR),s(ps,Dc),s(Dc,nR),s(ps,oR),i(e,L3,p),i(e,Oc,p),s(Oc,lR),i(e,M3,p),m(Br,e,p),i(e,Z3,p),i(e,Tc,p),s(Tc,rR),i(e,N3,p),m(Wr,e,p),i(e,H3,p),i(e,re,p),s(re,pR),s(re,Ac),s(Ac,iR),s(re,uR),s(re,Fr),s(Fr,cR),s(re,hR),s(re,$v),s($v,fR),s(re,dR),i(e,B3,p),i(e,ot,p),s(ot,jn),s(jn,kv),m(Vr,kv,null),s(ot,mR),s(ot,Pv),s(Pv,_R),i(e,W3,p),i(e,E,p),m(Yr,E,null),s(E,vR),s(E,zv),s(zv,jR),s(E,gR),s(E,Ee),s(Ee,yR),s(Ee,Dv),s(Dv,wR),s(Ee,bR),s(Ee,Ov),s(Ov,qR),s(Ee,ER),s(Ee,Tv),s(Tv,$R),s(Ee,kR),s(E,PR),s(E,pe),s(pe,Sc),s(Sc,zR),s(pe,DR),s(pe,Av),s(Av,OR),s(pe,TR),s(pe,Cc),s(Cc,AR),s(pe,SR),s(pe,Sv),s(Sv,CR),s(pe,xR),s(E,RR),s(E,is),m(Kr,is,null),s(is,IR),s(is,Cv),s(Cv,UR),s(is,GR),s(is,lt),s(lt,LR),s(lt,xv),s(xv,MR),s(lt,ZR),s(lt,Rv),s(Rv,NR),s(lt,HR),s(E,BR),s(E,gn),m(Jr,gn,null),s(gn,WR),s(gn,Xr),s(Xr,FR),s(Xr,Iv),s(Iv,VR),s(Xr,YR),s(E,KR),s(E,yn),m(Qr,yn,null),s(yn,JR),s(yn,rt),s(rt,XR),s(rt,Uv),s(Uv,QR),s(rt,eI),s(rt,Gv),s(Gv,sI),s(rt,tI),s(E,aI),s(E,wn),m(ep,wn,null),s(wn,nI),s(wn,pt),s(pt,oI),s(pt,Lv),s(Lv,lI),s(pt,rI),s(pt,Mv),s(Mv,pI),s(pt,iI),i(e,F3,p),i(e,it,p),s(it,bn),s(bn,Zv),m(sp,Zv,null),s(it,uI),s(it,Nv),s(Nv,cI),i(e,V3,p),i(e,qn,p),s(qn,hI),s(qn,xc),s(xc,fI),s(qn,dI),i(e,Y3,p),i(e,Rc,p),s(Rc,mI),i(e,K3,p),i(e,Ic,p),s(Ic,_I),i(e,J3,p),i(e,Uc,p),s(Uc,vI),i(e,X3,p),i(e,En,p),s(En,Hv),s(Hv,jI),s(En,gI),s(En,Bv),s(Bv,yI),i(e,Q3,p),m(tp,e,p),i(e,e0,p),i(e,$n,p),s($n,wI),s($n,Wv),s(Wv,bI),s($n,qI),i(e,s0,p),m(ap,e,p),i(e,t0,p),i(e,Gc,p),s(Gc,EI),i(e,a0,p),i(e,ut,p),s(ut,kn),s(kn,Fv),m(np,Fv,null),s(ut,$I),s(ut,Vv),s(Vv,kI),i(e,n0,p),i(e,ie,p),s(ie,Yv),s(Yv,op),s(op,PI),s(ie,zI),s(ie,Kv),s(Kv,lp),s(lp,DI),s(ie,OI),s(ie,Jv),s(Jv,rp),s(rp,TI),s(ie,AI),s(ie,Xv),s(Xv,pp),s(pp,SI),i(e,o0,p),i(e,Lc,p),s(Lc,CI),i(e,l0,p),i(e,us,p),s(us,Qv),s(Qv,ip),s(ip,xI),s(us,RI),s(us,ej),s(ej,up),s(up,II),s(us,UI),s(us,sj),s(sj,cp),s(cp,GI),i(e,r0,p),i(e,cs,p),s(cs,LI),s(cs,Mc),s(Mc,MI),s(cs,ZI),s(cs,hp),s(hp,NI),s(cs,HI),p0=!0},p(e,[p]){const fp={};p&2&&(fp.$$scope={dirty:p,ctx:e}),Wt.$set(fp);const tj={};p&2&&(tj.$$scope={dirty:p,ctx:e}),Ha.$set(tj)},i(e){p0||(_(F.$$.fragment,e),_(Yn.$$.fragment,e),_(Kn.$$.fragment,e),_(Jn.$$.fragment,e),_(Xn.$$.fragment,e),_(so.$$.fragment,e),_(to.$$.fragment,e),_(ao.$$.fragment,e),_(oo.$$.fragment,e),_(lo.$$.fragment,e),_(ro.$$.fragment,e),_(io.$$.fragment,e),_(co.$$.fragment,e),_(ho.$$.fragment,e),_(mo.$$.fragment,e),_(vo.$$.fragment,e),_(jo.$$.fragment,e),_(yo.$$.fragment,e),_(qo.$$.fragment,e),_(Eo.$$.fragment,e),_($o.$$.fragment,e),_(ko.$$.fragment,e),_(Po.$$.fragment,e),_(zo.$$.fragment,e),_(Do.$$.fragment,e),_(Ao.$$.fragment,e),_(So.$$.fragment,e),_(xo.$$.fragment,e),_(Ro.$$.fragment,e),_(Io.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Wt.$$.fragment,e),_(Mo.$$.fragment,e),_(Bo.$$.fragment,e),_(Wo.$$.fragment,e),_(Fo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(ol.$$.fragment,e),_(ll.$$.fragment,e),_(ul.$$.fragment,e),_(hl.$$.fragment,e),_(fl.$$.fragment,e),_(dl.$$.fragment,e),_(ml.$$.fragment,e),_(_l.$$.fragment,e),_(vl.$$.fragment,e),_(jl.$$.fragment,e),_(gl.$$.fragment,e),_(wl.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(zl.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Sl.$$.fragment,e),_(Cl.$$.fragment,e),_(xl.$$.fragment,e),_(Il.$$.fragment,e),_(Ul.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Zl.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Vl.$$.fragment,e),_(Yl.$$.fragment,e),_(Kl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(er.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(Ha.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(fr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(gr.$$.fragment,e),_(yr.$$.fragment,e),_(wr.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_(kr.$$.fragment,e),_(Sr.$$.fragment,e),_(Cr.$$.fragment,e),_(Ir.$$.fragment,e),_(Ur.$$.fragment,e),_(Gr.$$.fragment,e),_(Lr.$$.fragment,e),_(Hr.$$.fragment,e),_(Br.$$.fragment,e),_(Wr.$$.fragment,e),_(Vr.$$.fragment,e),_(Yr.$$.fragment,e),_(Kr.$$.fragment,e),_(Jr.$$.fragment,e),_(Qr.$$.fragment,e),_(ep.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(np.$$.fragment,e),p0=!0)},o(e){v(F.$$.fragment,e),v(Yn.$$.fragment,e),v(Kn.$$.fragment,e),v(Jn.$$.fragment,e),v(Xn.$$.fragment,e),v(so.$$.fragment,e),v(to.$$.fragment,e),v(ao.$$.fragment,e),v(oo.$$.fragment,e),v(lo.$$.fragment,e),v(ro.$$.fragment,e),v(io.$$.fragment,e),v(co.$$.fragment,e),v(ho.$$.fragment,e),v(mo.$$.fragment,e),v(vo.$$.fragment,e),v(jo.$$.fragment,e),v(yo.$$.fragment,e),v(qo.$$.fragment,e),v(Eo.$$.fragment,e),v($o.$$.fragment,e),v(ko.$$.fragment,e),v(Po.$$.fragment,e),v(zo.$$.fragment,e),v(Do.$$.fragment,e),v(Ao.$$.fragment,e),v(So.$$.fragment,e),v(xo.$$.fragment,e),v(Ro.$$.fragment,e),v(Io.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Wt.$$.fragment,e),v(Mo.$$.fragment,e),v(Bo.$$.fragment,e),v(Wo.$$.fragment,e),v(Fo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(ol.$$.fragment,e),v(ll.$$.fragment,e),v(ul.$$.fragment,e),v(hl.$$.fragment,e),v(fl.$$.fragment,e),v(dl.$$.fragment,e),v(ml.$$.fragment,e),v(_l.$$.fragment,e),v(vl.$$.fragment,e),v(jl.$$.fragment,e),v(gl.$$.fragment,e),v(wl.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(zl.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Sl.$$.fragment,e),v(Cl.$$.fragment,e),v(xl.$$.fragment,e),v(Il.$$.fragment,e),v(Ul.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Zl.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Vl.$$.fragment,e),v(Yl.$$.fragment,e),v(Kl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(er.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(Ha.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(fr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(gr.$$.fragment,e),v(yr.$$.fragment,e),v(wr.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v(kr.$$.fragment,e),v(Sr.$$.fragment,e),v(Cr.$$.fragment,e),v(Ir.$$.fragment,e),v(Ur.$$.fragment,e),v(Gr.$$.fragment,e),v(Lr.$$.fragment,e),v(Hr.$$.fragment,e),v(Br.$$.fragment,e),v(Wr.$$.fragment,e),v(Vr.$$.fragment,e),v(Yr.$$.fragment,e),v(Kr.$$.fragment,e),v(Jr.$$.fragment,e),v(Qr.$$.fragment,e),v(ep.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(np.$$.fragment,e),p0=!1},d(e){t(w),e&&t(M),e&&t(b),j(F),e&&t(ht),e&&t(V),e&&t(pj),e&&t(D),e&&t(ij),e&&t(ke),e&&t(uj),e&&t(bp),e&&t(cj),e&&t(qp),e&&t(hj),e&&t(ft),e&&t(fj),e&&t(dt),e&&t(dj),e&&t(Pp),e&&t(mj),e&&t(zp),e&&t(_j),e&&t(Dp),e&&t(vj),e&&t(Op),e&&t(jj),e&&t(Tp),e&&t(gj),e&&t(Sp),e&&t(yj),e&&t(Cp),e&&t(wj),e&&t(js),j(Yn),e&&t(bj),e&&t(xp),e&&t(qj),e&&t(gs),j(Kn),e&&t(Ej),e&&t(Rp),e&&t($j),j(Jn,e),e&&t(kj),e&&t(Pe),e&&t(Pj),j(Xn,e),e&&t(zj),e&&t(ze),e&&t(Dj),e&&t(vt),e&&t(Oj),e&&t(Up),e&&t(Tj),e&&t(Gp),e&&t(Aj),j(so,e),e&&t(Sj),e&&t(De),e&&t(Cj),e&&t(jt),e&&t(xj),j(to,e),e&&t(Rj),e&&t(ge),e&&t(Ij),e&&t(Lp),e&&t(Uj),j(ao,e),e&&t(Gj),e&&t(Oe),e&&t(Lj),e&&t(gt),e&&t(Mj),e&&t(Te),e&&t(Zj),e&&t(Mp),e&&t(Nj),j(oo,e),e&&t(Hj),e&&t(Zp),e&&t(Bj),j(lo,e),e&&t(Wj),e&&t(Np),e&&t(Fj),j(ro,e),e&&t(Vj),e&&t(yt),e&&t(Yj),e&&t(wt),e&&t(Kj),e&&t(bt),e&&t(Jj),e&&t(Hp),e&&t(Xj),e&&t(ys),j(io),e&&t(Qj),e&&t(Et),e&&t(eg),e&&t($t),e&&t(sg),e&&t(Wp),e&&t(tg),j(co,e),e&&t(ag),e&&t(Fp),e&&t(ng),j(ho,e),e&&t(og),e&&t(O),e&&t(lg),e&&t(J),e&&t(rg),e&&t(kt),e&&t(pg),j(mo,e),e&&t(ig),e&&t(Pt),e&&t(ug),e&&t(zt),e&&t(cg),e&&t(Vp),e&&t(hg),e&&t(bs),j(vo),e&&t(fg),e&&t(Ot),e&&t(dg),j(jo,e),e&&t(mg),e&&t(Ae),e&&t(_g),e&&t(Kp),e&&t(vg),e&&t(Tt),e&&t(jg),e&&t(Jp),e&&t(gg),j(yo,e),e&&t(yg),e&&t(Xp),e&&t(wg),e&&t(At),e&&t(bg),e&&t(Qp),e&&t(qg),e&&t(ei),e&&t(Eg),e&&t(si),j(qo),e&&t($g),e&&t(ti),e&&t(kg),e&&t(Es),j(Eo),e&&t(Pg),e&&t(Ct),e&&t(zg),e&&t(ai),e&&t(Dg),j($o,e),e&&t(Og),e&&t(xt),e&&t(Tg),e&&t(ni),e&&t(Ag),e&&t(oi),e&&t(Sg),j(ko,e),e&&t(Cg),e&&t(Se),e&&t(xg),j(Po,e),e&&t(Rg),e&&t(Rt),e&&t(Ig),j(zo,e),e&&t(Ug),e&&t(li),e&&t(Gg),e&&t(It),e&&t(Lg),e&&t(ri),e&&t(Mg),e&&t($s),j(Do),e&&t(Zg),e&&t(Gt),e&&t(Ng),e&&t(Lt),e&&t(Hg),j(Ao,e),e&&t(Bg),e&&t(Mt),e&&t(Wg),j(So,e),e&&t(Fg),e&&t(Zt),e&&t(Vg),e&&t(pi),e&&t(Yg),e&&t(X),e&&t(Kg),j(xo,e),e&&t(Jg),e&&t(Nt),e&&t(Xg),e&&t(ui),e&&t(Qg),e&&t(ks),j(Ro),e&&t(ey),e&&t(T),e&&t(sy),e&&t(di),e&&t(ty),j(Io,e),e&&t(ay),e&&t(mi),e&&t(ny),j(Uo,e),e&&t(oy),e&&t(_i),e&&t(ly),e&&t(Ps),j(Go),e&&t(ry),j(Wt,e),e&&t(py),e&&t(Ce),e&&t(iy),e&&t(Ft),e&&t(uy),e&&t(xe),e&&t(cy),e&&t(wi),e&&t(hy),e&&t(Vt),e&&t(fy),e&&t(Yt),e&&t(dy),e&&t(Q),e&&t(my),e&&t($i),e&&t(_y),e&&t(zs),j(Mo),e&&t(vy),e&&t(Zo),e&&t(jy),e&&t(Re),e&&t(gy),e&&t(Jt),e&&t(yy),e&&t(Pi),e&&t(wy),e&&t(zi),e&&t(by),e&&t(Ds),j(Bo),e&&t(qy),e&&t(Di),e&&t(Ey),j(Wo,e),e&&t($y),e&&t(Oi),e&&t(ky),e&&t(Ie),e&&t(Py),e&&t(Ue),e&&t(zy),j(Fo,e),e&&t(Dy),e&&t(Ti),e&&t(Oy),e&&t(Ai),e&&t(Ty),e&&t(Ts),j(Vo),e&&t(Ay),e&&t(Si),e&&t(Sy),j(Yo,e),e&&t(Cy),e&&t(N),e&&t(xy),e&&t(Ge),e&&t(Ry),e&&t(Ci),e&&t(Iy),e&&t(ea),e&&t(Uy),e&&t(S),e&&t(Gy),e&&t(we),e&&t(Ly),e&&t(xi),e&&t(My),e&&t(Le),e&&t(Zy),e&&t(Me),e&&t(Ny),e&&t(sl),e&&t(Hy),e&&t(ee),e&&t(By),e&&t(Ii),e&&t(Wy),e&&t(be),e&&t(Fy),e&&t(Ze),e&&t(Vy),e&&t(sa),e&&t(Yy),e&&t(Ui),e&&t(Ky),e&&t(As),j(ol),e&&t(Jy),e&&t(Gi),e&&t(Xy),e&&t(Li),e&&t(Qy),j(ll,e),e&&t(ew),e&&t(aa),e&&t(sw),e&&t(Ne),e&&t(tw),e&&t(na),e&&t(aw),e&&t(He),e&&t(nw),e&&t(Mi),e&&t(ow),e&&t(Ss),j(ul),e&&t(lw),e&&t(Zi),e&&t(rw),e&&t(Ni),e&&t(pw),e&&t(la),e&&t(iw),e&&t(Be),e&&t(uw),e&&t(Hi),e&&t(cw),e&&t(xs),j(hl),e&&t(hw),e&&t(pa),e&&t(fw),j(fl,e),e&&t(dw),e&&t(ia),e&&t(mw),j(dl,e),e&&t(_w),e&&t(Bi),e&&t(vw),e&&t(Rs),j(ml),e&&t(jw),e&&t(ca),e&&t(gw),j(_l,e),e&&t(yw),e&&t(ha),e&&t(ww),j(vl,e),e&&t(bw),e&&t(Is),j(jl),e&&t(qw),e&&t(da),e&&t(Ew),e&&t(Wi),e&&t($w),e&&t(ma),e&&t(kw),e&&t(Fi),e&&t(Pw),e&&t(Us),j(gl),e&&t(zw),e&&t(We),e&&t(Dw),e&&t(q),e&&t(Ow),e&&t(Fe),e&&t(Tw),j(wl,e),e&&t(Aw),e&&t(Yi),e&&t(Sw),e&&t(se),e&&t(Cw),e&&t(Ki),e&&t(xw),e&&t(Ji),e&&t(Rw),j(kl,e),e&&t(Iw),e&&t(va),e&&t(Uw),e&&t(Qi),e&&t(Gw),j(Pl,e),e&&t(Lw),e&&t(te),e&&t(Mw),e&&t(eu),e&&t(Zw),e&&t(Gs),j(zl),e&&t(Nw),e&&t(C),e&&t(Hw),e&&t(su),e&&t(Bw),e&&t(ga),e&&t(Ww),e&&t(P),e&&t(Fw),e&&t(Ye),e&&t(Vw),j(Tl,e),e&&t(Yw),e&&t(Ke),e&&t(Kw),e&&t(ae),e&&t(Jw),e&&t(nu),e&&t(Xw),j(Al,e),e&&t(Qw),e&&t(ba),e&&t(e2),e&&t(qa),e&&t(s2),j(Sl,e),e&&t(t2),e&&t(H),e&&t(a2),e&&t(lu),e&&t(n2),e&&t(Ls),j(Cl),e&&t(o2),e&&t(ru),e&&t(l2),e&&t($a),e&&t(r2),j(xl,e),e&&t(p2),e&&t(ka),e&&t(i2),e&&t(pu),e&&t(u2),e&&t(Ms),j(Il),e&&t(c2),e&&t(iu),e&&t(h2),e&&t(uu),e&&t(f2),j(Ul,e),e&&t(d2),e&&t(Qe),e&&t(m2),e&&t(za),e&&t(_2),e&&t(hu),e&&t(v2),j(Gl,e),e&&t(j2),e&&t(Da),e&&t(g2),e&&t(Oa),e&&t(y2),e&&t(du),e&&t(w2),j(Ml,e),e&&t(b2),e&&t(ne),e&&t(q2),e&&t(Ta),e&&t(E2),e&&t(_u),e&&t($2),j(Zl,e),e&&t(k2),e&&t(Aa),e&&t(P2),e&&t(Sa),e&&t(z2),e&&t(ju),e&&t(D2),e&&t(Zs),j(Hl),e&&t(O2),e&&t(gu),e&&t(T2),j(Bl,e),e&&t(A2),e&&t(x),e&&t(S2),e&&t(wu),e&&t(C2),j(Wl,e),e&&t(x2),e&&t(xa),e&&t(R2),e&&t(qu),e&&t(I2),e&&t(Ns),j(Fl),e&&t(U2),e&&t(Eu),e&&t(G2),j(Vl,e),e&&t(L2),e&&t(es),e&&t(M2),e&&t(ku),e&&t(Z2),j(Yl,e),e&&t(N2),e&&t(Ia),e&&t(H2),e&&t(zu),e&&t(B2),e&&t(Hs),j(Kl),e&&t(W2),e&&t(Du),e&&t(F2),j(Jl,e),e&&t(V2),e&&t(ss),e&&t(Y2),e&&t(Tu),e&&t(K2),j(Xl,e),e&&t(J2),e&&t(Ga),e&&t(X2),e&&t(Su),e&&t(Q2),e&&t(Bs),j(Ql),e&&t(eb),e&&t(Ma),e&&t(sb),e&&t(Cu),e&&t(tb),e&&t(Za),e&&t(ab),e&&t(B),e&&t(nb),j(er,e),e&&t(ob),e&&t(xu),e&&t(lb),e&&t(Na),e&&t(rb),e&&t(Ru),e&&t(pb),e&&t(Iu),e&&t(ib),e&&t(Uu),e&&t(ub),j(tr,e),e&&t(cb),e&&t(ts),e&&t(hb),j(ar,e),e&&t(fb),j(Ha,e),e&&t(db),e&&t(Ba),e&&t(mb),e&&t(Wa),e&&t(_b),j(nr,e),e&&t(vb),e&&t(Gu),e&&t(jb),e&&t(as),e&&t(gb),e&&t(Lu),e&&t(yb),j(or,e),e&&t(wb),e&&t(Fa),e&&t(bb),j(lr,e),e&&t(qb),e&&t(Va),e&&t(Eb),e&&t(Mu),e&&t($b),e&&t(rr),e&&t(kb),e&&t(ns),e&&t(Pb),e&&t(Zu),e&&t(zb),e&&t(Ws),j(pr),e&&t(Db),e&&t(Nu),e&&t(Ob),e&&t(Hu),e&&t(Tb),e&&t(Bu),e&&t(Ab),e&&t(Fs),j(ir),e&&t(Sb),e&&t(Ja),e&&t(Cb),j(ur,e),e&&t(xb),e&&t(Wu),e&&t(Rb),e&&t(k),e&&t(Ib),j(cr,e),e&&t(Ub),e&&t(Xa),e&&t(Gb),e&&t(Yu),e&&t(Lb),e&&t(Qa),e&&t(Mb),e&&t(oe),e&&t(Zb),e&&t(Vs),j(fr),e&&t(Nb),e&&t(dr),e&&t(Hb),e&&t(sn),e&&t(Bb),e&&t(Ju),e&&t(Wb),j(_r,e),e&&t(Fb),e&&t(os),e&&t(Vb),e&&t(Xu),e&&t(Yb),e&&t(Ys),j(vr),e&&t(Kb),e&&t(Qu),e&&t(Jb),e&&t(an),e&&t(Xb),j(jr,e),e&&t(Qb),e&&t(sc),e&&t(e3),e&&t(nn),e&&t(s3),j(gr,e),e&&t(t3),e&&t(tc),e&&t(a3),e&&t(ac),e&&t(n3),e&&t(Ks),j(yr),e&&t(o3),e&&t(nc),e&&t(l3),e&&t(oc),e&&t(r3),j(wr,e),e&&t(p3),e&&t(lc),e&&t(i3),e&&t(rc),e&&t(u3),e&&t(pc),e&&t(c3),e&&t(ic),e&&t(h3),j(br,e),e&&t(f3),e&&t(uc),e&&t(d3),e&&t(ln),e&&t(m3),e&&t(Js),j(Er),e&&t(_3),e&&t(cc),e&&t(v3),e&&t(hc),e&&t(j3),e&&t(R),j(kr),e&&t(g3),e&&t(_c),e&&t(y3),e&&t(pn),e&&t(w3),e&&t(Qs),j(Sr),e&&t(b3),e&&t(et),j(Cr),e&&t(q3),e&&t(I),e&&t(E3),e&&t(st),j(Ir),e&&t($3),e&&t(jc),e&&t(k3),e&&t(gc),e&&t(P3),j(Ur,e),e&&t(z3),e&&t(fn),e&&t(D3),j(Gr,e),e&&t(O3),e&&t(yc),e&&t(T3),e&&t(wc),e&&t(A3),e&&t(ls),e&&t(S3),e&&t(tt),j(Lr),e&&t(C3),e&&t(rs),e&&t(x3),e&&t(Ec),e&&t(R3),e&&t(nt),j(Hr),e&&t(I3),e&&t(le),e&&t(U3),e&&t(vn),e&&t(G3),e&&t(ps),e&&t(L3),e&&t(Oc),e&&t(M3),j(Br,e),e&&t(Z3),e&&t(Tc),e&&t(N3),j(Wr,e),e&&t(H3),e&&t(re),e&&t(B3),e&&t(ot),j(Vr),e&&t(W3),e&&t(E),j(Yr),j(Kr),j(Jr),j(Qr),j(ep),e&&t(F3),e&&t(it),j(sp),e&&t(V3),e&&t(qn),e&&t(Y3),e&&t(Rc),e&&t(K3),e&&t(Ic),e&&t(J3),e&&t(Uc),e&&t(X3),e&&t(En),e&&t(Q3),j(tp,e),e&&t(e0),e&&t($n),e&&t(s0),j(ap,e),e&&t(t0),e&&t(Gc),e&&t(a0),e&&t(ut),j(np),e&&t(n0),e&&t(ie),e&&t(o0),e&&t(Lc),e&&t(l0),e&&t(us),e&&t(r0),e&&t(cs)}}}const JV={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function XV(Zn,w,M){let{fw:b}=w;return Zn.$$set=$=>{"fw"in $&&M(0,b=$.fw)},[b]}class oY extends HV{constructor(w){super();BV(this,w,XV,KV,WV,{fw:0})}}export{oY as default,JV as metadata};
