import{S as Of,i as Cf,s as Af,e as n,k as i,w as f,t as r,M as Pf,c as s,d as t,m as l,a,x as _,h as d,b as c,F as e,g as h,y as g,q as b,o as T,B as v,v as Nf}from"../../chunks/vendor-6b77c823.js";import{T as go}from"../../chunks/Tip-39098574.js";import{D as $}from"../../chunks/Docstring-53452dc4.js";import{C as Ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _e}from"../../chunks/IconCopyLink-7a11ce68.js";function jf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function If(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Gf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Bf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Qf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,V,ne,Ie,R,Ge,Me,B,K,se,Le,S,A,be,ae,Se,Te,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),k=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),F=n("p"),Y=r("This second option is useful when using "),V=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Ge=r("model(inputs)"),Me=r("."),B=i(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),be=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),X=n("code"),Be=r("model(input_ids)"),Oe=i(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=i(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var z=a(u);L=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),k=l(m),E=s(m,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);je=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(m),F=s(m,"P",{});var I=a(F);Y=d(I,"This second option is useful when using "),V=s(I,"CODE",{});var rt=a(V);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Ge=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(m),K=s(m,"P",{});var Ce=a(K);se=d(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var ie=a(A);be=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Ae=a(ae);Se=d(Ae,"input_ids"),Ae.forEach(t),Te=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var it=a(X);Be=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Oe=l(J),O=s(J,"LI",{});var le=a(O);Qe=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ve,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),J.forEach(t)},m(m,z){h(m,u,z),e(u,L),h(m,k,z),h(m,E,z),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,z),h(m,F,z),e(F,Y),e(F,V),e(V,ne),e(F,Ie),e(F,R),e(R,Ge),e(F,Me),h(m,B,z),h(m,K,z),e(K,se),h(m,Le,z),h(m,S,z),e(S,A),e(A,be),e(A,ae),e(ae,Se),e(A,Te),e(A,X),e(X,Be),e(S,Oe),e(S,O),e(O,Qe),e(O,ee),e(ee,x),e(O,M),e(O,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(k),m&&t(E),m&&t(ge),m&&t(F),m&&t(B),m&&t(K),m&&t(Le),m&&t(S)}}}function Hf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Wf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,V,ne,Ie,R,Ge,Me,B,K,se,Le,S,A,be,ae,Se,Te,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),k=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),F=n("p"),Y=r("This second option is useful when using "),V=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Ge=r("model(inputs)"),Me=r("."),B=i(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),be=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),X=n("code"),Be=r("model(input_ids)"),Oe=i(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=i(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var z=a(u);L=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),k=l(m),E=s(m,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);je=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(m),F=s(m,"P",{});var I=a(F);Y=d(I,"This second option is useful when using "),V=s(I,"CODE",{});var rt=a(V);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Ge=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(m),K=s(m,"P",{});var Ce=a(K);se=d(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var ie=a(A);be=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Ae=a(ae);Se=d(Ae,"input_ids"),Ae.forEach(t),Te=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var it=a(X);Be=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Oe=l(J),O=s(J,"LI",{});var le=a(O);Qe=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ve,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),J.forEach(t)},m(m,z){h(m,u,z),e(u,L),h(m,k,z),h(m,E,z),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,z),h(m,F,z),e(F,Y),e(F,V),e(V,ne),e(F,Ie),e(F,R),e(R,Ge),e(F,Me),h(m,B,z),h(m,K,z),e(K,se),h(m,Le,z),h(m,S,z),e(S,A),e(A,be),e(A,ae),e(ae,Se),e(A,Te),e(A,X),e(X,Be),e(S,Oe),e(S,O),e(O,Qe),e(O,ee),e(ee,x),e(O,M),e(O,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(k),m&&t(E),m&&t(ge),m&&t(F),m&&t(B),m&&t(K),m&&t(Le),m&&t(S)}}}function Uf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Vf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,V,ne,Ie,R,Ge,Me,B,K,se,Le,S,A,be,ae,Se,Te,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De,m,z,de,st,at,I,rt,dt,Ce,J,ie,Ae,it,le,lt,ce,Ve,Re,Ad,Pd,Ss,Nd,jd,Id,Fe,Gd,Os,Bd,Qd,Cs,Hd,Wd,Kn,Ud,Vd,As,Rd,Kd,Xd,Z,Jd,Ps,Zd,Yd,Ns,ei,ti,Xn,oi,ni,js,si,ai,Is,ri,di,Gs,ii,li,ci,ct,hi,Bs,pi,ui,Qs,mi,fi,_i,bo,gi,To,bi,Ti,vi,vo,ki,ko,wi,yi,_r,Nt,Ei,wo,qi,Li,gr,ht,jt,Hs,yo,Di,Ws,Fi,br,C,Eo,zi,pt,$i,Jn,xi,Mi,qo,Si,Oi,Ci,ut,Ai,Zn,Pi,Ni,Yn,ji,Ii,Gi,Us,Bi,Qi,Lo,Hi,Vs,Rs,Ks,Xs,Wi,Ui,Js,Zs,Ys,It,Gt,ea,Do,Vi,ta,Ri,Ki,oa,na,Fo,Bt,Qt,sa,zo,Xi,aa,Ji,Zi,ra,Yi,el,da,ia,la,Ht,Wt,ca,$o,tl,ha,ol,Tr,mt,Ut,pa,xo,nl,ua,sl,vr,N,Mo,al,ma,rl,dl,Vt,es,il,ll,ts,cl,hl,pl,So,ul,os,ml,fl,_l,Ke,Oo,gl,fa,bl,Tl,Co,ns,vl,_a,kl,wl,ss,yl,ga,El,ql,Rt,Ao,Ll,Po,Dl,ba,Fl,zl,$l,Kt,No,xl,Ta,Ml,Sl,as,jo,kr,ft,Xt,va,Io,Ol,ka,Cl,wr,ze,Go,Al,Bo,Pl,wa,Nl,jl,Il,Jt,rs,Gl,Bl,ds,Ql,Hl,Wl,Qo,Ul,is,Vl,Rl,yr,_t,Zt,ya,Ho,Kl,Ea,Xl,Er,gt,Wo,Jl,qa,Zl,qr,bt,Uo,Yl,La,ec,Lr,Tt,Vo,tc,Da,oc,Dr,vt,Ro,nc,Fa,sc,Fr,kt,Ko,ac,za,rc,zr,wt,Xo,dc,$a,ic,$r,yt,Jo,lc,xa,cc,xr,Et,Zo,hc,Ma,pc,Mr,qt,Yt,Sa,Yo,uc,Oa,mc,Sr,$e,en,fc,tn,_c,ls,gc,bc,Tc,on,vc,nn,kc,wc,yc,ve,sn,Ec,Lt,qc,cs,Lc,Dc,Ca,Fc,zc,$c,eo,xc,Aa,Mc,Sc,an,Or,Dt,to,Pa,rn,Oc,Na,Cc,Cr,xe,dn,Ac,ln,Pc,hs,Nc,jc,Ic,cn,Gc,hn,Bc,Qc,Hc,H,pn,Wc,Ft,Uc,ps,Vc,Rc,ja,Kc,Xc,Jc,oo,Zc,Ia,Yc,eh,un,th,Ga,oh,nh,mn,Ar,zt,no,Ba,fn,sh,Qa,ah,Pr,he,_n,rh,Ha,dh,ih,gn,lh,us,ch,hh,ph,bn,uh,Tn,mh,fh,_h,P,vn,gh,$t,bh,ms,Th,vh,Wa,kh,wh,yh,so,Eh,Ua,qh,Lh,kn,Dh,wn,Fh,Va,zh,$h,yn,xh,En,Nr,xt,ao,Ra,qn,Mh,Ka,Sh,jr,pe,Ln,Oh,Mt,Ch,Xa,Ah,Ph,Ja,Nh,jh,Ih,Dn,Gh,fs,Bh,Qh,Hh,Fn,Wh,zn,Uh,Vh,Rh,te,$n,Kh,St,Xh,_s,Jh,Zh,Za,Yh,ep,tp,ro,op,Ya,np,sp,xn,ap,Mn,Ir,Ot,io,er,Sn,rp,tr,dp,Gr,ue,On,ip,Cn,lp,gs,cp,hp,pp,An,up,Pn,mp,fp,_p,lo,gp,ke,Nn,bp,Ct,Tp,bs,vp,kp,or,wp,yp,Ep,co,qp,nr,Lp,Dp,jn,Br,At,ho,sr,In,Fp,ar,zp,Qr,me,Gn,$p,Bn,xp,Ts,Mp,Sp,Op,Qn,Cp,Hn,Ap,Pp,Np,po,jp,we,Wn,Ip,Pt,Gp,vs,Bp,Qp,rr,Hp,Wp,Up,uo,Vp,dr,Rp,Kp,Un,Hr;return y=new _e({}),ne=new _e({}),yo=new _e({}),Eo=new $({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31"}}),Lo=new Ne({props:{code:"",highlighted:""}}),Do=new _e({}),zo=new _e({}),$o=new _e({}),xo=new _e({}),Mo=new $({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L43"}}),Oo=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new $({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L309"}}),Io=new _e({}),Go=new $({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Ho=new _e({}),Wo=new $({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1125"}}),Uo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1168"}}),Vo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1236"}}),Ro=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1303"}}),Ko=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1370"}}),Xo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1330"}}),Jo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1373"}}),Zo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1441"}}),Yo=new _e({}),en=new $({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2159"}}),sn=new $({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2186",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new go({props:{$$slots:{default:[jf]},$$scope:{ctx:G}}}),an=new Ne({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rn=new _e({}),dn=new $({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2282"}}),pn=new $({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2326",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new go({props:{$$slots:{default:[If]},$$scope:{ctx:G}}}),un=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),mn=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained("allenai/led-large-16384-arxiv")
tokenizer = LEDTokenizer.from_pretrained("allenai/led-large-16384-arxiv")

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
    results in a wide range of natural language tasks including generative language modeling
    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
    This success is partly due to the self-attention component which enables the network to capture contextual
    information from the entire sequence. While powerful, the memory and computational requirements of
    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
    process long sequences. To address this limitation, we present Longformer, a modified Transformer
    architecture with a self-attention operation that scales linearly with the sequence length, making it
    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
    long document classification, question answering (QA), and coreference resolution, where existing approaches
    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
    cross-partition information, and to mitigate this problem, existing methods often rely on complex
    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
    contextual representations of the entire context using multiple layers of attention, reducing the need for
    task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors="pt")

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=3, max_length=32)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new _e({}),_n=new $({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2473"}}),vn=new $({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2486",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new go({props:{$$slots:{default:[Gf]},$$scope:{ctx:G}}}),kn=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),wn=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),yn=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),En=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained(
    "allenai/led-base-16384", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),qn=new _e({}),Ln=new $({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2601"}}),$n=new $({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2613",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new go({props:{$$slots:{default:[Bf]},$$scope:{ctx:G}}}),xn=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Mn=new Ne({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Sn=new _e({}),On=new $({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2191"}}),lo=new go({props:{$$slots:{default:[Qf]},$$scope:{ctx:G}}}),Nn=new $({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2203",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new go({props:{$$slots:{default:[Hf]},$$scope:{ctx:G}}}),jn=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),In=new _e({}),Gn=new $({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2279"}}),po=new go({props:{$$slots:{default:[Wf]},$$scope:{ctx:G}}}),Wn=new $({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2312",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new go({props:{$$slots:{default:[Uf]},$$scope:{ctx:G}}}),Un=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=i(),k=n("h1"),E=n("a"),q=n("span"),f(y.$$.fragment),w=i(),D=n("span"),je=r("LED"),ge=i(),F=n("h2"),Y=n("a"),V=n("span"),f(ne.$$.fragment),Ie=i(),R=n("span"),Ge=r("Overview"),Me=i(),B=n("p"),K=r("The LED model was proposed in "),se=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=i(),be=n("p"),ae=r("The abstract from the paper is the following:"),Se=i(),Te=n("p"),X=n("em"),Be=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Oe=i(),O=n("p"),Qe=r("Tips:"),ee=i(),x=n("ul"),M=n("li"),Q=n("a"),He=r("LEDForConditionalGeneration"),We=r(` is an extension of
`),j=n("a"),Ue=r("BartForConditionalGeneration"),re=r(" exchanging the traditional "),De=n("em"),m=r("self-attention"),z=r(` layer with
`),de=n("em"),st=r("Longformer"),at=r("\u2019s "),I=n("em"),rt=r("chunked self-attention"),dt=r(" layer. "),Ce=n("a"),J=r("LEDTokenizer"),ie=r(` is an alias of
`),Ae=n("a"),it=r("BartTokenizer"),le=r("."),lt=i(),ce=n("li"),Ve=r("LED works very well on long-range "),Re=n("em"),Ad=r("sequence-to-sequence"),Pd=r(" tasks where the "),Ss=n("code"),Nd=r("input_ids"),jd=r(` largely exceed a length of
1024 tokens.`),Id=i(),Fe=n("li"),Gd=r("LED pads the "),Os=n("code"),Bd=r("input_ids"),Qd=r(" to be a multiple of "),Cs=n("code"),Hd=r("config.attention_window"),Wd=r(` if required. Therefore a small speed-up is
gained, when `),Kn=n("a"),Ud=r("LEDTokenizer"),Vd=r(" is used with the "),As=n("code"),Rd=r("pad_to_multiple_of"),Kd=r(" argument."),Xd=i(),Z=n("li"),Jd=r("LED makes use of "),Ps=n("em"),Zd=r("global attention"),Yd=r(" by means of the "),Ns=n("code"),ei=r("global_attention_mask"),ti=r(` (see
`),Xn=n("a"),oi=r("LongformerModel"),ni=r("). For summarization, it is advised to put "),js=n("em"),si=r("global attention"),ai=r(` only on the first
`),Is=n("code"),ri=r("<s>"),di=r(" token. For question answering, it is advised to put "),Gs=n("em"),ii=r("global attention"),li=r(" on all tokens of the question."),ci=i(),ct=n("li"),hi=r("To fine-tune LED on all 16384, it is necessary to enable "),Bs=n("em"),pi=r("gradient checkpointing"),ui=r(` by executing
`),Qs=n("code"),mi=r("model.gradient_checkpointing_enable()"),fi=r("."),_i=i(),bo=n("li"),gi=r("A notebook showing how to evaluate LED, can be accessed "),To=n("a"),bi=r("here"),Ti=r("."),vi=i(),vo=n("li"),ki=r("A notebook showing how to fine-tune LED, can be accessed "),ko=n("a"),wi=r("here"),yi=r("."),_r=i(),Nt=n("p"),Ei=r("This model was contributed by "),wo=n("a"),qi=r("patrickvonplaten"),Li=r("."),gr=i(),ht=n("h2"),jt=n("a"),Hs=n("span"),f(yo.$$.fragment),Di=i(),Ws=n("span"),Fi=r("LEDConfig"),br=i(),C=n("div"),f(Eo.$$.fragment),zi=i(),pt=n("p"),$i=r("This is the configuration class to store the configuration of a "),Jn=n("a"),xi=r("LEDModel"),Mi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Si=r("allenai/led-base-16384"),Oi=r(" architecture."),Ci=i(),ut=n("p"),Ai=r("Configuration objects inherit from "),Zn=n("a"),Pi=r("PretrainedConfig"),Ni=r(` and can be used to control the model outputs. Read the
documentation from `),Yn=n("a"),ji=r("PretrainedConfig"),Ii=r(" for more information."),Gi=i(),Us=n("p"),Bi=r("Example:"),Qi=i(),f(Lo.$$.fragment),Hi=i(),Vs=n("blockquote"),Rs=n("blockquote"),Ks=n("blockquote"),Xs=n("p"),Wi=r("from transformers import LEDModel, LEDConfig"),Ui=i(),Js=n("blockquote"),Zs=n("blockquote"),Ys=n("blockquote"),It=n("h1"),Gt=n("a"),ea=n("span"),f(Do.$$.fragment),Vi=i(),ta=n("span"),Ri=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Ki=i(),oa=n("blockquote"),na=n("blockquote"),Fo=n("blockquote"),Bt=n("h1"),Qt=n("a"),sa=n("span"),f(zo.$$.fragment),Xi=i(),aa=n("span"),Ji=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Zi=i(),ra=n("p"),Yi=r("LEDModel(configuration)"),el=i(),da=n("blockquote"),ia=n("blockquote"),la=n("blockquote"),Ht=n("h1"),Wt=n("a"),ca=n("span"),f($o.$$.fragment),tl=i(),ha=n("span"),ol=r("Accessing the model configuration >>> configuration = model.config"),Tr=i(),mt=n("h2"),Ut=n("a"),pa=n("span"),f(xo.$$.fragment),nl=i(),ua=n("span"),sl=r("LEDTokenizer"),vr=i(),N=n("div"),f(Mo.$$.fragment),al=i(),ma=n("p"),rl=r("Construct a LED tokenizer."),dl=i(),Vt=n("p"),es=n("a"),il=r("LEDTokenizer"),ll=r(" is identical to "),ts=n("a"),cl=r("BartTokenizer"),hl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),pl=i(),So=n("p"),ul=r("Refer to superclass "),os=n("a"),ml=r("BartTokenizer"),fl=r(" for usage examples and documentation concerning parameters."),_l=i(),Ke=n("div"),f(Oo.$$.fragment),gl=i(),fa=n("p"),bl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Tl=i(),Co=n("ul"),ns=n("li"),vl=r("single sequence: "),_a=n("code"),kl=r("<s> X </s>"),wl=i(),ss=n("li"),yl=r("pair of sequences: "),ga=n("code"),El=r("<s> A </s></s> B </s>"),ql=i(),Rt=n("div"),f(Ao.$$.fragment),Ll=i(),Po=n("p"),Dl=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ba=n("code"),Fl=r("prepare_for_model"),zl=r(" method."),$l=i(),Kt=n("div"),f(No.$$.fragment),xl=i(),Ta=n("p"),Ml=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Sl=i(),as=n("div"),f(jo.$$.fragment),kr=i(),ft=n("h2"),Xt=n("a"),va=n("span"),f(Io.$$.fragment),Ol=i(),ka=n("span"),Cl=r("LEDTokenizerFast"),wr=i(),ze=n("div"),f(Go.$$.fragment),Al=i(),Bo=n("p"),Pl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=n("em"),Nl=r("tokenizers"),jl=r(" library)."),Il=i(),Jt=n("p"),rs=n("a"),Gl=r("LEDTokenizerFast"),Bl=r(" is identical to "),ds=n("a"),Ql=r("BartTokenizerFast"),Hl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Wl=i(),Qo=n("p"),Ul=r("Refer to superclass "),is=n("a"),Vl=r("BartTokenizerFast"),Rl=r(" for usage examples and documentation concerning parameters."),yr=i(),_t=n("h2"),Zt=n("a"),ya=n("span"),f(Ho.$$.fragment),Kl=i(),Ea=n("span"),Xl=r("LED specific outputs"),Er=i(),gt=n("div"),f(Wo.$$.fragment),Jl=i(),qa=n("p"),Zl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),qr=i(),bt=n("div"),f(Uo.$$.fragment),Yl=i(),La=n("p"),ec=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lr=i(),Tt=n("div"),f(Vo.$$.fragment),tc=i(),Da=n("p"),oc=r("Base class for sequence-to-sequence language models outputs."),Dr=i(),vt=n("div"),f(Ro.$$.fragment),nc=i(),Fa=n("p"),sc=r("Base class for outputs of sequence-to-sequence sentence classification models."),Fr=i(),kt=n("div"),f(Ko.$$.fragment),ac=i(),za=n("p"),rc=r("Base class for outputs of sequence-to-sequence question answering models."),zr=i(),wt=n("div"),f(Xo.$$.fragment),dc=i(),$a=n("p"),ic=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),$r=i(),yt=n("div"),f(Jo.$$.fragment),lc=i(),xa=n("p"),cc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),xr=i(),Et=n("div"),f(Zo.$$.fragment),hc=i(),Ma=n("p"),pc=r("Base class for sequence-to-sequence language models outputs."),Mr=i(),qt=n("h2"),Yt=n("a"),Sa=n("span"),f(Yo.$$.fragment),uc=i(),Oa=n("span"),mc=r("LEDModel"),Sr=i(),$e=n("div"),f(en.$$.fragment),fc=i(),tn=n("p"),_c=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=n("a"),gc=r("PreTrainedModel"),bc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=i(),on=n("p"),vc=r("This model is also a PyTorch "),nn=n("a"),kc=r("torch.nn.Module"),wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc=i(),ve=n("div"),f(sn.$$.fragment),Ec=i(),Lt=n("p"),qc=r("The "),cs=n("a"),Lc=r("LEDModel"),Dc=r(" forward method, overrides the "),Ca=n("code"),Fc=r("__call__"),zc=r(" special method."),$c=i(),f(eo.$$.fragment),xc=i(),Aa=n("p"),Mc=r("Example:"),Sc=i(),f(an.$$.fragment),Or=i(),Dt=n("h2"),to=n("a"),Pa=n("span"),f(rn.$$.fragment),Oc=i(),Na=n("span"),Cc=r("LEDForConditionalGeneration"),Cr=i(),xe=n("div"),f(dn.$$.fragment),Ac=i(),ln=n("p"),Pc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=n("a"),Nc=r("PreTrainedModel"),jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=i(),cn=n("p"),Gc=r("This model is also a PyTorch "),hn=n("a"),Bc=r("torch.nn.Module"),Qc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc=i(),H=n("div"),f(pn.$$.fragment),Wc=i(),Ft=n("p"),Uc=r("The "),ps=n("a"),Vc=r("LEDForConditionalGeneration"),Rc=r(" forward method, overrides the "),ja=n("code"),Kc=r("__call__"),Xc=r(" special method."),Jc=i(),f(oo.$$.fragment),Zc=i(),Ia=n("p"),Yc=r("Conditional generation example:"),eh=i(),f(un.$$.fragment),th=i(),Ga=n("p"),oh=r("Summarization example:"),nh=i(),f(mn.$$.fragment),Ar=i(),zt=n("h2"),no=n("a"),Ba=n("span"),f(fn.$$.fragment),sh=i(),Qa=n("span"),ah=r("LEDForSequenceClassification"),Pr=i(),he=n("div"),f(_n.$$.fragment),rh=i(),Ha=n("p"),dh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ih=i(),gn=n("p"),lh=r("This model inherits from "),us=n("a"),ch=r("PreTrainedModel"),hh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph=i(),bn=n("p"),uh=r("This model is also a PyTorch "),Tn=n("a"),mh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=i(),P=n("div"),f(vn.$$.fragment),gh=i(),$t=n("p"),bh=r("The "),ms=n("a"),Th=r("LEDForSequenceClassification"),vh=r(" forward method, overrides the "),Wa=n("code"),kh=r("__call__"),wh=r(" special method."),yh=i(),f(so.$$.fragment),Eh=i(),Ua=n("p"),qh=r("Example of single-label classification:"),Lh=i(),f(kn.$$.fragment),Dh=i(),f(wn.$$.fragment),Fh=i(),Va=n("p"),zh=r("Example of multi-label classification:"),$h=i(),f(yn.$$.fragment),xh=i(),f(En.$$.fragment),Nr=i(),xt=n("h2"),ao=n("a"),Ra=n("span"),f(qn.$$.fragment),Mh=i(),Ka=n("span"),Sh=r("LEDForQuestionAnswering"),jr=i(),pe=n("div"),f(Ln.$$.fragment),Oh=i(),Mt=n("p"),Ch=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=n("code"),Ah=r("span start logits"),Ph=r(" and "),Ja=n("code"),Nh=r("span end logits"),jh=r(")."),Ih=i(),Dn=n("p"),Gh=r("This model inherits from "),fs=n("a"),Bh=r("PreTrainedModel"),Qh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=i(),Fn=n("p"),Wh=r("This model is also a PyTorch "),zn=n("a"),Uh=r("torch.nn.Module"),Vh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=i(),te=n("div"),f($n.$$.fragment),Kh=i(),St=n("p"),Xh=r("The "),_s=n("a"),Jh=r("LEDForQuestionAnswering"),Zh=r(" forward method, overrides the "),Za=n("code"),Yh=r("__call__"),ep=r(" special method."),tp=i(),f(ro.$$.fragment),op=i(),Ya=n("p"),np=r("Example:"),sp=i(),f(xn.$$.fragment),ap=i(),f(Mn.$$.fragment),Ir=i(),Ot=n("h2"),io=n("a"),er=n("span"),f(Sn.$$.fragment),rp=i(),tr=n("span"),dp=r("TFLEDModel"),Gr=i(),ue=n("div"),f(On.$$.fragment),ip=i(),Cn=n("p"),lp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=n("a"),cp=r("TFPreTrainedModel"),hp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=i(),An=n("p"),up=r("This model is also a "),Pn=n("a"),mp=r("tf.keras.Model"),fp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p=i(),f(lo.$$.fragment),gp=i(),ke=n("div"),f(Nn.$$.fragment),bp=i(),Ct=n("p"),Tp=r("The "),bs=n("a"),vp=r("TFLEDModel"),kp=r(" forward method, overrides the "),or=n("code"),wp=r("__call__"),yp=r(" special method."),Ep=i(),f(co.$$.fragment),qp=i(),nr=n("p"),Lp=r("Example:"),Dp=i(),f(jn.$$.fragment),Br=i(),At=n("h2"),ho=n("a"),sr=n("span"),f(In.$$.fragment),Fp=i(),ar=n("span"),zp=r("TFLEDForConditionalGeneration"),Qr=i(),me=n("div"),f(Gn.$$.fragment),$p=i(),Bn=n("p"),xp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ts=n("a"),Mp=r("TFPreTrainedModel"),Sp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op=i(),Qn=n("p"),Cp=r("This model is also a "),Hn=n("a"),Ap=r("tf.keras.Model"),Pp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Np=i(),f(po.$$.fragment),jp=i(),we=n("div"),f(Wn.$$.fragment),Ip=i(),Pt=n("p"),Gp=r("The "),vs=n("a"),Bp=r("TFLEDForConditionalGeneration"),Qp=r(" forward method, overrides the "),rr=n("code"),Hp=r("__call__"),Wp=r(" special method."),Up=i(),f(uo.$$.fragment),Vp=i(),dr=n("p"),Rp=r("Examples:"),Kp=i(),f(Un.$$.fragment),this.h()},l(o){const p=Pf('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),k=s(o,"H1",{class:!0});var Vn=a(k);E=s(Vn,"A",{id:!0,class:!0,href:!0});var ir=a(E);q=s(ir,"SPAN",{});var lr=a(q);_(y.$$.fragment,lr),lr.forEach(t),ir.forEach(t),w=l(Vn),D=s(Vn,"SPAN",{});var cr=a(D);je=d(cr,"LED"),cr.forEach(t),Vn.forEach(t),ge=l(o),F=s(o,"H2",{class:!0});var Rn=a(F);Y=s(Rn,"A",{id:!0,class:!0,href:!0});var hr=a(Y);V=s(hr,"SPAN",{});var pr=a(V);_(ne.$$.fragment,pr),pr.forEach(t),hr.forEach(t),Ie=l(Rn),R=s(Rn,"SPAN",{});var ur=a(R);Ge=d(ur,"Overview"),ur.forEach(t),Rn.forEach(t),Me=l(o),B=s(o,"P",{});var Wr=a(B);K=d(Wr,"The LED model was proposed in "),se=s(Wr,"A",{href:!0,rel:!0});var Zp=a(se);Le=d(Zp,"Longformer: The Long-Document Transformer"),Zp.forEach(t),S=d(Wr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Wr.forEach(t),A=l(o),be=s(o,"P",{});var Yp=a(be);ae=d(Yp,"The abstract from the paper is the following:"),Yp.forEach(t),Se=l(o),Te=s(o,"P",{});var eu=a(Te);X=s(eu,"EM",{});var tu=a(X);Be=d(tu,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),tu.forEach(t),eu.forEach(t),Oe=l(o),O=s(o,"P",{});var ou=a(O);Qe=d(ou,"Tips:"),ou.forEach(t),ee=l(o),x=s(o,"UL",{});var ye=a(x);M=s(ye,"LI",{});var fe=a(M);Q=s(fe,"A",{href:!0});var nu=a(Q);He=d(nu,"LEDForConditionalGeneration"),nu.forEach(t),We=d(fe,` is an extension of
`),j=s(fe,"A",{href:!0});var su=a(j);Ue=d(su,"BartForConditionalGeneration"),su.forEach(t),re=d(fe," exchanging the traditional "),De=s(fe,"EM",{});var au=a(De);m=d(au,"self-attention"),au.forEach(t),z=d(fe,` layer with
`),de=s(fe,"EM",{});var ru=a(de);st=d(ru,"Longformer"),ru.forEach(t),at=d(fe,"\u2019s "),I=s(fe,"EM",{});var du=a(I);rt=d(du,"chunked self-attention"),du.forEach(t),dt=d(fe," layer. "),Ce=s(fe,"A",{href:!0});var iu=a(Ce);J=d(iu,"LEDTokenizer"),iu.forEach(t),ie=d(fe,` is an alias of
`),Ae=s(fe,"A",{href:!0});var lu=a(Ae);it=d(lu,"BartTokenizer"),lu.forEach(t),le=d(fe,"."),fe.forEach(t),lt=l(ye),ce=s(ye,"LI",{});var ks=a(ce);Ve=d(ks,"LED works very well on long-range "),Re=s(ks,"EM",{});var cu=a(Re);Ad=d(cu,"sequence-to-sequence"),cu.forEach(t),Pd=d(ks," tasks where the "),Ss=s(ks,"CODE",{});var hu=a(Ss);Nd=d(hu,"input_ids"),hu.forEach(t),jd=d(ks,` largely exceed a length of
1024 tokens.`),ks.forEach(t),Id=l(ye),Fe=s(ye,"LI",{});var Xe=a(Fe);Gd=d(Xe,"LED pads the "),Os=s(Xe,"CODE",{});var pu=a(Os);Bd=d(pu,"input_ids"),pu.forEach(t),Qd=d(Xe," to be a multiple of "),Cs=s(Xe,"CODE",{});var uu=a(Cs);Hd=d(uu,"config.attention_window"),uu.forEach(t),Wd=d(Xe,` if required. Therefore a small speed-up is
gained, when `),Kn=s(Xe,"A",{href:!0});var mu=a(Kn);Ud=d(mu,"LEDTokenizer"),mu.forEach(t),Vd=d(Xe," is used with the "),As=s(Xe,"CODE",{});var fu=a(As);Rd=d(fu,"pad_to_multiple_of"),fu.forEach(t),Kd=d(Xe," argument."),Xe.forEach(t),Xd=l(ye),Z=s(ye,"LI",{});var Ee=a(Z);Jd=d(Ee,"LED makes use of "),Ps=s(Ee,"EM",{});var _u=a(Ps);Zd=d(_u,"global attention"),_u.forEach(t),Yd=d(Ee," by means of the "),Ns=s(Ee,"CODE",{});var gu=a(Ns);ei=d(gu,"global_attention_mask"),gu.forEach(t),ti=d(Ee,` (see
`),Xn=s(Ee,"A",{href:!0});var bu=a(Xn);oi=d(bu,"LongformerModel"),bu.forEach(t),ni=d(Ee,"). For summarization, it is advised to put "),js=s(Ee,"EM",{});var Tu=a(js);si=d(Tu,"global attention"),Tu.forEach(t),ai=d(Ee,` only on the first
`),Is=s(Ee,"CODE",{});var vu=a(Is);ri=d(vu,"<s>"),vu.forEach(t),di=d(Ee," token. For question answering, it is advised to put "),Gs=s(Ee,"EM",{});var ku=a(Gs);ii=d(ku,"global attention"),ku.forEach(t),li=d(Ee," on all tokens of the question."),Ee.forEach(t),ci=l(ye),ct=s(ye,"LI",{});var ws=a(ct);hi=d(ws,"To fine-tune LED on all 16384, it is necessary to enable "),Bs=s(ws,"EM",{});var wu=a(Bs);pi=d(wu,"gradient checkpointing"),wu.forEach(t),ui=d(ws,` by executing
`),Qs=s(ws,"CODE",{});var yu=a(Qs);mi=d(yu,"model.gradient_checkpointing_enable()"),yu.forEach(t),fi=d(ws,"."),ws.forEach(t),_i=l(ye),bo=s(ye,"LI",{});var Ur=a(bo);gi=d(Ur,"A notebook showing how to evaluate LED, can be accessed "),To=s(Ur,"A",{href:!0,rel:!0});var Eu=a(To);bi=d(Eu,"here"),Eu.forEach(t),Ti=d(Ur,"."),Ur.forEach(t),vi=l(ye),vo=s(ye,"LI",{});var Vr=a(vo);ki=d(Vr,"A notebook showing how to fine-tune LED, can be accessed "),ko=s(Vr,"A",{href:!0,rel:!0});var qu=a(ko);wi=d(qu,"here"),qu.forEach(t),yi=d(Vr,"."),Vr.forEach(t),ye.forEach(t),_r=l(o),Nt=s(o,"P",{});var Rr=a(Nt);Ei=d(Rr,"This model was contributed by "),wo=s(Rr,"A",{href:!0,rel:!0});var Lu=a(wo);qi=d(Lu,"patrickvonplaten"),Lu.forEach(t),Li=d(Rr,"."),Rr.forEach(t),gr=l(o),ht=s(o,"H2",{class:!0});var Kr=a(ht);jt=s(Kr,"A",{id:!0,class:!0,href:!0});var Du=a(jt);Hs=s(Du,"SPAN",{});var Fu=a(Hs);_(yo.$$.fragment,Fu),Fu.forEach(t),Du.forEach(t),Di=l(Kr),Ws=s(Kr,"SPAN",{});var zu=a(Ws);Fi=d(zu,"LEDConfig"),zu.forEach(t),Kr.forEach(t),br=l(o),C=s(o,"DIV",{class:!0});var W=a(C);_(Eo.$$.fragment,W),zi=l(W),pt=s(W,"P",{});var ys=a(pt);$i=d(ys,"This is the configuration class to store the configuration of a "),Jn=s(ys,"A",{href:!0});var $u=a(Jn);xi=d($u,"LEDModel"),$u.forEach(t),Mi=d(ys,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(ys,"A",{href:!0,rel:!0});var xu=a(qo);Si=d(xu,"allenai/led-base-16384"),xu.forEach(t),Oi=d(ys," architecture."),ys.forEach(t),Ci=l(W),ut=s(W,"P",{});var Es=a(ut);Ai=d(Es,"Configuration objects inherit from "),Zn=s(Es,"A",{href:!0});var Mu=a(Zn);Pi=d(Mu,"PretrainedConfig"),Mu.forEach(t),Ni=d(Es,` and can be used to control the model outputs. Read the
documentation from `),Yn=s(Es,"A",{href:!0});var Su=a(Yn);ji=d(Su,"PretrainedConfig"),Su.forEach(t),Ii=d(Es," for more information."),Es.forEach(t),Gi=l(W),Us=s(W,"P",{});var Ou=a(Us);Bi=d(Ou,"Example:"),Ou.forEach(t),Qi=l(W),_(Lo.$$.fragment,W),Hi=l(W),Vs=s(W,"BLOCKQUOTE",{});var Cu=a(Vs);Rs=s(Cu,"BLOCKQUOTE",{});var Au=a(Rs);Ks=s(Au,"BLOCKQUOTE",{});var Pu=a(Ks);Xs=s(Pu,"P",{});var Nu=a(Xs);Wi=d(Nu,"from transformers import LEDModel, LEDConfig"),Nu.forEach(t),Pu.forEach(t),Au.forEach(t),Cu.forEach(t),Ui=l(W),Js=s(W,"BLOCKQUOTE",{});var ju=a(Js);Zs=s(ju,"BLOCKQUOTE",{});var Iu=a(Zs);Ys=s(Iu,"BLOCKQUOTE",{});var Gu=a(Ys);It=s(Gu,"H1",{class:!0});var Xr=a(It);Gt=s(Xr,"A",{id:!0,class:!0,href:!0});var Bu=a(Gt);ea=s(Bu,"SPAN",{});var Qu=a(ea);_(Do.$$.fragment,Qu),Qu.forEach(t),Bu.forEach(t),Vi=l(Xr),ta=s(Xr,"SPAN",{});var Hu=a(ta);Ri=d(Hu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Hu.forEach(t),Xr.forEach(t),Gu.forEach(t),Iu.forEach(t),ju.forEach(t),Ki=l(W),oa=s(W,"BLOCKQUOTE",{});var Wu=a(oa);na=s(Wu,"BLOCKQUOTE",{});var Uu=a(na);Fo=s(Uu,"BLOCKQUOTE",{});var Jr=a(Fo);Bt=s(Jr,"H1",{class:!0});var Zr=a(Bt);Qt=s(Zr,"A",{id:!0,class:!0,href:!0});var Vu=a(Qt);sa=s(Vu,"SPAN",{});var Ru=a(sa);_(zo.$$.fragment,Ru),Ru.forEach(t),Vu.forEach(t),Xi=l(Zr),aa=s(Zr,"SPAN",{});var Ku=a(aa);Ji=d(Ku,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ku.forEach(t),Zr.forEach(t),Zi=l(Jr),ra=s(Jr,"P",{});var Xu=a(ra);Yi=d(Xu,"LEDModel(configuration)"),Xu.forEach(t),Jr.forEach(t),Uu.forEach(t),Wu.forEach(t),el=l(W),da=s(W,"BLOCKQUOTE",{});var Ju=a(da);ia=s(Ju,"BLOCKQUOTE",{});var Zu=a(ia);la=s(Zu,"BLOCKQUOTE",{});var Yu=a(la);Ht=s(Yu,"H1",{class:!0});var Yr=a(Ht);Wt=s(Yr,"A",{id:!0,class:!0,href:!0});var em=a(Wt);ca=s(em,"SPAN",{});var tm=a(ca);_($o.$$.fragment,tm),tm.forEach(t),em.forEach(t),tl=l(Yr),ha=s(Yr,"SPAN",{});var om=a(ha);ol=d(om,"Accessing the model configuration >>> configuration = model.config"),om.forEach(t),Yr.forEach(t),Yu.forEach(t),Zu.forEach(t),Ju.forEach(t),W.forEach(t),Tr=l(o),mt=s(o,"H2",{class:!0});var ed=a(mt);Ut=s(ed,"A",{id:!0,class:!0,href:!0});var nm=a(Ut);pa=s(nm,"SPAN",{});var sm=a(pa);_(xo.$$.fragment,sm),sm.forEach(t),nm.forEach(t),nl=l(ed),ua=s(ed,"SPAN",{});var am=a(ua);sl=d(am,"LEDTokenizer"),am.forEach(t),ed.forEach(t),vr=l(o),N=s(o,"DIV",{class:!0});var oe=a(N);_(Mo.$$.fragment,oe),al=l(oe),ma=s(oe,"P",{});var rm=a(ma);rl=d(rm,"Construct a LED tokenizer."),rm.forEach(t),dl=l(oe),Vt=s(oe,"P",{});var mr=a(Vt);es=s(mr,"A",{href:!0});var dm=a(es);il=d(dm,"LEDTokenizer"),dm.forEach(t),ll=d(mr," is identical to "),ts=s(mr,"A",{href:!0});var im=a(ts);cl=d(im,"BartTokenizer"),im.forEach(t),hl=d(mr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),mr.forEach(t),pl=l(oe),So=s(oe,"P",{});var td=a(So);ul=d(td,"Refer to superclass "),os=s(td,"A",{href:!0});var lm=a(os);ml=d(lm,"BartTokenizer"),lm.forEach(t),fl=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),_l=l(oe),Ke=s(oe,"DIV",{class:!0});var qs=a(Ke);_(Oo.$$.fragment,qs),gl=l(qs),fa=s(qs,"P",{});var cm=a(fa);bl=d(cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),cm.forEach(t),Tl=l(qs),Co=s(qs,"UL",{});var od=a(Co);ns=s(od,"LI",{});var Xp=a(ns);vl=d(Xp,"single sequence: "),_a=s(Xp,"CODE",{});var hm=a(_a);kl=d(hm,"<s> X </s>"),hm.forEach(t),Xp.forEach(t),wl=l(od),ss=s(od,"LI",{});var Jp=a(ss);yl=d(Jp,"pair of sequences: "),ga=s(Jp,"CODE",{});var pm=a(ga);El=d(pm,"<s> A </s></s> B </s>"),pm.forEach(t),Jp.forEach(t),od.forEach(t),qs.forEach(t),ql=l(oe),Rt=s(oe,"DIV",{class:!0});var nd=a(Rt);_(Ao.$$.fragment,nd),Ll=l(nd),Po=s(nd,"P",{});var sd=a(Po);Dl=d(sd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ba=s(sd,"CODE",{});var um=a(ba);Fl=d(um,"prepare_for_model"),um.forEach(t),zl=d(sd," method."),sd.forEach(t),nd.forEach(t),$l=l(oe),Kt=s(oe,"DIV",{class:!0});var ad=a(Kt);_(No.$$.fragment,ad),xl=l(ad),Ta=s(ad,"P",{});var mm=a(Ta);Ml=d(mm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),mm.forEach(t),ad.forEach(t),Sl=l(oe),as=s(oe,"DIV",{class:!0});var fm=a(as);_(jo.$$.fragment,fm),fm.forEach(t),oe.forEach(t),kr=l(o),ft=s(o,"H2",{class:!0});var rd=a(ft);Xt=s(rd,"A",{id:!0,class:!0,href:!0});var _m=a(Xt);va=s(_m,"SPAN",{});var gm=a(va);_(Io.$$.fragment,gm),gm.forEach(t),_m.forEach(t),Ol=l(rd),ka=s(rd,"SPAN",{});var bm=a(ka);Cl=d(bm,"LEDTokenizerFast"),bm.forEach(t),rd.forEach(t),wr=l(o),ze=s(o,"DIV",{class:!0});var mo=a(ze);_(Go.$$.fragment,mo),Al=l(mo),Bo=s(mo,"P",{});var dd=a(Bo);Pl=d(dd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=s(dd,"EM",{});var Tm=a(wa);Nl=d(Tm,"tokenizers"),Tm.forEach(t),jl=d(dd," library)."),dd.forEach(t),Il=l(mo),Jt=s(mo,"P",{});var fr=a(Jt);rs=s(fr,"A",{href:!0});var vm=a(rs);Gl=d(vm,"LEDTokenizerFast"),vm.forEach(t),Bl=d(fr," is identical to "),ds=s(fr,"A",{href:!0});var km=a(ds);Ql=d(km,"BartTokenizerFast"),km.forEach(t),Hl=d(fr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),fr.forEach(t),Wl=l(mo),Qo=s(mo,"P",{});var id=a(Qo);Ul=d(id,"Refer to superclass "),is=s(id,"A",{href:!0});var wm=a(is);Vl=d(wm,"BartTokenizerFast"),wm.forEach(t),Rl=d(id," for usage examples and documentation concerning parameters."),id.forEach(t),mo.forEach(t),yr=l(o),_t=s(o,"H2",{class:!0});var ld=a(_t);Zt=s(ld,"A",{id:!0,class:!0,href:!0});var ym=a(Zt);ya=s(ym,"SPAN",{});var Em=a(ya);_(Ho.$$.fragment,Em),Em.forEach(t),ym.forEach(t),Kl=l(ld),Ea=s(ld,"SPAN",{});var qm=a(Ea);Xl=d(qm,"LED specific outputs"),qm.forEach(t),ld.forEach(t),Er=l(o),gt=s(o,"DIV",{class:!0});var cd=a(gt);_(Wo.$$.fragment,cd),Jl=l(cd),qa=s(cd,"P",{});var Lm=a(qa);Zl=d(Lm,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Lm.forEach(t),cd.forEach(t),qr=l(o),bt=s(o,"DIV",{class:!0});var hd=a(bt);_(Uo.$$.fragment,hd),Yl=l(hd),La=s(hd,"P",{});var Dm=a(La);ec=d(Dm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dm.forEach(t),hd.forEach(t),Lr=l(o),Tt=s(o,"DIV",{class:!0});var pd=a(Tt);_(Vo.$$.fragment,pd),tc=l(pd),Da=s(pd,"P",{});var Fm=a(Da);oc=d(Fm,"Base class for sequence-to-sequence language models outputs."),Fm.forEach(t),pd.forEach(t),Dr=l(o),vt=s(o,"DIV",{class:!0});var ud=a(vt);_(Ro.$$.fragment,ud),nc=l(ud),Fa=s(ud,"P",{});var zm=a(Fa);sc=d(zm,"Base class for outputs of sequence-to-sequence sentence classification models."),zm.forEach(t),ud.forEach(t),Fr=l(o),kt=s(o,"DIV",{class:!0});var md=a(kt);_(Ko.$$.fragment,md),ac=l(md),za=s(md,"P",{});var $m=a(za);rc=d($m,"Base class for outputs of sequence-to-sequence question answering models."),$m.forEach(t),md.forEach(t),zr=l(o),wt=s(o,"DIV",{class:!0});var fd=a(wt);_(Xo.$$.fragment,fd),dc=l(fd),$a=s(fd,"P",{});var xm=a($a);ic=d(xm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),xm.forEach(t),fd.forEach(t),$r=l(o),yt=s(o,"DIV",{class:!0});var _d=a(yt);_(Jo.$$.fragment,_d),lc=l(_d),xa=s(_d,"P",{});var Mm=a(xa);cc=d(Mm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Mm.forEach(t),_d.forEach(t),xr=l(o),Et=s(o,"DIV",{class:!0});var gd=a(Et);_(Zo.$$.fragment,gd),hc=l(gd),Ma=s(gd,"P",{});var Sm=a(Ma);pc=d(Sm,"Base class for sequence-to-sequence language models outputs."),Sm.forEach(t),gd.forEach(t),Mr=l(o),qt=s(o,"H2",{class:!0});var bd=a(qt);Yt=s(bd,"A",{id:!0,class:!0,href:!0});var Om=a(Yt);Sa=s(Om,"SPAN",{});var Cm=a(Sa);_(Yo.$$.fragment,Cm),Cm.forEach(t),Om.forEach(t),uc=l(bd),Oa=s(bd,"SPAN",{});var Am=a(Oa);mc=d(Am,"LEDModel"),Am.forEach(t),bd.forEach(t),Sr=l(o),$e=s(o,"DIV",{class:!0});var fo=a($e);_(en.$$.fragment,fo),fc=l(fo),tn=s(fo,"P",{});var Td=a(tn);_c=d(Td,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=s(Td,"A",{href:!0});var Pm=a(ls);gc=d(Pm,"PreTrainedModel"),Pm.forEach(t),bc=d(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),Tc=l(fo),on=s(fo,"P",{});var vd=a(on);vc=d(vd,"This model is also a PyTorch "),nn=s(vd,"A",{href:!0,rel:!0});var Nm=a(nn);kc=d(Nm,"torch.nn.Module"),Nm.forEach(t),wc=d(vd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vd.forEach(t),yc=l(fo),ve=s(fo,"DIV",{class:!0});var Je=a(ve);_(sn.$$.fragment,Je),Ec=l(Je),Lt=s(Je,"P",{});var Ls=a(Lt);qc=d(Ls,"The "),cs=s(Ls,"A",{href:!0});var jm=a(cs);Lc=d(jm,"LEDModel"),jm.forEach(t),Dc=d(Ls," forward method, overrides the "),Ca=s(Ls,"CODE",{});var Im=a(Ca);Fc=d(Im,"__call__"),Im.forEach(t),zc=d(Ls," special method."),Ls.forEach(t),$c=l(Je),_(eo.$$.fragment,Je),xc=l(Je),Aa=s(Je,"P",{});var Gm=a(Aa);Mc=d(Gm,"Example:"),Gm.forEach(t),Sc=l(Je),_(an.$$.fragment,Je),Je.forEach(t),fo.forEach(t),Or=l(o),Dt=s(o,"H2",{class:!0});var kd=a(Dt);to=s(kd,"A",{id:!0,class:!0,href:!0});var Bm=a(to);Pa=s(Bm,"SPAN",{});var Qm=a(Pa);_(rn.$$.fragment,Qm),Qm.forEach(t),Bm.forEach(t),Oc=l(kd),Na=s(kd,"SPAN",{});var Hm=a(Na);Cc=d(Hm,"LEDForConditionalGeneration"),Hm.forEach(t),kd.forEach(t),Cr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);_(dn.$$.fragment,_o),Ac=l(_o),ln=s(_o,"P",{});var wd=a(ln);Pc=d(wd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(wd,"A",{href:!0});var Wm=a(hs);Nc=d(Wm,"PreTrainedModel"),Wm.forEach(t),jc=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),Ic=l(_o),cn=s(_o,"P",{});var yd=a(cn);Gc=d(yd,"This model is also a PyTorch "),hn=s(yd,"A",{href:!0,rel:!0});var Um=a(hn);Bc=d(Um,"torch.nn.Module"),Um.forEach(t),Qc=d(yd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yd.forEach(t),Hc=l(_o),H=s(_o,"DIV",{class:!0});var qe=a(H);_(pn.$$.fragment,qe),Wc=l(qe),Ft=s(qe,"P",{});var Ds=a(Ft);Uc=d(Ds,"The "),ps=s(Ds,"A",{href:!0});var Vm=a(ps);Vc=d(Vm,"LEDForConditionalGeneration"),Vm.forEach(t),Rc=d(Ds," forward method, overrides the "),ja=s(Ds,"CODE",{});var Rm=a(ja);Kc=d(Rm,"__call__"),Rm.forEach(t),Xc=d(Ds," special method."),Ds.forEach(t),Jc=l(qe),_(oo.$$.fragment,qe),Zc=l(qe),Ia=s(qe,"P",{});var Km=a(Ia);Yc=d(Km,"Conditional generation example:"),Km.forEach(t),eh=l(qe),_(un.$$.fragment,qe),th=l(qe),Ga=s(qe,"P",{});var Xm=a(Ga);oh=d(Xm,"Summarization example:"),Xm.forEach(t),nh=l(qe),_(mn.$$.fragment,qe),qe.forEach(t),_o.forEach(t),Ar=l(o),zt=s(o,"H2",{class:!0});var Ed=a(zt);no=s(Ed,"A",{id:!0,class:!0,href:!0});var Jm=a(no);Ba=s(Jm,"SPAN",{});var Zm=a(Ba);_(fn.$$.fragment,Zm),Zm.forEach(t),Jm.forEach(t),sh=l(Ed),Qa=s(Ed,"SPAN",{});var Ym=a(Qa);ah=d(Ym,"LEDForSequenceClassification"),Ym.forEach(t),Ed.forEach(t),Pr=l(o),he=s(o,"DIV",{class:!0});var Ze=a(he);_(_n.$$.fragment,Ze),rh=l(Ze),Ha=s(Ze,"P",{});var ef=a(Ha);dh=d(ef,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ef.forEach(t),ih=l(Ze),gn=s(Ze,"P",{});var qd=a(gn);lh=d(qd,"This model inherits from "),us=s(qd,"A",{href:!0});var tf=a(us);ch=d(tf,"PreTrainedModel"),tf.forEach(t),hh=d(qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd.forEach(t),ph=l(Ze),bn=s(Ze,"P",{});var Ld=a(bn);uh=d(Ld,"This model is also a PyTorch "),Tn=s(Ld,"A",{href:!0,rel:!0});var of=a(Tn);mh=d(of,"torch.nn.Module"),of.forEach(t),fh=d(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),_h=l(Ze),P=s(Ze,"DIV",{class:!0});var U=a(P);_(vn.$$.fragment,U),gh=l(U),$t=s(U,"P",{});var Fs=a($t);bh=d(Fs,"The "),ms=s(Fs,"A",{href:!0});var nf=a(ms);Th=d(nf,"LEDForSequenceClassification"),nf.forEach(t),vh=d(Fs," forward method, overrides the "),Wa=s(Fs,"CODE",{});var sf=a(Wa);kh=d(sf,"__call__"),sf.forEach(t),wh=d(Fs," special method."),Fs.forEach(t),yh=l(U),_(so.$$.fragment,U),Eh=l(U),Ua=s(U,"P",{});var af=a(Ua);qh=d(af,"Example of single-label classification:"),af.forEach(t),Lh=l(U),_(kn.$$.fragment,U),Dh=l(U),_(wn.$$.fragment,U),Fh=l(U),Va=s(U,"P",{});var rf=a(Va);zh=d(rf,"Example of multi-label classification:"),rf.forEach(t),$h=l(U),_(yn.$$.fragment,U),xh=l(U),_(En.$$.fragment,U),U.forEach(t),Ze.forEach(t),Nr=l(o),xt=s(o,"H2",{class:!0});var Dd=a(xt);ao=s(Dd,"A",{id:!0,class:!0,href:!0});var df=a(ao);Ra=s(df,"SPAN",{});var lf=a(Ra);_(qn.$$.fragment,lf),lf.forEach(t),df.forEach(t),Mh=l(Dd),Ka=s(Dd,"SPAN",{});var cf=a(Ka);Sh=d(cf,"LEDForQuestionAnswering"),cf.forEach(t),Dd.forEach(t),jr=l(o),pe=s(o,"DIV",{class:!0});var Ye=a(pe);_(Ln.$$.fragment,Ye),Oh=l(Ye),Mt=s(Ye,"P",{});var zs=a(Mt);Ch=d(zs,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=s(zs,"CODE",{});var hf=a(Xa);Ah=d(hf,"span start logits"),hf.forEach(t),Ph=d(zs," and "),Ja=s(zs,"CODE",{});var pf=a(Ja);Nh=d(pf,"span end logits"),pf.forEach(t),jh=d(zs,")."),zs.forEach(t),Ih=l(Ye),Dn=s(Ye,"P",{});var Fd=a(Dn);Gh=d(Fd,"This model inherits from "),fs=s(Fd,"A",{href:!0});var uf=a(fs);Bh=d(uf,"PreTrainedModel"),uf.forEach(t),Qh=d(Fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd.forEach(t),Hh=l(Ye),Fn=s(Ye,"P",{});var zd=a(Fn);Wh=d(zd,"This model is also a PyTorch "),zn=s(zd,"A",{href:!0,rel:!0});var mf=a(zn);Uh=d(mf,"torch.nn.Module"),mf.forEach(t),Vh=d(zd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zd.forEach(t),Rh=l(Ye),te=s(Ye,"DIV",{class:!0});var Pe=a(te);_($n.$$.fragment,Pe),Kh=l(Pe),St=s(Pe,"P",{});var $s=a(St);Xh=d($s,"The "),_s=s($s,"A",{href:!0});var ff=a(_s);Jh=d(ff,"LEDForQuestionAnswering"),ff.forEach(t),Zh=d($s," forward method, overrides the "),Za=s($s,"CODE",{});var _f=a(Za);Yh=d(_f,"__call__"),_f.forEach(t),ep=d($s," special method."),$s.forEach(t),tp=l(Pe),_(ro.$$.fragment,Pe),op=l(Pe),Ya=s(Pe,"P",{});var gf=a(Ya);np=d(gf,"Example:"),gf.forEach(t),sp=l(Pe),_(xn.$$.fragment,Pe),ap=l(Pe),_(Mn.$$.fragment,Pe),Pe.forEach(t),Ye.forEach(t),Ir=l(o),Ot=s(o,"H2",{class:!0});var $d=a(Ot);io=s($d,"A",{id:!0,class:!0,href:!0});var bf=a(io);er=s(bf,"SPAN",{});var Tf=a(er);_(Sn.$$.fragment,Tf),Tf.forEach(t),bf.forEach(t),rp=l($d),tr=s($d,"SPAN",{});var vf=a(tr);dp=d(vf,"TFLEDModel"),vf.forEach(t),$d.forEach(t),Gr=l(o),ue=s(o,"DIV",{class:!0});var et=a(ue);_(On.$$.fragment,et),ip=l(et),Cn=s(et,"P",{});var xd=a(Cn);lp=d(xd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=s(xd,"A",{href:!0});var kf=a(gs);cp=d(kf,"TFPreTrainedModel"),kf.forEach(t),hp=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),pp=l(et),An=s(et,"P",{});var Md=a(An);up=d(Md,"This model is also a "),Pn=s(Md,"A",{href:!0,rel:!0});var wf=a(Pn);mp=d(wf,"tf.keras.Model"),wf.forEach(t),fp=d(Md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Md.forEach(t),_p=l(et),_(lo.$$.fragment,et),gp=l(et),ke=s(et,"DIV",{class:!0});var tt=a(ke);_(Nn.$$.fragment,tt),bp=l(tt),Ct=s(tt,"P",{});var xs=a(Ct);Tp=d(xs,"The "),bs=s(xs,"A",{href:!0});var yf=a(bs);vp=d(yf,"TFLEDModel"),yf.forEach(t),kp=d(xs," forward method, overrides the "),or=s(xs,"CODE",{});var Ef=a(or);wp=d(Ef,"__call__"),Ef.forEach(t),yp=d(xs," special method."),xs.forEach(t),Ep=l(tt),_(co.$$.fragment,tt),qp=l(tt),nr=s(tt,"P",{});var qf=a(nr);Lp=d(qf,"Example:"),qf.forEach(t),Dp=l(tt),_(jn.$$.fragment,tt),tt.forEach(t),et.forEach(t),Br=l(o),At=s(o,"H2",{class:!0});var Sd=a(At);ho=s(Sd,"A",{id:!0,class:!0,href:!0});var Lf=a(ho);sr=s(Lf,"SPAN",{});var Df=a(sr);_(In.$$.fragment,Df),Df.forEach(t),Lf.forEach(t),Fp=l(Sd),ar=s(Sd,"SPAN",{});var Ff=a(ar);zp=d(Ff,"TFLEDForConditionalGeneration"),Ff.forEach(t),Sd.forEach(t),Qr=l(o),me=s(o,"DIV",{class:!0});var ot=a(me);_(Gn.$$.fragment,ot),$p=l(ot),Bn=s(ot,"P",{});var Od=a(Bn);xp=d(Od,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ts=s(Od,"A",{href:!0});var zf=a(Ts);Mp=d(zf,"TFPreTrainedModel"),zf.forEach(t),Sp=d(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),Op=l(ot),Qn=s(ot,"P",{});var Cd=a(Qn);Cp=d(Cd,"This model is also a "),Hn=s(Cd,"A",{href:!0,rel:!0});var $f=a(Hn);Ap=d($f,"tf.keras.Model"),$f.forEach(t),Pp=d(Cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cd.forEach(t),Np=l(ot),_(po.$$.fragment,ot),jp=l(ot),we=s(ot,"DIV",{class:!0});var nt=a(we);_(Wn.$$.fragment,nt),Ip=l(nt),Pt=s(nt,"P",{});var Ms=a(Pt);Gp=d(Ms,"The "),vs=s(Ms,"A",{href:!0});var xf=a(vs);Bp=d(xf,"TFLEDForConditionalGeneration"),xf.forEach(t),Qp=d(Ms," forward method, overrides the "),rr=s(Ms,"CODE",{});var Mf=a(rr);Hp=d(Mf,"__call__"),Mf.forEach(t),Wp=d(Ms," special method."),Ms.forEach(t),Up=l(nt),_(uo.$$.fragment,nt),Vp=l(nt),dr=s(nt,"P",{});var Sf=a(dr);Rp=d(Sf,"Examples:"),Sf.forEach(t),Kp=l(nt),_(Un.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Rf)),c(E,"id","led"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#led"),c(k,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(F,"class","relative group"),c(se,"href","https://arxiv.org/abs/2004.05150"),c(se,"rel","nofollow"),c(Q,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(j,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Ce,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Ae,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Kn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Xn,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),c(To,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(To,"rel","nofollow"),c(ko,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(ko,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ht,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Zn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Gt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Bt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(mt,"class","relative group"),c(es,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(ts,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(os,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(as,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(rs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizerFast"),c(ds,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c(is,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(_t,"class","relative group"),c(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(qt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Dt,"class","relative group"),c(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(ps,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(us,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tn,"rel","nofollow"),c(ms,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c(xt,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(Ot,"class","relative group"),c(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(bs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(At,"class","relative group"),c(Ts,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hn,"rel","nofollow"),c(vs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,u),h(o,L,p),h(o,k,p),e(k,E),e(E,q),g(y,q,null),e(k,w),e(k,D),e(D,je),h(o,ge,p),h(o,F,p),e(F,Y),e(Y,V),g(ne,V,null),e(F,Ie),e(F,R),e(R,Ge),h(o,Me,p),h(o,B,p),e(B,K),e(B,se),e(se,Le),e(B,S),h(o,A,p),h(o,be,p),e(be,ae),h(o,Se,p),h(o,Te,p),e(Te,X),e(X,Be),h(o,Oe,p),h(o,O,p),e(O,Qe),h(o,ee,p),h(o,x,p),e(x,M),e(M,Q),e(Q,He),e(M,We),e(M,j),e(j,Ue),e(M,re),e(M,De),e(De,m),e(M,z),e(M,de),e(de,st),e(M,at),e(M,I),e(I,rt),e(M,dt),e(M,Ce),e(Ce,J),e(M,ie),e(M,Ae),e(Ae,it),e(M,le),e(x,lt),e(x,ce),e(ce,Ve),e(ce,Re),e(Re,Ad),e(ce,Pd),e(ce,Ss),e(Ss,Nd),e(ce,jd),e(x,Id),e(x,Fe),e(Fe,Gd),e(Fe,Os),e(Os,Bd),e(Fe,Qd),e(Fe,Cs),e(Cs,Hd),e(Fe,Wd),e(Fe,Kn),e(Kn,Ud),e(Fe,Vd),e(Fe,As),e(As,Rd),e(Fe,Kd),e(x,Xd),e(x,Z),e(Z,Jd),e(Z,Ps),e(Ps,Zd),e(Z,Yd),e(Z,Ns),e(Ns,ei),e(Z,ti),e(Z,Xn),e(Xn,oi),e(Z,ni),e(Z,js),e(js,si),e(Z,ai),e(Z,Is),e(Is,ri),e(Z,di),e(Z,Gs),e(Gs,ii),e(Z,li),e(x,ci),e(x,ct),e(ct,hi),e(ct,Bs),e(Bs,pi),e(ct,ui),e(ct,Qs),e(Qs,mi),e(ct,fi),e(x,_i),e(x,bo),e(bo,gi),e(bo,To),e(To,bi),e(bo,Ti),e(x,vi),e(x,vo),e(vo,ki),e(vo,ko),e(ko,wi),e(vo,yi),h(o,_r,p),h(o,Nt,p),e(Nt,Ei),e(Nt,wo),e(wo,qi),e(Nt,Li),h(o,gr,p),h(o,ht,p),e(ht,jt),e(jt,Hs),g(yo,Hs,null),e(ht,Di),e(ht,Ws),e(Ws,Fi),h(o,br,p),h(o,C,p),g(Eo,C,null),e(C,zi),e(C,pt),e(pt,$i),e(pt,Jn),e(Jn,xi),e(pt,Mi),e(pt,qo),e(qo,Si),e(pt,Oi),e(C,Ci),e(C,ut),e(ut,Ai),e(ut,Zn),e(Zn,Pi),e(ut,Ni),e(ut,Yn),e(Yn,ji),e(ut,Ii),e(C,Gi),e(C,Us),e(Us,Bi),e(C,Qi),g(Lo,C,null),e(C,Hi),e(C,Vs),e(Vs,Rs),e(Rs,Ks),e(Ks,Xs),e(Xs,Wi),e(C,Ui),e(C,Js),e(Js,Zs),e(Zs,Ys),e(Ys,It),e(It,Gt),e(Gt,ea),g(Do,ea,null),e(It,Vi),e(It,ta),e(ta,Ri),e(C,Ki),e(C,oa),e(oa,na),e(na,Fo),e(Fo,Bt),e(Bt,Qt),e(Qt,sa),g(zo,sa,null),e(Bt,Xi),e(Bt,aa),e(aa,Ji),e(Fo,Zi),e(Fo,ra),e(ra,Yi),e(C,el),e(C,da),e(da,ia),e(ia,la),e(la,Ht),e(Ht,Wt),e(Wt,ca),g($o,ca,null),e(Ht,tl),e(Ht,ha),e(ha,ol),h(o,Tr,p),h(o,mt,p),e(mt,Ut),e(Ut,pa),g(xo,pa,null),e(mt,nl),e(mt,ua),e(ua,sl),h(o,vr,p),h(o,N,p),g(Mo,N,null),e(N,al),e(N,ma),e(ma,rl),e(N,dl),e(N,Vt),e(Vt,es),e(es,il),e(Vt,ll),e(Vt,ts),e(ts,cl),e(Vt,hl),e(N,pl),e(N,So),e(So,ul),e(So,os),e(os,ml),e(So,fl),e(N,_l),e(N,Ke),g(Oo,Ke,null),e(Ke,gl),e(Ke,fa),e(fa,bl),e(Ke,Tl),e(Ke,Co),e(Co,ns),e(ns,vl),e(ns,_a),e(_a,kl),e(Co,wl),e(Co,ss),e(ss,yl),e(ss,ga),e(ga,El),e(N,ql),e(N,Rt),g(Ao,Rt,null),e(Rt,Ll),e(Rt,Po),e(Po,Dl),e(Po,ba),e(ba,Fl),e(Po,zl),e(N,$l),e(N,Kt),g(No,Kt,null),e(Kt,xl),e(Kt,Ta),e(Ta,Ml),e(N,Sl),e(N,as),g(jo,as,null),h(o,kr,p),h(o,ft,p),e(ft,Xt),e(Xt,va),g(Io,va,null),e(ft,Ol),e(ft,ka),e(ka,Cl),h(o,wr,p),h(o,ze,p),g(Go,ze,null),e(ze,Al),e(ze,Bo),e(Bo,Pl),e(Bo,wa),e(wa,Nl),e(Bo,jl),e(ze,Il),e(ze,Jt),e(Jt,rs),e(rs,Gl),e(Jt,Bl),e(Jt,ds),e(ds,Ql),e(Jt,Hl),e(ze,Wl),e(ze,Qo),e(Qo,Ul),e(Qo,is),e(is,Vl),e(Qo,Rl),h(o,yr,p),h(o,_t,p),e(_t,Zt),e(Zt,ya),g(Ho,ya,null),e(_t,Kl),e(_t,Ea),e(Ea,Xl),h(o,Er,p),h(o,gt,p),g(Wo,gt,null),e(gt,Jl),e(gt,qa),e(qa,Zl),h(o,qr,p),h(o,bt,p),g(Uo,bt,null),e(bt,Yl),e(bt,La),e(La,ec),h(o,Lr,p),h(o,Tt,p),g(Vo,Tt,null),e(Tt,tc),e(Tt,Da),e(Da,oc),h(o,Dr,p),h(o,vt,p),g(Ro,vt,null),e(vt,nc),e(vt,Fa),e(Fa,sc),h(o,Fr,p),h(o,kt,p),g(Ko,kt,null),e(kt,ac),e(kt,za),e(za,rc),h(o,zr,p),h(o,wt,p),g(Xo,wt,null),e(wt,dc),e(wt,$a),e($a,ic),h(o,$r,p),h(o,yt,p),g(Jo,yt,null),e(yt,lc),e(yt,xa),e(xa,cc),h(o,xr,p),h(o,Et,p),g(Zo,Et,null),e(Et,hc),e(Et,Ma),e(Ma,pc),h(o,Mr,p),h(o,qt,p),e(qt,Yt),e(Yt,Sa),g(Yo,Sa,null),e(qt,uc),e(qt,Oa),e(Oa,mc),h(o,Sr,p),h(o,$e,p),g(en,$e,null),e($e,fc),e($e,tn),e(tn,_c),e(tn,ls),e(ls,gc),e(tn,bc),e($e,Tc),e($e,on),e(on,vc),e(on,nn),e(nn,kc),e(on,wc),e($e,yc),e($e,ve),g(sn,ve,null),e(ve,Ec),e(ve,Lt),e(Lt,qc),e(Lt,cs),e(cs,Lc),e(Lt,Dc),e(Lt,Ca),e(Ca,Fc),e(Lt,zc),e(ve,$c),g(eo,ve,null),e(ve,xc),e(ve,Aa),e(Aa,Mc),e(ve,Sc),g(an,ve,null),h(o,Or,p),h(o,Dt,p),e(Dt,to),e(to,Pa),g(rn,Pa,null),e(Dt,Oc),e(Dt,Na),e(Na,Cc),h(o,Cr,p),h(o,xe,p),g(dn,xe,null),e(xe,Ac),e(xe,ln),e(ln,Pc),e(ln,hs),e(hs,Nc),e(ln,jc),e(xe,Ic),e(xe,cn),e(cn,Gc),e(cn,hn),e(hn,Bc),e(cn,Qc),e(xe,Hc),e(xe,H),g(pn,H,null),e(H,Wc),e(H,Ft),e(Ft,Uc),e(Ft,ps),e(ps,Vc),e(Ft,Rc),e(Ft,ja),e(ja,Kc),e(Ft,Xc),e(H,Jc),g(oo,H,null),e(H,Zc),e(H,Ia),e(Ia,Yc),e(H,eh),g(un,H,null),e(H,th),e(H,Ga),e(Ga,oh),e(H,nh),g(mn,H,null),h(o,Ar,p),h(o,zt,p),e(zt,no),e(no,Ba),g(fn,Ba,null),e(zt,sh),e(zt,Qa),e(Qa,ah),h(o,Pr,p),h(o,he,p),g(_n,he,null),e(he,rh),e(he,Ha),e(Ha,dh),e(he,ih),e(he,gn),e(gn,lh),e(gn,us),e(us,ch),e(gn,hh),e(he,ph),e(he,bn),e(bn,uh),e(bn,Tn),e(Tn,mh),e(bn,fh),e(he,_h),e(he,P),g(vn,P,null),e(P,gh),e(P,$t),e($t,bh),e($t,ms),e(ms,Th),e($t,vh),e($t,Wa),e(Wa,kh),e($t,wh),e(P,yh),g(so,P,null),e(P,Eh),e(P,Ua),e(Ua,qh),e(P,Lh),g(kn,P,null),e(P,Dh),g(wn,P,null),e(P,Fh),e(P,Va),e(Va,zh),e(P,$h),g(yn,P,null),e(P,xh),g(En,P,null),h(o,Nr,p),h(o,xt,p),e(xt,ao),e(ao,Ra),g(qn,Ra,null),e(xt,Mh),e(xt,Ka),e(Ka,Sh),h(o,jr,p),h(o,pe,p),g(Ln,pe,null),e(pe,Oh),e(pe,Mt),e(Mt,Ch),e(Mt,Xa),e(Xa,Ah),e(Mt,Ph),e(Mt,Ja),e(Ja,Nh),e(Mt,jh),e(pe,Ih),e(pe,Dn),e(Dn,Gh),e(Dn,fs),e(fs,Bh),e(Dn,Qh),e(pe,Hh),e(pe,Fn),e(Fn,Wh),e(Fn,zn),e(zn,Uh),e(Fn,Vh),e(pe,Rh),e(pe,te),g($n,te,null),e(te,Kh),e(te,St),e(St,Xh),e(St,_s),e(_s,Jh),e(St,Zh),e(St,Za),e(Za,Yh),e(St,ep),e(te,tp),g(ro,te,null),e(te,op),e(te,Ya),e(Ya,np),e(te,sp),g(xn,te,null),e(te,ap),g(Mn,te,null),h(o,Ir,p),h(o,Ot,p),e(Ot,io),e(io,er),g(Sn,er,null),e(Ot,rp),e(Ot,tr),e(tr,dp),h(o,Gr,p),h(o,ue,p),g(On,ue,null),e(ue,ip),e(ue,Cn),e(Cn,lp),e(Cn,gs),e(gs,cp),e(Cn,hp),e(ue,pp),e(ue,An),e(An,up),e(An,Pn),e(Pn,mp),e(An,fp),e(ue,_p),g(lo,ue,null),e(ue,gp),e(ue,ke),g(Nn,ke,null),e(ke,bp),e(ke,Ct),e(Ct,Tp),e(Ct,bs),e(bs,vp),e(Ct,kp),e(Ct,or),e(or,wp),e(Ct,yp),e(ke,Ep),g(co,ke,null),e(ke,qp),e(ke,nr),e(nr,Lp),e(ke,Dp),g(jn,ke,null),h(o,Br,p),h(o,At,p),e(At,ho),e(ho,sr),g(In,sr,null),e(At,Fp),e(At,ar),e(ar,zp),h(o,Qr,p),h(o,me,p),g(Gn,me,null),e(me,$p),e(me,Bn),e(Bn,xp),e(Bn,Ts),e(Ts,Mp),e(Bn,Sp),e(me,Op),e(me,Qn),e(Qn,Cp),e(Qn,Hn),e(Hn,Ap),e(Qn,Pp),e(me,Np),g(po,me,null),e(me,jp),e(me,we),g(Wn,we,null),e(we,Ip),e(we,Pt),e(Pt,Gp),e(Pt,vs),e(vs,Bp),e(Pt,Qp),e(Pt,rr),e(rr,Hp),e(Pt,Wp),e(we,Up),g(uo,we,null),e(we,Vp),e(we,dr),e(dr,Rp),e(we,Kp),g(Un,we,null),Hr=!0},p(o,[p]){const Vn={};p&2&&(Vn.$$scope={dirty:p,ctx:o}),eo.$set(Vn);const ir={};p&2&&(ir.$$scope={dirty:p,ctx:o}),oo.$set(ir);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),so.$set(lr);const cr={};p&2&&(cr.$$scope={dirty:p,ctx:o}),ro.$set(cr);const Rn={};p&2&&(Rn.$$scope={dirty:p,ctx:o}),lo.$set(Rn);const hr={};p&2&&(hr.$$scope={dirty:p,ctx:o}),co.$set(hr);const pr={};p&2&&(pr.$$scope={dirty:p,ctx:o}),po.$set(pr);const ur={};p&2&&(ur.$$scope={dirty:p,ctx:o}),uo.$set(ur)},i(o){Hr||(b(y.$$.fragment,o),b(ne.$$.fragment,o),b(yo.$$.fragment,o),b(Eo.$$.fragment,o),b(Lo.$$.fragment,o),b(Do.$$.fragment,o),b(zo.$$.fragment,o),b($o.$$.fragment,o),b(xo.$$.fragment,o),b(Mo.$$.fragment,o),b(Oo.$$.fragment,o),b(Ao.$$.fragment,o),b(No.$$.fragment,o),b(jo.$$.fragment,o),b(Io.$$.fragment,o),b(Go.$$.fragment,o),b(Ho.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Vo.$$.fragment,o),b(Ro.$$.fragment,o),b(Ko.$$.fragment,o),b(Xo.$$.fragment,o),b(Jo.$$.fragment,o),b(Zo.$$.fragment,o),b(Yo.$$.fragment,o),b(en.$$.fragment,o),b(sn.$$.fragment,o),b(eo.$$.fragment,o),b(an.$$.fragment,o),b(rn.$$.fragment,o),b(dn.$$.fragment,o),b(pn.$$.fragment,o),b(oo.$$.fragment,o),b(un.$$.fragment,o),b(mn.$$.fragment,o),b(fn.$$.fragment,o),b(_n.$$.fragment,o),b(vn.$$.fragment,o),b(so.$$.fragment,o),b(kn.$$.fragment,o),b(wn.$$.fragment,o),b(yn.$$.fragment,o),b(En.$$.fragment,o),b(qn.$$.fragment,o),b(Ln.$$.fragment,o),b($n.$$.fragment,o),b(ro.$$.fragment,o),b(xn.$$.fragment,o),b(Mn.$$.fragment,o),b(Sn.$$.fragment,o),b(On.$$.fragment,o),b(lo.$$.fragment,o),b(Nn.$$.fragment,o),b(co.$$.fragment,o),b(jn.$$.fragment,o),b(In.$$.fragment,o),b(Gn.$$.fragment,o),b(po.$$.fragment,o),b(Wn.$$.fragment,o),b(uo.$$.fragment,o),b(Un.$$.fragment,o),Hr=!0)},o(o){T(y.$$.fragment,o),T(ne.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T(zo.$$.fragment,o),T($o.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Oo.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Go.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Vo.$$.fragment,o),T(Ro.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(sn.$$.fragment,o),T(eo.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(dn.$$.fragment,o),T(pn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(mn.$$.fragment,o),T(fn.$$.fragment,o),T(_n.$$.fragment,o),T(vn.$$.fragment,o),T(so.$$.fragment,o),T(kn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(qn.$$.fragment,o),T(Ln.$$.fragment,o),T($n.$$.fragment,o),T(ro.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(Sn.$$.fragment,o),T(On.$$.fragment,o),T(lo.$$.fragment,o),T(Nn.$$.fragment,o),T(co.$$.fragment,o),T(jn.$$.fragment,o),T(In.$$.fragment,o),T(Gn.$$.fragment,o),T(po.$$.fragment,o),T(Wn.$$.fragment,o),T(uo.$$.fragment,o),T(Un.$$.fragment,o),Hr=!1},d(o){t(u),o&&t(L),o&&t(k),v(y),o&&t(ge),o&&t(F),v(ne),o&&t(Me),o&&t(B),o&&t(A),o&&t(be),o&&t(Se),o&&t(Te),o&&t(Oe),o&&t(O),o&&t(ee),o&&t(x),o&&t(_r),o&&t(Nt),o&&t(gr),o&&t(ht),v(yo),o&&t(br),o&&t(C),v(Eo),v(Lo),v(Do),v(zo),v($o),o&&t(Tr),o&&t(mt),v(xo),o&&t(vr),o&&t(N),v(Mo),v(Oo),v(Ao),v(No),v(jo),o&&t(kr),o&&t(ft),v(Io),o&&t(wr),o&&t(ze),v(Go),o&&t(yr),o&&t(_t),v(Ho),o&&t(Er),o&&t(gt),v(Wo),o&&t(qr),o&&t(bt),v(Uo),o&&t(Lr),o&&t(Tt),v(Vo),o&&t(Dr),o&&t(vt),v(Ro),o&&t(Fr),o&&t(kt),v(Ko),o&&t(zr),o&&t(wt),v(Xo),o&&t($r),o&&t(yt),v(Jo),o&&t(xr),o&&t(Et),v(Zo),o&&t(Mr),o&&t(qt),v(Yo),o&&t(Sr),o&&t($e),v(en),v(sn),v(eo),v(an),o&&t(Or),o&&t(Dt),v(rn),o&&t(Cr),o&&t(xe),v(dn),v(pn),v(oo),v(un),v(mn),o&&t(Ar),o&&t(zt),v(fn),o&&t(Pr),o&&t(he),v(_n),v(vn),v(so),v(kn),v(wn),v(yn),v(En),o&&t(Nr),o&&t(xt),v(qn),o&&t(jr),o&&t(pe),v(Ln),v($n),v(ro),v(xn),v(Mn),o&&t(Ir),o&&t(Ot),v(Sn),o&&t(Gr),o&&t(ue),v(On),v(lo),v(Nn),v(co),v(jn),o&&t(Br),o&&t(At),v(In),o&&t(Qr),o&&t(me),v(Gn),v(po),v(Wn),v(uo),v(Un)}}}const Rf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Kf(G){return Nf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t_ extends Of{constructor(u){super();Cf(this,u,Kf,Vf,Af,{})}}export{t_ as default,Rf as metadata};
