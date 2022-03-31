import{S as Cf,i as Of,s as Af,e as n,k as i,w as f,t as r,M as Nf,c as s,d as t,m as l,a,x as _,h as d,b as c,F as e,g as h,y as g,q as v,o as T,B as k,v as Pf}from"../../chunks/vendor-6b77c823.js";import{T as go}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-abef54e3.js";import{C as Pe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _e}from"../../chunks/IconCopyLink-7a11ce68.js";function jf(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function If(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Bf(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Gf(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Qf(B){let u,L,b,E,q,y,w,D,je,ge,z,Y,V,ne,Ie,R,Be,Me,G,K,se,Le,S,A,ve,ae,Se,Te,X,Ge,Ce,C,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),z=n("p"),Y=r("This second option is useful when using "),V=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Be=r("model(inputs)"),Me=r("."),G=i(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),ve=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),X=n("code"),Ge=r("model(input_ids)"),Ce=i(),C=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=i(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);L=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),b=l(m),E=s(m,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);je=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(m),z=s(m,"P",{});var I=a(z);Y=d(I,"This second option is useful when using "),V=s(I,"CODE",{});var rt=a(V);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Be=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),G=l(m),K=s(m,"P",{});var Oe=a(K);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var ie=a(A);ve=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Ae=a(ae);Se=d(Ae,"input_ids"),Ae.forEach(t),Te=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var it=a(X);Ge=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Ce=l(J),C=s(J,"LI",{});var le=a(C);Qe=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ve,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),J.forEach(t)},m(m,$){h(m,u,$),e(u,L),h(m,b,$),h(m,E,$),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,$),h(m,z,$),e(z,Y),e(z,V),e(V,ne),e(z,Ie),e(z,R),e(R,Be),e(z,Me),h(m,G,$),h(m,K,$),e(K,se),h(m,Le,$),h(m,S,$),e(S,A),e(A,ve),e(A,ae),e(ae,Se),e(A,Te),e(A,X),e(X,Ge),e(S,Ce),e(S,C),e(C,Qe),e(C,ee),e(ee,x),e(C,M),e(C,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(b),m&&t(E),m&&t(ge),m&&t(z),m&&t(G),m&&t(K),m&&t(Le),m&&t(S)}}}function Hf(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Wf(B){let u,L,b,E,q,y,w,D,je,ge,z,Y,V,ne,Ie,R,Be,Me,G,K,se,Le,S,A,ve,ae,Se,Te,X,Ge,Ce,C,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=i(),z=n("p"),Y=r("This second option is useful when using "),V=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),Be=r("model(inputs)"),Me=r("."),G=i(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),ve=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),Te=r(" only and nothing else: "),X=n("code"),Ge=r("model(input_ids)"),Ce=i(),C=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=i(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var $=a(u);L=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),b=l(m),E=s(m,"UL",{});var de=a(E);q=s(de,"LI",{});var st=a(q);y=d(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(de),D=s(de,"LI",{});var at=a(D);je=d(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),de.forEach(t),ge=l(m),z=s(m,"P",{});var I=a(z);Y=d(I,"This second option is useful when using "),V=s(I,"CODE",{});var rt=a(V);ne=d(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var dt=a(R);Be=d(dt,"model(inputs)"),dt.forEach(t),Me=d(I,"."),I.forEach(t),G=l(m),K=s(m,"P",{});var Oe=a(K);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var ie=a(A);ve=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Ae=a(ae);Se=d(Ae,"input_ids"),Ae.forEach(t),Te=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var it=a(X);Ge=d(it,"model(input_ids)"),it.forEach(t),ie.forEach(t),Ce=l(J),C=s(J,"LI",{});var le=a(C);Qe=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=d(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=d(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Ve=a(j);Ue=d(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ve,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ve.forEach(t),J.forEach(t)},m(m,$){h(m,u,$),e(u,L),h(m,b,$),h(m,E,$),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,$),h(m,z,$),e(z,Y),e(z,V),e(V,ne),e(z,Ie),e(z,R),e(R,Be),e(z,Me),h(m,G,$),h(m,K,$),e(K,se),h(m,Le,$),h(m,S,$),e(S,A),e(A,ve),e(A,ae),e(ae,Se),e(A,Te),e(A,X),e(X,Ge),e(S,Ce),e(S,C),e(C,Qe),e(C,ee),e(ee,x),e(C,M),e(C,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(b),m&&t(E),m&&t(ge),m&&t(z),m&&t(G),m&&t(K),m&&t(Le),m&&t(S)}}}function Uf(B){let u,L,b,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var D=a(b);E=d(D,"Module"),D.forEach(t),q=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,b),e(b,E),e(u,q)},d(y){y&&t(u)}}}function Vf(B){let u,L,b,E,q,y,w,D,je,ge,z,Y,V,ne,Ie,R,Be,Me,G,K,se,Le,S,A,ve,ae,Se,Te,X,Ge,Ce,C,Qe,ee,x,M,Q,He,We,j,Ue,re,De,m,$,de,st,at,I,rt,dt,Oe,J,ie,Ae,it,le,lt,ce,Ve,Re,Ad,Nd,Ss,Pd,jd,Id,ze,Bd,Cs,Gd,Qd,Os,Hd,Wd,Kn,Ud,Vd,As,Rd,Kd,Xd,Z,Jd,Ns,Zd,Yd,Ps,ei,ti,Xn,oi,ni,js,si,ai,Is,ri,di,Bs,ii,li,ci,ct,hi,Gs,pi,ui,Qs,mi,fi,_i,vo,gi,To,vi,Ti,ki,ko,bi,bo,wi,yi,_r,Pt,Ei,wo,qi,Li,gr,ht,jt,Hs,yo,Di,Ws,zi,vr,O,Eo,$i,pt,Fi,Jn,xi,Mi,qo,Si,Ci,Oi,ut,Ai,Zn,Ni,Pi,Yn,ji,Ii,Bi,Us,Gi,Qi,Lo,Hi,Vs,Rs,Ks,Xs,Wi,Ui,Js,Zs,Ys,It,Bt,ea,Do,Vi,ta,Ri,Ki,oa,na,zo,Gt,Qt,sa,$o,Xi,aa,Ji,Zi,ra,Yi,el,da,ia,la,Ht,Wt,ca,Fo,tl,ha,ol,Tr,mt,Ut,pa,xo,nl,ua,sl,kr,P,Mo,al,ma,rl,dl,Vt,es,il,ll,ts,cl,hl,pl,So,ul,os,ml,fl,_l,Ke,Co,gl,fa,vl,Tl,Oo,ns,kl,_a,bl,wl,ss,yl,ga,El,ql,Rt,Ao,Ll,No,Dl,va,zl,$l,Fl,Kt,Po,xl,Ta,Ml,Sl,as,jo,br,ft,Xt,ka,Io,Cl,ba,Ol,wr,$e,Bo,Al,Go,Nl,wa,Pl,jl,Il,Jt,rs,Bl,Gl,ds,Ql,Hl,Wl,Qo,Ul,is,Vl,Rl,yr,_t,Zt,ya,Ho,Kl,Ea,Xl,Er,gt,Wo,Jl,qa,Zl,qr,vt,Uo,Yl,La,ec,Lr,Tt,Vo,tc,Da,oc,Dr,kt,Ro,nc,za,sc,zr,bt,Ko,ac,$a,rc,$r,wt,Xo,dc,Fa,ic,Fr,yt,Jo,lc,xa,cc,xr,Et,Zo,hc,Ma,pc,Mr,qt,Yt,Sa,Yo,uc,Ca,mc,Sr,Fe,en,fc,tn,_c,ls,gc,vc,Tc,on,kc,nn,bc,wc,yc,ke,sn,Ec,Lt,qc,cs,Lc,Dc,Oa,zc,$c,Fc,eo,xc,Aa,Mc,Sc,an,Cr,Dt,to,Na,rn,Cc,Pa,Oc,Or,xe,dn,Ac,ln,Nc,hs,Pc,jc,Ic,cn,Bc,hn,Gc,Qc,Hc,H,pn,Wc,zt,Uc,ps,Vc,Rc,ja,Kc,Xc,Jc,oo,Zc,Ia,Yc,eh,un,th,Ba,oh,nh,mn,Ar,$t,no,Ga,fn,sh,Qa,ah,Nr,he,_n,rh,Ha,dh,ih,gn,lh,us,ch,hh,ph,vn,uh,Tn,mh,fh,_h,N,kn,gh,Ft,vh,ms,Th,kh,Wa,bh,wh,yh,so,Eh,Ua,qh,Lh,bn,Dh,wn,zh,Va,$h,Fh,yn,xh,En,Pr,xt,ao,Ra,qn,Mh,Ka,Sh,jr,pe,Ln,Ch,Mt,Oh,Xa,Ah,Nh,Ja,Ph,jh,Ih,Dn,Bh,fs,Gh,Qh,Hh,zn,Wh,$n,Uh,Vh,Rh,te,Fn,Kh,St,Xh,_s,Jh,Zh,Za,Yh,ep,tp,ro,op,Ya,np,sp,xn,ap,Mn,Ir,Ct,io,er,Sn,rp,tr,dp,Br,ue,Cn,ip,On,lp,gs,cp,hp,pp,An,up,Nn,mp,fp,_p,lo,gp,be,Pn,vp,Ot,Tp,vs,kp,bp,or,wp,yp,Ep,co,qp,nr,Lp,Dp,jn,Gr,At,ho,sr,In,zp,ar,$p,Qr,me,Bn,Fp,Gn,xp,Ts,Mp,Sp,Cp,Qn,Op,Hn,Ap,Np,Pp,po,jp,we,Wn,Ip,Nt,Bp,ks,Gp,Qp,rr,Hp,Wp,Up,uo,Vp,dr,Rp,Kp,Un,Hr;return y=new _e({}),ne=new _e({}),yo=new _e({}),Eo=new F({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new Pe({props:{code:"",highlighted:""}}),Do=new _e({}),$o=new _e({}),Fo=new _e({}),xo=new _e({}),Mo=new F({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L43"}}),Co=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new F({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L309"}}),Io=new _e({}),Bo=new F({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Ho=new _e({}),Wo=new F({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Uo=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ro=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new F({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Xo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1330",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Jo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1373",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new F({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1441",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Yo=new _e({}),en=new F({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new F({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
`}}),eo=new go({props:{$$slots:{default:[jf]},$$scope:{ctx:B}}}),an=new Pe({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rn=new _e({}),dn=new F({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new F({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
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
`}}),oo=new go({props:{$$slots:{default:[If]},$$scope:{ctx:B}}}),un=new Pe({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),mn=new Pe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new _e({}),_n=new F({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2468",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new F({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2481",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
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
`}}),so=new go({props:{$$slots:{default:[Bf]},$$scope:{ctx:B}}}),bn=new Pe({props:{code:`import torch
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
`}}),wn=new Pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),yn=new Pe({props:{code:`import torch
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
`}}),En=new Pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),qn=new _e({}),Ln=new F({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2596",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new F({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2608",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
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
`}}),ro=new go({props:{$$slots:{default:[Gf]},$$scope:{ctx:B}}}),xn=new Pe({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
`}}),Mn=new Pe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Sn=new _e({}),Cn=new F({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2193",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Qf]},$$scope:{ctx:B}}}),Pn=new F({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2205",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
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
`}}),co=new go({props:{$$slots:{default:[Hf]},$$scope:{ctx:B}}}),jn=new Pe({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),In=new _e({}),Bn=new F({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2281",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new go({props:{$$slots:{default:[Wf]},$$scope:{ctx:B}}}),Wn=new F({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2314",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
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
`}}),uo=new go({props:{$$slots:{default:[Uf]},$$scope:{ctx:B}}}),Un=new Pe({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=i(),b=n("h1"),E=n("a"),q=n("span"),f(y.$$.fragment),w=i(),D=n("span"),je=r("LED"),ge=i(),z=n("h2"),Y=n("a"),V=n("span"),f(ne.$$.fragment),Ie=i(),R=n("span"),Be=r("Overview"),Me=i(),G=n("p"),K=r("The LED model was proposed in "),se=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=i(),ve=n("p"),ae=r("The abstract from the paper is the following:"),Se=i(),Te=n("p"),X=n("em"),Ge=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ce=i(),C=n("p"),Qe=r("Tips:"),ee=i(),x=n("ul"),M=n("li"),Q=n("a"),He=r("LEDForConditionalGeneration"),We=r(` is an extension of
`),j=n("a"),Ue=r("BartForConditionalGeneration"),re=r(" exchanging the traditional "),De=n("em"),m=r("self-attention"),$=r(` layer with
`),de=n("em"),st=r("Longformer"),at=r("\u2019s "),I=n("em"),rt=r("chunked self-attention"),dt=r(" layer. "),Oe=n("a"),J=r("LEDTokenizer"),ie=r(` is an alias of
`),Ae=n("a"),it=r("BartTokenizer"),le=r("."),lt=i(),ce=n("li"),Ve=r("LED works very well on long-range "),Re=n("em"),Ad=r("sequence-to-sequence"),Nd=r(" tasks where the "),Ss=n("code"),Pd=r("input_ids"),jd=r(` largely exceed a length of
1024 tokens.`),Id=i(),ze=n("li"),Bd=r("LED pads the "),Cs=n("code"),Gd=r("input_ids"),Qd=r(" to be a multiple of "),Os=n("code"),Hd=r("config.attention_window"),Wd=r(` if required. Therefore a small speed-up is
gained, when `),Kn=n("a"),Ud=r("LEDTokenizer"),Vd=r(" is used with the "),As=n("code"),Rd=r("pad_to_multiple_of"),Kd=r(" argument."),Xd=i(),Z=n("li"),Jd=r("LED makes use of "),Ns=n("em"),Zd=r("global attention"),Yd=r(" by means of the "),Ps=n("code"),ei=r("global_attention_mask"),ti=r(` (see
`),Xn=n("a"),oi=r("LongformerModel"),ni=r("). For summarization, it is advised to put "),js=n("em"),si=r("global attention"),ai=r(` only on the first
`),Is=n("code"),ri=r("<s>"),di=r(" token. For question answering, it is advised to put "),Bs=n("em"),ii=r("global attention"),li=r(" on all tokens of the question."),ci=i(),ct=n("li"),hi=r("To fine-tune LED on all 16384, it is necessary to enable "),Gs=n("em"),pi=r("gradient checkpointing"),ui=r(` by executing
`),Qs=n("code"),mi=r("model.gradient_checkpointing_enable()"),fi=r("."),_i=i(),vo=n("li"),gi=r("A notebook showing how to evaluate LED, can be accessed "),To=n("a"),vi=r("here"),Ti=r("."),ki=i(),ko=n("li"),bi=r("A notebook showing how to fine-tune LED, can be accessed "),bo=n("a"),wi=r("here"),yi=r("."),_r=i(),Pt=n("p"),Ei=r("This model was contributed by "),wo=n("a"),qi=r("patrickvonplaten"),Li=r("."),gr=i(),ht=n("h2"),jt=n("a"),Hs=n("span"),f(yo.$$.fragment),Di=i(),Ws=n("span"),zi=r("LEDConfig"),vr=i(),O=n("div"),f(Eo.$$.fragment),$i=i(),pt=n("p"),Fi=r("This is the configuration class to store the configuration of a "),Jn=n("a"),xi=r("LEDModel"),Mi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Si=r("allenai/led-base-16384"),Ci=r(" architecture."),Oi=i(),ut=n("p"),Ai=r("Configuration objects inherit from "),Zn=n("a"),Ni=r("PretrainedConfig"),Pi=r(` and can be used to control the model outputs. Read the
documentation from `),Yn=n("a"),ji=r("PretrainedConfig"),Ii=r(" for more information."),Bi=i(),Us=n("p"),Gi=r("Example:"),Qi=i(),f(Lo.$$.fragment),Hi=i(),Vs=n("blockquote"),Rs=n("blockquote"),Ks=n("blockquote"),Xs=n("p"),Wi=r("from transformers import LEDModel, LEDConfig"),Ui=i(),Js=n("blockquote"),Zs=n("blockquote"),Ys=n("blockquote"),It=n("h1"),Bt=n("a"),ea=n("span"),f(Do.$$.fragment),Vi=i(),ta=n("span"),Ri=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Ki=i(),oa=n("blockquote"),na=n("blockquote"),zo=n("blockquote"),Gt=n("h1"),Qt=n("a"),sa=n("span"),f($o.$$.fragment),Xi=i(),aa=n("span"),Ji=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Zi=i(),ra=n("p"),Yi=r("LEDModel(configuration)"),el=i(),da=n("blockquote"),ia=n("blockquote"),la=n("blockquote"),Ht=n("h1"),Wt=n("a"),ca=n("span"),f(Fo.$$.fragment),tl=i(),ha=n("span"),ol=r("Accessing the model configuration >>> configuration = model.config"),Tr=i(),mt=n("h2"),Ut=n("a"),pa=n("span"),f(xo.$$.fragment),nl=i(),ua=n("span"),sl=r("LEDTokenizer"),kr=i(),P=n("div"),f(Mo.$$.fragment),al=i(),ma=n("p"),rl=r("Construct a LED tokenizer."),dl=i(),Vt=n("p"),es=n("a"),il=r("LEDTokenizer"),ll=r(" is identical to "),ts=n("a"),cl=r("BartTokenizer"),hl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),pl=i(),So=n("p"),ul=r("Refer to superclass "),os=n("a"),ml=r("BartTokenizer"),fl=r(" for usage examples and documentation concerning parameters."),_l=i(),Ke=n("div"),f(Co.$$.fragment),gl=i(),fa=n("p"),vl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Tl=i(),Oo=n("ul"),ns=n("li"),kl=r("single sequence: "),_a=n("code"),bl=r("<s> X </s>"),wl=i(),ss=n("li"),yl=r("pair of sequences: "),ga=n("code"),El=r("<s> A </s></s> B </s>"),ql=i(),Rt=n("div"),f(Ao.$$.fragment),Ll=i(),No=n("p"),Dl=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),va=n("code"),zl=r("prepare_for_model"),$l=r(" method."),Fl=i(),Kt=n("div"),f(Po.$$.fragment),xl=i(),Ta=n("p"),Ml=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Sl=i(),as=n("div"),f(jo.$$.fragment),br=i(),ft=n("h2"),Xt=n("a"),ka=n("span"),f(Io.$$.fragment),Cl=i(),ba=n("span"),Ol=r("LEDTokenizerFast"),wr=i(),$e=n("div"),f(Bo.$$.fragment),Al=i(),Go=n("p"),Nl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=n("em"),Pl=r("tokenizers"),jl=r(" library)."),Il=i(),Jt=n("p"),rs=n("a"),Bl=r("LEDTokenizerFast"),Gl=r(" is identical to "),ds=n("a"),Ql=r("BartTokenizerFast"),Hl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Wl=i(),Qo=n("p"),Ul=r("Refer to superclass "),is=n("a"),Vl=r("BartTokenizerFast"),Rl=r(" for usage examples and documentation concerning parameters."),yr=i(),_t=n("h2"),Zt=n("a"),ya=n("span"),f(Ho.$$.fragment),Kl=i(),Ea=n("span"),Xl=r("LED specific outputs"),Er=i(),gt=n("div"),f(Wo.$$.fragment),Jl=i(),qa=n("p"),Zl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),qr=i(),vt=n("div"),f(Uo.$$.fragment),Yl=i(),La=n("p"),ec=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lr=i(),Tt=n("div"),f(Vo.$$.fragment),tc=i(),Da=n("p"),oc=r("Base class for sequence-to-sequence language models outputs."),Dr=i(),kt=n("div"),f(Ro.$$.fragment),nc=i(),za=n("p"),sc=r("Base class for outputs of sequence-to-sequence sentence classification models."),zr=i(),bt=n("div"),f(Ko.$$.fragment),ac=i(),$a=n("p"),rc=r("Base class for outputs of sequence-to-sequence question answering models."),$r=i(),wt=n("div"),f(Xo.$$.fragment),dc=i(),Fa=n("p"),ic=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Fr=i(),yt=n("div"),f(Jo.$$.fragment),lc=i(),xa=n("p"),cc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),xr=i(),Et=n("div"),f(Zo.$$.fragment),hc=i(),Ma=n("p"),pc=r("Base class for sequence-to-sequence language models outputs."),Mr=i(),qt=n("h2"),Yt=n("a"),Sa=n("span"),f(Yo.$$.fragment),uc=i(),Ca=n("span"),mc=r("LEDModel"),Sr=i(),Fe=n("div"),f(en.$$.fragment),fc=i(),tn=n("p"),_c=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=n("a"),gc=r("PreTrainedModel"),vc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tc=i(),on=n("p"),kc=r("This model is also a PyTorch "),nn=n("a"),bc=r("torch.nn.Module"),wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc=i(),ke=n("div"),f(sn.$$.fragment),Ec=i(),Lt=n("p"),qc=r("The "),cs=n("a"),Lc=r("LEDModel"),Dc=r(" forward method, overrides the "),Oa=n("code"),zc=r("__call__"),$c=r(" special method."),Fc=i(),f(eo.$$.fragment),xc=i(),Aa=n("p"),Mc=r("Example:"),Sc=i(),f(an.$$.fragment),Cr=i(),Dt=n("h2"),to=n("a"),Na=n("span"),f(rn.$$.fragment),Cc=i(),Pa=n("span"),Oc=r("LEDForConditionalGeneration"),Or=i(),xe=n("div"),f(dn.$$.fragment),Ac=i(),ln=n("p"),Nc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=n("a"),Pc=r("PreTrainedModel"),jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=i(),cn=n("p"),Bc=r("This model is also a PyTorch "),hn=n("a"),Gc=r("torch.nn.Module"),Qc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc=i(),H=n("div"),f(pn.$$.fragment),Wc=i(),zt=n("p"),Uc=r("The "),ps=n("a"),Vc=r("LEDForConditionalGeneration"),Rc=r(" forward method, overrides the "),ja=n("code"),Kc=r("__call__"),Xc=r(" special method."),Jc=i(),f(oo.$$.fragment),Zc=i(),Ia=n("p"),Yc=r("Conditional generation example:"),eh=i(),f(un.$$.fragment),th=i(),Ba=n("p"),oh=r("Summarization example:"),nh=i(),f(mn.$$.fragment),Ar=i(),$t=n("h2"),no=n("a"),Ga=n("span"),f(fn.$$.fragment),sh=i(),Qa=n("span"),ah=r("LEDForSequenceClassification"),Nr=i(),he=n("div"),f(_n.$$.fragment),rh=i(),Ha=n("p"),dh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ih=i(),gn=n("p"),lh=r("This model inherits from "),us=n("a"),ch=r("PreTrainedModel"),hh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph=i(),vn=n("p"),uh=r("This model is also a PyTorch "),Tn=n("a"),mh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=i(),N=n("div"),f(kn.$$.fragment),gh=i(),Ft=n("p"),vh=r("The "),ms=n("a"),Th=r("LEDForSequenceClassification"),kh=r(" forward method, overrides the "),Wa=n("code"),bh=r("__call__"),wh=r(" special method."),yh=i(),f(so.$$.fragment),Eh=i(),Ua=n("p"),qh=r("Example of single-label classification:"),Lh=i(),f(bn.$$.fragment),Dh=i(),f(wn.$$.fragment),zh=i(),Va=n("p"),$h=r("Example of multi-label classification:"),Fh=i(),f(yn.$$.fragment),xh=i(),f(En.$$.fragment),Pr=i(),xt=n("h2"),ao=n("a"),Ra=n("span"),f(qn.$$.fragment),Mh=i(),Ka=n("span"),Sh=r("LEDForQuestionAnswering"),jr=i(),pe=n("div"),f(Ln.$$.fragment),Ch=i(),Mt=n("p"),Oh=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=n("code"),Ah=r("span start logits"),Nh=r(" and "),Ja=n("code"),Ph=r("span end logits"),jh=r(")."),Ih=i(),Dn=n("p"),Bh=r("This model inherits from "),fs=n("a"),Gh=r("PreTrainedModel"),Qh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=i(),zn=n("p"),Wh=r("This model is also a PyTorch "),$n=n("a"),Uh=r("torch.nn.Module"),Vh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=i(),te=n("div"),f(Fn.$$.fragment),Kh=i(),St=n("p"),Xh=r("The "),_s=n("a"),Jh=r("LEDForQuestionAnswering"),Zh=r(" forward method, overrides the "),Za=n("code"),Yh=r("__call__"),ep=r(" special method."),tp=i(),f(ro.$$.fragment),op=i(),Ya=n("p"),np=r("Example:"),sp=i(),f(xn.$$.fragment),ap=i(),f(Mn.$$.fragment),Ir=i(),Ct=n("h2"),io=n("a"),er=n("span"),f(Sn.$$.fragment),rp=i(),tr=n("span"),dp=r("TFLEDModel"),Br=i(),ue=n("div"),f(Cn.$$.fragment),ip=i(),On=n("p"),lp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=n("a"),cp=r("TFPreTrainedModel"),hp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=i(),An=n("p"),up=r("This model is also a "),Nn=n("a"),mp=r("tf.keras.Model"),fp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p=i(),f(lo.$$.fragment),gp=i(),be=n("div"),f(Pn.$$.fragment),vp=i(),Ot=n("p"),Tp=r("The "),vs=n("a"),kp=r("TFLEDModel"),bp=r(" forward method, overrides the "),or=n("code"),wp=r("__call__"),yp=r(" special method."),Ep=i(),f(co.$$.fragment),qp=i(),nr=n("p"),Lp=r("Example:"),Dp=i(),f(jn.$$.fragment),Gr=i(),At=n("h2"),ho=n("a"),sr=n("span"),f(In.$$.fragment),zp=i(),ar=n("span"),$p=r("TFLEDForConditionalGeneration"),Qr=i(),me=n("div"),f(Bn.$$.fragment),Fp=i(),Gn=n("p"),xp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ts=n("a"),Mp=r("TFPreTrainedModel"),Sp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp=i(),Qn=n("p"),Op=r("This model is also a "),Hn=n("a"),Ap=r("tf.keras.Model"),Np=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp=i(),f(po.$$.fragment),jp=i(),we=n("div"),f(Wn.$$.fragment),Ip=i(),Nt=n("p"),Bp=r("The "),ks=n("a"),Gp=r("TFLEDForConditionalGeneration"),Qp=r(" forward method, overrides the "),rr=n("code"),Hp=r("__call__"),Wp=r(" special method."),Up=i(),f(uo.$$.fragment),Vp=i(),dr=n("p"),Rp=r("Examples:"),Kp=i(),f(Un.$$.fragment),this.h()},l(o){const p=Nf('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),b=s(o,"H1",{class:!0});var Vn=a(b);E=s(Vn,"A",{id:!0,class:!0,href:!0});var ir=a(E);q=s(ir,"SPAN",{});var lr=a(q);_(y.$$.fragment,lr),lr.forEach(t),ir.forEach(t),w=l(Vn),D=s(Vn,"SPAN",{});var cr=a(D);je=d(cr,"LED"),cr.forEach(t),Vn.forEach(t),ge=l(o),z=s(o,"H2",{class:!0});var Rn=a(z);Y=s(Rn,"A",{id:!0,class:!0,href:!0});var hr=a(Y);V=s(hr,"SPAN",{});var pr=a(V);_(ne.$$.fragment,pr),pr.forEach(t),hr.forEach(t),Ie=l(Rn),R=s(Rn,"SPAN",{});var ur=a(R);Be=d(ur,"Overview"),ur.forEach(t),Rn.forEach(t),Me=l(o),G=s(o,"P",{});var Wr=a(G);K=d(Wr,"The LED model was proposed in "),se=s(Wr,"A",{href:!0,rel:!0});var Zp=a(se);Le=d(Zp,"Longformer: The Long-Document Transformer"),Zp.forEach(t),S=d(Wr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Wr.forEach(t),A=l(o),ve=s(o,"P",{});var Yp=a(ve);ae=d(Yp,"The abstract from the paper is the following:"),Yp.forEach(t),Se=l(o),Te=s(o,"P",{});var eu=a(Te);X=s(eu,"EM",{});var tu=a(X);Ge=d(tu,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),tu.forEach(t),eu.forEach(t),Ce=l(o),C=s(o,"P",{});var ou=a(C);Qe=d(ou,"Tips:"),ou.forEach(t),ee=l(o),x=s(o,"UL",{});var ye=a(x);M=s(ye,"LI",{});var fe=a(M);Q=s(fe,"A",{href:!0});var nu=a(Q);He=d(nu,"LEDForConditionalGeneration"),nu.forEach(t),We=d(fe,` is an extension of
`),j=s(fe,"A",{href:!0});var su=a(j);Ue=d(su,"BartForConditionalGeneration"),su.forEach(t),re=d(fe," exchanging the traditional "),De=s(fe,"EM",{});var au=a(De);m=d(au,"self-attention"),au.forEach(t),$=d(fe,` layer with
`),de=s(fe,"EM",{});var ru=a(de);st=d(ru,"Longformer"),ru.forEach(t),at=d(fe,"\u2019s "),I=s(fe,"EM",{});var du=a(I);rt=d(du,"chunked self-attention"),du.forEach(t),dt=d(fe," layer. "),Oe=s(fe,"A",{href:!0});var iu=a(Oe);J=d(iu,"LEDTokenizer"),iu.forEach(t),ie=d(fe,` is an alias of
`),Ae=s(fe,"A",{href:!0});var lu=a(Ae);it=d(lu,"BartTokenizer"),lu.forEach(t),le=d(fe,"."),fe.forEach(t),lt=l(ye),ce=s(ye,"LI",{});var bs=a(ce);Ve=d(bs,"LED works very well on long-range "),Re=s(bs,"EM",{});var cu=a(Re);Ad=d(cu,"sequence-to-sequence"),cu.forEach(t),Nd=d(bs," tasks where the "),Ss=s(bs,"CODE",{});var hu=a(Ss);Pd=d(hu,"input_ids"),hu.forEach(t),jd=d(bs,` largely exceed a length of
1024 tokens.`),bs.forEach(t),Id=l(ye),ze=s(ye,"LI",{});var Xe=a(ze);Bd=d(Xe,"LED pads the "),Cs=s(Xe,"CODE",{});var pu=a(Cs);Gd=d(pu,"input_ids"),pu.forEach(t),Qd=d(Xe," to be a multiple of "),Os=s(Xe,"CODE",{});var uu=a(Os);Hd=d(uu,"config.attention_window"),uu.forEach(t),Wd=d(Xe,` if required. Therefore a small speed-up is
gained, when `),Kn=s(Xe,"A",{href:!0});var mu=a(Kn);Ud=d(mu,"LEDTokenizer"),mu.forEach(t),Vd=d(Xe," is used with the "),As=s(Xe,"CODE",{});var fu=a(As);Rd=d(fu,"pad_to_multiple_of"),fu.forEach(t),Kd=d(Xe," argument."),Xe.forEach(t),Xd=l(ye),Z=s(ye,"LI",{});var Ee=a(Z);Jd=d(Ee,"LED makes use of "),Ns=s(Ee,"EM",{});var _u=a(Ns);Zd=d(_u,"global attention"),_u.forEach(t),Yd=d(Ee," by means of the "),Ps=s(Ee,"CODE",{});var gu=a(Ps);ei=d(gu,"global_attention_mask"),gu.forEach(t),ti=d(Ee,` (see
`),Xn=s(Ee,"A",{href:!0});var vu=a(Xn);oi=d(vu,"LongformerModel"),vu.forEach(t),ni=d(Ee,"). For summarization, it is advised to put "),js=s(Ee,"EM",{});var Tu=a(js);si=d(Tu,"global attention"),Tu.forEach(t),ai=d(Ee,` only on the first
`),Is=s(Ee,"CODE",{});var ku=a(Is);ri=d(ku,"<s>"),ku.forEach(t),di=d(Ee," token. For question answering, it is advised to put "),Bs=s(Ee,"EM",{});var bu=a(Bs);ii=d(bu,"global attention"),bu.forEach(t),li=d(Ee," on all tokens of the question."),Ee.forEach(t),ci=l(ye),ct=s(ye,"LI",{});var ws=a(ct);hi=d(ws,"To fine-tune LED on all 16384, it is necessary to enable "),Gs=s(ws,"EM",{});var wu=a(Gs);pi=d(wu,"gradient checkpointing"),wu.forEach(t),ui=d(ws,` by executing
`),Qs=s(ws,"CODE",{});var yu=a(Qs);mi=d(yu,"model.gradient_checkpointing_enable()"),yu.forEach(t),fi=d(ws,"."),ws.forEach(t),_i=l(ye),vo=s(ye,"LI",{});var Ur=a(vo);gi=d(Ur,"A notebook showing how to evaluate LED, can be accessed "),To=s(Ur,"A",{href:!0,rel:!0});var Eu=a(To);vi=d(Eu,"here"),Eu.forEach(t),Ti=d(Ur,"."),Ur.forEach(t),ki=l(ye),ko=s(ye,"LI",{});var Vr=a(ko);bi=d(Vr,"A notebook showing how to fine-tune LED, can be accessed "),bo=s(Vr,"A",{href:!0,rel:!0});var qu=a(bo);wi=d(qu,"here"),qu.forEach(t),yi=d(Vr,"."),Vr.forEach(t),ye.forEach(t),_r=l(o),Pt=s(o,"P",{});var Rr=a(Pt);Ei=d(Rr,"This model was contributed by "),wo=s(Rr,"A",{href:!0,rel:!0});var Lu=a(wo);qi=d(Lu,"patrickvonplaten"),Lu.forEach(t),Li=d(Rr,"."),Rr.forEach(t),gr=l(o),ht=s(o,"H2",{class:!0});var Kr=a(ht);jt=s(Kr,"A",{id:!0,class:!0,href:!0});var Du=a(jt);Hs=s(Du,"SPAN",{});var zu=a(Hs);_(yo.$$.fragment,zu),zu.forEach(t),Du.forEach(t),Di=l(Kr),Ws=s(Kr,"SPAN",{});var $u=a(Ws);zi=d($u,"LEDConfig"),$u.forEach(t),Kr.forEach(t),vr=l(o),O=s(o,"DIV",{class:!0});var W=a(O);_(Eo.$$.fragment,W),$i=l(W),pt=s(W,"P",{});var ys=a(pt);Fi=d(ys,"This is the configuration class to store the configuration of a "),Jn=s(ys,"A",{href:!0});var Fu=a(Jn);xi=d(Fu,"LEDModel"),Fu.forEach(t),Mi=d(ys,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(ys,"A",{href:!0,rel:!0});var xu=a(qo);Si=d(xu,"allenai/led-base-16384"),xu.forEach(t),Ci=d(ys," architecture."),ys.forEach(t),Oi=l(W),ut=s(W,"P",{});var Es=a(ut);Ai=d(Es,"Configuration objects inherit from "),Zn=s(Es,"A",{href:!0});var Mu=a(Zn);Ni=d(Mu,"PretrainedConfig"),Mu.forEach(t),Pi=d(Es,` and can be used to control the model outputs. Read the
documentation from `),Yn=s(Es,"A",{href:!0});var Su=a(Yn);ji=d(Su,"PretrainedConfig"),Su.forEach(t),Ii=d(Es," for more information."),Es.forEach(t),Bi=l(W),Us=s(W,"P",{});var Cu=a(Us);Gi=d(Cu,"Example:"),Cu.forEach(t),Qi=l(W),_(Lo.$$.fragment,W),Hi=l(W),Vs=s(W,"BLOCKQUOTE",{});var Ou=a(Vs);Rs=s(Ou,"BLOCKQUOTE",{});var Au=a(Rs);Ks=s(Au,"BLOCKQUOTE",{});var Nu=a(Ks);Xs=s(Nu,"P",{});var Pu=a(Xs);Wi=d(Pu,"from transformers import LEDModel, LEDConfig"),Pu.forEach(t),Nu.forEach(t),Au.forEach(t),Ou.forEach(t),Ui=l(W),Js=s(W,"BLOCKQUOTE",{});var ju=a(Js);Zs=s(ju,"BLOCKQUOTE",{});var Iu=a(Zs);Ys=s(Iu,"BLOCKQUOTE",{});var Bu=a(Ys);It=s(Bu,"H1",{class:!0});var Xr=a(It);Bt=s(Xr,"A",{id:!0,class:!0,href:!0});var Gu=a(Bt);ea=s(Gu,"SPAN",{});var Qu=a(ea);_(Do.$$.fragment,Qu),Qu.forEach(t),Gu.forEach(t),Vi=l(Xr),ta=s(Xr,"SPAN",{});var Hu=a(ta);Ri=d(Hu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Hu.forEach(t),Xr.forEach(t),Bu.forEach(t),Iu.forEach(t),ju.forEach(t),Ki=l(W),oa=s(W,"BLOCKQUOTE",{});var Wu=a(oa);na=s(Wu,"BLOCKQUOTE",{});var Uu=a(na);zo=s(Uu,"BLOCKQUOTE",{});var Jr=a(zo);Gt=s(Jr,"H1",{class:!0});var Zr=a(Gt);Qt=s(Zr,"A",{id:!0,class:!0,href:!0});var Vu=a(Qt);sa=s(Vu,"SPAN",{});var Ru=a(sa);_($o.$$.fragment,Ru),Ru.forEach(t),Vu.forEach(t),Xi=l(Zr),aa=s(Zr,"SPAN",{});var Ku=a(aa);Ji=d(Ku,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ku.forEach(t),Zr.forEach(t),Zi=l(Jr),ra=s(Jr,"P",{});var Xu=a(ra);Yi=d(Xu,"LEDModel(configuration)"),Xu.forEach(t),Jr.forEach(t),Uu.forEach(t),Wu.forEach(t),el=l(W),da=s(W,"BLOCKQUOTE",{});var Ju=a(da);ia=s(Ju,"BLOCKQUOTE",{});var Zu=a(ia);la=s(Zu,"BLOCKQUOTE",{});var Yu=a(la);Ht=s(Yu,"H1",{class:!0});var Yr=a(Ht);Wt=s(Yr,"A",{id:!0,class:!0,href:!0});var em=a(Wt);ca=s(em,"SPAN",{});var tm=a(ca);_(Fo.$$.fragment,tm),tm.forEach(t),em.forEach(t),tl=l(Yr),ha=s(Yr,"SPAN",{});var om=a(ha);ol=d(om,"Accessing the model configuration >>> configuration = model.config"),om.forEach(t),Yr.forEach(t),Yu.forEach(t),Zu.forEach(t),Ju.forEach(t),W.forEach(t),Tr=l(o),mt=s(o,"H2",{class:!0});var ed=a(mt);Ut=s(ed,"A",{id:!0,class:!0,href:!0});var nm=a(Ut);pa=s(nm,"SPAN",{});var sm=a(pa);_(xo.$$.fragment,sm),sm.forEach(t),nm.forEach(t),nl=l(ed),ua=s(ed,"SPAN",{});var am=a(ua);sl=d(am,"LEDTokenizer"),am.forEach(t),ed.forEach(t),kr=l(o),P=s(o,"DIV",{class:!0});var oe=a(P);_(Mo.$$.fragment,oe),al=l(oe),ma=s(oe,"P",{});var rm=a(ma);rl=d(rm,"Construct a LED tokenizer."),rm.forEach(t),dl=l(oe),Vt=s(oe,"P",{});var mr=a(Vt);es=s(mr,"A",{href:!0});var dm=a(es);il=d(dm,"LEDTokenizer"),dm.forEach(t),ll=d(mr," is identical to "),ts=s(mr,"A",{href:!0});var im=a(ts);cl=d(im,"BartTokenizer"),im.forEach(t),hl=d(mr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),mr.forEach(t),pl=l(oe),So=s(oe,"P",{});var td=a(So);ul=d(td,"Refer to superclass "),os=s(td,"A",{href:!0});var lm=a(os);ml=d(lm,"BartTokenizer"),lm.forEach(t),fl=d(td," for usage examples and documentation concerning parameters."),td.forEach(t),_l=l(oe),Ke=s(oe,"DIV",{class:!0});var qs=a(Ke);_(Co.$$.fragment,qs),gl=l(qs),fa=s(qs,"P",{});var cm=a(fa);vl=d(cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),cm.forEach(t),Tl=l(qs),Oo=s(qs,"UL",{});var od=a(Oo);ns=s(od,"LI",{});var Xp=a(ns);kl=d(Xp,"single sequence: "),_a=s(Xp,"CODE",{});var hm=a(_a);bl=d(hm,"<s> X </s>"),hm.forEach(t),Xp.forEach(t),wl=l(od),ss=s(od,"LI",{});var Jp=a(ss);yl=d(Jp,"pair of sequences: "),ga=s(Jp,"CODE",{});var pm=a(ga);El=d(pm,"<s> A </s></s> B </s>"),pm.forEach(t),Jp.forEach(t),od.forEach(t),qs.forEach(t),ql=l(oe),Rt=s(oe,"DIV",{class:!0});var nd=a(Rt);_(Ao.$$.fragment,nd),Ll=l(nd),No=s(nd,"P",{});var sd=a(No);Dl=d(sd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),va=s(sd,"CODE",{});var um=a(va);zl=d(um,"prepare_for_model"),um.forEach(t),$l=d(sd," method."),sd.forEach(t),nd.forEach(t),Fl=l(oe),Kt=s(oe,"DIV",{class:!0});var ad=a(Kt);_(Po.$$.fragment,ad),xl=l(ad),Ta=s(ad,"P",{});var mm=a(Ta);Ml=d(mm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),mm.forEach(t),ad.forEach(t),Sl=l(oe),as=s(oe,"DIV",{class:!0});var fm=a(as);_(jo.$$.fragment,fm),fm.forEach(t),oe.forEach(t),br=l(o),ft=s(o,"H2",{class:!0});var rd=a(ft);Xt=s(rd,"A",{id:!0,class:!0,href:!0});var _m=a(Xt);ka=s(_m,"SPAN",{});var gm=a(ka);_(Io.$$.fragment,gm),gm.forEach(t),_m.forEach(t),Cl=l(rd),ba=s(rd,"SPAN",{});var vm=a(ba);Ol=d(vm,"LEDTokenizerFast"),vm.forEach(t),rd.forEach(t),wr=l(o),$e=s(o,"DIV",{class:!0});var mo=a($e);_(Bo.$$.fragment,mo),Al=l(mo),Go=s(mo,"P",{});var dd=a(Go);Nl=d(dd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=s(dd,"EM",{});var Tm=a(wa);Pl=d(Tm,"tokenizers"),Tm.forEach(t),jl=d(dd," library)."),dd.forEach(t),Il=l(mo),Jt=s(mo,"P",{});var fr=a(Jt);rs=s(fr,"A",{href:!0});var km=a(rs);Bl=d(km,"LEDTokenizerFast"),km.forEach(t),Gl=d(fr," is identical to "),ds=s(fr,"A",{href:!0});var bm=a(ds);Ql=d(bm,"BartTokenizerFast"),bm.forEach(t),Hl=d(fr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),fr.forEach(t),Wl=l(mo),Qo=s(mo,"P",{});var id=a(Qo);Ul=d(id,"Refer to superclass "),is=s(id,"A",{href:!0});var wm=a(is);Vl=d(wm,"BartTokenizerFast"),wm.forEach(t),Rl=d(id," for usage examples and documentation concerning parameters."),id.forEach(t),mo.forEach(t),yr=l(o),_t=s(o,"H2",{class:!0});var ld=a(_t);Zt=s(ld,"A",{id:!0,class:!0,href:!0});var ym=a(Zt);ya=s(ym,"SPAN",{});var Em=a(ya);_(Ho.$$.fragment,Em),Em.forEach(t),ym.forEach(t),Kl=l(ld),Ea=s(ld,"SPAN",{});var qm=a(Ea);Xl=d(qm,"LED specific outputs"),qm.forEach(t),ld.forEach(t),Er=l(o),gt=s(o,"DIV",{class:!0});var cd=a(gt);_(Wo.$$.fragment,cd),Jl=l(cd),qa=s(cd,"P",{});var Lm=a(qa);Zl=d(Lm,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Lm.forEach(t),cd.forEach(t),qr=l(o),vt=s(o,"DIV",{class:!0});var hd=a(vt);_(Uo.$$.fragment,hd),Yl=l(hd),La=s(hd,"P",{});var Dm=a(La);ec=d(Dm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dm.forEach(t),hd.forEach(t),Lr=l(o),Tt=s(o,"DIV",{class:!0});var pd=a(Tt);_(Vo.$$.fragment,pd),tc=l(pd),Da=s(pd,"P",{});var zm=a(Da);oc=d(zm,"Base class for sequence-to-sequence language models outputs."),zm.forEach(t),pd.forEach(t),Dr=l(o),kt=s(o,"DIV",{class:!0});var ud=a(kt);_(Ro.$$.fragment,ud),nc=l(ud),za=s(ud,"P",{});var $m=a(za);sc=d($m,"Base class for outputs of sequence-to-sequence sentence classification models."),$m.forEach(t),ud.forEach(t),zr=l(o),bt=s(o,"DIV",{class:!0});var md=a(bt);_(Ko.$$.fragment,md),ac=l(md),$a=s(md,"P",{});var Fm=a($a);rc=d(Fm,"Base class for outputs of sequence-to-sequence question answering models."),Fm.forEach(t),md.forEach(t),$r=l(o),wt=s(o,"DIV",{class:!0});var fd=a(wt);_(Xo.$$.fragment,fd),dc=l(fd),Fa=s(fd,"P",{});var xm=a(Fa);ic=d(xm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),xm.forEach(t),fd.forEach(t),Fr=l(o),yt=s(o,"DIV",{class:!0});var _d=a(yt);_(Jo.$$.fragment,_d),lc=l(_d),xa=s(_d,"P",{});var Mm=a(xa);cc=d(Mm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Mm.forEach(t),_d.forEach(t),xr=l(o),Et=s(o,"DIV",{class:!0});var gd=a(Et);_(Zo.$$.fragment,gd),hc=l(gd),Ma=s(gd,"P",{});var Sm=a(Ma);pc=d(Sm,"Base class for sequence-to-sequence language models outputs."),Sm.forEach(t),gd.forEach(t),Mr=l(o),qt=s(o,"H2",{class:!0});var vd=a(qt);Yt=s(vd,"A",{id:!0,class:!0,href:!0});var Cm=a(Yt);Sa=s(Cm,"SPAN",{});var Om=a(Sa);_(Yo.$$.fragment,Om),Om.forEach(t),Cm.forEach(t),uc=l(vd),Ca=s(vd,"SPAN",{});var Am=a(Ca);mc=d(Am,"LEDModel"),Am.forEach(t),vd.forEach(t),Sr=l(o),Fe=s(o,"DIV",{class:!0});var fo=a(Fe);_(en.$$.fragment,fo),fc=l(fo),tn=s(fo,"P",{});var Td=a(tn);_c=d(Td,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=s(Td,"A",{href:!0});var Nm=a(ls);gc=d(Nm,"PreTrainedModel"),Nm.forEach(t),vc=d(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),Tc=l(fo),on=s(fo,"P",{});var kd=a(on);kc=d(kd,"This model is also a PyTorch "),nn=s(kd,"A",{href:!0,rel:!0});var Pm=a(nn);bc=d(Pm,"torch.nn.Module"),Pm.forEach(t),wc=d(kd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd.forEach(t),yc=l(fo),ke=s(fo,"DIV",{class:!0});var Je=a(ke);_(sn.$$.fragment,Je),Ec=l(Je),Lt=s(Je,"P",{});var Ls=a(Lt);qc=d(Ls,"The "),cs=s(Ls,"A",{href:!0});var jm=a(cs);Lc=d(jm,"LEDModel"),jm.forEach(t),Dc=d(Ls," forward method, overrides the "),Oa=s(Ls,"CODE",{});var Im=a(Oa);zc=d(Im,"__call__"),Im.forEach(t),$c=d(Ls," special method."),Ls.forEach(t),Fc=l(Je),_(eo.$$.fragment,Je),xc=l(Je),Aa=s(Je,"P",{});var Bm=a(Aa);Mc=d(Bm,"Example:"),Bm.forEach(t),Sc=l(Je),_(an.$$.fragment,Je),Je.forEach(t),fo.forEach(t),Cr=l(o),Dt=s(o,"H2",{class:!0});var bd=a(Dt);to=s(bd,"A",{id:!0,class:!0,href:!0});var Gm=a(to);Na=s(Gm,"SPAN",{});var Qm=a(Na);_(rn.$$.fragment,Qm),Qm.forEach(t),Gm.forEach(t),Cc=l(bd),Pa=s(bd,"SPAN",{});var Hm=a(Pa);Oc=d(Hm,"LEDForConditionalGeneration"),Hm.forEach(t),bd.forEach(t),Or=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);_(dn.$$.fragment,_o),Ac=l(_o),ln=s(_o,"P",{});var wd=a(ln);Nc=d(wd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(wd,"A",{href:!0});var Wm=a(hs);Pc=d(Wm,"PreTrainedModel"),Wm.forEach(t),jc=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),Ic=l(_o),cn=s(_o,"P",{});var yd=a(cn);Bc=d(yd,"This model is also a PyTorch "),hn=s(yd,"A",{href:!0,rel:!0});var Um=a(hn);Gc=d(Um,"torch.nn.Module"),Um.forEach(t),Qc=d(yd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yd.forEach(t),Hc=l(_o),H=s(_o,"DIV",{class:!0});var qe=a(H);_(pn.$$.fragment,qe),Wc=l(qe),zt=s(qe,"P",{});var Ds=a(zt);Uc=d(Ds,"The "),ps=s(Ds,"A",{href:!0});var Vm=a(ps);Vc=d(Vm,"LEDForConditionalGeneration"),Vm.forEach(t),Rc=d(Ds," forward method, overrides the "),ja=s(Ds,"CODE",{});var Rm=a(ja);Kc=d(Rm,"__call__"),Rm.forEach(t),Xc=d(Ds," special method."),Ds.forEach(t),Jc=l(qe),_(oo.$$.fragment,qe),Zc=l(qe),Ia=s(qe,"P",{});var Km=a(Ia);Yc=d(Km,"Conditional generation example:"),Km.forEach(t),eh=l(qe),_(un.$$.fragment,qe),th=l(qe),Ba=s(qe,"P",{});var Xm=a(Ba);oh=d(Xm,"Summarization example:"),Xm.forEach(t),nh=l(qe),_(mn.$$.fragment,qe),qe.forEach(t),_o.forEach(t),Ar=l(o),$t=s(o,"H2",{class:!0});var Ed=a($t);no=s(Ed,"A",{id:!0,class:!0,href:!0});var Jm=a(no);Ga=s(Jm,"SPAN",{});var Zm=a(Ga);_(fn.$$.fragment,Zm),Zm.forEach(t),Jm.forEach(t),sh=l(Ed),Qa=s(Ed,"SPAN",{});var Ym=a(Qa);ah=d(Ym,"LEDForSequenceClassification"),Ym.forEach(t),Ed.forEach(t),Nr=l(o),he=s(o,"DIV",{class:!0});var Ze=a(he);_(_n.$$.fragment,Ze),rh=l(Ze),Ha=s(Ze,"P",{});var ef=a(Ha);dh=d(ef,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ef.forEach(t),ih=l(Ze),gn=s(Ze,"P",{});var qd=a(gn);lh=d(qd,"This model inherits from "),us=s(qd,"A",{href:!0});var tf=a(us);ch=d(tf,"PreTrainedModel"),tf.forEach(t),hh=d(qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd.forEach(t),ph=l(Ze),vn=s(Ze,"P",{});var Ld=a(vn);uh=d(Ld,"This model is also a PyTorch "),Tn=s(Ld,"A",{href:!0,rel:!0});var of=a(Tn);mh=d(of,"torch.nn.Module"),of.forEach(t),fh=d(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),_h=l(Ze),N=s(Ze,"DIV",{class:!0});var U=a(N);_(kn.$$.fragment,U),gh=l(U),Ft=s(U,"P",{});var zs=a(Ft);vh=d(zs,"The "),ms=s(zs,"A",{href:!0});var nf=a(ms);Th=d(nf,"LEDForSequenceClassification"),nf.forEach(t),kh=d(zs," forward method, overrides the "),Wa=s(zs,"CODE",{});var sf=a(Wa);bh=d(sf,"__call__"),sf.forEach(t),wh=d(zs," special method."),zs.forEach(t),yh=l(U),_(so.$$.fragment,U),Eh=l(U),Ua=s(U,"P",{});var af=a(Ua);qh=d(af,"Example of single-label classification:"),af.forEach(t),Lh=l(U),_(bn.$$.fragment,U),Dh=l(U),_(wn.$$.fragment,U),zh=l(U),Va=s(U,"P",{});var rf=a(Va);$h=d(rf,"Example of multi-label classification:"),rf.forEach(t),Fh=l(U),_(yn.$$.fragment,U),xh=l(U),_(En.$$.fragment,U),U.forEach(t),Ze.forEach(t),Pr=l(o),xt=s(o,"H2",{class:!0});var Dd=a(xt);ao=s(Dd,"A",{id:!0,class:!0,href:!0});var df=a(ao);Ra=s(df,"SPAN",{});var lf=a(Ra);_(qn.$$.fragment,lf),lf.forEach(t),df.forEach(t),Mh=l(Dd),Ka=s(Dd,"SPAN",{});var cf=a(Ka);Sh=d(cf,"LEDForQuestionAnswering"),cf.forEach(t),Dd.forEach(t),jr=l(o),pe=s(o,"DIV",{class:!0});var Ye=a(pe);_(Ln.$$.fragment,Ye),Ch=l(Ye),Mt=s(Ye,"P",{});var $s=a(Mt);Oh=d($s,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=s($s,"CODE",{});var hf=a(Xa);Ah=d(hf,"span start logits"),hf.forEach(t),Nh=d($s," and "),Ja=s($s,"CODE",{});var pf=a(Ja);Ph=d(pf,"span end logits"),pf.forEach(t),jh=d($s,")."),$s.forEach(t),Ih=l(Ye),Dn=s(Ye,"P",{});var zd=a(Dn);Bh=d(zd,"This model inherits from "),fs=s(zd,"A",{href:!0});var uf=a(fs);Gh=d(uf,"PreTrainedModel"),uf.forEach(t),Qh=d(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),Hh=l(Ye),zn=s(Ye,"P",{});var $d=a(zn);Wh=d($d,"This model is also a PyTorch "),$n=s($d,"A",{href:!0,rel:!0});var mf=a($n);Uh=d(mf,"torch.nn.Module"),mf.forEach(t),Vh=d($d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d.forEach(t),Rh=l(Ye),te=s(Ye,"DIV",{class:!0});var Ne=a(te);_(Fn.$$.fragment,Ne),Kh=l(Ne),St=s(Ne,"P",{});var Fs=a(St);Xh=d(Fs,"The "),_s=s(Fs,"A",{href:!0});var ff=a(_s);Jh=d(ff,"LEDForQuestionAnswering"),ff.forEach(t),Zh=d(Fs," forward method, overrides the "),Za=s(Fs,"CODE",{});var _f=a(Za);Yh=d(_f,"__call__"),_f.forEach(t),ep=d(Fs," special method."),Fs.forEach(t),tp=l(Ne),_(ro.$$.fragment,Ne),op=l(Ne),Ya=s(Ne,"P",{});var gf=a(Ya);np=d(gf,"Example:"),gf.forEach(t),sp=l(Ne),_(xn.$$.fragment,Ne),ap=l(Ne),_(Mn.$$.fragment,Ne),Ne.forEach(t),Ye.forEach(t),Ir=l(o),Ct=s(o,"H2",{class:!0});var Fd=a(Ct);io=s(Fd,"A",{id:!0,class:!0,href:!0});var vf=a(io);er=s(vf,"SPAN",{});var Tf=a(er);_(Sn.$$.fragment,Tf),Tf.forEach(t),vf.forEach(t),rp=l(Fd),tr=s(Fd,"SPAN",{});var kf=a(tr);dp=d(kf,"TFLEDModel"),kf.forEach(t),Fd.forEach(t),Br=l(o),ue=s(o,"DIV",{class:!0});var et=a(ue);_(Cn.$$.fragment,et),ip=l(et),On=s(et,"P",{});var xd=a(On);lp=d(xd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=s(xd,"A",{href:!0});var bf=a(gs);cp=d(bf,"TFPreTrainedModel"),bf.forEach(t),hp=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),pp=l(et),An=s(et,"P",{});var Md=a(An);up=d(Md,"This model is also a "),Nn=s(Md,"A",{href:!0,rel:!0});var wf=a(Nn);mp=d(wf,"tf.keras.Model"),wf.forEach(t),fp=d(Md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Md.forEach(t),_p=l(et),_(lo.$$.fragment,et),gp=l(et),be=s(et,"DIV",{class:!0});var tt=a(be);_(Pn.$$.fragment,tt),vp=l(tt),Ot=s(tt,"P",{});var xs=a(Ot);Tp=d(xs,"The "),vs=s(xs,"A",{href:!0});var yf=a(vs);kp=d(yf,"TFLEDModel"),yf.forEach(t),bp=d(xs," forward method, overrides the "),or=s(xs,"CODE",{});var Ef=a(or);wp=d(Ef,"__call__"),Ef.forEach(t),yp=d(xs," special method."),xs.forEach(t),Ep=l(tt),_(co.$$.fragment,tt),qp=l(tt),nr=s(tt,"P",{});var qf=a(nr);Lp=d(qf,"Example:"),qf.forEach(t),Dp=l(tt),_(jn.$$.fragment,tt),tt.forEach(t),et.forEach(t),Gr=l(o),At=s(o,"H2",{class:!0});var Sd=a(At);ho=s(Sd,"A",{id:!0,class:!0,href:!0});var Lf=a(ho);sr=s(Lf,"SPAN",{});var Df=a(sr);_(In.$$.fragment,Df),Df.forEach(t),Lf.forEach(t),zp=l(Sd),ar=s(Sd,"SPAN",{});var zf=a(ar);$p=d(zf,"TFLEDForConditionalGeneration"),zf.forEach(t),Sd.forEach(t),Qr=l(o),me=s(o,"DIV",{class:!0});var ot=a(me);_(Bn.$$.fragment,ot),Fp=l(ot),Gn=s(ot,"P",{});var Cd=a(Gn);xp=d(Cd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ts=s(Cd,"A",{href:!0});var $f=a(Ts);Mp=d($f,"TFPreTrainedModel"),$f.forEach(t),Sp=d(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),Cp=l(ot),Qn=s(ot,"P",{});var Od=a(Qn);Op=d(Od,"This model is also a "),Hn=s(Od,"A",{href:!0,rel:!0});var Ff=a(Hn);Ap=d(Ff,"tf.keras.Model"),Ff.forEach(t),Np=d(Od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Od.forEach(t),Pp=l(ot),_(po.$$.fragment,ot),jp=l(ot),we=s(ot,"DIV",{class:!0});var nt=a(we);_(Wn.$$.fragment,nt),Ip=l(nt),Nt=s(nt,"P",{});var Ms=a(Nt);Bp=d(Ms,"The "),ks=s(Ms,"A",{href:!0});var xf=a(ks);Gp=d(xf,"TFLEDForConditionalGeneration"),xf.forEach(t),Qp=d(Ms," forward method, overrides the "),rr=s(Ms,"CODE",{});var Mf=a(rr);Hp=d(Mf,"__call__"),Mf.forEach(t),Wp=d(Ms," special method."),Ms.forEach(t),Up=l(nt),_(uo.$$.fragment,nt),Vp=l(nt),dr=s(nt,"P",{});var Sf=a(dr);Rp=d(Sf,"Examples:"),Sf.forEach(t),Kp=l(nt),_(Un.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Rf)),c(E,"id","led"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#led"),c(b,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(se,"href","https://arxiv.org/abs/2004.05150"),c(se,"rel","nofollow"),c(Q,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(j,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Ae,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Kn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Xn,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),c(To,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(To,"rel","nofollow"),c(bo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(bo,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ht,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Zn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Gt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(O,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(mt,"class","relative group"),c(es,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(ts,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(os,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Ke,"class","docstring"),c(Rt,"class","docstring"),c(Kt,"class","docstring"),c(as,"class","docstring"),c(P,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(rs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizerFast"),c(ds,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c(is,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c($e,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(_t,"class","relative group"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Et,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(qt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(ke,"class","docstring"),c(Fe,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Dt,"class","relative group"),c(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(ps,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(H,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c($t,"class","relative group"),c(us,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tn,"rel","nofollow"),c(ms,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),c(N,"class","docstring"),c(he,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c(xt,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c($n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($n,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(te,"class","docstring"),c(pe,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(Ct,"class","relative group"),c(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(vs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),c(be,"class","docstring"),c(ue,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(At,"class","relative group"),c(Ts,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hn,"rel","nofollow"),c(ks,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(we,"class","docstring"),c(me,"class","docstring")},m(o,p){e(document.head,u),h(o,L,p),h(o,b,p),e(b,E),e(E,q),g(y,q,null),e(b,w),e(b,D),e(D,je),h(o,ge,p),h(o,z,p),e(z,Y),e(Y,V),g(ne,V,null),e(z,Ie),e(z,R),e(R,Be),h(o,Me,p),h(o,G,p),e(G,K),e(G,se),e(se,Le),e(G,S),h(o,A,p),h(o,ve,p),e(ve,ae),h(o,Se,p),h(o,Te,p),e(Te,X),e(X,Ge),h(o,Ce,p),h(o,C,p),e(C,Qe),h(o,ee,p),h(o,x,p),e(x,M),e(M,Q),e(Q,He),e(M,We),e(M,j),e(j,Ue),e(M,re),e(M,De),e(De,m),e(M,$),e(M,de),e(de,st),e(M,at),e(M,I),e(I,rt),e(M,dt),e(M,Oe),e(Oe,J),e(M,ie),e(M,Ae),e(Ae,it),e(M,le),e(x,lt),e(x,ce),e(ce,Ve),e(ce,Re),e(Re,Ad),e(ce,Nd),e(ce,Ss),e(Ss,Pd),e(ce,jd),e(x,Id),e(x,ze),e(ze,Bd),e(ze,Cs),e(Cs,Gd),e(ze,Qd),e(ze,Os),e(Os,Hd),e(ze,Wd),e(ze,Kn),e(Kn,Ud),e(ze,Vd),e(ze,As),e(As,Rd),e(ze,Kd),e(x,Xd),e(x,Z),e(Z,Jd),e(Z,Ns),e(Ns,Zd),e(Z,Yd),e(Z,Ps),e(Ps,ei),e(Z,ti),e(Z,Xn),e(Xn,oi),e(Z,ni),e(Z,js),e(js,si),e(Z,ai),e(Z,Is),e(Is,ri),e(Z,di),e(Z,Bs),e(Bs,ii),e(Z,li),e(x,ci),e(x,ct),e(ct,hi),e(ct,Gs),e(Gs,pi),e(ct,ui),e(ct,Qs),e(Qs,mi),e(ct,fi),e(x,_i),e(x,vo),e(vo,gi),e(vo,To),e(To,vi),e(vo,Ti),e(x,ki),e(x,ko),e(ko,bi),e(ko,bo),e(bo,wi),e(ko,yi),h(o,_r,p),h(o,Pt,p),e(Pt,Ei),e(Pt,wo),e(wo,qi),e(Pt,Li),h(o,gr,p),h(o,ht,p),e(ht,jt),e(jt,Hs),g(yo,Hs,null),e(ht,Di),e(ht,Ws),e(Ws,zi),h(o,vr,p),h(o,O,p),g(Eo,O,null),e(O,$i),e(O,pt),e(pt,Fi),e(pt,Jn),e(Jn,xi),e(pt,Mi),e(pt,qo),e(qo,Si),e(pt,Ci),e(O,Oi),e(O,ut),e(ut,Ai),e(ut,Zn),e(Zn,Ni),e(ut,Pi),e(ut,Yn),e(Yn,ji),e(ut,Ii),e(O,Bi),e(O,Us),e(Us,Gi),e(O,Qi),g(Lo,O,null),e(O,Hi),e(O,Vs),e(Vs,Rs),e(Rs,Ks),e(Ks,Xs),e(Xs,Wi),e(O,Ui),e(O,Js),e(Js,Zs),e(Zs,Ys),e(Ys,It),e(It,Bt),e(Bt,ea),g(Do,ea,null),e(It,Vi),e(It,ta),e(ta,Ri),e(O,Ki),e(O,oa),e(oa,na),e(na,zo),e(zo,Gt),e(Gt,Qt),e(Qt,sa),g($o,sa,null),e(Gt,Xi),e(Gt,aa),e(aa,Ji),e(zo,Zi),e(zo,ra),e(ra,Yi),e(O,el),e(O,da),e(da,ia),e(ia,la),e(la,Ht),e(Ht,Wt),e(Wt,ca),g(Fo,ca,null),e(Ht,tl),e(Ht,ha),e(ha,ol),h(o,Tr,p),h(o,mt,p),e(mt,Ut),e(Ut,pa),g(xo,pa,null),e(mt,nl),e(mt,ua),e(ua,sl),h(o,kr,p),h(o,P,p),g(Mo,P,null),e(P,al),e(P,ma),e(ma,rl),e(P,dl),e(P,Vt),e(Vt,es),e(es,il),e(Vt,ll),e(Vt,ts),e(ts,cl),e(Vt,hl),e(P,pl),e(P,So),e(So,ul),e(So,os),e(os,ml),e(So,fl),e(P,_l),e(P,Ke),g(Co,Ke,null),e(Ke,gl),e(Ke,fa),e(fa,vl),e(Ke,Tl),e(Ke,Oo),e(Oo,ns),e(ns,kl),e(ns,_a),e(_a,bl),e(Oo,wl),e(Oo,ss),e(ss,yl),e(ss,ga),e(ga,El),e(P,ql),e(P,Rt),g(Ao,Rt,null),e(Rt,Ll),e(Rt,No),e(No,Dl),e(No,va),e(va,zl),e(No,$l),e(P,Fl),e(P,Kt),g(Po,Kt,null),e(Kt,xl),e(Kt,Ta),e(Ta,Ml),e(P,Sl),e(P,as),g(jo,as,null),h(o,br,p),h(o,ft,p),e(ft,Xt),e(Xt,ka),g(Io,ka,null),e(ft,Cl),e(ft,ba),e(ba,Ol),h(o,wr,p),h(o,$e,p),g(Bo,$e,null),e($e,Al),e($e,Go),e(Go,Nl),e(Go,wa),e(wa,Pl),e(Go,jl),e($e,Il),e($e,Jt),e(Jt,rs),e(rs,Bl),e(Jt,Gl),e(Jt,ds),e(ds,Ql),e(Jt,Hl),e($e,Wl),e($e,Qo),e(Qo,Ul),e(Qo,is),e(is,Vl),e(Qo,Rl),h(o,yr,p),h(o,_t,p),e(_t,Zt),e(Zt,ya),g(Ho,ya,null),e(_t,Kl),e(_t,Ea),e(Ea,Xl),h(o,Er,p),h(o,gt,p),g(Wo,gt,null),e(gt,Jl),e(gt,qa),e(qa,Zl),h(o,qr,p),h(o,vt,p),g(Uo,vt,null),e(vt,Yl),e(vt,La),e(La,ec),h(o,Lr,p),h(o,Tt,p),g(Vo,Tt,null),e(Tt,tc),e(Tt,Da),e(Da,oc),h(o,Dr,p),h(o,kt,p),g(Ro,kt,null),e(kt,nc),e(kt,za),e(za,sc),h(o,zr,p),h(o,bt,p),g(Ko,bt,null),e(bt,ac),e(bt,$a),e($a,rc),h(o,$r,p),h(o,wt,p),g(Xo,wt,null),e(wt,dc),e(wt,Fa),e(Fa,ic),h(o,Fr,p),h(o,yt,p),g(Jo,yt,null),e(yt,lc),e(yt,xa),e(xa,cc),h(o,xr,p),h(o,Et,p),g(Zo,Et,null),e(Et,hc),e(Et,Ma),e(Ma,pc),h(o,Mr,p),h(o,qt,p),e(qt,Yt),e(Yt,Sa),g(Yo,Sa,null),e(qt,uc),e(qt,Ca),e(Ca,mc),h(o,Sr,p),h(o,Fe,p),g(en,Fe,null),e(Fe,fc),e(Fe,tn),e(tn,_c),e(tn,ls),e(ls,gc),e(tn,vc),e(Fe,Tc),e(Fe,on),e(on,kc),e(on,nn),e(nn,bc),e(on,wc),e(Fe,yc),e(Fe,ke),g(sn,ke,null),e(ke,Ec),e(ke,Lt),e(Lt,qc),e(Lt,cs),e(cs,Lc),e(Lt,Dc),e(Lt,Oa),e(Oa,zc),e(Lt,$c),e(ke,Fc),g(eo,ke,null),e(ke,xc),e(ke,Aa),e(Aa,Mc),e(ke,Sc),g(an,ke,null),h(o,Cr,p),h(o,Dt,p),e(Dt,to),e(to,Na),g(rn,Na,null),e(Dt,Cc),e(Dt,Pa),e(Pa,Oc),h(o,Or,p),h(o,xe,p),g(dn,xe,null),e(xe,Ac),e(xe,ln),e(ln,Nc),e(ln,hs),e(hs,Pc),e(ln,jc),e(xe,Ic),e(xe,cn),e(cn,Bc),e(cn,hn),e(hn,Gc),e(cn,Qc),e(xe,Hc),e(xe,H),g(pn,H,null),e(H,Wc),e(H,zt),e(zt,Uc),e(zt,ps),e(ps,Vc),e(zt,Rc),e(zt,ja),e(ja,Kc),e(zt,Xc),e(H,Jc),g(oo,H,null),e(H,Zc),e(H,Ia),e(Ia,Yc),e(H,eh),g(un,H,null),e(H,th),e(H,Ba),e(Ba,oh),e(H,nh),g(mn,H,null),h(o,Ar,p),h(o,$t,p),e($t,no),e(no,Ga),g(fn,Ga,null),e($t,sh),e($t,Qa),e(Qa,ah),h(o,Nr,p),h(o,he,p),g(_n,he,null),e(he,rh),e(he,Ha),e(Ha,dh),e(he,ih),e(he,gn),e(gn,lh),e(gn,us),e(us,ch),e(gn,hh),e(he,ph),e(he,vn),e(vn,uh),e(vn,Tn),e(Tn,mh),e(vn,fh),e(he,_h),e(he,N),g(kn,N,null),e(N,gh),e(N,Ft),e(Ft,vh),e(Ft,ms),e(ms,Th),e(Ft,kh),e(Ft,Wa),e(Wa,bh),e(Ft,wh),e(N,yh),g(so,N,null),e(N,Eh),e(N,Ua),e(Ua,qh),e(N,Lh),g(bn,N,null),e(N,Dh),g(wn,N,null),e(N,zh),e(N,Va),e(Va,$h),e(N,Fh),g(yn,N,null),e(N,xh),g(En,N,null),h(o,Pr,p),h(o,xt,p),e(xt,ao),e(ao,Ra),g(qn,Ra,null),e(xt,Mh),e(xt,Ka),e(Ka,Sh),h(o,jr,p),h(o,pe,p),g(Ln,pe,null),e(pe,Ch),e(pe,Mt),e(Mt,Oh),e(Mt,Xa),e(Xa,Ah),e(Mt,Nh),e(Mt,Ja),e(Ja,Ph),e(Mt,jh),e(pe,Ih),e(pe,Dn),e(Dn,Bh),e(Dn,fs),e(fs,Gh),e(Dn,Qh),e(pe,Hh),e(pe,zn),e(zn,Wh),e(zn,$n),e($n,Uh),e(zn,Vh),e(pe,Rh),e(pe,te),g(Fn,te,null),e(te,Kh),e(te,St),e(St,Xh),e(St,_s),e(_s,Jh),e(St,Zh),e(St,Za),e(Za,Yh),e(St,ep),e(te,tp),g(ro,te,null),e(te,op),e(te,Ya),e(Ya,np),e(te,sp),g(xn,te,null),e(te,ap),g(Mn,te,null),h(o,Ir,p),h(o,Ct,p),e(Ct,io),e(io,er),g(Sn,er,null),e(Ct,rp),e(Ct,tr),e(tr,dp),h(o,Br,p),h(o,ue,p),g(Cn,ue,null),e(ue,ip),e(ue,On),e(On,lp),e(On,gs),e(gs,cp),e(On,hp),e(ue,pp),e(ue,An),e(An,up),e(An,Nn),e(Nn,mp),e(An,fp),e(ue,_p),g(lo,ue,null),e(ue,gp),e(ue,be),g(Pn,be,null),e(be,vp),e(be,Ot),e(Ot,Tp),e(Ot,vs),e(vs,kp),e(Ot,bp),e(Ot,or),e(or,wp),e(Ot,yp),e(be,Ep),g(co,be,null),e(be,qp),e(be,nr),e(nr,Lp),e(be,Dp),g(jn,be,null),h(o,Gr,p),h(o,At,p),e(At,ho),e(ho,sr),g(In,sr,null),e(At,zp),e(At,ar),e(ar,$p),h(o,Qr,p),h(o,me,p),g(Bn,me,null),e(me,Fp),e(me,Gn),e(Gn,xp),e(Gn,Ts),e(Ts,Mp),e(Gn,Sp),e(me,Cp),e(me,Qn),e(Qn,Op),e(Qn,Hn),e(Hn,Ap),e(Qn,Np),e(me,Pp),g(po,me,null),e(me,jp),e(me,we),g(Wn,we,null),e(we,Ip),e(we,Nt),e(Nt,Bp),e(Nt,ks),e(ks,Gp),e(Nt,Qp),e(Nt,rr),e(rr,Hp),e(Nt,Wp),e(we,Up),g(uo,we,null),e(we,Vp),e(we,dr),e(dr,Rp),e(we,Kp),g(Un,we,null),Hr=!0},p(o,[p]){const Vn={};p&2&&(Vn.$$scope={dirty:p,ctx:o}),eo.$set(Vn);const ir={};p&2&&(ir.$$scope={dirty:p,ctx:o}),oo.$set(ir);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),so.$set(lr);const cr={};p&2&&(cr.$$scope={dirty:p,ctx:o}),ro.$set(cr);const Rn={};p&2&&(Rn.$$scope={dirty:p,ctx:o}),lo.$set(Rn);const hr={};p&2&&(hr.$$scope={dirty:p,ctx:o}),co.$set(hr);const pr={};p&2&&(pr.$$scope={dirty:p,ctx:o}),po.$set(pr);const ur={};p&2&&(ur.$$scope={dirty:p,ctx:o}),uo.$set(ur)},i(o){Hr||(v(y.$$.fragment,o),v(ne.$$.fragment,o),v(yo.$$.fragment,o),v(Eo.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v($o.$$.fragment,o),v(Fo.$$.fragment,o),v(xo.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Ao.$$.fragment,o),v(Po.$$.fragment,o),v(jo.$$.fragment,o),v(Io.$$.fragment,o),v(Bo.$$.fragment,o),v(Ho.$$.fragment,o),v(Wo.$$.fragment,o),v(Uo.$$.fragment,o),v(Vo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(en.$$.fragment,o),v(sn.$$.fragment,o),v(eo.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(dn.$$.fragment,o),v(pn.$$.fragment,o),v(oo.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(fn.$$.fragment,o),v(_n.$$.fragment,o),v(kn.$$.fragment,o),v(so.$$.fragment,o),v(bn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(En.$$.fragment,o),v(qn.$$.fragment,o),v(Ln.$$.fragment,o),v(Fn.$$.fragment,o),v(ro.$$.fragment,o),v(xn.$$.fragment,o),v(Mn.$$.fragment,o),v(Sn.$$.fragment,o),v(Cn.$$.fragment,o),v(lo.$$.fragment,o),v(Pn.$$.fragment,o),v(co.$$.fragment,o),v(jn.$$.fragment,o),v(In.$$.fragment,o),v(Bn.$$.fragment,o),v(po.$$.fragment,o),v(Wn.$$.fragment,o),v(uo.$$.fragment,o),v(Un.$$.fragment,o),Hr=!0)},o(o){T(y.$$.fragment,o),T(ne.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T($o.$$.fragment,o),T(Fo.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Ao.$$.fragment,o),T(Po.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Bo.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Vo.$$.fragment,o),T(Ro.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(sn.$$.fragment,o),T(eo.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(dn.$$.fragment,o),T(pn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(mn.$$.fragment,o),T(fn.$$.fragment,o),T(_n.$$.fragment,o),T(kn.$$.fragment,o),T(so.$$.fragment,o),T(bn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(qn.$$.fragment,o),T(Ln.$$.fragment,o),T(Fn.$$.fragment,o),T(ro.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(Sn.$$.fragment,o),T(Cn.$$.fragment,o),T(lo.$$.fragment,o),T(Pn.$$.fragment,o),T(co.$$.fragment,o),T(jn.$$.fragment,o),T(In.$$.fragment,o),T(Bn.$$.fragment,o),T(po.$$.fragment,o),T(Wn.$$.fragment,o),T(uo.$$.fragment,o),T(Un.$$.fragment,o),Hr=!1},d(o){t(u),o&&t(L),o&&t(b),k(y),o&&t(ge),o&&t(z),k(ne),o&&t(Me),o&&t(G),o&&t(A),o&&t(ve),o&&t(Se),o&&t(Te),o&&t(Ce),o&&t(C),o&&t(ee),o&&t(x),o&&t(_r),o&&t(Pt),o&&t(gr),o&&t(ht),k(yo),o&&t(vr),o&&t(O),k(Eo),k(Lo),k(Do),k($o),k(Fo),o&&t(Tr),o&&t(mt),k(xo),o&&t(kr),o&&t(P),k(Mo),k(Co),k(Ao),k(Po),k(jo),o&&t(br),o&&t(ft),k(Io),o&&t(wr),o&&t($e),k(Bo),o&&t(yr),o&&t(_t),k(Ho),o&&t(Er),o&&t(gt),k(Wo),o&&t(qr),o&&t(vt),k(Uo),o&&t(Lr),o&&t(Tt),k(Vo),o&&t(Dr),o&&t(kt),k(Ro),o&&t(zr),o&&t(bt),k(Ko),o&&t($r),o&&t(wt),k(Xo),o&&t(Fr),o&&t(yt),k(Jo),o&&t(xr),o&&t(Et),k(Zo),o&&t(Mr),o&&t(qt),k(Yo),o&&t(Sr),o&&t(Fe),k(en),k(sn),k(eo),k(an),o&&t(Cr),o&&t(Dt),k(rn),o&&t(Or),o&&t(xe),k(dn),k(pn),k(oo),k(un),k(mn),o&&t(Ar),o&&t($t),k(fn),o&&t(Nr),o&&t(he),k(_n),k(kn),k(so),k(bn),k(wn),k(yn),k(En),o&&t(Pr),o&&t(xt),k(qn),o&&t(jr),o&&t(pe),k(Ln),k(Fn),k(ro),k(xn),k(Mn),o&&t(Ir),o&&t(Ct),k(Sn),o&&t(Br),o&&t(ue),k(Cn),k(lo),k(Pn),k(co),k(jn),o&&t(Gr),o&&t(At),k(In),o&&t(Qr),o&&t(me),k(Bn),k(po),k(Wn),k(uo),k(Un)}}}const Rf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Kf(B){return Pf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t_ extends Cf{constructor(u){super();Of(this,u,Kf,Vf,Af,{})}}export{t_ as default,Rf as metadata};
