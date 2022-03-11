import{S as gF,i as jF,s as yF,e as o,k as u,w as f,t as a,M as wF,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as g}from"../../chunks/vendor-329198bb.js";import{T as vF}from"../../chunks/Tip-39ae8a84.js";import{D as Cv}from"../../chunks/Docstring-88811472.js";import{C as j}from"../../chunks/CodeBlock-49151c5f.js";import{I as y}from"../../chunks/IconCopyLink-236b0ec7.js";import"../../chunks/CopyButton-970e2b07.js";function bF(xn){let w,L;return{c(){w=o("p"),L=a("This section is a must-read")},l(b){w=l(b,"P",{});var $=r(w);L=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,w,$),s(w,L)},d(b){b&&t(w)}}}function qF(xn){let w,L,b,$,fs,F,In,ds,ms,pt,V;return{c(){w=o("p"),L=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),fs=a(" was run, the "),F=o("code"),In=a("model"),ds=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ms=o("code"),pt=a("model.load_state_dict(state_dict)"),V=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(Y){w=l(Y,"P",{});var Z=r(w);L=n(Z,"Note, that once "),b=l(Z,"CODE",{});var rp=r(b);$=n(rp,"load_state_dict_from_zero_checkpoint"),rp.forEach(t),fs=n(Z," was run, the "),F=l(Z,"CODE",{});var $e=r(F);In=n($e,"model"),$e.forEach(t),ds=n(Z,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ms=l(Z,"CODE",{});var pp=r(ms);pt=n(pp,"model.load_state_dict(state_dict)"),pp.forEach(t),V=n(Z,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),Z.forEach(t)},m(Y,Z){i(Y,w,Z),s(w,L),s(w,b),s(b,$),s(w,fs),s(w,F),s(F,In),s(w,ds),s(w,ms),s(ms,pt),s(w,V)},d(Y){Y&&t(w)}}}function EF(xn){let w,L,b,$,fs,F,In,ds,ms,pt,V,Y,Z,rp,$e,pp,QE,xv,D,mh,e0,s0,_h,t0,a0,vh,n0,o0,gh,l0,r0,jh,p0,i0,yh,u0,Iv,ke,c0,Rn,h0,f0,Un,d0,m0,Rv,ip,_0,Uv,up,v0,Gv,it,g0,Gn,j0,y0,Mv,ut,Mn,w0,cp,b0,q0,E0,M,$0,hp,k0,P0,wh,z0,D0,bh,O0,T0,qh,A0,S0,fp,C0,x0,Lv,dp,I0,Zv,mp,R0,Nv,_p,Eh,U0,Bv,vp,G0,Hv,gp,Ln,M0,jp,L0,Z0,Wv,yp,N0,Fv,wp,Vv,_s,ct,$h,Zn,B0,kh,H0,Yv,bp,Kv,vs,ht,Ph,Nn,W0,zh,F0,Jv,qp,V0,Xv,Bn,Qv,Pe,Y0,Dh,K0,J0,Oh,X0,Q0,eg,Hn,sg,ze,e$,Wn,s$,t$,Fn,a$,n$,tg,ft,o$,Ep,l$,r$,ag,$p,p$,ng,kp,i$,og,Vn,lg,De,u$,Th,c$,h$,Ah,f$,d$,rg,dt,m$,Sh,_$,v$,pg,Yn,ig,je,g$,Ch,j$,y$,xh,w$,b$,Ih,q$,ug,Pp,E$,cg,Kn,hg,Oe,$$,Rh,k$,P$,Uh,z$,D$,fg,mt,O$,Gh,T$,A$,dg,Te,S$,Mh,C$,x$,Jn,I$,R$,mg,zp,U$,_g,Xn,vg,Dp,G$,gg,Qn,jg,Op,M$,yg,eo,wg,_t,L$,Lh,Z$,N$,bg,vt,B$,Zh,H$,W$,qg,gt,F$,so,V$,Y$,Eg,Tp,$g,gs,jt,Nh,to,K$,Bh,J$,kg,yt,X$,Ap,Q$,e5,Pg,wt,js,s5,Hh,t5,a5,Wh,n5,o5,l5,ye,r5,Fh,p5,i5,Vh,u5,c5,ao,h5,f5,zg,Sp,d5,Dg,no,Og,Cp,m5,Tg,oo,Ag,O,_5,Yh,v5,g5,Kh,j5,y5,Jh,w5,b5,Xh,q5,E5,lo,$5,k5,Sg,J,P5,Qh,z5,D5,ef,O5,T5,sf,A5,S5,Cg,bt,C5,tf,x5,I5,xg,ro,Ig,qt,R5,af,U5,G5,Rg,Et,M5,po,L5,Z5,Ug,xp,Gg,ys,$t,nf,io,N5,of,B5,Mg,kt,H5,Ip,W5,F5,Lg,uo,Zg,Ae,V5,lf,Y5,K5,co,J5,X5,Ng,Rp,Q5,Bg,Pt,rf,e6,s6,pf,t6,Hg,Up,a6,Wg,ho,Fg,Gp,n6,Vg,zt,o6,fo,l6,r6,Yg,Mp,p6,Kg,Lp,i6,Jg,Zp,ws,mo,u6,uf,c6,h6,f6,_o,d6,cf,m6,Xg,Np,Qg,bs,Dt,hf,vo,_6,ff,v6,ej,Ot,g6,df,j6,y6,sj,Bp,w6,tj,go,aj,Tt,b6,mf,q6,E6,nj,Hp,$6,oj,Wp,k6,lj,jo,rj,Se,P6,_f,z6,D6,vf,O6,T6,pj,yo,ij,At,A6,gf,S6,C6,uj,wo,cj,Fp,x6,hj,St,I6,jf,R6,U6,fj,Vp,dj,qs,Ct,yf,bo,G6,wf,M6,mj,xt,L6,qo,Z6,N6,_j,It,B6,Eo,H6,W6,vj,$o,gj,Rt,F6,bf,V6,Y6,jj,ko,yj,Ut,K6,Po,J6,X6,wj,Yp,Q6,bj,X,e4,qf,s4,t4,Ef,a4,n4,$f,o4,l4,qj,zo,Ej,Gt,r4,Kp,p4,i4,$j,Jp,kj,Es,Mt,kf,Do,u4,Pf,c4,Pj,T,h4,Xp,f4,d4,Qp,m4,_4,zf,v4,g4,Df,j4,y4,ei,w4,b4,zj,si,q4,Dj,Oo,Oj,ti,E4,Tj,To,Aj,ai,Sj,$s,Lt,Of,Ao,$4,Tf,k4,Cj,Zt,xj,Ce,P4,ni,z4,D4,oi,O4,T4,Ij,Nt,A4,li,S4,C4,Rj,xe,x4,Af,I4,R4,ri,U4,G4,Uj,pi,M4,Gj,Bt,L4,ii,Z4,N4,Mj,Ht,Sf,B4,H4,So,W4,ui,F4,V4,Lj,Q,Y4,Cf,K4,J4,ci,X4,Q4,xf,e8,s8,Zj,hi,Nj,ks,Wt,If,Co,t8,Rf,a8,Bj,xo,Io,n8,o8,Hj,Ie,l8,Uf,r8,p8,Ro,i8,u8,Wj,Ft,c8,fi,h8,f8,Fj,di,d8,Vj,mi,Yj,Ps,Vt,Gf,Uo,m8,Mf,_8,Kj,_i,v8,Jj,Go,Xj,vi,Lf,g8,Qj,Re,zs,j8,Zf,y8,w8,Nf,b8,q8,E8,A,Bf,$8,k8,Hf,P8,z8,Wf,D8,O8,Ff,T8,A8,Vf,S8,C8,Yf,x8,I8,R8,Kf,U8,ey,gi,sy,Ds,Yt,Jf,Mo,G8,Xf,M8,ty,ji,L8,ay,Lo,ny,N,Z8,Qf,N8,B8,ed,H8,W8,sd,F8,V8,td,Y8,K8,oy,Ue,J8,ad,X8,Q8,nd,e7,s7,ly,yi,od,t7,ry,Kt,Zo,ld,a7,n7,rd,o7,l7,No,pd,r7,p7,id,i7,py,S,u7,ud,c7,h7,cd,f7,d7,hd,m7,_7,fd,v7,g7,dd,j7,y7,iy,we,md,w7,b7,_d,q7,E7,vd,$7,k7,uy,wi,P7,cy,Ge,Bo,gd,z7,D7,jd,O7,T7,Ho,yd,A7,S7,wd,C7,x7,Wo,bd,I7,R7,qd,U7,hy,Me,G7,Ed,M7,L7,bi,Z7,N7,fy,Fo,$d,B7,H7,dy,ee,W7,kd,F7,V7,Pd,Y7,K7,zd,J7,X7,my,qi,Vo,Dd,Q7,e9,Od,s9,_y,be,Td,t9,a9,Ad,n9,o9,Sd,l9,r9,vy,Le,p9,Cd,i9,u9,xd,c9,h9,gy,Jt,Yo,f9,Id,d9,m9,_9,Ko,v9,Rd,g9,j9,jy,Ei,yy,Os,Xt,Ud,Jo,y9,Gd,w9,wy,$i,b9,by,ki,q9,qy,Xo,Ey,Qt,E9,Md,$9,k9,$y,Ze,P9,Qo,z9,D9,el,O9,T9,ky,ea,A9,Ld,S9,C9,Py,Ne,x9,Zd,I9,R9,sl,U9,G9,zy,Pi,Dy,Ts,sa,Nd,tl,M9,Bd,L9,Oy,zi,Z9,Ty,Di,N9,Ay,ta,As,B9,Hd,H9,W9,Wd,F9,V9,Y9,al,K9,Fd,J9,X9,Sy,Be,Q9,Vd,ek,sk,Yd,tk,ak,Cy,Oi,xy,Ss,aa,Kd,nl,nk,Jd,ok,Iy,na,lk,Xd,rk,pk,Ry,ol,Uy,oa,ik,Qd,uk,ck,Gy,ll,My,Ti,Ly,Cs,la,em,rl,hk,sm,fk,Zy,ra,dk,tm,mk,_k,Ny,pl,By,pa,vk,am,gk,jk,Hy,il,Wy,xs,ia,nm,ul,yk,om,wk,Fy,ua,bk,lm,qk,Ek,Vy,Ai,$k,Yy,ca,kk,rm,Pk,zk,Ky,Si,Jy,Is,ha,pm,cl,Dk,im,Ok,Xy,He,Tk,um,Ak,Sk,hl,Ck,xk,Qy,q,Ik,cm,Rk,Uk,Ci,Gk,Mk,hm,Lk,Zk,fm,Nk,Bk,dm,Hk,Wk,mm,Fk,Vk,_m,Yk,Kk,vm,Jk,Xk,ew,We,Qk,gm,eP,sP,jm,tP,aP,sw,fl,tw,xi,nP,aw,se,dl,ym,oP,lP,wm,rP,pP,ml,bm,iP,uP,qm,cP,hP,_l,Em,fP,dP,$m,mP,_P,vl,km,vP,gP,Pm,jP,nw,Ii,yP,ow,Ri,wP,lw,gl,rw,fa,bP,Ui,qP,EP,pw,Gi,$P,iw,jl,uw,te,kP,zm,PP,zP,Dm,DP,OP,Om,TP,AP,cw,Mi,hw,Rs,da,Tm,yl,SP,Am,CP,fw,C,xP,Sm,IP,RP,Cm,UP,GP,xm,MP,LP,Im,ZP,NP,wl,BP,HP,dw,Li,WP,mw,ma,bl,Rm,FP,VP,Um,YP,KP,Fe,Gm,JP,XP,Mm,QP,ez,Lm,sz,tz,_w,P,az,Zm,nz,oz,Zi,lz,rz,Nm,pz,iz,Bm,uz,cz,Hm,hz,fz,Wm,dz,mz,vw,Ve,_z,Fm,vz,gz,Vm,jz,yz,gw,ql,jw,Ye,wz,Ym,bz,qz,Ni,Ez,$z,yw,ae,_a,Km,kz,Pz,Jm,zz,Dz,Oz,va,Xm,Tz,Az,Qm,Sz,Cz,xz,Ke,e_,Iz,Rz,s_,Uz,Gz,t_,Mz,Lz,Zz,Je,a_,Nz,Bz,n_,Hz,Wz,o_,Fz,Vz,ww,Bi,Yz,bw,El,qw,ga,Kz,Hi,Jz,Xz,Ew,ja,Qz,l_,eD,sD,$w,$l,kw,B,tD,r_,aD,nD,p_,oD,lD,i_,rD,pD,u_,iD,uD,Pw,Wi,zw,Us,ya,c_,kl,cD,h_,hD,Dw,Fi,fD,Ow,wa,dD,f_,mD,_D,Tw,Pl,Aw,ba,vD,zl,gD,jD,Sw,Vi,Cw,Gs,qa,d_,Dl,yD,m_,wD,xw,Yi,bD,Iw,Ki,qD,Rw,Ol,Uw,Xe,ED,Ji,$D,kD,__,PD,zD,Gw,Ea,DD,v_,OD,TD,Mw,Xi,AD,Lw,Tl,Zw,$a,SD,Qi,CD,xD,Nw,ka,ID,Al,RD,UD,Bw,eu,GD,Hw,Sl,Ww,ne,MD,su,LD,ZD,g_,ND,BD,j_,HD,WD,Fw,Pa,FD,y_,VD,YD,Vw,tu,KD,Yw,Cl,Kw,za,JD,au,XD,QD,Jw,Da,eO,xl,sO,tO,Xw,nu,Qw,Ms,Oa,w_,Il,aO,b_,nO,e2,ou,oO,s2,Rl,t2,x,lO,lu,rO,pO,q_,iO,uO,E_,cO,hO,$_,fO,dO,k_,mO,_O,a2,ru,vO,n2,Ul,o2,Ta,gO,pu,jO,yO,l2,iu,r2,Ls,Aa,P_,Gl,wO,z_,bO,p2,uu,qO,i2,Ml,u2,Qe,EO,cu,$O,kO,D_,PO,zO,c2,hu,DO,h2,Ll,f2,Sa,OO,fu,TO,AO,d2,du,m2,Zs,Ca,O_,Zl,SO,T_,CO,_2,mu,xO,v2,Nl,g2,es,IO,_u,RO,UO,A_,GO,MO,j2,vu,LO,y2,Bl,w2,xa,ZO,gu,NO,BO,b2,ju,q2,Ns,Ia,S_,Hl,HO,C_,WO,E2,Ra,FO,x_,VO,YO,$2,yu,I_,KO,k2,Ua,JO,R_,XO,QO,P2,H,eT,U_,sT,tT,G_,aT,nT,M_,oT,lT,L_,rT,pT,z2,Wl,D2,wu,Z_,iT,O2,Ga,uT,Fl,cT,hT,T2,bu,N_,fT,A2,qu,dT,S2,Eu,mT,C2,Vl,x2,ss,_T,B_,vT,gT,H_,jT,yT,I2,Yl,R2,Ma,U2,La,wT,W_,bT,qT,G2,Za,ET,F_,$T,kT,M2,Kl,L2,$u,V_,PT,Z2,ts,zT,Y_,DT,OT,K_,TT,AT,N2,ku,ST,B2,Jl,H2,Na,CT,J_,xT,IT,W2,Xl,F2,Ba,RT,X_,UT,GT,V2,Pu,MT,Y2,Ql,Q_,LT,ZT,K2,as,NT,e1,BT,HT,s1,WT,FT,J2,zu,VT,X2,Bs,Ha,t1,er,YT,a1,KT,Q2,Du,JT,eb,Ou,XT,sb,Tu,QT,tb,Hs,Wa,n1,sr,eA,o1,sA,ab,Fa,tA,l1,aA,nA,nb,tr,ob,Au,oA,lb,k,lA,r1,rA,pA,p1,iA,uA,i1,cA,hA,Su,fA,dA,Cu,mA,_A,u1,vA,gA,c1,jA,yA,rb,ar,pb,Va,wA,h1,bA,qA,ib,xu,EA,ub,Ya,$A,nr,kA,PA,cb,oe,zA,f1,DA,OA,d1,TA,AA,Iu,SA,CA,hb,Ws,Ka,m1,or,xA,_1,IA,fb,lr,RA,rr,UA,db,Ja,GA,v1,MA,LA,mb,Ru,ZA,_b,pr,vb,ns,NA,g1,BA,HA,j1,WA,FA,gb,Uu,jb,Fs,Xa,y1,ir,VA,w1,YA,yb,Gu,KA,wb,Qa,JA,Mu,XA,QA,bb,ur,qb,Lu,eS,Eb,en,sS,b1,tS,aS,$b,cr,kb,Zu,nS,Pb,Nu,oS,zb,Vs,sn,q1,hr,lS,E1,rS,Db,Bu,pS,Ob,Hu,iS,Tb,fr,Ab,Wu,uS,Sb,Fu,cS,Cb,Vu,hS,xb,Yu,fS,Ib,dr,Rb,Ku,dS,Ub,tn,mS,mr,_S,vS,Gb,Ys,an,$1,_r,gS,k1,jS,Mb,Ju,yS,Lb,Xu,wS,Zb,I,P1,z1,bS,qS,D1,qe,ES,Qu,$S,kS,ec,PS,zS,sc,DS,OS,TS,vr,O1,AS,SS,gr,CS,T1,jr,xS,yr,IS,RS,US,A1,S1,GS,MS,C1,wr,LS,br,ZS,NS,Nb,tc,BS,Bb,nn,Ks,x1,HS,WS,I1,FS,VS,R1,YS,KS,U1,qr,JS,Er,XS,QS,Hb,Js,on,G1,$r,eC,M1,sC,Wb,ac,nc,L1,tC,aC,Fb,R,nC,Z1,oC,lC,N1,rC,pC,B1,iC,uC,H1,cC,hC,kr,fC,dC,Vb,Xs,ln,W1,Pr,mC,F1,_C,Yb,os,rn,vC,oc,gC,jC,V1,yC,wC,zr,bC,Dr,qC,EC,$C,Qs,kC,lc,PC,zC,Or,DC,OC,Kb,rc,Jb,et,pn,Y1,Tr,TC,K1,AC,Xb,le,SC,pc,CC,xC,ic,IC,RC,J1,UC,GC,Qb,un,MC,uc,LC,ZC,e3,ls,NC,cc,BC,HC,hc,WC,FC,s3,fc,VC,t3,Ar,a3,dc,YC,n3,Sr,o3,re,KC,mc,JC,XC,Cr,QC,ex,X1,sx,tx,l3,st,cn,Q1,xr,ax,ev,nx,r3,E,Ir,ox,sv,lx,rx,Ee,px,tv,ix,ux,av,cx,hx,nv,fx,dx,mx,pe,_c,_x,vx,ov,gx,jx,vc,yx,wx,lv,bx,qx,Ex,rs,Rr,$x,rv,kx,Px,tt,zx,pv,Dx,Ox,iv,Tx,Ax,Sx,hn,Ur,Cx,Gr,xx,uv,Ix,Rx,Ux,fn,Mr,Gx,at,Mx,cv,Lx,Zx,hv,Nx,Bx,Hx,dn,Lr,Wx,nt,Fx,fv,Vx,Yx,dv,Kx,Jx,p3,ot,mn,mv,Zr,Xx,_v,Qx,i3,_n,eI,gc,sI,tI,u3,jc,aI,c3,yc,nI,h3,wc,oI,f3,vn,vv,lI,rI,gv,pI,d3,Nr,m3,gn,iI,jv,uI,cI,_3,Br,v3,bc,hI,g3,lt,jn,yv,Hr,fI,wv,dI,j3,ie,bv,Wr,mI,_I,qv,Fr,vI,gI,Ev,Vr,jI,yI,$v,Yr,wI,y3,qc,bI,w3,ps,kv,Kr,qI,EI,Pv,Jr,$I,kI,zv,Xr,PI,b3,is,zI,Ec,DI,OI,Qr,TI,AI,q3;return F=new y({}),Zn=new y({}),Nn=new y({}),Bn=new j({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),Hn=new j({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),Vn=new j({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),Yn=new j({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),Kn=new j({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),Xn=new j({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),Qn=new j({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),eo=new j({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),to=new y({}),no=new j({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),oo=new j({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),ro=new j({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),io=new y({}),uo=new j({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),ho=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),_o=new j({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),vo=new y({}),go=new j({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
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
trainer.train()`}}),jo=new j({props:{code:`%%bash
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
EOT`}}),yo=new j({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),wo=new j({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),bo=new y({}),$o=new j({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),ko=new j({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),zo=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Do=new y({}),Oo=new j({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),To=new j({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Ao=new y({}),Zt=new vF({props:{warning:"&lcub;true}",$$slots:{default:[bF]},$$scope:{ctx:xn}}}),Co=new y({}),Uo=new y({}),Go=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Mo=new y({}),Lo=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Jo=new y({}),Xo=new j({props:{code:`{
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
        }
        "aio": {
            "block_size": 262144,
            "queue_depth": 32,
            "thread_count": 1,
            "single_submit": false,
            "overlap_events": true
        }
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
        <span class="hljs-punctuation">}</span>
        <span class="hljs-attr">&quot;aio&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;block_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">262144</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;queue_depth&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">32</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;thread_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;single_submit&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;overlap_events&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span>
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
<span class="hljs-punctuation">}</span>`}}),tl=new y({}),nl=new y({}),ol=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ll=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),rl=new y({}),pl=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),il=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ul=new y({}),cl=new y({}),fl=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),gl=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),jl=new j({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),yl=new y({}),ql=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),El=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),$l=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),kl=new y({}),Pl=new j({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Dl=new y({}),Ol=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Tl=new j({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Sl=new j({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Cl=new j({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Il=new y({}),Rl=new j({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Ul=new j({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),Gl=new y({}),Ml=new j({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Ll=new j({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),Zl=new y({}),Nl=new j({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Bl=new j({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),Hl=new y({}),Wl=new j({props:{code:`{
    "zero_optimization": {
        "stage3_gather_fp16_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Vl=new j({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Yl=new j({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ma=new vF({props:{$$slots:{default:[qF]},$$scope:{ctx:xn}}}),Kl=new j({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),Jl=new j({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),Xl=new j({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),er=new y({}),sr=new y({}),tr=new j({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),ar=new j({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),or=new y({}),pr=new j({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),ir=new y({}),ur=new j({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),cr=new j({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),hr=new y({}),fr=new j({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),dr=new j({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
`}}),_r=new y({}),gr=new j({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),$r=new y({}),Pr=new y({}),Tr=new y({}),Ar=new j({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),Sr=new j({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),xr=new y({}),Ir=new Cv({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),Rr=new Cv({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L114"}}),Ur=new Cv({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L105"}}),Mr=new Cv({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L146"}}),Lr=new Cv({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/deepspeed.py#L137"}}),Zr=new y({}),Nr=new j({props:{code:`#!/usr/bin/env python

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),Br=new j({props:{code:`$ deepspeed --num_gpus 2 t0.py
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
  <span class="hljs-keyword">out</span>=negative`}}),Hr=new y({}),{c(){w=o("meta"),L=u(),b=o("h1"),$=o("a"),fs=o("span"),f(F.$$.fragment),In=u(),ds=o("span"),ms=a("DeepSpeed Integration"),pt=u(),V=o("p"),Y=o("a"),Z=a("DeepSpeed"),rp=a(" implements everything described in the "),$e=o("a"),pp=a("ZeRO paper"),QE=a(". Currently it provides full support for:"),xv=u(),D=o("ol"),mh=o("li"),e0=a("Optimizer state partitioning (ZeRO stage 1)"),s0=u(),_h=o("li"),t0=a("Gradient partitioning (ZeRO stage 2)"),a0=u(),vh=o("li"),n0=a("Parameter partitioning (ZeRO stage 3)"),o0=u(),gh=o("li"),l0=a("Custom mixed precision training handling"),r0=u(),jh=o("li"),p0=a("A range of fast CUDA-extension-based optimizers"),i0=u(),yh=o("li"),u0=a("ZeRO-Offload to CPU and NVMe"),Iv=u(),ke=o("p"),c0=a("ZeRO-Offload has its own dedicated paper: "),Rn=o("a"),h0=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),f0=a(". And NVMe-support is described in the paper "),Un=o("a"),d0=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),m0=a("."),Rv=u(),ip=o("p"),_0=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Uv=u(),up=o("p"),v0=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Gv=u(),it=o("p"),g0=a("\u{1F917} Transformers integrates "),Gn=o("a"),j0=a("DeepSpeed"),y0=a(" via 2 options:"),Mv=u(),ut=o("ol"),Mn=o("li"),w0=a("Integration of the core DeepSpeed features via "),cp=o("a"),b0=a("Trainer"),q0=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),E0=u(),M=o("li"),$0=a("If you don\u2019t use "),hp=o("a"),k0=a("Trainer"),P0=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),wh=o("code"),z0=a("from_pretrained"),D0=a(" and "),bh=o("code"),O0=a("from_config"),T0=a(` include integration of essential
parts of DeepSpeed like `),qh=o("code"),A0=a("zero.Init"),S0=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),fp=o("a"),C0=a("deepspeed-non-trainer-integration"),x0=a("."),Lv=u(),dp=o("p"),I0=a("What is integrated:"),Zv=u(),mp=o("p"),R0=a("Training:"),Nv=u(),_p=o("ol"),Eh=o("li"),U0=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Bv=u(),vp=o("p"),G0=a("Inference:"),Hv=u(),gp=o("ol"),Ln=o("li"),M0=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),jp=o("a"),L0=a("deepspeed-zero-inference"),Z0=a("."),Wv=u(),yp=o("p"),N0=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),Fv=u(),wp=o("a"),Vv=u(),_s=o("h2"),ct=o("a"),$h=o("span"),f(Zn.$$.fragment),B0=u(),kh=o("span"),H0=a("Trainer Deepspeed Integration"),Yv=u(),bp=o("a"),Kv=u(),vs=o("h3"),ht=o("a"),Ph=o("span"),f(Nn.$$.fragment),W0=u(),zh=o("span"),F0=a("Installation"),Jv=u(),qp=o("p"),V0=a("Install the library via pypi:"),Xv=u(),f(Bn.$$.fragment),Qv=u(),Pe=o("p"),Y0=a("or via "),Dh=o("code"),K0=a("transformers"),J0=a("\u2019 "),Oh=o("code"),X0=a("extras"),Q0=a(":"),eg=u(),f(Hn.$$.fragment),sg=u(),ze=o("p"),e$=a("or find more details on "),Wn=o("a"),s$=a("the DeepSpeed\u2019s GitHub page"),t$=a(` and
`),Fn=o("a"),a$=a("advanced install"),n$=a("."),tg=u(),ft=o("p"),o$=a("If you\u2019re still struggling with the build, first make sure to read "),Ep=o("a"),l$=a("zero-install-notes"),r$=a("."),ag=u(),$p=o("p"),p$=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),ng=u(),kp=o("p"),i$=a("To make a local build for DeepSpeed:"),og=u(),f(Vn.$$.fragment),lg=u(),De=o("p"),u$=a("If you intend to use NVMe offload you will also need to include "),Th=o("code"),c$=a("DS_BUILD_AIO=1"),h$=a(` in the instructions above (and also
install `),Ah=o("em"),f$=a("libaio-dev"),d$=a(" system-wide)."),rg=u(),dt=o("p"),m$=a("Edit "),Sh=o("code"),_$=a("TORCH_CUDA_ARCH_LIST"),v$=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),pg=u(),f(Yn.$$.fragment),ig=u(),je=o("p"),g$=a("So if you get "),Ch=o("code"),j$=a("8, 6"),y$=a(", then use "),xh=o("code"),w$=a('TORCH_CUDA_ARCH_LIST="8.6"'),b$=a(`. If you have multiple different cards, you can list all
of them like so `),Ih=o("code"),q$=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),ug=u(),Pp=o("p"),E$=a("If you need to use the same setup on multiple machines, make a binary wheel:"),cg=u(),f(Kn.$$.fragment),hg=u(),Oe=o("p"),$$=a("it will generate something like "),Rh=o("code"),k$=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),P$=a(` which now you can install
as `),Uh=o("code"),z$=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),D$=a(" locally or on any other machine."),fg=u(),mt=o("p"),O$=a("Again, remember to ensure to adjust "),Gh=o("code"),T$=a("TORCH_CUDA_ARCH_LIST"),A$=a(" to the target architectures."),dg=u(),Te=o("p"),S$=a("You can find the complete list of NVIDIA GPUs and their corresponding "),Mh=o("strong"),C$=a("Compute Capabilities"),x$=a(` (same as arch in this
context) `),Jn=o("a"),I$=a("here"),R$=a("."),mg=u(),zp=o("p"),U$=a("You can check the archs pytorch was built with using:"),_g=u(),f(Xn.$$.fragment),vg=u(),Dp=o("p"),G$=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),gg=u(),f(Qn.$$.fragment),jg=u(),Op=o("p"),M$=a("If the output is:"),yg=u(),f(eo.$$.fragment),wg=u(),_t=o("p"),L$=a("then you know that this card\u2019s arch is "),Lh=o("code"),Z$=a("8.6"),N$=a("."),bg=u(),vt=o("p"),B$=a("You can also leave "),Zh=o("code"),H$=a("TORCH_CUDA_ARCH_LIST"),W$=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),qg=u(),gt=o("p"),F$=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),so=o("a"),V$=a("Deepspeed"),Y$=a(","),Eg=u(),Tp=o("a"),$g=u(),gs=o("h3"),jt=o("a"),Nh=o("span"),f(to.$$.fragment),K$=u(),Bh=o("span"),J$=a("Deployment with multiple GPUs"),kg=u(),yt=o("p"),X$=a("To deploy this feature with multiple GPUs adjust the "),Ap=o("a"),Q$=a("Trainer"),e5=a(` command line arguments as
following:`),Pg=u(),wt=o("ol"),js=o("li"),s5=a("replace "),Hh=o("code"),t5=a("python -m torch.distributed.launch"),a5=a(" with "),Wh=o("code"),n5=a("deepspeed"),o5=a("."),l5=u(),ye=o("li"),r5=a("add a new argument "),Fh=o("code"),p5=a("--deepspeed ds_config.json"),i5=a(", where "),Vh=o("code"),u5=a("ds_config.json"),c5=a(` is the DeepSpeed configuration file as
documented `),ao=o("a"),h5=a("here"),f5=a(". The file naming is up to you."),zg=u(),Sp=o("p"),d5=a("Therefore, if your original command line looked as follows:"),Dg=u(),f(no.$$.fragment),Og=u(),Cp=o("p"),m5=a("Now it should be:"),Tg=u(),f(oo.$$.fragment),Ag=u(),O=o("p"),_5=a("Unlike, "),Yh=o("code"),v5=a("torch.distributed.launch"),g5=a(" where you have to specify how many GPUs to use with "),Kh=o("code"),j5=a("--nproc_per_node"),y5=a(`, with the
`),Jh=o("code"),w5=a("deepspeed"),b5=a(" launcher you don\u2019t have to use the corresponding "),Xh=o("code"),q5=a("--num_gpus"),E5=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),lo=o("a"),$5=a("here"),k5=a("."),Sg=u(),J=o("p"),P5=a("In fact, you can continue using "),Qh=o("code"),z5=a("-m torch.distributed.launch"),D5=a(` with DeepSpeed as long as you don\u2019t need to use
`),ef=o("code"),O5=a("deepspeed"),T5=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),sf=o("code"),A5=a("deepspeed"),S5=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Cg=u(),bt=o("p"),C5=a("Here is an example of running "),tf=o("code"),x5=a("run_translation.py"),I5=a(" under DeepSpeed deploying all available GPUs:"),xg=u(),f(ro.$$.fragment),Ig=u(),qt=o("p"),R5=a("Note that in the DeepSpeed documentation you are likely to see "),af=o("code"),U5=a("--deepspeed --deepspeed_config ds_config.json"),G5=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Rg=u(),Et=o("p"),M5=a("For some practical usage examples, please, see this "),po=o("a"),L5=a("post"),Z5=a("."),Ug=u(),xp=o("a"),Gg=u(),ys=o("h3"),$t=o("a"),nf=o("span"),f(io.$$.fragment),N5=u(),of=o("span"),B5=a("Deployment with one GPU"),Mg=u(),kt=o("p"),H5=a("To deploy DeepSpeed with one GPU adjust the "),Ip=o("a"),W5=a("Trainer"),F5=a(" command line arguments as follows:"),Lg=u(),f(uo.$$.fragment),Zg=u(),Ae=o("p"),V5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),lf=o("code"),Y5=a("--num_gpus=1"),K5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),co=o("a"),J5=a("documentation"),X5=a(" discusses the launcher options."),Ng=u(),Rp=o("p"),Q5=a("Why would you want to use DeepSpeed with just one GPU?"),Bg=u(),Pt=o("ol"),rf=o("li"),e6=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),s6=u(),pf=o("li"),t6=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),Hg=u(),Up=o("p"),a6=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),Wg=u(),f(ho.$$.fragment),Fg=u(),Gp=o("p"),n6=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),Vg=u(),zt=o("p"),o6=a("For a practical usage example of this type of deployment, please, see this "),fo=o("a"),l6=a("post"),r6=a("."),Yg=u(),Mp=o("p"),p6=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),Kg=u(),Lp=o("p"),i6=a("Notes:"),Jg=u(),Zp=o("ul"),ws=o("li"),mo=o("p"),u6=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),uf=o("code"),c6=a("CUDA_VISIBLE_DEVICES"),h6=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),f6=u(),f(_o.$$.fragment),d6=u(),cf=o("p"),m6=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),Xg=u(),Np=o("a"),Qg=u(),bs=o("h3"),Dt=o("a"),hf=o("span"),f(vo.$$.fragment),_6=u(),ff=o("span"),v6=a("Deployment in Notebooks"),ej=u(),Ot=o("p"),g6=a("The problem with running notebook cells as a script is that there is no normal "),df=o("code"),j6=a("deepspeed"),y6=a(` launcher to rely on, so
under certain setups we have to emulate it.`),sj=u(),Bp=o("p"),w6=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),tj=u(),f(go.$$.fragment),aj=u(),Tt=o("p"),b6=a("Note: "),mf=o("code"),q6=a("..."),E6=a(" stands for the normal arguments that you\u2019d pass to the functions."),nj=u(),Hp=o("p"),$6=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),oj=u(),Wp=o("p"),k6=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),lj=u(),f(jo.$$.fragment),rj=u(),Se=o("p"),P6=a("If the training script is in a normal file and not in the notebook cells, you can launch "),_f=o("code"),z6=a("deepspeed"),D6=a(` normally via
shell from a cell. For example, to use `),vf=o("code"),O6=a("run_translation.py"),T6=a(" you would launch it with:"),pj=u(),f(yo.$$.fragment),ij=u(),At=o("p"),A6=a("or with "),gf=o("code"),S6=a("%%bash"),C6=a(" magic, where you can write a multi-line code for the shell program to run:"),uj=u(),f(wo.$$.fragment),cj=u(),Fp=o("p"),x6=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),hj=u(),St=o("p"),I6=a("Note: While "),jf=o("code"),R6=a("%%bash"),U6=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),fj=u(),Vp=o("a"),dj=u(),qs=o("h3"),Ct=o("a"),yf=o("span"),f(bo.$$.fragment),G6=u(),wf=o("span"),M6=a("Configuration"),mj=u(),xt=o("p"),L6=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),qo=o("a"),Z6=a("following documentation"),N6=a("."),_j=u(),It=o("p"),B6=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Eo=o("a"),H6=a(`the DeepSpeedExamples
repo`),W6=a(":"),vj=u(),f($o.$$.fragment),gj=u(),Rt=o("p"),F6=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),bf=o("code"),V6=a(".json"),Y6=a(" files with:"),jj=u(),f(ko.$$.fragment),yj=u(),Ut=o("p"),K6=a("Some more examples are to be found in the "),Po=o("a"),J6=a("main repo"),X6=a(" as well."),wj=u(),Yp=o("p"),Q6=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),bj=u(),X=o("p"),e4=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),qf=o("code"),s4=a("AdamW"),t4=a(" optimizer and "),Ef=o("code"),a4=a("WarmupLR"),n4=a(` scheduler and will enable mixed
precision training if `),$f=o("code"),o4=a("--fp16"),l4=a(" is passed:"),qj=u(),f(zo.$$.fragment),Ej=u(),Gt=o("p"),r4=a("When you execute the program, DeepSpeed will log the configuration it received from the "),Kp=o("a"),p4=a("Trainer"),i4=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),$j=u(),Jp=o("a"),kj=u(),Es=o("h3"),Mt=o("a"),kf=o("span"),f(Do.$$.fragment),u4=u(),Pf=o("span"),c4=a("Passing Configuration"),Pj=u(),T=o("p"),h4=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Xp=o("a"),f4=a("Trainer"),d4=a(" via "),Qp=o("a"),m4=a("TrainingArguments"),_4=a(" then for the "),zf=o("code"),v4=a("deepspeed"),g4=a(` argument you can
pass a nested `),Df=o("code"),j4=a("dict"),y4=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),ei=o("a"),w4=a("TrainingArguments"),b4=a("."),zj=u(),si=o("p"),q4=a("To summarize you can do:"),Dj=u(),f(Oo.$$.fragment),Oj=u(),ti=o("p"),E4=a("or:"),Tj=u(),f(To.$$.fragment),Aj=u(),ai=o("a"),Sj=u(),$s=o("h3"),Lt=o("a"),Of=o("span"),f(Ao.$$.fragment),$4=u(),Tf=o("span"),k4=a("Shared Configuration"),Cj=u(),f(Zt.$$.fragment),xj=u(),Ce=o("p"),P4=a("Some configuration values are required by both the "),ni=o("a"),z4=a("Trainer"),D4=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),oi=o("a"),O4=a("Trainer"),T4=a(" command line arguments."),Ij=u(),Nt=o("p"),A4=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),li=o("a"),S4=a("Trainer"),C4=a(` do the majority
of configuration for you.`),Rj=u(),xe=o("p"),x4=a("Therefore, in the rest of this guide you will find a special configuration value: "),Af=o("code"),I4=a("auto"),R4=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),ri=o("a"),U4=a("Trainer"),G4=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Uj=u(),pi=o("p"),M4=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),Gj=u(),Bt=o("p"),L4=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ii=o("a"),Z4=a("TrainingArguments"),N4=a(" based on that. The steps are:"),Mj=u(),Ht=o("ol"),Sf=o("li"),B4=a("Create or load the DeepSpeed configuration to be used as a master configuration"),H4=u(),So=o("li"),W4=a("Create the "),ui=o("a"),F4=a("TrainingArguments"),V4=a(" object based on these values"),Lj=u(),Q=o("p"),Y4=a("Do note that some values, such as "),Cf=o("code"),K4=a("scheduler.params.total_num_steps"),J4=a(` are calculated by
`),ci=o("a"),X4=a("Trainer"),Q4=a(" during "),xf=o("code"),e8=a("train"),s8=a(", but you can of course do the math yourself."),Zj=u(),hi=o("a"),Nj=u(),ks=o("h3"),Wt=o("a"),If=o("span"),f(Co.$$.fragment),t8=u(),Rf=o("span"),a8=a("ZeRO"),Bj=u(),xo=o("p"),Io=o("a"),n8=a("Zero Redundancy Optimizer (ZeRO)"),o8=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Hj=u(),Ie=o("p"),l8=a("The "),Uf=o("code"),r8=a("zero_optimization"),p8=a(" section of the configuration file is the most important part ("),Ro=o("a"),i8=a("docs"),u8=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),Wj=u(),Ft=o("p"),c8=a("This section has to be configured exclusively via DeepSpeed configuration - the "),fi=o("a"),h8=a("Trainer"),f8=a(` provides
no equivalent command line arguments.`),Fj=u(),di=o("p"),d8=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),Vj=u(),mi=o("a"),Yj=u(),Ps=o("h4"),Vt=o("a"),Gf=o("span"),f(Uo.$$.fragment),m8=u(),Mf=o("span"),_8=a("ZeRO-2 Config"),Kj=u(),_i=o("p"),v8=a("The following is an example of configuration for ZeRO stage 2:"),Jj=u(),f(Go.$$.fragment),Xj=u(),vi=o("p"),Lf=o("strong"),g8=a("Performance tuning:"),Qj=u(),Re=o("ul"),zs=o("li"),j8=a("enabling "),Zf=o("code"),y8=a("offload_optimizer"),w8=a(" should reduce GPU RAM usage (it requires "),Nf=o("code"),b8=a('"stage": 2'),q8=a(")"),E8=u(),A=o("li"),Bf=o("code"),$8=a('"overlap_comm": true'),k8=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),Hf=o("code"),P8=a("overlap_comm"),z8=a(` uses 4.5x
the `),Wf=o("code"),D8=a("allgather_bucket_size"),O8=a(" and "),Ff=o("code"),T8=a("reduce_bucket_size"),A8=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Vf=o("code"),S8=a("5e8 x 2Bytes x 2 x 4.5"),C8=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Yf=o("code"),x8=a("2e8"),I8=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),R8=u(),Kf=o("li"),U8=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),ey=u(),gi=o("a"),sy=u(),Ds=o("h4"),Yt=o("a"),Jf=o("span"),f(Mo.$$.fragment),G8=u(),Xf=o("span"),M8=a("ZeRO-3 Config"),ty=u(),ji=o("p"),L8=a("The following is an example of configuration for ZeRO stage 3:"),ay=u(),f(Lo.$$.fragment),ny=u(),N=o("p"),Z8=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Qf=o("code"),N8=a('"device": "cpu"'),B8=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),ed=o("code"),H8=a("none"),W8=a(" instead of "),sd=o("code"),F8=a("cpu"),V8=a(" for the "),td=o("code"),Y8=a("device"),K8=a(` entry. Offloading to
NVMe is discussed further down.`),oy=u(),Ue=o("p"),J8=a("Pinned memory is enabled with "),ad=o("code"),X8=a("pin_memory"),Q8=a(" set to "),nd=o("code"),e7=a("true"),s7=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),ly=u(),yi=o("p"),od=o("strong"),t7=a("Performance tuning:"),ry=u(),Kt=o("ul"),Zo=o("li"),ld=o("code"),a7=a("stage3_max_live_parameters"),n7=a(": "),rd=o("code"),o7=a("1e9"),l7=u(),No=o("li"),pd=o("code"),r7=a("stage3_max_reuse_distance"),p7=a(": "),id=o("code"),i7=a("1e9"),py=u(),S=o("p"),u7=a("If hitting OOM reduce "),ud=o("code"),c7=a("stage3_max_live_parameters"),h7=a(" and "),cd=o("code"),f7=a("stage3_max_reuse_distance"),d7=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),hd=o("code"),m7=a("1e9"),_7=a(` would consume ~2GB. The memory is shared by
`),fd=o("code"),v7=a("stage3_max_live_parameters"),g7=a(" and "),dd=o("code"),j7=a("stage3_max_reuse_distance"),y7=a(", so it\u2019s not additive, it\u2019s just 2GB total."),iy=u(),we=o("p"),md=o("code"),w7=a("stage3_max_live_parameters"),b7=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),_d=o("code"),q7=a("stage3_max_reuse_distance"),E7=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),vd=o("code"),$7=a("stage3_max_reuse_distance"),k7=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),uy=u(),wi=o("p"),P7=a("The following configuration values depend on the model\u2019s hidden size:"),cy=u(),Ge=o("ul"),Bo=o("li"),gd=o("code"),z7=a("reduce_bucket_size"),D7=a(": "),jd=o("code"),O7=a("hidden_size*hidden_size"),T7=u(),Ho=o("li"),yd=o("code"),A7=a("stage3_prefetch_bucket_size"),S7=a(": "),wd=o("code"),C7=a("0.9 * hidden_size * hidden_size"),x7=u(),Wo=o("li"),bd=o("code"),I7=a("stage3_param_persistence_threshold"),R7=a(": "),qd=o("code"),U7=a("10 * hidden_size"),hy=u(),Me=o("p"),G7=a("therefore set these values to "),Ed=o("code"),M7=a("auto"),L7=a(" and the "),bi=o("a"),Z7=a("Trainer"),N7=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),fy=u(),Fo=o("p"),$d=o("code"),B7=a("stage3_gather_fp16_weights_on_model_save"),H7=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),dy=u(),ee=o("p"),W7=a("If you\u2019re migrating from ZeRO-2 configuration note that "),kd=o("code"),F7=a("allgather_partitions"),V7=a(", "),Pd=o("code"),Y7=a("allgather_bucket_size"),K7=a(` and
`),zd=o("code"),J7=a("reduce_scatter"),X7=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),my=u(),qi=o("ul"),Vo=o("li"),Dd=o("code"),Q7=a("sub_group_size"),e9=a(": "),Od=o("code"),s9=a("1e9"),_y=u(),be=o("p"),Td=o("code"),t9=a("sub_group_size"),a9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),Ad=o("code"),n9=a("sub_group_size"),o9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),Sd=o("code"),l9=a("sub_group_size"),r9=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),vy=u(),Le=o("p"),p9=a("You can leave "),Cd=o("code"),i9=a("sub_group_size"),u9=a(" to its default value of "),xd=o("em"),c9=a("1e9"),h9=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),gy=u(),Jt=o("ol"),Yo=o("li"),f9=a("Running into OOM during optimizer step: Reduce "),Id=o("code"),d9=a("sub_group_size"),m9=a(" to reduce memory utilization of temporary buffers"),_9=u(),Ko=o("li"),v9=a("Optimizer Step is taking a long time: Increase "),Rd=o("code"),g9=a("sub_group_size"),j9=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),jy=u(),Ei=o("a"),yy=u(),Os=o("h3"),Xt=o("a"),Ud=o("span"),f(Jo.$$.fragment),y9=u(),Gd=o("span"),w9=a("NVMe Support"),wy=u(),$i=o("p"),b9=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),by=u(),ki=o("p"),q9=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),qy=u(),f(Xo.$$.fragment),Ey=u(),Qt=o("p"),E9=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Md=o("em"),$9=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),k9=a(")."),$y=u(),Ze=o("p"),P9=a("Here is the full documentation for offloading "),Qo=o("a"),z9=a("optimizer states"),D9=a(" and "),el=o("a"),O9=a("parameters"),T9=a("."),ky=u(),ea=o("p"),A9=a("Make sure that your "),Ld=o("code"),S9=a("nvme_path"),C9=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Py=u(),Ne=o("p"),x9=a("In order to figure out the optimal "),Zd=o("code"),I9=a("aio"),R9=a(` configuration block you must run a benchmark on your target setup, as
`),sl=o("a"),U9=a("explained here"),G9=a("."),zy=u(),Pi=o("a"),Dy=u(),Ts=o("h4"),sa=o("a"),Nd=o("span"),f(tl.$$.fragment),M9=u(),Bd=o("span"),L9=a("ZeRO-2 vs ZeRO-3 Performance"),Oy=u(),zi=o("p"),Z9=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Ty=u(),Di=o("p"),N9=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Ay=u(),ta=o("ul"),As=o("li"),B9=a("set "),Hd=o("code"),H9=a("stage3_param_persistence_threshold"),W9=a(" to a very large number - larger than the largest parameter, e.g., "),Wd=o("code"),F9=a("6 * hidden_size * hidden_size"),V9=a(". This will keep the parameters on the GPUs."),Y9=u(),al=o("li"),K9=a("turn off "),Fd=o("code"),J9=a("offload_params"),X9=a(" since ZeRO-2 doesn\u2019t have that option."),Sy=u(),Be=o("p"),Q9=a("The performance will likely improve significantly with just "),Vd=o("code"),ek=a("offload_params"),sk=a(` turned off, even if you don\u2019t change
`),Yd=o("code"),tk=a("stage3_param_persistence_threshold"),ak=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Cy=u(),Oi=o("a"),xy=u(),Ss=o("h4"),aa=o("a"),Kd=o("span"),f(nl.$$.fragment),nk=u(),Jd=o("span"),ok=a("ZeRO-2 Example"),Iy=u(),na=o("p"),lk=a("Here is a full ZeRO-2 auto-configuration file "),Xd=o("code"),rk=a("ds_config_zero2.json"),pk=a(":"),Ry=u(),f(ol.$$.fragment),Uy=u(),oa=o("p"),ik=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Qd=o("code"),uk=a("auto"),ck=a(" settings in it."),Gy=u(),f(ll.$$.fragment),My=u(),Ti=o("a"),Ly=u(),Cs=o("h4"),la=o("a"),em=o("span"),f(rl.$$.fragment),hk=u(),sm=o("span"),fk=a("ZeRO-3 Example"),Zy=u(),ra=o("p"),dk=a("Here is a full ZeRO-3 auto-configuration file "),tm=o("code"),mk=a("ds_config_zero3.json"),_k=a(":"),Ny=u(),f(pl.$$.fragment),By=u(),pa=o("p"),vk=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),am=o("code"),gk=a("auto"),jk=a(" settings in it."),Hy=u(),f(il.$$.fragment),Wy=u(),xs=o("h3"),ia=o("a"),nm=o("span"),f(ul.$$.fragment),yk=u(),om=o("span"),wk=a("Optimizer and Scheduler"),Fy=u(),ua=o("p"),bk=a("As long as you don\u2019t enable "),lm=o("code"),qk=a("offload_optimizer"),Ek=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Vy=u(),Ai=o("p"),$k=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),Yy=u(),ca=o("p"),kk=a("It is possible to use a non-DeepSpeed optimizer when "),rm=o("code"),Pk=a("offload_optimizer"),zk=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Ky=u(),Si=o("a"),Jy=u(),Is=o("h4"),ha=o("a"),pm=o("span"),f(cl.$$.fragment),Dk=u(),im=o("span"),Ok=a("Optimizer"),Xy=u(),He=o("p"),Tk=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),um=o("code"),Ak=a("torch"),Sk=a(". The full documentation is "),hl=o("a"),Ck=a("here"),xk=a("."),Qy=u(),q=o("p"),Ik=a("If you don\u2019t configure the "),cm=o("code"),Rk=a("optimizer"),Uk=a(" entry in the configuration file, the "),Ci=o("a"),Gk=a("Trainer"),Mk=a(` will
automatically set it to `),hm=o("code"),Lk=a("AdamW"),Zk=a(` and will use the supplied values or the defaults for the following command line
arguments: `),fm=o("code"),Nk=a("--learning_rate"),Bk=a(", "),dm=o("code"),Hk=a("--adam_beta1"),Wk=a(", "),mm=o("code"),Fk=a("--adam_beta2"),Vk=a(", "),_m=o("code"),Yk=a("--adam_epsilon"),Kk=a(" and "),vm=o("code"),Jk=a("--weight_decay"),Xk=a("."),ew=u(),We=o("p"),Qk=a("Here is an example of the auto-configured "),gm=o("code"),eP=a("optimizer"),sP=a(" entry for "),jm=o("code"),tP=a("AdamW"),aP=a(":"),sw=u(),f(fl.$$.fragment),tw=u(),xi=o("p"),nP=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),aw=u(),se=o("ul"),dl=o("li"),ym=o("code"),oP=a("lr"),lP=a(" with the value of "),wm=o("code"),rP=a("--learning_rate"),pP=u(),ml=o("li"),bm=o("code"),iP=a("betas"),uP=a(" with the value of "),qm=o("code"),cP=a("--adam_beta1 --adam_beta2"),hP=u(),_l=o("li"),Em=o("code"),fP=a("eps"),dP=a(" with the value of "),$m=o("code"),mP=a("--adam_epsilon"),_P=u(),vl=o("li"),km=o("code"),vP=a("weight_decay"),gP=a(" with the value of "),Pm=o("code"),jP=a("--weight_decay"),nw=u(),Ii=o("p"),yP=a("Therefore please remember to tune the shared hyperparameters on the command line."),ow=u(),Ri=o("p"),wP=a("You can also set the values explicitly:"),lw=u(),f(gl.$$.fragment),rw=u(),fa=o("p"),bP=a("But then you\u2019re on your own synchronizing the "),Ui=o("a"),qP=a("Trainer"),EP=a(` command line arguments and the DeepSpeed
configuration.`),pw=u(),Gi=o("p"),$P=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),iw=u(),f(jl.$$.fragment),uw=u(),te=o("p"),kP=a("Similarly to "),zm=o("code"),PP=a("AdamW"),zP=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Dm=o("code"),DP=a("weight_decay"),OP=a(" around "),Om=o("code"),TP=a("0.01"),AP=a("."),cw=u(),Mi=o("a"),hw=u(),Rs=o("h4"),da=o("a"),Tm=o("span"),f(yl.$$.fragment),SP=u(),Am=o("span"),CP=a("Scheduler"),fw=u(),C=o("p"),xP=a("DeepSpeed supports "),Sm=o("code"),IP=a("LRRangeTest"),RP=a(", "),Cm=o("code"),UP=a("OneCycle"),GP=a(", "),xm=o("code"),MP=a("WarmupLR"),LP=a(" and "),Im=o("code"),ZP=a("WarmupDecayLR"),NP=a(` learning rate schedulers. The full
documentation is `),wl=o("a"),BP=a("here"),HP=a("."),dw=u(),Li=o("p"),WP=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),mw=u(),ma=o("ul"),bl=o("li"),Rm=o("code"),FP=a("WarmupLR"),VP=a(" via "),Um=o("code"),YP=a("--lr_scheduler_type constant_with_warmup"),KP=u(),Fe=o("li"),Gm=o("code"),JP=a("WarmupDecayLR"),XP=a(" via "),Mm=o("code"),QP=a("--lr_scheduler_type linear"),ez=a(". This is also the default value for "),Lm=o("code"),sz=a("--lr_scheduler_type"),tz=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),_w=u(),P=o("p"),az=a("If you don\u2019t configure the "),Zm=o("code"),nz=a("scheduler"),oz=a(" entry in the configuration file, the "),Zi=o("a"),lz=a("Trainer"),rz=a(` will use
the values of `),Nm=o("code"),pz=a("--lr_scheduler_type"),iz=a(", "),Bm=o("code"),uz=a("--learning_rate"),cz=a(" and "),Hm=o("code"),hz=a("--warmup_steps"),fz=a(" or "),Wm=o("code"),dz=a("--warmup_ratio"),mz=a(` to configure a
\u{1F917} Transformers version of it.`),vw=u(),Ve=o("p"),_z=a("Here is an example of the auto-configured "),Fm=o("code"),vz=a("scheduler"),gz=a(" entry for "),Vm=o("code"),jz=a("WarmupLR"),yz=a(":"),gw=u(),f(ql.$$.fragment),jw=u(),Ye=o("p"),wz=a("Since "),Ym=o("em"),bz=a("\u201Cauto\u201D"),qz=a(" is used the "),Ni=o("a"),Ez=a("Trainer"),$z=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),yw=u(),ae=o("ul"),_a=o("li"),Km=o("code"),kz=a("warmup_min_lr"),Pz=a(" with the value of "),Jm=o("code"),zz=a("0"),Dz=a("."),Oz=u(),va=o("li"),Xm=o("code"),Tz=a("warmup_max_lr"),Az=a(" with the value of "),Qm=o("code"),Sz=a("--learning_rate"),Cz=a("."),xz=u(),Ke=o("li"),e_=o("code"),Iz=a("warmup_num_steps"),Rz=a(" with the value of "),s_=o("code"),Uz=a("--warmup_steps"),Gz=a(" if provided. Otherwise will use "),t_=o("code"),Mz=a("--warmup_ratio"),Lz=a(`
multiplied by the number of training steps and rounded up.`),Zz=u(),Je=o("li"),a_=o("code"),Nz=a("total_num_steps"),Bz=a(" with either the value of "),n_=o("code"),Hz=a("--max_steps"),Wz=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),o_=o("code"),Fz=a("WarmupDecayLR"),Vz=a(")."),ww=u(),Bi=o("p"),Yz=a("You can, of course, take over any or all of the configuration values and set those yourself:"),bw=u(),f(El.$$.fragment),qw=u(),ga=o("p"),Kz=a("But then you\u2019re on your own synchronizing the "),Hi=o("a"),Jz=a("Trainer"),Xz=a(` command line arguments and the DeepSpeed
configuration.`),Ew=u(),ja=o("p"),Qz=a("For example, for "),l_=o("code"),eD=a("WarmupDecayLR"),sD=a(", you can use the following entry:"),$w=u(),f($l.$$.fragment),kw=u(),B=o("p"),tD=a("and "),r_=o("code"),aD=a("total_num_steps"),nD=a(", "),p_=o("code"),oD=a("warmup_max_lr"),lD=a(", "),i_=o("code"),rD=a("warmup_num_steps"),pD=a(" and "),u_=o("code"),iD=a("total_num_steps"),uD=a(" will be set at loading time."),Pw=u(),Wi=o("a"),zw=u(),Us=o("h3"),ya=o("a"),c_=o("span"),f(kl.$$.fragment),cD=u(),h_=o("span"),hD=a("fp32 Precision"),Dw=u(),Fi=o("p"),fD=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),Ow=u(),wa=o("p"),dD=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),f_=o("code"),mD=a("NaN"),_D=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Tw=u(),f(Pl.$$.fragment),Aw=u(),ba=o("p"),vD=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),zl=o("a"),gD=a("TensorFloat-32(TF32) on Ampere devices"),jD=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Sw=u(),Vi=o("a"),Cw=u(),Gs=o("h3"),qa=o("a"),d_=o("span"),f(Dl.$$.fragment),yD=u(),m_=o("span"),wD=a("Automatic Mixed Precision"),xw=u(),Yi=o("p"),bD=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),Iw=u(),Ki=o("p"),qD=a("To configure pytorch AMP-like mode set:"),Rw=u(),f(Ol.$$.fragment),Uw=u(),Xe=o("p"),ED=a("and the "),Ji=o("a"),$D=a("Trainer"),kD=a(` will automatically enable or disable it based on the value of
`),__=o("code"),PD=a("args.fp16_backend"),zD=a(". The rest of config values are up to you."),Gw=u(),Ea=o("p"),DD=a("This mode gets enabled when "),v_=o("code"),OD=a("--fp16 --fp16_backend amp"),TD=a(" command line args are passed."),Mw=u(),Xi=o("p"),AD=a("You can also enable/disable this mode explicitly:"),Lw=u(),f(Tl.$$.fragment),Zw=u(),$a=o("p"),SD=a("But then you\u2019re on your own synchronizing the "),Qi=o("a"),CD=a("Trainer"),xD=a(` command line arguments and the DeepSpeed
configuration.`),Nw=u(),ka=o("p"),ID=a("Here is the "),Al=o("a"),RD=a("documentation"),UD=a("."),Bw=u(),eu=o("p"),GD=a("To configure apex AMP-like mode set:"),Hw=u(),f(Sl.$$.fragment),Ww=u(),ne=o("p"),MD=a("and the "),su=o("a"),LD=a("Trainer"),ZD=a(" will automatically configure it based on the values of "),g_=o("code"),ND=a("args.fp16_backend"),BD=a(` and
`),j_=o("code"),HD=a("args.fp16_opt_level"),WD=a("."),Fw=u(),Pa=o("p"),FD=a("This mode gets enabled when "),y_=o("code"),VD=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),YD=a(" command line args are passed."),Vw=u(),tu=o("p"),KD=a("You can also configure this mode explicitly:"),Yw=u(),f(Cl.$$.fragment),Kw=u(),za=o("p"),JD=a("But then you\u2019re on your own synchronizing the "),au=o("a"),XD=a("Trainer"),QD=a(` command line arguments and the DeepSpeed
configuration.`),Jw=u(),Da=o("p"),eO=a("Here is the "),xl=o("a"),sO=a("documentation"),tO=a("."),Xw=u(),nu=o("a"),Qw=u(),Ms=o("h3"),Oa=o("a"),w_=o("span"),f(Il.$$.fragment),aO=u(),b_=o("span"),nO=a("Batch Size"),e2=u(),ou=o("p"),oO=a("To configure batch size, use:"),s2=u(),f(Rl.$$.fragment),t2=u(),x=o("p"),lO=a("and the "),lu=o("a"),rO=a("Trainer"),pO=a(" will automatically set "),q_=o("code"),iO=a("train_micro_batch_size_per_gpu"),uO=a(` to the value of
`),E_=o("code"),cO=a("args.per_device_train_batch_size"),hO=a(" and "),$_=o("code"),fO=a("train_batch_size"),dO=a(" to "),k_=o("code"),mO=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),_O=a("."),a2=u(),ru=o("p"),vO=a("You can also set the values explicitly:"),n2=u(),f(Ul.$$.fragment),o2=u(),Ta=o("p"),gO=a("But then you\u2019re on your own synchronizing the "),pu=o("a"),jO=a("Trainer"),yO=a(` command line arguments and the DeepSpeed
configuration.`),l2=u(),iu=o("a"),r2=u(),Ls=o("h3"),Aa=o("a"),P_=o("span"),f(Gl.$$.fragment),wO=u(),z_=o("span"),bO=a("Gradient Accumulation"),p2=u(),uu=o("p"),qO=a("To configure gradient accumulation set:"),i2=u(),f(Ml.$$.fragment),u2=u(),Qe=o("p"),EO=a("and the "),cu=o("a"),$O=a("Trainer"),kO=a(" will automatically set it to the value of "),D_=o("code"),PO=a("args.gradient_accumulation_steps"),zO=a("."),c2=u(),hu=o("p"),DO=a("You can also set the value explicitly:"),h2=u(),f(Ll.$$.fragment),f2=u(),Sa=o("p"),OO=a("But then you\u2019re on your own synchronizing the "),fu=o("a"),TO=a("Trainer"),AO=a(` command line arguments and the DeepSpeed
configuration.`),d2=u(),du=o("a"),m2=u(),Zs=o("h3"),Ca=o("a"),O_=o("span"),f(Zl.$$.fragment),SO=u(),T_=o("span"),CO=a("Gradient Clipping"),_2=u(),mu=o("p"),xO=a("To configure gradient gradient clipping set:"),v2=u(),f(Nl.$$.fragment),g2=u(),es=o("p"),IO=a("and the "),_u=o("a"),RO=a("Trainer"),UO=a(" will automatically set it to the value of "),A_=o("code"),GO=a("args.max_grad_norm"),MO=a("."),j2=u(),vu=o("p"),LO=a("You can also set the value explicitly:"),y2=u(),f(Bl.$$.fragment),w2=u(),xa=o("p"),ZO=a("But then you\u2019re on your own synchronizing the "),gu=o("a"),NO=a("Trainer"),BO=a(` command line arguments and the DeepSpeed
configuration.`),b2=u(),ju=o("a"),q2=u(),Ns=o("h3"),Ia=o("a"),S_=o("span"),f(Hl.$$.fragment),HO=u(),C_=o("span"),WO=a("Getting The Model Weights Out"),E2=u(),Ra=o("p"),FO=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),x_=o("code"),VO=a("global_step*/*optim_states.pt"),YO=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),$2=u(),yu=o("p"),I_=o("strong"),KO=a("FP16 Weights:"),k2=u(),Ua=o("p"),JO=a("When a model is saved under ZeRO-2, you end up having the normal "),R_=o("code"),XO=a("pytorch_model.bin"),QO=a(` file with the model weights, but
they are only the fp16 version of the weights.`),P2=u(),H=o("p"),eT=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),U_=o("code"),sT=a('"stage3_gather_fp16_weights_on_model_save": true'),tT=a(" is required to get the "),G_=o("code"),aT=a("Trainer"),nT=a(` to save the fp16
version of the weights. If this setting is `),M_=o("code"),oT=a("False"),lT=u(),L_=o("code"),rT=a("pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),pT=a(` it
won\u2019t be possible to load it back.`),z2=u(),f(Wl.$$.fragment),D2=u(),wu=o("p"),Z_=o("strong"),iT=a("FP32 Weights:"),O2=u(),Ga=o("p"),uT=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Fl=o("a"),cT=a("models hub"),hT=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),T2=u(),bu=o("p"),N_=o("strong"),fT=a("Live FP32 Weights Recovery:"),A2=u(),qu=o("p"),dT=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),S2=u(),Eu=o("p"),mT=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),C2=u(),f(Vl.$$.fragment),x2=u(),ss=o("p"),_T=a("If you\u2019re using the "),B_=o("code"),vT=a("--load_best_model_at_end"),gT=a(" class:"),H_=o("em"),jT=a("~transformers.TrainingArguments"),yT=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),I2=u(),f(Yl.$$.fragment),R2=u(),f(Ma.$$.fragment),U2=u(),La=o("p"),wT=a("Of course, you don\u2019t have to use class:"),W_=o("em"),bT=a("~transformers.Trainer"),qT=a(` and you can adjust the examples above to your own
trainer.`),G2=u(),Za=o("p"),ET=a("If for some reason you want more refinement, you can also extract the fp32 "),F_=o("code"),$T=a("state_dict"),kT=a(` of the weights and apply
these yourself as is shown in the following example:`),M2=u(),f(Kl.$$.fragment),L2=u(),$u=o("p"),V_=o("strong"),PT=a("Offline FP32 Weights Recovery:"),Z2=u(),ts=o("p"),zT=a("DeepSpeed creates a special conversion script "),Y_=o("code"),DT=a("zero_to_fp32.py"),OT=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),K_=o("code"),TT=a("Trainer"),AT=a(" to do the extraction."),N2=u(),ku=o("p"),ST=a("Let\u2019s say your checkpoint folder looks like this:"),B2=u(),f(Jl.$$.fragment),H2=u(),Na=o("p"),CT=a("In this example there is just one DeepSpeed checkpoint sub-folder "),J_=o("em"),xT=a("global_step1"),IT=a(`. Therefore to reconstruct the fp32
weights just run:`),W2=u(),f(Xl.$$.fragment),F2=u(),Ba=o("p"),RT=a("This is it. "),X_=o("code"),UT=a("pytorch_model.bin"),GT=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),V2=u(),Pu=o("p"),MT=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),Y2=u(),Ql=o("p"),Q_=o("code"),LT=a("python zero_to_fp32.py -h"),ZT=a(" will give you usage details."),K2=u(),as=o("p"),NT=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),e1=o("code"),BT=a("latest"),HT=a(`, which in the current
example will contain `),s1=o("code"),WT=a("global_step1"),FT=a("."),J2=u(),zu=o("p"),VT=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),X2=u(),Bs=o("h3"),Ha=o("a"),t1=o("span"),f(er.$$.fragment),YT=u(),a1=o("span"),KT=a("ZeRO-3 and Infinity Nuances"),Q2=u(),Du=o("p"),JT=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),eb=u(),Ou=o("p"),XT=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),sb=u(),Tu=o("p"),QT=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),tb=u(),Hs=o("h4"),Wa=o("a"),n1=o("span"),f(sr.$$.fragment),eA=u(),o1=o("span"),sA=a("Constructing Massive Models"),ab=u(),Fa=o("p"),tA=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),l1=o("em"),aA=a("deepspeed.zero.Init()"),nA=a(`
context manager (which is also a function decorator), like so:`),nb=u(),f(tr.$$.fragment),ob=u(),Au=o("p"),oA=a("As you can see this gives you a randomly initialized model."),lb=u(),k=o("p"),lA=a("If you want to use a pretrained model, "),r1=o("code"),rA=a("model_class.from_pretrained"),pA=a(` will activate this feature as long as
`),p1=o("code"),iA=a("is_deepspeed_zero3_enabled()"),uA=a(" returns "),i1=o("code"),cA=a("True"),hA=a(`, which currently is setup by the
`),Su=o("a"),fA=a("TrainingArguments"),dA=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),Cu=o("a"),mA=a("TrainingArguments"),_A=a(" object "),u1=o("strong"),vA=a("before"),gA=a(` calling
`),c1=o("code"),jA=a("from_pretrained"),yA=a(". Here is an example of a possible sequence:"),rb=u(),f(ar.$$.fragment),pb=u(),Va=o("p"),wA=a("If you\u2019re using the official example scripts and your command line arguments include "),h1=o("code"),bA=a("--deepspeed ds_config.json"),qA=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),ib=u(),xu=o("p"),EA=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),ub=u(),Ya=o("p"),$A=a("For full details on this method and other related features please refer to "),nr=o("a"),kA=a("Constructing Massive Models"),PA=a("."),cb=u(),oe=o("p"),zA=a("Also when loading fp16-pretrained models, you will want to tell "),f1=o("code"),DA=a("from_pretrained"),OA=a(` to use
`),d1=o("code"),TA=a("torch_dtype=torch.float16"),AA=a(". For details, please, see "),Iu=o("a"),SA=a("from_pretrained-torch-dtype"),CA=a("."),hb=u(),Ws=o("h4"),Ka=o("a"),m1=o("span"),f(or.$$.fragment),xA=u(),_1=o("span"),IA=a("Gathering Parameters"),fb=u(),lr=o("p"),RA=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),rr=o("a"),UA=a("Gathering Parameters"),db=u(),Ja=o("p"),GA=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),v1=o("code"),MA=a("from_pretrained"),LA=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),mb=u(),Ru=o("p"),ZA=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),_b=u(),f(pr.$$.fragment),vb=u(),ns=o("p"),NA=a("stress on "),g1=o("code"),BA=a("tensor([1.])"),HA=a(", or if you get an error where it says the parameter is of size "),j1=o("code"),WA=a("1"),FA=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),gb=u(),Uu=o("a"),jb=u(),Fs=o("h3"),Xa=o("a"),y1=o("span"),f(ir.$$.fragment),VA=u(),w1=o("span"),YA=a("ZeRO Inference"),yb=u(),Gu=o("p"),KA=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),wb=u(),Qa=o("p"),JA=a("Otherwise you just need to pass the usual "),Mu=o("a"),XA=a("TrainingArguments"),QA=a(" arguments. For example:"),bb=u(),f(ur.$$.fragment),qb=u(),Lu=o("p"),eS=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),Eb=u(),en=o("p"),sS=a("Here is an example of running "),b1=o("code"),tS=a("run_translation.py"),aS=a(" under DeepSpeed deploying all available GPUs:"),$b=u(),f(cr.$$.fragment),kb=u(),Zu=o("p"),nS=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),Pb=u(),Nu=o("p"),oS=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),zb=u(),Vs=o("h3"),sn=o("a"),q1=o("span"),f(hr.$$.fragment),lS=u(),E1=o("span"),rS=a("Memory Requirements"),Db=u(),Bu=o("p"),pS=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),Ob=u(),Hu=o("p"),iS=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),Tb=u(),f(fr.$$.fragment),Ab=u(),Wu=o("p"),uS=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),Sb=u(),Fu=o("p"),cS=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),Cb=u(),Vu=o("p"),hS=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),xb=u(),Yu=o("p"),fS=a("For example, let\u2019s repeat the same for 2 GPUs:"),Ib=u(),f(dr.$$.fragment),Rb=u(),Ku=o("p"),dS=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),Ub=u(),tn=o("p"),mS=a("For full information please see "),mr=o("a"),_S=a("memory estimators"),vS=a("."),Gb=u(),Ys=o("h3"),an=o("a"),$1=o("span"),f(_r.$$.fragment),gS=u(),k1=o("span"),jS=a("Filing Issues"),Mb=u(),Ju=o("p"),yS=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),Lb=u(),Xu=o("p"),wS=a("In your report please always include:"),Zb=u(),I=o("ol"),P1=o("li"),z1=o("p"),bS=a("the full Deepspeed config file in the report"),qS=u(),D1=o("li"),qe=o("p"),ES=a("either the command line arguments if you were using the "),Qu=o("a"),$S=a("Trainer"),kS=a(` or
`),ec=o("a"),PS=a("TrainingArguments"),zS=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),sc=o("a"),DS=a("TrainingArguments"),OS=a(" as it has dozens of entries that are irrelevant."),TS=u(),vr=o("li"),O1=o("p"),AS=a("Output of:"),SS=u(),f(gr.$$.fragment),CS=u(),T1=o("li"),jr=o("p"),xS=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),yr=o("a"),IS=a("notebook"),RS=a(` as
a starting point.`),US=u(),A1=o("li"),S1=o("p"),GS=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),MS=u(),C1=o("li"),wr=o("p"),LS=a("If possible try to use one of the existing "),br=o("a"),ZS=a("examples"),NS=a(" to reproduce the problem with."),Nb=u(),tc=o("p"),BS=a("Things to consider:"),Bb=u(),nn=o("ul"),Ks=o("li"),x1=o("p"),HS=a("Deepspeed is often not the cause of the problem."),WS=u(),I1=o("p"),FS=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),VS=u(),R1=o("p"),YS=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),KS=u(),U1=o("li"),qr=o("p"),JS=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Er=o("a"),XS=a("Deepspeed"),QS=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),Hb=u(),Js=o("h3"),on=o("a"),G1=o("span"),f($r.$$.fragment),eC=u(),M1=o("span"),sC=a("Troubleshooting"),Wb=u(),ac=o("ul"),nc=o("li"),L1=o("code"),tC=a("deepspeed"),aC=a(" process gets killed at startup without a traceback"),Fb=u(),R=o("p"),nC=a("If the "),Z1=o("code"),oC=a("deepspeed"),lC=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),N1=o("code"),rC=a("offload_optimizer"),pC=a(" or "),B1=o("code"),iC=a("offload_param"),uC=a(` or
both configured to offload to `),H1=o("code"),cC=a("cpu"),hC=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),kr=o("a"),fC=a("estimate how much memory is needed for a specific model"),dC=a("."),Vb=u(),Xs=o("h3"),ln=o("a"),W1=o("span"),f(Pr.$$.fragment),mC=u(),F1=o("span"),_C=a("Notes"),Yb=u(),os=o("ul"),rn=o("li"),vC=a("DeepSpeed works with the PyTorch "),oc=o("a"),gC=a("Trainer"),jC=a(" but not TF "),V1=o("code"),yC=a("TFTrainer"),wC=u(),zr=o("li"),bC=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Dr=o("a"),qC=a("source"),EC=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),$C=u(),Qs=o("li"),kC=a("You don\u2019t have to use the "),lc=o("a"),PC=a("Trainer"),zC=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),Or=o("a"),DC=a("the DeepSpeed integration instructions"),OC=a("."),Kb=u(),rc=o("a"),Jb=u(),et=o("h2"),pn=o("a"),Y1=o("span"),f(Tr.$$.fragment),TC=u(),K1=o("span"),AC=a("Non-Trainer Deepspeed Integration"),Xb=u(),le=o("p"),SC=a("The "),pc=o("a"),CC=a("HfDeepSpeedConfig"),xC=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),ic=o("a"),IC=a("Trainer"),RC=a(" is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),J1=o("code"),UC=a("from_pretrained"),GC=a(" call. Everything else you have to do by yourself."),Qb=u(),un=o("p"),MC=a("When using "),uc=o("a"),LC=a("Trainer"),ZC=a(" everything is automatically taken care of."),e3=u(),ls=o("p"),NC=a("When not using "),cc=o("a"),BC=a("Trainer"),HC=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),hc=o("a"),WC=a("HfDeepSpeedConfig"),FC=a(" object before instantiating the model."),s3=u(),fc=o("p"),VC=a("For example for a pretrained model:"),t3=u(),f(Ar.$$.fragment),a3=u(),dc=o("p"),YC=a("or for non-pretrained model:"),n3=u(),f(Sr.$$.fragment),o3=u(),re=o("p"),KC=a("Please note that if you\u2019re not using the "),mc=o("a"),JC=a("Trainer"),XC=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),Cr=o("a"),QC=a("Deepspeed"),ex=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),X1=o("code"),sx=a('"auto"'),tx=a(" values and you will have to put real values instead."),l3=u(),st=o("h2"),cn=o("a"),Q1=o("span"),f(xr.$$.fragment),ax=u(),ev=o("span"),nx=a("HfDeepSpeedConfig"),r3=u(),E=o("div"),f(Ir.$$.fragment),ox=u(),sv=o("p"),lx=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),rx=u(),Ee=o("p"),px=a("A "),tv=o("code"),ix=a("weakref"),ux=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),av=o("code"),cx=a("from_pretrained"),hx=a(" and "),nv=o("code"),fx=a("_get_resized_embeddings"),dx=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),mx=u(),pe=o("p"),_c=o("a"),_x=a("Trainer"),vx=a(" uses the "),ov=o("code"),gx=a("HfTrainerDeepSpeedConfig"),jx=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),vc=o("a"),yx=a("TrainingArguments"),wx=a(" by replacing special placeholder values: "),lv=o("code"),bx=a('"auto"'),qx=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),Ex=u(),rs=o("div"),f(Rr.$$.fragment),$x=u(),rv=o("p"),kx=a("Deletes a sub-section of the config file if it\u2019s found."),Px=u(),tt=o("p"),zx=a("Unless "),pv=o("code"),Dx=a("must_exist"),Ox=a(" is "),iv=o("code"),Tx=a("True"),Ax=a(" the section doesn\u2019t have to exist."),Sx=u(),hn=o("div"),f(Ur.$$.fragment),Cx=u(),Gr=o("p"),xx=a("Returns the set value or "),uv=o("code"),Ix=a("default"),Rx=a(" if no value is set"),Ux=u(),fn=o("div"),f(Mr.$$.fragment),Gx=u(),at=o("p"),Mx=a("Returns "),cv=o("code"),Lx=a("True"),Zx=a("/"),hv=o("code"),Nx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),Bx=a(" or isn\u2019t set)."),Hx=u(),dn=o("div"),f(Lr.$$.fragment),Wx=u(),nt=o("p"),Fx=a("Returns "),fv=o("code"),Vx=a("True"),Yx=a("/"),dv=o("code"),Kx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),Jx=a(" or isn\u2019t set)."),p3=u(),ot=o("h3"),mn=o("a"),mv=o("span"),f(Zr.$$.fragment),Xx=u(),_v=o("span"),Qx=a("DeepSpeed ZeRO Inference"),i3=u(),_n=o("p"),eI=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),gc=o("a"),sI=a("Trainer"),tI=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),u3=u(),jc=o("p"),aI=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),c3=u(),yc=o("p"),nI=a("The example has copious notes and is self-documenting."),h3=u(),wc=o("p"),oI=a("Make sure to:"),f3=u(),vn=o("ol"),vv=o("li"),lI=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),rI=u(),gv=o("li"),pI=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),d3=u(),f(Nr.$$.fragment),m3=u(),gn=o("p"),iI=a("Let\u2019s save it as "),jv=o("code"),uI=a("t0.py"),cI=a(" and run it:"),_3=u(),f(Br.$$.fragment),v3=u(),bc=o("p"),hI=a("This was a very basic example and you will want to adapt it to your needs."),g3=u(),lt=o("h2"),jn=o("a"),yv=o("span"),f(Hr.$$.fragment),fI=u(),wv=o("span"),dI=a("Main DeepSpeed Resources"),j3=u(),ie=o("ul"),bv=o("li"),Wr=o("a"),mI=a("Project\u2019s github"),_I=u(),qv=o("li"),Fr=o("a"),vI=a("Usage docs"),gI=u(),Ev=o("li"),Vr=o("a"),jI=a("API docs"),yI=u(),$v=o("li"),Yr=o("a"),wI=a("Blog posts"),y3=u(),qc=o("p"),bI=a("Papers:"),w3=u(),ps=o("ul"),kv=o("li"),Kr=o("a"),qI=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),EI=u(),Pv=o("li"),Jr=o("a"),$I=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),kI=u(),zv=o("li"),Xr=o("a"),PI=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),b3=u(),is=o("p"),zI=a("Finally, please, remember that, HuggingFace "),Ec=o("a"),DI=a("Trainer"),OI=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Qr=o("a"),TI=a("DeepSpeed GitHub"),AI=a("."),this.h()},l(e){const p=wF('[data-svelte="svelte-1phssyn"]',document.head);w=l(p,"META",{name:!0,content:!0}),p.forEach(t),L=c(e),b=l(e,"H1",{class:!0});var ep=r(b);$=l(ep,"A",{id:!0,class:!0,href:!0});var Dv=r($);fs=l(Dv,"SPAN",{});var UI=r(fs);d(F.$$.fragment,UI),UI.forEach(t),Dv.forEach(t),In=c(ep),ds=l(ep,"SPAN",{});var GI=r(ds);ms=n(GI,"DeepSpeed Integration"),GI.forEach(t),ep.forEach(t),pt=c(e),V=l(e,"P",{});var Ov=r(V);Y=l(Ov,"A",{href:!0,rel:!0});var MI=r(Y);Z=n(MI,"DeepSpeed"),MI.forEach(t),rp=n(Ov," implements everything described in the "),$e=l(Ov,"A",{href:!0,rel:!0});var LI=r($e);pp=n(LI,"ZeRO paper"),LI.forEach(t),QE=n(Ov,". Currently it provides full support for:"),Ov.forEach(t),xv=c(e),D=l(e,"OL",{});var ue=r(D);mh=l(ue,"LI",{});var ZI=r(mh);e0=n(ZI,"Optimizer state partitioning (ZeRO stage 1)"),ZI.forEach(t),s0=c(ue),_h=l(ue,"LI",{});var NI=r(_h);t0=n(NI,"Gradient partitioning (ZeRO stage 2)"),NI.forEach(t),a0=c(ue),vh=l(ue,"LI",{});var BI=r(vh);n0=n(BI,"Parameter partitioning (ZeRO stage 3)"),BI.forEach(t),o0=c(ue),gh=l(ue,"LI",{});var HI=r(gh);l0=n(HI,"Custom mixed precision training handling"),HI.forEach(t),r0=c(ue),jh=l(ue,"LI",{});var WI=r(jh);p0=n(WI,"A range of fast CUDA-extension-based optimizers"),WI.forEach(t),i0=c(ue),yh=l(ue,"LI",{});var FI=r(yh);u0=n(FI,"ZeRO-Offload to CPU and NVMe"),FI.forEach(t),ue.forEach(t),Iv=c(e),ke=l(e,"P",{});var $c=r(ke);c0=n($c,"ZeRO-Offload has its own dedicated paper: "),Rn=l($c,"A",{href:!0,rel:!0});var VI=r(Rn);h0=n(VI,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),VI.forEach(t),f0=n($c,". And NVMe-support is described in the paper "),Un=l($c,"A",{href:!0,rel:!0});var YI=r(Un);d0=n(YI,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),YI.forEach(t),m0=n($c,"."),$c.forEach(t),Rv=c(e),ip=l(e,"P",{});var KI=r(ip);_0=n(KI,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),KI.forEach(t),Uv=c(e),up=l(e,"P",{});var JI=r(up);v0=n(JI,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),JI.forEach(t),Gv=c(e),it=l(e,"P",{});var E3=r(it);g0=n(E3,"\u{1F917} Transformers integrates "),Gn=l(E3,"A",{href:!0,rel:!0});var XI=r(Gn);j0=n(XI,"DeepSpeed"),XI.forEach(t),y0=n(E3," via 2 options:"),E3.forEach(t),Mv=c(e),ut=l(e,"OL",{});var $3=r(ut);Mn=l($3,"LI",{});var k3=r(Mn);w0=n(k3,"Integration of the core DeepSpeed features via "),cp=l(k3,"A",{href:!0});var QI=r(cp);b0=n(QI,"Trainer"),QI.forEach(t),q0=n(k3,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),k3.forEach(t),E0=c($3),M=l($3,"LI",{});var ce=r(M);$0=n(ce,"If you don\u2019t use "),hp=l(ce,"A",{href:!0});var eR=r(hp);k0=n(eR,"Trainer"),eR.forEach(t),P0=n(ce,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),wh=l(ce,"CODE",{});var sR=r(wh);z0=n(sR,"from_pretrained"),sR.forEach(t),D0=n(ce," and "),bh=l(ce,"CODE",{});var tR=r(bh);O0=n(tR,"from_config"),tR.forEach(t),T0=n(ce,` include integration of essential
parts of DeepSpeed like `),qh=l(ce,"CODE",{});var aR=r(qh);A0=n(aR,"zero.Init"),aR.forEach(t),S0=n(ce,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),fp=l(ce,"A",{href:!0});var nR=r(fp);C0=n(nR,"deepspeed-non-trainer-integration"),nR.forEach(t),x0=n(ce,"."),ce.forEach(t),$3.forEach(t),Lv=c(e),dp=l(e,"P",{});var oR=r(dp);I0=n(oR,"What is integrated:"),oR.forEach(t),Zv=c(e),mp=l(e,"P",{});var lR=r(mp);R0=n(lR,"Training:"),lR.forEach(t),Nv=c(e),_p=l(e,"OL",{});var rR=r(_p);Eh=l(rR,"LI",{});var pR=r(Eh);U0=n(pR,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),pR.forEach(t),rR.forEach(t),Bv=c(e),vp=l(e,"P",{});var iR=r(vp);G0=n(iR,"Inference:"),iR.forEach(t),Hv=c(e),gp=l(e,"OL",{});var uR=r(gp);Ln=l(uR,"LI",{});var P3=r(Ln);M0=n(P3,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),jp=l(P3,"A",{href:!0});var cR=r(jp);L0=n(cR,"deepspeed-zero-inference"),cR.forEach(t),Z0=n(P3,"."),P3.forEach(t),uR.forEach(t),Wv=c(e),yp=l(e,"P",{});var hR=r(yp);N0=n(hR,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),hR.forEach(t),Fv=c(e),wp=l(e,"A",{id:!0}),r(wp).forEach(t),Vv=c(e),_s=l(e,"H2",{class:!0});var z3=r(_s);ct=l(z3,"A",{id:!0,class:!0,href:!0});var fR=r(ct);$h=l(fR,"SPAN",{});var dR=r($h);d(Zn.$$.fragment,dR),dR.forEach(t),fR.forEach(t),B0=c(z3),kh=l(z3,"SPAN",{});var mR=r(kh);H0=n(mR,"Trainer Deepspeed Integration"),mR.forEach(t),z3.forEach(t),Yv=c(e),bp=l(e,"A",{id:!0}),r(bp).forEach(t),Kv=c(e),vs=l(e,"H3",{class:!0});var D3=r(vs);ht=l(D3,"A",{id:!0,class:!0,href:!0});var _R=r(ht);Ph=l(_R,"SPAN",{});var vR=r(Ph);d(Nn.$$.fragment,vR),vR.forEach(t),_R.forEach(t),W0=c(D3),zh=l(D3,"SPAN",{});var gR=r(zh);F0=n(gR,"Installation"),gR.forEach(t),D3.forEach(t),Jv=c(e),qp=l(e,"P",{});var jR=r(qp);V0=n(jR,"Install the library via pypi:"),jR.forEach(t),Xv=c(e),d(Bn.$$.fragment,e),Qv=c(e),Pe=l(e,"P",{});var kc=r(Pe);Y0=n(kc,"or via "),Dh=l(kc,"CODE",{});var yR=r(Dh);K0=n(yR,"transformers"),yR.forEach(t),J0=n(kc,"\u2019 "),Oh=l(kc,"CODE",{});var wR=r(Oh);X0=n(wR,"extras"),wR.forEach(t),Q0=n(kc,":"),kc.forEach(t),eg=c(e),d(Hn.$$.fragment,e),sg=c(e),ze=l(e,"P",{});var Pc=r(ze);e$=n(Pc,"or find more details on "),Wn=l(Pc,"A",{href:!0,rel:!0});var bR=r(Wn);s$=n(bR,"the DeepSpeed\u2019s GitHub page"),bR.forEach(t),t$=n(Pc,` and
`),Fn=l(Pc,"A",{href:!0,rel:!0});var qR=r(Fn);a$=n(qR,"advanced install"),qR.forEach(t),n$=n(Pc,"."),Pc.forEach(t),tg=c(e),ft=l(e,"P",{});var O3=r(ft);o$=n(O3,"If you\u2019re still struggling with the build, first make sure to read "),Ep=l(O3,"A",{href:!0});var ER=r(Ep);l$=n(ER,"zero-install-notes"),ER.forEach(t),r$=n(O3,"."),O3.forEach(t),ag=c(e),$p=l(e,"P",{});var $R=r($p);p$=n($R,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),$R.forEach(t),ng=c(e),kp=l(e,"P",{});var kR=r(kp);i$=n(kR,"To make a local build for DeepSpeed:"),kR.forEach(t),og=c(e),d(Vn.$$.fragment,e),lg=c(e),De=l(e,"P",{});var zc=r(De);u$=n(zc,"If you intend to use NVMe offload you will also need to include "),Th=l(zc,"CODE",{});var PR=r(Th);c$=n(PR,"DS_BUILD_AIO=1"),PR.forEach(t),h$=n(zc,` in the instructions above (and also
install `),Ah=l(zc,"EM",{});var zR=r(Ah);f$=n(zR,"libaio-dev"),zR.forEach(t),d$=n(zc," system-wide)."),zc.forEach(t),rg=c(e),dt=l(e,"P",{});var T3=r(dt);m$=n(T3,"Edit "),Sh=l(T3,"CODE",{});var DR=r(Sh);_$=n(DR,"TORCH_CUDA_ARCH_LIST"),DR.forEach(t),v$=n(T3,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),T3.forEach(t),pg=c(e),d(Yn.$$.fragment,e),ig=c(e),je=l(e,"P",{});var sp=r(je);g$=n(sp,"So if you get "),Ch=l(sp,"CODE",{});var OR=r(Ch);j$=n(OR,"8, 6"),OR.forEach(t),y$=n(sp,", then use "),xh=l(sp,"CODE",{});var TR=r(xh);w$=n(TR,'TORCH_CUDA_ARCH_LIST="8.6"'),TR.forEach(t),b$=n(sp,`. If you have multiple different cards, you can list all
of them like so `),Ih=l(sp,"CODE",{});var AR=r(Ih);q$=n(AR,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),AR.forEach(t),sp.forEach(t),ug=c(e),Pp=l(e,"P",{});var SR=r(Pp);E$=n(SR,"If you need to use the same setup on multiple machines, make a binary wheel:"),SR.forEach(t),cg=c(e),d(Kn.$$.fragment,e),hg=c(e),Oe=l(e,"P",{});var Dc=r(Oe);$$=n(Dc,"it will generate something like "),Rh=l(Dc,"CODE",{});var CR=r(Rh);k$=n(CR,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),CR.forEach(t),P$=n(Dc,` which now you can install
as `),Uh=l(Dc,"CODE",{});var xR=r(Uh);z$=n(xR,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),xR.forEach(t),D$=n(Dc," locally or on any other machine."),Dc.forEach(t),fg=c(e),mt=l(e,"P",{});var A3=r(mt);O$=n(A3,"Again, remember to ensure to adjust "),Gh=l(A3,"CODE",{});var IR=r(Gh);T$=n(IR,"TORCH_CUDA_ARCH_LIST"),IR.forEach(t),A$=n(A3," to the target architectures."),A3.forEach(t),dg=c(e),Te=l(e,"P",{});var Oc=r(Te);S$=n(Oc,"You can find the complete list of NVIDIA GPUs and their corresponding "),Mh=l(Oc,"STRONG",{});var RR=r(Mh);C$=n(RR,"Compute Capabilities"),RR.forEach(t),x$=n(Oc,` (same as arch in this
context) `),Jn=l(Oc,"A",{href:!0,rel:!0});var UR=r(Jn);I$=n(UR,"here"),UR.forEach(t),R$=n(Oc,"."),Oc.forEach(t),mg=c(e),zp=l(e,"P",{});var GR=r(zp);U$=n(GR,"You can check the archs pytorch was built with using:"),GR.forEach(t),_g=c(e),d(Xn.$$.fragment,e),vg=c(e),Dp=l(e,"P",{});var MR=r(Dp);G$=n(MR,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),MR.forEach(t),gg=c(e),d(Qn.$$.fragment,e),jg=c(e),Op=l(e,"P",{});var LR=r(Op);M$=n(LR,"If the output is:"),LR.forEach(t),yg=c(e),d(eo.$$.fragment,e),wg=c(e),_t=l(e,"P",{});var S3=r(_t);L$=n(S3,"then you know that this card\u2019s arch is "),Lh=l(S3,"CODE",{});var ZR=r(Lh);Z$=n(ZR,"8.6"),ZR.forEach(t),N$=n(S3,"."),S3.forEach(t),bg=c(e),vt=l(e,"P",{});var C3=r(vt);B$=n(C3,"You can also leave "),Zh=l(C3,"CODE",{});var NR=r(Zh);H$=n(NR,"TORCH_CUDA_ARCH_LIST"),NR.forEach(t),W$=n(C3,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),C3.forEach(t),qg=c(e),gt=l(e,"P",{});var x3=r(gt);F$=n(x3,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),so=l(x3,"A",{href:!0,rel:!0});var BR=r(so);V$=n(BR,"Deepspeed"),BR.forEach(t),Y$=n(x3,","),x3.forEach(t),Eg=c(e),Tp=l(e,"A",{id:!0}),r(Tp).forEach(t),$g=c(e),gs=l(e,"H3",{class:!0});var I3=r(gs);jt=l(I3,"A",{id:!0,class:!0,href:!0});var HR=r(jt);Nh=l(HR,"SPAN",{});var WR=r(Nh);d(to.$$.fragment,WR),WR.forEach(t),HR.forEach(t),K$=c(I3),Bh=l(I3,"SPAN",{});var FR=r(Bh);J$=n(FR,"Deployment with multiple GPUs"),FR.forEach(t),I3.forEach(t),kg=c(e),yt=l(e,"P",{});var R3=r(yt);X$=n(R3,"To deploy this feature with multiple GPUs adjust the "),Ap=l(R3,"A",{href:!0});var VR=r(Ap);Q$=n(VR,"Trainer"),VR.forEach(t),e5=n(R3,` command line arguments as
following:`),R3.forEach(t),Pg=c(e),wt=l(e,"OL",{});var U3=r(wt);js=l(U3,"LI",{});var Tc=r(js);s5=n(Tc,"replace "),Hh=l(Tc,"CODE",{});var YR=r(Hh);t5=n(YR,"python -m torch.distributed.launch"),YR.forEach(t),a5=n(Tc," with "),Wh=l(Tc,"CODE",{});var KR=r(Wh);n5=n(KR,"deepspeed"),KR.forEach(t),o5=n(Tc,"."),Tc.forEach(t),l5=c(U3),ye=l(U3,"LI",{});var yn=r(ye);r5=n(yn,"add a new argument "),Fh=l(yn,"CODE",{});var JR=r(Fh);p5=n(JR,"--deepspeed ds_config.json"),JR.forEach(t),i5=n(yn,", where "),Vh=l(yn,"CODE",{});var XR=r(Vh);u5=n(XR,"ds_config.json"),XR.forEach(t),c5=n(yn,` is the DeepSpeed configuration file as
documented `),ao=l(yn,"A",{href:!0,rel:!0});var QR=r(ao);h5=n(QR,"here"),QR.forEach(t),f5=n(yn,". The file naming is up to you."),yn.forEach(t),U3.forEach(t),zg=c(e),Sp=l(e,"P",{});var eU=r(Sp);d5=n(eU,"Therefore, if your original command line looked as follows:"),eU.forEach(t),Dg=c(e),d(no.$$.fragment,e),Og=c(e),Cp=l(e,"P",{});var sU=r(Cp);m5=n(sU,"Now it should be:"),sU.forEach(t),Tg=c(e),d(oo.$$.fragment,e),Ag=c(e),O=l(e,"P",{});var he=r(O);_5=n(he,"Unlike, "),Yh=l(he,"CODE",{});var tU=r(Yh);v5=n(tU,"torch.distributed.launch"),tU.forEach(t),g5=n(he," where you have to specify how many GPUs to use with "),Kh=l(he,"CODE",{});var aU=r(Kh);j5=n(aU,"--nproc_per_node"),aU.forEach(t),y5=n(he,`, with the
`),Jh=l(he,"CODE",{});var nU=r(Jh);w5=n(nU,"deepspeed"),nU.forEach(t),b5=n(he," launcher you don\u2019t have to use the corresponding "),Xh=l(he,"CODE",{});var oU=r(Xh);q5=n(oU,"--num_gpus"),oU.forEach(t),E5=n(he,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),lo=l(he,"A",{href:!0,rel:!0});var lU=r(lo);$5=n(lU,"here"),lU.forEach(t),k5=n(he,"."),he.forEach(t),Sg=c(e),J=l(e,"P",{});var wn=r(J);P5=n(wn,"In fact, you can continue using "),Qh=l(wn,"CODE",{});var rU=r(Qh);z5=n(rU,"-m torch.distributed.launch"),rU.forEach(t),D5=n(wn,` with DeepSpeed as long as you don\u2019t need to use
`),ef=l(wn,"CODE",{});var pU=r(ef);O5=n(pU,"deepspeed"),pU.forEach(t),T5=n(wn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),sf=l(wn,"CODE",{});var iU=r(sf);A5=n(iU,"deepspeed"),iU.forEach(t),S5=n(wn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),wn.forEach(t),Cg=c(e),bt=l(e,"P",{});var G3=r(bt);C5=n(G3,"Here is an example of running "),tf=l(G3,"CODE",{});var uU=r(tf);x5=n(uU,"run_translation.py"),uU.forEach(t),I5=n(G3," under DeepSpeed deploying all available GPUs:"),G3.forEach(t),xg=c(e),d(ro.$$.fragment,e),Ig=c(e),qt=l(e,"P",{});var M3=r(qt);R5=n(M3,"Note that in the DeepSpeed documentation you are likely to see "),af=l(M3,"CODE",{});var cU=r(af);U5=n(cU,"--deepspeed --deepspeed_config ds_config.json"),cU.forEach(t),G5=n(M3,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),M3.forEach(t),Rg=c(e),Et=l(e,"P",{});var L3=r(Et);M5=n(L3,"For some practical usage examples, please, see this "),po=l(L3,"A",{href:!0,rel:!0});var hU=r(po);L5=n(hU,"post"),hU.forEach(t),Z5=n(L3,"."),L3.forEach(t),Ug=c(e),xp=l(e,"A",{id:!0}),r(xp).forEach(t),Gg=c(e),ys=l(e,"H3",{class:!0});var Z3=r(ys);$t=l(Z3,"A",{id:!0,class:!0,href:!0});var fU=r($t);nf=l(fU,"SPAN",{});var dU=r(nf);d(io.$$.fragment,dU),dU.forEach(t),fU.forEach(t),N5=c(Z3),of=l(Z3,"SPAN",{});var mU=r(of);B5=n(mU,"Deployment with one GPU"),mU.forEach(t),Z3.forEach(t),Mg=c(e),kt=l(e,"P",{});var N3=r(kt);H5=n(N3,"To deploy DeepSpeed with one GPU adjust the "),Ip=l(N3,"A",{href:!0});var _U=r(Ip);W5=n(_U,"Trainer"),_U.forEach(t),F5=n(N3," command line arguments as follows:"),N3.forEach(t),Lg=c(e),d(uo.$$.fragment,e),Zg=c(e),Ae=l(e,"P",{});var Ac=r(Ae);V5=n(Ac,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),lf=l(Ac,"CODE",{});var vU=r(lf);Y5=n(vU,"--num_gpus=1"),vU.forEach(t),K5=n(Ac,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),co=l(Ac,"A",{href:!0,rel:!0});var gU=r(co);J5=n(gU,"documentation"),gU.forEach(t),X5=n(Ac," discusses the launcher options."),Ac.forEach(t),Ng=c(e),Rp=l(e,"P",{});var jU=r(Rp);Q5=n(jU,"Why would you want to use DeepSpeed with just one GPU?"),jU.forEach(t),Bg=c(e),Pt=l(e,"OL",{});var B3=r(Pt);rf=l(B3,"LI",{});var yU=r(rf);e6=n(yU,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),yU.forEach(t),s6=c(B3),pf=l(B3,"LI",{});var wU=r(pf);t6=n(wU,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),wU.forEach(t),B3.forEach(t),Hg=c(e),Up=l(e,"P",{});var bU=r(Up);a6=n(bU,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),bU.forEach(t),Wg=c(e),d(ho.$$.fragment,e),Fg=c(e),Gp=l(e,"P",{});var qU=r(Gp);n6=n(qU,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),qU.forEach(t),Vg=c(e),zt=l(e,"P",{});var H3=r(zt);o6=n(H3,"For a practical usage example of this type of deployment, please, see this "),fo=l(H3,"A",{href:!0,rel:!0});var EU=r(fo);l6=n(EU,"post"),EU.forEach(t),r6=n(H3,"."),H3.forEach(t),Yg=c(e),Mp=l(e,"P",{});var $U=r(Mp);p6=n($U,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),$U.forEach(t),Kg=c(e),Lp=l(e,"P",{});var kU=r(Lp);i6=n(kU,"Notes:"),kU.forEach(t),Jg=c(e),Zp=l(e,"UL",{});var PU=r(Zp);ws=l(PU,"LI",{});var Sc=r(ws);mo=l(Sc,"P",{});var W3=r(mo);u6=n(W3,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),uf=l(W3,"CODE",{});var zU=r(uf);c6=n(zU,"CUDA_VISIBLE_DEVICES"),zU.forEach(t),h6=n(W3,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),W3.forEach(t),f6=c(Sc),d(_o.$$.fragment,Sc),d6=c(Sc),cf=l(Sc,"P",{});var DU=r(cf);m6=n(DU,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),DU.forEach(t),Sc.forEach(t),PU.forEach(t),Xg=c(e),Np=l(e,"A",{id:!0}),r(Np).forEach(t),Qg=c(e),bs=l(e,"H3",{class:!0});var F3=r(bs);Dt=l(F3,"A",{id:!0,class:!0,href:!0});var OU=r(Dt);hf=l(OU,"SPAN",{});var TU=r(hf);d(vo.$$.fragment,TU),TU.forEach(t),OU.forEach(t),_6=c(F3),ff=l(F3,"SPAN",{});var AU=r(ff);v6=n(AU,"Deployment in Notebooks"),AU.forEach(t),F3.forEach(t),ej=c(e),Ot=l(e,"P",{});var V3=r(Ot);g6=n(V3,"The problem with running notebook cells as a script is that there is no normal "),df=l(V3,"CODE",{});var SU=r(df);j6=n(SU,"deepspeed"),SU.forEach(t),y6=n(V3,` launcher to rely on, so
under certain setups we have to emulate it.`),V3.forEach(t),sj=c(e),Bp=l(e,"P",{});var CU=r(Bp);w6=n(CU,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),CU.forEach(t),tj=c(e),d(go.$$.fragment,e),aj=c(e),Tt=l(e,"P",{});var Y3=r(Tt);b6=n(Y3,"Note: "),mf=l(Y3,"CODE",{});var xU=r(mf);q6=n(xU,"..."),xU.forEach(t),E6=n(Y3," stands for the normal arguments that you\u2019d pass to the functions."),Y3.forEach(t),nj=c(e),Hp=l(e,"P",{});var IU=r(Hp);$6=n(IU,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),IU.forEach(t),oj=c(e),Wp=l(e,"P",{});var RU=r(Wp);k6=n(RU,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),RU.forEach(t),lj=c(e),d(jo.$$.fragment,e),rj=c(e),Se=l(e,"P",{});var Cc=r(Se);P6=n(Cc,"If the training script is in a normal file and not in the notebook cells, you can launch "),_f=l(Cc,"CODE",{});var UU=r(_f);z6=n(UU,"deepspeed"),UU.forEach(t),D6=n(Cc,` normally via
shell from a cell. For example, to use `),vf=l(Cc,"CODE",{});var GU=r(vf);O6=n(GU,"run_translation.py"),GU.forEach(t),T6=n(Cc," you would launch it with:"),Cc.forEach(t),pj=c(e),d(yo.$$.fragment,e),ij=c(e),At=l(e,"P",{});var K3=r(At);A6=n(K3,"or with "),gf=l(K3,"CODE",{});var MU=r(gf);S6=n(MU,"%%bash"),MU.forEach(t),C6=n(K3," magic, where you can write a multi-line code for the shell program to run:"),K3.forEach(t),uj=c(e),d(wo.$$.fragment,e),cj=c(e),Fp=l(e,"P",{});var LU=r(Fp);x6=n(LU,"In such case you don\u2019t need any of the code presented at the beginning of this section."),LU.forEach(t),hj=c(e),St=l(e,"P",{});var J3=r(St);I6=n(J3,"Note: While "),jf=l(J3,"CODE",{});var ZU=r(jf);R6=n(ZU,"%%bash"),ZU.forEach(t),U6=n(J3,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),J3.forEach(t),fj=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),dj=c(e),qs=l(e,"H3",{class:!0});var X3=r(qs);Ct=l(X3,"A",{id:!0,class:!0,href:!0});var NU=r(Ct);yf=l(NU,"SPAN",{});var BU=r(yf);d(bo.$$.fragment,BU),BU.forEach(t),NU.forEach(t),G6=c(X3),wf=l(X3,"SPAN",{});var HU=r(wf);M6=n(HU,"Configuration"),HU.forEach(t),X3.forEach(t),mj=c(e),xt=l(e,"P",{});var Q3=r(xt);L6=n(Q3,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),qo=l(Q3,"A",{href:!0,rel:!0});var WU=r(qo);Z6=n(WU,"following documentation"),WU.forEach(t),N6=n(Q3,"."),Q3.forEach(t),_j=c(e),It=l(e,"P",{});var eq=r(It);B6=n(eq,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Eo=l(eq,"A",{href:!0,rel:!0});var FU=r(Eo);H6=n(FU,`the DeepSpeedExamples
repo`),FU.forEach(t),W6=n(eq,":"),eq.forEach(t),vj=c(e),d($o.$$.fragment,e),gj=c(e),Rt=l(e,"P",{});var sq=r(Rt);F6=n(sq,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),bf=l(sq,"CODE",{});var VU=r(bf);V6=n(VU,".json"),VU.forEach(t),Y6=n(sq," files with:"),sq.forEach(t),jj=c(e),d(ko.$$.fragment,e),yj=c(e),Ut=l(e,"P",{});var tq=r(Ut);K6=n(tq,"Some more examples are to be found in the "),Po=l(tq,"A",{href:!0,rel:!0});var YU=r(Po);J6=n(YU,"main repo"),YU.forEach(t),X6=n(tq," as well."),tq.forEach(t),wj=c(e),Yp=l(e,"P",{});var KU=r(Yp);Q6=n(KU,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),KU.forEach(t),bj=c(e),X=l(e,"P",{});var bn=r(X);e4=n(bn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),qf=l(bn,"CODE",{});var JU=r(qf);s4=n(JU,"AdamW"),JU.forEach(t),t4=n(bn," optimizer and "),Ef=l(bn,"CODE",{});var XU=r(Ef);a4=n(XU,"WarmupLR"),XU.forEach(t),n4=n(bn,` scheduler and will enable mixed
precision training if `),$f=l(bn,"CODE",{});var QU=r($f);o4=n(QU,"--fp16"),QU.forEach(t),l4=n(bn," is passed:"),bn.forEach(t),qj=c(e),d(zo.$$.fragment,e),Ej=c(e),Gt=l(e,"P",{});var aq=r(Gt);r4=n(aq,"When you execute the program, DeepSpeed will log the configuration it received from the "),Kp=l(aq,"A",{href:!0});var eG=r(Kp);p4=n(eG,"Trainer"),eG.forEach(t),i4=n(aq,`
to the console, so you can see exactly what was the final configuration passed to it.`),aq.forEach(t),$j=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),kj=c(e),Es=l(e,"H3",{class:!0});var nq=r(Es);Mt=l(nq,"A",{id:!0,class:!0,href:!0});var sG=r(Mt);kf=l(sG,"SPAN",{});var tG=r(kf);d(Do.$$.fragment,tG),tG.forEach(t),sG.forEach(t),u4=c(nq),Pf=l(nq,"SPAN",{});var aG=r(Pf);c4=n(aG,"Passing Configuration"),aG.forEach(t),nq.forEach(t),Pj=c(e),T=l(e,"P",{});var fe=r(T);h4=n(fe,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Xp=l(fe,"A",{href:!0});var nG=r(Xp);f4=n(nG,"Trainer"),nG.forEach(t),d4=n(fe," via "),Qp=l(fe,"A",{href:!0});var oG=r(Qp);m4=n(oG,"TrainingArguments"),oG.forEach(t),_4=n(fe," then for the "),zf=l(fe,"CODE",{});var lG=r(zf);v4=n(lG,"deepspeed"),lG.forEach(t),g4=n(fe,` argument you can
pass a nested `),Df=l(fe,"CODE",{});var rG=r(Df);j4=n(rG,"dict"),rG.forEach(t),y4=n(fe,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),ei=l(fe,"A",{href:!0});var pG=r(ei);w4=n(pG,"TrainingArguments"),pG.forEach(t),b4=n(fe,"."),fe.forEach(t),zj=c(e),si=l(e,"P",{});var iG=r(si);q4=n(iG,"To summarize you can do:"),iG.forEach(t),Dj=c(e),d(Oo.$$.fragment,e),Oj=c(e),ti=l(e,"P",{});var uG=r(ti);E4=n(uG,"or:"),uG.forEach(t),Tj=c(e),d(To.$$.fragment,e),Aj=c(e),ai=l(e,"A",{id:!0}),r(ai).forEach(t),Sj=c(e),$s=l(e,"H3",{class:!0});var oq=r($s);Lt=l(oq,"A",{id:!0,class:!0,href:!0});var cG=r(Lt);Of=l(cG,"SPAN",{});var hG=r(Of);d(Ao.$$.fragment,hG),hG.forEach(t),cG.forEach(t),$4=c(oq),Tf=l(oq,"SPAN",{});var fG=r(Tf);k4=n(fG,"Shared Configuration"),fG.forEach(t),oq.forEach(t),Cj=c(e),d(Zt.$$.fragment,e),xj=c(e),Ce=l(e,"P",{});var xc=r(Ce);P4=n(xc,"Some configuration values are required by both the "),ni=l(xc,"A",{href:!0});var dG=r(ni);z4=n(dG,"Trainer"),dG.forEach(t),D4=n(xc,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),oi=l(xc,"A",{href:!0});var mG=r(oi);O4=n(mG,"Trainer"),mG.forEach(t),T4=n(xc," command line arguments."),xc.forEach(t),Ij=c(e),Nt=l(e,"P",{});var lq=r(Nt);A4=n(lq,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),li=l(lq,"A",{href:!0});var _G=r(li);S4=n(_G,"Trainer"),_G.forEach(t),C4=n(lq,` do the majority
of configuration for you.`),lq.forEach(t),Rj=c(e),xe=l(e,"P",{});var Ic=r(xe);x4=n(Ic,"Therefore, in the rest of this guide you will find a special configuration value: "),Af=l(Ic,"CODE",{});var vG=r(Af);I4=n(vG,"auto"),vG.forEach(t),R4=n(Ic,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),ri=l(Ic,"A",{href:!0});var gG=r(ri);U4=n(gG,"Trainer"),gG.forEach(t),G4=n(Ic,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Ic.forEach(t),Uj=c(e),pi=l(e,"P",{});var jG=r(pi);M4=n(jG,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),jG.forEach(t),Gj=c(e),Bt=l(e,"P",{});var rq=r(Bt);L4=n(rq,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),ii=l(rq,"A",{href:!0});var yG=r(ii);Z4=n(yG,"TrainingArguments"),yG.forEach(t),N4=n(rq," based on that. The steps are:"),rq.forEach(t),Mj=c(e),Ht=l(e,"OL",{});var pq=r(Ht);Sf=l(pq,"LI",{});var wG=r(Sf);B4=n(wG,"Create or load the DeepSpeed configuration to be used as a master configuration"),wG.forEach(t),H4=c(pq),So=l(pq,"LI",{});var iq=r(So);W4=n(iq,"Create the "),ui=l(iq,"A",{href:!0});var bG=r(ui);F4=n(bG,"TrainingArguments"),bG.forEach(t),V4=n(iq," object based on these values"),iq.forEach(t),pq.forEach(t),Lj=c(e),Q=l(e,"P",{});var qn=r(Q);Y4=n(qn,"Do note that some values, such as "),Cf=l(qn,"CODE",{});var qG=r(Cf);K4=n(qG,"scheduler.params.total_num_steps"),qG.forEach(t),J4=n(qn,` are calculated by
`),ci=l(qn,"A",{href:!0});var EG=r(ci);X4=n(EG,"Trainer"),EG.forEach(t),Q4=n(qn," during "),xf=l(qn,"CODE",{});var $G=r(xf);e8=n($G,"train"),$G.forEach(t),s8=n(qn,", but you can of course do the math yourself."),qn.forEach(t),Zj=c(e),hi=l(e,"A",{id:!0}),r(hi).forEach(t),Nj=c(e),ks=l(e,"H3",{class:!0});var uq=r(ks);Wt=l(uq,"A",{id:!0,class:!0,href:!0});var kG=r(Wt);If=l(kG,"SPAN",{});var PG=r(If);d(Co.$$.fragment,PG),PG.forEach(t),kG.forEach(t),t8=c(uq),Rf=l(uq,"SPAN",{});var zG=r(Rf);a8=n(zG,"ZeRO"),zG.forEach(t),uq.forEach(t),Bj=c(e),xo=l(e,"P",{});var SI=r(xo);Io=l(SI,"A",{href:!0,rel:!0});var DG=r(Io);n8=n(DG,"Zero Redundancy Optimizer (ZeRO)"),DG.forEach(t),o8=n(SI,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),SI.forEach(t),Hj=c(e),Ie=l(e,"P",{});var Rc=r(Ie);l8=n(Rc,"The "),Uf=l(Rc,"CODE",{});var OG=r(Uf);r8=n(OG,"zero_optimization"),OG.forEach(t),p8=n(Rc," section of the configuration file is the most important part ("),Ro=l(Rc,"A",{href:!0,rel:!0});var TG=r(Ro);i8=n(TG,"docs"),TG.forEach(t),u8=n(Rc,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),Rc.forEach(t),Wj=c(e),Ft=l(e,"P",{});var cq=r(Ft);c8=n(cq,"This section has to be configured exclusively via DeepSpeed configuration - the "),fi=l(cq,"A",{href:!0});var AG=r(fi);h8=n(AG,"Trainer"),AG.forEach(t),f8=n(cq,` provides
no equivalent command line arguments.`),cq.forEach(t),Fj=c(e),di=l(e,"P",{});var SG=r(di);d8=n(SG,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),SG.forEach(t),Vj=c(e),mi=l(e,"A",{id:!0}),r(mi).forEach(t),Yj=c(e),Ps=l(e,"H4",{class:!0});var hq=r(Ps);Vt=l(hq,"A",{id:!0,class:!0,href:!0});var CG=r(Vt);Gf=l(CG,"SPAN",{});var xG=r(Gf);d(Uo.$$.fragment,xG),xG.forEach(t),CG.forEach(t),m8=c(hq),Mf=l(hq,"SPAN",{});var IG=r(Mf);_8=n(IG,"ZeRO-2 Config"),IG.forEach(t),hq.forEach(t),Kj=c(e),_i=l(e,"P",{});var RG=r(_i);v8=n(RG,"The following is an example of configuration for ZeRO stage 2:"),RG.forEach(t),Jj=c(e),d(Go.$$.fragment,e),Xj=c(e),vi=l(e,"P",{});var UG=r(vi);Lf=l(UG,"STRONG",{});var GG=r(Lf);g8=n(GG,"Performance tuning:"),GG.forEach(t),UG.forEach(t),Qj=c(e),Re=l(e,"UL",{});var Uc=r(Re);zs=l(Uc,"LI",{});var Gc=r(zs);j8=n(Gc,"enabling "),Zf=l(Gc,"CODE",{});var MG=r(Zf);y8=n(MG,"offload_optimizer"),MG.forEach(t),w8=n(Gc," should reduce GPU RAM usage (it requires "),Nf=l(Gc,"CODE",{});var LG=r(Nf);b8=n(LG,'"stage": 2'),LG.forEach(t),q8=n(Gc,")"),Gc.forEach(t),E8=c(Uc),A=l(Uc,"LI",{});var K=r(A);Bf=l(K,"CODE",{});var ZG=r(Bf);$8=n(ZG,'"overlap_comm": true'),ZG.forEach(t),k8=n(K," trades off increased GPU RAM usage to lower all-reduce latency. "),Hf=l(K,"CODE",{});var NG=r(Hf);P8=n(NG,"overlap_comm"),NG.forEach(t),z8=n(K,` uses 4.5x
the `),Wf=l(K,"CODE",{});var BG=r(Wf);D8=n(BG,"allgather_bucket_size"),BG.forEach(t),O8=n(K," and "),Ff=l(K,"CODE",{});var HG=r(Ff);T8=n(HG,"reduce_bucket_size"),HG.forEach(t),A8=n(K,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Vf=l(K,"CODE",{});var WG=r(Vf);S8=n(WG,"5e8 x 2Bytes x 2 x 4.5"),WG.forEach(t),C8=n(K,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Yf=l(K,"CODE",{});var FG=r(Yf);x8=n(FG,"2e8"),FG.forEach(t),I8=n(K,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),K.forEach(t),R8=c(Uc),Kf=l(Uc,"LI",{});var VG=r(Kf);U8=n(VG,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),VG.forEach(t),Uc.forEach(t),ey=c(e),gi=l(e,"A",{id:!0}),r(gi).forEach(t),sy=c(e),Ds=l(e,"H4",{class:!0});var fq=r(Ds);Yt=l(fq,"A",{id:!0,class:!0,href:!0});var YG=r(Yt);Jf=l(YG,"SPAN",{});var KG=r(Jf);d(Mo.$$.fragment,KG),KG.forEach(t),YG.forEach(t),G8=c(fq),Xf=l(fq,"SPAN",{});var JG=r(Xf);M8=n(JG,"ZeRO-3 Config"),JG.forEach(t),fq.forEach(t),ty=c(e),ji=l(e,"P",{});var XG=r(ji);L8=n(XG,"The following is an example of configuration for ZeRO stage 3:"),XG.forEach(t),ay=c(e),d(Lo.$$.fragment,e),ny=c(e),N=l(e,"P",{});var us=r(N);Z8=n(us,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Qf=l(us,"CODE",{});var QG=r(Qf);N8=n(QG,'"device": "cpu"'),QG.forEach(t),B8=n(us,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),ed=l(us,"CODE",{});var eM=r(ed);H8=n(eM,"none"),eM.forEach(t),W8=n(us," instead of "),sd=l(us,"CODE",{});var sM=r(sd);F8=n(sM,"cpu"),sM.forEach(t),V8=n(us," for the "),td=l(us,"CODE",{});var tM=r(td);Y8=n(tM,"device"),tM.forEach(t),K8=n(us,` entry. Offloading to
NVMe is discussed further down.`),us.forEach(t),oy=c(e),Ue=l(e,"P",{});var Mc=r(Ue);J8=n(Mc,"Pinned memory is enabled with "),ad=l(Mc,"CODE",{});var aM=r(ad);X8=n(aM,"pin_memory"),aM.forEach(t),Q8=n(Mc," set to "),nd=l(Mc,"CODE",{});var nM=r(nd);e7=n(nM,"true"),nM.forEach(t),s7=n(Mc,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Mc.forEach(t),ly=c(e),yi=l(e,"P",{});var oM=r(yi);od=l(oM,"STRONG",{});var lM=r(od);t7=n(lM,"Performance tuning:"),lM.forEach(t),oM.forEach(t),ry=c(e),Kt=l(e,"UL",{});var dq=r(Kt);Zo=l(dq,"LI",{});var mq=r(Zo);ld=l(mq,"CODE",{});var rM=r(ld);a7=n(rM,"stage3_max_live_parameters"),rM.forEach(t),n7=n(mq,": "),rd=l(mq,"CODE",{});var pM=r(rd);o7=n(pM,"1e9"),pM.forEach(t),mq.forEach(t),l7=c(dq),No=l(dq,"LI",{});var _q=r(No);pd=l(_q,"CODE",{});var iM=r(pd);r7=n(iM,"stage3_max_reuse_distance"),iM.forEach(t),p7=n(_q,": "),id=l(_q,"CODE",{});var uM=r(id);i7=n(uM,"1e9"),uM.forEach(t),_q.forEach(t),dq.forEach(t),py=c(e),S=l(e,"P",{});var de=r(S);u7=n(de,"If hitting OOM reduce "),ud=l(de,"CODE",{});var cM=r(ud);c7=n(cM,"stage3_max_live_parameters"),cM.forEach(t),h7=n(de," and "),cd=l(de,"CODE",{});var hM=r(cd);f7=n(hM,"stage3_max_reuse_distance"),hM.forEach(t),d7=n(de,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),hd=l(de,"CODE",{});var fM=r(hd);m7=n(fM,"1e9"),fM.forEach(t),_7=n(de,` would consume ~2GB. The memory is shared by
`),fd=l(de,"CODE",{});var dM=r(fd);v7=n(dM,"stage3_max_live_parameters"),dM.forEach(t),g7=n(de," and "),dd=l(de,"CODE",{});var mM=r(dd);j7=n(mM,"stage3_max_reuse_distance"),mM.forEach(t),y7=n(de,", so it\u2019s not additive, it\u2019s just 2GB total."),de.forEach(t),iy=c(e),we=l(e,"P",{});var tp=r(we);md=l(tp,"CODE",{});var _M=r(md);w7=n(_M,"stage3_max_live_parameters"),_M.forEach(t),b7=n(tp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),_d=l(tp,"CODE",{});var vM=r(_d);q7=n(vM,"stage3_max_reuse_distance"),vM.forEach(t),E7=n(tp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),vd=l(tp,"CODE",{});var gM=r(vd);$7=n(gM,"stage3_max_reuse_distance"),gM.forEach(t),k7=n(tp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),tp.forEach(t),uy=c(e),wi=l(e,"P",{});var jM=r(wi);P7=n(jM,"The following configuration values depend on the model\u2019s hidden size:"),jM.forEach(t),cy=c(e),Ge=l(e,"UL",{});var Lc=r(Ge);Bo=l(Lc,"LI",{});var vq=r(Bo);gd=l(vq,"CODE",{});var yM=r(gd);z7=n(yM,"reduce_bucket_size"),yM.forEach(t),D7=n(vq,": "),jd=l(vq,"CODE",{});var wM=r(jd);O7=n(wM,"hidden_size*hidden_size"),wM.forEach(t),vq.forEach(t),T7=c(Lc),Ho=l(Lc,"LI",{});var gq=r(Ho);yd=l(gq,"CODE",{});var bM=r(yd);A7=n(bM,"stage3_prefetch_bucket_size"),bM.forEach(t),S7=n(gq,": "),wd=l(gq,"CODE",{});var qM=r(wd);C7=n(qM,"0.9 * hidden_size * hidden_size"),qM.forEach(t),gq.forEach(t),x7=c(Lc),Wo=l(Lc,"LI",{});var jq=r(Wo);bd=l(jq,"CODE",{});var EM=r(bd);I7=n(EM,"stage3_param_persistence_threshold"),EM.forEach(t),R7=n(jq,": "),qd=l(jq,"CODE",{});var $M=r(qd);U7=n($M,"10 * hidden_size"),$M.forEach(t),jq.forEach(t),Lc.forEach(t),hy=c(e),Me=l(e,"P",{});var Zc=r(Me);G7=n(Zc,"therefore set these values to "),Ed=l(Zc,"CODE",{});var kM=r(Ed);M7=n(kM,"auto"),kM.forEach(t),L7=n(Zc," and the "),bi=l(Zc,"A",{href:!0});var PM=r(bi);Z7=n(PM,"Trainer"),PM.forEach(t),N7=n(Zc,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),Zc.forEach(t),fy=c(e),Fo=l(e,"P",{});var CI=r(Fo);$d=l(CI,"CODE",{});var zM=r($d);B7=n(zM,"stage3_gather_fp16_weights_on_model_save"),zM.forEach(t),H7=n(CI,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),CI.forEach(t),dy=c(e),ee=l(e,"P",{});var En=r(ee);W7=n(En,"If you\u2019re migrating from ZeRO-2 configuration note that "),kd=l(En,"CODE",{});var DM=r(kd);F7=n(DM,"allgather_partitions"),DM.forEach(t),V7=n(En,", "),Pd=l(En,"CODE",{});var OM=r(Pd);Y7=n(OM,"allgather_bucket_size"),OM.forEach(t),K7=n(En,` and
`),zd=l(En,"CODE",{});var TM=r(zd);J7=n(TM,"reduce_scatter"),TM.forEach(t),X7=n(En,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),En.forEach(t),my=c(e),qi=l(e,"UL",{});var AM=r(qi);Vo=l(AM,"LI",{});var yq=r(Vo);Dd=l(yq,"CODE",{});var SM=r(Dd);Q7=n(SM,"sub_group_size"),SM.forEach(t),e9=n(yq,": "),Od=l(yq,"CODE",{});var CM=r(Od);s9=n(CM,"1e9"),CM.forEach(t),yq.forEach(t),AM.forEach(t),_y=c(e),be=l(e,"P",{});var ap=r(be);Td=l(ap,"CODE",{});var xM=r(Td);t9=n(xM,"sub_group_size"),xM.forEach(t),a9=n(ap,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),Ad=l(ap,"CODE",{});var IM=r(Ad);n9=n(IM,"sub_group_size"),IM.forEach(t),o9=n(ap,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),Sd=l(ap,"CODE",{});var RM=r(Sd);l9=n(RM,"sub_group_size"),RM.forEach(t),r9=n(ap,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),ap.forEach(t),vy=c(e),Le=l(e,"P",{});var Nc=r(Le);p9=n(Nc,"You can leave "),Cd=l(Nc,"CODE",{});var UM=r(Cd);i9=n(UM,"sub_group_size"),UM.forEach(t),u9=n(Nc," to its default value of "),xd=l(Nc,"EM",{});var GM=r(xd);c9=n(GM,"1e9"),GM.forEach(t),h9=n(Nc,` when not using NVMe offload. You may want to change its
default value in the following cases:`),Nc.forEach(t),gy=c(e),Jt=l(e,"OL",{});var wq=r(Jt);Yo=l(wq,"LI",{});var bq=r(Yo);f9=n(bq,"Running into OOM during optimizer step: Reduce "),Id=l(bq,"CODE",{});var MM=r(Id);d9=n(MM,"sub_group_size"),MM.forEach(t),m9=n(bq," to reduce memory utilization of temporary buffers"),bq.forEach(t),_9=c(wq),Ko=l(wq,"LI",{});var qq=r(Ko);v9=n(qq,"Optimizer Step is taking a long time: Increase "),Rd=l(qq,"CODE",{});var LM=r(Rd);g9=n(LM,"sub_group_size"),LM.forEach(t),j9=n(qq,` to improve bandwidth utilization as a result of
the increased data buffers.`),qq.forEach(t),wq.forEach(t),jy=c(e),Ei=l(e,"A",{id:!0}),r(Ei).forEach(t),yy=c(e),Os=l(e,"H3",{class:!0});var Eq=r(Os);Xt=l(Eq,"A",{id:!0,class:!0,href:!0});var ZM=r(Xt);Ud=l(ZM,"SPAN",{});var NM=r(Ud);d(Jo.$$.fragment,NM),NM.forEach(t),ZM.forEach(t),y9=c(Eq),Gd=l(Eq,"SPAN",{});var BM=r(Gd);w9=n(BM,"NVMe Support"),BM.forEach(t),Eq.forEach(t),wy=c(e),$i=l(e,"P",{});var HM=r($i);b9=n(HM,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),HM.forEach(t),by=c(e),ki=l(e,"P",{});var WM=r(ki);q9=n(WM,"The following configuration example enables NVMe to offload both optimizer states and the params:"),WM.forEach(t),qy=c(e),d(Xo.$$.fragment,e),Ey=c(e),Qt=l(e,"P",{});var $q=r(Qt);E9=n($q,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),Md=l($q,"EM",{});var FM=r(Md);$9=n(FM,"\u201Cdevice\u201D: \u201Ccpu\u201D"),FM.forEach(t),k9=n($q,")."),$q.forEach(t),$y=c(e),Ze=l(e,"P",{});var Bc=r(Ze);P9=n(Bc,"Here is the full documentation for offloading "),Qo=l(Bc,"A",{href:!0,rel:!0});var VM=r(Qo);z9=n(VM,"optimizer states"),VM.forEach(t),D9=n(Bc," and "),el=l(Bc,"A",{href:!0,rel:!0});var YM=r(el);O9=n(YM,"parameters"),YM.forEach(t),T9=n(Bc,"."),Bc.forEach(t),ky=c(e),ea=l(e,"P",{});var kq=r(ea);A9=n(kq,"Make sure that your "),Ld=l(kq,"CODE",{});var KM=r(Ld);S9=n(KM,"nvme_path"),KM.forEach(t),C9=n(kq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),kq.forEach(t),Py=c(e),Ne=l(e,"P",{});var Hc=r(Ne);x9=n(Hc,"In order to figure out the optimal "),Zd=l(Hc,"CODE",{});var JM=r(Zd);I9=n(JM,"aio"),JM.forEach(t),R9=n(Hc,` configuration block you must run a benchmark on your target setup, as
`),sl=l(Hc,"A",{href:!0,rel:!0});var XM=r(sl);U9=n(XM,"explained here"),XM.forEach(t),G9=n(Hc,"."),Hc.forEach(t),zy=c(e),Pi=l(e,"A",{id:!0}),r(Pi).forEach(t),Dy=c(e),Ts=l(e,"H4",{class:!0});var Pq=r(Ts);sa=l(Pq,"A",{id:!0,class:!0,href:!0});var QM=r(sa);Nd=l(QM,"SPAN",{});var eL=r(Nd);d(tl.$$.fragment,eL),eL.forEach(t),QM.forEach(t),M9=c(Pq),Bd=l(Pq,"SPAN",{});var sL=r(Bd);L9=n(sL,"ZeRO-2 vs ZeRO-3 Performance"),sL.forEach(t),Pq.forEach(t),Oy=c(e),zi=l(e,"P",{});var tL=r(zi);Z9=n(tL,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),tL.forEach(t),Ty=c(e),Di=l(e,"P",{});var aL=r(Di);N9=n(aL,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),aL.forEach(t),Ay=c(e),ta=l(e,"UL",{});var zq=r(ta);As=l(zq,"LI",{});var Wc=r(As);B9=n(Wc,"set "),Hd=l(Wc,"CODE",{});var nL=r(Hd);H9=n(nL,"stage3_param_persistence_threshold"),nL.forEach(t),W9=n(Wc," to a very large number - larger than the largest parameter, e.g., "),Wd=l(Wc,"CODE",{});var oL=r(Wd);F9=n(oL,"6 * hidden_size * hidden_size"),oL.forEach(t),V9=n(Wc,". This will keep the parameters on the GPUs."),Wc.forEach(t),Y9=c(zq),al=l(zq,"LI",{});var Dq=r(al);K9=n(Dq,"turn off "),Fd=l(Dq,"CODE",{});var lL=r(Fd);J9=n(lL,"offload_params"),lL.forEach(t),X9=n(Dq," since ZeRO-2 doesn\u2019t have that option."),Dq.forEach(t),zq.forEach(t),Sy=c(e),Be=l(e,"P",{});var Fc=r(Be);Q9=n(Fc,"The performance will likely improve significantly with just "),Vd=l(Fc,"CODE",{});var rL=r(Vd);ek=n(rL,"offload_params"),rL.forEach(t),sk=n(Fc,` turned off, even if you don\u2019t change
`),Yd=l(Fc,"CODE",{});var pL=r(Yd);tk=n(pL,"stage3_param_persistence_threshold"),pL.forEach(t),ak=n(Fc,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Fc.forEach(t),Cy=c(e),Oi=l(e,"A",{id:!0}),r(Oi).forEach(t),xy=c(e),Ss=l(e,"H4",{class:!0});var Oq=r(Ss);aa=l(Oq,"A",{id:!0,class:!0,href:!0});var iL=r(aa);Kd=l(iL,"SPAN",{});var uL=r(Kd);d(nl.$$.fragment,uL),uL.forEach(t),iL.forEach(t),nk=c(Oq),Jd=l(Oq,"SPAN",{});var cL=r(Jd);ok=n(cL,"ZeRO-2 Example"),cL.forEach(t),Oq.forEach(t),Iy=c(e),na=l(e,"P",{});var Tq=r(na);lk=n(Tq,"Here is a full ZeRO-2 auto-configuration file "),Xd=l(Tq,"CODE",{});var hL=r(Xd);rk=n(hL,"ds_config_zero2.json"),hL.forEach(t),pk=n(Tq,":"),Tq.forEach(t),Ry=c(e),d(ol.$$.fragment,e),Uy=c(e),oa=l(e,"P",{});var Aq=r(oa);ik=n(Aq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Qd=l(Aq,"CODE",{});var fL=r(Qd);uk=n(fL,"auto"),fL.forEach(t),ck=n(Aq," settings in it."),Aq.forEach(t),Gy=c(e),d(ll.$$.fragment,e),My=c(e),Ti=l(e,"A",{id:!0}),r(Ti).forEach(t),Ly=c(e),Cs=l(e,"H4",{class:!0});var Sq=r(Cs);la=l(Sq,"A",{id:!0,class:!0,href:!0});var dL=r(la);em=l(dL,"SPAN",{});var mL=r(em);d(rl.$$.fragment,mL),mL.forEach(t),dL.forEach(t),hk=c(Sq),sm=l(Sq,"SPAN",{});var _L=r(sm);fk=n(_L,"ZeRO-3 Example"),_L.forEach(t),Sq.forEach(t),Zy=c(e),ra=l(e,"P",{});var Cq=r(ra);dk=n(Cq,"Here is a full ZeRO-3 auto-configuration file "),tm=l(Cq,"CODE",{});var vL=r(tm);mk=n(vL,"ds_config_zero3.json"),vL.forEach(t),_k=n(Cq,":"),Cq.forEach(t),Ny=c(e),d(pl.$$.fragment,e),By=c(e),pa=l(e,"P",{});var xq=r(pa);vk=n(xq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),am=l(xq,"CODE",{});var gL=r(am);gk=n(gL,"auto"),gL.forEach(t),jk=n(xq," settings in it."),xq.forEach(t),Hy=c(e),d(il.$$.fragment,e),Wy=c(e),xs=l(e,"H3",{class:!0});var Iq=r(xs);ia=l(Iq,"A",{id:!0,class:!0,href:!0});var jL=r(ia);nm=l(jL,"SPAN",{});var yL=r(nm);d(ul.$$.fragment,yL),yL.forEach(t),jL.forEach(t),yk=c(Iq),om=l(Iq,"SPAN",{});var wL=r(om);wk=n(wL,"Optimizer and Scheduler"),wL.forEach(t),Iq.forEach(t),Fy=c(e),ua=l(e,"P",{});var Rq=r(ua);bk=n(Rq,"As long as you don\u2019t enable "),lm=l(Rq,"CODE",{});var bL=r(lm);qk=n(bL,"offload_optimizer"),bL.forEach(t),Ek=n(Rq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),Rq.forEach(t),Vy=c(e),Ai=l(e,"P",{});var qL=r(Ai);$k=n(qL,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),qL.forEach(t),Yy=c(e),ca=l(e,"P",{});var Uq=r(ca);kk=n(Uq,"It is possible to use a non-DeepSpeed optimizer when "),rm=l(Uq,"CODE",{});var EL=r(rm);Pk=n(EL,"offload_optimizer"),EL.forEach(t),zk=n(Uq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),Uq.forEach(t),Ky=c(e),Si=l(e,"A",{id:!0}),r(Si).forEach(t),Jy=c(e),Is=l(e,"H4",{class:!0});var Gq=r(Is);ha=l(Gq,"A",{id:!0,class:!0,href:!0});var $L=r(ha);pm=l($L,"SPAN",{});var kL=r(pm);d(cl.$$.fragment,kL),kL.forEach(t),$L.forEach(t),Dk=c(Gq),im=l(Gq,"SPAN",{});var PL=r(im);Ok=n(PL,"Optimizer"),PL.forEach(t),Gq.forEach(t),Xy=c(e),He=l(e,"P",{});var Vc=r(He);Tk=n(Vc,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),um=l(Vc,"CODE",{});var zL=r(um);Ak=n(zL,"torch"),zL.forEach(t),Sk=n(Vc,". The full documentation is "),hl=l(Vc,"A",{href:!0,rel:!0});var DL=r(hl);Ck=n(DL,"here"),DL.forEach(t),xk=n(Vc,"."),Vc.forEach(t),Qy=c(e),q=l(e,"P",{});var z=r(q);Ik=n(z,"If you don\u2019t configure the "),cm=l(z,"CODE",{});var OL=r(cm);Rk=n(OL,"optimizer"),OL.forEach(t),Uk=n(z," entry in the configuration file, the "),Ci=l(z,"A",{href:!0});var TL=r(Ci);Gk=n(TL,"Trainer"),TL.forEach(t),Mk=n(z,` will
automatically set it to `),hm=l(z,"CODE",{});var AL=r(hm);Lk=n(AL,"AdamW"),AL.forEach(t),Zk=n(z,` and will use the supplied values or the defaults for the following command line
arguments: `),fm=l(z,"CODE",{});var SL=r(fm);Nk=n(SL,"--learning_rate"),SL.forEach(t),Bk=n(z,", "),dm=l(z,"CODE",{});var CL=r(dm);Hk=n(CL,"--adam_beta1"),CL.forEach(t),Wk=n(z,", "),mm=l(z,"CODE",{});var xL=r(mm);Fk=n(xL,"--adam_beta2"),xL.forEach(t),Vk=n(z,", "),_m=l(z,"CODE",{});var IL=r(_m);Yk=n(IL,"--adam_epsilon"),IL.forEach(t),Kk=n(z," and "),vm=l(z,"CODE",{});var RL=r(vm);Jk=n(RL,"--weight_decay"),RL.forEach(t),Xk=n(z,"."),z.forEach(t),ew=c(e),We=l(e,"P",{});var Yc=r(We);Qk=n(Yc,"Here is an example of the auto-configured "),gm=l(Yc,"CODE",{});var UL=r(gm);eP=n(UL,"optimizer"),UL.forEach(t),sP=n(Yc," entry for "),jm=l(Yc,"CODE",{});var GL=r(jm);tP=n(GL,"AdamW"),GL.forEach(t),aP=n(Yc,":"),Yc.forEach(t),sw=c(e),d(fl.$$.fragment,e),tw=c(e),xi=l(e,"P",{});var ML=r(xi);nP=n(ML,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),ML.forEach(t),aw=c(e),se=l(e,"UL",{});var $n=r(se);dl=l($n,"LI",{});var Mq=r(dl);ym=l(Mq,"CODE",{});var LL=r(ym);oP=n(LL,"lr"),LL.forEach(t),lP=n(Mq," with the value of "),wm=l(Mq,"CODE",{});var ZL=r(wm);rP=n(ZL,"--learning_rate"),ZL.forEach(t),Mq.forEach(t),pP=c($n),ml=l($n,"LI",{});var Lq=r(ml);bm=l(Lq,"CODE",{});var NL=r(bm);iP=n(NL,"betas"),NL.forEach(t),uP=n(Lq," with the value of "),qm=l(Lq,"CODE",{});var BL=r(qm);cP=n(BL,"--adam_beta1 --adam_beta2"),BL.forEach(t),Lq.forEach(t),hP=c($n),_l=l($n,"LI",{});var Zq=r(_l);Em=l(Zq,"CODE",{});var HL=r(Em);fP=n(HL,"eps"),HL.forEach(t),dP=n(Zq," with the value of "),$m=l(Zq,"CODE",{});var WL=r($m);mP=n(WL,"--adam_epsilon"),WL.forEach(t),Zq.forEach(t),_P=c($n),vl=l($n,"LI",{});var Nq=r(vl);km=l(Nq,"CODE",{});var FL=r(km);vP=n(FL,"weight_decay"),FL.forEach(t),gP=n(Nq," with the value of "),Pm=l(Nq,"CODE",{});var VL=r(Pm);jP=n(VL,"--weight_decay"),VL.forEach(t),Nq.forEach(t),$n.forEach(t),nw=c(e),Ii=l(e,"P",{});var YL=r(Ii);yP=n(YL,"Therefore please remember to tune the shared hyperparameters on the command line."),YL.forEach(t),ow=c(e),Ri=l(e,"P",{});var KL=r(Ri);wP=n(KL,"You can also set the values explicitly:"),KL.forEach(t),lw=c(e),d(gl.$$.fragment,e),rw=c(e),fa=l(e,"P",{});var Bq=r(fa);bP=n(Bq,"But then you\u2019re on your own synchronizing the "),Ui=l(Bq,"A",{href:!0});var JL=r(Ui);qP=n(JL,"Trainer"),JL.forEach(t),EP=n(Bq,` command line arguments and the DeepSpeed
configuration.`),Bq.forEach(t),pw=c(e),Gi=l(e,"P",{});var XL=r(Gi);$P=n(XL,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),XL.forEach(t),iw=c(e),d(jl.$$.fragment,e),uw=c(e),te=l(e,"P",{});var kn=r(te);kP=n(kn,"Similarly to "),zm=l(kn,"CODE",{});var QL=r(zm);PP=n(QL,"AdamW"),QL.forEach(t),zP=n(kn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Dm=l(kn,"CODE",{});var eZ=r(Dm);DP=n(eZ,"weight_decay"),eZ.forEach(t),OP=n(kn," around "),Om=l(kn,"CODE",{});var sZ=r(Om);TP=n(sZ,"0.01"),sZ.forEach(t),AP=n(kn,"."),kn.forEach(t),cw=c(e),Mi=l(e,"A",{id:!0}),r(Mi).forEach(t),hw=c(e),Rs=l(e,"H4",{class:!0});var Hq=r(Rs);da=l(Hq,"A",{id:!0,class:!0,href:!0});var tZ=r(da);Tm=l(tZ,"SPAN",{});var aZ=r(Tm);d(yl.$$.fragment,aZ),aZ.forEach(t),tZ.forEach(t),SP=c(Hq),Am=l(Hq,"SPAN",{});var nZ=r(Am);CP=n(nZ,"Scheduler"),nZ.forEach(t),Hq.forEach(t),fw=c(e),C=l(e,"P",{});var me=r(C);xP=n(me,"DeepSpeed supports "),Sm=l(me,"CODE",{});var oZ=r(Sm);IP=n(oZ,"LRRangeTest"),oZ.forEach(t),RP=n(me,", "),Cm=l(me,"CODE",{});var lZ=r(Cm);UP=n(lZ,"OneCycle"),lZ.forEach(t),GP=n(me,", "),xm=l(me,"CODE",{});var rZ=r(xm);MP=n(rZ,"WarmupLR"),rZ.forEach(t),LP=n(me," and "),Im=l(me,"CODE",{});var pZ=r(Im);ZP=n(pZ,"WarmupDecayLR"),pZ.forEach(t),NP=n(me,` learning rate schedulers. The full
documentation is `),wl=l(me,"A",{href:!0,rel:!0});var iZ=r(wl);BP=n(iZ,"here"),iZ.forEach(t),HP=n(me,"."),me.forEach(t),dw=c(e),Li=l(e,"P",{});var uZ=r(Li);WP=n(uZ,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),uZ.forEach(t),mw=c(e),ma=l(e,"UL",{});var Wq=r(ma);bl=l(Wq,"LI",{});var Fq=r(bl);Rm=l(Fq,"CODE",{});var cZ=r(Rm);FP=n(cZ,"WarmupLR"),cZ.forEach(t),VP=n(Fq," via "),Um=l(Fq,"CODE",{});var hZ=r(Um);YP=n(hZ,"--lr_scheduler_type constant_with_warmup"),hZ.forEach(t),Fq.forEach(t),KP=c(Wq),Fe=l(Wq,"LI",{});var np=r(Fe);Gm=l(np,"CODE",{});var fZ=r(Gm);JP=n(fZ,"WarmupDecayLR"),fZ.forEach(t),XP=n(np," via "),Mm=l(np,"CODE",{});var dZ=r(Mm);QP=n(dZ,"--lr_scheduler_type linear"),dZ.forEach(t),ez=n(np,". This is also the default value for "),Lm=l(np,"CODE",{});var mZ=r(Lm);sz=n(mZ,"--lr_scheduler_type"),mZ.forEach(t),tz=n(np,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),np.forEach(t),Wq.forEach(t),_w=c(e),P=l(e,"P",{});var W=r(P);az=n(W,"If you don\u2019t configure the "),Zm=l(W,"CODE",{});var _Z=r(Zm);nz=n(_Z,"scheduler"),_Z.forEach(t),oz=n(W," entry in the configuration file, the "),Zi=l(W,"A",{href:!0});var vZ=r(Zi);lz=n(vZ,"Trainer"),vZ.forEach(t),rz=n(W,` will use
the values of `),Nm=l(W,"CODE",{});var gZ=r(Nm);pz=n(gZ,"--lr_scheduler_type"),gZ.forEach(t),iz=n(W,", "),Bm=l(W,"CODE",{});var jZ=r(Bm);uz=n(jZ,"--learning_rate"),jZ.forEach(t),cz=n(W," and "),Hm=l(W,"CODE",{});var yZ=r(Hm);hz=n(yZ,"--warmup_steps"),yZ.forEach(t),fz=n(W," or "),Wm=l(W,"CODE",{});var wZ=r(Wm);dz=n(wZ,"--warmup_ratio"),wZ.forEach(t),mz=n(W,` to configure a
\u{1F917} Transformers version of it.`),W.forEach(t),vw=c(e),Ve=l(e,"P",{});var Kc=r(Ve);_z=n(Kc,"Here is an example of the auto-configured "),Fm=l(Kc,"CODE",{});var bZ=r(Fm);vz=n(bZ,"scheduler"),bZ.forEach(t),gz=n(Kc," entry for "),Vm=l(Kc,"CODE",{});var qZ=r(Vm);jz=n(qZ,"WarmupLR"),qZ.forEach(t),yz=n(Kc,":"),Kc.forEach(t),gw=c(e),d(ql.$$.fragment,e),jw=c(e),Ye=l(e,"P",{});var Jc=r(Ye);wz=n(Jc,"Since "),Ym=l(Jc,"EM",{});var EZ=r(Ym);bz=n(EZ,"\u201Cauto\u201D"),EZ.forEach(t),qz=n(Jc," is used the "),Ni=l(Jc,"A",{href:!0});var $Z=r(Ni);Ez=n($Z,"Trainer"),$Z.forEach(t),$z=n(Jc,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Jc.forEach(t),yw=c(e),ae=l(e,"UL",{});var Pn=r(ae);_a=l(Pn,"LI",{});var Tv=r(_a);Km=l(Tv,"CODE",{});var kZ=r(Km);kz=n(kZ,"warmup_min_lr"),kZ.forEach(t),Pz=n(Tv," with the value of "),Jm=l(Tv,"CODE",{});var PZ=r(Jm);zz=n(PZ,"0"),PZ.forEach(t),Dz=n(Tv,"."),Tv.forEach(t),Oz=c(Pn),va=l(Pn,"LI",{});var Av=r(va);Xm=l(Av,"CODE",{});var zZ=r(Xm);Tz=n(zZ,"warmup_max_lr"),zZ.forEach(t),Az=n(Av," with the value of "),Qm=l(Av,"CODE",{});var DZ=r(Qm);Sz=n(DZ,"--learning_rate"),DZ.forEach(t),Cz=n(Av,"."),Av.forEach(t),xz=c(Pn),Ke=l(Pn,"LI",{});var op=r(Ke);e_=l(op,"CODE",{});var OZ=r(e_);Iz=n(OZ,"warmup_num_steps"),OZ.forEach(t),Rz=n(op," with the value of "),s_=l(op,"CODE",{});var TZ=r(s_);Uz=n(TZ,"--warmup_steps"),TZ.forEach(t),Gz=n(op," if provided. Otherwise will use "),t_=l(op,"CODE",{});var AZ=r(t_);Mz=n(AZ,"--warmup_ratio"),AZ.forEach(t),Lz=n(op,`
multiplied by the number of training steps and rounded up.`),op.forEach(t),Zz=c(Pn),Je=l(Pn,"LI",{});var lp=r(Je);a_=l(lp,"CODE",{});var SZ=r(a_);Nz=n(SZ,"total_num_steps"),SZ.forEach(t),Bz=n(lp," with either the value of "),n_=l(lp,"CODE",{});var CZ=r(n_);Hz=n(CZ,"--max_steps"),CZ.forEach(t),Wz=n(lp,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),o_=l(lp,"CODE",{});var xZ=r(o_);Fz=n(xZ,"WarmupDecayLR"),xZ.forEach(t),Vz=n(lp,")."),lp.forEach(t),Pn.forEach(t),ww=c(e),Bi=l(e,"P",{});var IZ=r(Bi);Yz=n(IZ,"You can, of course, take over any or all of the configuration values and set those yourself:"),IZ.forEach(t),bw=c(e),d(El.$$.fragment,e),qw=c(e),ga=l(e,"P",{});var Vq=r(ga);Kz=n(Vq,"But then you\u2019re on your own synchronizing the "),Hi=l(Vq,"A",{href:!0});var RZ=r(Hi);Jz=n(RZ,"Trainer"),RZ.forEach(t),Xz=n(Vq,` command line arguments and the DeepSpeed
configuration.`),Vq.forEach(t),Ew=c(e),ja=l(e,"P",{});var Yq=r(ja);Qz=n(Yq,"For example, for "),l_=l(Yq,"CODE",{});var UZ=r(l_);eD=n(UZ,"WarmupDecayLR"),UZ.forEach(t),sD=n(Yq,", you can use the following entry:"),Yq.forEach(t),$w=c(e),d($l.$$.fragment,e),kw=c(e),B=l(e,"P",{});var cs=r(B);tD=n(cs,"and "),r_=l(cs,"CODE",{});var GZ=r(r_);aD=n(GZ,"total_num_steps"),GZ.forEach(t),nD=n(cs,", "),p_=l(cs,"CODE",{});var MZ=r(p_);oD=n(MZ,"warmup_max_lr"),MZ.forEach(t),lD=n(cs,", "),i_=l(cs,"CODE",{});var LZ=r(i_);rD=n(LZ,"warmup_num_steps"),LZ.forEach(t),pD=n(cs," and "),u_=l(cs,"CODE",{});var ZZ=r(u_);iD=n(ZZ,"total_num_steps"),ZZ.forEach(t),uD=n(cs," will be set at loading time."),cs.forEach(t),Pw=c(e),Wi=l(e,"A",{id:!0}),r(Wi).forEach(t),zw=c(e),Us=l(e,"H3",{class:!0});var Kq=r(Us);ya=l(Kq,"A",{id:!0,class:!0,href:!0});var NZ=r(ya);c_=l(NZ,"SPAN",{});var BZ=r(c_);d(kl.$$.fragment,BZ),BZ.forEach(t),NZ.forEach(t),cD=c(Kq),h_=l(Kq,"SPAN",{});var HZ=r(h_);hD=n(HZ,"fp32 Precision"),HZ.forEach(t),Kq.forEach(t),Dw=c(e),Fi=l(e,"P",{});var WZ=r(Fi);fD=n(WZ,"Deepspeed supports the full fp32 and the fp16 mixed precision."),WZ.forEach(t),Ow=c(e),wa=l(e,"P",{});var Jq=r(wa);dD=n(Jq,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),f_=l(Jq,"CODE",{});var FZ=r(f_);mD=n(FZ,"NaN"),FZ.forEach(t),_D=n(Jq,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Jq.forEach(t),Tw=c(e),d(Pl.$$.fragment,e),Aw=c(e),ba=l(e,"P",{});var Xq=r(ba);vD=n(Xq,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),zl=l(Xq,"A",{href:!0,rel:!0});var VZ=r(zl);gD=n(VZ,"TensorFloat-32(TF32) on Ampere devices"),VZ.forEach(t),jD=n(Xq,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Xq.forEach(t),Sw=c(e),Vi=l(e,"A",{id:!0}),r(Vi).forEach(t),Cw=c(e),Gs=l(e,"H3",{class:!0});var Qq=r(Gs);qa=l(Qq,"A",{id:!0,class:!0,href:!0});var YZ=r(qa);d_=l(YZ,"SPAN",{});var KZ=r(d_);d(Dl.$$.fragment,KZ),KZ.forEach(t),YZ.forEach(t),yD=c(Qq),m_=l(Qq,"SPAN",{});var JZ=r(m_);wD=n(JZ,"Automatic Mixed Precision"),JZ.forEach(t),Qq.forEach(t),xw=c(e),Yi=l(e,"P",{});var XZ=r(Yi);bD=n(XZ,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),XZ.forEach(t),Iw=c(e),Ki=l(e,"P",{});var QZ=r(Ki);qD=n(QZ,"To configure pytorch AMP-like mode set:"),QZ.forEach(t),Rw=c(e),d(Ol.$$.fragment,e),Uw=c(e),Xe=l(e,"P",{});var Xc=r(Xe);ED=n(Xc,"and the "),Ji=l(Xc,"A",{href:!0});var eN=r(Ji);$D=n(eN,"Trainer"),eN.forEach(t),kD=n(Xc,` will automatically enable or disable it based on the value of
`),__=l(Xc,"CODE",{});var sN=r(__);PD=n(sN,"args.fp16_backend"),sN.forEach(t),zD=n(Xc,". The rest of config values are up to you."),Xc.forEach(t),Gw=c(e),Ea=l(e,"P",{});var eE=r(Ea);DD=n(eE,"This mode gets enabled when "),v_=l(eE,"CODE",{});var tN=r(v_);OD=n(tN,"--fp16 --fp16_backend amp"),tN.forEach(t),TD=n(eE," command line args are passed."),eE.forEach(t),Mw=c(e),Xi=l(e,"P",{});var aN=r(Xi);AD=n(aN,"You can also enable/disable this mode explicitly:"),aN.forEach(t),Lw=c(e),d(Tl.$$.fragment,e),Zw=c(e),$a=l(e,"P",{});var sE=r($a);SD=n(sE,"But then you\u2019re on your own synchronizing the "),Qi=l(sE,"A",{href:!0});var nN=r(Qi);CD=n(nN,"Trainer"),nN.forEach(t),xD=n(sE,` command line arguments and the DeepSpeed
configuration.`),sE.forEach(t),Nw=c(e),ka=l(e,"P",{});var tE=r(ka);ID=n(tE,"Here is the "),Al=l(tE,"A",{href:!0,rel:!0});var oN=r(Al);RD=n(oN,"documentation"),oN.forEach(t),UD=n(tE,"."),tE.forEach(t),Bw=c(e),eu=l(e,"P",{});var lN=r(eu);GD=n(lN,"To configure apex AMP-like mode set:"),lN.forEach(t),Hw=c(e),d(Sl.$$.fragment,e),Ww=c(e),ne=l(e,"P",{});var zn=r(ne);MD=n(zn,"and the "),su=l(zn,"A",{href:!0});var rN=r(su);LD=n(rN,"Trainer"),rN.forEach(t),ZD=n(zn," will automatically configure it based on the values of "),g_=l(zn,"CODE",{});var pN=r(g_);ND=n(pN,"args.fp16_backend"),pN.forEach(t),BD=n(zn,` and
`),j_=l(zn,"CODE",{});var iN=r(j_);HD=n(iN,"args.fp16_opt_level"),iN.forEach(t),WD=n(zn,"."),zn.forEach(t),Fw=c(e),Pa=l(e,"P",{});var aE=r(Pa);FD=n(aE,"This mode gets enabled when "),y_=l(aE,"CODE",{});var uN=r(y_);VD=n(uN,"--fp16 --fp16_backend apex --fp16_opt_level 01"),uN.forEach(t),YD=n(aE," command line args are passed."),aE.forEach(t),Vw=c(e),tu=l(e,"P",{});var cN=r(tu);KD=n(cN,"You can also configure this mode explicitly:"),cN.forEach(t),Yw=c(e),d(Cl.$$.fragment,e),Kw=c(e),za=l(e,"P",{});var nE=r(za);JD=n(nE,"But then you\u2019re on your own synchronizing the "),au=l(nE,"A",{href:!0});var hN=r(au);XD=n(hN,"Trainer"),hN.forEach(t),QD=n(nE,` command line arguments and the DeepSpeed
configuration.`),nE.forEach(t),Jw=c(e),Da=l(e,"P",{});var oE=r(Da);eO=n(oE,"Here is the "),xl=l(oE,"A",{href:!0,rel:!0});var fN=r(xl);sO=n(fN,"documentation"),fN.forEach(t),tO=n(oE,"."),oE.forEach(t),Xw=c(e),nu=l(e,"A",{id:!0}),r(nu).forEach(t),Qw=c(e),Ms=l(e,"H3",{class:!0});var lE=r(Ms);Oa=l(lE,"A",{id:!0,class:!0,href:!0});var dN=r(Oa);w_=l(dN,"SPAN",{});var mN=r(w_);d(Il.$$.fragment,mN),mN.forEach(t),dN.forEach(t),aO=c(lE),b_=l(lE,"SPAN",{});var _N=r(b_);nO=n(_N,"Batch Size"),_N.forEach(t),lE.forEach(t),e2=c(e),ou=l(e,"P",{});var vN=r(ou);oO=n(vN,"To configure batch size, use:"),vN.forEach(t),s2=c(e),d(Rl.$$.fragment,e),t2=c(e),x=l(e,"P",{});var _e=r(x);lO=n(_e,"and the "),lu=l(_e,"A",{href:!0});var gN=r(lu);rO=n(gN,"Trainer"),gN.forEach(t),pO=n(_e," will automatically set "),q_=l(_e,"CODE",{});var jN=r(q_);iO=n(jN,"train_micro_batch_size_per_gpu"),jN.forEach(t),uO=n(_e,` to the value of
`),E_=l(_e,"CODE",{});var yN=r(E_);cO=n(yN,"args.per_device_train_batch_size"),yN.forEach(t),hO=n(_e," and "),$_=l(_e,"CODE",{});var wN=r($_);fO=n(wN,"train_batch_size"),wN.forEach(t),dO=n(_e," to "),k_=l(_e,"CODE",{});var bN=r(k_);mO=n(bN,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),bN.forEach(t),_O=n(_e,"."),_e.forEach(t),a2=c(e),ru=l(e,"P",{});var qN=r(ru);vO=n(qN,"You can also set the values explicitly:"),qN.forEach(t),n2=c(e),d(Ul.$$.fragment,e),o2=c(e),Ta=l(e,"P",{});var rE=r(Ta);gO=n(rE,"But then you\u2019re on your own synchronizing the "),pu=l(rE,"A",{href:!0});var EN=r(pu);jO=n(EN,"Trainer"),EN.forEach(t),yO=n(rE,` command line arguments and the DeepSpeed
configuration.`),rE.forEach(t),l2=c(e),iu=l(e,"A",{id:!0}),r(iu).forEach(t),r2=c(e),Ls=l(e,"H3",{class:!0});var pE=r(Ls);Aa=l(pE,"A",{id:!0,class:!0,href:!0});var $N=r(Aa);P_=l($N,"SPAN",{});var kN=r(P_);d(Gl.$$.fragment,kN),kN.forEach(t),$N.forEach(t),wO=c(pE),z_=l(pE,"SPAN",{});var PN=r(z_);bO=n(PN,"Gradient Accumulation"),PN.forEach(t),pE.forEach(t),p2=c(e),uu=l(e,"P",{});var zN=r(uu);qO=n(zN,"To configure gradient accumulation set:"),zN.forEach(t),i2=c(e),d(Ml.$$.fragment,e),u2=c(e),Qe=l(e,"P",{});var Qc=r(Qe);EO=n(Qc,"and the "),cu=l(Qc,"A",{href:!0});var DN=r(cu);$O=n(DN,"Trainer"),DN.forEach(t),kO=n(Qc," will automatically set it to the value of "),D_=l(Qc,"CODE",{});var ON=r(D_);PO=n(ON,"args.gradient_accumulation_steps"),ON.forEach(t),zO=n(Qc,"."),Qc.forEach(t),c2=c(e),hu=l(e,"P",{});var TN=r(hu);DO=n(TN,"You can also set the value explicitly:"),TN.forEach(t),h2=c(e),d(Ll.$$.fragment,e),f2=c(e),Sa=l(e,"P",{});var iE=r(Sa);OO=n(iE,"But then you\u2019re on your own synchronizing the "),fu=l(iE,"A",{href:!0});var AN=r(fu);TO=n(AN,"Trainer"),AN.forEach(t),AO=n(iE,` command line arguments and the DeepSpeed
configuration.`),iE.forEach(t),d2=c(e),du=l(e,"A",{id:!0}),r(du).forEach(t),m2=c(e),Zs=l(e,"H3",{class:!0});var uE=r(Zs);Ca=l(uE,"A",{id:!0,class:!0,href:!0});var SN=r(Ca);O_=l(SN,"SPAN",{});var CN=r(O_);d(Zl.$$.fragment,CN),CN.forEach(t),SN.forEach(t),SO=c(uE),T_=l(uE,"SPAN",{});var xN=r(T_);CO=n(xN,"Gradient Clipping"),xN.forEach(t),uE.forEach(t),_2=c(e),mu=l(e,"P",{});var IN=r(mu);xO=n(IN,"To configure gradient gradient clipping set:"),IN.forEach(t),v2=c(e),d(Nl.$$.fragment,e),g2=c(e),es=l(e,"P",{});var eh=r(es);IO=n(eh,"and the "),_u=l(eh,"A",{href:!0});var RN=r(_u);RO=n(RN,"Trainer"),RN.forEach(t),UO=n(eh," will automatically set it to the value of "),A_=l(eh,"CODE",{});var UN=r(A_);GO=n(UN,"args.max_grad_norm"),UN.forEach(t),MO=n(eh,"."),eh.forEach(t),j2=c(e),vu=l(e,"P",{});var GN=r(vu);LO=n(GN,"You can also set the value explicitly:"),GN.forEach(t),y2=c(e),d(Bl.$$.fragment,e),w2=c(e),xa=l(e,"P",{});var cE=r(xa);ZO=n(cE,"But then you\u2019re on your own synchronizing the "),gu=l(cE,"A",{href:!0});var MN=r(gu);NO=n(MN,"Trainer"),MN.forEach(t),BO=n(cE,` command line arguments and the DeepSpeed
configuration.`),cE.forEach(t),b2=c(e),ju=l(e,"A",{id:!0}),r(ju).forEach(t),q2=c(e),Ns=l(e,"H3",{class:!0});var hE=r(Ns);Ia=l(hE,"A",{id:!0,class:!0,href:!0});var LN=r(Ia);S_=l(LN,"SPAN",{});var ZN=r(S_);d(Hl.$$.fragment,ZN),ZN.forEach(t),LN.forEach(t),HO=c(hE),C_=l(hE,"SPAN",{});var NN=r(C_);WO=n(NN,"Getting The Model Weights Out"),NN.forEach(t),hE.forEach(t),E2=c(e),Ra=l(e,"P",{});var fE=r(Ra);FO=n(fE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),x_=l(fE,"CODE",{});var BN=r(x_);VO=n(BN,"global_step*/*optim_states.pt"),BN.forEach(t),YO=n(fE,` (this is glob
pattern), and are saved under the normal checkpoint.`),fE.forEach(t),$2=c(e),yu=l(e,"P",{});var HN=r(yu);I_=l(HN,"STRONG",{});var WN=r(I_);KO=n(WN,"FP16 Weights:"),WN.forEach(t),HN.forEach(t),k2=c(e),Ua=l(e,"P",{});var dE=r(Ua);JO=n(dE,"When a model is saved under ZeRO-2, you end up having the normal "),R_=l(dE,"CODE",{});var FN=r(R_);XO=n(FN,"pytorch_model.bin"),FN.forEach(t),QO=n(dE,` file with the model weights, but
they are only the fp16 version of the weights.`),dE.forEach(t),P2=c(e),H=l(e,"P",{});var hs=r(H);eT=n(hs,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),U_=l(hs,"CODE",{});var VN=r(U_);sT=n(VN,'"stage3_gather_fp16_weights_on_model_save": true'),VN.forEach(t),tT=n(hs," is required to get the "),G_=l(hs,"CODE",{});var YN=r(G_);aT=n(YN,"Trainer"),YN.forEach(t),nT=n(hs,` to save the fp16
version of the weights. If this setting is `),M_=l(hs,"CODE",{});var KN=r(M_);oT=n(KN,"False"),KN.forEach(t),lT=c(hs),L_=l(hs,"CODE",{});var JN=r(L_);rT=n(JN,"pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),JN.forEach(t),pT=n(hs,` it
won\u2019t be possible to load it back.`),hs.forEach(t),z2=c(e),d(Wl.$$.fragment,e),D2=c(e),wu=l(e,"P",{});var XN=r(wu);Z_=l(XN,"STRONG",{});var QN=r(Z_);iT=n(QN,"FP32 Weights:"),QN.forEach(t),XN.forEach(t),O2=c(e),Ga=l(e,"P",{});var mE=r(Ga);uT=n(mE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Fl=l(mE,"A",{href:!0,rel:!0});var eB=r(Fl);cT=n(eB,"models hub"),eB.forEach(t),hT=n(mE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),mE.forEach(t),T2=c(e),bu=l(e,"P",{});var sB=r(bu);N_=l(sB,"STRONG",{});var tB=r(N_);fT=n(tB,"Live FP32 Weights Recovery:"),tB.forEach(t),sB.forEach(t),A2=c(e),qu=l(e,"P",{});var aB=r(qu);dT=n(aB,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),aB.forEach(t),S2=c(e),Eu=l(e,"P",{});var nB=r(Eu);mT=n(nB,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),nB.forEach(t),C2=c(e),d(Vl.$$.fragment,e),x2=c(e),ss=l(e,"P",{});var sh=r(ss);_T=n(sh,"If you\u2019re using the "),B_=l(sh,"CODE",{});var oB=r(B_);vT=n(oB,"--load_best_model_at_end"),oB.forEach(t),gT=n(sh," class:"),H_=l(sh,"EM",{});var lB=r(H_);jT=n(lB,"~transformers.TrainingArguments"),lB.forEach(t),yT=n(sh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),sh.forEach(t),I2=c(e),d(Yl.$$.fragment,e),R2=c(e),d(Ma.$$.fragment,e),U2=c(e),La=l(e,"P",{});var _E=r(La);wT=n(_E,"Of course, you don\u2019t have to use class:"),W_=l(_E,"EM",{});var rB=r(W_);bT=n(rB,"~transformers.Trainer"),rB.forEach(t),qT=n(_E,` and you can adjust the examples above to your own
trainer.`),_E.forEach(t),G2=c(e),Za=l(e,"P",{});var vE=r(Za);ET=n(vE,"If for some reason you want more refinement, you can also extract the fp32 "),F_=l(vE,"CODE",{});var pB=r(F_);$T=n(pB,"state_dict"),pB.forEach(t),kT=n(vE,` of the weights and apply
these yourself as is shown in the following example:`),vE.forEach(t),M2=c(e),d(Kl.$$.fragment,e),L2=c(e),$u=l(e,"P",{});var iB=r($u);V_=l(iB,"STRONG",{});var uB=r(V_);PT=n(uB,"Offline FP32 Weights Recovery:"),uB.forEach(t),iB.forEach(t),Z2=c(e),ts=l(e,"P",{});var th=r(ts);zT=n(th,"DeepSpeed creates a special conversion script "),Y_=l(th,"CODE",{});var cB=r(Y_);DT=n(cB,"zero_to_fp32.py"),cB.forEach(t),OT=n(th,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),K_=l(th,"CODE",{});var hB=r(K_);TT=n(hB,"Trainer"),hB.forEach(t),AT=n(th," to do the extraction."),th.forEach(t),N2=c(e),ku=l(e,"P",{});var fB=r(ku);ST=n(fB,"Let\u2019s say your checkpoint folder looks like this:"),fB.forEach(t),B2=c(e),d(Jl.$$.fragment,e),H2=c(e),Na=l(e,"P",{});var gE=r(Na);CT=n(gE,"In this example there is just one DeepSpeed checkpoint sub-folder "),J_=l(gE,"EM",{});var dB=r(J_);xT=n(dB,"global_step1"),dB.forEach(t),IT=n(gE,`. Therefore to reconstruct the fp32
weights just run:`),gE.forEach(t),W2=c(e),d(Xl.$$.fragment,e),F2=c(e),Ba=l(e,"P",{});var jE=r(Ba);RT=n(jE,"This is it. "),X_=l(jE,"CODE",{});var mB=r(X_);UT=n(mB,"pytorch_model.bin"),mB.forEach(t),GT=n(jE," will now contain the full fp32 model weights consolidated from multiple GPUs."),jE.forEach(t),V2=c(e),Pu=l(e,"P",{});var _B=r(Pu);MT=n(_B,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),_B.forEach(t),Y2=c(e),Ql=l(e,"P",{});var xI=r(Ql);Q_=l(xI,"CODE",{});var vB=r(Q_);LT=n(vB,"python zero_to_fp32.py -h"),vB.forEach(t),ZT=n(xI," will give you usage details."),xI.forEach(t),K2=c(e),as=l(e,"P",{});var ah=r(as);NT=n(ah,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),e1=l(ah,"CODE",{});var gB=r(e1);BT=n(gB,"latest"),gB.forEach(t),HT=n(ah,`, which in the current
example will contain `),s1=l(ah,"CODE",{});var jB=r(s1);WT=n(jB,"global_step1"),jB.forEach(t),FT=n(ah,"."),ah.forEach(t),J2=c(e),zu=l(e,"P",{});var yB=r(zu);VT=n(yB,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),yB.forEach(t),X2=c(e),Bs=l(e,"H3",{class:!0});var yE=r(Bs);Ha=l(yE,"A",{id:!0,class:!0,href:!0});var wB=r(Ha);t1=l(wB,"SPAN",{});var bB=r(t1);d(er.$$.fragment,bB),bB.forEach(t),wB.forEach(t),YT=c(yE),a1=l(yE,"SPAN",{});var qB=r(a1);KT=n(qB,"ZeRO-3 and Infinity Nuances"),qB.forEach(t),yE.forEach(t),Q2=c(e),Du=l(e,"P",{});var EB=r(Du);JT=n(EB,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),EB.forEach(t),eb=c(e),Ou=l(e,"P",{});var $B=r(Ou);XT=n($B,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),$B.forEach(t),sb=c(e),Tu=l(e,"P",{});var kB=r(Tu);QT=n(kB,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),kB.forEach(t),tb=c(e),Hs=l(e,"H4",{class:!0});var wE=r(Hs);Wa=l(wE,"A",{id:!0,class:!0,href:!0});var PB=r(Wa);n1=l(PB,"SPAN",{});var zB=r(n1);d(sr.$$.fragment,zB),zB.forEach(t),PB.forEach(t),eA=c(wE),o1=l(wE,"SPAN",{});var DB=r(o1);sA=n(DB,"Constructing Massive Models"),DB.forEach(t),wE.forEach(t),ab=c(e),Fa=l(e,"P",{});var bE=r(Fa);tA=n(bE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),l1=l(bE,"EM",{});var OB=r(l1);aA=n(OB,"deepspeed.zero.Init()"),OB.forEach(t),nA=n(bE,`
context manager (which is also a function decorator), like so:`),bE.forEach(t),nb=c(e),d(tr.$$.fragment,e),ob=c(e),Au=l(e,"P",{});var TB=r(Au);oA=n(TB,"As you can see this gives you a randomly initialized model."),TB.forEach(t),lb=c(e),k=l(e,"P",{});var U=r(k);lA=n(U,"If you want to use a pretrained model, "),r1=l(U,"CODE",{});var AB=r(r1);rA=n(AB,"model_class.from_pretrained"),AB.forEach(t),pA=n(U,` will activate this feature as long as
`),p1=l(U,"CODE",{});var SB=r(p1);iA=n(SB,"is_deepspeed_zero3_enabled()"),SB.forEach(t),uA=n(U," returns "),i1=l(U,"CODE",{});var CB=r(i1);cA=n(CB,"True"),CB.forEach(t),hA=n(U,`, which currently is setup by the
`),Su=l(U,"A",{href:!0});var xB=r(Su);fA=n(xB,"TrainingArguments"),xB.forEach(t),dA=n(U,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),Cu=l(U,"A",{href:!0});var IB=r(Cu);mA=n(IB,"TrainingArguments"),IB.forEach(t),_A=n(U," object "),u1=l(U,"STRONG",{});var RB=r(u1);vA=n(RB,"before"),RB.forEach(t),gA=n(U,` calling
`),c1=l(U,"CODE",{});var UB=r(c1);jA=n(UB,"from_pretrained"),UB.forEach(t),yA=n(U,". Here is an example of a possible sequence:"),U.forEach(t),rb=c(e),d(ar.$$.fragment,e),pb=c(e),Va=l(e,"P",{});var qE=r(Va);wA=n(qE,"If you\u2019re using the official example scripts and your command line arguments include "),h1=l(qE,"CODE",{});var GB=r(h1);bA=n(GB,"--deepspeed ds_config.json"),GB.forEach(t),qA=n(qE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),qE.forEach(t),ib=c(e),xu=l(e,"P",{});var MB=r(xu);EA=n(MB,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),MB.forEach(t),ub=c(e),Ya=l(e,"P",{});var EE=r(Ya);$A=n(EE,"For full details on this method and other related features please refer to "),nr=l(EE,"A",{href:!0,rel:!0});var LB=r(nr);kA=n(LB,"Constructing Massive Models"),LB.forEach(t),PA=n(EE,"."),EE.forEach(t),cb=c(e),oe=l(e,"P",{});var Dn=r(oe);zA=n(Dn,"Also when loading fp16-pretrained models, you will want to tell "),f1=l(Dn,"CODE",{});var ZB=r(f1);DA=n(ZB,"from_pretrained"),ZB.forEach(t),OA=n(Dn,` to use
`),d1=l(Dn,"CODE",{});var NB=r(d1);TA=n(NB,"torch_dtype=torch.float16"),NB.forEach(t),AA=n(Dn,". For details, please, see "),Iu=l(Dn,"A",{href:!0});var BB=r(Iu);SA=n(BB,"from_pretrained-torch-dtype"),BB.forEach(t),CA=n(Dn,"."),Dn.forEach(t),hb=c(e),Ws=l(e,"H4",{class:!0});var $E=r(Ws);Ka=l($E,"A",{id:!0,class:!0,href:!0});var HB=r(Ka);m1=l(HB,"SPAN",{});var WB=r(m1);d(or.$$.fragment,WB),WB.forEach(t),HB.forEach(t),xA=c($E),_1=l($E,"SPAN",{});var FB=r(_1);IA=n(FB,"Gathering Parameters"),FB.forEach(t),$E.forEach(t),fb=c(e),lr=l(e,"P",{});var II=r(lr);RA=n(II,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),rr=l(II,"A",{href:!0,rel:!0});var VB=r(rr);UA=n(VB,"Gathering Parameters"),VB.forEach(t),II.forEach(t),db=c(e),Ja=l(e,"P",{});var kE=r(Ja);GA=n(kE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),v1=l(kE,"CODE",{});var YB=r(v1);MA=n(YB,"from_pretrained"),YB.forEach(t),LA=n(kE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),kE.forEach(t),mb=c(e),Ru=l(e,"P",{});var KB=r(Ru);ZA=n(KB,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),KB.forEach(t),_b=c(e),d(pr.$$.fragment,e),vb=c(e),ns=l(e,"P",{});var nh=r(ns);NA=n(nh,"stress on "),g1=l(nh,"CODE",{});var JB=r(g1);BA=n(JB,"tensor([1.])"),JB.forEach(t),HA=n(nh,", or if you get an error where it says the parameter is of size "),j1=l(nh,"CODE",{});var XB=r(j1);WA=n(XB,"1"),XB.forEach(t),FA=n(nh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),nh.forEach(t),gb=c(e),Uu=l(e,"A",{id:!0}),r(Uu).forEach(t),jb=c(e),Fs=l(e,"H3",{class:!0});var PE=r(Fs);Xa=l(PE,"A",{id:!0,class:!0,href:!0});var QB=r(Xa);y1=l(QB,"SPAN",{});var eH=r(y1);d(ir.$$.fragment,eH),eH.forEach(t),QB.forEach(t),VA=c(PE),w1=l(PE,"SPAN",{});var sH=r(w1);YA=n(sH,"ZeRO Inference"),sH.forEach(t),PE.forEach(t),yb=c(e),Gu=l(e,"P",{});var tH=r(Gu);KA=n(tH,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),tH.forEach(t),wb=c(e),Qa=l(e,"P",{});var zE=r(Qa);JA=n(zE,"Otherwise you just need to pass the usual "),Mu=l(zE,"A",{href:!0});var aH=r(Mu);XA=n(aH,"TrainingArguments"),aH.forEach(t),QA=n(zE," arguments. For example:"),zE.forEach(t),bb=c(e),d(ur.$$.fragment,e),qb=c(e),Lu=l(e,"P",{});var nH=r(Lu);eS=n(nH,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),nH.forEach(t),Eb=c(e),en=l(e,"P",{});var DE=r(en);sS=n(DE,"Here is an example of running "),b1=l(DE,"CODE",{});var oH=r(b1);tS=n(oH,"run_translation.py"),oH.forEach(t),aS=n(DE," under DeepSpeed deploying all available GPUs:"),DE.forEach(t),$b=c(e),d(cr.$$.fragment,e),kb=c(e),Zu=l(e,"P",{});var lH=r(Zu);nS=n(lH,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),lH.forEach(t),Pb=c(e),Nu=l(e,"P",{});var rH=r(Nu);oS=n(rH,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),rH.forEach(t),zb=c(e),Vs=l(e,"H3",{class:!0});var OE=r(Vs);sn=l(OE,"A",{id:!0,class:!0,href:!0});var pH=r(sn);q1=l(pH,"SPAN",{});var iH=r(q1);d(hr.$$.fragment,iH),iH.forEach(t),pH.forEach(t),lS=c(OE),E1=l(OE,"SPAN",{});var uH=r(E1);rS=n(uH,"Memory Requirements"),uH.forEach(t),OE.forEach(t),Db=c(e),Bu=l(e,"P",{});var cH=r(Bu);pS=n(cH,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),cH.forEach(t),Ob=c(e),Hu=l(e,"P",{});var hH=r(Hu);iS=n(hH,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),hH.forEach(t),Tb=c(e),d(fr.$$.fragment,e),Ab=c(e),Wu=l(e,"P",{});var fH=r(Wu);uS=n(fH,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),fH.forEach(t),Sb=c(e),Fu=l(e,"P",{});var dH=r(Fu);cS=n(dH,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),dH.forEach(t),Cb=c(e),Vu=l(e,"P",{});var mH=r(Vu);hS=n(mH,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),mH.forEach(t),xb=c(e),Yu=l(e,"P",{});var _H=r(Yu);fS=n(_H,"For example, let\u2019s repeat the same for 2 GPUs:"),_H.forEach(t),Ib=c(e),d(dr.$$.fragment,e),Rb=c(e),Ku=l(e,"P",{});var vH=r(Ku);dS=n(vH,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),vH.forEach(t),Ub=c(e),tn=l(e,"P",{});var TE=r(tn);mS=n(TE,"For full information please see "),mr=l(TE,"A",{href:!0,rel:!0});var gH=r(mr);_S=n(gH,"memory estimators"),gH.forEach(t),vS=n(TE,"."),TE.forEach(t),Gb=c(e),Ys=l(e,"H3",{class:!0});var AE=r(Ys);an=l(AE,"A",{id:!0,class:!0,href:!0});var jH=r(an);$1=l(jH,"SPAN",{});var yH=r($1);d(_r.$$.fragment,yH),yH.forEach(t),jH.forEach(t),gS=c(AE),k1=l(AE,"SPAN",{});var wH=r(k1);jS=n(wH,"Filing Issues"),wH.forEach(t),AE.forEach(t),Mb=c(e),Ju=l(e,"P",{});var bH=r(Ju);yS=n(bH,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),bH.forEach(t),Lb=c(e),Xu=l(e,"P",{});var qH=r(Xu);wS=n(qH,"In your report please always include:"),qH.forEach(t),Zb=c(e),I=l(e,"OL",{});var ve=r(I);P1=l(ve,"LI",{});var EH=r(P1);z1=l(EH,"P",{});var $H=r(z1);bS=n($H,"the full Deepspeed config file in the report"),$H.forEach(t),EH.forEach(t),qS=c(ve),D1=l(ve,"LI",{});var kH=r(D1);qe=l(kH,"P",{});var On=r(qe);ES=n(On,"either the command line arguments if you were using the "),Qu=l(On,"A",{href:!0});var PH=r(Qu);$S=n(PH,"Trainer"),PH.forEach(t),kS=n(On,` or
`),ec=l(On,"A",{href:!0});var zH=r(ec);PS=n(zH,"TrainingArguments"),zH.forEach(t),zS=n(On,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),sc=l(On,"A",{href:!0});var DH=r(sc);DS=n(DH,"TrainingArguments"),DH.forEach(t),OS=n(On," as it has dozens of entries that are irrelevant."),On.forEach(t),kH.forEach(t),TS=c(ve),vr=l(ve,"LI",{});var SE=r(vr);O1=l(SE,"P",{});var OH=r(O1);AS=n(OH,"Output of:"),OH.forEach(t),SS=c(SE),d(gr.$$.fragment,SE),SE.forEach(t),CS=c(ve),T1=l(ve,"LI",{});var TH=r(T1);jr=l(TH,"P",{});var CE=r(jr);xS=n(CE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),yr=l(CE,"A",{href:!0,rel:!0});var AH=r(yr);IS=n(AH,"notebook"),AH.forEach(t),RS=n(CE,` as
a starting point.`),CE.forEach(t),TH.forEach(t),US=c(ve),A1=l(ve,"LI",{});var SH=r(A1);S1=l(SH,"P",{});var CH=r(S1);GS=n(CH,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),CH.forEach(t),SH.forEach(t),MS=c(ve),C1=l(ve,"LI",{});var xH=r(C1);wr=l(xH,"P",{});var xE=r(wr);LS=n(xE,"If possible try to use one of the existing "),br=l(xE,"A",{href:!0,rel:!0});var IH=r(br);ZS=n(IH,"examples"),IH.forEach(t),NS=n(xE," to reproduce the problem with."),xE.forEach(t),xH.forEach(t),ve.forEach(t),Nb=c(e),tc=l(e,"P",{});var RH=r(tc);BS=n(RH,"Things to consider:"),RH.forEach(t),Bb=c(e),nn=l(e,"UL",{});var IE=r(nn);Ks=l(IE,"LI",{});var oh=r(Ks);x1=l(oh,"P",{});var UH=r(x1);HS=n(UH,"Deepspeed is often not the cause of the problem."),UH.forEach(t),WS=c(oh),I1=l(oh,"P",{});var GH=r(I1);FS=n(GH,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),GH.forEach(t),VS=c(oh),R1=l(oh,"P",{});var MH=r(R1);YS=n(MH,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),MH.forEach(t),oh.forEach(t),KS=c(IE),U1=l(IE,"LI",{});var LH=r(U1);qr=l(LH,"P",{});var RE=r(qr);JS=n(RE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Er=l(RE,"A",{href:!0,rel:!0});var ZH=r(Er);XS=n(ZH,"Deepspeed"),ZH.forEach(t),QS=n(RE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),RE.forEach(t),LH.forEach(t),IE.forEach(t),Hb=c(e),Js=l(e,"H3",{class:!0});var UE=r(Js);on=l(UE,"A",{id:!0,class:!0,href:!0});var NH=r(on);G1=l(NH,"SPAN",{});var BH=r(G1);d($r.$$.fragment,BH),BH.forEach(t),NH.forEach(t),eC=c(UE),M1=l(UE,"SPAN",{});var HH=r(M1);sC=n(HH,"Troubleshooting"),HH.forEach(t),UE.forEach(t),Wb=c(e),ac=l(e,"UL",{});var WH=r(ac);nc=l(WH,"LI",{});var RI=r(nc);L1=l(RI,"CODE",{});var FH=r(L1);tC=n(FH,"deepspeed"),FH.forEach(t),aC=n(RI," process gets killed at startup without a traceback"),RI.forEach(t),WH.forEach(t),Fb=c(e),R=l(e,"P",{});var ge=r(R);nC=n(ge,"If the "),Z1=l(ge,"CODE",{});var VH=r(Z1);oC=n(VH,"deepspeed"),VH.forEach(t),lC=n(ge,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),N1=l(ge,"CODE",{});var YH=r(N1);rC=n(YH,"offload_optimizer"),YH.forEach(t),pC=n(ge," or "),B1=l(ge,"CODE",{});var KH=r(B1);iC=n(KH,"offload_param"),KH.forEach(t),uC=n(ge,` or
both configured to offload to `),H1=l(ge,"CODE",{});var JH=r(H1);cC=n(JH,"cpu"),JH.forEach(t),hC=n(ge,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),kr=l(ge,"A",{href:!0,rel:!0});var XH=r(kr);fC=n(XH,"estimate how much memory is needed for a specific model"),XH.forEach(t),dC=n(ge,"."),ge.forEach(t),Vb=c(e),Xs=l(e,"H3",{class:!0});var GE=r(Xs);ln=l(GE,"A",{id:!0,class:!0,href:!0});var QH=r(ln);W1=l(QH,"SPAN",{});var eW=r(W1);d(Pr.$$.fragment,eW),eW.forEach(t),QH.forEach(t),mC=c(GE),F1=l(GE,"SPAN",{});var sW=r(F1);_C=n(sW,"Notes"),sW.forEach(t),GE.forEach(t),Yb=c(e),os=l(e,"UL",{});var lh=r(os);rn=l(lh,"LI",{});var Sv=r(rn);vC=n(Sv,"DeepSpeed works with the PyTorch "),oc=l(Sv,"A",{href:!0});var tW=r(oc);gC=n(tW,"Trainer"),tW.forEach(t),jC=n(Sv," but not TF "),V1=l(Sv,"CODE",{});var aW=r(V1);yC=n(aW,"TFTrainer"),aW.forEach(t),Sv.forEach(t),wC=c(lh),zr=l(lh,"LI",{});var ME=r(zr);bC=n(ME,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),Dr=l(ME,"A",{href:!0,rel:!0});var nW=r(Dr);qC=n(nW,"source"),nW.forEach(t),EC=n(ME,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),ME.forEach(t),$C=c(lh),Qs=l(lh,"LI",{});var rh=r(Qs);kC=n(rh,"You don\u2019t have to use the "),lc=l(rh,"A",{href:!0});var oW=r(lc);PC=n(oW,"Trainer"),oW.forEach(t),zC=n(rh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),Or=l(rh,"A",{href:!0,rel:!0});var lW=r(Or);DC=n(lW,"the DeepSpeed integration instructions"),lW.forEach(t),OC=n(rh,"."),rh.forEach(t),lh.forEach(t),Kb=c(e),rc=l(e,"A",{id:!0}),r(rc).forEach(t),Jb=c(e),et=l(e,"H2",{class:!0});var LE=r(et);pn=l(LE,"A",{id:!0,class:!0,href:!0});var rW=r(pn);Y1=l(rW,"SPAN",{});var pW=r(Y1);d(Tr.$$.fragment,pW),pW.forEach(t),rW.forEach(t),TC=c(LE),K1=l(LE,"SPAN",{});var iW=r(K1);AC=n(iW,"Non-Trainer Deepspeed Integration"),iW.forEach(t),LE.forEach(t),Xb=c(e),le=l(e,"P",{});var Tn=r(le);SC=n(Tn,"The "),pc=l(Tn,"A",{href:!0});var uW=r(pc);CC=n(uW,"HfDeepSpeedConfig"),uW.forEach(t),xC=n(Tn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),ic=l(Tn,"A",{href:!0});var cW=r(ic);IC=n(cW,"Trainer"),cW.forEach(t),RC=n(Tn," is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),J1=l(Tn,"CODE",{});var hW=r(J1);UC=n(hW,"from_pretrained"),hW.forEach(t),GC=n(Tn," call. Everything else you have to do by yourself."),Tn.forEach(t),Qb=c(e),un=l(e,"P",{});var ZE=r(un);MC=n(ZE,"When using "),uc=l(ZE,"A",{href:!0});var fW=r(uc);LC=n(fW,"Trainer"),fW.forEach(t),ZC=n(ZE," everything is automatically taken care of."),ZE.forEach(t),e3=c(e),ls=l(e,"P",{});var ph=r(ls);NC=n(ph,"When not using "),cc=l(ph,"A",{href:!0});var dW=r(cc);BC=n(dW,"Trainer"),dW.forEach(t),HC=n(ph,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),hc=l(ph,"A",{href:!0});var mW=r(hc);WC=n(mW,"HfDeepSpeedConfig"),mW.forEach(t),FC=n(ph," object before instantiating the model."),ph.forEach(t),s3=c(e),fc=l(e,"P",{});var _W=r(fc);VC=n(_W,"For example for a pretrained model:"),_W.forEach(t),t3=c(e),d(Ar.$$.fragment,e),a3=c(e),dc=l(e,"P",{});var vW=r(dc);YC=n(vW,"or for non-pretrained model:"),vW.forEach(t),n3=c(e),d(Sr.$$.fragment,e),o3=c(e),re=l(e,"P",{});var An=r(re);KC=n(An,"Please note that if you\u2019re not using the "),mc=l(An,"A",{href:!0});var gW=r(mc);JC=n(gW,"Trainer"),gW.forEach(t),XC=n(An," integration, you\u2019re completely on your own. Basically follow the documentation on the "),Cr=l(An,"A",{href:!0,rel:!0});var jW=r(Cr);QC=n(jW,"Deepspeed"),jW.forEach(t),ex=n(An," website. Also you have to configure explicitly the config file - you can\u2019t use "),X1=l(An,"CODE",{});var yW=r(X1);sx=n(yW,'"auto"'),yW.forEach(t),tx=n(An," values and you will have to put real values instead."),An.forEach(t),l3=c(e),st=l(e,"H2",{class:!0});var NE=r(st);cn=l(NE,"A",{id:!0,class:!0,href:!0});var wW=r(cn);Q1=l(wW,"SPAN",{});var bW=r(Q1);d(xr.$$.fragment,bW),bW.forEach(t),wW.forEach(t),ax=c(NE),ev=l(NE,"SPAN",{});var qW=r(ev);nx=n(qW,"HfDeepSpeedConfig"),qW.forEach(t),NE.forEach(t),r3=c(e),E=l(e,"DIV",{class:!0});var G=r(E);d(Ir.$$.fragment,G),ox=c(G),sv=l(G,"P",{});var EW=r(sv);lx=n(EW,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),EW.forEach(t),rx=c(G),Ee=l(G,"P",{});var Sn=r(Ee);px=n(Sn,"A "),tv=l(Sn,"CODE",{});var $W=r(tv);ix=n($W,"weakref"),$W.forEach(t),ux=n(Sn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),av=l(Sn,"CODE",{});var kW=r(av);cx=n(kW,"from_pretrained"),kW.forEach(t),hx=n(Sn," and "),nv=l(Sn,"CODE",{});var PW=r(nv);fx=n(PW,"_get_resized_embeddings"),PW.forEach(t),dx=n(Sn,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),Sn.forEach(t),mx=c(G),pe=l(G,"P",{});var rt=r(pe);_c=l(rt,"A",{href:!0});var zW=r(_c);_x=n(zW,"Trainer"),zW.forEach(t),vx=n(rt," uses the "),ov=l(rt,"CODE",{});var DW=r(ov);gx=n(DW,"HfTrainerDeepSpeedConfig"),DW.forEach(t),jx=n(rt,` subclass instead. That subclass has logic to sync the configuration
with values of `),vc=l(rt,"A",{href:!0});var OW=r(vc);yx=n(OW,"TrainingArguments"),OW.forEach(t),wx=n(rt," by replacing special placeholder values: "),lv=l(rt,"CODE",{});var TW=r(lv);bx=n(TW,'"auto"'),TW.forEach(t),qx=n(rt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),rt.forEach(t),Ex=c(G),rs=l(G,"DIV",{class:!0});var ih=r(rs);d(Rr.$$.fragment,ih),$x=c(ih),rv=l(ih,"P",{});var AW=r(rv);kx=n(AW,"Deletes a sub-section of the config file if it\u2019s found."),AW.forEach(t),Px=c(ih),tt=l(ih,"P",{});var uh=r(tt);zx=n(uh,"Unless "),pv=l(uh,"CODE",{});var SW=r(pv);Dx=n(SW,"must_exist"),SW.forEach(t),Ox=n(uh," is "),iv=l(uh,"CODE",{});var CW=r(iv);Tx=n(CW,"True"),CW.forEach(t),Ax=n(uh," the section doesn\u2019t have to exist."),uh.forEach(t),ih.forEach(t),Sx=c(G),hn=l(G,"DIV",{class:!0});var BE=r(hn);d(Ur.$$.fragment,BE),Cx=c(BE),Gr=l(BE,"P",{});var HE=r(Gr);xx=n(HE,"Returns the set value or "),uv=l(HE,"CODE",{});var xW=r(uv);Ix=n(xW,"default"),xW.forEach(t),Rx=n(HE," if no value is set"),HE.forEach(t),BE.forEach(t),Ux=c(G),fn=l(G,"DIV",{class:!0});var WE=r(fn);d(Mr.$$.fragment,WE),Gx=c(WE),at=l(WE,"P",{});var ch=r(at);Mx=n(ch,"Returns "),cv=l(ch,"CODE",{});var IW=r(cv);Lx=n(IW,"True"),IW.forEach(t),Zx=n(ch,"/"),hv=l(ch,"CODE",{});var RW=r(hv);Nx=n(RW,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),RW.forEach(t),Bx=n(ch," or isn\u2019t set)."),ch.forEach(t),WE.forEach(t),Hx=c(G),dn=l(G,"DIV",{class:!0});var FE=r(dn);d(Lr.$$.fragment,FE),Wx=c(FE),nt=l(FE,"P",{});var hh=r(nt);Fx=n(hh,"Returns "),fv=l(hh,"CODE",{});var UW=r(fv);Vx=n(UW,"True"),UW.forEach(t),Yx=n(hh,"/"),dv=l(hh,"CODE",{});var GW=r(dv);Kx=n(GW,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),GW.forEach(t),Jx=n(hh," or isn\u2019t set)."),hh.forEach(t),FE.forEach(t),G.forEach(t),p3=c(e),ot=l(e,"H3",{class:!0});var VE=r(ot);mn=l(VE,"A",{id:!0,class:!0,href:!0});var MW=r(mn);mv=l(MW,"SPAN",{});var LW=r(mv);d(Zr.$$.fragment,LW),LW.forEach(t),MW.forEach(t),Xx=c(VE),_v=l(VE,"SPAN",{});var ZW=r(_v);Qx=n(ZW,"DeepSpeed ZeRO Inference"),ZW.forEach(t),VE.forEach(t),i3=c(e),_n=l(e,"P",{});var YE=r(_n);eI=n(YE,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),gc=l(YE,"A",{href:!0});var NW=r(gc);sI=n(NW,"Trainer"),NW.forEach(t),tI=n(YE," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),YE.forEach(t),u3=c(e),jc=l(e,"P",{});var BW=r(jc);aI=n(BW,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),BW.forEach(t),c3=c(e),yc=l(e,"P",{});var HW=r(yc);nI=n(HW,"The example has copious notes and is self-documenting."),HW.forEach(t),h3=c(e),wc=l(e,"P",{});var WW=r(wc);oI=n(WW,"Make sure to:"),WW.forEach(t),f3=c(e),vn=l(e,"OL",{});var KE=r(vn);vv=l(KE,"LI",{});var FW=r(vv);lI=n(FW,"disable CPU offload if you have enough GPU memory (since it slows things down)"),FW.forEach(t),rI=c(KE),gv=l(KE,"LI",{});var VW=r(gv);pI=n(VW,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),VW.forEach(t),KE.forEach(t),d3=c(e),d(Nr.$$.fragment,e),m3=c(e),gn=l(e,"P",{});var JE=r(gn);iI=n(JE,"Let\u2019s save it as "),jv=l(JE,"CODE",{});var YW=r(jv);uI=n(YW,"t0.py"),YW.forEach(t),cI=n(JE," and run it:"),JE.forEach(t),_3=c(e),d(Br.$$.fragment,e),v3=c(e),bc=l(e,"P",{});var KW=r(bc);hI=n(KW,"This was a very basic example and you will want to adapt it to your needs."),KW.forEach(t),g3=c(e),lt=l(e,"H2",{class:!0});var XE=r(lt);jn=l(XE,"A",{id:!0,class:!0,href:!0});var JW=r(jn);yv=l(JW,"SPAN",{});var XW=r(yv);d(Hr.$$.fragment,XW),XW.forEach(t),JW.forEach(t),fI=c(XE),wv=l(XE,"SPAN",{});var QW=r(wv);dI=n(QW,"Main DeepSpeed Resources"),QW.forEach(t),XE.forEach(t),j3=c(e),ie=l(e,"UL",{});var Cn=r(ie);bv=l(Cn,"LI",{});var eF=r(bv);Wr=l(eF,"A",{href:!0,rel:!0});var sF=r(Wr);mI=n(sF,"Project\u2019s github"),sF.forEach(t),eF.forEach(t),_I=c(Cn),qv=l(Cn,"LI",{});var tF=r(qv);Fr=l(tF,"A",{href:!0,rel:!0});var aF=r(Fr);vI=n(aF,"Usage docs"),aF.forEach(t),tF.forEach(t),gI=c(Cn),Ev=l(Cn,"LI",{});var nF=r(Ev);Vr=l(nF,"A",{href:!0,rel:!0});var oF=r(Vr);jI=n(oF,"API docs"),oF.forEach(t),nF.forEach(t),yI=c(Cn),$v=l(Cn,"LI",{});var lF=r($v);Yr=l(lF,"A",{href:!0,rel:!0});var rF=r(Yr);wI=n(rF,"Blog posts"),rF.forEach(t),lF.forEach(t),Cn.forEach(t),y3=c(e),qc=l(e,"P",{});var pF=r(qc);bI=n(pF,"Papers:"),pF.forEach(t),w3=c(e),ps=l(e,"UL",{});var fh=r(ps);kv=l(fh,"LI",{});var iF=r(kv);Kr=l(iF,"A",{href:!0,rel:!0});var uF=r(Kr);qI=n(uF,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),uF.forEach(t),iF.forEach(t),EI=c(fh),Pv=l(fh,"LI",{});var cF=r(Pv);Jr=l(cF,"A",{href:!0,rel:!0});var hF=r(Jr);$I=n(hF,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),hF.forEach(t),cF.forEach(t),kI=c(fh),zv=l(fh,"LI",{});var fF=r(zv);Xr=l(fF,"A",{href:!0,rel:!0});var dF=r(Xr);PI=n(dF,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),dF.forEach(t),fF.forEach(t),fh.forEach(t),b3=c(e),is=l(e,"P",{});var dh=r(is);zI=n(dh,"Finally, please, remember that, HuggingFace "),Ec=l(dh,"A",{href:!0});var mF=r(Ec);DI=n(mF,"Trainer"),mF.forEach(t),OI=n(dh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Qr=l(dh,"A",{href:!0,rel:!0});var _F=r(Qr);TI=n(_F,"DeepSpeed GitHub"),_F.forEach(t),AI=n(dh,"."),dh.forEach(t),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify($F)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(Y,"href","https://github.com/microsoft/DeepSpeed"),h(Y,"rel","nofollow"),h($e,"href","https://arxiv.org/abs/1910.02054"),h($e,"rel","nofollow"),h(Rn,"href","https://arxiv.org/abs/2101.06840"),h(Rn,"rel","nofollow"),h(Un,"href","https://arxiv.org/abs/2104.07857"),h(Un,"rel","nofollow"),h(Gn,"href","https://github.com/microsoft/DeepSpeed"),h(Gn,"rel","nofollow"),h(cp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(hp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(fp,"href","#deepspeed-non-trainer-integration"),h(jp,"href","#deepspeed-zero-inference"),h(wp,"id","deepspeed-trainer-integration"),h(ct,"id","trainer-deepspeed-integration"),h(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ct,"href","#trainer-deepspeed-integration"),h(_s,"class","relative group"),h(bp,"id","deepspeed-installation"),h(ht,"id","installation"),h(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ht,"href","#installation"),h(vs,"class","relative group"),h(Wn,"href","https://github.com/microsoft/deepspeed#installation"),h(Wn,"rel","nofollow"),h(Fn,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(Fn,"rel","nofollow"),h(Ep,"href","#zero-install-notes"),h(Jn,"href","https://developer.nvidia.com/cuda-gpus"),h(Jn,"rel","nofollow"),h(so,"href","https://github.com/microsoft/DeepSpeed/issues"),h(so,"rel","nofollow"),h(Tp,"id","deepspeed-multi-gpu"),h(jt,"id","deployment-with-multiple-gpus"),h(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jt,"href","#deployment-with-multiple-gpus"),h(gs,"class","relative group"),h(Ap,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ao,"href","https://www.deepspeed.ai/docs/config-json/"),h(ao,"rel","nofollow"),h(lo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(lo,"rel","nofollow"),h(po,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(po,"rel","nofollow"),h(xp,"id","deepspeed-one-gpu"),h($t,"id","deployment-with-one-gpu"),h($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($t,"href","#deployment-with-one-gpu"),h(ys,"class","relative group"),h(Ip,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(co,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(co,"rel","nofollow"),h(fo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(fo,"rel","nofollow"),h(Np,"id","deepspeed-notebook"),h(Dt,"id","deployment-in-notebooks"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-in-notebooks"),h(bs,"class","relative group"),h(Vp,"id","deepspeed-config"),h(Ct,"id","configuration"),h(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ct,"href","#configuration"),h(qs,"class","relative group"),h(qo,"href","https://www.deepspeed.ai/docs/config-json/"),h(qo,"rel","nofollow"),h(Eo,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Eo,"rel","nofollow"),h(Po,"href","https://github.com/microsoft/DeepSpeed"),h(Po,"rel","nofollow"),h(Kp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Jp,"id","deepspeed-config-passing"),h(Mt,"id","passing-configuration"),h(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mt,"href","#passing-configuration"),h(Es,"class","relative group"),h(Xp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Qp,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(ei,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(ai,"id","deepspeed-config-shared"),h(Lt,"id","shared-configuration"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#shared-configuration"),h($s,"class","relative group"),h(ni,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(oi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(li,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ri,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ii,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(ui,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(hi,"id","deepspeed-zero"),h(Wt,"id","zero"),h(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wt,"href","#zero"),h(ks,"class","relative group"),h(Io,"href","https://www.deepspeed.ai/tutorials/zero/"),h(Io,"rel","nofollow"),h(Ro,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Ro,"rel","nofollow"),h(fi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(mi,"id","deepspeed-zero2-config"),h(Vt,"id","zero2-config"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#zero2-config"),h(Ps,"class","relative group"),h(gi,"id","deepspeed-zero3-config"),h(Yt,"id","zero3-config"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#zero3-config"),h(Ds,"class","relative group"),h(bi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ei,"id","deepspeed-nvme"),h(Xt,"id","nvme-support"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#nvme-support"),h(Os,"class","relative group"),h(Qo,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(Qo,"rel","nofollow"),h(el,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(el,"rel","nofollow"),h(sl,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(sl,"rel","nofollow"),h(Pi,"id","deepspeed-zero2-zero3-performance"),h(sa,"id","zero2-vs-zero3-performance"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#zero2-vs-zero3-performance"),h(Ts,"class","relative group"),h(Oi,"id","deepspeed-zero2-example"),h(aa,"id","zero2-example"),h(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(aa,"href","#zero2-example"),h(Ss,"class","relative group"),h(Ti,"id","deepspeed-zero3-example"),h(la,"id","zero3-example"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#zero3-example"),h(Cs,"class","relative group"),h(ia,"id","optimizer-and-scheduler"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#optimizer-and-scheduler"),h(xs,"class","relative group"),h(Si,"id","deepspeed-optimizer"),h(ha,"id","optimizer"),h(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ha,"href","#optimizer"),h(Is,"class","relative group"),h(hl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(hl,"rel","nofollow"),h(Ci,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ui,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Mi,"id","deepspeed-scheduler"),h(da,"id","scheduler"),h(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(da,"href","#scheduler"),h(Rs,"class","relative group"),h(wl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(wl,"rel","nofollow"),h(Zi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Ni,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Hi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Wi,"id","deepspeed-fp32"),h(ya,"id","fp32-precision"),h(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ya,"href","#fp32-precision"),h(Us,"class","relative group"),h(zl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(zl,"rel","nofollow"),h(Vi,"id","deepspeed-amp"),h(qa,"id","automatic-mixed-precision"),h(qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qa,"href","#automatic-mixed-precision"),h(Gs,"class","relative group"),h(Ji,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Qi,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Al,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Al,"rel","nofollow"),h(su,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(au,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(xl,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(xl,"rel","nofollow"),h(nu,"id","deepspeed-bs"),h(Oa,"id","batch-size"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#batch-size"),h(Ms,"class","relative group"),h(lu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(pu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(iu,"id","deepspeed-grad-acc"),h(Aa,"id","gradient-accumulation"),h(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Aa,"href","#gradient-accumulation"),h(Ls,"class","relative group"),h(cu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(fu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(du,"id","deepspeed-grad-clip"),h(Ca,"id","gradient-clipping"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#gradient-clipping"),h(Zs,"class","relative group"),h(_u,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(gu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ju,"id","deepspeed-weight-extraction"),h(Ia,"id","getting-the-model-weights-out"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#getting-the-model-weights-out"),h(Ns,"class","relative group"),h(Fl,"href","https://huggingface.co/models"),h(Fl,"rel","nofollow"),h(Ha,"id","zero3-and-infinity-nuances"),h(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ha,"href","#zero3-and-infinity-nuances"),h(Bs,"class","relative group"),h(Wa,"id","constructing-massive-models"),h(Wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wa,"href","#constructing-massive-models"),h(Hs,"class","relative group"),h(Su,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(Cu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(nr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(nr,"rel","nofollow"),h(Iu,"href","#from_pretrained-torch-dtype"),h(Ka,"id","gathering-parameters"),h(Ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ka,"href","#gathering-parameters"),h(Ws,"class","relative group"),h(rr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(rr,"rel","nofollow"),h(Uu,"id","deepspeed-zero-inference"),h(Xa,"id","zero-inference"),h(Xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xa,"href","#zero-inference"),h(Fs,"class","relative group"),h(Mu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(sn,"id","memory-requirements"),h(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sn,"href","#memory-requirements"),h(Vs,"class","relative group"),h(mr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(mr,"rel","nofollow"),h(an,"id","filing-issues"),h(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(an,"href","#filing-issues"),h(Ys,"class","relative group"),h(Qu,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(ec,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(sc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(yr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(yr,"rel","nofollow"),h(br,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(br,"rel","nofollow"),h(Er,"href","https://github.com/microsoft/DeepSpeed/"),h(Er,"rel","nofollow"),h(on,"id","troubleshooting"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#troubleshooting"),h(Js,"class","relative group"),h(kr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(kr,"rel","nofollow"),h(ln,"id","notes"),h(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ln,"href","#notes"),h(Xs,"class","relative group"),h(oc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Dr,"href","https://github.com/microsoft/deepspeed#installation"),h(Dr,"rel","nofollow"),h(lc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Or,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(Or,"rel","nofollow"),h(rc,"id","deepspeed-non-trainer-integration"),h(pn,"id","nontrainer-deepspeed-integration"),h(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pn,"href","#nontrainer-deepspeed-integration"),h(et,"class","relative group"),h(pc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(ic,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(uc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(cc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(hc,"href","/docs/transformers/master/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(mc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Cr,"href","https://www.deepspeed.ai/"),h(Cr,"rel","nofollow"),h(cn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(st,"class","relative group"),h(_c,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(vc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),h(rs,"class","docstring"),h(hn,"class","docstring"),h(fn,"class","docstring"),h(dn,"class","docstring"),h(E,"class","docstring"),h(mn,"id","deepspeed-zero-inference"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#deepspeed-zero-inference"),h(ot,"class","relative group"),h(gc,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(jn,"id","main-deepspeed-resources"),h(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jn,"href","#main-deepspeed-resources"),h(lt,"class","relative group"),h(Wr,"href","https://github.com/microsoft/deepspeed"),h(Wr,"rel","nofollow"),h(Fr,"href","https://www.deepspeed.ai/getting-started/"),h(Fr,"rel","nofollow"),h(Vr,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(Vr,"rel","nofollow"),h(Yr,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(Yr,"rel","nofollow"),h(Kr,"href","https://arxiv.org/abs/1910.02054"),h(Kr,"rel","nofollow"),h(Jr,"href","https://arxiv.org/abs/2101.06840"),h(Jr,"rel","nofollow"),h(Xr,"href","https://arxiv.org/abs/2104.07857"),h(Xr,"rel","nofollow"),h(Ec,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),h(Qr,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Qr,"rel","nofollow")},m(e,p){s(document.head,w),i(e,L,p),i(e,b,p),s(b,$),s($,fs),m(F,fs,null),s(b,In),s(b,ds),s(ds,ms),i(e,pt,p),i(e,V,p),s(V,Y),s(Y,Z),s(V,rp),s(V,$e),s($e,pp),s(V,QE),i(e,xv,p),i(e,D,p),s(D,mh),s(mh,e0),s(D,s0),s(D,_h),s(_h,t0),s(D,a0),s(D,vh),s(vh,n0),s(D,o0),s(D,gh),s(gh,l0),s(D,r0),s(D,jh),s(jh,p0),s(D,i0),s(D,yh),s(yh,u0),i(e,Iv,p),i(e,ke,p),s(ke,c0),s(ke,Rn),s(Rn,h0),s(ke,f0),s(ke,Un),s(Un,d0),s(ke,m0),i(e,Rv,p),i(e,ip,p),s(ip,_0),i(e,Uv,p),i(e,up,p),s(up,v0),i(e,Gv,p),i(e,it,p),s(it,g0),s(it,Gn),s(Gn,j0),s(it,y0),i(e,Mv,p),i(e,ut,p),s(ut,Mn),s(Mn,w0),s(Mn,cp),s(cp,b0),s(Mn,q0),s(ut,E0),s(ut,M),s(M,$0),s(M,hp),s(hp,k0),s(M,P0),s(M,wh),s(wh,z0),s(M,D0),s(M,bh),s(bh,O0),s(M,T0),s(M,qh),s(qh,A0),s(M,S0),s(M,fp),s(fp,C0),s(M,x0),i(e,Lv,p),i(e,dp,p),s(dp,I0),i(e,Zv,p),i(e,mp,p),s(mp,R0),i(e,Nv,p),i(e,_p,p),s(_p,Eh),s(Eh,U0),i(e,Bv,p),i(e,vp,p),s(vp,G0),i(e,Hv,p),i(e,gp,p),s(gp,Ln),s(Ln,M0),s(Ln,jp),s(jp,L0),s(Ln,Z0),i(e,Wv,p),i(e,yp,p),s(yp,N0),i(e,Fv,p),i(e,wp,p),i(e,Vv,p),i(e,_s,p),s(_s,ct),s(ct,$h),m(Zn,$h,null),s(_s,B0),s(_s,kh),s(kh,H0),i(e,Yv,p),i(e,bp,p),i(e,Kv,p),i(e,vs,p),s(vs,ht),s(ht,Ph),m(Nn,Ph,null),s(vs,W0),s(vs,zh),s(zh,F0),i(e,Jv,p),i(e,qp,p),s(qp,V0),i(e,Xv,p),m(Bn,e,p),i(e,Qv,p),i(e,Pe,p),s(Pe,Y0),s(Pe,Dh),s(Dh,K0),s(Pe,J0),s(Pe,Oh),s(Oh,X0),s(Pe,Q0),i(e,eg,p),m(Hn,e,p),i(e,sg,p),i(e,ze,p),s(ze,e$),s(ze,Wn),s(Wn,s$),s(ze,t$),s(ze,Fn),s(Fn,a$),s(ze,n$),i(e,tg,p),i(e,ft,p),s(ft,o$),s(ft,Ep),s(Ep,l$),s(ft,r$),i(e,ag,p),i(e,$p,p),s($p,p$),i(e,ng,p),i(e,kp,p),s(kp,i$),i(e,og,p),m(Vn,e,p),i(e,lg,p),i(e,De,p),s(De,u$),s(De,Th),s(Th,c$),s(De,h$),s(De,Ah),s(Ah,f$),s(De,d$),i(e,rg,p),i(e,dt,p),s(dt,m$),s(dt,Sh),s(Sh,_$),s(dt,v$),i(e,pg,p),m(Yn,e,p),i(e,ig,p),i(e,je,p),s(je,g$),s(je,Ch),s(Ch,j$),s(je,y$),s(je,xh),s(xh,w$),s(je,b$),s(je,Ih),s(Ih,q$),i(e,ug,p),i(e,Pp,p),s(Pp,E$),i(e,cg,p),m(Kn,e,p),i(e,hg,p),i(e,Oe,p),s(Oe,$$),s(Oe,Rh),s(Rh,k$),s(Oe,P$),s(Oe,Uh),s(Uh,z$),s(Oe,D$),i(e,fg,p),i(e,mt,p),s(mt,O$),s(mt,Gh),s(Gh,T$),s(mt,A$),i(e,dg,p),i(e,Te,p),s(Te,S$),s(Te,Mh),s(Mh,C$),s(Te,x$),s(Te,Jn),s(Jn,I$),s(Te,R$),i(e,mg,p),i(e,zp,p),s(zp,U$),i(e,_g,p),m(Xn,e,p),i(e,vg,p),i(e,Dp,p),s(Dp,G$),i(e,gg,p),m(Qn,e,p),i(e,jg,p),i(e,Op,p),s(Op,M$),i(e,yg,p),m(eo,e,p),i(e,wg,p),i(e,_t,p),s(_t,L$),s(_t,Lh),s(Lh,Z$),s(_t,N$),i(e,bg,p),i(e,vt,p),s(vt,B$),s(vt,Zh),s(Zh,H$),s(vt,W$),i(e,qg,p),i(e,gt,p),s(gt,F$),s(gt,so),s(so,V$),s(gt,Y$),i(e,Eg,p),i(e,Tp,p),i(e,$g,p),i(e,gs,p),s(gs,jt),s(jt,Nh),m(to,Nh,null),s(gs,K$),s(gs,Bh),s(Bh,J$),i(e,kg,p),i(e,yt,p),s(yt,X$),s(yt,Ap),s(Ap,Q$),s(yt,e5),i(e,Pg,p),i(e,wt,p),s(wt,js),s(js,s5),s(js,Hh),s(Hh,t5),s(js,a5),s(js,Wh),s(Wh,n5),s(js,o5),s(wt,l5),s(wt,ye),s(ye,r5),s(ye,Fh),s(Fh,p5),s(ye,i5),s(ye,Vh),s(Vh,u5),s(ye,c5),s(ye,ao),s(ao,h5),s(ye,f5),i(e,zg,p),i(e,Sp,p),s(Sp,d5),i(e,Dg,p),m(no,e,p),i(e,Og,p),i(e,Cp,p),s(Cp,m5),i(e,Tg,p),m(oo,e,p),i(e,Ag,p),i(e,O,p),s(O,_5),s(O,Yh),s(Yh,v5),s(O,g5),s(O,Kh),s(Kh,j5),s(O,y5),s(O,Jh),s(Jh,w5),s(O,b5),s(O,Xh),s(Xh,q5),s(O,E5),s(O,lo),s(lo,$5),s(O,k5),i(e,Sg,p),i(e,J,p),s(J,P5),s(J,Qh),s(Qh,z5),s(J,D5),s(J,ef),s(ef,O5),s(J,T5),s(J,sf),s(sf,A5),s(J,S5),i(e,Cg,p),i(e,bt,p),s(bt,C5),s(bt,tf),s(tf,x5),s(bt,I5),i(e,xg,p),m(ro,e,p),i(e,Ig,p),i(e,qt,p),s(qt,R5),s(qt,af),s(af,U5),s(qt,G5),i(e,Rg,p),i(e,Et,p),s(Et,M5),s(Et,po),s(po,L5),s(Et,Z5),i(e,Ug,p),i(e,xp,p),i(e,Gg,p),i(e,ys,p),s(ys,$t),s($t,nf),m(io,nf,null),s(ys,N5),s(ys,of),s(of,B5),i(e,Mg,p),i(e,kt,p),s(kt,H5),s(kt,Ip),s(Ip,W5),s(kt,F5),i(e,Lg,p),m(uo,e,p),i(e,Zg,p),i(e,Ae,p),s(Ae,V5),s(Ae,lf),s(lf,Y5),s(Ae,K5),s(Ae,co),s(co,J5),s(Ae,X5),i(e,Ng,p),i(e,Rp,p),s(Rp,Q5),i(e,Bg,p),i(e,Pt,p),s(Pt,rf),s(rf,e6),s(Pt,s6),s(Pt,pf),s(pf,t6),i(e,Hg,p),i(e,Up,p),s(Up,a6),i(e,Wg,p),m(ho,e,p),i(e,Fg,p),i(e,Gp,p),s(Gp,n6),i(e,Vg,p),i(e,zt,p),s(zt,o6),s(zt,fo),s(fo,l6),s(zt,r6),i(e,Yg,p),i(e,Mp,p),s(Mp,p6),i(e,Kg,p),i(e,Lp,p),s(Lp,i6),i(e,Jg,p),i(e,Zp,p),s(Zp,ws),s(ws,mo),s(mo,u6),s(mo,uf),s(uf,c6),s(mo,h6),s(ws,f6),m(_o,ws,null),s(ws,d6),s(ws,cf),s(cf,m6),i(e,Xg,p),i(e,Np,p),i(e,Qg,p),i(e,bs,p),s(bs,Dt),s(Dt,hf),m(vo,hf,null),s(bs,_6),s(bs,ff),s(ff,v6),i(e,ej,p),i(e,Ot,p),s(Ot,g6),s(Ot,df),s(df,j6),s(Ot,y6),i(e,sj,p),i(e,Bp,p),s(Bp,w6),i(e,tj,p),m(go,e,p),i(e,aj,p),i(e,Tt,p),s(Tt,b6),s(Tt,mf),s(mf,q6),s(Tt,E6),i(e,nj,p),i(e,Hp,p),s(Hp,$6),i(e,oj,p),i(e,Wp,p),s(Wp,k6),i(e,lj,p),m(jo,e,p),i(e,rj,p),i(e,Se,p),s(Se,P6),s(Se,_f),s(_f,z6),s(Se,D6),s(Se,vf),s(vf,O6),s(Se,T6),i(e,pj,p),m(yo,e,p),i(e,ij,p),i(e,At,p),s(At,A6),s(At,gf),s(gf,S6),s(At,C6),i(e,uj,p),m(wo,e,p),i(e,cj,p),i(e,Fp,p),s(Fp,x6),i(e,hj,p),i(e,St,p),s(St,I6),s(St,jf),s(jf,R6),s(St,U6),i(e,fj,p),i(e,Vp,p),i(e,dj,p),i(e,qs,p),s(qs,Ct),s(Ct,yf),m(bo,yf,null),s(qs,G6),s(qs,wf),s(wf,M6),i(e,mj,p),i(e,xt,p),s(xt,L6),s(xt,qo),s(qo,Z6),s(xt,N6),i(e,_j,p),i(e,It,p),s(It,B6),s(It,Eo),s(Eo,H6),s(It,W6),i(e,vj,p),m($o,e,p),i(e,gj,p),i(e,Rt,p),s(Rt,F6),s(Rt,bf),s(bf,V6),s(Rt,Y6),i(e,jj,p),m(ko,e,p),i(e,yj,p),i(e,Ut,p),s(Ut,K6),s(Ut,Po),s(Po,J6),s(Ut,X6),i(e,wj,p),i(e,Yp,p),s(Yp,Q6),i(e,bj,p),i(e,X,p),s(X,e4),s(X,qf),s(qf,s4),s(X,t4),s(X,Ef),s(Ef,a4),s(X,n4),s(X,$f),s($f,o4),s(X,l4),i(e,qj,p),m(zo,e,p),i(e,Ej,p),i(e,Gt,p),s(Gt,r4),s(Gt,Kp),s(Kp,p4),s(Gt,i4),i(e,$j,p),i(e,Jp,p),i(e,kj,p),i(e,Es,p),s(Es,Mt),s(Mt,kf),m(Do,kf,null),s(Es,u4),s(Es,Pf),s(Pf,c4),i(e,Pj,p),i(e,T,p),s(T,h4),s(T,Xp),s(Xp,f4),s(T,d4),s(T,Qp),s(Qp,m4),s(T,_4),s(T,zf),s(zf,v4),s(T,g4),s(T,Df),s(Df,j4),s(T,y4),s(T,ei),s(ei,w4),s(T,b4),i(e,zj,p),i(e,si,p),s(si,q4),i(e,Dj,p),m(Oo,e,p),i(e,Oj,p),i(e,ti,p),s(ti,E4),i(e,Tj,p),m(To,e,p),i(e,Aj,p),i(e,ai,p),i(e,Sj,p),i(e,$s,p),s($s,Lt),s(Lt,Of),m(Ao,Of,null),s($s,$4),s($s,Tf),s(Tf,k4),i(e,Cj,p),m(Zt,e,p),i(e,xj,p),i(e,Ce,p),s(Ce,P4),s(Ce,ni),s(ni,z4),s(Ce,D4),s(Ce,oi),s(oi,O4),s(Ce,T4),i(e,Ij,p),i(e,Nt,p),s(Nt,A4),s(Nt,li),s(li,S4),s(Nt,C4),i(e,Rj,p),i(e,xe,p),s(xe,x4),s(xe,Af),s(Af,I4),s(xe,R4),s(xe,ri),s(ri,U4),s(xe,G4),i(e,Uj,p),i(e,pi,p),s(pi,M4),i(e,Gj,p),i(e,Bt,p),s(Bt,L4),s(Bt,ii),s(ii,Z4),s(Bt,N4),i(e,Mj,p),i(e,Ht,p),s(Ht,Sf),s(Sf,B4),s(Ht,H4),s(Ht,So),s(So,W4),s(So,ui),s(ui,F4),s(So,V4),i(e,Lj,p),i(e,Q,p),s(Q,Y4),s(Q,Cf),s(Cf,K4),s(Q,J4),s(Q,ci),s(ci,X4),s(Q,Q4),s(Q,xf),s(xf,e8),s(Q,s8),i(e,Zj,p),i(e,hi,p),i(e,Nj,p),i(e,ks,p),s(ks,Wt),s(Wt,If),m(Co,If,null),s(ks,t8),s(ks,Rf),s(Rf,a8),i(e,Bj,p),i(e,xo,p),s(xo,Io),s(Io,n8),s(xo,o8),i(e,Hj,p),i(e,Ie,p),s(Ie,l8),s(Ie,Uf),s(Uf,r8),s(Ie,p8),s(Ie,Ro),s(Ro,i8),s(Ie,u8),i(e,Wj,p),i(e,Ft,p),s(Ft,c8),s(Ft,fi),s(fi,h8),s(Ft,f8),i(e,Fj,p),i(e,di,p),s(di,d8),i(e,Vj,p),i(e,mi,p),i(e,Yj,p),i(e,Ps,p),s(Ps,Vt),s(Vt,Gf),m(Uo,Gf,null),s(Ps,m8),s(Ps,Mf),s(Mf,_8),i(e,Kj,p),i(e,_i,p),s(_i,v8),i(e,Jj,p),m(Go,e,p),i(e,Xj,p),i(e,vi,p),s(vi,Lf),s(Lf,g8),i(e,Qj,p),i(e,Re,p),s(Re,zs),s(zs,j8),s(zs,Zf),s(Zf,y8),s(zs,w8),s(zs,Nf),s(Nf,b8),s(zs,q8),s(Re,E8),s(Re,A),s(A,Bf),s(Bf,$8),s(A,k8),s(A,Hf),s(Hf,P8),s(A,z8),s(A,Wf),s(Wf,D8),s(A,O8),s(A,Ff),s(Ff,T8),s(A,A8),s(A,Vf),s(Vf,S8),s(A,C8),s(A,Yf),s(Yf,x8),s(A,I8),s(Re,R8),s(Re,Kf),s(Kf,U8),i(e,ey,p),i(e,gi,p),i(e,sy,p),i(e,Ds,p),s(Ds,Yt),s(Yt,Jf),m(Mo,Jf,null),s(Ds,G8),s(Ds,Xf),s(Xf,M8),i(e,ty,p),i(e,ji,p),s(ji,L8),i(e,ay,p),m(Lo,e,p),i(e,ny,p),i(e,N,p),s(N,Z8),s(N,Qf),s(Qf,N8),s(N,B8),s(N,ed),s(ed,H8),s(N,W8),s(N,sd),s(sd,F8),s(N,V8),s(N,td),s(td,Y8),s(N,K8),i(e,oy,p),i(e,Ue,p),s(Ue,J8),s(Ue,ad),s(ad,X8),s(Ue,Q8),s(Ue,nd),s(nd,e7),s(Ue,s7),i(e,ly,p),i(e,yi,p),s(yi,od),s(od,t7),i(e,ry,p),i(e,Kt,p),s(Kt,Zo),s(Zo,ld),s(ld,a7),s(Zo,n7),s(Zo,rd),s(rd,o7),s(Kt,l7),s(Kt,No),s(No,pd),s(pd,r7),s(No,p7),s(No,id),s(id,i7),i(e,py,p),i(e,S,p),s(S,u7),s(S,ud),s(ud,c7),s(S,h7),s(S,cd),s(cd,f7),s(S,d7),s(S,hd),s(hd,m7),s(S,_7),s(S,fd),s(fd,v7),s(S,g7),s(S,dd),s(dd,j7),s(S,y7),i(e,iy,p),i(e,we,p),s(we,md),s(md,w7),s(we,b7),s(we,_d),s(_d,q7),s(we,E7),s(we,vd),s(vd,$7),s(we,k7),i(e,uy,p),i(e,wi,p),s(wi,P7),i(e,cy,p),i(e,Ge,p),s(Ge,Bo),s(Bo,gd),s(gd,z7),s(Bo,D7),s(Bo,jd),s(jd,O7),s(Ge,T7),s(Ge,Ho),s(Ho,yd),s(yd,A7),s(Ho,S7),s(Ho,wd),s(wd,C7),s(Ge,x7),s(Ge,Wo),s(Wo,bd),s(bd,I7),s(Wo,R7),s(Wo,qd),s(qd,U7),i(e,hy,p),i(e,Me,p),s(Me,G7),s(Me,Ed),s(Ed,M7),s(Me,L7),s(Me,bi),s(bi,Z7),s(Me,N7),i(e,fy,p),i(e,Fo,p),s(Fo,$d),s($d,B7),s(Fo,H7),i(e,dy,p),i(e,ee,p),s(ee,W7),s(ee,kd),s(kd,F7),s(ee,V7),s(ee,Pd),s(Pd,Y7),s(ee,K7),s(ee,zd),s(zd,J7),s(ee,X7),i(e,my,p),i(e,qi,p),s(qi,Vo),s(Vo,Dd),s(Dd,Q7),s(Vo,e9),s(Vo,Od),s(Od,s9),i(e,_y,p),i(e,be,p),s(be,Td),s(Td,t9),s(be,a9),s(be,Ad),s(Ad,n9),s(be,o9),s(be,Sd),s(Sd,l9),s(be,r9),i(e,vy,p),i(e,Le,p),s(Le,p9),s(Le,Cd),s(Cd,i9),s(Le,u9),s(Le,xd),s(xd,c9),s(Le,h9),i(e,gy,p),i(e,Jt,p),s(Jt,Yo),s(Yo,f9),s(Yo,Id),s(Id,d9),s(Yo,m9),s(Jt,_9),s(Jt,Ko),s(Ko,v9),s(Ko,Rd),s(Rd,g9),s(Ko,j9),i(e,jy,p),i(e,Ei,p),i(e,yy,p),i(e,Os,p),s(Os,Xt),s(Xt,Ud),m(Jo,Ud,null),s(Os,y9),s(Os,Gd),s(Gd,w9),i(e,wy,p),i(e,$i,p),s($i,b9),i(e,by,p),i(e,ki,p),s(ki,q9),i(e,qy,p),m(Xo,e,p),i(e,Ey,p),i(e,Qt,p),s(Qt,E9),s(Qt,Md),s(Md,$9),s(Qt,k9),i(e,$y,p),i(e,Ze,p),s(Ze,P9),s(Ze,Qo),s(Qo,z9),s(Ze,D9),s(Ze,el),s(el,O9),s(Ze,T9),i(e,ky,p),i(e,ea,p),s(ea,A9),s(ea,Ld),s(Ld,S9),s(ea,C9),i(e,Py,p),i(e,Ne,p),s(Ne,x9),s(Ne,Zd),s(Zd,I9),s(Ne,R9),s(Ne,sl),s(sl,U9),s(Ne,G9),i(e,zy,p),i(e,Pi,p),i(e,Dy,p),i(e,Ts,p),s(Ts,sa),s(sa,Nd),m(tl,Nd,null),s(Ts,M9),s(Ts,Bd),s(Bd,L9),i(e,Oy,p),i(e,zi,p),s(zi,Z9),i(e,Ty,p),i(e,Di,p),s(Di,N9),i(e,Ay,p),i(e,ta,p),s(ta,As),s(As,B9),s(As,Hd),s(Hd,H9),s(As,W9),s(As,Wd),s(Wd,F9),s(As,V9),s(ta,Y9),s(ta,al),s(al,K9),s(al,Fd),s(Fd,J9),s(al,X9),i(e,Sy,p),i(e,Be,p),s(Be,Q9),s(Be,Vd),s(Vd,ek),s(Be,sk),s(Be,Yd),s(Yd,tk),s(Be,ak),i(e,Cy,p),i(e,Oi,p),i(e,xy,p),i(e,Ss,p),s(Ss,aa),s(aa,Kd),m(nl,Kd,null),s(Ss,nk),s(Ss,Jd),s(Jd,ok),i(e,Iy,p),i(e,na,p),s(na,lk),s(na,Xd),s(Xd,rk),s(na,pk),i(e,Ry,p),m(ol,e,p),i(e,Uy,p),i(e,oa,p),s(oa,ik),s(oa,Qd),s(Qd,uk),s(oa,ck),i(e,Gy,p),m(ll,e,p),i(e,My,p),i(e,Ti,p),i(e,Ly,p),i(e,Cs,p),s(Cs,la),s(la,em),m(rl,em,null),s(Cs,hk),s(Cs,sm),s(sm,fk),i(e,Zy,p),i(e,ra,p),s(ra,dk),s(ra,tm),s(tm,mk),s(ra,_k),i(e,Ny,p),m(pl,e,p),i(e,By,p),i(e,pa,p),s(pa,vk),s(pa,am),s(am,gk),s(pa,jk),i(e,Hy,p),m(il,e,p),i(e,Wy,p),i(e,xs,p),s(xs,ia),s(ia,nm),m(ul,nm,null),s(xs,yk),s(xs,om),s(om,wk),i(e,Fy,p),i(e,ua,p),s(ua,bk),s(ua,lm),s(lm,qk),s(ua,Ek),i(e,Vy,p),i(e,Ai,p),s(Ai,$k),i(e,Yy,p),i(e,ca,p),s(ca,kk),s(ca,rm),s(rm,Pk),s(ca,zk),i(e,Ky,p),i(e,Si,p),i(e,Jy,p),i(e,Is,p),s(Is,ha),s(ha,pm),m(cl,pm,null),s(Is,Dk),s(Is,im),s(im,Ok),i(e,Xy,p),i(e,He,p),s(He,Tk),s(He,um),s(um,Ak),s(He,Sk),s(He,hl),s(hl,Ck),s(He,xk),i(e,Qy,p),i(e,q,p),s(q,Ik),s(q,cm),s(cm,Rk),s(q,Uk),s(q,Ci),s(Ci,Gk),s(q,Mk),s(q,hm),s(hm,Lk),s(q,Zk),s(q,fm),s(fm,Nk),s(q,Bk),s(q,dm),s(dm,Hk),s(q,Wk),s(q,mm),s(mm,Fk),s(q,Vk),s(q,_m),s(_m,Yk),s(q,Kk),s(q,vm),s(vm,Jk),s(q,Xk),i(e,ew,p),i(e,We,p),s(We,Qk),s(We,gm),s(gm,eP),s(We,sP),s(We,jm),s(jm,tP),s(We,aP),i(e,sw,p),m(fl,e,p),i(e,tw,p),i(e,xi,p),s(xi,nP),i(e,aw,p),i(e,se,p),s(se,dl),s(dl,ym),s(ym,oP),s(dl,lP),s(dl,wm),s(wm,rP),s(se,pP),s(se,ml),s(ml,bm),s(bm,iP),s(ml,uP),s(ml,qm),s(qm,cP),s(se,hP),s(se,_l),s(_l,Em),s(Em,fP),s(_l,dP),s(_l,$m),s($m,mP),s(se,_P),s(se,vl),s(vl,km),s(km,vP),s(vl,gP),s(vl,Pm),s(Pm,jP),i(e,nw,p),i(e,Ii,p),s(Ii,yP),i(e,ow,p),i(e,Ri,p),s(Ri,wP),i(e,lw,p),m(gl,e,p),i(e,rw,p),i(e,fa,p),s(fa,bP),s(fa,Ui),s(Ui,qP),s(fa,EP),i(e,pw,p),i(e,Gi,p),s(Gi,$P),i(e,iw,p),m(jl,e,p),i(e,uw,p),i(e,te,p),s(te,kP),s(te,zm),s(zm,PP),s(te,zP),s(te,Dm),s(Dm,DP),s(te,OP),s(te,Om),s(Om,TP),s(te,AP),i(e,cw,p),i(e,Mi,p),i(e,hw,p),i(e,Rs,p),s(Rs,da),s(da,Tm),m(yl,Tm,null),s(Rs,SP),s(Rs,Am),s(Am,CP),i(e,fw,p),i(e,C,p),s(C,xP),s(C,Sm),s(Sm,IP),s(C,RP),s(C,Cm),s(Cm,UP),s(C,GP),s(C,xm),s(xm,MP),s(C,LP),s(C,Im),s(Im,ZP),s(C,NP),s(C,wl),s(wl,BP),s(C,HP),i(e,dw,p),i(e,Li,p),s(Li,WP),i(e,mw,p),i(e,ma,p),s(ma,bl),s(bl,Rm),s(Rm,FP),s(bl,VP),s(bl,Um),s(Um,YP),s(ma,KP),s(ma,Fe),s(Fe,Gm),s(Gm,JP),s(Fe,XP),s(Fe,Mm),s(Mm,QP),s(Fe,ez),s(Fe,Lm),s(Lm,sz),s(Fe,tz),i(e,_w,p),i(e,P,p),s(P,az),s(P,Zm),s(Zm,nz),s(P,oz),s(P,Zi),s(Zi,lz),s(P,rz),s(P,Nm),s(Nm,pz),s(P,iz),s(P,Bm),s(Bm,uz),s(P,cz),s(P,Hm),s(Hm,hz),s(P,fz),s(P,Wm),s(Wm,dz),s(P,mz),i(e,vw,p),i(e,Ve,p),s(Ve,_z),s(Ve,Fm),s(Fm,vz),s(Ve,gz),s(Ve,Vm),s(Vm,jz),s(Ve,yz),i(e,gw,p),m(ql,e,p),i(e,jw,p),i(e,Ye,p),s(Ye,wz),s(Ye,Ym),s(Ym,bz),s(Ye,qz),s(Ye,Ni),s(Ni,Ez),s(Ye,$z),i(e,yw,p),i(e,ae,p),s(ae,_a),s(_a,Km),s(Km,kz),s(_a,Pz),s(_a,Jm),s(Jm,zz),s(_a,Dz),s(ae,Oz),s(ae,va),s(va,Xm),s(Xm,Tz),s(va,Az),s(va,Qm),s(Qm,Sz),s(va,Cz),s(ae,xz),s(ae,Ke),s(Ke,e_),s(e_,Iz),s(Ke,Rz),s(Ke,s_),s(s_,Uz),s(Ke,Gz),s(Ke,t_),s(t_,Mz),s(Ke,Lz),s(ae,Zz),s(ae,Je),s(Je,a_),s(a_,Nz),s(Je,Bz),s(Je,n_),s(n_,Hz),s(Je,Wz),s(Je,o_),s(o_,Fz),s(Je,Vz),i(e,ww,p),i(e,Bi,p),s(Bi,Yz),i(e,bw,p),m(El,e,p),i(e,qw,p),i(e,ga,p),s(ga,Kz),s(ga,Hi),s(Hi,Jz),s(ga,Xz),i(e,Ew,p),i(e,ja,p),s(ja,Qz),s(ja,l_),s(l_,eD),s(ja,sD),i(e,$w,p),m($l,e,p),i(e,kw,p),i(e,B,p),s(B,tD),s(B,r_),s(r_,aD),s(B,nD),s(B,p_),s(p_,oD),s(B,lD),s(B,i_),s(i_,rD),s(B,pD),s(B,u_),s(u_,iD),s(B,uD),i(e,Pw,p),i(e,Wi,p),i(e,zw,p),i(e,Us,p),s(Us,ya),s(ya,c_),m(kl,c_,null),s(Us,cD),s(Us,h_),s(h_,hD),i(e,Dw,p),i(e,Fi,p),s(Fi,fD),i(e,Ow,p),i(e,wa,p),s(wa,dD),s(wa,f_),s(f_,mD),s(wa,_D),i(e,Tw,p),m(Pl,e,p),i(e,Aw,p),i(e,ba,p),s(ba,vD),s(ba,zl),s(zl,gD),s(ba,jD),i(e,Sw,p),i(e,Vi,p),i(e,Cw,p),i(e,Gs,p),s(Gs,qa),s(qa,d_),m(Dl,d_,null),s(Gs,yD),s(Gs,m_),s(m_,wD),i(e,xw,p),i(e,Yi,p),s(Yi,bD),i(e,Iw,p),i(e,Ki,p),s(Ki,qD),i(e,Rw,p),m(Ol,e,p),i(e,Uw,p),i(e,Xe,p),s(Xe,ED),s(Xe,Ji),s(Ji,$D),s(Xe,kD),s(Xe,__),s(__,PD),s(Xe,zD),i(e,Gw,p),i(e,Ea,p),s(Ea,DD),s(Ea,v_),s(v_,OD),s(Ea,TD),i(e,Mw,p),i(e,Xi,p),s(Xi,AD),i(e,Lw,p),m(Tl,e,p),i(e,Zw,p),i(e,$a,p),s($a,SD),s($a,Qi),s(Qi,CD),s($a,xD),i(e,Nw,p),i(e,ka,p),s(ka,ID),s(ka,Al),s(Al,RD),s(ka,UD),i(e,Bw,p),i(e,eu,p),s(eu,GD),i(e,Hw,p),m(Sl,e,p),i(e,Ww,p),i(e,ne,p),s(ne,MD),s(ne,su),s(su,LD),s(ne,ZD),s(ne,g_),s(g_,ND),s(ne,BD),s(ne,j_),s(j_,HD),s(ne,WD),i(e,Fw,p),i(e,Pa,p),s(Pa,FD),s(Pa,y_),s(y_,VD),s(Pa,YD),i(e,Vw,p),i(e,tu,p),s(tu,KD),i(e,Yw,p),m(Cl,e,p),i(e,Kw,p),i(e,za,p),s(za,JD),s(za,au),s(au,XD),s(za,QD),i(e,Jw,p),i(e,Da,p),s(Da,eO),s(Da,xl),s(xl,sO),s(Da,tO),i(e,Xw,p),i(e,nu,p),i(e,Qw,p),i(e,Ms,p),s(Ms,Oa),s(Oa,w_),m(Il,w_,null),s(Ms,aO),s(Ms,b_),s(b_,nO),i(e,e2,p),i(e,ou,p),s(ou,oO),i(e,s2,p),m(Rl,e,p),i(e,t2,p),i(e,x,p),s(x,lO),s(x,lu),s(lu,rO),s(x,pO),s(x,q_),s(q_,iO),s(x,uO),s(x,E_),s(E_,cO),s(x,hO),s(x,$_),s($_,fO),s(x,dO),s(x,k_),s(k_,mO),s(x,_O),i(e,a2,p),i(e,ru,p),s(ru,vO),i(e,n2,p),m(Ul,e,p),i(e,o2,p),i(e,Ta,p),s(Ta,gO),s(Ta,pu),s(pu,jO),s(Ta,yO),i(e,l2,p),i(e,iu,p),i(e,r2,p),i(e,Ls,p),s(Ls,Aa),s(Aa,P_),m(Gl,P_,null),s(Ls,wO),s(Ls,z_),s(z_,bO),i(e,p2,p),i(e,uu,p),s(uu,qO),i(e,i2,p),m(Ml,e,p),i(e,u2,p),i(e,Qe,p),s(Qe,EO),s(Qe,cu),s(cu,$O),s(Qe,kO),s(Qe,D_),s(D_,PO),s(Qe,zO),i(e,c2,p),i(e,hu,p),s(hu,DO),i(e,h2,p),m(Ll,e,p),i(e,f2,p),i(e,Sa,p),s(Sa,OO),s(Sa,fu),s(fu,TO),s(Sa,AO),i(e,d2,p),i(e,du,p),i(e,m2,p),i(e,Zs,p),s(Zs,Ca),s(Ca,O_),m(Zl,O_,null),s(Zs,SO),s(Zs,T_),s(T_,CO),i(e,_2,p),i(e,mu,p),s(mu,xO),i(e,v2,p),m(Nl,e,p),i(e,g2,p),i(e,es,p),s(es,IO),s(es,_u),s(_u,RO),s(es,UO),s(es,A_),s(A_,GO),s(es,MO),i(e,j2,p),i(e,vu,p),s(vu,LO),i(e,y2,p),m(Bl,e,p),i(e,w2,p),i(e,xa,p),s(xa,ZO),s(xa,gu),s(gu,NO),s(xa,BO),i(e,b2,p),i(e,ju,p),i(e,q2,p),i(e,Ns,p),s(Ns,Ia),s(Ia,S_),m(Hl,S_,null),s(Ns,HO),s(Ns,C_),s(C_,WO),i(e,E2,p),i(e,Ra,p),s(Ra,FO),s(Ra,x_),s(x_,VO),s(Ra,YO),i(e,$2,p),i(e,yu,p),s(yu,I_),s(I_,KO),i(e,k2,p),i(e,Ua,p),s(Ua,JO),s(Ua,R_),s(R_,XO),s(Ua,QO),i(e,P2,p),i(e,H,p),s(H,eT),s(H,U_),s(U_,sT),s(H,tT),s(H,G_),s(G_,aT),s(H,nT),s(H,M_),s(M_,oT),s(H,lT),s(H,L_),s(L_,rT),s(H,pT),i(e,z2,p),m(Wl,e,p),i(e,D2,p),i(e,wu,p),s(wu,Z_),s(Z_,iT),i(e,O2,p),i(e,Ga,p),s(Ga,uT),s(Ga,Fl),s(Fl,cT),s(Ga,hT),i(e,T2,p),i(e,bu,p),s(bu,N_),s(N_,fT),i(e,A2,p),i(e,qu,p),s(qu,dT),i(e,S2,p),i(e,Eu,p),s(Eu,mT),i(e,C2,p),m(Vl,e,p),i(e,x2,p),i(e,ss,p),s(ss,_T),s(ss,B_),s(B_,vT),s(ss,gT),s(ss,H_),s(H_,jT),s(ss,yT),i(e,I2,p),m(Yl,e,p),i(e,R2,p),m(Ma,e,p),i(e,U2,p),i(e,La,p),s(La,wT),s(La,W_),s(W_,bT),s(La,qT),i(e,G2,p),i(e,Za,p),s(Za,ET),s(Za,F_),s(F_,$T),s(Za,kT),i(e,M2,p),m(Kl,e,p),i(e,L2,p),i(e,$u,p),s($u,V_),s(V_,PT),i(e,Z2,p),i(e,ts,p),s(ts,zT),s(ts,Y_),s(Y_,DT),s(ts,OT),s(ts,K_),s(K_,TT),s(ts,AT),i(e,N2,p),i(e,ku,p),s(ku,ST),i(e,B2,p),m(Jl,e,p),i(e,H2,p),i(e,Na,p),s(Na,CT),s(Na,J_),s(J_,xT),s(Na,IT),i(e,W2,p),m(Xl,e,p),i(e,F2,p),i(e,Ba,p),s(Ba,RT),s(Ba,X_),s(X_,UT),s(Ba,GT),i(e,V2,p),i(e,Pu,p),s(Pu,MT),i(e,Y2,p),i(e,Ql,p),s(Ql,Q_),s(Q_,LT),s(Ql,ZT),i(e,K2,p),i(e,as,p),s(as,NT),s(as,e1),s(e1,BT),s(as,HT),s(as,s1),s(s1,WT),s(as,FT),i(e,J2,p),i(e,zu,p),s(zu,VT),i(e,X2,p),i(e,Bs,p),s(Bs,Ha),s(Ha,t1),m(er,t1,null),s(Bs,YT),s(Bs,a1),s(a1,KT),i(e,Q2,p),i(e,Du,p),s(Du,JT),i(e,eb,p),i(e,Ou,p),s(Ou,XT),i(e,sb,p),i(e,Tu,p),s(Tu,QT),i(e,tb,p),i(e,Hs,p),s(Hs,Wa),s(Wa,n1),m(sr,n1,null),s(Hs,eA),s(Hs,o1),s(o1,sA),i(e,ab,p),i(e,Fa,p),s(Fa,tA),s(Fa,l1),s(l1,aA),s(Fa,nA),i(e,nb,p),m(tr,e,p),i(e,ob,p),i(e,Au,p),s(Au,oA),i(e,lb,p),i(e,k,p),s(k,lA),s(k,r1),s(r1,rA),s(k,pA),s(k,p1),s(p1,iA),s(k,uA),s(k,i1),s(i1,cA),s(k,hA),s(k,Su),s(Su,fA),s(k,dA),s(k,Cu),s(Cu,mA),s(k,_A),s(k,u1),s(u1,vA),s(k,gA),s(k,c1),s(c1,jA),s(k,yA),i(e,rb,p),m(ar,e,p),i(e,pb,p),i(e,Va,p),s(Va,wA),s(Va,h1),s(h1,bA),s(Va,qA),i(e,ib,p),i(e,xu,p),s(xu,EA),i(e,ub,p),i(e,Ya,p),s(Ya,$A),s(Ya,nr),s(nr,kA),s(Ya,PA),i(e,cb,p),i(e,oe,p),s(oe,zA),s(oe,f1),s(f1,DA),s(oe,OA),s(oe,d1),s(d1,TA),s(oe,AA),s(oe,Iu),s(Iu,SA),s(oe,CA),i(e,hb,p),i(e,Ws,p),s(Ws,Ka),s(Ka,m1),m(or,m1,null),s(Ws,xA),s(Ws,_1),s(_1,IA),i(e,fb,p),i(e,lr,p),s(lr,RA),s(lr,rr),s(rr,UA),i(e,db,p),i(e,Ja,p),s(Ja,GA),s(Ja,v1),s(v1,MA),s(Ja,LA),i(e,mb,p),i(e,Ru,p),s(Ru,ZA),i(e,_b,p),m(pr,e,p),i(e,vb,p),i(e,ns,p),s(ns,NA),s(ns,g1),s(g1,BA),s(ns,HA),s(ns,j1),s(j1,WA),s(ns,FA),i(e,gb,p),i(e,Uu,p),i(e,jb,p),i(e,Fs,p),s(Fs,Xa),s(Xa,y1),m(ir,y1,null),s(Fs,VA),s(Fs,w1),s(w1,YA),i(e,yb,p),i(e,Gu,p),s(Gu,KA),i(e,wb,p),i(e,Qa,p),s(Qa,JA),s(Qa,Mu),s(Mu,XA),s(Qa,QA),i(e,bb,p),m(ur,e,p),i(e,qb,p),i(e,Lu,p),s(Lu,eS),i(e,Eb,p),i(e,en,p),s(en,sS),s(en,b1),s(b1,tS),s(en,aS),i(e,$b,p),m(cr,e,p),i(e,kb,p),i(e,Zu,p),s(Zu,nS),i(e,Pb,p),i(e,Nu,p),s(Nu,oS),i(e,zb,p),i(e,Vs,p),s(Vs,sn),s(sn,q1),m(hr,q1,null),s(Vs,lS),s(Vs,E1),s(E1,rS),i(e,Db,p),i(e,Bu,p),s(Bu,pS),i(e,Ob,p),i(e,Hu,p),s(Hu,iS),i(e,Tb,p),m(fr,e,p),i(e,Ab,p),i(e,Wu,p),s(Wu,uS),i(e,Sb,p),i(e,Fu,p),s(Fu,cS),i(e,Cb,p),i(e,Vu,p),s(Vu,hS),i(e,xb,p),i(e,Yu,p),s(Yu,fS),i(e,Ib,p),m(dr,e,p),i(e,Rb,p),i(e,Ku,p),s(Ku,dS),i(e,Ub,p),i(e,tn,p),s(tn,mS),s(tn,mr),s(mr,_S),s(tn,vS),i(e,Gb,p),i(e,Ys,p),s(Ys,an),s(an,$1),m(_r,$1,null),s(Ys,gS),s(Ys,k1),s(k1,jS),i(e,Mb,p),i(e,Ju,p),s(Ju,yS),i(e,Lb,p),i(e,Xu,p),s(Xu,wS),i(e,Zb,p),i(e,I,p),s(I,P1),s(P1,z1),s(z1,bS),s(I,qS),s(I,D1),s(D1,qe),s(qe,ES),s(qe,Qu),s(Qu,$S),s(qe,kS),s(qe,ec),s(ec,PS),s(qe,zS),s(qe,sc),s(sc,DS),s(qe,OS),s(I,TS),s(I,vr),s(vr,O1),s(O1,AS),s(vr,SS),m(gr,vr,null),s(I,CS),s(I,T1),s(T1,jr),s(jr,xS),s(jr,yr),s(yr,IS),s(jr,RS),s(I,US),s(I,A1),s(A1,S1),s(S1,GS),s(I,MS),s(I,C1),s(C1,wr),s(wr,LS),s(wr,br),s(br,ZS),s(wr,NS),i(e,Nb,p),i(e,tc,p),s(tc,BS),i(e,Bb,p),i(e,nn,p),s(nn,Ks),s(Ks,x1),s(x1,HS),s(Ks,WS),s(Ks,I1),s(I1,FS),s(Ks,VS),s(Ks,R1),s(R1,YS),s(nn,KS),s(nn,U1),s(U1,qr),s(qr,JS),s(qr,Er),s(Er,XS),s(qr,QS),i(e,Hb,p),i(e,Js,p),s(Js,on),s(on,G1),m($r,G1,null),s(Js,eC),s(Js,M1),s(M1,sC),i(e,Wb,p),i(e,ac,p),s(ac,nc),s(nc,L1),s(L1,tC),s(nc,aC),i(e,Fb,p),i(e,R,p),s(R,nC),s(R,Z1),s(Z1,oC),s(R,lC),s(R,N1),s(N1,rC),s(R,pC),s(R,B1),s(B1,iC),s(R,uC),s(R,H1),s(H1,cC),s(R,hC),s(R,kr),s(kr,fC),s(R,dC),i(e,Vb,p),i(e,Xs,p),s(Xs,ln),s(ln,W1),m(Pr,W1,null),s(Xs,mC),s(Xs,F1),s(F1,_C),i(e,Yb,p),i(e,os,p),s(os,rn),s(rn,vC),s(rn,oc),s(oc,gC),s(rn,jC),s(rn,V1),s(V1,yC),s(os,wC),s(os,zr),s(zr,bC),s(zr,Dr),s(Dr,qC),s(zr,EC),s(os,$C),s(os,Qs),s(Qs,kC),s(Qs,lc),s(lc,PC),s(Qs,zC),s(Qs,Or),s(Or,DC),s(Qs,OC),i(e,Kb,p),i(e,rc,p),i(e,Jb,p),i(e,et,p),s(et,pn),s(pn,Y1),m(Tr,Y1,null),s(et,TC),s(et,K1),s(K1,AC),i(e,Xb,p),i(e,le,p),s(le,SC),s(le,pc),s(pc,CC),s(le,xC),s(le,ic),s(ic,IC),s(le,RC),s(le,J1),s(J1,UC),s(le,GC),i(e,Qb,p),i(e,un,p),s(un,MC),s(un,uc),s(uc,LC),s(un,ZC),i(e,e3,p),i(e,ls,p),s(ls,NC),s(ls,cc),s(cc,BC),s(ls,HC),s(ls,hc),s(hc,WC),s(ls,FC),i(e,s3,p),i(e,fc,p),s(fc,VC),i(e,t3,p),m(Ar,e,p),i(e,a3,p),i(e,dc,p),s(dc,YC),i(e,n3,p),m(Sr,e,p),i(e,o3,p),i(e,re,p),s(re,KC),s(re,mc),s(mc,JC),s(re,XC),s(re,Cr),s(Cr,QC),s(re,ex),s(re,X1),s(X1,sx),s(re,tx),i(e,l3,p),i(e,st,p),s(st,cn),s(cn,Q1),m(xr,Q1,null),s(st,ax),s(st,ev),s(ev,nx),i(e,r3,p),i(e,E,p),m(Ir,E,null),s(E,ox),s(E,sv),s(sv,lx),s(E,rx),s(E,Ee),s(Ee,px),s(Ee,tv),s(tv,ix),s(Ee,ux),s(Ee,av),s(av,cx),s(Ee,hx),s(Ee,nv),s(nv,fx),s(Ee,dx),s(E,mx),s(E,pe),s(pe,_c),s(_c,_x),s(pe,vx),s(pe,ov),s(ov,gx),s(pe,jx),s(pe,vc),s(vc,yx),s(pe,wx),s(pe,lv),s(lv,bx),s(pe,qx),s(E,Ex),s(E,rs),m(Rr,rs,null),s(rs,$x),s(rs,rv),s(rv,kx),s(rs,Px),s(rs,tt),s(tt,zx),s(tt,pv),s(pv,Dx),s(tt,Ox),s(tt,iv),s(iv,Tx),s(tt,Ax),s(E,Sx),s(E,hn),m(Ur,hn,null),s(hn,Cx),s(hn,Gr),s(Gr,xx),s(Gr,uv),s(uv,Ix),s(Gr,Rx),s(E,Ux),s(E,fn),m(Mr,fn,null),s(fn,Gx),s(fn,at),s(at,Mx),s(at,cv),s(cv,Lx),s(at,Zx),s(at,hv),s(hv,Nx),s(at,Bx),s(E,Hx),s(E,dn),m(Lr,dn,null),s(dn,Wx),s(dn,nt),s(nt,Fx),s(nt,fv),s(fv,Vx),s(nt,Yx),s(nt,dv),s(dv,Kx),s(nt,Jx),i(e,p3,p),i(e,ot,p),s(ot,mn),s(mn,mv),m(Zr,mv,null),s(ot,Xx),s(ot,_v),s(_v,Qx),i(e,i3,p),i(e,_n,p),s(_n,eI),s(_n,gc),s(gc,sI),s(_n,tI),i(e,u3,p),i(e,jc,p),s(jc,aI),i(e,c3,p),i(e,yc,p),s(yc,nI),i(e,h3,p),i(e,wc,p),s(wc,oI),i(e,f3,p),i(e,vn,p),s(vn,vv),s(vv,lI),s(vn,rI),s(vn,gv),s(gv,pI),i(e,d3,p),m(Nr,e,p),i(e,m3,p),i(e,gn,p),s(gn,iI),s(gn,jv),s(jv,uI),s(gn,cI),i(e,_3,p),m(Br,e,p),i(e,v3,p),i(e,bc,p),s(bc,hI),i(e,g3,p),i(e,lt,p),s(lt,jn),s(jn,yv),m(Hr,yv,null),s(lt,fI),s(lt,wv),s(wv,dI),i(e,j3,p),i(e,ie,p),s(ie,bv),s(bv,Wr),s(Wr,mI),s(ie,_I),s(ie,qv),s(qv,Fr),s(Fr,vI),s(ie,gI),s(ie,Ev),s(Ev,Vr),s(Vr,jI),s(ie,yI),s(ie,$v),s($v,Yr),s(Yr,wI),i(e,y3,p),i(e,qc,p),s(qc,bI),i(e,w3,p),i(e,ps,p),s(ps,kv),s(kv,Kr),s(Kr,qI),s(ps,EI),s(ps,Pv),s(Pv,Jr),s(Jr,$I),s(ps,kI),s(ps,zv),s(zv,Xr),s(Xr,PI),i(e,b3,p),i(e,is,p),s(is,zI),s(is,Ec),s(Ec,DI),s(is,OI),s(is,Qr),s(Qr,TI),s(is,AI),q3=!0},p(e,[p]){const ep={};p&2&&(ep.$$scope={dirty:p,ctx:e}),Zt.$set(ep);const Dv={};p&2&&(Dv.$$scope={dirty:p,ctx:e}),Ma.$set(Dv)},i(e){q3||(_(F.$$.fragment,e),_(Zn.$$.fragment,e),_(Nn.$$.fragment,e),_(Bn.$$.fragment,e),_(Hn.$$.fragment,e),_(Vn.$$.fragment,e),_(Yn.$$.fragment,e),_(Kn.$$.fragment,e),_(Xn.$$.fragment,e),_(Qn.$$.fragment,e),_(eo.$$.fragment,e),_(to.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(ro.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(ho.$$.fragment,e),_(_o.$$.fragment,e),_(vo.$$.fragment,e),_(go.$$.fragment,e),_(jo.$$.fragment,e),_(yo.$$.fragment,e),_(wo.$$.fragment,e),_(bo.$$.fragment,e),_($o.$$.fragment,e),_(ko.$$.fragment,e),_(zo.$$.fragment,e),_(Do.$$.fragment,e),_(Oo.$$.fragment,e),_(To.$$.fragment,e),_(Ao.$$.fragment,e),_(Zt.$$.fragment,e),_(Co.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Mo.$$.fragment,e),_(Lo.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(tl.$$.fragment,e),_(nl.$$.fragment,e),_(ol.$$.fragment,e),_(ll.$$.fragment,e),_(rl.$$.fragment,e),_(pl.$$.fragment,e),_(il.$$.fragment,e),_(ul.$$.fragment,e),_(cl.$$.fragment,e),_(fl.$$.fragment,e),_(gl.$$.fragment,e),_(jl.$$.fragment,e),_(yl.$$.fragment,e),_(ql.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(Dl.$$.fragment,e),_(Ol.$$.fragment,e),_(Tl.$$.fragment,e),_(Sl.$$.fragment,e),_(Cl.$$.fragment,e),_(Il.$$.fragment,e),_(Rl.$$.fragment,e),_(Ul.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Ll.$$.fragment,e),_(Zl.$$.fragment,e),_(Nl.$$.fragment,e),_(Bl.$$.fragment,e),_(Hl.$$.fragment,e),_(Wl.$$.fragment,e),_(Vl.$$.fragment,e),_(Yl.$$.fragment,e),_(Ma.$$.fragment,e),_(Kl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(or.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(hr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(_r.$$.fragment,e),_(gr.$$.fragment,e),_($r.$$.fragment,e),_(Pr.$$.fragment,e),_(Tr.$$.fragment,e),_(Ar.$$.fragment,e),_(Sr.$$.fragment,e),_(xr.$$.fragment,e),_(Ir.$$.fragment,e),_(Rr.$$.fragment,e),_(Ur.$$.fragment,e),_(Mr.$$.fragment,e),_(Lr.$$.fragment,e),_(Zr.$$.fragment,e),_(Nr.$$.fragment,e),_(Br.$$.fragment,e),_(Hr.$$.fragment,e),q3=!0)},o(e){v(F.$$.fragment,e),v(Zn.$$.fragment,e),v(Nn.$$.fragment,e),v(Bn.$$.fragment,e),v(Hn.$$.fragment,e),v(Vn.$$.fragment,e),v(Yn.$$.fragment,e),v(Kn.$$.fragment,e),v(Xn.$$.fragment,e),v(Qn.$$.fragment,e),v(eo.$$.fragment,e),v(to.$$.fragment,e),v(no.$$.fragment,e),v(oo.$$.fragment,e),v(ro.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(ho.$$.fragment,e),v(_o.$$.fragment,e),v(vo.$$.fragment,e),v(go.$$.fragment,e),v(jo.$$.fragment,e),v(yo.$$.fragment,e),v(wo.$$.fragment,e),v(bo.$$.fragment,e),v($o.$$.fragment,e),v(ko.$$.fragment,e),v(zo.$$.fragment,e),v(Do.$$.fragment,e),v(Oo.$$.fragment,e),v(To.$$.fragment,e),v(Ao.$$.fragment,e),v(Zt.$$.fragment,e),v(Co.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Mo.$$.fragment,e),v(Lo.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(tl.$$.fragment,e),v(nl.$$.fragment,e),v(ol.$$.fragment,e),v(ll.$$.fragment,e),v(rl.$$.fragment,e),v(pl.$$.fragment,e),v(il.$$.fragment,e),v(ul.$$.fragment,e),v(cl.$$.fragment,e),v(fl.$$.fragment,e),v(gl.$$.fragment,e),v(jl.$$.fragment,e),v(yl.$$.fragment,e),v(ql.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(Dl.$$.fragment,e),v(Ol.$$.fragment,e),v(Tl.$$.fragment,e),v(Sl.$$.fragment,e),v(Cl.$$.fragment,e),v(Il.$$.fragment,e),v(Rl.$$.fragment,e),v(Ul.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Ll.$$.fragment,e),v(Zl.$$.fragment,e),v(Nl.$$.fragment,e),v(Bl.$$.fragment,e),v(Hl.$$.fragment,e),v(Wl.$$.fragment,e),v(Vl.$$.fragment,e),v(Yl.$$.fragment,e),v(Ma.$$.fragment,e),v(Kl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(or.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(hr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(_r.$$.fragment,e),v(gr.$$.fragment,e),v($r.$$.fragment,e),v(Pr.$$.fragment,e),v(Tr.$$.fragment,e),v(Ar.$$.fragment,e),v(Sr.$$.fragment,e),v(xr.$$.fragment,e),v(Ir.$$.fragment,e),v(Rr.$$.fragment,e),v(Ur.$$.fragment,e),v(Mr.$$.fragment,e),v(Lr.$$.fragment,e),v(Zr.$$.fragment,e),v(Nr.$$.fragment,e),v(Br.$$.fragment,e),v(Hr.$$.fragment,e),q3=!1},d(e){t(w),e&&t(L),e&&t(b),g(F),e&&t(pt),e&&t(V),e&&t(xv),e&&t(D),e&&t(Iv),e&&t(ke),e&&t(Rv),e&&t(ip),e&&t(Uv),e&&t(up),e&&t(Gv),e&&t(it),e&&t(Mv),e&&t(ut),e&&t(Lv),e&&t(dp),e&&t(Zv),e&&t(mp),e&&t(Nv),e&&t(_p),e&&t(Bv),e&&t(vp),e&&t(Hv),e&&t(gp),e&&t(Wv),e&&t(yp),e&&t(Fv),e&&t(wp),e&&t(Vv),e&&t(_s),g(Zn),e&&t(Yv),e&&t(bp),e&&t(Kv),e&&t(vs),g(Nn),e&&t(Jv),e&&t(qp),e&&t(Xv),g(Bn,e),e&&t(Qv),e&&t(Pe),e&&t(eg),g(Hn,e),e&&t(sg),e&&t(ze),e&&t(tg),e&&t(ft),e&&t(ag),e&&t($p),e&&t(ng),e&&t(kp),e&&t(og),g(Vn,e),e&&t(lg),e&&t(De),e&&t(rg),e&&t(dt),e&&t(pg),g(Yn,e),e&&t(ig),e&&t(je),e&&t(ug),e&&t(Pp),e&&t(cg),g(Kn,e),e&&t(hg),e&&t(Oe),e&&t(fg),e&&t(mt),e&&t(dg),e&&t(Te),e&&t(mg),e&&t(zp),e&&t(_g),g(Xn,e),e&&t(vg),e&&t(Dp),e&&t(gg),g(Qn,e),e&&t(jg),e&&t(Op),e&&t(yg),g(eo,e),e&&t(wg),e&&t(_t),e&&t(bg),e&&t(vt),e&&t(qg),e&&t(gt),e&&t(Eg),e&&t(Tp),e&&t($g),e&&t(gs),g(to),e&&t(kg),e&&t(yt),e&&t(Pg),e&&t(wt),e&&t(zg),e&&t(Sp),e&&t(Dg),g(no,e),e&&t(Og),e&&t(Cp),e&&t(Tg),g(oo,e),e&&t(Ag),e&&t(O),e&&t(Sg),e&&t(J),e&&t(Cg),e&&t(bt),e&&t(xg),g(ro,e),e&&t(Ig),e&&t(qt),e&&t(Rg),e&&t(Et),e&&t(Ug),e&&t(xp),e&&t(Gg),e&&t(ys),g(io),e&&t(Mg),e&&t(kt),e&&t(Lg),g(uo,e),e&&t(Zg),e&&t(Ae),e&&t(Ng),e&&t(Rp),e&&t(Bg),e&&t(Pt),e&&t(Hg),e&&t(Up),e&&t(Wg),g(ho,e),e&&t(Fg),e&&t(Gp),e&&t(Vg),e&&t(zt),e&&t(Yg),e&&t(Mp),e&&t(Kg),e&&t(Lp),e&&t(Jg),e&&t(Zp),g(_o),e&&t(Xg),e&&t(Np),e&&t(Qg),e&&t(bs),g(vo),e&&t(ej),e&&t(Ot),e&&t(sj),e&&t(Bp),e&&t(tj),g(go,e),e&&t(aj),e&&t(Tt),e&&t(nj),e&&t(Hp),e&&t(oj),e&&t(Wp),e&&t(lj),g(jo,e),e&&t(rj),e&&t(Se),e&&t(pj),g(yo,e),e&&t(ij),e&&t(At),e&&t(uj),g(wo,e),e&&t(cj),e&&t(Fp),e&&t(hj),e&&t(St),e&&t(fj),e&&t(Vp),e&&t(dj),e&&t(qs),g(bo),e&&t(mj),e&&t(xt),e&&t(_j),e&&t(It),e&&t(vj),g($o,e),e&&t(gj),e&&t(Rt),e&&t(jj),g(ko,e),e&&t(yj),e&&t(Ut),e&&t(wj),e&&t(Yp),e&&t(bj),e&&t(X),e&&t(qj),g(zo,e),e&&t(Ej),e&&t(Gt),e&&t($j),e&&t(Jp),e&&t(kj),e&&t(Es),g(Do),e&&t(Pj),e&&t(T),e&&t(zj),e&&t(si),e&&t(Dj),g(Oo,e),e&&t(Oj),e&&t(ti),e&&t(Tj),g(To,e),e&&t(Aj),e&&t(ai),e&&t(Sj),e&&t($s),g(Ao),e&&t(Cj),g(Zt,e),e&&t(xj),e&&t(Ce),e&&t(Ij),e&&t(Nt),e&&t(Rj),e&&t(xe),e&&t(Uj),e&&t(pi),e&&t(Gj),e&&t(Bt),e&&t(Mj),e&&t(Ht),e&&t(Lj),e&&t(Q),e&&t(Zj),e&&t(hi),e&&t(Nj),e&&t(ks),g(Co),e&&t(Bj),e&&t(xo),e&&t(Hj),e&&t(Ie),e&&t(Wj),e&&t(Ft),e&&t(Fj),e&&t(di),e&&t(Vj),e&&t(mi),e&&t(Yj),e&&t(Ps),g(Uo),e&&t(Kj),e&&t(_i),e&&t(Jj),g(Go,e),e&&t(Xj),e&&t(vi),e&&t(Qj),e&&t(Re),e&&t(ey),e&&t(gi),e&&t(sy),e&&t(Ds),g(Mo),e&&t(ty),e&&t(ji),e&&t(ay),g(Lo,e),e&&t(ny),e&&t(N),e&&t(oy),e&&t(Ue),e&&t(ly),e&&t(yi),e&&t(ry),e&&t(Kt),e&&t(py),e&&t(S),e&&t(iy),e&&t(we),e&&t(uy),e&&t(wi),e&&t(cy),e&&t(Ge),e&&t(hy),e&&t(Me),e&&t(fy),e&&t(Fo),e&&t(dy),e&&t(ee),e&&t(my),e&&t(qi),e&&t(_y),e&&t(be),e&&t(vy),e&&t(Le),e&&t(gy),e&&t(Jt),e&&t(jy),e&&t(Ei),e&&t(yy),e&&t(Os),g(Jo),e&&t(wy),e&&t($i),e&&t(by),e&&t(ki),e&&t(qy),g(Xo,e),e&&t(Ey),e&&t(Qt),e&&t($y),e&&t(Ze),e&&t(ky),e&&t(ea),e&&t(Py),e&&t(Ne),e&&t(zy),e&&t(Pi),e&&t(Dy),e&&t(Ts),g(tl),e&&t(Oy),e&&t(zi),e&&t(Ty),e&&t(Di),e&&t(Ay),e&&t(ta),e&&t(Sy),e&&t(Be),e&&t(Cy),e&&t(Oi),e&&t(xy),e&&t(Ss),g(nl),e&&t(Iy),e&&t(na),e&&t(Ry),g(ol,e),e&&t(Uy),e&&t(oa),e&&t(Gy),g(ll,e),e&&t(My),e&&t(Ti),e&&t(Ly),e&&t(Cs),g(rl),e&&t(Zy),e&&t(ra),e&&t(Ny),g(pl,e),e&&t(By),e&&t(pa),e&&t(Hy),g(il,e),e&&t(Wy),e&&t(xs),g(ul),e&&t(Fy),e&&t(ua),e&&t(Vy),e&&t(Ai),e&&t(Yy),e&&t(ca),e&&t(Ky),e&&t(Si),e&&t(Jy),e&&t(Is),g(cl),e&&t(Xy),e&&t(He),e&&t(Qy),e&&t(q),e&&t(ew),e&&t(We),e&&t(sw),g(fl,e),e&&t(tw),e&&t(xi),e&&t(aw),e&&t(se),e&&t(nw),e&&t(Ii),e&&t(ow),e&&t(Ri),e&&t(lw),g(gl,e),e&&t(rw),e&&t(fa),e&&t(pw),e&&t(Gi),e&&t(iw),g(jl,e),e&&t(uw),e&&t(te),e&&t(cw),e&&t(Mi),e&&t(hw),e&&t(Rs),g(yl),e&&t(fw),e&&t(C),e&&t(dw),e&&t(Li),e&&t(mw),e&&t(ma),e&&t(_w),e&&t(P),e&&t(vw),e&&t(Ve),e&&t(gw),g(ql,e),e&&t(jw),e&&t(Ye),e&&t(yw),e&&t(ae),e&&t(ww),e&&t(Bi),e&&t(bw),g(El,e),e&&t(qw),e&&t(ga),e&&t(Ew),e&&t(ja),e&&t($w),g($l,e),e&&t(kw),e&&t(B),e&&t(Pw),e&&t(Wi),e&&t(zw),e&&t(Us),g(kl),e&&t(Dw),e&&t(Fi),e&&t(Ow),e&&t(wa),e&&t(Tw),g(Pl,e),e&&t(Aw),e&&t(ba),e&&t(Sw),e&&t(Vi),e&&t(Cw),e&&t(Gs),g(Dl),e&&t(xw),e&&t(Yi),e&&t(Iw),e&&t(Ki),e&&t(Rw),g(Ol,e),e&&t(Uw),e&&t(Xe),e&&t(Gw),e&&t(Ea),e&&t(Mw),e&&t(Xi),e&&t(Lw),g(Tl,e),e&&t(Zw),e&&t($a),e&&t(Nw),e&&t(ka),e&&t(Bw),e&&t(eu),e&&t(Hw),g(Sl,e),e&&t(Ww),e&&t(ne),e&&t(Fw),e&&t(Pa),e&&t(Vw),e&&t(tu),e&&t(Yw),g(Cl,e),e&&t(Kw),e&&t(za),e&&t(Jw),e&&t(Da),e&&t(Xw),e&&t(nu),e&&t(Qw),e&&t(Ms),g(Il),e&&t(e2),e&&t(ou),e&&t(s2),g(Rl,e),e&&t(t2),e&&t(x),e&&t(a2),e&&t(ru),e&&t(n2),g(Ul,e),e&&t(o2),e&&t(Ta),e&&t(l2),e&&t(iu),e&&t(r2),e&&t(Ls),g(Gl),e&&t(p2),e&&t(uu),e&&t(i2),g(Ml,e),e&&t(u2),e&&t(Qe),e&&t(c2),e&&t(hu),e&&t(h2),g(Ll,e),e&&t(f2),e&&t(Sa),e&&t(d2),e&&t(du),e&&t(m2),e&&t(Zs),g(Zl),e&&t(_2),e&&t(mu),e&&t(v2),g(Nl,e),e&&t(g2),e&&t(es),e&&t(j2),e&&t(vu),e&&t(y2),g(Bl,e),e&&t(w2),e&&t(xa),e&&t(b2),e&&t(ju),e&&t(q2),e&&t(Ns),g(Hl),e&&t(E2),e&&t(Ra),e&&t($2),e&&t(yu),e&&t(k2),e&&t(Ua),e&&t(P2),e&&t(H),e&&t(z2),g(Wl,e),e&&t(D2),e&&t(wu),e&&t(O2),e&&t(Ga),e&&t(T2),e&&t(bu),e&&t(A2),e&&t(qu),e&&t(S2),e&&t(Eu),e&&t(C2),g(Vl,e),e&&t(x2),e&&t(ss),e&&t(I2),g(Yl,e),e&&t(R2),g(Ma,e),e&&t(U2),e&&t(La),e&&t(G2),e&&t(Za),e&&t(M2),g(Kl,e),e&&t(L2),e&&t($u),e&&t(Z2),e&&t(ts),e&&t(N2),e&&t(ku),e&&t(B2),g(Jl,e),e&&t(H2),e&&t(Na),e&&t(W2),g(Xl,e),e&&t(F2),e&&t(Ba),e&&t(V2),e&&t(Pu),e&&t(Y2),e&&t(Ql),e&&t(K2),e&&t(as),e&&t(J2),e&&t(zu),e&&t(X2),e&&t(Bs),g(er),e&&t(Q2),e&&t(Du),e&&t(eb),e&&t(Ou),e&&t(sb),e&&t(Tu),e&&t(tb),e&&t(Hs),g(sr),e&&t(ab),e&&t(Fa),e&&t(nb),g(tr,e),e&&t(ob),e&&t(Au),e&&t(lb),e&&t(k),e&&t(rb),g(ar,e),e&&t(pb),e&&t(Va),e&&t(ib),e&&t(xu),e&&t(ub),e&&t(Ya),e&&t(cb),e&&t(oe),e&&t(hb),e&&t(Ws),g(or),e&&t(fb),e&&t(lr),e&&t(db),e&&t(Ja),e&&t(mb),e&&t(Ru),e&&t(_b),g(pr,e),e&&t(vb),e&&t(ns),e&&t(gb),e&&t(Uu),e&&t(jb),e&&t(Fs),g(ir),e&&t(yb),e&&t(Gu),e&&t(wb),e&&t(Qa),e&&t(bb),g(ur,e),e&&t(qb),e&&t(Lu),e&&t(Eb),e&&t(en),e&&t($b),g(cr,e),e&&t(kb),e&&t(Zu),e&&t(Pb),e&&t(Nu),e&&t(zb),e&&t(Vs),g(hr),e&&t(Db),e&&t(Bu),e&&t(Ob),e&&t(Hu),e&&t(Tb),g(fr,e),e&&t(Ab),e&&t(Wu),e&&t(Sb),e&&t(Fu),e&&t(Cb),e&&t(Vu),e&&t(xb),e&&t(Yu),e&&t(Ib),g(dr,e),e&&t(Rb),e&&t(Ku),e&&t(Ub),e&&t(tn),e&&t(Gb),e&&t(Ys),g(_r),e&&t(Mb),e&&t(Ju),e&&t(Lb),e&&t(Xu),e&&t(Zb),e&&t(I),g(gr),e&&t(Nb),e&&t(tc),e&&t(Bb),e&&t(nn),e&&t(Hb),e&&t(Js),g($r),e&&t(Wb),e&&t(ac),e&&t(Fb),e&&t(R),e&&t(Vb),e&&t(Xs),g(Pr),e&&t(Yb),e&&t(os),e&&t(Kb),e&&t(rc),e&&t(Jb),e&&t(et),g(Tr),e&&t(Xb),e&&t(le),e&&t(Qb),e&&t(un),e&&t(e3),e&&t(ls),e&&t(s3),e&&t(fc),e&&t(t3),g(Ar,e),e&&t(a3),e&&t(dc),e&&t(n3),g(Sr,e),e&&t(o3),e&&t(re),e&&t(l3),e&&t(st),g(xr),e&&t(r3),e&&t(E),g(Ir),g(Rr),g(Ur),g(Mr),g(Lr),e&&t(p3),e&&t(ot),g(Zr),e&&t(i3),e&&t(_n),e&&t(u3),e&&t(jc),e&&t(c3),e&&t(yc),e&&t(h3),e&&t(wc),e&&t(f3),e&&t(vn),e&&t(d3),g(Nr,e),e&&t(m3),e&&t(gn),e&&t(_3),g(Br,e),e&&t(v3),e&&t(bc),e&&t(g3),e&&t(lt),g(Hr),e&&t(j3),e&&t(ie),e&&t(y3),e&&t(qc),e&&t(w3),e&&t(ps),e&&t(b3),e&&t(is)}}}const $F={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"deepspeed-zero-inference",title:"DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function kF(xn,w,L){let{fw:b}=w;return xn.$$set=$=>{"fw"in $&&L(0,b=$.fw)},[b]}class SF extends gF{constructor(w){super();jF(this,w,kF,EF,yF,{fw:0})}}export{SF as default,$F as metadata};
