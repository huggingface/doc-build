import{S as eW,i as sW,s as tW,e as o,k as u,w as f,t as a,M as aW,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-ab4e3193.js";import{T as QH}from"../../chunks/Tip-b5c6375a.js";import{D as Y1}from"../../chunks/Docstring-b69c0bd4.js";import{C as g}from"../../chunks/CodeBlock-516df0c5.js";import{I as w}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function nW($n){let y,Z;return{c(){y=o("p"),Z=a("This section is a must-read")},l(b){y=l(b,"P",{});var $=r(y);Z=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,y,$),s(y,Z)},d(b){b&&t(y)}}}function oW($n){let y,Z,b,$,hs,B,kn,fs,ds,ot,V;return{c(){y=o("p"),Z=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),hs=a(" was run, the "),B=o("code"),kn=a("model"),fs=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=o("code"),ot=a("model.load_state_dict(state_dict)"),V=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(Y){y=l(Y,"P",{});var G=r(y);Z=n(G,"Note, that once "),b=l(G,"CODE",{});var Nr=r(b);$=n(Nr,"load_state_dict_from_zero_checkpoint"),Nr.forEach(t),hs=n(G," was run, the "),B=l(G,"CODE",{});var be=r(B);kn=n(be,"model"),be.forEach(t),fs=n(G,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ds=l(G,"CODE",{});var Hr=r(ds);ot=n(Hr,"model.load_state_dict(state_dict)"),Hr.forEach(t),V=n(G,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),G.forEach(t)},m(Y,G){i(Y,y,G),s(y,Z),s(y,b),s(b,$),s(y,hs),s(y,B),s(B,kn),s(y,fs),s(y,ds),s(ds,ot),s(y,V)},d(Y){Y&&t(y)}}}function lW($n){let y,Z,b,$,hs,B,kn,fs,ds,ot,V,Y,G,Nr,be,Hr,Mq,K1,O,Lc,Nq,Hq,Zc,Wq,Fq,Gc,Bq,Vq,Mc,Yq,Kq,Nc,Jq,Xq,Hc,Qq,J1,qe,eE,Dn,sE,tE,Pn,aE,nE,X1,Wr,oE,Q1,Fr,lE,ev,lt,rE,On,pE,iE,sv,rt,zn,uE,Br,cE,hE,fE,L,dE,Vr,mE,_E,Wc,vE,jE,Fc,gE,wE,Bc,yE,bE,Yr,qE,EE,tv,Kr,$E,av,Jr,kE,nv,Xr,Vc,DE,ov,Qr,PE,lv,ep,Tn,OE,sp,zE,TE,rv,tp,AE,pv,ap,iv,ms,pt,Yc,An,SE,Kc,CE,uv,np,cv,_s,it,Jc,Sn,xE,Xc,IE,hv,op,RE,fv,Cn,dv,Ee,UE,Qc,LE,ZE,eh,GE,ME,mv,xn,_v,$e,NE,In,HE,WE,Rn,FE,BE,vv,ut,VE,lp,YE,KE,jv,rp,JE,gv,pp,XE,wv,Un,yv,ke,QE,sh,e0,s0,th,t0,a0,bv,ct,n0,ah,o0,l0,qv,Ln,Ev,_e,r0,nh,p0,i0,oh,u0,c0,lh,h0,$v,ip,f0,kv,Zn,Dv,De,d0,rh,m0,_0,ph,v0,j0,Pv,ht,g0,ih,w0,y0,Ov,Pe,b0,uh,q0,E0,Gn,$0,k0,zv,up,D0,Tv,Mn,Av,cp,P0,Sv,Nn,Cv,hp,O0,xv,Hn,Iv,ft,z0,ch,T0,A0,Rv,dt,S0,hh,C0,x0,Uv,mt,I0,Wn,R0,U0,Lv,fp,Zv,vs,_t,fh,Fn,L0,dh,Z0,Gv,vt,G0,dp,M0,N0,Mv,jt,js,H0,mh,W0,F0,_h,B0,V0,Y0,ve,K0,vh,J0,X0,jh,Q0,e6,Bn,s6,t6,Nv,mp,a6,Hv,Vn,Wv,_p,n6,Fv,Yn,Bv,z,o6,gh,l6,r6,wh,p6,i6,yh,u6,c6,bh,h6,f6,Kn,d6,m6,Vv,J,_6,qh,v6,j6,Eh,g6,w6,$h,y6,b6,Yv,gt,q6,kh,E6,$6,Kv,Jn,Jv,wt,k6,Dh,D6,P6,Xv,yt,O6,Xn,z6,T6,Qv,vp,ej,gs,bt,Ph,Qn,A6,Oh,S6,sj,qt,C6,jp,x6,I6,tj,eo,aj,Oe,R6,zh,U6,L6,so,Z6,G6,nj,gp,M6,oj,Et,Th,N6,H6,Ah,W6,lj,wp,F6,rj,to,pj,yp,B6,ij,$t,V6,ao,Y6,K6,uj,bp,J6,cj,qp,X6,hj,Ep,ws,no,Q6,Sh,e4,s4,t4,oo,a4,Ch,n4,fj,$p,dj,ys,kt,xh,lo,o4,Ih,l4,mj,Dt,r4,Rh,p4,i4,_j,kp,u4,vj,ro,jj,Pt,c4,Uh,h4,f4,gj,Dp,d4,wj,Pp,m4,yj,po,bj,ze,_4,Lh,v4,j4,Zh,g4,w4,qj,io,Ej,Ot,y4,Gh,b4,q4,$j,uo,kj,Op,E4,Dj,zt,$4,Mh,k4,D4,Pj,zp,Oj,bs,Tt,Nh,co,P4,Hh,O4,zj,At,z4,ho,T4,A4,Tj,St,S4,fo,C4,x4,Aj,mo,Sj,Ct,I4,Wh,R4,U4,Cj,_o,xj,xt,L4,vo,Z4,G4,Ij,Tp,M4,Rj,X,N4,Fh,H4,W4,Bh,F4,B4,Vh,V4,Y4,Uj,jo,Lj,It,K4,Ap,J4,X4,Zj,Sp,Gj,qs,Rt,Yh,go,Q4,Kh,e$,Mj,T,s$,Cp,t$,a$,xp,n$,o$,Jh,l$,r$,Xh,p$,i$,Ip,u$,c$,Nj,Rp,h$,Hj,wo,Wj,Up,f$,Fj,yo,Bj,Lp,Vj,Es,Ut,Qh,bo,d$,ef,m$,Yj,Lt,Kj,Te,_$,Zp,v$,j$,Gp,g$,w$,Jj,Zt,y$,Mp,b$,q$,Xj,Ae,E$,sf,$$,k$,Np,D$,P$,Qj,Hp,O$,eg,Gt,z$,Wp,T$,A$,sg,Mt,tf,S$,C$,qo,x$,Fp,I$,R$,tg,Q,U$,af,L$,Z$,Bp,G$,M$,nf,N$,H$,ag,Vp,ng,$s,Nt,of,Eo,W$,lf,F$,og,$o,ko,B$,V$,lg,Se,Y$,rf,K$,J$,Do,X$,Q$,rg,Ht,e5,Yp,s5,t5,pg,Kp,a5,ig,Jp,ug,ks,Wt,pf,Po,n5,uf,o5,cg,Xp,l5,hg,Oo,fg,Qp,cf,r5,dg,Ce,Ds,p5,hf,i5,u5,ff,c5,h5,f5,A,df,d5,m5,mf,_5,v5,_f,j5,g5,vf,w5,y5,jf,b5,q5,gf,E5,$5,k5,wf,D5,mg,ei,_g,Ps,Ft,yf,zo,P5,bf,O5,vg,si,z5,jg,To,gg,M,T5,qf,A5,S5,Ef,C5,x5,$f,I5,R5,kf,U5,L5,wg,xe,Z5,Df,G5,M5,Pf,N5,H5,yg,ti,Of,W5,bg,Bt,Ao,zf,F5,B5,Tf,V5,Y5,So,Af,K5,J5,Sf,X5,qg,S,Q5,Cf,e8,s8,xf,t8,a8,If,n8,o8,Rf,l8,r8,Uf,p8,i8,Eg,je,Lf,u8,c8,Zf,h8,f8,Gf,d8,m8,$g,ai,_8,kg,Ie,Co,Mf,v8,j8,Nf,g8,w8,xo,Hf,y8,b8,Wf,q8,E8,Io,Ff,$8,k8,Bf,D8,Dg,Re,P8,Vf,O8,z8,ni,T8,A8,Pg,Ro,Yf,S8,C8,Og,ee,x8,Kf,I8,R8,Jf,U8,L8,Xf,Z8,G8,zg,oi,Uo,Qf,M8,N8,ed,H8,Tg,ge,sd,W8,F8,td,B8,V8,ad,Y8,K8,Ag,Ue,J8,nd,X8,Q8,od,e9,s9,Sg,Vt,Lo,t9,ld,a9,n9,o9,Zo,l9,rd,r9,p9,Cg,li,xg,Os,Yt,pd,Go,i9,id,u9,Ig,ri,c9,Rg,pi,h9,Ug,Mo,Lg,Kt,f9,ud,d9,m9,Zg,Le,_9,No,v9,j9,Ho,g9,w9,Gg,Jt,y9,cd,b9,q9,Mg,Ze,E9,hd,$9,k9,Wo,D9,P9,Ng,ii,Hg,zs,Xt,fd,Fo,O9,dd,z9,Wg,ui,T9,Fg,ci,A9,Bg,Qt,Ts,S9,md,C9,x9,_d,I9,R9,U9,Bo,L9,vd,Z9,G9,Vg,Ge,M9,jd,N9,H9,gd,W9,F9,Yg,hi,Kg,As,ea,wd,Vo,B9,yd,V9,Jg,sa,Y9,bd,K9,J9,Xg,Yo,Qg,ta,X9,qd,Q9,e7,ew,Ko,sw,fi,tw,Ss,aa,Ed,Jo,s7,$d,t7,aw,na,a7,kd,n7,o7,nw,Xo,ow,oa,l7,Dd,r7,p7,lw,Qo,rw,Cs,la,Pd,el,i7,Od,u7,pw,ra,c7,zd,h7,f7,iw,di,d7,uw,pa,m7,Td,_7,v7,cw,mi,hw,xs,ia,Ad,sl,j7,Sd,g7,fw,Me,w7,Cd,y7,b7,tl,q7,E7,dw,q,$7,xd,k7,D7,_i,P7,O7,Id,z7,T7,Rd,A7,S7,Ud,C7,x7,Ld,I7,R7,Zd,U7,L7,Gd,Z7,G7,mw,Ne,M7,Md,N7,H7,Nd,W7,F7,_w,al,vw,vi,B7,jw,se,nl,Hd,V7,Y7,Wd,K7,J7,ol,Fd,X7,Q7,Bd,ek,sk,ll,Vd,tk,ak,Yd,nk,ok,rl,Kd,lk,rk,Jd,pk,gw,ji,ik,ww,gi,uk,yw,pl,bw,ua,ck,wi,hk,fk,qw,yi,dk,Ew,il,$w,te,mk,Xd,_k,vk,Qd,jk,gk,em,wk,yk,kw,bi,Dw,Is,ca,sm,ul,bk,tm,qk,Pw,C,Ek,am,$k,kk,nm,Dk,Pk,om,Ok,zk,lm,Tk,Ak,cl,Sk,Ck,Ow,qi,xk,zw,ha,hl,rm,Ik,Rk,pm,Uk,Lk,He,im,Zk,Gk,um,Mk,Nk,cm,Hk,Wk,Tw,D,Fk,hm,Bk,Vk,Ei,Yk,Kk,fm,Jk,Xk,dm,Qk,eD,mm,sD,tD,_m,aD,nD,Aw,We,oD,vm,lD,rD,jm,pD,iD,Sw,fl,Cw,Fe,uD,gm,cD,hD,$i,fD,dD,xw,ae,fa,wm,mD,_D,ym,vD,jD,gD,da,bm,wD,yD,qm,bD,qD,ED,Be,Em,$D,kD,$m,DD,PD,km,OD,zD,TD,Ve,Dm,AD,SD,Pm,CD,xD,Om,ID,RD,Iw,ki,UD,Rw,dl,Uw,ma,LD,Di,ZD,GD,Lw,_a,MD,zm,ND,HD,Zw,ml,Gw,N,WD,Tm,FD,BD,Am,VD,YD,Sm,KD,JD,Cm,XD,QD,Mw,Pi,Nw,Rs,va,xm,_l,eP,Im,sP,Hw,Oi,tP,Ww,ja,aP,Rm,nP,oP,Fw,vl,Bw,ga,lP,jl,rP,pP,Vw,zi,Yw,Us,wa,Um,gl,iP,Lm,uP,Kw,Ti,cP,Jw,Ai,hP,Xw,wl,Qw,Ye,fP,Si,dP,mP,Zm,_P,vP,ey,ya,jP,Gm,gP,wP,sy,Ci,yP,ty,yl,ay,ba,bP,xi,qP,EP,ny,qa,$P,bl,kP,DP,oy,Ii,PP,ly,ql,ry,ne,OP,Ri,zP,TP,Mm,AP,SP,Nm,CP,xP,py,Ea,IP,Hm,RP,UP,iy,Ui,LP,uy,El,cy,$a,ZP,Li,GP,MP,hy,ka,NP,$l,HP,WP,fy,Zi,dy,Ls,Da,Wm,kl,FP,Fm,BP,my,Gi,VP,_y,Dl,vy,x,YP,Mi,KP,JP,Bm,XP,QP,Vm,eO,sO,Ym,tO,aO,Km,nO,oO,jy,Ni,lO,gy,Pl,wy,Pa,rO,Hi,pO,iO,yy,Wi,by,Zs,Oa,Jm,Ol,uO,Xm,cO,qy,Fi,hO,Ey,zl,$y,Ke,fO,Bi,dO,mO,Qm,_O,vO,ky,Vi,jO,Dy,Tl,Py,za,gO,Yi,wO,yO,Oy,Ki,zy,Gs,Ta,e_,Al,bO,s_,qO,Ty,Ji,EO,Ay,Sl,Sy,Je,$O,Xi,kO,DO,t_,PO,OO,Cy,Qi,zO,xy,Cl,Iy,Aa,TO,eu,AO,SO,Ry,su,Uy,Ms,Sa,a_,xl,CO,n_,xO,Ly,Ca,IO,o_,RO,UO,Zy,tu,l_,LO,Gy,xa,ZO,r_,GO,MO,My,H,NO,p_,HO,WO,i_,FO,BO,u_,VO,YO,c_,KO,JO,Ny,Il,Hy,au,h_,XO,Wy,Ia,QO,Rl,ez,sz,Fy,nu,f_,tz,By,ou,az,Vy,lu,nz,Yy,Ul,Ky,Xe,oz,d_,lz,rz,m_,pz,iz,Jy,Ll,Xy,Ra,Qy,Ua,uz,__,cz,hz,e2,La,fz,v_,dz,mz,s2,Zl,t2,ru,j_,_z,a2,Qe,vz,g_,jz,gz,w_,wz,yz,n2,pu,bz,o2,Gl,l2,Za,qz,y_,Ez,$z,r2,Ml,p2,Ga,kz,b_,Dz,Pz,i2,iu,Oz,u2,Nl,q_,zz,Tz,c2,es,Az,E_,Sz,Cz,$_,xz,Iz,h2,uu,Rz,f2,Ns,Ma,k_,Hl,Uz,D_,Lz,d2,cu,Zz,m2,hu,Gz,_2,fu,Mz,v2,Hs,Na,P_,Wl,Nz,O_,Hz,j2,Ha,Wz,z_,Fz,Bz,g2,Fl,w2,du,Vz,y2,k,Yz,T_,Kz,Jz,A_,Xz,Qz,S_,eT,sT,mu,tT,aT,_u,nT,oT,C_,lT,rT,x_,pT,iT,b2,Bl,q2,Wa,uT,I_,cT,hT,E2,vu,fT,$2,Fa,dT,Vl,mT,_T,k2,oe,vT,R_,jT,gT,U_,wT,yT,ju,bT,qT,D2,Ws,Ba,L_,Yl,ET,Z_,$T,P2,Kl,kT,Jl,DT,O2,Va,PT,G_,OT,zT,z2,gu,TT,T2,Xl,A2,ss,AT,M_,ST,CT,N_,xT,IT,S2,wu,C2,Fs,Ya,H_,Ql,RT,W_,UT,x2,yu,LT,I2,Ka,ZT,bu,GT,MT,R2,er,U2,qu,NT,L2,Ja,HT,F_,WT,FT,Z2,sr,G2,Eu,BT,M2,$u,VT,N2,Bs,Xa,B_,tr,YT,V_,KT,H2,ku,JT,W2,Du,XT,F2,I,Y_,K_,QT,eA,J_,we,sA,Pu,tA,aA,Ou,nA,oA,zu,lA,rA,pA,ar,X_,iA,uA,nr,cA,Q_,or,hA,lr,fA,dA,mA,e1,s1,_A,vA,t1,rr,jA,pr,gA,wA,B2,Tu,yA,V2,Qa,Vs,a1,bA,qA,n1,EA,$A,o1,kA,DA,l1,ir,PA,ur,OA,zA,Y2,Ys,en,r1,cr,TA,p1,AA,K2,Au,Su,i1,SA,CA,J2,W,xA,u1,IA,RA,c1,UA,LA,h1,ZA,GA,f1,MA,NA,X2,sn,HA,hr,WA,FA,Q2,Ks,tn,d1,fr,BA,m1,VA,eb,ts,an,YA,Cu,KA,JA,_1,XA,QA,dr,eS,mr,sS,tS,aS,Js,nS,xu,oS,lS,_r,rS,pS,sb,Iu,tb,Xs,nn,v1,vr,iS,j1,uS,ab,as,cS,Ru,hS,fS,Uu,dS,mS,nb,on,_S,Lu,vS,jS,ob,ns,gS,Zu,wS,yS,Gu,bS,qS,lb,Mu,ES,rb,jr,pb,Nu,$S,ib,gr,ub,Qs,ln,g1,wr,kS,w1,DS,cb,E,yr,PS,y1,OS,zS,ye,TS,b1,AS,SS,q1,CS,xS,E1,IS,RS,US,le,Hu,LS,ZS,$1,GS,MS,Wu,NS,HS,k1,WS,FS,BS,os,br,VS,D1,YS,KS,et,JS,P1,XS,QS,O1,eC,sC,tC,rn,qr,aC,Er,nC,z1,oC,lC,rC,pn,$r,pC,st,iC,T1,uC,cC,A1,hC,fC,dC,un,kr,mC,tt,_C,S1,vC,jC,C1,gC,wC,hb,at,cn,x1,Dr,yC,I1,bC,fb,re,R1,Pr,qC,EC,U1,Or,$C,kC,L1,zr,DC,PC,Z1,Tr,OC,db,Fu,zC,mb,ls,G1,Ar,TC,AC,M1,Sr,SC,CC,N1,Cr,xC,_b,rs,IC,Bu,RC,UC,xr,LC,ZC,vb;return B=new w({}),An=new w({}),Sn=new w({}),Cn=new g({props:{code:"pip install deepspeed,",highlighted:"pip install deepspeed"}}),xn=new g({props:{code:"pip install transformers[deepspeed],",highlighted:"pip install transformers[deepspeed]"}}),Un=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
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

os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "9994"  # modify if RuntimeError: Address already in use
os.environ["RANK"] = "0"
os.environ["LOCAL_RANK"] = "0"
os.environ["WORLD_SIZE"] = "1"

# Now proceed as normal, plus pass the deepspeed config file
training_args = TrainingArguments(..., deepspeed="ds_config_zero3.json")
trainer = Trainer(...)
trainer.train(),`,highlighted:`<span class="hljs-comment"># DeepSpeed requires a distributed environment even when only one process is used.</span>
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
<span class="hljs-punctuation">}</span>`}}),go=new w({}),wo=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json"),',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),yo=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict),`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),bo=new w({}),Lt=new QH({props:{warning:"&lcub;true}",$$slots:{default:[nW]},$$scope:{ctx:$n}}}),Eo=new w({}),Po=new w({}),Oo=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ql=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
},`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),El=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Cl=new g({props:{code:`{
    "gradient_clipping": 1.0
},`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),xl=new w({}),Il=new g({props:{code:`{
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
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Ra=new QH({props:{$$slots:{default:[oW]},$$scope:{ctx:$n}}}),Zl=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict),`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
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
trainer = Trainer(model=model, args=training_args, ...)`}}),Yl=new w({}),Xl=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True),',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),Ql=new w({}),er=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json,",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),sr=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
model = AutoModel.from_pretrained("gpt2")
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),gr=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, AutoConfig, deepspeed

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
config = AutoConfig.from_pretrained("gpt2")
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...),`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoConfig, deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),wr=new w({}),yr=new Y1({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),br=new Y1({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/deepspeed.py#L114"}}),qr=new Y1({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/deepspeed.py#L105"}}),$r=new Y1({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/deepspeed.py#L146"}}),kr=new Y1({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/deepspeed.py#L137"}}),Dr=new w({}),{c(){y=o("meta"),Z=u(),b=o("h1"),$=o("a"),hs=o("span"),f(B.$$.fragment),kn=u(),fs=o("span"),ds=a("DeepSpeed Integration"),ot=u(),V=o("p"),Y=o("a"),G=a("DeepSpeed"),Nr=a(" implements everything described in the "),be=o("a"),Hr=a("ZeRO paper"),Mq=a(". Currently it provides full support for:"),K1=u(),O=o("ol"),Lc=o("li"),Nq=a("Optimizer state partitioning (ZeRO stage 1)"),Hq=u(),Zc=o("li"),Wq=a("Gradient partitioning (ZeRO stage 2)"),Fq=u(),Gc=o("li"),Bq=a("Parameter partitioning (ZeRO stage 3)"),Vq=u(),Mc=o("li"),Yq=a("Custom mixed precision training handling"),Kq=u(),Nc=o("li"),Jq=a("A range of fast CUDA-extension-based optimizers"),Xq=u(),Hc=o("li"),Qq=a("ZeRO-Offload to CPU and NVMe"),J1=u(),qe=o("p"),eE=a("ZeRO-Offload has its own dedicated paper: "),Dn=o("a"),sE=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),tE=a(". And NVMe-support is described in the paper "),Pn=o("a"),aE=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),nE=a("."),X1=u(),Wr=o("p"),oE=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Q1=u(),Fr=o("p"),lE=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),ev=u(),lt=o("p"),rE=a("\u{1F917} Transformers integrates "),On=o("a"),pE=a("DeepSpeed"),iE=a(" via 2 options:"),sv=u(),rt=o("ol"),zn=o("li"),uE=a("Integration of the core DeepSpeed features via "),Br=o("a"),cE=a("Trainer"),hE=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),fE=u(),L=o("li"),dE=a("If you don\u2019t use "),Vr=o("a"),mE=a("Trainer"),_E=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wc=o("code"),vE=a("from_pretrained"),jE=a(" and "),Fc=o("code"),gE=a("from_config"),wE=a(` include integration of essential
parts of DeepSpeed like `),Bc=o("code"),yE=a("zero.Init"),bE=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Yr=o("a"),qE=a("deepspeed-non-trainer-integration"),EE=a("."),tv=u(),Kr=o("p"),$E=a("What is integrated:"),av=u(),Jr=o("p"),kE=a("Training:"),nv=u(),Xr=o("ol"),Vc=o("li"),DE=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),ov=u(),Qr=o("p"),PE=a("Inference:"),lv=u(),ep=o("ol"),Tn=o("li"),OE=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),sp=o("a"),zE=a("deepspeed-zero-inference"),TE=a("."),rv=u(),tp=o("p"),AE=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),pv=u(),ap=o("a"),iv=u(),ms=o("h2"),pt=o("a"),Yc=o("span"),f(An.$$.fragment),SE=u(),Kc=o("span"),CE=a("Trainer Deepspeed Integration"),uv=u(),np=o("a"),cv=u(),_s=o("h3"),it=o("a"),Jc=o("span"),f(Sn.$$.fragment),xE=u(),Xc=o("span"),IE=a("Installation"),hv=u(),op=o("p"),RE=a("Install the library via pypi:"),fv=u(),f(Cn.$$.fragment),dv=u(),Ee=o("p"),UE=a("or via "),Qc=o("code"),LE=a("transformers"),ZE=a("\u2019 "),eh=o("code"),GE=a("extras"),ME=a(":"),mv=u(),f(xn.$$.fragment),_v=u(),$e=o("p"),NE=a("or find more details on "),In=o("a"),HE=a("the DeepSpeed\u2019s GitHub page"),WE=a(` and
`),Rn=o("a"),FE=a("advanced install"),BE=a("."),vv=u(),ut=o("p"),VE=a("If you\u2019re still struggling with the build, first make sure to read "),lp=o("a"),YE=a("zero-install-notes"),KE=a("."),jv=u(),rp=o("p"),JE=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),gv=u(),pp=o("p"),XE=a("To make a local build for DeepSpeed:"),wv=u(),f(Un.$$.fragment),yv=u(),ke=o("p"),QE=a("If you intend to use NVMe offload you will also need to include "),sh=o("code"),e0=a("DS_BUILD_AIO=1"),s0=a(` in the instructions above (and also
install `),th=o("em"),t0=a("libaio-dev"),a0=a(" system-wide)."),bv=u(),ct=o("p"),n0=a("Edit "),ah=o("code"),o0=a("TORCH_CUDA_ARCH_LIST"),l0=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),qv=u(),f(Ln.$$.fragment),Ev=u(),_e=o("p"),r0=a("So if you get "),nh=o("code"),p0=a("8, 6"),i0=a(", then use "),oh=o("code"),u0=a('TORCH_CUDA_ARCH_LIST="8.6"'),c0=a(`. If you have multiple different cards, you can list all
of them like so `),lh=o("code"),h0=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),$v=u(),ip=o("p"),f0=a("If you need to use the same setup on multiple machines, make a binary wheel:"),kv=u(),f(Zn.$$.fragment),Dv=u(),De=o("p"),d0=a("it will generate something like "),rh=o("code"),m0=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_0=a(` which now you can install
as `),ph=o("code"),v0=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),j0=a(" locally or on any other machine."),Pv=u(),ht=o("p"),g0=a("Again, remember to ensure to adjust "),ih=o("code"),w0=a("TORCH_CUDA_ARCH_LIST"),y0=a(" to the target architectures."),Ov=u(),Pe=o("p"),b0=a("You can find the complete list of NVIDIA GPUs and their corresponding "),uh=o("strong"),q0=a("Compute Capabilities"),E0=a(` (same as arch in this
context) `),Gn=o("a"),$0=a("here"),k0=a("."),zv=u(),up=o("p"),D0=a("You can check the archs pytorch was built with using:"),Tv=u(),f(Mn.$$.fragment),Av=u(),cp=o("p"),P0=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Sv=u(),f(Nn.$$.fragment),Cv=u(),hp=o("p"),O0=a("If the output is:"),xv=u(),f(Hn.$$.fragment),Iv=u(),ft=o("p"),z0=a("then you know that this card\u2019s arch is "),ch=o("code"),T0=a("8.6"),A0=a("."),Rv=u(),dt=o("p"),S0=a("You can also leave "),hh=o("code"),C0=a("TORCH_CUDA_ARCH_LIST"),x0=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Uv=u(),mt=o("p"),I0=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Wn=o("a"),R0=a("Deepspeed"),U0=a(","),Lv=u(),fp=o("a"),Zv=u(),vs=o("h3"),_t=o("a"),fh=o("span"),f(Fn.$$.fragment),L0=u(),dh=o("span"),Z0=a("Deployment with multiple GPUs"),Gv=u(),vt=o("p"),G0=a("To deploy this feature with multiple GPUs adjust the "),dp=o("a"),M0=a("Trainer"),N0=a(` command line arguments as
following:`),Mv=u(),jt=o("ol"),js=o("li"),H0=a("replace "),mh=o("code"),W0=a("python -m torch.distributed.launch"),F0=a(" with "),_h=o("code"),B0=a("deepspeed"),V0=a("."),Y0=u(),ve=o("li"),K0=a("add a new argument "),vh=o("code"),J0=a("--deepspeed ds_config.json"),X0=a(", where "),jh=o("code"),Q0=a("ds_config.json"),e6=a(` is the DeepSpeed configuration file as
documented `),Bn=o("a"),s6=a("here"),t6=a(". The file naming is up to you."),Nv=u(),mp=o("p"),a6=a("Therefore, if your original command line looked as follows:"),Hv=u(),f(Vn.$$.fragment),Wv=u(),_p=o("p"),n6=a("Now it should be:"),Fv=u(),f(Yn.$$.fragment),Bv=u(),z=o("p"),o6=a("Unlike, "),gh=o("code"),l6=a("torch.distributed.launch"),r6=a(" where you have to specify how many GPUs to use with "),wh=o("code"),p6=a("--nproc_per_node"),i6=a(`, with the
`),yh=o("code"),u6=a("deepspeed"),c6=a(" launcher you don\u2019t have to use the corresponding "),bh=o("code"),h6=a("--num_gpus"),f6=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Kn=o("a"),d6=a("here"),m6=a("."),Vv=u(),J=o("p"),_6=a("In fact, you can continue using "),qh=o("code"),v6=a("-m torch.distributed.launch"),j6=a(` with DeepSpeed as long as you don\u2019t need to use
`),Eh=o("code"),g6=a("deepspeed"),w6=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),$h=o("code"),y6=a("deepspeed"),b6=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Yv=u(),gt=o("p"),q6=a("Here is an example of running "),kh=o("code"),E6=a("run_translation.py"),$6=a(" under DeepSpeed deploying all available GPUs:"),Kv=u(),f(Jn.$$.fragment),Jv=u(),wt=o("p"),k6=a("Note that in the DeepSpeed documentation you are likely to see "),Dh=o("code"),D6=a("--deepspeed --deepspeed_config ds_config.json"),P6=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Xv=u(),yt=o("p"),O6=a("For some practical usage examples, please, see this "),Xn=o("a"),z6=a("post"),T6=a("."),Qv=u(),vp=o("a"),ej=u(),gs=o("h3"),bt=o("a"),Ph=o("span"),f(Qn.$$.fragment),A6=u(),Oh=o("span"),S6=a("Deployment with one GPU"),sj=u(),qt=o("p"),C6=a("To deploy DeepSpeed with one GPU adjust the "),jp=o("a"),x6=a("Trainer"),I6=a(" command line arguments as follows:"),tj=u(),f(eo.$$.fragment),aj=u(),Oe=o("p"),R6=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),zh=o("code"),U6=a("--num_gpus=1"),L6=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),so=o("a"),Z6=a("documentation"),G6=a(" discusses the launcher options."),nj=u(),gp=o("p"),M6=a("Why would you want to use DeepSpeed with just one GPU?"),oj=u(),Et=o("ol"),Th=o("li"),N6=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),H6=u(),Ah=o("li"),W6=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),lj=u(),wp=o("p"),F6=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),rj=u(),f(to.$$.fragment),pj=u(),yp=o("p"),B6=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),ij=u(),$t=o("p"),V6=a("For a practical usage example of this type of deployment, please, see this "),ao=o("a"),Y6=a("post"),K6=a("."),uj=u(),bp=o("p"),J6=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),cj=u(),qp=o("p"),X6=a("Notes:"),hj=u(),Ep=o("ul"),ws=o("li"),no=o("p"),Q6=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Sh=o("code"),e4=a("CUDA_VISIBLE_DEVICES"),s4=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),t4=u(),f(oo.$$.fragment),a4=u(),Ch=o("p"),n4=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),fj=u(),$p=o("a"),dj=u(),ys=o("h3"),kt=o("a"),xh=o("span"),f(lo.$$.fragment),o4=u(),Ih=o("span"),l4=a("Deployment in Notebooks"),mj=u(),Dt=o("p"),r4=a("The problem with running notebook cells as a script is that there is no normal "),Rh=o("code"),p4=a("deepspeed"),i4=a(` launcher to rely on, so
under certain setups we have to emulate it.`),_j=u(),kp=o("p"),u4=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),vj=u(),f(ro.$$.fragment),jj=u(),Pt=o("p"),c4=a("Note: "),Uh=o("code"),h4=a("..."),f4=a(" stands for the normal arguments that you\u2019d pass to the functions."),gj=u(),Dp=o("p"),d4=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),wj=u(),Pp=o("p"),m4=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),yj=u(),f(po.$$.fragment),bj=u(),ze=o("p"),_4=a("If the training script is in a normal file and not in the notebook cells, you can launch "),Lh=o("code"),v4=a("deepspeed"),j4=a(` normally via
shell from a cell. For example, to use `),Zh=o("code"),g4=a("run_translation.py"),w4=a(" you would launch it with:"),qj=u(),f(io.$$.fragment),Ej=u(),Ot=o("p"),y4=a("or with "),Gh=o("code"),b4=a("%%bash"),q4=a(" magic, where you can write a multi-line code for the shell program to run:"),$j=u(),f(uo.$$.fragment),kj=u(),Op=o("p"),E4=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),Dj=u(),zt=o("p"),$4=a("Note: While "),Mh=o("code"),k4=a("%%bash"),D4=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Pj=u(),zp=o("a"),Oj=u(),bs=o("h3"),Tt=o("a"),Nh=o("span"),f(co.$$.fragment),P4=u(),Hh=o("span"),O4=a("Configuration"),zj=u(),At=o("p"),z4=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),ho=o("a"),T4=a("following documentation"),A4=a("."),Tj=u(),St=o("p"),S4=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),fo=o("a"),C4=a(`the DeepSpeedExamples
repo`),x4=a(":"),Aj=u(),f(mo.$$.fragment),Sj=u(),Ct=o("p"),I4=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Wh=o("code"),R4=a(".json"),U4=a(" files with:"),Cj=u(),f(_o.$$.fragment),xj=u(),xt=o("p"),L4=a("Some more examples are to be found in the "),vo=o("a"),Z4=a("main repo"),G4=a(" as well."),Ij=u(),Tp=o("p"),M4=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Rj=u(),X=o("p"),N4=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Fh=o("code"),H4=a("AdamW"),W4=a(" optimizer and "),Bh=o("code"),F4=a("WarmupLR"),B4=a(` scheduler and will enable mixed
precision training if `),Vh=o("code"),V4=a("--fp16"),Y4=a(" is passed:"),Uj=u(),f(jo.$$.fragment),Lj=u(),It=o("p"),K4=a("When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=o("a"),J4=a("Trainer"),X4=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Zj=u(),Sp=o("a"),Gj=u(),qs=o("h3"),Rt=o("a"),Yh=o("span"),f(go.$$.fragment),Q4=u(),Kh=o("span"),e$=a("Passing Configuration"),Mj=u(),T=o("p"),s$=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Cp=o("a"),t$=a("Trainer"),a$=a(" via "),xp=o("a"),n$=a("TrainingArguments"),o$=a(" then for the "),Jh=o("code"),l$=a("deepspeed"),r$=a(` argument you can
pass a nested `),Xh=o("code"),p$=a("dict"),i$=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=o("a"),u$=a("TrainingArguments"),c$=a("."),Nj=u(),Rp=o("p"),h$=a("To summarize you can do:"),Hj=u(),f(wo.$$.fragment),Wj=u(),Up=o("p"),f$=a("or:"),Fj=u(),f(yo.$$.fragment),Bj=u(),Lp=o("a"),Vj=u(),Es=o("h3"),Ut=o("a"),Qh=o("span"),f(bo.$$.fragment),d$=u(),ef=o("span"),m$=a("Shared Configuration"),Yj=u(),f(Lt.$$.fragment),Kj=u(),Te=o("p"),_$=a("Some configuration values are required by both the "),Zp=o("a"),v$=a("Trainer"),j$=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=o("a"),g$=a("Trainer"),w$=a(" command line arguments."),Jj=u(),Zt=o("p"),y$=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=o("a"),b$=a("Trainer"),q$=a(` do the majority
of configuration for you.`),Xj=u(),Ae=o("p"),E$=a("Therefore, in the rest of this guide you will find a special configuration value: "),sf=o("code"),$$=a("auto"),k$=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=o("a"),D$=a("Trainer"),P$=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Qj=u(),Hp=o("p"),O$=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),eg=u(),Gt=o("p"),z$=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=o("a"),T$=a("TrainingArguments"),A$=a(" based on that. The steps are:"),sg=u(),Mt=o("ol"),tf=o("li"),S$=a("Create or load the DeepSpeed configuration to be used as a master configuration"),C$=u(),qo=o("li"),x$=a("Create the "),Fp=o("a"),I$=a("TrainingArguments"),R$=a(" object based on these values"),tg=u(),Q=o("p"),U$=a("Do note that some values, such as "),af=o("code"),L$=a("scheduler.params.total_num_steps"),Z$=a(` are calculated by
`),Bp=o("a"),G$=a("Trainer"),M$=a(" during "),nf=o("code"),N$=a("train"),H$=a(", but you can of course do the math yourself."),ag=u(),Vp=o("a"),ng=u(),$s=o("h3"),Nt=o("a"),of=o("span"),f(Eo.$$.fragment),W$=u(),lf=o("span"),F$=a("ZeRO"),og=u(),$o=o("p"),ko=o("a"),B$=a("Zero Redundancy Optimizer (ZeRO)"),V$=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),lg=u(),Se=o("p"),Y$=a("The "),rf=o("code"),K$=a("zero_optimization"),J$=a(" section of the configuration file is the most important part ("),Do=o("a"),X$=a("docs"),Q$=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),rg=u(),Ht=o("p"),e5=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=o("a"),s5=a("Trainer"),t5=a(` provides
no equivalent command line arguments.`),pg=u(),Kp=o("p"),a5=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),ig=u(),Jp=o("a"),ug=u(),ks=o("h4"),Wt=o("a"),pf=o("span"),f(Po.$$.fragment),n5=u(),uf=o("span"),o5=a("ZeRO-2 Config"),cg=u(),Xp=o("p"),l5=a("The following is an example of configuration for ZeRO stage 2:"),hg=u(),f(Oo.$$.fragment),fg=u(),Qp=o("p"),cf=o("strong"),r5=a("Performance tuning:"),dg=u(),Ce=o("ul"),Ds=o("li"),p5=a("enabling "),hf=o("code"),i5=a("offload_optimizer"),u5=a(" should reduce GPU RAM usage (it requires "),ff=o("code"),c5=a('"stage": 2'),h5=a(")"),f5=u(),A=o("li"),df=o("code"),d5=a('"overlap_comm": true'),m5=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),mf=o("code"),_5=a("overlap_comm"),v5=a(` uses 4.5x
the `),_f=o("code"),j5=a("allgather_bucket_size"),g5=a(" and "),vf=o("code"),w5=a("reduce_bucket_size"),y5=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),jf=o("code"),b5=a("5e8 x 2Bytes x 2 x 4.5"),q5=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),gf=o("code"),E5=a("2e8"),$5=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),k5=u(),wf=o("li"),D5=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),mg=u(),ei=o("a"),_g=u(),Ps=o("h4"),Ft=o("a"),yf=o("span"),f(zo.$$.fragment),P5=u(),bf=o("span"),O5=a("ZeRO-3 Config"),vg=u(),si=o("p"),z5=a("The following is an example of configuration for ZeRO stage 3:"),jg=u(),f(To.$$.fragment),gg=u(),M=o("p"),T5=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),qf=o("code"),A5=a('"device": "cpu"'),S5=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=o("code"),C5=a("none"),x5=a(" instead of "),$f=o("code"),I5=a("cpu"),R5=a(" for the "),kf=o("code"),U5=a("device"),L5=a(` entry. Offloading to
NVMe is discussed further down.`),wg=u(),xe=o("p"),Z5=a("Pinned memory is enabled with "),Df=o("code"),G5=a("pin_memory"),M5=a(" set to "),Pf=o("code"),N5=a("true"),H5=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),yg=u(),ti=o("p"),Of=o("strong"),W5=a("Performance tuning:"),bg=u(),Bt=o("ul"),Ao=o("li"),zf=o("code"),F5=a("stage3_max_live_parameters"),B5=a(": "),Tf=o("code"),V5=a("1e9"),Y5=u(),So=o("li"),Af=o("code"),K5=a("stage3_max_reuse_distance"),J5=a(": "),Sf=o("code"),X5=a("1e9"),qg=u(),S=o("p"),Q5=a("If hitting OOM reduce "),Cf=o("code"),e8=a("stage3_max_live_parameters"),s8=a(" and "),xf=o("code"),t8=a("stage3_max_reuse_distance"),a8=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),If=o("code"),n8=a("1e9"),o8=a(` would consume ~2GB. The memory is shared by
`),Rf=o("code"),l8=a("stage3_max_live_parameters"),r8=a(" and "),Uf=o("code"),p8=a("stage3_max_reuse_distance"),i8=a(", so it\u2019s not additive, it\u2019s just 2GB total."),Eg=u(),je=o("p"),Lf=o("code"),u8=a("stage3_max_live_parameters"),c8=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Zf=o("code"),h8=a("stage3_max_reuse_distance"),f8=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Gf=o("code"),d8=a("stage3_max_reuse_distance"),m8=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),$g=u(),ai=o("p"),_8=a("The following configuration values depend on the model\u2019s hidden size:"),kg=u(),Ie=o("ul"),Co=o("li"),Mf=o("code"),v8=a("reduce_bucket_size"),j8=a(": "),Nf=o("code"),g8=a("hidden_size*hidden_size"),w8=u(),xo=o("li"),Hf=o("code"),y8=a("stage3_prefetch_bucket_size"),b8=a(": "),Wf=o("code"),q8=a("0.9 * hidden_size * hidden_size"),E8=u(),Io=o("li"),Ff=o("code"),$8=a("stage3_param_persistence_threshold"),k8=a(": "),Bf=o("code"),D8=a("10 * hidden_size"),Dg=u(),Re=o("p"),P8=a("therefore set these values to "),Vf=o("code"),O8=a("auto"),z8=a(" and the "),ni=o("a"),T8=a("Trainer"),A8=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),Pg=u(),Ro=o("p"),Yf=o("code"),S8=a("stage3_gather_fp16_weights_on_model_save"),C8=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Og=u(),ee=o("p"),x8=a("If you\u2019re migrating from ZeRO-2 configuration note that "),Kf=o("code"),I8=a("allgather_partitions"),R8=a(", "),Jf=o("code"),U8=a("allgather_bucket_size"),L8=a(` and
`),Xf=o("code"),Z8=a("reduce_scatter"),G8=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),zg=u(),oi=o("ul"),Uo=o("li"),Qf=o("code"),M8=a("sub_group_size"),N8=a(": "),ed=o("code"),H8=a("1e9"),Tg=u(),ge=o("p"),sd=o("code"),W8=a("sub_group_size"),F8=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),td=o("code"),B8=a("sub_group_size"),V8=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),ad=o("code"),Y8=a("sub_group_size"),K8=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Ag=u(),Ue=o("p"),J8=a("You can leave "),nd=o("code"),X8=a("sub_group_size"),Q8=a(" to its default value of "),od=o("em"),e9=a("1e9"),s9=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Sg=u(),Vt=o("ol"),Lo=o("li"),t9=a("Running into OOM during optimizer step: Reduce "),ld=o("code"),a9=a("sub_group_size"),n9=a(" to reduce memory utilization of temporary buffers"),o9=u(),Zo=o("li"),l9=a("Optimizer Step is taking a long time: Increase "),rd=o("code"),r9=a("sub_group_size"),p9=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Cg=u(),li=o("a"),xg=u(),Os=o("h3"),Yt=o("a"),pd=o("span"),f(Go.$$.fragment),i9=u(),id=o("span"),u9=a("NVMe Support"),Ig=u(),ri=o("p"),c9=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Rg=u(),pi=o("p"),h9=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Ug=u(),f(Mo.$$.fragment),Lg=u(),Kt=o("p"),f9=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),ud=o("em"),d9=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),m9=a(")."),Zg=u(),Le=o("p"),_9=a("Here is the full documentation for offloading "),No=o("a"),v9=a("optimizer states"),j9=a(" and "),Ho=o("a"),g9=a("parameters"),w9=a("."),Gg=u(),Jt=o("p"),y9=a("Make sure that your "),cd=o("code"),b9=a("nvme_path"),q9=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Mg=u(),Ze=o("p"),E9=a("In order to figure out the optimal "),hd=o("code"),$9=a("aio"),k9=a(` configuration block you must run a benchmark on your target setup, as
`),Wo=o("a"),D9=a("explained here"),P9=a("."),Ng=u(),ii=o("a"),Hg=u(),zs=o("h4"),Xt=o("a"),fd=o("span"),f(Fo.$$.fragment),O9=u(),dd=o("span"),z9=a("ZeRO-2 vs ZeRO-3 Performance"),Wg=u(),ui=o("p"),T9=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Fg=u(),ci=o("p"),A9=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Bg=u(),Qt=o("ul"),Ts=o("li"),S9=a("set "),md=o("code"),C9=a("stage3_param_persistence_threshold"),x9=a(" to a very large number - larger than the largest parameter, e.g., "),_d=o("code"),I9=a("6 * hidden_size * hidden_size"),R9=a(". This will keep the parameters on the GPUs."),U9=u(),Bo=o("li"),L9=a("turn off "),vd=o("code"),Z9=a("offload_params"),G9=a(" since ZeRO-2 doesn\u2019t have that option."),Vg=u(),Ge=o("p"),M9=a("The performance will likely improve significantly with just "),jd=o("code"),N9=a("offload_params"),H9=a(` turned off, even if you don\u2019t change
`),gd=o("code"),W9=a("stage3_param_persistence_threshold"),F9=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Yg=u(),hi=o("a"),Kg=u(),As=o("h4"),ea=o("a"),wd=o("span"),f(Vo.$$.fragment),B9=u(),yd=o("span"),V9=a("ZeRO-2 Example"),Jg=u(),sa=o("p"),Y9=a("Here is a full ZeRO-2 auto-configuration file "),bd=o("code"),K9=a("ds_config_zero2.json"),J9=a(":"),Xg=u(),f(Yo.$$.fragment),Qg=u(),ta=o("p"),X9=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),qd=o("code"),Q9=a("auto"),e7=a(" settings in it."),ew=u(),f(Ko.$$.fragment),sw=u(),fi=o("a"),tw=u(),Ss=o("h4"),aa=o("a"),Ed=o("span"),f(Jo.$$.fragment),s7=u(),$d=o("span"),t7=a("ZeRO-3 Example"),aw=u(),na=o("p"),a7=a("Here is a full ZeRO-3 auto-configuration file "),kd=o("code"),n7=a("ds_config_zero3.json"),o7=a(":"),nw=u(),f(Xo.$$.fragment),ow=u(),oa=o("p"),l7=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Dd=o("code"),r7=a("auto"),p7=a(" settings in it."),lw=u(),f(Qo.$$.fragment),rw=u(),Cs=o("h3"),la=o("a"),Pd=o("span"),f(el.$$.fragment),i7=u(),Od=o("span"),u7=a("Optimizer and Scheduler"),pw=u(),ra=o("p"),c7=a("As long as you don\u2019t enable "),zd=o("code"),h7=a("offload_optimizer"),f7=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),iw=u(),di=o("p"),d7=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),uw=u(),pa=o("p"),m7=a("It is possible to use a non-DeepSpeed optimizer when "),Td=o("code"),_7=a("offload_optimizer"),v7=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),cw=u(),mi=o("a"),hw=u(),xs=o("h4"),ia=o("a"),Ad=o("span"),f(sl.$$.fragment),j7=u(),Sd=o("span"),g7=a("Optimizer"),fw=u(),Me=o("p"),w7=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Cd=o("code"),y7=a("torch"),b7=a(". The full documentation is "),tl=o("a"),q7=a("here"),E7=a("."),dw=u(),q=o("p"),$7=a("If you don\u2019t configure the "),xd=o("code"),k7=a("optimizer"),D7=a(" entry in the configuration file, the "),_i=o("a"),P7=a("Trainer"),O7=a(` will
automatically set it to `),Id=o("code"),z7=a("AdamW"),T7=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Rd=o("code"),A7=a("--learning_rate"),S7=a(", "),Ud=o("code"),C7=a("--adam_beta1"),x7=a(", "),Ld=o("code"),I7=a("--adam_beta2"),R7=a(", "),Zd=o("code"),U7=a("--adam_epsilon"),L7=a(" and "),Gd=o("code"),Z7=a("--weight_decay"),G7=a("."),mw=u(),Ne=o("p"),M7=a("Here is an example of the auto-configured "),Md=o("code"),N7=a("optimizer"),H7=a(" entry for "),Nd=o("code"),W7=a("AdamW"),F7=a(":"),_w=u(),f(al.$$.fragment),vw=u(),vi=o("p"),B7=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),jw=u(),se=o("ul"),nl=o("li"),Hd=o("code"),V7=a("lr"),Y7=a(" with the value of "),Wd=o("code"),K7=a("--learning_rate"),J7=u(),ol=o("li"),Fd=o("code"),X7=a("betas"),Q7=a(" with the value of "),Bd=o("code"),ek=a("--adam_beta1 --adam_beta2"),sk=u(),ll=o("li"),Vd=o("code"),tk=a("eps"),ak=a(" with the value of "),Yd=o("code"),nk=a("--adam_epsilon"),ok=u(),rl=o("li"),Kd=o("code"),lk=a("weight_decay"),rk=a(" with the value of "),Jd=o("code"),pk=a("--weight_decay"),gw=u(),ji=o("p"),ik=a("Therefore please remember to tune the shared hyperparameters on the command line."),ww=u(),gi=o("p"),uk=a("You can also set the values explicitly:"),yw=u(),f(pl.$$.fragment),bw=u(),ua=o("p"),ck=a("But then you\u2019re on your own synchronizing the "),wi=o("a"),hk=a("Trainer"),fk=a(` command line arguments and the DeepSpeed
configuration.`),qw=u(),yi=o("p"),dk=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),Ew=u(),f(il.$$.fragment),$w=u(),te=o("p"),mk=a("Similarly to "),Xd=o("code"),_k=a("AdamW"),vk=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Qd=o("code"),jk=a("weight_decay"),gk=a(" around "),em=o("code"),wk=a("0.01"),yk=a("."),kw=u(),bi=o("a"),Dw=u(),Is=o("h4"),ca=o("a"),sm=o("span"),f(ul.$$.fragment),bk=u(),tm=o("span"),qk=a("Scheduler"),Pw=u(),C=o("p"),Ek=a("DeepSpeed supports "),am=o("code"),$k=a("LRRangeTest"),kk=a(", "),nm=o("code"),Dk=a("OneCycle"),Pk=a(", "),om=o("code"),Ok=a("WarmupLR"),zk=a(" and "),lm=o("code"),Tk=a("WarmupDecayLR"),Ak=a(` learning rate schedulers. The full
documentation is `),cl=o("a"),Sk=a("here"),Ck=a("."),Ow=u(),qi=o("p"),xk=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),zw=u(),ha=o("ul"),hl=o("li"),rm=o("code"),Ik=a("WarmupLR"),Rk=a(" via "),pm=o("code"),Uk=a("--lr_scheduler_type constant_with_warmup"),Lk=u(),He=o("li"),im=o("code"),Zk=a("WarmupDecayLR"),Gk=a(" via "),um=o("code"),Mk=a("--lr_scheduler_type linear"),Nk=a(". This is also the default value for "),cm=o("code"),Hk=a("--lr_scheduler_type"),Wk=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Tw=u(),D=o("p"),Fk=a("If you don\u2019t configure the "),hm=o("code"),Bk=a("scheduler"),Vk=a(" entry in the configuration file, the "),Ei=o("a"),Yk=a("Trainer"),Kk=a(` will use
the values of `),fm=o("code"),Jk=a("--lr_scheduler_type"),Xk=a(", "),dm=o("code"),Qk=a("--learning_rate"),eD=a(" and "),mm=o("code"),sD=a("--warmup_steps"),tD=a(" or "),_m=o("code"),aD=a("--warmup_ratio"),nD=a(` to configure a
\u{1F917} Transformers version of it.`),Aw=u(),We=o("p"),oD=a("Here is an example of the auto-configured "),vm=o("code"),lD=a("scheduler"),rD=a(" entry for "),jm=o("code"),pD=a("WarmupLR"),iD=a(":"),Sw=u(),f(fl.$$.fragment),Cw=u(),Fe=o("p"),uD=a("Since "),gm=o("em"),cD=a("\u201Cauto\u201D"),hD=a(" is used the "),$i=o("a"),fD=a("Trainer"),dD=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),xw=u(),ae=o("ul"),fa=o("li"),wm=o("code"),mD=a("warmup_min_lr"),_D=a(" with the value of "),ym=o("code"),vD=a("0"),jD=a("."),gD=u(),da=o("li"),bm=o("code"),wD=a("warmup_max_lr"),yD=a(" with the value of "),qm=o("code"),bD=a("--learning_rate"),qD=a("."),ED=u(),Be=o("li"),Em=o("code"),$D=a("warmup_num_steps"),kD=a(" with the value of "),$m=o("code"),DD=a("--warmup_steps"),PD=a(" if provided. Otherwise will use "),km=o("code"),OD=a("--warmup_ratio"),zD=a(`
multiplied by the number of training steps and rounded up.`),TD=u(),Ve=o("li"),Dm=o("code"),AD=a("total_num_steps"),SD=a(" with either the value of "),Pm=o("code"),CD=a("--max_steps"),xD=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Om=o("code"),ID=a("WarmupDecayLR"),RD=a(")."),Iw=u(),ki=o("p"),UD=a("You can, of course, take over any or all of the configuration values and set those yourself:"),Rw=u(),f(dl.$$.fragment),Uw=u(),ma=o("p"),LD=a("But then you\u2019re on your own synchronizing the "),Di=o("a"),ZD=a("Trainer"),GD=a(` command line arguments and the DeepSpeed
configuration.`),Lw=u(),_a=o("p"),MD=a("For example, for "),zm=o("code"),ND=a("WarmupDecayLR"),HD=a(", you can use the following entry:"),Zw=u(),f(ml.$$.fragment),Gw=u(),N=o("p"),WD=a("and "),Tm=o("code"),FD=a("total_num_steps"),BD=a(", "),Am=o("code"),VD=a("warmup_max_lr"),YD=a(", "),Sm=o("code"),KD=a("warmup_num_steps"),JD=a(" and "),Cm=o("code"),XD=a("total_num_steps"),QD=a(" will be set at loading time."),Mw=u(),Pi=o("a"),Nw=u(),Rs=o("h3"),va=o("a"),xm=o("span"),f(_l.$$.fragment),eP=u(),Im=o("span"),sP=a("fp32 Precision"),Hw=u(),Oi=o("p"),tP=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),Ww=u(),ja=o("p"),aP=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Rm=o("code"),nP=a("NaN"),oP=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Fw=u(),f(vl.$$.fragment),Bw=u(),ga=o("p"),lP=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),jl=o("a"),rP=a("TensorFloat-32(TF32) on Ampere devices"),pP=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Vw=u(),zi=o("a"),Yw=u(),Us=o("h3"),wa=o("a"),Um=o("span"),f(gl.$$.fragment),iP=u(),Lm=o("span"),uP=a("Automatic Mixed Precision"),Kw=u(),Ti=o("p"),cP=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),Jw=u(),Ai=o("p"),hP=a("To configure pytorch AMP-like mode set:"),Xw=u(),f(wl.$$.fragment),Qw=u(),Ye=o("p"),fP=a("and the "),Si=o("a"),dP=a("Trainer"),mP=a(` will automatically enable or disable it based on the value of
`),Zm=o("code"),_P=a("args.fp16_backend"),vP=a(". The rest of config values are up to you."),ey=u(),ya=o("p"),jP=a("This mode gets enabled when "),Gm=o("code"),gP=a("--fp16 --fp16_backend amp"),wP=a(" command line args are passed."),sy=u(),Ci=o("p"),yP=a("You can also enable/disable this mode explicitly:"),ty=u(),f(yl.$$.fragment),ay=u(),ba=o("p"),bP=a("But then you\u2019re on your own synchronizing the "),xi=o("a"),qP=a("Trainer"),EP=a(` command line arguments and the DeepSpeed
configuration.`),ny=u(),qa=o("p"),$P=a("Here is the "),bl=o("a"),kP=a("documentation"),DP=a("."),oy=u(),Ii=o("p"),PP=a("To configure apex AMP-like mode set:"),ly=u(),f(ql.$$.fragment),ry=u(),ne=o("p"),OP=a("and the "),Ri=o("a"),zP=a("Trainer"),TP=a(" will automatically configure it based on the values of "),Mm=o("code"),AP=a("args.fp16_backend"),SP=a(` and
`),Nm=o("code"),CP=a("args.fp16_opt_level"),xP=a("."),py=u(),Ea=o("p"),IP=a("This mode gets enabled when "),Hm=o("code"),RP=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),UP=a(" command line args are passed."),iy=u(),Ui=o("p"),LP=a("You can also configure this mode explicitly:"),uy=u(),f(El.$$.fragment),cy=u(),$a=o("p"),ZP=a("But then you\u2019re on your own synchronizing the "),Li=o("a"),GP=a("Trainer"),MP=a(` command line arguments and the DeepSpeed
configuration.`),hy=u(),ka=o("p"),NP=a("Here is the "),$l=o("a"),HP=a("documentation"),WP=a("."),fy=u(),Zi=o("a"),dy=u(),Ls=o("h3"),Da=o("a"),Wm=o("span"),f(kl.$$.fragment),FP=u(),Fm=o("span"),BP=a("Batch Size"),my=u(),Gi=o("p"),VP=a("To configure batch size, use:"),_y=u(),f(Dl.$$.fragment),vy=u(),x=o("p"),YP=a("and the "),Mi=o("a"),KP=a("Trainer"),JP=a(" will automatically set "),Bm=o("code"),XP=a("train_micro_batch_size_per_gpu"),QP=a(` to the value of
`),Vm=o("code"),eO=a("args.per_device_train_batch_size"),sO=a(" and "),Ym=o("code"),tO=a("train_batch_size"),aO=a(" to "),Km=o("code"),nO=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),oO=a("."),jy=u(),Ni=o("p"),lO=a("You can also set the values explicitly:"),gy=u(),f(Pl.$$.fragment),wy=u(),Pa=o("p"),rO=a("But then you\u2019re on your own synchronizing the "),Hi=o("a"),pO=a("Trainer"),iO=a(` command line arguments and the DeepSpeed
configuration.`),yy=u(),Wi=o("a"),by=u(),Zs=o("h3"),Oa=o("a"),Jm=o("span"),f(Ol.$$.fragment),uO=u(),Xm=o("span"),cO=a("Gradient Accumulation"),qy=u(),Fi=o("p"),hO=a("To configure gradient accumulation set:"),Ey=u(),f(zl.$$.fragment),$y=u(),Ke=o("p"),fO=a("and the "),Bi=o("a"),dO=a("Trainer"),mO=a(" will automatically set it to the value of "),Qm=o("code"),_O=a("args.gradient_accumulation_steps"),vO=a("."),ky=u(),Vi=o("p"),jO=a("You can also set the value explicitly:"),Dy=u(),f(Tl.$$.fragment),Py=u(),za=o("p"),gO=a("But then you\u2019re on your own synchronizing the "),Yi=o("a"),wO=a("Trainer"),yO=a(` command line arguments and the DeepSpeed
configuration.`),Oy=u(),Ki=o("a"),zy=u(),Gs=o("h3"),Ta=o("a"),e_=o("span"),f(Al.$$.fragment),bO=u(),s_=o("span"),qO=a("Gradient Clipping"),Ty=u(),Ji=o("p"),EO=a("To configure gradient gradient clipping set:"),Ay=u(),f(Sl.$$.fragment),Sy=u(),Je=o("p"),$O=a("and the "),Xi=o("a"),kO=a("Trainer"),DO=a(" will automatically set it to the value of "),t_=o("code"),PO=a("args.max_grad_norm"),OO=a("."),Cy=u(),Qi=o("p"),zO=a("You can also set the value explicitly:"),xy=u(),f(Cl.$$.fragment),Iy=u(),Aa=o("p"),TO=a("But then you\u2019re on your own synchronizing the "),eu=o("a"),AO=a("Trainer"),SO=a(` command line arguments and the DeepSpeed
configuration.`),Ry=u(),su=o("a"),Uy=u(),Ms=o("h3"),Sa=o("a"),a_=o("span"),f(xl.$$.fragment),CO=u(),n_=o("span"),xO=a("Getting The Model Weights Out"),Ly=u(),Ca=o("p"),IO=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),o_=o("code"),RO=a("global_step*/*optim_states.pt"),UO=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Zy=u(),tu=o("p"),l_=o("strong"),LO=a("FP16 Weights:"),Gy=u(),xa=o("p"),ZO=a("When a model is saved under ZeRO-2, you end up having the normal "),r_=o("code"),GO=a("pytorch_model.bin"),MO=a(` file with the model weights, but
they are only the fp16 version of the weights.`),My=u(),H=o("p"),NO=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),p_=o("code"),HO=a('"stage3_gather_fp16_weights_on_model_save": true'),WO=a(" is required to get the "),i_=o("code"),FO=a("Trainer"),BO=a(` to save the fp16
version of the weights. If this setting is `),u_=o("code"),VO=a("False"),YO=u(),c_=o("code"),KO=a("pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),JO=a(` it
won\u2019t be possible to load it back.`),Ny=u(),f(Il.$$.fragment),Hy=u(),au=o("p"),h_=o("strong"),XO=a("FP32 Weights:"),Wy=u(),Ia=o("p"),QO=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Rl=o("a"),ez=a("models hub"),sz=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Fy=u(),nu=o("p"),f_=o("strong"),tz=a("Live FP32 Weights Recovery:"),By=u(),ou=o("p"),az=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Vy=u(),lu=o("p"),nz=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Yy=u(),f(Ul.$$.fragment),Ky=u(),Xe=o("p"),oz=a("If you\u2019re using the "),d_=o("code"),lz=a("--load_best_model_at_end"),rz=a(" class:"),m_=o("em"),pz=a("~transformers.TrainingArguments"),iz=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Jy=u(),f(Ll.$$.fragment),Xy=u(),f(Ra.$$.fragment),Qy=u(),Ua=o("p"),uz=a("Of course, you don\u2019t have to use class:"),__=o("em"),cz=a("~transformers.Trainer"),hz=a(` and you can adjust the examples above to your own
trainer.`),e2=u(),La=o("p"),fz=a("If for some reason you want more refinement, you can also extract the fp32 "),v_=o("code"),dz=a("state_dict"),mz=a(` of the weights and apply
these yourself as is shown in the following example:`),s2=u(),f(Zl.$$.fragment),t2=u(),ru=o("p"),j_=o("strong"),_z=a("Offline FP32 Weights Recovery:"),a2=u(),Qe=o("p"),vz=a("DeepSpeed creates a special conversion script "),g_=o("code"),jz=a("zero_to_fp32.py"),gz=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),w_=o("code"),wz=a("Trainer"),yz=a(" to do the extraction."),n2=u(),pu=o("p"),bz=a("Let\u2019s say your checkpoint folder looks like this:"),o2=u(),f(Gl.$$.fragment),l2=u(),Za=o("p"),qz=a("In this example there is just one DeepSpeed checkpoint sub-folder "),y_=o("em"),Ez=a("global_step1"),$z=a(`. Therefore to reconstruct the fp32
weights just run:`),r2=u(),f(Ml.$$.fragment),p2=u(),Ga=o("p"),kz=a("This is it. "),b_=o("code"),Dz=a("pytorch_model.bin"),Pz=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),i2=u(),iu=o("p"),Oz=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),u2=u(),Nl=o("p"),q_=o("code"),zz=a("python zero_to_fp32.py -h"),Tz=a(" will give you usage details."),c2=u(),es=o("p"),Az=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=o("code"),Sz=a("latest"),Cz=a(`, which in the current
example will contain `),$_=o("code"),xz=a("global_step1"),Iz=a("."),h2=u(),uu=o("p"),Rz=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),f2=u(),Ns=o("h3"),Ma=o("a"),k_=o("span"),f(Hl.$$.fragment),Uz=u(),D_=o("span"),Lz=a("ZeRO-3 and Infinity Nuances"),d2=u(),cu=o("p"),Zz=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),m2=u(),hu=o("p"),Gz=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),_2=u(),fu=o("p"),Mz=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),v2=u(),Hs=o("h4"),Na=o("a"),P_=o("span"),f(Wl.$$.fragment),Nz=u(),O_=o("span"),Hz=a("Constructing Massive Models"),j2=u(),Ha=o("p"),Wz=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),z_=o("em"),Fz=a("deepspeed.zero.Init()"),Bz=a(`
context manager (which is also a function decorator), like so:`),g2=u(),f(Fl.$$.fragment),w2=u(),du=o("p"),Vz=a("As you can see this gives you a randomly initialized model."),y2=u(),k=o("p"),Yz=a("If you want to use a pretrained model, "),T_=o("code"),Kz=a("model_class.from_pretrained"),Jz=a(` will activate this feature as long as
`),A_=o("code"),Xz=a("is_deepspeed_zero3_enabled()"),Qz=a(" returns "),S_=o("code"),eT=a("True"),sT=a(`, which currently is setup by the
`),mu=o("a"),tT=a("TrainingArguments"),aT=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),_u=o("a"),nT=a("TrainingArguments"),oT=a(" object "),C_=o("strong"),lT=a("before"),rT=a(` calling
`),x_=o("code"),pT=a("from_pretrained"),iT=a(". Here is an example of a possible sequence:"),b2=u(),f(Bl.$$.fragment),q2=u(),Wa=o("p"),uT=a("If you\u2019re using the official example scripts and your command line arguments include "),I_=o("code"),cT=a("--deepspeed ds_config.json"),hT=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),E2=u(),vu=o("p"),fT=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),$2=u(),Fa=o("p"),dT=a("For full details on this method and other related features please refer to "),Vl=o("a"),mT=a("Constructing Massive Models"),_T=a("."),k2=u(),oe=o("p"),vT=a("Also when loading fp16-pretrained models, you will want to tell "),R_=o("code"),jT=a("from_pretrained"),gT=a(` to use
`),U_=o("code"),wT=a("torch_dtype=torch.float16"),yT=a(". For details, please, see "),ju=o("a"),bT=a("from_pretrained-torch-dtype"),qT=a("."),D2=u(),Ws=o("h4"),Ba=o("a"),L_=o("span"),f(Yl.$$.fragment),ET=u(),Z_=o("span"),$T=a("Gathering Parameters"),P2=u(),Kl=o("p"),kT=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Jl=o("a"),DT=a("Gathering Parameters"),O2=u(),Va=o("p"),PT=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),G_=o("code"),OT=a("from_pretrained"),zT=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),z2=u(),gu=o("p"),TT=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),T2=u(),f(Xl.$$.fragment),A2=u(),ss=o("p"),AT=a("stress on "),M_=o("code"),ST=a("tensor([1.])"),CT=a(", or if you get an error where it says the parameter is of size "),N_=o("code"),xT=a("1"),IT=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),S2=u(),wu=o("a"),C2=u(),Fs=o("h3"),Ya=o("a"),H_=o("span"),f(Ql.$$.fragment),RT=u(),W_=o("span"),UT=a("ZeRO Inference"),x2=u(),yu=o("p"),LT=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),I2=u(),Ka=o("p"),ZT=a("Otherwise you just need to pass the usual "),bu=o("a"),GT=a("TrainingArguments"),MT=a(" arguments. For example:"),R2=u(),f(er.$$.fragment),U2=u(),qu=o("p"),NT=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),L2=u(),Ja=o("p"),HT=a("Here is an example of running "),F_=o("code"),WT=a("run_translation.py"),FT=a(" under DeepSpeed deploying all available GPUs:"),Z2=u(),f(sr.$$.fragment),G2=u(),Eu=o("p"),BT=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),M2=u(),$u=o("p"),VT=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),N2=u(),Bs=o("h3"),Xa=o("a"),B_=o("span"),f(tr.$$.fragment),YT=u(),V_=o("span"),KT=a("Filing Issues"),H2=u(),ku=o("p"),JT=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),W2=u(),Du=o("p"),XT=a("In your report please always include:"),F2=u(),I=o("ol"),Y_=o("li"),K_=o("p"),QT=a("the full Deepspeed config file in the report"),eA=u(),J_=o("li"),we=o("p"),sA=a("either the command line arguments if you were using the "),Pu=o("a"),tA=a("Trainer"),aA=a(` or
`),Ou=o("a"),nA=a("TrainingArguments"),oA=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),zu=o("a"),lA=a("TrainingArguments"),rA=a(" as it has dozens of entries that are irrelevant."),pA=u(),ar=o("li"),X_=o("p"),iA=a("Output of:"),uA=u(),f(nr.$$.fragment),cA=u(),Q_=o("li"),or=o("p"),hA=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),lr=o("a"),fA=a("notebook"),dA=a(` as
a starting point.`),mA=u(),e1=o("li"),s1=o("p"),_A=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),vA=u(),t1=o("li"),rr=o("p"),jA=a("If possible try to use one of the existing "),pr=o("a"),gA=a("examples"),wA=a(" to reproduce the problem with."),B2=u(),Tu=o("p"),yA=a("Things to consider:"),V2=u(),Qa=o("ul"),Vs=o("li"),a1=o("p"),bA=a("Deepspeed is often not the cause of the problem."),qA=u(),n1=o("p"),EA=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),$A=u(),o1=o("p"),kA=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),DA=u(),l1=o("li"),ir=o("p"),PA=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),ur=o("a"),OA=a("Deepspeed"),zA=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),Y2=u(),Ys=o("h3"),en=o("a"),r1=o("span"),f(cr.$$.fragment),TA=u(),p1=o("span"),AA=a("Troubleshooting"),K2=u(),Au=o("ul"),Su=o("li"),i1=o("code"),SA=a("deepspeed"),CA=a(" process gets killed at startup without a traceback"),J2=u(),W=o("p"),xA=a("If the "),u1=o("code"),IA=a("deepspeed"),RA=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),c1=o("code"),UA=a("offload_optimizer"),LA=a(" or "),h1=o("code"),ZA=a("offload_param"),GA=a(` or
both configured to offload to `),f1=o("code"),MA=a("cpu"),NA=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),X2=u(),sn=o("p"),HA=a("Work is being done to enable estimating how much memory is needed for a specific model: "),hr=o("a"),WA=a("PR"),FA=a("."),Q2=u(),Ks=o("h3"),tn=o("a"),d1=o("span"),f(fr.$$.fragment),BA=u(),m1=o("span"),VA=a("Notes"),eb=u(),ts=o("ul"),an=o("li"),YA=a("DeepSpeed works with the PyTorch "),Cu=o("a"),KA=a("Trainer"),JA=a(" but not TF "),_1=o("code"),XA=a("TFTrainer"),QA=u(),dr=o("li"),eS=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),mr=o("a"),sS=a("source"),tS=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),aS=u(),Js=o("li"),nS=a("You don\u2019t have to use the "),xu=o("a"),oS=a("Trainer"),lS=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),_r=o("a"),rS=a("the DeepSpeed integration instructions"),pS=a("."),sb=u(),Iu=o("a"),tb=u(),Xs=o("h2"),nn=o("a"),v1=o("span"),f(vr.$$.fragment),iS=u(),j1=o("span"),uS=a("Non-Trainer Deepspeed Integration"),ab=u(),as=o("p"),cS=a("The "),Ru=o("a"),hS=a("HfDeepSpeedConfig"),fS=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Uu=o("a"),dS=a("Trainer"),mS=a(" is not used."),nb=u(),on=o("p"),_S=a("When using "),Lu=o("a"),vS=a("Trainer"),jS=a(" everything is automatically taken care of."),ob=u(),ns=o("p"),gS=a("When not using "),Zu=o("a"),wS=a("Trainer"),yS=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Gu=o("a"),bS=a("HfDeepSpeedConfig"),qS=a(" object before instantiating the model."),lb=u(),Mu=o("p"),ES=a("For example for a pretrained model:"),rb=u(),f(jr.$$.fragment),pb=u(),Nu=o("p"),$S=a("or for non-pretrained model:"),ib=u(),f(gr.$$.fragment),ub=u(),Qs=o("h2"),ln=o("a"),g1=o("span"),f(wr.$$.fragment),kS=u(),w1=o("span"),DS=a("HfDeepSpeedConfig"),cb=u(),E=o("div"),f(yr.$$.fragment),PS=u(),y1=o("p"),OS=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),zS=u(),ye=o("p"),TS=a("A "),b1=o("code"),AS=a("weakref"),SS=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),q1=o("code"),CS=a("from_pretrained"),xS=a(" and "),E1=o("code"),IS=a("_get_resized_embeddings"),RS=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),US=u(),le=o("p"),Hu=o("a"),LS=a("Trainer"),ZS=a(" uses the "),$1=o("code"),GS=a("HfTrainerDeepSpeedConfig"),MS=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Wu=o("a"),NS=a("TrainingArguments"),HS=a(" by replacing special placeholder values: "),k1=o("code"),WS=a('"auto"'),FS=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),BS=u(),os=o("div"),f(br.$$.fragment),VS=u(),D1=o("p"),YS=a("Deletes a sub-section of the config file if it\u2019s found."),KS=u(),et=o("p"),JS=a("Unless "),P1=o("code"),XS=a("must_exist"),QS=a(" is "),O1=o("code"),eC=a("True"),sC=a(" the section doesn\u2019t have to exist."),tC=u(),rn=o("div"),f(qr.$$.fragment),aC=u(),Er=o("p"),nC=a("Returns the set value or "),z1=o("code"),oC=a("default"),lC=a(" if no value is set"),rC=u(),pn=o("div"),f($r.$$.fragment),pC=u(),st=o("p"),iC=a("Returns "),T1=o("code"),uC=a("True"),cC=a("/"),A1=o("code"),hC=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),fC=a(" or isn\u2019t set)."),dC=u(),un=o("div"),f(kr.$$.fragment),mC=u(),tt=o("p"),_C=a("Returns "),S1=o("code"),vC=a("True"),jC=a("/"),C1=o("code"),gC=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),wC=a(" or isn\u2019t set)."),hb=u(),at=o("h2"),cn=o("a"),x1=o("span"),f(Dr.$$.fragment),yC=u(),I1=o("span"),bC=a("Main DeepSpeed Resources"),fb=u(),re=o("ul"),R1=o("li"),Pr=o("a"),qC=a("Project\u2019s github"),EC=u(),U1=o("li"),Or=o("a"),$C=a("Usage docs"),kC=u(),L1=o("li"),zr=o("a"),DC=a("API docs"),PC=u(),Z1=o("li"),Tr=o("a"),OC=a("Blog posts"),db=u(),Fu=o("p"),zC=a("Papers:"),mb=u(),ls=o("ul"),G1=o("li"),Ar=o("a"),TC=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),AC=u(),M1=o("li"),Sr=o("a"),SC=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),CC=u(),N1=o("li"),Cr=o("a"),xC=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),_b=u(),rs=o("p"),IC=a("Finally, please, remember that, HuggingFace "),Bu=o("a"),RC=a("Trainer"),UC=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),xr=o("a"),LC=a("DeepSpeed GitHub"),ZC=a("."),this.h()},l(e){const p=aW('[data-svelte="svelte-1phssyn"]',document.head);y=l(p,"META",{name:!0,content:!0}),p.forEach(t),Z=c(e),b=l(e,"H1",{class:!0});var Ir=r(b);$=l(Ir,"A",{id:!0,class:!0,href:!0});var H1=r($);hs=l(H1,"SPAN",{});var FC=r(hs);d(B.$$.fragment,FC),FC.forEach(t),H1.forEach(t),kn=c(Ir),fs=l(Ir,"SPAN",{});var BC=r(fs);ds=n(BC,"DeepSpeed Integration"),BC.forEach(t),Ir.forEach(t),ot=c(e),V=l(e,"P",{});var W1=r(V);Y=l(W1,"A",{href:!0,rel:!0});var VC=r(Y);G=n(VC,"DeepSpeed"),VC.forEach(t),Nr=n(W1," implements everything described in the "),be=l(W1,"A",{href:!0,rel:!0});var YC=r(be);Hr=n(YC,"ZeRO paper"),YC.forEach(t),Mq=n(W1,". Currently it provides full support for:"),W1.forEach(t),K1=c(e),O=l(e,"OL",{});var pe=r(O);Lc=l(pe,"LI",{});var KC=r(Lc);Nq=n(KC,"Optimizer state partitioning (ZeRO stage 1)"),KC.forEach(t),Hq=c(pe),Zc=l(pe,"LI",{});var JC=r(Zc);Wq=n(JC,"Gradient partitioning (ZeRO stage 2)"),JC.forEach(t),Fq=c(pe),Gc=l(pe,"LI",{});var XC=r(Gc);Bq=n(XC,"Parameter partitioning (ZeRO stage 3)"),XC.forEach(t),Vq=c(pe),Mc=l(pe,"LI",{});var QC=r(Mc);Yq=n(QC,"Custom mixed precision training handling"),QC.forEach(t),Kq=c(pe),Nc=l(pe,"LI",{});var ex=r(Nc);Jq=n(ex,"A range of fast CUDA-extension-based optimizers"),ex.forEach(t),Xq=c(pe),Hc=l(pe,"LI",{});var sx=r(Hc);Qq=n(sx,"ZeRO-Offload to CPU and NVMe"),sx.forEach(t),pe.forEach(t),J1=c(e),qe=l(e,"P",{});var Vu=r(qe);eE=n(Vu,"ZeRO-Offload has its own dedicated paper: "),Dn=l(Vu,"A",{href:!0,rel:!0});var tx=r(Dn);sE=n(tx,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),tx.forEach(t),tE=n(Vu,". And NVMe-support is described in the paper "),Pn=l(Vu,"A",{href:!0,rel:!0});var ax=r(Pn);aE=n(ax,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),ax.forEach(t),nE=n(Vu,"."),Vu.forEach(t),X1=c(e),Wr=l(e,"P",{});var nx=r(Wr);oE=n(nx,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),nx.forEach(t),Q1=c(e),Fr=l(e,"P",{});var ox=r(Fr);lE=n(ox,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),ox.forEach(t),ev=c(e),lt=l(e,"P",{});var jb=r(lt);rE=n(jb,"\u{1F917} Transformers integrates "),On=l(jb,"A",{href:!0,rel:!0});var lx=r(On);pE=n(lx,"DeepSpeed"),lx.forEach(t),iE=n(jb," via 2 options:"),jb.forEach(t),sv=c(e),rt=l(e,"OL",{});var gb=r(rt);zn=l(gb,"LI",{});var wb=r(zn);uE=n(wb,"Integration of the core DeepSpeed features via "),Br=l(wb,"A",{href:!0});var rx=r(Br);cE=n(rx,"Trainer"),rx.forEach(t),hE=n(wb,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),wb.forEach(t),fE=c(gb),L=l(gb,"LI",{});var ie=r(L);dE=n(ie,"If you don\u2019t use "),Vr=l(ie,"A",{href:!0});var px=r(Vr);mE=n(px,"Trainer"),px.forEach(t),_E=n(ie,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),Wc=l(ie,"CODE",{});var ix=r(Wc);vE=n(ix,"from_pretrained"),ix.forEach(t),jE=n(ie," and "),Fc=l(ie,"CODE",{});var ux=r(Fc);gE=n(ux,"from_config"),ux.forEach(t),wE=n(ie,` include integration of essential
parts of DeepSpeed like `),Bc=l(ie,"CODE",{});var cx=r(Bc);yE=n(cx,"zero.Init"),cx.forEach(t),bE=n(ie,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Yr=l(ie,"A",{href:!0});var hx=r(Yr);qE=n(hx,"deepspeed-non-trainer-integration"),hx.forEach(t),EE=n(ie,"."),ie.forEach(t),gb.forEach(t),tv=c(e),Kr=l(e,"P",{});var fx=r(Kr);$E=n(fx,"What is integrated:"),fx.forEach(t),av=c(e),Jr=l(e,"P",{});var dx=r(Jr);kE=n(dx,"Training:"),dx.forEach(t),nv=c(e),Xr=l(e,"OL",{});var mx=r(Xr);Vc=l(mx,"LI",{});var _x=r(Vc);DE=n(_x,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),_x.forEach(t),mx.forEach(t),ov=c(e),Qr=l(e,"P",{});var vx=r(Qr);PE=n(vx,"Inference:"),vx.forEach(t),lv=c(e),ep=l(e,"OL",{});var jx=r(ep);Tn=l(jx,"LI",{});var yb=r(Tn);OE=n(yb,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),sp=l(yb,"A",{href:!0});var gx=r(sp);zE=n(gx,"deepspeed-zero-inference"),gx.forEach(t),TE=n(yb,"."),yb.forEach(t),jx.forEach(t),rv=c(e),tp=l(e,"P",{});var wx=r(tp);AE=n(wx,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),wx.forEach(t),pv=c(e),ap=l(e,"A",{id:!0}),r(ap).forEach(t),iv=c(e),ms=l(e,"H2",{class:!0});var bb=r(ms);pt=l(bb,"A",{id:!0,class:!0,href:!0});var yx=r(pt);Yc=l(yx,"SPAN",{});var bx=r(Yc);d(An.$$.fragment,bx),bx.forEach(t),yx.forEach(t),SE=c(bb),Kc=l(bb,"SPAN",{});var qx=r(Kc);CE=n(qx,"Trainer Deepspeed Integration"),qx.forEach(t),bb.forEach(t),uv=c(e),np=l(e,"A",{id:!0}),r(np).forEach(t),cv=c(e),_s=l(e,"H3",{class:!0});var qb=r(_s);it=l(qb,"A",{id:!0,class:!0,href:!0});var Ex=r(it);Jc=l(Ex,"SPAN",{});var $x=r(Jc);d(Sn.$$.fragment,$x),$x.forEach(t),Ex.forEach(t),xE=c(qb),Xc=l(qb,"SPAN",{});var kx=r(Xc);IE=n(kx,"Installation"),kx.forEach(t),qb.forEach(t),hv=c(e),op=l(e,"P",{});var Dx=r(op);RE=n(Dx,"Install the library via pypi:"),Dx.forEach(t),fv=c(e),d(Cn.$$.fragment,e),dv=c(e),Ee=l(e,"P",{});var Yu=r(Ee);UE=n(Yu,"or via "),Qc=l(Yu,"CODE",{});var Px=r(Qc);LE=n(Px,"transformers"),Px.forEach(t),ZE=n(Yu,"\u2019 "),eh=l(Yu,"CODE",{});var Ox=r(eh);GE=n(Ox,"extras"),Ox.forEach(t),ME=n(Yu,":"),Yu.forEach(t),mv=c(e),d(xn.$$.fragment,e),_v=c(e),$e=l(e,"P",{});var Ku=r($e);NE=n(Ku,"or find more details on "),In=l(Ku,"A",{href:!0,rel:!0});var zx=r(In);HE=n(zx,"the DeepSpeed\u2019s GitHub page"),zx.forEach(t),WE=n(Ku,` and
`),Rn=l(Ku,"A",{href:!0,rel:!0});var Tx=r(Rn);FE=n(Tx,"advanced install"),Tx.forEach(t),BE=n(Ku,"."),Ku.forEach(t),vv=c(e),ut=l(e,"P",{});var Eb=r(ut);VE=n(Eb,"If you\u2019re still struggling with the build, first make sure to read "),lp=l(Eb,"A",{href:!0});var Ax=r(lp);YE=n(Ax,"zero-install-notes"),Ax.forEach(t),KE=n(Eb,"."),Eb.forEach(t),jv=c(e),rp=l(e,"P",{});var Sx=r(rp);JE=n(Sx,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),Sx.forEach(t),gv=c(e),pp=l(e,"P",{});var Cx=r(pp);XE=n(Cx,"To make a local build for DeepSpeed:"),Cx.forEach(t),wv=c(e),d(Un.$$.fragment,e),yv=c(e),ke=l(e,"P",{});var Ju=r(ke);QE=n(Ju,"If you intend to use NVMe offload you will also need to include "),sh=l(Ju,"CODE",{});var xx=r(sh);e0=n(xx,"DS_BUILD_AIO=1"),xx.forEach(t),s0=n(Ju,` in the instructions above (and also
install `),th=l(Ju,"EM",{});var Ix=r(th);t0=n(Ix,"libaio-dev"),Ix.forEach(t),a0=n(Ju," system-wide)."),Ju.forEach(t),bv=c(e),ct=l(e,"P",{});var $b=r(ct);n0=n($b,"Edit "),ah=l($b,"CODE",{});var Rx=r(ah);o0=n(Rx,"TORCH_CUDA_ARCH_LIST"),Rx.forEach(t),l0=n($b,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),$b.forEach(t),qv=c(e),d(Ln.$$.fragment,e),Ev=c(e),_e=l(e,"P",{});var Rr=r(_e);r0=n(Rr,"So if you get "),nh=l(Rr,"CODE",{});var Ux=r(nh);p0=n(Ux,"8, 6"),Ux.forEach(t),i0=n(Rr,", then use "),oh=l(Rr,"CODE",{});var Lx=r(oh);u0=n(Lx,'TORCH_CUDA_ARCH_LIST="8.6"'),Lx.forEach(t),c0=n(Rr,`. If you have multiple different cards, you can list all
of them like so `),lh=l(Rr,"CODE",{});var Zx=r(lh);h0=n(Zx,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),Zx.forEach(t),Rr.forEach(t),$v=c(e),ip=l(e,"P",{});var Gx=r(ip);f0=n(Gx,"If you need to use the same setup on multiple machines, make a binary wheel:"),Gx.forEach(t),kv=c(e),d(Zn.$$.fragment,e),Dv=c(e),De=l(e,"P",{});var Xu=r(De);d0=n(Xu,"it will generate something like "),rh=l(Xu,"CODE",{});var Mx=r(rh);m0=n(Mx,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),Mx.forEach(t),_0=n(Xu,` which now you can install
as `),ph=l(Xu,"CODE",{});var Nx=r(ph);v0=n(Nx,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),Nx.forEach(t),j0=n(Xu," locally or on any other machine."),Xu.forEach(t),Pv=c(e),ht=l(e,"P",{});var kb=r(ht);g0=n(kb,"Again, remember to ensure to adjust "),ih=l(kb,"CODE",{});var Hx=r(ih);w0=n(Hx,"TORCH_CUDA_ARCH_LIST"),Hx.forEach(t),y0=n(kb," to the target architectures."),kb.forEach(t),Ov=c(e),Pe=l(e,"P",{});var Qu=r(Pe);b0=n(Qu,"You can find the complete list of NVIDIA GPUs and their corresponding "),uh=l(Qu,"STRONG",{});var Wx=r(uh);q0=n(Wx,"Compute Capabilities"),Wx.forEach(t),E0=n(Qu,` (same as arch in this
context) `),Gn=l(Qu,"A",{href:!0,rel:!0});var Fx=r(Gn);$0=n(Fx,"here"),Fx.forEach(t),k0=n(Qu,"."),Qu.forEach(t),zv=c(e),up=l(e,"P",{});var Bx=r(up);D0=n(Bx,"You can check the archs pytorch was built with using:"),Bx.forEach(t),Tv=c(e),d(Mn.$$.fragment,e),Av=c(e),cp=l(e,"P",{});var Vx=r(cp);P0=n(Vx,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Vx.forEach(t),Sv=c(e),d(Nn.$$.fragment,e),Cv=c(e),hp=l(e,"P",{});var Yx=r(hp);O0=n(Yx,"If the output is:"),Yx.forEach(t),xv=c(e),d(Hn.$$.fragment,e),Iv=c(e),ft=l(e,"P",{});var Db=r(ft);z0=n(Db,"then you know that this card\u2019s arch is "),ch=l(Db,"CODE",{});var Kx=r(ch);T0=n(Kx,"8.6"),Kx.forEach(t),A0=n(Db,"."),Db.forEach(t),Rv=c(e),dt=l(e,"P",{});var Pb=r(dt);S0=n(Pb,"You can also leave "),hh=l(Pb,"CODE",{});var Jx=r(hh);C0=n(Jx,"TORCH_CUDA_ARCH_LIST"),Jx.forEach(t),x0=n(Pb,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Pb.forEach(t),Uv=c(e),mt=l(e,"P",{});var Ob=r(mt);I0=n(Ob,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),Wn=l(Ob,"A",{href:!0,rel:!0});var Xx=r(Wn);R0=n(Xx,"Deepspeed"),Xx.forEach(t),U0=n(Ob,","),Ob.forEach(t),Lv=c(e),fp=l(e,"A",{id:!0}),r(fp).forEach(t),Zv=c(e),vs=l(e,"H3",{class:!0});var zb=r(vs);_t=l(zb,"A",{id:!0,class:!0,href:!0});var Qx=r(_t);fh=l(Qx,"SPAN",{});var eI=r(fh);d(Fn.$$.fragment,eI),eI.forEach(t),Qx.forEach(t),L0=c(zb),dh=l(zb,"SPAN",{});var sI=r(dh);Z0=n(sI,"Deployment with multiple GPUs"),sI.forEach(t),zb.forEach(t),Gv=c(e),vt=l(e,"P",{});var Tb=r(vt);G0=n(Tb,"To deploy this feature with multiple GPUs adjust the "),dp=l(Tb,"A",{href:!0});var tI=r(dp);M0=n(tI,"Trainer"),tI.forEach(t),N0=n(Tb,` command line arguments as
following:`),Tb.forEach(t),Mv=c(e),jt=l(e,"OL",{});var Ab=r(jt);js=l(Ab,"LI",{});var ec=r(js);H0=n(ec,"replace "),mh=l(ec,"CODE",{});var aI=r(mh);W0=n(aI,"python -m torch.distributed.launch"),aI.forEach(t),F0=n(ec," with "),_h=l(ec,"CODE",{});var nI=r(_h);B0=n(nI,"deepspeed"),nI.forEach(t),V0=n(ec,"."),ec.forEach(t),Y0=c(Ab),ve=l(Ab,"LI",{});var hn=r(ve);K0=n(hn,"add a new argument "),vh=l(hn,"CODE",{});var oI=r(vh);J0=n(oI,"--deepspeed ds_config.json"),oI.forEach(t),X0=n(hn,", where "),jh=l(hn,"CODE",{});var lI=r(jh);Q0=n(lI,"ds_config.json"),lI.forEach(t),e6=n(hn,` is the DeepSpeed configuration file as
documented `),Bn=l(hn,"A",{href:!0,rel:!0});var rI=r(Bn);s6=n(rI,"here"),rI.forEach(t),t6=n(hn,". The file naming is up to you."),hn.forEach(t),Ab.forEach(t),Nv=c(e),mp=l(e,"P",{});var pI=r(mp);a6=n(pI,"Therefore, if your original command line looked as follows:"),pI.forEach(t),Hv=c(e),d(Vn.$$.fragment,e),Wv=c(e),_p=l(e,"P",{});var iI=r(_p);n6=n(iI,"Now it should be:"),iI.forEach(t),Fv=c(e),d(Yn.$$.fragment,e),Bv=c(e),z=l(e,"P",{});var ue=r(z);o6=n(ue,"Unlike, "),gh=l(ue,"CODE",{});var uI=r(gh);l6=n(uI,"torch.distributed.launch"),uI.forEach(t),r6=n(ue," where you have to specify how many GPUs to use with "),wh=l(ue,"CODE",{});var cI=r(wh);p6=n(cI,"--nproc_per_node"),cI.forEach(t),i6=n(ue,`, with the
`),yh=l(ue,"CODE",{});var hI=r(yh);u6=n(hI,"deepspeed"),hI.forEach(t),c6=n(ue," launcher you don\u2019t have to use the corresponding "),bh=l(ue,"CODE",{});var fI=r(bh);h6=n(fI,"--num_gpus"),fI.forEach(t),f6=n(ue,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Kn=l(ue,"A",{href:!0,rel:!0});var dI=r(Kn);d6=n(dI,"here"),dI.forEach(t),m6=n(ue,"."),ue.forEach(t),Vv=c(e),J=l(e,"P",{});var fn=r(J);_6=n(fn,"In fact, you can continue using "),qh=l(fn,"CODE",{});var mI=r(qh);v6=n(mI,"-m torch.distributed.launch"),mI.forEach(t),j6=n(fn,` with DeepSpeed as long as you don\u2019t need to use
`),Eh=l(fn,"CODE",{});var _I=r(Eh);g6=n(_I,"deepspeed"),_I.forEach(t),w6=n(fn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),$h=l(fn,"CODE",{});var vI=r($h);y6=n(vI,"deepspeed"),vI.forEach(t),b6=n(fn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),fn.forEach(t),Yv=c(e),gt=l(e,"P",{});var Sb=r(gt);q6=n(Sb,"Here is an example of running "),kh=l(Sb,"CODE",{});var jI=r(kh);E6=n(jI,"run_translation.py"),jI.forEach(t),$6=n(Sb," under DeepSpeed deploying all available GPUs:"),Sb.forEach(t),Kv=c(e),d(Jn.$$.fragment,e),Jv=c(e),wt=l(e,"P",{});var Cb=r(wt);k6=n(Cb,"Note that in the DeepSpeed documentation you are likely to see "),Dh=l(Cb,"CODE",{});var gI=r(Dh);D6=n(gI,"--deepspeed --deepspeed_config ds_config.json"),gI.forEach(t),P6=n(Cb,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Cb.forEach(t),Xv=c(e),yt=l(e,"P",{});var xb=r(yt);O6=n(xb,"For some practical usage examples, please, see this "),Xn=l(xb,"A",{href:!0,rel:!0});var wI=r(Xn);z6=n(wI,"post"),wI.forEach(t),T6=n(xb,"."),xb.forEach(t),Qv=c(e),vp=l(e,"A",{id:!0}),r(vp).forEach(t),ej=c(e),gs=l(e,"H3",{class:!0});var Ib=r(gs);bt=l(Ib,"A",{id:!0,class:!0,href:!0});var yI=r(bt);Ph=l(yI,"SPAN",{});var bI=r(Ph);d(Qn.$$.fragment,bI),bI.forEach(t),yI.forEach(t),A6=c(Ib),Oh=l(Ib,"SPAN",{});var qI=r(Oh);S6=n(qI,"Deployment with one GPU"),qI.forEach(t),Ib.forEach(t),sj=c(e),qt=l(e,"P",{});var Rb=r(qt);C6=n(Rb,"To deploy DeepSpeed with one GPU adjust the "),jp=l(Rb,"A",{href:!0});var EI=r(jp);x6=n(EI,"Trainer"),EI.forEach(t),I6=n(Rb," command line arguments as follows:"),Rb.forEach(t),tj=c(e),d(eo.$$.fragment,e),aj=c(e),Oe=l(e,"P",{});var sc=r(Oe);R6=n(sc,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),zh=l(sc,"CODE",{});var $I=r(zh);U6=n($I,"--num_gpus=1"),$I.forEach(t),L6=n(sc,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),so=l(sc,"A",{href:!0,rel:!0});var kI=r(so);Z6=n(kI,"documentation"),kI.forEach(t),G6=n(sc," discusses the launcher options."),sc.forEach(t),nj=c(e),gp=l(e,"P",{});var DI=r(gp);M6=n(DI,"Why would you want to use DeepSpeed with just one GPU?"),DI.forEach(t),oj=c(e),Et=l(e,"OL",{});var Ub=r(Et);Th=l(Ub,"LI",{});var PI=r(Th);N6=n(PI,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),PI.forEach(t),H6=c(Ub),Ah=l(Ub,"LI",{});var OI=r(Ah);W6=n(OI,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),OI.forEach(t),Ub.forEach(t),lj=c(e),wp=l(e,"P",{});var zI=r(wp);F6=n(zI,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),zI.forEach(t),rj=c(e),d(to.$$.fragment,e),pj=c(e),yp=l(e,"P",{});var TI=r(yp);B6=n(TI,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),TI.forEach(t),ij=c(e),$t=l(e,"P",{});var Lb=r($t);V6=n(Lb,"For a practical usage example of this type of deployment, please, see this "),ao=l(Lb,"A",{href:!0,rel:!0});var AI=r(ao);Y6=n(AI,"post"),AI.forEach(t),K6=n(Lb,"."),Lb.forEach(t),uj=c(e),bp=l(e,"P",{});var SI=r(bp);J6=n(SI,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),SI.forEach(t),cj=c(e),qp=l(e,"P",{});var CI=r(qp);X6=n(CI,"Notes:"),CI.forEach(t),hj=c(e),Ep=l(e,"UL",{});var xI=r(Ep);ws=l(xI,"LI",{});var tc=r(ws);no=l(tc,"P",{});var Zb=r(no);Q6=n(Zb,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Sh=l(Zb,"CODE",{});var II=r(Sh);e4=n(II,"CUDA_VISIBLE_DEVICES"),II.forEach(t),s4=n(Zb,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),Zb.forEach(t),t4=c(tc),d(oo.$$.fragment,tc),a4=c(tc),Ch=l(tc,"P",{});var RI=r(Ch);n4=n(RI,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),RI.forEach(t),tc.forEach(t),xI.forEach(t),fj=c(e),$p=l(e,"A",{id:!0}),r($p).forEach(t),dj=c(e),ys=l(e,"H3",{class:!0});var Gb=r(ys);kt=l(Gb,"A",{id:!0,class:!0,href:!0});var UI=r(kt);xh=l(UI,"SPAN",{});var LI=r(xh);d(lo.$$.fragment,LI),LI.forEach(t),UI.forEach(t),o4=c(Gb),Ih=l(Gb,"SPAN",{});var ZI=r(Ih);l4=n(ZI,"Deployment in Notebooks"),ZI.forEach(t),Gb.forEach(t),mj=c(e),Dt=l(e,"P",{});var Mb=r(Dt);r4=n(Mb,"The problem with running notebook cells as a script is that there is no normal "),Rh=l(Mb,"CODE",{});var GI=r(Rh);p4=n(GI,"deepspeed"),GI.forEach(t),i4=n(Mb,` launcher to rely on, so
under certain setups we have to emulate it.`),Mb.forEach(t),_j=c(e),kp=l(e,"P",{});var MI=r(kp);u4=n(MI,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),MI.forEach(t),vj=c(e),d(ro.$$.fragment,e),jj=c(e),Pt=l(e,"P",{});var Nb=r(Pt);c4=n(Nb,"Note: "),Uh=l(Nb,"CODE",{});var NI=r(Uh);h4=n(NI,"..."),NI.forEach(t),f4=n(Nb," stands for the normal arguments that you\u2019d pass to the functions."),Nb.forEach(t),gj=c(e),Dp=l(e,"P",{});var HI=r(Dp);d4=n(HI,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),HI.forEach(t),wj=c(e),Pp=l(e,"P",{});var WI=r(Pp);m4=n(WI,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),WI.forEach(t),yj=c(e),d(po.$$.fragment,e),bj=c(e),ze=l(e,"P",{});var ac=r(ze);_4=n(ac,"If the training script is in a normal file and not in the notebook cells, you can launch "),Lh=l(ac,"CODE",{});var FI=r(Lh);v4=n(FI,"deepspeed"),FI.forEach(t),j4=n(ac,` normally via
shell from a cell. For example, to use `),Zh=l(ac,"CODE",{});var BI=r(Zh);g4=n(BI,"run_translation.py"),BI.forEach(t),w4=n(ac," you would launch it with:"),ac.forEach(t),qj=c(e),d(io.$$.fragment,e),Ej=c(e),Ot=l(e,"P",{});var Hb=r(Ot);y4=n(Hb,"or with "),Gh=l(Hb,"CODE",{});var VI=r(Gh);b4=n(VI,"%%bash"),VI.forEach(t),q4=n(Hb," magic, where you can write a multi-line code for the shell program to run:"),Hb.forEach(t),$j=c(e),d(uo.$$.fragment,e),kj=c(e),Op=l(e,"P",{});var YI=r(Op);E4=n(YI,"In such case you don\u2019t need any of the code presented at the beginning of this section."),YI.forEach(t),Dj=c(e),zt=l(e,"P",{});var Wb=r(zt);$4=n(Wb,"Note: While "),Mh=l(Wb,"CODE",{});var KI=r(Mh);k4=n(KI,"%%bash"),KI.forEach(t),D4=n(Wb,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Wb.forEach(t),Pj=c(e),zp=l(e,"A",{id:!0}),r(zp).forEach(t),Oj=c(e),bs=l(e,"H3",{class:!0});var Fb=r(bs);Tt=l(Fb,"A",{id:!0,class:!0,href:!0});var JI=r(Tt);Nh=l(JI,"SPAN",{});var XI=r(Nh);d(co.$$.fragment,XI),XI.forEach(t),JI.forEach(t),P4=c(Fb),Hh=l(Fb,"SPAN",{});var QI=r(Hh);O4=n(QI,"Configuration"),QI.forEach(t),Fb.forEach(t),zj=c(e),At=l(e,"P",{});var Bb=r(At);z4=n(Bb,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),ho=l(Bb,"A",{href:!0,rel:!0});var eR=r(ho);T4=n(eR,"following documentation"),eR.forEach(t),A4=n(Bb,"."),Bb.forEach(t),Tj=c(e),St=l(e,"P",{});var Vb=r(St);S4=n(Vb,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),fo=l(Vb,"A",{href:!0,rel:!0});var sR=r(fo);C4=n(sR,`the DeepSpeedExamples
repo`),sR.forEach(t),x4=n(Vb,":"),Vb.forEach(t),Aj=c(e),d(mo.$$.fragment,e),Sj=c(e),Ct=l(e,"P",{});var Yb=r(Ct);I4=n(Yb,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),Wh=l(Yb,"CODE",{});var tR=r(Wh);R4=n(tR,".json"),tR.forEach(t),U4=n(Yb," files with:"),Yb.forEach(t),Cj=c(e),d(_o.$$.fragment,e),xj=c(e),xt=l(e,"P",{});var Kb=r(xt);L4=n(Kb,"Some more examples are to be found in the "),vo=l(Kb,"A",{href:!0,rel:!0});var aR=r(vo);Z4=n(aR,"main repo"),aR.forEach(t),G4=n(Kb," as well."),Kb.forEach(t),Ij=c(e),Tp=l(e,"P",{});var nR=r(Tp);M4=n(nR,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),nR.forEach(t),Rj=c(e),X=l(e,"P",{});var dn=r(X);N4=n(dn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),Fh=l(dn,"CODE",{});var oR=r(Fh);H4=n(oR,"AdamW"),oR.forEach(t),W4=n(dn," optimizer and "),Bh=l(dn,"CODE",{});var lR=r(Bh);F4=n(lR,"WarmupLR"),lR.forEach(t),B4=n(dn,` scheduler and will enable mixed
precision training if `),Vh=l(dn,"CODE",{});var rR=r(Vh);V4=n(rR,"--fp16"),rR.forEach(t),Y4=n(dn," is passed:"),dn.forEach(t),Uj=c(e),d(jo.$$.fragment,e),Lj=c(e),It=l(e,"P",{});var Jb=r(It);K4=n(Jb,"When you execute the program, DeepSpeed will log the configuration it received from the "),Ap=l(Jb,"A",{href:!0});var pR=r(Ap);J4=n(pR,"Trainer"),pR.forEach(t),X4=n(Jb,`
to the console, so you can see exactly what was the final configuration passed to it.`),Jb.forEach(t),Zj=c(e),Sp=l(e,"A",{id:!0}),r(Sp).forEach(t),Gj=c(e),qs=l(e,"H3",{class:!0});var Xb=r(qs);Rt=l(Xb,"A",{id:!0,class:!0,href:!0});var iR=r(Rt);Yh=l(iR,"SPAN",{});var uR=r(Yh);d(go.$$.fragment,uR),uR.forEach(t),iR.forEach(t),Q4=c(Xb),Kh=l(Xb,"SPAN",{});var cR=r(Kh);e$=n(cR,"Passing Configuration"),cR.forEach(t),Xb.forEach(t),Mj=c(e),T=l(e,"P",{});var ce=r(T);s$=n(ce,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Cp=l(ce,"A",{href:!0});var hR=r(Cp);t$=n(hR,"Trainer"),hR.forEach(t),a$=n(ce," via "),xp=l(ce,"A",{href:!0});var fR=r(xp);n$=n(fR,"TrainingArguments"),fR.forEach(t),o$=n(ce," then for the "),Jh=l(ce,"CODE",{});var dR=r(Jh);l$=n(dR,"deepspeed"),dR.forEach(t),r$=n(ce,` argument you can
pass a nested `),Xh=l(ce,"CODE",{});var mR=r(Xh);p$=n(mR,"dict"),mR.forEach(t),i$=n(ce,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Ip=l(ce,"A",{href:!0});var _R=r(Ip);u$=n(_R,"TrainingArguments"),_R.forEach(t),c$=n(ce,"."),ce.forEach(t),Nj=c(e),Rp=l(e,"P",{});var vR=r(Rp);h$=n(vR,"To summarize you can do:"),vR.forEach(t),Hj=c(e),d(wo.$$.fragment,e),Wj=c(e),Up=l(e,"P",{});var jR=r(Up);f$=n(jR,"or:"),jR.forEach(t),Fj=c(e),d(yo.$$.fragment,e),Bj=c(e),Lp=l(e,"A",{id:!0}),r(Lp).forEach(t),Vj=c(e),Es=l(e,"H3",{class:!0});var Qb=r(Es);Ut=l(Qb,"A",{id:!0,class:!0,href:!0});var gR=r(Ut);Qh=l(gR,"SPAN",{});var wR=r(Qh);d(bo.$$.fragment,wR),wR.forEach(t),gR.forEach(t),d$=c(Qb),ef=l(Qb,"SPAN",{});var yR=r(ef);m$=n(yR,"Shared Configuration"),yR.forEach(t),Qb.forEach(t),Yj=c(e),d(Lt.$$.fragment,e),Kj=c(e),Te=l(e,"P",{});var nc=r(Te);_$=n(nc,"Some configuration values are required by both the "),Zp=l(nc,"A",{href:!0});var bR=r(Zp);v$=n(bR,"Trainer"),bR.forEach(t),j$=n(nc,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Gp=l(nc,"A",{href:!0});var qR=r(Gp);g$=n(qR,"Trainer"),qR.forEach(t),w$=n(nc," command line arguments."),nc.forEach(t),Jj=c(e),Zt=l(e,"P",{});var e3=r(Zt);y$=n(e3,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Mp=l(e3,"A",{href:!0});var ER=r(Mp);b$=n(ER,"Trainer"),ER.forEach(t),q$=n(e3,` do the majority
of configuration for you.`),e3.forEach(t),Xj=c(e),Ae=l(e,"P",{});var oc=r(Ae);E$=n(oc,"Therefore, in the rest of this guide you will find a special configuration value: "),sf=l(oc,"CODE",{});var $R=r(sf);$$=n($R,"auto"),$R.forEach(t),k$=n(oc,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Np=l(oc,"A",{href:!0});var kR=r(Np);D$=n(kR,"Trainer"),kR.forEach(t),P$=n(oc,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),oc.forEach(t),Qj=c(e),Hp=l(e,"P",{});var DR=r(Hp);O$=n(DR,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),DR.forEach(t),eg=c(e),Gt=l(e,"P",{});var s3=r(Gt);z$=n(s3,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Wp=l(s3,"A",{href:!0});var PR=r(Wp);T$=n(PR,"TrainingArguments"),PR.forEach(t),A$=n(s3," based on that. The steps are:"),s3.forEach(t),sg=c(e),Mt=l(e,"OL",{});var t3=r(Mt);tf=l(t3,"LI",{});var OR=r(tf);S$=n(OR,"Create or load the DeepSpeed configuration to be used as a master configuration"),OR.forEach(t),C$=c(t3),qo=l(t3,"LI",{});var a3=r(qo);x$=n(a3,"Create the "),Fp=l(a3,"A",{href:!0});var zR=r(Fp);I$=n(zR,"TrainingArguments"),zR.forEach(t),R$=n(a3," object based on these values"),a3.forEach(t),t3.forEach(t),tg=c(e),Q=l(e,"P",{});var mn=r(Q);U$=n(mn,"Do note that some values, such as "),af=l(mn,"CODE",{});var TR=r(af);L$=n(TR,"scheduler.params.total_num_steps"),TR.forEach(t),Z$=n(mn,` are calculated by
`),Bp=l(mn,"A",{href:!0});var AR=r(Bp);G$=n(AR,"Trainer"),AR.forEach(t),M$=n(mn," during "),nf=l(mn,"CODE",{});var SR=r(nf);N$=n(SR,"train"),SR.forEach(t),H$=n(mn,", but you can of course do the math yourself."),mn.forEach(t),ag=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),ng=c(e),$s=l(e,"H3",{class:!0});var n3=r($s);Nt=l(n3,"A",{id:!0,class:!0,href:!0});var CR=r(Nt);of=l(CR,"SPAN",{});var xR=r(of);d(Eo.$$.fragment,xR),xR.forEach(t),CR.forEach(t),W$=c(n3),lf=l(n3,"SPAN",{});var IR=r(lf);F$=n(IR,"ZeRO"),IR.forEach(t),n3.forEach(t),og=c(e),$o=l(e,"P",{});var GC=r($o);ko=l(GC,"A",{href:!0,rel:!0});var RR=r(ko);B$=n(RR,"Zero Redundancy Optimizer (ZeRO)"),RR.forEach(t),V$=n(GC,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),GC.forEach(t),lg=c(e),Se=l(e,"P",{});var lc=r(Se);Y$=n(lc,"The "),rf=l(lc,"CODE",{});var UR=r(rf);K$=n(UR,"zero_optimization"),UR.forEach(t),J$=n(lc," section of the configuration file is the most important part ("),Do=l(lc,"A",{href:!0,rel:!0});var LR=r(Do);X$=n(LR,"docs"),LR.forEach(t),Q$=n(lc,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),lc.forEach(t),rg=c(e),Ht=l(e,"P",{});var o3=r(Ht);e5=n(o3,"This section has to be configured exclusively via DeepSpeed configuration - the "),Yp=l(o3,"A",{href:!0});var ZR=r(Yp);s5=n(ZR,"Trainer"),ZR.forEach(t),t5=n(o3,` provides
no equivalent command line arguments.`),o3.forEach(t),pg=c(e),Kp=l(e,"P",{});var GR=r(Kp);a5=n(GR,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),GR.forEach(t),ig=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),ug=c(e),ks=l(e,"H4",{class:!0});var l3=r(ks);Wt=l(l3,"A",{id:!0,class:!0,href:!0});var MR=r(Wt);pf=l(MR,"SPAN",{});var NR=r(pf);d(Po.$$.fragment,NR),NR.forEach(t),MR.forEach(t),n5=c(l3),uf=l(l3,"SPAN",{});var HR=r(uf);o5=n(HR,"ZeRO-2 Config"),HR.forEach(t),l3.forEach(t),cg=c(e),Xp=l(e,"P",{});var WR=r(Xp);l5=n(WR,"The following is an example of configuration for ZeRO stage 2:"),WR.forEach(t),hg=c(e),d(Oo.$$.fragment,e),fg=c(e),Qp=l(e,"P",{});var FR=r(Qp);cf=l(FR,"STRONG",{});var BR=r(cf);r5=n(BR,"Performance tuning:"),BR.forEach(t),FR.forEach(t),dg=c(e),Ce=l(e,"UL",{});var rc=r(Ce);Ds=l(rc,"LI",{});var pc=r(Ds);p5=n(pc,"enabling "),hf=l(pc,"CODE",{});var VR=r(hf);i5=n(VR,"offload_optimizer"),VR.forEach(t),u5=n(pc," should reduce GPU RAM usage (it requires "),ff=l(pc,"CODE",{});var YR=r(ff);c5=n(YR,'"stage": 2'),YR.forEach(t),h5=n(pc,")"),pc.forEach(t),f5=c(rc),A=l(rc,"LI",{});var K=r(A);df=l(K,"CODE",{});var KR=r(df);d5=n(KR,'"overlap_comm": true'),KR.forEach(t),m5=n(K," trades off increased GPU RAM usage to lower all-reduce latency. "),mf=l(K,"CODE",{});var JR=r(mf);_5=n(JR,"overlap_comm"),JR.forEach(t),v5=n(K,` uses 4.5x
the `),_f=l(K,"CODE",{});var XR=r(_f);j5=n(XR,"allgather_bucket_size"),XR.forEach(t),g5=n(K," and "),vf=l(K,"CODE",{});var QR=r(vf);w5=n(QR,"reduce_bucket_size"),QR.forEach(t),y5=n(K,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),jf=l(K,"CODE",{});var eU=r(jf);b5=n(eU,"5e8 x 2Bytes x 2 x 4.5"),eU.forEach(t),q5=n(K,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),gf=l(K,"CODE",{});var sU=r(gf);E5=n(sU,"2e8"),sU.forEach(t),$5=n(K,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),K.forEach(t),k5=c(rc),wf=l(rc,"LI",{});var tU=r(wf);D5=n(tU,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),tU.forEach(t),rc.forEach(t),mg=c(e),ei=l(e,"A",{id:!0}),r(ei).forEach(t),_g=c(e),Ps=l(e,"H4",{class:!0});var r3=r(Ps);Ft=l(r3,"A",{id:!0,class:!0,href:!0});var aU=r(Ft);yf=l(aU,"SPAN",{});var nU=r(yf);d(zo.$$.fragment,nU),nU.forEach(t),aU.forEach(t),P5=c(r3),bf=l(r3,"SPAN",{});var oU=r(bf);O5=n(oU,"ZeRO-3 Config"),oU.forEach(t),r3.forEach(t),vg=c(e),si=l(e,"P",{});var lU=r(si);z5=n(lU,"The following is an example of configuration for ZeRO stage 3:"),lU.forEach(t),jg=c(e),d(To.$$.fragment,e),gg=c(e),M=l(e,"P",{});var ps=r(M);T5=n(ps,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),qf=l(ps,"CODE",{});var rU=r(qf);A5=n(rU,'"device": "cpu"'),rU.forEach(t),S5=n(ps,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ef=l(ps,"CODE",{});var pU=r(Ef);C5=n(pU,"none"),pU.forEach(t),x5=n(ps," instead of "),$f=l(ps,"CODE",{});var iU=r($f);I5=n(iU,"cpu"),iU.forEach(t),R5=n(ps," for the "),kf=l(ps,"CODE",{});var uU=r(kf);U5=n(uU,"device"),uU.forEach(t),L5=n(ps,` entry. Offloading to
NVMe is discussed further down.`),ps.forEach(t),wg=c(e),xe=l(e,"P",{});var ic=r(xe);Z5=n(ic,"Pinned memory is enabled with "),Df=l(ic,"CODE",{});var cU=r(Df);G5=n(cU,"pin_memory"),cU.forEach(t),M5=n(ic," set to "),Pf=l(ic,"CODE",{});var hU=r(Pf);N5=n(hU,"true"),hU.forEach(t),H5=n(ic,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),ic.forEach(t),yg=c(e),ti=l(e,"P",{});var fU=r(ti);Of=l(fU,"STRONG",{});var dU=r(Of);W5=n(dU,"Performance tuning:"),dU.forEach(t),fU.forEach(t),bg=c(e),Bt=l(e,"UL",{});var p3=r(Bt);Ao=l(p3,"LI",{});var i3=r(Ao);zf=l(i3,"CODE",{});var mU=r(zf);F5=n(mU,"stage3_max_live_parameters"),mU.forEach(t),B5=n(i3,": "),Tf=l(i3,"CODE",{});var _U=r(Tf);V5=n(_U,"1e9"),_U.forEach(t),i3.forEach(t),Y5=c(p3),So=l(p3,"LI",{});var u3=r(So);Af=l(u3,"CODE",{});var vU=r(Af);K5=n(vU,"stage3_max_reuse_distance"),vU.forEach(t),J5=n(u3,": "),Sf=l(u3,"CODE",{});var jU=r(Sf);X5=n(jU,"1e9"),jU.forEach(t),u3.forEach(t),p3.forEach(t),qg=c(e),S=l(e,"P",{});var he=r(S);Q5=n(he,"If hitting OOM reduce "),Cf=l(he,"CODE",{});var gU=r(Cf);e8=n(gU,"stage3_max_live_parameters"),gU.forEach(t),s8=n(he," and "),xf=l(he,"CODE",{});var wU=r(xf);t8=n(wU,"stage3_max_reuse_distance"),wU.forEach(t),a8=n(he,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),If=l(he,"CODE",{});var yU=r(If);n8=n(yU,"1e9"),yU.forEach(t),o8=n(he,` would consume ~2GB. The memory is shared by
`),Rf=l(he,"CODE",{});var bU=r(Rf);l8=n(bU,"stage3_max_live_parameters"),bU.forEach(t),r8=n(he," and "),Uf=l(he,"CODE",{});var qU=r(Uf);p8=n(qU,"stage3_max_reuse_distance"),qU.forEach(t),i8=n(he,", so it\u2019s not additive, it\u2019s just 2GB total."),he.forEach(t),Eg=c(e),je=l(e,"P",{});var Ur=r(je);Lf=l(Ur,"CODE",{});var EU=r(Lf);u8=n(EU,"stage3_max_live_parameters"),EU.forEach(t),c8=n(Ur,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),Zf=l(Ur,"CODE",{});var $U=r(Zf);h8=n($U,"stage3_max_reuse_distance"),$U.forEach(t),f8=n(Ur,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),Gf=l(Ur,"CODE",{});var kU=r(Gf);d8=n(kU,"stage3_max_reuse_distance"),kU.forEach(t),m8=n(Ur,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ur.forEach(t),$g=c(e),ai=l(e,"P",{});var DU=r(ai);_8=n(DU,"The following configuration values depend on the model\u2019s hidden size:"),DU.forEach(t),kg=c(e),Ie=l(e,"UL",{});var uc=r(Ie);Co=l(uc,"LI",{});var c3=r(Co);Mf=l(c3,"CODE",{});var PU=r(Mf);v8=n(PU,"reduce_bucket_size"),PU.forEach(t),j8=n(c3,": "),Nf=l(c3,"CODE",{});var OU=r(Nf);g8=n(OU,"hidden_size*hidden_size"),OU.forEach(t),c3.forEach(t),w8=c(uc),xo=l(uc,"LI",{});var h3=r(xo);Hf=l(h3,"CODE",{});var zU=r(Hf);y8=n(zU,"stage3_prefetch_bucket_size"),zU.forEach(t),b8=n(h3,": "),Wf=l(h3,"CODE",{});var TU=r(Wf);q8=n(TU,"0.9 * hidden_size * hidden_size"),TU.forEach(t),h3.forEach(t),E8=c(uc),Io=l(uc,"LI",{});var f3=r(Io);Ff=l(f3,"CODE",{});var AU=r(Ff);$8=n(AU,"stage3_param_persistence_threshold"),AU.forEach(t),k8=n(f3,": "),Bf=l(f3,"CODE",{});var SU=r(Bf);D8=n(SU,"10 * hidden_size"),SU.forEach(t),f3.forEach(t),uc.forEach(t),Dg=c(e),Re=l(e,"P",{});var cc=r(Re);P8=n(cc,"therefore set these values to "),Vf=l(cc,"CODE",{});var CU=r(Vf);O8=n(CU,"auto"),CU.forEach(t),z8=n(cc," and the "),ni=l(cc,"A",{href:!0});var xU=r(ni);T8=n(xU,"Trainer"),xU.forEach(t),A8=n(cc,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),cc.forEach(t),Pg=c(e),Ro=l(e,"P",{});var MC=r(Ro);Yf=l(MC,"CODE",{});var IU=r(Yf);S8=n(IU,"stage3_gather_fp16_weights_on_model_save"),IU.forEach(t),C8=n(MC,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),MC.forEach(t),Og=c(e),ee=l(e,"P",{});var _n=r(ee);x8=n(_n,"If you\u2019re migrating from ZeRO-2 configuration note that "),Kf=l(_n,"CODE",{});var RU=r(Kf);I8=n(RU,"allgather_partitions"),RU.forEach(t),R8=n(_n,", "),Jf=l(_n,"CODE",{});var UU=r(Jf);U8=n(UU,"allgather_bucket_size"),UU.forEach(t),L8=n(_n,` and
`),Xf=l(_n,"CODE",{});var LU=r(Xf);Z8=n(LU,"reduce_scatter"),LU.forEach(t),G8=n(_n,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),_n.forEach(t),zg=c(e),oi=l(e,"UL",{});var ZU=r(oi);Uo=l(ZU,"LI",{});var d3=r(Uo);Qf=l(d3,"CODE",{});var GU=r(Qf);M8=n(GU,"sub_group_size"),GU.forEach(t),N8=n(d3,": "),ed=l(d3,"CODE",{});var MU=r(ed);H8=n(MU,"1e9"),MU.forEach(t),d3.forEach(t),ZU.forEach(t),Tg=c(e),ge=l(e,"P",{});var Lr=r(ge);sd=l(Lr,"CODE",{});var NU=r(sd);W8=n(NU,"sub_group_size"),NU.forEach(t),F8=n(Lr,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),td=l(Lr,"CODE",{});var HU=r(td);B8=n(HU,"sub_group_size"),HU.forEach(t),V8=n(Lr,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),ad=l(Lr,"CODE",{});var WU=r(ad);Y8=n(WU,"sub_group_size"),WU.forEach(t),K8=n(Lr,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Lr.forEach(t),Ag=c(e),Ue=l(e,"P",{});var hc=r(Ue);J8=n(hc,"You can leave "),nd=l(hc,"CODE",{});var FU=r(nd);X8=n(FU,"sub_group_size"),FU.forEach(t),Q8=n(hc," to its default value of "),od=l(hc,"EM",{});var BU=r(od);e9=n(BU,"1e9"),BU.forEach(t),s9=n(hc,` when not using NVMe offload. You may want to change its
default value in the following cases:`),hc.forEach(t),Sg=c(e),Vt=l(e,"OL",{});var m3=r(Vt);Lo=l(m3,"LI",{});var _3=r(Lo);t9=n(_3,"Running into OOM during optimizer step: Reduce "),ld=l(_3,"CODE",{});var VU=r(ld);a9=n(VU,"sub_group_size"),VU.forEach(t),n9=n(_3," to reduce memory utilization of temporary buffers"),_3.forEach(t),o9=c(m3),Zo=l(m3,"LI",{});var v3=r(Zo);l9=n(v3,"Optimizer Step is taking a long time: Increase "),rd=l(v3,"CODE",{});var YU=r(rd);r9=n(YU,"sub_group_size"),YU.forEach(t),p9=n(v3,` to improve bandwidth utilization as a result of
the increased data buffers.`),v3.forEach(t),m3.forEach(t),Cg=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),xg=c(e),Os=l(e,"H3",{class:!0});var j3=r(Os);Yt=l(j3,"A",{id:!0,class:!0,href:!0});var KU=r(Yt);pd=l(KU,"SPAN",{});var JU=r(pd);d(Go.$$.fragment,JU),JU.forEach(t),KU.forEach(t),i9=c(j3),id=l(j3,"SPAN",{});var XU=r(id);u9=n(XU,"NVMe Support"),XU.forEach(t),j3.forEach(t),Ig=c(e),ri=l(e,"P",{});var QU=r(ri);c9=n(QU,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),QU.forEach(t),Rg=c(e),pi=l(e,"P",{});var eL=r(pi);h9=n(eL,"The following configuration example enables NVMe to offload both optimizer states and the params:"),eL.forEach(t),Ug=c(e),d(Mo.$$.fragment,e),Lg=c(e),Kt=l(e,"P",{});var g3=r(Kt);f9=n(g3,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),ud=l(g3,"EM",{});var sL=r(ud);d9=n(sL,"\u201Cdevice\u201D: \u201Ccpu\u201D"),sL.forEach(t),m9=n(g3,")."),g3.forEach(t),Zg=c(e),Le=l(e,"P",{});var fc=r(Le);_9=n(fc,"Here is the full documentation for offloading "),No=l(fc,"A",{href:!0,rel:!0});var tL=r(No);v9=n(tL,"optimizer states"),tL.forEach(t),j9=n(fc," and "),Ho=l(fc,"A",{href:!0,rel:!0});var aL=r(Ho);g9=n(aL,"parameters"),aL.forEach(t),w9=n(fc,"."),fc.forEach(t),Gg=c(e),Jt=l(e,"P",{});var w3=r(Jt);y9=n(w3,"Make sure that your "),cd=l(w3,"CODE",{});var nL=r(cd);b9=n(nL,"nvme_path"),nL.forEach(t),q9=n(w3,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),w3.forEach(t),Mg=c(e),Ze=l(e,"P",{});var dc=r(Ze);E9=n(dc,"In order to figure out the optimal "),hd=l(dc,"CODE",{});var oL=r(hd);$9=n(oL,"aio"),oL.forEach(t),k9=n(dc,` configuration block you must run a benchmark on your target setup, as
`),Wo=l(dc,"A",{href:!0,rel:!0});var lL=r(Wo);D9=n(lL,"explained here"),lL.forEach(t),P9=n(dc,"."),dc.forEach(t),Ng=c(e),ii=l(e,"A",{id:!0}),r(ii).forEach(t),Hg=c(e),zs=l(e,"H4",{class:!0});var y3=r(zs);Xt=l(y3,"A",{id:!0,class:!0,href:!0});var rL=r(Xt);fd=l(rL,"SPAN",{});var pL=r(fd);d(Fo.$$.fragment,pL),pL.forEach(t),rL.forEach(t),O9=c(y3),dd=l(y3,"SPAN",{});var iL=r(dd);z9=n(iL,"ZeRO-2 vs ZeRO-3 Performance"),iL.forEach(t),y3.forEach(t),Wg=c(e),ui=l(e,"P",{});var uL=r(ui);T9=n(uL,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),uL.forEach(t),Fg=c(e),ci=l(e,"P",{});var cL=r(ci);A9=n(cL,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),cL.forEach(t),Bg=c(e),Qt=l(e,"UL",{});var b3=r(Qt);Ts=l(b3,"LI",{});var mc=r(Ts);S9=n(mc,"set "),md=l(mc,"CODE",{});var hL=r(md);C9=n(hL,"stage3_param_persistence_threshold"),hL.forEach(t),x9=n(mc," to a very large number - larger than the largest parameter, e.g., "),_d=l(mc,"CODE",{});var fL=r(_d);I9=n(fL,"6 * hidden_size * hidden_size"),fL.forEach(t),R9=n(mc,". This will keep the parameters on the GPUs."),mc.forEach(t),U9=c(b3),Bo=l(b3,"LI",{});var q3=r(Bo);L9=n(q3,"turn off "),vd=l(q3,"CODE",{});var dL=r(vd);Z9=n(dL,"offload_params"),dL.forEach(t),G9=n(q3," since ZeRO-2 doesn\u2019t have that option."),q3.forEach(t),b3.forEach(t),Vg=c(e),Ge=l(e,"P",{});var _c=r(Ge);M9=n(_c,"The performance will likely improve significantly with just "),jd=l(_c,"CODE",{});var mL=r(jd);N9=n(mL,"offload_params"),mL.forEach(t),H9=n(_c,` turned off, even if you don\u2019t change
`),gd=l(_c,"CODE",{});var _L=r(gd);W9=n(_L,"stage3_param_persistence_threshold"),_L.forEach(t),F9=n(_c,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),_c.forEach(t),Yg=c(e),hi=l(e,"A",{id:!0}),r(hi).forEach(t),Kg=c(e),As=l(e,"H4",{class:!0});var E3=r(As);ea=l(E3,"A",{id:!0,class:!0,href:!0});var vL=r(ea);wd=l(vL,"SPAN",{});var jL=r(wd);d(Vo.$$.fragment,jL),jL.forEach(t),vL.forEach(t),B9=c(E3),yd=l(E3,"SPAN",{});var gL=r(yd);V9=n(gL,"ZeRO-2 Example"),gL.forEach(t),E3.forEach(t),Jg=c(e),sa=l(e,"P",{});var $3=r(sa);Y9=n($3,"Here is a full ZeRO-2 auto-configuration file "),bd=l($3,"CODE",{});var wL=r(bd);K9=n(wL,"ds_config_zero2.json"),wL.forEach(t),J9=n($3,":"),$3.forEach(t),Xg=c(e),d(Yo.$$.fragment,e),Qg=c(e),ta=l(e,"P",{});var k3=r(ta);X9=n(k3,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),qd=l(k3,"CODE",{});var yL=r(qd);Q9=n(yL,"auto"),yL.forEach(t),e7=n(k3," settings in it."),k3.forEach(t),ew=c(e),d(Ko.$$.fragment,e),sw=c(e),fi=l(e,"A",{id:!0}),r(fi).forEach(t),tw=c(e),Ss=l(e,"H4",{class:!0});var D3=r(Ss);aa=l(D3,"A",{id:!0,class:!0,href:!0});var bL=r(aa);Ed=l(bL,"SPAN",{});var qL=r(Ed);d(Jo.$$.fragment,qL),qL.forEach(t),bL.forEach(t),s7=c(D3),$d=l(D3,"SPAN",{});var EL=r($d);t7=n(EL,"ZeRO-3 Example"),EL.forEach(t),D3.forEach(t),aw=c(e),na=l(e,"P",{});var P3=r(na);a7=n(P3,"Here is a full ZeRO-3 auto-configuration file "),kd=l(P3,"CODE",{});var $L=r(kd);n7=n($L,"ds_config_zero3.json"),$L.forEach(t),o7=n(P3,":"),P3.forEach(t),nw=c(e),d(Xo.$$.fragment,e),ow=c(e),oa=l(e,"P",{});var O3=r(oa);l7=n(O3,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Dd=l(O3,"CODE",{});var kL=r(Dd);r7=n(kL,"auto"),kL.forEach(t),p7=n(O3," settings in it."),O3.forEach(t),lw=c(e),d(Qo.$$.fragment,e),rw=c(e),Cs=l(e,"H3",{class:!0});var z3=r(Cs);la=l(z3,"A",{id:!0,class:!0,href:!0});var DL=r(la);Pd=l(DL,"SPAN",{});var PL=r(Pd);d(el.$$.fragment,PL),PL.forEach(t),DL.forEach(t),i7=c(z3),Od=l(z3,"SPAN",{});var OL=r(Od);u7=n(OL,"Optimizer and Scheduler"),OL.forEach(t),z3.forEach(t),pw=c(e),ra=l(e,"P",{});var T3=r(ra);c7=n(T3,"As long as you don\u2019t enable "),zd=l(T3,"CODE",{});var zL=r(zd);h7=n(zL,"offload_optimizer"),zL.forEach(t),f7=n(T3,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),T3.forEach(t),iw=c(e),di=l(e,"P",{});var TL=r(di);d7=n(TL,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),TL.forEach(t),uw=c(e),pa=l(e,"P",{});var A3=r(pa);m7=n(A3,"It is possible to use a non-DeepSpeed optimizer when "),Td=l(A3,"CODE",{});var AL=r(Td);_7=n(AL,"offload_optimizer"),AL.forEach(t),v7=n(A3,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),A3.forEach(t),cw=c(e),mi=l(e,"A",{id:!0}),r(mi).forEach(t),hw=c(e),xs=l(e,"H4",{class:!0});var S3=r(xs);ia=l(S3,"A",{id:!0,class:!0,href:!0});var SL=r(ia);Ad=l(SL,"SPAN",{});var CL=r(Ad);d(sl.$$.fragment,CL),CL.forEach(t),SL.forEach(t),j7=c(S3),Sd=l(S3,"SPAN",{});var xL=r(Sd);g7=n(xL,"Optimizer"),xL.forEach(t),S3.forEach(t),fw=c(e),Me=l(e,"P",{});var vc=r(Me);w7=n(vc,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Cd=l(vc,"CODE",{});var IL=r(Cd);y7=n(IL,"torch"),IL.forEach(t),b7=n(vc,". The full documentation is "),tl=l(vc,"A",{href:!0,rel:!0});var RL=r(tl);q7=n(RL,"here"),RL.forEach(t),E7=n(vc,"."),vc.forEach(t),dw=c(e),q=l(e,"P",{});var P=r(q);$7=n(P,"If you don\u2019t configure the "),xd=l(P,"CODE",{});var UL=r(xd);k7=n(UL,"optimizer"),UL.forEach(t),D7=n(P," entry in the configuration file, the "),_i=l(P,"A",{href:!0});var LL=r(_i);P7=n(LL,"Trainer"),LL.forEach(t),O7=n(P,` will
automatically set it to `),Id=l(P,"CODE",{});var ZL=r(Id);z7=n(ZL,"AdamW"),ZL.forEach(t),T7=n(P,` and will use the supplied values or the defaults for the following command line
arguments: `),Rd=l(P,"CODE",{});var GL=r(Rd);A7=n(GL,"--learning_rate"),GL.forEach(t),S7=n(P,", "),Ud=l(P,"CODE",{});var ML=r(Ud);C7=n(ML,"--adam_beta1"),ML.forEach(t),x7=n(P,", "),Ld=l(P,"CODE",{});var NL=r(Ld);I7=n(NL,"--adam_beta2"),NL.forEach(t),R7=n(P,", "),Zd=l(P,"CODE",{});var HL=r(Zd);U7=n(HL,"--adam_epsilon"),HL.forEach(t),L7=n(P," and "),Gd=l(P,"CODE",{});var WL=r(Gd);Z7=n(WL,"--weight_decay"),WL.forEach(t),G7=n(P,"."),P.forEach(t),mw=c(e),Ne=l(e,"P",{});var jc=r(Ne);M7=n(jc,"Here is an example of the auto-configured "),Md=l(jc,"CODE",{});var FL=r(Md);N7=n(FL,"optimizer"),FL.forEach(t),H7=n(jc," entry for "),Nd=l(jc,"CODE",{});var BL=r(Nd);W7=n(BL,"AdamW"),BL.forEach(t),F7=n(jc,":"),jc.forEach(t),_w=c(e),d(al.$$.fragment,e),vw=c(e),vi=l(e,"P",{});var VL=r(vi);B7=n(VL,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),VL.forEach(t),jw=c(e),se=l(e,"UL",{});var vn=r(se);nl=l(vn,"LI",{});var C3=r(nl);Hd=l(C3,"CODE",{});var YL=r(Hd);V7=n(YL,"lr"),YL.forEach(t),Y7=n(C3," with the value of "),Wd=l(C3,"CODE",{});var KL=r(Wd);K7=n(KL,"--learning_rate"),KL.forEach(t),C3.forEach(t),J7=c(vn),ol=l(vn,"LI",{});var x3=r(ol);Fd=l(x3,"CODE",{});var JL=r(Fd);X7=n(JL,"betas"),JL.forEach(t),Q7=n(x3," with the value of "),Bd=l(x3,"CODE",{});var XL=r(Bd);ek=n(XL,"--adam_beta1 --adam_beta2"),XL.forEach(t),x3.forEach(t),sk=c(vn),ll=l(vn,"LI",{});var I3=r(ll);Vd=l(I3,"CODE",{});var QL=r(Vd);tk=n(QL,"eps"),QL.forEach(t),ak=n(I3," with the value of "),Yd=l(I3,"CODE",{});var eZ=r(Yd);nk=n(eZ,"--adam_epsilon"),eZ.forEach(t),I3.forEach(t),ok=c(vn),rl=l(vn,"LI",{});var R3=r(rl);Kd=l(R3,"CODE",{});var sZ=r(Kd);lk=n(sZ,"weight_decay"),sZ.forEach(t),rk=n(R3," with the value of "),Jd=l(R3,"CODE",{});var tZ=r(Jd);pk=n(tZ,"--weight_decay"),tZ.forEach(t),R3.forEach(t),vn.forEach(t),gw=c(e),ji=l(e,"P",{});var aZ=r(ji);ik=n(aZ,"Therefore please remember to tune the shared hyperparameters on the command line."),aZ.forEach(t),ww=c(e),gi=l(e,"P",{});var nZ=r(gi);uk=n(nZ,"You can also set the values explicitly:"),nZ.forEach(t),yw=c(e),d(pl.$$.fragment,e),bw=c(e),ua=l(e,"P",{});var U3=r(ua);ck=n(U3,"But then you\u2019re on your own synchronizing the "),wi=l(U3,"A",{href:!0});var oZ=r(wi);hk=n(oZ,"Trainer"),oZ.forEach(t),fk=n(U3,` command line arguments and the DeepSpeed
configuration.`),U3.forEach(t),qw=c(e),yi=l(e,"P",{});var lZ=r(yi);dk=n(lZ,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),lZ.forEach(t),Ew=c(e),d(il.$$.fragment,e),$w=c(e),te=l(e,"P",{});var jn=r(te);mk=n(jn,"Similarly to "),Xd=l(jn,"CODE",{});var rZ=r(Xd);_k=n(rZ,"AdamW"),rZ.forEach(t),vk=n(jn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),Qd=l(jn,"CODE",{});var pZ=r(Qd);jk=n(pZ,"weight_decay"),pZ.forEach(t),gk=n(jn," around "),em=l(jn,"CODE",{});var iZ=r(em);wk=n(iZ,"0.01"),iZ.forEach(t),yk=n(jn,"."),jn.forEach(t),kw=c(e),bi=l(e,"A",{id:!0}),r(bi).forEach(t),Dw=c(e),Is=l(e,"H4",{class:!0});var L3=r(Is);ca=l(L3,"A",{id:!0,class:!0,href:!0});var uZ=r(ca);sm=l(uZ,"SPAN",{});var cZ=r(sm);d(ul.$$.fragment,cZ),cZ.forEach(t),uZ.forEach(t),bk=c(L3),tm=l(L3,"SPAN",{});var hZ=r(tm);qk=n(hZ,"Scheduler"),hZ.forEach(t),L3.forEach(t),Pw=c(e),C=l(e,"P",{});var fe=r(C);Ek=n(fe,"DeepSpeed supports "),am=l(fe,"CODE",{});var fZ=r(am);$k=n(fZ,"LRRangeTest"),fZ.forEach(t),kk=n(fe,", "),nm=l(fe,"CODE",{});var dZ=r(nm);Dk=n(dZ,"OneCycle"),dZ.forEach(t),Pk=n(fe,", "),om=l(fe,"CODE",{});var mZ=r(om);Ok=n(mZ,"WarmupLR"),mZ.forEach(t),zk=n(fe," and "),lm=l(fe,"CODE",{});var _Z=r(lm);Tk=n(_Z,"WarmupDecayLR"),_Z.forEach(t),Ak=n(fe,` learning rate schedulers. The full
documentation is `),cl=l(fe,"A",{href:!0,rel:!0});var vZ=r(cl);Sk=n(vZ,"here"),vZ.forEach(t),Ck=n(fe,"."),fe.forEach(t),Ow=c(e),qi=l(e,"P",{});var jZ=r(qi);xk=n(jZ,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),jZ.forEach(t),zw=c(e),ha=l(e,"UL",{});var Z3=r(ha);hl=l(Z3,"LI",{});var G3=r(hl);rm=l(G3,"CODE",{});var gZ=r(rm);Ik=n(gZ,"WarmupLR"),gZ.forEach(t),Rk=n(G3," via "),pm=l(G3,"CODE",{});var wZ=r(pm);Uk=n(wZ,"--lr_scheduler_type constant_with_warmup"),wZ.forEach(t),G3.forEach(t),Lk=c(Z3),He=l(Z3,"LI",{});var Zr=r(He);im=l(Zr,"CODE",{});var yZ=r(im);Zk=n(yZ,"WarmupDecayLR"),yZ.forEach(t),Gk=n(Zr," via "),um=l(Zr,"CODE",{});var bZ=r(um);Mk=n(bZ,"--lr_scheduler_type linear"),bZ.forEach(t),Nk=n(Zr,". This is also the default value for "),cm=l(Zr,"CODE",{});var qZ=r(cm);Hk=n(qZ,"--lr_scheduler_type"),qZ.forEach(t),Wk=n(Zr,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Zr.forEach(t),Z3.forEach(t),Tw=c(e),D=l(e,"P",{});var F=r(D);Fk=n(F,"If you don\u2019t configure the "),hm=l(F,"CODE",{});var EZ=r(hm);Bk=n(EZ,"scheduler"),EZ.forEach(t),Vk=n(F," entry in the configuration file, the "),Ei=l(F,"A",{href:!0});var $Z=r(Ei);Yk=n($Z,"Trainer"),$Z.forEach(t),Kk=n(F,` will use
the values of `),fm=l(F,"CODE",{});var kZ=r(fm);Jk=n(kZ,"--lr_scheduler_type"),kZ.forEach(t),Xk=n(F,", "),dm=l(F,"CODE",{});var DZ=r(dm);Qk=n(DZ,"--learning_rate"),DZ.forEach(t),eD=n(F," and "),mm=l(F,"CODE",{});var PZ=r(mm);sD=n(PZ,"--warmup_steps"),PZ.forEach(t),tD=n(F," or "),_m=l(F,"CODE",{});var OZ=r(_m);aD=n(OZ,"--warmup_ratio"),OZ.forEach(t),nD=n(F,` to configure a
\u{1F917} Transformers version of it.`),F.forEach(t),Aw=c(e),We=l(e,"P",{});var gc=r(We);oD=n(gc,"Here is an example of the auto-configured "),vm=l(gc,"CODE",{});var zZ=r(vm);lD=n(zZ,"scheduler"),zZ.forEach(t),rD=n(gc," entry for "),jm=l(gc,"CODE",{});var TZ=r(jm);pD=n(TZ,"WarmupLR"),TZ.forEach(t),iD=n(gc,":"),gc.forEach(t),Sw=c(e),d(fl.$$.fragment,e),Cw=c(e),Fe=l(e,"P",{});var wc=r(Fe);uD=n(wc,"Since "),gm=l(wc,"EM",{});var AZ=r(gm);cD=n(AZ,"\u201Cauto\u201D"),AZ.forEach(t),hD=n(wc," is used the "),$i=l(wc,"A",{href:!0});var SZ=r($i);fD=n(SZ,"Trainer"),SZ.forEach(t),dD=n(wc,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),wc.forEach(t),xw=c(e),ae=l(e,"UL",{});var gn=r(ae);fa=l(gn,"LI",{});var F1=r(fa);wm=l(F1,"CODE",{});var CZ=r(wm);mD=n(CZ,"warmup_min_lr"),CZ.forEach(t),_D=n(F1," with the value of "),ym=l(F1,"CODE",{});var xZ=r(ym);vD=n(xZ,"0"),xZ.forEach(t),jD=n(F1,"."),F1.forEach(t),gD=c(gn),da=l(gn,"LI",{});var B1=r(da);bm=l(B1,"CODE",{});var IZ=r(bm);wD=n(IZ,"warmup_max_lr"),IZ.forEach(t),yD=n(B1," with the value of "),qm=l(B1,"CODE",{});var RZ=r(qm);bD=n(RZ,"--learning_rate"),RZ.forEach(t),qD=n(B1,"."),B1.forEach(t),ED=c(gn),Be=l(gn,"LI",{});var Gr=r(Be);Em=l(Gr,"CODE",{});var UZ=r(Em);$D=n(UZ,"warmup_num_steps"),UZ.forEach(t),kD=n(Gr," with the value of "),$m=l(Gr,"CODE",{});var LZ=r($m);DD=n(LZ,"--warmup_steps"),LZ.forEach(t),PD=n(Gr," if provided. Otherwise will use "),km=l(Gr,"CODE",{});var ZZ=r(km);OD=n(ZZ,"--warmup_ratio"),ZZ.forEach(t),zD=n(Gr,`
multiplied by the number of training steps and rounded up.`),Gr.forEach(t),TD=c(gn),Ve=l(gn,"LI",{});var Mr=r(Ve);Dm=l(Mr,"CODE",{});var GZ=r(Dm);AD=n(GZ,"total_num_steps"),GZ.forEach(t),SD=n(Mr," with either the value of "),Pm=l(Mr,"CODE",{});var MZ=r(Pm);CD=n(MZ,"--max_steps"),MZ.forEach(t),xD=n(Mr,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),Om=l(Mr,"CODE",{});var NZ=r(Om);ID=n(NZ,"WarmupDecayLR"),NZ.forEach(t),RD=n(Mr,")."),Mr.forEach(t),gn.forEach(t),Iw=c(e),ki=l(e,"P",{});var HZ=r(ki);UD=n(HZ,"You can, of course, take over any or all of the configuration values and set those yourself:"),HZ.forEach(t),Rw=c(e),d(dl.$$.fragment,e),Uw=c(e),ma=l(e,"P",{});var M3=r(ma);LD=n(M3,"But then you\u2019re on your own synchronizing the "),Di=l(M3,"A",{href:!0});var WZ=r(Di);ZD=n(WZ,"Trainer"),WZ.forEach(t),GD=n(M3,` command line arguments and the DeepSpeed
configuration.`),M3.forEach(t),Lw=c(e),_a=l(e,"P",{});var N3=r(_a);MD=n(N3,"For example, for "),zm=l(N3,"CODE",{});var FZ=r(zm);ND=n(FZ,"WarmupDecayLR"),FZ.forEach(t),HD=n(N3,", you can use the following entry:"),N3.forEach(t),Zw=c(e),d(ml.$$.fragment,e),Gw=c(e),N=l(e,"P",{});var is=r(N);WD=n(is,"and "),Tm=l(is,"CODE",{});var BZ=r(Tm);FD=n(BZ,"total_num_steps"),BZ.forEach(t),BD=n(is,", "),Am=l(is,"CODE",{});var VZ=r(Am);VD=n(VZ,"warmup_max_lr"),VZ.forEach(t),YD=n(is,", "),Sm=l(is,"CODE",{});var YZ=r(Sm);KD=n(YZ,"warmup_num_steps"),YZ.forEach(t),JD=n(is," and "),Cm=l(is,"CODE",{});var KZ=r(Cm);XD=n(KZ,"total_num_steps"),KZ.forEach(t),QD=n(is," will be set at loading time."),is.forEach(t),Mw=c(e),Pi=l(e,"A",{id:!0}),r(Pi).forEach(t),Nw=c(e),Rs=l(e,"H3",{class:!0});var H3=r(Rs);va=l(H3,"A",{id:!0,class:!0,href:!0});var JZ=r(va);xm=l(JZ,"SPAN",{});var XZ=r(xm);d(_l.$$.fragment,XZ),XZ.forEach(t),JZ.forEach(t),eP=c(H3),Im=l(H3,"SPAN",{});var QZ=r(Im);sP=n(QZ,"fp32 Precision"),QZ.forEach(t),H3.forEach(t),Hw=c(e),Oi=l(e,"P",{});var eG=r(Oi);tP=n(eG,"Deepspeed supports the full fp32 and the fp16 mixed precision."),eG.forEach(t),Ww=c(e),ja=l(e,"P",{});var W3=r(ja);aP=n(W3,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Rm=l(W3,"CODE",{});var sG=r(Rm);nP=n(sG,"NaN"),sG.forEach(t),oP=n(W3,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),W3.forEach(t),Fw=c(e),d(vl.$$.fragment,e),Bw=c(e),ga=l(e,"P",{});var F3=r(ga);lP=n(F3,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),jl=l(F3,"A",{href:!0,rel:!0});var tG=r(jl);rP=n(tG,"TensorFloat-32(TF32) on Ampere devices"),tG.forEach(t),pP=n(F3,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),F3.forEach(t),Vw=c(e),zi=l(e,"A",{id:!0}),r(zi).forEach(t),Yw=c(e),Us=l(e,"H3",{class:!0});var B3=r(Us);wa=l(B3,"A",{id:!0,class:!0,href:!0});var aG=r(wa);Um=l(aG,"SPAN",{});var nG=r(Um);d(gl.$$.fragment,nG),nG.forEach(t),aG.forEach(t),iP=c(B3),Lm=l(B3,"SPAN",{});var oG=r(Lm);uP=n(oG,"Automatic Mixed Precision"),oG.forEach(t),B3.forEach(t),Kw=c(e),Ti=l(e,"P",{});var lG=r(Ti);cP=n(lG,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),lG.forEach(t),Jw=c(e),Ai=l(e,"P",{});var rG=r(Ai);hP=n(rG,"To configure pytorch AMP-like mode set:"),rG.forEach(t),Xw=c(e),d(wl.$$.fragment,e),Qw=c(e),Ye=l(e,"P",{});var yc=r(Ye);fP=n(yc,"and the "),Si=l(yc,"A",{href:!0});var pG=r(Si);dP=n(pG,"Trainer"),pG.forEach(t),mP=n(yc,` will automatically enable or disable it based on the value of
`),Zm=l(yc,"CODE",{});var iG=r(Zm);_P=n(iG,"args.fp16_backend"),iG.forEach(t),vP=n(yc,". The rest of config values are up to you."),yc.forEach(t),ey=c(e),ya=l(e,"P",{});var V3=r(ya);jP=n(V3,"This mode gets enabled when "),Gm=l(V3,"CODE",{});var uG=r(Gm);gP=n(uG,"--fp16 --fp16_backend amp"),uG.forEach(t),wP=n(V3," command line args are passed."),V3.forEach(t),sy=c(e),Ci=l(e,"P",{});var cG=r(Ci);yP=n(cG,"You can also enable/disable this mode explicitly:"),cG.forEach(t),ty=c(e),d(yl.$$.fragment,e),ay=c(e),ba=l(e,"P",{});var Y3=r(ba);bP=n(Y3,"But then you\u2019re on your own synchronizing the "),xi=l(Y3,"A",{href:!0});var hG=r(xi);qP=n(hG,"Trainer"),hG.forEach(t),EP=n(Y3,` command line arguments and the DeepSpeed
configuration.`),Y3.forEach(t),ny=c(e),qa=l(e,"P",{});var K3=r(qa);$P=n(K3,"Here is the "),bl=l(K3,"A",{href:!0,rel:!0});var fG=r(bl);kP=n(fG,"documentation"),fG.forEach(t),DP=n(K3,"."),K3.forEach(t),oy=c(e),Ii=l(e,"P",{});var dG=r(Ii);PP=n(dG,"To configure apex AMP-like mode set:"),dG.forEach(t),ly=c(e),d(ql.$$.fragment,e),ry=c(e),ne=l(e,"P",{});var wn=r(ne);OP=n(wn,"and the "),Ri=l(wn,"A",{href:!0});var mG=r(Ri);zP=n(mG,"Trainer"),mG.forEach(t),TP=n(wn," will automatically configure it based on the values of "),Mm=l(wn,"CODE",{});var _G=r(Mm);AP=n(_G,"args.fp16_backend"),_G.forEach(t),SP=n(wn,` and
`),Nm=l(wn,"CODE",{});var vG=r(Nm);CP=n(vG,"args.fp16_opt_level"),vG.forEach(t),xP=n(wn,"."),wn.forEach(t),py=c(e),Ea=l(e,"P",{});var J3=r(Ea);IP=n(J3,"This mode gets enabled when "),Hm=l(J3,"CODE",{});var jG=r(Hm);RP=n(jG,"--fp16 --fp16_backend apex --fp16_opt_level 01"),jG.forEach(t),UP=n(J3," command line args are passed."),J3.forEach(t),iy=c(e),Ui=l(e,"P",{});var gG=r(Ui);LP=n(gG,"You can also configure this mode explicitly:"),gG.forEach(t),uy=c(e),d(El.$$.fragment,e),cy=c(e),$a=l(e,"P",{});var X3=r($a);ZP=n(X3,"But then you\u2019re on your own synchronizing the "),Li=l(X3,"A",{href:!0});var wG=r(Li);GP=n(wG,"Trainer"),wG.forEach(t),MP=n(X3,` command line arguments and the DeepSpeed
configuration.`),X3.forEach(t),hy=c(e),ka=l(e,"P",{});var Q3=r(ka);NP=n(Q3,"Here is the "),$l=l(Q3,"A",{href:!0,rel:!0});var yG=r($l);HP=n(yG,"documentation"),yG.forEach(t),WP=n(Q3,"."),Q3.forEach(t),fy=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),dy=c(e),Ls=l(e,"H3",{class:!0});var eq=r(Ls);Da=l(eq,"A",{id:!0,class:!0,href:!0});var bG=r(Da);Wm=l(bG,"SPAN",{});var qG=r(Wm);d(kl.$$.fragment,qG),qG.forEach(t),bG.forEach(t),FP=c(eq),Fm=l(eq,"SPAN",{});var EG=r(Fm);BP=n(EG,"Batch Size"),EG.forEach(t),eq.forEach(t),my=c(e),Gi=l(e,"P",{});var $G=r(Gi);VP=n($G,"To configure batch size, use:"),$G.forEach(t),_y=c(e),d(Dl.$$.fragment,e),vy=c(e),x=l(e,"P",{});var de=r(x);YP=n(de,"and the "),Mi=l(de,"A",{href:!0});var kG=r(Mi);KP=n(kG,"Trainer"),kG.forEach(t),JP=n(de," will automatically set "),Bm=l(de,"CODE",{});var DG=r(Bm);XP=n(DG,"train_micro_batch_size_per_gpu"),DG.forEach(t),QP=n(de,` to the value of
`),Vm=l(de,"CODE",{});var PG=r(Vm);eO=n(PG,"args.per_device_train_batch_size"),PG.forEach(t),sO=n(de," and "),Ym=l(de,"CODE",{});var OG=r(Ym);tO=n(OG,"train_batch_size"),OG.forEach(t),aO=n(de," to "),Km=l(de,"CODE",{});var zG=r(Km);nO=n(zG,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),zG.forEach(t),oO=n(de,"."),de.forEach(t),jy=c(e),Ni=l(e,"P",{});var TG=r(Ni);lO=n(TG,"You can also set the values explicitly:"),TG.forEach(t),gy=c(e),d(Pl.$$.fragment,e),wy=c(e),Pa=l(e,"P",{});var sq=r(Pa);rO=n(sq,"But then you\u2019re on your own synchronizing the "),Hi=l(sq,"A",{href:!0});var AG=r(Hi);pO=n(AG,"Trainer"),AG.forEach(t),iO=n(sq,` command line arguments and the DeepSpeed
configuration.`),sq.forEach(t),yy=c(e),Wi=l(e,"A",{id:!0}),r(Wi).forEach(t),by=c(e),Zs=l(e,"H3",{class:!0});var tq=r(Zs);Oa=l(tq,"A",{id:!0,class:!0,href:!0});var SG=r(Oa);Jm=l(SG,"SPAN",{});var CG=r(Jm);d(Ol.$$.fragment,CG),CG.forEach(t),SG.forEach(t),uO=c(tq),Xm=l(tq,"SPAN",{});var xG=r(Xm);cO=n(xG,"Gradient Accumulation"),xG.forEach(t),tq.forEach(t),qy=c(e),Fi=l(e,"P",{});var IG=r(Fi);hO=n(IG,"To configure gradient accumulation set:"),IG.forEach(t),Ey=c(e),d(zl.$$.fragment,e),$y=c(e),Ke=l(e,"P",{});var bc=r(Ke);fO=n(bc,"and the "),Bi=l(bc,"A",{href:!0});var RG=r(Bi);dO=n(RG,"Trainer"),RG.forEach(t),mO=n(bc," will automatically set it to the value of "),Qm=l(bc,"CODE",{});var UG=r(Qm);_O=n(UG,"args.gradient_accumulation_steps"),UG.forEach(t),vO=n(bc,"."),bc.forEach(t),ky=c(e),Vi=l(e,"P",{});var LG=r(Vi);jO=n(LG,"You can also set the value explicitly:"),LG.forEach(t),Dy=c(e),d(Tl.$$.fragment,e),Py=c(e),za=l(e,"P",{});var aq=r(za);gO=n(aq,"But then you\u2019re on your own synchronizing the "),Yi=l(aq,"A",{href:!0});var ZG=r(Yi);wO=n(ZG,"Trainer"),ZG.forEach(t),yO=n(aq,` command line arguments and the DeepSpeed
configuration.`),aq.forEach(t),Oy=c(e),Ki=l(e,"A",{id:!0}),r(Ki).forEach(t),zy=c(e),Gs=l(e,"H3",{class:!0});var nq=r(Gs);Ta=l(nq,"A",{id:!0,class:!0,href:!0});var GG=r(Ta);e_=l(GG,"SPAN",{});var MG=r(e_);d(Al.$$.fragment,MG),MG.forEach(t),GG.forEach(t),bO=c(nq),s_=l(nq,"SPAN",{});var NG=r(s_);qO=n(NG,"Gradient Clipping"),NG.forEach(t),nq.forEach(t),Ty=c(e),Ji=l(e,"P",{});var HG=r(Ji);EO=n(HG,"To configure gradient gradient clipping set:"),HG.forEach(t),Ay=c(e),d(Sl.$$.fragment,e),Sy=c(e),Je=l(e,"P",{});var qc=r(Je);$O=n(qc,"and the "),Xi=l(qc,"A",{href:!0});var WG=r(Xi);kO=n(WG,"Trainer"),WG.forEach(t),DO=n(qc," will automatically set it to the value of "),t_=l(qc,"CODE",{});var FG=r(t_);PO=n(FG,"args.max_grad_norm"),FG.forEach(t),OO=n(qc,"."),qc.forEach(t),Cy=c(e),Qi=l(e,"P",{});var BG=r(Qi);zO=n(BG,"You can also set the value explicitly:"),BG.forEach(t),xy=c(e),d(Cl.$$.fragment,e),Iy=c(e),Aa=l(e,"P",{});var oq=r(Aa);TO=n(oq,"But then you\u2019re on your own synchronizing the "),eu=l(oq,"A",{href:!0});var VG=r(eu);AO=n(VG,"Trainer"),VG.forEach(t),SO=n(oq,` command line arguments and the DeepSpeed
configuration.`),oq.forEach(t),Ry=c(e),su=l(e,"A",{id:!0}),r(su).forEach(t),Uy=c(e),Ms=l(e,"H3",{class:!0});var lq=r(Ms);Sa=l(lq,"A",{id:!0,class:!0,href:!0});var YG=r(Sa);a_=l(YG,"SPAN",{});var KG=r(a_);d(xl.$$.fragment,KG),KG.forEach(t),YG.forEach(t),CO=c(lq),n_=l(lq,"SPAN",{});var JG=r(n_);xO=n(JG,"Getting The Model Weights Out"),JG.forEach(t),lq.forEach(t),Ly=c(e),Ca=l(e,"P",{});var rq=r(Ca);IO=n(rq,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),o_=l(rq,"CODE",{});var XG=r(o_);RO=n(XG,"global_step*/*optim_states.pt"),XG.forEach(t),UO=n(rq,` (this is glob
pattern), and are saved under the normal checkpoint.`),rq.forEach(t),Zy=c(e),tu=l(e,"P",{});var QG=r(tu);l_=l(QG,"STRONG",{});var eM=r(l_);LO=n(eM,"FP16 Weights:"),eM.forEach(t),QG.forEach(t),Gy=c(e),xa=l(e,"P",{});var pq=r(xa);ZO=n(pq,"When a model is saved under ZeRO-2, you end up having the normal "),r_=l(pq,"CODE",{});var sM=r(r_);GO=n(sM,"pytorch_model.bin"),sM.forEach(t),MO=n(pq,` file with the model weights, but
they are only the fp16 version of the weights.`),pq.forEach(t),My=c(e),H=l(e,"P",{});var us=r(H);NO=n(us,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),p_=l(us,"CODE",{});var tM=r(p_);HO=n(tM,'"stage3_gather_fp16_weights_on_model_save": true'),tM.forEach(t),WO=n(us," is required to get the "),i_=l(us,"CODE",{});var aM=r(i_);FO=n(aM,"Trainer"),aM.forEach(t),BO=n(us,` to save the fp16
version of the weights. If this setting is `),u_=l(us,"CODE",{});var nM=r(u_);VO=n(nM,"False"),nM.forEach(t),YO=c(us),c_=l(us,"CODE",{});var oM=r(c_);KO=n(oM,"pytorch_model.bin` won't be created. This is because by default DeepSpeed's `state_dict` contains a placeholder and not the real weights. If we were to save this `state_dict"),oM.forEach(t),JO=n(us,` it
won\u2019t be possible to load it back.`),us.forEach(t),Ny=c(e),d(Il.$$.fragment,e),Hy=c(e),au=l(e,"P",{});var lM=r(au);h_=l(lM,"STRONG",{});var rM=r(h_);XO=n(rM,"FP32 Weights:"),rM.forEach(t),lM.forEach(t),Wy=c(e),Ia=l(e,"P",{});var iq=r(Ia);QO=n(iq,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),Rl=l(iq,"A",{href:!0,rel:!0});var pM=r(Rl);ez=n(pM,"models hub"),pM.forEach(t),sz=n(iq,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),iq.forEach(t),Fy=c(e),nu=l(e,"P",{});var iM=r(nu);f_=l(iM,"STRONG",{});var uM=r(f_);tz=n(uM,"Live FP32 Weights Recovery:"),uM.forEach(t),iM.forEach(t),By=c(e),ou=l(e,"P",{});var cM=r(ou);az=n(cM,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),cM.forEach(t),Vy=c(e),lu=l(e,"P",{});var hM=r(lu);nz=n(hM,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),hM.forEach(t),Yy=c(e),d(Ul.$$.fragment,e),Ky=c(e),Xe=l(e,"P",{});var Ec=r(Xe);oz=n(Ec,"If you\u2019re using the "),d_=l(Ec,"CODE",{});var fM=r(d_);lz=n(fM,"--load_best_model_at_end"),fM.forEach(t),rz=n(Ec," class:"),m_=l(Ec,"EM",{});var dM=r(m_);pz=n(dM,"~transformers.TrainingArguments"),dM.forEach(t),iz=n(Ec,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Ec.forEach(t),Jy=c(e),d(Ll.$$.fragment,e),Xy=c(e),d(Ra.$$.fragment,e),Qy=c(e),Ua=l(e,"P",{});var uq=r(Ua);uz=n(uq,"Of course, you don\u2019t have to use class:"),__=l(uq,"EM",{});var mM=r(__);cz=n(mM,"~transformers.Trainer"),mM.forEach(t),hz=n(uq,` and you can adjust the examples above to your own
trainer.`),uq.forEach(t),e2=c(e),La=l(e,"P",{});var cq=r(La);fz=n(cq,"If for some reason you want more refinement, you can also extract the fp32 "),v_=l(cq,"CODE",{});var _M=r(v_);dz=n(_M,"state_dict"),_M.forEach(t),mz=n(cq,` of the weights and apply
these yourself as is shown in the following example:`),cq.forEach(t),s2=c(e),d(Zl.$$.fragment,e),t2=c(e),ru=l(e,"P",{});var vM=r(ru);j_=l(vM,"STRONG",{});var jM=r(j_);_z=n(jM,"Offline FP32 Weights Recovery:"),jM.forEach(t),vM.forEach(t),a2=c(e),Qe=l(e,"P",{});var $c=r(Qe);vz=n($c,"DeepSpeed creates a special conversion script "),g_=l($c,"CODE",{});var gM=r(g_);jz=n(gM,"zero_to_fp32.py"),gM.forEach(t),gz=n($c,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),w_=l($c,"CODE",{});var wM=r(w_);wz=n(wM,"Trainer"),wM.forEach(t),yz=n($c," to do the extraction."),$c.forEach(t),n2=c(e),pu=l(e,"P",{});var yM=r(pu);bz=n(yM,"Let\u2019s say your checkpoint folder looks like this:"),yM.forEach(t),o2=c(e),d(Gl.$$.fragment,e),l2=c(e),Za=l(e,"P",{});var hq=r(Za);qz=n(hq,"In this example there is just one DeepSpeed checkpoint sub-folder "),y_=l(hq,"EM",{});var bM=r(y_);Ez=n(bM,"global_step1"),bM.forEach(t),$z=n(hq,`. Therefore to reconstruct the fp32
weights just run:`),hq.forEach(t),r2=c(e),d(Ml.$$.fragment,e),p2=c(e),Ga=l(e,"P",{});var fq=r(Ga);kz=n(fq,"This is it. "),b_=l(fq,"CODE",{});var qM=r(b_);Dz=n(qM,"pytorch_model.bin"),qM.forEach(t),Pz=n(fq," will now contain the full fp32 model weights consolidated from multiple GPUs."),fq.forEach(t),i2=c(e),iu=l(e,"P",{});var EM=r(iu);Oz=n(EM,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),EM.forEach(t),u2=c(e),Nl=l(e,"P",{});var NC=r(Nl);q_=l(NC,"CODE",{});var $M=r(q_);zz=n($M,"python zero_to_fp32.py -h"),$M.forEach(t),Tz=n(NC," will give you usage details."),NC.forEach(t),c2=c(e),es=l(e,"P",{});var kc=r(es);Az=n(kc,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),E_=l(kc,"CODE",{});var kM=r(E_);Sz=n(kM,"latest"),kM.forEach(t),Cz=n(kc,`, which in the current
example will contain `),$_=l(kc,"CODE",{});var DM=r($_);xz=n(DM,"global_step1"),DM.forEach(t),Iz=n(kc,"."),kc.forEach(t),h2=c(e),uu=l(e,"P",{});var PM=r(uu);Rz=n(PM,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),PM.forEach(t),f2=c(e),Ns=l(e,"H3",{class:!0});var dq=r(Ns);Ma=l(dq,"A",{id:!0,class:!0,href:!0});var OM=r(Ma);k_=l(OM,"SPAN",{});var zM=r(k_);d(Hl.$$.fragment,zM),zM.forEach(t),OM.forEach(t),Uz=c(dq),D_=l(dq,"SPAN",{});var TM=r(D_);Lz=n(TM,"ZeRO-3 and Infinity Nuances"),TM.forEach(t),dq.forEach(t),d2=c(e),cu=l(e,"P",{});var AM=r(cu);Zz=n(AM,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),AM.forEach(t),m2=c(e),hu=l(e,"P",{});var SM=r(hu);Gz=n(SM,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),SM.forEach(t),_2=c(e),fu=l(e,"P",{});var CM=r(fu);Mz=n(CM,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),CM.forEach(t),v2=c(e),Hs=l(e,"H4",{class:!0});var mq=r(Hs);Na=l(mq,"A",{id:!0,class:!0,href:!0});var xM=r(Na);P_=l(xM,"SPAN",{});var IM=r(P_);d(Wl.$$.fragment,IM),IM.forEach(t),xM.forEach(t),Nz=c(mq),O_=l(mq,"SPAN",{});var RM=r(O_);Hz=n(RM,"Constructing Massive Models"),RM.forEach(t),mq.forEach(t),j2=c(e),Ha=l(e,"P",{});var _q=r(Ha);Wz=n(_q,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),z_=l(_q,"EM",{});var UM=r(z_);Fz=n(UM,"deepspeed.zero.Init()"),UM.forEach(t),Bz=n(_q,`
context manager (which is also a function decorator), like so:`),_q.forEach(t),g2=c(e),d(Fl.$$.fragment,e),w2=c(e),du=l(e,"P",{});var LM=r(du);Vz=n(LM,"As you can see this gives you a randomly initialized model."),LM.forEach(t),y2=c(e),k=l(e,"P",{});var R=r(k);Yz=n(R,"If you want to use a pretrained model, "),T_=l(R,"CODE",{});var ZM=r(T_);Kz=n(ZM,"model_class.from_pretrained"),ZM.forEach(t),Jz=n(R,` will activate this feature as long as
`),A_=l(R,"CODE",{});var GM=r(A_);Xz=n(GM,"is_deepspeed_zero3_enabled()"),GM.forEach(t),Qz=n(R," returns "),S_=l(R,"CODE",{});var MM=r(S_);eT=n(MM,"True"),MM.forEach(t),sT=n(R,`, which currently is setup by the
`),mu=l(R,"A",{href:!0});var NM=r(mu);tT=n(NM,"TrainingArguments"),NM.forEach(t),aT=n(R,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),_u=l(R,"A",{href:!0});var HM=r(_u);nT=n(HM,"TrainingArguments"),HM.forEach(t),oT=n(R," object "),C_=l(R,"STRONG",{});var WM=r(C_);lT=n(WM,"before"),WM.forEach(t),rT=n(R,` calling
`),x_=l(R,"CODE",{});var FM=r(x_);pT=n(FM,"from_pretrained"),FM.forEach(t),iT=n(R,". Here is an example of a possible sequence:"),R.forEach(t),b2=c(e),d(Bl.$$.fragment,e),q2=c(e),Wa=l(e,"P",{});var vq=r(Wa);uT=n(vq,"If you\u2019re using the official example scripts and your command line arguments include "),I_=l(vq,"CODE",{});var BM=r(I_);cT=n(BM,"--deepspeed ds_config.json"),BM.forEach(t),hT=n(vq,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),vq.forEach(t),E2=c(e),vu=l(e,"P",{});var VM=r(vu);fT=n(VM,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),VM.forEach(t),$2=c(e),Fa=l(e,"P",{});var jq=r(Fa);dT=n(jq,"For full details on this method and other related features please refer to "),Vl=l(jq,"A",{href:!0,rel:!0});var YM=r(Vl);mT=n(YM,"Constructing Massive Models"),YM.forEach(t),_T=n(jq,"."),jq.forEach(t),k2=c(e),oe=l(e,"P",{});var yn=r(oe);vT=n(yn,"Also when loading fp16-pretrained models, you will want to tell "),R_=l(yn,"CODE",{});var KM=r(R_);jT=n(KM,"from_pretrained"),KM.forEach(t),gT=n(yn,` to use
`),U_=l(yn,"CODE",{});var JM=r(U_);wT=n(JM,"torch_dtype=torch.float16"),JM.forEach(t),yT=n(yn,". For details, please, see "),ju=l(yn,"A",{href:!0});var XM=r(ju);bT=n(XM,"from_pretrained-torch-dtype"),XM.forEach(t),qT=n(yn,"."),yn.forEach(t),D2=c(e),Ws=l(e,"H4",{class:!0});var gq=r(Ws);Ba=l(gq,"A",{id:!0,class:!0,href:!0});var QM=r(Ba);L_=l(QM,"SPAN",{});var eN=r(L_);d(Yl.$$.fragment,eN),eN.forEach(t),QM.forEach(t),ET=c(gq),Z_=l(gq,"SPAN",{});var sN=r(Z_);$T=n(sN,"Gathering Parameters"),sN.forEach(t),gq.forEach(t),P2=c(e),Kl=l(e,"P",{});var HC=r(Kl);kT=n(HC,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Jl=l(HC,"A",{href:!0,rel:!0});var tN=r(Jl);DT=n(tN,"Gathering Parameters"),tN.forEach(t),HC.forEach(t),O2=c(e),Va=l(e,"P",{});var wq=r(Va);PT=n(wq,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),G_=l(wq,"CODE",{});var aN=r(G_);OT=n(aN,"from_pretrained"),aN.forEach(t),zT=n(wq,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),wq.forEach(t),z2=c(e),gu=l(e,"P",{});var nN=r(gu);TT=n(nN,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),nN.forEach(t),T2=c(e),d(Xl.$$.fragment,e),A2=c(e),ss=l(e,"P",{});var Dc=r(ss);AT=n(Dc,"stress on "),M_=l(Dc,"CODE",{});var oN=r(M_);ST=n(oN,"tensor([1.])"),oN.forEach(t),CT=n(Dc,", or if you get an error where it says the parameter is of size "),N_=l(Dc,"CODE",{});var lN=r(N_);xT=n(lN,"1"),lN.forEach(t),IT=n(Dc,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Dc.forEach(t),S2=c(e),wu=l(e,"A",{id:!0}),r(wu).forEach(t),C2=c(e),Fs=l(e,"H3",{class:!0});var yq=r(Fs);Ya=l(yq,"A",{id:!0,class:!0,href:!0});var rN=r(Ya);H_=l(rN,"SPAN",{});var pN=r(H_);d(Ql.$$.fragment,pN),pN.forEach(t),rN.forEach(t),RT=c(yq),W_=l(yq,"SPAN",{});var iN=r(W_);UT=n(iN,"ZeRO Inference"),iN.forEach(t),yq.forEach(t),x2=c(e),yu=l(e,"P",{});var uN=r(yu);LT=n(uN,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),uN.forEach(t),I2=c(e),Ka=l(e,"P",{});var bq=r(Ka);ZT=n(bq,"Otherwise you just need to pass the usual "),bu=l(bq,"A",{href:!0});var cN=r(bu);GT=n(cN,"TrainingArguments"),cN.forEach(t),MT=n(bq," arguments. For example:"),bq.forEach(t),R2=c(e),d(er.$$.fragment,e),U2=c(e),qu=l(e,"P",{});var hN=r(qu);NT=n(hN,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),hN.forEach(t),L2=c(e),Ja=l(e,"P",{});var qq=r(Ja);HT=n(qq,"Here is an example of running "),F_=l(qq,"CODE",{});var fN=r(F_);WT=n(fN,"run_translation.py"),fN.forEach(t),FT=n(qq," under DeepSpeed deploying all available GPUs:"),qq.forEach(t),Z2=c(e),d(sr.$$.fragment,e),G2=c(e),Eu=l(e,"P",{});var dN=r(Eu);BT=n(dN,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),dN.forEach(t),M2=c(e),$u=l(e,"P",{});var mN=r($u);VT=n(mN,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),mN.forEach(t),N2=c(e),Bs=l(e,"H3",{class:!0});var Eq=r(Bs);Xa=l(Eq,"A",{id:!0,class:!0,href:!0});var _N=r(Xa);B_=l(_N,"SPAN",{});var vN=r(B_);d(tr.$$.fragment,vN),vN.forEach(t),_N.forEach(t),YT=c(Eq),V_=l(Eq,"SPAN",{});var jN=r(V_);KT=n(jN,"Filing Issues"),jN.forEach(t),Eq.forEach(t),H2=c(e),ku=l(e,"P",{});var gN=r(ku);JT=n(gN,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),gN.forEach(t),W2=c(e),Du=l(e,"P",{});var wN=r(Du);XT=n(wN,"In your report please always include:"),wN.forEach(t),F2=c(e),I=l(e,"OL",{});var me=r(I);Y_=l(me,"LI",{});var yN=r(Y_);K_=l(yN,"P",{});var bN=r(K_);QT=n(bN,"the full Deepspeed config file in the report"),bN.forEach(t),yN.forEach(t),eA=c(me),J_=l(me,"LI",{});var qN=r(J_);we=l(qN,"P",{});var bn=r(we);sA=n(bn,"either the command line arguments if you were using the "),Pu=l(bn,"A",{href:!0});var EN=r(Pu);tA=n(EN,"Trainer"),EN.forEach(t),aA=n(bn,` or
`),Ou=l(bn,"A",{href:!0});var $N=r(Ou);nA=n($N,"TrainingArguments"),$N.forEach(t),oA=n(bn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),zu=l(bn,"A",{href:!0});var kN=r(zu);lA=n(kN,"TrainingArguments"),kN.forEach(t),rA=n(bn," as it has dozens of entries that are irrelevant."),bn.forEach(t),qN.forEach(t),pA=c(me),ar=l(me,"LI",{});var $q=r(ar);X_=l($q,"P",{});var DN=r(X_);iA=n(DN,"Output of:"),DN.forEach(t),uA=c($q),d(nr.$$.fragment,$q),$q.forEach(t),cA=c(me),Q_=l(me,"LI",{});var PN=r(Q_);or=l(PN,"P",{});var kq=r(or);hA=n(kq,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),lr=l(kq,"A",{href:!0,rel:!0});var ON=r(lr);fA=n(ON,"notebook"),ON.forEach(t),dA=n(kq,` as
a starting point.`),kq.forEach(t),PN.forEach(t),mA=c(me),e1=l(me,"LI",{});var zN=r(e1);s1=l(zN,"P",{});var TN=r(s1);_A=n(TN,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),TN.forEach(t),zN.forEach(t),vA=c(me),t1=l(me,"LI",{});var AN=r(t1);rr=l(AN,"P",{});var Dq=r(rr);jA=n(Dq,"If possible try to use one of the existing "),pr=l(Dq,"A",{href:!0,rel:!0});var SN=r(pr);gA=n(SN,"examples"),SN.forEach(t),wA=n(Dq," to reproduce the problem with."),Dq.forEach(t),AN.forEach(t),me.forEach(t),B2=c(e),Tu=l(e,"P",{});var CN=r(Tu);yA=n(CN,"Things to consider:"),CN.forEach(t),V2=c(e),Qa=l(e,"UL",{});var Pq=r(Qa);Vs=l(Pq,"LI",{});var Pc=r(Vs);a1=l(Pc,"P",{});var xN=r(a1);bA=n(xN,"Deepspeed is often not the cause of the problem."),xN.forEach(t),qA=c(Pc),n1=l(Pc,"P",{});var IN=r(n1);EA=n(IN,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),IN.forEach(t),$A=c(Pc),o1=l(Pc,"P",{});var RN=r(o1);kA=n(RN,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),RN.forEach(t),Pc.forEach(t),DA=c(Pq),l1=l(Pq,"LI",{});var UN=r(l1);ir=l(UN,"P",{});var Oq=r(ir);PA=n(Oq,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),ur=l(Oq,"A",{href:!0,rel:!0});var LN=r(ur);OA=n(LN,"Deepspeed"),LN.forEach(t),zA=n(Oq,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),Oq.forEach(t),UN.forEach(t),Pq.forEach(t),Y2=c(e),Ys=l(e,"H3",{class:!0});var zq=r(Ys);en=l(zq,"A",{id:!0,class:!0,href:!0});var ZN=r(en);r1=l(ZN,"SPAN",{});var GN=r(r1);d(cr.$$.fragment,GN),GN.forEach(t),ZN.forEach(t),TA=c(zq),p1=l(zq,"SPAN",{});var MN=r(p1);AA=n(MN,"Troubleshooting"),MN.forEach(t),zq.forEach(t),K2=c(e),Au=l(e,"UL",{});var NN=r(Au);Su=l(NN,"LI",{});var WC=r(Su);i1=l(WC,"CODE",{});var HN=r(i1);SA=n(HN,"deepspeed"),HN.forEach(t),CA=n(WC," process gets killed at startup without a traceback"),WC.forEach(t),NN.forEach(t),J2=c(e),W=l(e,"P",{});var cs=r(W);xA=n(cs,"If the "),u1=l(cs,"CODE",{});var WN=r(u1);IA=n(WN,"deepspeed"),WN.forEach(t),RA=n(cs,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),c1=l(cs,"CODE",{});var FN=r(c1);UA=n(FN,"offload_optimizer"),FN.forEach(t),LA=n(cs," or "),h1=l(cs,"CODE",{});var BN=r(h1);ZA=n(BN,"offload_param"),BN.forEach(t),GA=n(cs,` or
both configured to offload to `),f1=l(cs,"CODE",{});var VN=r(f1);MA=n(VN,"cpu"),VN.forEach(t),NA=n(cs,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3.`),cs.forEach(t),X2=c(e),sn=l(e,"P",{});var Tq=r(sn);HA=n(Tq,"Work is being done to enable estimating how much memory is needed for a specific model: "),hr=l(Tq,"A",{href:!0,rel:!0});var YN=r(hr);WA=n(YN,"PR"),YN.forEach(t),FA=n(Tq,"."),Tq.forEach(t),Q2=c(e),Ks=l(e,"H3",{class:!0});var Aq=r(Ks);tn=l(Aq,"A",{id:!0,class:!0,href:!0});var KN=r(tn);d1=l(KN,"SPAN",{});var JN=r(d1);d(fr.$$.fragment,JN),JN.forEach(t),KN.forEach(t),BA=c(Aq),m1=l(Aq,"SPAN",{});var XN=r(m1);VA=n(XN,"Notes"),XN.forEach(t),Aq.forEach(t),eb=c(e),ts=l(e,"UL",{});var Oc=r(ts);an=l(Oc,"LI",{});var V1=r(an);YA=n(V1,"DeepSpeed works with the PyTorch "),Cu=l(V1,"A",{href:!0});var QN=r(Cu);KA=n(QN,"Trainer"),QN.forEach(t),JA=n(V1," but not TF "),_1=l(V1,"CODE",{});var eH=r(_1);XA=n(eH,"TFTrainer"),eH.forEach(t),V1.forEach(t),QA=c(Oc),dr=l(Oc,"LI",{});var Sq=r(dr);eS=n(Sq,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),mr=l(Sq,"A",{href:!0,rel:!0});var sH=r(mr);sS=n(sH,"source"),sH.forEach(t),tS=n(Sq,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),Sq.forEach(t),aS=c(Oc),Js=l(Oc,"LI",{});var zc=r(Js);nS=n(zc,"You don\u2019t have to use the "),xu=l(zc,"A",{href:!0});var tH=r(xu);oS=n(tH,"Trainer"),tH.forEach(t),lS=n(zc,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),_r=l(zc,"A",{href:!0,rel:!0});var aH=r(_r);rS=n(aH,"the DeepSpeed integration instructions"),aH.forEach(t),pS=n(zc,"."),zc.forEach(t),Oc.forEach(t),sb=c(e),Iu=l(e,"A",{id:!0}),r(Iu).forEach(t),tb=c(e),Xs=l(e,"H2",{class:!0});var Cq=r(Xs);nn=l(Cq,"A",{id:!0,class:!0,href:!0});var nH=r(nn);v1=l(nH,"SPAN",{});var oH=r(v1);d(vr.$$.fragment,oH),oH.forEach(t),nH.forEach(t),iS=c(Cq),j1=l(Cq,"SPAN",{});var lH=r(j1);uS=n(lH,"Non-Trainer Deepspeed Integration"),lH.forEach(t),Cq.forEach(t),ab=c(e),as=l(e,"P",{});var Tc=r(as);cS=n(Tc,"The "),Ru=l(Tc,"A",{href:!0});var rH=r(Ru);hS=n(rH,"HfDeepSpeedConfig"),rH.forEach(t),fS=n(Tc,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Uu=l(Tc,"A",{href:!0});var pH=r(Uu);dS=n(pH,"Trainer"),pH.forEach(t),mS=n(Tc," is not used."),Tc.forEach(t),nb=c(e),on=l(e,"P",{});var xq=r(on);_S=n(xq,"When using "),Lu=l(xq,"A",{href:!0});var iH=r(Lu);vS=n(iH,"Trainer"),iH.forEach(t),jS=n(xq," everything is automatically taken care of."),xq.forEach(t),ob=c(e),ns=l(e,"P",{});var Ac=r(ns);gS=n(Ac,"When not using "),Zu=l(Ac,"A",{href:!0});var uH=r(Zu);wS=n(uH,"Trainer"),uH.forEach(t),yS=n(Ac,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Gu=l(Ac,"A",{href:!0});var cH=r(Gu);bS=n(cH,"HfDeepSpeedConfig"),cH.forEach(t),qS=n(Ac," object before instantiating the model."),Ac.forEach(t),lb=c(e),Mu=l(e,"P",{});var hH=r(Mu);ES=n(hH,"For example for a pretrained model:"),hH.forEach(t),rb=c(e),d(jr.$$.fragment,e),pb=c(e),Nu=l(e,"P",{});var fH=r(Nu);$S=n(fH,"or for non-pretrained model:"),fH.forEach(t),ib=c(e),d(gr.$$.fragment,e),ub=c(e),Qs=l(e,"H2",{class:!0});var Iq=r(Qs);ln=l(Iq,"A",{id:!0,class:!0,href:!0});var dH=r(ln);g1=l(dH,"SPAN",{});var mH=r(g1);d(wr.$$.fragment,mH),mH.forEach(t),dH.forEach(t),kS=c(Iq),w1=l(Iq,"SPAN",{});var _H=r(w1);DS=n(_H,"HfDeepSpeedConfig"),_H.forEach(t),Iq.forEach(t),cb=c(e),E=l(e,"DIV",{class:!0});var U=r(E);d(yr.$$.fragment,U),PS=c(U),y1=l(U,"P",{});var vH=r(y1);OS=n(vH,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),vH.forEach(t),zS=c(U),ye=l(U,"P",{});var qn=r(ye);TS=n(qn,"A "),b1=l(qn,"CODE",{});var jH=r(b1);AS=n(jH,"weakref"),jH.forEach(t),SS=n(qn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),q1=l(qn,"CODE",{});var gH=r(q1);CS=n(gH,"from_pretrained"),gH.forEach(t),xS=n(qn," and "),E1=l(qn,"CODE",{});var wH=r(E1);IS=n(wH,"_get_resized_embeddings"),wH.forEach(t),RS=n(qn,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),qn.forEach(t),US=c(U),le=l(U,"P",{});var nt=r(le);Hu=l(nt,"A",{href:!0});var yH=r(Hu);LS=n(yH,"Trainer"),yH.forEach(t),ZS=n(nt," uses the "),$1=l(nt,"CODE",{});var bH=r($1);GS=n(bH,"HfTrainerDeepSpeedConfig"),bH.forEach(t),MS=n(nt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Wu=l(nt,"A",{href:!0});var qH=r(Wu);NS=n(qH,"TrainingArguments"),qH.forEach(t),HS=n(nt," by replacing special placeholder values: "),k1=l(nt,"CODE",{});var EH=r(k1);WS=n(EH,'"auto"'),EH.forEach(t),FS=n(nt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),nt.forEach(t),BS=c(U),os=l(U,"DIV",{class:!0});var Sc=r(os);d(br.$$.fragment,Sc),VS=c(Sc),D1=l(Sc,"P",{});var $H=r(D1);YS=n($H,"Deletes a sub-section of the config file if it\u2019s found."),$H.forEach(t),KS=c(Sc),et=l(Sc,"P",{});var Cc=r(et);JS=n(Cc,"Unless "),P1=l(Cc,"CODE",{});var kH=r(P1);XS=n(kH,"must_exist"),kH.forEach(t),QS=n(Cc," is "),O1=l(Cc,"CODE",{});var DH=r(O1);eC=n(DH,"True"),DH.forEach(t),sC=n(Cc," the section doesn\u2019t have to exist."),Cc.forEach(t),Sc.forEach(t),tC=c(U),rn=l(U,"DIV",{class:!0});var Rq=r(rn);d(qr.$$.fragment,Rq),aC=c(Rq),Er=l(Rq,"P",{});var Uq=r(Er);nC=n(Uq,"Returns the set value or "),z1=l(Uq,"CODE",{});var PH=r(z1);oC=n(PH,"default"),PH.forEach(t),lC=n(Uq," if no value is set"),Uq.forEach(t),Rq.forEach(t),rC=c(U),pn=l(U,"DIV",{class:!0});var Lq=r(pn);d($r.$$.fragment,Lq),pC=c(Lq),st=l(Lq,"P",{});var xc=r(st);iC=n(xc,"Returns "),T1=l(xc,"CODE",{});var OH=r(T1);uC=n(OH,"True"),OH.forEach(t),cC=n(xc,"/"),A1=l(xc,"CODE",{});var zH=r(A1);hC=n(zH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),zH.forEach(t),fC=n(xc," or isn\u2019t set)."),xc.forEach(t),Lq.forEach(t),dC=c(U),un=l(U,"DIV",{class:!0});var Zq=r(un);d(kr.$$.fragment,Zq),mC=c(Zq),tt=l(Zq,"P",{});var Ic=r(tt);_C=n(Ic,"Returns "),S1=l(Ic,"CODE",{});var TH=r(S1);vC=n(TH,"True"),TH.forEach(t),jC=n(Ic,"/"),C1=l(Ic,"CODE",{});var AH=r(C1);gC=n(AH,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),AH.forEach(t),wC=n(Ic," or isn\u2019t set)."),Ic.forEach(t),Zq.forEach(t),U.forEach(t),hb=c(e),at=l(e,"H2",{class:!0});var Gq=r(at);cn=l(Gq,"A",{id:!0,class:!0,href:!0});var SH=r(cn);x1=l(SH,"SPAN",{});var CH=r(x1);d(Dr.$$.fragment,CH),CH.forEach(t),SH.forEach(t),yC=c(Gq),I1=l(Gq,"SPAN",{});var xH=r(I1);bC=n(xH,"Main DeepSpeed Resources"),xH.forEach(t),Gq.forEach(t),fb=c(e),re=l(e,"UL",{});var En=r(re);R1=l(En,"LI",{});var IH=r(R1);Pr=l(IH,"A",{href:!0,rel:!0});var RH=r(Pr);qC=n(RH,"Project\u2019s github"),RH.forEach(t),IH.forEach(t),EC=c(En),U1=l(En,"LI",{});var UH=r(U1);Or=l(UH,"A",{href:!0,rel:!0});var LH=r(Or);$C=n(LH,"Usage docs"),LH.forEach(t),UH.forEach(t),kC=c(En),L1=l(En,"LI",{});var ZH=r(L1);zr=l(ZH,"A",{href:!0,rel:!0});var GH=r(zr);DC=n(GH,"API docs"),GH.forEach(t),ZH.forEach(t),PC=c(En),Z1=l(En,"LI",{});var MH=r(Z1);Tr=l(MH,"A",{href:!0,rel:!0});var NH=r(Tr);OC=n(NH,"Blog posts"),NH.forEach(t),MH.forEach(t),En.forEach(t),db=c(e),Fu=l(e,"P",{});var HH=r(Fu);zC=n(HH,"Papers:"),HH.forEach(t),mb=c(e),ls=l(e,"UL",{});var Rc=r(ls);G1=l(Rc,"LI",{});var WH=r(G1);Ar=l(WH,"A",{href:!0,rel:!0});var FH=r(Ar);TC=n(FH,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),FH.forEach(t),WH.forEach(t),AC=c(Rc),M1=l(Rc,"LI",{});var BH=r(M1);Sr=l(BH,"A",{href:!0,rel:!0});var VH=r(Sr);SC=n(VH,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),VH.forEach(t),BH.forEach(t),CC=c(Rc),N1=l(Rc,"LI",{});var YH=r(N1);Cr=l(YH,"A",{href:!0,rel:!0});var KH=r(Cr);xC=n(KH,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),KH.forEach(t),YH.forEach(t),Rc.forEach(t),_b=c(e),rs=l(e,"P",{});var Uc=r(rs);IC=n(Uc,"Finally, please, remember that, HuggingFace "),Bu=l(Uc,"A",{href:!0});var JH=r(Bu);RC=n(JH,"Trainer"),JH.forEach(t),UC=n(Uc,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),xr=l(Uc,"A",{href:!0,rel:!0});var XH=r(xr);LC=n(XH,"DeepSpeed GitHub"),XH.forEach(t),ZC=n(Uc,"."),Uc.forEach(t),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(rW)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(Y,"href","https://github.com/microsoft/DeepSpeed"),h(Y,"rel","nofollow"),h(be,"href","https://arxiv.org/abs/1910.02054"),h(be,"rel","nofollow"),h(Dn,"href","https://arxiv.org/abs/2101.06840"),h(Dn,"rel","nofollow"),h(Pn,"href","https://arxiv.org/abs/2104.07857"),h(Pn,"rel","nofollow"),h(On,"href","https://github.com/microsoft/DeepSpeed"),h(On,"rel","nofollow"),h(Br,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Vr,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Yr,"href","#deepspeed-non-trainer-integration"),h(sp,"href","#deepspeed-zero-inference"),h(ap,"id","deepspeed-trainer-integration"),h(pt,"id","trainer-deepspeed-integration"),h(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pt,"href","#trainer-deepspeed-integration"),h(ms,"class","relative group"),h(np,"id","deepspeed-installation"),h(it,"id","installation"),h(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(it,"href","#installation"),h(_s,"class","relative group"),h(In,"href","https://github.com/microsoft/deepspeed#installation"),h(In,"rel","nofollow"),h(Rn,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(Rn,"rel","nofollow"),h(lp,"href","#zero-install-notes"),h(Gn,"href","https://developer.nvidia.com/cuda-gpus"),h(Gn,"rel","nofollow"),h(Wn,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Wn,"rel","nofollow"),h(fp,"id","deepspeed-multi-gpu"),h(_t,"id","deployment-with-multiple-gpus"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#deployment-with-multiple-gpus"),h(vs,"class","relative group"),h(dp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Bn,"href","https://www.deepspeed.ai/docs/config-json/"),h(Bn,"rel","nofollow"),h(Kn,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Kn,"rel","nofollow"),h(Xn,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(Xn,"rel","nofollow"),h(vp,"id","deepspeed-one-gpu"),h(bt,"id","deployment-with-one-gpu"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#deployment-with-one-gpu"),h(gs,"class","relative group"),h(jp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(so,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(so,"rel","nofollow"),h(ao,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(ao,"rel","nofollow"),h($p,"id","deepspeed-notebook"),h(kt,"id","deployment-in-notebooks"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#deployment-in-notebooks"),h(ys,"class","relative group"),h(zp,"id","deepspeed-config"),h(Tt,"id","configuration"),h(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tt,"href","#configuration"),h(bs,"class","relative group"),h(ho,"href","https://www.deepspeed.ai/docs/config-json/"),h(ho,"rel","nofollow"),h(fo,"href","https://github.com/microsoft/DeepSpeedExamples"),h(fo,"rel","nofollow"),h(vo,"href","https://github.com/microsoft/DeepSpeed"),h(vo,"rel","nofollow"),h(Ap,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Sp,"id","deepspeed-config-passing"),h(Rt,"id","passing-configuration"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#passing-configuration"),h(qs,"class","relative group"),h(Cp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(xp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Ip,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Lp,"id","deepspeed-config-shared"),h(Ut,"id","shared-configuration"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#shared-configuration"),h(Es,"class","relative group"),h(Zp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Gp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Np,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Wp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Fp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Bp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Vp,"id","deepspeed-zero"),h(Nt,"id","zero"),h(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Nt,"href","#zero"),h($s,"class","relative group"),h(ko,"href","https://www.deepspeed.ai/tutorials/zero/"),h(ko,"rel","nofollow"),h(Do,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Do,"rel","nofollow"),h(Yp,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Jp,"id","deepspeed-zero2-config"),h(Wt,"id","zero2-config"),h(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wt,"href","#zero2-config"),h(ks,"class","relative group"),h(ei,"id","deepspeed-zero3-config"),h(Ft,"id","zero3-config"),h(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ft,"href","#zero3-config"),h(Ps,"class","relative group"),h(ni,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(li,"id","deepspeed-nvme"),h(Yt,"id","nvme-support"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#nvme-support"),h(Os,"class","relative group"),h(No,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(No,"rel","nofollow"),h(Ho,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(Ho,"rel","nofollow"),h(Wo,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(Wo,"rel","nofollow"),h(ii,"id","deepspeed-zero2-zero3-performance"),h(Xt,"id","zero2-vs-zero3-performance"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#zero2-vs-zero3-performance"),h(zs,"class","relative group"),h(hi,"id","deepspeed-zero2-example"),h(ea,"id","zero2-example"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#zero2-example"),h(As,"class","relative group"),h(fi,"id","deepspeed-zero3-example"),h(aa,"id","zero3-example"),h(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(aa,"href","#zero3-example"),h(Ss,"class","relative group"),h(la,"id","optimizer-and-scheduler"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#optimizer-and-scheduler"),h(Cs,"class","relative group"),h(mi,"id","deepspeed-optimizer"),h(ia,"id","optimizer"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#optimizer"),h(xs,"class","relative group"),h(tl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(tl,"rel","nofollow"),h(_i,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(wi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(bi,"id","deepspeed-scheduler"),h(ca,"id","scheduler"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#scheduler"),h(Is,"class","relative group"),h(cl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(cl,"rel","nofollow"),h(Ei,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h($i,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Di,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Pi,"id","deepspeed-fp32"),h(va,"id","fp32-precision"),h(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(va,"href","#fp32-precision"),h(Rs,"class","relative group"),h(jl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(jl,"rel","nofollow"),h(zi,"id","deepspeed-amp"),h(wa,"id","automatic-mixed-precision"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#automatic-mixed-precision"),h(Us,"class","relative group"),h(Si,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(xi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(bl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(bl,"rel","nofollow"),h(Ri,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Li,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h($l,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h($l,"rel","nofollow"),h(Zi,"id","deepspeed-bs"),h(Da,"id","batch-size"),h(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Da,"href","#batch-size"),h(Ls,"class","relative group"),h(Mi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Hi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Wi,"id","deepspeed-grad-acc"),h(Oa,"id","gradient-accumulation"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#gradient-accumulation"),h(Zs,"class","relative group"),h(Bi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Yi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Ki,"id","deepspeed-grad-clip"),h(Ta,"id","gradient-clipping"),h(Ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ta,"href","#gradient-clipping"),h(Gs,"class","relative group"),h(Xi,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(eu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(su,"id","deepspeed-weight-extraction"),h(Sa,"id","getting-the-model-weights-out"),h(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sa,"href","#getting-the-model-weights-out"),h(Ms,"class","relative group"),h(Rl,"href","https://huggingface.co/models"),h(Rl,"rel","nofollow"),h(Ma,"id","zero3-and-infinity-nuances"),h(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ma,"href","#zero3-and-infinity-nuances"),h(Ns,"class","relative group"),h(Na,"id","constructing-massive-models"),h(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Na,"href","#constructing-massive-models"),h(Hs,"class","relative group"),h(mu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(_u,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Vl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(Vl,"rel","nofollow"),h(ju,"href","#from_pretrained-torch-dtype"),h(Ba,"id","gathering-parameters"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#gathering-parameters"),h(Ws,"class","relative group"),h(Jl,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Jl,"rel","nofollow"),h(wu,"id","deepspeed-zero-inference"),h(Ya,"id","zero-inference"),h(Ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ya,"href","#zero-inference"),h(Fs,"class","relative group"),h(bu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(Xa,"id","filing-issues"),h(Xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xa,"href","#filing-issues"),h(Bs,"class","relative group"),h(Pu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Ou,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(zu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(lr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(lr,"rel","nofollow"),h(pr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(pr,"rel","nofollow"),h(ur,"href","https://github.com/microsoft/DeepSpeed/"),h(ur,"rel","nofollow"),h(en,"id","troubleshooting"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#troubleshooting"),h(Ys,"class","relative group"),h(hr,"href","https://github.com/microsoft/DeepSpeed/pull/965"),h(hr,"rel","nofollow"),h(tn,"id","notes"),h(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(tn,"href","#notes"),h(Ks,"class","relative group"),h(Cu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(mr,"href","https://github.com/microsoft/deepspeed#installation"),h(mr,"rel","nofollow"),h(xu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(_r,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(_r,"rel","nofollow"),h(Iu,"id","deepspeed-non-trainer-integration"),h(nn,"id","nontrainer-deepspeed-integration"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#nontrainer-deepspeed-integration"),h(Xs,"class","relative group"),h(Ru,"href","/docs/transformers/v4.16.2/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Uu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Lu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Zu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Gu,"href","/docs/transformers/v4.16.2/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(ln,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ln,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(Qs,"class","relative group"),h(Hu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(Wu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.TrainingArguments"),h(os,"class","docstring"),h(rn,"class","docstring"),h(pn,"class","docstring"),h(un,"class","docstring"),h(E,"class","docstring"),h(cn,"id","main-deepspeed-resources"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#main-deepspeed-resources"),h(at,"class","relative group"),h(Pr,"href","https://github.com/microsoft/deepspeed"),h(Pr,"rel","nofollow"),h(Or,"href","https://www.deepspeed.ai/getting-started/"),h(Or,"rel","nofollow"),h(zr,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(zr,"rel","nofollow"),h(Tr,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(Tr,"rel","nofollow"),h(Ar,"href","https://arxiv.org/abs/1910.02054"),h(Ar,"rel","nofollow"),h(Sr,"href","https://arxiv.org/abs/2101.06840"),h(Sr,"rel","nofollow"),h(Cr,"href","https://arxiv.org/abs/2104.07857"),h(Cr,"rel","nofollow"),h(Bu,"href","/docs/transformers/v4.16.2/en/main_classes/trainer#transformers.Trainer"),h(xr,"href","https://github.com/microsoft/DeepSpeed/issues"),h(xr,"rel","nofollow")},m(e,p){s(document.head,y),i(e,Z,p),i(e,b,p),s(b,$),s($,hs),m(B,hs,null),s(b,kn),s(b,fs),s(fs,ds),i(e,ot,p),i(e,V,p),s(V,Y),s(Y,G),s(V,Nr),s(V,be),s(be,Hr),s(V,Mq),i(e,K1,p),i(e,O,p),s(O,Lc),s(Lc,Nq),s(O,Hq),s(O,Zc),s(Zc,Wq),s(O,Fq),s(O,Gc),s(Gc,Bq),s(O,Vq),s(O,Mc),s(Mc,Yq),s(O,Kq),s(O,Nc),s(Nc,Jq),s(O,Xq),s(O,Hc),s(Hc,Qq),i(e,J1,p),i(e,qe,p),s(qe,eE),s(qe,Dn),s(Dn,sE),s(qe,tE),s(qe,Pn),s(Pn,aE),s(qe,nE),i(e,X1,p),i(e,Wr,p),s(Wr,oE),i(e,Q1,p),i(e,Fr,p),s(Fr,lE),i(e,ev,p),i(e,lt,p),s(lt,rE),s(lt,On),s(On,pE),s(lt,iE),i(e,sv,p),i(e,rt,p),s(rt,zn),s(zn,uE),s(zn,Br),s(Br,cE),s(zn,hE),s(rt,fE),s(rt,L),s(L,dE),s(L,Vr),s(Vr,mE),s(L,_E),s(L,Wc),s(Wc,vE),s(L,jE),s(L,Fc),s(Fc,gE),s(L,wE),s(L,Bc),s(Bc,yE),s(L,bE),s(L,Yr),s(Yr,qE),s(L,EE),i(e,tv,p),i(e,Kr,p),s(Kr,$E),i(e,av,p),i(e,Jr,p),s(Jr,kE),i(e,nv,p),i(e,Xr,p),s(Xr,Vc),s(Vc,DE),i(e,ov,p),i(e,Qr,p),s(Qr,PE),i(e,lv,p),i(e,ep,p),s(ep,Tn),s(Tn,OE),s(Tn,sp),s(sp,zE),s(Tn,TE),i(e,rv,p),i(e,tp,p),s(tp,AE),i(e,pv,p),i(e,ap,p),i(e,iv,p),i(e,ms,p),s(ms,pt),s(pt,Yc),m(An,Yc,null),s(ms,SE),s(ms,Kc),s(Kc,CE),i(e,uv,p),i(e,np,p),i(e,cv,p),i(e,_s,p),s(_s,it),s(it,Jc),m(Sn,Jc,null),s(_s,xE),s(_s,Xc),s(Xc,IE),i(e,hv,p),i(e,op,p),s(op,RE),i(e,fv,p),m(Cn,e,p),i(e,dv,p),i(e,Ee,p),s(Ee,UE),s(Ee,Qc),s(Qc,LE),s(Ee,ZE),s(Ee,eh),s(eh,GE),s(Ee,ME),i(e,mv,p),m(xn,e,p),i(e,_v,p),i(e,$e,p),s($e,NE),s($e,In),s(In,HE),s($e,WE),s($e,Rn),s(Rn,FE),s($e,BE),i(e,vv,p),i(e,ut,p),s(ut,VE),s(ut,lp),s(lp,YE),s(ut,KE),i(e,jv,p),i(e,rp,p),s(rp,JE),i(e,gv,p),i(e,pp,p),s(pp,XE),i(e,wv,p),m(Un,e,p),i(e,yv,p),i(e,ke,p),s(ke,QE),s(ke,sh),s(sh,e0),s(ke,s0),s(ke,th),s(th,t0),s(ke,a0),i(e,bv,p),i(e,ct,p),s(ct,n0),s(ct,ah),s(ah,o0),s(ct,l0),i(e,qv,p),m(Ln,e,p),i(e,Ev,p),i(e,_e,p),s(_e,r0),s(_e,nh),s(nh,p0),s(_e,i0),s(_e,oh),s(oh,u0),s(_e,c0),s(_e,lh),s(lh,h0),i(e,$v,p),i(e,ip,p),s(ip,f0),i(e,kv,p),m(Zn,e,p),i(e,Dv,p),i(e,De,p),s(De,d0),s(De,rh),s(rh,m0),s(De,_0),s(De,ph),s(ph,v0),s(De,j0),i(e,Pv,p),i(e,ht,p),s(ht,g0),s(ht,ih),s(ih,w0),s(ht,y0),i(e,Ov,p),i(e,Pe,p),s(Pe,b0),s(Pe,uh),s(uh,q0),s(Pe,E0),s(Pe,Gn),s(Gn,$0),s(Pe,k0),i(e,zv,p),i(e,up,p),s(up,D0),i(e,Tv,p),m(Mn,e,p),i(e,Av,p),i(e,cp,p),s(cp,P0),i(e,Sv,p),m(Nn,e,p),i(e,Cv,p),i(e,hp,p),s(hp,O0),i(e,xv,p),m(Hn,e,p),i(e,Iv,p),i(e,ft,p),s(ft,z0),s(ft,ch),s(ch,T0),s(ft,A0),i(e,Rv,p),i(e,dt,p),s(dt,S0),s(dt,hh),s(hh,C0),s(dt,x0),i(e,Uv,p),i(e,mt,p),s(mt,I0),s(mt,Wn),s(Wn,R0),s(mt,U0),i(e,Lv,p),i(e,fp,p),i(e,Zv,p),i(e,vs,p),s(vs,_t),s(_t,fh),m(Fn,fh,null),s(vs,L0),s(vs,dh),s(dh,Z0),i(e,Gv,p),i(e,vt,p),s(vt,G0),s(vt,dp),s(dp,M0),s(vt,N0),i(e,Mv,p),i(e,jt,p),s(jt,js),s(js,H0),s(js,mh),s(mh,W0),s(js,F0),s(js,_h),s(_h,B0),s(js,V0),s(jt,Y0),s(jt,ve),s(ve,K0),s(ve,vh),s(vh,J0),s(ve,X0),s(ve,jh),s(jh,Q0),s(ve,e6),s(ve,Bn),s(Bn,s6),s(ve,t6),i(e,Nv,p),i(e,mp,p),s(mp,a6),i(e,Hv,p),m(Vn,e,p),i(e,Wv,p),i(e,_p,p),s(_p,n6),i(e,Fv,p),m(Yn,e,p),i(e,Bv,p),i(e,z,p),s(z,o6),s(z,gh),s(gh,l6),s(z,r6),s(z,wh),s(wh,p6),s(z,i6),s(z,yh),s(yh,u6),s(z,c6),s(z,bh),s(bh,h6),s(z,f6),s(z,Kn),s(Kn,d6),s(z,m6),i(e,Vv,p),i(e,J,p),s(J,_6),s(J,qh),s(qh,v6),s(J,j6),s(J,Eh),s(Eh,g6),s(J,w6),s(J,$h),s($h,y6),s(J,b6),i(e,Yv,p),i(e,gt,p),s(gt,q6),s(gt,kh),s(kh,E6),s(gt,$6),i(e,Kv,p),m(Jn,e,p),i(e,Jv,p),i(e,wt,p),s(wt,k6),s(wt,Dh),s(Dh,D6),s(wt,P6),i(e,Xv,p),i(e,yt,p),s(yt,O6),s(yt,Xn),s(Xn,z6),s(yt,T6),i(e,Qv,p),i(e,vp,p),i(e,ej,p),i(e,gs,p),s(gs,bt),s(bt,Ph),m(Qn,Ph,null),s(gs,A6),s(gs,Oh),s(Oh,S6),i(e,sj,p),i(e,qt,p),s(qt,C6),s(qt,jp),s(jp,x6),s(qt,I6),i(e,tj,p),m(eo,e,p),i(e,aj,p),i(e,Oe,p),s(Oe,R6),s(Oe,zh),s(zh,U6),s(Oe,L6),s(Oe,so),s(so,Z6),s(Oe,G6),i(e,nj,p),i(e,gp,p),s(gp,M6),i(e,oj,p),i(e,Et,p),s(Et,Th),s(Th,N6),s(Et,H6),s(Et,Ah),s(Ah,W6),i(e,lj,p),i(e,wp,p),s(wp,F6),i(e,rj,p),m(to,e,p),i(e,pj,p),i(e,yp,p),s(yp,B6),i(e,ij,p),i(e,$t,p),s($t,V6),s($t,ao),s(ao,Y6),s($t,K6),i(e,uj,p),i(e,bp,p),s(bp,J6),i(e,cj,p),i(e,qp,p),s(qp,X6),i(e,hj,p),i(e,Ep,p),s(Ep,ws),s(ws,no),s(no,Q6),s(no,Sh),s(Sh,e4),s(no,s4),s(ws,t4),m(oo,ws,null),s(ws,a4),s(ws,Ch),s(Ch,n4),i(e,fj,p),i(e,$p,p),i(e,dj,p),i(e,ys,p),s(ys,kt),s(kt,xh),m(lo,xh,null),s(ys,o4),s(ys,Ih),s(Ih,l4),i(e,mj,p),i(e,Dt,p),s(Dt,r4),s(Dt,Rh),s(Rh,p4),s(Dt,i4),i(e,_j,p),i(e,kp,p),s(kp,u4),i(e,vj,p),m(ro,e,p),i(e,jj,p),i(e,Pt,p),s(Pt,c4),s(Pt,Uh),s(Uh,h4),s(Pt,f4),i(e,gj,p),i(e,Dp,p),s(Dp,d4),i(e,wj,p),i(e,Pp,p),s(Pp,m4),i(e,yj,p),m(po,e,p),i(e,bj,p),i(e,ze,p),s(ze,_4),s(ze,Lh),s(Lh,v4),s(ze,j4),s(ze,Zh),s(Zh,g4),s(ze,w4),i(e,qj,p),m(io,e,p),i(e,Ej,p),i(e,Ot,p),s(Ot,y4),s(Ot,Gh),s(Gh,b4),s(Ot,q4),i(e,$j,p),m(uo,e,p),i(e,kj,p),i(e,Op,p),s(Op,E4),i(e,Dj,p),i(e,zt,p),s(zt,$4),s(zt,Mh),s(Mh,k4),s(zt,D4),i(e,Pj,p),i(e,zp,p),i(e,Oj,p),i(e,bs,p),s(bs,Tt),s(Tt,Nh),m(co,Nh,null),s(bs,P4),s(bs,Hh),s(Hh,O4),i(e,zj,p),i(e,At,p),s(At,z4),s(At,ho),s(ho,T4),s(At,A4),i(e,Tj,p),i(e,St,p),s(St,S4),s(St,fo),s(fo,C4),s(St,x4),i(e,Aj,p),m(mo,e,p),i(e,Sj,p),i(e,Ct,p),s(Ct,I4),s(Ct,Wh),s(Wh,R4),s(Ct,U4),i(e,Cj,p),m(_o,e,p),i(e,xj,p),i(e,xt,p),s(xt,L4),s(xt,vo),s(vo,Z4),s(xt,G4),i(e,Ij,p),i(e,Tp,p),s(Tp,M4),i(e,Rj,p),i(e,X,p),s(X,N4),s(X,Fh),s(Fh,H4),s(X,W4),s(X,Bh),s(Bh,F4),s(X,B4),s(X,Vh),s(Vh,V4),s(X,Y4),i(e,Uj,p),m(jo,e,p),i(e,Lj,p),i(e,It,p),s(It,K4),s(It,Ap),s(Ap,J4),s(It,X4),i(e,Zj,p),i(e,Sp,p),i(e,Gj,p),i(e,qs,p),s(qs,Rt),s(Rt,Yh),m(go,Yh,null),s(qs,Q4),s(qs,Kh),s(Kh,e$),i(e,Mj,p),i(e,T,p),s(T,s$),s(T,Cp),s(Cp,t$),s(T,a$),s(T,xp),s(xp,n$),s(T,o$),s(T,Jh),s(Jh,l$),s(T,r$),s(T,Xh),s(Xh,p$),s(T,i$),s(T,Ip),s(Ip,u$),s(T,c$),i(e,Nj,p),i(e,Rp,p),s(Rp,h$),i(e,Hj,p),m(wo,e,p),i(e,Wj,p),i(e,Up,p),s(Up,f$),i(e,Fj,p),m(yo,e,p),i(e,Bj,p),i(e,Lp,p),i(e,Vj,p),i(e,Es,p),s(Es,Ut),s(Ut,Qh),m(bo,Qh,null),s(Es,d$),s(Es,ef),s(ef,m$),i(e,Yj,p),m(Lt,e,p),i(e,Kj,p),i(e,Te,p),s(Te,_$),s(Te,Zp),s(Zp,v$),s(Te,j$),s(Te,Gp),s(Gp,g$),s(Te,w$),i(e,Jj,p),i(e,Zt,p),s(Zt,y$),s(Zt,Mp),s(Mp,b$),s(Zt,q$),i(e,Xj,p),i(e,Ae,p),s(Ae,E$),s(Ae,sf),s(sf,$$),s(Ae,k$),s(Ae,Np),s(Np,D$),s(Ae,P$),i(e,Qj,p),i(e,Hp,p),s(Hp,O$),i(e,eg,p),i(e,Gt,p),s(Gt,z$),s(Gt,Wp),s(Wp,T$),s(Gt,A$),i(e,sg,p),i(e,Mt,p),s(Mt,tf),s(tf,S$),s(Mt,C$),s(Mt,qo),s(qo,x$),s(qo,Fp),s(Fp,I$),s(qo,R$),i(e,tg,p),i(e,Q,p),s(Q,U$),s(Q,af),s(af,L$),s(Q,Z$),s(Q,Bp),s(Bp,G$),s(Q,M$),s(Q,nf),s(nf,N$),s(Q,H$),i(e,ag,p),i(e,Vp,p),i(e,ng,p),i(e,$s,p),s($s,Nt),s(Nt,of),m(Eo,of,null),s($s,W$),s($s,lf),s(lf,F$),i(e,og,p),i(e,$o,p),s($o,ko),s(ko,B$),s($o,V$),i(e,lg,p),i(e,Se,p),s(Se,Y$),s(Se,rf),s(rf,K$),s(Se,J$),s(Se,Do),s(Do,X$),s(Se,Q$),i(e,rg,p),i(e,Ht,p),s(Ht,e5),s(Ht,Yp),s(Yp,s5),s(Ht,t5),i(e,pg,p),i(e,Kp,p),s(Kp,a5),i(e,ig,p),i(e,Jp,p),i(e,ug,p),i(e,ks,p),s(ks,Wt),s(Wt,pf),m(Po,pf,null),s(ks,n5),s(ks,uf),s(uf,o5),i(e,cg,p),i(e,Xp,p),s(Xp,l5),i(e,hg,p),m(Oo,e,p),i(e,fg,p),i(e,Qp,p),s(Qp,cf),s(cf,r5),i(e,dg,p),i(e,Ce,p),s(Ce,Ds),s(Ds,p5),s(Ds,hf),s(hf,i5),s(Ds,u5),s(Ds,ff),s(ff,c5),s(Ds,h5),s(Ce,f5),s(Ce,A),s(A,df),s(df,d5),s(A,m5),s(A,mf),s(mf,_5),s(A,v5),s(A,_f),s(_f,j5),s(A,g5),s(A,vf),s(vf,w5),s(A,y5),s(A,jf),s(jf,b5),s(A,q5),s(A,gf),s(gf,E5),s(A,$5),s(Ce,k5),s(Ce,wf),s(wf,D5),i(e,mg,p),i(e,ei,p),i(e,_g,p),i(e,Ps,p),s(Ps,Ft),s(Ft,yf),m(zo,yf,null),s(Ps,P5),s(Ps,bf),s(bf,O5),i(e,vg,p),i(e,si,p),s(si,z5),i(e,jg,p),m(To,e,p),i(e,gg,p),i(e,M,p),s(M,T5),s(M,qf),s(qf,A5),s(M,S5),s(M,Ef),s(Ef,C5),s(M,x5),s(M,$f),s($f,I5),s(M,R5),s(M,kf),s(kf,U5),s(M,L5),i(e,wg,p),i(e,xe,p),s(xe,Z5),s(xe,Df),s(Df,G5),s(xe,M5),s(xe,Pf),s(Pf,N5),s(xe,H5),i(e,yg,p),i(e,ti,p),s(ti,Of),s(Of,W5),i(e,bg,p),i(e,Bt,p),s(Bt,Ao),s(Ao,zf),s(zf,F5),s(Ao,B5),s(Ao,Tf),s(Tf,V5),s(Bt,Y5),s(Bt,So),s(So,Af),s(Af,K5),s(So,J5),s(So,Sf),s(Sf,X5),i(e,qg,p),i(e,S,p),s(S,Q5),s(S,Cf),s(Cf,e8),s(S,s8),s(S,xf),s(xf,t8),s(S,a8),s(S,If),s(If,n8),s(S,o8),s(S,Rf),s(Rf,l8),s(S,r8),s(S,Uf),s(Uf,p8),s(S,i8),i(e,Eg,p),i(e,je,p),s(je,Lf),s(Lf,u8),s(je,c8),s(je,Zf),s(Zf,h8),s(je,f8),s(je,Gf),s(Gf,d8),s(je,m8),i(e,$g,p),i(e,ai,p),s(ai,_8),i(e,kg,p),i(e,Ie,p),s(Ie,Co),s(Co,Mf),s(Mf,v8),s(Co,j8),s(Co,Nf),s(Nf,g8),s(Ie,w8),s(Ie,xo),s(xo,Hf),s(Hf,y8),s(xo,b8),s(xo,Wf),s(Wf,q8),s(Ie,E8),s(Ie,Io),s(Io,Ff),s(Ff,$8),s(Io,k8),s(Io,Bf),s(Bf,D8),i(e,Dg,p),i(e,Re,p),s(Re,P8),s(Re,Vf),s(Vf,O8),s(Re,z8),s(Re,ni),s(ni,T8),s(Re,A8),i(e,Pg,p),i(e,Ro,p),s(Ro,Yf),s(Yf,S8),s(Ro,C8),i(e,Og,p),i(e,ee,p),s(ee,x8),s(ee,Kf),s(Kf,I8),s(ee,R8),s(ee,Jf),s(Jf,U8),s(ee,L8),s(ee,Xf),s(Xf,Z8),s(ee,G8),i(e,zg,p),i(e,oi,p),s(oi,Uo),s(Uo,Qf),s(Qf,M8),s(Uo,N8),s(Uo,ed),s(ed,H8),i(e,Tg,p),i(e,ge,p),s(ge,sd),s(sd,W8),s(ge,F8),s(ge,td),s(td,B8),s(ge,V8),s(ge,ad),s(ad,Y8),s(ge,K8),i(e,Ag,p),i(e,Ue,p),s(Ue,J8),s(Ue,nd),s(nd,X8),s(Ue,Q8),s(Ue,od),s(od,e9),s(Ue,s9),i(e,Sg,p),i(e,Vt,p),s(Vt,Lo),s(Lo,t9),s(Lo,ld),s(ld,a9),s(Lo,n9),s(Vt,o9),s(Vt,Zo),s(Zo,l9),s(Zo,rd),s(rd,r9),s(Zo,p9),i(e,Cg,p),i(e,li,p),i(e,xg,p),i(e,Os,p),s(Os,Yt),s(Yt,pd),m(Go,pd,null),s(Os,i9),s(Os,id),s(id,u9),i(e,Ig,p),i(e,ri,p),s(ri,c9),i(e,Rg,p),i(e,pi,p),s(pi,h9),i(e,Ug,p),m(Mo,e,p),i(e,Lg,p),i(e,Kt,p),s(Kt,f9),s(Kt,ud),s(ud,d9),s(Kt,m9),i(e,Zg,p),i(e,Le,p),s(Le,_9),s(Le,No),s(No,v9),s(Le,j9),s(Le,Ho),s(Ho,g9),s(Le,w9),i(e,Gg,p),i(e,Jt,p),s(Jt,y9),s(Jt,cd),s(cd,b9),s(Jt,q9),i(e,Mg,p),i(e,Ze,p),s(Ze,E9),s(Ze,hd),s(hd,$9),s(Ze,k9),s(Ze,Wo),s(Wo,D9),s(Ze,P9),i(e,Ng,p),i(e,ii,p),i(e,Hg,p),i(e,zs,p),s(zs,Xt),s(Xt,fd),m(Fo,fd,null),s(zs,O9),s(zs,dd),s(dd,z9),i(e,Wg,p),i(e,ui,p),s(ui,T9),i(e,Fg,p),i(e,ci,p),s(ci,A9),i(e,Bg,p),i(e,Qt,p),s(Qt,Ts),s(Ts,S9),s(Ts,md),s(md,C9),s(Ts,x9),s(Ts,_d),s(_d,I9),s(Ts,R9),s(Qt,U9),s(Qt,Bo),s(Bo,L9),s(Bo,vd),s(vd,Z9),s(Bo,G9),i(e,Vg,p),i(e,Ge,p),s(Ge,M9),s(Ge,jd),s(jd,N9),s(Ge,H9),s(Ge,gd),s(gd,W9),s(Ge,F9),i(e,Yg,p),i(e,hi,p),i(e,Kg,p),i(e,As,p),s(As,ea),s(ea,wd),m(Vo,wd,null),s(As,B9),s(As,yd),s(yd,V9),i(e,Jg,p),i(e,sa,p),s(sa,Y9),s(sa,bd),s(bd,K9),s(sa,J9),i(e,Xg,p),m(Yo,e,p),i(e,Qg,p),i(e,ta,p),s(ta,X9),s(ta,qd),s(qd,Q9),s(ta,e7),i(e,ew,p),m(Ko,e,p),i(e,sw,p),i(e,fi,p),i(e,tw,p),i(e,Ss,p),s(Ss,aa),s(aa,Ed),m(Jo,Ed,null),s(Ss,s7),s(Ss,$d),s($d,t7),i(e,aw,p),i(e,na,p),s(na,a7),s(na,kd),s(kd,n7),s(na,o7),i(e,nw,p),m(Xo,e,p),i(e,ow,p),i(e,oa,p),s(oa,l7),s(oa,Dd),s(Dd,r7),s(oa,p7),i(e,lw,p),m(Qo,e,p),i(e,rw,p),i(e,Cs,p),s(Cs,la),s(la,Pd),m(el,Pd,null),s(Cs,i7),s(Cs,Od),s(Od,u7),i(e,pw,p),i(e,ra,p),s(ra,c7),s(ra,zd),s(zd,h7),s(ra,f7),i(e,iw,p),i(e,di,p),s(di,d7),i(e,uw,p),i(e,pa,p),s(pa,m7),s(pa,Td),s(Td,_7),s(pa,v7),i(e,cw,p),i(e,mi,p),i(e,hw,p),i(e,xs,p),s(xs,ia),s(ia,Ad),m(sl,Ad,null),s(xs,j7),s(xs,Sd),s(Sd,g7),i(e,fw,p),i(e,Me,p),s(Me,w7),s(Me,Cd),s(Cd,y7),s(Me,b7),s(Me,tl),s(tl,q7),s(Me,E7),i(e,dw,p),i(e,q,p),s(q,$7),s(q,xd),s(xd,k7),s(q,D7),s(q,_i),s(_i,P7),s(q,O7),s(q,Id),s(Id,z7),s(q,T7),s(q,Rd),s(Rd,A7),s(q,S7),s(q,Ud),s(Ud,C7),s(q,x7),s(q,Ld),s(Ld,I7),s(q,R7),s(q,Zd),s(Zd,U7),s(q,L7),s(q,Gd),s(Gd,Z7),s(q,G7),i(e,mw,p),i(e,Ne,p),s(Ne,M7),s(Ne,Md),s(Md,N7),s(Ne,H7),s(Ne,Nd),s(Nd,W7),s(Ne,F7),i(e,_w,p),m(al,e,p),i(e,vw,p),i(e,vi,p),s(vi,B7),i(e,jw,p),i(e,se,p),s(se,nl),s(nl,Hd),s(Hd,V7),s(nl,Y7),s(nl,Wd),s(Wd,K7),s(se,J7),s(se,ol),s(ol,Fd),s(Fd,X7),s(ol,Q7),s(ol,Bd),s(Bd,ek),s(se,sk),s(se,ll),s(ll,Vd),s(Vd,tk),s(ll,ak),s(ll,Yd),s(Yd,nk),s(se,ok),s(se,rl),s(rl,Kd),s(Kd,lk),s(rl,rk),s(rl,Jd),s(Jd,pk),i(e,gw,p),i(e,ji,p),s(ji,ik),i(e,ww,p),i(e,gi,p),s(gi,uk),i(e,yw,p),m(pl,e,p),i(e,bw,p),i(e,ua,p),s(ua,ck),s(ua,wi),s(wi,hk),s(ua,fk),i(e,qw,p),i(e,yi,p),s(yi,dk),i(e,Ew,p),m(il,e,p),i(e,$w,p),i(e,te,p),s(te,mk),s(te,Xd),s(Xd,_k),s(te,vk),s(te,Qd),s(Qd,jk),s(te,gk),s(te,em),s(em,wk),s(te,yk),i(e,kw,p),i(e,bi,p),i(e,Dw,p),i(e,Is,p),s(Is,ca),s(ca,sm),m(ul,sm,null),s(Is,bk),s(Is,tm),s(tm,qk),i(e,Pw,p),i(e,C,p),s(C,Ek),s(C,am),s(am,$k),s(C,kk),s(C,nm),s(nm,Dk),s(C,Pk),s(C,om),s(om,Ok),s(C,zk),s(C,lm),s(lm,Tk),s(C,Ak),s(C,cl),s(cl,Sk),s(C,Ck),i(e,Ow,p),i(e,qi,p),s(qi,xk),i(e,zw,p),i(e,ha,p),s(ha,hl),s(hl,rm),s(rm,Ik),s(hl,Rk),s(hl,pm),s(pm,Uk),s(ha,Lk),s(ha,He),s(He,im),s(im,Zk),s(He,Gk),s(He,um),s(um,Mk),s(He,Nk),s(He,cm),s(cm,Hk),s(He,Wk),i(e,Tw,p),i(e,D,p),s(D,Fk),s(D,hm),s(hm,Bk),s(D,Vk),s(D,Ei),s(Ei,Yk),s(D,Kk),s(D,fm),s(fm,Jk),s(D,Xk),s(D,dm),s(dm,Qk),s(D,eD),s(D,mm),s(mm,sD),s(D,tD),s(D,_m),s(_m,aD),s(D,nD),i(e,Aw,p),i(e,We,p),s(We,oD),s(We,vm),s(vm,lD),s(We,rD),s(We,jm),s(jm,pD),s(We,iD),i(e,Sw,p),m(fl,e,p),i(e,Cw,p),i(e,Fe,p),s(Fe,uD),s(Fe,gm),s(gm,cD),s(Fe,hD),s(Fe,$i),s($i,fD),s(Fe,dD),i(e,xw,p),i(e,ae,p),s(ae,fa),s(fa,wm),s(wm,mD),s(fa,_D),s(fa,ym),s(ym,vD),s(fa,jD),s(ae,gD),s(ae,da),s(da,bm),s(bm,wD),s(da,yD),s(da,qm),s(qm,bD),s(da,qD),s(ae,ED),s(ae,Be),s(Be,Em),s(Em,$D),s(Be,kD),s(Be,$m),s($m,DD),s(Be,PD),s(Be,km),s(km,OD),s(Be,zD),s(ae,TD),s(ae,Ve),s(Ve,Dm),s(Dm,AD),s(Ve,SD),s(Ve,Pm),s(Pm,CD),s(Ve,xD),s(Ve,Om),s(Om,ID),s(Ve,RD),i(e,Iw,p),i(e,ki,p),s(ki,UD),i(e,Rw,p),m(dl,e,p),i(e,Uw,p),i(e,ma,p),s(ma,LD),s(ma,Di),s(Di,ZD),s(ma,GD),i(e,Lw,p),i(e,_a,p),s(_a,MD),s(_a,zm),s(zm,ND),s(_a,HD),i(e,Zw,p),m(ml,e,p),i(e,Gw,p),i(e,N,p),s(N,WD),s(N,Tm),s(Tm,FD),s(N,BD),s(N,Am),s(Am,VD),s(N,YD),s(N,Sm),s(Sm,KD),s(N,JD),s(N,Cm),s(Cm,XD),s(N,QD),i(e,Mw,p),i(e,Pi,p),i(e,Nw,p),i(e,Rs,p),s(Rs,va),s(va,xm),m(_l,xm,null),s(Rs,eP),s(Rs,Im),s(Im,sP),i(e,Hw,p),i(e,Oi,p),s(Oi,tP),i(e,Ww,p),i(e,ja,p),s(ja,aP),s(ja,Rm),s(Rm,nP),s(ja,oP),i(e,Fw,p),m(vl,e,p),i(e,Bw,p),i(e,ga,p),s(ga,lP),s(ga,jl),s(jl,rP),s(ga,pP),i(e,Vw,p),i(e,zi,p),i(e,Yw,p),i(e,Us,p),s(Us,wa),s(wa,Um),m(gl,Um,null),s(Us,iP),s(Us,Lm),s(Lm,uP),i(e,Kw,p),i(e,Ti,p),s(Ti,cP),i(e,Jw,p),i(e,Ai,p),s(Ai,hP),i(e,Xw,p),m(wl,e,p),i(e,Qw,p),i(e,Ye,p),s(Ye,fP),s(Ye,Si),s(Si,dP),s(Ye,mP),s(Ye,Zm),s(Zm,_P),s(Ye,vP),i(e,ey,p),i(e,ya,p),s(ya,jP),s(ya,Gm),s(Gm,gP),s(ya,wP),i(e,sy,p),i(e,Ci,p),s(Ci,yP),i(e,ty,p),m(yl,e,p),i(e,ay,p),i(e,ba,p),s(ba,bP),s(ba,xi),s(xi,qP),s(ba,EP),i(e,ny,p),i(e,qa,p),s(qa,$P),s(qa,bl),s(bl,kP),s(qa,DP),i(e,oy,p),i(e,Ii,p),s(Ii,PP),i(e,ly,p),m(ql,e,p),i(e,ry,p),i(e,ne,p),s(ne,OP),s(ne,Ri),s(Ri,zP),s(ne,TP),s(ne,Mm),s(Mm,AP),s(ne,SP),s(ne,Nm),s(Nm,CP),s(ne,xP),i(e,py,p),i(e,Ea,p),s(Ea,IP),s(Ea,Hm),s(Hm,RP),s(Ea,UP),i(e,iy,p),i(e,Ui,p),s(Ui,LP),i(e,uy,p),m(El,e,p),i(e,cy,p),i(e,$a,p),s($a,ZP),s($a,Li),s(Li,GP),s($a,MP),i(e,hy,p),i(e,ka,p),s(ka,NP),s(ka,$l),s($l,HP),s(ka,WP),i(e,fy,p),i(e,Zi,p),i(e,dy,p),i(e,Ls,p),s(Ls,Da),s(Da,Wm),m(kl,Wm,null),s(Ls,FP),s(Ls,Fm),s(Fm,BP),i(e,my,p),i(e,Gi,p),s(Gi,VP),i(e,_y,p),m(Dl,e,p),i(e,vy,p),i(e,x,p),s(x,YP),s(x,Mi),s(Mi,KP),s(x,JP),s(x,Bm),s(Bm,XP),s(x,QP),s(x,Vm),s(Vm,eO),s(x,sO),s(x,Ym),s(Ym,tO),s(x,aO),s(x,Km),s(Km,nO),s(x,oO),i(e,jy,p),i(e,Ni,p),s(Ni,lO),i(e,gy,p),m(Pl,e,p),i(e,wy,p),i(e,Pa,p),s(Pa,rO),s(Pa,Hi),s(Hi,pO),s(Pa,iO),i(e,yy,p),i(e,Wi,p),i(e,by,p),i(e,Zs,p),s(Zs,Oa),s(Oa,Jm),m(Ol,Jm,null),s(Zs,uO),s(Zs,Xm),s(Xm,cO),i(e,qy,p),i(e,Fi,p),s(Fi,hO),i(e,Ey,p),m(zl,e,p),i(e,$y,p),i(e,Ke,p),s(Ke,fO),s(Ke,Bi),s(Bi,dO),s(Ke,mO),s(Ke,Qm),s(Qm,_O),s(Ke,vO),i(e,ky,p),i(e,Vi,p),s(Vi,jO),i(e,Dy,p),m(Tl,e,p),i(e,Py,p),i(e,za,p),s(za,gO),s(za,Yi),s(Yi,wO),s(za,yO),i(e,Oy,p),i(e,Ki,p),i(e,zy,p),i(e,Gs,p),s(Gs,Ta),s(Ta,e_),m(Al,e_,null),s(Gs,bO),s(Gs,s_),s(s_,qO),i(e,Ty,p),i(e,Ji,p),s(Ji,EO),i(e,Ay,p),m(Sl,e,p),i(e,Sy,p),i(e,Je,p),s(Je,$O),s(Je,Xi),s(Xi,kO),s(Je,DO),s(Je,t_),s(t_,PO),s(Je,OO),i(e,Cy,p),i(e,Qi,p),s(Qi,zO),i(e,xy,p),m(Cl,e,p),i(e,Iy,p),i(e,Aa,p),s(Aa,TO),s(Aa,eu),s(eu,AO),s(Aa,SO),i(e,Ry,p),i(e,su,p),i(e,Uy,p),i(e,Ms,p),s(Ms,Sa),s(Sa,a_),m(xl,a_,null),s(Ms,CO),s(Ms,n_),s(n_,xO),i(e,Ly,p),i(e,Ca,p),s(Ca,IO),s(Ca,o_),s(o_,RO),s(Ca,UO),i(e,Zy,p),i(e,tu,p),s(tu,l_),s(l_,LO),i(e,Gy,p),i(e,xa,p),s(xa,ZO),s(xa,r_),s(r_,GO),s(xa,MO),i(e,My,p),i(e,H,p),s(H,NO),s(H,p_),s(p_,HO),s(H,WO),s(H,i_),s(i_,FO),s(H,BO),s(H,u_),s(u_,VO),s(H,YO),s(H,c_),s(c_,KO),s(H,JO),i(e,Ny,p),m(Il,e,p),i(e,Hy,p),i(e,au,p),s(au,h_),s(h_,XO),i(e,Wy,p),i(e,Ia,p),s(Ia,QO),s(Ia,Rl),s(Rl,ez),s(Ia,sz),i(e,Fy,p),i(e,nu,p),s(nu,f_),s(f_,tz),i(e,By,p),i(e,ou,p),s(ou,az),i(e,Vy,p),i(e,lu,p),s(lu,nz),i(e,Yy,p),m(Ul,e,p),i(e,Ky,p),i(e,Xe,p),s(Xe,oz),s(Xe,d_),s(d_,lz),s(Xe,rz),s(Xe,m_),s(m_,pz),s(Xe,iz),i(e,Jy,p),m(Ll,e,p),i(e,Xy,p),m(Ra,e,p),i(e,Qy,p),i(e,Ua,p),s(Ua,uz),s(Ua,__),s(__,cz),s(Ua,hz),i(e,e2,p),i(e,La,p),s(La,fz),s(La,v_),s(v_,dz),s(La,mz),i(e,s2,p),m(Zl,e,p),i(e,t2,p),i(e,ru,p),s(ru,j_),s(j_,_z),i(e,a2,p),i(e,Qe,p),s(Qe,vz),s(Qe,g_),s(g_,jz),s(Qe,gz),s(Qe,w_),s(w_,wz),s(Qe,yz),i(e,n2,p),i(e,pu,p),s(pu,bz),i(e,o2,p),m(Gl,e,p),i(e,l2,p),i(e,Za,p),s(Za,qz),s(Za,y_),s(y_,Ez),s(Za,$z),i(e,r2,p),m(Ml,e,p),i(e,p2,p),i(e,Ga,p),s(Ga,kz),s(Ga,b_),s(b_,Dz),s(Ga,Pz),i(e,i2,p),i(e,iu,p),s(iu,Oz),i(e,u2,p),i(e,Nl,p),s(Nl,q_),s(q_,zz),s(Nl,Tz),i(e,c2,p),i(e,es,p),s(es,Az),s(es,E_),s(E_,Sz),s(es,Cz),s(es,$_),s($_,xz),s(es,Iz),i(e,h2,p),i(e,uu,p),s(uu,Rz),i(e,f2,p),i(e,Ns,p),s(Ns,Ma),s(Ma,k_),m(Hl,k_,null),s(Ns,Uz),s(Ns,D_),s(D_,Lz),i(e,d2,p),i(e,cu,p),s(cu,Zz),i(e,m2,p),i(e,hu,p),s(hu,Gz),i(e,_2,p),i(e,fu,p),s(fu,Mz),i(e,v2,p),i(e,Hs,p),s(Hs,Na),s(Na,P_),m(Wl,P_,null),s(Hs,Nz),s(Hs,O_),s(O_,Hz),i(e,j2,p),i(e,Ha,p),s(Ha,Wz),s(Ha,z_),s(z_,Fz),s(Ha,Bz),i(e,g2,p),m(Fl,e,p),i(e,w2,p),i(e,du,p),s(du,Vz),i(e,y2,p),i(e,k,p),s(k,Yz),s(k,T_),s(T_,Kz),s(k,Jz),s(k,A_),s(A_,Xz),s(k,Qz),s(k,S_),s(S_,eT),s(k,sT),s(k,mu),s(mu,tT),s(k,aT),s(k,_u),s(_u,nT),s(k,oT),s(k,C_),s(C_,lT),s(k,rT),s(k,x_),s(x_,pT),s(k,iT),i(e,b2,p),m(Bl,e,p),i(e,q2,p),i(e,Wa,p),s(Wa,uT),s(Wa,I_),s(I_,cT),s(Wa,hT),i(e,E2,p),i(e,vu,p),s(vu,fT),i(e,$2,p),i(e,Fa,p),s(Fa,dT),s(Fa,Vl),s(Vl,mT),s(Fa,_T),i(e,k2,p),i(e,oe,p),s(oe,vT),s(oe,R_),s(R_,jT),s(oe,gT),s(oe,U_),s(U_,wT),s(oe,yT),s(oe,ju),s(ju,bT),s(oe,qT),i(e,D2,p),i(e,Ws,p),s(Ws,Ba),s(Ba,L_),m(Yl,L_,null),s(Ws,ET),s(Ws,Z_),s(Z_,$T),i(e,P2,p),i(e,Kl,p),s(Kl,kT),s(Kl,Jl),s(Jl,DT),i(e,O2,p),i(e,Va,p),s(Va,PT),s(Va,G_),s(G_,OT),s(Va,zT),i(e,z2,p),i(e,gu,p),s(gu,TT),i(e,T2,p),m(Xl,e,p),i(e,A2,p),i(e,ss,p),s(ss,AT),s(ss,M_),s(M_,ST),s(ss,CT),s(ss,N_),s(N_,xT),s(ss,IT),i(e,S2,p),i(e,wu,p),i(e,C2,p),i(e,Fs,p),s(Fs,Ya),s(Ya,H_),m(Ql,H_,null),s(Fs,RT),s(Fs,W_),s(W_,UT),i(e,x2,p),i(e,yu,p),s(yu,LT),i(e,I2,p),i(e,Ka,p),s(Ka,ZT),s(Ka,bu),s(bu,GT),s(Ka,MT),i(e,R2,p),m(er,e,p),i(e,U2,p),i(e,qu,p),s(qu,NT),i(e,L2,p),i(e,Ja,p),s(Ja,HT),s(Ja,F_),s(F_,WT),s(Ja,FT),i(e,Z2,p),m(sr,e,p),i(e,G2,p),i(e,Eu,p),s(Eu,BT),i(e,M2,p),i(e,$u,p),s($u,VT),i(e,N2,p),i(e,Bs,p),s(Bs,Xa),s(Xa,B_),m(tr,B_,null),s(Bs,YT),s(Bs,V_),s(V_,KT),i(e,H2,p),i(e,ku,p),s(ku,JT),i(e,W2,p),i(e,Du,p),s(Du,XT),i(e,F2,p),i(e,I,p),s(I,Y_),s(Y_,K_),s(K_,QT),s(I,eA),s(I,J_),s(J_,we),s(we,sA),s(we,Pu),s(Pu,tA),s(we,aA),s(we,Ou),s(Ou,nA),s(we,oA),s(we,zu),s(zu,lA),s(we,rA),s(I,pA),s(I,ar),s(ar,X_),s(X_,iA),s(ar,uA),m(nr,ar,null),s(I,cA),s(I,Q_),s(Q_,or),s(or,hA),s(or,lr),s(lr,fA),s(or,dA),s(I,mA),s(I,e1),s(e1,s1),s(s1,_A),s(I,vA),s(I,t1),s(t1,rr),s(rr,jA),s(rr,pr),s(pr,gA),s(rr,wA),i(e,B2,p),i(e,Tu,p),s(Tu,yA),i(e,V2,p),i(e,Qa,p),s(Qa,Vs),s(Vs,a1),s(a1,bA),s(Vs,qA),s(Vs,n1),s(n1,EA),s(Vs,$A),s(Vs,o1),s(o1,kA),s(Qa,DA),s(Qa,l1),s(l1,ir),s(ir,PA),s(ir,ur),s(ur,OA),s(ir,zA),i(e,Y2,p),i(e,Ys,p),s(Ys,en),s(en,r1),m(cr,r1,null),s(Ys,TA),s(Ys,p1),s(p1,AA),i(e,K2,p),i(e,Au,p),s(Au,Su),s(Su,i1),s(i1,SA),s(Su,CA),i(e,J2,p),i(e,W,p),s(W,xA),s(W,u1),s(u1,IA),s(W,RA),s(W,c1),s(c1,UA),s(W,LA),s(W,h1),s(h1,ZA),s(W,GA),s(W,f1),s(f1,MA),s(W,NA),i(e,X2,p),i(e,sn,p),s(sn,HA),s(sn,hr),s(hr,WA),s(sn,FA),i(e,Q2,p),i(e,Ks,p),s(Ks,tn),s(tn,d1),m(fr,d1,null),s(Ks,BA),s(Ks,m1),s(m1,VA),i(e,eb,p),i(e,ts,p),s(ts,an),s(an,YA),s(an,Cu),s(Cu,KA),s(an,JA),s(an,_1),s(_1,XA),s(ts,QA),s(ts,dr),s(dr,eS),s(dr,mr),s(mr,sS),s(dr,tS),s(ts,aS),s(ts,Js),s(Js,nS),s(Js,xu),s(xu,oS),s(Js,lS),s(Js,_r),s(_r,rS),s(Js,pS),i(e,sb,p),i(e,Iu,p),i(e,tb,p),i(e,Xs,p),s(Xs,nn),s(nn,v1),m(vr,v1,null),s(Xs,iS),s(Xs,j1),s(j1,uS),i(e,ab,p),i(e,as,p),s(as,cS),s(as,Ru),s(Ru,hS),s(as,fS),s(as,Uu),s(Uu,dS),s(as,mS),i(e,nb,p),i(e,on,p),s(on,_S),s(on,Lu),s(Lu,vS),s(on,jS),i(e,ob,p),i(e,ns,p),s(ns,gS),s(ns,Zu),s(Zu,wS),s(ns,yS),s(ns,Gu),s(Gu,bS),s(ns,qS),i(e,lb,p),i(e,Mu,p),s(Mu,ES),i(e,rb,p),m(jr,e,p),i(e,pb,p),i(e,Nu,p),s(Nu,$S),i(e,ib,p),m(gr,e,p),i(e,ub,p),i(e,Qs,p),s(Qs,ln),s(ln,g1),m(wr,g1,null),s(Qs,kS),s(Qs,w1),s(w1,DS),i(e,cb,p),i(e,E,p),m(yr,E,null),s(E,PS),s(E,y1),s(y1,OS),s(E,zS),s(E,ye),s(ye,TS),s(ye,b1),s(b1,AS),s(ye,SS),s(ye,q1),s(q1,CS),s(ye,xS),s(ye,E1),s(E1,IS),s(ye,RS),s(E,US),s(E,le),s(le,Hu),s(Hu,LS),s(le,ZS),s(le,$1),s($1,GS),s(le,MS),s(le,Wu),s(Wu,NS),s(le,HS),s(le,k1),s(k1,WS),s(le,FS),s(E,BS),s(E,os),m(br,os,null),s(os,VS),s(os,D1),s(D1,YS),s(os,KS),s(os,et),s(et,JS),s(et,P1),s(P1,XS),s(et,QS),s(et,O1),s(O1,eC),s(et,sC),s(E,tC),s(E,rn),m(qr,rn,null),s(rn,aC),s(rn,Er),s(Er,nC),s(Er,z1),s(z1,oC),s(Er,lC),s(E,rC),s(E,pn),m($r,pn,null),s(pn,pC),s(pn,st),s(st,iC),s(st,T1),s(T1,uC),s(st,cC),s(st,A1),s(A1,hC),s(st,fC),s(E,dC),s(E,un),m(kr,un,null),s(un,mC),s(un,tt),s(tt,_C),s(tt,S1),s(S1,vC),s(tt,jC),s(tt,C1),s(C1,gC),s(tt,wC),i(e,hb,p),i(e,at,p),s(at,cn),s(cn,x1),m(Dr,x1,null),s(at,yC),s(at,I1),s(I1,bC),i(e,fb,p),i(e,re,p),s(re,R1),s(R1,Pr),s(Pr,qC),s(re,EC),s(re,U1),s(U1,Or),s(Or,$C),s(re,kC),s(re,L1),s(L1,zr),s(zr,DC),s(re,PC),s(re,Z1),s(Z1,Tr),s(Tr,OC),i(e,db,p),i(e,Fu,p),s(Fu,zC),i(e,mb,p),i(e,ls,p),s(ls,G1),s(G1,Ar),s(Ar,TC),s(ls,AC),s(ls,M1),s(M1,Sr),s(Sr,SC),s(ls,CC),s(ls,N1),s(N1,Cr),s(Cr,xC),i(e,_b,p),i(e,rs,p),s(rs,IC),s(rs,Bu),s(Bu,RC),s(rs,UC),s(rs,xr),s(xr,LC),s(rs,ZC),vb=!0},p(e,[p]){const Ir={};p&2&&(Ir.$$scope={dirty:p,ctx:e}),Lt.$set(Ir);const H1={};p&2&&(H1.$$scope={dirty:p,ctx:e}),Ra.$set(H1)},i(e){vb||(_(B.$$.fragment,e),_(An.$$.fragment,e),_(Sn.$$.fragment,e),_(Cn.$$.fragment,e),_(xn.$$.fragment,e),_(Un.$$.fragment,e),_(Ln.$$.fragment,e),_(Zn.$$.fragment,e),_(Mn.$$.fragment,e),_(Nn.$$.fragment,e),_(Hn.$$.fragment,e),_(Fn.$$.fragment,e),_(Vn.$$.fragment,e),_(Yn.$$.fragment,e),_(Jn.$$.fragment,e),_(Qn.$$.fragment,e),_(eo.$$.fragment,e),_(to.$$.fragment,e),_(oo.$$.fragment,e),_(lo.$$.fragment,e),_(ro.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(co.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(jo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(yo.$$.fragment,e),_(bo.$$.fragment,e),_(Lt.$$.fragment,e),_(Eo.$$.fragment,e),_(Po.$$.fragment,e),_(Oo.$$.fragment,e),_(zo.$$.fragment,e),_(To.$$.fragment,e),_(Go.$$.fragment,e),_(Mo.$$.fragment,e),_(Fo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(Qo.$$.fragment,e),_(el.$$.fragment,e),_(sl.$$.fragment,e),_(al.$$.fragment,e),_(pl.$$.fragment,e),_(il.$$.fragment,e),_(ul.$$.fragment,e),_(fl.$$.fragment,e),_(dl.$$.fragment,e),_(ml.$$.fragment,e),_(_l.$$.fragment,e),_(vl.$$.fragment,e),_(gl.$$.fragment,e),_(wl.$$.fragment,e),_(yl.$$.fragment,e),_(ql.$$.fragment,e),_(El.$$.fragment,e),_(kl.$$.fragment,e),_(Dl.$$.fragment,e),_(Pl.$$.fragment,e),_(Ol.$$.fragment,e),_(zl.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Sl.$$.fragment,e),_(Cl.$$.fragment,e),_(xl.$$.fragment,e),_(Il.$$.fragment,e),_(Ul.$$.fragment,e),_(Ll.$$.fragment,e),_(Ra.$$.fragment,e),_(Zl.$$.fragment,e),_(Gl.$$.fragment,e),_(Ml.$$.fragment,e),_(Hl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Bl.$$.fragment,e),_(Yl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(nr.$$.fragment,e),_(cr.$$.fragment,e),_(fr.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(gr.$$.fragment,e),_(wr.$$.fragment,e),_(yr.$$.fragment,e),_(br.$$.fragment,e),_(qr.$$.fragment,e),_($r.$$.fragment,e),_(kr.$$.fragment,e),_(Dr.$$.fragment,e),vb=!0)},o(e){v(B.$$.fragment,e),v(An.$$.fragment,e),v(Sn.$$.fragment,e),v(Cn.$$.fragment,e),v(xn.$$.fragment,e),v(Un.$$.fragment,e),v(Ln.$$.fragment,e),v(Zn.$$.fragment,e),v(Mn.$$.fragment,e),v(Nn.$$.fragment,e),v(Hn.$$.fragment,e),v(Fn.$$.fragment,e),v(Vn.$$.fragment,e),v(Yn.$$.fragment,e),v(Jn.$$.fragment,e),v(Qn.$$.fragment,e),v(eo.$$.fragment,e),v(to.$$.fragment,e),v(oo.$$.fragment,e),v(lo.$$.fragment,e),v(ro.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(co.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(jo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(yo.$$.fragment,e),v(bo.$$.fragment,e),v(Lt.$$.fragment,e),v(Eo.$$.fragment,e),v(Po.$$.fragment,e),v(Oo.$$.fragment,e),v(zo.$$.fragment,e),v(To.$$.fragment,e),v(Go.$$.fragment,e),v(Mo.$$.fragment,e),v(Fo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(Qo.$$.fragment,e),v(el.$$.fragment,e),v(sl.$$.fragment,e),v(al.$$.fragment,e),v(pl.$$.fragment,e),v(il.$$.fragment,e),v(ul.$$.fragment,e),v(fl.$$.fragment,e),v(dl.$$.fragment,e),v(ml.$$.fragment,e),v(_l.$$.fragment,e),v(vl.$$.fragment,e),v(gl.$$.fragment,e),v(wl.$$.fragment,e),v(yl.$$.fragment,e),v(ql.$$.fragment,e),v(El.$$.fragment,e),v(kl.$$.fragment,e),v(Dl.$$.fragment,e),v(Pl.$$.fragment,e),v(Ol.$$.fragment,e),v(zl.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Sl.$$.fragment,e),v(Cl.$$.fragment,e),v(xl.$$.fragment,e),v(Il.$$.fragment,e),v(Ul.$$.fragment,e),v(Ll.$$.fragment,e),v(Ra.$$.fragment,e),v(Zl.$$.fragment,e),v(Gl.$$.fragment,e),v(Ml.$$.fragment,e),v(Hl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Bl.$$.fragment,e),v(Yl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(nr.$$.fragment,e),v(cr.$$.fragment,e),v(fr.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(gr.$$.fragment,e),v(wr.$$.fragment,e),v(yr.$$.fragment,e),v(br.$$.fragment,e),v(qr.$$.fragment,e),v($r.$$.fragment,e),v(kr.$$.fragment,e),v(Dr.$$.fragment,e),vb=!1},d(e){t(y),e&&t(Z),e&&t(b),j(B),e&&t(ot),e&&t(V),e&&t(K1),e&&t(O),e&&t(J1),e&&t(qe),e&&t(X1),e&&t(Wr),e&&t(Q1),e&&t(Fr),e&&t(ev),e&&t(lt),e&&t(sv),e&&t(rt),e&&t(tv),e&&t(Kr),e&&t(av),e&&t(Jr),e&&t(nv),e&&t(Xr),e&&t(ov),e&&t(Qr),e&&t(lv),e&&t(ep),e&&t(rv),e&&t(tp),e&&t(pv),e&&t(ap),e&&t(iv),e&&t(ms),j(An),e&&t(uv),e&&t(np),e&&t(cv),e&&t(_s),j(Sn),e&&t(hv),e&&t(op),e&&t(fv),j(Cn,e),e&&t(dv),e&&t(Ee),e&&t(mv),j(xn,e),e&&t(_v),e&&t($e),e&&t(vv),e&&t(ut),e&&t(jv),e&&t(rp),e&&t(gv),e&&t(pp),e&&t(wv),j(Un,e),e&&t(yv),e&&t(ke),e&&t(bv),e&&t(ct),e&&t(qv),j(Ln,e),e&&t(Ev),e&&t(_e),e&&t($v),e&&t(ip),e&&t(kv),j(Zn,e),e&&t(Dv),e&&t(De),e&&t(Pv),e&&t(ht),e&&t(Ov),e&&t(Pe),e&&t(zv),e&&t(up),e&&t(Tv),j(Mn,e),e&&t(Av),e&&t(cp),e&&t(Sv),j(Nn,e),e&&t(Cv),e&&t(hp),e&&t(xv),j(Hn,e),e&&t(Iv),e&&t(ft),e&&t(Rv),e&&t(dt),e&&t(Uv),e&&t(mt),e&&t(Lv),e&&t(fp),e&&t(Zv),e&&t(vs),j(Fn),e&&t(Gv),e&&t(vt),e&&t(Mv),e&&t(jt),e&&t(Nv),e&&t(mp),e&&t(Hv),j(Vn,e),e&&t(Wv),e&&t(_p),e&&t(Fv),j(Yn,e),e&&t(Bv),e&&t(z),e&&t(Vv),e&&t(J),e&&t(Yv),e&&t(gt),e&&t(Kv),j(Jn,e),e&&t(Jv),e&&t(wt),e&&t(Xv),e&&t(yt),e&&t(Qv),e&&t(vp),e&&t(ej),e&&t(gs),j(Qn),e&&t(sj),e&&t(qt),e&&t(tj),j(eo,e),e&&t(aj),e&&t(Oe),e&&t(nj),e&&t(gp),e&&t(oj),e&&t(Et),e&&t(lj),e&&t(wp),e&&t(rj),j(to,e),e&&t(pj),e&&t(yp),e&&t(ij),e&&t($t),e&&t(uj),e&&t(bp),e&&t(cj),e&&t(qp),e&&t(hj),e&&t(Ep),j(oo),e&&t(fj),e&&t($p),e&&t(dj),e&&t(ys),j(lo),e&&t(mj),e&&t(Dt),e&&t(_j),e&&t(kp),e&&t(vj),j(ro,e),e&&t(jj),e&&t(Pt),e&&t(gj),e&&t(Dp),e&&t(wj),e&&t(Pp),e&&t(yj),j(po,e),e&&t(bj),e&&t(ze),e&&t(qj),j(io,e),e&&t(Ej),e&&t(Ot),e&&t($j),j(uo,e),e&&t(kj),e&&t(Op),e&&t(Dj),e&&t(zt),e&&t(Pj),e&&t(zp),e&&t(Oj),e&&t(bs),j(co),e&&t(zj),e&&t(At),e&&t(Tj),e&&t(St),e&&t(Aj),j(mo,e),e&&t(Sj),e&&t(Ct),e&&t(Cj),j(_o,e),e&&t(xj),e&&t(xt),e&&t(Ij),e&&t(Tp),e&&t(Rj),e&&t(X),e&&t(Uj),j(jo,e),e&&t(Lj),e&&t(It),e&&t(Zj),e&&t(Sp),e&&t(Gj),e&&t(qs),j(go),e&&t(Mj),e&&t(T),e&&t(Nj),e&&t(Rp),e&&t(Hj),j(wo,e),e&&t(Wj),e&&t(Up),e&&t(Fj),j(yo,e),e&&t(Bj),e&&t(Lp),e&&t(Vj),e&&t(Es),j(bo),e&&t(Yj),j(Lt,e),e&&t(Kj),e&&t(Te),e&&t(Jj),e&&t(Zt),e&&t(Xj),e&&t(Ae),e&&t(Qj),e&&t(Hp),e&&t(eg),e&&t(Gt),e&&t(sg),e&&t(Mt),e&&t(tg),e&&t(Q),e&&t(ag),e&&t(Vp),e&&t(ng),e&&t($s),j(Eo),e&&t(og),e&&t($o),e&&t(lg),e&&t(Se),e&&t(rg),e&&t(Ht),e&&t(pg),e&&t(Kp),e&&t(ig),e&&t(Jp),e&&t(ug),e&&t(ks),j(Po),e&&t(cg),e&&t(Xp),e&&t(hg),j(Oo,e),e&&t(fg),e&&t(Qp),e&&t(dg),e&&t(Ce),e&&t(mg),e&&t(ei),e&&t(_g),e&&t(Ps),j(zo),e&&t(vg),e&&t(si),e&&t(jg),j(To,e),e&&t(gg),e&&t(M),e&&t(wg),e&&t(xe),e&&t(yg),e&&t(ti),e&&t(bg),e&&t(Bt),e&&t(qg),e&&t(S),e&&t(Eg),e&&t(je),e&&t($g),e&&t(ai),e&&t(kg),e&&t(Ie),e&&t(Dg),e&&t(Re),e&&t(Pg),e&&t(Ro),e&&t(Og),e&&t(ee),e&&t(zg),e&&t(oi),e&&t(Tg),e&&t(ge),e&&t(Ag),e&&t(Ue),e&&t(Sg),e&&t(Vt),e&&t(Cg),e&&t(li),e&&t(xg),e&&t(Os),j(Go),e&&t(Ig),e&&t(ri),e&&t(Rg),e&&t(pi),e&&t(Ug),j(Mo,e),e&&t(Lg),e&&t(Kt),e&&t(Zg),e&&t(Le),e&&t(Gg),e&&t(Jt),e&&t(Mg),e&&t(Ze),e&&t(Ng),e&&t(ii),e&&t(Hg),e&&t(zs),j(Fo),e&&t(Wg),e&&t(ui),e&&t(Fg),e&&t(ci),e&&t(Bg),e&&t(Qt),e&&t(Vg),e&&t(Ge),e&&t(Yg),e&&t(hi),e&&t(Kg),e&&t(As),j(Vo),e&&t(Jg),e&&t(sa),e&&t(Xg),j(Yo,e),e&&t(Qg),e&&t(ta),e&&t(ew),j(Ko,e),e&&t(sw),e&&t(fi),e&&t(tw),e&&t(Ss),j(Jo),e&&t(aw),e&&t(na),e&&t(nw),j(Xo,e),e&&t(ow),e&&t(oa),e&&t(lw),j(Qo,e),e&&t(rw),e&&t(Cs),j(el),e&&t(pw),e&&t(ra),e&&t(iw),e&&t(di),e&&t(uw),e&&t(pa),e&&t(cw),e&&t(mi),e&&t(hw),e&&t(xs),j(sl),e&&t(fw),e&&t(Me),e&&t(dw),e&&t(q),e&&t(mw),e&&t(Ne),e&&t(_w),j(al,e),e&&t(vw),e&&t(vi),e&&t(jw),e&&t(se),e&&t(gw),e&&t(ji),e&&t(ww),e&&t(gi),e&&t(yw),j(pl,e),e&&t(bw),e&&t(ua),e&&t(qw),e&&t(yi),e&&t(Ew),j(il,e),e&&t($w),e&&t(te),e&&t(kw),e&&t(bi),e&&t(Dw),e&&t(Is),j(ul),e&&t(Pw),e&&t(C),e&&t(Ow),e&&t(qi),e&&t(zw),e&&t(ha),e&&t(Tw),e&&t(D),e&&t(Aw),e&&t(We),e&&t(Sw),j(fl,e),e&&t(Cw),e&&t(Fe),e&&t(xw),e&&t(ae),e&&t(Iw),e&&t(ki),e&&t(Rw),j(dl,e),e&&t(Uw),e&&t(ma),e&&t(Lw),e&&t(_a),e&&t(Zw),j(ml,e),e&&t(Gw),e&&t(N),e&&t(Mw),e&&t(Pi),e&&t(Nw),e&&t(Rs),j(_l),e&&t(Hw),e&&t(Oi),e&&t(Ww),e&&t(ja),e&&t(Fw),j(vl,e),e&&t(Bw),e&&t(ga),e&&t(Vw),e&&t(zi),e&&t(Yw),e&&t(Us),j(gl),e&&t(Kw),e&&t(Ti),e&&t(Jw),e&&t(Ai),e&&t(Xw),j(wl,e),e&&t(Qw),e&&t(Ye),e&&t(ey),e&&t(ya),e&&t(sy),e&&t(Ci),e&&t(ty),j(yl,e),e&&t(ay),e&&t(ba),e&&t(ny),e&&t(qa),e&&t(oy),e&&t(Ii),e&&t(ly),j(ql,e),e&&t(ry),e&&t(ne),e&&t(py),e&&t(Ea),e&&t(iy),e&&t(Ui),e&&t(uy),j(El,e),e&&t(cy),e&&t($a),e&&t(hy),e&&t(ka),e&&t(fy),e&&t(Zi),e&&t(dy),e&&t(Ls),j(kl),e&&t(my),e&&t(Gi),e&&t(_y),j(Dl,e),e&&t(vy),e&&t(x),e&&t(jy),e&&t(Ni),e&&t(gy),j(Pl,e),e&&t(wy),e&&t(Pa),e&&t(yy),e&&t(Wi),e&&t(by),e&&t(Zs),j(Ol),e&&t(qy),e&&t(Fi),e&&t(Ey),j(zl,e),e&&t($y),e&&t(Ke),e&&t(ky),e&&t(Vi),e&&t(Dy),j(Tl,e),e&&t(Py),e&&t(za),e&&t(Oy),e&&t(Ki),e&&t(zy),e&&t(Gs),j(Al),e&&t(Ty),e&&t(Ji),e&&t(Ay),j(Sl,e),e&&t(Sy),e&&t(Je),e&&t(Cy),e&&t(Qi),e&&t(xy),j(Cl,e),e&&t(Iy),e&&t(Aa),e&&t(Ry),e&&t(su),e&&t(Uy),e&&t(Ms),j(xl),e&&t(Ly),e&&t(Ca),e&&t(Zy),e&&t(tu),e&&t(Gy),e&&t(xa),e&&t(My),e&&t(H),e&&t(Ny),j(Il,e),e&&t(Hy),e&&t(au),e&&t(Wy),e&&t(Ia),e&&t(Fy),e&&t(nu),e&&t(By),e&&t(ou),e&&t(Vy),e&&t(lu),e&&t(Yy),j(Ul,e),e&&t(Ky),e&&t(Xe),e&&t(Jy),j(Ll,e),e&&t(Xy),j(Ra,e),e&&t(Qy),e&&t(Ua),e&&t(e2),e&&t(La),e&&t(s2),j(Zl,e),e&&t(t2),e&&t(ru),e&&t(a2),e&&t(Qe),e&&t(n2),e&&t(pu),e&&t(o2),j(Gl,e),e&&t(l2),e&&t(Za),e&&t(r2),j(Ml,e),e&&t(p2),e&&t(Ga),e&&t(i2),e&&t(iu),e&&t(u2),e&&t(Nl),e&&t(c2),e&&t(es),e&&t(h2),e&&t(uu),e&&t(f2),e&&t(Ns),j(Hl),e&&t(d2),e&&t(cu),e&&t(m2),e&&t(hu),e&&t(_2),e&&t(fu),e&&t(v2),e&&t(Hs),j(Wl),e&&t(j2),e&&t(Ha),e&&t(g2),j(Fl,e),e&&t(w2),e&&t(du),e&&t(y2),e&&t(k),e&&t(b2),j(Bl,e),e&&t(q2),e&&t(Wa),e&&t(E2),e&&t(vu),e&&t($2),e&&t(Fa),e&&t(k2),e&&t(oe),e&&t(D2),e&&t(Ws),j(Yl),e&&t(P2),e&&t(Kl),e&&t(O2),e&&t(Va),e&&t(z2),e&&t(gu),e&&t(T2),j(Xl,e),e&&t(A2),e&&t(ss),e&&t(S2),e&&t(wu),e&&t(C2),e&&t(Fs),j(Ql),e&&t(x2),e&&t(yu),e&&t(I2),e&&t(Ka),e&&t(R2),j(er,e),e&&t(U2),e&&t(qu),e&&t(L2),e&&t(Ja),e&&t(Z2),j(sr,e),e&&t(G2),e&&t(Eu),e&&t(M2),e&&t($u),e&&t(N2),e&&t(Bs),j(tr),e&&t(H2),e&&t(ku),e&&t(W2),e&&t(Du),e&&t(F2),e&&t(I),j(nr),e&&t(B2),e&&t(Tu),e&&t(V2),e&&t(Qa),e&&t(Y2),e&&t(Ys),j(cr),e&&t(K2),e&&t(Au),e&&t(J2),e&&t(W),e&&t(X2),e&&t(sn),e&&t(Q2),e&&t(Ks),j(fr),e&&t(eb),e&&t(ts),e&&t(sb),e&&t(Iu),e&&t(tb),e&&t(Xs),j(vr),e&&t(ab),e&&t(as),e&&t(nb),e&&t(on),e&&t(ob),e&&t(ns),e&&t(lb),e&&t(Mu),e&&t(rb),j(jr,e),e&&t(pb),e&&t(Nu),e&&t(ib),j(gr,e),e&&t(ub),e&&t(Qs),j(wr),e&&t(cb),e&&t(E),j(yr),j(br),j(qr),j($r),j(kr),e&&t(hb),e&&t(at),j(Dr),e&&t(fb),e&&t(re),e&&t(db),e&&t(Fu),e&&t(mb),e&&t(ls),e&&t(_b),e&&t(rs)}}}const rW={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function pW($n,y,Z){let{fw:b}=y;return $n.$$set=$=>{"fw"in $&&Z(0,b=$.fw)},[b]}class mW extends eW{constructor(y){super();sW(this,y,pW,lW,tW,{fw:0})}}export{mW as default,rW as metadata};
