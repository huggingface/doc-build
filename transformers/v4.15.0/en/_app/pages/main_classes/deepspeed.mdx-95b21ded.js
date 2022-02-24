import{S as sW,i as tW,s as aW,e as o,k as u,w as f,t as a,M as nW,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-ab4e3193.js";import{T as eW}from"../../chunks/Tip-b5c6375a.js";import{D as Y1}from"../../chunks/Docstring-b69c0bd4.js";import{C as g}from"../../chunks/CodeBlock-516df0c5.js";import{I as w}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function oW($n){let y,Z;return{c(){y=o("p"),Z=a("This section is a must-read")},l(b){y=l(b,"P",{});var $=r(y);Z=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,y,$),s(y,Z)},d(b){b&&t(y)}}}function lW($n){let y,Z,b,$,hs,B,kn,fs,ds,lt,V;return{c(){y=o("p"),Z=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),hs=a(" was run, the "),B=o("code"),kn=a("model"),fs=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=o("code"),lt=a("model.load_state_dict(state_dict)"),V=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(Y){y=l(Y,"P",{});var G=r(y);Z=n(G,"Note, that once "),b=l(G,"CODE",{});var Nr=r(b);$=n(Nr,"load_state_dict_from_zero_checkpoint"),Nr.forEach(t),hs=n(G," was run, the "),B=l(G,"CODE",{});var be=r(B);kn=n(be,"model"),be.forEach(t),fs=n(G,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=l(G,"CODE",{});var Hr=r(ds);lt=n(Hr,"model.load_state_dict(state_dict)"),Hr.forEach(t),V=n(G,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),G.forEach(t)},m(Y,G){i(Y,y,G),s(y,Z),s(y,b),s(b,$),s(y,hs),s(y,B),s(B,kn),s(y,fs),s(y,ds),s(ds,lt),s(y,V)},d(Y){Y&&t(y)}}}function rW($n){let y,Z,b,$,hs,B,kn,fs,ds,lt,V,Y,G,Nr,be,Hr,ME,K1,O,Uc,NE,HE,Lc,WE,FE,Zc,BE,VE,Gc,YE,KE,Mc,JE,XE,Nc,QE,J1,Ee,eq,Dn,sq,tq,Pn,aq,nq,X1,Wr,oq,Q1,Fr,lq,ev,rt,rq,On,pq,iq,sv,pt,zn,uq,Br,cq,hq,fq,L,dq,Vr,mq,_q,Hc,vq,jq,Wc,gq,wq,Fc,yq,bq,Yr,Eq,qq,tv,Kr,$q,av,Jr,kq,nv,Xr,Bc,Dq,ov,Qr,Pq,lv,ep,Tn,Oq,sp,zq,Tq,rv,tp,Aq,pv,ap,iv,ms,it,Vc,An,Sq,Yc,xq,uv,np,cv,_s,ut,Kc,Sn,Cq,Jc,Iq,hv,op,Rq,fv,xn,dv,qe,Uq,Xc,Lq,Zq,Qc,Gq,Mq,mv,Cn,_v,$e,Nq,In,Hq,Wq,Rn,Fq,Bq,vv,ct,Vq,lp,Yq,Kq,jv,rp,Jq,gv,pp,Xq,wv,Un,yv,ke,Qq,eh,e0,s0,sh,t0,a0,bv,ht,n0,th,o0,l0,Ev,Ln,qv,_e,r0,ah,p0,i0,nh,u0,c0,oh,h0,$v,ip,f0,kv,Zn,Dv,De,d0,lh,m0,_0,rh,v0,j0,Pv,ft,g0,ph,w0,y0,Ov,Pe,b0,ih,E0,q0,Gn,$0,k0,zv,up,D0,Tv,Mn,Av,cp,P0,Sv,Nn,xv,hp,O0,Cv,Hn,Iv,dt,z0,uh,T0,A0,Rv,mt,S0,ch,x0,C0,Uv,_t,I0,Wn,R0,U0,Lv,fp,Zv,vs,vt,hh,Fn,L0,fh,Z0,Gv,jt,G0,dp,M0,N0,Mv,gt,js,H0,dh,W0,F0,mh,B0,V0,Y0,ve,K0,_h,J0,X0,vh,Q0,e5,Bn,s5,t5,Nv,mp,a5,Hv,Vn,Wv,_p,n5,Fv,Yn,Bv,z,o5,jh,l5,r5,gh,p5,i5,wh,u5,c5,yh,h5,f5,Kn,d5,m5,Vv,J,_5,bh,v5,j5,Eh,g5,w5,qh,y5,b5,Yv,wt,E5,$h,q5,$5,Kv,Jn,Jv,yt,k5,kh,D5,P5,Xv,bt,O5,Xn,z5,T5,Qv,vp,ej,gs,Et,Dh,Qn,A5,Ph,S5,sj,qt,x5,jp,C5,I5,tj,eo,aj,Oe,R5,Oh,U5,L5,so,Z5,G5,nj,gp,M5,oj,$t,zh,N5,H5,Th,W5,lj,wp,F5,rj,to,pj,yp,B5,ij,kt,V5,ao,Y5,K5,uj,bp,J5,cj,Ep,X5,hj,qp,ws,no,Q5,Ah,e4,s4,t4,oo,a4,Sh,n4,fj,$p,dj,ys,Dt,xh,lo,o4,Ch,l4,mj,Pt,r4,Ih,p4,i4,_j,kp,u4,vj,ro,jj,Ot,c4,Rh,h4,f4,gj,Dp,d4,wj,Pp,m4,yj,po,bj,ze,_4,Uh,v4,j4,Lh,g4,w4,Ej,io,qj,zt,y4,Zh,b4,E4,$j,uo,kj,Op,q4,Dj,Tt,$4,Gh,k4,D4,Pj,zp,Oj,bs,At,Mh,co,P4,Nh,O4,zj,St,z4,ho,T4,A4,Tj,xt,S4,fo,x4,C4,Aj,mo,Sj,Ct,I4,Hh,R4,U4,xj,_o,Cj,It,L4,vo,Z4,G4,Ij,Tp,M4,Rj,X,N4,Wh,H4,W4,Fh,F4,B4,Bh,V4,Y4,Uj,jo,Lj,Rt,K4,Ap,J4,X4,Zj,Sp,Gj,Es,Ut,Vh,go,Q4,Yh,e$,Mj,T,s$,xp,t$,a$,Cp,n$,o$,Kh,l$,r$,Jh,p$,i$,Ip,u$,c$,Nj,Rp,h$,Hj,wo,Wj,Up,f$,Fj,yo,Bj,Lp,Vj,qs,Lt,Xh,bo,d$,Qh,m$,Yj,Zt,Kj,Te,_$,Zp,v$,j$,Gp,g$,w$,Jj,Gt,y$,Mp,b$,E$,Xj,Ae,q$,ef,$$,k$,Np,D$,P$,Qj,Hp,O$,eg,Mt,z$,Wp,T$,A$,sg,Nt,sf,S$,x$,Eo,C$,Fp,I$,R$,tg,Q,U$,tf,L$,Z$,Bp,G$,M$,af,N$,H$,ag,Vp,ng,$s,Ht,nf,qo,W$,of,F$,og,$o,ko,B$,V$,lg,Se,Y$,lf,K$,J$,Do,X$,Q$,rg,Wt,e6,Yp,s6,t6,pg,Kp,a6,ig,Jp,ug,ks,Ft,rf,Po,n6,pf,o6,cg,Xp,l6,hg,Oo,fg,Qp,uf,r6,dg,xe,Ds,p6,cf,i6,u6,hf,c6,h6,f6,A,ff,d6,m6,df,_6,v6,mf,j6,g6,_f,w6,y6,vf,b6,E6,jf,q6,$6,k6,gf,D6,mg,ei,_g,Ps,Bt,wf,zo,P6,yf,O6,vg,si,z6,jg,To,gg,M,T6,bf,A6,S6,Ef,x6,C6,qf,I6,R6,$f,U6,L6,wg,Ce,Z6,kf,G6,M6,Df,N6,H6,yg,ti,Pf,W6,bg,Vt,Ao,Of,F6,B6,zf,V6,Y6,So,Tf,K6,J6,Af,X6,Eg,S,Q6,Sf,e8,s8,xf,t8,a8,Cf,n8,o8,If,l8,r8,Rf,p8,i8,qg,je,Uf,u8,c8,Lf,h8,f8,Zf,d8,m8,$g,ai,_8,kg,Ie,xo,Gf,v8,j8,Mf,g8,w8,Co,Nf,y8,b8,Hf,E8,q8,Io,Wf,$8,k8,Ff,D8,Dg,Re,P8,Bf,O8,z8,ni,T8,A8,Pg,Ro,Vf,S8,x8,Og,ee,C8,Yf,I8,R8,Kf,U8,L8,Jf,Z8,G8,zg,oi,Uo,Xf,M8,N8,Qf,H8,Tg,ge,ed,W8,F8,sd,B8,V8,td,Y8,K8,Ag,Ue,J8,ad,X8,Q8,nd,e7,s7,Sg,Yt,Lo,t7,od,a7,n7,o7,Zo,l7,ld,r7,p7,xg,li,Cg,Os,Kt,rd,Go,i7,pd,u7,Ig,ri,c7,Rg,pi,h7,Ug,Mo,Lg,Jt,f7,id,d7,m7,Zg,Le,_7,No,v7,j7,Ho,g7,w7,Gg,Xt,y7,ud,b7,E7,Mg,Ze,q7,cd,$7,k7,Wo,D7,P7,Ng,ii,Hg,zs,Qt,hd,Fo,O7,fd,z7,Wg,ui,T7,Fg,ci,A7,Bg,ea,Ts,S7,dd,x7,C7,md,I7,R7,U7,Bo,L7,_d,Z7,G7,Vg,Ge,M7,vd,N7,H7,jd,W7,F7,Yg,hi,Kg,As,sa,gd,Vo,B7,wd,V7,Jg,ta,Y7,yd,K7,J7,Xg,Yo,Qg,aa,X7,bd,Q7,e9,ew,Ko,sw,fi,tw,Ss,na,Ed,Jo,s9,qd,t9,aw,oa,a9,$d,n9,o9,nw,Xo,ow,la,l9,kd,r9,p9,lw,Qo,rw,xs,ra,Dd,el,i9,Pd,u9,pw,pa,c9,Od,h9,f9,iw,di,d9,uw,ia,m9,zd,_9,v9,cw,mi,hw,Cs,ua,Td,sl,j9,Ad,g9,fw,Me,w9,Sd,y9,b9,tl,E9,q9,dw,E,$9,xd,k9,D9,_i,P9,O9,Cd,z9,T9,Id,A9,S9,Rd,x9,C9,Ud,I9,R9,Ld,U9,L9,Zd,Z9,G9,mw,Ne,M9,Gd,N9,H9,Md,W9,F9,_w,al,vw,vi,B9,jw,se,nl,Nd,V9,Y9,Hd,K9,J9,ol,Wd,X9,Q9,Fd,ek,sk,ll,Bd,tk,ak,Vd,nk,ok,rl,Yd,lk,rk,Kd,pk,gw,ji,ik,ww,gi,uk,yw,pl,bw,ca,ck,wi,hk,fk,Ew,yi,dk,qw,il,$w,te,mk,Jd,_k,vk,Xd,jk,gk,Qd,wk,yk,kw,bi,Dw,Is,ha,em,ul,bk,sm,Ek,Pw,x,qk,tm,$k,kk,am,Dk,Pk,nm,Ok,zk,om,Tk,Ak,cl,Sk,xk,Ow,Ei,Ck,zw,fa,hl,lm,Ik,Rk,rm,Uk,Lk,He,pm,Zk,Gk,im,Mk,Nk,um,Hk,Wk,Tw,D,Fk,cm,Bk,Vk,qi,Yk,Kk,hm,Jk,Xk,fm,Qk,eD,dm,sD,tD,mm,aD,nD,Aw,We,oD,_m,lD,rD,vm,pD,iD,Sw,fl,xw,Fe,uD,jm,cD,hD,$i,fD,dD,Cw,ae,da,gm,mD,_D,wm,vD,jD,gD,ma,ym,wD,yD,bm,bD,ED,qD,Be,Em,$D,kD,qm,DD,PD,$m,OD,zD,TD,Ve,km,AD,SD,Dm,xD,CD,Pm,ID,RD,Iw,ki,UD,Rw,dl,Uw,_a,LD,Di,ZD,GD,Lw,va,MD,Om,ND,HD,Zw,ml,Gw,N,WD,zm,FD,BD,Tm,VD,YD,Am,KD,JD,Sm,XD,QD,Mw,Pi,Nw,Rs,ja,xm,_l,eP,Cm,sP,Hw,Oi,tP,Ww,ga,aP,Im,nP,oP,Fw,vl,Bw,wa,lP,jl,rP,pP,Vw,zi,Yw,Us,ya,Rm,gl,iP,Um,uP,Kw,Ti,cP,Jw,Ai,hP,Xw,wl,Qw,Ye,fP,Si,dP,mP,Lm,_P,vP,ey,ba,jP,Zm,gP,wP,sy,xi,yP,ty,yl,ay,Ea,bP,Ci,EP,qP,ny,qa,$P,bl,kP,DP,oy,Ii,PP,ly,El,ry,ne,OP,Ri,zP,TP,Gm,AP,SP,Mm,xP,CP,py,$a,IP,Nm,RP,UP,iy,Ui,LP,uy,ql,cy,ka,ZP,Li,GP,MP,hy,Da,NP,$l,HP,WP,fy,Zi,dy,Ls,Pa,Hm,kl,FP,Wm,BP,my,Gi,VP,_y,Dl,vy,C,YP,Mi,KP,JP,Fm,XP,QP,Bm,eO,sO,Vm,tO,aO,Ym,nO,oO,jy,Ni,lO,gy,Pl,wy,Oa,rO,Hi,pO,iO,yy,Wi,by,Zs,za,Km,Ol,uO,Jm,cO,Ey,Fi,hO,qy,zl,$y,Ke,fO,Bi,dO,mO,Xm,_O,vO,ky,Vi,jO,Dy,Tl,Py,Ta,gO,Yi,wO,yO,Oy,Ki,zy,Gs,Aa,Qm,Al,bO,e_,EO,Ty,Ji,qO,Ay,Sl,Sy,Je,$O,Xi,kO,DO,s_,PO,OO,xy,Qi,zO,Cy,xl,Iy,Sa,TO,eu,AO,SO,Ry,su,Uy,Ms,xa,t_,Cl,xO,a_,CO,Ly,Ca,IO,n_,RO,UO,Zy,tu,o_,LO,Gy,Ia,ZO,l_,GO,MO,My,H,NO,r_,HO,WO,p_,FO,BO,i_,VO,YO,u_,KO,JO,Ny,Il,Hy,au,c_,XO,Wy,Ra,QO,Rl,ez,sz,Fy,nu,h_,tz,By,ou,az,Vy,lu,nz,Yy,Ul,Ky,Xe,oz,f_,lz,rz,d_,pz,iz,Jy,Ll,Xy,Ua,Qy,La,uz,m_,cz,hz,e2,Za,fz,__,dz,mz,s2,Zl,t2,ru,v_,_z,a2,Qe,vz,j_,jz,gz,g_,wz,yz,n2,pu,bz,o2,Gl,l2,Ga,Ez,w_,qz,$z,r2,Ml,p2,Ma,kz,y_,Dz,Pz,i2,iu,Oz,u2,Nl,b_,zz,Tz,c2,es,Az,E_,Sz,xz,q_,Cz,Iz,h2,uu,Rz,f2,Ns,Na,$_,Hl,Uz,k_,Lz,d2,cu,Zz,m2,hu,Gz,_2,fu,Mz,v2,Hs,Ha,D_,Wl,Nz,P_,Hz,j2,Wa,Wz,O_,Fz,Bz,g2,Fl,w2,du,Vz,y2,k,Yz,z_,Kz,Jz,T_,Xz,Qz,A_,eT,sT,mu,tT,aT,_u,nT,oT,S_,lT,rT,x_,pT,iT,b2,Bl,E2,Fa,uT,C_,cT,hT,q2,vu,fT,$2,Ba,dT,Vl,mT,_T,k2,oe,vT,I_,jT,gT,R_,wT,yT,ju,bT,ET,D2,Ws,Va,U_,Yl,qT,L_,$T,P2,Kl,kT,Jl,DT,O2,Ya,PT,Z_,OT,zT,z2,gu,TT,T2,Xl,A2,ss,AT,G_,ST,xT,M_,CT,IT,S2,wu,x2,Fs,Ka,N_,Ql,RT,H_,UT,C2,yu,LT,I2,Ja,ZT,bu,GT,MT,R2,er,U2,Eu,NT,L2,Xa,HT,W_,WT,FT,Z2,sr,G2,qu,BT,M2,$u,VT,N2,Bs,Qa,F_,tr,YT,B_,KT,H2,ku,JT,W2,Du,XT,F2,I,V_,Y_,QT,eA,K_,we,sA,Pu,tA,aA,Ou,nA,oA,zu,lA,rA,pA,ar,J_,iA,uA,nr,cA,X_,or,hA,lr,fA,dA,mA,Q_,e1,_A,vA,s1,rr,jA,pr,gA,wA,B2,Tu,yA,V2,en,Vs,t1,bA,EA,a1,qA,$A,n1,kA,DA,o1,ir,PA,ur,OA,zA,Y2,Ys,sn,l1,cr,TA,r1,AA,K2,Au,Su,p1,SA,xA,J2,W,CA,i1,IA,RA,u1,UA,LA,c1,ZA,GA,h1,MA,NA,X2,tn,HA,hr,WA,FA,Q2,Ks,an,f1,fr,BA,d1,VA,eb,ts,Js,YA,xu,KA,JA,m1,XA,QA,eS,dr,sS,mr,tS,aS,nS,Xs,oS,Cu,lS,rS,_r,pS,iS,sb,Iu,tb,Qs,nn,_1,vr,uS,v1,cS,ab,as,hS,j1,fS,dS,Ru,mS,_S,nb,on,vS,Uu,jS,gS,ob,ns,wS,Lu,yS,bS,g1,ES,qS,lb,Zu,$S,rb,jr,pb,Gu,kS,ib,gr,ub,et,ln,w1,wr,DS,y1,PS,cb,q,yr,OS,b1,zS,TS,ye,AS,E1,SS,xS,q1,CS,IS,$1,RS,US,LS,le,Mu,ZS,GS,k1,MS,NS,Nu,HS,WS,D1,FS,BS,VS,os,br,YS,P1,KS,JS,st,XS,O1,QS,ex,z1,sx,tx,ax,rn,Er,nx,qr,ox,T1,lx,rx,px,pn,$r,ix,tt,ux,A1,cx,hx,S1,fx,dx,mx,un,kr,_x,at,vx,x1,jx,gx,C1,wx,yx,hb,nt,cn,I1,Dr,bx,R1,Ex,fb,re,U1,Pr,qx,$x,L1,Or,kx,Dx,Z1,zr,Px,Ox,G1,Tr,zx,db,Hu,Tx,mb,ls,M1,Ar,Ax,Sx,N1,Sr,xx,Cx,H1,xr,Ix,_b,rs,Rx,Wu,Ux,Lx,Cr,Zx,Gx,vb;return B=new w({}),An=new w({}),Sn=new w({}),xn=new g({props:{code:"pip install deepspeed,",highlighted:"pip install deepspeed"}}),Cn=new g({props:{code:"pip install transformers[deepspeed],",highlighted:"pip install transformers[deepspeed]"}}),Un=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log,`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),Ln=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())",',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),Zn=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel,`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),Mn=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())",',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),Nn=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))",`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),Hn=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82),",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),Fn=new w({}),Vn=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>,",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),Yn=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json,",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Jn=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro,`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),Qn=new w({}),eo=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro,`,highlighted:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),to=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),oo=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...,",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),lo=new w({}),ro=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
# This emulates a launcher in the notebook
import os
os.environ['MASTER_ADDR'] = 'localhost'
os.environ['MASTER_PORT'] = '9994' # modify if RuntimeError: Address already in use
os.environ['RANK'] = "0"
os.environ['LOCAL_RANK'] = "0"
os.environ['WORLD_SIZE'] = "1"

# Now proceed as normal, plus pass the deepspeed config file
training_args = TrainingArguments(..., deepspeed="ds_config_zero3.json")
trainer = Trainer(...)
trainer.train(),`,highlighted:`<span class="hljs-comment"># DeepSpeed requires a distributed environment even when only one process is used.</span>
<span class="hljs-comment"># This emulates a launcher in the notebook</span>
<span class="hljs-keyword">import</span> os
os.environ[<span class="hljs-string">&#x27;MASTER_ADDR&#x27;</span>] = <span class="hljs-string">&#x27;localhost&#x27;</span>
os.environ[<span class="hljs-string">&#x27;MASTER_PORT&#x27;</span>] = <span class="hljs-string">&#x27;9994&#x27;</span> <span class="hljs-comment"># modify if RuntimeError: Address already in use</span>
os.environ[<span class="hljs-string">&#x27;RANK&#x27;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&#x27;LOCAL_RANK&#x27;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&#x27;WORLD_SIZE&#x27;</span>] = <span class="hljs-string">&quot;1&quot;</span>

<span class="hljs-comment"># Now proceed as normal, plus pass the deepspeed config file</span>
training_args = TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;ds_config_zero3.json&quot;</span>)
trainer = Trainer(...)
trainer.train()`}}),po=new g({props:{code:`%%bash
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
EOT,`,highlighted:`%%bash
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
EOT`}}),io=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...,`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),uo=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...,`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),co=new w({}),mo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json',`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),_o=new g({props:{code:"grep -i Lamb $(find . -name '*json'),",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),jo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),go=new w({}),wo=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json"),',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),yo=new g({props:{code:`ds_config_dict=dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict),`,highlighted:`ds_config_dict=<span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),bo=new w({}),Zt=new eW({props:{warning:"&lcub;true}",$$slots:{default:[oW]},$$scope:{ctx:$n}}}),qo=new w({}),Po=new w({}),Oo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),zo=new w({}),To=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),Go=new w({}),Mo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),Fo=new w({}),Vo=new w({}),Yo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),Ko=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),Jo=new w({}),Xo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),Qo=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),el=new w({}),sl=new w({}),al=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": "auto",
         "betas": "auto",
         "eps": "auto",
         "weight_decay": "auto"
       }
   }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),pl=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": 0.001,
         "betas": [0.8, 0.999],
         "eps": 1e-8,
         "weight_decay": 3e-7
       }
   }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),il=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),ul=new w({}),fl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),dl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": 0,
             "warmup_max_lr": 0.001,
             "warmup_num_steps": 1000
         }
     }
},`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ml=new g({props:{code:`{
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
},`,highlighted:`<span class="hljs-punctuation">{</span>
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
<span class="hljs-punctuation">}</span>`}}),_l=new w({}),vl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),gl=new w({}),wl=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),yl=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),El=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
},`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ql=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),kl=new w({}),Dl=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Pl=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),Ol=new w({}),zl=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),Tl=new g({props:{code:`{
    "gradient_accumulation_steps": 3
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),Al=new w({}),Sl=new g({props:{code:`{
    "gradient_clipping": "auto"
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),xl=new g({props:{code:`{
    "gradient_clipping": 1.0
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),Cl=new w({}),Il=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_fp16_weights_on_model_save": true
    }
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_fp16_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ul=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint
checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir),`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint
checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ll=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint
checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir),`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint
checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ua=new eW({props:{$$slots:{default:[lW]},$$scope:{ctx:$n}}}),Zl=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint
state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir) # already on cpu
model = model.cpu()
model.load_state_dict(state_dict),`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint
state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir) <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),Gl=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*,`,highlighted:`$ <span class="hljs-built_in">ls</span> -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),Ml=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin,",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),Hl=new w({}),Wl=new w({}),Fl=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed
with deepspeed.zero.Init():
   config = T5Config.from_pretrained("t5-small")
   model = T5ForConditionalGeneration(config),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed
<span class="hljs-keyword">with</span> deepspeed.zero.Init():
   config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
   model = T5ForConditionalGeneration(config)`}}),Bl=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments
training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments
training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Yl=new w({}),Xl=new g({props:{code:"tensor([1.], device='cuda:0', dtype=torch.float16, requires_grad=True),",highlighted:'tensor([<span class="hljs-number">1.</span>], device=<span class="hljs-string">&#x27;cuda:0&#x27;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),Ql=new w({}),er=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json,",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),sr=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config "ro-en" --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix "translate English to Romanian: ",`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),tr=new w({}),nr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")',`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),cr=new w({}),fr=new w({}),vr=new w({}),jr=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, deepspeed

ds_config = { ... } # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config) # keep this object alive
model = AutoModel.from_pretrained("gpt2")
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, deepspeed

ds_config = { ... } <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config) <span class="hljs-comment"># keep this object alive</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),gr=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, AutoConfig, deepspeed

ds_config = { ... } # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config) # keep this object alive
config = AutoConfig.from_pretrained("gpt2")
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoConfig, deepspeed

ds_config = { ... } <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config) <span class="hljs-comment"># keep this object alive</span>
config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),wr=new w({}),yr=new Y1({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),br=new Y1({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/deepspeed.py#L114"}}),Er=new Y1({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/deepspeed.py#L105"}}),$r=new Y1({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/deepspeed.py#L146"}}),kr=new Y1({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/deepspeed.py#L137"}}),Dr=new w({}),{c(){y=o("meta"),Z=u(),b=o("h1"),$=o("a"),hs=o("span"),f(B.$$.fragment),kn=u(),fs=o("span"),ds=a("DeepSpeed Integration"),lt=u(),V=o("p"),Y=o("a"),G=a("DeepSpeed"),Nr=a(" implements everything described in the "),be=o("a"),Hr=a("ZeRO paper"),ME=a(". Currently it provides full support for:"),K1=u(),O=o("ol"),Uc=o("li"),NE=a("Optimizer state partitioning (ZeRO stage 1)"),HE=u(),Lc=o("li"),WE=a("Gradient partitioning (ZeRO stage 2)"),FE=u(),Zc=o("li"),BE=a("Parameter partitioning (ZeRO stage 3)"),VE=u(),Gc=o("li"),YE=a("Custom mixed precision training handling"),KE=u(),Mc=o("li"),JE=a("A range of fast CUDA-extension-based optimizers"),XE=u(),Nc=o("li"),QE=a("ZeRO-Offload to CPU and NVMe"),J1=u(),Ee=o("p"),eq=a("ZeRO-Offload has its own dedicated paper: "),Dn=o("a"),sq=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),tq=a(". And NVMe-support is described in the paper "),Pn=o("a"),aq=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),nq=a("."),X1=u(),Wr=o("p"),oq=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Q1=u(),Fr=o("p"),lq=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),ev=u(),rt=o("p"),rq=a("\u{1F917} Transformers integrates "),On=o("a"),pq=a("DeepSpeed"),iq=a(" via 2 options:"),sv=u(),pt=o("ol"),zn=o("li"),uq=a("Integration of the core DeepSpeed features via "),Br=o("a"),cq=a("Trainer"),hq=a(`. This is everything done for you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),fq=u(),L=o("li"),dq=a("If you don\u2019t use "),Vr=o("a"),mq=a("Trainer"),_q=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Hc=o("code"),vq=a("from_pretrained"),jq=a(" and "),Wc=o("code"),gq=a("from_config"),wq=a(` include integration of essential
parts of DeepSpeed like `),Fc=o("code"),yq=a("zero.Init"),bq=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Yr=o("a"),Eq=a("deepspeed-non-trainer-integration"),qq=a("."),tv=u(),Kr=o("p"),$q=a("What is integrated:"),av=u(),Jr=o("p"),kq=a("Training:"),nv=u(),Xr=o("ol"),Bc=o("li"),Dq=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),ov=u(),Qr=o("p"),Pq=a("Inference:"),lv=u(),ep=o("ol"),Tn=o("li"),Oq=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),sp=o("a"),zq=a("deepspeed-zero-inference"),Tq=a("."),rv=u(),tp=o("p"),Aq=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),pv=u(),ap=o("a"),iv=u(),ms=o("h2"),it=o("a"),Vc=o("span"),f(An.$$.fragment),Sq=u(),Yc=o("span"),xq=a("Trainer Deepspeed Integration"),uv=u(),np=o("a"),cv=u(),_s=o("h3"),ut=o("a"),Kc=o("span"),f(Sn.$$.fragment),Cq=u(),Jc=o("span"),Iq=a("Installation"),hv=u(),op=o("p"),Rq=a("Install the library via pypi:"),fv=u(),f(xn.$$.fragment),dv=u(),qe=o("p"),Uq=a("or via "),Xc=o("code"),Lq=a("transformers"),Zq=a("\u2019 "),Qc=o("code"),Gq=a("extras"),Mq=a(":"),mv=u(),f(Cn.$$.fragment),_v=u(),$e=o("p"),Nq=a("or find more details on "),In=o("a"),Hq=a("the DeepSpeed\u2019s GitHub page"),Wq=a(` and
`),Rn=o("a"),Fq=a("advanced install"),Bq=a("."),vv=u(),ct=o("p"),Vq=a("If you\u2019re still struggling with the build, first make sure to read "),lp=o("a"),Yq=a("zero-install-notes"),Kq=a("."),jv=u(),rp=o("p"),Jq=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),gv=u(),pp=o("p"),Xq=a("To make a local build for DeepSpeed:"),wv=u(),f(Un.$$.fragment),yv=u(),ke=o("p"),Qq=a("If you intend to use NVMe offload you will need to also include "),eh=o("code"),e0=a("DS_BUILD_AIO=1"),s0=a(` in the instructions above (and also
install `),sh=o("em"),t0=a("libaio-dev"),a0=a(" system-wide)."),bv=u(),ht=o("p"),n0=a("Edit "),th=o("code"),o0=a("TORCH_CUDA_ARCH_LIST"),l0=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),Ev=u(),f(Ln.$$.fragment),qv=u(),_e=o("p"),r0=a("So if you get "),ah=o("code"),p0=a("8, 6"),i0=a(", then use "),nh=o("code"),u0=a('TORCH_CUDA_ARCH_LIST="8.6"'),c0=a(`. If you have multiple different cards, you can list all
of them like so `),oh=o("code"),h0=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),$v=u(),ip=o("p"),f0=a("If you need to use the same setup on multiple machines, make a binary wheel:"),kv=u(),f(Zn.$$.fragment),Dv=u(),De=o("p"),d0=a("it will generate something like "),lh=o("code"),m0=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_0=a(` which now you can install
as `),rh=o("code"),v0=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),j0=a(" locally or on any other machine."),Pv=u(),ft=o("p"),g0=a("Again, remember to ensure to adjust "),ph=o("code"),w0=a("TORCH_CUDA_ARCH_LIST"),y0=a(" to the target architectures."),Ov=u(),Pe=o("p"),b0=a("You can find the complete list of NVIDIA GPUs and their corresponding "),ih=o("strong"),E0=a("Compute Capabilities"),q0=a(` (same as arch in this
context) `),Gn=o("a"),$0=a("here"),k0=a("."),zv=u(),up=o("p"),D0=a("You can check the archs pytorch was built with using:"),Tv=u(),f(Mn.$$.fragment),Av=u(),cp=o("p"),P0=a("Here is how to find out the arch for one of the installed GPU. For example, for GPU 0:"),Sv=u(),f(Nn.$$.fragment),xv=u(),hp=o("p"),O0=a("If the output is:"),Cv=u(),f(Hn.$$.fragment),Iv=u(),dt=o("p"),z0=a("then you know that this card\u2019s arch is "),uh=o("code"),T0=a("8.6"),A0=a("."),Rv=u(),mt=o("p"),S0=a("You can also leave "),ch=o("code"),x0=a("TORCH_CUDA_ARCH_LIST"),C0=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Uv=u(),_t=o("p"),I0=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Wn=o("a"),R0=a("Deepspeed"),U0=a(","),Lv=u(),fp=o("a"),Zv=u(),vs=o("h3"),vt=o("a"),hh=o("span"),f(Fn.$$.fragment),L0=u(),fh=o("span"),Z0=a("Deployment with multiple GPUs"),Gv=u(),jt=o("p"),G0=a("To deploy this feature with multiple GPUs adjust the "),dp=o("a"),M0=a("Trainer"),N0=a(` command line arguments as
following:`),Mv=u(),gt=o("ol"),js=o("li"),H0=a("replace "),dh=o("code"),W0=a("python -m torch.distributed.launch"),F0=a(" with "),mh=o("code"),B0=a("deepspeed"),V0=a("."),Y0=u(),ve=o("li"),K0=a("add a new argument "),_h=o("code"),J0=a("--deepspeed ds_config.json"),X0=a(", where "),vh=o("code"),Q0=a("ds_config.json"),e5=a(` is the DeepSpeed configuration file as
documented `),Bn=o("a"),s5=a("here"),t5=a(". The file naming is up to you."),Nv=u(),mp=o("p"),a5=a("Therefore, if your original command line looked as following:"),Hv=u(),f(Vn.$$.fragment),Wv=u(),_p=o("p"),n5=a("Now it should be:"),Fv=u(),f(Yn.$$.fragment),Bv=u(),z=o("p"),o5=a("Unlike, "),jh=o("code"),l5=a("torch.distributed.launch"),r5=a(" where you have to specify how many GPUs to use with "),gh=o("code"),p5=a("--nproc_per_node"),i5=a(`, with the
`),wh=o("code"),u5=a("deepspeed"),c5=a(" launcher you don\u2019t have to use the corresponding "),yh=o("code"),h5=a("--num_gpus"),f5=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Kn=o("a"),d5=a("here"),m5=a("."),Vv=u(),J=o("p"),_5=a("In fact, you can continue using "),bh=o("code"),v5=a("-m torch.distributed.launch"),j5=a(` with DeepSpeed as long as you don\u2019t need to use
`),Eh=o("code"),g5=a("deepspeed"),w5=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),qh=o("code"),y5=a("deepspeed"),b5=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Yv=u(),wt=o("p"),E5=a("Here is an example of running "),$h=o("code"),q5=a("run_translation.py"),$5=a(" under DeepSpeed deploying all available GPUs:"),Kv=u(),f(Jn.$$.fragment),Jv=u(),yt=o("p"),k5=a("Note that in the DeepSpeed documentation you are likely to see "),kh=o("code"),D5=a("--deepspeed --deepspeed_config ds_config.json"),P5=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Xv=u(),bt=o("p"),O5=a("For some practical usage examples, please, see this "),Xn=o("a"),z5=a("post"),T5=a("."),Qv=u(),vp=o("a"),ej=u(),gs=o("h3"),Et=o("a"),Dh=o("span"),f(Qn.$$.fragment),A5=u(),Ph=o("span"),S5=a("Deployment with one GPU"),sj=u(),qt=o("p"),x5=a("To deploy DeepSpeed with one GPU adjust the "),jp=o("a"),C5=a("Trainer"),I5=a(" command line arguments as following:"),tj=u(),f(eo.$$.fragment),aj=u(),Oe=o("p"),R5=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Oh=o("code"),U5=a("--num_gpus=1"),L5=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),so=o("a"),Z5=a("documentation"),G5=a(" discusses the launcher options."),nj=u(),gp=o("p"),M5=a("Why would you want to use DeepSpeed with just one GPU?"),oj=u(),$t=o("ol"),zh=o("li"),N5=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),H5=u(),Th=o("li"),W5=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),lj=u(),wp=o("p"),F5=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),rj=u(),f(to.$$.fragment),pj=u(),yp=o("p"),B5=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),ij=u(),kt=o("p"),V5=a("For a practical usage example of this type of deployment, please, see this "),ao=o("a"),Y5=a("post"),K5=a("."),uj=u(),bp=o("p"),J5=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),cj=u(),Ep=o("p"),X5=a("Notes:"),hj=u(),qp=o("ul"),ws=o("li"),no=o("p"),Q5=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Ah=o("code"),e4=a("CUDA_VISIBLE_DEVICES"),s4=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),t4=u(),f(oo.$$.fragment),a4=u(),Sh=o("p"),n4=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),fj=u(),$p=o("a"),dj=u(),ys=o("h3"),Dt=o("a"),xh=o("span"),f(lo.$$.fragment),o4=u(),Ch=o("span"),l4=a("Deployment in Notebooks"),mj=u(),Pt=o("p"),r4=a("The problem with running notebook cells as a script is that there is no normal "),Ih=o("code"),p4=a("deepspeed"),i4=a(` launcher to rely on, so
under certain setups we have to emulate it.`),_j=u(),kp=o("p"),u4=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),vj=u(),f(ro.$$.fragment),jj=u(),Ot=o("p"),c4=a("Note: "),Rh=o("code"),h4=a("..."),f4=a(" stands for the normal arguments that you\u2019d pass to the functions."),gj=u(),Dp=o("p"),d4=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),wj=u(),Pp=o("p"),m4=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),yj=u(),f(po.$$.fragment),bj=u(),ze=o("p"),_4=a("If the training script is in a normal file and not in the notebook cells, you can launch "),Uh=o("code"),v4=a("deepspeed"),j4=a(` normally via
shell from a cell. For example, to use `),Lh=o("code"),g4=a("run_translation.py"),w4=a(" you would launch it with:"),Ej=u(),f(io.$$.fragment),qj=u(),zt=o("p"),y4=a("or with "),Zh=o("code"),b4=a("%%bash"),E4=a(" magic, where you can write a multi-line code for the shell program to run:"),$j=u(),f(uo.$$.fragment),kj=u(),Op=o("p"),q4=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Dj=u(),Tt=o("p"),$4=a("Note: While "),Gh=o("code"),k4=a("%%bash"),D4=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Pj=u(),zp=o("a"),Oj=u(),bs=o("h3"),At=o("a"),Mh=o("span"),f(co.$$.fragment),P4=u(),Nh=o("span"),O4=a("Configuration"),zj=u(),St=o("p"),z4=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),ho=o("a"),T4=a("following documentation"),A4=a("."),Tj=u(),xt=o("p"),S4=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),fo=o("a"),x4=a(`the DeepSpeedExamples
repo`),C4=a(":"),Aj=u(),f(mo.$$.fragment),Sj=u(),Ct=o("p"),I4=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Hh=o("code"),R4=a(".json"),U4=a(" files with:"),xj=u(),f(_o.$$.fragment),Cj=u(),It=o("p"),L4=a("Some more examples are to be found in the "),vo=o("a"),Z4=a("main repo"),G4=a(" as well."),Ij=u(),Tp=o("p"),M4=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Rj=u(),X=o("p"),N4=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Wh=o("code"),H4=a("AdamW"),W4=a(" optimizer and "),Fh=o("code"),F4=a("WarmupLR"),B4=a(` scheduler and will enable mixed
precision training if `),Bh=o("code"),V4=a("--fp16"),Y4=a(" is passed:"),Uj=u(),f(jo.$$.fragment),Lj=u(),Rt=o("p"),K4=a("When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=o("a"),J4=a("Trainer"),X4=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Zj=u(),Sp=o("a"),Gj=u(),Es=o("h3"),Ut=o("a"),Vh=o("span"),f(go.$$.fragment),Q4=u(),Yh=o("span"),e$=a("Passing Configuration"),Mj=u(),T=o("p"),s$=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),xp=o("a"),t$=a("Trainer"),a$=a(" via "),Cp=o("a"),n$=a("TrainingArguments"),o$=a(" then for the "),Kh=o("code"),l$=a("deepspeed"),r$=a(` argument you can
pass a nested `),Jh=o("code"),p$=a("dict"),i$=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=o("a"),u$=a("TrainingArguments"),c$=a("."),Nj=u(),Rp=o("p"),h$=a("To summarize you can do:"),Hj=u(),f(wo.$$.fragment),Wj=u(),Up=o("p"),f$=a("or:"),Fj=u(),f(yo.$$.fragment),Bj=u(),Lp=o("a"),Vj=u(),qs=o("h3"),Lt=o("a"),Xh=o("span"),f(bo.$$.fragment),d$=u(),Qh=o("span"),m$=a("Shared Configuration"),Yj=u(),f(Zt.$$.fragment),Kj=u(),Te=o("p"),_$=a("Some configuration values are required by both the "),Zp=o("a"),v$=a("Trainer"),j$=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=o("a"),g$=a("Trainer"),w$=a(" command line arguments."),Jj=u(),Gt=o("p"),y$=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=o("a"),b$=a("Trainer"),E$=a(` do the majority
of configuration for you.`),Xj=u(),Ae=o("p"),q$=a("Therefore, in the rest of this guide you will find a special configuration value: "),ef=o("code"),$$=a("auto"),k$=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=o("a"),D$=a("Trainer"),P$=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Qj=u(),Hp=o("p"),O$=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),eg=u(),Mt=o("p"),z$=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=o("a"),T$=a("TrainingArguments"),A$=a(" based on that. The steps are:"),sg=u(),Nt=o("ol"),sf=o("li"),S$=a("Create or load the DeepSpeed configuration to be used as a master configuration"),x$=u(),Eo=o("li"),C$=a("Create the "),Fp=o("a"),I$=a("TrainingArguments"),R$=a(" object based on these values"),tg=u(),Q=o("p"),U$=a("Do note that some values, such as "),tf=o("code"),L$=a("scheduler.params.total_num_steps"),Z$=a(` are calculated by
`),Bp=o("a"),G$=a("Trainer"),M$=a(" during "),af=o("code"),N$=a("train"),H$=a(", but you can of course do the math yourself."),ag=u(),Vp=o("a"),ng=u(),$s=o("h3"),Ht=o("a"),nf=o("span"),f(qo.$$.fragment),W$=u(),of=o("span"),F$=a("ZeRO"),og=u(),$o=o("p"),ko=o("a"),B$=a("Zero Redundancy Optimizer (ZeRO)"),V$=a(` is the workhorse of DeepSpeed. It
support 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),lg=u(),Se=o("p"),Y$=a("The "),lf=o("code"),K$=a("zero_optimization"),J$=a(" section of the configuration file is the most important part ("),Do=o("a"),X$=a("docs"),Q$=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),rg=u(),Wt=o("p"),e6=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=o("a"),s6=a("Trainer"),t6=a(` provides
no equivalent command line arguments.`),pg=u(),Kp=o("p"),a6=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),ig=u(),Jp=o("a"),ug=u(),ks=o("h4"),Ft=o("a"),rf=o("span"),f(Po.$$.fragment),n6=u(),pf=o("span"),o6=a("ZeRO-2 Config"),cg=u(),Xp=o("p"),l6=a("The following is an example configuration for ZeRO stage 2:"),hg=u(),f(Oo.$$.fragment),fg=u(),Qp=o("p"),uf=o("strong"),r6=a("Performance tuning:"),dg=u(),xe=o("ul"),Ds=o("li"),p6=a("enabling "),cf=o("code"),i6=a("offload_optimizer"),u6=a(" should reduce GPU RAM usage (it requires "),hf=o("code"),c6=a('"stage": 2'),h6=a(")"),f6=u(),A=o("li"),ff=o("code"),d6=a('"overlap_comm": true'),m6=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),df=o("code"),_6=a("overlap_comm"),v6=a(` uses 4.5x
the `),mf=o("code"),j6=a("allgather_bucket_size"),g6=a(" and "),_f=o("code"),w6=a("reduce_bucket_size"),y6=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),vf=o("code"),b6=a("5e8 x 2Bytes x 2 x 4.5"),E6=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),jf=o("code"),q6=a("2e8"),$6=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),k6=u(),gf=o("li"),D6=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size,
the slower the communication, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),mg=u(),ei=o("a"),_g=u(),Ps=o("h4"),Bt=o("a"),wf=o("span"),f(zo.$$.fragment),P6=u(),yf=o("span"),O6=a("ZeRO-3 Config"),vg=u(),si=o("p"),z6=a("The following is an example configuration for ZeRO stage 3:"),jg=u(),f(To.$$.fragment),gg=u(),M=o("p"),T6=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),bf=o("code"),A6=a('"device": "cpu"'),S6=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=o("code"),x6=a("none"),C6=a(" instead of "),qf=o("code"),I6=a("cpu"),R6=a(" for the "),$f=o("code"),U6=a("device"),L6=a(` entry. Offloading to
NVMe is discussed further down.`),wg=u(),Ce=o("p"),Z6=a("Pinned memory is enabled with "),kf=o("code"),G6=a("pin_memory"),M6=a(" set to "),Df=o("code"),N6=a("true"),H6=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),yg=u(),ti=o("p"),Pf=o("strong"),W6=a("Performance tuning:"),bg=u(),Vt=o("ul"),Ao=o("li"),Of=o("code"),F6=a("stage3_max_live_parameters"),B6=a(": "),zf=o("code"),V6=a("1e9"),Y6=u(),So=o("li"),Tf=o("code"),K6=a("stage3_max_reuse_distance"),J6=a(": "),Af=o("code"),X6=a("1e9"),Eg=u(),S=o("p"),Q6=a("If hitting OOM reduce "),Sf=o("code"),e8=a("stage3_max_live_parameters"),s8=a(" and "),xf=o("code"),t8=a("stage3_max_reuse_distance"),a8=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Cf=o("code"),n8=a("1e9"),o8=a(` would consume ~2GB. The memory is shared by
`),If=o("code"),l8=a("stage3_max_live_parameters"),r8=a(" and "),Rf=o("code"),p8=a("stage3_max_reuse_distance"),i8=a(", so its not additive, its just 2GB total."),qg=u(),je=o("p"),Uf=o("code"),u8=a("stage3_max_live_parameters"),c8=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Lf=o("code"),h8=a("stage3_max_reuse_distance"),f8=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Zf=o("code"),d8=a("stage3_max_reuse_distance"),m8=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),$g=u(),ai=o("p"),_8=a("The following configuration values depend on the model\u2019s hidden size:"),kg=u(),Ie=o("ul"),xo=o("li"),Gf=o("code"),v8=a("reduce_bucket_size"),j8=a(": "),Mf=o("code"),g8=a("hidden_size*hidden_size"),w8=u(),Co=o("li"),Nf=o("code"),y8=a("stage3_prefetch_bucket_size"),b8=a(": "),Hf=o("code"),E8=a("0.9 * hidden_size * hidden_size"),q8=u(),Io=o("li"),Wf=o("code"),$8=a("stage3_param_persistence_threshold"),k8=a(": "),Ff=o("code"),D8=a("10 * hidden_size"),Dg=u(),Re=o("p"),P8=a("therefore set these values to "),Bf=o("code"),O8=a("auto"),z8=a(" and the "),ni=o("a"),T8=a("Trainer"),A8=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),Pg=u(),Ro=o("p"),Vf=o("code"),S8=a("stage3_gather_fp16_weights_on_model_save"),x8=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Og=u(),ee=o("p"),C8=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Yf=o("code"),I8=a("allgather_partitions"),R8=a(", "),Kf=o("code"),U8=a("allgather_bucket_size"),L8=a(` and
`),Jf=o("code"),Z8=a("reduce_scatter"),G8=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),zg=u(),oi=o("ul"),Uo=o("li"),Xf=o("code"),M8=a("sub_group_size"),N8=a(": "),Qf=o("code"),H8=a("1e9"),Tg=u(),ge=o("p"),ed=o("code"),W8=a("sub_group_size"),F8=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),sd=o("code"),B8=a("sub_group_size"),V8=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),td=o("code"),Y8=a("sub_group_size"),K8=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Ag=u(),Ue=o("p"),J8=a("You can leave "),ad=o("code"),X8=a("sub_group_size"),Q8=a(" to its default value of "),nd=o("em"),e7=a("1e9"),s7=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Sg=u(),Yt=o("ol"),Lo=o("li"),t7=a("Running into OOM during optimizer step: Reduce "),od=o("code"),a7=a("sub_group_size"),n7=a(" to reduce memory utilization of temporary buffers"),o7=u(),Zo=o("li"),l7=a("Optimizer Step is taking a long time: Increase "),ld=o("code"),r7=a("sub_group_size"),p7=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),xg=u(),li=o("a"),Cg=u(),Os=o("h3"),Kt=o("a"),rd=o("span"),f(Go.$$.fragment),i7=u(),pd=o("span"),u7=a("NVMe Support"),Ig=u(),ri=o("p"),c7=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Rg=u(),pi=o("p"),h7=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Ug=u(),f(Mo.$$.fragment),Lg=u(),Jt=o("p"),f7=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),id=o("em"),d7=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),m7=a(")."),Zg=u(),Le=o("p"),_7=a("Here is the full documentation for offloading "),No=o("a"),v7=a("optimizer states"),j7=a(" and "),Ho=o("a"),g7=a("parameters"),w7=a("."),Gg=u(),Xt=o("p"),y7=a("Make sure that your "),ud=o("code"),b7=a("nvme_path"),E7=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Mg=u(),Ze=o("p"),q7=a("In order to figure out the optimal "),cd=o("code"),$7=a("aio"),k7=a(` configuration block you must run a benchmark on your target setup, as
`),Wo=o("a"),D7=a("explained here"),P7=a("."),Ng=u(),ii=o("a"),Hg=u(),zs=o("h4"),Qt=o("a"),hd=o("span"),f(Fo.$$.fragment),O7=u(),fd=o("span"),z7=a("ZeRO-2 vs ZeRO-3 Performance"),Wg=u(),ui=o("p"),T7=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Fg=u(),ci=o("p"),A7=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Bg=u(),ea=o("ul"),Ts=o("li"),S7=a("set "),dd=o("code"),x7=a("stage3_param_persistence_threshold"),C7=a(" to a very large number - larger than the largest parameter, e.g., "),md=o("code"),I7=a("6 * hidden_size * hidden_size"),R7=a(". This will keep the parameters on the GPUs."),U7=u(),Bo=o("li"),L7=a("turn off "),_d=o("code"),Z7=a("offload_params"),G7=a(" since ZeRO-2 doesn\u2019t have that option."),Vg=u(),Ge=o("p"),M7=a("The performance will likely improve significantly with just "),vd=o("code"),N7=a("offload_params"),H7=a(` turned off, even if you don\u2019t change
`),jd=o("code"),W7=a("stage3_param_persistence_threshold"),F7=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Yg=u(),hi=o("a"),Kg=u(),As=o("h4"),sa=o("a"),gd=o("span"),f(Vo.$$.fragment),B7=u(),wd=o("span"),V7=a("ZeRO-2 Example"),Jg=u(),ta=o("p"),Y7=a("Here is a full ZeRO-2 auto-configuration file "),yd=o("code"),K7=a("ds_config_zero2.json"),J7=a(":"),Xg=u(),f(Yo.$$.fragment),Qg=u(),aa=o("p"),X7=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),bd=o("code"),Q7=a("auto"),e9=a(" settings in it."),ew=u(),f(Ko.$$.fragment),sw=u(),fi=o("a"),tw=u(),Ss=o("h4"),na=o("a"),Ed=o("span"),f(Jo.$$.fragment),s9=u(),qd=o("span"),t9=a("ZeRO-3 Example"),aw=u(),oa=o("p"),a9=a("Here is a full ZeRO-3 auto-configuration file "),$d=o("code"),n9=a("ds_config_zero3.json"),o9=a(":"),nw=u(),f(Xo.$$.fragment),ow=u(),la=o("p"),l9=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),kd=o("code"),r9=a("auto"),p9=a(" settings in it."),lw=u(),f(Qo.$$.fragment),rw=u(),xs=o("h3"),ra=o("a"),Dd=o("span"),f(el.$$.fragment),i9=u(),Pd=o("span"),u9=a("Optimizer and Scheduler"),pw=u(),pa=o("p"),c9=a("As long as you don\u2019t enable "),Od=o("code"),h9=a("offload_optimizer"),f9=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),iw=u(),di=o("p"),d9=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),uw=u(),ia=o("p"),m9=a("It is possible to use a non-DeepSpeed optimizer when "),zd=o("code"),_9=a("offload_optimizer"),v9=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),cw=u(),mi=o("a"),hw=u(),Cs=o("h4"),ua=o("a"),Td=o("span"),f(sl.$$.fragment),j9=u(),Ad=o("span"),g9=a("Optimizer"),fw=u(),Me=o("p"),w9=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Sd=o("code"),y9=a("torch"),b9=a(". The full documentation is "),tl=o("a"),E9=a("here"),q9=a("."),dw=u(),E=o("p"),$9=a("If you don\u2019t configure the "),xd=o("code"),k9=a("optimizer"),D9=a(" entry in the configuration file, the "),_i=o("a"),P9=a("Trainer"),O9=a(` will
automatically set it to `),Cd=o("code"),z9=a("AdamW"),T9=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Id=o("code"),A9=a("--learning_rate"),S9=a(", "),Rd=o("code"),x9=a("--adam_beta1"),C9=a(", "),Ud=o("code"),I9=a("--adam_beta2"),R9=a(", "),Ld=o("code"),U9=a("--adam_epsilon"),L9=a(" and "),Zd=o("code"),Z9=a("--weight_decay"),G9=a("."),mw=u(),Ne=o("p"),M9=a("Here is an example of the auto-configured "),Gd=o("code"),N9=a("optimizer"),H9=a(" entry for "),Md=o("code"),W9=a("AdamW"),F9=a(":"),_w=u(),f(al.$$.fragment),vw=u(),vi=o("p"),B9=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),jw=u(),se=o("ul"),nl=o("li"),Nd=o("code"),V9=a("lr"),Y9=a(" with the value of "),Hd=o("code"),K9=a("--learning_rate"),J9=u(),ol=o("li"),Wd=o("code"),X9=a("betas"),Q9=a(" with the value of "),Fd=o("code"),ek=a("--adam_beta1 --adam_beta2"),sk=u(),ll=o("li"),Bd=o("code"),tk=a("eps"),ak=a(" with the value of "),Vd=o("code"),nk=a("--adam_epsilon"),ok=u(),rl=o("li"),Yd=o("code"),lk=a("weight_decay"),rk=a(" with the value of "),Kd=o("code"),pk=a("--weight_decay"),gw=u(),ji=o("p"),ik=a("Therefore please remember to tune the shared hyperparameters on the command line."),ww=u(),gi=o("p"),uk=a("You can also set the values explicitly:"),yw=u(),f(pl.$$.fragment),bw=u(),ca=o("p"),ck=a("But then you\u2019re on your own synchronizing the "),wi=o("a"),hk=a("Trainer"),fk=a(` command line arguments and the DeepSpeed
configuration.`),Ew=u(),yi=o("p"),dk=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),qw=u(),f(il.$$.fragment),$w=u(),te=o("p"),mk=a("Similarly to "),Jd=o("code"),_k=a("AdamW"),vk=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Xd=o("code"),jk=a("weight_decay"),gk=a(" around "),Qd=o("code"),wk=a("0.01"),yk=a("."),kw=u(),bi=o("a"),Dw=u(),Is=o("h4"),ha=o("a"),em=o("span"),f(ul.$$.fragment),bk=u(),sm=o("span"),Ek=a("Scheduler"),Pw=u(),x=o("p"),qk=a("DeepSpeed supports "),tm=o("code"),$k=a("LRRangeTest"),kk=a(", "),am=o("code"),Dk=a("OneCycle"),Pk=a(", "),nm=o("code"),Ok=a("WarmupLR"),zk=a(" and "),om=o("code"),Tk=a("WarmupDecayLR"),Ak=a(` learning rate schedulers. The full
documentation is `),cl=o("a"),Sk=a("here"),xk=a("."),Ow=u(),Ei=o("p"),Ck=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),zw=u(),fa=o("ul"),hl=o("li"),lm=o("code"),Ik=a("WarmupLR"),Rk=a(" via "),rm=o("code"),Uk=a("--lr_scheduler_type constant_with_warmup"),Lk=u(),He=o("li"),pm=o("code"),Zk=a("WarmupDecayLR"),Gk=a(" via "),im=o("code"),Mk=a("--lr_scheduler_type linear"),Nk=a(". This is also the default value for "),um=o("code"),Hk=a("--lr_scheduler_type"),Wk=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Tw=u(),D=o("p"),Fk=a("If you don\u2019t configure the "),cm=o("code"),Bk=a("scheduler"),Vk=a(" entry in the configuration file, the "),qi=o("a"),Yk=a("Trainer"),Kk=a(` will use
the values of `),hm=o("code"),Jk=a("--lr_scheduler_type"),Xk=a(", "),fm=o("code"),Qk=a("--learning_rate"),eD=a(" and "),dm=o("code"),sD=a("--warmup_steps"),tD=a(" or "),mm=o("code"),aD=a("--warmup_ratio"),nD=a(` to configure a
\u{1F917} Transformers version of it.`),Aw=u(),We=o("p"),oD=a("Here is an example of the auto-configured "),_m=o("code"),lD=a("scheduler"),rD=a(" entry for "),vm=o("code"),pD=a("WarmupLR"),iD=a(":"),Sw=u(),f(fl.$$.fragment),xw=u(),Fe=o("p"),uD=a("Since "),jm=o("em"),cD=a("\u201Cauto\u201D"),hD=a(" is used the "),$i=o("a"),fD=a("Trainer"),dD=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Cw=u(),ae=o("ul"),da=o("li"),gm=o("code"),mD=a("warmup_min_lr"),_D=a(" with the value of "),wm=o("code"),vD=a("0"),jD=a("."),gD=u(),ma=o("li"),ym=o("code"),wD=a("warmup_max_lr"),yD=a(" with the value of "),bm=o("code"),bD=a("--learning_rate"),ED=a("."),qD=u(),Be=o("li"),Em=o("code"),$D=a("warmup_num_steps"),kD=a(" with the value of "),qm=o("code"),DD=a("--warmup_steps"),PD=a(" if provided. Otherwise will use "),$m=o("code"),OD=a("--warmup_ratio"),zD=a(`
multiplied by the number of training steps and rounded up.`),TD=u(),Ve=o("li"),km=o("code"),AD=a("total_num_steps"),SD=a(" with either the value of "),Dm=o("code"),xD=a("--max_steps"),CD=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Pm=o("code"),ID=a("WarmupDecayLR"),RD=a(")."),Iw=u(),ki=o("p"),UD=a("You can, of course, take over any or all of the configuration values and set those yourself:"),Rw=u(),f(dl.$$.fragment),Uw=u(),_a=o("p"),LD=a("But then you\u2019re on your own synchronizing the "),Di=o("a"),ZD=a("Trainer"),GD=a(` command line arguments and the DeepSpeed
configuration.`),Lw=u(),va=o("p"),MD=a("For example, for "),Om=o("code"),ND=a("WarmupDecayLR"),HD=a(", you can use the following entry:"),Zw=u(),f(ml.$$.fragment),Gw=u(),N=o("p"),WD=a("and "),zm=o("code"),FD=a("total_num_steps"),BD=a(", "),Tm=o("code"),VD=a("warmup_max_lr"),YD=a(", "),Am=o("code"),KD=a("warmup_num_steps"),JD=a(" and "),Sm=o("code"),XD=a("total_num_steps"),QD=a(" will be set at loading time."),Mw=u(),Pi=o("a"),Nw=u(),Rs=o("h3"),ja=o("a"),xm=o("span"),f(_l.$$.fragment),eP=u(),Cm=o("span"),sP=a("fp32 Precision"),Hw=u(),Oi=o("p"),tP=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),Ww=u(),ga=o("p"),aP=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Im=o("code"),nP=a("NaN"),oP=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Fw=u(),f(vl.$$.fragment),Bw=u(),wa=o("p"),lP=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),jl=o("a"),rP=a("TensorFloat-32(TF32) on Ampere devices"),pP=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Vw=u(),zi=o("a"),Yw=u(),Us=o("h3"),ya=o("a"),Rm=o("span"),f(gl.$$.fragment),iP=u(),Um=o("span"),uP=a("Automatic Mixed Precision"),Kw=u(),Ti=o("p"),cP=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),Jw=u(),Ai=o("p"),hP=a("To configure pytorch AMP-like mode set:"),Xw=u(),f(wl.$$.fragment),Qw=u(),Ye=o("p"),fP=a("and the "),Si=o("a"),dP=a("Trainer"),mP=a(` will automatically enable or disable it based on the value of
`),Lm=o("code"),_P=a("args.fp16_backend"),vP=a(". The rest of config values are up to you."),ey=u(),ba=o("p"),jP=a("This mode gets enabled when "),Zm=o("code"),gP=a("--fp16 --fp16_backend amp"),wP=a(" command line args are passed."),sy=u(),xi=o("p"),yP=a("You can also enable/disable this mode explicitly:"),ty=u(),f(yl.$$.fragment),ay=u(),Ea=o("p"),bP=a("But then you\u2019re on your own synchronizing the "),Ci=o("a"),EP=a("Trainer"),qP=a(` command line arguments and the DeepSpeed
configuration.`),ny=u(),qa=o("p"),$P=a("Here is the "),bl=o("a"),kP=a("documentation"),DP=a("."),oy=u(),Ii=o("p"),PP=a("To configure apex AMP-like mode set:"),ly=u(),f(El.$$.fragment),ry=u(),ne=o("p"),OP=a("and the "),Ri=o("a"),zP=a("Trainer"),TP=a(" will automatically configure it based on the values of "),Gm=o("code"),AP=a("args.fp16_backend"),SP=a(` and
`),Mm=o("code"),xP=a("args.fp16_opt_level"),CP=a("."),py=u(),$a=o("p"),IP=a("This mode gets enabled when "),Nm=o("code"),RP=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),UP=a(" command line args are passed."),iy=u(),Ui=o("p"),LP=a("You can also configure this mode explicitly:"),uy=u(),f(ql.$$.fragment),cy=u(),ka=o("p"),ZP=a("But then you\u2019re on your own synchronizing the "),Li=o("a"),GP=a("Trainer"),MP=a(` command line arguments and the DeepSpeed
configuration.`),hy=u(),Da=o("p"),NP=a("Here is the "),$l=o("a"),HP=a("documentation"),WP=a("."),fy=u(),Zi=o("a"),dy=u(),Ls=o("h3"),Pa=o("a"),Hm=o("span"),f(kl.$$.fragment),FP=u(),Wm=o("span"),BP=a("Batch Size"),my=u(),Gi=o("p"),VP=a("To configure batch size, use:"),_y=u(),f(Dl.$$.fragment),vy=u(),C=o("p"),YP=a("and the "),Mi=o("a"),KP=a("Trainer"),JP=a(" will automatically set "),Fm=o("code"),XP=a("train_micro_batch_size_per_gpu"),QP=a(` to the value of
`),Bm=o("code"),eO=a("args.per_device_train_batch_size"),sO=a(" and "),Vm=o("code"),tO=a("train_batch_size"),aO=a(" to "),Ym=o("code"),nO=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),oO=a("."),jy=u(),Ni=o("p"),lO=a("You can also set the values explicitly:"),gy=u(),f(Pl.$$.fragment),wy=u(),Oa=o("p"),rO=a("But then you\u2019re on your own synchronizing the "),Hi=o("a"),pO=a("Trainer"),iO=a(` command line arguments and the DeepSpeed
configuration.`),yy=u(),Wi=o("a"),by=u(),Zs=o("h3"),za=o("a"),Km=o("span"),f(Ol.$$.fragment),uO=u(),Jm=o("span"),cO=a("Gradient Accumulation"),Ey=u(),Fi=o("p"),hO=a("To configure gradient accumulation set:"),qy=u(),f(zl.$$.fragment),$y=u(),Ke=o("p"),fO=a("and the "),Bi=o("a"),dO=a("Trainer"),mO=a(" will automatically set it to the value of "),Xm=o("code"),_O=a("args.gradient_accumulation_steps"),vO=a("."),ky=u(),Vi=o("p"),jO=a("You can also set the value explicitly:"),Dy=u(),f(Tl.$$.fragment),Py=u(),Ta=o("p"),gO=a("But then you\u2019re on your own synchronizing the "),Yi=o("a"),wO=a("Trainer"),yO=a(` command line arguments and the DeepSpeed
configuration.`),Oy=u(),Ki=o("a"),zy=u(),Gs=o("h3"),Aa=o("a"),Qm=o("span"),f(Al.$$.fragment),bO=u(),e_=o("span"),EO=a("Gradient Clipping"),Ty=u(),Ji=o("p"),qO=a("To configure gradient gradient clipping set:"),Ay=u(),f(Sl.$$.fragment),Sy=u(),Je=o("p"),$O=a("and the "),Xi=o("a"),kO=a("Trainer"),DO=a(" will automatically set it to the value of "),s_=o("code"),PO=a("args.max_grad_norm"),OO=a("."),xy=u(),Qi=o("p"),zO=a("You can also set the value explicitly:"),Cy=u(),f(xl.$$.fragment),Iy=u(),Sa=o("p"),TO=a("But then you\u2019re on your own synchronizing the "),eu=o("a"),AO=a("Trainer"),SO=a(` command line arguments and the DeepSpeed
configuration.`),Ry=u(),su=o("a"),Uy=u(),Ms=o("h3"),xa=o("a"),t_=o("span"),f(Cl.$$.fragment),xO=u(),a_=o("span"),CO=a("Getting The Model Weights Out"),Ly=u(),Ca=o("p"),IO=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),n_=o("code"),RO=a("global_step*/*optim_states.pt"),UO=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Zy=u(),tu=o("p"),o_=o("strong"),LO=a("FP16 Weights:"),Gy=u(),Ia=o("p"),ZO=a("When a model is saved under ZeRO-2, you end up having the normal "),l_=o("code"),GO=a("pytorch_model.bin"),MO=a(` file with the model weights, but
they are only the fp16 version of the weights.`),My=u(),H=o("p"),NO=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),r_=o("code"),HO=a('"stage3_gather_fp16_weights_on_model_save": true'),WO=a(" is required to get the "),p_=o("code"),FO=a("Trainer"),BO=a(` to save the fp16
version of the weights. If this setting is `),i_=o("code"),VO=a("False"),YO=u(),u_=o("code"),KO=a("pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),JO=a(` it
won\u2019t be possible to load it back.`),Ny=u(),f(Il.$$.fragment),Hy=u(),au=o("p"),c_=o("strong"),XO=a("FP32 Weights:"),Wy=u(),Ra=o("p"),QO=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Rl=o("a"),ez=a("models hub"),sz=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Fy=u(),nu=o("p"),h_=o("strong"),tz=a("Live FP32 Weights Recovery:"),By=u(),ou=o("p"),az=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Vy=u(),lu=o("p"),nz=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Yy=u(),f(Ul.$$.fragment),Ky=u(),Xe=o("p"),oz=a("If you\u2019re using the "),f_=o("code"),lz=a("--load_best_model_at_end"),rz=a(" class:"),d_=o("em"),pz=a("~transformers.TrainingArguments"),iz=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Jy=u(),f(Ll.$$.fragment),Xy=u(),f(Ua.$$.fragment),Qy=u(),La=o("p"),uz=a("Of course, you don\u2019t have to use class:"),m_=o("em"),cz=a("~transformers.Trainer"),hz=a(` and you can adjust the examples above to your own
trainer.`),e2=u(),Za=o("p"),fz=a("If for some reason you want more refinement, you can also extract the fp32 "),__=o("code"),dz=a("state_dict"),mz=a(` of the weights and apply
these yourself as is shown in the following example:`),s2=u(),f(Zl.$$.fragment),t2=u(),ru=o("p"),v_=o("strong"),_z=a("Offline FP32 Weights Recovery:"),a2=u(),Qe=o("p"),vz=a("DeepSpeed creates a special conversion script "),j_=o("code"),jz=a("zero_to_fp32.py"),gz=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),g_=o("code"),wz=a("Trainer"),yz=a(" to do the extraction."),n2=u(),pu=o("p"),bz=a("Let\u2019s say your checkpoint folder looks like this:"),o2=u(),f(Gl.$$.fragment),l2=u(),Ga=o("p"),Ez=a("In this example there is just one DeepSpeed checkpoint sub-folder "),w_=o("em"),qz=a("global_step1"),$z=a(`. Therefore to reconstruct the fp32
weights just run:`),r2=u(),f(Ml.$$.fragment),p2=u(),Ma=o("p"),kz=a("This is it. "),y_=o("code"),Dz=a("pytorch_model.bin"),Pz=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),i2=u(),iu=o("p"),Oz=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),u2=u(),Nl=o("p"),b_=o("code"),zz=a("python zero_to_fp32.py -h"),Tz=a(" will give you usage details."),c2=u(),es=o("p"),Az=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=o("code"),Sz=a("latest"),xz=a(`, which in the current
example will contain `),q_=o("code"),Cz=a("global_step1"),Iz=a("."),h2=u(),uu=o("p"),Rz=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),f2=u(),Ns=o("h3"),Na=o("a"),$_=o("span"),f(Hl.$$.fragment),Uz=u(),k_=o("span"),Lz=a("ZeRO-3 and Infinity Nuances"),d2=u(),cu=o("p"),Zz=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),m2=u(),hu=o("p"),Gz=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),_2=u(),fu=o("p"),Mz=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),v2=u(),Hs=o("h4"),Ha=o("a"),D_=o("span"),f(Wl.$$.fragment),Nz=u(),P_=o("span"),Hz=a("Constructing Massive Models"),j2=u(),Wa=o("p"),Wz=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),O_=o("em"),Fz=a("deepspeed.zero.Init()"),Bz=a(`
context manager (which is also a function decorator), like so:`),g2=u(),f(Fl.$$.fragment),w2=u(),du=o("p"),Vz=a("As you can see this gives you a randomly initialized model."),y2=u(),k=o("p"),Yz=a("If you want to use a pretrained model, "),z_=o("code"),Kz=a("model_class.from_pretrained"),Jz=a(` will activate this feature as long as
`),T_=o("code"),Xz=a("is_deepspeed_zero3_enabled()"),Qz=a(" returns "),A_=o("code"),eT=a("True"),sT=a(`, which currently is setup by the
`),mu=o("a"),tT=a("TrainingArguments"),aT=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),_u=o("a"),nT=a("TrainingArguments"),oT=a(" object "),S_=o("strong"),lT=a("before"),rT=a(` calling
`),x_=o("code"),pT=a("from_pretrained"),iT=a(". Here is an example of a possible sequence:"),b2=u(),f(Bl.$$.fragment),E2=u(),Fa=o("p"),uT=a("If you\u2019re using the official example scripts and your command line arguments include "),C_=o("code"),cT=a("--deepspeed ds_config.json"),hT=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),q2=u(),vu=o("p"),fT=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),$2=u(),Ba=o("p"),dT=a("For full details on this method and other related features please refer to "),Vl=o("a"),mT=a("Constructing Massive Models"),_T=a("."),k2=u(),oe=o("p"),vT=a("Also when loading fp16-pretrained models, you will want to tell "),I_=o("code"),jT=a("from_pretrained"),gT=a(` to use
`),R_=o("code"),wT=a("torch_dtype=torch.float16"),yT=a(". For details, please, see "),ju=o("a"),bT=a("from_pretrained-torch-dtype"),ET=a("."),D2=u(),Ws=o("h4"),Va=o("a"),U_=o("span"),f(Yl.$$.fragment),qT=u(),L_=o("span"),$T=a("Gathering Parameters"),P2=u(),Kl=o("p"),kT=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Jl=o("a"),DT=a("Gathering Parameters"),O2=u(),Ya=o("p"),PT=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),Z_=o("code"),OT=a("from_pretrained"),zT=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),z2=u(),gu=o("p"),TT=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),T2=u(),f(Xl.$$.fragment),A2=u(),ss=o("p"),AT=a("stress on "),G_=o("code"),ST=a("tensor([1.])"),xT=a(", or if you get an error where it says the parameter is of size "),M_=o("code"),CT=a("1"),IT=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),S2=u(),wu=o("a"),x2=u(),Fs=o("h3"),Ka=o("a"),N_=o("span"),f(Ql.$$.fragment),RT=u(),H_=o("span"),UT=a("ZeRO Inference"),C2=u(),yu=o("p"),LT=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),I2=u(),Ja=o("p"),ZT=a("Otherwise you just need to pass the usual "),bu=o("a"),GT=a("TrainingArguments"),MT=a(" arguments. For example:"),R2=u(),f(er.$$.fragment),U2=u(),Eu=o("p"),NT=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),L2=u(),Xa=o("p"),HT=a("Here is an example of running "),W_=o("code"),WT=a("run_translation.py"),FT=a(" under DeepSpeed deploying all available GPUs:"),Z2=u(),f(sr.$$.fragment),G2=u(),qu=o("p"),BT=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),M2=u(),$u=o("p"),VT=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),N2=u(),Bs=o("h3"),Qa=o("a"),F_=o("span"),f(tr.$$.fragment),YT=u(),B_=o("span"),KT=a("Filing Issues"),H2=u(),ku=o("p"),JT=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),W2=u(),Du=o("p"),XT=a("In your report please always include:"),F2=u(),I=o("ol"),V_=o("li"),Y_=o("p"),QT=a("the full Deepspeed config file in the report"),eA=u(),K_=o("li"),we=o("p"),sA=a("either the command line arguments if you were using the "),Pu=o("a"),tA=a("Trainer"),aA=a(` or
`),Ou=o("a"),nA=a("TrainingArguments"),oA=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),zu=o("a"),lA=a("TrainingArguments"),rA=a(" as it has dozens of entries that are irrelevant."),pA=u(),ar=o("li"),J_=o("p"),iA=a("Output of:"),uA=u(),f(nr.$$.fragment),cA=u(),X_=o("li"),or=o("p"),hA=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),lr=o("a"),fA=a("notebook"),dA=a(` as
a starting point.`),mA=u(),Q_=o("li"),e1=o("p"),_A=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),vA=u(),s1=o("li"),rr=o("p"),jA=a("If possible try to use one of the existing "),pr=o("a"),gA=a("examples"),wA=a(" to reproduce the problem with."),B2=u(),Tu=o("p"),yA=a("Things to consider:"),V2=u(),en=o("ul"),Vs=o("li"),t1=o("p"),bA=a("Deepspeed is often not the cause of the problem."),EA=u(),a1=o("p"),qA=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),$A=u(),n1=o("p"),kA=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),DA=u(),o1=o("li"),ir=o("p"),PA=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),ur=o("a"),OA=a("Deepspeed"),zA=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),Y2=u(),Ys=o("h3"),sn=o("a"),l1=o("span"),f(cr.$$.fragment),TA=u(),r1=o("span"),AA=a("Troubleshooting"),K2=u(),Au=o("ul"),Su=o("li"),p1=o("code"),SA=a("deepspeed"),xA=a(" process gets killed at startup without a traceback"),J2=u(),W=o("p"),CA=a("If the "),i1=o("code"),IA=a("deepspeed"),RA=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),u1=o("code"),UA=a("offload_optimizer"),LA=a(" or "),c1=o("code"),ZA=a("offload_param"),GA=a(` or
both configured to offload to `),h1=o("code"),MA=a("cpu"),NA=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),X2=u(),tn=o("p"),HA=a("Work is being done to enable estimating how much memory is needed for a specific model: "),hr=o("a"),WA=a("PR"),FA=a("."),Q2=u(),Ks=o("h3"),an=o("a"),f1=o("span"),f(fr.$$.fragment),BA=u(),d1=o("span"),VA=a("Notes"),eb=u(),ts=o("ul"),Js=o("li"),YA=a("DeepSpeed works with the PyTorch "),xu=o("a"),KA=a("Trainer"),JA=a(" but not TF "),m1=o("code"),XA=a("TFTrainer"),QA=a("."),eS=u(),dr=o("li"),sS=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),mr=o("a"),tS=a("source"),aS=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),nS=u(),Xs=o("li"),oS=a("You don\u2019t have to use the "),Cu=o("a"),lS=a("Trainer"),rS=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),_r=o("a"),pS=a("the DeepSpeed integration instructions"),iS=a("."),sb=u(),Iu=o("a"),tb=u(),Qs=o("h2"),nn=o("a"),_1=o("span"),f(vr.$$.fragment),uS=u(),v1=o("span"),cS=a("Non-Trainer Deepspeed Integration"),ab=u(),as=o("p"),hS=a("The "),j1=o("code"),fS=a("HfDeepSpeedConfig"),dS=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Ru=o("a"),mS=a("Trainer"),_S=a(" is not used."),nb=u(),on=o("p"),vS=a("When using "),Uu=o("a"),jS=a("Trainer"),gS=a(" everything is automatically taken care of."),ob=u(),ns=o("p"),wS=a("When not using "),Lu=o("a"),yS=a("Trainer"),bS=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),g1=o("code"),ES=a("HfDeepSpeedConfig"),qS=a(" object before instantiating the model."),lb=u(),Zu=o("p"),$S=a("For example for a pretrained model:"),rb=u(),f(jr.$$.fragment),pb=u(),Gu=o("p"),kS=a("or for non-pretrained model:"),ib=u(),f(gr.$$.fragment),ub=u(),et=o("h2"),ln=o("a"),w1=o("span"),f(wr.$$.fragment),DS=u(),y1=o("span"),PS=a("HfDeepSpeedConfig"),cb=u(),q=o("div"),f(yr.$$.fragment),OS=u(),b1=o("p"),zS=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),TS=u(),ye=o("p"),AS=a("A "),E1=o("code"),SS=a("weakref"),xS=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),q1=o("code"),CS=a("from_pretrained"),IS=a(" and "),$1=o("code"),RS=a("_get_resized_embeddings"),US=a(`).
Therefore it\u2019s important that this object remains alive while the program is still running.`),LS=u(),le=o("p"),Mu=o("a"),ZS=a("Trainer"),GS=a(" uses the "),k1=o("code"),MS=a("HfTrainerDeepSpeedConfig"),NS=a(` subclass instead. That subclass has logic to
sync the configuration with values of `),Nu=o("a"),HS=a("TrainingArguments"),WS=a(` by replacing special placeholder
values: `),D1=o("code"),FS=a('"auto"'),BS=a(". Without this special logic the DeepSpeed configuration is not modified in any way."),VS=u(),os=o("div"),f(br.$$.fragment),YS=u(),P1=o("p"),KS=a("Deletes a sub-section of the config file if it\u2019s found."),JS=u(),st=o("p"),XS=a("Unless "),O1=o("code"),QS=a("must_exist"),ex=a(" is "),z1=o("code"),sx=a("True"),tx=a(" the section doesn\u2019t have to exist."),ax=u(),rn=o("div"),f(Er.$$.fragment),nx=u(),qr=o("p"),ox=a("Returns the set value or "),T1=o("code"),lx=a("default"),rx=a(" if no value is set"),px=u(),pn=o("div"),f($r.$$.fragment),ix=u(),tt=o("p"),ux=a("Returns "),A1=o("code"),cx=a("True"),hx=a("/"),S1=o("code"),fx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),dx=a(` or
isn\u2019t set).`),mx=u(),un=o("div"),f(kr.$$.fragment),_x=u(),at=o("p"),vx=a("Returns "),x1=o("code"),jx=a("True"),gx=a("/"),C1=o("code"),wx=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),yx=a(` or
isn\u2019t set).`),hb=u(),nt=o("h2"),cn=o("a"),I1=o("span"),f(Dr.$$.fragment),bx=u(),R1=o("span"),Ex=a("Main DeepSpeed Resources"),fb=u(),re=o("ul"),U1=o("li"),Pr=o("a"),qx=a("Project\u2019s github"),$x=u(),L1=o("li"),Or=o("a"),kx=a("Usage docs"),Dx=u(),Z1=o("li"),zr=o("a"),Px=a("API docs"),Ox=u(),G1=o("li"),Tr=o("a"),zx=a("Blog posts"),db=u(),Hu=o("p"),Tx=a("Papers:"),mb=u(),ls=o("ul"),M1=o("li"),Ar=o("a"),Ax=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Sx=u(),N1=o("li"),Sr=o("a"),xx=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Cx=u(),H1=o("li"),xr=o("a"),Ix=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),_b=u(),rs=o("p"),Rx=a("Finally, please, remember that, HuggingFace "),Wu=o("a"),Ux=a("Trainer"),Lx=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Cr=o("a"),Zx=a("DeepSpeed GitHub"),Gx=a("."),this.h()},l(e){const p=nW('[data-svelte="svelte-1phssyn"]',document.head);y=l(p,"META",{name:!0,content:!0}),p.forEach(t),Z=c(e),b=l(e,"H1",{class:!0});var Ir=r(b);$=l(Ir,"A",{id:!0,class:!0,href:!0});var W1=r($);hs=l(W1,"SPAN",{});var Bx=r(hs);d(B.$$.fragment,Bx),Bx.forEach(t),W1.forEach(t),kn=c(Ir),fs=l(Ir,"SPAN",{});var Vx=r(fs);ds=n(Vx,"DeepSpeed Integration"),Vx.forEach(t),Ir.forEach(t),lt=c(e),V=l(e,"P",{});var F1=r(V);Y=l(F1,"A",{href:!0,rel:!0});var Yx=r(Y);G=n(Yx,"DeepSpeed"),Yx.forEach(t),Nr=n(F1," implements everything described in the "),be=l(F1,"A",{href:!0,rel:!0});var Kx=r(be);Hr=n(Kx,"ZeRO paper"),Kx.forEach(t),ME=n(F1,". Currently it provides full support for:"),F1.forEach(t),K1=c(e),O=l(e,"OL",{});var pe=r(O);Uc=l(pe,"LI",{});var Jx=r(Uc);NE=n(Jx,"Optimizer state partitioning (ZeRO stage 1)"),Jx.forEach(t),HE=c(pe),Lc=l(pe,"LI",{});var Xx=r(Lc);WE=n(Xx,"Gradient partitioning (ZeRO stage 2)"),Xx.forEach(t),FE=c(pe),Zc=l(pe,"LI",{});var Qx=r(Zc);BE=n(Qx,"Parameter partitioning (ZeRO stage 3)"),Qx.forEach(t),VE=c(pe),Gc=l(pe,"LI",{});var eC=r(Gc);YE=n(eC,"Custom mixed precision training handling"),eC.forEach(t),KE=c(pe),Mc=l(pe,"LI",{});var sC=r(Mc);JE=n(sC,"A range of fast CUDA-extension-based optimizers"),sC.forEach(t),XE=c(pe),Nc=l(pe,"LI",{});var tC=r(Nc);QE=n(tC,"ZeRO-Offload to CPU and NVMe"),tC.forEach(t),pe.forEach(t),J1=c(e),Ee=l(e,"P",{});var Fu=r(Ee);eq=n(Fu,"ZeRO-Offload has its own dedicated paper: "),Dn=l(Fu,"A",{href:!0,rel:!0});var aC=r(Dn);sq=n(aC,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),aC.forEach(t),tq=n(Fu,". And NVMe-support is described in the paper "),Pn=l(Fu,"A",{href:!0,rel:!0});var nC=r(Pn);aq=n(nC,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),nC.forEach(t),nq=n(Fu,"."),Fu.forEach(t),X1=c(e),Wr=l(e,"P",{});var oC=r(Wr);oq=n(oC,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),oC.forEach(t),Q1=c(e),Fr=l(e,"P",{});var lC=r(Fr);lq=n(lC,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),lC.forEach(t),ev=c(e),rt=l(e,"P",{});var jb=r(rt);rq=n(jb,"\u{1F917} Transformers integrates "),On=l(jb,"A",{href:!0,rel:!0});var rC=r(On);pq=n(rC,"DeepSpeed"),rC.forEach(t),iq=n(jb," via 2 options:"),jb.forEach(t),sv=c(e),pt=l(e,"OL",{});var gb=r(pt);zn=l(gb,"LI",{});var wb=r(zn);uq=n(wb,"Integration of the core DeepSpeed features via "),Br=l(wb,"A",{href:!0});var pC=r(Br);cq=n(pC,"Trainer"),pC.forEach(t),hq=n(wb,`. This is everything done for you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),wb.forEach(t),fq=c(gb),L=l(gb,"LI",{});var ie=r(L);dq=n(ie,"If you don\u2019t use "),Vr=l(ie,"A",{href:!0});var iC=r(Vr);mq=n(iC,"Trainer"),iC.forEach(t),_q=n(ie,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Hc=l(ie,"CODE",{});var uC=r(Hc);vq=n(uC,"from_pretrained"),uC.forEach(t),jq=n(ie," and "),Wc=l(ie,"CODE",{});var cC=r(Wc);gq=n(cC,"from_config"),cC.forEach(t),wq=n(ie,` include integration of essential
parts of DeepSpeed like `),Fc=l(ie,"CODE",{});var hC=r(Fc);yq=n(hC,"zero.Init"),hC.forEach(t),bq=n(ie,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Yr=l(ie,"A",{href:!0});var fC=r(Yr);Eq=n(fC,"deepspeed-non-trainer-integration"),fC.forEach(t),qq=n(ie,"."),ie.forEach(t),gb.forEach(t),tv=c(e),Kr=l(e,"P",{});var dC=r(Kr);$q=n(dC,"What is integrated:"),dC.forEach(t),av=c(e),Jr=l(e,"P",{});var mC=r(Jr);kq=n(mC,"Training:"),mC.forEach(t),nv=c(e),Xr=l(e,"OL",{});var _C=r(Xr);Bc=l(_C,"LI",{});var vC=r(Bc);Dq=n(vC,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),vC.forEach(t),_C.forEach(t),ov=c(e),Qr=l(e,"P",{});var jC=r(Qr);Pq=n(jC,"Inference:"),jC.forEach(t),lv=c(e),ep=l(e,"OL",{});var gC=r(ep);Tn=l(gC,"LI",{});var yb=r(Tn);Oq=n(yb,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),sp=l(yb,"A",{href:!0});var wC=r(sp);zq=n(wC,"deepspeed-zero-inference"),wC.forEach(t),Tq=n(yb,"."),yb.forEach(t),gC.forEach(t),rv=c(e),tp=l(e,"P",{});var yC=r(tp);Aq=n(yC,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),yC.forEach(t),pv=c(e),ap=l(e,"A",{id:!0}),r(ap).forEach(t),iv=c(e),ms=l(e,"H2",{class:!0});var bb=r(ms);it=l(bb,"A",{id:!0,class:!0,href:!0});var bC=r(it);Vc=l(bC,"SPAN",{});var EC=r(Vc);d(An.$$.fragment,EC),EC.forEach(t),bC.forEach(t),Sq=c(bb),Yc=l(bb,"SPAN",{});var qC=r(Yc);xq=n(qC,"Trainer Deepspeed Integration"),qC.forEach(t),bb.forEach(t),uv=c(e),np=l(e,"A",{id:!0}),r(np).forEach(t),cv=c(e),_s=l(e,"H3",{class:!0});var Eb=r(_s);ut=l(Eb,"A",{id:!0,class:!0,href:!0});var $C=r(ut);Kc=l($C,"SPAN",{});var kC=r(Kc);d(Sn.$$.fragment,kC),kC.forEach(t),$C.forEach(t),Cq=c(Eb),Jc=l(Eb,"SPAN",{});var DC=r(Jc);Iq=n(DC,"Installation"),DC.forEach(t),Eb.forEach(t),hv=c(e),op=l(e,"P",{});var PC=r(op);Rq=n(PC,"Install the library via pypi:"),PC.forEach(t),fv=c(e),d(xn.$$.fragment,e),dv=c(e),qe=l(e,"P",{});var Bu=r(qe);Uq=n(Bu,"or via "),Xc=l(Bu,"CODE",{});var OC=r(Xc);Lq=n(OC,"transformers"),OC.forEach(t),Zq=n(Bu,"\u2019 "),Qc=l(Bu,"CODE",{});var zC=r(Qc);Gq=n(zC,"extras"),zC.forEach(t),Mq=n(Bu,":"),Bu.forEach(t),mv=c(e),d(Cn.$$.fragment,e),_v=c(e),$e=l(e,"P",{});var Vu=r($e);Nq=n(Vu,"or find more details on "),In=l(Vu,"A",{href:!0,rel:!0});var TC=r(In);Hq=n(TC,"the DeepSpeed\u2019s GitHub page"),TC.forEach(t),Wq=n(Vu,` and
`),Rn=l(Vu,"A",{href:!0,rel:!0});var AC=r(Rn);Fq=n(AC,"advanced install"),AC.forEach(t),Bq=n(Vu,"."),Vu.forEach(t),vv=c(e),ct=l(e,"P",{});var qb=r(ct);Vq=n(qb,"If you\u2019re still struggling with the build, first make sure to read "),lp=l(qb,"A",{href:!0});var SC=r(lp);Yq=n(SC,"zero-install-notes"),SC.forEach(t),Kq=n(qb,"."),qb.forEach(t),jv=c(e),rp=l(e,"P",{});var xC=r(rp);Jq=n(xC,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),xC.forEach(t),gv=c(e),pp=l(e,"P",{});var CC=r(pp);Xq=n(CC,"To make a local build for DeepSpeed:"),CC.forEach(t),wv=c(e),d(Un.$$.fragment,e),yv=c(e),ke=l(e,"P",{});var Yu=r(ke);Qq=n(Yu,"If you intend to use NVMe offload you will need to also include "),eh=l(Yu,"CODE",{});var IC=r(eh);e0=n(IC,"DS_BUILD_AIO=1"),IC.forEach(t),s0=n(Yu,` in the instructions above (and also
install `),sh=l(Yu,"EM",{});var RC=r(sh);t0=n(RC,"libaio-dev"),RC.forEach(t),a0=n(Yu," system-wide)."),Yu.forEach(t),bv=c(e),ht=l(e,"P",{});var $b=r(ht);n0=n($b,"Edit "),th=l($b,"CODE",{});var UC=r(th);o0=n(UC,"TORCH_CUDA_ARCH_LIST"),UC.forEach(t),l0=n($b,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),$b.forEach(t),Ev=c(e),d(Ln.$$.fragment,e),qv=c(e),_e=l(e,"P",{});var Rr=r(_e);r0=n(Rr,"So if you get "),ah=l(Rr,"CODE",{});var LC=r(ah);p0=n(LC,"8, 6"),LC.forEach(t),i0=n(Rr,", then use "),nh=l(Rr,"CODE",{});var ZC=r(nh);u0=n(ZC,'TORCH_CUDA_ARCH_LIST="8.6"'),ZC.forEach(t),c0=n(Rr,`. If you have multiple different cards, you can list all
of them like so `),oh=l(Rr,"CODE",{});var GC=r(oh);h0=n(GC,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),GC.forEach(t),Rr.forEach(t),$v=c(e),ip=l(e,"P",{});var MC=r(ip);f0=n(MC,"If you need to use the same setup on multiple machines, make a binary wheel:"),MC.forEach(t),kv=c(e),d(Zn.$$.fragment,e),Dv=c(e),De=l(e,"P",{});var Ku=r(De);d0=n(Ku,"it will generate something like "),lh=l(Ku,"CODE",{});var NC=r(lh);m0=n(NC,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),NC.forEach(t),_0=n(Ku,` which now you can install
as `),rh=l(Ku,"CODE",{});var HC=r(rh);v0=n(HC,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),HC.forEach(t),j0=n(Ku," locally or on any other machine."),Ku.forEach(t),Pv=c(e),ft=l(e,"P",{});var kb=r(ft);g0=n(kb,"Again, remember to ensure to adjust "),ph=l(kb,"CODE",{});var WC=r(ph);w0=n(WC,"TORCH_CUDA_ARCH_LIST"),WC.forEach(t),y0=n(kb," to the target architectures."),kb.forEach(t),Ov=c(e),Pe=l(e,"P",{});var Ju=r(Pe);b0=n(Ju,"You can find the complete list of NVIDIA GPUs and their corresponding "),ih=l(Ju,"STRONG",{});var FC=r(ih);E0=n(FC,"Compute Capabilities"),FC.forEach(t),q0=n(Ju,` (same as arch in this
context) `),Gn=l(Ju,"A",{href:!0,rel:!0});var BC=r(Gn);$0=n(BC,"here"),BC.forEach(t),k0=n(Ju,"."),Ju.forEach(t),zv=c(e),up=l(e,"P",{});var VC=r(up);D0=n(VC,"You can check the archs pytorch was built with using:"),VC.forEach(t),Tv=c(e),d(Mn.$$.fragment,e),Av=c(e),cp=l(e,"P",{});var YC=r(cp);P0=n(YC,"Here is how to find out the arch for one of the installed GPU. For example, for GPU 0:"),YC.forEach(t),Sv=c(e),d(Nn.$$.fragment,e),xv=c(e),hp=l(e,"P",{});var KC=r(hp);O0=n(KC,"If the output is:"),KC.forEach(t),Cv=c(e),d(Hn.$$.fragment,e),Iv=c(e),dt=l(e,"P",{});var Db=r(dt);z0=n(Db,"then you know that this card\u2019s arch is "),uh=l(Db,"CODE",{});var JC=r(uh);T0=n(JC,"8.6"),JC.forEach(t),A0=n(Db,"."),Db.forEach(t),Rv=c(e),mt=l(e,"P",{});var Pb=r(mt);S0=n(Pb,"You can also leave "),ch=l(Pb,"CODE",{});var XC=r(ch);x0=n(XC,"TORCH_CUDA_ARCH_LIST"),XC.forEach(t),C0=n(Pb,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Pb.forEach(t),Uv=c(e),_t=l(e,"P",{});var Ob=r(_t);I0=n(Ob,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Wn=l(Ob,"A",{href:!0,rel:!0});var QC=r(Wn);R0=n(QC,"Deepspeed"),QC.forEach(t),U0=n(Ob,","),Ob.forEach(t),Lv=c(e),fp=l(e,"A",{id:!0}),r(fp).forEach(t),Zv=c(e),vs=l(e,"H3",{class:!0});var zb=r(vs);vt=l(zb,"A",{id:!0,class:!0,href:!0});var eI=r(vt);hh=l(eI,"SPAN",{});var sI=r(hh);d(Fn.$$.fragment,sI),sI.forEach(t),eI.forEach(t),L0=c(zb),fh=l(zb,"SPAN",{});var tI=r(fh);Z0=n(tI,"Deployment with multiple GPUs"),tI.forEach(t),zb.forEach(t),Gv=c(e),jt=l(e,"P",{});var Tb=r(jt);G0=n(Tb,"To deploy this feature with multiple GPUs adjust the "),dp=l(Tb,"A",{href:!0});var aI=r(dp);M0=n(aI,"Trainer"),aI.forEach(t),N0=n(Tb,` command line arguments as
following:`),Tb.forEach(t),Mv=c(e),gt=l(e,"OL",{});var Ab=r(gt);js=l(Ab,"LI",{});var Xu=r(js);H0=n(Xu,"replace "),dh=l(Xu,"CODE",{});var nI=r(dh);W0=n(nI,"python -m torch.distributed.launch"),nI.forEach(t),F0=n(Xu," with "),mh=l(Xu,"CODE",{});var oI=r(mh);B0=n(oI,"deepspeed"),oI.forEach(t),V0=n(Xu,"."),Xu.forEach(t),Y0=c(Ab),ve=l(Ab,"LI",{});var hn=r(ve);K0=n(hn,"add a new argument "),_h=l(hn,"CODE",{});var lI=r(_h);J0=n(lI,"--deepspeed ds_config.json"),lI.forEach(t),X0=n(hn,", where "),vh=l(hn,"CODE",{});var rI=r(vh);Q0=n(rI,"ds_config.json"),rI.forEach(t),e5=n(hn,` is the DeepSpeed configuration file as
documented `),Bn=l(hn,"A",{href:!0,rel:!0});var pI=r(Bn);s5=n(pI,"here"),pI.forEach(t),t5=n(hn,". The file naming is up to you."),hn.forEach(t),Ab.forEach(t),Nv=c(e),mp=l(e,"P",{});var iI=r(mp);a5=n(iI,"Therefore, if your original command line looked as following:"),iI.forEach(t),Hv=c(e),d(Vn.$$.fragment,e),Wv=c(e),_p=l(e,"P",{});var uI=r(_p);n5=n(uI,"Now it should be:"),uI.forEach(t),Fv=c(e),d(Yn.$$.fragment,e),Bv=c(e),z=l(e,"P",{});var ue=r(z);o5=n(ue,"Unlike, "),jh=l(ue,"CODE",{});var cI=r(jh);l5=n(cI,"torch.distributed.launch"),cI.forEach(t),r5=n(ue," where you have to specify how many GPUs to use with "),gh=l(ue,"CODE",{});var hI=r(gh);p5=n(hI,"--nproc_per_node"),hI.forEach(t),i5=n(ue,`, with the
`),wh=l(ue,"CODE",{});var fI=r(wh);u5=n(fI,"deepspeed"),fI.forEach(t),c5=n(ue," launcher you don\u2019t have to use the corresponding "),yh=l(ue,"CODE",{});var dI=r(yh);h5=n(dI,"--num_gpus"),dI.forEach(t),f5=n(ue,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Kn=l(ue,"A",{href:!0,rel:!0});var mI=r(Kn);d5=n(mI,"here"),mI.forEach(t),m5=n(ue,"."),ue.forEach(t),Vv=c(e),J=l(e,"P",{});var fn=r(J);_5=n(fn,"In fact, you can continue using "),bh=l(fn,"CODE",{});var _I=r(bh);v5=n(_I,"-m torch.distributed.launch"),_I.forEach(t),j5=n(fn,` with DeepSpeed as long as you don\u2019t need to use
`),Eh=l(fn,"CODE",{});var vI=r(Eh);g5=n(vI,"deepspeed"),vI.forEach(t),w5=n(fn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),qh=l(fn,"CODE",{});var jI=r(qh);y5=n(jI,"deepspeed"),jI.forEach(t),b5=n(fn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),fn.forEach(t),Yv=c(e),wt=l(e,"P",{});var Sb=r(wt);E5=n(Sb,"Here is an example of running "),$h=l(Sb,"CODE",{});var gI=r($h);q5=n(gI,"run_translation.py"),gI.forEach(t),$5=n(Sb," under DeepSpeed deploying all available GPUs:"),Sb.forEach(t),Kv=c(e),d(Jn.$$.fragment,e),Jv=c(e),yt=l(e,"P",{});var xb=r(yt);k5=n(xb,"Note that in the DeepSpeed documentation you are likely to see "),kh=l(xb,"CODE",{});var wI=r(kh);D5=n(wI,"--deepspeed --deepspeed_config ds_config.json"),wI.forEach(t),P5=n(xb,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),xb.forEach(t),Xv=c(e),bt=l(e,"P",{});var Cb=r(bt);O5=n(Cb,"For some practical usage examples, please, see this "),Xn=l(Cb,"A",{href:!0,rel:!0});var yI=r(Xn);z5=n(yI,"post"),yI.forEach(t),T5=n(Cb,"."),Cb.forEach(t),Qv=c(e),vp=l(e,"A",{id:!0}),r(vp).forEach(t),ej=c(e),gs=l(e,"H3",{class:!0});var Ib=r(gs);Et=l(Ib,"A",{id:!0,class:!0,href:!0});var bI=r(Et);Dh=l(bI,"SPAN",{});var EI=r(Dh);d(Qn.$$.fragment,EI),EI.forEach(t),bI.forEach(t),A5=c(Ib),Ph=l(Ib,"SPAN",{});var qI=r(Ph);S5=n(qI,"Deployment with one GPU"),qI.forEach(t),Ib.forEach(t),sj=c(e),qt=l(e,"P",{});var Rb=r(qt);x5=n(Rb,"To deploy DeepSpeed with one GPU adjust the "),jp=l(Rb,"A",{href:!0});var $I=r(jp);C5=n($I,"Trainer"),$I.forEach(t),I5=n(Rb," command line arguments as following:"),Rb.forEach(t),tj=c(e),d(eo.$$.fragment,e),aj=c(e),Oe=l(e,"P",{});var Qu=r(Oe);R5=n(Qu,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Oh=l(Qu,"CODE",{});var kI=r(Oh);U5=n(kI,"--num_gpus=1"),kI.forEach(t),L5=n(Qu,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),so=l(Qu,"A",{href:!0,rel:!0});var DI=r(so);Z5=n(DI,"documentation"),DI.forEach(t),G5=n(Qu," discusses the launcher options."),Qu.forEach(t),nj=c(e),gp=l(e,"P",{});var PI=r(gp);M5=n(PI,"Why would you want to use DeepSpeed with just one GPU?"),PI.forEach(t),oj=c(e),$t=l(e,"OL",{});var Ub=r($t);zh=l(Ub,"LI",{});var OI=r(zh);N5=n(OI,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),OI.forEach(t),H5=c(Ub),Th=l(Ub,"LI",{});var zI=r(Th);W5=n(zI,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),zI.forEach(t),Ub.forEach(t),lj=c(e),wp=l(e,"P",{});var TI=r(wp);F5=n(TI,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),TI.forEach(t),rj=c(e),d(to.$$.fragment,e),pj=c(e),yp=l(e,"P",{});var AI=r(yp);B5=n(AI,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),AI.forEach(t),ij=c(e),kt=l(e,"P",{});var Lb=r(kt);V5=n(Lb,"For a practical usage example of this type of deployment, please, see this "),ao=l(Lb,"A",{href:!0,rel:!0});var SI=r(ao);Y5=n(SI,"post"),SI.forEach(t),K5=n(Lb,"."),Lb.forEach(t),uj=c(e),bp=l(e,"P",{});var xI=r(bp);J5=n(xI,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),xI.forEach(t),cj=c(e),Ep=l(e,"P",{});var CI=r(Ep);X5=n(CI,"Notes:"),CI.forEach(t),hj=c(e),qp=l(e,"UL",{});var II=r(qp);ws=l(II,"LI",{});var ec=r(ws);no=l(ec,"P",{});var Zb=r(no);Q5=n(Zb,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Ah=l(Zb,"CODE",{});var RI=r(Ah);e4=n(RI,"CUDA_VISIBLE_DEVICES"),RI.forEach(t),s4=n(Zb,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),Zb.forEach(t),t4=c(ec),d(oo.$$.fragment,ec),a4=c(ec),Sh=l(ec,"P",{});var UI=r(Sh);n4=n(UI,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),UI.forEach(t),ec.forEach(t),II.forEach(t),fj=c(e),$p=l(e,"A",{id:!0}),r($p).forEach(t),dj=c(e),ys=l(e,"H3",{class:!0});var Gb=r(ys);Dt=l(Gb,"A",{id:!0,class:!0,href:!0});var LI=r(Dt);xh=l(LI,"SPAN",{});var ZI=r(xh);d(lo.$$.fragment,ZI),ZI.forEach(t),LI.forEach(t),o4=c(Gb),Ch=l(Gb,"SPAN",{});var GI=r(Ch);l4=n(GI,"Deployment in Notebooks"),GI.forEach(t),Gb.forEach(t),mj=c(e),Pt=l(e,"P",{});var Mb=r(Pt);r4=n(Mb,"The problem with running notebook cells as a script is that there is no normal "),Ih=l(Mb,"CODE",{});var MI=r(Ih);p4=n(MI,"deepspeed"),MI.forEach(t),i4=n(Mb,` launcher to rely on, so
under certain setups we have to emulate it.`),Mb.forEach(t),_j=c(e),kp=l(e,"P",{});var NI=r(kp);u4=n(NI,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),NI.forEach(t),vj=c(e),d(ro.$$.fragment,e),jj=c(e),Ot=l(e,"P",{});var Nb=r(Ot);c4=n(Nb,"Note: "),Rh=l(Nb,"CODE",{});var HI=r(Rh);h4=n(HI,"..."),HI.forEach(t),f4=n(Nb," stands for the normal arguments that you\u2019d pass to the functions."),Nb.forEach(t),gj=c(e),Dp=l(e,"P",{});var WI=r(Dp);d4=n(WI,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),WI.forEach(t),wj=c(e),Pp=l(e,"P",{});var FI=r(Pp);m4=n(FI,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),FI.forEach(t),yj=c(e),d(po.$$.fragment,e),bj=c(e),ze=l(e,"P",{});var sc=r(ze);_4=n(sc,"If the training script is in a normal file and not in the notebook cells, you can launch "),Uh=l(sc,"CODE",{});var BI=r(Uh);v4=n(BI,"deepspeed"),BI.forEach(t),j4=n(sc,` normally via
shell from a cell. For example, to use `),Lh=l(sc,"CODE",{});var VI=r(Lh);g4=n(VI,"run_translation.py"),VI.forEach(t),w4=n(sc," you would launch it with:"),sc.forEach(t),Ej=c(e),d(io.$$.fragment,e),qj=c(e),zt=l(e,"P",{});var Hb=r(zt);y4=n(Hb,"or with "),Zh=l(Hb,"CODE",{});var YI=r(Zh);b4=n(YI,"%%bash"),YI.forEach(t),E4=n(Hb," magic, where you can write a multi-line code for the shell program to run:"),Hb.forEach(t),$j=c(e),d(uo.$$.fragment,e),kj=c(e),Op=l(e,"P",{});var KI=r(Op);q4=n(KI,"In such case you don\u2019t need any of the code presented at the beginning of this section."),KI.forEach(t),Dj=c(e),Tt=l(e,"P",{});var Wb=r(Tt);$4=n(Wb,"Note: While "),Gh=l(Wb,"CODE",{});var JI=r(Gh);k4=n(JI,"%%bash"),JI.forEach(t),D4=n(Wb,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Wb.forEach(t),Pj=c(e),zp=l(e,"A",{id:!0}),r(zp).forEach(t),Oj=c(e),bs=l(e,"H3",{class:!0});var Fb=r(bs);At=l(Fb,"A",{id:!0,class:!0,href:!0});var XI=r(At);Mh=l(XI,"SPAN",{});var QI=r(Mh);d(co.$$.fragment,QI),QI.forEach(t),XI.forEach(t),P4=c(Fb),Nh=l(Fb,"SPAN",{});var eR=r(Nh);O4=n(eR,"Configuration"),eR.forEach(t),Fb.forEach(t),zj=c(e),St=l(e,"P",{});var Bb=r(St);z4=n(Bb,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),ho=l(Bb,"A",{href:!0,rel:!0});var sR=r(ho);T4=n(sR,"following documentation"),sR.forEach(t),A4=n(Bb,"."),Bb.forEach(t),Tj=c(e),xt=l(e,"P",{});var Vb=r(xt);S4=n(Vb,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),fo=l(Vb,"A",{href:!0,rel:!0});var tR=r(fo);x4=n(tR,`the DeepSpeedExamples
repo`),tR.forEach(t),C4=n(Vb,":"),Vb.forEach(t),Aj=c(e),d(mo.$$.fragment,e),Sj=c(e),Ct=l(e,"P",{});var Yb=r(Ct);I4=n(Yb,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Hh=l(Yb,"CODE",{});var aR=r(Hh);R4=n(aR,".json"),aR.forEach(t),U4=n(Yb," files with:"),Yb.forEach(t),xj=c(e),d(_o.$$.fragment,e),Cj=c(e),It=l(e,"P",{});var Kb=r(It);L4=n(Kb,"Some more examples are to be found in the "),vo=l(Kb,"A",{href:!0,rel:!0});var nR=r(vo);Z4=n(nR,"main repo"),nR.forEach(t),G4=n(Kb," as well."),Kb.forEach(t),Ij=c(e),Tp=l(e,"P",{});var oR=r(Tp);M4=n(oR,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),oR.forEach(t),Rj=c(e),X=l(e,"P",{});var dn=r(X);N4=n(dn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Wh=l(dn,"CODE",{});var lR=r(Wh);H4=n(lR,"AdamW"),lR.forEach(t),W4=n(dn," optimizer and "),Fh=l(dn,"CODE",{});var rR=r(Fh);F4=n(rR,"WarmupLR"),rR.forEach(t),B4=n(dn,` scheduler and will enable mixed
precision training if `),Bh=l(dn,"CODE",{});var pR=r(Bh);V4=n(pR,"--fp16"),pR.forEach(t),Y4=n(dn," is passed:"),dn.forEach(t),Uj=c(e),d(jo.$$.fragment,e),Lj=c(e),Rt=l(e,"P",{});var Jb=r(Rt);K4=n(Jb,"When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=l(Jb,"A",{href:!0});var iR=r(Ap);J4=n(iR,"Trainer"),iR.forEach(t),X4=n(Jb,`
to the console, so you can see exactly what was the final configuration passed to it.`),Jb.forEach(t),Zj=c(e),Sp=l(e,"A",{id:!0}),r(Sp).forEach(t),Gj=c(e),Es=l(e,"H3",{class:!0});var Xb=r(Es);Ut=l(Xb,"A",{id:!0,class:!0,href:!0});var uR=r(Ut);Vh=l(uR,"SPAN",{});var cR=r(Vh);d(go.$$.fragment,cR),cR.forEach(t),uR.forEach(t),Q4=c(Xb),Yh=l(Xb,"SPAN",{});var hR=r(Yh);e$=n(hR,"Passing Configuration"),hR.forEach(t),Xb.forEach(t),Mj=c(e),T=l(e,"P",{});var ce=r(T);s$=n(ce,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),xp=l(ce,"A",{href:!0});var fR=r(xp);t$=n(fR,"Trainer"),fR.forEach(t),a$=n(ce," via "),Cp=l(ce,"A",{href:!0});var dR=r(Cp);n$=n(dR,"TrainingArguments"),dR.forEach(t),o$=n(ce," then for the "),Kh=l(ce,"CODE",{});var mR=r(Kh);l$=n(mR,"deepspeed"),mR.forEach(t),r$=n(ce,` argument you can
pass a nested `),Jh=l(ce,"CODE",{});var _R=r(Jh);p$=n(_R,"dict"),_R.forEach(t),i$=n(ce,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=l(ce,"A",{href:!0});var vR=r(Ip);u$=n(vR,"TrainingArguments"),vR.forEach(t),c$=n(ce,"."),ce.forEach(t),Nj=c(e),Rp=l(e,"P",{});var jR=r(Rp);h$=n(jR,"To summarize you can do:"),jR.forEach(t),Hj=c(e),d(wo.$$.fragment,e),Wj=c(e),Up=l(e,"P",{});var gR=r(Up);f$=n(gR,"or:"),gR.forEach(t),Fj=c(e),d(yo.$$.fragment,e),Bj=c(e),Lp=l(e,"A",{id:!0}),r(Lp).forEach(t),Vj=c(e),qs=l(e,"H3",{class:!0});var Qb=r(qs);Lt=l(Qb,"A",{id:!0,class:!0,href:!0});var wR=r(Lt);Xh=l(wR,"SPAN",{});var yR=r(Xh);d(bo.$$.fragment,yR),yR.forEach(t),wR.forEach(t),d$=c(Qb),Qh=l(Qb,"SPAN",{});var bR=r(Qh);m$=n(bR,"Shared Configuration"),bR.forEach(t),Qb.forEach(t),Yj=c(e),d(Zt.$$.fragment,e),Kj=c(e),Te=l(e,"P",{});var tc=r(Te);_$=n(tc,"Some configuration values are required by both the "),Zp=l(tc,"A",{href:!0});var ER=r(Zp);v$=n(ER,"Trainer"),ER.forEach(t),j$=n(tc,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=l(tc,"A",{href:!0});var qR=r(Gp);g$=n(qR,"Trainer"),qR.forEach(t),w$=n(tc," command line arguments."),tc.forEach(t),Jj=c(e),Gt=l(e,"P",{});var e3=r(Gt);y$=n(e3,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=l(e3,"A",{href:!0});var $R=r(Mp);b$=n($R,"Trainer"),$R.forEach(t),E$=n(e3,` do the majority
of configuration for you.`),e3.forEach(t),Xj=c(e),Ae=l(e,"P",{});var ac=r(Ae);q$=n(ac,"Therefore, in the rest of this guide you will find a special configuration value: "),ef=l(ac,"CODE",{});var kR=r(ef);$$=n(kR,"auto"),kR.forEach(t),k$=n(ac,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=l(ac,"A",{href:!0});var DR=r(Np);D$=n(DR,"Trainer"),DR.forEach(t),P$=n(ac,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),ac.forEach(t),Qj=c(e),Hp=l(e,"P",{});var PR=r(Hp);O$=n(PR,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),PR.forEach(t),eg=c(e),Mt=l(e,"P",{});var s3=r(Mt);z$=n(s3,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=l(s3,"A",{href:!0});var OR=r(Wp);T$=n(OR,"TrainingArguments"),OR.forEach(t),A$=n(s3," based on that. The steps are:"),s3.forEach(t),sg=c(e),Nt=l(e,"OL",{});var t3=r(Nt);sf=l(t3,"LI",{});var zR=r(sf);S$=n(zR,"Create or load the DeepSpeed configuration to be used as a master configuration"),zR.forEach(t),x$=c(t3),Eo=l(t3,"LI",{});var a3=r(Eo);C$=n(a3,"Create the "),Fp=l(a3,"A",{href:!0});var TR=r(Fp);I$=n(TR,"TrainingArguments"),TR.forEach(t),R$=n(a3," object based on these values"),a3.forEach(t),t3.forEach(t),tg=c(e),Q=l(e,"P",{});var mn=r(Q);U$=n(mn,"Do note that some values, such as "),tf=l(mn,"CODE",{});var AR=r(tf);L$=n(AR,"scheduler.params.total_num_steps"),AR.forEach(t),Z$=n(mn,` are calculated by
`),Bp=l(mn,"A",{href:!0});var SR=r(Bp);G$=n(SR,"Trainer"),SR.forEach(t),M$=n(mn," during "),af=l(mn,"CODE",{});var xR=r(af);N$=n(xR,"train"),xR.forEach(t),H$=n(mn,", but you can of course do the math yourself."),mn.forEach(t),ag=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),ng=c(e),$s=l(e,"H3",{class:!0});var n3=r($s);Ht=l(n3,"A",{id:!0,class:!0,href:!0});var CR=r(Ht);nf=l(CR,"SPAN",{});var IR=r(nf);d(qo.$$.fragment,IR),IR.forEach(t),CR.forEach(t),W$=c(n3),of=l(n3,"SPAN",{});var RR=r(of);F$=n(RR,"ZeRO"),RR.forEach(t),n3.forEach(t),og=c(e),$o=l(e,"P",{});var Mx=r($o);ko=l(Mx,"A",{href:!0,rel:!0});var UR=r(ko);B$=n(UR,"Zero Redundancy Optimizer (ZeRO)"),UR.forEach(t),V$=n(Mx,` is the workhorse of DeepSpeed. It
support 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Mx.forEach(t),lg=c(e),Se=l(e,"P",{});var nc=r(Se);Y$=n(nc,"The "),lf=l(nc,"CODE",{});var LR=r(lf);K$=n(LR,"zero_optimization"),LR.forEach(t),J$=n(nc," section of the configuration file is the most important part ("),Do=l(nc,"A",{href:!0,rel:!0});var ZR=r(Do);X$=n(ZR,"docs"),ZR.forEach(t),Q$=n(nc,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),nc.forEach(t),rg=c(e),Wt=l(e,"P",{});var o3=r(Wt);e6=n(o3,"This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=l(o3,"A",{href:!0});var GR=r(Yp);s6=n(GR,"Trainer"),GR.forEach(t),t6=n(o3,` provides
no equivalent command line arguments.`),o3.forEach(t),pg=c(e),Kp=l(e,"P",{});var MR=r(Kp);a6=n(MR,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),MR.forEach(t),ig=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),ug=c(e),ks=l(e,"H4",{class:!0});var l3=r(ks);Ft=l(l3,"A",{id:!0,class:!0,href:!0});var NR=r(Ft);rf=l(NR,"SPAN",{});var HR=r(rf);d(Po.$$.fragment,HR),HR.forEach(t),NR.forEach(t),n6=c(l3),pf=l(l3,"SPAN",{});var WR=r(pf);o6=n(WR,"ZeRO-2 Config"),WR.forEach(t),l3.forEach(t),cg=c(e),Xp=l(e,"P",{});var FR=r(Xp);l6=n(FR,"The following is an example configuration for ZeRO stage 2:"),FR.forEach(t),hg=c(e),d(Oo.$$.fragment,e),fg=c(e),Qp=l(e,"P",{});var BR=r(Qp);uf=l(BR,"STRONG",{});var VR=r(uf);r6=n(VR,"Performance tuning:"),VR.forEach(t),BR.forEach(t),dg=c(e),xe=l(e,"UL",{});var oc=r(xe);Ds=l(oc,"LI",{});var lc=r(Ds);p6=n(lc,"enabling "),cf=l(lc,"CODE",{});var YR=r(cf);i6=n(YR,"offload_optimizer"),YR.forEach(t),u6=n(lc," should reduce GPU RAM usage (it requires "),hf=l(lc,"CODE",{});var KR=r(hf);c6=n(KR,'"stage": 2'),KR.forEach(t),h6=n(lc,")"),lc.forEach(t),f6=c(oc),A=l(oc,"LI",{});var K=r(A);ff=l(K,"CODE",{});var JR=r(ff);d6=n(JR,'"overlap_comm": true'),JR.forEach(t),m6=n(K," trades off increased GPU RAM usage to lower all-reduce latency. "),df=l(K,"CODE",{});var XR=r(df);_6=n(XR,"overlap_comm"),XR.forEach(t),v6=n(K,` uses 4.5x
the `),mf=l(K,"CODE",{});var QR=r(mf);j6=n(QR,"allgather_bucket_size"),QR.forEach(t),g6=n(K," and "),_f=l(K,"CODE",{});var eU=r(_f);w6=n(eU,"reduce_bucket_size"),eU.forEach(t),y6=n(K,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),vf=l(K,"CODE",{});var sU=r(vf);b6=n(sU,"5e8 x 2Bytes x 2 x 4.5"),sU.forEach(t),E6=n(K,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),jf=l(K,"CODE",{});var tU=r(jf);q6=n(tU,"2e8"),tU.forEach(t),$6=n(K,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),K.forEach(t),k6=c(oc),gf=l(oc,"LI",{});var aU=r(gf);D6=n(aU,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size,
the slower the communication, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),aU.forEach(t),oc.forEach(t),mg=c(e),ei=l(e,"A",{id:!0}),r(ei).forEach(t),_g=c(e),Ps=l(e,"H4",{class:!0});var r3=r(Ps);Bt=l(r3,"A",{id:!0,class:!0,href:!0});var nU=r(Bt);wf=l(nU,"SPAN",{});var oU=r(wf);d(zo.$$.fragment,oU),oU.forEach(t),nU.forEach(t),P6=c(r3),yf=l(r3,"SPAN",{});var lU=r(yf);O6=n(lU,"ZeRO-3 Config"),lU.forEach(t),r3.forEach(t),vg=c(e),si=l(e,"P",{});var rU=r(si);z6=n(rU,"The following is an example configuration for ZeRO stage 3:"),rU.forEach(t),jg=c(e),d(To.$$.fragment,e),gg=c(e),M=l(e,"P",{});var ps=r(M);T6=n(ps,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),bf=l(ps,"CODE",{});var pU=r(bf);A6=n(pU,'"device": "cpu"'),pU.forEach(t),S6=n(ps,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=l(ps,"CODE",{});var iU=r(Ef);x6=n(iU,"none"),iU.forEach(t),C6=n(ps," instead of "),qf=l(ps,"CODE",{});var uU=r(qf);I6=n(uU,"cpu"),uU.forEach(t),R6=n(ps," for the "),$f=l(ps,"CODE",{});var cU=r($f);U6=n(cU,"device"),cU.forEach(t),L6=n(ps,` entry. Offloading to
NVMe is discussed further down.`),ps.forEach(t),wg=c(e),Ce=l(e,"P",{});var rc=r(Ce);Z6=n(rc,"Pinned memory is enabled with "),kf=l(rc,"CODE",{});var hU=r(kf);G6=n(hU,"pin_memory"),hU.forEach(t),M6=n(rc," set to "),Df=l(rc,"CODE",{});var fU=r(Df);N6=n(fU,"true"),fU.forEach(t),H6=n(rc,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),rc.forEach(t),yg=c(e),ti=l(e,"P",{});var dU=r(ti);Pf=l(dU,"STRONG",{});var mU=r(Pf);W6=n(mU,"Performance tuning:"),mU.forEach(t),dU.forEach(t),bg=c(e),Vt=l(e,"UL",{});var p3=r(Vt);Ao=l(p3,"LI",{});var i3=r(Ao);Of=l(i3,"CODE",{});var _U=r(Of);F6=n(_U,"stage3_max_live_parameters"),_U.forEach(t),B6=n(i3,": "),zf=l(i3,"CODE",{});var vU=r(zf);V6=n(vU,"1e9"),vU.forEach(t),i3.forEach(t),Y6=c(p3),So=l(p3,"LI",{});var u3=r(So);Tf=l(u3,"CODE",{});var jU=r(Tf);K6=n(jU,"stage3_max_reuse_distance"),jU.forEach(t),J6=n(u3,": "),Af=l(u3,"CODE",{});var gU=r(Af);X6=n(gU,"1e9"),gU.forEach(t),u3.forEach(t),p3.forEach(t),Eg=c(e),S=l(e,"P",{});var he=r(S);Q6=n(he,"If hitting OOM reduce "),Sf=l(he,"CODE",{});var wU=r(Sf);e8=n(wU,"stage3_max_live_parameters"),wU.forEach(t),s8=n(he," and "),xf=l(he,"CODE",{});var yU=r(xf);t8=n(yU,"stage3_max_reuse_distance"),yU.forEach(t),a8=n(he,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Cf=l(he,"CODE",{});var bU=r(Cf);n8=n(bU,"1e9"),bU.forEach(t),o8=n(he,` would consume ~2GB. The memory is shared by
`),If=l(he,"CODE",{});var EU=r(If);l8=n(EU,"stage3_max_live_parameters"),EU.forEach(t),r8=n(he," and "),Rf=l(he,"CODE",{});var qU=r(Rf);p8=n(qU,"stage3_max_reuse_distance"),qU.forEach(t),i8=n(he,", so its not additive, its just 2GB total."),he.forEach(t),qg=c(e),je=l(e,"P",{});var Ur=r(je);Uf=l(Ur,"CODE",{});var $U=r(Uf);u8=n($U,"stage3_max_live_parameters"),$U.forEach(t),c8=n(Ur,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Lf=l(Ur,"CODE",{});var kU=r(Lf);h8=n(kU,"stage3_max_reuse_distance"),kU.forEach(t),f8=n(Ur,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Zf=l(Ur,"CODE",{});var DU=r(Zf);d8=n(DU,"stage3_max_reuse_distance"),DU.forEach(t),m8=n(Ur,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ur.forEach(t),$g=c(e),ai=l(e,"P",{});var PU=r(ai);_8=n(PU,"The following configuration values depend on the model\u2019s hidden size:"),PU.forEach(t),kg=c(e),Ie=l(e,"UL",{});var pc=r(Ie);xo=l(pc,"LI",{});var c3=r(xo);Gf=l(c3,"CODE",{});var OU=r(Gf);v8=n(OU,"reduce_bucket_size"),OU.forEach(t),j8=n(c3,": "),Mf=l(c3,"CODE",{});var zU=r(Mf);g8=n(zU,"hidden_size*hidden_size"),zU.forEach(t),c3.forEach(t),w8=c(pc),Co=l(pc,"LI",{});var h3=r(Co);Nf=l(h3,"CODE",{});var TU=r(Nf);y8=n(TU,"stage3_prefetch_bucket_size"),TU.forEach(t),b8=n(h3,": "),Hf=l(h3,"CODE",{});var AU=r(Hf);E8=n(AU,"0.9 * hidden_size * hidden_size"),AU.forEach(t),h3.forEach(t),q8=c(pc),Io=l(pc,"LI",{});var f3=r(Io);Wf=l(f3,"CODE",{});var SU=r(Wf);$8=n(SU,"stage3_param_persistence_threshold"),SU.forEach(t),k8=n(f3,": "),Ff=l(f3,"CODE",{});var xU=r(Ff);D8=n(xU,"10 * hidden_size"),xU.forEach(t),f3.forEach(t),pc.forEach(t),Dg=c(e),Re=l(e,"P",{});var ic=r(Re);P8=n(ic,"therefore set these values to "),Bf=l(ic,"CODE",{});var CU=r(Bf);O8=n(CU,"auto"),CU.forEach(t),z8=n(ic," and the "),ni=l(ic,"A",{href:!0});var IU=r(ni);T8=n(IU,"Trainer"),IU.forEach(t),A8=n(ic,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),ic.forEach(t),Pg=c(e),Ro=l(e,"P",{});var Nx=r(Ro);Vf=l(Nx,"CODE",{});var RU=r(Vf);S8=n(RU,"stage3_gather_fp16_weights_on_model_save"),RU.forEach(t),x8=n(Nx,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Nx.forEach(t),Og=c(e),ee=l(e,"P",{});var _n=r(ee);C8=n(_n,"If you\u2019re migrating from ZeRO-2 configuration note that "),Yf=l(_n,"CODE",{});var UU=r(Yf);I8=n(UU,"allgather_partitions"),UU.forEach(t),R8=n(_n,", "),Kf=l(_n,"CODE",{});var LU=r(Kf);U8=n(LU,"allgather_bucket_size"),LU.forEach(t),L8=n(_n,` and
`),Jf=l(_n,"CODE",{});var ZU=r(Jf);Z8=n(ZU,"reduce_scatter"),ZU.forEach(t),G8=n(_n,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),_n.forEach(t),zg=c(e),oi=l(e,"UL",{});var GU=r(oi);Uo=l(GU,"LI",{});var d3=r(Uo);Xf=l(d3,"CODE",{});var MU=r(Xf);M8=n(MU,"sub_group_size"),MU.forEach(t),N8=n(d3,": "),Qf=l(d3,"CODE",{});var NU=r(Qf);H8=n(NU,"1e9"),NU.forEach(t),d3.forEach(t),GU.forEach(t),Tg=c(e),ge=l(e,"P",{});var Lr=r(ge);ed=l(Lr,"CODE",{});var HU=r(ed);W8=n(HU,"sub_group_size"),HU.forEach(t),F8=n(Lr,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),sd=l(Lr,"CODE",{});var WU=r(sd);B8=n(WU,"sub_group_size"),WU.forEach(t),V8=n(Lr,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),td=l(Lr,"CODE",{});var FU=r(td);Y8=n(FU,"sub_group_size"),FU.forEach(t),K8=n(Lr,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Lr.forEach(t),Ag=c(e),Ue=l(e,"P",{});var uc=r(Ue);J8=n(uc,"You can leave "),ad=l(uc,"CODE",{});var BU=r(ad);X8=n(BU,"sub_group_size"),BU.forEach(t),Q8=n(uc," to its default value of "),nd=l(uc,"EM",{});var VU=r(nd);e7=n(VU,"1e9"),VU.forEach(t),s7=n(uc,` when not using NVMe offload. You may want to change its
default value in the following cases:`),uc.forEach(t),Sg=c(e),Yt=l(e,"OL",{});var m3=r(Yt);Lo=l(m3,"LI",{});var _3=r(Lo);t7=n(_3,"Running into OOM during optimizer step: Reduce "),od=l(_3,"CODE",{});var YU=r(od);a7=n(YU,"sub_group_size"),YU.forEach(t),n7=n(_3," to reduce memory utilization of temporary buffers"),_3.forEach(t),o7=c(m3),Zo=l(m3,"LI",{});var v3=r(Zo);l7=n(v3,"Optimizer Step is taking a long time: Increase "),ld=l(v3,"CODE",{});var KU=r(ld);r7=n(KU,"sub_group_size"),KU.forEach(t),p7=n(v3,` to improve bandwidth utilization as a result of
the increased data buffers.`),v3.forEach(t),m3.forEach(t),xg=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),Cg=c(e),Os=l(e,"H3",{class:!0});var j3=r(Os);Kt=l(j3,"A",{id:!0,class:!0,href:!0});var JU=r(Kt);rd=l(JU,"SPAN",{});var XU=r(rd);d(Go.$$.fragment,XU),XU.forEach(t),JU.forEach(t),i7=c(j3),pd=l(j3,"SPAN",{});var QU=r(pd);u7=n(QU,"NVMe Support"),QU.forEach(t),j3.forEach(t),Ig=c(e),ri=l(e,"P",{});var eL=r(ri);c7=n(eL,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),eL.forEach(t),Rg=c(e),pi=l(e,"P",{});var sL=r(pi);h7=n(sL,"The following configuration example enables NVMe to offload both optimizer states and the params:"),sL.forEach(t),Ug=c(e),d(Mo.$$.fragment,e),Lg=c(e),Jt=l(e,"P",{});var g3=r(Jt);f7=n(g3,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),id=l(g3,"EM",{});var tL=r(id);d7=n(tL,"\u201Cdevice\u201D: \u201Ccpu\u201D"),tL.forEach(t),m7=n(g3,")."),g3.forEach(t),Zg=c(e),Le=l(e,"P",{});var cc=r(Le);_7=n(cc,"Here is the full documentation for offloading "),No=l(cc,"A",{href:!0,rel:!0});var aL=r(No);v7=n(aL,"optimizer states"),aL.forEach(t),j7=n(cc," and "),Ho=l(cc,"A",{href:!0,rel:!0});var nL=r(Ho);g7=n(nL,"parameters"),nL.forEach(t),w7=n(cc,"."),cc.forEach(t),Gg=c(e),Xt=l(e,"P",{});var w3=r(Xt);y7=n(w3,"Make sure that your "),ud=l(w3,"CODE",{});var oL=r(ud);b7=n(oL,"nvme_path"),oL.forEach(t),E7=n(w3,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),w3.forEach(t),Mg=c(e),Ze=l(e,"P",{});var hc=r(Ze);q7=n(hc,"In order to figure out the optimal "),cd=l(hc,"CODE",{});var lL=r(cd);$7=n(lL,"aio"),lL.forEach(t),k7=n(hc,` configuration block you must run a benchmark on your target setup, as
`),Wo=l(hc,"A",{href:!0,rel:!0});var rL=r(Wo);D7=n(rL,"explained here"),rL.forEach(t),P7=n(hc,"."),hc.forEach(t),Ng=c(e),ii=l(e,"A",{id:!0}),r(ii).forEach(t),Hg=c(e),zs=l(e,"H4",{class:!0});var y3=r(zs);Qt=l(y3,"A",{id:!0,class:!0,href:!0});var pL=r(Qt);hd=l(pL,"SPAN",{});var iL=r(hd);d(Fo.$$.fragment,iL),iL.forEach(t),pL.forEach(t),O7=c(y3),fd=l(y3,"SPAN",{});var uL=r(fd);z7=n(uL,"ZeRO-2 vs ZeRO-3 Performance"),uL.forEach(t),y3.forEach(t),Wg=c(e),ui=l(e,"P",{});var cL=r(ui);T7=n(cL,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),cL.forEach(t),Fg=c(e),ci=l(e,"P",{});var hL=r(ci);A7=n(hL,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),hL.forEach(t),Bg=c(e),ea=l(e,"UL",{});var b3=r(ea);Ts=l(b3,"LI",{});var fc=r(Ts);S7=n(fc,"set "),dd=l(fc,"CODE",{});var fL=r(dd);x7=n(fL,"stage3_param_persistence_threshold"),fL.forEach(t),C7=n(fc," to a very large number - larger than the largest parameter, e.g., "),md=l(fc,"CODE",{});var dL=r(md);I7=n(dL,"6 * hidden_size * hidden_size"),dL.forEach(t),R7=n(fc,". This will keep the parameters on the GPUs."),fc.forEach(t),U7=c(b3),Bo=l(b3,"LI",{});var E3=r(Bo);L7=n(E3,"turn off "),_d=l(E3,"CODE",{});var mL=r(_d);Z7=n(mL,"offload_params"),mL.forEach(t),G7=n(E3," since ZeRO-2 doesn\u2019t have that option."),E3.forEach(t),b3.forEach(t),Vg=c(e),Ge=l(e,"P",{});var dc=r(Ge);M7=n(dc,"The performance will likely improve significantly with just "),vd=l(dc,"CODE",{});var _L=r(vd);N7=n(_L,"offload_params"),_L.forEach(t),H7=n(dc,` turned off, even if you don\u2019t change
`),jd=l(dc,"CODE",{});var vL=r(jd);W7=n(vL,"stage3_param_persistence_threshold"),vL.forEach(t),F7=n(dc,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),dc.forEach(t),Yg=c(e),hi=l(e,"A",{id:!0}),r(hi).forEach(t),Kg=c(e),As=l(e,"H4",{class:!0});var q3=r(As);sa=l(q3,"A",{id:!0,class:!0,href:!0});var jL=r(sa);gd=l(jL,"SPAN",{});var gL=r(gd);d(Vo.$$.fragment,gL),gL.forEach(t),jL.forEach(t),B7=c(q3),wd=l(q3,"SPAN",{});var wL=r(wd);V7=n(wL,"ZeRO-2 Example"),wL.forEach(t),q3.forEach(t),Jg=c(e),ta=l(e,"P",{});var $3=r(ta);Y7=n($3,"Here is a full ZeRO-2 auto-configuration file "),yd=l($3,"CODE",{});var yL=r(yd);K7=n(yL,"ds_config_zero2.json"),yL.forEach(t),J7=n($3,":"),$3.forEach(t),Xg=c(e),d(Yo.$$.fragment,e),Qg=c(e),aa=l(e,"P",{});var k3=r(aa);X7=n(k3,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),bd=l(k3,"CODE",{});var bL=r(bd);Q7=n(bL,"auto"),bL.forEach(t),e9=n(k3," settings in it."),k3.forEach(t),ew=c(e),d(Ko.$$.fragment,e),sw=c(e),fi=l(e,"A",{id:!0}),r(fi).forEach(t),tw=c(e),Ss=l(e,"H4",{class:!0});var D3=r(Ss);na=l(D3,"A",{id:!0,class:!0,href:!0});var EL=r(na);Ed=l(EL,"SPAN",{});var qL=r(Ed);d(Jo.$$.fragment,qL),qL.forEach(t),EL.forEach(t),s9=c(D3),qd=l(D3,"SPAN",{});var $L=r(qd);t9=n($L,"ZeRO-3 Example"),$L.forEach(t),D3.forEach(t),aw=c(e),oa=l(e,"P",{});var P3=r(oa);a9=n(P3,"Here is a full ZeRO-3 auto-configuration file "),$d=l(P3,"CODE",{});var kL=r($d);n9=n(kL,"ds_config_zero3.json"),kL.forEach(t),o9=n(P3,":"),P3.forEach(t),nw=c(e),d(Xo.$$.fragment,e),ow=c(e),la=l(e,"P",{});var O3=r(la);l9=n(O3,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),kd=l(O3,"CODE",{});var DL=r(kd);r9=n(DL,"auto"),DL.forEach(t),p9=n(O3," settings in it."),O3.forEach(t),lw=c(e),d(Qo.$$.fragment,e),rw=c(e),xs=l(e,"H3",{class:!0});var z3=r(xs);ra=l(z3,"A",{id:!0,class:!0,href:!0});var PL=r(ra);Dd=l(PL,"SPAN",{});var OL=r(Dd);d(el.$$.fragment,OL),OL.forEach(t),PL.forEach(t),i9=c(z3),Pd=l(z3,"SPAN",{});var zL=r(Pd);u9=n(zL,"Optimizer and Scheduler"),zL.forEach(t),z3.forEach(t),pw=c(e),pa=l(e,"P",{});var T3=r(pa);c9=n(T3,"As long as you don\u2019t enable "),Od=l(T3,"CODE",{});var TL=r(Od);h9=n(TL,"offload_optimizer"),TL.forEach(t),f9=n(T3,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),T3.forEach(t),iw=c(e),di=l(e,"P",{});var AL=r(di);d9=n(AL,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),AL.forEach(t),uw=c(e),ia=l(e,"P",{});var A3=r(ia);m9=n(A3,"It is possible to use a non-DeepSpeed optimizer when "),zd=l(A3,"CODE",{});var SL=r(zd);_9=n(SL,"offload_optimizer"),SL.forEach(t),v9=n(A3,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),A3.forEach(t),cw=c(e),mi=l(e,"A",{id:!0}),r(mi).forEach(t),hw=c(e),Cs=l(e,"H4",{class:!0});var S3=r(Cs);ua=l(S3,"A",{id:!0,class:!0,href:!0});var xL=r(ua);Td=l(xL,"SPAN",{});var CL=r(Td);d(sl.$$.fragment,CL),CL.forEach(t),xL.forEach(t),j9=c(S3),Ad=l(S3,"SPAN",{});var IL=r(Ad);g9=n(IL,"Optimizer"),IL.forEach(t),S3.forEach(t),fw=c(e),Me=l(e,"P",{});var mc=r(Me);w9=n(mc,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Sd=l(mc,"CODE",{});var RL=r(Sd);y9=n(RL,"torch"),RL.forEach(t),b9=n(mc,". The full documentation is "),tl=l(mc,"A",{href:!0,rel:!0});var UL=r(tl);E9=n(UL,"here"),UL.forEach(t),q9=n(mc,"."),mc.forEach(t),dw=c(e),E=l(e,"P",{});var P=r(E);$9=n(P,"If you don\u2019t configure the "),xd=l(P,"CODE",{});var LL=r(xd);k9=n(LL,"optimizer"),LL.forEach(t),D9=n(P," entry in the configuration file, the "),_i=l(P,"A",{href:!0});var ZL=r(_i);P9=n(ZL,"Trainer"),ZL.forEach(t),O9=n(P,` will
automatically set it to `),Cd=l(P,"CODE",{});var GL=r(Cd);z9=n(GL,"AdamW"),GL.forEach(t),T9=n(P,` and will use the supplied values or the defaults for the following command line
arguments: `),Id=l(P,"CODE",{});var ML=r(Id);A9=n(ML,"--learning_rate"),ML.forEach(t),S9=n(P,", "),Rd=l(P,"CODE",{});var NL=r(Rd);x9=n(NL,"--adam_beta1"),NL.forEach(t),C9=n(P,", "),Ud=l(P,"CODE",{});var HL=r(Ud);I9=n(HL,"--adam_beta2"),HL.forEach(t),R9=n(P,", "),Ld=l(P,"CODE",{});var WL=r(Ld);U9=n(WL,"--adam_epsilon"),WL.forEach(t),L9=n(P," and "),Zd=l(P,"CODE",{});var FL=r(Zd);Z9=n(FL,"--weight_decay"),FL.forEach(t),G9=n(P,"."),P.forEach(t),mw=c(e),Ne=l(e,"P",{});var _c=r(Ne);M9=n(_c,"Here is an example of the auto-configured "),Gd=l(_c,"CODE",{});var BL=r(Gd);N9=n(BL,"optimizer"),BL.forEach(t),H9=n(_c," entry for "),Md=l(_c,"CODE",{});var VL=r(Md);W9=n(VL,"AdamW"),VL.forEach(t),F9=n(_c,":"),_c.forEach(t),_w=c(e),d(al.$$.fragment,e),vw=c(e),vi=l(e,"P",{});var YL=r(vi);B9=n(YL,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),YL.forEach(t),jw=c(e),se=l(e,"UL",{});var vn=r(se);nl=l(vn,"LI",{});var x3=r(nl);Nd=l(x3,"CODE",{});var KL=r(Nd);V9=n(KL,"lr"),KL.forEach(t),Y9=n(x3," with the value of "),Hd=l(x3,"CODE",{});var JL=r(Hd);K9=n(JL,"--learning_rate"),JL.forEach(t),x3.forEach(t),J9=c(vn),ol=l(vn,"LI",{});var C3=r(ol);Wd=l(C3,"CODE",{});var XL=r(Wd);X9=n(XL,"betas"),XL.forEach(t),Q9=n(C3," with the value of "),Fd=l(C3,"CODE",{});var QL=r(Fd);ek=n(QL,"--adam_beta1 --adam_beta2"),QL.forEach(t),C3.forEach(t),sk=c(vn),ll=l(vn,"LI",{});var I3=r(ll);Bd=l(I3,"CODE",{});var eZ=r(Bd);tk=n(eZ,"eps"),eZ.forEach(t),ak=n(I3," with the value of "),Vd=l(I3,"CODE",{});var sZ=r(Vd);nk=n(sZ,"--adam_epsilon"),sZ.forEach(t),I3.forEach(t),ok=c(vn),rl=l(vn,"LI",{});var R3=r(rl);Yd=l(R3,"CODE",{});var tZ=r(Yd);lk=n(tZ,"weight_decay"),tZ.forEach(t),rk=n(R3," with the value of "),Kd=l(R3,"CODE",{});var aZ=r(Kd);pk=n(aZ,"--weight_decay"),aZ.forEach(t),R3.forEach(t),vn.forEach(t),gw=c(e),ji=l(e,"P",{});var nZ=r(ji);ik=n(nZ,"Therefore please remember to tune the shared hyperparameters on the command line."),nZ.forEach(t),ww=c(e),gi=l(e,"P",{});var oZ=r(gi);uk=n(oZ,"You can also set the values explicitly:"),oZ.forEach(t),yw=c(e),d(pl.$$.fragment,e),bw=c(e),ca=l(e,"P",{});var U3=r(ca);ck=n(U3,"But then you\u2019re on your own synchronizing the "),wi=l(U3,"A",{href:!0});var lZ=r(wi);hk=n(lZ,"Trainer"),lZ.forEach(t),fk=n(U3,` command line arguments and the DeepSpeed
configuration.`),U3.forEach(t),Ew=c(e),yi=l(e,"P",{});var rZ=r(yi);dk=n(rZ,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),rZ.forEach(t),qw=c(e),d(il.$$.fragment,e),$w=c(e),te=l(e,"P",{});var jn=r(te);mk=n(jn,"Similarly to "),Jd=l(jn,"CODE",{});var pZ=r(Jd);_k=n(pZ,"AdamW"),pZ.forEach(t),vk=n(jn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Xd=l(jn,"CODE",{});var iZ=r(Xd);jk=n(iZ,"weight_decay"),iZ.forEach(t),gk=n(jn," around "),Qd=l(jn,"CODE",{});var uZ=r(Qd);wk=n(uZ,"0.01"),uZ.forEach(t),yk=n(jn,"."),jn.forEach(t),kw=c(e),bi=l(e,"A",{id:!0}),r(bi).forEach(t),Dw=c(e),Is=l(e,"H4",{class:!0});var L3=r(Is);ha=l(L3,"A",{id:!0,class:!0,href:!0});var cZ=r(ha);em=l(cZ,"SPAN",{});var hZ=r(em);d(ul.$$.fragment,hZ),hZ.forEach(t),cZ.forEach(t),bk=c(L3),sm=l(L3,"SPAN",{});var fZ=r(sm);Ek=n(fZ,"Scheduler"),fZ.forEach(t),L3.forEach(t),Pw=c(e),x=l(e,"P",{});var fe=r(x);qk=n(fe,"DeepSpeed supports "),tm=l(fe,"CODE",{});var dZ=r(tm);$k=n(dZ,"LRRangeTest"),dZ.forEach(t),kk=n(fe,", "),am=l(fe,"CODE",{});var mZ=r(am);Dk=n(mZ,"OneCycle"),mZ.forEach(t),Pk=n(fe,", "),nm=l(fe,"CODE",{});var _Z=r(nm);Ok=n(_Z,"WarmupLR"),_Z.forEach(t),zk=n(fe," and "),om=l(fe,"CODE",{});var vZ=r(om);Tk=n(vZ,"WarmupDecayLR"),vZ.forEach(t),Ak=n(fe,` learning rate schedulers. The full
documentation is `),cl=l(fe,"A",{href:!0,rel:!0});var jZ=r(cl);Sk=n(jZ,"here"),jZ.forEach(t),xk=n(fe,"."),fe.forEach(t),Ow=c(e),Ei=l(e,"P",{});var gZ=r(Ei);Ck=n(gZ,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),gZ.forEach(t),zw=c(e),fa=l(e,"UL",{});var Z3=r(fa);hl=l(Z3,"LI",{});var G3=r(hl);lm=l(G3,"CODE",{});var wZ=r(lm);Ik=n(wZ,"WarmupLR"),wZ.forEach(t),Rk=n(G3," via "),rm=l(G3,"CODE",{});var yZ=r(rm);Uk=n(yZ,"--lr_scheduler_type constant_with_warmup"),yZ.forEach(t),G3.forEach(t),Lk=c(Z3),He=l(Z3,"LI",{});var Zr=r(He);pm=l(Zr,"CODE",{});var bZ=r(pm);Zk=n(bZ,"WarmupDecayLR"),bZ.forEach(t),Gk=n(Zr," via "),im=l(Zr,"CODE",{});var EZ=r(im);Mk=n(EZ,"--lr_scheduler_type linear"),EZ.forEach(t),Nk=n(Zr,". This is also the default value for "),um=l(Zr,"CODE",{});var qZ=r(um);Hk=n(qZ,"--lr_scheduler_type"),qZ.forEach(t),Wk=n(Zr,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Zr.forEach(t),Z3.forEach(t),Tw=c(e),D=l(e,"P",{});var F=r(D);Fk=n(F,"If you don\u2019t configure the "),cm=l(F,"CODE",{});var $Z=r(cm);Bk=n($Z,"scheduler"),$Z.forEach(t),Vk=n(F," entry in the configuration file, the "),qi=l(F,"A",{href:!0});var kZ=r(qi);Yk=n(kZ,"Trainer"),kZ.forEach(t),Kk=n(F,` will use
the values of `),hm=l(F,"CODE",{});var DZ=r(hm);Jk=n(DZ,"--lr_scheduler_type"),DZ.forEach(t),Xk=n(F,", "),fm=l(F,"CODE",{});var PZ=r(fm);Qk=n(PZ,"--learning_rate"),PZ.forEach(t),eD=n(F," and "),dm=l(F,"CODE",{});var OZ=r(dm);sD=n(OZ,"--warmup_steps"),OZ.forEach(t),tD=n(F," or "),mm=l(F,"CODE",{});var zZ=r(mm);aD=n(zZ,"--warmup_ratio"),zZ.forEach(t),nD=n(F,` to configure a
\u{1F917} Transformers version of it.`),F.forEach(t),Aw=c(e),We=l(e,"P",{});var vc=r(We);oD=n(vc,"Here is an example of the auto-configured "),_m=l(vc,"CODE",{});var TZ=r(_m);lD=n(TZ,"scheduler"),TZ.forEach(t),rD=n(vc," entry for "),vm=l(vc,"CODE",{});var AZ=r(vm);pD=n(AZ,"WarmupLR"),AZ.forEach(t),iD=n(vc,":"),vc.forEach(t),Sw=c(e),d(fl.$$.fragment,e),xw=c(e),Fe=l(e,"P",{});var jc=r(Fe);uD=n(jc,"Since "),jm=l(jc,"EM",{});var SZ=r(jm);cD=n(SZ,"\u201Cauto\u201D"),SZ.forEach(t),hD=n(jc," is used the "),$i=l(jc,"A",{href:!0});var xZ=r($i);fD=n(xZ,"Trainer"),xZ.forEach(t),dD=n(jc,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),jc.forEach(t),Cw=c(e),ae=l(e,"UL",{});var gn=r(ae);da=l(gn,"LI",{});var B1=r(da);gm=l(B1,"CODE",{});var CZ=r(gm);mD=n(CZ,"warmup_min_lr"),CZ.forEach(t),_D=n(B1," with the value of "),wm=l(B1,"CODE",{});var IZ=r(wm);vD=n(IZ,"0"),IZ.forEach(t),jD=n(B1,"."),B1.forEach(t),gD=c(gn),ma=l(gn,"LI",{});var V1=r(ma);ym=l(V1,"CODE",{});var RZ=r(ym);wD=n(RZ,"warmup_max_lr"),RZ.forEach(t),yD=n(V1," with the value of "),bm=l(V1,"CODE",{});var UZ=r(bm);bD=n(UZ,"--learning_rate"),UZ.forEach(t),ED=n(V1,"."),V1.forEach(t),qD=c(gn),Be=l(gn,"LI",{});var Gr=r(Be);Em=l(Gr,"CODE",{});var LZ=r(Em);$D=n(LZ,"warmup_num_steps"),LZ.forEach(t),kD=n(Gr," with the value of "),qm=l(Gr,"CODE",{});var ZZ=r(qm);DD=n(ZZ,"--warmup_steps"),ZZ.forEach(t),PD=n(Gr," if provided. Otherwise will use "),$m=l(Gr,"CODE",{});var GZ=r($m);OD=n(GZ,"--warmup_ratio"),GZ.forEach(t),zD=n(Gr,`
multiplied by the number of training steps and rounded up.`),Gr.forEach(t),TD=c(gn),Ve=l(gn,"LI",{});var Mr=r(Ve);km=l(Mr,"CODE",{});var MZ=r(km);AD=n(MZ,"total_num_steps"),MZ.forEach(t),SD=n(Mr," with either the value of "),Dm=l(Mr,"CODE",{});var NZ=r(Dm);xD=n(NZ,"--max_steps"),NZ.forEach(t),CD=n(Mr,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Pm=l(Mr,"CODE",{});var HZ=r(Pm);ID=n(HZ,"WarmupDecayLR"),HZ.forEach(t),RD=n(Mr,")."),Mr.forEach(t),gn.forEach(t),Iw=c(e),ki=l(e,"P",{});var WZ=r(ki);UD=n(WZ,"You can, of course, take over any or all of the configuration values and set those yourself:"),WZ.forEach(t),Rw=c(e),d(dl.$$.fragment,e),Uw=c(e),_a=l(e,"P",{});var M3=r(_a);LD=n(M3,"But then you\u2019re on your own synchronizing the "),Di=l(M3,"A",{href:!0});var FZ=r(Di);ZD=n(FZ,"Trainer"),FZ.forEach(t),GD=n(M3,` command line arguments and the DeepSpeed
configuration.`),M3.forEach(t),Lw=c(e),va=l(e,"P",{});var N3=r(va);MD=n(N3,"For example, for "),Om=l(N3,"CODE",{});var BZ=r(Om);ND=n(BZ,"WarmupDecayLR"),BZ.forEach(t),HD=n(N3,", you can use the following entry:"),N3.forEach(t),Zw=c(e),d(ml.$$.fragment,e),Gw=c(e),N=l(e,"P",{});var is=r(N);WD=n(is,"and "),zm=l(is,"CODE",{});var VZ=r(zm);FD=n(VZ,"total_num_steps"),VZ.forEach(t),BD=n(is,", "),Tm=l(is,"CODE",{});var YZ=r(Tm);VD=n(YZ,"warmup_max_lr"),YZ.forEach(t),YD=n(is,", "),Am=l(is,"CODE",{});var KZ=r(Am);KD=n(KZ,"warmup_num_steps"),KZ.forEach(t),JD=n(is," and "),Sm=l(is,"CODE",{});var JZ=r(Sm);XD=n(JZ,"total_num_steps"),JZ.forEach(t),QD=n(is," will be set at loading time."),is.forEach(t),Mw=c(e),Pi=l(e,"A",{id:!0}),r(Pi).forEach(t),Nw=c(e),Rs=l(e,"H3",{class:!0});var H3=r(Rs);ja=l(H3,"A",{id:!0,class:!0,href:!0});var XZ=r(ja);xm=l(XZ,"SPAN",{});var QZ=r(xm);d(_l.$$.fragment,QZ),QZ.forEach(t),XZ.forEach(t),eP=c(H3),Cm=l(H3,"SPAN",{});var eG=r(Cm);sP=n(eG,"fp32 Precision"),eG.forEach(t),H3.forEach(t),Hw=c(e),Oi=l(e,"P",{});var sG=r(Oi);tP=n(sG,"Deepspeed supports the full fp32 and the fp16 mixed precision."),sG.forEach(t),Ww=c(e),ga=l(e,"P",{});var W3=r(ga);aP=n(W3,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Im=l(W3,"CODE",{});var tG=r(Im);nP=n(tG,"NaN"),tG.forEach(t),oP=n(W3,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),W3.forEach(t),Fw=c(e),d(vl.$$.fragment,e),Bw=c(e),wa=l(e,"P",{});var F3=r(wa);lP=n(F3,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),jl=l(F3,"A",{href:!0,rel:!0});var aG=r(jl);rP=n(aG,"TensorFloat-32(TF32) on Ampere devices"),aG.forEach(t),pP=n(F3,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),F3.forEach(t),Vw=c(e),zi=l(e,"A",{id:!0}),r(zi).forEach(t),Yw=c(e),Us=l(e,"H3",{class:!0});var B3=r(Us);ya=l(B3,"A",{id:!0,class:!0,href:!0});var nG=r(ya);Rm=l(nG,"SPAN",{});var oG=r(Rm);d(gl.$$.fragment,oG),oG.forEach(t),nG.forEach(t),iP=c(B3),Um=l(B3,"SPAN",{});var lG=r(Um);uP=n(lG,"Automatic Mixed Precision"),lG.forEach(t),B3.forEach(t),Kw=c(e),Ti=l(e,"P",{});var rG=r(Ti);cP=n(rG,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),rG.forEach(t),Jw=c(e),Ai=l(e,"P",{});var pG=r(Ai);hP=n(pG,"To configure pytorch AMP-like mode set:"),pG.forEach(t),Xw=c(e),d(wl.$$.fragment,e),Qw=c(e),Ye=l(e,"P",{});var gc=r(Ye);fP=n(gc,"and the "),Si=l(gc,"A",{href:!0});var iG=r(Si);dP=n(iG,"Trainer"),iG.forEach(t),mP=n(gc,` will automatically enable or disable it based on the value of
`),Lm=l(gc,"CODE",{});var uG=r(Lm);_P=n(uG,"args.fp16_backend"),uG.forEach(t),vP=n(gc,". The rest of config values are up to you."),gc.forEach(t),ey=c(e),ba=l(e,"P",{});var V3=r(ba);jP=n(V3,"This mode gets enabled when "),Zm=l(V3,"CODE",{});var cG=r(Zm);gP=n(cG,"--fp16 --fp16_backend amp"),cG.forEach(t),wP=n(V3," command line args are passed."),V3.forEach(t),sy=c(e),xi=l(e,"P",{});var hG=r(xi);yP=n(hG,"You can also enable/disable this mode explicitly:"),hG.forEach(t),ty=c(e),d(yl.$$.fragment,e),ay=c(e),Ea=l(e,"P",{});var Y3=r(Ea);bP=n(Y3,"But then you\u2019re on your own synchronizing the "),Ci=l(Y3,"A",{href:!0});var fG=r(Ci);EP=n(fG,"Trainer"),fG.forEach(t),qP=n(Y3,` command line arguments and the DeepSpeed
configuration.`),Y3.forEach(t),ny=c(e),qa=l(e,"P",{});var K3=r(qa);$P=n(K3,"Here is the "),bl=l(K3,"A",{href:!0,rel:!0});var dG=r(bl);kP=n(dG,"documentation"),dG.forEach(t),DP=n(K3,"."),K3.forEach(t),oy=c(e),Ii=l(e,"P",{});var mG=r(Ii);PP=n(mG,"To configure apex AMP-like mode set:"),mG.forEach(t),ly=c(e),d(El.$$.fragment,e),ry=c(e),ne=l(e,"P",{});var wn=r(ne);OP=n(wn,"and the "),Ri=l(wn,"A",{href:!0});var _G=r(Ri);zP=n(_G,"Trainer"),_G.forEach(t),TP=n(wn," will automatically configure it based on the values of "),Gm=l(wn,"CODE",{});var vG=r(Gm);AP=n(vG,"args.fp16_backend"),vG.forEach(t),SP=n(wn,` and
`),Mm=l(wn,"CODE",{});var jG=r(Mm);xP=n(jG,"args.fp16_opt_level"),jG.forEach(t),CP=n(wn,"."),wn.forEach(t),py=c(e),$a=l(e,"P",{});var J3=r($a);IP=n(J3,"This mode gets enabled when "),Nm=l(J3,"CODE",{});var gG=r(Nm);RP=n(gG,"--fp16 --fp16_backend apex --fp16_opt_level 01"),gG.forEach(t),UP=n(J3," command line args are passed."),J3.forEach(t),iy=c(e),Ui=l(e,"P",{});var wG=r(Ui);LP=n(wG,"You can also configure this mode explicitly:"),wG.forEach(t),uy=c(e),d(ql.$$.fragment,e),cy=c(e),ka=l(e,"P",{});var X3=r(ka);ZP=n(X3,"But then you\u2019re on your own synchronizing the "),Li=l(X3,"A",{href:!0});var yG=r(Li);GP=n(yG,"Trainer"),yG.forEach(t),MP=n(X3,` command line arguments and the DeepSpeed
configuration.`),X3.forEach(t),hy=c(e),Da=l(e,"P",{});var Q3=r(Da);NP=n(Q3,"Here is the "),$l=l(Q3,"A",{href:!0,rel:!0});var bG=r($l);HP=n(bG,"documentation"),bG.forEach(t),WP=n(Q3,"."),Q3.forEach(t),fy=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),dy=c(e),Ls=l(e,"H3",{class:!0});var eE=r(Ls);Pa=l(eE,"A",{id:!0,class:!0,href:!0});var EG=r(Pa);Hm=l(EG,"SPAN",{});var qG=r(Hm);d(kl.$$.fragment,qG),qG.forEach(t),EG.forEach(t),FP=c(eE),Wm=l(eE,"SPAN",{});var $G=r(Wm);BP=n($G,"Batch Size"),$G.forEach(t),eE.forEach(t),my=c(e),Gi=l(e,"P",{});var kG=r(Gi);VP=n(kG,"To configure batch size, use:"),kG.forEach(t),_y=c(e),d(Dl.$$.fragment,e),vy=c(e),C=l(e,"P",{});var de=r(C);YP=n(de,"and the "),Mi=l(de,"A",{href:!0});var DG=r(Mi);KP=n(DG,"Trainer"),DG.forEach(t),JP=n(de," will automatically set "),Fm=l(de,"CODE",{});var PG=r(Fm);XP=n(PG,"train_micro_batch_size_per_gpu"),PG.forEach(t),QP=n(de,` to the value of
`),Bm=l(de,"CODE",{});var OG=r(Bm);eO=n(OG,"args.per_device_train_batch_size"),OG.forEach(t),sO=n(de," and "),Vm=l(de,"CODE",{});var zG=r(Vm);tO=n(zG,"train_batch_size"),zG.forEach(t),aO=n(de," to "),Ym=l(de,"CODE",{});var TG=r(Ym);nO=n(TG,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),TG.forEach(t),oO=n(de,"."),de.forEach(t),jy=c(e),Ni=l(e,"P",{});var AG=r(Ni);lO=n(AG,"You can also set the values explicitly:"),AG.forEach(t),gy=c(e),d(Pl.$$.fragment,e),wy=c(e),Oa=l(e,"P",{});var sE=r(Oa);rO=n(sE,"But then you\u2019re on your own synchronizing the "),Hi=l(sE,"A",{href:!0});var SG=r(Hi);pO=n(SG,"Trainer"),SG.forEach(t),iO=n(sE,` command line arguments and the DeepSpeed
configuration.`),sE.forEach(t),yy=c(e),Wi=l(e,"A",{id:!0}),r(Wi).forEach(t),by=c(e),Zs=l(e,"H3",{class:!0});var tE=r(Zs);za=l(tE,"A",{id:!0,class:!0,href:!0});var xG=r(za);Km=l(xG,"SPAN",{});var CG=r(Km);d(Ol.$$.fragment,CG),CG.forEach(t),xG.forEach(t),uO=c(tE),Jm=l(tE,"SPAN",{});var IG=r(Jm);cO=n(IG,"Gradient Accumulation"),IG.forEach(t),tE.forEach(t),Ey=c(e),Fi=l(e,"P",{});var RG=r(Fi);hO=n(RG,"To configure gradient accumulation set:"),RG.forEach(t),qy=c(e),d(zl.$$.fragment,e),$y=c(e),Ke=l(e,"P",{});var wc=r(Ke);fO=n(wc,"and the "),Bi=l(wc,"A",{href:!0});var UG=r(Bi);dO=n(UG,"Trainer"),UG.forEach(t),mO=n(wc," will automatically set it to the value of "),Xm=l(wc,"CODE",{});var LG=r(Xm);_O=n(LG,"args.gradient_accumulation_steps"),LG.forEach(t),vO=n(wc,"."),wc.forEach(t),ky=c(e),Vi=l(e,"P",{});var ZG=r(Vi);jO=n(ZG,"You can also set the value explicitly:"),ZG.forEach(t),Dy=c(e),d(Tl.$$.fragment,e),Py=c(e),Ta=l(e,"P",{});var aE=r(Ta);gO=n(aE,"But then you\u2019re on your own synchronizing the "),Yi=l(aE,"A",{href:!0});var GG=r(Yi);wO=n(GG,"Trainer"),GG.forEach(t),yO=n(aE,` command line arguments and the DeepSpeed
configuration.`),aE.forEach(t),Oy=c(e),Ki=l(e,"A",{id:!0}),r(Ki).forEach(t),zy=c(e),Gs=l(e,"H3",{class:!0});var nE=r(Gs);Aa=l(nE,"A",{id:!0,class:!0,href:!0});var MG=r(Aa);Qm=l(MG,"SPAN",{});var NG=r(Qm);d(Al.$$.fragment,NG),NG.forEach(t),MG.forEach(t),bO=c(nE),e_=l(nE,"SPAN",{});var HG=r(e_);EO=n(HG,"Gradient Clipping"),HG.forEach(t),nE.forEach(t),Ty=c(e),Ji=l(e,"P",{});var WG=r(Ji);qO=n(WG,"To configure gradient gradient clipping set:"),WG.forEach(t),Ay=c(e),d(Sl.$$.fragment,e),Sy=c(e),Je=l(e,"P",{});var yc=r(Je);$O=n(yc,"and the "),Xi=l(yc,"A",{href:!0});var FG=r(Xi);kO=n(FG,"Trainer"),FG.forEach(t),DO=n(yc," will automatically set it to the value of "),s_=l(yc,"CODE",{});var BG=r(s_);PO=n(BG,"args.max_grad_norm"),BG.forEach(t),OO=n(yc,"."),yc.forEach(t),xy=c(e),Qi=l(e,"P",{});var VG=r(Qi);zO=n(VG,"You can also set the value explicitly:"),VG.forEach(t),Cy=c(e),d(xl.$$.fragment,e),Iy=c(e),Sa=l(e,"P",{});var oE=r(Sa);TO=n(oE,"But then you\u2019re on your own synchronizing the "),eu=l(oE,"A",{href:!0});var YG=r(eu);AO=n(YG,"Trainer"),YG.forEach(t),SO=n(oE,` command line arguments and the DeepSpeed
configuration.`),oE.forEach(t),Ry=c(e),su=l(e,"A",{id:!0}),r(su).forEach(t),Uy=c(e),Ms=l(e,"H3",{class:!0});var lE=r(Ms);xa=l(lE,"A",{id:!0,class:!0,href:!0});var KG=r(xa);t_=l(KG,"SPAN",{});var JG=r(t_);d(Cl.$$.fragment,JG),JG.forEach(t),KG.forEach(t),xO=c(lE),a_=l(lE,"SPAN",{});var XG=r(a_);CO=n(XG,"Getting The Model Weights Out"),XG.forEach(t),lE.forEach(t),Ly=c(e),Ca=l(e,"P",{});var rE=r(Ca);IO=n(rE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),n_=l(rE,"CODE",{});var QG=r(n_);RO=n(QG,"global_step*/*optim_states.pt"),QG.forEach(t),UO=n(rE,` (this is glob
pattern), and are saved under the normal checkpoint.`),rE.forEach(t),Zy=c(e),tu=l(e,"P",{});var eM=r(tu);o_=l(eM,"STRONG",{});var sM=r(o_);LO=n(sM,"FP16 Weights:"),sM.forEach(t),eM.forEach(t),Gy=c(e),Ia=l(e,"P",{});var pE=r(Ia);ZO=n(pE,"When a model is saved under ZeRO-2, you end up having the normal "),l_=l(pE,"CODE",{});var tM=r(l_);GO=n(tM,"pytorch_model.bin"),tM.forEach(t),MO=n(pE,` file with the model weights, but
they are only the fp16 version of the weights.`),pE.forEach(t),My=c(e),H=l(e,"P",{});var us=r(H);NO=n(us,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),r_=l(us,"CODE",{});var aM=r(r_);HO=n(aM,'"stage3_gather_fp16_weights_on_model_save": true'),aM.forEach(t),WO=n(us," is required to get the "),p_=l(us,"CODE",{});var nM=r(p_);FO=n(nM,"Trainer"),nM.forEach(t),BO=n(us,` to save the fp16
version of the weights. If this setting is `),i_=l(us,"CODE",{});var oM=r(i_);VO=n(oM,"False"),oM.forEach(t),YO=c(us),u_=l(us,"CODE",{});var lM=r(u_);KO=n(lM,"pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),lM.forEach(t),JO=n(us,` it
won\u2019t be possible to load it back.`),us.forEach(t),Ny=c(e),d(Il.$$.fragment,e),Hy=c(e),au=l(e,"P",{});var rM=r(au);c_=l(rM,"STRONG",{});var pM=r(c_);XO=n(pM,"FP32 Weights:"),pM.forEach(t),rM.forEach(t),Wy=c(e),Ra=l(e,"P",{});var iE=r(Ra);QO=n(iE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Rl=l(iE,"A",{href:!0,rel:!0});var iM=r(Rl);ez=n(iM,"models hub"),iM.forEach(t),sz=n(iE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),iE.forEach(t),Fy=c(e),nu=l(e,"P",{});var uM=r(nu);h_=l(uM,"STRONG",{});var cM=r(h_);tz=n(cM,"Live FP32 Weights Recovery:"),cM.forEach(t),uM.forEach(t),By=c(e),ou=l(e,"P",{});var hM=r(ou);az=n(hM,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),hM.forEach(t),Vy=c(e),lu=l(e,"P",{});var fM=r(lu);nz=n(fM,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),fM.forEach(t),Yy=c(e),d(Ul.$$.fragment,e),Ky=c(e),Xe=l(e,"P",{});var bc=r(Xe);oz=n(bc,"If you\u2019re using the "),f_=l(bc,"CODE",{});var dM=r(f_);lz=n(dM,"--load_best_model_at_end"),dM.forEach(t),rz=n(bc," class:"),d_=l(bc,"EM",{});var mM=r(d_);pz=n(mM,"~transformers.TrainingArguments"),mM.forEach(t),iz=n(bc,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),bc.forEach(t),Jy=c(e),d(Ll.$$.fragment,e),Xy=c(e),d(Ua.$$.fragment,e),Qy=c(e),La=l(e,"P",{});var uE=r(La);uz=n(uE,"Of course, you don\u2019t have to use class:"),m_=l(uE,"EM",{});var _M=r(m_);cz=n(_M,"~transformers.Trainer"),_M.forEach(t),hz=n(uE,` and you can adjust the examples above to your own
trainer.`),uE.forEach(t),e2=c(e),Za=l(e,"P",{});var cE=r(Za);fz=n(cE,"If for some reason you want more refinement, you can also extract the fp32 "),__=l(cE,"CODE",{});var vM=r(__);dz=n(vM,"state_dict"),vM.forEach(t),mz=n(cE,` of the weights and apply
these yourself as is shown in the following example:`),cE.forEach(t),s2=c(e),d(Zl.$$.fragment,e),t2=c(e),ru=l(e,"P",{});var jM=r(ru);v_=l(jM,"STRONG",{});var gM=r(v_);_z=n(gM,"Offline FP32 Weights Recovery:"),gM.forEach(t),jM.forEach(t),a2=c(e),Qe=l(e,"P",{});var Ec=r(Qe);vz=n(Ec,"DeepSpeed creates a special conversion script "),j_=l(Ec,"CODE",{});var wM=r(j_);jz=n(wM,"zero_to_fp32.py"),wM.forEach(t),gz=n(Ec,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),g_=l(Ec,"CODE",{});var yM=r(g_);wz=n(yM,"Trainer"),yM.forEach(t),yz=n(Ec," to do the extraction."),Ec.forEach(t),n2=c(e),pu=l(e,"P",{});var bM=r(pu);bz=n(bM,"Let\u2019s say your checkpoint folder looks like this:"),bM.forEach(t),o2=c(e),d(Gl.$$.fragment,e),l2=c(e),Ga=l(e,"P",{});var hE=r(Ga);Ez=n(hE,"In this example there is just one DeepSpeed checkpoint sub-folder "),w_=l(hE,"EM",{});var EM=r(w_);qz=n(EM,"global_step1"),EM.forEach(t),$z=n(hE,`. Therefore to reconstruct the fp32
weights just run:`),hE.forEach(t),r2=c(e),d(Ml.$$.fragment,e),p2=c(e),Ma=l(e,"P",{});var fE=r(Ma);kz=n(fE,"This is it. "),y_=l(fE,"CODE",{});var qM=r(y_);Dz=n(qM,"pytorch_model.bin"),qM.forEach(t),Pz=n(fE," will now contain the full fp32 model weights consolidated from multiple GPUs."),fE.forEach(t),i2=c(e),iu=l(e,"P",{});var $M=r(iu);Oz=n($M,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),$M.forEach(t),u2=c(e),Nl=l(e,"P",{});var Hx=r(Nl);b_=l(Hx,"CODE",{});var kM=r(b_);zz=n(kM,"python zero_to_fp32.py -h"),kM.forEach(t),Tz=n(Hx," will give you usage details."),Hx.forEach(t),c2=c(e),es=l(e,"P",{});var qc=r(es);Az=n(qc,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=l(qc,"CODE",{});var DM=r(E_);Sz=n(DM,"latest"),DM.forEach(t),xz=n(qc,`, which in the current
example will contain `),q_=l(qc,"CODE",{});var PM=r(q_);Cz=n(PM,"global_step1"),PM.forEach(t),Iz=n(qc,"."),qc.forEach(t),h2=c(e),uu=l(e,"P",{});var OM=r(uu);Rz=n(OM,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),OM.forEach(t),f2=c(e),Ns=l(e,"H3",{class:!0});var dE=r(Ns);Na=l(dE,"A",{id:!0,class:!0,href:!0});var zM=r(Na);$_=l(zM,"SPAN",{});var TM=r($_);d(Hl.$$.fragment,TM),TM.forEach(t),zM.forEach(t),Uz=c(dE),k_=l(dE,"SPAN",{});var AM=r(k_);Lz=n(AM,"ZeRO-3 and Infinity Nuances"),AM.forEach(t),dE.forEach(t),d2=c(e),cu=l(e,"P",{});var SM=r(cu);Zz=n(SM,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),SM.forEach(t),m2=c(e),hu=l(e,"P",{});var xM=r(hu);Gz=n(xM,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),xM.forEach(t),_2=c(e),fu=l(e,"P",{});var CM=r(fu);Mz=n(CM,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),CM.forEach(t),v2=c(e),Hs=l(e,"H4",{class:!0});var mE=r(Hs);Ha=l(mE,"A",{id:!0,class:!0,href:!0});var IM=r(Ha);D_=l(IM,"SPAN",{});var RM=r(D_);d(Wl.$$.fragment,RM),RM.forEach(t),IM.forEach(t),Nz=c(mE),P_=l(mE,"SPAN",{});var UM=r(P_);Hz=n(UM,"Constructing Massive Models"),UM.forEach(t),mE.forEach(t),j2=c(e),Wa=l(e,"P",{});var _E=r(Wa);Wz=n(_E,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),O_=l(_E,"EM",{});var LM=r(O_);Fz=n(LM,"deepspeed.zero.Init()"),LM.forEach(t),Bz=n(_E,`
context manager (which is also a function decorator), like so:`),_E.forEach(t),g2=c(e),d(Fl.$$.fragment,e),w2=c(e),du=l(e,"P",{});var ZM=r(du);Vz=n(ZM,"As you can see this gives you a randomly initialized model."),ZM.forEach(t),y2=c(e),k=l(e,"P",{});var R=r(k);Yz=n(R,"If you want to use a pretrained model, "),z_=l(R,"CODE",{});var GM=r(z_);Kz=n(GM,"model_class.from_pretrained"),GM.forEach(t),Jz=n(R,` will activate this feature as long as
`),T_=l(R,"CODE",{});var MM=r(T_);Xz=n(MM,"is_deepspeed_zero3_enabled()"),MM.forEach(t),Qz=n(R," returns "),A_=l(R,"CODE",{});var NM=r(A_);eT=n(NM,"True"),NM.forEach(t),sT=n(R,`, which currently is setup by the
`),mu=l(R,"A",{href:!0});var HM=r(mu);tT=n(HM,"TrainingArguments"),HM.forEach(t),aT=n(R,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),_u=l(R,"A",{href:!0});var WM=r(_u);nT=n(WM,"TrainingArguments"),WM.forEach(t),oT=n(R," object "),S_=l(R,"STRONG",{});var FM=r(S_);lT=n(FM,"before"),FM.forEach(t),rT=n(R,` calling
`),x_=l(R,"CODE",{});var BM=r(x_);pT=n(BM,"from_pretrained"),BM.forEach(t),iT=n(R,". Here is an example of a possible sequence:"),R.forEach(t),b2=c(e),d(Bl.$$.fragment,e),E2=c(e),Fa=l(e,"P",{});var vE=r(Fa);uT=n(vE,"If you\u2019re using the official example scripts and your command line arguments include "),C_=l(vE,"CODE",{});var VM=r(C_);cT=n(VM,"--deepspeed ds_config.json"),VM.forEach(t),hT=n(vE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),vE.forEach(t),q2=c(e),vu=l(e,"P",{});var YM=r(vu);fT=n(YM,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),YM.forEach(t),$2=c(e),Ba=l(e,"P",{});var jE=r(Ba);dT=n(jE,"For full details on this method and other related features please refer to "),Vl=l(jE,"A",{href:!0,rel:!0});var KM=r(Vl);mT=n(KM,"Constructing Massive Models"),KM.forEach(t),_T=n(jE,"."),jE.forEach(t),k2=c(e),oe=l(e,"P",{});var yn=r(oe);vT=n(yn,"Also when loading fp16-pretrained models, you will want to tell "),I_=l(yn,"CODE",{});var JM=r(I_);jT=n(JM,"from_pretrained"),JM.forEach(t),gT=n(yn,` to use
`),R_=l(yn,"CODE",{});var XM=r(R_);wT=n(XM,"torch_dtype=torch.float16"),XM.forEach(t),yT=n(yn,". For details, please, see "),ju=l(yn,"A",{href:!0});var QM=r(ju);bT=n(QM,"from_pretrained-torch-dtype"),QM.forEach(t),ET=n(yn,"."),yn.forEach(t),D2=c(e),Ws=l(e,"H4",{class:!0});var gE=r(Ws);Va=l(gE,"A",{id:!0,class:!0,href:!0});var eN=r(Va);U_=l(eN,"SPAN",{});var sN=r(U_);d(Yl.$$.fragment,sN),sN.forEach(t),eN.forEach(t),qT=c(gE),L_=l(gE,"SPAN",{});var tN=r(L_);$T=n(tN,"Gathering Parameters"),tN.forEach(t),gE.forEach(t),P2=c(e),Kl=l(e,"P",{});var Wx=r(Kl);kT=n(Wx,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Jl=l(Wx,"A",{href:!0,rel:!0});var aN=r(Jl);DT=n(aN,"Gathering Parameters"),aN.forEach(t),Wx.forEach(t),O2=c(e),Ya=l(e,"P",{});var wE=r(Ya);PT=n(wE,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),Z_=l(wE,"CODE",{});var nN=r(Z_);OT=n(nN,"from_pretrained"),nN.forEach(t),zT=n(wE,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),wE.forEach(t),z2=c(e),gu=l(e,"P",{});var oN=r(gu);TT=n(oN,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),oN.forEach(t),T2=c(e),d(Xl.$$.fragment,e),A2=c(e),ss=l(e,"P",{});var $c=r(ss);AT=n($c,"stress on "),G_=l($c,"CODE",{});var lN=r(G_);ST=n(lN,"tensor([1.])"),lN.forEach(t),xT=n($c,", or if you get an error where it says the parameter is of size "),M_=l($c,"CODE",{});var rN=r(M_);CT=n(rN,"1"),rN.forEach(t),IT=n($c,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),$c.forEach(t),S2=c(e),wu=l(e,"A",{id:!0}),r(wu).forEach(t),x2=c(e),Fs=l(e,"H3",{class:!0});var yE=r(Fs);Ka=l(yE,"A",{id:!0,class:!0,href:!0});var pN=r(Ka);N_=l(pN,"SPAN",{});var iN=r(N_);d(Ql.$$.fragment,iN),iN.forEach(t),pN.forEach(t),RT=c(yE),H_=l(yE,"SPAN",{});var uN=r(H_);UT=n(uN,"ZeRO Inference"),uN.forEach(t),yE.forEach(t),C2=c(e),yu=l(e,"P",{});var cN=r(yu);LT=n(cN,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),cN.forEach(t),I2=c(e),Ja=l(e,"P",{});var bE=r(Ja);ZT=n(bE,"Otherwise you just need to pass the usual "),bu=l(bE,"A",{href:!0});var hN=r(bu);GT=n(hN,"TrainingArguments"),hN.forEach(t),MT=n(bE," arguments. For example:"),bE.forEach(t),R2=c(e),d(er.$$.fragment,e),U2=c(e),Eu=l(e,"P",{});var fN=r(Eu);NT=n(fN,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),fN.forEach(t),L2=c(e),Xa=l(e,"P",{});var EE=r(Xa);HT=n(EE,"Here is an example of running "),W_=l(EE,"CODE",{});var dN=r(W_);WT=n(dN,"run_translation.py"),dN.forEach(t),FT=n(EE," under DeepSpeed deploying all available GPUs:"),EE.forEach(t),Z2=c(e),d(sr.$$.fragment,e),G2=c(e),qu=l(e,"P",{});var mN=r(qu);BT=n(mN,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),mN.forEach(t),M2=c(e),$u=l(e,"P",{});var _N=r($u);VT=n(_N,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),_N.forEach(t),N2=c(e),Bs=l(e,"H3",{class:!0});var qE=r(Bs);Qa=l(qE,"A",{id:!0,class:!0,href:!0});var vN=r(Qa);F_=l(vN,"SPAN",{});var jN=r(F_);d(tr.$$.fragment,jN),jN.forEach(t),vN.forEach(t),YT=c(qE),B_=l(qE,"SPAN",{});var gN=r(B_);KT=n(gN,"Filing Issues"),gN.forEach(t),qE.forEach(t),H2=c(e),ku=l(e,"P",{});var wN=r(ku);JT=n(wN,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),wN.forEach(t),W2=c(e),Du=l(e,"P",{});var yN=r(Du);XT=n(yN,"In your report please always include:"),yN.forEach(t),F2=c(e),I=l(e,"OL",{});var me=r(I);V_=l(me,"LI",{});var bN=r(V_);Y_=l(bN,"P",{});var EN=r(Y_);QT=n(EN,"the full Deepspeed config file in the report"),EN.forEach(t),bN.forEach(t),eA=c(me),K_=l(me,"LI",{});var qN=r(K_);we=l(qN,"P",{});var bn=r(we);sA=n(bn,"either the command line arguments if you were using the "),Pu=l(bn,"A",{href:!0});var $N=r(Pu);tA=n($N,"Trainer"),$N.forEach(t),aA=n(bn,` or
`),Ou=l(bn,"A",{href:!0});var kN=r(Ou);nA=n(kN,"TrainingArguments"),kN.forEach(t),oA=n(bn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),zu=l(bn,"A",{href:!0});var DN=r(zu);lA=n(DN,"TrainingArguments"),DN.forEach(t),rA=n(bn," as it has dozens of entries that are irrelevant."),bn.forEach(t),qN.forEach(t),pA=c(me),ar=l(me,"LI",{});var $E=r(ar);J_=l($E,"P",{});var PN=r(J_);iA=n(PN,"Output of:"),PN.forEach(t),uA=c($E),d(nr.$$.fragment,$E),$E.forEach(t),cA=c(me),X_=l(me,"LI",{});var ON=r(X_);or=l(ON,"P",{});var kE=r(or);hA=n(kE,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),lr=l(kE,"A",{href:!0,rel:!0});var zN=r(lr);fA=n(zN,"notebook"),zN.forEach(t),dA=n(kE,` as
a starting point.`),kE.forEach(t),ON.forEach(t),mA=c(me),Q_=l(me,"LI",{});var TN=r(Q_);e1=l(TN,"P",{});var AN=r(e1);_A=n(AN,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),AN.forEach(t),TN.forEach(t),vA=c(me),s1=l(me,"LI",{});var SN=r(s1);rr=l(SN,"P",{});var DE=r(rr);jA=n(DE,"If possible try to use one of the existing "),pr=l(DE,"A",{href:!0,rel:!0});var xN=r(pr);gA=n(xN,"examples"),xN.forEach(t),wA=n(DE," to reproduce the problem with."),DE.forEach(t),SN.forEach(t),me.forEach(t),B2=c(e),Tu=l(e,"P",{});var CN=r(Tu);yA=n(CN,"Things to consider:"),CN.forEach(t),V2=c(e),en=l(e,"UL",{});var PE=r(en);Vs=l(PE,"LI",{});var kc=r(Vs);t1=l(kc,"P",{});var IN=r(t1);bA=n(IN,"Deepspeed is often not the cause of the problem."),IN.forEach(t),EA=c(kc),a1=l(kc,"P",{});var RN=r(a1);qA=n(RN,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),RN.forEach(t),$A=c(kc),n1=l(kc,"P",{});var UN=r(n1);kA=n(UN,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),UN.forEach(t),kc.forEach(t),DA=c(PE),o1=l(PE,"LI",{});var LN=r(o1);ir=l(LN,"P",{});var OE=r(ir);PA=n(OE,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),ur=l(OE,"A",{href:!0,rel:!0});var ZN=r(ur);OA=n(ZN,"Deepspeed"),ZN.forEach(t),zA=n(OE,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),OE.forEach(t),LN.forEach(t),PE.forEach(t),Y2=c(e),Ys=l(e,"H3",{class:!0});var zE=r(Ys);sn=l(zE,"A",{id:!0,class:!0,href:!0});var GN=r(sn);l1=l(GN,"SPAN",{});var MN=r(l1);d(cr.$$.fragment,MN),MN.forEach(t),GN.forEach(t),TA=c(zE),r1=l(zE,"SPAN",{});var NN=r(r1);AA=n(NN,"Troubleshooting"),NN.forEach(t),zE.forEach(t),K2=c(e),Au=l(e,"UL",{});var HN=r(Au);Su=l(HN,"LI",{});var Fx=r(Su);p1=l(Fx,"CODE",{});var WN=r(p1);SA=n(WN,"deepspeed"),WN.forEach(t),xA=n(Fx," process gets killed at startup without a traceback"),Fx.forEach(t),HN.forEach(t),J2=c(e),W=l(e,"P",{});var cs=r(W);CA=n(cs,"If the "),i1=l(cs,"CODE",{});var FN=r(i1);IA=n(FN,"deepspeed"),FN.forEach(t),RA=n(cs,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),u1=l(cs,"CODE",{});var BN=r(u1);UA=n(BN,"offload_optimizer"),BN.forEach(t),LA=n(cs," or "),c1=l(cs,"CODE",{});var VN=r(c1);ZA=n(VN,"offload_param"),VN.forEach(t),GA=n(cs,` or
both configured to offload to `),h1=l(cs,"CODE",{});var YN=r(h1);MA=n(YN,"cpu"),YN.forEach(t),NA=n(cs,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),cs.forEach(t),X2=c(e),tn=l(e,"P",{});var TE=r(tn);HA=n(TE,"Work is being done to enable estimating how much memory is needed for a specific model: "),hr=l(TE,"A",{href:!0,rel:!0});var KN=r(hr);WA=n(KN,"PR"),KN.forEach(t),FA=n(TE,"."),TE.forEach(t),Q2=c(e),Ks=l(e,"H3",{class:!0});var AE=r(Ks);an=l(AE,"A",{id:!0,class:!0,href:!0});var JN=r(an);f1=l(JN,"SPAN",{});var XN=r(f1);d(fr.$$.fragment,XN),XN.forEach(t),JN.forEach(t),BA=c(AE),d1=l(AE,"SPAN",{});var QN=r(d1);VA=n(QN,"Notes"),QN.forEach(t),AE.forEach(t),eb=c(e),ts=l(e,"UL",{});var Dc=r(ts);Js=l(Dc,"LI",{});var Pc=r(Js);YA=n(Pc,"DeepSpeed works with the PyTorch "),xu=l(Pc,"A",{href:!0});var eH=r(xu);KA=n(eH,"Trainer"),eH.forEach(t),JA=n(Pc," but not TF "),m1=l(Pc,"CODE",{});var sH=r(m1);XA=n(sH,"TFTrainer"),sH.forEach(t),QA=n(Pc,"."),Pc.forEach(t),eS=c(Dc),dr=l(Dc,"LI",{});var SE=r(dr);sS=n(SE,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),mr=l(SE,"A",{href:!0,rel:!0});var tH=r(mr);tS=n(tH,"source"),tH.forEach(t),aS=n(SE,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),SE.forEach(t),nS=c(Dc),Xs=l(Dc,"LI",{});var Oc=r(Xs);oS=n(Oc,"You don\u2019t have to use the "),Cu=l(Oc,"A",{href:!0});var aH=r(Cu);lS=n(aH,"Trainer"),aH.forEach(t),rS=n(Oc,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),_r=l(Oc,"A",{href:!0,rel:!0});var nH=r(_r);pS=n(nH,"the DeepSpeed integration instructions"),nH.forEach(t),iS=n(Oc,"."),Oc.forEach(t),Dc.forEach(t),sb=c(e),Iu=l(e,"A",{id:!0}),r(Iu).forEach(t),tb=c(e),Qs=l(e,"H2",{class:!0});var xE=r(Qs);nn=l(xE,"A",{id:!0,class:!0,href:!0});var oH=r(nn);_1=l(oH,"SPAN",{});var lH=r(_1);d(vr.$$.fragment,lH),lH.forEach(t),oH.forEach(t),uS=c(xE),v1=l(xE,"SPAN",{});var rH=r(v1);cS=n(rH,"Non-Trainer Deepspeed Integration"),rH.forEach(t),xE.forEach(t),ab=c(e),as=l(e,"P",{});var zc=r(as);hS=n(zc,"The "),j1=l(zc,"CODE",{});var pH=r(j1);fS=n(pH,"HfDeepSpeedConfig"),pH.forEach(t),dS=n(zc,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Ru=l(zc,"A",{href:!0});var iH=r(Ru);mS=n(iH,"Trainer"),iH.forEach(t),_S=n(zc," is not used."),zc.forEach(t),nb=c(e),on=l(e,"P",{});var CE=r(on);vS=n(CE,"When using "),Uu=l(CE,"A",{href:!0});var uH=r(Uu);jS=n(uH,"Trainer"),uH.forEach(t),gS=n(CE," everything is automatically taken care of."),CE.forEach(t),ob=c(e),ns=l(e,"P",{});var Tc=r(ns);wS=n(Tc,"When not using "),Lu=l(Tc,"A",{href:!0});var cH=r(Lu);yS=n(cH,"Trainer"),cH.forEach(t),bS=n(Tc,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),g1=l(Tc,"CODE",{});var hH=r(g1);ES=n(hH,"HfDeepSpeedConfig"),hH.forEach(t),qS=n(Tc," object before instantiating the model."),Tc.forEach(t),lb=c(e),Zu=l(e,"P",{});var fH=r(Zu);$S=n(fH,"For example for a pretrained model:"),fH.forEach(t),rb=c(e),d(jr.$$.fragment,e),pb=c(e),Gu=l(e,"P",{});var dH=r(Gu);kS=n(dH,"or for non-pretrained model:"),dH.forEach(t),ib=c(e),d(gr.$$.fragment,e),ub=c(e),et=l(e,"H2",{class:!0});var IE=r(et);ln=l(IE,"A",{id:!0,class:!0,href:!0});var mH=r(ln);w1=l(mH,"SPAN",{});var _H=r(w1);d(wr.$$.fragment,_H),_H.forEach(t),mH.forEach(t),DS=c(IE),y1=l(IE,"SPAN",{});var vH=r(y1);PS=n(vH,"HfDeepSpeedConfig"),vH.forEach(t),IE.forEach(t),cb=c(e),q=l(e,"DIV",{class:!0});var U=r(q);d(yr.$$.fragment,U),OS=c(U),b1=l(U,"P",{});var jH=r(b1);zS=n(jH,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),jH.forEach(t),TS=c(U),ye=l(U,"P",{});var En=r(ye);AS=n(En,"A "),E1=l(En,"CODE",{});var gH=r(E1);SS=n(gH,"weakref"),gH.forEach(t),xS=n(En,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),q1=l(En,"CODE",{});var wH=r(q1);CS=n(wH,"from_pretrained"),wH.forEach(t),IS=n(En," and "),$1=l(En,"CODE",{});var yH=r($1);RS=n(yH,"_get_resized_embeddings"),yH.forEach(t),US=n(En,`).
Therefore it\u2019s important that this object remains alive while the program is still running.`),En.forEach(t),LS=c(U),le=l(U,"P",{});var ot=r(le);Mu=l(ot,"A",{href:!0});var bH=r(Mu);ZS=n(bH,"Trainer"),bH.forEach(t),GS=n(ot," uses the "),k1=l(ot,"CODE",{});var EH=r(k1);MS=n(EH,"HfTrainerDeepSpeedConfig"),EH.forEach(t),NS=n(ot,` subclass instead. That subclass has logic to
sync the configuration with values of `),Nu=l(ot,"A",{href:!0});var qH=r(Nu);HS=n(qH,"TrainingArguments"),qH.forEach(t),WS=n(ot,` by replacing special placeholder
values: `),D1=l(ot,"CODE",{});var $H=r(D1);FS=n($H,'"auto"'),$H.forEach(t),BS=n(ot,". Without this special logic the DeepSpeed configuration is not modified in any way."),ot.forEach(t),VS=c(U),os=l(U,"DIV",{class:!0});var Ac=r(os);d(br.$$.fragment,Ac),YS=c(Ac),P1=l(Ac,"P",{});var kH=r(P1);KS=n(kH,"Deletes a sub-section of the config file if it\u2019s found."),kH.forEach(t),JS=c(Ac),st=l(Ac,"P",{});var Sc=r(st);XS=n(Sc,"Unless "),O1=l(Sc,"CODE",{});var DH=r(O1);QS=n(DH,"must_exist"),DH.forEach(t),ex=n(Sc," is "),z1=l(Sc,"CODE",{});var PH=r(z1);sx=n(PH,"True"),PH.forEach(t),tx=n(Sc," the section doesn\u2019t have to exist."),Sc.forEach(t),Ac.forEach(t),ax=c(U),rn=l(U,"DIV",{class:!0});var RE=r(rn);d(Er.$$.fragment,RE),nx=c(RE),qr=l(RE,"P",{});var UE=r(qr);ox=n(UE,"Returns the set value or "),T1=l(UE,"CODE",{});var OH=r(T1);lx=n(OH,"default"),OH.forEach(t),rx=n(UE," if no value is set"),UE.forEach(t),RE.forEach(t),px=c(U),pn=l(U,"DIV",{class:!0});var LE=r(pn);d($r.$$.fragment,LE),ix=c(LE),tt=l(LE,"P",{});var xc=r(tt);ux=n(xc,"Returns "),A1=l(xc,"CODE",{});var zH=r(A1);cx=n(zH,"True"),zH.forEach(t),hx=n(xc,"/"),S1=l(xc,"CODE",{});var TH=r(S1);fx=n(TH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),TH.forEach(t),dx=n(xc,` or
isn\u2019t set).`),xc.forEach(t),LE.forEach(t),mx=c(U),un=l(U,"DIV",{class:!0});var ZE=r(un);d(kr.$$.fragment,ZE),_x=c(ZE),at=l(ZE,"P",{});var Cc=r(at);vx=n(Cc,"Returns "),x1=l(Cc,"CODE",{});var AH=r(x1);jx=n(AH,"True"),AH.forEach(t),gx=n(Cc,"/"),C1=l(Cc,"CODE",{});var SH=r(C1);wx=n(SH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),SH.forEach(t),yx=n(Cc,` or
isn\u2019t set).`),Cc.forEach(t),ZE.forEach(t),U.forEach(t),hb=c(e),nt=l(e,"H2",{class:!0});var GE=r(nt);cn=l(GE,"A",{id:!0,class:!0,href:!0});var xH=r(cn);I1=l(xH,"SPAN",{});var CH=r(I1);d(Dr.$$.fragment,CH),CH.forEach(t),xH.forEach(t),bx=c(GE),R1=l(GE,"SPAN",{});var IH=r(R1);Ex=n(IH,"Main DeepSpeed Resources"),IH.forEach(t),GE.forEach(t),fb=c(e),re=l(e,"UL",{});var qn=r(re);U1=l(qn,"LI",{});var RH=r(U1);Pr=l(RH,"A",{href:!0,rel:!0});var UH=r(Pr);qx=n(UH,"Project\u2019s github"),UH.forEach(t),RH.forEach(t),$x=c(qn),L1=l(qn,"LI",{});var LH=r(L1);Or=l(LH,"A",{href:!0,rel:!0});var ZH=r(Or);kx=n(ZH,"Usage docs"),ZH.forEach(t),LH.forEach(t),Dx=c(qn),Z1=l(qn,"LI",{});var GH=r(Z1);zr=l(GH,"A",{href:!0,rel:!0});var MH=r(zr);Px=n(MH,"API docs"),MH.forEach(t),GH.forEach(t),Ox=c(qn),G1=l(qn,"LI",{});var NH=r(G1);Tr=l(NH,"A",{href:!0,rel:!0});var HH=r(Tr);zx=n(HH,"Blog posts"),HH.forEach(t),NH.forEach(t),qn.forEach(t),db=c(e),Hu=l(e,"P",{});var WH=r(Hu);Tx=n(WH,"Papers:"),WH.forEach(t),mb=c(e),ls=l(e,"UL",{});var Ic=r(ls);M1=l(Ic,"LI",{});var FH=r(M1);Ar=l(FH,"A",{href:!0,rel:!0});var BH=r(Ar);Ax=n(BH,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),BH.forEach(t),FH.forEach(t),Sx=c(Ic),N1=l(Ic,"LI",{});var VH=r(N1);Sr=l(VH,"A",{href:!0,rel:!0});var YH=r(Sr);xx=n(YH,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),YH.forEach(t),VH.forEach(t),Cx=c(Ic),H1=l(Ic,"LI",{});var KH=r(H1);xr=l(KH,"A",{href:!0,rel:!0});var JH=r(xr);Ix=n(JH,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),JH.forEach(t),KH.forEach(t),Ic.forEach(t),_b=c(e),rs=l(e,"P",{});var Rc=r(rs);Rx=n(Rc,"Finally, please, remember that, HuggingFace "),Wu=l(Rc,"A",{href:!0});var XH=r(Wu);Ux=n(XH,"Trainer"),XH.forEach(t),Lx=n(Rc,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Cr=l(Rc,"A",{href:!0,rel:!0});var QH=r(Cr);Zx=n(QH,"DeepSpeed GitHub"),QH.forEach(t),Gx=n(Rc,"."),Rc.forEach(t),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(pW)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(Y,"href","https://github.com/microsoft/DeepSpeed"),h(Y,"rel","nofollow"),h(be,"href","https://arxiv.org/abs/1910.02054"),h(be,"rel","nofollow"),h(Dn,"href","https://arxiv.org/abs/2101.06840"),h(Dn,"rel","nofollow"),h(Pn,"href","https://arxiv.org/abs/2104.07857"),h(Pn,"rel","nofollow"),h(On,"href","https://github.com/microsoft/DeepSpeed"),h(On,"rel","nofollow"),h(Br,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Vr,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Yr,"href","#deepspeed-non-trainer-integration"),h(sp,"href","#deepspeed-zero-inference"),h(ap,"id","deepspeed-trainer-integration"),h(it,"id","trainer-deepspeed-integration"),h(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(it,"href","#trainer-deepspeed-integration"),h(ms,"class","relative group"),h(np,"id","deepspeed-installation"),h(ut,"id","installation"),h(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ut,"href","#installation"),h(_s,"class","relative group"),h(In,"href","https://github.com/microsoft/deepspeed#installation"),h(In,"rel","nofollow"),h(Rn,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(Rn,"rel","nofollow"),h(lp,"href","#zero-install-notes"),h(Gn,"href","https://developer.nvidia.com/cuda-gpus"),h(Gn,"rel","nofollow"),h(Wn,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Wn,"rel","nofollow"),h(fp,"id","deepspeed-multi-gpu"),h(vt,"id","deployment-with-multiple-gpus"),h(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vt,"href","#deployment-with-multiple-gpus"),h(vs,"class","relative group"),h(dp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Bn,"href","https://www.deepspeed.ai/docs/config-json/"),h(Bn,"rel","nofollow"),h(Kn,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Kn,"rel","nofollow"),h(Xn,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(Xn,"rel","nofollow"),h(vp,"id","deepspeed-one-gpu"),h(Et,"id","deployment-with-one-gpu"),h(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Et,"href","#deployment-with-one-gpu"),h(gs,"class","relative group"),h(jp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(so,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(so,"rel","nofollow"),h(ao,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(ao,"rel","nofollow"),h($p,"id","deepspeed-notebook"),h(Dt,"id","deployment-in-notebooks"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-in-notebooks"),h(ys,"class","relative group"),h(zp,"id","deepspeed-config"),h(At,"id","configuration"),h(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(At,"href","#configuration"),h(bs,"class","relative group"),h(ho,"href","https://www.deepspeed.ai/docs/config-json/"),h(ho,"rel","nofollow"),h(fo,"href","https://github.com/microsoft/DeepSpeedExamples"),h(fo,"rel","nofollow"),h(vo,"href","https://github.com/microsoft/DeepSpeed"),h(vo,"rel","nofollow"),h(Ap,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Sp,"id","deepspeed-config-passing"),h(Ut,"id","passing-configuration"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#passing-configuration"),h(Es,"class","relative group"),h(xp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Cp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Ip,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Lp,"id","deepspeed-config-shared"),h(Lt,"id","shared-configuration"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#shared-configuration"),h(qs,"class","relative group"),h(Zp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Gp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Np,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Wp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Fp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Bp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Vp,"id","deepspeed-zero"),h(Ht,"id","zero"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#zero"),h($s,"class","relative group"),h(ko,"href","https://www.deepspeed.ai/tutorials/zero/"),h(ko,"rel","nofollow"),h(Do,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Do,"rel","nofollow"),h(Yp,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Jp,"id","deepspeed-zero2-config"),h(Ft,"id","zero2-config"),h(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ft,"href","#zero2-config"),h(ks,"class","relative group"),h(ei,"id","deepspeed-zero3-config"),h(Bt,"id","zero3-config"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#zero3-config"),h(Ps,"class","relative group"),h(ni,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(li,"id","deepspeed-nvme"),h(Kt,"id","nvme-support"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#nvme-support"),h(Os,"class","relative group"),h(No,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(No,"rel","nofollow"),h(Ho,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(Ho,"rel","nofollow"),h(Wo,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(Wo,"rel","nofollow"),h(ii,"id","deepspeed-zero2-zero3-performance"),h(Qt,"id","zero2-vs-zero3-performance"),h(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qt,"href","#zero2-vs-zero3-performance"),h(zs,"class","relative group"),h(hi,"id","deepspeed-zero2-example"),h(sa,"id","zero2-example"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#zero2-example"),h(As,"class","relative group"),h(fi,"id","deepspeed-zero3-example"),h(na,"id","zero3-example"),h(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(na,"href","#zero3-example"),h(Ss,"class","relative group"),h(ra,"id","optimizer-and-scheduler"),h(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ra,"href","#optimizer-and-scheduler"),h(xs,"class","relative group"),h(mi,"id","deepspeed-optimizer"),h(ua,"id","optimizer"),h(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ua,"href","#optimizer"),h(Cs,"class","relative group"),h(tl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(tl,"rel","nofollow"),h(_i,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(wi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(bi,"id","deepspeed-scheduler"),h(ha,"id","scheduler"),h(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ha,"href","#scheduler"),h(Is,"class","relative group"),h(cl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(cl,"rel","nofollow"),h(qi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h($i,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Di,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Pi,"id","deepspeed-fp32"),h(ja,"id","fp32-precision"),h(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ja,"href","#fp32-precision"),h(Rs,"class","relative group"),h(jl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(jl,"rel","nofollow"),h(zi,"id","deepspeed-amp"),h(ya,"id","automatic-mixed-precision"),h(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ya,"href","#automatic-mixed-precision"),h(Us,"class","relative group"),h(Si,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(bl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(bl,"rel","nofollow"),h(Ri,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Li,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h($l,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h($l,"rel","nofollow"),h(Zi,"id","deepspeed-bs"),h(Pa,"id","batch-size"),h(Pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pa,"href","#batch-size"),h(Ls,"class","relative group"),h(Mi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Hi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Wi,"id","deepspeed-grad-acc"),h(za,"id","gradient-accumulation"),h(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(za,"href","#gradient-accumulation"),h(Zs,"class","relative group"),h(Bi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Yi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Ki,"id","deepspeed-grad-clip"),h(Aa,"id","gradient-clipping"),h(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Aa,"href","#gradient-clipping"),h(Gs,"class","relative group"),h(Xi,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(eu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(su,"id","deepspeed-weight-extraction"),h(xa,"id","getting-the-model-weights-out"),h(xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xa,"href","#getting-the-model-weights-out"),h(Ms,"class","relative group"),h(Rl,"href","https://huggingface.co/models"),h(Rl,"rel","nofollow"),h(Na,"id","zero3-and-infinity-nuances"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#zero3-and-infinity-nuances"),h(Ns,"class","relative group"),h(Ha,"id","constructing-massive-models"),h(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ha,"href","#constructing-massive-models"),h(Hs,"class","relative group"),h(mu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(_u,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Vl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(Vl,"rel","nofollow"),h(ju,"href","#from_pretrained-torch-dtype"),h(Va,"id","gathering-parameters"),h(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Va,"href","#gathering-parameters"),h(Ws,"class","relative group"),h(Jl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Jl,"rel","nofollow"),h(wu,"id","deepspeed-zero-inference"),h(Ka,"id","zero-inference"),h(Ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ka,"href","#zero-inference"),h(Fs,"class","relative group"),h(bu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(Qa,"id","filing-issues"),h(Qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qa,"href","#filing-issues"),h(Bs,"class","relative group"),h(Pu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Ou,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(zu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(lr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(lr,"rel","nofollow"),h(pr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(pr,"rel","nofollow"),h(ur,"href","https://github.com/microsoft/DeepSpeed/"),h(ur,"rel","nofollow"),h(sn,"id","troubleshooting"),h(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sn,"href","#troubleshooting"),h(Ys,"class","relative group"),h(hr,"href","https://github.com/microsoft/DeepSpeed/pull/965"),h(hr,"rel","nofollow"),h(an,"id","notes"),h(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(an,"href","#notes"),h(Ks,"class","relative group"),h(xu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(mr,"href","https://github.com/microsoft/deepspeed#installation"),h(mr,"rel","nofollow"),h(Cu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(_r,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(_r,"rel","nofollow"),h(Iu,"id","deepspeed-non-trainer-integration"),h(nn,"id","nontrainer-deepspeed-integration"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#nontrainer-deepspeed-integration"),h(Qs,"class","relative group"),h(Ru,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Uu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Lu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(ln,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ln,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(et,"class","relative group"),h(Mu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Nu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.TrainingArguments"),h(os,"class","docstring"),h(rn,"class","docstring"),h(pn,"class","docstring"),h(un,"class","docstring"),h(q,"class","docstring"),h(cn,"id","main-deepspeed-resources"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#main-deepspeed-resources"),h(nt,"class","relative group"),h(Pr,"href","https://github.com/microsoft/deepspeed"),h(Pr,"rel","nofollow"),h(Or,"href","https://www.deepspeed.ai/getting-started/"),h(Or,"rel","nofollow"),h(zr,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(zr,"rel","nofollow"),h(Tr,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(Tr,"rel","nofollow"),h(Ar,"href","https://arxiv.org/abs/1910.02054"),h(Ar,"rel","nofollow"),h(Sr,"href","https://arxiv.org/abs/2101.06840"),h(Sr,"rel","nofollow"),h(xr,"href","https://arxiv.org/abs/2104.07857"),h(xr,"rel","nofollow"),h(Wu,"href","/docs/transformers/v4.15.0/en/main_classes/trainer#transformers.Trainer"),h(Cr,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Cr,"rel","nofollow")},m(e,p){s(document.head,y),i(e,Z,p),i(e,b,p),s(b,$),s($,hs),m(B,hs,null),s(b,kn),s(b,fs),s(fs,ds),i(e,lt,p),i(e,V,p),s(V,Y),s(Y,G),s(V,Nr),s(V,be),s(be,Hr),s(V,ME),i(e,K1,p),i(e,O,p),s(O,Uc),s(Uc,NE),s(O,HE),s(O,Lc),s(Lc,WE),s(O,FE),s(O,Zc),s(Zc,BE),s(O,VE),s(O,Gc),s(Gc,YE),s(O,KE),s(O,Mc),s(Mc,JE),s(O,XE),s(O,Nc),s(Nc,QE),i(e,J1,p),i(e,Ee,p),s(Ee,eq),s(Ee,Dn),s(Dn,sq),s(Ee,tq),s(Ee,Pn),s(Pn,aq),s(Ee,nq),i(e,X1,p),i(e,Wr,p),s(Wr,oq),i(e,Q1,p),i(e,Fr,p),s(Fr,lq),i(e,ev,p),i(e,rt,p),s(rt,rq),s(rt,On),s(On,pq),s(rt,iq),i(e,sv,p),i(e,pt,p),s(pt,zn),s(zn,uq),s(zn,Br),s(Br,cq),s(zn,hq),s(pt,fq),s(pt,L),s(L,dq),s(L,Vr),s(Vr,mq),s(L,_q),s(L,Hc),s(Hc,vq),s(L,jq),s(L,Wc),s(Wc,gq),s(L,wq),s(L,Fc),s(Fc,yq),s(L,bq),s(L,Yr),s(Yr,Eq),s(L,qq),i(e,tv,p),i(e,Kr,p),s(Kr,$q),i(e,av,p),i(e,Jr,p),s(Jr,kq),i(e,nv,p),i(e,Xr,p),s(Xr,Bc),s(Bc,Dq),i(e,ov,p),i(e,Qr,p),s(Qr,Pq),i(e,lv,p),i(e,ep,p),s(ep,Tn),s(Tn,Oq),s(Tn,sp),s(sp,zq),s(Tn,Tq),i(e,rv,p),i(e,tp,p),s(tp,Aq),i(e,pv,p),i(e,ap,p),i(e,iv,p),i(e,ms,p),s(ms,it),s(it,Vc),m(An,Vc,null),s(ms,Sq),s(ms,Yc),s(Yc,xq),i(e,uv,p),i(e,np,p),i(e,cv,p),i(e,_s,p),s(_s,ut),s(ut,Kc),m(Sn,Kc,null),s(_s,Cq),s(_s,Jc),s(Jc,Iq),i(e,hv,p),i(e,op,p),s(op,Rq),i(e,fv,p),m(xn,e,p),i(e,dv,p),i(e,qe,p),s(qe,Uq),s(qe,Xc),s(Xc,Lq),s(qe,Zq),s(qe,Qc),s(Qc,Gq),s(qe,Mq),i(e,mv,p),m(Cn,e,p),i(e,_v,p),i(e,$e,p),s($e,Nq),s($e,In),s(In,Hq),s($e,Wq),s($e,Rn),s(Rn,Fq),s($e,Bq),i(e,vv,p),i(e,ct,p),s(ct,Vq),s(ct,lp),s(lp,Yq),s(ct,Kq),i(e,jv,p),i(e,rp,p),s(rp,Jq),i(e,gv,p),i(e,pp,p),s(pp,Xq),i(e,wv,p),m(Un,e,p),i(e,yv,p),i(e,ke,p),s(ke,Qq),s(ke,eh),s(eh,e0),s(ke,s0),s(ke,sh),s(sh,t0),s(ke,a0),i(e,bv,p),i(e,ht,p),s(ht,n0),s(ht,th),s(th,o0),s(ht,l0),i(e,Ev,p),m(Ln,e,p),i(e,qv,p),i(e,_e,p),s(_e,r0),s(_e,ah),s(ah,p0),s(_e,i0),s(_e,nh),s(nh,u0),s(_e,c0),s(_e,oh),s(oh,h0),i(e,$v,p),i(e,ip,p),s(ip,f0),i(e,kv,p),m(Zn,e,p),i(e,Dv,p),i(e,De,p),s(De,d0),s(De,lh),s(lh,m0),s(De,_0),s(De,rh),s(rh,v0),s(De,j0),i(e,Pv,p),i(e,ft,p),s(ft,g0),s(ft,ph),s(ph,w0),s(ft,y0),i(e,Ov,p),i(e,Pe,p),s(Pe,b0),s(Pe,ih),s(ih,E0),s(Pe,q0),s(Pe,Gn),s(Gn,$0),s(Pe,k0),i(e,zv,p),i(e,up,p),s(up,D0),i(e,Tv,p),m(Mn,e,p),i(e,Av,p),i(e,cp,p),s(cp,P0),i(e,Sv,p),m(Nn,e,p),i(e,xv,p),i(e,hp,p),s(hp,O0),i(e,Cv,p),m(Hn,e,p),i(e,Iv,p),i(e,dt,p),s(dt,z0),s(dt,uh),s(uh,T0),s(dt,A0),i(e,Rv,p),i(e,mt,p),s(mt,S0),s(mt,ch),s(ch,x0),s(mt,C0),i(e,Uv,p),i(e,_t,p),s(_t,I0),s(_t,Wn),s(Wn,R0),s(_t,U0),i(e,Lv,p),i(e,fp,p),i(e,Zv,p),i(e,vs,p),s(vs,vt),s(vt,hh),m(Fn,hh,null),s(vs,L0),s(vs,fh),s(fh,Z0),i(e,Gv,p),i(e,jt,p),s(jt,G0),s(jt,dp),s(dp,M0),s(jt,N0),i(e,Mv,p),i(e,gt,p),s(gt,js),s(js,H0),s(js,dh),s(dh,W0),s(js,F0),s(js,mh),s(mh,B0),s(js,V0),s(gt,Y0),s(gt,ve),s(ve,K0),s(ve,_h),s(_h,J0),s(ve,X0),s(ve,vh),s(vh,Q0),s(ve,e5),s(ve,Bn),s(Bn,s5),s(ve,t5),i(e,Nv,p),i(e,mp,p),s(mp,a5),i(e,Hv,p),m(Vn,e,p),i(e,Wv,p),i(e,_p,p),s(_p,n5),i(e,Fv,p),m(Yn,e,p),i(e,Bv,p),i(e,z,p),s(z,o5),s(z,jh),s(jh,l5),s(z,r5),s(z,gh),s(gh,p5),s(z,i5),s(z,wh),s(wh,u5),s(z,c5),s(z,yh),s(yh,h5),s(z,f5),s(z,Kn),s(Kn,d5),s(z,m5),i(e,Vv,p),i(e,J,p),s(J,_5),s(J,bh),s(bh,v5),s(J,j5),s(J,Eh),s(Eh,g5),s(J,w5),s(J,qh),s(qh,y5),s(J,b5),i(e,Yv,p),i(e,wt,p),s(wt,E5),s(wt,$h),s($h,q5),s(wt,$5),i(e,Kv,p),m(Jn,e,p),i(e,Jv,p),i(e,yt,p),s(yt,k5),s(yt,kh),s(kh,D5),s(yt,P5),i(e,Xv,p),i(e,bt,p),s(bt,O5),s(bt,Xn),s(Xn,z5),s(bt,T5),i(e,Qv,p),i(e,vp,p),i(e,ej,p),i(e,gs,p),s(gs,Et),s(Et,Dh),m(Qn,Dh,null),s(gs,A5),s(gs,Ph),s(Ph,S5),i(e,sj,p),i(e,qt,p),s(qt,x5),s(qt,jp),s(jp,C5),s(qt,I5),i(e,tj,p),m(eo,e,p),i(e,aj,p),i(e,Oe,p),s(Oe,R5),s(Oe,Oh),s(Oh,U5),s(Oe,L5),s(Oe,so),s(so,Z5),s(Oe,G5),i(e,nj,p),i(e,gp,p),s(gp,M5),i(e,oj,p),i(e,$t,p),s($t,zh),s(zh,N5),s($t,H5),s($t,Th),s(Th,W5),i(e,lj,p),i(e,wp,p),s(wp,F5),i(e,rj,p),m(to,e,p),i(e,pj,p),i(e,yp,p),s(yp,B5),i(e,ij,p),i(e,kt,p),s(kt,V5),s(kt,ao),s(ao,Y5),s(kt,K5),i(e,uj,p),i(e,bp,p),s(bp,J5),i(e,cj,p),i(e,Ep,p),s(Ep,X5),i(e,hj,p),i(e,qp,p),s(qp,ws),s(ws,no),s(no,Q5),s(no,Ah),s(Ah,e4),s(no,s4),s(ws,t4),m(oo,ws,null),s(ws,a4),s(ws,Sh),s(Sh,n4),i(e,fj,p),i(e,$p,p),i(e,dj,p),i(e,ys,p),s(ys,Dt),s(Dt,xh),m(lo,xh,null),s(ys,o4),s(ys,Ch),s(Ch,l4),i(e,mj,p),i(e,Pt,p),s(Pt,r4),s(Pt,Ih),s(Ih,p4),s(Pt,i4),i(e,_j,p),i(e,kp,p),s(kp,u4),i(e,vj,p),m(ro,e,p),i(e,jj,p),i(e,Ot,p),s(Ot,c4),s(Ot,Rh),s(Rh,h4),s(Ot,f4),i(e,gj,p),i(e,Dp,p),s(Dp,d4),i(e,wj,p),i(e,Pp,p),s(Pp,m4),i(e,yj,p),m(po,e,p),i(e,bj,p),i(e,ze,p),s(ze,_4),s(ze,Uh),s(Uh,v4),s(ze,j4),s(ze,Lh),s(Lh,g4),s(ze,w4),i(e,Ej,p),m(io,e,p),i(e,qj,p),i(e,zt,p),s(zt,y4),s(zt,Zh),s(Zh,b4),s(zt,E4),i(e,$j,p),m(uo,e,p),i(e,kj,p),i(e,Op,p),s(Op,q4),i(e,Dj,p),i(e,Tt,p),s(Tt,$4),s(Tt,Gh),s(Gh,k4),s(Tt,D4),i(e,Pj,p),i(e,zp,p),i(e,Oj,p),i(e,bs,p),s(bs,At),s(At,Mh),m(co,Mh,null),s(bs,P4),s(bs,Nh),s(Nh,O4),i(e,zj,p),i(e,St,p),s(St,z4),s(St,ho),s(ho,T4),s(St,A4),i(e,Tj,p),i(e,xt,p),s(xt,S4),s(xt,fo),s(fo,x4),s(xt,C4),i(e,Aj,p),m(mo,e,p),i(e,Sj,p),i(e,Ct,p),s(Ct,I4),s(Ct,Hh),s(Hh,R4),s(Ct,U4),i(e,xj,p),m(_o,e,p),i(e,Cj,p),i(e,It,p),s(It,L4),s(It,vo),s(vo,Z4),s(It,G4),i(e,Ij,p),i(e,Tp,p),s(Tp,M4),i(e,Rj,p),i(e,X,p),s(X,N4),s(X,Wh),s(Wh,H4),s(X,W4),s(X,Fh),s(Fh,F4),s(X,B4),s(X,Bh),s(Bh,V4),s(X,Y4),i(e,Uj,p),m(jo,e,p),i(e,Lj,p),i(e,Rt,p),s(Rt,K4),s(Rt,Ap),s(Ap,J4),s(Rt,X4),i(e,Zj,p),i(e,Sp,p),i(e,Gj,p),i(e,Es,p),s(Es,Ut),s(Ut,Vh),m(go,Vh,null),s(Es,Q4),s(Es,Yh),s(Yh,e$),i(e,Mj,p),i(e,T,p),s(T,s$),s(T,xp),s(xp,t$),s(T,a$),s(T,Cp),s(Cp,n$),s(T,o$),s(T,Kh),s(Kh,l$),s(T,r$),s(T,Jh),s(Jh,p$),s(T,i$),s(T,Ip),s(Ip,u$),s(T,c$),i(e,Nj,p),i(e,Rp,p),s(Rp,h$),i(e,Hj,p),m(wo,e,p),i(e,Wj,p),i(e,Up,p),s(Up,f$),i(e,Fj,p),m(yo,e,p),i(e,Bj,p),i(e,Lp,p),i(e,Vj,p),i(e,qs,p),s(qs,Lt),s(Lt,Xh),m(bo,Xh,null),s(qs,d$),s(qs,Qh),s(Qh,m$),i(e,Yj,p),m(Zt,e,p),i(e,Kj,p),i(e,Te,p),s(Te,_$),s(Te,Zp),s(Zp,v$),s(Te,j$),s(Te,Gp),s(Gp,g$),s(Te,w$),i(e,Jj,p),i(e,Gt,p),s(Gt,y$),s(Gt,Mp),s(Mp,b$),s(Gt,E$),i(e,Xj,p),i(e,Ae,p),s(Ae,q$),s(Ae,ef),s(ef,$$),s(Ae,k$),s(Ae,Np),s(Np,D$),s(Ae,P$),i(e,Qj,p),i(e,Hp,p),s(Hp,O$),i(e,eg,p),i(e,Mt,p),s(Mt,z$),s(Mt,Wp),s(Wp,T$),s(Mt,A$),i(e,sg,p),i(e,Nt,p),s(Nt,sf),s(sf,S$),s(Nt,x$),s(Nt,Eo),s(Eo,C$),s(Eo,Fp),s(Fp,I$),s(Eo,R$),i(e,tg,p),i(e,Q,p),s(Q,U$),s(Q,tf),s(tf,L$),s(Q,Z$),s(Q,Bp),s(Bp,G$),s(Q,M$),s(Q,af),s(af,N$),s(Q,H$),i(e,ag,p),i(e,Vp,p),i(e,ng,p),i(e,$s,p),s($s,Ht),s(Ht,nf),m(qo,nf,null),s($s,W$),s($s,of),s(of,F$),i(e,og,p),i(e,$o,p),s($o,ko),s(ko,B$),s($o,V$),i(e,lg,p),i(e,Se,p),s(Se,Y$),s(Se,lf),s(lf,K$),s(Se,J$),s(Se,Do),s(Do,X$),s(Se,Q$),i(e,rg,p),i(e,Wt,p),s(Wt,e6),s(Wt,Yp),s(Yp,s6),s(Wt,t6),i(e,pg,p),i(e,Kp,p),s(Kp,a6),i(e,ig,p),i(e,Jp,p),i(e,ug,p),i(e,ks,p),s(ks,Ft),s(Ft,rf),m(Po,rf,null),s(ks,n6),s(ks,pf),s(pf,o6),i(e,cg,p),i(e,Xp,p),s(Xp,l6),i(e,hg,p),m(Oo,e,p),i(e,fg,p),i(e,Qp,p),s(Qp,uf),s(uf,r6),i(e,dg,p),i(e,xe,p),s(xe,Ds),s(Ds,p6),s(Ds,cf),s(cf,i6),s(Ds,u6),s(Ds,hf),s(hf,c6),s(Ds,h6),s(xe,f6),s(xe,A),s(A,ff),s(ff,d6),s(A,m6),s(A,df),s(df,_6),s(A,v6),s(A,mf),s(mf,j6),s(A,g6),s(A,_f),s(_f,w6),s(A,y6),s(A,vf),s(vf,b6),s(A,E6),s(A,jf),s(jf,q6),s(A,$6),s(xe,k6),s(xe,gf),s(gf,D6),i(e,mg,p),i(e,ei,p),i(e,_g,p),i(e,Ps,p),s(Ps,Bt),s(Bt,wf),m(zo,wf,null),s(Ps,P6),s(Ps,yf),s(yf,O6),i(e,vg,p),i(e,si,p),s(si,z6),i(e,jg,p),m(To,e,p),i(e,gg,p),i(e,M,p),s(M,T6),s(M,bf),s(bf,A6),s(M,S6),s(M,Ef),s(Ef,x6),s(M,C6),s(M,qf),s(qf,I6),s(M,R6),s(M,$f),s($f,U6),s(M,L6),i(e,wg,p),i(e,Ce,p),s(Ce,Z6),s(Ce,kf),s(kf,G6),s(Ce,M6),s(Ce,Df),s(Df,N6),s(Ce,H6),i(e,yg,p),i(e,ti,p),s(ti,Pf),s(Pf,W6),i(e,bg,p),i(e,Vt,p),s(Vt,Ao),s(Ao,Of),s(Of,F6),s(Ao,B6),s(Ao,zf),s(zf,V6),s(Vt,Y6),s(Vt,So),s(So,Tf),s(Tf,K6),s(So,J6),s(So,Af),s(Af,X6),i(e,Eg,p),i(e,S,p),s(S,Q6),s(S,Sf),s(Sf,e8),s(S,s8),s(S,xf),s(xf,t8),s(S,a8),s(S,Cf),s(Cf,n8),s(S,o8),s(S,If),s(If,l8),s(S,r8),s(S,Rf),s(Rf,p8),s(S,i8),i(e,qg,p),i(e,je,p),s(je,Uf),s(Uf,u8),s(je,c8),s(je,Lf),s(Lf,h8),s(je,f8),s(je,Zf),s(Zf,d8),s(je,m8),i(e,$g,p),i(e,ai,p),s(ai,_8),i(e,kg,p),i(e,Ie,p),s(Ie,xo),s(xo,Gf),s(Gf,v8),s(xo,j8),s(xo,Mf),s(Mf,g8),s(Ie,w8),s(Ie,Co),s(Co,Nf),s(Nf,y8),s(Co,b8),s(Co,Hf),s(Hf,E8),s(Ie,q8),s(Ie,Io),s(Io,Wf),s(Wf,$8),s(Io,k8),s(Io,Ff),s(Ff,D8),i(e,Dg,p),i(e,Re,p),s(Re,P8),s(Re,Bf),s(Bf,O8),s(Re,z8),s(Re,ni),s(ni,T8),s(Re,A8),i(e,Pg,p),i(e,Ro,p),s(Ro,Vf),s(Vf,S8),s(Ro,x8),i(e,Og,p),i(e,ee,p),s(ee,C8),s(ee,Yf),s(Yf,I8),s(ee,R8),s(ee,Kf),s(Kf,U8),s(ee,L8),s(ee,Jf),s(Jf,Z8),s(ee,G8),i(e,zg,p),i(e,oi,p),s(oi,Uo),s(Uo,Xf),s(Xf,M8),s(Uo,N8),s(Uo,Qf),s(Qf,H8),i(e,Tg,p),i(e,ge,p),s(ge,ed),s(ed,W8),s(ge,F8),s(ge,sd),s(sd,B8),s(ge,V8),s(ge,td),s(td,Y8),s(ge,K8),i(e,Ag,p),i(e,Ue,p),s(Ue,J8),s(Ue,ad),s(ad,X8),s(Ue,Q8),s(Ue,nd),s(nd,e7),s(Ue,s7),i(e,Sg,p),i(e,Yt,p),s(Yt,Lo),s(Lo,t7),s(Lo,od),s(od,a7),s(Lo,n7),s(Yt,o7),s(Yt,Zo),s(Zo,l7),s(Zo,ld),s(ld,r7),s(Zo,p7),i(e,xg,p),i(e,li,p),i(e,Cg,p),i(e,Os,p),s(Os,Kt),s(Kt,rd),m(Go,rd,null),s(Os,i7),s(Os,pd),s(pd,u7),i(e,Ig,p),i(e,ri,p),s(ri,c7),i(e,Rg,p),i(e,pi,p),s(pi,h7),i(e,Ug,p),m(Mo,e,p),i(e,Lg,p),i(e,Jt,p),s(Jt,f7),s(Jt,id),s(id,d7),s(Jt,m7),i(e,Zg,p),i(e,Le,p),s(Le,_7),s(Le,No),s(No,v7),s(Le,j7),s(Le,Ho),s(Ho,g7),s(Le,w7),i(e,Gg,p),i(e,Xt,p),s(Xt,y7),s(Xt,ud),s(ud,b7),s(Xt,E7),i(e,Mg,p),i(e,Ze,p),s(Ze,q7),s(Ze,cd),s(cd,$7),s(Ze,k7),s(Ze,Wo),s(Wo,D7),s(Ze,P7),i(e,Ng,p),i(e,ii,p),i(e,Hg,p),i(e,zs,p),s(zs,Qt),s(Qt,hd),m(Fo,hd,null),s(zs,O7),s(zs,fd),s(fd,z7),i(e,Wg,p),i(e,ui,p),s(ui,T7),i(e,Fg,p),i(e,ci,p),s(ci,A7),i(e,Bg,p),i(e,ea,p),s(ea,Ts),s(Ts,S7),s(Ts,dd),s(dd,x7),s(Ts,C7),s(Ts,md),s(md,I7),s(Ts,R7),s(ea,U7),s(ea,Bo),s(Bo,L7),s(Bo,_d),s(_d,Z7),s(Bo,G7),i(e,Vg,p),i(e,Ge,p),s(Ge,M7),s(Ge,vd),s(vd,N7),s(Ge,H7),s(Ge,jd),s(jd,W7),s(Ge,F7),i(e,Yg,p),i(e,hi,p),i(e,Kg,p),i(e,As,p),s(As,sa),s(sa,gd),m(Vo,gd,null),s(As,B7),s(As,wd),s(wd,V7),i(e,Jg,p),i(e,ta,p),s(ta,Y7),s(ta,yd),s(yd,K7),s(ta,J7),i(e,Xg,p),m(Yo,e,p),i(e,Qg,p),i(e,aa,p),s(aa,X7),s(aa,bd),s(bd,Q7),s(aa,e9),i(e,ew,p),m(Ko,e,p),i(e,sw,p),i(e,fi,p),i(e,tw,p),i(e,Ss,p),s(Ss,na),s(na,Ed),m(Jo,Ed,null),s(Ss,s9),s(Ss,qd),s(qd,t9),i(e,aw,p),i(e,oa,p),s(oa,a9),s(oa,$d),s($d,n9),s(oa,o9),i(e,nw,p),m(Xo,e,p),i(e,ow,p),i(e,la,p),s(la,l9),s(la,kd),s(kd,r9),s(la,p9),i(e,lw,p),m(Qo,e,p),i(e,rw,p),i(e,xs,p),s(xs,ra),s(ra,Dd),m(el,Dd,null),s(xs,i9),s(xs,Pd),s(Pd,u9),i(e,pw,p),i(e,pa,p),s(pa,c9),s(pa,Od),s(Od,h9),s(pa,f9),i(e,iw,p),i(e,di,p),s(di,d9),i(e,uw,p),i(e,ia,p),s(ia,m9),s(ia,zd),s(zd,_9),s(ia,v9),i(e,cw,p),i(e,mi,p),i(e,hw,p),i(e,Cs,p),s(Cs,ua),s(ua,Td),m(sl,Td,null),s(Cs,j9),s(Cs,Ad),s(Ad,g9),i(e,fw,p),i(e,Me,p),s(Me,w9),s(Me,Sd),s(Sd,y9),s(Me,b9),s(Me,tl),s(tl,E9),s(Me,q9),i(e,dw,p),i(e,E,p),s(E,$9),s(E,xd),s(xd,k9),s(E,D9),s(E,_i),s(_i,P9),s(E,O9),s(E,Cd),s(Cd,z9),s(E,T9),s(E,Id),s(Id,A9),s(E,S9),s(E,Rd),s(Rd,x9),s(E,C9),s(E,Ud),s(Ud,I9),s(E,R9),s(E,Ld),s(Ld,U9),s(E,L9),s(E,Zd),s(Zd,Z9),s(E,G9),i(e,mw,p),i(e,Ne,p),s(Ne,M9),s(Ne,Gd),s(Gd,N9),s(Ne,H9),s(Ne,Md),s(Md,W9),s(Ne,F9),i(e,_w,p),m(al,e,p),i(e,vw,p),i(e,vi,p),s(vi,B9),i(e,jw,p),i(e,se,p),s(se,nl),s(nl,Nd),s(Nd,V9),s(nl,Y9),s(nl,Hd),s(Hd,K9),s(se,J9),s(se,ol),s(ol,Wd),s(Wd,X9),s(ol,Q9),s(ol,Fd),s(Fd,ek),s(se,sk),s(se,ll),s(ll,Bd),s(Bd,tk),s(ll,ak),s(ll,Vd),s(Vd,nk),s(se,ok),s(se,rl),s(rl,Yd),s(Yd,lk),s(rl,rk),s(rl,Kd),s(Kd,pk),i(e,gw,p),i(e,ji,p),s(ji,ik),i(e,ww,p),i(e,gi,p),s(gi,uk),i(e,yw,p),m(pl,e,p),i(e,bw,p),i(e,ca,p),s(ca,ck),s(ca,wi),s(wi,hk),s(ca,fk),i(e,Ew,p),i(e,yi,p),s(yi,dk),i(e,qw,p),m(il,e,p),i(e,$w,p),i(e,te,p),s(te,mk),s(te,Jd),s(Jd,_k),s(te,vk),s(te,Xd),s(Xd,jk),s(te,gk),s(te,Qd),s(Qd,wk),s(te,yk),i(e,kw,p),i(e,bi,p),i(e,Dw,p),i(e,Is,p),s(Is,ha),s(ha,em),m(ul,em,null),s(Is,bk),s(Is,sm),s(sm,Ek),i(e,Pw,p),i(e,x,p),s(x,qk),s(x,tm),s(tm,$k),s(x,kk),s(x,am),s(am,Dk),s(x,Pk),s(x,nm),s(nm,Ok),s(x,zk),s(x,om),s(om,Tk),s(x,Ak),s(x,cl),s(cl,Sk),s(x,xk),i(e,Ow,p),i(e,Ei,p),s(Ei,Ck),i(e,zw,p),i(e,fa,p),s(fa,hl),s(hl,lm),s(lm,Ik),s(hl,Rk),s(hl,rm),s(rm,Uk),s(fa,Lk),s(fa,He),s(He,pm),s(pm,Zk),s(He,Gk),s(He,im),s(im,Mk),s(He,Nk),s(He,um),s(um,Hk),s(He,Wk),i(e,Tw,p),i(e,D,p),s(D,Fk),s(D,cm),s(cm,Bk),s(D,Vk),s(D,qi),s(qi,Yk),s(D,Kk),s(D,hm),s(hm,Jk),s(D,Xk),s(D,fm),s(fm,Qk),s(D,eD),s(D,dm),s(dm,sD),s(D,tD),s(D,mm),s(mm,aD),s(D,nD),i(e,Aw,p),i(e,We,p),s(We,oD),s(We,_m),s(_m,lD),s(We,rD),s(We,vm),s(vm,pD),s(We,iD),i(e,Sw,p),m(fl,e,p),i(e,xw,p),i(e,Fe,p),s(Fe,uD),s(Fe,jm),s(jm,cD),s(Fe,hD),s(Fe,$i),s($i,fD),s(Fe,dD),i(e,Cw,p),i(e,ae,p),s(ae,da),s(da,gm),s(gm,mD),s(da,_D),s(da,wm),s(wm,vD),s(da,jD),s(ae,gD),s(ae,ma),s(ma,ym),s(ym,wD),s(ma,yD),s(ma,bm),s(bm,bD),s(ma,ED),s(ae,qD),s(ae,Be),s(Be,Em),s(Em,$D),s(Be,kD),s(Be,qm),s(qm,DD),s(Be,PD),s(Be,$m),s($m,OD),s(Be,zD),s(ae,TD),s(ae,Ve),s(Ve,km),s(km,AD),s(Ve,SD),s(Ve,Dm),s(Dm,xD),s(Ve,CD),s(Ve,Pm),s(Pm,ID),s(Ve,RD),i(e,Iw,p),i(e,ki,p),s(ki,UD),i(e,Rw,p),m(dl,e,p),i(e,Uw,p),i(e,_a,p),s(_a,LD),s(_a,Di),s(Di,ZD),s(_a,GD),i(e,Lw,p),i(e,va,p),s(va,MD),s(va,Om),s(Om,ND),s(va,HD),i(e,Zw,p),m(ml,e,p),i(e,Gw,p),i(e,N,p),s(N,WD),s(N,zm),s(zm,FD),s(N,BD),s(N,Tm),s(Tm,VD),s(N,YD),s(N,Am),s(Am,KD),s(N,JD),s(N,Sm),s(Sm,XD),s(N,QD),i(e,Mw,p),i(e,Pi,p),i(e,Nw,p),i(e,Rs,p),s(Rs,ja),s(ja,xm),m(_l,xm,null),s(Rs,eP),s(Rs,Cm),s(Cm,sP),i(e,Hw,p),i(e,Oi,p),s(Oi,tP),i(e,Ww,p),i(e,ga,p),s(ga,aP),s(ga,Im),s(Im,nP),s(ga,oP),i(e,Fw,p),m(vl,e,p),i(e,Bw,p),i(e,wa,p),s(wa,lP),s(wa,jl),s(jl,rP),s(wa,pP),i(e,Vw,p),i(e,zi,p),i(e,Yw,p),i(e,Us,p),s(Us,ya),s(ya,Rm),m(gl,Rm,null),s(Us,iP),s(Us,Um),s(Um,uP),i(e,Kw,p),i(e,Ti,p),s(Ti,cP),i(e,Jw,p),i(e,Ai,p),s(Ai,hP),i(e,Xw,p),m(wl,e,p),i(e,Qw,p),i(e,Ye,p),s(Ye,fP),s(Ye,Si),s(Si,dP),s(Ye,mP),s(Ye,Lm),s(Lm,_P),s(Ye,vP),i(e,ey,p),i(e,ba,p),s(ba,jP),s(ba,Zm),s(Zm,gP),s(ba,wP),i(e,sy,p),i(e,xi,p),s(xi,yP),i(e,ty,p),m(yl,e,p),i(e,ay,p),i(e,Ea,p),s(Ea,bP),s(Ea,Ci),s(Ci,EP),s(Ea,qP),i(e,ny,p),i(e,qa,p),s(qa,$P),s(qa,bl),s(bl,kP),s(qa,DP),i(e,oy,p),i(e,Ii,p),s(Ii,PP),i(e,ly,p),m(El,e,p),i(e,ry,p),i(e,ne,p),s(ne,OP),s(ne,Ri),s(Ri,zP),s(ne,TP),s(ne,Gm),s(Gm,AP),s(ne,SP),s(ne,Mm),s(Mm,xP),s(ne,CP),i(e,py,p),i(e,$a,p),s($a,IP),s($a,Nm),s(Nm,RP),s($a,UP),i(e,iy,p),i(e,Ui,p),s(Ui,LP),i(e,uy,p),m(ql,e,p),i(e,cy,p),i(e,ka,p),s(ka,ZP),s(ka,Li),s(Li,GP),s(ka,MP),i(e,hy,p),i(e,Da,p),s(Da,NP),s(Da,$l),s($l,HP),s(Da,WP),i(e,fy,p),i(e,Zi,p),i(e,dy,p),i(e,Ls,p),s(Ls,Pa),s(Pa,Hm),m(kl,Hm,null),s(Ls,FP),s(Ls,Wm),s(Wm,BP),i(e,my,p),i(e,Gi,p),s(Gi,VP),i(e,_y,p),m(Dl,e,p),i(e,vy,p),i(e,C,p),s(C,YP),s(C,Mi),s(Mi,KP),s(C,JP),s(C,Fm),s(Fm,XP),s(C,QP),s(C,Bm),s(Bm,eO),s(C,sO),s(C,Vm),s(Vm,tO),s(C,aO),s(C,Ym),s(Ym,nO),s(C,oO),i(e,jy,p),i(e,Ni,p),s(Ni,lO),i(e,gy,p),m(Pl,e,p),i(e,wy,p),i(e,Oa,p),s(Oa,rO),s(Oa,Hi),s(Hi,pO),s(Oa,iO),i(e,yy,p),i(e,Wi,p),i(e,by,p),i(e,Zs,p),s(Zs,za),s(za,Km),m(Ol,Km,null),s(Zs,uO),s(Zs,Jm),s(Jm,cO),i(e,Ey,p),i(e,Fi,p),s(Fi,hO),i(e,qy,p),m(zl,e,p),i(e,$y,p),i(e,Ke,p),s(Ke,fO),s(Ke,Bi),s(Bi,dO),s(Ke,mO),s(Ke,Xm),s(Xm,_O),s(Ke,vO),i(e,ky,p),i(e,Vi,p),s(Vi,jO),i(e,Dy,p),m(Tl,e,p),i(e,Py,p),i(e,Ta,p),s(Ta,gO),s(Ta,Yi),s(Yi,wO),s(Ta,yO),i(e,Oy,p),i(e,Ki,p),i(e,zy,p),i(e,Gs,p),s(Gs,Aa),s(Aa,Qm),m(Al,Qm,null),s(Gs,bO),s(Gs,e_),s(e_,EO),i(e,Ty,p),i(e,Ji,p),s(Ji,qO),i(e,Ay,p),m(Sl,e,p),i(e,Sy,p),i(e,Je,p),s(Je,$O),s(Je,Xi),s(Xi,kO),s(Je,DO),s(Je,s_),s(s_,PO),s(Je,OO),i(e,xy,p),i(e,Qi,p),s(Qi,zO),i(e,Cy,p),m(xl,e,p),i(e,Iy,p),i(e,Sa,p),s(Sa,TO),s(Sa,eu),s(eu,AO),s(Sa,SO),i(e,Ry,p),i(e,su,p),i(e,Uy,p),i(e,Ms,p),s(Ms,xa),s(xa,t_),m(Cl,t_,null),s(Ms,xO),s(Ms,a_),s(a_,CO),i(e,Ly,p),i(e,Ca,p),s(Ca,IO),s(Ca,n_),s(n_,RO),s(Ca,UO),i(e,Zy,p),i(e,tu,p),s(tu,o_),s(o_,LO),i(e,Gy,p),i(e,Ia,p),s(Ia,ZO),s(Ia,l_),s(l_,GO),s(Ia,MO),i(e,My,p),i(e,H,p),s(H,NO),s(H,r_),s(r_,HO),s(H,WO),s(H,p_),s(p_,FO),s(H,BO),s(H,i_),s(i_,VO),s(H,YO),s(H,u_),s(u_,KO),s(H,JO),i(e,Ny,p),m(Il,e,p),i(e,Hy,p),i(e,au,p),s(au,c_),s(c_,XO),i(e,Wy,p),i(e,Ra,p),s(Ra,QO),s(Ra,Rl),s(Rl,ez),s(Ra,sz),i(e,Fy,p),i(e,nu,p),s(nu,h_),s(h_,tz),i(e,By,p),i(e,ou,p),s(ou,az),i(e,Vy,p),i(e,lu,p),s(lu,nz),i(e,Yy,p),m(Ul,e,p),i(e,Ky,p),i(e,Xe,p),s(Xe,oz),s(Xe,f_),s(f_,lz),s(Xe,rz),s(Xe,d_),s(d_,pz),s(Xe,iz),i(e,Jy,p),m(Ll,e,p),i(e,Xy,p),m(Ua,e,p),i(e,Qy,p),i(e,La,p),s(La,uz),s(La,m_),s(m_,cz),s(La,hz),i(e,e2,p),i(e,Za,p),s(Za,fz),s(Za,__),s(__,dz),s(Za,mz),i(e,s2,p),m(Zl,e,p),i(e,t2,p),i(e,ru,p),s(ru,v_),s(v_,_z),i(e,a2,p),i(e,Qe,p),s(Qe,vz),s(Qe,j_),s(j_,jz),s(Qe,gz),s(Qe,g_),s(g_,wz),s(Qe,yz),i(e,n2,p),i(e,pu,p),s(pu,bz),i(e,o2,p),m(Gl,e,p),i(e,l2,p),i(e,Ga,p),s(Ga,Ez),s(Ga,w_),s(w_,qz),s(Ga,$z),i(e,r2,p),m(Ml,e,p),i(e,p2,p),i(e,Ma,p),s(Ma,kz),s(Ma,y_),s(y_,Dz),s(Ma,Pz),i(e,i2,p),i(e,iu,p),s(iu,Oz),i(e,u2,p),i(e,Nl,p),s(Nl,b_),s(b_,zz),s(Nl,Tz),i(e,c2,p),i(e,es,p),s(es,Az),s(es,E_),s(E_,Sz),s(es,xz),s(es,q_),s(q_,Cz),s(es,Iz),i(e,h2,p),i(e,uu,p),s(uu,Rz),i(e,f2,p),i(e,Ns,p),s(Ns,Na),s(Na,$_),m(Hl,$_,null),s(Ns,Uz),s(Ns,k_),s(k_,Lz),i(e,d2,p),i(e,cu,p),s(cu,Zz),i(e,m2,p),i(e,hu,p),s(hu,Gz),i(e,_2,p),i(e,fu,p),s(fu,Mz),i(e,v2,p),i(e,Hs,p),s(Hs,Ha),s(Ha,D_),m(Wl,D_,null),s(Hs,Nz),s(Hs,P_),s(P_,Hz),i(e,j2,p),i(e,Wa,p),s(Wa,Wz),s(Wa,O_),s(O_,Fz),s(Wa,Bz),i(e,g2,p),m(Fl,e,p),i(e,w2,p),i(e,du,p),s(du,Vz),i(e,y2,p),i(e,k,p),s(k,Yz),s(k,z_),s(z_,Kz),s(k,Jz),s(k,T_),s(T_,Xz),s(k,Qz),s(k,A_),s(A_,eT),s(k,sT),s(k,mu),s(mu,tT),s(k,aT),s(k,_u),s(_u,nT),s(k,oT),s(k,S_),s(S_,lT),s(k,rT),s(k,x_),s(x_,pT),s(k,iT),i(e,b2,p),m(Bl,e,p),i(e,E2,p),i(e,Fa,p),s(Fa,uT),s(Fa,C_),s(C_,cT),s(Fa,hT),i(e,q2,p),i(e,vu,p),s(vu,fT),i(e,$2,p),i(e,Ba,p),s(Ba,dT),s(Ba,Vl),s(Vl,mT),s(Ba,_T),i(e,k2,p),i(e,oe,p),s(oe,vT),s(oe,I_),s(I_,jT),s(oe,gT),s(oe,R_),s(R_,wT),s(oe,yT),s(oe,ju),s(ju,bT),s(oe,ET),i(e,D2,p),i(e,Ws,p),s(Ws,Va),s(Va,U_),m(Yl,U_,null),s(Ws,qT),s(Ws,L_),s(L_,$T),i(e,P2,p),i(e,Kl,p),s(Kl,kT),s(Kl,Jl),s(Jl,DT),i(e,O2,p),i(e,Ya,p),s(Ya,PT),s(Ya,Z_),s(Z_,OT),s(Ya,zT),i(e,z2,p),i(e,gu,p),s(gu,TT),i(e,T2,p),m(Xl,e,p),i(e,A2,p),i(e,ss,p),s(ss,AT),s(ss,G_),s(G_,ST),s(ss,xT),s(ss,M_),s(M_,CT),s(ss,IT),i(e,S2,p),i(e,wu,p),i(e,x2,p),i(e,Fs,p),s(Fs,Ka),s(Ka,N_),m(Ql,N_,null),s(Fs,RT),s(Fs,H_),s(H_,UT),i(e,C2,p),i(e,yu,p),s(yu,LT),i(e,I2,p),i(e,Ja,p),s(Ja,ZT),s(Ja,bu),s(bu,GT),s(Ja,MT),i(e,R2,p),m(er,e,p),i(e,U2,p),i(e,Eu,p),s(Eu,NT),i(e,L2,p),i(e,Xa,p),s(Xa,HT),s(Xa,W_),s(W_,WT),s(Xa,FT),i(e,Z2,p),m(sr,e,p),i(e,G2,p),i(e,qu,p),s(qu,BT),i(e,M2,p),i(e,$u,p),s($u,VT),i(e,N2,p),i(e,Bs,p),s(Bs,Qa),s(Qa,F_),m(tr,F_,null),s(Bs,YT),s(Bs,B_),s(B_,KT),i(e,H2,p),i(e,ku,p),s(ku,JT),i(e,W2,p),i(e,Du,p),s(Du,XT),i(e,F2,p),i(e,I,p),s(I,V_),s(V_,Y_),s(Y_,QT),s(I,eA),s(I,K_),s(K_,we),s(we,sA),s(we,Pu),s(Pu,tA),s(we,aA),s(we,Ou),s(Ou,nA),s(we,oA),s(we,zu),s(zu,lA),s(we,rA),s(I,pA),s(I,ar),s(ar,J_),s(J_,iA),s(ar,uA),m(nr,ar,null),s(I,cA),s(I,X_),s(X_,or),s(or,hA),s(or,lr),s(lr,fA),s(or,dA),s(I,mA),s(I,Q_),s(Q_,e1),s(e1,_A),s(I,vA),s(I,s1),s(s1,rr),s(rr,jA),s(rr,pr),s(pr,gA),s(rr,wA),i(e,B2,p),i(e,Tu,p),s(Tu,yA),i(e,V2,p),i(e,en,p),s(en,Vs),s(Vs,t1),s(t1,bA),s(Vs,EA),s(Vs,a1),s(a1,qA),s(Vs,$A),s(Vs,n1),s(n1,kA),s(en,DA),s(en,o1),s(o1,ir),s(ir,PA),s(ir,ur),s(ur,OA),s(ir,zA),i(e,Y2,p),i(e,Ys,p),s(Ys,sn),s(sn,l1),m(cr,l1,null),s(Ys,TA),s(Ys,r1),s(r1,AA),i(e,K2,p),i(e,Au,p),s(Au,Su),s(Su,p1),s(p1,SA),s(Su,xA),i(e,J2,p),i(e,W,p),s(W,CA),s(W,i1),s(i1,IA),s(W,RA),s(W,u1),s(u1,UA),s(W,LA),s(W,c1),s(c1,ZA),s(W,GA),s(W,h1),s(h1,MA),s(W,NA),i(e,X2,p),i(e,tn,p),s(tn,HA),s(tn,hr),s(hr,WA),s(tn,FA),i(e,Q2,p),i(e,Ks,p),s(Ks,an),s(an,f1),m(fr,f1,null),s(Ks,BA),s(Ks,d1),s(d1,VA),i(e,eb,p),i(e,ts,p),s(ts,Js),s(Js,YA),s(Js,xu),s(xu,KA),s(Js,JA),s(Js,m1),s(m1,XA),s(Js,QA),s(ts,eS),s(ts,dr),s(dr,sS),s(dr,mr),s(mr,tS),s(dr,aS),s(ts,nS),s(ts,Xs),s(Xs,oS),s(Xs,Cu),s(Cu,lS),s(Xs,rS),s(Xs,_r),s(_r,pS),s(Xs,iS),i(e,sb,p),i(e,Iu,p),i(e,tb,p),i(e,Qs,p),s(Qs,nn),s(nn,_1),m(vr,_1,null),s(Qs,uS),s(Qs,v1),s(v1,cS),i(e,ab,p),i(e,as,p),s(as,hS),s(as,j1),s(j1,fS),s(as,dS),s(as,Ru),s(Ru,mS),s(as,_S),i(e,nb,p),i(e,on,p),s(on,vS),s(on,Uu),s(Uu,jS),s(on,gS),i(e,ob,p),i(e,ns,p),s(ns,wS),s(ns,Lu),s(Lu,yS),s(ns,bS),s(ns,g1),s(g1,ES),s(ns,qS),i(e,lb,p),i(e,Zu,p),s(Zu,$S),i(e,rb,p),m(jr,e,p),i(e,pb,p),i(e,Gu,p),s(Gu,kS),i(e,ib,p),m(gr,e,p),i(e,ub,p),i(e,et,p),s(et,ln),s(ln,w1),m(wr,w1,null),s(et,DS),s(et,y1),s(y1,PS),i(e,cb,p),i(e,q,p),m(yr,q,null),s(q,OS),s(q,b1),s(b1,zS),s(q,TS),s(q,ye),s(ye,AS),s(ye,E1),s(E1,SS),s(ye,xS),s(ye,q1),s(q1,CS),s(ye,IS),s(ye,$1),s($1,RS),s(ye,US),s(q,LS),s(q,le),s(le,Mu),s(Mu,ZS),s(le,GS),s(le,k1),s(k1,MS),s(le,NS),s(le,Nu),s(Nu,HS),s(le,WS),s(le,D1),s(D1,FS),s(le,BS),s(q,VS),s(q,os),m(br,os,null),s(os,YS),s(os,P1),s(P1,KS),s(os,JS),s(os,st),s(st,XS),s(st,O1),s(O1,QS),s(st,ex),s(st,z1),s(z1,sx),s(st,tx),s(q,ax),s(q,rn),m(Er,rn,null),s(rn,nx),s(rn,qr),s(qr,ox),s(qr,T1),s(T1,lx),s(qr,rx),s(q,px),s(q,pn),m($r,pn,null),s(pn,ix),s(pn,tt),s(tt,ux),s(tt,A1),s(A1,cx),s(tt,hx),s(tt,S1),s(S1,fx),s(tt,dx),s(q,mx),s(q,un),m(kr,un,null),s(un,_x),s(un,at),s(at,vx),s(at,x1),s(x1,jx),s(at,gx),s(at,C1),s(C1,wx),s(at,yx),i(e,hb,p),i(e,nt,p),s(nt,cn),s(cn,I1),m(Dr,I1,null),s(nt,bx),s(nt,R1),s(R1,Ex),i(e,fb,p),i(e,re,p),s(re,U1),s(U1,Pr),s(Pr,qx),s(re,$x),s(re,L1),s(L1,Or),s(Or,kx),s(re,Dx),s(re,Z1),s(Z1,zr),s(zr,Px),s(re,Ox),s(re,G1),s(G1,Tr),s(Tr,zx),i(e,db,p),i(e,Hu,p),s(Hu,Tx),i(e,mb,p),i(e,ls,p),s(ls,M1),s(M1,Ar),s(Ar,Ax),s(ls,Sx),s(ls,N1),s(N1,Sr),s(Sr,xx),s(ls,Cx),s(ls,H1),s(H1,xr),s(xr,Ix),i(e,_b,p),i(e,rs,p),s(rs,Rx),s(rs,Wu),s(Wu,Ux),s(rs,Lx),s(rs,Cr),s(Cr,Zx),s(rs,Gx),vb=!0},p(e,[p]){const Ir={};p&2&&(Ir.$$scope={dirty:p,ctx:e}),Zt.$set(Ir);const W1={};p&2&&(W1.$$scope={dirty:p,ctx:e}),Ua.$set(W1)},i(e){vb||(_(B.$$.fragment,e),_(An.$$.fragment,e),_(Sn.$$.fragment,e),_(xn.$$.fragment,e),_(Cn.$$.fragment,e),_(Un.$$.fragment,e),_(Ln.$$.fragment,e),_(Zn.$$.fragment,e),_(Mn.$$.fragment,e),_(Nn.$$.fragment,e),_(Hn.$$.fragment,e),_(Fn.$$.fragment,e),_(Vn.$$.fragment,e),_(Yn.$$.fragment,e),_(Jn.$$.fragment,e),_(Qn.$$.fragment,e),_(eo.$$.fragment,e),_(to.$$.fragment,e),_(oo.$$.fragment,e),_(lo.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(co.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(jo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(yo.$$.fragment,e),_(bo.$$.fragment,e),_(Zt.$$.fragment,e),_(qo.$$.fragment,e),_(Po.$$.fragment,e),_(Oo.$$.fragment,e),_(zo.$$.fragment,e),_(To.$$.fragment,e),_(Go.$$.fragment,e),_(Mo.$$.fragment,e),_(Fo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(Qo.$$.fragment,e),_(el.$$.fragment,e),_(sl.$$.fragment,e),_(al.$$.fragment,e),_(pl.$$.fragment,e),_(il.$$.fragment,e),_(ul.$$.fragment,e),_(fl.$$.fragment,e),_(dl.$$.fragment,e),_(ml.$$.fragment,e),_(_l.$$.fragment,e),_(vl.$$.fragment,e),_(gl.$$.fragment,e),_(wl.$$.fragment,e),_(yl.$$.fragment,e),_(El.$$.fragment,e),_(ql.$$.fragment,e),_(kl.$$.fragment,e),_(Dl.$$.fragment,e),_(Pl.$$.fragment,e),_(Ol.$$.fragment,e),_(zl.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Sl.$$.fragment,e),_(xl.$$.fragment,e),_(Cl.$$.fragment,e),_(Il.$$.fragment,e),_(Ul.$$.fragment,e),_(Ll.$$.fragment,e),_(Ua.$$.fragment,e),_(Zl.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Hl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Bl.$$.fragment,e),_(Yl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(nr.$$.fragment,e),_(cr.$$.fragment,e),_(fr.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(gr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_($r.$$.fragment,e),_(kr.$$.fragment,e),_(Dr.$$.fragment,e),vb=!0)},o(e){v(B.$$.fragment,e),v(An.$$.fragment,e),v(Sn.$$.fragment,e),v(xn.$$.fragment,e),v(Cn.$$.fragment,e),v(Un.$$.fragment,e),v(Ln.$$.fragment,e),v(Zn.$$.fragment,e),v(Mn.$$.fragment,e),v(Nn.$$.fragment,e),v(Hn.$$.fragment,e),v(Fn.$$.fragment,e),v(Vn.$$.fragment,e),v(Yn.$$.fragment,e),v(Jn.$$.fragment,e),v(Qn.$$.fragment,e),v(eo.$$.fragment,e),v(to.$$.fragment,e),v(oo.$$.fragment,e),v(lo.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(co.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(jo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(yo.$$.fragment,e),v(bo.$$.fragment,e),v(Zt.$$.fragment,e),v(qo.$$.fragment,e),v(Po.$$.fragment,e),v(Oo.$$.fragment,e),v(zo.$$.fragment,e),v(To.$$.fragment,e),v(Go.$$.fragment,e),v(Mo.$$.fragment,e),v(Fo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(Qo.$$.fragment,e),v(el.$$.fragment,e),v(sl.$$.fragment,e),v(al.$$.fragment,e),v(pl.$$.fragment,e),v(il.$$.fragment,e),v(ul.$$.fragment,e),v(fl.$$.fragment,e),v(dl.$$.fragment,e),v(ml.$$.fragment,e),v(_l.$$.fragment,e),v(vl.$$.fragment,e),v(gl.$$.fragment,e),v(wl.$$.fragment,e),v(yl.$$.fragment,e),v(El.$$.fragment,e),v(ql.$$.fragment,e),v(kl.$$.fragment,e),v(Dl.$$.fragment,e),v(Pl.$$.fragment,e),v(Ol.$$.fragment,e),v(zl.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Sl.$$.fragment,e),v(xl.$$.fragment,e),v(Cl.$$.fragment,e),v(Il.$$.fragment,e),v(Ul.$$.fragment,e),v(Ll.$$.fragment,e),v(Ua.$$.fragment,e),v(Zl.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Hl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Bl.$$.fragment,e),v(Yl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(nr.$$.fragment,e),v(cr.$$.fragment,e),v(fr.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(gr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v($r.$$.fragment,e),v(kr.$$.fragment,e),v(Dr.$$.fragment,e),vb=!1},d(e){t(y),e&&t(Z),e&&t(b),j(B),e&&t(lt),e&&t(V),e&&t(K1),e&&t(O),e&&t(J1),e&&t(Ee),e&&t(X1),e&&t(Wr),e&&t(Q1),e&&t(Fr),e&&t(ev),e&&t(rt),e&&t(sv),e&&t(pt),e&&t(tv),e&&t(Kr),e&&t(av),e&&t(Jr),e&&t(nv),e&&t(Xr),e&&t(ov),e&&t(Qr),e&&t(lv),e&&t(ep),e&&t(rv),e&&t(tp),e&&t(pv),e&&t(ap),e&&t(iv),e&&t(ms),j(An),e&&t(uv),e&&t(np),e&&t(cv),e&&t(_s),j(Sn),e&&t(hv),e&&t(op),e&&t(fv),j(xn,e),e&&t(dv),e&&t(qe),e&&t(mv),j(Cn,e),e&&t(_v),e&&t($e),e&&t(vv),e&&t(ct),e&&t(jv),e&&t(rp),e&&t(gv),e&&t(pp),e&&t(wv),j(Un,e),e&&t(yv),e&&t(ke),e&&t(bv),e&&t(ht),e&&t(Ev),j(Ln,e),e&&t(qv),e&&t(_e),e&&t($v),e&&t(ip),e&&t(kv),j(Zn,e),e&&t(Dv),e&&t(De),e&&t(Pv),e&&t(ft),e&&t(Ov),e&&t(Pe),e&&t(zv),e&&t(up),e&&t(Tv),j(Mn,e),e&&t(Av),e&&t(cp),e&&t(Sv),j(Nn,e),e&&t(xv),e&&t(hp),e&&t(Cv),j(Hn,e),e&&t(Iv),e&&t(dt),e&&t(Rv),e&&t(mt),e&&t(Uv),e&&t(_t),e&&t(Lv),e&&t(fp),e&&t(Zv),e&&t(vs),j(Fn),e&&t(Gv),e&&t(jt),e&&t(Mv),e&&t(gt),e&&t(Nv),e&&t(mp),e&&t(Hv),j(Vn,e),e&&t(Wv),e&&t(_p),e&&t(Fv),j(Yn,e),e&&t(Bv),e&&t(z),e&&t(Vv),e&&t(J),e&&t(Yv),e&&t(wt),e&&t(Kv),j(Jn,e),e&&t(Jv),e&&t(yt),e&&t(Xv),e&&t(bt),e&&t(Qv),e&&t(vp),e&&t(ej),e&&t(gs),j(Qn),e&&t(sj),e&&t(qt),e&&t(tj),j(eo,e),e&&t(aj),e&&t(Oe),e&&t(nj),e&&t(gp),e&&t(oj),e&&t($t),e&&t(lj),e&&t(wp),e&&t(rj),j(to,e),e&&t(pj),e&&t(yp),e&&t(ij),e&&t(kt),e&&t(uj),e&&t(bp),e&&t(cj),e&&t(Ep),e&&t(hj),e&&t(qp),j(oo),e&&t(fj),e&&t($p),e&&t(dj),e&&t(ys),j(lo),e&&t(mj),e&&t(Pt),e&&t(_j),e&&t(kp),e&&t(vj),j(ro,e),e&&t(jj),e&&t(Ot),e&&t(gj),e&&t(Dp),e&&t(wj),e&&t(Pp),e&&t(yj),j(po,e),e&&t(bj),e&&t(ze),e&&t(Ej),j(io,e),e&&t(qj),e&&t(zt),e&&t($j),j(uo,e),e&&t(kj),e&&t(Op),e&&t(Dj),e&&t(Tt),e&&t(Pj),e&&t(zp),e&&t(Oj),e&&t(bs),j(co),e&&t(zj),e&&t(St),e&&t(Tj),e&&t(xt),e&&t(Aj),j(mo,e),e&&t(Sj),e&&t(Ct),e&&t(xj),j(_o,e),e&&t(Cj),e&&t(It),e&&t(Ij),e&&t(Tp),e&&t(Rj),e&&t(X),e&&t(Uj),j(jo,e),e&&t(Lj),e&&t(Rt),e&&t(Zj),e&&t(Sp),e&&t(Gj),e&&t(Es),j(go),e&&t(Mj),e&&t(T),e&&t(Nj),e&&t(Rp),e&&t(Hj),j(wo,e),e&&t(Wj),e&&t(Up),e&&t(Fj),j(yo,e),e&&t(Bj),e&&t(Lp),e&&t(Vj),e&&t(qs),j(bo),e&&t(Yj),j(Zt,e),e&&t(Kj),e&&t(Te),e&&t(Jj),e&&t(Gt),e&&t(Xj),e&&t(Ae),e&&t(Qj),e&&t(Hp),e&&t(eg),e&&t(Mt),e&&t(sg),e&&t(Nt),e&&t(tg),e&&t(Q),e&&t(ag),e&&t(Vp),e&&t(ng),e&&t($s),j(qo),e&&t(og),e&&t($o),e&&t(lg),e&&t(Se),e&&t(rg),e&&t(Wt),e&&t(pg),e&&t(Kp),e&&t(ig),e&&t(Jp),e&&t(ug),e&&t(ks),j(Po),e&&t(cg),e&&t(Xp),e&&t(hg),j(Oo,e),e&&t(fg),e&&t(Qp),e&&t(dg),e&&t(xe),e&&t(mg),e&&t(ei),e&&t(_g),e&&t(Ps),j(zo),e&&t(vg),e&&t(si),e&&t(jg),j(To,e),e&&t(gg),e&&t(M),e&&t(wg),e&&t(Ce),e&&t(yg),e&&t(ti),e&&t(bg),e&&t(Vt),e&&t(Eg),e&&t(S),e&&t(qg),e&&t(je),e&&t($g),e&&t(ai),e&&t(kg),e&&t(Ie),e&&t(Dg),e&&t(Re),e&&t(Pg),e&&t(Ro),e&&t(Og),e&&t(ee),e&&t(zg),e&&t(oi),e&&t(Tg),e&&t(ge),e&&t(Ag),e&&t(Ue),e&&t(Sg),e&&t(Yt),e&&t(xg),e&&t(li),e&&t(Cg),e&&t(Os),j(Go),e&&t(Ig),e&&t(ri),e&&t(Rg),e&&t(pi),e&&t(Ug),j(Mo,e),e&&t(Lg),e&&t(Jt),e&&t(Zg),e&&t(Le),e&&t(Gg),e&&t(Xt),e&&t(Mg),e&&t(Ze),e&&t(Ng),e&&t(ii),e&&t(Hg),e&&t(zs),j(Fo),e&&t(Wg),e&&t(ui),e&&t(Fg),e&&t(ci),e&&t(Bg),e&&t(ea),e&&t(Vg),e&&t(Ge),e&&t(Yg),e&&t(hi),e&&t(Kg),e&&t(As),j(Vo),e&&t(Jg),e&&t(ta),e&&t(Xg),j(Yo,e),e&&t(Qg),e&&t(aa),e&&t(ew),j(Ko,e),e&&t(sw),e&&t(fi),e&&t(tw),e&&t(Ss),j(Jo),e&&t(aw),e&&t(oa),e&&t(nw),j(Xo,e),e&&t(ow),e&&t(la),e&&t(lw),j(Qo,e),e&&t(rw),e&&t(xs),j(el),e&&t(pw),e&&t(pa),e&&t(iw),e&&t(di),e&&t(uw),e&&t(ia),e&&t(cw),e&&t(mi),e&&t(hw),e&&t(Cs),j(sl),e&&t(fw),e&&t(Me),e&&t(dw),e&&t(E),e&&t(mw),e&&t(Ne),e&&t(_w),j(al,e),e&&t(vw),e&&t(vi),e&&t(jw),e&&t(se),e&&t(gw),e&&t(ji),e&&t(ww),e&&t(gi),e&&t(yw),j(pl,e),e&&t(bw),e&&t(ca),e&&t(Ew),e&&t(yi),e&&t(qw),j(il,e),e&&t($w),e&&t(te),e&&t(kw),e&&t(bi),e&&t(Dw),e&&t(Is),j(ul),e&&t(Pw),e&&t(x),e&&t(Ow),e&&t(Ei),e&&t(zw),e&&t(fa),e&&t(Tw),e&&t(D),e&&t(Aw),e&&t(We),e&&t(Sw),j(fl,e),e&&t(xw),e&&t(Fe),e&&t(Cw),e&&t(ae),e&&t(Iw),e&&t(ki),e&&t(Rw),j(dl,e),e&&t(Uw),e&&t(_a),e&&t(Lw),e&&t(va),e&&t(Zw),j(ml,e),e&&t(Gw),e&&t(N),e&&t(Mw),e&&t(Pi),e&&t(Nw),e&&t(Rs),j(_l),e&&t(Hw),e&&t(Oi),e&&t(Ww),e&&t(ga),e&&t(Fw),j(vl,e),e&&t(Bw),e&&t(wa),e&&t(Vw),e&&t(zi),e&&t(Yw),e&&t(Us),j(gl),e&&t(Kw),e&&t(Ti),e&&t(Jw),e&&t(Ai),e&&t(Xw),j(wl,e),e&&t(Qw),e&&t(Ye),e&&t(ey),e&&t(ba),e&&t(sy),e&&t(xi),e&&t(ty),j(yl,e),e&&t(ay),e&&t(Ea),e&&t(ny),e&&t(qa),e&&t(oy),e&&t(Ii),e&&t(ly),j(El,e),e&&t(ry),e&&t(ne),e&&t(py),e&&t($a),e&&t(iy),e&&t(Ui),e&&t(uy),j(ql,e),e&&t(cy),e&&t(ka),e&&t(hy),e&&t(Da),e&&t(fy),e&&t(Zi),e&&t(dy),e&&t(Ls),j(kl),e&&t(my),e&&t(Gi),e&&t(_y),j(Dl,e),e&&t(vy),e&&t(C),e&&t(jy),e&&t(Ni),e&&t(gy),j(Pl,e),e&&t(wy),e&&t(Oa),e&&t(yy),e&&t(Wi),e&&t(by),e&&t(Zs),j(Ol),e&&t(Ey),e&&t(Fi),e&&t(qy),j(zl,e),e&&t($y),e&&t(Ke),e&&t(ky),e&&t(Vi),e&&t(Dy),j(Tl,e),e&&t(Py),e&&t(Ta),e&&t(Oy),e&&t(Ki),e&&t(zy),e&&t(Gs),j(Al),e&&t(Ty),e&&t(Ji),e&&t(Ay),j(Sl,e),e&&t(Sy),e&&t(Je),e&&t(xy),e&&t(Qi),e&&t(Cy),j(xl,e),e&&t(Iy),e&&t(Sa),e&&t(Ry),e&&t(su),e&&t(Uy),e&&t(Ms),j(Cl),e&&t(Ly),e&&t(Ca),e&&t(Zy),e&&t(tu),e&&t(Gy),e&&t(Ia),e&&t(My),e&&t(H),e&&t(Ny),j(Il,e),e&&t(Hy),e&&t(au),e&&t(Wy),e&&t(Ra),e&&t(Fy),e&&t(nu),e&&t(By),e&&t(ou),e&&t(Vy),e&&t(lu),e&&t(Yy),j(Ul,e),e&&t(Ky),e&&t(Xe),e&&t(Jy),j(Ll,e),e&&t(Xy),j(Ua,e),e&&t(Qy),e&&t(La),e&&t(e2),e&&t(Za),e&&t(s2),j(Zl,e),e&&t(t2),e&&t(ru),e&&t(a2),e&&t(Qe),e&&t(n2),e&&t(pu),e&&t(o2),j(Gl,e),e&&t(l2),e&&t(Ga),e&&t(r2),j(Ml,e),e&&t(p2),e&&t(Ma),e&&t(i2),e&&t(iu),e&&t(u2),e&&t(Nl),e&&t(c2),e&&t(es),e&&t(h2),e&&t(uu),e&&t(f2),e&&t(Ns),j(Hl),e&&t(d2),e&&t(cu),e&&t(m2),e&&t(hu),e&&t(_2),e&&t(fu),e&&t(v2),e&&t(Hs),j(Wl),e&&t(j2),e&&t(Wa),e&&t(g2),j(Fl,e),e&&t(w2),e&&t(du),e&&t(y2),e&&t(k),e&&t(b2),j(Bl,e),e&&t(E2),e&&t(Fa),e&&t(q2),e&&t(vu),e&&t($2),e&&t(Ba),e&&t(k2),e&&t(oe),e&&t(D2),e&&t(Ws),j(Yl),e&&t(P2),e&&t(Kl),e&&t(O2),e&&t(Ya),e&&t(z2),e&&t(gu),e&&t(T2),j(Xl,e),e&&t(A2),e&&t(ss),e&&t(S2),e&&t(wu),e&&t(x2),e&&t(Fs),j(Ql),e&&t(C2),e&&t(yu),e&&t(I2),e&&t(Ja),e&&t(R2),j(er,e),e&&t(U2),e&&t(Eu),e&&t(L2),e&&t(Xa),e&&t(Z2),j(sr,e),e&&t(G2),e&&t(qu),e&&t(M2),e&&t($u),e&&t(N2),e&&t(Bs),j(tr),e&&t(H2),e&&t(ku),e&&t(W2),e&&t(Du),e&&t(F2),e&&t(I),j(nr),e&&t(B2),e&&t(Tu),e&&t(V2),e&&t(en),e&&t(Y2),e&&t(Ys),j(cr),e&&t(K2),e&&t(Au),e&&t(J2),e&&t(W),e&&t(X2),e&&t(tn),e&&t(Q2),e&&t(Ks),j(fr),e&&t(eb),e&&t(ts),e&&t(sb),e&&t(Iu),e&&t(tb),e&&t(Qs),j(vr),e&&t(ab),e&&t(as),e&&t(nb),e&&t(on),e&&t(ob),e&&t(ns),e&&t(lb),e&&t(Zu),e&&t(rb),j(jr,e),e&&t(pb),e&&t(Gu),e&&t(ib),j(gr,e),e&&t(ub),e&&t(et),j(wr),e&&t(cb),e&&t(q),j(yr),j(br),j(Er),j($r),j(kr),e&&t(hb),e&&t(nt),j(Dr),e&&t(fb),e&&t(re),e&&t(db),e&&t(Hu),e&&t(mb),e&&t(ls),e&&t(_b),e&&t(rs)}}}const pW={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function iW($n,y,Z){let{fw:b}=y;return $n.$$set=$=>{"fw"in $&&Z(0,b=$.fw)},[b]}class _W extends sW{constructor(y){super();tW(this,y,iW,rW,aW,{fw:0})}}export{_W as default,pW as metadata};
